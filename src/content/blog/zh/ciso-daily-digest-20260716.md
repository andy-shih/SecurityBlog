---
title: "CISO 每日摘要：Anthropic 與 Blackstone 聯手推出 Ode — 15 億美元企業 AI 服務公司 (20260716)"
description: "Anthropic、Blackstone 與 Hellman & Friedman 共同成立 Ode，一間 15 億美元的企業 AI 服務公司；微軟 7 月 Patch Tuesday 修補破紀錄 622 項漏洞，含 Exchange 高風險弱點；LegacyHive Windows 零時差漏洞可權限提升；RabbitMQ 重大漏洞洩漏 OAuth 金鑰；TuxBot v3 AI 輔助 IoT 殭屍網路進化至 17 種架構；292 個假 GitHub 儲存庫散布 BoryptGrab 竊資程式；xAI 控告 Grok 用戶製作兒少深偽內容；ESET 揭露 11 款 UEFI Shim 漏洞繞過安全開機機制。"
pubDate: 2026-07-16
tags: [CISO, 每日摘要, 資安, AI 治理, 企業 AI, 漏洞, 惡意軟體, 供應鏈安全, Anthropic, Ode, Microsoft, Exchange, Patch Tuesday, LegacyHive, RabbitMQ, TuxBot, BoryptGrab, xAI, Grok, Secure Boot, UEFI Shim]
author: "Security Solutions Team"
featured: true
---

## Anthropic 與 Blackstone 聯手推出 Ode — 15 億美元企業 AI 服務公司

Anthropic、Blackstone、Hellman & Friedman 與 Goldman Sachs 今日正式推出 **Ode**，一間規模達 15 億美元的 AI 企業服務公司，旨在協助大型組織大規模導入、客製化與管理 Anthropic 的 AI 平台。Ode 結合 Anthropic 的前沿模型與專業服務團隊，目標客戶是需要完整 AI 生命週期部署、資安整合與營運治理的企業，而不僅是 API 存取。

此舉標誌著前沿 AI 實驗室對企業採納策略的結構性轉變：不再僅依賴自助式 API 消費，Anthropic 認為由私募股權巨頭支持的**受管 AI 服務**將推動下一波企業營收成長。Ode 將直接與 OpenAI 的企業團隊及 Google Vertex AI Enterprise 等受管 AI 服務競爭。

對 CISO 而言，Ode 的成立既是機會也是挑戰：企業獲得了一個專注於 AI 治理、模型監控與安全配置的夥伴，但受管服務模式也創造了新的供應商依賴層，必須審查其資料處理、存取控制與合規邊界。Blackstone 與 H&F 在受監管產業的深厚經驗，暗示此服務從設計之初就考慮了機構合規需求。

### 這對企業 AI 治理的深遠影響

一家 15 億美元實體專門聚焦企業 AI 導入，代表 AI 正從**實驗階段邁入生產階段**。Ode 的模式——結合 Anthropic 模型與 Blackstone 的機構觸角——創造了新的 AI 供應商類別：**AI 導入合作夥伴**。評估 AI 採用的 CISO 現在不僅要考量模型本身的安全性，還要審視管理部署的服務公司之營運安全態勢。Ode 需要證明其資料邊界隔離、模型存取稽核與事故應變 SLA，才能贏得企業信任。

🔗 **參考資料：** 綜合報導（[TechCrunch](https://techcrunch.com/2026/07/15/anthropic-blackstone-bet-the-next-trillion-dollar-ai-business-is-implementation-not-models/)、[iThome - AWS Agent AI](https://www.ithome.com.tw/news/177348)、[Dark Reading - Claude Flaw](https://www.darkreading.com/vulnerabilities-threats/claude-flaw-malicious-prompts-ai-agents)、[iThome - GPT-Red](https://www.ithome.com.tw/news/177372)）

---

## 本週活躍威脅

📌 **微軟 7 月 Patch Tuesday 修補破紀錄 622 項漏洞——Exchange 在列**
微軟 2026 年 7 月 Patch Tuesday 修補了破紀錄的 **622 項漏洞**，涵蓋產品組合各層面，包括多個 **Exchange Server 高風險漏洞**（涉及偽冒、權限提升與遠端執行程式碼）。如此大量的修補——為單月最高——反映了微軟所承認的 AI 輔助安全測試與程式碼審查正在擴大漏洞發現管線。此外，微軟確認此更新在某些 Dell 系統上造成相容性問題，已暫停對受影響型號推送。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/07/16/622-cve/) | [iThome](https://www.ithome.com.tw/news/177356) | [iThome](https://www.ithome.com.tw/news/177264)

📌 **LegacyHive：新的 Windows 零時差漏洞可權限提升**
研究人員 Chaotic Eclipse 公布了一個名為 **LegacyHive** 的 Windows 零時差漏洞，影響 **Windows User Profile Service**。本機攻擊者可利用此漏洞在已完全修補的 Windows 系統上進行權限提升。目前尚無官方修補程式。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177353)

📌 **RabbitMQ 重大漏洞洩漏 OAuth 金鑰，可致伺服器遭接管**
資安業者 Miggo 揭露廣泛使用的開源訊息中介軟體 **RabbitMQ** 中存在重大漏洞，攻擊者可繞過身分驗證、洩漏 OAuth 金鑰並接管訊息中介伺服器。使用 RabbitMQ 進行服務間通訊的組織應優先修補，因為該漏洞可在雲端與容器環境中橫向移動。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177365)

📌 **TuxBot v3：AI 輔助 IoT 殭屍網路擴展至 17 種處理器架構**
**TuxBot v3 Evolution** IoT 殭屍網路現利用大型語言模型將其目標架構支援擴展至 **17 種處理器架構**，標誌著自動化惡意程式開發的重大演進。雖然研究人員注意到 AI 生成元件的程式碼審查不足導致多項錯誤，但該殭屍網路的核心感染與 DDoS 攻擊功能仍然有效，持續對全球 IoT 裝置構成威脅。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/tuxbot-v3-evolution-shows-signs-of-llm.html) | [iThome](https://www.ithome.com.tw/news/177366)

📌 **292 個假 GitHub 儲存庫冒充知名品牌散布 BoryptGrab 竊資程式**
Arctic Wolf 研究人員揭露一場大規模供應鏈攻擊活動，涉及 **292 個假 GitHub 儲存庫**冒充知名軟體與資安品牌。這些儲存庫透過偽造的 README 頁面與下載連結散布 **BoryptGrab** 資訊竊取惡意程式。此活動凸顯了開源生態系統中域名搶註與品牌冒充風險的日益升溫。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177364)

📌 **xAI 控告 Grok 用戶製作兒少深偽內容——Grok Build 隱私爭議**
xAI 對一名南卡羅來納州男子提起訴訟，指控其利用 **Grok** 生成兒童性虐待素材（CSAM），這是 AI 公司針對用戶濫用模型提起的首批重大法律行動之一。與此同時，xAI 在爭議中開源了 **Grok Build**——該工具被發現預設將用戶的完整程式碼儲存庫上傳至雲端。Elon Musk 隨後承諾將完全開源 X 的整個程式碼庫。
🔗 **參考資料：** [The Verge](https://www.theverge.com/ai-artificial-intelligence/966293/xai-grok-user-lawsuit-csam) | [iThome](https://www.ithome.com.tw/news/177366)

📌 **GNU Wget SSRF 漏洞風險內部網路存取**
CERT/CC 揭露 **GNU Wget**（CVE-2026-15146）中存在伺服端請求偽造（**SSRF**）漏洞，影響工具處理 FTP 被動模式回應的方式。攻擊者可利用此漏洞透過 Wget 用戶端存取內部網路資源，對自動化下載管線、CI/CD 系統與容器建置流程構成風險。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177367)

📌 **ESET 揭露 11 款微軟簽章 UEFI Shim 漏洞可繞過安全開機**
ESET 研究人員揭露了 **11 個漏洞**存在於舊版 Linux UEFI **Shim** 開機載入程式中——這些 Shim 仍帶有有效的微軟簽章——允許攻擊者在系統啟動時繞過 Secure Boot 防護並載入未簽署程式碼。受影響的 Shim 可追溯多年，但仍受 UEFI 韌體信任，在 Secure Boot 信任鏈中形成了持續的盲點。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177370) | [Dark Reading](https://www.darkreading.com/cyber-risk/forgotten-bootloaders-expose-secure-boot-blind-spot)

📌 **身分攻擊超越漏洞利用成為勒索軟體首要入侵途徑**
最新分析顯示，**以身份為基礎的攻擊**——遭入侵憑證、工作階段劫持與 MFA 繞過——已超越傳統漏洞利用，成為勒索軟體事件的主要初始入侵向量。此轉變凸顯了組織在傳統修補管理之外，同時強化身分基礎設施的必要性。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/identity-access-management-security/identity-attacks-overtake-exploits-t)

📌 **日本冷鏈物流龍頭 Nichirei 遭駭，供應鏈受衝擊**
日本食品與低溫物流龍頭 **Nichirei** 遭網路攻擊，導致食品出貨及冷藏物流倉儲作業停擺，多家餐飲業者、超市與零售業者受到波及。日本 KFC 與便利商店通路回報可能面臨食材短缺。此事件凸顯了即時食品供應鏈面對網路攻擊的脆弱性。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177361) | [iThome](https://www.ithome.com.tw/news/177343)

📌 **國際刑警組織 First Light 行動逮捕 5,800 人，打擊跨國網路詐騙**
國際刑警組織的 **First Light 行動**在多國同步掃蕩，逮捕超過 **5,800 名嫌犯**，打擊電信詐騙、線上投資騙局與洗錢網絡。行動查扣約 1.4 億歐元不法資產。此行動的規模展現了網路犯罪的跨國特性以及國際執法機構之間日益增強的協調能力。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177352) | [Dark Reading](https://www.darkreading.com/threat-intelligence/police-disrupt-140m-euro-cyber-fraud-ring-spain)

---

## OPSWAT 可以怎麼幫上忙

今日的多個威脅具有共同的基於檔案的惡意內容傳遞特徵：假 GitHub 儲存庫散布竊資程式、下載工具中的 SSRF 漏洞可導致橫向移動、IoT 殭屍網路經由韌體感染傳播。**OPSWAT MetaDefender** 提供多引擎檔案掃描與內容淨化（CDR），可在套件、二進位檔與文件到達端點或生產環境前，偵測並中和其中的惡意內容。MetaDefender 的深度 CDR 能力可淨化來自不受信任來源的壓縮檔、可執行檔與指令稿酬載，為供應鏈入侵與檔案型威脅提供關鍵防護層。
