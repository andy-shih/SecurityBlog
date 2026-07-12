---
title: "CISO 每日摘要：OpenAI 與 Anthropic 警告中國實驗室以大量假帳號複製 AI 模型 (20260712)"
description: "OpenAI 和 Anthropic 聯合警告中國政府資助的實驗室使用數萬個假帳號透過蒸餾技術竊取 AI 模型；Grok 因涉及暴力犯罪被起訴，AI 責任歸屬問題升溫；DeepSeek 積極研發自製 AI 晶片以降低對 NVIDIA 和華為的依賴。"
pubDate: 2026-07-12
tags: [AI 治理, AI 安全, 模型竊取, 中國實驗室, 供應鏈安全, Anthropic, OpenAI, Grok, DeepSeek, 半導體]
author: "Security Solutions Team"
featured: true
---

## OpenAI 與 Anthropic 警告中國實驗室以大量假帳號複製 AI 模型

OpenAI 和 Anthropic 聯合發布警告指出，中國政府資助的實驗室正使用數萬個假帳號，透過 API 蒸餾技術系統性地竊取其 AI 模型。該行動涉及大規模自動化帳號創建，繞過現有的速率限制和身分驗證機制，以提取模型權重和行為模式。

兩家公司形容此行動規模空前——假帳號遍布多個司法管轄區——並呼籲業界加強對 AI 模型竊取的防禦能力。這項警告發布於美中科技緊張局勢升溫之際，且先前已有中國實驗室針對尖端 AI 公司進行智慧財產權竊取的相關報導。

對 CISO 而言，此事件凸顯了一種新型供應鏈風險：若模型權重可透過 API 濫用被竊取，那麼依賴這些基礎模型的 AI 驅動安全工具和企業 AI 部署，其完整性將難以確保。此事件也顯示現行 API 存取控制在防止大規模模型萃取方面的不足。

### 這對 AI 治理的深遠影響

此行動的規模——數萬個帳號——顯示有協調的國家支持，代表了與早期小規模 AI 模型竊取嘗試的本質差異。這引發了幾個迫切問題：
- API 模型存取控制是否從根本上不足以應對有國家支持的攻擊者
- 高價值 AI API 存取需要何種驗證機制（身分證明、行為分析、硬體認證）
- 當模型創建者自身都無法完全防止萃取時，企業應如何評估其供應鏈中 AI 模型的來源和完整性

---

## 本週活躍威脅

📌 **Grok 因暴力犯罪被起訴，SpaceX 面臨法律責任**

一起訴訟將 Elon Musk 的 Grok AI 與暴力犯罪連結，使 SpaceX 成為法律訴訟的目標。該案指控與 Grok 的互動在事件中扮演了角色，引發了 AI 平台責任以及消費者導向 AI 系統安全防護措施是否充分的問題。此訴訟可能為 AI 公司對其模型造成的現實危害承擔責任樹立先例。

🔗 **參考資料：** [Futurism](https://futurism.com/artificial-intelligence/grok-linked-sickening-crime)

---

📌 **DeepSeek 自研 AI 晶片 降低對 NVIDIA 和華為依賴**

中國 AI 公司 DeepSeek 正積極開發自有的 AI 推理晶片，旨在減少對 NVIDIA 和華為硬體的依賴。此舉反映了先進半導體出口管制收緊下，供應鏈安全擔憂的持續升溫。對 CISO 而言，這代表 AI 硬體供應鏈持續分裂——可能影響 AI 基礎設施的可用性、安全修補週期和供應鏈保證。

🔗 **參考資料：** [am730](https://www.am730.com.hk/article/1041010)

---

## OPSWAT可以怎麼幫上忙

雖然今日主要為政策和治理相關新聞，但 AI 模型竊取路徑與檔案安全直接相關：AI 模型權重以檔案形式分發，受損的模型檢查點可能將後門引入下游系統。OPSWAT MetaDefender 的多引擎檔案檢測和 CDR（內容淨化與重建）技術可驗證 AI 模型檔案的完整性，並在部署前檢測竄改——這在模型竊取和 AI 基礎設施供應鏈攻擊日益普遍的情況下至關重要。

🔗 **參考資料：** 綜合報導（[Crypto Briefing](https://cryptobriefing.com/openai-anthropic-china-fake-accounts-ai-distillation/)）
