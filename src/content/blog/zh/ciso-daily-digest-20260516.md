---
title: "CISO 每日摘要：Pwn2Own Berlin 2026 與 Turla P2P 僵屍網路 (20260516)"
description: "Pwn2Own Berlin 2026 揭露 39 個零時差漏洞，Turla/Kazuar 演化為模組化 P2P 僵屍網路，Claude Mythos 繞過 Apple M5 安全防護。"
pubDate: 2026-05-16
tags: ["CISO Digest", "Pwn2Own", "Turla", "Mythos", "零時差漏洞"]
author: "Security Solutions Team"
featured: true
---

**Pwn2Own Berlin 2026** 於 5 月 15 日落幕，總計展示 **39 個零時差漏洞**，涵蓋 Windows 11、Microsoft Exchange Server、Microsoft Edge 及多款 AI 程式碼代理工具（OpenAI Codex、Cursor、LiteLLM）。總獎金超過 **$908,000 美元**。DEVCORE 的 Orange Tsai 以 Exchange Server 遠端程式碼執行（$200K）與 Edge 沙箱逃逸（$175K）兩階段漏洞鏈獲得 **Master of Pwn** 頭銜。多項漏洞尚未修補，企業應優先追蹤 CVE 狀態。

- 活動於 2026 年 5 月 12-15 日在柏林舉行
- **39 個零時差漏洞** 橫跨作業系統、瀏覽器、雲端與 AI 目標
- DEVCORE 的 Orange Tsai 以兩條漏洞鏈贏得 **$505K**
- Microsoft Exchange RCE 與 Edge 沙箱逃逸為最受關注的漏洞組合
- AI 程式碼代理工具首次被納入攻擊面
- 多項漏洞尚未有修補程式，組織應優先追蹤 CVE 公告

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/05/pwn2own-berlin-2026-day-1-winners.html)、[Xakep.ru](https://xakep.ru/2026/05/15/pwn2own-berlin-2026/)）

📌 **Turla Kazuar 後門演化為模組化 P2P 僵屍網路**

俄羅斯關聯 APT 組織 Turla 已將其 Kazuar 後門改造為完全模組化的 **P2P 僵屍網路**，具備三個可插拔模組（InfoStealer、Proxy、Keylogger）與 **150 種以上設定選項**。新變種實作自主領導者選舉、AMSI/ETW/WLDP 繞過機制以及加密的點對點 C2 通訊。該僵屍網路已觀測到針對東歐與中亞的政府及外交實體。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/turla-turns-kazuar-backdoor.html)

📌 **Claude Mythos AI 輔助 macOS 核心漏洞在 Apple M5 上取得 Root 權限**

安全新創公司 Calif 使用 **Claude Mythos** 預覽版開發出首個公開的 macOS 核心記憶體損壞漏洞利用，成功繞過 Apple 在 **M5** 硬體上的 **Memory Integrity Enforcement (MIE)**。該漏洞利用在 **不到一週**（4 月 25 日至 5 月 1 日）內完成，從無權限本機使用者提升至 macOS 26.4.1 的 root shell。此事件標誌著 AI 輔助漏洞開發進展速度超越硬體層級防護的重要里程碑。

🔗 **參考資料：** [Decrypt](https://decrypt.co/367925/apple-mac-m5-system-exploited-anthropic-claude-mythos-ai) | [Cult of Mac](https://www.cultofmac.com/news/apple-macbook-pro-mie-claude-mythos-ai-exploit)

📌 **AI 程式碼生成與代理安全——新興攻擊面**

Dark Reading 分析警告，兩股力量正在匯聚——**AI 強制生成的程式碼**帶來規模化隱晦缺陷，以及**自主漏洞利用代理**（如 Project Glasswing 與 Claude Mythos）——形成傳統 CVE 分級流程無法應對的「完美風暴」。文章指出最高風險可能不是主力應用程式，而是位於特權信任路徑上的內部服務。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/ai-code-and-agents-forces-defenders-adapt)

OPSWAT 的 **MetaDefender** 平台提供多引擎檔案掃描與 **Deep CDR（深度內容消毒與重建）**，可在網路邊界（電子郵件、網頁下載、卸除式媒體）中和基於檔案的酬載——包括繞過傳統簽名偵測的零時差漏洞利用。
