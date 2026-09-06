---
title: "CISO 每日摘要：Magento 零日漏洞「StyleSmuggler」在商店伺服器植入後門 (20260906)"
description: "荷蘭資安公司 Sansec 警告駭客正在利用 StyleSmuggler——Magento Open Source 與 Adobe Commerce 尚未修補的未授權零日漏洞，即使商店已安裝最新修補仍會被植入後門；JetBrains 坦承自家 Cadence 雲端服務遭人以 TeamCity CVE-2026-63077 入侵並竊取 AWS 憑證；CERT Polska 示警 MikroTik RouterOS 可未經認證接管；Broadcom 修補 VMware Workstation／Fusion 的 CVE-2026-59346 與 CVE-2026-59347；Trezor 表示 ShipMonk 因 Metabase CVE-2026-72898 入侵事件再外洩 67,000 名美國客戶資料；Elastic 揭露 4 個與 REVSTEALER 相關的持久化模組，其中一個會停用 Windows Update 與 Defender 以執行挖礦程式。"
pubDate: 2026-09-06
tags: [CISO, 每日摘要, 資安, StyleSmuggler, Magento, Adobe-Commerce, 零日漏洞, JetBrains, TeamCity, CVE-2026-63077, MikroTik, RouterOS, VMware, CVE-2026-59346, Trezor, ShipMonk, CVE-2026-72898, REVSTEALER]
author: "Security Solutions Team"
featured: true
---

## 未修補的 Magento 零日漏洞「StyleSmuggler」在商店伺服器植入後門

荷蘭電子商務資安公司 **Sansec** 於 9 月 5 日發布公告，揭露 **Magento Open Source** 與 **Adobe Commerce** 存在一個未授權即可利用的新漏洞，攻擊者不需登入就能在商店伺服器上執行任意程式碼並安裝持久性後門——Sansec 將它命名為 **StyleSmuggler**，並警告攻擊自 **9 月 4 日** 就已開始：「商店正在被入侵，所以我們提前公開。」截至 9 月 6 日，**Adobe 尚未發布任何公告、CVE 編號、修補程式或應變措施**，其安全性公告索引停留在 8 月 11 日的更新。

Sansec 表示 **所有現行版本皆受影響，包括 2.4.9**，並已在乾淨的 2.4.7、2.4.8、2.4.9 安裝環境重現完整的未授權攻擊鏈。第一個受害商店執行的是 **2.4.6-p15，且已安裝 Adobe 2026 年 7 月與 8 月的安全性更新**——已是該版本線最新的修補層級，顯示修補與否並不影響被入侵。代管業者 **Disrex Group** 協助處理兩家受害商店，證實其中一家是 **Sansec Shield 客戶（Store A，Magento 2.4.8），Shield 模組安裝、啟用且授權正常，仍在 9 月 4 日 23:10 UTC 遭入侵**——比 Sansec 第一版防堵規則上線還早數小時；另一家（2.4.7-p2，落後 8 個修補層級）則在 9 月 5 日 00:55 UTC 被攻擊。植入的後門偽裝成合法的 Linux 核心執行緒名稱 **`[kworker/u:8:0]`**，在 `~/.local/share/.gvfsd/gvfsd-user` 安裝約 1.9 MB、以 Rust 靜態編譯的 stripped 執行檔（支援 x86-64 與 arm64），並透過直接寫入 crontab spool 檔的方式每 5 分鐘重新啟動——其中一家商店的 cron 列重複出現 **1,728 次**，刪除後 1 秒內即被加回。另一家商店的後門完全不對外連線，卻對本機 Redis 建立了 **28 條連線**，直接讀取 Magento 的工作階段資料。Sansec 的暫時緩解建議是停用 GraphQL；Disrex 指出無頭式（headless）與 PWA 商店前端仰賴 GraphQL，無法直接停用。Adobe 下一次例行安全性更新排定 **9 月 8 日**，目前未知是否涵蓋此漏洞。

### 這對電商平臺安全的深遠影響

這起事件打破了「已修補、有防護的商店就是安全」的假設：第一個受害者已處於最新修補層級，且其中一家受害商店執行的是啟用中的商用防護模組。同時也凸顯應變時間的不對稱——攻擊者在漏洞曝光數小時內就開始行動，而 Adobe 的修補節奏是按月排程；後門的持久化設計更鎖定營運盲點：偽裝核心執行緒名稱、把執行檔藏在網頁根目錄之外、直接寫 spool 檔繞過 crontab 變更紀錄，並讀取 Redis 工作階段——這些都可能成為後續竊取客戶帳號或付款資料的跳板。對採用 Magento 或 Adobe Commerce 的企業而言，暫時停用 GraphQL 的緩解措施與無頭式電商架構相互衝突，這已不只是資安決策，而是營運決策。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/unpatched-magento-and-adobe-commerce.html)

---

## 本週活躍威脅

📌 **JetBrains 因自家未修補的 TeamCity 遭入侵——Cadence 憑證與 AWS 金鑰外洩**
JetBrains 披露，不明攻擊者在 **8 月 8 日至 24 日** 之間利用 **CVE-2026-63077**（CVSS 9.8，TeamCity 反序列化漏洞；8 月 5 日列入 CISA KEV，本部落格 8 月摘要已報導）入侵 **Cadence**——該公司代管的雲端運算服務，讓開發者透過 PyCharm 外掛在雲端 GPU 上執行機器學習等工作負載。已確認遭到存取或竊取的資料包括：個人資料（使用者名稱、真實姓名、電子郵件、最後登入時間與 IP）、**內含憑證的 2024 年 Cadence 伺服器完整備份**、**多組 AWS IAM 使用者與憑證（含 JetBrains 員工帳號）**、JetBrains AWS 帳戶內 S3 儲存桶的檔案，以及 PyCharm 使用者同步至該伺服器的專案原始碼。遭入侵的伺服器（api.cadence.jetbrains.com）已下線；JetBrains 坦承該伺服器「本應」在其自身的漏洞應變流程中完成修補。JetBrains 要求所有 Cadence 使用者立即撤銷並輪替憑證，並將先前的執行內容視為不可信。觀察到的入侵指標 IP：150.109.230.104、43.153.227.206、62.210.127.48、210.247.242.190、15.235.225.205、152.233.30.18。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/attackers-breached-jetbrains-cadence.html)

📌 **CERT Polska：暴露於網際網路的 MikroTik RouterOS SSH 可被未經認證接管**
CERT Polska 於 9 月 5 日發布攻擊警告：攻擊者可透過可從網際網路存取的 SSH 服務，**在未經認證的情況下取得 MikroTik 路由器的完整管理權限**；已知攻擊最早可追溯至 **9 月 2 日**。目前尚無受害者數量或攻擊者身分的公開統計。已修補版本：RouterOS **6.49.21**、**7.23.4**（長期支援頻道建議升級至 **7.23.5**，該版本同時修復 7.23.4 引入的 IPv6 DHCP 迴歸問題）、**7.24.2**，以及開發頻道的 7.25beta3。家用裝置的預設防火牆規則會阻擋對管理埠的公開存取；企業或 ISP 部署的 MikroTik 設備應盤點暴露面，並檢查是否有未經授權的設定變更。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/attackers-hijack-mikrotik-routers.html)

📌 **VMware Workstation 與 Fusion：CVE-2026-59346（CVSS 9.3）與 CVE-2026-59347（CVSS 8.1）**
Broadcom 修補 **VMware Workstation 與 Fusion 25H2、26H1** 的兩個「來賓突破至主機」漏洞。**CVE-2026-59346** 為整數溢位漏洞：在虛擬機內具本機管理權限的攻擊者可透過 **VMXNET3 虛擬網路卡** 在主機上執行任意程式碼；**CVE-2026-59347** 為 **HGFS** 的堆疊型緩衝區溢位，可在主機上以 VMX 處理程序身分執行程式碼（由騰訊玄武實驗室回報）。兩者皆需先取得虛擬機內的本機管理權限——可能經由釣魚或設定鬆散等其他入侵途徑達成。修補程式已隨 **Workstation 26H1u1 與 Fusion 26H1u1** 發布；無任何緩解替代方案，目前尚無野外利用證據，但繼上個月 vCenter CVE-2026-59309／CVE-2026-59310 橫跨 47 國的攻擊活動之後，VMware 產品仍是攻擊者的重點目標。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/critical-vmware-workstation-and-fusion.html)

📌 **Trezor：ShipMonk 外洩事件再波及 67,000 名美國客戶——那些聲稱已刪除的資料**
Trezor 於 9 月 5 日披露，物流合作夥伴 **ShipMonk** 的資料外洩事件再影響 **67,000 名美國客戶**：外洩資料涵蓋 **2019 年 11 月至 2021 年 8 月** 訂單的姓名、電子郵件、電話、寄件地址與訂單編號，加上 8 月公布的 **13,689 名** 客戶。Trezor 表示曾多次收到 ShipMonk 依合約、資料政策刪除資料的書面保證，結果資料根本沒有刪除。ShipMonk 於 **8 月 10 日** 通知 Trezor 遭未授權存取；此入侵源自 Metabase SQL 注入零日漏洞 **CVE-2026-72898（CVSS 10.0）** 的利用，Holborn 認為背後是 **ShinyHunters** 勒索集團。硬體錢包本身不受影響，但 Trezor 警告外洩資料可能被用於釣魚郵件、假冒詐騙電話，甚至衍生實體人身安全風險。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/trezor-says-shipmonk-breach-exposed.html)

📌 **REVSTEALER：4 個持久化模組，其中一個會停用 Windows Update 與 Defender 執行挖礦**
**Elastic Security Labs** 記錄了與 **REVSTEALER**（約 2026 年 2 月起販售的商業 Windows 竊密程式，竊取資料後會自我刪除）相關的 4 個先前未公開程式：**ProManager**（錢包覆蓋層釣魚與密碼紀錄）、**WinUpdate**（置換剪貼簿中的加密貨幣位址並竊取助記詞）、**SoftManager**（將受害機器變成反向代理），以及 **LockAppHost**——它濫用 Windows CMSTP 工具取得管理員權限，加入 Defender 排除資料夾、**停用 5 個 Windows Update 服務、11 個排程更新工作與 2 個惡意軟體移除工作**，再把挖礦程式藏進合法的 Windows 處理程序；即使挖礦程式被發現，被削弱的防禦也不會復原。REVSTEALER 主要透過 **至少 17 個遭劫持的 YouTube 頻道** 推廣遊戲外掛誘餌、盜版軟體，以及一個冒用 Anthropic 品牌的假 **「Claude Opus 5 Free Desktop」** 應用程式散播（Anthropic 本身並未被入侵）。Elastic 並指出其具備沙箱偵測、間接系統呼叫，以及以 Polygon 智慧合約作為備援 C2 等特性。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/four-revstealer-linked-modules-disable.html)

---

## OPSWAT 可以怎麼幫上忙

今日的主動威脅多為檔案型態：StyleSmuggler 的後門以執行檔形式植入商店伺服器，REVSTEALER 藉由假安裝程式、盜版軟體與遊戲外掛壓縮檔散播，兩者都濫用受信任的上傳與下載管道。**MetaDefender 多引擎掃描** 以 30+ 防毒引擎檢查執行檔、壓縮檔與安裝程式，在木馬化或植入後門的檔案抵達伺服器或端點前將其攔截；**MetaDefender Deep CDR（內容淨化與重建）** 則清除經由電子郵件與網頁上傳的檔案中的主動內容，縮小此類檔案上傳與供應鏈攻擊的影響範圍。
