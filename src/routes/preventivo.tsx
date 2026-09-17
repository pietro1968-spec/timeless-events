import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";

export const Route = createFileRoute("/preventivo")({
  component: Preventivo,
  head: () => ({
    meta: [
      { title: "Richiedi un Preventivo Gratuito | Timeless Events" },
      {
        name: "description",
        content:
          "Calcola il tuo preventivo o richiedi una consulenza gratuita e senza impegno per il tuo matrimonio o evento con Timeless Events.",
      },
    ],
  }),
});

function Preventivo() {
  return (
    <main>
      <PageHero
        compact
        kicker="Preventivo & Consulenza"
        title="Raccontaci il tuo giorno speciale"
        subtitle="Consulenza gratuita e senza impegno. Ogni evento è progettato su misura per riflettere il tuo stile."
        image="/images/ballroom.jpg"
      />

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Su Misura Per Te
          </p>
          <h2 className="mt-2 font-serif text-3xl text-stone-800 md:text-4xl">
            Pianifica il tuo evento
          </h2>
          <p className="mt-3 text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Compila il modulo sottostante per selezionare i servizi di tuo interesse e ricevere un'ipotesi di preventivo o fissare una prima consulenza conoscitiva gratuita.
          </p>
        </div>

        <QuoteForm />
      </section>
    </main>
  );
}