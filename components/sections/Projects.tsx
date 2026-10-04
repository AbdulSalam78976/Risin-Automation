import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

const projects = [
  {
    tag: "TS-04 · RAIL SAFETY",
    title: "Train Approach Warning System",
    body: "A train approach warning system (TAWS), also called an automatic track warning system (ATWS), detects oncoming trains and triggers alarms to protect track workers and road traffic at level crossings.",
    points: [
      ["Detection", "Track circuits, wheel sensors and axle counters, or GPS tracking, spot a train well before it arrives."],
      ["Processing", "A central unit or microcontroller calculates the train's distance, speed and expected arrival time."],
      ["Warning signals", "Acoustic sirens, horns, flashing lights and wearable or handheld vibration alerts give personnel enough time to reach safety."],
    ],
    img: "/images/rail.jpg",
    alt: "Railway track running between trees",
  },
  {
    tag: "WH-05 · HYDROMET",
    title: "Automatic Weather Station",
    body: "An automatic weather station (AWS) is an autonomous system that measures, records and transmits meteorological data without manual intervention.",
    points: [
      ["Sensors", "Temperature, humidity, wind speed and direction, atmospheric pressure and rainfall."],
      ["Data logger", "Collects, converts and stores the sensors' electrical signals as readable weather data."],
      ["Power supply", "Solar panel or wind turbine paired with a rechargeable battery for continuous 24/7 operation."],
      ["Telemetry", "4G cellular SIM, Wi-Fi or satellite modules push data to a central server or cloud in near real time."],
      ["Mast & mounting", "Weatherproof tower or tripod — typically around 10 m for wind sensors — holding the equipment securely in place."],
    ],
    img: "/images/AWS.webp",
    alt: "Automatic weather station mast with sensors in an open field",
  },
  {
    tag: "TS-04 · TRAFFIC SYSTEMS",
    title: "Traffic Signal System",
    body: "An arrangement of electrically operated lights and sensors that coordinate to regulate vehicle and pedestrian movement safely and efficiently at road intersections.",
    points: [
      ["Signal heads", "Red, amber and green lamps with turn arrows and pedestrian icons."],
      ["Vehicle detectors", "In-pavement inductive loops, video cameras or radar sensors that spot waiting vehicles."],
      ["Local controllers", "The brains in the roadside cabinet, processing timing patterns and detector data for a single intersection."],
      ["Communication network", "Links individual intersections to a central traffic control centre for corridor-wide coordination."],
    ],
    img: "/images/traffic-signal.jpg",
    alt: "Traffic signal head over a city road",
  },
  {
    tag: "SA-01 · ENTRANCE AUTOMATION",
    title: "Automatic Sliding Doors",
    body: "Automatic sliding doors use motion sensors and infrared technology to open and close smoothly, giving hands-free entry and better energy efficiency in commercial and residential buildings.",
    points: [
      ["Header unit", "Houses the motor, gearbox, control unit and drive belt that power the sliding panels."],
      ["Sensors", "Microwave motion detectors, infrared presence sensors or touchless hand-wave switches trigger opening."],
      ["Safety features", "Built-in obstacle detection and emergency breakaway that stops or pivots the leaf if it is blocked."],
      ["Configurations", "Single-leaf, bi-parting double-leaf and telescopic designs for compact openings."],
    ],
    img: "/images/sliding-doors.jpg",
    alt: "Glass automatic sliding entrance doors of a building",
  },
  {
    tag: "RE-02 · SOLAR",
    title: "Solar Power System",
    body: "Rooftop and ground-mount solar delivered turnkey — from shading study and structure design through commissioning, net metering and ongoing performance monitoring.",
    points: [
      ["Array & structure", "Modules on an engineered mounting structure, strings laid out around the site's real shading and roof loading."],
      ["Conversion & protection", "String or central inverters with DC/AC protection, isolation and metering tied into the LT panel."],
      ["Monitoring", "Generation, performance ratio and fault logging reported per string over GSM."],
      ["Net metering & O&M", "Utility documentation and commissioning tests, then scheduled cleaning, thermal scans and reporting."],
    ],
    img: "/images/solar.jpg",
    alt: "Rows of solar panels in an open field",
  },
  {
    tag: "TS-04 · ROAD LIGHTING",
    title: "Street Lighting System",
    body: "LED street and area lighting engineered to the road class — poles, feeders and control, installed and maintained as one package.",
    points: [
      ["Luminaires", "LED heads on galvanised poles, selected for the road class, mounting height and pole spacing."],
      ["Control", "Photocell or astronomical-timer switching, with optional dimming profiles for late-night hours."],
      ["Power", "Grid-fed feeder pillars, or standalone solar poles with battery autonomy where no feeder exists."],
      ["Civil & cabling", "Pole foundations, earthing and underground cabling, tested and handed over as built."],
    ],
    img: "/images/street-lighting.jpg",
    alt: "Street light poles illuminated at night",
  },
];

export function Projects() {
  return (
    <section className="bg-slate py-[clamp(72px,10vh,120px)] text-navy" id="projects">
      <Wrap>
        <Kick scramble>03 / PROJECTS</Kick>
        <h2 className={`lines ${sectionTitleClass} text-navy`}>
          <span className="ln"><span>SYSTEMS WE BUILD,</span></span>
          <span className="ln"><span>END TO END.</span></span>
        </h2>

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
                  {p.points.map(([term, detail]) => (
                    <div key={term} className="border-b border-navy/10 py-3.5">
                      <dt className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em] text-green-dark">
                        <span className="h-1.5 w-1.5 shrink-0 bg-green" />
                        {term}
                      </dt>
                      <dd className="mt-1.5 pl-4 text-[13.5px] leading-relaxed text-steel">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          );
        })}
      </Wrap>
    </section>
  );
}
