---
title: "CISO 每日摘要：Fable 5 禁令餘波 -- Amazon 角色與全球監管漣漪效應 (20260615)"
description: "華爾街日報揭露 Amazon 執行長賈西親自向財政部通報 Fable 5 越獄疑慮，成為禁令關鍵推手；Anthropic 派員赴華府談判，歐盟啟動調查；NightSpire 勒索軟體入侵 33 國含臺灣；Velvet Ant APT 滲透隔離網路近十年；Arch Linux AUR 供應鏈攻擊 400 餘套件遭投毒；Oracle PeopleSoft 零時差漏洞 CVE-2026-35273 遭大規模利用，CISA 列入 KEV。"
pubDate: 2026-06-15
tags: [CISO, 每日摘要, Anthropic, Fable 5, AI治理, NightSpire, 供應鏈攻擊, CISA, Oracle, PeopleSoft, Velvet Ant, APT, Arch Linux, AUR]
author: "Security Solutions Team"
featured: true
---

## Fable 5 禁令餘波 -- Amazon 角色與全球監管漣漪效應

Anthropic 的 Claude Fable 5 與 Mythos 5 模型仍處於全球封鎖狀態，隨著更多內幕細節陸續曝光，這場 AI 監管風暴持續發酵。

**6 月 15 日最新發展：**

- **Amazon 吹哨者角色確認：** 《華爾街日報》報導，Amazon 執行長 Andy Jassy 親自向財政部長 Scott Bessent 及其他官員反映，Amazon 研究人員發現 Fable 5 可能被誘導提供可用於網路攻擊的資訊。Amazon 是 Anthropic 最大投資者，已承諾投資 130 億美元。

- **Anthropic 華府遊說：** 公司已派高層赴華盛頓與川普政府談判，尋求恢復部分存取或協商條件。執行長 Dario Amodei 據報已直接與政府官員接觸。

- **歐盟啟動調查：** 歐盟已對美國出口管制令展開調查，檢視其是否構成域外監管越權，以及對歐洲 AI 公司與用戶的影響。

- **Claude Corps 計畫：** Anthropic 宣布投入 1.5 億美元、培養 1,000 名研究員的非營利 AI 計畫，此舉被視為在風波中強化安全形象的公關策略。

- **集體訴訟：** Anthropic 因 Claude Max 月費 200 美元方案的用量限制面臨訴訟，原告指控「無限制」使用屬不實廣告。

### 這對 AI 治理的深遠影響

1. **出口管制先例：** Fable 5 禁令是美國首次將出口管制擴及 AI 模型的權重與推論能力本身——不再僅限於硬體（GPU）。這為所有前沿模型設立了先例，整個產業面臨前所未見的監管不確定性。

2. **投資人影響力問題：** Amazon 既是最大投資人又是吹哨者的角色，引發了大型科技投資人如何影響監管結果的治理問題。Anthropic 在雲端合作上保持多元（同時使用 Google Cloud 等），卻仍無法避免利益衝突。

3. **全球碎片化風險：** 歐盟調查標誌著 AI 監管正成為地緣政治角力場。不同司法管轄區可能提出不相容的要求，迫使 AI 公司在市場之間做出選擇或維持多重合規體系。

---

## 本週活躍威脅

📌 **NightSpire 勒索軟體入侵 33 國（含臺灣）**
自 2025 年初活躍以來，NightSpire 已入侵至少 64 個組織，涵蓋醫療、政府、金融、製造與 IT 服務業。該組織濫用合法管理工具（PSExec、Cobalt Strike、PowerShell）融入正常系統活動，增加偵測難度。臺灣為已知受災國之一。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176627)

📌 **Velvet Ant APT 滲透隔離網路近十年**
與中國有關聯的駭客組織 Velvet Ant（Sygnia 追蹤為 Operation Highland）透過篡改 Linux PAM 與 OpenSSH 認證元件，在完全隔離網路的環境中活動長達近十年。該組織自 2016 年起更換信任的登入程式以維持持久的未授權存取與憑證竊取。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/tags/velvet-ant) | [Aviatrix 分析](https://aviatrix.ai/threat-research-center/china-linked-hackers-backdoored-linux-login-software-2026/)

📌 **Arch Linux AUR 供應鏈攻擊 -- 400+ 套件遭投毒**
攻擊者入侵 Arch Linux 使用者倉庫（AUR）約 400 個套件，植入加密貨幣挖礦與資料竊取惡意程式。攻擊利用維護者管控薄弱與審查寬鬆的問題——孤兒套件遭惡意接手後，任何從原始碼編譯的使用者都可能受害。
🔗 **參考資料：** [WebProNews](https://www.webpronews.com/arch-linux-aur-supply-chain-attack-hits-400-packages-with-malware/)

📌 **Oracle PeopleSoft 零時差漏洞（CVE-2026-35273）列入 CISA KEV**
CISA 將 Oracle PeopleSoft PeopleTools 的未經身分驗證遠端程式碼執行漏洞 CVE-2026-35273 列入已知遭利用漏洞清單。駭客組織 ShinyHunters 正積極利用此漏洞入侵數百個組織，多為教育機構。Oracle 已於 6 月 10 日釋出修補，但攻擊仍在持續。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/tags/cve-2026-35273) | [Xakep](https://xakep.ru/2026/06/15/oracle-peoplesoft/)

📌 **Palo Alto PAN-OS GlobalProtect VPN 漏洞（CVE-2026-0257）遭積極利用**
Palo Alto Networks 確認 CVE-2026-0257 身份驗證繞過漏洞（CVSS 9.1）正被積極利用。CISA 已將其列入 KEV，要求聯邦機構 4 天內修補。未經身分驗證的攻擊者可繞過 SSL VPN 認證並存取內部網路資源。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/palo-alto-warns-of-active-exploitation.html) | [iThome](https://www.ithome.com.tw/news/176253)

📌 **Dynatrace GitHub 資料外洩 -- 246 個儲存庫疑遭竊**
化名 xpI0itrs 的威脅行為者兜售 8.46GB 資料，聲稱透過外洩的個人存取權杖（PAT）取得 Dynatrace 內部 246 個 GitHub 儲存庫，內容含基礎架構細節、CI/CD 設定、Kubernetes 管理資訊與員工個資。Dynatrace 尚未證實此事件。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176587)

📌 **152 個 Chrome 桌布擴充套件暗藏廣告軟體**
資安研究人員發現 152 個 Chrome 桌布擴充套件（累計 105,000+ 安裝）暗中追蹤用戶行為、注入廣告與產生虛假流量。這些擴充套件在發現時仍可在 Chrome 線上應用程式商店下載。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/152-chrome-wallpaper-extensions-with.html)

📌 **Langflow 路徑遍歷漏洞（CVE-2026-5027）已遭實際利用**
VulnCheck 警告，Langflow AI 開發平台的路徑遍歷漏洞（CVSS 8.8）已在蜜罐環境中觀察到實際利用。漏洞允許未經身分驗證的攻擊者通過 /api/v2/files 端點寫入任意檔案並執行遠端程式碼。已在 Langflow 1.9.0 修補。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176593)

📌 **phpBB 重大身分驗證繞過漏洞修補**
phpBB 發布 3.3.17 版修補重大身分驗證繞過漏洞（Aikido 發現），攻擊者可登入包括管理員在內的任意帳號，危及數百萬論壇安裝的資料安全。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176597)

📌 **Sniper Dz 釣魚活動鎖定中東北非用戶**
名為「Sniper Dz」的釣魚行動透過假 Facebook 優惠與瀏覽器警報詐騙，誘使受害者安裝遠端存取工具。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/sniper-dz-scams-target-mena-users-via.html)

📌 **Google 控告濫用 Gemini 的中國詐騙集團**
Google 對名為「Outsider Enterprise」的中國組織提起訴訟，指控其系統性濫用 Gemini AI 平台大規模生成詐騙內容。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/)

📌 **緬因州資料外洩通報平台因假通報被迫下線**
美國緬因州被迫關閉其資料外洩通報入口網站，原因是攻擊者透過系統提交虛假 breach notices，壓垮州政府官員並可能掩蓋真實的外洩通報。
🔗 **參考資料：** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/maine-take-down-data-breach-portal)

---

## OPSWAT 可以怎麼幫上忙

本週多項威脅涉及檔案層級的攻擊，OPSWAT MetaDefender 可提供有效防禦。Arch Linux AUR 供應鏈攻擊透過入侵套件散布惡意軟體——MetaDefender 的跨引擎防毒（30+ 防毒引擎）與 CDR（Content Disarmament and Reconstruction）技術可偵測並中和下載套件與二進位檔案中的已知及未知威脅。對於在內部鏡像 AUR 或任何開源倉庫的組織，在下載管道中部署 MetaDefender 可防止惡意套件進入開發者終端機與 CI/CD 環境。

Dynatrace GitHub 外洩事件凸顯了憑證外洩與原始碼洩漏的風險。MetaDefender 的 Deep Content Disarmament and Reconstruction 可消毒檔案，防止程式碼倉庫中的零時差惡意軟體執行。
