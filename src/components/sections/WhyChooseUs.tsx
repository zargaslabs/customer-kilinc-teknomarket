import Image from "next/image"
import {
  Clock3,
  HeartHandshake,
  MessageCircle,
  SatelliteDish,
  Store,
  Truck,
} from "lucide-react"

// Not: kuruluş yılı, çalışan/müşteri sayısı, garanti süresi ve yetkili
// servislik gibi işletmenin doğrulamadığı iddialar bilinçli olarak yok.
const reasons = [
  {
    icon: HeartHandshake,
    title: "Müşteri Memnuniyeti Önceliğimiz",
    description: "İşimizin merkezinde müşteri memnuniyeti var; her talebi sonuna kadar takip ediyoruz.",
  },
  {
    icon: SatelliteDish,
    title: "Uydu ve Çanak Antende Güçlü Hizmet",
    description: "Çanak anten kurulumu, merkezi uydu sistemi ve uydu arıza servisi öne çıkan hizmet alanımız.",
  },
  {
    icon: Clock3,
    title: "Hızlı Teknik Destek",
    description: "Telefon, tablet ve bilgisayar arızalarında hızlı dönüş ve çözüm sunuyoruz.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Üzerinden Hızlı İletişim",
    description: "Arıza fotoğrafınızı gönderin, ön bilgiyi WhatsApp üzerinden hızlıca alın.",
  },
  {
    icon: Truck,
    title: "Yerinde Kurulum, Mağazada Tamir",
    description: "Uydu, anten ve kamera sistemleri İstanbul genelinde adresinizde kurulur, cihaz tamirleri Beyoğlu'ndaki mağazamızda yapılır.",
  },
  {
    icon: Store,
    title: "Beyoğlu'nda Fiziksel Mağaza",
    description: "Sabit adresi olan yerel bir işletmeyiz; işlem öncesi net bilgi verir, sürpriz çıkarmayız.",
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
            src="/images/store/kilinc-teknomarket-magaza-beyoglu.png"
            alt="Kılınç Teknomarket Beyoğlu mağazası"
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
