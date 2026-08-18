import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold text-gold-foreground">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink-foreground/75">
            A tuition-free school where every learner grows in character, academics and
            technology — with AI literacy woven through daily learning.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-base font-semibold">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-foreground/75 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{SITE.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{SITE.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AI KISA School. Education is free, always.</p>
          <p>Contact details and statistics shown are placeholders pending official confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
