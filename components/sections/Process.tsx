import { useTranslations } from "next-intl";
import Reveal from "@/components/anim/Reveal";
import { PROCESS } from "@/lib/data";

export default function Process() {
  const t = useTranslations("Home");

  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-14 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-5">{t("processEyebrow")}</p>
          <h2 className="display-lg text-ink">{t("processHeading")}</h2>
          <p className="body-lg mt-6 max-w-sm">{t("processIntro")}</p>
        </Reveal>

        <ol>
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-line py-8 first:border-t md:grid-cols-[3.5rem_1fr] md:py-10">
                <span className="eyebrow pt-2 text-accent">{p.step}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-[-0.02em] text-ink md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-text-muted">{p.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
