---
title: "CISO 每日摘要：CISA 警示 4 項漏洞遭積極利用，Citrix NetScaler CVE-2026-8452 已遭攻擊 (20260819)"
description: "CISA 警告 Windows、macOS、Microsoft SharePoint、VMware vCenter 與 Microsoft IKE 等多項漏洞已遭積極利用；英國 NCSC 與研究人員證實 Citrix NetScaler 的 CVE-2026-8452 已遭實際攻擊，6 月修補的阻斷服務漏洞現可達成遠端程式碼執行。Oracle 2026 年 8 月關鍵安全修補更新（CPU）共修補 925 個漏洞，逾 100 個達 CVSS 9.0–10.0 滿分等級；MLflow 的 CVE-2026-64849（SSRF）與 FUXA 的 CVE-2026-25895（RCE）在 CVE 指配後數小時內即出現惡意掃描。法國稅務機關 DGFiP 證實 200 萬筆納稅人資料外洩、德國商商銀行 Commerzbank 因漏洞遭竊逾 3,000 萬歐元、物流業者 CEVA 被駭波及英國與德國 Pokémon Center；CoSnitch（CVE-2026-24301）一條連結即可外洩所有連動的 Copilot 應用，SilkParasite 與 StopAndProtect 攻擊活動正在進行。"
pubDate: "2026-08-19"
tags: ["ciso", "每日摘要", "cisa", "citrix", "netscaler", "oracle", "mlflow", "cve", "資料外洩", "copilot", "勒索軟體"]
author: "Andy Shih"
featured: true
---

## CISA 警示多項漏洞遭積極利用，Citrix NetScaler CVE-2026-8452 已遭攻擊

今日威脅態勢的主軸是 **已知漏洞大規模轉入實際利用**。CISA 最新的警示點名 4 項已遭濫用的漏洞：Microsoft Windows、Apple **macOS**、Microsoft **SharePoint**、VMware **vCenter**，以及 Microsoft **IKE** 漏洞。此外，英國 NCSC 與獨立研究人員證實 **Citrix NetScaler 的 CVE-2026-8452** 已遭實際攻擊，英國政府呼籲企業盡速修補；而一項 **6 月修補的 NetScaler 阻斷服務（DoS）漏洞** 現已出現可達成 **遠端程式碼執行（RCE）** 的攻擊路徑。

修補方面，**Oracle 2026 年 8 月關鍵安全修補更新（CPU）** 規模異常龐大：共修補 **925 個漏洞**，其中逾 100 個達 **CVSS 9.0–10.0** 滿分等級。兩個新揭露的 AI / OT 漏洞——**MLflow 的 CVE-2026-64849（SSRF，CVSS 9.3）** 與 **FUXA 的 CVE-2026-25895（RCE，CVSS 9.5）**——在 CVE 指配後 **數小時內** 即遭惡意掃描，再次凸顯「修補到被利用」的時間窗已壓縮至不到一天。

### 這對漏洞治理的深遠影響

今日各項事件反覆驗證同一個趨勢：**修補時間窗正在崩塌**。當 MLflow 與 FUXA 在公開當天就被攻擊者掃描，當 6 月修補的 NetScaler DoS 漏洞在 8 月演變成 RCE，所謂「下個維護視窗再修」的模式已經過時。CISO 應將 **CISA 點名的已利用漏洞**，以及 **對外暴露的 NetScaler / SharePoint / vCenter** 視為緊急變更對象，並優先處理 Oracle 那 **100 多個 CVSS 滿分漏洞**（適用於任何運行 Oracle E-Business Suite、PeopleSoft 或 Database 的環境）。DGFiP、Commerzbank 與 CEVA 事件也顯示，**供應鏈與第三方資料外洩**（物流夥伴遭駭，進而導致 Pokémon Center 取消訂單）已成為首要實質風險類別，而非邊緣案例。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/critical-macos-sharepoint-vcenter-and.html)、[iThome — CISA 4 項漏洞警示](https://www.ithome.com.tw/news/178276)、[iThome — Citrix NetScaler 遭利用](https://www.ithome.com.tw/news/178253)、[iThome — Oracle 8 月 CPU](https://www.ithome.com.tw/news/178129)、[iThome — MLflow 遭利用](https://www.ithome.com.tw/news/178259)）

---

## 本週活躍威脅

📌 **CISA：5 項已遭利用漏洞（Windows、macOS、SharePoint、vCenter、Microsoft IKE）** — 聯邦與企業防禦方被要求立即修補；SharePoint 與 vCenter 為歷次 KEV 週期的常客。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/critical-macos-sharepoint-vcenter-and.html) | [iThome](https://www.ithome.com.tw/news/178276)

📌 **Citrix NetScaler CVE-2026-8452 已遭實際攻擊** — 英國 NCSC 呼籲緊急處置；一項 **6 月修補的 NetScaler DoS 漏洞（對應 178251 警示）** 現已被證實可達成 **遠端程式碼執行**。
🔗 **參考資料：** [iThome — 英國警示](https://www.ithome.com.tw/news/178253) | [iThome — DoS 變 RCE](https://www.ithome.com.tw/news/178251)

📌 **Oracle 8 月 CPU：925 個 CVE，逾 100 個達 CVSS 10.0** — 涵蓋 E-Business Suite、PeopleSoft、Database 與 Fusion Middleware；多個 **滿分漏洞** 需同週修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178129)

📌 **MLflow CVE-2026-64849（SSRF，CVSS 9.3）遭積極利用** — 攻擊者利用伺服器請求偽造，從 AI 工程平臺竊取 **雲端憑證與機密資料**，揭露後數小時內即出現掃描。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/attackers-exploit-mlflow-ssrf-flaw-to.html) | [iThome](https://www.ithome.com.tw/news/178259)

📌 **FUXA CVE-2026-25895（RCE，CVSS 9.5）在 CVE 指配後數小時內遭掃描** — 暴露於網際網路的 OT / SCADA 視覺化工具，利用後可在工業主機上執行任意程式碼。

📌 **法國稅務機關 DGFiP：200 萬筆納稅人資料外洩** — 威脅者 **ZeroBytes** 宣稱竊取資料；先前 iThome 報導為 67.8 萬筆，該攻擊者現改稱 **200 萬筆**（2026 年 6 月事件）。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/18/dgfip-leak/)

📌 **德國商銀 Commerzbank：因漏洞遭竊逾 3,000 萬歐元** — 該行證實攻擊者利用軟體漏洞轉出 **超過 3,000 萬歐元**，為今年規模最大的漏洞驅動金融竊案之一。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/19/commerzbank-hack/)

📌 **物流業者 CEVA 遭駭波及英國與德國 Pokémon Center** — 全球物流供應商 **CEVA** 被駭，導致英國與德國 Pokémon Center **訂單取消與資料外洩**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178260)

📌 **Microsoft Copilot Personal 的 CoSnitch CVE-2026-24301** — 一條特製連結即可靜默外洩 Gmail、Calendar、Drive 與 Copilot 記憶；記憶汙染途徑可存活於改密碼與重新註冊之後。已於 8 月 18 日修補，使用者須手動清除被注入的指令。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/microsoft-copilot-personal-flaws-could.html) | [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/cosnitch-attack-copilot-mapping-out-architecture)

📌 **SilkParasite 間諜攻擊活動** — 鎖定中亞各國政府，使用 **5 個全新 RAT（遠端存取木馬）**，為典型國家級駭客手法。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/silkparasite-espionage-campaign-targets.html)

📌 **StopAndProtect 惡意程式網路** — 濫用近 **2,000 個遭駭 WordPress 網站** 散布惡意程式並竊取資料。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/stopandprotect-uses-nearly-2000-hacked.html)

📌 **新型 Python 惡意程式濫用 SharePoint 與 Teams** — 將命令控制（C2）藏匿於 Microsoft 365 協作工具中，可竊取憑證並横向移動。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178278)

📌 **GitLab CVE-2026-19478 緊急修補** — 重大等級 GraphQL 漏洞可刪除公開專案；零點擊緩解面臨挑戰。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178254) | [Dark Reading](https://www.darkreading.com/application-security/critical-gitlab-zero-click-flaw-mitigation-challenges)

📌 **WordPress 外掛 Forminator 任意檔案上傳漏洞** — 逾 **60 萬個網站** 受影響；未經身分驗證的上傳可導致網站遭接管。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178275)

📌 **加密通訊軟體 Threema 遭大規模 DDoS 攻擊中斷服務** — 瑞士加密通訊應用因大規模 DDoS 攻擊而服務異常。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/18/threema-ddos/)

📌 **AMD Vitis 高風險漏洞（私鑰曝光 + 任意程式碼執行）** — 2026 年 8 月 AMD 安全公告；影響 FPGA 工具鏈。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178252)

📌 **Intel 8 月安全更新** — Xeon 與 TDX 等多項產品出現高風險漏洞。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178250)

📌 **Firefox 154 修補 58 個資安漏洞；Chrome 151 修補 15 個** — 常規瀏覽器更新，依標準節奏部署。
🔗 **參考資料：** [iThome — Firefox 154](https://www.ithome.com.tw/news/178261) | [iThome — Chrome 151](https://www.ithome.com.tw/news/178255)

---

## OPSWAT 可以怎麼幫上忙

**供應商風險一覽**

| 供應商 / 產品 | 問題 | 嚴重性 | 暴露面 | 行動 |
|---|---|---|---|---|
| Citrix NetScaler | CVE-2026-8452 + 6 月 DoS 變 RCE | 高 / 嚴重 | 對外 ADC | 緊急修補 + 獵殺 RCE |
| Oracle（EBS / PeopleSoft / DB） | 925 個 CVE，逾 100 個 CVSS 10.0 | 嚴重 | 企業核心應用 | 同週導入 CPU |
| Microsoft（Copilot / SharePoint / Windows / IKE） | CoSnitch、KEV 漏洞 | 高 | 雲端 + 端點 | 修補 + 清除 Copilot 記憶 |
| MLflow / FUXA | CVE-2026-64849 / CVE-2026-25895 | 9.3 / 9.5 | AI + OT 環境 | 隔離，立即修補 |
| GitLab | CVE-2026-19478 | 嚴重 | 開發平臺 | 升級至修補版本 |
| DGFiP / Commerzbank / CEVA | 外洩 / 竊款 / 第三方 | 嚴重 | 供應鏈 | 監控，控制連鎖影響 |

今日多數頭條風險都屬於 **檔案與供應鏈傳遞型**：MLflow / FUXA 的載荷、StopAndProtect 注入 WordPress 的惡意程式、濫用 SharePoint / Teams 的 Python 投遞器，以及 CoSnitch 的記憶體注入，全都經由不受信任的內容或第三方程式碼落地。**OPSWAT MetaDefender** 多引擎掃描搭配 **Content Disarm & Reconstruction（CDR，內容解除與重建）** 可在檔案層級阻擋這些威脅——在惡意文件、二進位檔與網頁內容抵達端點或 CI / CD 管線前就將其解毒；**Deep CDR** 流程更能清理來自遭駭夥伴（如物流業者）的檔案。對 AI / ML 平臺而言，清理模型物件與 notebook 相依套件可縮小 SSRF 或 RCE 立足點的爆炸半徑。
