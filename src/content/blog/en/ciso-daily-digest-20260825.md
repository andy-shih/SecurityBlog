---
title: "CISO Daily Digest: CISA Flags Oracle WebLogic CVE-2026-21962 (CVSS 10.0) as Actively Exploited (20260825)"
description: "CISA added Oracle HTTP Server / WebLogic Server Proxy Plug-in flaw CVE-2026-21962 (CVSS 10.0, improper access control) to its KEV catalog on 2026-08-24 after evidence of active exploitation letting unauthenticated attackers modify critical data; plus 24 npm packages abusing unpkg mirrors for fake CAPTCHA phishing, Mirage2FA hitting 4,500 orgs via Microsoft 365, Forminator WordPress RCE (300K sites), and ToxicPanda 2.0 targeting 349 banking apps."
pubDate: 2026-08-25
tags: [CVE-2026-21962, Oracle, WebLogic, KEV, supply-chain, ransomware, APT, vulnerability]
author: "Security Solutions Team"
featured: true
---

## CISA Flags Oracle WebLogic CVE-2026-21962 (CVSS 10.0) as Actively Exploited

The U.S. CISA on Monday added **CVE-2026-21962** (CVSS score: **10.0**) — an improper access control flaw in **Oracle HTTP Server** and the **Oracle WebLogic Server Proxy Plug-in** — to its **Known Exploited Vulnerabilities (KEV)** catalog, citing confirmed active exploitation. An unauthenticated attacker with network access via HTTP can create, delete, or modify critical data on affected instances, or gain unauthorized access. Oracle shipped the fix in its July 2026 Critical Patch Update; CISA's addition (dateAdded 2026-08-24) means federal agencies now have a binding remediation deadline, and enterprises running WebLogic behind internet-facing proxies should treat this as urgent.

### Why This Reshapes Oracle Middleware Risk Governance

The flaw sits in the **Proxy Plug-in** — the component that fronts WebLogic with Oracle HTTP Server — so exploitation is reachable without direct app-server exposure. A CVSS 10.0 with unauthenticated, network-adjacent data manipulation is effectively a full compromise primitive for any org publishing WebLogic services. The rapid KEV addition (within weeks of patch release) signals attackers are already weaponizing it in the wild, compressing the patch window to near-zero for internet-facing deployments.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/08/actively-exploited-oracle-weblogic-flaw.html), [iThome](https://www.ithome.com.tw/news/178422))

---

## Active Threats This Week

📌 **miniOrange SAML Flaws Grant WordPress Admin Access** — Attackers are actively targeting authentication-bypass flaws in the popular **miniOrange SAML Single Sign-On** plugin; successful exploitation can elevate an attacker to **WordPress administrator**. Sites using SAML-based SSO should verify patch levels immediately.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/attackers-target-miniorange-saml-flaws.html)

📌 **Mirage2FA Surge Hits 4,500 US and EU Companies** — The **Mirage2FA** phishing kit is abusing **Microsoft 365** login flows to bypass MFA at scale, impacting an estimated **4,500 organizations** across the US and EU.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/mirage2fa-surge-hits-4500-us-and-eu.html)

📌 **24 npm Packages Abuse unpkg Mirrors for Fake CAPTCHA Phishing** — A supply-chain campaign published **24 malicious npm packages** that pull payloads from **unpkg** mirrors and render fake **Cloudflare CAPTCHA** pages to harvest credentials.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/24-npm-packages-abuse-unpkg-mirrors-to.html)

📌 **E4del and PINHOLE RATs Use FTP Banners as Dead Drops** — Two new remote-access trojans, **E4del** and **PINHOLE**, encode command-and-control instructions inside **FTP server banners**, turning a benign protocol field into a covert dead-drop channel.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/e4del-and-pinhole-rats-turn-ftp-banners.html)

📌 **WhatsApp Adds Multiple Passkeys for Phishing-Resistant Sign-Ins** — **WhatsApp** (iOS/Android) now supports **multiple passkeys**, giving users phishing-resistant, device-bound authentication as a counter to SIM-swap and OTP theft.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/whatsapp-adds-multiple-passkeys-for.html)

📌 **Marimo Notebook Flaw Runs MCP Commands Before Cells Execute** — A vulnerability in the **Marimo** Python notebook can execute **MCP** tool commands during edit mode before cells are run, enabling unexpected code execution from an opened notebook.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/marimo-notebook-flaw-could-run-mcp.html)

📌 **SilkParasite Targets Central Asian Governments with 5 New RATs** — A cyber-espionage campaign attributed to **SilkParasite** is distributing **five previously unseen remote-access trojans** against government entities in Central Asia.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178431)

📌 **RedC2 4.0 Backdoors Linux Developers via Malicious npm Packages** — The **RedC2 4.0** framework targets **Linux** developers, delivering a backdoor through trojanized **npm** packages.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178428)

📌 **Microsoft Defender BTR.sys Driver Abused to Bypass EDR** — A built-in **Microsoft Defender** component driver, **BTR.sys**, can be abused by attackers to **bypass EDR** controls and tamper with files and registry keys.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178427)

📌 **ToxicPanda 2.0 Android Banking Trojan Targets 349 Financial Apps** — The **ToxicPanda** banking trojan has matured into an enterprise threat, now attacking **349 financial applications** on Android.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178394)

📌 **RAVEN Open-Source Red-Team Framework Chains Elasticsearch/Kibana for Persistence** — The **RAVEN** framework integrates **Elasticsearch** and **Kibana** into an attack chain that exfiltrates data and establishes persistent access.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178392)

📌 **GEEKOM Driver Package Flagged with Asruex Trojan (6 AMD Models)** — Legacy driver bundles for **GEEKOM** mini-PCs were found to contain the **Asruex** trojan, affecting **six AMD-based models**.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178386)

📌 **MongoDB Patches 32 Flaws Including BI Connector ODBC RCE** — **MongoDB** addressed **32 vulnerabilities**, among them a critical **remote code execution** flaw in the **BI Connector ODBC Driver**.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178407)

📌 **Elementor Pro RCE Impacts 10M+ WordPress Sites** — A **remote code execution** vulnerability in the **Elementor Pro** WordPress plugin affects over **10 million** installations.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178405)

📌 **Poland CERT Details Energy-Sector OT Intrusion via Private APN** — **Poland CERT** disclosed new details of a late-2025 attack on energy facilities, the first observed case of attackers using a **Private APN** for lateral movement into **OT** networks.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178393)

📌 **Alabama Subpoenas OpenAI in Hugging Face Breach Probe** — The state of **Alabama** issued a subpoena to **OpenAI** as part of its formal investigation into the **Hugging Face** intrusion.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178425)

📌 **BizLink (貿聯) Discloses Cyberattack on Information Systems** — Taiwanese manufacturer **BizLink** confirmed portions of its information systems were hit by a **network attack**, triggering incident response and isolation measures.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178357)

📌 **Anthropic Ships Mythos 5 Security Capabilities for Enterprise Vulnerability Remediation** — **Anthropic** released **Mythos 5** security features that let enterprise customers scan and remediate vulnerabilities directly.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178369)

📌 **OWASP 2026 LLM Top 10 Adds Incident Data; Agentic Over-Delegation Rises to #3** — The **OWASP 2026 LLM Top 10** now incorporates real incident data, with **agentic AI over-delegation** climbing to the third position.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178423)

📌 **Microsoft Teams Adds Admin Controls to Block External Meeting Bots** — **Microsoft Teams** now lets administrators directly block external **AI meeting assistants / bots**, addressing uncontrolled data exposure.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178430)

📌 **Encrypted Instructions Can Fool AI Assistants Like Grok and Gemini** — Researchers showed that **encrypted/steganographic instructions** embedded in content can bypass safety guardrails in **Grok** and **Gemini**.

🔗 **Reference:** [Malwarebytes](https://www.malwarebytes.com/blog/ai/2026/08/encrypted-instructions-can-fool-ai-assistants-like-grok-and-gemini)

📌 **Forminator WordPress Plugin RCE Threatens 300,000 Sites** — A **remote code execution** flaw in the **Forminator** WordPress plugin exposes roughly **300,000** websites (per xakep.ru reporting).

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/25/forminator-rce/)

📌 **ShinyHunters Breaches Security Firm ReliaQuest** — The **ShinyHunters** extortion group attacked **ReliaQuest**, a cybersecurity vendor, in a notable targeting of a defender.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/25/reliaquest-attack/)

📌 **AliExpress Accused of Silent WebAudio Fingerprinting Surveillance** — **AliExpress** was accused of tracking users via inaudible **WebAudio** signals for browser fingerprinting (per xakep.ru).

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/25/webaudio-fingerprinting/)

---

## How Can OPSWAT Help

Several of today's threats are **file-borne or package-borne**: trojanized **npm packages** (RedC2 4.0, the 24-package campaign), malicious **WordPress plugins** (Elementor Pro, miniOrange SAML, Forminator), and a **driver bundle** carrying the Asruex trojan (GEEKOM). **OPSWAT MetaDefender** addresses these at the file layer:

- **Multi-Scanning** — 30+ anti-malware engines screen every package, plugin, and driver before it reaches production or developer workstations, catching trojanized npm/WordPress artifacts that single-engine AV misses.
- **Deep CDR (Content Disarm & Reconstruction)** — sanitizes documents, archives, and installers, stripping active content and embedded macros while preserving usability, neutralizing payloads delivered through supply-chain channels.
- **Vulnerability detection** — identifies known-vulnerable components (e.g., the Elementor Pro / Forminator RCE classes) inside uploaded or distributed files.

For AI-agent pipelines pulling untrusted packages (the RedC2 and npm-campaign pattern), enforcing MetaDefender inspection on every artifact entering the build and runtime environment closes the most direct path attackers are exploiting today.
