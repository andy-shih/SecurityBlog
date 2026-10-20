---
title: "CISO 每日摘要：Zeabur再遭駭宣布年底停運，逾321萬筆環境變數遭讀取、8月憑證未完成輪替 - iThome (20261020)"
description: "Three security incidents reported in October 2026: Zeabur service disruption due to credential exposure, APT28 NATO naval shipbuilder breach with new reflective loader, and confirmed Pegasus spyware infection on a Serbian university rector's iPhone ahead of an election."
pubDate: 2026-10-20
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Zeabur再遭駭宣布年底停運，逾321萬筆環境變數遭讀取、8月憑證未完成輪替 - iThome

Zeabur 遭遇第二次駭客攻擊，營運團隊宣佈將於年底停運。事件導致逾 321 萬筆使用者的環境變數被竊取，安全風險極高。

根據報導，이번 공격은 8월에 발행된 인증서가 갱신되지 않아 발생했으며, 공격자는 이를 이용해 민감한 환경 변수에 접근했습니다. Zeabur 表示 이번 해킹으로 인해 사용자의 중요한 데이터가 유출될 가능성이 있습니다.

廠商目前正在調查事件來源，並建議受影響的使用者立即輪替所有密鑰與憑證，以減緩潛在的安全風險。

### 對 CISO 的影響

- **Credential lifecycle governance —** Enforce strict certificate rotation policies and automate credential revocation to prevent prolonged access from expired or unrotated secrets, as demonstrated by the Zeabur incident where an incomplete August certificate replacement led to environment variable theft.
- **APT28 tradecraft escalation —** Monitor for reflective loader deployment and persistent SSH tunnel patterns attributed to APT28 (Swallowtail/HOOKEDGE), as the group combines credential theft, multi-technique access, and novel in-memory payload execution against high-value NATO infrastructure.
- **Merchant spyware risk assessment —**  Treat Apple Threat Notifications as high-confidence indicators of targeted mercenary spyware activity; deploy Lockdown Mode and forensic verification for at-risk personnel, especially ahead of election periods, as confirmed in the Pegasus case involving a Serbian university rector.

**參考來源:** [Zeabur再遭駭宣布年底停運，逾321萬筆環境變數遭讀取、8月憑證未完成輪替 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84VDZoeVdiTjM0UVRiUXVBMHVpOHNNazRKVFdfRDF0Q3R5bHNVTW1OOF9LRkE4dkNkXzJZRWpYRnV0Q09TNXlmZEVsZzA1Zw?oc=5>)

---

## 本週活躍威脅

📌 **Russian APT28 Breaches NATO Naval Shipbuilder in NATO Country, Deploys New Reflective Loader**

Russian APT28 has been attributed to attacks targeting two member states of the North Atlantic Treaty Organization (NATO), including a naval shipbuilder and a manufacturer of military aircraft engines. The Symantec Threat Hunter Team, tracking the activity cluster under the moniker Swallowtail, involved the use of a backdoor called HOOKEDGE and a previously undocumented loader designed to decrypt and run an encrypted payload in memory using a cryptographic key supplied at runtime. During one attack against the naval shipbuilder, operators returned to a compromised host repeatedly over the course of a week in what appeared to be hands-on-keyboard activity, stealing credential material using two separate techniques, opening a persistent SSH tunnel into the organization's internal network and deploying a previously undocumented reflective loader.

**參考來源:** [Russian APT28 Breaches NATO Naval Shipbuilder in NATO Country, Deploys New Reflective Loader](<https://thehackernews.com/2026/10/russian-apt28-breaches-nato-naval.html>) 

---

📌 **Pegasus Spyware Infection Confirmed on Serbian University Rector's iPhone Days Before Election**

The iPhone of Vladan Đokić, rector of the University of Belgrade and a prominent supporter of Serbia's student protest movement, was infected with NSO Group's Pegasus spyware in 2026, the Citizen Lab said on October 19. The finding came six days before Serbia's October 25 snap parliamentary election. The infection used a zero-click exploit, meaning Đokić did not have to tap a link or open a file for it to work. The lab found the infection with high confidence, but its note provides no date within 2026, does not identify who was behind the attack, and notes that its investigation is ongoing.

**參考來源:** [Pegasus Spyware Infection Confirmed on Serbian University Rector's iPhone Days Before Election](<https://thehackernews.com/2026/10/pegasus-spyware-infection-confirmed-on.html>)
