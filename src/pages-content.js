// Copy for the deeper pages: service pages, project pages, the project planner and careers (EN + AR).
// Written from what the current Virelix site says. FAQ answers and "what we build" lists are a first draft:
// Virelix should confirm them. Do not add prices, timelines, clients or results that are not confirmed.

export const SERVICE_PAGES = {
  web: {
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'Flutter', 'PostgreSQL', 'AWS'],
    work: ['salon', 'attas', 'model'],
    en: {
      headline: 'Websites and apps that earn their keep.',
      intro: 'A good-looking site that nobody uses is an expensive poster. We design and build websites, stores and apps around what your visitors need to do, then measure whether they do it.',
      deliver: [
        { t: 'Company websites', d: 'Fast, clear sites that explain what you do and turn visits into enquiries.' },
        { t: 'Online stores', d: 'Storefronts with product pages, checkout and the details that make people buy.' },
        { t: 'Web apps & dashboards', d: 'Logins, roles, data and the admin screens your team uses every day.' },
        { t: 'Mobile apps', d: 'Cross-platform apps for iOS and Android built with Flutter.' },
        { t: 'Bilingual by design', d: 'Arabic and English planned from the first screen, not bolted on afterwards.' },
        { t: 'Analytics from day one', d: 'Tracking set up before launch, so you know what is working.' },
      ],
      faqs: [
        { q: 'Do you build in Arabic and English?', a: 'Yes. We plan both languages from the start, including right-to-left layouts, so neither version feels like a translation.' },
        { q: 'Can we update the content ourselves?', a: 'Yes. Where it makes sense we set up an editing panel so your team can change text, images and products without a developer.' },
        { q: 'What happens after launch?', a: 'We keep improving it. Many clients continue with us on maintenance, SEO or campaigns so the site keeps growing.' },
      ],
    },
    ar: {
      headline: 'مواقع وتطبيقات تستحق ما يُصرف عليها.',
      intro: 'الموقع الجميل الذي لا يستخدمه أحد مجرد ملصق مكلف. نصمم ونبني المواقع والمتاجر والتطبيقات حول ما يحتاج زوارك فعله، ثم نقيس إن كانوا يفعلونه.',
      deliver: [
        { t: 'مواقع الشركات', d: 'مواقع سريعة وواضحة تشرح ما تقدّمه وتحوّل الزيارات إلى طلبات.' },
        { t: 'المتاجر الإلكترونية', d: 'متاجر بصفحات منتجات ودفع وتفاصيل تجعل الناس يشترون.' },
        { t: 'تطبيقات ويب ولوحات تحكم', d: 'تسجيل دخول وصلاحيات وبيانات وشاشات إدارة يستخدمها فريقك يومياً.' },
        { t: 'تطبيقات الموبايل', d: 'تطبيقات لـ iOS وأندرويد مبنية بـ Flutter.' },
        { t: 'ثنائي اللغة من الأساس', d: 'العربية والإنجليزية مخطّط لهما من أول شاشة، لا تُضافان لاحقاً.' },
        { t: 'تحليلات من اليوم الأول', d: 'التتبّع جاهز قبل الإطلاق، لتعرف ما الذي ينجح.' },
      ],
      faqs: [
        { q: 'هل تبنون بالعربية والإنجليزية؟', a: 'نعم. نخطط للغتين من البداية، بما في ذلك التصميم من اليمين لليسار، فلا تبدو أي نسخة كأنها ترجمة.' },
        { q: 'هل نستطيع تعديل المحتوى بأنفسنا؟', a: 'نعم. حين يكون ذلك منطقياً نجهّز لوحة تحرير ليغيّر فريقك النصوص والصور والمنتجات دون مبرمج.' },
        { q: 'ماذا يحدث بعد الإطلاق؟', a: 'نستمر في التحسين. كثير من العملاء يكملون معنا في الصيانة أو SEO أو الحملات ليستمر الموقع في النمو.' },
      ],
    },
  },
  '3d': {
    tech: ['Three.js', 'GSAP', 'React', 'WebGL', 'Blender'],
    work: ['virelix', 'model'],
    en: {
      headline: 'Websites people remember, not just visit.',
      intro: 'Scroll-driven stories, 3D scenes and motion that feel cinematic, while still loading fast and working on a phone. The site you are on now is one of them.',
      deliver: [
        { t: 'Scroll-driven storytelling', d: 'Pages that unfold as you scroll, scene by scene.' },
        { t: '3D scenes & products', d: 'Interactive 3D heroes and product views in the browser.' },
        { t: 'Motion design', d: 'Transitions, reveals and micro-interactions that give the brand a feel.' },
        { t: 'Launch & intro sequences', d: 'Opening moments that set the tone, short enough not to annoy.' },
        { t: 'Performance first', d: 'Effects that respect slow phones and reduced-motion settings.' },
        { t: 'Showcase videos', d: 'Cinematic recordings of the site for social media and pitches.' },
      ],
      faqs: [
        { q: 'Will a 3D site be slow?', a: 'It should not be. We budget every effect, load heavy parts only when needed and test on real phones.' },
        { q: 'Does it work on mobile?', a: 'Yes. Mobile gets its own version of each effect, sometimes simpler, always smooth.' },
        { q: 'Is it good for SEO?', a: 'Yes. Content stays real text that search engines can read; the motion is a layer on top.' },
      ],
    },
    ar: {
      headline: 'مواقع يتذكّرها الناس، لا يزورونها فقط.',
      intro: 'قصص تتكشّف مع التمرير، ومشاهد ثلاثية الأبعاد، وحركة بطابع سينمائي، مع تحميل سريع وعمل سلس على الموبايل. الموقع الذي تتصفّحه الآن واحد منها.',
      deliver: [
        { t: 'سرد قصصي مع التمرير', d: 'صفحات تتكشّف مشهداً بعد مشهد كلما مرّرت.' },
        { t: 'مشاهد ومنتجات ثلاثية الأبعاد', d: 'واجهات ومنتجات تفاعلية بالأبعاد الثلاثة داخل المتصفح.' },
        { t: 'تصميم الحركة', d: 'انتقالات وظهور وتفاعلات صغيرة تعطي العلامة إحساسها.' },
        { t: 'مقدّمات افتتاحية', d: 'لحظات افتتاح تضبط الأجواء، قصيرة بما يكفي كي لا تزعج.' },
        { t: 'الأداء أولاً', d: 'مؤثرات تحترم الهواتف البطيئة وإعدادات تقليل الحركة.' },
        { t: 'فيديوهات عرض', d: 'تسجيلات سينمائية للموقع للسوشال ميديا والعروض.' },
      ],
      faqs: [
        { q: 'هل سيكون الموقع ثلاثي الأبعاد بطيئاً؟', a: 'لا يجب أن يكون. نحسب تكلفة كل مؤثر، ونحمّل الأجزاء الثقيلة عند الحاجة فقط، ونختبر على هواتف حقيقية.' },
        { q: 'هل يعمل على الموبايل؟', a: 'نعم. للموبايل نسخة خاصة من كل مؤثر، أحياناً أبسط، لكنها دائماً سلسة.' },
        { q: 'هل هو جيد لمحركات البحث؟', a: 'نعم. يبقى المحتوى نصاً حقيقياً تقرؤه محركات البحث، والحركة طبقة فوقه.' },
      ],
    },
  },
  brand: {
    tech: ['Figma', 'Illustrator', 'After Effects', 'AI image tools'],
    work: ['night-owl', 'attas'],
    en: {
      headline: 'A brand that looks like it means it.',
      intro: 'Logo, colors, type and the rest of the system, built once and used consistently everywhere after: website, social, print and packaging.',
      deliver: [
        { t: 'Logo & mark', d: 'A mark with an idea behind it, that works small and large.' },
        { t: 'Color & typography', d: 'A palette and type system for Arabic and English.' },
        { t: 'Brand guidelines', d: 'Clear rules so everyone uses the brand the same way.' },
        { t: 'Motion language', d: 'How the brand moves in video, social and on the website.' },
        { t: 'Social templates', d: 'Post and story templates your team can reuse.' },
        { t: 'Print & packaging', d: 'Cards, signage and packaging that match everything else.' },
      ],
      faqs: [
        { q: 'Can you refresh our existing logo?', a: 'Yes. Sometimes a refresh keeps what people recognise and fixes what holds the brand back.' },
        { q: 'Do we get the source files?', a: 'Yes. You receive the final files and guidelines to use the brand with any supplier.' },
        { q: 'Do you design Arabic logos?', a: 'Yes, and we make sure Arabic and English versions feel like one brand.' },
      ],
    },
    ar: {
      headline: 'هوية تبدو وكأنها تعني ما تقول.',
      intro: 'الشعار والألوان والخطوط وبقية النظام: تُبنى مرة واحدة وتُستخدم بنفس الطريقة في كل مكان: الموقع والسوشال والمطبوعات والتغليف.',
      deliver: [
        { t: 'الشعار والعلامة', d: 'علامة وراءها فكرة، تعمل بالحجم الصغير والكبير.' },
        { t: 'الألوان والخطوط', d: 'نظام ألوان وخطوط للعربية والإنجليزية.' },
        { t: 'دليل الهوية', d: 'قواعد واضحة ليستخدم الجميع العلامة بنفس الطريقة.' },
        { t: 'لغة الحركة', d: 'كيف تتحرك العلامة في الفيديو والسوشال والموقع.' },
        { t: 'قوالب السوشال', d: 'قوالب منشورات وستوري يعيد فريقك استخدامها.' },
        { t: 'المطبوعات والتغليف', d: 'بطاقات ولافتات وتغليف منسجمة مع كل شيء آخر.' },
      ],
      faqs: [
        { q: 'هل تستطيعون تحديث شعارنا الحالي؟', a: 'نعم. أحياناً يحافظ التحديث على ما يعرفه الناس ويصلح ما يعيق العلامة.' },
        { q: 'هل نحصل على الملفات المصدرية؟', a: 'نعم. تستلم الملفات النهائية ودليل الهوية لتستخدمها مع أي مورّد.' },
        { q: 'هل تصممون شعارات عربية؟', a: 'نعم، ونتأكد أن النسختين العربية والإنجليزية تبدوان علامة واحدة.' },
      ],
    },
  },
  content: {
    tech: ['Photography', 'Video', 'Premiere Pro', 'After Effects', 'Lightroom'],
    work: ['model', 'attas'],
    en: {
      headline: 'Content made in-house, start to finish.',
      intro: 'Photography, filming and editing produced end to end by our own team, so it matches the brand and arrives on time for the campaign.',
      deliver: [
        { t: 'Product photography', d: 'Clean, multi-angle product shots for stores and ads.' },
        { t: 'Brand & team shoots', d: 'Photos of your people and space that feel like you.' },
        { t: 'Short-form video', d: 'Reels and TikToks planned for the first three seconds.' },
        { t: 'Editing & motion', d: 'Cutting, color, captions and motion graphics.' },
        { t: 'Website visuals', d: 'Imagery made to fit the layout, not cropped to fit.' },
        { t: 'Content calendars', d: 'Shoots planned around what the month needs to say.' },
      ],
      faqs: [
        { q: 'Do you shoot on location?', a: 'Yes. We can shoot at your store, office or event in Amman.' },
        { q: 'Who writes the captions and scripts?', a: 'We do, in Arabic and English, and you approve before anything goes live.' },
        { q: 'Can you combine shoots with AI visuals?', a: 'Yes. We often mix real footage with AI-generated scenes when it saves time or money.' },
      ],
    },
    ar: {
      headline: 'محتوى نصنعه بأيدينا، من البداية للنهاية.',
      intro: 'تصوير فوتوغرافي وفيديو ومونتاج من البداية للنهاية بفريقنا الداخلي، ليطابق الهوية ويصل في موعده للحملة.',
      deliver: [
        { t: 'تصوير المنتجات', d: 'صور منتجات نظيفة من عدة زوايا للمتاجر والإعلانات.' },
        { t: 'تصوير العلامة والفريق', d: 'صور لفريقك ومكانك تشبهك فعلاً.' },
        { t: 'فيديوهات قصيرة', d: 'ريلز وتيك توك مخطّطة لأول ثلاث ثوانٍ.' },
        { t: 'المونتاج والحركة', d: 'قص وتلوين وترجمة وموشن جرافيك.' },
        { t: 'صور الموقع', d: 'صور مصنوعة لتناسب التصميم، لا مقصوصة لتناسبه.' },
        { t: 'خطط المحتوى', d: 'جلسات تصوير مخطّطة حول ما يجب أن يقوله الشهر.' },
      ],
      faqs: [
        { q: 'هل تصوّرون في الموقع؟', a: 'نعم. نصوّر في متجرك أو مكتبك أو فعاليتك في عمّان.' },
        { q: 'من يكتب النصوص والسيناريوهات؟', a: 'نحن، بالعربية والإنجليزية، وتوافق أنت قبل نشر أي شيء.' },
        { q: 'هل تدمجون التصوير مع صور الذكاء الاصطناعي؟', a: 'نعم. كثيراً ما نمزج لقطات حقيقية مع مشاهد مولّدة حين يوفّر ذلك الوقت أو المال.' },
      ],
    },
  },
  ai: {
    tech: ['AI video', 'AI imagery', 'Prompt design', 'After Effects', 'Premiere Pro'],
    work: ['night-owl'],
    en: {
      headline: 'Campaign visuals at the speed of an idea.',
      intro: 'AI-generated video and imagery for campaigns, at a speed and price traditional production cannot match, directed and finished by people who know the brand.',
      deliver: [
        { t: 'AI video ads', d: 'Short campaign videos generated, edited and finished in-house.' },
        { t: 'AI product scenes', d: 'Your product placed in scenes that would cost a shoot to stage.' },
        { t: 'Concept testing', d: 'Several creative directions in days, so the data picks the winner.' },
        { t: 'Brand-safe direction', d: 'Prompts and edits that keep colors, faces and tone on brand.' },
        { t: 'Seasonal campaigns', d: 'Ramadan, Eid and launch visuals ready ahead of time.' },
        { t: 'Mixed media', d: 'AI scenes combined with real footage and motion graphics.' },
      ],
      faqs: [
        { q: 'Will it look obviously AI?', a: 'Not if it is directed well. Everything is reviewed and finished by our editors before you see it.' },
        { q: 'Who owns the visuals?', a: 'You do. We deliver the final files for your campaigns.' },
        { q: 'Can you use our real products?', a: 'Yes. We start from your product photos so the item itself stays accurate.' },
      ],
    },
    ar: {
      headline: 'صور حملات بسرعة الفكرة.',
      intro: 'فيديو وصور مولّدة بالذكاء الاصطناعي لحملاتك، بسرعة وتكلفة لا يقدر عليها الإنتاج التقليدي، يوجّهها ويُنهيها أشخاص يعرفون علامتك.',
      deliver: [
        { t: 'إعلانات فيديو بالذكاء الاصطناعي', d: 'فيديوهات حملات قصيرة تُولّد وتُمنتج وتُنهى داخلياً.' },
        { t: 'مشاهد منتجات بالذكاء الاصطناعي', d: 'منتجك داخل مشاهد كانت ستحتاج جلسة تصوير كاملة.' },
        { t: 'اختبار الأفكار', d: 'عدة اتجاهات إبداعية خلال أيام، لتختار البيانات الأفضل.' },
        { t: 'توجيه يحافظ على الهوية', d: 'أوامر وتعديلات تُبقي الألوان والوجوه والنبرة ضمن الهوية.' },
        { t: 'حملات المواسم', d: 'صور رمضان والعيد والإطلاقات جاهزة قبل وقتها.' },
        { t: 'وسائط مختلطة', d: 'مشاهد مولّدة مع لقطات حقيقية وموشن جرافيك.' },
      ],
      faqs: [
        { q: 'هل ستبدو مصنوعة بالذكاء الاصطناعي بشكل واضح؟', a: 'ليس إذا وُجّهت جيداً. كل شيء يراجعه ويُنهيه محرّرونا قبل أن تراه.' },
        { q: 'لمن تعود ملكية الصور؟', a: 'لك. نسلّمك الملفات النهائية لحملاتك.' },
        { q: 'هل تستخدمون منتجاتنا الحقيقية؟', a: 'نعم. نبدأ من صور منتجك ليبقى المنتج نفسه دقيقاً.' },
      ],
    },
  },
  social: {
    tech: ['Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'Meta Business Suite'],
    work: ['night-owl'],
    en: {
      headline: 'Accounts that grow, not just post.',
      intro: 'A content calendar and daily management aimed at accounts that actually grow. Posting every day is not a strategy; knowing why you post is.',
      deliver: [
        { t: 'Strategy & pillars', d: 'What the account stands for and the topics that earn attention.' },
        { t: 'Monthly calendar', d: 'Posts, reels and stories planned and approved ahead of time.' },
        { t: 'Design & copy', d: 'Visuals and captions in Arabic and English, on brand.' },
        { t: 'Community management', d: 'Replies to comments and messages so no customer waits.' },
        { t: 'Monthly reports', d: 'What grew, what did not, and what we change next month.' },
        { t: 'Content production', d: 'Shoots and edits by our in-house team when you need them.' },
      ],
      faqs: [
        { q: 'Which platforms do you manage?', a: 'Mostly Instagram, TikTok, Facebook and LinkedIn, depending on where your customers are.' },
        { q: 'Do we approve posts?', a: 'Yes. You see and approve the calendar before anything is published.' },
        { q: 'How do we know it is working?', a: 'A monthly report with reach, engagement, followers and enquiries, and the changes we will make.' },
      ],
    },
    ar: {
      headline: 'حسابات تنمو، لا تنشر فقط.',
      intro: 'خطة محتوى وإدارة يومية هدفها حسابات تنمو فعلاً. النشر كل يوم ليس استراتيجية؛ معرفة لماذا تنشر هي الاستراتيجية.',
      deliver: [
        { t: 'الاستراتيجية والمحاور', d: 'ما الذي يمثّله الحساب والمواضيع التي تكسب الانتباه.' },
        { t: 'خطة شهرية', d: 'منشورات وريلز وستوري مخطّطة ومعتمدة مسبقاً.' },
        { t: 'التصميم والنصوص', d: 'تصاميم ونصوص بالعربية والإنجليزية ضمن الهوية.' },
        { t: 'إدارة المجتمع', d: 'الرد على التعليقات والرسائل كي لا ينتظر أي عميل.' },
        { t: 'تقارير شهرية', d: 'ما الذي نما وما الذي لم ينمُ، وما سنغيّره الشهر القادم.' },
        { t: 'إنتاج المحتوى', d: 'تصوير ومونتاج بفريقنا الداخلي حين تحتاجه.' },
      ],
      faqs: [
        { q: 'ما المنصات التي تديرونها؟', a: 'غالباً إنستغرام وتيك توك وفيسبوك ولينكدإن، حسب مكان عملائك.' },
        { q: 'هل نوافق على المنشورات؟', a: 'نعم. ترى الخطة وتوافق عليها قبل نشر أي شيء.' },
        { q: 'كيف نعرف أنها تنجح؟', a: 'تقرير شهري بالوصول والتفاعل والمتابعين والاستفسارات، والتغييرات التي سنجريها.' },
      ],
    },
  },
  ads: {
    tech: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Google Analytics', 'Pixels & tracking'],
    work: ['attas'],
    en: {
      headline: 'Ads judged by what they return.',
      intro: 'Meta, TikTok and Google campaigns run for return on spend, not just impressions. We set up tracking first, so every dinar can be followed to a result.',
      deliver: [
        { t: 'Campaign strategy', d: 'Audiences, offers and budgets planned around one goal.' },
        { t: 'Tracking setup', d: 'Pixels, conversions and analytics before the first ad runs.' },
        { t: 'Ad creatives', d: 'Images and videos made for each platform and placement.' },
        { t: 'Testing', d: 'Several angles tested so budget moves to what works.' },
        { t: 'Retargeting', d: 'Reaching people who visited but did not buy yet.' },
        { t: 'Clear reporting', d: 'Spend, results and cost per result in plain language.' },
      ],
      faqs: [
        { q: 'Which platforms should we advertise on?', a: 'Where your customers are. For many brands in Jordan that is Instagram and TikTok, plus Google for search intent.' },
        { q: 'Do you make the ad creatives too?', a: 'Yes. Our content and AI teams produce the creatives, so they are ready to test quickly.' },
        { q: 'Who pays the platforms?', a: 'The ad budget is paid to the platforms from your account; our work is managing and improving it.' },
      ],
    },
    ar: {
      headline: 'إعلانات تُقاس بما تعيده.',
      intro: 'حملات على ميتا وتيك توك وجوجل تُدار من أجل العائد على الإنفاق، لا من أجل عدد المشاهدات. نجهّز التتبّع أولاً، ليُتتبّع كل دينار حتى نتيجته.',
      deliver: [
        { t: 'استراتيجية الحملة', d: 'جماهير وعروض وميزانيات مخطّطة حول هدف واحد.' },
        { t: 'إعداد التتبّع', d: 'البكسل والتحويلات والتحليلات قبل أول إعلان.' },
        { t: 'تصاميم الإعلانات', d: 'صور وفيديوهات مصنوعة لكل منصة وموضع.' },
        { t: 'الاختبار', d: 'عدة زوايا تُختبر لتنتقل الميزانية لما ينجح.' },
        { t: 'إعادة الاستهداف', d: 'الوصول لمن زار ولم يشترِ بعد.' },
        { t: 'تقارير واضحة', d: 'الإنفاق والنتائج وتكلفة النتيجة بلغة بسيطة.' },
      ],
      faqs: [
        { q: 'على أي منصات يجب أن نعلن؟', a: 'حيث يتواجد عملاؤك. لكثير من العلامات في الأردن هي إنستغرام وتيك توك، مع جوجل لمن يبحث.' },
        { q: 'هل تصنعون تصاميم الإعلانات أيضاً؟', a: 'نعم. فريقا المحتوى والذكاء الاصطناعي يصنعان التصاميم، لتكون جاهزة للاختبار بسرعة.' },
        { q: 'من يدفع للمنصات؟', a: 'ميزانية الإعلانات تُدفع للمنصات من حسابك؛ عملنا هو إدارتها وتحسينها.' },
      ],
    },
  },
  seo: {
    tech: ['Google Search Console', 'Google Analytics', 'Schema markup', 'Core Web Vitals'],
    work: ['virelix', 'attas'],
    en: {
      headline: 'Get found, then stay found.',
      intro: 'Technical fixes and content that move you up the rankings, and keep you there. In Arabic and English, for the searches your customers actually make.',
      deliver: [
        { t: 'Technical audit', d: 'Speed, indexing, structure and errors that hold the site back.' },
        { t: 'Keyword research', d: 'What your customers search for, in Arabic and English.' },
        { t: 'On-page optimisation', d: 'Titles, content and structure for each important page.' },
        { t: 'Content plan', d: 'Articles and pages that answer real questions.' },
        { t: 'Local SEO', d: 'Google Business Profile and local searches in Amman.' },
        { t: 'Monthly tracking', d: 'Rankings, traffic and enquiries from search, every month.' },
      ],
      faqs: [
        { q: 'How long does SEO take?', a: 'Technical fixes help quickly; rankings usually build over several months of steady work.' },
        { q: 'Do you do Arabic SEO?', a: 'Yes. Arabic search behaves differently, and we research it separately.' },
        { q: 'Can you guarantee first place on Google?', a: 'No one honestly can. We promise the work and the reporting, and we show you the progress.' },
      ],
    },
    ar: {
      headline: 'أن يجدوك، ثم يبقوا يجدونك.',
      intro: 'إصلاحات تقنية ومحتوى يرفعك في نتائج البحث ويبقيك هناك. بالعربية والإنجليزية، للعبارات التي يبحث عنها عملاؤك فعلاً.',
      deliver: [
        { t: 'تدقيق تقني', d: 'السرعة والفهرسة والبنية والأخطاء التي تعيق الموقع.' },
        { t: 'بحث الكلمات المفتاحية', d: 'ما يبحث عنه عملاؤك، بالعربية والإنجليزية.' },
        { t: 'تحسين الصفحات', d: 'العناوين والمحتوى والبنية لكل صفحة مهمة.' },
        { t: 'خطة محتوى', d: 'مقالات وصفحات تجيب عن أسئلة حقيقية.' },
        { t: 'SEO محلي', d: 'ملف جوجل التجاري وعمليات البحث المحلية في عمّان.' },
        { t: 'متابعة شهرية', d: 'الترتيب والزيارات والاستفسارات من البحث، كل شهر.' },
      ],
      faqs: [
        { q: 'كم يحتاج SEO من الوقت؟', a: 'الإصلاحات التقنية تساعد بسرعة؛ والترتيب عادةً يُبنى خلال عدة أشهر من العمل المستمر.' },
        { q: 'هل تعملون SEO عربي؟', a: 'نعم. البحث بالعربية يتصرّف بشكل مختلف، ونبحثه بشكل منفصل.' },
        { q: 'هل تضمنون المركز الأول في جوجل؟', a: 'لا أحد يستطيع ذلك بصدق. نعدك بالعمل والتقارير، ونريك التقدّم.' },
      ],
    },
  },
}

// Project pages: what we know from the project descriptions only.
export const PROJECT_PAGES = {
  salon: {
    services: ['web'],
    en: { built: ['Client management for salon staff', 'QR loyalty cards customers keep on their phone', 'Automated reminders that bring customers back', 'Subscription plans for salons', 'Arabic-first dashboard'] },
    ar: { built: ['إدارة العملاء لموظفي الصالون', 'بطاقات ولاء QR يحتفظ بها العملاء على هواتفهم', 'تذكيرات تلقائية تعيد العملاء', 'خطط اشتراك للصالونات', 'لوحة تحكم بالعربية أولاً'] },
  },
  attas: {
    services: ['web', 'brand'],
    en: { built: ['Live gold pricing on the storefront', 'Premium, editorial look that matches the brand', 'Product catalogue and storefront', 'Arabic storefront experience'] },
    ar: { built: ['أسعار ذهب مباشرة على واجهة المتجر', 'طابع راقٍ وتحريري يليق بالعلامة', 'كتالوج المنتجات وواجهة المتجر', 'تجربة متجر بالعربية'] },
  },
  model: {
    services: ['web', '3d', 'content'],
    en: { built: ['3D-styled hero', 'Multi-angle product photography', 'Bilingual shopping experience', 'Online store for menswear'] },
    ar: { built: ['واجهة بطابع ثلاثي الأبعاد', 'تصوير منتجات من عدة زوايا', 'تجربة تسوّق بلغتين', 'متجر إلكتروني للأزياء الرجالية'] },
  },
  'night-owl': {
    services: ['brand', 'ai'],
    en: { built: ['Owl mark and wordmark', 'Color palette and typography', 'Motion language', 'AI-generated brand art'] },
    ar: { built: ['علامة البومة والشعار النصي', 'الألوان والخطوط', 'لغة الحركة', 'رسومات للعلامة مولّدة بالذكاء الاصطناعي'] },
  },
  virelix: {
    services: ['web', '3d', 'seo'],
    en: { built: ['Cinematic intro sequence', 'Owl that follows the cursor', 'Scroll-driven sections and motion', 'English and Arabic with right-to-left layout', 'Project planner and AI assistant'] },
    ar: { built: ['مقدّمة سينمائية', 'بومة تتبع مؤشر الماوس', 'أقسام وحركة مرتبطة بالتمرير', 'إنجليزي وعربي مع تصميم من اليمين لليسار', 'مخطط المشاريع ومساعد ذكي'] },
  },
}

export const PAGE_COPY = {
  en: {
    svc: { crumb: 'Services', deliver: 'What we deliver', process: 'How it runs', tech: 'Tools we use', faq: 'Questions, answered', related: 'Related work', more: 'More services', cta: 'Start this project', plan: 'Plan your project' },
    proj: { crumb: 'Work', built: 'What we built', services: 'Services', next: 'Next project', ask: 'Want something like this?', askBtn: 'Tell us about yours', note: 'Full case study coming soon.' },
    planner: {
      label: 'Project planner', title: ['Plan your project', 'in two minutes.'],
      lead: 'Four quick questions. You get a clear brief, the team you need and the next steps, and we get everything we need to reply properly.',
      start: 'Start planning', step: 'Step', of: 'of', back: 'Back', next: 'Next', multi: 'Choose all that apply',
      steps: [
        { id: 'what', q: 'What are you building?', multi: true, opts: { website: 'A website', store: 'An online store', webapp: 'A web app or dashboard', mobile: 'A mobile app', '3d': 'A 3D / animated site', brand: 'A brand identity', marketing: 'Marketing & growth' } },
        { id: 'stage', q: 'Where are you starting from?', opts: { idea: 'Just an idea', redesign: 'Replacing something that exists', growing: 'It exists, we want to grow it' } },
        { id: 'needs', q: 'What does it need?', multi: true, opts: { bilingual: 'Arabic & English', payments: 'Online payments', booking: 'Bookings or appointments', accounts: 'User accounts & dashboard', animation: '3D or motion', content: 'Photo & video content', ads: 'Ad campaigns', seo: 'Search visibility (SEO)' } },
        { id: 'when', q: 'When would you like to launch?', opts: { asap: 'As soon as possible', soon: 'In the next 1–3 months', flexible: 'Flexible' } },
      ],
      result: 'Your project brief', services: 'Services that fit', team: 'Who you’ll work with', teamBuild: 'Build team: design & code', teamGrow: 'Grow team: content & marketing',
      phases: 'How we’d run it', bring: 'Helpful to have ready', bringItems: { logo: 'Logo and brand files (if you have them)', examples: 'Two or three sites or accounts you like', content: 'Text, photos or product lists', access: 'Access to your current site or accounts' },
      send: 'Send this brief', copy: 'Copy brief', copied: 'Copied ✓', again: 'Start again',
      note: 'This brief is a starting point, not a quote. We reply with questions and a proposal within one working day.',
    },
    careers: {
      label: 'Careers', title: ['Build the work', 'you want to show.'], lead: 'We are a small team in Amman: developers, designers, editors and marketers working at one table. When we grow, we look for people who care about the details others skip.',
      how: 'How we work', none: 'No open roles listed right now, but we’d like to hear from you.', noneP: 'Send a short open application. We keep it on file and reach out when there is a fit.',
      areas: ['Development', 'Design & UI', '3D & motion', 'Photo & video', 'Marketing & ads', 'Something else'],
      area: 'Area you’re interested in', link: 'Portfolio, LinkedIn or CV link', about: 'Tell us about yourself', send: 'Send application', ok: '✓ Thanks! We’ll be in touch if there’s a fit.',
      errLink: 'Please enter a full link starting with https://',
    },
    nav: { start: 'Plan a project', careers: 'Careers' },
    footer: { services: 'Services', company: 'Company', tools: 'Start', planner: 'Project planner', check: 'Free website check', careers: 'Careers', contact: 'Contact', process: 'Process', about: 'About' },
  },
  ar: {
    svc: { crumb: 'خدماتنا', deliver: 'ما الذي نقدّمه', process: 'كيف يسير العمل', tech: 'الأدوات التي نستخدمها', faq: 'أسئلة وأجوبة', related: 'أعمال مرتبطة', more: 'خدمات أخرى', cta: 'ابدأ هذا المشروع', plan: 'خطّط لمشروعك' },
    proj: { crumb: 'أعمالنا', built: 'ما الذي بنيناه', services: 'الخدمات', next: 'المشروع التالي', ask: 'تريد شيئاً مشابهاً؟', askBtn: 'حدّثنا عن مشروعك', note: 'دراسة الحالة الكاملة قريباً.' },
    planner: {
      label: 'مخطّط المشاريع', title: ['خطّط لمشروعك', 'في دقيقتين.'],
      lead: 'أربعة أسئلة سريعة. تحصل على ملخّص واضح، والفريق الذي تحتاجه، والخطوات التالية، ونحصل نحن على ما نحتاجه لنردّ عليك بشكل صحيح.',
      start: 'ابدأ التخطيط', step: 'الخطوة', of: 'من', back: 'رجوع', next: 'التالي', multi: 'اختر كل ما ينطبق',
      steps: [
        { id: 'what', q: 'ماذا تريد أن تبني؟', multi: true, opts: { website: 'موقع إلكتروني', store: 'متجر إلكتروني', webapp: 'تطبيق ويب أو لوحة تحكم', mobile: 'تطبيق موبايل', '3d': 'موقع ثلاثي الأبعاد / متحرك', brand: 'هوية بصرية', marketing: 'تسويق ونمو' } },
        { id: 'stage', q: 'من أين تبدأ؟', opts: { idea: 'مجرد فكرة', redesign: 'استبدال شيء موجود', growing: 'موجود ونريد تنميته' } },
        { id: 'needs', q: 'ماذا يحتاج؟', multi: true, opts: { bilingual: 'عربي وإنجليزي', payments: 'دفع إلكتروني', booking: 'حجوزات أو مواعيد', accounts: 'حسابات مستخدمين ولوحة تحكم', animation: 'أبعاد ثلاثية أو حركة', content: 'محتوى صور وفيديو', ads: 'حملات إعلانية', seo: 'الظهور في البحث (SEO)' } },
        { id: 'when', q: 'متى تريد الإطلاق؟', opts: { asap: 'بأسرع وقت', soon: 'خلال 1–3 أشهر', flexible: 'مرن' } },
      ],
      result: 'ملخّص مشروعك', services: 'الخدمات المناسبة', team: 'مع من ستعمل', teamBuild: 'فريق البناء: تصميم وبرمجة', teamGrow: 'فريق النمو: محتوى وتسويق',
      phases: 'كيف سنديره', bring: 'من المفيد تجهيزه', bringItems: { logo: 'الشعار وملفات الهوية (إن وجدت)', examples: 'موقعان أو ثلاثة أو حسابات تعجبك', content: 'نصوص أو صور أو قوائم منتجات', access: 'صلاحية الوصول لموقعك أو حساباتك الحالية' },
      send: 'أرسل الملخّص', copy: 'انسخ الملخّص', copied: 'تم النسخ ✓', again: 'ابدأ من جديد',
      note: 'هذا الملخّص نقطة بداية، لا عرض سعر. نردّ بأسئلة ومقترح خلال يوم عمل واحد.',
    },
    careers: {
      label: 'الوظائف', title: ['ابنِ أعمالاً', 'تفخر بعرضها.'], lead: 'نحن فريق صغير في عمّان: مبرمجون ومصممون ومحرّرون ومسوّقون على طاولة واحدة. حين نكبر، نبحث عن أشخاص يهتمّون بالتفاصيل التي يتجاهلها غيرهم.',
      how: 'كيف نعمل', none: 'لا توجد وظائف معلنة حالياً، لكننا نحب أن نسمع منك.', noneP: 'أرسل طلباً مفتوحاً قصيراً. نحتفظ به ونتواصل معك حين تتوفر فرصة مناسبة.',
      areas: ['البرمجة', 'التصميم وواجهات المستخدم', 'الأبعاد الثلاثية والحركة', 'التصوير والفيديو', 'التسويق والإعلانات', 'شيء آخر'],
      area: 'المجال الذي يهمّك', link: 'رابط أعمالك أو LinkedIn أو السيرة الذاتية', about: 'حدّثنا عن نفسك', send: 'أرسل الطلب', ok: '✓ شكراً! سنتواصل معك إن توفّرت فرصة مناسبة.',
      errLink: 'الرجاء إدخال رابط كامل يبدأ بـ https://',
    },
    nav: { start: 'خطّط لمشروع', careers: 'الوظائف' },
    footer: { services: 'الخدمات', company: 'الشركة', tools: 'ابدأ', planner: 'مخطّط المشاريع', check: 'فحص مجاني لموقعك', careers: 'الوظائف', contact: 'تواصل', process: 'طريقة عملنا', about: 'من نحن' },
  },
}

// Planner answer → service mapping.
export const PLAN_MAP = {
  what: { website: ['web'], store: ['web', 'ads'], webapp: ['web'], mobile: ['web'], '3d': ['3d'], brand: ['brand'], marketing: ['social', 'ads'] },
  needs: { animation: ['3d'], content: ['content'], ads: ['ads'], seo: ['seo'] },
  stage: { growing: ['social', 'seo'] },
}
// Planner answer → contact-form "needs" chip (index into contact.needs).
export const PLAN_TO_NEED = { website: 0, store: 0, webapp: 1, mobile: 1, '3d': 2, brand: 3, marketing: 4 }
