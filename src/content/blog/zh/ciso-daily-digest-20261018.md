---
title: "CISO 每日摘要：ConnectWise 遭遇身分憑證入侵並暫停微軟 365 雲端備份服務 (20261018)"
description: "ConnectWise 因不明攻擊者獲取應用程式身分存取權並入侵微軟 365 租戶，緊急停用七組關鍵身分並中斷雲端備份服務。"
pubDate: 2026-10-18
tags: ["connectwise","cloud-backup","microsoft-365","identity-compromise","tenant-security","application-identities","supply-chain"]
author: "Security Solutions Team"
featured: true
---

## ConnectWise 遭遇身分憑證入侵並暫停微軟 365 雲端備份服務

IT 管理軟體供應商 ConnectWise 於 2026 年 10 月 17 日緊急停用七組應用程式識別，因不明攻擊者獲取未授權存取權並入侵客戶的微軟 365 租戶環境。

該廠商隨即暫停 Cloud Backup 雲端備份服務，撤銷所有受影響連線憑證，並示警先前簽發的存取權杖在自然過期或手動失效前仍可能維持有效。

官方強調停用連線僅能阻擋後續驗證，無法復原租戶內已遭竄改的設定，企業資安團隊必須主動清查並補救任何被建立的未授權認證與擴權行為。

### CISO 應對雲端租戶防護之關鍵防禦行動

- **全面稽核租戶權限 —** 資安長應立即檢查雲端租戶稽核日誌，全面清查並清除攻擊者透過受害身分建立的未授權認證與持久化存取權。
- **強制撤銷有效權杖 —** 管理員須主動撤銷所有既有工作階段與存取權杖，防止威脅者利用尚未過期的憑證持續存取微軟 365 服務。
- **收緊委派供應商權限 —** 重新評估第三方 IT 管理整合所獲取的委派管理權限，落實最小權限原則以降低雲端軟體供應鏈遭入侵的衝擊。

**參考來源:** [ConnectWise Suspends Cloud Backup After Attackers Compromise Microsoft 365 Tenants](<https://thehackernews.com/2026/10/connectwise-suspends-cloud-backup-after.html>)

---

## 本週活躍威脅

---

## OPSWAT 可以怎麼幫上忙

若事件涉及 SharePoint、S3、Salesforce 或 Microsoft 365 等雲端檔案儲存/協作環境，可評估相應 MetaDefender 儲存與雲端產品，在檔案儲存或共享流程加入檢查；需依實際服務與整合方式評估。 [MetaDefender Storage Security、Storage Cloud、Salesforce Cloud 與 Microsoft 365](<https://www.opswat.com/products/metadefender>)