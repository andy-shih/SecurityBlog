---
title: "CISO Daily Digest: Linux Kernel Dirty Frag Vulnerability; Ivanti EPMM RCE Under Attack (20260508)"
description: "Linux 'Dirty Frag' local privilege escalation, Ivanti EPMM RCE exploited in the wild, Canvas breach impact spreads, and Google Android verification feature launched."
pubDate: 2026-05-08
tags: ["Vulnerability", "Linux", "RCE", "Mobile Security", "Supply Chain"]
author: "Security Solutions Team"
featured: true
---

## Linux Kernel 'Dirty Frag' Vulnerability Allows Local Privilege Escalation

A high-severity vulnerability named 'Dirty Frag' has been discovered in the Linux kernel's fragment handling code, affecting kernel versions dating back to 2017. The flaw allows local attackers to escalate privileges to root on affected systems, including all major Linux distributions. Proof-of-concept exploit code has already been released publicly, and security teams are urged to apply kernel patches immediately.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/)

## Active Threats & Vulnerabilities

📌 **Ivanti EPMM Critical RCE (CVE-2026-6973) Under Active Exploitation**

A critical remote code execution vulnerability in Ivanti's Enterprise Performance Management Platform (EPMM) is being actively exploited in the wild. The flaw allows unauthenticated attackers to execute arbitrary commands on vulnerable servers. CISA has added this to its KEV catalog.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/ivanti-epmm-cve-2026-6973.html)

📌 **Canvas Breach Disrupts Schools & Colleges Across the US**

The Instructure Canvas breach, claimed by ShinyHunters, has caused widespread disruption across educational institutions nationwide. The breach exposed student records, academic data, and administrative credentials, with many schools forced to temporarily suspend Canvas operations and move to backup systems.

🔗 **Reference:** [Krebs on Security](https://krebsonsecurity.com/2026/05/canvas-breach-disrupts-schools-colleges-nationwide/)

📌 **PCPJack Credential Stealer Exploits 5 CVEs to Worm-Like Spread Across Cloud Systems**

The PCPJack credential stealer malware exploits five different CVEs to spread like a worm across cloud environments. The malware targets cloud service credentials including AWS, Azure, and GCP access keys, using them for lateral movement between cloud accounts.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/pcpjack-credential-stealer.html)

📌 **Mozilla Firefox 150.0.2 Patches 3 High-Risk Vulnerabilities**

Mozilla has released Firefox 150.0.2 addressing three high-risk security vulnerabilities. The flaws could allow arbitrary code execution. Users are strongly advised to update immediately.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/)

📌 **Google Android Apps Get Public Verification to Stop Supply Chain Attacks**

Google has introduced public cryptographic verification for Android APK files, allowing users and developers to verify app integrity before installation. The feature aims to prevent supply chain attacks where legitimate apps are repackaged with malware.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/android-apps-get-public-verification.html)

📌 **Anthropic Claude Chrome Extension Flaw Could Leak OAuth Credentials**

Security researchers identified a design flaw in Anthropic's Claude Code MCP integration that could allow malicious MCP servers to hijack Claude and steal OAuth credentials. Anthropic has released a fix within hours of disclosure.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/)
