import Image from "next/image"
import {
  Clock3,
  MessageCircle,
  ShieldCheck,
  Store,
  Truck,
  Users,
} from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Yerel ve Deneyimli Ekip",
    description: "Beyoğlu/Kasımpaşa'da yıllardır bilinen, güvenilir bir teknik servis ekibi.",
  },
  {
    icon: Clock3,
    title: "Aynı Gün Teknik Destek",
    description: "Yaygın telefon, tablet ve bilgisayar arızalarında aynı gün çözüm sunuyoruz.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Üzerinden Hızlı İletişim",
    description: "Arıza fotoğrafınızı gönderin, ön bilgiyi dakikalar içinde WhatsApp'tan alın.",
  },
  {
    icon: Truck,
    title: "Yerinde Kurulum, Mağazada Tamir",
    description: "Uydu ve kamera sistemleri adresinizde kurulur, cihaz tamirleri mağazada yapılır.",
  },
  {
    icon: ShieldCheck,
    title: "Şeffaf ve Net Bilgilendirme",
    description: "Tamire başlamadan önce arıza ve ücret hakkında net bilgi veririz, sürpriz çıkmaz.",
  },
  {
    icon: Store,
    title: "Beyoğlu Merkezli Güven",
    description: "Sabit adresi ve fiziksel mağazası olan, yıllardır aynı yerde hizmet veren bir işletmeyiz.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="neden-biz" className="scroll-mt-16 bg-muted/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Neden Kılınç Teknomarket?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-3">
                <reason.icon className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {reason.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-3/4 overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:aspect-square">
          <Image
            src="/images/store/kilinc-teknomarket-magaza-dis-cephe-genis.png"
            alt="Kılınç Teknomarket Beyoğlu mağaza geniş dış cephe görünümü"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
          <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
            Kılınç Teknomarket · Beyoğlu
          </p>
        </div>
      </div>
    </section>
  )
}
