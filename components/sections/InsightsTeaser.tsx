import Link from "next/link";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { INSIGHTS } from "@/lib/insights";

export function InsightsTeaser() {
  return (
    <section className="border-b border-navy/10 bg-slate py-[clamp(72px,10vh,120px)] text-navy" id="insights">
      <Wrap>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kick scramble>THOUGHT LEADERSHIP</Kick>
            <h2 className={`${sectionTitleClass} text-navy`}>ENGINEERING INSIGHTS.</h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-widest text-green-dark hover:underline"
          >
            VIEW ALL INSIGHTS →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-3">
          {INSIGHTS.slice(0, 3).map((art) => (
            <Link
              key={art.slug}
              href={`/insights/${art.slug}`}
              className="group flex flex-col justify-between border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-xl sm:p-8"
            >
              <div>
                <div className="mb-3 flex items-center justify-between text-[10px] text-steel-dim">
                  <span className="font-semibold text-green-dark">{art.category}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="text-lg font-bold font-display text-navy transition-colors group-hover:text-green-dark">
                  {art.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-steel">{art.summary}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-navy/10 pt-4 text-xs">
                <span className="text-[11px] text-steel-dim">{art.readTime}</span>
                <span className="font-display font-semibold uppercase tracking-wider text-navy transition-colors group-hover:text-green-dark">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
