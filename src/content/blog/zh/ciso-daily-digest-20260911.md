---
title: "CISO 每日摘要：Anthropic 9 月濫用報告——中國業者近 2 億筆蒸餾紀錄、俄羅斯 AI 間諜行動、生物武器研究遭阻斷 (20260911)"
description: "Anthropic 發布第 4 份威脅情報報告（涵蓋 2025 年 12 月至 2026 年 8 月），指控 7 家中國 AI 實驗室大規模「非法蒸餾」Claude——阿里巴巴以 3,500 多個詐欺帳號進行逾 1.51 億筆對話的 Qwen 蒸餾、月之暗面（Moonshot）未告知用戶即將 Kimi 請求轉往 Claude（2,300 萬筆，含一名疑與解放軍相關用戶的成都監視器影像分析）、DeepSeek 逾 1,200 萬筆——另有與俄羅斯 Midnight Blizzard 手法一致的 AI 間諜活動、長沙「漏洞工廠」，以及多起遭阻斷的生物濫用案例。其他重點：CISA 將 MikroTik CVE-2026-67277/CVE-2026-86060 列入 KEV；Check Point 修補兩個 CVSS 9.8 的 VPN 漏洞；Fortinet 修補 FortiMonitor OnSight CVE-2026-84390（9.6）與 FortiSandbox CVE-2026-26084；晶睿（Vivotek）傳出 Everest 勒索軟體攻擊；Wiz 揭露 JFrog Artifactory 漏洞鏈導致管理員權限遭接管；Cisco FMC 遭植入 Qilin 勒索軟體；PaperCut 大規模濫用已達 48 國、395 家組織。"
pubDate: 2026-09-11
tags: [CISO, 每日摘要, 資安, AI安全, Anthropic, Claude, 非法蒸餾, Alibaba, Moonshot-AI, DeepSeek, 小米, 智譜, 俄羅斯, Midnight-Blizzard, 生物武器, CISA, KEV, MikroTik, CVE-2026-67277, CVE-2026-86060, Check-Point, CVE-2026-85102, CVE-2026-85103, Fortinet, CVE-2026-84390, CVE-2026-84388, CVE-2026-26084, F5, CVE-2025-53521, Cisco-FMC, CVE-2026-20079, CVE-2026-20316, Qilin, Sandworm, JFrog, CVE-2026-42018, CVE-2026-42016, 搜狗, UNC3569, GRAYRABBIT, PaperCut, CVE-2026-81578, CVE-2026-82078, ShinyHunters, 語音網釣, Microsoft-365, 晶睿, Vivotek, Everest, Gitea, CVE-2026-60004, Silver-Fox, Kinryū-Labs, 臺灣, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Anthropic 9 月濫用報告：中國業者產業化蒸餾、俄羅斯 AI 間諜——與遭阻斷的生物武器研究

**9 月 10 日**，Anthropic 發布 **「Detecting and countering misuse of AI: September 2026」** 報告——這是該公司第 4 份威脅情報報告（前 3 份分別於 2025 年 3 月、8 月與 11 月發布）——涵蓋 **2025 年 12 月至 2026 年 8 月** 期間所阻斷的惡意使用行動，橫跨 **7 大危害領域**：網路攻擊、資訊操弄、監控、詐騙與詐欺、生物濫用、傳統武器開發，以及非法蒸餾。報告案例涉及疑為國家支持的組織、財務動機犯罪者、商業間諜軟體廠商、國家宣傳機構與政治動機人士；遭濫用的是 **Claude Haiku、Sonnet 與 Opus** 模型，除了一起蒸餾案例外，**沒有任何案例涉及 Fable 或 Mythos 等級模型**。

**報告最受矚目的發現，是中國業者產業規模的「非法蒸餾」。** Anthropic 點名 **阿里巴巴、月之暗面（Moonshot）、DeepSeek、小米與智譜（Zhipu）**，並指共有 **7 家中國 AI 實驗室** 發動未經授權的行動，鎖定 Claude 最有價值的代理推理、軟體工程與邏輯推理能力；5 月至 7 月間，這些活動合計達 **近 2 億筆對話**。手法細節包括：

- **阿里巴巴是 Anthropic 所記錄過規模最大的蒸餾行動**：5 月至 7 月間產生 **逾 1.51 億筆 Claude 互動**，單日高峰接近 **300 萬筆**，分散在 **3,500 多個被標記為詐欺的帳號**；Anthropic 表示這些對話被用於訓練阿里 **Qwen** 系列模型。6 月致美國參議員的信件中，Anthropic 已揭露約 **2,880 萬筆** 對話與約 **2.5 萬個** 假帳號，隨後阿里以安全風險為由，禁止員工使用 Claude Code。
- **月之暗面（Kimi 開發商）在未告知客戶的情況下，將部分即時用戶請求轉往 Claude，再把 Claude 的回覆當作 Kimi 自己的輸出**：曾在 **10 天內** 透過 **5,380 個詐欺帳號** 轉送近 **30 萬筆** 客戶請求，5 月至 7 月的蒸餾活動合計超過 **2,300 萬筆**。其中一案，Anthropic 評估為 **疑與解放軍（PLA）相關** 的用戶要求 Kimi 分析 **成都數百支監視器的影像**，而月之暗面把這些資料轉給了 Claude。
- **DeepSeek** 同樣未告知客戶即轉送對話，僅 **7 月兩週內** 就記錄到 **逾 1,200 萬筆**；其中一次轉送還暴露了 **俄羅斯政府資料庫的現行憑證**。
- 這些流量的入口是 **「中轉站」（transfer stations）**——設於中國境外的中介服務，以 **假身分、遭竊或偽造的信用卡與被竊 API 金鑰** 在美國 AI 服務上建立帳號。Anthropic 表示，這些做法「很可能違反隱私法規與各實驗室自身的服務條款」。北京已將美方的蒸餾指控斥為「毫無根據」（見本刊 9 月 9 日摘要）；白宮科技政策辦公室（OSTP）主任 7 月曾指月之暗面在開發 Kimi K3 期間蒸餾 Anthropic 模型輸出，美國財政部長則警告，制裁與實體清單（Entity List）「都在選項之中」。

**除蒸餾之外，報告也記錄了 AI 助長的間諜與武器開發活動。** 一組手法與俄羅斯 **Midnight Blizzard** 一致的行動者，對 **烏克蘭政府、軍事與外交目標** 發動網路釣魚、飯店 Wi-Fi 劫持與 WhatsApp 帳號接管行動，幾乎每個階段都使用了 AI——包括一套能 **自動偵測其惡意程式何時被防禦機制標記、並改寫程式碼直到再次規避偵測** 的系統。一個 **位於長沙、Anthropic 描述為兩名大學生的團體** 則把 Claude 變成 **「漏洞工廠」**：拆分成多個子代理同步執行偵察與入侵後任務，持續保留目標清單、被竊憑證與攻擊指令——其中一次針對網路設備、為期一個月的行動中，找出 **逾 10 個候選零時差漏洞**，並據此選定約 **50 家組織** 為目標。報告也揭露 **中國、俄羅斯與葉門** 的行動者用 Claude 開發 **槍械、飛彈、武裝無人機、炸彈及其瞄準與控制系統** 的軟體；多起 **生物濫用** 案例（包括一名用戶尋求修改 **禽流感** 病毒使其能感染哺乳類的資訊——「過去我們把這類濫用視為假設性風險，如今我們看到的是真實案例」，威脅情報主管 **Jacob Klein** 表示）；一名法國駭客的起底網站；一家土耳其公司對馬來西亞選舉輿論的操弄；多個假交友應用網路；以及與 **ShinyHunters** 相關的分支活動已遭阻斷。

Anthropic 對趨勢直言不諱：「**多數行動……是透過 AI 直接執行或編排而得以實現**」——已「超越聊天機器人的簡單問答」，進入 **多代理框架執行任務** 的階段，人類多為 **監督者，而非親自動手的操作者**。

### 這對 AI 平臺治理與企業風險的深遠影響

- **終端使用者資料可能在不知情下流經外國模型。** 月之暗面案顯示用戶資料——包括對個人的監視器影像分析——經由該實驗室的路由層流入第三方模型；DeepSeek 轉送的請求甚至暴露了外國政府資料庫的現行憑證。任何牽涉這些服務的 AI 工具鏈，如今都帶著 **未經盤點的資料傳輸曝險**，包括使用者從未同意的隱私法規與合約風險。
- **蒸餾爭議已升級為「有證據、雙邊交鋒」的態勢。** 本週 NSA／FBI／CISA 的聯合警告（見本刊 9 月 9 日摘要）稱蒸餾是這些實驗室開發計畫的「關鍵核心」；Anthropic 的個案細節——帳號、流量、手法、用戶資料曝險——為監管機關、採購團隊與訴訟方提供了具體素材，而北京則稱這些指控是抹黑。
- **該準備的威脅模型是「編排」，不是「全自主」。** 多代理行動能以機器速度找出零時差漏洞、改寫被標記的惡意程式並收割憑證，且針對的是既有的企業軟體——這壓縮了偵測與應變的時間視窗；真正耐久的控制點是身分與行為，而非酬載特徵。

🔗 **參考資料：** 綜合報導（[Anthropic — Detecting and countering misuse of AI: September 2026](https://www.anthropic.com/threat-intelligence-report-september-2026)、[CNBC](https://www.cnbc.com/2026/09/11/chinese-ai-labs-moonshot-deepseek-alibaba-anthropic.html)、[Quartz](https://qz.com/anthropic-chinese-ai-labs-distillation-alibaba-deepseek-moonshot-091126)、[The Straits Times](https://www.straitstimes.com/world/united-states/anthropic-disrupts-russian-chinese-ai-campaigns-targeting-its-claude-models)、[iThome](https://www.ithome.com.tw/news/178864)）

---

## 本週活躍威脅

📌 **JFrog Artifactory 漏洞鏈遭串連，取得管理員權限並植入後門（CVE-2026-42018／CVE-2026-42016）**
**Wiz** 指出，攻擊者在 **8 月 15 日至 9 月 8 日** 間串連 2 個 Artifactory 漏洞，對自架伺服器取得 **管理員控制權並植入後門**。**CVE-2026-42018** 讓 Artifactory 對「從未登入的呼叫者」發放內部 **匿名使用者權杖**——即使已關閉匿名存取亦然；**CVE-2026-42016** 接著讓這個低權限權杖被換成 **管理員範圍的權杖**，原因是 Artifactory 只驗證權杖的簽章與簽發者，卻不檢查它被允許做什麼。部分案例從第一個請求到建立新的管理員帳號 **不到 5 分鐘**，且以此方式執行的管理員操作在日誌中顯示為 **`token:anonymous`**，而非具名帳號。JFrog 在攻擊發生前已完成修補（7.146 分支 4 月 28 日、7.133 分支 8 月 12 日），因此僅未更新的伺服器受影響；兩個漏洞修補其一即可打斷攻擊鏈。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/attackers-chain-jfrog-artifactory-flaws.html)

📌 **與中國相關的 UNC3569 利用搜狗輸入法漏洞植入 GRAYRABBIT 後門**
**Gen Digital** 在調查一起正在發生的 **UNC3569** 入侵事件時發現該漏洞：一個特製連結濫用 **搜狗輸入法**——依多倫多大學 Citizen Lab 2023 年研究，這是中國最主流的漢字輸入工具，月用戶超過 **4.55 億人**——植入該組織長年使用的 **GRAYRABBIT** 後門（遠端命令列、雙向檔案傳輸、可隨時載入模組）。**騰訊已於 2026 年 4 月修補入侵入口**，但 Gen 指出，修補並未改變讓攻擊得以成立的設計：其檢視的已修補版本仍內建 **2020 年版本的瀏覽器引擎，且沙箱處於關閉狀態**。Google 威脅情報將 UNC3569 歸於中國的「傭兵駭客」生態，自 2021 年起追蹤，主要鎖定東亞與東南亞的政府、教育、科技與金融部門。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/china-linked-unc3569-exploited-sogou.html)

📌 **PaperCut 以正式維護版本取代緊急修補——AI 代理大規模濫用已達 395 家組織**
**PaperCut NG/MF 26.0.5、25.0.13 與 24.1.10** 以完整 QA 測試的維護版本，取代先前針對 **CVE-2026-81578** 與 **CVE-2026-82078** 發布的緊急修補（並加入額外強化）。這兩個漏洞仍遭積極利用：**GreyNoise 與 Blackpoint Cyber** 目前將 **至少 48 國、395 家遭入侵組織**（多為美國教育機構）歸因於一名疑為俄語系的行動者，其攻擊由 **數百個 AI 代理驅動——使用 OpenAI 的 Codex 執行框架與 DeepSeek 模型**。活動流量來自 `45.142.193[.]132`（本刊 9 月 5 日報導中與校園憑證竊取有關的同一位址），且攻擊目標 **略過俄羅斯、中國、香港、泰國、伊朗及其他 23 國**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/papercut-replaces-emergency-patches.html)

📌 **Cisco FMC 遭 3 個叢集利用——國家級間諜、Sandworm 相關植入程式與 Qilin 勒索軟體**
Cisco Talos 公布 **3 個入侵後叢集**，濫用已列入 KEV 的 **CVE-2026-20079**（CVSS **10.0**）與 **CVE-2026-20316**（CVSS **5.3**）攻擊 **Secure Firewall Management Center（FMC）**：**UAT-12197** 部署 **JSP Web Shell 與 JAR 命令執行工具**，查詢內部資料庫以取得驗證資料與憑證；**UAT-11823** 植入 **Netcat 反向 Shell**、以 Bash 指令碼收割受管設備組態，並部署 **Cyclops Blink** 變種——這個模組化植入程式過去被歸因於俄羅斯 **Sandworm**；**UAT-11988** 則是勒索軟體行動，以 CVE-2026-20316 取得初始存取，濫用 FMC 內建工具進行偵察、建立通道與蒐集憑證，最後 **部署 Qilin 勒索軟體**。（CISA 已於 9 月 9 日將 CVE-2026-20079 列入 KEV，見本刊 9 月 10 日摘要。）
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/cisco-fmc-flaws-exploited-to-steal.html) | [iThome](https://www.ithome.com.tw/news/178876)

📌 **晶睿（Vivotek）：Everest 勒索軟體聲稱竊得 236 GB，台達電否認系統受影響**
勒索軟體集團 **Everest** 於 **9 月 1 日** 聲稱入侵台達電旗下、網路攝影機與錄影機廣布各國的 **晶睿通訊（Vivotek）**：宣稱竊得 **236 GB、近 9.5 萬個檔案**，包括 **韌體、原始程式碼與開發、測試及維修資料**，並公開一份 56 頁技術文件、要脅支付贖金。台達電表示調查顯示 **未有系統受影響、也無敏感資料外洩**，研判駭客手中的資料與晶睿公開提供的檔案相符、部分是舊資料。威脅情報公司 **SOCRadar** 則找到 **23 筆提及 vivotek[.]com 的竊資軟體紀錄**，時間橫跨 2025 年 1 月至 2026 年 9 月 1 日——包含 **2 筆員工憑證、5 筆客戶憑證** 與 1 筆第三方憑證——顯示供應商網路內確有遭惡意程式感染的端點。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178859)

📌 **CISA KEV 新增 MikroTik RouterOS CVE-2026-67277 與 CVE-2026-86060——聯邦期限 9 月 13 日**
CISA 於 **9 月 10 日** 更新 KEV 清單，納入兩個 **MikroTik RouterOS** 漏洞：**CVE-2026-67277**（重要功能缺乏身分驗證）與 **CVE-2026-86060**（命令參數分隔字元處理不當），並註明已見實際利用、聯邦機構修補期限為 **9 月 13 日**。此次新增緊接在 **CERT Polska** 之後——該團隊以 **AI 輔助分析** 找出多個 RouterOS 弱點，並指出部分漏洞 **自 9 月 2 日** 起已遭利用。（RouterOS SSH 遭入侵的活動曾見於本刊 9 月 6 日摘要。）
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178872)

📌 **Check Point 修補兩個 CVSS 9.8 的 VPN 漏洞（CVE-2026-85102／CVE-2026-85103）**
Check Point 於 **9 月 9 日** 公告兩個重大 VPN 漏洞，可能讓 **未經身分驗證的攻擊者遠端執行程式碼**。**CVE-2026-85102**（VPN 協商過程）影響啟用站對站或遠端存取 VPN 的 **安全閘道與 Check Point Spark 防火牆**；**CVE-2026-85103**（VPN 憑證 ASN.1 解碼）為 **記憶體堆積溢位**，影響 **安全管理伺服器、安全閘道與 Spark 設備**。兩者 CVSS 均為 **9.8**。Check Point 表示漏洞由自家發現、**尚未見積極利用跡象**，請用戶部署最新的 **Jumbo Hotfix**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178868)

📌 **Fortinet 修補 10 個漏洞——FortiMonitor OnSight JWT 繞過（9.6）、FortiPAM 與 FortiSandbox（8.9）**
Fortinet 於 **9 月 8 日** 的系列公告修補 **10 個漏洞**，其中兩個為重大等級。**CVE-2026-84390**：偽造或已用過的 **JWT 權杖** 可繞過 **FortiMonitor OnSight** 入口網站的驗證流程（**CVSS 9.6**；影響 7.2.0 至 7.2.2 與 7.2.4 至 7.2.7 版；修補於 **7.2.8**）。**CVE-2026-84388** 存在於 **FortiPAM 代理程式的 Chrome 擴充套件**（不當身分驗證）。另值得留意：**FortiSandbox CVE-2026-26084**（**存取控制不當**，**CVSS 8.9**）——未經身分驗證的攻擊者可透過特製 HTTP 請求存取敏感資訊，影響 **FortiSandbox 4.4／5.0、雲端版 FortiSandbox Cloud 5.0 與 PaaS 5.0**；該系統數個月前才發生已知漏洞遭利用的情況。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178867) | [iThome](https://www.ithome.com.tw/news/178877)

📌 **F5 BIG-IP APM：新一波利用活動部署專為該平臺打造的 Linux 惡意程式（CVE-2025-53521）**
**Sophos** 發現一款專門攻擊 **F5 BIG-IP APM** 環境的 Linux 惡意程式，透過利用 **CVE-2025-53521**（CVSS 9.3）植入——這正是 2025 年 10 月揭露、CISA 於 3 月警告已遭實際利用的 APM 漏洞。該惡意程式是 **第二階段酬載**；另一支元件負責感染 **`/usr/sbin/httpd`**、**竄改 SELinux 組態**，並 **濫用 BIG-IP 升級映像檔** 維持存活。它針對 Apache／libphp／APR 模組載入機制、BIG-IP APM 的 **Webtop** 元件與 BIG-IP 更新流程設計，顯示是專為該平臺打造的攻擊工具。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178875)

📌 **語音網釣成為帳號接管前門：微軟追蹤 Storm-3032／Storm-3121 的 BYOD 行動，ShinyHunters 鎖定醫療業**
兩項發展讓 **語音網釣（vishing）** 站上帳號接管的核心。**微軟** 自 5 月起追蹤 **Storm-3032 與 Storm-3121**：攻擊者 **致電或傳訊主管與管理員的個人裝置**，冒充公司 IT 客服，以「更新您的 passkey／MFA／SSO」為由誘導受害者進入 **對手中間人（AiTM）與裝置碼（device code）網釣** 頁面，竊取憑證與連線階段權杖；接著 **註冊自己的 MFA 裝置** 維持存取，並透過 **Microsoft Graph API** 大規模外洩企業資料——研判會將所得存取權轉手給包括 **ShinyHunters** 在內的勒索集團。另一方面，**Health-ISAC** 警告 **ShinyHunters** 正對醫療產業發動語音網釣：註冊 **結合受害企業名稱與資安詞彙的仿冒網域**，再從 **SSO 轉往 Microsoft 365、SharePoint 與 Salesforce** 竊取資料、進行勒索。這兩波活動延續了本刊 9 月 8 日摘要（Arctic Wolf 的 PREY-0058）所描述的語音網釣手法——如今以個人裝置作為繞過企業防護的入侵入口。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/threat-intelligence/voice-callers-exploit-byod-microsoft-365-corporate-data) | [iThome](https://www.ithome.com.tw/news/178841)

📌 **Google Play 的 Early Access 機制遭濫用，推送數千個詐騙 App**
**Bitdefender** 揭露 **Google Play Early Access** 遭大規模濫用：由於 Early Access 的 App **無法獲得公開評論或星等評分**，使用者平常依賴的信任訊號因此消失——攻擊者利用這個缺口推送 **數千個詐騙應用程式**（假賭場遊戲、獎勵 App、誤導性工具與侵犯商標的仿冒品），其中包括一款下載數 **超過 100 萬次** 的 GTA 仿作 **「Vice Streets: Open World」**。這些 App 透過 **TikTok 與 Facebook 上使用名人深偽（deepfake）影片的廣告** 推廣，以現金回饋、PayPal 出金、加密貨幣、禮品卡與賭場彩金為餌。Bitdefender 表示：「保護開發者免受不公平批評的同一項機制，也剝奪了使用者最早發現 App 不可信的警告。」
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/google-play-early-access-abused-to-push.html)

📌 **Shadowserver：逾 8,300 臺 Gitea 伺服器仍暴露於 CVE-2026-60004（RCE）**
**Shadowserver** 警告，仍有 **8,393 臺對外曝露的 Gitea 執行個體** 受 **CVE-2026-60004** 影響——這是由 Salesforce 研究員 **Shai Rod** 發現的重大漏洞：任何具備儲存庫寫入權限者，只要向 **`diffpatch` API 端點** 送出特製修補檔，就能安裝 **惡意 Git hook**，以 Gitea 服務使用者權限執行命令。由於 Gitea 預設 **開啟開放註冊**，攻擊者可自行註冊帳號、建立儲存庫觸發漏洞。官方已於 **7 月 27 日** 在 **1.27.1** 版修補；CISA 於 8 月底將其列入 **KEV**，且該漏洞 **已出現實際攻擊**。受影響伺服器集中在 **中國、德國與美國**。
🔗 **參考資料：** [Xakep](https://xakep.ru/2026/09/11/gitea-rce/)

📌 **Kinryū Labs：越南 APIS 資料庫暴露 2.2 億筆航班紀錄**
新加坡資安研究團隊 **Kinryū Labs** 於 **9 月 9 日** 揭露一起疑似航班旅客系統資料庫外洩事件：位於 **越南河內**、疑似與航班旅客資訊系統（**APIS**）相關的 Elasticsearch 資料庫，包含 **2017 年 1 月至 2026 年 4 月的 2.2 億筆旅客及機組員紀錄**，涉及 **1,008 家航空公司**，資料涵蓋姓名、生日、性別、國籍、**護照號碼**、航班、起降與轉機機場、座位與行李資訊。該資料庫仍使用 **Elasticsearch 預設帳號密碼**，且可從雲端路徑連入——儘管原設計應拒絕公開網路存取。研究團隊 **6 月 3 日** 發現、**6 月 8 日** 在通知越南相關單位、航空公司與 CERT 後停止存取（新加坡航空資安團隊協助協調）；資料是否已被他人下載、以及由誰維運該資料庫，仍無定論。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178856)

📌 **Silver Fox 再現：木馬化安裝檔鎖定跨國企業中國據點**
**微軟** 揭露一波歸因於疑為中國駭客組織 **Silver Fox** 的惡意軟體活動：架設 **冒牌軟體下載網站**，冒充 Edge 瀏覽器、卡巴斯基防毒、雷蛇周邊工具、有道辭典、百度網盤與搜狗輸入法等熱門軟體，鎖定 **簡體中文用戶與跨國企業的中國據點**；已有醫療、製造、遊戲、科技、物流、政府與教育等領域的受害組織。下載檔案採 **動態生成策略**（檔名相同、雜湊值各異），並包含 **以 Windows Installer 封裝的惡意安裝檔**；執行後惡意程式會設定 **SYSTEM 等級的工作排程**、**竄改 Defender 白名單、停用 Microsoft Update 元件、刪除磁碟區陰影複製（VSS）備份** 並注入程式碼——部分活動為手動操作——再透過 **SMB** 橫向移動。（該組織曾在本刊 9 月 8 日摘要中因 Kaspersky 的 ValleyRAT 活動被提及；微軟本次揭露的是另一波、規模更廣的行動。）
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178782)

📌 **臺灣擬將重大駭侵納入通報：卓榮泰要求數發部統籌資安情資**
行政院長 **卓榮泰** 表示，加密勒索攻擊已遍及科技、製造、醫療、零售與旅遊等產業，不僅涉及企業營運，也攸關社會安定與國家安全；他要求 **數位發展部（數發部）** 擔任跨機關資安情資統籌單位：為民間企業研訂資安防護參考指引、**將重大駭侵與加密勒索案件納入通報義務**，並建立政府、企業與執法機關間的情資交流與預警機制。**警政署** 另被要求強化科技偵查、數位鑑識專業與人才充實。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178860)

---

## OPSWAT可以怎麼幫上忙

今日多起攻擊活動，都藏在循日常使用者與開發者管道進入的檔案裡：**Silver Fox 動態生成的冒牌安裝檔**（檔名相同、雜湊各異，能規避單純的簽章比對）、**數千個 Google Play Early Access 詐騙 APK**，以及經由開發者基礎設施遞送的 **惡意修補檔與 hook**（Gitea `diffpatch` 濫用、JFrog Artifactory 後門）。**MetaDefender Multi-Scan** 以 30 多個防毒引擎分層掃描執行檔、安裝程式與壓縮檔，攔截單一引擎難以察覺的威脅；**MetaDefender CDR**（內容清洗與重建）則重建允許通行的檔案——去除文件、指令碼與壓縮檔中的主動內容，涵蓋電子郵件、網頁與開發者上傳路徑——**MetaDefender Kiosk** 更可在實體與 OT 邊界進行檔案檢查。
