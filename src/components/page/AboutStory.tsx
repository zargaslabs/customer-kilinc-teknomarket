import Image from "next/image"
import Link from "next/link"

import { services } from "@/lib/data/services"

export function AboutStory() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Beyoğlu&apos;nda Yerel ve Güvenilir Bir Teknoloji İşletmesi
          </h2>
          <p className="mt-4 text-muted-foreground">
            Kılınç Teknomarket, Beyoğlu/Kasımpaşa merkezli bir teknoloji
            marketi ve teknik servis işletmesidir. Mahallemizde uzun süredir
            aynı adreste hizmet veriyor, İstanbul Avrupa Yakası&apos;nın
            genelinden gelen müşterilerimize ulaşılabilir ve şeffaf bir teknik
            destek sunuyoruz.
          </p>
          <p className="mt-4 text-muted-foreground">
            Telefon ve tablet tamiri, bilgisayar ve laptop servisi, uydu ve
            çanak anten kurulumu, kamera güvenlik sistemleri ile teknoloji
            ürünleri satışı alanlarında hizmet veriyoruz. Amacımız, teknik
            sorunları müşterilerimiz için hızlı, net ve güvenilir bir şekilde
            çözmek.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-blue-600"
              >
                <service.icon className="size-4 shrink-0 text-blue-600" />
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:aspect-square">
          <Image
            src="/images/store/kilinc-teknomarket-magaza-dis-cephe-genis.png"
            alt="Kılınç Teknomarket Beyoğlu mağaza dış cephesi"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
