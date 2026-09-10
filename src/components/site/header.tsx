import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-ivory/95 backdrop-blur-md transition-shadow",
        scrolled ? "border-line shadow-[0_8px_24px_rgba(43,41,38,0.06)]" : "border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="shrink-0 leading-none" aria-label="Timeless Events — Home">
          <span className="font-display text-xl tracking-[0.18em] text-ink sm:text-[1.35rem]">
            TIMELESS
          </span>{" "}
          <span className="font-display text-xl italic tracking-[0.08em] text-gold sm:text-[1.35rem]">
            Events
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors",
                isActive(pathname, item.to) ? "text-gold" : "text-ink-soft hover:text-gold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/preventivo"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-olive-dark sm:inline-flex"
          >
            Richiedi preventivo
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-ivory lg:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "border-b border-line py-4 text-[0.78rem] font-medium uppercase tracking-[0.2em]",
                  isActive(pathname, item.to) ? "text-gold" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/preventivo"
              className="mt-5 mb-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory"
            >
              Richiedi preventivo
            </Link>
            <a
              href={SITE.phoneHref}
              className="py-3 text-center text-sm text-muted"
            >
              {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
