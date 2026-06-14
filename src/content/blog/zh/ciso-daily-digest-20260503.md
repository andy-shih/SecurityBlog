---
title: "CISO 每日摘要：cPanel 漏洞遭 Sorry 勒索軟體利用與 CISA 新增 KEV (20260503)"
description: "重大 cPanel 認證繞過漏洞遭 Sorry 勒索軟體武器化，超過 2 萬台伺服器仍暴露於風險中；CISA 將已遭利用的 Linux root 漏洞 CVE-2026-31431 新增至 KEV 目錄"
pubDate: 2026-05-03
tags: ["CISO 每日摘要", "網路安全", "威脅情報"]
author: "Security Solutions Team"
featured: true
---

**cPanel 漏洞遭武器化 — Sorry 勒索軟體利用認證繞過，超過 2 萬台伺服器受影響**

- cPanel 重大認證繞過漏洞（CVSS 9.8）現正被 **Sorry 勒索軟體** 集團積極利用
- 概念驗證攻擊框架已公開，全球網際網路估計仍有 **20,000 台以上伺服器** 被入侵或處於脆弱狀態
- 安全機構警告，該漏洞被用來部署勒索軟體、網頁後門和加密貨幣挖礦程式
- 使用 cPanel 的組織被敦促立即套用緊急修補程式

🔗 **參考資料：** 綜合報導（[iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE9jVTZrYXhDNWRRSVROVzY3M1pJ...)、[iThome（勒索軟體）](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1yRERNcmJrU0o1Sjdpa1otTlZ0...))

### 本週活躍威脅

📌 **CISA 將已遭利用的 Linux Root 漏洞 CVE-2026-31431 新增至 KEV**

美國**網路安全與基礎設施安全局（CISA）**將 **CVE-2026-31431** 新增至其已知遭利用漏洞目錄。該漏洞允許本地攻擊者在 Linux 系統上獲得 root 權限，且已在現實世界中遭到積極利用。聯邦機關必須在指定期限內完成修補。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/cisa-adds-actively-exploited-linux-root.html)

📌 **Gen Digital 與 xAI 合作瞄準 AI 信任層**

**Gen Digital**（Norton、Avast 和 LifeLock 的所有者）正在擴展 AI 安全領域，與 **xAI** 合作並推出專為 AI 代理設計的新 VPN 產品。此舉反映了對自主 AI 工作負載身分和存取控制的需求不斷增長。

🔗 **參考資料：** [Simply Wall St](https://news.google.com/rss/articles/CBMiyAFBVV95cUxPSXoyN3pqWXNQV3MzU3U0OVVo...)

📌 **NIST 評估 DeepSeek V4，認為落後頂級 AI 模型 8 個月**

美國**國家標準與技術研究院（NIST）**發布了對 **DeepSeek V4** 的評估，發現其在網路安全防禦基準測試中落後頂級 AI 模型約 **8 個月**。此評估對於正在評估非美國廠商 AI 安全工具的組織具有重要意義。

🔗 **參考資料：** [Techritual](https://news.google.com/rss/articles/CBMiWEFVX3lxTE53VFhUVTA4blhRQWNiZjhMS0px...)

### OPSWAT 能做什麼

Sorry 勒索軟體對 cPanel 漏洞的利用證明了單一未修補漏洞如何能擴大成大規模勒索軟體疫情。OPSWAT 的 **MetaDefender 平台** 具有多引擎檔案掃描和 **CDR（內容淨化與重構）** 功能，可以在入口點偵測並中和勒索軟體 payload，防止其到達關鍵伺服器。該平台的**主動 DLP** 也有助於防止勒索軟體部署時常伴隨的資料外洩。
