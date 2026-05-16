export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 backdrop-blur-md">
      {["pt", "en"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
            lang === code ? "bg-white/80 text-black" : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
