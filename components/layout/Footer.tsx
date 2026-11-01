import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { NAV_LINKS, SITE } from "@/lib/data";

export default async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[-0.03em] text-ink">
              {SITE.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              {t("Footer.crafted")}
            </p>
          </div>

          <nav aria-label={t("Footer.navLabel")} className="flex flex-col gap-2.5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-line w-fit text-sm text-text-muted hover:text-ink"
              >
                {t(`Nav.${l.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 text-sm text-text-muted">
            <a href={`mailto:${SITE.email}`} className="link-line w-fit hover:text-ink">
              {SITE.email}
            </a>
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noreferrer"
              className="link-line w-fit hover:text-ink"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.person.name}. 保留所有权利。</p>
          <p>独立开发者 · 中国</p>
        </div>
      </div>
    </footer>
  );
}
