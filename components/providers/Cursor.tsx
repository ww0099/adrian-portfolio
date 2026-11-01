"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 极简光标：一个跟随的圆点，hover 可交互元素时放大。
 * 触屏设备与 reduced-motion 下自动禁用。
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;
    let hovering = false;

    let firstMove = false;
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest('a, button, [data-cursor="hover"]');
      hovering = interactive;
      if (!firstMove) {
        firstMove = true;
        setVisible(true);
      }
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (dotRef.current) {
        const size = hovering ? 44 : 8;
        dotRef.current.style.transform = `translate3d(${pos.x - size / 2}px, ${pos.y - size / 2}px, 0)`;
        dotRef.current.style.width = `${size}px`;
        dotRef.current.style.height = `${size}px`;
        dotRef.current.style.opacity = hovering ? "0.28" : "1";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] rounded-full bg-ink mix-blend-difference"
      style={{
        width: 8,
        height: 8,
        opacity: visible ? 1 : 0,
        transition: "width .25s ease, height .25s ease, opacity .25s ease",
      }}
    />
  );
}
