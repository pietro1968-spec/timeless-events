import { useState } from "react";
import { SITE } from "@/lib/site";

const EVENT_TYPES = [
  "Matrimonio",
  "Battesimo",
  "Comunione",
  "Compleanno",
  "Evento aziendale",
  "Altro",
];

type Fields = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  city: string;
  guests: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  eventType: "Matrimonio",
  date: "",
  city: "",
  guests: "",
  message: "",
};

export function QuoteForm({ compact }: { compact?: boolean }) {
  const [fields, setFields] = useState<Fields>(empty);
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...fields, createdAt: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem("te-quotes") || "[]") as unknown[];
    localStorage.setItem("te-quotes", JSON.stringify([payload, ...prev].slice(0, 20)));
    setSent(true);

    const body = [
      `Nome: ${fields.name}`,
      `Email: ${fields.email}`,
      `Telefono: ${fields.phone}`,
      `Evento: ${fields.eventType}`,
      `Data: ${fields.date || "da definire"}`,
      `Città / location: ${fields.city}`,
      `Ospiti: ${fields.guests}`,
      "",
      fields.message,
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Preventivo ${fields.eventType} — ${fields.name}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-paper px-6 py-10 text-center">
        <p className="font-display text-2xl text-ink">Richiesta pronta</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Si è aperto il tuo programma di posta per inviare il messaggio a {SITE.email}. Puoi anche
          scriverci su WhatsApp.
        </p>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory"
        >
          Apri WhatsApp
        </a>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-line bg-ivory px-3.5 py-2.5 text-sm text-ink outline-none transition-shadow focus:border-gold focus:shadow-[0_0_0_3px_rgba(196,163,90,0.18)]";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
      {!compact ? (
        <div className="mb-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">Preventivo</p>
          <h2 className="mt-2 font-display text-3xl">Raccontaci il tuo evento</h2>
          <p className="mt-2 text-sm text-muted">Risposta personale, senza impegno.</p>
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Nome e cognome
          <input required className={fieldClass} value={fields.name} onChange={(e) => update("name", e.target.value)} />
        </label>
        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Email
          <input required type="email" className={fieldClass} value={fields.email} onChange={(e) => update("email", e.target.value)} />
        </label>
        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Telefono
          <input required className={fieldClass} value={fields.phone} onChange={(e) => update("phone", e.target.value)} />
        </label>
        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Tipo di evento
          <select className={fieldClass} value={fields.eventType} onChange={(e) => update("eventType", e.target.value)}>
            {EVENT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Data prevista
          <input type="date" className={fieldClass} value={fields.date} onChange={(e) => update("date", e.target.value)} />
        </label>
        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Città / location
          <input className={fieldClass} value={fields.city} onChange={(e) => update("city", e.target.value)} />
        </label>
        <label className="text-xs font-medium tracking-wide text-ink-soft sm:col-span-2">
          Numero ospiti
          <input className={fieldClass} value={fields.guests} onChange={(e) => update("guests", e.target.value)} />
        </label>
        <label className="text-xs font-medium tracking-wide text-ink-soft sm:col-span-2">
          Messaggio
          <textarea
            required
            rows={5}
            className={fieldClass}
            value={fields.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-olive-dark sm:w-auto sm:px-8"
      >
        Invia richiesta
      </button>
    </form>
  );
}
