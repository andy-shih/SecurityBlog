---
title: "CISO Daily Digest: SonicWall SMA Zero-Days (CVSS 10.0) Exploited Before Disclosure (20260719)"
description: "SonicWall SMA 1000 zero-days CVE-2026-15409 (CVSS 10.0) and CVE-2026-15410 exploited in the wild before patches by threat actor UTA0533. Plus: UAC-0145 Sandworm ClickFix CAPTCHAs target Ukraine, Claude for Chrome flaw (CVSS 9.6) lets rogue extensions read Gmail, wp2shell WordPress RCE, and Microsoft patches record 622 flaws."
pubDate: 2026-07-19
tags: [CISO, Daily Digest, SonicWall, Zero-Day, VPN, APT, AI Security, WordPress, Microsoft Patch Tuesday]
author: "Security Solutions Team"
featured: true
---

## SonicWall SMA Zero-Days Exploited Before Disclosure — CVSS 10.0

A previously undocumented threat actor tracked as **UTA0533** has been exploiting two critical zero-day vulnerabilities in SonicWall Secure Mobile Access (SMA) **1000 series VPN appliances** since **June 22, 2026** — weeks before SonicWall released patches.

The two flaws, disclosed this week, are:
- **CVE-2026-15409** (CVSS **10.0**): A pre-authentication `/wsproxy` bypass that lets an unauthenticated attacker establish a WebSocket tunnel to localhost-only services on the appliance. It requires a specific `User-Agent` header (`SMA Connect Agent`) and a `bmID` value starting with `-3389`.
- **CVE-2026-15410** (CVSS **7.2**): A command injection and privilege escalation flaw in the SMA control service, reachable through the tunnel created by CVE-2026-15409.

**Volexity**, the incident response firm that discovered the breaches, identified two compromised SMA VPN appliances at the impacted organization. The attackers deployed a **custom Java web shell codenamed ORANGETAIL** — a `setuid` backdoor with Behinder/Suo5-like capabilities accessible via `/workplace/error.jsp` and `/workplace/dialogs/errorDialog.jsp`. Additional artifacts included an exploit for CVE-2026-15410 (`/tmp/hypdate.b64`) and evidence that files were written through the appliance's internal database service context.

A separate authentication bypass was also noted: the SMA control service password is derived from the appliance's hardware UUID (`/sys/class/dmi/id/product_uuid`), which is world-readable on physical devices. While UTA0533 did not use this specific bypass, the attackers abused a **CouchDB** vulnerability (CouchDB is installed as part of the SMA appliance and accessible via localhost) to read the UUID and sidestep authentication.

**Rapid7** released a proof-of-concept (PoC) exploit establishing non-root RCE by implementing the Erlang protocol expected by `localhost:1050` and tunneling through the WebSocket for file read-write and arbitrary code execution via RPC calls.

Both vulnerabilities were patched by SonicWall this week. Organizations running SMA 1000 appliances should apply patches immediately and audit for signs of compromise (ORANGETAIL web shells, unexpected files in `/tmp/`, unusual WebSocket connections).

### Why This Reshapes VPN Appliance Security

The SonicWall incident is a textbook case of **zero-day supply chain risk** in perimeter network appliances. The attacker exploited vulnerabilities **before disclosures existed**, meaning traditional patch-management cycles offered zero protection. The CVSS 10.0 score on a pre-auth bypass that requires only specific headers underscores how **one misconfigured or unpatchable appliance** can become a persistent beachhead. For CISOs, this reinforces the need for defense-in-depth — network segmentation, outbound anomaly detection, and memory-resident forensic readiness — rather than relying solely on vendor patch cadences.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/07/sonicwall-sma-zero-days-exploited.html))

---

## Active Threats This Week

📌 **UAC-0145 (Sandworm) ClickFix CAPTCHAs Targeting Ukraine**
Russian state-sponsored threat actors affiliated with **GRU's Sandworm** unit are using fake **CAPTCHA checks** on compromised websites to trick Ukrainian targets into executing PowerShell commands that deploy data-stealing malware. CERT-UA attributed the activity to **UAC-0145**, a Sandworm sub-cluster. The campaign between June–July 2026 compromised at least **10 websites**. Malware deployed includes **GHETTOVIBE** (downloaded via PowerShell), **SCOUTCURL** (reconnaissance), and **COWARDDUCK** (a full-featured Android backdoor distributed as fake security APKs via messaging apps). The attackers use **EtherHiding** to retrieve malicious domain names from Ethereum smart contracts, and **SMARTAXE** to dynamically alter page content based on visitor profiling. Files are exfiltrated via the **Dropbox API**.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/uac-0145-uses-clickfix-captchas-to.html)

📌 **Claude for Chrome Flaw — Rogue Extensions Can Read Gmail (CVSS 9.6)**
Anthropic's **Claude for Chrome** extension (v1.0.80, current) contains two flaws. The primary issue: the content script on `claude.ai` does not check `event.isTrusted`, allowing any other extension with DOM access on the domain to dispatch forged clicks that trigger Claude to read Gmail, Google Docs, and Calendar data. In the default "ask before acting" mode, the flaw is rated **CVSS 7.7**; with "Act without asking" enabled, it becomes **CVSS 9.6 Critical** with no approval prompt. A second, latent issue: loading the side panel with `?skipPermissions=true` bypasses all permission checks — currently only reachable by the extension itself, but exploitable if another flaw exposes the parameter. No patch available as of July 19. Mitigation: disable "Act without asking" and audit extensions with `claude.ai` permission.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/claude-for-chrome-flaw-lets-other.html)

📌 **wp2shell — Unauthenticated WordPress Core Remote Code Execution**
A critical unauthenticated **RCE vulnerability** dubbed **wp2shell** has been disclosed in WordPress core, allowing attackers to execute arbitrary code on vulnerable sites. The flaw affects all WordPress installations and does not require authentication. Given WordPress powers over **43% of the web**, this represents a massive attack surface. Organizations should prioritize patching and deploy WAF rules if immediate patching is not feasible.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html)

📌 **Microsoft Patches Record 622 Flaws — Two Zero-Days Under Active Attack**
Microsoft's July 2026 Patch Tuesday addressed a record **622 vulnerabilities**, including **two zero-days** already being actively exploited in the wild. The sheer volume of patches — more than double typical monthly releases — has created operational challenges for enterprise patching teams. CISOs should prioritize the two actively exploited zero-days while planning a phased rollout for the remaining CVEs.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/microsoft-patches-record-622-flaws.html)

---

## How Can OPSWAT Help

Multiple threats in this digest involve **file-based attack vectors** that OPSWAT MetaDefender directly addresses. The UAC-0145 campaign delivers malware via downloadable PowerShell scripts and Android APK files — MetaDefender's **multi-engine scanning** with 30+ anti-malware engines can detect novel and polymorphic variants. The wp2shell WordPress RCE enables file upload-based compromise; MetaDefender's **Content Disarm and Reconstruction (CDR)** can sanitize uploaded files before they reach the application layer. For the SonicWall VPN appliance compromise, OPSWAT's **network access control and file integrity monitoring** can detect anomalous outbound connections and unauthorized file modifications on perimeter devices.
