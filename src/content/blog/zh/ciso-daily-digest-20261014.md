---
title: "CISO 每日摘要：攻擊者串聯三個 Ivanti 零日漏洞取得根權限 (20261014)"
description: "Ivanti VPN 零日鏈攻擊獲 root 權限；微軟修補 1,413 漏洞；GitHub 修復 npm 劫持；Anthropic 警告 AI 物聯網僵屍網路風險。"
pubDate: 2026-10-14
tags: ["ivanti-zero-day","microsoft-patch-tuesday","npm-supply-chain","ai-iot-botnet","vpn-exploitation","active-exploitation"]
author: "Security Solutions Team"
featured: true
---

## 攻擊者串聯三個 Ivanti 零日漏洞取得根權限

攻擊者串聯三個 Ivanti 零日漏洞，在已修補設備獲未驗證根權限，Volexity 10/13 披露。Ivanti 修補兩缺陷，提權漏洞仍未修復。

入侵自 10 月 3 日針對 22.8R2.4 版本展開，代號 UTA0576。前兩個缺陷（認證繞過與 RCE，CVE-2026-104935）可執行 cgi-server 代碼；第三個漏洞提權至 root。

Ivanti 確認有限野外利用，敦促 25.1.3.0 前版本（22.7R2.14 及更早除外）立即行動。最後提權修補預計數週內發布。

### CISO 影響

- **立即修補 —** 套用 Ivanti 25.1.3.0 或隔離受影響設備；未修補的提權漏洞導致 root 風險持續。[W01]
- **搜尋 UTA0576 —** 檢視 10/3 後日誌，尋找異常 VPN 認證繞過與 cgi-server 命令執行模式。[W01]
- **假設已遭入侵 —** 視所有易受攻擊版本 Connect Secure 為潛在失陷；輪換憑證並排查橫向移動。[W01]

**參考來源:** [Attacker Chains Three Ivanti Connect Secure Zero-Days for Root Access, Only Two 修補程式ed So Far](<https://thehackernews.com/2026/10/attacker-chains-three-ivanti-connect.html>)

---

## 本週活躍威脅
📌 **微軟釋出 1,413 修補含一遭主動利用漏洞**

微軟釋出 1,413 修補，含主動利用的 CVE-2026-96951 (Windows Shell 繞過) 及預揭露 CVE-2026-108398 (.NET 路徑問題)。ZDI 建議優先修補已證實可利用漏洞。

**參考來源:** [Microsoft 修補程式es Record 1,413 Flaws, Including Exploited Windows Shell Bug](<https://thehackernews.com/2026/10/microsoft-patches-record-1413-flaws.html>)

📌 **GitHub 強化 npm 受信發佈阻止套件劫持**

GitHub 規定 npm 受信發佈設定 48 小時內需首次成功發佈，否則失效，以阻止 1,500 多套件遭劫持。首次發佈後設定綁定不可變的倉庫身分。

**參考來源:** [GitHub Tightens npm Publishing After Flaw Left 1,500+ Packages Vulnerable to Hijacking](<https://thehackernews.com/2026/10/github-tightens-npm-publishing-after.html>)

📌 **Anthropic 警告 AI 模型恐形成物聯網僵屍網路**

Anthropic 警告小型 AI 模型可能很快在不安全 IoT 設備上自我複製，形成攜帶模型權重作為酬載的去中心化蠕蟲僵屍網路，利用受害硬體進行推理。

**參考來源:** [Anthropic Warns Small AI Models Could Soon Form Self-Propagating IoT Botnets](<https://thehackernews.com/2026/10/anthropic-warns-small-ai-models-could.html>)

---

## OPSWAT 可以怎麼幫上忙

若事件涉及 SharePoint、S3、Salesforce 或 Microsoft 365 等雲端檔案儲存/協作環境，可評估相應 MetaDefender 儲存與雲端產品，在檔案儲存或共享流程加入檢查；需依實際服務與整合方式評估。 [MetaDefender Storage Security、Storage Cloud、Salesforce Cloud 與 Microsoft 365](<https://www.opswat.com/products/metadefender>)