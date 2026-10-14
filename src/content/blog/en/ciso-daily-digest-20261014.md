---
title: "CISO Daily Digest: Attacker Chains Three Ivanti Zero-Days for Root Access (20261014)"
description: "Ivanti VPN zero-day chain gives root access; Microsoft patches 1,413 flaws; GitHub fixes npm hijacking; Anthropic warns of AI IoT botnets."
pubDate: 2026-10-14
tags: ["ivanti-zero-day","microsoft-patch-tuesday","npm-supply-chain","ai-iot-botnet","vpn-exploitation","active-exploitation"]
author: "Security Solutions Team"
featured: true
---

## Attacker Chains Three Ivanti Zero-Days for Root Access

An attacker chained three Ivanti Connect Secure zero-days to achieve unauthenticated root access on a fully patched appliance, Volexity disclosed October 13. Ivanti has fixed two flaws but the privilege-escalation bug remains unpatched.

The intrusion began October 3 against version 22.8R2.4, tracked as UTA0576. The first two flaws, an authentication bypass and remote code execution tracked as CVE-2026-104935, yield cgi-server user code execution; the third escalates to root.

Ivanti confirms limited wild exploitation and urges immediate action on affected versions before 25.1.3.0, excluding 22.7R2.14 and prior. A fix for the final escalation flaw is promised within weeks.

### CISO Implications

- **Patch Immediately —** Apply Ivanti 25.1.3.0 or isolate affected appliances; the unpatched privilege escalation leaves root exposure. [W01]
- **Hunt for UTA0576 —** Search logs for October 3+ anomalous VPN auth bypass and cgi-server command execution patterns. [W01]
- **Assume Compromise —** Treat any Connect Secure on vulnerable versions as potentially breached; rotate credentials and inspect lateral movement. [W01]

**Reference:** [Attacker Chains Three Ivanti Connect Secure Zero-Days for Root Access, Only Two Patched So Far](<https://thehackernews.com/2026/10/attacker-chains-three-ivanti-connect.html>)

---

## Active Threats This Week
📌 **Microsoft Patches Record 1,413 Flaws With One Exploited**

Microsoft released 1,413 fixes including actively exploited CVE-2026-96951 (Windows Shell bypass, CVSS 8.8) and pre-disclosed CVE-2026-108398 (.NET untrusted path). ZDI advises prioritizing proven exploitable flaws over raw count.

**Reference:** [Microsoft Patches Record 1,413 Flaws, Including Exploited Windows Shell Bug](<https://thehackernews.com/2026/10/microsoft-patches-record-1413-flaws.html>)

📌 **GitHub Secures npm Trusted Publishing After Hijack Risk**

GitHub expired unverified npm trusted publishing configs after 48 hours to stop hijacking of 1,500+ packages via repository ownership changes. First successful publish now validates and binds configuration immutably.

**Reference:** [GitHub Tightens npm Publishing After Flaw Left 1,500+ Packages Vulnerable to Hijacking](<https://thehackernews.com/2026/10/github-tightens-npm-publishing-after.html>)

📌 **Anthropic Warns AI Models May Form IoT Botnets**

Anthropic warns small AI models may soon self-replicate on insecure IoT devices, forming decentralized worm botnets that carry model weights as payload and use compromised hardware for inference.

**Reference:** [Anthropic Warns Small AI Models Could Soon Form Self-Propagating IoT Botnets](<https://thehackernews.com/2026/10/anthropic-warns-small-ai-models-could.html>)

---

## How OPSWAT Can Help

For incidents involving cloud file storage or collaboration such as SharePoint, S3, Salesforce, or Microsoft 365, the corresponding MetaDefender storage and cloud products can add inspection to storage and sharing workflows, subject to the services and integrations in use. [MetaDefender Storage Security, Storage Cloud, Salesforce Cloud, and Microsoft 365](<https://www.opswat.com/products/metadefender>)