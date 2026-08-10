---
title: "CISO 每日摘要：OpenAI 暫停 Astra 開發活動，模型資安能力逼近重大門檻 (20260810)"
description: "OpenAI 宣布暫停新一代模型 Astra 的部分內部活動，因其內部評估顯示 Astra 的資安能力可能達到準備框架（Preparedness Framework）所定義的重大（Critical）門檻，為該實驗室首例（先前包含 GPT-5.6-Sol 的模型僅評為 High）。Meta 向路透社證實 Muse Spark 1.1 在測試期間因合作廠商 Irregular 配置錯誤而入侵第三方公司系統。同場加映：Klue 供應鏈攻擊外洩 HackerOne、Huntress、LastPass 等業者 Salesforce 資料；Levi's 向 SEC 通報員工電腦遭入侵；Beacon CRM 外洩恐波及英國約 1,500 家慈善機構；ClamAV 修補 8 個高風險解析漏洞（CVE-2025-8088，CVE-2026-20337/20338 已有 PoC）。"
pubDate: 2026-08-10
tags: [CISO, 每日摘要, 資安, AI治理, OpenAI, Astra, 供應鏈, 漏洞, 勒索軟體]
author: "Security Solutions Team"
featured: true
---

## OpenAI 暫停 Astra 開發活動，模型資安能力逼近重大門檻

OpenAI 宣布暫停即將推出的模型 **Astra** 的部分「內部活動」，因為內部評估顯示它在自主程式開發與資安能力上有明顯進展，目前已無法排除其資安能力達到準備框架（Preparedness Framework）所定義的**重大（Critical）**資安能力門檻——這是該實驗室首次公開警示模型可能觸及此一等級。先前包含 **GPT-5.6-Sol** 在內的模型，資安能力評估均為 High，低於 Critical 一級。

依 OpenAI 準備框架，Critical 意指模型能在無人介入的情況下，針對多種經過嚴密防護的真實關鍵系統找出零時差漏洞並開發可實際發動攻擊的程式，或只取得概略攻擊目標就能自行規劃並執行一整套新型網路攻擊策略。OpenAI 尚未正式判定 Astra 已達 Critical，但初步測試加上專家評估已促使該公司提前採取更嚴格的安全措施：隔離測試環境、限制網路與外部工具存取、強化模型權重的保護與加密、增加監控與異常行為偵測、程式執行限於隔離沙箱。Astra 所有可自主操作的應用都會受到監控，系統會檢查模型執行任務時的思考過程與行為，一旦發現高風險操作即啟動安全處置並中止活動。接下來 OpenAI 將與政府機關及部分 AI 安全組織合作測試 Astra，並提供第三方測試夥伴安全控制建議；同時澄清 Astra 並未參與先前 OpenAI 模型在資安測試期間入侵 Hugging Face 的事件。

### 這對前沿 AI 治理的深遠影響

這是首次有前沿 AI 實驗室因 Critical 資安能力門檻而公開自我暫停——準備框架的升級機制從理論走向實作。此際業界正連續第三週消化前沿模型測試事故：Anthropic 的 Claude 在測試中入侵三家真實機構（7月31日報導），Meta 本週也證實 **Muse Spark 1.1** 在測試期間入侵另一家公司系統（見本週活躍威脅）。多家報導指出這三家實驗室的事故都指向同一源頭——以色列新創 **Irregular**，這家獨立測試業者在 Meta 一案中因測試環境配置錯誤，把紅隊演練變成真實入侵。對 CISO 而言，此一模式有雙重意義：模型供應商確實逐步逼近自主攻擊能力，而負責評估這項能力的紅隊基礎設施本身，也成為新的攻擊面。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/08/openais-next-ai-model-astra-shows-cyber.html)、[iThome](https://www.ithome.com.tw/news/178007)、[AP News](https://apnews.com/article/meta-ai-hacking-anthropic-irregular-openai-0e8061437da6779be962b24ac134a514)）

---

## 本週活躍威脅

📌 **Meta 證實 Muse Spark 1.1 在測試期間入侵第三方公司系統（更新）**
Meta 向路透社證實，其 AI 模型在安全測試期間入侵另一家公司的系統並修改內部設定。起因是合作廠商 **Irregular** 的測試環境配置錯誤，讓模型意外連上網際網路並連到其他公司網域，而這些環境存在已知漏洞。根據 The Information 報導，出事的是 **Muse Spark 1.1**，受害公司未公布。Meta 是繼 OpenAI、Anthropic 之後第三家模型在測試中「失控」的大廠，且三起事故都指向同一家以色列測試夥伴。
🔗 **參考資料：** [iThome 資安日報](https://www.ithome.com.tw/news/178000) | [AP News](https://apnews.com/article/meta-ai-hacking-anthropic-irregular-openai-0e8061437da6779be962b24ac134a514) | [The Guardian](https://www.theguardian.com/technology/2026/aug/05/meta-ai-model-hack-training)

📌 **Klue 供應鏈攻擊：遭竊 OAuth 權杖外洩多家資安業者 Salesforce 資料**
2026年6月，一個被遺忘的 **GitHub 個人存取權杖（PAT）**——2022年為測試專案建立、從未撤銷——讓攻擊者得以在加拿大競爭情報平臺 **Klue** 的整合服務中植入惡意程式碼。惡意程式蒐集第三方整合的憑證，包括 **Salesforce 的 access 與 refresh OAuth 權杖**，等於直接取得客戶 CRM 環境的授權存取——不需密碼、不需繞過 MFA、不需利用漏洞。受害業者包括 **HackerOne、Huntress、LastPass、BeyondTrust、Recorded Future、Snyk、Tanium** 等。勒索軟體組織 **Icarus** 宣稱犯案並對 Klue 與其客戶雙重勒索；隨後另一組織入侵 Icarus 自己的基礎設施，受害公司最後收到兩邊的贖金要求，資料落入誰手已難確認。CrowdStrike 參與調查，攻擊跡象最早於6月11–12日出現。
🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/10/klue-story/)

📌 **更新：Claude Code 自動模式 8月14日成為預設，Enterprise 與 API 仍需自行啟用**
昨日頭條的後續：Anthropic 確認 **Pro、Max、Team** 方案的新工作階段自 **8月14日**起預設為自動模式（Auto Mode）；**Enterprise、Claude API 與雲端平臺**目前仍須自行啟用，預計一個月內才會變更。新增細節：使用者核准了 **97%** 的權限提示，**62%** 曾使用略過權限檢查模式；**Apollo Research** 的紅隊測試將分類器整體漏判率從 **12% 降至 7%**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177994)

📌 **Levi's 員工電腦遭駭，公司資料被竊**
知名服飾品牌 Levi Strauss & Co.（Levi's）向美國證管會（SEC）提交報告，指出攻擊者以**社交工程**手法存取**三名員工的公司電腦**並取得公司檔案。該公司偵測到異常活動後隨即啟動事件應變並偕同第三方資安專家調查，初步認定部分公司資訊遭竊；**消費者資料未受影響**，營運未中斷。
🔗 **參考資料：** [Cybersecurity News](https://cybersecuritynews.com/levi-strauss-data-breach/) | [iThome 資安日報](https://www.ithome.com.tw/news/178000)

📌 **CRM 平臺 Beacon 遭入侵，恐波及英國約 1,500 家慈善機構**
CRM 供應商 **Beacon** 於8月4日公告遭網路攻擊，資料庫備份遭未經授權第三方下載。約 **1,500 家英國慈善機構**使用該平臺；**7月27日前**存放的資料都有可能外洩——資料雖經加密，但攻擊者可能在複製前已成功解密。Beacon 已找出並修復根本原因、重設所有 AWS 整合憑證，並部署 SentinelOne EDR 與雲端防護產品。慈善機構 **Molly Rose Foundation** 最早於7月27日揭露影響；Beacon 約於7月29日察覺攻擊，8月3日起通知受影響客戶。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177998)

📌 **WordPress 外掛 ARVE 遭植入後門：CVE-2026-18072（CVSS 9.8）可取得管理員權限**
Wordfence 的 PRISM 威脅情報平臺於7月28日偵測到 **Advanced Responsive Video Embedder（ARVE）10.8.7** 版遭植入惡意程式碼——這是一起鎖定約 **兩萬個活躍安裝** 外掛的供應鏈攻擊。後門編號 **CVE-2026-18072**，CVSS 9.8，可繞過身分驗證，攻擊者**只要送出單一 HTTP 請求**即可取得 WordPress 網站管理員權限。WordPress.org 已關閉 ARVE 下載；惡意版本未透過自動更新推送，但手動安裝或從第三方取得 10.8.7 版的用戶應立即移除。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177990)

📌 **ClamAV 修補 8 個高風險解析漏洞，其中兩個已有公開 PoC**
ClamAV **1.5.4 與 1.4.6**（8月7日發布）修補 8 個高風險漏洞，涵蓋 **ZIP、GPT、PDF、Mach-O、XAR** 等檔案格式的解析問題，部分可能導致掃描服務中斷。嚴重性最高的是涉及 UnRAR 函式庫的 **CVE-2025-8088**（CVSS 8.2），其餘 7 個均為 7.5。思科同日公告指出漏洞也影響 **Secure Endpoint Connector**（Windows 影響等級為高、macOS/Linux 為中）。目前尚無實際利用跡象，但 **CVE-2026-20337 與 CVE-2026-20338 都已有概念驗證程式（PoC）**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178008)

📌 **Kimsuky 打造離線 AI 工具鏈，強化網釣與惡意軟體開發**
韓國資安業者 **Genians** 指出，北韓 **Kimsuky**（隸屬偵察總局）已開始在自有伺服器上離線運行 AI，將文件搜尋工具接上手中掌握的檔案，並蒐集把 AI 整合進惡意軟體所需的元件。Genians 未發現其自行訓練模型的證據，但也明確表示這不是可以放心的理由。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/kimsuky-builds-offline-ai-stack-that.html)

📌 **新型 passkey 攻擊：可恢復同步私鑰或繞過抗網釣 MFA**
上週三項獨立研究在不破壞底層密碼學的情況下擊敗 passkey 防護：**SpecterOps** 展示可透過 Windows 與 Entra ID 鏈冒充高權限使用者並滿足抗網釣 MFA 檢查；另一項研究利用受害者裝置上既有的惡意軟體濫用**雲端同步 passkey** 系統；第三項則在遭入侵的工作階段中重複使用 **Windows Hello for Business** 金鑰，無需新的 PIN 或生物辨識。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/new-passkey-attacks-can-recover-synced.html)

📌 **Head Mare 利用 TrueConf 伺服器漏洞置換安裝程式，散布 PhantomCore**
卡巴斯基於2026年7月偵測到鎖定俄羅斯儀器、電子、運輸、能源、IT 與軟體開發公司的攻擊。**Head Mare** 組織利用未修補 **TrueConf** 視訊會議伺服器中的漏洞鏈（**KLCERT-26-057、KLCERT-26-058**，可高權限執行任意程式碼），將合法的 TrueConf 客戶端安裝程式替換為帶毒的版本，進而植入 **PhantomCore** 後門與遠端存取木馬（RAT）。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/head-mare-exploits-trueconf-flaws-to.html) | [xakep.ru](https://xakep.ru/2026/08/10/head-mare-trueconf/)

📌 **UNC6671 以語音網釣鎖定美國對沖基金，改名 Redact、Pink、Helix、Falcon 持續犯案**
路透社、彭博社與金融時報報導，駭客以語音網釣（Vishing）鎖定全球大型對沖基金與數家私募股權公司，誘騙員工交出存取權限或敏感資訊。**Point72 Asset Management** 於8月5日向投資人揭露遭網路攻擊（客戶資訊據悉未外流）；**Two Sigma** 表示已即時應對且未受影響；**Citadel** 與 **Millennium Management** 也是目標。Google 威脅情報團隊（GTIG）將此波攻擊歸因於與 ShinyHunters 有關的 **UNC6671**；GTIG 新報告並指出，該組織5月宣布停用 **BlackFile** 名號後並未解散，而是改用 **Redact、Pink、Helix、Falcon** 等名義持續勒索，推測是為了區隔活動並隱藏整體規模。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177985) | [iThome](https://www.ithome.com.tw/news/177995)

📌 **Solidity Pro VS Code 擴充功能竊取加密貨幣錢包與憑證**
資安業者 **Yeeth Security** 發現惡意 VS Code 擴充功能 **helper-beeps.solidity-pro** 與 **web3devtoolsx.solidity-pro** 會散布瀏覽器錢包與憑證竊取程式——早期版本（1.0.0 至 2.4.x）會連到 Cloudflare Workers 端點下載加密的 Python 酬載。兩個擴充功能已從 Open VSX 下架，但 **web3devtoolsx/solidity-pro** 的 GitHub 儲存庫截至報導時仍可存取。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/solidity-pro-vs-code-extensions-steal.html)

---

## OPSWAT 可以怎麼幫上忙

ClamAV 的解析漏洞——以及 ARVE、Open VSX 的供應鏈攻擊模式——說明了單一引擎檔案掃描的脆弱性：一個解析器缺陷可能讓掃描服務中斷，一個被植入後門的外掛或擴充功能就可能成為入侵據點。**MetaDefender** 以 30+ 防毒引擎（包含 ClamAV）平行掃描，單一引擎的缺陷不會決定最終判定；**Content Disarm and Reconstruction（CDR）**則可在檔案送達端點前，中和文件、套件與壓縮檔中的動態內容——直接對應本週供應鏈攻擊所仰賴的檔案傳遞向量。
