"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE, CTAS } from "@/lib/data";
import { cn } from "@/lib/utils";

function useScrollLock(locked: boolean) {
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (locked) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [locked]);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-colors duration-500",
          scrolled || open
            ? "border-b border-line bg-bg/95"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[var(--container-max)] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="font-display text-[1.35rem] tracking-[-0.03em] text-ink"
            aria-label={`${SITE.name} — 首页`}
          >
            {SITE.name}
            <span className="text-accent">.</span>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-9 transition-opacity duration-300 md:flex",
              open && "pointer-events-none opacity-0"
            )}
            aria-label={t("Navbar.primaryNav")}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={cn(
                  "link-line text-[0.8125rem] tracking-[0.02em] transition-colors",
                  isActive(l.href) ? "text-ink" : "text-text-muted hover:text-ink"
                )}
              >
                {t(`Nav.${l.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href={CTAS.primary.href}
              className={cn(
                "hidden text-[0.8125rem] text-accent transition-all duration-300 hover:text-accent-secondary md:inline-block",
                open && "pointer-events-none opacity-0"
              )}
            >
              {CTAS.primary.label} ↗
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="flex items-center gap-2.5 text-[0.8125rem] text-ink"
            >
              <span className="hidden sm:inline">{open ? "关闭" : "菜单"}</span>
              <span className="relative block h-3 w-4" aria-hidden="true">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-300",
                    open && "translate-y-[5px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px w-4 bg-ink transition-transform duration-300",
                    open && "-translate-y-[5px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] bg-bg"
          >
            <div className="mx-auto flex h-full max-w-[var(--container-max)] flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pt-32">
              <nav aria-label="全站菜单" className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.06 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-line"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between py-4 md:py-5"
                    >
                      <span className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-none tracking-[-0.035em] text-ink transition-colors group-hover:text-accent">
                        {t(`Nav.${l.key}`)}
                      </span>
                      <span className="eyebrow">0{i + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col gap-3 border-t border-line pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between"
              >
                <a href={`mailto:${SITE.email}`} className="link-line text-ink">
                  {SITE.email}
                </a>
                <a href={SITE.social.github} target="_blank" rel="noreferrer" className="link-line">
                  GitHub ↗
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
