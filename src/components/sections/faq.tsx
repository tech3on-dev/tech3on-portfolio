import { faqs } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about working with TECH3ON. Can't find your answer? Reach out and we'll respond within one business day."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
