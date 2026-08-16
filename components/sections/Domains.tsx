import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

const domains = [
  {
    code: "SA-01",
    num: "01",
    title: "Smart Entrance Automation",
    body: "Vehicle and pedestrian access engineered as one system — boom barriers, sliding gates, ANPR capture, bollards and access control unified under a single management layer, integrated with your BMS and security stack.",
    specs: [
      "ANPR CAPTURE ≥ 99.4% ACCURACY",
      "BARRIER CYCLE < 1.8 s RATED",
      "BMS / VMS / ERP INTEGRATION",
      "FAIL-SAFE, UPS-BACKED LOGIC",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/1838948a5-380c-4607-944f-c6b18a399895.png",
    alt: "Automated facility entrance with boom barrier and ANPR camera",
    fig: "FIG. SA-01 — CORPORATE GATE, PUNE",
  },
  {
    code: "RE-02",
    num: "02",
    title: "Renewable Energy · Solar",
    body: "Rooftop and ground-mount solar delivered turnkey: yield simulation, structural and electrical design, procurement, construction and long-term O&M — with bankable performance ratios your CFO can sign.",
    specs: [
      "38.6 MW COMMISSIONED TO DATE",
      "PERFORMANCE RATIO ≥ 80% ASSURED",
      "STORAGE-READY DC COUPLED DESIGN",
      "MNRE / IEC ALIGNED EXECUTION",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/12bbdaba2-32cd-405e-b281-2ff4d0102297.png",
    alt: "Ground-mount solar farm at golden hour with engineer",
    fig: "FIG. RE-02 — GROUND-MOUNT ARRAY, NAGPUR",
  },
  {
    code: "PI-03",
    num: "03",
    title: "Power Infrastructure Management",
    body: "From HT yard to final circuit — substations, switchgear, DG synchronisation and SCADA kept inside tolerance and on schedule. We design it, build it, then monitor it around the clock.",
    specs: [
      "UP TO 33 kV CLASS EXECUTION",
      "SCADA & ENERGY ANALYTICS",
      "THERMOGRAPHIC AUDIT PROGRAMS",
      "PREDICTIVE MAINTENANCE REGIME",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/19e34662f-2370-4cdc-930b-f64160a6f5e5.png",
    alt: "Electrical substation with engineer reviewing switchgear",
    fig: "FIG. PI-03 — 33 kV YARD, AHMEDABAD",
  },
  {
    code: "TS-04",
    num: "04",
    title: "Traffic & Road Safety",
    body: "Adaptive signals, VMS corridors, ANPR enforcement and luminous street furniture that make roads self-explanatory. Engineered to MoRTH and IRC practice, proven on live corridors.",
    specs: [
      "ADAPTIVE SIGNAL CONTROL (ATCS)",
      "SOLAR STUDS & ACTIVE ROAD MARKING",
      "ANPR-BASED ENFORCEMENT",
      "MoRTH / IRC COMPLIANT DESIGN",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/198909bfb-022c-4a1a-acb3-a1ecc5c26506.png",
    alt: "Smart intersection at night with intelligent signals and light trails",
    fig: "FIG. TS-04 — SMART JUNCTION, KOCHI",
  },
];

export function Domains() {
  return (
    <section className="bg-slate py-[clamp(72px,10vh,120px)] text-navy" id="capabilities">
      <Wrap>
        <div className="mb-14 grid grid-cols-1 items-end gap-10 min-[901px]:grid-cols-[1.2fr_.8fr]">
          <div>
            <Kick scramble>01 / CAPABILITIES</Kick>
            <h2 className={`lines ${sectionTitleClass} text-navy`}>
              <span className="ln"><span>FOUR DISCIPLINES.</span></span>
              <span className="ln"><span>ONE ACCOUNTABLE PARTNER.</span></span>
            </h2>
          </div>
          <p className="reveal text-[15.5px] text-steel">
            Most integrators stop at installation. Risin owns the entire chain — engineering,
            procurement, construction and maintenance — so every system we build, we stand
            behind for life. Scroll the deck.
          </p>
        </div>

        <div>
          {domains.map((d, i) => (
            <article
              className="sticky top-[calc(var(--navh)+18px+var(--n)*14px)] mb-6.5 grid min-h-[480px] grid-cols-1 overflow-hidden border border-navy-dark bg-navy text-[#e8ecf1] shadow-[0_-18px_50px_rgba(18,42,61,0.3)] last:mb-0 max-[900px]:static min-[901px]:grid-cols-[1.02fr_.98fr]"
              style={{ "--n": i } as React.CSSProperties}
              key={d.code}
            >
              <div className="relative flex flex-col p-[clamp(28px,3.4vw,52px)]">
                <span className="inline-flex w-fit items-center gap-2 border border-green px-2.5 py-1.5 text-[11px] tracking-[0.22em] text-green before:h-1.5 before:w-1.5 before:bg-current">
                  {d.code}
                </span>
                <span className="absolute right-6 top-4.5 font-display text-[64px] font-bold leading-none text-white/8">{d.num}</span>
                <h3 className="my-3.5 text-[clamp(1.4rem,2.4vw,2.1rem)] text-white">{d.title}</h3>
                <p className="max-w-[520px] text-[15px] text-white/70">{d.body}</p>
                <ul className="mt-6.5 grid grid-cols-1 gap-x-5.5 gap-y-2.5 min-[561px]:grid-cols-2">
                  {d.specs.map((s) => (
                    <li key={s} className="flex gap-2 border-t border-dashed border-white/14 pt-2.5 text-[11px] tracking-[0.06em] text-white/85 before:content-['▸'] before:text-green">
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-auto inline-flex items-center gap-2.5 pt-7 text-[11px] uppercase tracking-[0.2em] text-green [&_.ar]:transition-transform [&_.ar]:duration-300 hover:[&_.ar]:translate-x-1.5"
                  href="/contact"
                >
                  DISCUSS THIS DISCIPLINE <span className="ar">→</span>
                </a>
              </div>
              <div className="relative min-h-[300px] overflow-hidden border-t border-white/10 min-[901px]:border-l min-[901px]:border-t-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.alt} className="absolute inset-0 h-full w-full animate-[ken-burns_16s_ease-in-out_infinite_alternate] object-cover" />
                <span className="absolute bottom-3.5 left-4 border border-white/14 bg-navy-dark/75 px-2.5 py-1.5 text-[9.5px] tracking-[0.2em] text-white">
                  {d.fig}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
