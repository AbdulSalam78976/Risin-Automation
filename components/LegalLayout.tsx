"use client";

import { useEffect, useRef, useState } from "react";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

export function LegalLayout({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  const [active, setActive] = useState(sections[0]?.id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = refs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <section className="border-b border-navy/10 bg-navy py-[clamp(56px,9vh,96px)]">
        <Wrap>
          <Kick>LEGAL</Kick>
          <h1 className={`${sectionTitleClass} text-white`}>{title}</h1>
          <p className="mt-4 max-w-[640px] text-white/70">{intro}</p>
          <p className="mt-4 text-sm text-white/50">Last updated: {updated}</p>
        </Wrap>
      </section>

      <section className="bg-slate py-[clamp(56px,8vh,96px)]">
        <Wrap className="grid grid-cols-1 items-start gap-12 min-[1024px]:grid-cols-[280px_1fr]">
          <nav className="sticky top-[calc(var(--navh)+24px)] hidden self-start min-[1024px]:block">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-green-dark">
              On this page
            </span>
            <ul className="space-y-1 border-l border-navy/10">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={`-ml-px block w-full border-l-2 py-1.5 pl-4 text-left text-sm transition-colors ${
                      active === s.id
                        ? "border-green font-semibold text-navy"
                        : "border-transparent text-steel-dim hover:text-steel"
                    }`}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border border-navy/10 bg-white p-8 shadow-sm min-[768px]:p-12">
            <div className="space-y-11">
              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  ref={(el) => {
                    refs.current[s.id] = el;
                  }}
                  className="scroll-mt-28"
                >
                  <h2 className="mb-3 text-lg font-semibold normal-case tracking-normal text-navy">
                    {s.title}
                  </h2>
                  <div className="space-y-3 text-[15px] leading-relaxed text-steel [&_a]:text-green-dark [&_a]:hover:underline [&_strong]:font-semibold [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
