import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";

export const Route = createFileRoute("/preventivo")({
  component: Preventivo,
  head: () => ({
    meta: [{ title: "Richiedi preventivo | Timeless Events" }],
  }),
});

function Preventivo() {
  return (
    <main>
      <PageHero
        compact
        kicker="Preventivo"
        title="Raccontaci il tuo giorno"
        subtitle="Consulenza gratuita e senza impegno. Ogni evento è progettato su misura."
        image="/images/ballroom.jpg"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <QuoteForm />
      </section>
    </main>
  );
}
