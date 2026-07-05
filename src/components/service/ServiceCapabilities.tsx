import { CheckCircle2 } from "lucide-react"

import type { Service } from "@/lib/data/services"

export function ServiceCapabilities({ service }: { service: Service }) {
  return (
    <section id="neler-yapiyoruz" className="scroll-mt-16 bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Neler Yapıyoruz
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {service.subServices.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
            >
              <CheckCircle2 className="size-5 shrink-0 text-blue-600" />
              <p className="text-sm font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
