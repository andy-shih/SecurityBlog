---
title: "CISO 每日摘要：Anthropic 指控阿里巴巴發動史上最大規模 AI 蒸餾攻擊 (20260625)"
description: "Anthropic 指控阿里巴巴透過 25,000 個假帳號發動 2,880 萬次 Claude API 呼叫，進行史上最大規模 AI 模型蒸餾攻擊；Cisco SD-WAN 零時差漏洞 CVE-2026-20245 被揭露前已遭利用 2 個月；CISA 警告 Lantronix EDS5000 重大漏洞 CVE-2025-67038 正被積極利用；日本 KDDI 遭駭，6 家 ISP 共 1,422 萬筆電子郵件帳密可能外洩；FortiBleed 逾 8.6 萬臺 Fortinet 設備憑證外洩。"
pubDate: 2026-06-25
tags: [anthropic, 阿里巴巴, AI蒸餾, AI治理, cisco, sd-wan, CVE-2026-20245, lantronix, CISA-KEV, fortibleed, KDDI, 資料外洩, 供應鏈攻擊, openclaw, gaslight, cordyceps, chrome, ubiquiti]
author: "Security Solutions Team"
featured: true
---

## Anthropic 指控阿里巴巴發動史上最大規模 AI 模型蒸餾攻擊

Anthropic 於今日正式指控阿里巴巴集團發動**史上最大規模的 AI 模型蒸餾攻擊**，稱這家中國科技巨頭使用 **超過 25,000 個虛假帳號**，在 **2026 年 4 月至 6 月**期間系統性地從 Claude 模型中萃取能力。Anthropic 在致美國參議員 Elizabeth Warren 和 Tim Scott 的函件中，詳細列舉了 **2,880 萬次 Claude API 呼叫**，稱之為「工業規模」的 AI 智慧財產竊取。

此事件標誌著**美國 AI 出口管制措施的首次重大執法考驗**。Anthropic 呼籲美國政府介入，警告出口管制本身無法阻止「蒸餾」攻擊——攻擊者可透過 API 存取權限吸取模型輸出，從而逆向工程出模型能力。白宮已獲通報，此事件預計將加速 AI 模型安全監管行動。

阿里巴巴已否認這些指控，中國官方媒體稱這些說法「缺乏實質內容」且源於地緣政治競爭。此事件發生在美中 AI 領導權競爭加劇之際，包括最近的 **Fable 5 出口禁令**以及中國推出自有 Mythos 等級模型。

🔗 **參考資料：** 綜合報導（[Bloomberg](https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models)、[Reuters](https://www.reuters.com/technology/anthropic-claims-alibaba-unlawfully-copied-claudes-capabilities-2026-06-24/)、[Financial Times](https://www.ft.com/content/antrhopic-alibaba-distillation-2026)）

### 這對 AI 治理的深遠影響

此次攻擊的規模與複雜程度代表了 **AI 智慧財產權竊取的典範轉移**。與傳統 IP 竊取不同，蒸餾攻擊利用了前沿 AI 服務的 **開放 API 存取模式**——而這正是合法企業 AI 採用所依賴的同一套機制。Anthropic 的函件透露，攻擊者使用了**精密的憑證輪換、IP 跳轉和行為模仿技術**來逃避偵測長達 **3 個月**，顯示其具備國家級行動能力。

此事件對 **AI 供應商風險管理**具有直接影響。部署 Claude 的組織——特別是在受監管行業——現在必須審視其 API 使用模式，並確保**異常存取模式**能被標記。對 CISO 而言，此攻擊凸顯了一個關鍵盲點：基於 API 的 AI 服務代表了一個**不對稱的威脅面**，其中輸出監控（而不僅僅是輸入過濾）至關重要。

🔗 **參考資料：** 綜合報導（[Bloomberg](https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models)、[Reuters](https://www.reuters.com/technology/anthropic-claims-alibaba-unlawfully-copied-claudes-capabilities-2026-06-24/)）

---

## 本週活躍威脅

📌 **Cisco SD-WAN 零時差漏洞 CVE-2026-20245 — 揭露前 2 個月已遭利用**

Mandiant 揭露，一個高嚴重性的 Cisco Catalyst SD-WAN 漏洞在公開揭露前至少 **2 個月已被作為零時差漏洞利用**。攻擊者透過**惡意 CSV 檔案上傳**利用 CVE-2026-20245（CVSS 7.8），將權限提升至**完整 root 等級的 Shell 控制**（建立名為 "troot" 的帳號）。攻擊者使用了**反鑑識技術**，選擇性地刪除和還原系統設定檔以躲避偵測。目標為一家未具名的**通訊服務供應商**。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cisco-catalyst-sd-wan-zero-day-cve-2026.html) | [iThome](https://www.ithome.com.tw/news/176870)

📌 **CISA 警告 Lantronix EDS5000 重大漏洞 CVE-2025-67038 正被積極利用**

CISA 將 **CVE-2025-67038**（CVSS 9.8）新增至已知遭利用漏洞目錄（KEV），警告 Lantronix EDS5000 系列工業序列轉乙太網路設備中的**程式碼注入漏洞**正被積極利用。該漏洞允許**未經認證的遠端攻擊者**透過 HTTP RPC 模組的使用者名稱參數注入任意 OS 指令，並以 **root 權限**執行。CISA 同時也標記了 **3 個 Ubiquiti UniFi OS 滿分漏洞**（CVE-2026-34908、CVE-2026-34909、CVE-2026-34910）正被用於部署惡意軟體。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cisa-warns-critical-lantronix-eds5000.html) | [iThome](https://www.ithome.com.tw/news/176864)

📌 **日本 KDDI 資料外洩 — 6 家 ISP 共 1,422 萬筆電子郵件帳密恐外洩**

日本電信巨頭 KDDI 揭露重大資料外洩事件，攻擊者利用其提供給 6 家 ISP 子公司（BIGLOBE、Nifty、JCOM、STNet、中部電信、KDDI Web Communications）的郵件系統中的**第三方軟體漏洞**進行入侵。可能有多達 **1,422 萬筆電子郵件帳號與密碼**受到影響，涵蓋活躍及長期未使用的帳號。KDDI 於 6 月 17 日發現未經授權存取後當日完成修補，正通知受影響用戶並呼籲立即變更密碼。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176871)

📌 **Chrome 廣告阻擋擴充功能（1,000 萬+ 安裝數）內藏潛在指令碼注入能力**

Island 安全研究人員發現，一款熱門 Chrome 擴充功能 **Adblock for YouTube**（1,000 萬以上安裝數、Chrome 線上應用程式商店精選徽章）具備**在任何網站上執行任意 JavaScript** 的架構能力——只需透過伺服器端設定變更即可啟用，無需擴充功能更新、商店審查或用戶可見的提示。此能力雖然目前處於休眠狀態，但代表了重大的**供應鏈風險**。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/chrome-ad-blocker-with-10m-installs.html)

📌 **Gaslight macOS 惡意軟體 — 北韓關聯駭客利用提示注入攻擊 AI 分析工具**

一款名為 **Gaslight** 的新型 **Rust 編寫 macOS 資訊竊取程式**被發現內嵌**提示注入 payload**，專門設計用來誤導惡意軟體分析師的 AI 工具使其中止分析。此惡意軟體以**高可信度歸屬於北韓關聯威脅行為者**，使用 **Telegram 機器人 API C2 通道**，並部署串接的虛假系統故障訊息來混淆 LLM 輔助的鑑識代理工具。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/new-gaslight-macos-malware-uses-prompt.html)

📌 **Cordyceps CI/CD 漏洞 — 300+ GitHub 儲存庫暴露於供應鏈攻擊風險**

Novee Security 研究人員揭露了一組命名為 **Cordyceps** 的 CI/CD 工作流程弱點，影響包括 **Microsoft、Google、Apache 和 Cloudflare** 在內的組織。此漏洞允許**任何未經認證的使用者**偽造核准、推送程式碼以及竊取憑證，影響 **300 個以上可完全利用的高影響力儲存庫**。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html)

📌 **FortiBleed 外洩持續擴大 — 逾 8.6 萬臺 Fortinet 設備憑證曝光**

**FortiBleed** 資料外洩事件持續擴大，分析顯示全球 **86,000 臺 Fortinet 設備**受到影響。外洩資料包含設備憑證和設定資訊，可能導致受損的 FortiGate 設備遭受**持續性存取**。臺灣受影響數量**位居全球第三**。CISA 已發布具體緩解指引，要求重設密碼並遷移至 PBKDF2 雜湊機制。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/06/24/fortibleed-analisys/)

📌 **Ubiquiti UniFi OS 三個滿分 RCE 漏洞已在實際攻擊中被利用**

CISA 確認 **3 個 Ubiquiti UniFi OS 最高嚴重性漏洞**（CVE-2026-34908、CVE-2026-34909、CVE-2026-34910）已被積極用於部署惡意軟體。此漏洞鏈可實現**指令注入、路徑遍歷和未經授權的系統變更**，結合後可在**單一請求中獲得完整 root 反向 Shell**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176863)

📌 **攻擊者濫用 AWS Lambda 無伺服器服務隱匿 HazyBeacon C2 流量**

攻擊者利用**遭竊的 IAM 憑證與寬鬆的雲端權限**，將 **AWS Lambda Function URL** 濫用為 **HazyBeacon** 後門程式的 C2 中繼基礎設施。該攻擊活動鎖定**東南亞政府網路**，利用雲端供應商 IP 範圍的信任度，將惡意流量混入合法的雲端服務通訊中。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176865)

📌 **Google Chrome 149 修補 18 項安全漏洞 — 4 項屬於重大等級**

Google 發布 Chrome 149 穩定版更新，修補 **18 項安全漏洞**，其中 **4 項評為重大等級**。重大漏洞影響 **WebGL、Blink 和 GPU** 等核心元件，主要為記憶體安全問題。建議用戶立即更新。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176876)

---

## OPSWAT 可以怎麼幫上忙

**AI 供應鏈威脅**（OpenClaw 惡意技能）、**CI/CD 管線漏洞**（Cordyceps）以及**基礎設施層攻擊**（Chrome 擴充功能潛在注入、AWS Lambda C2 濫用）的匯流，凸顯了在軟體供應鏈的每一層實施**縱深防禦**的重要性。

- **MetaDefender Multi-Scanning** 可透過 30 以上的防毒引擎偵測惡意套件、腳本和 AI 技能，捕捉單一引擎遺漏的威脅——對於審查 OpenClaw 技能至關重要
- **MetaDefender CDR（內容淨化與重構）** 可從穿越 CI/CD 管線、電子郵件閘道和檔案上傳入口的檔案中剝離主動內容（巨集、腳本、嵌入式物件）——可中和武器化 CSV 檔案（如 Cisco SD-WAN 攻擊向量）、文件和壓縮檔
- **MetaDefender Cloud** 為 API 驅動的工作流程提供即時檔案信譽評等和深度內容檢測，包括 AI 模型訓練管線和代理型 AI 工具鏈

🔗 **了解更多：** [opswat.com](https://www.opswat.com)
