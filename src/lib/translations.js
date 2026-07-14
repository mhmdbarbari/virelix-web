// Central translation dictionary. English is the source of truth for layout;
// Arabic is a full, natural translation (not literal word-for-word) — see i18n.jsx for lookup logic.

const postsEn = [
  {
    slug: 'why-your-business-needs-more-than-a-website',
    cat: 'Strategy', date: 'Jul 2026', read: '4 min',
    title: 'Why your business needs more than "just a website"',
    intro: 'A website that only exists is a business card. A website that performs is a salesperson working 24/7.',
    body: [
      'Most businesses in our region treat a website as a checkbox: buy a domain, put up five pages, done. Then they wonder why it never brings a single client. The truth is simple — a website with no strategy behind it is invisible.',
      'A performing website starts before design: who is it for, what should a visitor do in the first ten seconds, and what makes them trust you enough to call? Every section, every animation and every word should push toward that one action.',
      'That is why we build websites and marketing together. Speed, SEO, clear messaging and a design that feels alive — when these work as one system, the website stops being a cost and becomes the cheapest employee you ever hired.',
    ],
  },
  {
    slug: 'ai-content-real-results',
    cat: 'AI Marketing', date: 'Jul 2026', read: '5 min',
    title: 'AI content that actually converts — not just impresses',
    intro: 'Everyone can generate an AI image now. Very few can turn AI into campaigns that sell.',
    body: [
      'AI tools made content cheap. That is exactly the problem — feeds are flooded with generic AI visuals that all look the same, and audiences learned to scroll past them in half a second.',
      'What still works is direction: a real concept, a brand voice, and AI used as a production engine rather than an idea machine. We storyboard first, define the message, then use AI to produce video and imagery at a speed and cost that traditional production cannot touch.',
      'The result is campaign creative that looks premium, ships in days instead of weeks, and can be tested in ten variations at once. AI does not replace the marketer — it multiplies the good ones.',
    ],
  },
  {
    slug: 'seo-in-jordan-what-works',
    cat: 'SEO', date: 'Jun 2026', read: '6 min',
    title: 'SEO for local businesses: what actually moves the needle',
    intro: 'Ranking is not magic. It is structure, content and patience — in that order.',
    body: [
      'When a local business asks us about SEO, the first thing we check is not keywords — it is structure. Slow pages, broken headings and missing meta data kill rankings before content even gets a chance.',
      'Then comes search intent. People do not search for slogans; they search for problems. Pages that answer a specific question — clearly, in the language your customers actually use — outrank pretty pages every time.',
      'Finally, consistency. Google rewards sites that stay alive: fresh content, working links, real engagement. SEO is not a one-time service, it is a habit. The businesses that win are the ones still publishing six months in.',
    ],
  },
  {
    slug: 'why-3d-and-motion-websites-win',
    cat: 'Web Design', date: 'Jun 2026', read: '4 min',
    title: 'Why 3D and motion websites win attention',
    intro: 'Attention is the most expensive currency online. Motion buys it — when it is done right.',
    body: [
      'A visitor decides in seconds whether your brand feels premium or forgettable. Static template sites all blur together; a site with depth, motion and personality gets remembered and shared.',
      'But motion has rules. It must serve the story — guide the eye, reveal content, reward scrolling — not fight the user. Heavy effects that slow the page or block reading do more damage than a plain site.',
      'Our approach: cinematic on the surface, disciplined underneath. Fast load, smooth scroll-driven animation, and a clear path to contact. That combination is what turns "wow" into an actual inquiry.',
    ],
  },
  {
    slug: 'social-media-management-that-grows',
    cat: 'Social Media', date: 'May 2026', read: '5 min',
    title: 'Posting is not a strategy: how real account growth works',
    intro: 'Daily posts mean nothing without a direction. Growth comes from a system, not activity.',
    body: [
      'The most common mistake we see: accounts posting every day with no plan, then judging results by likes. Likes do not pay salaries — reach, saves, messages and conversions do.',
      'A real system starts with pillars: what topics you own, what formats perform on each platform, and what one action you want from every post. Content is then produced in batches — filming days, editing pipelines, AI-assisted variations — so quality stays high without burning out.',
      'Then the numbers do the talking. We review what performed weekly, double down on winners, and cut what the audience ignored. Within a few months the account stops guessing and starts compounding.',
    ],
  },
]

const postsAr = [
  {
    slug: 'why-your-business-needs-more-than-a-website',
    cat: 'استراتيجية', date: 'يوليو 2026', read: '٤ دقائق',
    title: 'ليش مشروعك بحاجة أكتر من "موقع بس"',
    intro: 'الموقع يلي بس "موجود" هو بطاقة عمل. الموقع يلي "شغال فعليًا" هو موظف مبيعات بيشتغل 24 ساعة باليوم.',
    body: [
      'أغلب الشركات بمنطقتنا بتتعامل مع الموقع كأنه "شيك بوكس": يشتروا دومين، يحطوا خمس صفحات، وخلص. وبعدين بيتساءلوا ليش الموقع ما جابلهم ولا عميل واحد. الحقيقة بسيطة — الموقع يلي ما وراه استراتيجية بيضل غير مرئي.',
      'الموقع يلي بيشتغل فعليًا بيبلش قبل التصميم: مين الجمهور المستهدف، شو المفروض الزائر يعمله بأول عشر ثواني، وشو يلي بيخليه يوثق فيك لدرجة يتصل؟ كل قسم، كل حركة، وكل كلمة لازم تدفع نحو هالهدف الوحيد.',
      'لهيك إحنا منبني المواقع والتسويق مع بعض. السرعة، الـSEO، الرسالة الواضحة، والتصميم يلي حسّاس بالحياة — لما هاد كله يشتغل كنظام واحد، الموقع بيوقف يكون مصروف وبيصير أرخص موظف وظّفته بحياتك.',
    ],
  },
  {
    slug: 'ai-content-real-results',
    cat: 'تسويق بالذكاء الاصطناعي', date: 'يوليو 2026', read: '٥ دقائق',
    title: 'محتوى الذكاء الاصطناعي يلي فعليًا "بيبيع" — مو بس بيبهر',
    intro: 'هلق أي حدا فيه يولّد صورة بالذكاء الاصطناعي. بس قليلين يقدروا يحوّلوا الذكاء الاصطناعي لحملات فعليًا بتبيع.',
    body: [
      'أدوات الذكاء الاصطناعي خلّت المحتوى رخيص. وهاي بالضبط المشكلة — الفيدات غرقانة بصور AI عامة كلها شكلها نفس الشكل، والجمهور تعلّم يتخطاها بنص ثانية.',
      'يلي لسا شغال هو الاتجاه: فكرة حقيقية، صوت واضح للعلامة التجارية، واستخدام الذكاء الاصطناعي كمحرك إنتاج مو كآلة أفكار. إحنا منبلش بالستوري بورد، منحدد الرسالة، وبعدين منستخدم الذكاء الاصطناعي لإنتاج الفيديو والصور بسرعة وتكلفة ما يقدر عليها الإنتاج التقليدي أبدًا.',
      'النتيجة محتوى إعلاني شكله فخم، بينسلّم بأيام مو أسابيع، وفيك تجرب عشر نسخ منه بنفس الوقت. الذكاء الاصطناعي ما بيستبدل المسوّق — بيضاعف قدرات المسوّق الشاطر.',
    ],
  },
  {
    slug: 'seo-in-jordan-what-works',
    cat: 'تحسين محركات البحث', date: 'يونيو 2026', read: '٦ دقائق',
    title: 'الـSEO للشركات المحلية: شو يلي فعليًا بيأثر',
    intro: 'الترتيب بمحركات البحث مش سحر. هو بنية تقنية، محتوى، وصبر — بهاد الترتيب بالضبط.',
    body: [
      'لما شركة محلية تسألنا عن الـSEO، أول شي منفحصه مو الكلمات المفتاحية — هو البنية التقنية. الصفحات البطيئة، العناوين المكسورة، والبيانات الوصفية الناقصة بتقتل الترتيب قبل ما المحتوى ياخذ فرصته أصلًا.',
      'وبعدها جاية نية البحث. الناس ما بتدور على شعارات؛ بتدور على حلول لمشاكلها. الصفحات يلي بتجاوب على سؤال محدد — بوضوح، وباللغة يلي عملاءك فعليًا بيحكوا فيها — بتتصدّر دايمًا على الصفحات الحلوة الشكل بس.',
      'وأخيرًا، الاستمرارية. جوجل بتكافئ المواقع يلي "حية" وفعّالة: محتوى جديد، روابط شغالة، وتفاعل حقيقي. الـSEO مش خدمة مرة وحدة، هو عادة. الشركات يلي بتكسب هي يلي لسا عم تنشر محتوى بعد ستة أشهر.',
    ],
  },
  {
    slug: 'why-3d-and-motion-websites-win',
    cat: 'تصميم مواقع', date: 'يونيو 2026', read: '٤ دقائق',
    title: 'ليش المواقع ثلاثية الأبعاد والمتحركة بتكسب الانتباه',
    intro: 'الانتباه هو أغلى عملة عالإنترنت. والحركة بتشتريه — لما تكون متقنة صح.',
    body: [
      'الزائر بيقرر بثواني إذا علامتك التجارية حاسة فخمة أو منسية. المواقع الجامدة المبنية على قوالب كلها بتتشابه وتنمسح من الذاكرة؛ بس الموقع يلي فيه عمق وحركة وشخصية بينحفظ وبينشارك.',
      'بس الحركة إلها قواعد. لازم تخدم القصة — توجّه العين، تكشف المحتوى، وتكافئ السكرول — مو تعاند المستخدم. التأثيرات الثقيلة يلي بتبطّئ الصفحة أو تعيق القراءة بتضر أكتر من موقع بسيط.',
      'طريقتنا: سينمائي من فوق، منظم ومنضبط من تحت. تحميل سريع، حركة سلسة مرتبطة بالسكرول، ومسار واضح للتواصل. هاد المزيج هو يلي بيحوّل "واو" لطلب فعلي.',
    ],
  },
  {
    slug: 'social-media-management-that-grows',
    cat: 'سوشال ميديا', date: 'مايو 2026', read: '٥ دقائق',
    title: 'النشر لحاله مش استراتيجية: كيف فعليًا بيكبر الحساب',
    intro: 'النشر اليومي ما بيعني شي من غير اتجاه واضح. النمو الحقيقي بيجي من نظام، مو من مجرد نشاط.',
    body: [
      'أكتر غلطة منشوفها: حسابات بتنشر كل يوم بدون خطة، وبعدين بتحكم على النتائج باللايكات. اللايك ما بيدفع رواتب — الوصول، الحفظ، الرسايل، والتحويلات هي يلي بتدفع.',
      'النظام الحقيقي بيبلش بمحاور واضحة: شو المواضيع يلي إنت خبير فيها، شو الفورمات يلي بتنجح بكل منصة، وشو الأكشن الوحيد يلي بدك ياه من كل منشور. وبعدين المحتوى بينتج على دفعات — أيام تصوير، مسارات مونتاج، ونسخ مساعدة بالذكاء الاصطناعي — عشان الجودة تضل عالية بدون ما الفريق يحترق.',
      'وبعدين الأرقام بتحكي. منراجع الأداء أسبوعيًا، منركّز أكتر على يلي نجح، ومنوقف يلي الجمهور تجاهله. وبكم شهر بس، الحساب بيوقف يخمّن ويبلش يراكم نتائج فعلية.',
    ],
  },
]

export const translations = {
  en: {
    nav: { about: 'About', services: 'Services', process: 'Process', work: 'Work', blog: 'Blog', contact: 'Contact', quote: 'Get A Quote', langToggle: 'AR' },
    loader: {
      messages: ['Initializing VIRELIX…', 'Loading AI Core…', 'Connecting Servers…', 'Preparing Experience…', 'Launching Digital World…'],
    },
    intro: { skip: 'Skip →' },
    hero: {
      eyebrow: 'Software · Marketing · Growth',
      lines: ['We See.', 'We Analyze.', 'We Build Brands', 'That Dominate.'],
      sub: 'Smart software. Strategic marketing. Real growth. Measurable results. VIRELIX helps brands see deeper, think smarter, and grow faster.',
      ctaPrimary: 'Our Services',
      ctaGhost: 'Get A Quote',
      meta: ['AMMAN · JORDAN', 'SEE. ANALYZE. DOMINATE.', 'SOFTWARE + MARKETING'],
      scrollCue: 'Scroll',
    },
    about: {
      eyebrow: '01 — Who We Are',
      title: 'We see what others miss. ', titleEm: 'Then we build it.',
      lead1: 'VIRELIX is a software and marketing company based in Amman. On one side we build — websites, mobile apps and immersive 3D experiences. On the other we grow — content, visual identity, AI-powered campaigns, social media and SEO.',
      lead2: "A team of six specialists, one standard: work that looks premium and performs even better. Like the owl in our mark — we don't guess. We analyze. We grow.",
      terminalName: 'virelix — build.ts',
      values: [
        { icon: '🚀', title: 'Smart Growth', text: "We turn data into action and accelerate your brand's growth." },
        { icon: '🧠', title: 'AI Powered', text: 'We build intelligent solutions powered by AI and automation.' },
        { icon: '📈', title: 'Max Impact', text: 'Marketing that reaches the right people and delivers results.' },
        { icon: '🦉', title: 'Clear Vision', text: 'We see what others miss and create strategies that lead the market.' },
      ],
    },
    services: {
      eyebrow: '02 — What We Do',
      title: 'Code on one side. ', titleEm: 'Marketing on the other.',
      items: [
        { icon: '</>', title: 'Web & App Development', text: 'High-performance websites and mobile apps engineered to convert — fast, animated and built to grow with you.' },
        { icon: '◈', title: '3D & Animated Websites', text: "Immersive, scroll-driven 3D experiences and cinematic motion that make your brand impossible to forget." },
        { icon: '✦', title: 'Branding & Visual Identity', text: 'Logos, palettes and full identity systems that make your company impossible to confuse with anyone else.' },
        { icon: '◉', title: 'Content Creation & Production', text: 'Photography, filming and montage — scroll-stopping content produced end to end by our in-house team.' },
        { icon: '⌬', title: 'AI-Powered Campaigns', text: "AI-generated videos, imagery and ad creatives — premium campaign visuals at a speed traditional production can't match." },
        { icon: '❍', title: 'Social Media Management', text: 'Strategy, content calendars and daily management that turn your pages into channels that actually grow.' },
        { icon: '▲', title: 'Paid Advertising', text: 'Funded campaigns on Meta, TikTok and Google — planned, launched and optimized for real return, not just reach.' },
        { icon: '↗', title: 'SEO', text: 'Technical SEO and content strategy that move you up the rankings and keep you there.' },
      ],
    },
    process: {
      eyebrow: '03 — How We Work',
      title: 'A process built for ', titleEm: 'momentum.', phaseLabel: 'PHASE',
      steps: [
        { title: 'Discover', text: 'We map your business, your users and your competitors before a single pixel exists.' },
        { title: 'Plan', text: 'Architecture, content strategy and a motion language — the blueprint of the experience.' },
        { title: 'Design', text: 'A complete design system: typography, color, components and cinematic interactions.' },
        { title: 'Develop', text: 'Production-grade code — typed, tested, optimized for Core Web Vitals from day one.' },
        { title: 'Launch', text: 'Deployment, analytics, SEO and monitoring. Your product goes live with confidence.' },
        { title: 'Grow', text: 'Iteration, campaigns and automation that compound results month after month.' },
      ],
    },
    tech: { eyebrow: '04 — Our Stack', title: 'Technologies we ', titleEm: 'master.' },
    portfolio: {
      eyebrow: '05 — Selected Work',
      title: 'Projects that ', titleEm: 'moved the needle.',
      viewAll: 'View All Projects',
      items: [
        { art: 'a1', tag: 'E-Commerce Platform', title: 'Aurora Market', text: 'A headless commerce experience that lifted conversion by 42% in the first quarter.', stack: ['Next.js', 'PostgreSQL', 'Stripe', 'GSAP'] },
        { art: 'a2', tag: 'AI Product', title: 'Sentinel AI', text: 'An intelligent operations copilot automating 3,000+ support decisions per day.', stack: ['Python', 'React', 'LLM APIs', 'AWS'] },
        { art: 'a3', tag: 'Brand & Mobile', title: 'Nova Fitness', text: 'Full rebrand plus a Flutter app that reached 100K downloads in six months.', stack: ['Flutter', 'Firebase', 'Brand System'] },
      ],
    },
    stats: {
      eyebrow: '06 — Impact', title: 'Numbers that ', titleEm: 'speak.',
      items: [
        { count: 6, suffix: '', label: 'Specialists On The Team' },
        { count: 8, suffix: '', label: 'Services Under One Roof' },
        { count: 2, suffix: '', label: 'Departments — Code & Growth' },
        { count: 100, suffix: '%', label: 'In-House Production' },
      ],
    },
    testimonials: {
      eyebrow: '07 — Client Voices', title: 'Trusted by teams who ', titleEm: 'demand more.',
      quotes: [
        { text: '"VIRELIX didn\'t just build our website — they built the way our customers feel about us. The launch tripled our qualified leads."', av: 'SK', name: 'Sara K.', role: 'CEO — AURORA MARKET' },
        { text: '"The AI system they delivered removed 60% of our manual workload. Precision engineering with a designer\'s eye."', av: 'OM', name: 'Omar M.', role: 'COO — SENTINEL LOGISTICS' },
        { text: '"Every agency promises \'premium\'. VIRELIX is the first one that actually shipped it — on time, on budget, unforgettable."', av: 'LH', name: 'Lina H.', role: 'FOUNDER — NOVA FITNESS' },
      ],
    },
    contact: {
      eyebrow: "08 — Let's Talk", title: 'Ready to build ', titleEm: 'something unforgettable?',
      form: {
        name: 'Your name', email: 'Email address', company: 'Company (optional)', message: 'Tell us about your project',
        required: 'REQUIRED', invalidEmail: 'INVALID EMAIL',
        send: 'Send Message', sending: 'Sending…',
        success: 'Message received. The VIRELIX team will get back to you within 24 hours. ✦',
        errorRate: 'Too many messages — please try again in a few minutes.',
        errorGeneric: 'Something went wrong. Please try again, or reach us on WhatsApp.',
        errorNetwork: 'Could not reach the server. Please try again, or reach us on WhatsApp.',
      },
      info: [
        { icon: '✉', title: 'Email', value: 'virelixinfo@gmail.com' },
        { icon: '◷', title: 'Phone', value: '+962 78 784 4005' },
        { icon: '◎', title: 'Location', value: 'Al Hussein Business Park — Building 7, 3rd Floor, Office 301, Amman' },
      ],
      map: { hq: 'VIRELIX HQ', address: 'Al Hussein Business Park · Building 7 · 3rd Floor · Office 301', open: 'Open in Google Maps' },
    },
    footer: {
      eyebrow: 'The Final Frame', title: 'Ready To Build ', titleEm: 'The Future?',
      cta: 'Start Your Project',
      tagline: 'SEE. ANALYZE. DOMINATE.', location: 'AMMAN · JORDAN · +962 78 784 4005',
      locationShort: 'AMMAN · JORDAN',
    },
    work: {
      eyebrow: 'Our Work', title: 'Projects we ', titleEm: 'brought to life.',
      lead: 'Websites, apps, brands and campaigns — built by our team in Amman and shipped to clients who wanted more than ordinary.',
      filters: { All: 'All', Web: 'Web', Mobile: 'Mobile', Branding: 'Branding', Campaigns: 'Campaigns', Social: 'Social' },
      projects: [
        { cat: 'Web', art: 'a1', tag: 'Corporate Website', title: 'Virelix Platform', text: 'Our own animated 3D brand experience — the site you are looking at right now.', stack: ['React', 'GSAP', 'Vite'] },
        { cat: 'Branding', art: 'a3', tag: 'Visual Identity', title: 'Night Owl Identity', text: 'Full identity system: logo, palette, typography and motion language for the VIRELIX brand.', stack: ['Identity', 'Motion', 'AI Art'] },
        { cat: 'Campaigns', art: 'a2', tag: 'AI Ad Campaign', title: 'Launch Campaign', text: 'AI-generated video ads and creatives with full paid-ads management across social platforms.', stack: ['AI Video', 'Meta Ads', 'TikTok Ads'] },
        { cat: 'Web', art: 'a2', tag: '3D & Animated', title: 'Immersive Web Experience', text: 'A scroll-driven 3D showcase website with cinematic transitions and interactive scenes.', stack: ['Three.js', 'GSAP', 'WebGL'] },
        { cat: 'Mobile', art: 'a1', tag: 'Mobile App', title: 'Business Companion App', text: 'Cross-platform mobile app with booking, notifications and a custom admin dashboard.', stack: ['Flutter', 'Firebase'] },
        { cat: 'Social', art: 'a3', tag: 'Social Media', title: 'Full Account Management', text: 'Content creation, photography, montage and daily management that grew reach month over month.', stack: ['Content', 'Photography', 'SEO'] },
      ],
    },
    blog: {
      eyebrow: 'Blog', title: 'Ideas that ', titleEm: 'grow brands.',
      lead: 'Practical notes from our team on software, marketing, AI and everything we learn shipping real projects.',
      readArticle: 'Read article', readSuffix: 'read', allArticles: '← All articles',
      wantThis: 'Want this working for your business?', talkToUs: 'Talk to us',
    },
    posts: postsEn,
    endOverlay: { title: 'See. Analyze. Dominate.', subtitle: 'VIRELIX — the owl always returns 🦉' },
    meta: { titleHome: 'VIRELIX — See. Analyze. Dominate.', titleWork: 'Our Work — VIRELIX', titleBlog: 'Blog — VIRELIX' },
  },

  ar: {
    nav: { about: 'من نحن', services: 'خدماتنا', process: 'آلية العمل', work: 'أعمالنا', blog: 'المدونة', contact: 'تواصل معنا', quote: 'اطلب عرض سعر', langToggle: 'EN' },
    loader: {
      messages: ['تجهيز VIRELIX…', 'تحميل نواة الذكاء الاصطناعي…', 'الاتصال بالسيرفرات…', 'تحضير التجربة…', 'إطلاق العالم الرقمي…'],
    },
    intro: { skip: 'تخطي ←' },
    hero: {
      eyebrow: 'برمجة · تسويق · نمو',
      lines: ['نرى.', 'نحلّل.', 'نبني علامات', 'تقود السوق.'],
      sub: 'برمجيات ذكية، وتسويق استراتيجي، ونمو حقيقي بنتائج قابلة للقياس. VIRELIX بتساعد العلامات التجارية تشوف أعمق، وتفكر أذكى، وتكبر أسرع.',
      ctaPrimary: 'خدماتنا',
      ctaGhost: 'اطلب عرض سعر',
      meta: ['عمّان · الأردن', 'نرى. نحلّل. نتصدّر.', 'برمجة + تسويق'],
      scrollCue: 'مرر لتحت',
    },
    about: {
      eyebrow: '٠١ — مين إحنا',
      title: 'نشوف يلي ما يشوفه غيرنا. ', titleEm: 'وبعدين منبنيه.',
      lead1: 'VIRELIX شركة برمجة وتسويق مقرها عمّان. من جهة منبني: مواقع، تطبيقات جوال، وتجارب ثلاثية الأبعاد غامرة. ومن جهة تانية منكبّر: محتوى، هوية بصرية، حملات مدعومة بالذكاء الاصطناعي، سوشال ميديا، وSEO.',
      lead2: 'فريق من ستة متخصصين، ومعيار واحد: شغل يبين فخم ونتائجه أفخم. متل البومة يلي بشعارنا — إحنا ما بنخمّن. منحلّل. ومنكبر.',
      terminalName: 'virelix — build.ts',
      values: [
        { icon: '🚀', title: 'نمو ذكي', text: 'منحوّل البيانات لقرارات فعلية ومنسرّع نمو علامتك التجارية.' },
        { icon: '🧠', title: 'مدعوم بالذكاء الاصطناعي', text: 'منبني حلول ذكية مدعومة بالذكاء الاصطناعي والأتمتة.' },
        { icon: '📈', title: 'أقصى تأثير', text: 'تسويق بيوصل للجمهور الصح وبيحقق نتائج فعلية.' },
        { icon: '🦉', title: 'رؤية واضحة', text: 'منشوف يلي ما يشوفه غيرنا، ومنبني استراتيجيات بتقود السوق.' },
      ],
    },
    services: {
      eyebrow: '٠٢ — شو منسوي',
      title: 'برمجة من جهة. ', titleEm: 'وتسويق من جهة تانية.',
      items: [
        { icon: '</>', title: 'تطوير المواقع والتطبيقات', text: 'مواقع وتطبيقات جوال عالية الأداء مصممة للتحويل — سريعة، متحركة، ومبنية لتكبر معك.' },
        { icon: '◈', title: 'مواقع ثلاثية الأبعاد ومتحركة', text: 'تجارب ثلاثية الأبعاد غامرة وحركة سينمائية بتخلي علامتك التجارية ما تنسى.' },
        { icon: '✦', title: 'الهوية البصرية والعلامة التجارية', text: 'شعارات وألوان وأنظمة هوية متكاملة بتخلي شركتك مميزة ومختلفة عن الكل.' },
        { icon: '◉', title: 'إنتاج المحتوى', text: 'تصوير وفيديو ومونتاج — محتوى يوقف السكرول، منتج بالكامل من فريقنا الداخلي.' },
        { icon: '⌬', title: 'حملات مدعومة بالذكاء الاصطناعي', text: "فيديوهات وصور وإعلانات مولّدة بالذكاء الاصطناعي — جودة احترافية بسرعة ما يقدر عليها الإنتاج التقليدي." },
        { icon: '❍', title: 'إدارة السوشال ميديا', text: 'استراتيجية وخطة محتوى وإدارة يومية بتحوّل صفحاتك لقنوات فعليًا بتكبر.' },
        { icon: '▲', title: 'الإعلانات الممولة', text: 'حملات ممولة على Meta وTikTok وGoogle — مخططة ومطلقة ومُحسّنة لعائد حقيقي، مو بس وصول.' },
        { icon: '↗', title: 'تحسين محركات البحث (SEO)', text: 'تحسين تقني لمحركات البحث واستراتيجية محتوى بتخليك بالصفحة الأولى وتضل فيها.' },
      ],
    },
    process: {
      eyebrow: '٠٣ — كيف منشتغل',
      title: 'خطة عمل مبنية ', titleEm: 'للزخم والاستمرارية.', phaseLabel: 'المرحلة',
      steps: [
        { title: 'اكتشاف', text: 'منحلل عملك، جمهورك، ومنافسينك قبل ما نبدأ ولا بكسل واحد.' },
        { title: 'تخطيط', text: 'بنية الموقع، استراتيجية المحتوى، ولغة الحركة — المخطط الكامل للتجربة.' },
        { title: 'تصميم', text: 'نظام تصميم متكامل: خطوط، ألوان، مكونات، وتفاعلات سينمائية.' },
        { title: 'تطوير', text: 'كود احترافي جاهز للإنتاج — مكتوب بدقة، مُختبر، ومُحسّن لمعايير الأداء من أول يوم.' },
        { title: 'إطلاق', text: 'نشر، تحليلات، SEO، ومتابعة مستمرة. منتجك يطلع للنور بثقة كاملة.' },
        { title: 'نمو', text: 'تطوير مستمر، حملات، وأتمتة بتراكم النتائج شهر بعد شهر.' },
      ],
    },
    tech: { eyebrow: '٠٤ — أدواتنا التقنية', title: 'تقنيات ', titleEm: 'نتقنها.' },
    portfolio: {
      eyebrow: '٠٥ — أعمال مختارة',
      title: 'مشاريع ', titleEm: 'غيّرت المعادلة.',
      viewAll: 'شوف كل المشاريع',
      items: [
        { art: 'a1', tag: 'منصة تجارة إلكترونية', title: 'Aurora Market', text: 'تجربة تسوق متكاملة رفعت نسبة التحويل 42% بأول ربع سنة.', stack: ['Next.js', 'PostgreSQL', 'Stripe', 'GSAP'] },
        { art: 'a2', tag: 'منتج ذكاء اصطناعي', title: 'Sentinel AI', text: 'مساعد ذكي بيؤتمت أكثر من 3000 قرار دعم فني يوميًا.', stack: ['Python', 'React', 'LLM APIs', 'AWS'] },
        { art: 'a3', tag: 'هوية وتطبيق جوال', title: 'Nova Fitness', text: 'إعادة هوية كاملة مع تطبيق وصل لـ100 ألف تحميل خلال ستة أشهر.', stack: ['Flutter', 'Firebase', 'Brand System'] },
      ],
    },
    stats: {
      eyebrow: '٠٦ — أثرنا', title: 'أرقام ', titleEm: 'بتحكي عنا.',
      items: [
        { count: 6, suffix: '', label: 'متخصصين بالفريق' },
        { count: 8, suffix: '', label: 'خدمة تحت سقف واحد' },
        { count: 2, suffix: '', label: 'قسمان — برمجة ونمو' },
        { count: 100, suffix: '%', label: 'إنتاج داخلي بالكامل' },
      ],
    },
    testimonials: {
      eyebrow: '٠٧ — آراء عملائنا', title: 'موثوقين من فرق ', titleEm: 'بتطلب الأفضل.',
      quotes: [
        { text: '"فيريلكس ما بس بنالنا الموقع — بنوا الطريقة يلي عملاءنا بيحسوا فيها تجاهنا. الإطلاق ضاعف عدد العملاء المؤهلين تلات مرات."', av: 'SK', name: 'سارة ك.', role: 'المدير التنفيذي — AURORA MARKET' },
        { text: '"نظام الذكاء الاصطناعي يلي سلمونا إياه شال 60% من شغلنا اليدوي. هندسة دقيقة بعين مصمم."', av: 'OM', name: 'عمر م.', role: 'مدير العمليات — SENTINEL LOGISTICS' },
        { text: '"كل وكالة بتوعد بـ\'شغل فخم\'. فيريلكس أول وحدة فعليًا سلّمت هيك شغل — بالوقت، بالميزانية، وما بينتسى."', av: 'LH', name: 'لينا ح.', role: 'المؤسسة — NOVA FITNESS' },
      ],
    },
    contact: {
      eyebrow: '٠٨ — خلينا نحكي', title: 'جاهز تبني ', titleEm: 'شي ما بينتسى؟',
      form: {
        name: 'اسمك', email: 'البريد الإلكتروني', company: 'اسم الشركة (اختياري)', message: 'احكيلنا عن مشروعك',
        required: 'مطلوب', invalidEmail: 'بريد إلكتروني غير صحيح',
        send: 'إرسال الرسالة', sending: 'جارِ الإرسال…',
        success: 'وصلتنا رسالتك. فريق VIRELIX رح يردّ عليك خلال 24 ساعة. ✦',
        errorRate: 'في رسائل كتير — رجاءً حاول بعد كم دقيقة.',
        errorGeneric: 'صار في خطأ. حاول مرة تانية أو تواصل معنا عبر واتساب.',
        errorNetwork: 'ما قدرنا نوصل للسيرفر. حاول مرة تانية أو تواصل معنا عبر واتساب.',
      },
      info: [
        { icon: '✉', title: 'البريد الإلكتروني', value: 'virelixinfo@gmail.com' },
        { icon: '◷', title: 'رقم الهاتف', value: '+962 78 784 4005' },
        { icon: '◎', title: 'الموقع', value: 'مجمع الحسين للأعمال — مبنى 7، الطابق الثالث، مكتب 301، عمّان' },
      ],
      map: { hq: 'المقر الرئيسي لـ VIRELIX', address: 'مجمع الحسين للأعمال · مبنى 7 · الطابق الثالث · مكتب 301', open: 'افتح على خرائط جوجل' },
    },
    footer: {
      eyebrow: 'المشهد الأخير', title: 'جاهز تبني ', titleEm: 'المستقبل؟',
      cta: 'ابدأ مشروعك',
      tagline: 'نرى. نحلّل. نتصدّر.', location: 'عمّان · الأردن · +962 78 784 4005',
      locationShort: 'عمّان · الأردن',
    },
    work: {
      eyebrow: 'أعمالنا', title: 'مشاريع ', titleEm: 'حوّلناها لواقع.',
      lead: 'مواقع وتطبيقات وهويات وحملات — نفّذها فريقنا بعمّان لعملاء بدهم أكتر من العادي.',
      filters: { All: 'الكل', Web: 'مواقع', Mobile: 'تطبيقات', Branding: 'هوية', Campaigns: 'حملات', Social: 'سوشال ميديا' },
      projects: [
        { cat: 'Web', art: 'a1', tag: 'موقع تعريفي', title: 'منصة Virelix', text: 'تجربة علامتنا التجارية المتحركة ثلاثية الأبعاد — هاد بالضبط الموقع يلي فاتح قدامك هلق.', stack: ['React', 'GSAP', 'Vite'] },
        { cat: 'Branding', art: 'a3', tag: 'هوية بصرية', title: 'هوية البومة الليلية', text: 'نظام هوية متكامل: شعار، ألوان، خطوط، ولغة حركة لعلامة VIRELIX.', stack: ['Identity', 'Motion', 'AI Art'] },
        { cat: 'Campaigns', art: 'a2', tag: 'حملة إعلانية بالذكاء الاصطناعي', title: 'حملة الإطلاق', text: 'إعلانات فيديو ومحتوى مولّد بالذكاء الاصطناعي مع إدارة كاملة للإعلانات الممولة عبر منصات التواصل.', stack: ['AI Video', 'Meta Ads', 'TikTok Ads'] },
        { cat: 'Web', art: 'a2', tag: 'ثلاثي الأبعاد ومتحرك', title: 'تجربة ويب غامرة', text: 'موقع عرض ثلاثي الأبعاد يتفاعل مع السكرول، بانتقالات سينمائية ومشاهد تفاعلية.', stack: ['Three.js', 'GSAP', 'WebGL'] },
        { cat: 'Mobile', art: 'a1', tag: 'تطبيق جوال', title: 'تطبيق مرافق الأعمال', text: 'تطبيق جوال متعدد المنصات فيه حجز، إشعارات، ولوحة تحكم مخصصة.', stack: ['Flutter', 'Firebase'] },
        { cat: 'Social', art: 'a3', tag: 'سوشال ميديا', title: 'إدارة كاملة للحسابات', text: 'إنتاج محتوى وتصوير ومونتاج وإدارة يومية زادت الوصول شهر بعد شهر.', stack: ['Content', 'Photography', 'SEO'] },
      ],
    },
    blog: {
      eyebrow: 'المدونة', title: 'أفكار ', titleEm: 'بتكبر العلامات التجارية.',
      lead: 'ملاحظات عملية من فريقنا عن البرمجة، التسويق، الذكاء الاصطناعي، وكل شي منتعلمه من شغلنا على مشاريع حقيقية.',
      readArticle: 'اقرأ المقال', readSuffix: 'قراءة', allArticles: 'كل المقالات ←',
      wantThis: 'بدك هاد الشي يشتغل إلك بعملك؟', talkToUs: 'تواصل معنا',
    },
    posts: postsAr,
    endOverlay: { title: 'نرى. نحلّل. نتصدّر.', subtitle: 'VIRELIX — البومة دايمًا بترجع 🦉' },
    meta: { titleHome: 'VIRELIX — نرى. نحلّل. نتصدّر.', titleWork: 'أعمالنا — VIRELIX', titleBlog: 'المدونة — VIRELIX' },
  },
}
