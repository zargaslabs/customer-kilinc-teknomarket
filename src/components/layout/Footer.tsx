import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"

import {
  business,
  getPhoneDisplay,
  getPhoneHref,
  getWorkingHoursDisplay,
} from "@/lib/data/business"
import { services } from "@/lib/data/services"
import { ReviewButton } from "@/components/cta/ReviewButton"
import { InstagramIcon } from "@/components/icons/InstagramIcon"

const quickLinks = [
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Neden Biz", href: "/#neden-biz" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "SSS", href: "/#sss" },
  { label: "İletişim", href: "/iletisim" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-lg font-semibold text-white">
            {business.name}
          </p>
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            {business.description}
          </p>
          <div className="mt-5">
            <p className="text-sm text-slate-300">
              Memnun kaldıysanız Google&apos;da bizi değerlendirin.
            </p>
            <ReviewButton
              label="Google'da Yorum Yap"
              className="mt-3 border-white/20 bg-transparent text-white hover:bg-white/10"
            />
          </div>
          {business.instagramUrl && (
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <InstagramIcon className="size-5" />
              Instagram&apos;da Takip Edin
            </a>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Hizmetlerimiz</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Hızlı Linkler</p>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 shrink-0" />
              {business.fullAddress}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-4 shrink-0" />
              {business.phone ? (
                <a href={getPhoneHref()} className="hover:text-white">
                  {getPhoneDisplay()}
                </a>
              ) : (
                "Telefon numarası yakında eklenecek"
              )}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 shrink-0" />
              {getWorkingHoursDisplay() ?? "Çalışma saatleri yakında eklenecek"}
            </span>
          </div>
          <p>
            © {year} {business.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-slate-500 sm:px-6">
          Designed &amp; Developed by{" "}
          <a
            href="https://zargaslab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-400 transition-colors hover:text-white"
          >
            Zargas Labs
          </a>
        </div>
      </div>
    </footer>
  )
}
