---
title: "CISO 每日摘要：俄國暗網兜售逾 1.53 億筆美加駕照，IDScan.net 疑為外洩源頭 (20260907)"
description: "KrebsOnSecurity 揭露俄國地下論壇賣家 Nexus 兜售逾 1.53 億筆美國與加拿大駕照、共 1.7 億份以上身分文件，受害者包含 FBI 助理局長與資安研究人員，調查指向美國身分驗證平台 IDScan.net（客戶涵蓋 Target、FedEx、Motorola Solutions），FBI 紐奧良分處已展開調查。其他焦點：N-able 五週內第四度為 N-central 發布熱修補，修補 CVSS 10.0 未經認證 RCE 漏洞 CVE-2026-86218；Datadog 發現逾 150 個組織的 AWS root 使用者遭密碼噴灑；Citrix NetScaler CVE-2026-19490 出現 PoC 後遭 5 國 8 個 IP 嘗試利用；Check Point 拆解 JSCeal，以竊取的工作階段 Cookie 重放攻擊繞過 Google 驗證；Telerik UI padding oracle 公開 RCE 利用鏈釋出；GPUThor 研究突破 Nvidia GPU ECC；約 5,000 個 Dropbox 帳號因 Lenovo ID 舊版整合機制遭入侵。"
pubDate: 2026-09-07
tags: [CISO, 每日摘要, 資安, 資料外洩, IDScan.net, 駕照, 暗網, KrebsOnSecurity, 身分驗證, N-able, CVE-2026-86218, Citrix, NetScaler, CVE-2026-19490, AWS, Datadog, JSCeal, CheckPoint, GPUThor, Nvidia, ScreenConnect, Huntress, Telerik, CVE-2026-13181, Dropbox, Lenovo, 中科院]
author: "Security Solutions Team"
featured: true
---

## 俄國暗網兜售逾 1.53 億筆美加駕照，IDScan.net 疑為外洩源頭

暗網賣家正在販售史上規模最大的北美身分文件庫之一，而證據指向美國單一身分驗證平台。**KrebsOnSecurity** 報導，**8 月 31 日** 一個名為 **Nexus** 的服務在俄國地下論壇張貼廣告，宣稱握有 **1.7 億份以上北美民眾身分文件**：超過 **1.53 億筆美國與加拿大駕照**、**1,000 萬張身分證圖片**、**300 萬份以上旅行文件與其他國際身分證件**，以及 **579,000 份醫療證件**（如健保卡）。免費樣本包含站長 Brian Krebs 本人的維吉尼亞州駕照——正反面彩色照、紅外線與紫外線版本共 6 張圖檔，且每張都帶有日期與時間戳記——顯示這些影像來自證件掃描設備。

研究人員進一步搜尋 Nexus 網站後發現，受害者遠不只媒體人：**FBI 助理局長** 與兩家資安公司的研究人員都名列其中，而這兩名受害者在 **Hertz 租車** 與一家合法大麻販售商出示過證件——兩家業者都採用 **IDScan.net** 的美國線上身分驗證方案，這家業者的客戶包括 **Target、FedEx、Motorola Solutions**、金融業者 **Jack Henry** 與賭城娛樂業者 **Caesars Entertainment**。研究人員據此推斷是 **IDScan.net 後臺遭竊**，意味外洩範圍可能擴及所有採用該平台的企業。網站上約有 **110 萬筆加拿大駕照**，且每 24 小時新增約 **40 萬筆** 駕照圖片——顯示這是持續進行中的資料管線，而非一次性外洩。**FBI 紐奧良分處上週已啟動調查**；Caesars 表示早在 2025 年初就不再使用該方案；Nexus 在媒體報導後關閉了網站；IDScan.net 至今未公開回應。

### 這對身分驗證治理的深遠影響

- **身分驗證供應鏈的集中風險**：正反面彩色照加上紅外線與紫外線影像——正是繞過簡陋活體偵測的關鍵素材——如今疑似出自同一家處理租車、零售、博弈與金融通路證件的平台。一旦後臺淪陷，攻擊者即可大規模取得可用於詐騙的身分套件。
- **每天約 40 萬筆的新增速度顯示資料仍在持續外洩**，而非一次性傾倒，代表暴露窗口可能尚未關閉，最終受害者總數難以估計。
- **無法自證的清白受害者風險**：委外身分驗證的企業至今無法確認自己的供應商是否為外洩源頭——IDScan.net 尚未對外揭露任何入侵事件；而 Caesars「2025 年初已停用」的時間線也顯示，即使終止合作，資料仍可能在外流通多年。FBI 的調查將釐清責任歸屬，但無法縮小已暴露的範圍。

🔗 **參考資料：** 綜合報導（[KrebsOnSecurity](https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/)、[iThome](https://www.ithome.com.tw/news/178724)）

---

## 本週活躍威脅

📌 **N-able 五週內第四度發布 N-central 熱修補——CVE-2026-86218（CVSS 10.0）未經認證 RCE**
N-able 於 9 月 6 日凌晨（UTC）釋出 **2026.3 Hotfix 4**，修補旗下 **N-central RMM 平台** 的嚴重漏洞：**CVE-2026-86218**（CVSS 4.0 評分 10.0、CWE-96 靜態程式碼注入）允許攻擊者 **在未經認證的情況下於 N-central 伺服器上執行遠端程式碼**，影響所有低於 **2026.3.1.14** 的本地部署版本——包括約 8 小時前才更新到 Hotfix 3（2026.3.1.13）的伺服器。雲端代管版 NCOD 已完成修補。值得注意的是，N-able 自家公告對是否已遭利用說法不一：事故通報稱漏洞已在野外遭利用，但版本說明則標註「未經證實」；官方迄今未提供入侵指標（IoC）、暫時緩解措施或偵測指引，僅建議稽核 N-central 帳號是否有異常使用者。持續追蹤 N-central 攻擊的 **Huntress** 建議以 IP 白名單或 VPN 限制主控台存取。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/n-able-issues-fourth-n-central-hotfix.html)

📌 **Citrix NetScaler CVE-2026-19490 從漏洞揭露進入實際利用階段**
Citrix 8 月下旬修補的身分驗證繞過漏洞——**CVE-2026-19490**（CVSS v4.0 **9.3**，影響特定設定的 NetScaler Gateway 與 AAA 虛擬伺服器，本部落格 8 月 21 日摘要於揭露時曾報導）——如今出現真實攻擊流量。漏洞威脅情報平台 **Previdian** 於 9 月 4 日指出，**9 月 2 日** 出現概念驗證程式碼（PoC）後，**9 月 3 日** 起偵測到漏洞利用活動；截至 9 月 7 日，來源 IP 已從最初的 3 個（澳洲、美國、德國）增至 **5 個國家的 8 個 IP**，累計 **17 次利用嘗試**。目前尚無法確認是否有 NetScaler 遭成功入侵，但比利時國家網路安全協調中心 **NCC-BE** 已更新公告、呼籲用戶盡速修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178750)

📌 **AWS root 使用者遭密碼噴灑，逾 150 個組織成攻擊目標**
雲端監控與資安業者 **Datadog** 旗下安全研究團隊揭露，**逾 150 個組織** 的 AWS 帳戶中，具完整帳戶存取權限的 **root 使用者** 成為 **密碼噴灑** 攻擊的目標。目前尚未觀察到成功登入，攻擊者取得 root 使用者電子郵件地址的方式（預先掌握清單，或從一批帳戶電子郵件逐一比對）與最終目的仍不明。AWS 自 2025 年起已要求所有 root 使用者啟用 **MFA**，但研究人員建議組織降低對可長期使用的 root 憑證的依賴，而非只靠 MFA 防護。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178700)

📌 **Telerik UI padding oracle 利用鏈公開——未經認證 RCE 工具釋出**
資安公司 **TantoSec** 發布了針對 **Telerik UI for ASP.NET AJAX** 的完整利用鏈與可直接執行的命令列工具（**telerik-rau-exploit**），附帶兩種酬載——一種寫入 Web Shell 至磁碟、另一種完全在記憶體中執行。該鏈將 **RadAsyncUpload** 控制項（版本 2010.1.309 至 2026.2.519）的 **AES-CBC padding oracle** 轉為未經認證的遠端程式碼執行，核心是 **CVE-2026-13181**（CVSS **8.1**）未受防護的型別解析漏洞。Progress Software 已於 **7 月 8 日** 在 **2026.2.708** 版修補（7 月 22 日發布公告），且利用需要非預設設定——頁面必須實際渲染 RadAsyncUpload——因此預設安裝不受影響。目前 **沒有已證實的野外攻擊**，但這是完整攻擊路徑首次落入公眾手中。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/telerik-ui-padding-oracle-bug-chained.html)

📌 **JSCeal：編譯型 V8 竊密程式以竊得 Cookie 重放工作階段，繞過 Google 驗證**
**Check Point Research** 發布對 **JSCeal** 的全靜態去混淆分析。JSCeal 是 2025 年 7 月首度被記錄的編譯型 V8 JavaScript（JSC）惡意程式家族，透過 Facebook 與 Google 惡意廣告導向的假加密貨幣交易網站與冒牌 **TradingView 安裝程式** 散播（與 WEEVILPROXY、MeadowLocust 威脅群集及 Confiant 近期揭露的 **SourTrade** 行動重疊）。惡意程式會列舉已安裝的瀏覽器——Chrome、Edge、Brave、Opera、Opera GX、Avast Secure Browser、Vivaldi 與 Cốc Cốc——從中竊取 **Cookie、密碼與 OAuth 權杖**，再 **重建瀏覽器工作階段發動主動重放攻擊繞過驗證**，包括未經授權存取受害者的 **Google 帳號**。另一個模組具備鍵盤側錄與螢幕截圖能力；本機代理模組則會安裝憑證、攔截與修改特定服務流量，內建針對 **Binance、Bybit 與 Ledger** 的專屬處理器。酬載以 RC4 保護並經控制流平坦化處理，提高分析難度。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/jsceal-malware-can-bypass-google.html)

📌 **惡意 ScreenConnect 用戶端對新連線主機散布四階段 VBScript 鏈**
**Huntress** 記錄了三起互不相關的 8 月事件——Quick Assist 技術支援詐騙、釣魚郵件投遞的 MSI 安裝程式，以及假冒 Geek Squad 退款表單的誘餌——最終都在受害機器上安裝 **惡意 ConnectWise ScreenConnect 用戶端**，並反覆以 `wscript.exe` 執行 **1.vbs、2.vbs、3.vbs、4.vbs** 的階段式酬載鏈，每個腳本先探查主機再啟動下一個。觀察到的 C2 基礎設施：`45.13.237[.]190`（`tele-sync.opik[.]net`，託管內含四個 VBS 檔的 RAR 壓縮檔）、`131.123.40[.]98:8041`，以及 `borertors92.anondns[.]net`。一旦惡意用戶端安裝完成，這種類似蠕蟲的擴散模式會感染後續連線的主機——封鎖初始入侵點成為關鍵控制點。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/rogue-screenconnect-clients-spread-four.html)

📌 **約 5,000 個 Dropbox 帳號因 Lenovo ID 舊版整合機制漏洞遭入侵**
**Dropbox** 證實約 **5,000 個客戶帳號** 在 **8 月 4 日至 21 日** 間遭存取：攻擊者利用 Dropbox 與 **Lenovo ID** 舊版登入整合的電子郵件驗證程序缺失——**用別人的電子郵件地址註冊新的 Lenovo ID，無需證明信箱所有權**——而舊版整合機制允許該 Lenovo ID 直接登入受害者的 **Dropbox 帳號，全程不需 Dropbox 密碼**。Dropbox 向受影響用戶表示，遭存取帳號中 **不到三分之一** 有檔案實際被打開，並坦承此事當時似乎未被即時監控發現。Lenovo 則聲稱自家客戶與系統未受影響，並表示兩家公司確認問題後已合作迅速緩解風險。
🔗 **參考資料：** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/lenovo-login-system-hackers-dropbox)

📌 **GPUThor：新型 Rowhammer 手法突破 Nvidia GPU ECC 防護，目標直指主機 root**
多倫多大學研究人員揭露 **GPUThor**——一種可 **突破 Nvidia GPU ECC 防護** 的新型 Rowhammer 攻擊手法，並在採用 Ampere 架構與 GDDR6 記憶體的 **RTX A4000、A4500、A5000 及 A6000** 等 GPU 上完成驗證。GPUThor 利用非均勻記憶體存取模式，結合 GPU 記憶體請求合併與 Target Row Refresh（TRR）機制特性，即使啟用 ECC 仍能造成位元翻轉——產生 ECC 可偵測但無法修正的雙位元錯誤，以及超出 ECC 修正能力的三位元錯誤——進而可能造成資料毀損、GPU 服務阻斷、竄改 GPU 分頁表，甚至讓 CUDA 應用程式提升權限、取得 **主機 root 權限**。研究團隊 4 月 29 日通報 Nvidia，Nvidia 於 8 月 25 日發布緩解建議（啟用 SYS-ECC、IOMMU／DMA 隔離，並監控 GPU 錯誤遙測）。目前尚無野外利用報導。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178735)

📌 **中科院採購資訊網：廠商隱藏管理介面遭境外 IP 破解**
國家中山科學研究院修正了 **8 月 28 日** 採購資訊網大量寄送過期採購資訊事件的最初說法。院方先前發布的新聞稿將原因歸咎於自家開發的 **AI 資安偵測代理**——稱代理在測試時破解 API 編碼規則、跨越工具權限並觸發信件派送；**9 月 5 日** 的最新調查結果卻顯示這是 **外部攻擊**：承攬開發商為了維護方便在系統內藏了隱蔽的排程管理介面，該介面遭 **境外 IP 位址破解**，觸發特定排程指令、重新對合作供應商寄發詢價案件通知函。中科院坦承管理缺口：院方約一年前參照美國政府軟體物料清單（SBOM）架構頒布軟體發展管理作業手冊，但出事系統建置於 **2019 年**，從未依政策回溯清查。院方已要求廠商提供完整 SBOM 資料並重新檢討應變機制。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178727)

📌 **美英聯手打擊東南亞詐騙園區，簽署合作備忘錄**
美國 **Scam Center Strike Force**（由華盛頓特區聯邦檢察官辦公室於 2025 年 11 月成立，參與單位含 FBI、特勤局、司法部刑事司、國土安全調查局與 IRS 刑事調查部門）與英格蘭及威爾斯皇家檢察署（CPS）、英國國家犯罪局（NCA）簽署合作備忘錄，聯手打擊東南亞詐騙園區背後的組織犯罪集團：共享犯罪情資、針對共同目標分頭調查，並協調各案的起訴司法管轄區。雙方已確認部分案件重疊，下一階段行動排定 **10 月初於倫敦** 舉行，由 NCA 主辦並納入民間業者參與；美國司法部尚未公布具體目標。此類犯罪的規模背景：FBI 統計 **2025 年加密貨幣投資詐騙造成美國受害者約 72 億美元損失**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178731)

---

## OPSWAT 可以怎麼幫上忙

今日的主動威脅多為檔案型態：JSCeal 搭著惡意廣告投遞的冒牌 TradingView 安裝程式與 ZIP 壓縮檔散播，ScreenConnect 攻擊鏈以 MSI 安裝程式搭配 VBScript 酬載，Telerik 利用鏈則會把 Web Shell 寫入磁碟。**MetaDefender 多引擎掃描** 以 30+ 防毒引擎檢查安裝程式、壓縮檔與執行檔，在木馬化檔案抵達端點或伺服器前將其攔截；**MetaDefender Deep CDR（內容淨化與重建）** 則將腳本、文件與壓縮檔重建為安全形式，縮小此類惡意廣告誘餌、冒牌安裝程式與階段式腳本鏈的攻擊範圍。
