---
title: "CISO 每日摘要：美國政府下令 Anthropic 全球下架 Claude Fable 5 (20260614)"
description: "美國商務部援引出口管制法規，要求 Anthropic 在 90 分鐘內全球下架 Fable 5 與 Mythos 5，Amazon 創辦人 Jassy 向白宮通報安全漏洞成為導火線。同場加映：xAI Grok 安全吹哨者訴訟、NPM 12 預設封鎖安裝腳本以防止供應鏈攻擊、伊朗 Handala 組織宣稱入侵加州水務公司。"
pubDate: 2026-06-14
tags: [AI治理, 供應鏈安全, 關鍵基礎設施, 出口管制, AI安全, Anthropic, NPM]
author: "Security Solutions Team"
featured: true
---

## 美國政府下令 Anthropic 全球下架 Claude Fable 5 與 Mythos 5

**美國商務部**於 2026 年 6 月 12 日發布**出口管制指令**，要求 Anthropic 立即暫停其最強大的兩個 AI 模型 **Claude Fable 5** 與 **Claude Mythos 5** 的全球服務。這是**美國政府首次將半導體層級的出口管制機制應用於已商業部署的 AI 模型**。

- 白宮在美東時間下午 **1:00 給予 Anthropic 90 分鐘的最後通牒**，要求其主動下架模型。下午 5:30，商務部正式送達授權限制信函（Axios、Politico 報導）。
- **Amazon 執行長 Andy Jassy** 親自向川普政府高層簡報 Amazon 研究人員發現的安全疑慮，成為整起事件的導火線。Amazon 是 Anthropic 最大投資人與雲端合作夥伴，此舉形同投資人向政府舉報自家投資組合公司。
- 政府聲稱存在一種 **越獄（jailbreak）技術**可繞過 Fable 5 的安全分類器，使其產生堆疊緩衝區溢位利用程式碼等惡意輸出。Anthropic 反駁表示，該發現僅指出「少數已知、微小的弱點」，且這些能力「其他模型（包括 OpenAI 的 GPT-5.5）也廣泛具備」。
- 由於 Anthropic **無法即時區分使用者國籍**，只能在全球範圍內全面停用兩款模型。其他 Claude 系列（Opus 4.8、Sonnet 4.6、Haiku）維持正常服務。
- 一名獨立審查 Amazon 分析報告的安全研究員將該技術描述為 **「防禦性探測手法，並非越獄」**。

### 此事件對 AI 治理的深遠影響

1. **模型權重納入出口管制開創先例。** 過去用於限制先進半導體流向敵對國家的機制，如今擴展至 AI 軟體權重。這形成了事實上的邊疆 AI 部署許可制度，且缺乏公開制定規則的程序或法定框架。

2. **投資人轉變為告發者的動態。** Amazon 向 Anthropic 投資數十億美元並在 AWS 上代管其模型，如今卻觸發了政府對自家投資組合公司旗艦產品的召回。安全研究人員與業界觀察家警告，這為 AI 領域的競爭對手驅動監管干預打開了大門。

3. **「越獄」定義仍無共識。** Anthropic 與政府的爭議凸顯結構性鴻溝：業者將越獄定義為完整、可靠的安全繞過，而監管機構與安全研究人員則採用更寬鬆的標準。在共享技術框架出現之前，任何邊疆模型的發布都可能因業者認為微不足道的發現而被中止。

🔗 **參考資料：** 綜合報導（[The Decoder](https://the-decoder.com/us-government-forces-anthropic-to-disable-claude-fable-5-and-mythos-5-for-all-customers-worldwide/)、[The Decoder — Amazon 視角](https://the-decoder.com/amazon-and-five-other-companies-reportedly-triggered-the-government-crackdown-on-anthropics-fable-model/)、[Axios 轉載](https://en.yenisafak.com/world/trump-officials-ordered-anthropic-to-pull-ai-models-in-90-minutes-3719518)、[Android Headlines](https://www.msn.com/en-us/news/technology/claude-fable-5-ban-how-a-single-exploit-triggered-a-global-ai-lockdown/ar-AA25zEDI)、[Cybersecurity News](https://cybersecuritynews.com/anthropics-claude-fable-5-jailbroken/)）

---

## 本週活躍威脅

📌 **xAI Grok 安全吹哨者訴訟**

前 xAI 工程師 **Devin Kim** 於 6 月 10 日提起訴訟，指控他在多次提出 **Grok 聊天機器人**的安全疑慮後遭到解僱。訴狀指出 Kim 曾警告薄弱的安全實務可能導致歧視與危險濫用，而他加強防護的努力卻使他在公司內部成為目標。本案同時將 xAI 及其母公司 SpaceX 列為被告，時機點正值 SpaceX 預計的公開上市前夕，使吹哨者風險成為 AI 公司重要的法律與聲譽課題。

🔗 **參考資料：** [Creati.ai](https://creati.ai/ai-news/2026-06-11/xai-grok-safety-whistleblower-lawsuit/) | [Nerova](https://nerova.ai/news/xai-grok-safety-lawsuit-devin-kim-june-10-2026)

📌 **NPM 12 預設封鎖安裝腳本以防止供應鏈攻擊**

GitHub 宣布預計於 2026 年 7 月推出的 **NPM 12** 將**預設停用 `preinstall`、`install` 與 `postinstall` 腳本**的自動執行。這項根本性的安全改革源自於近期一系列供應鏈攻擊——特別是 **axios RAT 事件**（2026 年 3 月，影響超過 17.4 萬個依賴套件）與 **Shai-Hulud 自我複製蠕蟲**——這些攻擊濫用自動腳本執行機制在 JavaScript 生態系統中散布惡意軟體。此變更使 npm 與已預設封鎖安裝腳本的 Yarn、pnpm、Bun 等套件管理器一致。需要原生 `node-gyp` 編譯的套件須透過專案設定明確允許。

🔗 **參考資料：** [SecurityWeek](https://www.securityweek.com/npm-12-will-change-script-execution-behavior-to-prevent-supply-chain-attacks/) | [Rescana](https://www.rescana.com/post/github-disables-npm-install-scripts-by-default-in-v12-to-prevent-javascript-supply-chain-attacks)

📌 **伊朗 Handala 組織宣稱入侵加州自來水公司**

**伊朗關聯的威脅行為者 Handala** 公開宣稱入侵 **California Water Service (Cal Water)**，發布 **5 GB 資料**，包含客戶姓名、地址、電話號碼、帳戶號碼與付款歷史等個資。該組織表示此次入侵是對美國在伊朗軍事行動的報復。威脅情報公司 Dataminr 評估 Handala 可能透過 Cal Water 的 **RTKBase GNSS 實例**（GPS 修正伺服器）取得初始進入點，再橫向移動至客戶帳務系統。關鍵的是，**運營技術（OT）或工業控制系統（ICS）未受影響**，供水服務也未中斷。然而，此事件再次凸顯國家連結的駭客行動主義團體對美國關鍵基礎設施的持續威脅，尤其在水務領域。

🔗 **參考資料：** [SecurityWeek](https://www.securityweek.com/iranian-cyber-group-handala-claims-cal-water-hack/) | [Rescana](https://www.rescana.com/post/handala-cyberattack-claims-iranian-group-targets-california-water-utility-billing-systems-in-bakersfield-visalia-and-chico)
