---
title: "2026年10月7日 CISO每日資安通報"
description: "勒索軟體集團被端、Snowflake攻擊判決、ClickFix進化為本週威脅焦點，AI供應鏈風險與關鍵漏洞修補同時拉響警報。"
pubDate: 2026-10-07
tags: ["ransomware","clickfix","ai-security","supply-chain","vuln-patch","snowflake","iot-proxy","zero-day","cloud-security","identity-hijack"]
author: "Security Solutions Team"
featured: true
---

## 國際執法瓦解KillSec勒索軟體集團，16歲疑為管理員

國際執法機構執行KillSwitch行動瓦解KillSec勒索軟體集團，於西班牙、羅馬尼亞及英國逮捕三名嫌犯，其中一名16歲的疑似管理人員被捕，另一名成員在犯罪期間已屆成年。

調查人員在西班牙扣押電腦、手機及加密貨幣錢包，並鎖定贖金支付交易跡象； 警方在四國執行八次搜索，攔截KillSec暗網泄漏網站與五台關鍵伺服器。

當局保護至少110TB受害者資料免受進一步未授權存取。 本次行動涵蓋全球約1,000起KillSec攻擊事件，開發者於2026年8月滿18歲，部分犯罪行為發生時仍為未成年； 協商代表與合作夥伴身分亦被查明，警方持續追訴其他嫌犯。

### CISO應採取之行動

- **立即修補未更新系統 —** 立即檢視並修補PeopleSoft及其他未修補系統，未修補漏洞仍是勒索軟體與資料外洩的主要入侵管道。
- **優先處理關鍵供應鏈漏洞 —** 請即刻更新所有影響的系統與瀏覽器，JPCERT週報確認多項嚴重漏洞正遭主動利用。
- **評估AI供應鏈風險 —** 評估AI供應鏈風險並驗證AI開發工具的安全控制，Agent攻擊與工作流程身分劫持構成新興威脅向量。

**參考來源:** [Лидером вымогательской группы KillSec оказался 16-летний подросток](<https://xakep.ru/2026/10/06/killsec-down/>)

---

## 本週活躍威脅
📌 **前美軍士兵因Snowflake攻擊被判70個月監禁**

卡麥隆·維根尼亞斯因Snowflake客戶攻擊被判70個月監禁，2023至2024年影響165家以上組織包括AT&T，數億用戶資料外洩，凸顯憑證與雲端存取控制至關重要。

**參考來源:** [Американский военный получил 70 месяцев тюрьмы за атаки на AT&T, Verizon и другие компании](<https://xakep.ru/2026/10/06/wagenius-sentenced/>)

📌 **FBI終止Acc合約 PeopleSoft漏洞致ShinyHunters入侵**

FBI因PeopleSoft漏洞未修補致ShinyHunters入侵而終止與Acc合約，案發凸顯政府承包商風險，組織必須強化第三方服務及時修補機制。

**參考來源:** [FBI傳與Accenture解約，疑因未修補PeopleSoft漏洞造成ShinyHunters入侵 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBmRHBPOTlocDZDbDdUTU05UnZINnlkaWpCQ1M4RDRZYTBjN3hmT01SbElTczhYOHZKY2tNSnBIWFZtVlBOaTZvSnZFOWludw?oc=5>)

📌 **ClickFix進化 DNS TXT與快取隱藏惡意載荷**

ClickFix攻擊現利用DNS TXT記錄與瀏覽器快取預取隱藏惡意載荷，逃避偵測，資安團隊應更新釣魚偵測規則並強化使用者安全意識教育。

**參考來源:** [ClickFix Attacks Evolve to Better Hide Malicious Payloads](<https://www.darkreading.com/cyberattacks-data-breaches/clickfix-attacks-evolve-better-hide-malicious-payloads>)

📌 **美國國防部叫停Anthropic AI 供應鏈風險裁定**

美國國防部因供應鏈風險裁定而停止使用Anthropic AI，凸顯AI供應商信任與資料處理面臨更嚴格審查，企業導入AI服務前應完整評估供應鏈風險。

**參考來源:** [DOD Halts Use of Anthropic AI After Court Upholds Supply Chain Risk Designation - MeriTalk](<https://news.google.com/rss/articles/CBMitAFBVV95cUxOUGF5V3Q1a2o1bVVxRUUwUU91dHFxR09VbU41aXZ0NFZDSDRkdzV3cU40VV8xanVqSGtCZ2JDOWVJdnN5dWhZZXpqRGtJUFUteGxkYlc1cXRsNlFqY1hvV25BcjRIUGlXZmdYbTdJamlrcW0zUnpZc2stLTFFbGUyV21UdEV6NjdQYnFwa0VwV3FqcXZrelhkOW1KWksxa3ZVa2hDRlNZZlpWdFQ0RkdJNGJIT0w?oc=5>)

📌 **ClingSTUN Linux後門 利用24個漏洞改造IoT為代理節點**

ClingSTUN Linux後門利用24個已知漏洞入侵IoT裝置，通過合法公開STUN伺服器轉發惡意通訊以避開偵測，組織應即刻修補系統並全面清點所有暴露IoT資產。

**參考來源:** [Linux後門ClingSTUN利用公開STUN服務，惡意通訊更難辨識 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xbU9WdE9MMGtnektrNl9mN2RQRHVJWmVaNnY3LVlDMDNaeU5KUnhBWEdaYnRwMmc2Z25iNkJUTy0yS1c2cXFoX1NmTVJsUQ?oc=5>)

📌 **荷蘭漏洞揭露機構遭AI自主攻擊 Zammad零時差漏洞**

荷蘭漏洞揭露機構透過Zammad客服系統零時差漏洞遭AI自主攻擊，顯示公開支援平台面臨自動化威脅，組織應強化對外服務安防與即時威脅監控機制。

**參考來源:** [荷蘭漏洞揭露協會遭AI自主攻擊，攻擊者利用開源IT服務與客服系統Zammad零時差漏洞得到初期存取管道 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE16Q0NIMnhNbUU5Tk81WW0ycjdOcW9QSWhNaTZMVXRqV24zTlVLOWJnUk9leVhzX1RyaFdWOVp0elRfemVLTHRiLU9NUFJJZw?oc=5>)

📌 **Google PageBreak AI發現500多項XSS漏洞**

Google PageBreak AI代理在內部網頁應用程式自動發現500多項XSS漏洞，以確定性驗證降低偽陽性結果，顯示AI輔助漏洞探索已邁入實用階段，企業可參考。

**參考來源:** [Google's PageBreak AI Agent Finds 500 Flaws in Its Web Apps](<https://www.darkreading.com/application-security/google-pagebreak-ai-agent-500-flaws-web-apps>)

📌 **Anthropic擴大Claude安全存取 Glasswing半年發現12萬漏洞**

Anthropic擴大資安團隊對Claude的存取權限，Glasswing半年發現逾12萬個漏洞，顯示AI輔助安全測試已成為企業防御團隊的有效倍增器，值得持續關注。

**參考來源:** [Anthropic擴大資安Claude存取計畫，Glasswing半年找到逾12萬漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9RcWl3UWtYb1BUSmtvWG8yNHJicE5JTHBxbG5xX1h2WTBYVkx6TTVCbFZiT3czblJPSEFRRkVMQ1NpbUVya0VVSW5Cam9iZw?oc=5>)

📌 **Atlassian8產品曝任意檔案讀取漏洞**

Atlassian揭露影響8款主要應用程式的任意檔案讀取漏洞，所有組織應立即更新版本，以防止協作環境中發生未授權檔案存取與資料外洩事件。

**參考來源:** [Atlassian揭露影響旗下8款主要應用系統的任意檔案讀取漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mdXBacjhxSGxndHhWNTgtdmNpUGY1Yno1bWNZaTgxa2NFRW8yWlhBcThiMDVUV2o4TW5INTNqUzE5RlBCWFFMbmFwa2g1UQ?oc=5>)