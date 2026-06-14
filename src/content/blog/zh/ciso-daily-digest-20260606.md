---
title: "CISO 每日摘要：Check Point VPN 零時差漏洞危機 (20260606)"
description: "Check Point VPN 漏洞遭 Qilin 勒索軟體積極利用；美國 CISA 下達 4 天修補令；Silent Ransom 集團鎖定美國律師事務所；Meta 阻止 NSO 集團 WhatsApp 釣魚攻擊；Anthropic 警告 Mythos 可將修補程式武器化。"
pubDate: 2026-06-06
tags: ["VPN", "零時差漏洞", "勒索軟體", "供應鏈安全", "國家級威脅"]
author: "Security Solutions Team"
featured: true
---

## Check Point VPN 零時差漏洞（CVE-2026-50751）助長勒索軟體攻擊

Check Point VPN 閘道器中的一個重大零時差漏洞已演變為不斷升級的危機，**Qilin 勒索軟體集團**正在積極利用該漏洞，CISA 已發布緊急指令，要求聯邦機構在 **4 天內**完成修補。

- CVE-2026-50751 針對 Check Point Quantum Security Gateway 和 CloudGuard Network Security 中的 **IKEv1** 實作，允許攻擊者完全繞過密碼驗證
- 此漏洞自**2026 年 5 月初**起已被利用，多個威脅行為者利用其進行初始存取
- **Qilin 勒索軟體**已將此漏洞武器化，針對企業目標發動活躍攻擊
- CISA 已將 CVE-2026-50751 及相關的 CVE-2026-50752 新增至**已知被利用漏洞（KEV）**目錄，並設定緊急修補期限
- Check Point 已確認活躍利用情況並發布熱修復；敦促組織立即套用修補程式，並檢查 VPN 日誌中是否有未經授權的存取跡象

此漏洞從披露到被勒索軟體積極利用之間的速度——以及要求 4 天修補的積極聯邦回應——凸顯了 VPN 基礎設施作為攻擊面的關鍵性。安全團隊應立即驗證所有 Check Point VPN 設備的修補狀態，檢查驗證日誌中是否有異常的 IKEv1 流量，並實施網路分段以限制來自 VPN 存取點的橫向移動。

🔗 **參考資料：** 全面報導（[The Hacker News](https://thehackernews.com/2026/06/critical-check-point-vpn-flaw-exploited.html) | [DarkReading](https://www.darkreading.com/vulnerabilities-threats/check-point-vpn-flaw-exploited-early-may) | [iThome: Qilin 勒索軟體活動](https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtTUM2YXZPQjBuZkt4RVJsUVdnNEtjdjZYb2xIY2dQVVFmclA3bUEzblNyQVZJcThOQ05jdmprRmFvOGxYNW96cUlqSkxZUQ?oc=5) | [iThome: 美國要求 4 天修補](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RcUtkdWNKX09vVWhsNGllSXpWS0x6RXZEZXo4QWZnc1pZcHg4RUlhMDRwWEV2T093Qks1ZG5ldTZZTDZZVk1YZ2MzeVdFUQ?oc=5))

## 本週活躍威脅

📌 **Silent Ransom 集團鎖定美國律師事務所進行勒索攻擊**

被追蹤為 **Silent Ransom** 的威脅集團正對**美國律師事務所**進行一系列不斷升級的勒索攻擊，竊取敏感的客戶資料並威脅公開披露。該集團結合使用**網路釣魚、憑證竊取和 VPN 漏洞利用**進行初始存取。律師事務所——相較於其他關鍵基礎設施行業傳統上安全防護不足——被敦促實施多因素驗證、網路分段，並定期進行備份測試。

🔗 **參考資料：** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/silent-ransom-us-law-firms-extortion-attacks)

📌 **Meta 阻止 NSO 集團新的 WhatsApp 釣魚攻擊，提交藐視法庭動議**

Meta 已瓦解 **NSO 集團**針對 WhatsApp 用戶的**新釣魚攻擊行動**，並提交藐視法庭動議，指控其違反先前的法律協議。該攻擊使用了透過惡意訊息附件傳遞的**零點擊漏洞**。將 WhatsApp 用於商業通訊的組織應確保裝置已更新，並監控異常帳戶活動。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/meta-blocks-nso-groups-new-whatsapp.html)

📌 **伊朗駭客無視停火協議持續活躍**

儘管伊朗簽署了停火協議，但與伊朗有關聯的駭客集團仍持續對全球的**關鍵基礎設施、政府機構和國防承包商**進行攻擊性網路行動。外交協議與持續的網路攻擊之間的脫節，突顯了無論地緣政治局勢如何發展，維持穩健防禦態勢的重要性。

🔗 **參考資料：** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/iran-signed-ceasefire-hackers)

📌 **LiteLLM 漏洞（CVE-2026-42271）在野外遭利用，導致未經驗證的遠端程式碼執行**

**LiteLLM**（一個開源 LLM 代理和 API 管理工具）中的一個重大漏洞正被積極利用，使攻擊者能夠將其串聯成**未經驗證的遠端程式碼執行（RCE）**。在 AI 應用管道中使用 LiteLLM 的組織應立即套用修補程式，並限制對管理介面的網路存取。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/litellm-flaw-cve-2026-42271-exploited.html)

📌 **C0XMO 殭屍網路利用舊版 DD-WRT 漏洞感染 DVR 和 Android 裝置**

被追蹤為 **C0XMO** 的殭屍網路正利用**舊版 DD-WRT 韌體漏洞**大規模感染 DVR、Android 裝置和 IoT 硬體。該殭屍網路被用於 **DDoS 攻擊和加密貨幣挖礦**。組織應清查並分隔 IoT 設備，並更換任何執行已終止支援韌體的設備。

🔗 **參考資料：** [iThome: C0XMO 殭屍網路](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kR1kyZldaeEluajY2bUFnMVFibmgtcDRSTmJEWFdzMnVDZmVDQVVFZndhSklSeHFYOTZGUnZGaEF4WVkyNDJfZmZwa2pHQQ?oc=5) | [iThome: Nday 漏洞](https://news.google.com/rss/articles/CBMiY0FVX3lxTFBtSDY3V2ZlaHNLWWFiNzBybElub2F1SDdNNzFRaUg4VjQ0aUtrR3p3cGxZR0lsdGVtaExVRmJlbHdmRy11Y0o1NDdrWklubi14amlSOFo3Y3k0TTB3WVhvNFE0WQ?oc=5)

📌 **惡意 Chrome 擴充套件鎖定 AI 平台互動內容**

威脅行為者已部署**惡意 Chrome 擴充套件**，旨在監控並竊取使用者與 **AI 平台**（包括 ChatGPT、Claude 和 Gemini）的互動內容。這些擴充套件會擷取對話資料、API 金鑰以及輸入 AI 介面的敏感資訊。安全團隊應稽核瀏覽器擴充套件清單，並透過群組原則限制擴充套件安裝。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE93NkxRY19vVkc5LXFKWlI3ckJzWXpoQWczTG5LUkV0T01TdXRRMHJfOUdVd2IxcHdhNktFNWlHMklVaUNzZkREd3dTVFZLdw?oc=5)

📌 **MariaDB 修補多項漏洞，含 CVSS 10.0 重大缺陷**

MariaDB 發布安全更新，修補了**多個漏洞**，其中一個被評為 **CVSS 10.0（重大）**，可能導致資料庫完全被入侵。所有 MariaDB 部署應立即更新，特別需關注面向網際網路的資料庫實例。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWOEpyU0FYbVN0aTQ1ZHJmbUtsM3JDMm1EbG1oZVY2OUhsR2h6OUI4M0ZZaFdFWnNud2h4ZGpFaC1PdzRvZ003ZHZ5R2pQQQ?oc=5)

## OPSWAT可以怎麼幫上忙

Check Point VPN 零時差漏洞遭 Qilin 勒索軟體利用，突顯了網路邊界多層次檔案檢測的關鍵重要性。OPSWAT MetaDefender 的**深度內容拆除與重組（Deep CDR）**技術能夠透過移除潛在惡意物件同時保留文件可用性，來消除 VPN 傳遞檔案中的威脅。結合**30 多個防毒引擎的多引擎掃描**，OPSWAT 解決方案為針對 VPN 基礎設施的零時差漏洞提供了縱深防禦。
