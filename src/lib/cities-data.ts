export interface CityData {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  intro: string;
  localFacts: string[];
  nearbyAreas: string[];
}

export const cities: CityData[] = [
  {
    slug: "san-francisco",
    name: "San Francisco",
    tagline: "Premium metal roofing in the heart of the Bay Area",
    region: "Bay Area",
    intro:
      "San Francisco's coastal fog, salt-laden air, and Victorian rooflines demand a roof system that resists corrosion and complements historic architecture. PVDF-coated standing seam metal is purpose-built for this microclimate — it shrugs off marine air, lasts 50+ years, and meets the city's strict permit and historic-district guidelines.",
    localFacts: [
      "Coastal fog & salt air — PVDF Kynar finishes engineered for marine corrosion",
      "Earthquake-rated installs to current SF seismic and wind-uplift codes",
      "Strict SF DBI permit timelines we handle end-to-end",
    ],
    nearbyAreas: ["alameda-county", "tiburon", "santa-clara"],
  },
  {
    slug: "santa-clara",
    name: "Santa Clara",
    tagline: "Residential and commercial roofing solutions",
    region: "Bay Area",
    intro:
      "Santa Clara's mix of tech campuses, mid-century homes, and new commercial builds means we install everything from architectural standing seam to high-uplift mechanical-seam systems. Our crews know the city's Title 24 cool-roof requirements and pull permits weekly.",
    localFacts: [
      "Title 24 cool-roof rated panels qualify for PG&E rebates",
      "Tech-campus phased installs that keep operations running",
      "Same-day Santa Clara permit pulls for most residential reroofs",
    ],
    nearbyAreas: ["san-francisco", "alameda-county", "los-gatos"],
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    tagline: "Expert roofing services in Contra Costa County",
    region: "Contra Costa County",
    intro:
      "Walnut Creek's hot, dry summers and wildfire exposure put a premium on Class A fire-rated roofs. Standing seam metal carries the highest fire rating available and reflects up to 70% of solar heat — cutting AC bills through the long East Bay summer.",
    localFacts: [
      "Class A fire rating — the highest available for WUI zones",
      "Cool-roof panels reduce summer cooling costs 25–40%",
      "Contra Costa County permit experience on every install",
    ],
    nearbyAreas: ["contra-costa-county", "alameda-county", "tiburon"],
  },
  {
    slug: "tiburon",
    name: "Tiburon",
    tagline: "Luxury roofing for Marin County homes",
    region: "Marin County",
    intro:
      "Tiburon's waterfront estates and hillside homes demand architectural metal roofing that holds up to bay winds and salt spray while elevating curb appeal. We specialize in custom-color PVDF standing seam, copper accents, and zinc panels for luxury Marin properties.",
    localFacts: [
      "Custom PVDF colors and copper/zinc options for high-end aesthetics",
      "Wind-uplift engineering for exposed Tiburon ridgelines",
      "Marin County design-review submittals handled in-house",
    ],
    nearbyAreas: ["kentfield", "san-anselmo", "san-francisco"],
  },
  {
    slug: "san-anselmo",
    name: "San Anselmo",
    tagline: "Custom metal roofing installations",
    region: "Marin County",
    intro:
      "From craftsman bungalows to modern hillside builds, San Anselmo homeowners want roofs that look as good as they perform. Our custom-fabricated standing seam panels are roll-formed to your exact roof length on-site — no seams across the run, no leak points.",
    localFacts: [
      "On-site roll-forming for seamless single-length panels",
      "Wildfire-zone Class A ignition resistance",
      "San Anselmo + Ross Valley permit familiarity",
    ],
    nearbyAreas: ["kentfield", "tiburon", "santa-rosa"],
  },
  {
    slug: "santa-cruz",
    name: "Santa Cruz",
    tagline: "Coastal roofing specialists",
    region: "Bay Area",
    intro:
      "Santa Cruz roofs face salt fog, heavy winter rain, and intense summer UV. Our marine-grade PVDF standing seam systems are engineered for coastal exposure — finishes that won't chalk or fade and seam profiles that shed Pacific storms without a leak.",
    localFacts: [
      "Marine-grade Kynar 500 finishes for coastal corrosion resistance",
      "UL 580 Class 90 wind uplift for winter storm season",
      "Santa Cruz County coastal-zone permit handling",
    ],
    nearbyAreas: ["los-gatos", "santa-clara", "modesto"],
  },
  {
    slug: "modesto",
    name: "Modesto",
    tagline: "Central Valley roofing experts",
    region: "Central Valley",
    intro:
      "Modesto summers regularly hit 100°F — a brutal test for any roof. Cool-roof rated standing seam metal reflects radiant heat back to the sky, dropping attic temps by up to 50°F and cutting AC bills through the Valley's long cooling season.",
    localFacts: [
      "Cool-roof panels that beat Central Valley heat",
      "Stanislaus County permit + inspection experience",
      "Free delivery from our Bay Area fab shop to Modesto job sites",
    ],
    nearbyAreas: ["santa-cruz", "walnut-creek", "santa-clara"],
  },
  {
    slug: "kentfield",
    name: "Kentfield",
    tagline: "Premium roofing in Marin County",
    region: "Marin County",
    intro:
      "Kentfield's mature oaks, custom estates, and steep hillside lots call for precision roofing — and architectural metal that complements high-end design. We handle every square foot of detail, from custom flashing around chimneys to integrated solar-ready panels.",
    localFacts: [
      "Solar-integrated standing seam — clamp-on, no roof penetrations",
      "Custom flashing fab in our Bay Area shop",
      "Marin County design-review and HOA submittals included",
    ],
    nearbyAreas: ["tiburon", "san-anselmo", "santa-rosa"],
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    tagline: "North Bay roofing professionals",
    region: "Sonoma County",
    intro:
      "After the 2017 Tubbs Fire, Santa Rosa homeowners learned the hard way that roof material matters. Class A fire-rated standing seam metal is the safest choice for North Bay WUI zones — non-combustible, ember-resistant, and built to outlast the next fire cycle.",
    localFacts: [
      "Class A fire rating — non-combustible WUI-zone protection",
      "Sonoma County rebuild and reroof permit expertise",
      "Defensible-space-compliant installs for fire-aware homeowners",
    ],
    nearbyAreas: ["petaluma", "kentfield", "san-anselmo"],
  },
  {
    slug: "alameda-county",
    name: "Alameda County",
    tagline: "Comprehensive roofing throughout Alameda County",
    region: "Alameda County",
    intro:
      "From Oakland warehouses to Fremont tech campuses to Berkeley craftsman homes, Alameda County is one of the most diverse roof markets in California. Our crews install across all of it — residential, commercial, and industrial — with one permit team that knows every jurisdiction.",
    localFacts: [
      "Permits in Oakland, Berkeley, Fremont, Hayward, San Leandro and beyond",
      "Residential, commercial, and industrial — one contractor, all sectors",
      "Bay Area fab shop with free delivery countywide",
    ],
    nearbyAreas: ["san-francisco", "contra-costa-county", "santa-clara"],
  },
  {
    slug: "contra-costa-county",
    name: "Contra Costa County",
    tagline: "Full-service roofing across Contra Costa County",
    region: "Contra Costa County",
    intro:
      "Contra Costa spans hot inland valleys, refinery corridors, and waterfront communities — each with its own roof challenges. We install Class A fire-rated standing seam in WUI zones, marine-grade PVDF along the shoreline, and high-uplift mechanical seam on industrial sites.",
    localFacts: [
      "WUI-zone Class A fire-rated panels for inland communities",
      "Marine-grade finishes for shoreline cities like Richmond and Pinole",
      "Industrial uplift engineering for refinery and warehouse roofs",
    ],
    nearbyAreas: ["walnut-creek", "alameda-county", "tiburon"],
  },
  {
    slug: "petaluma",
    name: "Petaluma",
    tagline: "Quality roofing in Sonoma County",
    region: "Sonoma County",
    intro:
      "Petaluma's mix of historic downtown, agricultural outbuildings, and new residential tracts means we roof everything from heritage Victorians to ag barns to subdivisions. Standing seam metal is the workhorse choice — 50+ year lifespan, low maintenance, and looks great on any of them.",
    localFacts: [
      "Heritage-district sensitive installs for downtown Petaluma",
      "Ag-building expertise — barns, equipment sheds, wineries",
      "Sonoma County permit and inspection familiarity",
    ],
    nearbyAreas: ["santa-rosa", "kentfield", "san-anselmo"],
  },
  {
    slug: "los-gatos",
    name: "Los Gatos",
    tagline: "High-end roofing solutions",
    region: "Bay Area",
    intro:
      "Los Gatos homes — from downtown Victorians to hillside contemporaries — deserve roofing that matches the address. We install architectural standing seam, copper, and zinc with the precision custom builders and architects expect on luxury Silicon Valley properties.",
    localFacts: [
      "Architect- and designer-collaborative installs",
      "Copper, zinc, and custom PVDF for signature rooflines",
      "Los Gatos and Santa Clara County permit + HOA handling",
    ],
    nearbyAreas: ["santa-clara", "santa-cruz", "san-francisco"],
  },
];

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((c) => c.slug === slug);
