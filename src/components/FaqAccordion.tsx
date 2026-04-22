import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  /** Emit FAQPage + speakable JSON-LD for AEO/voice search. Pass false if the parent already emits FAQPage schema. */
  emitSchema?: boolean;
}

const FaqAccordion = ({ faqs, title = "Frequently Asked Questions", emitSchema = true }: FaqAccordionProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable-question]", "[data-speakable-answer]"],
    },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
      {emitSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      )}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">{title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger
                data-speakable-question
                className="text-left text-base md:text-lg font-medium text-foreground"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                data-speakable-answer
                className="text-muted-foreground text-base leading-relaxed"
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;
