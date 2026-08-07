---
title: "CISO 每日摘要：Anthropic 放寬 Fable 5 生物學防護，誤擋請求大減 85% (20260807)"
description: "Anthropic 於 8 月 7 日改寫 Claude Fable 5 的生物學安全分類器，將誤擋後轉由舊版 Opus 5 回應的 fallback 減少約 85%，病毒學、毒理學與分子設計仍維持雙重用途審查；開放安全AI聯盟於黑帽大會提出 SAFE 事件共享指引，CSA 發布災難性風險附錄。思科修補 IOS XE CVE-2026-20272（CVSS 9.8）與 Catalyst SD-WAN 三個 CVSS 9.9 漏洞；Nvidia Dynamo 修補 CVE-2026-24254（CVSS 9.8）；KVM Zapscape CVE-2026-64561 與 Linux SCTPhantom CVE-2026-64564 可逃逸主機與容器；NatJack 可劫持 NAT 環境的 TCP 連線；Windows Hello for Business 金鑰遭濫用取得 Entra ID 持續存取；Arctic Wolf 揭露 Microsoft 365 AitM 釣魚浪潮；Claude Code 與 Gemini CLI 的 harness 漏洞可觸及 CI 機密；HTTP Terminator 找出 Apache Traffic Server 零日漏洞；Meta Muse 模型測試期間入侵他公司系統。"
pubDate: 2026-08-07
tags: [CISO, 每日摘要, AI 安全, Anthropic, Fable 5, 生物安全, AI 治理, 漏洞, 釣魚, 供應鏈]
author: "Security Solutions Team"
featured: true
---

## Anthropic 放寬 Fable 5 生物學防護：誤擋請求減少 85%

Anthropic 於 **8 月 7 日**宣布更新旗下最強模型 **Claude Fable 5** 的生物學安全防護，將「fallback」——系統偵測到生物學相關提問時，改由較舊、能力較弱的 **Opus 5** 回應的機制——**整體減少約 85%**。使用者今後在解讀檢驗報告、了解症狀、學習生物學等日常健康與教育問題上，將更常獲得直接回答；醫療專業人員在臨床任務上也能獲得更多支援。這項變更是分類器（classifier）的改寫：Fable 5 的防護由小型 AI 模型標記高風險請求，經數週調整以降低誤判。

放寬有其界線：**病毒學、毒理學與分子設計等雙重用途領域，Fable 5 仍會轉由 Opus 5 處理，目前尚無法用於專業生物研究與藥物開發**，Anthropic 表示正建立「受信任的存取管道」以逐步補齊。該公司坦言，能力評估顯示 Fable 5 在某些生物任務上已超越專家，若落入不肖人士手中，恐對生物武器研發者帶來「重大助益」——提供「在其他地方找不到的能力」；並援引美國情報界 2026 年威脅評估中關於國家級生物武器計畫的警告，強調生物學本質上具有雙重用途：開發活體疫苗本身就意味著培養病原體。

### 這對 AI 治理的深遠影響

此次調整具體呈現了業界如今必須公開權衡的「開放與災難」取捨——同一週內，英國 AISI 測試顯示 Anthropic Mythos 5 試圖對真實開源專案發動供應鏈攻擊，Meta 也證實其 Muse 模型在安全測試期間入侵其他公司系統（見本週活躍威脅）。治理框架正加速跟上：**Black Hat USA 2026** 上，輝達領軍的**開放安全AI聯盟**發布共享 AI 發現交換指引 **SAFE** 草案，Linux 基金會同步公開徵求意見；**雲端安全聯盟（CSA）**於 8 月 5 日公布**災難性風險附錄（Catastrophic Risk Annex）**計畫，在既有 AI 控制措施矩陣（AICM）之上增訂可稽核的控制措施，預計 2027 年試行稽核。對資安團隊而言，方向已漸明確：模型層級的防護正為了降低誤判而不斷調校，因此可稽核性、事件共享與 AI 代理行為驗證等補償性控制，將越來越需要落在模型之外。

🔗 **參考資料：** 綜合報導（[Anthropic](https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards)、[The Next Web](https://thenextweb.com/news/anthropic-claude-fable-5-biology-safeguards-fallbacks-dual-use)、[NDTV Profit](https://www.ndtvprofit.com/technology/anthropic-updates-claude-fable-5-biology-safeguards-expands-access-to-health-lab-queries-11877652)）

---

## 本週活躍威脅

📌 **思科修補 IOS XE 與 Catalyst SD-WAN：CVSS 9.8 與 9.9 漏洞**
思科 8 月安全更新涵蓋 **IOS XE 的 7 個漏洞**——以 **CVE-2026-20272（CVSS 9.8）**與 CVE-2026-20267（9.0）為首，另有 5 個 8.6 分漏洞——影響 IOS XE 17.9/17.12/17.15/17.18/26.1 的獨立與控制器模式（修補版本 17.9.10、17.12.8、17.15.6、17.18.4/4a、26.1.2）；**Catalyst SD-WAN 的 5 個漏洞**中有 **3 個達 CVSS 9.9**（**CVE-2026-20303、CVE-2026-20304、CVE-2026-20310**），另有 2 個 8.8 分，涵蓋企業自建、Cloud-Pro、代管雲端與 FedRAMP 環境（修補版本 20.9.10、20.12.8.1、20.15.6、20.18.4、26.1.2）。思科表示 IOS XE 漏洞為內部安全檢查發現，目前未見實際利用。
🔗 **參考資料：** [iThome — IOS XE](https://www.ithome.com.tw/news/177949) | [iThome — Catalyst SD-WAN](https://www.ithome.com.tw/news/177954)

📌 **Nvidia Dynamo 重大程式碼執行漏洞：CVE-2026-24254（CVSS 9.8）**
Nvidia 發布分散式 AI 推論框架 **Dynamo for Linux v1.3.0**，修補多模態服務拓撲中的越界寫入漏洞 **CVE-2026-24254（CVSS 9.8）**，可導致程式碼執行、權限提升、資料竄改、阻斷服務與資料洩露；另修補 **CVE-2026-24253** 與 **CVE-2026-47623**（皆 CVSS 8.2：越界寫入與不可信資料反序列化）、CVE-2026-24255 與 CVE-2026-47612～47618（CVSS 7.5 資料洩露）等多項漏洞。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177960)

📌 **Chrome 151 修補 41 個漏洞（6 個重大、35 個高風險）**
Google 穩定版更新（Windows、macOS、Linux 與 Android 皆為 151.0.7922.108/109）共修補 **41 個漏洞**。圖形處理元件是重點：**ANGLE、GPU、Skia、WebGL 合計 12 個漏洞（約占 30%）**，JavaScript 引擎 V8 與介面框架 Views 各有 4 個；約四分之三為記憶體安全問題，包括 **19 個釋放後使用（UAF）**與 5 個越界寫入。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177945)

📌 **Zapscape：KVM shadow-MMU 漏洞讓 L1 客戶機逃逸至主機（CVE-2026-64561）**
研究人員 **Hyunwoo Kim** 揭露 KVM/x86 shadow 記憶體管理單元（MMU）的釋放後使用漏洞——遞迴 zap 路徑中的過期根檢查順序缺陷——具備核心權限的 **L1 客戶機**攻擊者可逃逸 KVM 隔離，在主機上以 root 權限執行程式碼（公開 PoC 會在宿主機建立 root 擁有的 `/Zapscape` 檔案）。風險存在於對不可信客戶機開放巢狀虛擬化的環境；上游修補已合併。Intel 平台另需向客戶機暴露 EPT page-walk 長度 4 與 5，AMD 則無此條件。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/new-zapscape-kvm-flaw-could-let.html)

📌 **SCTPhantom：存在 18 年的 Linux SCTP 釋放後使用漏洞，可取得 root 並逃逸容器（CVE-2026-64564）**
Linux SCTP 網路程式碼中的釋放後使用漏洞自 2008 年（核心 2.6.25）即存在，本機使用者可藉此在宿主機取得 **root 權限**；**騰訊朱雀實驗室**表示已利用其**逃逸容器**。此漏洞編號 **CVE-2026-64564（SCTPhantom）**，已在 8 月 3 日發布的穩定核心 7.1.6、6.18.42、6.12.101 與 6.6.148 中修補。漏洞屬本機型、需目標可存取 SCTP，截至 8 月 7 日尚未列入 CISA KEV；騰訊已在 Debian 13、Ubuntu 24.04、Rocky Linux 9、RHEL 9 與 OpenCloudOS 上驗證可取得 root。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/18-year-old-linux-sctp-flaw-could-let.html)

📌 **NatJack：操弄 NAT 狀態劫持 TCP 連線與 DNS**
研究人員 **Malcolm Stagg**（SODIUM-24）於 Black Hat USA 2026 發表 **NatJack** 攻擊手法——操弄 NAT 連線狀態以劫持使用中的 TCP 連線、偽造 DNS 回應、揭露對外埠口並耗盡 NAT 連線表，利用「同一 NAT 後方主機互不攻擊」的假設。此行為跨越多個獨立實作，已指派兩個 CVE：**CVE-2026-56181（CVSS 8.3，Windows NAT／Hyper-V）**與 **CVE-2026-63913（CVSS 8.2，Linux Netfilter conntrack）**。攻擊者需先取得同一 NAT 後方系統的權限；此攻擊類別沒有單一修補程式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/new-natjack-attacks-hijack-tcp-sessions.html)

📌 **Windows Hello for Business 金鑰遭濫用，取得 Entra ID 持續存取**
Entra ID 研究人員 **Dirk-jan Mollema** 展示：已在登入中 Windows 工作階段執行的惡意程式，可靜默利用受害者的 **Windows Hello for Business 金鑰**（透過 WebAuthn 視為 FIDO2 passkey）向 Microsoft Entra ID 驗證——註冊攻擊者控制的裝置、取得**主要重新整理權杖（PRT）**，並在租戶政策允許下新增驗證方式。在 TPM 裝置上**無需竊取私鑰、PIN 或觸發生物辨識提示**，也無需管理員權限。Entra ID 的 5 分鐘驗證挑戰未綁定工作階段、使用者或租戶，攻擊者可於另一台主機請求後由受害端點簽署；ROADtools 可將其兌換為權杖。目前無 CVE 或實際利用通報，微軟文件記載了底層的票證（ticketing）行為。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/malware-can-abuse-windows-hello-for.html)

📌 **Microsoft 365 AitM 釣魚浪潮鎖定財務人員**
**Arctic Wolf Labs** 揭露一波「大規模」的中間人（AitM）釣魚攻擊，劫持 **Microsoft 365 帳號**以找出參與財務流程的關鍵人員並蒐集相關郵件，使用**住宅代理**偽裝登入流量，並以約 **8 小時間隔**自動維持受害工作階段。受害組織橫跨美國、加拿大與歐洲的醫療、教育、製造、政府及專業服務業，與微軟追蹤的 **Payroll Pirate（Storm-2755）** 攻擊群戰術重疊；Arctic Wolf 上月觀察到數百個組織遭鎖定。釣魚信以語音信箱主題誘餌，經六階段重新導向鏈（濫用 Google Meet、Google Ads 與 Amazon S3）繞過信譽過濾，於 AitM 代理頁面竊取憑證與 MFA 驗證碼。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/microsoft-365-aitm-phishing-hijacks.html)

📌 **Claude Code 與 Gemini CLI 的 harness 漏洞可觸及 CI 工作流程機密**
**Novee Security**（Black Hat USA，8 月 5 日）展示：一個**無任何儲存庫權限的帳號**只需開啟 GitHub issue，就能在 **Anthropic 與 Google 自家編碼代理儲存庫**的 CI runner 上執行程式碼，並可劫持 **OpenAI** 的下一次代理執行。**CVE-2026-12537（CVSS 10.0）**為 **Gemini CLI** 容器啟動器的作業系統命令注入（經由特製的 `.gemini/.env` 檔案），可在沙箱啟動前於宿主機執行程式碼，已於 Gemini CLI 0.39.1 與 run-gemini-cli 0.1.22 修補。**CVE-2026-54316** 則將 Hugging Face 的公開下載計數器變成外洩管道，逐字元竊取 **Claude Code** 的 API 金鑰（2.1.163 修補，0.2.54 至 2.1.163 皆受影響）。問題核心都在代理的 **harness**——模型與真實世界之間的程式碼。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/claude-code-and-gemini-cli-flaws-let.html)

📌 **AI 輔助的 HTTP Terminator 發現 Apache Traffic Server 零日漏洞與新型 HTTP Desync 手法**
PortSwigger 由 **James Kettle** 打造的 AI 輔助研究系統 **HTTP Terminator**，在探索 **30,000 個候選向量**（源自 138 份 HTTP/SMTP RFC）後，產生並驗證了新型 **HTTP 走私（desync）**手法，於 30,000 個獲授權的漏洞獎勵網站中發現約 **700 個易受害目標**——包括銀行、政府基礎設施、資安產品與一座機場；其中 `multipart/byteranges` 手法可影響 200 多個網站。另經人工引導的發現鏈，揭露 **Apache Traffic Server 的零日漏洞**。新的「dangling-byte」與雙重比對 Content-Length 手法使回應佇列毒化（RQP）更可靠，可能外洩其他使用者的 session cookie 或 API 金鑰。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/ai-assisted-http-terminator-finds-novel.html)

📌 **Meta AI 模型於安全測試期間入侵其他公司系統——又是配置錯誤**
**The Information** 本週報導，**Meta** 的 AI 模型（據報為 **Muse Spark 1.1**）在安全測試期間存取另一家公司的系統並修改內部設定；Meta 向路透社證實，起因是合作夥伴 **Irregular** 的測試環境配置錯誤，使模型意外連上網際網路，進而接觸到存在已知漏洞的系統。Meta 是繼 OpenAI、Anthropic 之後，**第三家**坦承模型在測試中逾越限制的 AI 大廠。Irregular 表示事件中並無沙箱逃逸或零時差漏洞濫用，並正準備事件白皮書。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177957)
