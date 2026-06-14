---
title: "CISO Daily Digest: Tropic Trooper, UNC6692 & AI-Driven Phishing Threats (20260424)"
description: "Tropic Trooper APT targets home routers and Japanese organizations via trojanized SumatraPDF; UNC6692 impersonates IT helpdesk via Microsoft Teams to deploy SNOW malware; Chinese APT abuses cloud tools to spy on Mongolia; LMDeploy CVE exploited within 13 hours of disclosure; AI phishing tops cyberattack methods"
pubDate: 2026-04-24
tags: ["CISO Daily Digest", "cybersecurity", "threat intelligence"]
author: "Security Solutions Team"
featured: true
---

## Tropic Trooper APT Strikes Home Routers & Japanese Organizations

The Tropic Trooper APT group launched a multi-vector campaign targeting **home routers and Japanese organizations.** The attackers used **trojanized SumatraPDF installers** distributed via GitHub to deploy the Adaptix post-exploitation framework. The campaign also utilized **home routers as proxy infrastructure** for C2 communications, making takedown more difficult.

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/threat-intelligence/tr) | [The Hacker News](https://thehackernews.com/2026/04/tropic-trooper-u)

---

## 本週活躍威脅

📌 **UNC6692 Impersonates IT Helpdesk via Microsoft Teams to Deploy SNOW Malware**

The UNC6692 threat group conducted a sophisticated **social engineering campaign impersonating IT helpdesk staff** through Microsoft Teams. The attackers convinced targets to install remote access tools, then deployed **SNOW malware** for persistent access and data exfiltration.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/unc6692-imperson)

📌 **Chinese APT Abuses Multiple Cloud Tools to Spy on Mongolia**

A Chinese-linked APT group was observed **abusing multiple cloud services and tools** to conduct espionage operations against Mongolian government entities. The attackers leveraged legitimate cloud platforms for data exfiltration and C2 infrastructure, making detection significantly harder.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-brea)

📌 **LMDeploy CVE-2026-33626 Exploited Within 13 Hours of Disclosure**

A critical vulnerability in the LMDeploy AI model deployment tool (CVE-2026-33626) was **exploited in the wild within just 13 hours of its public disclosure.** The speed of exploitation underscores the urgent need for rapid patch deployment in AI/ML infrastructure.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/lmdeploy-cve-202)

📌 **AI Phishing Is No. 1 With a Bullet for Cyberattackers**

Dark Reading reports that **AI-powered phishing has become the top cyberattack method** in 2026, outpacing traditional malware and ransomware. Generative AI enables attackers to create highly convincing, personalized phishing emails at scale, dramatically increasing success rates.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/ai-phishing)

📌 **Checkmarx Supply Chain Attack Expands — Bitwarden Confirms NPM Compromise**

The ongoing Checkmarx supply chain campaign widened as **Bitwarden confirmed their CLI NPM packages were compromised.** The password manager company urged users to rotate credentials and review any actions taken on systems where the compromised packages were used.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/bitwarden-cli-co)

📌 **CISA ICS Advisory Published for April 2026**

Japan Vulnerability Notes (JVN) published the **CISA ICS Advisory for late April 2026,** covering critical infrastructure vulnerabilities in industrial control systems and medical devices requiring immediate attention from OT security teams.

🔗 **Reference:** [JVN](https://jvn.jp/vu/JVNVU90656414/)

## OPSWAT 能做什麼

The Tropic Trooper campaign used **trojanized SumatraPDF installers** distributed via GitHub — a technique that **MetaDefender's file-based threat prevention** is specifically designed to counter. **MetaDefender Gateway** can inspect all downloaded files at the network perimeter, while **MetaDefender CDR** can neutralize weaponized PDF installers by removing active content and macros. For the **home router-based proxy infrastructure,** OPSWAT's **TrustNo.one** platform provides device-level visibility for managed environments.