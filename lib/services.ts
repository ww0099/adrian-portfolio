/* ============================================================
   服务数据 — 转化焦点。每个服务含可交付物 / 周期 / 流程 / CTA。
   新增服务 = 仅在此加一条。
   ============================================================ */

export type Service = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  process: { step: string; body: string }[];
  cta: { label: string; href: string };
};

export const SERVICES: Service[] = [
  {
    id: "website",
    title: "官网与落地页",
    summary:
      "把一个想法变成能上线、能获客的网站。设计、开发、SEO、部署一次做完，不用再找第二个人。",
    deliverables: [
      "需求梳理与页面结构",
      "响应式设计与视觉稿",
      "前端开发（Next.js / React）",
      "SEO 基础与结构化数据",
      "部署上线 + 交接文档",
    ],
    timeline: "1–2 周",
    process: [
      { step: "定内容", body: "先确认你要让访客做什么，再决定页面放什么。" },
      { step: "做原型", body: "核心页面先给你看，方向确认后再展开。" },
      { step: "上线", body: "部署、域名、搜索收录一次处理完。" },
    ],
    cta: { label: "聊聊这个需求", href: "/contact" },
  },
  {
    id: "miniapp",
    title: "微信小程序 + 运营后台",
    summary:
      "小程序、管理后台、服务端三端打通。适合本地商家、校园项目、内部业务工具。",
    deliverables: [
      "小程序端（uni-app / 原生）",
      "运营管理后台（Vue3 / React）",
      "服务端 API 与数据库设计",
      "微信登录与支付（按需）",
      "部署与运维说明",
    ],
    timeline: "3–4 周",
    process: [
      { step: "定流程", body: "先把用户从进入到完成的路径画出来。" },
      { step: "打通三端", body: "数据模型定好后，三端并行开发。" },
      { step: "验收", body: "按真实业务流程逐项验收，再交付。" },
    ],
    cta: { label: "聊聊这个需求", href: "/contact" },
  },
  {
    id: "ai-agent",
    title: "AI Agent 与自动化",
    summary:
      "把重复流程交给 AI：Agent 工具、MCP 服务、内容流水线、数据整理。也做模型接入与提示词工程。",
    deliverables: [
      "流程梳理与可行性验证",
      "Agent / 工具链开发",
      "模型 API 接入与成本控制",
      "失败重试与人工兜底",
      "使用说明与维护文档",
    ],
    timeline: "1–3 周",
    process: [
      { step: "验证", body: "先用最小样例验证 AI 能不能稳定完成这类任务。" },
      { step: "搭建", body: "把验证过的流程做成可重复运行的工具。" },
      { step: "交给团队", body: "写好说明，让非技术同事也能用。" },
    ],
    cta: { label: "聊聊这个需求", href: "/contact" },
  },
  {
    id: "internal-tools",
    title: "内部工具与数据看板",
    summary:
      "给团队做一个够用、好维护的小系统：订单管理、内容排期、数据统计、审批流程。",
    deliverables: [
      "业务流程与字段梳理",
      "管理界面与权限设计",
      "数据库与服务端",
      "数据导入 / 导出",
      "部署与培训",
    ],
    timeline: "2–4 周",
    process: [
      { step: "看现状", body: "先看你现在用 Excel 还是微信群在管，找出真正耗时的环节。" },
      { step: "做最小系统", body: "只做每天都会用的功能，不堆用不上的模块。" },
      { step: "迁移", body: "把旧数据导进来，确认能替代原来的工作方式。" },
    ],
    cta: { label: "聊聊这个需求", href: "/contact" },
  },
  {
    id: "tool-site",
    title: "工具站与 SEO 站",
    summary:
      "在线工具、计算器、内容站：从 0 到上线到被搜索引擎收录，完整链路可复用。",
    deliverables: [
      "选题与关键词调研",
      "工具功能开发",
      "内容结构与文章",
      "SEO / 结构化数据 / sitemap",
      "CI 自动部署与上线",
    ],
    timeline: "2–4 周",
    process: [
      { step: "选题", body: "先确认有人搜、竞争可控，再动手做。" },
      { step: "做透", body: "一个工具做准，比十个半成品有用。" },
      { step: "上线观察", body: "提交搜索收录，用真实数据决定下一步。" },
    ],
    cta: { label: "聊聊这个需求", href: "/contact" },
  },
];
