---
title: "CISO Daily Digest: Claude Code Hidden Tracker Exposed — Anthropic 'Experiment' Roils AI Supply Chain (20260707)"
description: "Anthropic caught embedding steganographic tracker in Claude Code targeting Chinese users; Alibaba bans Claude Code amid IP theft fears; CISA deploys Mythos to audit government code; KVM 16-year VM escape flaw disclosed; Adobe ColdFusion zero-day exploited within 2 hours; Lazarus NPM supply chain campaign; Akira ransomware via SEO poisoning."
pubDate: 2026-07-07
tags: [CISO, Daily Digest, Security, AI Governance, Supply Chain, Vulnerability, Malware, Anthropic, Claude, Tracker, KVM, ColdFusion, Ransomware, Phishing]
author: "Security Solutions Team"
featured: true
---

## Claude Code Hidden Tracker & AI Governance Fallout

### What Happened

The cybersecurity world is reacting to Anthropic's admission that Claude Code contained a **steganographic tracker** designed to detect Chinese users, violating the company's own anti-surveillance stance. The tracker was discovered by researchers and confirmed by Anthropic, which called it an "experiment" and promptly removed it. The incident has triggered a **broader trust crisis** across the AI supply chain.

**Alibaba banned employees** from using Anthropic's Claude Code effective July 10, citing "distillation attack" risks and IP theft fears — joining Meta in restricting internal Claude access. CISA, however, is using **Anthropic's Mythos AI** to audit US government code for vulnerabilities, despite the Pentagon's ongoing dispute with Anthropic over Fable 5 export controls.

Additional developments: Illinois passed legislation requiring **third-party safety audits** for frontier AI models; Anthropic signed a **$19B Kentucky data center lease** with TeraWulf; Claude Cowork was found exploitable for VM root access on shared infrastructure; and Anthropic researchers revealed Claude's internal **"J-Space" reasoning workspace** — a previously undiscovered emergent cognitive structure.

### Why This Reshapes AI Governance

The Claude Code tracker incident underscores a fundamental supply chain risk: **AI coding tools with telemetry can double as surveillance vectors**. As enterprises adopt AI agents for code generation, undisclosed tracking mechanisms introduce unacceptable risk for IP-sensitive environments. The Alibaba ban signals that geopolitical trust deficits are fragmenting the AI tool market, while CISA's contradictory embrace of Mythos highlights the policy vacuum around government use of frontier AI.

The Illinois AI audit law and the ongoing Fable 5 export control saga further demonstrate that **regulation is racing to catch up** with AI's dual-use reality. CISOs must now treat AI toolchains as critical supply chain nodes requiring the same vet rigor as any third-party library.

---

## Active Threats This Week

📌 **CVE-2026-20896 — Gitea Docker Registry Flaw Under Active Probe**
Threat actors began probing the Gitea Docker registry vulnerability (CVSS 9.1) just 13 days after disclosure. The flaw allows unauthenticated container registry access, enabling pull of private images.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/threat-actors-probe-gitea-docker-flaw.html)

📌 **16-Year-Old Linux KVM VM Escape Flaw**
A vulnerability in Linux KVM virtualization (discovered after 16 years) allows guest VMs to escape to the host on both Intel and AMD x86 systems. The flaw affects all major distros and cloud providers using KVM.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/16-year-old-linux-kvm-flaw-lets-guest.html) | [iThome](https://www.ithome.com.tw/news/177139)

📌 **Adobe ColdFusion Zero-Day Exploited Within 2 Hours**
A critical ColdFusion vulnerability (CVSS 10.0) disclosed by Adobe was weaponized within 2 hours of public disclosure. Attackers are actively exploiting unpatched instances.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177132)

📌 **BeyondTrust Critical Auth Bypass (Remote Support & PRA)**
BeyondTrust patched critical authentication bypass vulnerabilities in Remote Support and Privileged Remote Access products. Exploitation could allow unauthenticated admin access.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/beyondtrust-patches-critical-auth.html)

📌 **CERT/CC Warns of Hidden Admin Backdoor in Tenda Router Firmware**
A hidden administrative backdoor was discovered in Tenda router firmware, affecting millions of consumer and SOHO devices. No patch currently available.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/certcc-warns-of-hidden-admin-backdoor.html)

📌 **Iran-Linked Hackers Deploy Cavern C2 Framework**
Iran-aligned threat actors are using a new command-and-control framework called "Cavern" to target Israeli organizations across multiple sectors.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/iran-linked-hackers-use-new-cavern-c2.html)

📌 **Lazarus Group NPM Supply Chain Attack**
North Korea's Lazarus group infiltrated the NPM ecosystem with malicious packages masquerading as the Rollup build tool, stealing credentials and cryptocurrency wallet data.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177138)

📌 **Akira Ransomware via SEO Poisoning**
Akira ransomware operators deployed SEO poisoning campaigns targeting IT administrators searching for legitimate tools, tricking them into downloading malicious installers.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177131)

📌 **Avalon AI-Powered Malware Framework**
A new malware framework named "Avalon" combines infostealer and ransomware capabilities, built with AI-assisted development techniques for rapid evolution.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177146)

📌 **BusySnake Infostealer Targets Critical Infrastructure**
The "BusySnake" infostealer, deployed by the Armored Likho group, is actively targeting government agencies and energy sector organizations.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177101)

📌 **Suspected China-Aligned Hackers Exploit Roundcube Flaws**
State-aligned hackers are exploiting Roundcube webmail vulnerabilities against university targets worldwide.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/suspected-china-aligned-hackers-exploit.html)

📌 **Scattered Spider — Windows Device ID Led FBI to Suspect**
A court filing reveals that a Windows device identifier (MachineGUID) helped the FBI trace an alleged Scattered Spider hacker despite multiple identity obfuscation layers.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/court-filing-reveals-windows-device-id.html)

📌 **Writer AI Agent Flaw — Session Token Leak Across Tenants**
A vulnerability in Writer's AI agent preview feature could allow cross-tenant session token leakage.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/writer-ai-flaw-could-let-agent-previews.html)

📌 **curl 8.21.0 Patches 18 Vulnerabilities (Including 25-Year-Old Bug)**
The curl project released version 8.21.0 fixing 18 security issues, including a flaw present for 25 years.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177143)

📌 **OpenSSH 10.4 — PQC Signatures & Multiple Fixes**
OpenSSH 10.4 introduces hybrid post-quantum cryptography signatures alongside multiple vulnerability patches.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177136)

📌 **ClamAV 20-Year-Old Vulnerability Patched by Cisco**
Cisco patched a 20-year-old security flaw in the open-source ClamAV antivirus engine.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177096)

📌 **JetBrains Identity Platform Critical Vuln — Account Takeover Risk**
A critical vulnerability in JetBrains' identity management platform could allow account takeover and privilege escalation.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177100)

📌 **Hotel Phishing Campaign — Calendly & Google Redirects to Deploy TonRAT**
Hackers are targeting European and Asian hotels with phishing emails abusing Calendly and Google redirects to deliver the TonRAT backdoor.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177145)

📌 **Apple Hide My Email Privacy Flaw**
A vulnerability in Apple's Hide My Email service could expose users' real email addresses.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177147)

📌 **PolinRider — Malicious Packages Across NPM, Packagist, Go, Chrome Web Store**
North Korean hackers expanded the PolinRider campaign, planting malicious packages across multiple package registries.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177137)

---

## How Can OPSWAT Help

The Claude Code hidden tracker incident and the Lazarus NPM/PolinRider supply chain campaigns highlight the growing risk of **file-borne threats in AI toolchains and open-source ecosystems**. OPSWAT MetaDefender's multi-scan (30+ anti-malware engines) and CDR (Content Disarm and Reconstruction) can protect against:
- **Malicious AI toolchain components** that embed hidden telemetry or backdoors
- **Supply chain package attacks** across NPM, PyPI, Go, and other registries
- **File-based ransomware and infostealers** delivered via SEO poisoning and phishing

🔗 **Reference:** Coverage from ([Ars Technica](https://arstechnica.com/tech-policy/2026/07/anthropic-outed-for-claude-tracker-that-secretly-monitored-chinese-users/), [Malwarebytes](https://www.malwarebytes.com/blog/news/2026/07/claude-codes-hidden-tracker-was-an-experiment-says-anthropic), [The Hacker News](https://thehackernews.com/2026/07/what-changes-when-your-software-supply.html))
