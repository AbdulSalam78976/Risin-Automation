"use client";

import { useState } from "react";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { PAKISTAN_PATH, PAKISTAN_VIEWBOX } from "@/lib/pakistan-map";

interface LocationPin {
  id: string;
  city: string;
  region: string;
  // x/y are percentages within the map's own bounding box, derived from each
  // city's real lat/long against Pakistan's geographic bounds.
  x: number;
  y: number;
  discipline: "Solar" | "Entrance" | "Power" | "Traffic";
  project: string;
  scale: string;
  status: string;
}

const PINS: LocationPin[] = [
  {
    id: "isb",
    city: "Islamabad",
    region: "Capital Territory & HQ",
    x: 71.8,
    y: 25.5,
    discipline: "Power",
    project: "Central Ops Control Room & 11kV Switchgear Project",
    scale: "HQ + 24/7 Monitoring Center",
    status: "Active 24/7",
  },
  {
    id: "lhr",
    city: "Lahore",
    region: "Punjab Industrial Hub",
    x: 79.5,
    y: 41.6,
    discipline: "Solar",
    project: "Sundar Industrial Estate Solar Rooftop Arrays",
    scale: "12.4 MW Solar EPC",
    status: "Commissioned",
  },
  {
    id: "khi",
    city: "Karachi",
    region: "Sindh · Port Qasim Corridor",
    x: 36.1,
    y: 91.3,
    discipline: "Entrance",
    project: "Gateway Container Terminal ANPR Lanes",
    scale: "14 Automated Gate Lanes",
    status: "Operational",
  },
  {
    id: "gwd",
    city: "Gwadar",
    region: "Balochistan · Free Zone",
    x: 9.1,
    y: 89.3,
    discipline: "Power",
    project: "Port Free Zone Substation & Solar Storage Grid",
    scale: "33kV Substation + Microgrid",
    status: "Commissioned",
  },
  {
    id: "fsd",
    city: "Faisalabad",
    region: "M3 Industrial City",
    x: 71.9,
    y: 42.4,
    discipline: "Solar",
    project: "Textile Complex Rooftop Solar EPC",
    scale: "8.6 MW Peak Solar",
    status: "Commissioned",
  },
  {
    id: "psh",
    city: "Peshawar",
    region: "KPK Smart Highway",
    x: 62.8,
    y: 23.0,
    discipline: "Traffic",
    project: "Motorway ATCS & VMS Signage Corridor",
    scale: "62 km Smart Corridor",
    status: "Active",
  },
];

export function RegionalMap() {
  const [selectedPin, setSelectedPin] = useState<LocationPin>(PINS[0]);
  const [filter, setFilter] = useState<string>("All");

  const filteredPins = filter === "All" ? PINS : PINS.filter((p) => p.discipline === filter);

  return (
    <section className="bg-navy py-[clamp(72px,10vh,120px)] text-white" id="regional-map">
      <Wrap>
        <div className="mb-12 grid grid-cols-1 items-end gap-8 min-[901px]:grid-cols-[1.2fr_.8fr]">
          <div>
            <Kick scramble>REGIONAL DEPLOYMENTS</Kick>
            <h2 className={`${sectionTitleClass} text-white`}>OPERATIONAL FOOTPRINT.</h2>
          </div>
          <p className="text-[15.5px] text-white/75">
            Turnkey infrastructure projects commissioned and actively maintained across Pakistan&apos;s key economic, industrial, and transport corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 min-[961px]:grid-cols-[1.2fr_.8fr]">
          {/* Map Vector & Hotspots Container */}
          <div className="relative min-h-[420px] overflow-hidden border border-white/15 bg-navy-dark p-4 sm:p-6">
            {/* Filters sit in normal flow so a wrapped row can never overlap the map */}
            <div className="relative z-10 flex flex-wrap gap-1 border border-white/10 bg-navy/90 p-1">
              {["All", "Solar", "Entrance", "Power", "Traffic"].map((d) => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={`px-2.5 py-1 text-[11px] font-display font-semibold uppercase transition-colors ${
                    filter === d ? "bg-green text-navy" : "text-white/60 hover:text-white"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Grid Overlay Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Pakistan outline + pins share one box, so pin percentages
                (derived from lat/long) line up with the map geometry. */}
            <div className="relative mx-auto mt-6 aspect-[1000/945] w-full max-w-[520px]">
              <svg
                viewBox={PAKISTAN_VIEWBOX}
                className="absolute inset-0 h-full w-full"
                aria-label="Map of Pakistan"
                role="img"
              >
                <path
                  d={PAKISTAN_PATH}
                  fill="rgba(40,167,69,0.12)"
                  stroke="#28a745"
                  strokeWidth={3}
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Pins */}
              {filteredPins.map((pin) => {
                const isSelected = selectedPin.id === pin.id;
                return (
                  <button
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                    aria-label={`View ${pin.city}`}
                  >
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {isSelected && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                      )}
                      <span
                        className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white transition-all ${
                          isSelected ? "bg-green scale-125 shadow-[0_0_12px_#28a745]" : "bg-navy-dark hover:bg-green"
                        }`}
                      />
                    </span>
                    <span className="absolute left-1/2 top-7 -translate-x-1/2 whitespace-nowrap bg-navy/90 px-2 py-0.5 text-[10px] font-display font-semibold uppercase tracking-wider text-white border border-white/10 group-hover:border-green">
                      {pin.city}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 text-right font-mono text-[10px] text-white/40">
              PAKISTAN DEPLOYMENT GRID // LAT-LONG ANCHORED
            </div>
          </div>

          {/* Selected Pin Details Card */}
          <div className="flex flex-col justify-between border border-white/15 bg-navy-dark p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-green">
                    {selectedPin.region}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-0.5">
                    {selectedPin.city}
                  </h3>
                </div>
                <span className="border border-green/40 bg-green/10 px-3 py-1 text-xs font-semibold uppercase text-green font-display">
                  {selectedPin.discipline}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Project Scope &amp; Name
                  </span>
                  <p className="mt-1 text-base text-white font-medium">
                    {selectedPin.project}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Capacity &amp; System Scale
                  </span>
                  <p className="mt-1 font-mono text-sm text-green">
                    {selectedPin.scale}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Lifecycle Status
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
                    <span className="text-xs text-white/80 font-medium">{selectedPin.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wider text-green hover:underline"
              >
                VIEW FULL PROJECT PORTFOLIO ↗
              </a>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
