---
title: "CISO Daily Digest: Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers (20261118)"
description: "Partial backfill: selected stories from the original issue, with their sources."
pubDate: 2026-11-18
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Partial backfill: selected stories from the original issue, with their sources.

### 📌 Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers

CISA has added a critical deserialization vulnerability in Perforce Puppet to its Known Exploited Vulnerabilities catalog due to reports of active exploitation. Tracked as CVE-2026-115731 with a CVSS score of 9.4, the flaw exists in the platform's report-processing code. An attacker possessing a CA-signed agent certificate can execute arbitrary code on the Puppet Server by submitting a crafted rich-data type via a PUT request.

The vulnerability's risk is amplified by the potential for attackers to compromise the Certificate Authority (CA) if it lacks strong verification. Such a compromise could allow unauthenticated network attackers to obtain valid certificates and exploit the server. Security researchers noted that gaining remote code execution on a Puppet server allows attackers to seize CA signing keys, facilitating the impersonation of other hosts across the infrastructure.

Impacted versions include Puppet Enterprise 2026.0.0, 2025.0.0, and 2023.8.0, as well as Puppet Core 9.0.0 and 8.x. The vulnerability also extends to OpenVox, an open-source implementation of Puppet. Because Puppet often maintains high-level access to large fleets of corporate systems, successful exploitation could lead to ransomware deployment, mass data exfiltration, or significant lateral movement within a network.

**Source:** [Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>)

### 📌CISO Impact

- **Infrastructure Management Risk —** Compromise of central orchestration tools like Puppet can grant attackers full control over an entire server fleet, necessitating immediate patching of configuration management platforms.
- **Supply Chain Integrity —** The compromise of popular PyPI packages highlights the need for strict dependency pinning and monitoring of CI/CD pipelines for unauthorized credential exfiltration.
- **Runtime Environment Security —** Vulnerabilities in core runtimes like OpenJDK require careful assessment of hardware-specific optimizations and prompt updates to Java distributions to prevent RCE.

---

### 📌 Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials

Malicious versions 1.26.1 and 1.26.2 of the Microsoft agent-framework PyPI package were identified containing a credential stealer. The compromised versions used Python startup hooks (via .pth files) to automatically execute malicious code whenever a Python interpreter starts, regardless of whether the package is explicitly imported. The malware targeted environment variables, Azure CLI credentials, GitHub Actions OIDC tokens, and Azure managed-identity tokens, exfiltrating the collected data to a remote webhook.

**Source:** [Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials](<https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html>)

---

### 📌 OpenJDK Vulnerability (CVE-2026-114938) Leading to Remote Code Execution

Security researchers at Calif disclosed a memory corruption vulnerability in OpenJDK, dubbed 'Java4Shell' (CVE-2026-114938), affecting Base64 decoding optimization. When running on x86-64 processors using specific AVX-512 VBMI instructions, the flaw can allow remote attackers to steal sensitive memory information or execute arbitrary code. While no active exploitation has been confirmed by JPCERT/CC, researchers demonstrated unauthenticated RCE in applications such as Keycloak, Jenkins, and Atlassian Jira.

**Source:** [お知らせ：CyberNewsFlash「OpenJDKにおけるリモートコード実行につながる脆弱性（CVE-2026-114938）について」](<https://www.jpcert.or.jp/newsflash/2026111801.html>)

<!-- ciso-revision:ciso-20261118-1-available-1795038468497 -->
