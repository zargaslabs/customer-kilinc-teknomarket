import Image from "next/image"

import { products, productsWhatsAppMessage } from "@/lib/data/products"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"

export function ProductGrid() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                <product.icon className="size-5" />
              </span>
              <p className="text-sm font-medium text-foreground">
                {product.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Image
              src="/images/store/kilinc-teknomarket-telefon-kiliflari.png"
              alt="Kılınç Teknomarket telefon kılıfı ve aksesuar reyonu"
              fill
              sizes="(min-width: 640px) 220px, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Image
              src="/images/store/kilinc-teknomarket-bilgisayar-aksesuarlari.png"
              alt="Kılınç Teknomarket bilgisayar aksesuarları reyonu"
              fill
              sizes="(min-width: 640px) 220px, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <WhatsAppButton
          message={productsWhatsAppMessage}
          label="Stok Durumunu WhatsApp'tan Sorun"
          className="mt-8"
        />
      </div>
    </section>
  )
}
