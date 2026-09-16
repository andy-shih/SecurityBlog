---
title: "CISO 每日摘要：AI 程式開發助理工作階段遭劫持，Shai-Hulud 蠕蟲蔓延約 100 個儲存庫 (20260916)"
description: "Mandiant 最新「AI 風險與韌性 2026」報告揭露一起入侵事件：攻擊者劫持 SaaS 業者開發者工作站上進行中的 AI 程式開發助理工作階段，助理推薦的遭汙染軟體被採用後，植入竊資軟體、竊走 GitHub OAuth 權杖，自我複製的 Shai-Hulud 蠕蟲更蔓延約 100 個內部程式碼儲存庫。同日：長榮航空與長榮航太通報網路環境遭入侵；Elastic Security Labs 揭露巴西金融木馬 KREMLIN 會重新產生 Chromium 完整性雜湊；FBI、NCSC 與 AIVD 聯合警告伊朗以 Telegram 控制的 HEAVYGRAM 間諜軟體；CISA 將 Google Pixel 漏洞 CVE-2026-58704 列入 KEV，期限為 9 月 19 日。"
pubDate: 2026-09-16
tags: [CISO, 每日摘要, 資安, Mandiant, AI程式開發助理, Shai-Hulud, 供應鏈, PyPI, OAuth, 長榮航空, 長榮航太, 臺灣, TeamPCP, KREMLIN, 金融木馬, Chrome, 伊朗, HEAVYGRAM, CHOSEN-BRICK, BambooToken, MQTT, WSO2, CVE-2026-5430, JWT, WooCommerce, CVE-2026-27540, LiteSpeed, cPanel, HBO-Max, ClickFix, PasteSwitch, Pixel, CVE-2026-58704, CISA-KEV, Microsoft, 微軟, VectraRAT, Parallels, CVE-2026-90894, CRA, 網路韌性法案, ENISA, PSIRT, AWS, AI資安, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## AI 程式開發助理工作階段遭劫持，Shai-Hulud 蠕蟲蔓延約 100 個儲存庫

**Mandiant** 在最新發布的 **《AI 風險與韌性 2026》（AI Risk and Resilience 2026）** 報告中收錄一起案例：攻擊者劫持一家未具名 **SaaS 業者** 環境中進行中的 **AI 程式開發助理工作階段**，最終讓 **自我複製的 Shai-Hulud 蠕蟲蔓延約 100 個內部程式碼儲存庫**。報告描述的攻擊順序是：AI 助理推薦了一套遭攻擊者 **事先下毒** 的第三方軟體，開發者 **採用了這項推薦**；攻擊者接著利用該開發者仍在進行中的工作階段，透過 **遭汙染的 PyPI 套件植入竊資軟體**、並 **竊走 GitHub OAuth 權杖**；蠕蟲隨後在內部儲存庫之間擴散，**竊取儲存庫機密與該公司產品的原始碼**。攻擊者還 **在該公司官方命名空間下毒了一個套件**——另一名員工拉取到遭汙染版本，造成 **第二起感染**。Mandiant 的公開案例未說明入侵發生的時間，也未說明攻擊者如何接管該助理工作階段。

這起案例背後是一個更大的趨勢：2026 年攻擊者已從「用提示詞請 AI 協助研究與排錯」，進一步走向 **代理式攻擊協調（agentic attack orchestration）**——「LLM 不再只是顧問，而是攻擊的參與者」，能以機器速度轉向與決策。Google 威脅情報小組（GTIG）追蹤到，已有各式攻擊者部署 **Hexstrike、Strix 等代理式工具** 進行自主偵察、漏洞驗證與憑證蒐集，背後還有一個逐漸成形的生態系：以 **代理伺服器轉接與帳號共用等中介軟體** 規避 AI 平臺的安全護欄與計費限制。報告中較早的案例還包括：2 月 VirusTotal 研究人員發現 **OpenClaw AI 代理技能遭武器化**（把後門與竊資軟體偽裝成實用的自動化套件），以及 3 月與 **UNC6780（TeamPCP）** 相關的多起供應鏈事故——該組織以超過 6 種利用手法竊取 AI 服務憑證與專有 AI 資料。本報告發布的時間點，就在 GTIG 警告 **AI 程式開發工具已成供應鏈攻擊面** 的數日之後（本刊 9 月 14 日曾報導）。

### 這對 AI 輔助開發風險的深遠影響

- **一次被接受的 AI 推薦，就成為入侵路徑。** 助理推薦了遭下毒的軟體、開發者採用了它，攻擊者再藉同一個工作階段植入竊資軟體並竊走 GitHub OAuth 權杖——AI 助理如今就坐在開發工作站的信任邊界之內。
- **在約 100 個儲存庫之間擴散的是「信任」，不是漏洞利用。** 蠕蟲自我複製、竊走儲存庫機密與產品原始碼，還透過公司自家官方命名空間的套件再次感染——這條連鎖失效走的是相依性信任鏈，而不是單一有漏洞的元件。
- **2026 年的轉變：AI 是攻擊參與者，不是顧問。** 代理式工具（Hexstrike、Strix）、繞過護欄與計費的中介軟體、以及遭武器化的 AI 代理技能套件，都顯示作業任務正以機器速度被外包出去——以人類節奏審查模型輸出的防禦模型，已跟不上攻擊節奏。
- **報告建議的控制措施仍高度依賴人工。** Mandiant 對 AI 輔助開發的建議是：以密碼學雜湊與允許清單驗證 AI 推薦的相依套件、讓長效權杖遠離擴充功能的可及範圍、讓相依套件流量走可控的內部儲存庫——這些步驟目前都取決於有沒有人記得去做。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/09/attacker-hijacks-ai-coding-assistant.html)、[Google Cloud — Mandiant AI Risk and Resilience 2026](https://cloud.google.com/security/resources/ai-risk-and-resilience-2026)）

---

## 本週活躍威脅

📌 **長榮航空、長榮航太雙雙通報網路環境遭入侵**
**長榮航空（2618）** 與 **長榮航太（2645）** 於 **9 月 15 日晚間** 在公開資訊觀測站發布資安重訊：長榮航空表示，有不明人士透過 **惡意 IP 位址** 入侵，並取得 **員工姓名與公務聯絡資訊**，評估對公司所有業務不造成影響；長榮航太表示，偵測到部分內部資訊系統遭到攻擊，已 **隔離受影響設備**，核心資訊系統及營運業務運作正常，未發現客戶或第三方敏感個資外洩。兩家公司皆已啟動資安應變機制。由於兩家公司同屬 **長榮集團**，且發布重訊時間相當接近，iThome 指出外界容易聯想兩起事故可能有關連——但目前雙方均未證實。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178969) | [Taiwan News](https://taiwannews.com.tw/en/news/6440621)

📌 **澳洲警方與 FBI 起訴兩名 TeamPCP 核心成員：逾 1,000 個組織受害、50 萬組憑證、300 GB 資料外洩**
兩名西澳男子——分別為 **21 歲與 23 歲**，於 **8 月 26 日** 在伯斯近郊的 **Cottesloe 與 Mandurah** 遭逮捕——因涉嫌以核心成員身分參與 **TeamPCP**，合計面臨 **14 項指控**。該組織發動了今年最大規模的開發者供應鏈攻擊（遭下毒的套件與工作流程遍及 Trivy、KICS、**LiteLLM**、Telnyx SDK、SAP 及 TanStack 等工具）。澳洲聯邦警察、**FBI** 與西澳警方估計，其惡意程式碼可能已波及 **全球逾 1,000 個組織**，造成 **超過 50 萬組憑證** 被竊、**至少 300 GB** 資料外洩，全球補救成本達數億美元；美方對該組織疑似領導者的起訴書已解封，澳洲警方也表示不排除後續進一步逮捕。該組織使用的工具包括 **Mini Shai-Hulud** 蠕蟲，以及 CanisterWorm、SANDCLOCK 等憑證蒐集程式。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178998) | [Krebs on Security](https://krebsonsecurity.com/2026/08/two-alleged-teampcp-hackers-arrested-in-australia/) | [美國司法部](https://www.justice.gov/usao-ndca/pr/australian-man-indicted-teampcp-cyberattacks-software-supply-chain)

📌 **KREMLIN：巴西金融木馬重新產生 Chromium 完整性雜湊，挾持 Chrome 與 Edge**
**Elastic Security Labs** 揭露一起先前未被記錄的巴西金融木馬行動，代號 **REF9334**，至少自 **2025 年 5 月** 起活躍：攻擊者以冒充十多家巴西銀行的誘餌，誘導受害者手動執行一個偽裝成銀行文件、發票或公司文件的 JavaScript 檔，進而啟動多階段載入器與自製 C++ 安裝程式，在 **Google Chrome 與 Microsoft Edge 上植入惡意瀏覽器擴充功能**。這些擴充功能 **繞過 Chromium 的完整性機制**——竄改 Secure Preferences、**重新產生所需的 HMAC 與 App-Bound 加密雜湊**——以竊取憑證、工作階段權杖與敏感資料。C2 與酬載位置透過 **以太坊智慧合約** 以「死點投放」方式動態取得，安裝程式則 **濫用合法的 SentinelOne 執行檔**（`SentinelMemoryScanner.exe`）進行 DLL 側載，其偽冒的 `SentinelAgentCore.dll` 會檢查 CPU 數量與記憶體大小，以躲避沙箱與虛擬機。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/kremlin-banking-malware-hijacks-chrome.html) | [iThome](https://www.ithome.com.tw/news/178989)

📌 **FBI、NCSC 與 AIVD 聯合揭露伊朗以 Telegram 控制的 HEAVYGRAM 間諜軟體**
**9 月 15 日** 由 **FBI**、英國 **NCSC** 與荷蘭 **AIVD** 聯合發布的公告，揭露一款 Windows 惡意程式——FBI 稱其為 **HEAVYGRAM**、NCSC 稱其為 **CHOSEN BRICK**——伊朗情報與安全部（MOIS）以此監控 **異議人士、記者與公民運動者**：它透過 **Telegram** 接收指令，可複製電子郵件與對話訊息、截取螢幕畫面，並啟動麥克風錄音。該行動可追溯至 **2023 年秋季**，各機構表示至少自 2025 年起被用於攻擊 **英國、美國、荷蘭** 及全球各地的目標；入侵通常從一則冒充熟人、或冒充通訊軟體技術支援的訊息開始，且往往先鎖定 **工作電腦**，失敗後再轉向個人裝置。公告警告，部分受害者的個人資訊已出現在親伊朗的洩漏網站上，使風險超越資料竊取、升高到人身安全層面。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/iranian-hackers-use-telegram-controlled.html)

📌 **BambooToken：以 MQTT 控制的惡意程式，至少自 2023 年起攻擊 Windows 與 Linux 系統**
**Lumen Black Lotus Labs** 揭露一款先前未被記錄的多平臺惡意程式 **BambooToken**，以 **MQTT 訊息協定作為指令通道**，控制 Windows 與 Linux 系統。證據顯示其活動至少可追溯至 **2023 年 2 月**，受害者分布於 **亞洲與南美洲**，最近活動出現於 **2026 年 7 月**；樣本於 2026 年初現蹤 VirusTotal，多數上傳來源為 **中國 IP 位址空間**。其投放手法是 **濫用 Tendyron（天地融）「OnKey」軟體進行 DLL 側載**——該公司的 PKI USB 權杖用於高安全場域的身分驗證，官網聲稱已有 1.9 億個權杖流通，客戶涵蓋中國金融與政府部門。初始存取途徑仍未確定，且該廠商的程式碼簽章憑證與建置環境均未被入侵——攻擊者利用的顯然是目標環境中很可能已安裝、且可被側載的執行檔。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/bambootoken-malware-uses-mqtt-to.html)

📌 **WSO2 API Manager 漏洞 CVE-2026-5430 已遭積極利用，偽造管理員 JWT 現蹤蜜罐**
**watchTowr** 通報 **WSO2 API Manager** 的 **CVE-2026-5430（CVSS 9.8／10.0）** 已出現實際利用：該服務會接受以 **不支援的演算法簽署的 JWT** 並逕行放行，繞過身分驗證、達成 **含管理帳號在內的帳號接管**——其蜜罐網路在 **9 月 13 日** 攔截到自帶管理員權限的偽造 JWT 權杖。受影響產品包括 **WSO2 API Manager 4.1.0 至 4.6.0**、API Control Plane、Traffic Manager 與 Universal Gateway。WSO2 的公告可追溯至 **2026 年 5 月**；社群版可透過 pull request 修補，訂閱戶則有對應的更新等級——由於偽造權杖能存取每一個 API 後端端點及其憑證，未修補的閘道就是暴露的層級。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/active-exploitation-attempts-target.html)

📌 **WooCommerce 外掛 Wholesale Lead Capture 漏洞 CVE-2026-27540：逾 10 萬次攻擊嘗試植入 PHP 後門**
**Wordfence** 警告，攻擊者正積極利用 **Wholesale Lead Capture** 的 **CVE-2026-27540（CVSS 9.8）**——這是一款安裝數超過 **6,000 個網站** 的 WooCommerce 付費外掛：其 `wwlc_file_upload_handler` AJAX 動作缺少檔案類型驗證，讓未經身分驗證的攻擊者可 **上傳 PHP 後門、達成遠端程式碼執行**。Wordfence 自 6 月起已擋下 **超過 10 萬次** 攻擊嘗試，並在 8 月底出現單日逾 **4 萬次** 的高峰；上傳的後門程式會回報主機資訊，並提供瀏覽器上傳表單以寫入更多惡意檔案。**2.0.3.1 及之前版本** 皆受影響，修補版本為 **2.0.3.2 以上**（目前最新為 **2.0.6**）。Wordfence 公布的指標包括 10 個來源 IP，以及對 `/wp-admin/admin-ajax.php`、帶有 `wwlc_file_upload_handler` 動作參數的可疑請求；網站管理者也應檢查上傳目錄中是否有非預期的 PHP 檔案。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178972) | [The Hacker News](https://thehackernews.com/2026/09/attackers-exploit-woocommerce-wholesale.html)

📌 **LiteSpeed 漏洞恐讓共享主機單一帳號取得 root 權限**
**cPanel 於 9 月 14 日發布安全公告**，警告 **LiteSpeed Web Server Enterprise 6.3.7 之前版本** 存在重大權限提升漏洞：共享主機上的惡意低權限網站使用者可 **繞過帳號隔離機制（包括 CageFS）取得 root 權限**，進而存取或竄改同一臺伺服器上的其他網站與伺服器本身。LiteSpeed 已於 **9 月 11 日發布 6.3.7**，更新紀錄列出 3 項安全性項目，但未說明哪一項對應本次權限提升漏洞，因此漏洞成因目前仍無法公開確認。這對共享主機生態是雪上加霜：LiteSpeed 的 cPanel 外掛在 **5 月與 6 月** 也接連被揭露權限提升漏洞。目前尚未傳出實際利用情形。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178968) | [The Hacker News](https://thehackernews.com/2026/09/litespeed-enterprise-flaw-could-let-one.html)

📌 **HBO Max 的 Reddit 帳號遭挾持，淪為 48 小時 ClickFix 惡意廣告活動（PasteSwitch）**
**Hudson Rock** 與 **ADAMnetworks** 追查一起惡意廣告活動，源頭是遭挾持的 **HBO Max 官方驗證 Reddit 帳號（u/hbomax）**，它在約 **48 小時內投放 108 則惡意廣告**。廣告把使用者導向五類誘餌的偽冒頁面——macOS 版假 HBO Max 應用程式（hbomaxx[.]app，40 則）、開發者與 AI 工具（codex-craft[.]com，36 則）、macOS 磁碟清理服務（apple.clean-disk-guide[.]com，15 則）、code-desktop[.]com（11 則）與 hbomax-macos[.]com（6 則）——接著以 **ClickFix 手法** 要求受害者自行貼上並執行攻擊者提供的指令。macOS 目標收到 **MacSync 與 AMOS helper 竊資軟體**，以及為了竊取助記詞而打造的假加密貨幣錢包；Windows 使用者則收到 **InstallFix 變形手法**，透過 PowerShell 與 HTA 檔把 **Amatera 竊資軟體** 直接載入記憶體。研究人員將這波行動連結到更廣泛的跨平臺框架 **PasteSwitch**；Reddit 已暫停相關廣告並展開調查。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178977) | [BleepingComputer](https://www.bleepingcomputer.com/news/security/hackers-hijack-hbo-max-reddit-account-to-push-malware-in-clickfix-ads/)

📌 **Google Pixel 行動通訊數據機漏洞 CVE-2026-58704 已遭利用，列入 CISA KEV、期限 9 月 19 日**
Google 揭露 **CVE-2026-58704（CVSS 8.0）**——**Pixel 行動通訊數據機** 因程式碼邏輯錯誤、可讓攻擊者繞過權限檢查的權限提升漏洞——已出現 **「有限、有針對性的利用」** 跡象。該漏洞可 **從鄰近網路遠端觸發、且不需任何使用者互動**，具備零點擊攻擊的條件。9 月的 Pixel 更新共修補此漏洞及 **另外 109 個漏洞**（其中 46 個為重大等級），修補層級為 **2026-09-05 以後**；CISA 已於 **9 月 16 日** 將該 CVE 列入 **KEV 清單**，要求聯邦機構在 **9 月 19 日** 前完成修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/google-patches-pixel-modem-flaw-amid.html)

📌 **微軟 9 月例行更新創新高（974 個 CVE）引發 RDS 異常，緊急發布臨時修補**
**微軟** 在本月 **創紀錄的例行更新（974 個 CVE）** 後發布 **臨時更新（out-of-band）**：**遠端桌面服務（RDS）** 出現安裝後數分鐘連線失敗、無法登入等問題，部分 Windows Server 版本也在 RDS 設定階段停止回應——另有 **Hyper-V 虛擬機與 USB 音訊裝置** 的非預期副作用。規模本身就是重點：單次更新 974 個 CVE，對比 2023 年全年的 909 個；資安主管將此歸因於 AI 大幅加速漏洞通報，而測試矩陣已非任何廠商能完整涵蓋——SOCRadar 的 CISO 向 Dark Reading 表示，隨著修補量持續成長，修補品質風險也將隨之升高。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/application-security/microsoft-emergency-fixes-patch-tuesday)

📌 **VectraRAT：全端惡意軟體即服務（MaaS）平臺，每月 250 美元即可租用企業級 Windows 入侵能力**
**SOCRadar 威脅研究團隊（STRU）** 揭露 **VectraRAT**——一套先前未被記錄的 **全端惡意軟體即服務（MaaS）** 平臺，完全從零打造、並非修改外流的 RAT 程式碼：以 **Go 撰寫的控制伺服器（VectraHub）** 內嵌 Vue3 操作面板，透過自製二進位協定與 **原生 C++ Windows 植入程式** 通訊。月租 **自 250 美元起**（加購加密服務另計 100 至 350 美元），提供隱藏桌面控制、遠端 Shell、鍵盤側錄、剪貼簿劫持、瀏覽器憑證竊取，以及 **不會跳出提示的 UAC 繞過**；投放管道為 **Amadey 載入器與 ClickFix 頁面**。在不到一週內觀察到的 38 個真實受害連線中，**48% 為企業版 Windows——包括 Windows Server 2025**——並確認發生檔案外洩。開發者至少自 2022 年起以 **Nyxel** 為名活動，目前透過 HackForums、Exploit.in 與 Telegram 販售。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/endpoint-security/vectrarat-hack-windows-enterprises) | [SOCRadar](https://socradar.io/blog/vectrarat-undocumented-stack-maas/)

📌 **Parallels Desktop「ParaShells」漏洞（CVE-2026-90894）讓非管理員 Mac 使用者取得 root，Intel Mac 卻無修補可用**
**JFrog** 揭露 **ParaShells**——**Parallels Desktop for Mac** 的本機權限提升漏洞：以 root 身分執行的 `prl_disp_service` 監聽一個 **任何人皆可寫入的 socket**，其接受的 `PrlSrv_LoginLocal` 呼叫只檢查核心回報的憑證——既不需要 Parallels 程式碼簽章，也不需要管理員權限。接著，攻擊者可透過虛擬機資料夾名稱進行 **`tar --use-compress-program` 引數注入** 直取 root：JFrog 的測試腳本在 **Parallels Desktop 26.4.0**（Apple 晶片）上成功寫入免密碼 sudo 規則並開啟 root Shell。該漏洞編號為 **CVE-2026-90894**（JFrog 評為 **7.8**），修補版本為 **Parallels Desktop 27**——但 **Intel Mac 無法安裝** 該版本，等於這些使用者沒有官方修補可用。利用該漏洞的前提是攻擊者已能在 Mac 上以一般使用者身分執行程式碼。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/parallels-desktop-flaw-lets-non-admin.html)

📌 **歐盟 CRA 通報義務正式上路：ENISA 單一通報平臺啟用，臺灣廠商建置 PSIRT 升溫**
歐盟 **《網路韌性法案》（CRA）** 的漏洞與資安事件 **通報義務已於 9 月 11 日生效**，**ENISA** 同日啟用 **CRA 單一通報平臺（SRP）**：製造商只需 **通報一次**——事件發生後 **24 小時內** 提出早期預警、**72 小時內** 提出通報，漏洞於修補可用後 **14 天內** 提交最終報告、資安事件則於 **1 個月內** 提交——資訊會自動轉送相關國家 CSIRT。開源軟體管理者的通報義務自 **2027 年 12 月 11 日** 起適用，CRA 主要資安要求亦自同日開始。臺灣方面：**資安院** 表示，面對國際市場、國際客戶或品牌商的企業感受壓力最深，近一、兩年開始建立或規畫 **PSIRT（產品資安事件應變小組）** 的企業明顯增加，但提醒成熟度仍有落差——重點不在是否設有名為 PSIRT 的專責團隊，而在漏洞受理、分析、修補、更新等流程與跨部門協作機制是否真正建立並持續運作。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178979) | [ENISA](https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched)

📌 **AWS「Deception Benchmark」：頂尖 AI 模型找得到多數真漏洞，但誤報／漏報率仍無法達標**
**AWS** 公布 **Deception Benchmark**，以 5 家業者共 **12 款頂尖 AI 模型** 評測漏洞判斷能力：在「直接判斷」與 **Proof-of-Exploit（PoE）** 兩種提示方式下（並納入攻擊路徑已被阻斷的案例），表現最佳者為 **Claude Opus 5 搭配 PoE，準確率 79.3%、誤報率 24.9%、漏報率 16.8%**；**GPT-5.4 搭配 PoE 準確率 77.7%，誤報率 10.1%、漏報率 33.6%**。若以誤報率、漏報率都低於 10% 作為實務可用門檻，**沒有任何受測模型組態同時達標**——對打算把 AI 導入漏洞分類與修補決策的團隊而言，這是重要的提醒。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178918)

---

## OPSWAT可以怎麼幫上忙

本日多條攻擊路線走在「檔案與套件進入信任通道」的路徑上：**Mandiant 案例** 中造成損害的是遭下毒的 PyPI 套件——甚至包括廠商自家官方命名空間的套件；**KREMLIN** 以偽裝成銀行文件的 JavaScript 檔抵達；**WooCommerce** 的攻擊則透過檔案上傳植入 PHP 後門。**MetaDefender Multi-Scan** 以 30 多個防毒引擎檢驗經由電子郵件、網頁、上傳與軟體取用路徑進入的檔案，補足單一引擎的盲點；**MetaDefender CDR（內容淨化與重建）** 會重建允許的檔案、壓縮檔與程式產物，在使用者、CI runner 或建置系統開啟前剝除主動內容；**MetaDefender Kiosk** 則在實體與 OT 邊界檢查檔案。
