---
title: "CISO Daily Digest: Pwn2Own Berlin 2026 and Turla P2P Botnet (20260516)"
description: "Pwn2Own Berlin 2026 reveals 39 zero-days, Turla/Kazuar evolves into modular P2P botnet, and Claude Mythos bypasses Apple M5 security."
pubDate: 2026-05-16
tags: ["CISO Digest", "Pwn2Own", "Turla", "Mythos", "Zero-Day"]
author: "Security Solutions Team"
featured: true
---

**Pwn2Own Berlin 2026** concluded on May 15 with 39 unique zero-day vulnerabilities demonstrated across Windows 11, Microsoft Exchange Server, Microsoft Edge, and multiple AI coding agents (OpenAI Codex, Cursor, LiteLLM). Over **$908,000** in prizes were awarded. Orange Tsai from DEVCORE claimed **Master of Pwn** with a two-stage exploit chain: an Exchange Server remote code execution ($200K) followed by an Edge browser sandbox escape ($175K). The event has significant implications for enterprise defense as multiple unpatched vulnerabilities now require urgent mitigation.

- Event spanned May 12-15, 2026 in Berlin
- **39 zero-days** demonstrated across OS, browser, cloud, and AI targets
- DEVCORE's Orange Tsai earned **$505K** across two winning chains
- Microsoft Exchange RCE and Edge sandbox escape were the standout exploits
- AI coding agents were included as attack surfaces for the first time
- Several vulnerabilities remain unpatched; organizations should prioritize CVE tracking

🔗 **Reference:** Comprehensive coverage ([The Hacker News](https://thehackernews.com/2026/05/pwn2own-berlin-2026-day-1-winners.html), [Xakep.ru](https://xakep.ru/2026/05/15/pwn2own-berlin-2026/))

📌 **Turla Kazuar Backdoor Evolves Into Modular P2P Botnet**

The Russia-linked APT group Turla has transformed its Kazuar backdoor into a fully modular **P2P botnet** with three pluggable modules (InfoStealer, Proxy, Keylogger) and **150+ configuration options**. The new variant implements autonomous leader election, AMSI/ETW/WLDP bypasses, and encrypted peer-to-peer C2 communication. The botnet has been observed targeting government and diplomatic entities in Eastern Europe and Central Asia.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/turla-turns-kazuar-backdoor.html)

📌 **Claude Mythos AI-Assisted macOS Kernel Exploit Achieves Root on Apple M5**

Security startup Calif used a **Claude Mythos** preview build to develop the first public macOS kernel memory corruption exploit bypassing Apple's new **Memory Integrity Enforcement (MIE)** on **M5** hardware. The working exploit was built in **under a week** (April 25 to May 1), elevating from an unprivileged local user to root shell on macOS 26.4.1. This marks a significant milestone in AI-assisted exploit development outpacing hardware-level mitigations.

🔗 **Reference:** [Decrypt](https://decrypt.co/367925/apple-mac-m5-system-exploited-anthropic-claude-mythos-ai) | [Cult of Mac](https://www.cultofmac.com/news/apple-macbook-pro-mie-claude-mythos-ai-exploit)

📌 **AI Code Generation and Agent Security — The New Attack Surface**

Dark Reading analysis warns that two converging forces — **AI-mandated coding output** generating subtle bugs at scale and **autonomous exploit agents** like Project Glasswing and Claude Mythos — create a "perfect storm" that overwhelms traditional CVE triage. The article proposes that the highest risk may be internal services on privileged trust paths rather than flagship applications. AI coding agents were also a confirmed attack surface at Pwn2Own Berlin 2026.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/ai-code-and-agents-forces-defenders-adapt)

OPSWAT's **MetaDefender** platform provides multi-engine file scanning and **Deep Content Disinfection and Reconstruction (CDR)** to neutralize file-based payloads at the perimeter — including zero-day exploits delivered through email, web downloads, and removable media that bypass traditional signature-based detection.
