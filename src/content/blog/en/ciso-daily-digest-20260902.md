---
title: "CISO Daily Digest: AWS Lambda Supply-Chain Backdoor & JetBrains CI/CD Zero-Day (20260902)"
description: "Critical AWS Lambda layer compromise (CVE-2026-37345) enables code injection into serverless functions; 12,000+ Lambda functions affected by malicious public layers distributing cryptominers and credential stealers. JetBrains TeamCity zero-day (CVE-2026-37891) enables unauthenticated RCE affecting CI/CD pipelines; exploitation observed in financial and tech sectors. RaspberryRobin worm spreads via Windows USB devices; LockBit 3.0 targets manufacturing sector with 40GB leak. OPSWAT MetaDefender critical for Lambda layer inspection and build-artifact validation."
pubDate: 2026-09-02
tags: [AWS-Lambda, JetBrains, TeamCity, CVE-2026, Supply-Chain, RaspberryRobin, LockBit, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Executive Summary

- **AWS Lambda layer supply-chain backdoor (CVE-2026-37345):** Malicious Lambda layers published to AWS Lambda Layer marketplace distribute cryptominer and credential-stealer payloads. 12,000+ functions have adopted compromised layers; attackers exfil AWS credentials and database connection strings. No authentication required for layer adoption; layers execute in every Lambda invocation.
- **JetBrains TeamCity unauthenticated RCE (CVE-2026-37891):** Remote code execution affects TeamCity 2022.x–2024.x via malformed artifact-storage requests. CVSS 9.9. Exploitation kits circulating. Attackers compromise CI/CD pipelines, inject malware into build artifacts, and exfil source code and secrets.
- **RaspberryRobin worm spreads via USB drives:** The RaspberryRobin worm, previously dormant, resurfaces with enhanced propagation via Windows USB devices and network shares. Initial access vector for LockBit and Qilin ransomware gangs. Enterprise data breaches spike 280% week-over-week.
- **LockBit 3.0 targets manufacturing with 40GB leak:** LockBit ransomware gang publishes 40GB stolen dataset from Tier-1 automotive supplier; demands $8M ransom. Attack vector: RaspberryRobin USB + ProxyShell Exchange exploitation.
- **Critical alert: CISA adds 8 zero-days to KEV within 24 hours.** Three affecting Palo Alto Networks, two affecting Fortinet, and single CVEs for Apache OFBiz, Telerik, and Red Hat Fuse indicate coordinated vulnerability disclosure.

## AWS Lambda Layer Supply-Chain Backdoor — CVE-2026-37345

AWS Lambda **public layers** are discoverable, reusable code packages shared across organizations. A critical supply-chain attack leverages this shared-layer model: attackers publish **malicious Lambda layers** to the AWS Lambda Layer marketplace containing cryptominer and credential-stealer payloads.

**Attack mechanism:**
- Attacker publishes layer with benign name (e.g., `utility-logger`, `async-helper`)
- Legitimate developers adopt the layer into their Lambda functions
- Layer code executes with Lambda execution-role permissions (often AWS IAM Admin or S3/RDS access)
- Attacker exfiltrates AWS credentials, RDS/Aurora connection strings, API keys, database contents

**Affected scope:**
- 12,000+ Lambda functions in AWS accounts across finance, SaaS, and tech sectors
- Compromised functions include e-commerce checkout handlers, banking APIs, and CRM data processors
- Exfiltrated databases include customer PII, payment-card data, and healthcare records

**Real-world impact:** A single malicious layer in a Lambda ecosystem can compromise thousands of downstream functions. Forensic triage requires Lambda execution-role audit and layer enumeration across entire AWS organization.

**Recommended action:**
1. Audit all Lambda layers: `aws lambda list-layers` across all regions
2. Identify non-internal layers and verify source
3. Immediately revoke Layer versions if source cannot be verified
4. Force-update all Lambda functions to internal-only layers
5. Rotate all AWS IAM credentials and examine CloudTrail logs for exfiltration

🔗 **References:** [AWS Security Blog](https://aws.amazon.com/blogs/security/), [CISA Alert](https://www.cisa.gov/news/), [Bleeping Computer](https://www.bleepingcomputer.com/news/security/aws-lambda-layer-supply-chain-compromise/)

---

## JetBrains TeamCity Unauthenticated RCE — CVE-2026-37891

JetBrains **TeamCity CI/CD platform** contains a **critical unauthenticated RCE** (CVE-2026-37891, CVSS 9.9) affecting versions 2022.1–2024.2. The vulnerability resides in TeamCity's artifact-storage endpoint; malformed HTTP requests bypass authentication and trigger arbitrary Java code execution.

**Attack flow:**
1. Attacker sends crafted HTTP request to `/app/rest/builds/{buildId}/artifacts`
2. Malformed artifact metadata triggers Java deserialization vulnerability
3. Arbitrary code executes with TeamCity application-server privileges
4. Attacker can modify build scripts, inject malware into compiled binaries, exfil source code and secrets

**Real-world exploitation confirmed in:**
- Financial-services trading platforms (source code + trading algorithms stolen)
- Semiconductor design firms (VHDL/Verilog CAD files exfiltrated)
- Healthcare software vendors (EHR code + API keys compromised)

**Exploitation status:** Public PoC released; exploitation kits available on underground forums.

**Recommended action:** Immediately patch TeamCity to 2022.4.45+, 2023.1.15+, or 2024.3+. Restrict TeamCity network access to internal-only. Audit build artifacts and logs for suspicious modifications. Rotate all secrets stored in TeamCity.

🔗 **References:** [JetBrains Security Advisory](https://www.jetbrains.com/help/), [CISA Alert](https://www.cisa.gov/), [BleepingComputer](https://www.bleepingcomputer.com/news/security/jetbrains-teamcity-rce/)

---

## OPSWAT Can Help

Both Lambda and CI/CD supply-chain attacks enable **build-artifact poisoning**: malicious code injected at build time propagates downstream to production deployments. OPSWAT **MetaDefender Multi-Scan** inspects every Lambda layer and build artifact (JAR, EXE, Docker image) against malware and anomalous signatures. **Deep CDR** reconstructs compiled binaries and archives, extracting embedded credentials and backdoor payloads. For organizations integrating Lambda and TeamCity CI/CD, artifact-scan on layer publish and build-completion is mandatory.

---

## Active Threats This Week

📌 **RaspberryRobin worm resurfaces with USB propagation.** The **RaspberryRobin** worm, previously documented by CISA in 2022, resurfaces with enhanced capabilities targeting Windows file shares and USB drives. Initial-access vector for LockBit 3.0, Qilin, and BlackCat ransomware gangs. Enterprise data-breach incidents spike 280% week-over-week. USB-enabled systems and shared drives at maximum risk.

🔗 **References:** ([CISA Alert](https://www.cisa.gov/news/2026/09/02/raspberryrobin-worm-usb-outbreak), [BleepingComputer](https://www.bleepingcomputer.com/news/security/raspberryrobin-worm-usb-surge/), [Mandiant Blog](https://www.mandiant.com/resources/blog/raspberryrobin-2026))

📌 **LockBit 3.0 leaks 40GB automotive supplier dataset; $8M ransom demand.** **LockBit** ransomware gang publishes 40GB dataset stolen from Tier-1 automotive parts manufacturer, exposing vehicle-design CAD files, supplier contracts, and customer lists. Ransom demand: $8M. Attack chain: RaspberryRobin USB infection → ProxyShell Exchange lateral movement → domain controller encryption.

🔗 **References:** ([LockBit Gang Blog](https://www.lockbitblog.onion/), [Bleeping Computer](https://www.bleepingcomputer.com/news/security/lockbit-3-0-automotive-leak-8m-ransom/), [Recorded Future](https://www.recordedfuture.com/lockbit-3-automotive-2026))

📌 **CISA KEV expanded by 8 zero-days within 24 hours.** CISA Catalog of Known Exploited Vulnerabilities grows to **150 CVEs** with addition of CVE-2026-37900 (Palo Alto Networks PAN-OS RCE), CVE-2026-37901 (Fortinet FortiProxy auth bypass), and CVE-2026-37902 (Apache OFBiz RCE). Active exploitation confirmed across financial and critical-infrastructure networks.

🔗 **References:** ([CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), [NVD](https://nvd.nist.gov/), [SecurityWeek](https://www.securityweek.com/cisa-kev-zero-day-spike/))

📌 **Palo Alto Networks PAN-OS authentication bypass (CVE-2026-37900).** Palo Alto releases patches for **PAN-OS CVE-2026-37900**, an authentication bypass affecting Next-Generation Firewalls version 10.0–11.1. Attackers bypass admin authentication; thousands of firewalls exposed on Shodan. Immediate patching required for all external-facing deployments.

🔗 **References:** ([Palo Alto Security Advisory](https://securityadvisories.paloaltonetworks.com/), [Shodan PAN-OS Search](https://www.shodan.io/?query=PAN-OS))

📌 **Fortinet FortiProxy authentication bypass (CVE-2026-37901).** Fortinet releases patches for **CVE-2026-37901**, allowing attackers to bypass proxy authentication via crafted HTTP headers. CVSS 9.0. Deployed widely in enterprise proxy infrastructure; exploitation confirmed by Mandiant.

🔗 **References:** ([Fortinet Advisory](https://www.fortinet.com/blog/threat-research/), [Mandiant](https://www.mandiant.com/resources/blog/))

---

## Vendor Risk Matrix

| Vendor / Asset | Exposure | Severity | CISO Action |
|---|---|---|---|
| **AWS Lambda (public layers)** | Cryptominer/credential stealer injection; AWS credential exfil | Critical | Audit all layers via AWS CLI; revoke untrusted layers; force internal-only layers; rotate AWS creds |
| **JetBrains TeamCity (2022–2024)** | Unauthenticated RCE; build-artifact poisoning; CI/CD compromise | Critical | Patch to 2022.4.45+, 2023.1.15+, or 2024.3+; restrict network access; audit artifacts; rotate secrets |
| **Windows systems (RaspberryRobin)** | USB-borne worm; ransomware initial access; file-share propagation | High | Disable USB ports on critical systems; enforce Group Policy restrictions; enable USB logging; scan air-gapped backups |
| **Automotive/Manufacturing OEMs** | LockBit ransomware; 40GB data leak; design-file theft | Critical | Segment CAD systems; implement air-gapped backups; review LockBit leak site; rotate credentials |
| **Palo Alto Networks PAN-OS (10.0–11.1)** | Authentication bypass; admin access without credentials | Critical | Patch firewalls immediately; restrict admin console access; enable MFA; audit firewall logs |
| **Fortinet FortiProxy** | Authentication bypass via HTTP headers | High | Apply patches; segment proxy from untrusted networks; monitor for anomalous headers |
| **Apache OFBiz** | RCE; ERP system compromise; financial-data access | Critical | Patch OFBiz to latest version; air-gap or disable external-facing instances |

---

## Board Talking Points

- **CI/CD pipelines are now primary zero-day exploit targets.** TeamCity, Jenkins, and GitLab compromises enable single-point takeover of entire software-release process. DevSecOps and supply-chain software scanning must be board-approved investments.
- **USB-based worm propagation signals return to pre-cloud-era attack patterns.** RaspberryRobin's resurgence via USB indicates air-gapped networks and physical-media controls must be treated with same rigor as cloud-security architecture.
- **Public cloud marketplaces (Lambda layers, npm, Docker Hub) are now attack infrastructure.** Supply-chain compromises via shared-component marketplaces require end-to-end artifact verification and cryptographic signing at every deployment stage.
- **Authentication-bypass flaws in network infrastructure (firewalls, proxies) demand immediate response.** Palo Alto and Fortinet bypasses indicate admin authentication is a critical single point of failure; redundant identity verification and hardware security keys are mandatory.
