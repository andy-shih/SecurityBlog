---
title: "CISO 每日摘要：vCenter 零日漏洞 CVE-2026-123890 遭 Armory Castle 利用 (20261124)"
description: "威脅行為者正利用 vCenter 零日漏洞 (CVE-2026-123890) 來入侵基礎設施，而 Microsoft Entra Connect Health 漏洞暴露系統管理員憑證，且 CISA 旗幟醫療影像與 MSP 電子郵件平台遭主動利用。立即措施包括限制 vCenter 管理存取、審計 Entra Connect Health 設定，並為 CISA 列出的漏洞套用廠商修補程式。"
pubDate: 2026-11-24
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## vCenter 零日漏洞 CVE-2026-123890 遭 Armory Castle 利用

根據 iThome 報導，駭客組織 Armory Castle 已主動利用 VMware vCenter Server 中一個名為 CVE-2026-123890 的零日漏洞。該漏洞允許無需驗證即可遠端執行程式碼，並正被用於現實世界中的入侵行為。

### 📌對 CISO 的影響

- **限制 vCenter 管理平面暴露 —** 僅將 vCenter 管理介面的網路存取限制於受信任的系統管理網段。對所有 vCenter 系統管理部署跳躍主機或特權存取工作站，以在 CVE-2026-123890 修補程式待定期間縮小攻擊表面。
- **審計 Entra Connect Health 資料流動 —** 檢視透過 Entra Connect Health 同步的系統管理員聯絡資訊與租用戶中繼資料。停用不必要的資料收集，強制執行最小權限服務帳戶，並監控對健康服務的異常查詢，這可能指示偵察活動。
- **優先為 CISA 列出的醫療與 MSP 目標進行修補 —** 加速部署 CISA 強調的醫療影像軟體與 N-able 電子郵件平台漏洞的修補程式。驗證利用偵測規則是否涵蓋相關 IOC 與 TTP，並評估任何使用 N-able 的受控服務提供者的第三方供應商風險。

**參考來源:** [vCenter 零時差漏洞 CVE-2026-123890 遭駭客組織 Armory Castle 實戰利用！ - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5TS1JwZGpOVXFQM0RPM1RRZllLQ0lzNFdZTkRTRWIxOVgyU1RyNEpKQmYwZi1wV2x3ekNTRDBTUnlYT3VkcjQydjJyWQ?oc=5>)

---

## 本週活躍威脅

📌 **Microsoft Entra Connect Health 漏洞暴露系統管理員與租用戶資料**

根據 iThome，Microsoft Entra Connect Health 中的一個漏洞已被利用，導致企業系統管理員聯絡資訊和租用戶資料外洩。該暴露包括特權身分資訊，可能助長有針對性的網路釣魚或進一步入侵混合身分環境。

**參考來源:** [微軟Entra Connect Health漏洞遭利用，企業管理員聯絡資訊與租用戶資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA1Rzc0b1lmOTVPUVBhRVFKN09ycDJWd1BxQXZMeVZmYjBFeW9pa2hfUXAxT1pzamRHcTJWMFFVY0UtaVNSWkxzZlROeGlBdw?oc=5>) 

---

📌 **CISA 警告醫療影像軟體與 N-able 電子郵件平台遭主動利用**

根據 iThome，CISA 已發布警報，指醫療影像軟體與 N-able 電子郵件防護平台中的漏洞正遭主動利用。使用這些產品的醫療保健與受控服務提供者環境應優先進行修補，並檢討相關利用活動的偵測覆蓋率。

**參考來源:** [CISA警告醫療影像軟體、N-able郵件防護平臺漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAzT01VTVJieFI5eUZxXzd0NHE2czBYMXNEYTFiQmpqdXRhb3VUN1U2RDlFNGlNRUFCb2RMUUxyN1ZxMHIwMndqWWd3b0x4UQ?oc=5>) 

---

📌 **OpenAI 與 Cisco 發布 AI-assisted Linux 安全工具，在修補前攔截攻擊**

OpenAI 與 Cisco 推出 Shirudo，這是一個開源的 Linux 執行環境，讓 AI 代理部署動態 eBPF 控制機制，在不重啟服務的情況下防護易受攻擊的程式碼路徑。該系統建構於 Tetragon 之上，使用以 .bee 封裝透過 OCI 相容登錄表傳送的密碼學簽署防護盾，並在載入前進行 TPM 驗證。在一次測試中，由 Codex 生成的防護盾攔截了對正在運行的 Elasticsearch 服務的 Java4Shell 攻擊嘗試。目標是在防守者測試並部署永久修補時，提供機器速度防禦來對抗 AI 驅動的漏洞攻擊。

**參考來源:** [OpenAI and Cisco Unveil AI-Assisted Linux Security Tool to Block Exploits Before Patching](<https://thehackernews.com/2026/11/openai-and-cisco-unveil-ai-assisted.html>) 

---

📌 **Rackspace Spot - iThome**

iThome 關於 Rackspace Spot 的條目僅為新聞標題；未提供進一步技術細節或確認影響。

**參考來源:** [Rackspace Spot - iThome](<https://news.google.com/rss/articles/CBMiWEFVX3lxTE9ob1RrMEowd3BXak9ObEVFWmpjdThqeHZTNkFqSEluaUJTS0dMM19DUk9RM0JRZW10TEtvbVI4NlU0N0ZsLWk4V3JJcVo5MHlDZmtHQ0MzTXM?oc=5>) 

---

📌 **FBI 再遭駭，駭客可能存取警察 NCIC 資料庫**

Xakep 的條目僅為新聞標題，報導稱 FBI 再遭駭，且駭客可能已存取警察 NCIC 資料庫；未提供進一步技術細節或確認遭入侵。

**參考來源:** [ФБР снова взломали. Хакеры могли получить доступ к полицейской базе NCIC](<https://xakep.ru/2026/11/24/fbi-ncic>) 

---

📌 **韓國電力公司系統遭入侵，約152萬人資料外洩**

韓國電力公司報告稱，兩個系統遭到入侵，約152萬人之個人資料外洩，其中部分記錄包含銀行帳戶號碼與信用卡號碼。

**參考來源:** [韓國電力公社兩套系統遭入侵，約152萬人個資外洩，部分涉及銀行帳號及信用卡卡號 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5vT2h1UVQwOHNDd0dLWklZb3F5dnBQckpqek1zS0k1Q2ozOGtMdERTemcwZmxVNUN3ZFBxc1VhaXR2MDRNOEM5UjRJS1psdw?oc=5>) 

---

📌 **VMware vCenter 零日漏洞遭利用後，又現另一個9.8分嚴重身份驗證繞過缺陷**

Broadcom 已修補 CVE-2026-123903，這是 VMware Directory Service 中一個嚴重的身份驗證繞過缺陷，嚴重程度評分為10.0分中的9.8分，同時也修補了 VMware ESX、vCenter、Workstation、Fusion 與 Avi Load Balancer 中的其他缺陷；能夠存取 vCenter 的惡意行為者可繞過身份驗證並取得未經授權的存取，儘管 Broadcom 說明這個新揭露的缺陷與先前遭利用的 CVE-2026-123890 不同，且未說明該缺陷在野外遭到利用。

**參考來源:** [VMware vCenter Hit by Another Critical 9.8-Rated Auth Bypass Flaw After Zero-Day Exploitation](<https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html>) 

---

📌 **工業序列閘道器廣播其不安全狀態**

Dark Reading 報導，工業序列閘道器廣播不安全設定，使 OT 環境面臨潛在網路風險。

**參考來源:** [Industrial Serial Gateways Broadcast That They're Insecure](<https://www.darkreading.com/ics-ot-security/industrial-serial-gateways-broadcast-insecure>) 

---

📌 **AI 代理人在 11 分鐘內從缺陷發現取得根權限**

Amazon 威脅情報報告，一個與中國有關聯的威脅行動者使用 Cairn AI 代理人發現一個暴露的開源醫療影像應用程式中的零日漏洞，並在約 11 分鐘內取得伺服器的根權限。始於 9 月 8 日、持續約 48 小時的行動，針對東亞中國大陸以外的大學。

**參考來源:** [AI Agents Zip From Flaw Discovery to Root Access in 11 Minutes](<https://www.darkreading.com/cyberattacks-data-breaches/ai-agents-flaw-discovery-root-access-11-minutes>) 

---

📌 **偽短劇應用程式誘使用戶啟用無障礙權限；TWCERT/CC 建議 Android 用戶僅從官方商店下載**

TWCERT/CC 警告 Android 用戶避免側載偽冒流行短劇應用程式或偽裝成 Google Play 和 Chrome 更新的 APK，因為惡意應用程式可能要求不相關的無障礙權限來遠端查看螢幕或控制裝置。用戶應驗證開發人員資訊，拒絕不相關的權限請求，並保持 Google Play Protect 啟用。

**參考來源:** [冒名短劇APP誘導開啟無障礙權限，籲Android使用者僅從官方商店下載](<https://www.twcert.org.tw/tw/cp-104-11426-ea310-1.html>) 

---

📌 **韓國三星證券客戶申訴系統遭駭；超過 8,200 名客戶個人資料外洩**

iThome 報導，三星證券的客戶申訴系統遭駭，導致超過 8,200 名客戶的個人資料外洩。

**參考來源:** [韓國三星證券客戶申訴系統遭駭，逾8,200名客戶個資外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBRNEM3d3lFWnZfRmhPOWYyWjRNNkkwOXhBMzdvaG9zbkI4U2daaTdiRDBwR1ZrV3NCMzhJWnlHLXFGdHd0T2lrNU05MXRHUQ?oc=5>) 

---

📌 **安全研究人員揭露 Windows 零日漏洞 FastUnlock，潛在允許攻擊者在鎖定螢幕的電腦上執行程式**

iThome 報導，一位安全研究人員公開披露名為 FastUnlock 的 Windows 零日漏洞，可能使攻擊者能在鎖定螢幕的電腦上執行程式。

**參考來源:** [資安研究員公布Windows零時差漏洞FastUnlock，攻擊者有機會以此在鎖定螢幕的電腦執行程式 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE56N3g1ODZ0aG9WREZXZnNmZVRVSzktbnBsWkU3NUpqNG5YS2xmUVBrbFBvS2R2NDlzQWVZZ1hWTmF5WEtjVnVFU0gxdEpRZw?oc=5>) 

---

📌 **Google 釋出 Chrome 穩定版與延長穩定版更新，修補高風險不正確輸入驗證漏洞**

iThome 報導，Google 已釋出 Chrome 穩定版與延長穩定版更新，修補高風險不正確輸入驗證漏洞。

**參考來源:** [Google發布Chrome穩定版及延伸穩定版更新，修補重大等級的輸入驗證不當漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RLU0wNHhkODBHLVBaNDlWS2ZpaURRdmI1TVN2VnRuUGdOMkRGd0YyV1pZLXlueDhvQWpzZlU1WFU4bmJkRTgydHpJSVF5QQ?oc=5>) 

---

📌 **Microsoft 修復 Azure API Management 經典版漏洞，行為體鎖定客戶密碼**

挪威國家安全機構披露 Azure API Management 漏洞，影響多個企業，包括能源公司 Equinor 與 Skagerak Energi，未知行為體正積極尋求存取權杖、密碼與具名值。Microsoft 在 18 November 2026 發現該問題，並在 19 November 2026 關閉存取路徑；客戶在發現前已暴露，未經授權的第三方可能在 Azure API Management Classic 實例中存取到密碼。NSM 說明未發現挪威企業受到影響的證據，並指出對利用程度存在不確定性。該漏洞影響 APIM 經典層，v2 層實例不受影響。Microsoft 在 21 November 2026 發布指引，協助客戶識別並輪替暴露的密碼，其中可能包括具名值、身分提供者用戶端密碼、OpenID Connect 用戶端密碼、訂閱金鑰與直接管理 API 權杖。NSM 警告該漏洞影響挪威數個產業及國外實體。

**參考來源:** [Microsoft Fixes Azure API Management Classic Flaw as Actor Targets Customer Secrets](<https://thehackernews.com/2026/11/microsoft-fixes-azure-api-management.html>) 

---

📌 **駭客繞過 GitHub SHA 鎖定，本場網路研討會說明如何彌補安全漏洞**

駭客在與上游專案共享程式碼的分支中植入惡意程式碼，繞過了 GitHub SHA 鎖定；涉及案例包括 2026 年 3 月被入侵的 Trivy 套件，以及 5 月的 actions-cool/issues-helper 工具。鎖定可確保不可變性，但無法保證來源可信，因此鎖定的分支提交看似合法。GitHub Actions 工作流程鎖定檔於 2026 年 10 月 28 日正式推出，可將執行連結至記錄的提交，但無法判斷依賴項是否安全，且不支援 GitHub Enterprise Server。即將舉辦的網路研討會由 Chainguard 的 Erika Heidi 領導，針對 CI/CD 安全團隊，涵蓋信任漏洞、偽冒提交與經過審核的動作目錄。

**參考來源:** [Hackers Found a Way Around GitHub SHA Pinning. This Webinar Explains How to Close the Gap](<https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html>) 

---

📌 **駭客將盜取工具注入官方 Microsoft Agent Framework PyPI 套件**

Xakep 報導，駭客將盜取工具注入 PyPI 上的官方 Microsoft Agent Framework 套件，鎖定雲端憑證。

**參考來源:** [Хакеры внедрили стилер в официальный пакет Microsoft Agent Framework в PyPI](<https://xakep.ru/2026/11/24/microsoft-agent-framework>) 

---

📌 **Google 研究人員展示 .NET 檔案單一位元變更如何繞過 Windows 程式碼完整性**

Google Project Zero 研究人員 James Forshaw 表示，清除 .NET 檔案標頭中的 IMAGE\_FILE\_EXECUTABLE\_IMAGE 位元，可讓不可信程式碼繞過 Windows 使用者模式程式碼完整性與 Oracle VirtualBox 處理程序強化。相同的 .NET Framework 4 回退路徑可啟用受保護程序輕量程序中的 COM 劫持。Microsoft 將 CVE-2026-108398 評定為本機低權限安全功能繞過，CVSS 8.8 分，並於 10 月 13 日修復；Oracle 在 9 月修復了 VirtualBox 的 CVE-2026-87268。Microsoft 列出 Windows 漏洞為公開披露但未在攻擊中使用，且 October 修補後 PPL 路徑仍可行。

**參考來源:** [Google Researcher Shows How a Single Bit Change in .NET Files Bypassed Windows Code Integrity](<https://thehackernews.com/2026/11/google-researcher-shows-how-single-bit.html>) 

---

📌 **駭客利用 ScreenConnect 嚴重漏洞滲透 MSP 工程師電腦，9 秒內取得遠端存取**

iThome 報導，攻擊者濫用 ScreenConnect 嚴重漏洞，入侵 MSP 工程師電腦，並在九秒內達成遠端存取。

**參考來源:** [駭客濫用ScreenConnect重大漏洞入侵MSP工程師電腦，9秒內取得遠端存取權 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE51dThoUUw5LWhCWG5XSG5UbjU2SEttR2FkMnhrb3lFVXQwZUh3QzlkbDJ3eldObU1SMHVWM3hQQ3VtNkFYZEo5VGY4Y0N1UQ?oc=5>) 

---

📌 **週報：VMware 0-Day、Java4Shell、NGINX2Root、Ruby2Shell 與大量 Shell 問題**

The Hacker News 週報報導多項活躍威脅，包括 Armory Castle 利用 VMware vCenter CVE-2026-123890 作為零日漏洞、與被竊取 Fireworks AI 金鑰相關的惡意 Claude Code 擴充功能、Cold Relic 雲端入侵社交工程攻擊、Meta Muse 容器逃逸、未修補的 Windows 11 講述者鎖定畫面繞過、GL.iNet GoodCloud 路由器入侵，以及眾多熱門 CVE 如 Java4Shell、NGINX2Root、Ruby2Shell 與 Upload2Shell。

**參考來源:** [⚡ Weekly Recap: VMware 0-Day, Java4Shell, NGINX2Root, Ruby2Shell, and a Whole Lot of Shell Trouble](<https://thehackernews.com/2026/11/weekly-recap-vmware-0-day-java4shell.html>) 

---

📌 **Apple 披露嚴重 macOS 漏洞，可能導致系統與應用程式當機或任意程式碼執行**

iThome 報導，Apple 披露一個嚴重 macOS 漏洞，可能導致系統與應用程式當機或任意程式碼執行。

**參考來源:** [Apple揭露macOS重大漏洞，可能導致系統與App當機或執行任意程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAxTWVZdzlLRnlHclJkLW5tVDNXaFRCS1pCWnUyamplLXRHQ01DYndVNklxVW9qSEEtWnNtMVU5NFo4cTQ3YnhVUGllM2VGZw?oc=5>) 

---

📌 **Che Lai Wu 購物網站遭自動化攻擊，部分會員個人資料疑似外洩**

iThome 報導，Che Lai Wu 購物網站遭受自動化攻擊，部分會員個人資料可能遭到洩露。

**參考來源:** [車麗屋購物網站遭自動化攻擊，部分會員個資疑似外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9YYlFKM21UTlVoRDNvU3hfQTVPR1ZUa2JTeFRqU216SnI2cXkwTmFXTHpjUUl3SEJJSV9PdVdEcktWbjduTkJBUXpZT3NQdw?oc=5>) 

---

📌 **D-Link 已停產路由器 DIR-600L 發現三個漏洞，廠商稱生產 10 年前結束且不會推出修補程式**

iThome 報導，D-Link 已停產的 DIR-600L 路由器披露三個漏洞，廠商表示由於生產十年前已結束，將不會發行修補程式。

**參考來源:** [D-Link停產路由器DIR-600L被揭露存在三項漏洞，官方強調10年前停產，不會釋出修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1EWTNaQmJNQWRXWEV6SlRZenVVTkpVTzk4Nk80cjlfekVXTWhMT3F4TXN3OTF5WGtNeUJpaFo2TTJuclVaR21OQ0RlR3dHdw?oc=5>) 

---

📌 **Okta 將 ShinyHunters 相關語音釣魚集團連結至新的 INCEPTION 資料外洩網站**

Okta 表示威脅群組 O-UNC-053 先前與 ShinyHunters 相關，仍然活躍且可能已在 INCEPTION 資料外洩網站下重新品牌化，利用語音釣魚竊取憑證與多重驗證核准，進行帳號接管與敲詐，涉及科技、醫療保健、生物科技、金融服務、保險、娛樂、遊戲、零售、運輸、酒店與法律等產業。

**參考來源:** [Okta Links ShinyHunters-Associated Vishing Group to New INCEPTION Data Leak Site](<https://thehackernews.com/2026/11/okta-links-shinyhunters-associated.html>) 

---

📌 **CrowdStrike 與 Zscaler 重大交易推動 AI 安全布局**

Dark Reading 報導，CrowdStrike 正透過與 Zscaler 的重大協議，擴大其 AI 安全工作。

**參考來源:** [CrowdStrike Makes AI Security Push With Blockbuster Zscaler Deal](<https://www.darkreading.com/endpoint-security/crowdstrike-ai-security-push-zscaler-deal>) 

---

📌 **SoftBank Air Terminal 6 存在 OS 指令注入漏洞**

JVN 報導，SoftBank Air Terminal 6 受到 OS 指令注入漏洞影響。

**參考來源:** [SoftBank Air Terminal 6 vulnerable to OS command injection](<https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-000172.html>) 

---

📌 **駭客組織 Gentlemen 聲稱入侵 Nvidia**

Xakep 報導，Gentlemen 組織聲稱已入侵 Nvidia。

**參考來源:** [Группировка Gentlemen заявила о взломе Nvidia](<https://xakep.ru/2026/11/23/gentlemen-nvidia>) 

---

📌 **AMD NPU 成全球首個獲 Unsloth Desktop 支援的神經處理單元**

AMD 的神經處理單元 (NPU) 已獲得 Unsloth Desktop 支援，成為全球首個獲得此相容性以供本地 AI 工作負載的 NPU。

**參考來源:** [AMD NPU成為全球首款獲Unsloth Desktop支援的神經網路處理器 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1SeV9hSkpvZFRYc2VjZVQyNUM2WXVTaGRYaVVZWDhoanZ4MVhfOW9DcVVXbGd4azFZME1XVnZadWJBUjF2MFIwSWZfVQ?oc=5>) 

---

📌 **美國總務署成功在現有智慧卡上執行後量子密碼學演算法**

美國總務署 (GSA) 已成功在現有身分驗證智慧卡上實作後量子密碼學 (PQC) 演算法。

**參考來源:** [美國總務署在既有身分驗證智慧卡上成功執行抗量子密碼演算法 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBFcjVuajdzaFRxWUhsb3lwSWdTZzN0a1l2YWRRR0xaRjNvVVRrMDhaZjNDVHNETDF0UWo3SE5mSzZRVVdicm5ONnEyNTZFdw?oc=5>) 

---

📌 **CrowdStrike 以 43.9 億美元收購 Zscaler，創下網路安全產業紀錄**

CrowdStrike 已同意以 43.9 億美元收購 Zscaler，標誌著網路安全產業內一筆創紀錄的交易。

**參考來源:** [CrowdStrike以439億美元併購Zscaler，創下資安界交易紀錄 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBSZlBsVjRyTzJYd2hWTTB0MllEOWp0dGY1aXF2ZzBhSFhjOE04T1JtczhjT1RlX0NOdk9EZ04zbDN1clZieGhJOHczS29LQQ?oc=5>) 

---

📌 **Kubernetes 1.38 可能調整 cgroup 驅動程式設定，可能影響舊版容器執行環境的節點啟動 - iThome**

iThome 報導，Kubernetes 1.38 正在預覽 cgroup 驅動程式設定調整，這可能影響舊版容器執行環境的節點啟動。

**參考來源:** [Kubernetes 1.38預告調整cgroup驅動程式設定，舊版容器執行環境恐影響節點啟動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBIbTg2LWc4dG80c1FtNmctZjg1WEoyUDlZTTc5MEVlWlg0Si1oMERxNkgyZldqSnVNQ1NkZUxkMTV0MUxROGtrY2w2NEl1Zw?oc=5>) 

---

📌 **維吉尼亞州總檢察長針對 Grok 提出兒童剝削訴訟 - WWBT**

WWBT 報導，維吉尼亞州總檢察長已就兒童剝削問題對 Grok 提出訴訟。

**參考來源:** [Virginia’s Attorney General files lawsuit against Grok over child exploitation - WWBT](<https://news.google.com/rss/articles/CBMiugFBVV95cUxNTk5ZLUh1dlBPV3RKeV9MaUxRaEdLZXJMeFZoeFlWMkl1bmNISUtOeVhwZEkwUUUwa2F3cUZXNHFVbDUyTHRyS0c5a3RQbXE3WHRYenM1RExOUTdLZng0TXZyd1FleVkwMjZZaEdBUXFYSXhMdVNKUk5BSlJ4V0hWZmRuWVJzZFBZWkJDN0VfRkZkcl9vRzhtX2p4YWtQekdwSW5OWUctZTN0UmFTZmM3dzNFYUp4ZlUzN2fSAc4BQVVfeXFMUDVwYTlzMXlzekxBTDN5ZzJXdmkyaGlZVzY2blJzRjBzSnhkV2pfNmM2QjJOcnloaGxjOWVtUWJUSDNsdldZYmdXNW5rTno5c0RRN2NYQ0pPdFpjVGs2bS1DbW4wczNBZVRMNWwwTmREQnFSa0NZVThlUHRGcFdaWVFaektldmFnajMtb0x0RVdvblpjNWExSVc3X214SEhBVjVETzI2MkliZkNxRzQ2SWFrLUhBcGVQY19HY3FEMVcwd181MUxjdzNsVU5CSkE?oc=5>) 

---

📌 **2026 年工業控制安全事件比例上升至去年 1.7 倍，超過 70% 的事件涉及工廠或系統停機 - iThome**

iThome 報導，2026 年工業控制安全事件上升至去年水準的 1.7 倍，超過 70% 的事件涉及工廠或系統停機。

**參考來源:** [2026年工控資安事故比例增至去年的1.7倍，逾7成事故期間廠區或系統曾停機 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5hQzdOVjBhWjY1dXhqczl6XzZjU3hWWmVGN09PdFdSdjl1VmZ0VjR1VXpEaDdSTWFWcWlVMzI1dURicG1BOGdNZXUzT0lBUQ?oc=5>) 

---

📌 **Siemens 產品更新 2026 年 11 月**

JVN 報導 Siemens 於 2026 年 11 月的產品更新。此為僅標題的報導；未提供任何具體漏洞細節、受影響產品、嚴重程度、修補程式或客戶影響。

**參考來源:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **N-able 揭露電子郵件過濾服務中的嚴重漏洞**

iThome 報導 N-able 披露其電子郵件過濾服務系統中的嚴重漏洞。此為僅標題的報導；未提供任何技術細節、利用證據、受影響客戶、修補程式或緩解措施。

**參考來源:** [N-able揭露電子郵件過濾服務系統重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE14MXZzbnFHMUJ1Z2taalBrZjFsWGNvYm5FXzNTUHkzZmR3bHdobG55Tkg2Z1pRdndYVGJxeFR5REhKeTJSYno5cHB4bXcwZw?oc=5>) 

---

📌 **Salesforce 與 Microsoft 推出 Copilotforce，將 CRM 整合至日常工作介面**

iThome 報導 Salesforce 與 Microsoft 推出 Copilotforce，將 CRM 功能整合至日常工作介面。此為僅標題的報導；未提供任何安全細節、漏洞資訊或威脅影響。

**參考來源:** [Salesforce 攜手微軟推出 Copilotforce，讓 CRM 融入日常工作介面 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5xOFFaaHo1ZkJRVmVESDc0U292cGtkd2xGdDlYZUxSYWxic21GbjVMbzJlM2FUQndZbkh4VHNpUzJFTmMyT2JKR2Fabw?oc=5>) 

---

📌 **懷疑 Webworm 修改 SoftEther VPN 以逃避偵測並隱藏遠端存取**

The Hacker News 報導，Rapid7 以中度信心評估，與中國結盟的威脅行為者 Webworm 正使用修改過的 SoftEther VPN Bridge 組建，重新標記為 NtMonitor VPN，以移除偵測指紋並建立隱秘遠端存取。Windows 執行檔 netcapa.exe 是 SoftEther VPN Bridge v4.44 build 9807 的重建版本，大約於 2026 年 1 月中旬上傳至 VirusTotal。變更包括重新命名的 HTTP 端點、以取代 GIF 浮水印的 PNG 通訊協定浮水印、內嵌執行時期資源，以及以魔術位元組 "RCEN" 開頭的加密設定檔。Rapid7 指出未新增新功能；重點在於透過原始程式碼重建而非特洛伊木馬化來達到隱蔽。Symantec 首次於 2022 年 9 月公開詳述 Webworm，其曾在俄羅斯、喬治亞、蒙古以及其他亞洲國家鎖定政府機關、IT 服務與電力公司。

**參考來源:** [Webworm Suspected of Modifying SoftEther VPN to Evade Detection and Hide Remote Access](<https://thehackernews.com/2026/11/webworm-suspected-of-modifying.html>) 

---

📌 **美國網路總監人選顯示轉向專業知識**

Dark Reading 以標題報導美國網路總監人選，顯示轉向專業知識。僅標題報導；未提供技術事件細節。

**參考來源:** [US Cyber Director Pick Signals Shift Toward Expertise](<https://www.darkreading.com/cybersecurity-operations/us-cyber-director-pick-signals-shift-toward-expertise>) 

---

📌 **別名背後：一位研究員如何揭開十年勒索軟體行為者**

Dark Reading 以標題報導關於揭開十年來隱藏於別名背後之勒索軟體行為者的研究。僅標題報導；未詳述特定勒索軟體群組或事件。

**參考來源:** [Behind the Alias: How One Researcher Unmasked a Decade of Ransomware Actors](<https://www.darkreading.com/cybersecurity-operations/alias-researcher-unmasked-ransomware-actors>) 

---

📌 **Hyflock**

iThome 報導關於 Hyflock。

**參考來源:** [Hyflock - iThome](<https://news.google.com/rss/articles/CBMiT0FVX3lxTE5rSEhTbjZxeDhyV29WMTJGaFVud0t0UVVYZVBZUFBRVkNoMVdMNXpfTUZxQTBQN2hVQ0puQ0x5Njl4MXVFeFJSRTJUOWdERW8?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261124-1-1795539866092 -->
