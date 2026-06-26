---
title: "CISO Daily Digest: Anthropic Takes Distillation Fight to Congress; Cisco CUCM Exploited Within 24 Hours (20260626)"
description: "Anthropic urges Congress to outlaw AI distillation as Alibaba shares sink; Cisco Unified CM SSRF flaw CVE-2026-20230 weaponized in under 24 hours post-disclosure; Klue supply chain attack spreads to BeyondTrust, Pendo, and 8×8; Miasma worm targets npm packages and GitHub Actions; Turla STOCKSTAY backdoor used in Ukraine espionage; PTC Windchill RCE added to CISA KEV with active web shell attacks; Operation Endgame dismantles Amadey, StealC, and SocGholish crime networks."
pubDate: 2026-06-26
tags: [anthropic, alibaba, ai-distillation, ai-governance, congress, cisco, cucm, cve-2026-20230, klue, supply-chain, beyondtrust, miasma, turla, stockstay, ptc, windchill, cisa-kev, operation-endgame, linux, pedit-cow, gamaredon, ciso-daily-digest]
author: "Security Solutions Team"
featured: true
---

## Anthropic Takes Distillation Fight to Congress; Alibaba Shares Sink

Anthropic escalated its confrontation with Alibaba over AI model distillation, formally urging Congress to outlaw the practice of systematically extracting frontier model capabilities through API access. In a letter to U.S. Senators Elizabeth Warren and Tim Scott, Anthropic disclosed that Alibaba used **over 25,000 fraudulent accounts** to query Claude **28.8 million times** between April and June 2026 — a **44-day operation** to train its Qwen model on stolen outputs. The company described the campaign as the largest known AI distillation attack, coining the term **"AI Cannibalism"** to describe the practice of hollowing out competitor models.

The development marks a new phase in the U.S.-China AI rivalry. While yesterday focused on the initial accusation, today's developments center on **Anthropic's push for legislative action**, warning that existing export controls on model weights cannot prevent distillation via API access. Alibaba's stock fell on the news, and the episode is expected to accelerate regulatory debate in Washington.

**Separately**, Anthropic revealed that **Claude is gaining ground on ChatGPT among paid consumers**, with user survey data showing narrowing market share. However, both OpenAI and Anthropic face a new headwind: enterprise customers are cutting back on AI spending as costs spiral, shifting from "tokenmaxxing" toward efficiency — a dynamic that could reshape the competitive landscape.

🔗 **Reference:** Coverage from ([TechCrunch](https://techcrunch.com/2026/06/25/anthropics-claude-is-winning-over-paid-consumers-a-market-owned-by-chatgpt/), [TweakTown](https://www.tweaktown.com/news/108574/anthropic-alibaba-fake-accounts-claude-qwen/index.html), [CNBC](https://www.cnbc.com/2026/06/26/openai-anthropic-face-new-ai-reality-companies-shift-tokenmaxxing-efficiency.html))

### Why This Reshapes AI Governance

The Alibaba distillation attack exposes a critical gap in current AI regulation: export controls restrict model weight transfers but cannot prevent API-level extraction. Anthropic's call for Congressional action signals that **software supply chain security principles** may soon apply to AI models — treating model outputs as sensitive data flows requiring monitoring, rate limiting, and anomaly detection. CISO teams should prepare for new compliance requirements around AI API usage monitoring and third-party model access governance.

---

## Active Threats This Week

📌 **Cisco Unified CM SSRF Flaw Weaponized Under 24 Hours (CVE-2026-20230)**
Attackers began exploiting a critical **SSRF vulnerability** in Cisco Unified Communications Manager (Unified CM) within 24 hours of disclosure, according to Defused Cyber. CISA swiftly added the flaw to its Known Exploited Vulnerabilities (KEV) catalog. The vulnerability allows unauthenticated attackers to make internal network requests from the UC management plane, potentially pivoting to adjacent systems. Organizations running Unified CM or Unified CM SME should prioritize patching immediately.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/less-than-24-hours-attackers-weaponize-cisco-cucm-flaw) | [iThome: CISA adds to KEV](https://www.ithome.com.tw/news/176886) | [iThome: Attack activity](https://www.ithome.com.tw/news/176885)

📌 **Klue Supply Chain Attack Spreads — BeyondTrust, Pendo, 8×8, Gong Affected**
The Klue supply chain incident continues to widen. Security vendor **BeyondTrust** confirmed its Salesforce instance was compromised via the Klue integration. Other victims include **Pendo** (product experience platform) and **8×8** (cloud communications). **Gong**, the AI revenue intelligence platform, warned that customers using both Klue and Gong integrations may also be exposed. Attackers appear to be targeting **Salesforce API integrations** as an attack vector, making this a multi-vector supply chain event.
🔗 **Reference:** [iThome: BeyondTrust](https://www.ithome.com.tw/news/176878) | [iThome: Pendo & 8×8](https://www.ithome.com.tw/news/176896) | [iThome: Gong](https://www.ithome.com.tw/news/176898)

📌 **Miasma Worm Targets npm Packages and GitHub Actions**
The **Miasma** supply chain worm has expanded its reach, infecting npm packages and abusing **GitHub Actions** CI/CD pipelines for propagation. The self-replicating malware steals credentials from CI environment variables and uses them to push malicious commits to downstream repositories, continuing the infection chain. The attack underscores the need for hardened CI/CD pipelines with least-privilege token management.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/miasma-malware-targets-npm-packages-and.html)

📌 **Turla APT Deploys STOCKSTAY Backdoor in Ukraine Espionage Campaign**
Google's Threat Analysis Group (TAG) disclosed details of a new backdoor, **STOCKSTAY**, used by the Russian APT group **Turla** (aka Snake, Uroburos) against Ukrainian targets. The backdoor features modular architecture with file exfiltration and command execution capabilities, marking an upgrade in Turla's toolkit. The campaign uses spear-phishing with Ukraine-themed lures for initial access.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/google-details-turlas-new-stockstay.html)

📌 **PTC Windchill RCE Added to CISA KEV — Active Web Shell Attacks (CVE-2026-12569)**
CISA added a **remote code execution** vulnerability in PTC's Windchill and FlexPLM product lifecycle management software to its KEV catalog. PTC reported detecting attacks a week prior, with threat actors deploying **web shells** on compromised PLM servers. Organizations using PTC PLM solutions should prioritize patch deployment as exploitation activity escalates.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cisa-adds-exploited-ptc-windchill-rce.html) | [iThome](https://www.ithome.com.tw/news/176889)

📌 **Linux pedit COW Exploit Enables Root Access via Cached Binary Poisoning**
A new Linux privilege escalation exploit dubbed **pedit COW** (a variant of the classic Dirty COW technique) allows local attackers to **poison cached binaries** and gain root access. The technique exploits copy-on-write behavior in memory-mapped files, enabling modification of read-only executables. Organizations should monitor for indicators of local privilege escalation attempts, particularly on shared hosting and multi-tenant environments.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/new-linux-pedit-cow-exploit-enables.html)

📌 **Operation Endgame Dismantles Amadey, StealC, and SocGholish Malware Networks**
Europol's **Operation Endgame** scored another victory, taking down the criminal infrastructure behind **Amadey**, **StealC**, and **SocGholish** (aka FakeUpdates) malware loaders. Law enforcement seized servers and seized over **€41 million in cryptocurrency**. The operation involved coordinated raids across multiple countries with private-sector partners. SocGholish alone was responsible for delivering ransomware payloads to thousands of compromised WordPress sites.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176899) | [iThome Daily Report](https://www.ithome.com.tw/news/176902)

📌 **Microsoft Warns of Photo ZIP Phishing Campaign Targeting Hotels**
Microsoft disclosed a **Photo ZIP phishing campaign** targeting the hospitality industry, delivering a **Node.js-based backdoor** through password-protected ZIP archives disguised as photo files. The implant establishes C2 communication via WebSocket and can execute arbitrary commands, exfiltrate files, and move laterally within hotel reservation networks.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/microsoft-warns-of-photo-zip-phishing.html)

📌 **Gamaredon APT Upgrades Its Arsenal**
The Russian APT group **Gamaredon** (aka Shuckworm, Actinium) has upgraded its malware toolkit with new delivery mechanisms and improved operational security, requiring updated defense strategies. The group remains focused on Ukrainian targets but has broadened its credential theft and data exfiltration capabilities.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/threat-intelligence/russia-apt-gamaredon-arsenal-defense)

---

## How Can OPSWAT Help

The Miasma npm/GitHub Actions supply chain worm and the TanStack "Mini Shai-Hulud" attack both demonstrate how **file-borne threats propagate through CI/CD pipelines**. OPSWAT MetaDefender can inspect packages and artifacts at every stage of the software supply chain: multi-engine malware scanning for npm packages, CDR (Content Disarm and Reconstruction) for CI artifacts, and pre-commit file validation. For organizations affected by the Klue Salesforce API supply chain attack, MetaDefender's **data loss prevention and file upload scanning** can detect malicious payloads entering through API integrations.
