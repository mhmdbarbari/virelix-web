// All site copy, in English and Arabic. English copy is taken from the current Virelix site.
// Facts (team size, services, contact details, projects) come from that site only: do not add
// clients, numbers or testimonials that Virelix has not confirmed.
import imgSalon from './assets/img/work-salon.jpg'
import imgAttas from './assets/img/work-attas.jpg'
import imgModel from './assets/img/work-model.jpg'

export const CONTACT = {
  email: 'contact@vrelix.net',
  phone: '+962 78 784 4005',
  phoneHref: 'tel:+962787844005',
  whatsapp: '962787844005',
  instagram: null,                 // e.g. 'https://instagram.com/virelix' (hidden while null)
  tiktok: null,                    // e.g. 'https://tiktok.com/@virelix'
  mapsUrl: 'https://maps.google.com/?q=King+Hussein+Business+Park+Amman',
  mapsEmbed: 'https://maps.google.com/maps?q=King%20Hussein%20Business%20Park%2C%20Amman&z=15&output=embed',
}

export const STACK = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'Flutter', 'Python', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Three.js', 'GSAP', 'Tailwind CSS']

// Services: `side` = build (code) or grow (marketing). Icons are drawn in components/Icon.jsx.
const SERVICES = [
  { id: 'web', side: 'build', icon: 'code' },
  { id: '3d', side: 'build', icon: 'cube' },
  { id: 'brand', side: 'build', icon: 'spark' },
  { id: 'content', side: 'build', icon: 'lens' },
  { id: 'ai', side: 'grow', icon: 'ai' },
  { id: 'social', side: 'grow', icon: 'orbit' },
  { id: 'ads', side: 'grow', icon: 'target' },
  { id: 'seo', side: 'grow', icon: 'rise' },
]

// Projects. `cat` drives the filters on /work. `image` null = drawn cover (brand gradient).
const WORK = [
  { id: 'salon', cat: ['web'], image: imgSalon, accent: '#7c4dff' },
  { id: 'attas', cat: ['web', 'branding'], image: imgAttas, accent: '#d4a64a' },
  { id: 'model', cat: ['web'], image: imgModel, accent: '#9aa3b5' },
  { id: 'night-owl', cat: ['branding'], image: null, accent: '#22d3ee' },
  { id: 'virelix', cat: ['web'], image: null, accent: '#8b5cf6' },
]

const POSTS = [
  { id: 'business-card', date: '2026-07', mins: 4 },
  { id: 'posting-every-day', date: '2026-05', mins: 5 },
]

const en = {
  dir: 'ltr',
  langName: 'English',
  switchTo: 'عربي',
  nav: { about: 'About', services: 'Services', process: 'Process', work: 'Work', blog: 'Blog', contact: 'Contact', quote: 'Get a quote', menu: 'Menu', close: 'Close' },
  intro: { tagline: ['See.', 'Analyze.', 'Dominate.'], sub: 'Software · Marketing · AI solutions', skip: 'Skip' },
  hero: {
    kicker: 'Software · Marketing · Growth',
    lines: ['We see.', 'We analyze.', 'We build brands', 'that dominate.'],
    lead: 'We’re a small team in Amman that builds websites and apps, then runs the marketing that gets people to them. One team, one timeline, one result you can actually measure.',
    cta: 'Start your project', cta2: 'See our work', scroll: 'Scroll',
    eye: 'Move your cursor. The owl is watching.',
  },
  about: {
    label: 'About',
    title: ['We notice the details others skip.', 'Then we build around them.'],
    body: 'VIRELIX is a software and marketing studio based in Amman. On one side we build: websites, apps and 3D web experiences. On the other we grow accounts: content, branding, AI-assisted campaigns, social and SEO.',
    body2: 'Six of us, working as one team instead of handing you off between departments. The owl in our mark is the whole idea: watch closely, understand what you’re looking at, then act on it.',
    values: [
      { t: 'We ship, not just pitch', d: 'You get working builds in weeks, not a deck full of promises.' },
      { t: 'One team, not five vendors', d: 'Design, code and marketing sit at the same table, so nothing gets lost in handoffs.' },
      { t: 'We watch the numbers', d: 'If something isn’t working, we change it. Opinions lose to data here.' },
      { t: 'We actually look', d: 'Before we build anything, we spend real time understanding your business, not just your brief.' },
    ],
  },
  services: {
    label: 'What we do',
    title: ['Code on one side.', 'Marketing on the other.'],
    build: 'Build', grow: 'Grow',
    buildSub: 'Websites, apps and brands that work as hard as they look.',
    growSub: 'Content and campaigns that bring the right people to them.',
    items: {
      web: { t: 'Web & app development', d: 'Websites and mobile apps built to actually convert visitors, not just look good in a screenshot.' },
      '3d': { t: '3D & animated websites', d: 'Scroll-driven, cinematic sites for brands that want to be remembered, not just visited.' },
      brand: { t: 'Branding & visual identity', d: 'Logo, colors, type and the rest of the system: built once, consistent everywhere after.' },
      content: { t: 'Content creation & production', d: 'Photography, filming and editing, produced end to end by our own in-house team.' },
      ai: { t: 'AI-powered campaigns', d: 'AI-generated video and imagery for campaigns, at a speed and price traditional production can’t match.' },
      social: { t: 'Social media management', d: 'A content calendar and daily management aimed at accounts that actually grow, not just post.' },
      ads: { t: 'Paid advertising', d: 'Meta, TikTok and Google campaigns run for return on spend, not just impressions.' },
      seo: { t: 'SEO', d: 'Technical fixes and content that move you up the rankings, and keep you there.' },
    },
  },
  process: {
    label: 'How we work',
    title: ['A process built', 'for momentum.'],
    phase: 'Phase',
    steps: [
      { t: 'Discover', d: 'We ask about your business, your users and your competitors before any design work starts.' },
      { t: 'Plan', d: 'A clear map of the site structure, content and how it should feel to move through.' },
      { t: 'Design', d: 'Typography, color, components and interactions, put together as one system, not one-off screens.' },
      { t: 'Develop', d: 'Production code, tested and checked against real performance numbers, not just “looks fine”.' },
      { t: 'Launch', d: 'Deployment, analytics and tracking set up before launch day, not scrambled together after.' },
      { t: 'Grow', d: 'We keep iterating and running campaigns after launch. The site isn’t “done”, it’s maintained.' },
    ],
  },
  stack: { label: 'Our stack', title: ['Technologies we', 'actually use.'] },
  work: {
    label: 'Selected work',
    title: ['A few projects', 'worth showing.'],
    pageTitle: ['Projects we', 'actually shipped.'],
    pageLead: 'Websites, apps, brands and campaigns built by our team in Amman for clients who wanted more than the usual.',
    all: 'View all projects',
    filters: { all: 'All', web: 'Web', branding: 'Branding' },
    view: 'View',
    items: {
      salon: { kind: 'SaaS dashboard', t: 'Salon Loyalty Platform', d: 'A subscription platform for salons: client management, QR loyalty cards and automated reminders that bring customers back.', tags: ['SaaS', 'Dashboard', 'QR loyalty'] },
      attas: { kind: 'E-commerce', t: 'Attas Jewelry', d: 'A luxury jewelry storefront with live gold pricing and a premium, editorial feel that matches the brand.', tags: ['E-commerce', 'Branding', 'UI/UX'] },
      model: { kind: 'E-commerce', t: 'Model', d: 'A men’s fashion store with a 3D-styled hero, multi-angle product photography and a bilingual shopping experience.', tags: ['E-commerce', 'UI/UX', 'Bilingual'] },
      'night-owl': { kind: 'Visual identity', t: 'Night Owl Identity', d: 'Logo, palette, typography and motion language for our own brand. The owl started here.', tags: ['Identity', 'Motion', 'AI art'] },
      virelix: { kind: 'Corporate website', t: 'Virelix Platform', d: 'Our own site, built the same way we build everyone else’s: the one you’re on right now.', tags: ['Web', '3D', 'Motion'] },
    },
  },
  numbers: {
    label: 'Impact',
    title: ['A few numbers', 'worth mentioning.'],
    items: [
      { v: 6, s: '', l: 'Specialists on the team' },
      { v: 8, s: '', l: 'Services under one roof' },
      { v: 2, s: '', l: 'Departments: code & growth' },
      { v: 100, s: '%', l: 'In-house production' },
    ],
  },
  blog: {
    label: 'Blog',
    title: ['Notes from', 'the work itself.'],
    lead: 'What we’ve actually learned building and marketing real projects. No filler, just what worked and what didn’t.',
    read: 'min read', all: 'All articles', soon: 'Full article coming soon',
    items: {
      'business-card': { tag: 'Strategy', t: 'A website is not a business card', d: 'Why a site that only says who you are leaves money on the table, and what it should be doing instead.' },
      'posting-every-day': { tag: 'Social media', t: 'Posting every day isn’t a strategy', d: 'Consistency without direction just produces a lot of content nobody asked for.' },
    },
  },
  contact: {
    label: 'Let’s talk',
    title: ['Got a project', 'in mind?'],
    lead: 'Tell us what you’re building. We reply within one working day.',
    name: 'Your name', email: 'Email address', company: 'Company (optional)', message: 'Tell us about your project',
    need: 'What do you need?', needs: ['Website', 'App', '3D website', 'Branding', 'Marketing', 'Not sure yet'],
    send: 'Send message', sending: 'Sending…',
    ok: '✓ Thanks! We’ll get back to you within one working day.',
    okMail: '✓ Your email app should now be open with your message ready to send.',
    fail: 'Something went wrong. Please email us or message us on WhatsApp.',
    errName: 'Please enter your name', errEmail: 'Please enter a valid email',
    emailL: 'Email', phoneL: 'Phone', locL: 'Location', whatsapp: 'Chat on WhatsApp',
    address: 'Al Hussein Business Park, Building 7, 3rd Floor, Office 301, Amman',
    hq: 'VIRELIX HQ', openMaps: 'Open in Google Maps',
  },
  cta: { title: ['Have a project', 'worth building?'], btn: 'Start your project' },
  footer: { city: 'Amman · Jordan', rights: 'All rights reserved.' },
  notFound: { t: 'Even the owl couldn’t find this page.', d: 'The link may be old or mistyped.', home: 'Back to home' },
  meta: { title: 'VIRELIX · Software, marketing & AI studio in Amman', desc: 'VIRELIX builds websites, apps and 3D web experiences, then runs the marketing that brings people to them. A software and marketing studio in Amman, Jordan.' },
}

const ar = {
  dir: 'rtl',
  langName: 'العربية',
  switchTo: 'EN',
  nav: { about: 'من نحن', services: 'خدماتنا', process: 'طريقة عملنا', work: 'أعمالنا', blog: 'المدونة', contact: 'تواصل', quote: 'اطلب عرض سعر', menu: 'القائمة', close: 'إغلاق' },
  intro: { tagline: ['نرى.', 'نحلّل.', 'نتفوّق.'], sub: 'برمجيات · تسويق · حلول ذكاء اصطناعي', skip: 'تخطٍّ' },
  hero: {
    kicker: 'برمجيات · تسويق · نمو',
    lines: ['نرى.', 'نحلّل.', 'نبني علامات', 'تتصدّر.'],
    lead: 'فريق صغير في عمّان يبني المواقع والتطبيقات، ثم يدير التسويق الذي يوصل الناس إليها. فريق واحد، جدول زمني واحد، ونتيجة تقدر تقيسها فعلاً.',
    cta: 'ابدأ مشروعك', cta2: 'شاهد أعمالنا', scroll: 'مرّر',
    eye: 'حرّك المؤشر… البومة تراقب.',
  },
  about: {
    label: 'من نحن',
    title: ['نلاحظ التفاصيل التي يتجاهلها غيرنا.', 'ثم نبني حولها.'],
    body: 'VIRELIX استوديو برمجيات وتسويق مقرّه عمّان. من جهة نبني: مواقع، تطبيقات، وتجارب ويب ثلاثية الأبعاد. ومن الجهة الأخرى ننمّي الحسابات: محتوى، هوية بصرية، حملات بمساعدة الذكاء الاصطناعي، سوشال ميديا وSEO.',
    body2: 'ستة أشخاص يعملون كفريق واحد، بدل أن تنتقل من قسم إلى آخر. والبومة في شعارنا هي الفكرة كلها: راقب جيداً، افهم ما تراه، ثم تصرّف.',
    values: [
      { t: 'نسلّم، لا نَعِد فقط', d: 'تحصل على نسخ عاملة خلال أسابيع، لا على عرض تقديمي مليء بالوعود.' },
      { t: 'فريق واحد، لا خمس شركات', d: 'التصميم والبرمجة والتسويق على طاولة واحدة، فلا يضيع شيء بين التسليمات.' },
      { t: 'نراقب الأرقام', d: 'إذا لم ينجح شيء، نغيّره. هنا البيانات تتغلّب على الآراء.' },
      { t: 'ننظر فعلاً', d: 'قبل أن نبني أي شيء، نقضي وقتاً حقيقياً في فهم عملك، لا مجرد قراءة الطلب.' },
    ],
  },
  services: {
    label: 'ماذا نقدّم',
    title: ['برمجة من جهة.', 'وتسويق من الجهة الأخرى.'],
    build: 'نبني', grow: 'ننمّي',
    buildSub: 'مواقع وتطبيقات وهويات تعمل بقدر ما تبدو جميلة.',
    growSub: 'محتوى وحملات توصل الأشخاص المناسبين إليها.',
    items: {
      web: { t: 'تطوير المواقع والتطبيقات', d: 'مواقع وتطبيقات موبايل مبنية لتحويل الزوار إلى عملاء، لا لتبدو جميلة في لقطة شاشة فقط.' },
      '3d': { t: 'مواقع ثلاثية الأبعاد ومتحركة', d: 'مواقع سينمائية تتفاعل مع التمرير، لعلامات تريد أن تُذكر لا أن تُزار فقط.' },
      brand: { t: 'الهوية البصرية', d: 'شعار، ألوان، خطوط وبقية النظام: تُبنى مرة واحدة، وتبقى متّسقة في كل مكان.' },
      content: { t: 'صناعة المحتوى والإنتاج', d: 'تصوير فوتوغرافي وفيديو ومونتاج، من البداية للنهاية بفريقنا الداخلي.' },
      ai: { t: 'حملات بالذكاء الاصطناعي', d: 'فيديو وصور مولّدة بالذكاء الاصطناعي لحملاتك، بسرعة وتكلفة لا يقدر عليها الإنتاج التقليدي.' },
      social: { t: 'إدارة السوشال ميديا', d: 'خطة محتوى وإدارة يومية هدفها حسابات تنمو فعلاً، لا حسابات تنشر فقط.' },
      ads: { t: 'الإعلانات الممولة', d: 'حملات على ميتا وتيك توك وجوجل تُدار من أجل العائد على الإنفاق، لا من أجل عدد المشاهدات.' },
      seo: { t: 'تحسين محركات البحث', d: 'إصلاحات تقنية ومحتوى يرفعك في نتائج البحث، ويبقيك هناك.' },
    },
  },
  process: {
    label: 'طريقة عملنا',
    title: ['منهجية مبنية', 'على الزخم.'],
    phase: 'المرحلة',
    steps: [
      { t: 'الاكتشاف', d: 'نسأل عن عملك وعملائك ومنافسيك قبل أن يبدأ أي تصميم.' },
      { t: 'التخطيط', d: 'خريطة واضحة لهيكل الموقع ومحتواه وكيف يجب أن يشعر الزائر وهو يتنقّل فيه.' },
      { t: 'التصميم', d: 'خطوط وألوان ومكوّنات وتفاعلات، مبنية كنظام واحد لا كشاشات منفصلة.' },
      { t: 'التطوير', d: 'كود إنتاجي مُختبَر ومقاس بأرقام أداء حقيقية، لا بعبارة "يبدو جيداً".' },
      { t: 'الإطلاق', d: 'النشر والتحليلات والتتبّع جاهزة قبل يوم الإطلاق، لا تُرتّب على عجل بعده.' },
      { t: 'النمو', d: 'نستمر في التحسين وإدارة الحملات بعد الإطلاق. الموقع لا "ينتهي"، بل تتم رعايته.' },
    ],
  },
  stack: { label: 'تقنياتنا', title: ['تقنيات', 'نستخدمها فعلاً.'] },
  work: {
    label: 'أعمال مختارة',
    title: ['مشاريع', 'تستحق العرض.'],
    pageTitle: ['مشاريع', 'سلّمناها فعلاً.'],
    pageLead: 'مواقع وتطبيقات وهويات وحملات بناها فريقنا في عمّان لعملاء أرادوا أكثر من المعتاد.',
    all: 'كل المشاريع',
    filters: { all: 'الكل', web: 'ويب', branding: 'هوية بصرية' },
    view: 'عرض',
    items: {
      salon: { kind: 'لوحة تحكم SaaS', t: 'منصة ولاء للصالونات', d: 'منصة اشتراكات للصالونات: إدارة العملاء، بطاقات ولاء QR، وتذكيرات تلقائية تعيد العملاء.', tags: ['SaaS', 'لوحة تحكم', 'ولاء QR'] },
      attas: { kind: 'متجر إلكتروني', t: 'مجوهرات العطّاس', d: 'متجر مجوهرات فاخر بأسعار ذهب مباشرة وطابع راقٍ يليق بالعلامة.', tags: ['متجر إلكتروني', 'هوية', 'UI/UX'] },
      model: { kind: 'متجر إلكتروني', t: 'Model', d: 'متجر أزياء رجالية بواجهة بطابع ثلاثي الأبعاد، وتصوير منتجات من عدة زوايا، وتجربة تسوّق بلغتين.', tags: ['متجر إلكتروني', 'UI/UX', 'ثنائي اللغة'] },
      'night-owl': { kind: 'هوية بصرية', t: 'هوية Night Owl', d: 'الشعار والألوان والخطوط ولغة الحركة لعلامتنا نحن. من هنا بدأت البومة.', tags: ['هوية', 'حركة', 'فن AI'] },
      virelix: { kind: 'موقع شركة', t: 'منصة VIRELIX', d: 'موقعنا نحن، مبني بنفس الطريقة التي نبني بها مواقع عملائنا: الموقع الذي تتصفّحه الآن.', tags: ['ويب', '3D', 'حركة'] },
    },
  },
  numbers: {
    label: 'الأثر',
    title: ['أرقام', 'تستحق الذكر.'],
    items: [
      { v: 6, s: '', l: 'متخصصين في الفريق' },
      { v: 8, s: '', l: 'خدمات تحت سقف واحد' },
      { v: 2, s: '', l: 'قسمان: برمجة ونمو' },
      { v: 100, s: '%', l: 'إنتاج داخلي' },
    ],
  },
  blog: {
    label: 'المدونة',
    title: ['ملاحظات', 'من قلب العمل.'],
    lead: 'ما تعلّمناه فعلاً من بناء وتسويق مشاريع حقيقية. بلا حشو، فقط ما نجح وما لم ينجح.',
    read: 'دقائق قراءة', all: 'كل المقالات', soon: 'المقال الكامل قريباً',
    items: {
      'business-card': { tag: 'استراتيجية', t: 'الموقع ليس بطاقة عمل', d: 'لماذا الموقع الذي يقول من أنت فقط يضيّع عليك فرصاً، وما الذي يجب أن يفعله بدلاً من ذلك.' },
      'posting-every-day': { tag: 'سوشال ميديا', t: 'النشر كل يوم ليس استراتيجية', d: 'الاستمرارية بلا اتجاه تنتج فقط محتوى كثيراً لم يطلبه أحد.' },
    },
  },
  contact: {
    label: 'لنتحدّث',
    title: ['عندك مشروع', 'في بالك؟'],
    lead: 'أخبرنا ماذا تبني. نردّ خلال يوم عمل واحد.',
    name: 'اسمك', email: 'البريد الإلكتروني', company: 'الشركة (اختياري)', message: 'حدّثنا عن مشروعك',
    need: 'ماذا تحتاج؟', needs: ['موقع', 'تطبيق', 'موقع 3D', 'هوية بصرية', 'تسويق', 'لست متأكداً بعد'],
    send: 'أرسل الرسالة', sending: 'جارٍ الإرسال…',
    ok: '✓ شكراً! سنعود إليك خلال يوم عمل واحد.',
    okMail: '✓ يجب أن يكون تطبيق البريد مفتوحاً الآن ورسالتك جاهزة للإرسال.',
    fail: 'حدث خطأ. راسلنا عبر البريد أو واتساب.',
    errName: 'الرجاء إدخال اسمك', errEmail: 'الرجاء إدخال بريد إلكتروني صحيح',
    emailL: 'البريد', phoneL: 'الهاتف', locL: 'الموقع', whatsapp: 'تحدّث معنا على واتساب',
    address: 'مجمّع الملك الحسين للأعمال، مبنى 7، الطابق الثالث، مكتب 301، عمّان',
    hq: 'مقر VIRELIX', openMaps: 'افتح في خرائط جوجل',
  },
  cta: { title: ['عندك مشروع', 'يستحق أن يُبنى؟'], btn: 'ابدأ مشروعك' },
  footer: { city: 'عمّان · الأردن', rights: 'جميع الحقوق محفوظة.' },
  notFound: { t: 'حتى البومة لم تجد هذه الصفحة.', d: 'ربما الرابط قديم أو فيه خطأ.', home: 'العودة للرئيسية' },
  meta: { title: 'VIRELIX · استوديو برمجيات وتسويق وذكاء اصطناعي في عمّان', desc: 'VIRELIX تبني المواقع والتطبيقات وتجارب الويب ثلاثية الأبعاد، ثم تدير التسويق الذي يوصل الناس إليها. استوديو برمجيات وتسويق في عمّان، الأردن.' },
}

export const COPY = { en, ar }
export { SERVICES, WORK, POSTS }
