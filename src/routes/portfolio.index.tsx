import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioIndex,
  head: () => ({
    meta: [{ title: "Portfolio | Timeless Events" }],
  }),
});

function PortfolioIndex() {
  return (
    <main>
      <PageHero
        kicker="Portfolio"
        title="I nostri matrimoni da favola e gli eventi realizzati"
        subtitle="Esplora il portfolio di eventi organizzati a Milano e in tutta Italia."
        image="/images/hero-3.jpg"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {PORTFOLIO.map((album) => (
            <article key={album.slug} className="overflow-hidden rounded-2xl bg-paper shadow-[0_12px_40px_rgba(43,41,38,0.08)]">
              <Link to="/portfolio/$slug" params={{ slug: album.slug }} className="block">
                <div className="aspect-photo overflow-hidden">
                  <img src={album.image} alt={album.title} className="size-full object-cover" />
                </div>
              </Link>
              <div className="px-6 py-6">
                <h2 className="font-display text-2xl">{album.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{album.subtitle}</p>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: album.slug }}
                  className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-deep"
                >
                  Apri la gallery <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
