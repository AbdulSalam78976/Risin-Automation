import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { BRAND_MARKS } from "@/lib/brand-marks";

// `mark` is a key into BRAND_MARKS; partners without an available mark fall
// back to a wordmark rendered in the same monochrome treatment.
const OEM_PARTNERS: { name: string; category: string; mark?: keyof typeof BRAND_MARKS }[] = [
  { name: "Schneider Electric", category: "Power & Switchgear", mark: "schneiderelectric" },
  { name: "Siemens", category: "SCADA & Automation", mark: "siemens" },
  { name: "ABB", category: "Substations & Transformers", mark: "abb" },
  { name: "Hikvision", category: "ANPR & Optical Sensors" },
  { name: "Sungrow", category: "Solar Inverters" },
  { name: "Huawei", category: "Smart Energy Storage", mark: "huawei" },
  { name: "Honeywell", category: "Access & Security" },
  { name: "Delta Electronics", category: "VFD & Power Conversion" },
];

const COMPLIANCE_ITEMS = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    body: "Strict design basis controls, FAT protocols, and documented handover dossiers.",
  },
  {
    code: "ISO 14001",
    title: "Environmental Management",
    body: "Sustainable solar procurement, zero toxic runoff, and recyclable infrastructure.",
  },
  {
    code: "ISO 45001",
    title: "Occupational Health & Safety",
    body: "Zero-Harm target, site risk assessments, and 500k+ incident-free field hours.",
  },
  {
    code: "IEC 61439",
    title: "Low-Voltage Switchgear",
    body: "Type-tested switchboards engineered to international safety tolerances.",
  },
];

export function OemCompliance() {
  return (
    <section className="border-b border-navy/10 bg-white py-[clamp(72px,10vh,120px)] text-navy" id="oem-compliance">
      <Wrap>
        <div className="mb-12 max-w-[640px]">
          <Kick scramble>ENTERPRISE TRUST &amp; COMPLIANCE</Kick>
          <h2 className={`${sectionTitleClass} text-navy`}>GLOBAL OEM INTEGRATION &amp; STANDARDS.</h2>
          <p className="mt-4 text-steel">
            Risin Automation specifies vendor-neutral, Tier-1 industrial hardware to ensure 10+ years of reliable field operation. Certified across global ISO safety and quality frameworks.
          </p>
        </div>

        {/* OEM Partner Logo / Ticker Card */}
        <div className="mb-14 border border-navy/10 bg-slate p-8">
          <span className="block text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-steel-dim mb-6 text-center">
            Certified System Integrator &amp; Technical Partner Network
          </span>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 min-[1281px]:grid-cols-8">
            {OEM_PARTNERS.map((oem) => (
              <div
                key={oem.name}
                className="group flex flex-col items-center justify-center gap-2 border border-navy/10 bg-white p-4 text-center transition-all hover:border-green hover:shadow-md"
              >
                <div className="flex h-8 items-center justify-center">
                  {oem.mark ? (
                    <svg
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label={oem.name}
                      className="h-7 w-7 text-steel transition-colors group-hover:text-navy"
                      fill="currentColor"
                    >
                      <path d={BRAND_MARKS[oem.mark]} />
                    </svg>
                  ) : (
                    <span className="font-display text-sm font-bold leading-tight text-steel transition-colors group-hover:text-navy">
                      {oem.name}
                    </span>
                  )}
                </div>
                <span className="text-[9.5px] uppercase leading-tight tracking-wider text-steel-dim">
                  {oem.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 min-[961px]:grid-cols-4">
          {COMPLIANCE_ITEMS.map((c) => (
            <div
              key={c.code}
              className="border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green hover:shadow-lg"
            >
              <span className="inline-block border border-green/30 bg-green/10 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-green-dark">
                {c.code}
              </span>
              <h3 className="mt-4 text-base font-bold font-display text-navy">
                {c.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Zero Harm Banner */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-l-4 border-green bg-navy p-6 sm:p-8 text-white">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-green">
              HSE &amp; SAFETY METRIC
            </span>
            <h4 className="mt-1 text-xl font-bold font-display text-white">
              0.0 Lost Time Injury (LTI) Rate Across 500,000+ Field Hours
            </h4>
            <p className="mt-1 text-xs text-white/70">
              High-voltage work, heavy crane lifts, and highway corridor installations executed under zero-incident target protocols.
            </p>
          </div>
          <a
            href="/about"
            className="shrink-0 border border-green px-5 py-3 text-xs font-display font-semibold uppercase tracking-wider text-green hover:bg-green hover:text-navy transition-colors"
          >
            Review Safety Policy →
          </a>
        </div>
      </Wrap>
    </section>
  );
}
