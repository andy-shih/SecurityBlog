---
title: "CISO 每日摘要：勒索軟體與資料破壞攻擊 (20260428)"
description: "每日資安重點事件與威脅摘要 — 2026-04-28"
pubDate: 2026-04-28
tags: ["CISO", "資安", "每日摘要", "威脅情資"]
author: "Security Solutions Team"
featured: true
---

## VECT 2.0 Ransomware Irreversibly Destroys Files Over 131KB on Windows, Linux, ESXi

本日資安焦點為 **VECT 2.0 Ransomware Irreversibly Destroys Files Over 131KB on Windows, Linux, ESXi**。

**事件脈絡：**

- VECT 2.0 Ransomware Irreversibly Destroys Files Over 131KB on Windows, Linux, ESXi
- 蠕蟲程式GlassWorm透過73個VS Code延伸套件潛伏於Open VSX儲存庫
- RPC零時差漏洞PhantomRPC可被用於提升權限
- 韓國KISA首度啟動安全漏洞清理服務，首波因應目標是WGear網銀RCE漏洞
- Npm-пакет Bitwarden взломали ради кражи учетных данных разработчиков

企業組織應檢視相關安全公告，確保防護措施已更新至最新狀態。

🔗 **參考資料：** 綜合報導（[報導](https://thehackernews.com/2026/04/vect-20-ransomware-irreversibly.html)）

---

## 本週活躍威脅

📌 **蠕蟲程式GlassWorm透過73個VS Code延伸套件潛伏於Open VSX儲存庫**

此攻擊鎖定 VS Code 擴充功能。開發者應審核已安裝的擴充功能與發布者身分。

📌 **RPC零時差漏洞PhantomRPC可被用於提升權限**

此未修補的 Windows 權限提升漏洞，建議在官方修補發布前套用緩解措施。

📌 **韓國KISA首度啟動安全漏洞清理服務，首波因應目標是WGear網銀RCE漏洞**

此漏洞需要評估和優先排序。找出受影響系統並依風險套用修補程式。

📌 **Npm-пакет Bitwarden взломали ради кражи учетных данных разработчиков**

🔗 **Reference:** [來源](https://xakep.ru/2026/04/28/bitwarden-hack/)

📌 **Unpatched 'PhantomRPC' Flaw in Windows Enables Privilege Escalation**

此未修補的 Windows 權限提升漏洞，建議在官方修補發布前套用緩解措施。

🔗 **Reference:** [來源](https://www.darkreading.com/vulnerabilities-threats/unpatched-phantomrpc-flaw-windows-privilege-escalation)

📌 **HTB Sorcery. Захватываем домен FreeIPA**

🔗 **Reference:** [來源](https://xakep.ru/2026/04/27/htb-sorcery/)

📌 **Study says there's 'no longer an excuse' for releasing AI models that 'reinforce user delusions'**

📌 **PhantomRPC**

此未修補的 Windows 權限提升漏洞，建議在官方修補發布前套用緩解措施。

📌 **Critical Unpatched Flaw Leaves Hugging Face LeRobot Open to Unauthenticated RCE**

🔗 **Reference:** [來源](https://thehackernews.com/2026/04/critical-cve-2026-25874-leaves-hugging.html)

📌 **Checkmarx Confirms GitHub Repository Data Posted on Dark Web After March 23 Attack**

此資料外洩可能暴露敏感資訊。應評估曝險範圍並實施補救措施。

🔗 **Reference:** [來源](https://thehackernews.com/2026/04/checkmarx-confirms-github-repository.html)

📌 **Checkmarx證實GitHub資料遭駭客團體Lapsus$流入暗網**

此資料外洩可能暴露敏感資訊。應評估曝險範圍並實施補救措施。

📌 **CISA警告D-Link路由器命令注入漏洞被用於實際攻擊**

此漏洞需要評估和優先排序。找出受影響系統並依風險套用修補程式。

---

## OPSWAT 能做什麼

**供應鏈威脅防護：** OPSWAT MetaDefender 的多引擎掃描（30+ 防毒引擎）與 CDR 技術，可在下載套件進入企業系統前進行檢查。可部署為 CI/CD 流程的檔案驗證閘道。



**惡意軟體與勒索軟體防禦：** OPSWAT Deep CDR 可移除檔案中的動態內容，中和嵌入式威脅（包括零時差漏洞），結合多引擎掃描提供深度防禦。
