import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/chi-sono/faq")({
  component: FaqPage,
  head: () => ({
    meta: [{ title: "FAQ | Timeless Events" }],
  }),
});

function FaqPage() {
  return (
    <main>
      <PageHero compact kicker="Chi sono" title="Domande frequenti" image="/images/table-close.jpg" />
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="cursor-pointer font-display text-xl text-ink marker:text-gold">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
