---
title: "CISO 每日摘要：cPanel 認證繞過漏洞與 Claude Security 正式上線 (20260501)"
description: "cPanel 發布 9.8 分緊急修補程式修復已遭利用的認證繞過漏洞；Anthropic 推出 Claude Security 公開測試版供企業掃描漏洞"
pubDate: 2026-05-01
tags: ["CISO 每日摘要", "網路安全", "威脅情報"]
author: "Security Solutions Team"
featured: true
---

**cPanel 認證繞過緊急修補（CVSS 9.8）**

- cPanel 發布了重大認證繞過漏洞的緊急安全性修補程式，該漏洞 CVSS 評分為 **9.8 分**（滿分 10 分）
- 此漏洞允許遠端攻擊者繞過認證機制，未經授權存取 cPanel 伺服器
- 安全研究人員確認在揭露後數天內已有實際濫用活動
- 全球仍有超過 **20,000 台伺服器**處於脆弱狀態，掃描與利用活動持續升溫

🔗 **參考資料：** 綜合報導（[Xakep](https://xakep.ru/2026/04/30/cpanel-flaw/)、[iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFB3Z0N5U0ZLTFpYMlRuTkQ0RHlM...)、[The Hacker News](https://thehackernews.com/2026/05/critical-cpanel-vulnerability.html)）

### 本週活躍威脅

📌 **Anthropic 推出 Claude Security 公開測試版供企業掃描漏洞**

Anthropic 發布了 **Claude Security** 公開測試版，這是一個基於 AI 的平台，旨在掃描程式碼庫中的漏洞並建議修復方案。此工具以 **Opus 4.7** 為底層模型，代表了 AI 輔助安全領域的重大轉變。五角大廈維持對 Claude 的禁令，但同時單獨評估 Mythos 變體，凸顯了先進 AI 網路安全工具的雙重用途疑慮。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cybersecurity-operations/anthropic-mythos-cyber-w...) | [The Hacker News](https://thehackernews.com/2026/05/)

📌 **Checkmarx 遭重大資料外洩 — 私有 GitHub 倉庫被入侵**

應用安全廠商 **Checkmarx** 的私有 GitHub 倉庫遭竊取資料。此事件暴露了專有原始碼和內部安全方法論，引發了對 AppSec 生態系統供應鏈風險的擔憂。攻擊者是透過被入侵的憑證取得存取權限。

🔗 **參考資料：** [Xakep](https://xakep.ru/2026/04/30/checkmarx-attacks/)

📌 **PyTorch Lightning 在 PyPI 供應鏈攻擊中遭入侵**

PyPI 上的 **PyTorch Lightning** 套件在供應鏈攻擊中遭入侵，該攻擊旨在竊取開發人員憑證。此事件延續了 AI/ML 套件生態系統的攻擊趨勢，攻擊者將惡意程式碼注入機器學習流程中常用的熱門 Python 函式庫。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/04/pytorch-lightning-compromised-in-pypi.html)

📌 **英國生物樣本庫資料外洩 — 50 萬筆記錄在阿里巴巴平台兜售**

**英國生物樣本庫** 因一名內部研究人員外洩資料，約 **50 萬筆記錄** 流入阿里巴巴電商平台兜售。此次洩漏涉及敏感的基因組和健康資料，將帶來嚴重的隱私和監管後果。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE5KdVdaYlRqbWs1OEttR1dzbHoz...)

📌 **蘋果 App Store 驚見假錢包攻擊 — FakeWallet 竊取助記詞**

蘋果 App Store 出現假冒加密貨幣錢包（**FakeWallet**），旨在竊取恢復助記詞。此攻擊凸顯了官方應用程式商店中社交工程手法日益精密，成功繞過了 Apple 的審查流程。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFBRMkdQenIzRU94MGdXYjU4RzZr...)

### OPSWAT 能做什麼

cPanel 認證繞過、PyTorch Lightning 供應鏈入侵和英國生物樣本庫資料外洩都有一個共同主題：攻擊者利用未修補的漏洞和被入侵的憑證。OPSWAT 的 **MetaDefender 平台** 提供多引擎掃描（30+ 防毒引擎）、**CDR（內容淨化與重構）** 從文件中移除主動威脅，以及 **主動 DLP** 防止敏感資料外洩，直接適用於本週凸顯的供應鏈和資料遺失場景。
