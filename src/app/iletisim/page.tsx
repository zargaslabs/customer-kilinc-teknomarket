import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { localBusinessSchema } from "@/lib/schema/localBusiness";
import { faqPageSchema } from "@/lib/schema/faqPage";
import { contactFaq } from "@/lib/data/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/page/PageHero";
import { MapSection } from "@/components/sections/MapSection";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

const breadcrumbItems = [
  { name: "Ana Sayfa", path: "/" },
  { name: "İletişim", path: "/iletisim" },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "İletişim",
    description:
      "Kılınç Teknomarket'e Beyoğlu/Kasımpaşa'daki mağazamızdan, WhatsApp'tan veya telefonla ulaşabilirsiniz. Adres, yol tarifi ve çalışma saatleri (her gün 08:00 - 21:00) için tıklayın.",
    path: "/iletisim",
  });
}

export default function IletisimPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqPageSchema(contactFaq)} />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        title="Bize Ulaşın"
        description="Beyoğlu/Kasımpaşa'daki mağazamıza WhatsApp, telefon veya yol tarifiyle kolayca ulaşabilirsiniz."
        image="/images/store/kilinc-teknomarket-magaza-dis-cephe.png"
        imageAlt="Kılınç Teknomarket Beyoğlu mağaza dış cephesi"
      >
        <WhatsAppButton size="lg" />
      </PageHero>

      <MapSection />
      <ServiceArea />
      <FAQSection
        items={contactFaq}
        heading="İletişim Hakkında Sık Sorulan Sorular"
        intro="Mağazamıza ulaşım, iletişim yolları ve randevu hakkında en çok sorulan sorular."
      />

      <CTASection
        title="Hemen Yazın"
        description="Sorularınız için WhatsApp'tan yazın, size hızlıca dönelim."
        showReviewLink
      />
    </>
  );
}
