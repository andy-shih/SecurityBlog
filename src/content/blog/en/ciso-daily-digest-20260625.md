---
title: "CISO Daily Digest: Anthropic Accuses Alibaba of Largest-Known AI Model Distillation Attack (20260625)"
description: "Anthropic accuses Alibaba of orchestrating the largest known AI model distillation attack, using 25,000+ fake accounts to extract 28.8M Claude exchanges; Cisco SD-WAN zero-day CVE-2026-20245 exploited 2+ months before disclosure per Mandiant; CISA warns Lantronix EDS5000 CVE-2025-67038 actively exploited; KDDI data breach exposes 14.22M email credentials across 6 Japanese ISPs; FortiBleed leak affects 86,000 Fortinet devices; OpenClaw malicious skills threaten AI supply chain."
pubDate: 2026-06-25
tags: [anthropic, alibaba, ai-distillation, ai-governance, cisco, sd-wan, cve-2026-20245, lantronix, cisa-kev, fortibleed, kddi, data-breach, supply-chain, openclaw, gaslight-malware, cordyceps, ciso-daily-digest]
author: "Security Solutions Team"
featured: true
---

## Anthropic Accuses Alibaba of Largest-Known AI Model Distillation Attack

Anthropic today formally accused Alibaba of orchestrating the **largest known AI model distillation attack**, alleging the Chinese tech conglomerate used **over 25,000 fraudulent accounts** to systematically extract capabilities from Claude between **April and June 2026**. In a letter sent to U.S. Senators Elizabeth Warren and Tim Scott, Anthropic detailed **28.8 million Claude API exchanges** traced to the campaign, calling it an "industrial-scale" theft of AI intellectual property.

The allegations mark the **first major enforcement test of U.S. AI export controls**, which restrict the transfer of frontier AI model weights and capabilities to foreign adversaries. Anthropic is urging the U.S. government to intervene, warning that export controls alone cannot prevent "distillation" attacks — where model outputs are siphoned through API access to reverse-engineer capabilities. The White House has been notified, and the incident is expected to accelerate regulatory action on AI model security.

Alibaba has denied the allegations, with Chinese state-linked media dismissing the claims as "lacking substance" and rooted in geopolitical competition. The incident comes amid broader U.S.-China tensions over AI leadership, including the recent **Fable 5 export ban** and China's unveiling of its own Mythos-class models.

🔗 **Reference:** Coverage from ([Bloomberg](https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models), [Reuters](https://www.reuters.com/technology/anthropic-claims-alibaba-unlawfully-copied-claudes-capabilities-2026-06-24/), [The Information](https://www.theinformation.com/briefings/anthropic-accuses-alibaba-illicit-access-claude-models), [Financial Times](https://www.ft.com/content/antrhopic-alibaba-distillation-2026), [Nikkei Asia](https://asia.nikkei.com/tech/anthropic-accuses-alibaba-largest-known-distillation-attack))

### Why This Reshapes AI Governance

The scale and sophistication of this attack represents a **paradigm shift in AI intellectual property theft**. Unlike traditional IP theft, distillation attacks exploit the **open API access model** of frontier AI services — the same access that powers legitimate enterprise AI adoption. Anthropic's letter reveals that the attackers employed **sophisticated credential rotation, IP address hopping, and behavioral mimicry** to evade detection over a **3-month period**, suggesting state-backed operational capability.

The incident has immediate implications for **AI vendor risk management**. Organizations deploying Claude — particularly in regulated industries — must now scrutinize their API usage patterns and ensure that **anomalous access patterns** are flagged. For CISOs, the attack highlights a critical blind spot: API-based AI services represent an **asymmetric threat surface** where output monitoring, rather than just input filtering, is essential.

The episode also sets a precedent for **joint government-industry response** to AI model theft. Anthropic's direct notification to Congress signals that AI companies are moving beyond self-regulation and demanding **enforcement action** — a development that will reshape compliance requirements for enterprises that operate AI models across jurisdictions.

🔗 **Reference:** Coverage from ([Bloomberg](https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models), [Reuters](https://www.reuters.com/technology/anthropic-claims-alibaba-unlawfully-copied-claudes-capabilities-2026-06-24/), [Nikkei Asia](https://asia.nikkei.com/tech/anthropic-accuses-alibaba-largest-known-distillation-attack))

---

## Active Threats This Week

📌 **Cisco SD-WAN Zero-Day CVE-2026-20245 Exploited as Zero-Day — Mandiant Attributes to APT-Level Actor**

A threat actor exploited a high-severity Cisco Catalyst SD-WAN vulnerability as a **zero-day at least 2 months before disclosure**, according to new findings from Google-owned Mandiant. The attacker exploited CVE-2026-20245 (CVSS 7.8) via a **malicious CSV file upload** to escalate privileges to **full root-level shell control** (creating a "troot" account). Two distinct intrusion waves were detected: the first (late 2025-Jan 2026) exploited authentication bypass flaws, the second (March 2026) leveraged the zero-day. The actor deployed **anti-forensic techniques**, selectively deleting and restoring configuration files to avoid detection. The campaign targeted an unspecified **communications service provider**, with attackers exfiltrating SD-WAN fabric configuration before covering their tracks.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cisco-catalyst-sd-wan-zero-day-cve-2026.html) | [iThome](https://www.ithome.com.tw/news/176870)

📌 **CISA Warns Lantronix EDS5000 Critical Flaw CVE-2025-67038 Actively Exploited**

CISA added **CVE-2025-67038** (CVSS 9.8) to its Known Exploited Vulnerabilities (KEV) catalog, warning of **active exploitation** of a code injection flaw in Lantronix EDS5000 Series industrial serial-to-Ethernet devices. The vulnerability allows **unauthenticated remote attackers** to inject arbitrary OS commands via the username parameter in the HTTP RPC module, executed with **root privileges**. Disclosed by Forescout Vedere Labs as part of the "BRIDGE:BREAK" vulnerability set. CISA also flagged active exploitation of **3 Ubiquiti UniFi OS maximum-severity flaws** (CVE-2026-34908, CVE-2026-34909, CVE-2026-34910) for RCE and reverse shell deployment.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cisa-warns-critical-lantronix-eds5000.html) | [iThome](https://www.ithome.com.tw/news/176864)

📌 **KDDI Data Breach — 14.22M Email Credentials Exposed Across 6 Japanese ISPs**

Japanese telecom giant KDDI disclosed a major data breach after attackers exploited a **third-party software vulnerability** in the email system it provides to 6 ISP subsidiaries (BIGLOBE, Nifty, JCOM, STNet, Chubu Telecommunications, and KDDI Web Communications). Up to **14.22 million email accounts** — including passwords — may have been compromised, affecting both active and long-dormant accounts. KDDI discovered the unauthorized access on June 17 and patched the same day; the company is notifying affected users and urging immediate password resets.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176871)

📌 **Chrome Ad Blocker with 10M+ Installs Found with Dormant Script Injection Capability**

Security researchers at Island discovered that a popular Chrome extension, **Adblock for YouTube** (10M+ installs, Chrome Web Store Featured badge), contains architectural capabilities for **arbitrary JavaScript execution on any website** — activatable via a single server-side configuration change without any extension update, store review, or visible user indication. While currently dormant, the capability represents a **critical supply-chain risk** for millions of users, enabling potential credential theft, session hijacking, and data exfiltration.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/chrome-ad-blocker-with-10m-installs.html)

📌 **Gaslight macOS Malware — North Korea-Linked Prompt Injection Attacks AI Analysis Tools**

A new **Rust-based macOS infostealer** dubbed **Gaslight** has been discovered embedding **prompt injection payloads** designed to trick malware analysts' AI tools into aborting analysis. Attributed with high confidence to **North Korea-linked threat actors**, the malware uses a **Telegram bot API C2 channel** and features a kill-chain component that deploys cascading fake system-failure messages to confuse LLM-assisted triage agents.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/new-gaslight-macos-malware-uses-prompt.html)

📌 **Cordyceps CI/CD Flaws Expose 300+ GitHub Repos to Supply-Chain Attacks**

Researchers at Novee Security disclosed a class of CI/CD workflow weaknesses codenamed **Cordyceps**, affecting organizations including **Microsoft, Google, Apache, and Cloudflare**. The flaw allows **any unauthenticated user** to forge approvals, push code, and steal credentials across **300+ exploitable high-impact repositories**. A scan of 30,000 repositories revealed the pattern enables **attacker-controlled code execution** and supply-chain compromise with severe downstream impacts.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html)

📌 **FortiBleed Leak Exposes 86,000 Fortinet Devices — Credential Data in the Wild**

The **FortiBleed** data leak continues to expand, with analysis revealing **86,000 Fortinet devices** affected worldwide. The leaked data includes device credentials and configuration information, enabling potential **persistent access** to compromised FortiGate appliances. Taiwan ranks **third globally** in number of affected devices. CISA has issued specific mitigation guidance requiring password resets and PBKDF2 hash migration.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/06/24/fortibleed-analisys/)

📌 **More Malicious OpenClaw Skills Threaten AI Supply Chain**

Dark Reading reports an increase in **malicious OpenClaw skills** being distributed through ClawHub, the skills marketplace for the OpenClaw AI agent framework. The malicious skills target **AI supply chain integrity**, with potential for code execution and data exfiltration in AI agent deployments.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/malicious-openclaw-skills-clawhub-threaten-ai-supply-chain)

📌 **Ubiquiti UniFi OS Three Full-Score RCE Flaws Exploited in the Wild**

CISA confirmed active exploitation of **three maximum-severity vulnerabilities** in Ubiquiti UniFi OS (CVE-2026-34908, CVE-2026-34909, CVE-2026-34910) to deploy commodity malware. The chain enables **command injection, path traversal, and unauthorized system changes** that together yield **full root reverse shell** in a single request. Patches were released by Ubiquiti late last month.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176863)

📌 **Attackers Abuse AWS Lambda Serverless Service to Hide HazyBeacon C2 Traffic**

Attackers are exploiting **stolen IAM credentials and permissive cloud permissions** to abuse **AWS Lambda Function URLs** as C2 relay infrastructure for the **HazyBeacon** backdoor. The campaign targets **Southeast Asian government networks**, leveraging the trust placed in cloud provider IP ranges to blend malicious traffic with legitimate cloud service communications.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176865)

📌 **Google Chrome 149 Patches 18 Vulnerabilities — 4 Critical**

Google released Chrome 149, patching **18 security vulnerabilities** including **4 rated critical**. The critical flaws affect **WebGL, Blink, and GPU** components, primarily memory safety issues. Users are urged to update immediately.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176876)

---

## How Can OPSWAT Help

The convergence of **AI supply-chain threats** (OpenClaw malicious skills), **CI/CD pipeline compromises** (Cordyceps), and **infrastructure-level attacks** (Chrome extension dormant injection, AWS Lambda C2 abuse) underscores the importance of **defense-in-depth at every layer of the software supply chain**.

- **MetaDefender Multi-Scanning** detects malicious packages, scripts, and AI skills across 30+ anti-malware engines, catching threats that single-engine solutions miss — critical for vetting OpenClaw skills and Chrome extensions
- **MetaDefender CDR (Content Disarm & Reconstruction)** strips active content (macros, scripts, embedded objects) from files traversing CI/CD pipelines, email gateways, and file upload portals — neutralizing weaponized CSV files (like the Cisco SD-WAN attack vector), documents, and archives
- **MetaDefender Cloud** provides real-time file reputation and deep content inspection for API-driven workflows, including AI model training pipelines and agentic AI toolchains

🔗 **Learn more at [opswat.com](https://www.opswat.com)**
