import { useTranslations } from "next-intl";
import { SITE } from "@/lib/data";

export default function ContactCta() {
  const t = useTranslations("Home");

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-28 md:px-10 md:py-40">
        <p className="eyebrow mb-8">{t("contactEyebrow")}</p>

        <a
          href={`mailto:${SITE.email}`}
          className="display-xl block text-ink transition-colors hover:text-accent"
        >
          {t("contactLine1")}
          <br />
          <span className="italic text-accent">{t("contactLine2")}</span>
        </a>

        <div className="mt-16 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">{t("contactEmailLabel")}</p>
            <a href={`mailto:${SITE.email}`} className="link-line text-text-muted hover:text-ink">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">{t("contactGithubLabel")}</p>
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
            <p className="eyebrow mb-3">{t("contactAvailabilityLabel")}</p>
            <p className="text-text-muted">{t("heroAvailability")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
