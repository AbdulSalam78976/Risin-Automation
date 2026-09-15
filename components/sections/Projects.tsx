import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

const projects = [
  {
    tag: "RE-02 · SOLAR EPC",
    title: "Helios Logistics Park",
    body: "8.2 MW rooftop solar across four warehouse blocks with a storage-ready DC backbone — engineered, procured and commissioned without interrupting a single dispatch shift.",
    data: [
      ["Location", "FAISALABAD, PUNJAB"],
      ["Year", "2025"],
      ["Scope", "EPC + 5-YR O&M"],
      ["Value", "PKR 1.4 B"],
    ],
    outcome: "62% of site load now solar. Payback locked at 4.9 years; PR running at 82.3%.",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/1f9d5f85f-341d-403c-8387-156f10bb6831.png",
    alt: "Aerial view of warehouse rooftop solar at sunset",
  },
  {
    tag: "SA-01 · ENTRANCE AUTOMATION",
    title: "Gateway Container Terminal",
    body: "Fourteen automated entry lanes with OCR gantries, ANPR and barrier interlocks, integrated to the terminal TOS — delivered inside a live port environment.",
    data: [
      ["Location", "KARACHI, SINDH"],
      ["Year", "2024"],
      ["Scope", "DESIGN–BUILD + MAINTENANCE"],
      ["Value", "PKR 620 M"],
    ],
    outcome: "Gate throughput +38%. Average truck dwell down 11 minutes within 90 days.",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/1d7b85fe5-9665-4138-806f-a3129ac6dd70.png",
    alt: "Automated container terminal gate lanes at dusk",
  },
  {
    tag: "TS-04 · TRAFFIC SYSTEMS",
    title: "M-1 Motorway Smart Corridor",
    body: "62 km of variable message signage, lane-control gantries and ATCC stations on a live motorway — full EPCM delivery with authority training included.",
    data: [
      ["Location", "PESHAWAR, KPK"],
      ["Year", "2025"],
      ["Scope", "EPCM"],
      ["Value", "PKR 1.9 B"],
    ],
    outcome: "Corridor incident response improved by 22 minutes; VMS uptime 99.6% in year one.",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/10797dca9-89c5-4263-a7f8-2cba930e6d6a.png",
    alt: "Smart highway corridor with gantry lane control signals",
  },
];

export function Projects() {
  return (
    <section className="bg-slate py-[clamp(72px,10vh,120px)] text-navy" id="projects">
      <Wrap>
        <Kick scramble>03 / SELECTED WORK</Kick>
        <h2 className={`lines ${sectionTitleClass} text-navy`}>
          <span className="ln"><span>PROOF, COMMISSIONED</span></span>
          <span className="ln"><span>AND STILL RUNNING.</span></span>
        </h2>

        {projects.map((p, i) => {
          const swapped = i % 2 === 1;
          return (
            <article
              key={p.title}
              className={`reveal group mt-11 grid grid-cols-1 border border-navy/10 bg-white ${
                swapped ? "min-[901px]:grid-cols-[.85fr_1.15fr]" : "min-[901px]:grid-cols-[1.15fr_.85fr]"
              }`}
            >
              <div className={`relative min-h-[340px] overflow-hidden ${swapped ? "min-[901px]:order-2" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]" />
                <span className="absolute left-4 top-4 bg-navy px-2.5 py-1.5 text-[10px] tracking-[0.2em] text-green">{p.tag}</span>
              </div>
              <div className="flex flex-col p-[clamp(26px,3.2vw,48px)]">
                <h3 className="text-[clamp(1.3rem,2.2vw,1.9rem)] text-navy">{p.title}</h3>
                <p className="mt-3 text-[14.5px] text-steel">{p.body}</p>
                <dl className="mt-6 border-t border-navy/10">
                  {p.data.map(([dt, dd]) => (
                    <div key={dt} className="flex justify-between gap-4 border-b border-navy/10 py-2.5 text-[11px] tracking-[0.08em]">
                      <dt className="uppercase tracking-[0.18em] text-steel-dim">{dt}</dt>
                      <dd className="text-right font-medium text-navy">{dd}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 border-l-[3px] border-green bg-slate p-3.5 text-[13.5px] text-steel">
                  <b className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-green-dark">Outcome</b>
                  {p.outcome}
                </div>
              </div>
            </article>
          );
        })}
      </Wrap>
    </section>
  );
}
