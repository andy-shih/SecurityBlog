---
title: "CISO 每日摘要：世界糧食計劃署資料外洩波及 60 萬加薩家庭 (20260608)"
description: "世界糧食計劃署（WFP）確認資料外洩，60 萬加薩家庭個人資訊曝光；C0XMO 殭屍網路利用 DD-WRT 漏洞；UNC3753 語音釣魚攻擊鎖定美國組織"
pubDate: 2026-06-08
tags: ["WFP", "資料外洩", "C0XMO", "殭屍網路", "UNC3753", "供應鏈攻擊", "Miasma"]
author: "Security Solutions Team"
featured: true
---

## 世界糧食計劃署資料外洩波及 60 萬加薩家庭

聯合國世界糧食計劃署（WFP）遭受重大資料外洩事件，高達 **60 萬個**依賴人道救援的加薩家庭個人資訊遭到曝光。此事件嚴重凸顯在衝突地區運作的國際人道組織所面臨的資安風險，對於弱勢族群而言，資料洩露可能帶來危及生命的後果。

- 駭客未經授權存取 WFP 系統，取得加薩糧食援助受益者的登記資料
- 外洩資料可能包含 **60 萬個家庭**的姓名、地址、家庭組成及聯絡資訊
- 此事件發生在 WFP 先前網路攻擊事件之後，顯示人道救援組織 IT 基礎設施持續存在安全漏洞
- 在衝突地區管理大量受益者資料庫的人道組織面臨國家級及犯罪組織的雙重威脅

此次外洩事件凸顯人道組織迫切需要實施包含加密、存取控制及持續監控在內的強健資料保護措施，以保護受益者資料庫的安全。

🔗 **參考文獻:** 完整報導 ([iThome](https://www.ithome.com/security/wfp-data-breach-gaza)) | ([The Hacker News](https://thehackernews.com/2026/06/weekly-recap-instagram-account-hacks.html))

## 本週活躍威脅

📌 **C0XMO 殭屍網路利用老舊 DD-WRT 漏洞感染路由器、DVR 及 Android 裝置**

**C0XMO 殭屍網路**持續擴大規模，利用**老舊 DD-WRT 韌體漏洞**在全球入侵路由器、DVR 及 Android 裝置。該殭屍網路透過掃描使用**預設或弱密碼**及未修補韌體的裝置來傳播，將其納入 **DDoS 及代理網路**。報告指出該殭屍網路正積極演進其命令與控制基礎設施。

🔗 **參考文獻:** [xakep.ru](https://xakep.ru/2026/06/08/c0xmo/) | [iThome](https://www.ithome.com/security/c0xmo-botnet-dd-wrt)

📌 **UNC3753 語音釣魚結合物理入侵鎖定美國組織**

Mandiant 識別的威脅組織 **UNC3753** 正在進行結合**語音釣魚（vishing）**與**物理入侵**的複雜攻擊活動，鎖定美國各組織。攻擊者利用社交工程取得初始存取權限，再部署涉及資料竊取的**勒索手段**。此攻擊活動顯示混合式攻擊手法從社交工程延伸到實體安全破口的升級趨勢。

🔗 **參考文獻:** [The Hacker News](https://thehackernews.com/2026/06/unc3753-used-vishing-and-physical.html)

📌 **VerdantBamboo 於 Linux 設備部署 BRICKSTORM 惡意軟體 BSD 變種**

與中國有關聯的威脅行為者 **VerdantBamboo** 已部署 **BRICKSTORM 惡意軟體框架**的 **BSD 變種**，鎖定 **Linux 設備**。該惡意軟體提供持久的後門存取能力，包括檔案竊取、命令執行及網路偵察。此發展顯示該威脅行為者的武器庫已從傳統的 Windows 攻擊擴展至跨平台能力。

🔗 **參考文獻:** [The Hacker News](https://thehackernews.com/2026/06/verdantbamboo-deploys-bsd-variant-of.html)

📌 **Miasma 蠕蟲供應鏈攻擊鎖定 NPM 套件及 AI 開發工具**

**Miasma 蠕蟲**攻擊活動持續升級，新一波感染鎖定 **NPM 套件**及 **AI 程式碼輔助工具**。攻擊者利用假冒的 **Claude Code 安裝網站**散布惡意軟體以竊取開發者憑證，並在熱門開發套件中植入惡意程式碼。該蠕蟲的 **Phantom Gyp** 技術使其能夠逃避偵測並在受感染環境中持續潛伏。

🔗 **參考文獻:** [iThome](https://www.ithome.com/security/miasma-npm-supply-chain) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/rust-written-ironworm-npm-supply-chain)

📌 **Android 木馬 MagicAd 繞過廣告限制**

研究人員發現名為 **MagicAd** 的新型 Android 木馬，能夠繞過行動裝置上的廣告限制。該木馬透過第三方應用程式商店散布，產生詐騙廣告收益，同時可能竊取裝置資料。這代表影響行動生態系統的**廣告型惡意軟體**日益增長的趨勢。

🔗 **參考文獻:** [xakep.ru](https://xakep.ru/2026/06/08/magicad/)

## OPSWAT可以怎麼幫上忙

鎖定 NPM 套件及 AI 開發工具的 Miasma 蠕蟲供應鏈攻擊持續升級，凸顯了在軟體開發管線中實施全面檔案安全防護的迫切需求。OPSWAT 的 **MetaDefender** 平台提供超過 **30 種防毒引擎**的多重掃描及 **Content Disarm and Reconstruction（CDR）** 技術，可在軟體套件和工件進入開發供應鏈之前檢測並消除威脅。此外，**MetaDefender ICAP Server** 可在代理伺服器及儲存層部署，掃描上傳及下載的檔案，為透過遭入侵套件散布的蠕蟲惡意軟體提供關鍵的安全防護層。
