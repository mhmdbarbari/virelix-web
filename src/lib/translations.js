// Central translation dictionary. English is the source of truth for layout;
// Arabic is a full, natural translation in Modern Standard Arabic (not literal
// word-for-word, and not colloquial) — see i18n.jsx for lookup logic.

import workSalon from '../assets/work-salon.jpg'
import workJewelry from '../assets/work-jewelry.jpg'
import workModel from '../assets/work-model.jpg'

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
    title: 'الموقع الإلكتروني ليس بطاقة عمل',
    intro: 'معظم المواقع موجودة فقط، دون أكثر من ذلك. أما الموقع الجيد فهو أقرب إلى موظف مبيعات لا يتعب ولا يملّ من تكرار الإجابة عن السؤال نفسه.',
    body: [
      'نلاحظ هذا كثيرًا: صاحب مشروع يشتري نطاقًا، وينشئ خمس صفحات، ويعتبر المهمة منتهية. وبعد ستة أشهر يتساءل لماذا لم يجلب له الموقع عميلًا واحدًا. نادرًا ما تكون المشكلة في التصميم — فغالبًا لم يحدّد أحد أصلًا الهدف الحقيقي من الموقع.',
      'قبل أن نبدأ أي عمل تصميمي، نطرح الأسئلة الأقل إثارة لكنها الأهم: من الذي يصل فعلًا إلى هذه الصفحة؟ وما الذي يجب أن يراه في الثواني الأولى ليبقى؟ وما الأمر الوحيد الذي قد يدفعه للاتصال بنا؟ وكل شيء بعد ذلك يُبنى على هذه الإجابات.',
      'لهذا السبب لا نفصل بين الموقع والتسويق — فهما بالنسبة إلينا مهمة واحدة. الموقع السريع المكتوب بعناية والذي يصله الزوار المناسبون يتوقف عن كونه بندًا في المصروفات، ويبدأ في تحقيق عائد حقيقي.',
    ],
  },
  {
    slug: 'ai-content-real-results',
    cat: 'تسويق بالذكاء الاصطناعي', date: 'يوليو 2026', read: '٥ دقائق',
    title: 'الذكاء الاصطناعي جعل المحتوى رخيصًا، وهذه بالضبط المشكلة',
    intro: 'بات بإمكان أي شخص الآن توليد صورة بالذكاء الاصطناعي. ولهذا السبب بالتحديد يتجاهل الجمهور معظم هذا المحتوى.',
    body: [
      'حين تصبح أداة ما متاحة للجميع، تتوقف نتائجها عن تمييزك عن غيرك. صارت المنصات مليئة بالصور المصقولة نفسها المولَّدة بالذكاء الاصطناعي، وتعلّم الجمهور تجاوزها بسرعة دون حتى التوقف عندها.',
      'ما زال يجدي نفعًا هو امتلاك فكرة واضحة قبل استخدام الأداة. نحدّد المفهوم والرسالة أولًا — كما في أي حملة تقليدية — ثم نستخدم الذكاء الاصطناعي لإنتاج الفيديو والصور فعليًا، لأن هذه هي المرحلة التي يوفّر فيها وقتًا ومالًا حقيقيَّين.',
      'وحين تعمل بهذه الطريقة، يخرج المحتوى بمظهر مدروس، ويُسلَّم خلال أيام لا أسابيع، ويمكنك تجربة أكثر من اتجاه بدلًا من المراهنة على واحد فقط. فالذكاء الاصطناعي لا يقوم بالتسويق بنفسه — بل يمكّن المسوّقين من العمل بسرعة أكبر فقط.',
    ],
  },
  {
    slug: 'seo-in-jordan-what-works',
    cat: 'تحسين محركات البحث', date: 'يونيو 2026', read: '٦ دقائق',
    title: 'تحسين محركات البحث الذي يرفع الترتيب فعلًا، لا الذي يكتفي بتقارير جميلة',
    intro: 'لا اختصارات هنا — الأمر يتعلّق ببنية موقع سليمة، ومحتوى يجيب عن حاجة حقيقية، والاستمرارية.',
    body: [
      'حين يسألنا أحدهم عن تحسين محركات البحث، لا نبدأ بالكلمات المفتاحية — بل نبدأ بالتأكد من أن الموقع نفسه في حالة جيدة. فصفحة بطيئة أو تسلسل عناوين مشوَّش يعيقانك مهما كانت جودة الكتابة.',
      'بعد ذلك، يتعلّق الأمر باستخدام اللغة نفسها التي يبحث بها الناس فعلًا على جوجل، لا لغة الكتيّبات الترويجية. فصفحة تجيب عن سؤال محدد بوضوح وبكلمات بسيطة تتفوّق دائمًا على صفحة أجمل شكلًا لكنها تدور حول الموضوع دون أن تجيب عنه مباشرة.',
      'وأخيرًا، تأتي الاستمرارية. يلاحظ جوجل المواقع التي ما زالت نشطة — صفحات جديدة، روابط فعّالة، نشاط حقيقي — مقارنة بتلك التي نشرت مرة واحدة ثم توقّفت. ومعظم المشاريع التي تحقق ترتيبًا جيدًا هي ببساطة تلك التي لم تتوقف.',
    ],
  },
  {
    slug: 'why-3d-and-motion-websites-win',
    cat: 'تصميم مواقع', date: 'يونيو 2026', read: '٤ دقائق',
    title: 'لماذا تُحفَظ الحركة في الذاكرة ولا تُحفَظ القوالب الجاهزة',
    intro: 'أمامك ثوانٍ معدودة لتجعل الموقع يبدو أنه شيء مميز، لا مجرد موقع عادي.',
    body: [
      'الموقع المبني على قالب جاهز يُمحى من الذاكرة بطبيعته — إذ تعمل مئات المشاريع الأخرى بالشكل نفسه تمامًا. أما الموقع الذي يحمل بعض العمق والشخصية، فهو الذي يتذكّره الناس فعلًا ويلتقطون له لقطة شاشة.',
      'لكن الحركة يجب أن تستحق مكانها. فإذا كان التحريك موجودًا فقط ليبدو جذابًا، بينما يُبطئ الصفحة أو يعيق القراءة، فهو يضرّ أكثر مما يفيد موقع بسيط دون أي حركة.',
      'لذلك نبقيها بسيطة: نجعل المظهر الخارجي محسوبًا ومدروسًا بعناية، ونجعل كل ما تحته سريعًا وسهل الاستخدام. فالموقع الجميل الذي يُحمَّل بسرعة هو ما يحوّل الزيارة فعلًا إلى رسالة تواصل.',
    ],
  },
  {
    slug: 'social-media-management-that-grows',
    cat: 'التواصل الاجتماعي', date: 'مايو 2026', read: '٥ دقائق',
    title: 'النشر اليومي وحده ليس استراتيجية',
    intro: 'الاستمرارية بلا اتجاه واضح لا تنتج سوى محتوى لم يطلبه أحد.',
    body: [
      'أكثر ما نلاحظه: حساب ينشر يوميًا دون خطة واضحة، ثم يقيس نجاحه بعدد الإعجابات. لكن الإعجابات لا تسدّد الفواتير — الرسائل، والحفظ، والاستفسارات الحقيقية هي ما يفعل ذلك.',
      'ما ينجح فعلًا هو اختيار عدد محدود من المواضيع التي تُتقن الحديث عنها، ومعرفة الصيغ التي تنجح على كل منصة، وإنتاج المحتوى على دفعات حتى لا تتراجع الجودة وقت الانشغال. ويساعد الذكاء الاصطناعي هنا أيضًا، غالبًا في إنتاج نسخ متعددة بعد أن تكون الفكرة الأساسية واضحة.',
      'بعد ذلك، تراقب الأرقام بصدق — تواصل ما نجح في الأسبوع الماضي، وتتوقف عمّا لم ينجح. الأمر ليس مثيرًا، لكن بعد أشهر قليلة من هذا النهج يتوقف الحساب عن كونه تخمينًا ويبدأ ببناء نتائج فعلية.',
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
      eyebrow: 'Who We Are',
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
      eyebrow: 'What We Do',
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
      eyebrow: 'How We Work',
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
    tech: { eyebrow: 'Our Stack', title: 'Technologies we ', titleEm: 'actually use.' },
    portfolio: {
      eyebrow: 'Selected Work',
      title: 'A few projects ', titleEm: 'worth showing.',
      viewAll: 'View All Projects',
      items: [
        { img: workSalon, tag: 'SaaS Dashboard', title: 'Salon Loyalty Platform', text: 'A subscription platform for salons — client management, QR loyalty cards and automated reminders that bring customers back.', stack: ['SaaS', 'Dashboard', 'Loyalty System'] },
        { img: workJewelry, tag: 'E-Commerce', title: 'Attas Jewelry', text: 'A luxury jewelry storefront with live gold pricing and a premium, editorial feel that matches the brand.', stack: ['E-Commerce', 'Branding', 'UI/UX'] },
        { img: workModel, tag: 'E-Commerce', title: 'Model', text: 'A men’s fashion store with a 3D-styled hero, multi-angle product photography and a bilingual shopping experience.', stack: ['E-Commerce', 'UI/UX', 'Bilingual'] },
      ],
    },
    stats: {
      eyebrow: 'Impact', title: 'A few numbers ', titleEm: 'worth mentioning.',
      items: [
        { count: 6, suffix: '', label: 'Specialists On The Team' },
        { count: 8, suffix: '', label: 'Services Under One Roof' },
        { count: 2, suffix: '', label: 'Departments — Code & Growth' },
        { count: 100, suffix: '%', label: 'In-House Production' },
      ],
    },
    testimonials: {
      eyebrow: 'Client Voices', title: 'A few words from ', titleEm: 'people we’ve worked with.',
      quotes: [
        { text: '"They didn’t just build the site — the way people talk about us actually changed after launch. Qualified leads roughly tripled."', av: 'SK', name: 'Sara K.', role: 'CEO — AURORA MARKET' },
        { text: '"What they shipped cut out about 60% of our manual work. Careful engineering, and it actually looks good too."', av: 'OM', name: 'Omar M.', role: 'COO — SENTINEL LOGISTICS' },
        { text: "\"We'd heard 'premium' from other agencies before. This was the first time it was actually true — on time, on budget.\"", av: 'LH', name: 'Lina H.', role: 'FOUNDER — NOVA FITNESS' },
      ],
    },
    contact: {
      eyebrow: "Let's Talk", title: 'Got a project ', titleEm: 'in mind?',
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
      title: 'Have a project ', titleEm: 'worth building?',
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
        { cat: 'Web', img: workSalon, tag: 'SaaS Dashboard', title: 'Salon Loyalty Platform', text: 'A subscription platform for salons — client management, QR loyalty cards and automated reminders that bring customers back.', stack: ['SaaS', 'Dashboard', 'Loyalty System'] },
        { cat: 'Web', img: workJewelry, tag: 'E-Commerce', title: 'Attas Jewelry', text: 'A luxury jewelry storefront with live gold pricing and a premium, editorial feel that matches the brand.', stack: ['E-Commerce', 'Branding', 'UI/UX'] },
        { cat: 'Web', img: workModel, tag: 'E-Commerce', title: 'Model', text: 'A men’s fashion store with a 3D-styled hero, multi-angle product photography and a bilingual shopping experience.', stack: ['E-Commerce', 'UI/UX', 'Bilingual'] },
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
      messages: ['تجهيز VIRELIX…', 'تحميل نواة الذكاء الاصطناعي…', 'الاتصال بالخوادم…', 'تحضير التجربة…', 'إطلاق العالم الرقمي…'],
    },
    intro: { skip: 'تخطي ←' },
    hero: {
      eyebrow: 'برمجة · تسويق · نمو',
      lines: ['نرى.', 'نحلّل.', 'نبني علامات', 'تقود السوق.'],
      sub: 'نحن فريق صغير مقرّه مدينة عمّان، نبني المواقع الإلكترونية والتطبيقات، ثم نتولّى التسويق الذي يجلب الزوار إليها. فريق واحد، جدول زمني واحد، ونتيجة يمكنك فعلًا قياسها.',
      ctaPrimary: 'خدماتنا',
      ctaGhost: 'اطلب عرض سعر',
      meta: ['عمّان · الأردن', 'نرى. نحلّل. نتصدّر.', 'برمجة + تسويق'],
      scrollCue: 'مرر للأسفل',
    },
    about: {
      eyebrow: 'من نحن',
      title: 'نلاحظ التفاصيل التي يتجاهلها غيرنا. ', titleEm: 'ثم نبني عليها.',
      lead1: 'VIRELIX استوديو برمجة وتسويق مقرّه مدينة عمّان. من جهة، نبني: مواقع إلكترونية وتطبيقات وتجارب ويب ثلاثية الأبعاد. ومن جهة أخرى، ننمّي الحسابات: من خلال المحتوى، والهوية البصرية، والحملات المدعومة بالذكاء الاصطناعي، ووسائل التواصل الاجتماعي، وتحسين محركات البحث.',
      lead2: 'ستة أشخاص يعملون كفريق واحد متكامل، بدلًا من تنقّلك بين أقسام متعددة. والبومة في شعارنا تختصر الفكرة تمامًا: تراقب بعناية، وتفهم ما تراه، ثم تتصرف بناءً عليه.',
      terminalName: 'virelix — build.ts',
      values: [
        { icon: '🎯', title: 'ننفّذ، لا نعِد فقط', text: 'تحصل على عمل فعلي جاهز خلال أسابيع، لا على عرض تقديمي مليء بالوعود.' },
        { icon: '🧩', title: 'فريق واحد، لا خمس جهات', text: 'التصميم والبرمجة والتسويق على الطاولة نفسها، فلا يضيع شيء بين مراحل التسليم.' },
        { icon: '📊', title: 'نراقب الأرقام باستمرار', text: 'إن لم يكن أمر ما ناجحًا، نغيّره — فالأرقام هنا تتقدّم على الآراء الشخصية.' },
        { icon: '🦉', title: 'نراقب فعلًا قبل أن نبدأ', text: 'قبل بناء أي شيء، نُمضي وقتًا حقيقيًا في فهم مشروعك، لا في قراءة ملخص موجز فقط.' },
      ],
    },
    services: {
      eyebrow: 'ماذا نقدّم',
      title: 'برمجة من جهة. ', titleEm: 'وتسويق من جهة أخرى.',
      items: [
        { icon: '</>', title: 'تطوير المواقع والتطبيقات', text: 'مواقع وتطبيقات جوّالة مصمَّمة فعلًا لتحويل الزوار إلى عملاء، لا لتبدو جميلة في لقطة شاشة فقط.' },
        { icon: '◈', title: 'مواقع ثلاثية الأبعاد ومتحركة', text: 'مواقع سينمائية تتفاعل مع التمرير، لعلامات تجارية تريد أن تُحفَظ في الذاكرة لا أن تُزار فقط.' },
        { icon: '✦', title: 'الهوية البصرية والعلامة التجارية', text: 'الشعار والألوان والخطوط وبقية عناصر النظام — تُبنى مرة واحدة وتبقى ثابتة في كل مكان بعد ذلك.' },
        { icon: '◉', title: 'إنتاج المحتوى', text: 'تصوير فوتوغرافي وفيديو ومونتاج، ينتجه فريقنا الداخلي بالكامل من البداية إلى النهاية.' },
        { icon: '⌬', title: 'حملات مدعومة بالذكاء الاصطناعي', text: 'فيديوهات وصور مولَّدة بالذكاء الاصطناعي للحملات الإعلانية، بسرعة وتكلفة لا يستطيع الإنتاج التقليدي منافستهما.' },
        { icon: '❍', title: 'إدارة وسائل التواصل الاجتماعي', text: 'خطة محتوى وإدارة يومية هدفها حسابات تنمو فعلًا، لا حسابات تكتفي بالنشر.' },
        { icon: '▲', title: 'الإعلانات الممولة', text: 'حملات على Meta وTikTok وGoogle، تُدار لتحقيق عائد فعلي على الإنفاق، لا لمجرد المشاهدات.' },
        { icon: '↗', title: 'تحسين محركات البحث (SEO)', text: 'إصلاحات تقنية ومحتوى يرفعانك في نتائج البحث — ويبقيانك فيها.' },
      ],
    },
    process: {
      eyebrow: 'كيف نعمل',
      title: 'خطة عمل مبنية ', titleEm: 'للزخم والاستمرارية.', phaseLabel: 'المرحلة',
      steps: [
        { title: 'اكتشاف', text: 'نستفسر عن مشروعك وجمهورك ومنافسيك قبل أن نبدأ أي عمل تصميمي.' },
        { title: 'تخطيط', text: 'خريطة واضحة لبنية الموقع والمحتوى، وللتجربة التي يجب أن يشعر بها المستخدم أثناء تصفّحه.' },
        { title: 'تصميم', text: 'خطوط وألوان ومكوّنات وتفاعلات، مبنية كنظام واحد متكامل، لا كشاشات منفصلة عن بعضها.' },
        { title: 'تطوير', text: 'كود جاهز للإنتاج، مُختبَر ومُقيَّم بأرقام أداء حقيقية، لا بمجرد أنه "يبدو جيدًا".' },
        { title: 'إطلاق', text: 'النشر والتحليلات وتحسين محركات البحث، جاهزة قبل يوم الإطلاق، لا مُركَّبة بسرعة بعده.' },
        { title: 'نمو', text: 'نواصل التطوير وتشغيل الحملات بعد الإطلاق — فالموقع ليس "منتهيًا"، بل مشروع نحافظ عليه باستمرار.' },
      ],
    },
    tech: { eyebrow: 'أدواتنا التقنية', title: 'تقنيات ', titleEm: 'نستخدمها فعلًا.' },
    portfolio: {
      eyebrow: 'أعمال مختارة',
      title: 'مشاريع ', titleEm: 'تستحق العرض.',
      viewAll: 'عرض جميع المشاريع',
      items: [
        { img: workSalon, tag: 'لوحة تحكم SaaS', title: 'منصة ولاء الصالونات', text: 'منصة اشتراك للصالونات النسائية — إدارة العملاء، بطاقات ولاء عبر QR، وتذكيرات تلقائية تُعيد العميلات للصالون.', stack: ['SaaS', 'Dashboard', 'Loyalty System'] },
        { img: workJewelry, tag: 'متجر إلكتروني', title: 'مجوهرات العطاس', text: 'موقع فاخر لمحل مجوهرات، بعرض أسعار الذهب اللحظية، وتصميم يعكس فخامة العلامة التجارية.', stack: ['E-Commerce', 'Branding', 'UI/UX'] },
        { img: workModel, tag: 'متجر إلكتروني', title: 'Model', text: 'متجر إلكتروني لأزياء رجالية، بواجهة رئيسية ثلاثية الأبعاد، وصور منتجات متعددة الزوايا، وتجربة تسوق ثنائية اللغة.', stack: ['E-Commerce', 'UI/UX', 'Bilingual'] },
      ],
    },
    stats: {
      eyebrow: 'أثرنا', title: 'أرقام ', titleEm: 'تستحق الذكر.',
      items: [
        { count: 6, suffix: '', label: 'متخصصون في الفريق' },
        { count: 8, suffix: '', label: 'خدمات تحت سقف واحد' },
        { count: 2, suffix: '', label: 'قسمان — البرمجة والنمو' },
        { count: 100, suffix: '%', label: 'إنتاج داخلي بالكامل' },
      ],
    },
    testimonials: {
      eyebrow: 'آراء عملائنا', title: 'كلمات ', titleEm: 'ممن تعاملنا معهم.',
      quotes: [
        { text: '"لم يكتفوا ببناء الموقع فحسب — بل تغيّرت فعلًا الطريقة التي يتحدّث بها الناس عنّا بعد الإطلاق. تضاعف عدد العملاء المؤهَّلين قرابة ثلاث مرات."', av: 'SK', name: 'سارة ك.', role: 'المدير التنفيذي — AURORA MARKET' },
        { text: '"ما سلَّموه لنا أزال نحو 60% من عملنا اليدوي. هندسة دقيقة، ومظهر جميل فعلًا."', av: 'OM', name: 'عمر م.', role: 'مدير العمليات — SENTINEL LOGISTICS' },
        { text: '"سمعنا كلمة \'فاخر\' من وكالات أخرى من قبل. لكن هذه أول مرة تكون فيها صحيحة فعلًا — في الوقت المحدَّد وضمن الميزانية ذاتها."', av: 'LH', name: 'لينا ح.', role: 'المؤسسة — NOVA FITNESS' },
      ],
    },
    contact: {
      eyebrow: 'لنتحدث', title: 'لديك مشروع ', titleEm: 'تفكّر فيه؟',
      form: {
        name: 'اسمك', email: 'البريد الإلكتروني', company: 'اسم الشركة (اختياري)', message: 'أخبرنا عن مشروعك',
        required: 'مطلوب', invalidEmail: 'بريد إلكتروني غير صحيح',
        send: 'إرسال الرسالة', sending: 'جارِ الإرسال…',
        success: 'وصلتنا رسالتك. سيتواصل معك أحد أعضاء فريق VIRELIX خلال 24 ساعة. ✦',
        errorRate: 'عدد الرسائل كبير — يرجى المحاولة مرة أخرى بعد بضع دقائق.',
        errorGeneric: 'حدث خطأ ما. يرجى المحاولة مرة أخرى، أو التواصل معنا عبر واتساب.',
        errorNetwork: 'تعذّر الوصول إلى الخادم. يرجى المحاولة مرة أخرى، أو التواصل معنا عبر واتساب.',
      },
      info: [
        { icon: '✉', title: 'البريد الإلكتروني', value: 'virelixinfo@gmail.com' },
        { icon: '◷', title: 'رقم الهاتف', value: '+962 78 784 4005' },
        { icon: '◎', title: 'الموقع', value: 'مجمع الحسين للأعمال — مبنى 7، الطابق الثالث، مكتب 301، عمّان' },
      ],
      map: { hq: 'المقر الرئيسي لـ VIRELIX', address: 'مجمع الحسين للأعمال · مبنى 7 · الطابق الثالث · مكتب 301', open: 'افتح على خرائط جوجل' },
    },
    footer: {
      title: 'لديك مشروع ', titleEm: 'يستحق أن نبنيه؟',
      cta: 'ابدأ مشروعك',
      tagline: 'نرى. نحلّل. نتصدّر.', location: 'عمّان · الأردن · +962 78 784 4005',
      locationShort: 'عمّان · الأردن',
    },
    work: {
      eyebrow: 'أعمالنا', title: 'مشاريع ', titleEm: 'سلّمناها فعلًا.',
      lead: 'مواقع وتطبيقات وهويات وحملات نفّذها فريقنا في عمّان، لعملاء أرادوا أكثر من المعتاد.',
      filters: { All: 'الكل', Web: 'مواقع', Mobile: 'تطبيقات', Branding: 'هوية', Campaigns: 'حملات', Social: 'التواصل الاجتماعي' },
      projects: [
        { cat: 'Web', art: 'a1', tag: 'موقع تعريفي', title: 'منصة Virelix', text: 'موقعنا الخاص، بنيناه بالطريقة نفسها التي نبني بها لبقية عملائنا — وهو تحديدًا الموقع الذي تتصفّحه الآن.', stack: ['React', 'GSAP', 'Vite'] },
        { cat: 'Branding', art: 'a3', tag: 'هوية بصرية', title: 'هوية البومة الليلية', text: 'شعار وألوان وخطوط ولغة حركة لعلامتنا التجارية نحن — من هنا بدأت قصة البومة.', stack: ['Identity', 'Motion', 'AI Art'] },
        { cat: 'Web', img: workSalon, tag: 'لوحة تحكم SaaS', title: 'منصة ولاء الصالونات', text: 'منصة اشتراك للصالونات النسائية — إدارة العملاء، بطاقات ولاء عبر QR، وتذكيرات تلقائية تُعيد العميلات للصالون.', stack: ['SaaS', 'Dashboard', 'Loyalty System'] },
        { cat: 'Web', img: workJewelry, tag: 'متجر إلكتروني', title: 'مجوهرات العطاس', text: 'موقع فاخر لمحل مجوهرات، بعرض أسعار الذهب اللحظية، وتصميم يعكس فخامة العلامة التجارية.', stack: ['E-Commerce', 'Branding', 'UI/UX'] },
        { cat: 'Web', img: workModel, tag: 'متجر إلكتروني', title: 'Model', text: 'متجر إلكتروني لأزياء رجالية، بواجهة رئيسية ثلاثية الأبعاد، وصور منتجات متعددة الزوايا، وتجربة تسوق ثنائية اللغة.', stack: ['E-Commerce', 'UI/UX', 'Bilingual'] },
      ],
    },
    blog: {
      eyebrow: 'المدونة', title: 'ملاحظات من ', titleEm: 'صميم العمل نفسه.',
      lead: 'ما تعلّمناه فعلًا من بناء مشاريع حقيقية وتسويقها — بلا حشو، فقط ما نجح وما لم ينجح.',
      readArticle: 'اقرأ المقال', readSuffix: 'قراءة', allArticles: 'جميع المقالات ←',
      wantThis: 'هل تريد أن يعمل هذا الأمر لصالح مشروعك؟', talkToUs: 'تواصل معنا',
    },
    posts: postsAr,
    endOverlay: { title: 'نرى. نحلّل. نتصدّر.', subtitle: 'VIRELIX — يمكنك التمرير للأعلى في أي وقت 🦉' },
    meta: { titleHome: 'VIRELIX — نرى. نحلّل. نتصدّر.', titleWork: 'أعمالنا — VIRELIX', titleBlog: 'المدونة — VIRELIX' },
  },
}
