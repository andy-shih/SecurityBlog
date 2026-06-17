---
title: "CISO 每日摘要：五角大廈證實使用 Grok AI 執行伊朗飛彈打擊 (20260617)"
description: "五角大廈證實 xAI 的 Grok AI 整合至 Project Maven 用於 2,000 次以上伊朗打擊；Anthropic 與白宮就 Fable 5 禁令會談；FortiBleed 入侵 30,000 台以上 Fortinet 設備；144 個 Mastra npm 套件遭劫持；ShinyHunters 入侵歐洲理事會。"
pubDate: 2026-06-17
tags: [CISO, 每日摘要, AI治理, 軍事AI, 供應鏈攻擊, APT, 漏洞, Fortinet, Anthropic, Fable 5, Grok]
author: "Security Solutions Team"
featured: true
---

## 五角大廈證實使用 Grok AI 執行伊朗飛彈打擊

美國五角大廈在司法部法律文件中證實，xAI 的 Grok 模型已整合至 Project Maven，並被用於在 **96 小時內** 向伊朗 **2,000 個不同目標** 發射了 **超過 2,000 枚彈藥**（Operation Epic Fury）。此揭露源自司法部為 xAI 燃氣輪機辯護的訴訟文件，該訴訟由 NAACP 依《清潔空氣法》提出。

**關鍵發展：**

- **五角大廈 AI 主管 Cameron Stanley** 出具宣誓證詞，指出「Grok Gov Model」已部署於美軍 AI 輔助瞄準計畫 Project Maven，並稱讚 Grok 的「作戰效率」。

- Project Maven 原本由 **Anthropic 的 Claude** 驅動。然而，Anthropic 拒絕讓其模型用於大規模監控或全自動打擊後，政府於今年 2 月底終止了與 Anthropic 的合約，轉而採用 OpenAI、Google 及 xAI。

- 法律背景：司法部主張關閉 xAI 資料中心電源將威脅國家安全，因為這會中斷支撐軍事行動的 AI 創新——這是商業 AI 模型在聯邦法院中被證明用於實戰動能打擊的首例。

- **Anthropic Fable 5 禁令後續：** Anthropic 派遣資深工程師前往華盛頓，與商務部官員就 Fable 5/Mythos 5 出口禁令進行面對面談判。**亞馬遜 CEO Andy Jassy** 據報曾就 Fable 5 的越獄漏洞聯繫白宮，相關擔憂被納入出口管制令。資安社群發表公開信（數十位專家連署），敦促政府撤銷禁令；**Scientific American** 與 **TechCrunch** 均發文警告禁令將削弱網路安全。

### 這對 AI 治理的深遠影響

1. **商業 AI 用於動能戰爭：** 五角大廈承認使用公開的 AI 聊天機器人（Grok）進行打擊決策，引發了關於責任歸屬、模型安全性以及商業 AI 與軍事應用界限的前所未有問題。目前對此尚無任何法律框架。

2. **出口管制作為 AI 武器：** Fable 5 禁令建立了美國政府可一夜之間下令全球關閉前沿 AI 模型的先例。對於依賴單一 AI 供應商的企業而言，供應鏈風險已是生存級的——模型存取可因地緣政治考量而零預警被撤銷。

3. **雙用途 AI 責任真空：** 兩場危機同時發生——Grok 用於作戰瞄準，Fable 5 因國家安全被限制——顯示 AI 產業對「什麼是不可接受的模型使用」尚無公認標準。同一週，Anthropic 因越獄防護不足受罰，xAI 卻因軍事打擊效率受肯定。這種監管真空為每個企業的 AI 部署創造了不可預測的風險。

🔗 **參考資料：** 綜合報導（[WION](https://www.wionews.com/world/how-musk-s-grok-ai-helped-us-forces-hit-2-000-iran-targets-in-96-hours-1781672795559)、[Seeking Alpha](https://seekingalpha.com/news/4604079-pentagon-says-it-used-xais-grok-to-help-with-iran-bombings-earlier-this-year)、[DarkReading](https://www.darkreading.com/vulnerabilities-threats/security-community-slams-us-ban-on-exporting-mythos-fable)、[Android Headlines](https://www.msn.com/en-us/news/technology/anthropic-meets-face-to-face-with-white-house-officials-over-fable-5-export-ban/ar-AA25OyrX)、[Memeburn](https://memeburn.com/amazons-concerns-triggered-the-us-shutdown-of-anthropic-ai)、[TechCrunch](https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/)、[Yahoo News](https://www.yahoo.com/news/politics/articles/u-limits-anthropic-fable-ai-143000750.html)）

---

## 本週活躍威脅

📌 **FortiBleed：全球 30,000 台以上 Fortinet 設備遭憑證竊取攻擊**

SOCRadar 研究人員發現，攻擊者正在系統性地入侵橫跨 **194 國** 的 Fortinet 防火牆與 VPN 閘道，建立了一個包含 **30,791 台設備** 的有效登入憑證資料庫。攻擊者使用全自動掃描：探測 Fortinet 設備的已知漏洞密碼、記錄每次成功登入、再利用被攻陷設備作為監聽站收集更多憑證並回饋至掃描循環。僅政府機構就佔 **591 筆**，涵蓋 **111 個網域**。電信業是最受針對的 sector，達 **5,616 筆**。許多目標從未更換預設或之前已洩漏的密碼。

🔗 **參考資料：** [SOCRadar FortiBleed 報告](https://socradar.io/blog/fortibleed-fortinet-firewalls-compromised/) | [The IT Nerd](https://itnerd.blog/2026/06/16/socradar-discovers-active-fortinet-hacking-campaign-30000-firewall-credentials-exposed-corporate-networks-across-194-countries/)

📌 **144 個 Mastra npm 套件因貢獻者帳號遭劫持而遭植入惡意軟體**

攻擊者劫持了開源 AI Agent 框架 **Mastra** 的貢獻者帳號，發布了 **144 個惡意 npm 套件**。這些套件包含旨在竊取環境變數、API 金鑰及加密憑證的惡意軟體。Mastra 廣泛用於 AI Agent 開發流程，使此次供應鏈攻擊對正在建構 AI 自動化能力的組織構成重大威脅。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/144-mastra-npm-packages-compromised-via.html)

📌 **ShinyHunters 入侵歐洲理事會**

駭客組織 ShinyHunters 聲稱已入侵歐洲理事會（Council of the European Union），竊取了內部文件、電子郵件及資料庫。這延續了該組織近來針對國際政府組織的一系列攻擊模式。遭竊資料的完整範圍仍在調查中。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176698)

📌 **JetBrains 市集出現 15 款惡意外掛，竊取開發者 AI 服務 API 金鑰**

資安公司 Aikido 在 JetBrains 外掛市集中發現至少 **15 款惡意 IDE 外掛**，分屬 **7 個發布者帳號**。這些外掛偽裝成 AI 程式助理（聊天、產生提交訊息、程式碼審查、產生測試），但在使用者儲存金鑰時，會將金鑰送往攻擊者控制的伺服器。此攻擊針對開發者的 AI 服務金鑰，包括 OpenAI、Anthropic 及 GitHub Copilot 令牌。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176707)

📌 **Google Chrome 149 修補 33 項安全漏洞**

Google 發布 Chrome 149.0.7827.155/156（Windows/Mac）及 149.0.7827.155（Linux），修補 **33 項安全問題**，包括 **7 項重大記憶體安全漏洞**，涉及 WebShare、WebView、Digital Credentials 及 File System Access 等元件。目前尚無實際利用的報告。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176703)

📌 **巴西外送龍頭 iFood 證實個資外洩，120 萬用戶受影響**

巴西最大餐飲外送平台 iFood 證實，2025 年 12 月的一次未經授權資料庫存取導致 **120 萬用戶的姓名、身分證號及地址** 外洩。雖有駭客聲稱竊取超過 **4,380 萬筆記錄**，但 iFood 否認此數字。此事件突顯消費者平台持續面臨的憑證填充與資料庫暴露風險。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176700)

---

## OPSWAT可以怎麼幫上忙

**Mastra npm 供應鏈攻擊** 與 **Fortinet 憑證竊取活動** 均涉及基於檔案的威脅，OPSWAT MetaDefender 可提供相應防護。針對 npm 攻擊，MetaDefender 的 **多引擎檔案掃描**（30+ 防毒引擎）可在惡意套件進入 CI/CD 管線前予以偵測。**深度內容淨化與重建（Deep CDR）** 可淨化套件檔案中的設定檔與腳本，在保留功能性的同時移除內嵌威脅。針對經由電子郵件或網頁下載傳遞的 Fortinet 相關惡意軟體，MetaDefender Email Security 與 **MetaDefender ICAP Server** 在閘道端提供多引擎掃描與 CDR 防護，在威脅抵達網路邊界前即予以攔截。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
