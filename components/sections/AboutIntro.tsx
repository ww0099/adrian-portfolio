import { useTranslations } from "next-intl";
import Reveal from "@/components/anim/Reveal";
import { SITE } from "@/lib/data";

export default function AboutIntro() {
  const t = useTranslations("About");

  const facts = [
    { label: t("factRoleLabel"), value: t("factRole") },
    { label: t("factLocationLabel"), value: t("factLocation") },
    { label: t("factFocusLabel"), value: t("factFocus") },
    { label: t("factAvailabilityLabel"), value: t("factAvailability") },
  ];

  return (
    <section className="mx-auto max-w-[var(--container-max)] px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">{t("eyebrow")}</p>
            <h1 className="display-lg text-ink">{t("title")}</h1>
          </Reveal>

          <div className="body-lg mt-10 max-w-2xl space-y-6">
            <Reveal delay={0.05}>
              <p>{t("p1")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>{t("p2")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>{t("p3")}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <aside className="border-t border-line pt-6">
            <dl className="flex flex-col gap-7">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs uppercase tracking-[0.22em] text-text-dim">
                    {f.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl text-ink md:text-2xl">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={`mailto:${SITE.email}`}
              className="link-line mt-10 inline-block text-sm text-accent"
            >
              {SITE.email}
            </a>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
