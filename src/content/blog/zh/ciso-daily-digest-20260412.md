---
title: "CISO 每日摘要：CPUID 遭入侵散布 STX RAT，Adobe 修補零時差漏洞 (20260412)"
description: "CPUID 官網遭入侵，CPU-Z 與 HWMonitor 下載被置換為 STX RAT 木馬；Adobe 緊急修補被積極利用的 Acrobat Reader 零時差漏洞 CVE-2026-34621"
pubDate: 2026-04-12
tags: ["CPUID", "STX RAT", "Adobe", "零時差漏洞", "供應鏈攻擊"]
author: "Security Solutions Team"
featured: true
---

## 4月12日主要資安事件

- **CPUID 供應鏈攻擊：** 硬體監控工具開發商 CPUID 官方網站遭入侵，攻擊者將合法的 CPU-Z 及 HWMonitor 安裝檔置換為植入 **STX RAT** 木馬的惡意版本，該木馬具備遠端控制與資料竊取能力。
- **Adobe 零時差漏洞：** Adobe 發布緊急修補程式，修補已被積極利用的 Acrobat Reader 零時差漏洞 **CVE-2026-34621**。攻擊者可透過惡意 PDF 檔案遠端執行任意程式碼，呼籲企業在 72 小時內完成更新。

🔗 **參考資料：** CPUID 入侵事件 ([The Hacker News](https://thehackernews.com/2026/04/cpuid-breach-distributes-stx-rat-via.html)) | Adobe 漏洞修補 ([The Hacker News](https://thehackernews.com/2026/04/adobe-patches-actively-exploited.html))

## 本週活躍威脅

📌 **CPUID 供應鏈攻擊散布 STX RAT 木馬**

CPUID 官方網站遭入侵，是典型的軟體供應鏈攻擊。攻擊者將熱門硬體監控工具 **CPU-Z** 及 **HWMonitor** 安裝檔植入 **STX RAT** 遠端存取木馬，該木馬同時具備竊資軟體功能。在入侵期間從官網下載的使用者可能已遭感染。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/cpuid-breach-distributes-stx-rat-via.html)

📌 **Adobe Acrobat Reader 零時差漏洞 CVE-2026-34621**

Adobe 修補了一個已被積極利用的 Acrobat Reader 零時差漏洞（CVE-2026-34621）。使用者開啟惡意 PDF 檔案即可觸發遠端程式碼執行。由於 Acrobat Reader 在各企業中廣泛使用，快速修補至關重要。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/adobe-patches-actively-exploited.html)
