import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // 第一阶段：中文单语（目标客户为国内中小商家与创业团队）
  locales: ["zh"],
  defaultLocale: "zh",
  // 单语言下 URL 无前缀（/ 即中文）
  localePrefix: "as-needed",
});
