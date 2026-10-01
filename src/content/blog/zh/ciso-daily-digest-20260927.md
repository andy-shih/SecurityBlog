---
title: "CISO 每日摘要：Citrix NetScaler 雙重零時差漏洞遭主動利用 (20260927)"
description: "Citrix 於 9 月 27 日證實重大零時差漏洞 CVE-2026-88771 與 CVE-2026-88772（CVSS 均為 9.5）遭主動利用，影響所有 Citrix NetScaler ADC 與 Gateway 環境；無需身分驗證或額外設置即可開發。另外：Lunex Stealer 濫用 AMD 驅動程式禁用資安工具並竊取瀏覽器憑證，經由針對烏克蘭用戶的 ClickFix 攻擊散布之資訊竊取程式。"
pubDate: 2026-09-27
tags: [Citrix-NetScaler, CVE-2026-88771, CVE-2026-88772, RCE, 零時差, CISA-KEV, Lunex-Stealer, 資訊竊取, AMD-驅動程式, BYOVD, ClickFix, 烏克蘭, 防禦迴避, CISO-每日摘要]
author: "Security Solutions Team"
featured: true
---

## Citrix NetScaler：雙重重大零時差漏洞引發緊急修補

**Citrix** 於 **9 月 27 日** 證實，影響 **Citrix NetScaler ADC 與 NetScaler Gateway** 的兩個重大遠端程式碼執行漏洞正遭主動利用。**CVE-2026-88771**（不適當的輸入驗證）與 **CVE-2026-88772**（DTLS 記憶體溢位）均為 **CVSS 9.5**，在預設配置下 **無需身分驗證或額外設置** 即可開發。CVE-2026-88771 影響所有部署；CVE-2026-88772 衝擊啟用 DTLS 的設備——除非明確禁用，否則預設為 VPN 虛擬伺服器的預設狀態。Citrix 宣布版本 **14.1-73.37+** 與 **13.1-64.23+** 的修補程式，但確認 **無任何緩解措施**。供應商未披露主動利用規模，但 watchTowr 在法證調查中發現該漏洞，部分管理員隨即關閉設備。NetScaler ADC 與 Gateway 位於企業網路邊界，負責 VPN、遠端存取、負載平衡與使用者身分驗證——使其成為高價值攻擊目標。

🔗 **參考資料：** 綜合報導（[CISA](https://www.cisa.gov/news-events/alerts/2026/09/27/critical-zero-day-vulnerabilities-exploited-citrix-netscaler-adc-gateway)、[Rapid7](https://www.rapid7.com/blog/post/etr-zero-day-exploitation-of-citrix-netscaler-adc-and-gateway-cve-2026-88771-and-cve-2026-88772/)、[watchTowr](https://watchtowr.com/intelligence/citrix-netscaler-zero-day-vulnerabilities-faq/)）

---

## 本週活躍威脅

📌 **Lunex Stealer：經由 ClickFix 散布、濫用 AMD 核心驅動禁用資安工具的資訊竊取工具**
Ontinue 研究團隊發現 **Lunex Stealer**，一款廣泛透過假 CAPTCHA 頁面（ClickFix）散布、鎖定烏克蘭用戶的惡意軟體即服務（MaaS）平臺。攻擊鏈透過 CMSTPLUA COM 物件繞過使用者帳號控制（UAC），並利用 **BYOVD（攜帶自有易受攻擊驅動程式）** 技術，使用易受攻擊的 **AMD Radeon 軟體驅動程式（PDFWKRNL.sys，CVE-2023-20598）** 提升權限並 **令資安監控行程失明而持續運行**——一項隱密的 EDR 迴避戰術。竊取程式負載從 7 個基於 Chromium 的瀏覽器、9 個桌面與瀏覽器擴充密碼管理器竊取憑證，並經由隱藏的排程工作與 **Chrome 原生訊息主機** 維持持久化——一項支援 6 項檔案系統操作（讀、寫、下載、執行）的 PowerShell 後門。遍佈 13 國 28 個活躍 Lunex 命令與控制面板的分析指向俄語系開發團隊；該平臺從 2026 年 6 月迄今的擴張暗示單一操作者或組織化的 MaaS 轉售。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/lunex-stealer-abuses-amd-driver-to.html)
