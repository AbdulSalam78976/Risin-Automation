import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { PartnerLogo } from "@/components/PartnerLogo";

type Partner = { name: string; category: string; logo?: string };

// To add a logo: drop the file in /public/logos/ (SVG, PNG, JPG or WebP all
// work) and set `logo` to its path. Entries without a logo, or whose file
// fails to load, show the company name instead.
const PARTNERS: Partner[] = [
  { name: "Schneider Electric", category: "Power & Switchgear", logo: "/logos/schneider-electric.svg" },
  { name: "Siemens", category: "SCADA & Automation", logo: "/logos/siemens.svg" },
  { name: "ABB", category: "Substations & Transformers", logo: "/logos/abb.svg" },
  { name: "Huawei", category: "Solar & Energy Storage", logo: "/logos/huawei.svg" },
  { name: "Sungrow", category: "Solar Inverters", logo: "/logos/sungrow.svg" },
  { name: "Delta Electronics", category: "VFD & Power Conversion", logo: "/logos/deltaelectronics.webp" },
  { name: "dormakaba", category: "Automatic Doors", logo: "/logos/dormakaba.svg" },
  { name: "Hikvision", category: "ANPR & Security Cameras", logo: "/logos/hikvision.png" },
  { name: "SWARCO", category: "Traffic Signal Systems", logo: "/logos/swarco.svg" },
  { name: "Honeywell", category: "Fire & Life Safety", logo: "/logos/honeywell.svg" },
];

// Deal partners round-robin into three columns.
const COLUMNS: Partner[][] = [0, 1, 2].map((c) => PARTNERS.filter((_, i) => i % 3 === c));

const COLUMN_MOTION = [
  { className: "animate-[marquee-up_40s_linear_infinite]", duration: "38s" },
  { className: "animate-[marquee-down_40s_linear_infinite]", duration: "44s" },
  { className: "animate-[marquee-up_40s_linear_infinite]", duration: "41s" },
];

// One vertically scrolling column. The inner stack holds two identical copies
// so translating by -50% loops seamlessly; each copy also repeats its short
// list twice so the column never runs out of logos. Repeats are hidden from
// screen readers.
function PartnerColumn({ items, motion }: { items: Partner[]; motion: (typeof COLUMN_MOTION)[number] }) {
  return (
    <div className="h-full overflow-hidden motion-reduce:overflow-y-auto">
      <div
        className={`flex flex-col ${motion.className} group-hover/wall:[animation-play-state:paused]`}
        style={{ animationDuration: motion.duration }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex flex-col gap-8 pb-8">
            {[...items, ...items].map((p, i) => {
              const repeat = copy === 1 || i >= items.length;
              return (
                <li
                  key={`${copy}-${i}`}
                  aria-hidden={repeat || undefined}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-9 w-full items-center justify-center sm:h-11">
                    <PartnerLogo src={p.logo} name={p.name} decorative={repeat} />
                  </div>
                  <span className="text-[9px] uppercase leading-tight tracking-wider text-steel sm:text-[10px]">
                    {p.category}
                  </span>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function OemCompliance() {
  return (
    <section className="border-b border-navy/10 bg-white py-[clamp(72px,10vh,120px)] text-navy" id="oem-compliance">
      <Wrap className="grid grid-cols-1 gap-12 min-[961px]:grid-cols-[.9fr_1.1fr] min-[961px]:gap-16">
        {/* Left: heading */}
        <div className="max-w-[560px]">
          <Kick scramble>ENTERPRISE TRUST &amp; COMPLIANCE</Kick>
          <h2 className={`${sectionTitleClass} text-navy`}>GLOBAL OEM INTEGRATION &amp; STANDARDS.</h2>
          <p className="mt-4 text-steel">
            Risin Automation specifies vendor-neutral, Tier-1 industrial hardware to ensure 10+ years of reliable field operation. Certified across global ISO safety and quality frameworks.
          </p>
          <p className="mt-8 flex items-center gap-2.5 font-display text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-dim">
            <span className="h-1.5 w-1.5 shrink-0 bg-green" />
            Certified System Integrator &amp; Technical Partner Network
          </p>
        </div>

        {/* Right: three-column logo wall */}
        {/* On desktop the wall has no height of its own: it fills the grid row,
            which is sized by the heading block, so both sides match. */}
        <div className="relative h-[300px] sm:h-[340px] min-[961px]:h-auto">
          <div className="group/wall absolute inset-0 grid grid-cols-3 gap-4 [mask-image:linear-gradient(180deg,transparent,#000_14%,#000_86%,transparent)] sm:gap-8">
            {COLUMNS.map((items, c) => (
              <PartnerColumn key={c} items={items} motion={COLUMN_MOTION[c]} />
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
