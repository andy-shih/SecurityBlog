---
title: "CISO 每日摘要：駭客入侵 1Password 員工 GitHub 帳戶，竊取原始程式碼並植入惡意程式以下載客戶資料 (20261126)"
description: "駭客透過遭入侵員工 GitHub 帳戶竊取 1Password 原始程式碼，並植入用於下載客戶資料的程式碼；Drupal 披露了一個正遭主動利用的嚴重網站接管漏洞，並針對受支援版本提供修補程式；Push Security 則將 DOMDIFFER 指稱為領先的釣魚套件，使用 DOM 鏡像與多通道誘餌繞過標準安全控制。"
pubDate: 2026-11-26
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 駭客入侵 1Password 員工 GitHub 帳戶，竊取原始程式碼並植入惡意程式以下載客戶資料

iThome 報導，駭客入侵了一名 1Password 員工的 GitHub 帳戶並竊取了公司原始程式碼。入侵者植入旨在下載客戶資料的惡意程式。報告未說明是否有客戶資料被存取的範圍。

### 📌對 CISO 的影響

- **保護原始程式碼與供應商帳戶 —** 將開發人員與供應商帳戶視為高價值目標；強制使用防釣魚多重驗證，檢閱 OAuth 與個人存取權杖授權，並在任何供應商遭入侵後監控原始程式庫的未授權變更。
- **修補 Drupal 並強化安裝程式 —** 視情況將 Drupal 核心更新至 11.4.14、11.3.23 或 10.6.23，執行 update.php，停用或保護 install.php，並稽核使用者 1 帳戶的意外存取或電子郵件變更。
- **強化釣魚與瀏覽器防禦 —** 搭配電子郵件過濾使用瀏覽器隔離、URL 說譽與可強制使用的通行密鑰，同時訓練使用者辨識繞過傳統閘道器的日曆、聊天、QR 代碼與裝置代碼誘餌。

**參考來源:** [駭客入侵1Password員工GitHub帳號竊走公司原始碼，植入惡意程式碼下載客戶資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE53WGN0YUtVUnNDZnN3X1VHaUNxNjQtWUVMWWt2Z2tmV09mSDBQYUlScWUyNW5ScGpZbEdzaVptUGNkUTVPdUFKaVhuNmFxQQ?oc=5>)

---

## 本週活躍威脅

📌 **Drupal 警告新的極高危險性網站接管漏洞正遭主動利用**

Drupal 報告一個極高危險性核心漏洞，CVE-2026-136716，與異常條件檢查不當有關，並與 CVE-2026-132165 相關，目前正遭主動利用。先前修復後仍保留安裝程式存取權的網站可能已遭入侵，而已保護的安裝程式不受影響。修補程式可在 Drupal 11.4.14、11.3.23 和 10.6.23 中取得，管理員應檢查記錄、驗證使用者 1 電子郵件控制權、重設密碼、執行 update.php，並保護 install.php。

**參考來源:** [Drupal Warns of New Highly Critical Site Takeover Vulnerability Under Active Exploitation](<https://thehackernews.com/2026/11/drupal-warns-of-new-highly-critical.html>) 

---

📌 **最需要關注：繞過安全控制的釣魚套件與技術**

Push Security 研究描述了 DOMDIFFER，這是一個針對企業 Google 與 Microsoft 帳戶的中間人釣魚套件，從 2026 年 8 月到 10 月達到突破率。該套件使用 DOM 鏡像、假日曆和 Google Voice 誘餌、機器人檢查，以及平台特定的負載，如裝置代碼釣魚和遠端存取工具，以繞過電子郵件、網路閘道與安全瀏覽控制。

**參考來源:** [Most Wanted: The Phishing Kits and Techniques Getting Past Security Controls](<https://thehackernews.com/2026/11/most-wanted-phishing-kits-and.html>) 

---

📌 **駭客利用 Mitel、Juniper、Vates 和 Danfoss 產品中的 10 個漏洞**

CISA 將 10 個正被主動利用的漏洞加入 KEV 目錄，其中包括影響 10.3 版及更早版本的五個 Mitel MiCollab 漏洞。Accenture 的 Apex Labs 披露一項 AI 輔助的數據竊取活動，攻擊者在補丁發行前一天部署 Web shell，竊取憑證，並在數小時內竊取敏感業務數據。Mitel 已提供補丁 10.3.0.18，並建議若無法套用更新，則限制 AWV 元件的外部存取。FCEB 機構必須在 2026 年 11 月 28 日前修復大部分漏洞，其中兩個的期限為 2026 年 12 月 9 日。其他被利用的漏洞還包括 Vates Xen Orchestra 身份驗證繞過（CVE-2026-133469）、Juniper Session Smart 命令注入（CVE-2026-103406），以及三個 Danfoss AK-SM 800A 系列冷藏控制器漏洞。CISA 還警告 Danfoss AK-SM 8xxA 系列漏洞 CVE-2026-129713 未修補，該漏洞為預身份驗證堆疊緩衝區溢位，可透過 Web 服務器權限遠程執行任意程式碼；Danfoss 預計將在 5.5.x 版本提供修復，並建議在此之前僅透過 VPN 進行遠端存取、啟用嚴格模式、使用強密碼，並進行網路隔離。

**參考來源:** [Hackers Exploit 10 Vulnerabilities Across Mitel, Juniper, Vates, and Danfoss Products](<https://thehackernews.com/2026/11/hackers-exploit-10-vulnerabilities.html>) 

---

📌 **每週報告：多個 Palo Alto Networks 產品漏洞**

JPCERT/CC 週報 2026-11-26 列出了 22 款產品的漏洞通告，包括多個 Palo Alto Networks 產品、Synology DiskStation Manager、Microsoft Edge、IBM Guardium Data Protection、UniFi Access Application、Ruby、Drupal 核心、Splunk、ASUS、F5、ILIAS、Firefox、Pleasanter、AutoSys Workload Automation、Google Chrome、Oracle、Atlassian、GitLab、ONLYOFFICE Docs、Apache Shiro、nginx 和 Node-RED。報告指出，Ruby 有針對字符串案例轉換期間發生堆緩衝區溢位的遠程程式碼執行概念驗證，Drupal 核心有 CVE-2026-132165 的報告利用，且未經身份驗證的 Node-RED 實例正因 CVE-2026-58115 成為惡意控制流註冊的目標。所有問題均透過更新至修復版本或套用廠商補丁來解決。

**參考來源:** [Weekly Report: 複数のPalo Alto Networks製品に脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261126.html>) 

---

📌 **13 個惡意 NuGet 套件將假 .NET 工作評估變成惡意軟體傳送陷阱**

Socket 研究人員發現 13 個偽裝成 WinUI 3 和 WPF 按鈕控制項的惡意 NuGet 套件，透過在 LaborX Web3 自由職業市場投放廣告的假 .NET 帶回家工作評估進行分發。使用這些套件建置或執行專案，會從 GitHub 下載檔案、為微軟螢幕按鍵盤（osk.exe）進行 DLL 側載，或下載並執行 Windows 可執行檔。相關的假 Axios 儲存庫偽裝成合法的 JavaScript 庫，並提供包含 C2 載入程式、Chrome 設定檔竊取程式和 Telegram 上報載荷的載荷。所有 NuGet 套件已被刪除，該活動仍未歸因，但研究人員指出與與北韓和伊朗相關的招募活動存在相似之處，儘管沒有共享指標或惡意軟體家族。

**參考來源:** [13 Malicious NuGet Packages Turn Fake .NET Job Assessments Into Malware Delivery Traps](<https://thehackernews.com/2026/11/13-malicious-nuget-packages-turn-fake.html>) 

---

📌 **McDonald's Japan App 資料庫遭駭；客戶消費記錄可能外洩**

iThome 報導，麥當勞日本於 11 月 20 日確認，官方應用程式資料庫遭到未授權第三方存取，可能洩露客戶購買記錄、IP 位址以及使用應用程式期間的行動位置資訊。公司並未披露可能資料外洩的具體時間範圍、受影響消費記錄數量，或入侵路徑。麥當勞表示，洩露的客戶 ID 單獨無法識別消費者，且不同於會員號碼與電子郵件地址；姓名、電子郵件地址、電話號碼、地址與信用卡資訊均未包含在內。至今未因潛在洩漏偵測到任何應用程式或相關服務遭入侵。iThome 指出，此事繼上月 Mos Burger 宣布一間資訊外包廠商未獲授權存取，洩露 113 萬 3000 筆預付卡記錄（含卡號、PIN 與餘額）之後發生。

**參考來源:** [日本麥當勞App資料庫被駭，用戶消費紀錄恐外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kUGhjRGlyX0s1ZFl3c2NnZU0xMkJ1TGlEWjFwYURCamE4ZVJOMmQ4TFgzNThPSUN5dldjbEZWY05MWnZ1Zzc5T1ZBTnY1UQ?oc=5>) 

---

📌 **英國 NCSC 警告 AI 輔助網路攻擊大幅增加；駭客可能在數分鐘內利用現有企業漏洞**

iThome 報導，英國國家網路安全中心（NCSC）於 11 月 24 日警告，自 9 月以來 AI 輔助網路攻擊大幅增加，影響多個行業的組織，部分事件導致服務中斷或系統遭入侵。攻擊者濫用原本用於紅隊安全測試的 AI 代理攻擊框架，包括 ARTEX、Cairn、PentAGI、RedAmon、Xalgorix 與 Darkmoon，以低成本快速且持續發動攻擊。NCSC 指出，攻擊者利用長期存在的技術債務，如程式碼儲存庫中的暴露憑證、基礎設施即代碼錯誤設定、預設登入憑證、缺失驗證以及 API 安全弱點，而非新的記憶體損壞漏洞。初始入侵後，攻擊者可能透過過度的內部存取權限與較差的網路分割進行升級。CrowdStrike 高級情報分析師 Eric Loui 在 CYBERWARCON 表示，數十個威脅行為組織越來越將攻擊決策交由 AI 代理處理，其中一場針對阿根廷醫療機構的攻擊，約在 90 分鐘內發現並利用 SQL 注入漏洞。11 月 13 日 FBI 通報指出，自 8 月至少以來，各種威脅行為組織在全球使用 ARTEX，部分攻擊從目標鎖定到取得高權限系統存取不超過三小時。先前曾受影響的台灣電子商務供應商 91APP，在其 Commerce Cloud 訂單資料庫於 10 月 22 日遭入侵後，揭露了 ARTEX 使用痕跡。歐盟委員會於 11 月 23 日確認，AI 輔助攻擊影響了歐盟學院線上學習平台，洩露外部使用者的姓名與電子郵件地址；該平台於 10 月 22 日被偵測遭入侵，隨即暫停公眾存取，並向歐洲資料保護主管通報，實際規模仍在調查中。NCSC 表示，目前的 AI 代理攻擊著重於速度而非隱匿，在服務端點產生密集請求爆發後隨之停頓，並伴隨高錯誤率，透過日誌關聯更容易偵測。NCSC 提供八項防禦建議，優先降低外部攻擊表面、檢討外部暴露的 IT 資產、加速修補、定期重新評估 IAM 設定、在底層 API 而非僅網頁介面實施機器人防護、控制新帳戶註冊速率，並使用蜜代幣與誘餌系統。NCSC 說，幾乎所有觀察到的攻擊都可藉由現有安全最佳實務、零信任架構與適當技術控制預防。

**參考來源:** [英國NCSC示警AI輔助網路攻擊顯著增加，駭客數分鐘內就可能利用企業既有資安弱點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBucmVVdXItZEpncjlKZHdhdG1wUV9CS1AwVVVVallyWDdSMmRpTVdMQlN1cWRUWi13WDBEMXVfWUJoX3YycS0xLUt3UkR5UQ?oc=5>) 

---

📌 **香樹花生與乙事製造披露安全事件；電子發票服務供應商 PayNow 的外部 API 遭異常存取，影響 500 家商家**

iThome 報導，香樹花生與乙事製造披露涉及電子發票服務供應商 PayNow 外部 API 遭異常存取的安全事件，影響 500 家商家。此篇報導僅標題；來源未提供進一步技術細節、受影響資料、時間表或客戶影響。

**參考來源:** [香帥蛋糕、一事製菓揭露資安事件，電子發票服務商PayNow對外API遭異常存取，波及500商家 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9RTm84amgxY0pncFRsR3hrMEJzZTg4N3JHalhyV1NuNGdlYnN2bXI0N0VXSHFmT0l3cFJGMVlwaDA0X0dwRE5OYlU2emt4dw?oc=5>) 

---

📌 **美國 FinCEN 遭入侵，反洗錢批次申報服務中斷**

iThome 報導指美國財政部金融犯罪執法網遭入侵，其反洗錢批次申報服務遭中斷。

**參考來源:** [美國財政部金融犯罪執法局遭入侵，反洗錢批次申報服務中斷 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02VHFpbUFxc1RNWF9MbGNmdS1rNGNQaWk4M21CM3lqMWhRdGZ5V0M5WnFxdGowMGFMbUNVblpjY3dGcXJYVHBhTGkzLUZ4dw?oc=5>) 

---

📌 **國際警方拆除 Gootloader 與其他惡意軟體基礎設施，查獲 6.4 萬萬份被竊取憑證**

iThome 報導指出國際執法機關干擾了包含 Gootloader 在內的惡意軟體基礎設施，並追回 6.4 萬萬份遭竊取憑證。

**參考來源:** [多國警方聯手瓦解Gootloader等惡意程式基礎設施，查獲640萬筆遭竊憑證 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE83aHc0eGZValJXaGx3U1J0SXNiQjNtRTJKaGw4SHUzbUs4ZGpmeWw1Qk1YeXlwZ0w4NERfOU9FWGsxN28zLUdCemRvZXFqZw?oc=5>) 

---

📌 **GeoServer 漏洞在攻擊活動中被串接利用**

iThome 報導指 GeoServer 地理資訊伺服器的漏洞正在活躍攻擊活動中被串接利用。

**參考來源:** [地理資訊伺服器GeoServer漏洞遭串連用於攻擊活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xSkp5YjRCSVc1OFlRQjRab2xVeUJjY21CZGRUVzM1ZUIxbkktaHhrdnRiVmpSeTJfSFo0T2h4bFFXZy14NThJSWd1dnF1UQ?oc=5>) 

---

📌 **WordPress 封鎖六款遭後門的外掛程式，涉及懷疑開發者帳號遭入侵**

根據 iThome，WordPress 發現六款包含後門的外掛程式後予以封鎖，原因係開發者帳號遭疑似入侵。

**參考來源:** [WordPress攔截6款遭植入後門的外掛程式，起因疑為開發者帳號遭盜用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1wTjFjT21hSDZ5NmhkTTdTMWhKTm9lMm0yRzlBa0wwWTByQmZscDAtLUxRY3VGYW5ScXFMQWpYcFQ5M0o2NG1KNy13MHljZw?oc=5>) 

---

📌 **攻擊者利用含毒工作應徵評核鎖定 .NET 開發者**

Dark Reading 報導，攻擊者正透過惡意工作應徵評核鎖定 .NET 開發者。

**參考來源:** [Attackers Target .NET Developers With Poisoned Job Assessments](<https://www.darkreading.com/threat-intelligence/attackers-net-developers-poisoned-job-assessments>) 

---

📌 **SecurityScorecard 警告被劫持的 Copeland XWEB PRO 製冷控制器被用於發送垃圾郵件與作為代理節點**

SecurityScorecard 警告，被入侵的 Copeland XWEB PRO 製冷控制器正遭濫用為垃圾郵件中繼站與代理節點，此消息引自 iThome。

**參考來源:** [SecurityScorecard示警Copeland XWEB PRO冷凍控制器遭劫持，淪為垃圾郵件與代理節點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1ORENOc28zU0Z2ZjZuRmFnellqY09iWkJFb1QyOGg1bXlwb0hCbmFlUWdaSWo2YVdpcE14U1dGZ2dYQkpQS1ZONmdCSk5hQQ?oc=5>) 

---

📌 **Palo Alto Networks 修補防火牆中已遭利用的 Linux 核心漏洞 Fragnesia**

iThome 報導，Palo Alto Networks 已針對其防火牆修補 Fragnesia，這是一個已遭利用的 Linux 核心漏洞。

**參考來源:** [Palo Alto Networks修補防火牆已遭利用的Linux核心漏洞Fragnesia - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBvaUVOcS1SS3NWd2RzRHlxNWs5NndWa2IwQ1RhVkg0dndJUmFvSWNOblFEMmNMVlM0N1ZJdm5hdTJ2MFZXZldzWGFjTGI5QQ?oc=5>) 

---

📌 **Bithumb 資料外洩範圍較先前揭露更廣**

Xakep 報導，Bithumb 資料外洩範圍比最初揭露的更廣。

**參考來源:** [Утечка данных из Bithumb оказалась обширнее, чем сообщалось ранее](<https://xakep.ru/2026/11/26/bithumb-data-leak>) 

---

📌 **賽普勒斯成為伊朗駭客的間諜攻擊目標**

Dark Reading 報導，一個先前未記錄的伊朗威脅組織 Volant Manticore 正在針對賽普勒斯組織進行間諜情報收集，服務於德黑蘭。

**參考來源:** [Cyprus Becomes Espionage Target for Iranian Hackers](<https://www.darkreading.com/cyberattacks-data-breaches/cyprus-espionage-target-iranian-hackers>) 

---

📌 **22 家全球企業的 Check Point 管理伺服器透過已知漏洞遭入侵**

iThome 報導，攻擊者利用已知漏洞入侵全球 22 家企業的 Check Point 管理伺服器，並獲得系統管理員權限。

**參考來源:** [全球22家企業組織Check Point管理伺服器被入侵，駭客利用已知漏洞取得管理員權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1mclhJZHhVQm9ZUWozM2tfWjBJajVMOVZuQmRkcWVRbklVSXB1SGZaeWRnLW5LRTh2WWp5dDRYX1d4c3Q3b3pNbVV6RzBuUQ?oc=5>) 

---

📌 **礦業公司報告透過雜湊率攔截遭竊取加密貨幣**

Xakep 報導，一家礦業公司披露透過攔截雜湊率而導致加密貨幣被竊。

**參考來源:** [Майнинговая компания сообщила о краже криптовалюты через перехват хешрейта](<https://xakep.ru/2026/11/26/braiins-hashrate-theft>) 

---

📌 **驚喜發電機：在 Kohler APM802 控制器中發現兩個遠端程式碼執行漏洞**

Xakep 報導，一名研究人員在 Kohler APM802 發電機控制器中發現兩個遠端程式碼執行漏洞。

**參考來源:** [Генератор с сюрпризом. Как я нашел две RCE-уязвимости в контроллере Kohler APM802](<https://xakep.ru/2026/11/26/apm802-hacking>) 

---

📌 **刑事警察局揭發假短劇應用程式散播 Android 特洛伊木馬，涉及超過 100 起網路銀行盜款案件**

台灣刑事警察局揭露超過 100 起與假短劇應用程式相關的網路銀行盜款事件；攻擊者濫用無障礙權限盜取存款。

**參考來源:** [網銀盜轉案逾百起，刑事局揭露偽冒短劇App散布Android木馬，歹徒濫用無障礙權限盜轉存款 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4zQ0V6MVh2QmI5bE93aWZJbFJmbjlqOWh0UUFPMDhsZG5mYzRVaUZsV0VUS2RHQTdwbDJKWlBPYjI5V2o0TThTeDRMeW9OZw?oc=5>) 

---

📌 **React Server Components 修補未經驗證的遠端程式碼執行漏洞**

iThome 報導，React Server Components 已修補一項未經驗證的遠端程式碼執行漏洞。

**參考來源:** [React Server Components修補未經身分驗證RCE漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9rWThnc3VBZER6OE13Vm5SeDlrNlBBOVh1OTRVMWVvVHRWMURWNEw4QVBBN2VwNVlTamh4RmZhUF9zRjFmVHlDQzB5MVp3QQ?oc=5>) 

---

📌 **WhatsApp 修補遭攻擊者利用的漏洞**

Xakep 報導，WhatsApp 已修補攻擊者正在主動利用的一個漏洞。

**參考來源:** [В WhatsApp исправили уязвимость, которой пользовались злоумышленники](<https://xakep.ru/2026/11/25/whatsapp-flaws>) 

---

📌 **Android 特洛伊木馬 RatHat 針對俄羅斯使用者並使用 Gemini**

Xakep 報導，Android 特洛伊木馬 RatHat 正在針對俄羅斯使用者，並使用 Gemini。

**參考來源:** [Android-троян RatHat атакует российских пользователей и использует Gemini](<https://xakep.ru/2026/11/25/rathat-russia>) 

---

📌 **Taste International 外包雲端發票平台遭未經授權存取，影響 290 人**

iThome 報導，Taste International 的外包雲端發票平台遭未經授權存取，影響 290 人。

**參考來源:** [泰味國際委外雲端發票平臺遭異常存取，290人受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBjaTA1S004YTAzZ1NyRkJBNDI4R001bkdWdzZHNXVxb3ByUFJ1OVY1ZVZuX195LUVkb0RfSTh5U2U1aUxNWXJ6RXVTdzd0Zw?oc=5>) 

---

📌 **研究人員將新勒索軟體組織 Inception 與 ShinyHunters 關聯**

Xakep 報導，研究人員已將新勒索軟體組織 Inception 與 ShinyHunters 關聯。

**參考來源:** [Исследователи связывают новую вымогательскую группу Inception с ShinyHunters](<https://xakep.ru/2026/11/26/inception-shinyhunters>) 

---

📌 **網路保險業出現新分野：擁有 AI 防禦的組織與沒有的組織**

Dark Reading 報導，網路保險業者觀察到具備成熟 AI 驅動防禦能力與未具備的組織之間正出現日益擴大的差距，此差距正影響核保決策與保費定價。

**參考來源:** [Cyber Insurers See New Divide: AI Defense 'Haves' &amp;amp; 'Have Nots'](<https://www.darkreading.com/cybersecurity-operations/cyber-insurers-see-new-ai-divide>) 

---

📌 **FBI 涉遭另起安全事件，犯罪資料庫被入侵 - iThome**

iThome 報導，FBI 涉遭另起安全事件，涉及犯罪資料庫被入侵，惟涉及範圍與歸屬細節尚未確認。

**參考來源:** [FBI疑似再發生資安事故，犯罪資料庫被駭 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5TVGFIQ29tYUZKLVlpVW1lbnNRdXlPaURlMzlMemVCLWJGTmxjQlJwakVDdG9KWDNqTDM0aGJzNkZLV1hNQ0FyaWVtN2Zrdw?oc=5>) 

---

📌 **1Password 被駭，攻擊者竊取用戶數據**

Xakep.ru 報導，1Password 遭到入侵並遭竊取用戶數據；報告未說明遭竊取數據的數量、攻擊向量，亦未說明入侵是否已受控。

**參考來源:** [1Password взломали. Хакеры похитили пользовательские данные](<https://xakep.ru/2026/11/26/1password-hacked>) 

---

📌 **這是一個機器人世界，我們僅僅是其中的居住者**

一份報告討論了目前數位環境中自動化機器人活動日益盛行及其影響力的提升。 ভেতরে

**參考來源:** [It's a Bot World. We're Just Living in It](<https://www.darkreading.com/cyber-risk/bot-world-just-living>) 

---

📌 **JPCERT/CC TSUBAME 報告溢位 (2026年7月–9月)**

JPCERT/CC 觀察到自 2026 年 7 月 6 日左右開始，源自分配給烏克蘭 IP 位址的 TCP SYN 封包增加。這部分流量中有很大比例，約 92%，源自由 ISP5HAT-MNT 管理的特定 IP 範圍，其中 94.154.43.0/24 子網路約佔觀察到的封包總數的 80%。此流量針對廣泛的目的端連接埠，包括知名連接埠以及如 10022/TCP 和 22100/TCP 等非標準連接埠，顯示出掃描或偵查活動的跡象。觀察到的模式也暗示了基於反射式阻斷服務 (DoS) 攻擊的可能性，即透過向多個裝置發送偽造的 SYN 封包，使 SYN/ACK 回應集中在目標上。雖然攻擊者的確切身分或動機尚不明確，但研究結果顯示，僅僅將服務連接埠從預設值更改是不足以防止掃描器發現的。建議組織應驗證僅將必要的服務暴露於網際網路，並使用防火牆將存取限制在授權的 IP 範圍內。

**參考來源:** [お知らせ：JPCERT/CC Eyes「TSUBAMEレポート Overflow（2026年7～9月）」](<https://blogs.jpcert.or.jp/ja/2026/11/tsubame-overflow20260709.html>) 

---

📌 **數位照護責任**

一篇文章討論了數位照護責任的概念。

**參考來源:** [數位注意義務 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxNWnlDMHVDdVBYM0s1aEpBelpONlRsRERuTFF2ejVUMGdIZjRYSGk3NEJQalhsSDc1WHhBbEZxV1dhTjNXY2d1TGhtMy0yVXQ5RmwxeVFYTXYxemNHYVlZdktMNlpYU2VGcWVobkJZRENHcmU3ZE9xZWZqR2NEa2p6SlV3UUtoNW54QXdCNEJR?oc=5>) 

---

📌 **CastleRAT**

iThome reports on CastleRAT as a headline-only item.

**參考來源:** [CastleRAT - iThome](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE1UOWxtRFkxRFFqMkE2RXlZcW9jalFsRWJtbXBiMFhpLWdnX0ZuS0NlSWZXNlJVMUhxNTFITVhmOGczMVYtWDZ6eXZ6TTlxRE5DSlE?oc=5>) 

---

📌 **Security Daily: November 26 — Copeland XWEB PRO refrigeration controller hijacked for spam sending and proxy use**

iThome reports that Copeland XWEB PRO refrigeration controllers were hijacked and used as spam email senders and proxy nodes.

**參考來源:** [【資安日報】11月26日，Copeland XWEB PRO冷凍控制器遭劫持，淪為垃圾郵件發送與代理節點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9veGd1ZXE4T2tsYmluU1pPbXZraUxpYlM2STdyRUUyVkpCTXpRUWYxT3hiUUZrcDJYS1BwWHR1dXV2V0QtbGF1X3VOZEp0dw?oc=5>) 

---

📌 **Ten vulnerabilities in Danfoss refrigeration controllers and others actively exploited**

iThome reports that ten vulnerabilities in Danfoss refrigeration controllers and related products are being actively exploited.

**參考來源:** [Danfoss冷凍控制器等10個漏洞遭到積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE82c3pEX0gwZVZOajRDSUNXRmYxTDBTRU93bkJINWU3NkdNTnZSN25uTXN4QjlLcUpaQ1A1UHJxTkFIa1htbmIzTzdoWnNxZw?oc=5>) 

---

📌 **AI-assisted cyber attacks - iThome**

iThome 報導 AI-assisted cyber attacks 為新興威脅趨勢。

**參考來源:** [AI輔助網路攻擊 - iThome](<https://news.google.com/rss/articles/CBMikAFBVV95cUxQTzkxMEk0MHNLQnhlaFZHczhnQnFQVVJBZWFDOXl5aGZpTnIwZDNHUmszaWJfRlBObXJLb0hvRXpaelY0OEpoNk1LYnBTUDh3V0FpNWp3LW1GSTBraEMySzE3OVI5R2F5ZUthbl81ZFMxVGVwb0RFZjl5ODY3X2pmRUtIMTJsalBnVjlIVHZIR20?oc=5>) 

---

📌 **Theft prevention 3-2-1 - iThome**

iThome 報導一種 3-2-1 盜竊防護方式。

**參考來源:** [防盜三二一 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxNYWYtUWRlRTJhNzFxTk9vYUFocmNvUVZRWTRicEw3dGNIY1g4WUROR2NkUjlBcklub0NLczhuaG5rYXFvbU9YRDJ5ZFpCY2NjNGdkN2dmaV9qNmlXM3JNSW52TUVqVkhfakVPaFgwbkVQYW1OTm96bEZXTkVrY3RoRDZR?oc=5>) 

---

📌 **Inventory of seven major supply chain security risks in 2027, enterprise protection scope extends from open-source software to AI models and agents - iThome**

iThome 報導預計於 2027 年出現的七項主要供應鏈安全風險，涵蓋開放原始碼軟體、AI 模型及 AI 代理。

**參考來源:** [盤點2027年七大供應鏈資安風險，企業防護範圍從開源軟體擴及AI模型與代理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1oOURzUzlqemNBNnZFeXBoSnlBSndLa3hhdzE1NW1meGlScXhSRzUtNmM0NGFHbVNrbHRLY0EyZmE4OU1GQUlobnAydHF3QQ?oc=5>) 

---

📌 **將「相同行為」轉化為可驗證的事項**

iT 邦幫忙報導如何定義行為，使其能接受檢查。

**參考來源:** [先把「行為一樣」寫成可以檢查的事情 - iT 邦幫忙](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5SVkplMUhSanZjaEFvVC1WZllYWm9ad1hBa3Y0dGdEMVF4dnNFcTNvOFZCOEdLSEpfQUE2T280ekhmT3JHOGh0cDFhR0FCb1JkMEh0Wk9Zc1llVDhNR2RadEtNajhqdU0?oc=5>) 

---

📌 **攻擊面**

iThome 報導攻擊面。

**參考來源:** [攻擊面 - iThome](<https://news.google.com/rss/articles/CBMiakFVX3lxTE1Ya0JHY25XZ0JYX2x0RzhnRTdoaGNZblp2RU5MTzFXUHdGa2JpUGtqaGVBNkNhR1lHYmlGWGk3LVdVT3paUXBDa2FKUkdaSGFoMmhHTDZIQXlHY3BkZGc5dnFUVHpOYjZTZVE?oc=5>) 

---

📌 **Smashing Security 播客 #494：在星巴克從事對 Palantir 間諜活動的俄羅斯人**

Graham Cluley 的 Smashing Security 播客 #494 報導該俄羅斯人被控從星巴克間諜 Palantir 一事。

**參考來源:** [Smashing Security podcast #494: The Russian accused of spying on Palantir from Starbucks](<https://grahamcluley.com/smashing-security-podcast-494>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261126-1-1795711296094 -->
