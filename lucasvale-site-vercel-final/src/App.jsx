import { useEffect, useMemo, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import AboutSection from "./components/AboutSection";
import Background from "./components/Background";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import PublicationsSection from "./components/PublicationsSection";
import ResearchSection from "./components/ResearchSection";
import { getPageContent } from "./data/content";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("pt");
  const [active, setActive] = useState("inicio");

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  const isPt = lang === "pt";
  const page = getPageContent(isPt);

  const nav = useMemo(
    () => [
      { id: "inicio", label: lang === "pt" ? "Início" : "Home" },
      { id: "sobre", label: lang === "pt" ? "Sobre" : "About" },
      { id: "pesquisa", label: lang === "pt" ? "Pesquisa" : "Research" },
      { id: "publicacoes", label: lang === "pt" ? "Publicações" : "Publications" },
      { id: "projetos", label: lang === "pt" ? "Projetos" : "Projects" },
      { id: "contato", label: lang === "pt" ? "Contato" : "Contact" },
    ],
    [lang]
  );

  useEffect(() => {
    const sections = nav.map((item) => document.getElementById(item.id));

    const onScroll = () => {
      const current = sections
        .filter(Boolean)
        .map((section) => ({ id: section.id, top: Math.abs(section.getBoundingClientRect().top - 120) }))
        .sort((a, b) => a.top - b.top)[0];

      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [nav]);

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] font-sans text-white">
      <Background glowY={glowY} />

      <Header
        active={active}
        isPt={isPt}
        lang={lang}
        menuOpen={menuOpen}
        nav={nav}
        page={page}
        scrollTo={scrollTo}
        setLang={setLang}
        setMenuOpen={setMenuOpen}
      />

      <Hero heroY={heroY} isPt={isPt} lang={lang} page={page} scrollTo={scrollTo} />
      <AboutSection page={page} />
      <ResearchSection page={page} />
      <PublicationsSection page={page} />
      <ProjectsSection page={page} />
      <ContactSection page={page} />

      <footer className="px-4 pb-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{page.ui.footerLeft}</p>
          <p>{page.ui.footerRight}</p>
        </div>
      </footer>
    </main>
  );
}
