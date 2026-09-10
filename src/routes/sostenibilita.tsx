import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sostenibilita")({
  component: Sostenibilita,
  head: () => ({
    meta: [{ title: "Sostenibilità · La Foresta | Timeless Events" }],
  }),
});

function Sostenibilita() {
  return (
    <main>
      <PageHero
        kicker="Sostenibilità"
        title="La Foresta di Timeless Events"
        subtitle="Un albero per ogni amore che cresce."
        image="/images/forest.jpg"
      />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Per ogni Amore una Radice</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Grazie a ogni coppia e ogni ospite, piantiamo alberi veri nel mondo per rendere ogni evento più
            sostenibile e pieno di vita.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Ogni albero virtuale rappresenta un albero reale piantato in progetti di riforestazione in tutto il
            mondo, grazie alla piattaforma{" "}
            <a href={SITE.treeNation} className="text-gold-deep underline" target="_blank" rel="noreferrer">
              Tree-Nation
            </a>
            . Gli sposi o gli ospiti possono regalare alberi, contribuendo a un pianeta più verde.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Un albero è già stato piantato in Tanzania come simbolo d'amore e impegno verso un futuro più verde.
            Puoi vedere gli alberi piantati, i Paesi coinvolti e l'impatto ambientale generato grazie ai nostri
            eventi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.treeNation}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory"
            >
              Pianta un albero
            </a>
            <Link
              to="/preventivo"
              className="rounded-full border border-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
            >
              Includilo nel preventivo
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img src="/images/tree-plant.jpg" alt="Riforestazione" className="aspect-portrait w-full object-cover" />
        </div>
      </section>
      <section className="bg-olive py-16 text-center text-ivory">
        <p className="font-display text-3xl italic">Un gesto d'amore che lascia un'impronta nel tempo.</p>
        <p className="mx-auto mt-4 max-w-xl px-6 text-sm text-ivory/80">
          Un regalo green, sostenibile e carico di significato, che racconta il vostro giorno con radici e valori.
        </p>
      </section>
    </main>
  );
}
