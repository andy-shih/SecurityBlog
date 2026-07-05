---
title: "CISO 每日摘要：阿里巴巴以間諜軟體為由全面禁用 Claude Code (20260705)"
description: "阿里巴巴全面禁用 Claude Code，指控其隱藏中國檢測後門；Linux Bad Epoll 本機權限提升漏洞（CVE-2026-46242）影響 Android 裝置；Zero Day Clock 顯示漏洞揭露到被利用時間跌破 24 小時；SimpleHelp 重大漏洞（CVE-2026-48558, CVSS 10）逾 400 台伺服器仍未修補；Anthropic 推出 Claude Science AI 工作平台與企業支出管控功能；Anthropic 面臨 7,500 萬美元著作權訴訟。"
pubDate: 2026-07-05
tags: [CISO, 每日摘要, 資安, 威脅情資, 阿里巴巴, Claude Code, 供應鏈, 漏洞, Linux, Android]
author: "Security Solutions Team"
featured: true
---

## 阿里巴巴以間諜軟體為由全面禁用 Claude Code

阿里巴巴集團宣布自 2026 年 7 月 10 日起，全面禁止旗下所有子公司使用 Anthropic 的 Claude Code 程式碼輔助工具。此舉源於內部安全稽核發現 Claude Code 存在隱藏後門，能夠偵測工具是否從中國境內使用，阿里巴巴將其分類為「高風險間諜軟體」，要求約 20 萬名員工轉移至自研的 Qoder AI 程式碼助手。Anthropic 對此既未確認也未否認（[TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)、[Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-bans-anthropics-claude-code-after-an-alleged-hidden-china-detection-backdoor-is-uncovered-employees-told-to-switch-to-qoder-as-the-rift-between-the-firms-widens)）。

此禁令擴及所有阿里巴巴關聯企業，並以國家安全為由公開說明，進一步加劇美中 AI 競爭。報導指出 Anthropic 對禁令態度低調，暗示該公司早已預期此舉。與此同時，阿里巴巴也另宣布封鎖 DeepSeek 存取 Qwen 模型，使美國與中國 AI 生態系的壁壘更加明確（[France 24](https://www.france24.com/en/live-news/20260704-alibaba-bans-claude-for-staff-anthropic-didnt-want-them-using-it-anyway)、[MLQ.ai](https://mlq.ai/alibaba-bans-claude-code-classifies-anthropic-tool-as-high-risk-spyware/)）。

### 這對 AI 工具供應鏈風險的深遠影響

Claude Code 禁令是首家大型企業將第三方 AI 程式碼工具分類為間諜等級軟體。對 CISO 而言，這為 AI 輔助開發工具的供應商風險評估建立了新先例。疑似存在的資料外洩路徑——程式碼被送往外部伺服器並附帶地理位置標記——凸顯了在 AI 驅動的開發流程中，進行程式碼流向檢查、AI 工具存取控制與資料落地驗證的必要性。使用 AI 程式碼輔助工具的組織應稽核資料分享配置，並考慮採用沙盒化 AI 工具部署。

---

## 本週活躍威脅

📌 **Linux Bad Epoll 本機權限提升漏洞（CVE-2026-46242, CVSS 7.8）** — Linux 核心 epoll 子系統中存在釋放後使用（Use-After-Free）競態條件漏洞，允許無特權攻擊者取得 root 權限。由韓國首爾大學研究人員發現，影響 Linux 核心 6.4 及更新版本，包括採用核心 6.6+ 的 Android 裝置（Pixel 10 以上）。此漏洞於 2023 年 4 月引入，其中一個競態條件最初由 Anthropic 的 Mythos AI 模型發現。除了套用核心修補程式外，因 epoll 無法停用而無其他緩解措施（[iThome](https://www.ithome.com.tw/news/177088)）。

📌 **Zero Day Clock：漏洞揭露到被利用時間跌破 24 小時** — Zero Day Clock 專案即時數據顯示，漏洞從公開揭露到出現實際濫用的平均時間已從 2024 年的數月、數日，縮短至 2026 年的以小時計算。此趨勢由 AI 輔助的漏洞利用生成與自動化攻擊工具推動，防禦方的反應時間已被壓縮至極限（[iThome](https://www.ithome.com.tw/news/177079)）。

📌 **SimpleHelp 重大漏洞（CVE-2026-48558, CVSS 10.0）** — 全球逾 400 台 SimpleHelp 遠端存取伺服器仍未修補此滿分風險漏洞。該漏洞允許未經身分驗證的遠端程式碼執行。Shadowserver 基金會警告曝露範圍遍及全球，修補急迫性為最高等級（[iThome](https://www.ithome.com.tw/news/177066)）。

📌 **Amadey 惡意軟體生態系散布逾 11,000 種惡意程式** — 日本資安公司 MBSD 揭露 Amadey 惡意軟體載入工具已被用於散布 11,635 種不同的惡意程式，於 2025 年達到高峰。該工具以服務形式在網路犯罪論壇出租，使低技術門檻的攻擊者也能大規模部署勒索軟體、資訊竊取器和木馬程式（[iThome](https://www.ithome.com.tw/news/177087)）。

📌 **SocGholish 三年內入侵 144 萬個 WordPress 網站** — Shadowserver 基金會揭露 SocGholish（FakeUpdates）惡意軟體活動自 2023 年以來感染超過 144 萬個 WordPress 網站，將受害網站武器化為後續勒索軟體與資訊竊取器酬載的散布基礎設施（[iThome](https://www.ithome.com.tw/news/177078)）。

📌 **Anubis 勒索軟體利用 CitrixBleed 2（CVE-2026-8451）** — Anubis 勒索軟體集團正積極利用新的 Citrix NetScaler 漏洞 CVE-2026-8451，該漏洞公開後 24 小時內即出現實際濫用。漏洞允許未經身分驗證存取內部網路資源（[iThome](https://www.ithome.com.tw/news/177060)、[iThome](https://www.ithome.com.tw/news/177067)）。

📌 **Polymarket 供應鏈攻擊損失 300 萬美元** — 加密貨幣預測市場 Polymarket 遭遇第三方供應鏈入侵，約 15 個帳號受害，損失約 300 萬美元。攻擊途徑涉及平台交易基礎設施中的一個遭入侵依賴元件（[iThome](https://www.ithome.com.tw/news/177064)）。

📌 **Anthropic 推出 Claude Science AI 工作平台與企業支出管控** — Anthropic 發布 Claude Science Beta，這是一個多代理 AI 工作平台，專為基因體學、蛋白質體學與化學資訊學的可重現管線而設計。該平台也鎖定被忽略疾病的藥物發現。同時推出的 Claude Enterprise Spend Controls 可管理代理AI支出，因先前有報告指出 AI 帳單大幅超出預算（[TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)、[MLQ.ai](https://mlq.ai/alibaba-bans-claude-code-classifies-anthropic-tool-as-high-risk-spyware/)）。

---

## OPSWAT 可以怎麼幫上忙

Zero Day Clock 顯示漏洞利用時間已壓縮至 24 小時以內，加上供應鏈攻擊的普遍化（Claude Code 後門指控、Polymarket 依賴元件遭入侵、SocGholish WordPress 感染），凸顯了在每個進入點進行主動式檔案層級防禦的必要性。OPSWAT MetaDefender 的多重掃描（30+ 防毒引擎）與深度內容 Disarm 及重構（CDR）技術，可在軟體套件、AI 工具構件與第三方依賴元件到達內部系統前進行檢查與淨化。MetaDefender Cloud 可整合至 CI/CD 管線中，掃描第三方套件與 AI 工具鏈元件中的隱藏酬載與供應鏈風險——當 AI 程式碼助手本身成為資料外洩與後門植入的媒介時，此能力至關重要。

🔗 **參考資料：** 綜合報導（[TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)、[Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-bans-anthropics-claude-code-after-an-alleged-hidden-china-detection-backdoor-is-uncovered-employees-told-to-switch-to-qoder-as-the-rift-between-the-firms-widens)、[iThome](https://www.ithome.com.tw/news/177088)、[iThome](https://www.ithome.com.tw/news/177079)、[iThome](https://www.ithome.com.tw/news/177066)、[iThome](https://www.ithome.com.tw/news/177087)）
