import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function getObjectPosition(src: string) {
  switch (src) {
    // Diana e André
    case "/images/diana-andre-01.jpg":
    case "/images/diana-andre-03.jpg":
    case "/images/diana-andre-06.jpg":
      return "center 40%";

    // Desi & Augusto
    case "/images/desi-augusto-01.jpg":
      return "center 15%";
    case "/images/desi-augusto-02.jpg":
      return "center 0%";
    case "/images/desi-augusto-04.jpg":
      return "center 15%";
    case "/images/desi-augusto-05.jpg":
      return "center 15%";
    case "/images/desi-augusto-06.jpg":
      return "center 10%";

    default:
      return undefined;
  }
}

export function Gallery({
  photos,
  fullGalleryUrl,
}: {
  photos: { src: string; caption?: string }[];
  fullGalleryUrl?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  const isOpen = active !== null;
  const isFirst = active === 0;
  const isLast = active !== null && active === photos.length - 1;

  const showPrevious = () => {
    if (active === null || photos.length === 0) return;

    setActive((current) => {
      if (current === null) return null;
      return Math.max(0, current - 1);
    });
  };

  const showNext = () => {
    if (active === null || photos.length === 0) return;

    setActive((current) => {
      if (current === null) return null;
      return Math.min(photos.length - 1, current + 1);
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }

      if (event.key === "ArrowLeft" && !isFirst) {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight" && !isLast) {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, isFirst, isLast]);

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
                style={
                  getObjectPosition(p.src)
                    ? { objectPosition: getObjectPosition(p.src) }
                    : undefined
                }
              />
            </div>

            {p.caption ? (
              <p className="px-4 py-3 font-display text-sm italic text-ink-soft">
                {p.caption}
              </p>
            ) : null}
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galleria fotografica"
          onClick={() => setActive(null)}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Chiudi galleria"
              onClick={() => setActive(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <X className="size-6" />
            </button>

            <div className="mb-4 text-sm tracking-wide text-white/80">
              {active + 1} / {photos.length}
            </div>

            <div className="relative flex w-full items-center justify-center">
              {!isFirst ? (
                <button
                  type="button"
                  aria-label="Foto precedente"
                  onClick={showPrevious}
                  className="absolute left-0 z-10 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
                >
                  <ChevronLeft className="size-7" />
                </button>
              ) : null}

              <img
                src={photos[active].src}
                alt={photos[active].caption ?? ""}
                className="max-h-[72vh] max-w-[88vw] rounded-lg object-contain shadow-2xl"
              />

              {!isLast ? (
                <button
                  type="button"
                  aria-label="Foto successiva"
                  onClick={showNext}
                  className="absolute right-0 z-10 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
                >
                  <ChevronRight className="size-7" />
                </button>
              ) : null}
            </div>

            <div className="mt-5 max-w-3xl text-center">
              {photos[active].caption ? (
                <p className="font-display text-base italic text-white/90">
                  {photos[active].caption}
                </p>
              ) : null}

              {fullGalleryUrl ? (
                <a
                  href={fullGalleryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm text-white transition hover:border-white hover:text-white"
                >
                  Vedi tutte le foto del matrimonio
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ) : null}
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
              {!isFirst ? <span>← precedente</span> : <span> </span>}
              <span>•</span>
              {!isLast ? <span>successiva →</span> : <span> </span>}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}