import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { CASE_STUDIES, getCaseStudy } from "@/lib/work";
import { SITE } from "@/lib/data";
import Reveal from "@/components/anim/Reveal";
import ContactCta from "@/components/sections/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.overview,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: "article",
      title: c.title,
      description: c.overview,
      url: `${SITE.url}/work/${slug}`,
      locale: "zh_CN",
      images: c.image ? [{ url: c.image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Work");

  const c = getCaseStudy(slug);
  if (!c) notFound();

  const index = CASE_STUDIES.indexOf(c);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${SITE.url}/work/${c.slug}#work`,
          name: c.title,
          headline: c.title,
          description: c.overview,
          author: { "@type": "Person", name: SITE.person.name, url: SITE.url },
          creator: { "@type": "Person", name: SITE.person.name },
          dateCreated: c.year,
          about: c.client,
          url: `${SITE.url}/work/${c.slug}`,
        }}
      />

      {/* Hero */}
      <header className="mx-auto max-w-[var(--container-max)] px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40">
        <Reveal>
          <p className="eyebrow mb-6">
            {c.category} · {c.year}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-xl max-w-5xl text-ink">{c.title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-lg mt-8 max-w-2xl">{c.overview}</p>
        </Reveal>
      </header>

      {/* Cover */}
      {c.image && (
        <Reveal>
          <div className="mx-auto max-w-[var(--container-max)] px-6 md:px-10">
            <div className="frame flex aspect-[16/10] w-full items-center justify-center bg-surface">
              <img src={c.image} alt={c.title} className="h-full w-full object-contain" />
            </div>
          </div>
        </Reveal>
      )}

      {/* Meta */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-16 md:px-10 md:py-24">
        <dl className="grid grid-cols-2 gap-8 border-y border-line py-8 md:grid-cols-4">
          <div>
            <dt className="eyebrow mb-2">{t("client")}</dt>
            <dd className="text-text-muted">{c.client}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-2">{t("role")}</dt>
            <dd className="text-text-muted">{c.role}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-2">{t("year")}</dt>
            <dd className="text-text-muted">{c.year}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-2">{t("stack")}</dt>
            <dd className="text-text-muted">{c.tags.join(" · ")}</dd>
          </div>
        </dl>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 pb-20 md:px-10 md:pb-28">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
            <h2 className="font-display text-2xl tracking-[-0.02em] text-accent md:text-3xl">
              {t("problem")}
            </h2>
            <p className="body-lg max-w-3xl">{c.problem}</p>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[var(--container-max)] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <h2 className="display-lg mb-12 text-ink">{t("process")}</h2>
          </Reveal>
          <ol>
            {c.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <li className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-line py-8 first:border-t md:grid-cols-[3.5rem_1fr_1.4fr] md:py-10">
                  <span className="eyebrow pt-2 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl tracking-[-0.01em] text-ink md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-text-muted">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Decisions */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2 className="display-lg mb-12 text-ink">{t("designDecisions")}</h2>
        </Reveal>
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {c.designDecisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="border-t border-line pt-6">
                <h3 className="font-display text-xl text-ink">{d.title}</h3>
                <p className="mt-3 text-text-muted">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[var(--container-max)] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <h2 className="display-lg mb-8 text-ink">{t("finalOutcome")}</h2>
            <p className="body-lg max-w-3xl">{c.outcome}</p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {c.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.04}>
                <div className="border-t border-line pt-4">
                  <p className="font-display text-4xl tracking-[-0.03em] text-accent md:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-2 text-sm text-text-dim">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2 className="display-lg mb-10 text-ink">{t("lessons")}</h2>
        </Reveal>
        <ul className="max-w-3xl">
          {c.lessons.map((lesson, i) => (
            <Reveal key={lesson} delay={i * 0.04}>
              <li className="flex gap-4 border-b border-line py-5 text-text-muted">
                <span className="text-accent" aria-hidden="true">
                  →
                </span>
                <span>{lesson}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Next */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[var(--container-max)] px-6 py-12 md:px-10">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-6 py-6"
          >
            <div>
              <p className="eyebrow mb-3">{t("nextProject")}</p>
              <p className="font-display text-3xl tracking-[-0.03em] text-ink transition-colors group-hover:text-accent md:text-5xl">
                {next.title}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="text-2xl text-accent transition-transform group-hover:translate-x-2"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
