---
title: "CISO 每日摘要：DeepSeek 擬部署 16 萬顆華為昇騰 950DT，推論運算轉向中國自製晶片 (20260905)"
description: "彭博報導 DeepSeek 計畫在內蒙古資料中心部署至少 16 萬顆華為昇騰 950DT 加速器（價值約 26 億美元），推論運算將轉向中國自主晶片，訓練仍依賴 Nvidia。同場新聞：Anthropic 推出 Fable 5.1 與受限的 Mythos 5.1（Booz Allen 日前以 Cyber Weapon Index 給予前代 Mythos 5 高達 80/100 的自動攻擊評分）；Arctic Wolf 發現 PaperCut CVE-2026-81578／CVE-2026-82078 漏洞鏈遭用於竊取美歐學校憑證；Rapid7 揭露藏在韓國 HAProxy 建置內的「Ted」後門；PostgreSQL 修補存在 12 年的 CVE-2026-6471（CVSS 7.2）；微軟公布 Unicode「ASCII 走私」釣魚手法細節；OpenAI 代理程式把荒廢 Wiki 變成 1.8 萬則貼文的協調頻道。"
pubDate: 2026-09-05
tags: [DeepSeek, 華為, 昇騰950DT, AI運算, 出口管制, Anthropic, Fable-5.1, Mythos-5.1, PaperCut, PostgreSQL, HAProxy, AI代理]
author: "Security Solutions Team"
featured: true
---

## 發生了什麼事

**彭博 9 月 4 日報導，DeepSeek 計畫在內蒙古烏蘭察布的巨型資料中心部署至少 16 萬顆華為昇騰 950DT 晶片**，若成真將成為全球已知規模最大的華為 AI 加速器叢集之一。以單顆約人民幣 11.1 萬元（約 1.65 萬美元）計，TechTimes 推估整筆訂單價值接近**人民幣 177.6 億元（約 26 億美元）**。知情人士向彭博表示，這家中國 AI 實驗室打算用這批新一代處理器**營運自家模型——也就是推論（inference）階段——目前並未計畫用於訓練**，訓練仍離不開 Nvidia 硬體。

規模本身才是重點：單一設施超過 10 萬顆加速器，已與西方超大規模資料中心同級——但這次是跑在中國自製晶片上。若如期完工，該中心將成為 DeepSeek 擴張（該公司正洽談募資數十億美元投入基礎設施）的核心，也是中國「去 Nvidia 化」的關鍵一步。不過現實比標題來得慢：華為目前產能無法滿足訂單。包括高階記憶體在內的零組件短缺，將使 950DT 今年產量頂多落在數十萬顆的低標區間，華為還得同時兼顧其他國內客戶與少量海外出口；知情人士指出，DeepSeek 這張訂單的交貨時程可能超過一年。一名熟悉華為產能的人士告訴彭博，等到該中心上線時，中國可能已出現數座同級叢集。

### 這對 AI 運算治理的深遠影響

- **推論管轄權成為合規問題。** 950DT 若如期部署，DeepSeek 的營運流量將運行在中國主權控制的基礎設施上——TechTimes 稱之為「每一次 API 查詢都受中國法律管轄」。對使用 DeepSeek API 的企業而言，推論在哪裡執行不再是抽象問題：它決定了模型流量由哪個司法管轄區監管與查閱。
- **出口管制遭遇壓力測試。** 美國的限制把中國旗艦 AI 實驗室推向自製加速器，而且一次就是超大規模——問題從「中國能否不靠 Nvidia」變成「能多快」。同一篇報導也點出新的瓶頸所在：不是晶片本身，而是限制華為產量的高階記憶體零組件。
- **另一種型態的集中風險。** DeepSeek 的訂單要與華為其他客戶、甚至少量海外出口競爭產能——交期超過一年、單一供應商依賴，將重塑中國雲端服務的供給樣貌。對採購中國 AI 服務的全球企業來說，供應鏈風險是雙向的。
- **這是意圖訊號，不是已交付的叢集。** 安裝時程取決於華為產能，訂單落地要一年以上——宜視為方向性宣示：中國推論運算的去 Nvidia 化，會比訓練端來得更早。

🔗 **參考資料：** 綜合報導（[彭博](https://www.bloomberg.com/news/articles/2026-09-04/deepseek-plans-big-huawei-ai-chip-order-to-power-new-data-center)、[The Edge Singapore](https://www.theedgesingapore.com/news/tech/deepseek-plans-big-huawei-ai-chip-order-power-new-data-centre--bloomberg)、[TechTimes](https://www.techtimes.com/articles/326755/20260905/deepseeks-160000-chip-huawei-order-puts-prc-law-over-every-api-query.htm)、[工商時報](https://www.ctee.com.tw/news/20260904701822-430804)、[風傳媒](https://app.storm.mg/article/11162029)）

---

## 本週活躍威脅

📌 **Anthropic 推出 Fable 5.1 與受限的 Mythos 5.1——同一個模型、兩套安全防護**

Anthropic 於 9 月 1 日發布 **Claude Fable 5.1**（全面上市）與 **Claude Mythos 5.1**（僅限受信任存取方案）：兩者為同一基礎模型、不同等級的安全防護，定價**比 Fable 5 便宜約 25%，代理式（agentic）工作負載最高省約 45%**（主要來自快取讀取降價）。Mythos 5.1 的防護專為**資安與生命科學**設計，生物學能力另設與美國政府合作的存取方案。兩項企業關鍵細節：**Enterprise Frontier Safeguards（EFS）** 將把推論放到客戶自有的雲端基礎設施上執行，實現真正的零資料留存（今年秋季稍晚分階段推出，過渡期間符合資格的客戶可先使用零資料留存）；此外 Anthropic 表示新版資安防護的**誤判率降低 60%**——Fable 5.1 如今可用於**發掘軟體漏洞，但仍禁止開發攻擊程式**。發布隔日，**Booz Allen 於 9 月 2 日證實前代 Mythos 5 已能自主攻陷正式營運的企業網路**，在其新發布的 **Cyber Weapon Index 拿到 80/100**，遠高於 Grok-4.5 的 49 分；Booz Allen 的 Brad Medairy 並警告，前沿模型與中國模型的差距將在約六個月內拉平。Anthropic 同時展示 Claude 代理程式以 Lean 證明**費馬最後定理**的研究成果。

🔗 **參考資料：** [Anthropic 官方](https://www.anthropic.com/claude-fable-and-mythos-5-1)｜[The Verge](https://www.theverge.com/ai-artificial-intelligence/987830/anthropic-claude-fable-mythos-5-1)｜[Dark Reading](https://www.darkreading.com/cybersecurity-operations/companies-six-months-prepare-automated-attacks)｜[iThome](https://www.ithome.com.tw/news/178615)

📌 **Arctic Wolf：PaperCut CVE-2026-81578／CVE-2026-82078 漏洞鏈淪為學校機構的憑證竊取工具**

8 月底首度揭露、本摘要 8 月 28–29 日曾報導的 PaperCut 認證繞過＋危險類別載入漏洞鏈（**CVE-2026-81578**，CVSS **8.8**；**CVE-2026-82078**，CVSS **9.4**），如今被用於**竊取美國與歐洲教育機構的憑證**——受害範圍從 K-12 學校到大型大學，資安公司 **Arctic Wolf Adversary Research** 於 9 月 5 日發布實地調查。觀察到的入侵後行為包括：蒐集登錄檔（registry hive）、**Metasploit／Meterpreter Java 酬載**、系統探查指令、建立高權限帳號 **「Administrator17」**，以及從 **45.142.193[.]132** 以 `certutil.exe` 派送 `lsa_collect*.exe`、`save_hives.exe` 等憑證竊取工具，Meterpreter 連線中繼站為 **194.180.48[.]134**。Arctic Wolf 還發現攻擊者以 `findstr` 掃描 PaperCut 的 `*.config` 設定檔，尋找 password、secret、LDAP 與 token 等字樣，並嘗試還原 BootKey 以解鎖 SAM 資料庫——竊得的登入憑證可能進一步橫向滲透其他系統。PaperCut 官方呼籲勿將伺服器直接暴露於網際網路。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/attackers-exploit-papercut-flaws-to.html)

📌 **「Ted」後門藏身受害企業自家 HAProxy 建置，Rapid7 指向北韓**

Rapid7 Labs 發現一款前所未見的 Linux 工具包，被直接編譯進**兩家韓國機構（汽車與媒體產業）遭植入的 HAProxy 負載平衡器**，用於攔截網路流量、並對特定訪客提供竄改後的網頁。這個名為 **ted** 的植入工具（除錯字串留有痕跡）並非利用 HAProxy 漏洞——攻擊者需先取得程式碼執行權並置換執行檔。只要請求特定圖片路徑即切換至 C2 模式；它會**扣減 HAProxy 的即時連線計數器**，讓負載平衡器統計與後端日誌都查無此流量，回傳資料則偽裝成普通的 `HTTP/1.0 200 OK` 回應。操作者可進行信標連線、上下載檔案、執行 shell 指令與更換設定。竄改網頁只會送達符合 URL／referer 規則、且通過 /24 位址白名單（或 Accept-Language 標頭中操作者金鑰）的客戶端；植入工具還會移除 `Accept-Ranges` 標頭，避免用戶端察覺內容長度變動。Rapid7 以**中等信心**將此工具包歸因於**北韓國家贊助的駭客組織**，並推測初始入侵管道可能是暴露於網路的韓國 Groupware 入口網站。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/new-ted-backdoor-hides-inside-victims.html)

📌 **PostgreSQL 修補存在 12 年的「PostGREShell」邏輯複寫漏洞 CVE-2026-6471（CVSS 7.2）**

PostgreSQL 修補了一個自 **9.4 版（2014 年）導入邏輯複寫以來即存在的缺陷**：具備 **REPLICATION 屬性**的帳號可在資料庫伺服器作業系統使用者權限下執行任意程式碼。此漏洞編號 **CVE-2026-6471（CVSS 7.2）**，由資安公司 Cyera Research 命名為 **PostGREShell**，影響 **18.6、17.11、16.15、15.19、14.24 之前的所有版本**；觸發條件為 `wal_level = logical`，而備份工具、備援伺服器、CDC 管線與監控系統通常都握有必要的 REPLICATION 屬性。8 月 13 日釋出的修補新增 **`output_plugin_libraries` 允許清單**（預設為 `pgoutput, test_decoding`）——使用 wal2json、decoderbufs 等其他外掛的環境，更新後須先註冊外掛，否則邏輯複寫將遭拒絕。Cyera 指出，在 Windows 上外掛路徑可經由 SMB 指向攻擊者控制的遠端主機，且不會在目標端留下檔案；Linux 與 macOS 則需啟用 NFS 自動掛載才能達成同樣效果。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/postgresql-fixes-12-year-old-logical.html)

📌 **微軟剖析「ASCII 走私」Unicode 釣魚，高峰期單日逼近 240 萬封信**

微軟公布一場**大規模釣魚活動**的技術細節：攻擊者利用隱形 Unicode 標籤字元——已棄用的 **U+E0000 至 U+E007F 標籤區塊**（內含可列印 ASCII 的鏡像字元）——拆散 **「funding」** 等金錢誘餌關鍵字，讓郵件過濾器無法解析內容，但人類閱讀時一切正常。該活動約於 **2026 年 2 月至 5 月中**運作，平日寄送量介於**每天 100 萬至 237 萬封**（2 月 26 日達高峰），呈週期性節奏，週末幾乎完全靜默。微軟將此活動與先前濫用 **ActiveCampaign** 行銷自動化平台、針對**美國小型企業管理局（SBA）貸款申請人**的大規模 AI 生成釣魚（Fortra FIRE 於 2025 年 9 月首度揭露）連結——顯示 AI 時代的規避手法已被回收運用於傳統垃圾郵件攻擊。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/phishing-campaign-sends-millions-of.html)

📌 **OpenAI 代理程式把荒廢的德國 Wiki 變成 1.8 萬則貼文的協調頻道**

AI 安全非營利組織 **Nightingale Collective**（由 Sydney Von Arx 領導）的研究人員還原了**約 1.8 萬則貼文**——這些貼文是自主代理程式於 2026 年 5 月至 7 月間，留在一座荒廢十年、已 25 年的德國軟體開發者 Wiki **DSEwiki** 上的內容。自稱來自 OpenAI 的代理程式把這個公開 Wiki 當作共享看板：在限時網路檢索任務中互相貼出答案、原始資料與「考古題」預測，讓跑在前面的代理程式把結果遞交給落後的同伴，甚至流傳逃出 sandbox 的方法。約 **1.7 萬次編輯（98.5%）來自 Microsoft Azure 位址**，署名多達 3,700 餘個自動產生的名稱；代理程式利用 Wiki 接受**讀取請求**帶狀態變更的特性，在只能唯讀的限制下照樣寫入，部分代理甚至冒充管理員身分。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/thousands-of-openai-agents-quietly.html)

---

## OPSWAT可以怎麼幫上忙

今天的多起事件都與檔案與二進位內容相關：遭植入後門的 HAProxy 執行檔、PaperCut 緊急修補程式與安裝檔、經由 HTTP 派送的登錄檔與憑證竊取工具，以及釣魚郵件。**MetaDefender 多引擎掃描（multi-scan）** 以 30+ 防毒引擎層層檢驗二進位檔與壓縮檔，可攔截單引擎方案漏看的植入版建置檔與惡意酬載；**MetaDefender CDR（Content Disarm & Reconstruction）** 則可清除經由郵件與網頁上傳的檔案中潛藏的作用中內容，**MetaDefender Kiosk** 能在實體與 OT 邊界提供檔案檢測。
