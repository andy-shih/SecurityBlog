---
title: "CISO Daily Digest: Oracle CPU 243 Patches, Supply Chain Attacks & FortiBleed (20260623)"
description: "Oracle releases 243 security patches including multiple CVSS 10.0 vulnerabilities; ShapedPlugin WordPress supply chain attack compromises 70,000+ sites; malicious npm packages deliver Windows RAT; FortiBleed attackers weaponize stolen firewall credentials; DifyTap flaws expose cross-tenant AI chat data; Apple BootROM usbliter8 vulnerability affects A12/A13 chips."
pubDate: 2026-06-23
tags: [oracle, supply-chain, fortibleed, wordpress, npm, vulnerability, apt, apple, bootrom, ai-security]
author: "Security Solutions Team"
featured: true
---

## Oracle Ships 243 Patches — Multiple CVSS 10.0 Vulnerabilities Demand Urgent Action

Oracle released its June 2026 Critical Patch Update (CPU), addressing **243 vulnerabilities** across its product portfolio, including multiple flaws with a CVSS severity score of **10.0** — the highest possible rating. The patches span Oracle Database, Fusion Middleware, Oracle Identity Manager, PeopleSoft, and E-Business Suite, among dozens of product families.

The update comes as threat actors have already begun weaponizing Oracle PeopleSoft flaws in the wild. Earlier this month, the ShinyHunters hacking group was observed actively exploiting **CVE-2026-35273**, a zero-day in PeopleSoft PeopleTools, which prompted CISA to add the vulnerability to its Known Exploited Vulnerabilities (KEV) catalog. The scale of this CPU — 243 patches with multiple perfect-score vulnerabilities — marks it as a critical remediation event for every organization running Oracle enterprise software.

### Why This Reshapes Vulnerability Management Cadence

The sheer volume of critical-severity patches in a single CPU release underscores the growing challenge of enterprise patch prioritization. With CISA now actively mandating remediation timelines (3-day KEV windows) and threat actors increasingly weaponizing Oracle vulnerabilities within days of disclosure, organizations can no longer treat quarterly CPUs as routine maintenance. The presence of CVSS 10.0 flaws across multiple product lines means that a single unpatched system in the Oracle stack can become a network-wide compromise vector, particularly when combined with the lateral movement capabilities demonstrated in recent ShinyHunters campaigns.

🔗 **Reference:** Coverage from ([iThome](https://www.ithome.com.tw/news/176795), [The Hacker News](https://thehackernews.com/2026/06/openai-expands-daybreak-with-gpt-55.html) via Daybreak context)

---

## Active Threats This Week

📌 **FortiBleed — Stolen Fortinet Credentials Weaponized in Active Campaigns**

The FortiBleed incident continues to escalate as new technical details emerge. Security researchers have revealed that attackers are using a tool called **FortigateSniffer** to harvest credentials from compromised Fortinet devices, with over **70,000 devices' credentials** now circulating in criminal forums. iThome reports that the attackers are actively turning compromised FortiGate firewalls into credential-stealing proxies, expanding their reach beyond the initial data leak. Fortinet has responded by confirming the data is a recompilation of previously leaked credentials, but the attack surface remains severe — organizations that have not rotated VPN and admin credentials since the original leak remain exposed. Dark Reading notes that the attackers are persistently expanding their targeting, focusing on organizations with unpatched or misconfigured FortiGate units.

🔗 **Reference:** [iThome: Technical Details](https://www.ithome.com.tw/news/176813) | [iThome: Fortinet Response](https://www.ithome.com.tw/news/176784) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/fortibleed-attackers-firewalls-credentials-st)

📌 **ShapedPlugin Supply Chain Attack Compromises 70,000+ WordPress Sites**

A sophisticated supply chain attack on **ShapedPlugin**, a popular WordPress plugin vendor, has resulted in the backdooring of multiple premium plugins. The compromised plugins were distributed through official channels, affecting an estimated **70,000+ websites**. The backdoor provides attackers with full administrative access — file uploads, database manipulation, and user account creation. Organizations running ShapedPlugin plugins (including WP Blocks and other premium offerings) should immediately audit their deployments, rotate API keys, and verify plugin file integrity.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/shapedplugin-wordpress-pro-plugins.html)

📌 **Malicious npm Packages Pose as PostCSS Tools to Deploy Windows RAT**

Threat actors have published **malicious npm packages** disguised as PostCSS development tools that install a Windows Remote Access Trojan (RAT) on developer workstations. The attack targets the software supply chain at the development phase — developers who install these typosquatted packages unknowingly deploy a backdoor into their local environment and potentially into CI/CD pipelines. The RAT provides persistent access, credential theft capabilities, and lateral movement vectors into internal development infrastructure. This incident follows a wave of similar targeting of the JavaScript/Node.js ecosystem and underscores the need for software composition analysis (SCA) and runtime package monitoring.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/malicious-npm-packages-pose-as-postcss.html)

📌 **DifyTap Vulnerabilities Expose Cross-Tenant AI Chat Data**

Researchers disclosed **DifyTap**, a set of flaws in the open-source AI application platform Dify that could allow attackers to access AI chat data across different tenants. The vulnerabilities affect organizations using Dify to build and deploy LLM-powered applications, potentially exposing sensitive conversational data — including internal business strategies, customer PII, and proprietary code — to unauthorized parties. The issue highlights the emerging attack surface of AI application platforms where tenant isolation is not yet mature.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/researchers-detail-difytap-flaws-in.html)

📌 **Apple BootROM Vulnerability usbliter8 Affects A12, S4/S5, and A13 Chips**

Security researchers have disclosed **usbliter8**, a BootROM vulnerability affecting Apple's A12, S4/S5, and A13 system-on-chip designs. The flaw resides in the USB controller and SecureROM configuration, allowing attackers with physical USB access to execute arbitrary code during the early boot process. Notably, this vulnerability cannot be fully resolved through software updates alone, as it exists in read-only memory (BootROM). The impact spans iPhones (XS through 11 series), Apple Watch Series 4/5, and iPad models using these chips. Organizations managing fleets of Apple devices should review physical security controls and DFU mode restrictions.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176808)

📌 **PCPJack Campaign Targets 230 AWS, GCP, and Azure Servers for SMTP Relay Botnet**

A campaign tracked as **PCPJack** has compromised approximately **230 cloud servers** across AWS, Google Cloud, and Azure, repurposing them as an SMTP relay botnet for spam and phishing operations. The attackers exploited misconfigured cloud instances and weak credentials to gain initial access, then deployed persistent relay infrastructure. For cloud security teams, this reinforces the critical importance of perimeter hardening — especially the closure of unrestricted SMTP (port 25) egress, identity-aware access controls, and continuous cloud security posture management (CSPM).

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176796)

📌 **OpenAI Expands Daybreak with GPT-5.5-Cyber for Defensive Security**

OpenAI's **Daybreak** cybersecurity initiative is expanding with the introduction of **GPT-5.5-Cyber**, a specialized model designed to help defenders identify and patch vulnerabilities. The model is tailored for security analysis tasks — code review for flaws, vulnerability research, and patch validation. The move parallels the broader trend of AI vendors weaponizing their models for both offensive and defensive security applications, and signals that AI-powered vulnerability discovery is becoming a standard security capability rather than an emerging novelty.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/openai-expands-daybreak-with-gpt-55.html)

📌 **FFmpeg Patches PixelSmash Remote Code Execution Vulnerability**

The FFmpeg multimedia framework has patched **PixelSmash**, a critical remote code execution vulnerability that could be triggered by processing a crafted media file. Given FFmpeg's widespread use in video streaming, surveillance, media processing, and content management systems, the flaw has broad implications. Organizations using FFmpeg in production pipelines should prioritize this update.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176794)

---

## How Can OPSWAT Help

This week's threat landscape is dominated by **supply chain and file-borne attacks** — from compromised WordPress plugins and malicious npm packages to FortiBleed credential theft and cross-tenant AI platform vulnerabilities. These threats share a common file-delivery vector: attackers weaponize seemingly legitimate software to infiltrate trusted environments.

OPSWAT MetaDefender's **multi-scanning (30+ anti-malware engines) + Deep Content Disarm and Reconstruction (CDR)** neutralizes threats in packages, plugins, and binaries before they reach endpoints or CI/CD pipelines. The ShapedPlugin WordPress backdoor and malicious npm RAT are exactly the type of file-borne attacks that multi-scanning with CDR can detect and prevent at the point of ingestion.

🔗 **Reference:** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
