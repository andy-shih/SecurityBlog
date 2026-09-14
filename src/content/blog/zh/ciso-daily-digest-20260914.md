---
title: "CISO 每日摘要：川普拒絕放慢 AI 發展，OpenAI 將安全評估提前至訓練前 (20260914)"
description: "美國總統川普週日拒絕 Anthropic、OpenAI 與 xAI 三大執行長週末提出的「刻意放慢前沿 AI 發展」呼籲——「誰贏得 AI，誰就贏了」；但 OpenAI 同日宣布把安全論證（Safety Cases）提前到訓練開始之前，Anthropic 執行長 Dario Amodei 則在 CBS 專訪中說這是「需要放慢腳步的警訊」。今日修補焦點：Palo Alto Networks 修補 PAN-OS CVE-2026-0310（CVSS 9.2，未經身分驗證即可觸發）、cPanel 修補可直達 root 的 SQL 注入 CVE-2026-67401（CVSS 9.9）、Dell 修補 CVSS 滿分的 ObjectScale 漏洞 CVE-2026-70416。其他重點：BlueMoon 的 Chrome 與 Windows 漏洞鏈已確認由四組中國駭客團體用於美國、越南、新加坡與印尼；Brevo 的 SAML 缺陷讓 Trezor 的 34.7 萬訂閱名單成為網釣誘餌；Google GTIG 揭露 TeamPCP 竊取 GitHub Actions OIDC 權杖以偽造 SLSA 建置證明；新型 RAT「E4del」與「PINHOLE」以 FTP 歡迎訊息與 Pinterest 貼文傳遞指令；惡意 Twitch 擴充套件外洩約 3.1 萬筆 OAuth 權杖；IDScan 證實 1.5 億筆駕照資料外洩事件；JFrog Artifactory 漏洞鏈列入 CISA KEV、期限 9 月 25 日；韓國把重大個資外洩罰款上限提高至年營收 10%。"
pubDate: 2026-09-14
tags: [CISO, 每日摘要, 資安, 川普, AI治理, AI安全, OpenAI, Anthropic, Dario-Amodei, Sam-Altman, Elon-Musk, Pace-the-Frontier, Safety-Cases, PAN-OS, Palo-Alto-Networks, CVE-2026-0310, cPanel, CVE-2026-67401, Dell, ObjectScale, CVE-2026-70416, BlueMoon, CVE-2026-85046, CVE-2026-87491, CVE-2026-85880, UTA0560, APT31, JungleBamboo, Volexity, Proofpoint, Brevo, Trezor, 網釣, 供應鏈, Google-GTIG, TeamPCP, OIDC, SLSA, E4del, PINHOLE, Twitch, OAuth, IDScan, CISA-KEV, JFrog-Artifactory, 韓國, PIPA, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## 川普拒絕放慢 AI 的呼籲，OpenAI 同時把安全評估提前到訓練前

美國總統川普週日拒絕了週末由 **Anthropic、OpenAI 與 xAI 執行長** 共同提出、主張刻意放慢前沿 AI 發展的呼籲——這是他對這項聯合立場的首次公開回應。川普在愛爾蘭 Doonbeg 高爾夫球場（Irish Open 場邊）對記者說：「**我們在 AI 領域領先中國。我們是世界上最精密的國家，坦白說，我想保持這樣，因為誰贏得 AI，誰就贏了**」；「我們可以設護欄、可以做這做那。但我認為有很多 **負面力量** 在提這些事，他們提的是不會發生的風險。」這項呼籲本身——Amodei 週六發表的《We Must Pace the Frontier》文章、Sam Altman 的「我同意 Dario，我們需要為前沿定速」，以及 Elon Musk 的三字回應「Dario 說得對」——已在 **本刊 9 月 13 日** 的摘要中報導；今天的新進展是政治反應與第一項具體落實。

落實來自 OpenAI。週日 **Altman 說明 OpenAI 會把安全工作提前到模型生命週期更早的階段**：對於預期將大幅提升模型能力的 **強化學習（RL）訓練**，OpenAI 將在 **訓練開始前先建立「安全論證」（Safety Cases）**——評估能力躍升如何被控制在既有對齊與監控措施之內——而不是只在模型完成後、部署前依《準備框架》（Preparedness Framework）評估。Altman 表示，為前沿定速 **不代表停止發展**，而是接受安全所需的時間與運算成本，讓能力推進的速度比完全不計安全成本時稍慢；他也強調，即使面對中國的競爭壓力，也不能成為讓能力超越對齊與監控的理由。

川普的表態也讓其政府內部出現分歧。**國家經濟會議主席 Kevin Hassett** 週日在 Fox News Sunday 表示，Amodei 提出的防護措施——包括讓獨立觀察者取得模型存取權——「**可作為民間部門的範本**」，並稱 AI 安全是「**可解決的問題**」，同時警告 AI 進展之快，**可能足以突破現有資安防禦**。民主黨則朝反方向走：前總統 **歐巴馬** 上週在一場私人募款活動中說，民主黨應把 **AI 監管列為競選核心議題**（據《紐約時報》）。而在 Anthropic 總部錄製的 CBS《Sunday Morning》專訪中，**Amodei 把 AI 的指數成長曲線稱為「需要放慢腳步的警訊」**——「這不代表我們今天就要恐慌，也不代表要全部關掉」——他說「**AI 終止開關（kill switch）可能是好主意**」，但反對全面禁止超級智慧；他提出以核武協議為模型、對 AI 進展設定「**速限**」（「我不知道可不可能，但我們應該試」），並說「**這項技術由一家私人公司打造，一直讓我覺得很奇怪**」。他補充，對於「其他產業領袖、包括我們的競爭者，都表態同意這項計畫」，他「**非常感激**」。

### 這對企業 AI 治理的深遠影響

- **美國的立場如今明確是「不要放慢」。** 中長期的 AI 治理規劃不能再假設美國聯邦法規會與前沿實驗室的安全承諾收斂——白宮把速度定調為國安政策，即使其自家的經濟幕僚稱這些防護措施是「民間部門的範本」。有效的管控正移向採購合約、州法與非美國的監管體制。
- **第三方評估正成為採購標準。** OpenAI 跟進 Anthropic 的「員工層級評估者進駐」承諾——識別證、工作站、訓練期間的模型可視性——讓實驗室的口頭承諾變成買方在 **選型之前** 就能要求、可查核的具體條件，而不是等出事之後。
- **保證措施正在往前移，供應商盡職調查也要跟進。** 「訓練前安全論證」意味著證據在生命週期更早階段就已存在；買方應預期能看到 **訓練前** 的安全論證，而不只是部署前的評估。
- **被引用的危險是代理群（agent swarms），不是聊天機器人。** Amodei 的警告（代理群可能在 6 到 12 個月內「接管網際網路」）與今日 Google GTIG 的報告（見下文）都把自主代理視為實際的攻擊面——代理工作流程的隔離與監控，正成為生產環境的資安要求。

🔗 **參考資料：** 綜合報導（[iThome](https://www.ithome.com.tw/news/178916)、[Yahoo News](https://www.yahoo.com/news/us/article/trump-rejects-call-by-ceos-of-anthropic-openai-and-xai-to-slow-ai-down-whoever-wins-with-ai-wins-182008851.html)、[National Post](https://nationalpost.com/news/trump-says-whoever-wins-ai-wins-as-tech-ceos-hit-the-brakes)、[CBS News](https://www.cbsnews.com/news/anthropic-ceo-dario-amodei-on-ai-risks)）

---

## 本週活躍威脅

📌 **IDScan 證實 1.5 億筆駕照資料外洩事件的入侵**
我們 **9 月 7 日** 報導的暗網兜售案，其背後的證件辨識平臺 IDScan 如今已證實遭入侵：該公司表示 **9 月 1 日接獲通知** 遭非授權存取，駭客可能已存取並竊走儲存於 **IDScan.net 雲端** 客戶帳號下的部分客戶資料——包括姓名、駕照號碼及其他政府發放的身分證件號碼；公司正通知可能受影響的客戶留意身分盜竊與詐騙。這項證實源於 KrebsOnSecurity 的調查：名為 **Nexus** 的服務兜售 **超過 1.53 億筆美加駕照**、1,000 萬筆身分證件影像、300 萬筆以上旅行文件與 579,000 筆醫療證件；該店面在媒體報導後關閉，**FBI 紐奧良分部** 已展開調查。IDScan 客戶包括 Target、FedEx、摩托羅拉系統、Jack Henry 與 Caesars Entertainment。我們 9 月 7 日報導該調查時，該公司仍未對外回應。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178896) | [TechCrunch](https://techcrunch.com/2026/09/10/id-verification-giant-idscan-confirms-data-breach-with-more-than-150-million-drivers-licenses-stolen) | [BleepingComputer](https://www.bleepingcomputer.com/news/security/idscan-confirms-breach-tied-to-153-million-stolen-drivers-licenses)

📌 **BlueMoon 的 Chrome 與 Windows 漏洞鏈全貌：四組中國駭客、四個國家**
這是我們 **9 月 10 日** 報導的 BlueMoon 漏洞利用工具包後續：根據 Proofpoint 與 iThome 9 月 14 日的整理，這波攻擊已涵蓋 **至少四組中國政府資助的駭客團體**，受害目標分布在 **美國、越南、新加坡與印尼**。**APT31**（Volexity 稱其為 JungleBamboo；又名 Violet Typhoon、TA412）自 **8 月 28 日** 起鎖定美國非政府組織、礦業與大宗商品交易公司，假冒大學生尋求實習機會，投遞 **msgbox.exe**，進而安裝偽裝成 Google Gemini AI 助理的 **GemStone** 惡意擴充套件；該套件會竄改以 Chromium 為基礎的瀏覽器（Chrome、Edge、Brave、Vivaldi）設定，繞過擴充套件完整性檢查。第二組 **UNK_LateNight** 自 9 月 2 日起以合作報價（RFQ）為餌攻擊美國航太與國防供應鏈，植入 **ShadowPad** 後門；UNK_DoubleCheck 以疫苗接種預約為餌攻擊越南製造業；UNK_QuietRacket 鎖定新加坡與印尼的政府、顧問與金融機構，透過 Google DNS-over-HTTPS 與 Cloudflare Worker 轉遞 .NET 惡意程式。底層漏洞鏈——V8 型別混淆 **CVE-2026-85046**、已登記為 **CVE-2026-87491** 的 WebAssembly 沙箱逃逸，以及 Windows 核心提權 **CVE-2026-85880**——在最新版 Chrome、Edge 與 Windows 皆已修補；Chrome 漏洞的 CISA 聯邦修補期限為 **9 月 18 日**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178917) | [iThome](https://www.ithome.com.tw/news/178919) | [Volexity](https://www.volexity.com/blog/2026/09/09/mind-the-patch-gap-multiple-chinese-threat-actors-chain-0-day-exploits-in-chrome-windows/) | [Proofpoint](https://www.proofpoint.com/us/blog/threat-insight/once-bluemoon-multiple-state-aligned-threat-actors-rapidly-adopt-novel-exploit)

📌 **Palo Alto Networks 修補 PAN-OS CVE-2026-0310（CVSS 9.2）——未經身分驗證即可攻擊管理介面**
Palo Alto Networks 9 月 10 日的更新中，最值得留意的是 **PAN-OS XML 處理功能的記憶體緩衝區溢位 CVE-2026-0310**：未經身分驗證的攻擊者可透過 **管理網頁介面或資料轉發（dataplane）介面** 觸發。在 **PA 系列實體防火牆** 上可取得 **root 權限執行任意程式碼**；在 **VM 系列** 虛擬防火牆上可造成阻斷服務。受影響範圍：**PAN-OS 10.2 至 12.2、Prisma Access 10.2 至 12.1**，以及部署於 AWS 或 Azure 的 Cloud NGFW。CVSS v4.0 評為 **9.2**（套用威脅指標後為 7.2）；Palo Alto 將危險程度列為高風險，但呼籲用戶以最高優先順序 **「Urgency Highest」** 套用更新，並指出限縮管理介面存取可降低 Prisma Access 與 Cloud NGFW 的風險。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178909)

📌 **cPanel SQL 注入 CVE-2026-67401（CVSS 9.9）：從郵件權限直達 root**
cPanel 9 月 8 日的公告修補 **cPanel & WHM 的 EmailTrack 功能** 中的重大 SQL 注入漏洞：攻擊者只要能通過身分驗證、持有 **郵件相關權限的帳號**，即可濫用 EmailTrack **在伺服器上建立任意檔案、以 root 執行任意程式碼、完全控制伺服器**。所有 cPanel & WHM 版本皆受影響，修補版本已發布、官方呼籲儘速套用。cPanel 未公布嚴重程度與是否遭利用，但美國國家漏洞資料庫（NVD）將 **CVE-2026-67401 評為 9.9**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178908)

📌 **Dell 修補 CVSS 滿分的 ObjectScale 漏洞（CVE-2026-70416）等 11 個漏洞**
Dell 9 月 11 日的更新修補 **ObjectScale 與 ECS 物件儲存平臺共 11 個漏洞**——5 個在 Dell 自家平臺程式碼、6 個在第三方元件——其中最嚴重的是 **CVE-2026-70416（CVSS 10.0）**，可讓具有遠端存取權限的攻擊者 **執行任意程式碼**；另一值得注意的是 **CVE-2025-43936（8.1）**，可讓攻擊者未經身分驗證存取系統。兩條產品線系出同源（ObjectScale 是 ECS 的 Kubernetes 容器化版本，自 2025 年初 4.0 版起整併為統一版本流）：**ECS 3.x 至 3.8.1.7 與 ObjectScale 4.x 受影響**，修補版本為 **ObjectScale 4.4.0.0**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178899)

📌 **Brevo 的 SAML SSO 缺陷，把客戶寄件名單變成網釣誘餌**
電子郵件行銷與 CRM 服務商 **Brevo** 表示，攻擊者利用其平臺處理 **SAML 單一登入（SSO）** 的缺陷取得 **138 個客戶帳號** 的存取權——攻擊者建立 Brevo 帳號並啟用 SSO，再把合法的 Brevo 使用者納入該 SSO 設定，由於權限 **未被正確限定在啟用 SSO 的那個組織**，攻擊者因此能進入這些使用者原本可存取的所有組織。其中 **6 個帳號被用來從客戶自己的合法網域寄送網釣信**、**43 個帳號的聯絡人資料遭匯出**。硬體加密貨幣錢包品牌 **Trezor** 表示，透過 Brevo 管理的約 **34.7 萬個電子郵件地址** 都須視為可能已外洩；約 **2,500 人** 在惡意網域被下架前點擊了假冒「STM32 熵值漏洞」的警示信；**BitBox 與 CoinTracking** 也受影響。Brevo 表示已封鎖攻擊者的存取途徑、重設所有工作階段，並正部署永久修正、把 SSO 存取限定於建立該設定的組織。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178888) | [SecurityWeek](https://www.securityweek.com/trezor-says-347000-users-received-phishing-emails-after-brevo-hack/)

📌 **Google GTIG：AI 程式開發工具已成供應鏈攻擊面**
Google 威脅情報小組（GTIG）指出，以 **UNC6780（追蹤名 TeamPCP）** 為首的攻擊者，利用名為 **DUSTMAKER** 的惡意程式 **從 GitHub Actions runner 的處理程序記憶體擷取 OpenID Connect（OIDC）權杖**、在 AI 程式開發助理的專案目錄植入或修改惡意檔案，並以 **提示詞注入（prompt injection）** 讓 AI 助理執行攻擊者的命令或指令碼。竊得的 OIDC 權杖讓攻擊者能冒充 **可信任發布者身分、發布仍帶有有效 SLSA Build 3 建置證明的竄改套件**，藉此通過 AI 開發代理的自動信任檢查。TeamPCP 自今年 3 月起持續攻擊軟體供應鏈（包括 LiteLLM 等開源專案；FBI 7 月曾發布警告），GTIG 還觀察到一種反鑑識手法：在惡意程式碼註解中塞入 **會觸發 LLM 防護機制的內容，讓以 LLM 檢查程式碼的工具分析失敗、略過下方的惡意程式碼**。另有一波 5 月的活動：**ACRSTEALER** 資訊竊取程式鎖定 **Cline 與 Continue AI** 的設定檔，這些檔案可能含有 API 金鑰與自訂模型路由端點。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178861)

📌 **新型 RAT「E4del」與「PINHOLE」：從 FTP 歡迎訊息與 Pinterest 貼文接收指令**
資安業者 **SOCRadar** 揭露兩款新型遠端存取木馬 **E4del 與 PINHOLE**：相關攻擊自 7 月初開始，8 月換用新基礎設施持續進行。投遞鏈以 **西班牙文優惠券郵件** 為餌，附帶的 **ZIP 壓縮檔中只有一個偽裝成文件的 Windows 捷徑（LNK）**；LNK 連線至攻擊者的 FTP 伺服器，把 **FTP 歡迎訊息（banner）當作死信投放解析器（DDR）**，執行其中找到的指令文字並下載下一階段。**E4del** 偽裝成具數位簽章的 **Discord Electron 應用程式**，可建立持久存取、收集系統資訊、螢幕截圖、串流桌面並執行遠端指令；**PINHOLE** 更隱蔽，透過 **Pinterest 貼文與 SurveyMonkey 問卷** 取得 C2 資訊、以 **Cloudflare Workers** 轉發流量，具備系統資訊收集、檔案竊取與刪除、螢幕截圖與 PowerShell 指令執行能力。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178910)

📌 **惡意 Twitch 擴充套件外洩約 3.1 萬名使用者的即時 OAuth 權杖**
一款跨商店上架的瀏覽器擴充套件「**Twitch Enhanced Viewer | JeetBot**」被發現把使用者的 **即時 Twitch OAuth 權杖** 轉送到由 **俄羅斯商業機器人服務** 營運的代理伺服器——這是 Socket 威脅研究團隊的發現。Chrome 線上應用程式商店版本約有 **3 萬名使用者**（Firefox 版約 600 名），報導時兩者仍可下載。目前版本的擴充套件會在 **網路層重導時把權杖以 `&auth=` 查詢參數附加**，且除了十個俄語實況主的硬編碼允許清單外，**每個觀看的頻道都會轉送**，權杖因此以明文寫入代理伺服器的請求日誌；較早的 v4.x 版本則是以 POST 傳到專用端點、備援在 deno.dev。竊得的權杖可存取 **聊天室、私人訊息與帳號設定**。擴充套件宣稱的廣告阻擋、1080p 與解除區域限制等功能，正是透過同一批代理伺服器轉送影片播放清單請求來實現。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/malicious-twitch-browser-extension.html) | [Socket](https://socket.dev/blog/malicious-twitch-browser-extension)

📌 **JFrog Artifactory 漏洞鏈列入 CISA KEV——期限 9 月 25 日**
這是我們 **9 月 11 日** 報導的 Artifactory 漏洞鏈更新：CISA 於 9 月 11 日把 **CVE-2026-42016（8.1）與 CVE-2026-42018（7.5）** 列入已遭利用漏洞名單（KEV），**聯邦修補期限為 9 月 25 日**——而 Wiz 的最新數據顯示修補進度落後：漏洞揭露六週後，仍有 **59% 的組織暴露於 CVE-2026-42016**；重大等級的 **CVE-2026-82329（9.8）** 兩週內僅從 67% 降至 49%。Wiz 也揭露「**自帶金鑰**」手法：在部分遭入侵的執行個體上，攻擊者把 **自己的 SSH 金鑰** 附加到新建的使用者上；其餘已知的後利用行為包括建立持續性管理員帳號、部署惡意 Groovy 外掛、安裝 Rust 後門與外洩組態設定。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178902) | [Wiz](https://www.wiz.io/blog/artifactory-under-attack-in-the-wild-exploitation-of-cve-2026-42016-cve-2026-4201)

📌 **韓國把重大個資外洩罰款上限提高至年營收 10%**
韓國個資主管機關 **個人資訊保護委員會（PIPC）** 9 月 9 日宣布、**9 月 11 日正式實施**《個人資訊保護法》（PIPA）修正案：因故意或重大過失造成 **1,000 萬人以上個資外洩** 的企業，罰款上限從年營收 **3% 提高至 10%**。較高的罰則鎖定累犯——三年內發生兩次以上重大外洩，或未遵從矯正命令而再度外洩的企業。修正案也明定 **執行長與個資保護長（CPO）的監督責任**、強制取得 ISMS-P 認證、要求重大外洩案例 **即使未證實外洩也須在 72 小時內通知使用者**（涵蓋勒索軟體相關的竄改事件），並須為受害者提供損害賠償或爭議調解等救濟資訊。背景是：韓國最大電商 **酷澎（Coupang）** 因 3,755 萬人個資外洩，6 月被重罰 **6,246 億韓元（約 4.66 億美元）**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178912)

---

## OPSWAT可以怎麼幫上忙

今天的攻擊中有兩條路徑以檔案形式送達：**E4del／PINHOLE** 鏈的起點是一個只含文件偽裝 Windows 捷徑的 ZIP 壓縮檔，TeamPCP 的 **DUSTMAKER** 則是把竄改過的檔案與套件植入開發者工作流程。**MetaDefender Multi-Scan** 以 30 種以上的防毒引擎掃描檔案，攔下單一引擎架構漏掉的威脅；**MetaDefender CDR（內容消毒與重建）** 則重建允許的檔案與壓縮檔——在使用者或建置系統開啟之前，先剝除 ZIP／LNK 投遞鏈中的主動內容。
