import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-kicker font-semibold uppercase tracking-[0.28em] text-gold">404</p>
      <h1 className="mt-3 font-display text-4xl">Pagina non trovata</h1>
      <p className="mt-3 text-sm text-muted">Il percorso che cerchi non esiste. Torna alla home o ai servizi.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-ink px-7 py-3 text-nav font-semibold uppercase tracking-[0.16em] text-ivory"
      >
        Torna alla home
      </Link>
    </main>
  );
}
