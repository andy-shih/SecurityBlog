---
title: "CISO Daily Digest: Google Discloses Chinese-Linked Hackers Exploited BeyondTrust Zero-Day to Breach Enterprise Networks (20261019)"
description: "Chinese-nexus group ARMORY CASTLE exploited a BeyondTrust Remote Support zero-day (CVE-2026-102764) from August to breach enterprise appliances and pivot internally; CISA added this and a Fortinet flaw (CVE-2025-61624) to the KEV with an October 19 federal deadline. Separately, the GhostAction supply-chain campaign compromised 94 GitHub repositories, phishing maintainers for OAuth tokens and planting a persistent VS Code font-file stealer that harvests cloud and developer credentials."
pubDate: 2026-10-19
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Google Discloses Chinese-Linked Hackers Exploited BeyondTrust Zero-Day to Breach Enterprise Networks

Google Threat Intelligence Group (GTIG) and Mandiant disclosed on October 16 that a suspected China-nexus espionage group tracked as ARMORY CASTLE exploited a zero-day vulnerability in BeyondTrust Remote Support (CVE-2026-102764, CVSS 4.0 9.3) to compromise enterprise remote-support appliances and pivot into internal networks. The flaw affects Remote Support 26.2.3 and earlier; insufficient validation of inbound message sources allowed remote attackers to manipulate files on the appliance and gain a foothold.

Mandiant investigations found ARMORY CASTLE leveraged the vulnerability from late August 2026, deploying the SAWFLY web shell, obtaining root persistence across reboots, and abusing compromised admin accounts to traverse Remote Support connections into internal systems where they downloaded software inventories and other documents.

BeyondTrust patched all SaaS customers on October 9. Self-hosted customers must apply the patch manually or upgrade to a supported version first (24.3.1+). BeyondTrust and Mandiant urge organizations to audit admin-privilege changes, remote-session logs, and file transfers, review centralized logs for lateral access, rebuild compromised appliances, and rotate potentially exposed credentials.

### CISO Impact

- **Patch and hunt BeyondTrust Remote Support immediately —** Confirm hosted instances received BeyondTrust’s October 9 patch. For self-hosted deployments, apply the fix; versions below 24.3.1 must be upgraded first. Hunt for SAWFLY web shells, unexpected root persistence, admin-account abuse, and anomalous Remote Support sessions in logs from late August onward.
- **Enforce KEV remediation deadline and extend to Fortinet —** Meet CISA's October 19 deadline for CVE-2026-102764 and CVE-2025-61624; prioritize Fortinet path-traversal patching where PeerStitch delivery has been observed.
- **Detect and disrupt GitHub OAuth phishing and supply-chain persistence —** Monitor for OAuth device-flow authorizations to unfamiliar apps, token exfiltration to external IPs, VS Code tasks.json auto-run triggers, and unexpected font-file writes in repos; revoke tokens, rotate secrets, and audit cloned repositories.

**Reference:** [Google揭露中國相關駭客利用BeyondTrust零時差漏洞入侵企業內網 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1Fc1YxdkhVS28tOFZnaE9naE0wVzU5R0dxT3NRMV9VTDZSUlZpempDWG9UXzdjNGVzeFFVN1FxUi03QTB2a0M0UlYzSEN4Zw?oc=5>)

---

## Active Threats This Week

📌 **CISA Adds Actively Exploited BeyondTrust and Fortinet Flaws to KEV Catalog**

On October 16 CISA added two vulnerabilities to its Known Exploited Vulnerabilities catalog based on active exploitation evidence: Fortinet path-traversal CVE-2025-61624 (exploited by CL-STA-0954/UNC5820 to deliver PeerStitch malware) and BeyondTrust Remote Support authentication-bypass CVE-2026-102764 (exploited by UNC5221/ARMORY CASTLE as detailed by GTIG/Mandiant). Federal agencies must remediate by October 19.

**Reference:** [BeyondTrust、Fortinet漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0yTzRsOVVWekxwSkJmMkFXUHVQbVFFcXlycjJaMUdNSXR2cGdmMnFkV0FaOURRem16TUdQWjlFcWs5UmQwSFJKV0dsVmttdw?oc=5>) 

---

📌 **GhostAction Supply-Chain Campaign Plants Credential Stealer in 94 GitHub Repositories**

OpenSourceMalware reports the GhostAction threat actor has evolved from injecting malicious GitHub Actions workflows to a multi-stage supply-chain attack across 94 repositories (66 owners, 15 since removed). Stage 1 uses a typosquat domain (my-github\[.\]com) in phishing emails that reverse-proxy GitHub login to harvest passwords, 2FA codes, and silently authorize a repo-scoped OAuth device-flow token (repo, workflow, read:org) exfiltrated to the attacker on TCP/8443. Stage 2 persists via a VS Code tasks.json "runOn: folderOpen" trigger that auto-executes a credential stealer hidden in a fake font file (fa-solid-400.woff2) harvesting AWS keys, PyPI/npm tokens, Git logins, Kubernetes creds, SSH keys, and AI provider secrets (Anthropic, Google Gemini), installing a cron job every five minutes and exfiltrating over HTTP/8080. A fallback CI workflow (lint.yml, ci-check.yml, etc.) uploads findings to a secret GitHub gist if POST fails. GitHub began blocking the malicious workflow on October 9; the Stage 2 payload appeared six days later. Researchers advise revoking GitHub tokens from a clean device, rotating all reachable credentials, auditing repositories, and notifying downstream cloners.

**Reference:** [GhostAction Attackers Plant Credential Stealer Disguised as Font in 94 GitHub Repositories](<https://thehackernews.com/2026/10/ghostaction-attackers-plant-credential.html>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)
