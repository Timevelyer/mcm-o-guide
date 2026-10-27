# MCM/ICM Award-Winning Paper Writing Guide · mcm-o-guide

> A writing toolkit distilled from corpus statistics and close reading of **502 MCM/ICM award-winning papers (2004–2024)**, plus **3 official COMAP judges' commentaries**.
> One goal only: help a team produce, within a 4-day contest, a paper "the judges are willing to read to page 25".

![papers](https://img.shields.io/badge/corpus-502%20papers-blue)
![years](https://img.shields.io/badge/years-2004--2024-informational)
![type](https://img.shields.io/badge/type-Agent%20Skill-6f42c1)
![lang](https://img.shields.io/badge/lang-English-blue)

[简体中文](README.md) · **English**

---

## What this is

This is not an "experience-sharing post" but a **data-backed** writing spec: every conclusion comes with its statistical basis — for example, "of 449 O/F/M papers, 93% included a sensitivity analysis."

It covers the whole paper workflow:

- **Summary** — one page decides everything: sentence-by-sentence template plus breakdowns of 5 Outstanding summaries
- **Page budget** — how to split 25 pages, with concrete quotas for figures and tables
- **Model selection** — a model matrix and baseline recommendations for problem types A–F
- **Sensitivity / robustness analysis** — what judges value most and what teams most often skip
- **Whole-paper consistency** — a self-check list for numbers, assumptions, figures and citations that fail to match
- **From Meritorious to Outstanding** — where the gap actually is, and how to close it

It also ships ready-to-use skeletons (LaTeX / Markdown) and 4 small Node.js tools.

## Quick start

### Option 1: use it as an OpenCode / Claude skill (recommended)

Drop the whole directory into your skills folder; the agent will invoke it automatically when you write a paper, revise a summary, or check the structure:

```bash
git clone https://github.com/Timevelyer/mcm-o-guide.git
# OpenCode
mv mcm-o-guide ~/.config/opencode/skills/mcm-o-guide
# or Claude Code
mv mcm-o-guide ~/.claude/skills/mcm-o-guide
```

### Option 2: just read it as a handbook

Nothing to install. Start with [SKILL.md](SKILL.md), then jump to the topic files under [references/](references) as needed.
The "when to use what" table in [使用指南.md](使用指南.md) (Chinese) is the fastest way to find the right file.

### Option 3: run the tool scripts

```bash
node scripts/extract-pdf.mjs paper.pdf paper.txt   # PDF -> plain text with page markers
node scripts/check-paper.mjs paper.txt             # consistency check: numbers / assumptions / figures / citations
node scripts/parameter-sweep.mjs                   # sensitivity analysis: parameter sweep + sensitivity ranking
node scripts/benchmark-paper.mjs                   # benchmark scoring against top papers
```

Requires Node.js 18+; only `extract-pdf.mjs` depends on `pdfjs-dist` (`npm install pdfjs-dist`).
See [scripts/README.md](scripts/README.md) for details.

## Repository layout

```
mcm-o-guide/
├── SKILL.md                    # main skill file: 13 chapters, from judge mechanics to sentence bank
├── 使用指南.md                  # Chinese user guide + scenario quick-reference table
├── playbooks/                  # role training: modeling / coding / writing / research
├── references/                 # 23 topic files: summary templates, model matrix, judges' notes, pitfalls, cases...
├── templates/                  # LaTeX and Markdown paper skeletons
└── scripts/                    # 4 Node.js tool scripts
```

Worth opening first:

| File | Purpose |
|---|---|
| [references/summary-template.md](references/summary-template.md) | Summary template + sentence-level breakdowns of 5 Outstanding summaries |
| [references/model-matrix.md](references/model-matrix.md) | Model-selection matrix for 6 problem types |
| [references/checklist.md](references/checklist.md) | Pre-submission consistency checklist |
| [references/quick-reference-card.md](references/quick-reference-card.md) | The 30-minutes-before-submission check |
| [references/judge-commentary.md](references/judge-commentary.md) | Official judges' commentaries with cross-analysis |
| [references/common-errors.md](references/common-errors.md) | Catalogue of fatal mistakes |

Full index (Chinese): [使用指南.md](使用指南.md).

## Data basis

| Metric | Source |
|---|---|
| Corpus statistics (449 valid papers) | 502 PDFs extracted and analysed by the author |
| Judges' commentaries | COMAP official releases: 2009 A/B, 2021 Tips |
| Page budget / figure quotas | Median of 2021–2024 Outstanding papers |
| Summary breakdowns | Sentence-level analysis of 5 Outstanding papers |

## Note

This repository **does not replace** the current-year COMAP rules. Before submitting, verify that year's page limit, file format, submission method, AI-use policy and anonymity requirements — the official rules shift slightly year to year, while the writing advice here stays stable over the long run.

---

If this guide helps you, a Star is welcome; for data-basis or template issues, just open an Issue.
