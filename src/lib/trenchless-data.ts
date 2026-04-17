export interface SectorContent {
  heading: string;
  description: string;
  benefits: string[];
  keywords: string[];
}

export type CommercialContent = SectorContent;

export interface TrenchlessMethod {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  whatIsIt: string;
  bestFor: { audience: string; description: string }[];
  steps: { title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  commercialContent: CommercialContent;
  industrialContent: SectorContent;
}

export const trenchlessMethods: TrenchlessMethod[] = [
  {
    slug: "cipp",
    name: "CIPP Pipe Lining",
    tagline: "Reline Your Pipes From the Inside — No Digging Required",
    metaTitle: "CIPP Pipe Lining Services in the Bay Area | West Peak Plumbing",
    metaDescription: "CIPP (Cured-in-Place Pipe) lining repairs damaged sewer and drain pipes without digging up your property. Fast, affordable trenchless pipe repair in the Bay Area.",
    heroImage: "",
    whatIsIt: "CIPP stands for Cured-in-Place Pipe lining. Think of it like giving your old, cracked pipes a brand-new inner wall. We insert a flexible liner coated with resin into your damaged pipe, then inflate it so it presses against the inside of the old pipe. Once the resin hardens (or \"cures\"), you have a smooth, seamless pipe inside your old one — stronger than the original, and it can last 50+ years. No jackhammers. No torn-up floors. No week-long shutdowns.",
    bestFor: [
      { audience: "Commercial Buildings", description: "Office buildings, retail spaces, and restaurants can keep operating while we reline pipes behind walls and under floors. Zero disruption to your tenants or customers." },
      { audience: "Apartment Complexes", description: "Multi-unit buildings with aging cast iron or clay pipes are perfect candidates. We fix the entire building's drain system floor by floor, without relocating residents." },
      { audience: "Industrial Facilities", description: "Factories, warehouses, and plants with underground sewer lines benefit from CIPP because there's no need to shut down operations or break through concrete slabs." },
    ],
    steps: [
      { title: "Camera Inspection", description: "We send a high-definition camera through your pipes to locate every crack, root intrusion, and blockage. You'll see exactly what we see." },
      { title: "Pipe Cleaning", description: "We use hydro jetting to blast away debris, grease, and tree roots so the liner adheres perfectly to the pipe walls." },
      { title: "Liner Installation", description: "A resin-saturated felt liner is pulled or inverted into the damaged pipe. It conforms to every bend and joint." },
      { title: "Curing & Final Inspection", description: "The liner is inflated and cured using hot water, steam, or UV light. Once hardened, we run the camera again to verify a perfect seal." },
    ],
    benefits: [
      "No excavation — your landscaping, flooring, and driveways stay intact",
      "Completed in hours, not days or weeks",
      "New pipe-within-a-pipe rated to last 50+ years",
      "Works on pipes 2\" to 12\" in diameter",
      "Prevents future root intrusion with seamless, jointless design",
      "Increases flow capacity by smoothing the interior surface",
    ],
    faqs: [
      { question: "How much does CIPP pipe lining cost in the Bay Area?", answer: "CIPP lining typically costs $80–$250 per linear foot depending on pipe diameter and access. For a typical commercial building, expect $3,000–$15,000 — significantly less than traditional dig-and-replace which can run $150–$400+ per foot when you factor in excavation, restoration, and downtime." },
      { question: "How long does CIPP lining last?", answer: "CIPP liners are rated to last 50 years or more. The epoxy resin creates a seamless, corrosion-resistant pipe inside your existing one. Many manufacturers back their liners with a 50-year warranty." },
      { question: "Can CIPP fix pipes under a building's foundation?", answer: "Absolutely. That's one of the biggest advantages. Traditional repair would require jackhammering through your foundation slab. CIPP is inserted through existing access points (cleanouts), so your foundation stays untouched." },
      { question: "Does CIPP work on all pipe materials?", answer: "Yes. CIPP works on cast iron, clay, PVC, concrete, and even Orangeburg pipes. The liner bonds to the inside regardless of the host pipe material." },
      { question: "Will my building need to shut down during CIPP lining?", answer: "In most cases, no. We can isolate sections and work floor by floor or zone by zone. Most commercial and apartment buildings remain fully operational during the process." },
    ],
    commercialContent: {
      heading: "CIPP Pipe Lining for Supermarkets & Commercial Centers",
      description: "Supermarkets, retail centers, and shopping plazas rely on uninterrupted operations. CIPP pipe lining lets us reline sewer and drain pipes beneath your commercial property without shutting down a single store. No jackhammering through warehouse floors, no closing aisles, no lost revenue. We work through existing cleanouts and access points — often after business hours — so your tenants and customers never notice.",
      benefits: [
        "Zero store closures during pipe repairs",
        "Works beneath refrigeration units, loading docks, and food prep areas",
        "Meets health department requirements with NSF-certified materials",
        "Prevents sewer gas odors that drive customers away",
        "50-year liner warranty protects your property investment",
      ],
      keywords: ["cipp pipe lining supermarket", "trenchless pipe repair commercial center", "no-dig sewer repair retail", "pipe lining shopping plaza Bay Area"],
    },
    industrialContent: {
      heading: "CIPP Pipe Lining for Factories & Industrial Facilities",
      description: "Industrial facilities can't afford production shutdowns for pipe repairs. CIPP pipe lining restores sewer, drain, and process waste lines beneath factory floors, loading docks, and manufacturing areas without breaking concrete or halting operations. We work around your production schedule — nights, weekends, planned shutdowns — so your facility keeps running.",
      benefits: [
        "Zero production downtime during pipe repairs",
        "Works beneath heavy machinery, loading docks, and concrete slabs",
        "Chemical-resistant liners handle industrial waste streams",
        "No heavy equipment inside your facility — all work done through existing access points",
        "50-year liner warranty for long-term infrastructure protection",
      ],
      keywords: ["cipp pipe lining factory", "trenchless pipe repair industrial facility", "no-dig sewer repair warehouse", "industrial pipe lining Bay Area"],
    },
  },
  {
    slug: "brush-coating",
    name: "Brush Coating",
    tagline: "Seal Every Joint and Crack With Precision Epoxy Coating",
    metaTitle: "Brush Coating Pipe Repair in the Bay Area | West Peak Plumbing",
    metaDescription: "Brush coating applies a thick epoxy layer inside damaged pipes to seal cracks and prevent leaks — no digging. Expert trenchless brush coating in the Bay Area.",
    heroImage: "",
    whatIsIt: "Brush coating is exactly what it sounds like — we use a specialized rotating brush to apply a thick layer of epoxy resin directly onto the inside walls of your pipes. It's like painting the inside of your plumbing with a super-strong, waterproof coating. This method is ideal for smaller sections of pipe, spot repairs, or pipes with minor cracks and joint separations. The epoxy seals everything and creates a smooth, corrosion-resistant surface.",
    bestFor: [
      { audience: "Commercial Buildings", description: "Perfect for targeted repairs at pipe joints under bathrooms, kitchens, or mechanical rooms without tearing into finished spaces." },
      { audience: "Apartment Complexes", description: "When specific units have leaking drain connections, brush coating fixes just those spots without disrupting the whole building." },
      { audience: "Industrial Facilities", description: "Ideal for chemical-resistant coatings on drain lines that handle corrosive waste in manufacturing or food processing plants." },
    ],
    steps: [
      { title: "Video Inspection", description: "We inspect the pipe with a camera to identify the exact locations of cracks, joint separations, or corrosion." },
      { title: "Pipe Cleaning", description: "The pipe interior is cleaned with hydro jetting or mechanical tools to remove scale, grease, and debris." },
      { title: "Epoxy Application", description: "A robotic brush head applies multiple coats of two-part epoxy resin to the pipe walls, building up a thick, even layer." },
      { title: "Cure & Verify", description: "The epoxy cures in place (typically 4–8 hours) and we re-inspect with camera to confirm full coverage and sealing." },
    ],
    benefits: [
      "Precision repairs — coat only the sections that need it",
      "Lower cost than full relining for spot repairs",
      "Chemical-resistant epoxy protects against corrosive waste",
      "Extends pipe life by 30–50 years",
      "No structural excavation needed",
      "Ideal for pipes with minor damage that don't need full relining",
    ],
    faqs: [
      { question: "What's the difference between brush coating and CIPP?", answer: "Brush coating applies epoxy directly to the pipe wall with a brush, while CIPP inserts a full structural liner. Brush coating is best for spot repairs and minor damage. CIPP is better for severely damaged pipes that need full structural reinforcement." },
      { question: "How long does brush coating take?", answer: "Most brush coating jobs are completed in one day. The epoxy application takes 1–3 hours, and curing takes 4–8 hours. Your pipes can be back in service the same day or next morning." },
      { question: "Is brush coating as durable as CIPP?", answer: "Brush coating is excellent for sealing and corrosion protection, but it's not a structural repair like CIPP. For pipes with minor cracks and joint issues, brush coating is perfect. For pipes with significant structural damage, CIPP is the better choice." },
      { question: "Can brush coating fix root intrusion?", answer: "Brush coating can seal joints where roots enter, but if you have significant root intrusion, we'll first remove the roots with hydro jetting and may recommend CIPP for a more permanent structural solution." },
    ],
    commercialContent: {
      heading: "Brush Coating for Supermarkets & Retail Properties",
      description: "When a supermarket has a leaking drain joint under the deli counter or a cracked pipe beneath the loading dock, you don't need to reline the entire system. Brush coating lets us target exactly the damaged spots — sealing joints and cracks with precision epoxy without disrupting store operations. Perfect for retail centers where specific problem areas need fast, targeted fixes.",
      benefits: [
        "Targeted repairs — fix only what's broken, save money",
        "Completed overnight so stores open on schedule",
        "Chemical-resistant epoxy handles grease-heavy drain lines",
        "No floor demolition in customer-facing areas",
        "Ideal for phased repair programs across multi-tenant properties",
      ],
      keywords: ["brush coating commercial plumbing", "epoxy pipe repair supermarket", "targeted pipe repair retail center", "no-dig drain repair shopping center"],
    },
    industrialContent: {
      heading: "Brush Coating for Factories & Manufacturing Plants",
      description: "Manufacturing plants and food processing facilities deal with corrosive waste, chemical runoff, and high-volume drainage. Brush coating applies chemical-resistant epoxy precisely where your industrial pipes are failing — at joints, cracks, and corroded sections — without shutting down production lines or tearing up factory floors.",
      benefits: [
        "Chemical-resistant epoxy handles acidic and caustic industrial waste",
        "Targeted repairs at specific failure points — no over-spending",
        "Completed during planned maintenance windows or overnight",
        "No disruption to manufacturing or processing operations",
        "Extends pipe life 30–50 years in harsh industrial environments",
      ],
      keywords: ["brush coating factory pipes", "industrial pipe repair epoxy", "manufacturing plant drain repair", "no-dig pipe repair warehouse Bay Area"],
    },
  },
  {
    slug: "spray-coating",
    name: "Spray Coating",
    tagline: "High-Speed Epoxy Spray for Complete Pipe Restoration",
    metaTitle: "Spray Coating Pipe Repair in the Bay Area | West Peak Plumbing",
    metaDescription: "Spray coating restores pipes with an even epoxy layer sprayed at high speed — no digging. Fast, effective trenchless pipe repair in the Bay Area.",
    heroImage: "",
    whatIsIt: "Spray coating uses a spinning spray head to apply an even layer of epoxy or polyurea coating to the entire interior surface of your pipe. Think of it like spray-painting the inside of your plumbing. The spray head moves through the pipe at a controlled speed, laying down a uniform coating that seals cracks, stops leaks, and prevents corrosion. It's faster than brush coating for long runs of pipe and creates a seamless, smooth interior surface.",
    bestFor: [
      { audience: "Commercial Buildings", description: "Long runs of drain pipe under commercial buildings get coated quickly and uniformly, restoring flow and stopping leaks across the entire run." },
      { audience: "Apartment Complexes", description: "Vertical stacks in multi-story buildings can be spray coated from roof to basement, restoring the entire drain stack without opening walls on every floor." },
      { audience: "Industrial Facilities", description: "Large-diameter pipes in industrial settings benefit from the speed and coverage of spray coating, minimizing downtime for your operation." },
    ],
    steps: [
      { title: "Camera Survey", description: "Full video inspection to map the pipe condition and plan the coating application." },
      { title: "Hydro Jet Cleaning", description: "High-pressure water blasts the pipe clean, removing buildup and exposing the pipe surface for maximum adhesion." },
      { title: "Spray Application", description: "A calibrated spray head is pulled through the pipe, applying an even coat of epoxy or polyurea at controlled speed." },
      { title: "Inspection & Cure", description: "Final camera inspection confirms even coverage. The coating cures in 2–6 hours depending on the product used." },
    ],
    benefits: [
      "Fastest application method for long pipe runs",
      "Uniform, seamless coating with no brush marks or gaps",
      "Works on pipes from 1.5\" to 24\" diameter",
      "Stops pinhole leaks, corrosion, and joint infiltration",
      "Minimal downtime — most projects done in one day",
      "Polyurea options available for ultra-fast cure times (under 1 hour)",
    ],
    faqs: [
      { question: "How is spray coating different from brush coating?", answer: "Spray coating covers the entire pipe interior uniformly using a spinning spray head, while brush coating targets specific spots. Spray coating is faster for long runs and provides more even coverage. Brush coating is better for targeted spot repairs." },
      { question: "How thick is the spray coating?", answer: "Typical spray coatings are applied at 40–100 mils (1–2.5mm) thickness. Multiple passes can build up thicker layers for pipes in worse condition. The thickness is calibrated based on pipe size and damage severity." },
      { question: "Can spray coating fix a pipe that's completely corroded through?", answer: "Spray coating is a semi-structural repair, not a full structural solution. If your pipe has holes or collapses, CIPP or pipe bursting would be more appropriate. Spray coating is ideal for pipes with surface corrosion, pinhole leaks, and joint issues." },
      { question: "What kind of epoxy do you use for spray coating?", answer: "We use NSF-certified, potable-water-safe epoxy and polyurea coatings. The exact product depends on your pipe type, what flows through it, and how quickly you need the pipe back in service." },
    ],
    commercialContent: {
      heading: "Spray Coating for Supermarkets & Shopping Plazas",
      description: "Supermarkets and shopping plazas have hundreds of feet of drain pipe running beneath their floors. Spray coating is the fastest way to restore all of it — a spinning spray head coats the entire interior in one pass, sealing pinhole leaks, corrosion, and joint infiltration across the full run. One overnight session can restore an entire supermarket's drain system.",
      benefits: [
        "Fastest method for long commercial pipe runs",
        "Entire supermarket drain system restored in a single night",
        "Uniform, seamless coating prevents recurring leaks",
        "Polyurea option cures in under 1 hour for emergency repairs",
        "No trenching through parking lots or store floors",
      ],
      keywords: ["spray coating supermarket pipes", "commercial pipe restoration retail", "no-dig pipe coating shopping plaza", "fast pipe repair commercial building Bay Area"],
    },
    industrialContent: {
      heading: "Spray Coating for Warehouses & Industrial Facilities",
      description: "Industrial facilities have massive runs of drain and sewer pipe — often 6\" to 24\" diameter — running beneath warehouse floors and production areas. Spray coating is the fastest way to restore all of it. Our high-speed spray head coats hundreds of feet of pipe in a single session, sealing corrosion, pinhole leaks, and joint failures across the entire industrial drain system.",
      benefits: [
        "Fastest restoration method for large-diameter industrial pipes",
        "Handles pipes up to 24\" diameter common in industrial facilities",
        "Chemical-resistant polyurea option for harsh industrial waste",
        "Entire facility drain system restored in a single planned shutdown",
        "No excavation through warehouse floors or production areas",
      ],
      keywords: ["spray coating warehouse pipes", "industrial pipe restoration factory", "no-dig pipe coating manufacturing plant", "fast industrial pipe repair Bay Area"],
    },
  },
  {
    slug: "pipe-bursting",
    name: "Pipe Bursting",
    tagline: "Replace Your Entire Pipe Without Digging a Trench",
    metaTitle: "Pipe Bursting Services in the Bay Area | West Peak Plumbing",
    metaDescription: "Pipe bursting replaces old sewer lines by pulling a new pipe through the old one — no trenching. Most plumbers only offer this. We offer 5 trenchless methods.",
    heroImage: "",
    whatIsIt: "Pipe bursting is the most common trenchless method — and the only one most plumbing companies offer. Here's how it works: we pull a cone-shaped bursting head through your old pipe. As it moves through, it breaks the old pipe apart and simultaneously pulls a brand-new HDPE (high-density polyethylene) pipe into place behind it. The result? A completely new pipe in the exact same path as the old one, with only two small access pits at each end. No trench. No excavation along the entire pipe run.",
    bestFor: [
      { audience: "Commercial Buildings", description: "When old clay or cast iron sewer lines are too far gone for lining, pipe bursting gives you a completely new pipe with minimal disruption to your property or business operations." },
      { audience: "Apartment Complexes", description: "Underground sewer laterals connecting your building to the city main can be burst and replaced in a single day, without digging up parking lots or landscaping." },
      { audience: "Industrial Facilities", description: "Heavy-duty HDPE pipe is ideal for industrial waste lines. Pipe bursting can even upsize your pipe diameter for increased capacity." },
    ],
    steps: [
      { title: "Access Pit Excavation", description: "We dig two small pits — one at each end of the pipe section being replaced. These are typically 3'x3' or smaller." },
      { title: "Bursting Head Insertion", description: "A cone-shaped bursting head attached to the new HDPE pipe is fed into the old pipe from one end." },
      { title: "Pull & Burst", description: "A hydraulic winch pulls the bursting head through the old pipe, fracturing it outward while the new pipe slides into place." },
      { title: "Connection & Testing", description: "The new pipe is connected to existing plumbing at both ends, pressure tested, and the small access pits are backfilled." },
    ],
    benefits: [
      "Complete pipe replacement — not a patch or liner, a brand new pipe",
      "Only requires two small access pits, not a full trench",
      "New HDPE pipe is flexible, corrosion-proof, and rated for 100+ years",
      "Can upsize pipe diameter during replacement for better flow",
      "Faster and cheaper than traditional dig-and-replace",
      "Works on sewer laterals, water mains, and storm drains",
    ],
    faqs: [
      { question: "Why do most plumbing companies only offer pipe bursting?", answer: "Pipe bursting is the most widely known trenchless method and requires less specialized training than CIPP, brush coating, or spray coating. At West Peak, we're certified in all five trenchless methods so we can recommend the best solution for your specific situation — not just the one method we happen to offer." },
      { question: "How long does pipe bursting take?", answer: "Most residential and commercial pipe bursting jobs are completed in one day. Larger commercial or municipal projects may take 2–3 days. Compare that to traditional trenching which can take 1–2 weeks." },
      { question: "Can pipe bursting damage surrounding utilities?", answer: "When done by experienced technicians (like our team), pipe bursting is very safe for surrounding utilities. We locate all underground utilities before starting and the bursting head pushes the old pipe fragments outward into the surrounding soil, not toward other pipes." },
      { question: "Is pipe bursting more expensive than CIPP?", answer: "Pipe bursting typically costs more than CIPP because you're getting a completely new pipe rather than a liner. However, it's still 30–50% cheaper than traditional excavation when you factor in restoration costs. We'll always recommend the most cost-effective method for your situation." },
      { question: "What size pipes can you burst?", answer: "We can burst pipes from 2\" to 24\" in diameter. The new pipe can be the same size or one size larger than the original, which is great if you need increased capacity." },
    ],
    commercialContent: {
      heading: "Pipe Bursting for Supermarkets & Commercial Properties",
      description: "When a supermarket's sewer lateral is collapsed or a retail center's main drain line is beyond repair, pipe bursting replaces the entire pipe with brand-new HDPE — without digging a trench across the parking lot. Two small access pits, one day of work, and your commercial property has a new pipe rated to last 100+ years. No traffic disruption, no lost parking spaces, no weeks of construction.",
      benefits: [
        "Complete pipe replacement — not a patch, a brand new line",
        "Only two small pits instead of a full parking lot trench",
        "New HDPE pipe handles commercial-volume waste flow",
        "Can upsize pipe diameter for growing retail properties",
        "100+ year pipe lifespan protects long-term property value",
      ],
      keywords: ["pipe bursting commercial property", "sewer replacement supermarket no dig", "trenchless pipe replacement retail center", "commercial sewer line replacement Bay Area"],
    },
    industrialContent: {
      heading: "Pipe Bursting for Factories & Industrial Properties",
      description: "When an industrial facility's sewer main or process waste line is completely collapsed or corroded beyond repair, pipe bursting replaces the entire line with heavy-duty HDPE pipe — without trenching across your facility yard. Two small access pits, one to two days of work, and your industrial property has a brand-new pipe rated for 100+ years of heavy-duty service.",
      benefits: [
        "Complete pipe replacement with industrial-grade HDPE",
        "Can upsize pipe diameter for increased industrial waste capacity",
        "Only two small access pits — no trenching across facility grounds",
        "HDPE handles chemical waste, high temperatures, and heavy loads",
        "100+ year pipe lifespan eliminates recurring repair costs",
      ],
      keywords: ["pipe bursting factory", "industrial sewer replacement no dig", "trenchless pipe replacement warehouse", "industrial pipe bursting Bay Area"],
    },
  },
  {
    slug: "directional-boring",
    name: "Directional Boring",
    tagline: "Install New Underground Pipes Without Disturbing the Surface",
    metaTitle: "Directional Boring & HDD Services in the Bay Area | West Peak Plumbing",
    metaDescription: "Directional boring (HDD) installs new underground sewer, water, and utility lines without trenching. Expert horizontal directional drilling in the Bay Area.",
    heroImage: "",
    whatIsIt: "Directional boring — also called Horizontal Directional Drilling (HDD) — is how we install brand-new underground pipes without ever digging a trench. A steerable drill head bores a pilot hole underground along a precisely planned path. Then we pull the new pipe back through the bored path. This is the go-to method when you need to run a new pipe under a road, parking lot, building, river, or any surface you can't (or don't want to) dig up.",
    bestFor: [
      { audience: "Commercial Buildings", description: "Need a new sewer connection to the city main across a parking lot or road? Directional boring gets it done without shutting down traffic or tearing up asphalt." },
      { audience: "Apartment Complexes", description: "Running new water or sewer lines between buildings in a multi-building complex without destroying landscaping, walkways, or common areas." },
      { audience: "Industrial Facilities", description: "Installing utility connections under rail lines, roadways, or active facility areas where excavation would halt operations." },
    ],
    steps: [
      { title: "Path Planning", description: "Using utility locating and ground surveys, we plan the exact underground path — avoiding existing utilities, foundations, and obstacles." },
      { title: "Pilot Bore", description: "A steerable drill head bores a small-diameter pilot hole along the planned path, guided by an electronic tracking system." },
      { title: "Reaming", description: "The pilot hole is enlarged to the required diameter using a back reamer — one or more passes depending on the pipe size needed." },
      { title: "Pipe Pullback", description: "The new pipe (HDPE, PVC, or steel casing) is attached to the reamer and pulled back through the enlarged bore hole into its final position." },
    ],
    benefits: [
      "Install new pipes under roads, driveways, and structures without excavation",
      "No surface disruption — landscaping, pavement, and structures remain intact",
      "GPS-guided accuracy to within inches of the planned path",
      "Can bore distances of 100 feet to several thousand feet",
      "Works in most soil conditions including clay, sand, and rock",
      "Installs water lines, sewer lines, gas lines, and conduit",
    ],
    faqs: [
      { question: "When should I choose directional boring over pipe bursting?", answer: "Choose directional boring when you need to install a completely new pipe in a new path — for example, running a sewer line under a road to connect to the city main. Choose pipe bursting when you're replacing an existing pipe in its current location. Directional boring creates a new path; pipe bursting follows the old one." },
      { question: "How deep can directional boring go?", answer: "For typical plumbing projects, we bore at depths of 3 to 15 feet. For larger municipal or industrial projects, HDD equipment can reach depths of 50 feet or more. The depth depends on the project requirements and soil conditions." },
      { question: "Can you bore under a building?", answer: "Yes, in many cases. Directional boring can pass under foundations, buildings, and structures as long as there's adequate depth clearance. We use ground-penetrating radar and utility locating to plan a safe path." },
      { question: "What happens to the soil during boring?", answer: "The drill uses a bentonite drilling fluid (a natural clay slurry) that stabilizes the bore hole, carries cuttings out, and lubricates the drill head. It's non-toxic and environmentally safe. After the job, we clean up any drilling fluid that surfaces at the entry/exit points." },
      { question: "How much does directional boring cost?", answer: "Directional boring typically costs $20–$75 per linear foot for standard plumbing applications. Costs vary based on depth, soil conditions, and pipe diameter. For a typical 50-foot bore under a road, expect $2,000–$5,000 — often less than the cost of road permits, traffic control, and asphalt restoration for traditional trenching." },
    ],
    commercialContent: {
      heading: "Directional Boring for Supermarkets & Retail Centers",
      description: "Need to connect a new supermarket to the city sewer main across a busy road? Running utilities to a new retail pad in a shopping center? Directional boring installs new underground pipes without tearing up roads, parking lots, or landscaping. A GPS-guided drill bores beneath the surface and pulls the new pipe into place — no trenches, no traffic closures, no weeks of construction.",
      benefits: [
        "Install new sewer and water connections without closing roads",
        "No parking lot or landscaping destruction",
        "GPS-guided accuracy avoids existing utilities",
        "Connect new retail pads to existing infrastructure fast",
        "Works under any surface — asphalt, concrete, landscaping",
      ],
      keywords: ["directional boring supermarket", "horizontal drilling commercial property", "no-dig pipe installation retail center", "underground boring shopping plaza Bay Area"],
    },
    industrialContent: {
      heading: "Directional Boring for Industrial Facilities & Plants",
      description: "Industrial facilities often need new utility connections under rail lines, active roadways, or between buildings in a facility campus. Directional boring installs new underground pipes without disrupting production, heavy equipment operations, or facility traffic. A GPS-guided drill bores beneath the surface and pulls the new pipe into place — no trenches through your facility yard.",
      benefits: [
        "Install new pipes under rail lines and active facility roads",
        "No disruption to heavy equipment traffic or loading operations",
        "GPS-guided accuracy avoids existing underground infrastructure",
        "Connect new buildings or equipment to existing utility systems fast",
        "Works in industrial soil conditions including compacted fill and concrete",
      ],
      keywords: ["directional boring factory", "horizontal drilling industrial facility", "no-dig pipe installation warehouse", "underground boring manufacturing plant Bay Area"],
    },
  },
];

export const overviewFaqs = [
  { question: "What is trenchless plumbing?", answer: "Trenchless plumbing is a way to repair or replace underground pipes without digging up your property. Instead of trenching (digging a long, deep ditch to access the pipe), we use specialized equipment to fix pipes from the inside or install new ones through small access points. Your landscaping, driveways, floors, and foundations stay intact." },
  { question: "How much does trenchless plumbing cost in the Bay Area?", answer: "Trenchless plumbing costs vary by method and project size. CIPP lining runs $80–$250 per foot. Pipe bursting runs $60–$200 per foot. Brush and spray coating start around $50 per foot for spot repairs. While the per-foot cost can be similar to traditional methods, trenchless saves you 30–60% overall because there's no excavation, restoration, or extended downtime to pay for." },
  { question: "Is trenchless plumbing worth it for apartment buildings?", answer: "Absolutely. Apartment buildings are one of the best candidates for trenchless repair because the alternative — jackhammering through foundation slabs and walls — would require relocating tenants, which is extremely expensive and disruptive. With trenchless, residents stay in their units and the building keeps operating normally." },
  { question: "How long do trenchless repairs last?", answer: "CIPP liners are rated for 50+ years. Pipe bursting installs new HDPE pipe rated for 100+ years. Brush and spray coatings last 30–50 years. All of these exceed the lifespan of many traditional pipe materials like cast iron (50–75 years) or clay (50–60 years)." },
  { question: "Why does West Peak offer all 5 trenchless methods?", answer: "Most plumbing companies only offer pipe bursting because it requires less specialized equipment and training. We invested in all five methods — CIPP, brush coating, spray coating, pipe bursting, and directional boring — because no single method is best for every situation. A cracked joint needs brush coating, not a full reline. A collapsed pipe needs bursting, not a coating. We match the right method to your problem so you get the best result at the best price." },
  { question: "Do you serve commercial and industrial properties in the Bay Area?", answer: "Yes. West Peak specializes in trenchless plumbing for commercial buildings, apartment complexes, and industrial facilities throughout the Bay Area — including San Francisco, Oakland, San Jose, Fremont, Hayward, Palo Alto, and all surrounding cities. We understand the unique challenges of commercial properties: tenant disruption, code compliance, ADA requirements, and operational continuity." },
  { question: "How do I know which trenchless method I need?", answer: "Start with a free camera inspection. We'll show you exactly what's going on inside your pipes on a live video feed, then recommend the most effective and cost-efficient method. Sometimes we combine methods — for example, hydro jetting + brush coating for minor joint repairs, or CIPP + pipe bursting for a building with both repairable and beyond-repair sections." },
  { question: "Can trenchless plumbing fix tree root damage?", answer: "Yes. We first remove tree roots using hydro jetting (high-pressure water), then seal the pipe using CIPP lining, which creates a seamless, jointless pipe that roots can't penetrate again. For severely root-damaged pipes, pipe bursting replaces the entire line with root-proof HDPE." },
];

export const comparisonData = [
  { feature: "Excavation Required", traditional: "Yes — long trenches dug across your property", trenchless: "No — only small access points needed" },
  { feature: "Project Duration", traditional: "1–3 weeks typical", trenchless: "1–2 days typical" },
  { feature: "Property Damage", traditional: "Landscaping, driveways, floors destroyed", trenchless: "Property stays intact" },
  { feature: "Business Disruption", traditional: "Significant — areas closed off for days/weeks", trenchless: "Minimal — most buildings stay operational" },
  { feature: "Cost (Including Restoration)", traditional: "$150–$400+ per foot", trenchless: "$50–$250 per foot" },
  { feature: "Pipe Lifespan After Repair", traditional: "Depends on new material (50–75 years)", trenchless: "50–100+ years" },
  { feature: "Tenant Relocation Needed", traditional: "Often yes for apartment buildings", trenchless: "Rarely — tenants stay in their units" },
];
