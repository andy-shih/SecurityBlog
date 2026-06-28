---
title: "CISO 每日摘要：Fable 5 即將重返；Mythos 5 獲准有限釋出 (20260628)"
description: "Anthropic 的 Claude Fable 5 預計數日內恢復上線；美國政府批准 Mythos 5 有限釋出予特定機構；Claude 用戶調查顯示半數使用者認為 AI 已能處理一半工作；Linux pedit COW 本機權限提升漏洞影響 5.18 至 7.1-rc6 核心版本；烏克蘭警告俄羅斯情報單位利用假冒技術支援簡訊竊取通訊憑證。"
pubDate: 2026-06-28
tags: [anthropic, claude, fable-5, mythos-5, ai治理, 出口管制, linux, pedit-cow, 權限提升, 烏克蘭, 俄羅斯, 憑證竊取, 簡訊釣魚, ciso每日摘要]
author: "Security Solutions Team"
featured: true
---

## Fable 5 即將重返；Mythos 5 獲准有限釋出

Anthropic 最先進的公開 AI 模型 **Claude Fable 5** 預計在 **數日內恢復上線**，根據 Gizmodo 報導，白宮已批准重新啟用。該模型先前因出口管制審查而暫停，因其能力被認為觸及拜登時代 AI 行政命令所定義的門檻。

與此同時，**美國政府批准了 Anthropic Mythos 5 的有限釋出**，允許特定機構使用這款前沿模型。Cybernews 報導指出，此批准附帶嚴格的使用規範，僅限經認證的美國研究機構與關鍵基礎設施營運商使用。

這些發展標誌著昨日政策決定的 **執行階段**。昨日焦點在於政策轉向本身，今日則聚焦於 **時程與條件**——Fable 5 的立即重返以及 Mythos 5 的分階段釋出。

其他 Anthropic 相關消息方面，該公司調查顯示 **半數 Claude 使用者認為 AI 已能處理一半工作**，凸顯企業採用 AI 助理的加速趨勢。此外，Salesforce 員工對 Anthropic 整合 Slack 表達擔憂，引發企業 AI 領域資料存取與競爭動態的討論。

🔗 **參考資料：** 綜合報導（[Gizmodo](https://gizmodo.com/expect-claude-fable-5-to-be-turned-back-on-in-a-matter-of-days-report-says-2000778672)、[The Decoder](https://www.the-decoder.com/half-of-claude-users-say-ai-can-already-handle-half-their-work-according-to-anthropic-survey/)）

### 這對 AI 治理的深遠影響

Fable 5 的分階段恢復與 Mythos 5 的有限釋出，為前沿模型部署建立了 **新 precedent**：以機構認證與使用監控為條件的許可制。這種雙軌模式——經過認證的機構可完全存取，一般用途則受限制——可能成為未來 AI 治理架構的模板。CISO 團隊應密切關注這些存取控制的演變，因為它們可能影響企業 AI 採購政策與第三方 AI 風險評估要求。

---

## 本週活躍威脅

📌 **Linux pedit COW 本機權限提升漏洞——影響 5.18 至 7.1-rc6 核心**
名為 **pedit COW** 的新型 Linux 本機權限提升漏洞被揭露，影響核心版本 **5.18 至 7.1-rc6**。該技術利用記憶體映射檔案的寫入時複製（Copy-on-Write）行為，使本機攻擊者能 **對快取二進位檔下毒** 以取得 root 權限。這是經典 Dirty COW（CVE-2016-5195）的變種，但針對現代核心版本。使用共享主機或多租戶 Linux 環境的組織應優先修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176912)

📌 **烏克蘭警告俄羅斯情報單位利用假冒技術支援簡訊竊取憑證**
烏克蘭網路防衛當局揭露俄羅斯情報機構正在進行 **簡訊釣魚（smishing）攻擊**，透過假冒技術支援簡訊竊取通訊應用程式憑證。該攻擊鎖定烏克蘭軍方與政府人員，偽裝成平臺技術支援團隊，誘騙受害者交出 Signal、Telegram 與 WhatsApp 帳號的登入憑證。此攻擊凸顯 **俄羅斯網路間諜戰術** 日趨精密。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/ukraine-says-russian-intelligence-used.html)

---

## OPSWAT 可以怎麼幫上忙

pedit COW 漏洞與烏克蘭憑證竊取攻擊凸顯 **多層式端點防禦與安全通訊驗證** 的重要性。OPSWAT MetaDefender 可透過多引擎掃描偵測試圖利用核心漏洞的惡意二進位檔，而 MetaDefender Email Security 則能攔截針對憑證竊取的釣魚與簡訊釣魚攻擊。對於關注俄羅斯網路間諜活動的國防組織，OPSWAT 的 CDR（Content Disarm and Reconstruction）技術可在文件與訊息送達時即時中和其中的惡意內容。
