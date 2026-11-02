import { useTranslations } from "next-intl";
import { SITE } from "@/lib/data";

export type CtaVariant = "home" | "work" | "project" | "lab" | "services" | "about";

export default function ContactCta({ variant = "home" }: { variant?: CtaVariant }) {
  const t = useTranslations("Cta");

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-28 md:px-10 md:py-40">
        <p className="eyebrow mb-8">{t(`${variant}.eyebrow`)}</p>

        <a
          href={`mailto:${SITE.email}`}
          className="display-xl block text-ink transition-colors hover:text-accent"
        >
          {t(`${variant}.line1`)}
          <br />
          <span className="italic text-accent">{t(`${variant}.line2`)}</span>
        </a>

        <div className="mt-16 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">{t("emailLabel")}</p>
            <a href={`mailto:${SITE.email}`} className="link-line text-text-muted hover:text-ink">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">{t("githubLabel")}</p>
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noreferrer"
              className="link-line text-text-muted hover:text-ink"
            >
              github.com/ww0099 ↗
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">{t("availabilityLabel")}</p>
            <p className="text-text-muted">{t("availability")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
