---
title: "CISO 每日摘要：Anthropic Fable 5 大規模運算擴張與 Meta 100 億美元租約 (20260720)"
description: "Anthropic 傳出向 Meta 租用 100 億美元運算基礎設施；Claude Fable 5 計費方式改為 Max 免費、Pro 按 token 收費；推出醫療版 Claude。多個重大漏洞揭露：NGINX RCE、7-Zip RCE、SonicWall 零時差漏洞遭勒索軟體利用、OpenSSL HollowByte DDoS、WordPress wp2shell RCE。Hugging Face 遭自主 AI 代理入侵。"
pubDate: 2026-07-20
tags: [CISO, 每日摘要, 資安, Anthropic, 漏洞, AI 治理, 雲端安全]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 大規模運算擴張 — Meta 100 億美元租約與計費重整

Anthropic 據傳正與 **Meta** 洽談租用 **100 億美元** 的運算基礎設施，以支撐 Claude 持續增長的推論需求，此舉顯示 AI 基礎設施集中化風險正急遽升高。與此同時，Anthropic 重整 **Claude Fable 5** 定價策略：**Max** 方案用戶可免費使用 Fable 5，而 **Pro** 訂閱用戶則改採 **按 token 計費** 模式，反映該模型極高的運算成本。

Anthropic 同時推出 **醫療版 Claude**（Claude for Healthcare），進軍 HIPAA 監管產業，並重整整體訂閱方案。Manifold 揭露的 **ClaudeBleed** 漏洞仍未完全修補——攻擊者可透過惡意瀏覽器擴充套件，經由 Claude 的瀏覽器整合功能讀取使用者的 **Gmail 信件**。

若這筆運算租約成交，將形成 AI 基礎設施的**雙向集中風險**：Meta 提供晶片與算力，Anthropic 在其上運行模型。對企業 CISO 而言，這代表 AI 供應鏈中出現了新的單點故障——Meta 的算力供應或 Anthropic 的存取條件一旦改變，將直接影響服務持續性。

### 這對 AI 基礎設施治理的深遠影響

100 億美元運算租約代表了 AI 基礎設施依賴的新模式。與傳統雲端合約（企業分散 workload 至 AWS/Azure/GCP）不同，這種 Meta-Anthropic 之間的雙向運算換模型關係，引入了全新的**供應商集中風險**。監管機構已在審視 AI 運算存取管制（Fable/Mythos 出口政策），而 Meta-Anthropic 運算協議將使兩大 AI 巨頭處於結構性糾纏狀態。

🔗 **參考資料：** 綜合報導（[Tech Funding News](https://techfundingnews.com/anthropic-is-in-talks-to-lease-10b-of-compute-from-meta-to-keep-claude-running/)、[Tech Times](https://www.techtimes.com/articles/320999/20260720/claude-fable-5-billing-splits-today-max-gets-it-free-pro-pays-per-token.htm)、[Crypto Briefing](https://cryptobriefing.com/anthropic-claude-healthcare-ai-launch/)、[iThome (ClaudeBleed)](https://www.ithome.com.tw/news/177461)）

---

## 本週活躍威脅

📌 **NGINX RCE、7-Zip RCE 與 SonicWall 零時差漏洞遭利用**
**NGINX 重大漏洞**可導致 worker 程序崩潰並可能允許遠端程式碼執行，影響全球大量 Web 基礎設施。**7-Zip 漏洞**允許透過特製 XZ 壓縮檔在解壓縮時執行任意程式碼。**SonicWall SMA 零時差漏洞（CVSS 10.0）** 正遭勒索軟體 Inc 積極利用，攻擊活動可追溯至 6 月下旬。
🔗 **參考資料：** [The Hacker News (NGINX)](https://thehackernews.com/2026/07/critical-nginx-vulnerability-can-crash.html) | [The Hacker News (7-Zip)](https://thehackernews.com/2026/07/new-7-zip-vulnerability-could-let.html) | [iThome (SonicWall)](https://www.ithome.com.tw/news/177422)

📌 **OpenSSL HollowByte DDoS 與 WordPress wp2shell RCE**
**11 位元組酬載**即可透過 **HollowByte** 攻擊向量對執行弱點版本 OpenSSL 的伺服器發動 DDoS（已於 OpenSSL 4.0.1 修復）。**wp2shell** 是 WordPress 核心的遠端程式碼執行漏洞，允許未經認證的攻擊者在弱點網站上執行任意 PHP 程式碼。
🔗 **參考資料：** [iThome (HollowByte)](https://www.ithome.com.tw/news/177425) | [iThome (wp2shell)](https://www.ithome.com.tw/news/177424)

📌 **Hugging Face 遭自主 AI 代理入侵**
全球最大 AI 模型儲存庫 **Hugging Face** 遭自主 AI 代理入侵，攻擊者竊取內部憑證並進行橫向移動。這是首例確認由 AI 代理自主完成完整攻擊鏈（從偵察、憑證竊取到橫向移動）的資安事件，為 AI 供應鏈安全樹立了令人憂心的先例。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/worlds-largest-ai-model-repository.html) | [iThome](https://www.ithome.com.tw/news/177440)

📌 **俄羅斯情報機構駭入北約國家 IP 攝影機**
俄羅斯國家級攻擊者入侵北約成員國及烏克蘭的 **IP 攝影機網路**，監控軍事後勤與部隊調動。此行動顯示 IoT 間諜活動日益精密。另一方面，一名俄語駭客使用 **Google Gemini CLI** 控制由八間牙科診所 PC 組成的殭屍網路。
🔗 **參考資料：** [The Hacker News (IP 攝影機)](https://thehackernews.com/2026/07/russian-intelligence-hacks-ip-cameras.html) | [The Hacker News (Gemini 殭屍網路)](https://thehackernews.com/2026/07/russian-speaking-hacker-uses-google.html)

---

## OPSWAT 可以怎麼幫上忙

今日威脅態勢以**檔案承載攻擊**為主（7-Zip 特製壓縮檔、WordPress PHP 酬載、SonicWall 漏洞工具組、NPM 套件 Jscrambler 遭入侵等）。OPSWAT **MetaDefender** 多引擎掃描 + CDR（內容淨化與重構）可在檔案與套件到達端點前就清除威脅——包括特徵碼偵測無法發現的零日漏洞。針對 Hugging Face AI 供應鏈攻擊情境，MetaDefender 的 **Deep CDR** 可檢查並淨化 AI 模型檔案，因應新興的自主代理威脅向量。
