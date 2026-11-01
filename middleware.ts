import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// 按 Accept-Language 自动协商语言:中文浏览器访问 / 跳 /zh,英文留 /。
export default createMiddleware(routing);

export const config = {
  // 跳过 api / Next 内部 / 静态文件
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
