import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { getService } from "@/lib/data/services";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";

const service = getService("uydu-anten-ariza-servisi");

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: service.seo?.title ?? service.title,
    description: service.seo?.description ?? service.summary,
    path: `/${service.slug}`,
  });
}

export default function UyduAntenArizaServisiPage() {
  return <ServicePageTemplate service={service} />;
}
