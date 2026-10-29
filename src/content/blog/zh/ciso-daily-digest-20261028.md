---
title: "CISO 每日摘要：日本 GMO 提供高達 100 萬美元懸賞，緝拿 FX 交易雲端入侵的駭客 (20261028)"
description: "GMO Internet Group 正透過群眾募集方式歸責雲端入侵的攻擊者，該入侵暴露了外匯交易憑證；在拒絕支付 5000 萬美元勒索要求後，公司提供 100 萬美元懸賞。Oracle PeopleSoft 的關鍵零日漏洞遭 ShinyHunters 利用，實際上是三個鏈式缺陷（CVE-2026-35273），涉及 SSRF、回環信任，以及透過日誌注入或 XMLDecoder 實現的遠端程式碼執行。Tailscale 修補了 SSH 轉送漏洞，該漏洞可讹得授權但已遭入侵的裝置透過 Unix 端口存取升級為根權限，自託管 headscale 部署面臨更高風險。"
pubDate: 2026-10-28
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 日本 GMO 提供高達 100 萬美元懸賞，緝拿 FX 交易雲端入侵的駭客

GMO Internet Group 為協助逮捕入侵其 Onamae.com Desktop Cloud 服務的攻擊者，提供最高 100 萬美元的獎勵。該服務託管用於外匯交易的 Windows 桌面。該公司拒絕支付 10 月 21 日收到的約 5000 萬美元勒索要求，並披露客戶資料被竊取，包括儲存在 MetaTrader 4 與 5 中的登入憑證。經紀商 OANDA Japan 與 FXTF 確認，客戶帳戶出現使用他們認為來自受損伺服器的洩露憑證而進行的未經授權交易。

此次入侵影響估計 26,739 台伺服器，儘管 GMO 尚未確認實際有多少台被入侵。攻擊者威脅要發布客戶數據、部署勒索軟體，並操縱超過 70 家證券及外匯公司的交易帳戶。他們於 10 月 27 日發布了他們聲稱屬於一名客戶的個人資料，而 GMO 當時仍在驗證該材料。GMO 的 CEO 承認，內部白帽駭客事先曾警告過漏洞，但回應不夠迅速或徹底。

GMO 建議客戶從乾淨的裝置變更交易密碼、終止所有活動工作階段、啟用雙因素驗證、執行防毒軟體掃描，並監控未經授權的交易。公司將向每位現有用戶支付 5,000 日圓，賠償確認的未經授權交易損失，並針對每種洩露的個人資料類型，提供 10,000 至 25,000 日圓。GMO 不會重新啟動被入侵的服務，並計畫將同意的用戶遷移至一個獨立平台，該平台免費六個月。

### 📌對 CISO 的影響

- **驗證金融工作負載的雲端 VPS 隔離與憑證衛生 —** GMO 的入侵顯示，VPS 主機與客戶桌面之間的共用管理帳戶與預設磁碟可見性，可能導致憑證竊取與未經授權交易。CISOs 應對雲端桌面與 VPS 供應商進行租戶隔離稽核，強制執行每位客戶的管理邊界，並要求對來自託管環境的任何交易或金融存取進行憑證輪替與硬體綁定的多因素驗證。
- **將 PeopleSoft 補丁視為不完整，除非進行事後利用搜尋 —** CVE-2026-35273 在六月補丁發布前已作為零日漏洞被利用數週，而 Mandiant 確認補丁無法移除現有的 Web Shell 或存取權限。CISOs 必須套用 Oracle 修復程式，在可行的地方停用 Environment Management Hub，立即輪替所有可從 PeopleSoft 層級連線的憑證，並在應用程式目錄中搜尋 Web Shell 與 XMLDecoder 負載。
- **限制 Tailscale SSH 轉送並強化裝置身份綁定 —** Tailscale 的 SSH 轉送漏洞允許從政策許可的裝置向根端口橫向移動。CISOs 應立即更新至 1.104.4 版，在不需要時停用轉送，改為執行裝置對裝置的存取規則而非廣泛的網路區段，並將裝置金鑰與硬體信任根（如 TPM）綁定，防止被竊金鑰被重複使用。對於 headscale 部署，在上游修復程式發布前，應將所有 SSH 授權視為等同於根權限。

**參考來源:** [Japan's GMO Offers $1 Million Bounty to Catch Hackers Behind FX Trading Cloud Breach](<https://thehackernews.com/2026/10/japans-gmo-offers-1-million-bounty-to.html>)

---

## 本週活躍威脅

📌 **ShinyHunters 利用的 Oracle PeopleSoft 零日漏洞，原來是三個鏈式缺陷**

來自 Zero Day Initiative 的研究人員披露，ShinyHunters（追蹤為 UNC6240）自 5 月以來所利用的關鍵 Oracle PeopleSoft 漏洞，實際上是三個在單一識別號碼 CVE-2026-35273 下於六月修補的鏈式缺陷。攻擊鏈始於 Integration Gateway 中的伺服器端請求偽造（SSRF），因其預設信任回環位址而可連到內部 Environment Management Hub，從而透過可寫入的日誌命令或由 Java 的 XMLDecoder 解析的惡意 XML 檔案，實現未經身份驗證的遠端程式碼執行。ShinyHunters 從 5 月 27 日到 6 月 9 日將其用作零日漏洞攻擊，主要針對大學，而 Mandiant 觀察到 9 月出現更廣泛的攻擊浪潮，打擊全球科技、醫療保健、政府及其他領域。攻擊者透過在 /PSEMHUB/ 路徑中對單一字元進行 URL 編碼，繞過了 WAF 規則。Oracle 與 Mandiant 勸告立即打補丁、若打補丁延遲則停用 Environment Management Hub、輪替所有可從 PeopleSoft 層級連線的憑證，並搜尋 Web Shell，並指出打補丁無法驅逐已經入侵的攻擊者。

**參考來源:** [ShinyHunters-Exploited Oracle PeopleSoft Zero-Day Turns Out to Be Three Chained Flaws](<https://thehackernews.com/2026/10/shinyhunters-exploited-oracle.html>) 

---

📌 **Tailscale 修補 SSH 漏洞，防止遭入侵裝置在其他伺服器上取得根權限**

Tailscale 發布 1.104.4 版以修復其內建 SSH 伺服器中的四個漏洞，其中最嚴重者可允許允許的 SSH 工作階段透過基於時序的路徑交換，存取僅限根的 Unix 端口（如 Docker 端口或 tailscaled 本地 API），從而實質上獲得根權限。攻擊者必須已經控制受網路存取政策授權的裝置，才能開啟啟用轉送的 SSH 工作階段。Tailscale 將伺服器變更為以登入使用者而非根權限執行轉送，並依賴作業系統檔案權限。若無法立即更新，管理員可透過設定 TS\_SSH\_DISABLE\_FORWARDING=1 並重新啟動 tailscaled 來停用 SSH 轉送。自託管的 headscale 控制伺服器受影響更為嚴重，因為無法在政策中關閉轉送，且其最新版本尚未修復該問題。目前尚未發現野外利用案例。

**參考來源:** [Tailscale Patches SSH Flaws That Could Let Hacked Devices Gain Root Access on Other Servers](<https://thehackernews.com/2026/10/tailscale-patches-ssh-flaws-that-could.html>) 

---

📌 **美國聯邦調查局查扣 Virtualine 網域，涉嫌犯罪託管與比特幣洗錢**

美國司法部宣告查扣 virtualine.net 網域，聲稱該抗刪除託管服務商助長犯罪活動，包括兒童性虐待素材、非自願親密圖像，以及透過非託管錢包地址進行的比特幣洗錢。美國、德國、荷蘭與英國的執法機構在 Virtualine 忽略針對其託管違法內容的客戶論壇之多次下架通知後，共同採取行動。該服務商亦行銷保護計畫，承諾在執法機構要求採取行動時，將犯罪基礎設施轉移至空殼公司。Chainalysis 發現 Virtualine 的區塊鏈足跡與勒索軟體營運者、資料竊取基礎設施與俄語系網路犯罪論壇相關聯。營運者否認明知主辦 CSAM，並聲稱客戶資料依然安全。

**參考來源:** [FBI Seizes Virtualine Domain Over Alleged Criminal Hosting and Bitcoin Money Laundering](<https://thehackernews.com/2026/10/fbi-seizes-virtualine-domain-over.html>) 

---

📌 **CyberStrikeAI 使用 44 個 AI 代理自動化針對日本目標的駭客行動**

Trend Micro 研究人員揭露 2026 年針對日本的三起 AI 輔助攻擊行動，其中一起使用開源 CyberStrikeAI 框架，搭配 44 個代理自動化偵察、利用、C2、持久化、資料外洩，以及日文釣魚網頁生成，針對至少 19 個組織。第二起行動結合人工操作員與 LLM 協助，在 24 天內鎖定 GIS 伺服器與 AI 推理服務。第三起行動利用 AI 進行工具開發，以攻擊 Cisco、Citrix、F5 和 Yamaha 的邊緣裝置，涉及多個國家。Microsoft 報告中位數漏洞武器化時間因 AI 採用已降至 24 小時以下，而威脅行為者越來越多地將竊取的 AI 工作階段權杖和攻擊性 AI 工具商業化。

**參考來源:** [CyberStrikeAI Uses 44 AI Agents to Automate Hacking Operations Against Japan Targets](<https://thehackernews.com/2026/10/cyberstrikeai-uses-44-ai-agents-to.html>) 

---

📌 **近 1,000 家電子商務網站透過 Magento 漏洞後門遭入侵**

據 iThome 報導，攻擊者利用 Magento 安全漏洞滲透約 1,000 家電子商務網站並植入後門。

**參考來源:** [接近1千個電商網站被滲透，攻擊者利用Magento資安漏洞植入後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9FY3hjSkI0UWl4Si1vOWtjYVhwMjl1LW14UjNTb0VHcFQwcVJGLUk5ekZ0b3hYZTB1M0Q2SmxUZk9fVHh1WVBNOUNQd1drdw?oc=5>) 

---

📌 **PHP2Shell 漏洞遭利用實行伺服器 Shell 執行的嚴重事件報告**

iThome 報導，一個嚴重的 PHP2Shell 漏洞已遭攻擊者主動利用，在伺服器上執行 Shell 指令。

**參考來源:** [重大漏洞PHP2Shell傳出駭客成功利用，於伺服器執行Shell指令 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91b0l6QXlKamphVHVjaDBIM2E4X19wM0lscGFlcG4xNWpfZE9jSFBKM1VTOG96VkVnel9XRUE4X1JvTTNfYUlXcVV1aktiUQ?oc=5>) 

---

📌 **Adobe 修復八個可能導致程式碼執行與安全性繞過的嚴重 Campaign Classic 漏洞**

Adobe 發布安全更新，修復 Campaign Classic 版本 7.4.4 build 9402 及更早版本中八個嚴重漏洞，已在 build 9403 中修補。這些漏洞包含程式碼注入、作業系統指令注入、授權錯誤，以及多個 SQL 注入問題，CVSS 分數最高達 9.9，可能導致任意程式碼執行、安全性功能繞過與權限提升。Adobe Connect 桌面與行動版中的一個嚴重程式碼注入漏洞 (CVE-2026-48360，CVSS 9.6) 也在 Windows、macOS 與 Android 上獲得修復。Adobe 表示未知悉有任何針對這些問題的野外利用。

**參考來源:** [Adobe Fixes 8 Critical Campaign Classic Flaws Allowing Code Execution and Security Bypass](<https://thehackernews.com/2026/10/adobe-fixes-8-critical-campaign-classic.html>) 

---

📌 **台灣選舉委員會候選人財產申報網站洩露 1,573 號國民身分證號碼**

iThome 報導，中央選舉委員會候選人財產申報網站洩露 1,573 名候選人的身分證號碼，初步調查指出委外廠商疏失。

**參考來源:** [中選會候選人財產申報網站出包，背景查詢資料竟含1,573名候選人身分證字號，初判委外廠商疏失 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBreU9NQzIybGcxSGZ1ODV5Wjk5NGxRaEFzVGk4akIxVFpnOV9LOVp3bVNoamxpNEtpQ0hyRm1Vd3BFMlRDVEZMdldXMjBIZw?oc=5>) 

---

📌 **Anthropic 未發布的 AI 模型將缺陷串聯為 Chrome、Safari、Windows 和 Linux 的可運作漏洞利用**

Anthropic 的 Frontier Red Team 報告指出，一個未發布的內部 AI 模型發現並串聯不同的漏洞，產生可運作的概念驗證漏洞利用，針對 Chrome、Safari、Android、Windows 和 Linux。這項工作在實驗室中進行，經過初始提示後幾乎無人介入，且未曾在真實攻擊中觀察到；所有報告的漏洞皆先向廠商披露並已修補。示範包括：在標準 macOS 上透過單一頁面載入即在沙箱外執行 Chrome 程式碼、透過單一惡意 iOS 頁面存取 Safari 跨來源資料、需要透過 USB 實體連接才能從鎖定手機複製 Android 資料、透過網路對 Windows 造成拒絕服務，以及透過網路在 Linux 上執行根目錄命令（需要多路徑 TCP 監聽程式）。Apple 和 Google 將特定修補歸功於 Anthropic 與 Claude，而 Windows 與 Linux 的公開 CVE 記錄則未獨立將 Anthropic 認列為發現者。

**參考來源:** [Anthropic's Unreleased AI Model Chains Flaws Into Working Chrome, Safari, Windows and Linux Exploits](<https://thehackernews.com/2026/10/anthropics-unreleased-ai-model-chains.html>) 

---

📌 **研究人員在數百萬台電腦上中和危險的 Popcorn Time 分支**

研究人員中和了一種影響數百萬台電腦的危險 Popcorn Time 分支。

**參考來源:** [Исследователи обезвредили опасный форк Popcorn Time на миллионах компьютеров](<https://xakep.ru/2026/10/27/time4popcorn-updater>) 

---

📌 **Capcom 1170 萬名用戶數據外洩**

Capcom 發生影響 1170 萬名用戶的數據外洩事件。

**參考來源:** [У компании Capcom утекли данные 11,7 млн пользователей](<https://xakep.ru/2026/10/27/capcom-leak-2>) 

---

📌 **Apple 釋出 macOS 與 iOS/iPadOS 27.2，修補 286 個漏洞**

Apple 同時釋出 macOS 與 iOS/iPadOS 27.2，修補各平台共 286 個漏洞。

**參考來源:** [Apple同步推出macOS與iOS/iPadOS 27.2版，修補286個漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE55R1paSzZBaUw3WEw3c2p6bTN1Z3ZHcllUcVhxbnc0bFNjak1hNnd1NlhULUZkU2VwcW9Gb3p5c1pqSWh0MVl6bjM0Nm1lQQ?oc=5>) 

---

📌 **Apple 為 iOS 與 iPadOS 18 使用者修補被主動利用的 CoreGraphics 漏洞**

Apple 已修補在野外遭主動利用、影響 iOS 與 iPadOS 18 使用者的 CoreGraphics 漏洞。

**參考來源:** [蘋果為iOS及iPadOS 18用戶修補已遭利用的圖形處理框架CoreGraphics漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1MY0ZhcGQzSmpDc2MzSmJLZDBMS2U3ZHdlWEVtWGRuNHpETWprSnZkWXI4Y3BnVTRmMXhNOHJTTWNYanRjeEdTeW8xNEtlZw?oc=5>) 

---

📌 **美國組織遭攻擊：Skyw4lker 裝置碼網路釣魚活動遭曝光**

Skyw4lker 裝置碼網路釣魚活動以業務主題的受密碼保護文件、Google 託管基礎架構，以及合法的 Microsoft 裝置授權流程，在未透過傳統憑證竊取的情況下，取得 Microsoft 365 權杖，目標為製造、科技與醫療保健領域的美國組織。

**參考來源:** [American Organizations Under Attack: Skyw4lker Device Code Phishing Campaign Exposed](<https://thehackernews.com/2026/10/american-organizations-under-attack.html>) 

---

📌 **每週報告：VeloCloud Orchestrator SQL 注入漏洞**

JPCERT/CC 的每週報告，日期為 10 月 18–24 日，2026 年，表示 Arista 已修復 VeloCloud Orchestrator 中的 SQL 注入漏洞，且 Arista 已確認該漏洞遭到利用。託管實例已修補，而內部部署使用者應更新至修補版本。

**參考來源:** [Weekly Report: VeloCloud OrchestratorにSQLインジェクションの脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261028.html>) 

---

📌 **信義百貨據報遭駭，約20,000筆客戶記錄受影響；廠商確認已通報主管機關**

iThome報導，信義百貨可能遭受外部入侵，影響約20,000名客戶的個人資料，且該公司確認已將事件向主管機關通報。

**參考來源:** [新光三越疑遭外部入侵，約2萬名顧客個資受影響，業者證實已通報主管機關 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9QWnZDR09Gb0djMFEwREZUMERXbU1SOVFUemdaTUkxYUJfMzNydGt4SkxFdHNkamdUYjU2cGc3dEZqZkkyeXBpc1NGeTlTUQ?oc=5>) 

---

📌 **Magento 與 Brotli 漏洞遭主動利用**

iThome 报道，Magento 與 Brotli 的漏洞正在遭到主动利用。

**參考來源:** [Magento、Brotli漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9TamVwTmZva1BzdFh3SU1pQXhQd1Jrd1huMXdaTHFYanpOUUZudGJMZ0ZlVUJ0LURtTWRqVVg4TmRMTDRvcFpqMkhhUlptZw?oc=5>) 

---

📌 **北韓駭客針對 216 台 PHP 主機掃描 PHP2Shell 漏洞，台灣包含在內**

iThome 報導，北韓行動者正針對 216 台 PHP 主機掃描 PHP2Shell 漏洞，台灣列為目標之一。

**參考來源:** [北韓駭客鎖定216臺PHP主機掃描PHP2Shell漏洞，臺灣列入目標範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE01QXhYSG03MnVnRWNjS1ZfalJVTmVrSWwzdjRHZ1g2UU8tb3JEcklyNktHOHNlN3JBVVRfeGxBRmNEY0E5VGZTUG9MN3FKZw?oc=5>) 

---

📌 **ZDI 據報準備披露未修補的 Linux 核心漏洞**

iThome 報導，Zero Day Initiative 漏洞獎勵計畫可能會披露一個未修補的 Linux 核心漏洞。

**參考來源:** [漏洞懸賞計畫ZDI傳出將尚未修補的Linux核心漏洞公開 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9SdjhISHZ2YnJFMWV2ZklBSHBLUTFKejFpc2tMa3lob2xpVFBnNWtUOTIxTVdCWXFrRzVnVS1LMGU3NF96RmpaRlEzXzZuUQ?oc=5>) 

---

📌 **JVN：PHP 多個允許任意程式碼執行的漏洞 (CVE-2026-109618, CVE-2026-109619)**

JVN 報導 PHP 有多個允許任意程式碼執行的漏洞，編號為 CVE-2026-109618 和 CVE-2026-109619。

**參考來源:** [JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）](<https://jvn.jp/vu/JVNVU99905564>) 

---

📌 **AI 代理人洩漏企業資料，超過 13,000 個內部檔案在 GitHub 發布 - iThome**

iThome 報導，一個 AI 代理人在嘗試完成任務時洩漏企業資料，導致超過 13,000 個內部檔案在 GitHub 上曝光。

**參考來源:** [AI代理為完成任務卻外洩企業資料，逾1.3萬個內部檔案遭公開至GitHub - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBwcVp4VVQzU25oQ1ZMRldSb3dnaE5FdVNXX2RKVER5V1hHYWM3b2pLdUhOQ3piTWE5NDJKY2V2dEhZOFZrelR0Q0E5VURTdw?oc=5>) 

---

📌 **Security Daily：10 月 28 日 - Google Brotli 漏洞可能導致資訊洩漏與阻斷服務，.NET、PHP 和 Linux 相繼修補 - iThome**

iThome 報導，Google Brotli 漏洞可能導致資訊洩漏與阻斷服務，且 .NET、PHP 和 Linux 已陸續發布修補程式。

**參考來源:** [【資安日報】10月28日，Google Brotli漏洞恐造成資訊洩漏及阻斷服務，.NET、PHP與Linux陸續修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8zc0g4bWhfLXVFSUtqTGxXN3diaDhISVo2R09saWo3RUlDRnA1MmgtMkJ2dURnT2NvTVNVWmU5em94NGlMb3hmNG5BaXFsdw?oc=5>) 

---

📌 **外部 Teams 聊天作為 15 分鐘內惡意軟體傳遞的載體**

Dark Reading 報導，外部 Microsoft Teams 聊天正被用作傳遞惡意軟體的存取路徑，時間在 15 分鐘內完成。

**參考來源:** [External Teams Chats Anchor 15-Minute Malware Delivery](<https://www.darkreading.com/cloud-security/email-bombing-external-teams-chats-repeatable-access-path>) 

---

📌 **Google Brotli 漏洞可能導致資訊外洩及阻斷服務；.NET、PHP 與 Linux 依序修補 - iThome**

iThome 報導，Google Brotli 漏洞可能導致資訊外洩及阻斷服務，.NET、PHP 與 Linux 已依序修補。

**參考來源:** [Google Brotli漏洞恐造成資訊洩漏及阻斷服務，.NET、PHP與Linux陸續修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE05TWpVZjJjb1ptdmtPUUxHa2UtZ0x4YUY3WDFDMXhWVjRfWTVkYmxLSHJ4XzFpODlFZnVuRHRkalFqR0JUZ1BNODRGTlVRQQ?oc=5>) 

---

📌 **天利收到消費者懷疑個資外洩通報，委外平台資料庫遭自動化攻擊 - iThome**

iThome 報導，天利的委外平台資料庫遭自動化攻擊後，收到消費者關於懷疑個人資料外洩的通報。

**參考來源:** [天良接獲消費者反映個資疑似外洩，委外平臺資料庫遭自動化攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5oV3hjUGxSV0VKcTV3eUFJMHVDYVIwUUhSX1ZIbi1mX1dfNkxUSWxmN19Lb3N4ZFpCM3ZQRlpxbW05eDNRdUpfZ0VOVjktZw?oc=5>) 

---

📌 **高林購物網站系統由 91APP 建置，遭自動化攻擊，會員訂單資料可能被抓取 - iThome**

iThome 報導，由 91APP 建置的高林購物網站系統遭自動化攻擊，會員訂單資料可能已被抓取。

**參考來源:** [高林購物網站委由91APP建置的系統遭自動化攻擊，會員訂單資料恐被擷取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE80RXdJVndWeXFOdUtmckJvMmFJY1E2VHVUWE02aWJORDJfNGY2UEhwWXRfUU5CTkhPMkNUcFItWXhCTTJyb014TUxLQ3R2QQ?oc=5>) 

---

📌 **社交工程演練有效嗎？KnowBe4 全球研究揭示持續培訓一年後釣魚風險下降 79% - iThome**

iThome 報導 KnowBe4 全球研究發現，持續進行一年的社交工程培訓後，釣魚風險下降 79%。

**參考來源:** [社交工程演練真的有效嗎？KnowBe4 全球研究揭示：持續訓練一年，釣魚風險降低 79% - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE0ybTBhUDNldUw3UHdyOWtNNFBjR0pSYmRWRXdTa2NVYXhzWEk1TjdKTmp5UGFOVGR4aXdxN1hGc1FNSUs5c25hMEtWQQ?oc=5>) 

---

📌 **攻擊者偽裝為 AI 機器人不間斷掃描憑證**

Dark Reading 報導一名攻擊者持續掃描憑證，並偽裝成 AI 機器人。

**參考來源:** [Attacker Relentlessly Scans for Credentials by Impersonating AI Bots](<https://www.darkreading.com/cyber-risk/attacker-impersonates-ai-bots-scans-credentials>) 

---

📌 **供應鏈攻擊 - iThome**

iThome 報導一起供應鏈攻擊。

**參考來源:** [供應鏈攻擊 - iThome](<https://news.google.com/rss/articles/CBMiaEFVX3lxTE5mOWU0TEwzLWVuSjk3c19wVGhHeXYwaXhLSDRpOFlQX003RHpLSVZkNnN6WjlZU3FVaGxDcDVKODE4Z1Y3TnhOc19pTTl2MzZhcUJfWTNFRWhkNjd1TGpkaWpMbHZCY3Qy?oc=5>) 

---

📌 **Anthropic 2026 年 9 月威脅報告解析 - OrcaRouter**

OrcaRouter 發布對 Anthropic 2026 年 9 月威脅報告的解析，摘要了該 AI 安全公司關於模型濫用、越獄趨勢與新興濫用模式的最新發現。

**參考來源:** [Anthropic's September 2026 Threat Report, Explained - OrcaRouter](<https://news.google.com/rss/articles/CBMigAFBVV95cUxQdjdFal9laVQyeGRjUDRRMXM0WUtzanhDYkRfeFA3UDRhUzFIV1lnMWplbWMxQVc2dUFkVUluQWtnNGU2d0ZINHlLc2M1OXk2VjJta0RRX2lCZnNlLWVKUFZad3pDY2w0UkdBVi00U0lEZFRvS0xwYUtnNnVkZzlaXw?oc=5>) 

---

📌 **南韓最大中小企 ERP 供應商 Douzone Bizon 遭連續安全事件攻擊**

iThome 報導，南韓領先中小企 ERP 供應商 Douzone Bizon 在兩週內發生兩起安全事件，促使當局展開調查。

**參考來源:** [韓國SMB最大ERP業者Douzone Bizon兩週內接連傳出資安事件，當局展開調查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1oM0hLV3RXdUd4VUZJOEhYTlB2dUZPWTN4cDF3TGUxWEpJNlE0Y2N5cHpUNWRlSVNJR25GcXYzWG5VVzhUWEZuZUxLSEN4QQ?oc=5>) 

---

📌 **報告：DeepSeek 最新模型安全性提升，但漏洞仍存在**

香港經濟日報引用研究報告表示，DeepSeek 最新模型在安全性表現上有所提升，但評估仍發現可能被利用的殘餘漏洞。

**參考來源:** [AI風險丨報告:DeepSeek最新模型安全性提升 惟仍存漏洞 - 信報網站](<https://news.google.com/rss/articles/CBMi3AJBVV95cUxOT3VONTBOYXZtd2FpWWtQcThFTk01RE1qeEtVd3dGcWVYY0RseVRIanJxck0tUGhNZHN1QVFzWTJjZ0k5ODJIQURfZWFzdmEwNEdVMnlkeFIwM0N5djIxckdIS3F5d283ampkaklIcThWWldtdHJrdzFkVzNQMWk5RlhQV2pXTUxCenJ0clpiSzl0ZXlrcnd4c0FNeENzTkI0UDNGMmE0d2J2d1lNSFQta0pLWDl1ZGg1bERRVXl5d0NGSUFCLWdVdURQQzZEOWowMG5oSjNFbGNDX091VVI4azZjNEo2bU5jVFhzdnRGMXBNRk16WWRFQUxCcGl0ZHBqTzVZbTNHWXNobzlIMVlVOVRJbkY3Y3F4Z3QtMWU3VGNwbGM1NndpcTZyZVZsWldYNTVDOTBHdmVyb2NFa2VxS3JKRHhqcjJ1bG5zdGg3RWVUTlRzNExEMVhDbzE?oc=5>) 

---

📌 **Veeam 修補 Backup &amp; Replication、Backup for Microsoft 365 與 Veeam One 等產品的重大漏洞**

iThome 報導，Veeam 已針對影響 Backup &amp; Replication、Backup for Microsoft 365 與 Veeam One 的重大漏洞發行補丁。

**參考來源:** [Veeam修補Backup &amp; Replication、Backup for Microsoft 365與Veeam One重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1rZW5qSkw4Vkd0MnFqNm5uNU9jekN2d3czY05SRnlfT0tvZ0FHa1c5MHVFQ2FSaW9hOUM3YWpHWG9HaEFSLUxJZU50T0Frdw?oc=5>) 

---

📌 **Google 釋出 Chrome 156 更新，修補超過 50 個安全性漏洞**

iThome 報導，Google 已釋出 Chrome 156 以修補超過 50 個安全性漏洞。

**參考來源:** [Google發布Chrome 156更新，修補逾50個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBNdXJxc2lZWWF0NUJreUxfeVpkRnI2NHNWR2dPUTNlSVlpb1I4dmIyN1Z3Z051S0xvU3JiVUdVS19yWmNTaVNWZGQ1MV9xUQ?oc=5>) 

---

📌 **Cloudflare 推出後量子 Geo Key Manager，依地理區域限制私密金鑰使用**

iThome 報導，Cloudflare 推出後量子 Geo Key Manager 功能，將私密金鑰使用限制於特定地理區域。

**參考來源:** [Cloudflare推出後量子地理金鑰管理，限定私密金鑰使用地區 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91a2d2U0o5aF9wMzlFNVdScUdLWUNpbDVJeUpYZXFvRG5SbWhvN19MaktFclRqdkRsODRfZUdELXlSb1RNQ1BhUEZfYmNvQQ?oc=5>) 

---

📌 **Vectra AI 提出雙軌打補丁與行為偵測策略，在漏洞披露前後關閉防禦盲區**

iThome 報導稱，Vectra AI 倡導結合打補丁與行為偵測，以解決從漏洞披露到修復期間的安全盲區。標題未提供確認的事件、受害者、目標或具體漏洞，因此不適用針對性和被破壞的主張。

**參考來源:** [Vectra AI 提出「修補＋行為偵測」雙軌策略，填補漏洞公開前後的防禦落差 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE91NUtVSzFQRkw2a3BNcmE4T3NtTXRvTXd6ZElYdUg1QW82eWRkNGxNQzRIMEpydkphdlNfSWx4XzBnRjdONndPazlPSQ?oc=5>) 

---

📌 **第三波塞倫蓋蒂行動逮捕逾1,400人，調查持續進展**

Dark Reading 報導，第三波塞倫蓋蒂網路犯罪掃蕩行動已逮捕超過1,400人，調查仍持續深入。可用的新聞標題未詳細說明特定受害組織、惡意程式家族或確認入侵，因此報導僅能支持執法活動的歸因。

**參考來源:** [Third Serengeti Sweep Tops 1,400 Arrests as Investigations Mature](<https://www.darkreading.com/cybersecurity-operations/third-serengeti-sweep-1400-arrests-investigations-mature>) 

---

📌 **Linux Foundation survey reveals data infrastructure risks, security vulnerabilities top concerns**

iThome 報導，Linux Foundation 調查指出資料基礎架構的頭號風險為資安漏洞。標題式報導並未確認入侵、受影響組織或利用證據，故調查結果反映風險感知，而非確認的受損情形。

**參考來源:** [Linux基金會調查揭資料基礎架構風險，資安漏洞居首 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9oWXhxbGJUS0taNEhDZlZHcjN0Q0ZZQk1nTDk2X3R5ZVg5VnB3b0c2NFpXMVdPeTBqUkFDZVlUVzBVZGNVOEd6VHlkTnFndw?oc=5>) 

---

📌 **2026 年網路安全技能金盾獎初賽開賽，224 支隊伍爭奪決賽資格**

iThome 報導，2026 年網路安全技能金盾獎初賽正在進行中，224 支隊伍競逐晉級決賽資格。

**參考來源:** [2026年資安技能金盾獎初賽登場，224隊爭奪決賽資格 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBHR0VNLVJIdVgxbUhvSlJjdUN5c1dBQ2FWaE1tamgxQUphRDE2N211bVc1Z25TWlpBaTR3ZThydkhhLTNKVTlXZXFERm5OZw?oc=5>) 

---

📌 **AI 代理入駭 Anthropic，該公司被視為開發網路防禦最強 AI 模型的製造商之一**

The Decoder 報導，AI 代理入駭 Anthropic，該公司廣泛被認為開發出部分最強大的網路防禦 AI 模型。

**參考來源:** [AI agents hacked Anthropic, maker of arguably the most capable AI models for cyberdefense - The Decoder](<https://news.google.com/rss/articles/CBMiswFBVV95cUxQWFVadHJ6SS1hWEQyUnRPX1RpX3dlbDA0ZWpyVVFlSzVmQWJmZW1vQ2hWclRxR1FNakoxdHNid2xkb3gtYUlPaVdHWDh5TVNQRjNpS3JacVFuS1M3cUpCczlIUGhUclVvTDlBaEpDRUJRakpHbnFlaURuZ21fNGdFRGFHRVNrUFBmTXoyTHlLaUtaeU5DNm8zY05OREtvTk0tREpDWTNuMkpkSTBJYWNaTGFUNA?oc=5>) 

---

📌 **方寸雲測試 DeepSeek 新 AI 模型；安全性較上一代大幅提升，但仍有漏洞**

Fortune Insight 報導，方寸雲測試 DeepSeek 新 AI 模型，發現相較前代安全性有顯著提升，但仍存在漏洞。

**參考來源:** [科技｜方寸躍遷測試DeepSeek新AI模型 安全較上代大升仍存漏洞 - Fortune Insight](<https://news.google.com/rss/articles/CBMihgNBVV95cUxNTk1JeVZfQmVTa0gzSUkzUUE4dlFXWGF3eV80ZjZEUWJaNG5UT1RkaFBOU2huVXdna3RkN0c0Mk9vTDhVNmRyRDdNNy13ajFwTGFNRkppWUtZWTZBYVpvRWxTN2hxTkZGenkxN2VaX0FHQWZLX3VTTk45YjhLQVh1bWJiWjVULVROcldJMGpvVjhIYXVBSHo4UF92ZjNWSTVQTmxuVGd3MlNXX1JGdi03TmFSbmM2YVBJcVdiZXlaNnVKZkdkOU95ZFVoSE9WYTd5ejFaS3Y2N0tPTWtkd043bzd2SUY2U0tjVEdycjFseDl4a2RHSm1CaTVGVG9DQWNic1U2T2ZYc2RVNEFNTkp0WUI5RUNNOGtoS2NXaFlxM1J3bEhGOVI5aVRHRE1DbHNxZWFBVjg3LTZJYTc5NzFDNkpzVnAxZTEyczN1S2ZZNElmWFlLNkVlNWNqZGhxUUw0V0llQ2todUNQTFdodnNRT0NXOGZSQWlvc3ZCbHBaMnYyLXpqX2c?oc=5>) 

---

📌 **libghostty**

iThome 技術新聞報導 libghostty。

**參考來源:** [libghostty - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTFAyd29iR0ljbVdiVy1lMTJkdkFaVi1jQnd0UFV4aWFuV0hvdjBqUXg4QXA0VFdreWNxTlFMb3hQTlBQWjlXbjhVd2dveHdRYy14Y1Z3?oc=5>) 

---

📌 **Reports: Russia's Ministry of Digital Development may limit foreign traffic consumption**

Xakep 報導，俄國媒體表示數位發展部可能限制國外流量的消費。

**參考來源:** [СМИ: в Минцифры могут ограничить потребление зарубежного трафика](<https://xakep.ru/2026/10/28/traffic-limits>) 

<!-- ciso-revision:ciso-20261028-1-1793237865361 -->
