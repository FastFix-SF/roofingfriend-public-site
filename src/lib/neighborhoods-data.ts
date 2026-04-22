export interface NeighborhoodFaq {
  q: string;
  a: string;
}

export interface NeighborhoodData {
  slug: string;
  citySlug: string;
  name: string;
  tagline: string;
  architectureEra: string;
  notableHomes: string;
  intro: string;
  whyMetalWorks: string;
  premiumMaterials: string[];
  faqs: NeighborhoodFaq[];
}

export const neighborhoods: NeighborhoodData[] = [
  // ============ SAN FRANCISCO ============
  {
    slug: "pacific-heights",
    citySlug: "san-francisco",
    name: "Pacific Heights",
    tagline: "Premium metal roofing for San Francisco's most prestigious address",
    architectureEra: "Victorian, Edwardian & Beaux-Arts mansions, 1880s–1920s",
    notableHomes: "Spreckels Mansion, Haas-Lilienthal House (NRHP), Bourn Mansion, Whittier Mansion",
    intro:
      "Pacific Heights holds one of the highest concentrations of landmarked Victorian and Edwardian mansions in California. Roof systems here have to satisfy SF Planning Department historic review, neighborhood architectural conscience, and the brutal realities of fog-belt salt exposure on the Bay-facing blocks.",
    whyMetalWorks:
      "Copper standing seam and lead-coated copper are period-correct for the neighborhood's 1880s–1910s mansions, ageing into a green patina that complements Italianate, Queen Anne, and Beaux-Arts detailing. PVDF Kynar 500 in slate gray and dark bronze handles non-landmarked Edwardian and 1920s revival homes. All three resist the marine salt fog that rolls in off the Golden Gate.",
    premiumMaterials: [
      "Solid copper standing seam (16–20 oz)",
      "Lead-coated copper for landmark properties",
      "Custom PVDF Kynar 500 in heritage colors",
      "Custom-fabricated turret and dormer flashing",
    ],
    faqs: [
      { q: "Will SF Planning approve a metal roof in Pacific Heights?", a: "For non-landmarked properties: yes, with standard permit review. For landmarked or contributing structures, copper, lead-coated copper, and historically-appropriate dark PVDF colors are typically approvable through Planning Department historic review. We prepare the documentation." },
      { q: "What does a copper roof cost on a Pacific Heights mansion?", a: "Solid copper standing seam typically runs $40–$60 per square foot installed for complex Victorian rooflines with turrets, dormers, and bay windows. We provide line-item proposals after a free site visit." },
      { q: "Can you preserve Victorian decorative ridge caps and finials?", a: "Yes — we fabricate custom copper or zinc ridge caps, cresting, and finials to match historic precedent. Original details can often be saved and reset on the new substrate." },
      { q: "How long do copper roofs last in Pacific Heights?", a: "75–100+ years on properly installed solid copper. The patina is ornamental, not corrosive — copper roofs from the 1890s are still in service across the neighborhood." },
    ],
  },
  {
    slug: "sea-cliff",
    citySlug: "san-francisco",
    name: "Sea Cliff",
    tagline: "Marine-grade metal roofing for SF's coastal estate enclave",
    architectureEra: "Mediterranean Revival, Spanish Colonial & Modernist estates, 1920s–present",
    notableHomes: "Robin Williams Estate, Sharon Stone Estate, AIA-honored bluff-top contemporaries",
    intro:
      "Sea Cliff sits on Pacific bluffs at the entrance to the Golden Gate — full marine exposure, near-constant salt spray, and some of the highest-value real estate in San Francisco. Roof systems here have to perform like marine equipment.",
    whyMetalWorks:
      "PVDF Kynar 500 over G90 galvanized steel and solid copper are the only finishes we recommend for Sea Cliff's direct ocean exposure. Standing seam profiles in dark bronze, slate, and weathered copper complement the neighborhood's Mediterranean Revival and contemporary architecture without competing with the views.",
    premiumMaterials: [
      "PVDF Kynar 500 over G90 galvanized steel",
      "Solid copper for Mediterranean and Spanish Colonial homes",
      "Zinc panels for contemporary AIA-grade residences",
      "Marine-grade stainless flashing and fasteners",
    ],
    faqs: [
      { q: "Why does Sea Cliff need marine-grade roofing?", a: "Direct Pacific salt spray attacks bare aluminum, polyester paint, and standard galvanized steel within 5–10 years. PVDF Kynar 500 and solid copper carry 30–50 year marine warranties and are engineered for this exposure class." },
      { q: "Do bluff-top homes need wind-uplift engineering?", a: "Yes — exposed Sea Cliff lots see design winds well above SF's baseline. We provide stamped uplift letters and use mechanical-seam profiles rated for 150+ mph." },
      { q: "Can you match the look of an existing tile or slate roof?", a: "Yes — metal shake, metal slate, and dark-bronze flat-pan standing seam closely emulate traditional materials while delivering metal's marine performance. We provide on-site samples." },
      { q: "How disruptive is a Sea Cliff reroof?", a: "Typical 5–8 weeks for a Sea Cliff estate including tear-off, sheathing inspection, underlayment, and panel install. We coordinate site access through narrow Sea Cliff streets and protect mature landscaping throughout." },
    ],
  },
  {
    slug: "presidio-heights",
    citySlug: "san-francisco",
    name: "Presidio Heights",
    tagline: "Architect-grade metal roofing for SF's quiet luxury enclave",
    architectureEra: "Edwardian, Period Revival & Tudor mansions, 1900s–1930s",
    notableHomes: "Roos House (Maybeck, NRHP), Swedenborgian-era Period Revival estates",
    intro:
      "Presidio Heights blends old-money discretion with some of San Francisco's most architecturally significant homes — Bernard Maybeck Tudors, Willis Polk Period Revivals, and Julia Morgan Mediterranean estates. Roof work here is judged by architects, not just inspectors.",
    whyMetalWorks:
      "Lead-coated copper, dark slate-look standing seam, and copper accents at dormers and bay windows are the right answer for Tudor, Period Revival, and Mediterranean mansions. The neighborhood's mature street trees and steep pitches reward roofs that shed debris and require zero seasonal maintenance.",
    premiumMaterials: [
      "Lead-coated copper for Tudor and English Revival homes",
      "Slate-look standing seam in matte charcoal",
      "Solid copper bay window and dormer flashing",
      "Custom-color PVDF in historic palettes",
    ],
    faqs: [
      { q: "Do you collaborate with architects on Presidio Heights restorations?", a: "Routinely — most Presidio Heights work is architect-led, and we provide shop drawings, panel profile samples, and finish boards for sign-off before fabrication." },
      { q: "What's the right metal for a Tudor revival home?", a: "Lead-coated copper or matte-charcoal PVDF with copper or zinc accents. Both finishes age into the muted, weathered palette characteristic of authentic English Tudor roofs." },
      { q: "Can metal pair with existing tile or slate accents?", a: "Yes — we frequently install standing seam on main field with original or salvaged slate and tile preserved on prominent visible elevations. Custom transitions and flashing are our specialty." },
      { q: "Are Presidio Heights permits historic-reviewed?", a: "Many properties are. Non-landmarked homes typically clear standard SF DBI review; landmarked structures add Planning Department historic review. We handle both." },
    ],
  },

  // ============ SANTA CLARA ============
  {
    slug: "old-quad",
    citySlug: "santa-clara",
    name: "Old Quad",
    tagline: "Heritage-grade metal roofing for Santa Clara's historic core",
    architectureEra: "Victorian, Craftsman & Mission Revival, 1880s–1920s",
    notableHomes: "Berryessa Adobe (CA Historical Landmark), Santa Clara University Mission-era buildings",
    intro:
      "The Old Quad surrounds Santa Clara University and holds the city's deepest concentration of pre-1930 architecture — Victorians, Craftsmen, and Mission Revival homes that anchor the city's character.",
    whyMetalWorks:
      "Copper accents on Victorians, terracotta-look metal tile on Mission Revival homes, and dark-bronze PVDF standing seam on Craftsman bungalows give Old Quad homeowners period-appropriate aesthetics with 50+ year lifespans and no maintenance.",
    premiumMaterials: [
      "Metal tile in terracotta finish (Mission Revival-appropriate)",
      "Copper standing seam on Victorians",
      "Dark-bronze PVDF on Craftsman homes",
      "Custom flashing for exposed-rafter eaves",
    ],
    faqs: [
      { q: "Does Santa Clara have historic-district review for the Old Quad?", a: "Yes — properties on the Santa Clara Historic Resources Inventory require Historical and Landmarks Commission review. We prepare and submit HLC packages." },
      { q: "Can you do metal tile that looks like clay?", a: "Yes — pressed-steel metal tile in terracotta or aged-clay finishes is visually indistinguishable from real tile at curb distance and weighs 75% less." },
      { q: "Will metal damage Craftsman exposed-rafter detailing?", a: "No — we fabricate custom drip edge and trim that preserves visible rafter tails, decorative ridge boards, and shingle-style transitions." },
      { q: "How does Santa Clara permitting work for Old Quad reroofs?", a: "Non-historic properties typically clear in 5–10 days. Historic-listed properties add 4–8 weeks for HLC review." },
    ],
  },
  {
    slug: "rivermark",
    citySlug: "santa-clara",
    name: "Rivermark",
    tagline: "Architectural metal for Santa Clara's master-planned showcase",
    architectureEra: "Contemporary & Mediterranean Transitional, 2000s–present",
    notableHomes: "AIA-recognized mixed-use planning, premium contemporary single-family",
    intro:
      "Rivermark is Santa Clara's flagship master-planned community — contemporary single-family homes, walkable design, and a homeowner base that expects premium materials and modern aesthetics.",
    whyMetalWorks:
      "Flat-pan and narrow-batten standing seam in matte dark colors complement Rivermark's contemporary architecture. Cool-roof rated PVDF panels qualify for PG&E rebates and meet HOA aesthetic guidelines.",
    premiumMaterials: [
      "Flat-pan standing seam in matte black or dark bronze",
      "Cool-roof rated PVDF for PG&E rebate qualification",
      "Solar-ready S-5! clamp-on integration",
      "Concealed-fastener architectural panels",
    ],
    faqs: [
      { q: "Will Rivermark HOA approve a metal roof?", a: "Yes — most metal roofs in approved muted color palettes (matte black, dark bronze, charcoal) are HOA-compliant. We submit color chips and material samples for review." },
      { q: "Do Rivermark homes qualify for PG&E cool-roof rebates?", a: "Yes — Title 24 cool-roof rated PVDF panels meeting CRRC reflectance thresholds qualify for PG&E energy-efficiency rebates." },
      { q: "Can solar be added to a Rivermark metal roof?", a: "Yes — standing seam is the best PV substrate available. S-5! clamps attach panels directly to the seam with zero penetrations." },
      { q: "How much does a Rivermark-style metal roof cost?", a: "Architectural standing seam typically runs $18–$28 per square foot installed depending on roof complexity and panel selection. Free quotes after a site visit." },
    ],
  },
  {
    slug: "killarney-farms",
    citySlug: "santa-clara",
    name: "Killarney Farms",
    tagline: "Premium metal roofing for Santa Clara's mid-century estate enclave",
    architectureEra: "Mid-Century Ranch & Eichler-influenced, 1950s–1970s",
    notableHomes: "Mid-century estate homes on oversized lots, Eichler-style modernist residences",
    intro:
      "Killarney Farms is one of Santa Clara's quietest, most established neighborhoods — large mid-century ranch homes on oversized lots, many with custom architectural pedigrees.",
    whyMetalWorks:
      "Flat-pan standing seam in dark bronze or matte charcoal complements the long horizontal lines of mid-century ranch and Eichler architecture. Cool-roof performance is essential under Santa Clara summer sun.",
    premiumMaterials: [
      "Flat-pan standing seam in matte dark colors",
      "Cool-roof rated PVDF for energy savings",
      "Low-profile concealed-fastener panels",
      "Custom flashing for low-slope mid-century rooflines",
    ],
    faqs: [
      { q: "What's the right roof for an Eichler-style home?", a: "Flat-pan standing seam in dark bronze, matte black, or charcoal — the clean horizontal lines complement Eichler's modernist aesthetic perfectly. We have extensive Eichler-roofing experience." },
      { q: "Do mid-century low-slope roofs work with metal?", a: "Yes — mechanical-seam standing seam works down to 1/4:12 pitch with appropriate underlayment. For pitches below that, TPO membrane is the better answer." },
      { q: "How long do Killarney Farms-style metal roofs last?", a: "50+ years on PVDF-coated steel — substantially longer than the original tar-and-gravel or built-up roofs many of these homes were built with." },
      { q: "Can metal roofs handle large mid-century overhangs?", a: "Yes — we fabricate custom drip edge, fascia trim, and concealed gutter integration that preserves the broad eaves characteristic of mid-century design." },
    ],
  },

  // ============ WALNUT CREEK ============
  {
    slug: "northgate",
    citySlug: "walnut-creek",
    name: "Northgate",
    tagline: "Class A fire-rated metal for Walnut Creek's premier hillside enclave",
    architectureEra: "Custom Contemporary & Mediterranean Estates, 1980s–present",
    notableHomes: "Custom architect-designed hillside estates, Mediterranean Revival mansions",
    intro:
      "Northgate climbs the Mt. Diablo flank above Walnut Creek — large custom estates, designer architecture, and full WUI fire exposure. Roof choice here is a serious safety decision.",
    whyMetalWorks:
      "Class A fire-rated standing seam metal is non-combustible and ember-resistant — the highest fire rating available. Combined with cool-roof PVDF, Northgate homeowners get top-tier wildfire protection and 25–40% summer cooling savings.",
    premiumMaterials: [
      "Class A fire-rated PVDF standing seam",
      "Cool-roof reflective panels for AC savings",
      "Solid copper accents for Mediterranean estates",
      "Ember-resistant ridge and eave detailing",
    ],
    faqs: [
      { q: "Is Northgate in a CAL FIRE WUI zone?", a: "Yes — most of Northgate falls within mapped CAL FIRE WUI / Very High Fire Hazard Severity Zones. Class A roofs are required for new construction and most reroofs." },
      { q: "Will my insurance premium drop with a Class A metal roof?", a: "Often substantially — California FAIR Plan and admitted carriers offer 5–13.8% discounts for Class A roofs in WUI zones. We provide manufacturer documentation for your carrier." },
      { q: "How does metal compare to clay tile for fire protection?", a: "Both are Class A. Metal has the additional advantage of being lighter (no seismic load issues), easier to install on complex hillside rooflines, and impact-resistant against falling debris and embers." },
      { q: "Can you handle Northgate's steep hillside lots?", a: "Yes — we use rigging, fall-arrest anchors, and crane delivery as needed. Stamped fall-protection plans are standard on lots over 4:12 pitch." },
    ],
  },
  {
    slug: "saranap",
    citySlug: "walnut-creek",
    name: "Saranap",
    tagline: "Architectural metal roofing for Walnut Creek's heritage neighborhood",
    architectureEra: "Tudor Revival, Spanish Colonial & Mid-Century Custom, 1920s–1960s",
    notableHomes: "Period Revival custom homes on tree-lined streets",
    intro:
      "Saranap is one of Walnut Creek's oldest established neighborhoods — Tudor Revivals, Spanish Colonials, and mid-century customs on mature, tree-canopied streets.",
    whyMetalWorks:
      "Lead-coated copper, dark-bronze PVDF, and metal tile in terracotta finish offer period-correct aesthetics for Saranap's revival-style homes while delivering Class A fire protection — important even outside the highest WUI zones.",
    premiumMaterials: [
      "Lead-coated copper for Tudor revivals",
      "Metal tile in terracotta finish for Spanish Colonials",
      "Matte-charcoal PVDF for mid-century customs",
      "Custom decorative ridge caps and finials",
    ],
    faqs: [
      { q: "What's the right metal roof for a Saranap Tudor?", a: "Lead-coated copper or matte-charcoal PVDF in heavy-batten profile. Both age into the weathered palette characteristic of authentic English Tudor roofing." },
      { q: "Will a metal roof handle Saranap's mature oak debris?", a: "Yes — smooth panel surfaces shed leaves and acorns naturally with no granule-trapping shingle gaps. Annual gutter cleaning is sufficient maintenance." },
      { q: "Can you preserve original Spanish Colonial tile aesthetics?", a: "Yes — pressed-steel metal tile in terracotta finish is visually indistinguishable from clay at curb distance and weighs 75% less, eliminating seismic load concerns." },
      { q: "How long do Saranap permits take?", a: "Most Walnut Creek residential reroof permits clear in 1–2 weeks. We submit electronically and track approval daily." },
    ],
  },
  {
    slug: "rudgear-estates",
    citySlug: "walnut-creek",
    name: "Rudgear Estates",
    tagline: "Premium fire-resistant roofing for Walnut Creek's estate hills",
    architectureEra: "Custom Contemporary, Mediterranean & Ranch Estates, 1960s–present",
    notableHomes: "Custom architect-designed estates on oak-shaded estate lots",
    intro:
      "Rudgear Estates sits in Walnut Creek's southern hills — large custom estate homes on multi-acre oak-shaded lots, full WUI fire exposure, and significant insurance stakes.",
    whyMetalWorks:
      "Class A fire-rated standing seam combined with ember-resistant detailing addresses Rudgear's wildfire exposure head-on. Solid copper, zinc, and custom PVDF colors deliver the architectural quality estate homeowners expect.",
    premiumMaterials: [
      "Class A standing seam in custom PVDF colors",
      "Solid copper for Mediterranean estate accents",
      "Zinc panels for contemporary architect-designed homes",
      "Ember-screened ridge venting and eave detailing",
    ],
    faqs: [
      { q: "What does a Class A metal roof cost on a Rudgear estate?", a: "Architectural PVDF standing seam typically runs $20–$32 per square foot installed; solid copper $40–$60. Estate-scale projects with complex rooflines vary — we provide line-item proposals after a free site visit." },
      { q: "Are there Walnut Creek fire-hardening rebates?", a: "California's Safer From Wildfires program and some local utilities offer fire-hardening incentives. We help identify and document available programs at proposal time." },
      { q: "Can you preserve mature oaks during a Rudgear reroof?", a: "Yes — we coordinate with arborists when needed, use tree-protection fencing and ground protection mats, and rig material delivery to minimize canopy impact." },
      { q: "How long does an estate-scale reroof take?", a: "Typically 4–8 weeks for a 5,000+ sq ft estate including tear-off, sheathing inspection, underlayment, and panel install. We provide weekly project updates." },
    ],
  },

  // ============ TIBURON ============
  {
    slug: "belveron",
    citySlug: "tiburon",
    name: "Belveron",
    tagline: "Marine-grade metal roofing for Tiburon's waterfront enclave",
    architectureEra: "Contemporary, Mediterranean & Custom Waterfront, 1970s–present",
    notableHomes: "Custom waterfront and bay-view contemporaries",
    intro:
      "Belveron faces Richardson Bay with full marine exposure and some of Marin's most architecturally ambitious waterfront homes. Roof systems here have to perform like marine equipment while complementing high-design architecture.",
    whyMetalWorks:
      "PVDF Kynar 500, solid copper, and zinc all carry marine-grade warranties and complement Belveron's contemporary and Mediterranean architecture. Standing seam in matte dark colors is the most-specified profile.",
    premiumMaterials: [
      "PVDF Kynar 500 over G90 galvanized steel",
      "Solid copper standing seam",
      "Zinc panels in pre-weathered finish",
      "Marine-grade stainless flashing and fasteners",
    ],
    faqs: [
      { q: "Why does Belveron need marine-grade roofing?", a: "Direct Richardson Bay salt exposure attacks bare aluminum and standard galvanized steel. PVDF Kynar 500 and solid copper are rated for direct marine exposure with 30–50 year warranties." },
      { q: "Will Town of Tiburon design review approve metal?", a: "Yes — DRB regularly approves PVDF, copper, and zinc in muted heritage colors. We submit material samples and color chips with every package." },
      { q: "How does waterfront wind-uplift compare to inland?", a: "Belveron and Paradise Cay see design winds 20–30% higher than inland Marin. We provide stamped uplift letters and use mechanical-seam profiles rated for the exposure." },
      { q: "Can you do solar on a Belveron metal roof?", a: "Yes — S-5! clamp-on PV attaches directly to the standing seam with zero roof penetrations. We coordinate with your solar installer." },
    ],
  },
  {
    slug: "paradise-cay",
    citySlug: "tiburon",
    name: "Paradise Cay",
    tagline: "Premium metal roofing for Tiburon's exclusive waterfront community",
    architectureEra: "Custom Contemporary Waterfront, 1960s–present",
    notableHomes: "Private-dock custom homes, architect-designed bay-front estates",
    intro:
      "Paradise Cay is one of the Bay Area's most exclusive private waterfront communities — custom homes with private docks, full marine exposure, and architectural pedigrees that demand premium roof systems.",
    whyMetalWorks:
      "Solid copper, pre-weathered zinc, and PVDF Kynar 500 are the only finishes we recommend for Paradise Cay's direct salt-water exposure. All three carry marine warranties and complement the neighborhood's contemporary architecture.",
    premiumMaterials: [
      "Pre-weathered zinc standing seam",
      "Solid copper for warm contemporary homes",
      "PVDF Kynar 500 in custom architectural colors",
      "Marine-grade stainless throughout",
    ],
    faqs: [
      { q: "What's the lifespan of a Paradise Cay metal roof?", a: "50+ years on PVDF-coated steel, 75+ years on solid copper or zinc. Marine-grade stainless flashing carries the same service life." },
      { q: "Can you handle Paradise Cay's narrow water-access streets?", a: "Yes — we coordinate material delivery, on-site fabrication, and waste removal around HOA traffic and access constraints." },
      { q: "How do you protect docks and waterfront landscaping?", a: "Tarping, ground protection mats, and sequenced staging keep dock structures and shoreline plantings undamaged. We carry full marine-property liability coverage." },
      { q: "Does Paradise Cay HOA require design review for roofing?", a: "Yes — most exterior changes require HOA design review. We prepare and submit complete packages with material samples and color chips." },
    ],
  },
  {
    slug: "old-tiburon",
    citySlug: "tiburon",
    name: "Old Tiburon",
    tagline: "Heritage metal roofing for Tiburon's downtown character district",
    architectureEra: "Victorian, Edwardian Cottage & Maritime Heritage, 1880s–1920s",
    notableHomes: "Lyford House (NRHP), Old St. Hilary's Landmark, Ark Row floating-home heritage",
    intro:
      "Old Tiburon — including Ark Row and the historic downtown — preserves Tiburon's 19th-century maritime character with Victorian cottages, repurposed floating homes (arks), and a strict heritage-conscious aesthetic.",
    whyMetalWorks:
      "Solid copper, lead-coated copper, and dark-bronze PVDF in narrow-batten standing seam are period-appropriate for Old Tiburon's Victorian and maritime architecture. Town of Tiburon design review is part of every project.",
    premiumMaterials: [
      "Solid copper standing seam (developing patina complements Victorian woodwork)",
      "Lead-coated copper for landmark properties",
      "Narrow-batten dark-bronze PVDF",
      "Custom-fabricated dormer and turret flashing",
    ],
    faqs: [
      { q: "Will Tiburon DRB approve metal in Old Tiburon?", a: "Yes — copper, lead-coated copper, and dark-bronze PVDF in narrow-batten profile are routinely approved for Old Tiburon and Ark Row properties. We prepare full DRB packages." },
      { q: "Can you work on Ark Row floating homes?", a: "Yes — we have experience with floating residential structures. Weight-distribution planning and dock-access logistics are part of every project scope." },
      { q: "Does copper develop a green patina in Old Tiburon's climate?", a: "Yes — Tiburon's salt air actually accelerates patina development versus inland sites. Expect a green patina to fully develop within 10–15 years." },
      { q: "How disruptive is downtown Tiburon work?", a: "We coordinate with Town of Tiburon for street-occupancy permits when needed and minimize Main Street impact through sequenced material delivery." },
    ],
  },

  // ============ SAN ANSELMO ============
  {
    slug: "sleepy-hollow",
    citySlug: "san-anselmo",
    name: "Sleepy Hollow",
    tagline: "Class A fire-rated metal roofing for San Anselmo's premier hillside enclave",
    architectureEra: "Custom Ranch, Mediterranean & Contemporary Estates, 1950s–present",
    notableHomes: "Custom estate homes on multi-acre oak-shaded lots",
    intro:
      "Sleepy Hollow climbs into the hills above San Anselmo — large estate homes on multi-acre lots, full WUI fire exposure, and a homeowner base that takes wildfire seriously.",
    whyMetalWorks:
      "Class A fire-rated standing seam, ember-resistant detailing, and cool-roof PVDF colors give Sleepy Hollow homeowners top-tier wildfire protection and substantial insurance discounts. Critical in post-2017 Marin.",
    premiumMaterials: [
      "Class A fire-rated PVDF standing seam",
      "Solid copper for Mediterranean estate accents",
      "Ember-screened ridge and soffit venting",
      "On-site roll-formed seamless single-length panels",
    ],
    faqs: [
      { q: "Is Sleepy Hollow in a CAL FIRE WUI zone?", a: "Yes — most of Sleepy Hollow falls within Very High Fire Hazard Severity Zones. Class A roofs are required for new construction and most reroofs." },
      { q: "How much can Sleepy Hollow homeowners save on insurance?", a: "Class A roof discounts typically run 5–13.8% on FAIR Plan and admitted-carrier premiums. We provide all manufacturer documentation your carrier requires." },
      { q: "Do you do on-site panel fabrication in Sleepy Hollow?", a: "Yes — our roll-forming truck produces single-length panels on your driveway, eliminating horizontal seams on long Sleepy Hollow rooflines." },
      { q: "Can metal handle steep hillside lots?", a: "Yes — we use rigging, fall-arrest anchors, and crane delivery as needed. Stamped fall-protection plans are standard on lots over 4:12 pitch." },
    ],
  },
  {
    slug: "seminary",
    citySlug: "san-anselmo",
    name: "Seminary",
    tagline: "Heritage metal roofing for San Anselmo's historic Seminary district",
    architectureEra: "Tudor Revival, Craftsman & Period Revival, 1900s–1930s",
    notableHomes: "San Francisco Theological Seminary historic campus, Period Revival residences",
    intro:
      "The Seminary neighborhood surrounds the historic San Francisco Theological Seminary campus — Tudor Revivals, Craftsman bungalows, and Period Revival homes on tree-canopied streets.",
    whyMetalWorks:
      "Lead-coated copper, dark-bronze PVDF, and matte-charcoal standing seam are period-correct for Tudor and Craftsman architecture while delivering Class A fire protection — essential in post-Tubbs Marin.",
    premiumMaterials: [
      "Lead-coated copper for Tudor revivals",
      "Matte-charcoal PVDF for Craftsman bungalows",
      "Custom flashing for exposed-rafter eaves",
      "Decorative copper ridge caps and finials",
    ],
    faqs: [
      { q: "What's the right metal for a Seminary Tudor?", a: "Lead-coated copper or matte-charcoal PVDF in heavy-batten profile. Both age into the weathered palette characteristic of authentic English Tudor roofing." },
      { q: "Can you preserve Craftsman exposed-rafter detailing?", a: "Yes — we fabricate custom drip edge that preserves visible rafter tails, decorative ridge boards, and shingle-style transitions." },
      { q: "Is the Seminary district historic-reviewed?", a: "Properties on the historic seminary campus and contributing structures may require Marin County historic review. We prepare and submit packages." },
      { q: "How long do Seminary district reroofs take?", a: "Typical single-family reroof runs 7–14 working days. Complex Tudor or Craftsman rooflines with custom flashing add 3–5 days." },
    ],
  },
  {
    slug: "winship-park",
    citySlug: "san-anselmo",
    name: "Winship Park",
    tagline: "Premium metal roofing for San Anselmo's established estate enclave",
    architectureEra: "Mediterranean Revival, Spanish Colonial & Custom Period, 1920s–1940s",
    notableHomes: "Mediterranean Revival estates on landscaped lots",
    intro:
      "Winship Park is one of San Anselmo's most distinguished established neighborhoods — Mediterranean Revival and Spanish Colonial estates on professionally landscaped lots dating to the 1920s.",
    whyMetalWorks:
      "Pressed-steel metal tile in terracotta finish offers period-appropriate Mediterranean aesthetics with Class A fire protection. Standing seam in dark-bronze PVDF works for transitional and custom homes.",
    premiumMaterials: [
      "Metal tile in terracotta finish (Mediterranean-appropriate)",
      "Dark-bronze PVDF standing seam",
      "Solid copper for accent elements",
      "Custom decorative ridge tiles",
    ],
    faqs: [
      { q: "Does metal tile look like real clay tile?", a: "Yes — pressed-steel metal tile in terracotta finish is visually indistinguishable from clay at curb distance and weighs 75% less, eliminating seismic load concerns." },
      { q: "Will metal preserve Winship Park's Mediterranean character?", a: "Absolutely — terracotta-finish metal tile maintains the architectural intent of original clay tile while delivering 50+ year service life and Class A fire rating." },
      { q: "Are there fire-zone considerations for Winship Park?", a: "Yes — portions of Winship Park sit within mapped fire hazard zones. Class A metal is the recommended roof for both safety and insurance benefits." },
      { q: "How does metal tile cost compare to real clay?", a: "Metal tile typically runs 60–70% of the cost of real clay tile installed — substantial savings without aesthetic compromise." },
    ],
  },

  // ============ SANTA CRUZ ============
  {
    slug: "pleasure-point",
    citySlug: "santa-cruz",
    name: "Pleasure Point",
    tagline: "Marine-grade metal roofing for Santa Cruz's premier coastal neighborhood",
    architectureEra: "Coastal Contemporary, Surf-Modern & Custom Beach Homes, 1970s–present",
    notableHomes: "Architect-designed surf-modern estates, custom contemporary beachfront residences",
    intro:
      "Pleasure Point sits on the Monterey Bay coastline with full Pacific salt exposure and a custom-home market that values architecture as much as performance.",
    whyMetalWorks:
      "PVDF Kynar 500, solid copper, and zinc are the only finishes we recommend for Pleasure Point's direct salt-air exposure. Standing seam in matte dark colors complements surf-modern and contemporary architecture.",
    premiumMaterials: [
      "PVDF Kynar 500 over G90 galvanized steel",
      "Pre-weathered zinc for contemporary homes",
      "Solid copper accents",
      "Marine-grade stainless flashing throughout",
    ],
    faqs: [
      { q: "Why does Pleasure Point need marine-grade roofing?", a: "Direct Pacific salt fog attacks bare aluminum and polyester paint within 5–10 years. PVDF Kynar 500, solid copper, and zinc carry 30–50 year marine warranties." },
      { q: "Will a metal roof handle Pleasure Point winter storms?", a: "Yes — mechanical-seam standing seam carries UL 580 Class 90 wind-uplift ratings and sheds heavy rainfall faster than any shingle roof." },
      { q: "Is Pleasure Point in the Coastal Zone?", a: "Yes — Coastal Commission permits may apply for properties with specific triggers (height, lot location, etc.). We assess and submit when required." },
      { q: "Can you do solar on a Pleasure Point metal roof?", a: "Yes — standing seam is the best PV substrate available. S-5! clamps attach directly to seams with zero penetrations." },
    ],
  },
  {
    slug: "seabright",
    citySlug: "santa-cruz",
    name: "Seabright",
    tagline: "Coastal heritage metal roofing for Santa Cruz's beach-town heart",
    architectureEra: "Beach Cottage, Craftsman & Bungalow, 1900s–1940s",
    notableHomes: "Restored beach cottages, Craftsman bungalows on tree-lined streets",
    intro:
      "Seabright preserves Santa Cruz's early-20th-century beach-town character — restored cottages, Craftsman bungalows, and modest period homes a few blocks from the beach.",
    whyMetalWorks:
      "Marine-grade PVDF in heritage colors and copper accents preserve Seabright's beach-cottage character while delivering 50+ year corrosion resistance — essential within sight of the Pacific.",
    premiumMaterials: [
      "PVDF Kynar 500 in heritage colors (red, green, blue)",
      "Copper accents on dormers and bay windows",
      "Custom flashing for cottage architectural details",
      "Marine-grade stainless throughout",
    ],
    faqs: [
      { q: "Can metal preserve a Seabright cottage's character?", a: "Yes — narrow-batten standing seam in heritage red, green, or blue PVDF echoes original painted-tin cottage roofs that defined early-20th-century coastal California." },
      { q: "Will salt air damage a metal roof in Seabright?", a: "Not if specified correctly — PVDF Kynar 500 over G90 galvanized steel and solid copper are rated for direct marine exposure with 30–50 year warranties." },
      { q: "How does metal compare to composition shingles in Seabright?", a: "50+ year vs 15–20 year service life, no granule loss to clog gutters, no algae streaks, and dramatically better salt-air corrosion performance." },
      { q: "Are there Seabright historic-district guidelines?", a: "Some Seabright blocks have informal preservation interest. We work with homeowners to choose period-appropriate colors and profiles." },
    ],
  },
  {
    slug: "westside",
    citySlug: "santa-cruz",
    name: "Westside",
    tagline: "Premium coastal metal roofing for Santa Cruz's Westside",
    architectureEra: "Mid-Century, Custom Contemporary & Coastal Modern, 1950s–present",
    notableHomes: "Architect-designed bluff-top contemporaries, Mid-Century custom homes",
    intro:
      "Santa Cruz's Westside runs from the lighthouse north along West Cliff — bluff-top homes with direct Pacific exposure, architect-designed contemporaries, and some of the city's most valuable real estate.",
    whyMetalWorks:
      "Solid copper, zinc, and PVDF Kynar 500 are the only finishes that survive Westside's full Pacific salt exposure long-term. Standing seam in matte dark colors complements the neighborhood's architectural ambition.",
    premiumMaterials: [
      "Pre-weathered zinc for contemporary architecture",
      "PVDF Kynar 500 in custom dark colors",
      "Solid copper for Mediterranean and warm contemporary",
      "Mechanical-seam profiles for high wind uplift",
    ],
    faqs: [
      { q: "Do Westside bluff-top homes need wind-uplift engineering?", a: "Yes — exposed bluff-top lots see design winds well above Santa Cruz baseline. We provide stamped uplift letters and use mechanical-seam profiles rated for 150+ mph." },
      { q: "Will Coastal Commission review apply to a Westside reroof?", a: "Often yes for bluff-top properties with specific triggers. We assess and handle Coastal Commission submittals as part of the project scope." },
      { q: "What's the lifespan of a Westside metal roof?", a: "50+ years for PVDF over G90 steel; 75+ years for solid copper or pre-weathered zinc — even with full ocean exposure." },
      { q: "Can you match the look of a contemporary architect-designed home?", a: "Yes — we collaborate directly with architects on profile selection, panel orientation, color matching, and detail design. Shop drawings are provided for sign-off." },
    ],
  },

  // ============ MODESTO ============
  {
    slug: "college-area",
    citySlug: "modesto",
    name: "College Area",
    tagline: "Premium metal roofing for Modesto's historic College Area",
    architectureEra: "Tudor Revival, Spanish Colonial & Period Revival, 1920s–1940s",
    notableHomes: "Period Revival estates on tree-lined McHenry Boulevard, custom Tudor and Spanish homes",
    intro:
      "Modesto's College Area surrounds Modesto Junior College and holds the city's deepest concentration of pre-WWII Period Revival architecture — Tudors, Spanish Colonials, and custom estates dating to the 1920s.",
    whyMetalWorks:
      "Lead-coated copper, metal tile in terracotta, and dark-bronze PVDF give College Area homeowners period-correct aesthetics with Central Valley cool-roof performance. Critical for Modesto's six-month cooling season.",
    premiumMaterials: [
      "Metal tile in terracotta (Spanish Colonial-appropriate)",
      "Lead-coated copper for Tudor revivals",
      "Cool-roof rated PVDF for AC savings",
      "Custom decorative ridge details",
    ],
    faqs: [
      { q: "Will metal preserve College Area Period Revival character?", a: "Yes — metal tile in terracotta, lead-coated copper, and dark-bronze PVDF are period-correct for the neighborhood's Tudor, Spanish, and Period Revival homes." },
      { q: "How much will a College Area metal roof cut my AC bill?", a: "Cool-roof rated PVDF typically reduces summer cooling costs 25–40% in Modesto's climate — often $80–$200/month savings during peak season." },
      { q: "Are there Modesto historic-district considerations?", a: "Some College Area properties carry historic recognition. We coordinate with City of Modesto and any applicable historic review." },
      { q: "How long do metal roofs last in Modesto's heat?", a: "50+ years on PVDF-coated steel — substantially longer than asphalt shingles, which typically need replacement every 12–18 years in Central Valley UV." },
    ],
  },
  {
    slug: "sherwood-forest",
    citySlug: "modesto",
    name: "Sherwood Forest",
    tagline: "Architectural metal roofing for Modesto's premier estate neighborhood",
    architectureEra: "Custom Ranch & Mediterranean Estates, 1950s–1980s",
    notableHomes: "Custom estate homes on oversized landscaped lots",
    intro:
      "Sherwood Forest is one of Modesto's most prestigious neighborhoods — large custom estate homes on oversized lots, often with mature heritage landscaping.",
    whyMetalWorks:
      "Cool-roof rated PVDF standing seam dramatically reduces Sherwood Forest's massive summer cooling load. Architectural profiles in dark bronze and matte charcoal complement the neighborhood's custom architecture.",
    premiumMaterials: [
      "Cool-roof rated PVDF in matte dark colors",
      "Wide-batten standing seam for ranch architecture",
      "Custom flashing for complex estate rooflines",
      "Solar-ready integration",
    ],
    faqs: [
      { q: "How much can a Sherwood Forest metal roof save on cooling?", a: "Large estate homes typically see 25–40% AC reduction with cool-roof rated PVDF — often $200–$500/month savings during Modesto's peak summer months." },
      { q: "Will metal handle Modesto's intense UV?", a: "Yes — PVDF Kynar 500 is engineered specifically to resist UV chalking and fade. Finish warranties run 30 years; substrate warranties extend 50 years." },
      { q: "Can you do solar with a metal roof?", a: "Yes — standing seam is the best PV substrate available. S-5! clamps attach panels directly to seams with zero penetrations." },
      { q: "How long does a Sherwood Forest reroof take?", a: "Estate-scale reroofs typically run 3–5 weeks. We provide weekly project updates and coordinate around landscaping and pool access." },
    ],
  },
  {
    slug: "la-loma",
    citySlug: "modesto",
    name: "La Loma",
    tagline: "Heritage metal roofing for Modesto's historic La Loma district",
    architectureEra: "Spanish Colonial Revival, Mediterranean & Custom, 1920s–1940s",
    notableHomes: "Spanish Colonial Revival estates, La Loma Park custom homes",
    intro:
      "La Loma is one of Modesto's oldest distinguished neighborhoods — Spanish Colonial Revival estates, Mediterranean homes, and custom Period Revival residences on the bluff above the Tuolumne River.",
    whyMetalWorks:
      "Pressed-steel metal tile in terracotta finish is the obvious answer for La Loma's Spanish Colonial architecture — period-appropriate aesthetics, 50+ year service life, and Central Valley cool-roof performance.",
    premiumMaterials: [
      "Metal tile in terracotta finish",
      "Lead-coated copper for accent elements",
      "Cool-roof rated PVDF on transitional homes",
      "Custom decorative ridge tiles and finials",
    ],
    faqs: [
      { q: "Does metal tile look like authentic Spanish clay tile?", a: "Yes — pressed-steel terracotta-finish metal tile is visually indistinguishable from clay at curb distance and weighs 75% less, eliminating seismic load concerns." },
      { q: "Will La Loma's bluff-edge wind affect roof choice?", a: "Slight design wind increase versus inland Modesto. We use mechanical-seam profiles and stamped uplift detailing on bluff-edge properties." },
      { q: "Are there historic-review requirements in La Loma?", a: "Some La Loma properties carry historic recognition. We coordinate with City of Modesto on any required review." },
      { q: "How does cost compare to real clay tile in La Loma?", a: "Metal tile typically runs 60–70% the cost of real clay tile installed — substantial savings without aesthetic compromise." },
    ],
  },

  // ============ KENTFIELD ============
  {
    slug: "kent-woodlands",
    citySlug: "kentfield",
    name: "Kent Woodlands",
    tagline: "Architect-grade metal roofing for Marin's premier hillside enclave",
    architectureEra: "Custom Contemporary, Mediterranean & Architectural, 1960s–present",
    notableHomes: "AIA-honored architect-designed estates, custom Marin Modern residences",
    intro:
      "Kent Woodlands holds some of Marin County's most architecturally distinguished homes — AIA-recognized custom estates, Marin Modern residences, and large multi-acre lots tucked into mature oak forest.",
    whyMetalWorks:
      "Class A fire-rated standing seam in matte dark colors is the right answer for Kent Woodlands — wildfire-grade protection, oak-debris resistance, and architectural quality that complements custom-designed homes. HOA design review approves muted PVDF and copper finishes.",
    premiumMaterials: [
      "Class A standing seam in matte black/charcoal/dark bronze",
      "Solid copper for warm contemporary architecture",
      "Pre-weathered zinc for modernist designs",
      "Solar-ready S-5! clamp-on integration",
    ],
    faqs: [
      { q: "Will Kent Woodlands HOA approve a metal roof?", a: "Yes — HOA permits architectural metal in approved muted color palettes (matte black, dark bronze, slate, charcoal). We submit material samples and color chips for review." },
      { q: "Is Kent Woodlands in a CAL FIRE WUI zone?", a: "Yes — Very High Fire Hazard Severity Zone. Class A roofs are essential for both safety and insurance qualification." },
      { q: "Can you handle Kent Woodlands hillside lots and oak canopies?", a: "Yes — we coordinate with arborists, use tree-protection fencing, and rig material delivery to minimize canopy impact. Stamped fall-protection plans are standard." },
      { q: "Do you collaborate with architects in Kent Woodlands?", a: "Routinely — most Kent Woodlands work is architect-led. We provide shop drawings and finish boards for sign-off before fabrication." },
    ],
  },
  {
    slug: "murray-park",
    citySlug: "kentfield",
    name: "Murray Park",
    tagline: "Premium metal roofing for Kentfield's heritage residential neighborhood",
    architectureEra: "Tudor Revival, Craftsman & Period Custom, 1920s–1950s",
    notableHomes: "Period Revival residences on tree-lined Marin streets",
    intro:
      "Murray Park is one of Kentfield's most established residential neighborhoods — Tudor Revivals, Craftsman bungalows, and Period custom homes on mature, tree-canopied streets.",
    whyMetalWorks:
      "Lead-coated copper, dark-bronze PVDF, and matte-charcoal standing seam are period-correct for Murray Park's architecture while delivering Class A fire protection — essential in post-Tubbs Marin.",
    premiumMaterials: [
      "Lead-coated copper for Tudor revivals",
      "Matte-charcoal PVDF for Craftsman bungalows",
      "Custom flashing for exposed-rafter eaves",
      "Decorative copper ridge details",
    ],
    faqs: [
      { q: "What's the right metal for a Murray Park Tudor?", a: "Lead-coated copper or matte-charcoal PVDF in heavy-batten profile — both age into the weathered palette characteristic of authentic English Tudor roofing." },
      { q: "Will Marin County permits be required?", a: "Yes — Kentfield is unincorporated Marin. Most residential reroof permits clear in 2–4 weeks." },
      { q: "Can metal preserve Craftsman exposed-rafter detailing?", a: "Yes — we fabricate custom drip edge and trim that preserves visible rafter tails, decorative ridge boards, and shingle-style transitions." },
      { q: "How does Murray Park's canopy affect roof choice?", a: "Heavy oak debris is the main consideration — smooth metal panels shed leaves and acorns naturally, far better than shingles." },
    ],
  },
  {
    slug: "greenbrae-boardwalk",
    citySlug: "kentfield",
    name: "Greenbrae Boardwalk",
    tagline: "Marine-grade metal roofing for Kentfield's exclusive waterfront enclave",
    architectureEra: "Mid-Century Custom & Contemporary Waterfront, 1950s–present",
    notableHomes: "Private boardwalk waterfront homes, architect-designed bay-front residences",
    intro:
      "The Greenbrae Boardwalk is one of Marin's most exclusive waterfront communities — homes accessed by private boardwalks along the Corte Madera Creek tidal estuary, full marine exposure, and very high real estate values.",
    whyMetalWorks:
      "PVDF Kynar 500, solid copper, and zinc are the only finishes rated for Greenbrae Boardwalk's direct tidal exposure. Standing seam in matte dark colors complements the neighborhood's mid-century and contemporary architecture.",
    premiumMaterials: [
      "PVDF Kynar 500 over G90 galvanized steel",
      "Pre-weathered zinc for contemporary homes",
      "Solid copper for warm mid-century architecture",
      "Marine-grade stainless throughout",
    ],
    faqs: [
      { q: "Why does Greenbrae Boardwalk need marine-grade roofing?", a: "Direct tidal-water exposure attacks bare aluminum and standard galvanized steel. PVDF Kynar 500, solid copper, and zinc carry 30–50 year marine warranties." },
      { q: "How do you access boardwalk homes for material delivery?", a: "We coordinate with HOA for boardwalk material staging, use weight-distribution mats, and sequence delivery to minimize impact on neighbors." },
      { q: "Will Marin County design review apply?", a: "Often yes for waterfront properties. We prepare and submit material samples and color chips through Marin County review." },
      { q: "What's the lifespan of a Greenbrae Boardwalk metal roof?", a: "50+ years for PVDF over G90 steel; 75+ years for solid copper or pre-weathered zinc — even with full tidal exposure." },
    ],
  },

  // ============ SANTA ROSA ============
  {
    slug: "fountaingrove",
    citySlug: "santa-rosa",
    name: "Fountaingrove",
    tagline: "Class A wildfire-grade metal roofing for Santa Rosa's premier hillside community",
    architectureEra: "Custom Contemporary, Mediterranean & Post-Tubbs Rebuilds, 1990s–present",
    notableHomes: "Pre- and post-Tubbs Fire custom estates, architect-designed contemporaries",
    intro:
      "Fountaingrove was the epicenter of the 2017 Tubbs Fire — and the rebuild has prioritized Class A roofs, ember-resistant detailing, and serious fire-hardening across the entire neighborhood.",
    whyMetalWorks:
      "Class A fire-rated standing seam metal is non-combustible, ember-resistant, and the most-specified roof system in post-Tubbs Fountaingrove rebuilds. Combined with ember-screened venting and defensible space, metal is the cornerstone of survivable hillside design.",
    premiumMaterials: [
      "Class A fire-rated PVDF standing seam",
      "Ember-screened ridge and soffit venting",
      "Cool-roof reflective panels",
      "Solar-ready integrated installation",
    ],
    faqs: [
      { q: "Are metal roofs required in Fountaingrove rebuilds?", a: "Class A roofs are required throughout Fountaingrove's WUI zones. Standing seam metal is the most cost-effective Class A option and the most-specified in post-Tubbs rebuilds." },
      { q: "How much will a Class A metal roof save on insurance?", a: "Often substantially — California FAIR Plan and admitted carriers offer 5–13.8% premium discounts for Class A roofs in WUI zones." },
      { q: "Do you have post-Tubbs rebuild experience in Fountaingrove?", a: "Yes — we've completed numerous Tubbs and LNU Lightning Complex rebuilds. We coordinate with Sonoma County's rebuild permit pathway and provide insurer documentation." },
      { q: "Can you integrate solar from day one?", a: "Yes — standing seam is the best PV substrate available. S-5! clamps attach panels directly to seams with zero penetrations and full warranty preservation." },
    ],
  },
  {
    slug: "skyhawk",
    citySlug: "santa-rosa",
    name: "Skyhawk",
    tagline: "Wildfire-grade metal roofing for Santa Rosa's premier eastside estate community",
    architectureEra: "Custom Contemporary & Mediterranean Estates, 1990s–present",
    notableHomes: "Custom estate homes on oversized hillside lots",
    intro:
      "Skyhawk sits in Santa Rosa's eastern hills — large custom estate homes on hillside lots, full WUI fire exposure, and a homeowner base focused on long-term wildfire resilience.",
    whyMetalWorks:
      "Class A fire-rated standing seam in matte dark colors complements Skyhawk's contemporary and Mediterranean architecture while delivering top-tier wildfire protection. Cool-roof PVDF colors qualify for energy rebates.",
    premiumMaterials: [
      "Class A standing seam in matte dark colors",
      "Solid copper for Mediterranean estate accents",
      "Ember-resistant ridge and eave detailing",
      "Cool-roof PVDF for AC savings",
    ],
    faqs: [
      { q: "Is Skyhawk in a CAL FIRE WUI zone?", a: "Yes — Very High Fire Hazard Severity Zone. Class A roofs are required for new construction and most reroofs." },
      { q: "What insurance discount can I expect?", a: "5–13.8% on FAIR Plan and admitted-carrier premiums for properly documented Class A roofs in WUI zones. We provide manufacturer documentation." },
      { q: "Can metal handle Skyhawk's hillside lots?", a: "Yes — we use rigging, fall-arrest anchors, and crane delivery as needed. Stamped fall-protection plans are standard on lots over 4:12 pitch." },
      { q: "How disruptive is an estate-scale Skyhawk reroof?", a: "Typically 4–8 weeks for a 4,000+ sq ft estate. We provide weekly project updates and coordinate around landscaping and pool access." },
    ],
  },
  {
    slug: "mcdonald-historic",
    citySlug: "santa-rosa",
    name: "McDonald Avenue Historic District",
    tagline: "Heritage metal roofing for Santa Rosa's premier historic district",
    architectureEra: "Victorian, Queen Anne & Period Revival, 1880s–1920s",
    notableHomes: "Mableton Mansion, McDonald Mansion (NRHP), Comstock House (Stick-Eastlake landmark)",
    intro:
      "The McDonald Avenue Historic District is Santa Rosa's premier heritage neighborhood — Queen Anne mansions, Stick-Eastlake landmarks, and Period Revival homes on tree-canopied McDonald Avenue, many on the National Register.",
    whyMetalWorks:
      "Solid copper, lead-coated copper, and dark-bronze PVDF are period-appropriate for the district's Victorian and Queen Anne mansions. The Cultural Heritage Board approves these finishes for landmark properties.",
    premiumMaterials: [
      "Solid copper standing seam (developing patina complements Victorian woodwork)",
      "Lead-coated copper for landmark properties",
      "Custom-fabricated turret, dormer, and bay window flashing",
      "Decorative copper ridge cresting and finials",
    ],
    faqs: [
      { q: "Will Santa Rosa Cultural Heritage Board approve metal?", a: "For landmark properties, yes — copper, lead-coated copper, and dark-bronze PVDF are routinely approved through CHB review. We prepare and submit complete packages." },
      { q: "What does a copper roof cost on a McDonald Avenue mansion?", a: "Solid copper standing seam typically runs $40–$60 per square foot installed for complex Victorian rooflines. We provide line-item proposals after a free site visit." },
      { q: "Can you preserve original Victorian decorative ridge details?", a: "Yes — we fabricate custom copper or zinc ridge caps, cresting, and finials to match historic precedent. Original details can often be saved and reset." },
      { q: "How long do copper roofs last in Santa Rosa?", a: "75–100+ years on properly installed solid copper. Many original 1890s copper roofs are still in service across Northern California." },
    ],
  },

  // ============ ALAMEDA COUNTY ============
  {
    slug: "piedmont-avenue",
    citySlug: "alameda-county",
    name: "Piedmont Avenue (Oakland)",
    tagline: "Heritage metal roofing for Oakland's premier walkable neighborhood",
    architectureEra: "Craftsman, Tudor Revival & Mediterranean, 1900s–1930s",
    notableHomes: "Julia Morgan-attributed residences, Period Revival custom homes",
    intro:
      "The Piedmont Avenue neighborhood — distinct from the City of Piedmont — runs along Oakland's premier walkable commercial street. The residential blocks hold Craftsman bungalows, Tudor Revivals, and Mediterranean homes from Oakland's pre-WWII golden age.",
    whyMetalWorks:
      "Lead-coated copper, dark-bronze PVDF, and matte-charcoal standing seam are period-correct for the neighborhood's architecture. Class A fire ratings are increasingly important even in Oakland's lower-elevation zones.",
    premiumMaterials: [
      "Lead-coated copper for Tudor revivals",
      "Matte-charcoal PVDF for Craftsman bungalows",
      "Metal tile in terracotta for Mediterranean homes",
      "Custom flashing for complex residential rooflines",
    ],
    faqs: [
      { q: "Are there Oakland historic-district reviews here?", a: "Some Piedmont Avenue blocks have historic recognition. We coordinate with Oakland Planning's Landmarks Preservation Advisory Board when applicable." },
      { q: "What's the right metal for a Craftsman bungalow?", a: "Matte-charcoal or dark-bronze PVDF in narrow-batten standing seam. The clean dark profile complements Craftsman's natural-wood aesthetic without competing with it." },
      { q: "How does Oakland permitting compare to other East Bay cities?", a: "Oakland Building permits typically clear in 2–4 weeks for residential reroofs. We submit electronically and track approval daily." },
      { q: "Will metal handle Oakland's mature street trees?", a: "Yes — smooth panels shed leaves naturally, far better than shingles. Annual gutter cleaning is sufficient maintenance." },
    ],
  },
  {
    slug: "claremont",
    citySlug: "alameda-county",
    name: "Claremont (Berkeley/Oakland)",
    tagline: "Architect-grade metal roofing for the East Bay's premier hillside enclave",
    architectureEra: "Bernard Maybeck, Julia Morgan & Period Revival, 1900s–1940s",
    notableHomes: "Maybeck-attributed residences, Julia Morgan custom homes, AIA-honored estates",
    intro:
      "The Claremont district — straddling Berkeley and Oakland — holds one of California's most architecturally significant residential collections, including documented Bernard Maybeck and Julia Morgan custom homes.",
    whyMetalWorks:
      "Lead-coated copper, dark-bronze PVDF, and matte-charcoal standing seam are period-appropriate for Maybeck and Morgan-era architecture. Class A fire rating is essential — the neighborhood sits in the Oakland-Berkeley fire zone that experienced the 1991 Tunnel Fire.",
    premiumMaterials: [
      "Lead-coated copper for Period Revival landmarks",
      "Class A standing seam in matte dark colors",
      "Solid copper for warm contemporary accents",
      "On-site roll-formed seamless single-length panels",
    ],
    faqs: [
      { q: "Is Claremont in a wildfire WUI zone?", a: "Yes — much of the Claremont hills falls within Very High Fire Hazard Severity Zones. Class A roofs are required for new construction and most reroofs." },
      { q: "Will Berkeley LPC review apply?", a: "For landmarked or Structures of Merit properties, yes. We prepare and submit Landmarks Preservation Commission packages with material samples and color chips." },
      { q: "Can you work on Maybeck or Morgan-attributed homes?", a: "Yes — we have direct experience with Period Revival and Arts & Crafts custom homes. Architect collaboration and historic-detail preservation are standard scope." },
      { q: "How long do Claremont reroofs take?", a: "Typical custom-home reroof runs 3–5 weeks. Complex Period Revival rooflines with custom flashing add 1–2 weeks." },
    ],
  },
  {
    slug: "mission-san-jose",
    citySlug: "alameda-county",
    name: "Mission San Jose (Fremont)",
    tagline: "Premium metal roofing for Fremont's premier estate enclave",
    architectureEra: "Spanish Colonial Revival, Mediterranean & Custom Estate, 1980s–present",
    notableHomes: "Mission San José (CA Historical Landmark), custom Mediterranean estates",
    intro:
      "Mission San Jose surrounds the historic mission and holds Fremont's most prestigious residential addresses — Spanish Colonial Revival estates, Mediterranean custom homes, and high-end developments tied to top-rated schools.",
    whyMetalWorks:
      "Pressed-steel metal tile in terracotta is the obvious answer for Mission San Jose's Spanish Colonial and Mediterranean architecture. Standing seam in dark bronze works for transitional and contemporary custom estates.",
    premiumMaterials: [
      "Metal tile in terracotta finish",
      "Dark-bronze PVDF standing seam",
      "Solid copper for accent elements",
      "Cool-roof rated panels for Bay Area inland heat",
    ],
    faqs: [
      { q: "Does metal tile look like authentic Spanish clay tile?", a: "Yes — pressed-steel terracotta-finish metal tile is visually indistinguishable from clay at curb distance and weighs 75% less, eliminating seismic load concerns." },
      { q: "Are there Fremont historic-area considerations?", a: "Properties near Mission San José carry historic sensitivity. We coordinate with City of Fremont Planning on appropriate materials and details." },
      { q: "How does cost compare to real clay tile?", a: "Metal tile typically runs 60–70% the cost of real clay tile installed — substantial savings without aesthetic compromise." },
      { q: "Will a metal roof help cool a Mission San Jose estate?", a: "Yes — cool-roof rated PVDF reduces summer cooling costs 25–40% in Fremont's inland-influenced climate." },
    ],
  },

  // ============ CONTRA COSTA COUNTY ============
  {
    slug: "blackhawk",
    citySlug: "contra-costa-county",
    name: "Blackhawk",
    tagline: "Premium fire-rated metal roofing for Contra Costa's flagship gated community",
    architectureEra: "Custom Mediterranean, Tuscan & Contemporary Estates, 1980s–present",
    notableHomes: "Multi-acre custom estates within the gated Blackhawk community",
    intro:
      "Blackhawk is Contra Costa's flagship luxury gated community — multi-acre custom estate homes, Mt. Diablo backdrop, and a strict architectural review board that maintains the neighborhood's Mediterranean and Tuscan aesthetic.",
    whyMetalWorks:
      "Pressed-steel metal tile in terracotta is the right answer for Blackhawk's Mediterranean and Tuscan architecture — period-correct aesthetics, Class A fire protection, and Architectural Review Board approvability.",
    premiumMaterials: [
      "Metal tile in terracotta finish (ARB-approvable)",
      "Solid copper accents on prominent elements",
      "Cool-roof rated PVDF for AC savings",
      "Class A fire rating throughout",
    ],
    faqs: [
      { q: "Will Blackhawk ARB approve metal roofing?", a: "Yes — metal tile in approved terracotta finishes is routinely approved by the Architectural Review Board. We submit material samples and color chips with every package." },
      { q: "Is Blackhawk in a CAL FIRE WUI zone?", a: "Yes — Very High Fire Hazard Severity Zone. Class A roofs are essential for both safety and insurance qualification." },
      { q: "What does a Blackhawk estate-scale reroof cost?", a: "Metal tile typically runs $22–$32 per square foot installed depending on roof complexity and accent materials. We provide line-item proposals after a free site visit." },
      { q: "How long does an estate-scale Blackhawk project take?", a: "Typically 4–8 weeks for a 5,000+ sq ft estate. We coordinate with gate access, ARB, and HOA throughout." },
    ],
  },
  {
    slug: "alamo",
    citySlug: "contra-costa-county",
    name: "Alamo",
    tagline: "Class A fire-rated metal roofing for Contra Costa's premier estate community",
    architectureEra: "Custom Ranch, Mediterranean & Contemporary Estates, 1960s–present",
    notableHomes: "Custom estate homes on multi-acre Round Hill and West Side properties",
    intro:
      "Alamo sits between Walnut Creek and Danville in the I-680 corridor — large custom estate homes on multi-acre lots, full WUI fire exposure on the Mt. Diablo flank, and substantial property values.",
    whyMetalWorks:
      "Class A fire-rated standing seam, ember-resistant detailing, and cool-roof PVDF address Alamo's wildfire and heat exposure simultaneously. Insurance discounts of 5–13% are routine on properly documented installs.",
    premiumMaterials: [
      "Class A fire-rated PVDF standing seam",
      "Solid copper for Mediterranean estate accents",
      "Cool-roof reflective panels",
      "Ember-screened ridge and soffit venting",
    ],
    faqs: [
      { q: "Is Alamo in a CAL FIRE WUI zone?", a: "Yes — most of Alamo, especially Round Hill and west-side hillside properties, falls within mapped fire hazard zones." },
      { q: "How much will Alamo homeowners save on fire insurance?", a: "5–13.8% on FAIR Plan and admitted-carrier premiums for properly documented Class A roofs. We provide manufacturer documentation." },
      { q: "Do you serve all of Alamo from your Bay Area shop?", a: "Yes — fabrication and delivery is free anywhere in Contra Costa County. There are no travel surcharges to Alamo or the I-680 corridor." },
      { q: "Can you handle steep Alamo hillside lots?", a: "Yes — we use rigging, fall-arrest anchors, and crane delivery as needed. Stamped fall-protection plans are standard on lots over 4:12 pitch." },
    ],
  },
  {
    slug: "diablo",
    citySlug: "contra-costa-county",
    name: "Diablo",
    tagline: "Heritage metal roofing for Contra Costa's most exclusive private enclave",
    architectureEra: "Spanish Colonial Revival, Mediterranean & Period Revival, 1910s–1930s",
    notableHomes: "Diablo Country Club historic clubhouse, original 1920s Mediterranean estates",
    intro:
      "Diablo is one of California's most exclusive small communities — a private enclave of original 1910s–1930s Mediterranean and Spanish Colonial estates centered on the Diablo Country Club, full WUI fire exposure on Mt. Diablo's flank.",
    whyMetalWorks:
      "Pressed-steel metal tile in terracotta is period-correct for Diablo's heritage Mediterranean and Spanish Colonial architecture while delivering Class A fire protection — essential on Mt. Diablo's WUI flank.",
    premiumMaterials: [
      "Metal tile in terracotta finish (period-appropriate)",
      "Lead-coated copper for landmark properties",
      "Custom decorative ridge tiles and finials",
      "Class A fire rating throughout",
    ],
    faqs: [
      { q: "Will Diablo's character review approve metal?", a: "Yes — metal tile in terracotta and lead-coated copper are period-appropriate and routinely approved. We submit material samples and historic precedent documentation." },
      { q: "Is Diablo in a CAL FIRE WUI zone?", a: "Yes — Very High Fire Hazard Severity Zone on Mt. Diablo's western flank. Class A roofs are essential." },
      { q: "Does metal tile match authentic 1920s clay tile?", a: "Yes — pressed-steel terracotta-finish metal tile is visually indistinguishable from clay at curb distance and weighs 75% less." },
      { q: "How does Diablo permitting work?", a: "Diablo is unincorporated Contra Costa. Most residential reroof permits clear in 2–4 weeks. We submit electronically and track daily." },
    ],
  },

  // ============ PETALUMA ============
  {
    slug: "west-side",
    citySlug: "petaluma",
    name: "West Side",
    tagline: "Premium metal roofing for Petaluma's premier residential district",
    architectureEra: "Victorian, Craftsman & Period Revival, 1880s–1930s",
    notableHomes: "West Side Victorians, Craftsman bungalows, restored Period Revival homes",
    intro:
      "Petaluma's West Side holds the city's deepest concentration of Victorian and Craftsman residential architecture — large lots, mature trees, and a homeowner base that takes preservation seriously.",
    whyMetalWorks:
      "Solid copper, lead-coated copper, and dark-bronze PVDF in narrow-batten standing seam are period-correct for the West Side's architecture and approvable through Petaluma Heritage Preservation Committee review.",
    premiumMaterials: [
      "Solid copper standing seam (Victorian-appropriate)",
      "Lead-coated copper for landmark properties",
      "Dark-bronze PVDF for Craftsman bungalows",
      "Custom flashing for turrets, dormers, and bay windows",
    ],
    faqs: [
      { q: "Will Petaluma HPC approve metal in the West Side?", a: "Yes — copper, lead-coated copper, and dark-bronze PVDF are routinely approved through HPC review. We prepare and submit complete packages." },
      { q: "What does a copper roof cost on a West Side Victorian?", a: "Solid copper standing seam typically runs $35–$55 per square foot installed for complex Victorian rooflines. We provide line-item proposals after a free site visit." },
      { q: "Can you preserve original Victorian decorative details?", a: "Yes — we fabricate custom copper or zinc ridge caps, cresting, and finials. Original details can often be saved and reset on the new substrate." },
      { q: "How long do West Side reroofs take?", a: "Typical Victorian reroof runs 3–4 weeks including tear-off, sheathing inspection, custom flashing, and panel install." },
    ],
  },
  {
    slug: "mcnear-hill",
    citySlug: "petaluma",
    name: "McNear Hill",
    tagline: "Architectural metal roofing for Petaluma's hillside estate enclave",
    architectureEra: "Custom Contemporary, Mediterranean & Period Custom, 1970s–present",
    notableHomes: "Custom hillside estate homes overlooking downtown Petaluma",
    intro:
      "McNear Hill rises above downtown Petaluma — large custom estate homes on hillside lots with views of Sonoma Mountain and the Petaluma River valley.",
    whyMetalWorks:
      "Class A fire-rated standing seam in matte dark colors complements McNear Hill's contemporary and Mediterranean architecture while delivering wildfire protection — increasingly important throughout Sonoma County.",
    premiumMaterials: [
      "Class A standing seam in matte dark colors",
      "Solid copper for Mediterranean estate accents",
      "Cool-roof PVDF for AC savings",
      "Wind-uplift engineering for hillside exposure",
    ],
    faqs: [
      { q: "Are McNear Hill properties in a fire hazard zone?", a: "Some McNear Hill properties fall within mapped fire hazard zones. Class A metal is the recommended roof for both safety and insurance benefits." },
      { q: "Will hillside wind-uplift affect roof choice?", a: "Slight design wind increase versus valley-floor properties. We use mechanical-seam profiles and stamped uplift detailing as appropriate." },
      { q: "Can you handle steep McNear Hill lots?", a: "Yes — we use rigging, fall-arrest anchors, and crane delivery as needed. Stamped fall-protection plans are standard on lots over 4:12 pitch." },
      { q: "How long do estate-scale McNear Hill reroofs take?", a: "Typically 3–6 weeks for a 3,500+ sq ft estate. We provide weekly project updates throughout." },
    ],
  },
  {
    slug: "oakhill-brewster",
    citySlug: "petaluma",
    name: "Oakhill-Brewster Historic District",
    tagline: "Heritage metal roofing for Petaluma's premier historic district",
    architectureEra: "Italianate, Queen Anne & Victorian, 1850s–1900s",
    notableHomes: "Petaluma Carnegie Library, Cavanagh House (NRHP), Oakhill Park heritage estates",
    intro:
      "The Oakhill-Brewster Historic District is Petaluma's premier heritage neighborhood — Italianate, Queen Anne, and Victorian residences in one of California's best-preserved 19th-century streetscapes, many on the National Register.",
    whyMetalWorks:
      "Solid copper, lead-coated copper, and dark-bronze PVDF in narrow-batten profile are period-correct for the district's 1850s–1900s architecture and approvable through Petaluma HPC review.",
    premiumMaterials: [
      "Solid copper standing seam for landmark properties",
      "Lead-coated copper for the most prominent residences",
      "Dark-bronze narrow-batten PVDF",
      "Custom-fabricated decorative ridge cresting and finials",
    ],
    faqs: [
      { q: "Will Petaluma HPC approve metal in Oakhill-Brewster?", a: "For copper, lead-coated copper, and historically appropriate dark PVDF — yes, routinely. We prepare complete HPC packages with historic precedent documentation." },
      { q: "What does a copper roof cost on an Oakhill-Brewster Italianate?", a: "Solid copper standing seam typically runs $40–$60 per square foot installed for complex Italianate rooflines with brackets, cornices, and decorative elements." },
      { q: "Can you preserve cast-iron decorative ridge cresting?", a: "Yes — original cast-iron cresting and finials can often be preserved and reset, or reproduced in copper or zinc when originals are beyond repair." },
      { q: "How long do landmark-property reroofs take?", a: "Typical landmark Victorian or Italianate reroof runs 4–6 weeks including HPC coordination, custom fabrication, and installation." },
    ],
  },

  // ============ LOS GATOS ============
  {
    slug: "almaden-valley",
    citySlug: "los-gatos",
    name: "Almaden Valley",
    tagline: "Architectural metal roofing for Silicon Valley's premier hillside community",
    architectureEra: "Custom Contemporary, Mediterranean & Eichler-influenced, 1960s–present",
    notableHomes: "Custom architect-designed estates, AIA-honored contemporary residences",
    intro:
      "Almaden Valley climbs into the hills southwest of San Jose — large custom estate homes on oak-shaded hillside lots, top-rated schools, and a significant tech-executive homeowner base.",
    whyMetalWorks:
      "Class A fire-rated standing seam in matte dark colors complements Almaden's contemporary and Mediterranean architecture while delivering WUI-grade fire protection. Cool-roof performance is essential under Silicon Valley summer sun.",
    premiumMaterials: [
      "Class A standing seam in matte dark colors",
      "Solid copper for warm contemporary architecture",
      "Pre-weathered zinc for modernist designs",
      "Cool-roof rated PVDF for energy savings",
    ],
    faqs: [
      { q: "Is Almaden Valley in a CAL FIRE WUI zone?", a: "Most hillside Almaden Valley properties fall within mapped fire hazard zones. Class A roofs are required for new construction and most reroofs." },
      { q: "Will Almaden HOA review apply?", a: "Most hillside Almaden HOAs require design review for roofing changes. We submit material samples and color chips on every project." },
      { q: "Can you handle steep Almaden hillside lots?", a: "Yes — we use rigging, fall-arrest anchors, and crane delivery as needed. Stamped fall-protection plans are standard." },
      { q: "Do you collaborate with architects in Almaden Valley?", a: "Routinely — most Almaden custom-home work is architect-led. Shop drawings and finish boards for sign-off are standard scope." },
    ],
  },
  {
    slug: "monte-sereno",
    citySlug: "los-gatos",
    name: "Monte Sereno",
    tagline: "Premium architectural metal roofing for one of America's wealthiest small cities",
    architectureEra: "Custom Contemporary, Mediterranean & Architect-Designed Estates, 1950s–present",
    notableHomes: "AIA-honored custom estates on multi-acre Monte Sereno lots",
    intro:
      "Monte Sereno is consistently ranked among America's wealthiest small cities — a 1.6-square-mile enclave of multi-acre custom estate homes adjacent to Los Gatos. Roof systems here are judged by architects, builders, and very particular homeowners.",
    whyMetalWorks:
      "Solid copper, pre-weathered zinc, and Class A PVDF standing seam in custom architectural colors are the right answer for Monte Sereno's custom-home market. Architect collaboration is part of every project.",
    premiumMaterials: [
      "Solid copper standing seam",
      "Pre-weathered zinc for contemporary architecture",
      "Custom-color PVDF Kynar 500",
      "Concealed-fastener architectural panels",
    ],
    faqs: [
      { q: "Will Monte Sereno design review approve metal?", a: "Yes — copper, zinc, and architectural PVDF in muted colors are routinely approved. We prepare complete design-review packages." },
      { q: "Are Monte Sereno properties in a fire hazard zone?", a: "Many hillside Monte Sereno properties fall within mapped fire hazard zones. Class A metal is the recommended roof for both safety and insurance qualification." },
      { q: "What does a custom Monte Sereno reroof cost?", a: "Solid copper $40–$60 per square foot installed; pre-weathered zinc $35–$50; architectural PVDF $20–$32. Estate-scale projects vary — we provide line-item proposals." },
      { q: "Do you collaborate with architects on Monte Sereno custom homes?", a: "Routinely — most Monte Sereno work is architect-led. Shop drawings, panel profile samples, and finish boards for sign-off are standard scope." },
    ],
  },
  {
    slug: "los-gatos-hills",
    citySlug: "los-gatos",
    name: "Los Gatos Hills",
    tagline: "Wildfire-grade architectural metal roofing for Los Gatos' premier hillside enclave",
    architectureEra: "Custom Contemporary, Mediterranean & Architectural, 1980s–present",
    notableHomes: "Custom architect-designed hillside estates with Silicon Valley views",
    intro:
      "The Los Gatos Hills rise above the town with custom estate homes, sweeping Silicon Valley views, and full WUI fire exposure on the Santa Cruz Mountains flank. Wildfire resilience is non-negotiable.",
    whyMetalWorks:
      "Class A fire-rated standing seam in matte dark colors complements hillside contemporary architecture while delivering top-tier wildfire protection. Custom PVDF colors and copper accents reach the architectural quality these custom homes demand.",
    premiumMaterials: [
      "Class A standing seam in matte dark colors",
      "Solid copper for warm contemporary architecture",
      "Pre-weathered zinc for modernist designs",
      "Ember-resistant ridge and soffit venting",
    ],
    faqs: [
      { q: "Is Los Gatos Hills in a CAL FIRE WUI zone?", a: "Yes — Very High Fire Hazard Severity Zone throughout the Santa Cruz Mountains flank. Class A roofs are required and Insurance discounts are substantial." },
      { q: "Can you handle very steep hillside lots?", a: "Yes — we use rigging, fall-arrest anchors, and crane delivery as needed. Stamped fall-protection plans are standard on lots over 4:12 pitch." },
      { q: "Will Los Gatos hillside HOA review apply?", a: "Most Los Gatos hillside HOAs require design review for roofing changes. We submit material samples, color chips, and elevation drawings on every project." },
      { q: "How long does a hillside estate reroof take?", a: "Typically 4–8 weeks for a 4,000+ sq ft hillside estate. We coordinate around access, landscaping, and view-side staging." },
    ],
  },
];

export const getNeighborhoodBySlug = (
  citySlug: string,
  neighborhoodSlug: string,
): NeighborhoodData | undefined =>
  neighborhoods.find((n) => n.citySlug === citySlug && n.slug === neighborhoodSlug);

export const getNeighborhoodsByCity = (citySlug: string): NeighborhoodData[] =>
  neighborhoods.filter((n) => n.citySlug === citySlug);
