---
title: "CISO 每日摘要：微軟8月例行更新修補421個漏洞，零時差漏洞遭Lazarus利用 (20260812)"
description: "微軟8月例行更新（Patch Tuesday）修補421個CVE，包括已遭積極利用的Windows核心驅動程式AFD.sys零時差漏洞CVE-2026-68820（Check Point指出北韓Lazarus於Operation Dream Job使用）；CISA同日將思科CVE-2026-20349與Metabase CVE-2026-72898列入KEV。Rapid7以AI輔助發現的SharePoint未經身分驗證RCE攻擊鏈（CVE-2026-55040＋CVE-2026-63520）、與Trivy遭駭有關的惡意LiteLLM套件恐曝露逾2,100家組織、Anthropic Claude內容標記在歐盟AI法案下全球上線。"
pubDate: 2026-08-12
tags: [patch-tuesday, microsoft, zero-day, cisa-kev, 勒索軟體, 供應鏈, ai治理, ciso-daily-digest]
author: "Security Solutions Team"
featured: true
---

## 微軟8月例行更新：修補421個漏洞，Windows驅動程式零時差漏洞已遭利用

微軟於8月11日發布本月例行更新（Patch Tuesday），共修補 **421個CVE編號漏洞**（iThome統計；ZDI獨立統計為**398個**，其中**62個**重大等級——比上個月的622個減少約三分之一）。漏洞分布以 **Windows 236個**、**Office 98個** 為大宗，其餘包含 **SharePoint 30個**、開發工具26個、Azure 17個、Exchange 7個，以及 Microsoft Defender 1個。

本次更新有3個零時差漏洞格外值得留意：

- **CVE-2026-68820**（CVSS **7.0**）——存在於 **afd.sys**（Ancillary Function Driver，Windows 網路通訊的核心驅動程式）的 Use-after-free 漏洞，攻擊者可藉此將權限提升至 **SYSTEM**。這是微軟唯一標示**已遭積極利用**的漏洞，觸發需先贏得競爭條件（race condition）。**CISA已於8月11日將它列入KEV**，聯邦機構須在 **8月25日** 前完成修補。**Check Point研究指出北韓駭客組織Lazarus在Operation Dream Job行動中使用了此漏洞**（詳見下方威脅）。
- **CVE-2026-62832**（CVSS **7.8**）——Windows使用者設定檔服務權限提升漏洞，修補前已遭公開（與「LegacyHive」揭露有關）。
- **CVE-2026-72971**（CVSS **5.5**）——Windows容器隔離檔案系統過濾驅動程式（unionfs.sys）漏洞，同樣在公告前已遭公開，可用於竄改本機資料。

此外，本次還修補 **4個無須身分驗證、CVSS 9.8 的遠端程式碼執行漏洞**——Windows DNS Server（**CVE-2026-62878**）、Windows Deployment Services、微軟QUIC實作、HPC Pack——發布時均未標示遭利用。同時也補上SharePoint攻擊鏈的RCE環節（其身分驗證繞過已於7月修補）。

### 這對漏洞管理的深遠影響

- **AI加速漏洞發現，修補節奏被重新定義：** 繼7月破紀錄的**570+**個修補後，8月約**400個**已成為常態；微軟將此歸因於AI輔助的漏洞發現。而研究人員與攻擊者都在用公開AI模型加速漏洞利用（Rapid7的SharePoint攻擊鏈、A Security的Zoom零點擊漏洞，都從發現到可用攻擊不到**24小時**）。
- **零時差當天進KEV：** 遭利用漏洞如今在修補當天就進入CISA目錄，聯邦機構修補期限僅**2至14天**——Patch Tuesday已從例行維護變成合規事件。
- **核心驅動程式仍是權限提升的橋樑：** Lazarus攻擊鏈（釣魚→低權限立足點→afd.sys零時差＋FudModule關閉EDR→橫向移動）顯示，即使CVSS只有7.0，驅動程式層級的漏洞仍是最高價值目標。

🔗 **參考資料：** 綜合報導（[iThome 421個漏洞](https://www.ithome.com.tw/news/178055)、[iThome 3個零時差](https://www.ithome.com.tw/news/178057)、[iThome CISA KEV](https://www.ithome.com.tw/news/178064)、[The Hacker News](https://thehackernews.com/2026/08/microsoft-patches-398-flaws-including.html)、[Krebs on Security](https://krebsonsecurity.com/2026/08/microsoft-plugs-nearly-400-security-holes/)）

---

## 本週活躍威脅

📌 **Claude內容標記全球上線，偵測極限浮現（更新）** — Anthropic的模型層級標記現已套用於全球所有Claude產品（Claude、API、Claude Code、Claude Cowork、Claude Tag），經AWS、Google Cloud、Microsoft Foundry生成的文字也會帶標記；檔案（SVG/PNG/JPG）則附上**C2PA簽章來源中繼資料**。專家指出標記能隨複製貼上轉移、並「可能經部分編輯後仍留存」，但**改寫、程式碼格式化或應用程式管線會將其去除**——因此沒有標記不代表出自人類之手，偵測屬機率性而非鑑識級。OpenAI、Google、Meta、Microsoft、Mistral均已承諾遵守歐盟AI法案第50條透明度規範。
🔗 **參考資料：** [The New Stack](https://thenewstack.io/anthropic-claude-text-watermark/)、[The Decoder](https://the-decoder.com/anthropic-watermarks-all-claude-outputs-globally-with-marks-that-may-persist-through-some-editing/)

📌 **Lazarus「Operation Dream Job」鎖定國防、航太業者，使用Windows零時差CVE-2026-68820** — Check Point Research指出，Lazarus自7月初起在新版 **FudModule** rootkit 中利用 **afd.sys** 零時差漏洞取得SYSTEM權限並讓EDR失效。攻擊活動散布被改造的PDF檢視工具 **SecurityPDF**，內含 **Troy** 後門，目標鎖定國防、航太與航空業者，尤其**歐洲與印度**的國防部門。攻擊基礎設施由遭入侵的 **Roundcube（CVE-2025-49113）** 與WordPress伺服器組成，並部署 **RelayShell** PHP webshell作為中繼節點。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178079)、[The Hacker News](https://thehackernews.com/2026/08/microsoft-patches-398-flaws-including.html)

📌 **Sandworm旗下UAC-0145假冒徵才面試，散布可執行指令的VPN** — 烏克蘭CERT-UA（8月8日）指出，Sandworm（APT44）附屬組織UAC-0145自**2026年5月**起在求職網站假冒IT公司（如ATLAS Business Group）與 **Sopra Steria Bulgaria** 的人資，將目標引導至Telegram並安排Zoom面試——面試官甚至可能是**AI生成的虛擬人物**。受害者會收到WireGuard設定檔進行「技術測驗」，設定失敗後攻擊者再慫恿其下載**可執行指令的客製VPN**，藉此取得IT專業人員電腦的初始存取權限。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/sandworm-linked-uac-0145-uses-fake-job.html)、[iThome](https://www.ithome.com.tw/news/178085)

📌 **思科ASA/FTD漏洞CVE-2026-20349（CVSS 8.6）已遭利用，可遠端阻斷服務** — 漏洞位於 **Remote Access SSL VPN** 服務處理HTTP請求時的錯誤檢查不足，未經身分驗證的攻擊者可傳送特製請求使**防火牆重新載入**，造成阻斷服務。影響ASA 9.16–9.24與FTD 7.0/7.2/7.4（具IKEv2 RA VPN、SSL-VPN、ZTNA等設定者）。無緩解措施；**CISA已列入KEV**，聯邦機構須於 **8月14日** 前修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/cisco-asa-and-ftd-flaw-exploited-in.html)、[iThome CISA KEV](https://www.ithome.com.tw/news/178064)

📌 **與Trivy遭駭有關的惡意LiteLLM套件，恐曝露逾2,100家組織** — 兩個遭植入惡意程式的 **LiteLLM** 版本（**1.82.7**、**1.82.8**）於**3月24日**在PyPI上架約40分鐘，內含可竊取雲端金鑰、SSH金鑰、Kubernetes權杖、資料庫密碼的程式碼。CloudSEK取得的**約43.4萬個檔案**資料集，將潛在曝露範圍對應至**2,500家以上組織**（公開查詢平台標示2,100+），高信心度名單包含 **NVIDIA、Cisco、Deloitte、Volkswagen、FedEx、Siemens、X Corp**。CloudSEK強調此非受害數統計、且尚無憑證遭濫用證據——但受影響組織仍被建議輪換機密。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/malicious-litellm-releases-tied-to.html)

📌 **SAP Commerce Cloud漏洞CVE-2026-58231（CVSS 10.0）：未經身分驗證即可遠端執行程式碼** — 漏洞位於Commerce Cloud的 **Data Hub Adapter**，未經身分驗證的攻擊者可濫用**預設的驗證用戶端**，對缺乏充分驗證的功能提交特製輸入，達成**任意程式碼執行**並滲透內部元件。8月Security Patch Day共修補**28個弱點**、4個重大等級：**CVE-2026-44772**（9.9，MII程式碼注入）、**CVE-2026-34265**（9.8，ABAP DIAG越界寫入）、**CVE-2026-44758**（9.1，MII SSTI/SSRF）。Onapsis建議修補後重新部署Commerce Cloud；IP篩選清單可作為暫時緩解。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/sap-commerce-cloud-flaw-could-let.html)、[iThome](https://www.ithome.com.tw/news/178072)

📌 **Adobe修補3個CVSS 10.0漏洞：ColdFusion與Campaign Classic列優先等級1** — 8月更新涵蓋5項產品，ColdFusion與Campaign Classic列為 **Priority 1**。ColdFusion共**15個修補**（11個重大），最嚴重為 **CVE-2026-48362**（CVSS 10.0作業系統指令注入→RCE，2025.0.12/2023.0.23修補）、**CVE-2026-48273**（9.9 eval注入）、**CVE-2026-71384**（9.6授權不正確）。Campaign Classic的 **CVE-2026-71398** 與 **CVE-2026-27302** 均為**CVSS 10.0**（授權不正確→RCE，ACC v7 7.4.4 build 9400修補）。目前無遭利用證據；Adobe建議72小時內完成更新。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/adobe-patches-three-cvss-100-coldfusion.html)、[iThome](https://www.ithome.com.tw/news/178071)

📌 **Rapid7以AI輔助發現SharePoint攻擊鏈，達成未經身分驗證RCE** — **CVE-2026-55040**（CVSS 9.1）是SharePoint Server Subscription Edition/2019/2016的JWT驗證管線身分驗證繞過，遠端攻擊者只要知道目標的SID或UPN，即可假冒任意使用者身分；串連 **CVE-2026-63520**（CVSS 8.1，Business Connectivity Services不安全.NET型別實例化）即可**以Windows服務帳戶身分執行任意程式碼**，Project Server 2013 SP1與Office Web Apps 2013 SP1同樣受影響。Rapid7以AI代理輔助發現此鏈、5月通報微軟，7月更新即可切斷攻擊鏈；SharePoint Online不受影響。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/researchers-disclose-ai-assisted.html)、[iThome](https://www.ithome.com.tw/news/178081)

📌 **Zoom註解功能零點擊漏洞：CVE-2026-53413／53414／53415** — 三個記憶體安全漏洞位於螢幕分享的註解功能，攻擊者只要加入同一場會議，即可**在對方完全無需操作**的情況下於其他與會者裝置執行任意程式碼。A Security以公開AI模型在**不到24小時**、少於20次提示內發現漏洞。**7.1.0**修補前兩項、**7.1.5**修補第三項，Zoom另部署伺服器端過濾，但**端對端加密會議無法過濾**、仍屬曝露。目前無遭利用報告，亦未列入KEV。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/zoom-annotation-flaws-could-let-meeting.html)、[iThome](https://www.ithome.com.tw/news/178080)

📌 **VMware vCenter漏洞CVE-2026-59310（CVSS 9.8）遭利用取得持續存取** — 德國資安公司QUIRSO在事件調查中發現，攻擊者利用此路徑遍歷漏洞（7月底修補）執行**任意程式碼**，再植入惡意cron job並以 **reverse_ssh** 建立持久化。受害系統最早於**8月3日**（公開揭露5天後）與攻擊者伺服器連線；**361個受害IP橫跨47國**（德國、美國、土耳其、伊朗、法國最多）。幕後攻擊者不明，疑似APT組織。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/attackers-exploit-vmware-vcenter.html)

📌 **Kimwolf v7 Android殭屍網路以HTTP/2流量偽裝正常瀏覽** — Palo Alto Networks Unit 42發現的新版Kimwolf/AISURU殭屍網路（鎖定Android TV盒與Linux IoT裝置）會建構**完整瀏覽器指紋**進行HTTP/2洪水攻擊，攻擊流量難以與正常瀏覽區分。C2基礎設施以**以太坊名稱服務（ENS）**取得位址、內建**Tor .onion**隱藏服務與cleartext/Tor間的本機代理；掃描與漏洞利用模組已移除，改由外部載入器負責散播。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/kimwolf-v7-android-botnet-makes-http2.html)

📌 **ShieldBreak：PoC宣稱完全繞過Microsoft Defender修補（CVE-2026-50656）** — 研究人員「Chaotic Eclipse」發布 **ShieldBreak** 概念驗證，宣稱可完全繞過 **RoguePlanet** 漏洞（CVSS 7.8，mpengine.dll競爭條件→SYSTEM）的修補，在Windows 11 25H2與Windows Server 2025上**成功率100%**，Windows 10同樣受影響；微軟的縱深防禦更新據報在特定情境開啟檔案時會洩漏8位元組資料。微軟表示正在調查。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/shieldbreak-zero-day-poc-claims.html)

📌 **737個Chrome VPN擴充功能將流量導向攻擊者SOCKS5代理** — Socket發現737個免費VPN/代理擴充功能散布於**40多個Chrome Web Store開發者帳號**（共75,486次安裝）；其中**274個假冒66個知名品牌**，包括Proton VPN、NordVPN、Surfshark、ExpressVPN、CyberGhost、Cloudflare 1.1.1.1與Google Outline。這些擴充功能將整個瀏覽器工作階段導向**固定SOCKS5伺服器（連接埠1082）**，使營運者處於**中間人位置**，可觀察瀏覽目的地、來源IP、TLS SNI與明文HTTP內容。主要鎖定俄語使用者；**221個已下架、516個仍為啟用狀態**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/737-chrome-vpn-extensions-caught.html)

📌 **Metabase CVE-2026-72898：列入CISA KEV，Metabase Cloud本身也遭攻擊（更新）** — CISA於8月11日將已遭利用的**CVSS 10.0 SQL注入**零時差漏洞列入KEV，聯邦機構須於 **8月14日** 前修補。xakep.ru報導攻擊者曾以該0-day直接攻擊 **Metabase Cloud**（相關端點已封鎖），可未經身分驗證取得**管理員權限**、變更設定並竊取連線資料庫的儲存憑證；所有受影響版本皆已釋出修補（0.58.24／0.59.21／0.60.17／0.61.11／0.62.9／0.63.5），暫時緩解方式為封鎖 `/api/session/reset_password`。
🔗 **參考資料：** [iThome CISA KEV](https://www.ithome.com.tw/news/178064)、[xakep.ru](https://xakep.ru/2026/08/12/metabase-0day/)

📌 **臺灣：醫療物流業者久裕二度遭攻擊、正瀚生技公告遭網攻** — 藥品流通與醫療物流業者 **久裕（4173）** 8月11日晚間發布第二起資安重訊：駭客針對其**復原系統**發動攻擊，遭加密資料恐有外洩疑慮，部分檔案無法解密；核心系統與資料庫未受影響，但復原作業延長，恐影響部分客戶出貨時程。農化新藥業者 **正瀚生技（6534）** 8月11日下午公告部分資訊系統遭網路攻擊，已委請外部資安公司處理，初步評估對營運無重大影響。
🔗 **參考資料：** [iThome 久裕](https://www.ithome.com.tw/news/178077)、[iThome 正瀚](https://www.ithome.com.tw/news/178076)

📌 **達美航空調查DEF CON 34返程班機上的偽冒Wi-Fi網路** — 達美航空 **591班機**（拉斯維加斯→亞特蘭大，波音757、199名乘客）搭載多名DEF CON 34與會者，機組人員經ACARS通報發現偽冒的 **「Delta WiFi Fast」** 網路。社群媒體傳聞攻擊者以**deauth攻擊**迫使乘客斷開合法基地台、連上偽冒網路，並以**釣魚頁面蒐集Google憑證**——達美未證實此說法，強調達美系統未被入侵；機上Wi-Fi一度關閉約30分鐘進行調查。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/12/plane-wifi/)

---

## OPSWAT可以怎麼幫上忙

今日威脅涵蓋遭植入惡意程式的PyPI套件（LiteLLM）、偽冒VPN應用程式與瀏覽器擴充功能（UAC-0145、Chrome代理擴充功能），以及鎖定協作、防火牆與虛擬化產品的攻擊鏈。幾乎所有攻擊載體在執行前都會跨越**檔案或套件邊界**。MetaDefender的**多引擎掃描（30+防毒引擎）**與**內容淨化與重構（CDR）**可在閘道端淨化惡意安裝程式、壓縮檔與文件；檔案信譽與深度內容分析則有助於驗證下載套件與更新的來源——包括日益成為攻擊目標的AI代理工具鏈。
