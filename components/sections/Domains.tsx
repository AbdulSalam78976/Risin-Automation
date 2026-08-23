import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

type IconName = "door" | "sun" | "bolt" | "signal";

function ServiceIcon({ name }: { name: IconName }) {
  const common = {
    className: "h-4 w-4 shrink-0 text-green",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "door":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 3v18M15 3v18" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "signal":
      return (
        <svg {...common}>
          <rect x="9" y="2" width="6" height="14" rx="1" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      );
  }
}

const domains = [
  {
    code: "SA-01",
    num: "01",
    icon: "door" as const,
    title: "Smart Entrance Automation",
    body: "Vehicle and pedestrian access engineered as one system — boom barriers, sliding gates, ANPR capture, bollards and access control unified under a single management layer, integrated with your BMS and security stack.",
    subservices: ["Sliding & Revolving Doors", "Hermetic & ICU Doors", "Platform Screen Doors"],
    specs: [
      "ANPR CAPTURE ≥ 99.4% ACCURACY",
      "BARRIER CYCLE < 1.8 s RATED",
      "BMS / VMS / ERP INTEGRATION",
      "FAIL-SAFE, UPS-BACKED LOGIC",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/1838948a5-380c-4607-944f-c6b18a399895.png",
    alt: "Automated facility entrance with boom barrier and ANPR camera",
  },
  {
    code: "RE-02",
    num: "02",
    icon: "sun" as const,
    title: "Renewable Energy · Solar",
    body: "Rooftop and ground-mount solar delivered turnkey: yield simulation, structural and electrical design, procurement, construction and long-term O&M — with bankable performance ratios your CFO can sign.",
    subservices: ["Rooftop & Ground-Mount Solar", "VFD Solar Pumping", "Inverters & Battery Storage"],
    specs: [
      "38.6 MW COMMISSIONED TO DATE",
      "PERFORMANCE RATIO ≥ 80% ASSURED",
      "STORAGE-READY DC COUPLED DESIGN",
      "MNRE / IEC ALIGNED EXECUTION",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/12bbdaba2-32cd-405e-b281-2ff4d0102297.png",
    alt: "Ground-mount solar farm at golden hour with engineer",
  },
  {
    code: "PI-03",
    num: "03",
    icon: "bolt" as const,
    title: "Power Infrastructure Management",
    body: "From HT yard to final circuit — substations, switchgear, DG synchronisation and SCADA kept inside tolerance and on schedule. We design it, build it, then monitor it around the clock.",
    subservices: ["Substations & Switchgear", "SCADA & Energy Analytics", "Transformer & DG Services"],
    specs: [
      "UP TO 33 kV CLASS EXECUTION",
      "SCADA & ENERGY ANALYTICS",
      "THERMOGRAPHIC AUDIT PROGRAMS",
      "PREDICTIVE MAINTENANCE REGIME",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/19e34662f-2370-4cdc-930b-f64160a6f5e5.png",
    alt: "Electrical substation with engineer reviewing switchgear",
  },
  {
    code: "TS-04",
    num: "04",
    icon: "signal" as const,
    title: "Traffic & Road Safety",
    body: "Adaptive signals, VMS corridors, ANPR enforcement and luminous street furniture that make roads self-explanatory. Engineered to MoRTH and IRC practice, proven on live corridors.",
    subservices: ["Adaptive Traffic Signals", "Street Lighting", "Fire Protection Systems"],
    specs: [
      "ADAPTIVE SIGNAL CONTROL (ATCS)",
      "SOLAR STUDS & ACTIVE ROAD MARKING",
      "ANPR-BASED ENFORCEMENT",
      "MoRTH / IRC COMPLIANT DESIGN",
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/198909bfb-022c-4a1a-acb3-a1ecc5c26506.png",
    alt: "Smart intersection at night with intelligent signals and light trails",
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
                <span className="absolute right-6 top-4.5 font-display text-[64px] font-bold leading-none text-white/8">{d.num}</span>
                <h3 className="text-[clamp(1.4rem,2.4vw,2.1rem)] text-white">{d.title}</h3>
                <p className="mt-3.5 max-w-[520px] text-[15px] text-white/70">{d.body}</p>

                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/50">Includes</p>
                <div className="mt-2.5 grid grid-cols-1 gap-2.5 min-[481px]:grid-cols-2">
                  {d.subservices.map((sub) => (
                    <div key={sub} className="flex items-center gap-2.5 text-[13px] text-white/85">
                      <ServiceIcon name={d.icon} />
                      {sub}
                    </div>
                  ))}
                </div>

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
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
