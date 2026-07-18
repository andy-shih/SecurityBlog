---
title: "CISO Daily Digest: Anthropic Fable 5 Compute Crisis — Limits Slashed, Meta $10B Deal in Talks (20260718)"
description: "Anthropic slashes Claude Fable 5 access limits across Max and Team Premium; negotiates $10B+ compute deal with Meta as Musk open-sources Grok Build. Plus: NPM supply chain attacks on Jscrambler, Inc Ransomware exploits SonicWall zero-days, NadMesh botnet hunts exposed AI services, GoldenEyeDog linked to DigiCert breach, OpenSSL HollowByte flaw, and WordPress wp2shell RCE."
pubDate: 2026-07-18
tags: [Anthropic, Fable 5, Claude, supply chain, Jscrambler, ransomware, SonicWall, botnet, OpenSSL, WordPress, cybersecurity, CISO digest]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 Compute Crisis

Anthropic significantly curtailed access to its Claude Fable 5 model across Max and Team Premium subscription tiers, reducing usage limits to approximately **50% of prior levels** and pushing heavy users toward API pricing. The move comes as **Fable 5's computing demands outstrip available capacity**, with internal infrastructure strained by the model's complexity and user adoption.

According to **Startup Fortune**, Anthropic has begun showing usage-credit exhaustion errors to some users — including messages that triggered confusion about whether Fable 5 was "down." The company acknowledged the situation on social media, framing it as a capacity management issue during a period of unprecedented demand.

Simultaneously, **Crypto Briefing** and other outlets reported that Anthropic is in early-stage talks to lease computing power from **Meta** in a deal that could exceed **$10 billion**. Meta's excess AI compute — originally provisioned for its own Llama model training — would give Anthropic the GPU capacity it needs to keep Fable 5 running at scale. The arrangement would be financially significant for both sides: Anthropic currently pays **xAI approximately $1.25 billion per month** for compute under an existing contract, according to **The New Stack**.

In a related competitive move, Elon Musk **open-sourced Grok Build**, a training and deployment framework, positioning it as a direct alternative to Anthropic's proprietary stack. The timing underscores the intensifying **AI compute arms race**, where access to GPUs is becoming as strategic as model quality.

On the enterprise tooling front, **1Password launched a controlled login feature for Claude AI agents** (covered by **iThome**), allowing agents to log into websites on behalf of users without exposing credentials — a significant advancement for AI-driven workflow automation in enterprise security contexts.

### Why This Reshapes AI Governance

Fable 5's compute constraints expose a fundamental tension in frontier AI deployment: **even the most capable models are only as reliable as the infrastructure behind them**. For CISOs evaluating AI vendor risk, the incident highlights several critical considerations:

- **Capacity transparency:** Anthropic's opaque allocation model means enterprise customers cannot predict or guarantee Fable 5 availability, creating operational risk for workflows that depend on it.
- **Infrastructure dependency:** The $10B Meta deal and $1.25B/month xAI payments reveal how deeply Anthropic's service continuity depends on competitors' goodwill — a concentration risk for downstream users.
- **Open-weight alternatives:** Musk's open-sourcing of Grok Build and the emergence of open-weight models approaching frontier capability (per the UK AI Security Institute) give enterprises bargaining power and fallback options against proprietary API dependency.

---

## Active Threats This Week

📌 **NPM Supply Chain Attack: Jscrambler Compromised**
Hackers infiltrated the **Jscrambler** NPM package, using it to distribute **Rust-based infostealer malware** to downstream users. iThome reported that Jscrambler's development team published their investigation findings, confirming the supply chain compromise. Separately, **seven malicious Vite NPM packages** were discovered using **blockchain-based command-and-control (C2)** infrastructure to deliver a remote access trojan (RAT), as detailed by The Hacker News. These twin incidents underscore the ongoing vulnerability of the JavaScript package ecosystem.
🔗 **Reference:** [iThome — Jscrambler Attack](https://www.ithome.com.tw/news/177419) | [iThome — Investigation](https://www.ithome.com.tw/news/177420) | [The Hacker News — Vite Packages](https://thehackernews.com/2026/07/seven-malicious-vite-npm-packages-use.html)

📌 **Inc Ransomware Exploits SonicWall SMA Zero-Days**
The Inc ransomware group is actively exploiting **previously undisclosed zero-day vulnerabilities** in **SonicWall SMA (Secure Mobile Access)** appliances to gain initial access to corporate networks. DarkReading reports that the exploit chain bypasses authentication and allows remote code execution on unpatched appliances. Organizations running SonicWall SMA should prioritize isolation and vendor advisory review.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/inc-ransomware-exploits-sonicwall-sma-zero-days)

📌 **NadMesh Botnet Hunts Exposed AI Services**
A new botnet tracked as **NadMesh** is scanning the internet for exposed AI/ML infrastructure — including **cloud API keys, Kubernetes tokens, and unsecured Jupyter notebooks** — to hijack GPU compute for cryptomining and credential harvesting. The Hacker News reports it targets services running on popular cloud platforms and AI inference endpoints.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-nadmesh-botnet-hunts-exposed-ai.html)

📌 **GoldenEyeDog Subgroup Linked to DigiCert Breach**
A threat actor subgroup tracked as **GoldenEyeDog** has been linked to the **DigiCert breach**, involving theft of **code-signing certificates**. The stolen certificates could be used to sign malware and evade endpoint detection. The Hacker News reports connections to prior supply chain incidents.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/goldeneyedog-subgroup-linked-to.html)

📌 **OpenSSL HollowByte Flaw — Memory Freeze via 11-Byte TLS Requests**
A newly disclosed vulnerability in **OpenSSL**, dubbed **HollowByte** (CVE assigned), allows attackers to freeze server memory by sending **11-byte TLS handshake requests**, potentially leading to denial-of-service conditions on affected servers. The flaw affects a wide range of OpenSSL deployments.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/openssl-hollowbyte-flaw-could-freeze.html)

📌 **WordPress wp2shell Core Flaw — Unauthenticated RCE**
A critical vulnerability in WordPress core, tracked as **wp2shell**, lets **unauthenticated attackers execute arbitrary code** on vulnerable installations. The Hacker News warns that the flaw is being actively discussed in exploit development communities, increasing the likelihood of in-the-wild exploitation.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html)

📌 **Google Gemini — Locked-Screen Message Exploit**
A security issue in **Google's Gemini** assistant integration allows messages from strangers to appear on locked Android phones, bypassing the lock-screen notification barrier. Bitdefender's Hot for Security blog covers the implications for mobile device security policies.
🔗 **Reference:** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/googles-gemini-strangers-messages-locked-android-phone)

---

## How Can OPSWAT Help

The **Jscrambler NPM supply chain attack** and the **malicious Vite NPM packages** both involve file-based malware distribution through trusted software update channels. **OPSWAT MetaDefender** provides multi-scanning with **30+ anti-malware engines** and **Content Disarm and Reconstruction (CDR)** for JavaScript packages and NPM artifacts, detecting known and unknown threats before they reach the build pipeline. MetaDefender's **Deep CDR** can strip potentially malicious macros and scripts from package files while preserving functionality, reducing supply chain risk for CI/CD environments.

