---
title: "CISO 每日摘要：Anthropic 與 Accenture 合作 $20 億 AI 安全計畫 (20260922)"
description: "Anthropic 與 Accenture 各投資 10 億美元建立嵌入式評估機制；美國 FBI、DOJ 查獲 NightmareStresser DDoS 平台；TASK#STOMP 後門程式竊取憑證與剪貼簿資料。"
pubDate: 2026-09-22
tags: [AI 安全, 嵌入式評估, DDoS 查獲, 惡意軟體, 威脅情報]
author: "Security Solutions Team"
featured: true
---

## Anthropic 與 Accenture 建立 $20 億 AI 嵌入式評估合作

Anthropic 與 Accenture 於 2026 年 9 月 18 日宣布重要合作夥伴關係，雙方各承諾在未來五年投資 10 億美元建立**嵌入式評估機制**（embedded evaluators），使獨立評估人員得以進入 Anthropic 內部工作。此舉解決了一個關鍵的治理挑戰：在模型開發階段進行獨立監管。嵌入式評估人員將獲得接近員工層級的內部存取權限，評估模型、進行紅隊測試、評估對齐程度、測試安全防護，並向公眾披露發現。

Accenture 的嵌入團隊將運用 **Faculty**（該公司收購的應用 AI 企業）的專業知識。Faculty 長期專門從事政府、國防、醫療與關鍵基礎設施的安全評估（包括英國 NHS 在 COVID-19 期間的早期預警系統）。此合作反映出 AI 治理領域的共識：安全需要獨立的技術審計，不是事後檢驗，而是在模型訓練與部署**期間**進行。

### 此舉如何重塑 AI 安全治理

- **驗證安全承諾。** 掌有例行內部存取權的嵌入式評估人員可驗證公司是否履行安全承諾、識別監管盲點、及時偵測事件—解決目前盛行的「你說我信」模式。
- **供應鏈 AI 信任。** 隨著企業將 AI 嵌入關鍵工作流程（客服、程式碼生成、基礎設施管理），企業客戶將日益要求對模型行為的獨立保證。Anthropic 此舉表明該需求正成為實質問題。
- **融資先例。** 雙方目前直接資助此工作；長期來看，Anthropic 主張由政府或聯合基金支援（如其 6 月發佈的「先進 AI 架構」）。此合作示範產業融資如何啟動該生態，直到政策趕上為止。
- **競爭對手訊號。** OpenAI 與 Meta 尚未宣布嵌入式評估計畫；此舉給 Anthropic 贏得企業客戶與關切 AI 治理差距的決策者的信譽。

🔗 **參考資料：** 綜合報導（[Anthropic](https://www.anthropic.com/news/accenture-embedded-evaluation)、[Accenture 新聞室](https://newsroom.accenture.com/news/2026/accenture-and-anthropic-partner-to-build-team-of-embedded-evaluators-at-anthropic)）

---

## 本週活躍威脅

📌 **NightmareStresser DDoS 傭兵平台遭 FBI、DOJ、加拿大皇家騎警查獲**

美國聯邦調查局與司法部（獲加拿大皇家騎警協助）於 2026 年 9 月 15 日查獲 **nightmare-stresser.com** 與 **nightmarestresser.org**，摧毀全球歷史最悠久的分散式阻斷服務（DDoS）傭兵平台之一。自 2022 年以來，NightmareStresser 被用於對全球數十萬次實際或試圖 DDoS 攻擊，受害者包括教育機構、政府機關、遊戲平台與關鍵基礎設施。該平台擁有**逾 56.6 萬名註冊使用者**，運營 52 部專用伺服器，能在第 4 層（TCP/UDP）與第 7 層（應用層）協定上發動高達 200 Gbps 的攻擊。

查獲行動屬於**「斷電行動」(Operation PowerOFF)** 的一部份，是一項針對全球犯罪 DDoS 傭兵基礎設施的協調執法行動。受影響行業跨越多個地理區域；某些攻擊「嚴重降低互聯網服務，完全中斷網際網路連線」。

🔗 **參考資料：** ([駭客新聞](https://thehackernews.com/2026/09/us-seizes-nightmarestresser-domains.html)、[Abijita](https://abijita.com/fbi-seizes-nightmarestresser-domains-linked-to-thousands-of-ddos-attacks))

---

📌 **TASK#STOMP PowerShell 後門竊取文件、密碼、剪貼簿資料**

安全研究人員發現 **TASK#STOMP**，一款惡意 PowerShell 後門程式被部署來竊取文件、Wi-Fi 密碼與受害端點的剪貼簿資料。該後門代表威脅向量的重現：利用原生 Windows 指令碼（PowerShell）來避免偵測並建立持久存取。部署 TASK#STOMP 的攻擊鏈通常經由釣魚或供應鏈妥協到達，讓攻擊者能竊取憑證以進行橫向移動並部署次級有效載荷。

🔗 **參考資料：** ([駭客新聞](https://thehackernews.com/2026/09/taskstomp-powershell-backdoor-steals.html))

---

📌 **Claude Code 採納 OpenAI 的 AGENTS.md 標準**

Anthropic 的 Claude Code 平台現已原生支援 **AGENTS.md**，一項為編程代理說明文件標準化的開放格式。此格式由 OpenAI 與更廣泛的 AI 代理社群原創，標準化程式碼庫與 AI 代理透過 Markdown 文件溝通需求的方式。採納此標準表明 Claude Code 與其他 AI 編程工具之間的互通性，降低廠商鎖定，讓開發者能以可攜帶格式記錄代理行為。

🔗 **參考資料：** ([Anthropic/Infoworld](https://www.infoworld.com/article/3713000/claude-code-now-accepts-instructions-in-openai-s-agents-md-format.html))

---

## OPSWAT 可以怎麼幫上忙

嵌入式評估人員需要 AI 推理管線的威脅建模與弱點評估。OPSWAT 的 **MetaDefender Multi-Scan** 可透過掃描嵌入式後門、供應鏈惡意軟體與原則違規情況，在部署前審計 AI 模型製品（檢查點、ONNX 檔案、容器化推理伺服器）的供應鏈安全—補充 Anthropic 與 Accenture 的人工評估人員進行自動基準線掃描。

對於採納 Claude Code 或其他 AI 代理的組織，**MetaDefender CDR（內容清理與重組）** 在使用者上傳檔案與提示送達代理之前進行消毒，防止文件型漏洞與注入攻擊。
