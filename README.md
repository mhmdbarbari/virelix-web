# VIRELIX website (React)

Software · Marketing · AI studio in Amman. **See. Analyze. Dominate.**

## Run

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # production build in dist/
npm run build:single   # one self-contained HTML file in dist-single/ (opens from disk)
```

## What's inside

| Part | Notes |
|---|---|
| Intro | Owl emerges from the dark, its eyes ignite, the wordmark draws itself. Once per visit, skippable, off for reduced motion. |
| Hero | The owl's eyes follow the cursor (wander on touch screens) and blink. |
| About | Manifesto words light up while scrolling, four values. |
| Services | "Build" and "Grow" columns joined by a glowing seam. |
| 3D owl | `#owl-3d`: ~50k glowing particles (Three.js, loaded on demand) gather into the owl while scrolling; drag to spin, the cursor scatters them. Falls back to the image without WebGL or with reduced motion. |
| Work | On desktop the section pins and the projects slide sideways like a film strip; tilt cards; `/work` has filters. |
| Website check | Box on the home page + `/check`: a live check of any site (speed, SEO, mobile & accessibility, security), key numbers, top fixes, and "send me the fix plan" pre-fills the contact form. |
| Process | Six phases on a line that fills as you scroll. |
| Stack, Impact, Blog, Contact | Marquee chips, counters, posts, form + WhatsApp + map. |
| Languages | English / Arabic (RTL) toggle, remembered per visitor. |

Routes: `/`, `/services/:id` (8 service pages), `/work`, `/work/:id` (project pages), `/start` (project planner),
`/careers`, `/check`, `/blog`, anything else → 404.

| Page | Notes |
|---|---|
| Service pages | Hero, what we deliver, process, tools, related work, FAQ, other services, contact. Copy in `src/pages-content.js`. |
| Project pages | Overview, what we built, services used, next project. |
| Project planner (`/start`) | Four questions → a brief with services, team, phases and what to prepare → pre-fills the contact form. |
| Careers | Values and an open-application form. |
| AI assistant ("Ask the owl") | Floating chat in EN/AR. Demo mode answers from site content; with `VITE_CHAT_ENDPOINT=/api/chat` and `ANTHROPIC_API_KEY` on Vercel it streams answers from Claude, grounded in `api/_knowledge.md` (regenerated on every `npm run build`). |
| Details | Magnetic buttons, scroll progress bar, services mega menu, footer link columns, sitemap. |

FAQ answers and "what we deliver" lists on the service pages are a first draft written from the current site:
please review them before launch.

## Editing content

All text (both languages), services, projects, posts and contact details live in **`src/content.js`**.

- **Contact form:** set `VITE_CONTACT_ENDPOINT` (Formspree, Getform, your API…) to receive messages; without it the
  form opens the visitor's email app pre-filled to `contact@vrelix.net`.
- **Instagram / TikTok:** set `CONTACT.instagram` / `CONTACT.tiktok`; the icons appear when set.
- **Projects:** replace the images in `src/assets/img/work-*.jpg` with real screenshots (they are currently cropped
  from a screen recording and are low resolution).
- **Owl:** `src/assets/img/owl-head.webp` (dark eyes; glowing irises are drawn in code) and `owl-head-eyes.webp`.
  Swap in the original artwork at higher resolution if available. Eye positions are set in `components/OwlEyes.jsx`.

- **Website check (`/check`):** set `PSI_KEY` for results that match Google exactly. With it, scores, metrics and
  fixes come from Google Lighthouse (the same test as pagespeed.web.dev, mobile), plus our extra checks (sitemap,
  robots.txt, social tags, security headers). Every result has a "Verify on Google PageSpeed" button.
  Get the key free: Google Cloud console → APIs & Services → enable "PageSpeed Insights API" → Credentials →
  Create API key. Put it in the hosting environment (Vercel → Settings → Environment Variables) and, for local
  testing, in a `.env` file next to `package.json` (`PSI_KEY=...`). Never commit it or paste it into chat.
  Without the key, `api/check.js` still runs its own live check (about 30 signals from the real page), which is
  accurate for what it checks but measures speed only from the server's response, not a full page render.
  Lighthouse scores move a few points between runs (network conditions); Google's own tool behaves the same.

## Hosting

`vercel.json` and `public/_redirects` send every URL to `index.html`, so `/work` and `/blog` work on Vercel/Netlify.

## Background videos

`public/videos/<service>.webm|mp4|jpg` (8 services) and `cta.*` are seamless 8-second motion loops made in code
(canvas, brand colors), not AI-generated. They play only while on screen and show the poster image for visitors who
prefer reduced motion. To replace one with an AI video, keep the same file names (1280×720 or 1920×1080, 8–10 s loop).
