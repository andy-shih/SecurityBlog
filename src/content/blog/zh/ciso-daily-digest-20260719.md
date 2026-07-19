---
title: "CISO 每日摘要：SonicWall SMA 零日漏洞（CVSS 10.0）揭露前已遭利用 (20260719)"
description: "SonicWall SMA 1000 系列 VPN 設備的兩個零日漏洞 CVE-2026-15409（CVSS 10.0）與 CVE-2026-15410 在修補程式發布前已遭 UTA0533 駭客組織利用。另有：UAC-0145 Sandworm 利用假 CAPTCHA 攻擊烏克蘭裝置、Claude for Chrome 漏洞（CVSS 9.6）允許第三方擴充功能讀取 Gmail、wp2shell WordPress 核心 RCE、以及 Microsoft 創紀錄修補 622 個漏洞。"
pubDate: 2026-07-19
tags: [CISO, 每日摘要, SonicWall, 零日漏洞, VPN, APT, AI 安全, WordPress, Microsoft 修補更新]
author: "Security Solutions Team"
featured: true
---

## SonicWall SMA 零日漏洞（CVSS 10.0）揭露前已遭利用

一個此前未被記錄的威脅組織 **UTA0533** 自 **2026 年 6 月 22 日**起，一直在利用 SonicWall Secure Mobile Access (SMA) **1000 系列 VPN 設備**的兩個重大零日漏洞進行攻擊——比 SonicWall 釋出修補程式早了數週。

這兩個漏洞本週被公開揭露：
- **CVE-2026-15409**（CVSS **10.0**）：一個無需身分驗證的 `/wsproxy` 繞過漏洞，允許未經認證的攻擊者建立 WebSocket 通道以存取設備上的 localhost 服務。攻擊需要特定的 `User-Agent` 標頭（`SMA Connect Agent`）和以 `-3389` 開頭的 `bmID` 值。
- **CVE-2026-15410**（CVSS **7.2**）：可透過 CVE-2026-15409 建立的通道利用的 SMA 控制服務命令注入與權限提升漏洞。

事件應變公司 **Volexity** 在受影響組織發現了兩台被入侵的 SMA VPN 設備。攻擊者部署了名為 **ORANGETAIL** 的客製化 Java 網頁後門——一個具備 Behinder/Suo5 能力的 `setuid` 後門程式，可透過 `/workplace/error.jsp` 和 `/workplace/dialogs/errorDialog.jsp` 存取。其他發現的檔案包括 CVE-2026-15410 的漏洞利用程式（`/tmp/hypdate.b64`）和透過設備內部資料庫服務寫入檔案的證據。

另一個身分驗證繞過漏洞也被發現：SMA 控制服務密碼源自設備硬體 UUID（`/sys/class/dmi/id/product_uuid`），此檔案在實體設備上為世界可讀。雖然 UTA0533 並未使用此繞過方式，但攻擊者利用 **CouchDB** 漏洞（CouchDB 作為 SMA 設備的一部分安裝，可透過 localhost 存取）來讀取 UUID 並繞過驗證。

**Rapid7** 發布了概念驗證（PoC）利用程式，透過實作 `localhost:1050` 預期的 Erlang 協定並穿隧通過 WebSocket 進行檔案讀寫和透過 RPC 呼叫執行程式碼，實現非 root 權限的遠端程式碼執行。

SonicWall 本週已修補這兩個漏洞。使用 SMA 1000 設備的組織應立即套用修補程式，並檢查是否有受入侵跡象。

### 這對 VPN 設備安全的深遠影響

SonicWall 事件是邊界網路設備**零日供應鏈風險**的典型案例。攻擊者在漏洞公開揭露前就已開始利用，這意味著傳統的修補程式管理週期在此情境下完全無效。CVSS 10.0 的無需身分驗證繞過漏洞只需特定 HTTP 標頭即可觸發，凸顯了**一台未修補或無法修補的設備**可能成為持續性入侵據點的風險。對於 CISO 而言，這強化了縱深防禦的重要性——網路分段、對外連線異常偵測、以及記憶體常駐型鑑識準備——而非僅依賴廠商的修補程式發布週期。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/07/sonicwall-sma-zero-days-exploited.html)）

---

## 本週活躍威脅

📌 **UAC-0145（Sandworm）假 CAPTCHA 攻擊烏克蘭裝置**
與俄羅斯 GRU 軍事情報局相關的 **Sandworm** 國家級駭客正在利用受入侵網站上的假 **CAPTCHA 驗證**，誘騙烏克蘭目標執行 PowerShell 命令以部署竊密惡意軟體。CERT-UA 將此活動歸因於 Sandworm 子集群 **UAC-0145**。2026 年 6 月至 7 月間，至少 **10 個網站** 被入侵。部署的惡意軟體包括 **GHETTOVIBE**（透過 PowerShell 下載）、**SCOUTCURL**（偵察用）和 **COWARDDUCK**（偽裝成安全工具的 Android 後門，透過即時通訊軟體散布）。攻擊者使用 **EtherHiding** 技術從以太坊智能合約擷取惡意網域名稱，並使用 **SMARTAXE** 根據訪客特徵動態改變網頁內容。檔案透過 **Dropbox API** 外洩。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/uac-0145-uses-clickfix-captchas-to.html)

📌 **Claude for Chrome 漏洞——第三方擴充功能可讀取 Gmail（CVSS 9.6）**
Anthropic 的 **Claude for Chrome** 擴充功能（v1.0.80，當前版本）存在兩個漏洞。主要問題：`claude.ai` 上的內容腳本未檢查 `event.isTrusted`，允許任何在該域名有 DOM 存取權限的擴充功能發送偽造點擊，觸發 Claude 讀取 Gmail、Google Docs 和 Calendar 資料。在預設的「詢問後執行」模式下，此漏洞評為 **CVSS 7.7**；啟用「不詢問直接執行」後，升級為 **CVSS 9.6 嚴重**等級，無需任何批准提示。第二個潛在問題：使用 `?skipPermissions=true` 載入側邊面板可繞過所有權限檢查——目前僅能由擴充功能本身觸發，但如果其他漏洞暴露此參數即可被利用。截至 7 月 19 日尚無修補程式。緩解措施：關閉「不詢問直接執行」並審查具有 `claude.ai` 權限的擴充功能。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/claude-for-chrome-flaw-lets-other.html)

📌 **wp2shell——WordPress 核心未經身分驗證遠端程式碼執行**
名為 **wp2shell** 的 WordPress 核心重大漏洞允許攻擊者在易受攻擊的網站上執行任意程式碼，且**無需身分驗證**。由於 WordPress 驅動超過 **43% 的網站**，此漏洞代表巨大的攻擊面。組織應優先修補，並在無法立即修補時部署 WAF 規則。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html)

📌 **Microsoft 創紀錄修補 622 個漏洞——兩個零日漏洞正遭積極利用**
Microsoft 2026 年 7 月安全性更新修補了創紀錄的 **622 個漏洞**，其中包括**兩個已在野外被積極利用的零日漏洞**。修補規模——超過典型每月發布量的兩倍——為企業修補團隊帶來了營運挑戰。CISO 應優先處理兩個正在被利用的零日漏洞，同時為其餘 CVE 規劃分階段部署。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/microsoft-patches-record-622-flaws.html)

---

## OPSWAT 可以怎麼幫上忙

本摘要中的多個威脅涉及 OPSWAT MetaDefender 可直接應對的**檔案型攻擊向量**。UAC-0145 活動透過可下載的 PowerShell 腳本和 Android APK 檔案傳遞惡意軟體——MetaDefender 的**多引擎掃描**搭載 30 多個防毒引擎可偵測新型和多態變種。wp2shell WordPress RCE 允許基於檔案上傳的入侵；MetaDefender 的**內容威脅解除與重構（CDR）**可在檔案到達應用層前進行清理。對於 SonicWall VPN 設備入侵，OPSWAT 的**網路存取控制和檔案完整性監控**可偵測異常對外連線和未經授權的檔案修改。
