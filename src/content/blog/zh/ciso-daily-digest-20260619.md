---
title: "CISO 每日摘要：Anthropic Fable 5 與 Mythos 5 出口禁令 (20260619)"
description: "美國商務部長 Lutnick 對 Anthropic 的 Fable 5 和 Mythos 5 實施出口管制；摩根大通和高盛封鎖香港員工使用 Claude；Anthropic 開設首爾辦公室並表示禁令將解決。另包括：Windows Clipper USB 蠕蟲攻擊、INC 勒索軟體超過 830 名受害者、Splunk 9.8 分重大漏洞列入 CISA KEV、FortiBleed 影響超過 8.6 萬台 FortiGate。"
pubDate: 2026-06-19
tags: [Anthropic, AI 治理, 出口管制, Fable 5, Mythos 5, CISA, KEV, 勒索軟體, 供應鏈安全, Fortinet]
author: "Security Solutions Team"
featured: true
---

## Fable 5 與 Mythos 5 出口管制重塑 AI 治理格局

川普政府對 Anthropic 兩款最先進的 AI 模型 — **Fable 5** 與 **Mythos 5** — 實施了前所未有的出口管制。商務部長 **Howard Lutnick** 直接限制這家美國 AI 公司的旗艦技術出口，新規立即生效，多個國際市場的使用者無法存取這兩款前沿模型。

**摩根大通（JPMorgan Chase）**與**高盛（Goldman Sachs）**均已主動封鎖香港員工使用 Anthropic 的 **Claude** 服務，以符合新的出口框架。高盛先前已實施類似限制，顯示金融機構將禁令的解釋範圍從模型本身擴大到 Anthropic 的整體平台。

儘管禁令實施，**仍有少數使用者保留 Mythos 的存取權**。Anthropic 公開表示出口管制將**「很快解決」**，並加速韓國擴張，開設**首爾辦公室**並宣布韓國 AI 合作夥伴關係，即便美國禁令已切斷韓國對其頂級模型的存取。報導指出，經過「緊急凍結」後，這些最先進的模型**可能很快恢復使用**。

### 這對 AI 治理的深遠影響

這是美國政府首次依據《出口管制改革法案》(ECRA) 框架對國內 AI 公司的旗艦模型實施出口管制，為所有 CISO 設立了必須關注的先例。此禁令對任何在國際市場 — 尤其是 Claude 快速成長的亞太地區 — 使用 Anthropic Claude 平台的企業，帶來了**跨司法管轄區的合規風險**。金融機構正在主動限制員工存取，可能促使企業轉向競爭模型（AWS Bedrock、Google Vertex、OpenAI），形成碎片化的 AI 安全格局。緊急凍結與恢復的循環也引發了對已採用 Claude 工作流程的企業的**模型連續性風險**關注。

🔗 **參考資料：** 綜合報導（[Bloomberg](https://www.bloomberg.com/news/articles/2026-06-15/lutnicks-anthropic-crackdown-claims-new-power-over-ai-models)、[Android Authority](https://www.androidauthority.com/anthropics-most-advanced-ai-models-could-be-restored-shortly-following-dramatic-emergency-freeze/)、[GovInfoSecurity](https://www.govinfosecurity.com/jpmorgan-pulls-anthropic-claude-access-in-hong-kong-a-25778)、[Techzine](https://techzine.global/small-group-of-users-retains-access-to-mythos/)、[Thelec](https://www.thelec.net/news/articleView.html?idxno=1275)、[TechTimes](https://www.techtimes.com/articles/301234/20260619/anthropic-opens-seoul-office-us-export-ban-korean-access-top-models.htm)、[MarketScreener](https://www.marketscreener.com/quote/stock/ANTHROPIC-PBC-71236642/news/Anthropic-vs-the-Trump-Administration-What-the-Latest-Fable-5-and-Mythos-5-Ban-Means-for-AI-Investors-49463923/)、[NDTV](https://www.ndtv.com/world-news/jpmorgan-chase-blocks-anthropic-claude-access-for-hong-kong-employees-9056611)）

---

## 本週活躍威脅

📌 **Windows Clipper 惡意軟體透過 USB LNK 蠕蟲散播**
微軟公布了一波活躍的 clipper 惡意軟體攻擊活動，透過 **USB 隨身碟的 LNK 捷徑檔案**散播，並使用 **Tor 網路**進行命令與控制（C2）通訊。該惡意軟體會在交易過程中置換剪貼簿中的加密貨幣錢包地址。USB 蠕蟲傳播途徑使其能夠跨越網路的實體隔離（air-gap）。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/microsoft-details-windows-clipper.html)

📌 **INC 勒索軟體崛起：830+ 受害者**
INC 勒索軟體自 2023 年上線以來已宣稱超過 **830 名受害者**，成為 2026 年最活躍的勒索軟體即服務（RaaS）之一。該組織針對醫療保健、金融和製造業的企業，採用雙重勒索手法。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html)

📌 **Splunk 9.8 分重大漏洞列入 CISA KEV — 6月21日前須修補**
CISA 將一個 **CVSS 9.8** 的 Splunk 漏洞加入已知被利用漏洞目錄（KEV），要求聯邦機構及建議組織在 **6 月 21 日前**完成修補。對於任何使用 Splunk 進行 SIEM 和日誌管理的組織，此漏洞應視為零日級別的優先處理事項。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/161295)

📌 **FortiBleed 漏洞影響 86,644 台 FortiGate 設備**
CISA 發布緊急警告，**FortiBleed** 漏洞影響全球超過 8.6 萬台 FortiGate 防火牆。該漏洞允許未經認證的遠端程式碼執行，且已在野外被積極利用。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cisa-warns-fortinet-customers-as.html)

📌 **Popa 僵屍網路與上市以色列公司有關聯**
KrebsOnSecurity 報導指出，**Popa 僵屍網路** — 負責大規模的憑證填充和 DDoS 攻擊 — 與一家公開上市的以色列科技公司存在營運關聯。這項調查揭示了合法企業基礎設施與僵屍網路之間令人擔憂的連結。
🔗 **參考資料：** [KrebsOnSecurity](https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/)

📌 **Salesforce Klue 應用程式 OAuth 令牌遭濫用**
Salesforce 已停用 **Klue 應用程式整合**，原因是攻擊者利用**被竊取的 OAuth 令牌**存取客戶資料。此事件凸顯了 SaaS 生態系統中**第三方應用整合**日益增加的風險。此外，諾和諾德（Novo Nordisk）也通報軟體開發管道遭入侵，突顯製藥業 DevOps 的供應鏈風險。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/salesforce-disables-klue-app.html) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/salesforce-data-thefts-klue-app-compromise) | [Dark Reading — Novo Nordisk](https://www.darkreading.com/cyber-risk/novo-nordisk-breach-exposes-dev-pipeline-risk)

---

## OPSWAT 可以怎麼幫上忙

Clipper USB 蠕蟲和 FortiBleed 攻擊皆涉及**基於檔案的攻擊向量**，可在入口點進行攔截。OPSWAT MetaDefender 的**多引擎檔案掃描**（30+ 防毒引擎）結合**深度內容解除與重建（CDR）**，可在 USB LNK 檔案、電子郵件附件和下載的惡意酬載到達端點前，移除其中的活動內容。針對 Novo Nordisk 和 Salesforce 事件所凸顯的供應鏈風險，MetaDefender 的**主動式檔案安全**為基於檔案的惡意軟體和零日威脅提供了縱深防禦。

🔗 **了解更多：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
