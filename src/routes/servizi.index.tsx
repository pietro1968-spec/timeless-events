import { createFileRoute } from "@tanstack/react-router";
import { FEATURED_SERVICES, SERVICES, TRENDS_2026 } from "@/lib/site";
import { ServiceCard } from "@/components/site/service-card";

export const Route = createFileRoute("/servizi/")({
  component: ServiziIndex,
  head: () => ({
    meta: [{ title: "Servizi Esclusivi | Timeless Events" }],
  }),
});

function ServiziIndex() {
  const more = SERVICES.filter((s) => !FEATURED_SERVICES.some((f) => f.slug === s.slug));

  return (
    <main>
      <section className="bg-olive py-8 text-center text-ivory sm:py-10">
        <p className="px-6 font-display text-xl italic sm:text-2xl">
          Ogni evento è unico e indimenticabile. Esplora le nostre aree di specializzazione.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURED_SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} featured />
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center text-kicker font-semibold uppercase tracking-[0.28em] text-gold">
            Tutti i servizi
          </p>
          <h2 className="mt-2 text-center font-display text-3xl sm:text-4xl">
            Matrimoni, cerimonie, feste private e aziendali
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Timeless Events by Elisabete Tavares realizza eventi su misura. Ogni servizio è progettato con cura
            sartoriale, per un'esperienza esclusiva e indimenticabile.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <p className="text-kicker font-semibold uppercase tracking-[0.28em] text-gold">{TRENDS_2026.title}</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">{TRENDS_2026.lead}</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          {TRENDS_2026.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
