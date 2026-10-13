---
title: "CISO 每日摘要：攻擊者劫持丹佛斯控制器將法國超市冷櫃加熱至 50°C (20261013)"
description: "攻擊者入侵數百家法國超市的丹佛斯工業控制器；勒軟談判專家面臨聯邦勒索指控；SonicWall SMA 設備遭主動 SSRF 攻擊；預裝 Android 惡意程式構建住宅代理殭屍網路；LG 智慧電視易受區網 Root 奪取。"
pubDate: 2026-10-13
tags: ["ransomware","insider-threat","ot-security","ics-attack","supply-chain-compromise","firmware-malware","android-malware","iot-vulnerability","sonicwall","ssrf","lg-webos","danfoss-controllers","cert-fr","midnight-mimosa"]
author: "Security Solutions Team"
featured: true
---

## 攻擊者劫持丹佛斯控制器將法國超市冷櫃加熱至 50°C

攻擊者劫持丹佛斯AK-SM與AK-SC製冷控制器，導致數百家法國超市冷櫃升至50°C，Intermarché、Netto與Coopérative U被迫銷毀大量食品。

CERT-FR於10月12日發布緊急警示，確認多起入侵事件，要求營運商斷開控制器連線或嚴格過濾網路存取，ANSSI首長強調必須立即移除網路暴露。

丹佛斯承認多為不再更新的舊型號，法國當局與廠商均未查明威脅行為者身分，亦未揭露此OT導向攻擊的初始入侵向量。

### CISO 影響

- **OT 資產可視性缺口 —** 立即盤點所有暴露網路的工業控制器；不再支援的舊裝置需實施補償性控制或汰換。
- **供應商依賴風險 —** 評估維護廠商對 OT 系統的遠端存取；強制最小權限、受監控且時限制的連線。
- **實體後果應變規劃 —** 更新事件應變手冊，涵蓋導致實體損害、變質或安全危害的 OT 攻擊，超越單純資料外洩。

**參考來源:** [Attackers Heat French Supermarket Fridges Up to 50°C by Hijacking Danfoss Controllers](<https://thehackernews.com/2026/10/attackers-heat-french-supermarket.html>)

---

## 本週活躍威脅
📌 **勒軟談判專家因聯邦勒索共謀罪被起訴**

勒軟談判專家Edward Dubrovsky因聯邦勒索共謀罪被起訴，罕見案例顯示安全專業人士涉嫌協助其本應防範的犯罪活動。

**參考來源:** [Prominent Ransomware Negotiator Faces Extortion Charges](<https://www.darkreading.com/insider-threats/prominent-ransomware-negotiator-extortion-charges>)

📌 **SonicWall SMA 1000 嚴重 SSRF 漏洞遭主動利用**

第三方報告SonicWall SMA 1000嚴重SSRF漏洞CVE-2026-102255遭主動利用，廠商否認證據；立即修補並監控未授權內部請求。

**參考來源:** [Maximum-Severity SSRF Flaw in SonicWall SMA Devices Under Attack](<https://www.darkreading.com/vulnerabilities-threats/max-severity-ssrf-flaw-sonicwall-sma-devices-under-attack>)

📌 **預裝 Android 惡意程式構建住宅代理殭屍網路**

Bitdefender追蹤「Midnight Mimosa」預裝惡意程式，感染多品牌聯發科Android裝置，取得系統權限安裝32+偽裝應用、廣告詐騙並納入住宅代理殭屍網路。

**參考來源:** [Low-Cost Android Phones Ship With Preinstalled Malware That Turns Them Into Residential Proxies](<https://thehackernews.com/2026/10/low-cost-android-phones-ship-with.html>)

📌 **LG 智慧電視 webOS 漏洞鏈實現區網 Root 奪取**

三階webOS漏洞鏈透過區網埠3001實現LG智慧電視免認證Root奪取；測試機型32LQ636BPSA與27TQ600SW已釋出韌體修補，無暫時替代方案。

**參考來源:** [LG Smart TVs Vulnerable to Pre-Auth Root Takeover From Local Network](<https://thehackernews.com/2026/10/lg-smart-tvs-vulnerable-to-pre-auth.html>)

---

## OPSWAT 可以怎麼幫上忙

若事件涉及 ICS、SCADA 或工業控制網路，可評估 MetaDefender OT Access 與 Industrial Firewall 的 OT 存取控管、網路分區及協定檢查能力；需依現場架構評估。 [MetaDefender OT Access 與 Industrial Firewall](<https://www.opswat.com/products/metadefender>)