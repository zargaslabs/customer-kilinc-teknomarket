import { services } from "@/lib/data/services"
import { ServiceCard } from "@/components/sections/ServiceCard"

export function ServiceGrid() {
  return (
    <section id="hizmetler" className="scroll-mt-16 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Hizmetlerimiz
          </h2>
          <p className="mt-3 text-muted-foreground">
            Beyoğlu ve çevresinde ihtiyacınız olan tüm teknik servisler tek adreste.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
