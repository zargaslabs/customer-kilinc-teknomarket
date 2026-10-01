import type { Service } from "@/lib/data/services"
import { business } from "@/lib/data/business"
import { absoluteUrl, siteConfig } from "@/lib/seo"

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/${service.slug}`),
    provider: {
      "@type": "ElectronicsStore",
      name: business.name,
      url: siteConfig.url,
    },
    areaServed: { "@type": "City", name: business.serviceArea.city },
  }
}
