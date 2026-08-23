---
title: "CISO 每日摘要：Anthropic 年化營收破 650 億美元，催生 2 兆 IPO 與自研晶片 (20260823)"
description: "Anthropic 年化營收運行率於七月底突破 650 億美元（五月為 470 億），有望在本月遞交估值約 2 兆美元的 IPO；Claude 團隊延攬前 Google TPU 負責人 Amir Salek 組建自研晶片部門；ChinaTalk 分析揭露中國「中轉站」灰色市場以約原價一成轉售 Claude token，並透過境外代理蒐集提示詞與程式碼。"
pubDate: 2026-08-23
tags: [CISO, 每日摘要, Anthropic, AI 供應鏈, Claude, IPO, 晶片, 灰色市場]
author: "Security Solutions Team"
featured: true
---

## Anthropic 年化營收破 650 億美元，催生 2 兆 IPO 與自研晶片

據 Bloomberg（經 TechCrunch 於 8/17 報導），Anthropic 年化營收運行率於七月底突破 **650 億美元**，高於五月的 **470 億**，去年底僅 **90 億**；此軌跡使這家 Claude 開發商有望在本月遞交估值約 **2 兆美元** 的 IPO，年化營收約 **650 億美元**。

為確保算力，Anthropic 延攬前 Google 主管 **Amir Salek**——曾主導七代 Tensor Processing Unit（TPU）開發——組建自研晶片部門，向算力負責人 James Bradbury 匯報（Bloomberg 經 Yahoo Finance 於 8/22 報導）。該實驗室亦承諾初期投入 **2.5 億美元** 給英國晶片公司 Fractile，並與 Riot Platforms、Volta Infra Holdings 簽訂算力協議。此舉與 OpenAI 攜手 Broadcom 共同開發自研「Jalapeno」晶片如出一轍，顯示頂尖 AI 實驗室正競相降低對 Nvidia、Amazon 與 Google 的依賴。

### 這對 AI 供應鏈治理的深遠影響

- 算力已是前沿 AI 的關鍵瓶頸，而算力集中於 Nvidia、少數超大型雲端與各實驗室自研晶圓廠，對 CISO 日益依賴的資安工具形成單點故障。
- 規模達 **2 兆美元** 的公開市場估值，大幅提高國家級竊取模型權重、蒸餾數據與 Claude 存取權的誘因，使西方 AI 的防禦邊界繫於單一資產負債表。
- 對採購 Claude 資安產品的 CISO 而言，影響在於供應商連續性風險：受限於單一主導模型家族、且硬體供應脆弱的實驗室，同時暴露於供應衝擊與針對性間諜活動。

🔗 **參考資料：** 綜合報導（[TechCrunch](https://techcrunch.com/2026/08/17/anthropics-annualized-revenue-surges-to-65b/)、[Yahoo Finance / Bloomberg](https://finance.yahoo.com/technology/ai/articles/anthropic-hires-ex-google-chip-211528852.html)）

---

## 本週活躍威脅

📌 **Anthropic 延攬前 Google TPU 負責人 Amir Salek 組建自研晶片部門**
Claude 開發商招募主導七代 TPU 的主管，直接向算力負責人 James Bradbury 匯報，著手設計自有晶片以降低對 Nvidia、Amazon 與 Google 的依賴。該實驗室亦承諾投入 **2.5 億美元** 給英國晶片公司 Fractile，並與 Riot Platforms、Volta Infra 簽訂算力協議。此轉向使前沿模型可用性與脆弱且集中的硬體供應鏈更加緊綁——對所有建構於 Claude 之上的資安產品構成連續性風險。
🔗 **參考資料：** [Yahoo Finance / Bloomberg](https://finance.yahoo.com/technology/ai/articles/anthropic-hires-ex-google-chip-211528852.html)

📌 **中國灰色市場以約一成價格經「中轉站」轉售 Claude token**
ChinaTalk 由牛津研究員 Zilan Qian 發表、經 The Decoder（8/23）刊出的分析，詳述一套模組化供應鏈——帳號仲介、簡訊驗證平台，以及可破解 Anthropic 自拍 KYC 的 AI 偽造證件與深度偽造生物特徵——將 Claude API 流量經境外代理「中轉站」轉送。中國開發者以約原價 **10%** 購得 token；業者以「稀釋」手法將 Opus 請求悄悄改送往較便宜的 Sonnet 或 Qwen（某「Gemini-2.5」端點在醫療基準僅得 **37%**，官方為 **83.82%**）。真正的利潤可能來自蒐集每筆代理請求的提示詞、原始碼與工具呼叫紀錄——這是一條資料外洩路徑，亦會削弱 Anthropic 跨代理帳號的 Clio 濫用監控。
🔗 **參考資料：** [The Decoder](https://the-decoder.com/how-chinas-gray-market-sells-claude-tokens-at-a-fraction-of-the-price/)
