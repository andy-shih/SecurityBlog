---
title: "CISO 每日摘要：PoeLLM 惡意軟體感染 3,400 台以上伺服器擴展加密貨幣挖礦機器人網絡 (20261008)"
description: "PoeLLM 惡意軟體感染 3,400 台以上伺服器；LMCache 嚴重漏洞無修補；ccTLD 憑證劫持與 npm 供應鏈惡意套件威脅企業安全。"
pubDate: 2026-10-08
tags: ["poellm-botnet","llm-infrastructure","lmcache-rce","certificate-hijack","supply-chain","npm-malware","ssrf","ai-security"]
author: "Security Solutions Team"
featured: true
---

## PoeLLM 惡意軟體感染 3,400 台以上伺服器擴展加密貨幣挖礦機器人網絡

PoeLLM 惡意軟體自 2026 年 4 月起感染逾 3,400 台伺服器，將 C2 地址藏於 GitHub 詩歌中躲避偵測。

Canto Incognito 攻擊鎖定企業 LLM 部署，包含 LiteLLM、Gotenberg、Gitea 與 Ivanti Sentry，橫跨美歐。

受感染伺服器轉為掃描與滲透節點，攻擊者透過暴力破解橫向移動并感染更多企業系統。

### CISO 應對建議

- **隔離 LLM 端點 —** 隔離並監控所有對外 LLM 端點，檢查是否存在異常 C2 流量模式。
- **立即修補 LMCache —** 確認 LMCache 部署未綁定可路由地址，立即採取存取限制措施。
- **審查域名控制 —** 審查 DNS 記錄與憑證透明度日誌，偵查 .gh、.sl、.as 域名未授權變更。

**參考來源:** [PoeLLM Malware Infects 3,400+ Servers to Expand Crypto Mining Botnet](<https://thehackernews.com/2026/10/poellm-malware-infects-3400-servers-to.html>)

---

## 本週活躍威脅
📌 **未修補 LMCache 嚴重漏洞使未驗證攻擊者可遠端執行程式碼**

LMCache 嚴重未驗證 RCE（CVSS 9.8）影響 vLLM 部署，截至 10 月 7 日無修補程式。

**參考來源:** [Un修補程式ed Critical LMCache Flaw Lets Unauthenticated Attackers Run Code Remotely](<https://thehackernews.com/2026/10/unpatched-critical-lmcache-flaw-lets.html>)

📌 **攻擊者劫持 .gh、.sl、.as 註冊機構取得 Google 域名憑證**

攻擊者劫持 .gh、.sl、.as 註冊機構，於 9 月 22 至 27 日為 Google 域名頒發 12 張未授權憑證。

**參考來源:** [Attackers Hijack .gh, .sl, and .as Registries to Obtain Certificates for Google Domains](<https://thehackernews.com/2026/10/attackers-hijack-gh-sl-and-as.html>)

📌 **八個惡意 npm 套件下載 40,767 次傳播 Overlord RAT 與竊盜程式**

八個惡意 npm 套件下載量達 40,767 次，透過三路徑傳播 Overlord RAT 與資訊竊盜程式。

**參考來源:** [Eight Malicious npm Packages Downloaded 40,767 Times Deliver Overlord RAT and Stealer](<https://thehackernews.com/2026/10/eight-malicious-npm-packages-downloaded.html>)

📌 **SonicWall 修補 SMA1000 閘道器 CVSS 10.0 事前驗證 SSRF 漏洞**

SonicWall 修補 SMA1000 閘道器 CVSS 10.0 事前驗證 SSRF 漏洞，允許未驗證存取內部網路。

**參考來源:** [SonicWall 修補程式es CVSS 10.0 Pre-Authentication SSRF Flaw in SMA1000 Appliances](<https://thehackernews.com/2026/10/sonicwall-patches-cvss-100-pre.html>)

📌 **Anthropic 收緊 Claude 網路安全防護等級**

Anthropic 將 Glasswing 合併為分層網路安全驗證計畫，限制高階網路安全 LLM 的存取權限。

**參考來源:** [Anthropic Gives Vetted Defenders Fewer Claude Guardrails - Dark Reading](<https://www.darkreading.com/vulnerabilities-threats/anthropic-vetted-defenders-claude-guardrails>)

---

## OPSWAT 可以怎麼幫上忙

若報導涉及命令與控制、橫向移動或惡意網路流量，MetaDefender NDR 可補充網路層的威脅可視性與調查線索；成效取決於可觀測流量和部署範圍。 [MetaDefender NDR](<https://www.opswat.com/products/metadefender>)