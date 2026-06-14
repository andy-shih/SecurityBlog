---
title: "CISO Daily Digest: Vercel Breach & SGLang RCE Lead Monday's Cyber Alerts (20260421)"
description: "Vercel employee AI tool access leads to data breach; SGLang CVE-2026-5760 exposes RCE via malicious GGUF models; CISA adds 8 flaws to KEV with federal deadlines; Chinese APT targets Indian banks and Korean policy circles; NGate campaign targets Brazilian NFC payments"
pubDate: 2026-04-21
tags: ["CISO Daily Digest", "cybersecurity", "threat intelligence"]
author: "Security Solutions Team"
featured: true
---

## Vercel Data Breach via AI Tool — A Cautionary Tale for Third-Party AI Access

Cloud development platform Vercel suffered a data breach after an employee's third-party AI tool account was compromised. The incident underscores the growing risk surface created by AI tool integrations in development environments. Attackers leveraged the compromised AI tool access to exfiltrate sensitive corporate data, raising serious questions about AI supply chain security and the principle of least privilege for AI assistants.

The breach is believed to have originated from the earlier security incident at AI company Context, which was hit by infostealer malware two months prior — illustrating how AI supply chain attacks can cascade through the ecosystem.

🔗 **參考資料：** Vercel Hack Coverage ([Dark Reading](https://www.darkreading.com/application-security/v), [Xakep](https://xakep.ru/2026/04/21/vercel-hack/))

---

## 本週活躍威脅

📌 **SGLang CVE-2026-5760 — RCE via Malicious GGUF Models (CVSS 9.8)**

A critical remote code execution vulnerability in the SGLang AI inference framework allows attackers to execute arbitrary code by crafting malicious GGUF model files. The **CVSS 9.8** flaw can be triggered simply by loading a malicious model file, making it a severe supply chain risk for AI/ML pipelines.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/sglang-cve-2026-)

📌 **CISA Adds 8 Exploited Flaws to KEV — Federal Deadline Set for May 2026**

CISA added **8 newly exploited vulnerabilities** to its Known Exploited Vulnerabilities (KEV) catalog, requiring all federal agencies to patch by May 2026. Among the additions are flaws in Apache ActiveMQ currently under active attack, with approximately **6,400 unpatched servers** still exposed.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/cisa-adds-8-expl)

📌 **Chinese APT Targets Indian Banks & Korean Policy Circles**

A Chinese state-sponsored APT group has been observed targeting financial institutions in India and policy research organizations in South Korea. The campaign uses sophisticated spear-phishing and custom malware to **exfiltrate sensitive financial and geopolitical intelligence.**

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-brea)

📌 **NGate Campaign Trojanizes HandyPay App to Steal NFC Data in Brazil**

The NGate campaign targets Brazilian users by trojanizing the legitimate HandyPay payment app to **steal NFC data and payment credentials.** The malware intercepts NFC transactions to clone contactless payment cards, enabling physical payment fraud.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/ngate-campaign-t)

📌 **Operation PowerOFF Takes Down 53 Domains, IDs 75,000 DDoS Clients**

Law enforcement's Operation PowerOFF disrupted **53 domains** involved in DDoS-for-hire services and identified **75,000 clients** who purchased these services. The operation marks one of the largest takedowns of booter/stresser services to date.

🔗 **Reference:** [Xakep](https://xakep.ru/2026/04/20/new-poweroff/)

📌 **Google Patches Antigravity IDE Flaw — Prompt Injection Code Execution**

Google fixed a critical flaw in its Antigravity AI development tool that enabled **prompt injection leading to remote code execution.** The vulnerability allowed attackers to bypass sandbox protections and execute arbitrary commands through crafted prompts.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/google-patches-a)

## OPSWAT 能做什麼

The Vercel breach underscores the need for **multi-layered file security** in CI/CD pipelines. MetaDefender's **Content Disarm and Reconstruction (CDR)** technology can neutralize weaponized AI model files (GGUF, Safetensors) and development artifacts, while **MetaDefender ICAP Server** integrates with web proxies to scan all file uploads/downloads for malware — including AI tool integrations.