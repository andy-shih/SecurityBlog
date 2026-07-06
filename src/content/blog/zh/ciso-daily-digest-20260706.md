---
title: "CISO 每日摘要：Fable 5 回歸但有限制，Meta 禁用 Claude 工程師擴散效應 (20260706)"
description: "美國解除出口管制，Anthropic Fable 5 恢復全球上線但設有使用上限；Meta 跟進限制工程師使用 Claude 與 Codex；阿里巴巴將 Claude Code 列為間諜軟體；FatFs 嵌入式檔案系統 7 漏洞影響 USB/SD 裝置；UltraVNC RCE 漏洞修補；libssh2 漏洞 PoC 未經協調即公開；ClamAV 存在 20 年漏洞由 Cisco 修補；Armored Likho APT 鎖定臺灣政府機關散布 BusySnake Stealer；美敦力資料外洩影響 380 萬人；FortiBleed 與 INC/Lynx 勒索軟體集團關聯確認；PyPI 惡意套件鎖定 Telegram Bot；Google-FBI 聯手瓦解 NetNut 200 萬裝置代理殭屍網路。"
pubDate: 2026-07-06
tags: [Anthropic, Fable 5, 人工智慧治理, Meta, Alibaba, Claude Code, 供應鏈攻擊, FatFs, UltraVNC, libssh2, ClamAV, Armored Likho, 美敦力, FortiBleed, PyPI, NetNut, 威脅情資, CISO]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 回歸但有限制 — Meta 禁用 Claude，Alibaba 效應持續擴大

Anthropic 最先進的 AI 模型 Claude **Fable 5** 在美國政府解除出口管制後正式全球重新上線，但設有**暫時使用上限**，限制每位用戶的存取量。這標誌著長達數月的限制期結束——此前美國政府因成功越獄事件引發國安疑慮而封鎖該模型。Anthropic 已於 7 月 1 日恢復 Fable 5 服務，但用戶回報最高階模型受到顯著的速率限制和縮減的上下文視窗。

與此同時，AI 治理格局在多重面向同時轉變：

**Meta 限制工程師使用 Anthropic 的 Claude 和 OpenAI 的 Codex**——這家社群媒體巨頭以資料安全和智慧財產權風險為由，要求工程團隊停止使用第三方 AI 程式碼助手，轉向內部工具。此舉與阿里巴巴的 Claude Code 禁令如出一轍，顯示大型科技公司正在建立 AI 工具鏈的對外壁壘。

**Alibaba Claude Code 禁令持續發酵**——阿里巴巴將 Claude Code 歸類為「高風險間諜軟體」，聲稱發現隱藏的中國用戶偵測後門。約 20 萬名阿里巴巴員工被要求在 7 月 10 日前遷移至自研的 Qoder AI 程式碼助手。

**Anthropic 推出 Claude Science 藥物發現平台**——公司發布了 Claude Science for Mac，這是一個專為基因組學、藥物發現和材料科學實驗室研究設計的自主 AI 工作平台。Anthropic 也宣布與三星進行客製化 AI 推論晶片製造的初步洽談。

**Anthropic 面臨 7500 萬美元版權訴訟**——新的集體訴訟指控 Anthropic 盜版受版權保護的書籍來訓練 Claude，要求賠償 7500 萬美元，加劇了 AI 訓練資料實務的法律壓力。

### 這對 AI 治理的深遠影響

Fable 5 出口管制的解除、Meta 禁令與 Alibaba 間諜軟體分類同時發生，在 AI 工具領域形成了明確的分歧。一方面，美國企業因資料外洩疑慮限制第三方 AI 工具；另一方面，中國企業以國家安全為由封鎖美國 AI 工具。對 CISO 而言，訊息很明確：AI 程式碼助手現在與任何其他第三方軟體元件一樣，需接受相同的供應商風險評估。Fable 5 回歸但設有使用上限也顯示，即使經過政府審查的前沿模型，企業仍須監控其營運風險參數。

---

## 本週活躍威脅

📌 **FatFs 嵌入式檔案系統 7 個漏洞 — 影響隨身碟與 SD 記憶卡**
廣泛用於 USB 隨身碟、SD 記憶卡及大量物聯網設備的嵌入式檔案系統元件 FatFs 被揭露 7 個漏洞（CVE-2026-6682、CVE-2026-6687、CVE-2026-6688 等）。當設備讀取惡意構造的檔案系統映像時，可能導致遠端程式碼執行或資料損毀。由於廠商放棄維護，多數受影響設備可能永遠不會收到修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177089)

📌 **UltraVNC RCE 漏洞修補 — 立即更新**
開源遠端桌面工具 UltraVNC 修補了一個重大遠端程式碼執行漏洞。若攻擊者誘騙使用者連接到惡意 VNC 伺服器，未修補版本可能導致完整系統被入侵。建議 CISO 清查並更新環境中所有 UltraVNC 安裝。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177094)

📌 **libssh2 PoC 未經協調即公開 — 關鍵 SSH 函式庫漏洞**
安全研究人員在未與維護團隊協調的情況下，公開了廣泛使用的 SSH 函式庫 **libssh2** 重大漏洞的概念驗證利用程式。該漏洞可能在使用 libssh2 進行 SSH 連線的應用程式中導致遠端程式碼執行。缺乏協調的揭露使下游使用者面臨緊急修補壓力。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177097)

📌 **Cisco 修補 ClamAV 存在 20 年的漏洞**
Cisco 修補了開源防毒引擎 ClamAV 的多個漏洞（CVE-2026-20213 至 CVE-2026-20244），其中一個漏洞已存在約 **20 年**。這些漏洞從阻斷服務到使用 ClamAV 函式庫的應用程式程式碼執行皆有涵蓋。由於 ClamAV 廣泛用於郵件閘道掃描，此次修補影響龐大的安全基礎設施。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177096)

📌 **Armored Likho APT 鎖定臺灣政府與能源產業，散布 BusySnake Stealer**
威脅組織 Armored Likho 持續鎖定臺灣政府機關和能源產業，散布 **BusySnake Stealer** 竊資軟體。該組織透過魚叉式釣魚郵件傳遞惡意軟體，竊取受害者的憑證、瀏覽器資料和檔案。該攻擊活動仍在進行中，且專門針對臺灣關鍵基礎設施。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177101)

📌 **美敦力資料外洩 — 逾 380 萬人受影響**
醫療器材大廠美敦力（Medtronic）揭露資料外洩事件，影響超過 **380 萬人**。事件涉及未經授權存取包含個人和健康資訊的系統，凸顯醫療保健組織持續成為網路犯罪分子鎖定目標的趨勢。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177091)

📌 **FortiBleed 活動與 INC 及 Lynx 勒索軟體集團有關聯**
利用 Fortinet SSL VPN 憑證的 FortiBleed 攻擊活動，已被追蹤到與 INC 和 Lynx 勒索軟體行動有關聯。此關聯透過共享的命令與控制基礎設施和重疊的勒索軟體部署模式得到確認。曾遭 FortiBleed 活動竊取 Fortinet VPN 憑證的組織，應視自身處於勒索軟體部署的高風險狀態。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/07/06/fortibleed-ransomware/)

📌 **PyPI 惡意軟體鎖定 Telegram Bot 伺服器 — 供應鏈攻擊**
PyPI 上發現專門鎖定執行 Telegram bot 伺服器的惡意套件，會竊取 bot token、環境變數和資料庫憑證，讓攻擊者控制 Telegram bot 基礎設施。這是繼一系列針對 Python 套件生態系統的供應鏈攻擊之後的最新事件。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/07/06/pypi-telegram/)

📌 **Google 與 FBI 聯手打擊 NetNut 住宅代理殭屍網路 — 涉及 200 萬台裝置**
Google 與 FBI、Lumen 及其他合作夥伴聯手打擊 NetNut（又名 Popa）住宅代理網路，該網路由至少 **200 萬台遭入侵的家用裝置**（包括智慧電視和串流盒）組成，用於路由惡意流量。Google 已停用與 NetNut 基礎設施相關的帳號和服務，並更新 Google Play Protect 以檢測相關 SDK。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177098)

---

## OPSWAT可以怎麼幫上忙

PyPI 供應鏈攻擊和 Armored Likho 資訊竊取活動顯示了多層檔案層級防禦的關鍵需求。OPSWAT MetaDefender 的多引擎掃描和 CDR（內容淨化與重構）技術能夠在惡意套件、腳本和負載抵達開發者端點之前將其檢測和中和。FatFs USB 隨身碟漏洞凸顯了可攜式媒體作為攻擊向量的風險——MetaDefender 的周邊設備安全功能可檢查和淨化來自 USB 隨身碟和 SD 記憶卡的檔案，然後才允許進入企業網路。對於管理 AI 程式碼工具風險的組織，MetaDefender Cloud 提供即時檔案檢測，防止透過 AI 代理工具鏈的資料外洩。
