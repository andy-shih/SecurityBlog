---
title: "CISO Daily Digest: Checkmarx Supply Chain Attack & Harvester GoGra Backdoor (20260423)"
description: "Checkmarx suffers supply chain attack compromising KICS Docker images and VS Code extensions; Harvester deploys Linux GoGra backdoor via Microsoft Graph API; Apple patches iOS notification flaw; The Gentlemen ransomware rises to prominence; CISA ICS advisory published"
pubDate: 2026-04-23
tags: ["CISO Daily Digest", "cybersecurity", "threat intelligence"]
author: "Security Solutions Team"
featured: true
---

## Checkmarx Supply Chain Attack — KICS Docker Images & VS Code Extensions Compromised

Application security company Checkmarx suffered a **supply chain attack** where malicious actors compromised KICS Docker images and VS Code extensions. The attack cascaded further when **Bitwarden's NPM packages** were also compromised in the ongoing campaign. The incident highlights how **application security toolchains themselves** can become attack vectors, with the compromised scanner tools potentially distributing malware to downstream customers.

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/04/malicious-kics-d) | [The Hacker News](https://thehackernews.com/2026/04/bitwarden-cli-co)

---

## 本週活躍威脅

📌 **Harvester Deploys Linux GoGra Backdoor in South Asia Using Microsoft Graph API**

The Harvester threat group deployed a **Linux variant of the GoGra backdoor** targeting organizations in South Asia. The malware uses **Microsoft Graph API** for command-and-control, blending in with legitimate Office 365 traffic to evade detection.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/harvester-deploy)

📌 **'The Gentlemen' Ransomware Rapidly Rises to Prominence**

Dark Reading reports that 'The Gentlemen' ransomware group has emerged as one of the **most prolific ransomware operations in Q2 2026.** The group's rapid ascent mirrors their aggressive affiliate recruitment and sophisticated encryption techniques. **Over 1,570 victims** have been identified through SystemBC C2 infrastructure analysis.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/threat-intelligence/ge)

📌 **Apple Patches iOS Flaw — Deleted Signal Notifications Stored in FBI-Accessible Backups**

Apple patched an iOS vulnerability that caused **deleted Signal notification content** to remain stored in iCloud backups accessible via FBI requests. The privacy flaw raised significant concerns about **encrypted messaging data persistence** and the limits of 'delete for everyone' features.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/apple-patches-io)

📌 **Self-Propagating Supply Chain Worm Hijacks npm Packages**

A **self-propagating worm** was discovered hijacking npm packages to **steal developer credentials.** The worm autonomously spreads through the npm ecosystem by compromising package maintainer accounts and injecting malicious code into popular packages.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/self-propagating)

📌 **Zealot Attack Simulation: AI's Capability in Staged Cloud Attacks**

Researchers demonstrated 'Zealot,' a simulation showing what **AI is capable of in staged cloud attacks.** The research highlights how AI can automate reconnaissance, lateral movement, and data exfiltration in cloud environments.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/zealot-show)

📌 **Multiple JVN Advisories: CMS ALAYA SQL Injection & GROWI ReDoS**

Japan Vulnerability Notes published advisories for **CMS ALAYA SQL injection vulnerability** (allowing database compromise) and **GROWI regular expression DoS** (enabling service disruption via crafted input).

🔗 **Reference:** [JVNDB](https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-0) | [JVN](https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-0)

## OPSWAT 能做什麼

The Checkmarx supply chain attack — where security scanning tools themselves became the attack vector — is a textbook case for **MetaDefender's multi-engine malware detection.** By running files through **30+ anti-malware engines** simultaneously, MetaDefender can detect threats missed by any single scanner. Additionally, **MetaDefender CDR** can neutralize weaponized Docker images and VS Code extension files by removing potentially malicious macros, scripts, and embedded objects while preserving functionality.