import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { getServiceWhatsAppMessage, type Service } from "@/lib/data/services"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <span className="flex size-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
          <service.icon className="size-5.5" />
        </span>
        {/* Hizmet adları hedeflenen SEO anahtar kelimeleriyle örtüştüğü için
            gerçek h3 kullanılıyor (shadcn CardTitle sadece div render eder). */}
        <h3 className="mt-3 font-heading text-base leading-snug font-medium text-foreground">
          {service.title}
        </h3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-muted-foreground">{service.summary}</p>

        <ul className="grid gap-1.5">
          {service.subServices.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-foreground/80"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2">
          <Button
            variant="outline"
            size="default"
            render={<Link href={`/${service.slug}`} />}
            nativeButton={false}
            className="w-full"
          >
            Detayları İncele
          </Button>
          <WhatsAppButton
            message={getServiceWhatsAppMessage(service)}
            label="WhatsApp'tan Sor"
            variant="outline"
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  )
}
