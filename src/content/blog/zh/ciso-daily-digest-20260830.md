---
title: "CISO 每日摘要：Sony 與 Warner Chappell 控告 Anthropic 培訓 AI 著作權侵害 (20260830)"
description: "Sony Music Publishing 與 Warner Chappell Music 於 8 月 28 日控告 Anthropic，指控該公司非法使用 BT 軟體與網路爬蟲蒐集數千計的受著作權保護音樂作品用於訓練 Claude，求償標的為每件作品最高 15 萬美元法定損害賠償，總曝險達數十億美元。同時：五個 WordPress 外掛及佈景主題漏洞（CVSS 9.8–10.0）允許未經認証攻擊者進行遠端接管與程式碼執行，影響範圍涵蓋 WPMU DEV Dashboard、Avada、TranslatePress、Pods 與 GiveWP，共計影響數十萬套裝置。"
pubDate: 2026-08-30
tags: [Anthropic, Claude, Sony-Music-Publishing, Warner-Chappell, 著作權侵害, 音樂訓練資料, WordPress, WPMU-DEV-Dashboard, Avada, TranslatePress, Pods, GiveWP, CVE-2026-76581, CVE-2026-18431, CVE-2026-19632, CVE-2026-19598, CVE-2026-82222, Dario-Amodei, Benjamin-Mann, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Sony 與 Warner Chappell 對 Anthropic 提起數十億美元著作權訴訟

**Sony Music Publishing** 與 **Warner Chappell Music** 於 **8 月 28 日** 在加州聯邦法院控告 **Anthropic**，指控該公司進行「大規模海盜行為」——以 BT 軟體與網路爬蟲下載並收集數千計的受著作權保護音樂作品用於訓練 **Claude**。訴狀列名 **執行長 Dario Amodei** 與 **共同創辦人 Benjamin Mann** 為個人被告。發行商聲稱 **Anthropic 員工使用 BT 協議大規模下載盜版作品**，來源包括 **Library Genesis** 與 **Pirate Library Mirror**，同時還 **從受許可的歌詞網站**（如 **MusixMatch** 與 **LyricFind**）**進行爬蟲蒐集**。訴狀進一步主張 **Claude 會逐字重複受著作權保護的歌詞**，且**在先前訴訟後添加的防護措施可透過重複提示而輕易被規避**。提及的歌曲包括《Ain't No Mountain High Enough》、《All I Want for Christmas is You》、《Eye of the Tiger》、《Livin' On a Prayer》、《Paper Rings》等。**Sony 與 Warner 請求每件故意侵害的作品賠償最高 15 萬美元**，加上每次著作權管理資訊移除 2.5 萬美元——**理論曝險達數十億美元級別**。此訴狀為 Sony 與 Warner 發行部門首次直接控告模型製造商（儘管 2026 年 1 月由其企業母公司 UMG 與 Concord 提起的訴訟，針對逾 2 萬件作品索賠 30 億美元）。**Anthropic 駁回指控為「回收再用」之詞**，引用該公司於 2026 年 7 月與圖書作家達成的 15 億美元和解案例，並援引該先前訴訟中法官對合理使用所下的判決。

### 這代表的深遠影響

- **訓練資料揭露已成為核心法律風險。** 發行商從起訴發行商轉向起訴模型建造者本身，並將高管列為個人被告。隨著三起重大訴訟現正進行中、各案採用相同律師團隊、指控內容相似的 BT 活動，這種趨勢匯聚意味著既有模式亦有策略調整：著作權人正建立一套統一論述，將系統性、蓄意的大規模侵害行為作為中心指控。
- **法定損害賠償額度創造數十億美元曝險，儘管和解先例可能暗示額度更低。** 每件作品 15 萬美元的法定上限若應用於數千件作品，理論上遠超 Anthropic 與圖書作家的 15 億美元和解案——但發行商訊號表示他們願意訴訟並*索求*這些金額，暗示著要麼損害額估算更高，要麼上市後的嚇阻成本計算已改變。
- **訓練資料保密不再是防禦盾牌。** 在 Bartz（圖書作家訴訟案）中解密的發現文件揭露了 **Benjamin Mann** 描述 **Library Genesis 為「very sketchy AF」** 的內部郵件，以及 Archive Team 將其稱為「公然侵害著作權」的文件——意味著 Anthropic 自家員工在行動前已記錄了聲譽與法律風險。
- **合理使用主張因體裁而分化。** Bartz 案法官裁定圖書訓練具有轉化性質；音樂發行商主張歌詞*並非*轉化使用，特別是逐字重複時，且防護只是混淆之舉。法院現面臨一項學說問題：同一訓練資料集是否可對程式碼/散文為合理使用，卻對音樂為侵害？

🔗 **參考資料：** [Music Business Worldwide](https://www.musicbusinessworldwide.com/now-sony-music-publishing-and-warner-chappell-sue-anthropic-in-multi-billion-dollar-lawsuit-one-of-the-largest-and-most-blatant-ongoing-thefts-of-intellectual-property-in-history/)、[Reuters](https://www.reuters.com/legal/government/sony-warner-music-sue-anthropic-over-songs-used-ai-training-2026-08-31/)、[Fortune](https://fortune.com/2026/09/01/anthropic-warner-sony-music-songs-lawsuit/)

---

## 本週活躍威脅

📌 **五個 WordPress 重大漏洞（CVSS 9.8–10.0）允許未認証攻擊者進行站點接管與遠端程式碼執行**

**Wordfence** 與 **Patchstack** 於 8 月 29 日揭露五個**廣泛使用 WordPress 外掛及佈景主題的重大漏洞**，均允許未認証攻擊者接管站點或執行任意程式碼。**CVE-2026-82222（CVSS 10.0）**——**GiveWP 中的 PHP 物件注入**（版本 ≤4.16.7.1）——允許遠端程式碼執行，無需認証或使用者互動；該漏洞鏈接不安全的 unserialize 處理、攻擊者控制的捐贈資料與已裝置代碼中的 gadget 鏈。**CVE-2026-76581（CVSS 9.8）** 出現於 **WPMU DEV Dashboard**（≤5.0.1），為 **Hub 單一登入的認証繞過**，允許未認証攻擊者在 SSO 對應至管理員角色的站點上取得管理員存取。**CVE-2026-18431（CVSS 9.8）** 出現於 **Avada 佈景主題**（≤7.16，搭配 Fusion Builder ≤3.16），為**任意檔案寫入漏洞**，致能遠端程式碼執行。**CVE-2026-19632（CVSS 9.8）** 出現於 **TranslatePress**（≤3.3.1），**暴露管理員密碼重設 URL**，包括純文字重設金鑰——僅在啟用自動字串儲存且目標使用者語言設為已發布的次要語言時可利用。**CVE-2026-19598（CVSS 9.8）** 出現於 **Pods**（≤3.3.9），為**特權提升漏洞**，允許未認証攻擊者提升至管理員或覆寫任何使用者密碼。受影響的外掛共驅動數十萬套 WordPress 裝置；GiveWP 單獨約有 3 萬套活躍安裝。廠商已發布或即將發布修補；站點營運商應立即更新並稽核意外的管理員帳號、密碼更動與檔案修改跡象。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/five-critical-wordpress-plugin-and.html)

📌 **Anthropic 增加 Claude 運算承諾，OpenAI 因合約不信任退出 SpaceX Cursor 夥伴關係**

**Anthropic** 宣布**增加 Claude 運算配置**給 **Cursor** IDE，在 **OpenAI 因與 SpaceX 合約不信任而退出**該程式編輯工具時填補空缺。該舉措訊號 Anthropic 對 **Claude 程式編寫效能**的信心，反映 AI 供應商在開發者心佔率上升溫的競爭——特別是在 IDE 整合空間，**GitHub Copilot、Claude 與 Grok** 如今正為實時、多檔案編輯存取而競爭。

🔗 **參考資料：** [EdgeX](https://pro.edgex.exchange/en-US/news/article/anthropic-keeps-cursor-openai-pulls-out)

📌 **Grok AI 整合擴展：xAI 推出跨 Mac、iPhone、iPad 與 Tesla 車輛的 Grok**

**xAI** 正擴展 **Grok** 可用性，在 **Apple 裝置**（Mac、iPhone、iPad）與 **Tesla 車輛**上原生啟用 AI 聊天機器人存取，與 **Claude** 和 **Gemini** 競爭終端使用者市場佔有率。**Tesla 宣布將 Grok 整合**至車輛資訊娛樂系統，作為其更廣泛全自動駕駛功能路線圖的一部分，將 Grok 定位為自主駕駛旁的預設 AI 助理。

🔗 **參考資料：** [AppleMagazine](https://applemagazine.com/grok-voice-carplay-003/)

---

## OPSWAT可以怎麼幫上忙

今日多條攻擊路徑皆始於**使用者被要求信任的檔案**：**WordPress 管理員**從 WordPress.org 儲存庫安裝外掛面臨**零擊點站點接管**風險，Anthropic 的著作權抗辯取決於**訓練資料來源**（BT 中繼資料、爬蟲網頁）在讀入時是否應已掃描。**MetaDefender Multi-Scan** 以 **30+ 反惡意軟體引擎**多層掃描**木馬外掛、佈景主題與更新**，在安裝前識別威脅；**MetaDefender CDR（內容清理與重構）** 重建**外掛檔案與佈景主題檔案**，剝除作用中內容與可觸發解析器漏洞的畸形結構；**MetaDefender Kiosk** 在**管理更新邊界**檢查**外掛/佈景主題下載**。
