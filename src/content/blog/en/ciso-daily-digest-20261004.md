---
title: "CISO Daily Digest: Warlock Exploits SharePoint Flaws to Deploy Ransomware Across Critical Infrastructure (20261004)"
description: "China-linked Warlock threat actor continues weaponizing Microsoft SharePoint vulnerabilities, disabling security tools via BYOVD (CVE-2025-1055) to deploy ransomware. Also today: MI5 exposes China's MSS-funded CGTRI financing 100+ U.K. academics in cybersecurity research; China-aligned TA419 targets U.S. AI policy experts with credential phishing; ShinyHunters administrator Rey detained in Jordan, cooperating with FBI."
pubDate: 2026-10-04
tags: [Warlock, SharePoint, Ransomware, BYOVD, CVE-2025-1055, K7RScan, Critical-Infrastructure, MSS, CGTRI, TA419, AI-Policy, ShinyHunters, Rey, China-Nexus, Credential-Phishing, FBI]
author: "Security Solutions Team"
featured: true
---

## Warlock Ransomware Weaponizes SharePoint Zero-Days, Disables Security via Vulnerable Drivers

**Warlock** (also tracked as **Gold Salem, Longlegs, Storm-2603**), a suspected China-linked threat actor, continues to leverage **Microsoft SharePoint vulnerabilities** to infiltrate critical infrastructure, government, and education organizations. In the past two months alone, Warlock has targeted at least **four organizations spanning Portugal, Spain, and Latin America**, including a water utility and telecommunications provider. The attack chain exploits SharePoint flaws to drop web shells, collects **ASP.NET machine keys**, forges signed payloads for **remote code execution inside the SharePoint application pool**, and deploys security-disabling payloads to 40+ hosts within hours. Notably, Warlock has abused the legitimate-but-vulnerable driver **K7RScan.sys (CVE-2025-1055)** as part of **BYOVD (Bring Your Own Vulnerable Driver)** attacks to terminate endpoint protection before ransomware deployment. As recently as July 22, 2026, the group exploited SharePoint flaws to achieve arbitrary code execution, establish **VS Code tunnels** for persistence, and deploy **Warlock ransomware** across compromised infrastructure.

---

## Active Threats This Week

📌 **Warlock: SharePoint Zero-Days Bypass Security with BYOVD Driver Abuse**
**Warlock** exploitation of **Microsoft SharePoint Server** combines web shell deployment, ASP.NET machine key extraction, and credential forgery to achieve **unauthenticated remote code execution**. The threat actor abuses **K7RScan.sys (CVE-2025-1055)** to disable endpoint security before ransomware deployment, affecting critical infrastructure operators and regional governments.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/10/warlock-exploits-sharepoint-flaws-to.html)

📌 **MI5 Exposes China's MSS-Funded CGTRI Financing 100+ U.K.-Linked Academics**
**MI5** issued a "Security Service Espionage Alert" revealing that **CGTRI (China General Technology Research Institute)**, assessed as a **front company for China's MSS**, funds academic research in the U.K. involving **100+ academics** specializing in artificial intelligence, cybersecurity, covert communications, and steganography—capabilities directly aligned with **cyber-attack methodologies executed by Chinese government agencies** against U.K. companies, universities, and critical infrastructure.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/10/mi5-says-chinas-mss-funded-research.html)

📌 **China-Aligned TA419 Targets U.S. AI Policy Experts With Credential Phishing**
**TA419**, a **China-nexus cyber espionage group**, has launched credential phishing campaigns impersonating prominent economists, AI policymakers, and **Anthropic employees** to target **artificial intelligence policy experts** at U.S. think tanks, universities, and legal organizations. Subject lines such as "Request for Feedback on Military Integration of Claude" craft credible pretexts to harvest **valid credentials**. The campaigns, ongoing since at least April 2025 with recent activity in July 2026, support **Chinese intelligence objectives to monitor U.S. AI policy developments** amid model distillation accusations and export control tensions.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/10/china-aligned-ta419-targets-us-ai.html)

📌 **ShinyHunters Administrator Rey Detained in Jordan, Cooperating with FBI**
**Saif al-Din Khader** (alias "Rey"), a suspected **administrator of the ShinyHunters digital extortion group**, was detained by authorities in **Jordan on September 29, 2026**, and is cooperating with the **U.S. Federal Bureau of Investigation** to identify other group members. Previously, Rey administered data leak websites for **Hellcat ransomware** and served as administrator of **BreachForums**. This detention follows the **September arrest of a 24-year-old Amsterdam man** linked to ShinyHunters, marking sustained law enforcement pressure against the **persistent extortion collective** that has absorbed multiple arrests and forum seizures since 2020.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/10/shinyhunters-suspect-rey-reportedly.html)

---
