---
title: "CISO 每日摘要：微軟揭露 GigaWiper 破壞型後門與大規模 WordPress 入侵事件 (20260713)"
description: "微軟揭露 GigaWiper 三合一破壞型後門，結合磁碟抹除、檔案加密與遠端控制功能；WP-ShellStorm 入侵逾 140 萬個 WordPress 網站；前 BlackCat 勒索軟體談判人員遭判 70 個月徒刑；Forg365 釣魚平臺鎖定 Microsoft 365 發動裝置驗證碼竊取攻擊。"
pubDate: 2026-07-13
tags: [ciso-daily-digest, 威脅情資, 微軟, GigaWiper, WordPress, 勒索軟體, 網釣, 漏洞]
author: "Security Solutions Team"
featured: true
---

## GigaWiper 破壞型後門與大規模入侵事件

### 這對資安治理的深遠影響

**2026 年 7 月 13 日 —** 今日迎來本月最密集的安全事件揭露日，以微軟揭露新型破壞型後門及大規模 WordPress 供應鏈攻擊為首。

**GigaWiper 破壞型後門：** [微軟威脅情報團隊](https://www.ithome.com.tw/news/177249)揭露針對 Windows 平臺的 GigaWiper 後門程式，以 Go 語言開發，整合三個原本各自獨立的惡意程式家族：
- **實體磁碟覆寫**，可摧毀非 Windows 安裝磁碟的分割區
- **勒索軟體式檔案加密**（採用 Crucio 勒索軟體程式碼，附加 `.candy` 副檔名）—但因未保留金鑰，加密後無法解密
- **磁碟抹除功能**，以 Go 語言重新實作 FlockWiper，可多次覆寫系統磁碟

除破壞功能外，GigaWiper 具備完整的遠端控制、系統資訊蒐集與資料外傳能力。微軟已公布相關 C2 伺服器 IP 與 SHA-256 雜湊值供防禦部署。

**WP-ShellStorm WordPress 大規模感染：** 超過 **140 萬個 WordPress 網站**遭 WP-ShellStorm 後門入侵，攻擊者積極兜售受感染網站的存取權限。基礎設施存取紀錄顯示臺灣 IP 位址存取次數居冠，引發對命令基礎設施託管地點的關注。

**前勒索軟體談判人員判刑：** 一名曾與 BlackCat（ALPHV）勒索軟體集團勾結的前談判人員，被判處 **70 個月有期徒刑**。此案標誌著司法機關開始追究勒索軟體生態系統中協助者的刑事責任，而非僅針對直接攻擊者。

**Forg365 釣魚平臺鎖定 Microsoft 365：** 名為 [Forg365](https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html) 的新型釣魚即服務（PhaaS）平臺，結合 AI 生成誘餌內容與裝置驗證碼（Device Code）竊取及中間人（AitM）劫持技術，專門針對 Microsoft 365 憑證與工作階段令牌發動攻擊。

---

## 本週活躍威脅

📌 **GigaWiper 破壞型後門（微軟揭露）**
以 Go 語言開發的後門程式，整合磁碟抹除、Crucio 勒索軟體加密（無法解密）及遠端控制功能。自 2025 年 10 月起已被觀測到活動。微軟建議啟用防竄改與雲端防護功能，EDR 以封鎖模式運作。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177249)

📌 **WP-ShellStorm — 140 萬個 WordPress 網站遭入侵**
駭客在超過 140 萬個 WordPress 網站部署後門程式，並兜售遭入侵網站的存取權限。基礎設施分析顯示臺灣 IP 位址存取次數異常偏高。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177261)

📌 **前 BlackCat 勒索軟體談判人員判刑 70 個月**
曾協助 BlackCat/ALPHV 集團談判贖金的中間人被判 70 個月聯邦監禁，顯示司法機關正擴大追訴勒索軟體生態鏈。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177251)

📌 **Forg365 PhaaS — 鎖定 Microsoft 365 的裝置驗證碼與 AitM 攻擊**
此釣魚平臺利用 AI 生成誘餌，竊取裝置驗證碼令牌並執行中間人（AitM）工作階段劫持，專門攻擊 Microsoft 365 帳號。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html) | [iThome](https://www.ithome.com.tw/news/177269)

📌 **Zimbra 重大 RCE 漏洞（特製郵件觸發）**
Zimbra 郵件伺服器存在嚴重漏洞，攻擊者可發送特製郵件，在收件者的 Webmail 介面遠端執行任意程式碼，無需使用者互動。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177242)

📌 **語音網釣鎖定 Microsoft 365 通行金鑰註冊**
攻擊者透過語音釣魚（vishing）誘騙 Microsoft 365 使用者註冊攻擊者控制的通行金鑰（passkey），繞過 MFA 取得持續性帳號存取權。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177252)

📌 **Palo Alto Networks 修補 13 項漏洞 — 防火牆 OS 緩衝區溢位**
PAN 修補 13 項漏洞，包含防火牆作業系統的高風險緩衝區溢位問題，影響 PAN-OS、Cortex XSOAR 及 Prisma Access 等產品。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177263)

📌 **CISA 將兩款 Joomla 延伸套件列入 KEV（已知遭利用漏洞目錄）**
CISA 將 iCagenda 與 Balbooa Forms 的 Joomla 漏洞列入 KEV，要求聯邦機構於 7 月 13 日前完成修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/icagenda-and-balbooa-forms-joomla-flaws.html) | [iThome](https://www.ithome.com.tw/news/177238)

📌 **Helix 勒索軟體集團鎖定 SharePoint 竊取資料**
Helix 勒索軟體集團針對 SharePoint 部署發動攻擊，竊取敏感資料並要求贖金以換取不公開洩漏。建議企業審查 SharePoint 外部共用設定。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177267)

📌 **Datadog 揭露 GitHub Ghost 帳號偵察行動**
Datadog 研究人員發現長期存在的偵察行動，利用幽靈 GitHub 帳號掃描企業儲存庫，尋找外洩的機密資訊與配置錯誤的 Actions 工作流程。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177262)

📌 **澳洲警告多種 CMS 平臺遭 Webshell 入侵**
澳洲網路安全中心（ACSC）警告多種內容管理平臺正遭駭客鎖定，試圖植入網頁後門（Webshell）以取得持續性存取權限。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177248)

📌 **Debian 13.6 安全性更新 — 修補逾百項元件**
Debian 13.6 修補超過 100 項軟體元件漏洞，同時因應 UEFI Secure Boot 憑證到期問題，避免使用者無法開機。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177250)

---

## OPSWAT 可以怎麼幫上忙

本週揭露的威脅多以檔案為攻擊載體：WP-ShellStorm 後門透過遭入侵的 WordPress 外掛散布、GigaWiper 透過惡意二進位檔傳遞、Forg365 釣魚郵件夾帶惡意附件。OPSWAT MetaDefender 的 **30+ 防毒引擎同步掃描（Multi-Scanning）** 與 **內容淨化與重構（CDR）** 可在電子郵件附件、網頁上傳及檔案傳輸環節即時偵測並中和零時差惡意軟體。針對供應鏈情境（如 CMS 外掛遭植入後門），MetaDefender 的深度 CDR 可移除文件中的動態內容，同時保留文件可用性。
