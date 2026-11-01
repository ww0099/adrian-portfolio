import { useTranslations } from "next-intl";
import Reveal from "@/components/anim/Reveal";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const t = useTranslations("Home");

  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow mb-5">{t("faqEyebrow")}</p>
          <h2 className="display-lg text-ink">{t("faqHeading")}</h2>
        </Reveal>

        <div className="border-t border-line">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg tracking-[-0.01em] text-ink md:text-xl">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
