---
title: "CISO Daily Digest: Jade Sleet Breaches Indian IT Provider With Custom Backdoors; Cisco, Pixel Zero-Days Exploited (20260921)"
description: "Chinese-linked APT Jade Sleet compromised an Indian IT services provider using custom FLATROOF and ROOFDECK backdoors, escalating as critical infrastructure suppliers face intrusion waves. In parallel: Google patches actively-exploited Android zero-day on Pixel devices (110 fixes in monthly update); Cisco releases emergency patches for Identity Services Engine information disclosure and Secure Email Gateway SQL injection exploited in attacks; ClickFix lures deploy ChainScript RAT with rotating C2 infrastructure; and industry researchers document ShinyHunters breaching Clop ransomware group, marking escalation in APT-on-APT activity."
pubDate: 2026-09-21
tags: [Jade-Sleet, APT, FLATROOF, ROOFDECK, Indian-IT-Provider, Google-Pixel, Android-Zero-Day, CVE, Cisco-ISE, Cisco-ESG, SQL-Injection, ClickFix, ChainScript-RAT, ShinyHunters, Clop-Ransomware, APT-on-APT, Threat-Intelligence, BlueMoon-Kit, Supply-Chain, OT-Security, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Chinese APT Hits Indian IT Services With Custom Backdoors; Zero-Day Exploitation Surge Continues

**Jade Sleet**, a **Chinese-linked APT**, breached an **Indian IT services provider** using two custom backdoors — **FLATROOF** and **ROOFDECK** — in an operation first disclosed this week by **The Hacker News** and industry threat intelligence teams. The targeted provider supplies infrastructure and managed services to multiple sectors, and the compromise appears designed for **supply-chain access** to downstream clients, reflecting a pattern of targeting IT providers as entry points to larger enterprise networks. **Jade Sleet**, active since at least 2019, has previously targeted government and critical infrastructure; the use of custom-built backdoors and multi-stage deployment infrastructure suggests **high resource and operational sophistication**.

Simultaneously, **Google** released patches for **110 security flaws in its monthly Android update**, including an **actively-exploited zero-day on Pixel devices** — a memory-corruption vulnerability in the **kernel's media framework** that attackers have **already weaponized in the wild**. The patch reflects a pattern of **zero-day exploitation accelerating** across mobile platforms; industry researchers tracking exploit chains report a **six-fold increase** in zero-day discovery and exploitation timelines compared to 2025.

**Cisco** issued **emergency patches** this week for two flaws in enterprise infrastructure:
- **Cisco Identity Services Engine (ISE)** information disclosure flaw — exploited to extract sensitive administrative data
- **Cisco Secure Email Gateway (ESG)** SQL injection vulnerability — allowing **unauthenticated command execution as root**

The patches arrive as critical-infrastructure operators report heightened intrusion attempts in OT and IT boundary systems.

### Why Zero-Day Exploitation and Supply-Chain Compromise Now Converge

- **Zero-day exploitation has moved into the enterprise baseline.** A **Pixel zero-day exploited in the wild**, coupled with **Cisco flaws already under attack**, means defenders can no longer assume patches will arrive before weaponization — threat modeling must now assume **in-the-wild exploitation of unpatched critical systems** as the default starting assumption.
- **Supply-chain compromise via IT providers is a persistent frontier.** **Jade Sleet**'s targeting of an Indian IT services provider mirrors a broader pattern: nation-states are **prioritizing IT and managed-service providers** as access nodes because they hold **standing, federated identity** into dozens or hundreds of client networks. A single compromised provider can unlock dozens of downstream targets.
- **APT-on-APT activity signals market consolidation and data theft scaling.** **ShinyHunters** breaching the **Clop ransomware group** (as reported this week) indicates threat actors are targeting each other's **tooling, victim lists and negotiation data** — escalating the value of stolen access and creating new attack vectors (ransomware groups' victim databases are now themselves targets).
- **Enterprise patch windows are now incompatible with zero-day exploitation timelines.** A **Pixel zero-day** exploited before patch publication means mobile device fleets remain at risk for weeks; **Cisco's emergency releases** suggest 24–48 hour operational detection lags. Defenders must now assume **compromises are occurring during the patch interval** and architect detection and containment around *in-flight* intrusions rather than pre-patch prevention.

🔗 **Reference:** ([The Hacker News: Jade Sleet](https://thehackernews.com/2026/09/jade-sleet-linked-to-indian-it-provider.html), [Android Security Bulletin (Sept 2026)](https://source.android.com/docs/security/bulletin/2026/2026-09-01), [BleepingComputer: Pixel Zero-Day](https://www.bleepingcomputer.com/news/security/google-fixes-actively-exploited-android-zero-day-on-pixel-devices/), [Cisco ISE Advisory](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-ise-inf-disc-LFWvcCu.html), [Cisco ESG Advisory](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-esa-inj-2bLVGmhX.html), [The Hacker News: ClickFix ChainScript](https://thehackernews.com/2026/09/clickfix-lures-deploy-chainscript-rat.html))

---

## Active Threats This Week

📌 **Jade Sleet Exploits Indian IT Provider With FLATROOF and ROOFDECK Custom Backdoors**
**Jade Sleet**, a **Chinese-linked APT active since 2019**, breached an **Indian IT services provider** using two custom backdoors: **FLATROOF**, a remote-access trojan with data-exfiltration capabilities, and **ROOFDECK**, a persistence and lateral-movement tool. The provider supplies infrastructure management and consulting services across multiple vertical markets. Researchers assess the breach was designed for **supply-chain access**, leveraging the IT provider's legitimate connections into dozens of downstream client networks. **Jade Sleet** previously targeted government and energy sectors; the sophistication of custom tools and multi-stage infrastructure suggests **significant resources and operational discipline**. Incident response teams report the intrusion may have remained undetected for **weeks to months** before discovery.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/jade-sleet-linked-to-indian-it-provider.html)

📌 **Google Pixel Zero-Day Actively Exploited in the Wild: Kernel Media Framework RCE**
**Google** patched an **actively-exploited zero-day** affecting **Pixel devices** in its **September 2026 Android security update** — a **memory-corruption vulnerability in the kernel's media framework** allowing **remote code execution with device privileges**. The flaw is known to have been weaponized and used in targeted attacks; the patch arrived only **after weaponized exploit code was already circulating**. The update includes **110 total security fixes**; Windows and macOS equivalents (Chrome patches, etc.) suggest this exploit period was **multi-platform**. Industry tracking firms report **zero-day-to-exploitation timelines have compressed to 24–72 hours**, compared to **weeks to months** in 2025.
🔗 **Reference:** [Android Security Bulletin (Sept 2026)](https://source.android.com/docs/security/bulletin/2026/2026-09-01), [BleepingComputer](https://www.bleepingcomputer.com/news/security/google-fixes-actively-exploited-android-zero-day-on-pixel-devices/)

📌 **Cisco Identity Services Engine Information Disclosure: Administrative Data Exposed**
**Cisco** issued an **emergency patch** for **CVE-2026-20312** — an **information disclosure flaw in Cisco Identity Services Engine (ISE)** permitting **unauthenticated attackers to extract sensitive administrative data** including **user credentials, configuration details and authorization policies**. The vulnerability is **already being exploited in the wild** by attackers targeting healthcare, finance and government networks. No remote code execution, but the **disclosure of administrative credentials** enables downstream lateral-movement and persistence attacks. Affected versions: **ISE 2.6.x through 3.2.x**; patches available for **3.2.x and later**.
🔗 **Reference:** [Cisco Security Advisory](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-ise-inf-disc-LFWvcCu.html)

📌 **Cisco Secure Email Gateway SQL Injection: Unauthenticated Remote Code Execution as Root**
**Cisco** released **CVE-2026-20313** — a **SQL injection flaw in Cisco Secure Email Gateway (ESG)** allowing **unauthenticated remote attackers to execute arbitrary commands with root privileges**. The vulnerability is in the **email management interface** and is **already under active exploitation**. Attackers can chain the SQL injection to **bypass authentication** and execute **system commands**, potentially leading to **full gateway compromise** and **email interception**. All supported versions of **Secure Email Gateway** are affected; patches released with **emergency advisory**.
🔗 **Reference:** [Cisco Security Advisory](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-esa-inj-2bLVGmhX.html)

📌 **ClickFix Malware Campaign Escalates: ChainScript RAT Uses Polygon Chain for C2 Rotation**
**Threat researchers** documented an escalation in the **ClickFix malware campaign** — fake Windows "browser update" popups leading to **ChainScript RAT** infection. The latest variant uses the **Polygon blockchain** to **rotate command-and-control infrastructure**, storing **C2 addresses in smart contracts** that allow attackers to **change C2 endpoints without recompiling malware**. This approach makes **IP-based detection and sinkholing impossible** and significantly raises the **operational cost of law enforcement takedowns**. Victims primarily include **enterprises and government agencies**; infection vectors are **malvertising and compromised websites**. Security firms report **infection rates of 2,000+ unique machines weekly**.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/clickfix-lures-deploy-chainscript-rat.html)

📌 **ShinyHunters Claims Breach of Clop Ransomware Group: APT-on-APT Activity Escalates**
**ShinyHunters**, a financially motivated threat actor, claimed this week to have breached the **Clop ransomware gang's infrastructure**, obtaining **victim negotiation databases, leaked data archives and operational tooling**. If verified, this represents **APT-on-APT activity** at scale — threat actors targeting each other's stolen data and tooling. **Clop's victim lists** are valuable intelligence: they contain **enterprises mid-negotiation**, enabling competing threat actors to **target victims during ransom discussions** and **extract additional leverage**. Security researchers assess the breach may have exposed **details of 200+ Clop victim organizations** currently in negotiation or post-recovery phases.
🔗 **Reference:** [Bleeping Computer](https://www.bleepingcomputer.com/news/security/shinyhunters-leak-threatens-clop-ransomware-gang-victims/)

📌 **BlueMoon Exploit Kit Adopted by Four Separate APT Groups: Commoditization of Weaponry**
**Cybersecurity researchers** reported that at least **four distinct APT groups** have adopted the **BlueMoon exploit kit** — a collection of vulnerability exploits and payload delivery tools. This reflects **commoditization of advanced weaponry**: tools once exclusive to nation-state actors are now **accessible to multiple threat groups**, lowering barriers to entry for mid-tier threat actors. **BlueMoon** targets **common enterprise software** (PDF readers, Java, browsers) and includes **exploitation chains for CVEs 2–6 months old**, suggesting the kit is regularly updated.
🔗 **Reference:** [Threat Intelligence Bulletin](https://securityonline.info/bluemoon-exploit-kit-adopted-by-multiple-apt-groups/)

📌 **TASK#STOMP PowerShell Backdoor: Steals Documents, Wi-Fi Passwords and Clipboard Data**
**CrowdStrike** identified **TASK#STOMP**, a **PowerShell-based backdoor** deployed via **malicious Office macros and ISO attachments**. The malware **harvests documents from common directories**, **extracts Wi-Fi passwords from system storage**, **monitors clipboard data** and **exfiltrates via HTTPS to attacker-controlled servers**. Targeting is **broad-based** across finance, healthcare and government; the backdoor is **likely LLM-generated** based on code patterns and structure. Victims remain **unaware of data theft** as the malware operates with **minimal process-level footprint**.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/taskstomp-powershell-backdoor-steals.html)

📌 **Taiwan: Agricultural Product Fraud Surge — 1 in 2 Ads Involves Scam or Misrepresentation**
**Taiwan's National Police Agency** reported a surge in **agricultural product scams**: analysis of **social media and classified-ad platforms** found that **approximately 50% of advertisements for agricultural products contain scams or significant misrepresentations**. Victims lose an average of **NT$150,000–500,000 per incident**; **generative AI is enabling criminals to create convincing product photos and descriptions at scale**. Police launched a task force targeting **cross-border payment fraud networks** supporting the scam ecosystem.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/179062)

📌 **HPE and Oracle Strategic Alliance: Billion-Scale AI Cluster Infrastructure**
**Hewlett Packard Enterprise** and **Oracle** announced a strategic partnership to accelerate **AI infrastructure deployment at scale** — targeting **deployments of 1+ million GPUs**. The partnership combines **HPE's GreenLake hybrid-infrastructure platform** with **Oracle's OCI bare-metal GPU instances**, designed to address the **interconnect and cooling challenges** of billion-parameter model training. Enterprise customers can now **order, provision and manage AI infrastructure** with **unified billing across hybrid environments**. Initial customers include **financial services and automotive sectors**.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/179060)

📌 **US Treasury and Financial Regulators Target Xinbi and Southeast Asia Scam Ecosystem**
The **U.S. Department of Treasury** and **Department of Justice** launched coordinated operations against **Xinbi** — a **cryptocurrency payment processor** used to launder proceeds from **Southeast Asian romance scams and pig-butchering fraud networks**. Xinbi processed **over $800 million in criminal proceeds** in 2025–2026; the operation involved **coordinated sanctions** against the platform's operators and **asset seizures** of associated cryptocurrency wallets. Law enforcement reports the **actual fraud loss may exceed $2 billion**, with **thousands of U.S. citizens** victimized. The action signals **increased prioritization** of cross-border cybercrime enforcement against **Southeast Asia's fraud infrastructure**.
🔗 **Reference:** [Treasury Department Press Release](https://home.treasury.gov/news/press-releases/jy1589)

📌 **EU Proposes Emergency Security Protocol Framework for Hybrid Threats**
The **European Union** proposed a new **Emergency Security Protocol (ESP)** framework to coordinate member-state responses to **hybrid threats** — including **cyberattacks, disinformation and supply-chain sabotage**. The framework mandates **real-time information sharing** between national security agencies, **coordinated response procedures** and **joint investigation teams** for cross-border incidents. The proposal arrives as **Russia claims thousands of cyberattacks hit election infrastructure** during recent voting in Russia and neighboring states, and as **European critical infrastructure faces heightened pressure from nation-state actors**.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/179064)

---

## How Can OPSWAT Help

This week's threats span **email attachment exploitation** (**TASK#STOMP macros**), **web-based malware delivery** (**ClickFix and malvertising**), and **firmware/supply-chain compromise** (**Jade Sleet's custom backdoors in IT provider infrastructure**). **MetaDefender Multi-Scan** layers **30+ real-time anti-malware engines** over email attachments, downloaded files and cloud-based threat feeds; **MetaDefender CDR (Content Disarm & Reconstruction)** rebuild Office documents, PDFs and archives to strip active content and macro-based attacks; and **MetaDefender Kiosk** screens files at **removable-media and network boundaries**, catching supply-chain-sourced malware before it reaches production systems.
