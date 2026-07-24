---
title: "CISO 每日摘要：AMD 投資 Anthropic 50 億美元、AI 版權判例與本週活躍威脅 (20260724)"
description: "AMD 投資 50 億美元於 Anthropic，提供 2GW AI 算力；Anthropic 同意支付 1.5 億美元版權集體訴訟和解金——創 AI 版權判例新高。俄羅斯 Laundry Bear 利用 Zimbra 零時差漏洞 CVE-2025-66376 發動間諜活動。FakeGit 建立 7,600 個惡意 GitHub 儲存庫散布 SmartLoader。Suno 遭駭，5,530 萬帳號外洩。"
pubDate: 2026-07-24
tags: [ciso, 每日摘要, 資安, 威脅情資, ai治理, anthropic, amd, 版權, zimbra, 供應鏈攻擊]
author: "Security Solutions Team"
featured: true
---

## AMD 與 Anthropic：50 億美元戰略合作重塑 AI 基礎設施

**AMD** 於 7 月 23–24 日宣布投資 **50 億美元** 於 **Anthropic**，並提供 **2 GW**（百萬瓩）的 AI 運算容量，採用 Instinct MI 系列加速器與 EPYC 處理器。此合作使 AMD 成為 Anthropic 的主要晶片夥伴，挑戰 NVIDIA 在 AI 訓練硬體領域的長期主導地位。Anthropic 將部署 AMD 的 **Helio** 機櫃級系統，整合 MI400 系列 AI 加速器與網路架構。

**關鍵細節：**
- AMD 將為 Anthropic 提供 **2 GW** 的 AI 算力（約當 10–15 座大型 AI 資料中心）
- Anthropic 團隊在一個週末內利用 Claude 完成 AMD 完整堆疊相容性驗證，突破 CUDA 的「人力資本壁壘」
- AMD 董事長蘇姿丰指出 AI 運算重心正從訓練轉向推論，CPU 需求增速甚至超越 GPU

**法律層面**，聯邦法官批准了 Anthropic 的 **1.5 億美元版權集體訴訟和解金**——AI 史上最高額版權和解案。此案涵蓋指控 Anthropic 未經授權使用受版權保護作品訓練 Claude 的作者群。同時，音樂出版商對 Anthropic 提出修正版訴訟，而《哈利波特》出版商 Bloomsbury 也從同一案件中獲得數百萬美元和解金。

**CISO 觀點：** AMD-Anthropic 合作標誌著 AI 硬體供應鏈從 NVIDIA 單一依賴轉向多元化的結構性轉變。結合版權和解金建立 AI 訓練資料的財務責任先例，企業面臨雙重壓力：既要分散 AI 基礎設施供應商，同時須稽核訓練資料來源以確保合規。

🔗 **參考資料：** 綜合報導（[SecurityWeek](https://securityweek.com)、[The Hacker News](https://thehackernews.com/2026/07/)、[DarkReading](https://www.darkreading.com/)、[iThome](https://www.ithome.com.tw/news/)）

---

## 本週活躍威脅

📌 **俄羅斯 Laundry Bear 利用 Zimbra 零時差漏洞（CVE-2025-66376）**
俄羅斯國家支持的駭客組織 **Laundry Bear**（又名 Void Blizzard、TA488）正積極利用 Zimbra Collaboration Suite 零時差漏洞 **CVE-2025-66376**，從烏克蘭、北約國家、獨立國協及非洲的政府與企業目標竊取郵件及雙因素認證碼。Palo Alto Networks 與 Proofpoint 確認至少 **10 起入侵事件**，駭客部署客製惡意程式 **ZimReaper** 維持持續存取。使用 Zimbra 的組織應優先更新至 **10.1.20** 版，該版本同時修補 SNMP 指令注入（CVE-2026-10631）與 XSS 漏洞（CVE-2026-50054、CVE-2026-50055）。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/russian-espionage-group-exploited.html) | [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/russian-hackers-zimbra-zero-day-us-ukraine-targets) | [iThome 資安日報](https://www.ithome.com.tw/news/177614)

📌 **FakeGit：7,600 個惡意 GitHub 儲存庫散布 SmartLoader**
名為 **FakeGit** 的大規模攻擊活動利用約 **6,600 個 GitHub 帳號**建立 **7,600 個惡意儲存庫**，將 **SmartLoader** 惡意軟體藏入假專案中。攻擊者亦以 **800 多個 AI Skill 與 MCP 伺服器**的名義進入公開目錄。這是針對開發者生態系的最大規模供應鏈攻擊之一，對 AI 代理工具鏈構成直接威脅。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177616) | [The Hacker News - Golden Chickens](https://thehackernews.com/2026/07/golden-chickens-resurfaces-with-four.html)

📌 **Suno 資料外洩：5,530 萬帳號曝光**
AI 音樂生成平台 **Suno** 遭大規模入侵，攻擊者外洩 **5,530 萬筆用戶帳號**資料，包含電子郵件、雜湊密碼及帳號元資料。雖無財務資料外洩，但其規模使其成為迄今最大型的 AI 平台資料外洩事件之一。

🔗 **參考資料：** [Xakep.ru](https://xakep.ru/2026/07/24/suno-data-leak/)

📌 **多項 AI 漏洞揭露**
本週安全研究人員揭露多項 AI 相關漏洞：
• **Claude Desktop（PromptFiction）：** 惡意連結可暗中注入隱藏指令，可能外洩對話歷史並執行任意程式碼。由 Oasis Security 發現。
• **ChatGPT AgentForger：** 網路釣魚連結可在 ChatGPT 代理框架中部署 rogue workspace agents。
• **Bing Images SVG RCE：** 特製 SVG 圖片可在微軟伺服器上以 **SYSTEM** 權限執行指令。

🔗 **參考資料：** [The Hacker News - AgentForger](https://thehackernews.com/2026/07/chatgpt-agentforger-flaw-could-deploy.html) | [The Hacker News - Bing Images](https://thehackernews.com/2026/07/bing-images-flaws-let-crafted-svgs-run.html) | [iThome - Claude 桌面版漏洞](https://www.ithome.com.tw/news/177608)

📌 **Linux 核心 24 小時內修補 440 個 CVE**
Linux 核心開發團隊在 **24 小時內修補 440 個漏洞**，大規模 CVE 密集發布引發關注。雖然多數漏洞嚴重性為中等，但修補密度反映了核心安全維護日益複雜的趨勢。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177599)

📌 **RefluXFS：Linux Root 權限提升漏洞**
XFS 檔案系統實作中的新漏洞 **RefluXFS** 允許無權限的本機使用者取得 Linux 系統的 **root 權限**。該漏洞影響所有主要發行版，對容器主機與雲端工作負載環境尤為關鍵。

🔗 **參考資料：** [Xakep.ru](https://xakep.ru/2026/07/24/refluxfs/)

📌 **其他值得注意的威脅：**
• **Certighost：** 低權限 AD 使用者可冒充域控制器，屬重大 Active Directory 權限提升漏洞。（[The Hacker News](https://thehackernews.com/2026/07/certighost-exploit-lets-low-privileged.html)）
• **SolarWinds Serv-U：** 2026.3 版修補 15 個重大漏洞，含 RCE 與權限提升。（[iThome](https://www.ithome.com.tw/news/177611)）
• **Windmill CVE-2026-29059：** 開源工作流程平台路徑遍歷漏洞已遭實際利用。（[iThome](https://www.ithome.com.tw/news/177601)）

---

## OPSWAT 可以怎麼幫上忙

**FakeGit** 供應鏈攻擊活動（7,600 個惡意儲存庫、800 多個假 AI Skill/MCP 伺服器）對使用 AI 代理工具鏈與開源套件的組織構成直接威脅。OPSWAT 的 **MetaDefender** 平台提供 30+ 防毒引擎的多重掃描及 **內容解除與重構（CDR）** 技術，可在下載的套件、二進位檔與文件到達端點前中和威脅。整合 AI 代理的組織應對每次套件拉取與 MCP 伺服器註冊執行檔案層級檢查，以防止 SmartLoader 等供應鏈植入攻擊。
