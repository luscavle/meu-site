import { motion } from "framer-motion";

function FloatingOrb({ className }) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

export default function Background({ glowY }) {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(35,65,85,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(20,40,55,0.06),transparent_26%),radial-gradient(circle_at_50%_90%,rgba(25,30,40,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.90),rgba(0,0,0,0.985))]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <motion.div style={{ y: glowY }}>
        <FloatingOrb className="left-[-10rem] top-32 h-96 w-96 bg-slate-500/10" />
        <FloatingOrb className="right-[-8rem] top-96 h-[32rem] w-[32rem] bg-slate-700/10" />
      </motion.div>
    </>
  );
}
