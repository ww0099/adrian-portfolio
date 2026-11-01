import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import PageHeader from "@/components/sections/PageHeader";
import ContactCta from "@/components/sections/ContactCta";
import Reveal from "@/components/anim/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    alternates: { canonical: "/services" },
    openGraph: {
      type: "website",
      title: t("servicesTitle"),
      description: t("servicesDescription"),
      url: `${SITE.url}/services`,
      locale: "zh_CN",
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Services");

  return (
    <>
      <JsonLd
        data={SERVICES.map((s) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.summary,
          provider: { "@type": "Person", name: SITE.person.name, url: SITE.url },
          url: `${SITE.url}/services`,
        }))}
      />

      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <div className="mx-auto max-w-[var(--container-max)] px-6 md:px-10">
        {SERVICES.map((service, idx) => (
          <Reveal key={service.id} delay={idx * 0.03}>
            <section id={service.id} className="scroll-mt-28 border-t border-line py-12 md:py-16">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
                <div>
                  <p className="eyebrow mb-4 text-accent">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="display-md text-ink">{service.title}</h2>
                  <p className="mt-5 text-text-muted">{service.summary}</p>

                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="eyebrow">{t("timeline")}</span>
                    <span className="font-display text-2xl text-ink">{service.timeline}</span>
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-4">{t("deliverables")}</p>
                  <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="eyebrow mt-8 mb-3">{t("process")}</p>
                  <ol className="flex flex-col gap-2.5">
                    {service.process.map((step) => (
                      <li key={step.step} className="flex gap-3 text-sm text-text-muted">
                        <span className="shrink-0 text-accent">{step.step}</span>
                        {step.body}
                      </li>
                    ))}
                  </ol>

                  <Link
                    href="/contact"
                    className="link-line mt-8 inline-block text-sm text-accent"
                  >
                    {t("bookCall")} →
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <ContactCta />
    </>
  );
}
