---
title: "CISO 每日摘要：WordPress XSS2Shell 漏洞遭自動化攻擊鎖定逾 1.1 萬個網站 (20260816)"
description: "WordPress 發布 7.0.3 安全更新，修補登入頁面跨站指令碼漏洞 CVE-2026-64638（XSS2Shell），Imperva 觀測到鎖定逾 1.1 萬個網站、橫跨 67 國的大規模自動化攻擊；watchTowr 揭露未修補的 GeoServer SQL injection 零日漏洞，公布數小時內即遭利用；CTM360 發現逾 3,000 個 RecruitTrap 求職詐騙網址；Acronis 揭露鎖定阿富汗電信與印度關鍵基礎設施的 PATCHCORD 後門；一名女子加入控告 xAI 的集體訴訟，指控 Grok 生成逾 7,000 張未成年人的露骨影像。"
pubDate: 2026-08-16
tags: [WordPress, CVE-2026-64638, XSS2Shell, GeoServer, RecruitTrap, 釣魚, PATCHCORD, WindRelay, 手機惡意軟體, Mustang Panda, xAI, 提示注入]
author: "Security Solutions Team"
featured: true
---

## WordPress XSS2Shell 漏洞遭自動化攻擊鎖定逾 1.1 萬個網站

WordPress 發布 **7.0.3** 安全更新，修補核心登入頁面的高風險跨站指令碼（XSS）漏洞 **CVE-2026-64638（XSS2Shell）**。漏洞位於登入流程：當訪客以不存在的帳號名稱嘗試登入時，WordPress 會將輸入內容帶入錯誤訊息，而前後兩道 HTML 過濾機制對異常標記的判讀方式不一致，讓原本應被移除的惡意內容殘留在登入頁面並被瀏覽器解析成有效 HTML 元素。攻擊者**不需要先取得 WordPress 帳號**即可觸發漏洞。

利用漏洞仍需社會工程步驟——已登入的管理員必須開啟並操作惡意頁面——但後續攻擊鏈進展快速：攻擊者借用管理員既有登入狀態取得 WordPress **應用程式密碼**，建立含有惡意 JavaScript 的頁面，再上傳含有 PHP 程式碼的外掛，最終達成**伺服器端程式碼執行**。

本次事件的焦點在於攻擊規模，而非漏洞本身的新穎程度。**Imperva** 公布的觀測資料顯示，相關自動化活動已鎖定**超過 1.1 萬個網站、遍及 67 個國家**，累積數十萬個請求。WordPress 表示所有版本皆受影響，安全修補已回補至 **6.9.6、6.8.7 及 6.7.6** 等版本；管理者應確認正式環境已完成更新，並檢查是否出現異常管理員帳號、應用程式密碼或外掛安裝紀錄。

### 這對網頁漏洞應變的深遠影響

全球部署最廣的 CMS 的登入頁面 XSS，在漏洞公布數日內就演變成大規模利用事件——Imperva 的遙測顯示，自動化攻擊在大多數 WordPress 網站還來不及修補時，就已觸及 **11,000 個以上網站、橫跨 67 國**。這條攻擊鏈也示範了反射型 XSS 如何透過「一位已登入管理員」的操作，升級為伺服器端 RCE：防禦者應重新排序修補優先級（登入與驗證面優先）、稽核應用程式密碼與外掛紀錄以追蹤入侵後痕跡，並把管理員工作階段視為社會工程步驟鎖定的核心資產。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178147)

---
## 本週活躍威脅

📌 **未修補的 GeoServer SQL injection 零日漏洞，公布數小時內即遭利用** — 資安廠商 **watchTowr** 指出，開源地理資訊平台 **GeoServer** 存在新公開的 **SQL injection** 漏洞，可導致**遠端程式碼執行**（研究人員指出可針對 SA 系統管理員資料庫達成 RCE），目前**尚無 CVE 編號、也無修補程式**。該漏洞於 **2026 年 8 月 12 日**由研究人員 **@q1uf3ng** 在 X 上公布，watchTowr 在公布後數小時內即觀察到利用嘗試，數百個請求來自少數 IP 位址。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/unpatched-geoserver-zero-day-targeted.html)

📌 **RecruitTrap：逾 3,000 個求職詐騙網址，利用瀏覽器內瀏覽器（BitB）竊取憑證** — **CTM360** 揭露大規模求職主題釣魚行動，透過假冒的面試安排頁面與**瀏覽器內瀏覽器（Browser-in-the-Browser）**視窗竊取 **Google 與 Facebook 憑證**，進階手法還會**即時轉發 MFA 提示**。兩個月內發現逾 **3,000 個釣魚網址**，假冒逾 **50 家機構、橫跨 14 個產業**；行銷從業人員為主要目標——遭入侵的行銷帳號可接觸廣告平台、企業社群媒體、客戶資料與電子郵件。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/ctm360-uncovers-over-3000-recruitment.html)

📌 **PATCHCORD 後門鎖定阿富汗電信與印度關鍵基礎設施** — **Acronis 威脅研究部門**揭露持續進行的攻擊行動，以 C/C++ 編譯的後門 **PATCHCORD** 透過產業特定誘餌散播，包括假冒**阿富汗電信（AFTEL）**的假 VPN 安裝程式與電信管理工具。基礎設施分析另發現以 **Google Sheets 作為命令與控制（C2）通訊**的 Go 語言後門 **SHEETCORD**，透過假冒**印度國家資訊中心（NIC）**的網域投遞。整個行動由單一 C2 伺服器搭配多個關聯網域運作。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/new-patchcord-backdoor-targets-afghan.html)

📌 **WindRelay：Android NFC 中繼惡意軟體，把手機變成非接觸式支付詐騙工具** — **Group-IB** 揭露 **WindRelay**，這款 Android 惡意軟體透過 **NFC** 竊取即時卡片資料並傳送給詐騙者，與已知的 **SpyNote RAT** 搭配用於非接觸式支付詐騙。SpyNote 的無障礙服務權限可讓詐騙者靜默側載並啟動 NFC 應用程式，完全不觸發螢幕分享。誘餌為釣魚、簡訊釣魚與語音釣魚訊息；該惡意軟體於 **2025 年 8 月底**首次在野外被發現。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/windrelay-android-malware-turns-victims.html)

📌 **Mustang Panda 為 CoolClient 後門加上已簽章的 Windows 核心 Rootkit** — **Kaspersky** 發現 **HoneyMyte（又名 Mustang Panda）**部署新版 **CoolClient** 後門，內含**已簽章的 Windows 核心模式 rootkit**，可隱藏並保護惡意程序、檔案、登錄物件與 C2 網路資訊。受害者遍布**緬甸、蒙古、巴基斯坦與俄羅斯**，包括已確認的政府機構；CoolClient 通常在 **PlugX** 感染後作為第二階段後門部署。核心元件僅在植入程式具備服務控制管理員（SCM）存取權與 **SeTcbPrivilege** 權限時安裝，否則會略過驅動程式步驟。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/mustang-panda-adds-signed-windows.html)

📌 **Apple 向 110 個國家的用戶發出可能遭商業間諜軟體鎖定的警告** — Apple 寄出新一波**威脅通知**給疑似遭商業間諜軟體鎖定的客戶，涵蓋 **110 個國家**的用戶（自 2021 年底起累計已通知逾 **150 個國家**）。Apple 不對攻擊進行歸因；此類通知通常寄給因身分或工作內容而成為個人化目標的人士。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/apple-warns-users-in-110-countries-they.html)

📌 **xAI 遭集體訴訟指控 Grok 生成逾 7,000 張未成年人的露骨影像** — 化名 **Jane Doe 4** 的女子加入三名田納西州青少年對 **Elon Musk 旗下 xAI**（現屬 SpaceX）的訴訟，指控其繼父利用 **Grok** 將她 11 歲時拍攝的照片加工成逾 **7,000 張**她的露骨影像；執法單位搜索發現這些影像兩天後，繼父自殺身亡。原告指控 xAI 未採取基本防護措施防止 Grok 生成真實人物（包括未成年人）的露骨影像——今年稍早 X 上曾湧現數百萬張 Grok 生成的性化影像——並尋求集體訴訟地位。

🔗 **Reference:** [TechCrunch](https://techcrunch.com/2026/08/15/woman-claims-her-stepfather-used-grok-to-transform-childhood-photo-into-explicit-imagery/) | [The Washington Post](https://www.washingtonpost.com/technology/2026/08/15/woman-alleges-grok-made-thousands-sexual-abuse-images-childhood-snap/)

📌 **美國法院發現訴訟文件藏有不可見的提示注入指令** — 康乃狄克州一名當事人 **Matthew Elliott** 在正式法院文件中嵌入不可見的 AI 指令——**3pt 白色文字配上白色背景**，人類無法辨識、但語言模型可完整讀取——指示任何自動化審查系統依其主張輸出，並將書記官的駁回視為需要修正的錯誤。法院因文件中異常的大量空白發現此手法；**Walter Spader Jr. 法官**警告 Elliott，其後 Elliott 又藏入更多訊息（包括 YouTube 連結），自稱是「隱形玩笑」。法官將此舉比喻為「透過自動化代理祕密與陪審員溝通」。**404 Media** 率先報導此案。

🔗 **Reference:** [The Decoder](https://the-decoder.com/plaintiff-hid-invisible-ai-instructions-in-court-filings-to-secretly-influence-automated-review/)

📌 **Anthropic 公布 Claude 文字浮水印官方技術細節（更新）** — Anthropic 於 **8 月 14 日**發布「How Claude's text watermark works」，說明機制：Claude 透過在同等合理的字詞（例如 overcast 與 grey）之間做**「低風險選擇」**來編碼可偵測的模式，**對輸出品質沒有實際影響**、無隱藏字元、不增加 token 成本，且**不攜帶可識別個人、組織或對話的資訊**——浮水印並非 Claude 專屬。此變更為配合**歐盟 AI 法透明度規範**（自 **8 月 2 日**起對服務歐盟市場的 AI 供應商生效）。TechCrunch 報導 X 上有「數十名」用戶聲稱因此取消 Claude 訂閱。

🔗 **Reference:** [Anthropic](https://www.anthropic.com/news/claude-text-watermark) | [TechCrunch](https://techcrunch.com/2026/08/15/anthropic-shares-more-details-about-how-claudes-new-watermarks-will-work/)

---
## OPSWAT可以怎麼幫上忙

本週多個攻擊行動以**檔案**為載體：PATCHCORD 的假 VPN 安裝程式、Mustang Panda 的已簽章核心驅動程式、與 WindRelay 的側載 APK。MetaDefender 的多重掃描與**內容無害化（CDR）**能在惡意套件、安裝程式與文件到達端點前將其淨化——包括傳統防毒視為可信的「已簽章但惡意」二進位檔。
