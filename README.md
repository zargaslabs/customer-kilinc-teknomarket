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

- Site Vercel'de yayında: https://customer-kilinc-teknomarket.vercel.app
  (geçici adres; gerçek alan adı henüz satın alınmadı).
- 10 sayfa: `/`, 5 hizmet sayfası, `/urunler`, `/hakkimizda`, `/iletisim`,
  `/yorum-birak` (`noindex`, sitemap dışı).
- Konumlandırma: fiziksel mağaza Beyoğlu'nda, saha hizmetleri İstanbul
  genelinde (Avrupa Yakası ve Anadolu Yakası). İlçe sayfası yok.
- Hizmet önceliği: uydu ve çanak anten → kamera, elektrik-internet → telefon
  ve bilgisayar tamiri → ürün satışı.
- İşletme verileri (`src/lib/data/business.ts`) gerçek: telefon, WhatsApp,
  adres, çalışma saatleri, koordinat, Instagram, Google Maps kaydı, resmi
  Google yorum linki, Place ID ve CID.
- Harita gömme ve yol tarifi doğrudan Google işletme kaydını gösterir.
- Open Graph görseli: `public/images/og/kilinc-teknomarket-og.jpg` (1200x630).

## Ortam Değişkenleri

| Değişken | Açıklama |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sitenin canlı adresi. Canonical URL, Open Graph/Twitter metadata, JSON-LD, `sitemap.xml` ve `robots.txt` bu değeri kullanır (bkz. `src/lib/seo.ts`). |

Vercel'de şu an geçici `vercel.app` adresine ayarlıdır. Yerelde `.env.example`
dosyasını `.env.local` olarak kopyalayabilirsiniz.

## Alan Adı Bağlanınca Yapılacaklar

Gerçek alan adı **henüz alınmadı**. `src/lib/seo.ts` içindeki yedek değer
(`https://www.kilinc-teknomarket.com`) yalnızca env değişkeni yokken kullanılan
bir yer tutucudur.

1. Alan adını Vercel projesine bağlayın (www / çıplak alan adı yönlendirmesi
   dahil).
2. Vercel'de `NEXT_PUBLIC_SITE_URL` değerini gerçek alan adıyla güncelleyip
   yeniden deploy edin.
3. `src/lib/seo.ts` içindeki yedek değeri ve `.env.example` dosyasını aynı
   alan adıyla güncelleyin.
4. `/sitemap.xml`, `/robots.txt`, canonical etiketleri ve JSON-LD `url`
   alanlarının yeni alan adını gösterdiğini kontrol edin.
5. Google Search Console'a alan adını ekleyin, doğrulayın, sitemap gönderin.
6. Google İşletme Profili'ndeki web sitesi alanını yeni alan adıyla güncelleyin.
7. İstenirse Google Analytics (GA4) bağlayın.

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
