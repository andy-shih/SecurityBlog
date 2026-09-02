---
title: "CISO 每日摘要：CISA 將遭積極利用的 Gitea CVE-2026-60004（CVSS 9.8）列入 KEV (20260826)"
description: "美國 CISA 於 2026-08-25 將 Gitea 程式碼注入漏洞 CVE-2026-60004（CVSS 9.8）列入 KEV，掌握其遭積極利用的證據——攻擊者可埋設 Git 掛鉤執行 shell 指令並投放挖礦酬載；另含 Shadowserver 統計約 270 臺 Zimbra 伺服器因 CVE-2026-73570 遭入侵、逾 8,200 臺未修補，ACSC 警告 TeamCity CVE-2026-63077 在澳洲遭利用，美國財政部以 Operation Economic Outcast 制裁涉嫌 Mabna Institute 的駭客，以及 Chrome 152 修補 327 個漏洞。"
pubDate: 2026-08-26
tags: [CVE-2026-60004, Gitea, CISA, KEV, CVE-2026-73570, Zimbra, CVE-2026-63077, TeamCity, 供應鏈, 挖礦]
author: "Security Solutions Team"
featured: true
---

## 發生了什麼事

美國 **CISA** 於 8 月 25 日將 **CVE-2026-60004**——自架 Git 平台 **Gitea** 的重大程式碼注入漏洞——列入已知遭利用漏洞目錄（KEV），理由是掌握到 ** 實際遭到利用 ** 的證據，聯邦機構必須在 **8 月 28 日前 ** 完成修補。該漏洞影響 **Gitea 1.17 至 1.27.0 版 **，官方已在 7 月底發布的 **1.27.1 版 ** 中修補，同版更新也一併修補 **CVE-2026-59774**（CVSS 9.8 的檔案讀取轉 RCE 漏洞鏈，本刊 8 月 8 日摘要曾報導）。

攻擊機制把儲存庫寫入權限變成伺服器端程式碼執行：攻擊者只要對任一儲存庫擁有寫入權限，就能對 Gitea 的 **diffpatch 端點 ** 送出惡意修補內容，從儲存庫控制的內容安裝並執行 **Git 掛鉤（hook）**，以 **Gitea 作業系統使用者 ** 的身分執行任何 shell 指令。由於許多 Gitea 部署預設開放註冊，未經身分驗證的外部攻擊者只需註冊帳號並建立儲存庫，就能取得所需的寫入權限。

已觀察到的攻擊與挖礦劫持一致：資安媒體報導指出，攻擊者在遭入侵的自架 Gitea 執行個體上 ** 投放類似挖礦程式的酬載 **。對以 Gitea 作為內部原始碼信任中樞的組織而言，這是直接的供應鏈曝險——一旦執行個體淪陷，攻擊者即可竄改供應 CI/CD 管線的儲存庫內容。

### 這對自架開發平臺治理的深遠影響

Gitea 這項漏洞瓦解了防禦者通常仰賴的兩道界線：低權限儲存庫貢獻者與伺服器作業系統之間的界線，以及原始碼與可執行內容之間的界線——經由 diffpatch 流程埋設的 Git 掛鉤，就是會在伺服器主機上執行的程式碼。自架開發平臺是整個軟體供應鏈的信任錨點，一旦被接管，惡意提交、遭投毒的建置產物與 CI 憑證竊取都會落入同一次事件的影響範圍。KEV 列入也代表兩個月內第二個 Gitea 重大漏洞，而助長這項漏洞的開放註冊預設值在輕量級開發平臺相當常見，讓曝險評估變得更複雜。對 CISO 而言，自架開發平臺如今應與暴露於網際網路的邊界設備，位於同一個修補優先級別。

🔗 ** 參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/critical-gitea-rce-actively-exploited.html)、[iThome](https://www.ithome.com.tw/news/178438)）

---

## 本週活躍威脅

📌 **Zimbra CVE-2026-73570：Shadowserver 統計約 270 臺伺服器遭入侵，逾 8,200 臺仍未修補 ** — 更新報導：針對 Zimbra 選用套件 **zimbra-snmp** 中未經身分驗證即可觸發的命令注入漏洞（CVSS 8.9，8 月 21 日列入 KEV，本刊 8 月 21 日與 24 日摘要首報），**Shadowserver** 基金會與 CERT Polska 合作的掃描顯示，**8 月 22 日偵測到 274 臺遭入侵的 Zimbra 伺服器 **，至 24 日降至 **267 臺 **，其中以美國 41 臺最多，** 臺灣也有 2 臺 **。全球至少 **8,200 臺 Zimbra 尚未修補 **，以印尼 678 臺、美國 662 臺、法國 657 臺居前，臺灣約 43 臺。此漏洞存在於安裝 SNMP 通知元件的組態，攻擊者可發送特製 SMTP 請求觸發；Zimbra 已於 7 月更新中修補。

🔗 ** 參考資料：** [iThome](https://www.ithome.com.tw/news/178444)

📌 **TeamCity CVE-2026-63077 遭用於攻擊澳洲組織——ACSC 發布警告 ** — 更新報導：** 澳洲網路安全中心（ACSC）** 於 8 月 24 日發布公告，境內 JetBrains **TeamCity** 伺服器正遭 **CVE-2026-63077**（CVSS 9.8）積極利用。該漏洞讓未經身分驗證的攻擊者可經由 HTTP/HTTPS 存取伺服器、繞過身分驗證並執行任何作業系統指令（JetBrains 7 月底修補、8 月初列入 KEV，本刊 8 月 6 日摘要曾報導）。ACSC 呼籲企業清查未修補的 TeamCity 伺服器，若由第三方或 MSP 代管，也應確認代管業者完成修補並監控惡意活動。

🔗 ** 參考資料：** [iThome](https://www.ithome.com.tw/news/178443)

📌 **SLEEPWALKER 後門蟄伏於記憶體，等待一個特製封包甦醒 ** — 一名獨立惡意程式研究人員揭露了先前未公開的 Windows 後門：這支未簽署的 **64 位元 DLL（59,904 位元組）** 專為載入 **ERAAgent.exe**（ESET Management Agent 的 Windows 執行檔）而設計，會偽裝成微軟的 **dpapi.dll**、匯出相同的 7 個資料保護函式，平時完全靜默，直到機器收到單一封特製網路封包，隨後以自有的 **23 指令位元組碼語言 ** 執行指令。研究人員認為其設計符合 ** 針對性、資源充足 ** 的攻擊行動特徵。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/newly-sleepwalker-backdoor-waits-for.html)

📌 **NovaCookies 中間人釣魚工具：濫用 DocuSign 通知竊取 Microsoft 365 連線階段 ** — 企業瀏覽器廠商 **Island** 揭露 **NovaCookies**，一個 ** 每月 320 美元 ** 的訂閱制中間人（AitM）釣魚平台：它代理 **Microsoft 365** 登入流程，在使用者輸入密碼與 MFA 驗證碼後即時攔截已驗證的連線階段；攻擊者還能註冊 ** 攻擊者掌控的 passkey**，把竊得的階段轉為持久存取。攻擊活動濫用正版 **DocuSign** 通知郵件作為誘餌，已鎖定 ** 數百家組織 **，範圍涵蓋美國、英國、加拿大、德國、以色列與阿聯。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/novacookies-campaigns-abuse-genuine.html)

📌 **CISA 紅隊「兩個 SOC 的故事」：兩家關鍵基礎設施組織都被攻陷，一家完全沒發現 ** — CISA 於 8 月 25 日發布公告 **AA26-237A**：兩場以類似手法同步進行的紅隊演練，對象分別是 ** 政府服務與設施領域 ** 組織與 ** 水與廢水系統 ** 業者，兩者都在網域層級被完全攻陷，紅隊並觸及敏感業務系統與雲端資源。代號 A 的政府機關全程 ** 未偵測到任何活動 **：日常營運產生的大量高嚴重度假警報掩蓋了真實訊號、多個 SOC 與端點工具之間缺乏共享可視性，一封與紅隊活動相關的 SCCM 警報還被當成誤報。初始入侵來自網頁應用程式內建帳號的預設密碼，權限提升則濫用預設的 Machine Account Quota 與設定錯誤的 **AD CS 憑證範本（ESC1）**，接著是明文服務憑證與靜態雲端金鑰。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/cisa-red-team-compromised-two-critical.html)

📌 **Operation Economic Outcast 制裁與 MOIS 掛鉤、入侵美國關鍵基礎設施的駭客 ** — ** 美國財政部（OFAC）** 制裁近 **60 個與伊朗相關的實體、個人與船隻 **，橫跨核子、飛彈、石油與網路領域，主要鎖定與伊朗 ** 情報與安全部（MOIS）** 掛鉤、長期入侵美國關鍵基礎設施的惡意網路組織。遭制裁者包含 ** 上週遭美國司法部起訴 ** 的 5 名個人，據稱是德黑蘭 **Mabina Institute** 成員，其中 **Keyvan Fayyaz Ghareh Blagh、Saber Shahbazi Balujeh、Mohammad Reza Kadkhoda'i** 三人被指控自 2023 年底以來入侵能源、國防、醫療、IT 與金融業者，為大部分入侵活動的執行者；曾攻擊 HBO 的伊朗裔駭客 **Behzad Mesri** 也在制裁名單。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/us-sanctions-iran-linked-hackers-behind.html)

📌 **DDoS 攻擊癱瘓挪威 ID-porten 超過一天 ** — 自 8 月 24 日凌晨開始的分散式阻斷服務（DDoS）攻擊，鎖定挪威數位化管理局 **Digdir** 的 IT 供應商 **Vivicta** 基礎設施，導致 **ID-porten**——逾 **450 萬 ** 挪威民眾登入數千項政府服務的數位身分驗證入口——受到影響超過一天。Digdir 表示截至 8 月 25 日服務已大致穩定，但部分服務仍有異常，目前沒有入侵或個資外洩的跡象。這是 6 月以來第 3 起影響 Digdir 的 DDoS 攻擊，攻擊者身分不明。

🔗 ** 參考資料：** [iThome](https://www.ithome.com.tw/news/178437)

📌 **Chrome 152 穩定版修補 327 個漏洞，含 10 個重大、61 個高風險 ** — Google 發布 Chrome 穩定版更新（Windows/Linux 為 **152.0.7977.64**、Mac 為 **.65**），共修補 **327 個資安漏洞 **：10 個重大、61 個高風險。其中約 **80 個屬記憶體安全問題 **（含 50 個釋放後使用），另有 50 個授權錯誤、36 個輸入驗證不當與 34 個資訊洩漏；圖形相關元件占比最高（ANGLE 27 個、GPU 9 個、WebGL 3 個），其次為 Network 18 個與 CustomTabs 10 個。

🔗 ** 參考資料：** [iThome](https://www.ithome.com.tw/news/178448)

📌 **CERT/CC：Calix 家用路由器 UPnP 暴露於外部網路（CVE-2026-75501），尚無修補程式 ** — CERT/CC 公布美國寬頻設備商 Calix **GS7 XGS GS5239XG** 路由器（執行 EXOS **6.6.47** 韌體）的漏洞：UPnP 服務暴露在 ** 對外網路介面的 TCP 5000 連接埠 ** 且無需身分驗證，遠端攻擊者不需登入即可新增、刪除或查詢連接埠轉送規則，繞過 NAT 與防火牆，可能讓網路攝影機、NAS 等物聯網設備直接暴露於網際網路，且設定在重新啟動後仍會保留。截至 8 月 25 日尚無廠商修補程式；CERT/CC 表示揭露前未能聯繫 Calix 進行協調，通報者 **Brian Khan Quintana** 已從外部網路實測觸發漏洞。

🔗 ** 參考資料：** [iThome](https://www.ithome.com.tw/news/178432)

---

## OPSWAT 可以怎麼幫上忙

今天的多則新聞都屬於 ** 檔案與郵件承載 ** 的攻擊：自架 **Gitea** 開發平台上的 Git 掛鉤與修補內容、針對 **Zimbra** 郵件伺服器的特製 SMTP 觸發攻擊，以及透過瀏覽器傳遞的釣魚鏈。**OPSWAT MetaDefender** 可在檔案層級防禦：

- ** 多引擎掃描（Multi-Scanning）** — 以 30+ 個防毒引擎檢查電子郵件附件、下載的壓縮檔與儲存庫產物，在進入郵件信箱、端點或建置環境前攔截挖礦酬載與竊取連線階段的誘餌。
- **Deep CDR（Content Disarm & Reconstruction，內容淨化與重建）** — 淨化文件、壓縮檔與安裝程式，移除作用中內容、巨集與內嵌指令碼並保留可用性，讓武器化檔案無法執行。
- ** 漏洞偵測 ** — 辨識上傳或散布檔案中的已知漏洞元件（例如 Zimbra CVE-2026-73570 與 Gitea CVE-2026-60004 這類漏洞）。

對於自行營運開發平台與郵件基礎設施的組織，要求每一個進入網路的檔案都經過 MetaDefender 檢查，可封鎖攻擊者目前正積極利用的傳遞途徑。
