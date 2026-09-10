import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  subtitle,
  image,
  compact,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  image: string;
  compact?: boolean;
}) {
  return (
    <section className={cn("relative overflow-hidden", compact ? "h-64 sm:h-80" : "h-[52vh] min-h-80 sm:h-[62vh]")}>
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        {kicker ? (
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">{kicker}</p>
        ) : null}
        <h1 className="mt-3 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg">{subtitle}</p> : null}
      </div>
    </section>
  );
}
