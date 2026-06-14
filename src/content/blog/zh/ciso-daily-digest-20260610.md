---
title: "CISO 每日摘要：Miasma 供應鏈蠕蟲攻擊 73 個微軟倉庫、破紀錄的 Patch Tuesday (20260610)"
description: "Miasma 供應鏈蠕蟲攻陷 73 個微軟 GitHub 倉庫、破紀錄 206 個 CVE 的 Patch Tuesday、俄羅斯 APT 利用 WinRAR 零時差漏洞攻擊烏克蘭、勒索軟體組織利用 Check Point VPN 零時差"
pubDate: "2026-06-10"
tags: ["CISO", "資安", "威脅情報", "供應鏈攻擊", "修補日", "勒索軟體", "零時差漏洞"]
author: "Security Solutions Team"
featured: true
---

近年最大規模的供應鏈蠕蟲攻擊 Miasma 入侵了 **73 個微軟 GitHub 倉庫**，迫使部分倉庫關閉進行調查。與此同時，2026 年 6 月的 Patch Tuesday 創下歷史新紀錄，修補了 **206 個 CVE**，部分原因歸功於 AI 輔助漏洞發現的速度提升。俄羅斯 APT 組織利用 WinRAR 零時差漏洞加強對烏克蘭組織的攻擊，而勒索軟體集團在長達一個多月內濫用 Check Point VPN 零時差漏洞未被發現。

🔗 **參考資料：** Miasma（[Dark Reading](https://www.darkreading.com/application-security/miasma-supply-chain-worm-73-microsoft-repositories) | [The Hacker News](https://thehackernews.com/2026/06/microsoft-restores-some-github-repos.html)）、Patch Tuesday（[Krebs on Security](https://krebsonsecurity.com/2026/06/a-record-breaking-patch-tuesday-for-june-2026/) | [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/blame-ai-patch-tuesday-record-206-cves)）、WinRAR（[Dark Reading](https://www.darkreading.com/vulnerabilities-threats/russian-groups-winrar-flaw-ukrainian-orgs)）、Check Point（[Xakep.ru](https://xakep.ru/2026/06/09/check-point-0day/)）

📌 **Miasma 供應鏈蠕蟲 — 73 個微軟倉庫淪陷**

Miasma 蠕蟲代表新型供應鏈威脅，通過入侵 CI/CD 管線和個人存取權杖（PAT）自動跨 GitHub 倉庫傳播。微軟已恢復部分倉庫，但仍有許多維持離線。使用受影響 **73 個倉庫**任一依賴的組織應立即審計其軟體供應鏈。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/application-security/miasma-supply-chain-worm-73-microsoft-repositories) | [The Hacker News](https://thehackernews.com/2026/06/microsoft-restores-some-github-repos.html)

📌 **破紀錄 Patch Tuesday — 單日修補 206 個 CVE**

2026 年 6 月 Patch Tuesday 創下 **206 個 CVE** 的歷史紀錄。安全研究人員將此歸因於 **AI 輔助漏洞發現**，同時加速了漏洞的發現與修補。關鍵修補包括 Microsoft Exchange、Windows 核心和 Adobe Reader。考慮到大量漏洞已遭積極利用，企業團隊應優先部署更新。

🔗 **Reference:** [Krebs on Security](https://krebsonsecurity.com/2026/06/a-record-breaking-patch-tuesday-for-june-2026/) | [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/blame-ai-patch-tuesday-record-206-cves)

📌 **俄羅斯 APT 利用 WinRAR 漏洞攻擊烏克蘭組織**

俄羅斯相關威脅行為者正積極利用 WinRAR 漏洞（CVE-2025-21200）攻擊烏克蘭軍方和政府目標。攻擊利用特製壓縮檔，解壓縮時即可執行惡意程式碼。仍在使用 WinRAR 的使用者應立即升級。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/russian-groups-winrar-flaw-ukrainian-orgs)

📌 **Check Point VPN 零時差漏洞遭勒索軟體濫用超過一個月**

勒索軟體集團在漏洞公開揭露前已利用 Check Point **VPN** 設備中的零時差漏洞超過 **30 天**。攻擊針對周邊 VPN 閘道，Check Point 已發布緊急修補程式。

🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/06/09/check-point-0day/)

📌 **Microsoft Exchange 欺騙漏洞可偽造任意電子郵件地址**

Microsoft Exchange 的嚴重漏洞使攻擊者能夠**偽造任意電子郵件地址**，繞過一般驗證檢查。此漏洞可用於針對高階主管和供應商的高度可信釣魚攻擊。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/exchange-flaw-attackers-spoof-email-address)

📌 **ShinyHunters 利用 Oracle PeopleSoft 零時差攻擊大學院校**

ShinyHunters 威脅組織正積極利用 CVE-2026-35273（Oracle PeopleSoft 零時差漏洞）攻擊全球高等教育機構。該漏洞允許**未經認證的遠端程式碼執行**。使用 PeopleSoft 的大學應立即檢查入侵指標。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/shinyhunters-exploits-oracle-peoplesoft.html)

📌 **The Gentlemen 勒索軟體聲稱 478 名受害者，具蠕蟲式傳播能力**

新興勒索軟體組織 **The Gentlemen** 聲稱已感染 **478 名受害者**，採用蠕蟲式自我傳播技術。Krebs on Security 正在調查該組織的領導層和基礎設施。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/the-gentlemen-ransomware-claims-478.html)

📌 **GreatXML 利用復原分割區繞過 Windows BitLocker 加密**

新技術 GreatXML 通過利用復原分割區工具中的 XML 解析器行為來繞過 Windows BitLocker 加密。此攻擊需實體接觸，但證明了**全碟加密**本身不足以抵禦有針對性的攻擊。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/new-greatxml-exploit-bypasses-windows.html)

📌 **Ivanti Sentry 嚴重漏洞在揭露後 24 小時內被利用**

Ivanti Sentry 的關鍵漏洞在其修補程式發布後 **24 小時內**即被武器化，凸顯邊緣設備漏洞的安全窗口正急遽縮小。Ivanti Sentry 廣泛用於企業 VPN 和安全存取。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/max-severity-ivanti-sentry-flaw-exploited-24-hours)

📌 **Langflow CVE-2026-5027 — 未修補的未經認證 RCE 漏洞遭利用**

流行的 AI 工作流程開發平台 Langflow 的嚴重漏洞正被用於**未經認證的遠端程式碼執行**攻擊。發布報告時尚無修補程式。運行 Langflow 的組織應立即將其與生產網路隔離。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/unpatched-langflow-flaw-cve-2026-5027.html)

📌 **OpenClaw AI Agent 攻擊 — 提示注入導致程式碼執行和機密外洩**

針對 **OpenClaw AI agent** 框架的新型攻擊展示了提示注入如何導致**任意程式碼執行**和**機密資料外洩**。企業部署具工具存取權的 AI agent 時，此類攻擊構成日益嚴重的威脅。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/new-attacks-trick-openclaw-ai-agent.html)

📌 **Meta 指控 NSO Group 違反法院命令 — 繼續攻擊 WhatsApp**

Meta 提交新指控，稱 NSO Group 違反美國法院禁令，繼續開發和部署 **Pegasus 間諜軟體**針對 WhatsApp 使用者。此次升級顯示 NSO 的活動已超出先前法律和解的範圍。

🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/06/09/meta-nso/)

### OPSWAT 能做什麼

今日多項威脅凸顯了 OPSWAT 解決方案所能提供的關鍵縱深防禦：
- **Miasma 供應鏈蠕蟲** — MetaDefender 的**深度 CDR 和多引擎掃描**可在惡意負載傳播前於 CI/CD 成品中偵測
- **破紀錄 Patch Tuesday（206 個 CVE）** — MetaDefender Vulnerability Management 提供跨攻擊面的統一修補優先順序
- **GreatXML BitLocker 繞過** — MetaDefender **CDR** 透過剝離文件中的動態內容消除 XML 攻擊
- **WinRAR/Exchange/PeopleSoft 漏洞** — MetaDefender **多引擎掃描**（超過 30 個防毒引擎）可捕捉單一引擎解決方案遺漏的零時差惡意軟體
- **Langflow/OpenClaw AI 攻擊** — MetaDefender 的 AI 管線主動式 **DLP** 防止提示注入和機密外洩
- **Check Point VPN 零時差** — MetaDefender **網路安全**解決方案為邊緣設備提供周邊防禦
