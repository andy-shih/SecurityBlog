---
title: "CISO Daily Digest: Anthropic Fable 5 & Mythos 5 Export Ban (20260619)"
description: "US Commerce Secretary Lutnick imposes export controls on Anthropic's Fable 5 and Mythos 5; JPMorgan and Goldman Sachs block Claude access for Hong Kong employees; Anthropic opens Seoul office, says ban will be resolved. Also: Windows Clipper worm campaign, INC ransomware hits 830+ victims, Splunk 9.8 CVE in CISA KEV, FortiBleed affects 86K+ devices."
pubDate: 2026-06-19
tags: [Anthropic, AI Governance, Export Controls, Fable 5, Mythos 5, CISA, KEV, Ransomware, Supply Chain, Fortinet]
author: "Security Solutions Team"
featured: true
---

## Fable 5 & Mythos 5 Export Controls Reshape AI Governance

The Trump administration imposed sweeping export controls on Anthropic's two most advanced AI models — **Fable 5** and **Mythos 5** — in an unprecedented move by Commerce Secretary **Howard Lutnick** that directly restricts a US-based AI company's flagship technology. Under the new rules, access to both frontier models is blocked for users in several international markets, with enforcement beginning immediately.

**JPMorgan Chase** and **Goldman Sachs** have both proactively blocked Anthropic's **Claude** access for their Hong Kong-based employees, citing compliance with the new export framework. The move follows Goldman Sachs' earlier restriction and signals that financial institutions are interpreting the ban broadly beyond the models themselves to include Anthropic's broader platform.

Despite the clampdown, **a small group of users still retains access to Mythos**, and Anthropic has stated publicly that export controls will be **"resolved soon."** The company accelerated its Korea expansion by opening a **Seoul office** and announcing Korean AI partnerships, even as the US ban cuts Korean access to its top models. Reports suggest the most advanced models **could be restored shortly** following what was described as a "dramatic emergency freeze."

### Why This Reshapes AI Governance

This is the first time the US government has used export controls against a domestic AI company's flagship models under the **Export Control Reform Act (ECRA)** framework, setting a precedent that every CISO must watch. The ban creates **multi-jurisdictional compliance exposure** for any enterprise using Anthropic's Claude platform internationally — particularly in Asia-Pacific markets where Claude adoption was rapidly growing. Financial institutions are now pre-emptively restricting employee access, which may drive adoption of competing models (AWS Bedrock, Google Vertex, OpenAI) and create a fragmented AI security landscape. The emergency freeze-and-restore cycle also raises concerns about **model continuity risk** for enterprises that have built workflows around Claude.

🔗 **Reference:** Coverage from ([Bloomberg](https://www.bloomberg.com/news/articles/2026-06-15/lutnicks-anthropic-crackdown-claims-new-power-over-ai-models), [Android Authority](https://www.androidauthority.com/anthropics-most-advanced-ai-models-could-be-restored-shortly-following-dramatic-emergency-freeze/), [GovInfoSecurity](https://www.govinfosecurity.com/jpmorgan-pulls-anthropic-claude-access-in-hong-kong-a-25778), [Techzine](https://techzine.global/small-group-of-users-retains-access-to-mythos/), [Thelec](https://www.thelec.net/news/articleView.html?idxno=1275), [TechTimes](https://www.techtimes.com/articles/301234/20260619/anthropic-opens-seoul-office-us-export-ban-korean-access-top-models.htm), [MarketScreener](https://www.marketscreener.com/quote/stock/ANTHROPIC-PBC-71236642/news/Anthropic-vs-the-Trump-Administration-What-the-Latest-Fable-5-and-Mythos-5-Ban-Means-for-AI-Investors-49463923/), [NDTV](https://www.ndtv.com/world-news/jpmorgan-chase-blocks-anthropic-claude-access-for-hong-kong-employees-9056611))

---

## Active Threats This Week

📌 **Windows Clipper Malware Campaign via USB LNK Worm**
Microsoft published details of an active clipper malware campaign that spreads through **USB drives using LNK shortcut files** and communicates over **Tor-based command-and-control infrastructure**. The malware replaces cryptocurrency wallet addresses in the clipboard during transactions. The USB worm vector enables air-gap crossing and lateral movement within enterprise environments.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/microsoft-details-windows-clipper.html)

📌 **INC Ransomware Emerges as Major RaaS Threat**
The INC ransomware operation has claimed **830+ victims** since its launch in 2023, establishing itself as one of the most active ransomware-as-a-service operations in 2026. The group targets enterprises across healthcare, finance, and manufacturing sectors with double-extortion tactics.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html)

📌 **Splunk 9.8 Critical Vulnerability Added to CISA KEV — Patch by June 21**
CISA added a **CVSS 9.8** Splunk vulnerability to its Known Exploited Vulnerabilities catalog, giving federal agencies and recommended entities until **June 21** to patch. The severity and active exploitation status make this a zero-day-level priority for any organization using Splunk for SIEM and log management.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/161295)

📌 **FortiBleed Vulnerability Hits 86,644 FortiGate Devices**
CISA issued an urgent warning as the **FortiBleed** vulnerability impacts over 86,000 FortiGate firewalls globally. The vulnerability allows unauthenticated remote code execution and is being actively exploited in the wild.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cisa-warns-fortinet-customers-as.html)

📌 **'Popa' Botnet Linked to Publicly-Traded Israeli Firm**
KrebsOnSecurity reported that the **Popa botnet** — responsible for large-scale credential stuffing and DDoS attacks — is operationally linked to a publicly-traded Israeli technology firm. The investigation reveals a concerning nexus between legitimate corporate infrastructure and botnet operations.
🔗 **Reference:** [KrebsOnSecurity](https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/)

📌 **Salesforce Klue App OAuth Token Abuse Exposes Customer Data**
Salesforce disabled the **Klue app integration** after attackers abused **stolen OAuth tokens** to access customer data. The breach highlights the growing risk of **third-party app integrations** in SaaS ecosystems. Novo Nordisk also reported a software development pipeline breach, underscoring supply chain risks in pharmaceutical DevOps.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/salesforce-disables-klue-app.html) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/salesforce-data-thefts-klue-app-compromise) | [Dark Reading — Novo Nordisk](https://www.darkreading.com/cyber-risk/novo-nordisk-breach-exposes-dev-pipeline-risk)

---

## How Can OPSWAT Help

The Clipper USB worm and FortiBleed campaigns both involve **file-based attack vectors** that can be neutralized at the entry point. OPSWAT MetaDefender's **multi-engine file scanning** (30+ anti-malware engines) combined with **Deep Content Disarm and Reconstruction (CDR)** can strip active content from USB-borne LNK files, email attachments, and downloaded payloads before they reach endpoints. For supply chain risks highlighted by the Novo Nordisk and Salesforce breaches, MetaDefender's **proactive file security** provides defense-in-depth against file-borne malware and zero-day threats.

🔗 **Learn more:** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
