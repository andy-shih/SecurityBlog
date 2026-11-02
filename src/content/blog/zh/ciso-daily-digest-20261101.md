---
title: "CISO 每日摘要：FBI 將幣安創紀錄 64.3 億美元加密貨幣竊案歸咎於北韓 TraderTraitor (20261101)"
description: "FBI 將創紀錄的 64.3 億美元幣安加密貨幣竊案歸咎於北韓 TraderTraitor，Polymarket 遭受價值 270 萬美元的供應鏈攻擊（透過被劫持的 DebugBear 腳本），且 Accenture 承包商涉嫌將五角大廈網路暴露給個人 Claude AI 代理程式。"
pubDate: 2026-11-01
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## FBI 將幣安創紀錄 64.3 億美元加密貨幣竊案歸咎於北韓 TraderTraitor

TraderTraitor 自 2020 年起至少開始鎖定加密貨幣公司，利用招聘主題誘餌、AI 製作的假人設、空殼公司和被植入木馬的 Terraform 提供者，投放可安裝 FLATROOF 資訊竊取器和 ROOFDECK 後門的 Bash 載入器，涵蓋 macOS、Linux 和 Windows。Elliptic 估計近年來北韓行動者已竊取超過 65 億美元的加密資產。

### 📌對 CISO 的影響

- **北韓竊取加密貨幣資助政權運作 —** 安全團隊應監控與 TraderTraitor 相關的區塊鏈錢包指標和 DeFi 交換活動，並將針對 AI、區塊鏈和網安工程師的招聘主題接觸視為高風險社交工程載體。
- **第三方 JavaScript 可能危害經驗證的金融應用程式 —** CISO 應盤點處理敏感交易頁面上的外部腳本，強制執行子資源完整性和釘選版本，並檢視這些腳本能代表已登入使用者發起哪些經驗證動作。
- **獲授管理存取權的 AI 代理程式引發內部威脅與資料外洩風險 —** 存取政府或生產網路應要求受管身分和裝置狀態檢查，禁止個人 AI 工具連線，並監控資料外傳以偵測憑證和網路拓撲資訊。

**參考來源:** [FBI Links North Korea's TraderTraitor to Record $6.43 Billion Binance Crypto Heist](<https://thehackernews.com/2026/11/fbi-links-north-koreas-tradertraitor-to.html>)

---

## 本週活躍威脅

📌 **駭客透過被劫持的 DebugBear 腳本從 Polymarket 交易者竊取約 270 萬美元**

Polymarket 在一小時內移除腳本、清除快取、重設作用中登入工作階段，並暫停交易直到網站乾淨。到 10 月 30 日，726 個受影響錢包中有 689 個已獲全額退款。DebugBear 建議客戶移除其嵌入代碼，研究人員建議採用子資源完整性、更強的內容安全政策、釘選腳本版本、沙箱隔離，以及對意外簽署請求保持謹慎。

**參考來源:** [Hackers Steal About $2.7 Million From Polymarket Traders via Hijacked DebugBear Script](<https://thehackernews.com/2026/11/hackers-steal-about-27-million-from.html>) 

---

📌 **Accenture 承包商涉嫌授予 Claude AI 代理程式存取安全五角大廈網路的權限**

WIRED 指出 Accenture 的聯邦合約超過 35 億美元，其中與國防部的合約近 6.05 億美元。安全專家警告，結合非機密資訊（如網路拓撲圖）可能揭露敏感到足以列為機密的細節，並可能協助入侵者定位價值系統。

**參考來源:** [Accenture Contractor Allegedly Gave Claude AI Agent Access to Secure Pentagon Network - CyberSecurityNews](<https://news.google.com/rss/articles/CBMihwFBVV95cUxQY3lFdkF1LW9iWHFYdElfVEFNMXRsTnhJS1VMWExuZzB4ckpZMDdjWFczYzBwX28tejBCenVyVmpMU29lV1A0UU5GNExKV09xbUFFZUhvOHU4OVRpVTRqSGNWdnU1MHhiRUhuSF9pLVpEd0thVE5WUXBfUVZhQmR6N2tGTkU3TlHSAfwBQVVfeXFMTmN0NjZGNWUzNUhYdkFUR3JqVE5JOS1GUVNqekZ6eXpUemVLQzllVVhHV0tYa0hRWklZd2FVNUcxbkM0N2xjVDAwRUFwTHVrb0t4OGJZMjZKYzZsNVJzQnVqZk5McXVmaUxvdVBsWUpfcmhfcE80c3dtQk5rd3lyNHZ1NGlyS0tHQXRZZkJ4NnpCR1hFOXRZb2x2OGRwVUNiZzBrcnZxU2R4Slo1NjZmMFpISU9uUklhRGNOQ3JLZWx6WkdDUm1ZakVNZGFqaEFGS1FyYVFPYzJ5blRpUEdsNms5Nkc1N0Y1Q2VwbEFDdTJwNi14ejJBQUw2aXNI?oc=5>) 

---

📌 **NetamLoader 利用 AppDomainManager 注入鎖定亞洲政府系統**

Kaspersky 揭露了一條感染鏈的詳細資訊，該感染鏈使用名為 NetamLoader 的未記載 .NET 載入器，鎖定亞洲政府組織所使用的特定 Windows 10 版本。該活動於 2026 上半年被偵測到，涉及疑似供應鏈入侵：一個包含合法 Patch My PC 元件以及惡意資源檔案的 Windows cabinet 封存檔被暫存在作業系統更新下載目錄中。NetamLoader 透過設定檔利用 AppDomainManager 注入來劫持 .NET 應用程式的初始化過程，並在 dllhost.exe 下執行經混淆的多階段 XAML 與 .NET 負載，藉此繞過 AMSI 並定期向命令與控制基礎架構發送信標。

**參考來源:** [NetamLoader Malware Targets Government Windows 10 Systems in Asia via .NET Injection](<https://thehackernews.com/2026/11/netamloader-malware-targets-government.html>) 

---

📌 **Canonical LXD 與 MicroCloud 修補嚴重雙向 TLS 偽冒弱點**

Canonical 修復了一個影響 LXD 和 MicroCloud 環境的重大弱點，該弱點追蹤為 CVE-2026-112816，CVSS 評分為 10.0。該漏洞源於雙向 TLS 驗證處理程式中不當的憑證驗證程序：雖然 TLS 僅證明初始分葉憑證的所有權，但伺服器卻錯誤地接受了在出示鏈後方附加的任何受信任公用憑證，使得具備網路存取權限的攻擊者無需擁有其私密金鑰即可偽冒受信任的用戶端。為降低暴露風險，執行受影響 snap 部署的管理者應更新至已修復版本（包括 LXD 6.10.1、5.21.9、5.0.11、4.0.15 以及 MicroCloud 3.4.1 或 2.1.5），並限制 API 接聽程式的網路暴露。

**參考來源:** [CVSS 10.0 LXD, MicroCloud Flaw Lets Attackers Impersonate Trusted Clients Without a Private Key](<https://thehackernews.com/2026/11/critical-lxd-and-microcloud-flaw-cvss.html>) 

---

📌 **實戰指南概述新電腦移轉之一鍵還原程序**

刊載於 iT 邦幫忙的一篇技術教學文章探討了在硬體汰換工作流程中實作一鍵還原技術的實務方法。對於處理端點佈建與移轉的 IT 組織而言，驗證備份完整性並建立可靠且經核驗的系統還原程序，仍然是在裝置生命週期推行期間將營運中斷降至最低的基本措施。

**參考來源:** [換新電腦時的一鍵還原實戰 - iT 邦幫忙](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1HaEcwUU5jUUFpM01HTl9sUklqSjBxcXpEVEh6aG5DODBqUUtobndKOUhrQ04wVDR3WUtwZDBNRUJ1S3FoSHNNNDF6eWtXQmx6XzNsLTdRM0YwTkt4dGk5bzFiOUpsY3M?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261101-2-1793593408566 -->
