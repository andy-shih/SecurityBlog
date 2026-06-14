---
title: "CISO Daily Digest: Cisco SD-WAN Auth Bypass Under Active Attack & Nginx RCE (20260515)"
description: "Cisco Catalyst SD-WAN auth bypass CVE-2026-20182 actively exploited in wild; F5 patches critical 18-year-old Nginx flaw; Exchange Server RCE exploited via crafted email."
pubDate: 2026-05-15
tags: ["CISO", "cybersecurity", "threat intelligence", "daily digest"]
author: "Security Solutions Team"
featured: true
---

The week closed with active exploitation of the Cisco Catalyst SD-WAN Controller authentication bypass vulnerability (CVE-2026-20182), prompting CISA to order federal agencies to patch within 3 days. F5 finally addressed the 18-year-old Nginx rewrite module RCE, and an on-prem Microsoft Exchange Server vulnerability (CVE-2026-42897) was confirmed exploited via crafted email. The FrostyNeighbor APT was observed targeting government organizations in Eastern Europe.

## Active Threats This Week

📌 **Cisco Catalyst SD-WAN Auth Bypass Actively Exploited, CISA Mandates Patching**

CISA added CVE-2026-20182 to its Known Exploited Vulnerabilities catalog after confirming active exploitation of the Cisco Catalyst SD-WAN Controller authentication bypass. Federal agencies are required to patch within **72 hours**. Multiple threat groups including UAT-8616 are exploiting the flaw.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/cisa-adds-cisco-sd-wan-cve-2026-20182.html) | [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/maximum-severity-cisco-sd-wan-bug-exploited-wild) | [iThome](https://www.ithome.com.tw/news/168552)

📌 **F5 Patches 18-Year-Old Nginx Critical RCE (CVE-2026-42945)**

F5 released a patch for a critical vulnerability in the Nginx rewrite module that had existed for **18 years**. The flaw (CVE-2026-42945) allows unauthenticated remote code execution and impacts millions of web servers globally.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168547) | [Xakep](https://xakep.ru/2026/05/15/cve-2026-42945/)

📌 **On-Prem Exchange Server CVE-2026-42897 Exploited via Crafted Email**

A critical vulnerability in on-premises Microsoft Exchange Server (CVE-2026-42897) is being exploited through specially crafted emails, allowing attackers to execute arbitrary code on affected mail servers.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/on-prem-microsoft-exchange-server-cve.html)

📌 **FrostyNeighbor APT Targets Poland and Ukraine Governments**

The FrostyNeighbor advanced persistent threat group was observed conducting targeted attacks against government organizations in Poland and Ukraine, using sophisticated social engineering and custom malware.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/frostyneighbor-apt-carefully-targets-govt-orgs-poland-ukraine)

📌 **Stealer Backdoor Found in 3 Node-IPC Versions**

Security researchers discovered a stealer backdoor embedded in 3 versions of the popular Node-IPC library, targeting developer credentials and secrets. The compromised versions were distributed via npm.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/stealer-backdoor-found-in-3-node-ipc-versions-targeting-developer-secrets.html)

📌 **TanStack Supply Chain Attack Hits OpenAI Employee Devices**

The TanStack supply chain attack (part of the Mini Shai-Hulud campaign) affected OpenAI employee devices, forcing macOS updates and raising serious concerns about software supply chain security within AI organizations.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/tanstack-supply-chain-attack-hits-two.html) | [iThome](https://www.ithome.com.tw/news/168553)

📌 **Google Chrome 148 Fixes 79 Security Vulnerabilities**

Google released Chrome 148 for desktop, addressing **79** security vulnerabilities, including multiple high-risk memory safety issues and use-after-free bugs.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168554)

📌 **Linux Kernel Third LPE in Two Weeks**

Another Linux kernel local privilege escalation vulnerability was disclosed, the third such flaw in two weeks. The continued stream of Linux LPEs underscores the challenge of kernel security maintenance.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168555)

---
*This digest is auto-generated from curated cybersecurity news sources.*