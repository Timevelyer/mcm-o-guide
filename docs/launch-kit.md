# 发布工具包 · Launch kit

这份文件是给你自己用的，不是给访客看的。目标：在 **2027 美赛（1/28–2/1）** 之前把仓库推到需要它的人面前。

> 原则：**发结论，不发项目**。「我统计了 502 篇获奖论文，93% 做了灵敏度分析，而 35% 的队伍没做」比「我做了一个 skill」的传播力高一个数量级。

---

## 0. 一句话定位（所有渠道都用这句）

> 502 篇 MCM/ICM 获奖论文 + 3 篇官方评委点评，提炼成一份写作口径，并做成一个 10 秒出结果的摘要自检器。

差异点（对着竞品说）：**别家是「让 AI 替你写完」，这个是「在你交之前告诉你哪里会被淘汰」**。写作质检，不是自动生成。

---

## 1. 渠道优先级

| 优先级 | 渠道 | 为什么 | 单次预期 |
|---|---|---|---|
| P0 | awesome 列表 PR | 一次提交长期导流，且带来的是「会 star 的人」 | 30–80 star |
| P0 | 知乎长文 | 中文数模圈搜索入口，赛前被反复搜到 | 50–200 star |
| P1 | SkillsMP / awesomeclaude.ai 目录 | 同类 skill 在该站有 1,888 star 的先例 | 20–60 star |
| P1 | 小红书 | 学生密度最高，但转化率低，适合刷存在感 | 10–30 star |
| P2 | B 站 60 秒演示 | 建立可信度，长尾 | 5–20 star |
| P2 | X / Twitter（英文） | 国际市场小但竞争极小 | 10–40 star |
| P3 | V2EX / 即刻 | 技术圈，容易被打成广告，慎发 | 0–10 star |

---

## 2. 时间表

| 时间 | 动作 |
|---|---|
| 本周 | 提 3 个 awesome list PR；提交 SkillsMP 目录 |
| 11 月中 | 知乎长文（打基础，让搜索有内容） |
| 12 月 | 小红书 3 条、B 站 1 条；发 v1.2（补 2026 O 奖分析） |
| 1 月 1–20 | **冲刺期**：发「赛前 30 分钟检查清单」图文，挂工具链接 |
| 1/28–2/1 | 赛期每天发「今日高频错误」，Issues 里实时答疑 |
| 5/8 出分 | 发「2027 O 奖论文复盘」，做二次传播 |

---

## 3. 现成文案

### 3.1 知乎长文

**标题（选一个）**
- 我统计了 502 篇美赛获奖论文，摘要里最稳定的差距是「数字个数」
- 美赛摘要写了 500 词还是被刷？评委其实只看三样东西
- 93% 的 O 奖做了灵敏度分析，35% 的队伍根本没做

**开头 200 字（直接抄）**

> 去年帮学弟看论文，摘要 520 词，结构完整、语法没错、模型也像模像样，但通篇只有 7 个数字。
> 我把 502 篇 2004–2024 的 MCM/ICM 获奖论文提取出来做了统计：O 奖摘要的数字个数中位数是 20–35 个，M 奖只有 10–15 个。
> 这不是文笔问题，是「评委在 5 分钟内找不到结论」的问题。下面把摘要、页预算、灵敏度三块的可执行口径拆开讲。

**正文结构**：① 三轮淘汰机制 → ② 摘要 10 句模板 + 一个真实拆解 → ③ 25 页页预算表 → ④ 灵敏度三范式 → ⑤ 一致性清单 → ⑥ 工具链接（自然收尾，不要开头就贴）。

**结尾**：贴工具链接 + 仓库链接，写「数据和口径都在仓库里，发现错的开 issue 骂我」。

### 3.2 小红书（3 条，配图用 `docs/assets/og.png`）

1. 标题：**美赛摘要自查清单｜10 秒看出会不会被刷**
   正文：`评委初筛 5 分钟，只看三样：每个 Task 的量化结论、方法链、模型名。把摘要贴进这个自检器，7 项打分，缺什么直接告诉你补哪句。（链接放评论区）`
2. 标题：**25 页怎么分？O 奖中位数在这**
   正文：`摘要+目录 2 页，模型和结果 10–13 页，灵敏度 1–2 页，优劣势 1 页。最容易被浪费的是引言——写了 4 页背景，评委会直接跳到结果。`
3. 标题：**灵敏度不会写？照这三个范式抄**
   正文：`单参数扫描（3–5 个参数 × 3–5 个值）／多情景压力测试（×2、×5）／初始条件扰动+置信区间。写完必须有一句结论：模型对 X 敏感/稳健。`

### 3.3 B 站 60 秒脚本

| 秒 | 画面 | 台词 |
|---|---|---|
| 0–5 | 摘要截图，数字全被涂黑 | 「这篇摘要，评委 5 分钟就刷了。」 |
| 5–15 | 统计图：数字个数 20–35 vs 10–15 | 「502 篇获奖论文里，O 奖摘要有 20–35 个数字，M 奖只有 10–15 个。」 |
| 15–35 | 录屏：粘贴 → 出分 → 点到建议 | 「贴进去，7 项打分，缺什么它直接说。」 |
| 35–50 | 改前/改后对照 | 「补上每个 Task 的量化结论，分数从 42 到 91。」 |
| 50–60 | 页面 + 仓库地址 | 「不用装，链接在简介。」 |

### 3.4 X / Twitter（英文 5 条 thread）

1. `I read 502 MCM/ICM award-winning papers (2004–2024). The most consistent gap between Outstanding and Meritorious isn't the model — it's 20–35 concrete numbers in the summary vs 10–15.`
2. `Judges spend <5 min on the first screen. They look for: a quantitative result per task, the method chain, and a named model (GIID, BDS…).`
3. `93% of O/F/M papers ran a sensitivity analysis. 35% of all teams ran none. This is the cheapest point upgrade in the contest.`
4. `So I built a checker: paste your summary, get 7 metrics + what to fix, in 10 seconds. No signup, runs locally in the browser.`
5. `Guide + checker (MIT): https://github.com/Timevelyer/mcm-o-guide — feedback welcome, especially data corrections.`

### 3.5 微信群 / QQ 群（一句话）

> 做了个美赛摘要自检器，贴进去 10 秒出报告，按 502 篇获奖论文的中位数打分的：https://timevelyer.github.io/mcm-o-guide/ （免费，不上传）

### 3.6 V2EX（慎发，先看版规）

节点：`/go/create` 或 `/go/programmer`。标题：**做了个美赛摘要自检器，纯前端，数据来自 502 篇获奖论文**
正文只要三句：做了什么、怎么做的（语料 + 统计口径）、求骂（数据错在哪）。不要放二维码、不要求 star。

---

## 4. awesome list PR

### 4.1 两个目标，规则完全不同（2026-10 实测）

**ComposioHQ/awesome-claude-skills**（78.1k star）—— 现在就能提

- 允许**外链**条目（README 里已有 64 条指向别人仓库），不需要把技能复制进他们的仓库
- 位置：`### Communication & Writing`，按字母序插在 `family-history-research` 之后、`Meeting Insights Analyzer` 之前
- 格式（照抄现有条目风格，末尾署名）：

```markdown
- [mcm-o-guide](https://github.com/Timevelyer/mcm-o-guide) - Writing and QA guide for MCM/ICM modeling contests, distilled from 502 award-winning papers; includes a browser-based summary checker. *By [@Timevelyer](https://github.com/Timevelyer)*
```

- PR 只改 `README.md` 一行，不新增文件

**hesreallyhim/awesome-claude-code**（56.7k star）—— 现在提不了

- 硬门槛：资源要么**满 14 天**且有持续提交，要么 **≥100 star**。本仓库 2026-10-27 才发布，两条都不满足，现在提会被机器人自动关闭
- 只能用**网页表单**提交（`issues/new?template=recommend-resource.yml`），官方原文：「It is **not** possible to submit a resource recommendation using the `gh` CLI」，而且**不要开 PR**
- 一次只能推荐一个资源，且必须由真人提交
- 计划：满 14 天（11 月上旬）或 star 过百后再投

**iskandaryv/awesome-claude-skills**：0 star，跳过，不值得花时间。

### 4.2 PR 正文模板（ComposioHQ 用，英文，直接贴）

```markdown
Adds mcm-o-guide to Communication & Writing.

- Built from 502 award-winning papers (2004–2024) plus 3 official judges' commentaries.
- Covers summary structure, 25-page budgeting, model-selection matrix, sensitivity patterns, whole-paper consistency.
- Ships a browser-based summary checker (static, client-side, nothing uploaded) and 4 Node scripts.
- MIT licensed, English and Chinese editions of the docs.

Happy to adjust the category or wording.
```

### 4.3 提交前的自检

- [x] License 已被 GitHub 识别为 MIT
- [x] 有英文 README 与英文工具站
- [x] 有在线 demo（自检器）和截图（`docs/assets/og.png`）
- [ ] 仓库满 14 天 或 100 star —— 只对 awesome-claude-code 有要求
- [ ] PR 只改 `README.md`，不动别的文件
- [ ] 条目放在目标仓库的正确分类、正确字母位置
- [ ] 描述写「它是什么」，不写「你为什么该用它」（awesome-claude-code 明确反对 pitch 语气）
- [ ] 不在别人的 Issue / PR 里贴自己的链接

### 4.4 目录站

| 站点 | 提交方式 |
|---|---|
| SkillsMP | https://skillsmp.com → Submit a skill（需 GitHub 登录） |
| awesomeclaude.ai | 站点底部 Submit 表单 |
| wind8ai/skills-top-stars | 直接开 Issue 自荐（中文列表，回复率高） |

---

## 5. 指标与复盘

每周只看四个数（GitHub → Insights → Traffic）：

| 指标 | 在哪看 | 目标（赛前一周） |
|---|---|---|
| Views / unique visitors | Traffic | 500 / 200 每周 |
| Clones | Traffic | 80 每周 |
| Release 下载量 | Release 页 | 30 每周 |
| Star | 仓库 | 累计 100+ |

**复盘写法**：每个渠道记录「发布日期 / 曝光 / star 增量 / 一句话结论」，月底删掉无效渠道，把时间压到前两名。

---

## 6. 不要做的事

- 不要在别人的 Issue / PR 里贴链接（会被举报）
- 不要买 star / 互 star 群（增长曲线异常会被 GitHub 清理，且信任一次性归零）
- 不要在 Reddit 的大版块发（r/math、r/learnmath 对推广零容忍）
- 不要承诺「包 O 奖」——赛果不可控，翻车一次口碑就没了
