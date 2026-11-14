---
title: "CISO Daily Digest: FBI Says North Korean Hackers Stole Over $400 Million in Crypto Using Deepfake Video Calls (20261114)"
description: "North Korean threat actors have stolen over $400 million in cryptocurrency through the FaceStealer campaign, which combines deepfake video calls, compromised trusted accounts, and ClickFix-style malware delivery to target crypto executives and open-source maintainers across 58 countries. Simultaneously, researchers disclosed critical hardware vulnerabilities in AMD SEV-SNP confidential computing (Mior and Skyfall) that allow malicious hosts to breach VM isolation and forge attestation reports, while PostgreSQL patched a 22-year-old authenticated RCE flaw requiring immediate server upgrades and extension rebuilds."
pubDate: 2026-11-14
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## FBI Says North Korean Hackers Stole Over $400 Million in Crypto Using Deepfake Video Calls

The FBI has attributed more than $400 million in cryptocurrency theft over the past 18 months to North Korean actors tracked as BlueNoroff, who operate a social engineering campaign codenamed FaceStealer. The scheme uses deepfake video calls and prerecorded webcam footage of trusted contacts to lure victims into fake Zoom or Microsoft Teams meetings, then presents a fabricated technical error that directs them to a ClickFix-style lure installing malware and stealing wallet credentials. Infrastructure supporting the campaign has been seized, and the Department of Justice announced the restraint of over $1.2 billion in crypto recently stolen by the related TraderTraitor group following the Binance hack.

The attack chain is self-propagating: after compromising a victim, actors hijack their Telegram, LinkedIn, Slack, or Discord accounts, mine contact lists, and use the stolen identity to invite new targets to video meetings. Arctic Wolf research shows the campaign has expanded to 677 targets across 58 countries, with over 80% being founders or C-suite executives in cryptocurrency, blockchain finance, or adjacent investment sectors. Generative AI tools from ChatGPT, Google, SpaceXAI Grok, and Wondershare now produce synthetic avatars, artwork, and convincing participant videos, while reconnaissance scrapes YouTube interviews and conference talks to replicate specific individuals' likenesses and voices.

BlueNoroff also targets open-source software maintainers to enable supply chain attacks, as demonstrated by the earlier compromise of the Axios npm package maintainer to push a trojanized version delivering a cross-platform RAT. The FBI has seized more than 900 victim webcam recordings used for impersonation. A separate but related campaign, ClickFake Interview, uses recruitment-themed lures and malicious coding assessments to deploy BeaverTail and InvisibleFerret malware, with a joint advisory from Japan, the U.S., Australia, and Germany estimating at least 30,000 compromised devices across 100 countries.

### 📌CISO Impact

- **Deepfake social engineering requires identity verification beyond video —** FaceStealer's use of AI-generated video and hijacked trusted accounts means video calls can no longer be trusted as identity proof; enforce out-of-band verification for high-value transactions, mandate hardware-backed MFA for wallet and repository access, and deploy phishing-resistant authenticators for all staff with signing keys or financial authority.
- **Confidential computing dependencies demand provider patch validation —** Mior and Skyfall show that SEV-SNP isolation can be broken by a compromised host; require cloud providers to attest current firmware and microcode levels before deploying confidential workloads, monitor for BIOS/UEFI integrity, and maintain a fallback plan for workloads that cannot tolerate host-side compromise.
- **PostgreSQL RCE mandates coordinated upgrade and extension rebuild —** CVE-2026-6460 allows authenticated RCE with object-creation rights; schedule immediate upgrades to patched minor versions, inventory and rebuild all C extensions in lockstep, verify managed-service patch status with providers (AWS, Azure, Google, Supabase, Databricks, Ubicloud), and take fresh base backups after reindexing to ensure recovery integrity.

**Reference:** [FBI Says North Korean Hackers Stole Over $400 Million in Crypto Using Deepfake Video Calls](<https://thehackernews.com/2026/11/fbi-says-north-korean-hackers-stole.html>)

---

## Active Threats This Week

📌 **New Mior and Skyfall Attacks Let Rogue Cloud Hosts Steal Secrets From AMD SEV-SNP VMs**

Researchers disclosed two attacks, Mior (CVE-2026-0462) and Skyfall (CVE-2026-40671), that allow a malicious hypervisor to read and, in Mior's case, modify memory inside AMD SEV-SNP confidential VMs and forge attestation reports; Mior requires BIOS/UEFI control and a PCIe device to redirect the Platform Security Processor's writes during VM startup, while Skyfall exploits transient scheduler side-channels to leak register data and disk-encryption keys from failed VM starts, and both were demonstrated in lab tests on EPYC Zen 3, 4, and 5 processors.

**Reference:** [New Mior and Skyfall Attacks Let Rogue Cloud Hosts Steal Secrets From AMD SEV-SNP VMs](<https://thehackernews.com/2026/11/new-mior-and-skyfall-attacks-let-rogue.html>) 

---

📌 **PostgreSQL Patches 52 Flaws, Including 22-Year-Old Bug Enabling Authenticated RCE**

PostgreSQL released updates fixing 52 vulnerabilities, highlighted by CVE-2026-6460 (CVSS 8.8), a type confusion flaw dating to 2004 that allows an authenticated user with object-creation privileges to achieve remote code execution as the OS user running the database; patches require upgrading to versions 18.7, 17.12, 16.16, 15.20, or 14.25 and rebuilding all C-language extensions, with no workaround for unpatched servers and PostgreSQL 14 reaching end-of-life.

**Reference:** [PostgreSQL Patches 52 Flaws, Including 22-Year-Old Bug Enabling Authenticated RCE](<https://thehackernews.com/2026/11/postgresql-patches-52-flaws-including.html>) 

---

📌 **Attackers Exploit UnrealIRCd Flaw That Enables Server-Level Command Injection**

CISA added CVE-2026-114713, a high-severity UnrealIRCd command-injection flaw (CVSS 8.6), to its Known Exploited Vulnerabilities catalog after active exploitation was reported. The flaw lets users on networks with two or more linked servers inject server-to-server commands executed with server or IRCOp privileges because UnrealIRCd versions before 6.2.7.1 do not escape IRCv3 label message tags. Project leader Bram Matthys said exploitation began November 7, 2026, a day after the 6.2.7.1 hotfix was released, and described it as the most critical UnrealIRCd issue in 15 years. FCEB agencies must patch by November 16, 2026 under BOD 26-04. Exact malicious activity details and end goals remain unknown.

**Reference:** [Attackers Exploit UnrealIRCd Flaw That Enables Server-Level Command Injection](<https://thehackernews.com/2026/11/attackers-exploit-unrealircd-flaw-that.html>) 

---

📌 **N-able disables N-central platform after detecting 33 zero-day vulnerabilities**

N-able disabled its N-central platform following detection of 33 zero-day vulnerabilities, according to Xakep.

**Reference:** [Компания N-able отключила платформу N-central из-за обнаружения 33 уязвимостей нулевого](<https://xakep.ru/2026/11/13/n-able-0days>) 

<!-- ciso-revision:ciso-20261114-1-1794673469879 -->
