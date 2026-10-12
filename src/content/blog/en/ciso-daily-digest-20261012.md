---
title: "CISO Daily Digest: DOJ and FBI Seize Chinese Flax Typhoon Infrastructure Following Widespread Infiltration (20261012)"
description: "US authorities dismantle Chinese Flax Typhoon tooling targeting Taiwan, while critical flaws in SonicWall and AhsayCBS face in-the-wild exploitation."
pubDate: 2026-10-12
tags: ["cisa","flax-typhoon","sonicwall","ahsaycbs","bricksforge","darksword","ios-security"]
author: "Security Solutions Team"
featured: true
---

## DOJ and FBI Seize Chinese Flax Typhoon Infrastructure Following Widespread Infiltration

The US Department of Justice and FBI seized seven domains operated by Chinese security firm Integrity Technology Group, disrupting tools used by Flax Typhoon to breach twenty Taiwanese universities.

Allied cyber agencies issued advisory AA26-281A revealing that threat actors deployed FishHub and Microscan alongside SoftEther VPN to sustain prolonged administrative footholds across higher education and critical infrastructure targets globally.

Concurrently, CISA added five actively exploited legacy flaws weaponized by the syndicate to its Known Exploited Vulnerabilities catalog, ordering federal civilian executive branch agencies to apply urgent security remediations.

### Strategic Governance & Exposure Management

- **Audit Edge Tunneling —** Inspect internal networks for unauthorized SoftEther VPN installations and irregular HTTPS encapsulation disguising covert outbound command traffic.
- **Remediate Legacy KEV Flaws —** Scan public-facing servers for unpatched software, specifically outdated ProFTPD, OnlyOffice, and Apache Struts versions prioritized by state actors.
- **Enforce Strict MFA —** Mandate phishing-resistant multi-factor authentication across all external webmail, administrative portals, and remote access termination points.

**Reference:** [【資安日報】10月12日，美司法部與FBI查封中國永信至誠科技兩款駭客工具，臺灣多所大學曾遭其滲透 - iThome](<https://www.ithome.com.tw/news/179581>)

---

## Active Threats This Week
📌 **Critical SonicWall SMA 1000 Flaw Weaponized Within Days**

Attackers launched 135 exploitation attempts against CVE-2026-102255, an unauthenticated SSRF vulnerability in SonicWall SMA 1000 appliances, to access internal functionality directly following security hotfix releases.

**Reference:** [Critical SonicWall SMA 1000 Flaw Targeted in 135 Exploitation Attempts After Patch](<https://thehackernews.com/2026/10/critical-sonicwall-sma-1000-flaw.html>)

📌 **AhsayCBS Vulnerability Chain Exploited for Backdoors and Cryptomining**

Threat actors chained CVE-2026-105133 and CVE-2026-105134 on AhsayCBS backup servers to bypass authentication, gain SYSTEM remote code execution, and deploy stealthy XMRig mining payloads.

**Reference:** [備份管理平臺AhsayCBS資安漏洞被串連利用，攻擊者試圖挖礦與植入後門程式 - iThome](<https://www.ithome.com.tw/news/179587>)

📌 **Maximum-Severity WordPress Bricksforge Flaw Targeted in the Wild**

Security researchers observed active exploitation of CVE-2026-85097 in Bricksforge, where unauthenticated attackers abuse loose form metadata validation to upload GIF/PHP polyglots and execute arbitrary code.

**Reference:** [Attackers Exploit CVSS 10.0 Bricksforge WordPress Flaw Enabling Unauthenticated RCE](<https://thehackernews.com/2026/10/attackers-exploit-cvss-100-bricksforge.html>)

📌 **P7 DarkSword iOS Exploit Kit Expands Capabilities**

A modernized P7 DarkSword exploit kit targeting iOS incorporates two-way C2 channels, stealthy on-device footprints, and automated theft mechanisms for keychain credentials and cryptocurrency wallets.

**Reference:** [P7 DarkSword iOS Exploit Kit Adds Crypto Wallet Data Theft and Remote Commands](<https://thehackernews.com/2026/10/p7-darksword-ios-exploit-kit-adds.html>)

---

## How OPSWAT Can Help

For command-and-control, lateral movement, or malicious network traffic, MetaDefender NDR can add network-level threat visibility and investigation context; results depend on observable traffic and deployment scope. [MetaDefender NDR](<https://www.opswat.com/products/metadefender>)