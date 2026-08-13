---
title: "CISO 每日摘要：中國駭客以AI代理自主攻擊臺灣政府，竊取逾2,500筆人員資料 (20260813)"
description: "以色列AI資安新創Dream Security揭露中國駭客以Hermes與OpenClaw打造的AI自主攻擊框架，7月初對臺灣政府發動12波攻擊，破解85組帳號、竊取2,564筆人員資料，並將目標擴及核安會與至少7家能源公司，數發部證實攻擊來自境外；另涵蓋SharePoint CVE-2026-55040公開PoC隔日即遭利用、WordPress XSS2Shell（CVE-2026-64638，CVSS 8.9）、Apple螢幕分享CVE-2026-65400、Jewelbug APT等威脅。"
pubDate: 2026-08-13
tags: [AI 資安, APT, 臺灣, 零時差漏洞, 漏洞揭露, 身分安全]
author: "Security Solutions Team"
featured: true
---

## 中國駭客以AI代理自主攻擊臺灣政府機關

8月12日金融時報報導，疑似中國駭客以AI代理對臺灣政府機關發動自主攻擊，消息一出引發全球高度關注。揭露此事的是以色列AI資安新創**Dream Security**（由NSO Group共同創辦人Shalev Hulio、奧地利前總理Sebastian Kurz、Wayout Group創辦人Gil Dolev成立）。**數位發展部資通安全署**隔日發布新聞稿證實：資安監控單位於**7月**就察覺針對政府機關的異常攻擊，目前已完成調查，受影響單位陸續完成處理；攻擊**來自境外**，並出現**人類操作與AI混合執行**的模式——以**OpenClaw**及其他AI代理輔助，快速串聯多種攻擊手法，利用備援或測試平臺等次要系統作為跳板，具備速度快、成本低、規模大的特性；國家資通安全研究院（資安院）早在7月20日即發布警訊。

**事發經過：**

- Dream Security發現以**Hermes**與**OpenClaw**打造的AI攻擊框架，同時最多可派出**8個AI代理**分工：搜尋目標、挖掘資安漏洞，並在攻擊受阻時調整策略。
- **7月1日至4日**，該框架發動**12波攻擊**：探查**21個政府系統**，以密碼潑灑破解**85組政府員工帳密**，成功存取**84個內部系統**（儀表板、設備管理介面、人事統計系統等），竊得**2,564筆人員資料**（1,409名員工、916名來自未經驗證API的使用者、239名法律專業人士），並取得完整使用者資料庫、7組SSO用戶端機密、6個資料庫憑證與內部IP位址範圍。
- 偵察從**以Angular打造的政府入口網站**開始：框架下載並反編譯JavaScript套件，擷取內嵌的URL、API端點、OAuth用戶端ID與Keycloak配置，進而映射國家**單一登入（SSO）**架構——6個子領域、所有OIDC端點、2個RSA簽章金鑰；單一系統即找出逾36個API端點，多數完全無需驗證，其中一個API直接暴露整個使用者資料庫。
- 攻擊隨後擴及**核能安全委員會及至少7家能源公司**，掃描目標的錯誤設定與暴露的管理介面。
- 框架具備**雙層機率決策機制與貝氏後驗機率排序**，動態調整**14條平行攻擊鏈**的優先順序，是同類攻擊首度出現自主判斷路徑；它也會自我修正，誠實記錄並排除**7次誤報**（例如把伺服器延遲21秒誤判為SQL注入，實為SMTP寄信逾時），並以多個AI代理交叉驗證漏洞。
- 攻擊過程偽裝成**取得授權的漏洞測試**以迴避AI模型安全防護；原定手法失敗時，AI代理會上網蒐集資料擬定新方法。

### 這對 AI 自主攻擊治理的深遠影響

這是首度有文件記錄的案例：AI攻擊框架同時運作多個自主代理、自主排序攻擊路徑、甚至自我修正錯誤——AI網路攻擊正從「輔助駭客」進化為「自主作戰」。攻擊目標同樣值得警惕：國家身分識別基礎設施（SSO、OIDC端點、未經驗證API）成為攻擊核心，單一暴露的入口網站即可被映射成完整身分圖譜。人類與AI混合的執行模式，也意味著防禦者必須假設攻擊者的迭代速度快於傳統特徵式偵測，且「看似授權」的掃描活動可能是AI生成。對營運關鍵基礎設施或政府相關網路的組織而言，身分暴露——未經驗證API、除錯端點、憑證潑灑——已是實際的AI代理攻擊面，而非理論風險。

---
## 本週活躍威脅

📌 **SharePoint漏洞CVE-2026-55040公開PoC隔日即遭利用（更新）** — 威脅情報公司**Defused Cyber**在**Rapid7**於8月11日公布PoC的隔天，就在SharePoint蜜罐陷阱觀察到利用**CVE-2026-55040**（CVSS 9.1）的活動，手法正是使用Rapid7公開的PoC。這個在微軟7月更新中修補的身分驗證繞過漏洞，是攻擊鏈的前半段——與8月修補的RCE漏洞**CVE-2026-63520**串連即可達成未經身分驗證的遠端程式碼執行。CISA上月已示警鎖定SharePoint的漏洞利用活動，**Resecurity**亦警告此攻擊鏈可能遭利用。尚未套用7月SharePoint修補的組織應視為已遭積極利用。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/attackers-exploit-sharepoint.html) | [iThome](https://www.ithome.com.tw/news/178118)

📌 **WordPress登入頁「XSS2Shell」漏洞：CVE-2026-64638（CVSS 8.9）** — 研究人員**pwn.ai**揭露WordPress登入頁的反射型XSS，影響**所有版本**且無需身分驗證：特製的使用者名稱在登入失敗後被回顯，於受害者瀏覽器執行JavaScript。在附加條件下——受害者為已登入的管理員且與攻擊者控制的頁面互動——研究人員示範以**單次點擊**升級為**伺服器端任意PHP程式碼執行**。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/13/wordpress-xss/)

📌 **Apple緊急修補macOS螢幕分享漏洞：CVE-2026-65400（CVSS 7.1）** — Apple於**8月6日**罕見地以非例行更新發布**macOS Tahoe 26.6.1、Sequoia 15.7.9與Sonoma 14.8.9**，修補Screen Sharing漏洞，網路攻擊者可在**無有效憑證**的情況下繞過驗證。**Huntress**分析認為問題出在服務的**Secure Remote Password（SRP）**驗證機制狀態管理錯誤，可在預先驗證階段繞過身分驗證並進一步執行遠端程式碼；由於Screen Sharing以**root**權限執行，影響可達root層級。目前尚無實際利用證據，但Huntress與Calif研究人員已重現並公開PoC。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178095) | [JPCERT/CC](https://www.jpcert.or.jp/wr/2026/wr260813.html)

📌 **Jewelbug：中國駭客集團以單一控制面板同時經營間諜活動與加密貨幣詐騙** — **賽門鐵克威脅狩獵團隊**揭露**Jewelbug**，這個中國背景的駭客集團以單一控制面板（**XG-Web**，以瀏覽器為核心的遠端存取框架）同時管理兩條業務線：對中東、東南亞與南亞政府部門的間諜活動，以及工業規模的加密貨幣詐騙。主要植入程式為**Antino**後門，搭配假冒「PDF Viewer」的Chrome/Firefox擴充功能與Edge輔助元件；單一水坑指令碼曾同時感染某中東國家**15個以上的政府webmail租戶**。不到三個月內，受害者資料庫記錄**逾100萬次植入回報與58萬筆遭竊瀏覽器Cookie**。至少一名操作者與中國湖南註冊公司有關。
🔗 **參考資料：** [Symantec](https://www.security.com/threat-intelligence/jewelbug-crypto-fraud-espionage) | [Dark Reading](https://www.darkreading.com/threat-intelligence/jewelbug-apt-state-espionage-cryptocurrency-theft)

📌 **Android間諜軟體「BH Alert」假冒巴林政府民防警報App** — 資安業者**Dream**揭露**BH Alert**：攻擊者於中東衝突期間架設仿冒Google Play頁面，冒充巴林民防及政府機關，以假評論、假下載數誘騙民眾下載。多階段感染鏈最終部署**OctagonPanel**遠端存取木馬，具備攔截簡訊、收集聯絡人、截取螢幕、竊取憑證、銀行App釣魚Overlay與遠端操控等功能，並藉由要求Accessibility Service權限建立長期存取。程式內俄文線索顯示開發者可能為俄語系人士，目前尚無特定組織歸因。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178119)

📌 **Signal推出自動金鑰驗證，導入金鑰透明度機制** — Signal新增自動金鑰驗證功能，導入**金鑰透明度（Key Transparency）**紀錄，讓應用程式可檢查聯絡人公開金鑰是否與歷史紀錄一致，降低金鑰目錄遭竄改導致的中間人攻擊風險，不必再以人工比對安全號碼。**Cloudflare**與**Trail of Bits**擔任獨立稽核方。限制：只能確認金鑰與識別資訊的對應紀錄一致，無法證明帳號目前由誰控制，且需有對方電話號碼才能驗證。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178102)

📌 **Exchange Server：8月更新修補7個漏洞，最嚴重CVE CVSS 8.8** — 8月例行更新修補421個漏洞，其中包含**7個Exchange Server漏洞**（權限提升、服務阻斷、偽冒、遠端執行程式碼），影響Exchange 2016、2019與訂閱版（SE）。最嚴重的是**CVE-2026-62913**（CVSS 8.8），為可導致遠端程式碼執行的堆積緩衝區溢位；**CVE-2026-62911**（CVSS 8.0）則為權限提升漏洞。微軟並提醒安裝8月更新後將停用舊版**Outlook網頁輕量版（OWA Light）**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178103)

📌 **比利時eID：Connective簽章擴充功能漏洞可竊取PIN並觸發瀏覽器RCE** — **Have I Been Pwned**研究人員發現，比利時逾**200萬人**使用的**Connective Signing Extension**（存取電子身分證與Maestro金融卡）未將請求繫結至來源網站，惡意網站、廣告或隱藏iframe可重放啟用權杖、讀取卡片資料、竊取**eID PIN**、偽造簽章請求，並在Windows裝置上執行程式碼；攻擊者還能顯示冒充銀行或政府服務的假PIN對話框。相關漏洞已修補；此類合格簽章在歐盟具有與手寫簽章相同的法律效力。
🔗 **參考資料：** [CyberSecurityNews](https://cybersecuritynews.com/connective-eid-extension-flaws/) | [Dark Reading](https://www.darkreading.com/application-security/belgium-eid-authentication-citizen-accounts-rce)

📌 **商用RISC-V處理器首度證實可受Spectre攻擊，Linux防護失效** — 德國**CISPA**與比利時**KU Leuven**團隊（USENIX Security 2026）實測**SiFive P550**與**T-Head玄鐵C910、C920**，確認**13種Spectre攻擊情境中有12種成功**，並在C910上示範讀取Linux核心記憶體（中位數每秒338位元組，經BPF）。研究發現Linux的`barrier_nospec()`在RISC-V上編譯成no-op、BPF JIT也不產生推測執行屏障，防護形同虛設；提出的5項核心修補中3項已併入主線，指令集仍缺乏可明確停止推測執行的專用指令。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178107)

📌 **美國聯邦資安日誌政策改版（M-26-14），納入IoT與OT** — 美國行政管理預算局（OMB）**M-26-14**備忘錄（5月發布）廢止2021年的M-21-31：不再要求聯邦機構大量蒐集、長期保存未必有明確用途的日誌，改由機構依任務與資安風險決定蒐集與保存範圍，讓日誌實際用於威脅偵測、追查與事件調查；政策並將**IoT與OT環境**納入日誌涵蓋範圍，導入**日誌成熟度模型**可供企業借鏡。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178096)
