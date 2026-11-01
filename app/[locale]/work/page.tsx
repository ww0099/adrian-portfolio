import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PageHeader from "@/components/sections/PageHeader";
import SelectedWork from "@/components/sections/SelectedWork";
import ContactCta from "@/components/sections/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("workTitle"),
    description: t("workDescription"),
    alternates: { canonical: "/work" },
    openGraph: {
      type: "website",
      title: t("workTitle"),
      description: t("workDescription"),
      url: `${SITE.url}/work`,
      locale: "zh_CN",
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Work");

  return (
    <>
      <PageHeader eyebrow={t("indexEyebrow")} title={t("indexTitle")} intro={t("indexIntro")} />
      <SelectedWork all />
      <ContactCta />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${SITE.url}/work#work`,
          name: t("indexTitle"),
          description: t("indexIntro"),
          url: `${SITE.url}/work`,
        }}
      />
    </>
  );
}
