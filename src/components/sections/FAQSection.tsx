import type { FaqItem } from "@/lib/data/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FAQSectionProps = {
  items: FaqItem[]
  heading?: string
  intro?: string
}

export function FAQSection({
  items,
  heading = "Sıkça Sorulan Sorular",
  intro = "Uydu ve çanak anten kurulumu, kamera sistemi ve teknik servis hakkında müşterilerimizin en çok sorduğu sorular.",
}: FAQSectionProps) {
  return (
    <section id="sss" className="scroll-mt-16 bg-muted/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          {heading}
        </h2>
        <p className="mt-3 text-muted-foreground">{intro}</p>

        <Accordion className="mt-8">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={index}>
              <AccordionTrigger className="text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
