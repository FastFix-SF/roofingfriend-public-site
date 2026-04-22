export interface CityFaq {
  q: string;
  a: string;
}

export interface CityData {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  intro: string;
  longIntro: string;
  localFacts: string[];
  nearbyAreas: string[];
  neighborhoodSlugs: string[];
  faqs: CityFaq[];
}

export const cities: CityData[] = [
  {
    slug: "san-francisco",
    name: "San Francisco",
    tagline: "Premium metal roofing in the heart of the Bay Area",
    region: "Bay Area",
    intro:
      "San Francisco's coastal fog, salt-laden air, and Victorian rooflines demand a roof system that resists corrosion and complements historic architecture. PVDF-coated standing seam metal is purpose-built for this microclimate — it shrugs off marine air, lasts 50+ years, and meets the city's strict permit and historic-district guidelines.",
    longIntro:
      "Across San Francisco's seven-by-seven miles, no two roofs face the same conditions. Sunset homes battle persistent fog and corrosive salt; Mission flats bake under summer sun; Pacific Heights mansions and Sea Cliff estates sit fully exposed to ocean wind. We spec roof systems block-by-block — marine-grade Kynar 500 PVDF for fog belts, heavy-gauge copper for landmark Victorians, and high-uplift mechanical-seam panels for ridgeline homes. Every install is permitted through SF DBI by our in-house team, and historic-district properties are handled with full Planning Department documentation.",
    localFacts: [
      "Coastal fog & salt air — PVDF Kynar finishes engineered for marine corrosion",
      "Earthquake-rated installs to current SF seismic and wind-uplift codes",
      "Strict SF DBI permit timelines we handle end-to-end",
    ],
    nearbyAreas: ["alameda-county", "tiburon", "santa-clara"],
    neighborhoodSlugs: ["pacific-heights", "sea-cliff", "presidio-heights"],
    faqs: [
      { q: "Do you handle SF DBI permits and historic-district reviews?", a: "Yes — we pull every San Francisco permit in-house through DBI and submit Planning Department documentation for properties in historic districts (Pacific Heights, Alamo Square, Jackson Square, etc.). You sign once at contract; we handle the rest." },
      { q: "How long does a metal reroof take in San Francisco?", a: "A typical SF single-family standing-seam reroof takes 7–14 working days, including tear-off, underlayment, panel install, and flashing. Larger landmark properties run 3–5 weeks. Weather windows in fog-belt neighborhoods are planned around marine-layer forecasts." },
      { q: "What metal roof is best for San Francisco's fog and salt air?", a: "PVDF (Kynar 500) coated 24-gauge steel or solid copper. Both are rated for marine exposure and won't chalk, fade, or corrode the way bare-aluminum or polyester-painted panels do within sight of the Pacific." },
      { q: "Can you install metal roofs on Victorian and Edwardian homes?", a: "Yes — copper standing seam, lead-coated copper, and custom-color PVDF panels are period-appropriate for Victorian, Edwardian, and Queen Anne homes. We fabricate custom flashing for turrets, dormers, and bay windows in our Bay Area shop." },
      { q: "Do San Francisco homeowners qualify for cool-roof rebates?", a: "Yes — Title 24 cool-roof rated PVDF panels qualify for PG&E energy-efficiency rebates and reduce summer cooling load in inland-facing neighborhoods like Noe Valley and the Mission." },
      { q: "What's the warranty on a metal roof in San Francisco?", a: "Up to 50 years on the paint finish (PVDF Kynar 500) and a lifetime substrate warranty on properly maintained systems. Our workmanship warranty is 25 years — among the longest in the Bay Area." },
    ],
  },
  {
    slug: "santa-clara",
    name: "Santa Clara",
    tagline: "Residential and commercial roofing solutions",
    region: "Bay Area",
    intro:
      "Santa Clara's mix of tech campuses, mid-century homes, and new commercial builds means we install everything from architectural standing seam to high-uplift mechanical-seam systems. Our crews know the city's Title 24 cool-roof requirements and pull permits weekly.",
    longIntro:
      "Santa Clara sits at the heart of Silicon Valley, where 1950s ranch homes share zip codes with billion-dollar tech campuses. Our portfolio here ranges from single-family standing-seam reroofs in the Old Quad to phased TPO installs on R&D headquarters that can't tolerate downtime. Title 24 cool-roof compliance is baked into every spec, and PG&E's Energy-Star rebates often offset a meaningful share of the project cost. Permits clear Santa Clara's Building Division typically within a week.",
    localFacts: [
      "Title 24 cool-roof rated panels qualify for PG&E rebates",
      "Tech-campus phased installs that keep operations running",
      "Same-day Santa Clara permit pulls for most residential reroofs",
    ],
    nearbyAreas: ["san-francisco", "alameda-county", "los-gatos"],
    neighborhoodSlugs: ["old-quad", "rivermark", "killarney-farms"],
    faqs: [
      { q: "Do metal roofs qualify for PG&E rebates in Santa Clara?", a: "Yes — Title 24 cool-roof rated PVDF panels meeting CRRC reflectance thresholds qualify for PG&E energy-efficiency rebates and reduce HVAC load 25–40% across Santa Clara's hot summers." },
      { q: "How fast can you pull a Santa Clara permit?", a: "Most residential reroof permits clear Santa Clara Building Division within 5–10 business days. We submit electronically and track approval daily." },
      { q: "Can you install metal roofs on mid-century modern homes?", a: "Absolutely — flat-pan standing seam complements the clean horizontal lines of Eichler and Eichler-influenced homes throughout Santa Clara, and we offer custom dark-bronze and matte-charcoal PVDF colors that match period intent." },
      { q: "Do you work on commercial buildings in Santa Clara?", a: "Yes — TPO membrane, mechanically-seamed standing seam, and R-Panel are our most common commercial systems for Santa Clara office, R&D, and warehouse properties. We phase work around tenant operations." },
      { q: "How long do metal roofs last in Santa Clara's climate?", a: "50+ years for PVDF-coated steel and 75+ years for copper. Santa Clara's mild, dry climate is one of the easiest in California on roof systems — UV is the main wear factor and PVDF is engineered for it." },
    ],
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    tagline: "Expert roofing services in Contra Costa County",
    region: "Contra Costa County",
    intro:
      "Walnut Creek's hot, dry summers and wildfire exposure put a premium on Class A fire-rated roofs. Standing seam metal carries the highest fire rating available and reflects up to 70% of solar heat — cutting AC bills through the long East Bay summer.",
    longIntro:
      "Walnut Creek sits in the East Bay's hottest microclimate — triple-digit summers and elevated wildfire risk on the Mt. Diablo flank. Class A fire-rated standing seam is the right answer for both: non-combustible, ember-resistant, and reflective enough to drop attic temperatures by 30–50°F. CAL FIRE WUI compliance is standard on our installs, and Contra Costa County permitting is a weekly routine for our team. FAIR Plan and California-admitted insurance carriers regularly grant 5–13% discounts on properties with our Class A metal systems.",
    localFacts: [
      "Class A fire rating — the highest available for WUI zones",
      "Cool-roof panels reduce summer cooling costs 25–40%",
      "Contra Costa County permit experience on every install",
    ],
    nearbyAreas: ["contra-costa-county", "alameda-county", "tiburon"],
    neighborhoodSlugs: ["northgate", "saranap", "rudgear-estates"],
    faqs: [
      { q: "Will a metal roof lower my Walnut Creek wildfire insurance premium?", a: "Often yes — California FAIR Plan and most admitted carriers offer 5–13.8% premium discounts for Class A fire-rated roofs in WUI zones. We provide the manufacturer documentation your insurer needs." },
      { q: "Are metal roofs good for hot Walnut Creek summers?", a: "They're the best option — cool-roof rated PVDF panels reflect up to 70% of solar radiation and re-emit absorbed heat, dropping attic temperatures by 30–50°F and cutting AC costs 25–40%." },
      { q: "Do you handle Contra Costa County permits?", a: "Yes — we pull every Walnut Creek and unincorporated Contra Costa permit in-house. Most reroof permits clear within 1–2 weeks." },
      { q: "How loud is rain on a metal roof?", a: "With proper underlayment and sheathing — about the same as an asphalt shingle roof. The 'tin roof' sound is from uninsulated barns. Modern residential standing seam over solid sheathing and synthetic underlayment is quiet." },
      { q: "Can metal roofs handle Walnut Creek's oak leaves and debris?", a: "Yes — smooth panel surfaces shed leaves, needles, and debris far better than shingles. Standing seam ridges have no granules to clog gutters and no shingle gaps to trap moisture." },
    ],
  },
  {
    slug: "tiburon",
    name: "Tiburon",
    tagline: "Luxury roofing for Marin County homes",
    region: "Marin County",
    intro:
      "Tiburon's waterfront estates and hillside homes demand architectural metal roofing that holds up to bay winds and salt spray while elevating curb appeal. We specialize in custom-color PVDF standing seam, copper accents, and zinc panels for luxury Marin properties.",
    longIntro:
      "Tiburon properties carry some of the highest per-square-foot values in Marin County, and homeowners here expect roof systems that match. We install custom-fabricated copper, zinc, and PVDF standing seam panels engineered for high-uplift exposure on ridgeline lots overlooking Richardson Bay and the Golden Gate. Town of Tiburon design review is part of every project — we submit elevations, material samples, and color chips through our in-house permit team. Wind-uplift engineering letters and seismic anchoring documentation are standard deliverables.",
    localFacts: [
      "Custom PVDF colors and copper/zinc options for high-end aesthetics",
      "Wind-uplift engineering for exposed Tiburon ridgelines",
      "Marin County design-review submittals handled in-house",
    ],
    nearbyAreas: ["kentfield", "san-anselmo", "san-francisco"],
    neighborhoodSlugs: ["belveron", "paradise-cay", "old-tiburon"],
    faqs: [
      { q: "Do you handle Tiburon design-review submittals?", a: "Yes — we prepare and submit all Town of Tiburon design-review packages, including elevations, material samples, color chips, and finish boards. Most projects clear DRB within 4–8 weeks." },
      { q: "What metal works best for Tiburon's bay-front salt exposure?", a: "Solid copper, zinc, or PVDF Kynar 500 over G90 galvanized steel. All three are rated for direct marine exposure and carry 30–50 year finish warranties." },
      { q: "Can you engineer for Tiburon ridgeline wind loads?", a: "Yes — we provide stamped uplift engineering letters for any ridgeline or exposed lot. Mechanical-seam profiles handle 150+ mph design winds when properly clipped." },
      { q: "How much does a copper roof cost in Tiburon?", a: "Solid copper standing seam typically runs $35–$55 per square foot installed depending on roof complexity. Lead-coated copper and zinc are similar. We provide line-item estimates after a free site visit." },
    ],
  },
  {
    slug: "san-anselmo",
    name: "San Anselmo",
    tagline: "Custom metal roofing installations",
    region: "Marin County",
    intro:
      "From craftsman bungalows to modern hillside builds, San Anselmo homeowners want roofs that look as good as they perform. Our custom-fabricated standing seam panels are roll-formed to your exact roof length on-site — no seams across the run, no leak points.",
    longIntro:
      "San Anselmo's housing stock skews toward early-20th-century craftsman, Tudor, and shingle-style homes with complex rooflines — turrets, dormers, valleys, and steep pitches. Our on-site roll-forming truck produces seamless single-length panels up to 60 feet, eliminating horizontal seams and the leak risk they create. Class A fire ratings are mandatory in San Anselmo's WUI zones, and Ross Valley permitting is routine for our team. We coordinate with Marin's tree-protection ordinances on every install.",
    localFacts: [
      "On-site roll-forming for seamless single-length panels",
      "Wildfire-zone Class A ignition resistance",
      "San Anselmo + Ross Valley permit familiarity",
    ],
    nearbyAreas: ["kentfield", "tiburon", "santa-rosa"],
    neighborhoodSlugs: ["sleepy-hollow", "seminary", "winship-park"],
    faqs: [
      { q: "Are metal roofs required in San Anselmo's wildfire zones?", a: "Class A fire-rated roofs are required for new construction and most reroofs in San Anselmo's CAL FIRE-mapped WUI zones. Standing seam metal is the most cost-effective Class A option." },
      { q: "Do you do on-site panel fabrication in San Anselmo?", a: "Yes — our roll-forming truck produces single-piece panels on your driveway, eliminating horizontal joints. This is especially important on long, steep San Anselmo rooflines." },
      { q: "Can you preserve craftsman details on a metal reroof?", a: "Absolutely — we fabricate custom flashing and trim to preserve exposed rafter tails, decorative ridge caps, and shingle-style transitions characteristic of San Anselmo's historic homes." },
      { q: "How does Ross Valley permitting compare to other Marin towns?", a: "Ross Valley permits typically clear in 2–4 weeks for residential reroofs. We submit electronically and track approval daily." },
    ],
  },
  {
    slug: "santa-cruz",
    name: "Santa Cruz",
    tagline: "Coastal roofing specialists",
    region: "Bay Area",
    intro:
      "Santa Cruz roofs face salt fog, heavy winter rain, and intense summer UV. Our marine-grade PVDF standing seam systems are engineered for coastal exposure — finishes that won't chalk or fade and seam profiles that shed Pacific storms without a leak.",
    longIntro:
      "Santa Cruz roofs face the toughest combination of conditions in Northern California — salt fog 200+ days a year, atmospheric-river rainfall in winter, and unfiltered UV in summer. PVDF Kynar 500 over G90 steel and solid copper are the only finishes we recommend within two miles of the coast. Coastal-zone permitting through Santa Cruz County or the City of Santa Cruz is part of our standard scope, and we coordinate with Coastal Commission review when required for ridgeline or bluff-top properties.",
    localFacts: [
      "Marine-grade Kynar 500 finishes for coastal corrosion resistance",
      "UL 580 Class 90 wind uplift for winter storm season",
      "Santa Cruz County coastal-zone permit handling",
    ],
    nearbyAreas: ["los-gatos", "santa-clara", "modesto"],
    neighborhoodSlugs: ["pleasure-point", "seabright", "westside"],
    faqs: [
      { q: "Do metal roofs survive Santa Cruz salt fog?", a: "Yes — Kynar 500 PVDF over G90 galvanized steel and solid copper are both rated for direct coastal marine exposure with 30–50 year finish warranties. Avoid bare aluminum and polyester paints near the ocean." },
      { q: "Will a metal roof handle Santa Cruz winter storms?", a: "Mechanical-seam standing seam carries UL 580 Class 90 wind-uplift ratings — the highest available — and sheds heavy rainfall faster than any shingle roof. Properly installed, leaks are extraordinarily rare." },
      { q: "Do I need a Coastal Commission permit?", a: "Only for properties in the Coastal Zone with specific triggers (height, lot location, etc.). We assess this in the free site visit and handle Coastal Commission submittals when required." },
      { q: "Can metal roofs work with solar?", a: "Yes — standing seam is the best solar substrate available. S-5! clamps attach panels directly to the seam with zero roof penetrations. Most Santa Cruz solar installers prefer working on standing seam." },
    ],
  },
  {
    slug: "modesto",
    name: "Modesto",
    tagline: "Central Valley roofing experts",
    region: "Central Valley",
    intro:
      "Modesto summers regularly hit 100°F — a brutal test for any roof. Cool-roof rated standing seam metal reflects radiant heat back to the sky, dropping attic temps by up to 50°F and cutting AC bills through the Valley's long cooling season.",
    longIntro:
      "Modesto's six-month cooling season is brutal on conventional asphalt roofs — surface temperatures regularly exceed 160°F and shingle granules shed within 10–15 years. Cool-roof rated PVDF standing seam panels reflect up to 70% of solar radiation and last 50+ years untouched. Stanislaus County permitting is straightforward and we deliver fabricated panels free from our Bay Area shop. Title 24 compliance is built into every spec, qualifying most projects for Modesto Irrigation District energy rebates.",
    localFacts: [
      "Cool-roof panels that beat Central Valley heat",
      "Stanislaus County permit + inspection experience",
      "Free delivery from our Bay Area fab shop to Modesto job sites",
    ],
    nearbyAreas: ["santa-cruz", "walnut-creek", "santa-clara"],
    neighborhoodSlugs: ["college-area", "sherwood-forest", "la-loma"],
    faqs: [
      { q: "How much can a metal roof cut my Modesto AC bill?", a: "Cool-roof rated metal typically reduces summer cooling costs 25–40% compared to dark asphalt shingles, depending on attic ventilation and insulation. Energy savings often exceed the cost premium within 7–12 years." },
      { q: "Will a metal roof get too hot in 100°F summers?", a: "Counterintuitively, no — cool-roof rated PVDF panels stay 50–70°F cooler than asphalt at the surface and re-emit absorbed heat far faster, keeping attics dramatically cooler." },
      { q: "Do you charge for delivery to Modesto?", a: "No — we fabricate panels in our Bay Area shop and deliver free to any Modesto or Stanislaus County job site. There's no Central Valley fab markup." },
      { q: "How long do metal roofs last in the Central Valley?", a: "50+ years on PVDF-coated steel. The biggest wear factor in Modesto is UV — and PVDF is engineered specifically to resist UV chalking and fade." },
    ],
  },
  {
    slug: "kentfield",
    name: "Kentfield",
    tagline: "Premium roofing in Marin County",
    region: "Marin County",
    intro:
      "Kentfield's mature oaks, custom estates, and steep hillside lots call for precision roofing — and architectural metal that complements high-end design. We handle every square foot of detail, from custom flashing around chimneys to integrated solar-ready panels.",
    longIntro:
      "Kentfield homes — particularly in Kent Woodlands — sit on steep, oak-shaded lots that punish conventional roofs with leaf debris, shade-driven moss, and challenging access. Standing seam metal sheds debris naturally, denies moss a foothold, and lasts 50+ years untouched. Our solar-integrated installs use S-5! clamps that attach directly to the panel seam — zero roof penetrations, full warranty preservation. Marin County permits and Kent Woodlands HOA reviews are routine for our team.",
    localFacts: [
      "Solar-integrated standing seam — clamp-on, no roof penetrations",
      "Custom flashing fab in our Bay Area shop",
      "Marin County design-review and HOA submittals included",
    ],
    nearbyAreas: ["tiburon", "san-anselmo", "santa-rosa"],
    neighborhoodSlugs: ["kent-woodlands", "murray-park", "greenbrae-boardwalk"],
    faqs: [
      { q: "Do Kent Woodlands HOA rules allow metal roofs?", a: "Yes — Kent Woodlands HOA permits architectural metal in approved muted color palettes (slate, bronze, charcoal). We submit material samples and color chips for HOA review on every install." },
      { q: "Can I add solar to a metal roof later?", a: "Yes — standing seam is the best solar substrate available. S-5! clamps attach panels directly to seams with no roof penetrations, preserving the full roof warranty. Solar can be added years after install." },
      { q: "How do you handle steep Kentfield hillside lots?", a: "We use rigging, fall-arrest anchors, and crane delivery when needed. Our crews are trained for steep-slope work and we provide stamped fall-protection plans on lots over 4:12 pitch." },
      { q: "Do oak leaves damage metal roofs?", a: "No — smooth panels shed leaves and needles naturally, and there are no granule-trapping shingle gaps for tannin staining. Annual gutter cleaning is sufficient maintenance." },
    ],
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    tagline: "North Bay roofing professionals",
    region: "Sonoma County",
    intro:
      "After the 2017 Tubbs Fire, Santa Rosa homeowners learned the hard way that roof material matters. Class A fire-rated standing seam metal is the safest choice for North Bay WUI zones — non-combustible, ember-resistant, and built to outlast the next fire cycle.",
    longIntro:
      "Santa Rosa's post-Tubbs Fire rebuilds taught the North Bay a hard lesson: roof material is the single biggest survivability factor in a wildfire. Class A fire-rated standing seam metal is non-combustible, ember-resistant, and meets every CAL FIRE WUI requirement. Many post-2017 rebuilds in Fountaingrove and Coffey Park specified metal roofs, and insurance discounts of 5–13% are routine. Sonoma County permitting and rebuild-certificate documentation are part of our standard scope.",
    localFacts: [
      "Class A fire rating — non-combustible WUI-zone protection",
      "Sonoma County rebuild and reroof permit expertise",
      "Defensible-space-compliant installs for fire-aware homeowners",
    ],
    nearbyAreas: ["petaluma", "kentfield", "san-anselmo"],
    neighborhoodSlugs: ["fountaingrove", "skyhawk", "mcdonald-historic"],
    faqs: [
      { q: "Do metal roofs survive wildfires?", a: "They're the most fire-resistant roof option available. Class A standing seam is non-combustible — embers landing on metal cannot ignite the roof itself, the single largest fire-loss pathway in homes." },
      { q: "Will a metal roof lower my Santa Rosa fire insurance?", a: "Often yes — California FAIR Plan and most admitted carriers offer 5–13.8% discounts for Class A roofs in WUI zones. We provide manufacturer documentation for your carrier." },
      { q: "Do you do post-fire rebuild work in Santa Rosa?", a: "Yes — we've completed dozens of Tubbs and LNU Lightning Complex rebuilds. We coordinate with Sonoma County's rebuild permit pathway and provide all documentation insurers require." },
      { q: "How does metal pair with defensible space?", a: "Perfectly — a non-combustible roof is the centerpiece of CAL FIRE's defensible-space framework. Combined with cleared eaves, ember-screened vents, and maintained zone-1 vegetation, metal roofs dramatically reduce fire-loss risk." },
    ],
  },
  {
    slug: "alameda-county",
    name: "Alameda County",
    tagline: "Comprehensive roofing throughout Alameda County",
    region: "Alameda County",
    intro:
      "From Oakland warehouses to Fremont tech campuses to Berkeley craftsman homes, Alameda County is one of the most diverse roof markets in California. Our crews install across all of it — residential, commercial, and industrial — with one permit team that knows every jurisdiction.",
    longIntro:
      "Alameda County spans 14 cities and over 1.6 million residents — from Oakland's industrial corridors to Berkeley's craftsman blocks to Fremont's tech campuses. We install across every sector with one in-house permit team that knows the quirks of each jurisdiction: Oakland Building, Berkeley Planning, Fremont Building & Safety, and the County Public Works Agency. Bay-front exposure in Alameda and San Leandro calls for marine-grade PVDF; inland heat in Livermore and Pleasanton rewards cool-roof rated panels.",
    localFacts: [
      "Permits in Oakland, Berkeley, Fremont, Hayward, San Leandro and beyond",
      "Residential, commercial, and industrial — one contractor, all sectors",
      "Bay Area fab shop with free delivery countywide",
    ],
    nearbyAreas: ["san-francisco", "contra-costa-county", "santa-clara"],
    neighborhoodSlugs: ["piedmont-avenue", "claremont", "mission-san-jose"],
    faqs: [
      { q: "Which Alameda County cities do you serve?", a: "All of them — Oakland, Berkeley, Alameda, Fremont, Hayward, San Leandro, Livermore, Pleasanton, Dublin, Newark, Union City, Albany, Emeryville, and Piedmont, plus unincorporated county areas." },
      { q: "Do you handle Berkeley historic-district reviews?", a: "Yes — we submit Landmarks Preservation Commission packages for properties in Berkeley's designated historic districts and structures of merit. Copper and dark-bronze PVDF are the most commonly approved finishes." },
      { q: "Can you do large commercial roofs in Oakland?", a: "Yes — TPO membrane, mechanically-seamed standing seam, and R-Panel are our standard commercial systems for Oakland warehouses, retail, and industrial buildings up to 100,000+ sq ft." },
      { q: "Do you charge extra for travel within Alameda County?", a: "No — fabrication and delivery from our Bay Area shop is free anywhere in Alameda County. There are no travel surcharges within the East Bay." },
    ],
  },
  {
    slug: "contra-costa-county",
    name: "Contra Costa County",
    tagline: "Full-service roofing across Contra Costa County",
    region: "Contra Costa County",
    intro:
      "Contra Costa spans hot inland valleys, refinery corridors, and waterfront communities — each with its own roof challenges. We install Class A fire-rated standing seam in WUI zones, marine-grade PVDF along the shoreline, and high-uplift mechanical seam on industrial sites.",
    longIntro:
      "Contra Costa County stretches from Richmond's bayfront refineries through the inland valleys to Mt. Diablo's WUI communities — three completely different roof environments. Marine-grade PVDF and copper handle Richmond, Pinole, and Hercules salt exposure. Class A fire-rated standing seam is mandatory in Lafayette, Orinda, Moraga, and the Mt. Diablo flank. High-uplift mechanical-seam systems serve refinery and warehouse roofs along I-80 and the Carquinez corridor. Permits clear all 19 cities plus county jurisdictions through our in-house team.",
    localFacts: [
      "WUI-zone Class A fire-rated panels for inland communities",
      "Marine-grade finishes for shoreline cities like Richmond and Pinole",
      "Industrial uplift engineering for refinery and warehouse roofs",
    ],
    nearbyAreas: ["walnut-creek", "alameda-county", "tiburon"],
    neighborhoodSlugs: ["blackhawk", "alamo", "diablo"],
    faqs: [
      { q: "Which Contra Costa cities have wildfire WUI requirements?", a: "Most of central and east county — Lafayette, Orinda, Moraga, Walnut Creek, Alamo, Danville, San Ramon, Pleasant Hill, Martinez, and unincorporated areas around Mt. Diablo. Class A roofs are required in all CAL FIRE-mapped zones." },
      { q: "Do you serve all of Contra Costa County?", a: "Yes — all 19 cities (Antioch, Brentwood, Clayton, Concord, Danville, El Cerrito, Hercules, Lafayette, Martinez, Moraga, Oakley, Orinda, Pinole, Pittsburg, Pleasant Hill, Richmond, San Pablo, San Ramon, Walnut Creek) plus unincorporated areas." },
      { q: "Can you work on refineries and industrial sites?", a: "Yes — we hold the certifications needed for refinery-corridor work in Richmond, Rodeo, and Martinez. R-Panel, mechanical-seam standing seam, and TPO are our standard industrial systems." },
      { q: "Do Contra Costa permits take longer than other counties?", a: "Permitting varies by city — Walnut Creek and Lafayette typically clear in 1–2 weeks; unincorporated county can take 3–4 weeks. We submit electronically and track daily." },
    ],
  },
  {
    slug: "petaluma",
    name: "Petaluma",
    tagline: "Quality roofing in Sonoma County",
    region: "Sonoma County",
    intro:
      "Petaluma's mix of historic downtown, agricultural outbuildings, and new residential tracts means we roof everything from heritage Victorians to ag barns to subdivisions. Standing seam metal is the workhorse choice — 50+ year lifespan, low maintenance, and looks great on any of them.",
    longIntro:
      "Petaluma's Iron Front district holds one of the largest concentrations of cast-iron-front Victorian commercial buildings west of the Mississippi — and the residential blocks around them carry that same 1880s–1910s heritage. We install copper, lead-coated copper, and custom PVDF standing seam appropriate for Petaluma Heritage Preservation Committee review. West-side ag properties and east-side production tracts round out a diverse portfolio. Sonoma County and City of Petaluma permitting is routine.",
    localFacts: [
      "Heritage-district sensitive installs for downtown Petaluma",
      "Ag-building expertise — barns, equipment sheds, wineries",
      "Sonoma County permit and inspection familiarity",
    ],
    nearbyAreas: ["santa-rosa", "kentfield", "san-anselmo"],
    neighborhoodSlugs: ["west-side", "mcnear-hill", "oakhill-brewster"],
    faqs: [
      { q: "Do you handle Petaluma Heritage Preservation reviews?", a: "Yes — we prepare and submit HPC packages for properties in Petaluma's historic districts (Oakhill-Brewster, A Street, etc.). Copper, lead-coated copper, and dark-bronze PVDF are the most commonly approved metals." },
      { q: "Can you roof barns and ag buildings in Petaluma?", a: "Yes — R-Panel and exposed-fastener standing seam are workhorses for Sonoma County ag properties. We install on barns, equipment sheds, and winery production buildings throughout Petaluma's west-side ag corridor." },
      { q: "What's the right roof for a Petaluma Victorian?", a: "Copper standing seam, lead-coated copper, or dark-bronze PVDF. All three are period-appropriate and HPC-approvable. Copper develops a green patina over 15–20 years that complements Victorian woodwork beautifully." },
      { q: "How fast can you pull a Petaluma permit?", a: "Most residential reroof permits clear City of Petaluma Building Division within 1–2 weeks. Historic-district properties add 2–4 weeks for HPC review." },
    ],
  },
  {
    slug: "los-gatos",
    name: "Los Gatos",
    tagline: "High-end roofing solutions",
    region: "Bay Area",
    intro:
      "Los Gatos homes — from downtown Victorians to hillside contemporaries — deserve roofing that matches the address. We install architectural standing seam, copper, and zinc with the precision custom builders and architects expect on luxury Silicon Valley properties.",
    longIntro:
      "Los Gatos is one of Silicon Valley's most architecturally ambitious markets — from downtown's 1890s Victorians to mid-century Eichlers to contemporary architect-designed estates in the hills above town. We collaborate directly with architects, custom builders, and interior designers on premium installs: solid copper, zinc, dark PVDF, and integrated solar-ready standing seam. Town of Los Gatos and Santa Clara County permits are routine, and we handle HOA design-review submittals for hillside developments.",
    localFacts: [
      "Architect- and designer-collaborative installs",
      "Copper, zinc, and custom PVDF for signature rooflines",
      "Los Gatos and Santa Clara County permit + HOA handling",
    ],
    nearbyAreas: ["santa-clara", "santa-cruz", "san-francisco"],
    neighborhoodSlugs: ["almaden-valley", "monte-sereno", "los-gatos-hills"],
    faqs: [
      { q: "Do you work directly with architects in Los Gatos?", a: "Yes — we collaborate on detailing, panel profiles, color selection, and seam orientation directly with the project architect and builder. Shop drawings are provided for sign-off before fabrication." },
      { q: "What's the cost premium for copper or zinc vs steel?", a: "Solid copper typically runs 2–3x the cost of PVDF-coated steel; zinc is 1.5–2x. Both carry 75+ year service lives and develop signature patinas over time." },
      { q: "Can you handle Los Gatos hillside HOA reviews?", a: "Yes — most Los Gatos hillside HOAs require design review for roofing changes. We submit material samples, color chips, and elevation drawings on every project." },
      { q: "Do you do solar-ready standing seam in Los Gatos?", a: "Yes — clamp-on solar via S-5! attaches PV directly to the seam with zero roof penetrations and preserves the manufacturer warranty. We coordinate with your solar installer of choice." },
    ],
  },
];

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((c) => c.slug === slug);
