---
title: "CISO 每日摘要：Tropic Trooper、UNC6692 與 AI 驅動釣魚威脅 (20260424)"
description: "Tropic Trooper APT 透過特洛伊化的 SumatraPDF 針對家用路由器與日本組織；UNC6692 假冒 IT 客服透過 Microsoft Teams 部署 SNOW 惡意軟體；中國 APT 濫用雲端工具監控蒙古；LMDeploy 漏洞在披露後 13 小時內遭利用；AI 釣魚成為頂尖網路攻擊手法"
pubDate: 2026-04-24
tags: ["CISO Daily Digest", "\u8cc7\u5b89", "\u5a01\u8105\u60c5\u8cc7"]
author: "Security Solutions Team"
featured: true
---

## Tropic Trooper APT 攻擊家用路由器與日本組織

Tropic Trooper APT 組織發動了多重向量攻擊，針對**家用路由器與日本組織。** 攻擊者使用透過 GitHub 分發的**特洛伊化 SumatraPDF 安裝程式**部署 Adaptix 後利用框架。該行動還使用**家用路由器作為 C2 通訊的代理基礎設施**，使取締更加困難。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/threat-intelligence/tr) | [The Hacker News](https://thehackernews.com/2026/04/tropic-trooper-u)

---

## 本週活躍威脅

📌 **UNC6692 假冒 IT 客服透過 Microsoft Teams 部署 SNOW 惡意軟體**

UNC6692 威脅組織進行了複雜的**社交工程攻擊，假冒 IT 客服人員**透過 Microsoft Teams 接觸目標。攻擊者說服目標安裝遠端存取工具，然後部署 **SNOW 惡意軟體**以維持持續存取與資料竊取。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/unc6692-imperson)

📌 **中國 APT 濫用多種雲端工具監控蒙古**

與中國有關的 APT 組織被發現**濫用多種雲端服務與工具**針對蒙古政府實體進行間諜活動。攻擊者利用合法的雲端平台進行資料外洩與 C2 基礎設施，使偵測更加困難。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-brea)

📌 **LMDeploy CVE-2026-33626 漏洞在披露 13 小時內遭利用**

LMDeploy AI 模型部署工具的重大漏洞（CVE-2026-33626）在**公開披露後僅 13 小時**就被在野利用。如此快速的反應速度凸顯了 AI/ML 基礎設施中快速部署修補程式的迫切需求。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/lmdeploy-cve-202)

📌 **AI 釣魚成為網路攻擊者首選武器**

Dark Reading 報告指出，**AI 驅動的釣魚攻擊已成為 2026 年排名第一的網路攻擊手法**，超越傳統惡意軟體與勒索軟體。生成式 AI 使攻擊者能夠大規模創建高度說服力、個人化的釣魚郵件，大幅提高成功率。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/ai-phishing)

📌 **Checkmarx 供應鏈攻擊擴大 — Bitwarden 確認 NPM 套件遭駭**

持續的 Checkmarx 供應鏈攻擊活動擴大，**Bitwarden 確認其 CLI NPM 套件遭入侵。** 該密碼管理公司敦促使用者輪換憑證並審查在使用了遭入侵套件的系統上進行過的所有操作。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/bitwarden-cli-co)

📌 **CISA ICS 2026 年 4 月安全通報發布**

JVN 發布了 **2026 年 4 月下旬的 CISA ICS 安全通報**，涵蓋工業控制系統與醫療設備的重大漏洞，需要 OT 安全團隊立即關注。

🔗 **Reference:** [JVN](https://jvn.jp/vu/JVNVU90656414/)

## OPSWAT 能做什麼

Tropic Trooper 行動使用透過 GitHub 分發的**特洛伊化 SumatraPDF 安裝程式** — 這正是 **MetaDefender 的基於檔案威脅防護**專門設計應對的技術。**MetaDefender Gateway** 可在網路邊界檢查所有下載檔案，而 **MetaDefender CDR** 可透過移除活躍內容與巨集中和武器化的 PDF 安裝程式。對於**家用路由器代理基礎設施**，OPSWAT 的 **TrustNo.one** 平台為受管理環境提供裝置級別的可視性。