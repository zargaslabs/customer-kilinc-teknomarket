import { getServiceWhatsAppMessage, type Service } from "@/lib/data/services"
import { breadcrumbSchema } from "@/lib/schema/breadcrumb"
import { faqPageSchema } from "@/lib/schema/faqPage"
import { serviceSchema } from "@/lib/schema/service"
import { JsonLd } from "@/components/seo/JsonLd"
import { ServiceHero } from "@/components/service/ServiceHero"
import { ServiceProblems } from "@/components/service/ServiceProblems"
import { ServiceCapabilities } from "@/components/service/ServiceCapabilities"
import { RelatedServices } from "@/components/service/RelatedServices"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { FAQSection } from "@/components/sections/FAQSection"
import { CTASection } from "@/components/sections/CTASection"

export function ServicePageTemplate({ service }: { service: Service }) {
  const breadcrumbItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: service.shortTitle, path: `/${service.slug}` },
  ]

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      {service.faq && service.faq.length > 0 && (
        <JsonLd data={faqPageSchema(service.faq)} />
      )}

      <ServiceHero service={service} breadcrumbItems={breadcrumbItems} />
      <ServiceProblems service={service} />
      <ServiceCapabilities service={service} />
      <WhyChooseUs />
      <ProcessSteps />
      <RelatedServices current={service} />
      {service.faq && service.faq.length > 0 && (
        <FAQSection
          items={service.faq}
          heading={`${service.shortTitle} Hakkında Sıkça Sorulan Sorular`}
          intro={`${service.title} ile ilgili müşterilerimizin en çok merak ettiği sorular.`}
        />
      )}
      <CTASection
        title={`${service.shortTitle} İçin Hemen Yazın`}
        description={`${service.title} hakkında sorularınız için WhatsApp'tan yazın, size hızlıca dönelim.`}
        whatsappMessage={getServiceWhatsAppMessage(service)}
      />
    </>
  )
}
