---
title: "CISO Daily Digest: Supply Chain Under Siege (20260605)"
description: "Coordinated IronWorm, Miasma, and Hades supply chain attacks hit npm, PyPI, and GitHub; Chrome 149 patches record 429 vulnerabilities; Check Point VPN zero-day actively exploited."
pubDate: 2026-06-05
tags: ["supply-chain", "vulnerabilities", "malware", "chrome", "ransomware"]
author: "Security Solutions Team"
featured: true
---

## IronWorm, Miasma, and Hades — A Coordinated Wave of Supply Chain Attacks

A coordinated wave of software supply chain attacks has struck the open-source ecosystem this week, targeting the npm registry, PyPI, and GitHub repositories at an unprecedented scale.

- **IronWorm**, a new Rust-based worm, infected npm packages by exploiting `postinstall` scripts to propagate and establish persistence, marking a significant evolution in npm malware sophistication
- The **Miasma worm** variant struck **73 Microsoft-owned GitHub repositories**, disabling them within two minutes in a coordinated automated takedown
- The **Hades campaign** against PyPI introduced a novel technique inspired by the Shai-Hulud attack pattern, targeting Python developers with typosquatted packages
- Researchers identified **over 700 poisoned GitHub code repositories** that used `postinstall` mechanisms to deploy malicious payloads, suggesting a well-resourced and organized threat actor

The simultaneous targeting of npm, PyPI, and GitHub — the three largest package ecosystems — represents an escalation in supply chain threats. Security teams should audit their CI/CD pipelines for unauthorized package updates, review recent dependency changes, and implement strict package signing and integrity verification. The use of Rust for IronWorm and automated takedown capabilities in Miasma signals a shift toward more technically sophisticated supply chain attacks that will likely continue to accelerate.

🔗 **References:** Comprehensive coverage ([The Hacker News: IronWorm & Miasma](https://thehackernews.com/2026/06/ironworm-and-new-miasma-worm-variant.html) | [DarkReading: Hades Campaign](https://www.darkreading.com/application-security/hades-campaign-pypi-shai-hulud) | [DarkReading: Rust-Written IronWorm](https://www.darkreading.com/cyberattacks-data-breaches/rust-written-ironworm-npm-supply-chain) | [The Hacker News: Miasma Hits Microsoft](https://thehackernews.com/2026/06/miasma-worm-hits-73-microsoft-github.html))

## Active threats this week

📌 **Check Point VPN Zero-Day (CVE-2026-50751 / CVE-2026-50752) Under Active Exploitation**

A critical vulnerability in Check Point VPN's IKEv1 implementation is being actively exploited in the wild, with threat actors using it to bypass authentication and gain access to protected networks. CISA has added the flaw to its Known Exploited Vulnerabilities (KEV) catalog and ordered federal agencies to patch within **4 days**. The **Qilin ransomware group** has been observed leveraging this vulnerability in active campaigns. Check Point has released patches; organizations using Quantum Security Gateway and CloudGuard Network Security should prioritize immediate updates.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/critical-check-point-vpn-flaw-exploited.html) | [DarkReading](https://www.darkreading.com/vulnerabilities-threats/check-point-vpn-flaw-exploited-early-may)

📌 **Chrome 149 Patches Record 429 Security Vulnerabilities**

Google released Chrome 149, addressing a staggering **429 security issues** — the largest single patch batch in Chrome's history. The update covers **74 critical and high-severity** vulnerabilities including use-after-free flaws, buffer overflows, and type confusion bugs. Organizations should ensure browser auto-update mechanisms are functioning and prioritize rollout across enterprise environments.

🔗 **Reference:** [The Hacker News: AI Agent Uncovers 21 Zero-Days, Chrome Patches 429](https://thehackernews.com/2026/06/ai-agent-uncovers-21-zero-days-in.html)

📌 **PCPJack Hijacks 230 Cloud Servers for Covert SMTP Relay**

A threat operation dubbed **PCPJack** has compromised over **230 cloud servers** across AWS, Google Cloud, and Azure, converting them into a covert SMTP relay network for spam and phishing campaigns. The attackers exploited weak credentials and unpatched management interfaces. Cloud security teams should audit exposed management ports and enforce multi-factor authentication across all cloud console access.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/pcpjack-hijacks-230-aws-google-cloud.html)

📌 **One-Character Linux Kernel Flaw Enables Local Root Access**

A critical Linux kernel vulnerability caused by a **single-character error** in memory management code allows unprivileged local users to gain **root access**. Public exploit code is already circulating. This flaw affects all major Linux distributions. Security teams should prioritize kernel patching, particularly for production servers and container workloads.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/one-character-linux-kernel-flaw-enables.html)

📌 **FIFA World Cup 2026 Scams Already Active**

Threat actors are exploiting the upcoming FIFA World Cup 2026 with **fake ticketing sites, banking malware, and credential harvesting campaigns**. Multiple scam domains mimicking official FIFA platforms have been registered. Organizations should educate employees about these scams and web security teams should block known malicious domains.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/fifa-world-cup-2026-scams-are-already.html)

📌 **New Threat Cluster OP-512 Targets Microsoft IIS Servers**

A newly identified threat group, **OP-512**, is targeting **Microsoft IIS servers** with a custom web shell framework. The group deploys sophisticated obfuscation techniques and maintains persistent access for data exfiltration. IIS administrators should review server logs for unauthorized file modifications and unusual process execution patterns.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/new-threat-cluster-op-512-targets.html)

📌 **Cisco Unified CM SSRF Vulnerability (CVE-2026-20230) Exploit Code Public**

Cisco patched a **server-side request forgery (SSRF)** vulnerability in **Unified Communications Manager** that could allow privilege escalation. Exploit code has been made public. Organizations using Cisco Unified CM should apply the latest patches immediately.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cisco-patches-cve-2026-20230-in-unified.html)

## OPSWAT Section

The IronWorm and Miasma supply chain attacks targeting npm, GitHub, and PyPI highlight the growing risk of software supply chain compromise. OPSWAT MetaDefender's multi-scanning engine, which aggregates **30+ anti-malware engines**, and its **Content Disarm and Reconstruction (CDR)** technology can detect and block known and unknown malware variants embedded in package dependencies, reducing the risk of supply chain-driven infections in enterprise CI/CD pipelines.
