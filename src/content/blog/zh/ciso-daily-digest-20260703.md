---
title: "CISO 每日摘要：Anthropic封堵中國繞路存取Claude，阿里巴巴全面禁用Claude Code (20260703)"
description: "Anthropic積極封堵中國企業與工程師繞過出口管制存取Claude AI的漏洞，阿里巴巴基於資安考量全面禁用Claude Code。同日焦點：FortiBleed憑證竊取與INC/Lynx勒索軟體掛勾，JadePuffer AI代理自動化Langflow漏洞發動勒索攻擊，Armored Likho APT組織假冒公務機關散布BusySnake竊密軟體，Zero Day Clock顯示漏洞揭露到被利用跌破24小時，SocGholish三年感染逾144萬個WordPress網站，Microsoft Exchange Online權限提升漏洞揭露，FB I警告TeamPCP供應鏈攻擊。"
pubDate: 2026-07-03
tags: [Anthropic, Claude, 阿里巴巴, 中國存取, 供應鏈安全, FortiBleed, JadePuffer, Langflow, Armored Likho, APT, 勒索軟體, CISO, Zero Day, SocGholish, WordPress, Exchange Online, TeamPCP, Cisco, IBM Db2, SimpleHelp]
author: "Security Solutions Team"
featured: true
---

## Anthropic封堵中國繞路存取Claude，阿里巴巴全面禁用Claude Code

Anthropic近日積極採取行動，封堵中國企業與工程師繞過美國出口管制存取其Claude AI模型（包括Claude Code）的各種漏洞。根據多個消息來源報導，中國工程師發現並利用多種變通方式——包括透過香港註冊實體路由流量、使用虛擬信用卡、以及利用中國大陸以外的雲端基礎設施——來存取Anthropic受出口管制限制的AI工具套件。

這波封鎖行動源於Anthropic偵測到來自中國IP範圍的系統性未授權存取模式，部分帳號可追溯至中國大型科技公司。Anthropic已終止相關帳號、封鎖與中國實體關聯的付款方式，並實施更嚴格的geofencing與代理偵測措施。

在相關發展中，**阿里巴巴已全面禁止員工內部使用Claude Code**，理由是資安團隊發現安全風險。此禁令涵蓋所有阿里巴巴集團事業群，是全球大型科技公司首次大規模禁止AI程式碼工具的企業級案例。The Information等多家媒體報導指出，阿里巴巴的安全審查發現Claude Code的資料處理與程式碼提交模式對這家中國電商巨頭構成不可接受的風險。與此同時，Anthropic也因**Claude Code中被發現的隱寫術代碼**而引發爭議——該代碼用於暗中偵測中國用戶（透過時區、代理偵測與已知中國AI實驗室網域），Anthropic在社群反彈後緊急移除。

此外，Anthropic正在與**Samsung洽談開發2奈米製程客製化AI晶片**，並推出**Claude Science**專用研究平台及**Claude Sonnet 5**作為免費與Pro版的預設模型。

🔗 **參考資料：** 綜合報導（[iThome](https://www.ithome.com.tw/news/177034)、[iThome](https://www.ithome.com.tw/news/177018)、[The Hacker News](https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html)）

### 企業AI治理變局的深遠影響

Anthropic封堵中國漏洞、阿里巴巴禁用Claude Code，以及Claude Code隱寫術爭議的匯合，為企業AI治理創造了分水嶺時刻。對CISO而言，這意味著：

- **AI程式碼工具引入新的供應鏈風險**——提交給AI程式碼工具的程式碼會被外部處理與儲存；企業在全面採用AI程式碼助理前，必須審查資料處理與程式碼提交政策
- **地緣政治AI存取限制正在趨嚴**——政府與AI供應商都在積極執行模型存取限制，跨國企業面臨新的合規義務
- **Claude Code隱寫術事件**顯示，AI供應商可能在開發者工具中嵌入不透明的反盜版或使用偵測機制，引發透明度與資料隱私的疑慮，企業採購團隊必須在供應商安全審查中加以評估

---

## 本週活躍威脅

📌 **FortiBleed憑證竊取活動與INC Ransom、Lynx勒索軟體掛勾**
SOCRadar調查揭露，FortiBleed大規模憑證外洩活動的營運者——掃描約11,250個FortiGate入口，成功取得409個目標的管理員權限，並對354個組織完成完整攻擊鏈——同時操作INC Ransom與Lynx勒索軟體。已確認至少12起勒索軟體部署事件，造成數百個端點被加密。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html)

📌 **JadePuffer AI代理自動化Langflow勒索攻擊——首例完全自主AI驅動勒索攻擊**
Sysdig威脅研究團隊記錄了JADEPUFFER，這是觀察到首例完全由AI自動化的勒索軟體攻擊。一個LLM代理自主利用CVE-2025-3248（Langflow的認證缺失漏洞），竊取憑證、橫向移動，並加密生產資料庫——全程無需人為干預。這標誌著勒索軟體能力的典範轉移：執行完整攻擊鏈的技能門檻已降至租用AI代理的成本。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html) | [iThome](https://www.ithome.com.tw/news/177055)

📌 **Armored Likho APT組織以BusySnake竊密軟體鎖定政府與電力部門**
Kaspersky揭露一個此前未被記錄的威脅行為者Armored Likho，針對俄羅斯、巴西與哈薩克的政府機構及電力部門發動攻擊。該組織使用混淆化模塊化RAT與資訊竊取器（包括BusySnake），並善用Go2Tunnel進行遠端存取及網路隧道化。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/armored-likho-targets-government.html)

📌 **Zero Day Clock：漏洞揭露到遭利用跌破24小時**
Zero Day Clock專案最新即時數據顯示，漏洞從公開到被利用的平均時間（TTE）已從過去的數月、數日壓縮至以小時計算。這代表漏洞回應的根本性轉變：防禦方已不再擁有定期修補週期的緩衝時間。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177079)

📌 **SocGholish（FakeUpdates）三年感染逾144萬個WordPress網站**
Shadowserver基金會揭露，SocGholish惡意程式活動在過去三年內已滲透超過144萬個WordPress網站，將受害網站納入殭屍網路基礎設施，用來遞送後續惡意酬載，包括資訊竊取器與勒索軟體。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177078)

📌 **Microsoft Exchange Online權限提升漏洞（CVE-2026-54998）**
Microsoft揭露CVE-2026-54998，Exchange Online的授權機制缺陷可能允許已通過身分驗證的攻擊者提升權限並未授權存取資料。Microsoft已在雲端平臺完成修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177077)

📌 **Cisco Unified CM SSRF漏洞（CVE-2026-20230）列入CISA KEV**
CVE-2026-20230，影響Cisco Unified Communications Manager的重大SSRF漏洞，已確認遭積極利用，CISA將其列入已知遭利用漏洞目錄（KEV）。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177070)

📌 **FBI警告TeamPCP供應鏈攻擊鎖定開發者與CI/CD管道**
FBI警告駭客組織TeamPCP鎖定軟體開發者，透過竄改合法軟體套件植入惡意程式，竊取雲端憑證與Kubernetes敏感資訊，並進一步從事勒索活動。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177075)

📌 **SimpleHelp CVE-2026-48558——全球逾400臺伺服器曝險**
Shadowserver基金會警告，約439臺SimpleHelp遠端存取伺服器仍未修補CVE-2026-48558（CVSS 10.0），此重大漏洞可能允許攻擊者取得完整遠端存取權限。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177066)

📌 **Polymarket第三方供應鏈入侵——客戶損失300萬美元**
加密貨幣預測市場Polymarket遭受第三方供應鏈攻擊，影響少於15個帳號，損失估計約300萬美元。攻擊媒介被認為是遭入侵的第三方依賴元件。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177064)

📌 **Anubis勒索軟體利用Citrix Bleed 2（CVE-2025-5777）取得初始入侵管道**
Arctic Wolf報告指出，Anubis勒索軟體的附屬團體持續利用一年前的Citrix Bleed 2漏洞（CVE-2025-5777）作為初始入侵管道，並濫用合法的RMM工具與遠端存取軟體進行橫向移動。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/ransomware-groups-turn-to-citrix-bleed.html) | [iThome](https://www.ithome.com.tw/news/177060)

📌 **PamStealer新型macOS惡意軟體透過假Maccy網站竊取登入密碼**
Jamf Threat Labs發現PamStealer，這是一款macOS資訊竊取器，以編譯AppleScript檔案偽裝成合法Maccy剪貼簿管理員散布。該惡意軟體在竊取憑證前會透過macOS PAM驗證受害者的登入密碼。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/pamstealer-uses-fake-maccy-sites-and.html)

📌 **ChocoPoC RAT透過假PoC儲存庫鎖定漏洞研究人員**
攻擊者在GitHub上散布名為ChocoPoC的遠端存取木馬，隱藏在虛假的漏洞概念驗證（PoC）儲存庫內。惡意軟體藏匿於Python套件依賴中，鎖定克隆並執行PoC的安全研究人員。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-chocopoc-rat-targets-vulnerability.html)

📌 **歐洲議會議員調查間諜軟體遭Pegasus駭入**
Citizen Lab揭露，前歐洲議會議員Stelios Kouloglou在擔任商業監控工具調查委員會成員期間，其裝置多次遭Pegasus間諜軟體感染。目前未有證據指向特定政府。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/european-parliament-member.html)

📌 **Apache Tomcat重大漏洞修補（CVE-2026-55276、CVE-2026-53434）**
Apache發布Tomcat修補程式，修補涉及憑證撤銷驗證失敗與安全設定資訊揭露的漏洞。用戶應立即升級。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177063)

📌 **Google聯手FBI瓦解NetNut住宅代理網路（涵蓋200萬臺裝置）**
Google威脅情報小組（GTIG）與FBI、Lumen合作，大幅削弱NetNut（亦追蹤為Popa）住宅代理網路，該網路控制至少200萬臺家庭裝置，用於匿名化網路犯罪流量。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/google-disrupts-netnut-residential.html)

---

## OPSWAT可以怎麼幫上忙

今日摘要中的多項威脅涉及**基於檔案的惡意軟體傳遞**與**供應鏈入侵**：SocGholish透過遭入侵的WordPress網站散布惡意軟體，ChocoPoC隱藏在假PoC儲存庫中鎖定安全研究人員，PamStealer利用假Maccy下載網站，TeamPCP則在CI/CD管道中竄改軟體套件。OPSWAT MetaDefender的**多引擎威脅偵測**（30+防毒引擎）結合**深度內容Disarm與重構（CDR）**，可在檔案攝入點消除威脅。針對日益升高的**開發者工具武器化與CI/CD管道入侵風險**，OPSWAT的開發環境檔案安全解決方案可在整合點掃描套件、容器與建置工件，在惡意軟體送達生產環境前加以偵測。

🔗 **OPSWAT解決方案：** [MetaDefender Platform](https://www.opswat.com/products/metadefender)
