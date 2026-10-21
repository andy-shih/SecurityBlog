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

<!-- ciso-revision:ciso-20261020-2-1792562638648 -->
