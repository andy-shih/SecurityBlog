---
title: "CISO 每日摘要：川普逆轉對 Anthropic Fable 5 威脅評級立場 (20260620)"
description: "川普政府態度急轉彎，稱 Anthropic 不再是國家安全威脅——四十八小時前才將 Claude Fable 5 列入出口管制；Anthropic 在首爾設立辦公室並延攬諾貝爾獎得主 John Jumper；Amazon Bedrock 上的 Claude Fable 5 要求分享推論數據。本週活躍威脅：AutoJack 攻擊以單一網頁挾持 AI 代理、Operation Endgame 清除 14,971 個遭 SocGholish 感染的 WordPress 站點、usbliter8 漏洞攻破 Apple A12/A13 SecureROM、Gentlemen RaaS 鎖定 400 個安全程序。"
pubDate: 2026-06-20
tags: [Anthropic, Fable 5, AI治理, 出口管制, 供應鏈安全, 漏洞, 勒索軟體, CISO]
author: "Security Solutions Team"
featured: true
---

## 川普逆轉對 Anthropic 立場——Fable 5 國家安全威脅言論大轉彎

前總統川普在短短 48 小時內戲劇性轉變立場，宣稱 Anthropic **不再是國家安全威脅**，推翻數天前其政府將該公司的 **Claude Fable 5** 能力門檻模型列入出口管制時的表態。川普在記者會上表示 Anthropic 是威脅是「大概一週前的事」，隨後讚揚 Claude 製造商的建設性參與。

這項轉變正值美國政府對前沿 AI 模型立場日益混亂之際。本週稍早，川普政府宣布對 Fable 5 及新公布的 **Mythos 5** 模型實施出口限制，切斷南韓等盟國的存取權限。然而，同一個政府現在似乎不願將 Anthropic 列為國安問題，顯示內部政策存在重大分歧。

Anthropic 並未等待政策明朗化。該公司本週在 **首爾開設辦公室**，展現其對亞太市場的承諾——儘管其最先進模型受到出口禁令限制。此外，Anthropic 宣布延攬前 Google DeepMind 副總裁、2024 年 AlphaFold 諾貝爾化學獎得主 **John Jumper**，顯示其積極進軍 AI 驅動科學研究的意圖。

更複雜的是，在 Amazon Bedrock 上使用 **Claude Fable 5** 的 AWS 客戶現在必須同意與 Anthropic 分享推論數據——這項政策變更引發企業隱私與合規問題。與此同時，**Claude Corps Fellowship** 計畫已開放 **1,000 個非營利組織 AI 職位**，截止日期為 7 月 17 日，擴大 Anthropic 的社會影響力足跡。

### 這對 AI 治理的深遠影響

川普政府在 Anthropic 議題上的搖擺不定，凸顯美國缺乏一致的 AI 出口管制框架。一家公司週一被認定為國安威脅、週三又被解禁——而其先進模型仍處出口限制之下——為企業規劃創造了難以運作的環境。跨國組織的 CISO 團隊現在面臨的問題是：哪個政府信號應主導 AI 採購決策？

在出口限制下同步開設首爾辦公室，凸顯了美國地緣政治目標與 AI 人才及市場全球化之間的矛盾。Anthropic 延攬頂尖 DeepMind 領導層的策略，更進一步顯示前沿 AI 公司將政府限制視為暫時性障礙而非生存威脅。

🔗 **參考資料：** 綜合報導（[Benzinga](https://www.benzinga.com/markets/equities/25/06/43923873/trump-says-anthropic-was-national-security-threat-a-week-ago-maybe-then-credits-claude-maker-for-act)、[The News International](https://www.thenews.com.pk/print/1303858-trump-makes-major-u-turn-on-anthropic-says-ai-firm-is-no-longer-a-national-security-threat)、[Tech Times](https://www.techtimes.com/articles/302726/20250620/anthropic-opens-seoul-office-us-export-ban-korean-access-top-models.htm)、[Reuters](https://www.reuters.com/technology/artificial-intelligence/anthropic-hires-google-deepmind-vp-john-jumper-after-nobel-success-2026-06-20/)、[InfoQ](https://www.infoq.com/news/2026/06/claude-fable-5-bedrock-anthropic-inference-data/)、[BeInCrypto](https://beincrypto.com/donald-trump-speaks-on-anthropic-and-claude-fable-5-controversy/)、[Tech Times](https://www.techtimes.com/articles/307430/20250620/claude-corps-fellowship-opens-1-000-ai-jobs-at-nonprofits-before-july-17-deadline.htm)）

---

## 本週活躍威脅

📌 **AutoJack 攻擊：單一網頁即可挾持 AI 代理執行主機程式碼**
研究人員揭露 **AutoJack** 新型攻擊手法——一個遭入侵或惡意網頁就能挾持內嵌的 AI 代理，在主機上執行任意程式碼。該攻擊利用瀏覽器端 AI 助手與底層系統之間缺乏適當沙箱隔離的弱點。受影響平台包括瀏覽器原生 AI 代理與側邊欄助手。目前尚未分配 CVE，但揭露指出攻擊面廣泛且在大多數實作中尚未修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/autojack-attack-lets-one-web-page.html)

📌 **Operation Endgame 打擊 SocGholish，清除 14,971 個惡意 WordPress 站點**
執法行動 **Operation Endgame** 擴大打擊惡意軟體傳遞基礎設施，目標鎖定 **SocGholish**（又稱 FakeUpdates）——最大型的 JavaScript 式惡意軟體載入器之一。Operation Endgame 清除了 **14,971 個遭入侵的 WordPress 站點**，這些站點被用作 SocGholish 的散佈節點。該行動持續瓦解自 2018 年以來活躍的 SocGholish 幕後傀儡網路基礎設施，該網路曾被用於勒索軟體活動的初始存取傳遞。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/operation-endgame-disrupts-socgholish.html)

📌 **usbliter8 漏洞攻破 Apple A12/A13 SecureROM 開機鏈**
名為 **usbliter8** 的新型漏洞利用程式，針對 Apple **A12 與 A13 SecureROM** 中無法修補的硬體弱點——SecureROM 是 iPhone 與 iPad 建立信任根的唯讀開機 ROM。由於此漏洞位於遮罩 ROM（晶片製造時硬接線），Apple 無法發布韌體修補。該漏洞攻破了安全啟動鏈，可能實現持久且無法偵測的越獄。雖然目前需要實體存取，但對企業設備安全與供應鏈完整性的影響相當重大。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/unpatchable-usbliter8-exploit-breaks.html)

📌 **Gentlemen RaaS 使用 GentleKiller EDR 框架鎖定 400 個安全程序**
名為 **The Gentlemen** 的新型勒索軟體即服務（RaaS）正在部署名為 **GentleKiller** 的自訂 EDR 終止框架，鎖定各大 EDR、XDR 與防毒平台的 **400 個安全程序**。該框架使用多種技術，包括 ETW 修補、微過濾器驅動程式鉤子移除以及直接系統呼叫調用，以繞過核心層級監控。該 RaaS 的加盟者正在地下論壇積極招募，顯示此攻擊能力可能迅速擴散。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/the-gentlemen-raas-uses-gentlekiller.html)

📌 **Gravity SMTP WordPress 外掛漏洞遭利用，導致 API 金鑰外洩**
攻擊者正在積極利用 **Gravity SMTP** WordPress 外掛（1.3.2 版之前）中儲存 SMTP API 金鑰與憑證的漏洞。該外掛有超過 20 萬個網站用於交易郵件，其憑證以明文形式儲存在資料庫中。此漏洞允許未經身分驗證的攻擊者擷取 SMTP 憑證，進而接管電子郵件帳戶，並可能在雲端郵件環境中進行橫向移動。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/hackers-exploit-gravity-smtp-wordpress.html)

---

## OPSWAT 可以怎麼幫上忙

基於檔案的威脅仍是初始入侵的主要管道，**The Gentlemen RaaS** 與 **SocGholish** 兩項攻擊活動都依賴惡意檔案傳遞。OPSWAT MetaDefender 透過 **30+ 防毒引擎的多重掃描**與 **深度內容清除與還原（CDR）** 來偵測並消除檔案中的威脅，包括零時差惡意軟體與武器化文件。對於 WordPress 站長，OPSWAT 的檔案上傳安全解決方案可在惡意檔案到達伺服器前予以攔截。針對像 GentleKiller 這類鎖定 EDR 的框架，OPSWAT MetaDefender Endpoint 提供多層防禦與多重偵測引擎——攻擊者需要逐一繞過，難度遠高於停用單一 EDR 程序。
