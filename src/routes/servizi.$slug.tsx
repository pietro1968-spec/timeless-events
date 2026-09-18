import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { FlowerGallery } from "@/components/site/flower-gallery";
import { FLOWERS, getService } from "@/lib/site";

export const Route = createFileRoute("/servizi/$slug")({
  component: ServicePage,
  head: ({ params }) => {
    const s = getService(params.slug);
    return {
      meta: [{ title: `${s?.title ?? "Servizio"} | Timeless Events` }],
    };
  },
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug);

  if (!service) {
    throw notFound();
  }

  return (
    <main>
      <PageHero
        kicker="Servizi"
        title={service.title}
        subtitle={service.excerpt}
        image={service.image}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
          {service.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {slug === "fiori" ? (
          <section className="mt-16">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Il linguaggio dei fiori
              </p>

              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                Scegli il fiore delle tue nozze
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                Una selezione di fiori, stagioni e significati per aiutarti a
                immaginare l'atmosfera floreale del tuo evento.
              </p>
            </div>

            <FlowerGallery flowers={FLOWERS} />
          </section>
        ) : null}

        {service.extras ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.extras.map((e) => (
              <article
                key={e.title}
                className="rounded-xl border border-line bg-paper px-5 py-5"
              >
                <h3 className="font-display text-xl text-ink">
                  {e.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {e.text}
                </p>
              </article>
            ))}
          </div>
        ) : null}

        {slug === "extra" ? (
          <p className="mt-8 text-sm">
            Scopri anche{" "}
            <Link
              to="/sostenibilita"
              className="text-gold-deep underline"
            >
              La Foresta Timeless Events
            </Link>
            , l'iniziativa Tree-Nation.
          </p>
        ) : null}
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <QuoteForm />
      </section>
    </main>
  );
}