"use client";

import { cn } from "@/lib/utils";

/** 按行遮罩揭示（用于首屏巨型标题）。 */
export default function MaskText({
  lines,
  className,
  lineClassName,
  delay = 0,
  step = 0.09,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  step?: number;
}) {
  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className={cn("line-mask", lineClassName)}>
          <span style={{ animationDelay: `${delay + i * step}s` }}>{line}</span>
        </span>
      ))}
    </span>
  );
}
