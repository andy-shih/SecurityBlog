---
title: "CISO 每日摘要：歐盟駁回美國Fable 5安全主張；「Fix This Code」越獄觸發詞曝光 (20260616)"
description: "歐盟正式駁回美國對Anthropic Fable 5禁令的安全主張；「Fix This Code」提示詞曝光為唯一越獄觸發條件；100多名資安專家連署抗議；亞馬遜CEO確認觸發此次管制行動。活躍威脅：Arch Linux AUR供應鏈攻擊（400套件）、Awesome Motive CDN供應鏈攻擊（120萬WordPress網站）、MagicAd廣告木馬、UNC6508中國駭客間諜活動、多個漏洞遭積極利用（Jenkins、LiteSpeed、FortiSandbox）。"
pubDate: 2026-06-16
tags: [CISO, 每日摘要, Anthropic, Fable 5, 歐盟, AI治理, 供應鏈攻擊, WordPress, AUR, 惡意軟體, APT, 漏洞]
author: "Security Solutions Team"
featured: true
---

## 歐盟駁回美國Fable 5安全主張；「Fix This Code」越獄觸發詞曝光

Fable 5 與 Mythos 5 出口管制事件進入第五天，外交、技術與產業層面均出現重要新發展，顯示此事件遠未結束。

### 發生了什麼事

- **亞馬遜角色獲確認：** 華爾街日報與路透社證實，亞馬遜CEO Andy Jassy 親自向財政部長 Scott Bessent 通報 Amazon 研究人員對 Fable 5 的發現，直接觸發了出口管制指令。亞馬遜是 Anthropic 最大投資者，累計投入 **130 億美元**。
- **「Fix This Code」曝光：** 安全研究員 Katie Moussouris——唯一審閱過亞馬遜報告的外部專家——揭露所謂的「越獄」僅為要求 Fable 5 **「修復這段程式碼」**（fix this code），其中包含已知 CVE。Moussouris 主張這屬於標準的防禦性安全工作，並非攻擊性越獄。
- **歐盟駁回美國主張：** 歐盟委員會正式駁回美國的安全論據，並啟動自身調查，審視美國出口管制令的域外效力。The Register 報導此事已在布魯塞爾引發 **「主權意識高漲」**。
- **專家聯署抗議：** 超過 **100 名網路安全專家** 簽署公開信，呼籲撤銷禁令，認為此舉剝奪了防禦方的關鍵工具，而攻擊方行為不受影響。
- **談判無突破：** Anthropic 工程師週一與白宮及商務部官員會面，但消息人士確認雙方 **尚未討論** 解除限制。
- **週邊影響：** SpaceX 以 **600 億美元** 收購 AI 程式碼新創 Cursor，加劇 AI 軍備競賽。司法部另在 NAACP 訴訟中為 xAI 辯護，稱其營運「對國家安全至關重要」。

### 這對 AI 治理的深遠影響

1. **出口管制擴及模型權重而非僅硬體：** 美國建立先例，前沿 AI 模型能力可透過出口管制權力加以限制，為所有主要 AI 開發者帶來不確定性。
2. **投資者兼吹哨者的利益衝突：** 亞馬遜身兼 Anthropic 最大投資者與禁令觸發者的雙重角色，引發 AI 監管中競爭動態的根本治理問題。
3. **地緣政治裂痕：** 歐盟正式駁斥代表 AI 治理框架將出現分裂，對跨國企業的多司法管轄區營運產生深遠影響。

🔗 **參考資料：** 綜合報導（[Reuters](https://www.reuters.com/business/retail-consumer/amazon-voiced-concerns-about-anthropic-ai-models-before-us-governments-crackdown-2026-06-13/)、[Techzine](https://www.techzine.eu/news/security/142189/fix-this-code-three-words-behind-the-export-ban-on-claude-fable-5/)、[Yellow.com](https://yellow.com/news/eu-rejects-us-security-claims-anthropic-ai-models)、[WebProNews](https://www.webpronews.com/cybersecurity-leaders-challenge-u-s-ban-on-anthropics-top-ai-models/)、[TechXplore](https://techxplore.com/news/2026-06-breakthrough-anthropic-trump-administration.html)）

---

## 本週活躍威脅

### 📌 **Arch Linux AUR 供應鏈攻擊 — 400 套件遭植入後門**
攻擊者入侵 Arch 使用者軟體庫（AUR），散布 **400 多個惡意套件**，內含 rootkit 與資訊竊取程式。此為迄今最大規模的開源軟體庫攻擊事件之一。

🔗 **參考資料：** [Xakep.ru](https://xakep.ru/2026/06/15/aur-stealer/)

### 📌 **Awesome Motive CDN 供應鏈攻擊 — 120 萬 WordPress 網站受威脅**
攻擊者入侵 Awesome Motive 的 CDN 基礎設施——該公司旗下擁有 WordPress 外掛 OptinMonster（**100 萬以上活躍安裝**）、TrustPulse 與 PushEngage。CDN 服務的惡意 JavaScript 在受影響網站上建立 rogue 管理員帳號。攻擊手法與 2024 年 Polyfill CDN 攻擊相同。

🔗 **參考資料：** [BleepingComputer](https://www.bleepingcomputer.com/news/security/optinmonster-wordpress-plugin-hacked-in-cdn-supply-chain-attack/)

### 📌 **MagicAd Android 廣告木馬潛入小米與三星應用商店**
Android.MagicAd.1 木馬被發現嵌入 **50 多個應用程式**，透過小米 GetApps 與三星 Galaxy Store 散布。該惡意軟體繞過 SYSTEM_ALERT_WINDOW 限制，濫用 Android Binder 挾持系統應用程式顯示侵入式廣告。

🔗 **參考資料：** [CybersecurityNews](https://cybersecuritynews.com/new-magicad-android-malware-flood-device/)

### 📌 **UNC6508 中國駭客組織 — 鎖定美國醫療與國防機構**
Google 威脅情報團隊揭露 UNC6508（中國國家關聯組織，活躍自 **2023 年**）持續滲透美國醫療、軍事與 AI 研究機構。該組織利用未修補的 REDCap 伺服器，部署客製化 **InfiniteRed** 惡意軟體進行憑證竊取與資料外洩。

🔗 **參考資料：** [SecurityWeek](https://www.securityweek.com/chinese-hackers-target-medical-military-and-ai-research-in-north-america)

### 📌 **Rokarolla Android 惡意軟體 — 竊取 PIN 碼、簡訊與加密貨幣錢包**
新型 Rokarolla Android 惡意軟體透過覆蓋攻擊與無障礙服務濫用，即時竊取設備 PIN 碼、一次性簡訊驗證碼及加密貨幣錢包憑證。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/new-rokarolla-android-malware-steals.html)

### 📌 **SprySOCKS 中國後門擴展至 Windows 平台**
原本鎖定 Linux 系統的中國關聯 SprySOCKS 後門，現已擴展至 Windows 平台，採用 **驅動級隱匿技術**，提供持久的 SOCKS 代理通道供長期間諜活動使用。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/china-linked-sprysocks-backdoor-expands.html)

### 📌 **多個漏洞遭積極利用**
- **Jenkins RCE（CVE-2026-33001）：** 嚴重未經身分驗證的遠端程式碼執行漏洞，透過 `.tar`/`.tar.gz` 解壓縮的符號連結處理不當觸發，已在 CI/CD 環境中遭到利用。
- **LiteSpeed cPanel 外掛（CISA KEV）：** 權限提升漏洞遭積極利用，CISA 要求聯邦機構限期修補。
- **Fortinet FortiSandbox（3 漏洞）：** 攻擊者積極利用三個 FortiSandbox 漏洞，其中一個上週才修補。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/jenkins-vulnerability.html) | [The Hacker News](https://thehackernews.com/2026/06/cisa-flags-litespeed-cpanel-plugin-flaw.html) | [The Hacker News](https://thehackernews.com/2026/06/attackers-exploit-three-fortinet.html)

---

## OPSWAT可以怎麼幫上忙

- **供應鏈攻擊（AUR、Awesome Motive）：** MetaDefender 搭載 **30+ 防毒引擎** 與 **CDR（內容淨化與重建）** 可在下載套件或 CDN 檔案抵達端點或 CI/CD 管道前偵測並阻止惡意軟體。
- **行動惡意軟體（MagicAd、Rokarolla）：** MetaDefender Mobile Security 可在企業環境部署前掃描並封鎖惡意 Android 應用程式。
- **漏洞防護：** MetaDefender 多重掃描可透過檔案型攻擊向量偵測針對 Jenkins、LiteSpeed 及 Fortinet 產品的現行漏洞利用。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
