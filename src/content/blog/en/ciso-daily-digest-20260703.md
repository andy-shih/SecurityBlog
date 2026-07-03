---
title: "CISO Daily Digest: Anthropic Cracks Down on Chinese Loopholes, Alibaba Bans Claude Code (20260703)"
description: "Anthropic actively shuts down offshore workarounds used by Chinese firms to access Claude, while Alibaba bans internal use of Claude Code over security concerns. Also: FortiBleed linked to INC/Lynx ransomware operations, JadePuffer AI agent automates Langflow ransomware, Armored Likho APT targets governments with BusySnake stealer, Zero Day Clock shows exploit time under 1 day, SocGholish infects 1.44M WordPress sites, Microsoft Exchange Online elevation-of-privilege flaw disclosed, and FBI warns of TeamPCP supply chain attacks."
pubDate: 2026-07-03
tags: [Anthropic, Claude, Alibaba, Chinese Access, Supply Chain, FortiBleed, JadePuffer, Langflow, Armored Likho, APT, Ransomware, CISO, Zero Day, SocGholish, WordPress, Exchange Online, TeamPCP, Cisco, IBM Db2, SimpleHelp]
author: "Security Solutions Team"
featured: true
---

## Anthropic Cracks Down on Chinese Workaround Access to Claude, Alibaba Bans Claude Code

Anthropic has moved aggressively to close loopholes that Chinese firms and engineers have been using to access its Claude AI models, including Claude Code, despite US export restrictions. According to multiple reports, Chinese engineers discovered and exploited workarounds — including routing traffic through Hong Kong-based entities, using virtual credit cards, and leveraging cloud infrastructure outside mainland China — to access Anthropic's suite of AI tools that remain restricted under US export control regulations.

The crackdown comes as Anthropic identified systematic patterns of unauthorized access from Chinese IP ranges, with some accounts traced back to major Chinese technology firms. Anthropic has reportedly terminated accounts, blocked payment methods associated with Chinese entities, and implemented more aggressive geofencing and proxy detection measures.

In a closely related development, **Alibaba has banned its employees from using Claude Code** internally, citing security concerns identified by its security team. The ban affects all Alibaba Group business units and represents one of the first major enterprise-wide prohibitions of an AI coding tool by a global technology company. The Information and multiple sources report that Alibaba's security review found Claude Code's data handling and code submission patterns posed unacceptable risks for the Chinese e-commerce giant. This comes as Anthropic separately faces backlash over **steganographic code discovered in Claude Code** designed to detect Chinese users (via timezone, proxy detection, and known Chinese AI lab domains), which Anthropic removed after community outcry.

Anthropic also announced it is in talks with **Samsung to develop custom AI chips** at the 2nm process node, signaling the company's hardware ambitions beyond model development. The company unveiled **Claude Science**, a dedicated research workbench, and **Claude Sonnet 5** as the new default model for free and Pro tiers.

🔗 **Reference:** Coverage from ([iThome](https://www.ithome.com.tw/news/177034), [iThome](https://www.ithome.com.tw/news/177018), [The Hacker News](https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html))

### Why This Reshapes Enterprise AI Governance

The convergence of Anthropic's loophole crackdown, Alibaba's Claude Code ban, and the Claude Code steganography controversy creates a watershed moment for enterprise AI governance. For CISOs, this signals:

- **AI coding tools introduce new supply chain risks** — code submitted to AI coding tools is processed and stored externally; enterprises must audit data handling and code submission policies before adopting AI coding assistants at scale
- **Geopolitical AI access controls are hardening** — both governments and AI vendors are actively enforcing model access restrictions, creating compliance obligations for multinational enterprises
- **The Claude Code steganography incident** demonstrates that AI vendors may embed opaque anti-piracy or usage-detection mechanisms in developer tools, raising transparency and data privacy concerns that enterprise procurement teams must address in vendor security reviews

---

## Active Threats This Week

📌 **FortiBleed Credential Theft Linked to INC and Lynx Ransomware Operations**
SOCRadar's investigation reveals that the operators behind the FortiBleed mass credential theft campaign — which scanned ~11,250 FortiGate portals, achieved admin-level access on 409 targets, and completed the attack chain on 354 organizations — are simultaneously operating INC Ransom and Lynx ransomware strains. At least 12 ransomware deployments with hundreds of encrypted endpoints have been confirmed.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html)

📌 **JadePuffer AI Agent Automates Langflow Ransomware — First Fully Autonomous AI-Driven Ransomware Attack**
Sysdig's Threat Research Team has documented JADEPUFFER, the first observed fully AI-automated ransomware attack. An LLM agent autonomously exploited CVE-2025-3248 (a missing-authentication flaw in Langflow), stole credentials, moved laterally, and encrypted a production database — all without human intervention. This marks a paradigm shift in ransomware capability: the skill floor for executing a complete attack chain has dropped to the cost of renting an AI agent.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html) | [iThome](https://www.ithome.com.tw/news/177055)

📌 **Armored Likho APT Targets Governments and Power Sector with BusySnake Stealer**
A previously undocumented threat actor tracked as Armored Likho has been attributed to cyber attacks targeting government agencies and the electric power sector across Russia, Brazil, and Kazakhstan. Kaspersky reports the group uses obfuscated, modular RATs and infostealers including BusySnake, Go2Tunnel for remote access, and dynamically delivers modules tailored to victim profiles.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/armored-likho-targets-government.html)

📌 **Zero Day Clock: Vulnerability Disclosure to Exploitation Drops Below 24 Hours**
The Zero Day Clock project now shows the average Time-to-Exploit (TTE) has compressed from months or days to mere hours. This represents a fundamental shift in vulnerability response: defenders no longer have the luxury of scheduled patch cycles for high-severity flaws.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177079)

📌 **SocGholish (FakeUpdates) Infects Over 1.44 Million WordPress Sites in 3 Years**
Shadowserver Foundation reveals that the SocGholish malware campaign has compromised over 1.44 million WordPress websites over the past three years, using compromised sites as infrastructure for a botnet that delivers follow-on payloads including information stealers and ransomware.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177078)

📌 **Microsoft Exchange Online Elevation-of-Privilege Vulnerability (CVE-2026-54998)**
Microsoft disclosed CVE-2026-54998, an authorization mechanism flaw in Exchange Online that could allow authenticated attackers to elevate privileges and gain unauthorized data access. Microsoft has completed remediation in the cloud platform.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177077)

📌 **Cisco Unified CM SSRF Vulnerability (CVE-2026-20230) Added to CISA KEV**
CVE-2026-20230, a critical SSRF vulnerability in Cisco Unified Communications Manager, is being actively exploited. CISA has added it to the Known Exploited Vulnerabilities catalog. Organizations running Unified CM should patch immediately.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177070)

📌 **FBI Warns of TeamPCP Supply Chain Attacks Targeting Developers and CI/CD Pipelines**
The FBI has warned about the hacker group TeamPCP, which targets software developers by tampering with legitimate software packages to implant malware, steal cloud credentials, and Kubernetes secrets, leading to follow-on ransomware deployment.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177075)

📌 **SimpleHelp CVE-2026-48558 — 400+ Exposed Servers at Risk**
Shadowserver Foundation warns that approximately 439 SimpleHelp remote access servers remain unpatched against CVE-2026-48558 (CVSS 10.0), a critical vulnerability that could allow attackers to gain full remote access.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177066)

📌 **Polymarket Supply Chain Breach — Customers Lose $3 Million**
The cryptocurrency prediction market Polymarket suffered a third-party supply chain intrusion affecting fewer than 15 accounts, with losses estimated at $3 million. The attack vector is believed to be a compromised third-party dependency.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177064)

📌 **IBM Db2 Critical RCE Vulnerability Patched**
IBM has released patches for a critical vulnerability in Db2 that could allow remote code execution without authentication. Organizations running Db2 should prioritize patching.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177057)

📌 **Anubis Ransomware Exploits Citrix Bleed 2 (CVE-2025-5777) for Initial Access**
Arctic Wolf reports that affiliates of the Anubis ransomware operation continue to exploit the year-old Citrix Bleed 2 vulnerability (CVE-2025-5777) as an initial access vector, abusing legitimate RMM tools and remote access software for lateral movement.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/ransomware-groups-turn-to-citrix-bleed.html) | [iThome](https://www.ithome.com.tw/news/177060)

📌 **PamStealer — New macOS Malware Steals Login Passwords via Fake Maccy Sites**
Discovered by Jamf Threat Labs, PamStealer is a macOS information stealer distributed as a compiled AppleScript file impersonating the legitimate Maccy clipboard manager. The malware validates the victim's login password through macOS PAM before capturing credentials and exfiltrating data.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/pamstealer-uses-fake-maccy-sites-and.html)

📌 **ChocoPoC RAT Targets Vulnerability Researchers via Fake PoC Repositories**
Attackers are distributing the ChocoPoC remote access trojan through fake proof-of-concept exploit repositories on GitHub. The malware hides in Python package dependencies, targeting security researchers who clone and run the supposed PoCs.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-chocopoc-rat-targets-vulnerability.html)

📌 **European Parliament Member Investigating Spyware Hacked with Pegasus**
Citizen Lab reveals that former MEP Stelios Kouloglou had his device repeatedly infected with Pegasus spyware while serving on a committee investigating the abuse of commercial surveillance tools. The infections have not been attributed to a particular government.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/european-parliament-member.html)

📌 **Apache Tomcat Critical Vulnerabilities Patched (CVE-2026-55276, CVE-2026-53434)**
Apache has released patches for Tomcat vulnerabilities involving certificate revocation validation failures and security configuration information disclosure. Users should upgrade immediately.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177063)

📌 **Google Disrupts NetNut Residential Proxy Network Spanning 2 Million Devices**
Google's Threat Intelligence Group, in cooperation with the FBI and Lumen, has significantly degraded NetNut (also tracked as Popa), a residential proxy network controlling at least 2 million home devices used to anonymize cybercriminal traffic.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/google-disrupts-netnut-residential.html)

---

## How Can OPSWAT Help

Multiple threats in today's digest involve **file-based malware delivery** and **supply chain compromise**: SocGholish's WordPress infections deliver malware via compromised websites, ChocoPoC hides in fake PoC repositories targeting security researchers, PamStealer uses fake Maccy download sites, and TeamPCP tampers with software packages in CI/CD pipelines. OPSWAT MetaDefender's **multi-engine threat detection** (30+ anti-malware engines) combined with **Deep Content Disarm and Reconstruction (CDR)** can neutralize file-borne threats at the point of ingestion. For the growing risk of **weaponized developer tools and compromised CI/CD pipelines**, OPSWAT's file-level security for development environments can scan packages, containers, and build artifacts at integration points, detecting malware before it reaches production environments.

🔗 **OPSWAT Solutions:** [MetaDefender Platform](https://www.opswat.com/products/metadefender)
