import { business, type WorkingHours } from "@/lib/data/business"
import { services } from "@/lib/data/services"
import { absoluteUrl, siteConfig } from "@/lib/seo"

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
    image: absoluteUrl(siteConfig.defaultImage),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    areaServed: { "@type": "City", name: business.serviceArea.city },
    ...(business.phone && { telephone: `+${business.phone}` }),
    ...(business.googleMapsUrl && { hasMap: business.googleMapsUrl }),
    ...(business.instagramUrl && { sameAs: [business.instagramUrl] }),
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
    // İşletmenin sunduğu ana hizmetler. services dizisinden üretilir, böylece
    // hizmet eklendiğinde/çıkarıldığında schema kendiliğinden güncel kalır.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${business.name} Hizmetleri`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: absoluteUrl(`/${service.slug}`),
        },
      })),
    },
  }
}
