import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/page-hero";
import { QUOTES, SITE } from "@/lib/site";

type Review = { name: string; event: string; text: string; createdAt: string };

const KEY = "te-reviews";

export const Route = createFileRoute("/opinioni")({
  component: Opinioni,
  head: () => ({
    meta: [{ title: "Le vostre recensioni | Timeless Events" }],
  }),
});

function Opinioni() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [event, setEvent] = useState("Matrimonio");
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      setReviews(JSON.parse(localStorage.getItem(KEY) || "[]") as Review[]);
    } catch {
      setReviews([]);
    }
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Review[] = [{ name, event, text, createdAt: new Date().toISOString() }, ...reviews].slice(0, 30);
    localStorage.setItem(KEY, JSON.stringify(next));
    setReviews(next);
    setName("");
    setText("");
    setSaved(true);
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-line bg-ivory px-3.5 py-2.5 text-sm outline-none focus:border-gold";

  return (
    <main>
      <PageHero
        compact
        kicker="Opinioni"
        title="Lascia la tua esperienza"
        subtitle="Condividi come abbiamo organizzato il tuo evento a Milano e in tutta Italia."
        image="/images/toast.jpg"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {QUOTES.map((q) => (
            <blockquote key={q.author} className="rounded-xl border border-line bg-paper px-4 py-5">
              <p className="font-display text-base italic">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-3 text-[0.65rem] uppercase tracking-[0.16em] text-gold">{q.author}</footer>
            </blockquote>
          ))}
        </div>

        <form onSubmit={onSubmit} className="mt-12 rounded-2xl border border-line bg-paper p-6 sm:p-8">
          <h2 className="font-display text-2xl">La tua opinione</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-medium text-ink-soft">
              Nome
              <input required className={field} value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="text-xs font-medium text-ink-soft">
              Evento
              <input className={field} value={event} onChange={(e) => setEvent(e.target.value)} />
            </label>
            <label className="text-xs font-medium text-ink-soft sm:col-span-2">
              Messaggio
              <textarea required rows={4} className={field} value={text} onChange={(e) => setText(e.target.value)} />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-full bg-ink px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory"
          >
            Pubblica
          </button>
          {saved ? <p className="mt-3 text-sm text-olive">Grazie. La tua recensione è visibile su questo dispositivo.</p> : null}
        </form>

        {reviews.length ? (
          <ul className="mt-10 space-y-4">
            {reviews.map((r) => (
              <li key={r.createdAt} className="rounded-xl border border-line bg-paper px-5 py-5">
                <p className="font-display text-lg">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-gold">{r.event}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-10 text-center text-sm text-muted">
          Puoi anche lasciare una recensione su{" "}
          <a href={SITE.googleReview} className="text-gold-deep underline" target="_blank" rel="noreferrer">
            Google
          </a>
          .
        </p>
      </section>
    </main>
  );
}
