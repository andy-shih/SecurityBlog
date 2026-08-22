---
title: "CISO 每日摘要：Anthropic 讓 Claude Mythos 5 投入網路防禦 (20260822)"
description: "Anthropic 推出由 Claude Mythos 5 驅動的程式碼漏洞掃描器 Claude Security，針對企業客戶公開測試版，回傳 CWE 分類、嚴重性評級與修補建議，同時在全線 Claude 輸出套用 SynthID-Text 浮水印以符合歐盟 AI Act。Check Point Research 揭露 Microsoft 自家的 BTR.sys 開機驅動程式（Windows 7 至 11 25H2）可被武器化，於開機時刪除資安軟體；Kaspersky 則將 MoYu Group 的 BADBOX 代理殭屍網路，連結到透過車機內建更新程式散播的 Android 車載惡意程式。"
pubDate: 2026-08-22
tags: [Anthropic, Claude Mythos 5, AI 資安, 漏洞管理, Microsoft Defender, 提示注入, 勒索軟體, 供應鏈]
author: "Security Solutions Team"
featured: true
---

## Anthropic 讓 Claude Mythos 5 投入網路防禦

2026 年 **8 月 21 日 **，Anthropic 確認以 **Claude Mythos 5** 模型運作其資安掃描器 **Claude Security**。該工具會掃描客戶程式碼庫中的漏洞並提出修補建議，目前以公開測試版提供給企業客戶。每一項發現都包含 **CWE 分類 **、 **嚴重性評級 ** 與 **修補建議 **；掃描計入一般 token 用量，且每一個修補都必須由人工簽核。Anthropic 同時也把 Mythos 5 接入保護醫院、公用事業與銀行的合作夥伴資安產品。

這次佈署與兩項相關動作同步：Anthropic 開始在 Claude 輸出中嵌入 **SynthID-Text 浮水印 **（以字詞選擇的統計模式標記，不加入隱藏字元）以符合歐盟 AI Act 的透明度規範；並在 S-1 文件中揭露規劃中的 **2 兆美元 IPO**，明確將「AI 反彈」列為重大風險因子——這顯示企業買方已開始把 AI 供應商視為長期關鍵供應商。

### 這對 AI 資安治理的深遠影響

Anthropic 刻意將其最強大的模型保留在僅供防禦者、僅透過合作夥伴使用的介面之後：終端使用者永遠不直接接觸 Mythos 5，且修補建議仍需人工核准。此策略強化了防禦方，卻不給攻擊者一層新的 AI 攻擊能力。但浮水印的佈署暴露了其中的張力——批評者（尤其是 Daring Fireball 的 John Gruber）認為，基於字詞選擇的浮水印會因模型依據密鑰而非語意來挑選同義詞而降低文字品質，而像「Declaude」這類工具已能去除該標記。對 CISO 而言，重點在於：對 AI 供應商的依賴現在已是董事會層級的供應鏈課題——模型能力、浮水印政策與供應商存續，都是單點失效來源。

**供應商風險矩陣 **

| 供應商 / 工具 | 新風險 | CISO 關注面向 |
|---|---|---|
| Anthropic（Claude Security） | 僅供防禦者的 Mythos 5 掃描器，公開測試版 | 供應商風險 + 人機協同管控 |
| Claude 浮水印 | 歐盟 AI Act 合規；可經 Declaude 去除 | AI 輸出治理、合約條款 |
| Microsoft BTR.sys | 簽章開機驅動可被用於關閉 EDR | 核心驅動允許清單、WDAC 檢視 |
| MoYu Group / BADBOX | 車載韌體代理殭屍網路 | OT/IoT 韌體來源驗證 |

---

## 本週活躍威脅

📌 **Microsoft Defender 自家的 BTR.sys 驅動可被武器化，於開機時刪除資安軟體。 ** Check Point Research（Jiří Vinopal）在 Black Hat USA 2026 / DEF CON 34 發表：合法簽章的開機修復驅動 **BTR.sys**（Windows 7 至 Windows 11 25H2 皆為必要元件）可在不引入外部驅動、不利用任何漏洞的情況下，執行任意核心層級的檔案與登錄檔操作。由於它是 Windows 必要元件，無法列入 Microsoft 的 Vulnerable Driver Blocklist，也無法透過 WDAC 封鎖而不影響 Defender 本身。目前尚未觀察到實際攻擊利用。
🔗 **參考資料： ** [The Hacker News](https://thehackernews.com/2026/08/microsoft-defenders-own-driver-can-be.html)

📌 **Android 車載惡意程式透過內建更新程式散播，用於廣告詐欺與代理殭屍網路。 ** Kaspersky 發現一個感染 DoFun 製 Android 車機韌體的惡意程式家族，投放多階段下載器，用於廣告詐欺並組成代理殭屍網路，高度可信地歸因於 **MoYu Group** 所屬、代號 **BADBOX** 的住宅代理計畫（Google 已於 2025 年 7 月控告 25 名中國被告）。這是首例針對車機裝置、具專屬感染鏈的惡意程式。
🔗 **參考資料： ** [The Hacker News](https://thehackernews.com/2026/08/android-car-malware-spreads-through.html)

📌 **零點擊 Grok 提示注入盜取對話紀錄。 ** 一種新公開的加密提示注入技術，能將 xAI Grok 網頁聊天中「摘要此頁面」的例行請求，轉化為靜默外洩對話紀錄的攻擊，繞過 Grok 與 Gemini 的 AI 安全防護。
🔗 **參考資料： ** [GBHackers](https://gbhackers.com/zero-click-grok-attack-prompt-injection/)

📌 **768 組外洩 AWS 金鑰仍處於啟用狀態並具完整管理權限。 ** 一項大規模調查發現 768 組公開暴露的 AWS 金鑰依然存活，可賦予企業雲端環境完整管理權限。
🔗 **參考資料： ** [GBHackers](https://gbhackers.com/768-leaked-aws-keys-still-active-with-full-admin/)

📌 **Medusa 勒索軟體以雙重勒索攻擊 300+ 關鍵基礎設施機構。 ** Medusa 集團以雙重勒索手法，瞄準醫院、公用事業等超過 300 家關鍵基礎設施營運者。
🔗 **參考資料： ** [GBHackers](https://gbhackers.com/medusa-ransomware-attacks-300-critical-infrastructure-organizations/)

📌 **更新 — Rust Crates 投毒（arrayref）獲俄文媒體報導。 ** xakep.ru 報導 8 月 20 日 Rust 安全回應團隊下架三個遭植入惡意程式的 crate（arrayref 0.3.10、internement 0.8.7、append-only-vec 0.1.9）一事——帳號遭入侵的維護者發布了橫跨約 2.45 億次下載的建置期惡意程式。此為昨日頭條的隔日追蹤報導，無新技術細節。
🔗 **參考資料： ** [xakep.ru](https://xakep.ru/2026/08/21/arrayref-stealer/)

---

## OPSWAT 可以怎麼幫上忙

AI 程式碼助理與韌體更新程式都會把不受信任的檔案帶進受信任環境。針對 **Android 車機 ** 與 **BADBOX** 這類威脅，OPSWAT **MetaDefender** 多重掃描與 **Deep CDR（內容淨空與重建） ** 能在韌體映像、更新套件與下載的二進位檔抵達 OT/IoT 與開發者端點前先進行檢查，在不依賴特徵碼的情況下移除主動內容。同樣的檔案型防禦也適用於投遞遭毒化 Rust crate 的供應鏈路徑——在擷取時驗證套件完整性，可防止建置期惡意程式進入生產環境。
