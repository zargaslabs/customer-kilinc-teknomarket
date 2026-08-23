import { business } from "@/lib/data/business"
import { absoluteUrl, siteConfig } from "@/lib/seo"

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: siteConfig.url,
    description: business.description,
    logo: absoluteUrl("/images/logos/kilinc-teknomarket-logo.png"),
    ...(business.instagramUrl && {
      sameAs: [business.instagramUrl],
    }),
  }
}
