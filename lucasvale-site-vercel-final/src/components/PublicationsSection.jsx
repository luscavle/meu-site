import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function PublicationsSection({ page }) {
  return (
    <section id="publicacoes" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={page.ui.publicationsEyebrow} title={page.ui.publicationsTitle} text={page.ui.publicationsText} />

        <div className="grid gap-5">
          {page.publications.map((paper, index) => (
            <motion.article key={paper.title} initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.22, margin: "0px 0px -90px 0px" }} transition={{ duration: 0.65 }}>
              <GlassCard className="p-6 md:p-7">
                <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">{paper.type}</span>
                      <span className="text-sm text-slate-300">{paper.year}</span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{paper.title}</h3>
                    <p className="mt-2 text-sm text-slate-100/80">{paper.venue}</p>
                    <p className="mt-4 max-w-4xl leading-7 text-slate-300">{paper.description}</p>
                  </div>
                 <a
  href={paper.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
>
  {page.ui.details} <ArrowUpRight size={16} />
</a>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
