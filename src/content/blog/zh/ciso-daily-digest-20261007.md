---
title: "CISO每日資安通報 — 2026-10-07"
description: "KillSec勒索集團被瓦解；Snowflake攻擊者判刑；FBI因PeopleSoft漏洞終止Accenture合約。[W04][W20][W07]"
pubDate: 2026-10-07
tags: ["killsec-ransomware","snowflake-breaches","shinhunters","clickfix","pagebreak-ai","clingstun","peoplesoft","jpcert","anthropic-supply-chain","atlassian","quantum-healthcare"]
author: "Security Solutions Team"
featured: true
---

## KillSec勒索集團被瓦解 管理員為16歲青少年

國際執法機構跨越西班牙、羅馬尼亞、英國與希臘掃蕩，瓦解KillSec勒索軟體犯罪集團，執行八場搜索並截斷關鍵暗網基礎設施與通訊伺服器。

疑似管理員為16歲青少年，位於西班牙阿利坎特； 開發者成員犯案時亦未成年，年滿18歲，部分指控發生時仍為限制責任年齡。

警方查扣電腦、手機、加密錢包與暗網伺服器，保護至少110 TB受害者資料免受未授權存取，覆蓋全球約1,000起記錄在案攻擊，威脅持續追蹤中。

### CISO三大行動建議

- **稽核ERP與對外系統修補狀態 —** 立即稽核所有面向網路之PeopleSoft與ERP系統及時修補漏洞；ShinyHunters利用單一未修補漏洞入侵FBI委外協力方Accenture，突顯補滴紧迫性。
- **強化IoT網路分段與裝置稽核 —** 審查IoT裝置清單與網路分段控制；ClingSTUN利用24個已知Linux漏洞將裝置轉為代理節點，隱瞞恶意C2通訊。應稽核韌體並監控DNS異常。
- **要求AI發現漏洞的確定性驗證 —** 要求對AI發現的弱點進行確定性利用驗證再進行優先順序排序；PageBreak的500個XSS發現顯示，未經證實的漏洞報告會壓垮安全團隊。

**參考來源:** [Лидером вымогательской группы KillSec оказался 16-летний подросток](<https://xakep.ru/2026/10/06/killsec-down/>)

---

## 本週活躍威脅
📌 **Snowflake攻擊者判70個月監禁**

前美國士兵因2023年起以Snowflake攻擊AT&T、威瑞森及165家以上組織被判70個月監禁。團隊開發SSH爆破工具，偷竊數兆位數據，勒索Ticketmaster與Santander等受害者。案情突顯憑證型雲端入侵持續風險。

**參考來源:** [Американский военный получил 70 месяцев тюрьмы за атаки на AT&T, Verizon и другие компании](<https://xakep.ru/2026/10/06/wagenius-sentenced/>)

📌 **FBI因PeopleSoft漏洞終止Accenture合約**

FBI傳因PeopleSoft漏洞未修復，ShinyHunters入侵成功並終止Accenture合約。事件突顯企業ERP系統修補延遲為攻擊者開啟入口。強調面向網路業務應急修補的紧迫性。

**參考來源:** [FBI傳與Accenture解約，疑因未修補PeopleSoft漏洞造成ShinyHunters入侵 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBmRHBPOTlocDZDbDdUTU05UnZINnlkaWpCQ1M4RDRZYTBjN3hmT01SbElTczhYOHZKY2tNSnBIWFZtVlBOaTZvSnZFOWludw?oc=5>)

📌 **ClingSTUN Linux後門將IoT變代理節點**

Linux後門利用24個已知漏洞入侵IoT裝置，使用合法公開STUN伺服器隱瞞惡意通訊。惡意軟體將受感染裝置轉為代理節點，干擾流量分析與歸因。IoT環境應審查韌體並監控DNS異常。

**參考來源:** [Linux後門ClingSTUN利用公開STUN服務，惡意通訊更難辨識 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xbU9WdE9MMGtnektrNl9mN2RQRHVJWmVaNnY3LVlDMDNaeU5KUnhBWEdaYnRwMmc2Z25iNkJUTy0yS1c2cXFoX1NmTVJsUQ?oc=5>)

📌 **Google PageBreak AI發現500個XSS弱點**

Google PageBreak AI代理程式以確定性利用驗證發現500個跨站腳本弱點。結合Gemini模型與非AI驗證器執行真實payload，達到接近零誤報。安全團隊應採用類似驗證流程再處理AI生成的弱點報告。

**參考來源:** [Google's PageBreak AI Agent Finds 500 Flaws in Its Web Apps](<https://www.darkreading.com/application-security/google-pagebreak-ai-agent-500-flaws-web-apps>)

📌 **JPCERT週報：FortiMail RCE與Cisco SD-WAN權限避讓已確認被利用**

JPCERT週報標示Fortinet FortiMail未驗證遠端程式碼執行可能已被利用，以及Cisco Catalyst SD-WAN Manager認證避讓已確認被利用，另含Chrome、Apache、OpenSSL、Mozilla與NetScaler ADC advisory。CISO應優先處理已確認被利用項目。

**參考來源:** [Weekly Report: Google Chromeに複数の脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261007.html>)

📌 **ClickFix攻擊進化利用DNS與快取隱藏payload**

攻擊者現以DNS TXT記錄與瀏覽器快取預取技術隱藏惡意payload，使早期攻擊階段更難偵測。ClickFix社交工程進化要求更新郵件與瀏覽器安全控制。SOC團隊應增強DNS payload交付與快取操縱偵測。

**參考來源:** [ClickFix Attacks Evolve to Better Hide Malicious Payloads](<https://www.darkreading.com/cyberattacks-data-breaches/clickfix-attacks-evolve-better-hide-malicious-payloads>)

📌 **DOD因供應鏈風險停用Anthropic AI**

美國國防部在法院維持供應鏈風險指定後停用Anthropic AI。此決定顯示政府對AI供應鏈風險的審查加嚴，可能影響企業AI採購政策。CISO應審查AI供應鏈風險評估。

**參考來源:** [DOD Halts Use of Anthropic AI After Court Upholds Supply Chain Risk Designation - MeriTalk](<https://news.google.com/rss/articles/CBMitAFBVV95cUxOUGF5V3Q1a2o1bVVxRUUwUU91dHFxR09VbU41aXZ0NFZDSDRkdzV3cU40VV8xanVqSGtCZ2JDOWVJdnN5dWhZZXpqRGtJUFUteGxkYlc1cXRsNlFqY1hvV25BcjRIUGlXZmdYbTdJamlrcW0zUnpZc2stLTFFbGUyV21UdEV6NjdQYnFwa0VwV3FqcXZrelhkOW1KWksxa3ZVa2hDRlNZZlpWdFQ0RkdJNGJIT0w?oc=5>)

📌 **Atlassian 8款產品任意檔案讀取漏洞**

Atlassian揭露影響8款主要應用程式的任意檔案讀取弱點，可能允許未經授權存取伺服器上的敏感檔案。管理員應立即套用補滴並稽核檔案存取記錄。

**參考來源:** [Atlassian揭露影響旗下8款主要應用系統的任意檔案讀取漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mdXBacjhxSGxndHhWNTgtdmNpUGY1Yno1bWNZaTgxa2NFRW8yWlhBcThiMDVUV2o4TW5INTNqUzE5RlBCWFFMbmFwa2g1UQ?oc=5>)

📌 **關鍵醫療系統尚未做好量子準備**

關鍵醫療系統尚未做好因應量子電腦破解現行加密的準備。量子準備與運作現實之間的差距，對受保護健康資訊構成長期風險。CISO應啟動後量子密碼學規劃。

**參考來源:** [Critical Healthcare Systems Aren't Quantum-Ready](<https://www.darkreading.com/iot/exposed-healthcare-systems-quantum-ready>)