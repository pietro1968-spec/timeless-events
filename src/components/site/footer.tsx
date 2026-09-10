import { Link } from "@tanstack/react-router";
import { SERVICES, SITE } from "@/lib/site";

const extraLinks = [
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/chi-sono/faq", label: "FAQ" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/sostenibilita", label: "Sostenibilità" },
  { to: "/promozioni", label: "Promozioni" },
  { to: "/opinioni", label: "Le vostre recensioni" },
  { to: "/contatti", label: "Contatti" },
  { to: "/preventivo", label: "Preventivo" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-olive-dark text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.14em]">
            TIMELESS <span className="italic text-gold">Events</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/75">
            Wedding planner e organizzazione eventi a {SITE.city}. Fondata da {SITE.founder}.
          </p>
          <p className="mt-5 text-sm text-ivory/80">
            <a className="hover:text-gold" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <br />
            <a className="hover:text-gold" href={SITE.phoneHref}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div>
          <p className="text-kicker font-semibold uppercase tracking-[0.22em] text-gold">Studio</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            {extraLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-kicker font-semibold uppercase tracking-[0.22em] text-gold">Servizi</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            {SERVICES.slice(0, 9).map((s) => (
              <li key={s.slug}>
                <Link to="/servizi/$slug" params={{ slug: s.slug }} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/portfolio/$slug" params={{ slug: "location" }} className="hover:text-gold">
                Location esclusive
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-kicker font-semibold uppercase tracking-[0.22em] text-gold">Seguici</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
                Instagram
              </a>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                Facebook
              </a>
            </li>
            <li>
              <a href={SITE.youtube} target="_blank" rel="noreferrer" className="hover:text-gold">
                YouTube
              </a>
            </li>
            <li>
              <a href={SITE.googleReview} target="_blank" rel="noreferrer" className="hover:text-gold">
                Recensione Google
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-5 py-5 text-center text-xs tracking-wide text-ivory/50">
        © {new Date().getFullYear()} Timeless Events Tavares · Milano
      </div>
    </footer>
  );
}
