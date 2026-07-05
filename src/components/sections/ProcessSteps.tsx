import { CheckCircle2, MessageCircle, Search, Wrench } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "WhatsApp'tan Yazın veya Arayın",
    description:
      "Arıza ya da ihtiyacınızı kısaca anlatın, mümkünse fotoğraf gönderin.",
  },
  {
    icon: Search,
    title: "Ön Bilgi ve Yönlendirme",
    description:
      "Talebinizi değerlendirip mağazaya gelmeniz mi yoksa yerinde keşif mi gerektiğini söyleriz.",
  },
  {
    icon: Wrench,
    title: "Mağazada Tamir / Yerinde Kurulum",
    description:
      "Cihaz tamirleri mağazamızda, uydu ve kamera kurulumları adresinizde yapılır.",
  },
  {
    icon: CheckCircle2,
    title: "Teslim ve Bilgilendirme",
    description:
      "Yapılan işlem ve varsa garanti süresi hakkında net bilgi vererek cihazınızı teslim ederiz.",
  },
]

export function ProcessSteps() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Nasıl Çalışıyoruz?
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <step.icon className="size-5 text-blue-600" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                {step.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
