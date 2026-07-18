import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { programs } from "@/data/content";

type Item = { image: string; category: string; slug: string };

const allItems: Item[] = programs.flatMap((p) => p.gallery.map((image) => ({ image, category: p.name, slug: p.slug })));

export default function Gallery() {
  const { category } = useParams();
  const activeProgram = programs.find((p) => p.slug === category);
  const title = activeProgram ? activeProgram.name : "Öğrenci Çalışmaları";
  const [filter, setFilter] = useState(category ?? "all");
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const items = useMemo(() => (filter === "all" ? allItems : allItems.filter((i) => i.slug === filter)), [filter]);

  const move = (direction: number) => setActiveImage((current) => (current === null ? null : (current + direction + items.length) % items.length));

  return (
    <main className="bg-[#f7f6f2] pt-32 text-[#252525]">
      <Seo
        title={`${title} Galerisi`}
        description={`Eskiz Tasarım Akademisi öğrencilerinin ${title.toLowerCase()} çalışmalarından bir seçki.`}
        path={category ? `/galeri/${category}` : "/galeri"}
      />
      <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-12 lg:pb-24">
        <Link to="/#programlar" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#80672f] hover:text-[#252525]">
          <ArrowLeft size={15} /> Eğitim alanlarına dön
        </Link>
        <p className="mt-14 eyebrow">Öğrenci çalışmaları</p>
        <h1 className="mt-5 font-display text-6xl sm:text-8xl">
          {title}
          <span className="text-[#c8a04d]">.</span>
        </h1>
        <p className="mt-7 max-w-lg text-sm leading-7 text-[#69645b]">
          Her çizgi kişisel bir gözlemden, her çalışma sabırlı bir üretim sürecinden doğar. Galerimiz sürekli büyüyor.
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[.13em] transition ${filter === "all" ? "bg-[#c8a04d] text-[#222]" : "border border-[#d9d5cd] text-[#777] hover:border-[#c8a04d]"}`}
          >
            Tümü
          </button>
          {programs.map((p) => (
            <Link
              key={p.slug}
              to={`/galeri/${p.slug}`}
              onClick={() => setFilter(p.slug)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[.13em] transition ${filter === p.slug ? "bg-[#c8a04d] text-[#222]" : "border border-[#d9d5cd] text-[#777] hover:border-[#c8a04d]"}`}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-3 pb-24 lg:px-6">
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {items.map((item, index) => (
            <Reveal key={`${item.image}-${index}`} delay={(index % 6) * 0.04} className="mb-3 block">
              <button type="button" onClick={() => setActiveImage(index)} className="group relative block w-full overflow-hidden text-left">
                <img
                  src={item.image}
                  alt={`${item.category} öğrenci çalışması ${index + 1}`}
                  loading="lazy"
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-75"
                />
                <span className="absolute bottom-4 left-4 translate-y-3 text-[10px] font-bold uppercase tracking-[.16em] text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.category} · Görüntüle
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
      {activeImage !== null && (
        <div role="dialog" aria-modal="true" aria-label="Görsel önizleme" className="fixed inset-0 z-50 flex items-center justify-center bg-[#151515]/95 p-5">
          <button type="button" className="absolute right-6 top-6 text-white" onClick={() => setActiveImage(null)} aria-label="Önizlemeyi kapat">
            <X size={28} />
          </button>
          <button type="button" className="absolute left-4 text-white/75 hover:text-white sm:left-8" onClick={() => move(-1)} aria-label="Önceki görsel">
            <ChevronLeft size={34} />
          </button>
          <img src={items[activeImage].image} alt={`${items[activeImage].category} öğrenci çalışması ${activeImage + 1}`} className="max-h-[88vh] max-w-[82vw] object-contain" />
          <button type="button" className="absolute right-4 text-white/75 hover:text-white sm:right-8" onClick={() => move(1)} aria-label="Sonraki görsel">
            <ChevronRight size={34} />
          </button>
          <p className="absolute bottom-6 text-[10px] font-bold uppercase tracking-[.2em] text-white/60">
            {activeImage + 1} / {items.length}
          </p>
        </div>
      )}
    </main>
  );
}
