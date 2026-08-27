---
title: "CISO 每日摘要：Salesforce 與 Anthropic 推出 Claudeforce，將 Claude 嵌入 CRM（20260827）"
description: "2026 年 8 月 26 日，Salesforce 與 Anthropic 推出 Claudeforce，將 Claude 直接嵌入 Salesforce CRM 工作流程，業務人員可能再也無須開啟 Salesforce 應用程式；Anthropic 同步擴大 Mythos 5 資安能力至合作夥伴。威脅面：中國關聯駭客 APT24 滲透臺灣廣告供應鏈，在新聞與小說網站植入惡意程式碼；CISA 將 Citrix NetScaler、Linux 核心、Microsoft SQL Server、Red Hat 漏洞列入 KEV；Spark RAT 濫用脆弱的 OPSWAT 驅動程式在柬埔寨關閉端點防護；Ubiquiti 修補 22 個 UniFi 漏洞，其中 3 個為 CVSS 滿分重大漏洞。"
pubDate: 2026-08-27
tags: [Salesforce, Anthropic, Claudeforce, Claude, Mythos 5, APT24, CISA-KEV, NetScaler, Spark-RAT, OPSWAT, WordPress, 供應鏈]
author: "Security Solutions Team"
featured: true
---

## 發生了什麼事：Salesforce 與 Anthropic 推出 Claudeforce，將 Claude 嵌入 CRM

2026 年 **8 月 26 日**，**Salesforce** 與 **Anthropic** 共同宣布 **Claudeforce**，一項將 **Claude** 直接嵌入 Salesforce CRM 工作流程的深度整合。主流媒體（VentureBeat、Reuters、TechRadar、qz）將其解讀為 Salesforce 把整個 CRM 搬進 Claude——執行長 Marc Benioff 宣稱這是客戶「再也無須開啟 Salesforce 應用程式」的時刻，也是對他本人先前「AI 助理將讓 SaaS 殼層過時（SaaSpocalypse）」警告的直接回應。Salesforce 第二季財報優於預期並上調年度營收財測，與此項發表同步；該合作亦延伸自 Anthropic 傳出向 Nscale 租用算力、規模達 **450 億美元** 的協議。

同一時間，Anthropic 擴大 **Mythos 5** 資安能力的取用範圍（CUToday），將該模型的弱點掃描與防禦工具進一步推向合作夥伴的資安產品。對企業而言，Claudeforce 意味著 Claude 代理人將可讀取、寫入並對 CRM 紀錄、商機資料與客戶往來內容採取行動——單一 AI 介面能觸及的敏感業務脈絡範圍出現質變。

### 這對企業 AI 助理治理的深遠影響

- **資料暴露面急遽擴大。** 嵌入 CRM 的 Claude 能在每次查詢時將合約、醫療資料與財務紀錄帶入模型脈絡。英國 NCSC 同日發布的指引（iThome）要求 AI 代理人部署必須 **沙箱隔離並持續監控**，這是基本門檻，而非加分項。
- **Prompt injection 已成為 CRM 入侵路徑。** Amazon 的 **Kiro** IDE 本週顯示，代理人「Powers」中的 prompt injection 可外洩敏感資料（The Hacker News）——同類代理人對工具的濫用，適用於任何能呼叫外部動作的 CRM 內建 Claude。
- **廠商集中度 = 單點失效。** Claudeforce 將 Salesforce 的可用性、Anthropic 模型的可用性與 Nscale 的算力綁成同一條依賴鏈。8 月 24 日 Claude 全球大當機（見本刊 20260824 摘要）即是前車之鑑：模型端出事，會同時讓業務、客服與營收營運全數停擺。
- **IP 與合約風險。** 當 Claude 代表業務人員採取行動，稽核軌跡、資料駐留、以及「代理人行為由誰負責」都成為董事會層級的問題。

**廠商風險矩陣（本週主軸與活躍威脅）：**

| 廠商 / 產品 | CVE / 議題 | CVSS | 是否遭利用 | 來源 |
|---|---|---|---|---|
| Salesforce + Anthropic | Claudeforce 代理人嵌入 CRM | — | 新整合（治理風險） | [VentureBeat](https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again) · [Reuters](https://www.reuters.com/technology/salesforce-raises-annual-revenue-forecast-2026-08-26/) |
| Citrix NetScaler / Linux 核心 / MS SQL Server / Red Hat | CISA KEV 新增 | 不一 | 是（KEV） | [iThome](https://www.ithome.com.tw/news/178460) · [THN](https://thehackernews.com/2026/08/cisa-adds-six-exploited-flaws-to-kev.html) |
| OPSWAT（驅動程式被濫用） | Spark RAT 關閉防護 | — | 是（鎖定柬埔寨） | [THN](https://thehackernews.com/2026/08/spark-rat-targets-cambodia-abuses.html) |
| Ubiquiti UniFi | 22 項漏洞，3 個 CVSS 滿分 | 10.0 | 儘速修補 | [iThome](https://www.ithome.com.tw/news/178475) |
| WatchGuard Agent | CVE-2026-57910（2 項重大 RCE） | 高 | 儘速修補 | [iThome](https://www.ithome.com.tw/news/178468) |
| WordPress Avada 佈景主題 | 9.8 RCE | 9.8 | AI 代理人 2 小時完成 6 段攻擊鏈 | [iThome](https://www.ithome.com.tw/news/178488) |
| WordPress TranslatePress | CVE-2026-19632（遭接管） | 高 | 40 萬以上網站受影響 | [iThome](https://www.ithome.com.tw/news/178494) |
| Amazon Kiro | Powers 之 prompt injection | — | 可外洩資料 | [THN](https://thehackernews.com/2026/08/amazon-kiro-prompt-injection-can.html) |

🔗 **參考資料：** 綜合報導（[VentureBeat](https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again)、[Reuters](https://www.reuters.com/technology/salesforce-raises-annual-revenue-forecast-2026-08-26/)、[Salesforce Newsroom](https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/)）

---

## 本週活躍威脅

📌 **APT24 滲透臺灣廣告供應鏈，在新聞與小說網站植入惡意程式碼**
中國關聯駭客 **APT24** 入侵臺灣廣告供應鏈，並在 **新聞與小說網站** 注入惡意程式碼，將可信的在地媒體變成 Drive-by 惡意程式碼投遞點。iThome 的 **資安日報** 將此列為臺灣地區當日頭條事件（發表於 2026-08-27）。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178472) | [iThome 資安日報](https://www.ithome.com.tw/news/178479)

📌 **CISA 將 Citrix NetScaler、Linux 核心、Microsoft SQL Server、Red Hat 漏洞列入 KEV**
CISA 將 6 個遭利用的漏洞移入 **Known Exploited Vulnerabilities（KEV）** 目錄，涵蓋 **Citrix NetScaler**、**Linux 核心**、**Microsoft SQL Server** 與 **Red Hat** 產品——聯邦機關已適用補救期限，企業應將這 4 項視為急迫處理。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178460) | [The Hacker News](https://thehackernews.com/2026/08/cisa-adds-six-exploited-flaws-to-kev.html)

📌 **Spark RAT 濫用脆弱的 OPSWAT 驅動程式在柬埔寨關閉端點防護**
**Spark RAT** 鎖定柬埔寨，並利用脆弱的 **OPSWAT** 驅動程式停用端點防護工具，讓攻擊者建立持久化並致盲防禦方。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/spark-rat-targets-cambodia-abuses.html)

📌 **Ubiquiti 修補 22 個 UniFi 漏洞，其中 3 個為 CVSS 滿分**
**Ubiquiti** 修補 UniFi 產品家族共 **22 個漏洞**，包含 **3 個 CVSS 10.0** 重大問題——網路設備擁有者應立即修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178475)

📌 **WatchGuard Agent 兩項重大 RCE 漏洞（CVE-2026-57910）**
**WatchGuard** 修補其 Agent 軟體中的兩項重大漏洞（**CVE-2026-57910**），若未更新可能讓攻擊者達成 **遠端程式碼執行**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178468)

📌 **Avada WordPress 佈景主題 9.8 RCE——AI 代理人 2 小時完成 6 段攻擊鏈**
熱門 **Avada** WordPress 佈景主題修補 **CVSS 9.8** 的 RCE；研究人員指出 AI 程式碼代理人約兩小時即組出完整六段攻擊鏈，凸顯 AI 如何壓縮武器化時程。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178488)

📌 **TranslatePress WordPress 外掛讓 40 萬以上網站暴露於遭接管風險（CVE-2026-19632）**
**TranslatePress** WordPress 外掛存在重大漏洞（**CVE-2026-19632**），可能讓超過 **40 萬** 個網站面臨遭接管風險。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178494)

📌 **OpenSSL 修補 9 個漏洞，含高風險阻斷服務**
**OpenSSL** 釋出 **9 個漏洞** 修補，其中一個為可能導致受影響版本服務阻斷的高風險漏洞。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178498)

📌 **Amazon Kiro 的 prompt injection 可經由 Powers 外洩敏感資料**
**Amazon Kiro** 代理人「Powers」中的 prompt injection 可外洩敏感資料——這是代理人對工具濫用的具體案例，適用於任何擁有外部動作權限的 AI 助理。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/amazon-kiro-prompt-injection-can.html)

📌 **FBI 瓦解中國關聯的 QTFY 基礎設施，阻斷對美資料竊取**
**FBI** 瓦解 **QTFY**——一個中國關聯、用於從美國組織竊取資料的基礎設施。此為接管行動，可移除已知蒐集節點，但無法關閉其背後的入侵行動。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/fbi-disrupts-china-linked-qtfy.html)

---

## OPSWAT可以怎麼幫上忙

**Spark RAT** 攻擊事件濫用脆弱的 **OPSWAT** 驅動程式來致盲端點防禦，提醒我們檔案型與驅動程式型威脅仍會透過不受信任內容與供應鏈落地。OPSWAT 的 **MetaDefender 多重掃描**（30 餘款防毒引擎）搭配 **Deep CDR（內容淨化與重建）**，可在邊界對檔案、文件與安裝程式進行淨化，使武器化載荷在抵達端點前即被消除；**MetaDefender Endpoint** 即便在惡意驅動程式試圖致盲防護工具時，仍能強制執行檔案與程序完整性。同樣的「多重掃描 + CDR」管線亦直接對應上述 **WordPress 外掛 / 佈景主題供應鏈** 暴露面（Avada、TranslatePress）——在第三方套件與上傳內容進入生產環境前先完成檢測。
