// Demo mode for the assistant (no VITE_CHAT_ENDPOINT, or the API is unreachable):
// keyword answers built only from site content, in the visitor's language.
import { COPY, CONTACT } from '../content'
import { SERVICE_PAGES } from '../pages-content'

const isAr = (s) => /[؀-ۿ]/.test(s)
const svc = (L, id) => `${COPY[L].services.items[id].t}: ${SERVICE_PAGES[id][L].intro}`

const INTENTS = [
  { k: /price|cost|how much|quote|budget|سعر|اسعار|أسعار|تكلف|كم بكلف|كم يكلف|ميزاني/i, en: () => `Every project is different, so we don’t publish fixed prices. Answer four quick questions in the project planner and we’ll reply with questions and a proposal within one working day.\n[planner]\n[whatsapp]`, ar: () => `كل مشروع مختلف، لذلك لا ننشر أسعاراً ثابتة. أجب عن أربعة أسئلة سريعة في مخطّط المشاريع، وسنردّ بأسئلة ومقترح خلال يوم عمل واحد.\n[planner]\n[whatsapp]` },
  { k: /3d|three|animat|motion|cinematic|ثلاثي|انيميشن|أنيميشن|حركة/i, en: () => `${svc('en', '3d')}\n[service:3d]\n[work:virelix]`, ar: () => `${svc('ar', '3d')}\n[service:3d]\n[work:virelix]` },
  { k: /store|shop|e-?commerce|متجر|تسوق|بيع/i, en: () => `Yes, we build online stores, for example Attas Jewelry with live gold pricing and Model, a bilingual menswear store.\n[work:attas]\n[service:web]`, ar: () => `نعم، نبني المتاجر الإلكترونية، مثل مجوهرات العطّاس بأسعار ذهب مباشرة، ومتجر Model للأزياء الرجالية بلغتين.\n[work:attas]\n[service:web]` },
  { k: /app|website|site|web|mobile|flutter|react|تطبيق|موقع|برمج/i, en: () => `${svc('en', 'web')}\n[service:web]\n[planner]`, ar: () => `${svc('ar', 'web')}\n[service:web]\n[planner]` },
  { k: /brand|logo|identity|هوية|شعار|لوجو|براند/i, en: () => `${svc('en', 'brand')}\n[service:brand]\n[work:night-owl]`, ar: () => `${svc('ar', 'brand')}\n[service:brand]\n[work:night-owl]` },
  { k: /\bai\b|artificial|ذكاء/i, en: () => `${svc('en', 'ai')}\n[service:ai]`, ar: () => `${svc('ar', 'ai')}\n[service:ai]` },
  { k: /social|instagram|tiktok|سوشال|انستغرام|إنستغرام|تيك توك|محتوى/i, en: () => `${svc('en', 'social')}\n[service:social]\n[service:content]`, ar: () => `${svc('ar', 'social')}\n[service:social]\n[service:content]` },
  { k: /ads|advertis|campaign|meta|google ads|اعلان|إعلان|حملات|حملة/i, en: () => `${svc('en', 'ads')}\n[service:ads]`, ar: () => `${svc('ar', 'ads')}\n[service:ads]` },
  { k: /seo|search|rank|google|بحث|جوجل|ترتيب/i, en: () => `${svc('en', 'seo')}\n[service:seo]`, ar: () => `${svc('ar', 'seo')}\n[service:seo]` },
  { k: /photo|video|shoot|content|تصوير|فيديو|مونتاج/i, en: () => `${svc('en', 'content')}\n[service:content]`, ar: () => `${svc('ar', 'content')}\n[service:content]` },
  { k: /work|portfolio|project|client|example|اعمال|أعمال|مشاريع|عملاء/i, en: () => `A few projects: Salon Loyalty Platform (SaaS), Attas Jewelry and Model (e-commerce), and our own Night Owl identity.\n[work:salon]\n[work:attas]`, ar: () => `بعض المشاريع: منصة ولاء للصالونات (SaaS)، مجوهرات العطّاس وModel (متاجر إلكترونية)، وهوية Night Owl الخاصة بنا.\n[work:salon]\n[work:attas]` },
  { k: /job|career|hiring|join|cv|وظيف|توظيف|شغل عندكم|سيرة/i, en: () => `We don’t have roles listed right now, but you can send an open application on our careers page.\n[careers]`, ar: () => `لا توجد وظائف معلنة حالياً، لكن تستطيع إرسال طلب مفتوح من صفحة الوظائف.\n[careers]` },
  { k: /where|office|location|address|amman|وين|عنوان|موقعكم|مكتب|عمان|عمّان/i, en: () => `We’re in ${COPY.en.contact.address}.\n[contact]`, ar: () => `مكتبنا في ${COPY.ar.contact.address}.\n[contact]` },
  { k: /contact|call|phone|email|whatsapp|talk|تواصل|اتصال|رقم|ايميل|إيميل|واتس/i, en: () => `Email ${CONTACT.email} or call / WhatsApp ${CONTACT.phone}. We reply within one working day.\n[whatsapp]\n[contact]`, ar: () => `راسلنا على ${CONTACT.email} أو اتصل / واتساب على ${CONTACT.phone}. نردّ خلال يوم عمل واحد.\n[whatsapp]\n[contact]` },
  { k: /who|about|team|virelix|مين|من انتم|من أنتم|فريق/i, en: () => `${COPY.en.about.body}\n[contact]`, ar: () => `${COPY.ar.about.body}\n[contact]` },
  { k: /^(hi|hello|hey|salam|مرحبا|اهلا|أهلا|السلام|هاي)/i, en: () => `Hi! I can tell you about our services, our work, or help you plan a project. What are you building?`, ar: () => `أهلاً! أقدر أحكيلك عن خدماتنا وأعمالنا، أو أساعدك تخطّط لمشروعك. شو بدك تبني؟` },
]

export function demoAnswer(q) {
  const L = isAr(q) ? 'ar' : 'en'
  const hit = INTENTS.find((i) => i.k.test(q))
  if (hit) return hit[L]()
  return L === 'ar' ? 'لست متأكداً من هذا، ولا أريد أن أخمّن. فريقنا يستطيع الإجابة بدقة.\n[contact]\n[whatsapp]' : 'I’m not sure about that one, and I’d rather not guess. Our team can answer it properly.\n[contact]\n[whatsapp]'
}
