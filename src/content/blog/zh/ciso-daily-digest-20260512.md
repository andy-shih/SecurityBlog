---
title: "CISO 每日摘要：AI 生成首個零時差漏洞攻擊工具與 Checkmarx 供應鏈攻擊 (20260512)"
description: "駭客首度利用 AI 挖掘零時差漏洞並產生攻擊工具；TeamPCP 入侵 Checkmarx Jenkins 外掛；OpenAI 推出 Daybreak 資安方案。"
pubDate: 2026-05-12
tags: ["CISO", "資安", "威脅情報", "每日摘要"]
author: "Security Solutions Team"
featured: true
---

5 月 12 日成為進攻性資安領域的歷史轉折點——研究人員確認了首例駭客利用 AI 挖掘零時差漏洞並產生攻擊工具的案例。與此同時，供應鏈攻擊面持續擴大，TeamPCP 入侵 Checkmarx Jenkins AST 外掛，Mini Shai-Hulud 蠕蟲也透過多個開源套件生態系統蔓延。

## 本週活躍威脅

📌 **駭客首度利用 AI 挖掘零時差漏洞並產生攻擊工具**

在一個里程碑式的發展中，威脅行為者利用 AI 模型發現了先前未知的零時差漏洞，並生成可運作的攻擊程式碼，隨後部署於大規模攻擊行動中。這是首次在野確認的 AI 到漏洞利用管線。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/hackers-used-ai-to-develop-first-known-zero-day-2fa-bypass-for-mass-exploitation.html) | [Dark Reading](https://www.darkreading.com/cloud-security/hackers-ai-exploit-development-attack-automation)

📌 **TeamPCP 入侵 Checkmarx Jenkins AST 外掛**

TeamPCP 威脅組織入侵 Checkmarx Jenkins AST 外掛，在軟體供應鏈中注入惡意程式碼。此次攻擊緊接在數週前 TeamPCP 對 KICS 的供應鏈攻擊之後。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168540)

📌 **Mini Shai-Hulud 蠕蟲感染 TanStack、Mistral AI、Guardrails AI**

歸屬於 TeamPCP 的 Mini Shai-Hulud 蠕蟲透過 NPM 和 PyPI 感染了多個開源套件，包括 TanStack、Mistral AI 和 Guardrails AI。此蠕蟲可在套件註冊表間自主傳播。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168541)

📌 **OpenAI 推出 Daybreak 資安防禦方案**

OpenAI 發表 Daybreak 資安平台，整合 GPT-5.5-Cyber 與 Codex Security，提供 AI 驅動的漏洞偵測與修補驗證功能，與 Anthropic 的 Claude Mythos 正面競爭。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168542)

📌 **Instructure 與 ShinyHunters 達成贖金協議**

Canvas LMS 母公司 Instructure 證實已與 ShinyHunters 駭客組織達成協議，防止 **3.65TB** 被竊資料外洩。此前 Canvas 遭駭事件已嚴重影響多所大學的期末考試安排。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/instructure-reaches-ransom-agreement-with-shinyhunters-to-stop-365tb-canvas-leak.html)

---
*本摘要由精選資安新聞來源自動生成。*