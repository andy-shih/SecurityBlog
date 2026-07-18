---
title: "CISO 每日摘要：Anthropic Fable 5 算力危機 — 大規模限制用量、與 Meta 洽談 100 億美元交易 (20260718)"
description: "Anthropic 大幅調降 Claude Fable 5 存取限制，同時傳出與 Meta 洽談百億美元算力租用協議；Musk 開源 Grok Build 應戰。本日其他威脅：NPM Jscrambler 供應鏈攻擊、Inc 勒索軟體利用 SonicWall 零日漏洞、NadMesh 僵屍網路鎖定 AI 服務、GoldenEyeDog 竊取 DigiCert 代碼簽章憑證、OpenSSL HollowByte 漏洞、WordPress wp2shell RCE 漏洞。"
pubDate: 2026-07-18
tags: [Anthropic, Fable 5, Claude, 供應鏈攻擊, Jscrambler, 勒索軟體, SonicWall, 僵屍網路, OpenSSL, WordPress, 資安, CISO 摘要]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 算力危機

Anthropic 大幅縮減 Claude Fable 5 在 Max 與 Team Premium 訂閱層級的存取限制，使用額度降至先前的 **50%**，並將大量使用者推向 API 定價方案。此舉源於 **Fable 5 的算力需求超出可用容量**，模型本身的複雜度與使用者的快速增長已使內部基礎設施不堪負荷。

根據 **Startup Fortune** 報導，部分使用者開始看到使用額度耗盡的錯誤訊息，甚至誤以為 Fable 5 服務中斷。Anthropic 在社群媒體上承認此情況，表示這是需求空前下的容量管理問題。

**Crypto Briefing** 等媒體報導，Anthropic 正與 **Meta** 進行早期談判，計劃租用其算力，交易金額可能超過 **100 億美元**。Meta 為訓練 Llama 模型準備的閒置 GPU 容量將為 Anthropic 提供大規模運算支援。The New Stack 指出，Anthropic 目前每月向 **xAI 支付約 12.5 億美元** 的算力費用。

在競爭層面，Elon Musk **開源了 Grok Build** 訓練與部署框架，直接挑戰 Anthropic 的封閉生態。此舉凸顯 **AI 算力軍備競賽** 的白熱化——GPU 存取權已與模型品質同等重要。

在企業工具方面，**1Password 為 Claude AI 代理推出受控登入功能**，使代理能代表使用者登入網站而不暴露憑證，對 AI 驅動的工作流程自動化具有重要意義。

### 這對 AI 治理的深遠影響

Fable 5 的算力限制暴露了前沿 AI 部署的根本矛盾：**即使是最強大的模型，其可靠性也取決於背後的基礎設施**。對於評估 AI 廠商風險的 CISO 而言，此事件凸顯幾個關鍵考量：

- **容量透明度不足：** Anthropic 的配額分配機制不透明，企業客戶無法預測或保證 Fable 5 可用性，對依賴 AI 的工作流程造成營運風險。
- **基礎設施依賴集中化：** 與 Meta 的百億美元交易及每月 12.5 億美元的 xAI 算力費用，顯示 Anthropic 的服務連續性高度依賴競爭對手的善意——對下游使用者構成集中風險。
- **開源替代方案崛起：** Musk 開源 Grok Build，加上英國 AI 安全研究院指出開源模型已逐漸接近前沿能力，為企業提供了議價空間和替代方案。

---

## 本週活躍威脅

📌 **NPM 供應鏈攻擊：Jscrambler 遭入侵**
駭客滲入 **Jscrambler** NPM 套件，利用其散布 **Rust 語言的竊資軟體** 給下游使用者。iThome 報導 Jscrambler 開發團隊已公布調查結果，確認供應鏈遭入侵。同時，**七個惡意的 Vite NPM 套件** 被發現使用基於區塊鏈的 C2 基礎設施傳遞遠端存取木馬（RAT），由 The Hacker News 揭露。這兩起事件凸顯 JavaScript 套件生態系統持續存在的漏洞。
🔗 **參考資料：** [iThome — Jscrambler 攻擊](https://www.ithome.com.tw/news/177419) | [iThome — 調查結果](https://www.ithome.com.tw/news/177420) | [The Hacker News — Vite 套件](https://thehackernews.com/2026/07/seven-malicious-vite-npm-packages-use.html)

📌 **Inc 勒索軟體利用 SonicWall SMA 零日漏洞**
Inc 勒索軟體集團正在積極利用 **SonicWall SMA（Secure Mobile Access）** 設備中先前未公開的 **零日漏洞**，以取得企業網路的初始存取權。DarkReading 報導指出，該漏洞鏈繞過身分驗證，允許在未修補的設備上執行遠端程式碼。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/inc-ransomware-exploits-sonicwall-sma-zero-days)

📌 **NadMesh 僵屍網路鎖定暴露的 AI 服務**
名為 **NadMesh** 的新型僵屍網路正在掃描網際網路上暴露的 AI/ML 基礎設施——包括 **雲端 API 金鑰、Kubernetes Token 和未受保護的 Jupyter Notebook**——以劫持 GPU 算力進行加密貨幣挖礦和憑證竊取。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-nadmesh-botnet-hunts-exposed-ai.html)

📌 **GoldenEyeDog 組織涉及 DigiCert 資料外洩**
追蹤為 **GoldenEyeDog** 的威脅攻擊者子集團被發現與 **DigiCert 資料外洩事件** 有關，涉及 **代碼簽章憑證** 的竊取。被竊取的憑證可能被用來簽署惡意軟體以繞過端點偵測。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/goldeneyedog-subgroup-linked-to.html)

📌 **OpenSSL HollowByte 漏洞 — 11 位元組 TLS 請求即可癱瘓記憶體**
新揭露的 **OpenSSL** 漏洞 **HollowByte**（已分配 CVE 編號），允許攻擊者發送 **11 位元組的 TLS 交握請求** 來凍結伺服器記憶體，導致受影響伺服器服務中斷。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/openssl-hollowbyte-flaw-could-freeze.html)

📌 **WordPress wp2shell 核心漏洞 — 未經認證即可執行任意程式碼**
WordPress 核心的嚴重漏洞 **wp2shell**，允許 **未經認證的攻擊者執行任意程式碼**。The Hacker News 警告此漏洞正在開發社群中積極討論，實際攻擊的風險正在上升。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html)

📌 **Google Gemini — 鎖定畫面訊息漏洞**
**Google Gemini** 助手整合功能存在安全性問題，允許陌生人向鎖定的 Android 手機發送訊息，繞過鎖定畫面的通知屏障。Bitdefender 的 Hot for Security 部落格探討了此問題對行動裝置安全政策的影響。
🔗 **參考資料：** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/googles-gemini-strangers-messages-locked-android-phone)

---

## OPSWAT 可以怎麼幫上忙

**Jscrambler NPM 供應鏈攻擊** 和 **惡意 Vite NPM 套件** 均涉及透過受信任的軟體更新管道散布檔案型惡意軟體。**OPSWAT MetaDefender** 提供 **超過 30 個防毒引擎** 的多重掃描以及針對 JavaScript 套件和 NPM 產品的 **內容淨化與重建（CDR）**，可在惡意程式碼到達建置管道前即時偵測已知與未知威脅。MetaDefender 的 **Deep CDR** 能從套件檔案中移除潛在的惡意巨集和腳本，同時保留功能正常運作，有效降低 CI/CD 環境的供應鏈風險。

