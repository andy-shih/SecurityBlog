---
title: "CISO 每日摘要：Check Point VPN 零時差漏洞危機加劇 (20260609)"
description: "Check Point VPN 零時差漏洞遭 Qilin 勒索軟體利用，CISA 限期 4 天內修補；Miasma 蠕蟲攻擊 70 多個微軟 GitHub 儲存庫；Chrome V8 零時差漏洞；Meta 阻止 NSO 集團的 WhatsApp 釣魚攻擊；自我複製 AI 蠕蟲現身。"
pubDate: 2026-06-09
tags: ["漏洞", "惡意軟體", "供應鏈攻擊", "勒索軟體", "釣魚攻擊", "VPN"]
author: "Security Solutions Team"
featured: true
---

## Check Point VPN 零時差漏洞遭 Qilin 勒索軟體利用

本週 Check Point VPN 零時差漏洞事件持續升溫，**Qilin 勒索軟體集團**已將 IKEv1 認證繞過漏洞（CVE-2026-50751 / CVE-2026-50752）武器化，用於活躍的勒索軟體攻擊活動。

- Check Point 的 Quantum Security Gateway 和 CloudGuard Network Security 產品受到此 IKEv1 認證繞過漏洞影響，攻擊者可繞過密碼認證直接進入受保護網路
- **Qilin 勒索軟體**已被觀察到利用此漏洞在受保護網路內部部署惡意負載，標誌著首次已知利用此漏洞的勒索軟體攻擊活動
- **CISA** 已要求所有美國聯邦機構在 **4 天內**完成修補——這是異常緊迫的時間表
- Check Point 已於 6 月 4 日發布修補程式，安全團隊應立即確認部署狀態

VPN 漏洞在修補發布數日內即被主要勒索軟體集團武器化，突顯了從漏洞公開到被利用之間的窗口期正在急劇縮短。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/06/critical-check-point-vpn-flaw-exploited.html) | [DarkReading](https://www.darkreading.com/vulnerabilities-threats/check-point-vpn-flaw-exploited-early-may) | [iThome: Qilin 勒索軟體利用](https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtTUM2YXZPQjBuZkt4RVJsUVdnNEtjdjZYb2xIY2dQVVFmclA3bUEzblNyQVZJcThOQ05jdm) | [iThome: CISA 4天修補令](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RcUtkdWNKX09vVWhsNGllSXpWS0x6RXZEZXo4QWZnc1pZcHg4RUlhMDRwWEV2T093Qks1ZG5l))

## 本週活躍威脅

📌 **Miasma 蠕蟲入侵 70 多個微軟 GitHub 儲存庫**

**Miasma 蠕蟲**持續擴大供應鏈攻擊，已入侵超過 **70 個微軟擁有的 GitHub 儲存庫**，並在感染後 **兩分鐘內**自動刪除儲存庫內容。這是針對單一供應商代碼基礎設施的最大規模供應鏈攻擊之一。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/miasma-worm-hits-73-microsoft-github.html) | [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2dk5GWlBhdzRoWXhzbzRuRXg2b1MyVWtteGN3T2QwbWZmbUNFbTNVNy1GbWpacHJJRTJZZzR1S)

📌 **Hades PyPI 攻擊：19 個套件遭植入 Bun 憑證竊取器**

針對 **PyPI** 的 **Hades 攻擊行動**透過惡意 **Bun 執行環境**的憑證竊取器，在 **19 個套件**中植入惡意程式碼，在安裝時即自動執行。這標誌著攻擊工具從 Python 原生向跨執行環境惡意軟體的轉變。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/hades-pypi-attack-19-packages-poisoned.html) | [DarkReading](https://www.darkreading.com/application-security/hades-campaign-pypi-shai-hulud)

📌 **Chrome V8 零時差漏洞（CVE-2026-11645）遭實際利用**

Google 確認 **Chrome V8 引擎零時差漏洞**（CVE-2026-11645）正在被積極利用。使用者應立即套用緊急 Chrome 更新，以及修補 **429 項安全漏洞**的 Chrome **149 批次更新**（含 **74 個重大/高嚴重性**問題）。

🔗 **參考資料：** [The Hacker News: V8 零時差](https://thehackernews.com/2026/06/chrome-v8-zero-day-cve-2026-11645.html) | [The Hacker News: Chrome 149](https://thehackernews.com/2026/06/ai-agent-uncovers-21-zero-days-in.html)

📌 **Meta 阻止 NSO 集團新型 WhatsApp 釣魚攻擊，提交藐視法庭申請**

**Meta** 成功阻止了 **NSO 集團**最新針對記者和人權捍衛者的 **WhatsApp 釣魚攻擊**，並提交**藐視法庭申請**，指控 NSO 違反先前的和解協議部署新的間諜軟體基礎設施。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/meta-blocks-nso-groups-new-whatsapp.html)

📌 **C0XMO 殭屍網路利用老舊 DD-WRT 漏洞感染 DVR 與 Android 裝置**

名為 **C0XMO** 的殭屍網路正利用**舊版 DD-WRT 漏洞**入侵 **DVR 和 Android 裝置**，建立大規模 IoT 殭屍網路，利用未修補的韌體進行擴散。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kR1kyZldaeEluajY2bUFnMVFibmgtcDRSTmJEWFdzMnVDZmVDQVVFZndhSklSeHFY)

📌 **Silent Ransom 集團鎖定美國律師事務所進行勒索攻擊**

**Silent Ransom 集團**加強針對**美國律師事務所**的攻擊活動，竊取敏感客戶資料並以公開曝光進行勒索。

🔗 **參考資料：** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/silent-ransom-us-law-firms-extortion-attack)

📌 **研究人員展示完全基於本地開源模型的自我複製 AI 蠕蟲**

研究人員展示了一種完全在**本地開源模型**上運作的**自我複製 AI 蠕蟲**，無需雲端 API。該蠕蟲可在 AI 代理之間傳播，竊取憑證並自主擴散到新系統，代表了一種新型的 AI 原生惡意軟體。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/researchers-build-self-replicating-ai.html)

## OPSWAT 相關

Miasma 蠕蟲與 Hades PyPI 供應鏈攻擊突顯了軟體供應鏈入侵風險的持續增長。OPSWAT MetaDefender 的多引擎掃描（整合 **30 多個防毒引擎**）與**內容拆除與重組（CDR）**技術，能夠檢測並封鎖嵌入在套件依賴項和 CI/CD 管線中的已知及未知惡意軟體變種，降低供應鏈驅動感染的風險。
