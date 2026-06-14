---
title: "CISO 每日摘要：Linux Copy Fail 漏洞與 SaaS 勒索攻擊升溫 (20260502)"
description: "Linux 核心重大漏洞「Copy Fail」允許本機權限提升至 root；網路犯罪集團透過語音釣魚和 SSO 濫用發動 SaaS 勒索攻擊"
pubDate: 2026-05-02
tags: ["CISO 每日摘要", "網路安全", "威脅情報"]
author: "Security Solutions Team"
featured: true
---

**Linux 核心「Copy Fail」漏洞 — 本機權限提升至 Root**

- Linux 核心中被稱為 **「Copy Fail」** 的重大漏洞，允許本機使用者將權限提升至 **root**，影響多個主流 Linux 發行版本
- 此漏洞在核心中存在約 **9 年**，是透過 AI 輔助程式碼分析發現的
- 漏洞影響核心記憶體管理子系統，使具有低權限存取的攻擊者能夠獲得完整的系統控制權
- 各大 Linux 發行版（Ubuntu、Red Hat、Debian）已發布緊急修補程式

🔗 **參考資料：** 綜合報導（[iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFBkdkl1Q3RkWncxdVk2Q3l6LWdP...)、[Dark Reading](https://www.darkreading.com/vulnerabilities-threats/ai-assisted-software-scan...))

### 本週活躍威脅

📌 **網路犯罪集團利用語音釣魚和 SSO 濫用發動 SaaS 勒索攻擊**

網路犯罪集團發動了一波**SaaS 勒索攻擊**，結合了**語音釣魚**與單一登入（SSO）濫用。攻擊者偽裝成 IT 支援人員打電話給員工，誘騙他們批准 MFA 提示，然後利用被入侵的 SSO 工作階段竊取資料並要求贖金。攻擊目標是使用 Okta、Azure AD 和其他身分提供者的組織。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/cybercrime-groups-using-vishing-and-sso.html)

📌 **中國關聯駭客鎖定亞洲政府機關、北約國家、記者和活動人士**

與中國政府有關聯的威脅行為者正在進行廣泛的間諜活動，目標鎖定**亞洲政府機關**、**北約成員國**、記者和活動人士。攻擊者利用 Exchange 和 IIS 伺服器的漏洞進行初始存取，然後部署自訂後門進行持續的情報收集。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/china-linked-hackers-target-asian.html)

📌 **Trellix 確認原始碼遭未經授權存取**

網路安全公司 **Trellix** 確認了一起資料外洩事件，未經授權的行為者存取其內部原始碼倉庫。該事件正在調查中，該公司表示沒有客戶資料受到影響。此事件延續了攻擊者針對安全廠商智慧財產權的模式。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/trellix-confirms-source-code-breach.html)

📌 **Ubuntu 與 Canonical 網站遭 DDoS 攻擊**

**Ubuntu** 和 **Canonical** 的官方網站遭分散式阻斷服務（DDoS）攻擊而停擺，時間點緊接在「Copy Fail」Linux 核心漏洞揭露之後。雖然尚未確定直接關聯，但這個時間點引發了對開源基礎設施報復性攻擊的擔憂。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE5BY05QakZFczh0bmgxWWpndkNu...)

📌 **三萬個 Facebook 帳號透過 Google AppSheet 釣魚活動遭駭**

一場利用 **Google AppSheet** 的精密釣魚活動入侵了約 **30,000 個 Facebook 企業帳號**。攻擊者濫用 AppSheet 的合法基礎設施建立令人信服的釣魚頁面，避開了安全過濾器，展示了利用可信平台的釣魚即服務趨勢。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/30000-facebook-accounts-hacked-via.html)

### OPSWAT 能做什麼

「Copy Fail」核心漏洞和供應鏈攻擊激增凸顯了超越傳統修補管理的深度防禦需求。OPSWAT 的 **MetaDefender 平台** 可協助組織透過多引擎檔案掃描偵測和封鎖攻擊嘗試、使用 **CDR** 中和武器化文件，以及透過**主動 DLP** 防止憑證竊取和資料外洩，對於本週報導的 SSO/語音釣魚和原始碼竊取場景尤其相關。
