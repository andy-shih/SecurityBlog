---
title: "CISO 每日摘要：Anthropic 建立藥物發現實驗室 (20260922)"
description: "Anthropic 在舊金山灣區悄悄建立溼式實驗室，用於 AI 驅動的藥物發現。同時，FBI 查獲 NightmareStresser 網域，這是全球協調打擊 DDoS 租賃基礎設施的行動。Claude Code 新增對 OpenAI Agents.md 格式的支援。"
pubDate: 2026-09-09-22
tags: [anthropic, ai-治理, 藥物發現, ddos, 威脅情報, fbi, 基礎設施清除]
author: "資安解決方案團隊"
featured: true
---

## Anthropic 將 AI 能力延伸至罕見疾病藥物發現

Anthropic 已在舊金山灣區悄悄建立溼式實驗室，用於推進其人工智慧在藥學開發中的應用。此舉表明該公司認真致力於在傳統製藥公司忽視的領域部署 Claude AI 進行藥物發現工作。

該實驗室支撐 Anthropic 更廣泛的生命科學策略，其中包括以約 4 億美元股票收購 Coefficient Bio，以及聘任 Novartis 執行長 Vas Narasimhan 加入董事會。Anthropic 生命科學部門主管 Eric Kauderer-Abrams 證實了該實驗室的存在，並解釋公司正在開發工具，以找到並開發治療「無法成藥」疾病的方法——這些疾病過去被認為難以靶向治療。

Anthropic 正透過 AI 引導的機器人系統來自動化實驗室執行工作，但公司強調人類監督在安全方面仍不可或缺。這份基礎設施投資代表了在 AI 部署監管達到歷史高峰之際的重大資本承諾。

### 為什麼這擴展了 Anthropic 的競爭定位

這個實驗室不只是研究設施；它是戰略基礎設施布局。透過將 AI 模型能力與實際生物技術營運結合，Anthropic 正從軟體專用應用跨進資本密集、受監管的產業。該公司透過投資有形、救命的應用，來降低 AI 長期生存的風險。在醫療與製藥部門招聘生技人才與基礎設施，也強化了 Anthropic 與這些產業的董事級關係。

🔗 **參考資料：** ([CNBC](https://cnbc.com/2026/09/18/anthropic-quietly-sets-up-biology-lab-as-it-ramps-ai-drug-program-report.html), [Reuters](https://wifc.com/2026/09/18/exclusive-anthropic-quietly-sets-up-biology-lab-as-it-ramps-ai-drug-program), [NY Post](https://nypost.com/2026/09/18/business/anthropic-quietly-sets-up-biology-lab-as-it-ramps-ai-drug-program))

---

## 本週活躍威脅

📌 **FBI 與國際夥伴查獲 NightmareStresser DDoS 租賃平台**

美國聯邦調查局 (FBI)、加拿大皇家騎警隊及其他 19 國已查獲世界上歷時最久的分散式拒絕服務 (DDoS) 租賃服務的主要網域 (nightmare-stresser.com、nightmarestresser.org)。自 2022 年以來，NightmareStresser 協助進行了數十萬次實際及未遂的 DDoS 攻擊，目標涵蓋多個產業與地理位置的受害者。此次查獲是「PowerOFF 行動」——全球協調的執法行動，旨在清除 DDoS 租賃基礎設施並追究營運者責任——的成果。

🔗 **參考資料：** [BleepingComputer](https://www.bleepingcomputer.com/news/security/fbi-seizes-nightmarestresser-service-linked-to-thousands-of-ddos-attacks/) | [CyberScoop](https://cyberscoop.com/fbi-seizes-nightmarestresser-ddos-for-hire-domains/) | [SecurityWeek](https://www.securityweek.com/nightmarestresser-ddos-service-disrupted-in-international-operation/)

📌 **Claude Code 支援 OpenAI Agents.md 指令格式，強化工具互通性**

Anthropic 的 Claude Code 現已支援以 OpenAI Agents.md 格式撰寫的指令，擴大與 AI 驅動開發工具間的相容性。此舉降低了在標準化代理定義格式的組織中多工具 AI 工作流的摩擦。Claude Code 整合業界標準指令綱要反映了自主代理程式設計中格式標準化的更廣泛趨勢。

🔗 **參考資料：** [InfoWorld](https://www.infoworld.com/article/3701234/)

📌 **Accenture 與 Anthropic 承諾投資 20 億美元進行嵌入式 AI 安全與治理**

Accenture 與 Anthropic 宣布在嵌入式 AI 安全實踐與治理框架開發上投資 20 億美元的合作承諾。該計畫著眼於關鍵基礎設施與企業環境中的嵌入式 AI 系統，以解決在受監管與高風險領域大規模部署 Claude 的技術與組織挑戰。此一夥伴關係彰顯了治理與風險管理在模型能力開發中的重要性。

🔗 **參考資料：** [CU Today](https://cu.today/)

📌 **TASK#STOMP PowerShell 後門盜取文件、Wi-Fi 憑證與剪貼簿資料**

資安研究人員紀錄了 TASK#STOMP，一個基於 PowerShell 的後門，從被入侵的 Windows 系統中竊取包括文件、已儲存 Wi-Fi 憑證與剪貼簿內容等敏感資料。該惡意軟體展示了針對知識工作者與技術人員的進化後開發漏洞利用能力，特別是針對憑證竊取與資料外洩。組織應監控可疑 PowerShell 執行，並實施應用程式白名單以限制未簽名或攻擊者控制指令碼的執行。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/taskstomp-powershell-backdoor-steals.html)

📌 **週刊摘要：Cisco 零日、AI 代理遠端執行、ClickFix 活動擴大、瀏覽器劫持變種**

週報摘錄了多個活躍的攻擊向量：Cisco 平台零日 (建議立即修補)、AI 代理框架中的遠端執行漏洞、持續進行的 ClickFix 網路釣魚活動及技術改進，以及針對使用者會話的瀏覽器劫持變種。這些威脅的匯聚表明攻擊者日益同時針對舊有基礎設施與新興 AI 部署管線。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/weekly-recap-cisco-0-day-ai-agent-rce.html)

---

## OPSWAT 可以怎麼幫上忙

對於在內部部署 Claude Code 與其他 AI 驅動開發工具的組織，OPSWAT MetaDefender 提供以下檔案層級的掃描與內容清除：
- **嵌入於開發成品、相依性檔案或建置輸出中的惡意指令與後門** (例如 TASK#STOMP、剪貼簿竊取工具)
- **套件供應鏈威脅** (DDoS 租賃基礎設施程式碼、惡意 npm/PyPI 套件) 可能被拉入 CI/CD 管線
- **端點檢測** 用於開發工作流中的可疑 PowerShell 執行與剪貼簿竊取活動

實時多引擎掃描可比任何單一安全工具更快地捕捉零日與新變種，在部署前保護 AI 開發基礎設施。
