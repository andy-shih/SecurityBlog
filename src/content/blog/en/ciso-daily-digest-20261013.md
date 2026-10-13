---
title: "CISO Daily Digest: Attackers Heat French Supermarket Fridges to 50°C via Danfoss Controller Hijack (20261013)"
description: "Attackers compromised Danfoss industrial controllers at hundreds of French supermarkets; a ransomware negotiator faces federal extortion charges; SonicWall SMA appliances under active SSRF exploitation; preinstalled Android malware builds residential proxy botnets; LG smart TVs vulnerable to local network root takeover."
pubDate: 2026-10-13
tags: ["ransomware","insider-threat","ot-security","ics-attack","supply-chain-compromise","firmware-malware","android-malware","iot-vulnerability","sonicwall","ssrf","lg-webos","danfoss-controllers","cert-fr","midnight-mimosa"]
author: "Security Solutions Team"
featured: true
---

## Attackers Heat French Supermarket Fridges to 50°C via Danfoss Controller Hijack

Attackers hijacked Danfoss AK-SM and AK-SC refrigeration controllers at hundreds of French supermarkets overnight October 11, heating units to 50°C and forcing massive food disposal across Intermarché, Netto, and Coopérative U chains.

CERT-FR issued an urgent alert October 12 confirming numerous compromises and directing operators to disconnect controllers or tightly filter internet access, while ANSSI head Vincent Strubel emphasized immediate removal from internet exposure.

Danfoss acknowledged most compromised units were older, unsupported models, and neither French authorities nor the vendor have identified the threat actor or initial access vector used in this OT-targeted operation.

### CISO Implications

- **OT Asset Visibility Gap —** Inventory all internet-exposed industrial controllers immediately; unsupported legacy devices require compensating controls or replacement.
- **Vendor Dependency Risk —** Assess maintenance vendor remote access to OT systems; enforce least-privilege, monitored, and time-bound connections.
- **Physical Consequence Planning —** Update incident response playbooks for OT attacks causing physical damage, spoilage, or safety hazards beyond data loss.

**Reference:** [Attackers Heat French Supermarket Fridges Up to 50°C by Hijacking Danfoss Controllers](<https://thehackernews.com/2026/10/attackers-heat-french-supermarket.html>)

---

## Active Threats This Week
📌 **Ransomware Negotiator Charged With Federal Extortion Conspiracy**

Ransomware negotiator Edward Dubrovsky charged with federal extortion conspiracy under CFAA, marking rare prosecution of a security professional allegedly facilitating the very crimes they were hired to mitigate.

**Reference:** [Prominent Ransomware Negotiator Faces Extortion Charges](<https://www.darkreading.com/insider-threats/prominent-ransomware-negotiator-extortion-charges>)

📌 **SonicWall SMA 1000 SSRF Flaw Under Active Exploitation**

Active exploitation of maximum-severity SSRF flaw CVE-2026-102255 in SonicWall SMA 1000 appliances reported by third parties despite vendor claiming no evidence; patch immediately and monitor for unauthorized internal requests.

**Reference:** [Maximum-Severity SSRF Flaw in SonicWall SMA Devices Under Attack](<https://www.darkreading.com/vulnerabilities-threats/max-severity-ssrf-flaw-sonicwall-sma-devices-under-attack>)

📌 **Preinstalled Android Malware Builds Residential Proxy Botnets**

Bitdefender tracks "Midnight Mimosa" preinstalled malware on MediaTek Android devices across brands, granting system privileges to install 32+ disguised apps, conduct ad fraud, and enroll devices into residential proxy botnets.

**Reference:** [Low-Cost Android Phones Ship With Preinstalled Malware That Turns Them Into Residential Proxies](<https://thehackernews.com/2026/10/low-cost-android-phones-ship-with.html>)

📌 **LG Smart TV WebOS Chain Enables Local Network Root Takeover**

Three-chain webOS vulnerability enables pre-auth root takeover on LG smart TVs via local network port 3001; firmware fix released for tested models 32LQ636BPSA and 27TQ600SW, no workaround available.

**Reference:** [LG Smart TVs Vulnerable to Pre-Auth Root Takeover From Local Network](<https://thehackernews.com/2026/10/lg-smart-tvs-vulnerable-to-pre-auth.html>)

---

## How OPSWAT Can Help

For ICS, SCADA, or industrial-control incidents, MetaDefender OT Access and Industrial Firewall can be evaluated for OT access control, segmentation, and protocol inspection, based on the site architecture. [MetaDefender OT Access and Industrial Firewall](<https://www.opswat.com/products/metadefender>)