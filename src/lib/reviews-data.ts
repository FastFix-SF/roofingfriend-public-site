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
    text: "The Roofing Friend installed a new standing seam metal roof on our commercial property. They were incredibly professional and explained everything clearly. The crew finished ahead of schedule and the finish looks incredible. Highly recommend!",
    response: "Thank you, Yvonne! We're glad the standing seam came out beautifully. We appreciate your trust in our team.",
  },
  {
    name: "Megan O'Neill",
    initials: "MO",
    color: "bg-blue-500",
    date: "March 2026",
    rating: 5,
    text: "Outstanding service from start to finish. The team did a drone survey, walked us through every panel option, and installed a gorgeous PVDF standing seam roof in two days. Five stars all the way!",
    response: "Thanks so much, Megan! We love hearing that the install process was easy from quote to completion.",
  },
  {
    name: "Charley Diaz",
    initials: "CD",
    color: "bg-emerald-500",
    date: "February 2026",
    rating: 5,
    text: "We had storm damage on our restaurant roof and needed emergency tarp + repair. The Roofing Friend was on-site within the hour and had a permanent metal repair done by the next afternoon. Lifesavers!",
    response: "Thank you, Charley! We understand how critical the roof is for restaurants. Glad we could get you back open fast.",
  },
  {
    name: "Paola Carbajal",
    initials: "PC",
    color: "bg-violet-500",
    date: "February 2026",
    rating: 5,
    text: "The Roofing Friend reroofed our multi-unit property with R-Panel metal. The whole job was done in three days with minimal disruption to our tenants. Very impressed with their professionalism and craftsmanship.",
    response: "We appreciate the kind words, Paola! R-Panel is a great solution for multi-unit properties — happy it worked perfectly.",
  },
  {
    name: "Jesus Padilla",
    initials: "JP",
    color: "bg-amber-500",
    date: "January 2026",
    rating: 5,
    text: "Best roofing company in the Bay Area, hands down. They installed a standing seam roof on our commercial building and handled all the Title 24 paperwork for our PG&E rebate. Fair pricing and top-notch work.",
    response: "Thank you, Jesus! We strive to be the best, and reviews like yours keep us motivated. See you next time!",
  },
  {
    name: "M A",
    initials: "MA",
    color: "bg-cyan-500",
    date: "January 2026",
    rating: 5,
    text: "Called The Roofing Friend for a leak on our office building. They came out same day, found the failed flashing, and replaced it permanently with custom metal. Very thorough and professional.",
    response: "Thanks, M A! We're glad our same-day response and custom flashing fab solved the leak for good.",
  },
  {
    name: "Zoe Smith",
    initials: "ZS",
    color: "bg-pink-500",
    date: "December 2025",
    rating: 5,
    text: "The Roofing Friend installed standing seam roofs on three properties for our property management company. They coordinated everything and finished on schedule. Communication throughout the project was excellent.",
    response: "Thank you, Zoe! We love working with property management companies and are glad the multi-roof install went smoothly.",
  },
  {
    name: "Jon Kay",
    initials: "JK",
    color: "bg-indigo-500",
    date: "December 2025",
    rating: 5,
    text: "Excellent experience with The Roofing Friend. They replaced our aging TPO with a new standing seam metal roof and the energy savings have been noticeable. Team was courteous and cleaned up everything. A+ service.",
    response: "We appreciate the review, Jon! Glad the metal-over-TPO retrofit is already paying off.",
  },
  {
    name: "Jim Baldwin",
    initials: "JB",
    color: "bg-teal-500",
    date: "November 2025",
    rating: 5,
    text: "Had The Roofing Friend come out for a roof inspection — they found three areas of concern, walked me through each one with photos, and gave me an honest repair-vs-replace analysis. Ended up with a beautiful new metal roof.",
    response: "Thank you, Jim! Honest assessments are the foundation of how we work. Glad the new roof looks great!",
  },
  {
    name: "Sarah Chen",
    initials: "SC",
    color: "bg-orange-500",
    date: "November 2025",
    rating: 5,
    text: "We manage several commercial properties and The Roofing Friend is our go-to for all metal roofing and TPO needs. Their preventative maintenance program has saved us thousands in potential repairs. Reliable and trustworthy team.",
    response: "Thank you, Sarah! We value our ongoing relationship with your properties. Preventative maintenance is always the smartest investment.",
  },
  {
    name: "Robert Martinez",
    initials: "RM",
    color: "bg-lime-500",
    date: "October 2025",
    rating: 5,
    text: "The Roofing Friend handled a complex phased reroof on our commercial facility. They coordinated everything with our operations team to keep production running. Professional, efficient, and excellent results.",
    response: "Thanks, Robert! We always work closely with our commercial clients to ensure minimal disruption. Glad it went smoothly!",
  },
  {
    name: "Diana Flores",
    initials: "DF",
    color: "bg-fuchsia-500",
    date: "October 2025",
    rating: 5,
    text: "Called for an emergency tarp and leak repair on our medical office. The Roofing Friend responded quickly and resolved the issue without any disruption to our patients. Can't ask for better service than that!",
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
