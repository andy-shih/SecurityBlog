---
title: "CISO 每日摘要：攻擊者正積極利用 WordPress 核心 RCE 漏洞 (20261110)"
description: "CISA 已將 4 個遭到積極利用的漏洞加入其 KEV 目錄，包括 OpenSSH SSHole、GPUStack、FreeSWITCH 與 IBM Aspera Faspex，同時 WordPress 核心與 Chrome 157 亦面臨積極利用或需要緊急修補。"
pubDate: 2026-11-10
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 攻擊者正積極利用 WordPress 核心 RCE 漏洞

CVE-2026-119977 為 WordPress 核心中一個遭到積極利用的遠端程式碼執行漏洞。CISA 已證實攻擊者在軟體升級期間利用該漏洞。此僅有標題的報導中未提供修補程式細節或受影響版本。

執行 WordPress 的客戶應將此問題視為緊急事件，並在套用更新前等待官方公告。升級期間的漏洞利用情境顯示，升級程序可能會帶來風險暴露。

資安團隊應監控 CISA 與 WordPress 資安管道以獲取已確認的緩解措施，並避免在沒有原廠指引的情況下認定現有安裝環境是安全的。

### 📌對 CISO 的影響

- **優先為 4 個遭到積極利用的漏洞套用 CISA KEV 修補程式 —** 套用針對 CVE-2026-123218、CVE-2026-116779、CVE-2026-123158 與 CVE-2026-102895 的原廠修補程式，建議 FCEB 機構於 2026 年 11 月 12 日前完成修復。
- **調查 OpenSSH SSHole 的利用後威脅指標 —** 檢視 SSH 記錄檔以清查與 SSHole 漏洞相關的偵察、雲端中繼資料查詢、密碼雜湊與 root 金鑰存取、authorized\_keys 變更以及 TAC Agent 部署情況。
- **將 WordPress 核心 RCE 與 Chrome 157 修補視為緊急事項 —** 鑑於已確認存在積極利用，請監控 CISA 與原廠公告以獲取 WordPress CVE-2026-119977 緩解措施，並於完成測試後立即部署 Chrome 157。

**參考來源:** [RCE-уязвимость в ядре WordPress активно эксплуатируют злоумышленники](<https://xakep.ru/2026/11/09/cve-2026-119977>)

---

## 本週活躍威脅

📌 **Google 發布 Chrome 157 更新修補已遭利用的資安漏洞**

iThome 報導 Google 發布了 Chrome 157，以修補已在野外遭到利用的資安漏洞。此僅有標題的報導中並未包含 CVE 識別碼、受影響元件或漏洞利用細節。

**參考來源:** [Google發布Chrome 157更新，修補已遭利用的資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9pLWx3VTl4T3hpRW13aTV4NDJtazdxZ2hfMG9oNnBPSXFhNFY4cVJpcG5LanJtTWRJVnhtZm85RlVOSEg0S2lsV0tLaVdDUQ?oc=5>) 

---

📌 **CISA 警告 OpenSSH、GPUStack、FreeSWITCH 與 IBM 漏洞正遭到積極利用**

CISA 將 4 個遭到積極利用的漏洞加入其 KEV 目錄：IBM Aspera Faspex 中的 CVE-2026-123218（CVSS 9.8）、SignalWire FreeSwitch 中的 CVE-2026-116779（CVSS 9.8）、OpenBSD OpenSSH 中的 CVE-2026-123158 SSHole（CVSS 8.1），以及 GPUStack 中的 CVE-2026-102895（CVSS 9.8）。Faspex 與 OpenSSH 的修補程式已於 2026 年 11 月發布，FreeSwitch 於 2026 年 10 月發布，GPUStack 則於 2026 年 7 月發布。自 11 月 6 日以來，已觀察到來自 14 個獨立 IP 的 SSHole 漏洞利用嘗試，並確認有來自 6 個來源 IP 的利用後活動，涉及偵察、雲端中繼資料查詢、密碼雜湊與 root SSH 金鑰存取嘗試，以及 authorized\_keys 修改。一名威脅行動者部署了基於 Python 的 TAC Agent C2 工具，watchTowr 亦通報 OpenSSH 漏洞遭利用於殭屍網路與加密貨幣挖礦。FCEB 機構被指示於 2026 年 11 月 12 日前套用修補程式。

**參考來源:** [CISA Warns of Active Exploitation of OpenSSH, GPUStack, FreeSWITCH, and IBM Flaws](<https://thehackernews.com/2026/11/cisa-warns-of-active-exploitation-of.html>) 

---

📌 **Google 修補遭在野利用之高風險 Chrome 零日漏洞**

Google 已發布安全性更新修補 Chrome 中的 9 個漏洞，其中特別修補了 CVE-2026-125350。這是一個位於 XML 元件中且已在野外遭到積極利用的高風險釋放後使用（use-after-free）漏洞。利用此類記憶體管理問題可能導致資料毀損、應用程式崩潰或任意程式碼執行，但 Google 在多數使用者完成修補之前，已限制存取具體的錯誤與利用細節。本次更新代表 Google 在 2026 年修補的第 8 個遭積極利用之 Chrome 零日漏洞，修復版本為適用於 Windows 與 macOS 的 157.0.8103.50/.51，以及適用於 Linux 的 157.0.8103.50，促使管理員加快在 Chrome 與 Chromium 架構部署中推動瀏覽器更新。

**參考來源:** [Google Issues Chrome Security Update for Eighth Actively Exploited Zero-Day of 2026](<https://thehackernews.com/2026/11/google-issues-chrome-security-update.html>) 

---

📌 **多個零日漏洞揭露後 N-able 將託管之 N-central 離線處理**

在獨立研究人員 Sean Bales 公布超過 30 個被稱為 Able2Shell 的零日漏洞細節與概念驗證攻擊程式碼後，N-able 已暫時將其全球代管的 N-central 傳統環境離線，並建議內部部署（on-premises）客戶關閉其伺服器。這些漏洞影響 N-central Appliance 2026.4.0.31，涉及遠端程式碼執行、憑證洩漏、任意檔案寫入以及目錄遍歷等缺陷，可能導致未授權的管理存取或取得 root 權限執行。雖然 N-able 表示目前尚無證據顯示有客戶成功遭入侵，但 watchTowr 的研究人員回報在漏洞揭露後有針對蜜罐的利用嘗試，N-able 亦承認在準備熱修復程式期間，已發現與公開利用程式相符的掃描活動。

**參考來源:** [N-able Takes N-central Cloud Offline After Researcher Discloses 33 Zero-Days with PoC Exploits](<https://thehackernews.com/2026/11/n-able-takes-hosted-n-central-offline.html>) 

---

📌 **漏洞揭露後 N-able 關閉 N-central 雲端服務並強烈建議關閉內部部署設備**

在超過 30 個零日漏洞公開揭露後，N-able 已將其全球託管的 N-central 雲端基礎架構離線，並建議內部部署的組織關閉暴露的伺服器。這些緊急措施旨在因應受影響環境中的資安風險，同時修補程式仍在開發中，這要求管理 N-central 部署的管理員暫停內部部署實例並驗證暴露風險控制措施。

**參考來源:** [N-able遭揭露逾30個零時差漏洞，緊急關閉全球N-central雲端服務，要求本地建置客戶停機 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE00Z3dZZ2RmeWZiUUljZklPZTFac2Q3TzgycUVpY1BYUGtaOEdqbFNja25iOTk3ZXJ3RGZaNjd5UTctQzNMclAxbGM5Tlk1QQ?oc=5>) 

---

📌 **法國指責IRGC沙希德卡維單位實施零售冷凍設備破壞行動**

法國政府指認，一名位於伊朗伊斯蘭革命衛隊（IRGC）內的網路單位「沙希德卡維」（Shahid Kaveh），對十月針對遠端冷凍控制器進行的網路攻擊負責，受害地點約為國內700家零售據點。威脅行動者透過暴露的網頁介面存取Danfoss與Dixell控制器，停用安全警報並發動連續除霜循環，導致廣泛食物變質，並在主要超市連鎖、食品工廠與屠宰場引發至少15起火災。攻擊基礎設施亦被觀察到對部署於區域水力發電設施的施耐德電氣（Schneider Electric）設備進行偵察。由巴黎檢察官辦公室領導的法國當局已啟動司法程序，並請求發布國際逮捕令，而CERT-FR則建議營運者立即將受影響控制器從公共網際網路移除、將系統恢復至乾淨狀態，並透過安全VPN實施嚴格網路隔離。

**參考來源:** [France Blames Iran for Sabotage Attack on Refrigeration Controllers at About 700 Retail Sites](<https://thehackernews.com/2026/11/france-blames-iran-for-sabotage-attack.html>) 

---

📌 **SAP釋出核心組件四個最高嚴重度漏洞的修復程式**

SAP發布安全更新，修補四個嚴重程度達最高CVSS評分10.0的漏洞，這些漏洞均不需要使用者互動或事先驗證。兩個漏洞——網際網路通訊管理員（ICM）中的CVE-2026-76964，以及SAP Web Dispatcher中的CVE-2026-89126——源自WebSocket訊息重組期間的共同記憶體損壞錯誤，可使攻擊者取得作業系統層級權限的遠端程式碼執行權。此外，CVE-2026-89103允許外部攻擊者繞過SAP Gateway的存取控制，並偽裝成可信任內部應用程式伺服器來執行命令；而SAML 2.0服務提供者中的CVE-2026-120017則因缺乏斷言簽章驗證，允許身份驗證繞過並冒充任意特權使用者。研究人員確認概念驗證程式碼已提供給廠商，並未發現活躍利用，惟組織建議優先修補核心、閘道與分派程式，並嚴格強化代理存取控制。

**參考來源:** [SAP Patches Four CVSS 10.0 Flaws, Including Two Enabling Remote Code Execution](<https://thehackernews.com/2026/11/sap-patches-four-cvss-100-flaws.html>) 

---

📌 **Ethersphere發行管線遭入侵，散布惡意套件**

根據iThome報導，Ethersphere的發行管線遭到入侵，導致經過官方分發管道散布的bee-js程式庫與Swarm Desktop遭植入後門程式碼。使用Ethersphere開發相依套件或Swarm客戶端軟體的組織應審核部署管線，驗證套件簽章與完整性雜湊是否與經過驗證的發布版本相符，並在受影響的建置環境確認清淨前將其隔離。

**參考來源:** [Ethersphere發布流程遭入侵，惡意版bee-js與Swarm Desktop經官方管道散布 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5CeENfaHFkRHRVVTJNMWROMkRpVERBNklRQ2l5bkdLWGt1UXBxbEZCUjFVUkhoUDNBSGhTaHhpVjI0V1dmS2oySTZkZ2lodw?oc=5>) 

---

📌 **Bitter 駭客部署新型 PapRAT 後門，發動針對南亞的網路間諜活動**

Bitter（亦稱為 APT-C-08、APT-Q-37、Hazy Tiger、Orange Yali、T-APT-17 和 TA397）針對南亞組織，部署名為 PapRAT 的新型遠端存取木馬，提供 C++ 與 Rust 兩種變種。感染鏈使用濫用 ftp.exe 的 LNK 檔案、攜帶誘餌 Excel 試算表與 MSI 安裝程式的 VHDX 映像，以及透過 WebDAB 從遠端擷取 LNK 檔案的 URL 捷徑。功能包括指令執行、檔案上傳與下載、刪除、目錄與磁碟機列舉、擷取螢幕截圖，且 Rust 變種支援 PowerShell 執行。竊取的資料儲存為 abc.pdf，並透過 curl 傳輸至 goodnfortunes\[.\]com，第二個指令碼則從 techtalkhelp\[.\]com 擷取 talk.log。透過 MSI 傳遞的版本支援遠端 shell 存取、目錄列舉、檔案刪除、任意執行、磁碟機列舉、螢幕截圖、上傳至 rivingtonclarks\[.\]com 以及下載；Rust 變種另外新增 PowerShell 執行、睡眠輪詢與程序終止。第三條鏈同時投放 WmRAT 與 PapRAT。Fortinet FortiGuard Labs 指出，該威脅行為者持續改良其自製工具組以維持存取權。

**參考來源:** [Bitter Hackers Deploy New PapRAT Backdoor in Cyberespionage Campaign Targeting South Asia](<https://thehackernews.com/2026/11/bitter-hackers-deploy-new-paprat.html>) 

---

📌 **近 1000 台 Zyxel 交換器透過未修補的漏洞遭入侵**

俄語報導指出，近 1000 台 ZyXEL 交換器透過修補程式無法防護的漏洞遭入侵。標題性來源未提供漏洞詳細資訊、漏洞識別碼、受影響機型或利用細節。

**參考來源:** [Почти 1000 коммутаторов Zyxel взломаны через уязвимость, от которой не защищал патч](<https://xakep.ru/2026/11/09/zyxel-attacks-2>) 

---

📌 **駭客入侵 Ethersphere 的 bee-js 與 Swarm Desktop，散播盜取錢包惡意程式**

攻擊者利用 Ethersphere 自身的發行自動化，釋出惡意版本 bee-js 13.3.0 與 Swarm Desktop 0.56.2，針對 Swarm 去中心化儲存網路。這兩個版本均下載並執行旨在從 config.yaml 竊取 Swarm 節點錢包密鑰與純文字密碼的程式碼，進而盜取 xDAI 與 xBZZ 權杖、支票簿資金及質押。程式碼亦安裝跨平台後門：Linux 與 macOS 上的 evjawbreaker，以及具備 UAC 繞過與 Defender 排除的已簽署 ConnectWise ScreenConnect 客戶端（Windows）。移除這兩個版本無法保護已竊取的密鑰或資金；撰寫本文時尚未發現被盜案例。bee-js 13.3.0 在 npm 上約發佈 75 分鐘，約有 10 次下載；Swarm Desktop 0.56.2 至 08:27 UTC 計有 65 次下載。惡意發行版已撤回並以乾淨的 Swarm Desktop 0.56.3 取代；使用者應將受影響系統視為完全遭入侵，並從乾淨電腦輪換憑證。

**參考來源:** [Hackers Compromise Ethersphere's bee-js and Swarm Desktop to Deliver Wallet-Stealing Malware](<https://thehackernews.com/2026/11/hackers-compromise-etherspheres-bee-js.html>) 

---

📌 **駭客已將 SSHole 漏洞武器化**

來自 Xakep 的俄語報導指出，駭客已將 SSHole 漏洞武器化。

**參考來源:** [Уязвимость SSHole уже взяли на вооружение хакеры](<https://xakep.ru/2026/11/10/sshole-attacks>) 

---

📌 **Apple 修補 iMessage 群組聊天隱私缺陷與藍牙配對漏洞**

Apple 發布更新修補了兩個 iMessage 缺陷（CVE-2026-113961 與 CVE-2026-113960），這些缺陷可能允許遠端攻擊者加入群組聊天並接收其訊息，或存取在他們加入前發送的訊息。更新還解決了 Brotli 解碼器缺陷 CVE-2026-111497，這是一個可能損毀記憶體的越界寫入漏洞。CISA 於 10 月 27 日將該 Brotli 缺陷加入其已知被利用漏洞目錄中，儘管 Apple 的說明中並未提及針對該漏洞的攻擊。相關修補程式已包含在 iOS 和 iPadOS 27.2.1 中，而 iOS 18.7.12 和 watchOS 26.6.1 的說明列出了其他安全性修補，但未包含這三個漏洞。Apple 並未說明是否有任何一個 iMessage 缺陷已被利用、攻擊者需要何種條件、群組成員是否會看到有人以這種方式加入，或者是否每位成員都必須進行更新。所有九個更新還修補了藍牙和 AirPlay 缺陷，其中包括兩個允許在未經使用者互動下進行配對的漏洞，以及兩個允許繞過配對碼嘗試次數限制的漏洞。

**參考來源:** [Apple Patches iMessage Group Chat Privacy Flaws and Bluetooth Pairing Vulnerabilities](<https://thehackernews.com/2026/11/apple-patches-imessage-group-chat.html>) 

---

📌 **SonicWall 修補 SSL-VPN 身分驗證繞過漏洞，廠商警告其可能遭利用 - iThome**

iThome 報導指出，SonicWall 修補了一個 SSL-VPN 身分驗證繞過漏洞，並警告其可能已被利用。

**參考來源:** [SonicWall修補SSL-VPN身分驗證繞過漏洞，原廠示警可能遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GaHpLS0VXdHVMWjk4eXppcWMwVUlrRnRqamc4OGNLbnVEb190b0czSngtR2VVY0E2VzlSMmd2TGw0M2J3cWRod2Q5QVBPUQ?oc=5>) 

---

📌 **攻擊者利用 Claude 漏洞在 Linux 上執行惡意程式碼**

據報導，威脅分子正利用與 Claude 相關的「Office Party」漏洞，在 Linux 系統上執行任意惡意程式碼。在 Linux 上運行相關 Claude 整合或環境的組織應審查相關軟體元件、限制執行權限，並監控系統是否有異常程序行為。

**參考來源:** [Attackers Crash Claude's 'Office Party' Flaw to Run Malicious Code on Linux](<https://www.darkreading.com/endpoint-security/attackers-claude-office-party-flaw-malicious-code-linux>) 

---

📌 **CISA 將四個遭積極利用的弱點列入已知被利用漏洞目錄**

美國網路安全暨基礎設施安全局（CISA）針對野外已遭積極利用的四個安全漏洞發布警告。企業資安團隊應清查其網路中的受影響資產、依據 CISA 指引優先進行緩解或修補，並確認邊界防禦措施能夠因應這些正被鎖定的弱點。

**參考來源:** [CISA警告4個資安漏洞已遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9DNEdyaXBkdWF1U3FBUzNwWno2T3JKYmNQQldhTzkybGtCdFdUazBfaGVhaUVaRS1sZUdjNDBuWjZJSFJmc2VFX1FMaTZ0QQ?oc=5>) 

---

📌 **俄羅斯 Turla 駭客針對政府 Exchange 伺服器部署模組化 Cereal 工具集**

與俄羅斯結盟的網路間諜組織 Turla（亦被追蹤為 Snake）已被發現部署名為 Cereal 的模組化且先前未經記錄的架構，以從內部部署的 Microsoft Exchange 伺服器中蒐集電子郵件。根據 ESET 的研究，該惡意軟體於 2025 年底被發現針對哈薩克與羅馬尼亞的政府實體，其過濾器專門設定用於擷取與北約（NATO）及歐盟事務相關的郵件。此包含 8 個元件的工具集避開了典型的命令與控制基礎設施，利用如 CerealNeuron 等被動後門接收偽裝成一般 Exchange 流量的指令，並將 CerealBox 模組直接注入至 EdgeTransport.exe 以檢視傳輸管道，同時將附有 PDF、DOC 或 DOCX 附件的訊息進行暫存以供加密擷取。

**參考來源:** [Russian Turla Hackers Use New Cereal Malware to Steal Emails From Government Exchange Servers](<https://thehackernews.com/2026/11/russian-turla-hackers-use-new-cereal.html>) 

---

📌 **駭客利用 Qubole 的受信 AWS 存取權限，突破客戶帳戶並竊取資料**

攻擊者於 10 月 14 日至 10 月 26 日期間，突破多個 Qubole 客戶的 AWS 帳戶，竊取存放的密鑰和資料。Wiz 表示，攻擊者使用 Qubole AWS 帳戶的憑證，透過帶有正確 External ID 的 AssumeRole 請求假扮客戶 IAM 角色。來源：Qubole AWS 帳戶 ID 805246085872；IAM 主體 ID AIDA3W7DIFLYOLTK63SFS 和 AIDAJYRRH5Y3A7AAJM2HW；攻擊者 IP 包含 OVH 地址 57.129.54\[.\]120 與 2001:41d0:70d\[:\]7800::，以及 Mullvad VPN 地址 45.83.220\[.\]211、185.209.199\[.\]73 和 89.37.63\[.\]175。攻擊者讀取 Lambda 環境變數、Secrets Manager 密鑰、SSM Parameter Store 數值，透過 TruffleHog 測試憑證，並從 S3 桶複製資料。另外，從 10 月 8 日至 10 月 11 日，攻擊者利用客戶自己的 AWS 存取金鑰，入侵少數雲端環境；此活動與 AssumeRole 濫用無關。

**參考來源:** [Hackers Exploit Qubole's Trusted AWS Access to Breach Customer Accounts and Steal Data](<https://thehackernews.com/2026/11/hackers-exploit-quboles-trusted-aws.html>) 

---

📌 **DigiCert 資料外洩由伺服器遷移錯誤所致**

iThome 報導，DigiCert 因伺服器遷移錯誤發生資料外洩。

**參考來源:** [DigiCert發生資料外洩，起因是伺服器遷移出錯 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1XSG5MOG1SNG4wcUcxSGlGbEJWX184MjduMzJKY1VkcW1VUTFtUFNCY0Y3cFBQM3RCck1wOW1zdzdfeERkcFE1ZlR0Mmxudw?oc=5>) 

---

📌 **Shadowserver 警告全球 170 台 Danfoss 製冷控制器仍面臨漏洞威脅**

iThome 報導，Shadowserver 警告全球 170 台 Danfoss 製冷控制器仍面臨漏洞威脅。

**參考來源:** [Shadowserver示警全球仍有170臺Danfoss冷藏控制器暴露於漏洞威脅 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8tYndlRzFpVzFaZmJCd1FHNVVLUFFpNDYzTU5ZM2V6Yk9hYlNXQmRIMzE0X2ZKUXBCYV8zZkQwa2hKNHVWUVlNRFdfNU9MQQ?oc=5>) 

---

📌 **駭客透過偽造的 CWP Web 伺服器軟體分發新的 Linux 後門 CWPdoor**

iThome 報導，駭客透過偽造的 CWP Web 伺服器軟體分發了新的 Linux 後門 CWPdoor。

**參考來源:** [駭客利用假冒的CWP網頁伺服器程式，散布新型Linux後門程式CWPdoor - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02ZUxnRVQ5S3l2Yjk2N3dBMTViR2xDdS1SSWRpY0tKTmhYdjhidDB2UnVicEcwc2ozcDh5SFdsMlFNUHQ4b2F4RHlHSlExZw?oc=5>) 

---

📌 **駭客控制俄羅斯軟體開發者基礎設施數個月**

Xakep 報導，駭客控制了一名俄羅斯軟體開發者的基礎設施數個月。

**參考來源:** [Хакеры несколько месяцев контролировали инфраструктуру российского разработчика ПО](<https://xakep.ru/2026/11/10/bo-team-attack>) 

---

📌 **美國偵測到涉及 MEXC 達 16 億美元的非法操作後，將禁止相關轉帳**

Xakep 報導，美國將在偵測到涉及 MEXC 達 16 億美元的非法操作後，禁止相關轉帳。

**參考來源:** [США запретят переводы с участием MEXC после выявления незаконных операций на $16 млрд](<https://xakep.ru/2026/11/10/mexc-sanctions>) 

---

📌 **Binance 警告 iOS 沙箱逃逸可能暴露加密貨幣錢包金鑰，目前無確認修復**

Binance 警告稱，在 GitHub 上披露的名為 worse\_query 的 iOS 沙箱逃逸漏洞，允許應用程式讀取 iOS 26 與 iOS 27 上其他應用程式的檔案，使種子詞組、私密金鑰與登入憑證面臨風險。Apple 的 iOS 26.7.3 與 iOS 27.2.1 更新並未列出修復項目，亦無涉及此逃逸的攻擊或盜竊事件被報告。Binance 建議用戶刪除來自不可信來源的應用程式、更新 iOS 與應用程式、將懷疑遭入侵的資金轉移至乾淨設備上的新錢包，並重設活動登入階段。

**參考來源:** [Binance Warns of iOS Sandbox Escape That Could Expose Crypto Wallet Keys, No Fix Confirmed](<https://thehackernews.com/2026/11/binance-warns-of-ios-sandbox-escape.html>) 

---

📌 **NIST：單打獨鬥不應代表較不安全**

NIST 發布《網路安全白皮書 50》，協助獨立企業主以淺白語言降低網路風險，內容涵蓋多因素驗證、密碼管理員、標準帳戶、自動更新及經過測試的備份。Dark Reading 評論指出，網域註冊商安全性、電子郵件驗證、緊急應變規劃以及無需人工監督即可行動的代理人式 AI 等方面存在不足。

**參考來源:** [NIST: Solo Shouldn't Mean Less Secure](<https://www.darkreading.com/cybersecurity-operations/nist-solo-shouldnt-mean-less-secure>) 

---

📌 **親俄網路間諜團體 Gorbag 透過釣魚郵件與 WinRAR 漏洞攻擊烏克蘭政府以竊取情報 - iThome**

iThome 報導，親俄網路間諜團體 Gorbag 正透過釣魚郵件與 WinRAR 漏洞，攻擊烏克蘭政府以竊取情報。

**參考來源:** [親俄網路間諜組織Gorbag鎖定烏克蘭政府，透過網釣郵件及WinRAR漏洞竊取情報 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GOTl2VUpTNTJ4TXB4S0xudkNfYXpIZjJBenczUjRnWFN3bWZ0Y0ZHdTFqNWx0MVBmNzJHRnE3OXQzVG4yM2J3UmhmbDJ4UQ?oc=5>) 

---

📌 **SEGA 集團發生資料外洩，影響 220 萬筆記錄，緣於日本 Arara 安全事件 - iThome**

iThome 報導，SEGA 集團因涉及日本 Arara 的安全事件，導致 220 萬筆記錄外洩。

**參考來源:** [SEGA集團因日本Arara資安事件外洩資料220萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBjYVhmbl83QmVKQ1NkNTNmblpkc0d4ajdQdUJwZEdxYTBxZEFGVVhMV2dSajBxZkdLT0hIV1RTYmdiUkh0LU5sMnJXWFd6Zw?oc=5>) 

---

📌 **Easy 會員中心遭受網路攻擊，逾 69 萬人的歷史訂單聯絡資訊受影響 - iThome**

iThome 報導，Easy 會員中心遭受網路攻擊，影響超過 69 萬人的歷史訂單聯絡資料。

**參考來源:** [易遊網會員中心遭網路攻擊，逾69萬人歷史訂單聯絡資料受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RQTlOeklGUUg4dGFLaWU3WUI1M1FmVjVyTkNuTWYwRkRfYy0yNjBtWjlySGFNTng5M3ItNk9RY1YzeVRWc3hzMUdNMVk0QQ?oc=5>) 

---

📌 **託管服務商 DreamHost 遭駭，使用者 FTP 帳戶密碼與 Webmail 工作階段資訊外洩 - iThome**

iThome 報導，託管服務商 DreamHost 遭到駭客攻擊，導致使用者 FTP 帳戶密碼與 Webmail 工作階段資訊外洩。

**參考來源:** [主機服務商DreamHost遭駭，用戶FTP帳號密碼及網頁郵件工作階段資訊外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1hVjY3TUpGSmRIX0lWWkRGNGRjVTNCTVViS2lHdEJOMGdXaHhrLVdBOHp5alRBV0lMdUY4ZUFQYVlvR1JOYl9mM3Nhal9RZw?oc=5>) 

---

📌 **WorkOS 資料外洩事件進一步發展，AI 滲透測試框架突破測試環境**

iThome 報導 WorkOS 資料外洩事件有新進展，涉及一個 AI 滲透測試框架逃離測試環境。

**參考來源:** [WorkOS資料外洩事故出現新進展，AI滲透測試框架突破測試環境釀禍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBaQ2g4akJBRlhNcVRXWkNrMlE1UHFmbDZuTDZUVjVyZ3NmWW0xOHktOE1XdU42Mi1qTXJISzBaei1TT1diRkVvZFJVdmRXQQ?oc=5>) 

---

📌 **CISA 公布網路安全事件增強式通報表單**

Dark Reading 報導 CISA 已公布網路安全事件增強式通報表單。

**參考來源:** [CISA Announces Enhanced Reporting Form for Cyber Incidents](<https://www.darkreading.com/cyberattacks-data-breaches/cisa-announces-enhanced-reporting-form-cyber-incidents>) 

---

📌 **Microsoft 經數週混亂後修正 Windows Paint RCE 漏洞**

Dark Reading 報導 Microsoft 在經數週混亂後，已修正 Windows Paint 中的遠端程式碼執行漏洞。

**參考來源:** [Microsoft Fixes RCE Bug in Windows Paint After Weeks of Confusion](<https://www.darkreading.com/application-security/microsoft-rce-bug-windows-paint-confusion>) 

---

📌 **Airbyte 漏洞允許任意程式碼執行**

JVN 報告 Airbyte 存在一個允許任意程式碼執行的漏洞。

**參考來源:** [JVN: Airbyteにおける任意のコードが実行可能な脆弱性](<https://jvn.jp/jp/JVN12040144>) 

---

📌 **外包供應商資料庫於台灣櫻花購物中心異常存取，訂單與消費者個資可能受影響**

iThome 報導，台灣櫻花購物中心的外包供應商資料庫發生異常存取，可能影響訂單與消費者個人資訊。

**參考來源:** [台灣櫻花購物商城的委外廠商資料庫遭異常存取，訂單及消費者個資恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBubXZTa2NiLU1fdld1d0VHbDNVOVFCUnNvQmM0dU5kUm8tTkNUdGFXX1RycnpUMXdydmlOeGJYaW1DRFoxZW1lNFRkaVVaZw?oc=5>) 

---

📌 **每日安全報：11 月 10 日，新披露的 OpenSSH 漏洞 SSHole 出現嘗試性攻擊活動**

iThome 報導，針對新披露的 OpenSSH 漏洞 SSHole 出現嘗試性攻擊活動。

**參考來源:** [【資安日報】11月10日，甫揭露的OpenSSH漏洞SSHole出現嘗試利用活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1WbHJ2QkxZOFBfTXA2b2phdnUyWWkzZmlSakJ4Z18waVQzMHhPa2tuUFA2RkItcEQzeDdKV3hja2dsTGEya0lQRG14YUhxZw?oc=5>) 

---

📌 **PrestaShop 效能偵錯模式 PHP 程式碼注入漏洞**

JVN 報告，當 PrestaShop 啟用效能偵錯模式時，會受到 PHP 程式碼注入漏洞影響。

**參考來源:** [JVN: PrestaShopのPerformance DebugモードにおけるPHPコードインジェクションの脆弱性](<https://jvn.jp/vu/JVNVU98836795>) 

---

📌 **Cloudflare 推出涵蓋主要網路服務漏洞的漏洞資訊服務 - iThome**

iThome 報導，Cloudflare 推出了一項針對主要網路服務漏洞的漏洞資訊服務。

**參考來源:** [Cloudflare推出漏洞情報服務，整理網際網路服務相關重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBneDh2X0NkbTJkWEJHRmpBbDdyX3FyLU9sODloUTE0bzl2MzA2X2owanpHNW5VeS1kY1k2NnZvajFGX0s3Mm5oanhUSlhVQQ?oc=5>) 

---

📌 **Yasia 子公司線上購物平台遭外包廠商安全事件影響，訂單資料遭異常存取 - iThome**

iThome 報導，外包廠商安全事件影響了 Yasia 子公司線上購物平台，導致訂單資料遭異常存取。

**參考來源:** [曜亞子公司線上購物平臺遭委外廠商資安事件波及，訂單資料遭異常存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5lLXpmVjMxR1Awcm5OSTR2VzVkYTNwVDRsRl9LU1d2Zl9lV3ZENlhVTEluXzh3a1Zodk9idWNoMFJfVEtTUzdCVFVlZDR1QQ?oc=5>) 

---

📌 **中岳子公司艾康電子商務外包服務提供商發生異常數據存取，正調查受影響範圍**

iThome 報導，中岳子公司艾康電子商務平台之外包服務提供商發生異常數據存取，公司正調查影響範圍。

**參考來源:** [崇越子公司安永生活電商委外服務商發生異常資料存取，清查受影響範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5HY09WUjBFQ2dYV0ZHMk5BRzRJOHBqYWlnNFNlZkt0M1M5Ym83UloxMHFzOFFIN2hJdnFHWnFDVThLT2NKRUhJVGt4cnpoZw?oc=5>) 

---

📌 **加拿大駭客**

iThome 發布一則參考加拿大駭客的標題；RSS 來源未提供進一步技術細節或事件具體內容。

**參考來源:** [加拿大駭客 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxPWUdrNHVFWmh0ek9md19neDYyeVFtTmlPWWpZWWVQNDFwbTRIV19fblVBSWVQcm1yN18wYzd1NVMybkhraUNtM0RabXBZMndQZXBWa3hzTlRTbldiYlFfcEZab1UyU3RuUU9VNVMzWlpyMWlacXBHN0ZfYmtCYlZRYVF3?oc=5>) 

---

📌 **JVN：FrodoBots EarthRover Mini+ 存在多項漏洞**

日本漏洞注意報告（JVN）報導，FrodoBots EarthRover Mini+ 機器人平台存在多項漏洞。

**參考來源:** [JVN: FrodoBots EarthRover Mini+における複数の脆弱性](<https://jvn.jp/vu/JVNVU96830794>) 

---

📌 **Cisco 將新增 Anthropic Claude Mythos 以強化 AI 代理安全性與運營**

Cisco 計劃整合 Anthropic Claude Mythos，以加強 AI 代理安全性與運營，這是根據 Chosunbix 報導。

**參考來源:** [Cisco to add Anthropic Claude Mythos to harden AI agent security and operations - Chosunbiz](<https://news.google.com/rss/articles/CBMiekFVX3lxTE5hTk1PeXlLX1BjRjNYZW4xUlVCU3ZJQW00d0FIZ3ZCYXFkU3gxSFhzVTJaZFpZcTN4QmRQdVdacWpaQXp6RHdlWmRVS1pDZ2ViVXNDY0ZsQTVRQUkxNlZoZG5DX1haOW5sZUs1UU9ZY0U3UmtseTQ4MzZ30gGOAUFVX3lxTE1paFBiVjkyTjdiZ1UxaUR2dzFmTEZiVWNZSXFXVUJXRTlFZjRxeVlzTkswTkhiU1lFbWRka1QxTlJGR09IbERxYjhZaUZZUzNPWHlsYTRoaF95emFmeTcwVHVuM21TeXBjXzFJWW5ZOXllUXExbnlUZWx6QVYwV25iMXpDZVBhaXc1N1d4ckE?oc=5>) 

---

📌 **捐贈者個人資料可能因 netiCRM 服務提供商被駭而外洩；包括台灣公民監督立法聯盟與司法改革協會在內的 20 多個非營利組織發出警告**

netiCRM 服務提供商遭駭，可能導致捐贈者個人資料外洩，促使包括台灣公民監督立法聯盟與司法改革協會在內的超過 20 個非營利組織發出警告。

**參考來源:** [捐款人個資恐外洩！netiCRM服務商遭駭，公督盟、司改會等超過20個非營利組織接連示警 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2OUNuM21VQUs5U0dUZzJtVktpaEplTng3SEhCZEpxU05MMGxVbWxWclJsMUYyVXlXc3N5SWp2aWdYcXQxb1BQRWdUeWxKZw?oc=5>) 

---

📌 **Black Hat India 2026 在 Bengaluru 具有里程碑式首次亮相，將全球網路安全社群帶到印度**

Black Hat India 2026 將首次在 Bengaluru 舉行，將全球網路安全社群帶到印度。

**參考來源:** [Black Hat India 2026 Makes a Landmark Debut in Bengaluru, Bringing the Global Cybersecurity Community to India](<https://www.darkreading.com/cybersecurity-operations/black-hat-india-2026-landmark-debut>) 

---

📌 **Anthropic 的 Claude Fable 5.2 在多階段網路攻擊基準測試中擊敗 GPT-6 Cyber**

Anthropic 宣布推出 Claude Fable 5.2 和 Claude Mythos 5.2，聲稱具備更佳的程式設計、推理與視覺能力。Fable 5.2 在 Irregular 的 CyScenarioBench 多階段網路攻擊基準測試中完成了 76.3 percent 的挑戰，優於 GPT-6 Cyber 的 61 percent 與 Fable 5.1 的 61.7 percent。該模型在 Anthropic 的 CVE Rediscovery 基準測試中也獲得了 89.6 percent 的分數，該測試涵蓋 1,829 份於 2026 年 10 月發布的開源安全通報。Anthropic 形容 Claude Mythos 5.2 是其在網路安全工程方面最強大的模型，並表示兩款模型均可透過 Cyber Verification Program 及主要雲端平台使用。

**參考來源:** [Anthropic's Claude Fable 5.2 Beats GPT-6 Cyber in Multi-Stage Cyberattack Benchmark](<https://thehackernews.com/2026/11/anthropics-claude-fable-52-beats-gpt-6.html>) 

---

📌 **IBM 計劃將 Anthropic 的 Claude Mythos 網路推理能力導入 IBM Concert**

根據 IBM 的標題報導，IBM 計劃將 Anthropic 的 Claude Mythos 網路推理能力整合到 IBM Concert 中。目前來源中沒有進一步的技術細節。

**參考來源:** [IBM plans to bring Anthropic’s Claude Mythos cyber reasoning into IBM Concert - IBM](<https://news.google.com/rss/articles/CBMitgFBVV95cUxOUzIybFNSQnhhTW1YVS12X3dwZlgxWTJFazloUUhfOFlvOVhhbU9BV09QV2k2bEpUc203cFRhQ01CNkZ5ZVZYcWdCeWw3UVlieUdMbHNUZHkxQXJBai04b2ExV2RlWmRXOHppY0VBRXpWZDBIREpncmlwQkVCcWh3OTVwNmZrc05vOXdWTlFzQThtSkhfRi1QbnZ2VXJCd2FVRWxTUTY1c256QVBFQ3V2ekp4QlN0QQ?oc=5>) 

---

📌 **Cisco 將 Anthropic 的 Claude Mythos 加入 AI 安全測試平台**

根據 Telecompaper 的標題報導，Cisco 已將 Anthropic 的 Claude Mythos 加入其 AI 安全測試平台。目前來源中沒有進一步的技術細節。

**參考來源:** [Cisco adds Anthropic's Claude Mythos to AI security testing platform - Telecompaper](<https://news.google.com/rss/articles/CBMirwFBVV95cUxORm5qS29ncXliQU9JX0Npb2xSVUFiX0xDYnptcGZXRUFrWGJONlRZbGZKMVVlTXlfM084cTAtb0tEUVZrajdKZVZybVltUGpYZmxhVUpJTEtzT2QzYWZvU3huWWwtdGNmMnowQ05lRmdMR1ZyTlR4S29CWWxkWGpmeUIxM0NnQW1NSFo2U2Fja21YWHJYSlJBYm45WF9xRFhJaklQRFRwdkh5ZzRMV2Mw?oc=5>) 

---

📌 **Maritime cybersecurity - iThome**

iThome reports on maritime cybersecurity.

**參考來源:** [海運資安 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTFBQSzBNRjBZWjNoN1cyYXFFM0VzNGE2TlYzYTI5cElJaW8zME9rYUUxZFRWWEUtNDQ5RjRYZVNTNVdCckZ5ajZ2NWtWamxGb2kzWlh2VVlDWWVXYmUtYmttZUtYd215anhsUzJfbTNGb0o0V056OXc?oc=5>) 

---

📌 **ShinyHunters advertises data claimed stolen from Binance 330 million users - iThome**

iThome reports that ShinyHunters is offering data allegedly stolen from 330 million Binance users.

**參考來源:** [ShinyHunters兜售宣稱竊自Binance 3.3億用戶的資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ZR1BpYWVxRmtYRm9KNTBpSVM4VFBuYlNYTDRjUWJrMkpjVzVwS2QxX3ZURUFQc01FQ012Q3JPbExlZ0ZXRkNMX0VoUDBQZw?oc=5>) 

---

📌 **Ethersphere - iThome**

iThome reports on Ethersphere.

**參考來源:** [Ethersphere - iThome](<https://news.google.com/rss/articles/CBMiVEFVX3lxTFBjakZQQ1BKNGVKclc0R0FMSDh2Nld5eTRjYmdzZ3FveHl3U1JqWEtTWUdQSGFpNmlLbTdCOXhHMkkwWkxaOVltTlFNVlQ0SFpZS2F4Zw?oc=5>) 

---

📌 **安全事件 - iThome**

iThome 在其 RSS 標題中報導一起安全事件，無其他可用詳情。

**參考來源:** [資安事件 - iThome](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5HMElFT2tsOXhUZG1NY1d3MU9oZnR5M1BJWXJFMkpLYW9UOW1vQUxCMkZPTVBsdVZaU2FNdFYzVWZlaFJXUEw3LWVEbnY1TXVXbnBpZkJxa3YzbUtWWTVqOE95RkV0U0U?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261110-1-1794364843188 -->
