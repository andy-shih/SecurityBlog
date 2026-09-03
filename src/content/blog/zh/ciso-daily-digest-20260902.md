---
title: "CISO 每日摘要：AWS Lambda 供應鏈後門與 JetBrains CI/CD 零日 (20260902)"
description: "關鍵 AWS Lambda 層妥協 CVE-2026-37345 啟用無伺服器函式代碼注入；12,000+ Lambda 函式受分發密碼礦工及認證竊取程式的惡意公開層影響。JetBrains TeamCity 零日 CVE-2026-37891 啟用未認證 RCE 影響 CI/CD 管道；在金融及科技部門觀察到利用。RaspberryRobin 蠕蟲透過 Windows USB 設備傳播；LockBit 3.0 針對製造業進行 40GB 洩露。OPSWAT MetaDefender 對 Lambda 層檢查及建立成品驗證至關重要。"
pubDate: 2026-09-02
tags: [AWS-Lambda, JetBrains, TeamCity, CVE-2026, Supply-Chain, RaspberryRobin, LockBit, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## 執行摘要

- **AWS Lambda 層供應鏈後門 (CVE-2026-37345)：** 惡意 Lambda 層發布至 AWS Lambda 層市場，分發密碼礦工及認證竊取程式酬載。12,000+ 函式已採用受損層；攻擊者竊取 AWS 認證及資料庫連線字串。無需認證即可採用層；層在每個 Lambda 呼叫中執行。
- **JetBrains TeamCity 未認證 RCE (CVE-2026-37891)：** 透過形式錯誤成品儲存體要求的遠端程式碼執行影響 TeamCity 2022.x–2024.x。CVSS 9.9。利用工具包流通。攻擊者妥協 CI/CD 管道、將惡意軟體注入建立成品及竊取原始碼與秘密。
- **RaspberryRobin 蠕蟲透過 USB 驅動器傳播：** 先前休眠的 RaspberryRobin 蠕蟲透過 Windows USB 設備及網路共享增強傳播。LockBit 及 Qilin 勒索軟體幫派初始存取向量。企業資料洩露激增 280% 周。
- **LockBit 3.0 針對製造業進行 40GB 洩露：** LockBit 勒索軟體幫派發布從一級汽車供應商竊取的 40GB 資料集；要求 $8M 勒索。攻擊向量：RaspberryRobin USB + ProxyShell Exchange 利用。
- **關鍵警報：CISA 在 24 小時內向 KEV 添加 8 個零日。** 三個影響 Palo Alto Networks、兩個影響 Fortinet 及 Apache OFBiz、Telerik 及 Red Hat Fuse 單一 CVE 表示協調漏洞披露。

## AWS Lambda 層供應鏈後門 — CVE-2026-37345

AWS Lambda **公開層** 是可發現、跨組織重複使用的程式碼套件。關鍵供應鏈攻擊利用此共享層模式：攻擊者向 AWS Lambda 層市場發布 **惡意 Lambda 層**，包含密碼礦工及認證竊取程式酬載。

**攻擊機制：**
- 攻擊者發布具有良性名稱的層 (例如 `utility-logger`、`async-helper`)
- 正當開發者採用層至其 Lambda 函式
- 層代碼以 Lambda 執行角色權限執行 (通常是 AWS IAM 管理員或 S3/RDS 存取)
- 攻擊者竊取 AWS 認證、RDS/Aurora 連線字串、API 金鑰、資料庫內容

**受影響範圍：**
- AWS 帳戶中財務、SaaS 及科技部門的 12,000+ Lambda 函式
- 受損函式包括電子商務結帳處理程式、銀行 API 及 CRM 資料處理程式
- 竊取的資料庫包括客戶 PII、支付卡資料及醫療記錄

**實際世界影響：** Lambda 生態系中的單一惡意層可妥協數千個下游函式。鑑識分類需要 Lambda 執行角色稽核及跨整個 AWS 組織的層列舉。

**建議行動：**
1. 稽核所有 Lambda 層：`aws lambda list-layers` 跨所有區域
2. 識別非內部層並驗證來源
3. 如無法驗證來源，立即撤銷層版本
4. 強制更新所有 Lambda 函式至內部層
5. 輪換所有 AWS IAM 認證並檢查 CloudTrail 日誌以查看竊取

🔗 **參考資料：** [AWS Security Blog](https://aws.amazon.com/blogs/security/), [CISA Alert](https://www.cisa.gov/news/), [Bleeping Computer](https://www.bleepingcomputer.com/news/security/aws-lambda-layer-supply-chain-compromise/)

---

## JetBrains TeamCity 未認證 RCE — CVE-2026-37891

JetBrains **TeamCity CI/CD 平臺** 包含 **關鍵未認證 RCE** (CVE-2026-37891，CVSS 9.9)，影響版本 2022.1–2024.2。漏洞位於 TeamCity 的成品儲存體端點；形式錯誤的 HTTP 要求繞過認證並觸發任意 Java 代碼執行。

**攻擊流程：**
1. 攻擊者向 `/app/rest/builds/{buildId}/artifacts` 發送特製 HTTP 要求
2. 形式錯誤的成品中繼資料觸發 Java 反序列化漏洞
3. 任意代碼以 TeamCity 應用程式伺服器權限執行
4. 攻擊者可修改建立指令碼、將惡意軟體注入編譯二進位、竊取原始碼及秘密

**確認真實世界利用於：**
- 金融服務交易平臺 (原始碼 + 交易演算法竊取)
- 半導體設計公司 (VHDL/Verilog CAD 檔案竊取)
- 醫療軟體供應商 (EHR 代碼 + API 金鑰妥協)

**利用狀況：** 公開 PoC 已發布；利用工具包在地下論壇上提供。

**建議行動：** 立即修補 TeamCity 至 2022.4.45+、2023.1.15+ 或 2024.3+。限制 TeamCity 網路存取至僅限內部。稽核建立成品及日誌以尋找可疑修改。輪換儲存在 TeamCity 中的所有秘密。

🔗 **參考資料：** [JetBrains Security Advisory](https://www.jetbrains.com/help/), [CISA Alert](https://www.cisa.gov/), [BleepingComputer](https://www.bleepingcomputer.com/news/security/jetbrains-teamcity-rce/)

---

## OPSWAT 能提供幫助

Lambda 及 CI/CD 供應鏈攻擊都啟用 **建立成品中毒**：在建立時注入的惡意代碼傳播到下游生產部署。OPSWAT **MetaDefender Multi-Scan** 檢查每個 Lambda 層及建立成品 (JAR、EXE、Docker 映像) 是否有惡意軟體及異常簽署。**Deep CDR** 重建編譯二進位及檔案，提取嵌入的認證及後門酬載。對於整合 Lambda 及 TeamCity CI/CD 的組織，層發布及建立完成時的成品掃描是強制性的。

---

## 本週主動威脅

📌 **RaspberryRobin 蠕蟲透過 USB 傳播復出。** **RaspberryRobin** 蠕蟲先前由 CISA 在 2022 年記錄，透過增強的功能針對 Windows 檔案共享及 USB 驅動器復出。LockBit 3.0、Qilin 及 BlackCat 勒索軟體幫派初始存取向量。企業資料洩露事件激增 280% 周。USB 啟用系統及共享磁碟機最高風險。

🔗 **參考資料：** ([CISA Alert](https://www.cisa.gov/news/2026/09/02/raspberryrobin-worm-usb-outbreak), [BleepingComputer](https://www.bleepingcomputer.com/news/security/raspberryrobin-worm-usb-surge/), [Mandiant Blog](https://www.mandiant.com/resources/blog/raspberryrobin-2026))

📌 **LockBit 3.0 洩露 40GB 汽車供應商資料集；$8M 勒索要求。** **LockBit** 勒索軟體幫派發布從一級汽車零件製造商竊取的 40GB 資料集，暴露車輛設計 CAD 檔案、供應商合約及客戶清單。勒索要求：$8M。攻擊鏈：RaspberryRobin USB 感染 → ProxyShell Exchange 橫向移動 → 網域控制器加密。

🔗 **參考資料：** ([LockBit Gang Blog](https://www.lockbitblog.onion/), [Bleeping Computer](https://www.bleepingcomputer.com/news/security/lockbit-3-0-automotive-leak-8m-ransom/), [Recorded Future](https://www.recordedfuture.com/lockbit-3-automotive-2026))

📌 **CISA KEV 在 24 小時內擴大 8 個零日。** CISA 已知被利用漏洞目錄擴增至 **150 CVE**，加入 CVE-2026-37900 (Palo Alto Networks PAN-OS RCE)、CVE-2026-37901 (Fortinet FortiProxy 認證繞過) 及 CVE-2026-37902 (Apache OFBiz RCE)。已確認跨金融及關鍵基礎設施網路的主動利用。

🔗 **參考資料：** ([CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), [NVD](https://nvd.nist.gov/), [SecurityWeek](https://www.securityweek.com/cisa-kev-zero-day-spike/))

📌 **Palo Alto Networks PAN-OS 認證繞過 (CVE-2026-37900)。** Palo Alto 發布 **PAN-OS CVE-2026-37900** 補丁，這是影響下一代防火牆版本 10.0–11.1 的認證繞過。攻擊者繞過管理員認證；數千個防火牆在 Shodan 上暴露。所有外部對向部署都需立即修補。

🔗 **參考資料：** ([Palo Alto Security Advisory](https://securityadvisories.paloaltonetworks.com/), [Shodan PAN-OS Search](https://www.shodan.io/?query=PAN-OS))

📌 **Fortinet FortiProxy 認證繞過 (CVE-2026-37901)。** Fortinet 發布 **CVE-2026-37901** 補丁，允許攻擊者透過特製 HTTP 標題繞過 Proxy 認證。CVSS 9.0。廣泛部署於企業 Proxy 基礎設施；Mandiant 確認利用。

🔗 **參考資料：** ([Fortinet Advisory](https://www.fortinet.com/blog/threat-research/), [Mandiant](https://www.mandiant.com/resources/blog/))

---

## 供應商風險矩陣

| 供應商 / 資產 | 曝露 | 嚴重性 | CISO 行動 |
|---|---|---|---|
| **AWS Lambda (公開層)** | 密碼礦工/認證竊取注入；AWS 認證竊取 | 關鍵 | 透過 AWS CLI 稽核所有層；撤銷不受信任的層；強制僅限內部層；輪換 AWS 認證 |
| **JetBrains TeamCity (2022–2024)** | 未認證 RCE；建立成品中毒；CI/CD 妥協 | 關鍵 | 修補至 2022.4.45+、2023.1.15+ 或 2024.3+；限制網路存取；稽核成品；輪換秘密 |
| **Windows 系統 (RaspberryRobin)** | USB 蠕蟲；勒索軟體初始存取；檔案共享傳播 | 高 | 停用關鍵系統上的 USB 連接埠；強制群組原則限制；啟用 USB 日誌；掃描空氣隔離備份 |
| **汽車/製造業 OEM** | LockBit 勒索軟體；40GB 資料洩露；設計檔案竊取 | 關鍵 | 分段 CAD 系統；實施空氣隔離備份；審查 LockBit 洩露網站；輪換認證 |
| **Palo Alto Networks PAN-OS (10.0–11.1)** | 認證繞過；無認證的管理員存取 | 關鍵 | 立即修補防火牆；限制管理主控台存取；啟用 MFA；稽核防火牆日誌 |
| **Fortinet FortiProxy** | 透過 HTTP 標題的認證繞過 | 高 | 應用補丁；從不受信任網路分段 Proxy；監控異常標題 |
| **Apache OFBiz** | RCE；ERP 系統妥協；財務資料存取 | 關鍵 | 修補 OFBiz 至最新版本；空氣隔離或停用外部對向實例 |

---

## 董事會談話重點

- **CI/CD 管道現在是主要零日利用目標。** TeamCity、Jenkins 及 GitLab 妥協啟用整個軟體發布程序的單點接管。DevSecOps 及供應鏈軟體掃描必須是董事會批准的投資。
- **USB 蠕蟲傳播表示回到前雲時代攻擊模式。** RaspberryRobin 透過 USB 復出表示空氣隔離網路及實體媒體控制必須視為與雲端安全架構相同的嚴格程度。
- **公開雲市場 (Lambda 層、npm、Docker Hub) 現已是攻擊基礎設施。** 透過共享元件市場的供應鏈妥協需要在每個部署階段進行端對端成品驗證及密碼簽署。
- **網路基礎設施認證繞過漏洞 (防火牆、Proxy) 需要立即回應。** Palo Alto 及 Fortinet 繞過表示管理員認證是關鍵單點故障；冗餘身份驗證及硬體安全金鑰是強制性的。
