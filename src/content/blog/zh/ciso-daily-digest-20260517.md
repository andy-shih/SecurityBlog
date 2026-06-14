---
title: "CISO 每日摘要：Exchange Server 零時差漏洞、Funnel Builder 信用卡側錄、Grafana 程式碼外洩 (20260517)"
description: "Microsoft Exchange Server 零時差漏洞遭主動攻擊、Funnel Builder WooCommerce 側錄影響 4 萬家商店、Grafana GitHub Token 外洩導致勒贖。"
pubDate: 2026-05-17
tags: ["CISO Digest", "Exchange Server", "WooCommerce", "Grafana", "零時差漏洞"]
author: "Security Solutions Team"
featured: true
---

5 月 17 日資安領域出現兩個重大 **零時差漏洞** 與一起重大 **供應鏈程式碼竊取事件**。Microsoft 揭露 **CVE-2026-42897**（CVSS 8.1），Exchange Server Outlook Web Access 跨站指令碼漏洞正遭主動利用——目前尚無永久修補程式。此外，**Funnel Builder (FunnelKit)** WooCommerce 外掛漏洞影響超過 **4 萬家商店**，允許攻擊者注入 JavaScript 進行 Magecart 式信用卡側錄。**Grafana Labs** 遭 GitHub Token 外洩導致完整程式碼庫被下載及 CoinbaseCartel 組織勒贖。

- **Microsoft Exchange Server CVE-2026-42897** — OWA XSS 漏洞正遭主動利用；CISA 已列入 KEV 目錄；可透過緊急緩解服務因應
- **Funnel Builder (FunnelKit)** — 未經認證即可在 WooCommerce 結帳頁面注入 JS，資料傳送至 wss://protect-wss[.]com；已於 v3.15.0.3 修補
- **Grafana GitHub Token 外洩** — CoinbaseCartel 下載完整程式碼庫；Grafana 依 FBI 指引拒絕支付贖金；尚未確認客戶資料受影響

🔗 **參考資料：** 綜合報導（[The Hacker News - Exchange](https://thehackernews.com/2026/05/microsoft-exchange-server-zero-day.html)、[The Hacker News - Funnel Builder](https://thehackernews.com/2026/05/funnel-builder-flaw-under-active.html)、[The Hacker News - Grafana](https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html)）

📌 **Microsoft Exchange Server CVE-2026-42897（CVSS 8.1）—— 確認遭主動攻擊**

未經認證的攻擊者可寄送特製電子郵件，當收件者在 Outlook Web Access 中開啟時，在受害者瀏覽器工作階段中執行任意 JavaScript——從而實現 **工作階段劫持**、憑證竊取與 **橫向移動**。Microsoft 於 5 月 14 日（Patch Tuesday 後兩天）揭露此漏洞。CISA 於 5 月 15 日將其列入 **已知遭利用漏洞目錄**，要求聯邦機構於 5 月 29 日前完成緩解。目前尚無永久修補程式，組織應立即套用 Exchange 緊急緩解服務。

🔗 **參考資料：** [MSRC 公告](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-42897) | [Microsoft Tech Community](https://techcommunity.microsoft.com/blog/exchange/addressing-exchange-server-may-2026-vulnerability-cve-2026-42897/4518498) | [CISA KEV](https://www.cisa.gov/news-events/alerts/2026/05/15/cisa-adds-one-known-exploited-vulnerability-catalog)

📌 **Funnel Builder (FunnelKit) WooCommerce 結帳側錄——4 萬家商店面臨風險**

Funnel Builder WordPress 外掛的一個重大未經認證漏洞允許攻擊者在 **WooCommerce 結帳頁面** 注入任意 JavaScript。注入的程式碼偽裝成 Google Tag Manager 指令碼，開啟 WebSocket 連線至 `wss://protect-wss[.]com` 以擷取信用卡號碼、CVV 與帳單地址。已於版本 **3.15.0.3** 修補。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/funnel-builder-flaw-under-active.html)

📌 **Grafana GitHub Token 外洩導致程式碼庫遭竊與勒贖**

未授權人士取得可存取 Grafana GitHub 環境的 Token，下載了公司的完整程式碼庫。攻擊者（歸屬於 **CoinbaseCartel**，ShinyHunters / Scattered Spider 分支）要求付款以防資料公開。Grafana 依 FBI 指引拒絕支付贖金。CoinbaseCartel 自 2025 年 9 月以來已聲稱 **170 多個受害者**，涵蓋醫療保健、科技與製造業。原始碼遭竊可能導致漏洞研究、智慧財產權盜竊與供應鏈攻擊。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html)

📌 **Claude Mythos AI 輔助 macOS 核心漏洞——不到一週繞過 M5 MIE**

安全新創公司 Calif 使用 **Claude Mythos** 預覽版開發出首個公開的 macOS 核心漏洞利用，繞過 Apple 在 **M5** 硬體上的 **Memory Integrity Enforcement (MIE)**。該漏洞利用在 4 月 25 日至 5 月 1 日期間完成，從無權限本機使用者提升至 macOS 26.4.1 的 **root shell**。此事件標誌著 AI 輔助漏洞開發速度超越硬體防護部署週期的重要里程碑。

🔗 **參考資料：** [Decrypt](https://decrypt.co/367925/apple-mac-m5-system-exploited-anthropic-claude-mythos-ai) | [Cult of Mac](https://www.cultofmac.com/news/apple-macbook-pro-mie-claude-mythos-ai-exploit)

📌 **QNAP 參與台灣產品資安漏洞獵捕計畫**

QNAP 完成由數位發展部資安院主辦的產品資安漏洞獵捕計畫。QNAP 擔任 **藍隊** 代表，提交核心產品（ADRD NDR、QHora 路由器）供紅隊測試。**QuTS hero 作業系統** 展現強大安全性。QNAP 向參與研究人員頒發 **NT$20 萬以上** 獎金。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/pr/175821)
