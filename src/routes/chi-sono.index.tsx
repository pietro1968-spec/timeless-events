import { createFileRoute, Link } from "@tanstack/react-router";
import { ABOUT, SITE } from "@/lib/site";

export const Route = createFileRoute("/chi-sono/")({
  component: ChiSono,
  head: () => ({
    meta: [{ title: "Chi sono | Timeless Events" }],
  }),
});

function ChiSono() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-2.jpg" alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-ink/55" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-ivory sm:py-32">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">Chi sono</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{ABOUT.headline}</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img src={ABOUT.portrait} alt={SITE.founder} className="w-full object-cover" />
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">{ABOUT.kicker}</p>
          <h2 className="mt-3 font-display text-4xl">{SITE.founder}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3 lg:px-8">
          {ABOUT.traits.map((t) => (
            <article key={t.title} className="rounded-2xl border border-line bg-paper px-6 py-8">
              <h3 className="font-display text-2xl">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
        <h2 className="font-display text-3xl">Contattami</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Se desideri pianificare un matrimonio o un evento unico e indimenticabile, scrivimi oggi. Sono qui per
          rendere i tuoi sogni realtà.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/preventivo"
            className="rounded-full bg-ink px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory"
          >
            Richiedi preventivo
          </Link>
          <Link
            to="/chi-sono/faq"
            className="rounded-full border border-ink px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
          >
            Leggi le FAQ
          </Link>
        </div>
      </section>
    </main>
  );
}
