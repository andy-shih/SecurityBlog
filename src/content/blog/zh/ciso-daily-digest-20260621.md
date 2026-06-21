---
title: "CISO 每日摘要：Anthropic 終止 Fable 5 —「強大到不得不關閉」(20260621)"
description: "Anthropic 永久關閉 Fable 5，坦言模型「強大到不得不關閉」；開發具排程觸發功能的 Conway 代理，標示策略轉向；Claude Max 用戶發起集體訴訟；Claude 身份驗證 7 月 8 日啟動。另：Squid 代理伺服器存在 29 年漏洞，可能暴露快取密碼與金鑰。"
pubDate: 2026-06-21
tags: [Anthropic, AI 治理, Fable 5, Conway 代理, Claude Max, 集體訴訟, 身份驗證, Squid, 漏洞, 代理快取]
author: "Security Solutions Team"
featured: true
---

## Anthropic 終止 Fable 5 與策略轉向

Anthropic 已永久關閉其最先進的 AI 模型 **Fable 5**，公司代表坦言該模型**「強大到不得不關閉」**——這是來自前沿 AI 實驗室的一項重大表態。此舉發生在美國政府對 Fable 5 和 Mythos 5 出口管制風波的數日後，顯示 Anthropic 正在獨立於監管壓力之外，對模型能力安全性做出內部判斷。

與此同時，Anthropic 正在開發 **「Conway」**——一款具有**排程觸發功能**的次世代 AI 代理，能夠在指定時間自主啟動操作。共同創辦人 **Boris Cherny** 曾宣稱軟體工程已「死亡」，如今更表示**手動提示（prompting）時代即將終結**，將 Conway 定位為一個能自主運作而非等待用戶輸入的代理。從被動提示轉向主動代理執行，代表了企業與 AI 互動方式的根本性架構轉變。

此外，Anthropic 正面臨一項**集體訴訟**，指控其 **Claude Max 用戶遭到誤導**，使用者付費購買的高級功能要麼未達承諾、要麼根本無法使用。另外，**Claude 身份驗證**將於 **2026 年 7 月 8 日**啟動，要求使用者提交臉部資料——這為企業部署帶來了新的隱私與合規問題。

### 這對 AI 治理的深遠影響

Fable 5 的退役發出了一個強烈信號：前沿 AI 模型不僅可能因政府命令而被撤銷，也可能因其創造者自身的安全評估而被中止。對於 CISO 而言，這引入了**模型連續性風險**——任何圍繞特定前沿模型構建的企業工作流程都可能面臨突然的終止。Conway 代理的排程觸發自主性也引發了關於**代理式 AI 治理**的新問題：當 AI 代理能夠在無需每次人工審批的情況下自主啟動操作時，現有的安全監控和審批工作流程需要根本性的重新設計。Claude 身份驗證強制要求提交臉部資料，在 GDPR 和台灣個人資料保護法等框架下，為日益增長的 AI 相關法規要求新增了**生物辨識資料隱私合規**的考量。

🔗 **參考資料：** 綜合報導（[How-To Geek](https://www.howtogeek.com/943877/fable-5-was-too-smart-for-its-own-good-so-anthropic-had-to-kill-it/)、[Crypto Briefing](https://cryptobriefing.com/anthropic-scheduled-triggers-conway-agent/)、[Memeburn](https://memeburn.com/2026/06/anthropic-lawsuit-claims-claude-max-users-were-misled/)、[Tech Times](https://www.techtimes.com/articles/312210/20250621/claude-identity-verification-starts-july-8-what-facial-data-anthropic-collects.htm)、[Times of India](https://timesofindia.indiatimes.com/technology/tech-news/anthropic-co-founder-boris-cherny-says-days-of-ai-prompts-are-over/articleshow/119659622.cms)、[NDTV](https://www.ndtv.com/artificial-intelligence/anthropic-suspends-access-to-fable-5-and-mythos-5-ai-models-following-us-government-order-over-security-concerns-11631029)）

---

## 本週活躍威脅

📌 **Squid 代理伺服器 29 年漏洞暴露 HTTP 密碼**
安全研究人員揭露了 **Squid 網頁快取與代理伺服器**中存在一個存在了 **29 年的漏洞**，可能暴露儲存在快取流量中的 HTTP 存取密碼與加密金鑰。該缺陷自 1990 年代 Squid 早期開發以來就一直存在於程式碼中，影響了無數依賴 Squid 進行網頁快取、內容過濾和反向代理功能的企業部署。使用 Squid 的組織應立即審查其快取配置並套用供應商修補程式。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/168912)

---

## OPSWAT 可以怎麼幫上忙

雖然 Squid 漏洞是伺服器端的快取問題而非基於檔案的威脅，但更深層的教訓是：**縱深防禦**依然至關重要。OPSWAT MetaDefender 的**多引擎檔案掃描**（30+ 防毒引擎）可在網路進入點偵測透過代理傳遞的惡意軟體，即使下游系統存在快取漏洞。對於運行代理基礎設施的組織，OPSWAT 的**基於檔案的威脅防護**在繞過快取或代理內容的威脅面前提供了額外的安全層。

🔗 **了解更多：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
