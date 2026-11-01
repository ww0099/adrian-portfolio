import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PageHeader from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
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
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: { canonical: "/contact" },
    openGraph: {
      type: "website",
      title: t("contactTitle"),
      description: t("contactDescription"),
      url: `${SITE.url}/contact`,
      locale: "zh_CN",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <section className="mx-auto max-w-[var(--container-max)] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <ContactForm />

          <aside className="border-t border-line pt-8">
            <dl className="flex flex-col gap-8">
              <div>
                <dt className="eyebrow mb-3">{t("emailLabel")}</dt>
                <dd>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="link-line text-lg text-ink hover:text-accent"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="eyebrow mb-3">{t("socialLabel")}</dt>
                <dd>
                  <a
                    href={SITE.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-line text-lg text-ink hover:text-accent"
                  >
                    github.com/ww0099 ↗
                  </a>
                </dd>
              </div>

              <div>
                <dt className="eyebrow mb-3">{t("availabilityLabel")}</dt>
                <dd className="text-text-muted">{t("availability")}</dd>
              </div>
            </dl>

            <p className="mt-10 border-t border-line pt-6 text-sm leading-relaxed text-text-muted">
              {t("sideNote")}
            </p>
          </aside>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${SITE.url}/contact#contact`,
          name: `联系 ${SITE.person.name}`,
          url: `${SITE.url}/contact`,
          mainEntity: {
            "@type": "Person",
            name: SITE.person.name,
            email: SITE.email,
            url: SITE.url,
          },
        }}
      />
    </>
  );
}
