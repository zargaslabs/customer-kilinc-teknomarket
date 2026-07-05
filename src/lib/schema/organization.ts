import { business } from "@/lib/data/business"
import { siteConfig } from "@/lib/seo"

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: siteConfig.url,
    description: business.description,
    ...(business.instagramUrl && {
      sameAs: [business.instagramUrl],
    }),
  }
}
