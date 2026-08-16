import { Wrap } from "@/components/Wrap";

const stats = [
  { count: "240", dec: 0, suffix: "+", label: "Projects Delivered" },
  { count: "38.6", dec: 1, suffix: " MW", label: "Solar Commissioned" },
  { count: "120", dec: 0, suffix: "+", label: "Entrances Automated" },
  { count: "99.97", dec: 2, suffix: "%", label: "SLA Uptime, FY 2025" },
  { count: "14", dec: 0, suffix: " YRS", label: "Design–Build–Maintain" },
];

export function Stats() {
  return (
    <section className="border-b border-navy/10 bg-navy">
      <Wrap className="grid grid-cols-2 max-[960px]:grid-cols-2 min-[961px]:grid-cols-5">
        {stats.map((s, i) => (
          <div
            className={`reveal border-white/12 px-6.5 py-11 max-[960px]:border-t min-[961px]:border-l ${i === 0 ? "min-[961px]:border-l-0" : ""} max-[960px]:first:border-t-0`}
            key={s.label}
          >
            <div className="flex items-baseline gap-1 font-display text-[clamp(1.7rem,2.8vw,2.6rem)] font-bold text-white">
              <span data-count={s.count} data-dec={s.dec}>0</span>
              <b className="font-bold text-green">{s.suffix}</b>
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/60">{s.label}</div>
          </div>
        ))}
      </Wrap>
    </section>
  );
}
