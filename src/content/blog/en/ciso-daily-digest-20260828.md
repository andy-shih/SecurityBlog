---
title: "CISO Daily Digest: US Judge Blocks Pentagon's Anthropic Blacklisting — 'Illegal and Baseless' (20260828)"
description: "A US federal judge blocked the Pentagon's blacklisting of Anthropic, calling the Trump administration's move 'illegal and baseless' after the DoD labeled the frontier AI lab a supply-chain risk. Same-day critical flaws: PaperCut NG/MF zero-day under active exploitation (no CVE, emergency patch for v25/v26), three CVSS 10.0 ServiceNow bugs (CVE-2026-18885, CVE-2026-18886, CVE-2026-74820), APT28's HOOKEDGE backdoor hitting European diplomacy, Unitree G1 EDU robot root RCE (CVE-2026-76639 / CVE-2026-76640), and a cPanel WHM root flaw (CVE-2026-65643)."
pubDate: 2026-08-28
tags: [Anthropic, supply-chain-risk, zero-day, PaperCut, ServiceNow, APT28, Unitree, cPanel, CVE-2026-18885, CVE-2026-65643]
author: "Security Solutions Team"
featured: true
---

## US Judge Blocks Pentagon's Anthropic Blacklisting — "Illegal and Baseless"

On August 27–28, a US federal judge ruled that the Pentagon's decision to blacklist **Anthropic** was "illegal and baseless," blocking the Department of Defense from treating the frontier AI lab as a barred supplier. The DoD had added Anthropic to a list of entities deemed a **supply-chain risk** — the security-relevant hook of the case — after Anthropic publicly criticized the administration's AI export-control posture. The court found the blacklisting exceeded statutory authority and denied the company due process. The ruling was covered across Reuters, The Guardian, Al Jazeera, CBS News, and more than 30 outlets in today's feed.

### Why This Reshapes AI-Vendor Supply Chain Governance

The case sets a precedent for how governments classify frontier AI vendors in procurement and vendor-risk frameworks. A determination that a model provider is a "supply-chain risk" would flow straight into the **vendor risk registers CISOs maintain** for any agency, regulated, or defense-adjacent enterprise — affecting which Claude-backed tools, SaaS, and integrations are permitted. The ruling does not end the underlying policy tension: export controls, in-country inference mandates, and "AI safety" grounds for debarment remain live levers. Security leaders should treat AI-vendor eligibility as a moving regulatory target, not a static control, and track both litigation and executive action as feed into third-party-risk scoring.

🔗 **Reference:** Coverage from ([The Guardian](https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai), [Al Jazeera](https://www.aljazeera.com/news/2026/8/28/us-judge-blocks-pentagon-blacklisting-of-ai-firm-anthropic), [Reuters](https://www.reuters.com/legal/government/us-judge-blocks-pentagons-anthropic-blacklisting-2026-08-28/))

---

## Active Threats This Week

📌 **PaperCut NG/MF Zero-Day Under Active Exploitation (No CVE Assigned)** — PaperCut confirmed active zero-day attacks against **all versions of PaperCut NG and PaperCut MF**. Emergency patches shipped for **v25 and v26**; an investigation is ongoing and no CVE, root cause, or attacker attribution has been published. Shared IoCs: intrusion-detection/endpoint alerts on the PaperCut Application Server (post-exploitation from `pc-app.exe`), truncated or deleted `server.log`, and `server.log` entries `ERROR No suitable driver found for jdbc:no:x` / `DatabaseUtils - Database error looking up cardID`. Internet-exposed Application Servers should be restricted to trusted IPs via firewall/network controls immediately.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/papercut-zero-day-exploited-in-attacks.html)

📌 **ServiceNow: Three CVSS 10.0 Flaws Enable Unauthenticated Code Execution and SQL Injection** — Two pre-auth code-injection bugs (**CVE-2026-18885**, **CVE-2026-18886**) and a SQL-injection flaw (**CVE-2026-74820**) each score **CVSS 10.0**; a sandbox escape (**CVE-2026-6876**, 8.7) and a previously disclosed pre-auth sandbox escape (**CVE-2026-6875**) compound the exposure. Affected instances span multiple Now Platform patch levels (Australia Patch 5 and earlier for CVE-2026-18886). ServiceNow initially reported in-the-wild exploitation of CVE-2026-6875, then issued a correction — CISOs should verify their instance's hot-fix level regardless.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/three-cvss-100-servicenow-flaws-could.html)

📌 **APT28-Linked HOOKEDGE Backdoor Targets European Government and Diplomatic Orgs** — A backdoor tracked as **HOOKEDGE**, assessed linked to Russian APT **APT28 (Fancy Bear)**, is targeting European government and diplomatic entities for espionage. The campaign uses the standard APT28 tradecraft of diplomatic/foreign-ministry phishing and credential abuse.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/apt28-linked-hookedge-backdoor-targets.html)

📌 **Unitree G1 EDU Humanoid Robot: Two Flaws Enable Root RCE (One Over Bluetooth)** — Researcher Olivier Laflamme disclosed **CVE-2026-76639** (network-adjacent path-traversal in `chat_go` reaching `bashrun`, root RCE on the Locomotion PC) and **CVE-2026-76640** (BLE write chain accepting a bootstrap interaction, also root). Both target the educational humanoid's Locomotion PC; physical/proximity or network-adjacent access is required.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/two-unitree-g1-edu-humanoid-robot-flaws.html)

📌 **cPanel WHM Root Flaw Lets One Hosting Customer Take Over a Server** — **CVE-2026-65643** is an unauthenticated/low-privilege flaw in **cPanel WHM** affecting all supported versions, letting a single hosting customer escalate to **root** over the whole server; disclosed August 28 with no public record yet. Related cPanel/LiteSpeed plugin flaws already in **CISA KEV**: CVE-2026-48172 (LiteSpeed plugin privilege escalation), CVE-2026-54420 (symlink following), CVE-2026-58048/58047 (July 31), and CVE-2026-41940 (April auth bypass, known exploited).

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/critical-cpanel-flaw-could-let-one.html)

📌 **Veeam ONE Critical Flaw Allows Forced SMB Authentication** — **CVE-2026-65641** in **Veeam ONE** 13.1 lets an attacker force the service account to perform SMB authentication coercion; Veeam resolved it in KB4892. Tracked alongside today's broader critical-patch wave for backup/monitoring infrastructure.

🔗 **Reference:** [Veeam KB4892](https://www.veeam.com/kb4892)

---

## How Can OPSWAT Help

Several of today's threats are **file- and patch-delivery borne** and map directly to OPSWAT's MetaDefender posture:

- **PaperCut / ServiceNow / Veeam / cPanel emergency patches** are distributed as installers, hot-fix binaries, and update bundles. MetaDefender **multi-scan** (30+ engines) verifies patch integrity and catches trojanized or supply-chain-substituted binaries before they reach servers.
- **CDR (Content Disarm & Reconstruction)** strips active content from documents, scripts, and archives traversing email and web upload — the primary delivery vector for the APT28 diplomatic-phishing chain and for weaponized update packages.
- **Vendor risk / third-party intake**: MetaDefender can screen third-party AI-vendor and SaaS artifacts entering the environment, supporting the moving-target vendor-eligibility problem the Anthropic ruling highlights.
