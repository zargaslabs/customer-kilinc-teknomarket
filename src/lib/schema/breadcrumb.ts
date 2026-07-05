import { absoluteUrl } from "@/lib/seo"

export type BreadcrumbItem = {
  name: string
  path: string
}

// Sprint 4/5'te servis ve iletişim sayfalarında görsel breadcrumb ile
// birlikte kullanılacak.
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
