---
title: "CISO 每日摘要：駭客利用影響企業管理伺服器的關鍵 Puppet RCE 漏洞 (20261118)"
description: "企業管理工具、AI 開發框架以及廣泛使用的 Java 環境中已通報關鍵漏洞，包括 Puppet RCE 漏洞的主動利用，以及與 Microsoft 相關之 Python 套件的供應鏈入侵。"
pubDate: 2026-11-18
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 駭客利用影響企業管理伺服器的關鍵 Puppet RCE 漏洞

由於有主動利用的報告，CISA 已將 Perforce Puppet 中的一個關鍵反序列化漏洞列入其已知被利用漏洞（KEV）目錄。該漏洞編號為 CVE-2026-115731，CVSS 分數為 9.4，存在於該平台的報告處理程式碼中。擁有 CA 簽署代理憑證的攻擊者可以透過 PUT 請求提交精心建構的 rich-data 類型，進而在 Puppet Server 上執行任意程式碼。

如果憑證授權單位（CA）缺乏強大的驗證機制，該漏洞的風險將會放大，因為攻擊者有可能藉此入侵 CA。此類入侵可能允許未經身分驗證的網路攻擊者取得有效憑證並利用伺服器。安全研究人員指出，在 Puppet 伺服器上取得遠端程式碼執行權限後，攻擊者可以奪取 CA 簽署金鑰，進而便於在整個基礎設施中冒充其他主機。

受影響的版本包括 Puppet Enterprise 2026.0.0、2025.0.0 和 2023.8.0，以及 Puppet Core 9.0.0 和 8.x。該漏洞也延伸至 Puppet 的開源實作版本 OpenVox。由於 Puppet 通常對大量企業系統擁有高層級的存取權限，成功的利用可能導致勒索軟體部署、大規模數據外洩，或在網路內進行重大的橫向移動。

### 📌對 CISO 的影響

- **基礎設施管理風險 —** 入侵如 Puppet 等中央編排工具可能會賦予攻擊者對整個伺服器集群的完整控制權，因此必須立即修補組態管理平台。
- **供應鏈完整性 —** 熱門 PyPI 套件遭入侵的情況凸顯了嚴格執行相依性版本鎖定（dependency pinning）以及監控 CI/CD 流水線是否存在未經授權憑證外洩行為的必要性。
- **執行環境安全性 —** 核心執行環境（如 OpenJDK）中的漏洞需要仔細評估特定硬體的優化指令，並及時更新 Java 發行版以防止 RCE。

**參考來源:** [Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>)

---

## 本週活躍威脅

📌 **攻擊者入侵 Microsoft 的 agent-framework PyPI 套件以竊取雲端憑證**

已發現 Microsoft agent-framework PyPI 套件的惡意版本 1.26.1 和 1.26.2 包含憑證竊取程式。受害版本利用 Python 啟動鉤子（透過 .pth 檔案），使其在每次 Python 解釋器啟動時都能自動執行惡意程式碼，無論該套件是否被明確匯入。該惡意軟體針對環境變數、Azure CLI 憑證、GitHub Actions OIDC 權杖以及 Azure 受管理身分權杖，並將收集到的數據外洩至遠端 webhook。

**參考來源:** [Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials](<https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html>) 

---

📌 **導致遠端程式碼執行的 OpenJDK 漏洞 (CVE-2026-114938)**

Calif 的安全研究人員揭露了 OpenJDK 中的一個記憶體損壞漏洞，被稱為「Java4Shell」（CVE-2026-114938），該漏洞影響 Base64 解碼優化。當在處理特定 AVX-512 VBMI 指令的 x86-64 處理器上執行時，該漏洞可能允許遠端攻擊者竊取敏感記憶體資訊或執行任意程式碼。雖然 JPCERT/CC 尚未確認有主動利用的情況，但研究人員已在 Keycloak、Jenkins 和 Atlassian Jira 等應用程式中演示了未經身分驗證的 RCE。

**參考來源:** [お知らせ：CyberNewsFlash「OpenJDKにおけるリモートコード実行につながる脆弱性（CVE-2026-114938）について」](<https://www.jpcert.or.jp/newsflash/2026111801.html>) 

---

📌 **俄羅斯 COLD RELIC 駭客利用竊取的 Google Workspace 資料攻破第二個美國組織**

Google 的 Mandiant 與 GTIG 將俄羅斯間諜組織 Cold Relic 與 2026 年一個美國組織遭入侵的事件聯繫起來，該入侵使用的是 2025 年底從另一個美國實體竊取的資料。Cold Relic 註冊了異體多因素驗證裝置、密鑰以及多因素驗證備用代碼以維持長期存取，並透過 Google Takeout 匯出雲端儲存內容。攻擊者隨後利用第一個組織的受盜憑證，針對一個為 Google Workspace 聯合單點登入之第二個美國組織的 Microsoft Entra ID 使用者進行網路釣魚，導致大量雲端儲存檔案被下載。

**參考來源:** [Russian COLD RELIC Hackers Use Stolen Google Workspace Data to Breach Second U.S. Organization](<https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html>) 

---

📌 **新攻擊繞過 TPM 鎖定，可在數天而非數年內破解 Windows Hello 與 BitLocker PIN 碼**

柏林工業大學的研究人員發現，開啟某些 AMD 與 Intel 電腦後可重置 TPM 鎖定，使短 PIN 碼暴露於猜測風險之下。在一台 AMD 筆記型電腦上，他們在 236 次嘗試內、耗時 57 分鐘找出四位數 Windows Hello PIN 碼，最壞情況需 40 小時，而若鎖定機制正常運作則需 69 天。在一台 Intel 筆記型電腦上，他們在 236 次嘗試內、短於七分鐘內找出六位數 BitLocker PIN 碼，將最壞情況破解時間從 19 年縮減至 20 天。此攻擊針對主機板快閃記憶體中儲存的韌體 TPM 狀態，使用快閃記憶體插接板或針對 Winbond RPMC 晶片的電壓故障注入來重置錯誤猜測計數器。AMD 確認漏洞 CVE-2026-43613（CVSS 5.1），並計畫於 2026 年 11 月至 2027 年 2 月間提供韌體修正。Microsoft 承諾將建議的最低 Windows Hello PIN 碼長度提高到六位數，並在 Windows 11 測試組建中將六位數設為預設值。研究人員建議為 Windows Hello 與 BitLocker PIN 碼增加至少兩位數，並在有可用韌體更新時進行安裝。

**參考來源:** [New Attack Bypasses TPM Lockout to Crack Windows Hello and BitLocker PINs in Days, Not Years](<https://thehackernews.com/2026/11/flash-chip-attack-bypasses-tpm-lockout.html>) 

---

📌 **新變體 EggStreme 惡意軟體保持緘默以逃避安全工具，針對政府攻擊**

Bitdefender 報告指出，疑似負責 EggStreme 的中國 APT 攻擊者重構了惡意軟體，以逃避其 2025 年 9 月被揭露後的偵測，並持續針對菲律賓政府組織進行攻擊。重新設計的工具組採用不同的網路通訊協定、增強的指令集，以及一種從不發出信標的被動變體，並將基礎設施從單一憑證授權機構遷出。包含 EggStremeFuel、EggStremeLoader、EggStremeReflectiveLoader 與 EggStremeAgent 的元件支援系統分析、持久性、記憶體執行、偵察、記錄按鍵、反向連線 shell 與檔案傳輸。部分較新組建在被動模式下透過開啟監聽埠運行，而橫向移動則現在使用透過 SMB 連線的非受控系統，並遠端執行 VBScript 以及 DLL 搜尋路徑劫持。中度可信度的證據有限顯示也針對台灣進行攻擊。另外，Dream Research Labs 報告指出 Mustang Panda 以東盟峰會誘餌針對菲律賓官員，透過 DLL 搜尋路徑劫持傳送 PlugX，而 Palo Alto Networks Unit 42 則詳細描述了 Earth Alux 自 2025 年 7 月以來針對東南亞政府的攻擊，使用 PerfectPioneer 與 KUKURAT 遠端存取木馬透過 HTTP/3 通訊、Exchange 伺服器上的 Web Shell，以及 PsExec、WMI 與 WinRM 等橫向移動工具。

**參考來源:** [New EggStreme Malware Variant Goes Silent to Evade Security Tools in Government Attacks](<https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html>) 

---

📌 **JPCERT/CC 發布事件調查報告檢查表**

JPCERT/CC 發布了事件調查報告檢查表，包含針對委託調查的組織與調查人員分別設計的檢查表，以及一份範例報告。內容旨在協助在調查開始前協定調查範圍，並在報告交付時審查調查結果、證據、結論與補救建議。JPCERT/CC 表示，該檢查表適用於懷疑網路入侵（如惡意軟體感染）的案件，應根據個案與合約進行調整，並無法單獨保證技術正確性，在審查困難時建議諮詢專家。

**參考來源:** [お知らせ：JPCERT/CC Eyes「インシデント調査報告書受領時のチェックリスト」](<https://blogs.jpcert.or.jp/ja/2026/11/ir_report_checklist.html>) 

---

📌 **台灣 NCCERT 揭露政府平台忘記帳戶功能身分驗證缺陷，34 個異常帳戶被新增**

台灣的網路安全機構揭露，一個政府服務平台的忘記帳戶功能存在身分驗證缺陷，使攻擊者能在未完成憑證驗證的情況下取得帳戶維護權限，並新增 34 個異常帳戶。既存的存取控制阻止了存取其他平台功能的嘗試，未影響正常營運，也沒有資料被竄改或外洩的證據。該機構表示漏洞已修補，並建議採用失敗安全的身分驗證設計、後端確認驗證完成狀態、統一的例外處理、在安全測試中納入異常情境，以及 API 速率限制。

**參考來源:** [資安署揭露某機關平臺忘記帳號功能存在身分驗證漏洞，而被新增34組異常帳號 - iThome](<https://www.ithome.com.tw/news/180607>) 

---

📌 **六個未修補的丹佛斯冷凍控制器漏洞允許未經身份驗證的遠端控制**

iThome 報導，荷蘭安全公司 Midnight Blue 發現丹佛斯 AK-SM800A 冷凍控制器韌體版本 5.3.2 及更舊（包括 5.4.0）中存在六個未修補的基於堆疊的緩衝區溢位漏洞。其中五個漏洞位於未經身份驗證的 Web 請求處理程序中，另一個位於處理嚴格模式驗證的閘道程序中。利用該漏洞可能讓攻擊者遠端執行程式碼、修改冷凍設定、觸發除霜循環、植入持久性程式碼或禁用控制器。目前尚未分配任何 CVE，Midnight Blue 正與丹佛斯協調披露，且未發布技術細節。iThome 建議組織盤點受影響控制器、移除公共網路連線，並透過 VPN 或受限私有網路路由必要的遠端維護。

**參考來源:** [Danfoss冷凍控制器傳出6個未修補漏洞，攻擊者可未經身分驗證遠端取得控制權 - iThome](<https://www.ithome.com.tw/news/180602>) 

---

📌 **大阪市確認 Arara 電子郵件服務洩露超過 107 萬個地址**

iThome 報導，大阪市確認 Arara 電子郵件發送服務違規事件洩露了 1,078,713 個電子郵件地址，這些地址曾接收透過委託給 TKC 的市政行政線上系統發送的訊息。該市呼籲居民警惕以虛假藉口發送的網路釣魚電子郵件。Arara 先前披露，約 8,133 萬個地址遭到洩露或可能遭到洩露，影響多達約 380 家企業客戶，包括小學館、BIC Camera 和 MOS Burger，並表示攻擊者利用受損服務發送了多達約 713 萬封模仿信用卡公司的可疑電子郵件。日本政府正在審查安全事件通報機制和 IT 供應鏈安全，總理指示關鍵基礎設施提供者縮短通報時間，並對政府 IT 系統進行風險評估。

**參考來源:** [Arara郵件服務遭駭，日本大阪市確認逾107萬筆電子郵件地址外洩 - iThome](<https://www.ithome.com.tw/news/180555>) 

---

📌 **NuGet.org 新增套件預約審核以減少被盜自動化憑證的濫用**

iThome 報導，Microsoft 已在 NuGet.org 新增套件預約發布功能，允許開發團隊透過自動化管線上傳套件、完成安全檢查，然後由授權維護者批准公開發布。組織可以限制自動化工具的發布權限，降低被盜建置憑證被用來直接發布惡意套件的風險。預約階段中的套件會進行惡意程式掃描和簽章檢查，但不會出現在公開頁面或搜尋結果中，且在批准前無法安裝。API 金鑰可以限制為僅上傳預約套件，可信發布也可以套用相同限制。正式發布需要擁有雙重身份驗證的授權維護者登入 NuGet.org。預約群組允許在單一批准前集中審核多個套件，但單個套件發布單獨處理，且無法保證同時提供。預約功能還支持與漏洞發布時機同步的未公開漏洞補丁上傳。預約套件沒有直接下載來源，即使對擁有者也無效，如果未發布則會過期。該功能現在對所有 NuGet.org 發布者都是可選的，現有工作流程不受影響。

**參考來源:** [NuGet.org新增套件上架核准機制，降低自動化憑證遭濫用風險 - iThome](<https://www.ithome.com.tw/news/180626>) 

---

📌 **jQuery 4.1.0 和 3.8.0 修復 ReDoS 漏洞；3.x 系列結束功能開發**

iThome 報導，jQuery 團隊發布了 jQuery 4.1.0 和 3.8.0，兩者都修復了 CSS 選擇器解析中的正規表達式拒絕服務漏洞，該漏洞可能導致瀏覽器在處理大量連續十六進位轉義字符後跟隨無效字符時卡住。更新後的字符匹配規則解決了該問題。版本 3.8.0 是 3.x 系列的最後一個計劃功能版本，未來僅接收關鍵安全性和錯誤修復，而新功能開發將集中於 4.x。4.1.0 通過標準化使用 querySelectorAll 改善元素查找，將重複元素移除複雜度從 O(N 的平方) 降低到 O(N)，將 responseURL 新增至 jqXHR 物件，改善自定義元素表單數據處理，並調整自定義 AJAX 傳輸回調。3.8.0 將 4.x 中移除的舊版 API 標記為已棄用，以協助 jQuery Migrate 相容性檢查。兩個版本皆可透過官方 CDN 和 NPM 取得，並提供 4.x 升級指南。

**參考來源:** [jQuery雙版本更新修正ReDoS問題，3.x停止新增功能 - iThome](<https://www.ithome.com.tw/news/180617>) 

---

📌 **Google 將 Gemini 對話保留期從 72 小時延長至兩個月**

iThome 報導，Google 已通知用戶一項 Gemini 政策變更，將 Gemini 對話記錄的保留期從 72 小時延長至 60 天，同時將對話歷史紀錄與 AI 模型訓練許可分離。用戶可以選擇退出生成式 AI 模型訓練，同時保留其 Gemini 對話歷史紀錄，相關變更將在未來數週內透過 Gemini 活動設定頁面分階段推廣至應用程式和網頁版。TechCrunch 和 The Register 等媒體指出，即使關閉歷史紀錄，未來的對話現在也會保留約兩個月，用於回應用戶、處理意見回饋，以及保護 Google、用戶和公眾，這可能涉及人工審核員。在變更前已關閉歷史紀錄的用戶將維持 72 小時保留期，但在變更生效後關閉該設定將會阻止免費層級的 Gemini 對話被保留。發布時台灣尚未收到更新，其 Gemini 活動頁面仍顯示 72 小時保留期。

**參考來源:** [Gemini對話保留期將由72小時延長為2個月 - iThome](<https://www.ithome.com.tw/news/180592>) 

---

📌 **Chrome 158 已發佈，修復 204 個安全性漏洞**

Google 已發佈 Chrome 158 穩定版更新，修復了 204 個安全性漏洞。此補丁包含 6 個嚴重（critical）和 62 個高風險（high-risk）漏洞，以及中度與低風險問題。修復最頻繁的漏洞類型為釋放後使用（use-after-free），共計 51 個案例。其他修復的問題包括授權不當、缺乏授權、資源未初始化以及資訊洩露。Windows、macOS 和 Linux 用戶應更新至版本 158.0.8127.36 或 158.0.8127.37，而 Android 用戶則應更新至 158.0.8127.42 以降低這些風險。

**參考來源:** [Chrome 158正式推出，修補204個資安漏洞 - iThome](<https://www.ithome.com.tw/news/180609>) 

---

📌 **Mozilla 發佈 Firefox 160.0.1 以緊急修復兩個高風險漏洞**

Mozilla 已發佈緊急更新 Firefox 160.0.1，以解決兩個高風險漏洞。CVE-2026-130020 會影響 Android 版本中的 Graphics: CanvasWebGL 組件，並可能因邊界條件處理不當導致權限提升。CVE-2026-130021 為位於音訊和視訊播放組件中的釋放後使用（UAF）漏洞。Mozilla 目前尚未確認這些漏洞是否正在被實際利用。

**參考來源:** [Mozilla發布Firefox 160.0.1，緊急修補兩個高風險漏洞 - iThome](<https://www.ithome.com.tw/news/180591>) 

---

📌 **Oracle 發佈 11 月例行更新，修復 640 個安全性漏洞**

Oracle 已發佈其 11 月關鍵補丁更新（CPU），修復了 21 個產品系列的 640 個安全性漏洞。此更新包含 57 個嚴重與 245 個高風險漏洞。在 Oracle Hyperion (107)、Oracle Fusion Middleware (53)、Oracle Supply Chain (36) 與 Oracle Communications (21) 中，皆發現了大量無需身分驗證即可透過網路利用的漏洞。

**參考來源:** [Oracle發布11月例行更新，修補640個資安漏洞 - iThome](<https://www.ithome.com.tw/news/180603>) 

---

📌 **大同電商網站遭自動化攻擊，疑似發生資料外洩**

大同子公司大同綜合資訊通信報告，其「e-同購」購物網站遭到自動化攻擊，導致疑似個人資料外洩。公司已啟動事件應變機制並關閉受影響的網站系統。雖然針對原因與資料外洩範圍的調查仍在進行中，但公司表示目前對其財務或業務營運並無重大影響。

**參考來源:** [大同購物網站e同購遭自動化攻擊入侵，疑似個資外洩 - iThome](<https://www.ithome.com.tw/news/180615>) 

---

📌 **永信藥品委外電商供應商發生資安事件，導致疑似資料外洩**

永信藥品報告其子公司線上購物網站發生疑似會員個人資料外洩事件。該事件與第三方電商平台服務供應商有關，而非永信藥品內部系統。初步調查顯示，影響範圍僅限於線上購物網站的特定會員資料；公司的核心營運、交易及財務系統仍未受損。

**參考來源:** [永信藥品委外電商服務商發生資安事件，部分會員個資疑似外洩 - iThome](<https://www.ithome.com.tw/news/180619>) 

---

📌 **英國 NCSC 敦促董事會要求執行主動威脅狩獵，以彌補 AI 加速攻擊下的偵測缺口**

英國國家網路安全中心 (NCSC) 已呼籲企業董事會要求資安團隊展現主動威脅狩獵能力，並警告現有的監控與告警機制可能無法捕捉利用 AI 以更高速度與規模進行運作的攻擊者。NCSC 社群業務負責人 Patrick B 強調，雖然入侵指標 (IoC) 偵測仍然有效，但此類跡象變化迅速，而攻擊者的戰術、技術與程序 (TTPs) 則較為穩定，且可進行主動狩獵。該指南強調，董事會無需理解技術細節，但應要求提供證據，說明哪些攻擊技術已進行過偵測測試、發現了哪些缺口、由誰負責彌補缺口，以及如何衡量進度。充分的可視性與日誌記錄是前提條件；若缺乏這些條件，即使是已知的攻擊者技術也可能無法被偵測。NCSC 指出，組織不一定需要專門的狩獵團隊或新產品，但必須具備調查攻擊者行為、識別偵測缺口並根據調查結果採取行動的能力。

**參考來源:** [面對AI加速攻擊，英國NCSC呼籲企業董事會應關切以主動威脅獵捕找出偵測缺口 - iThome](<https://www.ithome.com.tw/news/180613>) 

---

📌 **AI 加速研究在 90 小時內於 10 個嵌入式 TCP/IP 堆疊中發現 66 個新漏洞**

Forescout 的 Vedere Labs 使用 Anthropic Claude 模型搭配自定義分析工具，檢查了廣泛部署於工業控制、醫療、網路及 IoT 設備中的 10 個嵌入式 TCP/IP 協定堆疊，在約 90 小時內發現了 99 個漏洞，其中 66 個為先前未知。52% 的新漏洞被評為嚴重 (Critical) 或高 (High) 嚴重性，部分漏洞可能導致設備故障或拒絕服務；54 個漏洞可能仍會影響最新的軟體版本。研究團隊報告了 20 個開源與 34 個專有漏洞；截至發布時，已有 19 個開源與 5 個專有問題獲得修復。AI 輔助的靜態分析耗時約 10 小時，其餘 80 小時由研究人員進行動態驗證。估計模型成本介於 1,200 美元至 2,300 美元之間，不含工具開發與環境建置費用。由於這些堆疊是各供應商共用的組件，漏洞可能會透過軟體供應鏈傳播；建議營運商盤點軟體組件，根據可利用性、暴露程度與營運影響優先進行修復，並透過網路限制、分段與更換計畫來減輕無法修復設備帶來的風險。

**參考來源:** [AI加速嵌入式設備漏洞挖掘，研究人員90小時找出66項TCP/IP協定堆疊新漏洞 - iThome](<https://www.ithome.com.tw/news/180564>) 

---

📌 **Optimizely 供應鏈遭入侵，惡意 JavaScript 植入包括 BBC、GitLab、IKEA 與匯豐台灣在內的 178 家組織**

攻擊者利用 Optimizely Web Experimentation 服務中的漏洞，將惡意 JavaScript 植入客戶專案中，影響了包括 BBC、IKEA、GitLab 與匯豐台灣在內的 178 家組織。研究人員識別出 188 個遭入侵的 Optimizely 腳本片段；其酬載 (Payload) 可重寫加密貨幣錢包地址、蒐集包含信用卡詳細資訊與 Cookie 在內的表單數據，甚至能傳送 iOS 漏洞利用工具包。攻擊者控制的錢包收到了約 7,040 美元的加密貨幣。Optimizely 表示已修復該漏洞、移除惡意代碼，並強化了受影響帳戶的安全保護。

**參考來源:** [【資安日報】11月18日，Optimizely供應鏈攻擊波及BBC、GitLab、IKEA等178個組織網站，匯豐臺灣也名列其中 - iThome](<https://www.ithome.com.tw/news/180612>) 

---

## OPSWAT 可以怎麼幫上忙

- [MetaDefender Software Supply Chain](<https://www.opswat.com/solutions/software-supply-chain-security>) — 驗證軟體元件並運用 SBOM 與漏洞分析，符合降低公共儲存庫中被盜套件發布憑證所帶來之風險。

**參考來源:** [NuGet.org新增套件上架核准機制，降低自動化憑證遭濫用風險 - iThome](<https://www.ithome.com.tw/news/180626>)

<!-- ciso-revision:ciso-20261118-2-1795046846327 -->
