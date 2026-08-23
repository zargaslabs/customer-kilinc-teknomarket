import Image from "next/image"

import { getServiceWhatsAppMessage, type Service } from "@/lib/data/services"
import { PageBreadcrumbs, type BreadcrumbEntry } from "@/components/seo/PageBreadcrumbs"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"
import { CallButton } from "@/components/cta/CallButton"

export function ServiceHero({
  service,
  breadcrumbItems,
}: {
  service: Service
  breadcrumbItems: BreadcrumbEntry[]
}) {
  if (!service.hero) return null

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageBreadcrumbs items={breadcrumbItems} variant="dark" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:pb-28">
        <div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {service.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {service.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              size="lg"
              message={getServiceWhatsAppMessage(service)}
            />
            <CallButton
              size="lg"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
            />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src={service.hero.image}
              alt={service.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
