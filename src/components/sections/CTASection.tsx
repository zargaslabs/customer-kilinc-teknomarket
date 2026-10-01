import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"
import { CallButton } from "@/components/cta/CallButton"
import { ReviewButton } from "@/components/cta/ReviewButton"

const darkOutlineClass =
  "border-white/20 bg-transparent text-white hover:bg-white/10"

type CTASectionProps = {
  title?: string
  description?: string
  whatsappMessage?: string
  showReviewLink?: boolean
}

export function CTASection({
  title = "Hemen Teknik Destek Alın",
  description = "Uydu ve çanak anten kurulumu, kamera sistemi, elektrik-internet arızaları ve telefon veya bilgisayar tamiri için WhatsApp'tan yazın ya da hemen arayın.",
  whatsappMessage,
  showReviewLink = false,
}: CTASectionProps) {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
          {title}
        </h2>
        <p className="max-w-xl text-slate-300">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <WhatsAppButton size="lg" message={whatsappMessage} />
          <CallButton size="lg" className={darkOutlineClass} />
          {showReviewLink && (
            <ReviewButton size="lg" className={darkOutlineClass} />
          )}
        </div>
      </div>
    </section>
  )
}
