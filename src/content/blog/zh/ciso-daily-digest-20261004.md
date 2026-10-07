---
title: "CISO 每日摘要：Warlock 利用 SharePoint 漏洞跨關鍵基礎設施部署勒索軟體 (20261004)"
description: "中國關聯 Warlock 威脅行為者持續利用微軟 SharePoint 漏洞，經由 BYOVD (CVE-2025-1055) 停用安全工具並部署勒索軟體。同時：MI5 曝光中國 MSS 資助 CGTRI 向 100+ 英國學者提供資金進行資安研究；中國關聯 TA419 以認證釣魚鎖定美國 AI 政策專家；ShinyHunters 管理員 Rey 在約旦被捕，協助 FBI。"
pubDate: 2026-10-04
tags: [Warlock, SharePoint, 勒索軟體, BYOVD, CVE-2025-1055, K7RScan, 關鍵基礎設施, MSS, CGTRI, TA419, AI-政策, ShinyHunters, Rey, 中國關聯, 認證釣魚, FBI]
author: "Security Solutions Team"
featured: true
---

## Warlock 勒索軟體利用 SharePoint 零時差漏洞，經由易受攻擊驅動程式停用安全防禦

**Warlock**（亦追蹤為 **Gold Salem、Longlegs、Storm-2603**），一個疑似中國關聯的威脅行為者，持續利用 **微軟 SharePoint 漏洞** 入侵關鍵基礎設施、政府與教育組織。在過去兩個月內，Warlock 已鎖定至少 **4 個組織遍佈葡萄牙、西班牙與拉丁美洲**，包括水利公司與電信供應商。攻擊鏈開發經由 SharePoint 漏洞部署網頁殼，收集 **ASP.NET 機器金鑰**，偽造簽署負載以在 **SharePoint 應用程式集區內達到遠端程式碼執行**，並在數小時內向 40+ 台主機部署安全防禦停用工具。值得注意的是，Warlock 曾濫用合法但易受攻擊的驅動程式 **K7RScan.sys (CVE-2025-1055)** 作為 **BYOVD (自帶易受攻擊驅動程式)** 攻擊的一部分，在勒索軟體部署前終止端點防護。最近至 2026 年 7 月 22 日，該組織仍在利用 SharePoint 漏洞達到任意程式碼執行、建立 **VS Code 通道** 做持久化，以及在受害基礎設施上部署 **Warlock 勒索軟體**。

---

## 本週活躍威脅

📌 **Warlock：SharePoint 零時差漏洞配合 BYOVD 驅動程式濫用繞過安全防禦**
**Warlock** 對 **微軟 SharePoint Server** 的開發結合網頁殼部署、ASP.NET 機器金鑰提取與認證偽造以達到 **無需身分驗證的遠端程式碼執行**。該威脅行為者濫用 **K7RScan.sys (CVE-2025-1055)** 在勒索軟體部署前停用端點安全，影響關鍵基礎設施營運商與地區政府。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/warlock-exploits-sharepoint-flaws-to.html)

📌 **MI5 曝光中國 MSS 資助 CGTRI 向 100+ 英國學者提供研究經費**
**MI5** 發布「情報機關間諜警示」揭露 **CGTRI (中國通用技術研究院)**（評估為 **中國 MSS 的前置公司**）資助涉及 **100+ 英國學者** 的學術研究，專長包括人工智慧、資訊安全、秘密通訊與隱寫術——此等能力直接符合 **中國政府機構針對英國企業、大學與關鍵基礎設施執行的網路攻擊方法**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/mi5-says-chinas-mss-funded-research.html)

📌 **中國關聯 TA419 以認證釣魚鎖定美國 AI 政策專家**
**TA419**，一個 **中國關聯網路間諜組織**，已發動認證釣魚活動冒充傑出經濟學家、AI 政策制定者與 **Anthropic 員工** 以鎖定美國智庫、大學與法律組織的 **人工智慧政策專家**。主旨行如「Request for Feedback on Military Integration of Claude」製造可信藉口以收集 **有效認證**。自至少 2025 年 4 月開始、2026 年 7 月有最近活動的活動，支持 **中國情報機構監控美國 AI 政策發展的目標**，於模型蒸餾指控與出口管制緊張局勢中進行。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/china-aligned-ta419-targets-us-ai.html)

📌 **ShinyHunters 管理員 Rey 在約旦被捕，協助 FBI 偵查**
**Saif al-Din Khader**（昵稱「Rey」），疑似 **ShinyHunters 數位勒索集團管理員**，於 **2026 年 9 月 29 日** 遭 **約旦** 當局逮捕，並正協助 **美國聯邦調查局 (FBI)** 認定其他集團成員。過去，Rey 曾管理 **Hellcat 勒索軟體** 的資料外洩網站，並擔任 **BreachForums** 管理員。此次逮捕跟進 **9 月一名 24 歲阿姆斯特丹男子** 與 ShinyHunters 關聯的逮捕，標誌執法部門對此 **自 2020 年起歷經多次逮捕與論壇查扣仍未長期沉寂的持久勒索集體** 的持續施壓。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/shinyhunters-suspect-rey-reportedly.html)

---
