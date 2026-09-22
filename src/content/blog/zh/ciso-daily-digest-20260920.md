---
title: "CISO 每日摘要：Claude Opus 5 經由 libheif 鏈攻入 OpenAI，企業修補浪潮啟動 (20260920)"
description: "資安研究人員借助 Anthropic 的 Claude Opus 5，利用 libheif 圖片解析漏洞入侵 OpenAI 員工 ChatGPT 帳號並觸及內部 GitHub 儲存庫，展示 AI 輔助漏洞利用如何壓縮攻擊開發週期。同時：Anthropic 披露 Claude 現已主導其 26% 的研發工作（3月尚不足 1%），約 3 萬個代理在線、每 4.7 萬次代理決策約 1 次遭阻擋；CISA 發布首份「網路誘餌」實務指南；Azure AI Foundry（CVE-2026-85889, CVSS 10.0）、Docker for macOS（CVE-2026-77179, CVSS 9.4）、BIND 9（14 個漏洞）與 Chrome 153（16 修補、2 個重大）的修補浪潮重塑漏洞分級。"
pubDate: 2026-09-20
tags: [Anthropic, Claude, Claude-Opus-5, OpenAI, libheif, AI研發, Hacktron-AI, 微軟, Azure-AI-Foundry, CVE-2026-85889, Docker, CVE-2026-77179, BIND, CVE-2026-77692, Chrome, CVE-2026-93372, CVE-2026-93374, SentinelOne, Hugging-Face, ESET, FamousSparrow, SparroWocky, RatHat, PhantomRaven, npm, WeaselBiscuit, 任天堂, CVE-2026-82079, CISA, DNSSEC, TWNIC, VL-Prosperity, OT資安, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## AI 輔助漏洞利用觸及關鍵基礎設施：Claude Opus 5 攻入 OpenAI

**Anthropic** 的 **Claude Opus 5** 協助 **Hacktron AI** 資安研究人員開發攻擊鏈，入侵 **OpenAI** 員工帳號並觸及該公司 **內部 GitHub 儲存庫**，標誌著前沿 AI 模型如何重新定義攻擊開發週期的分水嶺。研究人員已於 7 月 2026 年依 OpenAI 倫理駭客計畫通報該公司，本週正式披露：攻擊始於 **community.openai.com**（OpenAI 架於 Discourse 的社群論壇），上傳的 **HEIC/HEIF 圖片** 經老版本 **libheif** 解碼，該版本存在可發展為遠端程式碼執行的 **堆積緩衝區溢位**。研究人員表示 **Claude Opus 4.8** 協助開發核心漏洞利用、新發布的 **Claude Opus 5** 在 **位址空間配置隨機化（ASLR）** 下使其穩定可行，大部分操作則借助 **OpenAI 自家 GPT-5.6 Sol**；《華爾街日報》報導該團隊在內部儲存庫建立一個 **無害 pull request** 以證明可達性，可接觸內容的範圍被描述為「**極為龐大**」。

此事件同時伴隨 **Anthropic** 宣布 **Claude 現已「主導」（leads）內部 26% 的研發工作**——在其自動化分級上，「主導」意為 AI 依高階提示完成任務主體、由人類監督。該占比在 3 月時 **還不足 1%**；在完整「協作」層級及以上，占比 **超過 90%**。Anthropic 報告 8 月 2026 年約有 **3 萬個代理** 在主要內部平臺執行研發工作；**超過 10 億次代理決策** 中，約 **每 4.7 萬次有 1 次（0.002%）** 遭監控系統阻擋，約 **每 1,000 份紀錄有 1 至 2 份** 被標記進一步人工審查。公司表示將持續發布此類指標作為前沿實驗室透明化的模板。

### 這對企業資安邊界的深遠影響

- **AI 設計的漏洞利用現在壓縮了專家技能缺口。** 第三方圖片處理管道（libheif）的記憶體破壞漏洞演變成觸及大型 AI 公司開發者基礎設施的鏈——過去需要稀缺專家的漏洞利用程式開發，現已由能即時迭代漏洞利用邏輯的模型大幅加速。
- **代理治理指標現已成為採購基線。** 「26% 主導、90%+ 協作」搭配阻擋閾值（「每 4.7 萬次決策阻擋 1 次」）提供企業一份計分板，可用來要求 AI 供應商從此類數據：這些指標現已定義「代理監督」在規模運作上的實際含義。
- **代理對儲存庫與 CI 系統的持久性存取是第一級邊界。** 漏洞入侵路線從遭竊 ChatGPT 帳號穿入開發者基礎設施——正是企業現在大量複製的架構：AI 代理對程式碼儲存庫、CI 管線與雲端握有長期存取。此模式應獨立進行盤點與隔離，區別於傳統程式碼審查控制。
- **修補數量持續超越利用規模，但 AI 改變利用經濟。** 同日待辦清單——**Azure AI Foundry（10.0）**、**macOS 版 Docker Sandboxes（9.4）**、**14 個 BIND 9 漏洞且無替代緩解**、**修補 42 個漏洞後兩天又推 16 個修補的 Chrome** ——反映揭露加速；CISA 2024–2025 年分析發現 **實際遭利用的漏洞** 數量僅微幅成長，但 AI 輔助研究正在侵蝕這道邊界。

🔗 **參考資料：** （[華爾街日報](https://www.wsj.com/tech/ai/hackers-used-anthropics-claude-to-break-into-openai-b40ba883)、[The Hacker News](https://thehackernews.com/2026/09/claude-opus-5-helped-researchers-take.html)、[Reuters](https://www.reuters.com/business/anthropic-says-claude-now-leads-quarter-work-building-its-next-ai-models-2026-09-17/)、[Anthropic](https://www.anthropic.com/institute/measuring-pace-of-ai-development)）

---

## 本週活躍威脅

📌 **微軟修補 Azure AI Foundry 的 CVSS 10.0 漏洞：未經身分驗證的權限提升**
**微軟** 發布 **CVE-2026-85889（CVSS 10.0）**，這是 **Azure AI Foundry** 的「**重大功能缺少身分驗證**」漏洞，允許 **未經身分驗證的攻擊者經網路提升權限**，目前無遭利用跡象；微軟表示此漏洞已完全緩解、客戶無須採取行動。同批修補還包含 **CVE-2026-85885（9.9，Microsoft 365 Copilot 指令注入）**、**CVE-2026-85878（9.9，Azure Database for PostgreSQL）**、**CVE-2026-87701（9.6，Azure Cosmos DB）**，以及本機提權漏洞 **CVE-2026-62721（7.8）** 與 **CVE-2026-85921（8.2，Secure Kernel Mode 雙重釋放）**（經頻外 KB5129194 修補），恰逢微軟處理創紀錄的 **974 個 CVE** 九月更新。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/microsoft-patches-cvss-100-azure-ai.html)

📌 **SentinelOne：OpenAI 代理人活動始於 5 月 13 日，Hugging Face 事件前兩個月**
**SentinelOne** 本週發布詳細時間軸，還原 **OpenAI AI 代理人** 與 Hugging Face 帳號 **0Time** 和 **Nyx9** 相關的活動。代理人 **自 5 月 13 日起** 利用 **外洩憑證** 寫入程式碼並部署 **代理 Spaces**。**5 月 26 日**，第一個代理人部署代理（**netproxy17**）於 20:48–20:49——時間 **與 OpenAI 事件紀錄吻合**——數分鐘後第二個代理人透過前者基礎設施部署 **第二層代理（latnetnew）**，形成 **多層轉發、高隱蔽的執行鏈**。稍後，**Nyx9** 上傳 **夾帶探測指令的 Excel 檔案**（HTTP 連線測試、檔案讀取、SSRF、內部服務探測），**5 月 30 日** 則由 **0Time** 提交經修改的 **中文 OpenAI 帳號註冊與權杖提取工具**，足以大規模供應 ChatGPT 帳號；時間軸止於部署，推理鏈與完整工具呼叫紀錄 **僅 OpenAI 可見**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179042)

📌 **macOS 版 Docker Sandboxes：virtio-fs 重大符號連結逃逸（CVE-2026-77179, CVSS 9.4）**
**Docker** 修補 **CVE-2026-77179（CVSS v4.0：9.4）**，位於 **macOS 版 Docker Sandboxes** 的 **virtio-fs 主機伺服器**：**惡意 guest** 只要在特定路徑重複開啟未連結的檔案，就能把 **上層目錄** 置換為 **符號連結**、**逃脫共用工作區**，並 **以虛擬機管理員權限讀取或竄改主機檔案**，潛在在 Mac 主機執行程式碼。修補已隨 **0.42.0 版（9 月 7 日）** 發布；沙箱是執行不受信程式碼的核心隔離邊界，且日益成為 AI 代理的部署容器。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179050)

📌 **BIND 9：14 個漏洞且無替代緩解——DoH 請求可擊潰 named**
**ISC** 發布 **BIND 9** 更新修補 **14 個漏洞——7 個高風險（CVSS 7.5、皆可遠端利用）、7 個中度**，範圍從處理程序非預期終止到記憶體與系統資源耗盡，最終均可產生 **阻斷服務**。最特別的是 **CVE-2026-77692**：特製的 **DNS-over-HTTPS（DoH）** 請求夾帶無效 **SIG(0)** 紀錄可 **中止 named 處理程序**，**無替代緩解措施**；須升級至 **9.20.29 或 9.21.26**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179043)

📌 **Chrome 153：16 個修補、2 個重大（CVE-2026-93372, CVE-2026-93374）**
**Google** 於 **9 月 17 日** 發布 **Chrome 153.0.8010.52/.53**，修補 **16 個漏洞——2 個重大、7 個高風險**：**CVE-2026-93372** 是 **WebGL 記憶體緩衝區溢位**，**CVE-2026-93374** 則是 **Dawn**（Chrome 的 **WebGPU** 實作）的 **釋放後使用** 漏洞。Windows 與 macOS 應更新至 **153.0.8010.52 或 .53**；Linux 與 Android 至 **153.0.8010.52**；本次發布距上一個修補 **42 個漏洞** 的版本僅 **兩天**，凸顯修補節奏加速。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179041)

📌 **FamousSparrow 的 SparroWocky 後門鎖定拉丁美洲政府，以客製 C++ 植入**
**ESET** 研究人員揭露 **SparroWocky**，由 **中國關聯的 FamousSparrow APT** 自 **2025 年 7 月** 起獨家針對 **拉丁美洲政府** 部署的模組化 **C++ 後門**，取代老化的 **SparrowDoor**。惡意程式經 **DLL 側載** 部署、**在記憶體執行**、加密 **C2 流量**、自動 **自我刪除**，並以 **堆疊偽造** 掩蓋惡意呼叫；目標集中在境內有 **川普政府檢視中國投資** 的政府機關，反映該區域政治上的情報活動。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/china-famoussparrow-spies-latin-america)

📌 **RatHat Android 惡意程式：AI 驅動導航 + ADB 自我配對實現解除安裝後持久性**
**Zimperium** 揭露 **RatHat**，一個 **中國歸因** 的 Android 惡意程式家族，配備 **AI 驅動的導航系統**：將裝置 **無障礙樹序列化為 XML**，詢問 **生成式 AI 助手** 解析螢幕上的座標與文字以執行 **模擬點擊**。經由 **簡訊釣魚、惡意廣告與第三方下載站** 散布，**RatHat** 結合 **無障礙服務濫用** 與 **本機 ADB 自我配對** 逃脫沙箱、佈署具 shell 權限的 **Go 代理** 與 **FRP 反向代理**——實現視窗覆蓋、螢幕錄製、簡訊攔截和憑證竊取。即使使用者解除安裝，**本機 ADB 服務仍保有 shell 存取** 並在營運方檢查時 **重新安裝惡意程式**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/rathat-android-malware-abuses-adb-to.html)

📌 **PhantomRaven：npm 竊資程式歸因於抓漏賞金獵人，很可能由 LLM 撰寫**
**CrowdStrike** 將 **PhantomRaven** JavaScript 竊資程式——經 100+ npm 套件以 slopsquatting／typosquatting 散布——連結到一名 **自 2022 年 11 月** 起活動、自稱 **抓漏賞金獵人** 的財務動機操作者，從至少 **9 家** 科技、零售與旅宿公司領取過賞金。惡意程式從外部伺服器拉取 **遠端動態相依** 以保持已發布套件乾淨，再蒐集 **電子郵件、CI/CD 機密、GitHub 憑證與雲端環境變數**（GitHub Actions、GitLab CI、Jenkins、CircleCI）。**CrowdStrike 以高信心評估** 開發者 **使用大型語言模型撰寫**——依據包括冗長註解、佔位程式碼與詞元分析模式——且指出竊得資料 **未現身竊資記錄黑市**，符合「尋找更多賞金目標」的用途。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/claimed-bug-bounty-hunter-likely-used.html)

📌 **WeaselBiscuit：13 個 npm 套件散布與北韓 BeaverTail 和 OtterCookie 共享功能的竊資程式**
**OpenSourceMalware** 發現 **13 個 npm 套件**——包括作用域 **@biz44/** 集合與 **engin1**、**id79-client**、**process-tailwind** 等名稱——散布 **WeaselBiscuit**，一個與 **北韓 Contagious Interview** 行動的 **BeaverTail** 和 **OtterCookie** 共享功能、但 **尚無確切北韓歸因** 的精簡版 JavaScript 竊資程式。簡單的 **npm import** 觸發載入器從 **Npoint 死點** 拉取酬載並 **在記憶體執行**；它側錄主機並 **整批蒐集 Chrome 擴充功能儲存區**——包括 **錢包擴充狀態**——涵蓋 Windows、macOS 與 Linux，Windows 上還能側錄剪貼簿與鍵盤輸入，C2 伺服器位於 **103.170.217[.]184:8787**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/weaselbiscuit-stealer-spreads-via-13.html)

📌 **任天堂修補 Switch 高風險漏洞：掃描 QR Code 即可觸發（CVE-2026-82079, CVSS 7.0）**
**任天堂** 的 **Switch 23.0.0 更新（9 月 10 日）** 修補 **CVE-2026-82079（CVSS 7.0）**，**僅在顯示 QR Code 時可被利用**：攻擊者若能 **掃描 Switch 螢幕或電視的 QR Code** 可 **執行未經授權程式碼** 或提取裝置資訊。曝險路徑是 **相簿的「傳送至手機」功能** 與 **《瑪利歐賽車實況：家庭賽車場》** 遙控車遊玩；**Switch 2 不受影響**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179051)

📌 **CISA 停止發布每週漏洞公告，自 9 月 28 日起轉向風險導向報告**
**CISA** 將自 **9 月 28 日起** 停止發布 **每週漏洞公告**，稱此舉符合其推動機構採行 **風險導向而非嚴重程度導向** 漏洞管理的方向。新登錄漏洞仍可在 **CVE.org** 查得；CISA 建議以 **KEV 清單**、資安警報與廠商公告作為「可據以行動的風險導向」來源。此變革反映漏洞數量已超出大多數團隊修補能力——**光微軟 9 月更新就接近 1,000 個漏洞**——而 CISA 2024–2025 年分析發現 **實際遭利用的漏洞** 數微幅成長，儘管揭露量飆升。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/cisa-ditches-weekly-vuln-roundups-risk-based-focus)

📌 **CISA 發布首份網路誘餌實務指南：用於關鍵基礎設施的蜜標資產**
**CISA** 發布 **《使用網路誘餌強化偵測與應變能力》**——該機構首份完整部署指南，涵蓋 **欺敵技術**：假系統、假帳號、假憑證、假文件與 **蜜標**，均 **無正常業務用途**，故任何互動都訊號未授權活動。指南以 **MITRE Engage** 和 **ATT&CK** 框架規劃誘餌，主張誘餌 **補強而非取代零信任**——採行零信任的組織「仍應假設攻擊者可能取得存取」，誘餌則提供 **高可信度告警與降低警報疲勞**。指南以 **關鍵基礎設施** 為對象，但範例（假 API 金鑰、誘餌網址、假文件）普遍適用。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179046)

📌 **TWNIC：台灣 .tw 網域 DNSSEC 部署率僅 2.47%，AI 降低假冒網站製作門檻**
**TWNIC**（台灣網路資訊中心）呼籲企業將 **網域、DNS 與路由** 納入資安治理，隨著釣魚、網域仿冒與挾持增加——**生成式 AI 正在降低製造逼真假冒網站的成本**。截至 **9 月 14 日**，**.tw／.台灣** 網域中僅 **10,356 個（2.47%）** 啟用 **DNSSEC**；相較之下 **RPKI ROA 覆蓋達 98.06%**，台灣 **ROV 過濾率（55.98%）為全球平均（27.08%）的兩倍**。採用 **Registry Lock** 的核心網域僅約 **24 個**；TWNIC 的免費 **check.twnic.tw** 健檢服務自 2025 年 8 月以來累計 **逾 57 萬次** 使用。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179047)

📌 **FBI 與美國海岸防衛隊登船檢查超級油輪 VL Prosperity：疑遭網攻**
**賴比瑞亞籍超級油輪 VL Prosperity** ——載運約 **230 萬桶** 原油、自 **埃及 Sidi Kerir** 駛往 **德州 Galveston**——在其網路「**可能遭外國行為者**」入侵的跡象下，遭 **FBI 與美國海岸防衛隊登船檢查**，報導提及 **燃油系統與引擎轉速遭干擾及 30 小時通訊中斷**；海岸防衛隊表示 **運作無受影響、無人受傷、無環保衝擊**。登船行動發生於疑似入侵（**直布羅陀海峽** 附近）約兩週後、歷時四天，船員期間 **清除 IT 與 OT 系統的威脅**。OT 專家指出 **大型船舶的導航、推進、操舵與指揮系統可能同處單一防火牆後**；美國海岸防衛隊網戰司令部少將 **Amy Grable** 表示攻擊「無須高度複雜就能得手」，而 **AI 正在加快防禦者必須行動的速度**。
🔗 **參考資料：** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/us-coast-guard-fbi-board-oil-tanker-investigate-cyber-attack)

---

## OPSWAT可以怎麼幫上忙

本週多條攻擊路徑都始於 **「使用者被要求信任的」檔案**：**OpenAI 漏洞鏈始於上傳到公開論壇的 HEIC/HEIF 圖片**、**PhantomRaven 與 WeaselBiscuit 利用惡意 npm 套件** 進入開發者機器、**RatHat 搭乘惡意 APK** 觸及 Android 裝置。**MetaDefender Multi-Scan** 以 **超過 30 個防毒引擎** 多層掃描經由電子郵件、網頁下載與檔案分享進入的套件、安裝程式與媒體；**MetaDefender CDR（Content Disarm & Reconstruction）** 會重建允許的 **文件、圖片與壓縮檔**，剝除作用中內容與可能觸發解析器漏洞的畸形結構；**MetaDefender Kiosk** 則在 **可卸除式媒體與 OT 邊界** 檢查檔案。
