import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { aboutImage } from "../data/content";

export default function AboutSection({ page }) {
  return (
    <section id="sobre" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={page.ui.aboutEyebrow} title={page.ui.aboutTitle} text={page.ui.aboutText} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22, margin: "0px 0px -90px 0px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 flex justify-center"
        >
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            className="aspect-square w-full max-w-[280px] rounded-[1.5rem] object-cover object-center md:max-w-[360px]"
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="p-8">
            <div className="mb-6 flex items-center gap-3 text-slate-100">
              <GraduationCap />
              <span className="font-semibold">{page.ui.academicProfile}</span>
            </div>
            <p className="text-lg leading-9 text-slate-100/85">{page.ui.academicText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.profile.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {page.expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22, margin: "0px 0px -90px 0px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <GlassCard className="h-full p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
