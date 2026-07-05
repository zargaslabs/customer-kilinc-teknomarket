import { Clock, ExternalLink, MapPin, Navigation, Phone } from "lucide-react"

import {
  business,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
  getGoogleMapsSearchUrl,
  getPhoneDisplay,
  getWorkingHoursDisplay,
} from "@/lib/data/business"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"
import { ReviewButton } from "@/components/cta/ReviewButton"

export function MapSection() {
  return (
    <section id="iletisim" className="scroll-mt-16 bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Adres ve Yol Tarifi
          </h2>

          <div className="mt-6 space-y-4 text-sm">
            <p className="flex items-start gap-2.5 text-foreground/80">
              <MapPin className="mt-0.5 size-5 shrink-0 text-blue-600" />
              {business.fullAddress}
            </p>
            <p className="flex items-start gap-2.5 text-foreground/80">
              <Clock className="mt-0.5 size-5 shrink-0 text-blue-600" />
              {getWorkingHoursDisplay() ?? "Çalışma saatleri yakında eklenecek"}
            </p>
            <p className="flex items-start gap-2.5 text-foreground/80">
              <Phone className="mt-0.5 size-5 shrink-0 text-blue-600" />
              {getPhoneDisplay() ?? "Telefon numarası yakında eklenecek"}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-5 text-base"
              render={
                <a
                  href={getGoogleMapsSearchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              <ExternalLink /> Google&apos;da Aç
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-5 text-base"
              render={
                <a
                  href={getGoogleMapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              <Navigation /> Yol Tarifi Al
            </Button>
            <ReviewButton label="Yorum Yap" size="lg" />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
          <iframe
            src={getGoogleMapsEmbedUrl()}
            title={`${business.name} konum haritası`}
            loading="lazy"
            className="h-80 w-full lg:h-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
