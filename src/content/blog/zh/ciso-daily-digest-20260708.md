---
title: "CISO 每日摘要：Anthropic Claude Cowork 進軍行動裝置 — AI 代理現可跨平台執行 (20260708)"
description: "Anthropic 推出 Claude Cowork 行動版與網頁版，支援跨裝置任務同步；延長 Fable 5 存取期限 5 天並修補安全問題；GitLost 漏洞洩漏 GitHub 代理工作流程私密資料；存在 15 年的 GhostLock Linux 漏洞可取得 root 權限並逃逸容器；ClickFix 惡意程式攻擊擴大到 macOS 平臺；Gitea CVE-2026-20896 漏洞遭利用，逾 6,200 個執行個體曝險；CISA 新增 4 個已遭利用漏洞至 KEV；騰達路由器後門繞過驗證取得管理員權限。"
pubDate: 2026-07-08
tags: [CISO, 每日摘要, 資安, AI 治理, 漏洞, 惡意軟體, 供應鏈安全, Anthropic, Claude, Cowork, Fable 5, Linux, Gitea, macOS, ClickFix, CISA, 勒索軟體]
author: "Security Solutions Team"
featured: true
---

## Anthropic Claude Cowork 進軍行動裝置 — AI 代理現可跨平台執行

Anthropic 今日正式推出 **Claude Cowork** 行動版與網頁版，將 AI 代理從桌面端延伸至手機與瀏覽器。Max 訂閱用戶現在可以在一個裝置上啟動任務，在另一個裝置上繼續執行，即使關閉筆電也能在雲端持續運作。此舉讓 Claude Cowork 成為跨平台的持續性 AI 勞動力，直接與 OpenAI 和 Google 的同類產品競爭。

伴隨行動版上線，Anthropic 宣布將 **Claude Fable 5** 的存取期限延長 5 天至 7 月 12 日，並重新加入新的使用限制與安全修補，解決先前的隱藏追蹤器爭議。此外，Anthropic 與 TeraWulf 簽署 **20 年、401MW 資料中心租約**，顯示其在潛在 IPO 前積極擴張基礎設施。

### 這對 AI 代理治理的深遠影響

Claude Cowork 行動版擴大了企業 AI 代理的攻擊面：持續的雲端執行、跨裝置會話延續以及背景 VM 操作，帶來了新的身分驗證、授權與資料主權考量。Fable 5 作為具備自主程式碼生成與工具使用能力的模型，其存取延長結合先前的追蹤器事件，凸顯了能力擴展與安全防護之間的張力。CISO 應評估組織是否能全面掌握 AI 代理在終端裝置上的活動。

🔗 **參考資料：** 綜合報導（[The Verge](https://www.theverge.com/2026/7/8/4247890/anthropic-is-launching-claude-cowork-on-mobile-and-web)、[TechCrunch](https://techcrunch.com/2026/07/08/claude-cowork-expands-to-mobile-and-web/)、[The Decoder](https://the-decoder.com/anthropics-claude-cowork-ai-agent-is-now-available-on-mobile-and-web/)、[The New Stack](https://thenewstack.io/anthropic-gives-claude-subscribers-five-more-days-with-fable-5/)、[Security Affairs](https://securityaffairs.com/183956/cyber-crime/anthropic-extends-claude-fable-5-free-access-on-all-paid-plans.html)、[iThome](https://www.ithome.com.tw/news/177140)）

---

## 本週活躍威脅

📌 **GitLost 漏洞洩漏 GitHub 代理工作流程私密資料**
名為 **GitLost** 的漏洞存在於 GitHub 代理工作流程系統中，攻擊者可透過惡意貢獻洩漏私有儲存庫資料與 secrets。該漏洞利用 GitHub 在處理第三方 fork 觸發的自動化 CI/CD 管線時權限管理的缺陷。使用 GitHub Actions 且有外部貢獻者的組織應審查其 token 範圍與工作流程核准設定。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/gitlost-leaks-private-data-github-agentic-workflows)

📌 **GhostLock：存在 15 年的 Linux 漏洞可取得 Root 權限並逃逸容器**
Linux 核心 futex 子系統中存在一個 **存在 15 年** 的漏洞（CVE-2026-24587，取名 GhostLock），影響大多數主要發行版，允許本機攻擊者取得 root 權限並逃逸容器。該漏洞自核心 2.6 版本即存在，在多租戶容器環境中尤其危險。各發行版正在陸續推出修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/15-year-old-ghostlock-flaw-enables-root.html)

📌 **ClickFix 惡意程式攻擊擴大到 macOS 平臺**
**ClickFix** 社交工程手法——透過偽造的瀏覽器錯誤訊息誘騙用戶執行惡意指令——在 2026 年 3 月至 5 月期間已成為主要的惡意程式遞送管道。該攻擊現已擴大到鎖定 **macOS 用戶**，利用偽造的系統錯誤提示透過 Script Editor 執行惡意 AppleScript 指令。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177165)

📌 **Gitea CVE-2026-20896 漏洞已遭利用，逾 6,200 個執行個體曝險**
自託管 Git 服務 **Gitea** 在 6 月底修補的重大漏洞（CVE-2026-20896）目前已遭實際利用。該漏洞存在於官方 Docker 映像檔中，Sysdig 報告全球有超過 **6,200 個可從網際網路存取的執行個體**尚未修補，攻擊者可未經身分驗證觸發遠端程式碼執行。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177163)

📌 **DEBULL 工具濫用 Microsoft 裝置代碼流程攻擊 M365 帳號**
威脅行為者利用名為 **DEBULL** 的工具包濫用 Microsoft 的裝置代碼驗證流程，可在不觸發 MFA 提示的情況下竊取 Microsoft 365 帳號憑證。該攻擊利用裝置代碼釣魚技術，可繞過傳統條件式存取政策。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/debull-tooling-abuses-microsoft-device.html)

📌 **RedWing MaaS 將 Android 銀行詐騙包裝為 Telegram 租用服務**
名為 **RedWing** 的新型惡意軟體即服務（MaaS）透過 Telegram 以每月 **500 美元** 起租的方式提供 Android 銀行木馬。該平台整合了簡訊攔截、畫面覆蓋攻擊與無障礙服務濫用功能，針對歐洲與東南亞的銀行應用程式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/redwing-maas-packages-android-bank.html)

📌 **Rogue Agent 漏洞可挾持 Google Dialogflow CX 聊天機器人竊取資料**
**Google Dialogflow CX** 中的一個漏洞（取名 Rogue Agent）可能允許攻擊者挾持 AI 聊天機器人對話並竊取敏感資料。該漏洞涉及代理對代理路由中的授權不當。Google 已發布修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/rogue-agent-flaw-could-have-let.html) | [Dark Reading](https://www.darkreading.com/application-security/dialogflow-cx-rogue-agent-flaw-enabled-ai-chatbot-d)

📌 **CISA 新增 4 個已遭利用漏洞至 KEV——Adobe、Joomla、Langflow**
CISA 將四個漏洞新增至已知遭利用漏洞目錄（KEV），包括兩個 **CVSS 10.0 的 Joomla 外掛漏洞**（JoomShaper SP Page Builder 與 Joomlack Page Builder）、一個 **Adobe ColdFusion** 零日漏洞，以及一個 **Langflow** 漏洞（CVE-2026-55255）。聯邦機構須在 3 天內完成 Langflow 修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/cisa-adds-4-actively-exploited-adobe.html) | [iThome](https://www.ithome.com.tw/news/177157) | [iThome (Joomla)](https://www.ithome.com.tw/news/177158)

📌 **騰達路由器韌體後門可繞過驗證取得管理員權限**
CERT/CC 揭露 **騰達（Tenda）** 路由器韌體中存在一個嚴重的身分驗證繞過漏洞（**CVE-2026-11405**），允許攻擊者透過隱藏的替代驗證機制取得管理者權限。目前尚無修補程式，建議用戶停用遠端網頁管理介面。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177173)

📌 **大型品牌求職詐騙鎖定行銷專業人士 Google 帳號**
名為 **Big Brand Jobs Scam** 的複雜釣魚活動利用知名品牌的虛假工作機會，鎖定行銷與廣告專業人士，最終目標是入侵他們的 Google Workspace 帳號。此攻擊顯示以招聘為主題的釣魚攻擊持續演化，品牌冒充手法更加逼真。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/big-brand-jobs-scam-marketing-pros-google-acc)

📌 **美國政府機關支付 100 萬美元平息資料勒索事件**
威脅情報組織 Ransom-ISAC 指出，美國某地方政府機構遭駭客竊取大量資料後，據稱支付約 **100 萬美元贖金**，以避免民眾個資被公開。儘管 FBI 與 CISA 並不鼓勵支付贖金，此事件凸顯了公部門在面對資料勒索時日益增加的壓力。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177171)

---

## OPSWAT 可以怎麼幫上忙

本週多個活躍威脅的共同特徵是**基於檔案的惡意內容傳遞**：ClickFix 透過假錯誤頁面傳遞惡意軟體、Android 銀行木馬以 APK 形式散播、Gitea 供應鏈中的 Docker 映像檔漏洞可導致 RCE。**OPSWAT MetaDefender** 提供多引擎檔案掃描與內容淨化（CDR），可在檔案、套件與容器映像檔到達端點或生產環境前，即時中和其中的威脅。
