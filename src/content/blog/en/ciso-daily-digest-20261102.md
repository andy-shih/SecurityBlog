---
title: "CISO Daily Digest: Binance stole about $6.3 billion in cryptocurrency, the largest theft ever, investigation points to North Korean hackers - iThome (20261102)"
description: "iThome reports a $6.3 billion Binance cryptocurrency theft linked to North Korean hackers; Cisco Talos details the VOLTA infostealer's AI-powered victim ranking via Claude, Gemini, and Kimi; and Microsoft reports Teams-based social engineering combined with insecure AD CS certificate abuse in two intrusions resulting in data theft."
pubDate: 2026-11-02
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Binance stole about $6.3 billion in cryptocurrency, the largest theft ever, investigation points to North Korean hackers - iThome

iThome reports that Binance suffered a theft of approximately $6.3 billion in cryptocurrency, described as the largest theft in history.

### 📌CISO Impact

- **Prepare for nation-state cryptocurrency theft —** The reported $6.3 billion Binance theft attributed to North Korean hackers implies exchanges and crypto custodians should treat nation-state actors as a material financial risk and review cold-storage controls, withdrawal authorization, and incident response readiness.
- **Address AI-assisted infostealer triage —** VOLTA's use of LLMs to rank stolen credentials and financial data by monetization value means security teams should assume stolen browser sessions and OAuth tokens will be rapidly prioritized by attackers, shortening the window for credential rotation and session revocation.
- **Harden certificate services and Teams remote access —** The Microsoft Teams and AD CS intrusions show that social engineering combined with ESC1/ESC8 certificate misconfiguration can yield domain-controller access and persistent identity even after password resets, so CISOs should audit certificate templates, require HTTPS and Extended Protection for Authentication on enrollment endpoints, and enforce manual containment for any account excluded from automatic disruption.

**Reference:** [Binance遭竊約63億美元加密貨幣，創史上最大竊案，調查指向北韓駭客 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91SDR6VkJKNTNiNnNmTGZkRm1JTE5iX0toR3RLclNEVWhkcUZlQ2NRTWdGcGoyZV9uY1p1NHM1eU1ZTTJMWmd5WHNpSDZzdw?oc=5>)

---

## Active Threats This Week

📌 **New VOLTA Infostealer Uses Claude, Gemini, and Kimi AI to Rank Victims by Financial Value**

Cisco Talos discovered a new Windows infostealer called VOLTA-AUTODOXER that uses a large language model to rank stolen data by monetization value. The malware harvests browser credentials, cookies, Outlook and Slack data, payment cards, crypto wallet seed phrases, messaging and gaming sessions, OAuth tokens, SSH and cloud keys, Wi-Fi profiles, and screenshots. It builds a structured evidence bundle, sends it to AI models via OpenRouter with Claude Opus 4.6 as default and Kimi K2 and Gemini 2.5 Flash as fallbacks, and receives a ranked target assessment. Exfiltration occurs over Telegram in three stages, including after AI analysis and after live Gmail receipt enrichment. The template design suggests a builder kit or bespoke binary service. Talos describes the AI layer as effort displacement rather than speed or scale. The disclosure follows Talos's earlier reporting on NIK C2, an AI-enabled remote access framework that can abuse a victim's own OpenAI API key for inference.

**Reference:** [New VOLTA Infostealer Uses Claude, Gemini, and Kimi AI to Rank Victims by Financial Value](<https://thehackernews.com/2026/11/new-volta-infostealer-uses-claude.html>) 

---

📌 **Attackers Pose as IT Support on Microsoft Teams, Abuse AD CS to Steal Company Data**

Microsoft investigated two intrusions where attackers posed as IT support on Microsoft Teams, tricked employees into granting remote control via Quick Assist, and abused insecure Active Directory Certificate Services settings to obtain privileged login certificates, including one for a domain controller. The attackers exploited no Teams flaw, relied on social engineering and misconfigured AD CS, and Microsoft did not attribute the activity to a known group. In the first case, an ESC1 certificate template let a low-privileged user request certificates for privileged accounts; automatic disruption blocked most identities, but one excluded account remained usable, allowing access to a domain controller, DCSync execution, and data transfer to an external SFTP server via renamed Rclone. In the second case, the attacker used PetitPotam to force a domain controller to authenticate to an attacker-controlled machine, relayed that login to the AD CS web enrollment page (ESC8), requested a domain controller certificate, and obtained a Kerberos ticket-granting ticket; isolation of the workstation stopped further activity. Microsoft advises confirming unexpected support requests through known internal channels, restricting external Teams tenants, reviewing certificate templates, requiring HTTPS and Extended Protection for Authentication on web enrollment endpoints, turning off NTLM where possible, auditing certificates, and revoking bad certificates while reviewing active Kerberos tickets separately.

**Reference:** [Attackers Pose as IT Support on Microsoft Teams, Abuse AD CS to Steal Company Data](<https://thehackernews.com/2026/11/attackers-pose-as-it-support-on.html>) 

---

📌 **DarkBlinders Compromises Israeli Target and Iraqi Kurdish Government Cloud Environment**

The Hacker News reports an Iran state-aligned espionage campaign attributed to DarkBlinders compromised a high-profile individual in Israel and a Kurdistan Region of Iraq government cloud environment between August and October 2026, using spear-phishing, credential phishing lookalike domains, trojanized coding challenges, DLL sideloading, SHELBYLOADER, SHELBYC2, and GitHub C2.

**Reference:** [DarkBlinders Compromises Israeli Target and Iraqi Kurdish Government Cloud Environment](<https://thehackernews.com/2026/11/darkblinders-compromises-israeli-target.html>) 

---

📌 **Xinchuan and Subsidiaries Hit by Hacker Attack, Some Files Cannot Be Decrypted, Affecting Internal Operating Systems - iThome**

iThome headlines a reported hacker attack against Xinchuan and subsidiaries, with some files unable to be decrypted and internal operating systems affected.

**Reference:** [鑫傳及子公司遭駭客攻擊，部分檔案無法解密，影響內部作業系統運作 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB0OWxWeU9nb3hUVnB2M0dtMlN4YWVWOTM2MldvdE80RktIdndnQXdDWnM1NW9KY1U4UGJfRmxhZ2l2YURNTjVoazJvNTR4QQ?oc=5>) 

---

📌 **Government Linux Servers Targeted With SysGoRAT and Suspected AI-Generated Scripts**

The Hacker News reports Palo Alto Networks Unit 42 tracked CL-UNK-1211 targeting government and state-affiliated Linux infrastructure between October 2025 and April 2026, using open-source tools, custom PHP web shells, AI-generated malicious scripts, credential theft, SysGoRAT over WebSocket, log wiping, and deceptive red-team markers.

**Reference:** [Government Linux Servers Targeted With SysGoRAT and Suspected AI-Generated Scripts](<https://thehackernews.com/2026/11/government-linux-servers-targeted-with.html>) 

---

📌 **Taiwan Optical Platform and Subsidiaries Suffer Cyberattack Leading to Encrypted Servers**

Taiwan Optical Platform (TOP) and its subsidiaries have suffered a cyberattack that resulted in the encryption of files on several servers, according to reporting by iThome. Organizations should review external-facing access points, isolate affected systems, and verify offline backups to safeguard against ransomware operational impacts.

**Reference:** [台數科及子公司遭駭客攻擊，部分伺服器檔案遭加密 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1DQVNIVnQ2ajhnYUVfZWpvN1pHazdYeXhhSE9Ici1JVzUxd2RUTXNpWGNHdm5QN3F1V1A3VXlGZUtxUzRwWU9PTVA5X2JMZw?oc=5>) 

---

📌 **Attackers Tamper with Third-Party Monitoring DNS Records to Steal $2.7 Million from Polymarket Users**

Threat actors compromised and altered the DNS records of a third-party monitoring service, enabling the theft of approximately $2.7 million in assets from Polymarket users, iThome reports. The incident underscores supply chain vulnerabilities linked to external dependencies, requiring organizations to audit third-party integrations, enforce multi-factor authentication on administrative consoles, and monitor DNS configuration integrity.

**Reference:** [駭客竄改第三方監控業者DNS紀錄，竊走Polymarket用戶270萬美元資產 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBFdy00dFlmS0NLOTdKbmNkRkFQUmdxUUVNby1lX0NHdGpOempHVEtHbEF0U0dXMjZvQWZfeENwUnUtSE5kZERjTnpvN2tGUQ?oc=5>) 

---

📌 **Over 10,000 Global GitLab Instances Remain Vulnerable to Critical Severity Flaws**

More than 10,000 Internet-exposed GitLab instances worldwide remain unpatched against two critical maximum-severity vulnerabilities, with at least 46 located in Taiwan, according to iThome. Security teams should immediately inventory public-facing developer tooling, restrict network access where possible, and apply official vendor updates to mitigate remote exploitation risks.

**Reference:** [全球仍有逾萬臺GitLab執行個體暴露於兩個滿分漏洞威脅，臺灣也有46臺 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4tTnhxcUdmYlBhTll5Wmk1cnJnbUlWajRuUmhQWjE0SjBGeUY2blB0bDVUXzRFMGRiaXJMcTRvY3QtdjZpZFBaSVdleFBwdw?oc=5>) 

---

📌 **Taiwan's Ministry of Digital Affairs sets security protection standards for communication control systems, effective January 1, 2027**

Taiwan's Ministry of Digital Affairs has established cybersecurity protection standards for communications and broadcasting control systems under the Cybersecurity Management Act, taking effect January 1, 2027. Covered critical infrastructure providers must implement measures for remote access, identity authentication, network isolation, vulnerability management, and business continuity based on high, medium, or general protection levels. Requirements include pre-authorized remote access from predefined control points with encryption and multifactor authentication, plus monitoring; high and medium systems require additional confirmation for engineering logic changes. High-level systems must be isolated from general ICT networks with boundary monitoring, while medium-level systems need boundary access controls. Unpatchable vulnerabilities require compensating controls such as network segmentation, restricted access sources, or enhanced monitoring. Backup, redundancy testing, and business continuity drills are tiered by protection level, and outsourced development contracts must embed security requirements. The standards allow technical-limitation exceptions with supporting evidence and approved alternative controls.

**Reference:** [數發部訂定通訊傳播控制系統資安防護基準，2027年元旦生效 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0wZFNZSkthWkhrOHVrdkNXS3VtRndodGFlN2lmT2I3alVJMC1LV2Z0Wkx6cnBlR1pHdFgyRkJLQkJHcmJLVEFRUFY1RWlodw?oc=5>) 

---

📌 **Muji and Matsuya systems breached, exposing 27.26 million and 2.38 million member records respectively**

iThome reports that Muji and Matsuya systems were hacked, resulting in the exposure of 27.26 million and 2.38 million member personal data records respectively.

**Reference:** [無印良品、松屋系統被駭，分別外洩2,726萬、238萬筆會員個資 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1vZjZabk1sZG5VNEVpcUdvRkdqaTU1SElZVW5NYUhHb2pTRGVGZk5wT2VyUUVlYnlfcUIzTmtsRzh5Q0VhOHZTaE10WGZJZw?oc=5>) 

---

📌 **Ivanti patches two ICS vulnerabilities, CISA adds them to KEV catalog warning of related attacks**

iThome reports that Ivanti has patched two industrial control system vulnerabilities, which CISA has added to its Known Exploited Vulnerabilities catalog with warnings that related attacks have been observed.

**Reference:** [Ivanti再修補兩個ICS漏洞，CISA已列入KEV警告出現相關攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91aHU4OTRKaS1TR0x5SXpvbjM0ZFBzZjhRdTU1TTBPRkxESUFHMTV3YlhtUXdoNDhwam40TlRJc01BQjZzaG5ySFZYOFVLZw?oc=5>) 

---

📌 **Shadowserver, GitLab, CVE-2026-110264, CVE-2026-97229 - iThome**

iThome headlines Shadowserver activity involving GitLab and CVEs CVE-2026-110264 and CVE-2026-97229.

**Reference:** [Shadowserver、GitLab、CVE-2026-110264、CVE-2026-97229 - iThome](<https://news.google.com/rss/articles/CBMiqAFBVV95cUxNd1Z4TGl6WDlOSzZsa3pMcFpSRG1WOFhteHZscnY1RnQ3QWJXN241b05XUmpnS2xwUVNhWDg0V2d4T2pLSHpNejlrMUpSLTcwWS1uRkFic0lSUUEtWEg5ZjAxUjl4eVgtOFRWZkJXSjMtdlluUzkwRGZtZ3B6bEdwdG5kTGNQMVpBcWNWYW1EYzU1bXhSYV8zZGtVUmlRc1RzY2RfcS1hX1E?oc=5>) 

---

📌 **SMS of Death vulnerability can remotely disable Android smartphones**

Xakep reports an SMS of Death vulnerability capable of remotely taking Android smartphones out of service.

**Reference:** [Уязвимость SMS of Death может удаленно выводить из строя Android-смартфоны](<https://xakep.ru/2026/11/02/sms-of-death>) 

---

📌 **PapRAT Cyber Espionage Campaign Leaves a BITTER Taste in South Asia**

FortiGuard Labs attributes a South Asian cyber espionage campaign to BITTER (TA397), which targets Windows systems using three attack chains involving malicious LNK files, VHDX disk images, and WebDAV URL shortcuts to deploy the PapRAT remote access Trojan and, in one chain, WmRAT.

**Reference:** [PapRAT Cyber Espionage Campaign Leaves a 'BITTER' Taste in South Asia](<https://www.darkreading.com/cyberattacks-data-breaches/paprat-cyberespionage-campaign-bitter-south-asia>) 

---

📌 **Good Smile Company hacked, data on more than 400,000 credit cards may have been leaked, Taiwanese customers may also be affected**

iThome reports that Japanese figure manufacturer Good Smile Company suffered a hack and that partial data on over 400,000 credit cards may have been exposed, with Taiwanese customers possibly affected.

**Reference:** [日本公仔業者Good Smile Company遭駭，逾40萬張信用卡部分資料恐外洩，臺灣顧客也可能受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE95OHRGUmZnckFCNGhPSW1ES2V1MjdqMklJYUFkQ1R1Z0p6WkFXTmF4b012a2dwSXByaVpySUdpQzVHWi12aWlpVEhOaHNWZw?oc=5>) 

---

📌 **PHP2Shell vulnerability has been exploited, Ming Hsi Technology says patching must be followed by continued website vulnerability checks**

iThome reports that Ming Hsi Technology says the PHP2Shell vulnerability has already been exploited and organizations should continue checking website vulnerabilities even after patching.

**Reference:** [PHP2Shell 漏洞已遭利用，明希科技：修補後仍須持續檢測網站弱點 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1HeUd2OXY2dVhER05ZS0xhLUFfU0dXX2h3RTBjWFhwaE12NTc1RjBhbDl6YTEzdU1DSGZDeW9TWHZ4Ymp1cWt4QVQyWQ?oc=5>) 

---

📌 **91APP hack hits Taiwan MUJI, official website order data may have been leaked; Japanese MUJI App reports separate security incident**

iThome reports that a 91APP breach affected Taiwan MUJI and may have exposed official website shopping order data, while Japanese MUJI App reportedly experienced a different security incident.

**Reference:** [91APP遭駭波及臺灣無印良品，官網購物訂單資料恐外洩，日本MUJI App也傳不同資安事件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE42TlZkcHdZSVM5LXZ3NFhNeDUzcFJVZURlaWhLQlJzQl9oc0pnMWlOVU5xS3pTZ1N1QU02QVlUd2VYTzZlLVBnSmJsVWhXZw?oc=5>) 

---

📌 **Malicious Claude Code extension appearing in Cursor Marketplace as attackers attempt to establish SSH backdoor**

iThome reports that a malicious Claude Code extension has appeared in the Cursor Marketplace, with attackers attempting to establish an SSH backdoor.

**Reference:** [Cursor市集出現惡意Claude Code擴充套件，攻擊者企圖建立SSH後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9VV0o1S0g5WE9sZ0M3STlBXzBQbXhGS1JMUE00WGlESUpIcTNNb0JvT0ZkLUNxRFdhbjQ5V21QUmVyV2YyZlVOTDRzYTBpQQ?oc=5>) 

---

📌 **Alpine Linux hit by major GitLab vulnerability, rebuilding development infrastructure to guard against supply chain risk**

iThome reports that Alpine Linux was struck by a major GitLab vulnerability and is rebuilding its development infrastructure to mitigate supply chain risk.

**Reference:** [Alpine Linux遭GitLab重大漏洞攻擊，重建開發基礎設施防範供應鏈風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9uV1ZkMDI3eThuZkZYVHE2NlEzY0FKT05yb0M5azJtd3JncVQyXzkwWGs1LVU2OXkxaGE1a1NheGo4akFUYnBEV1kxTGhDdw?oc=5>) 

---

📌 **Personal care products vendor Kang Na Xiang's online platform outsourced service provider 91APP hacked, e-commerce platform order data may be leaked**

iThome reports that 91APP, an outsourced service provider for Kang Na Xiang's online platform, was hacked, and e-commerce platform order data may be exposed.

**Reference:** [衛生用品廠商康那香線上平臺委外服務廠商91APP遭駭，電商平臺訂單資料恐外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1DZFdqUk9uWHhWN01Ed2ZtYzl0Q3dQTndDX05DbXl2WHowcnd3UEhKMVZua3dVOFRKcXNua3dxVWRiUENxVzZhdmsxMU42QQ?oc=5>) 

---

📌 **JVN: Siemens product updates (October 2026)**

JVN reports updates for Siemens products issued in October 2026.

**Reference:** [JVN: Siemens製品に対するアップデート（2026年10月）](<https://jvn.jp/vu/JVNVU90141693>) 

---

📌 **Japan National Institute for Defense Studies analyzes new AI cyberattack threats, from targeted attacks to cross-system, multi-method attacks, challenging traditional government security incident response**

iThome reports that the Japan National Institute for Defense Studies analyzed AI-driven cyberattack threats evolving from specific targeting to cross-system, multi-method attacks, challenging traditional government security incident response.

**Reference:** [日本防衛研究所分析AI網攻新威脅，從鎖定特定目標到跨系統、多手法攻擊，傳統政府資安應變通報面臨挑戰 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE13am1PSHcyNUZ4SzZwZVRjRk9XaUM0N1ViLVBmRWtDR2FrWE0wWkZYZW94c19zUldCMGNod1I0UFZScndWSC1XcGxTWTF1QQ?oc=5>) 

---

📌 **Linux Foundation's AAIF adds four new AI agent open-source projects covering sandbox isolation and skill sharing**

iThome reports that the Linux Foundation's AAIF added four new AI agent open-source projects covering sandbox isolation and skill sharing.

**Reference:** [Linux基金會旗下AAIF新增4項AI代理開源專案，涵蓋沙箱隔離與技能共享 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84amRqZUI4T2hxZGNOYXg1eGY4VlRTYlNJaVgyVHZ3a1BWWG9DUWl1YTZVMS0yb292S1RiLXpFbC1jNmhodE9TbER0Z3JVQQ?oc=5>) 

---

📌 **OpenSandbox reported by iThome**

iThome reports OpenSandbox.

**Reference:** [OpenSandbox - iThome](<https://news.google.com/rss/articles/CBMiVEFVX3lxTE1iQ0tmNVpqcHNFQ2xjc0tNX000VTdzQmpEVUlBX2JWYmRYeHVNdVJ5NlVrQkJSV0hBc1dheWRyb25tOUtBOFFrSG9xNndlQmdjTGI2Vg?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261102-1-1793646094494 -->
