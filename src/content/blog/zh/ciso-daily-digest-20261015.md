---
title: "CISO 每日摘要：思科示警 Secure Email Gateway 遭攻擊者鎖定利用重大零時差漏洞 (20261015)"
description: "思科與帕羅奧圖網絡示警重大邊界設備漏洞遭活躍利用，同時偽冒 AI 釣魚與海外詐欺風險持續攀升。"
pubDate: 2026-10-15
tags: ["cisco","palo-alto-networks","pan-os","email-security","remote-code-execution","threat-intelligence","fraud"]
author: "Security Solutions Team"
featured: true
---

## 思科示警 Secure Email Gateway 遭攻擊者鎖定利用重大零時差漏洞

思科發布資安通告，指出攻擊者正積極利用 Cisco Secure Email Gateway 的重大漏洞。未經身分驗證的遠端攻擊者可藉此直接將檔案寫入設備作業系統底層。

該漏洞追蹤為 CVE-2026-76519 且 CVSS 評分達 9.8。攻擊者透過特製電子郵件附件可取得 root 權限執行任意指令，受影響系統需啟用檔案信譽評等並運行舊版掃描套件。

思科在內部安全掃描中發現該漏洞並於十月觀測到攻擊行動。官方已主動聯繫出現潛在入侵指標的 Secure Email Cloud 託管客戶，並全面協助修復與復原作業。

### 資安長戰略因應指引

- **邊界閘道全面升級 —** 確認郵件閘道掃描工具已更新至 25.3.0.5525 以上，或盡速套用原廠修補韌體版本。
- **管理介面嚴格隔離 —** 限制防火牆管理介面僅能由內部受信任來源存取，並全面透過專屬跳板機進行管理連線。
- **強化身分審核機制 —** 落實遠端 IT 人員背景查核與實體設備追蹤，防範跨國身分冒用與詐欺滲透威脅。

**參考來源:** [Cisco Warns of Active Attacks Exploiting New Critical Secure Email Gateway Vulnerability](<https://thehackernews.com/2026/10/cisco-warns-of-active-attacks.html>)

---

## 本週活躍威脅
📌 **Palo Alto Networks 修補遭活躍利用之 PAN-OS 程式碼執行漏洞**

原廠修補已遭有限利用的 PAN-OS 管理介面漏洞 CVE-2026-0322。具網路存取權限的攻擊者可執行 root 權限指令，建議立即將管理介面限制於跳板機存取。

**參考來源:** [Palo Alto Networks 修補程式es PAN-OS Authenticated RCE Flaw Amid Active Exploitation](<https://thehackernews.com/2026/10/palo-alto-networks-patches-pan-os.html>)

📌 **美司法部查抄 40 處筆電農場並起訴 14 名北韓遠端外包詐欺共犯**

美國查扣 187 台設備並瓦解 40 處筆電農場，起訴 14 名涉嫌協助北韓遠端工作者滲透逾 70 家美國企業的共犯，涉案手法包含洗錢與身分盜用。

**參考來源:** [U.S. Shuts Down Over 40 Laptop Farms, Charges 14 in North Korean IT Worker Fraud](<https://thehackernews.com/2026/10/us-shuts-down-over-40-laptop-farms.html>)

📌 **偽冒 AI 工具誘騙企業員工執行惡意指令與竊取工作階段**

研究人員記錄到逾千起偽冒熱門 AI 品牌的攻擊行動，駭客設立假官網誘使員工在 PowerShell 中執行惡意指令，藉此竊取瀏覽器工作階段與企業憑證。

**參考來源:** [Fake AI Attacks Spread Across US Companies: How MSSPs Can Stop Incidents Early](<https://thehackernews.com/2026/10/fake-ai-attacks-spread-across-us.html>)

📌 **iPhone Duo 預購熱潮引發詐騙網站鎖定已知 iOS 漏洞展開攻擊**

趨勢科技示警不法份子設立假預購網站，除誘騙個資外亦會辨識訪客系統版本，若用戶手機未及時更新，僅瀏覽惡意網頁即可能遭已知漏洞攻擊滲透。

**參考來源:** [iPhone Duo開放預購前夕當心假網站，部分網站可利用iOS已知漏洞攻擊 - iThome](<https://www.ithome.com.tw/news/179731>)