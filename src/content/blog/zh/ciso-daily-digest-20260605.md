---
title: "CISO 每日摘要：供應鏈遭受圍攻 (20260605)"
description: "IronWorm、Miasma 和 Hades 協同供應鏈攻擊鎖定 npm、PyPI 及 GitHub；Chrome 149 修補破紀錄的 429 項漏洞；Check Point VPN 零時差漏洞遭積極利用。"
pubDate: 2026-06-05
tags: ["供應鏈安全", "漏洞", "惡意軟體", "Chrome", "勒索軟體"]
author: "Security Solutions Team"
featured: true
---

## IronWorm、Miasma 和 Hades — 一波協同式供應鏈攻擊

本週開源生態系統遭受一波大規模協同式軟體供應鏈攻擊，鎖定 npm 註冊表、PyPI 和 GitHub 儲存庫，規模前所未見。

- **IronWorm**：一種基於 Rust 的新型蠕蟲，透過利用 npm 套件的 `postinstall` 腳本進行傳播和持續潛伏
- **Miasma 蠕蟲變種**攻擊了**73 個微軟擁有的 GitHub 儲存庫**，在兩分鐘內透過自動化協調行動將其停用
- 針對 PyPI 的 **Hades 攻擊行動**引入了一種受 Shai-Hulud 攻擊模式啟發的新技術，利用名稱混淆套件鎖定 Python 開發者
- 研究人員發現**超過 700 個被感染的 GitHub 程式碼儲存庫**，利用 `postinstall` 機制部署惡意負載，暗示背後是組織化的威脅行為者

同時鎖定 npm、PyPI 和 GitHub——這三大套件生態系統——代表著供應鏈威脅的重大升級。安全團隊應稽核其 CI/CD 管道中是否有未經授權的套件更新，審查近期依賴項變更，並實施嚴格的套件簽名和完整性驗證。

🔗 **參考資料：** 全面報導（[The Hacker News: IronWorm & Miasma](https://thehackernews.com/2026/06/ironworm-and-new-miasma-worm-variant.html) | [DarkReading: Hades Campaign](https://www.darkreading.com/application-security/hades-campaign-pypi-shai-hulud) | [DarkReading: Rust-Written IronWorm](https://www.darkreading.com/cyberattacks-data-breaches/rust-written-ironworm-npm-supply-chain) | [The Hacker News: Miasma Hits Microsoft](https://thehackernews.com/2026/06/miasma-worm-hits-73-microsoft-github.html))

## 本週活躍威脅

📌 **Check Point VPN 零時差漏洞（CVE-2026-50751 / CVE-2026-50752）遭積極利用**

Check Point VPN 的 IKEv1 實作中存在一個重大漏洞，正被威脅行為者在野外積極利用，繞過身分驗證以存取受保護網路。CISA 已將此漏洞列入已知被利用漏洞（KEV）目錄，並要求聯邦機構在 **4 天內**完成修補。**Qilin 勒索軟體集團**已被觀察到利用此漏洞進行活躍攻擊。Check Point 已發布修補程式。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/critical-check-point-vpn-flaw-exploited.html) | [DarkReading](https://www.darkreading.com/vulnerabilities-threats/check-point-vpn-flaw-exploited-early-may)

📌 **Chrome 149 修補破紀錄的 429 項安全漏洞**

Google 發布 Chrome 149，修補了驚人的 **429 個安全問題**——這是 Chrome 歷史上單次最大規模的修補批次。更新涵蓋 **74 個重大與高嚴重性**漏洞，包括 use-after-free 缺陷、緩衝區溢位和類型混淆錯誤。

🔗 **參考資料：** [The Hacker News: AI Agent 發現 21 個零時差漏洞；Chrome 修補 429 個](https://thehackernews.com/2026/06/ai-agent-uncovers-21-zero-days-in.html)

📌 **PCPJack 劫持 230 台雲端伺服器用於隱蔽 SMTP 中繼**

名為 **PCPJack** 的威脅行動已入侵 **230 多台**橫跨 AWS、Google Cloud 和 Azure 的雲端伺服器，將其轉換為用於垃圾郵件和網路釣魚的隱蔽 SMTP 中繼網路。攻擊者利用了弱憑證和未修補的管理介面。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/pcpjack-hijacks-230-aws-google-cloud.html)

📌 **Linux 核心單一字元缺陷可導致本地端 root 權限提升**

Linux 核心中因記憶體管理程式碼中出現**單一字元錯誤**而導致的重大漏洞，允許無權限的本地使用者取得 **root 存取權限**。公開的漏洞利用程式碼已在流傳。所有主要 Linux 發行版均受影響。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/one-character-linux-kernel-flaw-enables.html)

📌 **2026 年世界盃足球賽詐騙已開始活躍**

威脅行為者正利用即將到來的 2026 年 FIFA 世界盃，發起**假售票網站、銀行惡意軟體和憑證竊取攻擊**。多個模仿官方 FIFA 平台的詐騙域名已被註冊。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/fifa-world-cup-2026-scams-are-already.html)

📌 **新威脅群組 OP-512 鎖定 Microsoft IIS 伺服器**

新識別的威脅群組 **OP-512** 正以自訂網頁殼層框架鎖定 **Microsoft IIS 伺服器**，部署複雜的混淆技術並維持持續存取以進行資料竊取。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/new-threat-cluster-op-512-targets.html)

📌 **Cisco Unified CM SSRF 漏洞（CVE-2026-20230）利用程式碼公開**

Cisco 修補了 **Unified Communications Manager** 中的一個**伺服器端請求偽造（SSRF）漏洞**。利用程式碼已被公開，使用 Cisco Unified CM 的組織應立即套用最新修補程式。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cisco-patches-cve-2026-20230-in-unified.html)

## OPSWAT可以怎麼幫上忙

鎖定 npm、GitHub 和 PyPI 的 IronWorm 與 Miasma 供應鏈攻擊突顯了軟體供應鏈入侵風險的日益增長。OPSWAT MetaDefender 的多引擎掃描技術整合 **30 多個防毒引擎**，以及其**內容拆除與重組（CDR）**技術，能夠檢測並封鎖嵌入在套件依賴項中的已知和未知惡意軟體變種，降低企業 CI/CD 管線中供應鏈驅動感染的風險。
