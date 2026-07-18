// TODO(Builder.io): Every array/field below is designed to map 1:1 onto a Builder.io
// custom data model (e.g. "program", "testimonial", "faqItem"). Replace static arrays
// with `useBuilderContent` / Builder Data Models queries when wiring the Builder space.
// Keeping a single typed source of truth here means every page (home, program detail,
// gallery) reads from the same editable model instead of hardcoding copy.

export type Program = {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  description: string;
  highlights: string[];
  gallery: string[];
};

const img = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;

export const programs: Program[] = [
  {
    slug: "desen",
    name: "Desen",
    shortDescription: "Gözlem ve çizgi",
    heroImage: img("3194547"),
    description:
      "Desen, güzel sanatlar yetenek sınavlarının temelini oluşturur. Bu programda öğrenciler; oran-orantı, ışık-gölge ve doku çalışmalarıyla gözlem gücünü geliştirir, çizgiye hakimiyet kazanır.",
    highlights: ["Oran ve perspektif temelleri", "Işık-gölge çalışmaları", "Doku ve materyal analizi", "Sınav formatında uygulamalar"],
    gallery: [img("3194547"), img("2029239"), img("10883892"), img("1269968")],
  },
  {
    slug: "canli-figur",
    name: "Canlı Figür",
    shortDescription: "Hareketin anatomisi",
    heroImage: img("6913917"),
    description:
      "Canlı model eşliğinde yürütülen bu program, insan anatomisini, hareketi ve dengeyi gözlemleyerek doğru orantılarla aktarma becerisini kazandırır.",
    highlights: ["Canlı model eşliğinde çalışma", "Anatomi ve hareket analizi", "Kısa süreli poz çalışmaları", "Dinamik çizim teknikleri"],
    gallery: [img("6913917"), img("8382226"), img("10883892"), img("2029239")],
  },
  {
    slug: "imgesel",
    name: "İmgesel",
    shortDescription: "Hayali görünür kıl",
    heroImage: img("1148998"),
    description:
      "İmgesel çalışmalar, öğrencinin hayal gücünü somut bir kompozisyona dönüştürmesini sağlar. Kurgu, anlatı ve özgün görsel dil bu programın odağındadır.",
    highlights: ["Kavramsal düşünme", "Özgün kompozisyon kurma", "Sembol ve anlatı dili", "Portfolyoya yönelik üretim"],
    gallery: [img("1148998"), img("1762851"), img("157811"), img("1269968")],
  },
  {
    slug: "perspektif",
    name: "Perspektif",
    shortDescription: "Mekânı kur",
    heroImage: img("157811"),
    description:
      "Bir ve iki noktalı perspektiften mekân kurgusuna kadar; bu program öğrencilere üç boyutlu düşünme ve mekânsal derinliği doğru aktarma becerisi kazandırır.",
    highlights: ["Bir/iki noktalı perspektif", "Mekân ve iç mekân kurgusu", "Derinlik ve ölçek ilişkisi", "Teknik çizim pratiği"],
    gallery: [img("157811"), img("3194547"), img("1762851"), img("6913917")],
  },
  {
    slug: "portre",
    name: "Portre",
    shortDescription: "Karakteri çiz",
    heroImage: img("10883892"),
    description:
      "Portre programında öğrenciler yüz anatomisi, oranlar ve ifade çalışmalarıyla karakteri kağıda aktarmayı; realist ve yorumlanmış portre teknikleri arasında geçiş yapmayı öğrenir.",
    highlights: ["Yüz anatomisi ve oranlar", "İfade ve karakter analizi", "Realist portre teknikleri", "Karakalem ve kuru boya çalışmaları"],
    gallery: [img("10883892"), img("8382226"), img("2029239"), img("1148998")],
  },
  {
    slug: "kompozisyon",
    name: "Kompozisyon",
    shortDescription: "Dengeyi yakala",
    heroImage: img("1762851"),
    description:
      "Kompozisyon programı; renk, denge, ritim ve odak noktası gibi tasarım ilkelerini bir araya getirerek öğrencinin özgün ve bütünlüklü çalışmalar üretmesini hedefler.",
    highlights: ["Denge ve ritim ilkeleri", "Renk ve kontrast kullanımı", "Odak noktası kurgusu", "Bütünlüklü portfolyo çalışmaları"],
    gallery: [img("1762851"), img("1148998"), img("157811"), img("3194547")],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);

export type Testimonial = { quote: string; name: string; detail: string };

export const testimonials: Testimonial[] = [
  { quote: "Eskiz’de sadece çizim yapmayı değil, baktığım şeyi gerçekten görmeyi öğrendim.", name: "Ece A.", detail: "Mimar Sinan Güzel Sanatlar Üniversitesi" },
  { quote: "Birebir ilgi sayesinde eksiklerimi net biçimde görüp kısa sürede kapattım.", name: "Kerem T.", detail: "Hacettepe Güzel Sanatlar Fakültesi" },
  { quote: "Portfolyo hazırlığı süreci, sınavdan çok daha fazlasını kazandırdı bana.", name: "Defne S.", detail: "Marmara Güzel Sanatlar Fakültesi" },
];

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  { question: "Eğitim süresi ne kadar?", answer: "Programlarımız öğrencinin hedeflediği bölüme ve mevcut seviyesine göre şekillenir. Eğitim dönemleri boyunca birebir takip sağlanır." },
  { question: "Yetenek sınavına nasıl hazırlanıyoruz?", answer: "Sınav formatına uygun desen, imgesel ve kompozisyon çalışmalarıyla; süre yönetimini içeren uygulamalı bir hazırlık süreci yürütüyoruz." },
  { question: "Kayıt için ön koşul var mı?", answer: "Hayır. Başlangıç seviyesinden ileri seviyeye kadar, her öğrenci için kişiselleştirilmiş bir çalışma planı oluşturuyoruz." },
  { question: "Ücretlendirme nasıl yapılıyor?", answer: "Ücretlendirme, seçilen programa ve haftalık ders saatine göre değişir. Detaylı bilgi için ön kayıt formunu doldurabilir veya bizi arayabilirsiniz." },
  { question: "Canlı model çalışmaları hangi sıklıkla yapılıyor?", answer: "Canlı figür dersleri düzenli bir takvimle, profesyonel modeller eşliğinde atölye ortamında gerçekleştirilir." },
  { question: "Ders saatleri nasıl düzenleniyor?", answer: "Hafta içi ve hafta sonu seçenekleriyle, okul ve çalışma programınıza uyum sağlayan esnek bir takvim oluşturuyoruz." },
];

export const successStats = [
  { number: "240+", label: "Öğrenci" },
  { number: "32", label: "Üniversite Yerleşimi" },
  { number: "12", label: "Yıllık Deneyim" },
  { number: "180+", label: "Portfolyo Projesi" },
];

export const processSteps = [
  { title: "Gözlem", description: "Doğru görmeyi ve analiz etmeyi öğrenmekle başlıyoruz." },
  { title: "Çizim", description: "Teknik beceriyi düzenli pratikle inşa ediyoruz." },
  { title: "Geri Bildirim", description: "Birebir değerlendirmelerle gelişimi hızlandırıyoruz." },
  { title: "Portfolyo", description: "Üretimleri güçlü bir anlatıya dönüştürüyoruz." },
  { title: "Yetenek Sınavı", description: "Sınav formatına uygun uygulamalı hazırlıkla tamamlıyoruz." },
];
