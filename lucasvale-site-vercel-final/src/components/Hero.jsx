import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import AnimatedMarquee from "./AnimatedMarquee";
import AnimatedNetworkOrb from "./AnimatedNetworkOrb";
import GlassCard from "./GlassCard";
import { profileLinks } from "../data/content";

export default function Hero({ heroY, isPt, lang, page, scrollTo }) {
  return (
    <section id="inicio" className="relative px-4 pb-32 pt-28 md:px-8 md:pb-40 md:pt-44">
      <AnimatedNetworkOrb />

      <motion.div style={{ y: heroY }} className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-4xl">
          <div className="mb-8 flex items-start gap-4 md:hidden">
            <span className="mt-3 block h-px w-10 bg-white/45" />
            <p className="text-[11px] uppercase tracking-[0.45em] text-slate-300/80">
              {isPt ? "Pesquisador · Professor" : "Researcher · Professor"}
            </p>
          </div>

          <div className="mb-6 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-xl md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            {page.ui.badge}
          </div>

          <h1 className="max-w-5xl text-[4.5rem] font-semibold leading-[0.88] tracking-[-0.07em] text-white sm:text-[5.5rem] md:text-7xl lg:text-8xl">
            {page.profile.name}
          </h1>

          <p className="mt-5 max-w-3xl text-3xl font-medium leading-tight text-slate-100/90 md:text-2xl md:text-slate-100/90">
            {page.profile.role}
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-200/75 md:mt-6 md:text-xl md:leading-8">
            {page.profile.shortBio}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => scrollTo("publicacoes")} className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-lg font-semibold text-slate-950 transition hover:scale-[1.03] md:px-6 md:py-3 md:text-base">
              {page.ui.publicationsButton}
              <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>

            <button onClick={() => scrollTo("projetos")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white/10 md:px-6 md:py-3 md:text-base">
              {page.ui.projectsButton}
            </button>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:text-white">
                {link.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-4">
            {page.stats.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 + index * 0.06 }}>
                <GlassCard className="p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-white/[0.11]">
                  <p className="text-3xl font-semibold tracking-tight md:text-4xl">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <AnimatedMarquee lang={lang} />
    </section>
  );
}
