import { Link } from "@tanstack/react-router";
import { ArrowRight, Landmark, Shirt, UtensilsCrossed, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  catering: UtensilsCrossed,
  location: Landmark,
  abiti: Shirt,
};

export function ServiceCard({ service, featured }: { service: Service; featured?: boolean }) {
  const Icon = ICONS[service.slug];
  const isLocation = service.slug === "location";

  const inner = (
    <>
      <div className={featured ? "aspect-photo" : "aspect-wide"}>
        <img
          src={service.image}
          alt={service.title}
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </>
  );

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-paper shadow-[0_12px_40px_rgba(43,41,38,0.08)]">
      {isLocation ? (
        <Link to="/portfolio/$slug" params={{ slug: "location" }} className="block overflow-hidden">
          {inner}
        </Link>
      ) : (
        <Link to="/servizi/$slug" params={{ slug: service.slug }} className="block overflow-hidden">
          {inner}
        </Link>
      )}
      <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
        <h3 className="flex items-center gap-3 font-display text-2xl text-ink">
          {Icon ? <Icon className="size-6 shrink-0 text-gold" strokeWidth={1.4} /> : null}
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.excerpt}</p>
        {isLocation ? (
          <Link
            to="/portfolio/$slug"
            params={{ slug: "location" }}
            className="mt-6 inline-flex items-center gap-2 text-nav font-semibold uppercase tracking-[0.2em] text-gold-deep hover:text-gold"
          >
            {service.short}
            <ArrowRight className="size-3.5" />
          </Link>
        ) : (
          <Link
            to="/servizi/$slug"
            params={{ slug: service.slug }}
            className="mt-6 inline-flex items-center gap-2 text-nav font-semibold uppercase tracking-[0.2em] text-gold-deep hover:text-gold"
          >
            {service.short}
            <ArrowRight className="size-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
