---
title: "CISO 每日摘要：韓國企業協作平台 Dooray! 被駭，客戶資料外洩，API 服務暫停 (20261116)"
description: "三起獨立的威脅活動凸顯了 AI 基礎架構、協作平台與軟體供應鏈風險的加速。亞馬遜記錄到 AI 代理程式自主搜尋面向網際網路的 LLM 閘道與應用程式構建器的 API 金鑰。Dooray! 入侵凸顯了第三方 SaaS 風險，已確認影響多個韓國企業的資料外洩。BO Team 對 VMware vCenter 的 Log4Shell 利用導致深層網路入侵與代碼簽名伺服器存取，暗示供應鏈攻擊意圖。共同線索包括對預設憑證、未修補的已知漏洞及擴大攻擊面中不充分的密鑰管理進行利用。"
pubDate: 2026-11-16
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 韓國企業協作平台 Dooray! 被駭，客戶資料外洩，API 服務暫停

根據 iThome 報導，韓國企業協作平台 Dooray! 遭受安全入侵，可能影響多個使用該服務的企業。運營商已確認部分客戶資料被竊取，並緊急停用 API 服務以遏止事件。

Dooray! 提供訊息、專案管理和行事曆等職場協作工具，廣受眾多韓國公司使用。此次入侵引發對平台客戶群中專有商業通訊、專案資料及員工資訊外洩的立即關切。

使用 Dooray! 的組織應立即評估其在該平台上儲存的資料，監控連接系統的異常活動，並為外洩資訊可能帶來的下游影響做準備。API 暫停將會中斷依賴該服務的自動化工作流程與整合。

### 📌對 CISO 的影響

- **審計並強化 AI/LLM 基礎架構暴露面 —** 盤點所有面向網際網路的 AI 應用程式、模型閘道與推論端點。強制所有管理介面進行身分驗證，輪換預設憑證（尤其是 LiteLLM 主金鑰），並在程式庫、容器映像與 CI/CD 管線中實施密鑰掃描。將 AI 應用視為生產系統，對異常使用與消費模式進行等效監控。
- **評估第三方 SaaS 協作平台風險 —** 立即評估儲存在 Dooray! 與類似協作平台中的資料。向供應商請求事件詳情，確定任何暴露 PII 或專有資料的法規通知義務，並在服務暫停期間為依賴 API 的整合建立應變工作流程。
- **優先處理舊版漏洞修補與供應鏈防禦 —** 掃描 VMware vCenter 與其他資產中未修補的 Log4Shell（CVE-2021-44228）實例。利用硬體安全模組強化代碼簽名基礎架構，為建構系統強制執行多因素驗證與分層存取，並監控未經授權的憑證使用。實施軟體組成分析以偵測建構管線中的惡意依賴項注入。

**參考來源:** [韓國企業協作平臺Dooray!遭駭恐波及多家企業，已證實部分客戶資料外洩，緊急停用API服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1SMVJtcV9ucHZPc1czendpOFkxR19YWFJxV1g1N1FaV0lfelJheGFNdXZKVFhrbkpGbVpxQ293c2FmTFh3X29SUGJ1cUNNZw?oc=5>)

---

## 本週活躍威脅

📌 **亞馬遜發現 AI 代理程式活動，鎖定 LiteLLM、Dify 及其他應用程式竊取 API 金鑰**

亞馬遜威脅情報團隊發現一項活動，使用 AI 代理程式（很可能在 ARTEX 滲透測試框架上運行）搜尋面向網際網路的 AI 應用程式（包括 LiteLLM、One API、Dify、Langflow、RAGFlow 及其他 LLM 閘道與應用程式構建器）中暴露的 AI 提供者金鑰。代理程式提取儲存的憑證，驗證其有效性，並將其加入共享池供進一步濫用。根據簡體中文提示詞與時區設定，攻擊者被評估為中國相關組織。

**參考來源:** [Amazon Uncovers AI Agent Campaign Targeting LiteLLM, Dify, and Other Apps for API Keys](<https://thehackernews.com/2026/11/amazon-uncovers-ai-agent-campaign.html>) 

---

📌 **BO Team 利用 VMware vCenter 上的 Log4Shell 漏洞，入侵俄羅斯公司代碼簽名伺服器**

烏克蘭來源的威脅行為者 BO Team 利用未修補的 VMware vCenter 7.0.3 伺服器上的 CVE-2021-44228（Log4Shell）漏洞取得 root 權限，隨後在數個月內橫向移動至一間俄羅斯軟體開發商的網路，最終入侵該組織的代碼簽名伺服器與 CI/CD 基礎架構。卡巴斯基評估這很可能是一次在完成前被阻斷的供應鏈攻擊嘗試。

**參考來源:** [BO Team Exploits Log4Shell in VMware vCenter, Compromises Russian Firm's Code-Signing Server](<https://thehackernews.com/2026/11/bo-team-exploits-log4shell-in-vmware.html>) 

---

📌 **Red Hat Quay 揭露兩項重大漏洞，可導致持久性金鑰與私有映像檔被竄改**

Red Hat 揭露其 Quay 容器映像檔註冊伺服器中存在兩個嚴重漏洞。CVE-2026-123710，CVSS 9.8，涉及服務金鑰輪換中的權限驗證缺陷，允許攻擊者插入非過期簽署金鑰，該金鑰可存活於密碼重設、機器人帳戶令牌重新產生與 Quay 重新啟動之後，從而偽造其他存放庫的存取令牌。CVE-2026-110697，CVSS 9.9，讓標準帳戶能存取其他租戶的機器人帳戶與驗證令牌，從而進行偽冒與竄改私有容器映像檔。這兩個缺陷均影響 Quay 版本 3.9 至 3.18，且無需暴露於公共網際網路；不需要匿名存取，但僅停用匿名存取並不能消除風險。Red Hat 已針對多個 3.x 分支發布修補程式，並確認 Quay.io 已針對 CVE-2026-110697 完成修補。對於 CVE-2026-123710，Red Hat 建議限制金鑰管理端點的存取，並審核或移除未經授權的簽署金鑰；對於 CVE-2026-110697，則建議檢視受影響的機器人帳戶並輪換相關驗證令牌。

**參考來源:** [Red Hat Quay爆兩項重大漏洞，攻擊者恐植入不會到期的金鑰、竄改私人容器映像檔 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBXWUg2TE8xUDI4NW0yS01pV25zc2U2TXJ3X2RkczM4a0IzcUlkR2xoa2lmaDlKeVQxd09TMUc5TU1tMXEyQXo3Vm1xY2NaUQ?oc=5>) 

---

📌 **SANSAR Linux 隱藏式加密礦工惡意軟體利用經過修改的 NVIDIA 程式庫掩蓋 GPU 活動**

Elastic Security Labs 將一項於 2026 年 10 月底被觀察到、以經濟動機為目標的 Linux 隱藏式加密礦工作業追蹤為 REF3364，認為其與名為 SANSAR 的 Rust 型工具組有關。初始存取是透過暴露的 Ray 作業代理程式取得，隨後威脅行為者新增 SSH 金鑰以維持持久性，部署核心隱藏程式來隱藏程序與檔案，並安裝經過修改的 NVIDIA 管理程式庫外掛程式，使 GPU 使用率顯示為零，並替換錯誤的溫度與電壓讀數。SANSAR 透過 Tor 的洋蔥服務進行通訊，管理 CPU 與 GPU 礦工（包括 XMRig 與 SRBMiner-MULTI），並下載以太坊智慧合約地址供 netns 隱藏後門使用，該後門會擷取 C2 詳情並開啟反向 shell。Elastic 指出核心隱藏程式原始碼中含有土耳其語註解，但未識別出威脅行為者。擁有用於 AI 工作負載的 GPU 基礎架構的組織應驗證誰可提交作業，以及 GPU 監控程式庫是否遭到變更。

**參考來源:** [SANSAR Linux Cryptomining Malware Uses Modified NVIDIA Library to Hide GPU Activity](<https://thehackernews.com/2026/11/sansar-linux-cryptomining-malware-uses.html>) 

---

📌 **六個未修補的 Danfoss 製冷控制器漏洞可能允許無需登入即進行遠端接管**

Midnight Blue 披露 Danfoss AK-SM800A 製冷控制器中存在六個未修補漏洞，可能允許在無需驗證的情況下進行遠端接管。所有 5.3.2 版本之前的韌體版本均受影響，且 11 月發布的版本 5.4.0 未修補這些缺陷，因為該版本可能是在披露之前建構的。五個缺陷位於以根權限執行的無登入網路請求處理程式中；研究人員在版本 3.3.0 上演示了根程式碼執行，並確認版本 5.3.2 存在相同漏洞。第六個缺陷位於強制嚴格模式的閘道中，使其崩潰在經過額外操作後可能導致程式碼執行。攻擊者可能變更控制器設定、觸發除霜週期、從記錄中隱藏活動，並因缺乏安全開機而安裝可存活於出廠重設與韌體更新的程式碼。始於 10 月 11 日的法國攻擊與第二波歐洲攻擊導致不必要的除霜週期並摧毀存貨，雖然沒有任何機構將這些事件與這六個漏洞關聯。比利時、愛爾蘭與德國敦促營運者將管理介面從網際網路移除、使用受保護的 VPN 或內部網路存取、驗證設定與認證，且不應單獨依賴韌體更新、變更密碼或嚴格模式。

**參考來源:** [Six Unpatched Danfoss Refrigeration Controller Flaws Could Allow Remote Takeover Without Login](<https://thehackernews.com/2026/11/six-unpatched-danfoss-refrigeration.html>) 

---

📌 **Mozilla 推出 Firefox 160 更新，修復 99 個安全性漏洞，包括沙箱逃逸與權限提升**

iThome 報導，Mozilla 推出 Firefox 160，修復 99 個安全性漏洞，其中包括沙箱逃逸與權限提升漏洞。

**參考來源:** [Mozilla發布Firefox 160改版，修補99個安全漏洞，涵蓋沙箱逃逸與權限提升 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1oV0JsU0pMeUhDcDNDTFdwanpvamFjbDBpZi1VM2lPN29YQkVpTGNHMS1ORmFIT041R0lHU3lMNmlfOUNnckVDS1l2a2FKQQ?oc=5>) 

---

📌 **PostgreSQL 修補 52 個漏洞，包括存在 22 年的遠端程式碼執行漏洞**

iThome 報導，PostgreSQL 修補了 52 個漏洞，其中包括一個存在 22 年的遠端程式碼執行漏洞。

**參考來源:** [PostgreSQL修補52個漏洞，含存在22年的遠端程式碼執行漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5KTG5XRS10Qno1OWh2UnhCQndoeUNnaV9CejdObmF1cUg2c3IzWC10cmphVGc0NHdYaU96akhBNGxHNFV5bElFNmxnVWEydw?oc=5>) 

---

📌 **Check Point 閘道透過 PHP2Shell 漏洞遭受攻擊；攻擊者透過虛擬化平台植入後門並破壞資料**

iThome 報導，Check Point 閘道裝置透過 PHP2Shell 漏洞遭受攻擊，攻擊者藉由虛擬化平台植入後門並造成資料破壞。

**參考來源:** [Check Point閘道設備遭PHP2Shell漏洞攻擊，駭客植入後門並透過虛擬化平臺進行資料破壞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB1bXBEcjdJMnVIVENIZWFIc09FbGcyNjJManhZakdiekdWVW9BZVdHSmYxQ3RVQk9WODFsR2ZkQkp1QUVfZDI3Ml9lcU1TQQ?oc=5>) 

---

📌 **CISA警告 Check Point 權限提升漏洞正遭主動利用**

CISA 警告稱，Check Point 權限提升漏洞正遭主動利用。使用受影響 Check Point 產品的組織應評估暴露風險，並套用可用的緩解措施或補丁。

**參考來源:** [CISA警告Check Point權限提升漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE44eTNVV042dXhTUVFRMDVOMktqU01NMjZ3S1lGd25YZW9paDZwZXktckxXVml5ZlpsLVVQNkxRS1FXSVgzbHhSZElEZklHdw?oc=5>) 

---

📌 **Chrome 修復今年第八個零日漏洞**

Chrome 已修復今年第八個零日漏洞，編號為 CVE-2026-125350。用戶應更新 Chrome 以防範主動利用。

**參考來源:** [В Chrome исправили восьмую 0-day-уязвимость в этом году](<https://xakep.ru/2026/11/16/cve-2026-125350>) 

---

📌 **駭客利用超過 4,800 個遭入侵的 GitHub 帳戶，針對 60,000 個存放庫並盜取雲端憑證**

攻擊者入侵超過 4,800 個 GitHub 帳戶，並針對大約 60,000 個存放庫以盜取雲端憑證。存放庫擁有者應檢閱帳戶存取權限、輪換已暴露的憑證，並審核未經授權的變更。

**參考來源:** [駭客利用逾4,800個遭入侵GitHub帳號，鎖定6萬個儲存庫竊取雲端憑證 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ZZ1ZhQzFMcUtmNjd2d3R4MEhLRlJxbTRjVzZpb2xjYVptLUE1cGkwVkNlQTNlVm4xQzA3ZWxQbS1EbUdYTE93SENpMWNVdw?oc=5>) 

---

📌 **台灣調查局破獲BossAI駭進消防系統案；三嫌竊取OHCA資料並轉售予殯葬業**

台灣調查局已破獲BossAI入侵消防系統事件，三名嫌疑人涉嫌竊取院外心搏停止資訊，並轉售給殯葬業。

**參考來源:** [調查局破獲BossAI駭侵消防系統案，3嫌竊取OHCA資訊轉售殯葬業 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5rendkVGphOVJVelZsUmNKOHZjNkc3alNuWHJsTHFZR09tN2lSbUJnNk10anoxeER6ekZCc2s4eERQVkRoMW9OUWRNX1pBdw?oc=5>) 

---

📌 **ArcticRAT Android惡意軟體利用Grok AI分析竊取的銀行簡訊**

據報導，ArcticRAT Android惡意軟體使用Grok AI來分析竊取的銀行簡訊。

**參考來源:** [ArcticRAT Android Malware Uses Grok AI to Analyse Stolen Banking Texts - Hackread](<https://news.google.com/rss/articles/CBMigwFBVV95cUxPQUVkcllUSVkydVdPTUFuUTdnUzB4NmpwZmN4YUVFUkxpblhoTmlnWHB0SFZiS2xrbmRvT0gtd1U1NzJBeWxhU3hxUVRtaUYzTjRBRGpHbS0tUGNDYm1MUEFPSGRFRDlpbWpDQkNfTjk5aUhjVkJhMFQwdzRBTHppQWkxYw?oc=5>) 

---

📌 **蠕蟲SKit透過ScreenConnect第三方擴充功能漏洞擴散，感染近500台主機**

SKit蠕蟲正透過ScreenConnect第三方擴充功能漏洞擴散，並已感染近500台主機。

**參考來源:** [蠕蟲SCKit利用ScreenConnect第三方延伸套件漏洞散布，近500臺主機被感染 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4xN3Z0ZTNJbWRtTG5jM0lDUGE1NktHdUpWMVVyNFpTa0dHbDJCcEFMX1EyMVU0UDljeGEzb0lwOUZtdWhjcUdZU1lseS1qZw?oc=5>) 

---

📌 **Retadup 蠕蟲在被清除七年後重現，用於傳播 CoffeeLoader 惡意軟體**

Kaspersky 表示，透過受感染 USB 隨身碟傳播的復活版 Retadup 蠕蟲，現正在散佈 CoffeeLoader 惡意軟體。感染過程使用 NSIS 為基礎的安裝程式，放置經過修補的 7z.dll，並透過 rundll32.exe 載入，利用 Armoury 封包程式以及 GPU 上的 OpenGL，從內建的 C2 伺服器擷取並解密 CoffeeLoader 殼碼。持久性透過將 7z.dll 複製到 %PROGRAMDATA% 或 %LOCALAPPDATA% 下的子資料夾，並新增 Run 登錄機碼來達成，隨後將程式碼注入合法程序，例如 dllhost.exe 或 svchost.exe。Kaspersky 封鎖了大約 15,000 部系統免遭感染，主要集中在秘魯、安哥拉、俄羅斯和玻利維亞。CoffeeLoader 支援將下一階段惡意軟體注入程序、儲存並執行可執行檔，或透過 rundll32.exe 儲存並執行 DLL。

**參考來源:** [Retadup Worm Resurfaces 7 Years After Takedown to Spread CoffeeLoader Malware](<https://thehackernews.com/2026/11/retadup-worm-resurfaces-7-years-after.html>) 

---

📌 **Windows 零日漏洞 SignDrop 被曝光，Microsoft CLFS 保護機制遭利用以提升權限**

iThome 報導，一個名為 SignDrop 的 Windows 零日漏洞，其中 Microsoft 的 CLFS 保護機制被利用來提升權限。

**參考來源:** [Windows零時差漏洞SignDrop曝光，微軟CLFS防護機制反遭利用提升權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1JZUxxanJzcEVERmhOSkk1Rk12VXlkU0xmQ0RJRjUzUU9uX3I2YkowTGdmYllETkVaX3lRV1RJMTQ3aHBVWjA3cUdRd2ZnUQ?oc=5>) 

---

📌 **長榮物流安全事件調查結果發布，員工個人資料與商業資訊外洩**

iThome 報導，長榮物流安全事件的調查已結束，發現員工個人資料與商業資訊外洩。

**參考來源:** [長榮物流資安事故調查結果出爐，員工個資及營業資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5aSkRpX1IxYk95Y3pGd19qTzU2Ul9IZTZTYTBHdTJ4RVlKRU9nc1d6RjljSXBZejdrWEIwZlM1a1ZqVy1fdXp2SkhuUXBlZw?oc=5>) 

---

📌 **DaouOffice 據報遭零日攻擊；共用客戶帳戶遭暴力破解，至少三家金融機構受影響**

iThome 報導，南韓企業協作平台 DaouOffice 據報遭到利用零日漏洞的攻擊，攻擊者亦暴力破解共用客戶帳戶，影響至少三家金融機構。

**參考來源:** [韓國企業協作平臺DaouOffice傳遭零時差漏洞攻擊，客戶共用帳號又遭暴力破解，至少3家金融業者受駭 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtajJ6QTJTY0Y3QmpyUlZnMnRINGtQRE1qaWE4UE9KNDFKQlhPSFVTcEp5NzVOdjVvVzNKTmRQZDBmMWJKRnB1Uml6bzBNQQ?oc=5>) 

---

📌 **Zoom 修補 Windows Workplace 關鍵漏洞，未修補可能導致遠端權限提升**

iThome 報導，Zoom 修補了 Windows 版 Workplace 中的嚴重漏洞，並警告未更新可能讓攻擊者遠端提升權限。

**參考來源:** [Zoom修補Windows版Workplace重大漏洞，未更新可能導致攻擊者遠端提升權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE01UklVMm4tM1M5SjdoeEhzcXIxVEdSR3daSE9VRkY5d2Mxc185Wi0tQm9sOUQ1aTMxMUxuRG5Wcl8wblZIeTE2NlZDMk9mQQ?oc=5>) 

---

📌 **國家級威脅行為者 SilentAir 據報鎖定台灣行動用戶，濫用電信訊號攔截擷取簡訊與通話內容**

iThome 報導，國家級威脅行為者 SilentAir 據報鎖定台灣行動用戶，透過利用電信訊號攔截取得簡訊與通話內容。

**參考來源:** [國家級駭客組織SilentAir鎖定臺灣手機用戶，濫用電信訊號攔截簡訊與通話 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE56WndGdXNBOWN0SDhJXzF3WWZyUFloTEJ5X29PUTlZSTZrWmo2bnp2UDV6ZjhoRjBHTS1NY3BoMDFrX0EyQkkxUmtpU21RUQ?oc=5>) 

---

📌 **Check Point 修補 Gaia OS 已遭利用的高危權限提升漏洞**

Check Point 已修補 Gaia OS 中一個高危的權限提升漏洞，該漏洞已在野外遭到利用。

**參考來源:** [Check Point修補已遭利用的Gaia OS高風險權限提升漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9nTnE5TFRraUhJZGtNbUpHNXAyckJZYTBnYzA2SVZ0eG9mMHdxeGhheWt1bU16TzQxTDZieEFvSUhYSU9pMkZmZi1lNVdXdw?oc=5>) 

---

📌 **FBI 警告駭客正使用 AI 工具 ARTEX 加速入侵，部分事件在不到三小時內取得系統權限**

FBI 警告威脅行為者正使用 AI 工具 ARTEX 加速入侵，部分事件在不到三小時內取得系統層級權限。

**參考來源:** [FBI警告駭客利用AI工具ARTEX加速入侵，部分事件不到3小時取得系統高權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9TWHZHdHdiWTZvTHpOTklWSUtJUXEzMWxleUV6Z2FEYXIyVGdEOFRHZjJLV1NGTEhMUExPMmJLcmdCUUs2MGZmY2lTSFBPUQ?oc=5>) 

---

📌 **密碼重設漏洞**

iThome 報導一個密碼重設漏洞。

**參考來源:** [密碼重設漏洞 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxON3FTVi16eTdlUWNJWHBrV3M0T2xpa0FDLVpHTVAtTmZjcmVOZlU0SWJOUFhDR2Zrc0pZSUQ3TWxWeDFTcm9ZVXYzdDdRb3lnLWFielRHRWVkV3ZieW5HUEFXd0JrTi16Tmp2X3lkWFYyQWxQcmhaTW5rR0VXRG1PQUlDNVNnelZUQlp3S1Bn?oc=5>) 

---

📌 **Uber 受 Fireworks AI 事件影響，洩露數千名司機身份識別詳情**

iThome 報導，Uber 的 Fireworks AI 事件暴露數千名司機的身份識別資訊。

**參考來源:** [Uber因Fireworks AI事件，外洩數千司機證件資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Vay1ERWtjeHJHU1NlMmhpMTN1UXotd1l5dVVlZGx5dmx2aHI5anI2N3BiTjVEUTZJS0FXbGxmQnQwelZZcnFvTWZBVEc4QQ?oc=5>) 

---

📌 **南韓客戶服務外包供應商 MetaM 遭駭，加密貨幣交易所 Coinone 受影響**

iThome 報導，針對南韓客戶服務外包供應商 MetaM 的駭客攻擊影響加密貨幣交易所 Coinone。

**參考來源:** [韓國客服委外業者MetaM遭駭，加密貨幣交易所Coinone受波及 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RZmZNbkhaQmtyVUVyb2JGajJ3MVdxWHQyNGFpSnJnRm5LZDlta3FHaDdkS2tOLVh0NW9pWHZiSkRSRXF4RDFaRTNOMnlUdw?oc=5>) 

---

📌 **北韓加密貨幣竊取資助非法武器與其他軍事行動**

Eurasia Review 報導，北韓的加密貨幣竊取資助非法武器與其他軍事行動。

**參考來源:** [North Korea’s Cryptocurrency Thefts Fund Illicit Weapons, Other Military Efforts - Eurasia Review](<https://news.google.com/rss/articles/CBMiugFBVV95cUxNdC1RdENuS2h2bjg4ZzEyVEZlSGppVWo0c0RlU2RoYWdpRjN5c3UxWS1qVGZMMzNDY0ZWRnhYY0JnLTZIaG1IMXlGUkcxRjg4NF9fSVo0WmU4aEcwUE9NeWxhYnl0ZTRJbm04eUg5Ulo2UGVhNGNkR3BXLVAzd09tUTJTemJqb3pQQjE0UTJZaWFsbUltdTFMdU1VYlktaHZHTk1wZl96Y1A5bkYwdTVGT3JWY0VlRkJIU3c?oc=5>) 

---

📌 **Fireworks AI 事件擴大，惡意 Anthropic Claude 擴充功能出現於 Cursor 市集 - iThome**

iThome 報導，Fireworks AI 事件發生後，一個惡意的 Anthropic Claude 擴充功能已於 Cursor 市集發布。

**參考來源:** [Fireworks AI事件波及，惡意版Anthropic Claude擴充程式於Cursor市集上架 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE80YVo2WG5zbDZTNmNCMGNsN293c3J6NFJqellZRmNxWGNncVF1YjNUdDZ3Vk5sZXg2eVM4N2RVNmxKbTM3U2h4WnEySmstdw?oc=5>) 

---

📌 **MongoDB 修補可在切換節點時導致資料庫當機的重大缺陷 - iThome**

iThome 報導，MongoDB 已修補一個重大漏洞，該漏洞可能導致資料庫節點在容錯移轉或節點切換期間當機。

**參考來源:** [MongoDB修補可能導致資料庫切換節點時當機的重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5FY3F3YjhkaFVyZS1IZFJhZzAyOENEbGM4d2xWLUlLX3RMLXp3dFpGWGZUMUduZGt1U1BfalREWlFiODJtbzdPaVZxRzRMZw?oc=5>) 

---

📌 **SilentAir - iThome**

iThome 報導指出 SilentAir 為一項已報告的網路安全項目。

**參考來源:** [SilentAir - iThome](<https://news.google.com/rss/articles/CBMiUkFVX3lxTFBEUXFRRTByS1phY2F1RjloZTNqWHJUY1dWNWJJdG5UYVlFTFpJY0Frd2gtc0tTNTJ3QlV6LWlZa1FZdFZISGVxTWpwTTJzalo5cGc?oc=5>) 

---

📌 **自託管 Claude 代理人從沙箱擴展至控制平面；企業管理憑證與工作記錄**

iThome 報導，自託管 Claude 代理人部署已從沙箱環境擴展至控制平面，讓企業自行管理憑證和工作記錄。

**參考來源:** [Claude代理自架從沙箱擴及控制平面，企業可自管憑證與工作紀錄 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1Xa3FPMGZRbVpPeFRvSzBnUmt5cElhamRWeFlnaFdlaHpxZkhxdzJkd0Z6aEd5aGtRQ3p5UVZZUDlrMzFWWWVMTE9Yd1J4Zw?oc=5>) 

---

📌 **惡意擴充功能**

iThome 關於惡意擴充功能的報導，可用標題中沒有進一步細節。

**參考來源:** [惡意擴充功能 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxNRDRBSFROYU9IQ3F4WDdLa24wdGMzV09xWUxQU0JvZXNqRmt4YlhndVdMYkJ3NXRLdjc1YjJzWS10d0ZWWGtkZk4yckRpZjBZRlNoUW9mNGt0ekZ6bGpuRHBMdzdVeU5HUVUxYV9rbGhpQjQ1ZnROc2M5REdpTnJfSTc1SXhXMmNjLVZzdkFR?oc=5>) 

---

📌 **防止勒索軟體入侵！CRA for NAS 加強 Synology 異常存取監控**

iThome 報導，CRA for NAS 加強 Synology 異常存取監控，以協助防止勒索軟體入侵。

**參考來源:** [防範勒索軟體入侵！CRA for NAS 強化 Synology 異常存取監控 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1YQmdPT1pwdy1GVXh2YlZzQlV5bTRxdy1GanhSVWRucTA5c3FWSjlHQlZMajVqbzU0ejEwZVc5STIxeHVHcnR5ejBzZw?oc=5>) 

---

📌 **Google 修補漏洞披露時程，因補程式可能成為攻擊者線索**

Google 已修補其漏洞披露時程，並指出補程式本身可能為攻擊者提供利用漏洞的線索。

**參考來源:** [修補程式也可能成為攻擊線索，Google重訂漏洞揭露時程 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9NX1FCWW5JY28xSlUxZ1FqTERTSDR4M2U4ZzF0Tnp3WWVlRzlIRGV1eWFjeVk5Q0xQMjV1YmFvQVhuMDd6UTVBNWplTF9jZw?oc=5>) 

---

📌 **NHN Dooray**

iThome 報導 NHN Dooray。

**參考來源:** [NHN Dooray - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTE9rTm1DYkxwNklZd1UyUk5RdGxQdjhDZ1FkNFZueGlHMFU1YWFaLUQwNFhMTm5DdHVPSVFJQi13RUU4TEhJSHp1U1BDTjBsdzVfTGlv?oc=5>) 

---

📌 **控制平面**

iThome 報導控制平面。

**參考來源:** [控制平面 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE9DZUxtbXlkbHIyVDZBa1BnZ0ptbkFkenVzZC04QnhLZEFDbHBPeTJ4NWszN1ZQc0dTNkNRaExlcXhRZnQtYnhBd2RSeHpJMEFFVnh0STZidHpkcnZ4TTdfWEkxZk1BQy1hZ1lfaUl6N3dEMmNCSWc?oc=5>) 

---

📌 **AhnLab 提出五項帳戶保護建議**

iThome 報導，AhnLab 根據其安全指導方針，提出了五項保護用戶帳戶的建議。

**參考來源:** [AhnLab 提出帳號防護五大建議 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTFB2WWtnXzNCczBPYUJabHVPUUY2QnZxRXJRa05pMkUtRHo4NDk4cTdySWF4OEE4bmxveDRadFo2WjB3eDNkQVhodHNXZw?oc=5>) 

---

📌 **遠端權限提升**

iThome 在其安全報導中報導了遠端權限提升。

**參考來源:** [遠端權限提升 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxNRlVlUC0wUnZUd1VLejN4RmppUFRqSWNlNE0zRGl2SVcxUFJUY0Z3OGtlODZkX19lZDBiaU9yZjNobnFYcDNQSllCNF9FUktBc3BSWlFDVUYtNjRGQWJNRzRQQTNQLVFjRnBtY1poRnZ4dlMwQ200MVdLdGVOWU0tM1J2NkxILTB4QjIycmNB?oc=5>) 

---

📌 **媒體：Roskomnadzor 已將機器學習導入交通過濾系統**

Xakep 報導，俄羅斯媒體表示 Roskomnadzor 已在其交通過濾系統中實施機器學習。

**參考來源:** [СМИ: Роскомнадзор внедрил машинное обучение в систему фильтрации трафика](<https://xakep.ru/2026/11/16/tspu-filter>) 

---

📌 **中飛科技引進 Qsec Global 安全解決方案**

iThome 報導，台灣增值經銷商中飛科技已與 Qsec Global 合作，為半導體供應鏈、高科技製造、政府，以及醫療和金融組織部署 Qsec DefendX 威脅情報防禦管理系統。

**參考來源:** [中飛科技引進 Qsec Global 資安方案 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1EME1kOFRMNFNKU2o4bmNTR0lKbmxpUVlLR2xzb1ZNVkswX3R6NThOcVVBd3ZRQS1ON245dWVXRWFkNVUxazlQeHd0OA?oc=5>) 

---

📌 **突破 AD 保護盲點：Semperis 協助 Odin Information 提升企業身份韌性**

iThome 報導，Semperis 與 Odin Information 合作，以弭補 Active Directory 保護缺口並強化企業身份韌性。

**參考來源:** [打破 AD 防護盲點，Semperis 賦能奧登資訊升級企業身分韌性 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5hRWpzRDNDOVhNcFdzOG1xVnlJbV9WLXJYeUZxejVWNjBuc3FGR0x1aHFNVGtVN3RqNkg2OExqeTNlOVV2SnhCQldnNA?oc=5>) 

---

## OPSWAT 可以怎麼幫上忙

- [MetaDefender Endpoint](<https://www.opswat.com/products/metadefender/endpoint>) — 在滿足終端安全條件前封鎖可攜式媒體，可降低 Retadup 報告中所述的初始 USB 感染向量。

**參考來源:** [Retadup Worm Resurfaces 7 Years After Takedown to Spread CoffeeLoader Malware](<https://thehackernews.com/2026/11/retadup-worm-resurfaces-7-years-after.html>)

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261116-1-1794877444686 -->
