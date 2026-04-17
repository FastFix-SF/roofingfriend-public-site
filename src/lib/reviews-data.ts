export interface Review {
  name: string;
  initials: string;
  color: string;
  date: string;
  rating: number;
  text: string;
  response?: string;
}

export const reviewsData: Review[] = [
  {
    name: "Yvonne Rivera",
    initials: "YR",
    color: "bg-rose-500",
    date: "March 2026",
    rating: 5,
    text: "West Peak Trenchless came out to our commercial property for a sewer line issue. They were incredibly professional and explained everything clearly. The trenchless repair saved us from tearing up our parking lot. Highly recommend their services!",
    response: "Thank you, Yvonne! We're glad we could save your parking lot from excavation. We appreciate your trust in our team.",
  },
  {
    name: "Megan O'Neill",
    initials: "MO",
    color: "bg-blue-500",
    date: "March 2026",
    rating: 5,
    text: "Outstanding service from start to finish. Juan and his team diagnosed our pipe problem quickly with their camera inspection and had it fixed the same day using CIPP lining. No mess, no digging. Five stars all the way!",
    response: "Thanks so much, Megan! We love hearing that our trenchless solutions made the process easy for you.",
  },
  {
    name: "Charley Diaz",
    initials: "CD",
    color: "bg-emerald-500",
    date: "February 2026",
    rating: 5,
    text: "We had a major sewer backup at our restaurant and needed emergency service. West Peak was there within the hour and had everything flowing again. Their hydro jetting service was exactly what we needed. Lifesavers!",
    response: "Thank you, Charley! We understand how critical plumbing is for restaurants. Glad we could get you back up and running fast.",
  },
  {
    name: "Paola Carbajal",
    initials: "PC",
    color: "bg-violet-500",
    date: "February 2026",
    rating: 5,
    text: "Juan and the West Peak team replaced our aging sewer line using pipe bursting. The whole job was done in one day with minimal disruption to our tenants. Very impressed with their professionalism and expertise.",
    response: "We appreciate the kind words, Paola! Pipe bursting is a great solution for aging lines, and we're happy it worked perfectly for your property.",
  },
  {
    name: "Jesus Padilla",
    initials: "JP",
    color: "bg-amber-500",
    date: "January 2026",
    rating: 5,
    text: "Best plumbing company in the Bay Area, hands down. They fixed our commercial water heater and did a full inspection of our plumbing system. Fair pricing and top-notch work. Will definitely use them again.",
    response: "Thank you, Jesus! We strive to be the best, and reviews like yours keep us motivated. See you next time!",
  },
  {
    name: "M A",
    initials: "MA",
    color: "bg-cyan-500",
    date: "January 2026",
    rating: 5,
    text: "Called West Peak for a clogged main line at our office building. They came out the same day, did a video inspection, and cleared everything with hydro jetting. Very thorough and professional service.",
    response: "Thanks, M A! We're glad our same-day service and hydro jetting got everything cleared up for your building.",
  },
  {
    name: "Zoe Smith",
    initials: "ZS",
    color: "bg-pink-500",
    date: "December 2025",
    rating: 5,
    text: "West Peak did a trenchless sewer repair for our property management company. They were able to line multiple pipes in a single day. The communication throughout the project was excellent. Highly recommend!",
    response: "Thank you, Zoe! We love working with property management companies and are glad the multi-pipe lining went smoothly.",
  },
  {
    name: "Jon Kay",
    initials: "JK",
    color: "bg-indigo-500",
    date: "December 2025",
    rating: 5,
    text: "Excellent experience with West Peak. They replaced our old commercial water heater efficiently and at a very competitive price. The team was courteous and cleaned up everything after the job. A+ service.",
    response: "We appreciate the review, Jon! Glad we could deliver great service at a fair price.",
  },
  {
    name: "Jim Baldwin",
    initials: "JB",
    color: "bg-teal-500",
    date: "November 2025",
    rating: 5,
    text: "Had West Peak come out for a sewer camera inspection and they found root intrusion in our lateral line. They recommended CIPP lining and the repair was seamless. No excavation needed. Very happy with the results.",
    response: "Thank you, Jim! Root intrusion is a common issue and CIPP is the perfect no-dig solution. Glad it worked out great!",
  },
  {
    name: "Sarah Chen",
    initials: "SC",
    color: "bg-orange-500",
    date: "November 2025",
    rating: 5,
    text: "We manage several commercial properties and West Peak is our go-to for all plumbing and sewer needs. Their preventative maintenance program has saved us thousands in potential repairs. Reliable and trustworthy team.",
    response: "Thank you, Sarah! We value our ongoing relationship with your properties. Preventative maintenance is always the smartest investment.",
  },
  {
    name: "Robert Martinez",
    initials: "RM",
    color: "bg-lime-500",
    date: "October 2025",
    rating: 5,
    text: "West Peak handled a complex pipe bursting job at our commercial facility. They coordinated everything with our operations team to minimize downtime. Professional, efficient, and excellent results.",
    response: "Thanks, Robert! We always work closely with our commercial clients to ensure minimal disruption. Glad it went smoothly!",
  },
  {
    name: "Diana Flores",
    initials: "DF",
    color: "bg-fuchsia-500",
    date: "October 2025",
    rating: 5,
    text: "Called for an emergency drain cleaning at our medical office. West Peak responded quickly and resolved the issue without any disruption to our patients. Can't ask for better service than that!",
    response: "Thank you, Diana! We understand the importance of keeping medical facilities running smoothly. Happy to help anytime!",
  },
];

export const aggregateStats = {
  totalReviews: 181,
  averageRating: 5.0,
  fiveStarPercent: 97.8,
  fourStarPercent: 1.7,
  threeStarPercent: 0.5,
  twoStarPercent: 0,
  oneStarPercent: 0,
};
