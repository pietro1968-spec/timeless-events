import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/promozioni")({
  component: Promozioni,
  head: () => ({
    meta: [{ title: "Promozioni | Timeless Events" }],
  }),
});

function Promozioni() {
  return (
    <main>
      <PageHero
        compact
        kicker="Promozioni"
        title="Offerte speciali per il tuo evento"
        subtitle="Approfitta delle iniziative Timeless Events per matrimoni, compleanni e molto altro."
        image="/images/peony.jpg"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <article className="overflow-hidden rounded-2xl border border-line bg-paper">
          <img src="/images/forest.jpg" alt="La Foresta" className="aspect-banner w-full object-cover" />
          <div className="px-6 py-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">La tua Foresta</p>
            <h2 className="mt-2 font-display text-3xl">Un albero per ogni amore che cresce</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Includi la riforestazione Tree-Nation nel tuo evento: un dono per gli ospiti e per il pianeta.
            </p>
            <Link
              to="/sostenibilita"
              className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory"
            >
              Scopri La Foresta
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
