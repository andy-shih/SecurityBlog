---
title: "CISO 每日摘要：Apple CoreGraphics 零時差與 FortiMail 重大漏洞並行，KillSec 青年主謀遭逮捕 (20261002)"
description: "Apple CoreGraphics CVE-2026-86950（零擊 PDF 漏洞，主動利用）、Fortinet FortiMail 重大零時差（無認證任意檔案寫入）、WordPress 自癒後門、KillSec 勒索軟體組織遭查獲（16 歲主嫌被捕）、Citrix NetScaler 多項重大漏洞（JPCERT 警示）、冒充亞洲郵件安全產品的惡意 Linux 植入、FUJIFILM 與 Sharp 多功能印表機路徑遍歷漏洞（CVE-2026-78249）。"
pubDate: 2026-10-02
tags: [Apple-CoreGraphics, CVE-2026-86950, 零擊-PDF, FortiMail-零時差, WordPress-後門, KillSec-勒索軟體, Citrix-NetScaler, CVE-2026-88771, CVE-2026-88772, BPFdoor, Linux-植入, JPCERT-警示, FUJIFILM-Sharp-印表機, CVE-2026-78249, 郵件閘道, 遠端程式碼執行]
author: "Security Solutions Team"
featured: true
---

## Apple CoreGraphics 零時差與 FortiMail 重大漏洞並行，KillSec 青年主謀遭逮捕

**Apple 發布 CVE-2026-86950 緊急修補**，該漏洞是 **CoreGraphics 中的重大越界寫入缺陷**，影響 iOS、iPadOS 及 macOS。由 **Meta 產品安全團隊** 發現的該漏洞，可透過 **惡意 PDF 檔案實現零擊程式碼執行**，已在 **高度鎖定目標的攻擊** 中遭主動利用。漏洞已於 9 月 29 日列入 **CISA 已知被利用漏洞（KEV）目錄**，聯邦機構被要求於 10 月 2 日前修補。同時，**Fortinet 揭露 FortiMail 重大零時差**，允許 **無認證遠端攻擊者寫入任意檔案**，將郵件安全放在周邊直接威脅下。這兩個漏洞共同代表 **零擊 PDF 行動裝置攻擊與企業郵件閘道洩露的交集**，兩者均需立即跨消費者與企業環境修補。

---

## 本週活躍威脅

📌 **Apple CoreGraphics CVE-2026-86950：零擊 PDF 漏洞主動利用 iOS 用戶**
Apple **CoreGraphics（負責渲染 PDF、圖形與文字的框架）** 中的越界寫入漏洞允許攻擊者精心製作的 PDF 檔案 **以完整裝置權限執行任意程式碼而無需使用者互動**。**Meta 研究人員** 在觀察 **對個別 iPhone 用戶之極為精妙鎖定目標攻擊** 中的利用後揭露該缺陷。修復版本為 **iOS 26.7.1、iPadOS 26.7.1、macOS Tahoe 26.7.1 及 macOS Sequoia 15.8.1**；適用於 iPhone 11+、iPad Pro/Air/mini（第 3 代+）。CVSS 嚴重等級與修補期限突出主動利用；無任何緩解措施存在。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/10/01/cve-2026-86950/)

📌 **Fortinet FortiMail 零時差：重大無認證任意檔案寫入漏洞遭主動利用**
**Fortinet FortiMail 中的重大零時差** 允許 **無認證遠端攻擊者** 在郵件閘道裝置上 **執行任意檔案寫入**。FortiMail 位於網路周邊，為全球數千家企業過濾電子郵件；成功利用授予磁碟的無限制寫入存取，啟用網頁殼後門安裝、設定篡改及持久後門建立。利用已發生在活躍攻擊中；立即修補為強制性。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/critical-fortimail-zero-day-flaw.html)

📌 **WordPress 自癒後門：使用檔案、資料庫、共享記憶體的持久化**
安全研究人員記錄了具有 **非凡韌性的 WordPress 後門**——能夠在清理後透過運用 **三項持久化機制同時進行而自我重建：檔案系統檔案、資料庫項目及共享記憶體片段**。當管理者刪除惡意檔案或資料庫記錄時，後門 **自動從剩餘工件重新生成**，打敗傳統清理程序。影響高風險 WordPress 部署；需要自訂負載偵測；完整站點資料與訪客工作階段洩露為可能。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/10/wordpress-backdoor-rebuilds-itself.html)

📌 **KillSec 勒索軟體主謀被捕：16 歲羅馬尼亞人，500+ 確認受害者**
**Operation KillSwitch**（由 **德國當局** 主導的協調國際執法行動）瓦解了 **KillSec 勒索軟體組織**，結果是逮捕了被認定為該組織 **管理員的 16 歲羅馬尼亞人**，該少年在西班牙阿利坎特市被捕。KillSec 自 2024 年活躍以來，利用 **已知漏洞與安全防護不當的雲端存取** 入侵企業系統、竊取資料並經由公開洩露站威脅索要贖金。來自 **德國、美國、英國、西班牙、羅馬尼亞及希臘** 的當局參與；**Europol 及 Eurojust 協調**；**110TB 受害者資料被查獲**、5 台伺服器與基礎設施被禁用、洩露網域被重定向至執法查封通知。在全球調查的約 **1,000 起疑似攻擊中**，**500 起確認成功洩露** 包括 **對至少 70 個政府組織的攻擊**。**荷蘭籍人士（Fouad Eltibrizi，又稱「Archduke」）** 在美國被起訴，於 9 月 30 日在英國被捕，面臨引渡及因未經授權電腦存取共謀最高 10 年監禁。
🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/10/police-arrest-16-year-old-suspected-of.html)、[Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/killsec-ransomware-mastermind-16-year-old)）

📌 **Citrix NetScaler 多項重大漏洞：JPCERT 警示（CVE-2026-88771、CVE-2026-88772 等）**
**JPCERT/CC 發布緊急安全警示** 涵蓋 CVE-2026-88771、CVE-2026-88772 及六項其他 NetScaler 漏洞（CVE-2026-88773 至 CVE-2026-88778）。兩項最重大的——**CVE-2026-88771（不適當輸入驗證）與 CVE-2026-88772（DTLS 記憶體溢位），均為 CVSS 9.5——啟用無認證遠端程式碼執行**。JPCERT 確認該產品 **在國內廣泛部署**；自 9 月 24 日起，**針對日本 NetScaler 實例的主動攻擊試圖** 已被觀察到。Cloud Software Group 提供修補：**14.1-73.37+ 與 13.1-64.23+**。強制修補包括 **無緩解措施**；**Mandiant 及 Google 威脅情報** 揭露 **受害後指標（IOC）** 顯示攻擊者執行 **網頁設定篡改、網頁殼安裝、SUID 權限提升及 Python 後門持久化**。立即修補與日誌、設定與檔案完整性的法醫調查為必要。
🔗 **參考資料：** [JPCERT/CC Alert 260029](https://www.jpcert.or.jp/at/2026/at260029.html)

📌 **惡意 Linux 植入冒充韓國/台灣郵件安全產品：BPFdoor、Rekoobe、AVERAT**
**Rapid7 Intelligence 記錄了三個新型 Linux 後門活動** 鎖定 **亞洲網路邊界裝置**。**以韓國為焦點的活動** 使用新 **BPFdoor 變體及 Rekoobe RAT** 偽裝為 **SpamSniper**（韓國反垃圾郵件軟體，被 6,000+ 組織（包括韓國政府）使用）。**以台灣為焦點的活動** 部署 **AVERAT** 冒充 **ShareTech**（台灣郵件安全廠商，服務亞太跨企業、教育與政府）。全三項植入表現出 **非凡模仿：複製合法 PID 檔案、系統服務、TCP 連接埠慣例（埠 25 SMTP 用於 C2 融合）及被動啟動技術**。安全電子郵件閘道（SEG）在周邊佔據 **特權網路位置**；受害應用裝置 **持久存在延長期間** 缺乏端點偵測能力。BPFdoor 先前使用 **位元組層級 HTTPS 啟動碼及 ICMP 竊取**；最新變體顯示 **持續迴避演進**。偵測需要 **行為基準建立**、檔案與設定完整性監控及主動鎖定搜尋。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/threat-intelligence/malicious-linux-implants-mimic-asian-mail-security)

📌 **FUJIFILM 與 Sharp 多功能印表機：路徑遍歷漏洞（CVE-2026-78249）洩露企業印表機敏感資料**
**FUJIFILM Business Innovation** 與 **Sharp Corporation** 多功能印表機（MFP）存在 **路徑遍歷漏洞（CWE-22）**，可讓能存取裝置 **Web 管理介面** 的攻擊者透過精心製作的請求，取得印表機上儲存的敏感資訊。此漏洞經 **JPCERT/CC** 協調揭露，**CVSS 評分 4.9（中等）**——網路攻擊向量、無需使用者互動。企業印表機是經常被忽視的攻擊面，常保有快取文件、憑證與掃描檔案；兩家廠商的韌體更新為修補方式，並提供暫時緩解措施。
🔗 **參考資料：** [JVN iPedia](https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-036180.html)

---

## OPSWAT 可以怎麼幫上忙

10 月 2 日的威脅景觀涵蓋 **零擊行動 PDF 漏洞（CVE-2026-86950）、重大閘道裝置缺陷（FortiMail、NetScaler）、多向量 WordPress 持久化（檔案 + 資料庫 + 記憶體）、冒充合法安全工具的精妙 Linux 閘道植入及以雲端誤設為目標的勒索軟體組織。** **MetaDefender Multi-Scan** 層疊 30+ 防毒引擎以截獲 **零擊 PDF 漏洞、勒索軟體負載及植入二進位** 在郵件與網頁閘道抵達端點與伺服器前。**MetaDefender CDR（內容淨化與重建）** 剝除主動 PDF 內容、巨集、嵌入指令碼及可疑結構以中和零擊與巨集型遞送。**MetaDefender for Secure Email Gateways** 整合深度檢查掃描在周邊以攔截 **偽裝為合法 SEG 更新與行程的惡意植入**。**MetaDefender Kiosk** 在氣隙與 OT 邊界篩選 USB 與卸除式媒體，阻止竊取的勒索軟體、洩露憑證及植入範本。對於運作 **Citrix NetScaler、FortiMail、WordPress** 或 **亞洲郵件安全裝置** 的組織，綜合檔案行為基準與 **持續設定完整性監控** 搭配 MetaDefender 掃描針對 **已知零時差與冒充合法安全工具的植入** 提供深度防禦。