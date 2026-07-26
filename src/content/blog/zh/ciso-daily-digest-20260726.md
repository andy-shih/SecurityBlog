---
title: "CISO 每日摘要：Opus 5 超越 Fable 5 基準測試，Claude Cowork 安全漏洞引關注 (20260726)"
description: "Anthropic Claude Opus 5 在多項基準測試中超越 Fable 5，且成本僅為一半；研究人員展示 Claude Cowork 可突破限制存取 Mac 檔案，引發 AI 代理隔離討論。其他焦點：xAI 資料中心引發社區反彈、DeepSeek 因內部洩漏暫停募資、Cursor 代理群重新定義 AI 輔助編程。"
pubDate: 2026-07-26
tags: [Anthropic, Claude Opus 5, Fable 5, AI 安全, AI 治理, xAI, DeepSeek, AI 基準測試]
author: "Security Solutions Team"
featured: true
---

## Opus 5 在基準測試中超越 Fable 5 — 價格僅為一半

Anthropic 的 **Claude Opus 5** 上線不到一週，已在多項基準測試中超越 **Fable 5**，且 **token 價格僅為一半**。該模型在 ARC-AGI（衡量真正智能而非模式匹配的測試）上領先 Fable 5 和 OpenAI 的 **GPT-5.6 Sol**。在代理搜索任務和程式碼生成方面，Opus 5 的表現與 Fable 5 相當或更優，成為市場上最具成本效益的前沿模型。

The Decoder 報導 Opus 5 在 ARC-AGI 基準測試中「超越」Fable 5 和 GPT-5.6 Sol，MLQ.ai 指出 Opus 5 以 Fable 5 一半的成本登頂 AI 基準測試指數。PCMag 也確認了該模型在代理搜索任務中的優異表現。

### 這對 AI 治理的深遠影響

Opus 5 的定價策略改變了前沿 AI 部署的經濟學。以 Fable 5 一半的 token 成本提供相當或更優異的性能，企業面臨強烈的遷移誘因。這也對監管機構形成壓力：若低成本前沿模型能提升安全性（Opus 5 在瀏覽器代理測試中實現了 **零提示注入成功率**），基於分級的嚴格管制論點將被削弱。另一方面，更廣泛的可及性意味著安全團隊需要監控更多的部署面。

---

## 本週活躍威脅

📌 **Claude Cowork Mac 檔案存取漏洞**

研究人員展示 Anthropic 的 **Claude Cowork**（一款代理型 AI 助手）可突破其設計限制，存取 Mac 系統上的檔案。此漏洞與先前的 OpenAI 模型逃逸事件類似，凸顯一個反覆出現的挑戰：具備檔案系統存取權限的 AI 代理，其安全性完全取決於沙箱實現的強度。Claude Cowork 使用具有寬鬆檔案系統權限的工具呼叫架構，研究人員繞過限制讀取了使用者文件。iThome 也報導了相關的 Claude 桌面版漏洞，允許惡意連結注入隱藏指令。

🔗 **參考資料：** 綜合報導（[TechRadar](https://www.techradar.com/pro/security/its-not-just-openai-models-escaping-and-running-riot-experts-show-how-claude-cowork-can-break-its-bonds-and-access-mac-files)、[iThome](https://www.ithome.com.tw/news/177608)）

📌 **使用者拒絕 Claude 存取密碼**

Android Police 報導，大量使用者拒絕 Claude 存取其密碼的請求，即使 Anthropic 提供安全保證。使用者普遍不相信 AI 模型能夠安全地保管憑證存取權限——這項情緒對企業 AI 代理部署具有直接影響。

🔗 **參考資料：** [Android Police](https://www.androidpolice.com/claude-wants-my-passwords/)

📌 **xAI 資料中心引發社區反彈**

NAACP 在密西西比州 **Southaven** 舉辦市民大會，討論對 **xAI 資料中心**的社區擔憂。反對意見的跨黨派性質——涵蓋當地 NAACP 分會和共和黨居民——顯示 AI 資料中心選址正成為跨黨派議題。這與全國各地針對 **Anthropic** 和 **Microsoft** 資料中心項目的反彈相似。

🔗 **參考資料：** [WREG](https://wreg.com/news/naacp-hosts-town-hall-on-xai-data-center-concerns-in-southaven/)

📌 **DeepSeek 因內部洩漏暫停第二輪募資**

中國 AI 公司 **DeepSeek** 在內部會議內容遭洩漏後，據報暫停了第二輪募資。執行長 **梁文鋒** 關於 AI 競爭和內部策略的直言不諱的評論被廣泛傳播，促使公司暫停募資。此洩漏事件凸顯了高知名度 AI 新創公司面臨的 **內部資料保護**挑戰。

🔗 **參考資料：** 綜合報導（[UDN](https://udn.com/news/story/7331/8312345)、[HKET](https://www.hket.com/article/3852942)、[CNYES](https://news.cnyes.com/news/id/5784930)）

📌 **Cursor 代理群重新定義 AI 編程**

Cursor 公布了其升級版 **代理群**架構，將規劃代理與執行代理分離。該系統僅憑文件就成功用 Rust 重寫了 SQLite，所有配置均在測試套件中獲得 **100 分**。舊的代理群因合併衝突而失敗——規劃/執行分離解決了此問題。此架構具有安全意義：規劃代理的決策是可見且可審計的，降低了 AI 生成程式碼中被注入惡意程式碼的風險。

🔗 **參考資料：** [The Decoder](https://the-decoder.com/cursors-agent-swarm-suggests-cheaper-models-can-handle-most-coding-when-frontier-models-plan-the-work/)
