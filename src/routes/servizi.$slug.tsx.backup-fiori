import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Gallery } from "@/components/site/gallery";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { FLOWERS, getService } from "@/lib/site";

export const Route = createFileRoute("/servizi/$slug")({
  component: ServicePage,
  head: ({ params }) => {
    const s = getService(params.slug);
    return { meta: [{ title: `${s?.title ?? "Servizio"} | Timeless Events` }] };
  },
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) throw notFound();

  return (
    <main>
      <PageHero kicker="Servizi" title={service.title} subtitle={service.excerpt} image={service.image} />
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-ink-soft">
          {service.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {slug === "fiori" ? (
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {FLOWERS.map((f) => (
              <li key={f.name} className="rounded-xl border border-line bg-paper px-4 py-4">
                <p className="font-display text-xl">{f.name}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gold">{f.months}</p>
                <p className="mt-2 text-sm text-muted">{f.meaning}</p>
              </li>
            ))}
          </ul>
        ) : null}
        {service.extras ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.extras.map((e) => (
              <article key={e.title} className="rounded-xl border border-line bg-paper px-5 py-5">
                <h3 className="font-display text-xl">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.text}</p>
              </article>
            ))}
          </div>
        ) : null}
        {slug === "extra" ? (
          <p className="mt-8 text-sm">
            Scopri anche{" "}
            <Link to="/sostenibilita" className="text-gold-deep underline">
              La Foresta Timeless Events
            </Link>
            , l'iniziativa Tree-Nation.
          </p>
        ) : null}
      </section>
      {service.gallery?.length ? (
        <section className="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
          <Gallery photos={service.gallery.map((src) => ({ src }))} />
        </section>
      ) : null}
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <QuoteForm />
      </section>
    </main>
  );
}
