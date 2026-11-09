---
title: "CISO Daily Digest: Philippines overseas employment system database backup of about 69GiB suspected stolen, government launches investigation (20261109)"
description: "A Philippine overseas employment system is investigating a suspected theft of a 69GiB database backup; Chinese hackers using AI agents reportedly intruded into Taiwan government systems; and a breach at Japanese ISP Arara may have exposed 81 million customer records."
pubDate: 2026-11-09
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Philippines overseas employment system database backup of about 69GiB suspected stolen, government launches investigation

A Philippine government overseas employment system is under investigation after a database backup of approximately 69GiB was suspected stolen.

Authorities have launched an inquiry into the suspected data theft involving the employment system backup.

The scope of exposure and whether any records were accessed remain under investigation.

### 📌CISO Impact

- **Protect backup repositories and investigate suspected theft —** Treat the suspected theft of a 69GiB database backup as a potential data exposure, secure backup storage, and begin forensic investigation before confirming affected records.
- **Assess AI-driven intrusion threats to government systems —** Review authentication, monitoring, and segmentation for government networks following reports of AI-agent intrusions into Taiwan legislative and justice systems.
- **Manage third-party ISP breach exposure —** Evaluate data shared with ISP Arara, notify potentially affected customers, and require the provider to confirm the scope of the possible 81 million record exposure.

**Reference:** [菲律賓海外就業系統約69GiB資料庫備份疑遭竊，政府展開調查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE14bno3WTBta1Ryd1dmSjdhSWNXQzJlVktacHQ1NlgwSUNSMl9rTXlmM3B4TThuYzBEbXpSTnVITVVrcVpwcjdkUTMyRHdudw?oc=5>)

---

## Active Threats This Week

📌 **Chinese hackers use AI agents to attack Asian government agencies, intruding into Taiwan Legislative Yuan and Ministry of Justice internal systems**

Chinese hackers reportedly used AI agents to attack Asian government agencies, including intrusions into the internal systems of Taiwan's Legislative Yuan and Ministry of Justice.

**Reference:** [中國駭客利用AI代理攻擊亞洲政府機關，入侵臺灣立法院、法務部的內部系統 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9zeDZTY29uUG9jRG4zZnhDaVByRkZhZXdfbVc0SlBQajVDXy1scmxPVkhvbTJITnVjMnU2R1QxQzlXdW4tR3BwWUctQW5yQQ?oc=5>) 

---

📌 **Japanese ISP Arara hacked, affecting Shogakukan, BIC Camera, MOS Burger and hundreds of other customers, possibly exposing 81 million records**

Japanese ISP Arara suffered a breach affecting hundreds of customers including Shogakukan, BIC Camera, and MOS Burger, with up to 81 million records possibly exposed.

**Reference:** [日本ISP業者Arara遭駭影響小學館、BIC Camera、摩斯漢堡等數百家客戶，可能外洩8,100萬筆資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5zQ1pqT21ZYnZvN05fUTF5Nk8zSzgtbkF5bjA3UU9OY2pJcU02N2tUWHdLUU1McmxxUGNNN2E2RGZiVldhMDU1VFYwVGNPUQ?oc=5>) 

---

📌 **OpenSSH authentication bypass vulnerability (CVE-2026-123158)**

JPCERT/CC warns that OpenSSH versions before 10.6p2 running with musl libc, PAM disabled, password authentication enabled, and accounts whose password hash field is "\*" can allow unauthenticated remote attackers to log in without a valid password. A proof of concept is public, GreyNoise reported exploit attempts since November 5, 2026, and successful intrusion, post-intrusion command execution, and C2-agent placement observed by November 7, though JPCERT/CC confirms no organizational compromises at present.

**Reference:** [お知らせ：CyberNewsFlash「OpenSSHにおける認証回避の脆弱性（CVE-2026-123158）について」](<https://www.jpcert.or.jp/newsflash/2026110901.html>) 

---

📌 **Rails patches 9.8 severity flaw affecting sites using ImageMagick for uploaded images**

iThome reports Rails patched a 9.8 severity vulnerability relevant to websites processing uploaded images with ImageMagick.

**Reference:** [Rails修補9.8分重大漏洞，使用ImageMagick處理上傳圖片的網站需留意 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9SVUF1cmtKdGNFT29RZzMteDJFZm12eXdjSXVtVXg1WHktR09zazVYaU1ST3pEd3VPOFg5SWRJVnRUYkg4ZUVybnhuckVWZw?oc=5>) 

---

📌 **CISA flags SonicWall SonicOS MFA bypass flaw amid reports of possible exploitation**

CISA added CVE-2026-19868 (CVSS 7.1/7.5), an authentication enforcement flaw in SonicOS SSL-VPN, to its KEV catalog after reports it may have been exploited in real-world attacks. The flaw may let a user with valid alternate-authentication credentials bypass SAML controls and MFA; SonicWall investigated a potential exploitation report and urged immediate patching. FCEB agencies should apply patches by November 20, 2026.

**Reference:** [CISA Flags SonicWall SonicOS MFA Bypass Flaw Amid Reports of Possible Exploitation](<https://thehackernews.com/2026/11/cisa-flags-sonicwall-sonicos-mfa-bypass.html>) 

---

📌 **Taiwan-Based Hacker Used BOSSAI AI Agents to Steal Taipei Emergency Dispatch Records**

Acronis Threat Research Unit reports that a single attacker in Hualien City, Taiwan, used a local setup called BOSSAI with nine AI agents running largely on "abliterated" models to target hundreds of organizations across at least 11 countries, successfully accessing or stealing data from about 10 targets in Taiwan, Mexico, and Thailand.

**Reference:** [Taiwan-Based Hacker Used BOSSAI AI Agents to Steal Taipei Emergency Dispatch Records](<https://thehackernews.com/2026/11/taiwan-based-hacker-used-bossai-ai.html>) 

---

📌 **Default 'admin:admin' Server Password Helps Researchers Hack Two Automakers, Unlock and Start Cars**

Researchers Shubham Shah and Sam Curry found that ForgeRock identity servers behind two automakers' mobile apps exposed an Apache Felix admin console still using the default admin:admin credentials, allowing full customer account takeover and the ability to unlock doors and start engines on connected test vehicles with owner consent.

**Reference:** [Default 'admin:admin' Server Password Helps Researchers Hack Two Automakers, Unlock and Start Cars](<https://thehackernews.com/2026/11/default-adminadmin-server-password.html>) 

---

📌 **U.S. Agencies Warn Refrigeration Controller Attacks Could Cause Fires and Inventory Losses**

CISA, FBI, HHS, USDA, and DOT issued a joint advisory warning that threat actors are actively targeting industrial refrigeration and cold-chain controllers globally, exploiting authentication bypasses, code injection, and weak configurations to alter temperatures, force defrost cycles, and cause inventory loss or fire hazards.

**Reference:** [U.S. Agencies Warn Refrigeration Controller Attacks Could Cause Fires and Inventory Losses](<https://thehackernews.com/2026/11/us-agencies-warn-refrigeration.html>) 

---

📌 **Acer Subsidiary Suspends Online Store Operations After Outsourcing Vendor Cyberbiz Database Experienced Abnormal Access**

iThome reports that Acer's subsidiary suspended online store operations following abnormal access to outsourcing vendor Cyberbiz's database.

**Reference:** [宏碁智新因委外廠商Cyberbiz資料庫遭異常存取，已暫停線上商店營運 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9BNExNQ3dqR09fSjJaeWxQSjRIT2owbGRkNEdzcXZWWEdfZWhyMjg2b1R3cHlxeVZzbHBsXzkxejJ5TFd0NVlNVFpHXy0xZw?oc=5>) 

---

📌 **Weekly Recap: SSHole Exploited, APT Root RCE, Robot Takeovers, 15K Hacked Sites, and More**

The Hacker News weekly recap covers multiple active threats, including exploitation attempts against OpenSSH flaw CVE-2026-123158 affecting musl-based systems with PAM disabled, a Debian and Ubuntu APT vulnerability allowing root code execution, Zyxel GS1900 switch zero-day CVE-2026-107441 exploited against nearly 1,000 devices, trojanized Control Web Panel distributing CWPdoor malware, hijacked cPGuard update infrastructure delivering backdoors, AI-assisted Crafty Falcon attacks on BFSI organizations, PhantomDOM browser-in-the-middle phishing targeting Microsoft 365 sessions, a CPython sandbox escape vulnerability, QNAP Plex2Shell exploitation reports, MetaMask staking reward diversion, compromised GitHub projects targeting security professionals, and 15,579 websites infected with malicious JavaScript skimmers and exploit kits.

**Reference:** [⚡ Weekly Recap: SSHole Exploited, APT Root RCE, Robot Takeovers, 15K Hacked Sites, and More](<https://thehackernews.com/2026/11/weekly-recap-sshole-exploited-apt-root.html>) 

---

📌 **Yitian Cool-Go and Acer Fashion Online Stores Outsourcing Vendor Cyberbiz Experienced Security Incident**

iThome reports a security incident involving outsourcing vendor Cyberbiz affecting Yitian Cool-Go and Acer Fashion online stores.

**Reference:** [倚天酷碁與宏碁風尚線上商店委外商Cyberbiz發生資安事件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9salRHbENWZGFTRUxVb0x6ZWkxMjlUOHd0V19TRmQwX1FxNGVQcE9tc2NzbllOLWpyRklLVHRqb3N2RnJVXzFabndCdDNXZw?oc=5>) 

---

📌 **Taiwan NICS reports DeepSeek AI model fails jailbreak tests and lacks added safety guards**

Taiwan's National Institute of Cyber Security disclosed test results showing the offline DeepSeek R1 model insufficiently resists multiple jailbreak techniques and does not include the supplementary safety mechanisms found in comparable models.

**Reference:** [新聞 - iThome](<https://news.google.com/rss/articles/CBMizwFBVV95cUxQY19PM1VsUG55XzlUaURBR0NVX1Mtc2MxVW1Fcno4TjgzMHhWb3BmdjREb0xaZE1BRjJUb0c1UG82YnFZdjdXREk3aDBSYmJEX2J0UFpONDBVeGN4emlJVWpRWGZQTWF5dEI4QU1ITmRtWlVEc3dGeWItbWE2Njh2Q3RYeVl5LVctOW9sNW52Vm1YMXVSZWlSWDdLNnhpQW1jelUwdWVoek0zZDhjUWhuYUk1cEpQZTBmWS1FVmlDNGZWNzN4aXVXS3hJc3V4bU0?oc=5>) 

---

📌 **AI-powered attack system BossAI targets Taiwan emergency response services**

iThome's daily security briefing reports that an automated AI attack platform dubbed BossAI has been directed at Taiwan's emergency response infrastructure, according to the November 9 edition.

**Reference:** [【資安日報】11月9日，AI自動化攻擊系統BossAI鎖定臺灣緊急應變服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9LNURQb3B3dndZcmV6ZWx3SkhFM2lXNnBCQW9DYkZvRkJNUE9sRVJPMHB4TWZGaTFqWkc4Uml6a1Y0MU1JZTNoVmcwNVlZdw?oc=5>) 

---

📌 **U.S. CISA warns SonicWall vulnerability under active exploitation**

CISA has added a SonicWall security flaw to its Known Exploited Vulnerabilities catalog, signalling confirmed malicious use in the wild and urging immediate patching.

**Reference:** [美國CISA警告SonicWall資安漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE41b0hqc3ozalpXQWR1TWpaX3VrWHdPdlRQRWU5bkFaXzFEUTFIYjkzV1djb2V2dE5IdENFV0hOWXFfRVRjM1RUbkd5dWZWUQ?oc=5>) 

---

📌 **Web3Auth Flaw Exploited to Steal Keplr Crypto, Provider Empties Other Wallets for Safety**

The Hacker News reported on November 9, 2026 that attackers exploited a Web3Auth security flaw to compromise Keplr wallets created with Google or Apple sign-ins. Keplr said the flaw led to a private key breach for some affected users, while Web3Auth moved funds from additional at-risk wallets into recovery wallets before the attacker could reach them. The money was transferred across 11 Cosmos-family blockchains and eight Ethereum-style chains. Bitquery counted at least $6.01 million moving from over 44,000 wallets into recovery wallets, first treating the transfers as theft before correcting its analysis to describe them as a rescue. GoPlus estimated at least $1 million was actually stolen. About 20% of Google and Apple login accounts were affected, though only a fraction appeared exploited. Keplr has paused Google and Apple sign-ins. Web3Auth paused its embedded wallet service used by other apps, though Consensys said its investigation found no evidence MetaMask users were impacted. Users are advised not to send new funds to affected accounts, not to recreate them, and to move non-staked assets to recovery-phrase or hardware wallets.

**Reference:** [Web3Auth Flaw Exploited to Steal Keplr Crypto, Provider Empties Other Wallets for Safety](<https://thehackernews.com/2026/11/web3auth-flaw-exploited-to-steal-keplr.html>) 

---

📌 **Cisco Finds Malware Using Claude AI to Profile Victims and Rank Stolen Accounts**

The SOFX Report covered Cisco research identifying malware that uses Claude AI to profile victims and rank stolen accounts.

**Reference:** [Cisco Finds Malware Using Claude AI to Profile Victims and Rank Stolen Accounts - The SOFX Report](<https://news.google.com/rss/articles/CBMiowFBVV95cUxOTzFUUGh0Q05FQWJ6NXlqTmJnLTBZaDd5NHBCWm90eVVyNEt2RWZRTlU0WFJMbUVPVFhCc0xvZW5ic29Ncm4zeXJHMG94S2g3eVVCc3BhOTRxUzRsLUkxNjMwMjBid0dXbnVBNW1VWnpIb3JvZnZnNWZpWmZkMmtrOFFfU0tzNF9MbXZVSy1FYkJxbEdyLWowRjNRYVM0MnlyQkVN?oc=5>) 

---

📌 **MS&amp;AD Insurance Group Policyholder Website Accessed, 720,000 Customer Records Including Mitsui Sumitomo Leaked**

iThome reported that the MS&amp;AD Insurance Group policyholder website was accessed, resulting in the leakage of 720,000 customer records including Mitsui Sumitomo customers.

**Reference:** [日本保險集團MS&amp;AD保戶網站遭存取，外洩三井住友等客戶資料72萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5md3ZPSmx0WXBKNV8wbHBmR1NvNTRfOXg2bHFLcVM4X0ZtR2dxWU5RWFZhQ0tSY0Q5VmY5SmFaeXg3Ull6NUl3STJYVllnQQ?oc=5>) 

---

📌 **QNAP Warns NAS Devices Targeted by Plex2Shell Vulnerability Attacks**

QNAP has issued a warning that its NAS devices are being actively targeted by attacks exploiting the Plex2Shell vulnerability, according to iThome reporting.

**Reference:** [威聯通警告NAS設備遭遇Plex2Shell漏洞攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE85X0Q5ZXM5ZWhHdUVaQ1VSdXFidHZjX1l3dG9XTGtfVGJva1dEd3NhTkFyVzhBVl9MajFlRGlLM1ppbUFYSTREbzkwTGR4UQ?oc=5>) 

---

📌 **Kaohsiung Police Arrest Man for Using AI to Build Attack System Stealing Over 230,000 Personal Records**

Kaohsiung police have arrested a man surnamed Lin who allegedly used AI to construct an attack system that stole more than 230,000 personal records for sale, iThome reports.

**Reference:** [高雄警方偵破林姓男子用AI架設攻擊系統，竊取逾23萬筆個資販售 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5YRmt1Ujg5WXp0TkQ0U240RTFzTW9Gay1uSERpRVc4X0RuVk1FNnFzRHl3cVNVd0dBMEJYNTQzeUdUTFRCTjkzby1mc0lBQQ?oc=5>) 

---

📌 **SonicWall Patches SSL-VPN Authentication Bypass Flaw, Warns of Possible Exploitation**

SonicWall has released a patch for an SSL-VPN authentication bypass vulnerability and advised that the flaw may have already been exploited in the wild, per iThome coverage.

**Reference:** [SonicWall修補SSL-VPN身分驗證繞過漏洞，原廠示警可能已遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GaHpLS0VXdHVMWjk4eXppcWMwVUlrRnRqamc4OGNLbnVEb190b0czSngtR2VVY0E2VzlSMmd2TGw0M2J3cWRod2Q5QVBPUQ?oc=5>) 

---

📌 **LNbits Urges All Operators to Shut Down Their Bitcoin Lightning Wallet Servers Amid Attacks**

LNbits has asked all operators of its Bitcoin Lightning wallet system to shut down their servers immediately because of active attacks. The project has security fixes pending but has not yet released patched software. One operator reported that attackers withdrew 2,285,545 satoshis, about 0.023 bitcoin, from his server before he could stop it. LNbits also took its own cloud instances on my.lnbits.com offline, with services expected back by about 17:20 UTC. The exact vulnerable extension has not been publicly identified, and the project has not disclosed how many servers were affected or total losses.

**Reference:** [LNbits Urges All Operators to Shut Down Their Bitcoin Lightning Wallet Servers Amid Attacks](<https://thehackernews.com/2026/11/lnbits-urges-all-operators-to-shut-down.html>) 

---

📌 **Chainalysis breach reportedly stole credentials and tokens for all users**

Xakep reports that hackers breached Chainalysis and stole credentials and tokens for all users, based on a Russian-language headline. No additional details are available from the source.

**Reference:** [При взломе Chainalysis хакеры похитили учетные данные и токены всех пользователей](<https://xakep.ru/2026/11/09/chainalysis-leak>) 

---

📌 **PHP2Shell vulnerability sounds alarm: How can enterprises quickly grasp threat context and attack risk? - iThome**

iThome reports on the PHP2Shell vulnerability and enterprise threat-context and attack-risk considerations. No additional details are available from the source headline.

**Reference:** [PHP2Shell 漏洞敲響警鐘 企業如何快速掌握威脅脈絡與攻擊風險？ - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE85ZG8yZ3VsY0FjeHdKdUlmU1lsbmE1S0tCTDAwR2ZETE51X3k5ZXhkN1VIeFlxN1E2dmpVdk5qTXpFbmN1Rjl3d0F4TQ?oc=5>) 

---

📌 **Attackers spread fake security tools on GitHub and implant backdoors through the Visual Studio compilation process - iThome**

iThome reports that attackers distributed fake security tools on GitHub, using Visual Studio compilation processes to implant backdoors.

**Reference:** [駭客在GitHub散布假資安工具，利用Visual Studio編譯流程植入後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5rUEdTbVV0MzhaMVl2OXhHRG56RGowN09fTkhCTWZVWXBuYVBWZ2o1T2xTMzhmVWRZMWRlQWFwR0ZyTzF1cGt4Vzk5ZXd3UQ?oc=5>) 

---

📌 **Acronis discloses details of AI-driven attack system BOSSAI, integrating 12 AI agents, MCP and Skills - iThome**

iThome reports that Acronis disclosed operational details of BOSSAI, an AI automation attack system integrating 12 AI agents, MCP and Skills.

**Reference:** [Acronis揭露AI自動化攻擊系統BOSSAI運作細節，整合12個AI代理、MCP與Skills - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5jMXhRZ3g2Q3VSeVkyNmVRRVFyWDl1QTVTM2dxMFB3bDBIcVBCMEUzOURZZTg2b2MzMi1oTjdMWlltZjRDWXNSTFZoRzJfUQ?oc=5>) 

---

📌 **Tianjen members and online mall platform order data may be affected by the 91APP security incident - iThome**

iThome reports that Tianjen members and online mall platform order data may have been affected by the 91APP security incident.

**Reference:** [天仁會員與線上商城平臺訂單資料恐受91APP資安事件波及 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBybWtyQnlycl8zSE5mX0tYUzNIS0d4ajQzcjNEUzEzSDNxaVJ1Mkt5NHRUQ2wzby1xWUQya2syY2JfMXdjSUFaR04zSFoyUQ?oc=5>) 

---

📌 **Taiwan Salt Online Mall outsourced vendor database accessed without authorization**

iThome reports that the database of an outsourced vendor for the Taiwan Salt Online Mall was accessed without authorization.

**Reference:** [臺鹽線上商城委外廠商資料庫遭未授權存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE00NC1wRUZPdHJiQ2RBQzBxOGtJVXlYcFZPbUl1VzRDT3pEUy16ZDI1MG50WG5QellKNmJsd0R1ekhkSGhYVVN1OEdzUDZiUQ?oc=5>) 

---

📌 **Former OpenAI Engineer Pleads Not Guilty to Planting Covert Device in Executive Meeting Room**

The Hacker News reports that former OpenAI engineer Abdulrahman Alfozan pleaded not guilty in San Francisco federal court to planting a sophisticated recording device in an executive conference room, with prosecutors alleging an attempt to unlawfully record sensitive conversations involving senior personnel.

**Reference:** [Former OpenAI Engineer Pleads Not Guilty to Planting Covert Device in Executive Meeting Room](<https://thehackernews.com/2026/11/former-openai-engineer-pleads-not.html>) 

---

📌 **Anthropic's Claude also caught up in breach; data linked to around 100 South Korean companies exposed**

Financial News reports that data linked to around 100 South Korean companies was exposed in a breach involving Anthropic's Claude.

**Reference:** [Anthropic’s Claude also caught up in breach...Data linked to around 100 South Korean companies exposed - 파이낸셜뉴스](<https://news.google.com/rss/articles/CBMiWEFVX3lxTE5JZE1FakVCdHhycDNpNU5iOWRSWUt3UEVHdWxoclgtNE1XajFnU2VESEVBUjNWb2tOeVZHclp4cTkwLTU5bnpoYzl0T0E2cHZPeWdVVlJ5YXI?oc=5>) 

---

📌 **Attackers Abuse Microsoft Entra ID to Breach MSPs and Impact Downstream Customers**

iThome reports that attackers abused Microsoft Entra ID to compromise managed service providers and extend impact to downstream customers.

**Reference:** [駭客濫用Microsoft Entra ID，入侵MSP並波及下游客戶 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mVXNBbS1wYkl4amVrdmdGNERNT3R2YklBTk0zemlHaGV6ejAyM0Q3b2JVcXdOeVJ4LVVTZWszNGJUZ0ZZRTZhYkttUWhNdw?oc=5>) 

---

📌 **Apple to Inspect Publicly Shared iCloud Photos and Files Starting with Version 27.3**

iThome reports Apple will begin checking publicly shared iCloud photos and files from version 27.3.

**Reference:** [Apple將檢查iCloud公開分享的照片與檔案，27.3版起實施 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ndDRHZDM4UzdNdVlVWnBTZ3lrcVBnWjNhaDF4U3hLd3hoRWdqMk9wLUxBQ2ZfTUhBLUdTMVZVUl9rM3c0YzQweXQwWlpIQQ?oc=5>) 

---

📌 **Internal Information System Intrusion**

iThome reports an intrusion into an internal information system.

**Reference:** [內部資訊系統入侵 - iThome](<https://news.google.com/rss/articles/CBMipgFBVV95cUxOaXFINkVDelZlaWJkcmYwc3ZoMThYMTdNZXlRY3ZaNEs0VXVWYW5iSDV4bmRHXzR1dy1JenRQYmFwUXNiWG40c3JfXzZ4THBGRmUzT0tmSlk3OEJLUW16T2Q4WlpTLVA3MmRjbU9ja25HQUlad1hWV196bEpuMDhIdXloQVFfRk1rXzFYVUQxNUFKRzNFQ1FWWHF3ODc5TGxneFp6RkJB?oc=5>) 

---

📌 **Customer and employee data leak - iThome**

iThome reports a customer and employee data leak.

**Reference:** [客戶與員工資料外洩 - iThome](<https://news.google.com/rss/articles/CBMisgFBVV95cUxONE10cWZwUlRzQUFZcG95SF9VcFhVUWlKOXNxYVpNQTM4SVpUbXcwbm15cldvTlVyaHdUblVEYURoLXgxRDBiVHlYeDRQUFpCbEVQWEdUeXNoYjB0YkFvRkpMZ0RQYlhPYVltT3JtY0k3dEJYWG51MDR5WXZ4ODhZbGYtSi1rRlZTX0hJYTRvUFhjcjJVZ2ZnNGNHRkx3Tmc2NXRIS3M5bGJ5ZC1zRDhfaGhB?oc=5>) 

---

📌 **JVN: Updates for Siemens Products (November 2026)**

JVN reports updates for Siemens products dated November 2026.

**Reference:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **Viewing the importance of enterprise threat intelligence from major data leak incidents in Japan - iThome**

iThome discusses the importance of enterprise threat intelligence in light of major data leak incidents in Japan.

**Reference:** [從日本大型資料外洩事件看企業威脅情報的重要性 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5rekRyaFB6UlQtWTFVVWxQQlJwVUxGRzZVX3VERERDT0IwTl85OW9meDhNMVg5MjNxMU5ubi1pR3oyTWxpaHpCYzFQaw?oc=5>) 

---

📌 **Semiconductor packaging and testing company JCET breached by unknown IP; customer and employee contact information leaked**

iThome reports that Taiwan semiconductor packaging and testing company JCET suffered an intrusion from an unknown IP address, resulting in the leakage of customer and employee contact information.

**Reference:** [半導體封測廠精材遭不明IP入侵，客戶與員工聯絡資訊外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE45RWE5eXVibE13ZjFXVnBTTVhSaXJnZzl4YWktMG9hZnVnbkJ1dS1tRENUaDkzTXRZZEpheTlLcUtwaE4zQUdlTFRhSWtTdw?oc=5>) 

---

📌 **Application credential theft**

iThome reports on application credential theft.

**Reference:** [應用程式憑證竊取 - iThome](<https://news.google.com/rss/articles/CBMipgFBVV95cUxOVzJ6VWZ5WXFwNjBWcElGbXB6N3JzUnFIZG9KTzMxS3FrdGE0SFVEdFFCaGUwMDNBSGNFdW45a2ZkVml5R196TllBTW1iSnhGSlpBbld2LUZkY2JsTS1HZG8tWkxldjVwbkxNYmRWUU4zdmxkQjJrdUdMR1lmMXVNZGQ2YkprbWM2UnJUazZLRTM0anB1UnhDNUJPNW91Z1dZb3Y2ekF3?oc=5>) 

---

📌 **Microsoft patches RCE vulnerability in Windows Paint**

Xakep reports that Microsoft has patched a remote code execution vulnerability in Windows Paint.

**Reference:** [Microsoft патчит RCE-уязвимость в Windows Paint](<https://xakep.ru/2026/11/09/paint-rce>) 

---

📌 **DeepSeek security testing approaches restricted models, enterprises face new protection challenges**

Brave News reports that Vals AI tested AI agents in two simulated enterprise networks, with DeepSeek open-weight models approaching the performance of restricted OpenAI models in one environment while lagging in another. The results, originally reported by WIRED on November 6, remain limited to laboratory conditions and do not represent confirmed attacks on Taiwanese enterprises. Vals AI recorded DeepSeek averaging 16.3 completed tasks in Nova versus 15.7 for OpenAI, and 21 tasks in Lighthouse versus 27 for OpenAI. Enterprises should inventory external-facing services, account permissions, and backups, restricting any active testing to authorized systems.

**Reference:** [DeepSeek資安測試逼近限制版模型 企業防護面臨新課題 - 蕃新聞](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE5HbHExdnZtUU1VM2Jkd0JXdmphU0tkbk5jcXBGV3RtOGg3V1pnUmY4VlFRT2dqZWlaSUJDY1lpS3MzTjJqc296ZVpQaldpSm1iYnc?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261109-1-1794249708676 -->
