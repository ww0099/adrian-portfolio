# DESIGN.md — Adrian 作品集

> 视觉 SSOT。代码里的令牌在 `app/globals.css` 的 `@theme` 中，与本文一一对应。
> 参考气质：ludmillamaury.com（整体）、bartoszkolenda.com（动效）、v6.usestate.org（排版）、nanfu.global（交互）。

## 一句话

**暖黑电影感 + 编辑式排版 + 慢速揭示。** 底色是暖近黑而不是冷蓝黑，文字是象牙而不是纯白，全站只有一个古铜金强调色。

## Design Read

这是独立开发者的作品集，给国内中小商家与创业团队看，用「暗色电影感 + 编辑式排版」语言，倾向「全屏首屏 + 长滚动叙事 + 极简索引」，转盘 **LAYOUT_VARIANCE=8 / VISUAL_DENSITY=3 / EMPHASIS_LEVEL=5**。

## Colors

| Token | 值 | 用途 |
|---|---|---|
| `bg` | `#0F1210` | 页面底（暖近黑） |
| `bg-elevated` | `#151A16` | 抬升面 |
| `surface` | `#1B211C` | hover 行 / 卡片面 |
| `surface-2` | `#232A24` | 次级面 |
| `ink` | `#EDE8DF` | 主文字（象牙，非纯白） |
| `text-muted` | `#A09A8F` | 正文次级 |
| `text-dim` | `#6F6A61` | 标签 / 脚注 |
| `accent` | `#C08A45` | 古铜金（全屏面积 ≤6%） |
| `accent-secondary` | `#D6A967` | hover |
| `line` | `rgba(237,232,223,.12)` | 发丝线 |
| `line-strong` | `rgba(237,232,223,.24)` | 强分隔 |

规则：强调色只用于序号、链接 hover、CTA、少量斜体强调词；不刷满、不做渐变文字、不做彩色标签。

## Typography

| 角色 | 字体栈 |
|---|---|
| Display | `Songti SC / STSong / Noto Serif SC / Source Han Serif SC / Georgia` |
| Body | `Inter Variable / PingFang SC / Microsoft YaHei / Noto Sans SC` |

| 档位 | 值 |
|---|---|
| 首屏巨字 `display-xl` | `clamp(3.1rem, 12.5vw, 12.5rem)`，行高 .86，字距 -.045em |
| 区块标题 `display-lg` | `clamp(2.4rem, 6vw, 5.25rem)` |
| 次级标题 `display-md` | `clamp(1.75rem, 3.2vw, 2.75rem)` |
| 正文 | 16px，行高 1.65 |
| 大正文 `body-lg` | `clamp(1.0625rem, 1.35vw, 1.3125rem)`，行高 1.72 |
| Eyebrow / 标签 | 11px，字距 .28em，大写 |

## Layout

- 容器宽 `1480px`，页边距 24px（移动）/ 40px（桌面）。
- 首屏 `100svh`，内容沉底，大量留白。
- 项目索引是**整行列表**，不是三列卡片。
- 相邻区块版式不同：首屏巨字 → 跑马灯 → 陈述双栏 → 整行索引 → 能力行 → 粘性流程 → 实验行 → 问答 → 巨字 CTA。
- 分隔一律 1px 发丝线。

## Components

- 导航：固定顶栏，滚动后加发丝线与底色；菜单打开为全屏巨字列表。
- 主按钮：古铜金实底 + 暖黑字。
- 次按钮 / 链接：发丝描边或下划线滑入。
- 图片框：1px 描边，hover 轻微放大并提升饱和度；案例封面用 `object-contain` 避免裁掉界面文字。
- 表格 / 列表：发丝线分隔，无阴影。
- 数字：衬线大号，仅用古铜金。

## Motion

- 统一缓动 `cubic-bezier(0.16, 1, 0.3, 1)`。
- 页面进入：淡入上移 0.7s。
- 区块揭示：Framer Motion `whileInView`，0.9s，位移 26px，只播一次。
- 首屏标题：按行遮罩上移，0.95s，逐行延迟 0.09s。
- 跑马灯：42s 线性循环。
- 平滑滚动：Lenis（`lerp: 0.09`），尊重 `prefers-reduced-motion`。
- 光标：细圆点，hover 可交互元素放大到 44px 并降低不透明度；触屏禁用。

## Don'ts

- 不用纯白 `#FFFFFF` / 纯黑 `#000000`。
- 不用紫蓝 SaaS 渐变、玻璃拟态、厚阴影、彩色边框。
- 不用三列卡片当万能布局。
- 不用 emoji 当图标。
- 不放假客户、假评价、假数据。
- 不用装饰性序号（项目序号是真实顺序，保留）。

## 待替换

- `lib/data.ts` 中的 `SITE.email` 目前是占位值，上线前替换为真实邮箱。
- 主域名：`adrianw.online`；`adrianw.site` 做 301 跳转。
