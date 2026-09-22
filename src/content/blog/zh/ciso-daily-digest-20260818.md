---
title: "CISO 每日摘要：Claude 推出文字浮水印，同日 macOS Screen Sharing 漏洞（CVE-2026-65400）遭利用植入門羅幣挖礦程式 (20260818)"
description: "Anthropic 開始為 Claude 生成的文字加上浮水印，使 AI 內容可被偵測；同時一個正被積極利用的 macOS Screen Sharing 漏洞（CVE-2026-65400）讓未經身分驗證的攻擊者完全掌控暴露於網際網路的 Mac，並植入門羅幣（Monero）挖礦程式。其他焦點：Kaspersky 揭露俄羅斯關聯的 Armored Likho（Sticky Werewolf）擴充其 STILL 工具組，可竊取 Telegram 工作階段並錄製音訊；Fortinet 分析多功能 Linux 殭屍網路 Evooo1Bot 將 Mirai 能力延伸至 DDoS 以外；xAI 則升高對明尼蘇達州「去衣」深偽禁令的第一修正案訴訟。"
pubDate: 2026-08-18
tags: [Anthropic, Claude, AI浮水印, 內容來源, Apple, macOS, Screen-Sharing, CVE-2026-65400, 門羅幣, 加密挖礦, Armored-Likho, Sticky-Werewolf, STILL工具組, Kaspersky, Telegram, 間諜軟體, Evooo1Bot, Mirai, Linux殭屍網路, DDoS, Fortinet, xAI, Grok, 去衣深偽, 明尼蘇達, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## 同一天的「來源」與「利用」：Claude 為文字加浮水印，攻擊者卻透過 Screen Sharing 掌控 Mac

**Anthropic** 宣布將為 **Claude 生成的文字加上浮水印**——在模型的用詞選擇中嵌入統計訊號，使 AI 撰寫的內容日後可被辨識，而不改變人類閱讀時的觀感。該公司將此舉定位為問責機制，回應 AI 文字與人類寫作日益難以區分的現況——濫用情境橫跨學術造假、影響力操作與自動化詐騙。Anthropic 坦言這個標記是對**詞元選擇的「輕推（nudge）」**，而非密碼學保證:它能挺過輕度編輯,但在大幅改寫或翻譯下會弱化,且**僅能以 Anthropic 自家工具偵測**。此揭露正值全業界的來源標示之爭——**OpenAI**、**Google DeepMind**（SynthID）與監管機關各自推動互不相容的合成媒體與文字標示方案。

同一天也凸顯出「來源」只是問題的一半。資安研究人員證實,一個 **macOS Screen Sharing** 漏洞 **CVE-2026-65400** 正**在野遭積極利用**,鎖定暴露於網際網路的 Mac。此漏洞讓**未經身分驗證的攻擊者完全掌控目標 Mac**——無需密碼——手法是濫用 Apple 的 Screen Sharing／遠端管理服務,並串接部署 **門羅幣（XMR）挖礦程式**。由於 Screen Sharing 是 macOS 內建服務,而許多 Mac 直接暴露於網際網路或位於扁平的辦公室網路,利用路徑極短、波及面極廣;研究人員呼籲組織**在非必要時停用 Screen Sharing、於網路邊界封鎖該服務,並立即套用 Apple 修補。**

### 這對企業風險的深遠影響

- **內容來源正在成為各家廠商差異化的控制項,而非統一標準。** Claude 的浮水印、SynthID 與 OpenAI 的方案彼此不相容,且只有各自的原廠能偵測。評估 AI 內容風險（詐騙、假冒、假訊息）的 CISO 無法假設偵測能力可互通——來源涵蓋率如今取決於是哪個模型產生了文字。
- **內建遠端存取服務中的「免密碼」漏洞屬最高等級曝險。** CVE-2026-65400 濫用一項極易被留在啟用狀態的 macOS 原生功能。面向網際網路端點上的遠端管理面（Screen Sharing、RDP、VNC、SSH）值得持續的外部攻擊面監控,而非一次性強化。
- **挖礦是「完全掌控裝置」後最低調的變現方式。** 取得等同 root 存取權的攻擊者選擇挖礦——一種刻意安靜的酬載。同樣的存取權也支援資料竊取、勒索軟體部署或橫向移動,因此「只是挖礦」的發現應被視為完全淪陷的證據。

🔗 **參考資料：** 綜合報導（[Anthropic](https://www.anthropic.com/news/claude-text-watermark)、[TechCrunch](https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/)、[The Hacker News](https://thehackernews.com/2026/08/apple-macos-screen-sharing-flaw.html)、[Ars Technica](https://arstechnica.com/security/2026/08/vulnerability-giving-attackers-full-control-of-macs-is-under-active-exploitation/)）

---

## 本週活躍威脅

📌 **macOS Screen Sharing 漏洞 CVE-2026-65400 遭利用植入門羅幣挖礦程式——無需密碼**
研究人員證實,**Apple macOS Screen Sharing／遠端管理** 服務中的 **CVE-2026-65400** 正**遭利用**攻擊暴露於網際網路的 Mac,取得對裝置的**完全、未經身分驗證的控制**,並部署**門羅幣挖礦程式**。攻擊無需任何憑證,且因 Screen Sharing 是常被留在可連線狀態的原生服務,曝險範圍廣泛。防禦者應在非必要時停用 Screen Sharing、於網路邊界加以限制,並更新至已修補的 macOS 版本。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/apple-macos-screen-sharing-flaw.html)、[Ars Technica](https://arstechnica.com/security/2026/08/vulnerability-giving-attackers-full-control-of-macs-is-under-active-exploitation/)

📌 **Anthropic 開始為 Claude 生成的文字加浮水印**
**Anthropic** 將在 **Claude** 產生的文字中嵌入隱形統計浮水印,使其日後可辨識 AI 生成內容而不影響可讀性。Anthropic 明言此標記是對用詞的**機率式「輕推」**——能挺過輕度編輯,但在大幅改寫或翻譯下弱化,且僅能以 Anthropic 工具偵測。此變革讓來源標示版圖更加分歧,與 Google 的 SynthID 及 OpenAI 的標示工作並存。
🔗 **參考資料：** [Anthropic](https://www.anthropic.com/news/claude-text-watermark)、[TechCrunch](https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/)

📌 **Armored Likho（Sticky Werewolf）擴充 STILL 工具組,竊取 Telegram 工作階段並錄音**
**Kaspersky** 的 Securelist 詳述俄羅斯關聯的 **Armored Likho** 團體（亦被追蹤為 **Sticky Werewolf**）如何以新增的植入程式擴充其 **STILL 工具組**,可**劫持 Telegram 工作階段、擷取麥克風音訊,並對政府與工業目標進行持續的網路間諜活動**。該工具組採用模組化元件與隱蔽投遞以維持長期潛伏監控,反映攻擊手法從「打帶跑」轉向持續情報蒐集。
🔗 **參考資料：** [Securelist（Kaspersky）](https://securelist.com/armored-likho-still-toolkit/121033/)、[CyberSecurityNews](https://cybersecuritynews.com/armored-likho-still-toolkit-steals/)

📌 **Evooo1Bot:多功能 Linux 殭屍網路將 Mirai 能力延伸至 DDoS 以外**
**Fortinet** 的 FortiGuard Labs 分析 **Evooo1Bot**,一個以 **Mirai** 血統為基礎、但已延伸至 **DDoS 之外**（涵蓋憑證濫用、自我傳播與模組化酬載投遞）的**多功能 Linux 殭屍網路**。該殭屍網路鎖定暴露的 Linux 伺服器與 IoT 裝置,其擴充的功能集顯示 Mirai 衍生程式碼持續被商品化,用於更廣泛的犯罪行動。
🔗 **參考資料：** [Fortinet FortiGuard Labs](https://www.fortinet.com/blog/threat-research/multi-functional-linux-botnet-evooo1bot)、[The Hacker News](https://thehackernews.com/2026/08/evooo1bot-linux-botnet-exploits-known.html)

📌 **xAI 升高對明尼蘇達州「去衣」深偽禁令的第一修正案挑戰**
**Elon Musk 的 xAI** 持續對**明尼蘇達州全美首例**限制 **AI「去衣（nudification）」深偽技術**的法律提出法律挑戰,主張該法違反第一修正案。此案備受關注,因為它讓生成式 AI 平臺責任與言論自由主張正面交鋒,將有助於界定各州能將通用影像模型的輸出規範到何種程度。明尼蘇達州檢察總長則以防範未經同意的私密影像為由捍衛該禁令。
🔗 **參考資料：** [NBC Chicago](https://www.nbcchicago.com/news/national-international/elon-musk-xai-minnesota-nudification-technology-lawsuit/)、[Minnesota Reformer](https://minnesotareformer.com/2026/07/28/elon-musks-ai-company-sues-minnesota-attorney-general-ellison-over-nudification-ban/)

---

## OPSWAT可以怎麼幫上忙

今日最需即刻處理的企業威脅是遠端存取曝險,而非以檔案為載體者——CVE-2026-65400 最佳解法是停用並以防火牆隔離 macOS Screen Sharing 並儘速修補。在 AI 內容來源攸關風險之處（詐騙、假冒、合成文件投遞）,組織應留意浮水印偵測是廠商專屬且不完整的。針對今日活動中以檔案為載體的一環——以二進位檔或文件形式投遞的殭屍網路投放程式與間諜植入程式——**MetaDefender Multi-Scan** 以 30 多個防毒引擎檢查傳入檔案,而 **MetaDefender CDR（內容淨化與重建）** 在武器化文件與壓縮檔抵達端點前予以無害化。
