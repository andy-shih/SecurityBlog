---
title: "CISO Daily Digest: Check Point VPN Zero-Day Crisis Intensifies (20260609)"
description: "Check Point VPN zero-day exploited by Qilin ransomware with CISA 4-day mandate; Miasma worm hits 70+ Microsoft repos; Chrome V8 zero-day; Meta blocks NSO WhatsApp phishing; self-replicating AI worm demonstrated."
pubDate: 2026-06-09
tags: ["vulnerabilities", "malware", "supply-chain", "ransomware", "phishing", "VPN"]
author: "Security Solutions Team"
featured: true
---

## Check Point VPN Zero-Day Exploited by Qilin Ransomware

The Check Point VPN zero-day saga escalated dramatically this weekend, with the **Qilin ransomware group** weaponizing the IKEv1 authentication bypass vulnerabilities (CVE-2026-50751 / CVE-2026-50752) in active ransomware campaigns.

- Check Point's Quantum Security Gateway and CloudGuard Network Security products are affected by the IKEv1 authentication bypass flaw, which allows attackers to bypass password-based authentication and gain network access
- **Qilin ransomware** has been observed leveraging the vulnerability to deploy payloads inside protected networks, marking the first known ransomware campaign exploiting this flaw
- **CISA** has ordered all US federal agencies to patch within **4 days** — an unusually aggressive timeline
- Check Point released patches on June 4; security teams should verify immediate deployment

The rapid weaponization of a VPN vulnerability by a major ransomware group within days of patch release highlights the shrinking window between disclosure and exploitation. Organizations still running unpatched Check Point appliances face imminent risk of ransomware deployment.

🔗 **References:** Comprehensive coverage ([The Hacker News](https://thehackernews.com/2026/06/critical-check-point-vpn-flaw-exploited.html) | [DarkReading](https://www.darkreading.com/vulnerabilities-threats/check-point-vpn-flaw-exploited-early-may) | [iThome: Qilin Activity](https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtTUM2YXZPQjBuZkt4RVJsUVdnNEtjdjZYb2xIY2dQVVFmclA3bUEzblNyQVZJcThOQ05jdm) | [iThome: CISA 4-Day](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RcUtkdWNKX09vVWhsNGllSXpWS0x6RXZEZXo4QWZnc1pZcHg4RUlhMDRwWEV2T093Qks1ZG5l))

## Active threats this week

📌 **Miasma Worm Compromises 70+ Microsoft GitHub Repositories**

The **Miasma worm** has expanded its supply chain attack, compromising over **70 Microsoft-owned GitHub repositories** and disabling them within **two minutes** of infection. The worm uses automated takedown capabilities to delete repository contents. This marks one of the largest supply chain attacks targeting a single vendor's code infrastructure.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/miasma-worm-hits-73-microsoft-github.html) | [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2dk5GWlBhdzRoWXhzbzRuRXg2b1MyVWtteGN3T2QwbWZmbUNFbTNVNy1GbWpacHJJRTJZZzR1S)

📌 **Hades PyPI Attack Poisoned 19 Packages with Bun Credential Stealer**

The **Hades campaign** against **PyPI** poisoned **19 packages** using a novel technique — a malicious **Bun runtime-based credential stealer** that auto-executes on installation. This marks a shift from Python-native attack tooling to cross-runtime malware.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/hades-pypi-attack-19-packages-poisoned.html) | [DarkReading](https://www.darkreading.com/application-security/hades-campaign-pypi-shai-hulud)

📌 **Chrome V8 Zero-Day (CVE-2026-11645) Exploited in the Wild**

Google confirmed a **Chrome V8 engine zero-day** (CVE-2026-11645) is being actively exploited in the wild. Users should apply the emergency Chrome update immediately alongside the broader Chrome **149 patch batch** which addressed **429 security vulnerabilities** including **74 critical/high severity issues**.

🔗 **Reference:** [The Hacker News: V8 Zero-Day](https://thehackernews.com/2026/06/chrome-v8-zero-day-cve-2026-11645.html) | [The Hacker News: Chrome 149](https://thehackernews.com/2026/06/ai-agent-uncovers-21-zero-days-in.html)

📌 **Meta Blocks NSO Group's New WhatsApp Phishing Attack, Files Contempt Order**

**Meta** has successfully blocked **NSO Group's** latest **WhatsApp phishing campaign**, which targeted journalists and human rights defenders. Meta filed a **contempt of court order** alleging NSO violated a prior settlement by deploying new spyware infrastructure.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/meta-blocks-nso-groups-new-whatsapp.html)

📌 **C0XMO Botnet Infects DVRs and Android Devices via Old DD-WRT Flaws**

A botnet named **C0XMO** is exploiting **old DD-WRT vulnerabilities** to compromise **DVRs and Android devices**, building a massive IoT botnet. The malware leverages unpatched firmware on consumer and enterprise devices.

🔗 **Reference:** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kR1kyZldaeEluajY2bUFnMVFibmgtcDRSTmJEWFdzMnVDZmVDQVVFZndhSklSeHFY)

📌 **Silent Ransom Group Hits US Law Firms in Escalating Extortion Attacks**

The **Silent Ransom Group** has intensified operations targeting **US law firms**, exfiltrating sensitive client data and extorting victims under threat of public exposure.

🔗 **Reference:** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/silent-ransom-us-law-firms-extortion-attack)

📌 **Self-Replicating AI Worm Built Entirely on Local, Open-Weight Models**

Researchers demonstrated a **self-replicating AI worm** that operates entirely on **local, open-weight models** — no cloud APIs required. The worm spreads between AI agents, stealing credentials and propagating to new systems autonomously, representing a new class of AI-native malware.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/researchers-build-self-replicating-ai.html)

📌 **LiteLLM Flaw (CVE-2026-42271) Exploited in the Wild for Unauthenticated RCE**

A critical vulnerability in **LiteLLM**, an open-source LLM proxy, is being actively exploited for **unauthenticated remote code execution**. The flaw chains multiple issues to allow complete server compromise without authentication.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/litellm-flaw-cve-2026-42271-exploited.html)

📌 **OpenAI Introduces Lockdown Mode to Defend Against Prompt Injections**

**OpenAI** released a new **Lockdown Mode** feature designed to protect against the consequences of **prompt injection attacks**, marking the first major platform-level defense against this growing attack vector.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/06/08/lockdown-mode-openai/)

## How Can OPSWAT Help

The Miasma worm and Hades PyPI supply chain attacks underscore the growing risk of software supply chain compromise. OPSWAT MetaDefender's multi-engine scanning (aggregating **30+ anti-malware engines**) and **Content Disarm and Reconstruction (CDR)** technology can detect and block both known and unknown malware variants embedded in package dependencies and CI/CD pipelines, reducing exposure to supply chain-driven infections.
