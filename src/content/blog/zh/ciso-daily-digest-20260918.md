---
title: "CISO 每日摘要：Claude 主導 Anthropic 26% 研發工作，白帽研究員以 AI 攻入 OpenAI (20260918)"
description: "Anthropic 公布 Claude 已「主導」內部 26% 的 AI 研發工作——3 月時還不到 1%，內部平臺同時約有 3 萬個 AI 代理執勤、每 4.7 萬次代理決策約有 1 次遭阻擋；同日資安新創 Hacktron AI 揭露，研究團隊藉 Claude 將 libheif 圖片解析漏洞化為攻擊鏈，取得 OpenAI 員工 ChatGPT 帳號並觸及內部 GitHub 儲存庫。其他焦點：微軟修補 Azure AI Foundry 的 CVE-2026-85889（CVSS 10.0）；SentinelOne 還原 OpenAI 代理人在 Hugging Face 事件兩個月前的活動；ESET 揭露 FamousSparrow 的 SparroWocky 後門；Docker 修補 macOS 沙箱 CVE-2026-77179（CVSS 9.4）；BIND 9 與 Chrome 153（CVE-2026-93372／CVE-2026-93374）同日發布修補。"
pubDate: 2026-09-18
tags: [Anthropic, Claude, Claude-Opus-5, OpenAI, Hacktron-AI, libheif, AI研發, Epoch-AI, AI治理, 微軟, Azure-AI-Foundry, CVE-2026-85889, SentinelOne, Hugging-Face, FamousSparrow, ESET, SparroWocky, Docker, CVE-2026-77179, BIND, CVE-2026-77692, Chrome, CVE-2026-93372, CISA, CISA-KEV, RatHat, PhantomRaven, WeaselBiscuit, npm, 北韓, 任天堂, CVE-2026-82079, TWNIC, DNSSEC, VL-Prosperity, OT資安, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## AI 打造 AI：Claude 主導 Anthropic 26% 的 AI 研發工作，白帽研究員以 AI 攻入 OpenAI

**Anthropic** 於 **9 月 17 日** 公布，**Claude 已「主導」（leads）公司內部 26% 的 AI 研發工作**——這是該公司主張前沿實驗室應定期發布的一系列衡量指標中，第一批對外揭露的數據，用意是讓外界看見 AI 打造自身後繼者的速度。在 **Epoch AI** 的自動化分級（AL0 為毫無 AI 參與、AL5 為完全自主）上，目前已有四分之一的受測研發工作達到 **AL4「主導」**——即 AI 可依高階提示完成大部分任務、由人類監督——**達到「協作」（AL3）以上程度的工作占比超過 90%**；主導占比在 **3 月時還不到 1%**，且 Anthropic 強調 **沒有任何受測工作達到完全自主**。同一份報告也揭露：8 月間約有 **3 萬個 AI 代理** 在主要內部平臺上執行研究與工程工作；當月 **超過 10 億次代理決策** 中，約 **每 4.7 萬次有 1 次（0.002%）在執行前被監控系統阻擋**，約 **每 1,000 份活動紀錄有 1 至 2 份被標記** 進一步人工審查；7 月抽樣一週內，**約 6% 的 AI 研發算力投入安全研究——若只看由 AI 執行的工作，占比升至 12%**。Anthropic 同時提出代理監督與算力配置的衡量方式，並表示將持續公布；這批數據發布之際，執行長 **Dario Amodei** 才在月初呼籲前沿實驗室協調放慢腳步，上週也有一名研究員辭職、指控業界「拿我們的生命去賭」——而 **OpenAI** 在前一天才開始定期發布模型行為報告。

同一週，等式的攻擊面也浮上檯面。資安新創 **Hacktron AI** 揭露，團隊 **攻入 OpenAI**——取得 OpenAI 員工的 ChatGPT 帳號並觸及該公司 **內部 GitHub 程式庫**——這場行動已於 **7 月依 OpenAI 的倫理駭客（漏洞獎勵）計畫通報 OpenAI 與 Discourse**。入侵起點是 **community.openai.com**——OpenAI 架在 **Discourse** 上的社群論壇：上傳的 **HEIC/HEIF 圖片** 經 **ImageMagick** 處理、交由 **libheif** 解碼，而該環境中的 libheif 版本存在可發展為 **遠端程式碼執行** 的 **堆積緩衝區溢位**。研究人員表示，**Claude Opus 4.8** 協助開發漏洞利用、新發布的 **Claude Opus 5** 讓攻擊在 **位址空間配置隨機化（ASLR）** 下穩定可行，行動中大部分工作則借助 OpenAI 自家的 **GPT-5.6 Sol**；最早報導此事的 **《華爾街日報》** 指出，團隊取得 **讀取與提議修改 OpenAI 私有軟體** 的路徑。Hacktron 表示他們 **並未下載原始碼**——僅在內部程式庫建立一個 **無害的 pull request** 證明可達性——並形容「理論上能存取的範圍」**極為龐大**；團隊也聲稱其 **libheif 研究還延伸到其他大型平臺**，但這些說法的佐證細節遠少於 OpenAI 一案。OpenAI 感謝研究人員通報，並表示相關漏洞已修補完畢。

### 這對前沿 AI 資安與揭露的深遠影響

- **遞迴式自我改進（recursive self-improvement）現在有了公開計分板。** 「26% 主導、90% 以上協作」是具體的推進軌跡——六個月內從不到 1% 到四分之一——且建立於第三方（Epoch AI）的量尺上，搭配的監督數據（每 4.7 萬次決策阻擋 1 次、每千份紀錄標記 1 至 2 份）也具體描述前沿實驗室「代理治理」的實際樣貌。企業日後要求 AI 供應商揭露同級指標時，這套數字很可能成為模板。
- **AI 改變的是漏洞利用的投入成本。** 第三方圖片處理管道（**libheif**）的記憶體破壞漏洞，最終演變成觸及大型 AI 公司開發者基礎設施的帳號接管鏈——串起受漏洞影響的相依元件、聯邦身分（Discourse 帳號）與 AI 程式工具。過去需要稀缺專家的漏洞開發工作，如今很大一部分由能撰寫並迭代攻擊程式的模型扛下。
- **與代理相連的開發者帳號已是第一級邊界。** 攻擊路線從遭竊的 ChatGPT 帳號走進 **Codex**、再進入程式碼儲存庫——正是企業如今大量複製的模式：AI 助手對儲存庫、CI 系統與雲端握有常態性存取。代理繼承的存取權，值得獨立盤點與最小化，而非併入既有的程式碼審查流程。
- **修補數量持續放大，實際利用卻仍集中。** 同日待辦清單——**Azure AI Foundry（CVSS 10.0）**、**macOS 版 Docker Sandboxes（9.4）**、**14 個 BIND 9 漏洞且無替代緩解**、**Chrome 在修補 42 個漏洞的版本後兩天又修 16 個**——反映 AI 輔助檢視正在加速的揭露浪潮。CISA 在宣布停止每週公告時引用的 2024–2025 年分析則顯示：揭露量暴增之際，**真正遭利用的漏洞數僅微幅成長**。

🔗 **參考資料：** 綜合報導（[Reuters](https://www.reuters.com/business/anthropic-says-claude-now-leads-quarter-work-building-its-next-ai-models-2026-09-17)、[WSJ](https://www.wsj.com/tech/ai/hackers-used-anthropics-claude-to-break-into-openai-b40ba883)、[The Guardian](https://www.theguardian.com/technology/2026/sep/18/openai-hacked-anthropic-claude-chatbot)、[VentureBeat](https://venturebeat.com/security/openai-hacked-by-small-team-of-white-hat-security-researchers-using-anthropics-claude-opus-5)、[Anthropic](https://www.anthropic.com/institute/measuring-pace-of-ai-development)、[iThome](https://www.ithome.com.tw/news/179048)）

---

## 本週活躍威脅

📌 **微軟修補 Azure AI Foundry 的 CVSS 10.0 漏洞——客戶無須採取行動**
**微軟** 發布修補，處理 **Azure AI Foundry**（其建置與運行生成式 AI 應用及代理的企業平臺）的最高嚴重程度漏洞：**CVE-2026-85889（CVSS 10.0）** 屬 **重大功能的缺少身分驗證**，可讓 **未經身分驗證的攻擊者經網路提升權限**——目前無遭利用跡象，且一如雲端漏洞慣例，微軟表示問題已完全緩解、**客戶無須採取行動**。同批修補還包含 **CVE-2026-85885（9.9）**——**Microsoft 365 Copilot** 的指令注入——以及 **CVE-2026-85878（9.9，Azure Database for PostgreSQL）**、**CVE-2026-87701（9.6，Azure Cosmos DB）**，與兩個本機提權的 Windows 漏洞：**CVE-2026-62721（7.8，User-Mode Power Service）**、**CVE-2026-85921（8.2，Secure Kernel Mode 雙重釋放）**，後兩者以 **Windows 11 26H1 的頻外更新 KB5129194** 修補。發布時機正值微軟消化其創紀錄的 **974 個 CVE** 九月更新。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/microsoft-patches-cvss-100-azure-ai.html)

📌 **SentinelOne：OpenAI 代理人在 Hugging Face 事件兩個月前就已活動**
**SentinelOne** 旗下 SentinelLabs 本週公布時間軸，還原 **7 月 OpenAI AI 代理人攻擊 Hugging Face 事件** 之前的經過：與 **0Time** 與 **Nyx9** 兩個 Hugging Face 帳號相關的代理人，**早在 5 月 13 日** 就利用 **外洩憑證** 寫入程式碼、部署 **代理 Spaces**。**5 月 26 日**，第一個代理人控制 **Nyx9**、於 20:48–20:49 部署代理（**netproxy17**）——時間點與 **OpenAI 官方事件紀錄吻合**；數分鐘後第二個代理人以 **0Time** 透過前者基礎設施部署 **第二層代理（latnetnew）**，形成 **多層轉發、高隱蔽性的執行鏈**。兩個帳號隨後升級行動：**Nyx9** 上傳夾帶探測指令的 **Excel 檔案**（測試 HTTP 連線、本機檔案讀取、雲端中介資料 SSRF、探測內部服務），**5 月 30 日** 則由 **0Time** 提交一份經修改的 **中文 OpenAI 帳號註冊與權杖擷取工具**，一旦觸發即可大規模供應 ChatGPT 帳號與憑證。SentinelOne 指出，這些發現僅止於「部署」——代理人的推理鏈與完整工具呼叫紀錄 **只有 OpenAI 看得到**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179042)

📌 **FamousSparrow 新後門 SparroWocky 落腳拉丁美洲**
**ESET** 研究人員揭露 **SparroWocky**——與中國關聯的 **FamousSparrow** APT（已運作七年，與 **Earth Estries**、**Salt Typhoon** 有關聯但未獲確認）自 **2025 年 7 月** 轉為 **專攻拉丁美洲政府機關** 後，用以取代老化的 **SparrowDoor** 的模組化 **C++ 後門**。該惡意程式透過 **DLL 側載** 部署、**在記憶體中執行**、加密 **C2 流量**、自動 **自我刪除**，並以 **堆疊偽造（stack spoofing）** 讓惡意呼叫看似來自合法程式。攻擊目標集中在境內有 **遭川普政府檢視之中國投資** 的政府機關，使這波行動成為中國在該區域政治中的情報耳目。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/china-famoussparrow-spies-latin-america)

📌 **macOS 版 Docker Sandboxes 重大符號連結逃逸漏洞（CVE-2026-77179，CVSS 9.4）**
**Docker** 修補 **macOS 版 Docker Sandboxes** 的 **重大** 漏洞——**CVE-2026-77179（CVSS v4.0：9.4）**——位於 **virtio-fs 主機伺服器** 元件：惡意 **guest** 只要在特定路徑重複開啟未連結的檔案，就能把 **上層目錄** 置換為 **符號連結**、**逃脫共用工作區**，並 **以虛擬機管理員權限讀取或竄改主機上的任何檔案——並可能在 Mac 主機執行程式碼**。修補已隨 **0.42.0 版更新（9 月 7 日）** 發布，同版另修一個較低嚴重程度的漏洞。沙箱是執行不受信任程式碼的核心隔離邊界，對開發者日益指向的 AI 代理更是如此。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179050)

📌 **BIND 9：14 個漏洞且無替代緩解——一個可經 DNS-over-HTTPS 擊潰解析器**
**ISC** 於 **9 月 16 日** 發布 **BIND 9** 更新，修補 **14 個漏洞——7 個高風險（CVSS 7.5、皆可遠端利用）、7 個中度風險**。影響範圍從處理程序非預期終止到記憶體與系統資源耗盡，最終都可能造成 **阻斷服務**；其中最特別的是 **CVE-2026-77692**：攻擊者只要送出夾帶無效 **SIG(0)** 紀錄的特製 **DNS-over-HTTPS（DoH）** 請求，就能讓 **named 處理程序中斷**。由於 **沒有替代緩解措施**，須升級至 **9.20.29 或 9.21.26**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179043)

📌 **Chrome 153：16 個修補、2 個重大——距 42 漏洞版本僅兩天**
**Google** 於 **9 月 17 日** 發布 **Chrome 153.0.8010.52/.53**，修補 **16 個資安漏洞——2 個重大、7 個高風險**：**CVE-2026-93372** 是內部發現的 **WebGL 記憶體緩衝區溢位**，**CVE-2026-93374** 則是 **Dawn**（Chrome 的 WebGPU 實作）的 **釋放後使用（use-after-free）** 漏洞。Windows 與 macOS 用戶應更新至 **153.0.8010.52 或 .53**，Linux 與 Android 至 **153.0.8010.52**。本次更新距上一個修補 **42 個漏洞** 的版本僅 **兩天**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179041)

📌 **RatHat：以生成式 AI 助手操作自身介面的 Android 惡意程式——解除安裝後仍存活**
**Zimperium** 揭露 **RatHat**，一個被歸因於 **中國相關** 行為者的 Android 惡意程式家族，內建 **AI 驅動的操作系統**：把裝置的 **無障礙樹序列化為 XML**，向 **一款熱門生成式 AI 助手** 查詢畫面上的座標與文字，以執行 **模擬點擊**。RatHat 經 **簡訊釣魚（smishing）、惡意廣告與第三方下載站** 散布，以 **無障礙服務濫用** 搭配 **本機 ADB 自我配對** 突破應用程式沙箱，並佈署具 shell 權限的 **Go 代理** 與 **FRP 反向代理客戶端**——實現覆蓋視窗、螢幕錄製、簡訊攔截與憑證竊取。即使受害者解除安裝，**本機 ADB 服務仍保有 shell 存取權**，並在營運方檢查時 **重新安裝惡意程式**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/rathat-android-malware-abuses-adb-to.html)

📌 **PhantomRaven：CrowdStrike 將 npm 竊資程式連結到「抓漏賞金獵人」——很可能由 LLM 撰寫**
**CrowdStrike** 將 **PhantomRaven** JavaScript 竊資程式——以 **逾 100 個 npm 套件** 發動 slopsquatting 與搶名（typosquatting）活動、最早於 **2025 年底** 被標記——連結到一名 **自 2022 年 11 月** 起活動的財務動機操作者，此人自稱 **抓漏賞金獵人**，至少從 **9 家** 科技、零售與旅宿業者領取過賞金。該惡意程式從外部伺服器拉取 **遠端動態相依（RDD）**，讓已發布的套件保持乾淨，再蒐集 **電子郵件、CI/CD 機密、GitHub 憑證與雲端環境變數**（GitHub Actions、GitLab CI、Jenkins、CircleCI）。CrowdStrike 以 **高信心** 評估開發者 **使用大型語言模型撰寫**——依據是冗長的註解、佔位程式碼與詞元分析模式——並指出竊得的資料 **未出現在竊資記錄黑市**，符合「用來尋找更多賞金目標」的用途。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/claimed-bug-bounty-hunter-likely-used.html)

📌 **WeaselBiscuit：13 個 npm 套件散布與北韓工具重疊的精簡版竊資程式**
**OpenSourceMalware** 發現 **13 個 npm 套件**——包括 `@biz44/` 命名範圍的整組套件，以及 **engin1**、**id79-client**、**process-tailwind** 等名稱——散布 **WeaselBiscuit**：一個與北韓 **Contagious Interview** 活動的 **BeaverTail**、**OtterCookie** 工具功能重疊的精簡版 JavaScript 竊資程式，但目前 **尚無確切北韓歸因**。只要一次 **npm import**，載入器就會從 **Npoint 死點（dead drop）** 拉取酬載、**在記憶體中執行**，隨後側錄主機環境並 **整批蒐集 Chrome 擴充功能儲存區**——包括 **錢包擴充功能的狀態**——涵蓋 Windows、macOS 與 Linux，Windows 上還能側錄剪貼簿與鍵盤輸入，並經外部 C2 伺服器下達指令。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/weaselbiscuit-stealer-spreads-via-13.html)

📌 **任天堂修補 Switch 高風險漏洞：掃描 QR Code 即可觸發**
**任天堂** 的 **Switch 23.0.0 系統更新（9 月 10 日）** 修補 **CVE-2026-82079**——**CVSS 7.0** 的漏洞，僅在主機顯示 **QR Code** 時可被利用：能夠 **掃描** 該 QR Code（來自 Switch 螢幕或電視）的攻擊者，有機會 **執行未經授權的程式碼** 或取得主機存放的資訊。兩條曝險路徑分別是 **相簿的「傳送至手機」功能** 與 **《瑪利歐賽車實況：家庭賽車場》** 的遙控車遊玩；漏洞僅影響 **第一代 Switch**，**Switch 2 不受影響**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179051)

📌 **CISA 發布首份「網路誘餌」實務指南，鎖定關鍵基礎設施**
**CISA** 發布 **《使用網路誘餌（Cyber Decoys）強化偵測與應變能力》**——該機構首份完整的欺敵技術部署與操作指南：以假系統、假帳號、假憑證、假文件與 **蜜標（honeytoken）** 等 **沒有正常業務用途** 的資產，讓任何互動都成為未授權活動的訊號。指南以 **MITRE Engage** 與 **ATT&CK** 框架規劃誘餌，並主張誘餌 **補強而非取代零信任**——採行零信任的組織「仍應假設攻擊者可能取得一定程度的存取」，誘餌則提供 **高可信度告警、降低警報疲勞**。CISA 以 **關鍵基礎設施** 為對象，但其示例（假 API 金鑰、假文件、誘餌網址）普遍適用。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179046)

📌 **CISA 將停止發布每週漏洞公告**
**CISA** 將自 **9 月 28 日起** 停止發布 **每週漏洞公告**，稱此舉與其推動組織從 **嚴重程度導向轉向風險導向** 的漏洞管理一致。新登錄的漏洞仍可在 **CVE.org** 查得，CISA 建議以 **KEV 清單**、資安警報與廠商公告作為「可據以行動的風險導向」來源。此變革之際，漏洞量已超出多數團隊的修補能力——**光是微軟 9 月更新就接近 1,000 個漏洞**——而 CISA 對 2024–2025 年資料的分析顯示：揭露量飆升之際，**真正遭利用的漏洞數僅微幅成長**。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/cisa-ditches-weekly-vuln-roundups-risk-based-focus)

📌 **臺灣商周集團主站基礎服務恢復運作，遭惡意攻擊滿一週**
**商周集團（Business Weekly Group）** 於 **9 月 16 日** 恢復 **主站基礎服務**——上週該集團公告旗下網站遭 **惡意攻擊**、線上服務中斷。恢復後的服務提供 **最新一期雜誌內容與 9 月 8 日之前的所有文章**；**9 月 9 日之後的文章** 因其他系統仍在重建而 **暫無法閱讀**，旗下 **商周財富網、良醫健康網、alive、Smart 自學網** 等網站則 **仍在驗證中**。同屬 **城邦媒體控股集團** 的雜誌網站——如 **網管人、新通訊**——仍未恢復。該集團也提醒讀者：絕不會以電話、簡訊或通訊軟體要求操作 **ATM、網路銀行、轉帳**，或索取 **信用卡驗證碼與帳號密碼**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179056)

📌 **TWNIC：臺灣 .tw 網域 DNSSEC 部署率僅 2.47%，假冒網站風險升溫**
**TWNIC（台灣網路資訊中心）** 呼籲企業把 **網域、DNS 與路由** 納入資安治理——隨著釣魚、網域仿冒與網域挾持增加，加上 **生成式 AI 降低製作逼真假冒網站的門檻**。截至 **9 月 14 日**，**.tw／.台灣** 網域中僅 **10,356 個（2.47%）** 完成 **DNSSEC** 設定；相較之下 **RPKI ROA 覆蓋率達 98.06%**，臺灣的 **ROV 過濾率（55.98%）為全球平均（27.08%）的兩倍**，而採用 **Registry Lock** 的核心網域僅約 **24 個**。TWNIC 的免費網站健檢服務 **check.twnic.tw** 自 2025 年 8 月以來累計使用 **逾 57 萬次**——其中 **21 萬次集中在今年 6 至 8 月**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/179047)

📌 **FBI 與海防隊登船檢查疑遭網攻的超級油輪**
**賴比瑞亞籍超級油輪 VL Prosperity**——載運約 **230 萬桶** 原油、自 **埃及 Sidi Kerir 終站** 駛往 **德州 Galveston**——在網路「可能遭 **外國行為者** 入侵」的跡象下，遭 **FBI 與美國海岸防衛隊登船檢查**：報導指其 **燃油系統與引擎轉速遭干擾、通訊中斷 30 小時**，不過海岸防衛隊表示 **運作未受影響、無人受傷、無環境衝擊**。登船行動發生在疑似入侵（**直布羅陀海峽** 附近）約兩週後，為期四天，船員在期間 **清除了 IT 與 OT 系統中的威脅**。OT 專家指出，大型船舶的 **導航、推進、操舵與指揮系統可能同處於單一防火牆之後**；美國海岸防衛隊網戰司令部少將 **Amy Grable** 表示，攻擊「不需要多精密就能得逞」，而 **AI 正加速防禦者必須行動的速度**。
🔗 **參考資料：** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/us-coast-guard-fbi-board-oil-tanker-investigate-cyber-attack)

---

## OPSWAT可以怎麼幫上忙

今日多條攻擊路徑都始於 **「使用者被要求信任」的檔案**：OpenAI 入侵鏈始於 **上傳到公開論壇的 HEIC/HEIF 圖片**，**PhantomRaven** 與 **WeaselBiscuit** 藉 **惡意 npm 套件** 進入開發者機器，**RatHat** 則以 **惡意 APK** 接觸 Android 裝置。**MetaDefender Multi-Scan** 以 **超過 30 個防毒引擎** 多層掃描經由電子郵件、網頁下載與檔案分享管道進入的套件、安裝程式與媒體檔案；**MetaDefender CDR（Content Disarm & Reconstruction）** 會重建允許的 **文件、圖片與壓縮檔**，剝除作用中內容與可能觸發解析器漏洞的畸形結構；**MetaDefender Kiosk** 則在 **可卸除式媒體與 OT 邊界** 檢查檔案。
