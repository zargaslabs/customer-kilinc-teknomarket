import { Badge } from "@/components/ui/badge"

const brands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Oppo",
  "Huawei",
  "LG",
  "Vestel",
  "Arçelik",
  "Beko",
  "Philips",
]

export function Brands() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Servis Verdiğimiz Markalar
        </h2>
        <p className="mt-3 text-muted-foreground">
          Aşağıdaki markalara ait cihazlarda tamir ve teknik destek
          sağlıyoruz.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {brands.map((brand) => (
            <Badge key={brand} variant="outline" className="px-3 py-1 text-sm">
              {brand}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
