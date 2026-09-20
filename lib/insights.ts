// Single source of truth for Insights: used by the /insights listing, the
// homepage teaser and each /insights/[slug] article page.

export type InsightSection = { heading: string; paragraphs: string[] };

export type Insight = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  related: { label: string; href: string };
  takeaways: string[];
  sections: InsightSection[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "solar-output-in-pakistan-summer-heat",
    category: "SOLAR EPC",
    title: "Keeping Solar Output High Through a Pakistani Summer",
    summary:
      "Heat and dust are the two biggest drags on rooftop solar in Punjab and Sindh. How we design and maintain arrays so the numbers on the bill match the numbers in the proposal.",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    author: "Risin Renewable Energy Team",
    related: { label: "Helios Logistics Park — rooftop solar, Faisalabad", href: "/projects" },
    takeaways: [
      "Size strings and inverters for hot-weather voltages, not the datasheet's 25°C rating.",
      "Leave airflow gaps under modules — cooler panels produce more.",
      "Schedule cleaning from real soiling data, not a fixed calendar.",
      "Monitor at string level so a single fault can't hide in the plant total.",
    ],
    sections: [
      {
        heading: "Why summer output drops",
        paragraphs: [
          "Solar modules are rated at a 25°C cell temperature, but on a Faisalabad rooftop in June the cells regularly run far hotter. Crystalline silicon loses roughly 0.3–0.4% of its output for every degree above that rating, so a hot afternoon trims peak generation exactly when a factory's load is highest.",
          "Dust makes it worse. Fine dust settles quickly across Punjab and Sindh, and a film that looks harmless from the ground can cut output noticeably within a couple of dry weeks.",
        ],
      },
      {
        heading: "Designing for heat from day one",
        paragraphs: [
          "Heat is handled at the design stage, not after commissioning. We size strings and inverters using hot-weather voltages rather than datasheet values, so the system stays inside its efficient operating window on the hottest days.",
          "Mounting matters as much as the electrical design. Raising modules off the roof and leaving clear airflow gaps lets heat escape from the back of each panel. On large industrial roofs we also check the roof's structural capacity before committing to a layout.",
        ],
      },
      {
        heading: "Cleaning on evidence, not a calendar",
        paragraphs: [
          "A fixed monthly wash is too frequent in the wet season and not frequent enough in the dry one. Instead we compare a regularly cleaned reference string against the rest of the array, and schedule the crew when the gap passes an agreed threshold.",
          "Cleaning methods are chosen per site — manual crews on accessible roofs, low-water methods where supply is limited.",
        ],
      },
      {
        heading: "Monitoring that shows problems early",
        paragraphs: [
          "Total plant output can hide a failed string for weeks. String-level monitoring through the inverters flags underperformance within a day, whether the cause is soiling, a tripped breaker or a damaged connector.",
          "On the Helios Logistics Park project in Faisalabad, this is how performance is tracked month by month against the figure promised in the proposal.",
        ],
      },
    ],
  },
  {
    slug: "anpr-gate-automation-port-terminals",
    category: "SMART ENTRANCE",
    title: "Cutting Truck Wait Times at Port Gates with ANPR",
    summary:
      "How automatic number-plate recognition, barrier interlocks and terminal-system integration turn a congested container gate into a lane that clears in seconds.",
    date: "JUL 2026",
    readTime: "7 MIN READ",
    author: "Risin Smart Entrance Division",
    related: { label: "Gateway Container Terminal — automated gate lanes, Karachi", href: "/projects" },
    takeaways: [
      "Most gate delay comes from manual checks, not the barrier itself.",
      "Camera placement and lighting decide ANPR accuracy more than the software.",
      "Connect gates to the terminal system so they act on real bookings.",
      "Every automated lane needs a clear manual fallback.",
    ],
    sections: [
      {
        heading: "Where the time actually goes",
        paragraphs: [
          "At a busy container gate the barrier is rarely the bottleneck. Trucks wait while a clerk reads the plate, checks the booking and matches the container number by hand. A minute or two per truck, across a full shift, is enough to back the queue onto the road.",
          "Automation targets that checking step. If the lane already knows which truck is arriving and what it is carrying, the barrier can open almost as soon as the truck stops.",
        ],
      },
      {
        heading: "Getting reliable plate reads",
        paragraphs: [
          "ANPR accuracy is decided mostly in the field. Camera height and angle, the capture zone and night-time lighting matter more than the recognition software. We survey each lane and add infrared illumination so reads stay consistent after dark and in dust.",
          "Container codes are read the same way, with gantry-mounted cameras capturing the markings on each side as the truck rolls through.",
        ],
      },
      {
        heading: "Connecting gates to the terminal system",
        paragraphs: [
          "A plate read is only useful if the gate can act on it. Linking the lanes to the terminal operating system checks each read against a booking in real time, so barriers open only for expected trucks and the terminal knows the moment a container enters.",
          "Barrier interlocks and safety loops ensure a barrier can never close on a vehicle, whatever the software decides.",
        ],
      },
      {
        heading: "Planning for the exceptions",
        paragraphs: [
          "Damaged plates, unregistered trucks and network outages will happen. Each automated lane includes an intercom and a manual override, so an operator can clear a truck without shutting the lane.",
          "At Karachi's Gateway Container Terminal, this combination lets the lanes run automatically while exceptions are handled without holding up the queue.",
        ],
      },
    ],
  },
  {
    slug: "load-shedding-dg-synchronisation",
    category: "POWER INFRASTRUCTURE",
    title: "Staying Online Through Load-Shedding: DG Sync and Automatic Changeover",
    summary:
      "For factories, hospitals and ports, a grid outage can't mean a shutdown. How synchronised generators, automatic transfer and SCADA monitoring keep critical loads running.",
    date: "JUN 2026",
    readTime: "6 MIN READ",
    author: "Risin Power Systems Team",
    related: { label: "Free-zone substation & microgrid, Gwadar", href: "/projects" },
    takeaways: [
      "Decide which loads must never drop before sizing generators.",
      "Synchronised generator sets share load and can be serviced one at a time.",
      "Automatic transfer switches remove the gap of a manual changeover.",
      "SCADA turns outages from surprises into logged, reviewable events.",
    ],
    sections: [
      {
        heading: "The real cost of an outage",
        paragraphs: [
          "Scheduled and unscheduled load-shedding is part of operating in Pakistan. For a textile mill it means spoiled batches; for a hospital or a port gate it can mean far worse. A backup system's job is not just to restart after an outage, but to avoid the interruption altogether for the loads that matter.",
          "That starts with a load study: separating critical loads from ones that can wait, and sizing backup capacity around what genuinely has to stay on.",
        ],
      },
      {
        heading: "Synchronising generators",
        paragraphs: [
          "Rather than one large generator, many sites are better served by several smaller sets synchronised together. They share the load, run closer to their efficient range, and let one unit come out for maintenance while the rest keep supplying power.",
          "Synchronisation panels match voltage, frequency and phase before each set connects, so units can be brought online and off without disturbing the supply.",
        ],
      },
      {
        heading: "Automatic transfer",
        paragraphs: [
          "A manual changeover depends on someone being there and reacting quickly. Automatic transfer switches detect a grid failure and move the load to generation within seconds, then return it once the grid is stable.",
          "For the most sensitive equipment, UPS systems bridge those few seconds so control systems and servers never notice the switch.",
        ],
      },
      {
        heading: "Watching it all from one place",
        paragraphs: [
          "SCADA brings the substation, generators and transfer switches into a single view. Operators see load, fuel and alarms in real time, and every outage is logged for later review.",
          "The same approach underpins the Gwadar free-zone substation and microgrid, where grid supply, generation and solar storage are managed together.",
        ],
      },
    ],
  },
  {
    slug: "smart-motorway-corridor-incident-response",
    category: "TRAFFIC & ROAD SAFETY",
    title: "Smart Motorway Corridors: Faster Incident Response with VMS and ATCS",
    summary:
      "Variable message signs, adaptive signals and corridor cameras give highway operators the information to react in minutes instead of waiting for reports to trickle in.",
    date: "MAY 2026",
    readTime: "5 MIN READ",
    author: "Risin Traffic Systems Team",
    related: { label: "M-1 Motorway Smart Corridor, Peshawar", href: "/projects" },
    takeaways: [
      "Detection speed drives incident response times.",
      "Message signs only help if drivers see them early enough to act.",
      "Adaptive signal control responds to real traffic, not a fixed timetable.",
      "Designing to NHA and PEC standards from the start avoids rework at handover.",
    ],
    sections: [
      {
        heading: "Why response time matters",
        paragraphs: [
          "On a busy motorway, the minutes after a breakdown or collision decide whether it stays a single stopped vehicle or becomes a pile-up. Most of the delay in traditional response comes from detection — waiting for a phone call or a patrol to pass.",
          "Corridor cameras and traffic sensors close that gap by spotting stopped vehicles and sudden slowdowns as they happen.",
        ],
      },
      {
        heading: "Warning drivers ahead",
        paragraphs: [
          "Variable message signs let the control room warn drivers kilometres before an incident — reduced speed, lane closures or diversions. Placement is key: signs must sit far enough upstream for drivers to react safely.",
          "Lane-control gantries go further, closing individual lanes overhead so vehicles merge early rather than at the scene.",
        ],
      },
      {
        heading: "Adaptive signals at junctions",
        paragraphs: [
          "Where a corridor meets city streets, fixed signal timings struggle with changing traffic. Adaptive traffic control measures queues in real time and adjusts green times to keep vehicles moving — especially when an incident pushes diverted traffic onto local roads.",
        ],
      },
      {
        heading: "Built to local standards",
        paragraphs: [
          "Highway systems in Pakistan are designed to National Highway Authority requirements and Pakistan Engineering Council practice. Building to those standards from the design stage, rather than adapting afterwards, avoids rework during handover.",
          "It is the approach behind the M-1 Motorway smart corridor near Peshawar, delivered with operator training so the authority's own staff run the system day to day.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
