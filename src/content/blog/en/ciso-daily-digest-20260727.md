---
title: "CISO Daily Digest: Claude Chats Leaked in Google Search — AI Privacy Crisis (20260727)"
description: "Google indexes thousands of Anthropic Claude shared chat URLs, exposing legal notes, source code, medical discussions, and crypto seed phrases. Also: Chinese hackers deploy AI agent Hermes against Thailand Finance Ministry, Siemens Opcenter X CVSS 10 auth bypass, AD CS Certighost domain controller impersonation, Chaos ransomware msaRAT, and Clop exploits Windchill/FlexPLM zero-day."
pubDate: 2026-07-27
tags: [Anthropic, Claude, AI Privacy, Data Leak, Google Search, AI Security, CISO, Threat Intelligence, Vulnerability, Ransomware, Supply Chain]
author: "Security Solutions Team"
featured: true
---

## Claude Shared Chats Indexed by Google — AI Privacy Wake-Up Call

Thousands of **Anthropic Claude** shared conversation URLs were indexed by **Google Search**, exposing sensitive user data including legal strategies, engineering troubleshooting, proprietary source code, medical discussions, crypto seed phrases, and corporate documents. The incident came to light via Reddit and was rapidly covered by multiple outlets, confirming that Claude's share feature generated publicly accessible URLs that lacked effective **noindex** controls to prevent search engine crawling.

The **gbhackers** report confirmed that as of Sunday, Google search results for the affected Claude pages had largely disappeared, likely indicating Anthropic made a backend change, requested deindexing, or modified how search engines handle shared chat pages. However, deindexing alone does not ensure exposure is eliminated — cached copies, archived pages, and previously shared links remain accessible.

The **Neowin** report noted thousands of conversations were affected, covering everything from crypto wallet seed phrases to corporate legal notes and medical records. This mirrors a previous incident involving ChatGPT shared conversations that were similarly indexed by search engines.

### Why This Reshapes AI Privacy Governance

This incident underscores a fundamental security assumption failure: **collaboration features can unintentionally become data exposure channels** when privacy designs don't align with actual usage patterns. The Claude share feature created a publicly accessible URL intended for limited sharing, but without proper noindex directives, authentication controls, or link expiration. Security teams must now treat all AI platform sharing features as **potentially public** unless the platform explicitly enforces authentication, access expiration, and anti-indexing protections. Enterprises using Claude should immediately audit active shared chats and revoke unnecessary links.

---

## Active Threats This Week

📌 **Chinese APT Hermes AI Agent Targets Thailand Finance Ministry**
A threat actor deployed the AI agent **Hermes** to autonomously attack Thailand's Ministry of Finance. The attack was fully executed by the AI agent — reconnaissance, exploitation, and deployment of a Go-based malware — marking a significant escalation in AI-driven cyber operations. iThome reported the incident as the first known case of an AI agent autonomously compromising a government finance system.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177629) | [xakep.ru](https://xakep.ru/2026/07/27/hermes-ai/)

📌 **Siemens Opcenter X CVSS 10 Authentication Bypass**
Siemens Opcenter X manufacturing management platform was found to have an **authentication bypass vulnerability (CVE-2026-56451)** with a **CVSS 10.0** rating. Unauthenticated attackers can forge tokens to impersonate administrators and gain full system access. Immediate patching is required.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177667)

📌 **Microsoft AD CS Certighost — Domain Controller Impersonation**
A privilege escalation vulnerability dubbed **Certighost (CVE-2026-54121)** was disclosed in Microsoft Active Directory Certificate Services. Low-privileged domain users can obtain certificates with domain controller身份的 in specific configurations, enabling directory replication and credential theft.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177645)

📌 **Clop Ransomware Exploits Windchill/FlexPLM Zero-Day (CVE-2026-12569)**
The **Clop** ransomware group is actively exploiting **CVE-2026-12569** targeting **Windchill** and **FlexPLM** users, claiming to have exfiltrated large volumes of data. Security firms eCrime.ch, Defused Cyber, and ReliaQuest are tracking the campaign.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177639)

📌 **Chaos Ransomware Deploys msaRAT with Browser-Based C2**
The Chaos ransomware group developed a new trojan called **msaRAT** that hides its command-and-control traffic inside **browser processes** (Living off the Browser technique). Cisco Talos discovered the malware which uses the browser process for C2 communication to evade network detection.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177647)

📌 **FreePBX Critical Vulnerabilities — RCE and Admin Account Takeover**
The open-source PBX management platform FreePBX patched two critical vulnerabilities allowing **unauthenticated remote attackers** to execute arbitrary system commands or take over admin accounts.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177635)

📌 **ChatGPT Enterprise Agent Vulnerability (AgentForger)**
A vulnerability in ChatGPT's enterprise agent builder, tracked as **AgentForger**, allows attackers to craft URLs that execute malicious agent instructions automatically. The exploit enables persistent access to previously authorized external services without user confirmation.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177665)

📌 **JadeProx Chinese APT Uses TriBack Loader Against Government and Healthcare**
Chinese APT group **JadeProx** is deploying the **TriBack Loader** malware in attacks targeting government and healthcare institutions in Taiwan, according to iThome reporting.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177632)

📌 **TELESHIM Abuses Telegram for C2 in Middle East Government Attacks**
Zscaler ThreatLabz identified a new campaign by an East Asia-linked threat actor deploying **TELESHIM**, **MIXEDKEY**, and **BINDCLOAK** malware that abuses the **Telegram API** for C2 communication to blend with legitimate traffic.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/teleshim-abuses-telegram-for-c2-in.html)

📌 **Operation BlueDash — Fake Teams Update Deploys RMM Tools**
A malicious campaign dubbed **Operation BlueDash** uses fake Microsoft Teams update prompts to deploy **Level RMM** and **ScreenConnect** remote management tools, giving attackers persistent access to corporate endpoints.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/operation-bluedash-deploys-level-rmm.html)

📌 **Cruciferra Crypter — BYOVD and Process Ghosting for Malware Evasion**
A new crypter called **Cruciferra** uses **Bring Your Own Vulnerable Driver (BYOVD)** and **Process Ghosting** techniques to hide Windows malware from security products.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/cruciferra-crypter-uses-byovd-and.html)

📌 **n8n Sandbox Escape — OS Command Execution via Workflow Editor**
An expression-sandbox escape in **n8n** (CVE-2026-27577 bypass) lets authenticated workflow editors execute OS commands on the server. Patched in versions 2.31.5 and 2.32.1. CVSS 4.0 score of 8.7.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/n8n-sandbox-escape-lets-workflow.html)

📌 **OnTrac Courier Data Breach — Customer Data Exposed**
US-based courier service **OnTrac** disclosed a data breach where attackers accessed customer files between March 20-22, 2026. Affected customers have been notified.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177651)

📌 **Fake Notepad++ Plugin Distributes Malware via Russian APT UAC-0099**
Russian threat group **UAC-0099** is using fake Notepad++ plugins to distribute malware in attacks targeting Ukrainian defense agencies. CERT-UA issued a warning about the campaign.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177644)

📌 **GitHub Adds 3-Day Dependabot Cooldown to Thwart Poisoned Packages**
GitHub implemented a **3-day cooldown** for Dependabot version updates to limit the window for poisoned package adoption after account compromise.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/github-adds-3-day-dependabot-cooldown.html)

📌 **PyPI Imposes 14-Day Upload Window for Package Versions**
PyPI introduced a **14-day upload limit** for package versions, reducing the risk of threat actors injecting malicious files into old versions after credential theft.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177656)

📌 **CSA Releases Non-Human Identity (NHI) Governance Report**
The Cloud Security Alliance published a new report on **Non-Human Identity (NHI) governance**, helping enterprises identify and manage machine identities, AI agents, and service accounts. This is increasingly critical as AI agent adoption grows.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177637)

📌 **Google Chrome 150 Emergency Update — 4 High-Risk Vulnerabilities**
Google pushed an emergency update for **Chrome 150**, patching **4 high-risk vulnerabilities**. Users should update immediately.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177624)

📌 **Iranian Hackers Escalate Attacks on Critical Infrastructure**
The US government warned that Iranian threat actors have escalated attacks on critical infrastructure, causing operational disruptions and financial losses for some organizations.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177622)

---

## How Can OPSWAT Help

Several threats today involve **file-based attack vectors** that OPSWAT's **MetaDefender platform** can address. The JadeProx TriBack Loader, fake Notepad++ plugin, and Clop ransomware all deliver payloads via malicious files. MetaDefender's **multi‑scanning with 30+ anti-malware engines** and **Content Disarm and Reconstruction (CDR)** can strip active content from documents and packages before they reach endpoints. The msaRAT's browser-based C2 evasion technique underscores the need for **network-level file inspection** that examines files even when C2 traffic hides inside legitimate browser processes. For supply chain protections, OPSWAT's file integrity monitoring complements GitHub's Dependabot cooldown and PyPI's upload window policy.
