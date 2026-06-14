---
title: "CISO 每日摘要：Hims 健康資料外洩、Citizen Lab Webloc 追蹤、GlassWorm 攻擊 (20260413)"
description: "Hims 遠距醫療平台遭駭洩露大量 PHI；Citizen Lab 揭露執法單位利用 Webloc 追蹤 5 億裝置；GlassWorm 攻擊鎖定開發者 IDE"
pubDate: 2026-04-13
tags: ["Hims 外洩", "Citizen Lab", "Webloc", "GlassWorm", "APT37", "Google DBSC"]
author: "Security Solutions Team"
featured: true
---

## 4月13日主要資安事件

- **Hims 醫療資料外洩：** 遠距醫療平台 Hims 發生重大資料外洩事件，暴露大量受保護的健康資訊（**PHI**），包括病歷、處方箋與個人識別資料。
- **Citizen Lab Webloc 調查：** Citizen Lab 揭露執法機構利用名為 **Webloc** 的監控系統，透過廣告資料基礎設施追蹤全球超過 **5 億個裝置**。
- **GlassWorm 行動：** 名為 GlassWorm 的攻擊行動使用 **Zig** 程式語言打造的載入工具，感染多款開發者 IDE，鎖定軟體供應鏈。
- **Google Chrome 146 推出 DBSC：** Google 在 Chrome 146 中加入 **Device Bound Session Credentials（DBSC）** 功能，防止 Cookie 遭竊取，大幅強化對 Token 竊取攻擊的防禦能力。
- **北韓 APT37 攻擊：** 北韓 APT37 組織利用 Facebook 社交工程誘餌散布 **RokRAT** 惡意軟體。
- **Marimo RCE（CVE-2026-39987）：** Marimo 的遠端程式碼執行漏洞在揭露後 **10 小時內** 即遭利用。
- **Smart Slider 3 Pro 後門：** Nextend 伺服器遭入侵導致 WordPress 外掛更新被植入後門。

🔗 **參考資料：** Hims 外洩 ([Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/hims-breach-exposes-most-sensitive-kinds-of-phi)) | Citizen Lab ([The Hacker News](https://thehackernews.com/2026/04/citizen-lab-law-enforcement-used-webloc.html)) | GlassWorm ([The Hacker News](https://thehackernews.com/2026/04/glassworm-campaign-uses-zig-dropper.html)) | Google DBSC ([The Hacker News](https://thehackernews.com/2026/04/google-rolls-out-dbsc-in-chrome-146.html))

## 本週活躍威脅

📌 **Hims 醫療平台資料外洩**

遠距醫療平台 Hims 遭駭導致大量病患敏感資訊外洩，包括醫療記錄、處方箋與個人識別資訊。醫療資料外洩在 **HIPAA** 法規下有嚴重的監管後果，並可能造成長期的聲譽損害。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/hims-breach-exposes-most-sensitive-kinds-of-phi)

📌 **Citizen Lab 揭露 Webloc 大規模監控系統**

Citizen Lab 記錄了一種名為 **Webloc** 的監控系統，利用廣告資料追蹤全球超過 **5 億個裝置**。執法機構據報在未取得搜索票的情況下使用此系統進行定位追蹤，引發嚴重的隱私與公民自由擔憂。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/citizen-lab-law-enforcement-used-webloc.html)

📌 **GlassWorm 行動鎖定開發者 IDE**

**GlassWorm** 攻擊行動使用 **Zig** 程式語言製作的載入器，感染多種整合開發環境（IDE）。此新穎手法鎖定軟體供應鏈，透過入侵開發者工作站可能導致大規模下游感染。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/glassworm-campaign-uses-zig-dropper.html)

📌 **Google Chrome 146 DBSC 防護 Cookie 竊取**

Google 在 Chrome 146 中推出 **Device Bound Session Credentials（DBSC）**，將認證 Session 綁定到特定裝置，使攻擊者難以竊取 Session Cookie 或繞過多因素認證保護。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/google-rolls-out-dbsc-in-chrome-146.html)
