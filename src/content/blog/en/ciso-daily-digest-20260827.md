---
title: "CISO Daily Digest: Salesforce & Anthropic Launch 'Claudeforce' — Claude Embedded Inside CRM (20260827)"
description: "Salesforce and Anthropic launched 'Claudeforce' on Aug 26, 2026, embedding Claude directly inside Salesforce CRM so reps may never open the Salesforce app again, while Anthropic expanded Mythos 5 cybersecurity capabilities to partners. In threats: China-linked APT24 infiltrated Taiwan's advertising supply chain and planted malware on news and novel websites; CISA added Citrix NetScaler, Linux kernel, Microsoft SQL Server and Red Hat flaws to its KEV catalog; Spark RAT abused a vulnerable OPSWAT driver to disable endpoint security in Cambodia; and Ubiquiti patched 22 UniFi flaws including three CVSS 10.0 issues."
pubDate: 2026-08-27
tags: [Salesforce, Anthropic, Claudeforce, Claude, Mythos 5, APT24, CISA-KEV, NetScaler, Spark-RAT, OPSWAT, WordPress, Supply-Chain]
author: "Security Solutions Team"
featured: true
---

## Salesforce & Anthropic Launch 'Claudeforce' — Claude Embedded Inside CRM

On **August 26, 2026**, **Salesforce** and **Anthropic** announced **Claudeforce**, a deep product integration that puts **Claude** inside the Salesforce CRM workflow. Major outlets (VentureBeat, Reuters, TechRadar, qz) frame it as Salesforce moving its entire CRM *into* Claude — CEO Marc Benioff pitched it as the moment customers "will never need the Salesforce app again," a direct answer to his own warning that AI assistants threatened to make SaaS shells obsolete ("SaaSpocalypse"). Salesforce's Q2 earnings beat and raised annual-revenue guidance rode alongside the launch, and the deal extends the strategic tie-up that also includes Anthropic's reported **$45 billion** compute-rental agreement with Nscale.

The same window saw Anthropic widen access to **Mythos 5** cybersecurity capabilities (CUToday), pushing the model's vulnerability-scanning and defensive tooling further into partner security products. For enterprises, Claudeforce means Claude agents will read, write, and act across CRM records, opportunity data, and customer communications — a step change in how much sensitive business context a single AI surface can reach.

### Why This Reshapes Enterprise AI-Assistant Governance

- **Data-exposure surface explodes.** Claude embedded in CRM can pull contracts, health data, and financial records into model context on every query. The UK NCSC's same-day guidance (iThome) urging **sandboxed isolation and continuous monitoring** for AI-agent deployments is the baseline bar, not a nice-to-have.
- **Prompt-injection is now a CRM-compromise path.** Amazon's **Kiro** IDE showed this week that a prompt-injection in agent "Powers" can exfiltrate sensitive data (The Hacker News) — the same class of agent-to-tool abuse applies to any CRM-resident Claude that can call external actions.
- **Vendor concentration = single point of failure.** Claudeforce couples Salesforce uptime, Anthropic model availability, and Nscale compute into one dependency chain. The Aug 24 Claude global outage (covered in our 20260824 digest) is the cautionary precedent: a model-side incident now takes sales, support, and revenue ops offline simultaneously.
- **IP and contract risk.** As Claude acts on behalf of reps, audit trails, data-residency, and who-is-accountable-for-agent-actions become board-level questions.

**Vendor Risk Matrix (this week's lead + active threats):**

| Vendor / Product | CVE / Issue | CVSS | Active Exploitation | Source |
|---|---|---|---|---|
| Salesforce + Anthropic | Claudeforce agent-in-CRM | — | New integration (governance risk) | [VentureBeat](https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again) · [Reuters](https://www.reuters.com/technology/salesforce-raises-annual-revenue-forecast-2026-08-26/) |
| Citrix NetScaler / Linux kernel / MS SQL Server / Red Hat | CISA KEV additions | varies | Yes (KEV) | [iThome](https://www.ithome.com.tw/news/178460) · [THN](https://thehackernews.com/2026/08/cisa-adds-six-exploited-flaws-to-kev.html) |
| OPSWAT (driver abused) | Spark RAT disables security tools | — | Yes (Cambodia targeting) | [THN](https://thehackernews.com/2026/08/spark-rat-targets-cambodia-abuses.html) |
| Ubiquiti UniFi | 22 flaws, 3× CVSS 10.0 | 10.0 | Patch now | [iThome](https://www.ithome.com.tw/news/178475) |
| WatchGuard Agent | CVE-2026-57910 (2 critical RCE) | high | Patch now | [iThome](https://www.ithome.com.tw/news/178468) |
| WordPress Avada theme | 9.8 RCE | 9.8 | AI agent built 6-stage chain in 2h | [iThome](https://www.ithome.com.tw/news/178488) |
| WordPress TranslatePress | CVE-2026-19632 (takeover) | high | 400K+ sites at risk | [iThome](https://www.ithome.com.tw/news/178494) |
| Amazon Kiro | Prompt injection via Powers | — | Exfiltrates data | [THN](https://thehackernews.com/2026/08/amazon-kiro-prompt-injection-can.html) |

🔗 **Reference:** Coverage from ([VentureBeat](https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again), [Reuters](https://www.reuters.com/technology/salesforce-raises-annual-revenue-forecast-2026-08-26/), [Salesforce Newsroom](https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/))

---

## Active Threats This Week

📌 **APT24 infiltrates Taiwan advertising supply chain, plants malware on news & novel sites**
China-linked actor **APT24** compromised Taiwan's advertising supply-chain and injected malicious code into **news and novel (fiction) websites**, turning trusted local media into drive-by malware delivery. iThome's 資安日報 flags this as the day's headline incident for the Taiwan region (published 2026-08-27).
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178472) | [iThome 資安日報](https://www.ithome.com.tw/news/178479)

📌 **CISA adds Citrix NetScaler, Linux kernel, Microsoft SQL Server, Red Hat flaws to KEV**
CISA moved six exploited flaws into its **Known Exploited Vulnerabilities** catalog covering **Citrix NetScaler**, the **Linux kernel**, **Microsoft SQL Server**, and **Red Hat** products — federal remediation deadlines now apply, and enterprises should treat all four as urgent.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178460) | [The Hacker News](https://thehackernews.com/2026/08/cisa-adds-six-exploited-flaws-to-kev.html)

📌 **Spark RAT abuses vulnerable OPSWAT driver to disable security tools in Cambodia**
**Spark RAT** is targeting Cambodia and leveraging a vulnerable **OPSWAT** driver to disable endpoint security tooling, letting attackers establish persistence and blind defenders.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/spark-rat-targets-cambodia-abuses.html)

📌 **Ubiquiti patches 22 UniFi flaws, three at CVSS 10.0**
**Ubiquiti** fixed **22 vulnerabilities** across the UniFi product family, including **three CVSS 10.0** critical issues — network appliance owners should patch immediately.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178475)

📌 **WatchGuard Agent two critical RCE flaws (CVE-2026-57910)**
**WatchGuard** patched two critical vulnerabilities in its Agent software (**CVE-2026-57910**) that could let an attacker achieve **remote code execution** if left unupdated.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178468)

📌 **Avada WordPress theme 9.8 RCE — AI agent built the 6-stage exploit chain in 2 hours**
The popular **Avada** WordPress theme fixed a **CVSS 9.8** RCE; researchers note an AI coding agent assembled the full six-stage attack chain in roughly two hours, underscoring how fast AI compresses weaponization.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178488)

📌 **TranslatePress WordPress plugin exposes 400K+ sites to takeover (CVE-2026-19632)**
The **TranslatePress** WordPress plugin carries a major flaw (**CVE-2026-19632**) that could expose over **400,000** sites to takeover risk.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178494)

📌 **OpenSSL fixes 9 flaws including high-risk DoS**
**OpenSSL** released fixes for **9 vulnerabilities**, one a high-risk flaw capable of causing server-denial-of-service on affected builds.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178498)

📌 **Amazon Kiro prompt injection can exfiltrate sensitive data via Kiro Powers**
A prompt-injection in **Amazon Kiro**'s agent "Powers" can exfiltrate sensitive data — a concrete example of agent-to-tool abuse that applies to any AI assistant with external action rights.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/amazon-kiro-prompt-injection-can.html)

📌 **FBI disrupts China-linked QTFY infrastructure stealing US data**
The **FBI** disrupted **QTFY**, a China-linked infrastructure used to steal data from U.S. organizations — a takedown that removes a known collection node but does not close the intrusion campaigns behind it.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/fbi-disrupts-china-linked-qtfy.html)

---

## How Can OPSWAT Help

The **Spark RAT** campaign abused a vulnerable **OPSWAT** driver to neutralize endpoint defenses — a reminder that file-borne and driver-borne threats still land through untrusted content and supply chains. OPSWAT's **MetaDefender Multi-Scanning** (30+ anti-malware engines) plus **Deep CDR (Content Disarm & Reconstruction)** sanitize files, documents, and installers at the boundary so weaponized payloads never reach the endpoint, and **MetaDefender Endpoint** enforces file and process integrity even when a rogue driver tries to blind security tools. The same Multi-Scanning + CDR pipeline directly addresses the **WordPress plugin / theme supply-chain** exposure flagged above (Avada, TranslatePress) — vet every third-party package and upload before it reaches production.
