---
title: "CISO 每日摘要：MOVEit 認證繞過、DigiCert 遭入侵與 AI 安全治理 (20260505)"
description: "Progress 修補 MOVEit Automation 重大認證繞過漏洞；DigiCert 遭社交工程入侵致程式碼簽章憑證外洩；Google、微軟、xAI 同意美國政府 AI 模型審查；2026 臺灣資安大會登場"
pubDate: 2026-05-05
tags: ["CISO 每日摘要", "網路安全", "威脅情報"]
author: "Security Solutions Team"
featured: true
---

**Progress 修補 MOVEit Automation 重大認證繞過漏洞**

- **Progress Software** 為 **MOVEit Automation**（企業檔案傳輸解決方案）發布了重大認證繞過漏洞的緊急修補程式
- 此漏洞允許攻擊者完全繞過認證，未經授權存取檔案傳輸管理介面
- 考慮到 **MOVEit Transfer** 在 2023 年造成數千個組織受影響的大規模利用事件（Clop 勒索軟體行動），此修補被視為緊急事項
- 使用 MOVEit Automation 的組織建議立即修補並審查存取日誌，尋找是否已有入侵跡象

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/05/progress-patches-critical-moveit.html)、[iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFBHcDgwSTJUR0VDZUY5RS1TNW5K...))

### 本週活躍威脅

📌 **DigiCert 社交工程攻擊 — EV 程式碼簽章憑證外洩遭撤銷**

數位憑證機構 **DigiCert** 的客服系統遭受社交工程攻擊，導致 **EV（增強驗證）程式碼簽章憑證**外洩並遭撤銷。此次洩漏削弱了對憑證生態系統的信任，影響依賴 DigiCert 簽發憑證驗證其程式碼的軟體開發商。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE44QTIxM0NOVUZIWGlybjVSWXdm...)

📌 **Google、微軟和 xAI 同意讓美國政府提前審查 AI 模型**

在一項里程碑式的網路安全治理行動中，**Google DeepMind**、**微軟**和 **xAI** 與美國政府（透過 CAISI）簽署協議，在公開發布前**提前提供新 AI 模型**供國家安全審查。這些協議正值人們擔憂 AI 能力加速網路攻擊，以及先進模型可能發現零日漏洞之際。

🔗 **參考資料：** [Reuters](https://news.google.com/rss/articles/CBMiwgFBVV95cUxPYlJtWTJXeU5IZHd5UE1wdXZl...) | [Financial Times](https://news.google.com/rss/articles/CBMicEFVX3lxTE5HNnM3YldnTVdNVTlLNEl0MHlr...)

📌 **釣魚活動利用 SimpleHelp 和 ScreenConnect RMM 工具攻擊 80 多個組織**

一場大規模釣魚活動透過武器化合法的遠端監控管理（**RMM**）工具——**SimpleHelp** 和 **ScreenConnect**，入侵了 **超過 80 個組織**。攻擊者利用社交工程誘騙 IT 人員安裝遠端存取工具，然後橫向移動以部署勒索軟體和竊取資料。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/phishing-campaign-hits-80-orgs-using.html) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/rmm-tools-stealthy-phi...)

📌 **ScarCruft 入侵遊戲平台，在 Android 和 Windows 上部署 BirdCall 惡意軟體**

與北韓有關聯的威脅組織 **ScarCruft**（又稱 APT37）入侵了一個遊戲平台，在 **Android 和 Windows** 裝置上同時部署 **BirdCall** 惡意軟體。此行動展示了 APT 組織不斷擴展的跨平台攻擊能力，以及他們利用遊戲社群進行初始存取的策略。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/05/scarcruft-hacks-gaming-platform-to.html)

📌 **CrowdStrike 整合 Anthropic Claude Opus 4.7 增強 Falcon 平台 AI 能力**

**CrowdStrike** 宣布將 **Anthropic 的 Claude Opus 4.7** 整合到 Falcon 平台中，以增強 AI 驅動的威脅偵測和回應能力。此合作反映了端點安全平台與大型語言模型能力日益融合的趨勢，支援自然語言調查和自動化事件回應。

🔗 **參考資料：** [iThome](https://news.google.com/rss/articles/CBMiswFBVV95cUxOT1NMcTJsb1d0YlMtc3dhWVE2...)

### OPSWAT 能做什麼

MOVEit 認證繞過、DigiCert 憑證外洩和 RMM 工具釣魚活動都凸顯了檔案層級檢查和憑證驗證的重要性。OPSWAT 的 **MetaDefender 平台** 為檔案上傳（包括 MOVEit 流量）提供多引擎掃描、使用 **CDR** 中和武器化文件，以及透過**主動 DLP** 偵測未經授權的憑證存取和資料外洩。該平台還支援深度檔案檢查，可偵測和封鎖嵌入常見攻擊檔案傳輸協定中的威脅。
