import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import AboutIntro from "@/components/sections/AboutIntro";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: { canonical: "/about" },
    openGraph: {
      type: "profile",
      title: t("aboutTitle"),
      description: t("aboutDescription"),
      url: `${SITE.url}/about`,
      locale: "zh_CN",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <>
      <AboutIntro />
      <Capabilities />
      <Process />
      <FAQ />
      <ContactCta variant="about" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${SITE.url}/#person`,
          name: SITE.person.name,
          jobTitle: SITE.person.jobTitle,
          description: t("intro"),
          url: `${SITE.url}/about`,
          sameAs: Object.values(SITE.social),
        }}
      />
    </>
  );
}
