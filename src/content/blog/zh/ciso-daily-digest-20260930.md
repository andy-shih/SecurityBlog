---
title: "CISO 每日摘要：Citrix NetScaler 雙重零時差漏洞持續釀災，Spectre-v2 BTR 破解 CPU 防禦 (20260930)"
description: "Citrix NetScaler CVE-2026-88771 與 CVE-2026-88772（CVSS 9.5）持續遭主動利用；無需身分驗證。同時：Spectre-v2 BTR 分支目標重用攻擊繞過現有 CPU 防禦；法國稅務機關 60 萬筆以上記錄遭盜，原因是弱密碼控制；俄羅斯 Star Blizzard 以假事件邀請針對 100+ 組織；JPCERT 週報涵蓋 ServiceNow、Adobe、GitLab、Cisco 等 30 項漏洞；OpenSSL DTLS 堆記憶體洩露；C-Suite 釣魚竊取 Microsoft 365 工作階段；Lunex Stealer；五角大廈人事資料庫外洩。"
pubDate: 2026-09-30
tags: [Citrix-NetScaler, CVE-2026-88771, CVE-2026-88772, 零時差, RCE, Spectre-v2, BTR, CPU-漏洞, Intel-AMD, 法國稅務, Star-Blizzard, APT, 釣魚, OpenSSL, CVE-2026-84782, DTLS, Lunex-Stealer, BYOVD, Microsoft-365, 五角大廈, JPCERT-週報, 企業漏洞, CISA-KEV, CISO-每日摘要]
author: "Security Solutions Team"
featured: true
---

## Citrix NetScaler：重大零時差漏洞持續擴散，Spectre-v2 BTR 破解十年防禦

兩個 **Citrix NetScaler ADC 與 Gateway** 重大漏洞持續遭利用，與此同時新型 **Spectre-v2 變體** 打破十年前的 CPU 防禦。**CVE-2026-88771**（不適當輸入驗證）與 **CVE-2026-88772**（DTLS 記憶體溢位）均為 **CVSS 9.5**，在預設組態下無需身分驗證。Citrix 修補版本 **14.1-73.37+** 與 **13.1-64.23+** 為必要；無任何緩解措施。同時，來自 **VUSec 與 Scuola Superiore Sant'Anna** 的學者揭示 **分支目標重用（BTR）**——一種新型 Spectre v2 變體，在 Web 瀏覽器、語言執行時期與 Linux 核心的即時編譯（JIT）程式碼中開發。**BTR 繞過 Training Solo 與現有 Spectre v2 防禦**，利用過時的間接分支預測項目在自修改程式碼生命週期後持續存在。完整修補的 Intel 系統上的概念驗證開發在數分鐘內竊取 root 密碼雜湊。此交集（Citrix 零時差與 CPU 長期架構漏洞）定義本週風險樣貌：主動利用加上供應商無法輕易修補的基本 CPU 設計缺陷。

---

## 本週活躍威脅

📌 **Spectre-v2 BTR：新型 CPU 攻擊洩露 Linux 核心記憶體，繞過既有防禦**
研究人員揭示 **分支目標重用（BTR）**，一種實踐性的 **原位 Spectre-v2 攻擊**，利用自修改程式碼（SMC）與 JIT 引擎中間接分支預測的交互。不同於傳統 Spectre-v2 攻擊在不同位置劫持分支目標，BTR 利用「時間」違反，其中目標保持相同但基礎程式碼改變——在 JIT 引擎中可行。兩種針對 Linux 核心 cBPF JIT 的端到端開發 **在完整修補的 Intel 系統上於數分鐘內洩露並恢復 root 密碼雜湊**。該攻擊破解既有防禦（Training Solo CVE-2024-28956 與 CVE-2025-24495）且對執行核心 JIT 引擎的系統無範圍限制。Linux 核心修補（CVE-2026-64507、CVE-2026-64508）已在責任揭示後合併；GraalVM 隨機化 JIT 程式碼快取位置；Mozilla 優先考慮站點隔離而非 IBPB 防禦。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/new-spectre-v2-btr-attack-leaks-linux.html)

📌 **法國稅務機關：60 萬筆以上記錄遭竊，源於弱密碼控制**
**法國 DGFIP（稅務局）** 揭露多月資料竊取事件，涉及 **約 35 萬名個人與約 25 萬家企業** 的記錄，盜竊行為未被發現達七週。攻擊者使用 **遭竊的員工密碼**（可能由個人設備上的資訊竊取程式取得），入侵入口網站 **PIGP**（郵件/人資）與 **ADER**（政府網路 RIE 存取），隨後轉向 **E-Contact**（納稅人訊息工具）。ANSSI 稽核揭露根本弱點：密碼重設時無工作階段終止、ADER 存取未受監控、缺少多因素認證、無資料量警示儘管 **三天內竊取 11 GB**。第二條路徑經由 **APEX**（公証人與測量師夥伴入口）暴露 **約 43.5 萬筆家庭地籍紀錄**。基礎設施來自受害的 **教育部在 RIE 網路上的系統**，無分隔保護敏感 DGFIP 應用程式。ANSSI 建議：密碼重設時撤銷所有活躍工作階段、部署 MFA 與硬體權杖、在 SIEM 監控所有業務應用程式、實施資料存取配額、禁止個人設備存取工作資源。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/french-tax-data-theft-using-stolen.html)

📌 **俄羅斯 Star Blizzard：100+ 組織遭假事件邀請釣魚，RedFlick 後門**
**微軟** 追蹤 **Star Blizzard**（俄羅斯 FSB 第 18 中心）在 2026 年部署 **13 場大型釣魚活動**，每場含數十至數百封郵件。自 3 月起，該組織使用遭駭的 **WordPress 與 cPanel 郵件帳號** 而非免費服務。釣餌：來自 **Chatham House、大西洋理事會** 等智庫的邀請，經常冒充目標組織。受害者接收 **受密碼保護的 RAR/ZIP 壓縮檔**（密碼在影像中）含快捷檔案偽裝為 PDF。開啟 LNK 檔案靜悄悄地執行命令，獲取 **MSI 安裝程式** 建立三項排程工作——**Internet Quality Test Connection、Network Configuration Manager、System Health Monitor**——遞送 **CosmicPulse**，一款 Python 後門。該技術代號 **RedFlick**，逃避舊版 ClickFix 偵測。目標誘餌包括假稅務稽查、水供應停止通知與國際組織支付通知。3 月活動遞送 **DarkSword iPhone 漏洞工具組** 而非 Windows 惡意軟體。受影響組織遍佈美國、英國、澳洲與烏克蘭；未披露確認受害，但微軟通知受鎖定/受害客戶。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/russias-star-blizzard-targets-100.html)

📌 **JPCERT 週報：涵蓋 ServiceNow、Adobe、GitLab、Tomcat、Cisco 等 30 項漏洞**
**JPCERT/CC** 發布綜合週報涵蓋 **9 月 13-26 日 30 項不同漏洞揭示**。高危項目包括：**ServiceNow AI 平臺**（多項漏洞）、**Adobe 產品**（APSB26-151）、**Unbound DNS**、**Apache Tomcat**（多項）、**Next.js ImageResponse RCE**、**Microsoft Edge**、**WordPress PHP RFI**、**Google Chrome**、**GitLab**、**Cisco Identity Services Engine CVE-2026-76460**（主動利用）、**Cisco Secure Email Gateway SQL 注入**、**F5 BIG-IP Access Policy Manager 緩衝區溢位**（主動利用）及數十項外掛/擴充漏洞。特別值得注意：**Acronis Backup plugin for cPanel & WHM** 權限提升已遭利用；**MikroTik RouterOS** 組合漏洞鏈（MikroTrick）與 260 萬台全球暴露設備有關。主動利用項目的修補期限為立即。
🔗 **參考資料：** [JPCERT/CC 週報](https://www.jpcert.or.jp/wr/2026/wr260930.html)

📌 **OpenSSL：高危 DTLS 漏洞洩露堆記憶體，未加密傳輸**
**OpenSSL** 於 **9 月 29 日** 發布 **CVE-2026-84782** 修補，高危 DTLS 握手漏洞。當大型 DTLS 握手訊息的傳送操作中途暫停時，重傳計時器可觸發並重播早期訊息，使用暫停訊息的緩衝位置而非重新開始——標籤錯誤並攜帶 **洩露的堆記憶體為未加密握手資料**。在 **4.0.3、3.6.5、3.5.9、3.4.8** 中修復；OpenSSL 3.0 修補為付費支援專用（公開支援已於 9 月 7 日終止）。CVSS 8.2；Ubuntu 22.04/24.04 透過 libssl3 更新取得修補；需重新啟動。未報告主動利用；WebRTC 與加密通話設置為暴露途徑。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/openssl-fixes-high-severity-dtls-flaw.html)

📌 **C-Suite 釣魚活動竊取 Microsoft 365 工作階段並部署 RMM 工具**
**ANY.RUN** 研究人員追蹤 **美國 C-Suite 釣魚活動** 跨 351 個沙箱分析，**51% 來自美國**。該作業結合兩條攻擊路徑：認證竊取/設備代碼釣魚竊取 **Microsoft 365 存取與活躍工作階段**，以及 BAT/VBS 落地程式部署合法 RMM 工具（**ScreenConnect、Action1**）以獲得持久遠端存取。釣餌冒充 **Adobe、DocuSign、Zoom、Google Meet、Dropbox、Microsoft 365**。在一次沙箱工作階段中，Adobe 主題釣餌遞送升級權限並安裝 ScreenConnect 的 BAT 檔案。高暴露部門：**技術、製造、政府、諮詢**。更廣泛影響：攻擊者同時獲得商業帳戶與員工設備控制——信箱接管、財務欺詐（發票操縱）、持久端點存取與內部傳播全部源於單一釣魚點擊。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/us-focused-csuite-phishing-steals.html)

📌 **Lunex Stealer：MaaS 平臺擴張，採用 BYOVD 防禦迴避**
**Ontinue** 擴展其 **Lunex Stealer** 分析，識別 **遍佈 13 國 28 個活躍命令與控制面板**，由俄語系開發者操作。平臺透過 **ClickFix** 假 CAPTCHA 部署、鎖定烏克蘭用戶。開發鏈透過 CMSTPLUA 繞過 **使用者帳號控制（UAC）** 並濫用易受攻擊的 **AMD Radeon 驅動程式（PDFWKRNL.sys，CVE-2023-20598）** 以提升權限並 **令資安監控行程失明同時保持運作**——隱密 BYOVD 戰術。竊取涵蓋來自 **7 個基於 Chromium 瀏覽器、9 個加密貨幣錢包** 的憑證，並透過 **Chrome 原生訊息主機** 建立持久化——支援 **6 項檔案系統操作（list_drives、list_dir、read_file、write、download、run）** 的 PowerShell 指令碼。平臺從 6 月至 9 月擴張暗示單一操作者成長或主動 MaaS 轉售；託管面板遍佈俄羅斯、美國、英國、荷蘭、法國、德國、土耳其、孟加拉指向分散基礎設施。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/lunex-stealer-abuses-amd-driver-to.html)

📌 **五角大廈人事資料庫：數百萬筆記錄外洩**
**Bitdefender** 報告五角大廈人事資料庫遭竊，暴露 **數百萬現役軍人、文職員工與承包商的個人資料**。詳情有限；應急回應進行中。
🔗 **參考資料：** [Bitdefender Security Blog](https://www.bitdefender.com/en-us/blog/hotforsecurity/pentagon-personnel-database-breach-personal-data-millions)

📌 **Citrix NetScaler CVE-2026-88772：開發細節展示記憶體溢位通向機器碼路徑**
**watchTowr** 發布 **CVE-2026-88772** 概念驗證開發細節，展示 DTLS 片段長度解析不一致如何導致緩衝區溢位與控制流劫持。攻擊者精心設計惡意 DTLS 記錄其中 **fragment_length=1 但實際資料遠大**，在 120 筆記錄累積 **約 174 KB** 後繞過 **35,840 位元組暫存緩衝**。溢位可使用 **mprotect()** 武器化以擊敗 NX 保護並將執行轉向任意機器碼（**root 權限**）。與 CVE-2026-88771 結合，此創作兩漏洞開發鏈無身分驗證屏障。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/citrix-netscaler-cve-2026-88772-exploit.html)

---

## OPSWAT 可以怎麼幫上忙

今日攻擊面涵蓋 CPU 漏洞（Spectre-v2 BTR）、未修補企業應用程式（Citrix、OpenSSL、JPCERT 30 項漏洞清單）、遭竊憑證與工作階段劫持（法國稅務、C-Suite 釣魚、Star Blizzard）、資訊竊取（Lunex、五角大廈）。**MetaDefender Multi-Scan** 層疊 30+ 防毒引擎以截獲釣魚遞送的負載與竊取程式進入電子郵件與網頁閘道前到達端點。**MetaDefender CDR（內容淨化與重建）** 淨化文件、壓縮檔與程式碼以剝除 Star Blizzard 與 CSuite 活動中使用的主動內容與巨集型遞送機制。**MetaDefender Kiosk** 在實體與 OT 邊界篩選檔案，阻止可能攜帶遭竊資料或從受害環境竊取惡意軟體負載的受感染 USB 與卸除式媒體。
