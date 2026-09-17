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
  privacy: boolean;
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
  privacy: false,
};

export function QuoteForm({ compact }: { compact?: boolean }) {
  const [fields, setFields] = useState<Fields>(empty);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function generateSummaryText() {
    return [
      `Richiesta Preventivo - ${SITE.name}`,
      `---------------------------------`,
      `Nome: ${fields.name}`,
      `Email: ${fields.email}`,
      `Telefono: ${fields.phone}`,
      `Evento: ${fields.eventType}`,
      `Data prevista: ${fields.date || "da definire"}`,
      `Città / Location: ${fields.city || "non specificata"}`,
      `Numero ospiti: ${fields.guests || "non specificato"}`,
      `---------------------------------`,
      `Messaggio:`,
      fields.message,
    ].join("\n");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!fields.privacy) {
      setError("Per inviare la richiesta è necessario accettare il trattamento dei dati.");
      return;
    }

    const payload = {
      ...fields,
      createdAt: new Date().toISOString(),
    };

    const prev = JSON.parse(
      localStorage.getItem("te-quotes") || "[]",
    ) as unknown[];

    localStorage.setItem(
      "te-quotes",
      JSON.stringify([payload, ...prev].slice(0, 20)),
    );

    const formData = new FormData(e.currentTarget);
    const encoded = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        encoded.append(key, value);
      }
    });

    encoded.set("form-name", "quote-request");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encoded.toString(),
      });

      if (!response.ok) {
        throw new Error("Invio non riuscito");
      }

      setSent(true);
    } catch {
      setError(
        "Non è stato possibile inviare la richiesta. Controlla la connessione e riprova.",
      );
    }
  }

  if (sent) {
    const waText = encodeURIComponent(
      `Ciao! Ho appena inviato la richiesta di preventivo sul sito per un ${fields.eventType}.\n\nEcco i dettagli:\n- Nome: ${fields.name}\n- Data: ${fields.date || "da definire"}\n- Ospiti: ${fields.guests || "da definire"}`,
    );

    return (
      <div className="rounded-2xl border border-line bg-paper px-6 py-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          ✓
        </div>

        <h3 className="font-serif text-2xl text-ink">
          Richiesta inviata!
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Abbiamo ricevuto correttamente la tua richiesta di preventivo.
          Ti ricontatteremo al più presto all&apos;indirizzo email indicato.
        </p>

        <p className="mx-auto mt-2 max-w-md text-xs text-stone-500">
          Per una risposta ancora più rapida, puoi anche contattarci
          direttamente su WhatsApp.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ivory transition-colors hover:bg-emerald-800"
          >
            Invia via WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              setSent(false);
              setError("");
              setFields(empty);
            }}
            className="inline-flex items-center rounded-full border border-line bg-ivory px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-stone-100"
          >
            Nuova Richiesta
          </button>
        </div>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-line bg-ivory px-3.5 py-2.5 text-sm text-ink outline-none transition-shadow focus:border-amber-600 focus:shadow-[0_0_0_3px_rgba(196,163,90,0.18)]";

  return (
    <form
      name="quote-request"
      method="POST"
      data-netlify="true"
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8"
    >
      <input type="hidden" name="form-name" value="quote-request" />

      {!compact && (
        <div className="mb-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-600">
            Preventivo Gratuito
          </p>

          <h2 className="mt-2 font-serif text-3xl text-ink">
            Raccontaci il tuo evento
          </h2>

          <p className="mt-2 text-sm text-muted">
            Risposta personalizzata, rapida e senza alcun impegno.
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Nome e cognome *
          <input
            required
            name="name"
            placeholder="Es. Maria Rossi"
            className={fieldClass}
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>

        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Email *
          <input
            required
            type="email"
            name="email"
            placeholder="nome@esempio.it"
            className={fieldClass}
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>

        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Telefono *
          <input
            required
            type="tel"
            name="phone"
            placeholder="+39 333 1234567"
            className={fieldClass}
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </label>

        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Tipo di evento
          <select
            name="eventType"
            className={fieldClass}
            value={fields.eventType}
            onChange={(e) => update("eventType", e.target.value)}
          >
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Data prevista
          <input
            type="date"
            name="date"
            className={fieldClass}
            value={fields.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </label>

        <label className="text-xs font-medium tracking-wide text-ink-soft">
          Città / Location
          <input
            name="city"
            placeholder="Es. Milano, Lago di Como..."
            className={fieldClass}
            value={fields.city}
            onChange={(e) => update("city", e.target.value)}
          />
        </label>

        <label className="text-xs font-medium tracking-wide text-ink-soft sm:col-span-2">
          Numero stimato di ospiti
          <input
            name="guests"
            placeholder="Es. 80 - 100"
            className={fieldClass}
            value={fields.guests}
            onChange={(e) => update("guests", e.target.value)}
          />
        </label>

        <label className="text-xs font-medium tracking-wide text-ink-soft sm:col-span-2">
          Messaggio o note speciali *
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Descrivi la tua idea, le tue preferenze sui servizi (catering, floral design, abito, ecc.) o qualsiasi dettaglio desideri condividere..."
            className={fieldClass}
            value={fields.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </label>

        <div className="mt-2 sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-2.5 text-xs text-stone-600">
            <input
              type="checkbox"
              name="privacy"
              value="yes"
              required
              checked={fields.privacy}
              onChange={(e) => update("privacy", e.target.checked)}
              className="mt-0.5 rounded border-line text-amber-600 focus:ring-amber-500"
            />

            <span>
              Acconsento al trattamento dei dati personali ai sensi del
              Regolamento GDPR al solo scopo di ricevere il preventivo
              richiesto.
            </span>
          </label>
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory transition-colors hover:bg-stone-800 sm:w-auto sm:px-8"
      >
        Invia richiesta
      </button>
    </form>
  );
}