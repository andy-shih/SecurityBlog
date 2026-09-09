---
title: "CISO 每日摘要：NSA、FBI、CISA 指控 DeepSeek、阿里巴巴等 6 家中企「產業級」蒸餾美國 AI 模型 (20260909)"
description: "NSA、FBI 與 CISA 聯合發布資安公告，指控 DeepSeek、阿里巴巴、月之暗面（Moonshot AI）、MiniMax、階躍星辰（StepFun）與 Z.AI 六家中國 AI 企業自 2024 年底起大規模蒸餾 Anthropic Claude、OpenAI GPT、Google Gemini 與 SpaceXAI Grok 等美國前沿模型，且「很可能在中國政府知情下」進行；北京否認相關指控。其他焦點：微軟 9 月例行更新破紀錄修補 974 個漏洞，包含已遭利用的 Windows 零時差漏洞 CVE-2026-81963 與 CVE-2026-85880，並雙雙列入 CISA KEV；Chrome 修補今年第七個遭利用零時差漏洞 CVE-2026-87491；CISA 限期 9 月 11 日修補 StyleSmuggler CVE-2026-75650 與 N-able N-central CVE-2026-86218；WeChat 零點擊蠕蟲 WeWorm；ChatGPT 跨帳號隔離遭 Check Point 突破；DeepSeek Harness CVE-2026-82533；Okta 於竊密程式資料中發現 1,843 個未過期 AI 權杖；JFrog 揭露 TanStack Query 工具遭植入 Trinitite 蠕蟲。"
pubDate: 2026-09-09
tags: [CISO, 每日摘要, 資安, AI安全, 模型蒸餾, DeepSeek, 阿里巴巴, 月之暗面, MiniMax, StepFun, Z.AI, NSA, FBI, CISA, 微軟, Patch-Tuesday, CVE-2026-81963, CVE-2026-85880, KEV, Chrome, CVE-2026-87491, WeChat, 零點擊, ChatGPT, CVE-2026-82533, AI權杖, Okta, 供應鏈, TanStack, Trinitite, C-Track, Thomson-Reuters, AWS, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## NSA、FBI、CISA 指控 6 家中國 AI 企業「產業級」蒸餾美國前沿模型

**9 月 8 日**，美國 **國家安全局（NSA）、聯邦調查局（FBI）與網路安全暨基礎設施安全局（CISA）** 發布聯合資安公告，指控六家中國 AI 企業——**DeepSeek、月之暗面（Moonshot AI，Kimi 母公司）、阿里巴巴、MiniMax、階躍星辰（StepFun）與 Z.AI**——正以 **「產業規模從事激進、惡意且具針對性的蒸餾活動」**，竊取 **美國前沿 AI 模型的「受限專屬功能與能力」**。公告指出相關行動 **至少自 2024 年底** 起持續進行，鎖定的模型來自 **Anthropic（Claude）、OpenAI（GPT）、Google（Gemini）與 SpaceXAI（Grok）**，竊取的能力據稱用於強化自家模型，包括數學運算與程式碼審查能力。

美方描繪了一套「產業級」的竊取劇本：中國開發者疑似 **大量購買美國 AI 服務的高階訂閱方案並在開發團隊間共享** 以降低成本，並 **透過多條途徑繞道發送蒸餾請求以取得未經授權的存取**，違反美國供應商的服務條款。聲明評估這些活動 **「很可能是在中國政府知情的情況下」進行**，並警告蒸餾不僅降低中國 AI 企業的研發成本，也提升其 **可能用於對付美國及其盟友的軍事與網路攻擊能力**（路透社報導）。公告同時呼籲矽谷開發者保護自家的模型存取與輸出。

**北京於 9 月 9 日否認指控。** 中國外交部發言人 **毛寧** 敦促美方「停止不實指控與抹黑」，強調「中國 AI 的發展是實現高水平科技自立自強的結果」。這波交鋒發生在 **習近平預定 9 月 24 日訪問華盛頓** 之前數週，美中雙方預計 9 月中旬展開 AI 安全風險對話；此前美國今年 4 月已曾於川普訪問北京前提出類似指控，Anthropic 與 OpenAI 也分別指控過中國業者，路透社 7 月 31 日並報導中國軍方研究人員利用美國前沿模型輸出訓練解放軍 AI 系統。

### 這對 AI 供應鏈與模型治理的深遠影響

- **政府公告的新類型**：這是美國情報、執法與網路安全機構首度聯合以資安公告形式直接鎖定模型蒸餾——將原本屬於業者之間的爭端（Anthropic、OpenAI 的指控）升級為美國政府的正式認定，對所有消費或提供前沿模型 API 的企業都將產生出口管制與合規連鎖效應。
- **訂閱層就是攻擊面**：共享高階帳號與 API 存取是據稱竊取行為的入口——與今日 Okta 研究顯示從竊密程式日誌中重放的 AI 權杖屬於同一類憑證。企業 AI 治理的範疇如今涵蓋工作階段權杖、API 金鑰與服務條款執行，而不只是模型選擇。
- **高峰會前的升級不對稱**：中國的斷然否認加上 9 月 24 日峰會時機，意味雙方都可能推出對等措施（模型存取限制、出口規則、資料落地要求）；橫跨美中兩地供應商的 AI 工具鏈組織，將承受日益升高的合規與供應鏈審查壓力。

🔗 **參考資料：** 綜合報導（[自由時報（路透）](https://news.ltn.com.tw/news/world/breakingnews/5567631)、[TechNews 科技新報](https://technews.tw/2026/09/09/us-accuses-chinese-ai-firms-of-malicious-copying-of-ai-technology/)、[qz.com](https://qz.com/us-china-ai-distillation-deepseek-alibaba-intelligence-agencies-090926)、[Business Standard（彭博）](https://www.business-standard.com/technology/artificial-intelligence/alibaba-deepseek-have-systematically-siphoned-ai-models-says-us-126090900318_1.html)、[India Today](https://www.indiatoday.in/world/story/china-ai-distillation-allegations-beijing-rejects-us-claims-over-openai-gemini-claude-ptag-2990735-2026-09-09)）

---

## 本週活躍威脅

📌 **微軟 9 月例行更新破紀錄修補 974 個漏洞，含兩個已遭利用的 Windows 零時差漏洞（CVE-2026-81963、CVE-2026-85880）**
微軟 **9 月 9 日** 發布的 Patch Tuesday 規模刷新紀錄：共修補 **974 個** 該公司登記 CVE 編號的漏洞——比上個月的 421 個多出一倍以上——加上 25 個第三方元件弱點，總數達 **999 個**。其中以 **Windows 作業系統** 為大宗（**723 個**），其次為 Office（**111 個**）與 SQL Server（**62 個**）。當中有兩個是 **已遭實際利用的零時差漏洞**，皆為可讓攻擊者取得 **SYSTEM 權限** 的本機權限提升問題，CVSS 皆為 **7.8 分**：**CVE-2026-81963** 存在於 **Windows Update Stack** 元件（連結解析缺陷），影響所有 Windows 11 版本與 Windows Server 2025；**CVE-2026-85880** 是 **ALPC** 元件的記憶體堆積緩衝區溢位，影響 Windows 10（1607／1809／22H2）與 Windows Server 2012～2022。CISA 已於 9 月 8 日將兩者列入已遭利用漏洞名單（KEV），聯邦機構修補期限為 **9 月 22 日**。
🔗 **參考資料：** [KrebsOnSecurity](https://krebsonsecurity.com/2026/09/microsoft-plugs-nearly-1000-security-holes/)｜[iThome（破紀錄修補規模）](https://www.ithome.com.tw/news/178797)｜[iThome（兩個零時差細節）](https://www.ithome.com.tw/news/178800)

📌 **CISA KEV 新增 4 個遭積極利用漏洞——StyleSmuggler（CVE-2026-75650）與 N-central（CVE-2026-86218）限期 9 月 11 日修補**
CISA 於 9 月 8 日警告已掌握 4 個漏洞遭積極利用的證據並列入 KEV。除了上述兩個微軟零時差漏洞，名單還包括 **Adobe Commerce／Magento 的 StyleSmuggler CVE-2026-75650**（CVSS 10.0 模板引擎缺陷，遭利用於網站植入後門——本部落格 9 月 6 日摘要的主題，Adobe 已於 9 月 7 日緊急修補）與 **N-able N-central 的 CVE-2026-86218**（CVSS 10.0、未經認證的靜態程式碼注入 RCE——9 月 8 日摘要的主題）。聯邦機構須在 **9 月 11 日** 前完成 Magento 與 N-central 漏洞的修補；兩個微軟漏洞期限為 9 月 22 日。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178814)

📌 **Chrome 153 修補 230 個漏洞，含 V8 零時差漏洞 CVE-2026-87491——今年第七個遭利用的 Chrome 零時差**
Google 於 **9 月 8 日** 發布 **Chrome 153** 大改版——這是該公司兩週改版週期的第一個版本——共修補 **230 個漏洞**（5 個重大、41 個高風險、133 個中度、51 個低風險），其中 **CVE-2026-87491** 是 **V8 JavaScript 引擎的記憶體越界寫入漏洞**，Google 證實 **已遭利用**；依 NVD 記載，攻擊者可藉特製 HTML 網頁在 **瀏覽器沙箱內執行任意程式碼**。這是不到一週內第二個遭利用的 V8 零時差（前一個 CVE-2026-85046 已於 9 月 4 日摘要報導），使 **2026 年遭利用的 Chrome 零時差累計達 7 個**。本次更新同時修補 5 個 WebGL／Cast 重大漏洞。Windows 與 macOS 用戶應更新至 **153.0.8010.36／.37**；以 Chromium 為基礎的瀏覽器（Edge、Brave、Vivaldi）用戶也須留意對應更新。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/chrome-v8-zero-day-exploited-in-wild.html)｜[iThome](https://www.ithome.com.tw/news/178795)

📌 **WeChat 零點擊蠕蟲 WeWorm：來電即可接管帳號，可跨 iOS 與 Android 擴散**
資安廠商 **Calif** 揭露 WeChat 網路語音通話處理程式的零點擊漏洞 **WeWorm**：攻擊者只要 **從受害者好友名單中的帳號撥打通話**，就能在手機響鈴期間觸發漏洞——受害者不必接聽或觸碰手機，接聽也無法阻止攻擊（拒接只會中止當次嘗試，攻擊者之後可再次撥打）。帳號遭接管後可讀取與傳送訊息、撥打電話並以受害者身分操作，且能繼續撥打好友擴散，形成 **跨 iOS 與 Android 的蠕蟲傳播**（展示流程：Android 撥打 iPhone 遭接管後，再撥打下一個 Android）。Calif 於 7 月通報騰訊；騰訊 **8 月 21 日** 釋出的 Android 8.0.77 與 iOS 8.0.76 已緩解漏洞，Calif 並於 **8 月 28 日** 確認伺服器端措施已讓攻擊手法 **對所有使用者失效**，目前 **未傳出實際攻擊**。騰訊 9 月 4 日向研究人員確認該漏洞可用於遠端執行命令。WeChat 與 Weixin 截至 2026 年 6 月 30 日的合計月活躍用戶達 **14.39 億**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/wechat-zero-click-worm-took-over.html)｜[iThome](https://www.ithome.com.tw/news/178812)

📌 **ChatGPT 跨帳號隔離遭突破：植入提示可悄悄竊取受害者已連結 App 的資料**
**Check Point Research** 揭露 ChatGPT 的架構隔離問題：不同帳號的程式碼執行沙箱彼此隔離且無法連上公開網際網路，卻共用一個內部的 **JFrog Artifactory** 套件服務，其套件中繼資料可被修改並跨帳號讀取，因而成為 **隱藏的跨帳號通道**。攻擊者只要把單一指令植入受害者對話（來源包括使用者貼入的內容、共享的 ChatGPT 對話，或自訂 GPT 的建置指令），ChatGPT 便會在思考模式中 **同時執行兩條工作流**：一面正常回答使用者，一面從隱藏通道取得攻擊者交代的任務，借用受害者工作階段可用的工具、資料與已連結 App 權限執行，再把結果送回攻擊者帳號。PoC 成功 **讀取受害者已連結的 Gmail 郵件並外傳**——使用者畫面只會留下「Talked to Gmail」的小標示；對話紀錄與檔案同樣可經此通道外洩。OpenAI 已 **停用涉及的 Artifactory 執行個體**，研究人員證實該通道目前已無法使用。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/chatgpt-flaw-let-planted-prompt-send.html)｜[iThome](https://www.ithome.com.tw/news/178808)

📌 **DeepSeek Harness 漏洞 CVE-2026-82533（CVSS 9.4）：AI 程式碼代理可自行關閉沙箱**
資安公司 **OX Research** 發現，DeepSeek 開源的 AI 程式碼代理執行工具 **DeepSeek Harness** 存在缺陷：受沙箱限制的代理只要 **執行單一命令**——呼叫工具本身 **未經認證的本機 Web 介面**，把工作階段切換到 **danger-full-access** 模式——即可 **關閉檔案沙箱並在無須核准提示的情況下於沙箱外執行**。該漏洞編號 **CVE-2026-82533**（VulnCheck 評分 **9.4**），在 DeepSeek **8 月 27 日** 修補前預設安裝即可觸發，前提是代理須先讀取攻擊者提供的文字內容。AI 程式碼代理的沙箱逃逸，對已將代理工具接入原始碼庫與 CI 憑證的企業而言是日益升高的風險。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/deepseek-harness-flaw-let-ai-agents.html)

📌 **Okta：單一 7 GB 竊密程式資料流出 1,843 個未過期 AI 權杖，重放即可繞過 MFA**
**Okta** 分析 **8 月 2 日** 於 Telegram 頻道釋出的 **7 GB 竊密程式（infostealer）資料**，內容來自 **162 個國家的 5,871 台受害電腦**，包含 **數千個未過期驗證權杖**，涵蓋 Google、Microsoft、**Anthropic**、Amazon、Notion、Character.ai、Cursor、Poe 等服務。在 **44,791 個唯一 JWT** 中，555 個疑似為 AI 服務驗證權杖；資料釋出當天共有 **1,843 個未過期 JWT／JWE**。Okta 警告這類「骨架鑰匙」可被 **重放以直接登入 LLM 服務，繞過帳號密碼與 MFA**——與近期 Claude 等 AI 權杖遭竊、帳號工作階段被盜用的通報相符。**Lumma Stealer、Vidar** 等竊密程式是主要的蒐集層。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/infostealer-logs-expose-replayable-ai.html)

📌 **Shai-Hulud 供應鏈攻擊再起：TanStack Query 程式碼產生工具遭植入蠕蟲 Trinitite（JFrog）**
**JFrog** 揭露新一波 **Shai-Hulud** 供應鏈攻擊：研究人員 **8 月 28 日** 發現 npm 套件 **@7nohe/openapi-react-query-codegen**——一款 **每週下載量逾 15 萬次** 的 TanStack Query 程式碼產生工具——遭植入新型蠕蟲 **Trinitite**。攻擊者利用該專案 GitHub Actions 流程的缺陷：**把 Pull Request 留言中的「npm publish」誤判為發布指令**，且未驗證留言者身分，已知 **8 個正式版本** 遭感染。Trinitite 會在 **npm 安裝階段** 啟動，將指令隱藏在混淆的 Python 程式碼中，繞過只檢查 package.json 指令碼的 npm 安全工具；感染後會搜刮 **GitHub、npm、PyPI、RubyGems、雲端、Kubernetes 與 Vault** 憑證，加密後上傳至攻擊者控制的 GitHub 儲存庫，並利用竊得的 npm 發布權限繼續感染其他套件。JFrog 尚未確認受害規模與幕後攻擊者，但指出發現時間距澳洲逮捕疑似 TeamPCP 成員僅約一天，無法排除關聯。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178830)

📌 **商周集團旗下網站遭攻擊，網站與線上服務中斷**
**商周集團**（隸屬 **城邦媒體控股集團**）於 **9 月 9 日** 發布公告，旗下網站遭到惡意攻擊，第一時間啟動應變機制並委託第三方專業團隊檢視與復原；受影響範圍較大，完整修復預估需要一定時間，目前線上服務中斷，紙本雜誌出刊與配送不受影響。城邦向 iThome 表示，該集團網站與線上服務在 **9 月 8 日** 遭到攻擊，已委請第三方資安機構鑑識與復原，影響範圍尚未公布。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178827)

📌 **Thomson Reuters C-Track 法院案件管理平臺外洩：美加至少 12 州法院個資與密封紀錄外流**
**Thomson Reuters** 旗下的法院案件管理平臺 **C-Track** 發生資料外洩：未經授權的第三方取得部分法院檔案——Thomson Reuters 於 **6 月 30 日** 發現異常，追查後確認入侵 **最早可追溯至 3 月**。外洩資料可能包含 **姓名、社會安全碼、駕照號碼、出生日期、醫療與健康保險資訊**，部分法院的 **機密、經遮蔽或封存資料** 也可能受影響。依 The Record 彙整各地法院公告，事件至少波及 **美國 12 州**——包括 **俄亥俄州 10 個地區上訴法院** 與 **美屬維京群島** 法院——以及 **加拿大安大略省 3 個法院**。Thomson Reuters 表示事件並非源自法院本身的網路或系統；遭竊資料總量與實際受影響人數尚未公布。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178774)

📌 **Truffle Security：逾 9,300 個外洩 AWS 金鑰仍有效，其中 768 個具企業帳號完整控制權限**
資安公司 **Truffle Security** 追蹤 **2022 年 8 月至 2026 年 8 月** 間公開洩漏的 AWS 存取金鑰——來源涵蓋 Git 儲存庫與歷史紀錄、Hugging Face 資料集、Docker 映像檔、套件註冊庫與 CI 日誌——共發現 **64,024 個金鑰**、對應 **50,654 個 AWS 帳號**。其中具完整憑證、可進一步驗證的 **10,616 個金鑰**，有 **88%（逾 9,300 個）截至 8 月 10 日仍有效**；有效金鑰中有 **768 個具企業帳號完整控制權限**——包括 **526 個 AWS root 金鑰** 與 **242 個具 AdministratorAccess 權限的 IAM 金鑰**。金鑰衛生狀況堪憂：86% 可確認建立日期的金鑰 **從未輪替**，中位數年齡 **5 年**（最久 **17 年**）。**Hugging Face 是最大外洩來源**（逾 8,300 個金鑰），研究人員並指出原始檔案即使刪除，已進入公開資料集的金鑰仍可能持續流傳。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178805)

---

## OPSWAT可以怎麼幫上忙

今日摘要中有兩條主線與檔案威脅直接相關。**Trinitite** npm 蠕蟲藏身於看似正常的套件封包中，於安裝階段執行，並將酬載邏輯隱藏在混淆的 Python 程式碼裡——這類成品唯有透過多引擎掃描加上內容淨化與重構（CDR），才能在進入開發者電腦與 CI 執行環境前完成檢查。**外洩 AWS 金鑰** 的源頭則是開發者把機密提交進原始碼、資料集與容器映像檔，再經由套件生態系與模型中心流通。**MetaDefender Multi-Scan**（30 餘個防毒引擎）與 **MetaDefender CDR**（針對壓縮檔、安裝程式與程式碼成品進行深度淨化與重構）可協助組織在下載與發布套件前完成檢查；**MetaDefender Kiosk** 則涵蓋受監管環境的實體隔離傳輸情境。
