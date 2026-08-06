---
title: "CISO 每日摘要：Anthropic 成立自研晶片團隊，為 Claude 打造客製化 AI 晶片 (20260806)"
description: "Anthropic 於8月5日首度公開證實成立自研晶片團隊，將為 Claude 設計客製化 AI 晶片，與 OpenAI 攜手博通打造的 Jalapeño 推論晶片並列 AI 廠商垂直整合硬體的新趨勢（路透社、TechCrunch、Quartz）。同時，CISA 將 JetBrains TeamCity 漏洞 CVE-2026-63077（CVSS 9.8、已遭積極利用）列入 KEV，聯邦機構須於8月8日前完成修補；Veeam 修補 CVSS 10.0 的 Veeam ONE 漏洞 CVE-2026-64633；微軟公布 NPM 套件 keyv 供應鏈攻擊 ChainDrop 的完整攻擊流程；逾 250 個網域的 macOS ClickFix 攻擊鏈散布 Atomic Stealer（AMOS）竊密軟體。"
pubDate: 2026-08-06
tags: [CISO, 每日摘要, AI 安全, 供應鏈, 漏洞, 惡意軟體]
author: "Security Solutions Team"
featured: true
---

## Anthropic 首度證實成立自研晶片團隊，為 Claude 設計客製化 AI 晶片

Anthropic 於 **8月5日** 向 Business Insider 與路透社證實，正在成立內部 **「客製化晶片團隊」（custom silicon team）**，為 Claude 設計專屬 AI 晶片，這是該公司首度公開確認自研晶片計畫。職缺顯示團隊涵蓋晶片前端與實體設計、製造前驗證、晶圓代工、封裝與測試等領域，年薪介於 **32萬至48.5萬美元**。Anthropic 強調團隊將與模型團隊 **共同設計軟硬體**，讓 Claude 跑得更快、成本更低，且不會放棄現有供應商——AWS Trainium、Google TPU、Nvidia GPU 與 AMD 晶片仍將是擴充運算能力的核心。

該公司尚未公布晶片規格、時程或製造夥伴；The Information 上月報導 Anthropic 正評估與 **三星** 合作，路透社消息來源則指出，開發一顆先進 AI 晶片的成本可能接近 **5億美元**。Anthropic 追隨 OpenAI 的腳步——OpenAI 今年6月發表與博通共同開發的推論晶片 **Jalapeño**；Google（TPU）、Amazon（Trainium/Inferentia）、微軟（Maia）與 Meta（MTIA）也都已投入客製化加速器。

### 這對 AI 基礎設施治理的深遠影響

自研晶片是算力成本的攻防戰：晶片與模型共同設計，直擊 AI 服務最大的成本來源，推論成本下降將直接擴大 AI 代理（Agent）的部署範圍，包括資安關鍵流程。對 CISO 而言，這代表能力決策（晶圓代工選擇、IP 授權、夥伴依賴）正收斂到少數 AI 廠商手中，形成模型與 API 依賴之外、需要監控的全新供應鏈層。此一趨勢也與黑帽大會 AI Summit 的防禦討論相互呼應——Anthropic 網路與國家安全政策主管 Rob Bair 主張產業已進入「後 Mythos 時代」，防守方必須共享正在掃描哪些程式碼庫，並停止為了配合研討會時程而延後漏洞揭露；機器速度的攻防節奏，正讓推論經濟學與 AI 供應鏈成為董事會層級的風險議題。

🔗 **參考資料：** 綜合報導（[路透社](https://www.reuters.com/business/anthropic-build-in-house-chip-design-team-claude-hire-engineers-2026-08-05/)、[TechCrunch](https://techcrunch.com/2026/08/05/anthropic-is-hiring-an-ai-chip-design-team/)、[Quartz](https://qz.com/anthropic-custom-ai-chip-design-team-claude-080526)、[iThome](https://www.ithome.com.tw/news/177902)）

---

## 本週活躍威脅

📌 **CISA 將 JetBrains TeamCity 漏洞 CVE-2026-63077（CVSS 9.8）列入 KEV，已遭積極利用**
CISA 於 **8月5日** 警告，CI/CD 平臺 TeamCity 的不受信任資料反序列化漏洞已遭積極利用，並列入已遭利用漏洞名單（KEV），聯邦機構須在 **8月8日前（3天期限）** 完成修補。攻擊者可未經身分驗證，透過 HTTP/HTTPS 存取 TeamCity 伺服器，利用代理程式輪詢（polling）協定以伺服器權限執行作業系統指令，危及組態設定、憑證與下游 CI/CD 管線完整性。JetBrains 於7月27日公布漏洞，本地建置版已由 **2025.11.7 與 2026.1.3** 版修補。
🔗 **參考資料：** [iThome — CISA 警告](https://www.ithome.com.tw/news/177916) | [iThome — JetBrains 修補](https://www.ithome.com.tw/news/177909)

📌 **Veeam 修補 Veeam ONE 與 Service Provider Console 多個重大漏洞**
Veeam 8月4日的資安公告涵蓋 **Veeam ONE 的 6 個漏洞**，最嚴重的是 **CVE-2026-64633（CVSS 10.0）**，可讓攻擊者在部署代理程式的主機上執行任意程式碼，另有 CVE-2026-58075（8.7）、CVE-2026-58074 與 CVE-2026-64631（8.6）、CVE-2026-64634（8.4）。所有 13.0.2.6723 以前的 13.0 版受影響，已由 **13.1.0.7034** 版修補。Service Provider Console 9.3 版（**9.3.0.35057**）修補 **CVE-2026-58073（CVSS 9.5，受管理代理程式遭冒用並外洩憑證）**、**CVE-2026-58072（9.0，管理伺服器任意檔案寫入與執行程式碼）**、CVE-2026-58067（8.7）與 CVE-2026-58071（8.2）。兩套產品分別位在備份環境與多租戶 MSP 管理的核心位置。
🔗 **參考資料：** [iThome — Veeam ONE](https://www.ithome.com.tw/news/177910) | [iThome — Veeam SPC](https://www.ithome.com.tw/news/177918)

📌 **macOS ClickFix 攻擊：逾 250 個網域以瀏覽器指紋辨識散布 Atomic Stealer**
微軟威脅情報團隊追蹤到 macOS ClickFix 攻擊操作，**超過 250 個前端網域** 會先對訪客進行指紋辨識（平台字串、螢幕與視窗尺寸、WebGL 訊號），再決定是否顯示假軟體下載頁面，藉此避開爬蟲與沙箱偵測。分析到的攻擊鏈最終散布 **Atomic Stealer（AMOS）**；受害者若在 Terminal 貼上混淆指令，就會啟動竊密程式，鎖定憑證、瀏覽器資料、身分驗證儲存區與加密貨幣錢包。微軟於8月5日公布分析報告。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/over-250-clickfix-domains-use-browser.html)

📌 **ChainDrop：微軟公布 keyv 蠕蟲完整攻擊流程，多家資安公司指向 Shai-Hulud**
8月4日 NPM 套件 keyv 維護者的 GitHub 帳號遭入侵，導致 **444 個套件被污染、攻擊者發布 2,212 個惡意版本**。微軟威脅情報團隊揭露蠕蟲運作流程：它會判斷受害電腦是開發工作站還是 CI/CD 環境，竊取工作流程機密、runner 憑證與 OIDC 發布權限，並從本機檔案、環境變數與 GitHub Actions runner 記憶體搜刮憑證，嘗試通過 NPM、GitHub、AWS、Kubernetes 與 HashiCorp Vault 身分驗證，再以 HTTPS 外傳並以 GitHub 儲存庫充當備援。**Aikido、OX Security、Semgrep、Socket、StepSecurity 與 Wiz** 皆指出 ChainDrop 是 **Shai-Hulud** 大規模供應鏈攻擊的一部分（使用相同的「Shai-Hulud: Here We Go Again」外洩字串），並發現新手法：basE91 多態酬載、下載 Bun 執行環境、植入 Claude 與 VS Code 組態設定、以及從以太坊智慧合約取得 C2 網域。
🔗 **參考資料：** [iThome — 微軟分析](https://www.ithome.com.tw/news/177929) | [iThome — Shai-Hulud 歸因](https://www.ithome.com.tw/news/177937)

📌 **Zbtlink 路由器出廠即含 ENDLESSDOORS 後門**
VulnCheck 在 **至少 20 款中國 Zbtlink 路由器型號** 中發現 **出廠內建後門**，現有的 21 個韌體映像檔（橫跨兩年以上）全部受影響。命名為 **ENDLESSDOORS** 的植入程式偽裝成 Linux kworker 核心執行緒、以 root 權限運作，每 35 秒就向中國 C2 基礎設施（47.107.224[.]89、rbdg4nzqadui[.]wikaba[.]com）回報，且無任何身分驗證——伺服器可直接下達 shell 指令或要求開啟反向 bash shell（連接埠 7000）。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/chinese-made-zbtlink-routers-ship-with.html)

📌 **CryptoJS 弱隨機數導致 570 萬美元加密貨幣錢包遭竊**
Coinspect 將 **「Ill Bloom」** 錢包盜竊事件追溯到 `CryptoJS.lib.WordArray.random()`——這個 12 年前引入 JavaScript 加密函式庫的弱隨機數產生器，產生了可被猜測的復原助記詞。鏈上分析顯示自5月底以來的兩波盜竊中，損失下界約 **570 萬美元**，涉及 5 款錢包應用：RRWallet 與 Milo（已下架、無修補）、Bexo（20.1.0 修補）、NanChat（1.3.0 修補）與 Bitcoin Libre（v4 修補）。更新應用程式無法修復已產生的助記詞。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/cryptojs-weak-rng-behind-57-million-in.html)

📌 **臺灣金屬機構件廠州巧（3543）及 3 家子公司遭駭，部分資訊系統停擺**
上市公司金屬機構件廠州巧於 **8月5日下午** 在公開資訊觀測站發布重大訊息，公司與旗下 **蘇州州巧、廈門州巧、越南州巧** 的部分資訊系統遭駭客入侵而無法使用。州巧已啟動資安應變機制並與外部專家合作，正進行全面掃描與檢測，確認安全後將以日常備份陸續恢復系統；初步評估對整體營運無重大影響。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177904)

📌 **iCloud 私密轉送遭 WebKit 三項功能繞過，真實 IP 恐外洩**
Mysk 研究團隊發現，WebKit 的 **DNS 預先解析、WebAuthn 關聯來源請求與 WebTransport**（分別自 iOS 26.0、18.0 與 26.4 起支援）會繞過瀏覽器設定的代理伺服器，直接從裝置發出網路請求，讓網站得知使用者的 DNS 路徑甚至真實 IP，**iCloud 私密轉送** 也受影響，iOS、iPadOS 與 macOS 上的 WebKit 瀏覽器均曝險。作業系統層級的 VPN 不受影響；研究人員已通知 Tor Project 與 iOS Onion Browser 開發者。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/webkit-proxy-bypasses-can-expose-real.html) | [iThome](https://www.ithome.com.tw/news/177913)

📌 **逾 4,400 臺 Rockwell PLC 暴露於網際網路，其中 22 臺位於遭水務攻擊的城市**
Forescout 8月3日的掃描發現全球 **4,407 臺** Rockwell Automation 控制器暴露在網際網路（美國 2,844 臺），其中 22 臺位於近期美國水務設施攻擊事件影響的城市，且 19 臺位於同一家行動電信業者網路上。目前無確認遭入侵的證據，Forescout 指出報導中的影響（重設密碼、變更 IP）無需利用漏洞即可達成——暴露的 EtherNet/IP 連接埠 44818 提供未經身分驗證即可識別或改寫控制器設定的路徑。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/over-4400-rockwell-plcs-exposed-online.html)

📌 **Poison Claude：地下管道以官方 5–15% 價格轉售 Claude 存取權**
Okta 研究人員在網路犯罪論壇上發現至少 6 個販售非法 AI 模型存取的服務。**Poison Claude** 宣稱可提供 Claude 模型（Opus 4.8/4.7/4.6、Sonnet 4.6），作法是以 AWS Bedrock 的 **100 美元免費額度** 建立帳戶池，將客戶請求路由到池內帳戶——而營運者可以看到每一筆客戶提示詞。一個組態錯誤暴露的 API 狀態端點顯示 **881 名總用戶／872 名活躍用戶**；Cloudflare 已在該服務網站前放置釣魚警告。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/poison-claude-sells-discounted-claude.html)

📌 **CoreBreak：AWS、Google 與 Vercel 的 AI 代理框架漏洞，工具可在模型未運作時被觸發**
在 Black Hat USA 2026 發表的 **CoreBreak**（Stealth 研究團隊）涵蓋 Amazon Bedrock AgentCore 的 InvokeHarness API、Google Agent Development Kit（Python）與 Vercel AI SDK 的 Codex／OpenCode harness 套件漏洞——不受信任或偽造的指令可在 **模型完全未運作** 的情況下觸發代理工具，系統提示、內容過濾器與模型層級護欄都來不及介入。AWS 已修補受管服務，Google 發布 ADK 2.5.0，Vercel 修補 @ai-sdk/harness-codex 1.0.29 與 @ai-sdk/harness-opencode 1.0.28。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/aws-google-and-vercel-patch-agent-flaws.html)

---

## OPSWAT 可以怎麼幫上忙

今日新聞中有兩起屬於檔案型供應鏈攻擊：**ChainDrop** NPM 蠕蟲（惡意套件透過合法依賴鏈進入企業）與 **ClickFix** macOS 攻擊（假軟體下載與 Terminal 指令誘騙，最終散布竊密程式）。MetaDefender 的 **多引擎掃描**（一次同時執行 30+ 防毒引擎）搭配 **Content Disarm and Reconstruction（CDR，內容淨化與重建）**，可在下載的套件、安裝檔與文件到達端點前中和其中的惡意程式碼；MetaDefender Software Supply Chain Security 則可在建置與導入階段驗證軟體工件。
