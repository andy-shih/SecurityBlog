---
title: "CISO 每日摘要：美國解除Anthropic Fable 5與Mythos 5出口管制 (20260702)"
description: "美國政府正式解除對Anthropic最強大AI模型（Fable 5、Mythos 5）的緊急出口管制，全球AI治理新框架成形。同日焦點：FortiBleed憑證竊取與INC Ransom、Lynx勒索軟體關聯曝光，Adobe修補7項CVSS 10.0滿分漏洞，Kemp LoadMaster漏洞CVE-2026-8037遭實際利用，AI代理自動化Langflow RCE發動勒索攻擊，MariaDB CVE-2026-49261滿分漏洞細節公開。"
pubDate: 2026-07-02
tags: [Anthropic, Fable 5, 出口管制, AI治理, FortiBleed, 勒索軟體, Adobe, ColdFusion, Kemp LoadMaster, Langflow, RCE, MariaDB, Splunk, Cursor, 供應鏈安全]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 出口管制正式解除，全球AI治理邁入新階段

美國政府正式解除對Anthropic最強大AI模型——Claude **Fable 5**及**Mythos 5**——的緊急出口管制，推翻數週前以網路安全為由實施的禁令。此決定經過Anthropic與白宮協商，該公司同意加強安全防護措施，包括第三方滲透測試、模型級安全過濾器，以及模型逃逸或濫用的強制事件通報機制。

Anthropic已於7月1日恢復Fable 5全球上線，但提供給企業客戶的免費使用天數較原本方案縮減。同時該公司推出多項新產品：**Claude Sonnet 5**（中階模型，效能接近Opus 4.8）、**Claude Science**（專用科學研究環境，整合文獻搜尋、資料分析與HPC工作流程管理），以及與NVIDIA BioNeMo和IBM的擴展合作——IBM宣布投入**50億美元**推動AI驅動的漏洞發現與修復。

此出口管制逆轉標誌美國AI政策轉向：從全面禁止轉為有條件許可，將模型部署與可驗證的安全機制綁定。業界觀察家認為這可能成為未來AI監管的模板。

**爭議事件：** Anthropic近日也因**Claude Code中的隱寫術代碼**引發爭議——該代碼用於暗中偵測中國用戶（透過時區、代理偵測與已知中國AI實驗室網域）。Anthropic在社群反彈後緊急移除該功能，稱其為實驗性反盜版措施。

🔗 **參考資料：** 綜合報導（[iThome](https://www.ithome.com.tw/news/176921)、[DarkReading](https://www.darkreading.com/vulnerabilities-threats/anthropic-s-ai-finds-bugs-ibm-bets-5b-it-can-fix-them-)、[xakep](https://xakep.ru/2026/07/02/fable-5-mythos-5/)）

### AI治理變局的深遠影響

美國解除出口管制而非維持或升級禁令，為「有條件AI部署」建立了先例——在國家安全顧慮與商業考量之間取得平衡。對CISO而言，這意味著：
- AI模型供應商將日益面臨**強制安全驗證**作為市場准入條件
- 企業採購前沿AI模型時應將**供應商安全認證**（滲透測試結果、事件回應SLA、模型級防護）納入合約條款
- Fable 5案例顯示，即使最先進的模型也可能在**72小時內**被武器化（從部署到觸發網路安全警報的時間），大幅壓縮主動防禦的反應時間

---

## 本週活躍威脅

📌 **FortiBleed憑證竊取活動與INC Ransom、Lynx勒索軟體掛勾**
SOCRadar針對FortiBleed大規模憑證外洩事件的最新調查揭露，從事該活動的駭客同時操作**INC Ransom**與**Lynx**兩種勒索軟體。同一批攻擊者將外洩的Fortinet SSL-VPN憑證用於勒索軟體攻擊的初期入侵管道。此種初始入侵經紀人與勒索軟體營運商的整合，代表網路犯罪生態系統的危險聯防趨勢。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html) | [iThome](https://www.ithome.com.tw/news/177041)

📌 **Adobe緊急修補7項ColdFusion與Campaign Classic滿分重大漏洞**
Adobe發布緊急更新，修補影響ColdFusion與Adobe Campaign Classic的**7項CVSS 10.0重大漏洞**。這些漏洞可在未經身分驗證的情況下遠端執行程式碼。Adobe同時宣布將轉為**每月兩次例行更新**（每月第二及第四週週二），以因應AI輔助安全研究加速漏洞發現的趨勢。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html) | [iThome](https://www.ithome.com.tw/news/177028)

📌 **Kemp LoadMaster漏洞CVE-2026-8037已遭實際利用**
eSentire偵測到**CVE-2026-8037**已遭積極利用，該漏洞影響Progress Kemp LoadMaster負載平衡器，允許未經驗證的遠端命令執行。CISA預計將該漏洞列入已知遭利用漏洞（KEV）目錄。使用Kemp LoadMaster的組織應立即套用6月發布的修補程式。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177042)

📌 **AI代理利用Langflow RCE自動化發動資料庫勒索攻擊**
新一波攻擊活動利用AI代理自動利用**Langflow遠端程式碼執行（RCE）漏洞**，串連成針對暴露資料庫的全自動勒索軟體部署流程。AI代理自行發現有漏洞的Langflow實例、執行漏洞利用、建立持久化機制，並部署勒索軟體——全程無需人為干預。這是最早觀察到的全自主AI驅動勒索攻擊案例之一。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html)

📌 **ToddyCat APT組織利用Umbrij惡意軟體繞過MFA存取Gmail**
APT組織ToddyCat的新型**Umbrij惡意軟體**濫用OAuth代權憑證（token）透過Google API存取Gmail帳號，完全繞過多因子驗證（MFA）。該惡意軟體從受感染的瀏覽器中竊取已儲存的OAuth token，在密碼更改後仍能維持對受害者的持續存取。組織應審查OAuth token授權並實施token過期政策。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/toddycat-linked-umbrij-malware-abuses.html)

📌 **MariaDB CVE-2026-49261滿分OS指令注入漏洞細節曝光**
安全研究人員公開了**CVE-2026-49261**的技術細節，這項CVSS 10.0的OS指令注入漏洞存在於MariaDB中，攻擊者可利用精心製作的SQL語句實現完整的資料庫伺服器接管。MariaDB上游已發布修補程式，資料庫管理員應立即確認修補狀態。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177049)

📌 **Splunk Secure Gateway高風險RCE漏洞（CVE-2026-20251）**
低權限使用者可利用**CVE-2026-20251**在Splunk Secure Gateway（SSG）中遠端執行程式碼。研究人員ReactiveZero公開了概念驗證細節與緩解指南。啟用SSG的Splunk用戶應優先升級至9.4.x或更新版本。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177031)

📌 **Cursor DuneSlide提示注入沙箱逃逸漏洞（CVE-2026-50548、CVE-2026-50549）**
AI程式碼開發工具**Cursor**存在兩項重大漏洞，允許攻擊者透過提示注入（prompt injection）繞過沙箱限制。「DuneSlide」攻擊鏈透過在編輯中的程式碼檔案內嵌入惡意指令，誘使AI代理在沙箱外執行任意系統命令。已發布修補程式，用戶應立即更新Cursor。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/critical-cursor-flaws-could-let-prompt.html) | [iThome](https://www.ithome.com.tw/news/177036)

📌 **SharePoint RCE CVE-2026-45659遭實際利用，CISA列入KEV**
微軟SharePoint的重大遠端程式碼執行漏洞**CVE-2026-45659**因已確認遭實際利用而被CISA列入已知遭利用漏洞（KEV）目錄。微軟已在2026年6月Patch Tuesday發布修補程式，尚未套用的組織面臨升高風險。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177025)

📌 **Microsoft Defender BlueHammer漏洞被用於勒索軟體攻擊**
Microsoft Defender for Endpoint中的**BlueHammer**漏洞正被勒索軟體營運商積極利用，以在部署酬載前停用端點偵測與回應（EDR）功能。微軟已發布緊急帶外更新（out-of-band update）解決此繞過問題。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177026)

📌 **ChocoPoC RAT透過假PoC儲存庫鎖定漏洞研究人員**
威脅行為者透過在GitHub上建立虛假的漏洞概念驗證（PoC）儲存庫，散布名為**ChocoPoC**的新型遠端存取木馬。當安全研究人員克隆並執行這些儲存庫時，惡意軟體即安裝後門，鎖定的正是負責漏洞揭露的社群。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-chocopoc-rat-targets-vulnerability.html)

📌 **Oracle E-Business Suite CVE-2026-46817——全球逾900臺執行個體曝險**
Oracle E-Business Suite的重大漏洞**CVE-2026-46817**已出現實際濫用跡象。Shadowserver Foundation統計顯示，全球仍有**超過900臺EBS執行個體**暴露於公開網際網路。此漏洞允許未經驗證的攻擊者在Oracle E-Business Suite的Web層遠端執行程式碼。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177037)

📌 **19歲Scattered Spider嫌犯從英國引渡至美國受審**
一名年僅19歲的**Scattered Spider**網路犯罪集團成員已從英國引渡至美國，面臨一系列針對大型科技公司的高調資料外洩與SIM卡置換攻擊相關指控。此逮捕行動顯示國際執法機構對英語網路犯罪地下世界的持續打壓。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/19-year-old-scattered-spider-suspect.html)

📌 **Ousaban銀行木馬以假PDF誘餌鎖定伊比利半島銀行用戶**
名為**Ousaban**的新型銀行木馬正利用假PDF發票誘餌，鎖定西班牙與葡萄牙銀行使用者。該惡意軟體執行網路注入、憑證竊取及OTP攔截，以入侵網路銀行交易會話。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/ousaban-banking-trojan-targets-iberian.html)

📌 **SEO毒化軟體下載網站利用ScreenConnect散布AsyncRAT**
攻擊者利用SEO毒化的軟體下載網站，誘騙用戶安裝**ScreenConnect**遠端存取工具，再進一步部署**AsyncRAT**進行持續監控與資料竊取。此活動鎖定搜尋免費軟體下載的用戶。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/seo-poisoned-software-sites-abuse.html)

---

## OPSWAT可以怎麼幫上忙

今日摘要中的多項威脅涉及**基於檔案的惡意軟體傳遞**（假PDF誘餌、SEO毒化安裝程式、假PoC儲存庫、惡意Chrome擴充功能）。OPSWAT MetaDefender的**多引擎威脅偵測**（30+防毒引擎）結合**深度內容 disarm 與重構（CDR）**，可在檔案層級消除威脅——在PDF、Office文件與可執行檔送達終端使用者之前移除其活性內容。**Claude Code隱寫術事件**與**ChocoPoC假PoC儲存庫**凸顯開發者工具與程式碼儲存庫被武器化的日益升高的風險——OPSWAT的CI/CD管道檔案安全解決方案可在建置階段掃描工件，偵測看似合法程式碼套件中隱藏的惡意軟體。

🔗 **OPSWAT解決方案：** [MetaDefender Platform](https://www.opswat.com/products/metadefender)
