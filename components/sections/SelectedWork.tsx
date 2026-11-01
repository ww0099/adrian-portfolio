"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/anim/Reveal";
import { CASE_STUDIES } from "@/lib/work";
import { cn } from "@/lib/utils";

/**
 * 作品索引：编辑式整行列表。
 * 桌面端 hover 时跟随光标浮出项目截图；移动端在行内显示缩略图。
 */
export default function SelectedWork({ all = false }: { all?: boolean }) {
  const t = useTranslations("Work");
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!previewRef.current) return;
    const x = Math.min(e.clientX + 28, window.innerWidth - 360);
    const y = e.clientY - 130;
    previewRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <section
      id="work"
      className="relative mx-auto max-w-[var(--container-max)] px-6 py-24 md:px-10 md:py-36"
      aria-labelledby="work-heading"
    >
      {!all && (
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">{t("sectionEyebrow")}</p>
              <h2 id="work-heading" className="display-lg max-w-3xl text-ink">
                {t("sectionTitle")}
              </h2>
            </div>
            <Link
              href="/work"
              className="link-line w-fit text-sm text-text-muted transition-colors hover:text-ink"
            >
              {t("viewAll")}
            </Link>
          </div>
        </Reveal>
      )}

      <div className="border-t border-line">
        {CASE_STUDIES.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.04}>
            <Link
              href={`/work/${project.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onMouseMove={onMove}
              className="group block border-b border-line py-8 transition-colors duration-500 hover:bg-surface md:py-10"
            >
              <div className="grid grid-cols-[2.2rem_1fr_1.5rem] items-center gap-4 md:grid-cols-[3.5rem_1fr_13rem_5rem_2rem]">
                <span className="eyebrow text-accent">0{i + 1}</span>

                <span className="font-display text-[clamp(1.7rem,3.6vw,3.25rem)] leading-none tracking-[-0.03em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                  {project.title}
                </span>

                <span className="hidden text-sm text-text-muted md:block">
                  {project.category}
                </span>
                <span className="hidden text-sm text-text-dim md:block">
                  {project.year}
                </span>

                <span
                  aria-hidden="true"
                  className="justify-self-end text-lg text-text-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent"
                >
                  ↗
                </span>
              </div>

              <div className="mt-5 flex items-center gap-4 md:hidden">
                {project.image && (
                  <span className="frame block h-16 w-24 shrink-0">
                    <img src={project.image} alt="" loading="lazy" />
                  </span>
                )}
                <span className="text-sm text-text-muted">{project.overview}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* 桌面端跟随光标的预览图 */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-40 hidden w-[320px] transition-opacity duration-300 md:block",
          active === null ? "opacity-0" : "opacity-100"
        )}
      >
        {active !== null && CASE_STUDIES[active]?.image && (
          <div className="frame aspect-[4/3] w-full bg-surface">
            <img
              src={CASE_STUDIES[active].image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
