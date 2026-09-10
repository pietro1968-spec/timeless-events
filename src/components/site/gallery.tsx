import { useState } from "react";
import { X } from "lucide-react";

export function Gallery({
  photos,
}: {
  photos: { src: string; caption?: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <button
            key={`${p.src}-${i}`}
            type="button"
            className="group overflow-hidden rounded-xl bg-paper text-left shadow-[0_8px_30px_rgba(43,41,38,0.06)]"
            onClick={() => setActive(i)}
          >
            <div className="aspect-photo overflow-hidden">
              <img
                src={p.src}
                alt={p.caption ?? ""}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {p.caption ? (
              <p className="px-4 py-3 font-display text-sm italic text-ink-soft">{p.caption}</p>
            ) : null}
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-overlay flex items-center justify-center bg-ink/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ingrandita"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-ivory/10 text-ivory"
            aria-label="Chiudi"
            onClick={() => setActive(null)}
          >
            <X className="size-6" />
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].caption ?? ""}
            className="max-h-[88vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
