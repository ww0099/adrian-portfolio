/* ============================================================
   Lab 数据 — 主案例之外的实验与小项目。
   分类顺序即展示顺序；新增实验 = 向对应分类的 items 加一条。
   ============================================================ */

export type LabItem = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
  /** 色相,用于卡片渐变 */
  hue: number;
};

export type LabCategory = {
  id: string;
  title: string;
  description: string;
  items: LabItem[];
};

export const LAB_CATEGORIES: LabCategory[] = [
  {
    id: "ai-products",
    title: "AI 产品与工具",
    description: "自己每天会用、也验证过技术路线的小产品。",
    items: [
      {
        slug: "balance-widget",
        title: "DeepSeek 余额悬浮窗",
        year: "2026",
        tags: ["Tauri 2", "Rust", "桌面"],
        description:
          "一个常驻桌面的小悬浮窗，实时显示 DeepSeek API 余额与用量，省去反复登录后台。",
        hue: 168,
      },
      {
        slug: "omniroute",
        title: "OmniRoute 多 Agent 编排",
        year: "2026",
        tags: ["FastAPI", "LangGraph", "OR"],
        description:
          "四个 Agent 协同处理供应链扰乱：需求解构、运筹求解、仿真校验、决策摘要。",
        hue: 218,
      },
      {
        slug: "wechatbot",
        title: "KŪSA 聊天机器人",
        year: "2026",
        tags: ["Node.js", "LLM", "记忆"],
        description:
          "微信风格界面的角色聊天应用，支持多后端切换与对话记忆持久化。",
        hue: 142,
      },
    ],
  },
  {
    id: "web-content",
    title: "Web 与内容",
    description: "全栈产品、内容工具与 SEO 站的练习。",
    items: [
      {
        slug: "personal-blog",
        title: "墨客博客系统",
        year: "2026",
        tags: ["Next.js", "MongoDB", "NextAuth"],
        description:
          "带后台的完整博客 CMS：文章、分类、评论审核、搜索、访问统计、深浅色主题。",
        hue: 205,
      },
      {
        slug: "aicreatorlab",
        title: "AICreatorLab 工具站",
        year: "2026",
        tags: ["Next.js", "SEO", "SSG"],
        description:
          "面向英文用户的 AI 写作工具站：3 个浏览器端工具 + 内容管线 + 全套 SEO 基建。",
        hue: 192,
      },
      {
        slug: "ai-writer",
        title: "AI Writer Pro",
        year: "2026",
        tags: ["Express", "DeepSeek", "流水线"],
        description:
          "中文内容创作工具：多格式模板、小说章节管理、AI 审校与优化流水线、写作打卡。",
        hue: 24,
      },
    ],
  },
  {
    id: "research",
    title: "研究与原型",
    description: "把论文和想法做成可运行的原型，先验证，再谈产品。",
    items: [
      {
        slug: "gesture-training",
        title: "空间手势识别",
        year: "2026",
        tags: ["PyTorch", "MediaPipe", "Transformer"],
        description:
          "MediaPipe 关键点 + 双流 Transformer：空间流编码姿态，时序流编码速度，融合做手势分类。",
        hue: 262,
      },
      {
        slug: "experience-affordance",
        title: "经验条件化可供性",
        year: "2026",
        tags: ["PyTorch", "可控实验", "原型"],
        description:
          "同一个当前状态，不同历史经历是否应得到不同的可供性判断？用合成数据做结构验证。",
        hue: 286,
      },
    ],
  },
];
