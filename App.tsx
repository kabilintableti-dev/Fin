import "./global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AcademyLayout from "./components/AcademyLayout";
import Gallery from "./pages/Gallery";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgramDetail from "./pages/ProgramDetail";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AcademyLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/programlar/:slug" element={<ProgramDetail />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/galeri/:category" element={<Gallery />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AcademyLayout>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
