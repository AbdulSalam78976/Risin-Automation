import type { Metadata } from "next";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

export const metadata: Metadata = {
  title: "About — Risin Automation",
  description:
    "Founded in 2012, Risin Automation is 85 engineers, designers and field crews delivering multi-discipline EPCM projects from Mumbai.",
};

const principles = [
  { n: "/01", title: "Single-Point Accountability", body: "One contract, one throat to choke. No vendor ping-pong, ever." },
  { n: "/02", title: "Design-First Delivery", body: "We freeze the engineering before we spend the capital." },
  { n: "/03", title: "Vendor-Neutral Integration", body: "We specify what the system needs — not what a brand wants to sell." },
  { n: "/04", title: "Lifecycle Economics", body: "Decisions optimised for year ten, not just handover day." },
];

const certs = ["ISO 9001:2015", "ISO 14001", "ISO 45001", "IEC 61439", "CE MARKED OEMs", "MNRE ALIGNED"];

export default function AboutPage() {
  return (
    <section className="border-b border-navy/10 bg-white py-[clamp(72px,10vh,120px)] text-navy" id="about">
      <Wrap className="grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] min-[961px]:grid-cols-[.95fr_1.05fr]">
        <div className="reveal relative overflow-hidden border border-navy/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/14a425788-1c31-4eb2-9262-6ac8cbcdf412.png"
            alt="Risin engineers in the operations control room"
            className="h-full w-full animate-[ken-burns_16s_ease-in-out_infinite_alternate] object-cover"
          />
          <span className="absolute bottom-3 left-3.5 border border-white/14 bg-navy-dark/75 px-2.5 py-1.5 text-[9.5px] tracking-[0.2em] text-white">
            RISIN OPS ROOM — MUMBAI HQ
          </span>
        </div>
        <div>
          <Kick scramble>ABOUT RISIN AUTOMATION</Kick>
          <h2 className={`lines ${sectionTitleClass} text-navy`}>
            <span className="ln"><span>BUILT BY ENGINEERS,</span></span>
            <span className="ln"><span>RUN LIKE A CONTROL ROOM.</span></span>
          </h2>
          <p className="reveal mt-4.5 max-w-[540px] text-steel">
            Founded in 2012, Risin Automation is <b className="font-medium text-navy">85 engineers, designers and field crews</b>{" "}
            operating from Mumbai with three regional bases. We exist for one reason: complex
            infrastructure deserves a partner who designs it, builds it, and answers the phone
            when it matters.
          </p>
          <ul className="reveal mt-9 border-t border-navy/10">
            {principles.map((p) => (
              <li key={p.n} className="grid grid-cols-[56px_1fr] items-baseline gap-4.5 border-b border-navy/10 px-1 py-4.5 transition-[padding-left,background] duration-300 hover:bg-green/5 hover:pl-3.5">
                <span className="text-[11px] tracking-[0.2em] text-green-dark">{p.n}</span>
                <div>
                  <h4 className="text-[16px] text-navy">{p.title}</h4>
                  <p className="mt-1 text-[13.5px] text-steel">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="reveal mt-8.5 flex flex-wrap gap-3">
            {certs.map((c) => (
              <span key={c} className="border border-navy/10 px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-steel transition-colors hover:border-green hover:text-green-dark">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
