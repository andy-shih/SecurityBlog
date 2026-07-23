---
title: "CISO Daily Digest: US Accuses China's Moonshot AI of Stealing Anthropic Fable (20260723)"
description: "Trump administration accuses Moonshot AI of distilling Anthropic Fable 5 into Kimi K3; AMD and Anthropic finalize $5B/2GW GPU partnership; Anthropic $1.5B copyright settlement approved; Claude Cowork VM escape vulnerability disclosed; Oracle patches 1,235 CVEs in July CPU; CISA adds SharePoint RCE CVE-2026-50522 to KEV; Check Point SmartConsole zero-day actively exploited; Mozilla Firefox 153 fixes 63 vulnerabilities; Chaos Ransomware uses msaRAT routing through Chrome; GitHub Actions runners weaponized against cPanel servers."
pubDate: 2026-07-23
tags: [CISO, Daily Digest, Security, Moonshot AI, Anthropic, Fable, US-China, AMD, AI Governance, IP Theft, Oracle, CVE, Patch Tuesday, Ransomware, Supply Chain]
author: "Security Solutions Team"
featured: true
---

## US Accuses China's Moonshot AI of Stealing Anthropic Fable Technology

The Trump administration on Wednesday formally accused China's Moonshot AI of unlawfully distilling Anthropic's frontier model **Fable 5** into its own **Kimi K3** model, marking a major escalation in US-China AI technology competition. White House science and technology adviser Michael Kratsios alleged that Moonshot engaged in large-scale "distillation" -- a process where one model is trained on another model's outputs -- without authorization, effectively reverse-engineering Anthropic's proprietary safety architecture.

The accusation comes as Anthropic's Fable 5 was already at the center of global export control discussions, having been designated a "frontier model" under the Biden-era AI executive order framework. Moonshot AI, one of China's most prominent AI startups backed by Alibaba, has denied the allegations, claiming its Kimi K3 was developed through independent research. The US has not yet announced formal penalties, but the allegation signals potential trade restrictions or sanctions targeting Moonshot's access to US semiconductor technology.

### Why This Reshapes AI Geopolitics

This is the first time the US has publicly accused a Chinese AI company of model distillation as an IP theft vector, setting a precedent that could reshape cross-border AI development. The dispute highlights a fundamental tension in the AI industry: frontier model weights are increasingly treated as critical national security assets, yet distillation is technically difficult to prove and even harder to police. For enterprises using AI agent toolchains -- including those that pull packages from open registries -- the incident reinforces the need for supply chain verification as AI models themselves become attack surfaces.

---

## Active Threats This Week

**Claude Cowork VM Escape Vulnerability** -- The Hacker News reported a critical vulnerability in Anthropic's **Claude Cowork** feature that could allow an AI agent to escape its virtual machine sandbox and access files on the host Mac system. The flaw, discovered by security researchers, exploits a misconfiguration in the agent's filesystem isolation layer. Anthropic has released a server-side fix but the incident raises questions about the security of AI agent architectures that require filesystem access.

**Oracle July 2026 Critical Patch Update -- 1,235 CVEs** -- Oracle released its July 2026 CPU, fixing a record-breaking **1,235 vulnerabilities** across its product portfolio, including multiple CVSS 10.0-rated flaws. Affected products include Oracle E-Business Suite, Oracle Database, Fusion Middleware, and MySQL.

**Check Point SmartConsole Zero-Day Actively Exploited** -- CISA and Check Point confirmed that a critical vulnerability in **Check Point SmartConsole** (CVE-2026-16367) is under active exploitation. The flaw allows unauthenticated remote code execution. US authorities urged all organizations using Check Point management interfaces to apply the July security update immediately.

**Mozilla Firefox 153 Patches 63 Vulnerabilities** -- Mozilla released Firefox 153, fixing **63 security vulnerabilities**, including multiple critical memory safety bugs with potential for remote code execution.

**Chaos Ransomware Uses msaRAT via Headless Chrome/Edge Routing** -- The **Chaos ransomware** group has adopted a novel technique using the **msaRAT** remote access trojan to route command-and-control traffic through headless Chrome and Edge browser instances, bypassing traditional network monitoring that blocks direct C2 IPs.

**GitHub Actions Runners Weaponized Against cPanel/WHM Servers** -- Attackers are compromising **GitHub Actions runners** and repurposing them to target cPanel and WHM hosting servers. The campaign uses stolen OAuth tokens to inject malicious workflow runs that deploy backdoors on shared hosting environments.

**Ubuntu snap-confine Flaw Gives Local Users Root Access** -- A vulnerability in Ubuntu's **snap-confine** component (CVE-2026-45659) allows local users with unprivileged snap access to escalate privileges to **root** on default desktop installations. Canonical has released a snapd update.

**DD-WRT Router Vulnerability Under Active Attack** -- CISA added a known **DD-WRT open-source router firmware vulnerability** (CVE-2021-27137) to its Known Exploited Vulnerabilities catalog following active exploitation reports, allowing unauthenticated attackers to execute arbitrary commands on affected routers.

**Ransomware Hits Japanese Frozen-Food Giant Nichirei** -- Japanese cold-chain logistics leader **Nichirei** confirmed a ransomware attack disrupting its frozen food distribution network. The **RansomHouse** group claimed responsibility. Full recovery is expected to take nearly two weeks.

**Swiss Stadler Rail Refuses to Pay Everest Ransomware** -- Swiss railway manufacturer **Stadler Rail** confirmed it was hit by the **Everest ransomware** group, stating it will not pay the ransom. The attack impacted internal systems but not train operations.

**Chick-fil-A Credential Stuffing Attack** -- US fast-food chain **Chick-fil-A** disclosed a credential stuffing attack affecting multiple states, exposing customer account data via reused passwords from third-party breaches.

**ClickFix Attack Campaign Targets Ukraine** -- The Russian-aligned threat group **UAC-0145** launched a **ClickFix** attack campaign against Ukrainian targets, tricking victims into executing malicious PowerShell commands via fake error messages on compromised websites.

**Brazilian Banking Trojan Spreading in Portugal** -- A **Brazilian banking trojan** is actively spreading in Portugal, targeting financial institutions and stealing credentials through WebView overlay attacks and SMS interception.

**Adobe Acrobat Browser Extension Vulnerability** -- Security researchers disclosed a vulnerability in the **Adobe Acrobat browser extension** that could expose WhatsApp Web data from approximately **300 million users**, allowing websites to access extension-stored session data.

**OpenAI Models Autonomously Hack Hugging Face** -- In a demonstration underscoring AI agent risks, OpenAI's models autonomously identified and exploited vulnerabilities on Hugging Face, executing a full attack chain without human intervention.

**CISA Adds Microsoft SharePoint RCE (CVE-2026-50522) to KEV** -- CISA added a critical **Microsoft SharePoint Remote Code Execution** vulnerability to its Known Exploited Vulnerabilities catalog following reports of active exploitation after proof-of-concept code was publicly released. CVE-2026-50522 allows unauthenticated attackers to execute arbitrary code on vulnerable SharePoint servers.

**Google Launches Gemini 3.5 Flash Cyber for Vulnerability Discovery** -- Google released **Gemini 3.5 Flash Cyber**, a specialized AI model trained for vulnerability discovery and patch verification, bringing AI-assisted security analysis into developer workflows.

**Reference:** Coverage from ([SCMP](https://www.scmp.com/news/us/diplomacy/article/3361510/trump-tech-official-accuses-chinas-moonshot-ai-stealing-anthropic), [iThome](https://www.ithome.com.tw/news/177545), [Tom's Hardware](https://www.tomshardware.com/tech-industry/amd-to-supply-anthropic-with-2-gigawatts-of-instinct-mi450-gpus), [The Decoder](https://the-decoder.com/anthropic-will-deploy-2-gigawatts-of-amd-gpus-for-claude-in-a-deal-worth-up-to-5-billion/), [The Hacker News](https://thehackernews.com/2026/07/claude-cowork-flaw-could-let-ai-agent.html), [DarkReading](https://www.darkreading.com/cyber-risk/openai-models-autonomously-hack-hugging-face))

---

## How Can OPSWAT Help

The growing use of AI agents in enterprise workflows -- from Anthropic's Claude Cowork to OpenAI's autonomous agents -- introduces new attack surfaces for supply chain compromise. AI agents pull dependencies, install packages, and interact with cloud APIs, creating multiple vectors for malicious artifacts to enter trusted environments. OPSWAT MetaDefender's multi-scanning and CDR technologies can validate every file, package, and script that AI agent toolchains ingest, preventing supply chain attacks before they reach production systems. Additionally, as threat actors weaponize CI/CD pipelines (as seen with GitHub Actions runners targeting cPanel servers), OPSWAT's file security platform provides a critical defense layer for build artifacts and deployment packages.
