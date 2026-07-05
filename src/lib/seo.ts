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
  defaultTitle: `${business.name} | Beyoğlu Teknoloji Marketi ve Teknik Servis`,
  description: business.description,
  url: siteUrl,
  locale: "tr_TR",
  // Dedike bir 1200x630 Open Graph görseli hazırlanana kadar gerçek mağaza
  // fotoğrafı fallback olarak kullanılıyor.
  defaultImage: "/images/store/kilinc-teknomarket-magaza-dis-cephe.png",
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
      images: [{ url: imageUrl, width: 1360, height: 765, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}
