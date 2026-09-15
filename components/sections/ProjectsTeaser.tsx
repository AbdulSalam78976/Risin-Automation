import Link from "next/link";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { btnGhost } from "@/components/btn";

const projects = [
  {
    tag: "SOLAR EPC",
    title: "Helios Logistics Park",
    location: "FAISALABAD, PUNJAB",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/1f9d5f85f-341d-403c-8387-156f10bb6831.png",
    alt: "Aerial view of warehouse rooftop solar at sunset",
  },
  {
    tag: "ENTRANCE AUTOMATION",
    title: "Gateway Container Terminal",
    location: "KARACHI, SINDH",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/1d7b85fe5-9665-4138-806f-a3129ac6dd70.png",
    alt: "Automated container terminal gate lanes at dusk",
  },
  {
    tag: "TRAFFIC SYSTEMS",
    title: "M-1 Motorway Smart Corridor",
    location: "PESHAWAR, KPK",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/10797dca9-89c5-4263-a7f8-2cba930e6d6a.png",
    alt: "Smart highway corridor with gantry lane control signals",
  },
];

export function ProjectsTeaser() {
  return (
    <section className="bg-white py-[clamp(64px,9vh,100px)] text-navy">
      <Wrap>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="reveal">
            <Kick scramble>PROOF, COMMISSIONED</Kick>
            <h2 className={`${sectionTitleClass} text-navy`}>SELECTED WORK.</h2>
          </div>
          <Link href="/projects" className={`${btnGhost} reveal`}>
            VIEW ALL PROJECTS <span className="ar">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[801px]:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.title} href="/projects" className="reveal group relative block overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                />
                <span className="absolute left-3 top-3 bg-navy px-2.5 py-1.5 text-[10px] tracking-[0.2em] text-green">{p.tag}</span>
              </div>
              <h3 className="mt-4 text-[18px] text-navy">{p.title}</h3>
              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-steel-dim">{p.location}</p>
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
