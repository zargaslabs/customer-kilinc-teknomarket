import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { getService } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";

const service = getService("bilgisayar-tamiri");

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: service.seo?.title ?? service.title,
    description: service.seo?.description ?? service.summary,
    path: `/${service.slug}`,
  });
}

export default function BilgisayarTamiriPage() {
  return <ServicePageTemplate service={service} />;
}
