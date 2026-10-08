import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

/* ------------------------------------------------------------------
   Equipment marks. One per system we supply — drawn to the hardware
   rather than reused generically, so the icon carries information.
------------------------------------------------------------------ */
type MarkName =
  | "slidingDoors"
  | "hermeticDoors"
  | "platformScreen"
  | "rooftopSolar"
  | "vfdPump"
  | "battery"
  | "substation"
  | "scada"
  | "transformer"
  | "trafficSignal"
  | "streetLight"
  | "fireProtection"
  | "weatherStation"
  | "staffGauge"
  | "levelAlert"
  // discipline emblems
  | "door"
  | "sun"
  | "bolt"
  | "signal"
  | "droplet";

function Mark({ name, className = "h-5 w-5" }: { name: MarkName; className?: string }) {
  const p = {
    className: `${className} shrink-0`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    /* --- Smart entrance --- */
    case "slidingDoors": // frame, two leaves, travel direction
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M12 3v18" />
          <path d="M9 12H5.5M7 10.2 5.2 12 7 13.8" />
          <path d="M15 12h3.5M17 10.2 18.8 12 17 13.8" />
        </svg>
      );
    case "hermeticDoors": // sealed leaf pair (double gasket line) + clinical cross
      return (
        <svg {...p}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M10.8 3v18M13.2 3v18" />
          <path d="M7 9h2.2M8.1 7.9v2.2" />
        </svg>
      );
    case "platformScreen": // platform edge barriers with door gaps
      return (
        <svg {...p}>
          <path d="M2 21h20" />
          <rect x="3" y="7" width="5" height="11" />
          <rect x="10" y="7" width="4" height="11" />
          <rect x="16" y="7" width="5" height="11" />
          <path d="M2 4h20" />
        </svg>
      );

    /* --- Solar --- */
    case "rooftopSolar": // array mounted on a roof plane
      return (
        <svg {...p}>
          <path d="M2 11 12 3.5 22 11" />
          <rect x="6.5" y="13" width="11" height="6.5" />
          <path d="M6.5 16.25h11M10.2 13v6.5M13.8 13v6.5" />
        </svg>
      );
    case "vfdPump": // water column over a pump base
      return (
        <svg {...p}>
          <path d="M12 2.5s3.8 4.7 3.8 7.2a3.8 3.8 0 0 1-7.6 0c0-2.5 3.8-7.2 3.8-7.2Z" />
          <path d="M5 21h14" />
          <path d="M8.5 21v-3.2M15.5 21v-3.2" />
        </svg>
      );
    case "battery": // cell + charge
      return (
        <svg {...p}>
          <rect x="2" y="7" width="17" height="10" rx="1.5" />
          <path d="M21.5 10.2v3.6" />
          <path d="M11.4 9.3 8.9 12.6h3L10.4 15.6" />
        </svg>
      );

    /* --- Power --- */
    case "substation": // transmission pylon
      return (
        <svg {...p}>
          <path d="M12 2.5v19" />
          <path d="M5.5 21.5 12 7.5l6.5 14" />
          <path d="M7.8 12.5h8.4M9.3 16.5h5.4" />
          <path d="M8.5 5.5h7" />
        </svg>
      );
    case "scada": // supervisory screen with trend
      return (
        <svg {...p}>
          <rect x="2" y="4" width="20" height="13" rx="1.5" />
          <path d="M8.5 21h7M12 17v4" />
          <path d="M5.8 12.5 9 9.3l2.4 2.4 4.8-4.8" />
        </svg>
      );
    case "transformer": // twin windings on a core
      return (
        <svg {...p}>
          <rect x="2.5" y="7" width="7" height="10" rx="3.5" />
          <rect x="14.5" y="7" width="7" height="10" rx="3.5" />
          <path d="M9.5 12h5" />
          <path d="M6 4.5v2.5M18 4.5v2.5" />
        </svg>
      );

    /* --- Traffic & safety --- */
    case "trafficSignal": // three-aspect signal head
      return (
        <svg {...p}>
          <rect x="7" y="2" width="10" height="17" rx="2" />
          <circle cx="12" cy="6.5" r="1.4" />
          <circle cx="12" cy="10.5" r="1.4" />
          <circle cx="12" cy="14.5" r="1.4" />
          <path d="M12 19v3M9 22h6" />
        </svg>
      );
    case "streetLight": // pole, outreach arm, luminaire
      return (
        <svg {...p}>
          <path d="M5 21.5V4h6.5A4.5 4.5 0 0 1 16 8.5" />
          <path d="M13.2 8.5h5.6l-1.4 3.4h-2.8z" />
          <path d="M3 21.5h4" />
          <path d="M16 15.2v1.6" />
        </svg>
      );
    case "fireProtection": // flame within a protective shield
      return (
        <svg {...p}>
          <path d="M12 2.2 4.5 5.4v5.9c0 4.7 3.2 8.2 7.5 9.9 4.3-1.7 7.5-5.2 7.5-9.9V5.4z" />
          <path d="M12 9s2.2 2.2 2.2 3.7a2.2 2.2 0 0 1-4.4 0C9.8 11.2 12 9 12 9Z" />
        </svg>
      );

    /* --- Water & hydromet --- */
    case "weatherStation": // AWS mast: anemometer cups, sensor arm, tripod
      return (
        <svg {...p}>
          <path d="M12 21.5V4.6" />
          <path d="M6.6 6.2h10.8" />
          <circle cx="5.2" cy="6.2" r="1.5" />
          <circle cx="18.8" cy="6.2" r="1.5" />
          <path d="M12 11.6h3.2" />
          <rect x="15.2" y="9.6" width="3.6" height="4" rx="0.6" />
          <path d="M8.4 21.5 12 16.2l3.6 5.3" />
        </svg>
      );
    case "staffGauge": // graduated gauge staff standing in water
      return (
        <svg {...p}>
          <path d="M8 2.5v13.5" />
          <path d="M8 5.2h3.4M8 8.2h3.4M8 11.2h3.4M8 14.2h3.4" />
          <path d="M2 18.4c2 0 2 1.3 4 1.3s2-1.3 4-1.3 2 1.3 4 1.3 2-1.3 4-1.3" />
          <path d="M2 21.5c2 0 2-1.3 4-1.3" />
        </svg>
      );
    case "levelAlert": // rising-level warning
      return (
        <svg {...p}>
          <path d="M12 3.4 3.6 17.2h16.8z" />
          <path d="M12 8.8v3.6M12 14.8h.01" />
          <path d="M2 20.6c2 0 2 1.2 4 1.2s2-1.2 4-1.2 2 1.2 4 1.2 2-1.2 4-1.2" />
        </svg>
      );

    /* --- Discipline emblems --- */
    case "droplet":
      return (
        <svg {...p}>
          <path d="M12 3.2s5.2 5.9 5.2 9.3a5.2 5.2 0 0 1-10.4 0C6.8 9.1 12 3.2 12 3.2Z" />
        </svg>
      );
    case "door":
      return (
        <svg {...p}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 3v18M15 3v18" />
        </svg>
      );
    case "sun":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...p}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "signal":
      return (
        <svg {...p}>
          <rect x="9" y="2" width="6" height="14" rx="1" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      );
  }
}

type Domain = {
  code: string;
  num: string;
  icon: MarkName;
  title: string;
  body: string;
  subservices: { name: string; mark: MarkName; note: string }[];
  // Optional: a discipline with no photo yet renders a branded panel instead.
  img?: string;
  alt?: string;
};

const domains: Domain[] = [
  {
    code: "SA-01",
    num: "01",
    icon: "door" as const,
    title: "Smart Entrance Automation",
    body: "Vehicle and pedestrian access engineered as one system — boom barriers, sliding gates, ANPR capture, bollards and access control unified under a single management layer, integrated with your BMS and security stack.",
    subservices: [
      { name: "Sliding & Revolving Doors", mark: "slidingDoors" as const, note: "High-cycle commercial entrances" },
      { name: "Hermetic & ICU Doors", mark: "hermeticDoors" as const, note: "Sealed clinical & cleanroom" },
      { name: "Platform Screen Doors", mark: "platformScreen" as const, note: "Transit platform edge safety" },
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
    subservices: [
      { name: "Rooftop & Ground-Mount Solar", mark: "rooftopSolar" as const, note: "Yield-simulated array design" },
      { name: "VFD Solar Pumping", mark: "vfdPump" as const, note: "Irrigation & industrial water" },
      { name: "Inverters & Battery Storage", mark: "battery" as const, note: "Grid-tied, hybrid & backup" },
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
    subservices: [
      { name: "Substations & Switchgear", mark: "substation" as const, note: "HT/LT yard design & build" },
      { name: "SCADA & Energy Analytics", mark: "scada" as const, note: "Remote monitoring & load control" },
      { name: "Transformer & DG Services", mark: "transformer" as const, note: "Synchronisation & overhauling" },
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/19e34662f-2370-4cdc-930b-f64160a6f5e5.png",
    alt: "Electrical substation with engineer reviewing switchgear",
  },
  {
    code: "TS-04",
    num: "04",
    icon: "signal" as const,
    title: "Traffic & Road Safety",
    body: "Adaptive signals, VMS corridors, ANPR enforcement and luminous street furniture that make roads self-explanatory. Engineered to NHA and PEC practice, proven on live corridors.",
    subservices: [
      { name: "Adaptive Traffic Signals", mark: "trafficSignal" as const, note: "Corridor-synchronised ATCS" },
      { name: "Street Lighting", mark: "streetLight" as const, note: "LED poles & smart dimming" },
      { name: "Fire Protection Systems", mark: "fireProtection" as const, note: "Detection & suppression" },
    ],
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/198909bfb-022c-4a1a-acb3-a1ecc5c26506.png",
    alt: "Smart intersection at night with intelligent signals and light trails",
  },
  {
    code: "WH-05",
    num: "05",
    icon: "droplet",
    title: "Water & Hydromet",
    body: "Automatic weather stations and hydrological telemetry, installed and maintained end to end. AWS masts log rainfall, wind speed and direction, temperature, humidity and solar radiation; river, canal and tube-well sites add level and flow. Every site runs on solar with battery backup, backhauls over GSM or satellite, and lands in SCADA with threshold alerting — so a rising level or a dry sensor reaches the operator before it reaches the field.",
    subservices: [
      { name: "Automatic Weather Stations", mark: "weatherStation", note: "Rainfall, wind, temp & humidity masts" },
      { name: "River & Canal Gauging", mark: "staffGauge", note: "Level, flow & discharge telemetry" },
      { name: "Flood & Level Alerting", mark: "levelAlert", note: "Thresholds, SMS & dashboards" },
    ],
    img: "/images/hydromet.jpg",
    alt: "Aerial view of an irrigation canal running between agricultural fields",
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
              <span className="ln"><span>FIVE DISCIPLINES.</span></span>
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
              className="reveal mb-6.5 grid min-h-[480px] grid-cols-1 overflow-hidden border border-navy-dark bg-navy text-[#e8ecf1] shadow-[0_18px_50px_rgba(18,42,61,0.18)] last:mb-0 min-[901px]:grid-cols-[1.02fr_.98fr]"
              key={d.code}
            >
              <div className="relative flex flex-col p-[clamp(28px,3.4vw,52px)]">
                <span className="absolute right-6 top-4.5 font-display text-[64px] font-bold leading-none text-white/8">
                  {d.num}
                </span>

                {/* Discipline emblem + title */}
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-green/40 bg-green/10 text-green">
                    <Mark name={d.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="text-[clamp(1.4rem,2.4vw,2.1rem)] text-white">{d.title}</h3>
                </div>

                <p className="mt-4 max-w-[520px] text-[15px] text-white/70">{d.body}</p>

                {/* Systems we supply — each its own equipment mark */}
                <p className="mt-7 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  <span className="h-1.5 w-1.5 bg-green" />
                  Systems we supply
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2.5 min-[481px]:grid-cols-2 min-[1201px]:grid-cols-3">
                  {d.subservices.map((sub) => (
                    <div
                      key={sub.name}
                      className="group/tile flex gap-3 border border-white/12 bg-white/[0.03] p-3.5 transition-colors hover:border-green/50 hover:bg-white/[0.06] min-[481px]:flex-col min-[481px]:gap-2.5"
                    >
                      <span className="text-green transition-transform duration-300 group-hover/tile:-translate-y-0.5">
                        <Mark name={sub.mark} className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-[12.5px] font-medium leading-snug text-white">
                          {sub.name}
                        </span>
                        <span className="mt-1 block text-[11px] leading-snug text-white/50">
                          {sub.note}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  className="mt-auto inline-flex items-center gap-2.5 pt-7 text-[11px] uppercase tracking-[0.2em] text-green [&_.ar]:transition-transform [&_.ar]:duration-300 hover:[&_.ar]:translate-x-1.5"
                  href="/contact"
                >
                  DISCUSS THIS DISCIPLINE <span className="ar">→</span>
                </a>
              </div>

              <div
                className={`relative min-h-[300px] overflow-hidden border-t border-white/10 min-[901px]:border-t-0 ${
                  i % 2 === 1
                    ? "min-[901px]:order-first min-[901px]:border-r"
                    : "min-[901px]:border-l"
                }`}
              >
                {d.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={d.img}
                    alt={d.alt ?? ""}
                    className="absolute inset-0 h-full w-full animate-[ken-burns_16s_ease-in-out_infinite_alternate] object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy-dark text-green/70">
                    <Mark name={d.icon} className="h-12 w-12" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {d.title}
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
