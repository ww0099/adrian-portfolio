import { CAPABILITIES } from "@/lib/data";

/** 能力方向的横向跑马灯，作为节奏过渡。 */
export default function Marquee() {
  const items = CAPABILITIES.map((c) => c.title);
  const row = [...items, ...items, ...items, ...items];

  return (
    <section
      aria-label="能力方向"
      className="overflow-hidden border-y border-line py-5"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((title, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg tracking-[-0.01em] text-text-muted md:text-xl">
              {title}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
