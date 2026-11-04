---
title: "CISO 每日摘要：Binance 透露假面試與 AI 工具濫用導致 64.3 億美元被盜 (20261104)"
description: "三起重大安全事件凸顯演進中的威脅：透過多階段社交工程與 AI 工具濫用導致的 64.3 億美元加密貨幣盜竊、與 AI 攻擊行動相關的區塊鏈基礎設施入侵，以及透過圖片上傳允許伺服器檔案操作的 Rails 關鍵漏洞。這些事件展示了複雜社交工程、AI 啟用的攻擊自動化以及針對開發環境與關鍵基礎設施的供應鏈漏洞之交集。"
pubDate: 2026-11-04
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Binance 透露假面試與 AI 工具濫用導致 64.3 億美元被盜

Binance 披露其加密貨幣交易所遭受 64.3 億美元被盜，事件源於 2026 年 6 月至 10 月期間的複雜多階段行動。攻擊始於供應鏈入侵：一名 Wallet DevOps 工程師在搜尋 AI 工具時下載了木馬化的 Homebrew 安裝程式。這次初始感染洩露了該工程師的職位與同事資訊，使威脅行為者能在 9 月進入第二階段，在合法的求職平台上冒充專案總監，與另一名工程師進行假視訊面試，最終誘使其在技術作業期間下載惡意程式碼存放庫。

未被發現的惡意軟體使用高階混淆技術，以遭毒化的版本替代合法開發工具組件，以建立命令與控制通訊並移除法醫痕跡。10 月 20 日，攻擊者利用受損工程師的電腦並濫用內部 AI 工具，控制更多錢包基礎設施工程師。10 月 29 日 17:15–19:56 間，對手使用竊取的容器部署憑證部署惡意容器並觸發腳本，利用未經授權存取內部錢包簽章服務，發起超出正常提款流程的交易。

Binance 已在新環境中重建受影響的錢包系統，重建內部 AI 工具與存取控制，更換裝置，撤銷憑證，並加強基於 AI 的行為異常偵測與錢包服務風險控制。Chainalysis 認為類似與朝鮮有關的假面試方案造成超過 1430 萬美元損失，跨越 18 個月，並指出這些較小的入侵讓行為者在創下史上最大盜竊記錄前改進方法。攻擊者亦使用 EtherHiding 變體（如 NullReceiver）及跨 TRON、Aptos 與 BSC 的多區塊鏈 C2 冗餘，以維持韌性命令通道。

### 📌對 CISO 的影響

- **強化開發環境與供應鏈防禦 —** 對軟體安裝來源實施嚴格控管，禁止未經授權的套件管理員，並對開發工具部署應用程式白名單。監控針對工程團隊（特別是擁有特權基礎設施存取權的團隊）的木馬化安裝程式與受感染開放原始碼套件。
- **偵測與干擾多階段社交工程行動 —** 為異常驗證模式、跨系統憑證使用與 AI 工具濫用部署行為異常偵測。針對技術職位實施嚴格的面試驗證協議，並監控針對擁有基礎設施存取權的工程師的招募主題網路釣魚。
- **保障 AI 工具與內部自動化存取 —** 對內部 AI 工具實施最小權限存取，對 AI 輔助作業實施工作階段監控與異常偵測，並將 AI 工具存取與關鍵基礎設施憑證隔開。定期審查 AI 工具權限，並在隔離環境中重建受損工具。

**參考來源:** [Binance Reveals How Fake Job Interviews and AI Tool Abuse Led to $6.43 Billion Theft](<https://thehackernews.com/2026/11/binance-reveals-how-fake-job-interviews.html>)

---

## 本週活躍威脅

📌 **Chainstack 通報生產系統入侵，洩露客戶資料與密碼雜湊**

區塊鏈基礎設施提供商 Chainstack 披露一起入侵事件：外部攻擊者在 2026 年 10 月 26 日至 31 日期間，透過第三方組件存取開發與生產環境。入侵洩露客戶帳戶資訊，包括組織名稱、成員電子郵件、密碼雜湊，以及可能的節點憑證。Chainstack 建議客戶輪換節點憑證、重新生成 API 金鑰、更新重複使用的密碼，並警惕網路釣魚。該攻擊被認為與與中國相關的 ARTEX 行動存在重疊，該行動也針對 WorkOS、Chainalysis 以及荷蘭漏洞揭露研究所，顯示 AI 代理自動化針對多家高價值企業的量身定制攻擊策略趨勢日益嚴重。

**參考來源:** [Chainstack Reports Production Systems Breach Exposing Customer Data and Password Hashes](<https://thehackernews.com/2026/11/chainstack-reports-production-systems.html>) 

---

📌 **Rails 關鍵漏洞允許攻擊者透過精心製作的 ImageMagick 上傳寫入伺服器檔案**

一個 Ruby on Rails 關鍵漏洞（GHSA-f3w6-w445-fwh9，CVSS 9.8）允許未經驗證的攻擊者，透過精心製作的 ImageMagick 上傳在伺服器上寫入任意檔案，前提是 Active Storage 使用 Disk 服務。Active Storage 的 ImageMagick 分析器存在缺陷，可透過處理上傳 SVG 檔案時的 MSL 編碼器腳本進行利用，可能洩露 secret\_key\_base 與憑證，進而導致遠端程式碼執行或橫向移動。受影響版本包括所有使用 ImageMagick 且採用預設 variant\_processor 設定的 Rails 8.1 低於 8.1.4.1 以及 Rails 8.0 低於 8.0.5.2。Rails 已發布修補，透過 ImageMagick 安全政策封鎖 MSL、Ghostscript 編碼器與危險委派程式，並修復第二個缺陷（GHSA-v924-7rp8-4mxh，CVSS 8.8），該缺陷與透過檔案副檔名選擇 FFmpeg 解碼器有關。

**參考來源:** [Critical Rails Flaw Lets Attackers Write Server Files via Crafted ImageMagick Uploads](<https://thehackernews.com/2026/11/critical-rails-flaw-lets-attackers.html>) 

---

📌 **Xen Hypervisor Flaws Let One Malicious VM Read and Write Any Other VM's Memory**

Xen hypervisor 有兩個缺陷，可讓惡意客體 VM 讀取並寫入同一主機上其他 VM（包括 dom0）的記憶體。補修程式已提供，但目前沒有已知緩解措施。所有 4.6 及以上的 Xen 版本皆受影響，4.5 及以下版本不受影響。這兩個缺陷記錄為 CVE-2026-102703 和 CVE-2026-102704，隸屬於 Xen 建議 XSA-523。

**參考來源:** [Xen Hypervisor Flaws Let One Malicious VM Read and Write Any Other VM's Memory](<https://thehackernews.com/2026/11/xen-hypervisor-flaws-let-one-malicious.html>) 

---

📌 **APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits**

與 APT29 有關的攻擊者於 2026 年 8 月 27 日至 9 月 3 日期間，透過被入侵網站、類似域名，以及 Plerdy SEO Tracker 的供應鏈入侵，針對 iOS 與 Android 用戶發動 Poisoned Source 水坑攻擊行動。注入的 JavaScript 會分析設備，並傳送平台特定的 N-day 漏洞利用鏈，導致能竊取瀏覽器 Cookie、Wi-Fi 密碼或完整行動裝置資料的惡意負載。

**參考來源:** [APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits](<https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html>) 

---

📌 **Google Warns LLMjacking Attacks Are Costing Some Enterprises Up to $1 Million in Cloud Charges**

Google 警告，攻擊者正透過被竊取的 API 金鑰、暴露的雲端身分識別權杖、設定錯誤的服務帳戶，以及 LLM 路由軟體（如 LiteLLM 中的 CVE-2026-40217）漏洞來劫持企業 LLM 存取權。詐騙性費用單日已超過 100,000 美元，部分組織累積費用在存取權被撤銷前已達 100 萬美元。

**參考來源:** [Google Warns LLMjacking Attacks Are Costing Some Enterprises Up to $1 Million in Cloud Charges](<https://thehackernews.com/2026/11/google-warns-llmjacking-attacks-are.html>) 

---

📌 **mSecure 警告用戶變更密碼、重設 2FA 與 Passkeys，因發現可疑活動**

mSeven Software 已警告現任與前任 mSecure 客戶變更密碼、重設雙重身份驗證，並移除 Passkeys，因偵測到與其密碼管理器應用程式相關的可疑活動。公司於 2026 年 11 月 3 日開始調查，並委請外部網路安全專家，但未披露發生了什麼事，是否有已儲存的金庫資料曝光，涉及哪些系統，有多少人收到警告，或是否應繼續使用該應用程式。mSecure 說明，金庫資料在裝置上加密後，再透過 mSecure Cloud、Dropbox、iCloud 或 Wi-Fi 同步，但開發人員理論上可以根據 2025 年 12 月德國 BSI 研究，存取 Android 版 mSecure 6.1.5 上的資料；該電子郵件並未確認金庫資料或保護金庫的金鑰是否遭到存取。

**參考來源:** [mSecure Warns Users to Change Passwords, Reset 2FA and Passkeys After Suspicious Activity](<https://thehackernews.com/2026/11/msecure-warns-users-to-change-passwords.html>) 

---

📌 **俄羅斯警方逮捕 3 名涉嫌 VasyGrek 黑客，拆解犯罪基礎設施**

俄羅斯當局逮捕了三名涉財務動機的 VasyGrek 威脅組織（又稱 Fluffy Wolf）涉嫌成員，並拆解其犯罪基礎設施。內政部表示，這些嫌疑人被指控挪用組織資金，以及創建、散布和使用惡意軟體。一個 2025 年 9 月的網路釣魚攻擊使用虛假對帳報告執行惡意軟體，並竊取 660,000 盧布（約 8,000 美元）。Kaspersky 記錄到，在 2026 年 1 月至 9 月期間，針對俄羅斯、白俄羅斯和哈薩克斯坦超過 100 個組織的攻擊嘗試，主要標的為冶金企業、原材料與工業供應批發商，以及政府機關，其他標的包括醫療保健、石油天然氣、能源、金融和農業。

**參考來源:** [Russian Police Arrest 3 Suspected VasyGrek Hackers, Dismantle Criminal Infrastructure](<https://thehackernews.com/2026/11/russian-police-arrest-3-suspected.html>) 

---

📌 **親中國駭客劫持 Sogou 輸入法 DNS 請求，部署 DarkVigil 後門**

ESET 將部署 DarkVigil 後門的 DNS 劫持攻擊歸因於親中國威脅組織 SlippyNunchucks，該組織濫用 Windows 版 Sogou 輸入法中不安全的 HTTP 通訊。該攻擊活動自 2026 年 7 月 1 日起活躍，標的包括香港、泰國、日本、越南、阿曼和斯里蘭卡的組織及中文使用者。攻擊者竄改 config.pinyin.sogou.com 的 DNS 解析，將請求導向暫存伺服器，傳送惡意組態，進而透過合法 Sogou 元件 SGTool.exe 與 DLL 側載方式部署 DarkVigil。騰訊在版本 16.10 中修補了 CVE-2026-120422，於 2026 年 10 月 29 日發布，將受影響的 HTTP 請求遷移至 HTTPS。

**參考來源:** [China-Aligned Hackers Hijack Sogou Input Method DNS Requests to Deploy DarkVigil Backdoor](<https://thehackernews.com/2026/11/china-aligned-hackers-hijack-sogou.html>) 

---

📌 **cPGuard 更新頻道遭劫持，散佈後門至 Linux 伺服器並竊取密碼雜湊**

攻擊者於 2026 年 11 月 2 日利用被竊取的憑證，透過版本 5.88.12 至 5.88.19 將惡意腳本推送至客戶的 Linux 伺服器，從而危害了 cPGuard 的更新系統。該腳本安裝了後門，並竊取包括 /etc/shadow 與 /etc/passwd、root MariaDB/MySQL 組態檔案、root Shell 歷史紀錄，以及 SSH 授權與已知主機檔案在內的敏感資料。OPSSHIELD 推估其授權伺服器上有 32 個客戶檔案被竊取，但受影響伺服器的總數尚不清楚。cPGuard 版本 5.88.25 及更新版本可移除後門與殘留檔案，但腳本複製的憑證可能仍然有效，因此需要輪換密碼與金鑰。OPSSHIELD 在 12 小時內發現該活動，清除基礎設施憑證並停止進一步散佈，但仍在調查最初的憑證危害事件。

**參考來源:** [cPGuard Update Channel Hijacked to Backdoor Linux Servers and Collect Password Hashes](<https://thehackernews.com/2026/11/cpguard-update-channel-hijacked-to.html>) 

---

📌 **Forever Bank 異常轉帳確認為黑客攻擊，供應商安全組態漏洞遭利用**

iThome 的標題報導指出，Forever Bank 確認異常轉帳是黑客利用供應商安全組態漏洞所致的攻擊。標題中沒有其他技術細節可供參考。

**參考來源:** [永豐銀行異常轉帳確認為駭客攻擊，供應商安全設定漏洞遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBXZ1lIUTFya21wUEFHVS1CUmRySnFmSzJPTUVFZFZ4WGhVNENKZEtaNWxDYVc0X3lGejZFTnkwbnF6RWRpUEpkVUVCSkh2dw?oc=5>) 

---

📌 **歐洲超市冷藏攻擊再度升溫，冷鏈安全備受關注**

第二波網路攻擊襲擊了歐洲各地超市的冷藏控制系統，將系統切換至除霜模式，溫度升至 50 攝氏度，導致食品變質。BBC 報導，包括比利時、盧森堡、愛沙尼亞、愛爾蘭、瑞典和芬蘭在內的七國，數十家超市受影響；Carrefour 則確認其比利時境內 700 家門市中有 15 家遭到攻擊。研究人員將攻擊與連接網路的 Danfoss、Dixell 與 Copeland 控制器相關，並指出未打補丁韌體、預設密碼與薄弱的安全衛生為促成因素。目前沒有組織承認責任，專家警告製藥與工業冷鏈系統面臨類似風險。

**參考來源:** [Fresh European Fridge Attacks Put Cold-Chain Security in Focus](<https://www.darkreading.com/ics-ot-security/fresh-european-fridge-attacks-cold-chain-security>) 

---

📌 **Suntory Group 雲端服務遭駭，超過 10 萬名員工、合作夥伴與客戶個人資料外洩**

日本飲料公司三得利控股（Suntory Holdings）表示，駭客入侵了一項雲端服務，外洩超過 10 萬名員工、業務合作夥伴與客戶的個人資料。iThome 將此事件報導為僅標題的 RSS 項目，目前無進一步技術細節可供參考。

**參考來源:** [日本三得利集團雲端服務遭駭，員工、合作夥伴及客戶等逾10萬人個資外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE03TGZaTUlOVlZqZ1R1VXVBMkRrY2RGNWpYRlRCNklpLVNfeDRYSnNzRDk4NUFWdzdid082R2pySi10MFRHLVBsdEFhREk4UQ?oc=5>) 

---

📌 **身分驗證供應商 WorkOS 遭受資料外洩，透過 AI 滲透測試框架 ARTEX 入侵**

身分驗證服務供應商 WorkOS 發生資料外洩事件，駭客利用 AI 滲透測試框架 ARTEX 取得存取權限。iThome 將此事件報導為僅標題的 RSS 項目，目前無進一步技術細節可供參考。

**參考來源:** [身分驗證服務公司WorkOS資料外洩，攻擊者透過AI滲透測試框架ARTEX得逞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GWU02bFlHSmZZUExBTlcweGtrZlBpcVF3d1pkSlMtUFM3dU5Qb0JfcTZaWjdrYlJQRUptS2gxdWhabUZGNnl3SEEyU2E2UQ?oc=5>) 

---

📌 **電商 ERP 供應商 Mokebe Technology 遭駭，Shopline 轉換 API 金鑰，商家匯入至 ERP 的資料可能受影響**

台灣電商 ERP 供應商 Mokebe Technology 遭到駭客入侵，促使 Shopline 轉換相關 API 金鑰，並警告商家匯入至 ERP 的資料可能受影響。iThome 將此事件報導為僅標題的 RSS 項目，目前無進一步技術細節可供參考。

**參考來源:** [電商ERP業者莫筆克科技遭駭，Shopline更換相關API金鑰，商家匯入ERP的資料恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5tOHQ0dFM4RUFSb0FxbndnYWxHMDJhcjBJaDZrWGEyU1FOSzBwdy04QlRkTGFtLTBldU9paUlxbUx4cEdJV0pQVnpENk11dw?oc=5>) 

---

📌 **Google 指控 Android 裝置製造商蓄意預載後門，操控 XCPE 惡意網路，感染超過 130 萬台機上盒**

iThome 報導，Google 指控 Android 裝置製造商蓄意預載後門，讓 XCPE 惡意網路入侵超過 130 萬台機上盒。

**參考來源:** [XCPE殭屍網路控制逾130萬臺機上盒，Google指控Android裝置製造商刻意預載後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBiNjE0dVZsZUpaemJQTnBIelJnVDRVQU5JRmxGTk1MYjQyZkJrV3hFQVBvUTMyRjZ0b2JlU0ZlZXQ0aTVjdEJZVHlwcW9Udw?oc=5>) 

---

📌 **Mozilla 釋出 Firefox 159.0.1 修補高風險漏洞 CVE-2026-120572**

iThome 報導，Mozilla 發布 Firefox 159.0.1 來修補被標記為 CVE-2026-120572 的高風險漏洞。

**參考來源:** [Mozilla發布Firefox 159.0.1，修補高風險漏洞CVE-2026-120572 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE40VUFxYTJVSWFFazBzMW5tR2VPb0FNMHdPTk9TYXhSVVdLb21vN1lnek0zY3pMQnlwLWVPeXlINDVwcjJ5dlJoSS10ZEZBUQ?oc=5>) 

---

📌 **觀測到針對重大 Node-RED 漏洞的攻擊嘗試，駭客試圖執行 Linux 惡意軟體並部署 Web Shell**

iThome 報導，針對重大 Node-RED 漏洞的攻擊嘗試已出現，攻擊者試圖執行 Linux 惡意軟體並部署 Web 後門。

**參考來源:** [Node-RED重大漏洞出現攻擊嘗試，駭客企圖執行Linux惡意程式並部署網頁後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA2UHdlUG5jOHhGZ1I2TWV4RWZNcm9yUEI2Y2tXMkt1SkprbHpDMTVYVDFVRkVGTDJHbU9qVXl4VGh4UGl3aGtDVXh3cWtXUQ?oc=5>) 

---

📌 **QNAP 完成 QTS、QuTS hero 與 QuTScloud 的 PHP2Shell 漏洞修補**

iThome 報導，QNAP 已完成針對 QTS、QuTS hero 與 QuTScloud 中 PHP2Shell 漏洞的安全性修補。RSS 摘項目僅為標題，故未提供受影響版本、修補日期或利用情形。

**參考來源:** [QNAP 安全公告：QTS、QuTS hero、QuTScloud 已完成 PHP2Shell 弱點修補 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTFA0VlFJUU1EcEZzY0tqLW5ieDhtWmFGR0tqNEdsUDNnUHIzLWFhZHAtWjltcENjMnJFUDQzV1JMTDJ0YzlaMkcybkdFTQ?oc=5>) 

---

📌 **德國查破「犯罪即服務」投資詐騙集團**

Dark Reading 報導，德國警方查破一個犯罪即服務的投資詐騙集團。RSS 摘項目僅為標題，故未提供嫌疑人數量、查扣基礎設施、受害者總數或技術手法。

**參考來源:** [Germany Busts 'Crime-as-a-Service' Investment Fraud Outfit](<https://www.darkreading.com/cybersecurity-operations/germany-crime-service-investment-fraud>) 

---

📌 **菲律賓外籍勞工數據可能在 69GB 政府資安洩露事件中外洩**

Dark Reading 報導，菲律賓外籍勞工數據可能在一起 69GB 政府資安洩露事件中外洩。RSS 摘項目僅為標題，故未提供外洩資料欄位、違規時間表、受影響機構或確認受害者數量。

**參考來源:** [Philippine Migrant Worker Data Likely Leaked in 69GB Government Breach](<https://www.darkreading.com/cyberattacks-data-breaches/philippine-migrant-worker-data-69gb-government-breach>) 

---

📌 **美國 CISA 警告 WordPress 安全漏洞正遭主動利用**

iThome 報導，美國 CISA 警告稱 WordPress 安全漏洞正遭主動利用。

**參考來源:** [美國CISA警告WordPress資安漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5fV1B6SjlXcko5d2NrYTVuRzlyVlZ1X2tuRkJIenY2aXZ3UndiQV8wUUF1M3JxSGR4b3ExZGFTT2tPb2NLSzdvLTZ0Um5UZw?oc=5>) 

---

📌 **NetApp 揭露多款儲存產品受 Linux 核心 TCP 漏洞影響**

iThome 報導，NetApp 揭露多款儲存產品受 Linux 核心 TCP 漏洞影響。

**參考來源:** [NetApp揭露旗下多款儲存產品受Linux核心TCP漏洞影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE44VTVMbEF5dnFUekwwSDN1NHBFSjJMS21XMF9BX0ZsX2Z0QzlaSk5zSHdxUTFjLTNZbmZSM0UzRmE4dDhTRE82U1pYTndXQQ?oc=5>) 

---

📌 **印度 CERT-In 取得 Anthropic Claude Mythos AI 模型存取權以測試漏洞檢測與利用**

引用 Moneycontrol 的 Instagram 貼文報導，印度 CERT-In 已取得 Anthropic 的受限前沿 AI 模型 Claude Mythos 的存取權，以測試其檢測系統漏洞並可能利用漏洞的能力，這項資訊來自政府消息來源。

**參考來源:** [India’s cybersecurity agency, CERT-In, has secured access to Anthropic’s restricted frontier AI model Claude Mythos to test its ability to detect and potentially exploit system vulnerabilities, government sources said, according to a Moneycontrol report. The mod - Instagram](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE9SODR3cjItM3didWlla2k3c2p6UVFHUFdaZWRJTGo3UGNXdkp4bi1OWmRpR1NXS1MwX3ljMFNraHVlSXdrQzh2c0k0UDdxeWdzWHc?oc=5>) 

---

📌 **ASRC 第三季電子郵件安全觀察**

iThome 報告 ASRC 第三季電子郵件安全觀察。

**參考來源:** [ASRC 第三季電子郵件安全觀察 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE51MzZxWFc5MXM0OTZORnlPTmNvbmduSUJVYS1ORWVmTWx1amJnWEcxSUZuNjB2NGhLMHo5UTF5S1F6OWZmSVQxQm5PUQ?oc=5>) 

---

📌 **TeamViewer、CVE-2026-111585、遠端程式執行、遠端控制軟體**

iThome 報告關於 TeamViewer、CVE-2026-111585、遠端程式執行及遠端控制軟體。

**參考來源:** [TeamViewer、CVE-2026-111585、遠端程式碼執行、遠端控制軟體 - iThome](<https://news.google.com/rss/articles/CBMipwJBVV95cUxNMEd1RFZ1WmQ4eE5sdXoxR3BqdF9qYTN2STlUa0dvcE93NzZ4aTl6OHg1WkdlZUZIcE5DejhQMzAzdE1HUk9BbWpPOElOMEtlUmYtbURfRnZRV2VZNnZFcThHSTVseGVZaVFiVTZHRm1RazlvRnI2cjdKYWRObnEzd2lLMHI3eGlOenJsR0JDLTF6Yzg3UVZwQzExd3dyMDZwaUNGMmQxRjJCOVNfaEJzd1hMRjlLd1pCd0RfTFB3Wm9UTDJvQTZDc1A5V3NTbDlOX2ZVSk5wVjd5VHdpLW16TERNajJjZEdoSzVsTDZtLVdEcVJJSGplWjRybTFDamNsS3VGWTR2YUg5ak1ua2FtU29oYzBibW5SbnV4S0JkNnI4TG1FVnhR?oc=5>) 

---

📌 **Google 釋出 Chrome 157 修補 213 個安全性漏洞，七個評為嚴重**

iThome 報告 Google 釋出 Chrome 157，修補 213 個安全性漏洞，其中七個評為嚴重。

**參考來源:** [Google釋出Chrome 157修補213個資安漏洞，其中7個為重大等級 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5odzhfU1RtajBSckdNYWVKbmN3RTBuYjMtNTJTbXlfMHBXUjkzVHJSNnpRRzRobEw0Qi1JTEFMSEJ1anI5a2JuaGxhbm1Vdw?oc=5>) 

---

📌 **91APP 遭入侵後，電子商務技術供應商 1shop、Cyberbiz 與 meepShop 發布安全警告**

iThome 報導指出，在 91APP 發生入侵事件後，電子商務技術服務供應商 1shop、Cyberbiz 與 meepShop 亦陸續發布安全警示。

**參考來源:** [繼91APP遭駭後，1shop、Cyberbiz與meepShop等電商技術服務業者接連傳出資安警訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kaGFtdUw5RkM4WXdDYWdTWlZGSFJ1NFNSdVRJNzlsMVNSUFJwYWphUjZqWXN2d0N5b0w5SGM1ZDFMMmRDQTR1UzdINWJ5Zw?oc=5>) 

---

📌 **TeamViewer 修補反向攻擊漏洞，被控端點可透過遠端連線攻擊控制端點**

iThome 報導指出，TeamViewer 已修補一個反向攻擊漏洞，該漏洞允許被遠端控制的端點利用遠端連線來攻擊控制端點。

**參考來源:** [TeamViewer修補反向攻擊漏洞，受控端可藉遠端連線攻擊控制端 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB6cDExVkhscXlrQ3BUS2V1WVpqcVNSQjhGZHFEMXg2Mk8yaW1fLUhqQlZXM0Z0YzhwMl9tWGdqMjhicUdkcmFLcTJfWEh2dw?oc=5>) 

---

📌 **歐洲超市冰箱再遭入侵**

Xakep 報導指出，歐洲超市的冰箱再次遭到入侵。

**參考來源:** [Холодильники в европейских супермаркетах снова взломали](<https://xakep.ru/2026/11/03/freezers-hack>) 

---

📌 **NetApp CVE-2026-98432 Linux TCP vulnerability ONTAP**

iThome 報導 NetApp 受 CVE-2026-98432 影響，這是影響 ONTAP 的 Linux TCP 漏洞。標題僅來源未提供額外技術細節。

**參考來源:** [NetApp、CVE-2026-98432、Linux TCP漏洞、ONTAP - iThome](<https://news.google.com/rss/articles/CBMirwFBVV95cUxPNU1qSGdtM2RIZWU1V2MxRUwyR2VPWVZkS2U2cDgwVVFMdkdMd3c2d2tFS2R0NGRjSWJXQ3RIWUJUUnVMM3NBVVhKVm1FVXdTbk9MQXFTa2dlTGJoMWR4bkE1dXdZakpNeUFVbXhhWWx5LUZMSlBLdmtDNFh4ZlR3cnhxOHR1V0NrYU1RRDN2S0pUVlU4bnp5MEdCTDBUWkh6Q0J1NTVRMGRKUFVTdk9J?oc=5>) 

---

📌 **XCPE Botnet Affects Nearly 90,000 Android Devices in Taiwan, Ranked Fifth Globally**

iThome 報導 XCPE 僵尸網路在台灣影響近 90,000 台 Android 裝置，在全球排名第五。

**參考來源:** [XCPE殭屍網路波及臺灣近9萬臺Android設備，全球排名第5 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nX29sYXRXbEdQRFQ4bUdsYWhsdHdhYVlBbV9FeGh1WUM2blFEeDE4UEdHc2oxS1Zxbm9hNmxGYUFkamdEZTYwRF9lZFVMdw?oc=5>) 

---

📌 **XCPE Botnet**

iThome 報導 XCPE 僵尸網路。

**參考來源:** [XCPE殭屍網路 - iThome](<https://news.google.com/rss/articles/CBMie0FVX3lxTFBPcnM2M0ZwZ1l2R1NKUWd0RmloYkJCZHJobTRvV0lfTXNCZFNWNW9IQ18tNjYwbFphRmJ1bS1tVGd3VVU4azltSFNBbWE0d01XQkw1WUp3RTM1QjJXVnpyY0Z5YTYzY05oZnItaS1oc0x2el9vYWVocUlUZw?oc=5>) 

---

📌 **Android「SMS of Death」漏洞可遠端干擾行動通話服務 - iThome**

iThome 報告稱，名為「SMS of Death」的 Android 漏洞可透過惡意簡訊遠端禁用行動通話服務。

**參考來源:** [Android遭揭露「死亡簡訊」漏洞，可遠端癱瘓手機通話服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE40OXVsMGdwd2d5ZlZ1dTd6UjZBV28tUEFFbVhDQVVMYUNLM3R1T1BlWWNXSFp1WHRYTXZyR0NYa2NzVzJtV1J5Z0NTaUdwdw?oc=5>) 

---

📌 **Android 裝置 - iThome**

iThome 就 Android 裝置發布僅標題更新，無法取得其他技術細節。

**參考來源:** [Android設備 - iThome](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5ZVlVSdHZONG1UMFJKODV2ZXhIaFVYWmU4ZU02YnAwZ2lMbExXdnd2VlFRMXBhVmZrMHFrSW8tUHpva1ZOWEhWUGNjNDFHSmhsendrZE0tRWp3d0U2eGJpQS1Fa25ValE?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261104-1-1793816565480 -->
