# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow [SemVer](https://semver.org/).

## [Unreleased]

## [1.1.1] - 2026-10-28

### Added
- `docs/en/` — 英文版工具站（与中文站共用同一套判定逻辑）
- `docs/cheatsheet.html` — A4 一页纸清单：摘要骨架、基准线、25 页预算、灵敏度做法、提交前 1 小时检查
- `docs/launch-kit.md` — 渠道优先级、时间表、现成文案（知乎 / 小红书 / B 站 / X / awesome-list PR）
- 「复制体检报告」按钮：导出分数 + 七项结论 + 建议，可直接发给队友（不含摘要原文）
- `robots.txt`、`sitemap.xml`、canonical / hreflang / JSON-LD / Twitter Card

### Changed
- 摘要判定逻辑抽到 `docs/checker.js`，中英文站共用，避免两套口径漂移
- 样式抽到 `docs/style.css`，三个页面共用
- 长度判定区间与页面标注统一为 330–540 词（原本一处写 350–520，一处判 330–540）

## [1.1.0] - 2026-10-28

### Added
- `docs/` — 在线摘要自检器（GitHub Pages）：粘贴摘要即可看到数字密度、Task 覆盖、关键词、灵敏度等 7 项体检结果与评分
- `LICENSE` — MIT
- `CHANGELOG.md`
- `.github/ISSUE_TEMPLATE/` — 勘误与使用反馈模板
- README 首屏重写：价值主张、数据背书、在线工具入口、一行安装

### Changed
- 仓库描述与 topics 扩充（`cumcm` / `claude-skills` / `opencode` 等）

## [1.0.2] - 2026-10-28

### Added
- `SKILL.en.md` — `SKILL.md` 完整英文版
- `GUIDE.en.md` — `使用指南.md` 完整英文版

### Fixed
- 第 13 章下的小节编号 `12.2` / `12.3` → `13.2` / `13.3`

## [1.0.1] - 2026-10-27

### Added
- `README.en.md` + 中英切换

## [1.0.0] - 2026-10-27

### Added
- 首次独立发布：`SKILL.md`、`使用指南.md`、`references/`（23 篇）、`playbooks/`（4 篇）、`templates/`（3 个）、`scripts/`（4 个）
