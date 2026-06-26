---
title: "CISO 每日摘要：Anthropic 向國會告發阿里巴巴 AI 蒸餾攻擊；Cisco Unified CM 漏洞 24 小時內遭武器化 (20260626)"
description: "Anthropic 向美國國會告發阿里巴巴大規模 AI 蒸餾攻擊，要求立法禁止 API 層級的模型能力竊取；Cisco Unified CM SSRF 漏洞 CVE-2026-20230 在公開後 24 小時內出現攻擊活動；Klue 供應鏈攻擊擴大至 BeyondTrust、Pendo、8×8、Gong 等多家業者；Miasma 蠕蟲鎖定 npm 套件與 GitHub Actions；Turla APT 組織部署 STOCKSTAY 後門攻擊烏克蘭；PTC Windchill RCE 漏洞列入 CISA KEV；Operation Endgame 瓦解 Amadey、StealC、SocGholish 犯罪網路。"
pubDate: 2026-06-26
tags: [anthropic, alibaba, ai蒸餾, ai治理, cisco, cucm, cve-2026-20230, klue, 供應鏈攻擊, beyondtrust, miasma, turla, stockstay, ptc, windchill, cisa-kev, operation-endgame, linux, pedit-cow, gamaredon, ciso每日摘要]
author: "Security Solutions Team"
featured: true
---

## Anthropic 向國會告發阿里巴巴 AI 蒸餾攻擊；阿里巴巴股價下跌

Anthropic 將其與阿里巴巴的 AI 蒸餾爭議提升至國會層級，敦促美國立法者禁止透過 API 大量提取前沿模型能力的行為。Anthropic 在致參議員 Warren 與 Scott 的信中揭露，阿里巴巴在 2026 年 4 月至 6 月期間，利用 **超過 25,000 個假帳號** 對 Claude 進行了 **2,880 萬次查詢**，耗時 **44 天** 將模型輸出用於訓練其 Qwen 模型。Anthropic 將此手法稱為 **「AI 同類相食」（AI Cannibalism）**。

此事件標誌著美中 AI 競爭進入新階段。不同於昨日聚焦於指控本身，今日的發展核心在於 **Anthropic 推動立法行動**，警告現行針對模型權重的出口管制無法防止 API 層級的蒸餾攻擊。阿里巴巴股價應聲下跌，市場預期此事將加速華盛頓的監管辯論。

此外，Anthropic 透露 **Claude 在付費用戶中的市占率正逼近 ChatGPT**，但 OpenAI 與 Anthropic 同時面臨企業客戶縮減 AI 支出的新挑戰——企業正從「Token 最大化」轉向效率優先，可能重塑 AI 市場競爭格局。

🔗 **參考資料：** 綜合報導（[TechCrunch](https://techcrunch.com/2026/06/25/anthropics-claude-is-winning-over-paid-consumers-a-market-owned-by-chatgpt/)、[TweakTown](https://www.tweaktown.com/news/108574/anthropic-alibaba-fake-accounts-claude-qwen/index.html)、[CNBC](https://www.cnbc.com/2026/06/26/openai-anthropic-face-new-ai-reality-companies-shift-tokenmaxxing-efficiency.html)）

### 這對 AI 治理的深遠影響

阿里巴巴蒸餾攻擊暴露了現行 AI 監管的重大缺口：出口管制可限制模型權重轉移，但無法防止 API 層級的知識提取。Anthropic 呼籲國會介入，意味著 **軟體供應鏈安全原則** 可能很快適用於 AI 模型——將模型輸出視為需要監控、速率限制和異常檢測的敏感資料流。CISO 團隊應為新的 AI API 使用監控合規要求做好準備。

---

## 本週活躍威脅

📌 **Cisco Unified CM SSRF 漏洞 24 小時內遭武器化（CVE-2026-20230）**
攻擊者在思科公布修補後的 **24 小時內**，即開始利用 Unified CM 的 SSRF 漏洞。CISA 已將此漏洞列入已知遭利用漏洞（KEV）目錄。該漏洞允許未經認證的攻擊者從 UC 管理平面發起內部網路請求，可能橫嚮導入相鄰系統。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/less-than-24-hours-attackers-weaponize-cisco-cucm-flaw) | [iThome：CISA 列入 KEV](https://www.ithome.com.tw/news/176886) | [iThome：攻擊活動](https://www.ithome.com.tw/news/176885)

📌 **Klue 供應鏈攻擊擴大——BeyondTrust、Pendo、8×8、Gong 受波及**
Klue 供應鏈攻擊持續擴大。資安公司 **BeyondTrust** 證實其 Salesforce 系統因 Klue 整合而遭未授權存取。受害者還包括產品體驗平臺 **Pendo** 與雲端通訊廠商 **8×8**。AI 營收情資公司 **Gong** 警告同時使用 Klue 與 Gong 整合的客戶可能也處於風險中。攻擊者顯然以 **Salesforce API 整合** 為攻擊向量。
🔗 **參考資料：** [iThome：BeyondTrust](https://www.ithome.com.tw/news/176878) | [iThome：Pendo 與 8×8](https://www.ithome.com.tw/news/176896) | [iThome：Gong](https://www.ithome.com.tw/news/176898)

📌 **Miasma 蠕蟲鎖定 npm 套件與 GitHub Actions**
**Miasma** 供應鏈蠕蟲擴大攻擊範圍，感染 npm 套件並濫用 **GitHub Actions** CI/CD 管線進行傳播。該自我複製惡意軟體從 CI 環境變數竊取憑證，利用這些憑證向下游儲存庫推送惡意提交，形成感染鏈。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/miasma-malware-targets-npm-packages-and.html)

📌 **Turla APT 部署 STOCKSTAY 後門攻擊烏克蘭**
Google 威脅分析小組（TAG）揭露俄羅斯 APT 組織 **Turla** 使用新型後門 **STOCKSTAY** 攻擊烏克蘭目標。該後門採用模組化架構，具備檔案外洩與命令執行能力，代表 Turla 工具組的升級。初始入侵途徑為以烏克蘭為主題的魚叉式釣魚郵件。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/google-details-turlas-new-stockstay.html)

📌 **PTC Windchill RCE 列入 CISA KEV——出現 Web Shell 攻擊（CVE-2026-12569）**
CISA 將 PTC Windchill 與 FlexPLM 產品生命週期管理系統的 **RCE 漏洞** 列入 KEV 目錄。PTC 在一週前偵測到攻擊活動，威脅行為者已在受駭 PLM 伺服器上部署 **Web Shell**。使用 PTC PLM 解決方案的組織應優先修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cisa-adds-exploited-ptc-windchill-rce.html) | [iThome](https://www.ithome.com.tw/news/176889)

📌 **Linux pedit COW 本機權限提升漏洞——中毒快取二進位檔取得 Root 權限**
名為 **pedit COW** 的新型 Linux 權限提升漏洞（Dirty COW 變種），允許本機攻擊者 **對快取二進位檔下毒** 以取得 root 權限。該技術利用記憶體映射檔案的寫入時複製行為，修改唯讀可執行檔。共用主機與多租戶環境應特別監控本機權限提升跡象。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/new-linux-pedit-cow-exploit-enables.html)

📌 **Operation Endgame 瓦解 Amadey、StealC、SocGholish 惡意軟體網路**
歐洲刑警組織的 **Operation Endgame** 再下一城，搗毀 **Amadey**、**StealC** 與 **SocGholish**（FakeUpdates）惡意軟體載入器的犯罪基礎設施，查獲 **超過 4,100 萬歐元** 加密貨幣。SocGholish 曾用於向數千個遭駭 WordPress 網站傳遞勒索軟體酬載。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176899) | [iThome 資安日報](https://www.ithome.com.tw/news/176902)

📌 **Microsoft 警告鎖定飯店的 Photo ZIP 釣魚攻擊**
Microsoft 揭露一波針對飯店業的 **Photo ZIP 釣魚攻擊**，透過偽裝成照片檔案的加密 ZIP 壓縮檔傳遞 **Node.js 後門**。該惡意程式透過 WebSocket 建立 C2 通訊，可執行任意指令、竊取檔案，並在飯店預訂網路中橫向移動。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/microsoft-warns-of-photo-zip-phishing.html)

📌 **Gamaredon APT 升級攻擊工具組**
俄羅斯 APT 組織 **Gamaredon**（又名 Shuckworm、Actinium）升級其惡意軟體工具組，採用新的傳遞機制並強化 operational security，需要更新的防禦策略。該組織仍以烏克蘭為主要目標，但其憑證竊取與資料外洩能力已擴大。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/threat-intelligence/russia-apt-gamaredon-arsenal-defense)
