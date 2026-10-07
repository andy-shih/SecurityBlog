---
title: "CISO 每日摘要：KillSec勒索主謀為16歲少年，國際聯合行動瓦解集團 (20261007)"
description: "國際執法瓦解勒索軟體集團；歐洲政府與美國聯邦機構遭入侵；ClickFix演化新逃偵手法威脅全球端點與網路安全。"
pubDate: 2026-10-07
tags: ["ransomware","data-breach","supply-chain","social-engineering","clickfix","law-enforcement","asia","vendor-risk"]
author: "Security Solutions Team"
featured: true
---

## KillSec勒索主謀為16歲少年，國際聯合行動瓦解集團

國際執法機構跨國行動瓦解KillSec勒索軟體基礎設施，逮捕三名嫌疑犯含16歲主嫌於西班牙，調查涵蓋十國聯合行動。

當局沒收暗網 leak 網站與五台關鍵伺服器，保護至少110TB受害者資料，對應全球約1000起勒索攻擊事件。

調查識別另一名8月滿18歲成員，開發者、談判與合夥人仍在逃； 西班牙追查勒索加密貨幣交易紀錄。

### 強化勒索軟體應變、供應商風險及社交工程防禦

- **加速修補與供應商風險管理 —** 優先處理未修補的對外系統與第三方供應商安全評估，避免如FBI-Accenture案例的初始入侵路徑。
- **驗證勒索軟體韌性措施 —** 確認離線備份、事件應變手冊與執法機構聯繫管道，因應KillSec全球規模與資料外洩戰術。
- **因應社交工程演化 —** 更新端點與瀏覽器防禦以抵禦DNS TXT與快取型ClickFix載荷傳遞，避開傳統偵測。

**參考來源:** [Лидером вымогательской группы KillSec оказался 16-летний подросток](<https://xakep.ru/2026/10/06/killsec-down/>)

---

## 本週活躍威脅
📌 **丹麥國家人口登記系統遭入侵，880萬民眾資料暴露**

丹麥國家人口登記系統遭入侵，880萬民眾個人資料暴露，當局被迫全面暫停線上服務。

**參考來源:** [丹麥人口登記系統遭駭，880萬人資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1lbjU0cnRpZ2hJSjJDZW1qYkkwY3l3ZmJpM3ZxSklIdDgzVng0XzQxdXFqQy1wZndKbDJJZGlRN0E3djBkSnJDTUFiNXhMdw?oc=5>)

📌 **FBI因PeopleSoft漏洞終止Accenture合約**

FBI因PeopleSoft漏洞未修補致ShinyHunters入侵，終止Accenture合約，凸顯聯邦供應商風險與修補程式管理缺失。

**參考來源:** [FBI傳與Accenture解約，疑因未修補PeopleSoft漏洞造成ShinyHunters入侵 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBmRHBPOTlocDZDbDdUTU05UnZINnlkaWpCQ1M4RDRZYTBjN3hmT01SbElTczhYOHZKY2tNSnBIWFZtVlBOaTZvSnZFOWludw?oc=5>)

📌 **ClickFix攻擊演化利用DNS TXT與瀏覽器快取**

ClickFix攻擊現利用DNS TXT記錄與瀏覽器快取預取隱藏惡意載荷，繞過傳統端點與網路偵測層。

**參考來源:** [ClickFix Attacks Evolve to Better Hide Malicious Payloads](<https://www.darkreading.com/cyberattacks-data-breaches/clickfix-attacks-evolve-better-hide-malicious-payloads>)

📌 **104.com.tw異常讀取危及12萬筆履歷**

104.com.tw系統異常資料讀取危及約12萬筆履歷資料，調查仍在進行。

**參考來源:** [【資安日報】10月7日，一零四資訊科技系統遭到異常讀取，12萬筆履歷資料恐外流 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1WcHBBZkREUThfWmo2UTB1SjlDUFJYWWFONmRZMFc0enFHV2ZJdkZUa2hKMkExT2NsWmY3YmJsUDd1U1JZa2N6cHpiWURvQQ?oc=5>)

📌 **大阪公立大學勒索攻擊被迫停課**

大阪公立大學遭遇勒索攻擊被迫停課，當地資安團隊已遏制侵害並評估完整營運影響。

**參考來源:** [日本大阪公立大學傳出遭勒索軟體攻擊而被迫停課 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB5RkF4M1NJRkItUThrNl9Qc1Nhb0h6ZkRhNUgweFIwUVJUNnRMQklGSGFWRDlXWml6OHZfNFF6S0ctWUhKZzdDVVlESTVDQQ?oc=5>)

---

## OPSWAT 可以怎麼幫上忙

OPSWAT 指出 MetaDefender Aether 可分析 ClickFix 類攻擊流程與載荷，協助辨識此類威脅；涵蓋範圍取決於分析流程與部署，不保證阻止所有攻擊。 [MetaDefender Aether](<https://www.opswat.com/blog/detecting-and-stopping-clickfix-attacks-before-they-reach-your-endpoints>)