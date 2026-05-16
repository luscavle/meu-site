export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.08] shadow-2xl shadow-black/20 backdrop-blur-2xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
