import { MapPin, Store } from "lucide-react"

import { business } from "@/lib/data/business"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"

const areaWhatsAppMessage =
  "Merhaba, adresime servis için gelip gelemeyeceğinizi öğrenmek istiyorum."

export function ServiceArea() {
  const { city, sides } = business.serviceArea

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          Hizmet Bölgesi: {city} Geneli
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {business.name}; uydu ve çanak anten kurulumu, kamera sistemi, elektrik
          ve internet hizmetlerini {city} genelinde adresinize gelerek sunar.
          Telefon ve bilgisayar tamiri ile ürün satışı{" "}
          {business.address.addressLocality}&apos;ndaki mağazamızda yapılır.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {sides.map((side) => (
            <div
              key={side}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-5"
            >
              <MapPin className="size-5 text-blue-600" />
              <p className="text-sm font-medium text-foreground">{side}</p>
              <p className="text-xs text-muted-foreground">
                Yerinde kurulum ve arıza servisi
              </p>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-5">
            <Store className="size-5 text-blue-600" />
            <p className="text-sm font-medium text-foreground">
              {business.address.addressLocality} Mağaza
            </p>
            <p className="text-xs text-muted-foreground">
              Tamir ve ürün satışı
            </p>
          </div>
        </div>

        <WhatsAppButton
          className="mt-8"
          message={areaWhatsAppMessage}
          label="Adresinizi WhatsApp'tan Sorun"
        />
      </div>
    </section>
  )
}
