---
title: "CISO Daily Digest: Pentagon Used Grok AI for Iran Missile Strikes (20260617)"
description: "Pentagon confirms xAI's Grok AI powered Project Maven targeting for 2,000+ Iran strikes; Anthropic meets White House over Fable 5 ban; FortiBleed campaign compromises 30,000+ Fortinet devices; 144 Mastra npm packages hijacked; ShinyHunters breaches European Council."
pubDate: 2026-06-17
tags: [CISO, daily-digest, AI-governance, military-AI, supply-chain, APT, vulnerability, Fortinet, Anthropic, Fable-5, Grok]
author: "Security Solutions Team"
featured: true
---

## Pentagon Used Grok AI for Iran Missile Strikes

The Pentagon confirmed that xAI's Grok model was integrated into Project Maven and used to deliver over **2,000 munitions** against **2,000 distinct targets** in Iran within **96 hours** during Operation Epic Fury. The disclosure came via a DOJ legal brief defending xAI's gas turbines in an NAACP Clean Air Act lawsuit.

**Key developments:**

- **Pentagon AI Chief Cameron Stanley** provided sworn testimony that the "Grok Gov Model" is deployed within Project Maven, the US military's AI-assisted targeting program. Stanley praised Grok's "operational efficiency" in enabling the coordinated strike campaign.

- Project Maven was **originally powered by Anthropic's Claude**. The government terminated contracts with Anthropic at the end of February after the company refused to allow its models to be used for mass surveillance or fully automated strikes. The Pentagon then turned to OpenAI, Google, and xAI.

- The legal context: DOJ argued that shutting down xAI's data center power supply would threaten national security by disrupting AI innovation supporting military operations — the first time a commercial AI model's role in active kinetic warfare has been cited in federal court.

- **Anthropic Fable 5 ban developments:** Separately, Anthropic sent senior technical engineers to Washington for face-to-face talks with Commerce Department officials over the Fable 5/Mythos 5 export ban. **Amazon CEO Andy Jassy** reportedly contacted the White House about a Fable 5 jailbreak vulnerability, which the administration cited in the export control directive. The security community has published an open letter signed by dozens of experts urging the government to reverse the restrictions, with **Scientific American** and **TechCrunch** both running pieces warning the ban undermines cybersecurity.

### Why This Reshapes AI Governance

1. **Commercial AI in kinetic warfare:** The Pentagon's admission that a publicly available AI chatbot (Grok) was used for targeting decisions raises unprecedented questions about liability, model safety, and the boundaries between commercial AI and military applications. No legal framework currently governs this use case.

2. **Export controls as AI weapon:** The Fable 5 ban establishes the precedent that the US government can order global shutdown of frontier AI models overnight. For enterprises building on any single AI provider, the supply chain risk is now existential — model access can be revoked with zero notice based on geopolitical considerations.

3. **Dual-use AI accountability gap:** Two parallel crises — Grok in combat targeting and Fable 5's national security restrictions — reveal that the AI industry has no agreed standards for what constitutes unacceptable model use. The same week Anthropic is punished for insufficient jailbreak resistance, xAI is celebrated for military targeting efficiency. The regulatory vacuum creates unpredictable risk for every enterprise AI deployment.

🔗 **Reference:** Coverage from ([WION](https://www.wionews.com/world/how-musk-s-grok-ai-helped-us-forces-hit-2-000-iran-targets-in-96-hours-1781672795559), [Seeking Alpha](https://seekingalpha.com/news/4604079-pentagon-says-it-used-xais-grok-to-help-with-iran-bombings-earlier-this-year), [DarkReading](https://www.darkreading.com/vulnerabilities-threats/security-community-slams-us-ban-on-exporting-mythos-fable), [Android Headlines / MSN](https://www.msn.com/en-us/news/technology/anthropic-meets-face-to-face-with-white-house-officials-over-fable-5-export-ban/ar-AA25OyrX), [Memeburn](https://memeburn.com/amazons-concerns-triggered-the-us-shutdown-of-anthropic-ai), [TechCrunch](https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/), [Yahoo News / Scientific American](https://www.yahoo.com/news/politics/articles/u-limits-anthropic-fable-ai-143000750.html))

---

## Active Threats This Week

📌 **FortiBleed: 30,000+ Fortinet Devices Compromised in Global Credential Harvesting Campaign**

SOCRadar researchers discovered a threat actor systematically compromising Fortinet firewalls and VPN gateways across **194 countries**, building a verified database of working credentials for **30,791 devices**. The attacker uses fully automated scanning: probes Fortinet devices for known vulnerability passwords, records every successful login, then uses compromised devices as listening posts to harvest additional credentials and feed them back into the scanning loop. Government entities alone account for **591 entries** across **111 domains**. Telecoms are the most heavily targeted sector with **5,616 entries**. Many targets had never changed default or previously-leaked passwords.

🔗 **Reference:** [SOCRadar FortiBleed Report](https://socradar.io/blog/fortibleed-fortinet-firewalls-compromised/) | [The IT Nerd](https://itnerd.blog/2026/06/16/socradar-discovers-active-fortinet-hacking-campaign-30000-firewall-credentials-exposed-corporate-networks-across-194-countries/)

📌 **144 Mastra npm Packages Compromised via Hijacked Contributor Account**

Attackers hijacked a contributor account for the **Mastra** open-source AI agent framework and published **144 malicious npm packages**. The compromised packages contained malware designed to exfiltrate environment variables, API keys, and cryptographic credentials. Mastra is used extensively in AI agent development pipelines, making this supply chain attack particularly dangerous for organizations building AI-powered automation.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/144-mastra-npm-packages-compromised-via.html)

📌 **ShinyHunters Breaches European Council (Council of EU)**

The ShinyHunters hacking group claimed responsibility for infiltrating the Council of the European Union, exfiltrating internal documents, emails, and databases. This follows a pattern of increasing attacks against international governmental organizations by the group, which previously targeted major enterprises. The full scope of compromised data remains under investigation.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176698)

📌 **JetBrains Marketplace: 15 Malicious Plugins Stealing AI Service API Keys**

Security firm Aikido identified at least **15 malicious IDE plugins** across **7 publisher accounts** on the JetBrains Marketplace. The plugins masquerade as AI coding assistants (chat, commit message generation, code review, test generation) but exfiltrate stored API keys to attacker-controlled servers when users save credentials. This targets developers' AI service keys — including OpenAI, Anthropic, and GitHub Copilot tokens.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176707)

📌 **Google Chrome 149 Patches 33 Security Vulnerabilities**

Google released Chrome 149.0.7827.155/156 for Windows/Mac and 149.0.7827.155 for Linux, addressing **33 security issues** including **7 critical memory safety bugs** in WebShare, WebView, Digital Credentials, and File System Access components. No active exploitation has been reported for this specific update.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176703)

📌 **Brazilian Delivery Giant iFood Confirms Data Breach Affecting 1.2 Million Users**

iFood, Brazil's largest food delivery platform, confirmed that an unauthorized database access in December 2025 exposed **1.2 million users' names, ID numbers, and addresses**. While a hacker claimed to have stolen over **43.8 million records**, iFood denies the higher figure. The breach underscores the persistent risk of credential stuffing and database exposure at consumer platforms.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176700)

---

## How Can OPSWAT Help

The **Mastra npm supply chain attack** and **Fortinet credential harvesting campaign** both demonstrate file-based threats that OPSWAT MetaDefender can address. For the npm attack, MetaDefender's **multi-engine file scanning** across 30+ AV engines would detect malicious packages before they enter CI/CD pipelines. **Deep Content Disarm and Reconstruction (Deep CDR)** can sanitize configuration files and scripts in package archives, removing embedded threats while preserving functionality. For Fortinet-related malware delivery via email or web downloads, MetaDefender Email Security and **MetaDefender ICAP Server** provide multi-scan + CDR at the gateway, blocking known and unknown threats before they reach the network edge.

🔗 **Reference:** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
