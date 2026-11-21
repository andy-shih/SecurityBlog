---
title: "CISO Daily Digest: Critical VMware vCenter Flaw (CVSS 9.8) Lets Network Attackers Bypass Authentication (20261120)"
description: "Critical vulnerabilities identified in VMware vCenter, PHP, and Drupal core highlight significant risks to virtualization management, web hosting, and enterprise application security."
pubDate: 2026-11-20
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Critical VMware vCenter Flaw (CVSS 9.8) Lets Network Attackers Bypass Authentication

Broadcom has issued an emergency advisory regarding a critical authentication bypass vulnerability in VMware vCenter, tracked as CVE-2026-123890. The flaw exists within the VMware Directory Service and allows network-based attackers to gain unauthorized access to the system. The vulnerability carries a CVSS score of 9.8, reflecting its high severity.

The vulnerability has been exploited in the wild as a zero-day. Google's threat intelligence team reported that a suspected China-nexus espionage actor, identified as Armory Castle, utilized the flaw in early September to obtain administrator access to a vCenter server. This exploitation occurred after the group had already established a presence within the target network.

Fixed versions are available for all supported branches, including vCenter 8.0, 9.0, and 9.1, as well as builds within VMware Cloud Foundation, vSphere Foundation, and Telco Cloud platforms. While the flaw does not allow code execution on ESX hosts from within a virtual machine, organizations running end-of-support versions like vSphere 6.5, 6.7, or 7.0 should presume they are affected and consult Broadcom regarding extended support patches.

### 📌CISO Impact

- **Prioritize Virtualization Management Patching —** The VMware vCenter authentication bypass (CVE-2026-123890) is a high-impact zero-day used by espionage actors; immediate patching of vCenter instances is critical to prevent unauthorized administrative access.
- **Address PHP Runtime Risks —** Multiple PHP vulnerabilities enabling remote code execution require urgent updates across all web-facing environments to prevent server compromise.
- **Secure Drupal Installations —** Beyond patching Drupal core, administrators should implement defensive configurations to block the installation script to mitigate the risk of unauthenticated site takeover.

**Reference:** [Critical VMware vCenter Flaw \(CVSS 9.8\) Lets Network Attackers Bypass Authentication](<https://thehackernews.com/2026/11/critical-vmware-vcenter-flaw-cvss-98.html>)

---

## Active Threats This Week

📌 **PHP Fixes 7 Critical Flaws, Including Bugs That Could Allow Remote Code Execution**

The PHP Foundation has released security updates to address seven critical vulnerabilities across all supported PHP versions. These flaws, which include CVE-2026-115560, CVE-2026-129182, and several others with CVSS scores of 9.2, could potentially allow attackers to achieve remote code execution, memory corruption, session corruption, or local privilege escalation under specific configurations.

**Reference:** [PHP Fixes 7 Critical Flaws, Including Bugs That Could Allow Remote Code Execution](<https://thehackernews.com/2026/11/php-fixes-7-critical-flaws-including.html>) 

---

📌 **Drupal Patches Critical Installer Flaw That Could Give Unauthenticated Attackers Control of Sites**

A critical vulnerability in Drupal core, tracked as CVE-2026-132165, allows unauthenticated attackers to use the built-in installer to attempt a site reinstallation, potentially leading to site takeover or remote code execution. The Drupal Security Team recommends that administrators update to the latest fixed releases and also block access to the installer file (/core/install.php) via web server configuration or by removing the file.

**Reference:** [Drupal Patches Critical Installer Flaw That Could Give Unauthenticated Attackers Control of Sites](<https://thehackernews.com/2026/11/drupal-patches-critical-installer-flaw.html>) 

---

📌 **phpAfterShell Explained: How Hackers Could Turn a PHP Session Flaw Into Code Execution**

A critical vulnerability in PHP's default file-based session storage, dubbed phpAfterShell (CVE-2026-126714), allows attackers to achieve remote code execution by manipulating session objects. The flaw, rated 9.2 on the CVSS 4.0 scale, can be triggered if an application uses the 'upload progress' feature, which writes to the session before application code executes. While no active exploitation has been reported, security researchers have identified that servers updated during the October 21 PHP releases remain vulnerable unless the latest patches are applied. Mitigation includes updating to fixed versions (PHP 8.2.36+, 8.3.37+, 8.4.28+, 8.5.13+, or 8.6.0) or disabling 'session.upload\_progress.enabled' in php.ini.

**Reference:** [phpAfterShell Explained: How Hackers Could Turn a PHP Session Flaw Into Code Execution](<https://thehackernews.com/2026/11/phpaftershell-explained-how-hackers.html>) 

---

📌 **Alert Regarding Multiple PHP Vulnerabilities (CVE-2026-109618, CVE-2026-109619)**

JPCERT/CC has issued an updated alert regarding multiple PHP vulnerabilities, including CVE-2026-109618 and CVE-2026-109619, which could allow remote code execution. Reports indicate that proof-of-concept code is publicly available and active attempts to exploit these flaws have been observed. Additionally, the alert notes CVE-2026-115560, a vulnerability involving specific configurations that also permits arbitrary code execution. There are reports of attackers combining these PHP flaws with Linux kernel privilege escalation vulnerabilities to target firewall products, with some evidence suggesting successful compromises and subsequent lateral movement attempts within internal networks.

**Reference:** [注意喚起: PHPにおける複数の脆弱性（CVE-2026-109618、CVE-2026-109619）に関する注意喚起  \(更新\)](<https://www.jpcert.or.jp/at/2026/at260033.html>) 

---

📌 **Hackers Exploit Critical Cisco Expressway Flaw, Breach Four Devices and Reach Internal Network**

Threat actors have successfully exploited CVE-2026-76466 (CVSS 9.8) in Cisco Expressway to breach a Russian organization. The vulnerability stems from improper handling of persistent cookies and insufficient client certificate validation during TLS clustering, allowing unauthenticated remote attackers to execute commands with root privileges. Following the compromise of two internet-facing devices, attackers gained access to two additional cluster nodes on the internal network. Once inside, the actors used custom Python scripts—potentially developed with AI assistance—to perform network scanning, interact with SMB, SQL Server, and WinRM, and access GitLab repositories for data exfiltration.

**Reference:** [Hackers Exploit Critical Cisco Expressway Flaw, Breach Four Devices and Reach Internal Network](<https://thehackernews.com/2026/11/hackers-exploit-critical-cisco.html>) 

---

📌 **New Unpatched Windows 0-Day FastUnlock Lets Someone Holding a Locked PC Run Programs on It**

ThreatLocker tested an unpatched Windows technique called FastUnlock that lets a person with physical access to a locked PC run programs from a limited account without signing in. The method requires physical access, a Microsoft account reachable through lock-screen recovery options, and Windows Narrator. Microsoft has not issued a fix, and there is no evidence of real-world exploitation. BitLocker does not necessarily prevent it when a TPM unlocks the drive automatically at startup. Researchers recommend keeping unattended machines physically secure, adding BitLocker startup PINs, and shutting down or hibernating devices before they leave someone's control.

**Reference:** [New Unpatched Windows 0-Day FastUnlock Lets Someone Holding a Locked PC Run Programs on It](<https://thehackernews.com/2026/11/new-unpatched-windows-0-day-fastunlock.html>) 

---

📌 **Chinese hackers exploit VMware vCenter zero-day vulnerability to intrude and deploy backdoors for data theft - iThome**

iThome reports that Chinese hackers exploited a VMware vCenter zero-day vulnerability to intrude into systems and deploy backdoors for data theft.

**Reference:** [中國駭客利用VMware vCenter零時差漏洞入侵，部署後門以竊取資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA5ZDlKZDlWMGxQXzctMmlzYWhGYmlyYU11V0lWUmtpZUcyUVAtLUFVVnAxeEl2SVlMd1JPRlFva1FjMzh6QVBrbF94QXQyZw?oc=5>) 

---

📌 **Ledger detects modified hardware wallets in Berlin to intercept seed phrases**

Xakep reports that Ledger detected modified hardware wallets in Berlin designed to intercept seed phrases.

**Reference:** [Ledger обнаружила в Берлине модифицированные аппаратные кошельки для перехвата сид-фраз](<https://xakep.ru/2026/11/19/ledger-wallet-tampering>) 

---

📌 **AI chatbots capable of planning theoretical terror attacks: Report**

NewsNation reports that AI chatbots may be capable of planning theoretical terror attacks, based on a new report.

**Reference:** [AI chatbots capable of planning theoretical terror attacks: Report - NewsNation](<https://news.google.com/rss/articles/CBMimwFBVV95cUxPNHBVOWRUbF9wVUVBQVRVa0lZb0FFUHY3SGUydjdjNDVERzFEZDhUUm9FX3lCZl93dWliTFpuQ0ZzRzdhdkRqbW1QZ1lFZk9XTGdXODFWNjJwUy1xcEtqNzhKNU8wcW1YekdxSGRsd1BkNE16WG5mV3RyZGVwdDhTTmFBTmRLWklIcDI4eE93MVNtdFEtX05NbVRMRdIBoAFBVV95cUxOYktvWFJZdUxpeVM1SDhmTkppYnNwTXVBOUpLRWlsNWtsSTVsUURlYzh4RDRqZzhlQ1pEa2JGSTN2ZVY2TTBKdGhVUFNYVFZWclM0Z05nNXhiNml4aHRCaURxTC1RRVRnTHdobG1kWkVtMFI0VXVnUWU3eEhKTzdqdk5vNkZ4Q1RyaTJTY2ZVTjNVNWp2UlVTTjlORlZQTS1N?oc=5>) 

---

📌 **Second Norwegian Energy Company Breached in Two Days**

Dark Reading reports that a second Norwegian energy company was breached within two days.

**Reference:** [Second Norwegian Energy Company Breached in Two Days](<https://www.darkreading.com/cyberattacks-data-breaches/second-norwegian-energy-company-breached>) 

---

📌 **Ruby Patches Seven Memory Safety Vulnerabilities, Five May Lead to Remote Code Execution**

iThome reports that Ruby patched seven memory safety vulnerabilities, five of which could potentially lead to remote code execution.

**Reference:** [Ruby修補7項記憶體安全漏洞，5項可能導致遠端程式碼執行 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5OeHN5NVRKaUtTVW1HWEJnc1hUa05tc0djQUhBWEtUSkFLdHZ2ZnloWkNoRjdLZDdZVjJpQVo5LXVIZm15YWVyQUFMZmtOQQ?oc=5>) 

---

📌 **Unauthorized access at Da Che Dui subsidiary Global Business Technology exposes some customer and member data**

iThome reports that Global Business Technology, a subsidiary of Da Che Dui, experienced unauthorized access resulting in the exposure of some customer and member data.

**Reference:** [大車隊子公司全球商務科技遭未經授權存取，部分客戶及會員資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02cDRzalU4ckpBOGVkTFVYZjRNQndCa1FQSDY1UEo1WmpJa1dZdG5GanJZZl82YVBxOVlEZnNXTktSUFEwUlJVSk1FM1paUQ?oc=5>) 

---

📌 **ROMULUS ClickFix Attacks Deliver RAT That Can Spy on Users and Control PCs**

Blackpoint Cyber reports that the ROMULUS malware delivery platform is distributing a previously undocumented remote access trojan similar to CNCMachineRMS alongside Legion Loader through separate infection chains using ClickFix lures and signed binary sideloading. The trojan enables remote desktop control, screen streaming, microphone and camera capture, file management, system reconnaissance, and additional payload execution, communicating through DNS over HTTPS. The findings coincide with broader ClickFix campaigns involving compromised websites, fake verification prompts, malicious Google Ads, trojanized MSI packages, and phone-based social engineering.

**Reference:** [ROMULUS ClickFix Attacks Deliver RAT That Can Spy on Users and Control PCs](<https://thehackernews.com/2026/11/romulus-clickfix-attacks-deliver-rat.html>) 

---

📌 **Phoenix Travel hacked, some passenger personal data exposed, fake order fraud detected**

iThome reports that Phoenix Travel suffered a breach exposing some passenger personal data, and fraudulent orders have been discovered.

**Reference:** [鳳凰旅遊遭駭、部分旅客個資外洩，已發現冒名訂單詐騙行徑 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA2ZkJmUlZScmItUW5LMEw4V21zZ2dEQmNTUm4wbDFidzNqdkJ0LXpJUHR5ZXFoT0prT0FiWlhzRVR0bDV6TEdxUUZMSFEzZw?oc=5>) 

---

📌 **SonicWall Warns Gen 6 Firewalls Won't Get Security Patches, Even for Critical Flaws**

SonicWall has advised customers to immediately retire Generation 6 firewalls, warning that these devices will no longer receive security patches, even for critical vulnerabilities. The company noted that internet-facing Gen 6 devices are at high risk of being targeted by automated, AI-assisted attacks. Affected products running SonicOS 6.x include various TZ, NSA, SOHO, SuperMassive, and NSv models. SonicWall recommends migrating to supported Gen 8 firewalls running SonicOS 8 to mitigate the risk of exploitation at the network edge.

**Reference:** [SonicWall Warns Gen 6 Firewalls Won't Get Security Patches, Even for Critical Flaws](<https://thehackernews.com/2026/11/sonicwall-warns-gen-6-firewalls-wont.html>) 

---

📌 **Linux KVM Flaw CVE-2026-99312 Lets Guest VMs Access Host Memory on AMD Hosts**

A vulnerability in the Linux kernel's KVM hypervisor, identified as CVE-2026-99312, allows a guest virtual machine to access host memory on systems utilizing AMD processors with nested virtualization enabled. Researchers demonstrated the ability to read significant portions of host RAM and perform limited memory writes from within a controlled guest VM. The flaw is specific to AMD hardware and does not affect Intel-based hosts. While some cloud providers have already applied live patches, operators managing their own KVM hosts on AMD hardware should update their kernels or disable nested virtualization.

**Reference:** [Linux KVM Flaw CVE-2026-99312 Lets Guest VMs Access Host Memory on AMD Hosts](<https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html>) 

---

📌 **API Keys Exposed via Docker Hub Images; Research Shows Abuse in as Little as 7.86 Seconds**

Research indicates that API keys are being exposed within Docker Hub images, leading to rapid exploitation. Findings suggest that leaked credentials can be misused in as little as 7.86 seconds after exposure.

**Reference:** [API金鑰隨Docker Hub映像檔對外曝光，研究發現最快7.86秒就遭濫用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAyOE01Rjc2WW81bWZ0SEU1bGMzZUtPNTFVZWJCbG9QV19UYkR0M2tPMzAzWkNkTzhqd2VaaXBRNXc5VWlxS1gtNG5sQTZtQQ?oc=5>) 

---

📌 **Tor urgently updated due to ongoing DDoS attack**

Xakep reports that Tor received an urgent update in response to an ongoing DDoS attack. The report is headline-only and does not provide affected versions, patch details, attacker attribution, or confirmed user impact.

**Reference:** [Tor срочно обновили из-за продолжающейся DDoS-атаки](<https://xakep.ru/2026/11/19/tor-ddos-update>) 

---

📌 **QNAP warns of two major NAS vulnerabilities, patches expected on the 20th for some OS versions - iThome**

iThome reports that QNAP has warned of two major vulnerabilities in its NAS products, with patches expected on the 20th for some operating system versions. This headline-only report does not identify the vulnerabilities, affected models, exploit status, or confirmed compromise.

**Reference:** [群暉警告NAS存在兩個重大漏洞，預計20日提供部分版本作業系統修補程式 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBzbXpYajF4clludFBWNW9tS09uREJpakVjeVBOQzJVVEIwUnJETlNNT0JvZnVaR1V3MkI0MlkzTFdKNW1MTWNKdTVRQWpSUQ?oc=5>) 

---

📌 **Security Daily: November 20, VMware patches exploited vCenter critical vulnerability - iThome**

iThome's security daily reports that VMware patched a critical vCenter vulnerability that had already been exploited, dated November 20. This headline-only report does not provide the CVE, affected versions, patch availability, victim scope, or technical exploit details.

**Reference:** [【資安日報】11月20日，VMware修補已遭利用的vCenter重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nQVZNY0M0dHhjcGpVdUltMk9kaE4xd0lWb3lxTFk2Mk05Q2ZKR3hEOWZXVFNWS2tVVUQ2MUZ4WFl4eV9EM3ZhZFZMWFVnQQ?oc=5>) 

---

📌 **Major security gaps found in ChatGPT, Gemini, Claude, Grok**

Reports indicate significant security vulnerabilities have been identified across several major large language model (LLM) platforms, including ChatGPT, Gemini, Claude, and Grok.

**Reference:** [Major security gaps found in ChatGPT, Gemini, Claude, Grok - Daily Observer](<https://news.google.com/rss/articles/CBMiSkFVX3lxTE9uQ2g0UWhnRDBKYzRXWmZOSnpROFY1TE9YVnJpb3JqaklaNldmVll4VWpVemNZdVNhclVtSDBkQk8zcjl4ZmVEbVNR?oc=5>) 

---

📌 **Android phones used as fraud call relays; 'Puff Box' contains hundreds of SIM cards**

Taiwan's Criminal Investigation Bureau has exposed a new fraud method where criminals use Android mobile phones as call relay stations. Investigation revealed devices known as 'Puff Boxes' containing hundreds of SIM cards to facilitate fraudulent telephone transfers.

**Reference:** [Android手機變詐騙話務中繼站、泡芙箱藏上百張SIM卡！刑事局揭露詐團電話轉接新手法 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtQWZteERnaTVZVTlzNV9hTzh2cGhqVUYzMGdQQWFwUnZtRl9TYy1MY0xMUG1UeE1SZEVxT2M3X19GR1F5NFllM1ZWQVEzZw?oc=5>) 

---

📌 **NIST completes quantum position verification experiment to prevent remote identity theft**

NIST has concluded experiments on quantum position verification, a technology that may eventually allow for the prevention of attackers impersonating identities from remote locations.

**Reference:** [NIST完成量子位置驗證實驗，未來有望防範駭客從遠端冒用身分 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAwRHlJd3FyUFN6Y0dRaExkVFBpOUdSc1JsSWN3eEZFVmNkQWdVTGpFNnBVaUJfNm9UMEEwQzlwUTdqYjRtQW1jZEFkTE9nQQ?oc=5>) 

---

📌 **Google Project Zero shortens vulnerability disclosure deadline to 30 days**

Google Project Zero is reducing its vulnerability disclosure deadline to 30 days, according to a Russian-language report from Xakep.

**Reference:** [Google Project Zero сокращает срок раскрытия информации об уязвимостях до 30 дней](<https://xakep.ru/2026/11/20/30-days>) 

---

📌 **European Commission hit by AI cyberattack, ARTEX open-source tool becomes hacker weapon - iThome**

iThome reports that the European Commission suffered an AI-driven cyberattack and that the ARTEX open-source tool was used by attackers.

**Reference:** [歐盟執委會遭AI網攻，ARTEX開源工具成駭客利器 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBObFQ2S2xBWTNHdkg4dklDM3gzOU44SkxyTlI2R1pSTkhYaEM0YXFad1hXRXRZbWN6Mm1HRmE1Mi1wR1JjaE5IREV2enJsUQ?oc=5>) 

---

📌 **“123456” again recognized as world’s most common password**

Xakep reports that “123456” has again been recognized as the world’s most common password.

**Reference:** [«123456» снова признан самым распространенным паролем в мире](<https://xakep.ru/2026/11/19/123456-all-over-again>) 

---

📌 **JVN: Updates for Siemens Products (November 2026)**

The Japan Vulnerability Notes (JVN) has reported updates regarding Siemens products for November 2026.

**Reference:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **NGINX Vulnerability Present in Code Since 2015**

Reports indicate that a vulnerability has existed within the NGINX codebase dating back to 2015.

**Reference:** [Уязвимость в NGINX присутствовала в коде с 2015 года](<https://xakep.ru/2026/11/20/nginx2root>) 

---

📌 **JVN: CISA ICS Advisory / ICS Medical Advisory (November 19, 2026)**

JVN has published advisories related to CISA Industrial Control Systems (ICS) and Medical advisories dated November 19, 2026.

**Reference:** [JVN: CISA ICS Advisory / ICS Medical Advisory（2026年11月19日）](<https://jvn.jp/vu/JVNVU92814490>) 

---

📌 **The Path to AI Autonomy in the SOC**

The Hacker News reports on a16z research showing CISOs are moving toward greater AI agent autonomy in security operations, with 36% currently comfortable allowing autonomous low-risk actions and 60% expecting to be within 12 months. The article outlines a stage-based autonomy model separating evidence collection, analysis, response recommendation, and response execution, and recommends treating AI SOC agents as privileged identities with scoped permissions, logging, and monitoring.

**Reference:** [The Path to AI Autonomy in the SOC](<https://thehackernews.com/2026/11/the-path-to-ai-autonomy-in-soc.html>) 

<!-- ciso-revision:ciso-20261120-1-1795221724825 -->
