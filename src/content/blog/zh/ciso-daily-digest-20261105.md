---
title: "CISO 每日摘要：Chainalysis 遭遇資料外洩，客戶使用者資料受影響，部分產品暫停服務 (20261105)"
description: "Chainalysis 揭露影響客戶使用者資料並暫停部分產品之資料外洩；CISA 警示與 APT29 資料盜取活動相關的已修補 Apple 漏洞遭主動利用；研究人員發現 Zyxel GS1900 Patch 2 韌體仍容易受到未經驗證的根命令執行，需要針對十款交換器機型更新至 Patch 3 韌體。"
pubDate: 2026-11-05
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Chainalysis 遭遇資料外洩，客戶使用者資料受影響，部分產品暫停服務

iThome 報導，區塊鏈分析供應商 Chainalysis 遭遇資料外洩，客戶使用者資料受影響，部分產品服務因此暫停。

### 📌對 CISO 的影響

- **評估第三方與 SaaS 資料外洩風險 —** Chainalysis 事件發生後，安全領導者應盤點對區塊鏈分析及類似供應商的下游依賴關係，請求客戶影響通知，並準備為受影響的使用者資料重設憑證與檢視存取權。
- **優先處理 Apple 修補並驗證漏洞緩解措施 —** CISO 應確認所有 Apple 裝置，包括舊版 iOS、iPadOS、macOS、tvOS、watchOS 及 Safari，均已針對 CVE-2024-27834 與相關主動利用之 WebKit 漏洞進行更新，並關注 CISA KEV 期限以符合聯邦對齊要求。
- **更新 Zyxel 交換器並測試補償控制 —** 網路團隊應識別執行 Patch 2 或更早韌體的 GS1900 裝置，套用特定機型的 Patch 3 組建，限制管理介面的網路可及性，輪換預設憑證，並檢查交換器是否遭到入侵，因為廠商指引並未確認現有攻擊者存取權已被補救。

**參考來源:** [區塊鏈分析業者Chainalysis遭入侵波及客戶使用者資料，部分產品暫停服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtOHFfdVlvcGFzd243UW1EQmhmbktoWTdBS0tGNnRBTEhUVVRXSlJIR2ttTmhhYTY2R09wYjI4MDZEc0FoUjJyVmQ2d3lIZw?oc=5>)

---

## 本週活躍威脅

📌 **駭客利用已修補的 Apple 漏洞傳播資料盜取惡意軟體，CISA 警示**

CISA 將於 2024 年 5 月修補的中度嚴重性 Apple 不正當驗證漏洞 CVE-2024-27834，納入 KEV 目錄，並指出有報告顯示其遭主動利用，與中高可信度之 APT29 活動相關；攻擊者利用被入侵的合法網站、偽造網站，以及 Plerdy SEO Tracker 供應鏈攻擊，傳播惡意 JavaScript 以進行裝置檔案分析與部署資料盜取程式，並指示 FCEB 機構於 2026 年 11 月 18 日前修補。

**參考來源:** [Hackers Exploit Patched Apple Flaw to Deliver Info-Stealing Malware, CISA Says](<https://thehackernews.com/2026/11/hackers-exploit-patched-apple-flaw-to.html>) 

---

📌 **Zyxel GS1900 修補程式無法阻擋允許根命令執行之零日漏洞利用**

Binarly 發現，執行較早 CVE-2026-7273 Patch 2 韌體的 Zyxel GS1900 交換器，仍透過網頁管理介面容易受到未經驗證的根命令執行漏洞利用，Zyxel 已針對十款機型發布 2.90 Patch 3 韌體，以修復個別追蹤的 CVE-2026-107441；GreyNoise 此前將攻擊與來自 996 台交換器的資料收集相關聯，其中 564 台使用出廠預設憑證，但兩份報告均未確認受攻擊的交換器已打補丁，也未確認 CVE-2026-107441 本身在野外遭到利用。

**參考來源:** [Zyxel GS1900 Patch Fails to Block Zero-Day Exploit Allowing Root Command Execution](<https://thehackernews.com/2026/11/zyxel-gs1900-patch-fails-to-block-zero.html>) 

---

📌 **Apple 將開始掃描公開共享的 iCloud 照片與檔案，檢查有害內容**

Apple 計畫從 iOS 27.3、iPadOS 27.3、macOS 27.3 與 visionOS 27.3 開始檢查公開共享的 iCloud 內容，適用於以「任何人持有連結者」共享的連結。持有連結的任何人皆可存取這些共享項目，包括 Apple，而 Advanced Data Protection 的端對端加密不適用。Apple 可能會移除或刪除有害內容，並採取帳戶行動，包括封鎖帳戶或移請執法單位。目前尚不清楚推動此變更的原因、何謂有害內容、先前的連結是否受影響，以及更新何時於今年 12 月底推出。

**參考來源:** [Apple to Start Scanning Publicly Shared iCloud Photos and Files for Harmful Content](<https://thehackernews.com/2026/11/apple-to-start-scanning-publicly-shared.html>) 

---

📌 **多個 AI 開發平台遭遇安全事件，盜取金鑰被用於大量呼叫 AI 模型**

iThome 報導多個 AI 開發平台接連發生安全事件，遭盜取的金鑰被用於對 AI 模型進行高頻率呼叫。

**參考來源:** [多家AI開發平臺接連發生資安事件，遭竊金鑰被用來大量呼叫AI模型 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mbXJkZjRkWXFvcmJUblFNdHloY2pVZk50ZmVnWENkcDdYNjFWYnZVVW9zYUZfZnhPd213NGtGS1NQUmx6RmR3WDBvN0ozQQ?oc=5>) 

---

📌 **OpenAI AI 管線於 30 小時運行中生成 948 個 Linux 權限提升漏洞利用**

OpenAI 詳細說明一個使用即將推出之網路安全導向 AI 模型的代理管線，於 2026 年 10 月中旬動態重現了 1,724 個 Linux 核心漏洞，並在 30 小時內為常用 Linux 發行版產出 948 個可運作的本地權限提升漏洞利用，以及 291 個資訊洩漏概念驗證。此次運行花費 1,213,430 美元 API 額度，或每個本地權限提升漏洞利用 1,279 美元，OpenAI 表示至少發現並使用了 10 種新穎漏洞利用技術。人類研究人員在向維護者回報發現前會進行審查，且 OpenAI 警告，對未補丁作業系統低權限帳戶的存取應被視為等同於富裕威脅行動者的根目錄存取。

**參考來源:** [OpenAI AI Pipeline Generates 948 Linux Root Escalation Exploits in 30-Hour Run](<https://thehackernews.com/2026/11/openai-ai-pipeline-generates-948-linux.html>) 

---

📌 **中國駭客利用 Zyxel GS1900 交換器零日漏洞並竊取敏感資料**

iThome 報導，中國駭客利用 Zyxel GS1900 系列交換器的零日漏洞並竊取敏感資料。此報導為僅有標題。

**參考來源:** [中國駭客利用Zyxel GS1900系列交換器零時差漏洞並竊得敏感資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9oc205cUVHQ1dKVFJCeGRGSWFQRzIxZ3otbHp4Sk04NnF6QjFKRkttOU9SeG5hRF9Hc1d1QlBTT0hGZWViTHZjUTNMSnc3UQ?oc=5>) 

---

📌 **駭客籌備 Binance 攻擊數月並進行假面試**

Xakep 報導，駭客籌備 Binance 攻擊數月，並進行假面試作為行動的一部分。此報導為僅有標題。

**參考來源:** [Хакеры несколько месяцев готовились к взлому Binance и проводили фальшивые собеседования](<https://xakep.ru/2026/11/05/binance-contagious-interview>) 

---

📌 **Debian 與 Ubuntu APT 缺陷允許中間人攻擊者替換已驗證套件並以 root 身分執行程式碼**

APT 的缺陷允許中間人攻擊者在 APT 重新下載失敗時，將已驗證套件替換為惡意套件，並以 root 身分執行程式碼。Debian、Ubuntu 和 APT 開發者於 2026 年 11 月 4 日發布通告，並指派 CVE-2026-109518。Debian 已發布修正版本，Ubuntu 亦針對 22.04 LTS、24.04 LTS、26.04 LTS 和 26.10 發布了新的 APT 組建。預設情況下，較舊的 Debian 11 和 Ubuntu 20.04 系統並未受影響，除非用戶啟用了 Acquire::Retries。相關通告均未描述確認的利用情況，亦未提供無法更新系統的替代方案。

**參考來源:** [Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root](<https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html>) 

---

📌 **Mao Bao 電子商務網站遭不明駭客攻擊，已通報主管機關並通知受影響客戶**

iThome 報導，Mao Bao 的電子商務網站遭不明駭客攻擊，事件已向主管機關通報，並已通知受影響客戶。

**參考來源:** [毛寶電商網站遭不明人士攻擊，已通報主管機關並通知受影響顧客 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBrUEg3Q2hzUDhTc3BCZ3dGYXpYYXBsQ3ZGYjBrY25rQmdET2ZLU3lkUUNFR080UVFDVWFuQklzU1lrWndjNmluZU9vNnZGZw?oc=5>) 

---

📌 **俄羅斯駭客組織 APT29 發動大規模水坑攻擊，竊取 iOS 與 Android 裝置憑證與數據**

iThome 報導，俄羅斯駭客組織 APT29 針對 iOS 與 Android 裝置發動大規模水坑攻擊，竊取憑證與數據。

**參考來源:** [俄羅斯駭客APT29發動大規模水坑式攻擊，竊取iOS與Android裝置帳密及資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBQR0FmVzdTbFZBZS04TzhDcGtUQnpmVzlmTHdNQTBEUEIwTHBGZm96ajVNdk5wWnZLRTBpLTlFRXBYWkNIWEJpRUFnU19wUQ?oc=5>) 

---

📌 **CERT-In 指出 AI 驅動攻擊，遭植入後門的 ARTEX 讓 62 個控制台面臨 root 權限風險**

CERT-In 披露，一個以 Crafty Falcon 追蹤的 AI 輔助威脅行為者，正利用公開可取得的 AI 驅動進攻工具，包括 ARTEX、PentAGI、Cairn 與 CyberStrikeAI，鎖定印度銀行、金融服務與保險領域的組織。該機構描述該活動為正在進行中，攻擊也擊中加密貨幣交易所與數位資產服務提供者，導致金鑰與資金被竊。初始存取途徑包括被竊取的硬編碼 API 權杖、原始碼儲存庫的供應鏈妥協、設定檔中的純文字憑證，以及缺乏多因素驗證的應用程式。入侵後動作包括刪除日誌、竄改端點安全工具、鎖定雲端基礎設施與非生產環境、反向工程程式碼庫、執行未經授權的 API 呼叫、執行微值測試交易，以及利用檔案上傳與反序列化鏈部署 Web Shell。另一部分，從 Docker Hub 拉取的遭植入後門 ARTEX Docker 映像檔，透過登入處理常式中隱藏的 verifyCaptcha() 函式，授予未經驗證的 root 殼層。截至 2026 年 11 月 2 日至 4 日，多達 62 個 ARTEX 控制台提供了遭植入後門的版本，其中 26 個位於美國、17 個位於香港，七個位於中國；至 2026 年 11 月 4 日，共發現 1,645 台主機提供 ARTEX 控制台。

**參考來源:** [CERT-In Flags AI-Driven Attacks as Backdoored ARTEX Exposes 62 Consoles to Root Access](<https://thehackernews.com/2026/11/backdoored-docker-image-for-artex-ai.html>) 

---

📌 **Google 與業界盟友干擾連結至設備製造商的 130 萬設備 XCPE 惡意軟體網路**

Google 威脅情報小組與包括 Lumen、HUMAN Security 與日本國家警察廳在內的夥伴，採取法律與技術行動以干擾 XCPE 惡意軟體網路，該行動涉及超過 130 萬部遭入侵的 Android 機上盒。Google 高度確信將該活動歸因於設備製造商 Videostrong Technology Co.，報告指該公司自至少 2024 年起，刻意將 XCPE 後門預先安裝於多款機型。後門允許 Videostrong 透過將硬體出租給犯罪夥伴來變現設備存取權，犯罪夥伴部署次要模組進行廣告詐欺、將終端裝置納入住宅代理網路，以及傳播額外惡意軟體，直至取缔行動拆除了支援的控制網域與指揮與控制基礎設施。

**參考來源:** [Google, Partners Disrupts 1.3 Million-Device-Strong XCPE Botnet](<https://www.darkreading.com/endpoint-security/google-13-million-device-strong-xcpe-botnet>) 

---

📌 **歐洲製冷系統與法國血庫遭網路攻擊，促 ENISA 發出警告**

根據 iThome 報告，歐洲多處冷藏與製冷設施以及法國血庫遭到網路攻擊，促使歐盟網路安全局（ENISA）敦促組織加強防禦。操作工業冷卻系統、醫療儲存與關鍵健康基礎設施的組織應檢閱邊界控管，驗證作業技術與企業網路的隔離，並監控未經授權的存取嘗試。

**參考來源:** [歐洲冷凍冷藏系統接連遭駭，法國血庫也遭攻擊，歐盟網路安全局呼籲加強防護 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1abjY1YlppVWlxNEVoLXBadjBuRzJIa2J3d0I4QlFybEJ0OGFndi1ISGJnVkV0Vjd4WnQ2RnRrSmZHc1lNU2ZYVTZmbUprQQ?oc=5>) 

---

📌 **棉花田外包電子商務平台阻擋異常存取事件**

台灣有機零售商棉花田遭遇涉及其外包電子商務平台的網路安全事件，iThome 報告指出。雖然異常資料存取嘗試已成功阻擋，但事件完整範圍與影響仍在調查中。依賴第三方數位商務平台的組織應確保供應商可視性，審計外部存取記錄，並強制執行嚴格的 API 與身份保護，以降低供應鏈風險。

**參考來源:** [棉花田委外購物平臺發生資安事件，已阻擋異常資料存取行為，影響範圍仍待調查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4zVktadTJJdnJVNkdrRjl0WGtrQ3ZLVXhlNm5xR2pmVmZQcHFHaDEyR052T1ZoT1RGbTBxZkpWT2xmZjlORFFEWmJRdHo3UQ?oc=5>) 

---

📌 **外包廠商系統出現異常數據存取，該系統支援王品「萬鮮」購物網站**

iThome報導，支援王品「萬鮮」購物網站的外包廠商系統發生異常數據存取。報導並未確認數據是否被竊取、曝光，或可能受影響的客戶數量。

**參考來源:** [王品旗下萬鮮購物網站服務委外廠商系統出現異常資料存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1KNDQ1SHkxYnFiRXBGYk1vRGdnVEN0b1U3OGtmT3BVRWFuSWtVS1AxV3dqOExYbTBnX2hkNkdvRGh1Vlp6ZzdyN1hDc3dIdw?oc=5>) 

---

📌 **日本外務省網站遭駭，最多3,600筆個人紀錄可能外洩，外務省表示非敏感外交通信未受影響**

iThome報導，日本外務省網站遭駭，最多3,600筆個人紀錄可能外洩。外務省強調，非敏感外交通信未受影響。

**參考來源:** [日本外務省網站被駭3,600筆個資恐外洩，但強調非機要外交通訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5rYjZFWlUwUndiSmczaEtFREN5Mjh4NGQ4dS12VFZVNGZOc2V6TUpsWGZCOUhheUVnbnhlT2VuaFp6WGpUVEUyRFlLenh6UQ?oc=5>) 

---

📌 **法國銀行 Crédit Mutuel Arkéa 遭受網路攻擊，攻擊者據稱轉移超過1.18億歐元**

iThome報導，法國銀行 Crédit Mutuel Arkéa 遭受網路攻擊，攻擊者據稱轉移超過1.18億歐元。報導並未確認資金是否被追回，或哪些系統被入侵。

**參考來源:** [法國銀行Crédit Mutuel Arkéa遭網攻，傳逾1.18億歐元遭攻擊者轉走 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE41aG1faWw4ZEtiYkJORS1keHlfWldtcllvUUI5RVQyTUVYSXNGTVR6NlMtZHpxVWJ3eFZCRGh6RW4yZFoxcHd4YXAtOUthZw?oc=5>) 

---

📌 **熱門遊戲《勝利女神：Nikke》遭受供應鏈攻擊，玩家電腦可能中資訊竊取惡意軟體**

iThome 報導，熱門遊戲《勝利女神：Nikke》遭受供應鏈攻擊，玩家電腦可能被植入資訊竊取惡意軟體。

**參考來源:** [熱門遊戲《勝利女神：妮姬》遭遇供應鏈攻擊，玩家電腦恐被植入竊資軟體 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9jQlNTZHh4OExIc0xMSVhWaC02X2tfX2I2b3dfNUQ5LWtVSWhTNHBiRDJNOF85d1lHeG1TWGVhblQzRWp6QmJhdnFIc1FFZw?oc=5>) 

---

📌 **Debian 與 Ubuntu 修復高風險 APT 套件漏洞，中間人可替換套件取得 root 權限**

iThome 報導，Debian 與 Ubuntu 修復了一個高風險 APT 套件漏洞，該漏洞可能允許中間人替換套件並取得 root 權限。

**參考來源:** [Debian、Ubuntu修補高風險APT套件漏洞，中間人可替換套件取得root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA4QmFVVDNxaDQyVC1Bb0tfVGhmUXZuZjNIYkpnMEd0cDlqR1M1TWVRdE9GREpCbTdvTEVEMXBvTS13TmRUTDk4OHRiRlN4dw?oc=5>) 

---

📌 **2026 年 10 月威脅美國企業的 5 項活躍網路威脅**

The Hacker News 報導，2026 年 10 月有 5 項活躍網路威脅針對美國企業：針對 Microsoft 365 企業帳戶的 SkyW4lker 裝置代碼網路釣魚、竊取憑證與瀏覽器工作階段 Cookie 的假 AI 活動、利用 Adobe Shared Links 針對政府、銀行、醫療與 IT 組織的 GeorgeGinx 裝置代碼網路釣魚、針對美國與法國政府組織、停用 Microsoft Defender 以維持遠端存取的 WKLP Python 資訊竊取軟體與 RAT，以及透過帶有惡意 PDF 附件並重新導向至假 DocuSign 頁面的網路釣魚郵件進行 Microsoft 365 權杖竊取的 Mir0Auth。

**參考來源:** [5 Active Cyber Threats That Put US Enterprises at Risk in October 2026](<https://thehackernews.com/2026/11/5-active-cyber-threats-that-put-us.html>) 

---

📌 **理想汽車車主再度面臨帳戶被盜與勒索**

俄羅斯媒體 Xakep 報導，理想汽車車主再次面臨帳戶遭入侵與勒索嘗試。

**參考來源:** [Владельцы автомобилей Lixiang снова столкнулись со взломом учетных записей и вымогательством](<https://xakep.ru/2026/11/05/lixiang-blackmail>) 

---

📌 **蘋果產品已知漏洞遭主動利用 - iThome**

iThome 報導，影響蘋果產品的已知漏洞正遭主動利用。

**參考來源:** [蘋果旗下產品已知漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBSbmEwQkJUQlgxNG4xNkQtTGppTnlxeGtzQ2RUbG4yck1NRlJsQVkyLWxlZHBoYzllWEdUMXRBaGY4YkE1RVlGdDVpYVdjdw?oc=5>) 

---

📌 **安全日報 11 月 5 日：法國國家血庫機構製冷設備遭受網路攻擊，3 個設施溫控遭變更 - iThome**

iThome 報導，法國國家血庫機構的製冷設備於 11 月 5 日遭受網路攻擊，三個設施的溫度控制遭變更。

**參考來源:** [【資安日報】11月5日，法國國家血液機構冷藏設備遭網路攻擊，3處設施溫度控制遭竄改 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE44aEwwejBzaGZ1SFUwWEN0dHhrYVF1U2x1cVdnNF9pdUpES1lFd2U3dVRlbWtzQmJ2c3owRVM3cDZzSUs5VjVxZWhNSWU0Zw?oc=5>) 

---

📌 **SonicWall不會修補可能暴露檔案並變更資料庫記錄的生命週期結束GMS漏洞**

SonicWall 揭露 Global Management System 版本 9.5.2 及更早版本中的兩個漏洞，並將不會修補，因為該產品已達生命週期結束。CVE-2026-109593，CVSS 9.1，是一個未經驗證的檔案讀取漏洞，可能讓擁有網路存取權的攻擊者存取內部 GMS 檔案。CVE-2026-109594，CVSS 6.8，是一個經驗證後的 SQL 插入漏洞，可能允許經驗證的攻擊者在特定條件下存取或修改資料庫資訊。SonicWall 建議受影響組織升級至 SonicWall Network Security Manager。

**參考來源:** [SonicWall Won't Patch EoL GMS Flaws That Could Expose Files, Alter Database Records](<https://thehackernews.com/2026/11/sonicwall-wont-patch-eol-gms-flaws-that.html>) 

---

📌 **Cisco 修補 UCS Central 遠端程式碼執行漏洞**

iThome 报道，Cisco 已修補 UCS Central 中的遠端程式碼執行漏洞。

**參考來源:** [Cisco修補UCS Central遠端程式碼執行漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9mVFdxek1nODVDYVhoTi1BX2NaMWgxdnlobFVvdFVjSi1RTVF6ZWY3aFM0VjlQMEZaTXV0YnFUZlRQN2hJN3BHbDNJVlRWUQ?oc=5>) 

---

📌 **Zyxel GS1900 系列交換器越界寫入漏洞允許未經驗證的攻擊者執行作業系統命令**

iThome reports that Zyxel GS1900 series switches contain an out-of-bounds write vulnerability that may allow unauthenticated attackers to execute operating system commands.

**參考來源:** [Zyxel GS1900系列交換器存在越界寫入漏洞，未經驗證攻擊者可執行作業系統命令 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8zeU1FMFJUUUU5T3o5RXN4TEd1UzFuaWpCVGMxVGZTMVZUVEY5QW5odEZubm9Ra2ttam9iWE1rRXNVeXZsZVNpdzF6MUpVdw?oc=5>) 

---

📌 **信義 SinoPack 確認異常轉帳為駭客攻擊，利用供應商安全設定漏洞**

iThome 報導，信義 SinoPack 證實異常轉帳係駭客攻擊所致，駭客利用供應商系統的安全設定漏洞。報導未披露確認的受害人數、受影響資金，或入侵是否已擴及供應商以外。

**參考來源:** [永豐銀行異常轉帳確認為駭客攻擊，供應商安全設定漏洞遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBXZ1lIUTFya21wUEFHVS1CUmRySnFmSzJPTUVFZFZ4WGhVNENKZEtaNWxDYVc0X3lGejZFTnkwbnF6RWRpUEpkVUVCSkh2dw?oc=5>) 

---

📌 **AI 駭動攻擊與針對 AI 系統之攻擊激增，超過半數近 2,000 位全球主管無法因應**

iThome 報導，AI 駭動攻擊與針對 AI 系統之攻擊正在增加，超過半數受訪的近 2,000 位全球主管表示無法因應。報導未提供具體事件、受影響組織或技術細節。

**參考來源:** [AI驅動攻擊與鎖定AI系統的攻擊來勢洶洶，近兩千位全球企業高層有超過一半坦承無法招架 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84RU01UEdTbjBrVjhPT3RCUW5SclBkdmhKSUlnaXZzbkQyZURUYzN0VTJjT2c0dk1fNDhrNnZRNm4yVTFibFQtd3BIWGlkQQ?oc=5>) 

---

📌 **普肯台灣葡萄王線上商城外包廠商資料庫遭異常存取，會員訂單與個人資料可能外洩**

iThome 報導，普肯台灣葡萄王線上商城外包廠商的資料庫遭到異常存取，會員訂單與個人資訊可能外洩。報導未確認受影響記錄數量、攻擊手法，或資料是否已遭竊取。

**參考來源:** [葡萄王線上商城委外廠商資料庫遭異常存取，會員訂單及個資疑似外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ldDZ3QmpUQW1vNkZnZ09hMzFxOS1BV1JaVm1EVG5zR3JkSzBycGlSTUxkZndMRU9yLXJZVmFTUmRqNFl3RnBJZ0xHTHRZZw?oc=5>) 

---

📌 **研究人員揭露隱藏於 OpenAI Codex 逃獄工具組中的提示廣告軟體**

Check Point Research 披露了一個名為 Haiou 的逃獄捆綁包，該包修改 OpenAI Codex 設定檔，以將針對第三方閘道 zz.aiapi2025\[.\]top 的持續性廣告插入代理回應中。觸發詞包括問候語，如「Seagull」、「hi」、「hello」、「hey」、「yo」以及「are you there?」。該捆綁包還安裝了滲透測試、破解與反編譯技能，並已捆綁於 Codex-X 視覺化工具中。於報導發表時，GitHub 儲存庫 haiou-codex 擁有 403 個星號與 77 個分支。Check Point 警告，第三方 AI 技能與設定可能將不良行為引入企業 AI 代理，並成為供應鏈信任鏈的一部分。

**參考來源:** [Researchers Uncover Prompt Adware Hidden in OpenAI Codex Jailbreak Toolkit](<https://thehackernews.com/2026/11/researchers-uncover-prompt-adware.html>) 

---

📌 **法國國家血庫冷藏設備遭網路攻擊，三處設施溫度控制遭竄改**

iThome 報導，法國國家血庫的冷藏設備遭受網路攻擊，三處設施的溫度控制遭竄改。標題中未提供進一步技術細節或確認的患者影響。

**參考來源:** [法國國家血液機構冷藏設備遭網路攻擊，3處設施溫度控制遭竄改 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE93OWVWakhoZ0tXRXNmbnhCRFpEbTAwaTFjMXhXQ1pHX1hjTWc5bWpiVi13ZG1GV2pZYjl4VkdxMHRmY2U0Y01HNlpRYXdnZw?oc=5>) 

---

📌 **嚴重 Rails 漏洞威脅易受攻擊伺服器**

Dark Reading 報導，一個影響易受攻擊伺服器的嚴重 Ruby on Rails 漏洞。標題中未包含具體漏洞細節、版本或確認的利用情況。

**參考來源:** [Critical Rails Bug Threatens to Derail Vulnerable Servers](<https://www.darkreading.com/application-security/critical-rails-bug-derail-vulnerable-servers>) 

---

📌 **iThome 報導 Wan-Hsien**

iThome 已刊登關於 Wan-Hsien 的報導。

**參考來源:** [萬鮮 - iThome](<https://news.google.com/rss/articles/CBMiXkFVX3lxTE03a1VhWW13cjlDS2xRaW5EaUd4YmdkN3QzSGlOUzg3clRIczE5V0RSWDVtdHIwdkx6YklkbTVjUVZ4c1RRekFXYlN5ZldBcU1YdmlvUXR4d0NsZnc3NXc?oc=5>) 

---

📌 **開發者開始接受 Flipper One 預購**

Xakep 報導，開發者已開始接受 Flipper One 的預購。

**參考來源:** [Разработчики открыли предварительные заказы на Flipper One](<https://xakep.ru/2026/11/05/flipper-one-coupons>) 

---

📌 **iThome 報導 Shun-Li Smart**

iThome 已刊登關於 Shun-Li Smart 的報導。

**參考來源:** [順立智慧 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE9ESm16YVFVVjBhWFZBMFdvVzI1Z2lEdkFRZmhfR3NWM0dWSGJ6T09XNTVpb0lMQnEzMWVmS21vck50dGNOalBERnhCOGpNVmRka3FBQkQxc2JZaU4yR0twV0ZKZ3lXTVQ3Q2txWG9Jc2V1cFNVUGc?oc=5>) 

---

📌 **法國國家血液中心 EFS**

iThome 報導法國國家血液中心（EFS），但 RSS 摘要僅提供標題，無其他細節。

**參考來源:** [法國國家血液機構（EFS） - iThome](<https://news.google.com/rss/articles/CBMiwgFBVV95cUxPbVpVcGNyUTlOUU5jMmlXVEQ5b0ZtZk9Yc2pLcXVMU0VoXzdoQlJxSjBfaENwX3cyQUZXSE9MMENJbk1DYVMtekxHTHdHS3hhR0ZHRldId19wRHBXaE5OUFBkaDNxNWhhU0Juc3FqVFNGdmo2QkZXUUpkWVJXRXRhc1lucVRNZ3RvMk5keG5uMTVBUm1WUTltajZ0bXFUTFpLMkYzWktsQV8zTVRWNkhxVzljMXZFTHhzV0hjWllTeC0zQQ?oc=5>) 

---

📌 **日本外務省**

iThome 報導日本外務省，但 RSS 摘要僅提供標題，無其他細節。

**參考來源:** [日本外務省 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxPdjhnWi10ai15Y1BUcGFPUVFZQjlfVGZCNEEzUmxtV21zaTNQdmQzMGJweVh2ZjNiRkcxQm1oRGdKckRqblRkTDgydm44ZE55cVY5MmtUaFQ3Tm9YcHhBVlZHVVgzVU1CMnVrc2NiUWVjVUg5eWNSZjIxWGx1Yk1STjR3?oc=5>) 

---

📌 **想在白宮租用網路地址嗎？**

KrebsOnSecurity 報導，一個分配給白宮的網路地址區塊可供出租，凸顯與敏感政府地點相關的 IP 地址空間可能被出租並濫用。

**參考來源:** [Want to Rent an Internet Address at the White House?](<https://krebsonsecurity.com/2026/11/want-to-rent-an-internet-address-at-the-white-house>) 

---

📌 **Coolworld - iThome**

iThome 頭條報導 Coolworld，標題條來源無其他可用細節。

**參考來源:** [Coolworld - iThome](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE1aR3hud0RucnNuc2hDQ2FFdml1anhnRmhCa0Vub0d5cHI3UkZBTXJOSWdQT01LeFdWNUd1ejA0R0xKMU9TdGpBQ05ZeW0wWUY1THc?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261105-1-1793902892249 -->
