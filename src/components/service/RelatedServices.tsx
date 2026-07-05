import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { services, type Service } from "@/lib/data/services"

export function RelatedServices({ current }: { current: Service }) {
  if (!current.relatedSlugs || current.relatedSlugs.length === 0) return null

  const related = current.relatedSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service))

  if (related.length === 0) return null

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          İlgili Hizmetler
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-blue-600"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                  <service.icon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-foreground">
                  {service.shortTitle}
                </p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
