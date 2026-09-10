import { createFileRoute, notFound } from "@tanstack/react-router";
import { Gallery } from "@/components/site/gallery";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { getAlbum } from "@/lib/site";

export const Route = createFileRoute("/portfolio/$slug")({
  component: AlbumPage,
  head: ({ params }) => {
    const a = getAlbum(params.slug);
    return { meta: [{ title: `${a?.title ?? "Portfolio"} | Timeless Events` }] };
  },
});

function AlbumPage() {
  const { slug } = Route.useParams();
  const album = getAlbum(slug);
  if (!album) throw notFound();

  return (
    <main>
      <PageHero kicker="Portfolio" title={album.title} subtitle={album.subtitle} image={album.image} />
      <section className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-ink-soft">
          {album.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      {album.galleries.map((g) => (
        <section key={g.title} className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <h2 className="font-display text-3xl">{g.title}</h2>
          {g.caption ? <p className="mt-1 text-sm text-muted">{g.caption}</p> : null}
          <div className="mt-6">
            <Gallery photos={g.photos} />
          </div>
        </section>
      ))}
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <QuoteForm />
      </section>
    </main>
  );
}
