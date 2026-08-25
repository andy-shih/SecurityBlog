---
title: "CISO 每日摘要：CISA 將 Oracle WebLogic CVE-2026-21962（CVSS 10.0）列為遭積極利用漏洞 (20260825)"
description: "美國 CISA 於 2026-08-24 將 Oracle HTTP Server 與 WebLogic Server Proxy Plug-in 的存取控制缺陷 CVE-2026-21962（CVSS 10.0）列入 KEV 已知遭利用漏洞目錄，未經身分驗證的攻擊者可竄改關鍵資料；另含 24 個 npm 套件濫用 unpkg 鏡像散布假 CAPTCHA 釣魚、Mirage2FA 濫用 Microsoft 365 攻擊 4,500 家企業、Forminator WordPress RCE 影響 30 萬網站，以及 ToxicPanda 2.0 鎖定 349 款金融 App。"
pubDate: 2026-08-25
tags: [CVE-2026-21962, Oracle, WebLogic, KEV, 供應鏈, 勒索軟體, APT, 漏洞]
author: "Security Solutions Team"
featured: true
---

## 發生了什麼事

美國 **CISA** 於本週一將 **CVE-2026-21962**（CVSS 評分 **10.0**）列入其 **已知遭利用漏洞（KEV）** 目錄，理由是已確認有 **積極利用** 情事。這是 **Oracle HTTP Server** 與 **Oracle WebLogic Server Proxy Plug-in** 的 **存取控制不當** 缺陷；未經身分驗證、僅具有 HTTP 網路存取權的攻擊者，即可對受影響執行個體進行 **建立、刪除或修改關鍵資料**，或取得未授權存取。Oracle 已在 2026 年 7 月 Critical Patch Update 釋出修補；CISA 將其列入 KEV（dateAdded 2026-08-24）代表聯邦機關須於期限前完成修補，而將 WebLogic 置於網際網路前端代理後方的企業，應將此視為 **緊急** 事項。

### 這對 Oracle 中介軟體風險治理的深遠影響

該缺陷位於 **Proxy Plug-in** —— 也就是以 Oracle HTTP Server 為 WebLogic 擋在前面的元件 —— 因此即使應用伺服器未直接對外暴露，攻擊仍可觸及。CVSS 10.0 搭配 **未經身分驗證、網路可達的資料竄改**，對任何對外發佈 WebLogic 服務的組織而言，實質上就是一套 **完全入侵原語**。在修補釋出數週內即被列入 KEV，顯示攻擊者已在實戰中武器化此漏洞，使對外暴露部署的修補窗口 **幾近於零**。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/actively-exploited-oracle-weblogic-flaw.html)、[iThome](https://www.ithome.com.tw/news/178422)）

---

## 本週活躍威脅

📌 **miniOrange SAML 漏洞可取得 WordPress 管理員權限** —— 攻擊者正積極鎖定熱門 **miniOrange SAML 單一登入** 外掛的身分繞過缺陷；成功利用可將攻擊者 **提升為 WordPress 管理員**。使用 SAML 基礎 SSO 的網站應立即確認修補層級。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/attackers-target-miniorange-saml-flaws.html)

📌 **Mirage2FA 攻擊狂潮波及 4,500 家歐美企業** —— **Mirage2FA** 釣魚工具包濫用 **Microsoft 365** 登入流程繞過 MFA，估計影響美國與歐盟約 **4,500 家組織**。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/mirage2fa-surge-hits-4500-us-and-eu.html)

📌 **24 個 npm 套件濫用 unpkg 鏡像散布假 Cloudflare CAPTCHA** —— 一場供應鏈攻擊釋出 **24 個惡意 npm 套件**，從 **unpkg** 鏡像拉取載荷並顯示仿冒的 **Cloudflare CAPTCHA** 頁面以竊取憑證。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/24-npm-packages-abuse-unpkg-mirrors-to.html)

📌 **E4del 與 PINHOLE RAT 將 FTP 橫幅當作死信通道** —— 兩款新型遠端存取木馬 **E4del** 與 **PINHOLE**，將命令與控制指令編碼於 **FTP 伺服器橫幅** 中，把良性的協定欄位變成隱蔽的死信（dead-drop）通道。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/e4del-and-pinhole-rats-turn-ftp-banners.html)

📌 **WhatsApp 新增多組 Passkey 以抗釣魚的登入方式** —— **WhatsApp**（iOS/Android）現支援 **多組 passkey**，提供裝置綁定的抗釣魚驗證，作為 SIM 交換與 OTP 竊取的對策。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/whatsapp-adds-multiple-passkeys-for.html)

📌 **Marimo Notebook 缺陷可在儲存格執行前運行 MCP 指令** —— **Marimo** Python 筆記本的一項漏洞，會在編輯模式下、儲存格執行前觸發 **MCP** 工具指令，使開啟筆記本即可能導致非預期程式碼執行。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/marimo-notebook-flaw-could-run-mcp.html)

📌 **SilkParasite 鎖定中亞政府散布 5 款新型 RAT** —— 一起歸因於 **SilkParasite** 的網路間諜活動，正針對中亞政府機關散布 **五款前所未見的遠端存取木馬**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178431)

📌 **RedC2 4.0 透過惡意 npm 套件在 Linux 開發者機器植入後門** —— **RedC2 4.0** 框架鎖定 **Linux** 開發者，透過被植入木馬的 **npm** 套件投遞後門。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178428)

📌 **Microsoft Defender 內建 BTR.sys 驅動程式遭濫用繞過 EDR** —— **Microsoft Defender** 的內建元件驅動程式 **BTR.sys** 可被攻擊者濫用，以 **繞過 EDR** 防護並竄改檔案與登錄檔。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178427)

📌 **ToxicPanda 2.0 Android 銀行木馬鎖定 349 款金融 App** —— **ToxicPanda** 銀行木馬已成熟為企業級威脅，現攻擊 Android 上的 **349 款金融應用程式**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178394)

📌 **RAVEN 開源紅隊框架串接 Elasticsearch/Kibana 建立持久化** —— **RAVEN** 框架將 **Elasticsearch** 與 **Kibana** 整合進攻擊鏈，可竊取資料並建立 **持久化存取**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178392)

📌 **GEEKOM 舊版驅動套件遭判定含 Asruex 木馬（6 款 AMD 機種）** —— **GEEKOM** 迷你電腦的舊版驅動套件被發現含有 **Asruex** 木馬，影響 **六款 AMD 機型**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178386)

📌 **MongoDB 修補 32 個漏洞，含 BI Connector ODBC Driver 的 RCE** —— **MongoDB** 修補了 **32 個漏洞**，其中包括 **BI Connector ODBC Driver** 的重大 **遠端程式碼執行** 缺陷。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178407)

📌 **Elementor Pro 遠端程式碼執行影響逾 1,000 萬個 WordPress 網站** —— **Elementor Pro** WordPress 外掛的 **遠端程式碼執行** 漏洞影響超過 **1,000 萬** 個安裝。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178405)

📌 **波蘭 CERT 揭露能源設施 OT 入侵細節：首見利用 Private APN 橫向移動** —— **波蘭 CERT** 披露 2025 年底能源設施遭攻擊的新細節，為首起觀察到攻擊者利用 **Private APN** 進行 **OT** 網路橫向移動的手法。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178393)

📌 **阿拉巴馬州向 OpenAI 發傳票，正式調查 Hugging Face 入侵事件** —— 美國 **阿拉巴馬州** 對 **OpenAI** 發出傳票，作為其對 **Hugging Face** 入侵事件的正式調查一環。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178425)

📌 **貿聯部分資訊系統遭網路攻擊，已啟動資安應變與隔離** —— 台灣廠商 **貿聯（BizLink）** 證實部分資訊系統遭 **網路攻擊**，已啟動資安事件應變與隔離措施。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178357)

📌 **Anthropic 釋出 Mythos 5 資安能力，企業版可直接掃碼修漏洞** —— **Anthropic** 發布 **Mythos 5** 資安功能，讓企業客戶能直接掃描並修補漏洞。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178369)

📌 **OWASP 2026 LLM 十大風險首納事故資料，AI 代理過度授權升至第 3 名** —— **OWASP 2026 LLM Top 10** 首次納入實際事故資料，其中 **AI 代理過度授權（over-delegation）** 攀升至第三名。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178423)

📌 **Microsoft Teams 強化外部會議機器人管控，管理員可直接封鎖 AI 助理** —— **Microsoft Teams** 現允許管理員直接封鎖外部 **AI 會議助理 / 機器人**，因應未受控的資料外洩風險。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178430)

📌 **加密指令可欺騙 Grok、Gemini 等 AI 助理** —— 研究人員展示，嵌入內容中的 **加密／隱寫指令** 可繞過 **Grok** 與 **Gemini** 的安全防護機制。

🔗 **參考資料：** [Malwarebytes](https://www.malwarebytes.com/blog/ai/2026/08/encrypted-instructions-can-fool-ai-assistants-like-grok-and-gemini)

📌 **Forminator WordPress 外掛 RCE 威脅 30 萬個網站** —— **Forminator** WordPress 外掛的 **遠端程式碼執行** 缺陷影響約 **30 萬** 個網站（據 xakep.ru 報導）。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/25/forminator-rce/)

📌 **ShinyHunters 攻擊資安廠商 ReliaQuest** —— **ShinyHunters** 勒索團體攻擊了資安供應商 **ReliaQuest**，是針對防禦方的一起顯著事件。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/25/reliaquest-attack/)

📌 **AliExpress 遭控以無聲 WebAudio 指紋追蹤用戶** —— **AliExpress** 遭控利用聽覺不可聞的 **WebAudio** 訊號進行瀏覽器指紋追蹤（據 xakep.ru）。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/25/webaudio-fingerprinting/)

---

## OPSWAT 可以怎麼幫上忙

今日多起威脅屬於 **檔案型或套件型**：被植入木馬的 **npm 套件**（RedC2 4.0、24 套件攻擊）、惡意 **WordPress 外掛**（Elementor Pro、miniOrange SAML、Forminator），以及含有 Asruex 木馬的 **驅動程式套件**（GEEKOM）。**OPSWAT MetaDefender** 可在檔案層級防禦這些威脅：

- **多重掃描（Multi-Scanning）** —— 30 多套防惡意程式引擎在套件、外掛與驅動程式進入生產環境或開發者工作站前先行掃描，攔截單一引擎 AV 會漏掉的木馬化 npm／WordPress 成品。
- **深層 CDR（Content Disarm & Reconstruction）** —— 淨化文件、壓縮檔與安裝程式，移除主動式內容與內嵌巨集但保留可用性，中和經由供應鏈管道投遞的載荷。
- **漏洞偵測** —— 識別檔案內已知的易受攻擊元件（例如 Elementor Pro／Forminator 的 RCE 類別）。

對於會拉取不受信任套件的 AI 代理管線（RedC2 與 npm 套件攻擊模式），在每一個進入建置與執行環境的成品上都強制執行 MetaDefender 檢查，即可封住攻擊者當前最主要的利用路徑。
