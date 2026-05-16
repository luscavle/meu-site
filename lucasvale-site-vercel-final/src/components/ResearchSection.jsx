import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function ResearchSection({ page }) {
  return (
    <section id="pesquisa" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={page.ui.researchEyebrow} title={page.ui.researchTitle} text={page.ui.researchText} />

        <div className="grid gap-6 lg:grid-cols-4">
          {page.timeline.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.22, margin: "0px 0px -90px 0px" }} transition={{ duration: 0.65, delay: index * 0.08 }}>
              <GlassCard className="h-full p-6">
                <p className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-100">{item.period}</p>
                <h3 className="text-xl font-semibold leading-7">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
