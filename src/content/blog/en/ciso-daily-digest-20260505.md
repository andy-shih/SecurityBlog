---
title: "CISO Daily Digest: MOVEit Auth Bypass, DigiCert Breach & AI Security Governance (20260505)"
description: "Progress patches critical MOVEit Automation authentication bypass; DigiCert suffers social engineering breach exposing code signing certificates; Google, Microsoft, and xAI agree to US government AI model reviews; CYBERSEC 2026 opens in Taiwan"
pubDate: 2026-05-05
tags: ["CISO Daily Digest", "cybersecurity", "threat intelligence"]
author: "Security Solutions Team"
featured: true
---

**Progress Patches Critical MOVEit Automation Bug Enabling Authentication Bypass**

- **Progress Software** released an emergency patch for a critical authentication bypass vulnerability in **MOVEit Automation**, the enterprise file transfer solution
- The flaw allows attackers to bypass authentication entirely and gain unauthorized access to the file transfer management interface
- Given the history of the **MOVEit Transfer** mass-exploitation in 2023 (Clop ransomware campaign affecting thousands of organizations), this patch is considered urgent
- Organizations using MOVEit Automation are advised to patch immediately and review access logs for signs of prior compromise

🔗 **Reference:** Combined coverage ([The Hacker News](https://thehackernews.com/2026/05/progress-patches-critical-moveit.html), [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTFBHcDgwSTJUR0VDZUY5RS1TNW5K...))

### 本週活躍威脅

📌 **DigiCert Social Engineering Breach — EV Code Signing Certificates Exposed and Revoked**

Digital certificate authority **DigiCert** suffered a social engineering attack on its customer support system, leading to the exposure and subsequent revocation of **EV (Extended Validation) code signing certificates**. The breach undermines trust in the certificate ecosystem and affects software vendors who rely on DigiCert-issued certificates for authenticating their code.

🔗 **Reference:** [iThome](https://news.google.com/rss/articles/CBMiTkFVX3lxTE44QTIxM0NOVUZIWGlybjVSWXdm...)

📌 **Google, Microsoft, and xAI Agree to US Government Early Access to AI Models for Security Reviews**

In a landmark cybersecurity governance move, **Google DeepMind**, **Microsoft**, and **xAI** signed agreements with the U.S. government (via CAISI) to provide **early access to new AI models** for national security review before public release. The agreements come amid concerns about AI capabilities accelerating cyber offense and the potential for advanced models to discover zero-day vulnerabilities.

🔗 **Reference:** [Reuters](https://news.google.com/rss/articles/CBMiwgFBVV95cUxPYlJtWTJXeU5IZHd5UE1wdXZl...) | [Financial Times](https://news.google.com/rss/articles/CBMicEFVX3lxTE5HNnM3YldnTVdNVTlLNEl0MHlr...)

📌 **Phishing Campaign Hits 80+ Organizations Using SimpleHelp and ScreenConnect RMM Tools**

A widespread phishing campaign has compromised **over 80 organizations** by weaponizing legitimate remote monitoring and management (**RMM**) tools — **SimpleHelp** and **ScreenConnect**. Attackers used social engineering to trick IT staff into installing remote access tools, then moved laterally to deploy ransomware and exfiltrate data.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/phishing-campaign-hits-80-orgs-using.html) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/rmm-tools-stealthy-phi...)

📌 **ScarCruft Hacks Gaming Platform to Deploy BirdCall Malware on Android and Windows**

The North Korean-linked threat group **ScarCruft** (aka APT37) hacked a gaming platform to deploy the **BirdCall** malware simultaneously on **Android and Windows** devices. The campaign demonstrates APT groups' expanding cross-platform attack capabilities and their targeting of gaming communities for initial access.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/scarcruft-hacks-gaming-platform-to.html)

📌 **CrowdStrike Integrates Anthropic's Claude Opus 4.7 to Enhance Falcon Platform AI Capabilities**

**CrowdStrike** announced the integration of **Anthropic's Claude Opus 4.7** into the Falcon platform to enhance AI-driven threat detection and response. The partnership reflects the growing convergence of endpoint security platforms with large language model capabilities for natural language investigation and automated incident response.

🔗 **Reference:** [iThome](https://news.google.com/rss/articles/CBMiswFBVV95cUxOT1NMcTJsb1d0YlMtc3dhWVE2...)

### What OPSWAT Can Do

The MOVEit auth bypass, DigiCert certificate breach, and RMM tool phishing campaign all highlight the criticality of file-level inspection and certificate validation. OPSWAT's **MetaDefender Platform** provides multi-engine scanning for file uploads (including MOVEit traffic), **CDR** to neutralize weaponized documents, and **Proactive DLP** to detect unauthorized certificate access and data exfiltration. The platform also supports deep file inspection that can detect and block threats embedded in commonly attacked file transfer protocols.
