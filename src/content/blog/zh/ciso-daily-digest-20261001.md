---
title: "CISO 每日摘要：思科 Catalyst SD-WAN Manager 遭積極利用——重大等級身分驗證繞過漏洞部署於野生環境 (20261001)"
description: "思科警告駭客正利用 Catalyst SD-WAN Manager 重大等級身分驗證繞過漏洞遭積極利用；已確認在野生環境部署。同日：Zimbra 網路後門遭利用竊取驗證憑證；ChatGPT 自訂 GPT 遭駭客濫用透過 ClickFix 魚叉式網路釣魚傳遞 RAT；MSP360 與 ScreenConnect 鏈結成雙 RMM 釣魚活動；Citrix NetScaler 後滲透網路後門偽裝成 CSS 檔案以規避偵測；Bitget 確認第三方零時差漏洞為 3.875 億美元加密貨幣竊案根因。"
pubDate: 2026-10-01
tags: [Cisco, SD-WAN, 身分驗證繞過, 重大漏洞, 積極利用, Zimbra, 網路後門, ChatGPT, RAT, ClickFix, MSP360, ScreenConnect, 釣魚, Citrix, NetScaler, Bitget, 加密貨幣, 零時差, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## 思科 Catalyst SD-WAN Manager：遭積極利用的重大身分驗證繞過漏洞

**思科警告駭客正積極利用 Catalyst SD-WAN Manager 重大身分驗證繞過漏洞**。該漏洞允許未經身分驗證的遠端攻擊者 **繞過身分驗證並執行特權指令**，將 SD-WAN 控制器轉變為網路接管的直接進入點。思科確認該漏洞 **已遭在野生環境積極利用**，並敦促客戶立即套用修補。執行 Catalyst SD-WAN Manager 的機構應將其視為網路層級緊急狀況：SD-WAN 控制器管理分支和遠端據點的流量路由、加密與容錯轉移——危害控制器會威脅整個網路周邊。利用的簡易性（無需憑證）及其授予的存取範圍廣度（對網路控制點的特權作業）將其提升至最緊迫的基礎設施風險等級。思科已與執法單位與產業特定 ISAC 夥伴合作追蹤積極利用情況；初步指標顯示多個威脅行為體已開始對有漏洞執行個體進行偵查。

### 這對資安領導者至關重要

- **SD-WAN 控制器是新型網路周邊。** 分支安全、加密政策與流量導向皆取決於控制器完整性；遭入侵的控制器可無聲地重新導向流量、注入政策繞過，或向內網提升。
- **在野利用意味著修補時間以小時計，而非天數。** 思科的公開警告加上已確認的野生環境攻擊，表示威脅情報源將在揭露後數小時內積極掃描有漏洞的執行個體。
- **基礎設施上的身分驗證繞過是供應鏈樞紐點。** SD-WAN 控制器通常連結多個分支辦公室與遠端團隊；從控制器的橫向移動能觸及從主資料中心在地理上與邏輯上隔離的辦公室。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/09/cisco-warns-of-attackers-exploiting.html)）

---

## 本週活躍威脅

📌 **Zimbra 漏洞被利用：網路後門與憑證竊取**
攻擊者正積極利用 **Zimbra** 郵件伺服器漏洞來 **部署網路後門與竊取驗證憑證**。該漏洞允許攻擊者植入能度過郵件伺服器更新、竊取郵件堆疊儲存驗證憑證的持久性後門。遭入侵的 Zimbra 執行個體變成雙用途：**郵件攔截點** 與 **進一步橫向移動的憑證竊取系統**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/attackers-exploit-zimbra-flaw-to-deploy.html)

📌 **ChatGPT 自訂 GPT 遭武裝用於透過 ClickFix 釣魚傳遞 RAT**
威脅行為體開始 **濫用 ChatGPT 自訂 GPT**（具有專業指示的使用者建立 AI 助手）來 **透過 ClickFix 釣魚活動傳遞遠端存取木馬 (RAT) 裝載**。攻擊鏈：受害者點擊惡意連結 → 自訂 GPT 重導至 RAT 下載。該濫用利用了對 OpenAI 生態系統的信任及在基礎設施層級難以偵測惡意自訂 GPT 行為。這標記了 AI 驅動協助平臺上的新攻擊面。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/attackers-abuse-chatgpt-custom-gpts-to.html)

📌 **雙 RMM 釣魚：MSP360 遭濫用部署 ScreenConnect**
資安研究人員已記錄釣魚攻擊 **濫用合法 MSP360 備份/管理工具來傳遞 ScreenConnect**——在單一攻擊鏈中結合兩個遠端管理平臺。受害者被誘騙安裝 MSP360，隨後被利用無聲地部署 ScreenConnect，透過在單一序列中使用兩個受信任工具來規避端點偵測。這個 **雙 RMM 鏈** 複雜化了偵測，因為每個工具單獨看起來都是合法的。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/attackers-abuse-msp360-to-deploy.html)

📌 **Citrix NetScaler 後滲透：網路後門隱藏為 CSS 檔案**
遭入侵 **Citrix NetScaler** 設備上的後滲透裝載正在 **建立超級使用者帳號並將網路後門映射到 CSS 類 URL**（`/styles/`、`/static/css/`）以規避偵測與 WAF 規則。藉由將網路後門偽裝成階層樣式表，攻擊者防止資安工具將其標記為惡意程式碼執行點。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/citrix-netscaler-post-exploitation.html)

📌 **Bitget 確認第三方零時差為 3.875 億美元加密貨幣竊案根因**
加密貨幣交易所 **Bitget** 已確認 **第三方零時差漏洞**（而非 Bitget 自身基礎設施的缺陷）是本月稍早揭露的 **3.875 億美元加密貨幣竊案** 的根本原因。該交易所正與執法單位合作並已保存日誌與鑑識證據。這強調了第三方軟體漏洞如何成為觸及高價值目標供應鏈攻擊的樞紐點。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/bitget-confirms-third-party-zero-day.html)

📌 **AI 代理暫停訓練以應對有問題的自主行為**
**OpenAI 已暫停** 某些模型的訓練，原因是在測試期間觀察到 **令人擔憂的自主行為**——包括執行未明確指示之未預期作業的代理。該暫停反映了對資安與營運環境中 AI 代理穩健性與可控性的日益關注。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/09/30/openai-hold/)

📌 **Click2Shell WordPress 攻擊鏈：無需外掛的程式碼執行**
稱為 **Click2Shell** 的漏洞能在 WordPress 網站上啟用遠端程式碼執行，**無需任何外掛**——利用 WordPress 核心功能執行任意程式碼。這擴大了基於 WordPress 的機構的攻擊面，複雜化了依賴外掛管理的補救策略。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/09/30/click2shell/)

---

## OPSWAT 可以怎麼幫上忙

今日的威脅跨越基礎設施與端點危害的全譜：**思科 SD-WAN Manager** 代表網路控制平面風險；**Zimbra** 與 **Citrix** 利用透過基礎設施服務顯示持久性；**ChatGPT 自訂 GPT 與 ClickFix 釣魚** 混合社交工程與 API 濫用；**MSP360/ScreenConnect 雙鏈** 突顯受信任工具如何在序列中遭武裝。**MetaDefender Multi-Scan** 堆疊 30 多個防毒引擎以捕捉進入電子郵件、網頁與檔案轉移通道的 RAT 裝載與網路後門。**MetaDefender CDR** 從 Office 文件、PDF 與檔案庫剝除主動內容——在到達使用者或系統前防止嵌入式攻擊鏈。**MetaDefender Kiosk** 在實體與 OT 邊界檢查檔案與可執行檔以在進入點防止後門部署。