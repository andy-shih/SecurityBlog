---
title: "CISO Daily Digest: Check Point VPN Zero-Day Crisis (20260606)"
description: "Check Point VPN flaw actively exploited by Qilin ransomware; US CISA orders 4-day patch mandate; Silent Ransom Group targets US law firms; Meta blocks NSO WhatsApp phishing; Anthropic warns Mythos can weaponize patches."
pubDate: 2026-06-06
tags: ["vpn", "zero-day", "ransomware", "supply-chain", "nation-state"]
author: "Security Solutions Team"
featured: true
---

## Check Point VPN Zero-Day (CVE-2026-50751) Fueling Ransomware Attacks

A critical zero-day vulnerability in Check Point VPN gateways has become the center of an escalating crisis, with the **Qilin ransomware group** actively exploiting it and CISA issuing an emergency directive for federal agencies to patch within **4 days**.

- CVE-2026-50751 targets the **IKEv1** implementation in Check Point Quantum Security Gateway and CloudGuard Network Security, allowing attackers to bypass password authentication entirely
- The flaw has been exploited **since early May 2026**, with multiple threat actors observed leveraging it for initial access
- **Qilin ransomware** has specifically weaponized this vulnerability in active campaigns against enterprise targets
- CISA added CVE-2026-50751 and related CVE-2026-50752 to the **Known Exploited Vulnerabilities (KEV)** catalog with an urgent remediation deadline
- Check Point confirmed active exploitation and released hotfixes; organizations are urged to apply patches immediately and review VPN logs for signs of unauthorized access

The speed at which this vulnerability moved from disclosure to active ransomware exploitation — and the aggressive federal response mandating 4-day remediation — underscores the criticality of VPN infrastructure as an attack surface. Security teams should immediately verify patch status on all Check Point VPN appliances, review authentication logs for unusual IKEv1 traffic, and implement network segmentation to limit lateral movement from VPN access points.

🔗 **References:** Comprehensive coverage ([The Hacker News](https://thehackernews.com/2026/06/critical-check-point-vpn-flaw-exploited.html) | [DarkReading](https://www.darkreading.com/vulnerabilities-threats/check-point-vpn-flaw-exploited-early-may) | [iThome: Qilin Ransomware Activity](https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtTUM2YXZPQjBuZkt4RVJsUVdnNEtjdjZYb2xIY2dQVVFmclA3bUEzblNyQVZJcThOQ05jdmprRmFvOGxYNW96cUlqSkxZUQ?oc=5) | [iThome: US Mandates 4-Day Patch](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RcUtkdWNKX09vVWhsNGllSXpWS0x6RXZEZXo4QWZnc1pZcHg4RUlhMDRwWEV2T093Qks1ZG5ldTZZTDZZVk1YZ2MzeVdFUQ?oc=5))

## Active threats this week

📌 **Silent Ransom Group Hits US Law Firms in Escalating Extortion Attacks**

A threat group tracked as **Silent Ransom** is conducting an escalating series of extortion attacks against **US law firms**, exfiltrating sensitive client data and threatening public disclosure. The group employs a combination of **phishing, credential theft, and VPN exploitation** for initial access. Law firms — traditionally under-secured relative to other critical infrastructure sectors — are urged to implement multi-factor authentication, segment networks, and conduct regular backup testing.

🔗 **Reference:** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/silent-ransom-us-law-firms-extortion-attacks)

📌 **Meta Blocks NSO Group's New WhatsApp Phishing Attack, Files Contempt Order**

Meta has disrupted a **new phishing campaign** by the **NSO Group** targeting WhatsApp users, and has filed a contempt order alleging violation of previous legal agreements. The attack employed **zero-click exploits** delivered through malicious message attachments. Organizations using WhatsApp for business communications should ensure devices are updated and monitor for unusual account activity.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/meta-blocks-nso-groups-new-whatsapp.html)

📌 **Iranian Hackers Active Despite Ceasefire Agreement**

Despite Iran's signing of a ceasefire agreement, Iranian-aligned hacker groups continue to conduct offensive cyber operations targeting **critical infrastructure, government agencies, and defense contractors** globally. The disconnect between diplomatic agreements and continued cyber aggression highlights the importance of maintaining robust defensive postures regardless of geopolitical developments.

🔗 **Reference:** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/iran-signed-ceasefire-hackers)

📌 **LiteLLM Flaw (CVE-2026-42271) Exploited in the Wild Leading to Unauthenticated RCE**

A critical vulnerability in **LiteLLM**, an open-source LLM proxy and API management tool, is being actively exploited, enabling attackers to chain it into **unauthenticated remote code execution (RCE)**. Organizations using LiteLLM in AI application pipelines should apply patches immediately and restrict network access to management interfaces.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/litellm-flaw-cve-2026-42271-exploited.html)

📌 **C0XMO Botnet Exploits Old DD-WRT Vulnerabilities to Infect DVRs and Android Devices**

A botnet tracked as **C0XMO** is exploiting **legacy DD-WRT firmware vulnerabilities** to infect DVRs, Android devices, and IoT hardware at scale. The botnet is being used for **DDoS attacks and cryptocurrency mining**. Organizations should inventory and segment IoT devices, and replace any devices running end-of-life firmware.

🔗 **Reference:** [iThome: C0XMO Botnet](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kR1kyZldaeEluajY2bUFnMVFibmgtcDRSTmJEWFdzMnVDZmVDQVVFZndhSklSeHFYOTZGUnZGaEF4WVkyNDJfZmZwa2pHQQ?oc=5) | [iThome: Nday Vulnerabilities](https://news.google.com/rss/articles/CBMiY0FVX3lxTFBtSDY3V2ZlaHNLWWFiNzBybElub2F1SDdNNzFRaUg4VjQ0aUtrR3p3cGxZR0lsdGVtaExVRmJlbHdmRy11Y0o1NDdrWklubi14amlSOFo3Y3k0TTB3WVhvNFE0WQ?oc=5)

📌 **Malicious Chrome Extensions Target AI Platform Interactions**

Threat actors have deployed **malicious Chrome extensions** designed to monitor and exfiltrate user interactions with **AI platforms** including ChatGPT, Claude, and Gemini. These extensions capture conversation data, API keys, and sensitive information entered into AI interfaces. Security teams should audit browser extension inventories and restrict extension installation through group policy.

🔗 **Reference:** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE93NkxRY19vVkc5LXFKWlI3ckJzWXpoQWczTG5LUkV0T01TdXRRMHJfOUdVd2IxcHdhNktFNWlHMklVaUNzZkREd3dTVFZLdw?oc=5)

📌 **MariaDB Patches Multiple Vulnerabilities Including CVSS 10.0 Critical Flaw**

MariaDB released security updates addressing **multiple vulnerabilities**, including one rated **CVSS 10.0 (critical)** that could allow complete database compromise. All MariaDB deployments should be updated immediately, with particular focus on internet-facing database instances.

🔗 **Reference:** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWOEpyU0FYbVN0aTQ1ZHJmbUtsM3JDMm1EbG1oZVY2OUhsR2h6OUI4M0ZZaFdFWnNud2h4ZGpFaC1PdzRvZ003ZHZ5R2pQQQ?oc=5)

## OPSWAT Section

The Check Point VPN zero-day exploitation by Qilin ransomware underscores the critical importance of multi-layered file inspection at the network perimeter. OPSWAT MetaDefender's **Deep Content Disarm and Reconstruction (Deep CDR)** technology can neutralize threats in VPN-delivered files by stripping potentially malicious objects while preserving document usability. Combined with **multi-scanning across 30+ anti-malware engines**, OPSWAT solutions provide defense-in-depth against zero-day exploits targeting VPN infrastructure.
