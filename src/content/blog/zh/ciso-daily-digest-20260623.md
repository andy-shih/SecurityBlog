---
title: "CISO 每日摘要：Oracle 發布 243 項修補程式、供應鏈攻擊與 FortiBleed 持續升溫 (20260623)"
description: "Oracle 發布 243 項安全性更新，含多項 CVSS 10.0 重大漏洞；ShapedPlugin WordPress 供應鏈攻擊侵害超過七萬個網站；惡意 npm 套件散布 Windows 遠端木馬；FortiBleed 駭客將遭竊防火牆憑證武器化；DifyTap 漏洞暴露 AI 跨租戶對話資料；Apple A12/A13 BootROM 漏洞 usbliter8 曝光。"
pubDate: 2026-06-23
tags: [oracle, 供應鏈攻擊, fortibleed, wordpress, npm, 漏洞, apt, apple, bootrom, ai安全]
author: "Security Solutions Team"
featured: true
---

## Oracle 發布 243 項修補程式——多項 CVSS 滿分漏洞需緊急應對

Oracle 發布 2026 年 6 月關鍵安全修補更新（Critical Patch Update, CPU），總計修補 **243 項漏洞**，涵蓋旗下數十項產品線，其中包括多項 CVSS 嚴重性達 **10.0 滿分**的重大漏洞。受影響產品包含 Oracle Database、Fusion Middleware、Identity Manager、PeopleSoft 及 E-Business Suite 等。

此次更新發布之際，威脅行為者已開始在實際攻擊中武器化 Oracle PeopleSoft 漏洞。本月稍早，ShinyHunters 駭客組織被發現積極利用 **CVE-2026-35273**（PeopleSoft PeopleTools 零時差漏洞），促使 CISA 將其納入已知遭利用漏洞（KEV）目錄。此次 CPU 的規模——243 項修補程式含多項滿分漏洞——標誌著每一家運行 Oracle 企業軟體的組織都面臨嚴峻的修補壓力。

### 這對漏洞管理節奏的深遠影響

單次 CPU 中就出現如此大量的關鍵嚴重性修補程式，凸顯了企業修補優先排序日益嚴峻的挑戰。隨著 CISA 開始強制要求修補時程（KEV 漏洞三天內完成修補），且威脅行為者在漏洞揭露後數日內即將其武器化，企業已無法再將每季 CPU 視為例行維護。CVSS 10.0 漏洞橫跨多條產品線，意味著 Oracle 堆疊中單一未修補的系統就可能成為橫向滲透的跳板——尤其當結合 ShinyHunters 等組織展示的橫向移動能力時。

🔗 **參考資料：** 綜合報導（[iThome](https://www.ithome.com.tw/news/176795)）

---

## 本週活躍威脅

📌 **FortiBleed——遭竊 Fortinet 憑證被用於主動攻擊活動**

FortiBleed 事故持續升溫，新的技術細節陸續曝光。研究人員揭露攻擊者使用名為 **FortigateSniffer** 的工具從遭入侵的 Fortinet 設備中竊取憑證，目前已有超過 **七萬台設備的憑證** 在犯罪論壇中流傳。iThome 報導指出，攻擊者正積極將遭入侵的 FortiGate 防火牆轉變為憑證竊取代理伺服器，擴大其攻擊範圍。Fortinet 回應稱這些資料為過往洩漏憑證的重新整理與散布，但攻擊面仍然嚴峻——自原始洩漏以來未輪換 VPN 和管理員憑證的組織仍處於暴露狀態。Dark Reading 指出攻擊者正持續擴大目標鎖定範圍，特別針對未修補或配置不當的 FortiGate 設備。

🔗 **參考資料：** [iThome：技術細節](https://www.ithome.com.tw/news/176813) | [iThome：Fortinet 回應](https://www.ithome.com.tw/news/176784) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/fortibleed-attackers-firewalls-credentials-st)

📌 **ShapedPlugin 供應鏈攻擊侵害逾七萬個 WordPress 網站**

針對知名 WordPress 外掛開發商 **ShapedPlugin** 的供應鏈攻擊導致多款高級外掛被植入後門。遭篡改的外掛經由官方管道散布，估計影響超過 **七萬個網站**。後門賦予攻擊者完整的管理員權限——包含檔案上傳、資料庫操作及使用者帳號建立。運行 ShapedPlugin 外掛（包括 WP Blocks 及其他高級產品）的組織應立即稽核部署情況、輪換 API 金鑰，並驗證外掛檔案完整性。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/shapedplugin-wordpress-pro-plugins.html)

📌 **惡意 npm 套件偽裝 PostCSS 工具散布 Windows 遠端木馬**

威脅行為者發布了偽裝成 PostCSS 開發工具的**惡意 npm 套件**，可在開發者工作站上安裝 Windows 遠端存取木馬（RAT）。此攻擊瞄準軟體供應鏈的開發階段——安裝這些域名搶註（typosquatting）套件的開發者會在不知情的情況下將後門部署到本地環境，甚至可能進入 CI/CD 管道。該 RAT 具備持續存取、憑證竊取及橫向移動能力。此事件緊隨最近一波針對 JavaScript/Node.js 生態系統的同類攻擊，凸顯了軟體組成分析（SCA）與運行時套件監控的必要性。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/malicious-npm-packages-pose-as-postcss.html)

📌 **DifyTap漏洞暴露 AI 跨租戶對話資料**

研究人員揭露 **DifyTap**——一系列開源 AI 應用平台 Dify 的漏洞，可能允許攻擊者存取不同租戶間的 AI 對話資料。這些漏洞影響使用 Dify 建置 LLM 應用程式的組織，可能導致敏感的對話資料——包括內部業務策略、客戶個資及專有程式碼——暴露給未經授權的第三方。此事件凸顯了 AI 應用平台中租戶隔離尚未成熟的新興攻擊面。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/researchers-detail-difytap-flaws-in.html)

📌 **Apple BootROM 漏洞 usbliter8 影響 A12、S4/S5 及 A13 晶片**

安全研究人員揭露了 **usbliter8**，一個影響 Apple A12、S4/S5 及 A13 系統單晶片設計的 BootROM 漏洞。該漏洞存在於 USB 控制器與 SecureROM 配置中，允許具備實體 USB 存取權限的攻擊者在開機早期執行程式碼。值得注意的是，此漏洞無法透過軟體更新完全修補，因為它存在於唯讀記憶體（BootROM）中。影響範圍涵蓋 iPhone XS 至 11 系列、Apple Watch Series 4/5 及使用這些晶片的 iPad 機型。管理大量 Apple 設備的組織應檢討實體安全控制與 DFU 模式限制。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176808)

📌 **PCPJack 活動攻擊 230 臺 AWS、GCP、Azure 伺服器建置 SMTP 中繼傀儡網路**

代號為 **PCPJack** 的攻擊活動已入侵約 **230 臺雲端伺服器**（橫跨 AWS、Google Cloud 及 Azure），將其改造為用於垃圾郵件與釣魚攻擊的 SMTP 中繼傀儡網路。攻擊者利用配置不當的雲端實例與弱憑證取得初始存取權，隨後部署持續性的中繼基礎設施。對雲端安全團隊而言，這再次凸顯了邊界強化的關鍵重要性——尤其應關閉未受限制的 SMTP（port 25）對外流量、實施身分感知存取控制，並持續監控雲端安全態勢。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176796)

📌 **OpenAI 擴張 Daybreak 計畫，推出 GPT-5.5-Cyber 協助防禦方修補漏洞**

OpenAI 的 **Daybreak** 資安計畫進一步擴張，推出 **GPT-5.5-Cyber**——一個專為協助防禦者識別與修補漏洞而設計的專業模型。該模型專注於安全分析任務——程式碼漏洞審查、漏洞研究及修補驗證。此舉反映了 AI 廠商將其模型武器化應用於攻防雙方的廣泛趨勢，也標誌著 AI 驅動的漏洞發現正從新興技術發展為標準安全能力。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/openai-expands-daybreak-with-gpt-55.html)

📌 **FFmpeg 修補 PixelSmash 遠端程式碼執行漏洞**

FFmpeg 多媒體框架已修補 **PixelSmash**——一個可經由處理特製媒體檔案觸發的嚴重遠端程式碼執行漏洞。考量 FFmpeg 在影片串流、監控、媒體處理及內容管理系統中的廣泛使用，此漏洞影響範圍極廣。在正式環境中使用 FFmpeg 的組織應優先進行此更新。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176794)

---

## OPSWAT可以怎麼幫上忙

本週威脅情勢以**供應鏈與檔案傳遞攻擊**為主軸——從遭篡改的 WordPress 外掛、惡意 npm 套件，到 FortiBleed 憑證竊取與跨租戶 AI 平台漏洞。這些威脅共享相同的檔案傳遞途徑：攻擊者將看似合法的軟體武器化，以滲透受信任的環境。

OPSWAT MetaDefender 的**多引擎掃描（30+ 防毒引擎）+ 深度內容消毒與重建（CDR）** 可在套件、外掛及二進位檔案到達端點或 CI/CD 管道之前，即時偵測並中和威脅。ShapedPlugin WordPress 後門與惡意 npm RAT 正是多引擎掃描搭配 CDR 能夠在導入點偵測與防護的典型檔案傳遞攻擊。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
