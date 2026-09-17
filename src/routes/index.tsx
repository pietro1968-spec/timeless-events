import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ABOUT, FEATURED_SERVICES, FLOWERS, HERO_SLIDES, QUOTES, SITE } from "@/lib/site";
import { ServiceCard } from "@/components/site/service-card";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Il Tuo Giorno Perfetto Inizia Qui! | Timeless Events" }],
  }),
});

function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main>
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden text-ivory">
        {HERO_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 size-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.4em] text-gold">Wedding Planner</p>
          <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Timeless Events
          </h1>
          <p className="mt-2 font-display text-2xl italic text-gold sm:text-3xl">Tavares</p>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/90 sm:text-lg">
            Trasformiamo i vostri sogni in realtà senza tempo, curando ogni dettaglio con l'eleganza che meritate.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/preventivo"
              className="rounded-full bg-gold px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-deep"
            >
              Richiedi preventivo
            </Link>
            <Link
              to="/chi-sono"
              className="rounded-full border border-gold/80 px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-gold hover:text-ink"
            >
              Scopri di più su di me
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img src={ABOUT.portrait} alt={SITE.founder} className="aspect-portrait w-full object-cover" />
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">La fondatrice</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            {SITE.name}: wedding planner a {SITE.city}
          </h2>
          <p className="mt-5 font-display text-xl italic text-ink-soft">{QUOTES[0]?.quote || QUOTES[0]?.text}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">{ABOUT.paragraphs[0]}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{ABOUT.paragraphs[1]}</p>
          <Link
            to="/chi-sono"
            className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-deep"
          >
            Scopri di più su di me <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      <section className="bg-olive py-10 text-center text-ivory">
        <p className="mx-auto max-w-3xl px-6 font-display text-xl italic sm:text-2xl">
          Ogni evento è unico e indimenticabile. Esplora le nostre aree di specializzazione.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURED_SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} featured />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/servizi"
            className="inline-flex rounded-full border border-ink px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] hover:bg-ink hover:text-ivory"
          >
            Tutti i servizi
          </Link>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">Dillo con i fiori</p>
            <h2 className="mt-3 font-display text-4xl">Il linguaggio segreto dei fiori</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Scopri la nostra collezione floreale: ogni fiore racconta una storia di bellezza, simbolo e significato.
              I fiori trasformano l'atmosfera, parlano al cuore e rendono ogni momento unico.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {FLOWERS.slice(0, 6).map((f) => (
                <li key={f.name} className="rounded-lg border border-line bg-paper px-3 py-3">
                  <p className="font-display text-lg">{f.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{f.meaning}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/servizi/$slug"
              params={{ slug: "fiori" }}
              className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-deep"
            >
              Esplora i fiori <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/bouquet.jpg" alt="Allestimento floreale" className="aspect-portrait w-full object-cover" />
          </div>
        </div>
      </section>

      {/* SEZIONE DICONO DI NOI / RECENSIONI */}
      <section className="bg-cream/50 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">Dicono di noi</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Le vostre recensioni</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted">
            Dalla prima visione al dettaglio finale, curo ogni aspetto per regalarvi un giorno senza pensieri.
          </p>

          {/* Slider Scorrevole */}
          <div className="mt-12 flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gold/30">
            {QUOTES.map((q, idx) => (
              <blockquote
                key={idx}
                className="w-[300px] shrink-0 snap-center rounded-2xl border border-line bg-paper p-6 text-left shadow-sm transition-transform hover:-translate-y-1 sm:w-[350px]"
              >
                <div className="flex items-center gap-1 text-gold mb-3">
                  {Array.from({ length: q.stars || 5 }).map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <p className="font-display text-base italic leading-relaxed text-ink-soft">
                  &ldquo;{q.quote || q.text}&rdquo;
                </p>
                <footer className="mt-6 border-t border-line/60 pt-4">
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-gold">
                    {q.author}
                  </p>
                  {q.event && (
                    <p className="text-[0.68rem] text-muted font-light mt-0.5">{q.event}</p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Invito a lasciare una recensione su Google */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/place//@45.6042778,9.1471772,14z/data=!3m1!4b1!4m3!3m2!1s0x67fb5f0569c8edcd:0xd03ac7a0c0b13867!12e1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/80 bg-paper px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink shadow-sm hover:bg-gold hover:text-ink transition-colors"
            >
              <span>⭐ Lascia una recensione su Google</span>
            </a>
          </div>

          <div className="mt-16 border-t border-line/60 pt-12">
            <p className="font-display text-2xl sm:text-3xl">Sei pronto/a a fare il grande passo?</p>
            <p className="mt-2 text-sm text-muted max-w-xl mx-auto">
              Ascolto i vostri desideri per tradurli in realtà. Insieme costruiremo l'atmosfera magica che avete sempre immaginato.
            </p>
            <Link
              to="/preventivo"
              className="mt-6 inline-flex rounded-full bg-ink px-8 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-gold hover:text-ink transition-colors"
            >
              Inizia da qui
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}