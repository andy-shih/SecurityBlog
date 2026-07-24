---
title: "CISO Daily Digest: AMD's $5B Anthropic Bet, AI Copyright Precedent & Active Threats (20260724)"
description: "AMD invests $5 billion in Anthropic for 2GW AI capacity; Anthropic agrees to $150M copyright settlement — largest in history. Russian Laundry Bear exploits Zimbra zero-day CVE-2025-66376. FakeGit campaign creates 7,600 malicious GitHub repos spreading SmartLoader. Suno breached with 55.3M accounts exposed."
pubDate: 2026-07-24
tags: [ciso, daily-digest, security, threat-intel, ai-governance, anthropic, amd, copyright, zimbra, supply-chain, smartloader]
author: "Security Solutions Team"
featured: true
---

## AMD & Anthropic: A $5 Billion Bet Reshaping AI Infrastructure

In a landmark deal announced July 23–24, **AMD** committed to invest **$5 billion** in **Anthropic** and supply **2 gigawatts** of AI computing capacity through its Instinct MI-series accelerators and EPYC processors. The partnership positions AMD as Anthropic's primary silicon partner, challenging NVIDIA's decades-long dominance in AI training infrastructure. Anthropic will deploy AMD's **Helio** rack-scale systems, which integrate MI400-series AI accelerators with networking fabric, creating a vertically integrated AI computing platform.

**Key details:**
- AMD will deliver **2 GW** of AI compute capacity to Anthropic (equivalent to ~10–15 large-scale AI data centers)
- Anthropic achieved full AMD stack compatibility in a weekend using Claude for bootstrapping, demonstrating a breakthrough in breaking CUDA's "human capital barrier"
- AMD CEO Lisa Su framed the deal as evidence that AI computing is shifting from training-centric to inference-driven workloads, where CPU demand may outpace GPU

**Meanwhile, on the legal front**, a federal judge approved Anthropic's **$150 million copyright class action settlement** — the **largest copyright settlement in AI history**. The settlement covers authors who alleged Anthropic used copyrighted works to train Claude without permission. Music publishers also filed an amended lawsuit against Anthropic, seeking additional damages, while the Harry Potter publisher (Bloomsbury) secured a multi-million dollar settlement from the same case.

**Why this matters:** The AMD-Anthropic deal signals a tectonic shift in AI hardware supply chains away from single-vendor dependence on NVIDIA. Combined with the copyright settlement establishing financial liability for AI training data, organizations face dual pressures: diversifying AI infrastructure vendors while simultaneously auditing training data provenance for compliance.

🔗 **Reference:** Coverage from ([SecurityWeek - AMD Anthropic Partnership](https://securityweek.com), [The Hacker News](https://thehackernews.com/2026/07/), [DarkReading](https://www.darkreading.com/), [iThome - AMD發表最新AI加速器](https://www.ithome.com.tw/news/))

---

## Active Threats This Week

📌 **Russian Laundry Bear Exploits Zimbra Zero-Day (CVE-2025-66376)**
The Russian state-sponsored group **Laundry Bear** (aka Void Blizzard, TA488) is actively exploiting a Zimbra Collaboration Suite zero-day, **CVE-2025-66376**, to exfiltrate email and 2FA codes from government and enterprise targets across **Ukraine, NATO nations, the CIS, and Africa**. Palo Alto Networks and Proofpoint report at least **10 confirmed breaches**, with the group deploying a custom malware variant, **ZimReaper**, for persistent access. Organizations running Zimbra should prioritize patching to version **10.1.20**, which also addresses SNMP command injection (CVE-2026-10631) and XSS vulnerabilities (CVE-2026-50054, CVE-2026-50055).

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/russian-espionage-group-exploited.html) | [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/russian-hackers-zimbra-zero-day-us-ukraine-targets) | [iThome](https://www.ithome.com.tw/news/177614)

📌 **FakeGit: 7,600+ Malicious GitHub Repos Spread SmartLoader**
A massive campaign dubbed **FakeGit** uses approximately **6,600 GitHub accounts** to create **7,600 malicious repositories** distributing the **SmartLoader** malware. The threat actors disguised malicious code as legitimate AI Skills and MCP servers in public directories. Over **800 malicious AI Skill and MCP server entries** were found in public catalogs. This represents one of the largest supply chain attacks targeting developer ecosystems, with implications for AI agent toolchains that automatically pull from public package registries.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177616) | [The Hacker News - Golden Chickens](https://thehackernews.com/2026/07/golden-chickens-resurfaces-with-four.html)

📌 **Suno Data Breach: 55.3 Million Accounts Exposed**
The AI music generation platform **Suno** suffered a massive data breach, with attackers exfiltrating **55.3 million user accounts**. The compromised data includes email addresses, hashed passwords, and account metadata. While no financial data was reportedly taken, the breach scope makes it one of the largest AI-platform breaches to date.

🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/07/24/suno-data-leak/)

📌 **Multiple AI Vulnerabilities Surface**
Security researchers disclosed several AI-focused vulnerabilities this week:
• **Claude Desktop (PromptFiction):** A flaw in Claude Desktop **1.1.2321** allows malicious links to silently inject hidden commands, potentially exfiltrating conversation history and executing arbitrary code. Discovered by Oasis Security.
• **ChatGPT AgentForger:** A phishing link can deploy rogue workspace agents within ChatGPT's agent framework.
• **Bing Images SVG RCE:** Crafted SVG files uploaded to Bing Images can execute commands as **SYSTEM** on Microsoft's servers.

🔗 **Reference:** [The Hacker News - AgentForger](https://thehackernews.com/2026/07/chatgpt-agentforger-flaw-could-deploy.html) | [The Hacker News - Bing Images](https://thehackernews.com/2026/07/bing-images-flaws-let-crafted-svgs-run.html) | [iThome - Claude Desktop](https://www.ithome.com.tw/news/177608)

📌 **RefluXFS: New Linux Root Privilege Vulnerability**
A new vulnerability in the **XFS** filesystem implementation, dubbed **RefluXFS**, allows unprivileged local users to gain **root privileges** on Linux systems. The flaw affects all major distributions and is considered critical for multi-tenant environments such as container hosts and cloud workloads.

🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/07/24/refluxfs/)

📌 **Linux Kernel Patches 440 CVEs in 24 Hours**
In an unprecedented burst, the Linux kernel development team patched **440 vulnerabilities** in a single 24-hour window, releasing a massive CVE batch. While the scale is notable, most of the vulnerabilities are moderate severity. The density of patches, however, underscores the growing complexity of kernel security maintenance.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177599)

📌 **Other Notable Threats:**
• **Certighost Exploit:** Low-privileged AD users can impersonate a domain controller — a critical Active Directory privilege escalation. ([The Hacker News](https://thehackernews.com/2026/07/certighost-exploit-lets-low-privileged.html))
• **SolarWinds Serv-U:** 15 critical vulnerabilities patched in version 2026.3, including RCE and privilege escalation. ([iThome](https://www.ithome.com.tw/news/177611))
• **Windmill CVE-2026-29059:** Active exploitation of a path traversal vulnerability in the open-source workflow platform. ([iThome](https://www.ithome.com.tw/news/177601))

---

## How Can OPSWAT Help

The **FakeGit supply chain campaign** (7,600+ malicious repos, 800+ fake AI Skills/MCP servers) represents a direct threat to organizations using AI agent toolchains and open-source packages. OPSWAT's **MetaDefender** platform provides multi-scanning against 30+ anti-malware engines and **Content Disarm and Reconstruction (CDR)** to neutralize threats in downloaded packages, binaries, and documents before they reach endpoints. Organizations integrating AI agents should enforce file-level inspection on every package pull and MCP server registration to prevent SmartLoader and similar supply chain implant delivery.
