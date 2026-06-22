---
title: "CISO 每日摘要：Anthropic Mythos AI 數小時內攻破 NSA 機密系統 (20260622)"
description: "Anthropic 最新 Mythos AI 模型在紅隊評估中數小時內突破幾乎所有 NSA 機密系統，川普政府擴大對 Anthropic 的 AI 監管但釋出矛盾信號，FortiBleed 暴露逾7萬臺 Fortinet 設備憑證，Mastra AI 框架遭北韓駭客 NPM 供應鏈攻擊，Squid 代理伺服器存在 29 年漏洞洩漏明文 HTTP 請求。"
pubDate: 2026-06-22
tags: [CISO, 每日摘要, 資安新聞, 威脅情資, AI 治理, Mythos, NSA, Anthropic, FortiBleed, 供應鏈攻擊, 漏洞, APT]
author: "Security Solutions Team"
featured: true
---

## 發生了什麼事

### Anthropic Mythos AI 攻破 NSA 機密系統

Anthropic 最新前沿模型 **Mythos** 在與美國國家安全機構聯合進行的紅隊評估中展現驚人滲透能力，在 **數小時內** 自主識別並利用跨隔離網路中的漏洞，成功入侵了幾乎所有受測的 **NSA 機密系統**。

此消息震撼 AI 治理社群——就在前一天，Anthropic 才宣布退役其前一代旗艦模型 Fable 5，理由是其能力已超出安全閾值。兩起事件共同表明，前沿 AI 模型的進展速度已超越現有控制機制的承載能力，**能力突破總是在政策追上之前發生**。

### 這對 AI 治理的深遠影響

- **能力閾值強制執行：** 自願性安全框架已明顯不足。各國政府將強制要求模型上線前的紅隊測試，並建立強制性揭露制度。
- **出口管制升級：** Fable 5 的退役部分源自出口管制壓力。Mythos 展現的 NSA 級滲透能力將進一步收緊對模型權重、訓練算力和推理基礎設施的限制。
- **進攻性 AI 戰略：** NSA 願意公布這些結果，表明美國機構正同時準備防禦性和進攻性 AI 姿態。

**本週其他 Anthropic 動態：**
- **川普政府對 Anthropic 展開 AI 監管打擊**，但同時傳出可能重新評估國家安全風險分類的矛盾信號。
- **美光-Anthropic 戰略合作：** 美光簽署重大協議，為 Anthropic AI 工廠提供記憶體與儲存基礎設施，股價上漲 5.5%。
- **Anthropic 開設首爾辦公室**，與南韓合作夥伴拓展亞太業務版圖。

---

## 本週活躍威脅

📌 **Mastra AI 框架 NPM 供應鏈攻擊**
北韓駭客組織 BlueNoroff（UNC1069 / Sapphire Sleet）入侵 Mastra AI 應用框架，在超過 **140 個 NPM 套件** 中植入後門。該攻擊可在開發與生產環境中竊取憑證、環境變數及 API 金鑰。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176764)

📌 **FortiBleed：逾 7 萬臺 Fortinet 防火牆憑證外洩**
歸因於俄羅斯駭客組織的大規模憑證蒐集行動 **FortiBleed** 已流出超過 **7 萬臺 Fortinet 設備** 的管理員憑證，臺灣影響數量居全球第三。CISA 發布緊急應對措施，英國 NCSC 建議使用 SOCRadar 與 Hudson Rock 工具檢測。
🔗 **參考資料：** [Security Affairs](https://securityaffairs.com/194004/hacking/fortibleed-the-most-detailed-breakdown-yet-of-an-active-russian-credential-harvesting-operation.html) | [iThome](https://www.ithome.com.tw/news/176771)

📌 **Squidbleed：29 年歷史 Squid 代理漏洞洩漏明文 HTTP**
Squid 快取代理伺服器存在名為 **Squidbleed** 的重大漏洞，可能洩漏代理流量的明文 HTTP 請求，已存在 **29 年**，影響廣泛部署的代理基礎設施。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/29-year-old-squid-proxy-bug-squidbleed.html) | [iThome](https://www.ithome.com.tw/news/176744)

📌 **OXLOADER + CastleStealer：透過 Google Ads 散布的惡意軟體**
新型惡意軟體載入工具 **OXLOADER** 正透過惡意 Google Ads 散布，用於部署 **CastleStealer** 資訊竊取惡意軟體，利用 SEO 毒化廣告鎖定搜尋正版軟體的使用者。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/new-oxloader-loader-uses-malicious.html)

📌 **AryStinger 惡意軟體感染 4,300 臺老舊路由器**
**AryStinger** 已入侵超過 **4,300 臺** 已停止支援的 D-Link 路由器，建立用於偵察和憑證竊取的代理網路。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/arystinger-malware-infects-4300-legacy.html) | [iThome](https://www.ithome.com.tw/news/176759)

📌 **INTERPOL 警告亞太地區網路釣魚與 AI 詐騙升溫**
INTERPOL 發布區域警告，指出亞太地區的網路釣魚、勒索軟體及 AI 驅動詐騙案件顯著增加，特別是利用深度偽造語音和視訊的社交工程攻擊日益精密。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/interpol-warns-phishing-ransomware-and.html)

📌 **Cisco ISE 重大漏洞可獲取 Root 權限**
Cisco 修補 Identity Services Engine（ISE）中的重大漏洞，未經驗證的攻擊者可獲取 **root 等級權限**。
🔗 **參考資料：** [Security Affairs](https://securityaffairs.com/193849/security/cisco-fixed-a-critical-ise-vulnerability-that-lets-attackers-to-gain-root-access.html)

---

## OPSWAT 可以怎麼幫上忙

AI 代理供應鏈、惡意廣告散布惡意軟體以及憑證竊取僵屍網路的交會，創造了複雜的攻擊面。OPSWAT 的 **MetaDefender** 平台可提供多層次防禦：

- **供應鏈防禦（Mastra 攻擊）：** 多引擎掃描（30+ 防毒引擎）與 Deep CDR 可在惡意 NPM 套件到達開發環境前清除威脅。
- **惡意廣告散布（OXLOADER/CastleStealer）：** MetaDefender Cloud 在網路邊緣掃描下載檔案，攔截已知與未知惡意軟體。
- **憑證外洩防護（FortiBleed）：** Email Security 防止釣魚郵件傳遞竊密 payload，File Security 跨協定掃描附件。
- **老舊設備防護（AryStinger）：** 零信任存取解決方案為無法立即更換的未修補基礎設施提供額外安全層。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
