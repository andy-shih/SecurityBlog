---
title: "CISO 每日摘要：加州政府與 Anthropic 簽署州級 AI 合作協議 (20260629)"
description: "加州政府與 Anthropic 簽署全美首個州級 AI 合作協議；美國部分解除 Claude Mythos 5 出口管制；DirtyClone Linux 核心本地權限提升漏洞（CVE-2026-43503, CVSS 8.8）；libssh2 重大漏洞（CVE-2026-55200, CVSS 9.2）公開 PoC；Microsoft 移除 119 個 Edge 惡意擴充套件；遭劫持的 npm/Go 套件透過 VS Code 任務部署 Python 資訊竊取器；Amadey 與 StealC 惡意軟體感染逾 14 萬台電腦；Gamaredon APT 組織擴大對烏克蘭攻勢。"
pubDate: 2026-06-29
tags: [CISO, 每日摘要, 資安, 威脅情資, Anthropic, 加州, AI治理, 漏洞, 供應鏈, 惡意軟體]
author: "Security Solutions Team"
featured: true
---

## 加州政府與 Anthropic 達成 AI 合作協議

加州州長紐森宣布與 Anthropic 簽署首創合作協議，提供 Claude AI 工具予州政府機構以改善公共服務。加州因此成為全美第一個正式整合前沿 AI 模型進入政府運作的州，應用範圍涵蓋市民服務、內部工作流程與數據分析。此舉緊接在美國政府部分解除 Anthropic Claude Mythos 5 出口管制之後——目前已允許逾 100 家政府與企業組織存取該模型，但 Claude Fable 5 仍受限制。Anthropic 也為政府客戶提供大幅折扣，加州為首個合作夥伴（[CA.gov](https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/)、[iThome](https://www.ithome.com.tw/news/176921)）。

### 這對 AI 治理的深遠影響

加州與 Anthropic 的合作協議為其他州的 AI 採購建立了可參考的範本。政府採購結合企業級折扣的模式，顯示 AI 安全 debate 正轉向公共部門的實際部署。對 CISO 而言，這帶來了全新的供應商風險管理考量——包括政府受控環境中的資料落地、模型存取控制，以及 AI 生成內容的稽核要求。

---

## 本週活躍威脅

📌 **DirtyClone Linux 核心本地權限提升漏洞（CVE-2026-43503, CVSS 8.8）** — JFrog 揭露 DirtyClone 是 DirtyFrag 核心漏洞的新變種，允許本地使用者透過克隆封包取得 root 權限。影響 Debian、Ubuntu 與 Fedora 系統的預設命名空間配置。任何持有 CAP_NET_ADMIN 權限的本地使用者（常可透過非特權使用者命名空間取得）均可能遭到利用（[iThome](https://www.ithome.com.tw/news/176913)、[THN 週報](https://thehackernews.com/2026/06/weekly-recap-linux-kernel-flaws-ai.html)）。

📌 **libssh2 重大用戶端漏洞（CVE-2026-55200, CVSS 9.2）** — 該漏洞的公開概念驗證（PoC）已釋出，允許惡意 SSH 伺服器在無需憑證或用戶互動下觸發連接用戶端的記憶體毀損。libssh2 嵌入於 curl、Git、PHP、備份代理程式及無數裝置中——其中多為靜態連結，系統套件更新無法修補（[THN](https://thehackernews.com/2026/06/public-poc-released-for-critical.html)）。

📌 **Microsoft Edge StegoAd 惡意擴充套件** — Microsoft 從 Edge 附加元件商店移除 119 個惡意擴充套件。這些套件使用隱寫術將惡意程式碼藏在圖片與字型檔案中，以廣告封鎖器、VPN 與影片下載器等形式偽裝，總安裝量達 260 萬用戶，用於竊取憑證與執行廣告詐騙（[THN](https://thehackernews.com/2026/06/microsoft-removes-119-edge-extensions.html)）。

📌 **遭劫持的 npm 與 Go 套件部署資訊竊取器** — JFrog 發現兩個遭劫持的 npm 套件及多個 Go 套件，透過 VS Code 任務在 Windows、Linux 與 macOS 上部署 Python 資訊竊取器。攻擊技巧規避了 npm v12 的生命週期指令碼安全機制，並從區塊鏈交易資料中檢索加密酬載（[THN](https://thehackernews.com/2026/06/hijacked-npm-and-go-packages-use-vs.html)）。

📌 **Amadey 與 StealC 惡意軟體網路遭瓦解** — 微軟協助的 Operation Endgame 執法行動發現 Amadey 與 StealC 兩個惡意程式家族共享相同的犯罪基礎設施，收復 2700 萬筆遭竊憑證。這兩個惡意軟體在兩週內感染超過 14 萬台電腦（[iThome](https://www.ithome.com.tw/news/176943)）。

📌 **Gamaredon APT 擴大對烏克蘭攻勢** — ESET 記錄到俄羅斯 APT 組織 Gamaredon 在 2025 年間發動 35 場針對烏克蘭政府與軍方的魚叉式釣魚攻擊。該組織部署新型惡意軟體並濫用雲端服務作為命令通道，主要目標是竊取敏感資訊以支援俄羅斯戰略利益（[THN](https://thehackernews.com/2026/06/gamaredon-expands-ukraine-attacks-with.html)）。

📌 **中國駭客 UAT-7237 鎖定東南亞政府機關** — 該組織從攻擊臺灣網站代管基礎設施擴大至東南亞政府機關、能源關鍵基礎設施與國營企業，使用 ASPX 網頁後門、SoftEther VPN 隧道與 TinyRCT 木馬維持存取、橫向移動並竊取資料（[iThome](https://www.ithome.com.tw/news/176945)）。

---

## OPSWAT 可以怎麼幫上忙

遭劫持的 npm/Go 套件、Microsoft Edge 擴充套件隱藏惡意軟體，以及 Amadey/StealC 惡意軟體散播網路，都凸顯了在每個進入點進行檔案層級防禦的必要性。OPSWAT MetaDefender 透過多重掃描（30+ 防毒引擎）與深度內容 disarm 及重構（CDR）技術，在檔案（套件、擴充套件、文件、二進位檔）到達終端使用者前進行檢查與淨化。MetaDefender Cloud 可整合至 CI/CD 管線中，掃描第三方套件中的惡意軟體與隱藏酬載，在供應鏈攻擊發生前加以預防。

🔗 **參考資料：** 綜合報導（[THN](https://thehackernews.com/2026/06/hijacked-npm-and-go-packages-use-vs.html)、[THN](https://thehackernews.com/2026/06/microsoft-removes-119-edge-extensions.html)、[iThome](https://www.ithome.com.tw/news/176943)）
