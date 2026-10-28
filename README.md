# MCM/ICM 优秀论文写作指南 · mcm-o-guide

> 基于 **502 篇 MCM/ICM 历年获奖论文（2004–2024）** 的语料统计与逐篇精读，再加上 **3 篇 COMAP 官方评委点评** 提炼出的写作技能包。
> 目标只有一个：帮队伍在 4 天赛程里写出一篇"评委愿意读到第 25 页"的论文。

![papers](https://img.shields.io/badge/corpus-502%20papers-blue)
![years](https://img.shields.io/badge/years-2004--2024-informational)
![type](https://img.shields.io/badge/type-Agent%20Skill-6f42c1)
![lang](https://img.shields.io/badge/lang-中文-red)

**简体中文** · [English](README.en.md)

---

## 这是什么

这不是"经验分享帖"，而是一份**有数据支撑**的写作规范：每个结论后面都跟着统计口径，例如"449 篇 O/F/M 论文中，93% 做了灵敏度分析"。

内容覆盖美赛论文的全流程：

- **摘要（Summary）**——一页定生死，逐句模板 + 5 篇 O 奖摘要拆解
- **页预算**——25 页怎么分配，图表配额给到具体数量
- **模型选择**——A–F 六类题型的模型矩阵与基线推荐
- **灵敏度 / 稳健性分析**——评委最看重、队伍最常漏的一节
- **全文一致性**——数字、假设、图表、引用对不上的自查清单
- **从 M 奖到 O 奖**——差距到底在哪，怎么补

同时附带可直接用的骨架模板（LaTeX / Markdown）和 4 个 Node.js 小工具。

## 快速上手

### 方式一：当作 OpenCode / Claude 技能使用（推荐）

把整个目录放进技能目录即可，Agent 会在你写论文、改摘要、查结构时自动调用：

```bash
git clone https://github.com/Timevelyer/mcm-o-guide.git
# OpenCode
mv mcm-o-guide ~/.config/opencode/skills/mcm-o-guide
# 或 Claude Code
mv mcm-o-guide ~/.claude/skills/mcm-o-guide
```

### 方式二：当手册直接读

不装任何东西，从 [SKILL.md](SKILL.md) 开始读，再按需跳转 [references/](references) 下的专题文件。
先用 [使用指南.md](使用指南.md) 里的"什么时候用"表格定位，效率最高。

英文版文档：[SKILL.en.md](SKILL.en.md)（主技能文件全译）、[GUIDE.en.md](GUIDE.en.md)（使用指南全译）。

### 方式三：跑工具脚本

```bash
node scripts/extract-pdf.mjs paper.pdf paper.txt   # PDF → 带页码的纯文本
node scripts/check-paper.mjs paper.txt             # 一致性检查：数字/假设/图表/引用
node scripts/parameter-sweep.mjs                   # 灵敏度分析：参数扫描 + 敏感性排序
node scripts/benchmark-paper.mjs                   # 与顶尖论文对标打分
```

需要 Node.js 18+；只有 `extract-pdf.mjs` 依赖 `pdfjs-dist`（`npm install pdfjs-dist`）。
详细用法见 [scripts/README.md](scripts/README.md)。

## 目录结构

```
mcm-o-guide/
├── SKILL.md                    # 主技能文件：13 章，从评委机制到句式库
├── SKILL.en.md                 # 主技能文件英文版
├── 使用指南.md                  # 中文使用说明 + 场景速查表
├── GUIDE.en.md                 # 使用指南英文版
├── playbooks/                  # 分工能力训练：建模 / 编程 / 写作 / 检索
├── references/                 # 23 篇专题：摘要模板、模型矩阵、评委点评、避坑、案例…
├── templates/                  # LaTeX 与 Markdown 论文骨架
└── scripts/                    # 4 个 Node.js 工具脚本
```

几个值得优先打开的：

| 文件 | 用途 |
|---|---|
| [references/summary-template.md](references/summary-template.md) | 摘要模板 + 5 篇 O 奖摘要逐句拆解 |
| [references/model-matrix.md](references/model-matrix.md) | 6 类题型模型选择矩阵 |
| [references/checklist.md](references/checklist.md) | 提交前一致性审查清单 |
| [references/quick-reference-card.md](references/quick-reference-card.md) | 提交前 30 分钟必查 |
| [references/judge-commentary.md](references/judge-commentary.md) | 官方评委点评与交叉分析 |
| [references/common-errors.md](references/common-errors.md) | 常见致命错误反面教材 |

完整索引见 [使用指南.md](使用指南.md)。

## 数据基准

| 指标 | 来源 |
|---|---|
| 语料统计（449 篇有效论文） | 502 篇 PDF 自行提取 + 统计 |
| 评委点评 | COMAP 官方发布的 2009 A/B、2021 Tips |
| 页预算 / 图表配额 | 2021–2024 年 O 奖论文中位数 |
| O 奖摘要拆解 | 5 篇 O 奖论文逐句分析 |

## 注意

本仓库**不替代** COMAP 当届官方规则。提交前请务必核对当年页数限制、文件格式、提交方式、AI 使用政策与匿名要求——官规每年可能微调，本仓库的写作建议则相对长期稳定。

---

如果这份指南帮到你，欢迎 Star；发现数据口径或模板问题，开 Issue 即可。
