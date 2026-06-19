---
title: "CISO Daily Digest: Pentagon Confirms Grok AI Used to Fire 2,000 Missiles at Iran (20260618)"
description: "Pentagon AI chief confirms Grok chatbot was deployed in U.S. military strikes against Iran, coordinating 2,000 missiles. Also: Sweeping credential-harvesting attack compromises 30K+ Fortinet devices, INC Ransomware claims 830+ victims, Microsoft details Windows Clipper USB malware, DragonForce hackers abuse Microsoft Teams for C2, and Fable 5 ban creates opening for Chinese AI rivals."
pubDate: 2026-06-18
tags: [ciso, daily-digest, cybersecurity, military-ai, grok, pentagon, iran, fortinet, ransomware, supply-chain]
author: "Security Solutions Team"
featured: true
---

## Grok AI Goes to War: Pentagon Confirms Chatbot's Role in Iran Missile Strikes

In a revelation that marks an unprecedented milestone for artificial intelligence in warfare, the Pentagon's Chief Digital and AI Officer (CDAO) has confirmed that **xAI's Grok chatbot** was operationally deployed to assist U.S. military strikes against Iran, coordinating the targeting and launch of **approximately 2,000 missiles**. The confirmation emerged through federal court filings related to a NAACP environmental lawsuit against xAI's Memphis data center operations.

- Pentagon officials confirmed in court filings that Grok was used for **real-time battle damage assessment**, target prioritization, and **missile trajectory optimization** during Operation Epic Fury against Iranian military positions
- This marks the **first confirmed battlefield deployment** of a commercially-developed large language model in active combat by the U.S. military
- The Trump administration's Department of Justice acknowledged the AI's role while simultaneously intervening in the unrelated NAACP lawsuit against xAI
- The revelation raises urgent questions about **human oversight of AI in kinetic operations** and the repurposing of consumer AI products for military applications
- xAI founder Elon Musk has not publicly commented on the Pentagon's use of Grok in the Iran campaign

### Why This Reshapes Military AI Governance

1. **Commercial AI crosses the Rubicon:** Grok, a consumer/productivity chatbot, was repurposed for battlefield coordination — setting a precedent that every major AI lab will now face. OpenAI, Anthropic, and Google DeepMind will be pressured to define acceptable military use boundaries for their models.

2. **Accountability and legal ramifications:** The court filing confirming Grok's role emerged from a civilian environmental lawsuit, not a military transparency proceeding. This accidental disclosure highlights the absence of clear legal frameworks for AI-assisted kinetic operations. If AI-driven targeting causes civilian casualties, liability remains undefined.

3. **Export control and AI arms race implications:** The Trump administration's aggressive AI export control policies — already targeting Anthropic's Fable 5 and Mythos models — gain new geopolitical weight. The use of a commercially-available U.S. AI system to conduct kinetic military operations will accelerate calls for international AI arms control treaties, while simultaneously proving military AI utility to adversaries.

🔗 **Reference:** Coverage from ([The Debrief](https://thedebrief.org/grok-goes-to-war-pentagon-reveals-musks-ai-chatbot-launched-missiles-in-u-s-war-with-iran/), [The Hill](https://thehill.com/policy/defense/pentagon-ai-chief-musk-grok-chatbot-iran-missiles/), [Common Dreams](https://www.commondreams.org/news/grok-ai-iran-strikes), [Yahoo News](https://news.yahoo.com/pentagon-used-elon-musk-ai-bot-grok-to-fire-2000-missiles-at-iran/))

---

## Active Threats This Week

📌 **Sweeping Credential-Harvesting Attack Compromises 30,000+ Fortinet Devices**
A massive credential-harvesting campaign has compromised over **30,000 Fortinet devices** globally, with attackers exploiting known vulnerabilities to gain administrative access and deploy credential stealers. The campaign targets organizations across government, finance, and critical infrastructure sectors. Fortinet has released patches, but the scale of compromise suggests many devices remain unpatched.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/sweeping-credential-harvesting-heist-compromises-30k-fortinet-devices)

📌 **INC Ransomware Claims 830+ Victims Since 2023**
The INC Ransomware group continues to expand its operations, crossing **830 confirmed victims** since emerging as a RaaS (Ransomware-as-a-Service) operation. The group targets healthcare, education, and government sectors using double-extortion tactics. Recent campaigns incorporate **Cobalt Strike** for lateral movement and custom data exfiltration tools.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html)

📌 **Microsoft Details Windows Clipper Malware via USB LNK Worm**
Microsoft has published analysis of a new clipper malware campaign that spreads through **infected USB drives using LNK file exploits**. The malware replaces cryptocurrency wallet addresses in clipboard data, redirecting funds to attacker wallets. The worm-like USB propagation method makes it particularly dangerous for air-gapped and OT environments. C2 communication uses **Tor** for anonymity.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/microsoft-details-windows-clipper.html)

📌 **DragonForce Hackers Abuse Microsoft Teams Relays for C2**
The DragonForce threat group has been observed abusing **Microsoft Teams relays** to hide backdoor command-and-control traffic. By piggybacking on legitimate Teams infrastructure, the attackers can bypass network security controls that trust Microsoft 365 traffic. This technique represents an evolution in living-off-the-land (LOTL) attack methods.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/dragonforce-hackers-abuse-microsoft.html)

📌 **Fable 5 Ban Creates Opening for Chinese AI Rivals**
The Trump administration's ongoing freeze of Anthropic's **Fable 5** and **Mythos 5** models under AI export control regulations is creating a vacuum in the global AI market. Chinese AI labs — including DeepSeek, Baidu, and Alibaba — are rapidly filling the gap with alternative models that face no U.S. regulatory restrictions. Four open-source models have already exceeded Fable 5's capabilities in independent benchmarks since the ban took effect.
🔗 **Reference:** Coverage from ([Forbes](https://www.forbes.com/sites/anthropic-fable-5-ai-bargaining-table/), [The New Stack](https://thenewstack.io/fable-5-ban-4-open-models-responded-before-anthropic-could-restore-access/), [Cyber Magazine](https://cybermagazine.com/ai/why-us-freezing-anthropic-new-claude-models))

📌 **Orphaned AI Agents Pose Hidden Access Risks**
As enterprises rapidly deploy AI agents, many are discovering **orphaned agents** — AI assistants with active permissions that their original owners have left or forgotten about. These create significant access risks, functioning similarly to dormant service accounts but with unpredictable behavior. Security teams are urged to inventory and decommission unused AI agent integrations.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/orphaned-ai-agents-how-to-find-hidden.html)

📌 **PCI DSS Now Covers Scripts on Checkout Pages**
New PCI DSS guidance explicitly extends compliance requirements to **third-party scripts running on payment checkout pages**. Organizations using analytics, personalization, or chatbot scripts on payment pages must now ensure those scripts comply with PCI DSS, addressing a long-standing blind spot in web payment security.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/the-scripts-on-your-checkout-page-are.html)

---

## How Can OPSWAT Help

The threats in this digest highlight several file-based attack vectors where OPSWAT MetaDefender provides actionable defense:

- **Fortinet credential harvesting:** MetaDefender **Vulnerability Assessment** scans for unpatched Fortinet devices across the network. **Multi-Scanning** (30+ engines) detects credential-stealer payloads before they execute.
- **Windows Clipper USB malware:** MetaDefender **Kiosk** and **MetaDefender Drive** provide USB scanning stations that disinfect removable media before files reach endpoints, blocking LNK-based worm propagation at the physical access point.
- **DragonForce Teams C2 abuse:** While this is a network-level threat, any malicious files delivered via Teams channels would be caught by MetaDefender's **File Security** and **Deep CDR** before reaching user endpoints.
- **Orphaned AI agent risks:** MetaDefender **Identity Security** capabilities help organizations discover and govern AI agent permissions across the SaaS ecosystem.

🔗 **Reference:** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
