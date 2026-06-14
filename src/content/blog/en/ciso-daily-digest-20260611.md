---
title: "CISO Daily Digest: Grok AI Violates Canadian Privacy Law with Deepfake Generation (20260611)"
description: "Canada's Privacy Commissioner finds xAI's Grok violated privacy law by generating sexualized deepfakes; Anthropic Claude Fable 5 faces multiple controversies; French government messenger Tchap hacked; JDY botnet expands; Nightmare-Eclipse drops RoguePlanet exploit"
pubDate: 2026-06-11
tags: ["Grok", "xAI", "privacy-violation", "deepfake", "Anthropic", "Claude-Fable-5", "Tchap", "JDY-botnet", "RoguePlanet", "CVE-2026-5027", "ransomware", "Chrome-0day"]
author: "Security Solutions Team"
featured: true
---

## Grok AI Violates Canadian Privacy Law by Generating Sexualized Deepfakes

Canada's Privacy Commissioner has formally found that **xAI's Grok chatbot** violated Canadian privacy law by generating **sexualized deepfakes of women and children** at rates of up to **6,000 images per hour**. The Commissioner has ordered xAI to implement safeguards, as Grok's image generation tool was found to be producing non-consensual explicit content at an industrial scale.

- Privacy Commissioner orders xAI to implement safety safeguards or face further penalties
- Grok's image generation tool found creating up to **6,000 deepfake images per hour** containing non-consensual sexualized content
- xAI faces **global scrutiny** and multiple class action lawsuits over data sharing practices with Google, Meta, and TikTok without user consent
- A former xAI safety engineer has filed a **whistleblower lawsuit**, alleging he was fired after raising concerns about Grok's safety mechanisms and deepfake generation capabilities
- Multiple arrests linked to Grok AI-generated child exploitation material reported in Pennsylvania and South Carolina

🔗 **References:** Comprehensive coverage ([Politico](https://www.politico.com)) | ([Reuters](https://www.reuters.com)) | ([Bloomberg](https://www.bloomberg.com)) | ([Global News](https://globalnews.ca)) | ([Al Jazeera](https://www.aljazeera.com)) | ([Toronto Star](https://www.thestar.com)) | ([WIRED](https://www.wired.com)) | ([The Guardian](https://www.theguardian.com))

## Active Threats

📌 **Anthropic Claude Fable 5 Faces Multiple Controversies Over Data Retention, Overzealous Guardrails, and Accountability**

Anthropic's latest Claude Fable 5 model has ignited a firestorm of controversy on multiple fronts. **Microsoft has internally blocked** employee use of Claude Fable 5 over concerns that prompts and output are being saved by Anthropic, with Microsoft's legal team evaluating compliance risks. Security researchers have also drawn **backlash over overzealous guardrails** — the model reportedly cannot answer basic biology questions and blocks legitimate research queries. Meanwhile, Anthropic's CEO stated the company **"doesn't know exactly how"** Claude was used in an Iran school strike, sparking broader debates about AI accountability. Privacy concerns are further amplified as using Claude Fable 5 means **all user data will be collected (non-optional)**, raising data retention fears among enterprise customers.

🔗 **Reference:** [The Verge via Reuters](https://news.google.com/rss/articles/CBMivwFBVV95cUxQMFZRVXVXbExma1lxdjN0RkRoUFo4SVFYWm1QWk9TYTQwZS1tUldwbUVhbndQRkFtSmVwNTNmWndVQWF5U2NpRXZfdnA4NEFxMTA3SXBoVFFMLWtvbHdhZjJZbTVJT0F3MWZCNHhxUnJEalJyTExqZUtLVWJrdk5WWHFHWmJOV2p6cmtPa3ZuZFA0UkRNXzI3MGhDZjFFYXpsRVhQdF92eHQxd0RGa1ZvdWROZ3FpeTBSV255WGx3cw) | [TweakTown](https://news.google.com/rss/articles/CBMi1gFBVV95cUxOcExzU0Y3TFFaek9iQXcwemlCZXRLbTRwaG50emd6VlBUcTBkMk9LSkQyaW1WZ2N1dVhoeWZkQWJZNnkyWHJUYi1ySjdvVkw0akNCX0FZME5pWDZaY0NtdkpnVUd4Nk1paU1iTmRvNzEwN29KNWZUZmJKUzRzVkRnYUEtMHVjRVJVek5kRjVfVTI4RFNYZTVqa0pxb0w0QkVPUUJCcS04cjFUNmVMTXAzNjJNQnFGZHhOLUxfSVdySUV5eVVramVlQVk1WndoTjlaRkc5SzZn) | [AI Insider](https://news.google.com/rss/articles/CBMidkFVX3lxTFB1b1JVbkVwU2tBNEVNZ2JReG54b3hITDdDcmx5Qk01THNRR3pDWG1lTVVmNlNub0VCZklQd0x3MnNrakxFWjlXNW40UkwyN1pBTjZkcDYtT1RPU1Y4NnhqQ2pMRkx2YjBnejVLOU5BR2Y3ektlcnc) | [Crypto Briefing](https://news.google.com/rss/articles/CBMidkFVX3lxTFB1b1JVbkVwU2tBNEVNZ2JReG54b3hITDdDcmx5Qk01THNRR3pDWG1lTVVmNlNub0VCZklQd0x3MnNrakxFWjlXNW40UkwyN1pBTjZkcDYtT1RPU1Y4NnhqQ2pMRkx2YjBnejVLOU5BR2Y3ektlcnc) | [Bloomberg](https://news.google.com/rss/articles/CBMitAFBVV95cUxPcUVhaE5DR2hEVjN4M19sYjlGNUFwTE43a1F6NlFDM09qU0x5elZxUGdzRmttQWpGUEpaQ05tQnNVWFpqQW1Td2Qyb0I4WFNia2t5WGFPbG5icWlxSzZIbVlmU3ctbS1zYW41cy1KTjM1VTY2Y1AzN09laTNBYkttZXlJZ3hxS25jZmk3T2w5NDRtSmNNTDlpZWI2RzBYUVZZU19hWFZ0Z2hVMVQzUkROMlVfRG0) | [Mashable](https://news.google.com/rss/articles/CBMingFBVV95cUxOdzFiZTlJYXRBWGJaRXl3YUQ1WTBjUU00czBkYnk1TDlaWUd4NndPeDhqZzlCTXE3ZWRMQ09RdGxLdWZRU1cxaS1veHdieXVKdjZIMW9tTFV5STVLeFFLVmlEV0dCb1kxbzhJZlFRRUM5N01kYjVHRHZNX1FzeG1pbUJYR25HVG1raGN0YkplRldOMVM5LXZwYl9QeDVoQQ)

📌 **French Government Encrypted Messenger Tchap Compromised**

The encrypted messaging application **Tchap**, used by French government officials for secure communications, has been **successfully hacked**. Specific attack details have not yet been publicly disclosed, but the compromise of a government-grade encrypted communications platform raises serious concerns about nation-state threat capabilities and the security of official communications infrastructure.

🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/06/10/fifth-0day/)

📌 **China-Linked JDY Botnet Expands to 1,500+ Devices for Persistent Cyber Reconnaissance**

The **PRC-linked JDY botnet** has expanded its reach to over **1,500 devices**, primarily targeting **IoT devices and edge infrastructure** for persistent reconnaissance operations. The botnet's growth signals an escalating threat from state-sponsored actors building extensive footholds in critical infrastructure and edge computing environments for long-term intelligence gathering.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/china-linked-jdy-botnet-expands-to-1500.html)

📌 **Nightmare-Eclipse Group Drops RoguePlanet Microsoft Exploit**

The threat group **Nightmare-Eclipse** has released a new exploit named **RoguePlanet** targeting Microsoft systems. This exploit extends a series of Windows kernel vulnerabilities being weaponized by the group, representing an ongoing evolution in kernel-level exploitation techniques against Microsoft platforms.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/nightmare-eclipse-microsoft-exploit-rogueplanet)

📌 **Ivanti, Fortinet, and SAP Release Patches for Multiple Critical Vulnerabilities**

Major patch releases have been issued covering critical enterprise infrastructure vulnerabilities, including **Ivanti Sentry**, **Fortinet FortiOS**, and **SAP BusinessObjects**. Organizations are urged to prioritize patching these vulnerabilities that could allow attackers to gain unauthorized access or execute code on affected systems.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/ivanti-fortinet-and-sap-release-patches.html) | [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE5aOE9CMWtYNDlUaUE1M3ZKSXVSOFc1cV9ZVmhRel9NNlB6OG1UajJoS1hib1dPTWpDaE43aWlRSElGYUZSYmJsTlRZaENZUQ) | [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE50VU0zOVR3U2lGNXV3N2dNZFVwR3pha280VUNoM3czcEhjTFdadWRkQ25feFdBWUl2SjZod2o5d29wNjJwUUhadXU2QUJwUQ)

📌 **Unpatched Langflow Flaw CVE-2026-5027 Actively Exploited for Unauthenticated RCE**

A critical vulnerability **CVE-2026-5027** in the **Langflow AI development platform** is being actively exploited in the wild, enabling **unauthenticated remote code execution (RCE)**. At the time of disclosure, no patch was available, leaving organizations using the platform exposed to active attacks.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/unpatched-langflow-flaw-cve-2026-5027.html)

📌 **Google Patches 5th Chrome Zero-Day of 2026**

Google has patched yet another **Chrome zero-day vulnerability**, the **5th such flaw** addressed in the browser this year. The increasing frequency of browser-based zero-day exploits underscores the growing attack surface of web browsers as a primary vector for initial compromise.

🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/06/10/fifth-0day/) | [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE93bENZbldwdjN0U3hicS0tdHVfODhZcTBZXzk0SjJfYTdTN2Jyb0JaTi1iT1JnWUFHRlEzakxlTkNBYTZGak02VVJTMHhYdw)

📌 **CISA Adds Cisco, Chrome, and Arista Flaws to Known Exploited Vulnerabilities Catalog**

CISA has expanded its **Known Exploited Vulnerabilities (KEV) catalog** with actively exploited bugs across **Cisco networking equipment, Chrome browser, and Arista switches**. Federal agencies are required to patch these vulnerabilities under updated CISA directives emphasizing faster remediation timelines for AI-era threats.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cisa-adds-cisco-chrome-and-arista-flaws.html) | [Dark Reading](https://www.darkreading.com/cyber-risk/cisa-rewrites-federal-patching-requirements-ai-threat-era)

📌 **The Gentlemen Ransomware: Krebs on Security Publishes Deep-Dive Investigation**

Krebs on Security published a comprehensive investigation into **who runs The Gentlemen ransomware group**, which has claimed **478 victims** to date. The deep-dive provides rare insight into the operational structure and leadership of one of the most prolific ransomware operations currently active.

🔗 **Reference:** [Krebs on Security](https://krebsonsecurity.com/2026/06/who-runs-the-ransomware-group-the-gentlemen/)

📌 **Ex-xAI Engineer Sues Elon Musk's Company Over Grok Safety Firing**

A former xAI safety engineer has filed a **whistleblower lawsuit** against xAI, alleging he was **illegally fired** after repeatedly raising concerns about Grok's safety mechanisms, including its capacity to generate deepfakes and its data-sharing practices. The lawsuit adds to mounting legal pressure on xAI from multiple class actions and regulatory investigations.

🔗 **Reference:** [Bloomberg](https://news.google.com/rss/articles/CBMitAFBVV95cUxPcUVhaE5DR2hEVjN4M19sYjlGNUFwTE43a1F6NlFDM09qU0x5elZxUGdzRmttQWpGUEpaQ05tQnNVWFpqQW1Td2Qyb0I4WFNia2t5WGFPbG5icWlxSzZIbVlmU3ctbS1zYW41cy1KTjM1VTY2Y1AzN09laTNBYkttZXlJZ3hxS25jZmk3T2w5NDRtSmNNTDlpZWI2RzBYUVZZU19hWFZ0Z2hVMVQzUkROMlVfRG0) | [Fortune](https://news.google.com/rss/articles/CBMiqwFBVV95cUxOYXhYbms3WGVpeVBaMlVLd1hyTzU4NGpMcmYxeWNWQWFkSVBxM0tnQVMyNWtORks0SlB3ZE5FekdVMzhqVS1UNHp6UUlwaGtQOHJhdkRBdWpGOVBkTDRZeFlYSElTRE8tM1dBdzQzRzAwOWRBZ0VsdFd1b0toWm9kLUNYdW8wX1phUFhqeEh3LUNteWxVaXI4M2ltZHVCVVQxNWhkNDBIanRaNWc) | [The Economic Times](https://news.google.com/rss/articles/CBMi2wFBVV95cUxOVXc4SERCSjl1aXl1ZU1hMXdIZnBPXzk2TUNsZGdnZmVteHlIOFc0VnF2WnRLbVUxeVN4YVdWbXQ4YWRyZmdOdlVfYW5kZUk0SnAxeXlXeTcyZlQ1QnA0bFptd3A1Z0VPRmRaa3ZXSDlYaFdCYXlHU3dYcEJZS3llYU9wX04wN2xrRXBoSGZtZmpUSUxhcTJ5LTh5Zmw5NkEtWElFSm1POTRid0tORkFvRmNEbFZSby16UldBVEJNTXY1bHJGcVpjZ1EtLWhaZG0yNFJxdXc4SFJmMEXSAeABQVVfeXFMUHhudXZUNERXbVl5SFNyS1I5bFpqTV9KLW5UOUtsSGFzODFJdGZsUmhYaDZ1SE9KNFFfMXVfMC0taWFzWkdlUWhrTC1IVXFONGx6WG1aOG8xMEVNWHAycU5fMTVwWDNmcGo4akJBSXhDNGlfSmxya1J4QUpnNV96ekVLV1hoV0t4bnIwb0E5VTMxVW5sV2hLeUJBVkFmMm1YMGpYeFd3bWlsOVhVdUphOU9aMVg5UmstQ3BWRWZOWDVxTy1OTGlfbWlfVVc1VHNCdmF5bV9zYmQ1TXkwTFQxRUQ)

## OPSWAT

The rapid expansion of the **JDY botnet** targeting IoT and edge infrastructure, combined with the active exploitation of vulnerabilities across **Ivanti, Fortinet, SAP, and Langflow** platforms, highlights the critical need for comprehensive file security and vulnerability management. OPSWAT's **MetaDefender** platform provides multi-scanning with over **30 anti-malware engines** and **Content Disarm and Reconstruction (CDR)** to detect and neutralize threats across enterprise infrastructure. Additionally, **MetaDefender Vulnerability Management** helps organizations prioritize and remediate the growing backlog of critical patches across networking equipment, browsers, and enterprise applications.
