---
title: "CISO 每日摘要：懷疑與越南關聯的駭客針對東南亞展開南海間諜活動 (20261128)"
description: "針對東南亞政府機構的近期網路間諜活動摘要，以及涉及 pCloud Pass 的安全事件與報導指出的 Radware 入侵。"
pubDate: 2026-11-28
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 懷疑與越南關聯的駭客針對東南亞展開南海間諜活動

懷疑受越南支持的威脅行動者 WeaveLotus，針對東南亞的軍事、政府和立法組織進行了一項間諜活動。該活動代號「RedOps」，觀察時間為 2026 年 8 月至 9 月，專注於蒐集有關南海國防與軍事協議的情報。泰國與菲律賓發生確認的入侵事件，印尼政府機構也觀察到偵察活動。

攻擊者透過利用 Web 應用程式漏洞以及開源軟體中的預設憑證取得初始存取權，具體目標包括 GeoServer、JasperReports、osTicket，以及暴露的 Laravel 除錯模式設定。進入系統後，駭客利用反向 SSH 隧道維持持久性，並在下游網路及應用程式間橫向移動。該團隊亦運用自動化 OSINT 技術，利用 Bing 搜尋腳本抓取與菲律賓、中國及美國相關的區域軍事協議文件與新聞。

顯示與越南有關的證據包括使用越南原生語言的程式碼註解、與 UTC+07:00 時區相符的作業活動時間，以及對區域地緣政治議題的戰略關注。RedOps 活動的主要目標似乎是竊取內部政府記錄，以支援越南外交政策與軍事情報優先事項。

### 📌對 CISO 的影響

- **強化開源軟體實作安全 —** 利用 GeoServer 與 osTicket 等工具中的預設憑證與漏洞，凸顯了嚴格強化開源應用程式並移除預設設定的必要性。
- **監控橫向移動與持久性 —** 利用反向 SSH 隧道維持持久性，要求組織實施嚴格的出口過濾，並監控網路內未經授權的隧道或異常 SSH 活動。
- **驗證第三方安全性完整性 —** pCloud 與 Radware 的事件強調了驗證關鍵第三方服務提供商安全態勢，並管理供應鏈入侵風險的必要性。

**參考來源:** [Suspected Vietnam-Linked Hackers Target Southeast Asia in South China Sea Espionage Campaign](<https://thehackernews.com/2026/11/suspected-vietnam-linked-hackers-target.html>)

---

## 本週活躍威脅

📌 **pCloud 密碼管理器遭受網路攻擊，涉及電子郵件地址曝光與登入嘗試**

瑞士的密碼管理器 pCloud Pass 通報一起網路攻擊，導致少數用戶電子郵件地址曝光，並隨後發生登入嘗試。雖然用戶報告其帳戶出現未知裝置連接，但 pCloud 表示該事件已被遏制，加密的用戶資料（如密碼與筆記）依然安全。公司指出其雲端儲存服務未受此次入侵影響。

**參考來源:** [pCloud Password Manager Hit by Cyber Attack Involving Email Address Exposure and Login Attempts](<https://thehackernews.com/2026/11/pcloud-password-manager-hit-by-cyber.html>) 

---

📌 **網路安全公司 Radware 遭入侵，危及客戶雲端儲存環境**

網路安全公司 Radware 遭到入侵，據報導已使客戶雲端儲存環境面臨風險。

**參考來源:** [Взлом ИБ-компании Radware поставил под угрозу облачные хранилища клиентов](<https://xakep.ru/2026/11/27/radware-attack>) 

---

📌 **Kubernetes 利用：突破外部邊界**

報告指出，存在突破外部邊界以實現 Kubernetes 集群接管的方法。

**參考來源:** [Куб наизнанку. Пробиваем внешний периметр и захватываем Kubernetes](<https://xakep.ru/2026/11/27/kubernetes-exploitation>) 

---

📌 **11 月 Windows 更新導致 NTLM 身分驗證問題**

據報導，11 月的 Windows 更新週期引入了影響 NTLM 身分驗證程序的實作問題。

**參考來源:** [Ноябрьские обновления Windows вызвали проблемы с NTLM-аутентификацией](<https://xakep.ru/2026/11/27/ntlm-problems>) 

---

📌 **Matters.AI 完成重大印度 Pre-Series A 融資，旨在應對 AI 資料風險**

Matters.AI 已獲得印度規模最大的網絡安全 Pre-Series A 融資之一，以解決與 AI 資料相關的安全風險。

**參考來源:** [Matters.AI Lands India’s Largest Cybersecurity Pre-Series A Round to Fight AI Data Risks](<https://www.darkreading.com/cyber-risk/matters-india-cybersecurity-pre-series-ai-data-risks>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261128-1-1795880141805 -->
