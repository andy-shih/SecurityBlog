---
title: "CISO Daily Digest: Fable 5 Returns with Usage Limits After US Lifts Export Controls (20260704)"
description: "Anthropic brings back Claude Fable 5 with temporary usage limits after US lifts export controls; Alibaba bans Claude Code over data security concerns; Microsoft Exchange Online critical vulnerability disclosed; Bad Epoll Linux kernel root flaw hits Android; SocGholish infects 1.44M WordPress sites; North Korean PolinRider campaign publishes 108 malicious packages."
pubDate: 2026-07-04
tags: [Anthropic, Fable 5, AI Governance, Export Control, Microsoft Exchange, Linux Vulnerability, Supply Chain, Malware, Threat Intelligence, CISO]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 Returns — US Lifts Export Controls, but Restrictions Remain

The Trump administration formally lifted export controls on Anthropic's most advanced AI models — Claude Fable 5 and Mythos 5 — clearing the way for global availability after months of restriction. Anthropic restored access to Claude Fable 5 on July 1, but with a **temporary usage limit** in place, suggesting capacity or safety-mitigation concerns remain despite the regulatory green light.

The export-control reversal is accompanied by a significant governance development: Anthropic has indicated a willingness to grant the **US government an equity stake or board-level access**, breaking with OpenAI's non-profit governance structure and signaling a new model of public-private AI oversight. The White House described the arrangement as a collaborative framework to ensure "responsible deployment of frontier AI."

Meanwhile, three related developments reshaped the AI-security landscape:

**Alibaba bans Claude Code enterprise-wide.** The Chinese e-commerce giant barred all staff from using Anthropic's developer tools over alleged data security risks, citing concerns that AI coding assistants could expose proprietary intellectual property. The move highlights growing friction between multinational enterprises and cross-border AI tool adoption.

**Anthropic closes Chinese loopholes.** The company tightened access controls after reports that Chinese firms were bypassing regional restrictions on Claude usage, implementing stricter IP-based geo-blocking and account verification for enterprise customers.

**Anthropic expands into drug discovery.** The company launched **Claude Science for Mac**, an agentic AI platform designed to accelerate laboratory research, and separately announced preliminary talks with Samsung to manufacture custom AI inference chips.

**Why This Reshapes AI Governance**

The simultaneous lifting of export controls and granting of government oversight creates a novel regulatory precedent. Unlike OpenAI's non-profit structure or Google DeepMind's embedded model, Anthropic's approach grants the US government direct stake-holder access — a model that could become the template for how frontier AI companies negotiate national-security requirements with export-controlled technology.

### Active Threats This Week

📌 **Microsoft Exchange Online Critical Vulnerability**
Microsoft disclosed a privilege escalation and unauthorized data access vulnerability in Exchange Online. The flaw allows authenticated attackers to escalate privileges and access mailboxes outside their authorized scope. No patch timeline has been announced for the cloud-native service.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177077)

📌 **"Bad Epoll" Linux Kernel Flaw — Root on Linux and Android**
A newly disclosed Linux kernel vulnerability in the epoll subsystem allows unprivileged users to gain root access. Dubbed "Bad Epoll," the flaw affects both standard Linux distributions and the Android ecosystem. No public exploit code has been released, but active weaponization is considered likely given the attack surface.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-bad-epoll-linux-kernel-flaw-lets.html)

📌 **Unpatched Flaws in Filesystem Library — Millions of Embedded Devices at Risk**
Multiple unpatched vulnerabilities were disclosed in a widely-used filesystem library bundled into millions of IoT and embedded devices. The flaws could allow remote code execution or denial of service. Many affected devices may never receive patches due to vendor abandonment.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/unpatched-flaws-disclosed-in-filesystem.html)

📌 **SocGholish Malware — 1.44 Million WordPress Sites Compromised Over 3 Years**
The SocGholish malware campaign (aka FakeUpdates) has infected over **1.44 million WordPress websites** in the past three years. The malware uses fake browser update prompts to deliver remote access trojans (RATs) and information stealers. The campaign remains active and continues to evolve its social engineering tactics.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177078) | [The Hacker News](https://thehackernews.com/2026/07/new-avalon-malware-framework-packs.html)

📌 **North Korean PolinRider Campaign — 108 Malicious Packages Published**
North Korean threat actors associated with the "Contagious Interview" campaign published **108 malicious packages and extensions** spanning npm, Packagist, Go modules, and Chrome extensions. The campaign targets software developers through fake job recruitment, delivering backdoors and credential stealers. The campaign remains active with new packages appearing regularly.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/north-korean-hackers-publish-108.html) | [The Hacker News](https://thehackernews.com/2026/07/north-korea-linked-npm-packages-mimic.html)

📌 **Amadey Malware — Used to Distribute Over 10,000 Malicious Programs**
The Amadey botnet malware has been used to distribute more than **10,000 unique malicious programs**, making it one of the most prolific malware distribution platforms currently active. It serves as a loader for ransomware, infostealers, and cryptominers.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177087)

📌 **Azure CLI Password Spray — 81 Million Login Attempts on Microsoft 365**
Threat actors launched a massive password-spraying campaign targeting Microsoft 365 accounts, using **Azure CLI as the authentication vector** to evade traditional detection. Over **81 million login attempts** were recorded. The attack exploited the lack of MFA enforcement on legacy authentication protocols.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177072)

📌 **Oracle PeopleSoft Vulnerability — Nissan Data Breach**
Attackers exploited a vulnerability in Oracle PeopleSoft to steal data from Nissan, marking the latest in a series of ERP-related breaches. The incident highlights the persistent risk of unpatched enterprise application vulnerabilities.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/07/03/nissan-leak-3/)

📌 **Kairos Data-Theft Extortion — US Government Entity Pays $1 Million**
A US government entity paid approximately **$1 million** to the threat group Kairos to prevent the publication of stolen files. Unlike traditional ransomware, Kairos did not deploy an encryptor — the threat was purely data-theft-based. The victim is believed to be Union County, Ohio.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/us-government-entity-paid-kairos-group.html)

---

## How Can OPSWAT Help

The North Korean supply-chain attacks (PolinRider, Contagious Interview) and the Amadey malware distribution campaign demonstrate the critical need for multi-layered file-level defenses. OPSWAT MetaDefender's multi-scanning and CDR (Content Disarm and Reconstruction) capabilities can detect and neutralize malicious packages, scripts, and payloads before they reach developer endpoints or CI/CD pipelines. For organizations using AI coding assistants like Claude Code, MetaDefender Cloud provides real-time file inspection to prevent data exfiltration through AI toolchains.
