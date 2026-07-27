---
title: "CISO 每日摘要：Claude 對話遭 Google 搜尋索引，AI 隱私外洩危機 (20260727)"
description: "Google 將數千個 Anthropic Claude 共享對話連結編入搜尋索引，暴露法律文件、原始碼、醫療討論與加密貨幣種子詞。中國駭客利用 AI 代理 Hermes 攻擊泰國財政部，西門子 Opcenter X 存在 CVSS 滿分驗證繞過漏洞、AD CS Certighost 可冒充網域控制站、Chaos 勒索軟體開發 msaRAT、Clop 利用 Windchill/FlexPLM 零時差漏洞。"
pubDate: 2026-07-27
tags: [Anthropic, Claude, AI 隱私, 資料外洩, Google 搜尋, AI 安全, CISO, 威脅情報, 漏洞, 勒索軟體, 供應鏈安全]
author: "Security Solutions Team"
featured: true
---

## Claude 共享對話遭 Google 索引，AI 平台隱私機制面臨考驗

**Anthropic Claude** 的共享對話功能產生的公開 URL 被 **Google 搜尋**大規模編入索引，導致數千筆敏感對話內容曝光，包含法律策略、工程排錯、專利原始碼、醫療討論、加密貨幣錢包種子詞與企業內部文件。此事件最初在 Reddit 上被揭露，隨後獲得多家媒體證實，關鍵漏洞在於 Claude 的共享頁面缺乏有效的 **noindex** 控制機制。

根據 **gbhackers** 的報導，目前 Google 搜尋結果中的受影響 Claude 頁面已大規模消失，推測 Anthropic 已做出後端調整或要求 Google 移除索引。然而，僅移除搜尋結果並不足以確保資料安全 —— 快取頁面、封存紀錄及已分享的連結仍可能持續存取。

**Neowin** 的報導指出，外洩的對話涵蓋範圍廣泛，從加密貨幣錢包種子詞到企業法律文件與醫療紀錄。這與先前 ChatGPT 共享對話遭搜尋引擎索引的事件類似，凸顯 AI 協作功能的隱私設計缺陷。

### 這對 AI 資料治理的深遠影響

此事件暴露了一個根本性的安全假設錯誤：**協作功能可能在設計不當下成為資料外洩管道**。Claude 的共享功能雖然設計為僅供限定對象存取，但缺乏認證機制、連結有效期及搜尋引擎防護，導致任何取得連結的使用者（包括搜尋引擎爬蟲）都能存取內容。企業應立即審查現有的 Claude 共享對話，撤銷不必要的連結，並將所有 AI 平台的共享功能視為**潛在公開內容**。

---

## 本週活躍威脅

📌 **中國駭客利用 AI 代理 Hermes 攻擊泰國財政部**
駭客組織部署 AI 代理 **Hermes** 對泰國財政部發動完全自主化的攻擊，從偵察、入侵到部署 Go 語言惡意程式均由 AI 代理自主執行。這是已知首起 AI 代理完全自主入侵政府財務系統的案例。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177629) | [xakep.ru](https://xakep.ru/2026/07/27/hermes-ai/)

📌 **西門子 Opcenter X CVSS 滿分驗證繞過漏洞（CVE-2026-56451）**
西門子 Opcenter X 製造管理平台發現**驗證繞過漏洞**，**CVSS 評分 10.0**。未經身分驗證的攻擊者可偽造權杖冒充管理者，取得系統完整存取權限，需立即修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177667)

📌 **微軟 AD CS Certighost 漏洞（CVE-2026-54121）**
Active Directory 憑證服務被揭露存在權限提升漏洞 **Certighost**，低權限網域帳號在特定配置下可取得帶有網域控制站身分的憑證，進而複寫目錄資料並竊取帳號機密。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177645)

📌 **Clop 勒索軟體利用 Windchill/FlexPLM 零時差漏洞（CVE-2026-12569）**
**Clop** 勒索軟體組織正在積極利用 **CVE-2026-12569** 針對 **Windchill** 與 **FlexPLM** 用戶發動攻擊，號稱已竊取大量資料。資安公司 eCrime.ch、Defused Cyber 及 ReliaQuest 正在追蹤此活動。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177639)

📌 **Chaos 勒索軟體開發 msaRAT，C2 隱藏於瀏覽器處理程序**
勒索軟體團體 Chaos 開發了名為 **msaRAT** 的新型木馬，其 C2 通訊流量隱藏在**瀏覽器處理程序**中（Living off the Browser 技術），由 Cisco Talos 發現。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177647)

📌 **FreePBX 重大漏洞 — 遠端指令執行與管理員帳號接管**
開源 IP 電話交換機管理平台 FreePBX 修補兩項重大漏洞，未經身分驗證的遠端攻擊者可執行任意系統指令或接管管理員帳號。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177635)

📌 **ChatGPT 企業代理漏洞（AgentForger）**
ChatGPT 企業代理建構器存在 **AgentForger** 漏洞，攻擊者可透過特製網址自動執行惡意代理指令，達到持續存取外部服務的效果。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177665)

📌 **中國 APT 組織 JadeProx 以 TriBack Loader 攻擊政府與醫療機構**
中國 APT 組織 **JadeProx** 使用 **TriBack Loader** 惡意程式攻擊台灣政府與醫療機構。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177632)

📌 **TELESHIM 利用 Telegram API 作為 C2 通道攻擊中東政府**
Zscaler ThreatLabz 發現東亞關聯駭客組織部署 **TELESHIM**、**MIXEDKEY** 與 **BINDCLOAK** 惡意程式，濫用 **Telegram API** 進行 C2 通訊以躲避偵測。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/teleshim-abuses-telegram-for-c2-in.html)

📌 **Operation BlueDash — 假 Teams 更新部署 RMM 工具**
名為 **Operation BlueDash** 的惡意活動利用偽造的 Microsoft Teams 更新提示，部署 **Level RMM** 及 **ScreenConnect** 遠端管理工具，取得企業端點持續存取權限。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/operation-bluedash-deploys-level-rmm.html)

📌 **Cruciferra Crypter — BYOVD 與 Process Ghosting 規避防禦**
新型 Crypter 工具 **Cruciferra** 利用 **BYOVD（自帶驅動漏洞）** 與 **Process Ghosting** 技術隱藏 Windows 惡意程式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/cruciferra-crypter-uses-byovd-and.html)

📌 **n8n 沙箱逃逸漏洞 — 工作流程編輯器可執行系統指令**
n8n 自動化平台修補了一個表示式沙箱逃逸漏洞（CVE-2026-27577 繞過），通過驗證的工作流程編輯器可在伺服器上執行 OS 指令。CVSS 4.0 評分 8.7。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/n8n-sandbox-escape-lets-workflow.html)

📌 **OnTrac 快遞資料外洩 — 客戶個資暴露**
美國快遞業者 **OnTrac** 通報資料外洩事件，攻擊者在 3 月 20 日至 22 日期間存取了客戶檔案，已通知受影響客戶。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177651)

📌 **假冒 Notepad++ 外掛散布惡意程式 — 俄羅斯 APT UAC-0099**
俄羅斯威脅組織 **UAC-0099** 利用假冒的 Notepad++ 外掛散布惡意程式，攻擊烏克蘭國防單位。烏克蘭 CERT-UA 已發布警告。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177644)

📌 **GitHub 新增 Dependabot 3 天冷卻期防堵套件投毒**
GitHub 為 Dependabot 版本更新實施 **3 天冷卻期**，降低帳號遭入侵後被植入惡意套件的風險。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/github-adds-3-day-dependabot-cooldown.html)

📌 **PyPI 實施 14 天上傳期限防堵舊版惡意植入**
PyPI 設定 **14 天上傳期限**，降低攻擊者在憑證失竊後向舊版套件植入惡意檔案的風險。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177656)

📌 **CSA 發布非人類身分（NHI）治理報告**
雲端安全聯盟 CSA 發布 **非人類身分治理報告**，協助企業識別與管理機器身分、AI 代理及服務帳號，對 AI 代理時代的身分安全至關重要。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177637)

📌 **Google Chrome 150 緊急更新修補 4 個高風險漏洞**
Google 緊急釋出 **Chrome 150** 版更新，修補 4 個高風險漏洞，建議使用者立即更新。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177624)

📌 **美國政府警告伊朗駭客升級關鍵基礎設施攻擊**
美國政府發布警告，伊朗威脅行為者已升級對關鍵基礎設施的攻擊，已造成部分機構營運中斷與財務損失。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177622)

---

## OPSWAT 可以怎麼幫上忙

今日多項威脅涉及**檔案型攻擊向量**，OPSWAT 的 **MetaDefender 平台**可提供有效防禦。JadeProx 的 TriBack Loader、假冒 Notepad++ 外掛及 Clop 勒索軟體均透過惡意檔案傳遞 payload。MetaDefender 的 **30+ 防毒引擎同步掃描**與 **內容淨化與重構（CDR）** 可在檔案到達端點前移除活性內容。msaRAT 利用瀏覽器處理程序隱藏 C2 流量的手法，凸顯了**網路層檔案檢測**的重要性。在供應鏈安全方面，OPSWAT 的檔案完整性監控可與 GitHub 的 Dependabot 冷卻期及 PyPI 的上傳期限政策相輔相成。
