---
title: "CISO 每日摘要：Vercel 資料外洩、ZionSiphon 目標 OT 水務設施、Microsoft Defender 零時差漏洞 (20260420)"
description: "Vercel 因 Context AI 供應鏈攻擊導致憑證外洩；ZionSiphon 惡意軟體鎖定以色列水利設施；第三個 Microsoft Defender 零時差漏洞揭露"
pubDate: 2026-04-20
tags: ["Vercel", "ZionSiphon", "Microsoft Defender", "零時差", "OT 安全"]
author: "Security Solutions Team"
featured: true
---

## 4月20日主要資安事件

- **Vercel 資料外洩：** 部署平台 Vercel 因 **Context AI** 供應鏈攻擊導致客戶憑證外洩，凸顯 AI/雲端生態系的供應鏈風險。
- **ZionSiphon OT 惡意軟體：** 研究人員偵測到 **ZionSiphon** 惡意軟體專門鎖定以色列水資源處理與**海水淡化 OT 系統**，威脅關鍵基礎設施。
- **第三個 Microsoft Defender 零時差漏洞：** 第三個 Microsoft Defender 零時差漏洞被揭露，三個漏洞均已確認遭積極利用。
- **美國司法部瓦解俄羅斯軍方 DNS 劫持網路：** 美國司法部與 FBI 聯手瓦解由俄羅斯軍方駭客操作的 **DNS 劫持網路**，該網路用於竊取敏感資訊。
- **Anthropic MCP 漏洞：** 研究人員發現 Anthropic 的 **Model Context Protocol (MCP)** 存在設計漏洞，可導致遠端程式碼執行，威脅 AI 供應鏈安全。

🔗 **參考資料：** Vercel 外洩 ([The Hacker News](https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html)) | ZionSiphon ([iThome](https://www.ithome.com/news/security/zionsiphon-water-facilities)) | MS Defender 漏洞 ([iThome](https://www.ithome.com/news/20260420/ms-defender-zero-day))

## 本週活躍威脅

📌 **Vercel 因 Context AI 供應鏈攻擊導致資料外洩**

Vercel 確認了與 **Context AI** 事件相關的安全漏洞，導致部分客戶憑證外洩。此事件凸顯 AI 供應鏈中的連鎖風險——一個供應商的入侵可能影響下游平台。使用 Vercel 的組織應輪換 API Token 並審查存取日誌。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html)

📌 **ZionSiphon 惡意軟體鎖定以色列水資源基礎設施**

安全研究人員發現 **ZionSiphon**，一種鎖定**以色列水資源處理與海水淡化設施**的精密惡意軟體。該惡意軟體旨在破壞水資源處理流程，對國家關鍵基礎設施構成直接威脅。此事件反映地緣政治衝突中 OT/ICS 目標攻擊的增長趨勢。

🔗 **Reference:** [iThome](https://www.ithome.com/news/security/zionsiphon-water-facilities)

📌 **Microsoft Defender 三重零時差漏洞遭積極利用**

第三個 Microsoft Defender 零時差漏洞被揭露，與先前揭露的兩個漏洞均已被證實遭到積極利用。這些漏洞影響防毒軟體更新機制，可能允許攻擊者停用或繞過端點防護。

🔗 **Reference:** [iThome](https://www.ithome.com/news/20260420/ms-defender-zero-day)

📌 **俄羅斯軍方 DNS 劫持網路遭瓦解**

美國司法部與 FBI 瓦解由俄羅斯軍方駭客（APT28 相關）操作的 **DNS 劫持網路**。該基礎設施被用於攔截 DNS 查詢並將受害者重新導向至惡意伺服器，以進行憑證竊取和監控。

🔗 **Reference:** [iThome](https://www.ithome.com/news/security/dns-hijacking-network-dismantled)
