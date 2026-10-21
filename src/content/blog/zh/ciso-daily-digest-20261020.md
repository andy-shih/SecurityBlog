---
title: "CISO 每日摘要：Zeabur 再遭入侵，宣佈在 321 萬個環境變數洩露後於年底關閉 (20261020)"
description: "Zeabur 遭遇重大入侵，超過 321 萬個環境變數洩露並將於年底關閉，而 Citizen Lab 確認 Pegasus 間諜軟體透過零點擊式漏洞利用感染塞爾維亞校長的 iPhone，時間在選舉前，擴大了針對公民社會的攻擊活動。"
pubDate: 2026-10-20
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Zeabur 再遭入侵，宣佈在 321 萬個環境變數洩露後於年底關閉

雲端平台 Zeabur 披露第二起安全事件，並宣佈將於今年底停止運營。此次入侵導致超過 321 萬個環境變數遭未授權存取，這些變數常包含敏感憑證，如 API 金鑰、資料庫密碼與驗證權杖。

該公司報告指出，原定於 8 月完成的憑證輪替並未完成，這一疏忽可能促成了入侵或擴大了其影響。暴露的環境變數構成直接供應鏈風險，因為攻擊者可能利用這些變數，直接進入客戶在平台上託管的項目所連接的下游應用程式、資料庫與第三方服務。

Zeabur 勸告所有使用者立即輪替服務中儲存的每一個密鑰，並審查存取日誌以查找異常活動。關閉時間表增加了緊迫性，客戶必須遷移工作負載，並確保生產環境中不存在長期有效的憑證。

### 對 CISO 的影響

- **立即輪替密鑰與供應鏈審計 —** 將 Zeabur 中儲存的所有密鑰視為已遭入侵；強制在每個連接的服務中自動輪替 API 金鑰、資料庫憑證與權杖，並在平台關閉前掃描依賴關係圖以尋找橫向存取路徑。
- **加速遷移與停用 —** 優先將工作負載從 Zeabur 遷移並設定最後期限，驗證生產環境中不存在長期有效憑證，並為替換平台實作短期、限定範圍的密鑰以限制影響範圍。
- **監控憑證重複使用與濫用 —** 對消耗 Zeabur 儲存之密鑰的服務部署憑證填充檢測與驗證日誌異常監控，因為洩露的變數能讓攻擊者直接進入下游系統並進行未授權存取。

**參考來源:** [Zeabur再遭駭宣布年底停運，逾321萬筆環境變數遭讀取、8月憑證未完成輪替 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84VDZoeVdiTjM0UVRiUXVBMHVpOHNNazRKVFdfRDF0Q3R5bHNVTW1OOF9LRkE4dkNkXzJZRWpYRnV0Q09TNXlmZEVsZzA1Zw?oc=5>)

---

## 本週活躍威脅

📌 **俄羅斯 APT28 入侵北約國家海軍造船商，部署新型反射式載入程式**

俄羅斯 APT28 被指與針對北約（NATO）兩個成員國的攻擊有關，包括一家海軍造船商與一家軍用航空發動機製造商。由 Symantec 威脅獵人團隊以「Swallowtail」代號追蹤的活動集群，涉及使用名為 HOOKEDGE 的後門，以及一個先前未記載的載入程式，該載入程式在記憶體中解密並執行加密載荷，使用在執行時提供的加密金鑰。在一次針對海軍造船商的攻擊中，操作者在一週內反覆返回受入侵的主機，疑似為手動鍵盤操作活動，使用兩種獨立技術竊取憑證資料，進入組織內部網路的持續 SSH 隧道，並部署一個先前未記載的反射式載入程式。

**參考來源:** [Russian APT28 Breaches NATO Naval Shipbuilder in NATO Country, Deploys New Reflective Loader](<https://thehackernews.com/2026/10/russian-apt28-breaches-nato-naval.html>) 

---

📌 **Pegasus 間諜軟體在塞爾維亞大學校長 iPhone 上獲確認，時間早於選舉**

Citizen Lab 高度確信，塞爾維亞貝爾格勒大學校長 Vladan Đokić 的 iPhone 在 2026 年透過零點擊式漏洞利用感染了 NSO Group 的 Pegasus 間諜軟體，時間為塞爾維亞提前議會選舉前六天；另一起涉及高調貪腐案件檢察官的案例收到了 Apple 威脅通知，但感染仍未確認，使得今年塞爾維亞公開已知的被針對個體總數至少達 16 人。

**參考來源:** [Pegasus Spyware Infection Confirmed on Serbian University Rector's iPhone Days Before Election](<https://thehackernews.com/2026/10/pegasus-spyware-infection-confirmed-on.html>) 

<!-- ciso-revision:ciso-20261020-1-1792558256905 -->
