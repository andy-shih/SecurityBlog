---
title: "CISO 每日摘要：FIRESTARTER 後門、NASA 釣魚郵件與 Grok Deepfake 詐騙 (20260425)"
description: "FIRESTARTER 後門感染聯邦 Cisco Firepower 設備並躲避安全掃描；NASA 員工遭中國釣魚活動欺騙；CISA 新增 4 個 KEV 漏洞條目；Grok AI 深度偽造引發身份詐騙擔憂；卡巴斯基發現 Snapdragon 晶片組漏洞"
pubDate: 2026-04-25
tags: ["CISO Daily Digest", "\u8cc7\u5b89", "\u5a01\u8105\u60c5\u8cc7"]
author: "Security Solutions Team"
featured: true
---

## FIRESTARTER 後門躲避偵測感染聯邦 Cisco Firepower 設備

安全研究人員揭露了 **FIRESTARTER 後門**，該後門感染了聯邦 Cisco Firepower 設備並**躲過了多次安全掃描。** 該複雜惡意軟體使用進階持續機制，避開了端點保護與網路監控工具的偵測。此事件引發了對**安全設備韌體可信度**以及硬體層級完整性驗證需求的關鍵問題。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/04/firestarter-back)

---

## 本週活躍威脅

📌 **NASA 員工遭中國釣魚活動欺騙 — 針對美國國防承包商**

一場**與中國政府有關的釣魚攻擊**成功欺騙 NASA 員工，這是針對美國國防承包商與太空產業人員的更廣泛行動的一部分。攻擊者使用高度針對性的魚叉式釣魚郵件，配備**AI 生成的內容**以繞過傳統電子郵件安全過濾器。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/nasa-employees-d)

📌 **CISA 新增 4 個已遭利用漏洞至 KEV 目錄**

CISA 將 **4 個新漏洞** 加入已知遭利用漏洞（KEV）目錄，要求所有聯邦機構在 2026 年 5 月前完成修補。新增的漏洞包括目前正被積極利用的廣泛使用企業軟體漏洞。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/cisa-adds-4-expl)

📌 **Grok AI 深度偽造引發全球警報 — 假女性影片引發身份詐騙擔憂**

一段 **Grok AI 生成的深度偽造影片**在全球引發警報，凸顯了 AI 生成的合成媒體在實現**身份詐騙、名譽損害及大規模社交工程**方面的潛力。此事件顯示了深度偽造技術日益增長的普及性。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/nasa-employees-d)

📌 **卡巴斯基發現 Snapdragon 晶片組漏洞**

卡巴斯基實驗室研究人員發現了 **Qualcomm Snapdragon 晶片組的漏洞**，可能導致韌體層級的權限提升與程式碼執行。該漏洞影響廣泛的 Android 設備與 IoT 硬體。

🔗 **Reference:** [Xakep](https://xakep.ru/2026/04/24/cve-2026-25262/)

## OPSWAT 能做什麼

FIRESTARTER 後門能夠在 Cisco Firepower 設備上**躲避多次安全掃描**是**縱深防禦檔案檢測**的有力論證。MetaDefender 的**30+ 防毒引擎多引擎掃描**可提供超越設備原生偵測能力的第二意見。**韌體層級持續機制**也凸顯了 OPSWAT 的 **MetaDefender CDR（適用於韌體映像）**與 **TrustNo.one（用於設備狀態評估）**的價值。