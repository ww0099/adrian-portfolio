import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** 合并 className(Tailwind 冲突解决) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 数值钳制 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** 线性插值 */
export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** 映射区间 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
}

/** 是否支持 hover 精确指针(桌面) */
export const isDesktop = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

/** 是否减少动效偏好 */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
