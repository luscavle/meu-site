import { FileText, Mail, MapPin, Presentation } from "lucide-react";
import GlassCard from "./GlassCard";
import { profile } from "../data/content";

export default function ContactSection({ page }) {
  return (
    <section id="contato" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <GlassCard className="p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-300/80">{page.ui.contact}</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{page.ui.contactTitle}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/75">{page.ui.contactText}</p>
            </div>

            <div className="grid gap-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/20">
                <Mail className="text-slate-100" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-sm text-slate-300">{profile.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-white/15 bg-white/10 p-5">
                <MapPin className="text-slate-100" />
                <div>
                  <p className="font-semibold">{page.ui.location}</p>
                  <p className="text-sm text-slate-300">{profile.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 rounded-3xl bg-white px-5 py-4 font-semibold text-slate-950 transition hover:scale-[1.03]">
                  <FileText size={18} /> Lattes
                </button>
                <button className="flex items-center justify-center gap-2 rounded-3xl border border-white/20 bg-white/10 px-5 py-4 font-semibold text-white transition hover:bg-white/20">
                  <Presentation size={18} /> CV
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
