import Link from "next/link";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

const ARTICLES = [
  {
    category: "WHITE PAPER · SOLAR EPC",
    title: "Optimizing Performance Ratios in High-Ambient Temperature Climates",
    summary: "Engineering storage-ready DC microgrid architectures and panel layout strategies to sustain >82% PR during summer heat spikes.",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    href: "/insights",
  },
  {
    category: "TECHNICAL GUIDE · ENTRANCE",
    title: "High-Throughput ANPR Gate Interlocks for Logistics & Port Terminals",
    summary: "Integrating deep learning OCR camera gantries with terminal operating systems to reduce container dwell times by over 35%.",
    date: "JUL 2026",
    readTime: "8 MIN READ",
    href: "/insights",
  },
  {
    category: "INFRASTRUCTURE BRIEF · POWER",
    title: "33kV DG Synchronisation & SCADA Ring Main Unit Design",
    summary: "Zero-interruption automatic transfer switches and predictive thermographic maintenance for mission-critical power grids.",
    date: "JUN 2026",
    readTime: "5 MIN READ",
    href: "/insights",
  },
];

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
            VIEW ALL TECHNICAL PAPERS →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[901px]:grid-cols-3">
          {ARTICLES.map((art) => (
            <article
              key={art.title}
              className="group flex flex-col justify-between border border-navy/10 bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-steel-dim mb-3">
                  <span className="text-green-dark font-semibold">{art.category}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="text-lg font-bold font-display text-navy group-hover:text-green-dark transition-colors">
                  {art.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-steel">
                  {art.summary}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-navy/10 pt-4 text-xs">
                <span className="text-[11px] font-mono text-steel-dim">{art.readTime}</span>
                <span className="font-display font-semibold uppercase tracking-wider text-navy group-hover:text-green-dark transition-colors">
                  Read Paper ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
