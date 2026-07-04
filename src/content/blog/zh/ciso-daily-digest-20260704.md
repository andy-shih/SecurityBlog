---
title: "CISO 每日摘要：Fable 5 回歸但有限制使用額度，美國解除AI出口管制 (20260704)"
description: "美國解除Anthropic Claude Fable 5與Mythos 5出口管制，Fable 5回歸但設有暫時使用上限；阿里巴巴全面禁止員工使用Claude Code；微軟Exchange Online重大權限提升漏洞揭露；Bad Epoll Linux核心漏洞影響Android設備；SocGholish三年感染144萬WordPress網站；北韓PolinRider供應鏈攻擊發布108個惡意套件。"
pubDate: 2026-07-04
tags: [Anthropic, Fable 5, 人工智慧治理, 出口管制, 微軟Exchange, Linux漏洞, 供應鏈攻擊, 惡意軟體, 威脅情資, CISO]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 回歸 — 美國解除出口管制，但仍有限制

美國川普政府正式解除對Anthropic最先進AI模型——Claude Fable 5和Mythos 5——的出口管制，結束長達數月的限制。Anthropic已於7月1日恢復Claude Fable 5的全球上線，但設有**暫時使用上限**，顯示儘管獲得監管綠燈，容量或安全緩解措施仍然存在顧慮。

這項出口管制逆轉伴隨著一項重大治理進展：Anthropic表示願意讓**美國政府取得股權或董事會層級的存取權限**，打破OpenAI的非營利治理結構，為前沿AI監管建立了新的公私協作模式。白宫稱此安排為確保「負責任地部署前沿AI」的合作框架。

與此同時，三項相關發展重塑了AI安全格局：

**阿里巴巴全面禁用Claude Code。** 這家中國電商巨頭以資料安全風險為由，禁止所有員工使用Anthropic的開發工具，擔憂AI程式碼助手可能導致專有智慧財產權外洩。此舉凸顯跨國企業在跨境AI工具採用上的日益緊張。

**Anthropic堵住中國繞道漏洞。** 公司在發現中國企業繞過區域限制使用Claude後，加強了存取控制，實施更嚴格的基於IP的地理封鎖和企業客戶帳號驗證。

**Anthropic擴展至藥物發現領域。** 公司推出了**Claude Science for Mac**，這是一個專為加速實驗室研究設計的自主AI平台，並分別宣布與三星進行製造自訂AI推論晶片的初步洽談。

### 這對AI治理的深遠影響

出口管制的解除與政府監管權的同時授予，創造了全新的監管先例。與OpenAI的非營利結構或Google DeepMind的嵌入式模式不同，Anthropic的做法直接賦予美國政府利害關係人層級的存取權限——這可能成為前沿AI公司在出口管制技術下談判國安要求的標準模板。

---

## 本週活躍威脅

📌 **Microsoft Exchange Online 重大漏洞**
Microsoft揭露Exchange Online存在權限提升與未授權資料存取漏洞。通過驗證的攻擊者可利用此漏洞提升權限，存取授權範圍外的信箱。雲端原生服務尚無修補時程。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177077)

📌 **「Bad Epoll」Linux 核心漏洞 — Linux 與 Android 均受影響**
epoll子系統中的Linux核心漏洞允許無權限使用者取得root存取權限。此漏洞名為「Bad Epoll」，同時影響標準Linux發行版和Android生態系統。雖尚無公開利用程式碼，但考量攻擊面廣泛，預計很快就會出現實際武器化。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-bad-epoll-linux-kernel-flaw-lets.html)

📌 **嵌入式設備檔案系統未修補漏洞 — 數百萬設備面臨風險**
廣泛用於物聯網和嵌入式設備的檔案系統函式庫被揭露存在多個未修補漏洞，可能導致遠端程式碼執行或阻斷服務攻擊。由於廠商放棄維護，多數受影響設備可能永遠不會收到修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/unpatched-flaws-disclosed-in-filesystem.html)

📌 **SocGholish 惡意軟體 — 三年感染 144 萬個 WordPress 網站**
SocGholish（又稱FakeUpdates）惡意軟體活動在過去三年內已感染超過**144萬個WordPress網站**。該惡意軟體利用虛假的瀏覽器更新提示，傳遞遠端存取木馬和資訊竊取程式。該活動仍持續活躍並不斷演變社交工程手法。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177078)

📌 **北韓 PolinRider 供應鏈攻擊 — 發布 108 個惡意套件**
與「Contagious Interview」行動相關聯的北韓威脅行為者發布了**108個惡意套件和擴充功能**，涵蓋npm、Packagist、Go模組和Chrome擴充功能。該行動透過虛假招聘鎖定軟體開發者，傳遞後門和憑證竊取程式，且目前仍持續活躍。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/north-korean-hackers-publish-108.html) | [The Hacker News](https://thehackernews.com/2026/07/north-korea-linked-npm-packages-mimic.html)

📌 **Amadey 惡意軟體 — 用於散布超過 1 萬種惡意程式**
Amadey 僵尸網路惡意軟體已被用於散布超過**1萬種獨特的惡意程式**，使其成為當前最活躍的惡意軟體分發平台之一。它被用作勒索軟體、資訊竊取程式和加密貨幣挖礦程式的載入工具。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177087)

📌 **Azure CLI 密碼噴灑攻擊 — 8100 萬次 Microsoft 365 登入嘗試**
威脅行為者發起大規模密碼噴灑攻擊，鎖定Microsoft 365帳號，使用**Azure CLI作為認證向量**以規避傳統檢測。記錄到超過**8100萬次登入嘗試**。此攻擊利用了未強制啟用MFA的舊版認證協定。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177072)

📌 **Oracle PeopleSoft 漏洞 — Nissan 資料外洩**
攻擊者利用Oracle PeopleSoft的漏洞從Nissan竊取資料，標誌著最新一起ERP相關漏洞攻擊事件，凸顯未修補企業應用程式漏洞的持續風險。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/07/03/nissan-leak-3/)

📌 **Kairos 資料勒索 — 美國政府實體支付 100 萬美元**
一美國政府實體向威脅組織Kairos支付約**100萬美元**，以防止被盜檔案公開。與傳統勒索軟體不同，Kairos並未部署加密器——威脅純粹基於資料竊取。受害者據信為俄亥俄州聯合郡。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/us-government-entity-paid-kairos-group.html)

---

## OPSWAT可以怎麼幫上忙

北韓供應鏈攻擊（PolinRider、Contagious Interview）和Amadey惡意軟體散布活動顯示了多層檔案層級防禦的關鍵需求。OPSWAT MetaDefender的多引擎掃描和CDR（內容淨化與重構）技術能夠在惡意套件、腳本和負載抵達開發者端點或CI/CD管線之前，將其檢測和中和。對於使用Claude Code等AI程式碼助手的組織，MetaDefender Cloud提供即時檔案檢測，防止透過AI工具鏈的資料外洩。
