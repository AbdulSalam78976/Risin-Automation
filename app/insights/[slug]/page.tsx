import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Wrap } from "@/components/Wrap";
import { btnFilled } from "@/components/btn";
import { INSIGHTS, getInsight } from "@/lib/insights";
import { SITE_URL } from "@/app/layout";

// Only the articles listed in lib/insights.ts exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  const url = `/insights/${insight.slug}`;
  return {
    title: insight.title,
    description: insight.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: insight.title,
      description: insight.summary,
      authors: [insight.author],
      section: insight.category,
    },
    twitter: { card: "summary_large_image", title: insight.title, description: insight.summary },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const more = INSIGHTS.filter((i) => i.slug !== insight.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.summary,
    articleSection: insight.category,
    author: { "@type": "Person", name: insight.author },
    publisher: { "@id": `${SITE_URL}/#organisation` },
    mainEntityOfPage: `${SITE_URL}/insights/${insight.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static article data from lib/insights.ts — not user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <section className="bg-navy py-[clamp(56px,8vh,96px)] text-white">
        <Wrap>
          <div className="max-w-[820px]">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[11px] font-display font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-green"
            >
              ← All insights
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.16em]">
              <span className="font-semibold text-green">{insight.category}</span>
              <span className="text-white/50">{insight.date}</span>
              <span className="text-white/50">{insight.readTime}</span>
            </div>
            <h1 className="mt-4 text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold text-white">{insight.title}</h1>
            <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-white/75">{insight.summary}</p>
            <p className="mt-6 text-[13px] text-white/50">By {insight.author}</p>
          </div>
        </Wrap>
      </section>

      {/* Body + sidebar */}
      <section className="bg-white py-[clamp(56px,8vh,96px)] text-navy">
        <Wrap className="grid grid-cols-1 gap-12 min-[961px]:grid-cols-[1fr_320px] min-[961px]:gap-16">
          <article className="max-w-[720px]">
            {insight.sections.map((s) => (
              <section key={s.heading} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-[21px] font-bold normal-case tracking-normal text-navy">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 text-[16px] leading-[1.75] text-steel last:mb-0">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </article>

          <aside className="space-y-6 min-[961px]:sticky min-[961px]:top-[calc(var(--navh)+24px)] min-[961px]:self-start">
            <div className="border border-navy/10 bg-slate p-6">
              <p className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-dim">
                <span className="h-1.5 w-1.5 bg-green" />
                Key takeaways
              </p>
              <ul className="space-y-3">
                {insight.takeaways.map((t) => (
                  <li key={t} className="flex gap-2.5 text-[14px] leading-snug text-navy">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-green" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={insight.related.href}
              className="group block border border-navy/10 p-6 transition-colors hover:border-green"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-dim">Related project</p>
              <p className="mt-2 text-[15px] font-semibold leading-snug text-navy">{insight.related.label}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-display font-semibold uppercase tracking-wider text-green-dark">
                View projects <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <div className="bg-navy p-6 text-white">
              <p className="text-[15px] font-semibold">Have a project like this?</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                Send us a brief and a discipline lead will respond within one business day.
              </p>
              <Link href="/contact" className={`${btnFilled} mt-5 w-full justify-center`}>
                START A CONVERSATION <span className="ar">↗</span>
              </Link>
            </div>
          </aside>
        </Wrap>
      </section>

      {/* More insights */}
      <section className="border-t border-navy/10 bg-slate py-[clamp(56px,8vh,96px)] text-navy">
        <Wrap>
          <h2 className="mb-8 text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold text-navy">More insights</h2>
          <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-3">
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/insights/${m.slug}`}
                className="group flex flex-col border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green hover:shadow-lg"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-green-dark">{m.category}</span>
                <h3 className="mt-3 text-[17px] font-bold leading-snug text-navy transition-colors group-hover:text-green-dark">
                  {m.title}
                </h3>
                <span className="mt-auto pt-5 text-[11px] font-display font-semibold uppercase tracking-wider text-navy">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
