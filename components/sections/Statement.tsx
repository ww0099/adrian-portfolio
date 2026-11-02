import { useTranslations } from "next-intl";
import Reveal from "@/components/anim/Reveal";
import { LIVE_SITES, STATS } from "@/lib/data";

/** 首页陈述段：左侧大段叙事，右侧真实数字。 */
export default function Statement() {
  const t = useTranslations("Home");

  return (
    <section className="mx-auto max-w-[var(--container-max)] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[1.5fr_0.5fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow mb-8">{t("statementEyebrow")}</p>
          <p className="display-md max-w-4xl text-ink">
            {t("statementLead")}
            <span className="text-text-dim">{t("statementTail")}</span>
          </p>

          <div className="mt-14 max-w-4xl border-t border-line">
            <div className="flex items-baseline justify-between gap-4 py-4">
              <p className="eyebrow">{t("liveEyebrow")}</p>
              <p className="text-xs text-text-dim">{t("liveHint")}</p>
            </div>
            {LIVE_SITES.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 border-t border-line py-5"
              >
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-xl tracking-[-0.02em] text-ink transition-colors group-hover:text-accent md:text-2xl">
                    {site.name}
                  </span>
                  <span className="text-sm text-text-muted">{site.note}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-accent transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-1">
            {STATS.map((s) => (
              <div key={s.label} className="border-t border-line pt-4">
                <dt className="text-xs uppercase tracking-[0.22em] text-text-dim">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-4xl tracking-[-0.03em] text-ink md:text-5xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
