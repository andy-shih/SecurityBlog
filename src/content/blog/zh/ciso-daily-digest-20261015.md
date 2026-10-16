---
title: "CISO 每日摘要：Cisco 示警 Secure Email Gateway 重大漏洞已遭在途攻擊利用 (20261015)"
description: "Cisco 與 Palo Alto Networks 示警邊界設備遭在途攻擊，同時冒牌 AI 誘餌與遠端 IT 詐欺顯著增加。"
pubDate: 2026-10-15
tags: ["cisco","email-security","palo-alto-networks","pan-os","rce","fake-ai","phishing","north-korea","insider-threat"]
author: "Security Solutions Team"
featured: true
---

## Cisco 示警 Secure Email Gateway 重大漏洞已遭在途攻擊利用

Cisco 發布緊急資安通告，指出攻擊者正積極利用 Cisco Secure Email Gateway 的重大安全漏洞。未經身分驗證的遠端攻擊者可藉此將任意檔案寫入設備作業系統中。

該漏洞編號為 CVE-2026-76519，CVSS 風險評分高達 9.8。只要閘道啟用 File Reputation 且掃描套件版本低於 25.3.0.5525，攻擊者傳送特製附件即可觸發。

攻擊者成功利用後能以 root 權限執行系統指令。Cisco 已主動聯繫出現潛在入侵指標的受管雲端閘道客戶，並釋出可免重啟即時安裝的掃描套件更新版本。

### CISO 應對重點：邊界閘道安全防護與人員流程管理

- **即刻升級郵件閘道 —** 全面清查內部所有 Cisco 郵件設備，確認 Content Scanner Tools 升級至 25.3.0.5525 以上版本。
- **嚴格限制管理介面 —** 限制所有邊界防火牆與管理平台連線，僅允許內部受信任跳板機存取以防範未授權提權攻擊。
- **防範偽冒工具安裝 —** 強化端點軟體安裝限制與 PowerShell 執行控管，防止員工誤入假 AI 工具站點遭竊取身分憑證。

**參考來源:** [Cisco Warns of Active Attacks Exploiting New Critical Secure Email Gateway Vulnerability](<https://thehackernews.com/2026/10/cisco-warns-of-active-attacks.html>)

---

## 本週活躍威脅
📌 **Palo Alto Networks 修補遭在途利用的 PAN-OS RCE 漏洞**

Palo Alto Networks 緊急修補 CVE-2026-0322 漏洞，該管理介面弱點已遭在途鎖定，具網路存取權限的通過驗證者可藉此取得 root 權限。

**參考來源:** [Palo Alto Networks 修補程式es PAN-OS Authenticated RCE Flaw Amid Active Exploitation](<https://thehackernews.com/2026/10/palo-alto-networks-patches-pan-os.html>)

📌 **冒牌 AI 應用散布惡意腳本鎖定企業端點與身分憑證**

攻擊者偽冒 Claude 與 ChatGPT 等熱門 AI 品牌網站，誘騙使用者複製並執行 PowerShell 指令，進而竊取瀏覽器階段與企業帳號權限。

**參考來源:** [Fake AI Attacks Spread Across US Companies: How MSSPs Can Stop Incidents Early](<https://thehackernews.com/2026/10/fake-ai-attacks-spread-across-us.html>)

📌 **美國破獲逾 40 處筆電農場並起訴北韓遠端工作者詐欺案**

美國司法部起訴 14 名涉嫌協助北韓遠端資訊人員滲透 70 餘家美企的嫌犯，查扣 187 台電腦與 KVM 遠端控制設備。

**參考來源:** [U.S. Shuts Down Over 40 Laptop Farms, Charges 14 in North Korean IT Worker Fraud](<https://thehackernews.com/2026/10/us-shuts-down-over-40-laptop-farms.html>)

📌 **新機預購釣魚網站鎖定未更新 iOS 設備發動漏洞攻擊**

資安業者示警搭上新款 iPhone 熱潮的可疑網站，部分頁面會辨識訪客 iOS 版本並針對已知漏洞發動攻擊，未及時更新即面臨風險。

**參考來源:** [iPhone Duo開放預購前夕當心假網站，部分網站可利用iOS已知漏洞攻擊 - iThome](<https://www.ithome.com.tw/news/179731>)