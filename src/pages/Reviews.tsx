import { Helmet } from "react-helmet-async";
import { Star, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import { reviewsData, aggregateStats } from "@/lib/reviews-data";
import heroReviews from "@/assets/hero-reviews.jpg";
import heroReviewsWebp from "@/assets/hero-reviews.webp";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} className={i < rating ? "fill-cta-gold text-cta-gold" : "text-border"} />
    ))}
  </div>
);

const RatingBar = ({ label, percent }: { label: string; percent: number }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="w-12 text-right text-muted-foreground">{label}</span>
    <div className="flex-1 h-2.5 bg-secondary rounded-full overflow-hidden">
      <div className="h-full bg-cta-gold rounded-full transition-all" style={{ width: `${percent}%` }} />
    </div>
    <span className="w-12 text-muted-foreground">{percent}%</span>
  </div>
);

const Reviews = () => (
  <>
    <Helmet>
      <title>Reviews | The Roofing Friend — 5.0 Stars</title>
      <meta name="description" content="See why The Roofing Friend has a 5.0 star rating from 181+ Google reviews. Read real customer testimonials about our metal roofing across the SF Bay Area." />
      <link rel="canonical" href="https://theroof.info/reviews" />
      <link rel="preload" as="image" href={heroReviewsWebp} type="image/webp" fetchPriority="high" />
      <meta property="og:title" content="Reviews | The Roofing Friend — 5.0 Stars" />
      <meta property="og:description" content="181+ Google reviews with a 5.0 star rating. Read real customer testimonials about our premium metal roofing." />
      <meta property="og:url" content="https://theroof.info/reviews" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        name: "The Roofing Friend",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: aggregateStats.averageRating,
          reviewCount: aggregateStats.totalReviews,
          bestRating: 5,
          worstRating: 1,
        },
        review: reviewsData.slice(0, 5).map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          datePublished: r.date,
          reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.text,
        })),
      })}</script>
    </Helmet>

    <Navbar />
    <ServiceHero title="Customer Reviews" tagline="Don't just take our word for it — hear from our satisfied customers across the Bay Area." backgroundImage={heroReviews} backgroundImageWebp={heroReviewsWebp} />

    {/* Aggregate Stats */}
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold text-foreground">{aggregateStats.totalReviews}+ Google Reviews</p>
            <div className="flex items-center justify-center md:justify-start gap-2 my-3">
              <span className="text-3xl md:text-4xl font-bold text-cta-gold">{aggregateStats.averageRating.toFixed(1)}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} className="fill-cta-gold text-cta-gold" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">average</span>
            </div>
            <p className="text-muted-foreground">{aggregateStats.fiveStarPercent}% of customers rated us <span className="font-semibold text-foreground">5 stars</span></p>
          </div>
          <div className="space-y-3">
            <RatingBar label="5 star" percent={aggregateStats.fiveStarPercent} />
            <RatingBar label="4 star" percent={aggregateStats.fourStarPercent} />
            <RatingBar label="3 star" percent={aggregateStats.threeStarPercent} />
            <RatingBar label="2 star" percent={aggregateStats.twoStarPercent} />
            <RatingBar label="1 star" percent={aggregateStats.oneStarPercent} />
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviewsData.map((review, i) => (
            <div key={i} className="bg-secondary rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-sm text-foreground leading-relaxed mt-3">{review.text}</p>
              {review.response && (
                <div className="mt-4 pl-4 border-l-2 border-cta-gold">
                  <p className="text-xs font-semibold text-foreground mb-1">Response from The Roofing Friend</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{review.response}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=The+Roofing+Friend+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded bg-cta-gold text-btn-primary-fg font-medium hover:opacity-90 transition-all"
          >
            Leave Us a Review on Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>

    <Footer />
    <BottomBar />
  </>
);

export default Reviews;
