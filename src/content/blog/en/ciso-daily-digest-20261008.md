---
title: "CISO Daily Digest: PoeLLM Malware Infects 3,400+ Servers to Expand Crypto Mining Botnet (20261008)"
description: "PoeLLM malware infects 3,400+ servers; LMCache RCE unpatched; ccTLD certificate hijack and npm malware threaten enterprises."
pubDate: 2026-10-08
tags: ["poellm-botnet","llm-infrastructure","lmcache-rce","certificate-hijack","supply-chain","npm-malware","ssrf","ai-security"]
author: "Security Solutions Team"
featured: true
---

## PoeLLM Malware Infects 3,400+ Servers to Expand Crypto Mining Botnet

PoeLLM malware has infected over 3,400 servers since April 2026, hiding command-and-control addresses inside a poem hosted in a GitHub repository to evade detection.

The Canto Incognito campaign systematically targets enterprise LLM deployments including LiteLLM, Gotenberg, Gitea, and Ivanti Sentry appliances across the U.S. and Western Europe.

Infected servers are repurposed as scanners and exploit nodes, enabling attackers to conduct distributed brute-force attempts and compromise additional vulnerable enterprise systems.

### CISO Action Required

- **Secure LLM Endpoints —** Isolate and monitor all internet-facing LLM endpoints for anomalous C2 traffic patterns.
- **Patch LMCache Immediately —** Verify LMCache deployments are not bound to routable addresses; apply temporary access restrictions.
- **Audit Domain Controls —** Review DNS records and certificate transparency logs for unauthorized changes on .gh, .sl, .as domains.

**Reference:** [PoeLLM Malware Infects 3,400+ Servers to Expand Crypto Mining Botnet](<https://thehackernews.com/2026/10/poellm-malware-infects-3400-servers-to.html>)

---

## Active Threats This Week
📌 **Unpatched Critical LMCache Flaw Lets Unauthenticated Attackers Run Code Remotely**

Critical unauthenticated RCE flaw in LMCache (CVSS 9.8) impacts vLLM deployments with no patched version available as of October 7.

**Reference:** [Unpatched Critical LMCache Flaw Lets Unauthenticated Attackers Run Code Remotely](<https://thehackernews.com/2026/10/unpatched-critical-lmcache-flaw-lets.html>)

📌 **Attackers Hijack .gh, .sl, and .as Registries to Obtain Certificates for Google Domains**

Attackers hijacked .gh, .sl, .as registries to fraudulently issue 12 unauthorized certificates for Google domains between September 22 and 27.

**Reference:** [Attackers Hijack .gh, .sl, and .as Registries to Obtain Certificates for Google Domains](<https://thehackernews.com/2026/10/attackers-hijack-gh-sl-and-as.html>)

📌 **Eight Malicious npm Packages Downloaded 40,767 Times Deliver Overlord RAT and Stealer**

Eight malicious npm packages downloaded 40,767 times deliver Overlord RAT and information stealers through three separate infection pathways.

**Reference:** [Eight Malicious npm Packages Downloaded 40,767 Times Deliver Overlord RAT and Stealer](<https://thehackernews.com/2026/10/eight-malicious-npm-packages-downloaded.html>)

📌 **SonicWall Patches CVSS 10.0 Pre-Authentication SSRF Flaw in SMA1000 Appliances**

SonicWall patched a critical CVSS 10.0 pre-authentication SSRF flaw in SMA1000 gateways, allowing unauthenticated internal network access.

**Reference:** [SonicWall Patches CVSS 10.0 Pre-Authentication SSRF Flaw in SMA1000 Appliances](<https://thehackernews.com/2026/10/sonicwall-patches-cvss-100-pre.html>)

📌 **Anthropic Gives Vetted Defenders Fewer Claude Guardrails**

Anthropic merged Project Glasswing into an expanded tiered Cyber Verification Program, limiting advanced cyber LLM access for vetted defenders.

**Reference:** [Anthropic Gives Vetted Defenders Fewer Claude Guardrails - Dark Reading](<https://www.darkreading.com/vulnerabilities-threats/anthropic-vetted-defenders-claude-guardrails>)

---

## How OPSWAT Can Help

For command-and-control, lateral movement, or malicious network traffic, MetaDefender NDR can add network-level threat visibility and investigation context; results depend on observable traffic and deployment scope. [MetaDefender NDR](<https://www.opswat.com/products/metadefender>)