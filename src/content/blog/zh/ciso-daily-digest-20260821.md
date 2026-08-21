---
title: "CISO 每日摘要：Rust 供應鏈攻擊在 2.45 億次下載的 crate 植入建置期惡意程式 (20260821)"
description: "Rust 專案在 2026 年 8 月 20 日移除三個遭汙染的 crate 版本（arrayref 0.3.10、internment 0.8.7、append-only-vec 0.1.9），原因是有維護者帳號遭入侵後，注入一個名稱近似的依賴套件，其建置腳本會在編譯過程下載並執行遠端惡意程式；同時 GitLab CVE-2026-19478 與 Zimbra CVE-2026-73570 已遭實際利用，Citrix NetScaler CVE-2026-19490（CVSS 9.3）為身分驗證繞過漏洞，Clop 聲稱竊取殼牌（Shell）89 GB 資料。"
pubDate: 2026-08-21
tags: [供應鏈, Rust, crate, CVE-2026-19478, CVE-2026-73570, CVE-2026-19490, Clop, Shell, Siemens, PLC, AI 資安]
author: "Security Solutions Team"
featured: true
---

## Rust crate 遭植入建置期惡意程式，波及 2.45 億次下載

**2026 年 8 月 20 日**，Rust 專案從 crates.io 移除三個廣泛使用的 crate 惡意版本——原因是有**維護者帳號遭入侵**，發布的版本拉入一個名稱近似的依賴套件，其建置腳本會在編譯過程下載並執行遠端惡意程式。受影響的版本為**arrayref 0.3.10**、**internment 0.8.7**與**append-only-vec 0.1.9**，皆由同一個擁有者帳號發布，並在釋出後**86 至 107 分鐘內**被移除。由於惡意程式碼位於注入依賴的建置腳本中，只要**編譯（cargo build）**解析到該版本就足以觸發惡意程式，無須呼叫 crate 本身的任何函式。三個 crate 合計約有**2.45 億次下載**，惡意版本的波及範圍極廣。

Rust 安全回應團隊建議開發人員搜尋 `~/.cargo/registry/cache` 中的已刪除 crate 檔案，並將**arrayref 鎖定在 0.3.9 或更早版本**。此事件的特殊之處在於不需要任何執行路徑進入 crate 自身的 API——惡意程式在**建置階段**即觸發，命中下游 CI 管線、開發者工作站，以及任何遞移解析到汙染版本的建置。

### 這對供應鏈風險防禦的深遠影響

這次攻擊沿用「維護者帳號遭入侵 + 名稱近似註冊」的已知手法，但把惡意程式碼落在**建置步驟而非執行期**，因此能避開只檢查交付成品的掃描器。結合本週其他供應鏈訊號——GitLab CVE-2026-19478 被 Mondoo 指出可用來偽造合併記錄、繞過程式碼審查（資安公司 Mondoo 示警），以及惡意 npm / VS Code 套件持續湧現——信任邊界已從「這個依賴套件執行起來是否安全？」移動到「**編譯它是否安全？**」。對 CISO 而言，這代表建置環境隔離、簽署來源證明（SLSA），以及 cargo registry 鎖定與稽核，必須成為一線控制措施，而不只是開發團隊的衛生習慣。

🔗**參考資料：**綜合報導（[The Hacker News](https://thehackernews.com/2026/08/rust-supply-chain-attack-puts-build.html)）

---

## 本週活躍威脅

📌**Microsoft Entra ID CVE-2026-69836（CVSS 10.0）RCE 已遭實際利用**— Microsoft 警告**Entra ID**（前身為 Azure AD）存在一個最高嚴重性的**反序列化不受信任資料（deserialization of untrusted data）**漏洞，並確認已**遭實際利用**，攻擊者無須身分驗證即可**透過網路執行程式碼**。Microsoft 表示使用者無須採取行動，但雲端身分識別平面是大多數企業最核心的驗證路徑，CISO 仍應確認租用戶狀態並監控異常的 Entra 登入或權杖活動。

🔗**參考資料：**（[The Hacker News](https://thehackernews.com/2026/08/microsoft-entra-id-flaw-cvss-100.html)）

📌**GitLab CVE-2026-19478 / CVE-2026-19650 已遭實際利用**— 重大等級 GraphQL 漏洞 CVE-2026-19478 現身實際利用；資安公司 watchTowr 於**8 月 19 日**在蜜罐環境偵測到利用嘗試，建議防禦者在事件記錄中搜尋含有 `@gl_introduced` 字串的請求。Mondoo 警告該漏洞可偽造合併記錄，讓攻擊者無須入侵維護者帳號即可繞過程式碼審查關卡，埋下**軟體供應鏈**攻擊的種子。

🔗**參考資料：**（[iThome — 已遭利用](https://www.ithome.com.tw/news/178319) | [iThome — 供應鏈風險](https://www.ithome.com.tw/news/178324)）

📌**Zimbra CVE-2026-73570（RCE，CVSS 8.9）已遭積極利用**— 波蘭電腦緊急應變團隊 CERT Polska 警告，選用**zimbra-snmp**並啟用 SNMP 通知路徑中的未經身分驗證 RCE 漏洞已遭攻擊；特製 SMTP 請求即可以 Zimbra 使用者權限執行作業系統命令。**10.1.20 版**（7 月）已修補，應檢查過去一個月使用者資料夾中的新增檔案。

🔗**參考資料：**（[iThome](https://www.ithome.com.tw/news/178329) | [The Hacker News](https://thehackernews.com/2026/08/attackers-exploit-zimbra-snmp-flaw-for.html)）

📌**Citrix NetScaler CVE-2026-19489 / CVE-2026-19490（CVSS 9.3）身分驗證繞過**— CVE-2026-19490 是透過替代路徑繞過身分驗證的漏洞，影響特定設定的 NetScaler Gateway 與 AAA-TM 虛擬伺服器；資安公司 Rapid7 指出可由**未經身分驗證**的遠端攻擊者利用，無須使用者互動或權限提升。Citrix 未提供緩解措施，必須修補。

🔗**參考資料：**（[iThome](https://www.ithome.com.tw/news/178328) | [The Hacker News](https://thehackernews.com/2026/08/critical-netscaler-flaw-can-bypass.html)）

📌**Apache HttpComponents Client CVE-2026-71290（CVSS 9.1）TLS 主機名稱驗證失效**— 非同步 HttpClient 的 `HostnameVerificationPolicy#BUILTIN` 設定被忽略，使中間人攻擊者可出示其他網域的有效憑證並偽造伺服器回應（例如假冒金流平臺確認）。**5.6.4 版**（8 月 10 日）已修復；經典版 HttpClient 不受影響。

🔗**參考資料：**（[iThome](https://www.ithome.com.tw/news/178330)）

📌**Clop 聲稱竊取殼牌（Shell）89 GB 資料**— 勒索集團 Clop 聲稱從能源巨頭**Shell**外洩**89 GB**資料，包含工程圖面、稽查報告、照片與專案文件；Shell 表示正在調查可能的資安事件。

🔗**參考資料：**（[Хакер / xakep.ru](https://xakep.ru/2026/08/20/shell-clop/)）

📌**AI 生成漏洞利用腳本鎖定美國關鍵基礎設施的 Siemens S7 PLC**— NSA、CISA、FBI 與能源部警告，有攻擊活動使用偽裝成監控工具的 AI 生成腳本，對**Siemens S7 系列 PLC**及其他暴露於網際網路的控制器進行偵察與能力開發，並透過 Censys / ZoomEye 尋找舊版或未妥善防護的設備。

🔗**參考資料：**（[The Hacker News](https://thehackernews.com/2026/08/ai-generated-exploit-scripts-target.html)）

📌**俄羅斯駭客集群濫用 Google OAuth 與 WhatsApp 連結劫持帳號**— 三個疑似俄羅斯情蒐集群（**UNC6293**、**UNC7005**、**UNC5976**；UNC6293 為 Ice Relic / APT29 / Cozy Bear 的子集群）針對學術界、航太國防、政府與智庫發動持久釣魚，濫用合法身分驗證流程與 WhatsApp 帳號連結接管個人帳號。

🔗**參考資料：**（[The Hacker News](https://thehackernews.com/2026/08/suspected-russian-hackers-abuse-google.html)）

📌**「密碼學情境注入（Cryptographic Context Injection）」竊取 Grok 對話資料**— Adversa AI 揭露一種手法，可使 xAI 的**Grok**（測試對象為 grok.com 上的 Grok 4.5 Fast）在使用者要求摘要網頁時，將使用者名稱、概略位置、訂閱層級與即時提示傳送至攻擊者伺服器——無修補、無 CVE、無使用者端警告。

🔗**參考資料：**（[The Hacker News](https://thehackernews.com/2026/08/new-cryptographic-context-injection.html)）

📌**Transparent Tribe 翻新工具組鎖定阿富汗網路攻擊**— 與巴基斯坦相關的 APT **Transparent Tribe**已更新其惡意程式與投遞方式，用於鎖定阿富汗目標的攻擊活動。

🔗**參考資料：**（[Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/pakistan-transparent-tribe-afghan-cyberattacks)）

📌**N-able 漏洞暴露密碼保險庫主金鑰**— N-able 軟體中一個漏洞可能暴露其密碼保險庫所保護憑證的**主金鑰（master key）**。

🔗**參考資料：**（[Dark Reading](https://www.darkreading.com/vulnerabilities-threats/n-able-bug-password-vault-master-keys)）

📌**新 CUSTODY 框架約束企業內部網路中的 AI 代理人**— 一項新提出的框架（CUSTODY）旨在將企業網路內運作的自主 AI 代理人加以沙箱化與約束。

🔗**參考資料：**（[Dark Reading](https://www.darkreading.com/perimeter/new-custody-framework-constrains-ai-agents)）

📌**ThreatsDay：Gogs 10.0 RCE、n8n Workflow-to-RCE、1,000 萬美元獎金、GLM-5.3 AI 利用**— 本週公報涵蓋 Gogs 10.0 RCE、n8n 工作流程轉 RCE 鏈、1,000 萬美元漏洞獎金，以及 AI 輔助的漏洞利用研究（GLM-5.3）。

🔗**參考資料：**（[The Hacker News](https://thehackernews.com/2026/08/threatsday-gogs-100-rce-n8n-workflow-to.html)）

---

## OPSWAT 可以怎麼幫上忙

本週的頭條與多項威脅皆屬**檔案與建置途徑型攻擊**：遭汙染的 Rust crate、名稱近似的依賴套件、AI 生成的漏洞利用腳本，以及本週被發現的 40 個假冒 Web3 的惡意 Firefox 擴充功能，全部以企業必須從不受信任來源接收的檔案或套件形式進入。OPSWAT **MetaDefender**多重掃描（30+ 引擎）與**Deep CDR（內容撤除與重建）**能在檔案與可安裝成品抵達開發者工作站、CI 管線與端點之前先行淨化與驗證，直接對應信任邊界已從「**執行期**」移動到「**編譯期**」的現實。
