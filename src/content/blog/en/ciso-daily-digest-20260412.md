---
title: "CISO Daily Digest: CPUID Breach Distributes STX RAT, Adobe Patches Zero-Day (20260412)"
description: "CPUID breach used to distribute STX RAT malware via CPU-Z and HWMonitor; Adobe patches actively exploited Acrobat Reader zero-day CVE-2026-34621"
pubDate: 2026-04-12
tags: ["CPUID", "STX RAT", "Adobe", "Zero-day", "Supply Chain Attack"]
author: "Security Solutions Team"
featured: true
---

## Major Security Events on April 12

- **CPUID Breach:** The official website of CPUID, the hardware monitoring tool developer, was compromised. Attackers replaced legitimate CPU-Z and HWMonitor downloads with trojanized versions containing **STX RAT** malware, enabling remote access and data theft.
- **Adobe Zero-Day:** Adobe released an emergency patch for **CVE-2026-34621**, an actively exploited zero-day vulnerability in Acrobat Reader. The flaw allows arbitrary code execution through specially crafted PDF files. Organizations were urged to update within 72 hours.

🔗 **References:** CPUID Breach ([The Hacker News](https://thehackernews.com/2026/04/cpuid-breach-distributes-stx-rat-via.html)) | Adobe Patch ([The Hacker News](https://thehackernews.com/2026/04/adobe-patches-actively-exploited.html))

## Active Threats This Week

📌 **CPUID Supply Chain Attack via STX RAT**

The CPUID website compromise represents a sophisticated supply chain attack. STX RAT is a remote access trojan with data-stealing capabilities that was distributed through trojanized versions of widely-used hardware monitoring utilities **CPU-Z** and **HWMonitor**. Users who downloaded these tools from the official site during the compromise window may have been infected.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/cpuid-breach-distributes-stx-rat-via.html)

📌 **Adobe Acrobat Reader Zero-Day (CVE-2026-34621)**

Adobe patched a critical zero-day vulnerability (CVE-2026-34621) in Acrobat Reader that was being actively exploited in the wild. The vulnerability enables remote code execution when a user opens a malicious PDF. Given the widespread use of Acrobat Reader across enterprises, rapid patching is critical.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/04/adobe-patches-actively-exploited.html)
