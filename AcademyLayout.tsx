import { Instagram, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [["Ana Sayfa", "/"], ["Akademi", "/#akademi"], ["Programlar", "/#programlar"], ["Galeri", "/galeri"], ["Başarılar", "/#basarilar"], ["Instagram", "/#instagram"], ["İletişim", "/#iletisim"]];

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 35); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <div className="min-h-screen bg-[#f8f7f4] text-[#111]">
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "bg-[#f8f7f4]/95 text-[#222] shadow-[0_8px_30px_rgba(17,17,17,.06)] backdrop-blur-md" : "text-white"}`}>
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-12"><Link to="/" className="group flex items-center gap-3" aria-label="Eskiz Tasarım Akademisi ana sayfa"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a04d] font-display text-2xl text-[#d9b464] transition group-hover:bg-[#c8a04d] group-hover:text-white">E</span><span className="leading-none"><strong className="block font-display text-xl font-medium tracking-wide">eskiz</strong><small className={`block pt-1 text-[8px] font-semibold uppercase tracking-[0.27em] ${scrolled ? "text-[#777]" : "text-white/70"}`}>tasarım akademisi</small></span></Link><nav className="hidden items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.15em] lg:flex">{navItems.map(([label, href]) => <Link key={label} to={href} className="transition hover:text-[#c8a04d]">{label}</Link>)}<Link to="/#iletisim" className="border border-[#c8a04d] bg-[#c8a04d] px-5 py-3 text-[#252525] transition hover:bg-white">Ön Kayıt</Link></nav><button type="button" aria-label="Menüyü aç" onClick={() => setOpen(!open)} className="lg:hidden"><Menu className="h-6 w-6" /></button></div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 bg-[#222] px-6 py-7 text-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl">eskiz</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Menüyü kapat">
                <X />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-5 text-xs font-semibold uppercase tracking-[0.16em]">
              {navItems.map(([label, href]) => (
                <Link key={label} to={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    {children}
    <footer className="bg-[#202020] text-white"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.15fr] lg:px-12"><div><Link to="/" className="font-display text-4xl tracking-wide">eskiz<span className="text-[#c8a04d]">.</span></Link><p className="mt-5 max-w-xs text-sm leading-6 text-white/55">Hayal gücünü nitelikli bir portfolyoya dönüştüren sanat eğitimi.</p></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a04d]">Menü</h3><div className="mt-5 flex flex-col gap-3 text-sm text-white/65">{navItems.slice(0,5).map(([label, href]) => <a key={label} href={href} className="hover:text-white">{label}</a>)}</div></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a04d]">Bize Ulaşın</h3><a href="tel:+905074736314" className="mt-5 flex items-center gap-3 text-sm text-white/70 hover:text-white"><Phone size={16} /> +90 507 473 63 14</a><a href="https://instagram.com/eskizakademi" target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-3 text-sm text-white/70 hover:text-white"><Instagram size={16} /> @eskizakademi</a></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a04d]">Atölye</h3><p className="mt-5 text-sm leading-6 text-white/60">Kırcaali Mah. Doğanbey Kayalı Sk. İş Merkezi No:36 Kat:2 Daire:2 Osmangazi / Bursa</p></div></div><div className="border-t border-white/10 px-6 py-6 text-center text-[10px] uppercase tracking-[0.17em] text-white/35">© {new Date().getFullYear()} Eskiz Tasarım Akademisi · Bursa</div></footer>
    <a href="https://wa.me/905074736314" target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişime geç" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8a04d] text-[#252525] shadow-[0_10px_30px_rgba(37,37,37,.3)] transition hover:scale-105"><Phone size={21} /></a>
  </div>;
}
