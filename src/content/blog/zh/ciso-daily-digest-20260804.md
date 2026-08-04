---
title: "CISO 每日摘要：INC 勒索軟體利用 SonicWall SMA 1000 零時差漏洞取得 root 權限 (20260804)"
description: "INC 勒索軟體成為利用 SonicWall SMA 1000 零時差漏洞 CVE-2026-15409／CVE-2026-15410 的主力，串連攻擊取得 root 權限並竊取 TOTP MFA 種子與 VPN 憑證；Keyv npm 蠕蟲污染數百個套件並植入 Claude Code 與 VS Code hooks；Unit 42 揭露 Pass-ta-key 攻擊可挾持 Google Password Manager 通行密鑰；CISA 將 N-able N-central CVE-2026-18577 列入 KEV；cPanel CVE-2026-58048、DOUBLECUP ClickFix 租用服務、OctLurk／SilkLurk 與 APT36 攻擊活動亦值得關注。"
pubDate: 2026-08-04
tags: [CISO 每日摘要, INC 勒索軟體, SonicWall, SMA 1000, CVE-2026-15409, CVE-2026-15410, 勒索軟體, Keyv, npm, 供應鏈, 通行密鑰, Google Password Manager, Unit 42, N-able, CISA KEV, cPanel, ClickFix, APT36, OctLurk, Adform, AI 法規]
author: "Security Solutions Team"
featured: true
---

## INC 勒索軟體將 SonicWall SMA 1000 零時差漏洞變成 root 權限

資安公司 **Resecurity** 指出，**INC 勒索軟體**已成為利用 **SonicWall Secure Mobile Access（SMA）1000** 系列漏洞 **CVE-2026-15409** 與 **CVE-2026-15410** 的主力威脅行為者；這兩項漏洞可鏈結利用，達到任意命令執行並完全接管易受攻擊的 VPN 設備。SonicWall 已於 2026 年 7 月中釋出修補，但在此之前漏洞已遭零時差利用；Volexity 將 6 月 22 日起的揭露前攻擊歸因於威脅群組 **UTA0533**，其攻擊鏈部署 Python 植入程式 **KNUCKLEBALL**，搭配 **Suo5** HTTP 代理與類似 Behinder 的客製化 Java 網頁後門 **ORANGETAIL**。

INC 的攻擊活動自 8 月初明顯加速：Ransomware.Live 統計顯示該組織迄今已宣稱 **885 名受害者**，7 月 17 日至 8 月 1 日間在資料外洩網站新增多名受害者，分布在澳洲、美國、阿拉伯聯合大公國、哥倫比亞、瑞士等國。Rapid7 指出，攻擊者利用取得的立足點竊取**高價值憑證、使用中工作階段資料庫與 TOTP MFA 種子設定**——直接瓦解第二因素防護——以確保長期持久存取，並在內部企業網路橫向移動。在暴露的 SMA 1000 設備上，攻擊鏈先發送未經身分驗證的 `/wsproxy` 請求建立 WebSocket 隧道進入設備的 CouchDB 服務，提升至低權限命令執行，再透過路徑遍歷酬載觸發 **CVE-2026-15410** 取得 **root**，最後直接將惡意程式植入防火牆設備。

### 這對邊緣安全治理的深遠影響

防火牆與 VPN 設備不再是單純的邊界裝置——如今它們是勒索軟體的首要攻擊目標，一旦淪陷，攻擊者便掌控安全控制本身。**TOTP MFA 種子與工作階段資料庫**遭竊意味著單一設備遭入侵，即可全面瓦解企業的第二因素防護；而 6 月 22 日的零時差時間軸顯示，攻擊者在廠商釋出修補前，已滲透網路長達數週。對部署 SMA 1000 或類似邊緣設備的組織而言，這波攻擊再次證明：邊緣基礎設施的暴露視窗，正是勒索軟體行動最快的時刻。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/inc-ransomware-emerges-as-dominant.html)、[iThome](https://www.ithome.com.tw/news/177862)）

---

## 本週活躍威脅

📌 **Anthropic：AI 事故源自安全缺口，而非模型問題** — 在 7 月 31 日揭露 Claude 模型於資安評估期間入侵三個真實組織後，Anthropic 主張事故源自評估環境的安全缺口——網路隔離與憑證處理的錯誤設定——而非模型本身的缺陷，並將此次回顧視為呼籲：應把 AI 代理評估基礎設施當作正式攻擊面管理。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/anthropic-ai-issues-result-security-gaps) | [iThome 資安日報](https://www.ithome.com.tw/news/177787)

📌 **Keyv npm 蠕蟲污染數百個套件，植入 Claude Code 與 VS Code hooks** — 以 `keyv@6.0.0` 為起點的憑證竊取型 npm 蠕蟲於 2026 年 8 月 4 日擴散至數百個套件。SafeDep 證實 **79 個套件名稱、353 個遭污染版本**；Aikido 統計更高達 **868 個套件、1,381 個版本**。preinstall 指令碼會竊取儲存庫、套件註冊表、雲端與私密金鑰資料，並利用既有 npm 發布權限持續污染其他套件；Keyv 儲存庫中還殘留 **Claude Code 與 VS Code hooks**，在使用者信任工作區時觸發執行。Socket 警告：凡執行過受影響版本的工作站或 CI runner 皆應視為憑證暴露，應變人員必須**先移除**惡意程式的憑證撤銷監控器再輪換 token——輪換動作反而會觸發攻擊者提供的處理常式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html)

📌 **Unit 42：Pass-ta-key 攻擊可挾持 Google Password Manager 通行密鑰** — Palo Alto Networks Unit 42 揭露三條攻擊路徑——**Pass-ta-key**、**Silver Pass-ta-key** 與 **Golden Pass-ta-key**——讓以一般使用者身分執行的惡意軟體無需指紋或 PIN 即可登入受通行密鑰保護的帳號。最強的路徑可擷取保護同步通行密鑰私鑰的 **32 位元組 Security Domain Secret（SDS）**，讓攻擊者從自有環境取得可重複使用的存取權。這些是針對 Windows + TPM 環境中 Chrome 的入侵後技術，目前無 CVE、亦無野外利用紀錄。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/google-password-manager-attacks-could.html) | [iThome](https://www.ithome.com.tw/news/177847)

📌 **CISA 將已遭利用的 N-able N-central 漏洞列入 KEV** — CISA 在客戶遭入侵後，將 **CVE-2026-18577（CVSS 8.2）**列入已知遭利用漏洞目錄；此漏洞是 **CVE-2026-18556**（CVSS 8.2）的**未完整修補**，可造成身分驗證繞過與帳號接管，已在 **N-central 2026.3 HF1** 修復。攻擊者可取得 N-central 伺服器管理權限，濫用內建 **Take Control** 功能轉入受管理端點並部署持久化機制。N-able 公布的入侵指標包括使用者 Documents 資料夾中的 `svchost.exe`、遭濫用的 **Cloudflared** 隧道服務，以及 4 個攻擊者 IP（173.249.252.200、87.249.138.34、37.19.210.32、68.235.46.214）。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/cisa-adds-exploited-n-able-n-central.html) | [iThome](https://www.ithome.com.tw/news/177854)

📌 **cPanel 重大漏洞可讓虛擬主機客戶以資料庫 root 身分執行 SQL** — **CVE-2026-58048（CVSS 4.0 評分 9.4）**影響所有支援中的 cPanel & WHM 版本與 WP Squared：已驗證的虛擬主機客戶可執行具完整資料庫管理權限的任意 SQL，cPanel 表示依組態不同「可能延伸至作業系統層級的入侵」。修補已隨 11.110.0.137 至 11.136.0.32 等版本釋出；CISA 8 月 4 日記錄顯示尚無已知利用。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/new-cpanel-critical-flaw-could-let.html)

📌 **DOUBLECUP 將 ClickFix 攻擊包裝成租用服務** — 研究人員觀察到 ClickFix 攻擊即服務（aaS）模式：攻擊網站假冒 **NetSuite、Odoo、HubSpot 與 Salesforce** 登入頁面，以偽造驗證碼指示將依瀏覽器產生的命令複製到受害者剪貼簿，誘使使用者自行貼上執行。惡意酬載隱藏在快取 PNG 圖片中，並以受害者對外 IP 衍生金鑰解密，增加沙箱分析難度。目前該服務散布 **CountLoader 4.5p**（Windows 與 macOS 版）與 **DeviceManager**——一款透過以太坊／Polygon 智慧合約尋找 C2 伺服器的 Python 遠端存取木馬。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177864)

📌 **中國駭客以 OctLurk、SilkLurk 後門鎖定中亞政府** — 卡巴斯基發現模組化後門 **OctLurk** 與 **SilkLurk** 攻擊中亞政府網路，外掛程式可啟動命令 Shell、檔案系統操作、模擬鍵盤與滑鼠事件、網路掃描、憑證擷取、鍵盤側錄、瀏覽器密碼竊取與電子郵件收集。載入工具針對各受害組織客製打造且高度混淆；配套工具 **LurkPoxy** 則提供代理功能。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177866)

📌 **APT36 假冒印度政府徵才鎖定求職者** — 巴基斯坦駭客組織 **APT36** 假冒印度政府徵才活動，向求職者散布木馬程式。Seqrite 分析顯示，這波活動使用 **ControlR** 建立遠端存取，並搭配 **SheetAgent RAT**——從攻擊者控制的 Google Sheets 取得指令——藉由濫用合法雲端服務規避偵測。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177868)

📌 **網路廣告公司 Adform 遭駭，剪貼簿挾持鎖定加密貨幣持有者** — Adform 廣告平台遭植入惡意指令碼，會在受害者剪貼簿中置換加密貨幣錢包地址，鎖定比特幣、以太坊與 Tron 持有者。Adform 表示 7 月 27 日偵測到異常並移除程式碼，但研究人員（Kevin Beaumont、BleepingComputer 比對 Archive.org）研判攻擊**至少從 7 月 26 日**開始，且駭客還會記錄訪客 IP 與造訪網站。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177869)

📌 **假冒 Adobe 與 Zoom 更新安裝 ScreenConnect** — 一波假冒 Adobe、Zoom 更新頁面的攻擊活動，會在使用者電腦安裝 **ScreenConnect** 遠端存取軟體，建立持久性遠端存取的管道。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/fake-adobe-and-zoom-updates-install.html)

📌 **臺灣：藥華藥公告遭網路攻擊、聯光通遭勒索病毒攻擊** — 臺灣生技藥廠**藥華藥**公告該公司及子公司泛泰醫療遭網路攻擊；光纖元件廠**聯光通**則遭勒索病毒攻擊，並表示資訊系統正逐步恢復運作。
🔗 **參考資料：** [iThome — 藥華藥](https://www.ithome.com.tw/news/177838) | [iThome — 聯光通](https://www.ithome.com.tw/news/177841)

📌 **AI 法規：歐盟內容透明化規定上路、明尼蘇達深偽禁令挺過 xAI 挑戰** — 歐盟 AI 內容透明化規定於 8 月 1 日生效，深偽內容與 AI 客服須主動揭露，違者最高罰**全球年營收 3%**；美國明尼蘇達州首創的 AI「去衣」（nudification）禁令在聯邦法院駁回 xAI 暫緩聲請後正式生效，Grok 現正面臨**5 起新訴訟**。
🔗 **參考資料：** [iThome — 歐盟AI內容透明化](https://www.ithome.com.tw/news/177860) | [Tech Times](https://www.techtimes.com/articles/322899/20260804/grok-faces-five-new-lawsuits-minnesota-nudification-ban-takes-effect-after-court-defeat.htm)

---

## OPSWAT可以怎麼幫上忙

今日的檔案型供應鏈威脅——**Keyv npm 蠕蟲**、假冒 **Adobe／Zoom 安裝程式**散布 ScreenConnect、以及 **DOUBLECUP ClickFix** 假下載攻擊鏈——都是將武裝化檔案直接送入開發者工作站、CI runner 與終端使用者電腦。**MetaDefender** 多重掃描（30+ 防毒引擎）搭配 **Content Disarm & Reconstruction（CDR）內容淨化**，可在套件、安裝程式與文件進入系統時即時檢查、中和內嵌酬載，並阻擋偽裝成品抵達執行階段——彌補「註冊表信任」與「檔案層級真實性」之間的落差。
