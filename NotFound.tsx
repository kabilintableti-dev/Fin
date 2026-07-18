import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NotFound() {
  return <main className="grid min-h-[70vh] place-items-center px-6 pt-24 text-center"><div><p className="eyebrow">404</p><h1 className="mt-4 font-display text-6xl">Bu sayfa <i>bulunamadı.</i></h1><p className="mt-5 text-sm text-[#6d685f]">Aradığınız içerik henüz atölyede üretilmemiş olabilir.</p><Link to="/" className="mt-8 inline-flex bg-[#c8a04d] px-6 py-4 text-xs font-bold uppercase tracking-[.14em]">Ana sayfaya dön</Link></div></main>;
}
