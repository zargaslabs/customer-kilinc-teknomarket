import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton"
import { ReviewButton } from "@/components/cta/ReviewButton"

type CTASectionProps = {
  title?: string
  description?: string
  whatsappMessage?: string
  showReviewLink?: boolean
}

export function CTASection({
  title = "Hemen Teknik Destek Alın",
  description = "Telefon tamiri, bilgisayar servisi, uydu kurulumu veya kamera sistemi için WhatsApp'tan yazın, size hızlıca dönelim.",
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
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton size="lg" message={whatsappMessage} />
          {showReviewLink && (
            <ReviewButton
              size="lg"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
            />
          )}
        </div>
      </div>
    </section>
  )
}
