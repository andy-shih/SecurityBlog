---
title: "CISO 每日摘要：Checkmarx 供應鏈攻擊 — KICS Docker 映像與 VS Code 擴充套件遭入侵 (20260423)"
description: "Checkmarx 遭供應鏈攻擊，KICS Docker 映像與 VS Code 擴充套件被入侵；Harvester 組織使用 Microsoft Graph API 部署 Linux GoGra 後門；Apple 修補 iOS 通知漏洞；The Gentlemen 勒索軟體崛起；Bitwarden NPM 套件在持續攻擊中遭駭"
pubDate: 2026-04-23
tags: ["CISO Daily Digest", "\u8cc7\u5b89", "\u5a01\u8105\u60c5\u8cc7"]
author: "Security Solutions Team"
featured: true
---

## Checkmarx 供應鏈攻擊 — KICS Docker 映像與 VS Code 擴充套件遭入侵

應用安全公司 Checkmarx 遭遇**供應鏈攻擊**，惡意行為者入侵了 KICS Docker 映像與 VS Code 擴充套件。攻擊進一步擴大，**Bitwarden 的 NPM 套件**也在持續的攻擊活動中遭駭。此事件凸顯**應用安全工具鏈本身**如何成為攻擊向量，被入侵的掃描工具可能將惡意軟體散佈給下游客戶。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/04/malicious-kics-d) | [The Hacker News](https://thehackernews.com/2026/04/bitwarden-cli-co)

---

## 本週活躍威脅

📌 **Harvester 組織使用 Microsoft Graph API 部署 Linux GoGra 後門**

Harvester 威脅組織部署了 **GoGra 後門的 Linux 變種**，針對南亞組織。該惡意軟體使用 **Microsoft Graph API** 進行命令與控制通訊，融入合法的 Office 365 流量以躲避偵測。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/harvester-deploy)

📌 **The Gentlemen 勒索軟體迅速崛起**

Dark Reading 報導，'The Gentlemen' 勒索軟體集團已成為 **2026 年第二季最多產的勒索軟體組織之一。** 該集團的迅速崛起反映了其積極的聯盟招募與複雜的加密技術。透過 SystemBC C2 基礎設施分析，已識別 **超過 1,570 名受害者。**

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/threat-intelligence/ge)

📌 **Apple 修補 iOS 漏洞 — 已刪除的 Signal 通知內容殘留於 FBI 可取用備份**

Apple 修補了一個 iOS 漏洞，該漏洞導致**已刪除的 Signal 通知內容**仍保留在可透過 FBI 請求存取的 iCloud 備份中。此隱私缺陷引發了對**加密通訊資料持久性**及「對所有人刪除」功能限制的重大擔憂。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/apple-patches-io)

📌 **自我傳播供應鏈蠕蟲劫持 npm 套件**

發現一種**自我傳播的蠕蟲**劫持 npm 套件以**竊取開發者憑證。** 該蠕蟲透過入侵套件維護者帳戶並將惡意程式碼注入流行套件，在 npm 生態系統中自主傳播。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/self-propagating)

📌 **多名 JVN 通報：CMS ALAYA SQL 注入與 GROWI ReDoS**

Japan Vulnerability Notes（JVN）發布了**CMS ALAYA SQL 注入漏洞**（可能導致資料庫淪陷）與 **GROWI 正規表示式 DoS**（可透過特製輸入造成服務中斷）的通報。

🔗 **Reference:** [JVNDB](https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-0) | [JVN](https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-0)

## OPSWAT可以怎麼幫上忙

Checkmarx 供應鏈攻擊 — 安全掃描工具本身成為攻擊向量 — 是 **MetaDefender 多引擎惡意軟體偵測**的典型應用案例。透過同時以 **30+ 防毒引擎**掃描檔案，MetaDefender 可偵測任何單一掃描器可能遺漏的威脅。此外，**MetaDefender CDR** 可中和武器化的 Docker 映像與 VS Code 擴充套件檔案，移除潛在惡意巨集、腳本與嵌入式物件，同時保留檔案功能。