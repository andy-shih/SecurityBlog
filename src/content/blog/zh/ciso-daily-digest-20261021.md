---
title: "CISO 每日摘要：八組 eMudhra 憑證授權中心金鑰遭盜，觸發瀏覽器和軟體緊急修復 (20261021)"
description: "2026 年 10 月 20 日出現兩起重大安全事件：一起是由於有缺陷的金鑰儀式導致加密弱點而造成的八個 eMudhra CA 中間金鑰盜取的基礎 PKI 故障，促使所有主要瀏覽器和運行時信任存放區緊急撤銷；另一起是新型攻擊活動，自主 AI 代理入侵超過 100 個組織的 1,200 多個目標網站，展示了利用暴露的 AI 代理控制面板進行低成本、可擴展攻擊自動化。"
pubDate: 2026-10-21
tags: ["cybersecurity","threat-intelligence","ciso-daily","pki","certificate-authority","ai-agents","autonomous-attacks","supply-chain"]
author: "Security Solutions Team"
featured: true
---

## 八組 eMudhra 憑證授權中心金鑰遭盜，觸發瀏覽器和軟體緊急修復

由於 2025 年 4 月金鑰儀式期間隨機性不足，導致八個 eMudhra 中間憑證授權中心憑證的私密金鑰遭到盜取，任何人皆可從公開憑證計算這些金鑰。Mozilla 和 Google Chrome 根程式於 2026 年 10 月 20 日確認此次盜取事件，研究人員於 10 月 17 日回報。受影響的憑證包括六個 TLS 中間憑證（域驗證、組織驗證和擴展驗證）及兩個代碼簽署中間憑證，全部由 Sectigo 交叉簽署。

Chrome 在收到報告後數小時內透過 CRLSet 更新封鎖了這六個 TLS 中間憑證，Mozilla 則向 Firefox 推送了 OneCRL 封鎖。Apple、Microsoft、Android 和其他信任存放區也撤銷了信任。Go、Python certifi、NSS、Rust webpki-roots、Homebrew ca-certificates 和 Composer ca-bundle 發布了修復，要麼封鎖這些特定金鑰，要麼將受損根憑證從信任套件組合中移除。Cloudflare 更新了其 WARP 和 1.1.1.1 用戶端。未發現過去濫用的證據，但檢測僅限於憑證透明度日誌。

Mozilla 從 NSS 移除了 emSign ECC Root CA-G3，Chrome 計劃於 10 月 27 日前從其根存放區移除它，要求使用該層級的網站運營商遷移。eMudhra 表示僅有一個中間憑證部署到生產環境，沒有任何中間憑證簽發終端實體憑證，並將缺陷歸因於儀式期間的金鑰包裝/解包錯誤。該公司面臨聲譽受損，並正在提供替換憑證，同時根程式正在調查。

### 對 CISO 的影響

- **審計並加強 PKI 依賴項的信任存放區管理 —** 立即盤點所有依賴 eMudhra/emSign 憑證鏈的系統，並在 Chrome 於 10 月 27 日移除根之前，遷移到不受影響的 CA。驗證內部應用程式、IoT 裝置和第三方服務是否正確處理 CRL/OCSP 撤銷，或是否已更新信任套件組合（Go 1.27.3/1.26.10、Python certifi 2026.10.19、Node.js 待定）。測試互換 TLS、容器映像以及可能無法接收自動更新的舊版系統中是否存在中斷。
- **偵測並預防由 AI 驅動的自主攻擊基礎架構 —** 部署網路掃描以偵測暴露的 AI 代理控制面板（通常在連接埠 8000），並實作異常自動化網路流量模式的出口監控，以符合 AI 驅動偵察（快速連續請求、多樣化使用者代理、憑證測試）。整合 Cairn 框架指標和已知惡意操作者基礎架構的威脅情報。實施針對常見 CMS/電子商務平台自動化攻擊鏈的 WAF 規則。
- **保護 AI/ML 工具和滲透測試工件 —** 為所有內部 AI 代理框架（Cairn、Claude Code、DeepSeek 整合）和滲透測試平台實施身份驗證和網路分段。立即審計紅隊/滲透測試參與，以偵測暴露的控制面板或洩漏的憑證。在 CI/CD 和工件儲存庫中實施密碼掃描，以偵測透過受損代理面板暴露的金鑰。為所有進攻性安全工具實施 MFA 和零信任存取。

**參考來源:** [Eight eMudhra CA Keys Compromised, Triggering Emergency Fixes Across Browsers and Software](<https://thehackernews.com/2026/10/eight-emudhra-ca-keys-compromised.html>)

---

## 本週活躍威脅

📌 **駭客利用自主 AI 代理攻擊公司網站，目標超過 1,200 個網站**

中文威脅行為者透過開放原始碼 Cairn 架構，使用自主 AI 代理攻擊超過 1,200 個公司網站，並入侵超過 100 個組織，其中包括 Deere、SharkNinja 和 Cummins。這些代理是由研究者 Snorre Fagerland 發現的暴露 Cairn 控制面板操控，NorForge 成功率約 10%，平均入侵時間低於 23 小時，每項任務估計成本 5 美元。攻擊鏈因受害者而異，利用不安全的 PHP 物件處理、memcached 工作階段寫入權限以及過時的 Zend Framework 程式碼等問題。暴露的面板也洩露了受害者環境中的數百個有效憑證和金鑰，有些合法滲透測試公司將客戶數據留在未受保護的實例上。防禦者應掃描連接埠 8000 上的暴露代理面板，監控意外的檔案上傳表單，並確保為 CVE-2026-75650 安裝 Magento 修補程式。

**參考來源:** [Hackers Use Autonomous AI Agents to Breach Company Websites, Target Over 1,200 Sites](<https://thehackernews.com/2026/10/hackers-use-autonomous-ai-agents-to.html>) 

---

📌 **FortiSIEM 重大漏洞釋出未經認證遠端程式碼執行公開概念驗證**

研究人員釋出 CVE-2026-106173 的公開概念驗證，這是 FortiSIEM 中的嚴重路徑遍歷漏洞，CVSS 評分為 9.4，允許未經認證的攻擊者透過 TCP 埠 27918 的 gRPC 服務寫入任意檔案以達成遠端程式碼執行。Horizon3.ai 指出，gRPC QueryResultReq 處理程序未正確驗證不可信元資料，可啟用目錄遍歷序列與 null byte 注入，覆蓋現有檔案（例如每 60 秒由 cron 執行的 Redis 健康檢查腳本）。Fortinet 已在 FortiSIEM 7.5.1 與後續版本修補該漏洞；FortiSIEM 7.6 未受影響，而 FortiSIEM 7.5.0 客戶應升級至 7.5.1 或更高版本。

**參考來源:** [Critical FortiSIEM Flaw Gets Public Exploit PoC for Unauthenticated Remote Code Execution](<https://thehackernews.com/2026/10/critical-fortisiem-flaw-gets-public.html>) 

---

📌 **JPCERT/CC 週報涵蓋多家廠商漏洞，包含主動被利用的缺陷**

JPCERT/CC 的 10 月 21 日週報摘要了微軟、Juniper、BeyondTrust、Adobe、Cisco、Ivanti、Palo Alto Networks 與 Fortinet 等廠商 24 款產品的安全通報。多個條目標註確認遭利用：BeyondTrust Remote Support 身份驗證繞過 (BT26-05)、Cisco Secure Email Gateway 任意檔案寫入、Ivanti Connect Secure 身份驗證繞過 (CVE-2026-104935)、Nextcloud Collabora Online CODE Server、SiteGuard Server Edition 作業系統指令注入，以及微軟 10 月補強日漏洞。JPCERT/CC 另發布針對日本連續未授權存取事件的調查，發現攻擊者利用 AI 自動化從多台面向網際網路的伺服器進行漏洞掃描與 API 攻擊，目標涵蓋日本與非日本網站服務。文中並指出 Next.js CVE-2026-96889 與 GitLab CVE-2026-97229 的概念驗證程式碼已公開。

**參考來源:** [Weekly Report: Microsoft Edgeに複数の脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261021.html>) 

---

📌 **PHP 為兩項關鍵遠端程式執行漏洞發布緊急補丁，研究人員稱為 PHP2Shell**

PHP 於 10 月 21 日針對兩項嚴重遠端程式執行漏洞 (CVE-2026-109618 與 CVE-2026-109619) 發布非定期安全更新，兩者 CVSS 評分為 9.2，研究人員將兩者合稱為 PHP2Shell。僅四個受支援分支 (8.2 至 8.5) 獲得修補；8.1 及舊版本已達供應商生命週期終止，無補丁可用。截至發布時尚未回報主動利用，但揭露後隨即出現利用嘗試。約 884,000 台面向網際網路的主機透過 Shodan 橫幅回報執行 PHP 8.1 或舊版。組織應盤點所有 PHP 安裝，包含捆綁設備與控制台，優先補丁面向網際網路的系統，並參照 CERT-EU 指引考慮將未補丁之面向網際網路應用程式隔離。建議監控 PHP 程式產生殼程式或下載工具的行為。

**參考來源:** [PHP2Shell: Two Unpatched Critical PHP RCE Flaws \(CVSS 9.2\) Trigger Emergency Security Alert](<https://thehackernews.com/2026/10/php2shell-two-unpatched-critical-php.html>) 

---

📌 **攻擊者利用遭竊 UpdraftCentral 金鑰在 WordPress 網站植入後門**

威脅行動者於 10 月 17-18 日入侵 TeamUpdraft 網站，取得客戶的 UpdraftCentral、UpdraftVault 與 UpdraftClone 連線金鑰。攻擊者使用有效金鑰，透過 UpdraftCentral RPC 通道發出 plugin.upload\_plugin 指令，於 10 月 18-19 日的 18 小時視窗內，在連線的 WordPress 網站安裝後門外掛。該後門會建立隱藏管理員帳戶（例如 data-ops43），且在移除外掛後仍會持續存在。TeamUpdraft 發布 UpdraftPlus 1.26.13/2.26.13，自動斷開 10 月 18 日之前的金鑰，輪替所有憑證，並通知英國 ICO。網站所有者應更新 UpdraftPlus、斷開並重新連線 UpdraftCentral、稽核管理員帳戶與外掛是否存在妥協指標（列出的外掛名稱、帳戶名稱與 IP 位址），若確認遭妥協則從 10 月 17 日之前的備份還原。這是五個月內第二起 UpdraftCentral 供應鏈事件，前一起為 6 月的 CVE-2026-10795。

**參考來源:** [Attackers Abuse UpdraftCentral Keys to Plant Backdoors on WordPress Sites](<https://thehackernews.com/2026/10/attackers-abuse-updraftcentral-keys-to.html>) 

---

📌 **Qilin 與 INC 勒索軟體組織利用 Palo Alto Networks 漏洞繞過 MFA**

Palo Alto Networks 繼續觀察到 CVE-2026-0257 的利用，這是一個影響 PAN-OS 與 Prisma Access 的已修補認證繞過漏洞，允許非授權的 VPN 連線。Qilin 與 INC 勒索軟體操作者利用此漏洞取得初始存取並繞過 MFA，隨後進行 RMM 偵察、透過 RDP 與 SMB 進行橫向移動、憑證擷取、資料外洩與勒索軟體部署。在一起案例中，攻擊者轉向 vCenter、停用 ESXi 安全控制，並從虛擬控制器磁碟擷取網域憑證，繞過內賓 EDR。受影響產業包括教育、金融服務、醫療保健、高科技、餐旅、製造、專業與法律服務、政府、運輸與物流、公用事業與能源，以及零售。

**參考來源:** [Qilin and INC Ransomware Groups Exploit Palo Alto Networks Flaw to Bypass MFA](<https://thehackernews.com/2026/10/qilin-and-inc-ransomware-groups-exploit.html>) 

---

📌 **前 OpenAI 工程師因隱藏錄音機與沙烏地關係遭羈押**

Dark Reading 報導，前 OpenAI 工程師 Abdulrahman Alfozan 被下令羈押，涉嫌於 9 月 28 日前在行政會議室安裝隱藏錄音設備，錄音至少持續至 10 月 5 日，另一台設備在遺留於 OpenAI 的袋子中被發現。他面臨非法攔截口頭通訊的重罪指控，最高可判五年有期徒刑。檢察官指出，他頻繁聯繫一名沙烏地皇室成員並被勸加入沙烏地 AI 計畫、持有前往利雅德的單程機票，且其妻子與嬰兒在 10 月 9 日逮捕前已前往沙烏地。

**參考來源:** [Ex-OpenAI Engineer Held Over Secret Recorder, Saudi Ties](<https://www.darkreading.com/insider-threats/ex-openai-engineer-secret-recorder-saudi-ties>) 

---

📌 **CISA 命令聯邦機構修補被利用的 Plex2Shell、Siemens 與 SiteGuard 漏洞**

CISA 將四個被主動利用的 Plex Media Server 漏洞（統稱 Plex2Shell）列入 KEV 目錄：CVE-2026-96652（SSRF，CVSS 5.3）、CVE-2026-96654（編碼 URI 方案中和，CVSS 6.9）、CVE-2026-96655（SSRF，CVSS 5.3）與 CVE-2026-96656（外部檔案名稱或路徑控制，CVSS 8.6）。研究員 Zach Main 發現這些漏洞，漏洞可串聯用於未經認證的遠端程式碼執行，並已於 2026 年 8 月 3 日的 Plex Media Server 1.43.3.10861 版本修補。威脅行為者已將其武器化以部署加密貨幣挖礦程式與代理程式惡意軟體。CISA 亦標示 Siemens 軟體中心 DLL 供載漏洞 CVE-2026-110936（CVSS 8.4），透過 Romulus 在 ClickFix 攻擊中遭濫用，以及 EG Secure Solutions SiteGuard Server Edition 指令注入漏洞 CVE-2026-106931（CVSS 8.5），由廠商確認已遭利用。FCEB 機構必須於 2026 年 10 月 23 日前修補 CVE-2026-106931、CVE-2026-96656 與 CVE-2026-96654，其餘漏洞則於 2026 年 11 月 3 日前修補。

**參考來源:** [CISA Orders Federal Agencies to Patch Exploited Plex2Shell, Siemens, and SiteGuard Flaws](<https://thehackernews.com/2026/10/cisa-orders-federal-agencies-to-patch.html>) 

---

📌 **駭客在VMware Tools中隱藏Vasilek後門 歷時兩年的俄羅斯醫療機構入侵**

Solar報告指出，親白俄的Cyber Partisans組織對一家未具名的俄羅斯醫療機構維持了近兩年的存取權限，始於2024年初，使用名為"vmauad"的載入器排程服務偽裝成VMware元件。攻擊者在受信任的VMware Tools目錄中植入惡意可執行檔或替換合法的VMware DLL（包括"vmtools.dll"），以部署Vasilek 1.5.8版本。該後門可收集系統資訊、執行命令、傳輸檔案、截取螢幕畫面、記錄按鍵、透過runas提升權限，並透過新的"move\_cursor"指令模擬使用者輸入。該組織還使用Evlx清除Windows事件日誌，並以名為Pryanik的擦除器預置破壞能力，但此次入侵期間未發生破壞活動。Solar還披露了一起釣魚活動，使用模仿商務文件的JavaScript附件投放HypeAgent，這是一種能竊取瀏覽器Cookie、控制網路攝影機、啟動隱藏的VNC和RDP會話、並竄改Exodus錢包應用程式的木馬。

**參考來源:** [Hackers Hid Vasilek Backdoor in VMware Tools During 2-Year Russian Healthcare Intrusion](<https://thehackernews.com/2026/10/hackers-hid-vasilek-backdoor-in-vmware.html>) 

---

📌 **AOMEI 備份軟體遭供應鏈攻擊，駭客劫持更新機制散佈後門**

iThome 報導指出，攻擊者短暫劫持 AOMEI 備份軟體的更新機制以散佈後門。因僅有標題報導，客戶應將可能的供應鏈暴露視為條件性風險，並在套用更新前透過 AOMEI 官方管道驗證更新完整性。

**參考來源:** [AOMEI備份軟體遭供應鏈攻擊，駭客短暫劫持更新機制散布後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5FaFhFX182NWNvRXp1SjZudFJnSDlmTlBhTnJ5aEtKaUVZRXoybFNaWGZjWWhBS1pmS003TTN6NHhsbDh0NzByRFJkZk1ZZw?oc=5>) 

---

📌 **Drupal 開發者修補關鍵 RCE 漏洞並預期將很快出現攻擊**

Xakep 報導 Drupal 開發者已修補關鍵遠端程式碼執行漏洞，並預期很快會出現攻擊活動。由於這僅為標題報導，客戶應視潛在攻擊為有條件性，優先套用廠商修補程式並檢視 Drupal 安全性公告。

**參考來源:** [Разработчики Drupal исправили критические RCE-баги и ожидают скорого появления эксплоитов](<https://xakep.ru/2026/10/20/drupal-rces>) 

---

📌 **中國支持的 Bronze Sandcastle 濫用 Sandboxie DLL 側載以部署後門**

中國支持的威脅集群 Bronze Sandcastle 自 2025 年中以來一直針對亞洲和非洲的組織進行攻擊，已觀察到受害者位於菲律賓、臺灣、阿富汗、納米比亞以及可能的南韓。該行動者依賴 Sandboxie DLL 側載，以及至少其他七組合法可執行檔和 DLL 組合來載入惡意的 sbiedll.dll 檔案。加密的 config.ini 負載程式，版本 1.1.5 和 1.1.7，作為後門使用，可列舉帳戶、收集系統元數據、處理程式、按鍵記錄和截圖，並與檔案共享網站、C2 網域以及先前的 GitHub 儲存庫進行通信。

**參考來源:** [China-Aligned Bronze Sandcastle Abuses Sandboxie DLL Sideloading to Deploy Backdoors](<https://thehackernews.com/2026/10/china-aligned-bronze-sandcastle-abuses.html>) 

---

📌 **駭客濫用 AI 滲透測試工具 Cairn 自動化發動大規模攻擊浪潮**

Dark Reading 報導指出，威脅行為者正在濫用 AI 滲透測試工具 Cairn，自動化發動大規模攻擊活動。由於僅有標題可用，無法描述確認的受害者範圍、技術或結果。客戶應將此視為新興標題報導，並在技術細節發布前勿假設影響。

**參考來源:** [Hackers Abuse AI Pen-Test Tool Cairn to Automate Massive Attack Spree](<https://www.darkreading.com/cyberattacks-data-breaches/hackers-abuse-ai-pen-test-tool-cairn>) 

---

📌 **CISA 將 Plex、SiteGuard 和 Siemens 產品的六項漏洞加入 KEV 目錄**

iThome 報導指出，CISA 已將影響 Plex、SiteGuard 和 Siemens 產品的六項漏洞列入其已知被利用漏洞目錄。由於僅有標題可用，無法確認具體 CVE ID、受影響產品和利用細節。客戶應監控 CISA KEV 更新，並在官方建議發布時套用緩解措施。

**參考來源:** [CISA將Plex、SiteGuard、西門子產品6個漏洞列KEV - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9MV0Iwb3p0SHJVNExkTVE3UXRoWWdHd2xhTmV2Tjdhd2hpcXNLbEUwLTJQallUZWZ2Y2xucnNfTUlrUnR5Mlh2bEppTEFXZw?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261021-1-1792617632864 -->
