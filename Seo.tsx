import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
}

// TODO(Builder.io): When wiring Builder pages, map `title`/`description`/`image`
// to Builder's built-in SEO fields (data.title, data.description, data.image)
// instead of passing hardcoded props here.
function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description, image, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} · Eskiz Tasarım Akademisi`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    if (image) setMeta("og:image", image, "property");
    if (path) {
      setMeta("og:url", `https://eskiztasarimakademisi.com${path}`, "property");
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", `https://eskiztasarimakademisi.com${path}`);
    }
    setMeta("twitter:card", "summary_large_image");
  }, [title, description, image, path]);

  return null;
}
