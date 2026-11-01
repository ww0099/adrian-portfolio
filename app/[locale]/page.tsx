import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Statement from "@/components/sections/Statement";
import SelectedWork from "@/components/sections/SelectedWork";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import LabStrip from "@/components/sections/LabStrip";
import FAQ from "@/components/sections/FAQ";
import ContactCta from "@/components/sections/ContactCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Metadata");

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${SITE.url}/#person`,
            name: SITE.person.name,
            jobTitle: SITE.person.jobTitle,
            url: SITE.url,
            sameAs: Object.values(SITE.social),
            description: t("homeDescription"),
          },
          {
            "@type": "WebSite",
            "@id": `${SITE.url}/#website`,
            url: SITE.url,
            name: SITE.name,
            publisher: { "@id": `${SITE.url}/#person` },
          },
        ]}
      />

      <Hero />
      <Marquee />
      <Statement />
      <SelectedWork />
      <Capabilities />
      <Process />
      <LabStrip />
      <FAQ />
      <ContactCta />
    </>
  );
}
