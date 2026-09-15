import type { Metadata } from "next";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { btnFilled } from "@/components/btn";

export const metadata: Metadata = {
  title: "Engineering Insights — Risin Automation",
  description:
    "Technical whitepapers, SCADA integration guides, solar performance ratio analysis, and high-throughput entrance automation research from Risin Automation.",
};

const ALL_PAPERS = [
  {
    category: "WHITE PAPER · SOLAR EPC",
    title: "Optimizing Performance Ratios in High-Ambient Temperature Climates",
    summary: "Engineering storage-ready DC microgrid architectures and panel layout strategies to sustain >82% PR during summer heat spikes.",
    date: "AUG 2026",
    author: "Risin Renewable Energy Engineering Team",
  },
  {
    category: "TECHNICAL GUIDE · ENTRANCE",
    title: "High-Throughput ANPR Gate Interlocks for Logistics & Port Terminals",
    summary: "Integrating deep learning OCR camera gantries with terminal operating systems (TOS) to reduce truck dwell times by over 35%.",
    date: "JUL 2026",
    author: "Risin Smart Entrance Division",
  },
  {
    category: "INFRASTRUCTURE BRIEF · POWER",
    title: "33kV DG Synchronisation & SCADA Ring Main Unit Design",
    summary: "Zero-interruption automatic transfer switches and predictive thermographic maintenance for mission-critical industrial power grids.",
    date: "JUN 2026",
    author: "Power Systems Integration Lead",
  },
  {
    category: "TRAFFIC STUDY · ROAD SAFETY",
    title: "Adaptive Traffic Control Systems (ATCS) in High-Density Urban Corridors",
    summary: "Real-time queue length estimation and variable message signal synchronization under NHA and PEC design standards.",
    date: "MAY 2026",
    author: "Traffic Systems Directorate",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy py-[clamp(72px,10vh,120px)] text-white">
        <Wrap>
          <div className="max-w-[720px]">
            <Kick scramble>KNOWLEDGE &amp; RESEARCH</Kick>
            <h2 className={`${sectionTitleClass} text-white`}>ENGINEERING INSIGHTS &amp; WHITEPAPERS.</h2>
            <p className="mt-5 text-[17px] text-white/80 leading-relaxed">
              Technical articles, field benchmarks, and architectural blueprints written by Risin Automation engineers across solar, entrance automation, power grids, and smart highways.
            </p>
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-[clamp(64px,9vh,100px)] text-navy">
        <Wrap>
          <div className="grid grid-cols-1 gap-8 min-[961px]:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-6">
              {ALL_PAPERS.map((paper) => (
                <article
                  key={paper.title}
                  className="border border-navy/10 bg-slate p-6 sm:p-8 transition-all hover:border-green hover:shadow-lg"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-steel-dim mb-3">
                    <span className="text-green-dark font-semibold">{paper.category}</span>
                    <span>{paper.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-navy">{paper.title}</h3>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{paper.summary}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-4 text-xs">
                    <span className="text-steel-dim font-medium">{paper.author}</span>
                    <a href="#download" className="font-display font-semibold uppercase text-green-dark hover:underline">
                      Download PDF Specs ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar: Subscribe / Request Custom Technical Report */}
            <div className="sticky top-[calc(var(--navh)+30px)] self-start border border-navy/10 bg-navy p-6 sm:p-8 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-green">
                TECHNICAL BRIEFINGS
              </span>
              <h3 className="mt-2 text-xl font-bold font-display text-white">
                Request a Custom Engineering Whitepaper
              </h3>
              <p className="mt-3 text-xs text-white/70 leading-relaxed">
                Need specialized system calculations or design basis reports for your upcoming facility? Connect with our senior engineering team.
              </p>
              <div className="mt-6">
                <a href="/contact" className={`${btnFilled} w-full justify-center text-center`}>
                  SPEAK WITH AN ENGINEER ↗
                </a>
              </div>
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
