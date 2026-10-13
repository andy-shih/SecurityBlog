---
title: "CISO Daily Digest: Attackers Hijack Danfoss Controllers, Heat Supermarket Freezers to 50°C (20261013)"
description: "Attackers compromised Danfoss refrigeration controllers across hundreds of French supermarkets; Chinese APT Flax Typhoon exploits eight known flaws; SonicWall SMA 1000 sees 135 exploitation attempts; Qilin and Settra ransomware leverage Palo Alto VPN bypass; Bricksforge WordPress plugin RCE under active attack."
pubDate: 2026-10-13
tags: ["ot-ics-attack","nation-state-apt","vpn-vulnerability","ransomware-initial-access","wordpress-rce","critical-infrastructure","active-exploitation","china-apt","france","sonicwall","palo-alto","danfoss","cisa-advisory","cve-2026-102255","cve-2026-0257","cve-2026-85097"]
author: "Security Solutions Team"
featured: true
---

## Attackers Hijack Danfoss Controllers, Heat Supermarket Freezers to 50°C

Attackers remotely hijacked Danfoss AK-SM and AK-SC refrigeration controllers at hundreds of French supermarkets on October 11, heating units to 50°C and forcing massive food disposal across Intermarché, Netto, and Coopérative U chains.

CERT-FR confirmed numerous compromises and urged immediate disconnection or strict access filtering for the affected controller series, while ANSSI's director called internet exposure of these devices an urgent risk requiring immediate remediation.

The incident demonstrates convergent IT/OT risk in commercial cold-chain infrastructure, where legacy industrial controllers with remote management interfaces become single points of failure for food safety and retail operations across multiple brands.

### CISO Implications

- **Audit Internet-Exposed OT Controllers —** Audit all internet-exposed OT/ICS controllers immediately; enforce network segmentation and zero-trust access for remote management interfaces.
- **Validate Legacy Controller Patch Status —** Validate vendor patch status for legacy industrial controllers; deploy compensating controls where firmware updates are unavailable.
- **Integrate OT Threat Intelligence —** Integrate OT-specific threat intelligence into SOC monitoring; establish incident response playbooks for convergent IT/OT attack scenarios.

**Reference:** [Attackers Heat French Supermarket Fridges Up to 50°C by Hijacking Danfoss Controllers](<https://thehackernews.com/2026/10/attackers-heat-french-supermarket.html>)

---

## Active Threats This Week
📌 **Chinese APT Flax Typhoon Exploits Eight Known Vulnerabilities**

Seven-nation advisory links Chinese APT Flax Typhoon to espionage exploiting eight flaws in ProFTPD, OnlyOffice, and Apache Struts across government, manufacturing, and healthcare sectors in Southeast Asia and North America.

**Reference:** [中國駭客Flax Typhoon利用8個已知漏洞發動攻擊，美CISA要求聯邦機構緊急修補其中5個弱點 - iThome](<https://www.ithome.com.tw/news/179574>)

📌 **SonicWall SMA 1000 Critical SSRF Under Active Exploitation**

Threat actors launched 135 exploitation attempts against CVE-2026-102255, a critical pre-auth SSRF in SonicWall SMA 1000 appliances, within days of the October 6 patch release from two U.S. IP addresses.

**Reference:** [Critical SonicWall SMA 1000 Flaw Targeted in 135 Exploitation Attempts After Patch](<https://thehackernews.com/2026/10/critical-sonicwall-sma-1000-flaw.html>)

📌 **Qilin and Settra Ransomware Exploit Palo Alto VPN Bypass**

Ransomware groups Qilin and Settra exploit CVE-2026-0257, a Palo Alto PAN-OS authentication bypass, to establish unauthorized VPN connections for initial access since May 2026.

**Reference:** [勒索軟體Qilin、Settra積極利用Palo Alto Networks防火牆已知漏洞，建立初期入侵管道 - iThome](<https://www.ithome.com.tw/news/179634>)

📌 **Bricksforge WordPress Plugin CVSS 10.0 RCE Actively Exploited**

Active exploitation of CVE-2026-85097, a CVSS 10.0 unauthenticated RCE in Bricksforge WordPress plugin versions ≤3.1.8.9, allows PHP polyglot upload via flawed MIME validation; patch 3.1.8.10 available.

**Reference:** [Attackers Exploit CVSS 10.0 Bricksforge WordPress Flaw Enabling Unauthenticated RCE](<https://thehackernews.com/2026/10/attackers-exploit-cvss-100-bricksforge.html>)

---

## How OPSWAT Can Help

For command-and-control, lateral movement, or malicious network traffic, MetaDefender NDR can add network-level threat visibility and investigation context; results depend on observable traffic and deployment scope. [MetaDefender NDR](<https://www.opswat.com/products/metadefender>)