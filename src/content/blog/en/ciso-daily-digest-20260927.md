---
title: "CISO Daily Digest: Two Unpatched Citrix NetScaler Zero-Days Under Active Exploitation (20260927)"
description: "Critical CVE-2026-88771 and CVE-2026-88772 impact all Citrix NetScaler ADC and Gateway deployments; CVSS 9.5 each; active exploitation confirmed. Also today: Lunex Stealer abuses AMD driver to disable security tools and steal browser credentials; information stealer distributed via ClickFix attacks targeting Ukrainian-speaking users."
pubDate: 2026-09-27
tags: [Citrix-NetScaler, CVE-2026-88771, CVE-2026-88772, RCE, Zero-Days, CISA-KEV, Lunex-Stealer, Information-Stealer, AMD-Driver, BYOVD, ClickFix, Ukraine, Defense-Evasion, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Citrix NetScaler: Two Critical Zero-Days Trigger Emergency Patching

**Citrix** confirmed on **September 27** that two critical remote-code-execution flaws affecting **Citrix NetScaler ADC and NetScaler Gateway** are under active exploitation in the wild. Both **CVE-2026-88771** (improper input validation) and **CVE-2026-88772** (DTLS memory overflow) carry a **CVSS score of 9.5** and require **no authentication or extra configuration** to exploit in the default state. CVE-2026-88771 affects all deployments; CVE-2026-88772 impacts appliances with DTLS enabled—which is the default for VPN virtual servers unless explicitly disabled. Citrix announced fixes in versions **14.1-73.37+** and **13.1-64.23+** but confirmed **no workarounds** exist. The vendor did not disclose the scale of active exploitation, but watchTowr detected the flaws during forensic investigations, and some administrators immediately took appliances offline. NetScaler ADC and Gateway sit at enterprise network edges handling VPN, remote access, load balancing and user authentication—making them high-value attack targets.

🔗 **Reference:** Coverage from ([CISA](https://www.cisa.gov/news-events/alerts/2026/09/27/critical-zero-day-vulnerabilities-exploited-citrix-netscaler-adc-gateway), [Rapid7](https://www.rapid7.com/blog/post/etr-zero-day-exploitation-of-citrix-netscaler-adc-and-gateway-cve-2026-88771-and-cve-2026-88772/), [watchTowr](https://watchtowr.com/intelligence/citrix-netscaler-zero-day-vulnerabilities-faq/))

---

## Active Threats This Week

📌 **Lunex Stealer: Information Thief Deployed via ClickFix, Abuses AMD Kernel Driver to Blind Security Tools**
Threat researchers at Ontinue identified **Lunex Stealer**, a malware-as-a-service (MaaS) platform widely distributed through fake CAPTCHA pages (ClickFix) targeting Ukrainian-speaking users. The attack chain bypasses User Account Control (UAC) via the CMSTPLUA COM object and leverages the **BYOVD (bring-your-own-vulnerable-driver)** technique using a vulnerable **AMD Radeon Software driver (PDFWKRNL.sys, CVE-2023-20598)** to escalate privileges and **blind security monitoring processes while leaving them running**—a stealthy EDR-evasion tactic. The stealer payload exfiltrates credentials from seven Chromium-based browsers, cryptocurrency wallets across nine desktop and browser-extension platforms, and maintains persistence through a hidden scheduled task and a **Chrome Native Messaging Host**—a PowerShell-based bridge supporting six filesystem actions (read, write, download, execute). Analysis of 28 active Lunex command-and-control panels across 13 countries points to Russian-speaking developers; the platform's expansion from June 2026 to present suggests either a single operator or organized MaaS resale.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/lunex-stealer-abuses-amd-driver-to.html)
