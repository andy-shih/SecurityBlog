---
title: "CISO 每日摘要：ConnectWise 警告 ScreenConnect 攻擊持續進行，SCKit 正瞄準未修補之系統 (20261117)"
description: "補刊選刊：收錄原定期數的部分資安新聞及其來源。"
pubDate: 2026-11-17
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 今日資安新聞速覽

補刊選刊：收錄原定期數的部分資安新聞及其來源。

### 📌 ConnectWise 警告 ScreenConnect 攻擊持續進行，SCKit 正瞄準未修補之系統

ConnectWise 已完成針對夥伴 ScreenConnect 環境遭未經授權存取事件的調查，並警告攻擊行動仍在持續。該公司報告指出，威脅行為者正使用名為 SCKit 的工具包，其中包括一個稱為 RelayTrap.cs 的 C# 模組，企圖從受感染的客戶端裝置向管理服務提供商 (MSP) 技術員工作站進行類似蠕蟲式的橫向移動。

一項關鍵漏洞 CVE-2026-84869 (CVSS 9.9) 正被利用，可在活動中的遠端作業階段進行未經授權的文件傳輸與程式碼執行。此活動也與 RMM+ 版本 1.0.31 及 1.0.32 中的身份驗證缺陷有關。資安研究人員偵測到的近期活動影響了 41 個組織中的 205 台主機，部分案例涉及託管於防彈基礎設施 (bulletproof infrastructure) 上的惡意客戶端。

為了緩解這些風險，ConnectWise 已在 400 個夥伴環境中停用了五個第三方擴充功能：Labtech Plus、RMM Plus、RMM+、RMM Plus Password Link 以及 RMM+ Password Link。該公司敦促所有客戶將技術員端客戶端更新至 26.6.5 或更高版本，並強調單純的軟體更新並無法移除既有的未經授權存取或持續性威脅。

**原始來源:** [ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems](<https://thehackernews.com/2026/11/connectwise-warns-screenconnect-attacks.html>)

### 📌對 CISO 的影響

- **優先進行 RMM 修補 —** 必須立即更新 ScreenConnect (v26.6.5+) 與 N-central，以防止未經授權的遠端執行，以及透過 MSP 環境進行類似蠕蟲式的橫向移動。
- **監控持續性威脅 —** 由於更新無法移除已建立的未經授權存取，防禦者在發生任何未修補的暴露後，必須主動搜尋惡意服務，例如偽裝成「Windows Update Agent」組件的內容。
- **審計第三方擴充功能 —** 審查所有 RMM 擴充功能，並停用不必要或高風險的第三方模組，以免其成為部署 SCKit 等工具包的入侵點。

---

### 📌 N-able 修補 17 個 N-central 缺陷，攻擊者先前利用漏洞部署加密貨幣挖礦程式

N-able 已發布關鍵安全性更新 N-central 2026.4 Hotfix 3，以修補包括權限提升、身份驗證繞過及遠端程式碼執行在內的 17 個漏洞。這些修補程式是在 4EverAble2Shell 與 Agent2Shell 漏洞遭到利用後發布的，攻擊者曾利用這些漏洞在受影響的伺服器上部署加密貨幣挖礦程式。

**原始來源:** [N-able Patches 17 N-central Flaws as Attackers Exploit Earlier Bugs to Deploy Crypto Miners](<https://thehackernews.com/2026/11/n-able-patches-17-n-central-flaws-as.html>)

---

### 📌 Apple 加強 macOS App 權限控制，以因應 AI Agent 的資安風險限制數據存取

Apple 正在 macOS 27.3 beta 2 中引入更細粒度的數據存取控制，以降低與人工智慧 (AI) Agent 相關的風險。此更新將「裝置控制」(Device Control) 與「數據存取」(Data Access) 分拆為獨立的「系統與應用程式保護覆寫」(System &amp; App Protection Override) 與「輔助使用」(Accessibility) 設定，允許使用者將 App 權限限制在特定資料夾或個別應用程式中。

**原始來源:** [Apple Tightens macOS App Permissions to Limit Data Access Amid AI Agent Security Risks](<https://thehackernews.com/2026/11/apple-tightens-macos-app-permissions-to.html>)

<!-- ciso-revision:ciso-20261117-2-available-1795038770735 -->
