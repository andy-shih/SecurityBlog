---
title: "CISO 每日摘要：Anthropic 為 Claude 文字加浮水印、檔案加 C2PA 標記 (20260811)"
description: "Anthropic 依歐盟 AI 法第 50 條透明度準則，為 8 月 2 日後發布的所有 Claude 模型輸出嵌入肉眼不可見浮水印，檔案附加 C2PA 數位簽章來源資訊，並全球適用。同日 OpenAI 推出降低防護的 GPT-5.6-Cyber（進階網攻請求完成率 95%）；中國駭客 Storm-1175 疑似利用 N-able N-central CVE-2026-18577 散布新型勒索軟體 StormEncryptor；Gunra 勒索軟體（51 個受害者）利用 Fortinet CVE-2025-24472 與 Schneider CVE-2024-5559 入侵；CERT Polska 揭露首起經由私有 APN 攻擊導致波蘭熱電廠渦輪機關閉的事件。"
pubDate: 2026-08-11
tags: [ciso每日摘要, AI治理, Anthropic, 浮水印, 歐盟AI法, 勒索軟體, 供應鏈攻擊, 關鍵基礎設施]
author: "Security Solutions Team"
featured: true
---

## Anthropic 全面為 Claude 輸出嵌入 AI 浮水印

Anthropic 於 8 月 11 日證實，8 月 2 日（歐盟 AI 法透明度準則生效日）之後發布的所有 Claude 模型，都會在生成的文字中嵌入**肉眼看不見的浮水印**，並在 SVG、PNG、JPEG 等檔案附加符合 **C2PA 標準、經數位簽署的來源中繼資料**。標記在**模型層級**直接加入，因此涵蓋所有使用介面：Claude、Claude Platform API、**Claude Code**、Claude Cowork 與 Claude Tag。浮水印會隨文字複製貼上而保留，且「可能經得起部分編輯」，相關機制不只適用歐盟，也套用至**全球**服務。Anthropic 已簽署歐盟《人工智慧法》第 50 條的 AI 生成內容透明度實務準則，並正為 8 月 2 日前發布的既有模型補上標記支援（時程未公布）。該公司表示浮水印不影響閱讀與原意，但大幅改寫、翻譯、篇幅過短或檔案轉換都可能使標記消失——**偵測不到標記不代表內容非 AI 生成**。文字浮水印的技術實作與偵測方式尚未公開。

### 這對 AI 內容治理的深遠影響

- **歐盟規範、全球實施：** 領先 AI 實驗室把歐盟 AI 法第 50 條義務推向全球——AI 內容來源標記可能成為事實上的全球標準。
- **可驗證的內容來源機制成形：** C2PA 數位簽章讓系統能驗證檔案是否出自 Claude、是否被竄改；文字浮水印則提供可隨複製貼上留存、但會被改寫或翻譯削弱的高機率訊號。
- **AI 代理輸出納入追蹤：** 模型層級標記涵蓋 Claude Code、Cowork 等代理產出——企業工作流程中代理生成的程式碼、文件與檔案都將可追溯。
- **限制與反彈：** 偵測本質上非百分之百可靠；部分用戶以隱私為由反彈。Black Forest Labs、Google、Meta、Microsoft、OpenAI、Synthesia 等業者也已承諾遵守同一套歐盟準則，Suno、Substack 等平台則在監管壓力下陸續導入 AI 內容標記。

🔗 **參考資料：** 綜合報導（[iThome](https://www.ithome.com.tw/news/178044)、[TechCrunch](https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/)、[The Register](https://www.theregister.com/ai-and-ml/2026/08/11/anthropic-pledges-to-embed-watermarks-to-help-discern-ai-slop-in-sop-to-eu/5285792)、[Anthropic 官方說明](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content)）

---

## 本週活躍威脅

📌 **N-able N-central 身分驗證繞過漏洞遭積極利用，Huntress 與 Sophos 證實入侵事件（更新）** — 攻擊者利用 **CVE-2026-18556** 及其修補繞過漏洞 **CVE-2026-18577**（兩者皆已被 CISA 列入積極利用）入侵 N-central 客戶。Huntress 確認一名客戶遭入侵；Sophos 觀察到攻擊者建立 **「veeam」網域帳號**、重設網域管理員密碼，並在被管端點部署大量遠端管理工具，鎖定**備份伺服器、網域控制器與應用程式伺服器**。
🔗 **參考資料：** [iThome 資安日報](https://www.ithome.com.tw/news/178032)

📌 **中國駭客 Storm-1175 散布新型勒索軟體 StormEncryptor，疑利用 N-central 漏洞** — 微軟威脅情報指出，以經濟利益為動機的中國駭客團體 **Storm-1175**（先前使用 Medusa）自 8 月 2 日起部署新型勒索軟體 **StormEncryptor**。這款以 C++ 撰寫的惡意程式將檔案加密並加上 **.encrypted** 副檔名、留下 **!!!README_FIRST!!!.txt** 贖金通知；入侵管道推測是 **CVE-2026-18577**。入侵後行為包括濫用 **AnyDesk／SimpleHelp**、以 **Advanced IP Scanner** 進行偵察、以 **Mimikatz** 傾印 LSASS，數天內即可完成從入侵到外洩與加密。
🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/china-linked-hackers-deploy-new.html)、[iThome](https://www.ithome.com.tw/news/178020)）

📌 **Gunra 勒索軟體：韓國與 CISA 示警，51 個受害者橫跨關鍵基礎設施** — 聯合公告指出源自 Conti 的 **Gunra**（2025 年 4 月開始活動）鎖定醫療、金融、政府與專業服務業。初始入侵利用 **Schneider Electric PowerLogic P5（CVE-2024-5559）** 與 **Fortinet FortiOS／FortiProxy（CVE-2025-24472）** 漏洞；採雙重勒贖模式、限期 5 至 7 天，以釣魚為主要入侵管道，並透過 **WhatsApp 風格聊天面板**協商，使用 **Salsa20／ChaCha20** 加密。Ransomware.Live 統計 **51 個受害者**，多數位於韓國、巴西、西班牙、泰國與香港。
🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/gunra-ransomware-exploits-fortinet-and.html)、[iThome](https://www.ithome.com.tw/news/178037)）

📌 **CERT Polska：首起經由私有行動網路 APN 的攻擊，關閉波蘭熱電廠渦輪機** — 攻擊者從**風力發電廠網路**，透過允許用戶端互連的**私有 APN**（access point name），橫向移動到位於熱電廠、仍使用**預設管理員帳密**的 **WAGO 控制器**，關閉供應約 **5 萬居民**的蒸汽渦輪機與製程用水系統（2025 年 12 月事件，8 月 8 日公布）。CERT Polska 稱這是全球首起經由私有 APN 攻擊工業網路的真實案例；無 CVE、無單一修補可套用。這是**波蘭第二座**遭攻擊的熱電廠。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/hackers-breach-polish-power-plant.html)

📌 **美國供水系統攻擊擴大至 12 州，伊朗遭懷疑（更新）** — Dark Reading 報導供水與污水系統入侵事件已擴及**至少 12 州**，攻擊手法屬低複雜度、鎖定暴露於網際網路的 **PLC**。明尼蘇達州 7 月底率先證實逾 30 個供水系統的 OT 遭鎖定；CISA **7 月 30 日**更新公告（攻擊者修改 PLC 密碼、變更 IP 以封鎖操作人員），並接續 FBI **7 月 22 日**更新——將伊朗駭客鎖定 **Rockwell／Allen-Bradley、Schneider Electric 與 Siemens PLC** 的行動連結起來。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/ics-ot-security/multistate-water-system-attacks-widen-iran-suspected)

📌 **Ceva Logistics 遭駭，影響擴及銀行、零售商與 Steam 玩家** — 法國物流巨擘 **Ceva**（2025 年營收 183 億美元、全球逾千座倉儲）證實網路攻擊影響**歐洲至少 8 座倉儲中心**（FreightWaves 指攻擊始於 7 月 29 日），導致貨運延宕與訂單取消。客戶**姓名、住址、電話與電子郵件**外洩；荷蘭電商 **Bol**、精品百貨 **De Bijenkorf**、足球俱樂部 **Ajax**、銀行 **ING**、眼鏡商 **Ace & Tate** 均受波及，**Valve** 於 8 月 7 日通知 Steam 硬體買家個資恐外洩。
🔗 **參考資料：** 綜合報導（[TechCrunch](https://techcrunch.com/2026/08/10/a-data-breach-at-shipping-giant-ceva-logistics-is-rippling-across-banks-retailers-steam-gamers-and-beyond/)、[iThome 資安日報](https://www.ithome.com.tw/news/178032)）

📌 **BdThemes WordPress 供應鏈攻擊：投毒 JSON 打造 rogue 管理員帳號** — Wordfence 發現 **BdThemes**（旗下外掛合計逾 **35 萬活躍安裝**，Element Pack Addons 單一外掛即超過 10 萬）遭供應鏈攻擊：WordPress.org 官方儲存庫原始碼未被修改，攻擊者污染「**Biggopti**」管理後台橫幅元件所抓取的**遠端 JSON 資料流**。JSON 解析的 **XSS 漏洞（CVSS 5.4，display_id 參數）** 讓攻擊者在每次 **wp-admin** 頁面載入時執行指令碼，進而建立 rogue 管理員帳號；相關外掛自 8 月 7 至 8 日起關閉下載。
🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/bdthemes-supply-chain-attack-poisons.html)、[iThome](https://www.ithome.com.tw/news/178021)）

📌 **Metabase CVE-2026-72898（CVSS 10.0）災情擴大：Framework、Tally、Anaconda、n8n 證實資料外洩（更新）** — 遭積極利用的 SQL 注入零時差漏洞（**GHSA-vwf4-m7j8-wcjf**）持續出現受害者：筆電廠 **Framework**（姓名、信箱、電話、地址外洩）、表單平台 **Tally**（信箱與密碼雜湊）、AI 平台 **Anaconda** 與工作流程自動化平台 **n8n** 皆證實 Metabase 執行個體遭入侵。修補版本：**0.58.24／0.59.21／0.60.17／0.61.11／0.62.9／0.63.5**。
🔗 **參考資料：** 綜合報導（[iThome 資料外洩](https://www.ithome.com.tw/news/178029)、[iThome 修補公告](https://www.ithome.com.tw/news/178023)）

📌 **OpenAI 推出降低防護的 GPT-5.6-Cyber，Daybreak Red 已找出逾 400 個核心漏洞** — 以 GPT-5.6 Sol 為基礎、透過全新 **Daybreak Red** 存取級別提供的 **GPT-5.6-Cyber**，針對零時差漏洞發掘與漏洞利用鏈開發訓練，並降低對高風險雙用途請求的拒絕。OpenAI 內部評測顯示其完成率達 **95.0%**，遠高於 GPT-5.6 Sol 的 **1.5%** 與 GPT-5.5-Cyber 的 **57.3%**；Daybreak Red 已在一款熱門作業系統核心發現**逾 400 個**可能造成權限提升的漏洞。
🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/openai-launches-gpt-56-cyber-with.html)、[iThome](https://www.ithome.com.tw/news/178022)）

📌 **GhostSplice：惡意 MCP 伺服器拆分指令，誘使 AI 編碼代理外洩機密** — ASSET Research Group 展示惡意 **MCP 伺服器**可把資料竊取請求拆成多段看似正常的指令，分散於工具描述與工具結果中，由代理自行拼湊後回傳 **SSH 金鑰、環境變數、原始碼與客戶資料**。同一模型在某個編碼客戶端拒絕、在另一個卻成功外洩；此攻擊前提是開發者已連線惡意伺服器。目前尚無 CVE、無確認的實際受害者。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/malicious-mcp-servers-can-split.html)

📌 **Plug And Pwn：USB 自動安裝鏈在完整更新的 Windows 11 上取得 SYSTEM 權限** — 研究人員（DEF CON 34）模擬 **Sierra Wireless** 裝置讓 Windows 安裝具 SetDNS 原語的 SYSTEM 服務 **SwiService.exe**，改寫 DNS 後，再透過 **Sony FeliCa** 讀卡機的 co-installer（以明文 HTTP 抓取設定檔、存在路徑穿越）將 DLL 植入 **System32**，進而取得 SYSTEM 程式碼執行。遠端變體可經由 RDP 合成 USB 流量（幽靈 Intel RealSense 裝置＋**CRYPTBASE.dll** 搜尋順序劫持）達成；RDP USB 重新導向預設關閉。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/researchers-turn-usb-auto-install-into.html)

📌 **Forescout：TP-Link Omada ZTP 機制 15 個漏洞可串鏈至網路全面淪陷** — 11 個 CVE（**CVE-2025-9289~9293、CVE-2025-15544、CVE-2025-15627~15631**）加上 4 個未編號問題，涵蓋寫死的金鑰與憑證、不安全的帳密傳輸、憑證驗證缺失（可 MitM）、控制器介面 XSS，以及雲端註冊裝置的競爭條件。與先前揭露的兩個 RCE 漏洞組合，攻擊者只要暴力猜出**可預測的序號**即可註冊裝置——完全不需要初始網路存取——進而接管受管的 Omada 網路設備。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/10/tp-link-omada/)

📌 **Paperclip AI 代理平台存在滿分漏洞，未經身分驗證即可接管伺服器** — Oasis Security 在 AI 代理組織與管理平台的驗證機制與本機開發模式中發現 **3 個重大漏洞**，未經身分驗證的攻擊者可在幾分鐘內瀏覽平台、建立帳號並在伺服器上執行**任意指令**，完全不需要釣魚郵件、外流憑證或用戶互動；其中一個漏洞評分為 **10 分**。開發團隊已於今年 4 月發布 **2026.416.0** 版修補。
🔗 **參考資料：** [iThome 資安日報](https://www.ithome.com.tw/news/178032)

📌 **DeadLock 勒索軟體以 Polygon、Session 與 Wasabi 打造分散式勒索基礎設施** — 微軟威脅情報分析顯示，**DeadLock**（2025 年 7 月現身，至 2026 年 7 月已在外洩網站公布**逾 80 個受害組織**，半數以上位於歐洲）將勒索協商與資料外洩系統分散化：代理與外洩網站內容寫入 **Polygon 區塊鏈智慧合約**、透過 **Session 通訊網路**聯絡、遭竊資料存放於 **Wasabi 雲端儲存**。其中一個附屬團體與 **Lynx 及 INC 勒索軟體生態系**有關；受害者遍及 IT、礦業、物流、製造與旅宿業。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178048)

---

## OPSWAT可以怎麼幫上忙

今日威脅組合——被投毒的 WordPress 外掛資料流（BdThemes）、三個勒索軟體家族（StormEncryptor、Gunra、DeadLock）、USB 觸發的安裝程式劫持，以及 AI 代理外洩程式碼與機密——都有一個共同點：**攻擊載體在執行前必然跨越檔案或套件邊界**。MetaDefender 的**多引擎防毒掃描（30+ 引擎）**與 **Content Disarm & Reconstruction（CDR）**能在閘道端淨化惡意文件、壓縮檔與安裝程式；檔案信譽評等與深度內容分析則可協助企業驗證下載套件與外掛更新的來源可信度，在抵達端點、伺服器或代理工具鏈之前完成把關。
