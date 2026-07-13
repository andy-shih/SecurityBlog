---
title: "CISO Daily Digest: GigaWiper Destructive Backdoor & Mass Infection Campaigns (20260713)"
description: "Microsoft discloses GigaWiper, a triple-threat backdoor combining disk wiping, file encryption, and remote access. WP-ShellStorm infects 1.4M WordPress sites, former BlackCat negotiator sentenced to 70 months, and Forg365 PhaaS targets Microsoft 365 with device code theft."
pubDate: 2026-07-13
tags: [ciso-daily-digest, threat-intelligence, microsoft, giga-wiper, wordpress, ransomware, phishing, APT, vulnerability]
author: "Security Solutions Team"
featured: true
---

## GigaWiper Destructive Backdoor & Mass Infection Campaigns

### What Happened

**July 13, 2026 —** A wave of high-impact security disclosures marks one of the most eventful days this month, headlined by Microsoft's revelation of a novel destructive backdoor and a massive WordPress supply-chain compromise.

**GigaWiper Destructive Backdoor:** [Microsoft Threat Intelligence](https://www.ithome.com.tw/news/177249) disclosed GigaWiper, a Go-based backdoor that integrates three previously independent malware families into a single destructive tool. It combines:

- **Physical disk overwriting** that destroys partition tables on non-Windows drives
- **Ransomware-style file encryption** (leveraging Crucio ransomware code, appending `.candy` extension) — but without key persistence, making decryption impossible
- **Disk wiping** via a Go reimplementation of the FlockWiper malware, designed to repeatedly overwrite the system disk

Beyond destruction, GigaWiper functions as a full remote-access trojan with command-and-control (C2), system information gathering, and data exfiltration capabilities. Microsoft has released C2 server IPs and SHA-256 hashes for defensive deployment.

**WP-ShellStorm WordPress Mass Infection:** A massive campaign has infected **over 1.4 million WordPress sites** with the WP-ShellStorm backdoor. Attackers are actively selling access to compromised sites, with infrastructure access logs showing IP addresses from Taiwan as the most frequent source — raising concerns about where the command infrastructure is hosted.

**Former Ransomware Negotiator Sentenced:** A former ransomware negotiator who conspired with the BlackCat (ALPHV) ransomware group was sentenced to **70 months in prison**. The case marks a significant legal precedent, demonstrating that facilitators and intermediaries in the ransomware ecosystem face severe criminal liability, not just the direct attackers.

**Forg365 PhaaS Targets Microsoft 365:** A new phishing-as-a-service platform called [Forg365](https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html) combines AI-generated content with device code authentication theft and adversary-in-the-middle (AitM) session hijacking. The platform specifically targets Microsoft 365 credentials and session tokens, enabling persistent access even after password rotation.

### Why This Reshapes Threat Governance

The convergence of destructive malware (GigaWiper), massive-scale web compromises (WP-ShellStorm), and ransomware ecosystem legal accountability points to an escalation in both the sophistication and breadth of attacks. The GigaWiper disclosure is particularly significant — it represents a trend toward multi-function malware that can destroy, encrypt, and exfiltrate from a single payload, reducing the window for detection and response. Meanwhile, the BlackCat sentencing signals that law enforcement is increasingly targeting the ransomware supply chain, not just operators.

---

## Active Threats This Week

📌 **GigaWiper Destructive Backdoor (Microsoft Disclosure)**
A Go-based backdoor integrating disk wiping, file encryption (Crucio-based, non-recoverable), and remote access. Observed since October 2025. Microsoft recommends EDR in block mode with tamper protection enabled.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177249)

📌 **WP-ShellStorm — 1.4M WordPress Sites Compromised**
Attackers deployed a backdoor across over 1.4 million WordPress installations, selling access to compromised sites. Infrastructure analysis reveals disproportionate access from Taiwanese IP addresses.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177261)

📌 **Former BlackCat Ransomware Negotiator Sentenced to 70 Months**
A facilitator who negotiated ransom payments and conspired with the ALPHV/BlackCat group received a 70-month federal prison sentence — signaling expanded prosecution of the ransomware ecosystem.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177251)

📌 **Forg365 PhaaS — Device Code & AitM Attacks on Microsoft 365**
This phishing platform uses AI to generate convincing lures, then steals device code authentication tokens and performs AitM session hijacking against Microsoft 365 accounts.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html) | [iThome](https://www.ithome.com.tw/news/177269)

📌 **Zimbra Critical RCE via Crafted Email**
A severe vulnerability in Zimbra allows attackers to execute arbitrary code by sending a specially crafted email. The exploit triggers in the recipient's webmail interface without user interaction.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177242)

📌 **Voice Phishing Targets M365 with Passkey Registration**
Attackers are using voice phishing (vishing) to trick Microsoft 365 users into registering attacker-controlled passkeys, effectively bypassing MFA and gaining persistent account access.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177252)

📌 **Palo Alto Networks Patches 13 Vulnerabilities — Firewall OS Buffer Overflow**
PAN addressed 13 vulnerabilities including a high-risk buffer overflow in the firewall operating system. Affected products include PAN-OS, Cortex XSOAR, and Prisma Access.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177263)

📌 **CISA Adds Two Joomla Extensions to KEV — Federal Deadline Passed**
CISA added iCagenda and Balbooa Forms Joomla flaws to the Known Exploited Vulnerabilities catalog, with a July 13 remediation deadline for U.S. federal agencies.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/icagenda-and-balbooa-forms-joomla-flaws.html) | [iThome](https://www.ithome.com.tw/news/177238)

📌 **Helix Ransomware Group Targets SharePoint for Data Theft**
The Helix ransomware group is actively targeting SharePoint deployments, exfiltrating sensitive data and demanding ransoms for non-disclosure. Organizations are advised to audit SharePoint external sharing settings.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177267)

📌 **Datadog Reveals GitHub Ghost Account Reconnaissance**
Researchers at Datadog uncovered a long-running reconnaissance operation using ghost GitHub accounts to scan enterprise repositories for exposed secrets and misconfigured Actions workflows.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177262)

📌 **Australia Warns of CMS WebShell Attacks**
The Australian Cyber Security Centre (ACSC) warned that multiple content management platforms are being actively targeted by attackers attempting to implant webshells for persistent access.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177248)

📌 **Debian 13.6 Ships Security Updates — 100+ Components Patched**
Debian 13.6 addresses over 100 software component vulnerabilities and resolves an expiring UEFI Secure Boot certificate issue that could otherwise lock users out of signed boot environments.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177250)

---

## How Can OPSWAT Help

File-based threats dominate this week's disclosures: WP-ShellStorm backdoor payloads distributed via compromised WordPress plugins, GigaWiper binary delivery, and Forg365 phishing lures with malicious attachments. OPSWAT MetaDefender's **multi-scanning (30+ anti-malware engines)** and **Content Disarm & Reconstruction (CDR)** can detect and neutralize zero-day malware in email attachments, web uploads, and file transfers — preventing initial access from weaponized documents and executables. For supply-chain scenarios (compromised CMS plugins), MetaDefender's deep CDR strips active content while preserving document usability.
