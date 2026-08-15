// Central translation dictionary. English is the source of truth for layout;
// Arabic is a full, natural translation (not literal word-for-word) — see i18n.jsx for lookup logic.

const postsEn = [
  {
    slug: 'why-your-business-needs-more-than-a-website',
    cat: 'Strategy', date: 'Jul 2026', read: '4 min',
    title: 'A website is not a business card',
    intro: "Most sites just sit there. A good one is closer to a salesperson who never sleeps and never gets tired of answering the same question.",
    body: [
      "We see this constantly: a business buys a domain, puts up five pages, and calls it done. Six months later they're asking why the site never brought in a single client. It's rarely a design problem — it's that nobody decided what the site was actually supposed to do.",
      "Before any of the design work, we ask the boring questions first. Who's actually landing on this page? What do they need to see in the first few seconds to stick around? What's the one thing that would make them pick up the phone? Everything else gets built around those answers.",
      "That's really why we don't split the website off from the marketing — they're the same job. A fast, well-written site with the right traffic behind it stops being a line item and starts paying for itself.",
    ],
  },
  {
    slug: 'ai-content-real-results',
    cat: 'AI Marketing', date: 'Jul 2026', read: '5 min',
    title: 'AI made content cheap. That is the problem.',
    intro: "Anyone can generate an image now. That's exactly why most AI content gets ignored.",
    body: [
      "Once a tool is available to everyone, the output stops being a differentiator. Feeds are full of the same AI-smooth visuals, and people have gotten fast at scrolling past them without registering a thing.",
      "What still works is having a point of view before you touch the tool. We work out the concept and the message first — same as any campaign — and only then use AI to produce the actual video and imagery, because that's where it genuinely saves time and money.",
      "Done that way, you get creative that looks intentional, ships in days rather than weeks, and lets you test several directions instead of betting everything on one. AI isn't doing the marketing — it's just letting the people doing it move faster.",
    ],
  },
  {
    slug: 'seo-in-jordan-what-works',
    cat: 'SEO', date: 'Jun 2026', read: '6 min',
    title: "SEO that actually moves rankings, not just reports",
    intro: 'No shortcuts here — it comes down to a site that works, content that answers something, and sticking with it.',
    body: [
      "When someone asks us about SEO, we don't start with keywords — we start by checking whether the site itself is even in decent shape. A slow page or a broken heading structure will hold you back no matter how good the writing is.",
      "After that, it's about matching what people are actually typing into Google, not the language on your brochure. A page that answers one real question clearly, in plain words, will beat a prettier page that dances around the point.",
      "And then it's just consistency. Google notices sites that are still active — new pages, working links, real activity — versus ones that published once and went quiet. Most of the businesses that end up ranking well are just the ones that didn't stop.",
    ],
  },
  {
    slug: 'why-3d-and-motion-websites-win',
    cat: 'Web Design', date: 'Jun 2026', read: '4 min',
    title: 'Why motion sticks and plain templates don’t',
    intro: "You get a couple of seconds to make a website feel like something, not nothing.",
    body: [
      "A generic template site is forgettable by design — hundreds of other businesses are running the same layout. Something with a bit of depth and personality is what people actually remember and screenshot.",
      "That said, motion has to earn its place. If an animation is just there to look impressive while it slows the page down or gets in the way of reading, it's doing more harm than a plain site would.",
      "So we keep it simple: make the surface feel considered, keep everything underneath fast and easy to use. A site that looks good and loads instantly is what actually turns a visit into a message.",
    ],
  },
  {
    slug: 'social-media-management-that-grows',
    cat: 'Social Media', date: 'May 2026', read: '5 min',
    title: "Posting every day isn't a strategy",
    intro: "Consistency without direction just produces a lot of content nobody asked for.",
    body: [
      "The pattern we see most: an account posting daily with no real plan, then judging success by likes. Likes don't pay the bills — messages, saves and actual inquiries do.",
      "What works instead is picking a handful of topics you're genuinely good at talking about, figuring out which formats land on which platform, and producing in batches so quality doesn't slip when things get busy. AI helps here too, mostly with variations once the core idea is set.",
      "Then you just watch the numbers honestly — keep doing what worked last week, drop what didn't. It's not glamorous, but a few months of that and the account stops feeling like guesswork.",
    ],
  },
]

const postsAr = [
  {
    slug: 'why-your-business-needs-more-than-a-website',
    cat: 'استراتيجية', date: 'يوليو 2026', read: '٤ دقائق',
    title: 'الموقع مش بطاقة عمل',
    intro: 'أغلب المواقع بس موجودة وخلص. الموقع الشاطر أقرب لموظف مبيعات ما بينعب وما بيزهق من نفس السؤال.',
    body: [
      'بنشوف هالموضوع كتير: صاحب مشروع يشتري دومين، يحط خمس صفحات، ويعتبرها خلصت. وبعد ستة أشهر يسأل ليش الموقع ما جابله ولا عميل. المشكلة نادراً بتكون بالتصميم — أغلب الأحيان حدا ما قعد يحدد أصلاً شو المفروض الموقع يسويه.',
      'قبل ما نبلش أي تصميم، منسأل الأسئلة الممل شوي بس المهمة: مين فعلياً بيوصل لهاي الصفحة؟ شو لازم يشوفه بأول ثواني عشان يضل؟ شو الشي الوحيد يلي ممكن يخليه يتصل فينا؟ كل شي بعدها بينبني على هاد الأساس.',
      'لهيك إحنا ما منفصل الموقع عن التسويق — هم نفس الشغلة بالنسبة إلنا. موقع سريع ومكتوب صح وواصله زوار مناسبين بيوقف يكون مصروف وبيبلش يرجع فايدته.',
    ],
  },
  {
    slug: 'ai-content-real-results',
    cat: 'تسويق بالذكاء الاصطناعي', date: 'يوليو 2026', read: '٥ دقائق',
    title: 'الذكاء الاصطناعي خلّى المحتوى رخيص، وهاي بالضبط المشكلة',
    intro: 'هلق أي حدا فيه يولّد صورة. لهيك بالضبط أغلب محتوى الذكاء الاصطناعي بيتم تجاهله.',
    body: [
      'لما أداة توصل لإيد الكل، النتيجة بتوقف تميّزك عن حدا. الفيدات مليانة نفس الصور المصقولة بالذكاء الاصطناعي، والناس تعلّموا يتخطوها بسرعة بدون ما يوقفوا حتى.',
      'يلي لسا شغال هو إنك تجي بفكرة واضحة قبل ما تلمس الأداة. إحنا منحدد الكونسبت والرسالة أول شي — متل أي حملة عادية — وبعدين منستخدم الذكاء الاصطناعي لإنتاج الفيديو والصور فعليًا، لأنه هنيك بالضبط بيوفر وقت وفلوس حقيقيين.',
      'لما تشتغل هيك، بيطلع عندك محتوى شكله مدروس، بينسلّم بأيام مو أسابيع، وبتقدر تجرب أكتر من اتجاه بدل ما تراهن على وحدة بس. الذكاء الاصطناعي مش يلي بيسوق — هو بس بيخلي يلي بيسوقوا يشتغلوا أسرع.',
    ],
  },
  {
    slug: 'seo-in-jordan-what-works',
    cat: 'تحسين محركات البحث', date: 'يونيو 2026', read: '٦ دقائق',
    title: 'الـSEO يلي فعليًا بيحرّك الترتيب، مو بس بيطلع تقارير حلوة',
    intro: 'ما في اختصارات هون — المسألة بنية موقع سليمة، محتوى بيجاوب على شي حقيقي، والاستمرار.',
    body: [
      'لما حدا يسألنا عن الـSEO، ما منبلش بالكلمات المفتاحية — منبلش نتأكد أصلاً إذا الموقع نفسه بحالة منيحة. صفحة بطيئة أو عناوين مبعثرة بتوقفك مهما كانت الكتابة حلوة.',
      'بعدها المسألة إنك تحكي نفس اللغة يلي الناس فعليًا بيدوروا فيها بجوجل، مو لغة البروشور. صفحة بتجاوب على سؤال محدد بوضوح وبكلام بسيط بتتفوق على صفحة أحلى شكل بس دايرة حول الموضوع.',
      'وبعدين بس استمرارية. جوجل بيلاحظ المواقع يلي لسا فعّالة — صفحات جديدة، روابط شغالة، نشاط حقيقي — مقابل يلي نشرت مرة وسكتت. أغلب المشاريع يلي بتترتب منيح هي بس يلي ما وقفت.',
    ],
  },
  {
    slug: 'why-3d-and-motion-websites-win',
    cat: 'تصميم مواقع', date: 'يونيو 2026', read: '٤ دقائق',
    title: 'ليش الحركة بتنحفظ بالذاكرة والقوالب الجاهزة لأ',
    intro: 'عندك ثانيتين بس تخلي الموقع يحس إنه شي، مو ولا شي.',
    body: [
      'موقع مبني على قالب جاهز بينمحى من الذاكرة بطبيعته — مئات المشاريع التانية شغالة بنفس الشكل بالضبط. الموقع يلي فيه شوية عمق وشخصية هو يلي فعليًا الناس بتفتكره وتاخذله سكرين شوت.',
      'بس الحركة لازم تستاهل مكانها. لو الأنيميشن موجود بس عشان يبين حلو وعم يبطّئ الصفحة أو يعيق القراءة، هيك عم يضر أكتر من موقع بسيط وخلص.',
      'فإحنا منخليها بسيطة: نخلي الشكل الخارجي محسوب ومدروس، ونخلي كل شي تحته سريع وسهل الاستخدام. موقع شكله حلو وبيفتح بسرعة هو يلي فعليًا بيحوّل زيارة لرسالة.',
    ],
  },
  {
    slug: 'social-media-management-that-grows',
    cat: 'سوشال ميديا', date: 'مايو 2026', read: '٥ دقائق',
    title: 'النشر كل يوم لحاله مش استراتيجية',
    intro: 'الاستمرارية من غير اتجاه واضح بس بتنتج محتوى ما حدا طلبه.',
    body: [
      'أكتر شي منشوفه: حساب بينشر كل يوم بدون خطة واضحة، وبعدين بيحكم على النجاح باللايكات. اللايك ما بيدفع فواتير — الرسايل، الحفظ، والاستفسارات الحقيقية هي يلي بتدفع.',
      'يلي فعليًا بيشتغل هو إنك تختار كم موضوع إنت فعلاً شاطر تحكي فيهم، تعرف شو الفورمات يلي بتنجح بكل منصة، وتنتج على دفعات عشان الجودة ما تنزل وقت الزحمة. الذكاء الاصطناعي بيساعد هون كمان، أكتر شي بتنويع النسخ بعد ما تكون الفكرة الأساسية واضحة.',
      'وبعدها بس تراقب الأرقام بصراحة — كمّل يلي نجح الأسبوع يلي فات، ووقف يلي ما نجح. مش شي مبهر، بس بعد كم شهر من هيك الحساب بيوقف يحس إنه تخمين ويبلش يبني نتائج فعلية.',
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
      sub: "We're a small team in Amman that builds websites and apps, then runs the marketing that gets people to them. One team, one timeline, one result you can actually measure.",
      ctaPrimary: 'Our Services',
      ctaGhost: 'Get A Quote',
      meta: ['AMMAN · JORDAN', 'SEE. ANALYZE. DOMINATE.', 'SOFTWARE + MARKETING'],
      scrollCue: 'Scroll',
    },
    about: {
      eyebrow: '01 — Who We Are',
      title: 'We notice the details others skip. ', titleEm: "Then we build around them.",
      lead1: "VIRELIX is a software and marketing studio based in Amman. On one side we build — websites, apps and 3D web experiences. On the other we grow accounts — content, branding, AI-assisted campaigns, social and SEO.",
      lead2: "Six of us, working as one team instead of handing you off between departments. The owl in our mark is the whole idea: watch closely, understand what you're looking at, then act on it.",
      terminalName: 'virelix — build.ts',
      values: [
        { icon: '🎯', title: 'We Ship, Not Just Pitch', text: 'You get working builds in weeks, not a deck full of promises.' },
        { icon: '🧩', title: 'One Team, Not Five Vendors', text: 'Design, code and marketing sit at the same table, so nothing gets lost in handoffs.' },
        { icon: '📊', title: 'We Watch the Numbers', text: "If something isn't working, we change it — opinions lose to data here." },
        { icon: '🦉', title: 'We Actually Look', text: "Before we build anything, we spend real time understanding your business, not just your brief." },
      ],
    },
    services: {
      eyebrow: '02 — What We Do',
      title: 'Code on one side. ', titleEm: 'Marketing on the other.',
      items: [
        { icon: '</>', title: 'Web & App Development', text: 'Websites and mobile apps built to actually convert visitors, not just look good in a screenshot.' },
        { icon: '◈', title: '3D & Animated Websites', text: 'Scroll-driven, cinematic sites for brands that want to be remembered, not just visited.' },
        { icon: '✦', title: 'Branding & Visual Identity', text: 'Logo, colors, type and the rest of the system — built once, consistent everywhere after.' },
        { icon: '◉', title: 'Content Creation & Production', text: 'Photography, filming and editing, produced end to end by our own in-house team.' },
        { icon: '⌬', title: 'AI-Powered Campaigns', text: 'AI-generated video and imagery for campaigns, at a speed and price traditional production can’t match.' },
        { icon: '❍', title: 'Social Media Management', text: 'A content calendar and daily management aimed at accounts that actually grow, not just post.' },
        { icon: '▲', title: 'Paid Advertising', text: 'Meta, TikTok and Google campaigns run for return on spend, not just impressions.' },
        { icon: '↗', title: 'SEO', text: 'Technical fixes and content that move you up the rankings — and keep you there.' },
      ],
    },
    process: {
      eyebrow: '03 — How We Work',
      title: 'A process built for ', titleEm: 'momentum.', phaseLabel: 'PHASE',
      steps: [
        { title: 'Discover', text: 'We ask about your business, your users and your competitors before any design work starts.' },
        { title: 'Plan', text: 'A clear map of the site structure, content and how it should feel to move through.' },
        { title: 'Design', text: 'Typography, color, components and interactions — put together as one system, not one-off screens.' },
        { title: 'Develop', text: 'Production code, tested and checked against real performance numbers, not just "looks fine".' },
        { title: 'Launch', text: 'Deployment, analytics and SEO set up before launch day, not scrambled together after.' },
        { title: 'Grow', text: 'We keep iterating and running campaigns after launch — the site isn’t "done", it’s maintained.' },
      ],
    },
    tech: { eyebrow: '04 — Our Stack', title: 'Technologies we ', titleEm: 'actually use.' },
    portfolio: {
      eyebrow: '05 — Selected Work',
      title: 'A few projects ', titleEm: 'worth showing.',
      viewAll: 'View All Projects',
      items: [
        { art: 'a1', tag: 'E-Commerce Platform', title: 'Aurora Market', text: 'Rebuilt their storefront from the ground up — conversion was up 42% within the first quarter.', stack: ['Next.js', 'PostgreSQL', 'Stripe', 'GSAP'] },
        { art: 'a2', tag: 'AI Product', title: 'Sentinel AI', text: 'An internal tool that now handles over 3,000 support decisions a day without a human touching most of them.', stack: ['Python', 'React', 'LLM APIs', 'AWS'] },
        { art: 'a3', tag: 'Brand & Mobile', title: 'Nova Fitness', text: 'New brand identity plus a Flutter app that crossed 100K downloads in its first six months.', stack: ['Flutter', 'Firebase', 'Brand System'] },
      ],
    },
    stats: {
      eyebrow: '06 — Impact', title: 'A few numbers ', titleEm: 'worth mentioning.',
      items: [
        { count: 6, suffix: '', label: 'Specialists On The Team' },
        { count: 8, suffix: '', label: 'Services Under One Roof' },
        { count: 2, suffix: '', label: 'Departments — Code & Growth' },
        { count: 100, suffix: '%', label: 'In-House Production' },
      ],
    },
    testimonials: {
      eyebrow: '07 — Client Voices', title: 'A few words from ', titleEm: 'people we’ve worked with.',
      quotes: [
        { text: '"They didn’t just build the site — the way people talk about us actually changed after launch. Qualified leads roughly tripled."', av: 'SK', name: 'Sara K.', role: 'CEO — AURORA MARKET' },
        { text: '"What they shipped cut out about 60% of our manual work. Careful engineering, and it actually looks good too."', av: 'OM', name: 'Omar M.', role: 'COO — SENTINEL LOGISTICS' },
        { text: "\"We'd heard 'premium' from other agencies before. This was the first time it was actually true — on time, on budget.\"", av: 'LH', name: 'Lina H.', role: 'FOUNDER — NOVA FITNESS' },
      ],
    },
    contact: {
      eyebrow: "08 — Let's Talk", title: 'Got a project ', titleEm: 'in mind?',
      form: {
        name: 'Your name', email: 'Email address', company: 'Company (optional)', message: 'Tell us about your project',
        required: 'REQUIRED', invalidEmail: 'INVALID EMAIL',
        send: 'Send Message', sending: 'Sending…',
        success: 'Got it — someone from VIRELIX will get back to you within 24 hours. ✦',
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
      eyebrow: "Let's Talk", title: 'Have a project ', titleEm: 'worth building?',
      cta: 'Start Your Project',
      tagline: 'SEE. ANALYZE. DOMINATE.', location: 'AMMAN · JORDAN · +962 78 784 4005',
      locationShort: 'AMMAN · JORDAN',
    },
    work: {
      eyebrow: 'Our Work', title: 'Projects we ', titleEm: 'actually shipped.',
      lead: "Websites, apps, brands and campaigns built by our team in Amman for clients who wanted more than the usual.",
      filters: { All: 'All', Web: 'Web', Mobile: 'Mobile', Branding: 'Branding', Campaigns: 'Campaigns', Social: 'Social' },
      projects: [
        { cat: 'Web', art: 'a1', tag: 'Corporate Website', title: 'Virelix Platform', text: "Our own site, built the same way we build everyone else's — the one you're on right now.", stack: ['React', 'GSAP', 'Vite'] },
        { cat: 'Branding', art: 'a3', tag: 'Visual Identity', title: 'Night Owl Identity', text: 'Logo, palette, typography and motion language for our own brand — the owl started here.', stack: ['Identity', 'Motion', 'AI Art'] },
        { cat: 'Campaigns', art: 'a2', tag: 'AI Ad Campaign', title: 'Launch Campaign', text: 'AI-generated video ads with paid media management handled end to end across social.', stack: ['AI Video', 'Meta Ads', 'TikTok Ads'] },
        { cat: 'Web', art: 'a2', tag: '3D & Animated', title: 'Immersive Web Experience', text: 'A scroll-driven 3D showcase site with cinematic transitions and interactive scenes.', stack: ['Three.js', 'GSAP', 'WebGL'] },
        { cat: 'Mobile', art: 'a1', tag: 'Mobile App', title: 'Business Companion App', text: 'Cross-platform app with booking, notifications and a custom admin dashboard.', stack: ['Flutter', 'Firebase'] },
        { cat: 'Social', art: 'a3', tag: 'Social Media', title: 'Full Account Management', text: 'Content, photography and daily management that grew reach month over month.', stack: ['Content', 'Photography', 'SEO'] },
      ],
    },
    blog: {
      eyebrow: 'Blog', title: 'Notes from ', titleEm: 'the work itself.',
      lead: "What we've actually learned building and marketing real projects — no filler, just what worked and what didn't.",
      readArticle: 'Read article', readSuffix: 'read', allArticles: '← All articles',
      wantThis: 'Want this working for your business?', talkToUs: 'Talk to us',
    },
    posts: postsEn,
    endOverlay: { title: 'See. Analyze. Dominate.', subtitle: 'VIRELIX — scroll back up any time 🦉' },
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
      sub: 'إحنا فريق صغير بعمّان، منبني المواقع والتطبيقات وبعدين منشغّل التسويق يلي بيجيب الناس عليها. فريق واحد، جدول واحد، ونتيجة فعليًا فيك تقيسها.',
      ctaPrimary: 'خدماتنا',
      ctaGhost: 'اطلب عرض سعر',
      meta: ['عمّان · الأردن', 'نرى. نحلّل. نتصدّر.', 'برمجة + تسويق'],
      scrollCue: 'مرر لتحت',
    },
    about: {
      eyebrow: '٠١ — مين إحنا',
      title: 'منلاحظ التفاصيل يلي غيرنا بيتخطاها. ', titleEm: 'وبعدين منبني عليها.',
      lead1: 'VIRELIX استوديو برمجة وتسويق مقره عمّان. من جهة منبني: مواقع، تطبيقات، وتجارب ويب ثلاثية الأبعاد. ومن جهة تانية منكبّر حسابات: محتوى، هوية بصرية، حملات مدعومة بالذكاء الاصطناعي، سوشال ميديا، وSEO.',
      lead2: 'ستة أشخاص، شغالين كفريق واحد بدل ما نمررك بين أقسام مختلفة. البومة يلي بشعارنا هي بالضبط الفكرة: تراقب منيح، تفهم يلي عم تشوفه، وبعدين تتصرف بناءً عليه.',
      terminalName: 'virelix — build.ts',
      values: [
        { icon: '🎯', title: 'منسلّم، مو بس منوعد', text: 'بتاخد شغل فعليًا شغال خلال أسابيع، مش عرض تقديمي مليان وعود.' },
        { icon: '🧩', title: 'فريق واحد، مو خمس جهات', text: 'التصميم والبرمجة والتسويق عالطاولة نفسها، فما في شي بيضيع بين التسليمات.' },
        { icon: '📊', title: 'منراقب الأرقام', text: 'إذا شي مش شغال، منغيّره — هون الأرقام بتغلب الآراء.' },
        { icon: '🦉', title: 'فعليًا منراقب', text: 'قبل ما نبني أي شي، منصرف وقت حقيقي نفهم مشروعك، مو بس نقرأ البريف.' },
      ],
    },
    services: {
      eyebrow: '٠٢ — شو منسوي',
      title: 'برمجة من جهة. ', titleEm: 'وتسويق من جهة تانية.',
      items: [
        { icon: '</>', title: 'تطوير المواقع والتطبيقات', text: 'مواقع وتطبيقات جوال مبنية فعليًا لتحوّل الزوار، مو بس تبين حلوة بسكرين شوت.' },
        { icon: '◈', title: 'مواقع ثلاثية الأبعاد ومتحركة', text: 'مواقع سينمائية بتتفاعل مع السكرول، لعلامات بدها تنحفظ بالذاكرة مو بس تنزار.' },
        { icon: '✦', title: 'الهوية البصرية والعلامة التجارية', text: 'الشعار، الألوان، الخطوط، وباقي النظام — بينبنى مرة وبيضل ثابت بكل مكان بعدها.' },
        { icon: '◉', title: 'إنتاج المحتوى', text: 'تصوير وفيديو ومونتاج، منتج بالكامل من فريقنا الداخلي من أوله لآخره.' },
        { icon: '⌬', title: 'حملات مدعومة بالذكاء الاصطناعي', text: 'فيديوهات وصور مولّدة بالذكاء الاصطناعي للحملات، بسرعة وسعر ما يقدر عليهم الإنتاج التقليدي.' },
        { icon: '❍', title: 'إدارة السوشال ميديا', text: 'خطة محتوى وإدارة يومية هدفها حسابات فعليًا بتكبر، مو بس بتنشر.' },
        { icon: '▲', title: 'الإعلانات الممولة', text: 'حملات على Meta وTikTok وGoogle مدارة لعائد فعلي على الصرف، مو بس مشاهدات.' },
        { icon: '↗', title: 'تحسين محركات البحث (SEO)', text: 'إصلاحات تقنية ومحتوى بيرفعوك بالترتيب — وبيخلوك فيه.' },
      ],
    },
    process: {
      eyebrow: '٠٣ — كيف منشتغل',
      title: 'خطة عمل مبنية ', titleEm: 'للزخم والاستمرارية.', phaseLabel: 'المرحلة',
      steps: [
        { title: 'اكتشاف', text: 'منسأل عن مشروعك، جمهورك، ومنافسينك قبل ما نبلش أي شغل تصميم.' },
        { title: 'تخطيط', text: 'خارطة واضحة لبنية الموقع، المحتوى، وكيف المفروض يحس المستخدم وهو يتصفحه.' },
        { title: 'تصميم', text: 'خطوط، ألوان، مكونات، وتفاعلات — مبنية كنظام واحد متكامل، مو شاشات منفصلة عن بعض.' },
        { title: 'تطوير', text: 'كود جاهز للإنتاج، مُختبر ومقاس بأرقام أداء فعلية، مو بس "شكله تمام".' },
        { title: 'إطلاق', text: 'النشر والتحليلات والـSEO مجهزين قبل يوم الإطلاق، مو مركبين بسرعة بعده.' },
        { title: 'نمو', text: 'منكمل نطوّر ونشغّل حملات بعد الإطلاق — الموقع مش "خلص"، هو محافظ عليه باستمرار.' },
      ],
    },
    tech: { eyebrow: '٠٤ — أدواتنا التقنية', title: 'تقنيات ', titleEm: 'فعليًا منستخدمها.' },
    portfolio: {
      eyebrow: '٠٥ — أعمال مختارة',
      title: 'كم مشروع ', titleEm: 'يستاهل نوريك ياه.',
      viewAll: 'شوف كل المشاريع',
      items: [
        { art: 'a1', tag: 'منصة تجارة إلكترونية', title: 'Aurora Market', text: 'أعدنا بناء متجرهم من الصفر — نسبة التحويل ارتفعت 42% بأول ربع سنة.', stack: ['Next.js', 'PostgreSQL', 'Stripe', 'GSAP'] },
        { art: 'a2', tag: 'منتج ذكاء اصطناعي', title: 'Sentinel AI', text: 'أداة داخلية هلق بتعالج أكثر من 3000 قرار دعم فني يوميًا بدون ما حدا يلمس أغلبها.', stack: ['Python', 'React', 'LLM APIs', 'AWS'] },
        { art: 'a3', tag: 'هوية وتطبيق جوال', title: 'Nova Fitness', text: 'هوية تجارية جديدة مع تطبيق Flutter وصل لـ100 ألف تحميل بأول ستة أشهر.', stack: ['Flutter', 'Firebase', 'Brand System'] },
      ],
    },
    stats: {
      eyebrow: '٠٦ — أثرنا', title: 'كم رقم ', titleEm: 'يستاهل نذكره.',
      items: [
        { count: 6, suffix: '', label: 'متخصصين بالفريق' },
        { count: 8, suffix: '', label: 'خدمة تحت سقف واحد' },
        { count: 2, suffix: '', label: 'قسمان — برمجة ونمو' },
        { count: 100, suffix: '%', label: 'إنتاج داخلي بالكامل' },
      ],
    },
    testimonials: {
      eyebrow: '٠٧ — آراء عملائنا', title: 'كلام من ', titleEm: 'ناس اشتغلنا وياهم.',
      quotes: [
        { text: '"ما بس بنالنا الموقع — الطريقة يلي الناس بتحكي فيها عنا تغيّرت فعليًا بعد الإطلاق. العملاء المؤهلين تقريبًا تلات أضعاف."', av: 'SK', name: 'سارة ك.', role: 'المدير التنفيذي — AURORA MARKET' },
        { text: '"يلي سلمونا إياه شال حوالي 60% من شغلنا اليدوي. هندسة دقيقة، وشكله حلو فعلاً."', av: 'OM', name: 'عمر م.', role: 'مدير العمليات — SENTINEL LOGISTICS' },
        { text: '"كنا سمعنا كلمة \'فخم\' من وكالات تانية قبل هيك. هاي أول مرة فعليًا تكون صحيحة — بالوقت المحدد وبنفس الميزانية."', av: 'LH', name: 'لينا ح.', role: 'المؤسسة — NOVA FITNESS' },
      ],
    },
    contact: {
      eyebrow: '٠٨ — خلينا نحكي', title: 'عندك مشروع ', titleEm: 'ببالك؟',
      form: {
        name: 'اسمك', email: 'البريد الإلكتروني', company: 'اسم الشركة (اختياري)', message: 'احكيلنا عن مشروعك',
        required: 'مطلوب', invalidEmail: 'بريد إلكتروني غير صحيح',
        send: 'إرسال الرسالة', sending: 'جارِ الإرسال…',
        success: 'وصلتنا. حدا من فريق VIRELIX رح يردّ عليك خلال 24 ساعة. ✦',
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
      eyebrow: 'خلينا نحكي', title: 'عندك مشروع ', titleEm: 'يستاهل نبنيه؟',
      cta: 'ابدأ مشروعك',
      tagline: 'نرى. نحلّل. نتصدّر.', location: 'عمّان · الأردن · +962 78 784 4005',
      locationShort: 'عمّان · الأردن',
    },
    work: {
      eyebrow: 'أعمالنا', title: 'مشاريع ', titleEm: 'فعليًا سلّمناها.',
      lead: 'مواقع وتطبيقات وهويات وحملات نفّذها فريقنا بعمّان لعملاء بدهم أكتر من الشي العادي.',
      filters: { All: 'الكل', Web: 'مواقع', Mobile: 'تطبيقات', Branding: 'هوية', Campaigns: 'حملات', Social: 'سوشال ميديا' },
      projects: [
        { cat: 'Web', art: 'a1', tag: 'موقع تعريفي', title: 'منصة Virelix', text: 'موقعنا الخاص، بنيناه بنفس الطريقة يلي منبني فيها لباقي عملاءنا — هاد بالضبط الموقع يلي فاتح قدامك هلق.', stack: ['React', 'GSAP', 'Vite'] },
        { cat: 'Branding', art: 'a3', tag: 'هوية بصرية', title: 'هوية البومة الليلية', text: 'شعار، ألوان، خطوط، ولغة حركة لعلامتنا التجارية إحنا — من هون بلشت البومة.', stack: ['Identity', 'Motion', 'AI Art'] },
        { cat: 'Campaigns', art: 'a2', tag: 'حملة إعلانية بالذكاء الاصطناعي', title: 'حملة الإطلاق', text: 'إعلانات فيديو مولّدة بالذكاء الاصطناعي مع إدارة كاملة للإعلانات الممولة عبر منصات التواصل.', stack: ['AI Video', 'Meta Ads', 'TikTok Ads'] },
        { cat: 'Web', art: 'a2', tag: 'ثلاثي الأبعاد ومتحرك', title: 'تجربة ويب غامرة', text: 'موقع عرض ثلاثي الأبعاد يتفاعل مع السكرول، بانتقالات سينمائية ومشاهد تفاعلية.', stack: ['Three.js', 'GSAP', 'WebGL'] },
        { cat: 'Mobile', art: 'a1', tag: 'تطبيق جوال', title: 'تطبيق مرافق الأعمال', text: 'تطبيق جوال متعدد المنصات فيه حجز، إشعارات، ولوحة تحكم مخصصة.', stack: ['Flutter', 'Firebase'] },
        { cat: 'Social', art: 'a3', tag: 'سوشال ميديا', title: 'إدارة كاملة للحسابات', text: 'محتوى وتصوير وإدارة يومية زادت الوصول شهر بعد شهر.', stack: ['Content', 'Photography', 'SEO'] },
      ],
    },
    blog: {
      eyebrow: 'المدونة', title: 'ملاحظات من ', titleEm: 'صلب الشغل نفسه.',
      lead: 'يلي فعليًا تعلمناه من بناء وتسويق مشاريع حقيقية — بدون حشو، بس يلي نجح ويلي ما نجح.',
      readArticle: 'اقرأ المقال', readSuffix: 'قراءة', allArticles: 'كل المقالات ←',
      wantThis: 'بدك هاد الشي يشتغل إلك بعملك؟', talkToUs: 'تواصل معنا',
    },
    posts: postsAr,
    endOverlay: { title: 'نرى. نحلّل. نتصدّر.', subtitle: 'VIRELIX — رجّع مرر لفوق أي وقت 🦉' },
    meta: { titleHome: 'VIRELIX — نرى. نحلّل. نتصدّر.', titleWork: 'أعمالنا — VIRELIX', titleBlog: 'المدونة — VIRELIX' },
  },
}
