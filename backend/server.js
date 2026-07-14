// load backend/.env when it exists (local dev); on hosts like Render the
// real environment variables are injected directly, so this just no-ops
try { process.loadEnvFile() } catch { /* no .env file present — that's fine */ }

const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5001

// paste your Atlas connection string in backend/.env as MONGODB_URI=...
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'
const DB_NAME = process.env.MONGODB_DB || 'virelix'

const client = new MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 6000 })
let contacts = null // set once connected; endpoint answers 503 until then

// --- email notifications (optional: activates when GMAIL_APP_PASSWORD is set) ---
const GMAIL_USER = process.env.GMAIL_USER || ''
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s/g, '')
const NOTIFY_TO = process.env.NOTIFY_TO || GMAIL_USER
const mailEnabled = GMAIL_USER && GMAIL_APP_PASSWORD && !GMAIL_APP_PASSWORD.includes('PASTE')
const mailer = mailEnabled
  ? nodemailer.createTransport({ service: 'gmail', auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD } })
  : null
if (!mailEnabled) console.log('email notifications OFF (set GMAIL_APP_PASSWORD in .env to enable)')

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function notifyByEmail(row) {
  if (!mailer) return
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e2e2ef;border-radius:12px;overflow:hidden">
      <div style="background:#0a0a12;padding:22px 26px">
        <span style="color:#fff;font-size:18px;font-weight:bold;letter-spacing:2px">VIRE<span style="color:#8a5cff">LIX</span></span>
        <span style="color:#8b93a7;font-size:12px;float:right;margin-top:4px">New website message</span>
      </div>
      <div style="padding:26px;background:#fafaff">
        <p style="margin:0 0 6px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px">From</p>
        <p style="margin:0 0 18px;font-size:16px;color:#191430"><b>${esc(row.name)}</b> &lt;${esc(row.email)}&gt;${row.company ? ' — ' + esc(row.company) : ''}</p>
        <p style="margin:0 0 6px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px">Message</p>
        <p style="margin:0;font-size:15px;line-height:1.8;color:#191430;white-space:pre-wrap">${esc(row.message)}</p>
      </div>
      <div style="padding:14px 26px;background:#f0f0f8;color:#8b8ba8;font-size:11px">
        Reply to this email to answer ${esc(row.name)} directly.
      </div>
    </div>`
  mailer.sendMail({
    from: `"VIRELIX Website" <${GMAIL_USER}>`,
    to: NOTIFY_TO,
    replyTo: `"${row.name}" <${row.email}>`,
    subject: `📩 New message from ${row.name} — VIRELIX website`,
    html,
  }).then(() => console.log(`notification email sent for ${row.email}`))
    .catch(err => console.error('email notify failed:', err.message))
}

async function connectDB() {
  try {
    await client.connect()
    const db = client.db(DB_NAME)

    // schema enforced by the database itself, not just the app
    const validator = {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'email', 'message', 'createdAt'],
        properties: {
          name: { bsonType: 'string', minLength: 2, maxLength: 100 },
          email: { bsonType: 'string', maxLength: 150 },
          company: { bsonType: 'string', maxLength: 150 },
          message: { bsonType: 'string', minLength: 4, maxLength: 3000 },
          createdAt: { bsonType: 'date' },
        },
      },
    }
    const existing = await db.listCollections({ name: 'contacts' }).toArray()
    if (existing.length === 0) {
      await db.createCollection('contacts', { validator })
    } else {
      await db.command({ collMod: 'contacts', validator }).catch(() => {})
    }

    contacts = db.collection('contacts')
    await contacts.createIndex({ createdAt: -1 })
    console.log(`connected to MongoDB — db "${DB_NAME}"`)
  } catch (err) {
    console.error('MongoDB connection failed:', err.message)
    console.error('retrying in 10s…')
    setTimeout(connectDB, 10000)
  }
}
connectDB()

// set ALLOWED_ORIGIN in Render's env vars to your live frontend domain once it's live
// (e.g. https://virelix.com) to stop other sites from calling this API; '*' allows any origin
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*'
app.use(cors({ origin: ALLOWED_ORIGIN === '*' ? true : ALLOWED_ORIGIN }))
app.use(express.json({ limit: '32kb' }))

// --- naive per-IP rate limit: max 5 messages per 10 minutes ---
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter(t => now - t < WINDOW_MS)
  if (list.length >= MAX_PER_WINDOW) { hits.set(ip, list); return true }
  list.push(now)
  hits.set(ip, list)
  return false
}
setInterval(() => {
  const now = Date.now()
  for (const [ip, list] of hits) {
    const fresh = list.filter(t => now - t < WINDOW_MS)
    if (fresh.length) hits.set(ip, fresh)
    else hits.delete(ip)
  }
}, WINDOW_MS).unref()

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function validate({ name, email, company, message }) {
  const errors = {}
  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) errors.name = 'Name must be 2-100 characters'
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim()) || email.trim().length > 150) errors.email = 'Invalid email address'
  if (company != null && (typeof company !== 'string' || company.length > 150)) errors.company = 'Company must be under 150 characters'
  if (typeof message !== 'string' || message.trim().length < 4 || message.trim().length > 3000) errors.message = 'Message must be 4-3000 characters'
  return errors
}

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, service: 'virelix-backend', db: contacts ? 'connected' : 'connecting' }))

app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many messages. Please try again later.' })
  }

  const errors = validate(req.body || {})
  if (Object.keys(errors).length) {
    return res.status(400).json({ error: 'Validation failed', fields: errors })
  }

  if (!contacts) {
    return res.status(503).json({ error: 'Database not ready. Please try again shortly.' })
  }

  const { name, email, company, message } = req.body
  try {
    await contacts.insertOne({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: (company || '').trim(),
      message: message.trim(),
      createdAt: new Date(),
    })
    console.log(`message saved from ${name.trim()} <${email.trim()}>`)
    notifyByEmail({ name: name.trim(), email: email.trim(), company: (company || '').trim(), message: message.trim() })
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('insert failed:', err.message)
    res.status(500).json({ error: 'Failed to save message' })
  }
})

// 0.0.0.0 so other devices on the same network can reach this API too
app.listen(PORT, '0.0.0.0', () => {
  console.log(`virelix backend running on http://localhost:${PORT} (and on your LAN IP)`)
})
