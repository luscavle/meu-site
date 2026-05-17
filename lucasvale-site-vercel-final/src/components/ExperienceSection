import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function ExperienceSection({ page }) {
  return (
    <section id="experiencia" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={page.ui.experienceEyebrow}
          title={page.ui.experienceTitle}
          text={page.ui.experienceText}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {page.experience.map((item, index) => (
            <motion.article
              key={item.institution + item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <GlassCard className="h-full p-6 md:p-7">
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                  {item.period}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.institution}
                </h3>

                <p className="mt-2 text-sm font-medium text-white/70">
                  {item.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
