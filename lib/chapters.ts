export type ChapterId =
  | "hero"
  | "about"
  | "capabilities"
  | "work"
  | "showcase"
  | "process"
  | "testimonials"
  | "faq"
  | "cta";

export interface Chapter {
  id: ChapterId;
  /** 章节编号，纯展示用 */
  index: string;
  /** 侧边导航用的短标签 */
  label: string;
  /** 章节头部导语（叙事钩子） */
  lead: string;
  /** 对应 DOM 节点 id，供滚动监听 */
  sectionId: string;
}

/** 首页章节顺序 —— 决定"滚动旅程"的叙事推进 */
export const CHAPTERS: Chapter[] = [
  {
    id: "hero",
    index: "01",
    label: "序章",
    lead: "一个人 + AI，把想法做成能上线的产品。",
    sectionId: "top",
  },
  {
    id: "about",
    index: "02",
    label: "关于",
    lead: "我是 Adrian，一名独立开发者。",
    sectionId: "about",
  },
  {
    id: "capabilities",
    index: "03",
    label: "能力",
    lead: "我能帮你做什么。",
    sectionId: "capabilities",
  },
  {
    id: "work",
    index: "04",
    label: "作品",
    lead: "四个完整项目，每个都有可验证的细节。",
    sectionId: "work",
  },
  {
    id: "showcase",
    index: "05",
    label: "工艺",
    lead: "把交互做成体验。",
    sectionId: "showcase",
  },
  {
    id: "process",
    index: "06",
    label: "流程",
    lead: "从聊需求到上线，只有四步。",
    sectionId: "process",
  },
  {
    id: "testimonials",
    index: "07",
    label: "评价",
    lead: "暂无客户评价，先看作品。",
    sectionId: "testimonials",
  },
  {
    id: "faq",
    index: "08",
    label: "问答",
    lead: "联系之前，你可能想知道的事。",
    sectionId: "faq",
  },
  {
    id: "cta",
    index: "09",
    label: "开始",
    lead: "有想法？我们聊聊。",
    sectionId: "cta",
  },
];

export function getChapter(id: ChapterId): Chapter {
  return CHAPTERS.find((c) => c.id === id) as Chapter;
}
