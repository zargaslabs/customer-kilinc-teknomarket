import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Star, Users } from "lucide-react"

import { business } from "@/lib/data/business"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"

// Gerçek Google puanı/yorum sayısı netleşene kadar abartılı rakam yerine
// güvenli, doğrulanabilir ifadeler kullanılıyor (bkz. business.googleReviewUrl).
const trustBadges = [
  { icon: Star, label: "Google Yorumları Yakında" },
  { icon: Users, label: "Memnun Yerel Müşteriler" },
  { icon: Clock, label: "Aynı Gün Servis" },
  { icon: MapPin, label: "İstanbul Avrupa Yakası" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <Badge
            variant="outline"
            className="border-white/20 text-slate-200"
          >
            <MapPin data-icon="inline-start" />
            Beyoğlu / Kasımpaşa
          </Badge>

          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Beyoğlu&apos;nun Güvenilir Teknoloji ve Teknik Servis Noktası
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {business.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg" />
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/#hizmetler" />}
              nativeButton={false}
              className="h-11 border-white/20 bg-transparent px-5 text-base text-white hover:bg-white/10"
            >
              Hizmetleri İncele
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                <badge.icon className="size-3.5 text-blue-400" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/images/store/kilinc-teknomarket-magaza-dis-cephe.png"
              alt="Kılınç Teknomarket Beyoğlu mağaza dış cephe"
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
