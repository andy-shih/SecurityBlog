---
title: "CISO 每日摘要：Binance 涉嫌竊取約 63 億美元加密貨幣，創史上最大竊案，調查指北韓駭客 - iThome (20261102)"
description: "iThome 報導 Binance 加密貨幣竊竊 63 億美元並關聯北韓駭客；Cisco Talos 說明 VOLTA 資料竊取惡意軟體透過 Claude、Gemini 與 Kimi 執行 AI 驅動的受害者排名；以及 Microsoft 報導以 Teams 社交工程與不安全 AD CS 憑證濫用相結合的兩起入侵事件導致數據竊取。"
pubDate: 2026-11-02
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Binance 涉嫌竊取約 63 億美元加密貨幣，創史上最大竊案，調查指北韓駭客 - iThome

iThome 報導，Binance 發生約 63 億美元加密貨幣竊案，被描述為有史以來最大的竊盜案。

### 📌對 CISO 的影響

- **準備應對國家級加密貨幣竊盜 —** 被歸因於北韓駭客的據稱 63 億美元 Binance 竊盜，意味著交易所與加密貨幣託管機構應將國家級行為視為重大財務風險，並檢閱冷錢包控制、提款授權以及事件回應備妥狀況。
- **因應 AI 輔助資料竊取惡意軟體分類 —** VOLTA 使用 LLM 根據變現價值對竊取憑證與財務數據進行排名，代表安全團隊應假設竊取的瀏覽器工作階段與 OAuth 權杖會被攻擊者快速優先處理，縮短憑證輪換與工作階段撤銷的時間窗口。
- **強化憑證服務與 Teams 遠端存取 —** Microsoft Teams 與 AD CS 入侵顯示，社交工程結合 ESC1/ESC8 憑證設定錯誤可導致網域控制站存取，且在密碼重設後仍可能維持持久身份，因此 CISO 應稽核憑證範本、在註冊端點要求 HTTPS 與驗證擴充保護（Extended Protection for Authentication），並對任何從自動中斷中排除的帳戶強制執行手動遏制。

**參考來源:** [Binance遭竊約63億美元加密貨幣，創史上最大竊案，調查指向北韓駭客 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91SDR6VkJKNTNiNnNmTGZkRm1JTE5iX0toR3RLclNEVWhkcUZlQ2NRTWdGcGoyZV9uY1p1NHM1eU1ZTTJMWmd5WHNpSDZzdw?oc=5>)

---

## 本週活躍威脅

📌 **新 VOLTA 資料竊取惡意軟體使用 Claude、Gemini 與 Kimi AI 依財務價值對受害者排名**

Cisco Talos 發現一種名為 VOLTA-AUTODOXER 的新型 Windows 資料竊取惡意軟體，利用大型語言模型根據變現價值對竊取數據進行排名。惡意軟體會收集瀏覽器憑證、Cookie、Outlook 與 Slack 數據、支付卡、加密貨幣錢包種子短語、通訊與遊戲工作階段、OAuth 權杖、SSH 與雲端金鑰、Wi-Fi 設定檔以及螢幕截圖。它會建立結構化證據包，透過 OpenRouter 發送至 AI 模型，預設為 Claude Opus 4.6，Kimi K2 與 Gemini 2.5 Flash 作為備用，並接收排名後的目標評估。資料外洩透過 Telegram 分三個階段進行，包括 AI 分析後與即時 Gmail 收據增強後。範本設計顯示這可能是建構套件或客製化二進位檔服務。Talos 形容 AI 層屬於工作流位移，而非速度或規模。此次揭露緊隨 Talos 先前關於 NIK C2 的報導，NIK C2 是一種 AI 啟用的遠端存取框架，可濫用受害者自己的 OpenAI API 金鑰進行推論。

**參考來源:** [New VOLTA Infostealer Uses Claude, Gemini, and Kimi AI to Rank Victims by Financial Value](<https://thehackernews.com/2026/11/new-volta-infostealer-uses-claude.html>) 

---

📌 **攻擊者假扮 IT 支援人員在 Microsoft Teams 詐騙，濫用 AD CS 竊取公司數據**

Microsoft 調查了兩起入侵事件，攻擊者假扮 Microsoft Teams 上的 IT 支援人員，誘使員工透過 Quick Assist 授予遠端控制，並濫用設定不安全的 Active Directory Certificate Services 獲取特權登入憑證，其中包括一個網域控制站的憑證。攻擊者並未利用 Teams 漏洞，而是依賴社交工程與設定錯誤的 AD CS，Microsoft 未將活動歸因於已知組織。在第一個案例中，ESC1 憑證範本允許低權限使用者為特權帳戶請求憑證；自動中斷阻止了大部分身份，但一個被排除的帳戶仍可使用，從而允許存取網域控制站、執行 DCSync，並透過重新命名的 Rclone 將數據傳輸至外部 SFTP 伺服器。在第二個案例中，攻擊者使用 PetitPotam 迫使網域控制站向攻擊者控制的電腦進行驗證，將該登入轉發至 AD CS Web 註冊頁面（ESC8），請求網域控制站憑證，並取得 Kerberos 票證授權票證；將工作站隔離停止了進一步活動。Microsoft 建議透過已知內部管道確認非預期的支援請求、限制外部 Teams 租戶、檢閱憑證範本、在 Web 註冊端點要求 HTTPS 與驗證擴充保護（Extended Protection for Authentication）、盡可能關閉 NTLM、稽核憑證、撤銷不良憑證，並單獨檢閱活動 Kerberos 票證。

**參考來源:** [Attackers Pose as IT Support on Microsoft Teams, Abuse AD CS to Steal Company Data](<https://thehackernews.com/2026/11/attackers-pose-as-it-support-on.html>) 

---

📌 **DarkBlinders 攻陷以色列目標與伊拉克庫德政府雲端環境**

《駭客新聞》報導，伊朗國家支持的間諜活動由 DarkBlinders 發起，於 2026 年 8 月至 10 月間攻陷一名以色列知名人士及伊拉克庫德斯坦地區政府雲端環境，手法包括釣魚郵件、冒充登入網域的釣魚頁面、特洛伊木馬編程挑戰、DLL 側載、SHELBYLOADER、SHELBYC2 與 GitHub 命令控制。

**參考來源:** [DarkBlinders Compromises Israeli Target and Iraqi Kurdish Government Cloud Environment](<https://thehackernews.com/2026/11/darkblinders-compromises-israeli-target.html>) 

---

📌 **Xinchuan 及其子公司遭受駭客攻擊，部分檔案無法解密，內部作業系統受影響 - iThome**

iThome 頭條報導 Xinchuan 與其子公司遭到駭客攻擊，部分檔案無法解密，內部作業系統受到影響。

**參考來源:** [鑫傳及子公司遭駭客攻擊，部分檔案無法解密，影響內部作業系統運作 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB0OWxWeU9nb3hUVnB2M0dtMlN4YWVWOTM2MldvdE80RktIdndnQXdDWnM1NW9KY1U4UGJfRmxhZ2l2YURNTjVoazJvNTR4QQ?oc=5>) 

---

📌 **政府 Linux 伺服器遭 SysGoRAT 與疑似 AI 生成腳本攻擊**

《駭客新聞》報導 Palo Alto Networks 單位 42 追蹤 CL-UNK-1211，於 2025 年 10 月至 2026 年 4 月間針對政府及國家附屬 Linux 基礎設施，使用開源工具、自訂 PHP 網頁外殼、AI 生成惡意腳本、認證竊取、透過 WebSocket 的 SysGoRAT、日誌清除與誤導性紅隊標記。

**參考來源:** [Government Linux Servers Targeted With SysGoRAT and Suspected AI-Generated Scripts](<https://thehackernews.com/2026/11/government-linux-servers-targeted-with.html>) 

---

📌 **台灣光學平台及其子公司遭網路攻擊導致伺服器加密**

根據 iThome 報導，台灣光學平台（TOP）及其子公司遭受網路攻擊，導致數台伺服器上的檔案被加密。組織應檢討對外存取點、隔離受影響系統，並驗證離線備份，以防範勒索軟體對營運造成影響。

**參考來源:** [台數科及子公司遭駭客攻擊，部分伺服器檔案遭加密 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1DQVNIVnQ2ajhnYUVfZWpvN1pHazdYeXhhSE9Ici1JVzUxd2RUTXNpWGNHdm5QN3F1V1A3VXlGZUtxUzRwWU9PTVA5X2JMZw?oc=5>) 

---

📌 **攻擊者竄改第三方監控 DNS 記錄，竊取 Polymarket 用戶約 2.7 萬美元資產**

iThome 報導，威脅行為者入侵並變更第三方監控服務的 DNS 記錄，進而從 Polymarket 用戶竊取約 270 萬美元資產。此事件凸顯與外部依賴相關的供應鏈漏洞，組織應審計第三方整合、對管理主控台強制實施多因素驗證，並監控 DNS 設定完整性。

**參考來源:** [駭客竄改第三方監控業者DNS紀錄，竊走Polymarket用戶270萬美元資產 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBFdy00dFlmS0NLOTdKbmNkRkFQUmdxUUVNby1lX0NHdGpOempHVEtHbEF0U0dXMjZvQWZfeENwUnUtSE5kZERjTnpvN2tGUQ?oc=5>) 

---

📌 **全球超過 10,000 個 GitLab 實例仍面臨關鍵性漏洞威脅**

根據 iThome，全球超過 10,000 個面向網際網路的 GitLab 實例仍未修補兩項最高嚴重程度的關鍵漏洞，其中至少 46 個位於台灣。資安團隊應立即盤點面向公眾的開發工具，在可能時限制網路存取，並套用廠商官方更新以降低遠端利用風險。

**參考來源:** [全球仍有逾萬臺GitLab執行個體暴露於兩個滿分漏洞威脅，臺灣也有46臺 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4tTnhxcUdmYlBhTll5Wmk1cnJnbUlWajRuUmhQWjE0SjBGeUY2blB0bDVUXzRFMGRiaXJMcTRvY3QtdjZpZFBaSVdleFBwdw?oc=5>) 

---

📌 **臺灣數位發展部訂定通訊控制系統安全防護標準，於2027年1月1日生效**

臺灣數位發展部依據《資通安全管理法》，為通訊與廣播控制系統訂定資通安全防護標準，將於2027年1月1日生效。涵蓋的關鍵基礎設施業者，須依高、中、一般防護等級，落實遠端存取、身分驗證、網路隔離、弱點管理與業務持續性等防護措施。要求包括：僅允許來自預設控制點的經授權遠端存取，並須加密與多重身分驗證，同時進行監控；高、中等級系統於變更工程邏輯時，須額外進行確認。高等級系統必須與一般 ICT 網路隔離並實施邊界監控；中等級系統則須實施邊界存取控制。無法修補的弱點，須採行補償控制，如網路分割、限制存取來源或強化監控。備援、備援測試與業務持續性演練將依防護等級分階段實施，且外包開發契約必須納入安全需求。標準亦允許基於技術限制的例外，但必須附上佐證資料與經核准的替代控制措施。

**參考來源:** [數發部訂定通訊傳播控制系統資安防護基準，2027年元旦生效 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0wZFNZSkthWkhrOHVrdkNXS3VtRndodGFlN2lmT2I3alVJMC1LV2Z0Wkx6cnBlR1pHdFgyRkJLQkJHcmJLVEFRUFY1RWlodw?oc=5>) 

---

📌 **無印良品與松屋系統遭入侵，分別洩露2726萬與238萬筆會員記錄**

iThome報導，無印良品與松屋的系統遭駭客入侵，導致分別洩露2726萬與238萬筆會員個人資料記錄。

**參考來源:** [無印良品、松屋系統被駭，分別外洩2,726萬、238萬筆會員個資 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1vZjZabk1sZG5VNEVpcUdvRkdqaTU1SElZVW5NYUhHb2pTRGVGZk5wT2VyUUVlYnlfcUIzTmtsRzh5Q0VhOHZTaE10WGZJZw?oc=5>) 

---

📌 **Ivanti修補兩個ICS漏洞，CISA將其列入KEV目錄並警告相關攻擊**

iThome報導，Ivanti已修補兩個工業控制系統漏洞，CISA將其列入已知被利用漏洞（KEV）目錄，並警示相關攻擊已被觀察到。

**參考來源:** [Ivanti再修補兩個ICS漏洞，CISA已列入KEV警告出現相關攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91aHU4OTRKaS1TR0x5SXpvbjM0ZFBzZjhRdTU1TTBPRkxESUFHMTV3YlhtUXdoNDhwam40TlRJc01BQjZzaG5ySFZYOFVLZw?oc=5>) 

---

📌 **Shadowserver、GitLab、CVE-2026-110264、CVE-2026-97229 - iThome**

iThome 頭條報導涉及 GitLab 與 CVE-2026-110264 及 CVE-2026-97229 的 Shadowserver 活動。

**參考來源:** [Shadowserver、GitLab、CVE-2026-110264、CVE-2026-97229 - iThome](<https://news.google.com/rss/articles/CBMiqAFBVV95cUxNd1Z4TGl6WDlOSzZsa3pMcFpSRG1WOFhteHZscnY1RnQ3QWJXN241b05XUmpnS2xwUVNhWDg0V2d4T2pLSHpNejlrMUpSLTcwWS1uRkFic0lSUUEtWEg5ZjAxUjl4eVgtOFRWZkJXSjMtdlluUzkwRGZtZ3B6bEdwdG5kTGNQMVpBcWNWYW1EYzU1bXhSYV8zZGtVUmlRc1RzY2RfcS1hX1E?oc=5>) 

---

📌 **SMS of Death 漏洞可遠端停用 Android 智慧型手機**

Xakep 報導一種 SMS of Death 漏洞，能遠端使 Android 智慧型手機無法服務。

**參考來源:** [Уязвимость SMS of Death может удаленно выводить из строя Android-смартфоны](<https://xakep.ru/2026/11/02/sms-of-death>) 

---

📌 **PapRAT 網路間諜活動在南亞留下 BITTER 味道**

FortiGuard Labs 將南亞網路間諜活動歸因於 BITTER (TA397)，該組織針對 Windows 系統，利用三條攻擊鏈——包含惡意 LNK 檔案、VHDX 磁碟映像與 WebDAV URL 捷徑——部署 PapRAT 遠端存取木馬，其中一條攻擊鏈並部署 WmRAT。

**參考來源:** [PapRAT Cyber Espionage Campaign Leaves a 'BITTER' Taste in South Asia](<https://www.darkreading.com/cyberattacks-data-breaches/paprat-cyberespionage-campaign-bitter-south-asia>) 

---

📌 **Good Smile Company 被駭，超過 400,000 筆信用卡資料可能外洩，台灣客戶或受影響**

iThome 報導，日本人偶製造商 Good Smile Company 遭到駭客攻擊，超過 400,000 筆信用卡的部分資料可能外洩，台灣客戶可能也受影響。

**參考來源:** [日本公仔業者Good Smile Company遭駭，逾40萬張信用卡部分資料恐外洩，臺灣顧客也可能受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE95OHRGUmZnckFCNGhPSW1ES2V1MjdqMklJYUFkQ1R1Z0p6WkFXTmF4b012a2dwSXByaVpySUdpQzVHWi12aWlpVEhOaHNWZw?oc=5>) 

---

📌 **PHP2Shell 漏洞已遭利用，晴碁科技表示打補丁後仍需持續檢查網站漏洞**

iThome 報導，晴碁科技表示 PHP2Shell 漏洞已遭利用，組織在打補丁後仍應持續檢查網站漏洞。

**參考來源:** [PHP2Shell 漏洞已遭利用，明希科技：修補後仍須持續檢測網站弱點 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1HeUd2OXY2dVhER05ZS0xhLUFfU0dXX2h3RTBjWFhwaE12NTc1RjBhbDl6YTEzdU1DSGZDeW9TWHZ4Ymp1cWt4QVQyWQ?oc=5>) 

---

📌 **91APP 被駭波及台灣 MUJI，官網訂單資料可能外洩；日本 MUJI App 通報另一起安全事件**

iThome 報導，91APP 資安事件波及台灣 MUJI，官網購物訂單資料可能外洩，而日本 MUJI App 據報發生另一起安全事件。

**參考來源:** [91APP遭駭波及臺灣無印良品，官網購物訂單資料恐外洩，日本MUJI App也傳不同資安事件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE42TlZkcHdZSVM5LXZ3NFhNeDUzcFJVZURlaWhLQlJzQl9oc0pnMWlOVU5xS3pTZ1N1QU02QVlUd2VYTzZlLVBnSmJsVWhXZw?oc=5>) 

---

📌 **惡意 Claude Code 擴充功能出現在 Cursor Marketplace 中，攻擊者試圖建立 SSH 後門**

iThome 報導，惡意 Claude Code 擴充功能已出現在 Cursor Marketplace，攻擊者試圖建立 SSH 後門。

**參考來源:** [Cursor市集出現惡意Claude Code擴充套件，攻擊者企圖建立SSH後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9VV0o1S0g5WE9sZ0M3STlBXzBQbXhGS1JMUE00WGlESUpIcTNNb0JvT0ZkLUNxRFdhbjQ5V21QUmVyV2YyZlVOTDRzYTBpQQ?oc=5>) 

---

📌 **Alpine Linux 遭遇重大 GitLab 漏洞，正重建開發基礎設施以防範供應鏈風險**

iThome 報導，Alpine Linux 遭遇重大 GitLab 漏洞，正重建其開發基礎設施以緩解供應鏈風險。

**參考來源:** [Alpine Linux遭GitLab重大漏洞攻擊，重建開發基礎設施防範供應鏈風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9uV1ZkMDI3eThuZkZYVHE2NlEzY0FKT05yb0M5azJtd3JncVQyXzkwWGs1LVU2OXkxaGE1a1NheGo4akFUYnBEV1kxTGhDdw?oc=5>) 

---

📌 **個人保養品牌康那香線上平台外包服務供應商 91APP 遭駭，電子商務平台訂單資料可能外洩**

iThome 報導，康那香線上平台的外包服務供應商 91APP 遭到駭客入侵，電子商務平台的訂單資料可能外洩。

**參考來源:** [衛生用品廠商康那香線上平臺委外服務廠商91APP遭駭，電商平臺訂單資料恐外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1DZFdqUk9uWHhWN01Ed2ZtYzl0Q3dQTndDX05DbXl2WHowcnd3UEhKMVZua3dVOFRKcXNua3dxVWRiUENxVzZhdmsxMU42QQ?oc=5>) 

---

📌 **JVN：Siemens 產品更新（2026 年 10 月）**

JVN 報導 2026 年 10 月發布的 Siemens 產品更新。

**參考來源:** [JVN: Siemens製品に対するアップデート（2026年10月）](<https://jvn.jp/vu/JVNVU90141693>) 

---

📌 **日本國防研究院分析新興 AI 網路攻擊威脅，從針對性攻擊到跨系統多種攻擊方式，傳統政府安全事件回應面臨挑戰**

iThome 報導，日本國防研究院分析了 AI 驅動的網路攻擊威脅，從特定目標攻擊演變為跨系統、多種攻擊方式，對傳統政府安全事件回應構成挑戰。

**參考來源:** [日本防衛研究所分析AI網攻新威脅，從鎖定特定目標到跨系統、多手法攻擊，傳統政府資安應變通報面臨挑戰 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE13am1PSHcyNUZ4SzZwZVRjRk9XaUM0N1ViLVBmRWtDR2FrWE0wWkZYZW94c19zUldCMGNod1I0UFZScndWSC1XcGxTWTF1QQ?oc=5>) 

---

📌 **Linux 基金會 AAIF 新增四個 AI 代理人開源專案，涵蓋沙盒隔離與技能共享**

iThome 報導，Linux 基金會的 AAIF 新增四個 AI 代理人開源專案，涵蓋沙盒隔離與技能共享。

**參考來源:** [Linux基金會旗下AAIF新增4項AI代理開源專案，涵蓋沙箱隔離與技能共享 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84amRqZUI4T2hxZGNOYXg1eGY4VlRTYlNJaVgyVHZ3a1BWWG9DUWl1YTZVMS0yb292S1RiLXpFbC1jNmhodE9TbER0Z3JVQQ?oc=5>) 

---

📌 **OpenSandbox 由 iThome 報導**

iThome 報導 OpenSandbox。

**參考來源:** [OpenSandbox - iThome](<https://news.google.com/rss/articles/CBMiVEFVX3lxTE1iQ0tmNVpqcHNFQ2xjc0tNX000VTdzQmpEVUlBX2JWYmRYeHVNdVJ5NlVrQkJSV0hBc1dheWRyb25tOUtBOFFrSG9xNndlQmdjTGI2Vg?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261102-1-1793646094494 -->
