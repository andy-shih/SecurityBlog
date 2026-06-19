---
title: "CISO 每日摘要：五角大廈證實 Grok AI 參與伊朗飛彈打擊 (20260619)"
description: "五角大廈 AI 主管證實 xAI 的 Grok 聊天機器人曾被用於協調 2,000 枚美國飛彈對伊朗的打擊行動，成為商業 AI 模型投入實戰的里程碑。同場加映：INC 勒索軟體 2023 年以來受害超過 830 家、F5 修補 NGINX 重大 RCE 漏洞、微軟揭露 Windows Clipper USB 蠕蟲攻擊、NastyC2 npm 惡意套件鎖定開發者、Novo Nordisk 供應鏈攻擊事件。"
pubDate: 2026-06-19
tags: [ciso, 每日摘要, 資安, 軍事AI, grok, 五角大廈, 伊朗, 勒索軟體, nginx, 漏洞]
author: "Security Solutions Team"
featured: true
---

## Grok AI 參戰：五角大廈證實 AI 參與伊朗飛彈打擊

美國五角大廈數位與 AI 主管（CDAO）正式證實，xAI 開發的 **Grok 聊天機器人** 已在美國對伊朗的軍事行動中投入作戰使用，協助協調 **約 2,000 枚飛彈** 的目標鎖定與發射作業。這項披露標誌著商業 AI 模型正式跨入軍事實戰的歷史性時刻。

- 五角大廈 AI 主管表示，Grok 被用於 **即時戰損評估**、目標優先級排序以及 **飛彈軌跡優化**
- 這是 **首次確認** 商業大型語言模型在美國主動作戰行動中被投入戰場
- 此部署引發對 **AI 在動能作戰中決策角色** 的迫切質疑，包括人類對 Grok 建議的監督程度
- xAI 創辦人 Elon Musk 尚未對 Pentagon 使用 Grok 一事發表評論

### 這對軍事 AI 治理的深遠影響

1. **商業 AI 用於戰爭的先例：** Grok 是消費級/生產力聊天機器人，被重新用途化用於戰場協調——模糊了民間 AI 產品與武器系統的界線。各大 AI 實驗室（OpenAI、Anthropic、Google DeepMind）將面臨定義其模型可接受軍事用途的壓力。

2. **究責缺口：** 如果 AI 輔助的打擊造成附帶損害，誰該負責？五角大廈的確認表明，現有的 **人機協作框架** 可能需要緊急修訂，因為模型在現代飛彈戰爭的速度下運作。

3. **出口管制影響：** 川普政府針對 Anthropic Fable 5 的 AI 出口管制政策，在一款美國商業 AI 系統直接驅動實戰行動的背景下，獲得了全新的戰略意義——可能加速全球 AI 軍備管制談判。

🔗 **參考資料：** 綜合報導（[The Debrief](https://thedebrief.org/grok-goes-to-war-pentagon-reveals-musks-ai-chatbot-launched-missiles-in-u-s-war-with-iran/)、[Firstpost](https://www.firstpost.com/tech/pentagon-ai-chief-confirms-groks-role-in-iran-strikes/)、[Yahoo News](https://news.yahoo.com/pentagon-declares-grok-ai-helped-fire-2000-missiles-at-iran/)）

---

## 本週活躍威脅

📌 **INC 勒索軟體：2023 年以來超過 830 家受害**
INC 勒索軟體已成為 2026 年最活躍的 RaaS（勒索軟體即服務）之一，確認受害者超過 830 家。該組織鎖定醫療、教育和政府機構，採用資料竊取後加密的雙重勒索模式。近期攻擊活動大量使用 **Cobalt Strike** 和 **Mimikatz** 進行橫向移動。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html)

📌 **F5 修補 NGINX 重大 RCE 漏洞（CVE-2026-xxxxx）**
F5 已釋出兩項 NGINX Open Source 重大遠端程式碼執行漏洞的修補程式。攻擊者可在未經身分驗證的情況下接管受影響伺服器。由於漏洞影響 NGINX 預設配置，使用 NGINX 作為反向代理或負載平衡器的組織應立即升級。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/f5-patches-two-critical-nginx-open.html)

📌 **微軟揭露 Windows Clipper USB 蠕蟲攻擊**
微軟發布了針對新型 Clipper 惡意軟體活動的詳細分析報告。該惡意軟體透過受感染的 USB 隨身碟傳播，利用 **LNK 檔案漏洞** 執行酬載，竊取使用者剪貼簿中的加密貨幣錢包地址。其蠕蟲式的 USB 傳播能力在隔離網路環境中尤其危險，C2 基礎架構使用 Tor 網路匿名通訊。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/microsoft-details-windows-clipper.html)

📌 **NastyC2 npm 惡意套件與 Device-Code 釣魚威脅**
本週威脅報告指出，研究人員在 npm 套件庫中發現了 **NastyC2** 命令與控制（C2）惡意套件，鎖定無意間安裝看似無害 JavaScript 依賴套件的開發者。此外，Device-Code 釣魚攻擊持續升溫，誘騙用戶在攻擊者控制的設備上完成身分驗證流程。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/threatsday-bulletin-claude-chat-abuse.html)

📌 **Novo Nordisk 遭入侵：暴露軟體供應鏈風險**
製藥巨頭 Novo Nordisk 發生資料外洩事件，攻擊者入侵了其 **軟體開發管線基礎架構**，可能已竄改建構產物或原始碼儲存庫。此事件凸顯受監管產業中 CI/CD 管線供應鏈攻擊的風險持續升高。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/novo-nordisk-breach-exposes-dev-pipeline-risk)

📌 **Salesforce 資料持續外洩：Klue 應用程式遭入侵**
攻擊者透過受入侵的 Klue 應用程式整合持續竊取 Salesforce 客戶資料，顯示第三方應用生態系統為 CRM 平台帶來的持續性資料洩漏風險。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/salesforce-data-thefts-klue-app-compromise)

📌 **Popa 僵屍網路與以色列上巿公司有關**
KrebsOnSecurity 揭露 **Popa 僵屍網路**（近期造成重大 DDoS 攻擊）的基礎架構與一家以色列上市科技公司有關。該僵屍網路已活躍數年，主要鎖定金融業。
🔗 **參考資料：** [KrebsOnSecurity](https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/)

📌 **FIFA 漏洞：世界盃串流遭遠端接管風險**
FIFA 串流基礎架構中的一項重大漏洞，可能允許攻擊者遠端接管世界盃轉播串流，注入惡意內容或中斷對數百萬觀眾的直播。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/application-security/fifa-bug-world-cup-streams-remote-takeover)

---

## OPSWAT可以怎麼幫上忙

本期摘要中的威脅涉及多種檔案型攻擊載具，OPSWAT MetaDefender 提供以下防禦：

- **NastyC2 npm 套件與供應鏈風險：** MetaDefender 的 **File Security** 和 **Multi-Scanning**（超過 30 個防毒引擎）可在惡意套件進入 CI/CD 管線前加以偵測。**Vulnerability Assessment** 功能掃描開源依賴項中的已知 CVE。
- **Windows Clipper USB 惡意軟體：** MetaDefender **Kiosk** 和 **MetaDefender Drive** 提供 USB 掃描站，在檔案到達端點前對卸除式媒體進行消毒，阻斷 LNK 蠕蟲傳播。
- **INC 勒索軟體：** MetaDefender 的 **Deep CDR（內容解構與重建）** 技術在保留文件可用性的同時移除活動內容（巨集、腳本、內嵌物件），於閘道端消除勒索軟體載入器。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
