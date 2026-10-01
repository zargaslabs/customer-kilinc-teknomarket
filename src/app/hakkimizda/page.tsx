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
      "Kılınç Teknomarket, mağazası Beyoğlu'nda olan ve İstanbul genelinde uydu, çanak anten, kamera sistemi ve teknik servis hizmeti veren bir teknoloji marketidir.",
    path: "/hakkimizda",
  });
}

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        title="İstanbul Genelinde Uydu, Anten ve Teknik Servis"
        description="Kılınç Teknomarket olarak Beyoğlu'ndaki mağazamızdan İstanbul'un iki yakasına uydu ve çanak anten kurulumu, kamera sistemleri, elektrik-internet servisi, telefon ve bilgisayar tamiri ile teknoloji ürünleri sunuyoruz."
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
