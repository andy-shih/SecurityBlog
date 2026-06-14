---
title: "CISO 每日摘要：Vercel 資料外洩與 SGLang 重大漏洞 (20260421)"
description: "Vercel 員工 AI 工具遭駭導致資料外洩；SGLang 的 CVE-2026-5760 重大漏洞允許透過惡意 GGUF 模型執行任意程式碼；CISA 新增 8 個漏洞至 KEV 目錄；中國 APT 針對印度銀行與韓國政策圈；NGate 攻擊活動入侵巴西 NFC 支付"
pubDate: 2026-04-21
tags: ["CISO Daily Digest", "\u8cc7\u5b89", "\u5a01\u8105\u60c5\u8cc7"]
author: "Security Solutions Team"
featured: true
---

## Vercel 因第三方 AI 工具遭駭導致資料外洩

雲端開發平台 Vercel 因員工的第三方 AI 工具帳號遭入侵而發生資料外洩事件。攻擊者利用遭入侵的 AI 工具存取權限竊取敏感公司資料，凸顯 AI 工具整合在開發環境中所帶來的日益增長的攻擊面。

這起事件據信源於兩個月前 AI 公司 Context 遭竊資軟體攻擊的安全事件，說明了 AI 供應鏈攻擊如何在生態系統中連鎖擴散。

🔗 **參考資料：** Vercel 駭侵事件報導（[Dark Reading](https://www.darkreading.com/application-security/v)、[Xakep](https://xakep.ru/2026/04/21/vercel-hack/)）

---

## 本週活躍威脅

📌 **SGLang CVE-2026-5760 — 惡意 GGUF 模型觸發 RCE（CVSS 9.8）**

AI 推論框架 SGLang 的重大遠端程式碼執行漏洞，允許攻擊者透過精心偽造的 GGUF 模型檔案執行任意程式碼。**CVSS 9.8** 的嚴重評分，僅需載入惡意模型檔案即可觸發，對 AI/ML 管線構成嚴重的供應鏈風險。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/sglang-cve-2026-)

📌 **CISA 新增 8 個已遭利用漏洞至 KEV 目錄**

CISA 將 **8 個已被積極利用的漏洞** 加入已知遭利用漏洞（KEV）目錄，要求所有聯邦機構在 2026 年 5 月前完成修補。其中包含 Apache ActiveMQ 的漏洞，目前仍有約 **6,400 台未修補伺服器** 暴露於風險中。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/cisa-adds-8-expl)

📌 **中國 APT 針對印度銀行與韓國政策研究機構**

中國政府支持的 APT 組織被發現針對印度金融機構與韓國外交政策研究組織。攻擊活動使用複雜的魚叉式釣魚郵件與自訂惡意軟體，**竊取敏感的金融與地緣政治情報。**

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-brea)

📌 **NGate 攻擊活動偽裝 HandyPay 應用程式竊取 NFC 資料**

NGate 攻擊活動針對巴西使用者，將合法的 HandyPay 支付應用程式植入木馬，**竊取 NFC 資料與支付憑證。** 惡意軟體攔截 NFC 交易以克隆感應式支付卡，實現實體支付詐欺。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/ngate-campaign-t)

📌 **Operation PowerOFF 關閉 53 個 DDoS 網站，識別 75,000 名客戶**

執法機構的 Operation PowerOFF 行動關閉了 **53 個** 涉及 DDoS 租用服務的網域，並識別了 **75,000 名** 購買這些服務的客戶。這是迄今為止最大的壓力測試服務取締行動之一。

🔗 **Reference:** [Xakep](https://xakep.ru/2026/04/20/new-poweroff/)

📌 **Google 修補 Antigravity IDE 重大漏洞 — 提示注入導致程式碼執行**

Google 修補了 Antigravity AI 開發工具的重大漏洞，該漏洞允許透過**提示注入繞過沙箱保護執行任意指令。** 此漏洞可讓攻擊者透過精心設計的提示繞過沙箱防護執行任意程式碼。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/google-patches-a)

## OPSWAT可以怎麼幫上忙

Vercel 資料外洩事件再次凸顯 CI/CD 管線中多層檔案安全的重要性。MetaDefender 的 **Content Disarm and Reconstruction（CDR）技術** 可中和武器化的 AI 模型檔案（GGUF、Safetensors）與開發工件，同時 **MetaDefender ICAP Server** 可與 Web Proxy 整合，掃描所有 AI 工具整合中的檔案上傳/下載。