---
title: "CISO 每日摘要：攻擊者利用 4,837 個遭劫持的 GitHub 帳戶在 1,806+ 個存放庫中執行 CI 密鑰盜取程式 (20261112)"
description: "部分摘要／翻譯未完成；保留已完成內容與原始來源。"
pubDate: 2026-11-12
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 今日資安新聞速覽

部分摘要／翻譯未完成；保留已完成內容與原始來源。

### 📌 攻擊者利用 4,837 個遭劫持的 GitHub 帳戶在 1,806+ 個存放庫中執行 CI 密鑰盜取程式

攻擊者利用 4,837 個遭劫持的 GitHub 帳戶在 1,806+ 個存放庫中執行 CI 密鑰盜取程式，根據 Aikido Security 的報告。從星期二開始，攻擊者使用被盜認證，在 4,837 個 GitHub 帳戶能寫入的存放庫中植入密鑰盜取程式。該盜取程式針對 CI 工作流程密鑰和雲端憑證，至少在 1,806 個存放庫中運行。攻擊始於標題為「docs: dependency audit notes」、來自分支 wfx-docs 的拉取請求，在 61,764 個存放庫中開啟以測試寫入權限。SafeDep 統計顯示，在星期二 12:46 UTC 至星期三 04:36 UTC 期間，有 8,093 個存放庫收到惡意提交，其中 7,309 個存放庫在現有工作流程中植入了盜取程式，771 個透過 npm postinstall 挂鉤植入。在盜取程式運行的地方，所有可供工作流程使用的密鑰和雲端角色都應被視為遭到妥協，日誌通常連同運行一起被刪除。 更多相同標題的拉取請求來自今天早些時候的 wfx-docs 分支，但尚不清楚盜取程式是否隨後執行。任何開啟攻擊者測試拉取請求的帳戶都應被視為已遭妥協，即使盜取程式未運行。盜取程式會收集 GitHub Actions 密鑰和變數、GITHUB\_TOKEN、OIDC 和 Actions 執行階段權杖、AI 服務金鑰，以及 AWS、Azure、GCP、Kubernetes、npm、PyPI、SSH 等工具的憑證檔案。在自託管運行程式上，它也會從執行個體中繼資料、Docker 容器狀態和 systemd 單位中獲取雲端憑證。它會將 GitHub OIDC 權杖交換為 AWS、GCP 和 Azure 工作階段，且在 AWS 上可以創建長期 IAM 存取金鑰。它可以重寫 AWS 角色信任策略，將角色開放給任何 AWS 帳戶，並將前綴為 wfx-ci- 的聯盟身份憑證添加到 Azure AD 應用程式，即使輪換權杖後也可在無儲存密鑰的情況下登入。該盜取程式已影響至少一個 Packagist 套件和一個 Go 模組，包括 digitalelvis/neuronai-studio 和 github.com/onuragtas/docker-env 的惡意版本，並透過 wdio-bot 帳戶在 28 個 WebdriverIO 存放庫中被發現。發現與 GhostAction 十月份的攻擊浪潮存在重疊，但 Aikido 不將十一月活動歸因於同一攻擊者，因為基礎架構、工具和方法均有不同。

**原始來源:** [Attacker Used 4,837 Hijacked GitHub Accounts to Run a CI Secret Stealer in 1,806+ Repositories](<https://thehackernews.com/2026/11/4837-hijacked-github-accounts-ran-ci.html>)

### 📌對 CISO 的影響

- **假設 GitHub CI 密鑰已遭妥協 —** 將受影響工作流程可存取的每個密鑰、變數、權杖和雲端角色都視為已遭妥協；輪換所有存放庫和雲端密鑰，撤銷 OAuth 授權和 SSH 金鑰，並在受影響帳戶上啟用 2FA。
- **檢測權杖輪換之外的持久性 —** 審計 AWS CloudTrail 中與 wfx- 前綴相關的 AssumeRoleWithWebIdentity 或 CreateAccessKey 活動，檢查 Entra ID 中名為 wfx-ci-\* 的未授權聯盟憑證，並審查來自 GitHub OIDC 發行者的 GCP 工作負載身份 JWT 登入。
- **加強供應鏈和管道控制 —** 阻止或固定惡意套件版本，如 digitalelvis/neuronai-studio v3.14.3 和 github.com/onuragtas/docker-env v1.0.278/v1.0.280，將在受影響提交上執行 npm install 的機器視為已遭妥協，並監控分支 wfx-docs、短命 chore/ 分支、ci-check- 分支以及標題為 docs: dependency audit notes 的拉取請求。

---

### 📌 關鍵 Apache HTTP/2 漏洞可能允許未經身份驗證的攻擊者遠端執行程式碼

Apache HTTP Server 的 mod\_http2 模組中存在一個關鍵缺陷，編號為 CVE-2026-119618，允許未經身份驗證的遠端攻擊者在啟用 HTTP/2 的伺服器上遠端執行程式碼，影響版本 2.4.55 至 2.4.70；修復版本為 Apache 2.4.71，而 Red Hat 在 RHEL 9 和 10 上將該缺陷評級為「重要」，並表示 RHEL 8 及更早版本不受影響。Wiz 表示未發現公開漏洞利用或野外觀察到的利用行為，無法修補的管理員可暫時將 h2 和 h2c 從 Protocols 指令中移除作為緩解措施。

**原始來源:** [Critical Apache HTTP/2 Flaw Could Let Unauthenticated Attackers Execute Code Remotely](<https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html>)

---

### 📌 新 N-central 漏洞利用針對已修補伺服器，啟用根權限遠端程式碼執行和 Windows SYSTEM 存取

研究人員 Sean Bales 披露了影響 N-central 內部部署版本 2026.4.1 HF2 和已修補組建 2026.4.1.26 的 4EverAble2Shell 與 Agent2Shell 漏洞；4EverAble2Shell 在 Legacy API 公開暴露時可啟用未經身份驗證的根權限遠端程式碼執行，而 Agent2Shell 使用超過 10 個零日漏洞在受管理代理程式上以 Windows SYSTEM 身份執行命令。N-able 表示託管環境不受影響，並敦促客戶立即停用 Legacy API；已觀察到來自 IP 157.20.241.16 的探測，但未報告確認的漏洞利用行為。

**原始來源:** [New N-central Exploits Work Against Patched Servers, Enable Root RCE and Windows SYSTEM Access](<https://thehackernews.com/2026/11/new-n-central-exploits-work-against.html>)

---

### 📌 N-able Takes N-central Platform Offline After Discovery of 33 Flaws

**原始來源:** [N-able Takes N-central Platform Offline After Discovery of 33 Flaws](<https://www.darkreading.com/endpoint-security/n-able-n-central-offline-33-flaws>)

---

### 📌 ScreenConnect Attacks Target at Least 288 Endpoints Across 48 Organizations With Rogue Clients

**原始來源:** [ScreenConnect Attacks Target at Least 288 Endpoints Across 48 Organizations With Rogue Clients](<https://thehackernews.com/2026/11/screenconnect-attacks-target-at-least.html>)

---

### 📌 Calendar Invites and Live Proxies: Inside a Google Session Hijacking Campaign

**原始來源:** [Calendar Invites and Live Proxies: Inside a Google Session Hijacking Campaign](<https://thehackernews.com/2026/11/calendar-invites-and-live-proxies.html>)

---

### 📌 航運巨擘馬士基證實資料外洩，傳遭勒索組織WhiteArmor索討500萬美元 - iThome

**原始來源:** [航運巨擘馬士基證實資料外洩，傳遭勒索組織WhiteArmor索討500萬美元 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5vUmF6N09IamRuUlNzeXE4d1k5Mm9yY2VBWllFY1U0MUtnclVYZlhhcnFYdFJqVVlZYW54OTE4WUVuSktCVm9KR3Q2YXVpQQ?oc=5>)

---

### 📌 N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome

**原始來源:** [N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA0bnRabktvT2NnWV8wWWxpVV9yZFVTcThQYXZwc0o2Mm1FT25zR1hWdm84eXZJZ0dqUWFoMVZWVXZQZVF4cWlmRVVscTN2UQ?oc=5>)

---

### 📌 Google Cloud Warns Three AMD Turin CPU Flaws Could Leak Data Across Processes in VMs

**原始來源:** [Google Cloud Warns Three AMD Turin CPU Flaws Could Leak Data Across Processes in VMs](<https://thehackernews.com/2026/11/google-cloud-warns-three-amd-turin-cpu.html>)

---

### 📌 PTC Patches Critical Windchill and FlexPLM Flaw That Could Enable Remote Code Execution

**原始來源:** [PTC Patches Critical Windchill and FlexPLM Flaw That Could Enable Remote Code Execution](<https://thehackernews.com/2026/11/ptc-patches-critical-windchill-and.html>)

---

### 📌 AntiFox AI Pentesting Platform Linked to Attacks That Accessed AWS Production Secrets

**原始來源:** [AntiFox AI Pentesting Platform Linked to Attacks That Accessed AWS Production Secrets](<https://thehackernews.com/2026/11/antifox-ai-pentesting-platform-linked.html>)

---

### 📌 微軟揭露駭客利用代理型AI搜尋GitHub外洩憑證，5分鐘內從Azure Key Vault外傳資料 - iThome

**原始來源:** [微軟揭露駭客利用代理型AI搜尋GitHub外洩憑證，5分鐘內從Azure Key Vault外傳資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RNm9YWEVpeHY4QlR2eDY4Rkt2a3pKMUphWnFYLVM3VWtycUUxWC13UzIxbWtCeVhOYXNkWmtHcW45RlRZX3N0OENjUktnQQ?oc=5>)

---

### 📌 外交部領務局網站遭駭，逾7.2萬個護照大頭照外洩，另有授權書及ABTC資料遭取得 - iThome

**原始來源:** [外交部領務局網站遭駭，逾7.2萬個護照大頭照外洩，另有授權書及ABTC資料遭取得 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9KVU5BcHRDVUpXZHNWbVd3M1NrT0hiTjh0bndzR1l5Ml9aN0VHUW5BZDNZQlB2UWRIekt6cUVaYUxkSHRIQU91aEtwZ3hsQQ?oc=5>)

---

### 📌 Node.js Fixes 16 Flaws, Including HTTP/2 Bugs That Crash Servers and Leak Other Connections' Data

**原始來源:** [Node.js Fixes 16 Flaws, Including HTTP/2 Bugs That Crash Servers and Leak Other Connections' Data](<https://thehackernews.com/2026/11/nodejs-fixes-16-flaws-including-http2.html>)

---

### 📌 Critical Zoom Workplace Flaw Could Allow Unauthenticated Remote Privilege Escalation

**原始來源:** [Critical Zoom Workplace Flaw Could Allow Unauthenticated Remote Privilege Escalation](<https://thehackernews.com/2026/11/critical-zoom-workplace-flaw-could.html>)

---

### 📌 netiCRM服務商最新調查指出是內部管理主機遭駭，暫未發現捐款人資料外洩，已將500家客戶主機納入檢查及重建範圍 - iThome

**原始來源:** [netiCRM服務商最新調查指出是內部管理主機遭駭，暫未發現捐款人資料外洩，已將500家客戶主機納入檢查及重建範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1vUkRvWWxaeGVSaTJ6TVVQVVdzVWZucnlyNkd3anRhbTR6MEE0YjA3VFNpX1ZnenlvcnRnelpMb0RaaWRGQ3dlNzh2UjhFZw?oc=5>)

---

### 📌 Critical Pre-Auth MongoDB Flaw (CVE-2026-118383) Can Crash Lagging Servers on Failover

**原始來源:** [Critical Pre-Auth MongoDB Flaw (CVE-2026-118383) Can Crash Lagging Servers on Failover](<https://thehackernews.com/2026/11/critical-pre-auth-mongodb-flaw-cve-2026.html>)

---

### 📌 JVN: KUSANAGIにおけるHTTPヘッダーインジェクションの脆弱性

**原始來源:** [JVN: KUSANAGIにおけるHTTPヘッダーインジェクションの脆弱性](<https://jvn.jp/vu/JVNVU92635551>)

---

### 📌 駭客濫用AI代理滲透測試平臺AntiFox，發動AWS雲端憑證竊取攻擊 - iThome

**原始來源:** [駭客濫用AI代理滲透測試平臺AntiFox，發動AWS雲端憑證竊取攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nX1Q5OUxmYUktMHozcFNfVGtCdWlVb0p6MjBLUXdfZ2VjTW52OEYwVk9rUXcwWXc4aEhPNWNRb0FleEd2N0pHS29GYWtHdw?oc=5>)

---

### 📌 菲律賓證管會傳數位平臺被駭，逾40萬用戶資料外洩 - iThome

**原始來源:** [菲律賓證管會傳數位平臺被駭，逾40萬用戶資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9NTWVHNUhRamZBNExlUnNFZ0tpenRVLXJnQTYxamxncGNsa3F3UVo3UXo5MUQwMFBWOURXT2NqYnVUbHdzVF9uN25kOThNUQ?oc=5>)

---

### 📌 Fortinet揭露10月底修補的100個資安漏洞 - iThome

**原始來源:** [Fortinet揭露10月底修補的100個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBjWmVSRUFnYklBMFdZM1Q5alRoX1lVeGw4SEhEUGpZek1zUmRMTDJycy04dDh4MGdGdlRpTnlGUFVRbTQtdXFsdHQ1elZ4QQ?oc=5>)

---

### 📌 康橋國際學校林口校區遭Osiris勒索，傳出部分資料恐外流 - iThome

**原始來源:** [康橋國際學校林口校區遭Osiris勒索，傳出部分資料恐外流 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE11cVp2cUtvbnhvNU4tQkhndjNDaUhzd3hibXpnUlEwRzUxd0JtaXpYQno1ZGl1a1hFZzY1TjRWQ29tTnoxLU1mUHc3NjVsUQ?oc=5>)

---

### 📌 JVN: Apache HTTP Server 2.4における複数の脆弱性に対するアップデート（2026年11月11日）

**原始來源:** [JVN: Apache HTTP Server 2.4における複数の脆弱性に対するアップデート（2026年11月11日）](<https://jvn.jp/vu/JVNVU90805396>)

---

### 📌 Git修補6項資安漏洞，惡意儲存庫恐觸發任意程式碼執行 - iThome

**原始來源:** [Git修補6項資安漏洞，惡意儲存庫恐觸發任意程式碼執行 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0taGN5b2N6U2xQZERndEZYTEszZHI5LXRmZGpSTWFrSGZsSkZQV0VOVkh3clE5SXV4bUpsTTdydk9jQU9KRFdMMi0zOFV5UQ?oc=5>)

---

### 📌 Bitcoin Core раскрыл три уязвимости, самая опасная могла остановить работу мемпула

**原始來源:** [Bitcoin Core раскрыл три уязвимости, самая опасная могла остановить работу мемпула](<https://xakep.ru/2026/11/12/bitcoin-core-vulnerabilities>)

---

### 📌 Japan Pushes Emergency Funding for Cybersecurity as AI-Assisted Breaches Rise

**原始來源:** [Japan Pushes Emergency Funding for Cybersecurity as AI-Assisted Breaches Rise](<https://www.darkreading.com/cybersecurity-operations/japan-emergency-funding-cybersecurity-ai-assisted-breaches>)

---

### 📌 N-central資安漏洞Able2Shell公布後出現嘗試利用活動 - iThome

**原始來源:** [N-central資安漏洞Able2Shell公布後出現嘗試利用活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NTGJoOTRIRm5yNWQ1QlRUR1FLYWpDZFhXbVZmUTU5b2czSEZOQjhodUxHZXFSLTRoR2VXX3pCMjdEQWladXNwc0dBRVliZw?oc=5>)

---

### 📌 地下論壇有人聲稱兜售4.6萬筆台積電員工紀錄，台積電回應無證據顯示公司系統遭入侵 - iThome

**原始來源:** [地下論壇有人聲稱兜售4.6萬筆台積電員工紀錄，台積電回應無證據顯示公司系統遭入侵 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5GaTYtQ3NGUzcxVFBoellGWFNzMmdrZVI2ZzdabWZzY3pZcC0xQk1BdnZkVXpPc3Vmc3o4SFFhQ2tWNlNDaUdFOGVxWVBxdw?oc=5>)

---

### 📌 Из-за взлома Fireworks AI пострадали данные пользователей Notion

**原始來源:** [Из-за взлома Fireworks AI пострадали данные пользователей Notion](<https://xakep.ru/2026/11/12/fireworks-ai-notion>)

---

### 📌 Google預測2027年資安趨勢，AI代理將深入SOC與企業防禦 - iThome

**原始來源:** [Google預測2027年資安趨勢，AI代理將深入SOC與企業防禦 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9nd21XZ2Rua0J6bjhPVjhKeWJFQksxbUE0UW4tRXpPVTVIMlFUYV92S2ZlcWsyQU1jdnRuWmFjZnIxams3eE1GaWpjamhCQQ?oc=5>)

---

### 📌 Google同步更新Chrome 157穩定版、Chrome 156延伸穩定版與ChromeOS LTS版 - iThome

**原始來源:** [Google同步更新Chrome 157穩定版、Chrome 156延伸穩定版與ChromeOS LTS版 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5waWh0WG84a1d1Y2Znbm1DWjNEREZSNmRqM1Jxek4wYkdQYzJuNDljWUs0aHlXdXhnMFJ4UUo1cFQ0ZE5wcFpveHBiRHB3Zw?oc=5>)

---

### 📌 義大利約6,000所學校收炸彈恐嚇信、多校疏散，臺灣大葉大學校友帳號疑成跳板 - iThome

**原始來源:** [義大利約6,000所學校收炸彈恐嚇信、多校疏散，臺灣大葉大學校友帳號疑成跳板 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1zRzJuSHMzMW5KTVJtRFpHMlc1cFBBQkV4UHVERlJmM1BpOXVGUGRfbXMzeWdsR1NrSmIwOVlOX0xHUEg2VTMydzdrdWVCZw?oc=5>)

---

### 📌 Уязвимости Plex2Shell используются для атак на NAS Qnap

**原始來源:** [Уязвимости Plex2Shell используются для атак на NAS Qnap](<https://xakep.ru/2026/11/11/plex2shell-qnap>)

---

### 📌 JVN: 三菱電機数値制御装置におけるサービス運用妨害（DoS）の脆弱性

**原始來源:** [JVN: 三菱電機数値制御装置におけるサービス運用妨害（DoS）の脆弱性](<https://jvn.jp/vu/JVNVU95523788>)

---

### 📌 JVN: BrotliのC言語実装における境界外書き込みの脆弱性（CVE-2026-111497）

**原始來源:** [JVN: BrotliのC言語実装における境界外書き込みの脆弱性（CVE-2026-111497）](<https://jvn.jp/vu/JVNVU97400824>)

---

### 📌 Anthropic’s Claude Mythos Expands Into Cisco and IBM Security Platforms - Security Boulevard

**原始來源:** [Anthropic’s Claude Mythos Expands Into Cisco and IBM Security Platforms - Security Boulevard](<https://news.google.com/rss/articles/CBMirgFBVV95cUxQSVNoaW5CSkdrbHdGdWpnUGl0bFhTVE1iUHZ6dlNKSXRvenA5V05kZEZwdi01cndsLUpEOXRIM2lMU1FCQnY5SDdGWExGVm9JREppSTBhRmhyeWRGbXg5dUpqcUFYV0FXdWEza18zaWFLamw1LXJrQ3JzbXg1bFZOOEY1bkV1cjBXc1V5YmxWcUw2X3kzMEdEM3htcHkwWDJIRHFqWU1RaDlPNGZ0WUE?oc=5>)

---

### 📌 AlphaProof Code - iThome

**原始來源:** [AlphaProof Code - iThome](<https://news.google.com/rss/articles/CBMiWkFVX3lxTE9iQU8wbU5MTDBCZk42TjhQQm9BRHl0Q2Q5bzhpQUJOcWE5S0M3RUE4N1RGS204QkV2Q2VwdldBNU1KUTJDVXRWdnBHclBmRkF1b3RmZVlubnJndw?oc=5>)

---

### 📌 Заключенный получил восемь лет за попытку похитить криптовалюту прямо из тюремной камеры

**原始來源:** [Заключенный получил восемь лет за попытку похитить криптовалюту прямо из тюремной камеры](<https://xakep.ru/2026/11/11/robert-barr-crypto-heist>)

---

### 📌 ИИ снижает порог входа для атакующих и меняет архитектуру SOC

**原始來源:** [ИИ снижает порог входа для атакующих и меняет архитектуру SOC](<https://xakep.ru/2026/11/11/soc-forum-2026-day2>)

---

### 📌 Spoofing - iThome

**原始來源:** [Spoofing - iThome](<https://news.google.com/rss/articles/CBMiUEFVX3lxTE1jc2E4Y2YxVXR5MmJybk9rM0FscnZERm80R3BFa0otVjFZakJhMVdWR2RFTDU2Qm41N1NwRV9NNkdxbXVTbjVOT2VQWlRYbnI2?oc=5>)

---

### 📌 Apple tests an app in direct competition with LM Studio - Softonic

**原始來源:** [Apple tests an app in direct competition with LM Studio - Softonic](<https://news.google.com/rss/articles/CBMikgFBVV95cUxORnpqWXhGeDIzSjBEa2oybkhCajEwM1BBYXY4aHpmV1VCQnRDek1oMFdNcVlhSjhrOHdXQmFtOHlEUncxQ1prTnZZa3BpdFF2V2l6ZFNZNTRkY3pKVUhVTWNTalpZYVdFX3J2eF96dXY1YUlsQVVFUU5FVXJaVXZpQ0Y5MjdBM2xkeGdZb3FGZXpxdw?oc=5>)

---

### 📌 一起幫忙解決難題，拯救 IT 人的一天 - iT 邦幫忙

**原始來源:** [一起幫忙解決難題，拯救 IT 人的一天 - iT 邦幫忙](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBUelpvUWpObDN2Q2RGWHVlMmQ2QU43VHprZWgyUEE3THNJRFlmbHY2ZnRKRTMtOXNaRld6ZUw2NFJFY01TY24zT0hDN3dJT193ZHJndVZHeURhcTNSVXRVOVl3Sml4dFU?oc=5>)

<!-- ciso-revision:ciso-20261112-1-available-1794590333075 -->
