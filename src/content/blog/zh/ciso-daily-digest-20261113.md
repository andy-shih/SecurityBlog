---
title: "CISO 每日摘要：嚴重 Red Hat Quay 漏洞讓攻擊者讀取與覆寫所有私有容器映像檔 (20261113)"
description: "部分摘要／翻譯未完成；保留已完成內容與原始來源。"
pubDate: 2026-11-13
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 今日資安新聞速覽

部分摘要／翻譯未完成；保留已完成內容與原始來源。

### 📌 嚴重 Red Hat Quay 漏洞讓攻擊者讀取與覆寫所有私有容器映像檔

Red Hat Quay 的嚴重漏洞可讓可存取 Quay 登錄檔的攻擊者，讀取並覆寫每個儲存庫中的私有容器映像檔。Quay 預設啟用匿名存取，而在啟用期間，攻擊者無需帳戶。若關閉匿名存取，任何持有有效帳戶的人仍可利用該漏洞。該公司已針對八個 Quay 3 分支推出修正組建，該漏洞列為 CVE-2026-123710（CVSS 評分：9.8）。該漏洞可讓攻擊者將自己的金鑰加入 Quay 信任的金鑰中，且無到期日期，之後 Quay 便會接受以該金鑰簽署的任何儲存庫憑證，進而擷取私有映像檔及其中儲存的任何機密。攻擊者也能推送或覆寫映像檔，讓該映像檔傳播至日後拉取該映像檔的每個系統；植入的金鑰在重啟後仍存在，直到有人將其移除為止。該漏洞亦可用來刪除運行中 Quay 執行個體所使用的金鑰，導致正常推送與拉取發生驗證錯誤。

**原始來源:** [Critical Red Hat Quay Flaw Lets Attackers Read and Overwrite All Private Container Images in a Registry](<https://thehackernews.com/2026/11/critical-red-hat-quay-flaw-lets.html>)

### 📌對 CISO 的影響

- **Quay 登錄檔金鑰輪替 —** 稽核稽核日誌中的未授權金鑰變更，移除未識別的服務金鑰，並部署修正後的 Quay 組建。在補救完成前，於 Proxy/負載平衡器處封鎖 /keys 端點存取。
- **N-central Agent 與 Probe 升級 —** 將 Agent 與 Probe 升級至 N-central 2026.4 HF1 或以上，並在額外防護驗證前停用 Legacy API 與 Intune 整合。鑑於加密貨幣挖礦程式部署與 root 級存取，應將確認的入侵視為完全違規，而非清理工作。
- **電信信令防禦 —** 部署 GTP-C 與 GTP-U 防火牆，將其設定為與 SS7 與 Diameter 防火牆共享資訊，並將整個 IPX 視為不受信任。在內部網路中增加信令協議偵測，並將安全控制與更廣泛的 IT 安全營運連結，以應對國家級的 SS7/Diameter 攔截活動。

---

### 📌 駭客利用 N-central 漏洞感染 21 台伺服器，其中 19 台執行 Hotfix 2

N-able 週四表示，因應新漏洞組（追蹤為 4EverAble2Shell 與 Agent2Shell）公開披露，正採取額外防護措施。這些措施可能影響部分功能，但在修復完成前，公司認為採取這些防護是保護合作夥伴及其客戶的正確做法。針對託管環境，已採取以下行動：產品中已預設關閉 Legacy API，且 Intune 整合已關閉，以待額外防護實作並完成驗證。N-able 建議內部部署客戶升級 Agent 與 Probe，並確保若先前曾啟用 Legacy API，則在環境中將其停用。N-able N-central 2026.4 HF1 會更新 Agent 與 Probe 的舊版組件，改變兩者的通訊方式；因此，升級 N-central 伺服器上的所有 Agent 與 Probe 是必須動作，以確保所有受管理裝置能正確通訊並已修補。多份威脅情報報告顯示，4EverAble2Shell 已從初步探查發展為主動攻擊，威脅行為者利用它在易受攻擊的伺服器上部署加密貨幣挖礦程式。攻擊發現將 Apache Axis 的嚴重漏洞（追蹤為 CVE-2026-90436，CVSS 評分：9.8）與獨立的 N-central 權限提升弱點串聯，以取得 root 級存取權。N-able N-central 的非經身驗證攻擊鏈（披露為 4EverAble2Shell）據報可讓遠端攻擊者以 root 權限執行任意作業系統命令。經過精心製作的請求會導致攻擊者選定的 JLine 類別處理惡意輸入，進而以 nable 服務帳戶執行命令。網路安全公司 Huntback 透露，相同 IP 位址正在利用 4EverAble2Shell 漏洞，透過前述 Shell 腳本於 21 台 N-central 伺服器上部署 XMRig 門羅幣加密貨幣挖礦程式。受感染的 N-central 伺服器集中於美國、南非、加拿大、英國、德國、法國與瑞典。該挖礦程式設計為僅使用一半可用 CPU 核心，可能為了避免引起注意。受感染的 N-central 伺服器集中於美國、南非、加拿大、英國、德國、法國與瑞典。該挖礦程式是目前觀察到的唯一有效載荷，但該權限提升授予操作者對管理客戶端點的主機擁有 root 權限。應將命中視為完全入侵，而非清理工作。僅套用 Hotfix 2 不足：這裡有 19 名受害者已經在執行該版本。

**原始來源:** [Hackers Exploit N-central Flaws to Infect 21 Servers, Including 19 Running Hotfix 2](<https://thehackernews.com/2026/11/hackers-exploit-n-central-flaws-to.html>)

---

### 📌 SilentAir 劫持亞洲電信網路攔截簡訊 2FA 碼並監視台灣用戶

新發現的間諜組織利用亞洲行動運營商內部被駭設備攔截特定對象的通話與簡訊，對象大多位於台灣。總部位於瑞典斯德哥爾摩的電信與網路安全軟體公司 Enea 於本週發現該組織的攻擊來源遍及至少六個亞洲國家，並將其命名為 SilentAir。該公司高度確信 SilentAir 為國家級行為者，但僅以低信度將其活動與中國連結。公司已通知發現 SilentAir 來源的運營商。它表示 SilentAir 目前已被破壞，但可能再次活躍。行動運營商使用 SS7 與 Diameter 協議交換信令訊息，以路由通話與簡訊並啟用漫遊。此流量經過名為 IPX 的共享網路，該網路基於運營商間的高度信任運行。SilentAir 將攻擊從被駭設備發送至 IPX。為了攔截，SilentAir 將 UpdateLocation 訊息或其 Diameter 對應訊息傳送至目標的本地網路。該訊息聲稱被駭設備現在正在為目標手機提供服務。若本地網路接受，該人的通話與簡訊將被轉送給攻擊者。部分攻擊成功。對部分目標，公司觀察到在轉送生效後立即攔截到雙重身份驗證（2FA）碼。這顯示試圖入侵這些人註冊的其他帳號。攔截佔 SilentAir 攻擊的 18.3%。對於典型的監控公司（即大多數信令攻擊背後的公司），此比例在該公司先前的研究中為 2.1%。部分目標為其所屬國家的政治與政府 VIP。在罕見情況下，SilentAir 數個國家的設備會共同協作針對這些目標，公司認為這表明存在單一控制者。攻擊呈突發狀態，從一個或少數幾個訂閱者於一個月內達數千個不等，突發之間間隔可長達數個月或更久。在台灣之外，目標主要位於其他東南亞與東亞網路，有時也在東非、中亞、中東與歐洲。使用被駭運營商自有網路的人也可能是目標，但公司無法觀察該流量。公司透過研究運營商間鏈路的攻擊發現了 SilentAir。自 2025 年初以來，它已追蹤來自一些通常不會發送攻擊的亞洲運營商，多半透過 SS7 且偶爾透過 Diameter 的異常攻擊。後續分析發現更早的可疑活動。根據公司技術報告，託管 SilentAir 的網路在處理被轉送目標的後續訊息時呈現異常且不一致的方式。這留下兩種解釋：外部人員正在偽造這些網路的信令地址，或每個網路內部的設備已被接管。隨後公司觀察到一家運營商內部的設備同時發送與接收攻擊命令，確認了第二種解釋。該設備的行為與其他網路中 SilentAir 來源完全相同。由於攻擊者深諳行動網路與信令防禦，初期偵測與阻斷攻擊困難。攻擊被遏制後，公司恢復了未授權存取的痕跡。它無法分析認為 SilentAir 使用的惡意軟體。報告未點名國家、運營商或任何目標。在一些國家，SilentAir 攻擊來自多個運營商。SilentAir 也大規模發送靜默簡訊，主要針對台灣訂閱者。這些簡訊不會在手機上顯示或發出提醒。白天，大多數靜默簡訊發送至其他網路（如東南亞網路）的訂閱者。其主要用途之一似乎是檢查轉送是否生效，公司表示。若測試簡訊到達被駭設備而非手機，攻擊者便知道自己正在接收該人的簡訊。大多數靜默簡訊在夜間發送，且其中大多數發送至台灣人。公司表示該訊息的目的未經確認。可能為批量檢查先前轉送是否仍然有效，因為手機在夜間最不太可能重新註冊至其真實位置。這些靜默簡訊帶有類似垃圾郵件的勵志或促銷行文，通常為英文。公司認為該文本是偽裝。若中途運營商移除訊息的靜默設定，收件者將將其視為垃圾郵件並忽略。公司對中國的低信度連結基於幾個跡象。SilentAir 專注於台灣且未針對中國網路或訂閱者。其追蹤與攔截攻擊也遵循 UTC+8（中國標準時間）的工作日模式。攻擊於早上 9 點開始，週末幾乎停止，並會在中國假日暫停或減緩。公司也考慮將其與 Liminal Panda 連結，後者為早前電信入侵事件的幕後組織。該公司稱這個連結有可能但未確認，目前不將兩組織歸為同一。在多個被駭運營商中，SilentAir 攻擊發生在已知的 Liminal Panda 感染期間。其他時候則沒有兩者合作的跡象。它們也針對亞洲同一地區的運營商，儘管 Liminal Panda 並無已知聚焦台灣的行為。SilentAir 的作業安全性似乎遠優於 Liminal Panda。獨立地，該公司的 GTP 防火牆自今年第一季度以來，已在多個客戶運營商處檢測到 Liminal Panda 活動。公司在那些地方阻斷了該組織的 GTPDoor 流量，並發現至少有 5 至 10 家運營商存在 Liminal Panda 感染，或強烈的跡象。GTPDoor 後門首次記錄於 2024 年 2 月 27 日，將命令隱藏在 GTP-C 中，GTP-C 是建立跨網路行動數據連線的協議。公司也發現新版本的證據，該新版本將命令隱藏在 GTP-U（負責承載用戶數據的 GTP 部分）中。GTP-U 流量較難檢查，儘管公司認為新版本主要作為備用。Enea 對運營商的建議：部署 GTP-C 與 GTP-U 防火牆，並將其設定為與 SS7 與 Diameter 防火牆共享資訊。超越業界關於信令安全的基本建議。將整個 IPX 視為不受信任。在自有網路內部增加信令協議偵測。將信令安全與其餘 IT 安全連結。報告不建議可能受通話與簡訊監控的個人採取行動。

**原始來源:** [SilentAir Hijacks Asian Telecom Networks to Intercept SMS 2FA Codes and Spy on Taiwanese Users](<https://thehackernews.com/2026/11/silentair-hijacks-asian-telecom.html>)

---

### 📌 Operation Endgame Takes Down Gootloader, CastleRAT and StealC Servers, Seizes 6.4M Stolen Logins

**原始來源:** [Operation Endgame Takes Down Gootloader, CastleRAT and StealC Servers, Seizes 6.4M Stolen Logins](<https://thehackernews.com/2026/11/operation-endgame-takes-down-gootloader.html>)

---

### 📌 Citrix Patches 12 NetScaler and Secure Access Client Flaws, Including Authentication Bypass

**原始來源:** [Citrix Patches 12 NetScaler and Secure Access Client Flaws, Including Authentication Bypass](<https://thehackernews.com/2026/11/citrix-patches-12-netscaler-and-secure.html>)

---

### 📌 Hackers Exploit PHP2Shell Flaws in Check Point Gateways to Deploy TSGA Backdoor and Wipe ESXi Files

**原始來源:** [Hackers Exploit PHP2Shell Flaws in Check Point Gateways to Deploy TSGA Backdoor and Wipe ESXi Files](<https://thehackernews.com/2026/11/hackers-exploit-php2shell-flaws-in.html>)

---

### 📌 ThreatsDay: 59 Linux Kernel Bugs, Falcon Spyware, GSocket Backdoors + 17 More Stories

**原始來源:** [ThreatsDay: 59 Linux Kernel Bugs, Falcon Spyware, GSocket Backdoors + 17 More Stories](<https://thehackernews.com/2026/11/threatsday-59-linux-kernel-bugs-falcon.html>)

---

### 📌 駭客集團UNC6783聲稱入侵資安院竊得102 GB資料，資安院：去年7月已進行資安通報 - iThome

**原始來源:** [駭客集團UNC6783聲稱入侵資安院竊得102 GB資料，資安院：去年7月已進行資安通報 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9XQ3UtRk1aNUlFaGdobzM5Tk5KcXF5MGQydUJzSENKWU92WmZPTXRxa2dRQWFpVGtUbk9JQmtpbkJhOE5aMW5yaVc3VEZxUQ?oc=5>)

---

### 📌 186 Fake AI Domains Redirect Users to ClickFix Lures, Browser Malware, and Search Hijackers

**原始來源:** [186 Fake AI Domains Redirect Users to ClickFix Lures, Browser Malware, and Search Hijackers](<https://thehackernews.com/2026/11/186-fake-ai-domains-redirect-users-to.html>)

---

### 📌 New SignDrop Zero-Day Exploit Turns Windows CLFS Security Feature Into SYSTEM Access

**原始來源:** [New SignDrop Zero-Day Exploit Turns Windows CLFS Security Feature Into SYSTEM Access](<https://thehackernews.com/2026/11/new-signdrop-zero-day-exploit-turns.html>)

---

### 📌 Sega сообщила об утечке email-адресов 2,2 млн человек

**原始來源:** [Sega сообщила об утечке email-адресов 2,2 млн человек](<https://xakep.ru/2026/11/13/sega-leak>)

---

### 📌 Хакеры из КНДР похитили более $400 млн с помощью поддельных видеозвонков

**原始來源:** [Хакеры из КНДР похитили более $400 млн с помощью поддельных видеозвонков](<https://xakep.ru/2026/11/13/facestealer-video-scams>)

---

### 📌 Microsoft выпустила патчи для 1200 уязвимостей, включая 0-day в Outlook

**原始來源:** [Microsoft выпустила патчи для 1200 уязвимостей, включая 0-day в Outlook](<https://xakep.ru/2026/11/12/november-2026-patches>)

---

### 📌 eMudhra憑證事故擴大，再有8張RSA中繼CA憑證遭撤銷 - iThome

**原始來源:** [eMudhra憑證事故擴大，再有8張RSA中繼CA憑證遭撤銷 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE42LWdMRXg1eFNuc0otNVQ4c2Y0QjNKZnRPWVNKLTk5azJmSDM3a2wwOWEtWDgyWmNDUElyZ2hzZWIyVzU1UFUyR3lyYkpkUQ?oc=5>)

---

### 📌 NIST發布對抗式機器學習攻擊分類草案，示警MCP工具供應鏈風險 - iThome

**原始來源:** [NIST發布對抗式機器學習攻擊分類草案，示警MCP工具供應鏈風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFByMkY1ZFIzT0VXVU9rMndrdzl6aTZXZDBFRFpCRlF3ajFoT01VdGQxUTFHS01OZjdtOUlFNmItOHZmREpmbGtfSDBVSDBTUQ?oc=5>)

---

### 📌 泰航、芬蘭航空因Amadeus資安事件外洩逾6萬、11萬旅客資訊 - iThome

**原始來源:** [泰航、芬蘭航空因Amadeus資安事件外洩逾6萬、11萬旅客資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4wREVBTDBkRHRqYVZOME5OYzg1cEJqbjB2M1g2YnhzSHdXc2tGamI3WHFwNGlOQzBrcDdjYW5rdUhNSmhFcVo1MG1VSV9VQQ?oc=5>)

---

### 📌 大聯大發生資安事件，部分員工姓名與公務電子郵件遭未經授權存取 - iThome

**原始來源:** [大聯大發生資安事件，部分員工姓名與公務電子郵件遭未經授權存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9RQWZsWF9NanJoTXVLZ0pTd1BjOHpON3Z3eXMybVF6UzVXVGdLS2sxSzFCS1FiclRBUXB1R1lSbjdPdjloNE5tQjNESGVvQQ?oc=5>)

---

### 📌 После взлома Railway хакеры потратили 740 000 долларов на ИИ

**原始來源:** [После взлома Railway хакеры потратили 740 000 долларов на ИИ](<https://xakep.ru/2026/11/13/railway-hack>)

---

### 📌 美而快電商系統遭異常存取，部分請求涉及會員訂單API - iThome

**原始來源:** [美而快電商系統遭異常存取，部分請求涉及會員訂單API - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1vSXhJMm8zWUJKb0lfcExLdk8tUEZndFoyTmh3eHJuMkxfSEttNWpJS0o1eG93UjllbG82U3pTLXRnRDVnd1JWaVRWdW1xUQ?oc=5>)

---

### 📌 South Korean privacy regulator investigates Anthropic over Claude account data exposure - Digital Watch Observatory

**原始來源:** [South Korean privacy regulator investigates Anthropic over Claude account data exposure - Digital Watch Observatory](<https://news.google.com/rss/articles/CBMie0FVX3lxTFBfQ3VBbXFKM0g1MTY0aUw4eno4cXlRT25JWDN3VWphT3JlRUNwMnRvWGdmSkF3VzdQc0hQR0ZZRHQ4aW90YXRTTGkxVC01bTFKUWtsNGNFd01xU2hsQ0c1UUR0U1FRbnlLWXhwbHdmQlZDUGZKM0tvcHlJUQ?oc=5>)

---

### 📌 WhiteArmor gang claims responsibility for latest cyber attack on shipping giant Maersk

**原始來源:** [WhiteArmor gang claims responsibility for latest cyber attack on shipping giant Maersk](<https://www.bitdefender.com/en-us/blog/hotforsecurity/whitearmor-gang-cyberattack-maersk>)

---

### 📌 長榮物流部分資訊系統遭攻擊，啟動資安防禦與復原機制 - iThome

**原始來源:** [長榮物流部分資訊系統遭攻擊，啟動資安防禦與復原機制 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9FT3NUNHR1S2puTTd3MHk0VVZRMk5vNG9QdDhlS21fVmZNRWZSQTB4dm5nWDQyTjV1ZFNGZHVqX0JRakJ4eWFaaXNkdS1nQQ?oc=5>)

---

### 📌 正能量智能子公司電商資料庫遭未授權存取，已通知受影響消費者並啟動資安應變 - iThome

**原始來源:** [正能量智能子公司電商資料庫遭未授權存取，已通知受影響消費者並啟動資安應變 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5pRkY4alFxMkY3c2o4emhzalFFaWMxUlN2NWJvWmRoOWo4NXZWc1RDWmN6N1ZFOGFvNUZGYThzRktzcFhWX092X2c2S3Vsdw?oc=5>)

---

### 📌 Хакеры отмыли 1052 украденных с Bitget BTC через миксер CoinJoin

**原始來源:** [Хакеры отмыли 1052 украденных с Bitget BTC через миксер CoinJoin](<https://xakep.ru/2026/11/13/bitget-coinjoin>)

---

### 📌 When an AI Agent Goes Wrong, Can You Stop It?

**原始來源:** [When an AI Agent Goes Wrong, Can You Stop It?](<https://thehackernews.com/2026/11/when-ai-agent-goes-wrong-can-you-stop-it.html>)

---

### 📌 Linux基金會調查揭軟體交付速度超過資安審查能力，近6成團隊跟不上 - iThome

**原始來源:** [Linux基金會調查揭軟體交付速度超過資安審查能力，近6成團隊跟不上 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5pZWxTMkdFVnBuQU1FRFhVNHNZNFdNUzk0R2kzN3NCcWFiM0Ytd3JNTmNtbGowdVVja0xuaUJEa0Zsdks1cDFyWEM2c2kxQQ?oc=5>)

---

### 📌 威力德生醫線上商店委外廠商發生資安事件，部分消費者訂單資料遭異常存取 - iThome

**原始來源:** [威力德生醫線上商店委外廠商發生資安事件，部分消費者訂單資料遭異常存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWdTFWVVY5d3E5Y3FQeF9yMDNSTW5qbDh5WlFFQWVhNjJLcWpYSnE4enYzUkpHU3JCT084MXZ6SXB0MmlmTU1SUDRsMFlPUQ?oc=5>)

---

### 📌 大金空調零件線上商城委外廠商發生資安事件，141筆訂單資料受波及、132筆個資遭未授權存取 - iThome

**原始來源:** [大金空調零件線上商城委外廠商發生資安事件，141筆訂單資料受波及、132筆個資遭未授權存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBoSmpzaFBMUEY0b0ttUUZIS1NOT1A0M0RzV0ROeFgwSlpyRFVwbV81ZFV3XzZGSlJpemhNeVhXelNDRmlvVXk4V1FkLUVnQQ?oc=5>)

---

### 📌 JVN: TightVNCおよびUltraVNCのWindows Viewerにおけるヒープベースのバッファオーバーフローの脆弱性

**原始來源:** [JVN: TightVNCおよびUltraVNCのWindows Viewerにおけるヒープベースのバッファオーバーフローの脆弱性](<https://jvn.jp/vu/JVNVU92656681>)

---

### 📌 N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome

**原始來源:** [N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA0bnRabktvT2NnWV8wWWxpVV9yZFVTcThQYXZwc0o2Mm1FT25zR1hWdm84eXZJZ0dqUWFoMVZWVXZQZVF4cWlmRVVscTN2UQ?oc=5>)

---

### 📌 Extortion Group Luna Moth Flits Into Law Firms a Second Time

**原始來源:** [Extortion Group Luna Moth Flits Into Law Firms a Second Time](<https://www.darkreading.com/data-privacy/extortion-luna-moth-law-firms-second-time>)

---

### 📌 JVN: CISA ICS Advisory / ICS Medical Advisory（2026年11月12日）

**原始來源:** [JVN: CISA ICS Advisory / ICS Medical Advisory（2026年11月12日）](<https://jvn.jp/vu/JVNVU90821966>)

---

### 📌 AI讓攻擊進入自動化時代，Google：企業更要管好Agent權限 - iThome

**原始來源:** [AI讓攻擊進入自動化時代，Google：企業更要管好Agent權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBhVzBYSFhfUkxmdUlNX3VCX0l0SzN5MDdpSmFiZTVmX2ptaGJvMTdmazVucTk4LXpyUFZRYWlxR2l3QlpUNnZ4MG42amJKUQ?oc=5>)

---

### 📌 JVN: PromZardにおけるリモートコード実行の脆弱性

**原始來源:** [JVN: PromZardにおけるリモートコード実行の脆弱性](<https://jvn.jp/vu/JVNVU98641453>)

---

### 📌 JVN: ImageMagickを利用したアプリケーションにおける任意ファイル読み書きの脆弱性

**原始來源:** [JVN: ImageMagickを利用したアプリケーションにおける任意ファイル読み書きの脆弱性](<https://jvn.jp/vu/JVNVU95718857>)

---

### 📌 【資安週報】1109～1113，Cyberbiz事件擴大、多家上市櫃公司接連公告，資安救火人力不足恐浮現 - iThome

**原始來源:** [【資安週報】1109～1113，Cyberbiz事件擴大、多家上市櫃公司接連公告，資安救火人力不足恐浮現 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4wSE14MUxrMkRyMVZNYlpzQjV1Szh3VW9DYVBXSmRvTFY2WDZfR3RQVDJTWDIzVEVMNGFYdjFSeUJGNHM4M1pJNUtfbmpyZw?oc=5>)

---

### 📌 JVN: ComfyUIのComfyUI-Easy-Use拡張機能における認証不要のパストラバーサルの脆弱性

**原始來源:** [JVN: ComfyUIのComfyUI-Easy-Use拡張機能における認証不要のパストラバーサルの脆弱性](<https://jvn.jp/vu/JVNVU99429639>)

---

### 📌 Cyber Experts Weigh In: How to Fight Artex &amp;amp; AntiFox

**原始來源:** [Cyber Experts Weigh In: How to Fight Artex &amp;amp; AntiFox](<https://www.darkreading.com/cybersecurity-operations/cyber-experts-fight-artex-antifox>)

---

### 📌 RSAC預測2027年資安趨勢：AI代理增加漏洞處理壓力，企業須強化GRC與事件應變 - iThome

**原始來源:** [RSAC預測2027年資安趨勢：AI代理增加漏洞處理壓力，企業須強化GRC與事件應變 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1aTXM3Q0w2ZDZERWJKTXZjS3NzMUdUZjZGX0MyNUJ0dXZiMVNBYnlYUkZTMzJHeGNuVUF1Y29WQmp3dWNJRm5jeld2RGZUdw?oc=5>)

---

### 📌 Новая хак-группа Arra Ghouls атакует российские организации

**原始來源:** [Новая хак-группа Arra Ghouls атакует российские организации](<https://xakep.ru/2026/11/12/arra-ghouls>)

---

### 📌 工具中毒 - iThome

**原始來源:** [工具中毒 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE14T21qSGlmcE9NQ011NmtNNHA1VGhia3RSdVM5Q3pjOFpTejQ4X3ZsdEs2blBrMHVlYlREMWhBV3hrWXZpbFA3SGNYWnNqY3BEdlF6V2RUSzhaRXd3OGZUbHRmWG5kVko0NzZ3dmZkVXJzM0lBcVE?oc=5>)

---

### 📌 Attackers in Binance Breach Targeted Known Weakness, Missing Controls

**原始來源:** [Attackers in Binance Breach Targeted Known Weakness, Missing Controls](<https://www.darkreading.com/cybersecurity-operations/attackers-binance-breach-targeted-weakness-missing-controls>)

---

### 📌 PHP2Shell漏洞肆虐 伺服器等不到修補時 企業該走的3個防護步驟 - iThome

**原始來源:** [PHP2Shell漏洞肆虐 伺服器等不到修補時 企業該走的3個防護步驟 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5ubEdmaFd6WU1id0dGdDVCWXJ4X3dKV2VVa2pXUm96azd6VkFJakVFUmdaNmUxa25HV0FLRmZPR1Y1d1VUOC1UNEpkSQ?oc=5>)

---

### 📌 Anthropic’s Claude Tops AI Rankings as OpenAI Limits Cyber Model - PYMNTS.com

**原始來源:** [Anthropic’s Claude Tops AI Rankings as OpenAI Limits Cyber Model - PYMNTS.com](<https://news.google.com/rss/articles/CBMivgFBVV95cUxNYlczWW5CYUlhR3h6QzBPcDk2aEZyMjhHZWMtYjJSTWtESjlQRmJBRUJvR0hrc2NfZGxDRDFrWjhaN0llbkhWVkdCdlU5WFhoVmhHUF9sX0U4WW1abWxrd2Rya25XRVdiaGFqZ0VodmhWWWZDMWZpYzBVdXAzbktKejlpQS05S1pYRjJfc3FaaGtxYk9XTzIwV3hlemFOX3hvclhsamFGNFdpM2FBLXczclZseDVpQnppOUNVd0tR?oc=5>)

---

### 📌 黃仁勳辭去Nvidia執行長立刻生效，財務長Colette Kress接任臨時執行長、董事會任命首任董事長 - iThome

**原始來源:** [黃仁勳辭去Nvidia執行長立刻生效，財務長Colette Kress接任臨時執行長、董事會任命首任董事長 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NRl9ENWFqTFhPVmlEOWxPaTFDLTJQaFNvUTlMay03WktJVTMwN1dkVzBhdHo3bDVMa2pBWkNNRkFfdm5tUE5DellrOU1HUQ?oc=5>)

---

### 📌 微軟Microsoft 365服務異常，影響全球多項服務 - iThome

**原始來源:** [微軟Microsoft 365服務異常，影響全球多項服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE55WksycWJLR1VpUGtHQXBYVUw3UnVoNlZZNGpydmdhSmxaTmtQcFhtdlJXQmRSTF9uQVFoYkFxSzZjazNNVHBQTmtZcWVBZw?oc=5>)

---

### 📌 Synology 推出全新 PAS3600 - iThome

**原始來源:** [Synology 推出全新 PAS3600 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5ZbTZPaVZqb1JIcTMxYmNYQUFWam51RFp1eDk0Z00tc1hXMl80ZUtfSFBjdWduaDFlUXZHX0ZZUmh4ODJvU215VER6dw?oc=5>)

---

### 📌 網擎策略投資微智安聯 攜手拓展日本與海外資安市場 - iThome

**原始來源:** [網擎策略投資微智安聯 攜手拓展日本與海外資安市場 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE92RFZYZ241UlZPWjFKQ2lNVzZpSzhpSF9vZjJjN2lPOTVXckkwWlNvZzhkYWFBbDZXa3ItQ0FXSjhiSzdDaG83UHBvWQ?oc=5>)

---

### 📌 蘋果將永久關閉產品支援社群，鼓勵用戶到官方網站尋求資訊 - iThome

**原始來源:** [蘋果將永久關閉產品支援社群，鼓勵用戶到官方網站尋求資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBPUEpocGhNUVFxY2lTU0cxYW1ubGQ0Rm8zTHpUQ2pJNW1YUzJCSG93LV8wZ05LRGVDU01YMG5sYUg2LVpQdzcxNVpmT0FUdw?oc=5>)

---

### 📌 Webinar: See How Identity Blind Spots Put Your SOC at Risk and How to Close Them

**原始來源:** [Webinar: See How Identity Blind Spots Put Your SOC at Risk and How to Close Them](<https://thehackernews.com/2026/11/your-soc-sees-alert-but-does-it-know.html>)

<!-- ciso-revision:ciso-20261113-1-available-1794591983321 -->
