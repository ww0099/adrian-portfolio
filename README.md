# Adrian — 独立开发者作品集

暖黑电影感 + 编辑式排版的个人作品集，用于展示真实项目并承接 vibe coding 服务。

## 技术栈

- Next.js 15（App Router）+ React 19 + TypeScript
- Tailwind CSS v4（设计令牌写在 `app/globals.css` 的 `@theme`）
- next-intl（第一阶段中文单语，路由无前缀）
- Framer Motion（进入/揭示动画）+ Lenis（平滑滚动）
- 无后端、无数据库；联系表单走 `mailto`

## 本地运行

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 生产构建
npm run start    # 运行生产构建
```

## 目录

```
app/
  globals.css        # 设计令牌 + 基础样式 + 动效
  [locale]/
    layout.tsx       # 根布局、SEO、导航与页脚
    page.tsx         # 首页
    work/            # 作品索引与案例详情
    services/        # 服务
    lab/             # 实验室
    about/           # 关于
    contact/         # 联系
components/
  sections/          # 页面区块
  layout/            # 导航、页脚
  anim/              # 揭示、遮罩文字、滚动进度
  providers/         # Lenis、自定义光标
  seo/               # JSON-LD
lib/
  data.ts            # 品牌、能力、流程、FAQ、真实统计
  work.ts            # 4 个真实案例
  services.ts        # 5 类服务
  lab.ts             # 实验室项目
messages/zh.json     # 界面文案
public/cases/        # 真实项目截图
DESIGN.md            # 视觉 SSOT
```

## 内容维护

- 改名字 / 邮箱 / 域名：只改 `lib/data.ts` 的 `SITE`
- 改案例：只改 `lib/work.ts`，页面、路由、sitemap 自动适配
- 改服务：只改 `lib/services.ts`
- 改实验室：只改 `lib/lab.ts`
- 改界面文案：`messages/zh.json`

**原则：只写可验证的事实，不编造客户、评价与业绩数字。**

## 上线前必须替换

- [x] `lib/data.ts` 的 `SITE.url` → `https://adrianw.online`
- [ ] `lib/data.ts` 的 `SITE.email`（当前为 RFC 保留示例邮箱）
- [ ] `public/cases/` 中截图如涉及隐私信息，先脱敏
- [ ] 微信二维码（如需要）：放 `public/` 并在联系页引用

## 部署

推送到 GitHub 后在 Vercel 导入即可，框架选 Next.js，无需环境变量。
