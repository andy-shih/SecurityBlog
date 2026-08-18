---
title: "CISO 每日摘要：CoSnitch 一鍵外洩、MLflow CVE-2026-64849 遭主動利用、法國 DGFiP 67.8 萬筆資料外洩 (20260819)"
description: "Varonis 披露 Microsoft Copilot Personal CVE-2026-24301（CoSnitch），已於 8 月 18 日修補；MLflow CVE-2026-64849 SSRF（CVSS 9.3）與 FUXA CVE-2026-25895 RCE（CVSS 9.5）在 CVE 公布後數小時即遭主動掃描利用；法國稅務總局 DGFiP 確認威脅行為者 ZeroBytes 於 6 月入侵，678,000 筆納稅人資料外洩。"
pubDate: "2026-08-19"
tags: ["ciso", "每日摘要", "copilot", "mlflow", "ssrf", "france", "data-breach", "cve"]
author: "Andy Shih"
featured: false
---

## 執行摘要

今日有三個高優先度威脅：Microsoft 在 Varonis 公開揭露的同一天修補了 Copilot Personal 的 **CVE-2026-24301（CoSnitch）**，但記憶體中毒路徑仍需用戶手動刪除已植入的指令。MLflow **CVE-2026-64849（CVSS 9.3）** 與 FUXA **CVE-2026-25895（CVSS 9.5）** 在 CVE 公告後數小時內即遭惡意掃描。法國稅務總局 **DGFiP** 確認威脅行為者 **ZeroBytes** 在 6 月底入侵，涉及至少 67.8 萬筆納稅人資料。

---

## 1 — CVE-2026-24301「CoSnitch」：Microsoft Copilot Personal 單鍵資料外洩

Varonis Threat Labs 披露 Microsoft Copilot Personal（copilot.microsoft.com）三個漏洞，攻擊者只需讓受害者點擊一個精心設計的連結，即可無聲竊取所有連接應用程式的資料。

**攻擊鏈：**
- Varonis 採用「meta-hacking」手法：反覆詢問 Copilot 為何 prompt 無法自動執行，直到助理自行洩露隱藏 URL 參數 `autorun=1`。
- 將 `autorun=1` 與現有 `q` 參數結合，可在無用戶操作的情況下觸發注入的 prompt，即使受害者立即關閉分頁，執行仍會完成。
- 外洩請求在網路層與正常的 Copilot 網頁摘要請求無異；base64 編碼可繞過掃描敏感字串的內容過濾器。

**測試中可存取的資料：** Gmail 信件內容、主旨、寄件人/收件人；Google 日曆標題、出席者、地點；Google Drive 檔名與摘要；完整 Copilot 對話紀錄；儲存的 Copilot 記憶指令。

**記憶體中毒路徑（獨立攻擊向量）：** 網頁摘要流程可注入一個持久性指令，在密碼變更、session 撤銷、裝置重新註冊後仍然存在。此變更不會產生任何可被安全工具偵測到的行程、檔案、網路連線或日誌紀錄，僅在 Copilot 記憶體設定 UI 中可見。

**修補：** Microsoft 於 **2026 年 8 月 18 日** 推送修補，無需安裝客戶端更新。修補前植入的記憶條目可能仍然存在，需用戶手動至 Copilot 記憶體設定刪除。

🔗 **參考資料：** [The Hacker News — Microsoft Copilot Personal 漏洞可讓單次點擊從連接應用程式外洩資料](https://thehackernews.com/2026/08/microsoft-copilot-personal-flaws-could.html)

---

## 2 — CVE-2026-64849（MLflow SSRF，CVSS 9.3）與 CVE-2026-25895（FUXA RCE，CVSS 9.5）遭主動利用

兩個針對 AI/工控系統的高危 CVE 在公告後數小時即遭主動掃描。

**CVE-2026-64849 — MLflow SSRF（影響 < 3.15.0 版本）：**
- MLflow model-registry webhook 中未驗證身份的伺服器端請求偽造漏洞。
- 透過利用 MLflow 處理 HTTP 重新導向的方式，繞過先前的修補。
- 攻擊者利用此漏洞存取雲端 metadata 服務（AWS IMDSv1、GCP metadata），竊取雲端憑證與 secrets。
- watchTowr 全球蜜罐遙測在 **2026 年 8 月 17 日** CVE 公告後數小時內即偵測到惡意掃描活動。

**CVE-2026-25895 — FUXA ICS/SCADA RCE（影響 ≤ 1.2.9 版本）：**
- 缺少關鍵功能驗證 + 路徑遍歷，允許未驗證的遠端攻擊者向伺服器寫入任意檔案。
- VulnCheck 從 8 月 18 日起偵測到單一 IP 大規模掃描，嘗試覆寫 `main.js`，目前尚未投放 RCE payload。
- 目前約有 60 個 FUXA 安裝暴露於公共網路。

**建議行動：** 立即將 MLflow 升級至 ≥ 3.15.0；檢查 IMDSv1 存取日誌是否有異常；套用 FUXA 修補並將 SCADA 管理介面從網路隔離。

🔗 **參考資料：** [The Hacker News — 攻擊者利用 MLflow SSRF 漏洞竊取雲端憑證](https://thehackernews.com/2026/08/attackers-exploit-mlflow-ssrf-flaw-to.html)

---

## 3 — 法國 DGFiP 資料外洩：ZeroBytes 聲稱 200 萬筆，官方確認 67.8 萬筆

法國經濟財政部確認，威脅行為者 **ZeroBytes** 在 **2026 年 6 月底** 透過竊取的憑證與 2FA 繞過手段入侵了 **法國稅務總局（DGFiP）**。

**外洩資料範圍：** 個人所得資料、家庭組成、扣繳稅率；企業名稱與 SIREN 登記號碼；地籍資料（房產地址與面積）。

**規模爭議：** ZeroBytes 於 8 月 12 日在 **PwnForums** 上架販售，聲稱持有 200 萬筆以上資料，並宣稱可存取 **SPDC（Serveur Professionnel de Données Cadastrales）** 涵蓋約 2,000 萬法國公民。DGFiP 官方確認入侵在例行審計中被發現並於 6 月底封鎖，自身鑑識計算結果為 **67.8 萬名個人與企業**受影響。

**應對措施：** 法國國家資訊系統安全局（ANSSI）協同調查；資料保護機構 **CNIL** 已獲通知。DGFiP 於下週開始向受影響者寄送個別通知信件。線上納稅帳號及登入憑證未受影響。

🔗 **參考資料：** [Xakep.ru — 駭客聲稱竊取法國稅務總局 200 萬人資料](https://xakep.ru/2026/08/18/dgfip-leak/)

---

## 4 — Threema 遭 DDoS 攻擊導致服務中斷

端對端加密即時通訊軟體 **Threema** 於 2026 年 8 月 18 日遭受分散式阻斷服務（DDoS）攻擊，導致服務中斷。Threema 擁有約 1,200 萬用戶，廣泛被歐洲政府機構與重視資安的企業採用。

🔗 **參考資料：** [Xakep.ru — Threema 遭 DDoS 攻擊導致服務問題](https://xakep.ru/2026/08/18/threema-ddos/)
