/* ============================================================
   站点内容数据 — 集中管理。改名字、邮箱、域名只需改这里。
   ============================================================ */

export const SITE = {
  name: "Adrian",
  title: "Adrian — 独立开发者",
  description:
    "一个人 + AI，把想法做成能上线的产品。网站、小程序、内部工具、AI Agent 定制开发。",
  url: "https://adrianw.online",
  email: "wxz094365@outlook.com",
  person: {
    name: "Adrian",
    jobTitle: "独立开发者",
  },
  social: {
    github: "https://github.com/ww0099",
  },
};

/** 主导航 — 标签文案由 messages 字典按 key 取,这里只存 href + key */
export const NAV_LINKS = [
  { href: "/work", key: "work" },
  { href: "/lab", key: "lab" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export const CAPABILITIES = [
  {
    id: "web",
    title: "网站与落地页",
    index: "01",
    description:
      "从设计到上线：品牌官网、产品落地页、工具站。做得快，也做得扎实——SEO、响应式、加载速度一并处理。",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    id: "miniapp",
    title: "小程序与运营后台",
    index: "02",
    description:
      "微信小程序 + 管理后台 + 服务端，三端打通。适合本地商家、校园项目、内部业务工具。",
    tags: ["uni-app", "NestJS", "MySQL"],
  },
  {
    id: "agent",
    title: "AI Agent 与自动化",
    index: "03",
    description:
      "把重复流程交给 AI：Agent 工具、MCP 服务、RPA 脚本、内容流水线。也做模型接入与提示词工程。",
    tags: ["Agent", "MCP", "LLM"],
  },
  {
    id: "desktop",
    title: "桌面工具与内部系统",
    index: "04",
    description:
      "轻量桌面应用、数据看板、内部管理系统。小团队够用、能维护、不堆技术债。",
    tags: ["Tauri", "Electron", "Vue3"],
  },
  {
    id: "prototype",
    title: "数据与算法原型",
    index: "05",
    description:
      "把论文或想法做成可运行的原型：模型训练、数据管线、指标复现。先验证可行性，再谈产品化。",
    tags: ["PyTorch", "Python", "可视化"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "聊清楚需求",
    description:
      "30 分钟通话，确认你要解决什么问题、上线时间、预算边界。聊完我会给一份范围和报价。",
  },
  {
    step: "02",
    title: "先给你看原型",
    description:
      "核心页面先做出来，确认方向和视觉，再往下写。避免做到最后发现不是你要的。",
  },
  {
    step: "03",
    title: "开发，每周可见",
    description:
      "AI 加速开发，但进度透明：每周给你可点的版本，随时反馈、随时调整。",
  },
  {
    step: "04",
    title: "上线与交接",
    description:
      "部署、域名、文档、源码一次交清。上线后两周内免费修 bug，之后按次维护。",
  },
];

export const FAQS = [
  {
    q: "怎么报价？",
    a: "按项目固定价，聊完需求给一份写清范围和交付物的报价单。很小的工具也可以按周计价。不做隐形收费，改动范围外的加需求会提前说清楚。",
  },
  {
    q: "一般多久能做完？",
    a: "官网或落地页 1–2 周；小程序三端 3–4 周；AI Agent 或自动化工具 1–3 周。具体看功能数量，我会在报价时给明确日期。",
  },
  {
    q: "可以先做一半试试吗？",
    a: "可以。建议先做能验证价值的最小版本（MVP），跑通了再决定要不要继续加功能。很多需求其实第一阶段不需要全做。",
  },
  {
    q: "源码归谁？",
    a: "全款结清后源码和部署权限都归你。我会附一份交接文档，说明怎么启动、怎么部署、后续怎么改。",
  },
  {
    q: "上线后出问题怎么办？",
    a: "上线后两周内免费修 bug。超过两周属于新需求或长期维护，可以按次报价，也可以按月维护。",
  },
];

/** 已上线站点 — 首页成果区渲染为可点击链接行 */
export const LIVE_SITES = [
  {
    name: "个人作品集",
    href: "https://adrianw.online",
    note: "本站 · Next.js / Vercel",
  },
  {
    name: "复利计算器站",
    href: "https://top.net.im",
    note: "英文工具站 · 静态导出 / CDN",
  },
];

export const STATS = [
  { value: "4", label: "完整交付项目" },
  { value: "2", label: "已上线站点" },
  { value: "138", label: "自动化测试" },
  { value: "5", label: "技术方向" },
];

/** 全站统一主/次 CTA — 保持转化语言一致 */
export const CTAS = {
  primary: { label: "聊聊你的需求", href: "/contact" },
  secondary: { label: "看看我做过什么", href: "/work" },
};
