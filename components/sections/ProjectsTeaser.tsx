import Link from "next/link";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { btnGhost } from "@/components/btn";

const projects = [
  {
    tag: "RAIL SAFETY",
    title: "Track Warning System — Three Divisions",
    note: "SUKKUR · LAHORE · RAWALPINDI · 2025",
    img: "/images/rail.jpg",
    alt: "Railway track running between trees",
  },
  {
    tag: "HYDROMET",
    title: "Automatic Weather Station Network",
    note: "GILGIT-BALTISTAN & KPK · 2025",
    img: "/images/AWS.webp",
    alt: "Automatic weather station mast with sensors in an open field",
  },
  {
    tag: "TRAFFIC SYSTEMS",
    title: "Signalised Corridor Upgrade",
    note: "ISLAMABAD, ICT · 2024",
    img: "/images/traffic-signal.jpg",
    alt: "Traffic signal head over a city road",
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
              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-steel-dim">{p.note}</p>
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
