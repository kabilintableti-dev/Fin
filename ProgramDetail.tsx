import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { programs, getProgram } from "@/data/content";

export default function ProgramDetail() {
  const { slug = "" } = useParams();
  const program = getProgram(slug);

  if (!program) return <Navigate to="/404" replace />;

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <main className="bg-[#f8f7f4] text-[#111]">
      <Seo
        title={program.name}
        description={program.description}
        image={program.heroImage}
        path={`/programlar/${program.slug}`}
      />

      {/* Hero */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[#222] pt-32 text-white">
        <img
          src={program.heroImage}
          alt={`${program.name} programı`}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(17,17,17,.9),rgba(17,17,17,.2)_65%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 lg:px-12">
          <Link
            to="/#programlar"
            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#d9b464] hover:text-white"
          >
            <ArrowLeft size={15} /> Tüm programlar
          </Link>
          <p className="eyebrow mt-8 text-[#d9b464]">Program</p>
          <h1 className="mt-4 font-display text-6xl sm:text-8xl">
            {program.name}
            <span className="text-[#c8a04d]">.</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm uppercase tracking-[.14em] text-white/60">
            {program.shortDescription}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-32">
        <Reveal>
          <p className="eyebrow">Program hakkında</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            Neye <i>odaklanıyoruz?</i>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-sm leading-7 text-[#5e594f]">{program.description}</p>
          <div className="mt-10 grid gap-4 border-t border-[#dfdcd4] pt-6 sm:grid-cols-2">
            {program.highlights.map((item) => (
              <div key={item} className="flex gap-3">
                <Check size={17} className="mt-1 shrink-0 text-[#c8a04d]" />
                <p className="text-sm leading-6 text-[#3d3a34]">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#c8a04d] px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#252525] transition hover:bg-[#222] hover:text-white"
          >
            Ön Kayıt Yap <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="bg-[#222] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 text-white">
              <div>
                <p className="eyebrow text-[#c8a04d]">Öğrenci çalışmaları</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl">{program.name} galerisi</h2>
              </div>
              <Link
                to={`/galeri/${program.slug}`}
                className="inline-flex items-center gap-3 border-b border-[#c8a04d] pb-2 text-xs font-bold uppercase tracking-[.15em] text-[#d9b464]"
              >
                Tüm galeriyi gör <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {program.gallery.map((image, index) => (
              <Reveal key={image} delay={index * 0.05} className="group relative overflow-hidden">
                <img
                  src={image}
                  alt={`${program.name} öğrenci çalışması ${index + 1}`}
                  loading="lazy"
                  className="h-full min-h-[220px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 text-center lg:px-12">
        <Reveal>
          <p className="eyebrow">Ön Kayıt</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            {program.name} programına <i>bugün başla.</i>
          </h2>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-[#c8a04d] px-7 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#252525] transition hover:bg-[#222] hover:text-white"
          >
            Ön Kayıt Yap <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>

      {/* Related Programs */}
      <section className="bg-[#e8e3d8] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow">İlgili programlar</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Diğer eğitim alanları</h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <Link
                  to={`/programlar/${item.slug}`}
                  className="group relative block min-h-[260px] overflow-hidden"
                >
                  <img
                    src={item.heroImage}
                    alt={`${item.name} programı`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#d9b464]">
                        {item.shortDescription}
                      </p>
                      <h3 className="mt-2 font-display text-3xl text-white">{item.name}</h3>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/50 text-white transition group-hover:bg-[#c8a04d] group-hover:text-[#252525]">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
