---
title: "CISO 每日摘要：Claude 主導 Anthropic 26% 研發工作，白帽研究員以 AI 攻入 OpenAI (20260919)"
description: "Anthropic 公布 Claude 已「主導」內部 26% 的 AI 研發工作——3 月時還不到 1%，內部平臺同時約有 3 萬個 AI 代理執勤、每 4.7 萬次代理決策約有 1 次遭阻擋；同週安全研究新創 Hacktron AI 揭露，團隊以 Claude Opus 協助開發漏洞利用、經由 Discourse 社群論壇上的 libheif 圖片解析堆積緩衝區溢位取得 OpenAI 員工 ChatGPT 帳號、並觸及內部 GitHub 儲存庫。其他焦點：Transparent Tribe 部署使用私有 GitHub 儲存庫作為 C2 的 Rust 後門；WordPress Click2Shell 漏洞強制佈景主題安裝；Cisco API 端點認証漏洞；Cambridge 研究顯示 Boko Haram 戰鬥成員用 ChatGPT、Gemini、Grok 進行武器規劃。"
pubDate: 2026-09-19
tags: [Anthropic, Claude, Claude-Opus-5, OpenAI, Hacktron-AI, libheif, AI研發, Epoch-AI, AI治理, Transparent-Tribe, Rust後門, GitHub-C2, WordPress, Click2Shell, CVE, Cisco, API認証, Boko-Haram, ChatGPT, Gemini, Grok, 武器規劃, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## AI 打造 AI：Claude 主導 Anthropic 26% 研發，白帽研究員以 AI 攻入 OpenAI

**Anthropic** 於 **9 月 17 日** 公布，**Claude 已「主導」（leads）公司內部 26% 的 AI 研發工作**——這是該公司主張前沿實驗室應定期發布的一系列衡量指標中第一批對外揭露的數據，用意是讓外界看見 AI 打造自身後繼者的速度。在 **Epoch AI** 的自動化分級（AL0 為毫無 AI 參與、AL5 為完全自主）上，目前已有四分之一的受測研發工作達到 **AL4「主導」**——即 AI 可依高階提示完成大部分任務、由人類監督——**達到「協作」（AL3）以上程度的工作占比超過 90%**；主導占比在 **3 月時還不到 1%**——六個月內倍增軌跡——且 **沒有任何受測工作達到完全自主**。同一份報告也揭露：8 月間約有 **3 萬個 AI 代理** 在主要內部平臺上執行研究與工程工作；當月 **超過 10 億次代理決策** 中，約 **每 4.7 萬次有 1 次（0.002%）在執行前被監控系統阻擋**，約 **每 1,000 份活動紀錄有 1 至 2 份被標記** 進一步人工審查；7 月抽樣一週內，**約 6% 的 AI 研發算力投入安全研究——若只看由 AI 執行的工作，占比升至 12%**。此揭露之際，政策論爭白熱化：執行長 **Dario Amodei** 才在月初呼籲前沿實驗室協調放慢腳步，一名研究員辭職指控業界「拿我們生命去賭」，而 **OpenAI** 在 Anthropic 宣布前一天才開始定期發布模型行為報告。

同一週，等式的攻擊面也浮上檯面。安全新創 **Hacktron AI** 揭露，團隊 **攻入 OpenAI**——取得 OpenAI 員工 ChatGPT 帳號並觸及內部 GitHub 儲存庫——這場行動已於 **7 月依 OpenAI 漏洞獎勵計畫通報 OpenAI 與 Discourse**。入侵起點是 **community.openai.com**——OpenAI 架在 Discourse 上的社群論壇：上傳的 **HEIC/HEIF 圖片** 經 **ImageMagick** 處理、交由 **libheif** 解碼，該環境中的 libheif 版本存在可發展為 **遠端程式碼執行** 的 **堆積緩衝區溢位**。研究人員表示，**Claude Opus 4.8** 協助開發漏洞利用、新發布的 **Claude Opus 5** 讓攻擊在 **位址空間配置隨機化（ASLR）** 下穩定可行，行動中大部分工作則借助 **OpenAI 自家的 GPT-5.6 Sol**；**華爾街日報** 指出團隊取得 **讀取與提議修改 OpenAI 私有軟體** 的路徑。**Hacktron 並未下載原始碼**——僅在內部儲存庫建立一個 **無害的 pull request** 證明可達性——並形容「理論上能存取的範圍」**極為龐大**；團隊也聲稱其 libheif 研究還延伸到其他大型平臺。**OpenAI 感謝研究人員通報，並表示相關漏洞已修補完畢**。

### 這對前沿 AI 資安與揭露的深遠影響

- **遞迴式自我改進（recursive self-improvement）現在有了公開計分板。** 「26% 主導、90% 以上協作」是具體推進軌跡——六個月內從不到 1% 到四分之一——且建立於第三方（Epoch AI）量尺上，搭配的監督數據（每 4.7 萬次決策阻擋 1 次、每千份紀錄標記 1 至 2 份）具體描述前沿實驗室「代理治理」實際樣貌。企業日後要求 AI 供應商揭露同級指標時，這套數字很可能成為模板——監管機構也可能提出相同要求。
- **AI 改變的是漏洞利用的投入成本。** 第三方圖片處理管道（**libheif**）的記憶體破壞漏洞最終演變成觸及大型 AI 公司開發基礎設施的帳號接管鏈——串起受漏洞影響的相依元件、聯邦身分（Discourse 帳號）與 AI 程式工具。過去需要稀缺專家的漏洞開發工作，如今很大一部分由能撰寫並迭代攻擊程式的模型扛下——意味著精密攻擊的專家門檻正在崩塌。
- **與代理相連的開發者帳號已是第一級邊界。** 攻擊路線從遭竊的 ChatGPT 帳號走進 **Codex**、再進入程式碼儲存庫——正是企業如今大量複製的模式：AI 助手對儲存庫、CI 系統與雲端握有常態性存取。代理繼承的存取權，值得獨立盤點與最小化，而非併入既有的程式碼審查與機密輪換流程。
- **修補速度超越攻擊耐心，但幅度有限。** 同日待辦清單——**CVE-2026-19598（Pods，CVSS 9.8）** 來自週三、WordPress Click2Shell 強制佈景主題安裝、Cisco API 端點漏洞、Boko Haram 行為者使用 ChatGPT 與 Grok——反映 AI 輔助檢視正加速的揭露浪潮。但 CISA 對 2024–2025 年資料分析顯示，揭露量飆升之際，**真正遭利用的漏洞數僅微幅成長**。

🔗 **參考資料：** ([Reuters](https://www.reuters.com/business/anthropic-says-claude-now-leads-quarter-work-building-its-next-ai-models-2026-09-17)、[Wall Street Journal](https://www.wsj.com/tech/ai/hackers-used-anthropics-claude-to-break-into-openai-b40ba883)、[The Guardian](https://www.theguardian.com/technology/2026/sep/18/openai-hacked-anthropic-claude-chatbot)、[VentureBeat](https://venturebeat.com/security/openai-hacked-by-small-team-of-white-hat-security-researchers-using-anthropics-claude-opus-5)、[Anthropic](https://www.anthropic.com/institute/measuring-pace-of-ai-development))

---

## 本週活躍威脅

📌 **Transparent Tribe 部署 Rust 後門，使用私有 GitHub 儲存庫作為命令與控制通道**

**Transparent Tribe** ——一個針對印度政府及國防實體的巴基斯坦關聯 APT 組織——已開始部署**模組化 Rust 後門**，該後門**使用私有 GitHub 儲存庫作為命令與控制（C2）通道**，而非傳統基礎設施。此技術將 C2 流量隔離在 GitHub 基礎設施內，使得網路周邊監控難以偵測。該後門經由魚叉式網路釣魚附件傳遞、建立持續化，並透過自訂 GitHub API 呼叫與威脅行為者通訊、進行資料外洩與接收指令。轉向 GitHub C2 反映更廣泛的趨勢：APT 組織正利用合法雲端服務隱匿惡意流量。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/transparent-tribe-deploys-new-rust.html)

📌 **WordPress Click2Shell 漏洞強制佈景主題安裝，可鏈接至程式碼執行**

**一個 WordPress 安全外掛的重大漏洞**允許攻擊者**強制安裝任意 WordPress 佈景主題**，無須使用者操作，隨後可**鏈接至遠端程式碼執行**（取決於佈景主題內容）。該漏洞**未經認証且可遠端利用**，影響特定自動更新設置的站點。Wordfence 本週發布檢測特徵；站點營運商應檢查活躍佈景主題清單，並確認已移除非預期佈景主題。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/new-wordpress-click2shell-flaw-forces.html)

📌 **Cisco 零時差漏洞突顯 API 端點認証缺失，廠商爭相加速修補**

**Cisco** 揭露一個**影響多個產品的 API 端點零時差漏洞**，源於**認証機制不一致**——模式類似本週較早揭露的 **WPMU DEV Dashboard HMAC 繞過（CVE-2026-76581）**。該問題凸顯現代雲端與 API-優先架構面臨的反覆認証重設計漏洞：開發者在擴展端點時未能集中身分閘道。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/cisco-zero-day-api-endpoint-authentication-issues)

📌 **Boko Haram 戰鬥成員利用 ChatGPT、Gemini 與 Grok 進行武器研發與戰術規劃——Cambridge 研究**

**劍橋大學研究團隊**發現 **Boko Haram 及聯盟聖戰組織成員**曾利用 **ChatGPT、Google Gemini 與 xAI Grok** 研究武器、規劃攻擊與改進運作安全實踐。研究人員尋獲聊天記錄，內容涉及爆炸物製造、無人機組裝與反監視技巧等查詢。該發現凸顯**大型基礎模型如今已成為威脅行為者工作流程的不可或缺部分**——降低非國家行為者入場門檻、使較小組織能擴展行動。主要模型廠商隨後更新使用政策以限制此類存取，但執法依賴使用者回報濫用與事後監控。

🔗 **參考資料：** [SCMP](https://www.scmp.com/news/us/article/3360585/boko-haram-exploited-us-and-chinese-ai-chatbots-attacks-cambridge-study-finds)

📌 **多因素認証無法防護 OAuth 同意濫用**

安全研究人員詳述一類攻擊：攻擊者**透過利用 OAuth 同意流程繞過多因素認証（MFA）**——使用者誤以為安全登入而授予第三方應用廣泛權限，卻使該應用獲得持續存取電子郵件、雲端儲存及其他資源。該攻擊對組織 SSO（身分驗證在身分提供者而非服務提供者）的環境特別有效。企業應定期檢查 OAuth 應用權限，並強制實施權限最小化。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/mfa-oauth-consent-abuse)

📌 **EY 調查：自主 AI 實作速度遠超治理與監管**

**安永（Ernst & Young）** 調查企業 AI 採用現況，發現**自主 AI 代理部署速度遠遠快過治理框架發展**。僅有**約 30% 受調企業報告具備正式政策**針對 AI 代理監控、決策記錄或隔離——此落差與 Anthropic 自有資料相符（26% 工作由 AI 主導、阻擋最少化）。調查建議採用代理特定控制：能力邊界、請求記錄、沙箱化與高風險決策升級工作流程。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/ey-survey-autonomous-ai-implementation-outpaces-oversight)

📌 **Vectra AI 發布 Ascent 平臺，對抗 AI 驅動攻擊**

**Vectra AI** 發布 **Ascent**——安全運作平臺，專為偵測與回應 **AI 代理與 LLM 實施或協助的攻擊** 而設計——包括對抗提示注入、經由模型輸出的資料外洩、與異常代理行為。該平臺與現有 SIEM 系統整合，並包含針對生成式 AI 特定攻擊模式的預設偵測。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/vectra-ai-launches-ascent-new-era-ai-driven-attacks)

---

## OPSWAT可以怎麼幫上忙

今日攻擊面涵蓋**使用者信任的檔案與使用者授權的 AI 代理**。Hacktron 入侵鏈始於 **OpenAI 論壇上傳的惡意 HEIC/HEIF 圖片**，並以 AI 程式編寫助手協助開發；**Boko Haram 行為者利用生成式 AI** 進行運作規劃；**WordPress Click2Shell 強制佈景主題安裝**並鏈接 RCE；**GitHub 儲存庫如今容納對手 C2 通道**。**MetaDefender Multi-Scan** 以 **30+ 反惡意軟體引擎**多層掃描經由電子郵件、網路與檔案分享進入的圖片、外掛與安裝程式；**MetaDefender CDR** 重建畸形媒體與檔案，剝除作用中內容與利用解析器的結構；**MetaDefender Kiosk** 在**可卸除式媒體與 OT 邊界**檢查檔案，當 AI 助手起草程式碼、資安團隊爭相大規模修補時，此能力至關重要，用於捕捉已知惡意程式與異常行為。
