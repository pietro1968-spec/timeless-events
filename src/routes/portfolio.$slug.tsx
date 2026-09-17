import { createFileRoute, notFound } from "@tanstack/react-router";
import { Gallery } from "@/components/site/gallery";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { getAlbum } from "@/lib/site";

export const Route = createFileRoute("/portfolio/$slug")({
  component: AlbumPage,
  head: ({ params }) => {
    const a = getAlbum(params.slug);

    return {
      meta: [{ title: `${a?.title ?? "Portfolio"} | Timeless Events` }],
    };
  },
});

function AlbumPage() {
  const { slug } = Route.useParams();
  const album = getAlbum(slug);

  if (!album) {
    throw notFound();
  }

  return (
    <main>
      <PageHero
        kicker="Portfolio"
        title={album.title}
        subtitle={album.subtitle}
        image={album.image}
      />

      <section className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
        <div className="space-y-4 text-base leading-relaxed text-ink-soft">
          {album.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {album.galleries.map((g) => (
        <section
          key={g.title}
          className="mx-auto max-w-6xl px-5 py-10 lg:px-8"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="font-display text-3xl">{g.title}</h2>

            {g.title === "Diana e André" ||
            g.title === "Desi & Augusto" ? (
              <a
                href={
                  g.title === "Diana e André"
                    ? "https://photos.app.goo.gl/BP1fvBgQv9TZPqve6"
                    : "https://photos.app.goo.gl/YX4yvd4ykVfyno2S9"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-muted transition-transform duration-300 hover:-translate-x-0.5 hover:text-ink hover:underline hover:underline-offset-4"
              >
                Vedi tutte le foto del matrimonio
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : null}
          </div>

          {g.caption ? (
            <p className="mt-1 text-sm text-muted">{g.caption}</p>
          ) : null}

          <div className="mt-6">
            <Gallery
              photos={g.photos}
              fullGalleryUrl={
                g.title === "Diana e André"
                  ? "https://photos.app.goo.gl/BP1fvBgQv9TZPqve6"
                  : g.title === "Desi & Augusto"
                    ? "https://photos.app.goo.gl/YX4yvd4ykVfyno2S9"
                    : undefined
              }
            />
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <QuoteForm />
      </section>
    </main>
  );
}