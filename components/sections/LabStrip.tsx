import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/anim/Reveal";
import { LAB_CATEGORIES } from "@/lib/lab";

export default function LabStrip() {
  const t = useTranslations("Lab");
  const items = LAB_CATEGORIES.flatMap((c) => c.items).slice(0, 3);

  return (
    <section className="mx-auto max-w-[var(--container-max)] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">{t("homeEyebrow")}</p>
            <h2 className="display-lg text-ink">{t("homeTitle")}</h2>
          </div>
          <Link
            href="/lab"
            className="link-line w-fit text-sm text-text-muted transition-colors hover:text-ink"
          >
            {t("homeAll")}
          </Link>
        </div>
      </Reveal>

      <div className="border-t border-line">
        {items.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05}>
            <div className="grid grid-cols-[2.2rem_1fr] gap-4 border-b border-line py-6 md:grid-cols-[3.5rem_1fr_16rem_4rem] md:items-baseline md:py-8">
              <span className="eyebrow text-accent">0{i + 1}</span>
              <div>
                <h3 className="font-display text-xl tracking-[-0.02em] text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-text-muted">{item.description}</p>
              </div>
              <p className="hidden text-sm text-text-muted md:block">
                {item.tags.join(" · ")}
              </p>
              <p className="hidden text-sm text-text-dim md:block">{item.year}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
