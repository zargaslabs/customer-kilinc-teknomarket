import Image from "next/image"

import { products, productsWithPhotos, productsWhatsAppMessage } from "@/lib/data/products"
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

        {/* Müşteriden gelen gerçek reyon fotoğrafları. Yalnızca fotoğrafı
            çekilmiş kategoriler burada görünür (bkz. productsWithPhotos). */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productsWithPhotos.map((product) => (
            <div
              key={product.label}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-3/4">
                <Image
                  src={product.image!}
                  alt={product.imageAlt!}
                  fill
                  sizes="(min-width: 1024px) 350px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="p-3 text-sm font-medium text-foreground">
                {product.label}
              </p>
            </div>
          ))}
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
