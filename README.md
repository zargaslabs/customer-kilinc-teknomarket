Kılınç Teknomarket — SEO-first, mobil-first, conversion-focused yerel işletme web sitesi. Mimari ve içerik kuralları için [CLAUDE.md](./CLAUDE.md) ve [docs/](./docs) klasörüne bakın.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini açın.

Doğrulama:

```bash
npx tsc --noEmit
npx eslint .
npm run build
```

## Ortam Değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.example .env.local
```

| Değişken | Açıklama |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sitenin canlı domain'i. Canonical URL, Open Graph/Twitter metadata, `sitemap.xml` ve `robots.txt` bu değeri kullanır (bkz. `src/lib/seo.ts`). |

## ⚠️ Canlıya Almadan Önce — Tek Blokaj: Domain

Site içeriği ve işletme verileri (telefon, WhatsApp, çalışma saatleri, Google
Maps, Google Review, Instagram) **tamamlandı**. Canlıya almadan önce yapılması
gereken tek şey **gerçek domain'i bağlamak**:

`src/lib/seo.ts` içindeki `siteUrl`, `NEXT_PUBLIC_SITE_URL` env değişkeni set
edilmezse `https://www.kilinc-teknomarket.com` placeholder'ına düşer. Bu,
geliştirmeyi engellemeyen bir tercih ama **canlıya almadan önce mutlaka gerçek
domain ile değiştirilmelidir** — aksi halde canonical URL'ler, Open Graph
linkleri ve sitemap yanlış domain'i işaret eder.

Yapılması gereken:

1. Gerçek domain'i Vercel'de (veya kullanılan platformda) bu projeye bağlayın.
2. Deploy platformunda `NEXT_PUBLIC_SITE_URL` env değişkenini gerçek domain ile
   set edin (örn. `https://www.kilinc-teknomarket.com`).
3. `npm run build` sonrası `/sitemap.xml` ve sayfa kaynağındaki
   `<link rel="canonical">` etiketlerinin doğru domain'i gösterdiğini kontrol
   edin.

### Opsiyonel: kalan tek veri alanı

`src/lib/data/business.ts` içinde `geo` (enlem/boylam) hâlâ `null`. Google
Business Profile'dan alınıp girilirse LocalBusiness schema'ya `geo`
koordinatı eklenir — SEO açısından faydalı ama zorunlu değil, site bu alan
olmadan da tam işlevsel.

## Deploy

Bu proje [Vercel](https://vercel.com/new) için hazırlanmıştır:

1. Repository'yi Vercel'e bağlayın.
2. `NEXT_PUBLIC_SITE_URL` env değişkenini Production/Preview için ayarlayın.
3. Deploy edin.
4. Deploy sonrası: `/sitemap.xml`, `/robots.txt`, ve birkaç sayfanın
   `<link rel="canonical">` etiketini gerçek domain ile kontrol edin.
5. Google Search Console'a domain'i ekleyip sitemap'i submit edin (sitemap
   9 sayfa içerir; `/yorum-birak` bilinçli olarak `noindex` ve sitemap dışı
   tutulmuştur).

## Sprint 7B — Deploy Öncesi Kalite Kontrolü (tamamlandı)

Tüm 10 sayfa (`/`, 5 servis sayfası, `/urunler`, `/hakkimizda`, `/iletisim`,
`/yorum-birak`) tek tek denetlendi: her sayfada tek H1, benzersiz
title/description/canonical/OpenGraph/Twitter metadata, doğru JSON-LD
(Organization, LocalBusiness, Service, BreadcrumbList, FAQPage). Tüm CTA'lar
(WhatsApp, Hemen Ara, Google'da Aç, Yol Tarifi, Google Yorum, Instagram)
gerçek tıklama ile test edildi. Playwright ile masaüstü + mobilde görsel
kontrol ve konsol hatası taraması yapıldı — hiçbir sayfada yatay taşma veya
konsol hatası yok.

## Yapı

- Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui
- Veri katmanı: `src/lib/data/` (business, services, products, faq — tek
  kaynak, TODO'lar veri eksikliklerini işaretler)
- SEO: `src/lib/seo.ts` (metadata helper) + `src/lib/schema/` (JSON-LD
  builder'lar) + `src/app/sitemap.ts` + `src/app/robots.ts`
