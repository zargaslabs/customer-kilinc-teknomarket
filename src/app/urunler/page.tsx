import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { productsWhatsAppMessage } from "@/lib/data/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/page/PageHero";
import { ProductGrid } from "@/components/page/ProductGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

const breadcrumbItems = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Ürünler", path: "/urunler" },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Ürünler ve Aksesuarlar Beyoğlu",
    description:
      "Kılınç Teknomarket'te uydu ve anten ürünleri, telefon aksesuarları, powerbank, hoparlör, kulaklık, şarj aleti, TV kumandası, elektronik ürünler ve küçük ev aletleri bulabilirsiniz. Stok durumu için WhatsApp'tan yazın.",
    path: "/urunler",
  });
}

export default function UrunlerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <PageHero
        breadcrumbItems={breadcrumbItems}
        title="Ürünler ve Aksesuarlar"
        description="Uydu ve anten ürünlerinden telefon aksesuarlarına, elektronik ürünlerden küçük ev aletlerine kadar ihtiyacınız olan ürünleri Beyoğlu'ndaki mağazamızda bulabilirsiniz."
      >
        <WhatsAppButton size="lg" message={productsWhatsAppMessage} />
      </PageHero>

      <ProductGrid />
      <WhyChooseUs />

      <CTASection
        title="Ürünler Hakkında Sorularınız mı Var?"
        description="Stok durumu, fiyat veya uygunluk hakkında WhatsApp'tan yazın, size hızlıca dönelim."
        whatsappMessage="Merhaba, ürünler hakkında bilgi almak istiyorum."
      />
    </>
  );
}
