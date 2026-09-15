"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface SearchItem {
  id: string;
  category: "Service" | "Project" | "Tool" | "Page";
  title: string;
  desc: string;
  url: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  { id: "sa", category: "Service", title: "Smart Entrance Automation", desc: "Boom barriers, sliding gates, ANPR, bollards & access control", url: "/services" },
  { id: "re", category: "Service", title: "Renewable Energy · Solar EPC", desc: "Rooftop & ground solar, VFD pumping, battery storage & O&M", url: "/services" },
  { id: "pi", category: "Service", title: "Power Infrastructure Management", desc: "Substations up to 33kV, switchgear, DG sync & SCADA", url: "/services" },
  { id: "ts", category: "Service", title: "Traffic & Road Safety", desc: "Adaptive signals, VMS corridors & ANPR enforcement", url: "/services" },
  { id: "pj1", category: "Project", title: "Helios Logistics Park (8.2 MW Solar)", desc: "Rooftop solar EPC & 5-yr O&M in Faisalabad", url: "/projects" },
  { id: "pj2", category: "Project", title: "Gateway Container Terminal", desc: "Automated OCR & ANPR gate lanes in Karachi", url: "/projects" },
  { id: "pj3", category: "Project", title: "M-1 Smart Corridor (62 km VMS)", desc: "Variable message sign & adaptive traffic corridor near Peshawar", url: "/projects" },
  { id: "calc", category: "Tool", title: "EPCM & ROI Calculator", desc: "Calculate system scale, estimated ROI & carbon offset", url: "/#roi-calculator" },
  { id: "telem", category: "Tool", title: "Live Ops & Telemetry Command Center", desc: "View real-time solar PR, grid frequency & status logs", url: "/#live-telemetry" },
  { id: "map", category: "Tool", title: "Regional Operational Footprint Map", desc: "Interactive map of active project sites across Pakistan & CPEC", url: "/#regional-map" },
  { id: "ins", category: "Page", title: "Engineering Insights & Whitepapers", desc: "Technical articles on SCADA, ANPR & DC microgrids", url: "/insights" },
  { id: "abt", category: "Page", title: "About Risin Automation", desc: "Company background, ISO certifications & core principles", url: "/about" },
  { id: "cnt", category: "Page", title: "Request a Proposal / Contact", desc: "Connect with a discipline lead within 1 business day", url: "/contact" },
];

export function CmdPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filtered = SEARCH_ITEMS.filter((item) =>
    query.trim() === ""
      ? true
      : item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const navigateTo = (url: string) => {
    setOpen(false);
    setQuery("");
    router.push(url);
  };

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      navigateTo(filtered[selectedIndex].url);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-start justify-center bg-navy/75 p-4 pt-[12vh] backdrop-blur-sm animate-[log-in_0.2s_ease-out]"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl overflow-hidden border border-navy/20 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleModalKeyDown}
      >
        <div className="relative flex items-center border-b border-navy/10 px-4">
          <svg className="h-5 w-5 text-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            placeholder="Search disciplines, case studies, tools (Press ESC to exit)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent px-3 py-4 text-base font-medium text-navy outline-none placeholder:text-steel-dim"
          />
          <kbd className="hidden rounded bg-slate px-2 py-1 text-[10px] font-semibold text-steel sm:inline-block">
            ESC
          </kbd>
        </div>

        <div className="max-h-[380px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-steel">
              No results matching &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => navigateTo(item.url)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex cursor-pointer items-center justify-between p-3 transition-colors ${
                    isSelected ? "bg-green/10 text-navy" : "text-steel hover:bg-slate"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-green-dark">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-semibold text-navy">{item.title}</h4>
                    </div>
                    <p className="mt-0.5 text-xs text-steel-dim">{item.desc}</p>
                  </div>
                  <span className="text-xs text-green font-display">↗</span>
                </div>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-navy/10 bg-slate px-4 py-2 text-[11px] text-steel">
          <span>Navigate with ↑ ↓ and Press Enter to select</span>
          <span className="font-mono">Risin Command Palette</span>
        </div>
      </div>
    </div>
  );
}
