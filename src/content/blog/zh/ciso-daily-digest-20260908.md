---
title: "CISO 每日摘要：N-able N-central 漏洞鏈傳遭實際利用，Huntress 還原客戶入侵事件 (20260908)"
description: "資安公司 Huntress 在 9 月 4 日客戶入侵事故中還原攻擊鏈，指向 N-able N-central 身分驗證繞過漏洞 CVE-2026-86206／CVE-2026-86207，並警告滿分漏洞 CVE-2026-86218 恐同遭利用；Blockstream 側鏈 Liquid 遭駭客利用 Elements 程式碼缺陷盜走近 4,000 枚比特幣（約 3.2 億美元），事後歸還 3,400 枚；Adobe 修補遭實際利用的 Magento 零時差漏洞 StyleSmuggler（CVE-2026-75650，CVSS 10.0）；Keycloak 密碼重設漏洞 CVE-2026-18963（CVSS 9.1）恐導致帳號遭接管。"
pubDate: 2026-09-08
tags: [N-able, N-central, CVE-2026-86206, CVE-2026-86207, CVE-2026-86218, Huntress, 遠端管理, Liquid, Blockstream, Elements, Magento, CVE-2026-75650, StyleSmuggler, Keycloak, CVE-2026-18963, All-in-One-WP-Migration, CVE-2026-19949, OpenVPN, FreeIPA, CVE-2026-76578, PEEP, ValleyRAT, Coder, PREY-0058, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## N-able N-central 漏洞鏈遭實際入侵利用，Huntress 還原客戶端攻擊路徑

N-able 的 **N-central** 遠端管理（RMM）平臺昨天才因為發布 **CVE-2026-86218**（CVSS v4.0 **10.0** 滿分）的 Hotfix 4 更新而登上本摘要，今天的重點則是有實際入侵證據：**Huntress** 表示，他們在 **9 月 4 日** 調查客戶 N-central 遭入侵的事故時，還原出一條與 **CVE-2026-86206**（CVSS v4.0 6.9）及 **CVE-2026-86207**（CVSS v4.0 7.7）串連利用一致的攻擊鏈；這兩項身分驗證繞過漏洞，N-able 已在同一天發布的 **2026.3 Hotfix 3（2026.3.1.13）** 中修補，時間僅比 Hotfix 4 早數小時。Huntress 警告，這三項漏洞（包括 CVSS 10.0 的遠端程式碼執行漏洞）疑似都已被利用。

依 N-able 的公告，這兩項繞過漏洞可讓未經授權的攻擊者繞過身分驗證機制，取得企業內部部署之 N-central 系統的 **完整存取權限**。Huntress 強調，這條攻擊鏈與 8 月修補的 **CVE-2026-18556／CVE-2026-18577** 完全不同；不過由於受害系統留存的事件紀錄有限，他們無法確認攻擊者就是利用這兩項漏洞得逞，也不排除其他漏洞的可能性。事故中觀察到的入侵指標包括：攻擊者在建立使用者帳號時，於已知的 N-able 電子郵件信箱加入 `.invalid` 等非預期字串，並嘗試探測具有特定應用系統 ID 的端點，藉此掌握受害組織的網路環境。

### 這對遠端管理（RMM）平臺安全治理的深遠影響

- **RMM 伺服器集中了高權限：** 遭入侵的 N-central 是整個受管環境的管理中樞，平臺本身就是攻擊者的首要目標；Huntress 自 8 月起持續追蹤 N-central 入侵事件，本週已是連續第二週出現新 CVE 伴隨實際或疑似利用。
- **修補節奏與攻擊證據正面交鋒：** 三項漏洞在 9 月 5 日數小時內接連揭露並修補（Hotfix 3 與 Hotfix 4），同時又有實戰還原的攻擊鏈，防禦方只能在僅有廠商指引的情況下快速應變。
- **跡證不全才是常態：** 受害環境的紀錄不足，導致無法確認確切的入侵途徑——這也提醒我們，RMM 的稽核紀錄本身正是攻擊者繞過或清除的目標。

🔗 **參考資料：** 綜合報導（[Huntress 部落格](https://www.huntress.com/blog/n-able-vulnerability-exploitation)、[iThome：疑似遭利用](https://www.ithome.com.tw/news/178768)、[iThome：一天兩次更新](https://www.ithome.com.tw/news/178763)）

---

## 本週活躍威脅

📌 **Blockstream 側鏈 Liquid 遭利用 Elements 程式碼缺陷盜走近 4,000 枚比特幣（約 3.2 億美元），事後歸還 3,400 枚**

攻擊者在 **9 月 6 日** 利用 Liquid Network 底層開源軟體 **Elements** 的程式碼邏輯缺陷，在側鏈上憑空製造出 4,000 枚沒有真實資產支持的 **L-BTC**，再透過授權交易平臺 **SideSwap** 發起跨鏈贖回；系統誤判這批代幣為合法資產而自動執行贖回，使攻擊者未取得任何私鑰，就提領了聯盟錢包約 **4,200 枚比特幣儲備的 95%**（當時市值約 3.2 億美元）。自稱白帽駭客的攻擊者透過比特幣主鏈的 **OP_RETURN** 訊息與 Blockstream 團隊對話，並在 **9 月 7 日** 歸還 **3,400 枚（約 85%）**；約 598.5 枚（約 4,700 萬美元）仍未歸還，Blockstream 也未證實雙方達成協議。Liquid 網路目前仍暫停運作，L-BTC 持有者暫時無法贖回。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/liquid-hackers-return-3400-bitcoin.html) | [iThome](https://www.ithome.com.tw/news/178770)

📌 **Adobe 緊急修補遭實際利用的 Magento 零時差漏洞 StyleSmuggler——CVE-2026-75650（CVSS 10.0）**

Adobe 已修補 **Adobe Commerce／Magento Open Source** 的零時差漏洞，也就是 9 月 6 日摘要的主角：**CVE-2026-75650**（CVSS 10.0），Sansec 命名為 **StyleSmuggler**，漏洞源自 Magento 範本系統的 PHP 程式碼注入，攻擊者可藉由觸發「Payment Transaction Failed Reminder」付款失敗通知郵件來執行任意程式碼。該漏洞自 **9 月 4 日** 起遭實際利用，攻擊者部署的酬載包括 **Rust 後門** 與 **PHP Web Shell**；受影響版本涵蓋 Commerce 2.4.4 至 2.4.9（2026-aug 及更早版本）與 Commerce B2B 1.5.2／1.5.3-2026-aug 及更早版本。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/adobe-patches-magento-zero-day.html)

📌 **Keycloak 密碼重設流程狀態管理缺陷，攻擊者可接管任意帳號——CVE-2026-18963（CVSS 9.1）**

Keycloak 密碼重設流程存在狀態管理缺陷，攻擊者可透過特製請求讓流程直接進入修改密碼階段，**繞過原本寄送至使用者信箱的驗證連結**，直接重設包括管理員在內的任意帳號密碼。漏洞同時影響上游 Keycloak 與 **Red Hat Build of Keycloak（RHBK）**；修補版本為 Keycloak **26.7.2**、RHBK **26.4.15／26.6.6**，Red Hat 建議無法立即升級的用戶暫時停用「Forgot password」功能。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178764)

📌 **FreeIPA 兩漏洞鏈結，從未登入的匿名用戶也能建立管理員身分——CVE-2026-76578（CVSS 9.8）**

Red Hat 揭露 FreeIPA（其 Identity Management 產品）的重大漏洞鏈：允許使用者管理自身 OTP token 的存取控制規則（ACI）不要求用戶先登入，也未限制可一併寫入的內容；而 **389 Directory Server** 的另一個缺陷以純文字比對客戶端名稱與儲存值，未登入用戶的空名稱恰好符合空的儲存值。於是 **從未登入過** 的客戶端也能在目錄中建立自己指定的 Kerberos 身分，並進入 **管理員群組**。Red Hat 在預設安裝環境中重現兩次攻擊鏈，將此漏洞追蹤為 **CVE-2026-76578**（重大，CVSS 9.8，初步評分），FreeIPA 專案已在 **4.13.4** 版修補。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/freeipa-flaw-chain-lets-anonymous.html)

📌 **WordPress 備份外掛 All-in-One WP Migration 存在 SQL 注入漏洞，數百萬網站恐遭接管——CVE-2026-19949（CVSS 8.8）**

**Wordfence** 公布安裝量超過 **500 萬** 的 WordPress 備份與搬移外掛 **All-in-One WP Migration and Backup** 存在高風險 SQL 注入漏洞。未經授權的攻擊者可先對公開文章發送特製的 trackback 請求，讓惡意資料存入資料庫但暫時不會作用；等到管理員建立備份並透過該外掛匯入時，外掛改寫 URL 與資料表前綴的過程會把這筆資料變成可執行的 SQL，將外掛的 `ai1wm_secret_key` 寫入公開可見的留言中。攻擊者再透過 WordPress REST API 的公開留言端點取得金鑰，匯入內含 must-use 惡意外掛的 `.wpress` 封存檔，即可取得遠端程式碼執行能力與網站完整控制權。開發商 ServMask 已於 **8 月 20 日** 釋出修補版本 **7.110**，但截至 9 月初僅約 35% 用戶完成更新，估計仍有約 **320 萬個網站** 暴露在風險中。

🔗 **參考資料：** [Xakep](https://xakep.ru/2026/09/08/all-in-one-wp-migration/) | [iThome 資安日報](https://www.ithome.com.tw/news/178775)

📌 **OpenVPN 修補 8 個漏洞，含服務阻斷與 Windows 二進位植入攻擊——請升級至 2.7.7**

OpenVPN 的 9 月公告涵蓋 **8 項漏洞**，其中 3 項為高風險，影響 2.6.22、2.7.6 與更早版本，用戶應升級至 **2.7.7**。最嚴重的是 **CVE-2026-84732**（CVSS 8.7），問題位於軟體核心可靠性層的 TLS 逾時處理與封包確認機制，遠端攻擊者可藉由特製封包造成服務阻斷；**CVE-2026-84226**（CVSS 8.5）則是 Windows 版 **tapctl** 工具的檔案路徑管理缺陷，本機低權限攻擊者可藉此發動二進位植入攻擊並執行惡意程式碼。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178767)

📌 **HPC 排程器 Slurm 修補 8 項漏洞，雲端 AI 與 HPC 叢集需更新節點——含 CVE-2026-65107**

SchedMD 釋出 **26.05.4、25.11.8 與 25.05.9**，共修補 **8 項漏洞**。**CVE-2026-65107** 位於負責把工作檔案傳送到運算節點的 **sbcast** 工具：共享函式庫可能在傳送時略過憑證驗證，特製檔案名稱也可能造成節點上的 `slurmd` 服務崩潰；Google Cloud 已針對此漏洞發布 Cluster Toolkit 資安公告，AWS 也確認 **ParallelCluster 3.16.0 及更早版本** 受同批漏洞影響。其他已修補漏洞包括：**CVE-2026-65140**（帳務資料庫權限提升，具操作員權限者可修改管理員帳號）、**CVE-2026-65109**（OCI 容器清理流程可能刪除暫存目錄以外的檔案）、**CVE-2026-65138**（處理異常遠端程序呼叫資料時可能越界讀取記憶體或造成 slurmd 崩潰）。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178766)

📌 **PostGREShell 漏洞細節全公開：PostgreSQL 邏輯解碼缺陷可提升至超級使用者並持久潛伏（更新）**

Cyera 針對 **CVE-2026-6471**（CVSS 7.2）發布完整技術細節——這項 PostgreSQL 邏輯解碼漏洞已在 9 月 5 日摘要報導過修補消息——進一步指出，具 **REPLICATION** 複寫權限的非超級使用者帳號不只可以資料庫服務的作業系統帳號執行任意程式碼，還能 **提升為資料庫超級使用者**、修改連線控制與啟動設定，並建立重新啟動後仍會載入的 **持久後門**。受影響的支援中版本為 PostgreSQL 14 至 18，修補版本分別為 **14.24、15.19、16.15、17.11 及 18.6**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178756)

📌 **PEEP 後門偽裝書籤擴充套件潛伏 Chrome 與 Edge，可跨出瀏覽器執行系統命令**

**SOCRadar** 揭露入侵後控制工具 **PEEP**：它偽裝成「Smart Bookmarks」書籤擴充套件（ID `ejkndncpkdcjcikfhiamcdehdoegilbj`）直接植入 Chrome／Edge 設定檔，安裝程式會 **重算 Chromium 的 Secure Preferences 完整性驗證值**，讓惡意擴充套件避開官方商店檢查與安裝提示。擴充套件會竊取 Cookie、瀏覽紀錄與開啟分頁，每 **30 秒** 以明文 HTTP 向命令控制伺服器（`206.237.30[.]232`、`xfjcc[.]fun`）輪詢指令，並透過 Chromium 原生訊息功能呼叫主機端程式，以目前登入使用者權限執行檔案操作與系統命令。PEEP 以開源框架 **RedExt**（先前與 GlassWorm 攻擊有關）為基礎，程式碼含中文字串跡證，本身不提供初始入侵途徑。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/peep-turns-chrome-and-edge-into-post.html) | [iThome](https://www.ithome.com.tw/news/178779)

📌 **後門程式 ValleyRAT 藉由經簽署的廣告軟體散布，假冒釘釘、會議軟體與 Chrome 安裝程式**

**卡巴斯基** 揭露新一波 ValleyRAT（**Winos 4.0**）攻擊：駭客假冒阿里巴巴 **釘釘（DingTalk）**、騰訊線上會議軟體與 Chrome 的安裝程式散布，開啟後都會一併部署被竄改的中國桌布管理工具 **QN Wallpaper**；這款廣告軟體本身具備 **合法簽章**，且使用者常為了避免功能被封鎖而將其加入防毒軟體排除清單，駭客正是利用這點，以 **DLL 側載** 方式載入惡意程式碼。卡巴斯基今年偵測到的 ValleyRAT 相關活動超過 **10 萬次**，至少 **1,500 名使用者** 受影響，主要集中在中國與印度，攻擊者可能就是長期散布 ValleyRAT 的中國駭客組織 **Silver Fox**。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178778)

📌 **開發工具平臺 Coder 模組 Registry 遭劫持：合法網域一度提供能竊密的惡意 Terraform 模組**

**Coder** 揭露其模組 Registry 遭入侵：攻擊者取得 Coder 在 Cloudflare 上的基礎設施存取權，把未授權 IP 位址加入 `registry.coder.com` 的伺服器位址池，使部分使用者在 **8 月 31 日 07:35 至 21:45 UTC** 從合法 Coder 網域下載到遭植入竊密程式的 **Terraform 模組**，竊取的憑證會被傳送到仿冒 Coder 網域的外部伺服器。依惡意模組的執行時機，可能外洩的資料包括工作區服務的環境變數與機密、**OIDC 權杖、SSH 金鑰** 及外部身分驗證服務的一次性權杖；若服務與 Coder 主服務共同運作，資料庫密碼等組態也可能暴露。Coder 未發現公司保存的客戶資料受影響，並要求可能受影響的部署清除已下載的 Terraform 模組快取後升級至修補版本。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178760) | [Xakep](https://xakep.ru/2026/09/07/coder-stealer/)

📌 **「PREY-0058」：假 IT 支援電話與 AiTM 權杖竊取鎖定高階主管的 Microsoft 365 帳號**

**Arctic Wolf** 揭露代號 **PREY-0058** 的大規模資料竊取與勒索威脅叢集：攻擊者透過 **IT 客服電話釣魚（vishing）**、中間人（AiTM）權杖竊取與住宅代理登入，鎖定 Microsoft 365 等 SaaS 服務，受害者以總監、副總裁等高階主管為主。該行動與 Mandiant 追蹤的 **UNC6671** 有顯著手法重疊；Arctic Wolf 並評估資料勒索集團 **Cinder** 很可能是 **Pink** 的再次改名或延續（兩者在洩密網站列出的組織高度重疊），但也提醒這些標籤對應的是一群鬆散的關聯成員，而非單一已證實的攻擊者。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/microsoft-365-attackers-use-help-desk.html)

📌 **上櫃公司富爾特子公司格帝控股遭勒索軟體攻擊，ERP 等系統一度無法運作**

上市公司 **富爾特（6136）** 於公開資訊觀測站發布重大訊息：**9 月 7 日** 旗下子公司 **格帝控股** 部分伺服器遭勒索病毒攻擊，導致 ERP 等資訊系統無法正常運作。公司表示資安團隊偵測到異常後已啟動防禦機制並斷網隔離，受影響系統正陸續復原，初步評估對整體營運與財務不致有重大影響。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178762)

---

## OPSWAT可以怎麼幫上忙

今天多起攻擊都與檔案有關：經簽署的竄改安裝程式（ValleyRAT）、從合法網域下載的惡意 Terraform 模組（Coder），以及內藏 must-use 惡意外掛的 `.wpress` 備份封存檔（All-in-One WP Migration）——只要一個惡意檔案通過檢查，就可能釀成入侵。**MetaDefender** 系列產品結合多引擎掃描與內容淨化與重建（CDR），可在檔案、模組、封存檔或文件進入端點與 CI/CD 流程前，先行清除其中夾帶的威脅。
