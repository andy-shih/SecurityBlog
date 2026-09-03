---
title: "CISO 每日摘要：Ivanti Connect Secure 零日浪潮與 Oracle Fusion 雲端漏洞 (20260903)"
description: "Ivanti Connect Secure 披露 CVE-2026-38012，未認證 pre-auth RCE 啟用 50,000+ 應用程式 VPN 閘道妥協；CVSS 9.8。Oracle Fusion Cloud 漏洞 CVE-2026-38234 啟用提權及多租戶資料存取；影響 200+ SaaS 客戶包括 Fortune 100。APT28 針對金融部門 VPN；Conti 勒索軟體變種利用 Connect Secure。OPSWAT MetaDefender 對 VPN 應用程式韌體完整性及雲端 API 流量檢查至關重要。"
pubDate: 2026-09-03
tags: [Ivanti, Connect-Secure, Oracle-Fusion, CVE-2026, VPN, APT28, Ransomware, Cloud-Security, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## 執行摘要

- **Ivanti Connect Secure 未認證 RCE (CVE-2026-38012)：** Pre-auth 遠端程式碼執行影響 Connect Secure 22.x–23.x，啟用來自不受信任網路的 VPN 閘道妥協。CVSS 9.8。全球估計部署 50,000+ 應用程式。無需認證；利用微不足道。快速修復至關重要。
- **Oracle Fusion Cloud 提權鏈 (CVE-2026-38234)：** 漏洞啟用認證攻擊者升級權限及跨 200+ SaaS 客戶環境存取多租戶資料。CVE-2026-38234 + CVE-2026-38235 (工作階段固定) 鏈允許租戶資料庫之間的橫向移動。Fortune 100 組織受影響。
- **APT28 針對金融部門 VPN：** 俄羅斯國家級組織 APT28 針對美國及歐洲金融機構中的 Ivanti Connect Secure 應用程式發動協調活動。已確認資料竊取 + 認證竊取。CISA 發布妥協指標。
- **Conti 勒索軟體即服務運營商利用 Ivanti 漏洞：** Conti 幫派部署 Connect Secure 漏洞以建立 VPN 持久化及網域控制器存取。勒索要求激增；受害者無法存取公司網路數週。
- **CISA 發布 VPN 閘道漏洞緊急通知。** 統一通知涵蓋 Ivanti、Fortinet FortiGate、Palo Alto PAN-OS 及 Cisco ASA—過去 72 小時內 13 個 VPN/網路邊緣產品關鍵漏洞。

## Ivanti Connect Secure Pre-Auth RCE — CVE-2026-38012，CVSS 9.8

Ivanti **Connect Secure** VPN 閘道包含 **關鍵 pre-auth 遠端程式碼執行** (CVE-2026-38012，CVSS 9.8)，啟用攻擊者在無認證認證的情況下在應用程式上執行任意代碼。漏洞位於 SSL VPN 服務的要求處理邏輯；特製 HTTP 要求繞過認證檢查並觸發任意代碼執行。

**攻擊流程：**
1. 攻擊者向 Connect Secure 外部對向入口發送特製 HTTP 要求
2. 要求繞過 pre-auth SSL/TLS 檢查
3. 任意指令以系統權限 (root/SYSTEM) 執行
4. 攻擊者安裝後門、竊取 VPN 認證、樞紐轉向內部網路

**實際世界範圍：**
- 全球部署 50,000+ Ivanti Connect Secure 應用程式
- 金融機構、醫療提供者、政府機構及 Fortune 500 科技公司最高風險
- VPN 閘道通常直接存取網域控制器、檔案伺服器及敏感內部系統
- 一個受損應用程式 = 攻擊者的全面內部網路存取

**利用狀況：** 公開 PoC 已發布；APT28、Conti 及刑事勒索軟體幫派在野外利用已確認。

**建議行動：** **需要立即緊急回應：**
1. 將所有 Ivanti Connect Secure 應用程式與不受信任網路隔離 (空氣隔離或使用額外認證層前端)
2. 立即修補至 Connect Secure 24.1+ (韌體必須從頻外來源更新，不透過應用程式管理主控台)
3. 輪換所有 VPN 使用者認證及網域控制器服務帳戶
4. 啟用 VPN 存取日誌及內部網路流量的 24/7 監控
5. 如果應用程式已外部曝露，假設遭破壞；所有內部系統需要鑑識分類

🔗 **參考資料：** [Ivanti Security Advisory](https://www.ivanti.com/blog/security-advisory-connect-secure), [CISA Alert](https://www.cisa.gov/news/2026/09/03/ivanti-connect-secure-emergency-alert), [Mandiant APT28 Profile](https://www.mandiant.com/resources/reports/apt28-profile)

---

## Oracle Fusion Cloud 提權鏈 — CVE-2026-38234 & CVE-2026-38235

Oracle **Fusion Cloud 應用程式** (ERP、HCM、SCM) 包含 **提權漏洞鏈**，啟用認證攻擊者升級權限及存取多租戶資料。CVE-2026-38234 (不足工作階段驗證) 結合 CVE-2026-38235 (工作階段固定漏洞) 允許攻擊者代理管理員身份及存取相鄰租戶資料庫。

**攻擊情景：**
1. 攻擊者獲得低權限 Fusion Cloud 使用者帳戶 (員工、承包商或合作夥伴)
2. 攻擊者透過 CVE-2026-38235 製造工作階段固定酬載
3. 工作階段透過 CVE-2026-38234 被劫持並升級至管理員
4. 攻擊者存取多租戶環境、竊取客戶資料、修改財務或竊取智慧財產

**實際世界影響：**
- 使用 Oracle Fusion Cloud 的 200+ SaaS 客戶受影響
- 使用 Fusion 進行 ERP、薪資及供應鏈管理的 Fortune 100 組織易受攻擊
- 受影響雲端實例上的 **多租戶資料隔離保證違反**
- 如果存取客戶資料，潛在合規違反 (SOX、HIPAA、GDPR)

**利用狀況：** 無確認主動利用，但漏洞簡單明瞭；客戶報告表明威脅行為者的內部偵察。

**建議行動：**
1. 立即應用 CVE-2026-38234 和 CVE-2026-38235 的 Oracle 補丁
2. 稽核 Fusion Cloud 存取日誌以查找可疑工作階段活動 (2026-08-20 至現在)
3. 重設所有管理及高權限 Fusion Cloud 使用者的密碼
4. 對所有 Fusion Cloud 存取啟用多因子認證 (MFA)
5. 檢視 Oracle Fusion Cloud 稽核日誌以查找資料匯出活動

🔗 **參考資料：** [Oracle Security Advisory](https://www.oracle.com/security-alerts/), [CISA Alert](https://www.cisa.gov/news/2026/09/03/oracle-fusion-cloud-multi-tenant-isolation-flaw), [SecurityWeek](https://www.securityweek.com/oracle-fusion-cloud-cve-2026-38234/)

---

## OPSWAT 能提供幫助

Ivanti 及 Oracle 漏洞都妥協 **網路周邊及雲端身份基礎設施。** Ivanti VPN 閘道是關鍵瓶頸—韌體完整性驗證及惡意酬載偵測至關重要。Oracle Fusion Cloud API 流量包含敏感財務及 HR 資料；OPSWAT **MetaDefender Multi-Scan** 檢查雲端 API 酬載及工作階段權杖以查找異常模式。**Deep CDR** 重建 API 回應及工作階段資料，偵測提權指紋。對於管理 VPN 應用程式及雲端 ERP 系統的組織，韌體 + API 檢查是強制性的。

---

## 本週主動威脅

📌 **APT28 針對美國及歐洲金融部門發動協調 VPN 活動。** 俄羅斯國家級組織 **APT28** (Fancy Bear) 針對美國及歐洲金融機構中利用 Ivanti Connect Secure 漏洞 (CVE-2026-38012) 發動協調活動。已確認資料竊取 (帳號號碼、電子轉帳日誌、客戶 PII) + 認證竊取。CISA 發布妥協指標。

🔗 **參考資料：** ([CISA IoCs](https://www.cisa.gov/news/2026/09/03/apt28-ivanti-iocs), [Mandiant](https://www.mandiant.com/resources/blog/apt28-ivanti-campaign), [Recorded Future](https://www.recordedfuture.com/apt28-2026))

📌 **Conti 勒索軟體即服務運營商利用 VPN 漏洞進行持久化。** **Conti** 幫派部署 Ivanti 及 Palo Alto 防火牆漏洞以建立 VPN 閘道後門及網域控制器存取。勒索要求升級至 **$10M+**；受害者報告營運停運數週。供應鏈目標包括汽車、製造及金融服務。

🔗 **參考資料：** ([Conti Gang Blog](https://www.conti-blog.onion/), [BleepingComputer](https://www.bleepingcomputer.com/news/security/conti-ransomware-ivanti-exploit/), [Mandiant Threat Intel](https://www.mandiant.com/resources/blog/conti-2026))

📌 **Cisco ASA 及 FTD 關鍵漏洞 (CVE-2026-38890、CVE-2026-38891) 添加至 CISA KEV。** 影響自適應安全應用程式及防火牆威脅防禦的兩個新 Cisco 漏洞；合併 CVSS 9.5。已確認主動利用。外部對向應用程式需立即修補。

🔗 **參考資料：** ([Cisco Security Advisory](https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/CVE-2026-38890), [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog))

📌 **Palo Alto Networks PAN-OS CVE-2026-38901 pre-auth RCE。** Palo Alto 披露 **CVE-2026-38901**，透過形式錯誤認證權杖影響 PAN-OS 10.0–11.1 的未認證 RCE。CVSS 9.9。Shodan 上暴露數千個防火牆；APT28 利用已確認。緊急補丁必需。

🔗 **參考資料：** ([Palo Alto Advisory](https://securityadvisories.paloaltonetworks.com/), [Shodan PAN-OS](https://www.shodan.io/?query=PAN-OS))

📌 **Confluence Server RCE 漏洞 (CVE-2026-39002) 遭主動利用。** Atlassian Confluence 披露 **CVE-2026-39002**，未認證 RCE 影響現場 Confluence 部署，透過範本注入。CVSS 9.8。利用工具包可用；敦促企業修補或遷移至雲端。

🔗 **參考資料：** ([Atlassian Security Advisory](https://www.atlassian.com/security/advisory/), [BleepingComputer](https://www.bleepingcomputer.com/news/security/atlassian-confluence-rce-cve-2026-39002/))

---

## 供應商風險矩陣

| 供應商 / 資產 | 曝露 | 嚴重性 | CISO 行動 |
|---|---|---|---|
| **Ivanti Connect Secure (22–23.x)** | 未認證 pre-auth RCE；VPN 閘道接管；內部網路存取 | 關鍵 | 緊急：空氣隔離應用程式；修補至 24.1+；輪換 VPN/網域認證；24/7 日誌監控 |
| **Oracle Fusion Cloud** | 多租戶資料存取；提權；合規違反 | 關鍵 | 應用 CVE-2026-38234/38235 補丁；稽核存取日誌；重設管理員密碼；啟用 MFA |
| **Cisco ASA/FTD (CVE-2026-38890/38891)** | 關鍵 RCE；網路邊緣妥協 | 關鍵 | 立即修補；限制管理員存取；啟用加密管理通道 |
| **Palo Alto PAN-OS (10.0–11.1)** | 未認證 pre-auth RCE | 關鍵 | 緊急補丁；使用額外認證前端；監控所有外部連線 |
| **Atlassian Confluence (現場)** | 透過範本注入的未認證 RCE | 關鍵 | 修補至最新版本或遷移至雲端；如未修補則停用範本功能 |
| **VPN 基礎設施 (總計)** | 跨多個供應商的網路周邊妥協 | 關鍵 | 假設遭破壞；所有網路活動鑑識分類；分段內部網路；部署網路分段應用程式 |

---

## 董事會談話重點

- **VPN 閘道漏洞現在是國家級優先目標。** APT28、Conti 及刑事幫派同時利用 Ivanti 及 Palo Alto 漏洞表示 VPN 基礎設施是 #1 初始存取向量。硬體安全應用程式必須視為與身份提供者同等的關鍵。
- **多租戶雲端隔離故障是「無聲破產」。** Oracle Fusion Cloud CVE-2026-38234 違反 SaaS 資料隔離保證；如果存取客戶資料，漏洞通知及合規罰款串級。雲端供應商稽核頻率及安全控制應季度性審視。
- **72 小時內 13 個 VPN/防火牆關鍵漏洞表示協調披露或供應鏈活動。** CISA 跨 Ivanti、Fortinet、Palo Alto 及 Cisco 統一通知表明協調研究者活動或國家級功能匯出。組織必須假設所有 VPN 閘道都遭受主動探測。
- **勒索軟體幫派現在是企業 IT 營運團隊。** Conti 的基礎設施 + APT28 的 APT 武裝化 + VPN 持久化功能 = 精悍國家級等效營運。事件回應預算及網路保險政策必須反映企業級對手，而不是指令碼小子。
