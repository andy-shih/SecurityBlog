---
title: "CISO 每日摘要：五角大廈證實使用 Grok AI 發射 2,000 枚飛彈打擊伊朗 (20260618)"
description: "五角大廈 AI 主管在法院文件中證實，xAI 的 Grok 聊天機器人已被用於協調 2,000 枚美國飛彈對伊朗的打擊行動，成為商業 AI 模型投入實戰的里程碑。同場加映：超過 30,000 台 Fortinet 設備遭憑證竊取攻擊、INC 勒索軟體超過 830 家受害、微軟揭露 Windows Clipper USB 蠕蟲、DragonForce 駭客濫用 Microsoft Teams 隱藏 C2 流量。"
pubDate: 2026-06-18
tags: [ciso, 每日摘要, 資安, 軍事AI, grok, 五角大廈, 伊朗, fortinet, 勒索軟體, 供應鏈]
author: "Security Solutions Team"
featured: true
---

## Grok AI 參戰：五角大廈證實聊天機器人參與伊朗飛彈打擊

美國五角大廈數位與 AI 主管在聯邦法院文件中正式證實，xAI 開發的 **Grok 聊天機器人** 已在「史詩之怒行動」（Operation Epic Fury）中投入作戰使用，協助協調 **約 2,000 枚飛彈** 對伊朗軍事目標的打擊。這項揭露是商業大型語言模型首次被確認投入美軍實戰，並透過一起不相關的環境訴訟意外曝光。

- 五角大廈官員在法院文件中確認，Grok 被用於 **即時戰損評估**、目標優先級排序和 **飛彈軌跡優化**
- 這是 **首次確認** 商業 AI 模型在美國主動軍事行動中發揮作戰功能
- 文件是在司法部介入 xAI 孟菲斯資料中心的 NAACP 環境污染訴訟時附帶揭露的
- 此事件引發對 AI 在 **動能作戰中監督機制** 的迫切質疑，以及消費級 AI 產品被重新用於軍事用途的倫理問題

### 這對軍事 AI 治理的深遠影響

1. **商業 AI 跨越盧比孔河：** Grok 是消費級聊天機器人，卻被用於戰場協調——開創了先例。各大 AI 實驗室（OpenAI、Anthropic、Google DeepMind）將面臨定義軍事用途界限的壓力。

2. **究責與法律漏洞：** 這項揭露來自民事環境訴訟而非軍事透明化程序，凸顯 AI 輔助動能作戰缺乏明確的法律框架。若 AI 驅動的目標鎖定造成附帶損害，責任歸屬仍無法定義。

3. **出口管制與 AI 軍備競賽：** 川普政府已針對 Anthropic Fable 5 實施 AI 出口管制，如今一款美國商業 AI 系統被用於實戰，將加速國際 AI 軍備管制談判，同時向競爭對手證明了 AI 的軍事價值。

🔗 **參考資料：** 綜合報導（[The Debrief](https://thedebrief.org/grok-goes-to-war-pentagon-reveals-musks-ai-chatbot-launched-missiles-in-u-s-war-with-iran/)、[The Hill](https://thehill.com/policy/defense/pentagon-ai-chief-musk-grok-chatbot-iran-missiles/)、[Common Dreams](https://www.commondreams.org/news/grok-ai-iran-strikes)、[Yahoo News](https://news.yahoo.com/pentagon-used-elon-musk-ai-bot-grok-to-fire-2000-missiles-at-iran/)）

---

## 本週活躍威脅

📌 **超過 30,000 台 Fortinet 設備遭憑證竊取攻擊**
一場大規模憑證竊取攻擊已入侵全球 **超過 30,000 台 Fortinet 設備**，攻擊者利用已知漏洞取得管理員權限並部署憑證竊取程式。受害對象涵蓋政府、金融和關鍵基礎設施領域。Fortinet 已釋出修補程式，但大量設備仍未更新。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/sweeping-credential-harvesting-heist-compromises-30k-fortinet-devices)

📌 **INC 勒索軟體：2023 年以來超過 830 家受害**
INC 勒索軟體集團持續擴大營運規模，2023 年成立至今已確認超過 **830 家受害者**。該組織鎖定醫療、教育和政府機構，採用雙重勒索策略。近期活動大量使用 **Cobalt Strike** 進行橫向移動。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html)

📌 **微軟揭露 Windows Clipper USB 蠕蟲攻擊**
微軟發布了針對新型 Clipper 惡意軟體的分析報告。該惡意軟體透過受感染的 USB 隨身碟傳播，利用 **LNK 檔案漏洞** 替換使用者剪貼簿中的加密貨幣錢包地址。其蠕蟲式 USB 傳播能力在隔離網路和 OT 環境中尤其危險，C2 通訊使用 **Tor** 網路。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/microsoft-details-windows-clipper.html)

📌 **DragonForce 駭客濫用 Microsoft Teams 隱藏 C2 流量**
DragonForce 威脅組織被發現濫用 **Microsoft Teams 中繼** 來隱藏後門命令與控制（C2）流量。透過寄生於合法的 Teams 基礎架構，攻擊者可以繞過信任 Microsoft 365 流量的網路安全控制。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/dragonforce-hackers-abuse-microsoft.html)

📌 **Fable 5 禁令為中國 AI 競爭對手開創機會**
川普政府凍結 Anthropic 的 **Fable 5** 和 **Mythos 5** 模型後，全球 AI 市場出現真空。中國 AI 實驗室（包括 DeepSeek、百度和阿里巴巴）正迅速填補缺口。自禁令生效以來，已有四個開源模型在獨立基準測試中超越了 Fable 5 的能力。
🔗 **參考資料：** 綜合報導（[Forbes](https://www.forbes.com/sites/anthropic-fable-5-ai-bargaining-table/)、[The New Stack](https://thenewstack.io/fable-5-ban-4-open-models-responded-before-anthropic-could-restore-access/)、[Cyber Magazine](https://cybermagazine.com/ai/why-us-freezing-anthropic-new-claude-models)）

📌 **孤兒 AI 代理程式構成隱藏存取風險**
隨著企業快速部署 AI 代理程式，許多組織發現了 **孤兒代理程式** ——具有活動權限但原擁有者已離職或遺忘的 AI 助理。這些代理程式類似僵屍服務帳號，但行為更難以預測。安全團隊應清查並停用未使用的 AI 代理整合。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/orphaned-ai-agents-how-to-find-hidden.html)

📌 **PCI DSS 新規：結帳頁面腳本納入合規範圍**
新的 PCI DSS 指導方針明確將 **第三方腳本** 納入支付結帳頁面的合規要求。使用分析、個人化或聊天機器人腳本的組織，必須確保這些腳本符合 PCI DSS，填補了長期的網頁支付安全盲點。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/the-scripts-on-your-checkout-page-are.html)

---

## OPSWAT可以怎麼幫上忙

本期摘要中的威脅涉及多種檔案型攻擊載具：

- **Fortinet 憑證竊取：** MetaDefender **Vulnerability Assessment** 掃描網路中未修補的 Fortinet 設備。**Multi-Scanning**（超過 30 個引擎）在憑證竊取酬載執行前加以偵測。
- **Windows Clipper USB 惡意軟體：** MetaDefender **Kiosk** 和 **MetaDefender Drive** 在檔案到達端點前對卸除式媒體進行消毒，阻斷 LNK 蠕蟲傳播。
- **孤兒 AI 代理風險：** MetaDefender **Identity Security** 協助組織發現並管理 SaaS 生態系統中的 AI 代理權限。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
