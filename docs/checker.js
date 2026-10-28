/* mcm-o-guide · summary checker core
 *
 * Single source of truth for the seven checks. Both docs/index.html (zh) and
 * docs/en/index.html (en) load this file and only own their own copy.
 * No network, no storage: everything runs on the pasted text.
 *
 * analyze(text) -> {
 *   score: 0-100,
 *   words, numberCount, sentenceCount, sentenceWithNumberCount,
 *   tasks: ["1","2",...], keywordCount: number|null,
 *   rows: [{ id, level: "ok"|"warn"|"bad", value }],
 *   tips: [{ code, n? }]
 * }
 * The caller maps ids and tip codes to localized strings.
 */
(function (root) {
  "use strict";

  function words(t) {
    var latin = (t.match(/[A-Za-z0-9][A-Za-z0-9'’.\-%]*/g) || []).length;
    var cjk = (t.match(/[\u4e00-\u9fa5]/g) || []).length;
    return latin + cjk;
  }

  function sentences(t) {
    return (t.replace(/\s+/g, " ").match(/[^.!?]+[.!?]+/g) || []).filter(function (s) {
      return s.trim().length > 2;
    });
  }

  function numbers(t) {
    return t.match(/(?<![\w.])\d+(?:[.,]\d+)*(?:\s?[%％])?/g) || [];
  }

  function uniqTasks(t) {
    var set = [];
    var re = /task\s*([1-9])/gi, m;
    while ((m = re.exec(t))) {
      if (set.indexOf(m[1]) < 0) set.push(m[1]);
    }
    set.sort();
    return set;
  }

  function keywords(t) {
    var m = t.match(/key\s*words?\s*[:：]\s*([^\n]+)/i);
    if (!m) return null;
    return m[1].split(/[,;，；]/).map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function pct(x) { return Math.max(0, Math.min(1, x)); }
  function level(ok, warn) { return ok ? "ok" : (warn ? "warn" : "bad"); }

  function analyze(raw) {
    var t = (raw || "").trim();
    var w = words(t), sn = sentences(t), nums = numbers(t);
    var snWithNum = sn.filter(function (s) { return /\d/.test(s); }).length;
    var tasks = uniqTasks(t);
    var kw = keywords(t);
    var sens = /sensitiv|robust|perturb|stability|stress\s*test/i.test(t);
    var limits = /limitation|weakness|future work|drawback|shortcoming/i.test(t);

    var sNum = pct(nums.length / 20) * 30;
    var sLen = (w >= 330 && w <= 540) ? 15 : (w >= 280 && w <= 620) ? 10 : (w >= 220 && w <= 700) ? 5 : 0;
    var sTask = tasks.length >= 4 ? 20 : tasks.length === 3 ? 15 : tasks.length === 2 ? 10 : tasks.length === 1 ? 5 : 0;
    var sSent = pct(snWithNum / 6) * 15;
    var sKw = kw ? (kw.length >= 4 && kw.length <= 5 ? 8 : 5) : 0;
    var sSens = sens ? 7 : 0;
    var sLim = limits ? 5 : 0;

    var score = Math.round(sNum + sLen + sTask + sSent + sKw + sSens + sLim);
    score = Math.max(0, Math.min(100, score));

    var rows = [
      { id: "numbers", level: level(nums.length >= 20, nums.length >= 10), value: nums.length },
      { id: "tasks", level: level(tasks.length >= 4, tasks.length >= 2), value: tasks },
      { id: "embedded", level: level(snWithNum >= 6, snWithNum >= 4), value: { withNumber: snWithNum, total: sn.length } },
      { id: "length", level: level(w >= 330 && w <= 540, w >= 280 && w <= 620), value: w },
      { id: "keywords", level: kw ? (kw.length >= 4 && kw.length <= 5 ? "ok" : "warn") : "bad", value: kw ? kw.length : null },
      { id: "sensitivity", level: sens ? "ok" : "bad", value: sens },
      { id: "limits", level: limits ? "ok" : "warn", value: limits }
    ];

    var tips = [];
    if (nums.length < 20) tips.push({ code: "numbers", n: nums.length });
    if (tasks.length < 4) tips.push({ code: "tasks", n: tasks.length });
    if (snWithNum < 6) tips.push({ code: "embedded", n: snWithNum });
    if (w > 620) tips.push({ code: "long", n: w });
    if (w > 0 && w < 330) tips.push({ code: "short", n: w });
    if (!kw) tips.push({ code: "noKeywords" });
    else if (kw.length < 4) tips.push({ code: "fewKeywords", n: kw.length });
    if (!sens) tips.push({ code: "sensitivity" });
    if (!limits) tips.push({ code: "limits" });

    return {
      score: score,
      words: w,
      numberCount: nums.length,
      sentenceCount: sn.length,
      sentenceWithNumberCount: snWithNum,
      tasks: tasks,
      keywordCount: kw ? kw.length : null,
      rows: rows,
      tips: tips
    };
  }

  root.MCMChecker = { analyze: analyze, count: words };
})(window);
