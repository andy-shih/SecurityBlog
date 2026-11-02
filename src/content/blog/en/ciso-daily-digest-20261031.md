---
title: "CISO Daily Digest: Attackers Chain Three Ivanti Connect Secure Flaws for Root Execution (20261031)"
description: "CISA flagged chained Ivanti Connect Secure vulnerabilities under active exploitation, OpenAI remediated a critical session-escape issue in shared ChatGPT links, and Cursor addressed a compromised AI coding extension distributing SSH backdoors."
pubDate: 2026-10-31
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Attackers Chain Three Ivanti Connect Secure Flaws for Root Execution

The U.S. Cybersecurity and Infrastructure Security Agency added two Ivanti Connect Secure vulnerabilities, CVE-2026-111357 and CVE-2026-118527, to its Known Exploited Vulnerabilities catalog following confirmed active exploitation in the wild. CVE-2026-111357 is a missing authentication flaw carrying a CVSS score of 8.8 that enables local privilege escalation. CVE-2026-118527, rated CVSS 4.3, involves predictable identifier generation allowing remote authenticated attackers to place files into known disk locations. Federal Civilian Executive Branch agencies must remediate the flaws by November 2 and November 13, 2026, respectively.

According to research by Volexity, threat actor UTA0576 weaponized these two bugs alongside an authentication bypass vulnerability, CVE-2026-104935, which CISA cataloged earlier in October 2026. The full exploit chain combines the authentication bypass, remote code execution, and privilege escalation to obtain unauthenticated root-level code execution on affected appliances. Rather than deploying traditional web shells or malware payloads, observed adversary activity focused on host reconnaissance, extracting credentials and Active Directory metadata, and locating BitLocker recovery keys and administrator passwords.

Ivanti released patches resolving all chained vulnerabilities across supported ICS versions, updating versions 25.1.1.2 and prior to 25.1.1.3, and 22.8R2.5 and prior to 22.8R2.6. The vendor noted that an initial fix for CVE-2026-104935 had been accelerated to disrupt the primary intrusion vector while backporting efforts for the local privilege escalation were finalized. Part of the flaw had previously been addressed in July release 25.1.3.0 before being backported following active exploitation.

### 📌CISO Impact

- **Emergency Patching and Device Inspection for Ivanti Gateways —** Security teams must prioritize updating Ivanti Connect Secure appliances to versions 25.1.1.3 or 22.8R2.6 to eliminate an unauthenticated root execution chain actively used by threat actors.
- **Credential and Active Directory Auditing Post-Exposure —** Because UTA0576 specifically targeted Active Directory metadata, credentials, and BitLocker keys rather than dropping persistent web shells, organizations suspecting appliance exposure must initiate domain-wide credential resets and verify key security.
- **Edge Device Segmentation and Telemetry Review —** Security leaders should restrict administrative interfaces on edge gateways and scrutinize outbound network activity from network boundaries for unauthorized data exfiltration and credential staging.

**Reference:** [Attackers Chain Three Ivanti Connect Secure Flaws to Gain Unauthenticated Root Access](<https://thehackernews.com/2026/10/attackers-chain-three-ivanti-connect.html>)

---

## Active Threats This Week

📌 **Resolved ChatGPT Flaw Allowed Session Hijacking via Shared Links**

Security researchers at Parameter demonstrated that opening a crafted ChatGPT share link could execute attacker code within a victim's authenticated web session, exposing private conversation histories and permitting arbitrary API actions on their behalf. The attack exploited message handling in the MathLive library loaded by interactive graphs, which failed to validate origin frames and permitted raw HTML injection that bypassed sandbox boundaries and leveraged allowed external scripts. OpenAI resolved the report across its web frontends by October 26, 2026, without requiring end-user intervention, and no in-the-wild exploitation was observed outside controlled testing.

**Reference:** [A Shared ChatGPT Link Could Run Attacker Code in Your Session and Read Private Chats](<https://thehackernews.com/2026/10/a-shared-chatgpt-link-could-run.html>) 

---

📌 **Cursor Marketplace Distributes Backdoored Claude Code Extension**

Cursor confirmed that a compromised version of the Anthropic Claude Code extension, version 2.1.313, was available on its marketplace for approximately 11 hours on Thursday, impacting up to 5,000 users before the repository was temporarily taken down and remediated. The modified extension contained an unauthorized loader designed to harvest system reconnaissance, insert SSH authorization keys, and establish an outbound reverse tunnel to 134.209.82.225. While Cursor indicated the persistence mechanism generally failed unless the IDE ran with administrative privileges, researchers recommend that affected organizations immediately isolate endpoints running the version for forensic review.

**Reference:** [Cursor Confirms Anthropic Claude Code Extension Compromised - BankInfoSecurity](<https://news.google.com/rss/articles/CBMiogFBVV95cUxObjJqYTE0ZGVsdGk1cklsaDg2R2wxa2pvU3BtdnEzSkIxNFNqRGgzcVZrOGVBd09vUW1ubEdMQWFURUNPU3dyRjJ4RlhhbWx5Vkp5R2thMkhCVmRnQkZvZTNyTG1hZkFYN1lkQWNlU0lMRlpHTkJSZ2c0enUxQUFCZVhHWlUzZElsOFZFWS1SMUYzRXhmcndnemg1ZXRtbERNdVE?oc=5>) 

---

📌 **TeamViewer Flaw Lets Remote Computers Attack Users Who Connect to Control Them**

TeamViewer has fixed CVE-2026-111585, an 8.8-out-of-10 high-severity flaw that lets a remote-control host attack the viewer. TeamViewer version 15.83 fixes it for the Full Client on Windows, Linux, and macOS, Windows Portable edition, and Android Remote Control app in all versions before 15.83. The Host itself is not listed as affected by this specific flaw, but the same update fixes two other flaws affecting the Host, so Host users should also update. A malicious or compromised host can crash the viewer's TeamViewer session, and on Windows could bypass OS exploit defenses and run attacker-chosen code in the viewer after the user starts a remote-control session. No password or extra click beyond accepting the session is required. TeamViewer was unaware of any exploitation at publication, and Remedio reported no in-the-wild attacks or released exploit code.

**Reference:** [TeamViewer Flaw Lets Remote Computers Attack Users Who Connect to Control Them](<https://thehackernews.com/2026/10/teamviewer-flaw-lets-remote-computers.html>) 

---

📌 **Anthropic's Claude AI found a critical Linux flaw that could give hackers root access - How-To Geek**

How-To Geek reports that Anthropic's unreleased Claude AI model uncovered a critical Linux kernel flaw tracked as CVE-2026-98432, scored 9.8 out of 10. Anthropic demonstrated an exploit requiring no clicks, file opening, or passwords that leaks kernel memory, bypasses KASLR, hijacks kernel control flow, and runs a shell command, reaching root-level access in about 53 minutes.

**Reference:** [Anthropic's Claude AI found a critical Linux flaw that could give hackers root access - How-To Geek](<https://news.google.com/rss/articles/CBMisAFBVV95cUxOYUM5ajlQY185WllyenBmQ012U2RHbWdmQUtHQ25aekJiQ3VUX0xKcjd4alBuMUxwUk9IdkJ5WGRsTXhidjNJaHI2c0gxZlk3anR1TVpIaUhMUnpGQjlQRWs3Wm5jZi0wUTg0OW9qbGkzN1l4TDRTVDQxTWNOODZTdFI4TGY5bVBNcDk4MWpmbjhDRGV5Qm9SV194NHFEdnE5a2ZfZDFSd3FaNE5MSjdyRA?oc=5>) 

---

📌 **Cloudflare Reports 18.2 Million Network-Layer DDoS Attacks in Q3, Up 38%**

Cloudflare autonomously mitigated 18.2 million network-layer DDoS attacks and 14.4 trillion HTTP DDoS requests in Q3 2026, up from 13.2 million in Q2. That is about 8,226 attacks per hour, or one every 0.44 seconds. Short-burst, low-bandwidth attacks under 10 minutes and 1 Gbps surged 208%, while hyper-volumetric attacks over 1 Tbps declined 69%. The most targeted industries include media, production and publishing; IT and services; gambling and casinos; computer software; and telecommunications. The U.S., China, Indonesia, the U.K., and Türkiye were the most attacked countries.

**Reference:** [Cloudflare Reports 18.2 Million Network-Layer DDoS Attacks in Q3, Up 38%](<https://thehackernews.com/2026/10/cloudflare-reports-182-million-network.html>) 

---

📌 **Chainalysis Confirms Intrusion Into Internal Tools and Exposure of Customer Identity Data**

Chainalysis confirmed that an external actor used offensive agentic techniques to access internal tools and some non-sensitive customer data, including user IDs, full names, email addresses, and organization role labels. The company said investigation content, authentication credentials, and session tokens were not accessed, and it is patching vulnerabilities and hardening its systems.

**Reference:** [Chainalysis Confirms Intrusion Into Internal Tools and Exposure of Customer Identity Data](<https://thehackernews.com/2026/10/chainalysis-confirms-intrusion-into.html>) 

---

📌 **Anthropic: That Claude Code extension compromise… couldn't be us - The Register**

The Register reports that Anthropic denied involvement in a compromise of a Claude Code extension.

**Reference:** [Anthropic: That Claude Code extension compromise… couldn't be us - The Register](<https://news.google.com/rss/articles/CBMivAFBVV95cUxOV2FaNjdkR0JjU3Itc3RRakQ1UkdSLXdnZG1KVUhhSFdZRERLU2QwVFliWmNMXzdhMHJBMGZKWHlURWJNZ0MwTnA3YnI3VjV2UWNwYmJJYTdCMUIwYUhrbWdwaDMxNDlaMms3eVNfYWJVb3dJbzAtLWFRaE5GQ2JqQ0JxLWJzcEd2Z3FMdklvWWg3aXhka2V5U01ZeEE0MEhTVFRsRkphOFV5VjdGdnNFenR2OEpLMnlMcEROVA?oc=5>) 

---

📌 **Anthropic Says Claude Built Five Exploit Chains Across Major Software - eWeek**

eWeek reports that Anthropic said Claude built five exploit chains across major software.

**Reference:** [Anthropic Says Claude Built Five Exploit Chains Across Major Software - eWeek](<https://news.google.com/rss/articles/CBMickFVX3lxTFBkNTBGTUJFVU1YeGlGMW9yZUJ2d1pncGI4bkxvM0pUTExzZGJoaWRhT2NhdUZZZllycm1PODhUOXBvQTlyUTl0MUZPVklfU0RBRzBBZ3JPelItN3RGRzV2UzQwOThDVm00N0k0T1I3a2Q1UQ?oc=5>) 

---

📌 **Cryptocurrency-stealing script deployed on Polymarket**

Xakep reports that a script designed to steal cryptocurrency has been deployed on Polymarket.

**Reference:** [На Polymarket внедрили скрипт для кражи криптовалюты](<https://xakep.ru/2026/10/30/polymarket-script>) 

---

📌 **AI agent logs and user telemetry data stolen from Warp**

Xakep reports that AI agent work logs and user telemetry data were stolen from Warp.

**Reference:** [У Warp похитили логи работы ИИ-агентов и данные телеметрии пользователей](<https://xakep.ru/2026/10/30/warp-leak>) 

---

📌 **Italy plagued by cyber vulnerabilities without clear cause**

Dark Reading reports that Italy is facing cyber vulnerabilities without a clear cause.

**Reference:** [L’Italia è afflitta da vulnerabilità informatiche, senza una causa chiara](<https://www.darkreading.com/cybersecurity-analytics/cyber-vulnerabilities-besiege-italy-italian>) 

---

📌 **Undead Software Projects Continue to Raise Security Risks**

Dark Reading reports that abandoned or dormant software projects remain active security risks. No details about scope, exploits, or victim impact are provided beyond the headline.

**Reference:** [Undead Software Projects Continue to Raise Security Risks](<https://www.darkreading.com/application-security/undead-software-projects-raise-security-risks>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261031-2-1793590803011 -->
