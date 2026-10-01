---
title: "CISO 每日摘要：GitHub Actions 供應鏈復活——遭入侵的儲存庫意外恢復，Mini Shai-Hulud 惡意軟體重新執行 (20260926)"
description: "遭入侵的 GitHub Actions 儲存庫在 9 月 16 日遭 GitHub 人員意外恢復後，Mini Shai-Hulud 竊密惡意軟體重新在參考版本標籤的 CI/CD 流程上執行。本週另有：OnePlus OxygenOS 16 超高風險 root 權限提升漏洞（尚未修補）、Meta Muse AI 助手允許竊取憑證與跨設備劫持的漏洞、Elementor WordPress CSRF 漏洞讓駭客透過管理員連結接管網站，以及美國軍人因利用 Snowflake 破口勒索 AT&T 與 Verizon 遭判 70 月徒刑。"
pubDate: 2026-09-26
tags: [GitHub-Actions, Mini-Shai-Hulud, 供應鏈, CI-CD, 惡意軟體, OnePlus, OxygenOS, Root-提升, Meta-Muse, AI-安全, Elementor, WordPress, CSRF, Snowflake, 勒索, CISO-每日摘要]
author: "Security Solutions Team"
featured: true
---

## GitHub Actions 儲存庫意外恢復，惡意軟體標籤仍可執行

兩個在 **5 月 18 日** 遭 **Mini Shai-Hulud 行動** 入侵的 GitHub Actions 儲存庫，於 **9 月 16 日** GMT+2 時間 11:09 至 18:16 之間意外恢復為公開存取。GitHub 人員曾在發現這些儲存庫竊取 **CI/CD 憑證並向駭客控制的伺服器外洩** 後將其禁用。問題在於：指向 **5 月 18 日惡意軟體** 的版本標籤從未清理。任何參考 **`actions-cool/issues-helper@v2.2.1`** 或類似版本標籤的工作流，在下次執行時都會自動下載並執行竊密程式碼。**Socket** 研究團隊發現 9 月 16 日沒有引入新程式碼——只是儲存庫變成可下載，把受控的事件轉變回活躍的供應鏈威脅。外洩網域 **`t.m-kosche[.]com`** 與早期 Mini Shai-Hulud 基礎設施重疊。受影響使用者須定位所有指向這些 Action 的參考、移除它們、釘到 5 月 18 日前已知安全的 commit SHA，並輪換所有外洩的機密。

### 為何無聲的儲存庫恢復造成憑證管理災難

- **可變版本標籤是事件定時炸彈。** 單一惡意版本標籤渡過了遏制與 GitHub 自身的緩解——提醒機構將依賴版本標籤而非 commit SHA 的組織會無限期地承受上游破口風險。
- **恢復而無組態變更比全新攻擊更糟。** 以為 5 月事件已妥善補救的防守方未收到警告、日誌或新的「痕跡」——同樣的惡意軟體只是醒來後重新執行。
- **5 月竊取的機密在 9 月仍然有效。** 從儲存庫遭禁用到恢復期間共有 4 個月；多數機構早已輪換 5 月破口暴露的憑證。但那些沒有輪換的機構，剛好把 9 月的存取權交給了駭客。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/09/compromised-github-actions-came-back.html)、[Socket.dev](https://socket.dev/blog/mini-shai-hulud-actions)）

---

## 本週活躍威脅

📌 **OnePlus 未修補 root 提升漏洞：OxygenOS 16 門戶洞開**
獨立資安研究員 Rasmus Moorats 發現兩個 **OnePlus OxygenOS 16 未修補的權限提升漏洞**，讓任何已安裝的應用程式都能取得 **完整 root 權限，無須請求任何特殊許可**——悄悄執行、無任何使用者警告。第一個缺陷位於 **AtlasService**（一個執行 root 的偵錯服務），接受來自任何應用的請求；精心打造的呼叫讓攻擊者得以將任意 shell 命令注入系統偵錯命令、毫無驗證。第二個 **olc2** 服務的漏洞允許 **UID 0**（root）的處理序執行任意 shell 命令。串聯起來，它們賦予惡意應用程式完整的核心層級控制。OnePlus 證實漏洞影響其他裝置（包括 **Oppo** 機型），研究員推測 **OxygenOS 16 整體** 都有漏洞。較舊的 OnePlus 12 Pro 也確認脆弱。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/unpatched-oneplus-flaws-let-installed.html) | [xakep.ru](https://xakep.ru/2026/09/25/oneplus-root/)

📌 **Meta Muse AI 助手漏洞：憑證竊取與跨設備劫持**
macOS 資安研究員 **Patrick Wardle** 揭露 Meta 新近推出的 Muse（9 月 2026 年推出）內的 **0-day 漏洞**，讓任何本機執行的進程竊取使用者的 **驗證權杖** 並劫持 AI 助手、跨越所有連結的設備。漏洞原因：Muse 有一個未文件化的設定（`endo_voyager_dictation_endpoint`），決定語音輸入傳送的地點。任何以目前使用者身份執行的應用都可將其改為惡意伺服器、攔截語音請求、注入命令、竊取權杖。一旦權杖遭竊，攻擊者即可控制受害者 iPhone、Mac 和其他設備上的 Muse——存取聊天記錄、觸發智慧家居命令、拍照、錄製地理位置、列舉藍牙裝置。Wardle 展示只需 **ClickFix 攻擊**（欺騙使用者貼上終端命令）就足以取得程式碼執行；無須另外下載惡意軟體。Meta 稱「實務風險低」但已發布修補；研究員指出 **Apple 原生語音 API 本可完全防止這個問題**。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/one-hidden-meta-muse-setting-could-let.html) | [xakep.ru](https://xakep.ru/2026/09/25/muse-bug/)

📌 **Elementor CSRF 漏洞讓駭客只需一次點擊就能接管 WordPress 網站**
WordPress 頁面產生器 **Elementor** 容易受 **跨網站請求偽造（CSRF）** 攻擊，只要網站管理員點擊精心打造的連結就會中招——無需 JavaScript、表單提交或駭客控制的網站。訪問單一 URL，網站管理員即可遭騙授予攻擊者完整的網站控制權。該漏洞無須前置條件，已有修補程式可用。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/elementor-csrf-flaw-lets-attackers-take.html)

📌 **美國軍人遭判刑：因利用 Snowflake 漏洞勒索 AT&T 與 Verizon 被判 70 月徒刑**
駐紮南韓的美國軍人 **Cameron John Wagenius** 因利用竊得的 **Snowflake 憑證** 攻擊 **AT&T 與 Verizon** 系統並勒索這些電信業者，遭判聯邦監獄 **70 月（5 年多）** 徒刑。法庭文件顯示他取得了敏感電信基礎設施資料的存取權並要求贖金。本案示範單一遭破口的雲端帳戶——此例為 Snowflake——如何導致對大型公司的勒索與聯邦起訴。

🔗 **參考資料：** [Krebs on Security](https://krebsonsecurity.com/2026/09/u-s-soldier-gets-70-months-in-prison-for-att-verizon-extortions/)

---

## OPSWAT 可以怎麼幫上忙

GitHub Actions 惡意軟體與 Elementor CSRF 都涉及 **供應鏈成品執行** 與 **網路型酬載遞送**。**MetaDefender Multi-Scan** 能在下載的 CI/CD 成品與第三方 Action 執行於流程前進行驗證，利用 30 多個防毒引擎偵測已知的惡意簽名——保護身為憑證竊取高價值目標的建置系統。**MetaDefender CDR**（內容淨化與重建）能清淨 WordPress 外掛提供的網路資產，並阻止檔案中的主動內容、遭破口的外掛或 CSRF 驅動的惡意重導向，降低被入侵外掛或惡意重導向的衝擊範圍。
