---
title: "CISO Daily Digest: Fragnesia Linux LPE & 18-Year-Old Nginx Vulnerability (20260514)"
description: "Fragnesia Linux kernel LPE grants root access; 18-year-old Nginx rewrite module flaw enables unauthenticated RCE; Exim critical vulnerability patched."
pubDate: 2026-05-14
tags: ["CISO", "cybersecurity", "threat intelligence", "daily digest"]
author: "Security Solutions Team"
featured: true
---

May 14 brought attention to several long-dormant vulnerabilities coming to light. The Fragnesia Linux kernel vulnerability grants root access through page cache corruption, joining a growing list of Linux LPEs discovered in May. An 18-year-old Nginx rewrite module flaw (CVE-2026-42945) was disclosed by F5, enabling unauthenticated remote code execution. Microsoft revealed its MDASH multi-model agentic AI security system, which had already found 16 Windows vulnerabilities.

## Active Threats This Week

📌 **Fragnesia Linux Kernel LPE Grants Root via Page Cache Corruption**

A new Linux kernel local privilege escalation vulnerability named Fragnesia allows attackers to gain root access by corrupting the page cache. It is the third significant Linux LPE disclosed within two weeks.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/new-fragnesia-linux-kernel-lpe-grants-root-access-via-page-cache-corruption.html) | [Xakep](https://xakep.ru/2026/05/15/fragnesia/)

📌 **18-Year-Old Nginx Rewrite Module Flaw Enables Unauthenticated RCE**

F5 disclosed CVE-2026-42945, a critical vulnerability in the Nginx rewrite module that has existed for **18 years**. The flaw allows unauthenticated remote code execution and affects a significant portion of web servers worldwide.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/18-year-old-nginx-rewrite-module-flaw-enables-unauthenticated-rce.html) | [iThome](https://www.ithome.com.tw/news/168547)

📌 **Exim Critical Vulnerability in GnuTLS Environments**

A critical vulnerability was disclosed in the Exim mail transfer agent affecting environments using the GnuTLS library. The flaw could allow arbitrary code execution on affected mail servers.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168548)

📌 **Windows BitLocker and CTFMON Zero-Days Exposed**

Two Windows zero-day vulnerabilities named YellowKey and GreenPlasma were disclosed, affecting BitLocker encryption bypass and CTFMON privilege escalation respectively. Microsoft is investigating both.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/windows-zero-days-expose-bitlocker-bypasses-and-ctfmon-privilege-escalation.html)

📌 **Mistral AI's PyPI Package Hit by Supply Chain Attack**

Mistral AI confirmed that its PyPI package was compromised in a supply chain attack, part of the broader Mini Shai-Hulud campaign targeting the Python package ecosystem.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168549)

📌 **Iranian MuddyWater APT Attacks Korean Manufacturers**

The Iran-linked MuddyWater APT group was observed attacking Korean electronics manufacturers, using SentinelOne components for DLL sideloading to evade detection.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168550)

📌 **RubyGems Registration Suspended Due to Mass Data-Drop Attack**

The RubyGems package registry temporarily suspended new user registrations after attackers weaponized the platform for data dead drops, uploading tens of thousands of malicious packages.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/application-security/attackers-weaponize-rubygems-for-data-dead-drops) | [Xakep](https://xakep.ru/2026/05/14/rubygems-attack/)

📌 **71% of Organizations Experienced Identity-Based Attacks**

A Sophos study revealed that **71%** of organizations experienced at least one identity-based attack in the past year, with compromised credentials being the primary entry vector for ransomware.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168551)

---
*This digest is auto-generated from curated cybersecurity news sources.*