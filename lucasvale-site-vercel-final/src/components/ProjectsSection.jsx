import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function ProjectsSection({ page }) {
  return (
    <section id="projetos" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={page.ui.projectsEyebrow}
          title={page.ui.projectsTitle}
          text={page.ui.projectsText}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {page.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22, margin: "0px 0px -90px 0px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <GlassCard className="group h-full overflow-hidden p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                      {project.category}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/20">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
