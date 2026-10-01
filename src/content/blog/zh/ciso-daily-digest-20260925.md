---
title: "CISO 每日摘要：北韓駭客從 Bitget 加密交易所竊取 3.516 億美元 (20260925)"
description: "北韓威脅行為者攻破 Bitget 交易所後端，竊取 3.516 億美元加密貨幣；Roundcube CVE-2026-48842 SQL 注入遭主動利用；烏克蘭網站被劫持用於 ClickFix 惡意軟體引誘；OnePlus OxygenOS 本機提升權限；預留位址被武器化用於供應鏈攻擊。"
pubDate: 2026-09-25
tags: [CISO, 每日摘要, 資安, 北韓, Bitget, 加密貨幣竊取, 後端-洩露, DPRK-駭客, TraderTraitor, Roundcube, SQL-注入, ClickFix, Psychedelic-竊取程式, OnePlus, 特權-提升, 供應鏈, 預留-域名, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## 北韓駭客從 Bitget 加密交易所竊取 3.516 億美元，攻陷後端基礎設施

加密貨幣交易所 **Bitget 揭露疑似北韓威脅行為者攻陷其後端錢包基礎設施**，並竊取 **3.516 億美元加密貨幣資產** 跨越多條區塊鏈。此攻擊於 2026 年 9 月 24 日 18:31 UTC 被偵測到，涉及從 Bitget 熱錢包與暖錢包的未授權轉帳，其中包含 ETH、XRP、BNB、AVAX、USDT 與 USDC 跨越以太坊、XRP Ledger、Arbitrum、Avalanche、Optimism、BSC 與 Base 網路。**Bitget 的冷錢包與大多數平臺資產保持安全**，客戶帳戶餘額精確無誤；但提取功能已暫時暫停，**Mandiant 與 SlowMist 進行的全面資安審查** 正在進行。根據 **Bitget CEO Gracy Chen** 所述，攻擊者攻陷 **錢包基礎設施內的關鍵後端系統、偽造交易資料，並觸發授權程序** 以移動資金。**不再有進一步未授權轉帳可能**，攻擊被限制於熱錢包段。根據 **IP 行為模式與鏈上分析**，Bitget 把攻擊歸因於已知的北韓駭客組織；**TRM Labs 與 Elliptic 已識別與先前 DPRK 歸因駭客用來洗錢的錢包的重疊**，包括 2025 年 Bybit 漏洞（15 億美元）與 KelpDAO LayerZero 橋樑竊取（2.92 億美元）。若確認，**2026 年將達 10.4 億美元北韓加密貨幣竊取**——僅次於 2025 年 16.8 億美元的第二大年份，表明對加密貨幣生態系統攻擊的規模與頻率升級。

### 為何這重塑了金融機構的加密貨幣風險管理

- **後端基礎設施現在是主要攻擊面。** 與帳號被盜或金鑰竊取不同，Bitget 攻擊攻陷了內部錢包授權系統——表明攻擊者正從面向客戶的向量轉向內部操作基礎設施，其中單一被攻陷系統可解鎖數百萬美元的價值。
- **冷儲存保證只有在熱錢包規模恰當時才有意義。** Bitget 冷錢包「未受影響」的聲明是正確的但也令人沮喪；交易所的熱錢包（設計用於操作流動性）被完全耗盡。加密貨幣交易所必須大幅降低熱錢包餘額，並對大額轉帳改用硬體支援的結算。
- **鏈上法醫學暴露洗錢機制。** TRM Labs 與 Elliptic 對錢包與先前 DPRK 攻擊的重疊識別展示攻擊者跨事件重複使用洗錢基礎設施。金融機構與區塊鏈平臺現在可追蹤這些重疊並即時凍結位址。
- **2026 年竊取的金額在短短 9 個月內已接近 2025 年的年度總額。** 此加速表明攻擊能力改進、目標防禦成熟度降低，或是對手優先級轉向更高價值目標。北韓的加密貨幣竊取計畫現在是該政權的主要收入來源。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/09/bitget-says-suspected-north-korean.html)）

---

## 本週活躍威脅

📌 **Roundcube Webmail CVE-2026-48842：未驗證 SQL 注入遭主動利用**
**加拿大網路安全中心已警告 CVE-2026-48842**，此為 Roundcube Webmail 1.6.x（1.6.16 前版本）與 1.7.x（1.7.1 前版本）中的未驗證 SQL 注入，正在被主動利用。該漏洞源於 virtuser_query 外掛中的 **preg_replace() 反斜杠逃脫繞過**，讓未驗證攻擊者能注入任意 SQL 語句到 Roundcube 的資料庫後端。成功利用可暴露 **郵件帳號憑證與儲存的訊息**。Roundcube 修補程式在 2026 年 5 月發布（1.6.16 與 1.7.1 版本），但 **Shadowserver 基金會資料顯示超過 52.3 萬個 Roundcube 執行個體暴露於網際網路**，至少 10 個在 2026 年 9 月 23 日被標記為易受攻擊。此高曝露度結合主動利用使 Roundcube 成為威脅行為者竊取敏感電子郵件通訊的吸引目標。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/roundcube-pre-auth-sql-injection-flaw.html)

📌 **烏克蘭商業網站遭劫持用於虛假 Cloudflare ClickFix 引誘以傳遞 Psychedelic 竊取程式**
一場主動的 ClickFix 活動已 **攻陷合法烏克蘭商業網站** 以注入 **虛假 Cloudflare 驗證頁面** 誘騙訪客下載先前未知的資訊竊取程式稱為 **Psychedelic**。攻擊鏈使用 **msiexec.exe 指令來取得 Windows MSI 安裝程式** 以傳遞竊取程式惡意軟體。Psychedelic 設計用來 **竊取瀏覽器密碼、帳號權杖與加密貨幣錢包資料**、建立排程工作持久化，並聯繫命令與控制伺服器以取得額外任務。**Arctic Wolf Labs 識別 557 次檢視、426 次點擊，與 79 次完整事件跨越 32 國**，烏克蘭占 446 次檢視、351 次點擊與 71 次完整事件。被攻陷的烏克蘭網站包括髮療診所、模型製造商、專科書商、心理設施、工具零售商與汽車零售商。**俄文品牌與實作成品暗示俄文操作者** 重點鎖定烏克蘭使用者。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/hacked-ukrainian-sites-serve-fake.html)

📌 **未修補 OnePlus 漏洞允許任何已安裝應用程式獲得 Root 存取，無需特殊權限**
研究員 **Rasmus Moorats 已展示執行最新 OxygenOS 的 OnePlus 15 中的兩個未修補漏洞可被串聯** 以授予任何使用者安裝的惡意應用程式 root 存取——**無需請求特殊權限且不向使用者顯示提示**。攻擊鏈利用兩個 OnePlus 服務：**AtlasService**，以 root 身份執行並接受來自任何應用的未驗證呼叫，與 **olc2**，硬體輔助工具，如果呼叫者已是 root 就執行 shell 指令。第一個漏洞在受限制的 dumpstate 區域內提供 root 存取；第二個漏洞隨後提升至完整系統層級 Linux 特權，包括核心程式碼載入。**OnePlus 在 2026 年 5 月確認兩個漏洞** 並設定揭露權的獨佔權，警告 Moorats 若未經許可發佈可能的法律責任。當 OnePlus 未能在 9 月發布修補時，Moorats 無論如何在 2026 年 9 月 24 日發佈。**未分配 CVE，也不存在 OnePlus 公告**——留下所有受影響 OxygenOS 16 設備（包括 OnePlus 12 Pro 與更舊型號）無修補保護。OnePlus 也表示相同漏洞影響 OPPO 設備，雖然未指定哪些型號。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/unpatched-oneplus-flaws-let-installed.html)

📌 **預留域名 third-party[.]com 被武器化用於跨越 1,700+ 儲存庫的 ClickFix 供應鏈攻擊**
**未保留的預留位址域名「third-party[.]com」**——通常在文件、測試程式碼與技能組態中用作通用範例端點——**已被攻擊者註冊，現在對 Windows 瀏覽器提供 ClickFix 引誘** 而對 macOS 與其他使用者顯示無害誘餌。GitHub 上的搜尋顯示該域名 **在超過 1,700 個公開儲存庫中被引用**，包括 AI 代理技能與 MCP 伺服器文件將其列為範例端點。與 IANA 保留的預留位址（如「example[.]com」）不同，third-party[.]com 從未被保護，使其可被佔據與濫用。Windows 使用者訪問該頁面看到 **虛假 Cloudflare 驗證會毒化剪貼簿並指示他們貼上 PowerShell 指令到「執行」對話框**，取得並執行遠端負載。**Manifold Security 也識別 13 個額外未保護預留位址** 提供惡意內容，其中「your-domain[.]com」與「yoursite[.]com」顯示虛假 MacOS Security Center 嚇阻軟體與偽造投資計畫。曝露規模——數十萬個 GitHub 檔與數百個代理技能引用這些域名——意味著攻擊者獲得對供應鏈程式碼執行路徑的存取，而無任何靜態安全檢查偵測被攻陷。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/placeholder-third-partycom-referenced.html)

📌 **ClickFix 傳遞 RemotePanel 與 BoundSiphon：用於持久存取與憑證竊取的模組化 .NET 惡意軟體**
**Blackpoint Cyber 識別兩個先前未知的 .NET 惡意軟體元件透過 ClickFix 一起傳遞**：**RemotePanel**，持久遠端存取平臺，與 **BoundSiphon**，憑證與加密貨幣竊取程式。**RemotePanel 透過冒充 Windows Time 服務建立持久化**，給予操作者廣泛控制包括 PowerShell、檔案與程序管理、螢幕存取、模組化隱藏虛擬網路運算（hVNC）與組群管理。**BoundSiphon 主要在記憶體中執行** 並鎖定瀏覽器憑證、工作階段、加密貨幣錢包、密碼管理員資料與選定文件——包括受 **Chromium App-Bound 加密** 保護的機密。RemotePanel 使用 **BNB Smart Chain 合約解決其 C2 伺服器**，允許威脅行為者無需重建惡意軟體即可輪換基礎設施。攻擊序列以 ClickFix 指令開始，使用 PowerShell 發起多階段鏈，濫用 **CMSTPLUA COM 物件繞過使用者帳號控制 (UAC)** 以獲得提升的管理員權限而無提示。程序設定廣泛的 Microsoft Defender 排除並使用不同方法取得兩個負載。Blackpoint 恢復工品暗示 **可能的俄文開發環境**。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/application-security/salesbleed-exploits-salesforce-agents-slack-phishing)

📌 **定義 2026 年夏季的 3 項網路威脅：勒索軟體韌性、供應鏈目標與 AI 整合**
**Dark Reading 的 Arielle Waldman** 已發佈關於 2026 年夏季三項定義網路威脅的回顧：(1) **勒索軟體組織轉向持續勒索模式** 而非一次性加密與贖金，維持對受害者網路的持久存取數月以提取最大價值；(2) **供應鏈攻擊成為接觸財富 500 公司的主要向量**，攻擊者鎖定更小的整合商與廠商而非大型企業直接；與 (3) **AI 工具被整合到惡意軟體與攻擊基礎設施** 以增加逃避、規模化與適應性，多個威脅行為者現在使用 LLM 進行程式碼生成與決策。夏季期間也看到對關鍵基礎設施、醫療與政府部門的勒索軟體上升，支付要求達 1,000 多萬美元每個事件。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/3-cyber-threats-defined-summer-2026)

---

## OPSWAT 可以怎麼幫上忙

本週的威脅強調 **攻擊者如何混合供應鏈程式碼腐敗與面向使用者的惡意軟體傳遞及後端基礎設施被攻陷**。**Roundcube SQL 注入** 展示未修補的郵件伺服器何時成為更廣泛網路基礎設施的樞紐。**ClickFix 鏈傳遞 Psychedelic 與 RemotePanel** 顯示看似合法的警告如何可以引導持久存取。**預留位址域名武器化** 揭露程式碼儲存庫與 AI 代理技能可無意中當作惡意軟體分發向量，當它們引用攻擊者控制的域名時。**MetaDefender Multi-Scan** 用 30 多個引擎檢驗進入電子郵件、API 與上傳的檔案與壓縮檔案內容，以補捉已知惡意軟體簽名與行為異常。**MetaDefender CDR** 在文件、壓縮檔與指令碼到達使用者、開發者或 CI/CD runner 前剝除主動內容——移除 ClickFix 與其他剪貼簿劫持攻擊的負載傳遞機制。**MetaDefender Kiosk** 在實體邊界檢查檔案，防止惡意軟體到達評估與提交供應鏈程式碼的終端與開發工作站。