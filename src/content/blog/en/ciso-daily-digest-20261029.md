---
title: "CISO Daily Digest: Keystone destroys nearly 19,000 hardware wallets due to theft of cryptographic key (20261029)"
description: "Three October 2026 cybersecurity incidents illustrate distinct threat vectors: a hardware wallet fleet destroyed after cryptographic key theft, a PHP2Shell attack chain exploiting firewall management interfaces to root government-affiliated servers, and exploitation of a Cisco SD-WAN vulnerability to steal encryption keys from SD-WAN control traffic. All three involve exposed management interfaces or privileged services being leveraged for initial access or data exfiltration."
pubDate: 2026-10-29
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Keystone destroys nearly 19,000 hardware wallets due to theft of cryptographic key

Keystone hardware wallets are being remotely destroyed after a cryptographic key was stolen, affecting approximately 19,000 units. The incident stems from a compromise of the device's signing key, which allowed unauthorized actions against the fleet. The manufacturer has initiated a destruction process for the affected devices.

The destruction of nearly 19,000 hardware wallets represents a significant loss for users relying on the Keystone brand for cold storage. While the exact vector for the key theft is not detailed in the headline, the scale of the impact underscores the risk of centralized key management in hardware wallet ecosystems. Users are advised to verify the integrity of their devices and follow any manufacturer guidance regarding key compromise.

The event highlights the importance of secure key storage and the potential consequences when signing keys are exposed. Affected users should treat their wallets as compromised and follow recommended recovery procedures, which may include replacing the device and re-securing any associated funds on a new, verified platform.

### 📌CISO Impact

- **Management interface exposure —** Restrict administrative access to management interfaces and enforce IP allowlisting where feasible to reduce the attack surface for remote code execution and privilege escalation chains.
- **Supply chain and fleet integrity —** Monitor manufacturer security advisories for hardware wallet and firmware updates, and validate device integrity after any suspected key compromise.
- **Encryption key protection —** Audit SD-WAN and similar control-plane traffic for unauthorized key extraction, and apply vendor patches promptly to known critical vulnerabilities.

**Reference:** [Keystone уничтожит почти 19 000 аппаратных кошельков из-за кражи криптографического ключа](<https://xakep.ru/2026/10/28/keystone-hacked>)

---

## Active Threats This Week

📌 **PHP2Shell Attack Roots 25 Servers, Breaches U.S. Government-Affiliated Network**

A PHP2Shell attack chain, augmented with a Linux kernel privilege escalation vulnerability, has rooted 25 servers including three in a U.S. government-affiliated environment. The attacker combined PHP2Shell unauthenticated remote code execution flaws (CVE-2026-109618, CVE-2026-109619) with the kernel flaw CVE-2026-46300 (Fragnesia) to gain root access on exposed firewall management servers. The operation targeted approximately 19,000 internet-facing firewalls, narrowing to 240 viable targets and ultimately compromising 25 systems, two of which were linked to a U.S. government organization.

**Reference:** [PHP2Shell Attack Roots 25 Servers, Breaches U.S. Government-Affiliated Network](<https://thehackernews.com/2026/10/php2shell-attack-roots-25-servers.html>) 

---

📌 **Hackers Exploited Cisco SD-WAN Flaw to Plant Malware Built to Steal Encryption Keys**

Hackers exploited a critical Cisco Catalyst SD-WAN flaw (CVE-2026-20127, CVSS 10.0) to deploy KeyDrift malware designed to steal and exfiltrate encryption keys used to protect SD-WAN traffic. The malware, attributed to a group tracked as UAT-11473 with infrastructure overlap to Volt Typhoon, targets controllers and validators to extract AES-256 key material. Affected systems include on-premises and hosted cloud deployments, with fixed releases available across multiple train lines.

**Reference:** [Hackers Exploited Cisco SD-WAN Flaw to Plant Malware Built to Steal Encryption Keys](<https://thehackernews.com/2026/10/hackers-exploited-cisco-sd-wan-flaw-to.html>) 

---

📌 **Attackers Exploit PHP2Shell Flaws in Internet-Exposed Palo Alto Networks Management Interfaces**

Palo Alto Networks warned that threat actors are actively exploiting the recently patched PHP2Shell vulnerabilities against publicly accessible management interfaces. CVE-2026-109618 and CVE-2026-109619 allow unauthenticated remote code execution on affected PHP versions and were patched upstream on October 21, 2026. A suspected China-nexus actor weaponized the flaws with the Fragnesia Linux kernel privilege escalation bug, CVE-2026-46300, to compromise 25 servers across the United States, Japan, Taiwan, and South Korea, including three systems in a U.S. government-affiliated environment. CISA added CVE-2026-46300 to its KEV catalog with a federal patch deadline of October 31, 2026. PAN-OS versions 10.2 through 12.2 are affected, with no special configuration required when management interfaces are exposed externally. Palo Alto Networks recommends restricting management interface access to trusted internal IP addresses and provided Frontier Virtual Patching coverage via Threat ID 543004 for PAN-OS 12.2.4 and later.

**Reference:** [Attackers Exploit PHP2Shell Flaws in Internet-Exposed Palo Alto Networks Management Interfaces](<https://thehackernews.com/2026/10/attackers-exploit-php2shell-flaws-in.html>) 

---

📌 **Volt Typhoon Used Covert Silent Train Network in Four Zero-Day Exploitation Campaigns**

Lumen Technologies Black Lotus Labs attributed a disrupted covert access network called Silent Train to the China-nexus espionage group Volt Typhoon, which used it for four zero-day exploitation campaigns since late 2023. The network used rotating chains of compromised SOHO, IoT, and enterprise devices with anti-forensic techniques and post-operation cleanup to maintain strategic access. Confirmed zero-days include Versa Director CVE-2024-39717, N-able N-central CVE-2025-8875 and CVE-2025-8876, Cisco Catalyst SD-WAN Controller CVE-2026-20127, and Arista VeloCloud Orchestrator CVE-2026-16812, with a suspected Quest KACE zero-day also linked to the campaign. Hundreds of victims spanned telecommunications, government, defense, satellite services, universities, IT firms, and critical infrastructure including water, energy, transportation, maritime, rail, aviation, and emergency services, with operational focus on Hawaii, California, and Texas.

**Reference:** [Volt Typhoon Used Covert Silent Train Network in Four Zero-Day Exploitation Campaigns](<https://thehackernews.com/2026/10/volt-typhoon-used-covert-silent-train.html>) 

---

📌 **PHP Vulnerabilities CVE-2026-109618 and CVE-2026-109619 Advisory**

JPCERT/CC issued an advisory for two PHP remote code execution vulnerabilities, CVE-2026-109618 and CVE-2026-109619, patched in PHP 8.5.12, 8.4.27, 8.3.36, and 8.2.35. The advisory notes that PHP 8.1 and earlier are unsupported and recommends upgrading. Public proof-of-concept code exists and exploitation attempts have been observed, though successful execution depends on environment-specific conditions. A separate informational advisory covers CVE-2026-115560, with session.upload\_progress.enabled=0 recommended as a mitigation until an update is released. JPCERT/CC also reported evidence suggesting successful compromise of certain firewall product versions linked to PHP2Shell exploitation combined with a Linux kernel privilege escalation, including lateral movement attempts.

**Reference:** [注意喚起: PHPにおける複数の脆弱性（CVE-2026-109618、CVE-2026-109619）に関する注意喚起  \(更新\)](<https://www.jpcert.or.jp/at/2026/at260033.html>) 

---

📌 **Cisco Patches Actively Exploited ASA and FTD VPN Flaw That Can Crash Firewalls**

Cisco has patched CVE-2026-76418, a high-severity flaw in Secure Firewall ASA and FTD software being actively exploited since October 2026 to crash devices via crafted requests to the Remote Access SSL VPN service when secondary authentication is configured. Successful exploitation allows unauthenticated remote denial of service without requiring a VPN login. Fixed versions include ASA 9.16.4.104, 9.18.4.96, 9.20.4.50, 9.22.3.200, 9.23.1.48, 9.24.1.27, and 9.24.10.1, plus FTD 7.0.11, 7.2.13, 7.4.9, 7.6.7, 7.7.14, 10.0.3, and 10.1.1.

**Reference:** [Cisco Patches Actively Exploited ASA and FTD VPN Flaw That Can Crash Firewalls](<https://thehackernews.com/2026/10/cisco-patches-actively-exploited-asa.html>) 

---

📌 **Telegram Android Flaw Lets Attackers Run Code When Users Answer Voice Calls**

NebuSec disclosed a Telegram for Android flaw affecting versions 8.6.2 through 12.10.3 that permits code execution when a victim answers a voice call, fixed in version 12.10.4 released in late September 2026. The issue lies in mishandled MediaState call messages accessing invalid memory. No CVE has been assigned, and there is no confirmed evidence of real-world exploitation, iOS or desktop impact, or specific data access by attacker code.

**Reference:** [Telegram Android Flaw Lets Attackers Run Code When Users Answer Voice Calls](<https://thehackernews.com/2026/10/telegram-android-flaw-lets-attackers.html>) 

---

📌 **26,400 Valid Cloud and AI Credentials Found Exposed in Public Gitee Repositories**

Ben Zimmermann scanned 7.25 million public Gitee repositories and found 26,400 still-valid cloud and AI credentials, including 9,473 Alibaba Cloud AccessKey pairs, 3,805 YouTube API keys, 3,170 DeepSeek keys, 1,489 BigModel keys, and 1,348 OpenAI keys. Nearly half date from 2025. Researchers advise treating any key ever committed to public Gitee as exposed and rotating it immediately, since deletion from code does not revoke credentials.

**Reference:** [26,400 Valid Cloud and AI Credentials Found Exposed in Public Gitee Repositories](<https://thehackernews.com/2026/10/26400-valid-cloud-and-ai-credentials.html>) 

---

📌 **Hackers claim to have stolen more than 40,000 U.S. Department of Homeland Security employee records**

iThome reports that hackers claim to have stolen data on more than 40,000 U.S. Department of Homeland Security employees.

**Reference:** [駭客宣稱竊走美國土安全部員工資料超過4萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1SbVFzRHdHQV9mUUI4dkd4M0hScVZkamJScHJxNXBRTHNaNy0zSk5lWGdjVzNCc3Mza3BMSngweGRzeGVESHc5NlJWWEVrZw?oc=5>) 

---

📌 **Recently patched critical Oracle E-Business Suite vulnerability exploited**

iThome reports that a recently patched critical vulnerability in Oracle E-Business Suite has been exploited.

**Reference:** [甫修補的Oracle E-Business Suite重大漏洞遭到利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5xbWliYjI1Z1VJVGxYZ2EtUTVqUWhHRWdQbkdETldkeG9iMXdSUE9sams3a1RDMEM1ckFGVmFKT3lHSGw0RWtLdFI2bFpIdw?oc=5>) 

---

📌 **GitHub Launches npm Firewall to Block Malicious Packages Before Installation**

GitHub has introduced a public preview npm package firewall for GitHub Enterprise Cloud customers, including data-resident instances. The firewall sits between endpoints or internal registries and upstream package repositories and inspects metadata requests and package downloads at install time. Administrators configure policy controls such as blocking known malware via the GitHub Advisory Database, blocking by vulnerability severity with a default of Critical only, blocking attestation downgrades, blocking newly introduced preinstall or postinstall scripts, and enforcing a cooldown period for newly published package versions. Blocked packages can be unblocked through an exception request approved by enterprise administrators and security managers. Currently only npm packages are supported.

**Reference:** [GitHub Launches npm Firewall to Block Malicious Packages Before Installation](<https://thehackernews.com/2026/10/github-launches-npm-firewall-to-block.html>) 

---

📌 **Hive ransomware affiliate jailed, years after FBI infiltrated the gang’s systems**

A Hive ransomware affiliate has been sentenced to prison years after the FBI infiltrated the gang’s systems.

**Reference:** [Hive ransomware affiliate jailed, years after FBI infiltrated the gang’s systems](<https://www.bitdefender.com/en-us/blog/hotforsecurity/hive-ransomware-jailed-fbi-infiltrated>) 

---

📌 **Researcher Reveals How Logic Bugs Alone Cracked Microsoft Edge in $175,000 Pwn2Own Win**

DEVCORE researcher Orange Tsai demonstrated a Microsoft Edge sandbox escape built solely from logic flaws, winning $175,000 at Pwn2Own Berlin in May 2026. The under-100-line chain created a universal cross-site scripting primitive, then escaped Edge’s sandbox through Immersive Reader and a malicious file write that triggered telnet code execution. Microsoft patched the bugs the day after the contest in Edge Stable 148.0.3967.70, tracking them as CVE-2026-45492, CVE-2026-45494, and CVE-2026-45495. Tsai said there is no evidence the chain was used against real users and public CVE records list exploitation as none. Keeping Edge updated closes the chain.

**Reference:** [Researcher Reveals How Logic Bugs Alone Cracked Microsoft Edge in $175,000 Pwn2Own Win](<https://thehackernews.com/2026/10/researcher-reveals-how-logic-bugs-alone.html>) 

---

📌 **More than 850 GitHub accounts compromised in Gheist attack planting malicious workflows to steal secrets**

iThome reports that over 850 GitHub accounts were compromised in a Gheist campaign in which attackers planted malicious workflows attempting to steal secrets.

**Reference:** [逾850個GitHub帳號遭入侵，駭客發動Gheist攻擊植入惡意工作流程企圖竊密 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE92cjJnUDlhelFrR3F0UGJJRlAwNWxWeUVjYzZLdDFNUGs2NzVwSEh5djEtWjRmOHpTcHJEWWI1MVVNU09MREE5Qkx0SGVoUQ?oc=5>) 

---

📌 **Sony Japan ISP insurance business system hacked, 2.58 million members and 385,000 policyholders' personal data exposed - iThome**

iThome reports that a Sony Japan ISP insurance business system was breached, exposing personal data belonging to 2.58 million members and 385,000 policyholders.

**Reference:** [Sony日本ISP、保險業務系統被駭，外洩258萬會員、38.5萬保戶個資 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RdGp5N3dYVTA2OVVYRnY0c256d1hiOWJycUJjWUYtYldsa1VpT2NNdHNPVjU4U2g3N1Jwd1h4ZW5jOFJRUlNsNVlUd3NVQQ?oc=5>) 

---

📌 **U.S. sanctions North Korean remote IT job fraud network, targets Russian money laundering intermediary - iThome**

iThome reports that the United States has sanctioned a North Korean remote IT job fraud network and targeted a Russian money laundering intermediary.

**Reference:** [美國制裁北韓遠端IT工作詐騙網絡，鎖定俄羅斯洗錢中間人 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBZTTBhRDlzRmFRNkc1VmVZSll4T3QxbVN1Ylg5b3JoZ2FnWXQ5cGpDYUxQcDBsOTRtVi1yS1BodVA1em4yQkRHcnh2SmJCUQ?oc=5>) 

---

📌 **CVE 2026-109619 - iThome**

iThome reports on CVE 2026-109619.

**Reference:** [CVE 2026-109619 - iThome](<https://news.google.com/rss/articles/CBMiXEFVX3lxTE13cmVUZGo5dEtxbm5Ka1JvdXlYY05kMWR0RW12ZlVfZG9ORlNRM0pfOHFvanNSbGNSYzRFMTM4eXQxOWstYmg5Z1JtOUtFZWJ3UW90Q2JTYTBxSTJD?oc=5>) 

---

📌 **Hackers use AI penetration testing tool ARTEX to steal South Korean financial industry data**

CrowdStrike disclosed on October 7, 2026 that attackers likely abused ARTEX, an AI-assisted penetration testing tool, to steal data from South Korean financial institutions, obtaining ARTEX configuration files and operational logs from attackers' public directories and finding use of multiple large language models and proxy servers. No specific APT group has been attributed. South Korea's Financial Services Commission reported on October 16, 2026 that 16 financial firms experienced data leaks affecting about 100,000 customer records, though whether all incidents relate to ARTEX remains unclear. Leaked data reportedly included customer names, contact information, email addresses, and South Korean resident registration numbers, with no reported account passwords or credit card numbers. TWCERT/CC advises organizations to inventory external services, test query permission boundaries, compare indicators including nine proxy and ARTEX host IP addresses against firewall, VPN, proxy, and database logs, isolate affected hosts if compromise is confirmed, preserve forensic evidence, and strengthen MFA.

**Reference:** [駭客利用AI滲透測試工具ARTEX竊取韓國金融業資料](<https://www.twcert.org.tw/tw/cp-104-11352-8c3dc-1.html>) 

---

📌 **Shadowy AI Relay Disables OpenAI Codex, Claude Code Sandboxes**

Dark Reading reports that an enigmatic AI relay service provides OpenAI Codex and Claude Code to mainland China and other regions where these products are not officially sold, with key security features turned off.

**Reference:** [Shadowy AI Relay Disables OpenAI Codex, Claude Code Sandboxes - Dark Reading](<https://news.google.com/rss/articles/CBMioAFBVV95cUxPU0pDX2pVQjkzZ3FqYjVRYVN5d0E5QllrX09mTXVISmtQd3pMWU9jYUZLRUVvbmRDZkxXNkZDdnFUc0F6Tnlhd203eEdTNEgta3VLeFhsOG5Ubk80eXFEWUtETzdwd2c5UzhLRmN1eDBnUE1VcXdsYjBQUHhKOEJVLU1ITUtnZTFsendwYWhsQ3dDVFBvVTVEVERqNmdaM2pR?oc=5>) 

---

📌 **Security Daily October 29: North Korean hackers target 216 PHP hosts scanning PHP2Shell vulnerability, Taiwan included in targeting scope**

iThome reports that North Korean hackers are scanning 216 PHP hosts for the PHP2Shell vulnerability and that Taiwan is included in the targeting scope.

**Reference:** [【資安日報】10月29日，北韓駭客鎖定216臺PHP主機掃描PHP2Shell漏洞，臺灣列入目標範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5YRlk0U3FCanJYMXdkbTFlXzgwZ3FuRll3QmlxeDRGNmFXaGVOdk9fMzNreDQ2dU8zMmVWSjZyaHh5T292czNsdk82R0UzUQ?oc=5>) 

---

📌 **China-Linked Hackers Exploited VMware ESX Zero-Day to Reduce Audit Trail Visibility**

CISA added CVE-2026-41709 to its KEV catalog after CrowdStrike reported China-nexus actor Warp Panda exploited the VMware ESX zero-day in early 2026 to reduce audit trail visibility in attacks targeting the U.S. legal sector. The insufficient logging flaw lets an actor with admin access perform operations without being logged. Broadcom addressed it in July 2026 across VMware Cloud Foundation, vSphere Foundation, ESX, ESXi, and Telco Cloud Platform versions. CrowdStrike said Warp Panda, also tracked as Armory Castle, Clay Typhoon, and VerdantBamboo, exploits internet-facing edge devices for initial access, pivots to vCenter to deploy BRICKSTORM and SharpStorm malware, harvests cloud session tokens to access Microsoft 365, and registers rogue MFA devices for persistence. FCEB agencies are recommended to apply fixes by November 11, 2026.

**Reference:** [China-Linked Hackers Exploited VMware ESX Zero-Day to Reduce Audit Trail Visibility](<https://thehackernews.com/2026/10/china-linked-hackers-exploited-vmware.html>) 

---

📌 **French supermarket hack raises concern; researchers find nearly 13,000 refrigeration management services exposed publicly across 99 countries**

iThome reports that following a French supermarket breach, researchers found nearly 13,000 refrigeration management services exposed on the public internet across 99 countries.

**Reference:** [法國超市遭駭引發關注，研究人員發現全球99國近1.3萬筆冷藏管理服務暴露於公開網路 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9EVjBjX2xZUmFfLXg1T3c1Z2Z1QkVzUG8yYXkyMXN1eHhRU2dEaXdVVmxhdFkxbWJpV3kyT2E5bmpPTks4eXkxeFFPb0gtZw?oc=5>) 

---

📌 **Linux kernel and VMware ESX vulnerabilities actively exploited**

iThome reports that Linux kernel and VMware ESX vulnerabilities are being actively exploited.

**Reference:** [Linux核心、VMware ESX漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9SY0N2Xy1VR08xN1ZMUWFtYVhKQUZ6dTRKOFlpQXE2Y0E1bFY3Vk9sUWRDalpMRUJickJsQ3JoT1hfMlRyOVZubTlpSlRzUQ?oc=5>) 

---

📌 **DreamHost forcibly resets user passwords**

DreamHost has been forcing password resets for users, triggering account lockouts and requiring credential recovery.

**Reference:** [DreamHost принудительно сбрасывает пароли пользователей](<https://xakep.ru/2026/10/29/dreamhost-incedent>) 

---

📌 **Google's Gemini 4 Carbon leads benchmarks for finding, exploiting, and patching vulnerabilities**

Google unveiled Gemini 4 Carbon, a frontier AI model with state-of-the-art cybersecurity and long-horizon capabilities, achieving leads in SEC-bench Pro (88.2%), ExploitGym (54.8%), and CWE-bench (71.0).

**Reference:** [Google's Gemini 4 Carbon Leads Benchmarks for Finding, Exploiting, and Patching Vulnerabilities](<https://thehackernews.com/2026/10/googles-gemini-4-carbon-leads.html>) 

---

📌 **Sandbox Flipped to ‘Danger-Full-Access’: Unauthorized AI Relays Create Risk for Organizations**

Security researchers report that sandbox environments have been flipped to 'Danger-Full-Access', allowing unauthorized AI relays that create risk for organizations.

**Reference:** [Sandbox Flipped to ‘Danger-Full-Access’: Unauthorized AI Relays Create Risk for Organizations - SECURITY.COM](<https://news.google.com/rss/articles/CBMid0FVX3lxTE5QN0N4elJKWTAzSEk2M0Y5UFdSSzVBUk5iU21qaWdEaEtoVnNJOTZ3VDB6RVF6QnZhMTJ4ZVc2bHBZb0NLWTgtbFpQR0dPbWlZYUltTTJhMm0wcTBpTDVRbkdZa0NNLUZUUlFfSWlhbHpYUkdxR3Vr?oc=5>) 

---

📌 **U.S. CISA Releases 2030 Strategy Shifting to Proactive Defense and Prioritizing Critical Infrastructure Protection**

iThome reports that U.S. CISA has released its 2030 strategy, shifting toward proactive defense and prioritizing protection of critical infrastructure.

**Reference:** [美國CISA公布2030戰略，轉向積極防禦並優先保護關鍵基礎設施 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE83Ri1Jbmd6UkpzZG9HeWdMMjk5aGRCcHV5SHBfM1hTRGNqNkx3dEt5RTh1LUVFYnk0Z3hOdWppVDZrT0p4U0xmQmNwdEdXdw?oc=5>) 

---

📌 **Adobe Releases October Mid-Month Updates, Patching 8 Critical Campaign Classic Vulnerabilities**

iThome reports that Adobe released October mid-month updates patching eight critical vulnerabilities in Campaign Classic.

**Reference:** [Adobe發布10月下半更新，修補8個Campaign Classic重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBBYlZ3Z0lEaGpzU1hvSlNOekxNOTcxYkVZQ3YxN1VLRFBCU0VTZzF6TVFjWHAtV1FpY0FvWmVqcnhJXzNXdjJOcnJTanFUUQ?oc=5>) 

---

📌 **Attacker Relentlessly Scans for Credentials by Impersonating AI Bots**

Dark Reading reports an attacker persistently scans for credentials while impersonating AI bots.

**Reference:** [Attacker Relentlessly Scans for Credentials by Impersonating AI Bots](<https://www.darkreading.com/cyber-risk/attacker-impersonates-ai-bots-scans-credentials>) 

---

📌 **Smashing Security podcast #490: How Jared Kushner’s iPhone was allegedly hacked twice**

The Smashing Security podcast episode 490 discusses alleged hacks of Jared Kushner’s iPhone on two separate occasions.

**Reference:** [Smashing Security podcast #490: How Jared Kushner’s iPhone was allegedly hacked twice](<https://grahamcluley.com/smashing-security-podcast-490>) 

---

📌 **Harmonic Security raises $50 million to expand AI agent security governance**

Harmonic Security has raised $50 million to expand AI agent security governance, according to iThome.

**Reference:** [Harmonic Security募資5,000萬美元，擴大AI代理安全治理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5qZUNIVkdIbzVFMkpYQ1UzUTdieTBCTFdOMzdlM0JmY0tTWU93eHlnczJoMHBtRFR2MF9iUFByVk5PdTBQa0ZvSnFvS0t6QQ?oc=5>) 

---

📌 **CISA offers two free tools to detect misconfigurations in Microsoft 365 and Google Workspace**

CISA has released two free tools to help organizations detect security misconfigurations in Microsoft 365 and Google Workspace, according to iThome.

**Reference:** [CISA提供兩款免費工具，協助檢測M365與Google Workspace的安全設定錯誤 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nOHVRb21DUjdCblU5NFY4MjdfRGI2elJfQXlXc1pxMlozWE15Q3hOQUppbXlJWlBJZnpaeG5ub1cwSjVEem01d1UxcDdXdw?oc=5>) 

---

📌 **macOS 27.2 unpatched eMudhra certificate risk leaves Git and curl potentially vulnerable to man-in-the-middle attacks**

iThome reports that macOS 27.2 remains unpatched for an eMudhra certificate risk, leaving Git and curl potentially exposed to man-in-the-middle attacks.

**Reference:** [macOS 27.2未修補eMudhra憑證風險，Git與curl仍可能遭中間人攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NRXJDSDlNVDVsLWNKYk9LNzRHQUNNTzNfVDl2ZTd6SlZjV19zMGtuYVhCMFc3bHpUTGV3UW0ya3pIQWFwc1pQXzNzWjFxUQ?oc=5>) 

---

📌 **Auto parts manufacturer Orange hit by ransomware attack**

iThome reports that automotive parts manufacturer Orange was hit by a ransomware attack.

**Reference:** [汽車零配件製造商橙的遭勒索軟體攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE55a0dCcWJwaWtOSlBCWFZHQ0lvMGlXZmVoRThNNUw0aTVlVEVpWUVRMmZZamJMSmRaZGhDZU0tUHd6dl9teFAwZXNyUDlVQQ?oc=5>) 

---

📌 **Copilot Fusion**

iThome reports on Copilot Fusion.

**Reference:** [Copilot Fusion - iThome](<https://news.google.com/rss/articles/CBMiWEFVX3lxTE9lb3hwY0hfREJ6YzhwWEl0RHVEbE8zcGZKcHBacDJ2UUU5S3lFdzFoVWFzMmJ1ZXRxUjdRbGIySkdjbzFKS213SkVjYU5OUnd1MXgtUVR1V1E?oc=5>) 

---

📌 **Connected Apps Platform**

iThome reports on Connected Apps Platform without additional details in the available headline.

**Reference:** [Connected Apps Platform - iThome](<https://news.google.com/rss/articles/CBMiZEFVX3lxTE1OLVBORWhZRlFOYWc0bGMwYUJjRkUzWGNvVGE2b01NRHRLcnFKOXNydk9vcjdzcmdOQk9CRXZ6dW0zNG9WR3ZxcU5HMjlEREtEOXBLOFFpS3ZFMkRsTFpZQm5JblA?oc=5>) 

---

📌 **GitHub Launches Copilot Fusion for Cross-Model Collaboration on a Single Task**

iThome reports that GitHub has introduced Copilot Fusion, enabling models to collaborate across models within a single task.

**Reference:** [GitHub發表能在單一任務內跨模型協同的Copilot Fusion - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBrTFpXNjRDQllLOHhqdU1DYVR3TktJMF8xRG50VzZJd1RtdHlTekFwRmVjWTZYcXNoTWhvZ1l1NTVqODBLTzlYVmhTZTlodw?oc=5>) 

---

📌 **Catalyst SD-WAN**

iThome reports on Catalyst SD-WAN without additional details in the available headline.

**Reference:** [Catalyst SD-WAN - iThome](<https://news.google.com/rss/articles/CBMiWkFVX3lxTE5vS1JEX0M0T2ZxaThZeDg3VWNtWThZNjhwQ0NneURDaHREZnZvTkJ3aVFSenZuMEFJTnhySlQzUUc3d05ESkZFbEp4dEYydXZqSE0xV29rM1A1dw?oc=5>) 

---

📌 **Granary v2**

iThome reports on Granary v2.

**Reference:** [Granary v2 - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTE5zcTVsTXJIbHB4YzE5OEsxV2VtSHl1N0llMjRkdTJWdGR0aUNFVE1ScnpJaW56WDQ2dzMzSjM5Q19PSTdGR05zaTRlUkFUSlFTd0R3?oc=5>) 

---

📌 **Google's Gemini 4 Carbon looks like a diamond in the rough**

The Register reports on Google's Gemini 4 Carbon.

**Reference:** [Google's Gemini 4 Carbon looks like a diamond in the rough - The Register](<https://news.google.com/rss/articles/CBMitAFBVV95cUxQclZFbTF3TUdDTjNPZlF0M3laRktFdjV2Z1ktZVFHLUQ0UG5wNGk2RnJfWUZtX08xd29tX2FYMXZFREpUZjJ3Vl93RlJuejZ4WHkxdmRfWWM3MnRXUHlXR2JNUXR5VXJCYVp1cm41dllMQlg4akc3Q2NwNy1MWlJLOUN2M19zVTBCTjZGVTUycURQZmUxMW8xbEg5Sl9sb19WNGU3dlpEUnNIaDByZk55NFYzak4?oc=5>) 

---

📌 **Nvidia releases Nemotron 3.5 speech model integrating transcription, translation and speaker recognition**

iThome reports that Nvidia has released Nemotron 3.5, a speech model combining transcription, translation and speaker recognition.

**Reference:** [Nvidia釋出Nemotron 3.5語音模型，整合轉錄、翻譯與講者辨識 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE15Z3k0bTRrZE5vdC1DalZhSVdFLTFzNndmT0sxc01MdFJuSUhVdUlOb2EtYkpZOUFpbml3b1E2Y09HamJGYVFjRmsyYVdpUQ?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261029-1-1793324490667 -->
