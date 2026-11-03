---
title: "CISO 每日摘要：攻擊者利用關鍵 Siemens IoT2050 漏洞植入遠端命令後門 (20261103)"
description: "Siemens IoT2050 裝置關鍵驗證缺陷遭主動利用並部署遠端命令後門，而伊朗國家相關間諜活動已入侵以色列與伊拉克庫德政府雲端基礎架構目標，且標題報導警告透過 SpaceX 所有的 Cursor 市集影響多達 5,000 名開發人員的惡意軟體感染。"
pubDate: 2026-11-03
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 攻擊者利用關鍵 Siemens IoT2050 漏洞植入遠端命令後門

Siemens SIMATIC IoT2050 Advanced 裝置出現最高嚴重度漏洞，編號 CVE-2026-58115，CVSS 評分為 10.0，目前正遭主動利用。Node-RED HTTP 介面缺乏驗證漏洞，允許未經驗證的遠端攻擊者建立惡意流程，並以最高權限執行任意程式碼。Siemens 在版本 4.3.4.1 及更新版本中修復此問題，並建議卸載 Node-RED，或透過 HTTPS、憑證型驗證、OAuth/OpenID，以及 HTTP 節點和儀表板的基本驗證進行強化。

VulnCheck 於 2026 年 10 月 30 日觀察到其蜜罐網路遭到利用嘗試，攻擊者部署一個 Node-RED 流程，從 85.215.73\[.\]250 下載並執行 Linux 機器人，並使用編碼層與 wget 或 curl。活動後轉為兩階段流程，從同一伺服器擷取 wget.sh，並隨後擷取偽裝成 .kworker 的有效負載，自 45.194.90\[.\]57:38472 儲存至 /tmp/.kworker。這些後續有效負載的確切功能仍不清楚。

部分攻擊部署 HTTP 內端點，例如 /cmd，透過函數節點連接到執行節點，允許透過查詢參數執行任意命令。VulnCheck 指出，即使記憶體內植入物遺失，此後門仍能在重啟後存留。客戶應套用修補韌體，並檢查暴露的 Node-RED 實例是否存在未經授權的流程與存留機制。

### 📌對 CISO 的影響

- **修補並強化暴露的工業 IoT 裝置 —** 將 Siemens SIMATIC IoT2050 Advanced 裝置更新至 4.3.4.1 版或更新版本，或移除/強化 Node-RED，使用 HTTPS 與驗證，以阻止利用 CVE-2026-58115。
- **搜尋 Node-RED 後門存留 —** 檢查 IoT2050 與其他 Node-RED 安裝是否存在未經授權的 HTTP 執行端點（例如 /cmd）、非預期流程，以及可能在重啟後存留於 /dev/shm 或 /tmp 中的植入二進位檔。
- **強化針對憑證釣魚與木馬化開發人員工具的防禦 —** 將仿冒政府、郵件、雲端服務與視訊會議網域視為潛在的憑證採集或惡意軟體傳送管道，並在執行前驗證 Cursor 擴充功能與程式設計評估下載項目的來源。

**參考來源:** [Attackers Exploit Critical Siemens IoT2050 Flaw to Plant Remote Command Backdoors](<https://thehackernews.com/2026/11/attackers-exploit-critical-siemens.html>)

---

## 本週活躍威脅

📌 **DarkBlinders 入侵以色列目標與伊拉克庫德政府雲端環境**

Dream Research Labs 披露一項由 DarkBlinders 進行的伊朗國家相關網路間諜活動，於 2026 年 8 月至 10 月間針對以色列與伊拉克庫德斯坦地區。該活動入侵一位以色列知名個人，以及伊拉克庫德斯坦地區的一個政府雲端環境，利用標榜釣魚傳送木馬化公用程式或直接下載工具。先前鏈部署 SHELBYLOADER 與 SHELBYC2，並利用 GitHub 進行命令與控制、資料外洩及遠端控制。Palo Alto Networks 先前描述 Blinder Tunnel 活動偽裝為杜拜機場 IT 以散佈木馬化程式設計挑戰，而最新活動結合憑證釣魚與惡意軟體傳送，透過仿冒政府、郵件及雲端服務網域，以及假 StarkMeet 視訊會議網域進行。

**參考來源:** [DarkBlinders Compromises Israeli Target and Iraqi Kurdish Government Cloud Environment](<https://thehackernews.com/2026/11/darkblinders-compromises-israeli-target.html>) 

---

📌 **多達 5,000 名開發人員因 SpaceX 所有的 Cursor 市集中的惡意軟體而受感染**

THE ELEC 报道，多達 5,000 名開發人員可能因 SpaceX 所有的 Cursor 市集中分發的惡意軟體而受感染。可用標題中未包含感染向量、受影響組織及惡意軟體功能的詳細資訊。使用 Cursor 擴充功能的客戶應驗證外掛程式來源，並在有進一步技術報告前避免下載非官方市集項目。

**參考來源:** [Up to 5,000 Developers Infected by Malware on SpaceX-Owned Cursor Marketplace - THE ELEC, Korea Electronics Industry Media](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9jYm4zSEctbmh5aXZ6RWF5YlpwZVB4QjBzcW9hcTMtZ0NfRlVEZUQzbURUR29kMVRJcWwtSVlTejhnbDNETmhsVEltRWVDSzVlZHN2M25kYlZUTGpLTEVFakpOVlBsTnc?oc=5>) 

---

📌 **Google 與日本警方合作拆解 XCPE 惡意網路，該惡意網路在全球超過 130 萬部 Android 設備中傳播，其中包括台灣近 9 萬部設備**

Google 和日本警方拆解了 XCPE Android 惡意網路，該惡意網路在全球感染超過 130 萬部設備，其中包括台灣近 9 萬部設備。

**參考來源:** [Google聯手日本警方瓦解XCPE殭屍網路，全球逾130萬臺Android裝置遭感染，臺灣也有近9萬臺 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5zNm9oOWoyd1JfcVdyY1JYU2NOanMzODZkLTJfUWItSU1KLTBFdzduVFRhMXJfdmI2R0ZtSEFRQ3R4cWJza1A5ZjNtS2lTdw?oc=5>) 

---

📌 **駭客利用 BTCPay Server 漏洞從熱錢包竊取比特幣和萊特幣**

BTCPay Server 促請使用 2.4.1 或更舊版本的用戶，搬遷至使用新錢包的全新伺服器，此後攻擊者從熱錢包竊取比特幣和萊特幣，且有兩個錢包地址與相關事件連結。

**參考來源:** [Hackers Exploit BTCPay Server Flaw to Steal Bitcoin and Litecoin From Hot Wallets](<https://thehackernews.com/2026/11/hackers-exploit-btcpay-server-flaw-to.html>) 

---

📌 **Red Hat 修補評分 9.8 的 Linux TCP 遠端程式執行漏洞，Ubuntu 釋出測試版修補**

Red Hat 修補 CVE-2026-98432，該漏洞是 Linux 核心 IPv4 TCP 程式碼中的遠端可利用「使用後釋放」問題，影響 RHEL 8、9 和 10，而 Ubuntu 對 22.04、24.04 和 26.04 LTS 的修補仍在選擇性建議測試通道中。

**參考來源:** [Red Hat Patches 9.8-Rated Linux TCP RCE Flaw While Ubuntu Releases Fixes for Testing](<https://thehackernews.com/2026/11/red-hat-patches-98-rated-linux-tcp-rce.html>) 

---

📌 **$6.3B Binance Hack Shows the Need to Test Attack Paths**

Dark Reading 報導，Binance 發生安全漏洞，涉及價值 6.3 億美元的資產，其中將近 30 億美元已被凍結，凸顯測試攻擊路徑的重要性。

**參考來源:** [$6.3B Binance Hack Shows the Need to Test Attack Paths](<https://www.darkreading.com/cyberattacks-data-breaches/binance-hack-test-attack-paths>) 

---

📌 **Attackers Target Unpatched CryptoPayment Gateway Flaw That Can Expose Wallet Credentials**

Defused Cyber 報告，正在針對 CVE-2026-81648 進行野外利用嘗試，這是 CryptoPayment Gateway WordPress 外掛程式版本 1.2.1 至 1.2.2 中一個嚴重 CVSS 10.0 漏洞，可讓未經驗證的使用者刪除任意檔案、覆寫支付閘道組態，並以明文恢復儲存的錢包憑證。該外掛程式已於 2026 年 8 月 28 日從 WordPress 外掛程式目錄移除，且目前無已知修復程式。建議網站擁有者移除外掛程式、輪換錢包金鑰，並針對可疑變更進行稽核。

**參考來源:** [Attackers Target Unpatched CryptoPayment Gateway Flaw That Can Expose Wallet Credentials](<https://thehackernews.com/2026/11/attackers-target-unpatched.html>) 

---

📌 **Synology NAS Devices Targeted in Ransomware Attacks Exploiting Patched DSM Flaw**

Synology 報導，威脅行為者正利用 2024 年 12 月修補的 DSM 漏洞，以勒索軟體攻擊過時的 NAS 設備，包括加密檔案並附加 .L0CK3D 副檔名、並放置 read-me3.txt 勒索註記的 C3RB3R 勒索軟體。Synology 促請客戶立即更新 DSM 並啟用自動更新。

**參考來源:** [Synology NAS Devices Targeted in Ransomware Attacks Exploiting Patched DSM Flaw](<https://thehackernews.com/2026/11/synology-nas-devices-targeted-in.html>) 

---

📌 **Amadeus 在西班牙遭駭，影響多國多家航空公司，至少 12 家受影響，包括日本、南韓與馬來西亞 - iThome**

針對西班牙旅遊科技供應商 Amadeus 的網路攻擊，已擾亂日本、南韓、馬來西亞等多國至少 12 家航空公司的營運。

**參考來源:** [西班牙Amadeus遭駭波及多國航空公司，日本、韓國、馬來西亞等至少12家航空公司受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5NdVktUGdPQjk0M0w0QmhKOGZlSDBZaGg3TjFIcmg3SDIyUmhpQVRNZlU3eXc1VFBfTVBMMXp6U2lkcHZQYUJWQUF0SFVMQQ?oc=5>) 

---

📌 **駭客遠端控制七個歐洲國家超過 115 家超市的冷凍設備，導致溫度升高並造成食品損失 - iThome**

攻擊者遠端操縱七個歐洲國家超過 115 家超市的冷凍系統，提高溫度並造成食品損失。

**參考來源:** [歐洲7國逾115家超市冷凍設備遭駭客操控，遠端調高溫度導致食品損失 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBla3pZWjFwY09MX3lxZnVxZ2NEUWs3NURPZWhhbExqZnR3WUpGNmFTb252YnFXS28zZ2ZzU2syVS1jSmhQN09RNlEtVHZqQQ?oc=5>) 

---

📌 **新一波冷凍設備網路攻擊襲擊歐洲超市，迫使商店撤下食品**

攻擊者於週一，11 月 2 日入夜期間，遠端更改比利時、瑞典、愛沙尼亞等歐洲多國超市的冷凍控制設定，導致冰箱與冷凍庫溫度升高。包括 Delhaize、Carrefour、ICA、Coop 與 Selver 在內的商店報告單位受影響，部分商店丟棄冷藏與冷凍食品。Danfoss 表示其產品涉及此事，如同先前針對數百家法國超市的攻擊，而荷蘭遭攻擊的系統未置於安全網路上且仍使用預設密碼。CERT-FR 10 月 16 日的警報涵蓋 Danfoss AK-SM 與 AK-SC 控制器以及 Copeland 和 Dixell xweb 設備，建議將設備與網際網路隔離、使用安全 VPN、變更預設密碼、將 Danfoss 安全性設定為嚴格、更新韌體，並在重新設定前重新啟動或將遭入侵設備恢復出廠設定。

**參考來源:** [New Wave of Refrigeration Cyberattacks Hits Supermarkets Across Europe, Forcing Stores to Pull Food](<https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html>) 

---

📌 **Hugging Face 遭受惡意模型濫用，31 個存儲庫傳播礦工和後門**

iThome 報導，31 個 Hugging Face 存儲庫被濫用以分發加密貨幣礦工和後門。

**參考來源:** [Hugging Face遭惡意模型濫用，31個儲存庫散布挖礦程式與後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5sbTQtWklQRlIzd1pKWGFuOGpYLUdSRk03ODVPZjlhRl9OT0hCNnhvdVVVdWJ5aDNrbG9BLUFSYi1UcHlydFo5aUk1SWE2Zw?oc=5>) 

---

📌 **Trezor 硬體錢包發現惡意植入物**

Xakep 報導，Trezor 硬體錢包中發現了惡意植入物。

**參考來源:** [В аппаратных кошельках Trezor нашли вредоносные импланты](<https://xakep.ru/2026/11/02/trezor-implant>) 

---

📌 **Google 擾亂 130 萬台裝置 Android 惡意網路，稱電視盒製造商出售犯罪存取權**

Google 在十月底主導一次行動，擾亂一個包含超過 130 萬台裝置的 Android 惡意網路，主要為電視機上網盒，並對中國深圳製造商 Videostrong 高度確信其在多年內故意於多款多品牌韌體中植入名為 x.cpe 的後門，然後將存取權出售給犯罪分子，用於廣告詐欺和住宅代理服務。Google 使用法律行動查封控制網域和伺服器，並拆解透過該後門載入的超過 12 個惡意軟體家族的基礎設施，預期此次行動將切斷至少 1000 萬台額外受感染裝置的存取權。該後門作為系統應用程式運作，具有系統層級存取權，會停用 Google Play Protect 檢查，並可靜默安裝應用程式、執行指令、擷取螢幕畫面、繪製網路圖譜、外洩帳戶和裝置詳細資料，以及開啟反向外殼。TrendAI 在 6 月 3 日至 10 月 1 日 2026 年間統計 206 款型號中共有 1472554 台受感染裝置，受影響最嚴重的地區為馬來西亞、巴西、伊拉克、墨西哥和台灣。由於 x.cpe 嵌入韌體並以製造商的密鑰簽名，重新開機後會重新安裝，清除需要廠商行動、平台保護或裝置更換；Synthient 建議消費者丟棄受影響的盒子，而組織應使用公佈的指標、斷開連接並丟棄已識別的裝置、封鎖列出的控制網域和 IP，並將智慧裝置與敏感網路分割。Google 已禁止 Videostrong、其未來子公司和附屬公司構建或銷售認證 Android 裝置，或向認證製造商提供軟體，並變更了認證 Android TV 裝置的裝置審核與韌體檢查。

**參考來源:** [Google Disrupts 1.3 Million-Device Android Botnet, Says TV Box Maker Sold Criminal Access](<https://thehackernews.com/2026/11/google-disrupts-13-million-device.html>) 

---

📌 **駭客利用 AI 代理人入侵 Chainalysis**

報告指出，Chainalysis 遭到駭客利用 AI 代理人入侵。

**參考來源:** [Хакеры взломали Chainalysis с помощью ИИ-агентов](<https://xakep.ru/2026/11/02/chainalysis-hack>) 

---

📌 **Mozilla 揭露 TWCA CA 憑證序號隨機性不足；數位發展部要求重新簽發並進行第三方測試 - iThome**

Mozilla 揭露 TWCA CA 憑證序號隨機性不足，促使台灣數位發展部要求憑證重新簽發及第三方測試。

**參考來源:** [TWCA CA憑證序號亂數不足遭Mozilla揭露，數發部要求換發並啟動第三方檢測 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5VSmlQZjBnYVM5NHdVV3ZZcVFNZWFDVE1fYnFxRVpDcmhDME0zVFYyUzlKcXpQUmFFbzY4VkdfbnlsUmhuQUdJcHVJaU1LQQ?oc=5>) 

---

📌 **AI 工作流平台 Trigger.dev 被駭；攻擊者未經授權存取部分客戶環境變數 - iThome**

Trigger.dev 報告指出，攻擊者未經授權存取其 AI 工作流平台上部分客戶環境變數。

**參考來源:** [AI工作流程平臺Trigger.dev遭駭，攻擊者未經授權存取部分客戶環境變數 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE13V1BRUDZfeEM1RmRMelhWeEdaQVd6M1oyMWNDVTF3QzVrUHhpYk0yUG41SVJ3TkhnZjFORDQ0MkRzSlNRZTNYRFFvRlp3Zw?oc=5>) 

---

📌 **APT 攻擊者利用 NetamLoader 惡意軟體框架鎖定亞洲政府機關 - iThome**

iThome 報告指出，APT 攻擊者已針對亞洲政府機關使用 NetamLoader 惡意軟體框架。

**參考來源:** [APT駭客利用惡意軟體框架NetamLoader攻擊亞洲政府機關 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBUNTE5dzFUR1pFWmRYazVFMkdaUmxINjZMTnozV3BYbUVVNVIxa2Rwd0hDMEhUVzh4OVpEV1dCVGxreXlvMXFKdzdNV3czZw?oc=5>) 

---

📌 **Langflow AI 應用程式開發平台修補兩個關鍵漏洞，允許繞過身份驗證或遠端程式碼執行 - iThome**

iThome 報告指出，Langflow 已修補兩個關鍵漏洞，攻擊者可能利用這些漏洞繞過身份驗證或執行遠端程式碼。

**參考來源:** [AI應用開發平臺Langflow修補2項重大漏洞，攻擊者可繞過身分驗證或遠端執行程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBLSVVHZTJfdDNXSXktWEVEdE5YTk5VaWVSa3BfeGdOTUxuZDFsMnNvb3o2bHFKU0hoUndsMUlHcVJIYldTUXk3c3l0MGFPQQ?oc=5>) 

---

📌 **319 個 Chrome 擴充功能攔截使用者搜尋查詢 - Xakep**

Xakep 報告指出，發現 319 個 Chrome 擴充功能攔截使用者的搜尋查詢。

**參考來源:** [319 расширений для Chrome перехватывали поисковые запросы пользователей](<https://xakep.ru/2026/11/03/searchjacked>) 

---

📌 **ENGIE 遭供應鏈攻擊，客戶數據外洩**

iThome 報導 ENGIE 遭遇供應鏈攻擊，導致客戶數據外洩。

**參考來源:** [ENGIE、供應鏈攻擊、客戶資料外洩、能源業資安 - iThome](<https://news.google.com/rss/articles/CBMisAJBVV95cUxOR0dEdm9ISTZnM1lqX3gwTm5KckJpMGFlN1loWEZBRTJhV1E2aFBoQkNIN2kweDl4eldoWEZkdGItT2N4SS1USmVmaEJNZ0V4c2tfSXhua21BcWJ5UWx2ekF1SkZQQjExSnhwdXpPWEdHTmRnUlUtZjBrN2VYSVc3MmYtYlM3dDhNUk9SSXYtQ0tpSFFwT0dJOHZrTFpWWVVYZ2hBWVc4MTl2bDBVdlRkaklzM3lQYmxPUDQwNDAtR1B4SmhtX2VMbGMyNzdHd3l6QW4xT2dMSUhHT2I5ZnRfR2IxcVBoTXNER0NCTG5RckJxQl9fTkJ2X29neFlzbG1QckVITFlydUE0TjBaSnc4YWVIbmp1cUZpaUxNaTRqZWtOT1FwM09RY1JLbzNCRDdk?oc=5>) 

---

📌 **攻擊者利用 AI 生成惡意程式針對政府 Linux 主機並盜取電子郵件與社群媒體帳戶**

iThome 報導攻擊者正利用 AI 生成的惡意程式，針對政府 Linux 主機，意圖盜取電子郵件與社群媒體平台的帳號密碼。

**參考來源:** [政府機關Linux主機被鎖定，駭客借助AI力量生成惡意程式，意圖竊取郵件與社群平臺帳號 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBsb3FZY29iWU1nN1hVeHptd2FkOXhWbW93dU5wRDZPMmNJT2NwYl8zY0xMeGJ3dTJPOE15VDU0Y0c3NEFPYVdIdndVOHdXdw?oc=5>) 

---

📌 **中國駭客濫用 AI 強化的 ARTEX 滲透測試框架，針對全球超過 200 個組織進行網路間諜**

iThome 報導中國駭客濫用 AI 強化的 ARTEX 滲透測試框架，針對全球超過 200 個企業組織進行網路間諜活動。

**參考來源:** [中國駭客濫用AI滲透測試框架ARTEX攻擊，於全球逾200個企業組織從事網路間諜活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBMN0FWY21aYjRRWFZHYTREOVF0algwdzkyRVR5Y2VSZXRjQXg5b0pvZ2duSVpBZUwxXzNNUUdDeGRnaU4tcXRzUDQ3NDVPUQ?oc=5>) 

---

📌 **國泰航空、澳洲航空與馬來西亞航空列為 Amadeus 系統資料外洩受害者**

iThome 報導指出，國泰航空、澳洲航空與馬來西亞航空皆受到涉及 Amadeus 系統之資料外洩影響。

**參考來源:** [國泰、澳航、馬航也成Amadeus系統資料外洩受害者 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1BTndOeHZQVHpDM2I3VUh2Q0tDeHV4eDIxRDROZjNveU9BWUd3ZmQ1Y3Z0eUJNXzFqV1NIY2wwdUQtM2FMNnFuZmlXeWxWZw?oc=5>) 

---

📌 **歐洲能源巨頭 ENGIE 合作夥伴平台遭駭，部分法國客戶資料外洩**

iThome 報導指出，ENGIE 使用的一個合作夥伴平台遭駭，導致部分法國客戶資料外洩。

**參考來源:** [歐洲能源巨擘ENGIE合作夥伴平臺遭駭，部分法國客戶資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBwS1EzUFkwNVRNT01UdWdOX2pWR0trV0R3OXB4Y3QzYkJOUF85cmxrM1JGVXZJTlZaV3d6U2lUUkVheVpJRHBSUk53c0Fxdw?oc=5>) 

---

📌 **主機服務商 Beget 遭受網路攻擊**

Xakep 報導指出，俄羅斯主機服務商 Beget 遭受網路攻擊。

**參考來源:** [Хостинг-провайдер Beget пострадал от кибератаки](<https://xakep.ru/2026/11/03/beget-attack>) 

---

📌 **WordPress 漏洞利用嘗試於補丁發布九分鐘後出現**

iThome 報導，近期修補的 WordPress 漏洞利用嘗試在修補程式發布僅九分鐘後即出現。

**參考來源:** [甫修補的WordPress漏洞9分鐘後即出現嘗試利用活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5uRFU5a1lIeG9DdmZnNlFnenZsNHdjbGJqNlRoRmRWbUR3YnNhVnlndmFjTFQ5N1NwT2pRNWQwaWxUeFRyRUw0WHp3VTFmQQ?oc=5>) 

---

📌 **Polymarket 因 DNS 記錄劫持而遭破壞**

Xakep 報導，Polymarket 因其 DNS 記錄被竄改而遭到破壞。

**參考來源:** [Polymarket скомпрометировали из-за подмены записей DNS](<https://xakep.ru/2026/11/03/polymarket-debugbear>) 

---

📌 **Sophos 揭露 Aur0ra 勒索軟體攻擊廣泛使用 AI 技術**

iThome 報導，Sophos 已揭露廣泛使用 AI 技術的 Aur0ra 勒索軟體攻擊。

**參考來源:** [Sophos 揭露 Aur0ra 勒索軟體攻擊大量運用 AI 技術 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTFBNVUNmTnk3MEFiMWpENTRUeUJtdG11bnQ0X1VWOHZZQUdPYWE2bVFVMDVGcFpBY2FmeVVhMzNvSnVSdTdHWHc0ZXBEaw?oc=5>) 

---

📌 **Android SMS 阻斷服務漏洞 CVE-2026-58882**

iThome 報導 Android 阻斷服務漏洞，編號 CVE-2026-58882，涉及破壞性簡訊訊息。

**參考來源:** [Android、CVE-2026-58882、死亡簡訊、阻斷服務攻擊 - iThome](<https://news.google.com/rss/articles/CBMi_gFBVV95cUxPRE5KeFYyd3RxNzhpMnNoSjJHN3pDdGxnTUtWald2b3BEaGx1bnVGTE0wZVZvS0loRWxfb2lMNGhJeWo0eDF4R1AwS0gtWFJDZUJUNkEwREVjd08yaWIyUmNMR0pwb1RsMnRJZWhCRWNLVnlfMlVKMWtEZTdlZjdZcEpJZDdHY3FXSFc2SlBVYTZVWEdmSGFRUkdMMnpiTngyUFlJbk1qbnRRbHVwNmNtc1k0Y252Vko4RXJlUDdjMTZJdERLOUd4S2VCNkxpT2k0WnNGU1NQcjFmVWRfWWpIMlFPVmdUNEk0TEU1Z3ZWMXRjUmdvSzZEM3JBc3MwQQ?oc=5>) 

---

📌 **Drupal 揭露遭利用的 Commerce Core 漏洞**

iThome 報導 Drupal 揭露其 Commerce Core 模組中存在一個嚴重漏洞，該漏洞已在野外遭到利用。

**參考來源:** [Drupal揭露已遭利用的Commerce Core模組重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1QcGkxUC1kMFdhdUdMb1pkYjlVV0Uxb3JCdDlxbnc1c3hCYzg0QmU1T2VVX0VOcXFMNkRtTFNuTU05Rk5ndGppVzBKVE42dw?oc=5>) 

---

📌 **元大銀行報告影響 419 位客戶的異常轉帳事件**

iThome 報導元大銀行確認新網銀行發生系統異常，初步審查影響 419 位客戶與 427 筆交易。

**參考來源:** [永豐銀行發生不明轉帳事件，該行證實新網銀系統程式異常，初步清查影響419名客戶、涉及427筆交易 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9heEVOdmQ4bFozX1dMQU92dFNWVGJDckVKbW9naFRRNkFwMGJ0b1RQVW1ZTi1SUkFtZFFLYlM2d2RLbF9BSDF2R3ZpcmlJQQ?oc=5>) 

---

📌 **日本海外航空 - iThome**

iThome 針對日本海外航空發布僅標題的項目，無進一步細節可供參閱。

**參考來源:** [日本越洋航空 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxPUUNUYkF2THREaE5qdWc3d2ZKMlk1S2lnQnAzNXNHemRLWnF4ZXBFUlNoNlZMa2l3WWJSNUxtR3N4S00wanJlRDdrdFBKTWlEaDA3Y1p2TkI5V01YeDJkNkJKN2xxdEx1T3JSOU9fdjVlVXdhaVFJZFNFLU10ODFXLTVUSDlwV015ejZWSHhR?oc=5>) 

---

📌 **Android 暴露於「死亡文字」漏洞，可能癱瘓行動通訊服務 - iThome**

iThome 報導，Android 存在「死亡文字」漏洞，可能中斷行動通訊服務，但未詳述攻擊機制或受影響版本。

**參考來源:** [Android遭揭露「死亡簡訊」漏洞，可癱瘓手機通訊服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE40OXVsMGdwd2d5ZlZ1dTd6UjZBV28tUEFFbVhDQVVMYUNLM3R1T1BlWWNXSFp1WHRYTXZyR0NYa2NzVzJtV1J5Z0NTaUdwdw?oc=5>) 

---

📌 **安全每日報導，11 月 3 日：駭客駭入七國超過 115 家超市的冷凍設備，遠端升溫並造成食物損失 - iThome**

iThome 報導，駭客駭入七國超過 115 家超市的冷凍設備，遠端將溫度調高，並造成食物損失。

**參考來源:** [【資安日報】11月3日，歐洲7國逾115家超市冷凍設備遭駭客操控，遠端調高溫度導致食品損失 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9rNlhQMS1FSS1OcWpHbEZ0WWdUNmlLR0ZFNjFJWUd4S21EdUhzZEU5ZEFDS2l2dnJoUUY2SWc2UUNVM3lxblEyLWtNaUd4dw?oc=5>) 

---

📌 **Star Lux Airlines - iThome**

iThome 以標題「星悅航空 - iThome」報導星悅航空。

**參考來源:** [星悅航空 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE9FUFVBclNRUlM0MTBWa1oyYnQzU3dSdWoxcnphYjZtdXFjX2RLazl3cVNjbHlTZ2QtVVNvV2xCdEpYdWthZ09SRDlUVmpBZV96SUYzbG53SzNpaHNvQkkyT2FQM2RRbVJTenFobjcyYi0wSXZSX3c?oc=5>) 

---

📌 **CrowdStrike brings Falcon Guardian security into Anthropic's Claude Cowork - StreetInsider**

StreetInsider 報導，CrowdStrike 已將 Falcon Guardian 安全性整合到 Anthropic 的 Claude Cowork。

**參考來源:** [CrowdStrike brings Falcon Guardian security into Anthropic's Claude Cowork - StreetInsider](<https://news.google.com/rss/articles/CBMizAFBVV95cUxPQUk3dTdQNTM1YnNYOFJCME1mLWFDT2xaOEJzaFVWY18zUm92eHNyeXJXMDQ5dXU1YzhuNXJQUkdPbG5tVGhfMUZZUDRXYTA0Sm5ZaWNDRG9NLXF4YTV1TWFDd2hsSEpTQ3JuQlkzZnBycC1oLU43SVYzVV8tY0l3UGEtejY2TXVpamY2NGZoZzlDM045dGEtalpyQlFCallkM0liSi1xZUc0aDMteGtnektWWjZJS3Uwek1rMWpxdWtxRG5WNTBfUVVVdzQ?oc=5>) 

<!-- ciso-revision:ciso-20261103-1-1793731352404 -->
