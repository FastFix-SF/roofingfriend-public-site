import pipeGalvanized from "@/assets/pipe-galvanized.jpg";
import pipeCastIron from "@/assets/pipe-cast-iron.jpg";
import pipeClay from "@/assets/pipe-clay.jpg";
import pipePolybutylene from "@/assets/pipe-polybutylene.jpg";

export const pipeStats = [
  { value: "47+", unit: "years", label: "Average age of water pipes in major US cities", icon: "clock" as const },
  { value: "240,000+", unit: "", label: "Water main breaks every year in America", icon: "alert" as const },
  { value: "6B+", unit: "gallons", label: "Treated water lost daily to leaking pipes", icon: "droplet" as const },
  { value: "Lead, Rust, Bacteria", unit: "", label: "What builds up inside your aging pipes", icon: "skull" as const },
];

export const pipeConditions = [
  {
    name: "Corroded Galvanized Steel",
    image: pipeGalvanized,
    description: "Installed in homes built before 1960, galvanized steel pipes corrode from the inside out. That brown water coming from your faucet? That's iron oxide — rust — flaking off pipe walls and flowing straight into your glass.",
    risk: "Lead contamination, reduced water pressure, frequent leaks, discolored water that stains sinks and laundry.",
  },
  {
    name: "Deteriorating Cast Iron",
    image: pipeCastIron,
    description: "Cast iron drain pipes were the standard for decades. After 50+ years underground, they rot, crack, and collapse. The sewage that's supposed to flow away from your home? It's seeping into your soil.",
    risk: "Sewage backups, foundation damage, pest infestations through cracks, foul odors throughout the home.",
  },
  {
    name: "Cracked Clay Sewer Lines",
    image: pipeClay,
    description: "Clay pipes shatter like pottery. Tree roots smell the moisture, force their way in, and turn your sewer line into a root-filled blockage. Every flush becomes a gamble.",
    risk: "Complete sewer line failure, tree root intrusion, yard sinkholes, raw sewage surfacing in your lawn.",
  },
  {
    name: "Failing Polybutylene",
    image: pipePolybutylene,
    description: "Marketed as the 'pipe of the future' in the 1980s, polybutylene reacts with chlorine in tap water and becomes brittle. Millions of homes still have it — a ticking time bomb behind every wall.",
    risk: "Sudden catastrophic bursts, flooding, mold growth inside walls, insurance companies refusing coverage.",
  },
];

export const promoCards = [
  {
    title: "Your Water Quality",
    subtitle: "What you can't see CAN hurt you",
    description: "That metallic taste? The slight discoloration? Sediment in your glass? These aren't minor inconveniences — they're warning signs. Old pipes leach lead, copper, and rust into every drop that flows through your home. You're cooking with it. Bathing your kids in it. Drinking it.",
  },
  {
    title: "Your Home's Value",
    subtitle: "Old plumbing is a deal-killer",
    description: "Home inspectors flag aging plumbing immediately. Buyers walk away. Insurance companies raise premiums or deny coverage entirely. That 'minor plumbing issue' could cost you tens of thousands in lost home value — far more than a proactive replacement.",
  },
  {
    title: "Before It Fails, Replace It",
    subtitle: "Don't wait for the flood",
    description: "The average pipe failure causes $10,000+ in water damage. Most homeowner's insurance won't cover damage from pipes they consider 'past useful life.' A scheduled replacement costs a fraction of an emergency repair — and we can do it without tearing up your property.",
    cta: true,
  },
];

export const pipeFaqs = [
  {
    question: "How do I know if my pipes are old and need replacing?",
    answer: "Look for warning signs: discolored water (brown, yellow, or rusty tint), low water pressure, frequent leaks, visible corrosion on exposed pipes, or a metallic taste in your water. If your home was built before 1980, there's a high chance your pipes are past their expected lifespan. We offer free video inspections to show you exactly what's happening inside your pipes.",
  },
  {
    question: "Is rusty or discolored water dangerous to drink?",
    answer: "While small amounts of rust aren't immediately toxic, consistently discolored water indicates pipe deterioration that can introduce lead, bacteria, and other contaminants. The EPA warns that lead exposure — common in older plumbing — has no safe level, especially for children. If your water is discolored, we strongly recommend getting your pipes inspected immediately.",
  },
  {
    question: "How much does it cost to repipe a house?",
    answer: "Full repiping typically ranges from $4,000 to $15,000 depending on home size, pipe material, and accessibility. Compare that to the average $10,000+ in damage from a single pipe failure, plus mold remediation costs that can exceed $30,000. Many of our customers find that proactive replacement actually saves money — especially with our trenchless options that reduce labor costs.",
  },
  {
    question: "Can pipes be replaced without tearing up my yard or walls?",
    answer: "Yes — that's exactly what trenchless pipe replacement is designed for. Using techniques like pipe bursting and CIPP lining, we can replace or rehabilitate your pipes with minimal excavation. In most cases, we only need one or two small access points. Your landscaping, driveway, and walls stay intact. Learn more about our trenchless methods.",
  },
  {
    question: "What type of pipes should I replace mine with?",
    answer: "We recommend PEX (cross-linked polyethylene) for water supply lines and PVC or ABS for drain lines. PEX is flexible, resistant to corrosion and freezing, and has a 50+ year lifespan. It's also faster and less expensive to install than copper. We'll assess your specific situation and recommend the best material for your home.",
  },
  {
    question: "How long does a whole-house repipe take?",
    answer: "A standard whole-house repipe takes 2-5 days depending on home size and complexity. Trenchless sewer line replacement can often be completed in a single day. We work efficiently to minimize disruption to your daily routine, and we always clean up after ourselves.",
  },
];
