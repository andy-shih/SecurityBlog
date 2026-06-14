---
title: "CISO 每日摘要：Windows Defender 漏洞、SystemBC 與 Lotus Wiper (20260422)"
description: "Windows Defender 零時差漏洞 PoC 遭公開，將防毒引擎變為攻擊工具；SystemBC C2 伺服器揭露 1,570+ 勒索軟體受害者；BlackCat 勒索軟體談判者認罪；Lotus Wiper 攻擊委內瑞拉能源系統；Microsoft 修補 ASP.NET Core 提權漏洞；Mustang Panda 部署新 LOTUSLITE 變種"
pubDate: 2026-04-22
tags: ["CISO Daily Digest", "\u8cc7\u5b89", "\u5a01\u8105\u60c5\u8cc7"]
author: "Security Solutions Team"
featured: true
---

## Windows Defender 零時差漏洞轉安全軟體為攻擊工具

安全研究人員發布了 **Microsoft Defender 零時差漏洞** 的 PoC 攻擊程式，將防毒引擎轉變為攻擊工具。這些漏洞（暫無可用修補程式）允許攻擊者濫用 Defender 的掃描引擎進行權限提升與程式碼執行。此舉引發了對複雜安全軟體攻擊面安全影響的迫切討論。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-brea)

---

## 本週活躍威脅

📌 **SystemBC C2 伺服器揭露 The Gentlemen 勒索軟體 1,570+ 受害者**

對 SystemBC 命令與控制伺服器的分析揭露了 **超過 1,570 名** 'The Gentlemen' 勒索軟體操作的受害者。數據顯示該組織的全球觸及範圍與其勒索軟體即服務（RaaS）營運規模，使其成為 **2026 年第二季最活躍的勒索軟體組織之一。**

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/systembc-c2-serv)

📌 **BlackCat 勒索軟體談判者聯邦法院認罪**

一名協助 BlackCat/ALPHV 勒索軟體集團進行贖金談判的中間人在聯邦法院對共謀指控認罪。該個人擔任受害者與勒索軟體集團之間的中介，協助談判支付金額並提供技術支援。這是 **首例勒索軟體談判者被成功起訴的案件。**

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/ransomware-negot) | [Dark Reading](https://www.darkreading.com/insider-threats/ransom)

📌 **Lotus Wiper 惡意軟體攻擊委內瑞拉能源系統**

安全研究人員發現名為 'Lotus' 的新型破壞性惡意軟體，針對**委內瑞拉能源部門基礎設施。** 該破壞性惡意軟體旨在覆寫關鍵系統檔案並對工業控制系統（ICS）造成永久性損害，引發對國家級駭客攻擊關鍵基礎設施的擔憂。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/lotus-wiper-malw)

📌 **Mustang Panda 部署新 LOTUSLITE 變種針對印度銀行與南韓**

與中國有關的 Mustang Panda APT 組織部署了 **LOTUSLITE 後門的新變種**，針對印度金融機構與南韓外交政策圈。更新後的惡意軟體使用進階規避技術，並利用 Microsoft Graph API 進行 C2 通訊。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/mustang-pandas-n)

📌 **Microsoft 修補 ASP.NET Core CVE-2026-40372 提權漏洞**

Microsoft 發布了 **CVE-2026-40372** 的修補程式，這是 ASP.NET Core DataProtection 中的一個重大權限提升漏洞。受影響環境需要**同時升級並輪換加密金鑰**以完成修復。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/microsoft-patche)

📌 **Cohere AI Terrarium 沙箱漏洞導致 Root 權限程式碼執行**

Cohere AI Terrarium 沙箱環境中的漏洞被揭露，允許**容器逃逸與 root 權限程式碼執行。** 此漏洞可讓攻擊者突破 AI 沙箱保護並存取底層基礎設施。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/cohere-ai-terrar)
