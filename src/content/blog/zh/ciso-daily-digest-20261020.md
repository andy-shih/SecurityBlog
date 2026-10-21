---
title: "CISO 每日摘要：Zeabur 再遭入侵，宣佈在 321 萬個環境變數洩露後於年底關閉 (20261020)"
description: "Zeabur 遭遇重大入侵，超過 321 萬個環境變數洩露並將於年底關閉，而 Citizen Lab 確認 Pegasus 間諜軟體透過零點擊式漏洞利用感染塞爾維亞校長的 iPhone，時間在選舉前，擴大了針對公民社會的攻擊活動。"
pubDate: 2026-10-20
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Zeabur 再遭入侵，宣佈在 321 萬個環境變數洩露後於年底關閉

雲端平台 Zeabur 披露第二起安全事件，並宣佈將於今年底停止運營。此次入侵導致超過 321 萬個環境變數遭未授權存取，這些變數常包含敏感憑證，如 API 金鑰、資料庫密碼與驗證權杖。

該公司報告指出，原定於 8 月完成的憑證輪替並未完成，這一疏忽可能促成了入侵或擴大了其影響。暴露的環境變數構成直接供應鏈風險，因為攻擊者可能利用這些變數，直接進入客戶在平台上託管的項目所連接的下游應用程式、資料庫與第三方服務。

Zeabur 勸告所有使用者立即輪替服務中儲存的每一個密鑰，並審查存取日誌以查找異常活動。關閉時間表增加了緊迫性，客戶必須遷移工作負載，並確保生產環境中不存在長期有效的憑證。

### 對 CISO 的影響

- **立即輪替密鑰與供應鏈審計 —** 將 Zeabur 中儲存的所有密鑰視為已遭入侵；強制在每個連接的服務中自動輪替 API 金鑰、資料庫憑證與權杖，並在平台關閉前掃描依賴關係圖以尋找橫向存取路徑。
- **加速遷移與停用 —** 優先將工作負載從 Zeabur 遷移並設定最後期限，驗證生產環境中不存在長期有效憑證，並為替換平台實作短期、限定範圍的密鑰以限制影響範圍。
- **監控憑證重複使用與濫用 —** 對消耗 Zeabur 儲存之密鑰的服務部署憑證填充檢測與驗證日誌異常監控，因為洩露的變數能讓攻擊者直接進入下游系統並進行未授權存取。

**參考來源:** [Zeabur再遭駭宣布年底停運，逾321萬筆環境變數遭讀取、8月憑證未完成輪替 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84VDZoeVdiTjM0UVRiUXVBMHVpOHNNazRKVFdfRDF0Q3R5bHNVTW1OOF9LRkE4dkNkXzJZRWpYRnV0Q09TNXlmZEVsZzA1Zw?oc=5>)

---

## 本週活躍威脅

📌 **俄羅斯 APT28 入侵北約國家海軍造船商，部署新型反射式載入程式**

俄羅斯 APT28 被指與針對北約（NATO）兩個成員國的攻擊有關，包括一家海軍造船商與一家軍用航空發動機製造商。由 Symantec 威脅獵人團隊以「Swallowtail」代號追蹤的活動集群，涉及使用名為 HOOKEDGE 的後門，以及一個先前未記載的載入程式，該載入程式在記憶體中解密並執行加密載荷，使用在執行時提供的加密金鑰。在一次針對海軍造船商的攻擊中，操作者在一週內反覆返回受入侵的主機，疑似為手動鍵盤操作活動，使用兩種獨立技術竊取憑證資料，進入組織內部網路的持續 SSH 隧道，並部署一個先前未記載的反射式載入程式。

**參考來源:** [Russian APT28 Breaches NATO Naval Shipbuilder in NATO Country, Deploys New Reflective Loader](<https://thehackernews.com/2026/10/russian-apt28-breaches-nato-naval.html>) 

---

📌 **Pegasus 間諜軟體在塞爾維亞大學校長 iPhone 上獲確認，時間早於選舉**

Citizen Lab 高度確信，塞爾維亞貝爾格勒大學校長 Vladan Đokić 的 iPhone 在 2026 年透過零點擊式漏洞利用感染了 NSO Group 的 Pegasus 間諜軟體，時間為塞爾維亞提前議會選舉前六天；另一起涉及高調貪腐案件檢察官的案例收到了 Apple 威脅通知，但感染仍未確認，使得今年塞爾維亞公開已知的被針對個體總數至少達 16 人。

**參考來源:** [Pegasus Spyware Infection Confirmed on Serbian University Rector's iPhone Days Before Election](<https://thehackernews.com/2026/10/pegasus-spyware-infection-confirmed-on.html>) 

---

📌 **熱門 WordPress SEO 外掛 Rank Math PRO 被劫持以投遞自我修復後門**

在 2026 年 10 月 15 日 20:02 UTC 至 10 月 16 日 07:12 UTC 之間下載或更新的 Rank Math PRO 受損版本包含自我修復後門，受影響網站應視為已遭入侵。乾淨版本 3.0.124 已釋出，但重新安裝無法移除惡意軟體可能已放置的惡意檔案、管理員帳號、排程工作或 SSH 金鑰。惡意軟體可能在外掛、主題和 must-use 外掛目錄留下 PHP 後門檔案；建立偽造的 WordPress 核心檔案；修改 .htaccess 以將 .cache 檔案作為 PHP 執行；並暴露任何可觸及的密碼、資料庫憑證、API 金鑰及其他祕密。復原需要從 10 月 15 日前的備份還原、更換所有憑證，然後才安裝 3.0.124；若無乾淨備份，管理員必須刪除 rank-math-pro 資料夾、移除特定 wp\_options 項目、封鎖對 rank1cdn\[.\]com 的外送連線，再搜尋其他痕跡後才重新安裝乾淨外掛。

**參考來源:** [Popular WordPress SEO Plugin Rank Math PRO Hijacked to Deliver Self-Restoring Backdoor](<https://thehackernews.com/2026/10/popular-wordpress-seo-plugin-rank-math.html>) 

---

📌 **ClickFix 攻擊者利用 Siemens 軟體中心漏洞部署遠端存取木馬**

攻擊者利用 Siemens 軟體中心的 DLL 側載漏洞，該漏洞編號為 CVE-2026-110936，CVSS v4 評分為 8.4，使用應用程式的合法簽署副本與惡意 archive.dll 以應用程式權限執行程式碼。ClickFix 交付平台 Romulus 用於傳遞 Legion Loader 與其他惡意軟體，包括利用惡意 ChatGPT Custom GPTs 誘使受害者複製並執行 PowerShell，以部署 MSI 安裝程式的活動，該安裝程式濫用 DLL 側載部署遠端存取木馬。Siemens 已在版本 4.0.9.8 修補此問題，並建議組織進行更新、封鎖相關指標，包括 96.62.218\[.\]59、wizardexpensive\[.\]com、以及 2.27.248\[.\]127，並監控 SiemensSoftwareCenter.exe 從 AppData\\Local\\Programs 執行且由 msiexec.exe 啟動的情況。

**參考來源:** [ClickFix Attackers Exploit Siemens Software Center Flaw to Deploy Remote Access Trojan](<https://thehackernews.com/2026/10/clickfix-attackers-exploit-siemens.html>) 

---

📌 **警察逮捕正在度假的 Qilin 勒索軟體嫌疑人，並與導致患者死亡的 Synnovis 黑客攻擊相關聯**

Bitdefender 报告，警方逮捕了一名正在度假的 Qilin 勒索軟體嫌疑人，該組織與導致一名患者死亡的 Synnovis 黑客攻擊有關。

**參考來源:** [Police arrest Qilin ransomware suspect on holiday, as links made to Synnovis hack that contributed to patient’s death](<https://www.bitdefender.com/en-us/blog/hotforsecurity/qilin-ransomware-arrested-synnovis-patient-death>) 

---

📌 **駭客利用 Plex2Shell 漏洞安裝加密幣挖礦程式和 Linux 代理後門**

《駭客新聞》報導，威脅行為者正在利用四個 Plex Media Server 漏洞，統稱為 Plex2Shell（CVE-2026-96652、CVE-2026-96654、CVE-2026-96655、CVE-2026-96656），在概念驗證程式碼公開一週後實現未經驗證的遠端程式碼執行。該鏈部署了 XMRig 挖礦程式和名為 myawesomeproxy 的 Linux 後門，利用企圖來源 IP 位址包括 91.92.40\[.\]202 和 176.65.139\[.\]228。Plex 於 2026 年 8 月 3 日在媒體伺服器 1.43.3.10861 中修補了這些漏洞，建議使用者更新。

**參考來源:** [Hackers Exploit Plex2Shell Flaws to Install Crypto Miners and Linux Proxy Backdoor](<https://thehackernews.com/2026/10/hackers-exploit-plex2shell-flaws-to.html>) 

---

📌 **AdFection 將廣告展示次數轉換為零點擊間諜軟體傳遞機制**

《暗讀報》報導，AdFection 活動將線上廣告展示次數轉換為零點擊間諜軟體傳遞機制。

**參考來源:** ['AdFection' Turns Ad Impressions Into Zero-Click Spyware Delivery](<https://www.darkreading.com/data-privacy/adfection-online-ads-spyware-delivery>) 

---

📌 **Broadcom Wi-Fi 晶片含有未修補的 WPSplinter 漏洞，攻擊者可在無需密碼的情況下獲取路由器根目錄權限**

iThome 報導指出，Broadcom Wi-Fi 晶片包含一個未修補的 WPSplinter 漏洞，使攻擊者能在不需要密碼的情況下取得路由器根目錄權限。

**參考來源:** [Broadcom Wi-Fi晶片存在未修補的WPSplinter漏洞，攻擊者無須密碼即可取得路由器root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBaZjdHUnRGbnFUWFVLTnotSjVFSUdrZXlVbWZfWTlfNUJwYmliSENiUWNDVnRtQThxaEhzNVRtUVk2RV9sRXhvakxBWi11UQ?oc=5>) 

---

📌 **駭客劫持五個 OVHcloud CLI 版本散布竊密惡意軟體**

《駭客新聞》報導，駭客攻陷一名貢獻者的 GitHub 帳戶，並替換了 2026 年 4 月 14 日至 9 月 16 日期間發布的五個 OVHcloud 命令列介面發行版的下載封存。惡意構建版於 10 月 19 日在 GitHub 上線長達 94 分鐘（12:47 至 14:21 UTC），旨在竊取執行該程式之任何機器上儲存的密鑰。OVHcloud 已刪除遭替換的封存，發布不可變更的乾淨 v0.16.0 版本，並啟用發行版不可變更性。執行過被替換構建版的使用者，應將受影響機器上所有密鑰視為已外洩，並從不同機器輪換密鑰、移除二進位檔，並安裝 v0.16.0 版本。

**參考來源:** [Hackers Hijack Five OVHcloud CLI Releases to Distribute Secret-Stealing Malware](<https://thehackernews.com/2026/10/hackers-hijack-five-ovhcloud-cli.html>) 

---

📌 **OnlyFans 著作權下架要求揭露受損網站**

Dark Reading 報導，OnlyFans 與其他成人內容創作者提出的著作權下架要求，顯示攻擊者如何利用易受攻擊的大學與政府網站操縱搜尋結果並散佈未授權內容，此為 UpGuard 研究總監 Greg Pollock 所指出。

**參考來源:** [OnlyFans Copyright Takedowns Expose Compromised Websites](<https://www.darkreading.com/vulnerabilities-threats/onlyfans-copyright-takedowns-expose-compromised-websites>) 

---

📌 **研究人員滲透微軟技術支援詐騙集團**

Dark Reading 報導研究人員滲透了一個微軟技術支援詐騙集團。僅標題的來源未提供技術細節、受害範圍、被害影響或緩解建議。

**參考來源:** [Researchers Infiltrate Microsoft Tech Support Scam Operation](<https://www.darkreading.com/threat-intelligence/microsoft-tech-support-scam-operation>) 

---

📌 **日本《日本經濟新聞》（Nikkei）與阪急阪神百貨公司遭駭，超過一百萬人個人資料外洩**

iThome報導，日本《日本經濟新聞》與阪急阪神百貨公司均遭入侵，兩起事件各自導致超過一百萬人的個人資料外洩。來源未說明攻擊手法、兩起事件是否相關，亦未說明除資料外洩人數外的具體客戶影響。

**參考來源:** [日本經濟新聞、阪急阪神百貨相繼遭駭，皆外洩個資超過百萬 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9oY2U5bmQ2SGJxV2NnUjRUQnJGVHdlS2NpMTN2cnF2RTU3M21XZmpJMFFkSHBYUVZidGZiTVBCZTNyeVVXemNfWVFKZGVRQQ?oc=5>) 

---

📌 **駭客使用新的 ROMULUS ClickFix 平台傳播 LegionLoader 與其他惡意軟體**

The Hacker News 報導，Forescout Research - Vedere Labs 披露 ROMULUS ClickFix 傳播平台，該平台用於散布包括 Legion Loader 在內的惡意軟體。偽造登陸頁面誘騙使用者執行惡意指令，下載遭植入惡意程式的 MSI 安裝程式，或下載加密封存檔，其中包含為規避分析而藉填充使體積膨脹至接近 1 GB 的 Legion Loader。Forescout 辨識出六個存放 ROMULUS 控制面板的 IP 位址。其中一個 IP 位址 96.62.224\[.\]81，先前曾與惡意 ChatGPT Custom GPTs 有關聯，該等 GPTs 將受害者引導至 ClickFix 誘餌。另一條攻擊鏈使用 ClickFix 執行 PowerShell，隨後傳送 Legion Loader，該載具亦稱為 Satacom downloader、CurlyGate 和 RobotDropper。報告指出 ROMULUS 的操作者身份不明，且與與 Silver Fox (TA4922) 相關聯的 RomulusLoader 沒有重疊。建議的威脅搜捕重點在於可疑 PowerShell 指令和 DLL 側載事件。

**參考來源:** [Hackers Use New ROMULUS ClickFix Platform to Deliver LegionLoader and Other Malware](<https://thehackernews.com/2026/10/romulus-clickfix-platform-tricks-users.html>) 

---

📌 **SiteGuard WAF 命令注入漏洞遭利用，攻擊者可取得伺服器最高權限 - iThome**

iThome 報導，SiteGuard WAF 命令注入漏洞正被利用，攻擊者可取得伺服器最高權限。

**參考來源:** [SiteGuard WAF命令注入漏洞遭利用，駭客可取得伺服器最高權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mT01GWEpucEtuaG9GSG5tSlRvR1k0OW9fNUtyc0cxS09TR092US02YTZpOTB0c0NFZGZCNnN2Qm5ua3hON0M1Yy1wTUhJUQ?oc=5>) 

---

📌 **Go 發行緊急更新，封鎖八個 CA 金鑰，原因係未公開安全疑慮**

於 10 月 20 日在 URGENT 追蹤下發行的 Go 1.27.3 和 Go 1.26.10，導致 Go 憑證驗證器拒絕通過八個未具名中介 CA 金鑰的憑證鏈，原因為特定安全疑慮。這八個被封鎖的中介憑證與 eMudhra 的 emSign Root TLS CA - G3 和 emSign Root CS CA - G3 雜湊值相符，涵蓋發行給 eMudhra BV 和 eMudhra Inc. 的六個 TLS 中介和兩個代碼簽署中介。此過濾器適用於 Go 驗證器、macOS 和 Windows 作業系統路徑，甚至私人信任存放區，會回傳 x509: no valid chains built，且無法停用。Go 未說明是主動利用攻擊或生態系統完整性促成 URGENT 回應，且受影響網站在重建的 Go 用戶端能連線前，需要來自不同中介的憑證。

**參考來源:** [Go Issues Emergency Update Blocking Eight CA Keys Over Undisclosed Security Concerns](<https://thehackernews.com/2026/10/go-issues-emergency-update-blocking.html>) 

---

📌 **Android 銀行木馬 Hirudo 以惡意版本取代銀行應用程式**

Xakep 報導，Android 木馬 Hirudo 以惡意版本取代合法銀行應用程式。

**參考來源:** [Android-троян Hirudo подменяет банковские приложения вредоносными версиями](<https://xakep.ru/2026/10/19/hirudo>) 

---

📌 **媒體報導數據吸納者駭客組織成員被捕，涉及攻擊多多披薩和Tez Tour**

俄羅斯媒體報導，數據吸納者駭客組織的成員已在多多披薩和Tez Tour遭受攻擊後被拘留。

**參考來源:** [СМИ: задержаны участники хак-группы DataSuckers, атаковавшей «Додо Пицца» и Tez Tour](<https://xakep.ru/2026/10/19/datasuckers-arrests>) 

---

📌 **AWS測試AI代理自動尋找並利用漏洞；37個CVE中有33個成功被利用 - iThome**

iThome報導，AWS測試旨在自動探索並利用漏洞的AI代理，成功利用37個CVE中的33個。

**參考來源:** [AWS測試AI代理自主尋找及利用漏洞，37項CVE有33項成功 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ETEJZOVNGRFpQYV9TTjZkRGdQMlhTOExWTHRhMV9ncmZVOWg1dkVPR2xTT2V6RUtZcmNOM20xVmhjVGtmQzhwdk82MUpwdw?oc=5>) 

---

📌 **駭客濫用AI滲透測試工具Cairn自動化大規模攻擊活動 - Dark Reading**

Dark Reading報導，攻擊者正濫用AI滲透測試工具Cairn來自動化大規模攻擊活動。

**參考來源:** [Hackers Abuse AI Pen-Test Tool Cairn to Automate Massive Attack Spree](<https://www.darkreading.com/cyberattacks-data-breaches/hackers-abuse-ai-pen-test-tool-cairn>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261020-8-1792588900610 -->
