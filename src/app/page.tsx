import type { Metadata } from "next";

import { buildMetadata, siteConfig } from "@/lib/seo";
import { homeFaq } from "@/lib/data/faq";
import { organizationSchema } from "@/lib/schema/organization";
import { localBusinessSchema } from "@/lib/schema/localBusiness";
import { faqPageSchema } from "@/lib/schema/faqPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Brands } from "@/components/sections/Brands";
import { FAQSection } from "@/components/sections/FAQSection";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqPageSchema(homeFaq)} />
      <Hero />
      <ServiceGrid />
      <WhyChooseUs />
      <ServiceArea />
      <ProcessSteps />
      <FeaturedProducts />
      <Brands />
      <FAQSection items={homeFaq} />
      <MapSection />
      <CTASection />
    </>
  );
}
