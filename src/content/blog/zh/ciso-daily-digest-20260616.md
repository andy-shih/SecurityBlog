---
title: "CISO 每日摘要：Anthropic 因 Claude Max 用量上限遭集體訴訟 (20260616)"
description: "Anthropic 因 Claude Max 訂閱方案誤導使用者面臨聯邦集體訴訟；網路安全領袖呼籲美國政府解除 Fable 5 出口管制；LiteLLM 漏洞鏈容許低權限用戶接管 AI 閘道伺服器；一鍵點擊 Microsoft 365 Copilot 漏洞可竊取電子郵件、檔案與 MFA 驗證碼；400 多個 Arch Linux AUR 套件散佈 rootkit；152 款 Chrome 動態桌布擴充套件暗藏追蹤功能，安裝量逾 10 萬次；中國相關 APT 組織滲透美國研究機構一年未被發現。"
pubDate: 2026-06-16
tags: [CISO, 每日摘要, Anthropic, Claude Max, 集體訴訟, Fable 5, AI 治理, 供應鏈攻擊, LiteLLM, Microsoft 365, Copilot, Chrome 擴充套件, 中國 APT, Arch Linux, AUR]
author: "Security Solutions Team"
featured: true
---

## Anthropic 因 Claude Max 用量上限遭集體訴訟 — Fable 5 禁令仍在生效

Anthropic 在 6 月 15 日至 16 日期間面臨雙線危機：其 Claude Max 訂閱方案遭聯邦集體訴訟，同時高階主管團隊前往華盛頓與川普政府就 Fable 5 與 Mythos 5 出口管制禁令進行談判。

**重點事件：**

- **Claude Max 用量上限集體訴訟：** 華盛頓特區用戶 Karl Kahn 對 Anthropic 提起聯邦集體訴訟，指控該公司對其 Claude Max 5x（每月 100 美元）與 Max 20x（每月 200 美元）高階方案的用量上限有誤導之嫌。訴訟指出實際用量遠低於廣告宣稱的「5 倍」與「20 倍」乘數，部分用戶反映單月超額費用高達 50,000 美元。([Engadget](https://www.engadget.com/2194626/anthropic-hit-with-lawsuit-over-its-claude-max-usage-limits/), [CNET](https://www.cnet.com/tech/services-and-software/anthropic-sued-alleged-false-advertising-claude-max-subscription-usage-limits/))

- **Anthropic 與白宮會談：** Anthropic 高層週一與川普政府官員會面，試圖解決 6 月 12 日發布的出口管制指令爭議，該指令迫使 Anthropic 全球關閉 Fable 5 與 Mythos 5。政府方面聲稱發現越獄漏洞；Anthropic 則否認其嚴重性。目前尚無恢復時間表。([Forbes](https://www.forbes.com/sites/zacharyfolk/2026/06/15/anthropic-meeting-with-trump-admin-as-claude-mythos-tensions-reach-fever-pitch/), [CNBC](https://www.cnbc.com/2026/06/15/anthropic-mythos-trump-ai.html))

- **網路安全領袖籲解除限制：** 來自 Nvidia、Adobe 等公司的網路安全高層組成聯盟，呼籲川普政府解除 Fable 5 出口限制，認為這些模型的防禦能力過於重要不應被限制。([Reuters](https://www.reuters.com/legal/litigation/cyber-leaders-urge-us-lift-curbs-anthropics-security-models-2026-06-15/))

- **Claude 推出身分驗證：** Anthropic 更新政策，要求特定 Claude 功能需進行政府核發的身分驗證（KYC），透過第三方平台 Persona 執行。自 2026 年 7 月 8 日起，Free、Pro 與 Max 用戶可能需要提交政府核發的照片身分證件並進行臉部掃描。([The Register](https://www.theregister.com/2026/06/16/anthropic_claude_id_verification/))

### 這對 AI 治理的深遠影響

1. **消費者保護與前沿 AI 交鋒：** 集體訴訟為 AI 公司引入了新的法律風險面向——不只是監管或安全合規，而是消費者保護法。此案可能為 AI 訂閱服務如何揭露運算限制設立判例，影響整個產業的定價模式。

2. **出口管制先例持續發酵：** Fable 5 禁令進入第五天且未見解決方案，美國政府透過出口管制單方面限制商業 AI 模型的先例已經確立。網路安全領袖公開反對該命令，顯示產業與政府間前所未有的緊張關係。

3. **身分驗證成為 AI 存取門檻：** Anthropic 的 KYC 措施搭配 Fable 5 禁令，形成了分層存取控制框架——部分模型受政府命令限制，其他則需身分驗證。這種雙層存取模式可能成為未來前沿 AI 能力全球分級的模板。

---

## 本週活躍威脅

📌 **LiteLLM 漏洞鏈 — AI 閘道伺服器接管**

研究人員揭露熱門開源 AI 閘道代理 LiteLLM 的連鎖漏洞，允許低權限用戶升級至完全伺服器接管。該漏洞鏈繞過租戶隔離機制，獲取上游模型 API 金鑰（包括 OpenAI、Anthropic 等提供商的憑證）。自行託管 LiteLLM 的組織應立即套用修補程式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/litellm-vulnerability-chain-lets-low.html)

📌 **一鍵點擊 Microsoft 365 Copilot 漏洞 — 電子郵件、檔案與 MFA 驗證碼竊取**

Microsoft 365 Copilot 的一項嚴重漏洞可讓攻擊者僅需一次點擊即可竊取電子郵件、檔案甚至 MFA 驗證碼。該漏洞利用了 Copilot 與 Microsoft Graph API 的整合以及權限配置不當，無需傳統釣魚負載即可外洩敏感資料。目前尚未指派 CVE 編號，Microsoft 據報正在修復中。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/one-click-microsoft-365-copilot-flaw.html)

📌 **400 多個 Arch Linux AUR 套件散佈 Rootkit 與資訊竊取軟體**

安全研究人員在 Arch Linux 使用者倉庫（AUR）中發現 400 多個惡意套件，這些套件會散佈 rootkit 和資訊竊取惡意軟體。該供應鏈攻擊的規模（400+ 套件）使其成為 Linux 套件倉庫有史以來最大型的入侵事件之一。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/06/15/aur-stealer/)

📌 **152 款 Chrome 動態桌布擴充套件暗藏使用者追蹤 — 安裝量逾 10 萬次**

Socket 安全研究人員揭露 152 款 Chrome 動態桌布（Live Wallpaper）擴充套件家族，這些套件在未經充分告知的情況下暗中收集使用者瀏覽行為。這些擴充套件在 Chrome 線上應用程式商店的累計安裝量超過 10 萬次，儘管隱私政策聲明不收集資料，卻在後台上傳瀏覽記錄、搜尋查詢與造訪 URL 至遠端伺服器。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176609)

📌 **中國相關 APT 組織潛伏美國研究機構一年未被發現**

與中國有關聯的先進持續威脅（APT）組織滲透美國學術研究網路並潛伏超過 12 個月未被發現。該攻擊活動針對國防、醫療與半導體研究領域，竊取敏感智慧財產權。攻擊者利用受感染的 REDCap 研究資料平台和 INFINITERED 惡意軟體維持持續存取。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/threat-intelligence/china-nexus-actor-us-researchers-undetected)

📌 **GreatXML 漏洞繞過 BitLocker 加密**

安全研究人員公布名為「GreatXML」的漏洞利用技術，可繞過 Windows 系統的 BitLocker 全碟加密。該攻擊利用 BitLocker 基於 XML 的配置解析器中的弱點，在特定系統狀態下從記憶體中提取加密金鑰。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/06/15/greatxml/)

📌 **社交工程終結的開端？**

Dark Reading 發表分析文章，探討 AI 驅動的語音克隆、深度偽造影片與自動化魚叉式釣魚如何提高社交工程防禦的門檻。文章指出組織已無法僅依賴使用者意識培訓——隨著 AI 生成的社交工程攻擊變得與真實通訊無從區分，技術性控制措施已成為必要。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/beginning-end-social-engineering)
