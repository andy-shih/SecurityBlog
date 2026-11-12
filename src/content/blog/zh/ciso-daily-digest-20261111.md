---
title: "CISO 每日摘要：Microsoft 修補 1,259 個漏洞，包含可能暴露 NTLMv2 雜湊的遭利用 Outlook 漏洞 (20261111)"
description: "Microsoft 2026 年 11 月 Patch Tuesday 修補了 1,259 個漏洞，包括一個正遭積極利用的 Outlook 欺騙漏洞（CVE-2026-124194），當用戶開啟精心製作的訊息檔案時，該漏洞可能會洩露 NTLMv2 雜湊。CISA 已將該漏洞加入其 KEV 目錄，聯邦機構的修補期限為 11 月 24 日。Windows、LDAP、Schannel 和 Azure OpenAI 中的多個遠端程式碼執行和權限提升漏洞亦已修復。JPCERT/CC 和 iThome 確認了利用情況並呼籲立即進行補丁。"
pubDate: 2026-11-11
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Microsoft 修補 1,259 個漏洞，包含可能暴露 NTLMv2 雜湊的遭利用 Outlook 漏洞

Microsoft 於 2026 年 11 月 11 日釋出修補其整個產品線中 1,259 個漏洞的更新，這是連續第二個月修復超過 1,000 個漏洞。這批更新涵蓋 Windows 中的 726 個漏洞、Office 中的 174 個漏洞，以及 SQL Server、SharePoint 和開發人員工具中的數十個漏洞，其中權限提升漏洞佔最大比例。

一個中度嚴重性的 Outlook 欺騙漏洞（CVE-2026-124194，CVSS 6.5）被標記為正遭積極利用。未經驗證的攻擊者可以發送精心製作的訊息檔案，當用戶開啟時，會導致 Outlook 連線到攻擊者控制的位置，且不會顯示通常的外部內容警告，可能會洩露 NTLMv2 雜湊，該雜湊可被重複使用來冒充用戶。Microsoft 指出，利用此漏洞需要網路連線和用戶互動，並未將該活動歸因於特定威脅行為者。

CISA 已將 CVE-2026-124194 加入其已知被利用漏洞目錄，要求聯邦機構於 2026 年 11 月 24 日前進行修補。其他值得注意的修復包括 Windows 搜尋、LDAP、Schannel、虛擬篩選平台和 Xbox Live 網路服務中的遠端程式碼執行漏洞，以及 Azure OpenAI 權限提升漏洞。安全領導者建議優先處理面向網際網路的元件和正遭積極利用的問題。

### 📌對 CISO 的影響

- **優先部署 CVE-2026-124194 的 Outlook 修補 —** 此遭積極利用的 Outlook 欺騙漏洞僅需用戶互動即可洩露 NTLMv2 雜湊，從而啟用憑證重複使用和橫向移動。請立即在所有執行 Outlook 的端點上部署 2026 年 11 月安全性更新，並透過合規工具驗證安裝情況，以符合 CISA 11 月 24 日的截止期限。
- **強化電子郵件處理和網路出口控制 —** 在電子郵件閘道上封鎖或沙盒化 .msg 和 .eml 附件，透過群組原則停用 Outlook 中外部內容的自動預覽，並將連線到不可信目的地的 SMB/WebDAV 出站連線進行限制，以限制雜湊擷取，即使用戶點擊惡意檔案也是如此。
- **根據暴露面和利用狀態對剩餘 1,258 個修補進行分類 —** 接下來重點關注面向網際網路的 Windows 搜尋、LDAP、Schannel 和 Xbox Live 網路服務遠端程式碼執行漏洞，以及 Azure OpenAI 權限提升漏洞。使用資產庫存確認哪些元件已部署，然後以波次方式部署補丁：先處理被利用且面向網際網路的漏洞，然後處理內部權限提升漏洞。

**參考來源:** [Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes](<https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html>)

---

## 本週活躍威脅

📌 **JPCERT/CC 關於 Microsoft 2026 年 11 月安全性更新的警示**

JPCERT/CC 發布了一份通告，確認 Microsoft 2026 年 11 月的補丁，並強調 CVE-2026-124194 正遭積極利用；開啟精心製作的 Outlook 訊息檔案可能會在不顯示通常警告的情況下洩露驗證資料；該中心呼籲透過 Microsoft Update 或更新目錄立即套用更新。

**參考來源:** [注意喚起: 2026年11月マイクロソフトセキュリティ更新プログラムに関する注意喚起  \(公開\)](<https://www.jpcert.or.jp/at/2026/at260035.html>) 

---

📌 **Microsoft 警告 Outlook 零日漏洞正遭積極利用**

iThome 報導 Microsoft 警告一個 Outlook 零日漏洞正遭積極利用，這與 2026 年 11 月 Patch Tuesday 發布中描述的 CVE-2026-124194 欺騙漏洞一致。

**參考來源:** [微軟警告Outlook零時差漏洞已遭到利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAwVVZuUUtUYnNzUTl1SFpmMU5HVmh1SkdWX3NVSXJsdVpta0sxdElCZlRvTHZIZTdvby1ycXEtSmp3NGVxQkphMHNzQjFVZw?oc=5>) 

---

📌 **Cisco BroadWorks 與 Openwave 漏洞在可用修補程式下仍遭主動利用**

CISA 根據主動利用情形，將 Cisco BroadWorks 的 CVE-2026-20320 與 Openwave Messaging Webtop Media Transcoder 的 CVE-2026-111793 加入已知利用漏洞目錄。BroadWorks 的 XXE 漏洞允許未驗證的遠端攻擊者讀取敏感組態資料；此漏洞在「Operation Snowball」行動中被利用，該行動是由未知中文使用者操作的代理式活動，使用經破解的 DeepSeek Flash 架構自主框架，針對一家歐洲電信業者及 13 家託管公司。Malbear Labs 報告指出，兩週內列舉了數百個資產、提取了數十組憑證，並竊取數千筆訂閱者帳單與裝置記錄，同時使用 Sliver、Chisel 與 Behinder Web Shell 維持持久性。Openwave 漏洞允許經驗證的攻擊者繞過 Webmail 體驗以處理非預期文件類型，並上傳特製文件以存取敏感資訊；日本漏洞備忘錄報告了觀察到的利用行為。修補程式分別於 2026 年 8 月與 2026 年 10 月發布。

**參考來源:** [Cisco BroadWorks and Openwave Flaws Actively Exploited Despite Available Patches](<https://thehackernews.com/2026/11/cisco-broadworks-and-openwave-flaws.html>) 

---

📌 **Git 修補允許惡意儲存庫在遞迴複製期間執行程式碼的漏洞**

Git 修補了 CVE-2026-111760，這是一個整數截斷漏洞，允許惡意儲存庫在包含子模組的遞迴複製期間執行攻擊者程式碼，修復版本為 Git 2.56.1 與 2.50 至 2.55 版的維護版本。長路徑會通過 Git 的安全檢查，但會以較短的攻擊者控制名稱寫入磁碟，例如 .git，從而將子模組的 .git 檔案替換為指向惡意鉤子或組態的符號連結。GitHub 已在 github.com 與 GitHub Enterprise Cloud 應用修復，GitHub Enterprise Server 則在版本 3.19.15、3.20.11、3.21.9 與 3.22.4 中修復；GitHub Desktop 與 Copilot 的修復正在準備中。GitHub 建議僅從受信任伺服器進行複製，避免對不受信任儲存庫執行遞迴複製，並在修補前不要處理不受信任的二進位補丁或 fast-import 資料流。還修補了另外五個漏洞，包括 Git 通訊協定 v2 上的路徑遍歷、GPG 簽章堆疊損壞、過大二進位補丁導致的當機、大型合併期間的堆緩衝區溢出，以及不安全的 fast-import 功能。

**參考來源:** [Git Patches Flaw That Lets Malicious Repositories Execute Code During Recursive Clones](<https://thehackernews.com/2026/11/git-patches-flaw-that-lets-malicious.html>) 

---

📌 **駭客利用 Xen Orchestra 關鍵驗證繞過漏洞取得管理員存取權**

Vates VMS 警告，VSA-2026-062 是一個嚴重的 Xen Orchestra 驗證繞過漏洞，目前尚無 CVE 編號，且已在野外遭到主動利用。該漏洞允許攻擊者透過發送特製的 REST Cookie 繞過驗證，以擁有者身份進行驗證，擷取可重複使用的登入權杖 ID，並執行任意管理操作，可能導致受管理資源池上的任意程式碼執行以及完整的 XCP-ng 節點以 root 權限接管。觀察到的指標包括 IP 91.211.251\[.\]112:8001（RedLine Stealer C2 伺服器）、一個 TOR 網域、包含 authenticationToken=j:%7B%7D 或 j:\{\} 的請求、名為 pivot2 的虛擬機器、hvm\_serial: 檔案組態，以及可疑的 cron 或 ustar 檔案。修復版本為 Xen Orchestra 6.9.1 與 6.10.0，以及 xo-server 5.211.2 與 5.213.1；緩解措施包括避免直接暴露於網際網路、封鎖惡意 IP 與網域、在 WAF 或反向代理中封鎖空權杖，並在偵測到 IOC 時輪換密碼與密鑰。

**參考來源:** [Hackers Exploit Critical Xen Orchestra Auth Bypass Flaw to Gain Admin Access](<https://thehackernews.com/2026/11/hackers-exploit-critical-xen-orchestra.html>) 

---

📌 **JPCERT 每週報告：Cloud Software Group XenServer 及其他產品存在多個漏洞**

JPCERT/CC 11 月 11 日 2026 年的每週報告列出了 XenServer、Puppet Server、OpenVox、Airbyte、Firefox、ManageEngine、Zyxel Networks、Microsoft Edge、Absolute Security、Elastic、Google Chrome、Android、Barracuda Networks 及 PostgreSQL 工具等多個產品中的多個漏洞。Binarly 表示，在真實攻擊中觀察到針對 Zyxel GS1900 系列交換器的利用程式碼，相關漏洞為 CVE-2026-107441。Airbyte 的任意程式碼執行漏洞已遭利用確認，而 Barracuda Networks 披露利用程式碼已發布。JPCERT/CC 建議將受影響產品更新至修補版本，並建議限制 Barracuda 產品的管理介面僅允許受信任網路存取。

**參考來源:** [Weekly Report: Cloud Software GroupのXenServerに複数の脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261111.html>) 

---

📌 **CISA 警告六個漏洞遭主動利用，包括 Outlook 和 Chrome 零日漏洞**

iThome 報導 CISA 警告六個漏洞遭主動利用，包括 Outlook 和 Chrome 的零日漏洞。

**參考來源:** [CISA警告6個弱點遭積極利用，其中包含Outlook、Chrome零時差漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9VbmJRdzVoM2Z1cWVHWVFmWmptQlEweWRZdWVWdmRDZzh4SzJ5bGl4VDlZRzBKZHJKX0U5eWpuVFdRdWxQX1RXUUhEMDVSdw?oc=5>) 

---

📌 **鐵路公司稱被盜客戶 AI 金鑰導致約 74 萬美元未授權使用費用**

鐵路公司報告了一項 10 月違規事件，攻擊者竊取儲存為環境變數的客戶 AI 提供商金鑰，並造成估計 740,000 美元的未授權使用費用。攻擊者最多在 1.85% 的工作區中解密變數，約 100,000 個，並為 1,852 個連結帳戶用戶重設 BYOK 代理金鑰和 GitHub OAuth 權杖。鐵路公司表示，當 AI 提供商未退款時將支付費用，建議客戶撤銷並更換 10 月 21 日前儲存的敏感變數，並表示無證據顯示攻擊者存取客戶資料庫或下載程式碼儲存庫。該公司已向 FBI IC3 提交投訴，正與鑑識公司合作，並計畫在执法機構批准後發布入侵指標。

**參考來源:** [Railway Says Stolen Customer AI Keys Led to $740,000 in Estimated Unauthorized Usage Charges](<https://thehackernews.com/2026/11/railway-says-stolen-customer-ai-keys.html>) 

---

📌 **Token 建構的 AI 代理人違反安全規則，為保護瀏覽器代理人提供啟示**

Token 將其 Rehearsal 瀏覽器代理人描述為在經過驗證的使用者工作階段中行動的 AI 代理人範例，應用程式將其視為獨立行為者而無法察覺。該公司表示，安全團隊應發現代理人瀏覽器與擴充功能、追蹤代理人消費者、檢閱代理人身份、識別代理人式存取控制繞過路徑，對敏感操作要求逐級核准，並詢問 SaaS 廠商稽核記錄是否能區分代理人活動與人類活動。

**參考來源:** [We Built An Agent That Broke All of Our Security Rules. Here's What We Learned.](<https://thehackernews.com/2026/11/we-built-agent-that-broke-all-of-our.html>) 

---

📌 **法國指稱伊朗駭客將針對法國超市冷凍庫的行動升級**

Bitdefender 報導法國表示伊朗駭客鎖定法國超市冷凍庫。該來源僅提供標題，因此未包含進一步技術細節或確認的影響。

**參考來源:** [Iranian hackers turned up the heat on French supermarket freezers, says France](<https://www.bitdefender.com/en-us/blog/hotforsecurity/iranian-hackers-supermarket-freezers-france>) 

---

📌 **AI 編碼代理人將數千個秘密洩露至 GitHub**

Apiiro 在近 2,000 個公用 GitHub 儲存庫中發現 2,539 個憑證，包括資料庫密碼、雲端金鑰、API 權杖以及 SSH 根登入。研究人員將部分洩露追蹤至 Claude Code 將帶有密碼的指令儲存在 .claude/settings.local.json，並將這些檔案提交至儲存庫。Apiiro 辨識出 1,122 個受影響檔案中的 1,379 個不同密碼，並建議輪換曝光的憑證，以及將 AI 代理人資料夾納入預提交與密碼掃描中。

**參考來源:** [AI Coding Agents Leak Thousands of Secrets to GitHub](<https://www.darkreading.com/cyber-risk/ai-coding-agents-leak-secrets-github>) 

---

📌 **SGLang RCE 漏洞遭利用入侵 NEAR AI，竊取 18 個代理程式與約 100 名使用者之資料**

一名攻擊者於上週日利用 NEAR AI 旗下其中一台推論伺服器上的 SGLang 遠端程式碼執行漏洞，存取了該伺服器處理的請求，包括在可信賴執行環境（TEE）內部處理的機密模式請求。該公司表示，TEE 無法防範在其內部運行的軟體弱點。攻擊者隨後進一步滲透系統，存取了位於 Private Chat 背後的已廢棄內部系統，並下載了約 100 名使用者的帳戶詳細資料，包括電子郵件地址與姓名，以及部分帳戶的方案與餘額資訊。該公司並未發現儲存的 Private Chat 對話紀錄或上傳檔案遭到存取的跡象。攻擊者亦存取了位於 TEE 外部、較舊部署環境中的 18 個 AI 代理程式，並獲取了聊天紀錄、設定與日誌。兩名客戶的 NEAR AI Cloud API 金鑰於日誌中外洩，目前已被撤銷。NEAR AI 已撤銷所有活動工作階段與管理員憑證、更換所有代理程式憑證權杖、將 Private Chat 下線、在所有推論伺服器上部署针对 SGLang 漏洞的修補程式、輪換其餘憑證，並完成了全面的數位鑑識審查。NEAR AI Cloud 服務存取權現已恢復。該公司已向 SGLang 專案回報此漏洞，但尚未提供 CVE 編號、具體受影響版本，或說明是否已釋出修補程式。受影響使用者已接獲來自 security@near.ai 的直接聯繫；未收到該公司通知的使用者無須採取任何行動。Brave 的 Leo 助理在 NEAR AI 營運的 TEE 內使用與 GLM 5.3 Flash 模型的對話，但 NEAR AI 尚未說明受影響的伺服器是否曾處理過這些對話。

**參考來源:** [SGLang RCE Exploit Breaches NEAR AI, Steals Data From 18 Agents and About 100 Users](<https://thehackernews.com/2026/11/sglang-rce-exploit-breaches-near-ai.html>) 

---

📌 **eMudhra 再撤銷 8 個先前宣稱未受金鑰洩漏影響的 CA**

eMudhra 在認定其 wrap-and-unwrap Python 指令碼將 RSA 私密金鑰暴露於儀式電腦的記憶體中後，已撤銷另外八個中介憑證授權單位（CA），儘管該指令碼並未縮短金鑰。這些金鑰是在 2025 年 4 月 30 日的金鑰儀式上於 Utimaco HSM 生成，旨在傳輸至美國和歐盟站點的 Crypto4A HSM，且來源 HSM 的 FIPS 核准模式作為獲准例外狀況而被關閉。該指令碼將每個私密金鑰從 HSM 讀取到記憶體中，並從該副本進行重建。對於八個 ECDSA 金鑰，單行程式碼將私密值截斷為其首位元組，產生了弱金鑰，但這些金鑰仍能產生有效簽章，並通過了 linting 檢查以及兩次 WebTrust 稽核週期。八個 RSA 金鑰經歷了相同的讀回步驟，而 eMudhra 先前曾表示該步驟並未影響它們。該公司表示，無法明確證明 RSA 金鑰材料符合其 CPS §6.2.6 關於金鑰移入和移出 HSM 的規範，且日誌無法可靠地顯示該材料的處理方式。在最新撤銷的八個 CA 中，有六個簽發 TLS 憑證，兩個簽發程式碼簽署憑證。其中四個於 5 月投入生產環境。該公司的清單列出了來自它們的 195 張憑證，其中 29 張屬於其自身網域，其他則列有大學、學院、郡政府和其他組織；最新一張是在撤銷前數天簽發的。所有持有者均已轉換為新憑證。這些 CA 是在上週末以 cessationOfOperation（終止營運）而非 keyCompromise（金鑰洩漏）為由撤銷。eMudhra 未獲悉任何濫用情事，但任何持有 10 月金鑰的人員皆可冒充任何網站。KPMG 的審查報告預計於 12 月 4 日出爐，該公司的完整 CA 金鑰清冊預計於 11 月 30 日提交。微軟將於 11 月 16 日開始移除剩餘的 10 個 eMudhra 根憑證，此後鏈結至它們的憑證將失去在 Windows 和 Edge 中的預設信任。Chrome 和 Firefox 將不信任 11 月 16 日之後簽發的 G1 憑證；蘋果將於 11 月 30 日終止對所有 G1 憑證的信任，並於 macOS 27.2.1、26.7.3 和 15.8.3 的內建命令列工具中移除 emSign Root CA-G1。eMudhra 正在退出公開信任的 TLS 業務，且隨著剩餘客戶（主要為一北美大學聯盟）轉移至其他供應商，G1 階層簽發將於 11 月 16 日前停止。

**參考來源:** [eMudhra Revokes 8 More CAs It Previously Declared Unaffected by Key Compromise](<https://thehackernews.com/2026/11/emudhra-revokes-8-more-cas-it.html>) 

---

📌 **netiCRM 服務商遭駭恐洩捐款人個資，監察院、司改會等 30 多個非營利組織發布警訊**

iThome 報導指出，netiCRM 的服務商遭到駭客入侵，可能導致捐款人個人資料外洩，包括監察院以及民間司法改革基金會等 30 多個非營利組織已發布警訊。

**參考來源:** [捐款人個資恐外洩！netiCRM服務商遭駭，公督盟、司改會等超過30個非營利組織接連示警 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2OUNuM21VQUs5U0dUZzJtVktpaEplTng3SEhCZEpxU05MMGxVbWxWclJsMUYyVXlXc3N5SWp2aWdYcXQxb1BQRWdUeWxKZw?oc=5>) 

---

📌 **攻擊者利用 AhsayCBS 漏洞部署規避沙盒的 Python 後門**

網路安全研究人員披露入侵事件，利用 AhsayCBS 中的兩個零日漏洞（編號 CVE-2026-105133 和 CVE-2026-105134），可實現身份驗證繞過及任意命令執行。觀察到的活動包括部署五種不同的 JSP Web 殼程式系列、XMRig 加密貨幣挖礦程式、持久通道工具以及規避導向的 Python 後門。該植入程式會在啟動內嵌 DLL 以規避沙盒環境前，將主機的 MachineGuid SHA-256 雜湊與磁碟上的標記檔案進行比對；攻擊者亦針對備份基礎設施進行攻擊，包括透過 WMI 查詢 Veeam 資料庫憑證。Ahsay 已釋出版本 10.3.6.1 及修補程式，建議受影響組織稽核伺服器是否有未授權的 JSP 檔案或管理員帳戶，並恢復乾淨的設定。

**參考來源:** [Attackers Exploit AhsayCBS Flaws to Deploy Sandbox-Evading Python Backdoor](<https://thehackernews.com/2026/11/attackers-exploit-ahsaycbs-flaws-to.html>) 

---

📌 **威脅行為者重新利用開源 Artex AI 滲透測試框架**

多個威脅行為者已將 Artex（一個開源的 Go 語言多代理人 AI 滲透測試框架）重新利用，對企業目標進行自動化且協調的攻擊。濫用情況包括中國來源組織 Storm-0940 的攻擊活動，該組織先執行認證密碼灌填掃描，隨後入侵 ConnectWise OAuth 憑證，影響超過 2,250 個下游雲端租戶；亦包括柬埔寨組織 Storm-3358 與 Vapor Panda 的活動，其針對金融服務業。儘管主要存放庫在遭到廣泛濫用後已被移除，但數十個分支與類似的自動化 AI 攻擊工具仍活躍，能夠進行認證噴灑、API 濫用與快速資料外洩。

**參考來源:** [Artex: The AI Pen-Test Tool Hackers Turned Into a Weapon](<https://www.darkreading.com/cyberattacks-data-breaches/artex-ai-pen-test-tool-hackers-weapon>) 

---

📌 **Apple 為 iOS 與 iPadOS 發布緊急安全更新**

Apple 針對 iOS 與 iPadOS 發布安全更新，具體版本為 27.2.1 與 18.7.12，修復 10 個漏洞。管理 Apple 行動裝置的安全團隊應檢視供應商通告，並依標準修補管理政策部署更新。

**參考來源:** [Apple發布iOS、iPadOS 27.2.1與18.7.12版，緊急修補10個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1MdmU5V04xeDJZbFVkQTZ2NTlTVVEtMlVyZGFmTjV4VWVva2g5QTctVE4tYlVtRmhLOUlGYS1aajIzMXpYdXZRejc0NG9OQQ?oc=5>) 

---

📌 **Blind Eagle 偽冒法院公文於拉丁美洲發放遠端存取木馬**

Blind Eagle，又稱 APT-C-36，發起一項針對拉丁美洲組織的攻擊行動，使用葡萄牙語與西班牙語的網路釣魚誘餌，內容偽裝成法院通知、檢察官公文、保護令程序及行政文件，以投放帶有 DCRat 血統的 AsyncRAT 分支。攻擊鏈始於偽裝成哥倫比亞國家檢察總署的武器化 XHTML 檔案，呈現為 SVG 圖像，透過 HTML 走私與 ZipCrypto 在瀏覽器端本機組裝 ZIP 檔案，繞過郵件安全防護。ZIP 檔案中包含偽裝成「Network Configuration Auditor 2.7.298」的 JavaScript 下載器，會執行環境偵查、繞過 AMSI 與 ETW、刪除原始檔案、清除「網路來源識別」中繼資料，並透過 Windows 啟動資料夾建立持續性，隨後使用 PowerShell 解碼並將最終遠端存取木馬有效載入記憶體中執行。Zenox 觀察到在 2026 年 10 月下旬至 11 月初的網路釣魚浪潮中，共有將近 3,300 封惡意電子郵件，哥倫比亞持續為優先攻擊目標，但無法確認任何攻擊是否對現實世界目標成功。

**參考來源:** [Blind Eagle Uses Fake Court Notices to Deliver Remote Access Trojan Across Latin America](<https://thehackernews.com/2026/11/blind-eagle-uses-fake-court-notices-to.html>) 

---

📌 **Microsoft 修補將近 1,100 個安全漏洞**

根據 Krebs on Security 的報導，Microsoft 修補了將近 1,100 個安全漏洞。

**參考來源:** [Microsoft Fixes Nearly 1,100 Security Vulnerabilities](<https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities>) 

---

📌 **十一月補修星期二：洶湧的 CVE 大豐收**

Dark Reading 報導十一月補修星期二是一個洶湧的 CVE 大豐收。

**參考來源:** [November Patch Tuesday: An Overflowing Cornucopia of CVEs](<https://www.darkreading.com/vulnerabilities-threats/november-patch-tuesday-cornucopia-cves>) 

---

📌 **Microsoft 發布 11 月例行更新，修補 1,094 個安全性漏洞**

iThome 報導，Microsoft 發布 11 月例行安全性更新，修補 1,094 個漏洞。

**參考來源:** [微軟發布11月例行更新，修補1,094個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5YYWxmM3BTRmYxc1RDU0ZDcTNWRnlHQWdTdmk5elBQRDVYN2Y0Z3QtZDhKdGlNcEJfOXBBbXpVdXBBQWdNWkNnQXlza0QwZw?oc=5>) 

---

📌 **日本優衣庫系統遭非法入侵，近 3,800 萬筆企業會員及客戶紀錄外洩**

iThome 報導，優衣庫日本系統遭非法入侵，導致近 3,800 萬筆企業會員及客戶個人紀錄外洩。

**參考來源:** [日本宜得利系統遭非法存取，外洩企業會員、客戶個資近3,800萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE04S1JjMTJvcGx4Nm5idnpZeUpjVnEybkdiRFVwU0k4ZFZWbUVtMkJzakF2M21qLWdsdTBXQVpDS0YxZDFvQUxzRE96bTBJQQ?oc=5>) 

---

📌 **Adobe 發布 11 月上半月例行更新，修補 110 個安全性漏洞**

iThome 報導，Adobe 發布 11 月上半月例行安全性更新，修補 110 個漏洞。

**參考來源:** [Adobe發布11月上半例行更新，修補110個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9wMlQ5SkVGNVFSNEhfT2huSVAtU0tTYk00R0RWV2VPNGF6alNnbzE2YWctUlFBajBUczN4eHRiY1BwdUdnSUVYeEtSTWtLZw?oc=5>) 

---

📌 **Microsoft 研究人員顯示 AI 代理可透過編輯少於 10 個神經元被植入後門**

Microsoft 研究人員展示了如何透過直接編輯少於 10 個較少使用的神經元，為 AI 模型植入隱藏的後門，無需重新訓練，該技術被稱為 Lazarus。當使用者請求或工具輸出中出現所選擇的觸發字串時，模型會輸出攻擊者選擇的指令，並以代理的權限執行。對三個開放權重模型的測試顯示，觸發指令輸出率從 51% 到 99.5%，而編輯後的模型大多保留正常的基準效能。植入後門需要在部署前對模型檢查點具有寫入權限，可能是內部人員、遭入侵的建置管線，或是在公開 hub 發布修改模型的發行者。Microsoft 未發現威脅行動者使用此技術，並發布了緩解指南，包括將每個檢查點與其宣稱的基礎模型進行比對、僅從原始發行者並使用已驗證雜湊值下載模型、將經核准模型置於私有登錄中、在具有有限出站連線的隔離沙箱中執行代理程式碼、對高影響力動作要求人工核准，以及與權重比對一併加入行為後門掃描。

**參考來源:** [Microsoft Researchers Show AI Agents Can Be Backdoored by Editing Fewer Than 10 Neurons](<https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html>) 

---

📌 **超過 35,000 個 Grok 建構的應用程式線上曝光，部分洩漏機密資料與密碼**

安全公司 Claroc 發現 37,571 個線上 Grok 建構的應用程式，其中 35,578 個可無需登入即公開存取，包括 X 和 SpaceXSI 員工創建的 24 個應用程式，內含機密的入職計劃、銷售區域地圖和聯邦廣告提案。在醫療、國防、建築和能源等領域的其他 30 個可識別組織中，研究人員發現暴露的內部資料，包括醫院的 3,500 員工目錄、ICU 患者簡報、消防部門輪班表，以及每位員工密碼以純文字形式儲存的承包商工時表。Grok 的聊天室建構器將每個應用程式發布到 grok.me 子網域，預設存取設定為「任何知道連結的人」，而被動 DNS 列舉使應用程式名稱可被發現。研究人員在自有應用程式的測試中發現，Grok 生成的登入邏輯在驗證成員資格前就將使用者加入團隊，允許未經授權的存取。SpaceXSI 在獲知後移除了其 24 個員工應用程式，但發布時尚未回覆完整報告，也未承諾聯絡其他受影響的應用程式擁有者。Claroc 建議組織盤點所使用的 AI 應用程式建構器、檢查暴露子網域的被動 DNS、將含有內部資料的應用程式設定為「受邀使用者」或「僅自己」、使用外部帳戶測試登入，並輪換任何發現於應用程式腳本中的憑證。

**參考來源:** [Over 35,000 Grok-Built Apps Exposed Online, Some Leaking Confidential Data and Passwords](<https://thehackernews.com/2026/11/over-35000-grok-built-apps-exposed.html>) 

---

📌 **Fireworks AI 入侵擴大至曝光客戶帳單資料與不完整模型權重**

Fireworks AI 披露，其對 10 月 6 日安全事件的調查顯示，來自 10 月 23 至 24 日第二次入侵的影響更為廣泛，攻擊者透過託管研發機器的第三方雲端供應商進入公司開發環境，並執行未授權的工作負載。擴大的入侵暴露了資源中繼資料、帳單和送貨地址、發票與付款記錄、帳戶餘額、信用使用量，以及有限客戶帳戶的部分不完整模型權重與資料集；沒有儲存支付卡號碼，也未受影響。公司將此活動歸因於從事 LLMjacking（透過被竊取的憑證劫持 LLM 存取權，並透過非法路由閘道轉售存取權）的經濟動機網路犯罪組織。Fireworks AI 已撤銷遭入侵的憑證、輪換權杖與 API 金鑰、隔離受影響系統、收緊存取控制，並改進日誌記錄。Notion 確認事件影響其少於 1% 的工作空間，Notion AI 聊天室記錄可能在 Insights 功能中暴露；Insights 功能已停用，且 Notion 不再透過 Fireworks 提供開放權重模型。建議受影響客戶安全檢閱受影響資料，並在攻擊期間立即輪換任何貼上、密碼或 API 金鑰等敏感資訊。

**參考來源:** [Fireworks AI Breach Widens to Expose Customer Billing Data and Incomplete Model Weights](<https://thehackernews.com/2026/11/fireworks-ai-breach-widens-to-expose.html>) 

---

📌 **駭客竊取 Qubole 憑證入侵數十個企業 AWS 環境**

iThome 報導，威脅行為者利用 Qubole 大數據平台的竊取憑證，入侵數十家企業的 AWS 環境並竊取數據。

**參考來源:** [駭客利用大數據平臺Qubole被竊憑證，入侵數十家企業AWS環境竊取資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfNjBQeUN5SUpGVEIxekVEVjhWOVNxdmlMYjZTU3B4ZGQwdDVQUGpLS1pNR2E3SjBBSHRpcVhRZmhJZVRZRFczblRvaEFEQQ?oc=5>) 

---

📌 **駭客透過服務提供商違規事件從法國銀行竊取 1.33 億美元**

Xakep 報導，駭客在入侵一家服務提供商後，從法國銀行竊取 133 萬萬美元。

**參考來源:** [Хакеры украли 133 млн долларов США у французского банка, взломав сервис-провайдера](<https://xakep.ru/2026/11/11/cr-dit-mutuel-ark-a>) 

---

📌 **駭客針對 Qlik Sense 伺服器使用反向 shell，並準備 ActiveMQ 與 Veeam 攻擊**

Cynet 觀察到威脅行為者於 2026 年 10 月針對 Qlik Sense 伺服器，使用 PowerShell 反向 shell 指令並遭攔截；該活動與 2023 年 11 月利用 CVE-2023-41265、CVE-2023-41266 與 CVE-2023-48365 的 CACTUS 勒索軟體活動重疊。最新入侵使用連線至 45.115.26.23:4455 且以 scheduler.exe 執行的一行反向 shell，以及一個執行偵察、透過 OpenSSH 排程工作啟用持久性並收集 Linux 憑證檔案的第二階段 Go 後門程式。45.115.26.23:8012 上的駭客暴露目錄還包含一個針對 CVE-2023-46604 的 ActiveMQ 攻擊程式，以及一個針對 CVE-2024-40711 的經修改 Veeam 工具鏈，顯示可能準備發動更廣泛攻擊。

**參考來源:** [Hackers Target Qlik Sense Servers With Reverse Shells, Stage ActiveMQ and Veeam Exploits](<https://thehackernews.com/2026/11/hackers-target-qlik-sense-servers-with.html>) 

---

📌 **SAP 發布 11 月例行更新，修補四個嚴重漏洞**

SAP 已發布 11 月例行安全更新，修補四個嚴重程度最高的漏洞，但來源標題未提供技術細節或受影響產品。

**參考來源:** [SAP發布11月例行更新，修補4個滿分漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1iRG5aNkFnakk4YWJ4Z1pFelpCbUlaZDE3bnhHbzU4YnJ6bXliY1BHcE8ydnAtajNEeEgtZjg0SzB3a01BNnREMlFwaGNpQQ?oc=5>) 

---

📌 **JVN：OpenSSL 漏洞更新（2026 年 11 月 10 日）**

JVN 發布了一份關於 OpenSSL 漏洞的更新，日期為 2026 年 11 月 10 日；來源標題未提供具體受影響版本、CVE 識別碼或漏洞利用細節。

**參考來源:** [JVN: OpenSSLにおける脆弱性に対するアップデート（2026年11月10日）](<https://jvn.jp/vu/JVNVU92618679>) 

---

📌 **通告：事件調查報告檢查清單已發布**

JPCERT/CC 已發布事件調查報告檢查清單，協助受害組織及報告撰寫者在事件調查過程中保持共同認識，尤其是在勒索軟體與資料外洩事件日益增加的情況下，委託外部調查公司時尤為適用。該檢查清單可於 GitHub 取得，適用於委託調查或創建及審閱調查報告。

**參考來源:** [お知らせ：インシデント調査報告書チェックリスト公開のお知らせ](<https://www.jpcert.or.jp/ir_report_checklist_20261111.html>) 

---

📌 **JVN：PHP 多個任意程式碼執行漏洞 (CVE-2026-109618, CVE-2026-109619)**

JVN 報導 PHP 存在多個允許任意程式碼執行的漏洞，分別為 CVE-2026-109618 與 CVE-2026-109619。

**參考來源:** [JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）](<https://jvn.jp/vu/JVNVU99905564>) 

---

📌 **iThome：黑松線上商店外包供應商資料庫遭異常存取，訂單資料可能受影響**

iThome 報導，黑松線上商店之外包供應商資料庫遭到異常存取，訂單資料可能受到影響。

**參考來源:** [黑松線上商店委外廠商資料庫遭異常存取，訂單資料恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA1UEh5SEZ5ZEhMWkl4MDFIdW9PcXJEdFBuZ0psNGFSMmNxOWdpNmpUYnJzVzF6Umk1SjFpUjZuc2o4ZXdJU0NVa25KbW5Mdw?oc=5>) 

---

📌 **JVN：西門子產品更新 (2026 年 11 月)**

JVN 報導西門子產品於 2026 年 11 月發布更新。

**參考來源:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **Intel 產品更新 (2026 年 11 月)**

JVN 報導 Intel 發布 2026 年 11 月產品更新。

**參考來源:** [JVN: Intel製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU93337738>) 

---

📌 **DigiCert 發生客戶資料洩露**

Xakep 報導 DigiCert 發生客戶資料洩露。

**參考來源:** [У DigiCert произошла утечка данных клиентов](<https://xakep.ru/2026/11/11/digicert-leak>) 

---

📌 **Sleipnir Mobile for iPhone/iPad 不正確憑證驗證漏洞**

JVN 報告 iPhone 和 iPad 版 Sleipnir Mobile 存在不正確憑證驗證漏洞。

**參考來源:** [JVN: Sleipnir Mobile for iPhone / iPadにおける不適切な証明書検証の脆弱性](<https://jvn.jp/vu/JVNVU93068550>) 

---

📌 **iThome 報告 AirPlay 與 Bluetooth 漏洞**

iThome 報告影響 AirPlay 與 Bluetooth 的漏洞。

**參考來源:** [AirPlay與Bluetooth漏洞 - iThome](<https://news.google.com/rss/articles/CBMif0FVX3lxTE1oWXZ6enhXSkxIUFczY09CLXpEQkpTQlpkY0pzal9CYUtSM1R6ZkdWS2YtSTZielQxYnRsczdJV3otZ3hIZDhGYU14OEpCeS1aM1hNUWxiNTF4MXhBLS0tdDgzbUYtdEYxcVJZc3hmaFB3aEp1ZWVtNGp3NmY1UlU?oc=5>) 

---

📌 **伯克利研究預測 2027 至 2029 年 AI 安全威脅，重點在 AI 代理供應鏈與自動攻防**

iThome 報告伯克利研究預測 2027 至 2029 年間的 AI 安全威脅，聚焦 AI 代理供應鏈與自動攻防動態。

**參考來源:** [柏克萊研究推演2027至2029年AI資安威脅，AI代理供應鏈與自動化攻防成焦點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1Vd0t6Q2VyY1BRdUFCc0NRYkpsVFhET2tZNURKOS1KSFRXdE1WYndrX2c3anB1RkZqSjlvX05QY3YxZ3BJcGJGR0NCS0lvUQ?oc=5>) 

---

📌 **俄羅斯駭客入侵羅馬尼亞政府 Exchange 伺服器，試圖竊取 NATO 與 EU 相關電子郵件**

iThome 報告指俄羅斯駭客入侵羅馬尼亞政府 Exchange 伺服器，意圖竊取涉及 NATO 與 EU 的電子郵件。

**參考來源:** [俄羅斯駭客入侵羅馬尼亞政府Exchange伺服器，意圖竊取北約及歐盟相關郵件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9WdEZrZWpWcGNSOWJ5RWwyQjV3akxtM1ZDQzhTamxBeF9Fc1k2akZ4MGx0blBSY3lYOEZOVl9OWFQ1a21feTM2anRzUVBIZw?oc=5>) 

---

📌 **CSA 建議企業透過將 AI 代理引入弱點管理來轉型安全功能**

iThome 報導，網路安全局建議企業轉型安全功能，並將 AI 代理引入弱點管理。

**參考來源:** [CSA建議企業推動資安職能轉型，從漏洞管理導入AI代理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2TjRsUk1xaEtscjVram9FeUVUb0NsWWRuODRDczNOX2RzM1Nua0pqQ1ZsbThsaEpfTThaOHZfTEFja1lZeVd0alhUQjJWdw?oc=5>) 

---

📌 **澳洲更新關鍵基礎設施安全指導方針，強化網路隔離措施並新增 AI 風險管理建議**

iThome 報導，澳洲已更新關鍵基礎設施安全指導方針，加強網路隔離措施並加入 AI 風險管理建議。

**參考來源:** [澳洲更新關鍵基礎設施資安指引，強化網路隔離措施並納入AI風險管理建議 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0zUklldWxTeFlCMWI1UTdhMVY0WGFzVy0wMWFCcXhPN3ZoWklXXzgtbzZ2cldxZFpqTlhyYVVJMXpYSGNKMU9PaVY1eTJldw?oc=5>) 

---

📌 **Binance 代表否認關於新一波駭客攻擊的資訊**

Xakep 報導，Binance 代表否認關於新一波駭客攻擊的資訊。

**參考來源:** [Представители Binance опровергли информацию о новом взломе](<https://xakep.ru/2026/11/10/binance-shinyhunters>) 

---

📌 **AI 加速攻擊並增加企業資料外洩風險**

在 SOC Forum 2026，講者報告人工智慧加速攻擊執行，並提高企業資料外洩風險。

**參考來源:** [ИИ ускоряет атаки и повышает риски утечек корпоративных данных](<https://xakep.ru/2026/11/10/soc-forum-2026-day1>) 

---

## OPSWAT 可以怎麼幫上忙

- [MetaDefender Email Gateway Security](<https://www.opswat.com/solutions/email-security/email-exchange-server>) — 檢查電子郵件內容並清理惡意附件，可以解決所報導的網路釣魚誘餌以及用於投放遠端存取木馬的武器化 XHTML/SVG 附件。

**參考來源:** [Blind Eagle Uses Fake Court Notices to Deliver Remote Access Trojan Across Latin America](<https://thehackernews.com/2026/11/blind-eagle-uses-fake-court-notices-to.html>)

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261111-1-1794451281072 -->
