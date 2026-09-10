import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contatti")({
  component: Contatti,
  head: () => ({
    meta: [{ title: "Contatti | Timeless Events" }],
  }),
});

function Contatti() {
  return (
    <main>
      <PageHero
        compact
        kicker="Contatti"
        title="Parliamo del tuo evento"
        subtitle="Siamo qui per aiutarti a realizzare il giorno perfetto, a Milano e in tutta Italia."
        image="/images/hero-1.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-8">
        <div className="space-y-5">
          <h2 className="font-display text-3xl">Hai bisogno di maggiori informazioni?</h2>
          <p className="text-sm leading-relaxed text-muted">
            Contattaci per organizzare il tuo evento. Elisabete ti risponde personalmente.
          </p>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm">
            <Mail className="size-4 text-gold" /> {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="flex items-center gap-3 text-sm">
            <Phone className="size-4 text-gold" /> {SITE.phoneDisplay}
          </a>
          <p className="flex items-center gap-3 text-sm">
            <MapPin className="size-4 text-gold" /> Milano · tutta Italia
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="rounded-full bg-whatsapp px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white"
            >
              WhatsApp
            </a>
            <Link
              to="/opinioni"
              className="rounded-full border border-ink px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em]"
            >
              Lascia un'opinione
            </Link>
          </div>
        </div>
        <QuoteForm compact />
      </section>
    </main>
  );
}
