---
title: "CISO Daily Digest: US Lifts Export Controls on Anthropic Fable 5 & Mythos 5 (20260702)"
description: "US government officially lifts emergency export restrictions on Anthropic's most capable AI models (Fable 5, Mythos 5) as global AI governance framework takes shape. Also: FortiBleed linked to INC/Lynx ransomware operations, Adobe patches 7 CVSS 10.0 flaws, Kemp LoadMaster CVE-2026-8037 actively exploited, AI agent weaponizes Langflow RCE for automated ransomware, and MariaDB CVE-2026-49261 critical disclosure."
pubDate: 2026-07-02
tags: [Anthropic, Fable 5, Export Controls, AI Governance, FortiBleed, Ransomware, Adobe, ColdFusion, Kemp LoadMaster, Langflow, RCE, MariaDB, Splunk, Cursor, Supply Chain]
author: "Security Solutions Team"
featured: true
---

## US Lifts Export Controls on Anthropic Fable 5 & Mythos 5

The Trump administration has officially lifted emergency export restrictions on Anthropic's most powerful AI models — Claude Fable 5 and Mythos 5 — reversing a cybersecurity-driven ban that had been imposed several weeks ago. The decision follows negotiations between Anthropic and the White House, with the company agreeing to enhanced cybersecurity guardrails, including third-party penetration testing, model-level safety filters, and mandatory incident reporting for any model escape or misuse.

Anthropic restored Fable 5 globally on July 1, but with fewer free-tier access days than originally offered to enterprise customers. The restoration comes alongside a wave of new product launches including **Claude Sonnet 5** (positioned as a mid-tier model approaching Opus 4.8-level performance), **Claude Science** (a dedicated research workbench integrating literature search, data analysis, and HPC workflow management), and expanded partnerships with NVIDIA BioNeMo and IBM (who announced a **$5 billion commitment** to AI-driven vulnerability discovery and remediation).

The export control reversal signals a shift in US AI policy: rather than outright bans, the government is moving toward a conditional-access framework that ties model deployment to verifiable safety mechanisms. Industry observers, including Cybersecurity Dive and Gizmodo, characterize this as a potential template for future AI regulation.

**Parallel controversy:** Anthropic also faced backlash over the discovery of **steganographic code in Claude Code** designed to detect Chinese users (via timezone, proxy detection, and known Chinese AI lab domains). Anthropic removed the feature after community outcry, labeling it an experimental anti-piracy measure.

🔗 **Reference:** Coverage from ([iThome](https://www.ithome.com.tw/news/176921), [DarkReading](https://www.darkreading.com/vulnerabilities-threats/anthropic-s-ai-finds-bugs-ibm-bets-5b-it-can-fix-them-), [xakep](https://xakep.ru/2026/07/02/fable-5-mythos-5/))

### Why This Reshapes AI Governance

The US decision to lift export controls — rather than maintain them or escalate — creates a precedent for conditional AI deployment that balances national security concerns with commercial imperatives. For CISOs, this means:
- AI model vendors will increasingly be subject to **mandatory safety verification** as a condition of market access
- Enterprise procurement of frontier AI models should incorporate **vendor security attestation** (pen-test results, incident response SLAs, model-level guardrails) into contractual terms
- The Fable 5 case demonstrates that even the most capable models can be weaponized within **72 hours** of release (the timeline from deployment to cybersecurity alarm), compressing the window for proactive defense

---

## Active Threats This Week

📌 **FortiBleed Credential Theft Linked to INC and Lynx Ransomware Operations**
SOCRadar's latest investigation into the FortiBleed mass credential theft incident reveals that the threat actors behind the operation are simultaneously operating the **INC Ransom** and **Lynx** ransomware strains. The same attackers who exfiltrated Fortinet SSL-VPN credentials are now using them for initial access in ransomware negotiations. This convergence of initial-access brokers and ransomware operators represents a dangerous operational consolidation in the cybercrime ecosystem.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html) | [iThome](https://www.ithome.com.tw/news/177041)

📌 **Adobe Patches 7 CVSS 10.0 Flaws in ColdFusion and Campaign Classic**
Adobe released emergency patches for **7 critical vulnerabilities** (all CVSS 10.0) affecting ColdFusion and Adobe Campaign Classic. The flaws allow remote code execution without authentication in default configurations. Adobe also announced it will shift to **bi-monthly patch releases** (second and fourth Tuesday of each month) citing the accelerating pace of vulnerability discovery driven by AI-assisted security research.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html) | [iThome](https://www.ithome.com.tw/news/177028)

📌 **Kemp LoadMaster CVE-2026-8037 Actively Exploited**
eSentire has detected active exploitation of **CVE-2026-8037**, a critical vulnerability in Progress Kemp LoadMaster load balancers that allows unauthenticated remote command execution. The flaw affects numerous Kemp LoadMaster versions. CISA is expected to add this to the Known Exploited Vulnerabilities catalog imminently. Organizations using Kemp LoadMaster should apply the June patch immediately.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177042)

📌 **AI Agent Exploits Langflow RCE to Automate Database Ransomware**
A new attack campaign leverages an AI agent to automatically exploit a **Langflow remote code execution (RCE)** vulnerability, chaining it into an automated ransomware deployment targeting exposed databases. The AI agent discovers vulnerable Langflow instances, executes the exploit, establishes persistence, and deploys ransomware — all without human intervention. This marks one of the first observed cases of fully autonomous AI-driven ransomware.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html)

📌 **ToddyCat-Linked Umbrij Malware Abuses OAuth to Access Gmail**
APT group ToddyCat's new **Umbrij malware** abuses OAuth tokens to access Gmail accounts via the Google API, bypassing MFA entirely. The malware steals stored OAuth tokens from compromised browsers and uses them to maintain persistent access to victim email accounts even after password changes. Organizations should review OAuth token grants and implement token expiration policies.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/toddycat-linked-umbrij-malware-abuses.html)

📌 **MariaDB CVE-2026-49261 — CVSS 10.0 OS Command Injection Details Disclosed**
Security researchers have published technical details of **CVE-2026-49261**, a CVSS 10.0 OS command injection vulnerability in MariaDB that an attacker can exploit to achieve full database server takeover. The vulnerability exists in MariaDB's handling of crafted SQL statements. Patches were released by MariaDB upstream; database administrators should verify patching status immediately.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177049)

📌 **Splunk Secure Gateway RCE (CVE-2026-20251)**
Low-privileged users can exploit **CVE-2026-20251** in Splunk Secure Gateway (SSG) to achieve remote code execution. Researcher ReactiveZero published proof-of-concept details and mitigation guidance. Organizations running Splunk with SSG enabled should prioritize patching to version 9.4.x or later.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177031)

📌 **Cursor DuneSlide — Prompt Injection Sandbox Escape (CVE-2026-50548, CVE-2026-50549)**
Two critical vulnerabilities in the AI coding tool **Cursor** allow attackers to bypass sandbox restrictions via prompt injection. The "DuneSlide" attack chain tricks the AI agent into executing arbitrary shell commands outside the sandboxed environment by embedding malicious instructions in code files being edited. Patches have been released; users should update Cursor immediately.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/critical-cursor-flaws-could-let-prompt.html) | [iThome](https://www.ithome.com.tw/news/177036)

📌 **SharePoint RCE CVE-2026-45659 Added to CISA KEV After Active Exploitation**
**CVE-2026-45659**, a critical remote code execution vulnerability in Microsoft SharePoint, has been added to CISA's Known Exploited Vulnerabilities (KEV) catalog following confirmed active exploitation in the wild. Microsoft released a patch in the June 2026 Patch Tuesday update; organizations that have not yet applied the update are at elevated risk.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177025)

📌 **Microsoft Defender BlueHammer Vulnerability Used in Ransomware Attacks**
The **BlueHammer** vulnerability in Microsoft Defender for Endpoint is being actively exploited by ransomware operators to disable endpoint detection and response (EDR) capabilities before deploying payloads. Microsoft has released an emergency out-of-band update to address the bypass.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177026)

📌 **ChocoPoC RAT Targets Vulnerability Researchers via Fake PoC Repositories**
Threat actors are deploying a new remote access trojan called **ChocoPoC** by creating fake proof-of-concept (PoC) exploit repositories on GitHub. When security researchers clone and run these repositories, the malware installs backdoor access, targeting the very community responsible for vulnerability disclosure.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-chocopoc-rat-targets-vulnerability.html)

📌 **Oracle E-Business Suite CVE-2026-46817 — 900+ Exposed Instances at Risk**
A critical vulnerability in Oracle E-Business Suite **(CVE-2026-46817)** is being actively exploited. Shadowserver Foundation reports over **900 EBS instances remain exposed** to the public internet. The flaw allows unauthenticated remote code execution in the Oracle E-Business Suite's web tier.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177037)

📌 **19-Year-Old Scattered Spider Suspect Extradited to US**
A 19-year-old alleged member of the **Scattered Spider** cybercriminal group has been extradited from the UK to face charges related to a series of high-profile data breaches and SIM-swapping attacks targeting major technology companies. The arrest signals continued international law enforcement pressure on the English-speaking cybercrime underground.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/19-year-old-scattered-spider-suspect.html)

📌 **Ousaban Banking Trojan Targets Iberian Banks with Fake PDF Lures**
A new banking trojan named **Ousaban** is targeting users of Spanish and Portuguese banks using fake PDF invoice lures. The malware performs web injects, credential harvesting, and OTP interception to compromise online banking sessions.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/ousaban-banking-trojan-targets-iberian.html)

📌 **SEO-Poisoned Software Sites Abuse ScreenConnect to Deploy AsyncRAT**
Attackers are using SEO-poisoned software download sites to trick users into installing **ScreenConnect** remote access tools, which are then leveraged to deploy **AsyncRAT** for persistent surveillance and data theft. The campaign targets users searching for free software downloads.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/seo-poisoned-software-sites-abuse.html)

---

## How Can OPSWAT Help

Multiple threats in today's digest involve **file-based malware delivery** (fake PDF lures, SEO-poisoned installers, fake PoC repositories, malicious Chrome extensions). OPSWAT MetaDefender's **multi-engine threat detection** (30+ anti-malware engines) combined with **Deep Content Disarm and Reconstruction (CDR)** can neutralize threats at the file level — stripping active content from PDFs, Office documents, and executables before they reach end users. The **Claude Code steganography incident** and **ChocoPoC fake PoC repos** highlight the growing risk of weaponized developer tools and code repositories — OPSWAT's file-level security for CI/CD pipelines can scan artifacts at build time, detecting malware embedded in ostensibly legitimate code packages.

🔗 **OPSWAT Solutions:** [MetaDefender Platform](https://www.opswat.com/products/metadefender)
