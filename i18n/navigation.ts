import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// 供组件使用的导航 API —— 返回不带 locale 前缀的 pathname,
// 切换语言时用 router.replace(pathname, { locale }) 保留当前路径。
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
