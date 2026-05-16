import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import GlassCard from "./GlassCard";
import LanguageToggle from "./LanguageToggle";
import { profile } from "../data/content";

export default function Header({ active, isPt, lang, menuOpen, nav, page, scrollTo, setLang, setMenuOpen }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 md:px-8 md:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between md:hidden">
        <button
          onClick={() => scrollTo("inicio")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
          aria-label="Início"
        >
          <Sparkles size={20} className="text-white" />
        </button>

        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
            aria-label={page.ui.openMenu}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <GlassCard className="mx-auto max-w-7xl rounded-full">
          <nav className="flex items-center justify-between px-6 py-3">
            <button onClick={() => scrollTo("inicio")} className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition group-hover:bg-white/25">
                <Sparkles size={18} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold leading-none">Lucas Vale</p>
                <p className="mt-1 text-xs text-slate-300">
                  {isPt ? "VR · Educação · História" : "VR · Education · History"}
                </p>
              </div>
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active === item.id ? "bg-white/20 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <LanguageToggle lang={lang} setLang={setLang} />
              <a
                href={`mailto:${profile.email}`}
                className="items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.03] md:flex"
              >
                {page.ui.contact} <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </GlassCard>
      </div>

      {menuOpen && (
        <GlassCard className="mx-auto mt-3 max-w-7xl md:hidden">
          <div className="grid gap-2 p-4">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="rounded-2xl px-4 py-3 text-left text-sm text-slate-100 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </GlassCard>
      )}
    </header>
  );
}
