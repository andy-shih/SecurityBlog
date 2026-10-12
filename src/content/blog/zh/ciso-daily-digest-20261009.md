---
title: "CISO 每日摘要：Citrix 修補重大 NetScaler 記憶體溢位漏洞，防範 SAML 部署遭 RCE 攻擊 (20261009)"
description: "重大 NetScaler 遠端代碼執行威脅、國家級間諜攻擊與亞洲企業資安外洩事件，要求防禦團隊迅速採取應變作為。"
pubDate: 2026-10-09
tags: ["citrix","flax-typhoon","cisa-kev","jpcert","data-breach","anydesk","dns-hijacking","cctltd"]
author: "Security Solutions Team"
featured: true
---

## Citrix 修補重大 NetScaler 記憶體溢位漏洞，防範 SAML 部署遭 RCE 攻擊

Citrix 正式發布資安更新，修補位於 NetScaler ADC 與 Gateway 的重大記憶體溢位漏洞 CVE-2026-107406。該漏洞 CVSS 風險評分高達 9.5，可導致未經身分驗證的遠端代碼執行或阻斷服務攻擊。

此項安全威脅主要影響配置為 SAML 身分識別提供者或服務提供者的設備。攻擊者無須預先取得憑證，即可利用未修補的邊界驗證設備執行任意指令，對企業核心存取防線與身分驗證架構構成極大衝擊。

Citrix 已針對 14.1 與 13.1 等版本發布修補軟體，並提醒混合式安全私有存取架構亦受牽連。企業資安團隊應立即清查內部 SAML 設定，並加速部署最新版本以防禦滲透風險 。

### 資安長戰略指引：企業邊界防護與身分鑑別安全策略

- **即刻清查並修補邊界身分驗證閘道 —** 全面檢視啟用 SAML 的 NetScaler 設備，盡速升級至 14.1-73.46 或 13.1-64.29，防堵未授權遠端代碼執行。
- **強化對外系統以阻斷國家級間諜攻擊鏈 —** 依據 CISA KEV 清單加速修補舊版對外服務軟體，落實縱深防禦，防止攻擊者建立長期潛伏通道。
- **嚴格控管內部管理系統與 API 存取權限 —** 針對內部商業智慧工具與管理 API 實施 IP 白名單與多因素驗證，防範身分竊取與未授權資料外洩。

**參考來源:** [Citrix 修補程式es Critical NetScaler Flaw That Could Enable RCE in SAML Deployments](<https://thehackernews.com/2026/10/citrix-patches-critical-netscaler-flaw.html>)

---

## 本週活躍威脅
📌 **Flax Typhoon 積極濫用舊版漏洞，CISA 頒布聯邦機構限期修補指令**

CISA 將 ProFTPD、ONLYOFFICE 及 Apache Struts 等五項已知漏洞納入 KEV 清單。中國背景的 Flax Typhoon 透過掃描與憑證噴灑攻擊外洩敏感資料，促使多國發布聯合資安警告 。

**參考來源:** [Flax Typhoon Exploits Five Flaws as CISA Sets October 11 Deadline for Federal Agencies](<https://thehackernews.com/2026/10/flax-typhoon-exploits-five-flaws-as.html>)

📌 **南韓金融機構接連爆發個資外洩，主管機關下令展開全面資安徹查**

南韓多家銀行與消費金融業者相繼遭駭客入侵並流出數萬筆客戶資料，金融服務委員會隨即召開緊急會議，要求全面清查外部連結系統之身分驗證與權限管理缺失 。

**參考來源:** [金融機構接連爆發資料外洩案，韓國政府要求徹查 - iThome](<https://www.ithome.com.tw/news/179497>)

📌 **JPCERT 發布緊急預警，日本企業內部管理系統頻遭非法入侵與竊密**

日本眾多組織近期遭駭客鎖定，攻擊者透過 API 漏洞、設定不當及 Metabase 注入缺陷，入侵商業智慧工具與管理伺服器植入 Web Shell 並竊取個資，JPCERT 呼籲儘速盤點排查 。

**參考來源:** [注意喚起: 直近で相次いでいる國内組織における不正アクセスに関する注意喚起 \(更新\)](<https://www.jpcert.or.jp/at/2026/at260030.html>)

📌 **AnyDesk Linux 釋出預先認證攻擊程式，攻擊者可遠端奪取 Root 權限**

資安研究人員公開 AnyDesk Linux 堆疊緩衝區溢位漏洞 AnyPwn 概念驗證工具。攻擊者可於連線核准前直接取得 Root 權限，管理員應盡速升級至 8.0.3 以上版本 。

**參考來源:** [Researchers Publish Working Exploit for Pre-Auth AnyDesk Linux Flaw That Gives Root Access](<https://thehackernews.com/2026/10/researchers-publish-working-exploit-for.html>)

📌 **國家代碼頂級網域名稱註冊機構遭入侵，攻擊者偽造知名企業數位憑證**

駭客鎖定迦納、美屬薩摩亞等 ccTLD 註冊機構篡改權威 DNS 紀錄，非法簽發 Google 網域名稱之 HTTPS 憑證。Google 與憑證機構已緊急撤銷相關異常憑證以阻斷中間人監聽 。

**參考來源:** [Attackers Hijack .gh, .sl, and .as Registries to Obtain Certificates for Google Domains](<https://thehackernews.com/2026/10/attackers-hijack-gh-sl-and-as.html>)