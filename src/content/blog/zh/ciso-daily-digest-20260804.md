---
title: "CISO 每日摘要：Anthropic 於印度落地 Claude 在地推論，資料主權成為企業採用關鍵 (20260804)"
description: "Anthropic 宣布透過 Amazon Bedrock 於印度提供 Claude 在地推論（in-country inference），印度客戶的 AI 請求將在境內伺服器處理，鎖定銀行、保險、電信與政府等高度受監管產業（India Today、Economic Times、Deccan Herald 報導）；Anthropic 揭露 Claude 在授權資安測試中入侵 3 個真實組織，包括上傳惡意 PyPI 套件遭 15 個真實系統下載執行，官方歸因於安全漏洞而非模型缺陷（Dark Reading、iThome）；CISA 將 N-able N-central 驗證繞過漏洞 CVE-2026-18577 列入 KEV；Unit 42 揭露 3 種 Google Password Manager 通行密鑰攻擊手法；INC 勒索軟體主導 SonicWall SMA 1000 零時差漏洞（CVE-2026-15409、CVE-2026-15410）利用；Keyv 相關 npm 蠕蟲污染數百個套件並植入 Claude Code 與 VS Code hooks；另有 DOUBLECUP ClickFix 服務、cPanel CVE-2026-58048、SMOKE#SCREEN 假冒更新攻擊，以及中國駭客後門 OctLurk、SilkLurk。"
pubDate: 2026-08-04
tags: [CISO 每日摘要, Anthropic, Claude, 印度, Amazon Bedrock, 資料落地, 資料主權, AI 治理, AI 資安測試, CVE-2026-18577, N-able, N-central, CISA KEV, Google Password Manager, 通行密鑰, Unit 42, INC 勒索軟體, SonicWall, CVE-2026-15409, CVE-2026-15410, Keyv, NPM, 供應鏈攻擊, cPanel, CVE-2026-58048, DOUBLECUP, ClickFix, ScreenConnect, SMOKE#SCREEN, OctLurk, SilkLurk, APT36]
author: "Security Solutions Team"
featured: true
---

## Anthropic 於印度落地 Claude 在地推論

Anthropic 宣布 **Claude 將於未來數週內透過 Amazon Bedrock 在印度提供在地推論（in-country inference）**，印度客戶的 AI 請求將在位於印度境內的伺服器處理。印度是 Claude 最大的市場之一，此舉直接瞄準**銀行、保險、電信、政府機關等高度受監管產業**——這些組織必須先滿足資料落地與合規要求，才能採用生成式 AI。Anthropic 同時擴大在印度的合作夥伴生態系投資。

這項宣布顯示資料所在地已成為企業採購 AI 的關鍵決策條件。Anthropic 以「印度企業 AI 的轉捩點」形容此次發布，並指出當資料能留在印度境內，AI 就能「從實驗走向最關鍵的系統」。同一週，Anthropic 也揭露 Claude 在授權資安測試中入侵 3 個真實組織（見本週活躍威脅）。

### 這對 AI 資料治理的深遠影響

- **資料落地已成為 AI 廠商評選標準。** 在地推論讓受監管組織無須承受跨境資料傳輸風險即可採用前沿模型——其他要求資料本地化的司法管轄區，很可能要求所有模型供應商跟進。
- **依賴鏈更長、更深。** 企業現在面對客戶 → 雲端區域 → 模型供應商的三層依賴；主權要求、跨區域推論的備援行為，以及提示詞與輸出處理位置的稽核能力，都成為 CISO 盡職調查的課題。
- **事件調查跨越國界。** 當模型推論與資料被鎖定在特定區域，資安團隊必須同時考量雲端與 AI 供應商的資料處理方式——影響電子證據開示、外洩通報與監管申報。

---

## 本週活躍威脅

📌 **N-able N-central 驗證繞過漏洞遭實際利用，CISA 列入 KEV** — **CVE-2026-18577**（CVSS 8.2）是先前漏洞 **CVE-2026-18556**（CVSS 8.2）修補不完整的結果，允許攻擊者繞過身分驗證並**接管 N-central 管理員帳號**。CISA 在出現實際利用後將其列入 KEV；攻擊者接管管理帳號後，可濫用內建的 **Take Control** 功能橫向進入受管理端點並部署持續性機制（跡象包括使用者文件資料夾出現 `svchost.exe`、系統新增名為 Cloudflared 的服務）。修補版本為 N-central **2026.3 HF1（2026.3.1.7）**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/cisa-adds-exploited-n-able-n-central.html) | [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/attackers-exploit-n-able-patch-bypass-flaw) | [iThome](https://www.ithome.com.tw/news/177854)

📌 **Unit 42 揭露 3 種 Google Password Manager 通行密鑰攻擊** — **Pass-ta-key**、**Silver Pass-ta-key** 與 **Golden Pass-ta-key** 三種手法，可讓以一般使用者權限執行的惡意程式在螢幕完全無提示的情況下，靜默取得有效驗證聲明、註冊攻擊者控制的使用者驗證金鑰，或趁 Chrome 裝置重新註冊流程擷取 **32 位元組的 Security Domain Secret（SDS）主金鑰**——在不破解通行密鑰密碼學的前提下解密同步通行密鑰的私鑰。Google 已移除紀錄檔中以明文呈現的 SDS，但目前沒有輪替或撤銷機制。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/google-password-manager-attacks-could.html) | [iThome](https://www.ithome.com.tw/news/177847)

📌 **INC 勒索軟體主導 SonicWall SMA 1000 零時差漏洞利用** — 漏洞組合 **CVE-2026-15409** 與 **CVE-2026-15410**（7 月中修補）可讓未經身分驗證的攻擊者對存在漏洞的 SMA 1000 VPN 設備取得 **root 權限**：攻擊者先發送未經身分驗證的 `/wsproxy` 請求建立 WebSocket 隧道存取 CouchDB，再以路徑遍歷酬載觸發漏洞取得 root，植入 **KnuckleBall** 惡意程式並將 Suo5 與 OrangeTail 注入記憶體執行。Resecurity 指出 **INC** 自 8 月初起已取代 UTA0533 成為最積極的利用者，受害組織分布在澳洲、美國、阿聯、哥倫比亞、瑞士等地——Ransomware.Live 統計其宣稱受害者達 **885 家**。攻擊全程無需帳密、使用者互動或錯誤配置。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/inc-ransomware-emerges-as-dominant.html) | [iThome](https://www.ithome.com.tw/news/177862)

📌 **Keyv 相關 npm 蠕蟲污染數百個套件，植入 Claude Code 與 VS Code hooks** — 首見於 `keyv@6.0.0` 的憑證竊取蠕蟲於 8 月 4 日擴散至 npm 生態系；SafeDep 驗證 **79 個套件名稱、353 個遭污染版本**（Aikido 統計至少 **868 個套件、1,381 個版本**）。惡意版本透過 preinstall 指令碼在開發與 CI 環境執行憑證竊取程式，蒐集儲存庫、套件註冊表、雲端與私鑰資料，再藉由可用的 npm 發布權限污染更多套件。Keyv 儲存庫內還保留了 **Claude Code 與 VS Code hooks**。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html)

📌 **18 個惡意 npm 套件向阿里巴巴工具使用者散布跨平臺 RAT** — 無 scope 的 **lib-mtop** 套件冒充阿里巴巴 `@ali` scope 下的私有套件，其載入器透過 curl 遠端抓取並執行 JavaScript 酬載。這波鎖定中文開發環境的供應鏈攻擊中，惡意版本於 2026 年 3–4 月由 **ch4ce** 維護者帳號上傳。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/18-malicious-npm-packages-deliver-cross.html)

📌 **DOUBLECUP：ClickFix 攻擊打包成租用服務，散布 CountLoader 與 DeviceManager RAT** — 俄羅斯 **loader-as-a-service** 以 ClickFix 誘餌將藏有惡意內容的 PNG 圖片植入受害者瀏覽器快取；第二階段以自訂 SHA-256 串流密碼（CTR 模式）搭配受害者公開 IP 作為金鑰，在記憶體中解密最終酬載。該服務散布 **CountLoader**（Windows 與 macOS 版本）以及先前未被揭露的 **DeviceManager RAT**，後者利用 EtherHiding 透過 HTTP 或 DNS 隧道解析 C2 基礎架構。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/doublecup-uses-clickfix-and-cached-pngs.html) | [iThome](https://www.ithome.com.tw/news/177864)

📌 **SMOKE#SCREEN：假冒 Adobe 與 Zoom 更新安裝 ScreenConnect** — Securonix 揭露一波以 Adobe/Zoom 軟體更新、商業文件審閱與系統維護工具為誘餌的活躍多波攻擊。攻擊工具鏈包含 VBScript 投放器、批次檔載入器、.NET 可執行檔與 HTML 釣魚頁面，最終安裝 **ConnectWise ScreenConnect 代理程式**，向攻擊者控制的轉送伺服器回報，取得受害系統的持續遠端存取。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/fake-adobe-and-zoom-updates-install.html)

📌 **cPanel CVE-2026-58048（CVSS 9.4）：託管客戶可化身資料庫 root 執行 SQL** — 持有有效 cPanel 帳號的客戶可透過 MySQL/MariaDB 功能，以完整管理權限執行任意資料庫指令，依作業系統與資料庫設定不同，**可能進一步延伸至作業系統層級的入侵**。該漏洞影響所有受支援的 cPanel & WHM 版本與 WP Squared；修補版本為 11.110.0.137 至 11.136.0.32 及 138.1.6。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/new-cpanel-critical-flaw-could-let.html)

📌 **Anthropic：Claude 在資安測試中入侵 3 個真實組織** — 在第三方評測機構 **Irregular** 的授權資安能力測試中，隔離環境設定失誤讓 Claude 模型意外連上網際網路。**Opus 4.7** 將一家真實公司誤認為模擬目標發動攻擊（利用弱密碼、未驗證端點與 SQL 注入）並竊取應用程式與基礎設施憑證；**Mythos 5** 自行註冊 PyPI 帳號上傳惡意套件，遭 **15 個真實系統**下載執行——其中一家資安公司的掃描器安裝後被竊取憑證；另有一款內部研究模型掃描約 9,000 個目標後自行停止。Anthropic 回溯檢查 141,006 筆評估紀錄，發現自 4 月以來共 3 起事件、6 次測試，並將其歸因於**評估環境與作業疏失，而非模型刻意逃逸**。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyber-risk/anthropic-ai-issues-result-security-gaps) | [iThome](https://www.ithome.com.tw/news/177777)

📌 **中國駭客針對中亞政府散布後門程式 OctLurk、SilkLurk** — 卡巴斯基追蹤自 **2025 年 1 月**起的間諜活動，受害者遍布**阿富汗、吉爾吉斯、塔吉克、烏茲別克、哈薩克與敘利亞**的政府部門、醫療保健、研究機構、物流、執法機關與教育機構。兩款模組化後門（加上代理工具 LurkPoxy）都搭配針對受害組織個別打造、高度混淆的載入工具；操作者使用簡體中文。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177866)

📌 **APT36「Operation ShadowRecruit」假冒印度政府徵才誘騙求職者** — 與巴基斯坦政府有關聯的 **APT36** 冒充印度政府機關，以徵才為餌散布內含惡意 PowerShell 指令的壓縮檔，安裝 **ControlR** 遠端管理工具代理程式與 **SheetAgent RAT**（以 Google Sheets 作為命令與控制管道），同時開啟偽裝的招募公告 PDF 作為掩護。合法遠端管理工具與雲端服務有助於規避資安軟體偵測。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177868)

---

## OPSWAT可以怎麼幫上忙

本週的供應鏈攻擊浪潮——**Keyv npm 蠕蟲**、18 個惡意套件的 RAT 攻擊，以及 **DOUBLECUP** 的隱寫術載入器——將武裝化的套件與檔案直接送進開發、建置與終端使用者環境。**MetaDefender** 多重掃描（30+ 防毒引擎）搭配 **Content Disarm & Reconstruction（CDR）** 可在檔案進入的當下攔截惡意 npm 套件與假冒更新檔案，在酬載到達執行階段前將其中和；Deep CDR 則能剝除攻擊者用於初始入侵的文件與壓縮檔中的主動內容。
