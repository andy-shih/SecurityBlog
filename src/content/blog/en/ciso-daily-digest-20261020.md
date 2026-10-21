---
title: "CISO Daily Digest: Zeabur Breached Again, Announces Year-End Shutdown After 3.21 Million Environment Variables Exposed (20261020)"
description: "Zeabur suffered a major breach exposing over 3.21 million environment variables and will shut down by year-end, while Citizen Lab confirmed Pegasus spyware on a Serbian rector's iPhone via zero-click exploit ahead of elections, extending a campaign targeting civil society."
pubDate: 2026-10-20
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Zeabur Breached Again, Announces Year-End Shutdown After 3.21 Million Environment Variables Exposed

Cloud platform Zeabur disclosed a second security incident and announced it will cease operations by the end of the year. The breach resulted in the unauthorized access of over 3.21 million environment variables, which frequently contain sensitive credentials such as API keys, database passwords, and authentication tokens.

The company reported that a certificate rotation scheduled for August was not completed, a lapse that may have facilitated the intrusion or expanded its impact. Exposed environment variables pose immediate supply-chain risks because they can grant attackers direct entry to downstream applications, databases, and third-party services connected to customer projects hosted on the platform.

Zeabur has urged all users to rotate every secret stored in the service immediately and to audit access logs for anomalous activity. The shutdown timeline adds urgency, as customers must migrate workloads and ensure no long-lived credentials remain valid in production environments.

### CISO Impact

- **Immediate Secret Rotation and Supply-Chain Audit —** Treat all secrets stored in Zeabur as compromised; enforce automated rotation of API keys, database credentials, and tokens across every connected service, and scan dependency graphs for lateral access paths before the platform shuts down.
- **Accelerate Migration and Decommissioning —** Prioritize workload migration off Zeabur with a hard deadline, validate that no long-lived credentials persist in production, and implement short-lived, scoped secrets for replacement platforms to limit blast radius.
- **Monitor for Credential Reuse and Abuse —** Deploy credential-stuffing detection and anomaly monitoring on authentication logs for services that consumed Zeabur-stored secrets, as exposed variables enable direct unauthorized access to downstream systems.

**Reference:** [Zeabur再遭駭宣布年底停運，逾321萬筆環境變數遭讀取、8月憑證未完成輪替 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84VDZoeVdiTjM0UVRiUXVBMHVpOHNNazRKVFdfRDF0Q3R5bHNVTW1OOF9LRkE4dkNkXzJZRWpYRnV0Q09TNXlmZEVsZzA1Zw?oc=5>)

---

## Active Threats This Week

📌 **Russian APT28 Breaches NATO Naval Shipbuilder in NATO Country, Deploys New Reflective Loader**

Russian APT28 has been attributed to attacks targeting two member states of the North Atlantic Treaty Organization (NATO), including a naval shipbuilder and a manufacturer of military aircraft engines. The Symantec Threat Hunter Team, tracking the activity cluster under the moniker Swallowtail, involved the use of a backdoor called HOOKEDGE and a previously undocumented loader designed to decrypt and run an encrypted payload in memory using a cryptographic key supplied at runtime. During one attack against the naval shipbuilder, operators returned to a compromised host repeatedly over the course of a week in what appeared to be hands-on-keyboard activity, stealing credential material using two separate techniques, opening a persistent SSH tunnel into the organization's internal network and deploying a previously undocumented reflective loader.

**Reference:** [Russian APT28 Breaches NATO Naval Shipbuilder in NATO Country, Deploys New Reflective Loader](<https://thehackernews.com/2026/10/russian-apt28-breaches-nato-naval.html>) 

---

📌 **Pegasus Spyware Confirmed on Serbian University Rector's iPhone Before Election**

Citizen Lab confirmed with high confidence that the iPhone of University of Belgrade Rector Vladan Đokić was infected with NSO Group's Pegasus spyware in 2026 via a zero-click exploit, six days before Serbia's snap parliamentary election; a second case involving a prosecutor on a high-profile corruption case received Apple threat notifications, though infection remains unconfirmed, bringing the total of publicly known targeted individuals in Serbia this year to at least 16.

**Reference:** [Pegasus Spyware Infection Confirmed on Serbian University Rector's iPhone Days Before Election](<https://thehackernews.com/2026/10/pegasus-spyware-infection-confirmed-on.html>) 

---

📌 **Popular WordPress SEO Plugin Rank Math PRO Hijacked to Deliver Self-Restoring Backdoor**

Compromised copies of Rank Math PRO downloaded or updated between 20:02 UTC on October 15 and 07:12 UTC on October 16, 2026 contained a self-restoring backdoor, and affected sites should be treated as compromised. Clean version 3.0.124 has been released, but reinstalling it does not remove malicious files, administrator accounts, scheduled tasks, or SSH keys the malware may have already placed. The malware may leave PHP backdoor files in plugin, theme, and must-use plugin directories; create fake WordPress core files; alter .htaccess to execute .cache files as PHP; and expose any reachable passwords, database credentials, API keys, and other secrets. Recovery requires restoring from a pre-October 15 backup, changing all credentials, and installing 3.0.124 only afterward; without a clean backup, administrators must delete the rank-math-pro folder, remove specific wp\_options entries, block outgoing connections to rank1cdn\[.\]com, then hunt for additional artifacts before reinstalling the clean plugin.

**Reference:** [Popular WordPress SEO Plugin Rank Math PRO Hijacked to Deliver Self-Restoring Backdoor](<https://thehackernews.com/2026/10/popular-wordpress-seo-plugin-rank-math.html>) 

---

📌 **ClickFix Attackers Exploit Siemens Software Center Flaw to Deploy Remote Access Trojan**

Attackers exploited a DLL sideloading flaw in Siemens Software Center, tracked as CVE-2026-110936 with a CVSS v4 score of 8.4, using a valid signed copy of the application and a malicious archive.dll to execute code with the application's privileges. The ClickFix delivery platform Romulus was used to deliver Legion Loader and other malware, including campaigns that used malicious ChatGPT Custom GPTs to lure victims into copying and executing PowerShell that dropped an MSI installer abusing DLL sideloading to deploy a remote access trojan. Siemens has patched the issue in version 4.0.9.8 and advises organizations to update, block associated indicators including 96.62.218\[.\]59, wizardexpensive\[.\]com, and 2.27.248\[.\]127, and monitor for SiemensSoftwareCenter.exe running from AppData\\Local\\Programs and started by msiexec.exe.

**Reference:** [ClickFix Attackers Exploit Siemens Software Center Flaw to Deploy Remote Access Trojan](<https://thehackernews.com/2026/10/clickfix-attackers-exploit-siemens.html>) 

---

📌 **Police arrest Qilin ransomware suspect on holiday, as links made to Synnovis hack that contributed to patient’s death**

Bitdefender reports that police have arrested a Qilin ransomware suspect while on holiday, with the group linked to the Synnovis hack that contributed to a patient’s death.

**Reference:** [Police arrest Qilin ransomware suspect on holiday, as links made to Synnovis hack that contributed to patient’s death](<https://www.bitdefender.com/en-us/blog/hotforsecurity/qilin-ransomware-arrested-synnovis-patient-death>) 

---

📌 **Hackers Exploit Plex2Shell Flaws to Install Crypto Miners and Linux Proxy Backdoor**

The Hacker News reports threat actors are exploiting four Plex Media Server vulnerabilities, collectively called Plex2Shell (CVE-2026-96652, CVE-2026-96654, CVE-2026-96655, CVE-2026-96656), to achieve unauthenticated remote code execution one day after a proof-of-concept went public. The chain deploys an XMRig miner and a Linux backdoor named myawesomeproxy, with exploit attempts observed from IP addresses including 91.92.40\[.\]202 and 176.65.139\[.\]228. Plex patched the flaws in Media Server 1.43.3.10861 on August 3, 2026, and users are advised to update.

**Reference:** [Hackers Exploit Plex2Shell Flaws to Install Crypto Miners and Linux Proxy Backdoor](<https://thehackernews.com/2026/10/hackers-exploit-plex2shell-flaws-to.html>) 

---

📌 **AdFection Turns Ad Impressions Into Zero-Click Spyware Delivery**

Dark Reading reports that the AdFection campaign converts online ad impressions into a zero-click spyware delivery mechanism.

**Reference:** ['AdFection' Turns Ad Impressions Into Zero-Click Spyware Delivery](<https://www.darkreading.com/data-privacy/adfection-online-ads-spyware-delivery>) 

---

📌 **Broadcom Wi-Fi chips have unpatched WPSplinter vulnerability allowing attackers to gain router root access without a password**

iThome reports that Broadcom Wi-Fi chips contain an unpatched WPSplinter vulnerability enabling attackers to obtain router root privileges without requiring a password.

**Reference:** [Broadcom Wi-Fi晶片存在未修補的WPSplinter漏洞，攻擊者無須密碼即可取得路由器root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBaZjdHUnRGbnFUWFVLTnotSjVFSUdrZXlVbWZfWTlfNUJwYmliSENiUWNDVnRtQThxaEhzNVRtUVk2RV9sRXhvakxBWi11UQ?oc=5>) 

---

📌 **Hackers Hijack Five OVHcloud CLI Releases to Distribute Secret-Stealing Malware**

The Hacker News reports that an attacker compromised a contributor's GitHub account and replaced download archives on five OVHcloud command-line interface releases published between April 14 and September 16, 2026. The malicious builds, live on GitHub for up to 94 minutes on October 19 from 12:47 to 14:21 UTC, were designed to steal secrets stored on any machine that ran them. OVHcloud has deleted the swapped archives, published an immutable clean v0.16.0, and enabled release immutability. Users who ran the swapped build should treat all secrets on the affected machine as exposed, rotate them from a different machine, remove the binary, and install v0.16.0.

**Reference:** [Hackers Hijack Five OVHcloud CLI Releases to Distribute Secret-Stealing Malware](<https://thehackernews.com/2026/10/hackers-hijack-five-ovhcloud-cli.html>) 

---

📌 **OnlyFans Copyright Takedowns Expose Compromised Websites**

Dark Reading reports that copyright takedown requests filed by OnlyFans and other adult content creators are revealing how attackers exploit vulnerable university and government websites to manipulate search results and distribute unauthorized material, according to UpGuard research director Greg Pollock.

**Reference:** [OnlyFans Copyright Takedowns Expose Compromised Websites](<https://www.darkreading.com/vulnerabilities-threats/onlyfans-copyright-takedowns-expose-compromised-websites>) 

---

📌 **Researchers Infiltrate Microsoft Tech Support Scam Operation**

Dark Reading reports that researchers infiltrated a Microsoft tech support scam operation. The headline-only source does not provide technical details, compromise scope, victim impact, or mitigation recommendations.

**Reference:** [Researchers Infiltrate Microsoft Tech Support Scam Operation](<https://www.darkreading.com/threat-intelligence/microsoft-tech-support-scam-operation>) 

---

📌 **Japan's Nikkei and Hankyu Hanshin Department Stores Breached, Personal Data of Over One Million People Leaked**

iThome reports that Japan's Nikkei newspaper and Hankyu Hanshin Department Stores were both breached, each leaking personal data affecting more than one million individuals. The source does not state the attack method, whether the incidents are linked, or specific customer impact beyond the data exposure figure.

**Reference:** [日本經濟新聞、阪急阪神百貨相繼遭駭，皆外洩個資超過百萬 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9oY2U5bmQ2SGJxV2NnUjRUQnJGVHdlS2NpMTN2cnF2RTU3M21XZmpJMFFkSHBYUVZidGZiTVBCZTNyeVVXemNfWVFKZGVRQQ?oc=5>) 

---

📌 **Hackers Use New ROMULUS ClickFix Platform to Deliver LegionLoader and Other Malware**

The Hacker News reports that Forescout Research - Vedere Labs disclosed the ROMULUS ClickFix delivery platform, used to distribute malware including Legion Loader. Bogus landing pages trick users into running malicious commands that download a trojanized MSI installer or an encrypted archive containing Legion Loader inflated to nearly 1 GB to evade analysis. Forescout identified six IP addresses hosting ROMULUS panels. One IP, 96.62.224\[.\]81, was previously linked to malicious ChatGPT Custom GPTs directing victims to ClickFix lures. A separate chain used ClickFix to run PowerShell before delivering Legion Loader, also known as Satacom downloader, CurlyGate, and RobotDropper. The report says it is unknown who operates ROMULUS and states it shares no overlaps with RomulusLoader linked to Silver Fox (TA4922). Recommended hunting focuses on suspicious PowerShell commands and DLL sideloading events.

**Reference:** [Hackers Use New ROMULUS ClickFix Platform to Deliver LegionLoader and Other Malware](<https://thehackernews.com/2026/10/romulus-clickfix-platform-tricks-users.html>) 

---

📌 **SiteGuard WAF command injection exploited, attackers can gain highest server privileges - iThome**

iThome reports that a command injection vulnerability in SiteGuard WAF is being exploited, allowing attackers to obtain the highest privileges on the server.

**Reference:** [SiteGuard WAF命令注入漏洞遭利用，駭客可取得伺服器最高權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mT01GWEpucEtuaG9GSG5tSlRvR1k0OW9fNUtyc0cxS09TR092US02YTZpOTB0c0NFZGZCNnN2Qm5ua3hON0M1Yy1wTUhJUQ?oc=5>) 

---

📌 **Go Issues Emergency Update Blocking Eight CA Keys Over Undisclosed Security Concerns**

Go 1.27.3 and Go 1.26.10, released October 20 under the URGENT track, cause Go's certificate verifier to reject certificate chains passing through eight unnamed intermediate CA keys due to specific security concerns. Eight blocked intermediate certificates match eMudhra's emSign Root TLS CA - G3 and emSign Root CS CA - G3 hashes, covering six TLS intermediates and two code-signing intermediates issued to eMudhra BV and eMudhra Inc. The filter applies across Go's verifier, macOS and Windows OS paths, and even private trust stores, returning x509: no valid chains built with no way to disable it. Go has not said whether active exploitation or ecosystem integrity prompted the URGENT response, and affected sites need certificates from a different intermediate before rebuilt Go clients can connect.

**Reference:** [Go Issues Emergency Update Blocking Eight CA Keys Over Undisclosed Security Concerns](<https://thehackernews.com/2026/10/go-issues-emergency-update-blocking.html>) 

---

📌 **Android banking trojan Hirudo replaces banking apps with malicious versions**

Xakep reports that the Android trojan Hirudo substitutes legitimate banking applications with malicious versions.

**Reference:** [Android-троян Hirudo подменяет банковские приложения вредоносными версиями](<https://xakep.ru/2026/10/19/hirudo>) 

---

📌 **Media reports arrests of DataSuckers hacking group members who attacked Dodo Pizza and Tez Tour**

Russian media reports that members of the DataSuckers hacking group have been detained following attacks on Dodo Pizza and Tez Tour.

**Reference:** [СМИ: задержаны участники хак-группы DataSuckers, атаковавшей «Додо Пицца» и Tez Tour](<https://xakep.ru/2026/10/19/datasuckers-arrests>) 

---

📌 **AWS tests AI agents to autonomously find and exploit vulnerabilities; 33 of 37 CVEs successfully exploited - iThome**

iThome reports that AWS tested AI agents designed to autonomously discover and exploit vulnerabilities, achieving successful exploitation on 33 of 37 CVEs.

**Reference:** [AWS測試AI代理自主尋找及利用漏洞，37項CVE有33項成功 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ETEJZOVNGRFpQYV9TTjZkRGdQMlhTOExWTHRhMV9ncmZVOWg1dkVPR2xTT2V6RUtZcmNOM20xVmhjVGtmQzhwdk82MUpwdw?oc=5>) 

---

📌 **Hackers abuse AI pen-test tool Cairn to automate massive attack spree - Dark Reading**

Dark Reading reports that attackers are abusing the AI penetration-testing tool Cairn to automate large-scale attack campaigns.

**Reference:** [Hackers Abuse AI Pen-Test Tool Cairn to Automate Massive Attack Spree](<https://www.darkreading.com/cyberattacks-data-breaches/hackers-abuse-ai-pen-test-tool-cairn>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261020-8-1792588900610 -->
