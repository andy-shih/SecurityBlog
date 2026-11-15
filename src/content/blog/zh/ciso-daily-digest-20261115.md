---
title: "CISO 每日摘要：Fireworks AI 憑證外洩引發 Cursor 資安事件與特洛伊化擴充套件散布 (20261115)"
description: "第三方廠商憑證外洩導致 Cursor 擴充套件市集遭遇軟體供應鏈妥協，而義大利監管機構則因行動裝置權限與同意違規對 Meta 處以 8.05 億歐元罰鍰。"
pubDate: 2026-11-15
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Fireworks AI 憑證外洩引發 Cursor 資安事件與特洛伊化擴充套件散布

程式碼編寫平台 Cursor 揭露，第三方供應商 Fireworks AI 發生的資安事件導致核發給該廠商的存取金鑰遭竊。威脅執行者利用該憑證從用於資料共用的唯讀儲存貯體中竊取資料。受影響的儲存貯體存放了未啟用「隱私模式」（Privacy Mode）使用者的程式碼代理工作階段追蹤記錄，導致屬於不到 0.01% 客戶的未遮蔽 API 憑證，連同非正式環境原始碼儲存庫、支援通訊與使用者溝通摘要一同外洩。

攻擊者隨後利用竊得的客戶憑證滲透至 Cursor 內部系統與 SaaS 工具。在 2026 年 10 月 29 日，入侵者利用遭妥協的內部存取權限，將 Anthropic 官方 Claude Code 擴充套件的特洛伊化版本（組建 2.1.312 與 2.1.313）注入至 Cursor 的市集快取中。該惡意更新旨在於受害者電腦上建立持久性 SSH 後門，在市集快取下線之前已可供存取約 11 小時，並被多達 5,000 名使用者下載。

Cursor 透過停用廠商金鑰、將所有推論工作負載移出 Fireworks AI、撤銷暴露的客戶權杖，並與主機託管供應商協調瓦解攻擊者基礎架構來緩解此事件。該公司確認啟用「隱私模式」的使用者、核心正式環境基礎架構以及官方用戶端應用程式均未受影響，且在 2026 年 11 月 1 日之後未偵測到未授權活動。此事件與 Uber 和 Notion 通報與同一起 Fireworks AI 遭妥協相關之資料存取揭露時間相符。

### 📌對 CISO 的影響

- **稽核 AI 廠商資料儲存貯體中是否含有內嵌機密 —** 確保傳送至外部 AI 廠商的預訓練與遙測匯出資料在傳輸前，強制執行 API 權杖、客戶憑證及敏感工作階段日誌的自動遮蔽機制。
- **驗證開發人員擴充套件快取之完整性 —** 在內部外掛程式發布管道實施加密簽章與完整性驗證，以防止遭妥協的內部帳戶毒化擴充套件市集快取。
- **在開發人員工作站上搜捕異常 SSH 持久化機制 —** 若工程團隊曾抓取 Cursor Claude Code 擴充套件版本 2.1.312 或 2.1.313 的快取更新，請檢查開發人員端點是否存在未授權的 SSH 金鑰及後門活動。

**參考來源:** [Stolen Fireworks AI Key Led to Cursor Data Breach and Trojanized Claude Code Extension](<https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html>)

---

## 本週活躍威脅

📌 **義大利主管機關因 Android 相片庫同意程序疏失對 Meta 開罰 8.05 億歐元**

義大利資料保護主管機關 Garante 依據義大利《隱私法》第 122 條，針對 Meta 未經使用者明確同意即存取 Android 裝置相片及影片庫之行為，處以 8.05 億歐元罰鍰。主管機關認定，Facebook 一項建議本機媒體以供發文的功能，透過缺乏細部揭露的廣泛單一作業系統權限，在約 2,000 萬名義大利使用者中預設啟用。計劃提出上訴的 Meta 被勒令在 60 天內依預設停用此建議功能、將同意程序與一般應用程式權限分開，並在 30 天與 90 天內向主管機關提交營運合規更新進度。

**參考來源:** [Italy Fines Meta €805 Million Over Facebook's Android Gallery Access Without Explicit Consent](<https://thehackernews.com/2026/11/italy-fines-meta-805-million-over.html>) 

<!-- ciso-revision:ciso-20261115-1-1794758875916 -->
