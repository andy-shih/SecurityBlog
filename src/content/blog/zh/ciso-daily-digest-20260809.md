---
title: "CISO 每日摘要：Anthropic 將 Claude Code Auto Mode 設為預設，防範危險核准 (20260809)"
description: "Anthropic 宣布自 8 月 14 日起將 Claude Code 的 Auto Mode 設為 Pro、Max、Team 方案預設：分類器攔截 89% 危險指令，人類審查僅攔截 13.6%；Trajectory Labs 對 Fable 5、Opus 5、Sonnet 5 發動 720 次提示注入測試全數失敗，而 OpenAI GPT-5.6 Sol 在 Codex Auto-Review 模式有 5.83% 攻擊成功。Claude Code 工作階段現可跨終端互通訊息，跨機器通訊經由 Anthropic 伺服器轉送。美國明尼蘇達州全美首部 AI「去衣」禁令（H.F. 1606）8 月 1 日生效，每次違規最高罰 50 萬美元，聯邦法官駁回 xAI 暫緩執行請求。"
pubDate: 2026-08-09
tags: [CISO, 每日摘要, Anthropic, Claude Code, Auto Mode, AI 安全, 提示注入, AI 治理, 明尼蘇達州, xAI]
author: "Security Solutions Team"
featured: true
---

## Anthropic 將 Claude Code Auto Mode 設為預設

**Anthropic** 宣布自 **8 月 14 日**起，**Claude Code** 將對 **Pro、Max、Team** 方案**預設啟用 Auto Mode**。Auto Mode 讓 AI 編碼代理不需在每個步驟等待人工核准即可自主運作；由**分類器**判斷動作是否危險或不可逆，僅在這些情況下要求確認。

在 **1,053 名付費測試者**的對照研究與內部紅隊測試中，Auto Mode 的安全性至少與人工核准相當，且通常更佳：人類審查者僅攔截 **13.6% 的危險指令**，Auto Mode 則攔截 **89%**。採用 Auto Mode 的團隊也產生約 **25% 更多的 pull request**。Anthropic 表示分類器增加了對**提示注入攻擊**的防禦——注入的程式碼試圖劫持代理偏離使用者指令。獨立稽核機構 **Trajectory Labs** 以 **72 種攻擊情境各測試 10 次**，**720 次嘗試全部失敗**，對象為 Claude 現役模型（**Fable 5、Opus 5、Sonnet 5**）的 Auto Mode；對照組中 OpenAI **GPT-5.6 Sol** 在 Codex Auto-Review 模式有 **5.83%** 攻擊成功。內部測試中，Auto Mode 阻止了 Claude 將機密資料上傳至公開頁面，並在一次長時間工作階段中終止了約 **2,000 個會干擾 GPU 訓練任務的處理程序**。Anthropic 表示分類器本身消耗的 token 不另收費，但也指出此變更將開發者的角色從撰寫程式碼轉向審查 AI 產出——對生產基礎設施的高風險變更，Anthropic 仍建議人工審查 Claude 的動作。

### 這對 AI 代理權限治理的深遠影響

此變更將核准關卡從人為判斷轉移到**廠商執行的分類器**，而基準測試數據重新定義了安全論述：核准疲勞是實際的失效模式，自動化風險分類在危險指令偵測上可以勝過疲勞的人類審查者。對於將 AI 編碼代理標準化的組織而言，工具預設行為現在決定了人類介入前可發生多少自主動作——**提示注入防禦**的宣稱（三個模型版本 0/720）也提高了代理工具應承受的攻擊標準。**25% 的生產力提升**伴隨核准中斷減少，形成廣泛採用 Auto Mode 的壓力，而保留生產基礎設施人工審查的設計，則在高風險動作上維持人類把關。這是代理供應商解決自主性與安全之間張力的範本：分類器閘控動作、公布逃逸測試結果、預設傾向自主。

🔗 **參考資料：** [The Decoder](https://the-decoder.com/anthropic-sets-claude-code-to-auto-mode-by-default-to-protect-developers-from-bad-approvals/)

---

## 本週活躍威脅

📌 **Claude Code 工作階段可互通訊息，跨終端共享上下文**
**macOS 與 Linux** 上的 **Claude Code** 工作階段現在可以互相傳送文字摘要——向另一個工作階段提問、協調平行工作流程，或查詢長時間任務的狀態。同一台機器上的通訊為**本機直連**；跨電腦通訊則**經由 Anthropic 伺服器轉送**，且僅允許回應。**管理員可透過設定鎖定此功能**，且此功能不適用於 Amazon Bedrock、Google Cloud Agent Platform 與 Microsoft Foundry。對資安團隊而言，跨工作階段訊息傳遞是新的資料流動面：上下文（包括程式碼與可能的機密）現在可在終端之間、甚至跨機器經由 Anthropic 基礎設施流動——部署前值得先盤點。
🔗 **參考資料：** [The Decoder](https://the-decoder.com/claude-code-sessions-can-now-talk-to-each-other-and-share-context-across-terminals/)

📌 **明尼蘇達州全美首部 AI「去衣」禁令生效，xAI 法律挑戰持續**
明尼蘇達州的 **H.F. 1606**——美國第一部禁止 AI **「去衣」（nudification）**工具的州法——已於 **8 月 1 日**生效。該法禁止網站、應用程式或軟體的所有者或控制者允許使用者「去衣」影像或代為生成此類竄改，也禁止廣告或推廣此類服務；**每次未經授權的存取、下載或使用，最高可處 50 萬美元民事罰款**，由州檢察長執行，並賦予個人訴訟權。聯邦法官 **Donovan W. Frank** 於 **7 月 31 日**駁回 **xAI** 的緊急暫時禁制令請求，指出 xAI 在「法律簽署近三個月後、且距生效僅三天」才提出動議；**8 月 19 日**將就初步禁制令舉行聽證。此案是美國州級 AI 內容限制首次通過大型 AI 廠商緊急挑戰的案例。
🔗 **參考資料：** [Mashable](https://mashable.com/tech/judge-rejects-xai-request-to-pause-nudification-ban)

---
