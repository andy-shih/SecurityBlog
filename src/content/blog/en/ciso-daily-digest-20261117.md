---
title: "CISO Daily Digest: ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems (20261117)"
description: "Partial backfill: selected stories from the original issue, with their sources."
pubDate: 2026-11-17
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Partial backfill: selected stories from the original issue, with their sources.

### 📌 ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems

ConnectWise has completed an investigation into unauthorized access targeting partner ScreenConnect environments and warned that attacks are ongoing. The company reported that threat actors are using a toolkit known as SCKit, which includes a C# module called RelayTrap.cs, to attempt worm-like movement from infected customer devices to Managed Service Provider (MSP) technician workstations.

A critical vulnerability, CVE-2026-84869 (CVSS 9.9), is being exploited to allow unauthorized file transfers and code execution during active remote sessions. The campaign has also been linked to an authentication flaw in RMM+ versions 1.0.31 and 1.0.32. Recent activity detected by security researchers impacted 205 hosts across 41 organizations, with some instances involving rogue clients hosted on bulletproof infrastructure.

To mitigate these risks, ConnectWise has disabled five third-party extensions—Labtech Plus, RMM Plus, RMM+, RMM Plus Password Link, and RMM+ Password Link—across 400 partner environments. The company urges all customers to update the technician client to version 26.6.5 or later and emphasizes that software updates alone do not remove existing unauthorized access or persistence.

**Source:** [ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems](<https://thehackernews.com/2026/11/connectwise-warns-screenconnect-attacks.html>)

### 📌CISO Impact

- **Prioritize RMM Patching —** Immediate updates to ScreenConnect (v26.6.5+) and N-central are required to prevent unauthorized remote execution and worm-like lateral movement through MSP environments.
- **Monitor for Persistence —** Since updates do not remove established unauthorized access, defenders must actively hunt for rogue services, such as masquerading 'Windows Update Agent' components, following any unpatched exposure.
- **Audit Third-Party Extensions —** Review all RMM extensions and disable unnecessary or high-risk third-party modules that may serve as entry points for toolkit deployment like SCKit.

---

### 📌 N-able Patches 17 N-central Flaws as Attackers Exploit Earlier Bugs to Deploy Crypto Miners

N-able released a critical security update, N-central 2026.4 Hotfix 3, to address 17 vulnerabilities including privilege escalation, authentication bypass, and remote code execution. These patches follow the exploitation of the 4EverAble2Shell and Agent2Shell flaws, which attackers have used to deploy cryptocurrency miners on vulnerable servers.

**Source:** [N-able Patches 17 N-central Flaws as Attackers Exploit Earlier Bugs to Deploy Crypto Miners](<https://thehackernews.com/2026/11/n-able-patches-17-n-central-flaws-as.html>)

---

### 📌 Apple Tightens macOS App Permissions to Limit Data Access Amid AI Agent Security Risks

Apple is introducing more granular data access controls in macOS 27.3 beta 2 to mitigate risks associated with artificial intelligence (AI) agents. The update splits Device Control and Data Access into separate System &amp; App Protection Override and Accessibility settings, allowing users to limit app permissions to specific folders or individual applications.

**Source:** [Apple Tightens macOS App Permissions to Limit Data Access Amid AI Agent Security Risks](<https://thehackernews.com/2026/11/apple-tightens-macos-app-permissions-to.html>)

<!-- ciso-revision:ciso-20261117-2-available-1795038770735 -->
