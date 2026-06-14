---
title: "CISO 每日摘要：思科 SD-WAN 身分認證繞漏洞遭積極利用與 Nginx RCE (20260515)"
description: "思科 Catalyst SD-WAN 身分認證繞過漏洞 CVE-2026-20182 已遭在野利用；F5 修補存在 18 年的 Nginx 重大漏洞；Exchange Server 漏洞經由特製郵件遭利用。"
pubDate: 2026-05-15
tags: ["CISO", "資安", "威脅情報", "每日摘要"]
author: "Security Solutions Team"
featured: true
---

本週以思科 Catalyst SD-WAN 控制器身分認證繞過漏洞（CVE-2026-20182）的在野利用作結，CISA 下令聯邦機構 3 天內修補。F5 終於修補了存在 **18 年**的 Nginx 重寫模組 RCE 漏洞，而內部部署的 Microsoft Exchange Server 漏洞（CVE-2026-42897）也已被確認透過特製郵件在攻擊中利用。FrostyNeighbor APT 被發現針對東歐政府機構進行攻擊。

## 本週活躍威脅

📌 **思科 Catalyst SD-WAN 身分認證繞過漏洞遭積極利用，CISA 要求限期修補**

CISA 確認思科 Catalyst SD-WAN 控制器的身分認證繞過漏洞（CVE-2026-20182）已在野利用，將其列入已知被利用漏洞目錄，要求聯邦機構 **72 小時**內修補。包含 UAT-8616 在內的多個威脅組織正在利用此漏洞。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168552)

📌 **F5 修補存在 18 年的 Nginx 重大 RCE 漏洞**

F5 發布了存在 **18 年**的 Nginx 重寫模組重大漏洞（CVE-2026-42945）的修補程式，該漏洞可導致未授權遠端程式碼執行，影響全球數百萬台網頁伺服器。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168547)

📌 **內部部署 Exchange Server 漏洞經由特製郵件遭利用**

內部部署 Microsoft Exchange Server 的重大漏洞（CVE-2026-42897）正經由特製郵件在攻擊中被利用，允許攻擊者在受影響的郵件伺服器上執行程式碼。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/on-prem-microsoft-exchange-server-cve.html)

📌 **TanStack 供應鏈攻擊波及 OpenAI 員工裝置**

屬於 Mini Shai-Hulud 攻擊活動的 TanStack 供應鏈攻擊影響了 OpenAI 員工的裝置，導致必須進行 macOS 更新，引發了對 AI 組織中軟體供應鏈安全的嚴重擔憂。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168553)

📌 **Google Chrome 148 修補 79 個資安漏洞**

Google 發布桌面版 Chrome 148 更新，修補了 **79** 個資安漏洞，包含多個高風險記憶體安全問題與 Use-after-free 漏洞。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168554)

---
*本摘要由精選資安新聞來源自動生成。*