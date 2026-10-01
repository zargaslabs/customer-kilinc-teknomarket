import { services } from "@/lib/data/services"
import { productsHighlight } from "@/lib/data/products"
import { ServiceCard } from "@/components/sections/ServiceCard"

// Gerçek hizmet sayfaları + ürünler kartı. Ürünler kartı bilinçli olarak
// services dizisine eklenmez (sitemap ve servis şeması yalnızca hizmetleri
// kapsar), ama kullanıcı ana sayfada tüm alanları tek bakışta görsün diye
// aynı kart bileşeniyle burada gösterilir.
const cards = [...services, productsHighlight]

export function ServiceGrid() {
  return (
    <section id="hizmetler" className="scroll-mt-16 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Hizmetlerimiz
          </h2>
          <p className="mt-3 text-muted-foreground">
            Uydu ve çanak anten kurulumundan kamera sistemlerine, elektrik ve
            internet arızalarından telefon ve bilgisayar tamirine kadar
            İstanbul genelinde ihtiyacınız olan teknik hizmetler tek adreste.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
