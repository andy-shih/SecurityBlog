---
title: "CISO 每日摘要：AMD 投資 50 億美元打造 Anthropic AI 基礎設施 (20260722)"
description: "AMD 承諾投資 50 億美元與 Anthropic 共建 2GW AI 基礎設施；Claude Cowork 新增螢幕錄製教學功能。SharePoint 重大 RCE 漏洞 CVE-2026-50522 在 PoC 公開後遭積極利用，Qilin 勒索軟體濫用 PAN-OS 認證繞過漏洞，WordPress wp2shell 被列入 CISA KEV 目錄且大規模攻擊持續中，Kratos 釣魚工具包被破獲，惡意 Newtonsoft.Json 分支套件，AWS Kiro 配置重寫漏洞，Windmill CVE-2026-29059 正遭受攻擊。"
pubDate: 2026-07-22
tags: [CISO, 每日摘要, 資安, AMD, Anthropic, AI 基礎設施, SharePoint, RCE, Qilin, 勒索軟體, WordPress, wp2shell, CISA, KEV]
author: "Security Solutions Team"
featured: true
---

## AMD 投資 50 億美元與 Anthropic 共建 AI 基礎設施

AMD 宣布對 Anthropic 投入高達 **50 億美元**，共同打造目標 **2 gigawatts** 的 AI 運算基礎設施，預計 2027 年前完成。這項合作是迄今最大規模的硬體-軟體 AI 聯盟之一，AMD Instinct GPU 將成為 Anthropic 的 Claude 及未來 Fable 模型的運算骨幹。此投資正值 AI 實驗室競相確保晶片供應與資料中心容量的產業趨勢。

這項夥伴關係還包括 AI 晶片架構的聯合開發，AMD 可獲得 Anthropic 模型訓練需求的深度 insight，用於未來晶片設計。此公告緊隨昨日法院批准 Anthropic 與作者之間 **15 億美元著作權和解案**。

與此同時，Anthropic 推出了 **Claude Cowork 的「Record a Skill」功能**，讓使用者透過螢幕錄製與語音解說來教導 Claude 新的工作流程，系統會將示範轉換為可重複使用的自動化技能。聯準會也對 Anthropic 的 Mythos AI 模型發出警訊，提醒銀行注意系統性 AI 風險。

### 這對 AI 基礎設施治理的深遠影響

AMD-Anthropic 交易顯示 **AI 晶片供應鏈多元化**已成為 CISO 層級的關注焦點。隨著訓練叢集規模擴展至 gigawatt 等級，組織必須評估供應商鎖定效應、供應鏈韌性以及共同設計晶片的安全隱患。少數戰略夥伴關係中的 AI 運算集中化，可能形成可用性與模型訓練管線完整性的新單點故障風險。

🔗 **參考資料：** 綜合報導（[Silicon Republic](https://www.siliconrepublic.com/business/anthropic-amd-chip-deal-2gw-ai-claude)、[The Decoder - Claude Cowork](https://the-decoder.com/claude-cowork-learns-new-skills-through-screen-recordings-and-voice-over-explanations/)）

---

## 本週活躍威脅

📌 **SharePoint RCE CVE-2026-50522 正遭積極利用**
Microsoft SharePoint 的重大遠端程式碼執行漏洞在公開 PoC 後遭到積極利用。攻擊者利用此漏洞**竊取 IIS 機器金鑰**，從而對受入侵的 SharePoint 伺服器取得持久存取權限。使用 SharePoint Server 的組織應將此視為緊急修補優先事項。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/critical-sharepoint-rce-cve-2026-50522.html)

📌 **WordPress wp2shell 列入 CISA KEV — 大規模攻擊持續中**
CISA 將兩個 WordPress Core 漏洞（CVE-2026-60137、CVE-2026-63030，統稱 **wp2shell**）列入已知遭利用漏洞目錄。此漏洞鏈允許未經認證的攻擊者透過 REST API 批次請求路由混淆和 SQL 注入實現遠端程式碼執行。Wordfence 稱其為「近年來最重要的 WordPress Core 安全事件之一」。已記錄 **137 次**來自 17 個國家 46 個 IP 的攻擊嘗試。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html)

📌 **Qilin 勒索軟體利用 PAN-OS 認證繞漏洞**
Qilin 勒索軟體集團利用 **Palo Alto Networks PAN-OS 的認證繞過漏洞**作為初始入侵管道。該漏洞允許攻擊者繞過防火牆認證在受害網路內橫向移動。使用 PAN-OS 的組織應確認已套用最新安全修補程式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/qilin-ransomware-attackers-exploit-pan.html)

📌 **惡意 Newtonsoft.Json 分支隱藏 C2 通訊**
流行的 **Newtonsoft.Json** NuGet 套件的惡意分支冒充合法程式庫，同時隱藏遊戲作弊程式碼與命令及控制功能。此供應鏈攻擊凸顯了 .NET 開發管線中**依賴項完整性驗證**的必要性。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/trojanized-newtonsoftjson-fork-hides.html)

📌 **Kratos 釣魚工具包被破獲 — 繞過 Microsoft 365 MFA**
執法部門破獲了 **Kratos 釣魚工具包**，這是一個專門竊取 Microsoft 365 連線階段並**繞過多因素認證**的釣魚即服務平台。該工具包使用中間人攻擊技術即時擷取連線階段 Cookie 和認證令牌。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/police-dismantle-kratos-phishing-kit.html)

📌 **AWS Kiro 漏洞允許網頁重寫配置並執行程式碼**
AWS Kiro 內部配置服務的漏洞允許惡意網頁重寫其配置並在未經適當授權的情況下執行程式碼。該漏洞繞過了標準核准工作流程，可能導致針對 AWS 基礎設施的供應鏈式攻擊。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/aws-kiro-flaw-let-poisoned-web-page.html)

📌 **Windmill CVE-2026-29059 正遭利用 — 未經認證檔案讀取**
開源開發者平台 **Windmill** 的高嚴重性路徑遍歷漏洞（CVSS 7.5）正遭積極利用。攻擊者利用未經認證的 `/get_log_file` 端點讀取任意伺服器檔案，包括可能暴露 **SUPERADMIN_SECRET** 令牌的環境變數。CISA 也將四個漏洞加入 KEV 目錄。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/hackers-exploit-windmill-flaw-to-read.html)

📌 **Adobe Acrobat 擴充元件 HermeticReader（CVE-2026-48294）— WhatsApp 資料竊取**
擁有 3.14 億以上使用者的 **Adobe Acrobat Chrome 擴充元件**中的通用 XSS 漏洞，允許惡意網站在不需安裝惡意軟體或憑證釣魚的情況下，**靜默竊取 WhatsApp Web 資料**——聊天列表、訊息和聯絡人名稱。僅需使用者互動（造訪特製 URL）。已在擴充元件 26.5.2.2 版中修補。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/adobe-acrobat-extension-flaw-let.html)

---

## OPSWAT 可以怎麼幫上忙

**惡意 Newtonsoft.Json** 分支與 **wp2shell 檔案上傳向量**是 MetaDefender 多重掃描（40+ 防毒引擎）與內容淨化與重構（CDR）的典型應用場景。OPSWAT 的 **MetaDefender Core** 可以檢查 NuGet 套件和 WordPress 上傳中的隱藏負載，而 **MetaAccess** 提供零信任網路存取來緩解類似 Kratos 的 AiTM 釣魚攻擊。

🔗 **參考資料：** 綜合報導（[The Hacker News - Newtonsoft](https://thehackernews.com/2026/07/trojanized-newtonsoftjson-fork-hides.html)、[The Hacker News - Qilin](https://thehackernews.com/2026/07/qilin-ransomware-attackers-exploit-pan.html)）
