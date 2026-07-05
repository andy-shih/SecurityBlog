---
title: "CISO Daily Digest: Alibaba Bans Claude Code as China Backdoor Allegations Deepen (20260705)"
description: "Alibaba bans Claude Code across all subsidiaries citing hidden China-detection backdoor, classifies tool as high-risk spyware; Linux Bad Epoll LPE (CVE-2026-46242) affects Android; Zero Day Clock shows time-to-exploit shrinking below 1 day; SimpleHelp CVE-2026-48558 leaves 400+ servers exposed; Claude Science workbench launches for drug discovery and genomics; Anthropic faces $75M copyright lawsuit."
pubDate: 2026-07-05
tags: [CISO, daily-digest, cybersecurity, threat-intel, Alibaba, Claude-Code, supply-chain, vulnerability, zero-day, Linux, Android]
author: "Security Solutions Team"
featured: true
---

## Alibaba Bans Claude Code Over Hidden Backdoor Allegations

Alibaba Group has issued an internal ban on the use of Anthropic's Claude Code across all subsidiaries, effective July 10, 2026, after an alleged hidden backdoor was discovered in the tool that detects when it is being used from within China. The company classified Claude Code as "high-risk spyware" and instructed its ~200,000 employees to migrate to the in-house Qoder AI coding assistant. The decision follows an internal security audit that allegedly uncovered code paths that phone home to Anthropic's servers with China-origin markers — a claim Anthropic has neither confirmed nor denied ([TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-bans-anthropics-claude-code-after-an-alleged-hidden-china-detection-backdoor-is-uncovered-employees-told-to-switch-to-qoder-as-the-rift-between-the-firms-widens)).

The ban extends to all Alibaba-affiliated entities and has been publicly attributed to national security concerns, escalating the ongoing US-China AI rivalry. Anthropic reportedly took a muted stance, with sources suggesting the company was aware of Alibaba's discontent and had been expecting the ban. The controversy comes alongside Alibaba's separate announcement blocking DeepSeek from accessing Qwen models, further entrenching the divide between the US-aligned and China-aligned AI ecosystems ([France 24](https://www.france24.com/en/live-news/20260704-alibaba-bans-claude-for-staff-anthropic-didnt-want-them-using-it-anyway), [MLQ.ai](https://mlq.ai/alibaba-bans-claude-code-classifies-anthropic-tool-as-high-risk-spyware/)).

### Why This Reshapes AI Tool Supply Chain Risk

The Claude Code ban marks the first time a major corporation has classified a third-party AI coding tool as espionage-grade software. For CISO organizations, this sets a precedent for vendor risk assessment of AI-assisted development tools. The alleged data exfiltration paths — code sent to external servers with geolocation markers — highlight the need for code-flow inspection, AI tool access controls, and data residency verification in AI-powered development pipelines. Organizations using AI coding assistants should audit data-sharing configurations and consider sandboxed AI tool deployments.

---

## Active Threats This Week

📌 **Linux Bad Epoll LPE (CVE-2026-46242, CVSS 7.8)** — A use-after-free race condition in the Linux kernel's epoll subsystem allows unprivileged attackers to gain root privileges. Discovered by researchers at Seoul National University, the vulnerability affects Linux kernel 6.4 and newer, including Android devices running kernel 6.6+ (Pixel 10 and later). The flaw was introduced in April 2023 and was initially discovered by Anthropic's Mythos AI model in one of the two epoll race conditions. No mitigations exist beyond kernel patching, as epoll cannot be disabled ([iThome](https://www.ithome.com.tw/news/177088)).

📌 **Zero Day Clock: Time-to-Exploit Falls Below 1 Day** — The Zero Day Clock project, a real-time tracking dashboard for vulnerability exploitation timelines, reports that the average time from public disclosure to active exploitation has collapsed to under 24 hours. The data shows that the window for defenders to patch before weaponized exploits appear has shrunk from months in 2024 to hours in 2026, driven by AI-assisted exploit generation and automated attack tooling ([iThome](https://www.ithome.com.tw/news/177079)).

📌 **SimpleHelp CVE-2026-48558 (CVSS 10.0)** — Over 400 SimpleHelp remote access servers remain unpatched against a critical vulnerability that scores a perfect 10.0 on the CVSS scale. The flaw allows unauthenticated remote code execution. Shadowserver Foundation warns that exposure is global, with remediation urgency at maximum levels ([iThome](https://www.ithome.com.tw/news/177066)).

📌 **Amadey Malware Ecosystem Surpasses 11,000 Payloads** — Japanese security firm MBSD has documented that the Amadey malware loader has been used to distribute over 11,635 distinct malware payloads, reaching its peak in 2025. The loader is rented out on cybercrime forums as a service, enabling low-sophistication attackers to deploy ransomware, infostealers, and trojans at scale ([iThome](https://www.ithome.com.tw/news/177087)).

📌 **SocGholish Compromised 1.44M WordPress Sites Over 3 Years** — Shadowserver Foundation reports that the SocGholish (FakeUpdates) malware campaign has infected over 1.44 million WordPress sites since 2023, weaponizing compromised websites as distribution infrastructure for follow-on payloads, including ransomware and information stealers ([iThome](https://www.ithome.com.tw/news/177078)).

📌 **Anubis Ransomware Exploits CitrixBleed 2 (CVE-2026-8451)** — The Anubis ransomware group is actively exploiting a new Citrix NetScaler vulnerability (CVE-2026-8451, dubbed CitrixBleed 2), with active exploitation detected within 24 hours of public disclosure. The flaw allows unauthenticated access to internal network resources ([iThome](https://www.ithome.com.tw/news/177060), [iThome](https://www.ithome.com.tw/news/177067)).

📌 **Polymarket Supply Chain Attack — $3M Stolen** — The cryptocurrency prediction market platform Polymarket suffered a third-party supply chain compromise affecting ~15 accounts, with estimated losses of $3 million. The attack vector involved a compromised dependency in the platform's trading infrastructure ([iThome](https://www.ithome.com.tw/news/177064)).

📌 **Anthropic Launches Claude Science AI Workbench** — Anthropic released Claude Science Beta, a multi-agent AI workbench designed for reproducible genomics, proteomics, and cheminformatics pipelines. The platform also targets drug discovery for neglected diseases. Claude Enterprise Spend Controls were introduced simultaneously to manage agentic AI costs after reports of budgets blowing past projections ([TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/), [MLQ.ai](https://mlq.ai/alibaba-bans-claude-code-classifies-anthropic-tool-as-high-risk-spyware/)).

---

## How Can OPSWAT Help

The Zero Day Clock's sub-24-hour exploitation window and the prevalence of supply chain attacks (Claude Code backdoor allegations, Polymarket dependency compromise, SocGholish WordPress infections) underscore the need for proactive, file-level defense at every entry point. OPSWAT MetaDefender's multi-scanning (30+ anti-malware engines) and Deep Content Disarm and Reconstruction (CDR) technology can inspect and sanitize software packages, AI tool artifacts, and third-party dependencies before they reach internal systems. MetaDefender Cloud integrates into CI/CD pipelines to scan third-party packages and AI toolchain components for hidden payloads and supply chain risks — critical when AI coding assistants themselves become vectors for data exfiltration and backdoor insertion.

🔗 **Reference:** Coverage from ([TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-bans-anthropics-claude-code-after-an-alleged-hidden-china-detection-backdoor-is-uncovered-employees-told-to-switch-to-qoder-as-the-rift-between-the-firms-widens), [iThome](https://www.ithome.com.tw/news/177088), [iThome](https://www.ithome.com.tw/news/177079), [iThome](https://www.ithome.com.tw/news/177066), [iThome](https://www.ithome.com.tw/news/177087))
