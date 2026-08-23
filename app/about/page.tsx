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

const values = [
  {
    title: "Safety",
    body: "Zero-incident is the standard, not the target. Every gate, panel and pole we install has to be safe before it's ever fast.",
  },
  {
    title: "Precision",
    body: "We work in kV, kW and seconds — not approximations. Specifications are met, measured and signed off, not eyeballed.",
  },
  {
    title: "Resolve",
    body: "Live sites, tight windows, no excuses. We see the hard install through on the schedule we committed to.",
  },
];

const way = [
  {
    title: "Modernize",
    body: "We replace manual, ungoverned entrances, boards and junctions with systems that report their own status.",
  },
  {
    title: "Unify",
    body: "Smart Entrance, Solar, Power and Traffic under one contract, one crew, one point of contact — no vendor ping-pong.",
  },
  {
    title: "Endure",
    body: "Solar arrays and power systems engineered for a decade-plus of unattended operation, not just commissioning day.",
  },
];

export default function AboutPage() {
  return (
    <>
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
            Risin Automation is a team of{" "}
            <b className="font-medium text-navy">engineers, designers and field crews</b>{" "}
            operating out of Islamabad. We exist for one reason: complex infrastructure deserves
            a partner who designs it, builds it, and answers the phone when it matters.
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

    <section className="bg-navy py-[clamp(64px,9vh,100px)]">
      <Wrap>
        <div className="reveal mb-14 max-w-[640px]">
          <Kick scramble>OUR STANDARD</Kick>
          <h2 className={`${sectionTitleClass} text-white`}>WHAT WE WON&apos;T COMPROMISE ON.</h2>
        </div>
        <div className="grid grid-cols-1 divide-y divide-white/10 min-[901px]:grid-cols-3 min-[901px]:divide-x min-[901px]:divide-y-0">
          {values.map((v) => (
            <div key={v.title} className="reveal py-8 first:pt-0 min-[901px]:px-10 min-[901px]:py-0 min-[901px]:first:pl-0 min-[901px]:last:pr-0">
              <div className="mb-4 h-2 w-2 bg-green" />
              <h3 className="mb-3 text-xl text-white">{v.title}</h3>
              <p className="text-[15px] leading-relaxed text-white/65">{v.body}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>

    <section className="relative overflow-hidden py-[clamp(64px,9vh,100px)]">
      <div className="absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/19e34662f-2370-4cdc-930b-f64160a6f5e5.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,42,61,.9),rgba(18,42,61,.82)_45%,rgba(18,42,61,.92))]" />
      </div>
      <Wrap className="relative z-[1]">
        <div className="reveal mx-auto mb-14 max-w-[640px] text-center">
          <Kick className="mx-auto justify-center before:hidden" scramble>HOW WE OPERATE</Kick>
          <h2 className={`${sectionTitleClass} text-white`}>NO HANDOFFS BETWEEN DISCIPLINES.</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 text-center min-[901px]:grid-cols-3">
          {way.map((w) => (
            <div key={w.title} className="reveal">
              <h3 className="mb-3 text-2xl text-white">{w.title}</h3>
              <p className="mx-auto max-w-[280px] text-[15px] leading-relaxed text-white/70">{w.body}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
    </>
  );
}
