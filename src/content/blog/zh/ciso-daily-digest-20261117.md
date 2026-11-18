---
title: "CISO 每日摘要：ConnectWise 警告 ScreenConnect 攻擊持續進行，SCKit 正瞄準未修補之系統 (20261117)"
description: "針對 ConnectWise ScreenConnect、N-able N-central 發布了關鍵更新與安全性警告，以及全新的 macOS 隱私控制功能。"
pubDate: 2026-11-17
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## ConnectWise 警告 ScreenConnect 攻擊持續進行，SCKit 正瞄準未修補之系統

ConnectWise 已完成針對夥伴 ScreenConnect 環境遭未經授權存取事件的調查，並警告攻擊行動仍在持續。該公司報告指出，威脅行為者正使用名為 SCKit 的工具包，其中包括一個稱為 RelayTrap.cs 的 C# 模組，企圖從受感染的客戶端裝置向管理服務提供商 (MSP) 技術員工作站進行類似蠕蟲式的橫向移動。

一項關鍵漏洞 CVE-2026-84869 (CVSS 9.9) 正被利用，可在活動中的遠端作業階段進行未經授權的文件傳輸與程式碼執行。此活動也與 RMM+ 版本 1.0.31 及 1.0.32 中的身份驗證缺陷有關。資安研究人員偵測到的近期活動影響了 41 個組織中的 205 台主機，部分案例涉及託管於防彈基礎設施 (bulletproof infrastructure) 上的惡意客戶端。

為了緩解這些風險，ConnectWise 已在 400 個夥伴環境中停用了五個第三方擴充功能：Labtech Plus、RMM Plus、RMM+、RMM Plus Password Link 以及 RMM+ Password Link。該公司敦促所有客戶將技術員端客戶端更新至 26.6.5 或更高版本，並強調單純的軟體更新並無法移除既有的未經授權存取或持續性威脅。

### 📌對 CISO 的影響

- **優先進行 RMM 修補 —** 必須立即更新 ScreenConnect (v26.6.5+) 與 N-central，以防止未經授權的遠端執行，以及透過 MSP 環境進行類似蠕蟲式的橫向移動。
- **監控持續性威脅 —** 由於更新無法移除已建立的未經授權存取，防禦者在發生任何未修補的暴露後，必須主動搜尋惡意服務，例如偽裝成「Windows Update Agent」組件的內容。
- **審計第三方擴充功能 —** 審查所有 RMM 擴充功能，並停用不必要或高風險的第三方模組，以免其成為部署 SCKit 等工具包的入侵點。

**參考來源:** [ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems](<https://thehackernews.com/2026/11/connectwise-warns-screenconnect-attacks.html>)

---

## 本週活躍威脅

📌 **N-able 修補 17 個 N-central 缺陷，攻擊者先前利用漏洞部署加密貨幣挖礦程式**

N-able 已發布關鍵安全性更新 N-central 2026.4 Hotfix 3，以修補包括權限提升、身份驗證繞過及遠端程式碼執行在內的 17 個漏洞。這些修補程式是在 4EverAble2Shell 與 Agent2Shell 漏洞遭到利用後發布的，攻擊者曾利用這些漏洞在受影響的伺服器上部署加密貨幣挖礦程式。

**參考來源:** [N-able Patches 17 N-central Flaws as Attackers Exploit Earlier Bugs to Deploy Crypto Miners](<https://thehackernews.com/2026/11/n-able-patches-17-n-central-flaws-as.html>) 

---

📌 **Apple 加強 macOS App 權限控制，以因應 AI Agent 的資安風險限制數據存取**

Apple 正在 macOS 27.3 beta 2 中引入更細粒度的數據存取控制，以降低與人工智慧 (AI) Agent 相關的風險。此更新將「裝置控制」(Device Control) 與「數據存取」(Data Access) 分拆為獨立的「系統與應用程式保護覆寫」(System &amp; App Protection Override) 與「輔助使用」(Accessibility) 設定，允許使用者將 App 權限限制在特定資料夾或個別應用程式中。

**參考來源:** [Apple Tightens macOS App Permissions to Limit Data Access Amid AI Agent Security Risks](<https://thehackernews.com/2026/11/apple-tightens-macos-app-permissions-to.html>) 

---

📌 **Optimizely 腳本遭劫持，向 CNN、BBC 及 Zoom 訪客提供信用卡竊取器與 iOS 漏洞利用工具包**

一名攻擊者利用 Optimizely Web Experimentation 的漏洞，將惡意 JavaScript 注入客戶專案中。這導致包括 CNN、BBC 與 Zoom 在內的至少 178 個組織的訪客收到了受污染的腳本。該惡意程式碼旨在擷取信用卡詳細資訊，並將加密貨幣錢包地址替換為攻擊者的地址。此外，這些腳本嘗試向 iPhone 與 iPad 用戶投放第二階段的 iOS 漏洞利用工具包，但目前尚未收到設備被接管的報告。Optimizely 此後已修復該漏洞並實施防護措施，以防止未經授權的程式碼傳輸。

**參考來源:** [Hijacked Optimizely Scripts Served Card Skimmer and iOS Exploit Kits to CNN, BBC and Zoom Visitors](<https://thehackernews.com/2026/11/hijacked-optimizely-scripts-served-card.html>) 

---

📌 **新型 GitDoor 與 GraphDoor 後門將 GitHub 與 SharePoint 轉化為隱蔽的 C2 通道**

一項代號為 Operation ShadowCloud 的網路間諜行動，正利用名為 GraphDoor 與 GitDoor 的兩個新型後門，針對亞洲與非洲的政府部門進行攻擊。這些植入物利用合法的雲端服務（特別是 Microsoft SharePoint 與 GitHub）來隱藏指令與控制 (C2) 流量，並規避基於網路的偵測。攻擊者使用 MeshAgent 遠端存取工具來投放這些後門，後門可在記憶體中執行 shellcode 並下載額外的外掛程式。在與此活動相關的調查中，已發現一家位於台灣的受目標組織。

**參考來源:** [New GitDoor and GraphDoor Backdoors Turn GitHub and SharePoint Into Covert C2 Channels](<https://thehackernews.com/2026/11/new-gitdoor-and-graphdoor-backdoors.html>) 

---

📌 **研究人員詳述 iPhone 漏洞：應用程式在拒絕麥克風權限後仍可錄音**

Apple 音訊服務中的一個漏洞，先前允許 iOS 與 iPadOS 上的應用程式在使用者明確拒絕麥克風權限後仍能進行錄音。研究人員發現，當應用程式處於前台時即可發生此規避行為，且即使在裝置鎖定或應用程式移至背景後，錄音仍能持續進行。該漏洞還會導致在某些測試環境中，標準的橘色隱私指示燈無法顯示。Apple 此後已發布安全性更新以解決此問題。

**參考來源:** [Researchers Detail iPhone Flaw That Let Apps Record Audio Despite Denied Microphone Permission](<https://thehackernews.com/2026/11/researchers-detail-iphone-flaw-that-let.html>) 

---

📌 **華晟部分資訊系統遭攻擊；核心系統未受影響**

電子零組件公司華晟 (6272) 報告稱，其部分資訊系統主機於 11 月 16 日遭到網路攻擊。公司已啟動緊急應變機制以隔離受影響的主機並進行系統復原。初步調查結果顯示，影響範圍僅限於特定的資訊系統，公司的核心系統保持不受影響。目前尚未發現資料外洩的證據，且備份機制運作正常。

**參考來源:** [驊陞部分資訊系統遭網路攻擊，核心系統未受影響 - iThome](<https://www.ithome.com.tw/news/180554>) 

---

📌 **零售商永易之委外電商供應商發生安全事件，導致資料庫遭未經授權存取**

零售公司永易 (2939) 報告稱，其委外電商服務供應商 Cyberbiz 發生了一起涉及未經授權存取特定資料庫的安全事件。此次違規事件包括來自 BVI Taiwan 線上商店的訂單相關資料。永易已透過電子郵件通知會員與消費者，以提高對潛在詐欺行為的警覺。該公司表示，此事件對其整體財務或業務營運並未造成重大影響。

**參考來源:** [貿易百貨公司永邑委外電商服務商發生資安事件，訂單資料庫遭未授權存取 - iThome](<https://www.ithome.com.tw/news/180550>) 

---

📌 **uBlock Origin Firefox 版本修復通用型 XSS 漏洞**

Firefox 的 uBlock Origin 瀏覽器擴充功能已發布安全性更新，以修復一個高風險的通用型跨網站指令碼 (UXSS) 漏洞。該漏洞存在於 Element Picker 功能中，允許惡意網站透過 postMessage API 與未經驗證的輸入來操縱擴充功能的介面。藉由利用此漏洞，攻擊者可以誘使使用者注入惡意的 JavaScript 規則，進而使其在使用者訪問的其他網站上執行。開發人員已在 1.76.4 版本中解決了這些問題，其中包括改進了 Element Picker 的秘密權杖 (secret token) 驗證機制，並強化了規則內容的檢查。

**參考來源:** [Firefox版uBlock Origin修補XSS漏洞，惡意規則可跨網站執行JavaScript - iThome](<https://www.ithome.com.tw/news/180570>) 

---

📌 **KKday 行銷網站疑似洩露產品營運數據**

旅遊平台 KKday 在相關報導後正面臨審查，報導指出其「KKpartners」行銷網站及相關 GitHub 專案可能無意中洩露了商業營運數據。據報導，洩露的資訊包括產品銷售表現、交易量、平均訂單價值以及利潤率。雖然尚未確認有消費者個人資料外洩，但這些商業情資的可用性可能會讓競爭對手洞察該公司的市場策略與獲利能力。

**參考來源:** [KKday聯盟行銷網站疑不慎公開商品營運數據，內部資訊控管成外界關切焦點 - iThome](<https://www.ithome.com.tw/news/180552>) 

---

📌 **研究指出透過 Lovable AI 平台構建的應用程式存在資料權限問題**

由 Crissy Field 與 Handelsblatt 進行的一項研究指出，使用 Lovable AI 無程式碼 (no-code) 平台開發的應用程式存在顯著的資料存取控制弱點。研究人員分析了超過 159,000 個專案，發現數千個使用 Supabase 資料庫的網站會在不需要使用者身分驗證的情況下，將記錄直接傳輸至瀏覽器。研究發現，約 30% 的受調查網站允許未經授權存取敏感記錄，包括電子郵件地址、身分文件、內部通訊及財務記錄。研究人員指出，雖然 AI 工具降低了開發門檻，但並不會減輕實施適當安全控制與資料隔離的責任。

**參考來源:** [德國研究揭露AI開發平臺Lovable用戶開發的應用程式，有不少存在資料庫權限設定不當問題 - iThome](<https://www.ithome.com.tw/news/180567>) 

---

📌 **GeoVision NVR 漏洞被利用以部署加密貨幣挖礦程式**

網路安全公司 Huntress 報告指出，攻擊者正在利用 GeoVision GV-WebCam Server 軟體中已知的遠端程式碼執行 (RCE) 漏洞，針對暴露於網際網路的網路錄影機 (NVR) 進行攻擊。攻擊鏈包括利用漏洞獲取指令列存取權限、下載惡意驅動程式以停用安全軟體，並最終部署 XMRig 加密貨幣挖礦程式。已識別的漏洞包括 CVE-2026-7372、CVE-2026-42369 與 CVE-2026-42370。敦促使用 GeoVision 設備的組織更新至最新軟體版本，並避免將管理介面直接暴露於公開網際網路。

**參考來源:** [奇偶科技示警影像監控軟體已知漏洞遭利用，Huntress揭露13家組織的設備遭挖礦攻擊 - iThome](<https://www.ithome.com.tw/news/180574>) 

---

📌 **國家級攻擊者 SilentAir 透過電信基礎設施針對行動用戶**

電信安全公司 Enea 已識別出一個疑似國家級威脅行為者 SilentAir，該組織正針對包括台灣在內的 10 多個國家的行動用戶進行攻擊。該集團被認為滲透了全球行動網路互連結構以進行間諜活動，包括攔截通話與簡訊、追蹤裝置位置，並可能透過雙因素驗證數據劫持網路帳戶。據報導，攻擊者利用「Silent SMS」（不會在手機上觸發通知的簡訊）來掩蓋其活動，並透過各種電信服務中心 تسه其實施攔截。

**參考來源:** [【資安日報】11月17日，國家級駭客組織SilentAir鎖定臺灣等十多個國家的手機用戶，濫用電信訊號攔截簡訊與通話 - iThome](<https://www.ithome.com.tw/news/180566>) 

---

📌 **OWASP 指出 AI 資料中心的主要安全風險**

開放網路應用程式安全專案 (OWASP) 發布了一份專門針對 AI 資料中心基礎設施的 10 項安全風險清單，並將其分為關鍵、高與中等風險。報告強調，現代 AI 環境高度依賴 GPU 和高速互連等高效能運算 (HPC) 技術，由於多租戶資源共享和複雜的管理層，面臨著獨特的挑戰。所識別出的 5 項關鍵風險包括：硬體與韌體完整性受損、高速網路互連（如 InfiniBand 和 RDMA）中的漏洞、不當的多租戶隔離與資源重用、不安全的帶外 (out-of-band) 管理平面（包括 BMC 和 Redfish），以及 AI 基礎設施供應鏈受損。OWASP 建議企業應驗證韌體完整性、確保強大的網路隔離，並驗證 AI 集群中所使用的所有軟體與硬體組件的來源。

**參考來源:** [OWASP公布AI資料中心十大資安風險，韌體遭竄改、高速網路防護不足列重大風險 - iThome](<https://www.ithome.com.tw/news/180526>) 

---

📌 **Apache Axis 漏洞遭利用，目標指向 Atlassian Confluence 與 N-able N-central**

Rapid7 報告指出，CVE-2026-90436 正遭到積極利用，這是一個存在於 Apache Axis SOAP Web 服務框架中的關鍵遠端程式碼執行 (RCE) 漏洞。該漏洞的 CVSS 分數為 9.8，是一種不安全的反射缺陷 (unsafe reflection flaw)，允許未經身分驗證的攻擊者透過發送特製的 SOAP 請求來執行任意 Java 類別。目前已觀察到該漏洞正針對 Atlassian Confluence Data Center 和 N-able N-central 環境進行攻擊。由於受影響的 Apache Axis 1.x 版本已停止維護 (end-of-life)，Apache 軟體基金會將不會發布補丁，並建議遷移至 Axis 2 或其他 SOAP 引擎。執行版本低於 9.x 且啟用遠端 API 的 Confluence 用戶面臨風險；而 N-able 用戶可透過 2026.4 HF3 更新來消除舊版 API 功能，藉此降低風險。

**參考來源:** [Apache Axis重大漏洞遭到利用，攻擊者藉此滲透Atlassian Confluence與N-able N-central - iThome](<https://www.ithome.com.tw/news/180573>) 

---

📌 **美國當局瓦解北韓 FaceStealer 基礎設施並凍結遭竊加密資產**

FBI 已查封北韓威脅行為者 FaceStealer 所使用的雲端基礎設施，該組織在過去 18 個月內竊取了超過 4 億美元的加密貨幣。該組織採用精密的社交工程手段，劫持 Telegram 帳號並錄製受害者的網路攝影機畫面，在詐騙視訊通話期間冒充已知聯絡人，最終誘騙目標透過虛假的會議連結安裝惡意軟體。在另一項行動中，美國司法部宣布凍結從 Binance 交易所竊取的超過 27 億美元加密資產，該事件先前歸因於北韓組織 TraderTraitor。執法部門持續追蹤這些資金的流向，以防止進一步轉移。

**參考來源:** [美國查扣北韓駭客FaceStealer攻擊基礎設施，另凍結逾27億美元Binance遭竊資產 - iThome](<https://www.ithome.com.tw/news/180495>) 

---

📌 **英國與法國針對商業網路入侵產業發布指南**

英國與法國政府共同發布了《商業網路入侵產業指南》，旨在防止商業間諜軟體與入侵工具被濫用。這份自願性指南敦促開發商、經銷商與系統整合商實施嚴格的客戶盡職調查與風險管理流程，以確保其產品不會被用於侵犯人權或未經授權的監控。指南建議公司對客戶進行背景調查、驗證政府授權，並透過威脅情報監控濫用跡象。若發現顯著的濫用風險，指南建議企業應暫停相關工具的銷售與技術支援。

**參考來源:** [英法發布商業網路入侵產業指引，籲業者審查客戶、必要時停止銷售工具 - iThome](<https://www.ithome.com.tw/news/180491>) 

---

📌 **ENISA 警告漏洞利用速度加快及供應鏈風險增加**

歐盟網路安全局 (ENISA) 發布了 2026 年網路安全趨勢報告，警告攻擊者在漏洞公開後的幾分鐘內便會日益增加利用頻率。該機構預期，隨著 AI 模型的進步，漏洞發現的速度將進一步加快，這將大幅增加組織維持快速修補週期的壓力。報告還強調了與供應鏈依賴相關的日益增長的風險，指出影響主要雲端或軟體供應商的安全事件可能會產生廣泛的下游影響。ENISA 指出，關鍵領域的中小型企業 (SME) 與大型組織相比，通常面臨更高的風險且具備較少的事件應變能力。

**參考來源:** [歐盟網路安全局示警漏洞公開後數分鐘內恐遭利用，AI與供應鏈依賴加劇資安風險 - iThome](<https://www.ithome.com.tw/news/180493>) 

---

📌 **Shadowserver 觀察到全球超過 3,800 個 AI 攻擊框架實例，其中 20 個位於台灣**

Shadowserver 基金會已追蹤數千個面向網路的自主式 AI 攻擊框架實例。截至 2026 年 11 月 15 日，Shadowserver 已識別出 3,847 個託管此類框架的 IP 位址，其中包括 ARTEX (2,852 個實例)、CyberStrike (493 個)、PentestCode (231 個) 以及 VXControl (196 個)。聯邦調查局 (FBI) 先前曾警告，攻擊者自 8 月以來已開始使用開源的 ARTEX 框架來加速入侵速度，有時在不到 3 小時內即可取得高階系統權限。從地理位置來看，實例集中度最高的是美國，其次是中國、香港、新加坡和日本，其中有 20 個實例位於台灣。

**參考來源:** [Shadowserver觀測到公開網路上存在逾3,800個AI攻擊框架執行個體，臺灣也有20個 - iThome](<https://www.ithome.com.tw/news/180560>) 

---

📌 **Anthropic 將重大漏洞披露窗口從 90 天縮短至 30 天**

為了應對 AI 發現與利用軟體漏洞速度加快的問題，Anthropic 已宣布更新其協調漏洞披露 (CVD) 政策。從 2027 年 1 月 1 日開始，高至嚴重等級漏洞的披露窗口將從 90 天縮短至 30 天，而其他漏洞的窗口則為 45 天。此外，Anthropic 在向外部協調機構進行升級前，等待廠商回應的期限將從 30 天縮短至 15 天，並將完整技術細節的發布延後至補丁發布後的 30 天。該公司指出，這些變更旨在跟上 AI 驅動的攻擊利用能力。

**參考來源:** [漏洞濫用速度加快，Anthropic將重大漏洞揭露靜默期由90天縮短為30天 - iThome](<https://www.ithome.com.tw/news/180557>) 

---

📌 **WebRAT 木馬可能透過 Telegram 小工具漏洞進行傳播**

研究人員已發現可能與新版 Telegram 小工具漏洞相關的惡意活動。Kaspersky 報告指出，造訪特定頻道可能會觸發 PowerShell 腳本，進而下載並執行 WebRAT（亦稱為 Salat Stealer）惡意軟體。WebRAT 使用 Rust 語言編寫，能夠實現遠端系統控制，並具備竊取加密貨幣錢包和 Telegram 帳號憑證的能力。雖然 Telegram 開發人員表示已於 11 月 10 日修復了一個與 Android 相關的問題，但來自 V12 的研究人員聲稱，一個獨立的遠端程式碼執行 (RCE) 漏洞在 Windows 用戶端上仍然有效。據報導，該漏洞與在訊息中執行 QuickJS JavaScript 引擎且缺乏沙箱環境的能力有關。

**參考來源:** [Через уязвимость в виджетах Telegram мог распространяться троян WebRAT](<https://xakep.ru/2026/11/17/telegram-widgets/>) 

<!-- ciso-revision:ciso-20261117-3-1795041785034 -->
