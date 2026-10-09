"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

// `img` is optional: a discipline with no photo yet gets a branded panel.
const services: { title: string; body: string; img?: string; alt?: string }[] = [
  {
    title: "Smart Entrance Automation",
    body: "Boom barriers, sliding gates, ANPR capture and access control unified under one management layer.",
    img: "/images/entrance-automation.jpg",
    alt: "Automated facility entrance with boom barrier and ANPR camera",
  },
  {
    title: "Renewable Energy",
    body: "Rooftop and ground-mount solar, delivered turnkey with bankable performance ratios.",
    img: "/images/solar-energy.jpg",
    alt: "Ground-mount solar farm at golden hour",
  },
  {
    title: "Power Infrastructure",
    body: "Substations, switchgear, DG synchronisation and SCADA kept inside tolerance and on schedule.",
    img: "/images/power-infrastructure.jpg",
    alt: "Electrical substation with engineer reviewing switchgear",
  },
  {
    title: "Traffic & Road Safety",
    body: "Adaptive signals, VMS corridors and ANPR enforcement engineered to NHA and PEC practice.",
    img: "/images/traffic-road-safety.jpg",
    alt: "Smart intersection at night with intelligent signals",
  },
  {
    title: "Water & Hydromet",
    body: "Automatic weather stations, canal and river gauging, and level alerting — solar-powered sites reporting into SCADA.",
    img: "/images/aws.jpg",
    alt: "Concrete irrigation canal carrying water through a green valley",
  },
];

const DESKTOP = "(min-width: 961px)";

export function ServicesTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // travel = how far the row must slide to reveal its last card.
  // 0 means the effect is off (mobile, reduced motion, or everything fits).
  const [travel, setTravel] = useState(0);
  // Measured height of the pinned block — it sizes to its content, so the
  // cards keep their full height on short screens.
  const [pinHeight, setPinHeight] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const navHeight = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue("--navh");
      return parseFloat(raw) || 88;
    };

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!section || !track || !viewport) return;

      if (!desktop.matches || reduced.matches) {
        setTravel(0);
        setX(0);
        return;
      }

      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setTravel(distance);
      setPinHeight(pinRef.current?.offsetHeight ?? 0);
      if (distance === 0) {
        setX(0);
        return;
      }

      // The row is pinned below the header; scrolling through the section's
      // extra height drives the horizontal offset from 0 to -distance.
      const nav = navHeight();
      const top = section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (nav - top) / distance));
      setX(-progress * distance);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktop.addEventListener("change", onScroll);
    reduced.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onScroll);
      reduced.removeEventListener("change", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const pinned = travel > 0;

  return (
    <section
      ref={sectionRef}
      className="border-b border-navy/10 bg-white text-navy"
      // Section height = the pinned block's own height plus the horizontal
      // distance, so the row finishes exactly as the section leaves.
      style={pinned && pinHeight ? { height: `${pinHeight + travel}px` } : undefined}
    >
      <div
        ref={pinRef}
        className={
          pinned
            ? "sticky top-[var(--navh)] flex min-h-[calc(100vh-var(--navh))] flex-col justify-center overflow-hidden py-[clamp(28px,5vh,64px)]"
            : "py-[clamp(64px,9vh,100px)]"
        }
      >
        <Wrap>
          <div className="reveal">
            <Kick scramble>WHAT WE DELIVER</Kick>
            <h2 className={`${sectionTitleClass} text-navy`}>FIVE DISCIPLINES, ONE PARTNER.</h2>
          </div>

          <div className="my-10 h-px w-full origin-left bg-gradient-to-r from-navy/40 via-green/40 to-transparent" />
        </Wrap>

        <div
          ref={viewportRef}
          className={
            pinned
              ? "overflow-hidden px-[clamp(20px,4vw,48px)]"
              : "no-scrollbar flex snap-x snap-mandatory overflow-x-auto px-[clamp(20px,4vw,48px)] pb-2"
          }
        >
          <div
            ref={trackRef}
            className="flex w-max gap-6"
            style={pinned ? { transform: `translate3d(${x}px,0,0)` } : undefined}
          >
            {services.map((s) => (
              <Link
                key={s.title}
                href="/services"
                className="group relative h-[450px] w-[260px] shrink-0 snap-start overflow-hidden sm:w-[300px]"
              >
                {s.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.img}
                    alt={s.alt ?? ""}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-navy-dark" />
                )}
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
        </div>
      </div>
    </section>
  );
}
