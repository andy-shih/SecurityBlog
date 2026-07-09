---
title: "CISO 每日摘要：中國將 Claude Code 反蒸餾定性為安全後門 — Anthropic 強硬反擊 (20260709)"
description: "中國 CSTIS 指控 Anthropic Claude Code 存在「安全後門」——實為其反蒸餾機制，引發外交爭議，Anthropic 嚴正否認。同場加映：GodDamn 勒索軟體濫用 BYOVD 驅動程式、Adobe ColdFusion 已遭積極利用、HalluSquatting 攻擊鎖定 AI 程式碼助手、Ubiquiti 修補 7 個重大漏洞，以及 PamStealer 與 RedWing 惡意軟體活動。"
pubDate: 2026-07-09
tags: [ciso-daily-digest, 資訊安全, 中國, anthropic, claude-code, 勒索軟體, 漏洞, 威脅情資]
author: "Security Solutions Team"
featured: true
---

## 發生了什麼事 — 中國將 Claude Code 反蒸餾機制定性為安全後門

中國網路安全主管機構 CSTIS 於 7 月 9 日發布正式警告，指控 Anthropic 的 Claude Code AI 程式碼工具含有「安全後門漏洞」，特別指出其反蒸餾機制（防止未授權模型拷貝的保護措施）是安全威脅。中國國家漏洞資料庫（CNNVD）將其列為「高風險」漏洞（編號 CNNVD-202607-1033）。

Anthropic 強硬回應，否認後門指控，強調反蒸餾功能是 AI 產業通用的標準保護措施。該公司強調 Claude Code 不含任何可被用於惡意目的的隱藏存取機制。

此次警告是中國首次正式將 AI 模型的反拷貝保護機制標示為安全威脅。事件發生於美中 AI 科技緊張局勢持續升溫之際，美國此前也曾警告中國 AI 模型存在國家安全風險。

### 這對 AI 治理的深遠影響

此事件樹立了一個危險的監管先例：防禦性技術措施（反蒸餾、模型指紋辨識、遙測）可能被敵對政府重新歸類為「後門」或「漏洞」。對於全球 CISO 而言，跨國營運中哪些 AI 程式碼工具能安全部署，將充滿不確定性。此情況類似 TikTok／微信禁令框架，但現在擴展到了開發者工具——觸及敏感程式碼庫的 AI 程式碼助手成為地緣政治衝突點。

🔗 **參考資料：** 綜合報導（[Reuters](https://www.reuters.com/technology/artificial-intelligence/china-issues-backdoor-security-alert-over-anthropic-claude-code-2026-07-09/)、[SCMP](https://www.scmp.com/tech/artificial-intelligence/article/3298916/anthropic-hits-back-after-china-warns-claude-code-backdoor-risks)、[SecurityWeek](https://www.securityweek.com/china-warns-of-backdoor-risk-in-anthropics-claude-code/)、[The Information](https://www.theinformation.com/articles/anthropic-responds-to-china-backdoor-warning)、[iThome](https://www.ithome.com.tw/news/177212)）

---

## 本週活躍威脅

📌 **GodDamn 勒索軟體濫用 BYOVD PoisonX 驅動程式**
GodDamn 勒索軟體採用「自帶弱點驅動程式」（BYOVD）技術，使用 PoisonX 驅動程式在加密檔案前先停用端點防護。此波攻擊活動鎖定美國企業。 🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/goddamn-ransomware-uses-poisonx-driver.html)

📌 **Adobe ColdFusion 重大漏洞已遭積極利用**
Adobe ColdFusion 的重大漏洞（CVE-2026-XXXX）在揭露後數小時內已出現實際攻擊，駭客鎖定未修補的實例。 🔗 **參考資料：** [Xakep](https://xakep.ru/2026/07/08/adobe-coldfusion/)

📌 **HalluSquatting 攻擊欺騙 AI 程式碼助手安裝惡意軟體**
研究人員揭露名為「HalluSquatting」的新型攻擊向量，攻擊者透過污染 AI 訓練資料，使程式碼助手推薦惡意套件，進而在開發者機器上安裝殭屍網路惡意軟體。 🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html)

📌 **Ubiquiti 修補 7 個 UniFi 重大漏洞**
Ubiquiti 發布更新修補 UniFi OS、Connect、Talk、Access 和 Protect 產品線的重大漏洞，建議使用者立即更新。 🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/ubiquiti-patches-critical-unifi-flaws.html) | [iThome](https://www.ithome.com.tw/news/177204)

📌 **PamStealer macOS 竊資軟體偽裝剪貼簿工具散布**
PamStealer 透過偽裝成剪貼簿公用程式的途徑散布，濫用 macOS 管理員驗證程序部署惡意載荷，竊取憑證與敏感資料。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177218)

📌 **DEBULL 濫用 Microsoft 裝置驗證碼流程接管帳號**
DEBULL 惡意工具利用 Microsoft 的 Device Code Flow 驗證機制，接管受害者 Microsoft 365 帳號。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177213) | [Xakep](https://xakep.ru/2026/07/09/device-code-flow/)

📌 **RedWing Android 惡意軟體即服務用於金融詐騙**
RedWing Android 惡意軟體以租賃模式提供給買家，用於發動金融詐騙活動，營運者提供基礎設施與更新。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177221)

📌 **Vidar 竊資軟體透過惡意廣告與破解軟體散布**
Vidar 透過惡意廣告與破解軟體下載鎖定中小企業，載入器膨脹至數百 MB 以規避沙箱分析。 🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/vidar-infostealer-smb-malvertising-campaign) | [iThome](https://www.ithome.com.tw/news/177192)

📌 **中國 USB 惡意軟體感染日本自衛隊近一年**
與中國政府有關的惡意軟體透過 USB 裝置散布，感染日本陸上自衛隊網路長達近一年才被發現。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177207)

📌 **Mustang Panda 鎖定印度政府濫用 Zoho WorkDrive**
中國 APT 組織 Mustang Panda 鎖定印度政府機構，濫用 Zoho WorkDrive 進行網路間諜活動。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177205)

📌 **調查局破獲中國網軍冒充記者對臺社交工程攻擊**
調查局破獲中國網軍單位冒充國際記者，對臺灣政學界人士進行社交工程攻擊。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177219)

📌 **AI 程式碼代理觸發端點安全規則**
企業 SOC 團隊回報 AI 程式碼代理（Claude Code、GitHub Copilot、Cursor）觸發了設計用來捕捉攻擊者行為的端點安全規則，引發 AI 工具白名單化議題。 🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/ai-coding-agents-found-triggering.html)

📌 **Elastic 修補 Kibana 高風險漏洞（7.x 與 8.x）**
Elastic 發布安全更新修補影響 Kibana 7.x 與 8.x 分支的高風險漏洞，建議使用者立即升級。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177210)

📌 **Tenda 路由器韌體發現後門**
研究人員在多款 Tenda 路由器韌體中發現後門，可能允許遠端攻擊者存取裝置。 🔗 **參考資料：** [Xakep](https://xakep.ru/2026/07/09/tenda-backdoor/)

📌 **Linux 核心 7.1 修補 15 年歷史的 GhostLock 漏洞**
Linux 核心團隊修補了存在 15 年的本機權限提升漏洞 GhostLock，影響所有現代核心版本，Android 裝置同樣受影響。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177191)

📌 **Accenture 證實遭駭，攻擊者聲稱竊得 35GB 資料**
IT 服務巨頭 Accenture 證實遭駭，攻擊者聲稱竊取 35GB 資料。SOCRadar 建議從四大方向因應相關威脅。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177194)

📌 **KVM 存在 16 年歷史的虛擬機器逃逸漏洞**
研究人員揭露 Linux KVM 存在 16 年的漏洞，可能導致虛擬機器突破隔離存取底層主機系統。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177139)

📌 **Apache HttpComponents Core 兩項高風險漏洞修補**
Apache 發布更新修補 HttpComponents Core 的兩項高風險漏洞，未更新可能導致服務阻斷攻擊。 🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177106)

---

## OPSWAT 可以怎麼幫上忙

本週幾乎所有活躍威脅都以檔案為主要感染媒介——Vidar 透過破解軟體、PamStealer 透過偽裝剪貼簿工具、RedWing 透過 Android APK、DEBULL 透過裝置驗證碼釣魚。OPSWAT MetaDefender 的多引擎掃描（30+ 防毒引擎）結合深度內容清除與重建（CDR），可以在傳遞點阻止這些威脅，在保留檔案可用性的同時移除活動內容。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
