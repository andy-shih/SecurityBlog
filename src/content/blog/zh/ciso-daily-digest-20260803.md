---
title: "CISO 每日摘要：俄羅斯駭客透過旅館 Wi-Fi 竊取企業旅客 Microsoft 365 憑證 (20260803)"
description: "Microsoft 證實旅館 Wi-Fi 攻擊源自俄羅斯國家級駭客 Storm-2945（隸屬 Midnight Blizzard），透過竄改 DNS 與濫用 Device Code 登入流程鎖定企業旅客的 Microsoft 365 帳號；中國駭客結合 DeepSeek 與 Hermes AI 代理發動自主攻擊，鎖定 Langflow CVE-2026-33017 與 n8n CVE-2026-21858；AUR 與 AsyncAPI npm 供應鏈攻擊、N-able N-central 遭接管，以及 Brinks Home、安進、PNLD、Revolut 等資料外洩事件同日爆發。"
pubDate: 2026-08-03
tags: [CISO 每日摘要, Midnight Blizzard, Storm-2945, Microsoft 365, 旅館 Wi-Fi, Device Code 釣魚, AI 自主攻擊, DeepSeek, Hermes, Langflow, n8n, 供應鏈攻擊, AUR, Arch Linux, AsyncAPI, NPM, N-able, Hugging Face, ShinyHunters, GHOSTBLADE]
author: "Security Solutions Team"
featured: true
---

## 俄羅斯駭客透過旅館 Wi-Fi 竊取企業旅客 Microsoft 365 憑證

Microsoft 正式將一波旅館 Wi-Fi 攻擊歸因於**俄羅斯國家級駭客 Storm-2945**（與 **Midnight Blizzard** 相關），此前資安廠商 ReliaQuest 已揭露美國、印度、沙烏地等地旅館的 DNS 竄改攻擊，鎖定企業旅客的 **Microsoft 365 帳號**。攻擊的切入點是 Wi-Fi 基礎架構本身。

自 **2026 年 5 月**起，Storm-2945 持續操縱旅館及其他公共 Wi-Fi 設備的 DNS 組態與 HTTP 流量，將使用者導向攻擊者控制的基礎架構，藉由假冒更新頁面誘導使用者下載並執行惡意程式。自 **2026 年 7 月**起，該組織進一步濫用 **Microsoft 裝置驗證碼（Device Code）登入流程**：受害者在看似正常的登入頁面被誘導輸入攻擊者提供的驗證碼，攻擊者因而取得 OAuth 權杖，實質控制受害者的 Microsoft 365 帳號。

### 這對差旅安全的深遠影響

- **公共 Wi-Fi 已成為國家級駭客的戰場。** 攻擊不是直接釣魚使用者，而是先入侵網路設備本身——即使使用者仔細確認登入頁面，仍可能被導向錯誤目的地。
- **Device Code 釣魚繞過 MFA 的防線。** 使用者是在真正的 Microsoft 頁面上輸入驗證碼，OAuth 權杖竊取與正常登入幾乎無法區分——這是傳統資安意識訓練無法防禦的新模式。
- **身分已成為行動辦公的新邊界。** 商務差旅頻繁的組織應將旅館與場館網路視為敵意基礎架構，並對 M365 登入強制要求硬體金鑰或條件式存取。

---

## 本週活躍威脅

📌 **中國駱客結合 DeepSeek 與 Hermes 發動 AI 自主攻擊** — Palo Alto Networks 揭露代號 **knaithe** 與 **KnYuan** 的中國駭客透過 Telegram 指揮 DeepSeek 大型語言模型與 Hermes AI 代理，利用物聯網搜尋引擎 FOFA 尋找存在弱點的伺服器，在無人介入下自主發動攻擊。研究人員還原 5 月 7 日的一次 session：DeepSeek 從 GitHub 下載 **Langflow CVE-2026-33017（CVSS 9.8）** 的 PoC，掃描 84 臺 Langflow 執行個體，再轉向 **n8n** 的 **CVE-2026-21858** 與 **CVE-2025-68613**——接續先前 Hunt.io 與 Bob Diachenko 發現的 Hermes 入侵泰國財政部事件。
🔗 **參考資料：** [iThome — 中國駭客利用DeepSeek與Hermes從事AI自主攻擊](https://www.ithome.com.tw/news/177825) | [iThome — 鎖定7種應用系統](https://www.ithome.com.tw/news/177832)

📌 **AUR 套件庫遭供應鏈攻擊，Arch Linux 暫停套件採用** — 大量 AUR 套件遭惡意接手並出現可疑程式碼提交，官方暫時停用套件採用功能；首個確認被植入惡意程式的套件是 **openconnect-sso**（7 月 29 日出現異常）。資安研究社群 IFIN 認為此波攻擊行為（含透過 Tor 外傳資料）與 6 月的 AUR 供應鏈攻擊相似。
🔗 **參考資料：** [Xakep.ru — Arch Linux 暫時禁止 AUR 套件傳遞](https://xakep.ru/2026/08/03/aur-attacks/)

📌 **AsyncAPI 遭 NPM 供應鏈攻擊，錯誤配置的 GitHub Actions 成為破口** — 攻擊者於 7 月 14 日對 **asyncapi/generator** 儲存庫發出 37 次 Pull Request，利用 GitHub Actions 工作流程配置不當竊取高權限 PAT 與 NPM 發布權杖，在 4 款 AsyncAPI 套件注入混淆下載器並發布 5 個惡意版本；開發人員一經匯入，電腦即透過 IPFS 取得 Node.js 載入工具並以獨立程序執行（Aikido Security、Cloudsmith、Wiz 揭露）。
🔗 **參考資料：** [iThome — AsyncAPI 供應鏈攻擊](https://www.ithome.com.tw/news/177817)

📌 **N-able：攻擊者在初次修補後仍接管 N-central 伺服器** — 威脅行為者在 N-able 發布首波修補後仍成功入侵 N-central 管理伺服器，迫使官方發布第二輪處置指引。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/n-able-says-attackers-take-over-n.html)

📌 **Hugging Face Diffusers 漏洞恐讓模型儲存庫執行任意程式碼** — Diffusers 函式庫的漏洞使惡意模型儲存庫可在載入階段達成程式碼執行。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/hugging-face-diffusers-flaws-could-let.html)

📌 **中國威脅行為者利用外洩 DarkSword 工具包在 iOS 部署 GHOSTBLADE** — 新一波 iOS 攻擊濫用外洩的 DarkSword 工具集，GHOSTBLADE 類型植入程式鎖定行動裝置。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/chinese-threat-actor-uses-leaked.html)

📌 **資料外洩潮：Brinks Home、安進、PNLD、Revolut** — 美國家庭保全業者 **Brinks Home** 證實遭駭，**ShinyHunters** 宣稱竊得近 500 萬筆 Salesforce 紀錄；大型製藥廠 **安進（Amgen）** 發生雲端資料外洩，病人健康資訊與公司專利資料恐遭曝露；**PNLD** 資料仲介外洩讓英國警方與政府聯絡資料出現在暗網；英國數位銀行 **Revolut** 疑有約 7,500 萬筆客戶資料被兜售。
🔗 **參考資料：** [iThome — Brinks Home](https://www.ithome.com.tw/news/177828) | [iThome — 安進](https://www.ithome.com.tw/news/177827) | [THN — PNLD](https://thehackernews.com/2026/08/pnld-breach-exposes-uk-police-and.html) | [iThome — Revolut](https://www.ithome.com.tw/news/177836)

📌 **Thermo Fisher 修補 DNA 檔案竄改漏洞** — 修補程式解決一個讓 DNA 檔案竄改幾乎無法偵測的漏洞，對基因體學與生物安全影響重大。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/thermo-fisher-patches-flaw-that-could.html)

📌 **Chrome 最近三個版本修補 1,442 個漏洞** — 近期 Chrome 穩定版釋出大批安全更新。
🔗 **參考資料：** [Xakep.ru](https://xakep.ru/2026/08/03/chrome-bugs-2/)

---

## OPSWAT可以怎麼幫上忙

本週兩起重大供應鏈事件——**AUR** 與 **AsyncAPI npm** 攻擊——都是把惡意套件直接送進開發者與建置環境。**MetaDefender** 的多引擎掃描（30+ 防毒引擎）搭配 **CDR（Content Disarm & Reconstruction）**，可在套件進入系統時攔截承載、中和武器化檔案，Deep CDR 的檔案深度檢驗則能阻止 IPFS 拉取的載入工具與偽裝檔案在 CI 流程中執行。
