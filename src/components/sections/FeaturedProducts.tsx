import Image from "next/image"
import Link from "next/link"

import { featuredProducts, productsWhatsAppMessage } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"

export function FeaturedProducts() {
  return (
    <section id="urunler" className="scroll-mt-16 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Ürünler ve Aksesuarlar
          </h2>
          <p className="mt-3 text-muted-foreground">
            Uydu ve anten ürünlerinden telefon aksesuarlarına, powerbank ve
            hoparlörden küçük ev aletlerine kadar ihtiyacınız olan ürünleri
            Beyoğlu&apos;ndaki mağazamızda bulabilirsiniz.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
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
              alt="Kılınç Teknomarket telefon kılıfı ve aksesuar ürünleri"
              fill
              sizes="(min-width: 640px) 220px, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Image
              src="/images/store/kilinc-teknomarket-bilgisayar-aksesuarlari.png"
              alt="Kılınç Teknomarket bilgisayar aksesuarları"
              fill
              sizes="(min-width: 640px) 220px, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            message={productsWhatsAppMessage}
            label="Stok Durumunu WhatsApp'tan Sorun"
          />
          <Button
            variant="outline"
            render={<Link href="/urunler" />}
            nativeButton={false}
          >
            Tüm Ürünleri İncele
          </Button>
        </div>
      </div>
    </section>
  )
}
