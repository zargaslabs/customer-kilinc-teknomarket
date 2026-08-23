import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/page/PageHero";
import { AboutStory } from "@/components/page/AboutStory";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

const breadcrumbItems = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hakkımızda", path: "/hakkimizda" },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Hakkımızda",
    description:
      "Kılınç Teknomarket, Beyoğlu/Kasımpaşa merkezli yerel bir teknoloji marketi ve teknik servistir. Uydu ve çanak anten kurulumu, telefon ve bilgisayar servisi, kamera sistemleri ile teknoloji ürünleri sunuyoruz.",
    path: "/hakkimizda",
  });
}

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        title="Beyoğlu'nun Yerel Teknoloji Çözüm Ortağı"
        description="Kılınç Teknomarket olarak Beyoğlu/Kasımpaşa'da uydu ve çanak anten kurulumu, telefon ve bilgisayar servisi, kamera sistemleri ve teknoloji ürünleri alanında güvenilir hizmet veriyoruz."
        image="/images/store/kilinc-teknomarket-magaza-dis-cephe.png"
        imageAlt="Kılınç Teknomarket Beyoğlu mağaza dış cephesi"
      >
        <WhatsAppButton size="lg" />
      </PageHero>

      <AboutStory />
      <WhyChooseUs />
      <ServiceArea />

      <CTASection
        title="Bize Ulaşın"
        description="Sorularınız için WhatsApp'tan yazın veya mağazamıza gelin, size yardımcı olalım."
      />
    </>
  );
}
