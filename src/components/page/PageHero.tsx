import Image from "next/image"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { PageBreadcrumbs, type BreadcrumbEntry } from "@/components/seo/PageBreadcrumbs"

type PageHeroProps = {
  breadcrumbItems: BreadcrumbEntry[]
  title: string
  description: string
  image?: string
  imageAlt?: string
  children?: ReactNode
}

export function PageHero({
  breadcrumbItems,
  title,
  description,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageBreadcrumbs items={breadcrumbItems} variant="dark" />
      </div>

      <div
        className={cn(
          "mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28",
          image ? "grid gap-12 lg:grid-cols-2 lg:items-center" : "max-w-3xl"
        )}
      >
        <div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>

          {children && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {children}
            </div>
          )}
        </div>

        {image && (
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
