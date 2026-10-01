/**
 * Tek NAP (Name / Address / Phone) kaynağı.
 *
 * Header, Footer, İletişim bölümü ve LocalBusiness/Organization schema'sı hep
 * bu dosyadan beslenir. Bir alan değişirse SADECE burası güncellenir; site
 * genelinde otomatik yayılır.
 */

export type WorkingHours = {
  day: "Pazartesi" | "Salı" | "Çarşamba" | "Perşembe" | "Cuma" | "Cumartesi" | "Pazar"
  opens: string
  closes: string
}

const dailyHours = { opens: "08:00", closes: "21:00" }

export const business = {
  name: "Kılınç Teknomarket",
  description:
    "Kılınç Teknomarket, İstanbul genelinde uydu ve çanak anten kurulumu, kamera sistemleri, elektrik ve internet arıza servisi sunar. Beyoğlu'ndaki mağazamızda telefon ve bilgisayar tamiri ile teknoloji ürünleri satışı yapılır.",

  address: {
    streetAddress: "Camiikebir, Kızılay Meydanı Cd. No:9",
    addressLocality: "Beyoğlu",
    addressRegion: "İstanbul",
    postalCode: "34421",
    addressCountry: "TR",
  },
  fullAddress: "Camiikebir, Kızılay Meydanı Cd. No:9, 34421 Beyoğlu/İstanbul",

  // Mağazanın sabit/çağrı telefon numarası (0535 769 54 63). "Hemen Ara"
  // butonu ve LocalBusiness schema'daki "telephone" alanı bu değeri kullanır.
  phone: "905357695463" as string | null,

  // WhatsApp Business numarası (telefonla aynı). Tüm "WhatsApp'tan Yaz"
  // CTA'ları bu değeri kullanır.
  whatsapp: "905357695463" as string | null,

  // Haftalık çalışma saatleri: Pazartesi - Pazar, 08:00 - 21:00.
  workingHours: [
    { day: "Pazartesi", ...dailyHours },
    { day: "Salı", ...dailyHours },
    { day: "Çarşamba", ...dailyHours },
    { day: "Perşembe", ...dailyHours },
    { day: "Cuma", ...dailyHours },
    { day: "Cumartesi", ...dailyHours },
    { day: "Pazar", ...dailyHours },
  ] as WorkingHours[] | null,

  // Mağazanın enlem/boylam koordinatı. İşletmenin kendi Google Maps yer
  // linkinden (bkz. googleMapsUrl) alınmıştır. LocalBusiness schema'daki
  // "geo" alanı için kullanılır.
  geo: { latitude: 41.0341314, longitude: 28.9661493 } as {
    latitude: number
    longitude: number
  } | null,

  // Google Business Profile "yorum bırak" kısayol linki. /yorum-birak
  // sayfası ve tüm "Google'da Yorum Yap" CTA'ları bu değeri kullanır.
  googleReviewUrl: "https://g.page/r/CUzsMPTtvl2HEBM/review" as string | null,

  // Instagram profil linki. Organization schema'daki "sameAs" alanı için
  // kullanılır.
  instagramUrl: "https://www.instagram.com/kilinc_tekno_market/" as string | null,

  // Instagram kullanıcı adı (işletmenin bildirdiği yazımıyla). Bu bir hesap
  // adresidir; işletme adı yazım kuralından bağımsız olarak birebir korunur.
  instagramHandle: "Kilinc_tekno_market" as string | null,

  // İşletmenin gerçek Google Maps "yer" (place) linki. "Google'da Aç"
  // butonu bu değeri kullanır (bkz. getGoogleMapsSearchUrl).
  googleMapsUrl: "https://maps.app.goo.gl/vqFHJrebvPBjT3jdA" as string | null,

  // Google işletme kaydının kimlikleri. Tahmin değildir: Place ID, resmi yorum
  // linkinin (googleReviewUrl) yönlendirdiği adresten; CID ise googleMapsUrl'in
  // açtığı yer kaydından alınmıştır. Harita gömme ve yol tarifi linkleri adres
  // araması yerine doğrudan bu kaydı gösterir.
  googlePlaceId: "ChIJK-_wXYu5yhQRTOww9O2-XYc" as string | null,
  googleCid: "9754162297167735884" as string | null,

  // Fiziksel mağaza Beyoğlu'nda (bkz. address); saha hizmetleri ise İstanbul
  // genelinde, iki yakada da verilir. İlçe listesi bilinçli olarak tutulmaz.
  serviceArea: {
    city: "İstanbul",
    sides: ["Avrupa Yakası", "Anadolu Yakası"],
  },

  whatsappDefaultMessage:
    "Merhaba, Kılınç Teknomarket web sitesinden yazıyorum. Bilgi almak istiyorum.",
}

export function getWhatsAppUrl(message: string = business.whatsappDefaultMessage) {
  if (!business.whatsapp) return "#"
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}

export function getPhoneHref() {
  return business.phone ? `tel:+${business.phone}` : "#"
}

// "905357695463" -> "0535 769 54 63" (insan tarafından okunabilir gösterim).
// business.phone/whatsapp ise tel:/wa.me linkleri için ham rakam formatında
// kalır.
export function getPhoneDisplay() {
  if (!business.phone) return null
  const local = business.phone.replace(/^90/, "0")
  const match = local.match(/^(\d{4})(\d{3})(\d{2})(\d{2})$/)
  return match ? `${match[1]} ${match[2]} ${match[3]} ${match[4]}` : local
}

// Tüm günler aynı saatlerdeyse "Her gün 08:00 - 21:00" gibi tek satırlık
// okunabilir bir özet üretir.
export function getWorkingHoursDisplay() {
  const hours = business.workingHours
  if (!hours || hours.length === 0) return null

  const [first, ...rest] = hours
  const allSame = rest.every(
    (item) => item.opens === first.opens && item.closes === first.closes
  )

  if (allSame && hours.length === 7) {
    return `Her gün ${first.opens} - ${first.closes}`
  }

  return `${first.day} ${first.opens} - ${first.closes}`
}

export function getGoogleMapsSearchUrl() {
  if (business.googleMapsUrl) return business.googleMapsUrl
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.fullAddress
  )}`
}

export function getGoogleMapsDirectionsUrl() {
  const destination = encodeURIComponent(`${business.name}, ${business.fullAddress}`)
  const placeId = business.googlePlaceId
    ? `&destination_place_id=${business.googlePlaceId}`
    : ""
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}${placeId}`
}

export function getGoogleMapsEmbedUrl() {
  if (business.googleCid) {
    return `https://www.google.com/maps?cid=${business.googleCid}&output=embed`
  }
  return `https://www.google.com/maps?q=${encodeURIComponent(
    business.fullAddress
  )}&output=embed`
}
