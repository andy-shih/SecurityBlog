---
title: "CISO 每日摘要：美國法官擋下五角大廈將 Anthropic 列為供應鏈黑名單 — 裁定「違法且無據」 (20260828)"
description: "美國聯邦法官裁定五角大廈將前沿 AI 業者 Anthropic 列入供應鏈黑名單屬「違法且無據」，此前國防部以供應鏈風險為由將其剔出供應體系。同日重大漏洞：PaperCut NG/MF 零日漏洞遭實際利用（尚無 CVE，v25/v26 緊急修補）、三個 CVSS 10.0 的 ServiceNow 漏洞（CVE-2026-18885、CVE-2026-18886、CVE-2026-74820）、APT28 的 HOOKEDGE 後門鎖定歐洲政府與外交機構、Unitree G1 EDU 機器人 root RCE（CVE-2026-76639 / CVE-2026-76640），以及 cPanel WHM 奪取 root 的漏洞（CVE-2026-65643）。"
pubDate: 2026-08-28
tags: [Anthropic, 供應鏈風險, 零日漏洞, PaperCut, ServiceNow, APT28, Unitree, cPanel, CVE-2026-18885, CVE-2026-65643]
author: "Security Solutions Team"
featured: true
---

## 發生了什麼事

8 月 27 至 28 日，美國聯邦法官裁定五角大廈將 **Anthropic** 列入黑名單屬「違法且無據」，阻止國防部將這家前沿 AI 實驗室視為遭禁供應商。國防部此前以 **供應鏈風險** 為由將 Anthropic 納入黑名單（此即本案與資安最直接的連結），起因是 Anthropic 公開批評政府的 AI 出口管制立場。法院認定該列管逾越法定權限，且未給予業者正當程序。Reuters、The Guardian、Al Jazeera、CBS News 等超過 30 家媒體在今日的資訊流中報導此判決。

### 這對 AI 供應鏈治理的深遠影響

本案為政府如何在前述採購與 **供應商風險架構** 中歸類前沿 AI 業者立下先例。將模型供應商認定為「供應鏈風險」的決定，會直接流入 CISO 為政府機關、受監管產業或國防相關企業所維護的 **供應商風險登錄**，影響哪些以 Claude 為底層的工具、SaaS 與整合能被放行。裁決並未終結底層的政策緊張：出口管制、境內推論（in-country inference）要求，以及以「AI 安全」為由的禁標，都仍是可行的手段。資安主管應將 AI 供應商的資格視為 **變動中的監管目標** 而非靜態控制，並把訴訟與行政命令都視為第三方風險評分的輸入來源。

🔗 **參考資料：** 綜合報導（[The Guardian](https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai)、[Al Jazeera](https://www.aljazeera.com/news/2026/8/28/us-judge-blocks-pentagon-blacklisting-of-ai-firm-anthropic)、[Reuters](https://www.reuters.com/legal/government/us-judge-blocks-pentagons-anthropic-blacklisting-2026-08-28/)）

---

## 本週活躍威脅

📌 **PaperCut NG/MF 零日漏洞遭實際利用（尚未分配 CVE）** — PaperCut 證實 **PaperCut NG 與 MF 全版本** 遭零日攻擊。緊急修補已針對 **v25 與 v26** 釋出；調查持續中，尚無 CVE、根本原因或攻擊者歸因。公布的 IoC：入侵偵測／端點對 PaperCut Application Server 的告警（來自 `pc-app.exe` 的後滲透活動）、`server.log` 被截斷或刪除，以及日誌中的 `ERROR No suitable driver found for jdbc:no:x` / `DatabaseUtils - Database error looking up cardID`。對外暴露的 Application Server 應立即以防火牆或網路存取控制限縮至 **受信任 IP**。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/papercut-zero-day-exploited-in-attacks.html)

📌 **ServiceNow：三個 CVSS 10.0 漏洞可致未授權程式碼執行與 SQL 注入** — 兩個預先授權的程式碼注入漏洞（**CVE-2026-18885**、**CVE-2026-18886**）與一個 SQL 注入漏洞（**CVE-2026-74820**）評分均為 **CVSS 10.0**；另有沙箱逸出漏洞（**CVE-2026-6876**，8.7）與先前揭露的預先授權沙箱逸出（**CVE-2026-6875**）擴大暴露面。受影響實例橫跨多個 Now Platform 修補層級（CVE-2026-18886 為 Australia Patch 5 及更早）。ServiceNow 最初通報 CVE-2026-6875 已有實際利用，隨後發出更正 — CISO 應不論如何確認自身實例的 hot-fix 層級。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/three-cvss-100-servicenow-flaws-could.html)

📌 **APT28 關聯的 HOOKEDGE 後門鎖定歐洲政府與外交機構** — 代號 **HOOKEDGE** 的後門經評估與俄羅斯 APT **APT28（Fancy Bear）** 有關，正針對歐洲政府與外交機構從事間諜活動。該活動沿用 APT28 一貫手法：以外交／外交部釣魚與憑證濫用為手段。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/apt28-linked-hookedge-backdoor-targets.html)

📌 **Unitree G1 EDU 人形機器人：兩個漏洞可致 root RCE（其一經藍牙發動）** — 研究人員 Olivier Laflamme 揭露 **CVE-2026-76639**（網路相鄰路徑穿越，經 `chat_go` 抵達 `bashrun`，於 Locomotion PC 取得 root RCE）與 **CVE-2026-76640**（BLE 寫入鏈接受 bootstrap 互動，同樣取得 root）。兩者皆鎖定教育版人形機器人的 Locomotion PC；需實體／鄰近或網路相鄰存取。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/two-unitree-g1-edu-humanoid-robot-flaws.html)

📌 **cPanel WHM 奪 root 漏洞：單一託管用戶可接管整台伺服器** — **CVE-2026-65643** 是 **cPanel WHM** 中影響所有受支援版本的低權限／未授權漏洞，可讓單一託管用戶提升至整台伺服器的 **root**；8 月 28 日揭露，尚無公開紀錄。相關的 cPanel／LiteSpeed 外掛漏洞已在 **CISA KEV** 中：CVE-2026-48172（LiteSpeed 外掛權限提升）、CVE-2026-54420（符號連結追隨）、CVE-2026-58048／58047（7 月 31 日）、CVE-2026-41940（4 月認證 bypass，已知遭利用）。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/08/critical-cpanel-flaw-could-let-one.html)

📌 **Veeam ONE 重大漏洞可強制 SMB 認證** — **CVE-2026-65641** 位於 **Veeam ONE** 13.1，可讓攻擊者強制服務帳號進行 SMB 認證脅迫；Veeam 已於 KB4892 修復。此項與今日備份／監控基礎設施的更大規模緊急修補潮一併追蹤。

🔗 **參考資料：** [Veeam KB4892](https://www.veeam.com/kb4892)

---

## OPSWAT可以怎麼幫上忙

今日的多項威脅屬 **檔案與修補遞送型**，直接對應 OPSWAT 的 MetaDefender 防護姿態：

- **PaperCut / ServiceNow / Veeam / cPanel 的緊急修補** 皆以安裝程式、hot-fix 二進位與更新套件形式散布。MetaDefender **多重掃描**（30+ 引擎）可在修補檔進入伺服器前驗證其完整性，並攔截遭植入木馬或供應鏈替換的二進位。
- **CDR（內容去毒與重建）** 可清除流經郵件與網頁上傳的文件、腳本與壓縮檔中的主動內容 — 這正是 APT28 外交釣魚鏈，以及武器化更新套件的主要投遞載體。
- **供應商風險／第三方引入**：MetaDefender 可針對進入環境的第三方 AI 供應商與 SaaS 成品進行掃描，呼應 Anthropic 裁定所凸顯的「供應商資格變動中」問題。
