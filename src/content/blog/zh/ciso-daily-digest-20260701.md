---
title: "CISO 每日摘要：Fable 5 恢復上線，Claude Sonnet 5 與 Science 問世，加州簽署 AI 合作協議 (20260701)"
description: "Anthropic 迎來歷史性一天：Fable 5 獲解禁於 7 月 1 日恢復全球上線、推出接近 Opus 效能的 Claude Sonnet 5、發表科學研究專用平台 Claude Science、加州政府簽署全美首個州級 AI 合作協議。Active threats：Adobe 修補 7 項 CVSS 10.0 重大 ColdFusion 漏洞；GuardFall 揭露 AI 程式碼代理 Shell 注入風險；macOS EDR/MDM 停用攻擊鏈揭露；Aflac 日本分公司資料外洩（438 萬用戶）；PChome Pi 錢包遭 Settra 勒索軟體攻擊；Chrome 150 修補 382 項漏洞；Azure CLI 密碼潑灑攻擊鎖定 78 個帳號；Blackfield 勒索軟體攻擊尼得科超眾（200 萬美元贖金）。"
pubDate: 2026-07-01
tags: [CISO, 每日摘要, 資安, 威脅情資, Anthropic, Fable-5, Claude-Sonnet-5, Claude-Science, 加州, 漏洞, 勒索軟體]
author: "Security Solutions Team"
featured: true
---

## Anthropic 歷史性一天：Fable 5 解禁、Sonnet 5 發表、Science 問世、加州合作

2026 年 7 月 1 日是 Anthropic 史上最重要的日子之一。該公司同時恢復 Claude Fable 5 全球存取（美國政府解除出口管制）、推出新旗艦模型 Claude Sonnet 5、發表科學研究專用平台 Claude Science，並宣布加州為政府 AI 部署的首個合作夥伴。

**Fable 5 恢復上線：** 川普政府在 Anthropic 實施新安全防護措施後，解除 Claude Fable 5 與 Claude Mythos 5 出口管制。Fable 5 於 7 月 1 日恢復全球上線，採用統一過濾器阻擋導致 2026 年 3 月下架的提示注入向量；Mythos 5 仍僅限 Glasswing 計畫受信任合作夥伴使用（[iThome](https://www.ithome.com.tw/news/177013)、[THN](https://thehackernews.com/2026/07/anthropic-restores-claude-fable-5-after.html)、[iThome 出口管制](https://www.ithome.com.tw/news/176921)）。

**Claude Sonnet 5：** 新模型在代理式程式碼評測上接近 Opus 4.8 效能，但價格僅其零頭，成為免費與 Pro 版預設模型。系統卡強調在提示注入防護、幻覺減少與代理任務完成度上的改進（[iThome](https://www.ithome.com.tw/news/177002)）。

**Claude Science：** 專為科學研究打造的 AI 工作臺，整合文獻搜尋、數據分析、圖表繪製與 HPC 工作流程管理。Anthropic 同時宣布啟動自有藥物發現計畫（[iThome](https://www.ithome.com.tw/news/177018)）。

**加州-Anthropic 合作協議：** 州長紐森簽署首創協議，提供加州所有政府機構折扣 Claude 存取權限（[CA.gov](https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/)）。

### 這對 AI 治理的深遠影響

Fable 5 解禁、Sonnet 5 與 Science 同步發表，再加上加州政府合作協議，標誌著 AI 安全辯論正在轉向大規模營運部署。對 CISO 而言，這帶來了政府相關環境中前沿模型的供應商風險管理、AI 代理特有威脅面的興起，以及政府審查後的安全過濾器成為監管常態等全新考量。

---

## 本週活躍威脅

📌 **Adobe 修補 7 項 ColdFusion 滿分漏洞（CVSS 10.0）** — Adobe 發布 ColdFusion 與 Campaign Classic 的 7 項 CVSS 10.0 重大漏洞修補，包含任意檔案上傳、輸入驗證不當與路徑遍歷等問題，可能導致遠端程式碼執行（[THN](https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html)）。

📌 **GuardFall：AI 程式碼代理 Shell 注入風險** — 研究人員揭露 GuardFall 漏洞類型，影響 Claude Code、Copilot、Cursor 等開源 AI 程式碼代理，當代理執行從模型輸出解析的 Shell 指令而未經適當清理時，可能被嵌入的惡意指令欺騙（[THN](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html)）。

📌 **macOS EDR/MDM 停用攻擊鏈** — XM Cyber 揭露 macOS 權限提升攻擊鏈，攻擊者無需管理員權限即可濫用 XPC 信任驗證流程，冒充合法元件並停用 EDR 與 MDM 代理程式（[iThome](https://www.ithome.com.tw/news/176996)）。

📌 **Aflac 日本分公司資料外洩——438 萬用戶受影響** — Aflac 向 SEC 通報日本子公司系統於 6 月 15 日至 25 日遭入侵，約 438 萬名保戶資料可能外洩（[iThome](https://www.ithome.com.tw/news/177004)）。

📌 **PChome Pi 錢包遭 Settra 勒索軟體攻擊** — 國內電子支付平臺 Pi 錢包遭 Settra 勒索軟體團體攻擊，駭客聲稱竊得 102 GB 資料含 350 萬用戶個資（[iThome](https://www.ithome.com.tw/news/177011)）。

📌 **Blackfield 勒索軟體攻擊尼得科超眾——勒索 200 萬美元** — Blackfield 勒索軟體宣稱對散熱解決方案廠商尼得科超眾的攻擊負責，竊取超過 2 TB 內部資料，索討 200 萬美元贖金（[iThome](https://www.ithome.com.tw/news/177009)）。

📌 **Chrome 150——修補 382 項漏洞，15 項重大** — Google 發布 Chrome 150 穩定版，修補 382 項安全問題，其中 15 項列為重大等級（[iThome](https://www.ithome.com.tw/news/177003)）。

📌 **Azure CLI 密碼潑灑——81M+ 次嘗試鎖定 78 個帳號** — 針對 Azure CLI 驗證的持續密碼潑灑攻擊已鎖定至少 78 個 Microsoft 帳號，執行超過 8,100 萬次驗證嘗試（[THN](https://thehackernews.com/2026/07/azure-cli-password-spray-hits-at-least.html)）。

🔗 **參考資料：** 綜合報導（[THN Adobe](https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html)、[THN GuardFall](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html)、[iThome macOS](https://www.ithome.com.tw/news/176996)、[iThome Aflac](https://www.ithome.com.tw/news/177004)、[iThome PChome](https://www.ithome.com.tw/news/177011)、[iThome Blackfield](https://www.ithome.com.tw/news/177009)、[iThome Chrome](https://www.ithome.com.tw/news/177003)、[THN Azure](https://thehackernews.com/2026/07/azure-cli-password-spray-hits-at-least.html)）

---

## OPSWAT 可以怎麼幫上忙

GuardFall AI 程式碼代理漏洞與被投毒的 MCP 工具描述，凸顯了 AI 與檔案型攻擊交會處日益擴大的威脅面。OPSWAT MetaDefender 的多重掃描（30+ 防毒引擎）與深度內容 disarm 及重構（CDR）技術，可在檔案、套件與模型產物到達 AI 代理執行環境前進行檢查與淨化。

🔗 **參考資料：** 綜合報導（[THN GuardFall](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html)、[THN MCP](https://thehackernews.com/2026/06/microsoft-warns-poisoned-mcp-tool.html)）
