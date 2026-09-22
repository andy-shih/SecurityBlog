---
title: "CISO 每日摘要：Jade Sleet 入侵印度 IT 服務商，Cisco、Pixel 零日遭利用 (20260921)"
description: "中國關聯 APT Jade Sleet 使用客製後門 FLATROOF 和 ROOFDECK 入侵一家印度 IT 服務供應商，揭示關鍵基礎設施供應鏈遭攻擊的擴大態勢。同時：Google 修補 Pixel 裝置上的活躍零日漏洞（月度更新含 110 項修補）；Cisco 發布緊急修補應對 Identity Services Engine 資訊洩露與 Secure Email Gateway SQL 注入漏洞，兩者均遭攻擊利用；ClickFix 魚叉式釣魚投放 ChainScript RAT，使用輪轉 C2 基礎設施；業界研究人員記錄 ShinyHunters 入侵 Clop 勒索軟體集團，標誌 APT-on-APT 活動升級。"
pubDate: 2026-09-21
tags: [Jade-Sleet, APT, FLATROOF, ROOFDECK, 印度-IT-服務商, Google-Pixel, Android-零日, CVE, Cisco-ISE, Cisco-ESG, SQL-注入, ClickFix, ChainScript-RAT, ShinyHunters, Clop-勒索軟體, APT-on-APT, 威脅情報, BlueMoon-工具組, 供應鏈, OT資安, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## 中國 APT 以客製後門攻入印度 IT 服務商；零日漏洞利用浪潮加速

**Jade Sleet**（**中國關聯 APT**）入侵一家 **印度 IT 服務供應商**，使用兩個客製後門 —— **FLATROOF** 和 **ROOFDECK** —— 本週由 **The Hacker News** 與業界威脅情報團隊首度披露。遭攻擊的供應商為多個產業別的企業提供基礎設施與託管服務，入侵似乎旨在 **取得供應鏈存取**，以進一步觸及下游客戶，反映出攻擊者優先鎖定 IT 服務供應商作為大型企業網路入口的模式。**Jade Sleet** 自至少 2019 年起活動，曾針對政府與關鍵基礎設施；使用客製後門與多階段部署基礎設施顯示 **高度資源與操作老練度**。

同時，**Google** 在月度 Android 更新中發布 **110 個資安漏洞的修補**，包括 **Pixel 裝置上的活躍零日** —— **核心媒體框架** 中的記憶體破壞漏洞，攻擊者 **已在野外武器化**。修補反映 **零日漏洞利用加速** 跨越行動平臺的趨勢；追蹤漏洞鏈的業界研究人員回報與 2025 年相比 **零日發現至利用的週期增加六倍**。

**Cisco** 本週針對企業基礎設施的兩個漏洞發布 **緊急修補**：
- **Cisco Identity Services Engine (ISE)** 資訊洩露漏洞 —— 已遭利用提取敏感行政資料
- **Cisco Secure Email Gateway (ESG)** SQL 注入漏洞 —— 允許 **未經身分驗證的命令執行為 root**

修補發佈之際，關鍵基礎設施運營商回報 OT 與 IT 邊界系統的入侵嘗試增加。

### 零日漏洞利用與供應鏈妥協的匯聚

- **零日漏洞利用現已成為企業基線。** **Pixel 零日在野外遭利用**，加上 **Cisco 漏洞已被攻擊**，防禦者無法再假設修補會在武器化前到位——威脅建模必須現在假設 **未修補關鍵系統的野外利用** 為預設起點。
- **經由 IT 服務供應商的供應鏈妥協是持續邊界。** **Jade Sleet** 針對印度 IT 服務供應商的攻擊鏡像了更廣泛模式：民族國家 **優先鎖定 IT 與託管服務供應商** 作為存取節點，因他們持有 **持久、聯邦身分** 進入數十或數百個客戶網路。單一遭竊供應商可解鎖數十個下游目標。
- **APT-on-APT 活動訊號市場整合與資料竊取規模化。** **ShinyHunters** 入侵 **Clop 勒索軟體集團**（本週報導）表示威脅行為者相互鎖定彼此的 **工具、受害者名單與談判資料** —— 升級被竊存取的價值並創造新攻擊向量（勒索軟體集團的受害者資料庫現在本身成為目標）。
- **企業修補視窗與零日利用週期不相容。** **Pixel 零日** 在修補發布前遭利用意謂行動裝置團隊數週內持續面臨風險；**Cisco 緊急發布** 提示 24–48 小時的運作偵測延遲。防禦者現必須假設 **妥協在修補間隔中發生** 並圍繞 **飛行中** 的入侵架構偵測與隔離，而非修補前預防。

🔗 **參考資料：** （[The Hacker News: Jade Sleet](https://thehackernews.com/2026/09/jade-sleet-linked-to-indian-it-provider.html)、[Android 安全公告 (2026年9月)](https://source.android.com/docs/security/bulletin/2026/2026-09-01)、[BleepingComputer: Pixel 零日](https://www.bleepingcomputer.com/news/security/google-fixes-actively-exploited-android-zero-day-on-pixel-devices/)、[Cisco ISE 公告](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-ise-inf-disc-LFWvcCu.html)、[Cisco ESG 公告](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-esa-inj-2bLVGmhX.html)、[The Hacker News: ClickFix ChainScript](https://thehackernews.com/2026/09/clickfix-lures-deploy-chainscript-rat.html)）

---

## 本週活躍威脅

📌 **Jade Sleet 以 FLATROOF 和 ROOFDECK 客製後門入侵印度 IT 服務商**
**Jade Sleet**（**自 2019 年起活動的中國關聯 APT**）以兩個客製後門入侵一家 **印度 IT 服務供應商**：**FLATROOF**（遠端存取木馬，具資料外洩能力）與 **ROOFDECK**（持久化與橫向移動工具）。供應商為多個行業別提供基礎設施管理與諮詢服務。研究人員評估漏洞是為 **供應鏈存取** 設計，利用 IT 供應商對數十個下游客戶網路的合法連結。**Jade Sleet** 過去針對政府與能源部門；客製工具與多階段基礎設施的複雜度提示 **重要資源與操作紀律**。事故應變團隊回報入侵可能 **未被偵測數週至數月**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/jade-sleet-linked-to-indian-it-provider.html)

📌 **Google Pixel 零日在野外遭利用：核心媒體框架遠端程式碼執行**
**Google** 在 **2026 年 9 月 Android 資安更新** 中修補一個 **活躍零日**，影響 **Pixel 裝置** —— **核心媒體框架** 中的記憶體破壞漏洞，允許 **具裝置權限的遠端程式碼執行**。該漏洞已知被武器化並用於鎖定攻擊；修補僅在 **武器化漏洞程式碼已在流通後**。更新含 **110 項總體資安修補**；Windows 與 macOS 等效項（Chrome 修補等）提示此漏洞期是 **跨平臺**。業界追蹤公司回報 **零日至利用的週期已壓縮至 24–72 小時**，相較 2025 年的 **數週至數月**。
🔗 **參考資料：** [Android 安全公告 (2026年9月)](https://source.android.com/docs/security/bulletin/2026/2026-09-01)、[BleepingComputer](https://www.bleepingcomputer.com/news/security/google-fixes-actively-exploited-android-zero-day-on-pixel-devices/)

📌 **Cisco Identity Services Engine 資訊洩露：行政資料曝險**
**Cisco** 對 **CVE-2026-20312** 發布 **緊急修補** —— **Cisco Identity Services Engine (ISE)** 中的資訊洩露漏洞，允許 **未經身分驗證的攻擊者提取敏感行政資料**，包括 **使用者憑證、組態詳情與授權政策**。漏洞 **已遭野外攻擊者利用**，鎖定醫療、財務與政府網路。無遠端程式碼執行，但 **行政憑證的洩露** 使下游橫向移動與持久化攻擊成為可能。受影響版本：**ISE 2.6.x 至 3.2.x**；修補適用 **3.2.x 及更新版本**。
🔗 **參考資料：** [Cisco 資安公告](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-ise-inf-disc-LFWvcCu.html)

📌 **Cisco Secure Email Gateway SQL 注入：未經身分驗證的根權限遠端程式碼執行**
**Cisco** 發布 **CVE-2026-20313** —— **Cisco Secure Email Gateway (ESG)** 中的 SQL 注入漏洞，允許 **未經身分驗證的遠端攻擊者以根權限執行任意命令**。漏洞位於 **電子郵件管理介面**，**已遭活躍利用**。攻擊者可鏈式使用 SQL 注入來 **繞過身分驗證** 並執行 **系統命令**，潛在導致 **完整閘道妥協** 與 **電子郵件攔截**。所有 **Secure Email Gateway** 支援版本受影響；修補隨 **緊急公告** 發布。
🔗 **參考資料：** [Cisco 資安公告](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-esa-inj-2bLVGmhX.html)

📌 **ClickFix 惡意程式行動升級：ChainScript RAT 使用 Polygon 鏈進行 C2 輪轉**
**威脅研究人員** 記錄 **ClickFix 惡意程式行動** 的升級——假 Windows「瀏覽器更新」彈窗導致 **ChainScript RAT** 感染。最新變種使用 **Polygon 區塊鏈** 來 **輪轉命令與控制基礎設施**，在 **智能合約中存儲 C2 位址**，允許攻擊者 **無須重新編譯惡意程式即改變 C2 端點**。此方法使 **基於 IP 的偵測與沉沒無效**，大幅 **提升執法接管的操作成本**。受害者主要是 **企業與政府機構**；感染向量是 **惡意廣告與遭竊網站**。資安公司回報 **每週感染 2,000+ 獨特機器**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/clickfix-lures-deploy-chainscript-rat.html)

📌 **ShinyHunters 宣稱入侵 Clop 勒索軟體集團：APT-on-APT 活動升級**
**ShinyHunters**（財務動機威脅行為者）本週宣稱入侵 **Clop 勒索軟體集團** 的基礎設施，取得 **受害者談判資料庫、洩露資料檔案與操作工具**。若驗證無誤，這代表 **大規模 APT-on-APT 活動** —— 威脅行為者相互鎖定彼此的竊取資料與工具。**Clop 的受害者名單** 是寶貴情報：它含有 **正在談判中的企業**，使競爭威脅行為者得以 **在贖金談判期間鎖定受害者** 與 **提取額外槓桿**。資安研究人員評估漏洞可能已曝光 **200+ 個 Clop 受害組織** 的詳情，這些組織正處談判或恢復後階段。
🔗 **參考資料：** [Bleeping Computer](https://www.bleepingcomputer.com/news/security/shinyhunters-leak-threatens-clop-ransomware-gang-victims/)

📌 **BlueMoon 漏洞工具組被四個獨立 APT 集團採用：武器商品化**
**網路資安研究人員** 回報至少 **四個不同 APT 集團** 已採用 **BlueMoon 漏洞工具組** —— 漏洞利用與酬載遞送工具的集合。此反映 **高級武器的商品化**：曾為民族國家行為者專屬的工具現已 **對多個威脅集團可用**，降低中階威脅行為者的準入門檻。**BlueMoon** 鎖定 **常見企業軟體**（PDF 閱讀器、Java、瀏覽器）並包含 **2–6 個月舊 CVE 的利用鏈**，提示工具組定期更新。
🔗 **參考資料：** [威脅情報公告](https://securityonline.info/bluemoon-exploit-kit-adopted-by-multiple-apt-groups/)

📌 **TASK#STOMP PowerShell 後門：竊取文件、Wi-Fi 密碼與剪貼簿資料**
**CrowdStrike** 發現 **TASK#STOMP**，經 **惡意 Office 巨集與 ISO 附件** 部署的 **PowerShell 後門**。惡意程式**從常見目錄竊取文件**、**從系統儲存提取 Wi-Fi 密碼**、**監控剪貼簿資料** 並 **經 HTTPS 洩露至攻擊者控制伺服器**。鎖定 **範圍廣泛**，涵蓋金融、醫療與政府；後門 **可能由 LLM 生成**，基於程式碼模式與結構。受害者 **對資料竊取毫不知情**，因惡意程式以 **最小處理級足跡** 運作。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/taskstomp-powershell-backdoor-steals.html)

📌 **台灣：農產品詐騙浪潮——每 2 則廣告有 1 則涉詐騙或虛假**
**台灣警政署** 回報 **農產品詐騙浪潮**：對 **社群媒體與分類廣告平臺** 的分析發現 **約 50% 的農產品廣告含有詐騙或重大不實**。受害者平均損失 **新台幣 15 至 50 萬元**；**生成式 AI 使犯罪分子得以大規模製造逼真產品照片與說明**。警方啟動工作小隊鎖定 **支持詐騙生態的跨境付款詐騙網路**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179062)

📌 **HPE 與 Oracle 戰略聯盟：十億級 AI 叢集基礎設施**
**惠普企業** 與 **Oracle** 宣布戰略夥伴關係，以 **加速大規模 AI 基礎設施部署** —— 鎖定 **百萬+ GPU 部署規模**。夥伴關係結合 **HPE 的 GreenLake 混合基礎設施平臺** 與 **Oracle 的 OCI 裸機 GPU 實例**，設計解決 **十億參數模型訓練** 的互連與冷卻挑戰。企業客戶現可 **訂購、部署與管理 AI 基礎設施** 以 **跨混合環境統一計費**。初期客戶包括 **金融服務與汽車部門**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179060)

📌 **美國財政部與金融主管機構鎖定 Xinbi 及東南亞詐騙生態**
**美國財政部** 與 **司法部** 啟動對 **Xinbi** 的協調行動——用於洗錢 **東南亞戀愛詐騙與豬殺詐騙網路** 所得的加密貨幣支付處理器。Xinbi 在 2025–2026 年處理 **超過 8 億美元犯罪所得**；行動涉及 **對平臺營運者的協調制裁** 與 **對關聯加密貨幣錢包的資產扣押**。執法部門回報 **實際詐騙損失可能超過 20 億美元**，**數千名美國公民** 遭害。行動訊號 **對跨境網路犯罪執法的優先順位提升**，針對 **東南亞詐騙基礎設施**。
🔗 **參考資料：** [財政部新聞稿](https://home.treasury.gov/news/press-releases/jy1589)

📌 **歐盟提議混合威脅緊急安全協議框架**
**歐盟** 提議新的 **緊急安全協議（ESP）** 框架，以協調成員國對 **混合威脅** —— 包含網攻、資訊操縱與供應鏈破壞的應變。框架規定成員國安全機構間 **實時資訊共享**、**協調應變程序** 與 **跨境事件的聯合調查團隊**。提案在 **俄羅斯聲稱數千場網攻命中選舉基礎設施** 期間提出（在俄及鄰近國家最近投票期間），以及 **歐洲關鍵基礎設施面臨民族國家行為者增加壓力** 之際。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179064)

---

## OPSWAT可以怎麼幫上忙

本週威脅跨越 **電子郵件附件利用**（**TASK#STOMP 巨集**）、**網路惡意程式投遞**（**ClickFix 與惡意廣告**）與 **韌體／供應鏈妥協**（**Jade Sleet 在 IT 服務供應商基礎設施的客製後門**）。**MetaDefender Multi-Scan** 以 **30+ 即時防毒引擎** 多層覆蓋電子郵件附件、下載檔案與雲端威脅資料；**MetaDefender CDR（Content Disarm & Reconstruction）** 重建 Office 文件、PDF 與壓縮檔以剝除作用中內容與巨集攻擊；**MetaDefender Kiosk** 在 **可卸除式媒體與網路邊界** 檢查檔案，在供應鏈取得惡意程式進入生產系統前攔截。
