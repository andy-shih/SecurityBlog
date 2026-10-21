---
title: "CISO Daily Digest: Eight eMudhra CA Keys Compromised, Triggering Emergency Fixes Across Browsers and Software (20261021)"
description: "Two significant security incidents emerged on October 20, 2026: a fundamental PKI failure where eight eMudhra CA intermediate keys were compromised due to cryptographic weakness from a flawed key ceremony, prompting emergency revocations across all major browsers and runtime trust stores; and a novel attack campaign where autonomous AI agents breached over 100 organizations across 1,200+ targeted websites, demonstrating low-cost, scalable offensive automation using exposed AI agent control panels."
pubDate: 2026-10-21
tags: ["cybersecurity","threat-intelligence","ciso-daily","pki","certificate-authority","ai-agents","autonomous-attacks","supply-chain"]
author: "Security Solutions Team"
featured: true
---

## Eight eMudhra CA Keys Compromised, Triggering Emergency Fixes Across Browsers and Software

The private keys of eight eMudhra intermediate certificate authority certificates were compromised due to insufficient randomness during a April 2025 key ceremony, allowing anyone to compute the keys from public certificates. Mozilla and Google Chrome Root Program confirmed the compromise on October 20, 2026, after a researcher reported it on October 17. The affected certificates include six TLS intermediates (domain validated, organization validated, and extended validation) and two code-signing intermediates, all cross-signed by Sectigo.

Chrome blocked the six TLS intermediates via CRLSet update within hours of the report, and Mozilla pushed a OneCRL block to Firefox. Apple, Microsoft, Android, and other trust stores also revoked trust. Go, Python certifi, NSS, Rust webpki-roots, Homebrew ca-certificates, and Composer ca-bundle released fixes that either block the specific keys or remove the compromised root certificates from their trust bundles. Cloudflare updated its WARP and 1.1.1.1 clients. No evidence of past misuse has been found, but detection is limited to Certificate Transparency logs.

Mozilla removed the emSign ECC Root CA-G3 from NSS, and Chrome plans to remove it from its root store by October 27, requiring website operators using that hierarchy to migrate. eMudhra stated only one intermediate was deployed in production and none issued end-entity certificates, attributing the flaw to a key wrap/unwrap error during the ceremony. The company faces reputational damage and is providing replacement certificates while root programs investigate.

### CISO Impact

- **Audit and harden trust store management for PKI dependencies —** Immediately inventory all systems relying on eMudhra/emSign certificate chains and migrate to unaffected CAs before Chrome root removal on October 27. Validate that internal applications, IoT devices, and third-party services properly handle revocation via CRL/OCSP or have updated trust bundles (Go 1.27.3/1.26.10, Python certifi 2026.10.19, Node.js pending). Test for breakage in mutual TLS, container images, and legacy systems that may not receive automatic updates.
- **Detect and prevent AI-driven autonomous attack infrastructure —** Deploy network scanning for exposed AI agent control panels (commonly port 8000) and implement egress monitoring for anomalous automated web traffic patterns consistent with AI-driven reconnaissance (rapid sequential requests, diverse user agents, credential testing). Integrate threat intelligence on Cairn framework indicators and known malicious operator infrastructure. Enforce WAF rules targeting automated exploit chains against common CMS/e-commerce platforms.
- **Secure AI/ML tooling and penetration testing artifacts —** Mandate authentication and network segmentation for all internal AI agent frameworks (Cairn, Claude Code, DeepSeek integrations) and penetration testing platforms. Conduct immediate audit of red team/penetration testing engagements for exposed control panels or leaked credentials. Implement secrets scanning in CI/CD and artifact repositories to detect keys exposed via compromised agent panels. Require MFA and zero-trust access for all offensive security tooling.

**Reference:** [Eight eMudhra CA Keys Compromised, Triggering Emergency Fixes Across Browsers and Software](<https://thehackernews.com/2026/10/eight-emudhra-ca-keys-compromised.html>)

---

## Active Threats This Week

📌 **Hackers Use Autonomous AI Agents to Breach Company Websites, Target Over 1,200 Sites**

A Chinese-speaking threat actor used autonomous AI agents via the open-source Cairn framework to attack over 1,200 company websites, compromising more than 100 organizations including Deere, SharkNinja, and Cummins. The agents, operated through exposed Cairn control panels discovered by researcher Snorre Fagerland of NorForge, achieved roughly a 10% success rate with average breach time under 23 hours at an estimated cost of $5 per task. Attack chains varied per victim, exploiting issues like unsafe PHP object handling, memcached session write access, and outdated Zend Framework code. Exposed panels also leaked hundreds of valid credentials and keys from victim environments, and some legitimate penetration testing firms left client data on unsecured instances. Defenders should scan for exposed agent panels on port 8000, monitor for unexpected file upload forms, and ensure Magento patches for CVE-2026-75650 are applied.

**Reference:** [Hackers Use Autonomous AI Agents to Breach Company Websites, Target Over 1,200 Sites](<https://thehackernews.com/2026/10/hackers-use-autonomous-ai-agents-to.html>) 

---

📌 **Critical FortiSIEM Flaw Gets Public Exploit PoC for Unauthenticated Remote Code Execution**

Researchers released a public proof-of-concept for CVE-2026-106173, a critical path traversal flaw in FortiSIEM scored at CVSS 9.4, allowing unauthenticated attackers to achieve remote code execution by writing arbitrary files through the gRPC service on TCP port 27918. Horizon3.ai said the gRPC QueryResultReq handler does not properly validate untrusted metadata, enabling directory traversal sequences and null byte injection to overwrite existing files such as a Redis health check shell script executed every 60 seconds by cron. Fortinet patched the flaw in FortiSIEM 7.5.1 and later; FortiSIEM 7.6 is not affected, while FortiSIEM 7.5.0 customers should upgrade to 7.5.1 or above.

**Reference:** [Critical FortiSIEM Flaw Gets Public Exploit PoC for Unauthenticated Remote Code Execution](<https://thehackernews.com/2026/10/critical-fortisiem-flaw-gets-public.html>) 

---

📌 **JPCERT/CC Weekly Report Covers Multiple Vendor Vulnerabilities Including Actively Exploited Flaws**

JPCERT/CC's October 21 weekly report summarizes security advisories across 24 products from vendors including Microsoft, Juniper, BeyondTrust, Adobe, Cisco, Ivanti, Palo Alto Networks, and Fortinet. Several entries note confirmed exploitation: BeyondTrust Remote Support authentication bypass (BT26-05), Cisco Secure Email Gateway arbitrary file write, Ivanti Connect Secure authentication bypass (CVE-2026-104935), Nextcloud Collabora Online CODE Server, SiteGuard Server Edition OS command injection, and Microsoft October Patch Tuesday flaws. JPCERT/CC also published an investigation into consecutive unauthorized access incidents in Japan, finding attackers used AI to automate vulnerability scanning and API attacks from multiple internet-facing servers targeting Japanese and non-Japanese web services. Proof-of-concept code availability is noted for Next.js CVE-2026-96889 and GitLab CVE-2026-97229.

**Reference:** [Weekly Report: Microsoft Edgeに複数の脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261021.html>) 

---

📌 **PHP Issues Emergency Patches for Two Critical RCE Flaws Dubbed PHP2Shell**

PHP released out-of-cycle security updates on October 21 for two critical remote code execution vulnerabilities (CVE-2026-109618 and CVE-2026-109619) rated CVSS 9.2, collectively nicknamed PHP2Shell by researchers. Only the four supported branches (8.2 through 8.5) receive fixes; versions 8.1 and older are end-of-life with no vendor patches. No active exploitation has been reported as of the release, though exploit attempts emerged quickly after disclosure. Approximately 884,000 internet-facing hosts reported PHP 8.1 or older via Shodan banners. Organizations should inventory all PHP installations including bundled appliances and control panels, prioritize patching internet-facing systems, and consider isolating unpatched internet-facing applications per CERT-EU guidance. Monitoring for PHP processes spawning shells or download tools is advised.

**Reference:** [PHP2Shell: Two Unpatched Critical PHP RCE Flaws \(CVSS 9.2\) Trigger Emergency Security Alert](<https://thehackernews.com/2026/10/php2shell-two-unpatched-critical-php.html>) 

---

📌 **Attackers Use Compromised UpdraftCentral Keys to Backdoor WordPress Sites**

Threat actors breached TeamUpdraft's website on October 17-18, accessing customer connection keys for UpdraftCentral, UpdraftVault, and UpdraftClone. Attackers used valid keys to issue plugin.upload\_plugin commands via the UpdraftCentral RPC channel, installing backdoor plugins on connected WordPress sites over an 18-hour window on October 18-19. The backdoor creates hidden administrator accounts (e.g., data-ops43) and persists after plugin removal. TeamUpdraft released UpdraftPlus 1.26.13/2.26.13 to automatically disconnect pre-October 18 keys, rotated all credentials, and notified the UK ICO. Site owners should update UpdraftPlus, disconnect and reconnect UpdraftCentral, audit administrator accounts and plugins for indicators of compromise (listed plugin names, account names, and IP addresses), and restore from pre-October 17 backups if compromised. This is the second UpdraftCentral supply chain incident in five months following CVE-2026-10795 in June.

**Reference:** [Attackers Abuse UpdraftCentral Keys to Plant Backdoors on WordPress Sites](<https://thehackernews.com/2026/10/attackers-abuse-updraftcentral-keys-to.html>) 

---

📌 **Qilin and INC Ransomware Groups Exploit Palo Alto Networks Flaw to Bypass MFA**

Palo Alto Networks continues to observe exploitation of CVE-2026-0257, a patched authentication bypass affecting PAN-OS and Prisma Access that enables unauthorized VPN connections. Qilin and INC ransomware operators are using the flaw for initial access and MFA bypass, followed by RMM reconnaissance, lateral movement via RDP and SMB, credential harvesting, data exfiltration, and ransomware deployment. In one case, attackers pivoted to vCenter, disabled ESXi security controls, and extracted domain credentials from a virtual controller disk, circumventing in-guest EDR. Sectors affected include education, financial services, healthcare, high technology, hospitality, manufacturing, professional and legal services, government, transportation and logistics, utilities and energy, and retail.

**Reference:** [Qilin and INC Ransomware Groups Exploit Palo Alto Networks Flaw to Bypass MFA](<https://thehackernews.com/2026/10/qilin-and-inc-ransomware-groups-exploit.html>) 

---

📌 **Ex-OpenAI Engineer Held Over Secret Recorder, Saudi Ties**

Dark Reading reports that former OpenAI engineer Abdulrahman Alfozan was ordered detained after allegedly installing a hidden recording device in an executive conference room by September 28, recording through at least October 5, with a second device found in a bag left at OpenAI. He faces a felony charge of illegally intercepting oral communications carrying up to five years in prison. Prosecutors cited his frequent contact with a Saudi royal family member urging him to join a Saudi AI initiative, a one-way ticket to Riyadh, and his wife and infant son's departure for Saudi Arabia before his October 9 arrest.

**Reference:** [Ex-OpenAI Engineer Held Over Secret Recorder, Saudi Ties](<https://www.darkreading.com/insider-threats/ex-openai-engineer-secret-recorder-saudi-ties>) 

---

📌 **CISA Orders Federal Agencies to Patch Exploited Plex2Shell, Siemens, and SiteGuard Flaws**

CISA added four actively exploited Plex Media Server vulnerabilities, collectively Plex2Shell, to its KEV catalog: CVE-2026-96652 (SSRF, CVSS 5.3), CVE-2026-96654 (encoded URI scheme neutralization, CVSS 6.9), CVE-2026-96655 (SSRF, CVSS 5.3), and CVE-2026-96656 (external file name or path control, CVSS 8.6). Researcher Zach Main reported the flaws, which can be chained for unauthenticated remote code execution and were fixed in Plex Media Server 1.43.3.10861 on August 3, 2026. Threat actors have weaponized them to deploy cryptocurrency miners and proxy malware. CISA also flagged Siemens Software Center DLL sideloading CVE-2026-110936 (CVSS 8.4), abused in ClickFix attacks via Romulus, and EG Secure Solutions SiteGuard Server Edition command injection CVE-2026-106931 (CVSS 8.5), confirmed exploited by the vendor. FCEB agencies must patch CVE-2026-106931, CVE-2026-96656, and CVE-2026-96654 by October 23, 2026, and the remainder by November 3, 2026.

**Reference:** [CISA Orders Federal Agencies to Patch Exploited Plex2Shell, Siemens, and SiteGuard Flaws](<https://thehackernews.com/2026/10/cisa-orders-federal-agencies-to-patch.html>) 

---

📌 **Hackers Hid Vasilek Backdoor in VMware Tools During 2-Year Russian Healthcare Intrusion**

Solar reports that the Belarus-aligned Cyber Partisans group maintained access to an unnamed Russian healthcare organization for nearly two years beginning in early 2024, using a loader-scheduler service named "vmauad" disguised as a VMware component. Attackers planted malicious executables or replaced legitimate VMware DLLs, including "vmtools.dll", within a trusted VMware Tools directory to deploy Vasilek version 1.5.8. The backdoor can collect system information, execute commands, transfer files, capture screenshots, log keystrokes, escalate privileges via runas, and simulate user input through a new "move\_cursor" command. The group also cleared Windows event logs using Evlx and staged destructive capability with a wiper called Pryanik, though no destructive activity occurred during this intrusion. Solar also disclosed a phishing campaign using JavaScript attachments mimicking business documents to deliver HypeAgent, a trojan capable of stealing browser cookies, controlling webcams, launching hidden VNC and RDP sessions, and tampering with the Exodus wallet app.

**Reference:** [Hackers Hid Vasilek Backdoor in VMware Tools During 2-Year Russian Healthcare Intrusion](<https://thehackernews.com/2026/10/hackers-hid-vasilek-backdoor-in-vmware.html>) 

---

📌 **AOMEI Backup Software Hit by Supply Chain Attack as Hackers Hijack Update Mechanism to Distribute Backdoor**

iThome reports that attackers briefly hijacked AOMEI backup software's update mechanism to distribute a backdoor. Because this is headline-only coverage, customers should treat possible supply-chain exposure as conditional and verify update integrity through official AOMEI channels before applying updates.

**Reference:** [AOMEI備份軟體遭供應鏈攻擊，駭客短暫劫持更新機制散布後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5FaFhFX182NWNvRXp1SjZudFJnSDlmTlBhTnJ5aEtKaUVZRXoybFNaWGZjWWhBS1pmS003TTN6NHhsbDh0NzByRFJkZk1ZZw?oc=5>) 

---

📌 **Drupal Developers Patch Critical RCE Bugs and Expect Exploits Soon**

Xakep reports that Drupal developers have patched critical remote code execution vulnerabilities and anticipate exploit activity soon. Because this is headline-only coverage, customers should treat potential exploitation as conditional and prioritize applying vendor patches and reviewing Drupal security advisories.

**Reference:** [Разработчики Drupal исправили критические RCE-баги и ожидают скорого появления эксплоитов](<https://xakep.ru/2026/10/20/drupal-rces>) 

---

📌 **China-Aligned Bronze Sandcastle Abuses Sandboxie DLL Sideloading to Deploy Backdoors**

China-aligned threat cluster Bronze Sandcastle has targeted organizations in Asia and Africa since mid-2025, with observed victims in the Philippines, Taiwan, Afghanistan, Namibia, and likely South Korea. The actor relies on Sandboxie DLL sideloading and at least seven other legitimate executable and DLL combinations to load malicious sbiedll.dll files. Encrypted config.ini payloads, versions 1.1.5 and 1.1.7, function as backdoors that enumerate accounts, collect system metadata, processes, keystrokes, and screenshots, and communicate with file-sharing sites, C2 domains, and formerly a GitHub repository.

**Reference:** [China-Aligned Bronze Sandcastle Abuses Sandboxie DLL Sideloading to Deploy Backdoors](<https://thehackernews.com/2026/10/china-aligned-bronze-sandcastle-abuses.html>) 

---

📌 **Hackers Abuse AI Pen-Test Tool Cairn to Automate Massive Attack Spree**

Dark Reading reports that threat actors are abusing the AI penetration-testing tool Cairn to automate a large-scale attack campaign. Because only a headline is available, no confirmed victim scope, techniques, or outcomes can be described. Customers should treat this as emerging headline coverage and await technical details before assuming impact.

**Reference:** [Hackers Abuse AI Pen-Test Tool Cairn to Automate Massive Attack Spree](<https://www.darkreading.com/cyberattacks-data-breaches/hackers-abuse-ai-pen-test-tool-cairn>) 

---

📌 **CISA Adds Six Vulnerabilities in Plex, SiteGuard, and Siemens Products to KEV Catalog**

iThome reports that CISA has listed six vulnerabilities affecting Plex, SiteGuard, and Siemens products in its Known Exploited Vulnerabilities catalog. Because only a headline is available, specific CVE IDs, affected products, and exploitation details cannot be confirmed. Customers should monitor CISA KEV updates and apply mitigations as official advisories are published.

**Reference:** [CISA將Plex、SiteGuard、西門子產品6個漏洞列KEV - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9MV0Iwb3p0SHJVNExkTVE3UXRoWWdHd2xhTmV2Tjdhd2hpcXNLbEUwLTJQallUZWZ2Y2xucnNfTUlrUnR5Mlh2bEppTEFXZw?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261021-1-1792617632864 -->
