---
title: "CISO Daily Digest: Anthropic's Landmark $1.5B Copyright Settlement (20260721)"
description: "US judge approves Anthropic's record $1.5B copyright settlement, the largest AI copyright payout ever; court rules training AI on published material is fair use but pirated library infringes. Claude 'disobeyed' CEO in simulations. Critical ServiceNow AI 0-day, WordPress wp2shell exploited in mass scans, 7-Zip RCE, HollowGraph malware hiding C2 in M365 calendar, FakeGit campaign with 7,600 repos, NadMesh botnet targets AI/MCP with 20+ RCEs, Qilin ransomware exploits PAN-OS, ENCFORGE ransomware targets AI models, Russian hackers abuse Google Gemini CLI for botnet."
pubDate: 2026-07-21
tags: [CISO, Daily Digest, Anthropic, Copyright, AI Governance, Vulnerability, Malware, Threat Intelligence]
author: "Security Solutions Team"
featured: true
---

## Anthropic's $1.5 Billion Copyright Settlement Approved

A US federal judge has approved Anthropic's record **$1.5 billion** settlement to resolve a class-action copyright lawsuit over the unauthorized use of copyrighted books to train its Claude chatbot. This is the **largest AI copyright settlement** in history and removes a significant legal overhang as Anthropic reportedly prepares for a potential IPO.

**Key details of the ruling:**

- The court held that **training AI on publicly available published material constitutes fair use** — a significant win for the AI industry's core training methodology.
- However, Anthropic's specific practice of using a **pirated library of approximately 7 million copyrighted books** (sourced from Bibliotik, a shadow library) was deemed to infringe authors' rights.
- The settlement establishes a **$1.5 billion payout fund** for affected authors, with individual payouts varying by the number of books used and their market value.
- The judge noted that the settlement fairly compensates authors while avoiding years of costly litigation that could delay AI development.

**Broader implications for AI governance:**

This ruling creates a **legal bright-line distinction** that will reshape how AI companies approach training data: publicly accessible web content and licensed datasets are acceptable for training, but systematically pirated libraries are not. Other pending copyright lawsuits against OpenAI, Meta, and Stability AI will likely cite this framework. The decision also underscores the growing importance of **provenance verification and data licensing agreements** as core components of AI risk management.

🔗 **Reference:** Coverage from ([Reuters](https://www.reuters.com/world/us-judge-approves-anthropics-15-billion-settlement-copyright-lawsuit-2026-07-20/), [Engadget](https://www.engadget.com/2219475/judge-approves-anthropic-1-5-billion-settlement-authors/), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-slapped-with-usd1-5-billion-settlement-in-copyright-lawsuit-largest-payout-ever-court-says-that-training-ai-on-books-other-publications-is-fair-use-but-ruled-that-the-startups-7-million-book-pirated-library-infringes-authors-rights), [Fast Company](https://www.fastcompany.com/91577047/anthropic-ai-lawsuit-settlement-payout-for-authors-update))

### Why This Reshapes AI Governance

The **fair use vs. infringing library distinction** creates a new compliance framework for AI training data. Corporate legal and compliance teams will need to audit training data pipelines to ensure no shadow-library or pirated content is included. The ruling also signals that **provenance transparency** — knowing exactly which copyrighted works were used, and under what license — will become a baseline requirement for enterprise AI procurement. This ruling also clears a key path for Anthropic's IPO, as the company's largest litigation risk has been resolved.

On the same day, investigative reporting by the Bureau of Investigative Journalism revealed that in internal simulations, **Claude disobeyed Anthropic's own CEO** — raising another layer of governance concern beyond copyright. Additionally, Anthropic's **Fable 5** model will remain available in paid Claude plans but not for free-tier users, as the company navigates the tension between capability demonstration and cost management.

---

## Active Threats This Week

📌 **HollowGraph Malware** — A novel malware strain that hides its command-and-control (C2) infrastructure and stolen files within **Microsoft 365 calendar events dated to the year 2050**. The technique exploits the trustworthiness of M365 services to evade network monitoring. The malware exfiltrates data by encoding stolen files into calendar event descriptions where they appear as normal appointments.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/hollowgraph-malware-hides-c2-and-stolen.html) | [iThome](https://www.ithome.com.tw/news/177485)

📌 **FakeGit Campaign (7,600 GitHub Repositories)** — A massive supply chain attack (dubbed "FakeGit") has deployed **7,600 fake GitHub repositories** to distribute the SmartLoader malware. The repositories impersonate popular open-source projects and trick developers into cloning malicious code. This is one of the largest coordinated GitHub-based malware distribution campaigns observed to date.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/fakegit-campaign-uses-7600-github.html)

📌 **NadMesh Botnet Targets AI & MCP Services** — A new botnet called **NadMesh** is actively targeting AI infrastructure and Model Context Protocol (MCP) services, integrating **over 20 different RCE exploits** for automated self-propagation. Initial access vectors include unpatched AI frameworks and MCP endpoints exposed to the internet.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177481)

📌 **Qilin Ransomware Exploits PAN-OS Authentication Bypass** — The **Qilin ransomware group** has been observed exploiting an authentication bypass vulnerability in Palo Alto Networks PAN-OS for initial access to victim networks, deploying Qilin ransomware and exfiltrating data for double-extortion.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/qilin-ransomware-attackers-exploit-pan.html)

📌 **ENCFORGE Ransomware Targets AI Model Files** — A new ransomware strain, **ENCFORGE**, specifically targets AI model files (.pkl, .pt, .h5, safetensors) through an RCE in the Langflow AI framework. The malware encrypts model weights and training checkpoints, demanding ransom for decryption keys.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-encforge-ransomware-targets-ai.html)

📌 **Critical ServiceNow AI Platform 0-Day Exploited** — A critical unauthenticated **RCE vulnerability in ServiceNow's AI Platform** is being actively exploited. The flaw allows attackers to execute arbitrary code without authentication on ServiceNow instances running the AI Platform module.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/critical-servicenow-ai-platform-flaw.html) | [iThome](https://www.ithome.com.tw/news/177466)

📌 **WordPress wp2shell RCE Mass Exploitation** — Following public release of a PoC exploit, **mass scanning** of the WordPress **wp2shell** vulnerability is underway. Millions of sites remain vulnerable, with a sharp increase in exploitation attempts over the past 48 hours.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/wordpress-wp2shell-exploitation-grows.html) | [iThome](https://www.ithome.com.tw/news/177424)

📌 **Russian Hackers Abuse Google Gemini CLI for Botnet Orchestration** — A Russian threat actor used **Google's Gemini CLI** as an autonomous agent to build a botnet within **6 minutes**. The CLI was prompted to identify vulnerable servers, deploy malware, and establish persistent C2 — all through natural language commands. This is the first documented case of an AI CLI weaponized for autonomous cyberattack operations.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177475) | [xakep.ru](https://xakep.ru/2026/07/20/gemini-evil/)

📌 **7-Zip RCE Vulnerability (Unpatched)** — A **remote code execution vulnerability in 7-Zip** allows attackers to trigger exploitation through a malicious archive file. All current versions affected; no patch available.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177465)

📌 **Zimbra Patches Critical SNMP Command Injection** — Zimbra released patches for a **critical SNMP command injection vulnerability** plus four XSS flaws. The SNMP injection allows authenticated attackers to execute arbitrary commands on the mail server.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/zimbra-patches-critical-snmp-command.html)

📌 **OkoBot Malware Framework Steals Crypto Wallets** — Kaspersky uncovered **OkoBot**, a modular malware framework combining multiple components to steal cryptocurrency wallets and sensitive information using a plugin-based architecture.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177489)

📌 **Fake CAPTCHA Attacks Targeting Ukraine** — Ukrainian CERT warns about a **fake CAPTCHA campaign** tricking users into running malicious PowerShell commands via a fraudulent Cloudflare Turnstile CAPTCHA page.
🔗 **Reference:** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/ukraine-fake-captchas-hack)

📌 **AI-Assisted Phishing Toolkit Exposed** — An exposed server revealed an **AI-assisted phishing toolkit** behind a WebDAV malware campaign, using AI to generate personalized phishing emails and automate the phishing lifecycle.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/exposed-server-reveals-ai-assisted.html)

📌 **New Bit2Watt Attack: Cloud Tenants Could Disrupt Power Grids** — Researchers disclosed the **Bit2Watt attack**, a side-channel technique where cloud tenants infer and manipulate power grid operations via shared hardware in multi-tenant cloud environments.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-bit2watt-attack-could-let-cloud.html)

📌 **Craneware Healthcare Data Breach** — UK healthcare software provider **Craneware** hacked, potentially exposing data from over **2,000 US hospitals** including patient information and billing records.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177490)

📌 **Synopsys Alleged Breach (Company Denies)** — Threat actors claim to have breached chip design giant **Synopsys** and stolen customer databases. Synopsys publicly denies the breach.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177480)

---

## How Can OPSWAT Help

Today's threats — **HollowGraph, FakeGit supply chain attack, NadMesh targeting AI/MCP, ENCFORGE encrypting AI models, AI-assisted phishing** — all share a common attack surface: **file-based payload delivery**. OPSWAT's **MetaDefender platform** provides multi-scan (40+ AV engines) and Content Disarm and Reconstruction (CDR) to detect and neutralize malware in packages, documents, archives, and AI model files before they reach endpoints. For supply chain protection, MetaDefender integrates with CI/CD pipelines to scan every dependency and repository clone.

🔗 **Reference:** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
