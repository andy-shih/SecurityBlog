---
title: "CISO 每日摘要：Claude Code 隱藏追蹤器曝光 — Anthropic「實驗」衝擊 AI 供應鏈信任 (20260707)"
description: "Anthropic 被抓包在 Claude Code 內藏匿蹤跡偵測中國用戶；阿里巴巴禁用 Claude Code 恐 IP 竊盜；CISA 啟用 Mythos 審計政府程式碼；KVM 存在 16 年虛擬機逃逸漏洞揭露；Adobe ColdFusion 滿分漏洞 2 小時內遭利用；Lazarus 集團發動 NPM 供應鏈攻擊；Akira 勒索軟體透過 SEO 中毒散播。"
pubDate: 2026-07-07
tags: [CISO, 每日摘要, 資安, AI 治理, 供應鏈, 漏洞, 惡意軟體, Anthropic, Claude, 追蹤器, KVM, ColdFusion, 勒索軟體, 釣魚]
author: "Security Solutions Team"
featured: true
---

## Claude Code 隱藏追蹤器與 AI 治理衝擊

### 發生了什麼事

資安界正在密切關注 Anthropic 坦承 Claude Code 內含**隱寫術追蹤器**，用於偵測中國使用者，與該公司一貫反對監控的立場形成強烈對比。這項追蹤器被研究人員發現後，Anthropic 稱之為「實驗」並緊急移除。此事件已引發 AI 供應鏈的**廣泛信任危機**。

**阿里巴巴宣布自 7 月 10 日起禁止員工使用 Claude Code**，理由包括「蒸餾攻擊」（distillation attack）風險與 IP 竊盜疑慮，加入 Meta 限制 Claude 內部使用的行列。但另一方面，CISA 正在使用 **Anthropic 的 Mythos AI** 審計美國政府程式碼中的漏洞，儘管五角大廈與 Anthropic 就 Fable 5 出口管制仍處於爭議中。

其他重要發展：伊利諾州通過法案要求**頂尖 AI 模型接受第三方安全稽核**；Anthropic 與 TeraWulf 簽署**190 億美元肯塔基資料中心租約**；Claude Cowork 被發現可遭濫用取得 VM root 權限；Anthropic 研究人員揭露 Claude 內部「J-Space」推理工作空間——一個先前未發現的新興認知結構。

### 這對 AI 治理的深遠影響

Claude Code 追蹤器事件凸顯了一項根本性的供應鏈風險：**具備遙測功能的 AI 程式碼工具可能雙重作為監控載體**。當企業採用 AI 代理進行程式碼生成時，未揭露的追蹤機制對 IP 敏感環境帶來難以接受的風險。阿里巴巴的禁令顯示地緣政治信任赤字正在碎片化 AI 工具市場，而 CISA 同時擁抱 Mythos 的矛盾立場，凸顯了政府使用前沿 AI 方面的政策真空。

伊利諾州的 AI 稽核法案與持續中的 Fable 5 出口管制爭議進一步表明，**法規正在努力追趕 AI 的雙重用途現實**。CISO 現在必須將 AI 工具鏈視為關鍵供應鏈節點，比照任何第三方函式庫進行同等嚴格的審查。

---

## 本週活躍威脅

📌 **CVE-2026-20896 — Gitea Docker Registry 漏洞遭積極探測**
攻擊者在漏洞揭露後僅 13 天便開始探測 Gitea Docker Registry 漏洞（CVSS 9.1），該漏洞允許未經認證的容器登錄存取。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/threat-actors-probe-gitea-docker-flaw.html)

📌 **Linux KVM 隱藏 16 年的虛擬機逃逸漏洞**
Linux KVM 虛擬化中存在一項長達 16 年的漏洞，允許客戶虛擬機在 Intel 和 AMD x86 系統上逃逸至主機，影響所有使用 KVM 的主要發行版與雲端供應商。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/16-year-old-linux-kvm-flaw-lets-guest.html) | [iThome](https://www.ithome.com.tw/news/177139)

📌 **Adobe ColdFusion 滿分漏洞曝光 2 小時即遭利用**
Adobe 揭露的 ColdFusion 重大漏洞（CVSS 10.0）在公開後 2 小時內即被武器化，攻擊者正積極利用未修補的實例。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177132)

📌 **BeyondTrust 重大認證繞過漏洞 (Remote Support 與 PRA)**
BeyondTrust 修補了 Remote Support 和 Privileged Remote Access 產品中的重大認證繞過漏洞，可能允許未經認證的管理員存取。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/beyondtrust-patches-critical-auth.html)

📌 **CERT/CC 警告 Tenda 路由器韌體存在隱藏管理員後門**
Tenda 路由器韌體中被發現隱藏的管理員後門，影響數百萬消費者和 SOHO 設備，目前尚無修補程式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/certcc-warns-of-hidden-admin-backdoor.html)

📌 **伊朗關聯駭客部署 Cavern C2 框架**
伊朗相關威脅行為者使用名為「Cavern」的新型命令與控制框架，針對以色列組織的多個行業。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/iran-linked-hackers-use-new-cavern-c2.html)

📌 **Lazarus 集團 NPM 供應鏈攻擊**
北韓 Lazarus 集團偽裝成 Rollup 建置工具，在 NPM 生態系統中植入惡意套件，竊取憑證與加密貨幣錢包資料。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177138)

📌 **Akira 勒索軟體透過 SEO 中毒散播**
Akira 勒索軟體操作者利用搜尋引擎最佳化中毒手法，針對搜尋合法工具的 IT 管理員，誘騙下載惡意安裝程式。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177131)

📌 **Avalon AI 驅動惡意軟體框架**
名為「Avalon」的新型惡意軟體框架結合竊資與勒索能力，採用 AI 輔助開發技術以快速演進。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177146)

📌 **BusySnake 竊資軟體瞄準關鍵基礎設施**
Armored Likho 組織部署的「BusySnake」竊資軟體正積極針對政府機關和能源產業。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177101)

📌 **疑似中國關聯駭客利用 Roundcube 漏洞攻擊大學**
國家關聯駭客正利用 Roundcube 網頁郵件漏洞攻擊全球大學。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/suspected-china-aligned-hackers-exploit.html)

📌 **Scattered Spider — Windows 裝置 ID 協助 FBI 追蹤嫌疑人**
法院文件顯示 Windows 裝置識別碼（MachineGUID）協助 FBI 追蹤一名涉嫌 Scattered Spider 的駭客，儘管使用了多層身分混淆。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/court-filing-reveals-windows-device-id.html)

📌 **Writer AI Agent 漏洞 — 跨租戶 Session Token 洩漏**
Writer 的 AI 代理預覽功能中存在漏洞，可能導致跨租戶的 Session Token 洩漏。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/writer-ai-flaw-could-let-agent-previews.html)

📌 **curl 8.21.0 修補 18 項漏洞（包括 25 年舊缺陷）**
curl 專案發布 8.21.0 版，修補 18 項安全問題，其中包括一項存在 25 年的缺陷。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177143)

📌 **OpenSSH 10.4 — 導入後量子密碼簽章與多項修補**
OpenSSH 10.4 引入混合式後量子密碼簽章，並修補多項漏洞。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177136)

📌 **JetBrains 身分管理平臺重大漏洞 — 帳號接管風險**
JetBrains 身分管理平臺中存在重大漏洞，可能導致帳號接管與權限提升。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177100)

📌 **飯店釣魚攻擊 — 濫用 Calendly 與 Google 轉址植入 TonRAT**
駭客針對歐亞飯店發動釣魚郵件攻擊，利用 Calendly 和 Google 轉址功能傳遞 TonRAT 後門。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177145)

📌 **Apple Hide My Email 隱私漏洞**
Apple 的「隱藏我的電子郵件」服務中存在漏洞，可能暴露使用者真實信箱地址。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177147)

📌 **PolinRider — 橫跨 NPM、Packagist、Go、Chrome Web Store 的惡意套件行動**
北韓駭客擴大 PolinRider 攻擊活動，在多個套件登錄庫植入惡意套件。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177137)

---

## OPSWAT 可以怎麼幫上忙

Claude Code 隱藏追蹤器事件以及 Lazarus/PolinRider 供應鏈攻擊行動凸顯了 **AI 工具鏈與開源生態系統中檔案型威脅**的日益增長風險。OPSWAT MetaDefender 的多引擎防毒（30+ 防毒引擎）與 CDR（內容淨化與重構）技術可以防護：
- **內藏隱藏遙測或後門的惡意 AI 工具鏈元件**
- **橫跨 NPM、PyPI、Go 等套件登錄庫的供應鏈攻擊**
- **透過 SEO 中毒和釣魚郵件散播的檔案型勒索軟體與竊資軟體**

🔗 **參考資料：** 綜合報導（[Ars Technica](https://arstechnica.com/tech-policy/2026/07/anthropic-outed-for-claude-tracker-that-secretly-monitored-chinese-users/)、[Malwarebytes](https://www.malwarebytes.com/blog/news/2026/07/claude-codes-hidden-tracker-was-an-experiment-says-anthropic)、[The Hacker News](https://thehackernews.com/2026/07/what-changes-when-your-software-supply.html))
