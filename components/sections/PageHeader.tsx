import Reveal from "@/components/anim/Reveal";

/** 子页统一页头：eyebrow + 巨号标题 + 简介。 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-[var(--container-max)] px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
      <Reveal>
        <p className="eyebrow mb-6">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="display-lg max-w-5xl text-ink">{title}</h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="body-lg mt-8 max-w-2xl">{intro}</p>
        </Reveal>
      )}
    </header>
  );
}
