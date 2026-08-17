---
title: "CISO 每日摘要：Clop 勒索軟體藉 PTC Windchill 零日漏洞勒索 43 家企業 (20260817)"
description: "Clop 勒索軟體利用 PTC Windchill／FlexPLM 漏洞 CVE-2026-12569（CVSS 9.8）發動大規模勒索，宣稱入侵殼牌、飛利浦、奇異、Fiserv 等 43 家企業，並竊得殼牌 89 GB 工程資料；SAP Commerce Cloud 滿分漏洞 CVE-2026-58231 在修補 3 天後即遭利用；法國稅務總局 DGFiP 坦承 67.8 萬筆資料外洩；Anthropic Claude 發生 36 分鐘大規模當機。"
pubDate: 2026-08-17
tags: [勒索軟體, CVE-2026-12569, PTC, 資料外洩, 威脅情報]
author: "Security Solutions Team"
featured: true
---

## Clop 勒索軟體藉 PTC Windchill 零日漏洞勒索 43 家企業

勒索軟體集團 Clop（CL0P）再度發動其招牌式的大規模資料勒索行動，目標鎖定 **暴露於網際網路的 PTC Windchill PDMLink 與 FlexPLM** 產品生命週期管理（PLM）伺服器。該集團已在資料外洩網站上列出 **43 家以上受害企業**，包括 **殼牌（Shell）、飛利浦（Philips）、奇異（GE）** 與支付服務商 **Fiserv**。Clop 宣稱從殼牌竊得 **89 GB 資料**，疑似包含工程圖、設施測試報告掃描檔案、設施照片與專案計畫。飛利浦表示已識別並遏止針對特定伺服器的入侵，客戶環境不受影響；奇異表示已啟動網路應變程序；Fiserv 經全面檢視後表示未發現客戶、銀行、交易或個人資料遭竊。

**本次攻擊的核心漏洞為 CVE-2026-12569**，這是 PTC Windchill PDMLink 與 FlexPLM（11.0 M030 以前版本）的不可信資料反序列化漏洞，**CVSS 風險達 9.8 分**。該漏洞於 6 月 17 日公開，6 月 25 日即被列入 CISA 已知遭利用漏洞目錄（KEV）。攻擊者另搭配 FlexPLM WSDL 端點的免驗證資訊揭露漏洞（CVSS 7.5）進行資產盤點，再觸發反序列化漏洞。入侵後攻擊者部署 16 進位命名的 JSP 網頁後門（存放於 `/Windchill/login/`）、使用 `flst.txt` 列舉檔案系統，並自 7 月 20 日起以「Windchill PDMLink module serious data leak」為主旨、向受害企業數百名員工寄發勒索郵件。此行動手法與 2025 年 Clop 攻擊 Oracle E-Business Suite 的模式一致：鎖定廣為部署的企業平台、大規模掃描暴露的實例、竊取資料後再勒索。ReliaQuest 已獨立證實此行動；Ransom-ISAC、eCrime.ch 與 Defused 於 7 月 22 日發布聯合警告。

### 這對企業軟體供應鏈安全的深遠影響

PLM 與 CAD 環境保存的是 **最珍貴的智慧財產**——設計檔案、藍圖、測試報告與專案計畫，一旦外洩便無法復原。Clop 的目標選擇顯示攻擊者已開始系統性獵捕暴露於網際網路的企業工程平台，而不只是檔案傳輸或 Webmail 系統。從漏洞公開（6 月 17 日）到 CISA KEV 收錄（6 月 25 日）、再到首批勒索郵件（7 月 20 日），整個時程被壓縮到 **數週之內**——暴露面盤點與修補速度已成為資安上的關鍵制約。使用 PTC Windchill／FlexPLM 的組織應假設可從網際網路觸及的實例都已被掃描，並檢視日誌中是否有此行動的指紋（對 `/Windchill/rfa/jsp/login/*.jsp?wsdl` 的 GET 請求約回傳 4,045 bytes，以及 `X-windchill-req` 惡意標頭），同時依 7 月 22 日聯合建議盡速套用修補。

---

## 本週活躍威脅

📌 **SAP Commerce Cloud 滿分漏洞 CVE-2026-58231（CVSS 10.0），修補 3 天後即遭利用**

SAP 8 月例行更新修補 Commerce Cloud 的 CVE-2026-58231——這項漏洞 CVSS 評分達滿分 10 分，可在 **未經身分驗證** 下遠端執行任意程式碼，且此前沒有公開 PoC 或遭利用跡象。威脅情報公司 Defused Cyber 在蜜罐中發現 **修補公告僅 3 天後** 就出現首次利用嘗試。SAP 向 BleepingComputer 表示已掌握情資並著手調查。Commerce Cloud 客戶應將此列為優先修補項目。

🔗 **參考資料：** [iThome — 甫修補的SAP Commerce Cloud滿分漏洞傳出遭到利用](https://www.ithome.com.tw/news/178160)

📌 **Zoom 零點擊漏洞 CVE-2026-53413／53414／53415——AI 模型不到 24 小時找出漏洞**

資安業者 A Security 揭露 Zoom **註解功能**（分享畫面與白板）的 3 個重大記憶體安全漏洞。攻擊者只要加入同一場會議，傳送特製的註解資料即可在目標裝置造成記憶體損毀——**無須受害者任何操作**——進而執行任意程式碼、竊取裝置資料或啟用麥克風／攝影機。研究團隊在 macOS 上示範了讓 Zoom 改為執行 Safari 的攻擊。值得注意的是，從發現漏洞到完成可實際利用的攻擊 **不到 24 小時**，全程僅使用一般使用者可取得的 AI 模型與 **少於 20 次提示**。Zoom 已透過用戶端 7.1.0、7.1.5 更新與伺服器端過濾機制修補；但端對端加密會議內容無法由伺服器過濾，與會者仍可能遭到同一場會議中攻擊者的惡意資料攻擊。

🔗 **參考資料：** [iThome — 頂尖AI模型不到24小時找出Zoom零點擊漏洞](https://www.ithome.com.tw/news/178080)

📌 **法國稅務總局 DGFiP 遭駭：67.8 萬筆資料因憑證濫用外洩**

法國公共財政總局（DGFiP）證實，攻擊者於 6 月底至 7 月間利用 **DGFiP 人員與經授權第三方人士的憑證**，透過內部 VPN 查閱納稅人資料。約 **67.8 萬名個人與專業人士** 的資料可能遭檢視或擷取，包括參考稅收收入、家庭指數、預扣稅率、公司名稱、SIREN 統一編號與地籍資料。系統偵測到異常帳號活動後已關閉權限，但入侵手法隱密，未能及時發現資料已遭竊。DGFiP 已通報法國 CNIL，並自本週起陸續通知受影響民眾；官方個人帳戶服務與密碼未受影響。

🔗 **參考資料：** [iThome — 法國國稅局坦承遭駭，可能外洩近70萬筆資料](https://www.ithome.com.tw/news/178175)

📌 **ExfilSquad 宣稱入侵 Wesco：竊得 CRM 環境 260 萬筆資料**

新興勒索組織 ExfilSquad 宣稱入侵 13 家企業組織，其中一家是全球供應鏈與配銷公司 **Wesco**，宣稱竊得該公司 CRM 環境 **260 萬筆資料**。資安公司 Resecurity 與 VenariX 指出，駭客疑似利用錯誤配置的 **微軟 Power Pages** 作為入侵管道（Wesco 據信採用 Microsoft Dynamics 365）。Wesco 表示事件很快被偵測到，IT 系統中未發現勒索軟體或其他惡意軟體，支付卡、財務帳號與敏感的客戶、員工資料並未曝險。

🔗 **參考資料：** [iThome — 全球供應鏈與配銷公司Wesco發生資安事故](https://www.ithome.com.tw/news/178176)

📌 **ShinyHunters 宣稱竊得 Carhartt 50 GB 員工與客戶資料**

ShinyHunters 在暗網宣稱入侵美國工作服品牌 **Carhartt**，在 **330 萬美元** 贖金談判失敗後，將公開約 **50 GB** 資料，內容包含數百萬筆客戶、員工個資與客戶忠誠方案資料。資安事件追蹤網站 Data Breaches 估計此案涉及逾 **400 萬行紀錄**。Carhartt（1889 年創立，全球營收約 10 億美元）尚未證實此消息。

🔗 **參考資料：** [iThome — ShinyHunters宣稱將公開服飾品牌Carhartt 50GB員工、客戶資料](https://www.ithome.com.tw/news/178161)

📌 **Valve 歐洲 Steam 硬體客戶資料因物流夥伴 CEVA 遭駭外洩**

Valve 通知歐洲 Steam 硬體客戶，物流合作夥伴 **CEVA Logistics** 於 7 月 29 日至 8 月 1 日間遭駭，導致部分歐洲 Steam 硬體訂單的 **姓名、地址、電話、電子郵件與訂購產品資訊** 可能外洩。Steam 帳號、密碼、Steam Guard 驗證碼與付款資訊不受影響。Valve 正通報各國資料保護主管機關，並提醒客戶留意利用訂單資料的釣魚攻擊。

🔗 **參考資料：** [iThome — 遊戲發行商Valve受物流夥伴CEVA遭駭波及](https://www.ithome.com.tw/news/178188)

📌 **Anthropic Claude 8 月 16 日大當機：多項服務中斷 36 分鐘後恢復**

Claude.ai、Claude Console、**Claude API**、Claude Code 與 Claude Cowork 於 8 月 16 日（UTC）起陸續出現效能下降，起初為登入驗證問題，隨後擴大為多項服務異常。Anthropic 部署修復後，於發出首次事故通知後 **36 分鐘** 宣布事故解決。目前尚未公布事故根因。

🔗 **參考資料：** [iThome — Anthropic Claude於8月16日發生大當機](https://www.ithome.com.tw/news/178172)

📌 **GeoServer 零時差漏洞更新：OSGeo 發布修補 GHSA-mqjf-5f49-2fjh（CVSS 9.8）**

8 月 12 日公開、數小時內即遭攻擊者掃描利用的 GeoServer 免驗證 SQL 注入／遠端程式碼執行零時差漏洞，現在已有官方修補。OSGeo 於 8 月 14 日發布 GeoServer 3.0.1、2.28.5、2.27.6，漏洞編號 **GHSA-mqjf-5f49-2fjh（CVSS 9.8）**。此漏洞是 **CVE-2023-25158 的回歸問題**，發生在使用 PostGIS 12 以上版本的 GeoTools 元件 `jsonArrayContains` 過濾函式，原有的緩解措施已失效。CVE 編號尚待指派，OSGeo 建議升級 GeoTools 或 GeoServer。

🔗 **參考資料：** [iThome — GeoServer零時差漏洞出現遭嘗試利用的跡象](https://www.ithome.com.tw/news/178166) | [iThome — OSGeo指出問題發生在GeoTools元件](https://www.ithome.com.tw/news/178169)

📌 **macOS 螢幕分享漏洞 CVE-2026-65400 遭利用部署門羅幣挖礦軟體（更新）**

我們在 8 月 13 日摘要報導過的 Apple 緊急修補 macOS 螢幕分享漏洞 CVE-2026-65400（CVSS 7.1，驗證繞過）已證實遭到實際利用。荷蘭國家網路安全中心（NCSC-NL）8 月 12 日更新警告：攻擊者入侵暴露於網際網路、開放 **5900 埠** 的 Mac 電腦，取得 **root 權限** 後部署 **門羅幣挖礦工具**。請確認所有可從網際網路連線的 macOS 端點皆已套用修補。

🔗 **參考資料：** [iThome — 駭客利用macOS螢幕分享漏洞部署門羅幣挖礦軟體](https://www.ithome.com.tw/news/178182)

📌 **AmnesiaStealer：以 ClickFix 手法散布的新型 macOS 竊資軟體**

Jamf Threat Labs 揭露新型 macOS 竊資軟體 **AmnesiaStealer**，主要透過 ClickFix 社交工程手法散布——攻擊者架設仿冒 GitHub 的下載頁面，誘騙使用者複製貼上終端機指令。其三階段感染鏈先以 Shell 指令下載並啟動 Rust 竊資程式，竊取 macOS 金鑰鏈、Safari Cookie、Apple Notes 與 Telegram 資料，再下載控制 Chromium 瀏覽器的惡意模組以竊取工作階段資料並遠端操控。Jamf 發現其仿冒頁面與先前的 Atomic（AMOS）、MacSync 竊資軟體共用相同誘餌模板，顯示可能共用基礎設施；目前尚無組織歸因。

🔗 **參考資料：** [iThome — 資安業者揭露新型macOS竊資軟體AmnesiaStealer](https://www.ithome.com.tw/news/178196)

📌 **Rancher CVE-2026-44945（CVSS 9.1）：跨叢集身分冒用可取得完整管理權**

SUSE 修補 Kubernetes 多叢集管理平台 **Rancher**（2.11–2.14）的重大權限提升漏洞。攻擊者只要已登入 Rancher 並能控制至少一個已註冊下游叢集的 RBAC（可用自建測試叢集充當跳板），即可冒用更高權限身分，取得 **Rancher 控制層的完整管理權**，進而控制該 Rancher 管理的所有 Kubernetes 叢集與其中的機密資料。漏洞源於跨叢集身分冒用的權限檢查落在本機管理叢集、並直接信任 HTTP 身分冒用標頭。修補版本為 2.11.16、2.12.12、2.13.8 與 2.14.4。

🔗 **參考資料：** [iThome — K8s多叢集管理平臺Rancher修補重大權限提升漏洞](https://www.ithome.com.tw/news/178197)

📌 **Evooo1Bot：源自 Mirai 的 Linux 殭屍網路，將邊緣設備變成 SOCKS5 代理**

Fortinet FortiGuard Labs 揭露先前未記錄的 Linux 殭屍網路家族 **Evooo1Bot**，自 2026 年 7 月起活躍。該惡意軟體重用外洩的 Mirai 原始碼 DDoS 引擎，並加入加密 C2 通訊、SSH 暴力破解掃描器、SOCKS 代理模組、憑證嗅探器與鎖定 **10 個已知 CVE** 的漏洞利用庫（涵蓋 Alcatel OmniPCX、NETGEAR、Tenda、D-Link、Telesquare 與 Mitsubishi ME-RTU 設備）。酬載載入流程自 `91.92.40[.]118` 擷取指令碼，程式會偵測分析環境與沙箱，透過 443 埠與 C2 伺服器加密通訊。

🔗 **參考資料：** [The Hacker News — Evooo1Bot Linux Botnet Exploits Known Flaws](https://thehackernews.com/2026/08/evooo1bot-linux-botnet-exploits-known.html)

📌 **MCP 伺服器：企業機密外洩的新興管道**

The Hacker News 警告，作為 AI 代理與企業工具、資料之間連線層的 **MCP（Model Context Protocol）伺服器** 正成為靜默的機密外洩管道。明文設定檔、過度授權的存取與提示注入都可能暴露憑證、服務帳號金鑰與 API token，而且往往在資安團隊發現伺服器存在之前就已發生。由於 MCP 讓 AI 代理以非人類身分（NHI）實際執行操作，外洩的機密不僅揭露資料，還能被直接拿來對企業系統採取行動。

🔗 **參考資料：** [The Hacker News — How MCP Servers Can Expose Enterprise Secrets](https://thehackernews.com/2026/08/how-mcp-servers-can-expose-enterprise.html)

📌 **蜜罐新創公司雇用三名北韓駭客——全程錄影存證**

BCA LTD、NorthScan 與 ANY.RUN 的研究人員打造了一個假 DeFi 新創公司（**Ballena Azul**），雇用了三名評估為與 **Famous Chollima／Lazarus** 生態系有關的北韓 IT 人員。三人均借助 AI 求職工具（AIApply、Final Round AI、Simplify Copilot）通過面試，提交的文件有諸多矛盾（例如聲稱住在德州卻繳交加州駕照、檔案帶有 SynthID 浮水印痕跡），上班第一天便執行 `dxdiag`／`systeminfo`／`wmic`、檢查新 IP 的所在國家，並安裝 Chrome Remote Desktop，在研究者架設的監控 VM 中暴露了真實瀏覽紀錄、儲存密碼與雇主 GitHub 帳號。此實驗呈現國家背書的 IT 人員如何大規模滲透西方企業。

🔗 **參考資料：** [xakep.ru — Исследователи создали фейковый криптостартап и наняли северокорейских хакеров](https://xakep.ru/2026/08/17/hiring-lazarus-apt/)

📌 **網路設備廠商修補：SonicWall GMS、TP-Link Aginet、Fortinet**

- **SonicWall** 修補已退役的 **GMS** 管理平台（2025 年 10 月 EOL）6 個漏洞：CVE-2026-66147（CVSS 9.4）與 CVE-2026-66145（CVSS 9.1）皆允許 **未經驗證遠端執行程式碼**（後者還可透過 Zip-slip 任意寫入檔案）；修補版本為 GMS 9.5.2。
- **TP-Link** 修補 ISP 導向的 **Aginet** 產品線（Mesh Wi-Fi、路由器、PON、xDSL 數據機）5 個漏洞：CVE-2025-30237（CVSS 8.7）為 **繞過驗證、完全控制設備** 的高風險漏洞；CVE-2025-30238／30241（各 8.6 分）可造成權限提升與任意指令執行。韌體由 ISP 部署，請向您簽約的 ISP 確認修補狀態。
- **Fortinet** 修補 FortiWeb 與 FortiManager 5 個漏洞：CVE-2026-26035（CVSS 8.8）可讓遠端攻擊者以隨機帳密登入 FortiWeb GUI／CLI 管理介面；CVE-2026-70468（CVSS 7.3）可透過特製 FGFM 請求繞過 FortiManager 驗證。

🔗 **參考資料：** [iThome — SonicWall為已退役GMS平臺修補6個漏洞](https://www.ithome.com.tw/news/178167) | [iThome — TP-Link修補Aginet網路產品線5個漏洞](https://www.ithome.com.tw/news/178186) | [iThome — Fortinet修補WAF及網路設備管理平臺漏洞](https://www.ithome.com.tw/news/178163)

---

## OPSWAT可以怎麼幫上忙

今日多則新聞的共通點是 **不受信任的檔案抵達端點或網路**——AmnesiaStealer 仿冒 GitHub 下載頁面與 ClickFix「複製貼上指令」的誘餌都屬於檔案型攻擊，單靠特徵碼防禦難以攔截。MetaDefender 的 30 餘種引擎多重掃描與檔案內容淨化重構（CDR）可在惡意安裝程式執行前移除其中的惡意酬載，深度內容檢查也能攔截混淆處理過的安裝檔。對於導入 MCP／AI 代理工具鏈、會從不可信來源拉取套件或檔案的團隊，同樣的檔案檢查機制可套用在所有資料攝取點。

🔗 **參考資料：** 綜合報導（[iThome](https://www.ithome.com.tw/news/178184)、[TechTimes](https://www.techtimes.com/articles/324578/20260815/clop-hacks-shell-ge-philips-43-victim-ptc-windchill-zero-day-campaign.htm)、[eSecurity Planet](https://www.esecurityplanet.com/threats/shell-investigates-clop-data-theft-claims-tied-to-ptc-flaw/)、[Reuters](https://www.reuters.com/legal/government/philips-shell-targeted-by-hacking-group-2026-08-13/)）