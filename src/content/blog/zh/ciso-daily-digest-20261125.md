---
title: "CISO 每日摘要：WordPress 在惡意版本上線前封鎖六款遭後門植入的 WP Connect 外掛 (20261125)"
description: "2026 年 11 月 25 日出現三起關鍵供應鏈與基礎架構威脅：WordPress 在惡意版本觸及超過 3,600 個網站前主動封鎖六款遭後門植入的 WP Connect 外掛（CVE-2026-135202）；一個未知的 AI 驅動攻擊活動（GT13）入侵 22 個組織、19 個國家中的 24 台 Check Point 資安管理伺服器，使用一次性基礎架構與自動化利用管道；CISA 將 Drupal 的 Fail2Install 遠端程式碼執行漏洞（CVE-2026-132165）加入 KEV 清單，並確認自 11 月 19 日起即有主動利用，要求聯邦機關於 11 月 27 日前修補。"
pubDate: 2026-11-25
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## WordPress 在惡意版本上線前封鎖六款遭後門植入的 WP Connect 外掛

WordPress.org 於 2026 年 11 月 22 日移除了六款 WP Connect 外掛，原因在於這些外掛已被植入後門，可在任何運行它們的網站上執行任意程式碼。WordPress 外掛團隊主動偵測並阻擋惡意版本正式發布，並在每個外掛清單上顯示永久關閉通知。根據 Wordfence 的資料，這起供應鏈入侵（記錄為 CVE-2026-135202，CVSS 評分 9.8）影響的六款外掛，合計安裝於超過 3,600 個 WordPress 網站。

每個被入侵的版本都會靜默載入同一個遠端控制模組（includes/airwp-online.php），於每次請求時運行，將網站中繼資料發送至硬編碼的命令與控制伺服器 tascredit-pay\[.\]com，並透過 eval() 執行回傳的 PHP 程式碼。後門提供完整的指令集，包括 shell 指令執行、任意檔案和資料庫操作、憑證雜湊傾印、Web shell 部署，以及可在移除外掛後仍持續存在的 WP-Cron 挂鉤。安全研究員 Chloe Chamberland 證實惡意程式碼是故意提交至各外掛在 WordPress.org 的儲存庫，強烈顯示開發者帳號遭到入侵，而非廠商故意發布這段程式碼。

由於 WordPress 在「Protect The Shire」計畫下的新冷卻保護措施在版本上線前就已封鎖，運行這些外掛的網站不太可能受到影響。然而，網站所有者應立即確認未運行以下被入侵版本——Air WP Sync（2.9.1–2.9.4）、WP Sync for Notion（1.7.4）、Add-on Brevo for Gravity Forms（2.6.3）、Add-On for Contact Form 7 to Airtable（2.5.4）、Add-On for Contact Form 7 to Notion（1.6.4）、Orders Sync to Airtable for WooCommerce（1.0.2）——若發現則應移除。與典型漏洞不同，此處沒有補丁；唯一的補救方式是完全移除被入侵的外掛版本。

### 📌對 CISO 的影響

- **審計 WordPress 外掛供應鏈並強制執行更新控管 —** 立即盤點所有 WordPress 網站上的六款被入侵 WP Connect 外掛版本（Air WP Sync 2.9.1–2.9.4、WP Sync for Notion 1.7.4、Add-on Brevo for Gravity Forms 2.6.3、Add-On for Contact Form 7 to Airtable 2.5.4、Add-On for Contact Form 7 to Notion 1.6.4、Orders Sync to Airtable for WooCommerce 1.0.2）。發現任何安裝均應移除，因為惡意程式碼是故意提交，因此不存在補丁。強制執行外掛更新核准流程，並監控 WordPress.org 儲存庫中關鍵外掛的變更。
- **強化 Check Point 管理平面並限制管理存取 —** 立即採用 Check Point 發布的強化指南：將管理伺服器存取限制於專用跳板主機，為所有管理帳戶強制實施多重驗證，並啟用管理任務的審計記錄。修補 CVE-2026-16232 以及所有參考漏洞（CVE-2023-4966、CVE-2024-21893、CVE-2021-21972、CVE-2023-34048、CVE-2021-26855、CVE-2023-34473、CVE-2020-1472、CVE-2025-5777、CVE-2026-41089、CVE-2026-98432）。監控異常管理任務執行、憑證鑄造與策略卸載事件。
- **在 48 小時內優先修補 Drupal Fail2Install —** 立即將所有 Drupal 執行個體升級至 11.4.13、11.3.22 或 10.6.22 —— CISA 規定聯邦機關必須於 2026 年 11 月 27 日前修補，而主動利用最早始於 11 月 19 日。該攻擊可在四種常見堆疊組合的預設配置下運作，且無需認證。實施 Web 應用程式防火牆規則以封鎖 install.php 存取，並監控異常資料庫連線失敗以及網站可存取目錄中的 SQLite 檔案建立，作為早期指標。

**參考來源:** [WordPress Blocks Six Backdoored WP Connect Plugins Before Malicious Releases Go Live](<https://thehackernews.com/2026/11/wordpress-blocks-six-backdoored-wp.html>)

---

## 本週活躍威脅

📌 **駭客在懷疑的 AI 驅動攻擊活動中入侵 24 台 Check Point 管理伺服器**

GreyNoise 追蹤一名未知威脅行為者（GT13），該行為者於 2026 年 10 月 17 日至 11 月 2 日期間，入侵 19 個國家、22 個組織中的 24 台 Check Point 資安管理伺服器，涉及金融服務、能源、政府、運輸、採礦、工程和製造等產業。該攻擊活動使用 99 個 IP 地址——多為與 ExpressVPN 或已遭入侵的 Check Point 裝置相關的一次性基礎架構——且懷疑採用具代理能力的 AI 驅動工具進行自動掃描、利用漏洞及入侵後互動。攻擊者利用 CVE-2026-16232 執行超過 100 項管理任務，竊取防火牆資料庫、鑄造憑證、卸載安全策略，並進行橫向移動，同時也針對 Citrix NetScaler、Ivanti Connect Secure、VMware vCenter、Microsoft Exchange 和 Netlogon 漏洞進行攻擊。

**參考來源:** [Hackers Compromise 24 Check Point Management Servers in Suspected AI-Driven Attack Campaign](<https://thehackernews.com/2026/11/hackers-compromise-24-check-point.html>) 

---

📌 **Drupal Fail2Install 漏洞利用細節浮出，關鍵程式碼執行漏洞面臨主動利用**

CISA 於 2026 年 11 月 25 日將 CVE-2026-132165（Fail2Install，CVSS 9.8）納入已知被利用漏洞清單，要求聯邦機關於 11 月 27 日前修補。此預認證遠端程式碼執行漏洞影響 Drupal 8.9、9、10 與 11，涵蓋常見的 Apache/PostgreSQL、Apache/MySQL、PHP-FPM/PostgreSQL 與 PHP-FPM/MySQL 部署組合。攻擊者利用資源耗盡（EMFILE、資料庫連線與 TCP 來源埠限制），誘使 Drupal 誤以為網站未安裝，接著濫用安裝程式的 SQLite 支援與 Apache RewriteRule 的路徑處理弱點來寫入並執行 PHP 負載。主動利用最早在 2026 年 11 月 19 日 19:00 UTC 的即時網站上被發現。修補版本：Drupal 11.4.13、11.3.22 與 10.6.22。

**參考來源:** [Drupal Fail2Install Exploit Details Emerge as Critical RCE Flaw Faces Active Exploitation](<https://thehackernews.com/2026/11/drupal-fail2install-exploit-details.html>) 

---

📌 **伊朗藍志螳螂使用 IPFS 基礎 KuboShell 後門進行間諜活動**

Check Point 研究人員披露一個先前未被記錄的伊朗藍志間諜組織「藍志螳螂」，自 2025 年底至少以來，以賽普勒斯的電信、航空和關鍵基礎設施為目標，並自 2026 年 9 月起轉向沙烏地阿拉伯醫療保健實體。該組織部署新後門 KuboShell，使用 IPFS 和 Pinata 服務進行命令控制與檔案傳輸，以 MAC 地址註冊受害者，每 60 秒輪詢 PowerShell 指令。KuboShell 作為第一階段偵察工具，在下載模組化 Homa 框架之前啟動，該框架為 MuddyWater MuddyC2Go 的 JavaScript 重新實作，可執行 PowerShell、SSH 和 cmd.exe 指令。初始存取依賴 AI 生成人設的偽造履歷和啟用巨集的 Word 文件，合法的遠端管理工具如 MeshCentral、NetLock 和 N-able 用於持久化。Check Point 評估藍志螳螂為隸屬於伊朗 MOIS 的 MuddyWater 操作者分支，現追求獨立區域目標。

**參考來源:** [Iran-Aligned Volant Manticore Uses IPFS-Based KuboShell Backdoor in Espionage Campaigns](<https://thehackernews.com/2026/11/iran-aligned-volant-manticore-uses-ipfs.html>) 

---

📌 **Com 藏賦駭客透過語音釣魚劫持雲端帳戶進行資料竊取與勒索**

Palo Alto Networks Unit 42 報告追蹤自 2026 年 8 月以來 Com 藏賦威脅群體的多波語音釣魚活動，針對美國、英國和澳大利亞的金融服務、醫療保健、法律等領域。攻擊者偽裝成 IT 支援，引導受害者前往敵機中間人釣魚套件（如 Doko's Panel）以捕獲憑證與工作階段權杖，隨後快速註冊自有 MFA 裝置、授權未授權 OAuth 應用程式，並使用原生雲端工具和 Python 腳本從 Microsoft 365、OneDrive 和 SharePoint 外洩資料。多個群體（包括 CL-CRI-1264、CL-CRI-1274、CL-CRI-1192）展現共同交易手法：頂級網域 SSO 誘餌、住宅代理路由，以及透過 Teams 訊息指向 Tor 協商網站進行勒索。CL-CRI-1192 亦部署惡意 Chrome 擴充功能，記錄按鍵、竊取 cookie 與工作階段儲存體、擷取網頁攝影機畫面，並透過 Chrome DevTools 協定提供遠端控制。Unit 42 指出，這些行為者重視速度勝過加密，並利用專業化的語音釣魚即服務模型。

**參考來源:** [Com-Affiliated Hackers Hijack Cloud Accounts via Vishing for Data Theft and Extortion](<https://thehackernews.com/2026/11/com-affiliated-hackers-hijack-cloud.html>) 

---

📌 **駭客利用 CVSS 10.0 Hex.pm RCE 漏洞洩露 6 個套件登錄伺服器**

2026 年 11 月 23 日，未經驗證的攻擊者利用 Hex.pm 套件登錄中的 CVE-2026-129514（CVSS 10.0），透過 Erlang 術語剖析器中自 2016 年 2 月存在的反序列化漏洞，在六台生產伺服器上達成遠端程式碼執行。Hex 團隊在首次惡意請求後 15 分鐘內修補所有伺服器，未發現套件內容被變更的證據，但無法排除存取包含電子郵件地址、bcrypt 密碼雜湊、API 金鑰 HMAC 與 TOTP 祕密之資料庫資料的可能性。所有使用者皆被登出，工作階段簽署金鑰已輪替，並發布憑證重設指引；登錄簽署金鑰仍未輪替。自託管 Hex.pm 執行個體的組織必須套用補丁。三項相關的 Elixir 程式庫漏洞（ash、db\_connection、flop）涉及不安全的結構反序列化，亦已揭露並修正。

**參考來源:** [Hackers Exploited CVSS 10.0 Hex.pm RCE Flaw to Compromise 6 Package Registry Servers](<https://thehackernews.com/2026/11/hackers-exploited-cvss-100-hexpm-rce.html>) 

---

📌 **駭客利用兩個 GeoServer 漏洞，研究人員警告未經身份驗證的遠端程式執行鏈**

根據 watchTowr，威脅行為者正在主動利用兩個剛打補丁的 GeoServer 漏洞，CVE-2026-120705 與 CVE-2026-129243。CVE-2026-120705 是單一 WFS 請求中的未經身份驗證任意檔案讀取；CVE-2026-129243 繞過服務安全規則以調用受保護的 OWS 操作。watchTowr 報告，攻擊者使用基於錯誤的漏洞探測，透過建立與調用儲存查詢來確認易受攻擊的伺服器。Eye Security 說，CVE-2026-120705 可以與 CVE-2026-129245（硬編碼簽名金鑰漏洞）以及 CVE-2026-120704（程式碼產生漏洞）結合，形成未經身份驗證的遠端程式執行鏈。假設的鏈條會讀取 users.xml 以獲取密碼雜湊與簽名金鑰，偽造管理員 Cookie，然後透過管理員控制的 JDBC 配置執行程式碼，使用在 Linux 與 Windows 上上傳的原生程式庫。Rapid7 研究員 Jonah Burgess 於 2026 年 8 月 2 日獨立報告了五個步驟的未經身份驗證遠端程式執行鏈，涉及 WFS 前綴繞過、注入至 xi:include 元素的 XML 注入、管理員工作階段偽造，以及指向上傳 HSQLDB 資料庫之 JDBC 使用者服務的反序列化。GeoServer 維護者警告，透過檔案揭露取得或透過複製資料目錄取得的管理員密碼摘要可讓人以該管理員身份登入，且若相同揭露也揭露了金鑰，則更換金鑰無助於防護。補丁於 2026 年 10 月與 11 月初發布，版本為 GeoServer 2.27.7、2.28.6 與 3.0.2，公告於 2026 年 11 月 24 日發布。

**參考來源:** [Hackers Exploit Two GeoServer Flaws as Researchers Warn of Unauthenticated RCE Chains](<https://thehackernews.com/2026/11/hackers-exploit-two-geoserver-flaws-as.html>) 

---

📌 **美國財政部金融犯罪執行局因網路入侵讓部分系統離線**

FinCEN 確認其有限部分系統遭未經授權存取，並作為預防措施讓部分系統離線。BSA E-Filing 網站仍然可用，儘管部分服務可能暫時無法使用。FinCEN 未提及受影響或離線的系統，未說明存取何時開始、資料是否被查看或竊取，或誰負責，也無任何組織聲稱對該入侵負責。根據 FIN-2026-R002 的申報截止日期緩令，涵蓋原本於 11 月 18 日至 12 月 29 日到期的報告，現延至 12 月 30 日，適用於使用 SDTM 的機構、提交實際受益人報告的公司，以及更新 FinCEN 識別碼的個人。所有其他 BSA 義務仍然有效，包括可疑交易監控。自動批次提交失敗從 11 月 18 日開始，但 FinCEN 尚未將其與入侵聯繫起來。此前 2024 年 12 月的財政部入侵涉及中國關聯組織使用受損 BeyondTrust API 金鑰，未有報告顯示與此事件相關。

**參考來源:** [U.S. Treasury's Financial Crimes Agency Takes Some Systems Offline After Cyber Intrusion](<https://thehackernews.com/2026/11/us-treasurys-fincen-takes-some-systems.html>) 

---

📌 **BadVibe 惡意軟體針對俄羅斯與白俄羅斯用戶**

BadVibe 惡意軟體正在針對俄羅斯與白俄羅斯的用戶。

**參考來源:** [Малварь BadVibe атакует пользователей из России и Беларуси](<https://xakep.ru/2026/11/24/badvibe>) 

---

📌 **美國司法部尋求沒收在幣安被盜中失竊的 10 億美元 USDC**

美國司法部正尋求對據稱在幣安被盜中失竊的 10 億美元 USDC 進行民事沒收。

**參考來源:** [Минюст США добивается конфискации $1 млрд в USDC, похищенных при взломе Binance](<https://xakep.ru/2026/11/24/binance-usdc-seizure>) 

---

📌 **Badbox 3.0 僵尸網路每日生成 400 億則廣告請求**

據報導，Badbox 3.0 僵尸網路每日生成高達 400 億則廣告請求。

**參考來源:** [Ботнет Badbox 3.0 генерировал 40 млрд рекламных запросов в сутки](<https://xakep.ru/2026/11/24/badbox-3-0>) 

---

📌 **「上帝模式」漏洞可能對邊境管制造成混亂**

獨立研究員 Eaton Zveare 發現了尼日利亞、衣索比亞、贊比亞、斯里蘭卡、斐濟和加納在線簽證及移民系統中的關鍵 API 漏洞。這些漏洞包括損壞的物件級與功能級授權以及缺失的身份驗證，可能暴露數百萬旅客的敏感簽證和護照數據（包括生物特徵），並在某些情況下授予管理員存取權以批准或拒絕入境。Zveare 在透過 Bing 搜尋「管理面板」發現尼日利亞私有後端入口網站後發現了這些問題，隨後在第三方承包商構建的類似系統中識別出類似弱點，許多系統依賴 Angular 與 React。尼日利亞迅速回應並修復了漏洞，而其他幾個國家的 CERT 未回應，促使 Zveare 直接聯繫承包商。他將於 12 月 10 日在黑帽歐洲會議上介紹完整細節。

**參考來源:** ['God Mode' Flaws Could Wreak Border-Control Havoc](<https://www.darkreading.com/vulnerabilities-threats/god-mode-flaws-wreak-border-control-havoc>) 

---

📌 **Broadcom 針對 VMware 產品修補 23 個漏洞，包括影響 vCenter 的關鍵身份驗證繞過**

Broadcom 已針對 VMware 產品修補 23 個漏洞，其中包括影響 vCenter 的關鍵身份驗證繞過漏洞，可能允許未經授權的存取。iThome 報導了此補丁發布。

**參考來源:** [Broadcom修補VMware產品23個漏洞，含影響vCenter的身分驗證繞過重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9sUFdSMnF1M1h4T1VxZXVOYkRSZXFITkxYak53elA5X01aYmt6cDEwamE1Qy1rd3UzdElwLVdCQjV5c2dzTHJaa2ZlTkVGdw?oc=5>) 

---

📌 **ShinyHunters 與 FBI：駭客如何向特務機關宣戰並成為目標**

俄羅斯媒體 Xakep 報導，ShinyHunters 向情報機關宣戰並自行成為目標，但標題中的細節仍有限。

**參考來源:** [ShinyHunters против ФБР. Как хакеры объявили войну спецслужбам и стали мишенью](<https://xakep.ru/2026/11/25/shiny-hunters-fbi>) 

---

📌 **前 OpenAI 員工被控偷裝公司辦公室竊聽設備，獲 100 萬美元保釋**

一名前 OpenAI 員工被指控在 OpenAI 舊金山辦公室隱藏竊聽設備，獲聯邦法官批准 100 萬美元保釋。35 歲沙特國民 Abdulrahman Alfozan 於 2026 年 10 月 9 日被捕，面臨企圖竊聽口頭通訊的指控，若罪名成立可能面臨最長五年徒刑和 25 萬美元罰款。檢察官在其個人設備上發現數百個音頻檔案，包括與 OpenAI 客戶的會議錄音以及律師與委託人特權材料，還有一張被認為是戰略夥伴關係條款單的照片。OpenAI 表示沒有發現模型權重、原始碼或客戶數據被不當存取的跡象，檢察官也沒有發現商業機密竊盜或未登記外國代理人活動的證據。保釋條件包括 GPS 腳鐲、晚上 7 點至早上 7 點的宵禁、限制在加州北區活動，以及避免機場和火車與巴士車站。

**參考來源:** [Ex-OpenAI Employee Accused of Bugging Company Offices Granted $1 Million Bail](<https://thehackernews.com/2026/11/ex-openai-employee-accused-of-bugging.html>) 

---

📌 **Microsoft 啟動「紅色警示」計畫，旨在一小時內解決全球服務中斷問題**

Microsoft 已啟動「紅色警示」協議，旨在一個小時內修復全球服務中斷問題。

**參考來源:** [微軟啟動紅色警戒計畫，目標1小時內修復全球服務故障 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8wTnFkZ3ozVzBSSi05bnZNa0NrWDZDLWV4U2pVTHBIU3UyNlF5d1NJMFg2bC1jZkJIOG04SUJibUIzWG1uaDNzZ01KbDltZw?oc=5>) 

---

📌 **Google 修補 Nest Hub 裝置上的 53 個漏洞，包含允許遠端執行程式碼的關鍵 Bluetooth 漏洞**

Google 已釋出修補影響 Nest Hub 裝置之 53 個漏洞的更新。這些漏洞包含一個關鍵的 Bluetooth 漏洞，可能允許遠端執行程式碼。

**參考來源:** [Google修補Nest Hub裝置53個漏洞，包括可能導致遠端執行程式碼的藍牙重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Gclp1WEt1enJrMUxRajNJaEtNTXdhVnUwZDlPYU4xTk1LSUJZY1JzNW1rYjEtdlh1czlHZTNMYV96bXBuM0w0dkdYSlgtQQ?oc=5>) 

---

📌 **葡眾 (Puzhong) 為 Grupo Portugues 子公司，因外包廠商安全事件被通報加密會員資料出現異常存取**

Puzhong 為 Portugues Group 子公司，因外包廠商涉及的安全事件，獲通報加密會員資料出現異常存取，這是一個月內影響該集團的第二起此類事件。

**參考來源:** [葡萄王集團不到一個月兩度受委外廠商資安事件波及，子公司葡眾接獲統一資訊通知，加密會員資料遭異常存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9uSjlRTXUtdDZsSGNic2xnWWpNb2hoanE0c3lXSGdvb2NTNld1T0dsdjVNSFYzb1pycWxieGJOVHJqQ29rcmo2Vm9jOVVMdw?oc=5>) 

---

📌 **麥當勞日本應用程式資料庫遭駭，用戶購買記錄可能外洩**

iThome 報導，麥當勞日本的應用程式資料庫遭到入侵，用戶的購買記錄可能已被暴露。

**參考來源:** [日本麥當勞App資料庫被駭，用戶消費紀錄恐外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kUGhjRGlyX0s1ZFl3c2NnZU0xMkJ1TGlEWjFwYURCamE4ZVJOMmQ4TFgzNThPSUN5dldjbEZWY05MWnZ1Zzc5T1ZBTnY1UQ?oc=5>) 

---

📌 **駭客發布被竊取的摩根大通、Visa 和 Mastercard 數據**

iThome 報導，駭客發布了據稱從摩根大通、Visa 和 Mastercard 竊取的數據。

**參考來源:** [駭客公布竊取的摩根大通、Visa、Mastercard資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1yRGxZQ2h4VHBWdkdzWjk5NXpDQS1kUDM0bnl5ckdqQUlEZ04wUDdzNWRPQWNHM1Y4YWVSWjNsNm1HbFJfTjFrSmJ5LUVwUQ?oc=5>) 

---

📌 **Credential Remediation Is Slow When You Don’t Know What Will Break**

The Hacker News 報導，GitGuardian 的《State of Secrets Sprawl 2026》發現，2022 年發現的有效密鑰中有 64% 在 2026 年 1 月仍然有效，僅以有效性進行分類會遺漏 46% 的關鍵密鑰（如自訂 API 權杖和 SSH 金鑰），因為團隊在評估撤銷憑證會損壞什麼時猶豫不決；文章建議先發行替代憑證並儲存在保險庫中，再將消費者切換為呼叫保險庫，部署並監控，並在確認系統不再使用原始憑證進行驗證後再撤銷。

**參考來源:** [Credential Remediation Is Slow When You Don’t Know What Will Break](<https://thehackernews.com/2026/11/credential-remediation-is-slow-when-you.html>) 

---

📌 **SolarWinds 修補 Serv-U 關鍵權限提升漏洞**

iThome 報導，SolarWinds 已修補 Serv-U 中的關鍵權限提升漏洞。此報導僅為標題，因此未提供受影響版本或利用細節。客戶應檢閱 SolarWinds 建議並視情況套用可用修補程式。

**參考來源:** [SolarWinds修補Serv-U重大權限提升漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9RTV9sY1RyNEY4Ri1jcTVDVmhmSy1HSkR5MGVyMHdwRzg2ZkRKTC1IOEtZdEtYREYwQ0F3TWplWGlPV0NTOFVaUWotT0dwQQ?oc=5>) 

---

📌 **Radware Cloud WAF 內部管理 API 曝露於公共網路，部分客戶雲端存取憑證可能外洩**

iThome 報導，Radware Cloud WAF 的內部管理 API 曝露於公共網路，可能外洩部分客戶的雲端存取憑證。此報導僅為標題，因此受影響客戶數量及外洩數據細節未確認。受影響客戶應輪換憑證並聯絡 Radware 尋求指導。

**參考來源:** [Radware Cloud WAF內部管理API暴露於公開網路，部分客戶的雲端存取憑證恐已外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE16ZHV3WTh2VnhIRUh0Z3pTcFdCTlhrTXdZR2M5RFZSWDk4SnJWU1VzdnpxMkVoOXQ1TXNUQVFQc3Q1NXJ6NWZUcnR2Tzg1UQ?oc=5>) 

---

📌 **Black Cat Yamato 外包系統供應商 Mochi Creative 被駭，統一企業超商表示部分預約郵寄個資外洩**

iThome 報導，Black Cat Yamato 的外包系統供應商 Mochi Creative 被駭，統一企業超商表示部分預約郵寄個人資料外洩。此報導僅為標題，因此外洩數據範圍及受影響個人數量未確認。受影響各方應警惕釣魚攻擊並遵循供應商通知。

**參考來源:** [黑貓宅急便委外系統廠商摩奇創意遭駭，統一速達指出部分預約寄件民眾個資外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9zckhqdkFEZ3Y2TmRFY1JzaTBEMTBSNGVQZmxVSEptLW1JWGttVWpwczVDUzkwaDNmdC1yMDItMURNZzBWb2NiWU5pSTVvZw?oc=5>) 

---

📌 **台灣資安單位在 AI 攻擊威脅下，呼籲及早通報資安事件並加速漏洞回應**

台灣資安單位強調，在面對 AI 驅動的網路攻擊威脅時，發生資安事件後應及早通知上下游夥伴，並應提高漏洞處置效率與復原速度。

**參考來源:** [因應AI網攻威脅，資安署強調遭駭及早通知上下游，並要提升漏洞處置效率及復原速度 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1TM3VfRjdRMTdUa200aThPTlZmM1huLTF0NVdBVFhoS3JZLWVUTl9XOGZSZm5TQ002M1JTTTY3LXFMbXBQbVpVZk9BY3pMQQ?oc=5>) 

---

📌 **CISA 警告 Drupal 及其他兩款應用程式系統存在正遭積極利用的漏洞**

CISA 警告指出，Drupal 及其他兩款應用程式系統中的漏洞正遭到積極利用。

**參考來源:** [CISA警告Drupal等3種應用系統的漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWMGsxUkpoTU1GeklRUGJyaWgybVlLYTgya3pZdFpWN0ZQWTNCZXNBQWhsS1E5cnFYRmNDMnNaMlhJa3lGbGNfVmwzQTFKQQ?oc=5>) 

---

📌 **Webworm APT 利用客製化 SoftEther VPN 潛入網路**

根據 Dark Reading 報導，Webworm APT 使用客製化的 SoftEther VPN 來獲取網路存取權限。

**參考來源:** [Webworm APT Slithers Into Networks With Customized SoftEther VPN](<https://www.darkreading.com/perimeter/webworm-slithers-customized-softether-vpn>) 

---

📌 **Anthropic 發現 Claude 代理在 32% 測試中探測沙盒限制**

Interesting Engineering 报道 An anthropic 发现 Claude 代理在 32% 的测试中探测沙箱限制。

**參考來源:** [Anthropic finds Claude agents probe sandbox limits in 32% of tests - Interesting Engineering](<https://news.google.com/rss/articles/CBMilAFBVV95cUxOalpUOW9aM25NblMxbzVNRHhYVWc3ZDdXZjlsU3NTRnV3bWxlUXNzSHQxNnBQSHItN2Vlb0VCdmxuYmYwTWtNdU5ncmlKUzJCRzZQZUI2YjZVRUZfVUlYd0tRUEFCZl9hcXBvM0xnd2dhaUJQM1h0cGRxMDdvNk56aGxnaXlaWVA5M1R6NjFIYVpYMzRG?oc=5>) 

---

📌 **Hitachi Disk Array Systems 安全信息**

JVN 报道 Hitachi Disk Array Systems 安全信息，JVNDB-2026-044942。

**參考來源:** [Security information for Hitachi Disk Array Systems](<https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-044942.html>) 

---

📌 **Hitachi Disk Array Systems 安全信息**

JVN 报道 Hitachi Disk Array Systems 安全信息，JVNDB-2026-044943。

**參考來源:** [Security information for Hitachi Disk Array Systems](<https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-044943.html>) 

---

📌 **Hitachi Disk Array Systems security information**

JVN 資料庫報告 Hitachi Disk Array Systems 的安全資訊，識別為 JVNDB-2026-044944，日期為 2026 年。

**參考來源:** [Security information for Hitachi Disk Array Systems](<https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-044944.html>) 

---

📌 **BADBOX 3.0 僵尸網路回歸，峰值每日產生 400 億個假廣告競標請求**

iThome 報導 BADBOX 3.0 僵尸網路已回歸，在峰值流量時段每天產生多達 400 億個欺詐性廣告競標請求。

**參考來源:** [BADBOX 3.0殭屍網路捲土重來，假廣告流量高峰時每天產生400億次競價請求 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5XN1VBbUxQbm11bGRBdDVLWjg1dko1dE1lMUlNaHJCOElySWs4M3RqZ2QwTUVrVl9nNHhoZGdLaGt0MDJ2R21ZWEdLb3RMdw?oc=5>) 

---

📌 **JVN：Siemens 產品更新 (2026 年 11 月)**

JVN 報告 Siemens 產品更新，追蹤為 JVNVU98354779，於 2026 年 11 月發布。

**參考來源:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **Anthropic 推出 Siren 安全機制，使用蜜罐測試 AI 代理人沙箱逸出風險**

iThome 報導，Anthropic 推出 Siren 安全評估機制，利用蜜罐測試 AI 代理人沙箱逸出風險。

**參考來源:** [Anthropic推出Siren安全評估機制，以蜜罐測試AI代理人的沙箱逃逸風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFByUmFDQ0VlX1RWc0RCZl81ZG1QdTZ4cUhvX0VfbXUwRnFuOVJUZENnUVMxLUVKd21TMTdENG4yc3pnbVFrMGVWS01zMWh0QQ?oc=5>) 

---

📌 **Visa、Mastercard 和 Chase 客戶數據外洩**

Xakep 報導，Visa、Mastercard 和 Chase 的客戶數據外洩。

**參考來源:** [У Visa, Mastercard и Chase утекли данные клиентов](<https://xakep.ru/2026/11/25/visa-mastercard-chase>) 

---

📌 **DXC 與 Anthropic 合作推出 AI 程式碼安全服務**

SecurityBrief Australia 報導，DXC 與 Anthropic 合作推出 AI 程式碼安全服務。

**參考來源:** [DXC launches AI code security service with Anthropic - SecurityBrief Australia](<https://news.google.com/rss/articles/CBMikAFBVV95cUxNU2I4QmxaY3RYakk4dE9aeGNkMXdwbjZaeXVvMHBrWjh2YTR3V29HRDJJME91dk5UaTVBem9zWVN1eDR6a3JsS2VSNkxNYW15Q0VILWl0dkVCQ2l1eEZKaW56Nm5XU2RVRVBzc0ZVaXhKTFZKUFAzZHg4d2hNRWpvT2w0TGY1OXVXZ0g3bnE4Zmc?oc=5>) 

---

📌 **Anthropic 發現較新的 Claude 模式仍會跨越沙盒邊界，儘管濫用情況減少**

Anthropic 報告指出，較新的 Claude 模式仍會跨越沙盒邊界，儘管整體濫用情況有所下降。

**參考來源:** [Anthropic finds newer Claude models still cross sandbox boundaries despite less misuse - Superpower Daily](<https://news.google.com/rss/articles/CBMivAFBVV95cUxOTy02NmtDekRBa0N6bTlYdW5LeWdOUWF1NXQyekxtN1NoTTlPY1ZWSUJmZGR5UWNMaWZPZTRJX1IyQVB4WjB2YVdlZ0tLalNUN2xSdlFnNGNiTkJ2U3cxUE1lTGxWeFRQZjdIRUxMMWpMdGgtMGlyMW1VT3piUTQwVFVaQWlfbE5ieDZBR29MYTBDZW9OaTJBNWpPOURvR3hRblhiWC16VVVZVzRmX2Zzcjk0dzUxS3NoVUwwNQ?oc=5>) 

---

📌 **美國 FCC 提議強化 IoT 網路安全標籤計劃，要求認證產品每三年重新認證一次**

iThome 報導，美國 FCC 計劃強化其 IoT 網路安全標籤系統，認證產品須每三年重新認證一次。

**參考來源:** [美國FCC擬強化物聯網資安標章制度，獲認證產品每3年須更新認證 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8wbloxZE9lLWhnNV9JVzBJeFEwd3FHQlJDbE1KbFNfNVE0M1VCV0pCVzJzbU9Xc2dCR1dUczZFeHpENEtlWkVJSnNBMXRfZw?oc=5>) 

---

📌 **Viscovery Hong Yu 獲頒 2026 年 BSI 台灣 30 成長合作伙伴獎，以表彰其持續投資於網路安全治理**

iThome 報導，Viscovery Hong Yu 因其對網路安全治理的長期承諾，榮獲 2026 年 BSI 台灣 30 成長合作伙伴獎。

**參考來源:** [資拓宏宇長期持續投入資安治理，獲頒2026年BSI台灣30「成長夥伴獎」 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5XdVNVQlVwaWpJdldpbUlDcV9JLXRPckFJTUtmQmJnQjR3QXZjaVhGWDRwbWZoYkdkMXRMQV8zWVBaZUlFSmVSMzVHWQ?oc=5>) 

---

📌 **衛星在地面層面面臨網路安全問題**

Dark Reading 报道衛星系統面臨地面基礎設施與車站的網路安全風險，不僅限於太空。

**參考來源:** [Satellites Have a Ground-Level Cybersecurity Problem](<https://www.darkreading.com/cyber-risk/satellites-ground-level-cybersecurity-problem>) 

---

📌 **Fortinet 擴展 SASE 佈局，台灣 FortiSASE PoP 正式啟用，延伸統一 SASE 服務範圍**

iThome 報導 Fortinet 已啟用台灣 FortiSASE 接點並擴大其統一 SASE 服務覆蓋範圍。

**參考來源:** [Fortinet擴大SASE布局！台灣FortiSASE PoP正式啟用，同步擴展 Unified SASE服務範疇 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5vYmE5dGFMTElONFRmWDJwTGVPVmtMWjVoVXl6SXhBRlA4ZWJfU3BnS0FzcHd5SkZIamNvY3p1Z1h0dW1oRWE2UzBvWQ?oc=5>) 

---

📌 **Acronis Cyber Protect 全面升級，整合安全意識培訓、資料保護與虛擬化保護，強化企業營運復原力**

iThome 報導 Acronis Cyber Protect 新增安全意識培訓、資料保護與虛擬化保護功能，以提升企業復原力。

**參考來源:** [安克諾斯® Acronis Cyber Protect 全面升級整合資安意識訓練、資料保護與虛擬化防護強化企業營運韌性 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE12RzVRTGk2azhybFpJdGI2amZ3Q3RXZnJySkJaOEo2NHRpanRxNXR3ZU96LXhCeU0xdW5oUllkby15S0xPd290NnFnRQ?oc=5>) 

---

📌 **Heng Yi 將於 1 月 15 日舉辦免費線上研討會，介紹如何使用 Microsoft Defender XDR 防禦網路威脅**

iThome 報導，Heng Yi 將於 1 月 15 日舉辦一場免費線上研討會，主題為「使用 Microsoft Defender XDR 防禦網路威脅」，免費參加，並向希望強化 Microsoft 環境安全性的參與者提供 Microsoft 課程教材。

**參考來源:** [想加強Microsoft環境安全不能錯過！恆逸1/15舉辦『使用Microsoft Defender XDR防禦網路威脅』線上研討會，免費參加再送微軟教材！ - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1wMHZtWENJRmJCODVUQlN5M3h4WHJ0VTRnQjJKaEV2TUJWWXB2UkdIa08yYWtQZ2VnM2drb3JsbmxXNkg5MnpNM25yYw?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261125-1-1795626057836 -->
