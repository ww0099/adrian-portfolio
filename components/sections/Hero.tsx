"use client";

import { useTranslations } from "next-intl";
import MaskText from "@/components/anim/MaskText";

export default function Hero() {
  const t = useTranslations("Home");

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pb-12 md:pt-32">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <p className="eyebrow whitespace-nowrap">{t("heroLabel")}</p>
        <p className="eyebrow whitespace-nowrap text-accent sm:text-right">
          {t("heroAvailability")}
        </p>
      </div>

      <div>
        <h1 className="display-xl text-ink">
          <MaskText
            lines={[
              t("heroLine1"),
              <>
                {t("heroLine2a")}
                <span className="italic text-accent">{t("heroLine2b")}</span>
              </>,
              t("heroLine3"),
            ]}
          />
        </h1>

        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-6 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="body-lg max-w-[40rem] text-balance">{t("heroSubline")}</p>

          <a
            href="#work"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-text-dim transition-colors hover:text-ink"
          >
            {t("heroScroll")}
            <span className="relative block h-8 w-px overflow-hidden bg-line-strong">
              <span className="absolute inset-0 origin-top animate-[line-scroll_2.2s_ease-in-out_infinite] bg-accent" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
