import { useTranslations } from "next-intl";
import Reveal from "@/components/anim/Reveal";
import { CAPABILITIES } from "@/lib/data";

export default function Capabilities() {
  const t = useTranslations("Home");

  return (
    <section className="mx-auto max-w-[var(--container-max)] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-5">{t("capEyebrow")}</p>
            <h2 className="display-lg text-ink">{t("capHeading")}</h2>
          </div>
          <p className="body-lg max-w-md md:justify-self-end">{t("capIntro")}</p>
        </div>
      </Reveal>

      <ul className="border-t border-line">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.04}>
            <li className="group border-b border-line py-7 md:py-9">
              <div className="grid gap-4 md:grid-cols-[3.5rem_1fr_22rem] md:items-start">
                <span className="eyebrow pt-2 text-accent">{c.index}</span>
                <h3 className="display-md text-ink transition-colors duration-300 group-hover:text-accent">
                  {c.title}
                </h3>
                <div className="md:pt-2">
                  <p className="text-sm leading-relaxed text-text-muted md:opacity-0 md:transition-all md:duration-500 md:group-hover:opacity-100">
                    {c.description}
                  </p>
                  <p className="mt-3 text-xs tracking-[0.12em] text-text-dim">
                    {c.tags.join(" · ")}
                  </p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
