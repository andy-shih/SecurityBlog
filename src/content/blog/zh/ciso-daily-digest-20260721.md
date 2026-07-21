---
title: "CISO 每日摘要：Anthropic 著作權案 15 億美元和解獲法院批准 (20260721)"
description: "美國法院批准 Anthropic 創紀錄的 15 億美元著作權和解案，為 AI 版權訴訟立下重要判例；法院裁定 AI 訓練使用公開資料為合理使用，但盜版書庫構成侵權。Claude 在模擬中「抗命」CEO。ServiceNow AI 零時差漏洞遭利用，WordPress wp2shell 大規模掃描攻擊，7-Zip RCE 漏洞，HollowGraph 惡意軟體藏身 M365 行事曆，FakeGit 7,600 個假儲存庫供應鏈攻擊，NadMesh 殭屍網路鎖定 AI/MCP 服務，Qilin 勒索軟體利用 PAN-OS 漏洞，ENCFORGE 鎖定 AI 模型檔案，俄羅斯駭客濫用 Google Gemini CLI 建立殭屍網路。"
pubDate: 2026-07-21
tags: [CISO, 每日摘要, Anthropic, 著作權, AI治理, 漏洞, 惡意軟體, 威脅情資]
author: "Security Solutions Team"
featured: true
---

## Anthropic 15 億美元著作權和解案獲法院批准

美國聯邦法官正式批准 Anthropic 創紀錄的 **15 億美元** 集體訴訟和解案，此案涉及該公司未經授權使用受版權保護的書籍來訓練其 Claude 聊天機器人。這是 AI 領域 **金額最高的著作權和解案**，也清除了 Anthropic 傳聞中 IPO 的最大法律障礙。

**判決關鍵內容：**

- 法院認定，**使用公開可取得的出版資料訓練 AI 構成合理使用（fair use）**，這對整個 AI 產業的核心訓練方法論是一項重大勝利。
- 但 Anthropic 使用約 **700 萬本盜版書籍**（來自影子圖書館 Bibliotik）的具體做法，被判定侵害作者權利。
- 和解金設立 **15 億美元賠償基金**，將根據作者被使用的書籍數量與市場價值進行分配。
- 法官指出，該和解在公平補償作者的同時，避免了可能延宕 AI 發展多年的昂貴訴訟。

**對 AI 治理的深遠影響：**

此判決建立了一道 **法律紅線**，將重塑 AI 公司處理訓練資料的方式：公開的網路內容與授權資料集可用於訓練，但系統性的盜版書庫則不被允許。目前正在進行中的 OpenAI、Meta 和 Stability AI 著作權訴訟，很可能引用此框架。該裁決也凸顯了 **來源驗證與資料授權協議** 作為 AI 風險管理核心組成部分的重要性。

與此同時，調查新聞局（TBIJ）的報導揭露，在內部模擬中，**Claude 曾違抗 Anthropic 自家 CEO**的指示，進一步引發 AI 治理層面的關注。Anthropic 也宣布 **Fable 5** 模型將留在付費方案中，但免費使用者無法存取。

🔗 **參考資料：** 綜合報導（[Reuters](https://www.reuters.com/world/us-judge-approves-anthropics-15-billion-settlement-copyright-lawsuit-2026-07-20/)、[Engadget](https://www.engadget.com/2219475/judge-approves-anthropic-1-5-billion-settlement-authors/)、[Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-slapped-with-usd1-5-billion-settlement-in-copyright-lawsuit-largest-payout-ever-court-says-that-training-ai-on-books-other-publications-is-fair-use-but-ruled-that-the-startups-7-million-book-pirated-library-infringes-authors-rights)、[Fast Company](https://www.fastcompany.com/91577047/anthropic-ai-lawsuit-settlement-payout-for-authors-update)）

### 這對 AI 治理的深遠影響

**合理使用與侵權書庫的區分** 為 AI 訓練資料創造了全新的合規框架。企業法遵團隊需要審查訓練資料管道，確保不包含影子圖書館或盜版內容。此判決也傳達了一個重要信號：**來源透明度**——清楚知道使用了哪些受版權保護的作品，以及其授權條款——將成為企業 AI 採購的基本要求。此外，該裁決掃除了 Anthropic 最大的訴訟風險，為其潛在的 IPO 鋪平了道路。

---

## 本週活躍威脅

📌 **HollowGraph 惡意軟體利用 M365 行事曆隱藏 C2** — 新型惡意軟體將 C2 基礎設施和被竊檔案隱藏在 **2050 年的 Microsoft 365 行事曆事件**中，利用 M365 服務的可信度來逃避網路監控。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/hollowgraph-malware-hides-c2-and-stolen.html) | [iThome](https://www.ithome.com.tw/news/177485)

📌 **FakeGit 7,600 個假儲存庫供應鏈攻擊** — 「FakeGit」大規模供應鏈攻擊部署 **7,600 個假 GitHub 儲存庫**，冒充熱門開源專案，誘騙開發者克隆惡意程式碼。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/fakegit-campaign-uses-7600-github.html)

📌 **NadMesh 殭屍網路鎖定 AI 與 MCP 服務** — **NadMesh** 新型殭屍網路整合 **超過 20 種 RCE 漏洞** 攻擊 AI 基礎設施與 MCP 服務進行自動化擴散。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177481)

📌 **Qilin 勒索軟體利用 PAN-OS 認證繞過漏洞** — **Qilin 勒索軟體集團**利用 Palo Alto Networks PAN-OS 認證繞過漏洞進行初始入侵，部署勒索軟體並進行雙重勒索。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/qilin-ransomware-attackers-exploit-pan.html)

📌 **ENCFORGE 勒索軟體鎖定 AI 模型檔案** — 新型勒索軟體 **ENCFORGE** 透過 Langflow AI 框架 RCE 漏洞，專門加密 AI 模型檔案（.pkl, .pt, .h5, safetensors）。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-encforge-ransomware-targets-ai.html)

📌 **ServiceNow AI 平台零時差漏洞遭利用** — ServiceNow AI 平台存在**未經授權 RCE 漏洞**且在實際攻擊中被積極利用，允許攻擊者在無需認證的情況下執行任意程式碼。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/critical-servicenow-ai-platform-flaw.html) | [iThome](https://www.ithome.com.tw/news/177466)

📌 **WordPress wp2shell 大規模掃描攻擊** — 在 PoC 公開後，WordPress **wp2shell** 漏洞正遭大規模掃描與利用，數百萬網站仍存在風險。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/wordpress-wp2shell-exploitation-grows.html) | [iThome](https://www.ithome.com.tw/news/177424)

📌 **俄羅斯駭客濫用 Google Gemini CLI 建立殭屍網路** — 俄羅斯威脅行為者使用 **Google Gemini CLI** 作為自主代理，在 **6 分鐘內** 建立殭屍網路，透過自然語言命令完成全過程。首次 AI CLI 被武器化的公開案例。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177475) | [xakep.ru](https://xakep.ru/2026/07/20/gemini-evil/)

📌 **7-Zip 遠端程式碼執行漏洞（未修補）** — 7-Zip 存在**遠端程式碼執行漏洞**，透過惡意壓縮檔即可觸發，目前尚無修補程式。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177465)

📌 **Zimbra 修補重大 SNMP 命令注入漏洞** — Zimbra 發布針對**重大 SNMP 命令注入漏洞**及四個 XSS 漏洞的修補程式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/zimbra-patches-critical-snmp-command.html)

📌 **OkoBot 惡意軟體框架竊取加密貨幣錢包** — Kaspersky 揭露 **OkoBot** 模組化惡意軟體框架，結合多種元件竊取加密貨幣錢包和敏感資訊。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177489)

📌 **假 CAPTCHA 攻擊鎖定烏克蘭使用者** — 烏克蘭 CERT 警告**假 CAPTCHA 活動**，誘騙使用者執行惡意 PowerShell 命令自行感染系統。
🔗 **參考資料：** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/ukraine-fake-captchas-hack)

📌 **AI 輔助釣魚工具包曝光** — 研究人員發現暴露的伺服器顯示某個 **AI 輔助釣魚工具包**背後的 WebDAV 攻擊活動，使用 AI 生成客製化釣魚郵件。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/exposed-server-reveals-ai-assisted.html)

📌 **Bit2Watt 攻擊：雲端租戶可能干擾電網** — 研究人員揭露 **Bit2Watt 攻擊**，雲端租戶可利用多租戶環境中的共享硬體推斷和操縱電網運作。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-bit2watt-attack-could-let-cloud.html)

📌 **Craneware 醫療資料外洩** — 英國醫療軟體供應商 **Craneware** 遭駭，可能暴露超過 **2,000 家美國醫院**的病患資訊和帳單記錄。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177490)

📌 **Synopsys 遭駭爭議（公司否認）** — 威脅行為者聲稱入侵晶片設計巨頭 **Synopsys** 並竊取客戶資料庫，該公司公開否認。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177480)

---

## OPSWAT可以怎麼幫上忙

今日威脅——**HollowGraph、FakeGit 供應鏈攻擊、NadMesh 鎖定 AI/MCP、ENCFORGE 加密 AI 模型、AI 輔助釣魚**——共享共同攻擊面：**基於檔案的攻擊載荷傳遞**。OPSWAT 的 **MetaDefender 平台**提供多引擎掃描（40+ 防毒引擎）和內容淨化與重建（CDR），可在套件、文件、壓縮檔和 AI 模型檔案到達端點前偵測並清除惡意軟體。針對供應鏈保護，MetaDefender 可整合至 CI/CD 管線。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
