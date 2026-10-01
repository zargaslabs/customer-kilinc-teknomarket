import { NextResponse } from "next/server"

import { business } from "@/lib/data/business"
import { absoluteUrl } from "@/lib/seo"

// QR ve NFC kartlarında kullanılacak kısa adres: resmi Google yorum linkine
// yönlendirir. Basılı kartlar bu adresi taşıyacağı için yönlendirme kalıcı
// (308) değil geçicidir (307); hedef link ileride değişirse tarayıcılar eski
// hedefi önbellekten kullanmaz. Arama dizinine girmez, sitemap'te yer almaz.
export const dynamic = "force-static"

export function GET() {
  const destination = business.googleReviewUrl ?? absoluteUrl("/yorum-birak")

  return NextResponse.redirect(destination, {
    status: 307,
    headers: { "X-Robots-Tag": "noindex, nofollow" },
  })
}
