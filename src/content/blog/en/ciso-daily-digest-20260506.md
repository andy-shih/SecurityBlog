---
title: "CISO Daily Digest: Microsoft Edge Stores Passwords in Plaintext; DAEMON Tools Supply Chain Attack (20260506)"
description: "Microsoft Edge password exposure, DAEMON Tools supply chain compromise, Palo Alto firewalls under attack, and US government AI security testing framework announced."
pubDate: 2026-05-06
tags: ["Password Security", "Supply Chain", "Vulnerability", "AI Governance", "Threat Intelligence"]
author: "Security Solutions Team"
featured: true
---

## Microsoft Edge Stores Passwords in Process Memory, Posing Enterprise Risk

Security researchers have discovered that Microsoft Edge stores user passwords in plaintext within process memory, exposing enterprise credentials to potential memory-scraping attacks. The vulnerability allows any process running on the same system to read saved credentials by inspecting Edge's memory pages. This design flaw affects both consumer and enterprise deployments, with implications for organizations using Edge as their primary browser for accessing corporate applications.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/microsoft-edge-passwords-enterprise-risk)

## Active Threats & Vulnerabilities

📌 **DAEMON Tools Supply Chain Attack Compromises Official Installer**

A supply chain attack on the popular DAEMON Tools Lite application has compromised the official installer, embedding a backdoor that provides persistent remote access to victim machines. The compromised installer was distributed through the official website, impacting users who downloaded the software during the attack window.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/daemon-tools-supply-chain.html)

📌 **Critical Apache HTTP/2 Flaw (CVE-2026-23918) Enables DoS**

A critical vulnerability in Apache HTTP/2 (CVE-2026-23918) allows unauthenticated denial-of-service attacks against affected web servers. The flaw resides in HTTP/2 stream handling and can be triggered with a single crafted request, potentially impacting millions of websites.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/critical-apache-http2-flaw.html)

📌 **Palo Alto Networks Firewall Vulnerability Under Active Exploitation**

A critical vulnerability in Palo Alto Networks PAN-OS firewall software is being actively exploited. CISA has urged organizations to patch immediately as attackers leverage the flaw to compromise enterprise network perimeter defenses.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/)

📌 **Linux Kernel Copy Fail Vulnerability Can Break Kubernetes Protections**

A Linux kernel vulnerability dubbed 'Copy Fail' allows attackers to bypass Kubernetes security protections. The flaw in kernel memory management can be exploited to escape container restrictions and gain host-level access.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/)

📌 **Chinese Hackers Abuse OpenClaw Automation — 45,000+ Exploit Attempts Logged**

Chinese state-linked threat actors are leveraging the OpenClaw automation framework to chain exploit attempts against vulnerable systems, with backend logs recording over 45,000 exploit attempts targeting government and enterprise networks globally.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/)

📌 **US Government Mandates Pre-Release Security Testing for Google, Microsoft, xAI Models**

The U.S. Commerce Department has signed agreements with Google DeepMind, Microsoft, and xAI requiring national security testing of frontier AI models before public release. This marks a significant expansion of government oversight in AI security.

🔗 **Reference:** [The Washington Post](https://www.washingtonpost.com/)

## What OPSWAT Can Do

The DAEMON Tools supply chain attack demonstrates how legitimate software downloads can be weaponized. MetaDefender's multi-engine scanning and Content Disarm and Reconstruction (CDR) technology detect and neutralize embedded threats in installer files before they reach endpoints.
