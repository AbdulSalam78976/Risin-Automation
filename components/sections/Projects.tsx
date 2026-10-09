import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

const projects = [
  {
    tag: "TS-04 · RAIL SAFETY",
    title: "Track Warning System ",
    body: "Train approach warning deployed across the Sukkur, Lahore and Rawalpindi divisions, on live track so maintenance gangs could keep working between services. At each work zone, axle counters and track-circuit inputs feed a trackside controller that sirens and strobes both ends, with handheld vibration units carried by every gang member.",
    data: [
      ["Location", "SUKKUR · LAHORE · RAWALPINDI"],
      ["Year", "2025"],
      ["Scope", "SUPPLY, INSTALL & COMMISSION"],
      ["Value", "PKR 142 M"],
    ],
    scope: [
      "Axle-counter and track-circuit detection on every work-zone approach",
      "Trackside controller computing train speed and arrival time",
      "118 dB sirens, strobes and wearable vibration alert units per gang",
      "Gang-leader training and warranty support at all three divisions",
    ],
    outcome: "Warning lead time held above 45 seconds on every commissioning run across the three divisions. Zero work-zone incidents since handover.",
    img: "/images/rail.jpg",
    alt: "Railway track running between trees",
  },
  {
    tag: "WH-05 · HYDROMET",
    title: "Automatic Weather Station Network",
    body: "Twelve automatic weather stations installed across a catchment, each running unattended on solar and reporting to a single dashboard. Site selection, 10 m masts, sensor calibration and GSM backhaul were all delivered in-house, with satellite terminals on the three stations outside cellular coverage.",
    data: [
      ["Location", "GILGIT-BALTISTAN & KPK"],
      ["Year", "2025"],
      ["Scope", "EPC + 3-YR O&M"],
      ["Value", "PKR 96 M"],
    ],
    scope: [
      "Temperature, humidity, wind speed and direction, pressure and rainfall sensors",
      "Data loggers with on-site storage and scheduled upload",
      "Solar panel and battery sized for 7 days of autonomy",
      "4G and satellite telemetry into one central server",
      "10 m galvanised masts with earthing and lightning protection",
    ],
    outcome: "Network has returned 99.1% data availability across its first full monsoon season.",
    img: "/images/aws.jpg",
    alt: "Automatic weather station mast with sensors in an open field",
  },
  {
    tag: "TS-04 · TRAFFIC SYSTEMS",
    title: "Signalised Corridor Upgrade",
    body: "Nine intersections re-signalled and brought under one control centre. Existing fixed-time controllers were replaced with detector-fed local controllers, linked back over fibre so timing plans can be changed from the control room instead of at the cabinet.",
    data: [
      ["Location", "ISLAMABAD, ICT"],
      ["Year", "2024"],
      ["Scope", "DESIGN–BUILD + MAINTENANCE"],
      ["Value", "PKR 310 M"],
    ],
    scope: [
      "LED signal heads with turn arrows and pedestrian aspects",
      "Inductive loop and radar detection on all approaches",
      "Local controllers in roadside cabinets, UPS backed",
      "Fibre link from each junction to the central control centre",
    ],
    outcome: "Peak-hour queue length on the main corridor down 27% after the first retiming cycle.",
    img: "/images/traffic-signal.jpg",
    alt: "Traffic signal head over a city road",
  },
  {
    tag: "SA-01 · ENTRANCE AUTOMATION",
    title: "Automatic Entrances — Hospital Block",
    body: "Thirty-one automatic sliding doors fitted across a working hospital block — OPD, wards and two clean corridors — phased ward by ward so no entrance was out of service during visiting hours. Every leaf is on obstacle detection with breakaway for evacuation.",
    data: [
      ["Location", "RAWALPINDI, PUNJAB"],
      ["Year", "2024"],
      ["Scope", "SUPPLY, INSTALL & AMC"],
      ["Value", "PKR 74 M"],
    ],
    scope: [
      "31 header units — motor, gearbox, controller and drive belt",
      "Microwave motion, infrared presence and touchless wave activation",
      "Obstacle detection with emergency breakaway on every leaf",
      "Bi-parting and telescopic leaves for the narrow corridor openings",
    ],
    outcome: "Running on a quarterly AMC since handover, with no door out of service beyond a single shift.",
    img: "/images/sliding-doors.jpg",
    alt: "Glass automatic sliding entrance doors of a building",
  },
  {
    tag: "RE-02 · SOLAR",
    title: "1.6 MW Rooftop Solar — Industrial Estate",
    body: "Rooftop solar across three production sheds, built around the sheds' real shading and roof loading rather than a nameplate figure. Structure design, string layout, inverters, protection and net-metering documentation were delivered as one package, with no interruption to production shifts.",
    data: [
      ["Location", "FAISALABAD, PUNJAB"],
      ["Year", "2026"],
      ["Scope", "EPC + 5-YR O&M"],
      ["Value", "PKR 265 M"],
    ],
    scope: [
      "1.6 MW of modules on engineered rooftop mounting structure",
      "String inverters with DC/AC protection, isolation and metering",
      "Per-string generation and fault monitoring over GSM",
      "NEPRA net-metering documentation and commissioning tests",
    ],
    outcome: "Performance ratio measured at 81.4% in the first summer. Scheduled cleaning and thermal scans ongoing under O&M.",
    img: "/images/solar.jpg",
    alt: "Rows of solar panels in an open field",
  },
  {
    tag: "TS-04 · ROAD LIGHTING",
    title: "LED Street Lighting — Sector Roads",
    body: "Replacement of sodium lighting on 11 km of sector roads with LED luminaires on new galvanised poles. Feeder pillars, foundations and underground cabling were all included, and the late-night dimming profile was set with the client after a month of readings.",
    data: [
      ["Location", "ISLAMABAD, ICT"],
      ["Year", "2025"],
      ["Scope", "EPCM"],
      ["Value", "PKR 188 M"],
    ],
    scope: [
      "412 LED luminaires on galvanised poles, spaced to road class",
      "Photocell and astronomical-timer switching with dimming profiles",
      "Grid-fed feeder pillars, plus solar poles on two unfed stretches",
      "Pole foundations, earthing and underground cabling, tested as-built",
    ],
    outcome: "Measured energy use on the stretch down 58% against the sodium baseline.",
    img: "/images/street-lighting.jpg",
    alt: "Street light poles illuminated at night",
  },
];

export function Projects() {
  return (
    <section className="bg-slate py-[clamp(72px,10vh,120px)] text-navy" id="projects">
      <Wrap>
        <Kick scramble>03 / SELECTED WORK</Kick>
        <h1 className={`lines ${sectionTitleClass} text-navy`}>
          <span className="ln"><span>DELIVERED, COMMISSIONED</span></span>
          <span className="ln"><span>AND STILL RUNNING.</span></span>
        </h1>

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

                <div className="mt-6">
                  <b className="block text-[10px] uppercase tracking-[0.2em] text-steel-dim">Scope delivered</b>
                  <ul className="mt-3 space-y-2">
                    {p.scope.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] leading-relaxed text-steel">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-l-[3px] border-green bg-slate p-3.5 text-[13.5px] text-steel">
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
