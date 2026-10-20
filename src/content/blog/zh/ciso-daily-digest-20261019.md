---
title: "CISO 每日摘要：Google 揭露中國關聯駭客利用 BeyondTrust 零時差漏洞入侵企業網路 (20261019)"
description: "中國關聯組織 ARMORY CASTLE 自 8 月起利用 BeyondTrust Remote Support 零時差漏洞 (CVE-2026-102764) 入侵企業設備並向內網橫向移動;CISA 將此漏洞與一個 Fortinet 漏洞 (CVE-2025-61624) 列入 KEV,訂定 10 月 19 日聯邦機構修復期限。另方面,GhostAction 供應鏈攻擊攻陷 94 個 GitHub 儲存庫,釣魚維護者取得 OAuth 權杖,並植入持久化的 VS Code 字型檔竊取程式,收集雲端與開發人員憑證。"
pubDate: 2026-10-19
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Google 揭露中國關聯駭客利用 BeyondTrust 零時差漏洞入侵企業網路

Google 威脅情報小組 (GTIG) 與 Mandiant 於 10 月 16 日披露,一個被追蹤為 ARMORY CASTLE 的疑似中國關聯間諜組織,利用 BeyondTrust Remote Support 中的零時差漏洞 (CVE-2026-102764,CVSS 4.0 9.3) 入侵企業遠端支援設備並橫向移動至內部網路。該缺陷影響 Remote Support 26.2.3 及更早版本;因未充分驗證傳入訊息來源,導致遠端攻擊者可操控設備上的檔案並取得立足點。

Mandiant 調查發現,ARMORY CASTLE 自 2026 年 8 月下旬起即開始利用該漏洞,部署 SAWFLY 網頁木馬,取得跨重開機的 root 持久化權限,並濫用遭入侵的管理員帳戶,透過 Remote Support 連線橫向進入內部系統,下載軟體清單與其他文件。

BeyondTrust 已於 10 月 9 日為所有 SaaS 客戶套用修補。自行部署的客戶必須手動套用修補程式,或先升級至支援版本 (24.3.1+)。BeyondTrust 與 Mandiant 呼籲組織稽核管理權限變更、遠端工作階段記錄與檔案傳輸,檢視集中式日誌中的橫向存取行為,重建遭入侵設備,並輪換可能外洩的憑證。

### 對 CISO 的影響

- **立即修補並搜索 BeyondTrust Remote Support —** 確認託管實例已套用 BeyondTrust 於 10 月 9 日發布的修補程式。對於自行部署環境,請套用修復方案;24.3.1 版本以下必須先升級。搜尋 SAWFLY 網頁木馬、非預期的 root 持久化、管理帳戶濫用,以及自 8 月下旬起日誌中異常的 Remote Support 工作階段。
- **強制執行 KEV 修復期限並延伸至 Fortinet —** 符合 CISA 針對 CVE-2026-102764 和 CVE-2025-61624 訂定的 10 月 19 日期限;優先修補已觀察到 PeerStitch 投遞活動的 Fortinet 路徑遍歷漏洞。
- **偵測並阻斷 GitHub OAuth 魚叉式釣魚與供應鏈持久化 —** 監控非預期應用程式的 OAuth 裝置流程授權、權杖外洩至外部 IP、VS Code tasks.json 自動執行觸發器、儲存庫中非預期的字型檔寫入;撤銷權杖、輪換祕密、稽核已克隆的儲存庫。

**參考來源:** [Google揭露中國相關駭客利用BeyondTrust零時差漏洞入侵企業內網 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1Fc1YxdkhVS28tOFZnaE9naE0wVzU5R0dxT3NRMV9VTDZSUlZpempDWG9UXzdjNGVzeFFVN1FxUi03QTB2a0M0UlYzSEN4Zw?oc=5>)

---

## 本週活躍威脅

📌 **CISA 將遭活躍利用的 BeyondTrust 與 Fortinet 漏洞列入 KEV 目錄**

CISA 於 10 月 16 日根據活躍利用證據,將兩個漏洞新增至已知遭利用漏洞 (KEV) 目錄:Fortinet 路徑遍歷漏洞 CVE-2025-61624 (由 CL-STA-0954/UNC5820 利用以投遞 PeerStitch 惡意軟體) 以及 BeyondTrust Remote Support 驗證繞過漏洞 CVE-2026-102764 (由 UNC5221/ARMORY CASTLE 利用,詳見 GTIG/Mandiant 披露)。聯邦機構必須於 10 月 19 日前完成修復。

**參考來源:** [BeyondTrust、Fortinet漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0yTzRsOVVWekxwSkJmMkFXUHVQbVFFcXlycjJaMUdNSXR2cGdmMnFkV0FaOURRem16TUdQWjlFcWs5UmQwSFJKV0dsVmttdw?oc=5>) 

---

📌 **GhostAction 供應鏈攻擊在 94 個 GitHub 儲存庫植入認證竊取程式**

OpenSourceMalware 報告,GhostAction 威脅行為者已從注入惡意 GitHub Actions 工作流程,演進為橫跨 94 個儲存庫 (66 位擁有者,15 個已移除) 的多階段供應鏈攻擊。第一階段在釣魚郵件中使用拼寫相似域名 (my-github\[.\]com),反向代理 GitHub 登入以竊取密碼、2FA 代碼,並悄無聲息地授權一個儲存庫範圍的 OAuth 裝置流程權杖 (repo、workflow、read:org),再透過 TCP/8443 外洩給攻擊者。第二階段透過 VS Code tasks.json 的 "runOn: folderOpen" 觸發器實現持久化,開啟資料夾時自動執行藏身於偽造字型檔 (fa-solid-400.woff2) 中的認證竊取程式,蒐集 AWS 金鑰、PyPI/npm 權杖、GitHub 登入、Kubernetes 憑證、SSH 金鑰與 AI 供應商祕密 (Anthropic、Google Gemini),安裝每 5 分鐘執行一次的 cron 作業,並透過 HTTP/8080 外洩資料。若 POST 失敗,備援 CI 工作流程 (lint.yml、ci-check.yml 等) 會將發現上傳至秘密 GitHub Gist。GitHub 於 10 月 9 日開始封鎖惡意工作流程;第二階段酬載在 6 天後出現。研究人員建議從乾淨裝置撤銷 GitHub 權杖、輪換所有可觸及的憑證、稽核儲存庫,並通知下游克隆者。

**參考來源:** [GhostAction Attackers Plant Credential Stealer Disguised as Font in 94 GitHub Repositories](<https://thehackernews.com/2026/10/ghostaction-attackers-plant-credential.html>) 

---

📌 **OpenBSD 修補 37 年前的記憶體漏洞；研究人員揭示權限漏洞利用**

OpenBSD 已修補一個源自 37 年前的記憶體漏洞。研究人員已公開展示可獲得 root 存取權的漏洞利用，確認該漏洞的嚴重性以及長期維護安全性的重要性。

**參考來源:** [OpenBSD修補源自37年前的記憶體漏洞，研究人員已公開取得root權限的攻擊程式 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5qWGduRjllOTh3N1lwWUc4QTZkbThoWDltaXZZZmI3dlNWT3doTUVFSVpLbEJVWC1jaV8yWnQ3VFFMTllHLU5hWEQwRG10dw?oc=5>) 

---

📌 **Adobe Commerce 危急漏洞 BlockStrap 允許任意程式碼執行**

Adobe Commerce 面臨名為 BlockStrap 的危急漏洞。此漏洞可能讓攻擊者直接在伺服器上執行任意程式碼，對電子商務營運構成重大風險。建議用戶儘快套用安全更新。

**參考來源:** [Adobe Commerce重大漏洞BlockStrap恐讓攻擊者直接在伺服器執行任意程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBiOEVtZHpxRTNHVDU3T3hWTHQ4MG1pSTBNZ05PdTJhWlg4NHRMRVBaRzlreTBQb2l5UlR0NmptT2NES0RoZGVpckdBMndqUQ?oc=5>) 

---

📌 **Arch Linux 軟體市集出現惡意套件，攻擊者藉此散布惡意程式以取得 root 權限 - iThome**

Arch Linux 軟體市集出現惡意套件，攻擊者藉此散布惡意程式以取得 root 權限。

**參考來源:** [Arch Linux軟體市集出現惡意套件，攻擊者藉此散布惡意程式以取得root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Uak04NTNmWFNVY04tOTdnZ3ZkRzF5QmV4UXR2WjNvZU9nMGlYbmhvRmFmQXQ2aUM5MFhxNTloZVAxanVvd1dORURld3dpdw?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)
