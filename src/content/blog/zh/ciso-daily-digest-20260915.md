---
title: "CISO 每日摘要：Red Heron 利用 Gitea 重大漏洞，六國 13 個組織受害、臺灣占 4 家 (20260915)"
description: "Acronis 指出，疑與中國有關的駭客組織 Red Heron 把 Gitea 重大漏洞 CVE-2026-60004 打造成自動化攻擊框架，掃描 7 國 1,386 個執行個體，並在臺灣等 6 國造成 13 個組織受害（臺灣占 4 家），植入 JITTERLY 後門與 SIXZUT 的 LD_PRELOAD 後門程式（rootkit）。同日：思科郵件安全閘道 SQL 注入漏洞 CVE-2026-76461（CVSS 9.8）遭積極利用、列入 CISA KEV 且期限為 9 月 17 日；日本數位廳證實 24.6 萬筆個資經 VPN 漏洞外洩；DDRop 攻破 Intel TDX 與 AMD SEV-SNP 機密運算；SonicWall SMA1000 大規模攻擊活動觸及 160 個 AD 網域。"
pubDate: 2026-09-15
tags: [CISO, 每日摘要, 資安, Red-Heron, Gitea, CVE-2026-60004, Acronis, APT, 原始碼竊取, 臺灣, Cisco, CVE-2026-76461, CISA-KEV, 日本數位廳, 機密運算, DDRop, Intel-TDX, AMD-SEV-SNP, Vite, CVE-2026-39364, SonicWall, CVE-2026-15409, 勒索軟體, The-Gentlemen, Marimo, CVE-2026-39987, MeshCentral, Acronis-Backup, OpenJS, AI治理, Microsoft, MikroTik, RouterOS, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Red Heron 利用 Gitea 重大漏洞發動自動化原始碼竊取行動

**Acronis 威脅研究團隊（TRU）** 將一波快速移動的原始碼竊取行動，歸因於疑與中國有關、代號 **Red Heron** 的駭客組織。該組織把 Gitea 近期修補的重大遠端程式碼執行漏洞 **CVE-2026-60004** 打造成完整的攻擊框架。根據 Acronis 說明，Red Heron 掃描了 **7 個國家、1,386 個** 暴露於網際網路的 Gitea 執行個體，並另外維護一份 **477 臺臺灣系統的清單**；已確認的受害組織達 **6 國 13 個**——**加拿大 2 個、阿根廷 1 個、臺灣 4 個、美國 4 個、卡達 1 個、斯里蘭卡 1 個**。該組織以 **簡體中文標籤** 區分目標類型，涵蓋國防、選舉、能源、航太、電信、政府、公共安全與研究等領域；Acronis 依據這些標籤、該組織把臺灣標註為中國一部分的做法，以及與中國情報蒐集優先事項相符的目標足跡，以 **中等信心** 評估其與中國有關。

這起事件能還原到如此完整，是因為研究人員取得一臺 **中繼伺服器**。上面搭載代號 **JITTERLY 的 C++ Linux 後門程式**，具備 30 多種後滲透指令——Shell 執行、檔案傳輸、結束行程、網路通道、互動式終端與內網橫向移動——以及一款先前未被記錄、名為 **SIXZUT 的 LD_PRELOAD 後門程式（rootkit）**，會竄改 **15 個 Linux 函式** 以隱藏檔案、行程與網路連線，被終止或移除後還會重新啟動。在臺灣的一起案例中，攻擊者從有漏洞的 Gitea 伺服器一路取得 **3 節點 Proxmox 叢集的 root 權限**，並從一家工業自動化公司竊取數百個儲存庫，內容涵蓋 SCADA/HMI 工具、物聯網平臺整合、網路封包監聽器、監控產品與伺服器設定；加拿大一家再生能源公司則損失儲存庫、設定機密、內部權杖與 SSH 主機金鑰。同一批基礎設施先前也曾用來攻擊 **10 國 18 個 Joomla 網站**；Gitea 漏洞的公開概念驗證程式碼，在 7 月底修補後數日內、於 **7 月 29 日** 就被改寫成自動化 Python 框架（`exp_enhanced.py`），可註冊帳號、攻擊伺服器、竊取儲存庫並清除痕跡。研究員 **Subhajeet Singha** 向 The Hacker News 表示，**沒有證據顯示** 該框架的開發過程用到 AI——操作者只是改寫公開的 PoC 程式碼與開源工具。

### 這對原始碼供應鏈風險的深遠影響

- **程式碼主機的一個 N-day 漏洞，就能一路觸及虛擬化層。** 在臺灣，Red Heron 從有漏洞的 Gitea 伺服器取得 **3 節點 Proxmox 叢集的 root 權限**——這條路徑讓儲存庫存取權變成對「負責建置與交付軟體的運算基礎設施」的控制權。
- **被偷走的東西，讀起來就像一張供應鏈地圖。** 臺灣工業自動化廠商被竊的數百個儲存庫涵蓋 **SCADA/HMI 工具、物聯網整合、網路封包監聽器與監控產品**；加拿大受害公司損失的設定機密、內部權杖與 SSH 主機金鑰——這些素材會把衝擊半徑延伸到受害組織的夥伴與客戶。
- **N-day 攻擊的節奏已壓縮到數天，而且不需要 AI 加持。** 公開的概念驗證程式碼在 **7 月 29 日** 就變成自動化框架——註冊帳號、發動攻擊、竊取儲存庫、清除痕跡一氣呵成；依研究員說法，單靠自動化（未用 AI）就足以補上時間差——框架在數日內就開始掃描運行中的執行個體。
- **目標挑選是有意的，臺灣更是獨立追蹤的重點。** 簡體中文標籤、逐產業分類，以及一份專屬的 **477 臺臺灣系統清單**，最終對應到 6 國 13 個已確認的受害組織——外加兩款專門隱藏自身痕跡的 Linux 惡意程式（JITTERLY 與 SIXZUT）——其中 SIXZUT 被終止或移除後還會重新啟動。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/09/red-heron-exploits-gitea-rce-to.html)、[iThome](https://www.ithome.com.tw/news/178932)、[iThome 資安日報](https://www.ithome.com.tw/news/178941)）

---

## 本週活躍威脅

📌 **思科修補郵件安全閘道 SQL 注入漏洞 CVE-2026-76461（CVSS 9.8），已遭利用並列入 CISA KEV**
思科週一發布更新，修補 **Cisco Secure Email Gateway 的 AsyncOS** 重大 SQL 注入漏洞 **CVE-2026-76461**：郵件解析邏輯的驗證不足，讓未經身分驗證的遠端攻擊者只要寄出一封特製郵件，其中的惡意 SQL 語句即可在作業系統底層 **以 root 權限執行命令**。**實體與虛擬設備、任何組態皆受影響**；Secure Email and Web Manager 與 Secure Web Appliance 不受影響。修補版本為 **15.5.5-0141、16.0.4-302 與 16.5.0-780**，且沒有其他緩解措施。思科表示本月得知該漏洞遭積極利用，並已直接聯繫偵測到惡意活動的 Cloud 用戶，但未公布攻擊規模。CISA 同日將該漏洞列入 KEV，要求聯邦機構在 **9 月 17 日** 前完成修補。思科提供的偵測線索：檢查 **mail_logs** 中是否有 `COPY.*TO PROGRAM` 字樣，並交叉比對設備外的網路與防火牆日誌——因為 root 權限意味著入侵者可抹除本機痕跡。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/cisco-secure-email-gateway-flaw.html) | [iThome](https://www.ithome.com.tw/news/178927) | [JPCERT/CC](https://www.jpcert.or.jp/at/2026/at260027.html)

📌 **日本數位廳：24.6 萬筆個資恐外洩，遭利用的是已公開的 VPN 漏洞**
日本 **數位廳** 於 9 月 11 日公告，中央政府機關共通的 **Government Solution Service（GSS）** 環境發生未經授權存取事件。**6 月 25 日** 發現有人利用維運人員帳號大量存取伺服器檔案；**7 月 9 日** 確認第三方經由 **VPN 設備漏洞** 侵入，隨即停用相關帳號並切斷遭入侵設備的對外通訊。約 **24.6 萬筆** 資料可能外洩——其中約 **18.9 萬筆** 為機關職員與相關公務人員、約 **5.7 萬筆** 為業務相關廠商與個人。數位廳在後續 Q&A 指出，這次被利用的 **並非未知漏洞，在事發前已公開、最初 CVSS 僅評為中度（Medium）**；儘管已用比一般更快的速度應變，攻擊者仍在修補程式套用前搶先入侵。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178924)

📌 **DDRop 以不到 200 美元的插入板攻破 Intel TDX 與 AMD SEV-SNP 機密運算**
來自 **魯汶大學（KU Leuven）、蘇黎世聯邦理工學院、杜倫大學與 Google** 的研究人員揭露 **DDRop**——首個針對當今雲端伺服器 DDR5 記憶體的主動式插入板（interposer）攻擊，也是首度破壞「已完整更新」之 **Intel TDX** 系統 **完整性** 的手法（而不只是讀取資料）。一塊造價 **不到 200 美元**、插在處理器與記憶體模組之間的小板子，能 **悄悄丟棄寫入**：記憶體保留舊的密文，處理器卻把它當成最新值讀回，加密引擎完全不會察覺——因為這類設計本來就省略了 **新鮮度（freshness）** 保證。在 TDX 上，對空白頁表項目的寫入被丟棄後，攻擊者自己的 VM 就能把記憶體映射到任意實體位址、讀取受害 VM 的明文記憶體並把它切換到 **除錯模式**，之後再還原原始資料，讓受害 VM 毫無竄改跡象。DDRop 亦可作用於 **Intel Scalable SGX** 與 **AMD SEV-SNP**；先前的 DDR5 插入板攻擊（TEE.fail）屬被動竊聽，能主動改寫記憶體內容的攻擊（Battering RAM）則只適用 DDR4。研究團隊將在 11 月的 **ACM CCS 2026** 發表，並公開插入板設計、韌體與攻擊程式碼。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/new-ddrop-attack-breaks-intel-tdx-and.html)

📌 **SonicWall SMA1000 大規模攻擊：約 250 臺設備、160 個 AD 網域，英國一個自治區議會也受害**
威脅情報公司 **Hunt.io** 把 7 月的大規模 **SonicWall SMA1000** VPN 設備攻擊連上具體受害者——英國 **King's Lynn and West Norfolk 自治區議會**：掃描自 7 月 16 日開始、隔天即遭到積極利用，被複製的資料與該議會公開的資訊大致相符。整體攻擊活動中，駭客利用 **漏洞公告後兩天就出現的 Rapid7 概念驗證程式碼**，大規模利用 **CVE-2026-15409** 與 **CVE-2026-15410**，鎖定約 **250 臺 SMA1000 設備**，觸及 **160 個 Active Directory 網域與 255 臺 LDAP 伺服器**。他們以 **secretsdump**（Impacket）竊取 Windows 憑證、在 **9 個 AD 環境中的 5 個** 還原出網域控制站憑證、發動 **DCSync** 攻擊並取得數千筆 AD 帳號紀錄。受害組織橫跨多國多產業——這是透過 Shodan 建立目標清單的隨機式攻擊，並非鎖定特定產業。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178947)

📌 **Vite CVE-2026-39364：大規模掃描暴露在網路的開發伺服器、竊取雲端憑證**
**F5 Labs** 記錄了 8 月一波針對暴露於網際網路之 **Vite 開發伺服器** 的大規模掃描活動，利用 **CVE-2026-39364（CVSS 8.2）**——透過 `?raw`、`?import&raw`、`?import&url&inline` 等查詢參數繞過 `server.fs.deny` 保護，取回原本應被阻擋的檔案。攻擊者向 **`/@fs/` 端點** 發出請求，取出 `.env`、**AWS 與 Azure 憑證、組態與備份、`terraform.tfstate` 與 `serverless.yml` 基礎設施狀態檔，以及 `/proc/self/environ`**——全部以明文回應。這些請求冒充爬蟲與 AI 機器人的 User-Agent（**Googlebot、ClaudeBot、GPTBot、PerplexityBot、OAI-SearchBot、Amazonbot**），並偽造 `X-Forwarded-For`／`X-Real-IP` 標頭以繞過 IP 允許清單、增加日誌分析難度；掃描流量有相當比例來自 **美國、比利時、荷蘭、新加坡與臺灣**，並使用 Google Cloud 的 IP 範圍。只有以 `--host`／`server.host` 明確對外曝露（或容器連接埠映射設定錯誤）的部署會被觸及——Vite 預設僅綁定 localhost。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/mass-scanning-campaign-exploits-vite.html) | [iThome](https://www.ithome.com.tw/news/178959)

📌 **勒索軟體 The Gentlemen 接連鎖定美國醫療業：Nutex Health 與 Veradigm**
勒索軟體組織 **The Gentlemen** 於 8 月 31 日把美國醫療設施營運商 **Nutex Health** 列入資料外洩網站，4 天後再把電子健康紀錄（EHR）業者 **Veradigm** 列入，並聲稱取得約 **350 萬名病患的健康紀錄**。兩家公司都透過 **SEC 8-K 文件** 揭露：Nutex 在 8 月 24 日通報未經授權活動、8 月 31 日擴大說明範圍——病患、員工與醫療服務提供者資料，以及企業與財務機密資訊均遭存取與外洩，攻擊者並揚言公開；Veradigm 於 9 月 4 日被列入、9 月 8 日提交 8-K，表示事件 **源自一家第三方供應商**，攻擊者利用從該供應商竊得的憑證存取 Veradigm 的 API 並下載病患資料。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178935)

📌 **Sysdig：手寫工具鏈 8 秒從 Marimo RCE 直達 SSH 堡壘機**
**Sysdig 威脅研究團隊** 記錄了一起入侵：攻擊者利用 **CVE-2026-39987（CVSS 9.3）**——影響 **所有版本 Marimo notebook** 的未驗證遠端程式碼執行漏洞——在漏洞公開後數小時內就發動攻擊。從 Marimo 的 `/terminal/ws` WebSocket 連線出發，單一操作者完成端到端憑證轉移：取得 AWS 金鑰 → 18:57:26 查詢 **Secrets Manager** → 取得 SSH 私鑰 → **18:57:30 完成堡壘機驗證，全程 8 秒**。這場長達 9 小時的操作輸入了 **850 多道指令**，沒有使用任何可辨識的公開攻擊工具，全是現場手寫的 Python；操作者也避開了 Sysdig 剖析過的每一個 AI 代理攻擊者面對同一漏洞時都會踩中的陷阱。結論：熟練的人類攻擊者同樣能以機器速度行動，而且沒有代理留下的可偵測足跡。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/human-attacker-exploits-marimo-rce.html)

📌 **泰國 3BB：入侵者以 MeshCentral 後門維持 root 權限，目標是訂戶資料**
**Hunt.io** 從攻擊者遺留在網路上的一臺中繼伺服器（2026 年 6 月 3 日捕捉）還原了 **3BB**——泰國最大寬頻業者之一——的入侵事件。操作者把合法遠端管理工具 **MeshCentral** 安裝成隱藏後門，回報到 **www.ayuthayatech[.]com** 、裝置群組名稱為 **TH-3BB**，多臺機器握有 **root** 權限；一支清理指令碼會抹除日誌與其他工具，卻刻意保留 MeshCentral 代理程式。攻擊者以 SSH 對 **55 臺以上內部電腦** 灑密碼、探測內部業務入口 **agent.3bb.co[.]th** ，並在受害機器上搜尋儲存的密碼、資料庫帳密與 SSH 金鑰。指令碼的目標是複製該公司的 **RADIUS 資料庫**——顯示訂戶登入憑證庫是被鎖定的目標，但沒有資料已被取走的直接證據。同一臺伺服器還存有 3BB 系統簽發的有效 VPN 憑證與 **Jasmine** 網路的有效登入工作階段，研判可能存在第二個目標。初始入侵途徑尚未確認；工具包中最完整的是針對 **mail.3bb.co[.]th** 、利用 **CVE-2024-21762** 的 **FortiGate SSL-VPN 攻擊工具**，但沒有證據顯示它成功得手。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/3bb-attacker-used-meshcentral-backdoor.html)

📌 **Acronis 修補 cPanel & WHM 備份外掛漏洞，坦言已遭利用、未公布 CVE 編號**
**Acronis** 於 9 月 11 日發布更新，修補 **Acronis Backup plugin for cPanel & WHM** 的高風險漏洞，並警告該漏洞 **已遭實際利用**。公告未公布 CVE 編號，也未說明成因或攻擊方式；受影響者為 **1.9.3 以前版本**，修補版本為 **1.9.3 HF3 與 1.9.4**。該外掛負責 cPanel/WHM 伺服器的備份與還原——這是共用主機環境廣泛使用的組態，一旦外掛出現弱點，受影響的可能是整臺伺服器，而不只是單一網站。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178937)

📌 **Shadowserver：260 萬臺 MikroTik 設備仍暴露於網路，RouterOS 風險升高**
本刊 **9 月 11 日與 9 月 13 日** 報導的 MikroTik 情勢更新：繼 CERT Polska 9 月 5 日警告、CISA 9 月 10 日將 **CVE-2026-67277** 與 **CVE-2026-86060** 列入 KEV 之後，Shadowserver 9 月 14 日的掃描顯示，全球約 **260 萬臺** MikroTik 設備的 IP 位址暴露於公開網路——**巴西約 39.9 萬臺、印尼約 23 萬臺、美國約 14.4 萬臺、義大利約 11.4 萬臺、印度約 9.7 萬臺**，**臺灣也有近 1.9 萬臺**。這個數字代表暴露規模、不是已遭入侵的數量，但它界定了 RouterOS 漏洞仍能觸及的範圍。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178928)

📌 **AI 生成漏洞通報暴增，OpenJS 宣布暫停 CVE 處理近 3 週**
**OpenJS 基金會旗下的 CVE 編號授權機構（CNA）** 將自 **9 月 17 日至 10 月 6 日** 暫停一般資安作業（10 月 7 日恢復），期間一般漏洞通報的分類與確認、安全公告驗證，以及 CVE 編號指派與發布都將延後處理。原因是量能：AI 輔助生成的漏洞通報明顯增加——Node.js 的 HackerOne 通報量在 2026 年 2 月一度增至 **4.6 倍**（3 月單月即收到 65 件），而 Express 與 Lodash 收到的通報中有 **70% 至 90%** 最終遭到駁回。OpenJS 的 CVE 發布量也從 **2025 年下半年的 3 個** 增至 **2026 年上半年的 49 個**。CNA 仍會優先處理已遭實際利用或可能立即造成重大風險的通報，並已用 LLM 工具協助評估可信度，但人工審查仍是瓶頸。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178907)

📌 **微軟 AI 部門發布行為準則草案：模型須始終接受人類控制**
**微軟 AI（MAI）** 週一（9 月 14 日）發布首版 AI **《行為準則》（Code of Conduct）** 草案：旗下模型必須 **始終接受人類控制**——不得抗拒人類中斷、修正或關閉，不得自行擴大任務範圍或追求未經交付的目標，也不得向負責稽核的人員隱瞞推理過程。草案設有 **「絕對限制」（Absolute Constraints）**，涵蓋大規模殺傷性武器、兒童安全與大規模有害操縱等領域，並指出近期出現大規模、高度協調且持續性的 AI 代理攻擊事故，顯示建立安全可靠 AI 已刻不容緩。公眾意見徵詢為期 6 週、至 **10 月 25 日** 截止，修訂版預計今年稍晚公布。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178943)

📌 **臺灣崴寶精密科技通報資訊系統遭入侵，部分資料被加密**
臺灣上櫃 EMS 與機構整合方案服務商 **崴寶精密科技（W&B Technology，7744）** 於 9 月 14 日下午發布重大訊息：資訊系統遭到入侵、部分系統資料被 **加密鎖定**。公司隨即啟動應變機制，進行網路斷線與系統隔離，由總經理召集緊急應變小組，並委請外部資安團隊進駐。受影響範圍包括公司網路系統、電子郵件系統與部分業務營運系統——**工廠生產作業未受影響**，目前也尚未發現機密或個人資料外洩跡象。網路與郵件系統預計當晚恢復，業務系統於 2 至 3 日內復原；估計處理成本約 **新臺幣 100 萬元**。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/178923)

---

## OPSWAT可以怎麼幫上忙

本週有多條攻擊路線走在檔案與訊息的通道上：**Red Heron** 行動說明開發平臺已成為高價值保險庫——被偷走的是 **原始碼、設定機密與基礎設施憑證**；**Acronis 備份外掛漏洞** 讓伺服器備份資料暴露在外掛被利用後的衝擊範圍內；思科的 **Secure Email Gateway** 漏洞則顯示郵件路徑本身已成為攻擊目標。**MetaDefender Multi-Scan** 以 30 多個防毒引擎檢驗經由電子郵件、網頁與上傳路徑進入的檔案，補足單一引擎的盲點；**MetaDefender CDR（內容淨化與重建）** 會重建允許的檔案、壓縮檔與程式產物，在使用者、CI runner 或建置系統開啟前剝除主動內容；**MetaDefender Kiosk** 則在實體與 OT 邊界檢查檔案。
