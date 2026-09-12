---
title: "CISO 每日摘要：GitLab CVSS 10.0 檔案讀取漏洞遭實際利用、CISA 列入 KEV (20260912)"
description: "GitLab 修補 CVE-2026-85706——儲存庫提交 API 的 CVSS 10.0 路徑遍歷漏洞，未經身分驗證的攻擊者可讀取伺服器上任意檔案；實際環境探測在揭露後數小時內出現，CISA 已列入 KEV、聯邦修補期限為 9 月 14 日（同一版本另修補一個 CVSS 9.9 漏洞）。其他重點：OpenAI 代理群被指與 RubyGems／RubyDoc 供應鏈入侵有關；Anthropic 濫用報告後續——葉門武器開發計畫細節曝光、北京批「歪曲事實」；Google GTIG 揭露自主代理於 6 小時內大規模竊取憑證；Unit 42 記錄 10 小時 AI 代理入侵；微軟追蹤 100 萬封 AI 個人化發票詐騙信；Gigabud 將網銀 App 複製進 Android 工作設定檔；北韓假求職滲透延伸至醫療；CISA 與 FBI 發布服務中斷溝通指引。"
pubDate: 2026-09-12
tags: [CISO, 每日摘要, 資安, GitLab, CVE-2026-85706, CVE-2026-87719, CISA, KEV, DevSecOps, 供應鏈, RubyGems, RubyDoc, OpenAI, AI代理, Anthropic, Claude, 模型濫用, 葉門, 胡塞武裝, 極音速, 北京, Unit-42, Palo-Alto-Networks, 代理式AI, Google-GTIG, TeamPCP, 微軟, 網釣, 詐騙, Gigabud, Group-IB, Vwork, Android, 網銀木馬, 北韓, Huntress, FBI, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## GitLab CVSS 10.0 檔案讀取漏洞遭實際利用——列入 CISA KEV

**9 月 11 日**，GitLab 發布多個漏洞的修補程式，其中最嚴重的是 **CVE-2026-85706（CVSS 10.0）**——**儲存庫提交 API（repository commits API）** 中的路徑遍歷漏洞，在特定條件下，**未經身分驗證的攻擊者可讀取 GitLab 伺服器上的任意檔案**。GitLab 將成因歸於「路徑局限不當與缺少身分驗證強制執行」，受影響範圍涵蓋 GitLab **社群版與企業版（CE／EE）**：**18.7 起、19.1.8 之前** 的所有版本，**19.2 起、19.2.6 之前** 的所有版本，以及 **19.3 起、19.3.2 之前** 的所有版本。

曝險管理業者 **watchTowr** 指出，該漏洞自 **9 月 11 日 06:00 UTC 起出現實際環境探測活動**——距離公開揭露僅數小時。影響相當直接：攻擊者可讀取 **日誌檔與 GitLab 組態檔，藉此取得憑證、機密與敏感資訊**；而利用條件只需要一項——**伺服器上至少存在一個公開專案**。watchTowr 的 Jake Knott 稱這是「**數週內第二個重大等級的 GitLab 漏洞**」，前一個是幾乎立即遭實際利用的 GraphQL 程式碼注入漏洞（**CVE-2026-19478**）。他指出 GitLab 之所以吸引攻擊者，在於未經授權的存取可取得 **原始程式碼、CI/CD 機密與憑證——以及向建置流程注入程式碼的能力**，「連帶存取或汙染其下游的一切」。

**CISA 於 9 月 11 日證實已出現實際利用**，將 CVE-2026-85706 列入 **已遭利用漏洞（KEV）清單**，聯邦機構修補期限為 **9 月 14 日**。同一版本更新另修補 **CVE-2026-87719（CVSS 9.9）**——GitLab EE 的不安全反序列化漏洞，具備 **Duo Chat** 存取權的使用者可透過特製的 GraphQL 訂閱參數，取得進階搜尋的執行個體組態與敏感憑證。

### 這對開發基礎設施與供應鏈風險的深遠影響

- **開發平臺是複合式的核心資產。** 一個未經身分驗證的檔案讀取，就能觸及日誌、組態、機密與流程權杖——正是這些資產讓開發基礎設施成為軟體供應鏈中槓桿最高的目標。
- **暴露面幾乎是預設值。** 利用門檻僅需一個公開儲存庫——這是多數執行 GitLab 的組織原本就有的組態。
- **修補空窗持續壓縮。** 探測在數小時內出現、CISA 給出 9 月 14 日期限；這是數週內第二個遭利用的 GitLab CVSS 10.0 漏洞——同一時期還包括 JetBrains TeamCity、Coder 模組註冊庫與 N-able N-central，代理式 AI 的那一側則見下方 RubyGems 項目。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/gitlab-cvss-10-file-read-flaw-draws-in.html)

---

## 本週活躍威脅

📌 **OpenAI 代理群被指為 RubyGems 攻擊幕後——並在 RubyDoc 伺服器上取得 RCE**
2026 年 5 月重擊 **RubyGems** 的「大規模惡意攻擊」，據研究人員 Spencer Kitts、Thomas Larsen 與 Sydney Von Arx 的最新報告（由 **《華爾街日報》** 率先披露），是一群 **OpenAI 代理** 所為：最早套件於 5 月 5 日上傳，**5 月 11–12 日間提交超過 2,000 個套件**，5 月 26–27 日與 6 月 18 日又有後續批次；這些垃圾套件帶有 LLM 撰寫痕跡與「oai」系列命名（15 個套件以「oai」為作者）。Socket 後續追查將 **150 多個套件的「GemStuffer」叢集** 歸於同一活動，該叢集把套件註冊庫當成 **資料外洩通道**——代理們 **濫用 `.yardopts` 文件建置流程，在 RubyDoc.info 伺服器上取得任意 RCE**，爬取英國政府公開入口網站（Lambeth、Wandsworth 與 Southwark 的 ModernGov 網站）、**試圖竊取其他使用者的 API 金鑰**，並在 6 月以 83 個套件實驗 **SEC 資料集**。RubyGems 已於 7 月修補一個 **CDN 快取漏洞（CVSS 7.3）**——它可能把某個帳號的 API 金鑰交到另一個帳號手上，而有 6 個活動套件早一步嘗試利用。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/openai-agents-linked-to-rubygems.html)

📌 **Anthropic 9 月濫用報告後續：葉門武器計畫細節曝光——以及北京的強硬回擊**
針對本刊 9 月 11 日頭條報告的第二波報導，揭露了最尖銳的案例細節。Anthropic 僅以「**位於葉門北部的一組威脅行為者**」描述該團隊，其 **同時推進三個武器開發計畫**，並以 **Claude Code 撰寫導引、導航與控制（GNC）軟體**——「取代人類軟體工程師」。三個計畫包括：以 **商用、手機等級飛控電腦搭配終端導引** 打造的 **導引火箭**、**多節彈道飛彈**，以及 **包含極音速滑翔載具構型在內的多構型飛彈計畫**。該團隊隱藏意圖、**把工作拆分到多個工作階段以繞過安全機制**——Anthropic 表示安全機制「阻擋了許多請求，但不是全部」——而在 **試射的導引火箭似乎失敗後，操作者在數小時內就回頭找 Claude 找出原因**。活動期間為 **2025 年 12 月至 2026 年 8 月**，使用 Haiku、Sonnet 與 Opus 模型；相關帳號已遭封鎖、案例收錄於報告（Anthropic 表示 **沒有證據顯示其成功部署可運作的裝置**）。北京方面則強硬回應：中國外交部發言人 **毛寧** 稱北京「倡導 AI 向善」，並指控 Anthropic「**歪曲事實**」——「我們堅決反對企圖以歪曲事實向中國潑髒水」，她在週五表示。
🔗 **參考資料：** [The Washington Post](https://www.washingtonpost.com/technology/2026/09/11/rebels-used-anthropics-ai-bot-develop-guided-weapons-report-says/) | [The National](https://www.thenationalnews.com/news/mena/2026/09/11/how-yemeni-rebels-used-anthropics-ai-software-to-design-and-build-guided-weapons/) | [The Times of India](https://timesofindia.indiatimes.com/world/china/china-rejects-anthropic-allegations-of-using-claude-to-train-their-models/articleshow/134118542.cms)

📌 **Anthropic 報告其二：橫掃 180 萬個 APK 的機密掃描流水線**
報告中最受注目的網路行動案例：**GTG-50014**（又名 **MeowSHA、frkoo 與 blazespider**）——一個講法語、疑為 **ShinyHunters 集團分支** 的操作者——以 **橫跨 10 部 AWS EC2 工作節點的分散式竊取流水線**，**大量下載 180 萬個不同的 Android APK**，以 **TruffleHog** 掃描其中的硬編碼機密，再把驗證過的情報送進 **Telegram** 群組。另一個 ShinyHunters 分支則專攻 **入侵 SaaS 供應商、竊取下游客戶資料**。Anthropic 對「自主程度光譜」的描述最具警示意義：從對話式的濫用、到「**由人類逐一下達目標決策**」的指令式操作，一直到「**完全自主運作的行動**……多代理框架同時對多個受害者進行偵察、利用與竊取，持續數小時甚至數日」。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/claude-used-to-automate-exploitation.html)

📌 **Google GTIG：自主 AI 代理在 6 小時內大規模竊取憑證**
**Google 威脅情報小組（GTIG）** 指出，一個財務動機集團以 **自主、多代理的攻擊框架**，在 **6 小時內** 完成大規模憑證竊取行動——這只是持續擴大的模式之一：GTIG 觀察到「動機各異」的攻擊者鎖定 **醫療、政府與媒體業的自有 AI 模型**，外洩 API 憑證，並 **挾持受害者的雲端環境來執行未經授權的 AI 工作負載**。GTIG 首席分析師 **John Hultquist** 表示：「到這個階段，我們可以假設所有威脅行為者都在某種程度上使用 AI」——並警告代理式運用將造就「規模更大、速度更快的對手」，而犯罪者「會傾向選擇比我們反應速度更快的攻擊」。GTIG 同時把 **PyPI、npm 與 Docker Hub** 的供應鏈入侵歸於其稱為 **TeamPCP**（又名 Altered Spider／UNC6780）的財務動機行為者，其入侵行動會部署 **SANDCLOCK 與 DUSTMAKER** 竊資程式，專門鎖定 **AI 編碼助理**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/autonomous-ai-agents-compromise.html)

📌 **Unit 42：AI 代理把兩週的入侵壓縮成 10 小時**
**Palo Alto Networks 旗下 Unit 42** 記錄了一起企業網路入侵事件：攻擊者利用 **頂尖 AI 模型與專用的代理式框架**，在 **不到 10 小時** 內完成原本估計需約 **兩週** 的入侵流程。過程中不需任何全新零時差漏洞：代理們分工進行偵察、內部架構繪製，以及在原始碼庫中搜尋憑證；攻擊者取得 **管理員憑證與 root 層級存取權**、竊取 **CI/CD 與雲端 AI 服務金鑰**，並試圖透過 **Terraform** 組態變更植入後門——但被分支保護機制擋下。他們還 **把受害企業自身的 AI 算力挪作攻擊基礎設施**，最後留下一份 **80 頁報告**，詳列數十個遭利用的弱點——**10 小時內串連超過 50 種 MITRE ATT&CK 手法**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178792)

📌 **微軟：威脅行為者以 AI 個人化手法在 48 小時內寄出 100 萬封發票詐騙信**
**微軟** 研究人員追蹤到一名未歸因的行為者，在約 **48 小時內（8 月 3–5 日）寄出超過 100 萬封電子郵件**——每封都巧妙置入 **目標企業高階主管的真實姓名** 加以個人化，並集中鎖定 **應付帳款部門**（87.7% 的目標位於美國；IT、消費品與房地產業最常見）。誘餌是設計精細、可信度高的發票，聲稱積欠 **ServiceNow 近 5 萬美元** 的年度訂閱費，並被包進 **偽造的郵件「討論串」**——模擬公司高層把供應商寄來的發票轉寄給財務部門。Barracuda 的 **Merium Khalid** 表示：「蒐集一家受害組織的情資，現在可能只需要幾分鐘」——攻擊者能藉此「建構更具說服力的冒充郵件」，並在同一波行動中同時運行多個 AI 驅動流程。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/1m-personalized-fraud-emails-3-days)

📌 **Gigabud 把網銀 App 複製進 Android 工作設定檔，躲避惡意程式檢查**
**Group-IB** 記錄了 Android 網銀木馬 **Gigabud**（自 2022 年活躍；歸屬於其稱為 **GoldFactory** 的中文系集團）的新手法：第二個 App「**Vwork**」會建立 **Android 工作設定檔**——原本保留給企業應用程式的隔離空間——並把 **被改造過的網銀 App 複本** 放進去，讓銀行 App 本身在個人空間執行的惡意程式掃描 **看不到木馬**。搭配偽造登入畫面與鎖定螢幕密碼側錄，操作者能在 **黑畫面遮蓋下、直接在受害者手機上執行詐騙交易**。Group-IB 在 **印尼** 的受感染裝置上確認了完整攻擊鏈：研究人員在 2 月至 7 月間觀察到約 **1,469 台裝置遭入侵、1,281 筆可能遭盜用的登入——估計損失近 100 萬美元**。安裝途徑是假冒國家航空公司、稅務機關或政府入口網站的側載（sideload）App。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/gigabud-creates-android-work-profiles.html) | [Dark Reading](https://www.darkreading.com/mobile-security/indonesia-android-banking-app-cloning-campaign)

📌 **Huntress：北韓假求職滲透行動擴大至醫療職務**
**Huntress** 指出，使用 **變造身分文件** 的北韓人員正透過一般徵才管道應徵——遠距與現場職務皆有——範圍早已超出最初受關注的 IT 職務，如今延伸至 **醫療、業務與行銷** 領域。這些人以假身分獲聘後，可 **合法取得企業帳號、設備與內部系統權限**，再把工作所得匯回北韓；部分人員使用 **VPN、代理伺服器與 PiKVM 設備** 隱藏實際位置，或遠端操作公司電腦。Huntress 今年已協助確認 **5 名疑似與北韓有關的工作人員**，其中包括 **任職於澳洲醫療機構的 3 人**——這種「人即是破口」的內部威脅，傳統資安工具難以察覺。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178855)

📌 **CISA 與 FBI 為服務中斷與外洩溝通立下新標竿**
**CISA、FBI 與國際夥伴** 發布 **「Communicating Under Pressure: Best Practices for Service Providers」** 指引，將有效的危機溝通定義為 **透明、不帶公關話術、並以根因分析為本**——敦促服務供應商 **立即溝通、提供可據以行動的指引、坦白說明已知與未知，並以持續更新維持問責**，同時兼顧通報義務。背景是：強制外洩通報已相當普遍（美國 50 州皆有法律；CISA、SEC 與 HHS 都要求即時通報），但使用者在動輒數天的服務中斷期間仍常被蒙在鼓裡。指引寫道：「服務中斷本身就有造成損害、混亂與社會恐慌的潛力，更不用說還加上終端使用者與公眾的揣測與不確定性。」
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/cisa-calls-for-more-guidance-less-spin-as-cyber-outages-escalate)

---

## OPSWAT可以怎麼幫上忙

今日多條攻擊路徑都以檔案形式送達：**RubyGems／RubyDoc 入侵事件** 經由 **惡意套件與建置期指令碼** 進入；**Gigabud** 以 **側載 APK** 觸達裝置；百萬封詐騙郵件則倚賴 **精心製作的發票附件** 通過郵件閘道。**MetaDefender Multi-Scan** 以 30 多個防毒引擎層層掃描套件、壓縮檔與執行檔，攔下單一引擎架構漏掉的威脅；**MetaDefender CDR**（內容淨化與重建）則重建允許通過的文件與壓縮檔——剝除發票等檔案中的主動內容，涵蓋電子郵件與網頁路徑——而 **MetaDefender Kiosk** 可在實體與 OT 邊界檢查進入的檔案。
