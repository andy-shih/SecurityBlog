---
title: "CISO 每日摘要：NGINX 零時差漏洞、Claude Mythos 漏洞利用、AI 機器人攻擊暴增 (20260518)"
description: "NGINX Rift 漏洞遭主動利用，Claude Mythos 在 50 個 Cloudflare 儲存庫中建立可用漏洞利用，AI 驅動機器人攻擊暴增 12.5 倍。"
pubDate: 2026-05-18
tags: ["CISO Digest", "NGINX", "Claude Mythos", "AI 機器人", "Cloudflare"]
author: "Security Solutions Team"
featured: true
---

一個 NGINX 重大漏洞（CVE-2026-42945，CVSS 9.2）被稱為「Rift」，自 5 月 16 日起已被積極利用，Xakep.ru 報告了首批確認的利用案例。Claude Mythos AI 展示在 **50 個 Cloudflare 儲存庫** 中以 **83% 成功率** 建立可用漏洞利用的能力，引起 FSB 與全球資安機構警覺。Thales 的 **2026 年 Bad Bot 報告** 顯示 AI 驅動的機器人攻擊年增 **12.5 倍**，機器人流量現占 **所有網路流量的 53%**。

- **NGINX CVE-2026-42945（「Rift」）** — CVSS 9.2，自 5 月 16 日起遭積極利用；影響特定配置的所有 NGINX 版本；尚無官方修補程式
- **Claude Mythos 自動化漏洞利用** — 在 50 個 Cloudflare 儲存庫中以 83% 成功率建立可用漏洞利用；針對 Cloudflare Workers、CDN、D1 資料庫
- **Thales 2026 Bad Bot 報告** — AI 機器人攻擊增加 12.5 倍；機器人占所有網路流量 53%；最先進機器人使用 ML 驅動的人類模仿
- **Fluke 資料外洩** — 工業測試設備製造商；18,517 人受影響；SSN、出生日期、身心障礙狀態曝光

🔗 **參考資料：** 綜合報導（[The Hacker News - DirtyDecrypt](https://thehackernews.com/2026/05/dirtydecrypt-poc-released-for-linux.html)、[Xakep.ru - NGINX](https://xakep.ru/2026/05/19/cve-2026-42945-attacks/)、[The Hacker News - Claude Mythos](https://thehackernews.com/2026/05/claude-mythos-cloudflare-exploits.html)）

📌 **NGINX CVE-2026-42945「Rift」（CVSS 9.2）—— 確認遭主動利用**

NGINX HTTP/2 串流處理模組中的一個 **18 年歷史的錯誤** 自 5 月 16 日起已被積極利用。該漏洞允許在特定配置下進行 **遠端程式碼執行**。研究人員報告了首批利用案例。系統管理員應立即檢視 NGINX 配置，並在廠商緩解方案可用時儘快套用。

🔗 **參考資料：** [Xakep.ru](https://xakep.ru/2026/05/19/cve-2026-42945-attacks/) | [The Hacker News](https://thehackernews.com/2026/05/dirtydecrypt-poc-released-for-linux.html)

📌 **Claude Mythos 在 50 個 Cloudflare 儲存庫中以 83% 成功率建立可用漏洞利用**

Anthropic 的 **Claude Mythos** AI 系統在針對 **Cloudflare 基礎設施** 的漏洞利用中達到 **83% 成功率**。該 AI 自主識別了 **50 個 Cloudflare 儲存庫**（包括 Cloudflare Workers、CDN 配置與 D1 資料庫服務）中的漏洞。FSB 與全球資安機構對 AI 驅動漏洞發現與利用的加速發展表示擔憂。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/claude-mythos-cloudflare-exploits.html) | [SecurityWeek](https://www.securityweek.com/claude-mythos-ai-exploits-cloudflare)

📌 **Thales 2026 Bad Bot 報告——AI 驅動機器人攻擊暴增 12.5 倍**

Thales 年度 Bad Bot 報告顯示 **AI 驅動的機器人攻擊** 年增 **12.5 倍**，自動化流量現占 **所有網路流量的 53%**。最先進的機器人使用 **ML 驅動的人類模仿** 來躲避偵測，包括類似人類的滑鼠移動、隨機化時間與瀏覽器指紋偽造。帳戶接管攻擊年增 **87%**，由 AI 驅動的憑證填充攻擊推動。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/175827) | [Thales Report](https://www.thalesgroup.com/en/markets/digital-identity-and-security/bot-management)

📌 **Fluke 資料外洩——工業測試設備製造商暴露 18,500 筆記錄**

工業測試設備製造商 **Fluke** 發生資料外洩，影響 **18,517 人**。暴露的資料包括社會安全號碼、出生日期與身心障礙狀態資訊。此事件凸顯工業與製造業組織攻擊面持續擴大。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/175839)

📌 **Windows MiniPlasma 零時差漏洞（CVE-2020-17103 重現）—— 完整修補的 Win11 上取得 SYSTEM 權限**

最初修補為 CVE-2020-17103 的漏洞以繞過方式重新出現，影響完整修補的 Windows 11 系統。該漏洞利用透過 Windows Update Client 權限提升路徑達到 **SYSTEM 層級存取**。組織應監控 Microsoft 安全公告以取得更新修補程式。

🔗 **參考資料：** [BleepingComputer](https://www.bleepingcomputer.com/news/security/windows-miniplasma-zero-day-grants-system-access-on-fully-patched-win11/)
