import { motion } from "framer-motion";

export default function AnimatedMarquee({ lang }) {
  const items =
    lang === "pt"
      ? ["REALIDADE VIRTUAL", "HUMANIDADES DIGITAIS", "ENSINO DE HISTÓRIA", "JOGOS EDUCACIONAIS", "PESQUISA", "INOVAÇÃO EDUCACIONAL"]
      : ["VIRTUAL REALITY", "DIGITAL HUMANITIES", "HISTORY EDUCATION", "EDUCATIONAL GAMES", "RESEARCH", "EDUCATIONAL INNOVATION"];

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/10 bg-white/[0.03] py-2 backdrop-blur-sm md:py-3">
      <motion.div
        className="flex w-max gap-4 whitespace-nowrap text-[0.56rem] font-medium uppercase tracking-[0.32em] text-slate-400/45 md:gap-6 md:text-[0.68rem] md:tracking-[0.45em] md:text-slate-300/50"
        animate={{ x: [0, -520] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item} <span className="ml-4 text-slate-500/35 md:ml-6 md:text-slate-400/40">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
