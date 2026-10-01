import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/seo"

// Tüm sayfalar artık gerçek (Sprint 5 tamamlandı): 5 servis sayfası
// (telefon-tamiri, bilgisayar-tamiri, kamera-sistemleri, uydu-sistemleri,
// elektrik-internet-hizmetleri) + /urunler, /hakkimizda, /iletisim. Bu
// sitemap'teki hiçbir URL 404 vermez, Google Search Console'a submit edilmeye
// hazır.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  // İşletmenin öne çıkarmak istediği hizmet: uydu ve çanak anten.
  { path: "/uydu-sistemleri", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kamera-sistemleri", priority: 0.8, changeFrequency: "monthly" },
  { path: "/elektrik-internet-hizmetleri", priority: 0.8, changeFrequency: "monthly" },
  { path: "/telefon-tamiri", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bilgisayar-tamiri", priority: 0.7, changeFrequency: "monthly" },
  { path: "/urunler", priority: 0.6, changeFrequency: "monthly" },
  { path: "/hakkimizda", priority: 0.5, changeFrequency: "yearly" },
  { path: "/iletisim", priority: 0.6, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
