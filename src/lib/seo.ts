import type { Metadata } from "next"

import { business } from "@/lib/data/business"

// TODO: Gerçek alan adı satın alınıp yayına alınınca NEXT_PUBLIC_SITE_URL env
// değişkeni ile (veya bu placeholder'ı değiştirerek) güncellenecek. Bu değer
// metadataBase, canonical URL'ler ve Open Graph linkleri için tek kaynaktır.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kilinc-teknomarket.com"
).replace(/\/$/, "")

export const siteConfig = {
  name: business.name,
  defaultTitle: `${business.name} | İstanbul Uydu, Çanak Anten ve Teknik Servis`,
  // Arama sonuçlarında kesilmemesi için business.description'ın kısa hali.
  description:
    "İstanbul genelinde uydu ve çanak anten kurulumu, kamera sistemleri, elektrik ve internet arıza servisi. Beyoğlu mağazamızda telefon ve bilgisayar tamiri.",
  url: siteUrl,
  locale: "tr_TR",
  // Gerçek mağaza fotoğrafından üretilmiş 1200x630 Open Graph görseli.
  defaultImage: "/images/og/kilinc-teknomarket-og.jpg",
  defaultImageSize: { width: 1200, height: 630 },
}

export function absoluteUrl(path: string = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${siteUrl}${normalizedPath}`
}

type BuildMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
  // Arama motorlarında görünmesi istenmeyen sayfalar için (örn. /yorum-birak).
  noindex?: boolean
}

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultImage,
  noindex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    ...(noindex && {
      robots: {
        index: false,
        follow: true,
      },
    }),
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: imageUrl, ...siteConfig.defaultImageSize, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}
