import type { Metadata } from "next";
import { ExternalLink, Star } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/data/business";
import { PageHero } from "@/components/page/PageHero";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

const breadcrumbItems = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Google'da Yorum Bırak", path: "/yorum-birak" },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Google'da Yorum Bırak",
    description:
      "Kılınç Teknomarket hizmetinden memnun kaldıysanız Google'da yorum bırakarak bize destek olabilirsiniz.",
    path: "/yorum-birak",
    noindex: true,
  });
}

export default function YorumBirakPage() {
  const hasReviewLink = Boolean(business.googleReviewUrl);

  return (
    <>
      <PageHero
        breadcrumbItems={breadcrumbItems}
        title="Bizi Google'da Değerlendirin"
        description="Hizmetimizden memnun kaldıysanız birkaç saniyenizi ayırıp Google'da yorum bırakmanız bizim için çok değerli."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          {hasReviewLink ? (
            <>
              <p className="text-muted-foreground">
                Aşağıdaki butona tıklayarak doğrudan Google yorum sayfamıza
                ulaşabilirsiniz.
              </p>
              <Button
                size="lg"
                className="mt-6 h-11 px-5 text-base"
                render={
                  <a
                    href={business.googleReviewUrl ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
              >
                <ExternalLink /> Google&apos;da Yorum Yap
              </Button>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-8">
              <Star className="mx-auto size-8 text-blue-600" />
              <p className="mt-4 font-medium text-foreground">
                Google yorum bağlantısı yakında eklenecek.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Bağlantı eklendiğinde bu sayfa otomatik olarak Google yorum
                sayfamıza yönlendirecek. O zamana kadar aşağıdan
                WhatsApp&apos;tan bize ulaşabilirsiniz.
              </p>
              <WhatsAppButton className="mt-6" />
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Basılı QR Kart İçin Hazır Metin
          </h2>
          <p className="mt-3 text-muted-foreground">
            Mağaza içine asılacak bir QR kart hazırlanınca aşağıdaki metinler
            doğrudan kullanılabilir. QR kod,{" "}
            {hasReviewLink ? "yukarıdaki Google yorum linkinden" : "google review linki eklendiğinde o linkten"}{" "}
            üretilebilir.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Kart Metni
            </p>
            <p className="mt-2 font-heading text-lg text-foreground">
              Memnun kaldıysanız 30 saniyede Google yorumu bırakabilir
              misiniz? Desteğiniz bizim için çok değerli.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              WhatsApp Mesaj Şablonu
            </p>
            <p className="mt-2 text-sm text-foreground/80">
              Merhaba, Kılınç Teknomarket olarak hizmetimizden memnun
              kaldıysanız aşağıdaki bağlantıdan bize Google yorumu bırakabilir
              misiniz? Desteğiniz bizim için çok değerli.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
