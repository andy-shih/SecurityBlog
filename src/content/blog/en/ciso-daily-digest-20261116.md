---
title: "CISO Daily Digest: Korean Enterprise Collaboration Platform Dooray! Hacked, Customer Data Leaked, API Service Suspended (20261116)"
description: "Three distinct threat campaigns highlight accelerating risks in AI infrastructure, collaboration platforms, and software supply chains. Amazon documented AI agents autonomously hunting API keys across exposed LLM gateways and app builders. The Dooray! breach demonstrates third-party SaaS risk with confirmed data exfiltration affecting multiple Korean enterprises. BO Team's Log4Shell exploitation of VMware vCenter led to deep network compromise and code-signing server access, signaling supply chain attack intent. Common threads include exploitation of default credentials, unpatched known vulnerabilities, and inadequate secrets management across expanded attack surfaces."
pubDate: 2026-11-16
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Korean Enterprise Collaboration Platform Dooray! Hacked, Customer Data Leaked, API Service Suspended

South Korean enterprise collaboration platform Dooray! suffered a security breach that potentially affects multiple enterprises using the service, according to iThome reporting. The operator has confirmed that some customer data was exfiltrated and has taken the emergency step of disabling API services to contain the incident.

Dooray! provides workplace collaboration tools including messaging, project management, and calendar functions used by numerous Korean companies. The breach raises immediate concerns about the exposure of proprietary business communications, project data, and employee information across the platform's client base.

Organizations using Dooray! should immediately assess what data they stored on the platform, monitor for unusual activity in connected systems, and prepare for potential downstream impacts from the exposed information. The API suspension will disrupt automated workflows and integrations that depend on the service.

### 📌CISO Impact

- **Audit and Harden AI/LLM Infrastructure Exposure —** Inventory all internet-facing AI applications, model gateways, and inference endpoints. Enforce authentication on all management interfaces, rotate default credentials (especially LiteLLM master keys), and implement secrets scanning across repositories, container images, and CI/CD pipelines. Treat AI apps as production systems with equivalent monitoring for anomalous usage and spending patterns.
- **Assess Third-Party SaaS Collaboration Platform Risk —** Immediately evaluate data stored in Dooray! and similar collaboration platforms. Request incident details from the provider, determine regulatory notification obligations for any exposed PII or proprietary data, and establish contingency workflows for API-dependent integrations during the service suspension.
- **Prioritize Legacy Vulnerability Remediation and Supply Chain Defense —** Scan for unpatched Log4Shell (CVE-2021-44228) instances in VMware vCenter and other assets. Harden code-signing infrastructure with hardware security modules, enforce MFA and tiered access for build systems, and monitor for unauthorized certificate usage. Implement software composition analysis to detect malicious dependency injection in build pipelines.

**Reference:** [韓國企業協作平臺Dooray!遭駭恐波及多家企業，已證實部分客戶資料外洩，緊急停用API服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1SMVJtcV9ucHZPc1czendpOFkxR19YWFJxV1g1N1FaV0lfelJheGFNdXZKVFhrbkpGbVpxQ293c2FmTFh3X29SUGJ1cUNNZw?oc=5>)

---

## Active Threats This Week

📌 **Amazon Uncovers AI Agent Campaign Targeting LiteLLM, Dify, and Other Apps for API Keys**

Amazon's threat intelligence team discovered a campaign using AI agents, likely running on the ARTEX penetration-testing framework, to hunt for exposed AI provider keys in internet-facing AI applications including LiteLLM, One API, Dify, Langflow, RAGFlow, and other LLM gateways and app builders. The agents extracted stored credentials, verified their validity, and added them to a shared pool for further abuse, with operators assessed as China-linked groups based on Simplified Chinese prompts and time zone settings.

**Reference:** [Amazon Uncovers AI Agent Campaign Targeting LiteLLM, Dify, and Other Apps for API Keys](<https://thehackernews.com/2026/11/amazon-uncovers-ai-agent-campaign.html>) 

---

📌 **BO Team Exploits Log4Shell in VMware vCenter, Compromises Russian Firm's Code-Signing Server**

Ukrainian-origin threat actor BO Team exploited CVE-2021-44228 (Log4Shell) in an unpatched VMware vCenter 7.0.3 server to gain root access, then moved laterally through a Russian software developer's network over several months, ultimately compromising the organization's code-signing server and CI/CD infrastructure in what Kaspersky assesses as a likely supply chain attack attempt that was disrupted before completion.

**Reference:** [BO Team Exploits Log4Shell in VMware vCenter, Compromises Russian Firm's Code-Signing Server](<https://thehackernews.com/2026/11/bo-team-exploits-log4shell-in-vmware.html>) 

---

📌 **Red Hat Quay Discloses Two Major Vulnerabilities Allowing Persistent Keys and Private Image Tampering**

Red Hat disclosed two serious vulnerabilities in its Quay container image registry. CVE-2026-123710, CVSS 9.8, involves flawed permission validation in service key rotation, allowing attackers to insert non-expiring signing keys that survive password resets, robot account token regeneration, and Quay restarts, enabling forged access tokens to other repositories. CVE-2026-110697, CVSS 9.9, lets a standard account access other tenants’ robot accounts and authentication tokens, permitting impersonation and manipulation of private container images. Both flaws affect Quay versions 3.9 through 3.18 and do not require public internet exposure; anonymous access is not required, though disabling it alone does not eliminate risk. Red Hat has issued patches across multiple 3.x branches and confirmed Quay.io is patched for CVE-2026-110697. For CVE-2026-123710, Red Hat recommends restricting access to key management endpoints and auditing or removing unauthorized signing keys; for CVE-2026-110697, it advises reviewing affected robot accounts and rotating related authentication tokens.

**Reference:** [Red Hat Quay爆兩項重大漏洞，攻擊者恐植入不會到期的金鑰、竄改私人容器映像檔 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBXWUg2TE8xUDI4NW0yS01pV25zc2U2TXJ3X2RkczM4a0IzcUlkR2xoa2lmaDlKeVQxd09TMUc5TU1tMXEyQXo3Vm1xY2NaUQ?oc=5>) 

---

📌 **SANSAR Linux Cryptomining Malware Uses Modified NVIDIA Library to Hide GPU Activity**

Elastic Security Labs attributes a financially motivated Linux cryptomining operation tracked as REF3364 to a Rust-based toolkit called SANSAR, observed in late October 2026. Initial access was gained through an exposed Ray job agent, after which the actor added an SSH key for persistence, deployed a kernel rootkit to hide processes and files, and installed a modified NVIDIA Management Library wrapper that reports GPU utilization as zero and substitutes false temperature and power readings. SANSAR communicates over Tor via an onion service, manages CPU and GPU miners including XMRig and SRBMiner-MULTI, and downloads an Ethereum smart contract address for the netns backdoor, which retrieves C2 details and opens a reverse shell. Elastic noted Turkish-language comments in the rootkit source but did not identify the actor. Organizations with GPU infrastructure for AI workloads should verify who can submit jobs and whether GPU monitoring libraries have been altered.

**Reference:** [SANSAR Linux Cryptomining Malware Uses Modified NVIDIA Library to Hide GPU Activity](<https://thehackernews.com/2026/11/sansar-linux-cryptomining-malware-uses.html>) 

---

📌 **Six Unpatched Danfoss Refrigeration Controller Flaws Could Allow Remote Takeover Without Login**

Midnight Blue disclosed six unpatched vulnerabilities in Danfoss AK-SM800A refrigeration controllers that could allow remote takeover without authentication. Every firmware version through 5.3.2 is affected, and version 5.4.0, dated November, does not patch the flaws because it was likely built before disclosure. Five flaws reside in login-free web request handlers running as root; researchers demonstrated root code execution on version 3.3.0 and confirmed the same bugs in 5.3.2. The sixth flaw is in the gateway enforcing Strict mode, and crashing it may lead to code execution with additional work. Attackers could change controller settings, trigger defrost cycles, hide activity from logs, and install code surviving factory reset and firmware updates due to absent secure boot. Attacks in France beginning October 11 and a second European wave caused unwanted defrost cycles and destroyed stock, though no agency links those incidents to the six flaws. Belgium, Ireland, and Germany urge operators to remove management interfaces from the internet, use protected VPN or internal network access, verify configurations and credentials, and not rely solely on firmware updates, password changes, or Strict mode.

**Reference:** [Six Unpatched Danfoss Refrigeration Controller Flaws Could Allow Remote Takeover Without Login](<https://thehackernews.com/2026/11/six-unpatched-danfoss-refrigeration.html>) 

---

📌 **Mozilla releases Firefox 160 update fixing 99 security vulnerabilities including sandbox escape and privilege escalation**

iThome reports Mozilla released Firefox 160, addressing 99 security vulnerabilities, including sandbox escape and privilege escalation flaws.

**Reference:** [Mozilla發布Firefox 160改版，修補99個安全漏洞，涵蓋沙箱逃逸與權限提升 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1oV0JsU0pMeUhDcDNDTFdwanpvamFjbDBpZi1VM2lPN29YQkVpTGNHMS1ORmFIT041R0lHU3lMNmlfOUNnckVDS1l2a2FKQQ?oc=5>) 

---

📌 **PostgreSQL patches 52 vulnerabilities including 22-year-old remote code execution flaw**

iThome reports PostgreSQL fixed 52 vulnerabilities, including a remote code execution flaw that existed for 22 years.

**Reference:** [PostgreSQL修補52個漏洞，含存在22年的遠端程式碼執行漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5KTG5XRS10Qno1OWh2UnhCQndoeUNnaV9CejdObmF1cUg2c3IzWC10cmphVGc0NHdYaU96akhBNGxHNFV5bElFNmxnVWEydw?oc=5>) 

---

📌 **Check Point gateways attacked via PHP2Shell vulnerability; attackers implant backdoor and damage data through virtualization platform**

iThome reports Check Point gateway devices were attacked through the PHP2Shell vulnerability, with attackers implanting backdoors and causing data destruction via a virtualization platform.

**Reference:** [Check Point閘道設備遭PHP2Shell漏洞攻擊，駭客植入後門並透過虛擬化平臺進行資料破壞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB1bXBEcjdJMnVIVENIZWFIc09FbGcyNjJManhZakdiekdWVW9BZVdHSmYxQ3RVQk9WODFsR2ZkQkp1QUVfZDI3Ml9lcU1TQQ?oc=5>) 

---

📌 **CISA warns Check Point privilege escalation vulnerability is actively exploited**

CISA has warned that a Check Point privilege escalation vulnerability is under active exploitation. Organizations using affected Check Point products should assess exposure and apply available mitigations or patches.

**Reference:** [CISA警告Check Point權限提升漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE44eTNVV042dXhTUVFRMDVOMktqU01NMjZ3S1lGd25YZW9paDZwZXktckxXVml5ZlpsLVVQNkxRS1FXSVgzbHhSZElEZklHdw?oc=5>) 

---

📌 **Chrome fixes eighth zero-day vulnerability this year**

Chrome has patched its eighth zero-day vulnerability of the year, tracked as CVE-2026-125350. Users should update Chrome to protect against active exploitation.

**Reference:** [В Chrome исправили восьмую 0-day-уязвимость в этом году](<https://xakep.ru/2026/11/16/cve-2026-125350>) 

---

📌 **Hackers use over 4,800 compromised GitHub accounts to target 60,000 repositories and steal cloud credentials**

Attackers compromised more than 4,800 GitHub accounts and targeted roughly 60,000 repositories to steal cloud credentials. Repository owners should review account access, rotate exposed credentials, and audit for unauthorized changes.

**Reference:** [駭客利用逾4,800個遭入侵GitHub帳號，鎖定6萬個儲存庫竊取雲端憑證 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ZZ1ZhQzFMcUtmNjd2d3R4MEhLRlJxbTRjVzZpb2xjYVptLUE1cGkwVkNlQTNlVm4xQzA3ZWxQbS1EbUdYTE93SENpMWNVdw?oc=5>) 

---

📌 **Taiwan bureau cracks BossAI hacking of fire system; three suspects stole OHCA data and resold it to funeral industry**

Taiwan’s Investigation Bureau has cracked a BossAI intrusion into fire systems. Three suspects allegedly stole out-of-hospital cardiac arrest information and resold it to the funeral industry.

**Reference:** [調查局破獲BossAI駭侵消防系統案，3嫌竊取OHCA資訊轉售殯葬業 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5rendkVGphOVJVelZsUmNKOHZjNkc3alNuWHJsTHFZR09tN2lSbUJnNk10anoxeER6ekZCc2s4eERQVkRoMW9OUWRNX1pBdw?oc=5>) 

---

📌 **ArcticRAT Android malware uses Grok AI to analyze stolen banking texts**

ArcticRAT Android malware reportedly uses Grok AI to analyze stolen banking text messages.

**Reference:** [ArcticRAT Android Malware Uses Grok AI to Analyse Stolen Banking Texts - Hackread](<https://news.google.com/rss/articles/CBMigwFBVV95cUxPQUVkcllUSVkydVdPTUFuUTdnUzB4NmpwZmN4YUVFUkxpblhoTmlnWHB0SFZiS2xrbmRvT0gtd1U1NzJBeWxhU3hxUVRtaUYzTjRBRGpHbS0tUGNDYm1MUEFPSGRFRDlpbWpDQkNfTjk5aUhjVkJhMFQwdzRBTHppQWkxYw?oc=5>) 

---

📌 **Worm SKit spreads via ScreenConnect third-party extension vulnerability, infecting nearly 500 hosts**

The SKit worm is spreading through a ScreenConnect third-party extension vulnerability and has infected nearly 500 hosts.

**Reference:** [蠕蟲SCKit利用ScreenConnect第三方延伸套件漏洞散布，近500臺主機被感染 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4xN3Z0ZTNJbWRtTG5jM0lDUGE1NktHdUpWMVVyNFpTa0dHbDJCcEFMX1EyMVU0UDljeGEzb0lwOUZtdWhjcUdZU1lseS1qZw?oc=5>) 

---

📌 **Retadup Worm Resurfaces Seven Years After Takedown to Spread CoffeeLoader Malware**

Kaspersky reports that the resurrected Retadup worm, which spreads through infected USB drives, is now distributing CoffeeLoader malware. The infection uses an NSIS-based installer that drops a patched 7z.dll loaded through rundll32.exe, leveraging the Armoury packer and OpenGL on the GPU to fetch and decrypt CoffeeLoader shellcode from a hard-coded C2 server. Persistence is achieved by copying 7z.dll to subfolders under %PROGRAMDATA% or %LOCALAPPDATA% and adding a Run registry key, then injecting into legitimate processes such as dllhost.exe or svchost.exe. Kaspersky blocked approximately 15,000 systems from infection, mostly in Peru, Angola, Russia, and Bolivia. CoffeeLoader supports injecting next-stage malware into a process, saving and running an executable, or saving and running a DLL through rundll32.exe.

**Reference:** [Retadup Worm Resurfaces 7 Years After Takedown to Spread CoffeeLoader Malware](<https://thehackernews.com/2026/11/retadup-worm-resurfaces-7-years-after.html>) 

---

📌 **Windows Zero-Day Vulnerability SignDrop Exposed, Microsoft CLFS Protection Mechanism Exploited for Privilege Escalation**

iThome reports a Windows zero-day vulnerability named SignDrop in which Microsoft's CLFS protection mechanism is exploited to elevate privileges.

**Reference:** [Windows零時差漏洞SignDrop曝光，微軟CLFS防護機制反遭利用提升權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1JZUxxanJzcEVERmhOSkk1Rk12VXlkU0xmQ0RJRjUzUU9uX3I2YkowTGdmYllETkVaX3lRV1RJMTQ3aHBVWjA3cUdRd2ZnUQ?oc=5>) 

---

📌 **Evergreen Logistics Security Incident Investigation Results Released, Employee Personal Data and Business Information Leaked**

iThome reports that the investigation into Evergreen Logistics' security incident has concluded, revealing leakage of employee personal data and business information.

**Reference:** [長榮物流資安事故調查結果出爐，員工個資及營業資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5aSkRpX1IxYk95Y3pGd19qTzU2Ul9IZTZTYTBHdTJ4RVlKRU9nc1d6RjljSXBZejdrWEIwZlM1a1ZqVy1fdXp2SkhuUXBlZw?oc=5>) 

---

📌 **DaouOffice reportedly hit by zero-day attack; shared customer accounts brute-forced, at least three financial institutions compromised**

iThome reports that South Korean enterprise collaboration platform DaouOffice was reportedly targeted through a zero-day vulnerability, with attackers also brute-forcing shared customer accounts, affecting at least three financial institutions.

**Reference:** [韓國企業協作平臺DaouOffice傳遭零時差漏洞攻擊，客戶共用帳號又遭暴力破解，至少3家金融業者受駭 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtajJ6QTJTY0Y3QmpyUlZnMnRINGtQRE1qaWE4UE9KNDFKQlhPSFVTcEp5NzVOdjVvVzNKTmRQZDBmMWJKRnB1Uml6bzBNQQ?oc=5>) 

---

📌 **Zoom patches critical Windows Workplace vulnerability that could allow remote privilege escalation if unpatched**

iThome reports that Zoom patched a critical vulnerability in Workplace for Windows, warning that failure to update could allow attackers to remotely elevate privileges.

**Reference:** [Zoom修補Windows版Workplace重大漏洞，未更新可能導致攻擊者遠端提升權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE01UklVMm4tM1M5SjdoeEhzcXIxVEdSR3daSE9VRkY5d2Mxc185Wi0tQm9sOUQ1aTMxMUxuRG5Wcl8wblZIeTE2NlZDMk9mQQ?oc=5>) 

---

📌 **Nation-state threat actor SilentAir reportedly targets Taiwanese mobile users, abusing telecom signal interception to capture SMS messages and calls**

iThome reports that the nation-state threat actor SilentAir reportedly targets mobile users in Taiwan by exploiting telecom signal interception to obtain SMS messages and call content.

**Reference:** [國家級駭客組織SilentAir鎖定臺灣手機用戶，濫用電信訊號攔截簡訊與通話 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE56WndGdXNBOWN0SDhJXzF3WWZyUFloTEJ5X29PUTlZSTZrWmo2bnp2UDV6ZjhoRjBHTS1NY3BoMDFrX0EyQkkxUmtpU21RUQ?oc=5>) 

---

📌 **Check Point fixes exploited high-risk Gaia OS privilege escalation vulnerability**

Check Point has patched a high-risk privilege escalation vulnerability in Gaia OS that has already been exploited in the wild.

**Reference:** [Check Point修補已遭利用的Gaia OS高風險權限提升漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9nTnE5TFRraUhJZGtNbUpHNXAyckJZYTBnYzA2SVZ0eG9mMHdxeGhheWt1bU16TzQxTDZieEFvSUhYSU9pMkZmZi1lNVdXdw?oc=5>) 

---

📌 **FBI warns hackers are using AI tool ARTEX to accelerate intrusions, obtaining system privileges in under three hours in some incidents**

The FBI has warned that threat actors are using the AI tool ARTEX to accelerate intrusions, with some incidents resulting in system-level privileges within less than three hours.

**Reference:** [FBI警告駭客利用AI工具ARTEX加速入侵，部分事件不到3小時取得系統高權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9TWHZHdHdiWTZvTHpOTklWSUtJUXEzMWxleUV6Z2FEYXIyVGdEOFRHZjJLV1NGTEhMUExPMmJLcmdCUUs2MGZmY2lTSFBPUQ?oc=5>) 

---

📌 **Password reset vulnerability**

iThome reports on a password reset vulnerability.

**Reference:** [密碼重設漏洞 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxON3FTVi16eTdlUWNJWHBrV3M0T2xpa0FDLVpHTVAtTmZjcmVOZlU0SWJOUFhDR2Zrc0pZSUQ3TWxWeDFTcm9ZVXYzdDdRb3lnLWFielRHRWVkV3ZieW5HUEFXd0JrTi16Tmp2X3lkWFYyQWxQcmhaTW5rR0VXRG1PQUlDNVNnelZUQlp3S1Bn?oc=5>) 

---

📌 **Uber affected by Fireworks AI incident, leaks thousands of driver identification details**

iThome reports that Uber's Fireworks AI incident exposed identification information for thousands of drivers.

**Reference:** [Uber因Fireworks AI事件，外洩數千司機證件資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Vay1ERWtjeHJHU1NlMmhpMTN1UXotd1l5dVVlZGx5dmx2aHI5anI2N3BiTjVEUTZJS0FXbGxmQnQwelZZcnFvTWZBVEc4QQ?oc=5>) 

---

📌 **South Korean customer service outsourcing provider MetaM hacked, cryptocurrency exchange Coinone affected**

iThome reports that a hack targeting South Korean customer service outsourcing provider MetaM affected cryptocurrency exchange Coinone.

**Reference:** [韓國客服委外業者MetaM遭駭，加密貨幣交易所Coinone受波及 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RZmZNbkhaQmtyVUVyb2JGajJ3MVdxWHQyNGFpSnJnRm5LZDlta3FHaDdkS2tOLVh0NW9pWHZiSkRSRXF4RDFaRTNOMnlUdw?oc=5>) 

---

📌 **North Korea’s Cryptocurrency Thefts Fund Illicit Weapons, Other Military Efforts**

Eurasia Review reports that North Korea's cryptocurrency thefts fund illicit weapons and other military efforts.

**Reference:** [North Korea’s Cryptocurrency Thefts Fund Illicit Weapons, Other Military Efforts - Eurasia Review](<https://news.google.com/rss/articles/CBMiugFBVV95cUxNdC1RdENuS2h2bjg4ZzEyVEZlSGppVWo0c0RlU2RoYWdpRjN5c3UxWS1qVGZMMzNDY0ZWRnhYY0JnLTZIaG1IMXlGUkcxRjg4NF9fSVo0WmU4aEcwUE9NeWxhYnl0ZTRJbm04eUg5Ulo2UGVhNGNkR3BXLVAzd09tUTJTemJqb3pQQjE0UTJZaWFsbUltdTFMdU1VYlktaHZHTk1wZl96Y1A5bkYwdTVGT3JWY0VlRkJIU3c?oc=5>) 

---

📌 **Fireworks AI incident spills over, malicious Anthropic Claude extension listed on Cursor marketplace - iThome**

iThome reports that a malicious Anthropic Claude extension was published on the Cursor marketplace following the Fireworks AI incident.

**Reference:** [Fireworks AI事件波及，惡意版Anthropic Claude擴充程式於Cursor市集上架 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE80YVo2WG5zbDZTNmNCMGNsN293c3J6NFJqellZRmNxWGNncVF1YjNUdDZ3Vk5sZXg2eVM4N2RVNmxKbTM3U2h4WnEySmstdw?oc=5>) 

---

📌 **MongoDB patches critical flaw that can crash database when switching nodes - iThome**

iThome reports that MongoDB has patched a critical vulnerability that could cause database nodes to crash during failover or node switching.

**Reference:** [MongoDB修補可能導致資料庫切換節點時當機的重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5FY3F3YjhkaFVyZS1IZFJhZzAyOENEbGM4d2xWLUlLX3RMLXp3dFpGWGZUMUduZGt1U1BfalREWlFiODJtbzdPaVZxRzRMZw?oc=5>) 

---

📌 **SilentAir - iThome**

iThome coverage identifies SilentAir as a reported cybersecurity item.

**Reference:** [SilentAir - iThome](<https://news.google.com/rss/articles/CBMiUkFVX3lxTFBEUXFRRTByS1phY2F1RjloZTNqWHJUY1dWNWJJdG5UYVlFTFpJY0Frd2gtc0tTNTJ3QlV6LWlZa1FZdFZISGVxTWpwTTJzalo5cGc?oc=5>) 

---

📌 **Self-hosted Claude agent expands from sandbox to control plane; enterprises manage credentials and work records**

iThome reports that self-hosted Claude agent deployments have expanded from sandbox environments into control planes, allowing enterprises to self-manage credentials and work records.

**Reference:** [Claude代理自架從沙箱擴及控制平面，企業可自管憑證與工作紀錄 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1Xa3FPMGZRbVpPeFRvSzBnUmt5cElhamRWeFlnaFdlaHpxZkhxdzJkd0Z6aEd5aGtRQ3p5UVZZUDlrMzFWWWVMTE9Yd1J4Zw?oc=5>) 

---

📌 **Malicious extension**

iThome reports on malicious extensions without further details in the available headline.

**Reference:** [惡意擴充功能 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxNRDRBSFROYU9IQ3F4WDdLa24wdGMzV09xWUxQU0JvZXNqRmt4YlhndVdMYkJ3NXRLdjc1YjJzWS10d0ZWWGtkZk4yckRpZjBZRlNoUW9mNGt0ekZ6bGpuRHBMdzdVeU5HUVUxYV9rbGhpQjQ1ZnROc2M5REdpTnJfSTc1SXhXMmNjLVZzdkFR?oc=5>) 

---

📌 **Prevent ransomware intrusion! CRA for NAS strengthens Synology abnormal access monitoring**

iThome reports that CRA for NAS strengthens Synology abnormal access monitoring to help prevent ransomware intrusion.

**Reference:** [防範勒索軟體入侵！CRA for NAS 強化 Synology 異常存取監控 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1YQmdPT1pwdy1GVXh2YlZzQlV5bTRxdy1GanhSVWRucTA5c3FWSjlHQlZMajVqbzU0ejEwZVc5STIxeHVHcnR5ejBzZw?oc=5>) 

---

📌 **Google revises vulnerability disclosure schedule as patches can become attack clues**

Google has revised its vulnerability disclosure schedule, noting that patches themselves can provide attackers with clues for exploitation.

**Reference:** [修補程式也可能成為攻擊線索，Google重訂漏洞揭露時程 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9NX1FCWW5JY28xSlUxZ1FqTERTSDR4M2U4ZzF0Tnp3WWVlRzlIRGV1eWFjeVk5Q0xQMjV1YmFvQVhuMDd6UTVBNWplTF9jZw?oc=5>) 

---

📌 **NHN Dooray**

iThome reports on NHN Dooray.

**Reference:** [NHN Dooray - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTE9rTm1DYkxwNklZd1UyUk5RdGxQdjhDZ1FkNFZueGlHMFU1YWFaLUQwNFhMTm5DdHVPSVFJQi13RUU4TEhJSHp1U1BDTjBsdzVfTGlv?oc=5>) 

---

📌 **Control plane**

iThome reports on control plane.

**Reference:** [控制平面 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE9DZUxtbXlkbHIyVDZBa1BnZ0ptbkFkenVzZC04QnhLZEFDbHBPeTJ4NWszN1ZQc0dTNkNRaExlcXhRZnQtYnhBd2RSeHpJMEFFVnh0STZidHpkcnZ4TTdfWEkxZk1BQy1hZ1lfaUl6N3dEMmNCSWc?oc=5>) 

---

📌 **AhnLab proposes five account protection recommendations**

iThome reports that AhnLab has proposed five recommendations for protecting user accounts based on its security guidance.

**Reference:** [AhnLab 提出帳號防護五大建議 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTFB2WWtnXzNCczBPYUJabHVPUUY2QnZxRXJRa05pMkUtRHo4NDk4cTdySWF4OEE4bmxveDRadFo2WjB3eDNkQVhodHNXZw?oc=5>) 

---

📌 **Remote privilege escalation**

iThome reports on remote privilege escalation in its security coverage.

**Reference:** [遠端權限提升 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxNRlVlUC0wUnZUd1VLejN4RmppUFRqSWNlNE0zRGl2SVcxUFJUY0Z3OGtlODZkX19lZDBiaU9yZjNobnFYcDNQSllCNF9FUktBc3BSWlFDVUYtNjRGQWJNRzRQQTNQLVFjRnBtY1poRnZ4dlMwQ200MVdLdGVOWU0tM1J2NkxILTB4QjIycmNB?oc=5>) 

---

📌 **Media: Roskomnadzor has introduced machine learning into traffic filtering system**

Xakep reports that Russian media say Roskomnadzor has implemented machine learning in its traffic filtering system.

**Reference:** [СМИ: Роскомнадзор внедрил машинное обучение в систему фильтрации трафика](<https://xakep.ru/2026/11/16/tspu-filter>) 

---

📌 **Zhongfei Technology introduces Qsec Global security solution**

iThome reports that Taiwanese value-added distributor Zhongfei Technology has partnered with Qsec Global to deploy the Qsec DefendX threat intelligence defense management system for semiconductor supply chains, high-tech manufacturing, government, and healthcare and finance organizations.

**Reference:** [中飛科技引進 Qsec Global 資安方案 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1EME1kOFRMNFNKU2o4bmNTR0lKbmxpUVlLR2xzb1ZNVkswX3R6NThOcVVBd3ZRQS1ON245dWVXRWFkNVUxazlQeHd0OA?oc=5>) 

---

📌 **Breaking AD protection blind spots: Semperis helps Odin Information upgrade enterprise identity resilience**

iThome reports that Semperis is working with Odin Information to address Active Directory protection gaps and strengthen enterprise identity resilience.

**Reference:** [打破 AD 防護盲點，Semperis 賦能奧登資訊升級企業身分韌性 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5hRWpzRDNDOVhNcFdzOG1xVnlJbV9WLXJYeUZxejVWNjBuc3FGR0x1aHFNVGtVN3RqNkg2OExqeTNlOVV2SnhCQldnNA?oc=5>) 

---

## How Can OPSWAT Help

- [MetaDefender Endpoint](<https://www.opswat.com/products/metadefender/endpoint>) — Blocking removable media until endpoint security conditions are met can reduce the initial USB-based infection vector reported for Retadup.

**Reference:** [Retadup Worm Resurfaces 7 Years After Takedown to Spread CoffeeLoader Malware](<https://thehackernews.com/2026/11/retadup-worm-resurfaces-7-years-after.html>)

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261116-1-1794877444686 -->
