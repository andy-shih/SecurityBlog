---
title: "CISO 每日摘要：美國解禁 Anthropic Mythos 5 與 OpenAI GPT-5.6 Sol——關鍵基礎設施獲准使用 (20260627)"
description: "美國政府同步放寬 Anthropic Claude Mythos 5 與 OpenAI GPT-5.6 Sol 出口限制，核准 100 多家關鍵基礎設施機構使用；中文 APT 組織於東南亞部署新後門 TinyRCT；FBI 警告俄羅斯情報機構鎖定 Signal 備份復原金鑰；StrikeShark 活動橫跨 10 多國散布 SharkLoader 與 Cobalt Strike；Chrome 廣告阻擋擴充套件（千萬安裝量）存在潛在腳本注入能力；Amazon Q Developer 漏洞可經由惡意儲存庫竊取雲端憑證；F5 修補兩個 NGINX 重大 RCE 漏洞。"
pubDate: 2026-06-27
tags: [anthropic, claude, mythos-5, openai, gpt-5-6-sol, ai治理, 出口管制, apt, tinyrct, signal, 釣魚攻擊, sharkloader, cobalt-strike, chrome, 資訊安全, amazon-q, nginx, ciso每日摘要]
author: "Security Solutions Team"
featured: true
---

## 美國解禁 Anthropic Mythos 5 與 OpenAI GPT-5.6 Sol——關鍵基礎設施獲准使用

美國政府於同日同步放寬了兩款全球最強大 AI 模型的出口限制，標誌著 AI 邊境治理的重大政策轉向。**Anthropic Claude Mythos 5** 獲准部署至超過 **100 家美國關鍵基礎設施營運機構**，而 **OpenAI GPT-5.6 Sol**（連同 Terra 與 Luna 版本）則以有限預覽形式提供給經政府審查的特定企業。

Anthropic 確認，Mythos 5（其最強大的資安專用 AI 模型）現可用於保護美國關鍵基礎設施。核准範圍甚至涵蓋受核准機構中非美國籍的員工。Anthropic 同時表示正積極與政府協商，擴大 Mythos 5 存取範圍，並讓最前沿的 **Fable 5** 模型重新廣泛上線，但未提供時間表。

OpenAI 同步發布 **GPT-5.6 Sol** 作為最新旗艦模型，號稱「迄今最強的資安模型」，搭配 **Terra**（平衡效率與效能）與 **Luna**（速度優化）兩個版本。在 ExploitBench 評測中，GPT-5.6 Sol 僅需約三分之一的輸出 Token 即可達到與 Anthropic Mythos Preview 相當的成績。OpenAI 預期「數週內」擴大存取範圍。

此協調式解禁扭轉了先前因國家安全考量對兩款模型的全面封鎖，顯示美國政府正轉向 **受控存取框架**——允許先進 AI 模型用於經批准的防禦性安全用途，同時維持一般可用性的限制。

**此外，** Anthropic 指控阿里巴巴使用 **2.5 萬個假帳號** 進行 **2,900 萬次** 查詢以蒸餾 Claude 能力的爭議持續發酵。《Forbes》與《PYMNTS.com》均報導了此大規模操作。Anthropic 也宣布啟動「**Claude Corps**」計畫，協助非營利組織有效運用 AI。同時，Anthropic 揭露 **Claude 的付費用戶在 2026 年成長 75%**，與 ChatGPT 的差距持續縮小。

🔗 **參考資料：** 綜合報導（[The Decoder](https://the-decoder.com/anthropic-gets-us-approval-to-bring-back-claude-mythos-5/)、[Reuters](https://www.reuters.com/technology/artificial-intelligence/us-releases-anthropic-model-mythos-semafor-reports-2026-06-27/)、[WIRED](https://www.wired.com/story/how-people-in-china-keep-outsmarting-anthropics-geolocation-restrictions/)、[CNN](https://www.cnn.com/2026/06/26/tech/anthropic-mythos-5-limited-release/index.html)、[The Hacker News](https://thehackernews.com/2026/06/openai-limits-gpt-56-rollout-as-sol.html)）

### 這對 AI 治理的深遠影響

Anthropic Mythos 5 與 OpenAI GPT-5.6 Sol 的同步解禁，標誌著美國 AI 出口管制政策的根本轉變。政府不再採取全面封鎖，而是轉向 **可信賴夥伴模式**——允許關鍵基礎設施營運者存取，同時維持一般可用性的限制。這建立了全新的合規框架，要求 AI 廠商實施堪比國防承包商審查等級的 **地理位置強制、使用監控與客戶盡職調查**。關鍵基礎設施機構的 CISO 團隊應為 AI 模型使用報告、API 存取稽核與人員篩檢等新型合約義務做好準備。

---

## 本週活躍威脅

📌 **中文 APT 組織於東南亞部署 TinyRCT 後門**
一個中文 APT 行為者（CL-STA-1062）被發現使用名為 **TinyRCT** 的新型自訂後門，鎖定東南亞政府機構與能源領域國營企業。這款輕量級 .NET RAT 使用 AES-128 加密 HTTP 信標通訊，透過偽裝成 Chrome 安裝程式的惡意壓縮檔傳遞，利用 **AppDomainManager 注入** 技術載入。Palo Alto Networks Unit 42 在 2025 年 10 月至 12 月間偵測到至少 **10 個組織** 遭入侵。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/chinese-speaking-apt-deploys-new.html)

📌 **FBI 警告俄羅斯情報機構鎖定 Signal 備份復原金鑰**
FBI 與 CISA 更新了關於俄羅斯情報機構鎖定 Signal 帳號的警告。攻擊者現在會誘騙目標交出 **Signal 備份復原金鑰**——一旦遭竊，攻擊者可完全接管帳號、讀取私人與群組訊息歷史，且金鑰在帳號重建後仍然有效。該警告（PSA I-062626-PSA）將此活動連結至 **多個俄羅斯情報機構**。修復方式：在 Signal 設定中產生新金鑰以使舊金鑰失效。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/fbi-warns-russian-intelligence-hackers.html)

📌 **StrikeShark 活動橫跨 10 多國散布 SharkLoader 與 Cobalt Strike**
Kaspersky 揭露 **StrikeShark** 活動使用新型惡意軟體家族 **SharkLoader** 部署 Cobalt Strike Beacon。目標包括印尼外交機構、臺灣政府機關及黎巴嫩、敘利亞、哥倫比亞、尼泊爾、塞爾維亞等多國的軟體開發公司。初始入侵途徑包括 Exchange Server（ProxyLogon）、Openfire 路徑遍歷及 GeoServer RCE 等多種漏洞。攻擊者使用 **Perfect DLL Hijacking** 技術及偽裝成 Google Update 的客製化投放器。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/new-sharkloader-malware-deploys-cobalt.html)

📌 **Chrome 廣告阻擋擴充套件（千萬安裝量）存在潛在腳本注入能力**
Island 安全研究人員揭露「**Adblock for YouTube**」擴充套件（1,000 萬以上安裝量，Chrome 線上應用程式商店精選徽章）含有可經由伺服器端配置變更啟動的**遠端腳本注入路徑**——無需擴充套件更新或商店審查。該擴充套件還會繞過自身的 youtube.com 主機名稱檢查，允許在任何網站上執行程式碼。目前尚未觀察到惡意酬載，但該擴充套件與其他因惡意軟體遭下架的 AdBlock 擴充套件有關聯。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/chrome-ad-blocker-with-10m-installs.html)

📌 **Amazon Q Developer 漏洞可經由惡意儲存庫竊取雲端憑證（CVE-2026-12957，CVSS 8.5）**
Wiz Research 揭露 **Amazon Q Developer** 的高嚴重性漏洞，惡意儲存庫可在開發者開啟工作區後執行命令並竊取 AWS 憑證。單一 `.amazonq/mcp.json` 配置檔案即可從 `git clone` 一路進展至雲端淪陷。Amazon Q 的 MCP 伺服器繼承了開發者的完整環境變數，包括 AWS 金鑰與 API 密鑰。Amazon 已修補此問題。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/amazon-q-developer-flaw-could-let.html)

📌 **F5 修補兩個 NGINX 重大 RCE 漏洞**
F5 發布修補程式，解決 **NGINX Open Source** 中兩個可允許攻擊者執行任意程式碼的重大 RCE 漏洞。考量 NGINX 作為反向代理、負載平衡器及網頁伺服器部署於約 **30% 的有效網站**，這些漏洞對網際網路基礎設施影響廣泛。使用 NGINX 的組織應優先進行更新。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/f5-patches-two-critical-nginx-open.html)

📌 **Google 本週二度發布 Chrome 149 穩定版更新，修補 3 項高風險漏洞**
Google 本週第二次發布 Chrome 149 穩定版更新，修補 **3 項高風險漏洞**（CVE-2026-13281、CVE-2026-13282、CVE-2026-13283），涉及 Mojo 整數溢位及 Payments 與 AdFilter 元件的釋放後使用漏洞。使用者應立即更新 Chrome 至最新版本。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176911)

---

## OPSWAT可以怎麼幫上忙

Amazon Q Developer MCP 漏洞與 Chrome 廣告阻擋擴充套件的潛在注入能力，凸顯了一個新興威脅類別：**內建遠端程式碼執行路徑的可信賴軟體**。無論是透過 AI 輔助工具的 MCP 配置或是具有伺服器控制腳本注入能力的瀏覽器擴充套件，攻擊者正日益鎖定軟體供應鏈的工具與外掛層級。OPSWAT MetaDefender 的**多引擎掃描與 CDR** 可檢查瀏覽器擴充套件、AI 工具配置及開發工具中的嵌入式威脅，而 MetaDefender Drive 與 Kiosk 則為 Mythos 5 與 GPT-5.6 Sol 主要部署目標的關鍵基礎設施環境提供**可信賴檔案與裝置檢查**。
