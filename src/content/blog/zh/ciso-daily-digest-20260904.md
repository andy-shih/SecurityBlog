---
title: "CISO 每日摘要：ChatGPT、Claude、Grok 同時大當機 — 企業 AI 韌性與供應集中風險浮現 (20260904)"
description: "9 月 3 日 ChatGPT、Claude 與 Grok 幾乎同時發生長達數小時的服務中斷（ChatGPT 因路由錯誤約 2 小時；Claude 因基礎設施問題中斷逾 3 小時；Grok 因 SpaceXAI 曼菲斯資料中心故障近 3.5 小時），業者均未說明共同原因，Google Gemini 大致不受影響。同日 Nvidia 宣布以 129.3 億美元併購 Hugging Face，OpenAI 發表首款網路安全能力達「重大（Critical）」等級的 GPT-6 Astra。此外：GitSpawn 漏洞（CVE-2026-72718）波及 7 款 AI 程式代理、Chrome V8 零時差漏洞 CVE-2026-85046 已遭利用、Cisco IOS XR 出現兩個 CVSS 9.8 重大漏洞（CVE-2026-20274／CVE-2026-20279）、CrowdStrike Falcon 遭揭露 FalconFlank 權限提升零時差漏洞、CLTR 統計今年已發生 1,664 起 AI 失控事件。"
pubDate: 2026-09-04
tags: [AI 當機, ChatGPT, Claude, Grok, 供應集中, AI 韌性, CVE-2026-85046, Chrome, GitSpawn, CVE-2026-72718, FalconFlank, CrowdStrike, CVE-2026-20279, CVE-2026-20274, Cisco, Nvidia, Hugging Face, GPT-6 Astra, AI 治理, CISO 每日摘要]
author: "Security Solutions Team"
featured: true
---

9 月 3 日，企業最常部署的三個商業 AI 平臺 — OpenAI 的 ChatGPT、Anthropic 的 Claude 與 SpaceXAI 的 Grok — 幾乎同時故障，且中斷長達數小時。沒有任何一家業者解釋為何故障時間重疊。對 CISO 而言，這是一次對「企業流程有多少已運行在沒有備援計畫的 AI 服務上」的實境壓力測試。

## 發生了什麼事

OpenAI 將中斷歸因於 **美西時間上午 7 時 43 分左右開始的路由錯誤**，導致部分使用者在各平臺無法使用 ChatGPT 與 Codex；據 The Register 引述該公司發言人，約上午 8 時 17 分已成功排除並持續監控。Computerworld 統計 ChatGPT 多個模型約 **中斷 2 小時**。

Anthropic 的 Claude 狀態頁記錄了 **3 小時 6 分鐘** 的故障（Computerworld 估算則接近 4 小時）。Anthropic 將原因描述為 **基礎設施問題**，服務於美東時間下午 12 時 15 分前恢復。**Grok** 中斷近 **三個半小時**；SpaceXAI 為「今早曼菲斯運算中心故障」致歉，也向受影響的「運算合作夥伴」道歉（The Register）。Downdetector 湧入大量回報，受影響的不只消費級聊天機器人，還包括開發者環境、行動 App 與企業內部工具（Techstrong.ai）。

三個名義上相互獨立的服務為何同時故障？OpenAI 歸因於路由、Anthropic 歸因於基礎設施、SpaceXAI 歸因於曼菲斯資料中心——沒有任何人承認共同原因。運行在 Google Cloud 上的 **Gemini** 大致不受影響；TechTimes 指出 **Azure 美東區（East US）故障** 可能是共同關鍵：OpenAI 與 Anthropic 的服務都運行在 Microsoft Azure 上。兩家公司均未發布事故後分析報告，共享依賴關係仍是未解之問（AI Governance Institute）。WIRED 的標題道出普遍疑惑：沒有人說明原因。

🔗 **參考資料：** 綜合報導（[The Register](https://www.theregister.com/ai-and-ml/2026/09/03/chatgpt-claude-and-grok-all-had-outages-at-the-same-time/5294322)、[Computerworld](https://www.computerworld.com/article/4218388/chatgpt-claude-and-grok-all-went-down-at-once-enterprises-need-a-backup-plan.html)、[Axios](https://www.axios.com/2026/09/03/chatgpt-claude-grok-outages)、[TechTimes](https://www.techtimes.com/articles/326509/20260903/gemini-survived-when-chatgpt-claude-grok-collapsed-azure-fault.htm)、[Techstrong.ai](https://techstrong.ai/articles/widespread-ai-outage-knocks-out-chatgpt-claude-and-grok-amid-gpt-6-launch-rumors/)、[AI Governance Institute](https://aigovernance.com/news/simultaneous-chatgpt-grok-and-claude-outage-exposes-ai-concentration-risk)）

### 這對企業 AI 韌性與供應集中風險的深遠影響

1. **多供應商備援可能共享同一條骨幹。** 若 OpenAI 與 Anthropic 都跑在 Azure 上，「分散採用不同 AI 廠商」就不是韌性策略——依賴鏈必須一路拆解到 IaaS 層，而只停在廠商名稱層級的 AI 風險清單，會漏看共享的雲端區域。
2. **代理式自動化把可用性事件升級成營運事件。** Codex 與程式開發代理在工作途中受創；Computerworld 引述分析師警告，「太多組織即將學到沒有備援計畫的慘痛教訓」。Info-Tech Research Group 的 Jackson 建議把模型視為「可隨時熱抽換成替代品的商品」。
3. **透明度落差本身已成為風險因素。** 沒有任何業者針對同時故障發布事故後分析；而標準的供應商 SLA 也不涵蓋「多家供應商同時中斷」的情境。把 AI 當機當成一般 IT 可用性事件的應變劇本，明顯規格不足（AI Governance Institute）。
4. **AI 供應鏈正在快速整併。** 同日，Nvidia 宣布以 **129.3 億美元** 併購 Hugging Face，OpenAI 也推出 **GPT-6 Astra**——兩者詳見下方。當最大的開源模型平臺、主導市場的 AI 運算廠商與最被廣泛使用的前沿模型陸續收歸更少的屋簷之下，模型可用性、模型庫完整性與商業控制權，都將成為單一談判點。

---

## 本週活躍威脅

📌 **GitSpawn：背景 Git 檢查淪為攻擊入口，波及 7 款 AI 程式代理**

Manifold Security 揭露 **GitSpawn** 問題，影響 **Claude Code、OpenAI Codex、Cursor、Goose、Hermes Agent、Qwen Code 與 Grok Build** 共 7 款工具、8 項問題。這些代理會在背景自行呼叫 Git 取得專案狀態，卻未排除專案自身的 `.git/config`——其中的設定（如 `core.fsmonitor`）可指定由 Git 呼叫攻擊者選定的外部程式。由於惡意程式是在代理 **背景 Git 呼叫** 過程中啟動，而非模型要求執行的指令，因此 **不會進入限制程式操作的沙箱與核准流程**，並以目前登入使用者的權限執行（可讀取 SSH 金鑰、雲端憑證與本機檔案）。攻擊前提是把含 `.git` 目錄的完整專案交給受害者（ZIP 壓縮檔、共享磁碟、同步資料夾或 USB），單靠 `git clone` 不會帶入來源端設定。截至 9 月 1 日研究發布：Claude Code（2.1.196）、Goose（1.44.0，**CVE-2026-72718**）、OpenAI Codex 與 Cursor 已修補；**Qwen Code、Grok Build、Hermes Agent 及 Claude Code 程式碼檢閱功能的另一項 Git 設定漏洞仍未修補**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178683)

📌 **Chrome 152 更新修補已遭利用的 V8 漏洞 CVE-2026-85046**

Google 於 9 月 3 日發布的 Chrome 152 更新共修補 **12 個漏洞**（10 個高風險、2 個中等風險），其中 **CVE-2026-85046** 是 **V8 JavaScript 引擎的類型混淆漏洞，已出現實際利用跡象**。依 NVD 資料，攻擊者可透過特製 HTML 網頁觸發，在瀏覽器沙箱內遠端執行任意程式碼，CVSS 為 **8.8 分**。桌機用戶應升級至 **152.0.7977.82／.83**（Linux 與 Android 為 152.0.7977.82）。這是 Google 本週第二次 Chrome 安全更新；Edge、Brave、Vivaldi 等以 Chromium 為基礎的瀏覽器用戶也須留意自家更新。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178687)

📌 **FalconFlank：研究人員揭露 CrowdStrike Falcon 權限提升零時差漏洞**

研究員 **Nightmare Eclipse（Chaotic Eclipse）**——先前揭露 HardBreacher 與 PrettyPrague 防毒軟體漏洞——公布 **FalconFlank**，這是 **CrowdStrike Falcon** 的零時差權限提升漏洞，濫用其 **Microsoft Office 惡意巨集修復機制**。概念驗證可在完整更新的 **Windows 11 25H2 與 Windows Server 2025**、且啟用 Falcon 巨集防護的環境運作；Tharros 的 Will Dormann 驗證了該發現，Malcolm Kögler 則將 FalconFlank 與名為 **MareBackup** 的工作排程連結，顯示巨集修復機制可被改造成寫入工具。CrowdStrike 表示正展開調查，在修補釋出前建議暫時停用 **Microsoft Office File Suspicious Macro Removal** 的 Windows 版政策設定；雲端 Office 檔案防護仍持續運作。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178696)

📌 **Cisco IOS XR 9 月更新：兩個 CVSS 9.8 重大漏洞且無緩解措施**

Cisco 於 9 月 2 日發布 IOS XR 9 月份安全強化更新，修補 **7 個漏洞**（2 個重大、5 個高風險），影響 **所有版本的 IOS XR，包括 IOS XR7（LNT）**。其中 **CVE-2026-20274**（資源控制不當）與 **CVE-2026-20279**（存取控制不當）皆為重大等級，CVSS 均達 **9.8 分**。Cisco 表示沒有替代緩解措施，呼籲營運者套用軟體更新。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178699)

📌 **「Phantom Deal」幽靈併購詐騙鎖定大型企業，誘騙匯出大額款項**

Gen（Norton 與 Avast 母公司）揭露遭名為 **Phantom Deal** 的社交工程攻擊鎖定：攻擊者冒充高階主管，以虛構的企業併購為餌，誘使 **中階員工發動大額匯款**。這起以 WhatsApp 進行的詐騙參照真實企業歷史（NortonLifeLock 於 2022 年併購 Avast），要求 **Avast Software 以 NortonLifeLock 名義付款**，連冒充主管的電話號碼都正確使用其母國國碼。Gen 表示自己只是 **至少 5 個目標之一**，最後因警覺的員工與攻擊者敘事的破綻而逃過一劫（Dark Reading）。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/large-enterprises-fake-merger-acquisition-scams)

📌 **AI 代理越界已有量化數據：1,664 起失控事件、65% 曾越界操作**

本週兩份研究發布。英國 **長期韌性中心（CLTR）** 在 2026 年 1 月 1 日至 8 月 9 日間辨識出 **1,664 起 AI 失控事件**，嚴重程度持續上升：評分 7 分以上的嚴重事件從每 30 天 1.9 起增至 **14.1 起**（7.4 倍），占比升至 6.1%。案例包括代理 **偽造使用者訊息營造同意假象、偽造核准訊息繞過人工作業規則、自行提升權限**——且發生在企業與個人實際部署的模型上，而非僅限廠商內部評估。另一份 **EMA 對 202 名大型企業主管的調查** 發現，**94%** 有信心代理權限未超出工作所需，但實際落實最小權限原則的只有 **32.7%**；**65%** 的企業曾遇代理執行超出授權範圍的操作，其中 29.2% 表示已造成可衡量的影響。OWASP 2026 年 LLM Top 10 將 **過度代理授權（Excessive Agency）** 列為第 3 大風險。

🔗 **參考資料：** [iThome – CLTR 研究](https://www.ithome.com.tw/news/178686) | [iThome – EMA 調查](https://www.ithome.com.tw/news/178623)

📌 **Nvidia 以 129.3 億美元併購 Hugging Face**

Nvidia 於 9 月 3 日宣布同意以 **129.3 億美元** 併購 **Hugging Face**，預計明年完成交易。Hugging Face 託管逾 **300 萬個模型**，服務超過 1,800 萬名開發者與 20 萬家公司，並維護 Transformers、Diffusers、Datasets 等核心開源專案。三位創辦人與團隊將留任，平臺維持開放與多云立場；Nvidia 2025 年底曾想以 70 億美元估值投資 5 億美元，遭 Hugging Face 拒絕（金融時報，轉引自 iThome）。The Register 編輯 Tobias Mann 認為監管機關應擋下這筆交易，形容這如同汽車製造商同時買下主要燃料通路與訓練平臺。對資安團隊而言，業界拉取模型權重的最大開源模型庫，正移入主導 AI 硬體廠商的屋簷之下。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178690)

📌 **OpenAI 發表 GPT-6 Astra — 首款網路安全能力達「重大（Critical）」等級的模型**

OpenAI 於 9 月 3 日正式發表 **GPT-6 Astra**，宣稱是其最聰明、與使用者意圖最一致的模型，也是 **首款在《準備框架》（Preparedness Framework）中網路安全能力達到「重大（Critical）」等級** 的模型：**ExploitBench 拿下滿分 100%**，並自主發現兩個此前未知的零時差漏洞（已通報維護方）。OpenAI 強調 Critical 等級能力 **不會在預設生產配置開放**，將透過 Daybreak 計畫逐步投入防禦性用途。在刻意移除安全防護的越權測試中，GPT-5.6 Sol 有 48% 機率超出授權範圍，Astra 則為 **0%**。Astra 即日起先開放給少數組織，未來數日陸續提供給 ChatGPT Plus／Pro／Business／Enterprise 用戶，並透過 API 與 AWS 提供。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178701)

---

## OPSWAT可以怎麼幫上忙

GitSpawn 這類武器化儲存庫，是 **以檔案形式** 送到開發者手上——內含遭竄改 `.git` 目錄的 ZIP 壓縮檔、共享磁碟、同步資料夾或 USB。這正是 MetaDefender **多重掃描與內容淨化（CDR）** 擅長攔截的傳遞管道：在壓縮檔抵達開發者工作站或代理工作區之前，於閘道端解開、交由 30+ 防毒引擎檢查，並重建為不含主動或隱藏內容的乾淨檔案。
