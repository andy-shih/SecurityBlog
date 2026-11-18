---
title: "CISO 每日摘要：駭客利用影響企業管理伺服器的關鍵 Puppet RCE 漏洞 (20261118)"
description: "補刊選刊：收錄原定期數的部分資安新聞及其來源。"
pubDate: 2026-11-18
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 今日資安新聞速覽

補刊選刊：收錄原定期數的部分資安新聞及其來源。

### 📌 駭客利用影響企業管理伺服器的關鍵 Puppet RCE 漏洞

由於有主動利用的報告，CISA 已將 Perforce Puppet 中的一個關鍵反序列化漏洞列入其已知被利用漏洞（KEV）目錄。該漏洞編號為 CVE-2026-115731，CVSS 分數為 9.4，存在於該平台的報告處理程式碼中。擁有 CA 簽署代理憑證的攻擊者可以透過 PUT 請求提交精心建構的 rich-data 類型，進而在 Puppet Server 上執行任意程式碼。

如果憑證授權單位（CA）缺乏強大的驗證機制，該漏洞的風險將會放大，因為攻擊者有可能藉此入侵 CA。此類入侵可能允許未經身分驗證的網路攻擊者取得有效憑證並利用伺服器。安全研究人員指出，在 Puppet 伺服器上取得遠端程式碼執行權限後，攻擊者可以奪取 CA 簽署金鑰，進而便於在整個基礎設施中冒充其他主機。

受影響的版本包括 Puppet Enterprise 2026.0.0、2025.0.0 和 2023.8.0，以及 Puppet Core 9.0.0 和 8.x。該漏洞也延伸至 Puppet 的開源實作版本 OpenVox。由於 Puppet 通常對大量企業系統擁有高層級的存取權限，成功的利用可能導致勒索軟體部署、大規模數據外洩，或在網路內進行重大的橫向移動。

**原始來源:** [Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>)

### 📌對 CISO 的影響

- **基礎設施管理風險 —** 入侵如 Puppet 等中央編排工具可能會賦予攻擊者對整個伺服器集群的完整控制權，因此必須立即修補組態管理平台。
- **供應鏈完整性 —** 熱門 PyPI 套件遭入侵的情況凸顯了嚴格執行相依性版本鎖定（dependency pinning）以及監控 CI/CD 流水線是否存在未經授權憑證外洩行為的必要性。
- **執行環境安全性 —** 核心執行環境（如 OpenJDK）中的漏洞需要仔細評估特定硬體的優化指令，並及時更新 Java 發行版以防止 RCE。

---

### 📌 攻擊者入侵 Microsoft 的 agent-framework PyPI 套件以竊取雲端憑證

已發現 Microsoft agent-framework PyPI 套件的惡意版本 1.26.1 和 1.26.2 包含憑證竊取程式。受害版本利用 Python 啟動鉤子（透過 .pth 檔案），使其在每次 Python 解釋器啟動時都能自動執行惡意程式碼，無論該套件是否被明確匯入。該惡意軟體針對環境變數、Azure CLI 憑證、GitHub Actions OIDC 權杖以及 Azure 受管理身分權杖，並將收集到的數據外洩至遠端 webhook。

**原始來源:** [Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials](<https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html>)

---

### 📌 導致遠端程式碼執行的 OpenJDK 漏洞 (CVE-2026-114938)

Calif 的安全研究人員揭露了 OpenJDK 中的一個記憶體損壞漏洞，被稱為「Java4Shell」（CVE-2026-114938），該漏洞影響 Base64 解碼優化。當在處理特定 AVX-512 VBMI 指令的 x86-64 處理器上執行時，該漏洞可能允許遠端攻擊者竊取敏感記憶體資訊或執行任意程式碼。雖然 JPCERT/CC 尚未確認有主動利用的情況，但研究人員已在 Keycloak、Jenkins 和 Atlassian Jira 等應用程式中演示了未經身分驗證的 RCE。

**原始來源:** [お知らせ：CyberNewsFlash「OpenJDKにおけるリモートコード実行につながる脆弱性（CVE-2026-114938）について」](<https://www.jpcert.or.jp/newsflash/2026111801.html>)

<!-- ciso-revision:ciso-20261118-1-available-1795038468497 -->
