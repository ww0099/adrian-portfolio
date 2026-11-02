import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@fontsource-variable/inter";
import "../globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/providers/Cursor";
import ScrollProgress from "@/components/anim/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/data";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t("homeTitle"),
      template: `%s — ${SITE.name}`,
    },
    description: t("homeDescription"),
    applicationName: SITE.name,
    keywords: [
      "独立开发者",
      "自由职业开发者",
      "网站开发",
      "小程序开发",
      "AI Agent 开发",
      "Vibe Coding",
      "Next.js",
      "全栈开发",
    ],
    authors: [{ name: SITE.person.name }],
    creator: SITE.person.name,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: SITE.url,
      siteName: SITE.name,
      locale: "zh_CN",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [
        { url: "/og.png", width: 1200, height: 630, alt: "Adrian — 独立开发者" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    category: "technology",
  };
}

export const viewport: Viewport = {
  themeColor: "#0f1210",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Skip" });

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider>
          <a href="#main" className="skip-link">
            {t("toContent")}
          </a>
          <Cursor />
          <SmoothScroll>
            <ScrollProgress />
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
