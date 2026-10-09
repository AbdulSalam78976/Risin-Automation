import type { Metadata } from "next";
import Link from "next/link";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { btnFilled } from "@/components/btn";
import { INSIGHTS } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Engineering Insights",
  description:
    "Articles from Risin Automation engineers on solar performance in Pakistan's heat, ANPR port gates, load-shedding resilience and smart motorway corridors.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy py-[clamp(72px,10vh,120px)] text-white">
        <Wrap>
          <div className="max-w-[720px]">
            <Kick scramble>KNOWLEDGE &amp; RESEARCH</Kick>
            <h1 className={`${sectionTitleClass} text-white`}>ENGINEERING INSIGHTS.</h1>
            <p className="mt-5 text-[17px] leading-relaxed text-white/80">
              How we approach the problems behind our projects — written by Risin Automation engineers across solar, entrance automation, power infrastructure, smart highways and weather & water telemetry.
            </p>
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-[clamp(64px,9vh,100px)] text-navy">
        <Wrap>
          <div className="grid grid-cols-1 gap-8 min-[961px]:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-6">
              {INSIGHTS.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group block border border-navy/10 bg-slate p-6 transition-all hover:border-green hover:shadow-lg sm:p-8"
                >
                  <div className="mb-3 flex items-center justify-between text-xs text-steel-dim">
                    <span className="font-semibold text-green-dark">{insight.category}</span>
                    <span>{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-navy transition-colors group-hover:text-green-dark">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{insight.summary}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-4 text-xs">
                    <span className="font-medium text-steel-dim">
                      {insight.author} · {insight.readTime}
                    </span>
                    <span className="font-display font-semibold uppercase text-green-dark">
                      Read article <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar: talk to an engineer */}
            <div className="self-start border border-navy/10 bg-navy p-6 text-white sm:p-8 min-[961px]:sticky min-[961px]:top-[calc(var(--navh)+30px)]">
              <span className="text-[10px] uppercase tracking-widest text-green">TALK TO AN ENGINEER</span>
              <h3 className="mt-2 text-xl font-bold font-display text-white">Have a project like these?</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Tell us about your site, scale and timeline. A discipline lead will respond within one business day with a scope outline.
              </p>
              <div className="mt-6">
                <Link href="/contact" className={`${btnFilled} w-full justify-center text-center`}>
                  START A CONVERSATION ↗
                </Link>
              </div>
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
