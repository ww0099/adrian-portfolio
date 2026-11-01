import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PageHeader from "@/components/sections/PageHeader";
import ContactCta from "@/components/sections/ContactCta";
import Reveal from "@/components/anim/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { LAB_CATEGORIES } from "@/lib/lab";
import { SITE } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("labTitle"),
    description: t("labDescription"),
    alternates: { canonical: "/lab" },
    openGraph: {
      type: "website",
      title: t("labTitle"),
      description: t("labDescription"),
      url: `${SITE.url}/lab`,
      locale: "zh_CN",
    },
  };
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Lab");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <div className="mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        {LAB_CATEGORIES.map((category, index) => (
          <section
            key={category.id}
            aria-labelledby={`${category.id}-heading`}
            className="border-t border-line py-14 md:py-20"
          >
            <Reveal>
              <div className="mb-10 grid gap-4 md:grid-cols-[0.4fr_1fr]">
                <h2
                  id={`${category.id}-heading`}
                  className="display-md text-ink"
                >
                  {category.title}
                </h2>
                <p className="max-w-xl text-text-muted md:pt-2">{category.description}</p>
              </div>
            </Reveal>

            <div>
              {category.items.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.04}>
                  <article className="grid gap-4 border-t border-line py-7 md:grid-cols-[3rem_1fr_16rem_4rem] md:items-baseline">
                    <span className="eyebrow text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-[-0.02em] text-ink md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm text-text-muted">{item.description}</p>
                    </div>
                    <p className="hidden text-sm text-text-muted md:block">
                      {item.tags.join(" · ")}
                    </p>
                    <p className="hidden text-sm text-text-dim md:block">{item.year}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <ContactCta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${SITE.url}/lab#lab`,
          name: t("title"),
          description: t("intro"),
          url: `${SITE.url}/lab`,
        }}
      />
    </>
  );
}
