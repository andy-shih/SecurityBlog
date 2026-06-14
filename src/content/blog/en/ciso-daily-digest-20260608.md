---
title: "CISO Daily Digest: World Food Programme Data Breach Exposes 600K Gaza Families (20260608)"
description: "WFP confirms data breach exposing 600K Gaza families' personal information; C0XMO botnet exploits DD-WRT vulnerabilities; UNC3753 vishing campaign targets US organizations"
pubDate: 2026-06-08
tags: ["WFP", "data-breach", "C0XMO", "botnet", "UNC3753", "supply-chain", "Miasma"]
author: "Security Solutions Team"
featured: true
---

## World Food Programme Data Breach Exposes 600K Gaza Families

The United Nations World Food Programme (WFP) suffered a major data breach, exposing the personal information of up to **600,000 Gaza families** relying on humanitarian aid. The breach raises severe concerns about the security posture of international humanitarian organizations operating in conflict zones, where compromised data can have life-threatening consequences for vulnerable populations.

- The breach involved unauthorized access to WFP systems containing registration data for food assistance beneficiaries in Gaza
- Exposed data likely includes names, addresses, family compositions, and contact information for **600,000 families**
- The incident follows an earlier WFP cyber incident, highlighting persistent security gaps in humanitarian IT infrastructure
- Humanitarian organizations managing large beneficiary databases in conflict zones face elevated threat levels from both state-sponsored and criminal actors

The breach underscores the critical need for humanitarian organizations to implement robust data protection measures, including encryption, access controls, and continuous monitoring for beneficiary databases.

🔗 **References:** Comprehensive coverage ([iThome](https://www.ithome.com/security/wfp-data-breach-gaza)) | ([The Hacker News](https://thehackernews.com/2026/06/weekly-recap-instagram-account-hacks.html))

## Active threats this week

📌 **C0XMO Botnet Exploits Legacy DD-WRT Vulnerabilities to Infect Routers, DVRs, and Android Devices**

The **C0XMO botnet** continues to expand by exploiting **old DD-WRT firmware vulnerabilities** to compromise routers, DVRs, and Android devices globally. The botnet spreads by scanning for devices with **default or weak credentials** and unpatched firmware, incorporating them into a **DDoS and proxy network**. Reports indicate the botnet is actively evolving its command-and-control infrastructure.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/06/08/c0xmo/) | [iThome](https://www.ithome.com/security/c0xmo-botnet-dd-wrt)

📌 **UNC3753 Vishing and Physical Intrusion Campaign Targets US Organizations**

Mandiant-identified threat group **UNC3753** is conducting a sophisticated **vishing (voice phishing) campaign** combined with **physical intrusions** targeting US organizations. Attackers use social engineering to gain initial access, then deploy **extortion tactics** involving data theft. The campaign demonstrates an escalation in hybrid attack methods blending social engineering with physical security breaches.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/unc3753-used-vishing-and-physical.html)

📌 **VerdantBamboo Deploys BSD Variant of BRICKSTORM Malware on Linux Appliances**

Chinese-linked threat actor **VerdantBamboo** has deployed a **BSD variant** of the **BRICKSTORM malware** framework targeting **Linux-based appliances**. The malware provides persistent backdoor access with capabilities including file exfiltration, command execution, and network reconnaissance. This development expands the threat actor's arsenal beyond traditional Windows-focused operations.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/verdantbamboo-deploys-bsd-variant-of.html)

📌 **Miasma Worm Supply Chain Attack Hits NPM Packages and AI Development Tools**

The **Miasma worm** campaign continues to escalate, with new infections targeting **NPM packages** and **AI coding assistant tools**. Attackers are using fake **Claude Code installer websites** to distribute malware aimed at stealing developer credentials, and embedding malicious code in popular development packages. The worm's **Phantom Gyp** technique enables it to evade detection and persist in compromised environments.

🔗 **Reference:** [iThome](https://www.ithome.com/security/miasma-npm-supply-chain) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/rust-written-ironworm-npm-supply-chain)

📌 **Malicious Android Trojan MagicAd Evades Ad Restrictions**

A new Android trojan named **MagicAd** has been discovered that bypasses advertising restrictions on mobile devices. The trojan, distributed through third-party app stores, generates fraudulent ad revenue while potentially exfiltrating device data. It represents a growing trend of **ad-focused malware** affecting mobile ecosystems.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/06/08/magicad/)

## OPSWAT

The escalating Miasma worm supply chain attacks targeting NPM packages and AI development tools underscore the urgent need for comprehensive file security in software development pipelines. OPSWAT's **MetaDefender** platform provides multi-scanning with over **30 anti-malware engines** and **Content Disarm and Reconstruction (CDR)** to detect and neutralize threats in software packages and artifacts before they enter the development supply chain. Additionally, **MetaDefender ICAP Server** can be deployed at proxy and storage layers to scan files being uploaded or downloaded, providing an essential security layer against worm-driven malware distribution through compromised packages.
