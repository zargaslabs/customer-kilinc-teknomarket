import { business, type WorkingHours } from "@/lib/data/business"
import { siteConfig } from "@/lib/seo"

const schemaDayOfWeek: Record<WorkingHours["day"], string> = {
  Pazartesi: "https://schema.org/Monday",
  Salı: "https://schema.org/Tuesday",
  Çarşamba: "https://schema.org/Wednesday",
  Perşembe: "https://schema.org/Thursday",
  Cuma: "https://schema.org/Friday",
  Cumartesi: "https://schema.org/Saturday",
  Pazar: "https://schema.org/Sunday",
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: business.name,
    description: business.description,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    areaServed: [...business.serviceAreas.primary, business.serviceAreas.broad],
    ...(business.phone && { telephone: `+${business.phone}` }),
    ...(business.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    }),
    ...(business.workingHours && {
      openingHoursSpecification: business.workingHours.map((hours) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: schemaDayOfWeek[hours.day],
        opens: hours.opens,
        closes: hours.closes,
      })),
    }),
  }
}
