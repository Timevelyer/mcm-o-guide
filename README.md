# MCM/ICM 优秀论文写作指南 · mcm-o-guide

**简体中文** · [English](README.en.md)

[![stars](https://img.shields.io/github/stars/Timevelyer/mcm-o-guide?style=flat-square&color=b23a16)](https://github.com/Timevelyer/mcm-o-guide/stargazers)
[![license](https://img.shields.io/github/license/Timevelyer/mcm-o-guide?style=flat-square)](LICENSE)
[![corpus](https://img.shields.io/badge/corpus-502%20papers-blue?style=flat-square)](references/top-award-strategy.md)
[![pages](https://img.shields.io/badge/tool-摘要自检器-b23a16?style=flat-square)](https://timevelyer.github.io/mcm-o-guide/)

![mcm-o-guide](docs/assets/og.png)

> 初筛不到 5 分钟。评委只找三样东西：**每个 Task 的量化结论、方法链、模型名字**。
> 这份指南把 502 篇获奖论文（2004–2024）和 3 篇官方评委点评，拆成你可以照着写的东西。

**在线工具（不用安装）**

- **[摘要自检器](https://timevelyer.github.io/mcm-o-guide/)** —— 贴摘要，10 秒出体检报告 · [English](https://timevelyer.github.io/mcm-o-guide/en/)
- **[一页纸清单](https://timevelyer.github.io/mcm-o-guide/cheatsheet.html)** —— 摘要骨架 + 页预算 + 提交前检查，A4 打印贴桌上

---

## 它到底解决什么问题

| 你可能遇到的情况 | 这里有 |
|---|---|
| 摘要写了一页，全是背景和方法，没有数字 | 10 句模板 + 5 篇 O 奖摘要**逐句拆解** |
| 25 页不知道每页写什么、放几张图 | 页预算表（精确到 0.5 页）+ A–F 六题型的图表配额中位数 |
| 模型选完心里没底，不知道够不够 | 6 类题型的模型矩阵、基线推荐、验证方式 |
| 灵敏度堪堪写一段，不知道够不够 | 3 种范式 + 语料里 93% 的 O/F/M 论文都做了什么 |
| 交之前总觉得哪里对不上 | 假设 / 数字 / 结构 / Task 覆盖 四类一致性清单 |
| 想知道 M 奖和 O 奖差在哪 | 8 个维度的对照表，每项都有中位数 |

## 三种用法

**1. 当技能装进 Agent（推荐）** —— 写论文、改摘要、查结构时自动调用

```bash
git clone https://github.com/Timevelyer/mcm-o-guide.git
mv mcm-o-guide ~/.config/opencode/skills/mcm-o-guide   # OpenCode
mv mcm-o-guide ~/.claude/skills/mcm-o-guide            # Claude Code
```

Windows 用 `Move-Item`；技能入口是 `SKILL.md`，英文版是 [`SKILL.en.md`](SKILL.en.md)。

**2. 当手册直接读** —— 从 [SKILL.md](SKILL.md) 开始，用 [使用指南.md](使用指南.md) 的「什么时候用」表格定位。

**3. 只用工具** —— 不必读文档：

```bash
node scripts/extract-pdf.mjs paper.pdf paper.txt   # PDF → 带页码的纯文本
node scripts/check-paper.mjs paper.txt             # 数字/假设/图表/引用 一致性检查
node scripts/parameter-sweep.mjs                   # 灵敏度分析：参数扫描 + 敏感性排序
node scripts/benchmark-paper.mjs                   # 与顶尖论文对标打分
```

Node.js 18+；只有 `extract-pdf.mjs` 需要 `npm install pdfjs-dist`。

## 里面有什么

```
mcm-o-guide/
├── SKILL.md            # 主技能：13 章，评委机制 → 句式库
├── 使用指南.md          # 场景速查表（该看哪个文件）
├── references/         # 23 篇专题：摘要模板 / 模型矩阵 / 评委点评 / 案例 / 避坑
├── playbooks/          # 建模、编程、写作、检索 四类分工能力训练
├── templates/          # LaTeX + Markdown 论文骨架
└── scripts/            # 4 个自动化脚本
```

先看这几篇就够用：

- [references/summary-template.md](references/summary-template.md) —— 摘要模板 + 5 篇 O 奖逐句拆解
- [references/model-matrix.md](references/model-matrix.md) —— 6 类题型模型选择矩阵
- [references/page-by-page.md](references/page-by-page.md) —— 25 页逐页解剖
- [references/checklist.md](references/checklist.md) —— 提交前一致性清单
- [references/common-errors.md](references/common-errors.md) —— 反面教材

## 数据从哪来

| 指标 | 来源 |
|---|---|
| 语料统计（449 篇有效论文） | 502 篇 PDF 自行提取 + 统计 |
| 评委点评 | COMAP 官方：2009 A/B、2021 Tips |
| 页预算 / 图表配额 | 2021–2024 年 O 奖论文中位数 |
| O 奖摘要拆解 | 5 篇 O 奖论文逐句分析 |

> **注意**：本仓库不替代 COMAP 当届规则。提交前必须核对当年页数、格式、提交方式、AI 使用政策与匿名要求。

## 常见问题

**Q：这些数字结论会不会过时？**
写作结构相对稳定，页预算和图表配额会随年份小幅漂移；每年赛后我会补当年 O 奖分析并更新版本号，`CHANGELOG.md` 里能看到改了什么。

**Q：适合国赛（CUMCM）吗？**
评委机制和页数规则不同，但摘要结构、图表解读、灵敏度范式、一致性检查是通用的。国赛不要直接套 25 页预算。

**Q：可以拿去商用/二次分发吗？**
MIT。改完注明出处即可。

**Q：发现数据或模板有问题？**
开 [Issue](https://github.com/Timevelyer/mcm-o-guide/issues/new/choose)，带上出处或你的复现结果，我会核。

## 参与

- 用完想反馈的，直接开 Issue 说哪一条真的救了你 —— 这类反馈会写进下一版
- 有真实的 O 奖 / F 奖论文拆解素材，欢迎 PR
- 只需要点个 ★ Star，就能让更多队伍在赛前搜到它

## 许可

[MIT](LICENSE)。文档部分可在署名后自由转载，商业使用请保留本仓库链接。

---

如果这份指南帮你少踩一个坑，点个 **[★ Star](https://github.com/Timevelyer/mcm-o-guide)** —— 这是它被下一个队伍找到的唯一方式。
