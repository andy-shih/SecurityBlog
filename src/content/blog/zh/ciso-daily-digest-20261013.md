---
title: "CISO 每日摘要：攻擊者劫持丹佛斯控制器 將超市冷凍溫度推高至50°C (20261013)"
description: "攻擊者入侵丹佛斯冷凍控制器導致數百家法國超市溫度飆升；中國APT Flax Typhoon利用八個已知漏洞；SonicWall SMA 1000遭135次利用嘗試；Qilin與Settra勒索軟體利用Palo Alto VPN繞過；Bricksforge WordPress外掛RCE遭主動攻擊。"
pubDate: 2026-10-13
tags: ["ot-ics-attack","nation-state-apt","vpn-vulnerability","ransomware-initial-access","wordpress-rce","critical-infrastructure","active-exploitation","china-apt","france","sonicwall","palo-alto","danfoss","cisa-advisory","cve-2026-102255","cve-2026-0257","cve-2026-85097"]
author: "Security Solutions Team"
featured: true
---

## 攻擊者劫持丹佛斯控制器 將超市冷凍溫度推高至50°C

攻擊者10月11日遠端劫持丹佛斯冷凍控制器，數百家法國超市溫度飆升至50°C，Intermarché等連鎖被迫大量棄置食物。

CERT-FR確認多起入侵，緊急建議斷網或嚴格過濾受影響控制器存取；ANSSI局長稱將這類設備暴露於網際網路為急迫風險。

事件凸顯商業冷鏈IT/OT融合風險：具遠端管理介面的舊型工控機成單點故障，威脅多品牌食品安全與零售營運。

### CISO 影響評估

- **盤點暴露於網際網路的OT控制器 —** 立即盤點所有暴露於網際網路的OT/ICS控制器；對遠端管理介面實施網路分段與零信任存取。
- **確認舊型工控機修補狀態 —** 確認舊型工控機廠商修補狀態；無韌體更新時部署補償性控制措施。
- **整合OT威脅情報至SOC監控 —** 將OT專用威脅情報納入SOC監控；建立IT/OT融合攻擊情境的事件回應手冊。

**參考來源:** [Attackers Heat French Supermarket Fridges Up to 50°C by Hijacking Danfoss Controllers](<https://thehackernews.com/2026/10/attackers-heat-french-supermarket.html>)

---

## 本週活躍威脅
📌 **中國APT Flax Typhoon利用八個已知漏洞發動間諜活動**

七國聯公告指中國APT Flax Typhoon利用ProFTPD、OnlyOffice與Apache Struts八個漏洞，針對東南亞與北美政府、製造與醫療部門展開間諜活動。

**參考來源:** [中國駭客Flax Typhoon利用8個已知漏洞發動攻擊，美CISA要求聯邦機構緊急修補其中5個弱點 - iThome](<https://www.ithome.com.tw/news/179574>)

📌 **SonicWall SMA 1000關鍵SSRF漏洞遭135次利用嘗試**

威脅行為者在10月6日修補釋出後數日內，從兩個美國IP對SonicWall SMA 1000關鍵預認證SSRF漏洞CVE-2026-102255發動135次利用嘗試。

**參考來源:** [Critical SonicWall SMA 1000 Flaw Targeted in 135 Exploitation Attempts After 修補程式](<https://thehackernews.com/2026/10/critical-sonicwall-sma-1000-flaw.html>)

📌 **Qilin與Settra勒索軟體利用Palo Alto VPN繞過漏洞**

勒索軟體Qilin與Settra利用Palo Alto PAN-OS認證繞過漏洞CVE-2026-0257，建立未授權VPN連線取得初始存取權，自5月持續活躍。

**參考來源:** [勒索軟體Qilin、Settra積極利用Palo Alto Networks防火牆已知漏洞，建立初期入侵管道 - iThome](<https://www.ithome.com.tw/news/179634>)

📌 **Bricksforge WordPress外掛CVSS 10.0 RCE遭主動利用**

Bricksforge WordPress外掛CVE-2026-85097 CVSS 10.0未認證RCE遭主動利用，攻擊者透過MIME驗證缺陷上傳PHP偽裝檔案；3.1.8.10版已修補。

**參考來源:** [Attackers Exploit CVSS 10.0 Bricksforge WordPress Flaw Enabling Unauthenticated RCE](<https://thehackernews.com/2026/10/attackers-exploit-cvss-100-bricksforge.html>)

---

## OPSWAT 可以怎麼幫上忙

若報導涉及命令與控制、橫向移動或惡意網路流量，MetaDefender NDR 可補充網路層的威脅可視性與調查線索；成效取決於可觀測流量和部署範圍。 [MetaDefender NDR](<https://www.opswat.com/products/metadefender>)