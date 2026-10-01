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

## Mevcut Durum

- Site yayında: https://www.kilincteknomarket.com (Vercel üzerinde;
  `kilincteknomarket.com` ve `http://` adresleri buraya yönlenir).
- 13 sayfa: `/`, 5 hizmet sayfası, 3 uydu alt hizmet sayfası, `/urunler`,
  `/hakkimizda`, `/iletisim`, `/yorum-birak` (`noindex`, sitemap dışı).
- `/yorum`: resmi Google yorum linkine yönlendiren kısa adres (QR ve NFC
  kartları için). `src/app/yorum/route.ts` içinde tanımlıdır, `noindex` başlığı taşır
  ve sitemap'te yer almaz. Hedef link `src/lib/data/business.ts` içindeki
  `googleReviewUrl` değeridir.
- Konumlandırma: fiziksel mağaza Beyoğlu'nda, saha hizmetleri İstanbul
  genelinde (Avrupa Yakası ve Anadolu Yakası). İlçe sayfası yok.
- Hizmet önceliği: uydu ve çanak anten → kamera, elektrik-internet → telefon
  ve bilgisayar tamiri → ürün satışı.
- İşletme verileri (`src/lib/data/business.ts`) gerçek: telefon, WhatsApp,
  adres, çalışma saatleri, koordinat, Instagram, Google Maps kaydı, resmi
  Google yorum linki, Place ID ve CID.
- Harita gömme ve yol tarifi doğrudan Google işletme kaydını gösterir.
- Open Graph görseli: `public/images/og/kilinc-teknomarket-og.jpg` (1200x630).

## Alan Adı ve Ortam Değişkenleri

Production adresi `https://www.kilincteknomarket.com`. Alan adı Cloudflare'den
alındı; DNS kayıtları Vercel'i gösterir (proxy kapalı).

| Değişken | Açıklama |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sitenin canlı adresi. metadataBase, canonical URL, Open Graph/Twitter metadata, JSON-LD, `sitemap.xml` ve `robots.txt` bu değeri kullanır (bkz. `src/lib/seo.ts`). |

- Vercel'de Production için `https://www.kilincteknomarket.com` olarak
  tanımlıdır. Tanımlı değilse `src/lib/seo.ts` içindeki varsayılan değer (aynı
  adres) kullanılır.
- `vercel.app` adresi canonical olarak kullanılmaz.
- Yerelde `.env.example` dosyasını `.env.local` olarak kopyalayabilirsiniz.

## Yayın Sonrası Kalan İşler

1. Google Search Console'a alan adını eklemek, doğrulamak, sitemap göndermek.
2. Google İşletme Profili'ndeki web sitesi alanını güncellemek.
3. `/yorum` adresiyle QR / NFC yorum kartlarını hazırlamak.
4. İstenirse Google Analytics (GA4) bağlamak.

## Bekleyen İçerik

- Kamera, elektrik-internet ve bilgisayar hizmetleri için gerçek iş
  fotoğrafları (şu an mağaza fotoğrafları kullanılıyor).
- `public/images/logos/kartvizit.jpeg`, `public/images/logos/qr card.jpeg`,
  `public/images/store/kilinc-teknomarket-tabela.png` ve
  `public/images/store/kilinc-teknomarket-vitrin-eski.png` kodda
  kullanılmıyor; müşteri kaynağı oldukları için silinmedi.

## Yapı

- Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui
- Veri katmanı: `src/lib/data/` (business, services, products, faq — tek
  kaynak)
- SEO: `src/lib/seo.ts` (metadata helper) + `src/lib/schema/` (JSON-LD
  builder'lar) + `src/app/sitemap.ts` + `src/app/robots.ts`
