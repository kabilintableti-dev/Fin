import { ArrowDown, ArrowRight, Check, Instagram, Play, Quote } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Seo from "@/components/Seo";
import { programs, testimonials, faqItems, successStats, processSteps } from "@/data/content";

const academyImage = "https://images.pexels.com/photos/3778079/pexels-photo-3778079.jpeg";
const studioImage = "https://images.pexels.com/photos/8382226/pexels-photo-8382226.jpeg";

const workImages = programs.map((p) => [p.gallery[0], p.name, p.slug] as const);
const filterLabels = ["Tümü", ...programs.map((p) => p.name)];

const aboutCards = [
  ["Birebir Eğitim", "Kişisel hedef ve çalışma planı"],
  ["Canlı Model Eğitimi", "Gözlem becerisini gerçek figürle geliştir"],
  ["Portfolyo Hazırlığı", "Üretimlerini güçlü bir anlatıya dönüştür"],
  ["Üniversite Odaklı Eğitim", "Sınav pratiği ve profesyonel geri bildirim"],
];

export default function Index() {
  const [filter, setFilter] = useState("Tümü");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const filteredWorks = filter === "Tümü" ? workImages : workImages.filter(([, name]) => name === filter);
  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <main>
      <Seo
        title="Bursa Güzel Sanatlar Hazırlık Akademisi"
        description="Eskiz Tasarım Akademisi; Bursa'da Güzel Sanatlar Fakültelerine hazırlıkta birebir eğitim, profesyonel atölye ortamı ve güçlü portfolyo desteği sunar."
        image={academyImage}
        path="/"
      />

      {/* HERO */}
      <section className="relative flex min-h-[720px] h-screen items-center justify-center overflow-hidden bg-[#222] text-white">
        {/* TODO(Builder.io): expose `video src` and `poster` as editable fields */}
        <video autoPlay muted loop playsInline poster={academyImage} className="absolute inset-0 h-full w-full object-cover opacity-45">
          <source src="https://cdn.coverr.co/videos/coverr-a-woman-drawing-in-a-studio-1574/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(17,17,17,.82),rgba(17,17,17,.25)_60%,rgba(17,17,17,.45))]" />
        <div className="relative mx-auto w-full max-w-[1000px] px-6 text-center">
          <Reveal>
            <p className="mb-7 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#ddba6a]">
              <span className="h-px w-10 bg-[#c8a04d]" /> Bursa · Güzel Sanatlar Hazırlık <span className="h-px w-10 bg-[#c8a04d]" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-7xl leading-[.83] sm:text-8xl lg:text-[125px]">
              Hayal Et.
              <br />
              <i className="font-light">Üret.</i> Kazan.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-9 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Güzel Sanatlar Fakültelerine hazırlıkta birebir eğitim, profesyonel atölye ortamı ve güçlü portfolyo desteği.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="https://forms.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#c8a04d] px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-[#252525] transition hover:bg-[#dfbf77]">
                Ön Kayıt Yap <ArrowRight size={16} />
              </a>
              <a href="#calismalar" className="inline-flex items-center gap-3 border border-white/50 px-6 py-4 text-xs font-bold uppercase tracking-[.12em] transition hover:border-white hover:bg-white hover:text-[#252525]">
                <Play size={14} fill="currentColor" /> Öğrenci Çalışmalarını İncele
              </a>
            </div>
          </Reveal>
        </div>
        <a href="#akademi" className="absolute bottom-9 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-white/60 animate-bounce">
          Keşfet <ArrowDown size={16} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="akademi" className="mx-auto grid max-w-[1440px] gap-16 px-6 py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-12 lg:py-40">
        <Reveal className="relative min-h-[540px] overflow-hidden">
          <img src={academyImage} alt="Eskiz atölyesinde canlı model çalışması" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute bottom-6 left-6 bg-[#f8f7f4] px-4 py-3 text-[10px] font-bold uppercase tracking-[.16em]">01 / Akademi</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Eskiz yaklaşımı</p>
          <h2 className="mt-5 font-display text-5xl leading-[.95] sm:text-6xl">
            Neden Eskiz
            <br />
            <i>Tasarım Akademisi?</i>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#666]">
            Sadece sınava değil, kendi görsel dilini oluşturmaya hazırlayan nitelikli bir sanat deneyimi.
          </p>
          <div className="mt-10 grid gap-4 border-t border-[#dfdcd4] pt-6 sm:grid-cols-2">
            {aboutCards.map(([title, text]) => (
              <div key={title} className="group flex gap-3 transition">
                <Check size={17} className="mt-1 shrink-0 text-[#c8a04d] transition group-hover:scale-125" />
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#777]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROGRAMS */}
      <section id="programlar" className="bg-[#222] py-28 text-white lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-7">
              <div>
                <p className="eyebrow text-[#c8a04d]">Programlar</p>
                <h2 className="mt-5 font-display text-5xl sm:text-6xl">Çizginin peşinde.</h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-white/50">Temelden ileri seviyeye, her çalışma alanında kişisel bir yolculuk.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Reveal key={program.slug} delay={index * 0.06} className={index === 0 ? "sm:col-span-2" : ""}>
                <Link to={`/programlar/${program.slug}`} className="group relative block min-h-[280px] overflow-hidden">
                  <img
                    src={program.heroImage}
                    alt={`${program.name} programı`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#d9b464]">{program.shortDescription}</p>
                      <h3 className="mt-2 font-display text-4xl">{program.name}</h3>
                    </div>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/50 transition group-hover:bg-[#c8a04d] group-hover:text-[#252525]">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / STUDENT WORKS */}
      <section id="calismalar" className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-40">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Öğrenci çalışmaları</p>
              <h2 className="mt-5 font-display text-5xl sm:text-6xl">
                İz bırakan <i>çizgiler.</i>
              </h2>
            </div>
            <Link to="/galeri" className="inline-flex items-center gap-3 border-b border-[#c8a04d] pb-2 text-xs font-bold uppercase tracking-[.15em]">
              Tüm galeriyi gör <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {filterLabels.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[.13em] transition ${filter === item ? "bg-[#c8a04d] text-[#222]" : "border border-[#d9d5cd] text-[#777] hover:border-[#c8a04d]"}`}
            >
              {item}
            </button>
          ))}
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {filteredWorks.map(([image, name, slug], index) => (
            <Link to={`/galeri/${slug}`} key={`${image}-${name}`} className={`group relative overflow-hidden ${index === 0 ? "md:row-span-2" : ""}`}>
              <img src={image} alt={`${name} öğrenci çalışması`} loading="lazy" className="h-full min-h-[240px] w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[.16em] text-white opacity-0 transition group-hover:opacity-100">{name} · Görüntüle</span>
            </Link>
          ))}
        </div>
      </section>

      {/* WORKSHOP */}
      <section id="atolye" className="grid min-h-[680px] lg:grid-cols-2">
        <Reveal className="relative min-h-[440px] overflow-hidden">
          <img src={studioImage} alt="Eskiz profesyonel sanat atölyesi" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-[#f8f7f4] px-4 py-3 text-[10px] font-bold uppercase tracking-[.17em]">Üretime ayrılmış alan</div>
        </Reveal>
        <div className="flex items-center bg-[#e8e3d8] px-8 py-20 lg:px-[14%]">
          <Reveal>
            <p className="eyebrow">Atölye</p>
            <h2 className="mt-5 font-display text-5xl leading-[.95] sm:text-6xl">
              Profesyonel
              <br />
              <i>Atölye Ortamı</i>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-[#69645b]">
              Gerçek üretim ortamında, üniversite yetenek sınavlarına yönelik uygulamalı eğitim.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION PROCESS */}
      <section id="surec" className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">
        <Reveal>
          <p className="eyebrow">Eğitim süreci</p>
          <h2 className="mt-5 font-display text-5xl sm:text-6xl">
            Adım adım <i>yetkinlik.</i>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 border-t border-[#dfdcd4] pt-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08} className="relative">
              <span className="font-display text-3xl text-[#c8a04d]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-xs leading-6 text-[#777]">{step.description}</p>
              {index < processSteps.length - 1 && <span className="mt-6 hidden h-px w-full bg-[#dfdcd4] lg:block" />}
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUCCESS */}
      <section id="basarilar" className="bg-[#222] px-6 py-24 text-white lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <p className="eyebrow text-[#c8a04d]">Başarılar</p>
          </Reveal>
          <div className="mt-10 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {successStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <AnimatedCounter value={stat.number} />
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/50">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#e8e3d8] py-24">
        <div className="mx-auto max-w-[1060px] px-6 text-center">
          <Quote className="mx-auto text-[#c8a04d]" size={33} />
          <Reveal key={testimonialIndex}>
            <blockquote className="mt-7 font-display text-4xl leading-tight sm:text-5xl">“{activeTestimonial.quote}”</blockquote>
            <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-[#767166]">
              {activeTestimonial.name} · {activeTestimonial.detail}
            </p>
          </Reveal>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, index) => (
              <button
                type="button"
                key={t.name}
                aria-label={`${index + 1}. yorumu göster`}
                onClick={() => setTestimonialIndex(index)}
                className={`h-2 w-2 rounded-full transition ${index === testimonialIndex ? "bg-[#c8a04d] w-6" : "bg-[#c9c3b4]"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-40">
        <Reveal>
          <p className="eyebrow">Merak edilenler</p>
          <h2 className="mt-5 font-display text-5xl leading-[.95] sm:text-6xl">
            Aklında
            <br />
            <i>ne varsa.</i>
          </h2>
        </Reveal>
        <div>
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details className="group border-t border-[#d4d0c8] py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-2xl">
                  <span>{item.question}</span>
                  <span className="text-[#c8a04d] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-xl pt-4 text-sm leading-7 text-[#68645c]">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="instagram" className="bg-[#222] px-6 py-24 text-white lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_.9fr]">
          <Reveal>
            <p className="eyebrow text-[#c8a04d]">Instagram</p>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl">
              Instagram'da <i>Eskiz</i>
            </h2>
            <a
              href="https://instagram.com/eskizakademi"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-[#c8a04d] px-5 py-4 text-xs font-bold uppercase tracking-[.13em] text-[#d9b464] transition hover:bg-[#c8a04d] hover:text-[#252525]"
            >
              <Instagram size={16} /> @eskizakademi
            </a>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-3 gap-3">
            {workImages.slice(0, 6).map(([image, name]) => (
              <img key={image} src={image} alt={`Eskiz Instagram paylaşımı - ${name}`} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105" />
            ))}
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="iletisim" className="mx-auto grid max-w-[1440px] gap-12 px-6 py-28 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-40">
        <Reveal>
          <p className="eyebrow">İletişim</p>
          <h2 className="mt-5 font-display text-5xl leading-[.95] sm:text-6xl">
            İlk çizgiyi
            <br />
            <i>birlikte atalım.</i>
          </h2>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-[#c8a04d] px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#252525] transition hover:bg-[#222] hover:text-white"
          >
            Ön Kayıt Yap <ArrowRight size={16} />
          </a>
        </Reveal>
        <Reveal delay={0.1} className="overflow-hidden bg-[#e8e3d8]">
          <iframe
            title="Eskiz Tasarım Akademisi konumu"
            src="https://www.google.com/maps?q=K%C4%B1rcaali%20Mahallesi%20Osmangazi%20Bursa&output=embed"
            className="h-64 w-full border-0 grayscale lg:h-full lg:min-h-[390px]"
            loading="lazy"
          />
          <div className="grid gap-5 p-7 sm:grid-cols-2">
            <a href="tel:+905074736314" className="font-display text-2xl">
              +90 507 473 63 14
            </a>
            <p className="text-sm leading-6 text-[#5e594f]">Kırcaali Mah. Doğanbey Kayalı Sk. İş Merkezi No:36 Kat 2 Daire 2 Osmangazi / Bursa</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
