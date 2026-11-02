/* ============================================================
   案例研究数据 — 全部为真实自研项目。
   新增案例 = 仅在此加一条;页面、路由、sitemap 自动适配。
   原则：只写可验证的事实，不编造客户与业绩数字。
   ============================================================ */

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  overview: string;
  problem: string;
  process: { title: string; body: string }[];
  designDecisions: { title: string; body: string }[];
  outcome: string;
  metrics: { value: string; label: string }[];
  lessons: string[];
  tags: string[];
  /** 色相,用于封面图片缺失时的渐变兜底 */
  hue: number;
  /** 封面图（public 下路径） */
  image?: string;
  /** 线上地址 — 存在时在结果区渲染"访问站点"按钮 */
  liveUrl?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "pocket-agent",
    title: "PocketAgent",
    category: "AI 工具 · 命令行 Agent",
    year: "2026",
    client: "自研项目",
    role: "独立开发 · 架构与实现",
    overview:
      "一个可以装进 U 盘的 AI 编程 Agent：自带工具系统、权限控制、会话记忆和 MCP 扩展，换模型只改一个配置。",
    problem:
      "现成的 AI 编程工具大多绑死在某个平台或某个模型上：换模型要重配，换电脑要重装，离线就完全不能用。我想要一个能带着走、能自己掌控数据和上下文的版本——顺便把 Agent 的每个环节都亲手实现一遍，而不是只会调用别人的 API。",
    process: [
      {
        title: "先定边界，再写代码",
        body: "把 Agent 拆成 10 个互不依赖的模块：消息模型、执行内核、工具、权限、会话、扩展、Provider、UI、配置、日志。每块单独测试，最后再组装，避免写成一大坨。",
      },
      {
        title: "工具系统与权限门",
        body: "Read / Write / Edit / Glob / Grep / Bash / Todo / Memory / Skill / Task 十类工具，每个都带权限规则 DSL。危险操作默认拦截，审批队列在 TUI 里逐条确认。",
      },
      {
        title: "三种运行形态",
        body: "同一套 SessionRuntime 撑起 headless（脚本/CI）、plain（纯文本 REPL）和 Ink TUI（日常使用）。三种形态共享会话恢复与上下文压缩逻辑。",
      },
      {
        title: "测试先行，离线可跑",
        body: "29 个测试文件、138 个离线测试，覆盖工具、权限、会话、压缩、扩展、UI 与端到端冒烟。不依赖真实 API Key 也能完整验证。",
      },
    ],
    designDecisions: [
      {
        title: "Provider 抽象，而不是绑定一家",
        body: "Anthropic 与 OpenAI 兼容接口统一成一个流式适配层，DeepSeek / 本地模型 / 其他兼容服务都能接。模型列表与重试策略放在配置里，不写死。",
      },
      {
        title: "所有运行数据都在 Agent 根目录内",
        body: "会话 JSONL、配置、密钥、日志都不写用户目录。打包成便携版后，整个文件夹拷走就能在另一台 Windows 上继续用。",
      },
      {
        title: "权限是产品的一部分，不是补丁",
        body: "与其上线后再补沙箱，不如一开始就把审批队列做成 TUI 的核心交互：允许一次 / 始终允许 / 拒绝，每个决定都能追溯。",
      },
    ],
    outcome:
      "v1 候选版本完成并通过 M6 验收：三种运行形态可用，工具闭环与会话恢复通过端到端冒烟，便携版可直接从 U 盘启动。代码已托管在 GitHub。",
    metrics: [
      { value: "138", label: "离线测试" },
      { value: "29", label: "测试文件" },
      { value: "10", label: "工具类型" },
      { value: "3", label: "运行形态" },
    ],
    lessons: [
      "Agent 的难点不在模型调用，而在上下文、权限和失败恢复。",
      "先把模块边界画清楚，AI 写代码才不会越写越乱。",
      "能离线跑完的测试，才是真的测试；依赖外部 API 的测试只能算演示。",
    ],
    tags: ["TypeScript", "Node.js", "Agent", "MCP"],
    hue: 28,
    image: "/cases/pocket-agent/tests.png",
  },
  {
    slug: "local-job-platform",
    title: "学生兼职平台",
    category: "小程序 · 全栈业务系统",
    year: "2026",
    client: "自研项目（MVP 验证版）",
    role: "产品设计 + 全栈开发",
    overview:
      "面向在校学生的本地兼职小程序：学生按「离学校近、课余时间、不押金」找工作，运营在后台录入和审核职位。",
    problem:
      "校园兼职信息散在微信群和公告栏里，真假难辨，学生最怕遇到押金骗局。直接做一个双边平台又太重——冷启动没有供给，九成同类项目死在这一步。",
    process: [
      {
        title: "先砍需求，再动手",
        body: "砍掉蓝领市场、自研聊天和广告位，只保留「浏览 → 收藏 → 打电话」这条最短路径。验证期不建 Redis、队列和限流，单城市规模用不上。",
      },
      {
        title: "三端一次打通",
        body: "uni-app 小程序（学生端）+ Vue3 运营后台 + NestJS 服务端。同一套 API，后台负责录入与审核，小程序负责浏览与联系。",
      },
      {
        title: "数据模型按验证指标设计",
        body: "6 张表：用户、职位、分类、收藏、联系记录、举报。联系记录是验证「浏览 → 联系」转化的核心数据源，看板直接围绕它设计。",
      },
      {
        title: "工程化不掉链子",
        body: "Prisma 迁移、30 项单元测试、ESLint 9、Docker 多阶段构建、GitHub Actions CI、Nginx 反向代理模板，上线前该有的都有。",
      },
    ],
    designDecisions: [
      {
        title: "联系方式交换，而不是自研 IM",
        body: "聊天是成本最高、审核最重的模块。先用「一键拨打 + 联系记录」验证需求，真有用户再考虑加聊天。",
      },
      {
        title: "企业信息内嵌，不单独建表",
        body: "验证版由运营录入职位，企业信息跟着职位走。少一张表、少一层关联，后台操作也更快。",
      },
      {
        title: "金额用「分」存储",
        body: "涉及薪资的计算一律用整数分，避免浮点误差。这是小决定，但能省掉后面很多对不上账的麻烦。",
      },
    ],
    outcome:
      "完整业务闭环跑通：运营注册登录 → 录入职位 → 学生浏览/搜索 → 收藏/举报 → 联系方式交换，前后端与数据三层全通。微信登录代码已完成，填入 AppID 即可启用。",
    metrics: [
      { value: "3", label: "端（小程序/后台/服务端）" },
      { value: "6", label: "数据表" },
      { value: "30", label: "单元测试" },
      { value: "11", label: "看板指标" },
    ],
    lessons: [
      "MVP 的难点是说「不做」：每砍一个功能，冷启动就快一点。",
      "验证指标要在建表时就定下来，否则做完也不知道有没有用。",
      "工程化不是上线后才补的，CI 和测试在第一天写最便宜。",
    ],
    tags: ["uni-app", "NestJS", "Prisma", "MySQL"],
    hue: 205,
    image: "/cases/local-job-platform/admin-dashboard.png",
  },
  {
    slug: "compound-interest-calculator",
    title: "复利计算器站",
    category: "Web · 已上线工具站",
    year: "2026",
    client: "自研项目",
    role: "设计 + 开发 + 部署",
    overview:
      "一个纯英文的金融计算器网站，从 0 到上线到提交搜索引擎，完整走了一遍工具站的冷启动流程。",
    problem:
      "想验证一件事：一个人能不能独立完成「做站 → 部署 → SEO → 变现准备」的全链路。选复利计算器是因为需求真实、搜索量稳定、不需要后端，适合把精力放在产品和内容上。",
    process: [
      {
        title: "先把计算做对",
        body: "5 种求解模式（终值/现值/利率/期限/月供）+ 复利图表 + 方案对比 + 历史记录。核心公式单独写测试，避免算错。",
      },
      {
        title: "补齐信任页",
        body: "隐私政策、服务条款、免责声明、方法论、参考文献、关于页。金融类站点（YMYL）没有这些，搜索引擎不会给权重。",
      },
      {
        title: "内容与 SEO 一起做",
        body: "10 篇英文长文 + JSON-LD 结构化数据（Article / FAQ / Breadcrumb）+ sitemap + robots。每篇文章都有站内互链和权威外链。",
      },
      {
        title: "静态导出 + CI 部署",
        body: "Next.js output: export，GitHub Actions 构建后推 GitHub Pages，Cloudflare 做 CDN。推送即部署，没有服务器要维护。",
      },
    ],
    designDecisions: [
      {
        title: "纯英文单语",
        body: "目标流量来自英文搜索，双语会稀释主题权威，也增加审核风险。第一版只做英文，把一件事做透。",
      },
      {
        title: "不做后端",
        body: "所有计算在浏览器完成，没有数据库、没有登录、没有服务器成本。工具站的第一优先级是稳定和快。",
      },
      {
        title: "先上线，再优化",
        body: "不等 Lighthouse 满分才发布。先把站点推上去、提交 sitemap、观察索引，再按真实数据优化。",
      },
    ],
    outcome:
      "站点已上线，23 个内容路由、4 个计算器、10 篇英文文章，GitHub Actions 自动部署，sitemap 已提交搜索引擎。代码仓库公开。",
    liveUrl: "https://top.net.im",
    metrics: [
      { value: "23", label: "内容路由" },
      { value: "4", label: "计算器" },
      { value: "10", label: "英文文章" },
      { value: "1", label: "线上域名" },
    ],
    lessons: [
      "工具站的护城河不是功能，是「算得对 + 讲得清 + 找得到」。",
      "静态导出能省掉 90% 的运维问题，小站没必要上服务器。",
      "先上线再优化：真实的搜索数据比任何本地评分都有用。",
    ],
    tags: ["Next.js", "TypeScript", "SEO", "Cloudflare"],
    hue: 210,
    image: "/cases/compound-interest/desktop.png",
  },
  {
    slug: "omniroute",
    title: "OmniRoute",
    category: "AI · 多 Agent 运筹系统",
    year: "2026",
    client: "自研项目",
    role: "独立开发 · 多 Agent 与运筹",
    overview:
      "四个 Agent 协同，把一段自然语言的供应链扰乱报告，变成可执行的运筹方案和一份高管能读的决策摘要。",
    problem:
      "供应链扰动通常以自然语言出现——邮件、IM、临时通报。要把它变成运筹模型，得人工翻译成变量、约束和目标；求解结果还要校验物理冲突，最后再翻译成业务语言。这条链路每一步都靠人，慢，而且容易断。",
    process: [
      {
        title: "拆成四个 Agent",
        body: "Router 负责理解与结构化，Solver 负责建模求解，Simulation 负责数字孪生校验，Executive 负责商业摘要。每个 Agent 只做一件事，接口固定。",
      },
      {
        title: "把自然语言变成边界条件",
        body: "Router 用链式推理把扰乱报告拆成货物、车辆、时间窗与约束，输出统一的结构化边界条件，交给下游。",
      },
      {
        title: "自动建模与求解",
        body: "Solver 用 PuLP 生成线性/混合整数模型，调用 CBC 求解，覆盖 VRP 等场景；求解器通过适配层隔离，可替换。",
      },
      {
        title: "仿真校验与商业摘要",
        body: "Simulation 在数字孪生里回放方案、检测冲突并触发自反思；Executive 把结果转成 P&L 对比和高管可读的摘要。",
      },
    ],
    designDecisions: [
      {
        title: "Agent 之间用统一消息总线",
        body: "不让 Agent 互相直接调用。每个 Agent 继承统一基类、通过消息总线通信，链路可观测、可替换、可单独测试。",
      },
      {
        title: "求解器适配层",
        body: "建模与求解隔离开，CBC 换成 SCIP 或别的求解器时，业务层不用改。运筹系统里，最容易被焊死的就是求解器。",
      },
      {
        title: "用测试锁住整条决策链",
        body: "105 个测试覆盖单元、集成与 E2E：从 Router 输出被 Solver 消费，到 Solver 结果被 Simulation 校验，再到完整链路编排。",
      },
    ],
    outcome:
      "四个 Agent、FastAPI 接口与 Next.js 前端控制台全部可运行；105 个自动化测试在本地全部通过（单元 / 集成 / E2E）。前端为演示界面，图表数据为本地模拟；后端编排、求解与校验逻辑有测试覆盖。",
    metrics: [
      { value: "105", label: "自动化测试" },
      { value: "4", label: "Agent" },
      { value: "9,950", label: "行 Python" },
      { value: "11", label: "测试文件" },
    ],
    lessons: [
      "多 Agent 的难点不是让它们说话，而是定义清楚每一步的输入输出契约。",
      "运筹模型必须可替换，不能把求解器焊死在业务逻辑里。",
      "测试要覆盖链路，不只是单点；链路断了，单点全绿也没用。",
    ],
    tags: ["Python", "FastAPI", "PuLP", "Multi-Agent"],
    hue: 218,
    image: "/cases/omniroute/dashboard.png",
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);
