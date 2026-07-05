import { MapPin } from "lucide-react"

import { business } from "@/lib/data/business"

export function ServiceArea() {
  const { primary, broad } = business.serviceAreas
  const districts = [...primary, broad]

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          Hizmet Bölgesi
        </h2>
        <p className="mt-4 text-muted-foreground">
          {business.name}, Beyoğlu/Kasımpaşa merkezli olarak aşağıdaki bölgelerde
          uydu kurulumu, kamera sistemi ve teknik servis hizmeti sunar.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {districts.map((district) => (
            <div
              key={district}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-5 text-sm font-medium text-foreground"
            >
              <MapPin className="size-5 text-blue-600" />
              {district}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
