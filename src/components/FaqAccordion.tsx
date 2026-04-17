import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
}

const FaqAccordion = ({ faqs, title = "Frequently Asked Questions" }: FaqAccordionProps) => (
  <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqAccordion;
