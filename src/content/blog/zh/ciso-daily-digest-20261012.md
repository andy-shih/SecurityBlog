---
title: "CISO 每日摘要：美司法部與FBI查封中國永信至誠駭客工具，揭露臺灣大專院校遭滲透 (20261012)"
description: "美查封支援中國駭客Flax Typhoon之作案工具，SonicWall與AhsayCBS重大漏洞亦面臨積極利用威脅。"
pubDate: 2026-10-12
tags: ["cisa","flax-typhoon","sonicwall","ahsaycbs","bricksforge","darksword","ios-security"]
author: "Security Solutions Team"
featured: true
---

## 美司法部與FBI查封中國永信至誠駭客工具，揭露臺灣大專院校遭滲透

美國司法部與FBI宣布查封永信至誠科技控制的七個網域，中斷其支援中國駭客Flax Typhoon之Microscan及FishHub工具，並揭露臺灣約二十所大專院校曾遭滲透。

多國資安機構發布AA26-281A聯合公告，指出攻擊者結合釣魚工具與漏洞掃描，並於受害主機部署合法SoftEther VPN建立隱蔽通道，長期潛伏於教育與關鍵設施。

美國CISA隨後將該組織利用的五個已知漏洞納入KEV清單，涵蓋ProFTPD、OnlyOffice與Apache Struts等元件，要求聯邦機構限期完成緊急修補。

### 資安長戰略因應與防禦重點

- **清查未授權VPN通道 —** 全面檢視內網主機是否異常安裝SoftEther VPN，並防堵偽裝為正常HTTPS的443埠對外連線。
- **加速修補老舊曝險系統 —** 盤點邊界對外服務，優先修補ProFTPD與OnlyOffice等已被國家級駭客武器化的已知重大漏洞。
- **落實邊界抗釣魚MFA —** 針對Webmail、遠端存取通道及關鍵管理後台強制實施防釣魚多因素驗證，嚴防初始憑證外洩。

**參考來源:** [【資安日報】10月12日，美司法部與FBI查封中國永信至誠科技兩款駭客工具，臺灣多所大學曾遭其滲透 - iThome](<https://www.ithome.com.tw/news/179581>)

---

## 本週活躍威脅
📌 **SonicWall SMA 1000滿分漏洞甫修補即遭百次攻擊**

資安業者偵測到攻擊者積極利用SonicWall SMA 1000未授權SSRF漏洞CVE-2026-102255，試圖存取內部功能並執行非授權操作。

**參考來源:** [Critical SonicWall SMA 1000 Flaw Targeted in 135 Exploitation Attempts After 修補程式](<https://thehackernews.com/2026/10/critical-sonicwall-sma-1000-flaw.html>)

📌 **備份系統AhsayCBS雙漏洞遭串連植入後門與挖礦軟體**

駭客串連CVE-2026-105133與CVE-2026-105134繞過身分驗證並取得系統權限，於備份伺服器部署Webshell與匿蹤挖礦程式。

**參考來源:** [備份管理平臺AhsayCBS資安漏洞被串連利用，攻擊者試圖挖礦與植入後門程式 - iThome](<https://www.ithome.com.tw/news/179587>)

📌 **WordPress Bricksforge滿分漏洞遭利用執行任意程式碼**

攻擊者正積極利用Bricksforge外掛漏洞CVE-2026-85097，藉由表單上傳圖文多語義檔案繞過驗證，達成未授權遠端代碼執行。

**參考來源:** [Attackers Exploit CVSS 10.0 Bricksforge WordPress Flaw Enabling Unauthenticated RCE](<https://thehackernews.com/2026/10/attackers-exploit-cvss-100-bricksforge.html>)

📌 **iOS漏洞利用套件P7 DarkSword升級竊取加密錢包**

新型P7 DarkSword軍火級漏洞利用套件大幅縮減端點痕跡，並新增雙向C2通訊機制，專門鎖定蘋果裝置竊取鑰匙圈與加密錢包數據。

**參考來源:** [P7 DarkSword iOS Exploit Kit Adds Crypto Wallet Data Theft and Remote Commands](<https://thehackernews.com/2026/10/p7-darksword-ios-exploit-kit-adds.html>)

---

## OPSWAT 可以怎麼幫上忙

若報導涉及命令與控制、橫向移動或惡意網路流量，MetaDefender NDR 可補充網路層的威脅可視性與調查線索；成效取決於可觀測流量和部署範圍。 [MetaDefender NDR](<https://www.opswat.com/products/metadefender>)