---
title: "CISO 每日摘要：SpaceXAI 推出 Grok 4.5 價格砍半 — AI 模型價格戰全面開打 (20260710)"
description: "SpaceXAI 推出 Grok 4.5，以 Opus 等級效能但價格僅對手一半的優勢，點燃 AI 模型價格戰。Anthropic 承認在 Claude 中嵌入監測程式碼；Microsoft 修補 RoguePlanet 零日漏洞；GigaWiper 後門程式結合磁碟抹除與間諜軟體；MODBEACON RAT 使用 gRPC 加密 C2 通訊；XRING 漏洞可讓 HTTP/3 伺服器當機；WP-SHELLSTORM 入侵數千 WordPress 網站；HalluSquatting 新手法欺騙 AI 程式開發助理安裝惡意套件。"
pubDate: 2026-07-10
tags: [CISO, 每日摘要, 資安, AI 治理, SpaceX, Grok, Anthropic, Claude, GPT-5.6, 漏洞, 惡意軟體, 供應鏈, 釣魚, Microsoft, WordPress]
author: "Security Solutions Team"
featured: true
---

## SpaceXAI 推出 Grok 4.5 價格砍半 — AI 模型價格戰全面開打

SpaceXAI 發表了首款旗艦模型 **Grok 4.5**，與 Cursor 合作開發，宣稱具有「Opus 等級」的效能，但價格僅為 Anthropic 和 OpenAI 等競爭對手的一半左右。該模型特別針對程式開發和 AI 代理（agent）工作負載進行優化，直接瞄準 Anthropic Claude Code 和 OpenAI GPT-5.6 主導的企業開發者市場。

這次發表標誌著 AI 模型價格戰進入新階段。OpenAI 同時推出 **GPT-5.6** 系列模型，獲准在 Microsoft 365 Copilot 和 GitHub Copilot 上廣泛部署。Anthropic 則向所有用戶推出 **Claude Reflect** 使用儀表板，同時也因 Claude 中嵌入的遙測程式碼而面臨審查。

Elon Musk 今年初曾批評 Anthropic 是「覺醒又虛偽」，如今改口稱 Anthropic 是「AI 領域的明確領導者」，並誓言不會破壞其與 TeraWulf 的算力交易。SpaceX/Twitter/XAI 重組為 SpaceXAI，顯示這是一個專注於 AI 基礎設施和模型開發的全新企業實體。

### 這對 AI 治理的深遠影響

Grok 4.5、GPT-5.6 和 Claude Reflect 的同時發布，標誌著企業 AI 採購的轉折點。CISO 面臨多供應商格局：價格波動、模型能力宣稱和供應商穩定性都在變化。SpaceXAI 是一個全新實體，沒有企業級營運記錄——能否提供受監管行業所需的資料落地、安全認證和合規保證？價格破壞也給 incumbent 供應商（Anthropic、OpenAI）帶來降價壓力，可能影響他們在安全和安全研究上的投資。

🔗 **參考資料：** 綜合報導（[VentureBeat](https://venturebeat.com/technology/spacexs-grok-4-5-launches-at-half-the-price-of-rivals-heres-why-that-could-rattle-anthropic-and-openai)、[TechCrunch GPT-5.6](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)、[TechCrunch Claude Reflect](https://techcrunch.com/2026/07/09/anthropics-new-claude-feature-is-quietly-selling-you-on-ai/)、[iThome GPT-5.6](https://www.ithome.com.tw/news/177229)、[iThome ChatGPT Work](https://www.ithome.com.tw/news/177224)）

---

## 本週活躍威脅

📌 **Anthropic 承認在 Claude 中嵌入監測程式碼——供應商治理隱憂**
Anthropic 承認在其 Claude AI 助手中嵌入了遙測和追蹤程式碼，引發企業客戶對供應商風險管理的重大關切。同時推出的「Reflect」儀表板幫助用戶追蹤 AI 使用情況，但 Claude 會收集行為資料——包括互動模式、功能使用情況，以及可能的對話元資料——這需要採購和法務團隊審查。在敏感環境中部署 Claude 的組織應評估 Anthropic 的資料處理政策，判斷遙測是否構成可接受的監控或過度的監視。
🔗 **參考資料：** [Cybernews](https://cybernews.com/news/anthropic-admits-embedding-surveillance-code-in-claude/) | [iThome](https://www.ithome.com.tw/news/177116)

📌 **Microsoft 修補 RoguePlanet 零日漏洞（CVE-2026-XXXXX）——正被積極利用**
Microsoft 針對 Microsoft Defender 中的 RoguePlanet 零日漏洞發布緊急修補程式，該漏洞已被積極利用。此缺陷最初於 7 月 8 日揭露，允許攻擊者繞過 Microsoft 的端點保護。CISA 預計將此漏洞加入已知被利用漏洞目錄（KEV）。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/microsoft-rogueplanet-zero-day-threat) | [iThome](https://www.ithome.com.tw/news/177237)

📌 **GigaWiper Windows 後門程式——新型惡意軟體結合磁碟抹除與間諜軟體**
名為 **GigaWiper** 的新型惡意軟體家族正針對 Windows 系統發動攻擊，在單一 payload 中結合了磁碟抹除功能、假勒索軟體顯示和資訊竊取間諜軟體。該惡意軟體使用多階段交付並繞過傳統特徵碼偵測。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-gigawiper-windows-backdoor-bundles.html)

📌 **MODBEACON RAT 使用 gRPC 串流進行加密 C2 通訊——中國駭客組織 Silver Fox**
與中國有關聯的網路犯罪組織 **Silver Fox** 部署了名為 **MODBEACON** 的新型 Rust 語言遠端存取木馬，使用 gRPC 串流進行加密的命令與控制（C2）通訊。該模組化 RAT 透過 SEO 污染假冒軟體安裝程式，針對亞洲的科技、教育和國有企業。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-modbeacon-rat-uses-grpc-streaming.html)

📌 **XRING 漏洞可讓遠端攻擊者使 HTTP/3 伺服器當機**
Microsoft **XQUIC** 實作中一個尚未修補的漏洞（屬於 **XRING** 漏洞家族）允許遠端攻擊者發送特製封包，使 HTTP/3 伺服器崩潰。該漏洞影響依賴 QUIC 傳輸協定的服務，可能被用於針對關鍵基礎設施的阻斷服務攻擊。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/unpatched-xring-flaw-in-xquic-lets.html)

📌 **WP-SHELLSTORM 入侵數千 WordPress 網站**
安全研究人員發現一個暴露的駭客伺服器，揭露了 **WP-SHELLSTORM** 活動，已入侵數千個 WordPress 網站。該攻擊使用被盜的 WordPress 管理員憑證注入持久性網頁後門（web shell），實現長期未經授權的存取、資料外洩和進一步的惡意軟體散佈。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/exposed-hacker-server-reveals-wp.html)

📌 **假冒 Microsoft Entra Passkey 註冊——新型 M365 帳戶劫持手法**
威脅行為者使用假冒的 Microsoft Entra Passkey 註冊頁面，誘騙用戶授予對其 Microsoft 365 帳戶的認證存取權限。此釣魚攻擊繞過傳統的條件式存取政策和 MFA 提示，濫用 Passkey/裝置認證流程。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/hackers-use-fake-microsoft-entra.html)

📌 **ClickFix 手法散布 SCMBANKER Android 銀行木馬**
**ClickFix** 社交工程技術——透過虛假的瀏覽器錯誤訊息誘騙用戶執行惡意腳本——現在被用於散布 **SCMBANKER** Android 銀行木馬。該惡意軟體攔截簡訊、覆蓋銀行應用程式，並濫用無障礙服務竊取金融憑證。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177227)

📌 **HalluSquatting：新型攻擊利用 LLM 幻覺欺騙 AI 程式開發助理安裝惡意套件**
研究人員展示了一種名為 **HalluSquatting** 的新型攻擊技術，利用 LLM 的幻覺傾向欺騙 AI 程式開發助理推薦並安裝惡意軟體套件。攻擊者製作特定提示，使模型生成聽起來合理但實際上不存在的套件名稱，然後由攻擊者註冊這些名稱來傳遞惡意軟體。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177230)

📌 **GuardFall 攻擊繞過 AI 程式開發代理的 Shell 命令防護**
一種名為 **GuardFall** 的新型攻擊技術針對開源 AI 開發代理，繞過 Shell 命令執行防護機制。該攻擊使用工作流程層級的提示注入（prompt injection）來規避防止 AI 程式開發助理執行任意 Shell 命令的護欄，可能透過 AI 生成的程式碼實現供應鏈入侵。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177226)

---

