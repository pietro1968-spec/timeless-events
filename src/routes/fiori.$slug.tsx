import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FLOWERS } from "@/lib/site";

export const Route = createFileRoute("/fiori/$slug")({
  component: FlowerDetailPage,
});

function FlowerDetailPage() {
  const { slug } = Route.useParams();

  const flower = FLOWERS.find((item) => {
    const imageName = item.image
      .split("/")
      .pop()
      ?.replace(".jpg", "");

    return imageName === slug;
  });

  if (!flower) {
    throw notFound();
  }

  return (
    <main className="min-h-screen bg-paper">
      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <Link
          to="/servizi/fiori"
          className="inline-flex items-center text-sm text-muted transition hover:text-gold-deep"
        >
          ← Torna ai fiori
        </Link>

        <div className="mt-8 grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-2">
          <div className="min-h-[420px] bg-stone-100 lg:min-h-[680px]">
            <img
              src={flower.image}
              alt={flower.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Il linguaggio dei fiori
            </p>

            <h1 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-6xl">
              {flower.name}
            </h1>

            <div className="mt-7 h-px w-16 bg-gold" />

            <div className="mt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Periodo
              </p>

              <p className="mt-2 text-base text-ink-soft">
                {flower.months}
              </p>
            </div>

            <div className="mt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Significato
              </p>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {flower.meaning}
              </p>
            </div>

            <div className="mt-10">
              <Link
                to="/servizi/fiori"
                className="inline-flex rounded-full border border-line px-6 py-3 text-sm uppercase tracking-[0.16em] text-ink transition hover:border-gold hover:text-gold-deep"
              >
                Scopri gli altri fiori
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}