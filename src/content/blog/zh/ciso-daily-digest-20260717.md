---
title: "CISO 每日摘要：Moonshot Kimi K3 開源 2.8 兆參數模型挑戰 AI 霸主地位 (20260717)"
description: "中國 Moonshot AI 發布 Kimi K3（2.8 兆參數）開源模型，效能直逼 GPT-5.6 與 Claude Fable 5。本週活躍威脅：Daxin/Stupig 後門鎖定臺灣製造業、CISA 將 SharePoint 零時差漏洞（CVE-2026-58644）列入 KEV、Fortinet 沙箱漏洞遭積極利用、Sophos 報告指出 79% 勒索軟體攻擊源自遭竊身分。"
pubDate: 2026-07-17
tags: [CISO, 每日摘要, 資安, Kimi K3, Moonshot AI, AI治理, 供應鏈攻擊, SharePoint, 勒索軟體, Fortinet, Daxin]
author: "Security Solutions Team"
featured: true
---

## Moonshot Kimi K3 以 2.8 兆參數開源模型挑戰 AI 領先者

中國 AI 新創 Moonshot AI 正式發布 **Kimi K3**，一款擁有 **2.8 兆參數的開源模型**，號稱效能可與 OpenAI 的 GPT-5.6 及 Anthropic 的 Claude Fable 5 匹敵。該模型以開放權重形式釋出，是目前最大規模的公開開源 AI 模型，具備 **280 萬 token 的上下文視窗**。此舉標誌著 AI 軍備競賽的重大升級 — 儘管面臨先進半導體出口管制，中國仍展現出開發前沿級 AI 能力的事實。

關鍵細節：Kimi K3 據報訓練成本超過 **5 億美元**，早期基準測試顯示其在推理任務上可與 GPT-5.6 競爭，編碼基準則與 Fable 5 相當。該模型的發布伴隨著 **Moonshot 以 120 億美元估值完成 20 億美元融資**，顯示投資者對中國 AI 生態系統的信心。與此同時，德國推出了 **Soofi S** 開源主權 AI 模型，強調高效率與長文本推理，凸顯各國建立獨立 AI 能力的趨勢正在加速。

🔗 **參考資料：** 綜合報導（[PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/chinas-moonshot-challenges-anthropic-with-a-bigger-cheaper-model/)、[iThome](https://www.ithome.com.tw/news/177376)、[iThome — Soofi S](https://www.ithome.com.tw/news/177378)）

### 這對 AI 治理的深遠影響

Kimi K3 的發布跨越了一個關鍵門檻：來自非美國競爭對手的開放權重模型已能與西方前沿模型匹敵。這從根本上挑戰了目前以美國主導出口管制與自願性安全承諾為基礎的 AI 治理框架。企業 CISO 現在面臨來自開放權重模型的供應鏈風險 — 這些模型可能被微調用於惡意目的、嵌入商業產品或用於繞過 AI 安全護欄。德國 Soofi S 模型的推出顯示 AI 主權化的趨勢正在加速，每個受監管產業最終都需評估其軟體供應鏈中嵌入的 AI 模型的來源與安全性。七大工業國（G7）同步推動 **金融業於 2035 年前完成後量子密碼（PQC）轉型**，更添一層合規複雜性。

🔗 **參考資料：** 綜合報導（[iThome — G7 PQC](https://www.ithome.com.tw/news/177380)、[iThome — AI 資安調查](https://www.ithome.com.tw/news/177383)）

---

## 本週活躍威脅

📌 **Daxin、Stupig 高階後門鎖定臺灣製造業**
針對 **臺灣製造業公司** 的攻擊行動中發現了 **Daxin 與 Stupig 後門**程式。該進階持續性威脅（APT）組織部署了能夠進行資料外洩與持續存取的隱蔽後門。臺灣製造業組織應進行全面的網路鑑識，並檢視 OT/IT 網路隔離策略。攻擊者展現出對工業控制環境的深入了解，顯示其進行了長期的偵察活動後才發動攻擊。
🔗 **參考資料：** [iThome — Daxin/Stupig](https://www.ithome.com.tw/news/177390) | [iThome — 資安日報](https://www.ithome.com.tw/news/177397)

📌 **CISA 將遭到積極利用的 SharePoint RCE 零時差漏洞列入 KEV**
CISA 已將 **CVE-2026-58644**（Microsoft SharePoint 的**遠端程式碼執行零時差漏洞**）新增至已知遭利用漏洞（KEV）目錄，證實攻擊者正在野外積極利用該漏洞。微軟已在 2026 年 7 月 Patch Tuesday 更新中修補此漏洞，該月總共修補了破紀錄的 **622 個 CVE**。考量 SharePoint 在企業環境中的廣泛部署，組織應優先進行修補，尤其是暴露於網路的實例。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/cisa-adds-exploited-sharepoint-rce-zero.html) | [iThome](https://www.ithome.com.tw/news/177382)

📌 **CISA 警告 Fortinet 沙箱重大漏洞遭積極利用**
CISA 針對 **Fortinet FortiSandbox 平台的多項重大漏洞**發出警報，這些漏洞正在被積極利用。這些弱點可能讓攻擊者繞過沙箱分析並取得未經授權的網路存取權限。Fortinet 已發布修補程式，使用 FortiSandbox 的組織應立即更新。
🔗 **參考資料：** [iThome — CISA Fortinet 警告](https://www.ithome.com.tw/news/177387) | [iThome — Fortinet 修補](https://www.ithome.com.tw/news/177340)

📌 **CISA 要求聯邦機構緊急修補 Oracle EBS 重大漏洞**
CISA 已要求美國聯邦機構緊急修補 **Oracle E-Business Suite（EBS）的重大漏洞**。Oracle 2026 年 7 月關鍵修補更新（CPU）解決了多個嚴重弱點，包括 CVSS 評分超過 9.0 的遠端程式碼執行漏洞。雖然此指令針對聯邦機構，但執行 Oracle EBS 的私營組織也應將其視為優先事項。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177379)

📌 **Sophos 報告：79% 勒索軟體攻擊源自遭竊身分**
Sophos 最新《2026 年勒索軟體現況》報告顯示，**79% 的勒索軟體攻擊始於遭入侵的身分**，而非傳統的漏洞利用。報告指出，攻擊者已將其初始入侵策略轉向憑證竊取、MFA 繞過和身分聯合濫用。這代表了勒索軟體威脅格局的根本轉變，要求組織將防禦重點重新平衡至身分安全領域，包括採用抗釣魚 MFA 和持續認證監控。
🔗 **參考資料：** [Infosecurity Magazine](https://www.infosecurity-magazine.com/news/compromised-logins-ransomware-entry/) | [iThome](https://www.ithome.com.tw/news/177383)

📌 **Google Chrome 150 修補 3 個重大漏洞**
Google 發布了 **Chrome 150**，修補了瀏覽器中的**三個重大等級漏洞**。使用者和企業 IT 團隊應優先更新至最新版本。與此同時，Google 還在 **ChromeOS 中修補了超過 300 個第三方元件與瀏覽器漏洞**，其中 21 個被列為重大等級。
🔗 **參考資料：** [iThome — Chrome 150](https://www.ithome.com.tw/news/177374) | [iThome — ChromeOS](https://www.ithome.com.tw/news/177377)

📌 **Claude for Chrome 擴充套件弱點讓惡意擴充功能觸發 AI 動作**
一名安全研究人員揭露了 **Claude for Chrome 擴充套件**中的一個弱點，允許其他惡意 Chrome 擴充功能在**未經使用者同意的情況下靜默觸發 Claude AI 動作**。此漏洞可能透過鏈結擴充功能權限實現資料外洩 — 具有基本權限的惡意擴充功能可調用 Claude 來摘要、轉錄或處理使用者的 Gmail、文件或其他敏感內容。
🔗 **參考資料：** [BleepingComputer](https://www.bleepingcomputer.com/news/security/claude-chrome-extension-flaw-lets-malicious-extensions-trigger-ai-actions/)

📌 **NPM 套件 Jscrambler 遭入侵，用於散布 Rust 竊資軟體**
攻擊者入侵了 **Jscrambler NPM 套件**，用於散布**基於 Rust 的資訊竊取程式**，鎖定開發環境。此供應鏈攻擊遵循了惡意行為者針對 JavaScript 套件生態系統的增長趨勢。使用 Jscrambler 的組織應稽核其相依性樹，並輪換可能在構建管道中暴露的任何憑證。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177419) | [iThome — 資安週報](https://www.ithome.com.tw/news/177408)

---

## OPSWAT 可以怎麼幫上忙

本週多個活躍威脅涉及基於檔案的攻擊向量，OPSWAT MetaDefender 平台可提供關鍵防禦。**Jscrambler NPM 遭入侵**是一起供應鏈攻擊，可透過對下載套件進行深度內容拆解與重構（CDR）來緩解。針對臺灣製造業的 **Daxin/Stupig 後門**利用惡意二進位檔，MetaDefender 的多引擎掃描可在執行前偵測這些檔案。**Sophos 勒索軟體報告**凸顯了遭竊身分與勒索軟體部署之間的關聯 — MetaDefender 的檔案上傳安全與 CDR 功能即使在憑證遭入侵的情況下也能阻止惡意檔案到達端點。對於正在評估 **Kimi K3 等開放權重 AI 模型的組織**，MetaDefender 可在模型部署到企業環境之前掃描模型權重與訓練資料中是否嵌入惡意軟體。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
