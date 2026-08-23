import Link from "next/link";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

const services = [
  {
    title: "Smart Entrance Automation",
    body: "Boom barriers, sliding gates, ANPR capture and access control unified under one management layer.",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/1838948a5-380c-4607-944f-c6b18a399895.png",
    alt: "Automated facility entrance with boom barrier and ANPR camera",
  },
  {
    title: "Renewable Energy · Solar",
    body: "Rooftop and ground-mount solar, delivered turnkey with bankable performance ratios.",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/12bbdaba2-32cd-405e-b281-2ff4d0102297.png",
    alt: "Ground-mount solar farm at golden hour",
  },
  {
    title: "Power Infrastructure",
    body: "Substations, switchgear, DG synchronisation and SCADA kept inside tolerance and on schedule.",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/19e34662f-2370-4cdc-930b-f64160a6f5e5.png",
    alt: "Electrical substation with engineer reviewing switchgear",
  },
  {
    title: "Traffic & Road Safety",
    body: "Adaptive signals, VMS corridors and ANPR enforcement engineered to MoRTH and IRC practice.",
    img: "https://image.qwenlm.ai/public_source/f71ff394-9c0e-452a-a891-b2d8c550e89b/198909bfb-022c-4a1a-acb3-a1ecc5c26506.png",
    alt: "Smart intersection at night with intelligent signals",
  },
];

export function ServicesTeaser() {
  return (
    <section className="border-b border-navy/10 bg-white py-[clamp(64px,9vh,100px)] text-navy">
      <Wrap>
        <div className="reveal">
          <Kick scramble>WHAT WE DELIVER</Kick>
          <h2 className={`${sectionTitleClass} text-navy`}>FOUR DISCIPLINES, ONE PARTNER.</h2>
        </div>

        <div className="my-10 h-px w-full origin-left bg-gradient-to-r from-navy/40 via-green/40 to-transparent" />

        <div className="no-scrollbar -mx-[clamp(20px,4vw,48px)] flex snap-x snap-mandatory gap-6 overflow-x-auto px-[clamp(20px,4vw,48px)] pb-2">
          {services.map((s) => (
            <Link
              key={s.title}
              href="/services"
              className="group relative h-[450px] w-[260px] shrink-0 snap-start overflow-hidden sm:w-[300px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt={s.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/55 to-navy-dark/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

              <div className="absolute inset-0 z-[1] flex flex-col justify-end p-7">
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="translate-y-2 pb-3 text-[13.5px] leading-relaxed text-white/85 opacity-0 transition-all delay-100 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      {s.body}
                    </p>
                  </div>
                </div>

                <h3 className="font-display text-xl leading-tight text-white">{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
