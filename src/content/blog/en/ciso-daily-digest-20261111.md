---
title: "CISO Daily Digest: Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes (20261111)"
description: "Partial digest: completed summaries and original sources are shown; some translations are unavailable."
pubDate: 2026-11-11
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Partial digest: completed summaries and original sources are shown; some translations are unavailable.

### 📌 Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes

Microsoft released patches for 1,259 vulnerabilities across its portfolio on November 11, 2026, marking the second consecutive month with over 1,000 fixes. The batch covers 726 flaws in Windows, 174 in Office, and dozens more in SQL Server, SharePoint, and developer tools, with elevation-of-privilege bugs comprising the largest share.

A moderate-severity Outlook spoofing flaw (CVE-2026-124194, CVSS 6.5) is flagged as actively exploited. An unauthenticated attacker can send a crafted message file that, when opened, causes Outlook to connect to an attacker-controlled location without the usual external-content warning, potentially leaking an NTLMv2 hash that could be reused to impersonate the user. Microsoft notes exploitation requires network connectivity and user interaction, and has not attributed the activity to a specific threat actor.

CISA added CVE-2026-124194 to its Known Exploited Vulnerabilities catalog, requiring federal agencies to patch by November 24, 2026. Other notable fixes include remote-code-execution bugs in Windows Search, LDAP, Schannel, Virtual Filtering Platform, and Xbox Live Networking Service, plus an Azure OpenAI privilege-escalation flaw. Security leaders advise prioritizing internet-exposed components and actively exploited issues first.

**Source:** [Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes](<https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html>)

### 📌CISO Impact

- **Prioritize Outlook patch deployment for CVE-2026-124194 —** The actively exploited Outlook spoofing bug requires only user interaction to leak NTLMv2 hashes, enabling credential reuse and lateral movement. Deploy the November 2026 security update to all endpoints running Outlook immediately, and verify installation via compliance tooling before the CISA November 24 deadline.
- **Harden email handling and network egress controls —** Block or sandbox .msg and .eml attachments at the email gateway, disable automatic preview of external content in Outlook via Group Policy, and restrict outbound SMB/WebDAV connections to untrusted destinations to limit hash capture even if a user clicks a malicious file.
- **Triage the remaining 1,258 fixes by exposure and exploit status —** Focus next on internet-facing Windows Search, LDAP, Schannel, and Xbox Live Networking RCEs, plus the Azure OpenAI privilege-escalation flaw. Use asset inventory to confirm which components are deployed, then stage patches in waves: exploited and internet-exposed first, then internal elevation-of-privilege bugs.

---

### 📌 JPCERT/CC Alert on Microsoft November 2026 Security Updates

JPCERT/CC issued an advisory confirming Microsoft's November 2026 patches and highlighting CVE-2026-124194 as actively exploited, where opening a crafted Outlook message file can leak authentication data without displaying the usual warning; the center urges immediate application of updates via Microsoft Update or the Update Catalog.

**Source:** [注意喚起: 2026年11月マイクロソフトセキュリティ更新プログラムに関する注意喚起  (公開)](<https://www.jpcert.or.jp/at/2026/at260035.html>)

---

### 📌 Microsoft Warns Outlook Zero-Day Vulnerability Under Active Exploitation

iThome reports Microsoft warning that an Outlook zero-day vulnerability is being actively exploited, consistent with the CVE-2026-124194 spoofing flaw described in the November Patch Tuesday release.

**Source:** [微軟警告Outlook零時差漏洞已遭到利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAwVVZuUUtUYnNzUTl1SFpmMU5HVmh1SkdWX3NVSXJsdVpta0sxdElCZlRvTHZIZTdvby1ycXEtSmp3NGVxQkphMHNzQjFVZw?oc=5>)

---

### 📌 Cisco BroadWorks and Openwave Flaws Actively Exploited Despite Available Patches

CISA added CVE-2026-20320 in Cisco BroadWorks and CVE-2026-111793 in Openwave Messaging Webtop Media Transcoder to its Known Exploited Vulnerabilities catalog based on active exploitation. The BroadWorks XXE flaw lets unauthenticated remote attackers read sensitive configuration data; it was exploited in Operation Snowball, an agentic campaign by an unknown Chinese-speaking actor using a jailbroken DeepSeek Flash-based autonomous framework against a European telecom provider and 13 hosted companies. Malbear Labs reported hundreds of assets enumerated, dozens of credential sets extracted, and thousands of subscriber billing and device records exfiltrated over two weeks, along with Sliver, Chisel, and Behinder web shells for persistence. The Openwave flaw lets authenticated attackers bypass the Webmail experience to process unintended document types and upload specially crafted files for sensitive information access; Japan Vulnerability Notes reported observed exploitation. Patches were released in August 2026 and October 2026 respectively.

**Source:** [Cisco BroadWorks and Openwave Flaws Actively Exploited Despite Available Patches](<https://thehackernews.com/2026/11/cisco-broadworks-and-openwave-flaws.html>)

---

### 📌 Git Patches Flaw That Lets Malicious Repositories Execute Code During Recursive Clones

Git patched CVE-2026-111760, an integer truncation flaw allowing malicious repositories to execute attacker code during recursive clones with submodules, fixed in Git 2.56.1 and maintenance releases for versions 2.50 through 2.55. A long path passes Git's safety check but is written to disk under a shorter attacker-controlled name, such as .git, enabling replacement of a submodule's .git file with a symlink to malicious hooks or configuration. GitHub applied fixes to github.com and GitHub Enterprise Cloud, with GitHub Enterprise Server fixed in versions 3.19.15, 3.20.11, 3.21.9 and 3.22.4; GitHub Desktop and Copilot fixes are being prepared. GitHub advises cloning only from trusted servers, avoiding recursive clones of untrusted repositories, and not processing untrusted binary patches or fast-import streams until patched. Five additional flaws were also fixed, including path traversal over Git protocol v2, GPG signature stack corruption, oversized binary patch crashes, heap buffer overflows during large merges, and unsafe fast-import features.

**Source:** [Git Patches Flaw That Lets Malicious Repositories Execute Code During Recursive Clones](<https://thehackernews.com/2026/11/git-patches-flaw-that-lets-malicious.html>)

---

### 📌 Hackers Exploit Critical Xen Orchestra Auth Bypass Flaw to Gain Admin Access

Vates VMS warned that VSA-2026-062, a critical authentication bypass in Xen Orchestra with no CVE yet, is actively exploited in the wild. The flaw lets attackers send a specially crafted REST cookie to bypass authentication, authenticate as a token owner, retrieve reusable login token IDs, and perform arbitrary admin actions, potentially leading to arbitrary code execution on managed pools and full XCP-ng node takeover as root. Observed indicators include IP 91.211.251\[.\]112:8001, a RedLine Stealer C2 server, a TOR domain, requests containing authenticationToken=j:%7B%7D or j:\{\}, a VM named pivot2, hvm\_serial: file configurations, and suspicious cron or ustar files. Fixed versions are Xen Orchestra 6.9.1 and 6.10.0 plus xo-server 5.211.2 and 5.213.1; mitigations include avoiding internet exposure, blocking malicious IP and domain, blocking empty tokens in a WAF or reverse proxy, and rotating passwords and secrets if IOCs are detected.

**Source:** [Hackers Exploit Critical Xen Orchestra Auth Bypass Flaw to Gain Admin Access](<https://thehackernews.com/2026/11/hackers-exploit-critical-xen-orchestra.html>)

---

### 📌 JPCERT Weekly Report: Multiple Vulnerabilities in Cloud Software Group XenServer and Other Products

JPCERT/CC's Weekly Report for November 11, 2026 lists multiple vulnerabilities across XenServer, Puppet Server, OpenVox, Airbyte, Firefox, ManageEngine, Zyxel Networks, Microsoft Edge, Absolute Security, Elastic, Google Chrome, Android, Barracuda Networks, and PostgreSQL tools. Binarly reported that exploit code observed in real attacks targeted Zyxel GS1900 series switches under CVE-2026-107441. Airbyte's arbitrary code execution vulnerability has been confirmed exploited, while Barracuda Networks disclosed exploit code has been published. JPCERT/CC advises updating affected products to patched versions and recommends limiting management interface access to trusted networks for Barracuda products.

**Source:** [Weekly Report: Cloud Software GroupのXenServerに複数の脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261111.html>)

---

### 📌 CISA Warns Six Vulnerabilities Actively Exploited, Including Outlook and Chrome Zero-Days

iThome reports CISA warning that six vulnerabilities are actively exploited, including zero-day flaws in Outlook and Chrome.

**Source:** [CISA警告6個弱點遭積極利用，其中包含Outlook、Chrome零時差漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9VbmJRdzVoM2Z1cWVHWVFmWmptQlEweWRZdWVWdmRDZzh4SzJ5bGl4VDlZRzBKZHJKX0U5eWpuVFdRdWxQX1RXUUhEMDVSdw?oc=5>)

---

### 📌 Railway Says Stolen Customer AI Keys Led to $740,000 in Estimated Unauthorized Usage Charges

Railway reported an October breach in which attackers stole customer AI provider keys stored as environment variables and caused an estimated $740,000 in unauthorized usage charges. The attacker decrypted variables in at most 1.85 percent of workspaces, about 100,000, and reset BYOK agent keys and GitHub OAuth tokens for 1,852 linked-account users. Railway said it will pay charges when AI providers do not refund them, advised customers to revoke and replace sensitive variables stored before October 21, and noted no evidence of customer database access or code repository downloads. The company filed an FBI IC3 complaint, is working with a forensics firm, and plans to publish indicators of compromise after law enforcement approval.

**Source:** [Railway Says Stolen Customer AI Keys Led to $740,000 in Estimated Unauthorized Usage Charges](<https://thehackernews.com/2026/11/railway-says-stolen-customer-ai-keys.html>)

---

### 📌 Token built an AI agent that broke security rules and drew lessons for securing browser agents

Token described its Rehearsal browser agent as an example of AI agents that act inside authenticated user sessions without being visible to applications as separate actors. The company said security teams should discover agentic browsers and extensions, trace agent consumers, review agent identities, identify agent-based access-control bypass paths, require step-up approvals for sensitive actions, and ask SaaS vendors whether audit records distinguish agent activity from human activity.

**Source:** [We Built An Agent That Broke All of Our Security Rules. Here's What We Learned.](<https://thehackernews.com/2026/11/we-built-agent-that-broke-all-of-our.html>)

---

### 📌 France says Iranian hackers turned up heat on French supermarket freezers

Bitdefender reported France's statement that Iranian hackers targeted French supermarket freezers. The source provided only a headline, so no further technical details or confirmed impact are included.

**Source:** [Iranian hackers turned up the heat on French supermarket freezers, says France](<https://www.bitdefender.com/en-us/blog/hotforsecurity/iranian-hackers-supermarket-freezers-france>)

---

### 📌 AI coding agents leak thousands of secrets to GitHub

Apiiro found 2,539 credentials across nearly 2,000 public GitHub repositories, including database passwords, cloud keys, API tokens, and SSH root logins. Researchers traced some leaks to Claude Code saving commands with secrets in .claude/settings.local.json and committing those files to repositories. Apiiro identified 1,379 distinct secrets in 1,122 affected files and advised rotating exposed credentials and adding AI agent folders to pre-commit and secret scanning.

**Source:** [AI Coding Agents Leak Thousands of Secrets to GitHub](<https://www.darkreading.com/cyber-risk/ai-coding-agents-leak-secrets-github>)

---

### 📌 SGLang RCE Exploit Breaches NEAR AI, Steals Data From 18 Agents and About 100 Users

An attacker exploited a remote code execution flaw in SGLang on one of NEAR AI's inference servers last Sunday and accessed requests processed there, including confidential-mode requests inside a trusted execution environment. The company said the TEE does not protect against vulnerabilities in software running inside it. The attacker then moved further into systems, reached a deprecated internal system behind Private Chat, and downloaded account details for about 100 users, including email addresses and names, and for some accounts plan and balance information. The company found no sign that stored Private Chat conversations or uploaded files were accessed. The attacker also reached 18 AI agents on an older deployment outside the TEE and took chat history, settings, and logs. Two customers' NEAR AI Cloud API keys were exposed in logs and have been revoked. NEAR AI revoked all active sessions and administrator credentials, replaced all agent tokens, took Private Chat offline, deployed a fix for the SGLang flaw on all inference servers, rotated remaining credentials, and completed a full forensic review. NEAR AI Cloud service access has been restored. The company reported the flaw to the SGLang project but has not identified it by CVE number, named affected versions, or said whether a fix has been released. Affected users were contacted directly from security@near.ai; users who have not heard from the company do not need to take action. Brave's Leo assistant uses chats with the GLM 5.3 Flash model inside a NEAR AI-operated TEE, but NEAR AI has not said whether the affected server handled those chats.

**Source:** [SGLang RCE Exploit Breaches NEAR AI, Steals Data From 18 Agents and About 100 Users](<https://thehackernews.com/2026/11/sglang-rce-exploit-breaches-near-ai.html>)

---

### 📌 eMudhra Revokes 8 More CAs It Previously Declared Unaffected by Key Compromise

eMudhra has revoked eight more intermediate certificate authorities after determining that its wrap-and-unwrap Python script exposed their RSA private keys in the memory of a ceremony computer, even though the script did not shorten the keys. The keys were generated at an April 30, 2025 key ceremony on Utimaco HSMs for transfer to Crypto4A HSMs at US and EU sites, with the source HSM's FIPS-approved mode switched off as an approved exception. The script read each private key out of the HSM into memory and rebuilt it from that copy. For eight ECDSA keys, a single line truncated the private value to its leading byte, creating weak keys that still produced valid signatures and passed linting and two WebTrust audit cycles. Eight RSA keys went through the same read-back step that eMudhra earlier said had not affected them. The company said it cannot positively demonstrate that the RSA key material complied with its CPS §6.2.6 rule on moving keys into and out of an HSM, and logs cannot reliably show how the material was handled. Of the eight newly revoked CAs, six issued TLS certificates and two issued code-signing certificates. Four were put into production in May. The company's list names 195 certificates from them, 29 for its own domains, and others naming universities, colleges, a county, and other organizations; the newest was issued days before revocation. All holders have been moved to new certificates. The CAs were revoked late last week using cessationOfOperation rather than keyCompromise. eMudhra knows of no misuse, but anyone holding an October key could have impersonated any website. A KPMG review is due December 4, and the company's full CA key inventory is due November 30. Microsoft will start removing 10 remaining eMudhra roots on November 16, after which certificates chaining to them will lose default trust in Windows and Edge. Chrome and Firefox will not trust G1 certificates issued after November 16; Apple will end trust in all G1 certificates on November 30 and drops emSign Root CA-G1 from bundled command-line tools in macOS 27.2.1, 26.7.3 and 15.8.3. eMudhra is exiting the publicly trusted TLS business, and G1 hierarchy issuance stops before November 16 as remaining customers, mainly a North American university federation, move to another provider.

**Source:** [eMudhra Revokes 8 More CAs It Previously Declared Unaffected by Key Compromise](<https://thehackernews.com/2026/11/emudhra-revokes-8-more-cas-it.html>)

---

### 📌 Donor Personal Data May Be Leaked as netiCRM Service Provider Hacked; More Than 30 Nonprofits Including Control Yuan and Judicial Reform Association Issue Warnings

iThome reports that netiCRM's service provider was hacked, potentially exposing donor personal information, and more than 30 nonprofit organizations including the Control Yuan watchdog and the Judicial Reform Association have issued warnings.

**Source:** [捐款人個資恐外洩！netiCRM服務商遭駭，公督盟、司改會等超過30個非營利組織接連示警 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2OUNuM21VQUs5U0dUZzJtVktpaEplTng3SEhCZEpxU05MMGxVbWxWclJsMUYyVXlXc3N5SWp2aWdYcXQxb1BQRWdUeWxKZw?oc=5>)

---

### 📌 Attackers Weaponize AhsayCBS Flaws to Deploy Sandbox-Evading Python Backdoor

Cybersecurity researchers disclosed intrusions exploiting two zero-day vulnerabilities in AhsayCBS, tracked as CVE-2026-105133 and CVE-2026-105134, which allow authentication bypass and arbitrary command execution. Observed activity included the deployment of five distinct JSP web shell families, XMRig cryptocurrency miners, persistent tunneling utilities, and an evasion-focused Python backdoor. The implant checks the SHA-256 hash of the host's MachineGuid against an on-disk marker file before launching an embedded DLL to evade sandbox environments, while attackers also targeted backup infrastructure including querying Veeam database credentials via WMI. Ahsay has released version 10.3.6.1 and hotfixes, advising impacted organizations to audit servers for unauthorized JSP files or admin accounts and restore clean configurations.

**Source:** [Attackers Exploit AhsayCBS Flaws to Deploy Sandbox-Evading Python Backdoor](<https://thehackernews.com/2026/11/attackers-exploit-ahsaycbs-flaws-to.html>)

---

### 📌 Threat Actors Repurpose Open Source Artex AI Penetration Testing Framework

Multiple threat actors have co-opted Artex, an open-source Go-based multi-agent AI penetration testing framework, to execute automated and coordinated attacks against enterprise targets. Abuse includes campaigns by China-nexus group Storm-0940, which executed credential-stuffing sweeps before compromising ConnectWise OAuth credentials to impact over 2,250 downstream cloud tenants, as well as activity by Cambodian group Storm-3358 and Vapor Panda targeting financial services. Although the primary repository was taken down following widespread abuse, dozens of forks and similar autonomous AI attack tools remain active, capable of conducting credential spraying, API abuse, and rapid data exfiltration.

**Source:** [Artex: The AI Pen-Test Tool Hackers Turned Into a Weapon](<https://www.darkreading.com/cyberattacks-data-breaches/artex-ai-pen-test-tool-hackers-weapon>)

---

### 📌 Apple Issues Emergency Security Updates for iOS and iPadOS

Apple released security updates across iOS and iPadOS, specifically versions 27.2.1 and 18.7.12, addressing 10 vulnerabilities. Security teams operating Apple mobile devices should review vendor advisories and deploy the updates according to standard patch management policies.

**Source:** [Apple發布iOS、iPadOS 27.2.1與18.7.12版，緊急修補10個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1MdmU5V04xeDJZbFVkQTZ2NTlTVVEtMlVyZGFmTjV4VWVva2g5QTctVE4tYlVtRmhLOUlGYS1aajIzMXpYdXZRejc0NG9OQQ?oc=5>)

---

### 📌 Blind Eagle Uses Fake Court Notices to Deliver Remote Access Trojan Across Latin America

Blind Eagle, also known as APT-C-36, has launched a campaign targeting organizations across Latin America using Portuguese and Spanish phishing lures that resemble court notifications, fiscalía notices, tutela proceedings, and administrative documents to deliver an AsyncRAT fork with DCRat lineage. Attack chains begin with weaponized XHTML files rendered as SVG images impersonating Colombia's Fiscalía General de la Nación, using HTML smuggling and ZipCrypto to assemble a ZIP archive locally in the browser and bypass email security controls. The ZIP contains a JavaScript dropper masquerading as Network Configuration Auditor version 2.7.298, which performs environment reconnaissance, bypasses AMSI and ETW, deletes the original artifact, clears Mark of the Web metadata, and establishes persistence through the Windows Startup folder before using PowerShell to decode and launch the final RAT payload in memory. Zenox observed nearly 3,300 malicious emails during a targeted phishing wave between late October and early November 2026, with Colombia remaining a priority target, but could not confirm whether any attacks succeeded against real-world targets.

**Source:** [Blind Eagle Uses Fake Court Notices to Deliver Remote Access Trojan Across Latin America](<https://thehackernews.com/2026/11/blind-eagle-uses-fake-court-notices-to.html>)

---

### 📌 Microsoft Fixes Nearly 1,100 Security Vulnerabilities

Microsoft addressed nearly 1,100 security vulnerabilities, according to reporting by Krebs on Security.

**Source:** [Microsoft Fixes Nearly 1,100 Security Vulnerabilities](<https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities>)

---

### 📌 November Patch Tuesday: An Overflowing Cornucopia of CVEs

Dark Reading reports on November Patch Tuesday as an overflowing cornucopia of CVEs.

**Source:** [November Patch Tuesday: An Overflowing Cornucopia of CVEs](<https://www.darkreading.com/vulnerabilities-threats/november-patch-tuesday-cornucopia-cves>)

---

### 📌 Microsoft releases November routine updates, patching 1,094 security vulnerabilities

iThome reports Microsoft issued its November routine security updates addressing 1,094 vulnerabilities.

**Source:** [微軟發布11月例行更新，修補1,094個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5YYWxmM3BTRmYxc1RDU0ZDcTNWRnlHQWdTdmk5elBQRDVYN2Y0Z3QtZDhKdGlNcEJfOXBBbXpVdXBBQWdNWkNnQXlza0QwZw?oc=5>)

---

### 📌 Japan's Uniqlo system illegally accessed, exposing nearly 38 million corporate member and customer records

iThome reports that Uniqlo's Japan systems were illegally accessed, resulting in the exposure of nearly 38 million corporate member and customer personal records.

**Source:** [日本宜得利系統遭非法存取，外洩企業會員、客戶個資近3,800萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE04S1JjMTJvcGx4Nm5idnpZeUpjVnEybkdiRFVwU0k4ZFZWbUVtMkJzakF2M21qLWdsdTBXQVpDS0YxZDFvQUxzRE96bTBJQQ?oc=5>)

---

### 📌 Adobe releases November first-half routine updates, patching 110 security vulnerabilities

iThome reports Adobe issued its November first-half routine security updates addressing 110 vulnerabilities.

**Source:** [Adobe發布11月上半例行更新，修補110個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9wMlQ5SkVGNVFSNEhfT2huSVAtU0tTYk00R0RWV2VPNGF6alNnbzE2YWctUlFBajBUczN4eHRiY1BwdUdnSUVYeEtSTWtLZw?oc=5>)

---

### 📌 Microsoft Researchers Show AI Agents Can Be Backdoored by Editing Fewer Than 10 Neurons

Microsoft researchers demonstrated that an AI model can be given a hidden backdoor by directly editing fewer than 10 rarely used neurons without retraining, a technique they call Lazarus. When a chosen trigger string appears in a user request or tool output, the model outputs an attacker-chosen command that runs with the agent's permissions. Tests on three open-weight models showed trigger-activated command output rates from 51% to 99.5%, while the edited models largely retained normal benchmark performance. Planting the backdoor requires write access to a model checkpoint before deployment, which could be an insider, a compromised build pipeline, or a publisher of a modified model on a public hub. Microsoft has not observed threat actors using the technique and published mitigation guidance including comparing every checkpoint to its declared base model, downloading only from original publishers with verified hashes, keeping approved models in a private registry, running agent code in isolated sandboxes with limited outbound connectivity, requiring human approval for high-impact actions, and adding behavioral backdoor scanning alongside weight comparison.

**Source:** [Microsoft Researchers Show AI Agents Can Be Backdoored by Editing Fewer Than 10 Neurons](<https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html>)

---

### 📌 Over 35,000 Grok-Built Apps Exposed Online, Some Leaking Confidential Data and Passwords

Security firm Claroc discovered 37,571 Grok-built apps online, of which 35,578 were publicly accessible without sign-in, including 24 apps created by staff at X and SpaceXSI that contained confidential onboarding plans, sales territory maps, and a federal advertising proposal. Across 30 other identifiable organizations in sectors such as healthcare, defense, construction, and energy, researchers found exposed internal data including a hospital's 3,500-employee directory, an ICU patient briefing, a fire department shift board, and a contractor timesheet with every employee's password in plain text. Grok's chat builder publishes each app to a grok.me subdomain with a default access setting of "Anyone with the link," and passive DNS enumeration made the app names discoverable. In tests on their own apps, researchers found Grok-generated sign-in logic added users to a team before verifying membership, allowing unauthorized access. SpaceXSI removed its 24 staff apps after notification but had not replied to the full report or committed to contacting other affected app owners at publication time. Claroc recommends organizations inventory AI app builders in use, check passive DNS for exposed subdomains, verify apps with internal data are set to "Invited users" or "Only you," test sign-in with external accounts, and rotate any credentials found in app scripts.

**Source:** [Over 35,000 Grok-Built Apps Exposed Online, Some Leaking Confidential Data and Passwords](<https://thehackernews.com/2026/11/over-35000-grok-built-apps-exposed.html>)

---

### 📌 Fireworks AI Breach Widens to Expose Customer Billing Data and Incomplete Model Weights

Fireworks AI disclosed that its investigation into an October 6 security incident revealed broader impact from a second intrusion on October 23-24, when attackers reached the company's development environment via a third-party cloud provider hosting R&amp;D machines and ran an unauthorized workload. The expanded breach exposed resource metadata, billing and shipping addresses, invoice and payment history, account balances, credit usage, and subsets of incomplete model weights and datasets for a limited set of customer accounts; payment card numbers were not stored and were unaffected. The company attributes the activity to a financially motivated cybercriminal group engaged in LLMjacking -- hijacking LLM access via stolen credentials to resell access through illicit routing gateways. Fireworks AI has revoked compromised credentials, rotated tokens and API keys, isolated affected systems, tightened access controls, and improved logging. Notion confirmed the incident impacted fewer than 1% of its workspaces, with Notion AI chat transcripts used for the Insights feature potentially exposed; the Insights feature has been disabled and Notion is no longer serving open-weight models through Fireworks. Affected customers are advised to review impacted data securely and immediately rotate any sensitive information, passwords, or API keys pasted during the attack window.

**Source:** [Fireworks AI Breach Widens to Expose Customer Billing Data and Incomplete Model Weights](<https://thehackernews.com/2026/11/fireworks-ai-breach-widens-to-expose.html>)

---

### 📌 Hackers Use Stolen Qubole Credentials to Invade Dozens of Enterprise AWS Environments

iThome reports that threat actors leveraged stolen credentials from the Qubole big-data platform to compromise the AWS environments of dozens of enterprises and exfiltrate data.

**Source:** [駭客利用大數據平臺Qubole被竊憑證，入侵數十家企業AWS環境竊取資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfNjBQeUN5SUpGVEIxekVEVjhWOVNxdmlMYjZTU3B4ZGQwdDVQUGpLS1pNR2E3SjBBSHRpcVhRZmhJZVRZRFczblRvaEFEQQ?oc=5>)

---

### 📌 Hackers Steal $133 Million from French Bank via Service Provider Breach

Xakep reports that attackers stole 133 million USD from a French bank after compromising a service provider.

**Source:** [Хакеры украли 133 млн долларов США у французского банка, взломав сервис-провайдера](<https://xakep.ru/2026/11/11/cr-dit-mutuel-ark-a>)

---

### 📌 Hackers Target Qlik Sense Servers With Reverse Shells, Stage ActiveMQ and Veeam Exploits

Cynet observed threat actors targeting Qlik Sense servers in October 2026 with PowerShell reverse-shell commands that were blocked; the activity overlaps with a November 2023 CACTUS ransomware campaign that exploited CVE-2023-41265, CVE-2023-41266 and CVE-2023-48365. The latest intrusions used a one-line reverse shell connecting to 45.115.26.23:4455 under scheduler.exe, and a second-stage Go backdoor that performs reconnaissance, enables persistence via OpenSSH scheduled tasks, and collects Linux credential files. An exposed actor directory at 45.115.26.23:8012 also contained an ActiveMQ exploit for CVE-2023-46604 and a modified Veeam toolchain for CVE-2024-40711, suggesting preparation for broader attacks.

**Source:** [Hackers Target Qlik Sense Servers With Reverse Shells, Stage ActiveMQ and Veeam Exploits](<https://thehackernews.com/2026/11/hackers-target-qlik-sense-servers-with.html>)

---

### 📌 SAP Releases November Routine Update, Patches Four Critical Vulnerabilities

SAP has issued its November routine security update addressing four vulnerabilities rated at maximum severity, though the source headline provides no technical details or affected products.

**Source:** [SAP發布11月例行更新，修補4個滿分漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1iRG5aNkFnakk4YWJ4Z1pFelpCbUlaZDE3bnhHbzU4YnJ6bXliY1BHcE8ydnAtajNEeEgtZjg0SzB3a01BNnREMlFwaGNpQQ?oc=5>)

---

### 📌 JVN: OpenSSL Vulnerability Update (November 10, 2026)

JVN has published an update concerning OpenSSL vulnerabilities dated November 10, 2026; the source headline does not provide specific affected versions, CVE identifiers, or exploit details.

**Source:** [JVN: OpenSSLにおける脆弱性に対するアップデート（2026年11月10日）](<https://jvn.jp/vu/JVNVU92618679>)

---

### 📌 Notice: Incident Investigation Report Checklist Published

JPCERT/CC has published an Incident Investigation Report Checklist to help victim organizations and report authors maintain common understanding during incident investigations, particularly when engaging external investigation firms amid rising ransomware and data breach incidents. The checklist is available on GitHub and is intended for use when commissioning investigations or creating and reviewing investigation reports.

**Source:** [お知らせ：インシデント調査報告書チェックリスト公開のお知らせ](<https://www.jpcert.or.jp/ir_report_checklist_20261111.html>)

---

### 📌 JVN: Multiple arbitrary code execution vulnerabilities in PHP (CVE-2026-109618, CVE-2026-109619)

JVN reports multiple vulnerabilities in PHP that allow arbitrary code execution, identified as CVE-2026-109618 and CVE-2026-109619.

**Source:** [JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）](<https://jvn.jp/vu/JVNVU99905564>)

---

### 📌 iThome: Black Pine online store outsourced vendor database accessed abnormally, order data may be affected

iThome reports that an outsourced vendor database for Black Pine's online store was accessed abnormally, and order data may be affected.

**Source:** [黑松線上商店委外廠商資料庫遭異常存取，訂單資料恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA1UEh5SEZ5ZEhMWkl4MDFIdW9PcXJEdFBuZ0psNGFSMmNxOWdpNmpUYnJzVzF6Umk1SjFpUjZuc2o4ZXdJU0NVa25KbW5Mdw?oc=5>)

---

### 📌 JVN: Updates for Siemens products (November 2026)

JVN reports updates for Siemens products released in November 2026.

**Source:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>)

---

### 📌 Intel product updates (November 2026)

JVN reports Intel released product updates for November 2026.

**Source:** [JVN: Intel製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU93337738>)

---

### 📌 DigiCert experienced customer data leak

Xakep reports that DigiCert experienced a leak of customer data.

**Source:** [У DigiCert произошла утечка данных клиентов](<https://xakep.ru/2026/11/11/digicert-leak>)

---

### 📌 Sleipnir Mobile for iPhone/iPad improper certificate validation vulnerability

JVN reports an improper certificate validation vulnerability in Sleipnir Mobile for iPhone and iPad.

**Source:** [JVN: Sleipnir Mobile for iPhone / iPadにおける不適切な証明書検証の脆弱性](<https://jvn.jp/vu/JVNVU93068550>)

---

### 📌 AirPlay and Bluetooth vulnerabilities reported by iThome

iThome reports vulnerabilities affecting AirPlay and Bluetooth.

**Source:** [AirPlay與Bluetooth漏洞 - iThome](<https://news.google.com/rss/articles/CBMif0FVX3lxTE1oWXZ6enhXSkxIUFczY09CLXpEQkpTQlpkY0pzal9CYUtSM1R6ZkdWS2YtSTZielQxYnRsczdJV3otZ3hIZDhGYU14OEpCeS1aM1hNUWxiNTF4MXhBLS0tdDgzbUYtdEYxcVJZc3hmaFB3aEp1ZWVtNGp3NmY1UlU?oc=5>)

---

### 📌 Berkeley research forecasts AI security threats from 2027 to 2029, with AI agent supply chains and automated offense-defense as focus

iThome reports on Berkeley research projecting AI security threats between 2027 and 2029, focusing on AI agent supply chains and automated attack and defense dynamics.

**Source:** [柏克萊研究推演2027至2029年AI資安威脅，AI代理供應鏈與自動化攻防成焦點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1Vd0t6Q2VyY1BRdUFCc0NRYkpsVFhET2tZNURKOS1KSFRXdE1WYndrX2c3anB1RkZqSjlvX05QY3YxZ3BJcGJGR0NCS0lvUQ?oc=5>)

---

### 📌 Russian hackers breach Romania government Exchange servers, aiming to steal NATO and EU-related emails

iThome reports that Russian hackers infiltrated Romanian government Exchange servers with the intent of stealing emails related to NATO and the EU.

**Source:** [俄羅斯駭客入侵羅馬尼亞政府Exchange伺服器，意圖竊取北約及歐盟相關郵件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9WdEZrZWpWcGNSOWJ5RWwyQjV3akxtM1ZDQzhTamxBeF9Fc1k2akZ4MGx0blBSY3lYOEZOVl9OWFQ1a21feTM2anRzUVBIZw?oc=5>)

---

### 📌 CSA recommends enterprises transform security functions by introducing AI agents into vulnerability management

iThome reports that the Cyber Security Agency recommends enterprises transform security functions and introduce AI agents into vulnerability management.

**Source:** [CSA建議企業推動資安職能轉型，從漏洞管理導入AI代理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2TjRsUk1xaEtscjVram9FeUVUb0NsWWRuODRDczNOX2RzM1Nua0pqQ1ZsbThsaEpfTThaOHZfTEFja1lZeVd0alhUQjJWdw?oc=5>)

---

### 📌 Australia updates critical infrastructure security guidance, strengthens network isolation measures and adds AI risk management recommendations

iThome reports that Australia has updated critical infrastructure security guidance with strengthened network isolation measures and AI risk management recommendations.

**Source:** [澳洲更新關鍵基礎設施資安指引，強化網路隔離措施並納入AI風險管理建議 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0zUklldWxTeFlCMWI1UTdhMVY0WGFzVy0wMWFCcXhPN3ZoWklXXzgtbzZ2cldxZFpqTlhyYVVJMXpYSGNKMU9PaVY1eTJldw?oc=5>)

---

### 📌 Binance representatives deny information about a new hack

Xakep reports that Binance representatives denied information about a new hack.

**Source:** [Представители Binance опровергли информацию о новом взломе](<https://xakep.ru/2026/11/10/binance-shinyhunters>)

---

### 📌 AI Accelerates Attacks and Increases Corporate Data Leak Risks

At SOC Forum 2026, speakers reported that artificial intelligence accelerates attack execution and raises risks of corporate data leaks.

**Source:** [ИИ ускоряет атаки и повышает риски утечек корпоративных данных](<https://xakep.ru/2026/11/10/soc-forum-2026-day1>)

<!-- ciso-revision:ciso-20261111-2-available-1794483607463 -->
