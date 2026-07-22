---
title: "CISO Daily Digest: AMD Invests $5B in Anthropic AI Infrastructure (20260722)"
description: "AMD commits up to $5B to Anthropic in 2GW AI infrastructure partnership; Claude Cowork now learns via screen recordings. Critical SharePoint RCE CVE-2026-50522 exploited after public PoC, Qilin ransomware abuses PAN-OS auth bypass, WordPress wp2shell added to CISA KEV with mass exploitation ongoing, Kratos phishing kit dismantled, trojanized Newtonsoft.Json fork, AWS Kiro config-rewrite flaw, Windmill CVE-2026-29059 under active attack."
pubDate: 2026-07-22
tags: [CISO, Daily Digest, Security, AMD, Anthropic, AI Infrastructure, SharePoint, RCE, Qilin, Ransomware, WordPress, wp2shell, CISA, KEV]
author: "Security Solutions Team"
featured: true
---

## AMD Invests $5B in Anthropic for 2GW AI Infrastructure

AMD has committed up to **$5 billion** to Anthropic in a strategic AI infrastructure partnership, targeting **2 gigawatts of AI compute capacity by 2027**. The deal marks one of the largest hardware-software AI alliances to date, positioning AMD's Instinct GPUs as the compute backbone for Anthropic's Claude and future Fable models. The investment comes amid a broader industry shift as AI labs race to secure chip supply and data center capacity.

The partnership also includes joint development on AI chip architectures, with AMD gaining deeper insight into Anthropic's model-training requirements for future silicon. The announcement follows yesterday's landmark court approval of Anthropic's **$1.5 billion copyright settlement** with authors over pirated books used to train Claude.

Separately, Anthropic launched **Claude Cowork's "Record a Skill"** feature, which lets users teach Claude new workflows by recording their screen and narrating via voice — the system converts the demonstration into a reusable automated skill. The Fed also raised alarms about Anthropic's Mythos AI model, warning banks of systemic AI risks but lacking the tooling to independently assess the model.

### Why This Reshapes AI Infrastructure Governance

The AMD-Anthropic deal signals that **AI chip supply chain diversification** is now a CISO-level concern. As training clusters scale to gigawatt levels, organizations must evaluate vendor lock-in, supply chain resilience, and the security implications of co-designed silicon. The concentration of AI compute in a handful of strategic partnerships creates new single-point-of-failure risks — both for availability and for the integrity of model training pipelines.

🔗 **Reference:** Coverage from ([Silicon Republic](https://www.siliconrepublic.com/business/anthropic-amd-chip-deal-2gw-ai-claude), [The Decoder - Claude Cowork](https://the-decoder.com/claude-cowork-learns-new-skills-through-screen-recordings-and-voice-over-explanations/))

---

## Active Threats This Week

📌 **Critical SharePoint RCE CVE-2026-50522 Under Active Exploitation**
A critical remote code execution vulnerability in Microsoft SharePoint is being actively exploited following the publication of a public proof-of-concept exploit. Attackers are using the flaw to **steal IIS machine keys**, enabling persistent access to compromised SharePoint servers. Organizations running SharePoint Server should treat this as an emergency-patch priority.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/critical-sharepoint-rce-cve-2026-50522.html)

📌 **WordPress wp2shell Added to CISA KEV — Mass Exploitation Ongoing**
CISA added two WordPress Core vulnerabilities (CVE-2026-60137, CVE-2026-63030), collectively dubbed **wp2shell**, to its Known Exploited Vulnerabilities catalog. The vulnerability chain allows unauthenticated attackers to achieve remote code execution via REST API batch request route-confusion and SQL injection. Wordfence describes it as "one of the most significant WordPress Core security events in recent years." Over **137 exploitation attempts** have been recorded from 46 unique IPs across 17 countries.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html)

📌 **Qilin Ransomware Exploits PAN-OS Authentication Bypass**
The Qilin ransomware group is leveraging an **authentication bypass vulnerability in Palo Alto Networks PAN-OS** as an initial access vector. The flaw allows attackers to bypass firewall authentication and move laterally within victim networks. Organizations using PAN-OS should verify they have applied the latest security patches.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/qilin-ransomware-attackers-exploit-pan.html)

📌 **Trojanized Newtonsoft.Json Fork Hides C2 in Game-Rigging Code**
A malicious fork of the popular **Newtonsoft.Json** NuGet package is masquerading as a legitimate library while hiding game-rigging code and command-and-control functionality. This supply-chain attack underscores the need for **dependency integrity verification** in .NET development pipelines.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/trojanized-newtonsoftjson-fork-hides.html)

📌 **Kratos Phishing Kit Dismantled — Targeted Microsoft 365 MFA Bypass**
Law enforcement dismantled the **Kratos phishing kit**, a sophisticated phishing-as-a-service platform designed to steal Microsoft 365 sessions and **bypass multi-factor authentication**. The kit used adversary-in-the-middle (AiTM) techniques to capture session cookies and authentication tokens in real time.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/police-dismantle-kratos-phishing-kit.html)

📌 **AWS Kiro Flaw Lets Poisoned Web Pages Rewrite Config and Run Code**
A vulnerability in **AWS Kiro**, an internal configuration service, allows a malicious web page to rewrite its configuration and execute arbitrary code without proper authorization. The flaw bypasses standard approval workflows and could enable supply-chain style attacks against AWS infrastructure.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/aws-kiro-flaw-let-poisoned-web-page.html)

📌 **Windmill CVE-2026-29059 Actively Exploited — Unauthenticated File Read**
A high-severity path traversal vulnerability (CVSS 7.5) in the open-source **Windmill** developer platform is under active exploitation. Attackers exploit the unauthenticated `/get_log_file` endpoint to read arbitrary server files, including environment variables that may expose **SUPERADMIN_SECRET** tokens. CISA also added four flaws to its KEV catalog, including the two WordPress wp2shell bugs.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/hackers-exploit-windmill-flaw-to-read.html)

📌 **Adobe Acrobat Extension HermeticReader (CVE-2026-48294) — WhatsApp Data Theft**
A universal XSS flaw in the **Adobe Acrobat Chrome extension** (314M+ users) allows malicious websites to silently exfiltrate **WhatsApp Web data** — chat lists, messages, and contact names — without malware installation or credential phishing. Requires only user interaction (visiting a crafted URL). Patched in extension version 26.5.2.2.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/adobe-acrobat-extension-flaw-let.html)

---

## How Can OPSWAT Help

The **trojanized Newtonsoft.Json** fork and **wp2shell file-upload vectors** are textbook use cases for MetaDefender's multi-scanning (40+ AV engines) and Content Disarm & Reconstruction (CDR) capabilities. OPSWAT's **MetaDefender Core** can inspect NuGet packages and WordPress uploads for hidden payloads, while **MetaAccess** provides zero-trust network access to mitigate AiTM phishing attacks like Kratos.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/07/trojanized-newtonsoftjson-fork-hides.html), [The Hacker News - Qilin](https://thehackernews.com/2026/07/qilin-ransomware-attackers-exploit-pan.html))
