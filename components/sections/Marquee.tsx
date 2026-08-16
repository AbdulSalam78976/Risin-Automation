const items = [
  "SMART ENTRANCE AUTOMATION",
  "SOLAR EPC",
  "POWER INFRASTRUCTURE",
  "TRAFFIC & ROAD SAFETY",
  "ISO 9001:2015",
  "24/7 MAINTENANCE SLA",
];

function Track() {
  return (
    <span className="flex">
      {items.map((item) => (
        <i key={item} className="whitespace-nowrap px-[22px] py-[13px] font-display text-[13px] font-semibold not-italic uppercase tracking-[0.18em]">
          {item}✦
        </i>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="group overflow-hidden border-y border-green-dark bg-green text-white" aria-hidden="true">
      <div className="flex w-max animate-[marquee-scroll_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </div>
  );
}
