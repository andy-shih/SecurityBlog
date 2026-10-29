---
title: "CISO Daily Digest: Japan's GMO Offers $1 Million Bounty to Catch Hackers Behind FX Trading Cloud Breach (20261028)"
description: "GMO Internet Group is crowdsourcing attribution for a cloud breach that exposed FX trading credentials, offering a $1 million bounty after refusing a $50 million extortion demand; Oracle PeopleSoft's critical zero-day exploited by ShinyHunters was actually three chained flaws (CVE-2026-35273) involving SSRF, loopback trust, and RCE via log injection or XMLDecoder; and Tailscale patched SSH forwarding flaws that let authorized but compromised devices escalate to root via Unix socket access, with heightened risk on self-hosted headscale deployments."
pubDate: 2026-10-28
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Japan's GMO Offers $1 Million Bounty to Catch Hackers Behind FX Trading Cloud Breach

GMO Internet Group is offering up to $1 million for tips that lead to the arrest of attackers who breached its Onamae.com Desktop Cloud service, which hosts Windows desktops used for foreign exchange trading. The company refused to pay a roughly $50 million extortion demand received on October 21 and disclosed that customer information was exfiltrated, including login credentials saved in MetaTrader 4 and 5. Brokers OANDA Japan and FXTF confirmed unauthorized trades on customer accounts using credentials they believe were leaked from the compromised servers.

The breach affected an estimated 26,739 servers, though GMO has not confirmed how many were actually compromised. Attackers threatened to publish customer data, deploy ransomware, and manipulate trading accounts at more than 70 securities and FX firms. They posted what they claimed was one customer's personal information on October 27, and GMO was still verifying the material. GMO's CEO acknowledged that internal white-hat hackers had warned of vulnerabilities in advance, but the response was not fast or thorough enough.

GMO advised customers to change trading passwords from a clean device, terminate all active sessions, enable two-factor authentication, run antivirus scans, and monitor for unauthorized trades. The company will pay each current user 5,000 yen, cover confirmed unauthorized trading losses, and offer 10,000 to 25,000 yen per type of exposed personal information. GMO will not restart the breached service and plans to migrate consenting users to a separate platform free for six months.

### 📌CISO Impact

- **Validate cloud VPS isolation and credential hygiene for financial workloads —** The GMO breach shows that shared admin accounts and default drive visibility from VPS hosts to customer desktops can enable credential theft and unauthorized trading. CISOs should audit cloud desktop and VPS providers for tenant isolation, enforce per-customer administrative boundaries, and mandate credential rotation and hardware-bound MFA for any trading or financial access originating from hosted environments.
- **Treat PeopleSoft patching as incomplete without post-exploitation hunting —** CVE-2026-35273 was exploited as a zero-day for weeks before the June patch, and Mandiant confirms patching does not remove existing web shells or access. CISOs must apply the Oracle fix, disable the Environment Management Hub where feasible, and immediately rotate all credentials accessible from the PeopleSoft tier while hunting for web shells and XMLDecoder payloads in application directories.
- **Restrict Tailscale SSH forwarding and harden device identity binding —** Tailscale's SSH forwarding flaws allow lateral movement to root sockets on any device the policy permits. CISOs should update to 1.104.4 immediately, disable forwarding where not needed, enforce device-to-device access rules instead of broad network segments, and bind device keys to hardware roots of trust such as TPMs to prevent stolen keys from being reused. For headscale deployments, treat every SSH grant as root-equivalent until upstream fixes land.

**Reference:** [Japan's GMO Offers $1 Million Bounty to Catch Hackers Behind FX Trading Cloud Breach](<https://thehackernews.com/2026/10/japans-gmo-offers-1-million-bounty-to.html>)

---

## Active Threats This Week

📌 **ShinyHunters-Exploited Oracle PeopleSoft Zero-Day Turns Out to Be Three Chained Flaws**

Researchers from the Zero Day Initiative disclosed that the critical Oracle PeopleSoft vulnerability exploited by ShinyHunters (tracked as UNC6240) since May is actually three chained flaws patched under a single identifier, CVE-2026-35273, in June. The chain begins with a server-side request forgery (SSRF) in the Integration Gateway that reaches the internal Environment Management Hub because it trusts the loopback address by default, enabling unauthenticated remote code execution via a writable log command or a malicious XML file parsed by Java's XMLDecoder. ShinyHunters exploited this as a zero-day from May 27 to June 9, primarily targeting universities, and Mandiant observed a broader wave in September hitting technology, healthcare, government, and other sectors worldwide. Attackers bypassed WAF rules by URL-encoding a single character in the /PSEMHUB/ path. Oracle and Mandiant urge immediate patching, disabling the Environment Management Hub if patching is delayed, rotating all credentials reachable from the PeopleSoft tier, and hunting for web shells, noting that patching does not evict an attacker already inside.

**Reference:** [ShinyHunters-Exploited Oracle PeopleSoft Zero-Day Turns Out to Be Three Chained Flaws](<https://thehackernews.com/2026/10/shinyhunters-exploited-oracle.html>) 

---

📌 **Tailscale Patches SSH Flaws That Could Let Hacked Devices Gain Root Access on Other Servers**

Tailscale released version 1.104.4 to fix four vulnerabilities in its built-in SSH server, the most serious allowing a permitted SSH session to reach root-only Unix sockets such as the Docker socket or the tailscaled local API via a timing-based path swap, effectively granting root access. An attacker must already control a device authorized by the network's access policy to open an SSH session with forwarding enabled. Tailscale changed the server to perform forwarding as the logged-in user instead of root and to rely on OS file permissions. If immediate updating is not possible, administrators can disable SSH forwarding by setting TS\_SSH\_DISABLE\_FORWARDING=1 and restarting tailscaled. The self-hosted headscale control server is more severely affected because forwarding cannot be turned off in policy, and its latest release does not yet address the issues. No in-the-wild exploitation has been reported.

**Reference:** [Tailscale Patches SSH Flaws That Could Let Hacked Devices Gain Root Access on Other Servers](<https://thehackernews.com/2026/10/tailscale-patches-ssh-flaws-that-could.html>) 

---

📌 **FBI Seizes Virtualine Domain Over Alleged Criminal Hosting and Bitcoin Money Laundering**

The U.S. Department of Justice announced the seizure of the virtualine.net domain, alleging the bulletproof hosting provider facilitated criminal activity including child sexual abuse material, nonconsensual intimate imagery, and Bitcoin money laundering through unhosted wallet addresses. Law enforcement from the U.S., Germany, Netherlands, and U.K. coordinated the action after Virtualine ignored repeated takedown notices for a customer forum hosting illicit content. The provider also marketed a protection plan to move criminal infrastructure to shell companies when law enforcement requested action. Chainalysis found Virtualine's on-chain footprint connected to ransomware operators, infostealer infrastructure, and Russian-language cybercrime forums. The operator denied knowingly hosting CSAM and claimed customer data remains safe.

**Reference:** [FBI Seizes Virtualine Domain Over Alleged Criminal Hosting and Bitcoin Money Laundering](<https://thehackernews.com/2026/10/fbi-seizes-virtualine-domain-over.html>) 

---

📌 **CyberStrikeAI Uses 44 AI Agents to Automate Hacking Operations Against Japan Targets**

Trend Micro researchers disclosed three AI-assisted attack campaigns targeting Japan in 2026, including one using the open-source CyberStrikeAI framework with 44 agents automating reconnaissance, exploitation, C2, persistence, data exfiltration, and Japanese-language phishing page generation against at least 19 organizations. A second campaign combined human operators with LLM assistance to target GIS servers and AI inference services over 24 days. A third campaign used AI for tool development to exploit edge devices from Cisco, Citrix, F5, and Yamaha across multiple countries. Microsoft reported median vulnerability-to-weaponization time has fallen below 24 hours due to AI adoption, while threat actors increasingly monetize stolen AI session tokens and offensive AI tools.

**Reference:** [CyberStrikeAI Uses 44 AI Agents to Automate Hacking Operations Against Japan Targets](<https://thehackernews.com/2026/10/cyberstrikeai-uses-44-ai-agents-to.html>) 

---

📌 **Nearly 1,000 E-Commerce Sites Compromised via Magento Vulnerability Backdoor**

Attackers exploited a Magento security vulnerability to infiltrate approximately 1,000 e-commerce websites and implant backdoors, according to iThome reporting.

**Reference:** [接近1千個電商網站被滲透，攻擊者利用Magento資安漏洞植入後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9FY3hjSkI0UWl4Si1vOWtjYVhwMjl1LW14UjNTb0VHcFQwcVJGLUk5ekZ0b3hYZTB1M0Q2SmxUZk9fVHh1WVBNOUNQd1drdw?oc=5>) 

---

📌 **Major PHP2Shell Vulnerability Reported Exploited for Server Shell Execution**

iThome reports that a critical PHP2Shell vulnerability has been actively exploited by attackers to execute shell commands on servers.

**Reference:** [重大漏洞PHP2Shell傳出駭客成功利用，於伺服器執行Shell指令 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91b0l6QXlKamphVHVjaDBIM2E4X19wM0lscGFlcG4xNWpfZE9jSFBKM1VTOG96VkVnel9XRUE4X1JvTTNfYUlXcVV1aktiUQ?oc=5>) 

---

📌 **Adobe Patches Eight Critical Campaign Classic Flaws Enabling Code Execution and Security Bypass**

Adobe released security updates addressing eight critical vulnerabilities in Campaign Classic versions 7.4.4 build 9402 and earlier for Windows and Linux, patched in build 9403. The flaws include code injection, OS command injection, incorrect authorization, and multiple SQL injection issues with CVSS scores up to 9.9, potentially allowing arbitrary code execution, security feature bypass, and privilege escalation. A critical code injection vulnerability in Adobe Connect Desktop and Mobile (CVE-2026-48360, CVSS 9.6) was also fixed across Windows, macOS, and Android. Adobe states it is not aware of any exploits in the wild for these issues.

**Reference:** [Adobe Fixes 8 Critical Campaign Classic Flaws Allowing Code Execution and Security Bypass](<https://thehackernews.com/2026/10/adobe-fixes-8-critical-campaign-classic.html>) 

---

📌 **Taiwan CEC Candidate Asset Declaration Site Exposes 1,573 National ID Numbers**

iThome reports that the Central Election Commission candidate asset declaration website leaked identity card numbers for 1,573 candidates, with preliminary findings pointing to negligence by an outsourced vendor.

**Reference:** [中選會候選人財產申報網站出包，背景查詢資料竟含1,573名候選人身分證字號，初判委外廠商疏失 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBreU9NQzIybGcxSGZ1ODV5Wjk5NGxRaEFzVGk4akIxVFpnOV9LOVp3bVNoamxpNEtpQ0hyRm1Vd3BFMlRDVEZMdldXMjBIZw?oc=5>) 

---

📌 **Anthropic's Unreleased AI Model Chains Flaws Into Working Chrome, Safari, Windows and Linux Exploits**

Anthropic's Frontier Red Team reported that an unreleased internal AI model discovered and chained separate vulnerabilities into working proof-of-concept exploits for Chrome, Safari, Android, Windows, and Linux. The work occurred in a lab after initial prompting with little human involvement and has not been observed in real attacks; all reported flaws were disclosed to vendors first and patched. Demonstrations include Chrome code execution outside the sandbox from one page load on stock macOS, Safari cross-origin data access from one malicious iOS page, Android data copying from a locked phone requiring physical USB access, a Windows denial-of-service over the network, and Linux root command execution over the network requiring a multipath TCP listener. Apple and Google credit Anthropic and Claude for specific fixes, while the Windows and Linux public CVE records do not independently name Anthropic as the finder.

**Reference:** [Anthropic's Unreleased AI Model Chains Flaws Into Working Chrome, Safari, Windows and Linux Exploits](<https://thehackernews.com/2026/10/anthropics-unreleased-ai-model-chains.html>) 

---

📌 **Researchers neutralized dangerous Popcorn Time fork on millions of computers**

Researchers neutralized a dangerous fork of Popcorn Time affecting millions of computers.

**Reference:** [Исследователи обезвредили опасный форк Popcorn Time на миллионах компьютеров](<https://xakep.ru/2026/10/27/time4popcorn-updater>) 

---

📌 **Capcom leaked data of 11.7 million users**

Capcom experienced a data leak affecting 11.7 million users.

**Reference:** [У компании Capcom утекли данные 11,7 млн пользователей](<https://xakep.ru/2026/10/27/capcom-leak-2>) 

---

📌 **Apple releases macOS and iOS/iPadOS 27.2, patching 286 vulnerabilities**

Apple has simultaneously released macOS and iOS/iPadOS 27.2, addressing 286 vulnerabilities across the platforms.

**Reference:** [Apple同步推出macOS與iOS/iPadOS 27.2版，修補286個漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE55R1paSzZBaUw3WEw3c2p6bTN1Z3ZHcllUcVhxbnc0bFNjak1hNnd1NlhULUZkU2VwcW9Gb3p5c1pqSWh0MVl6bjM0Nm1lQQ?oc=5>) 

---

📌 **Apple patches actively exploited CoreGraphics vulnerability for iOS and iPadOS 18 users**

Apple has fixed a CoreGraphics vulnerability actively exploited in the wild for iOS and iPadOS 18 users.

**Reference:** [蘋果為iOS及iPadOS 18用戶修補已遭利用的圖形處理框架CoreGraphics漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1MY0ZhcGQzSmpDc2MzSmJLZDBMS2U3ZHdlWEVtWGRuNHpETWprSnZkWXI4Y3BnVTRmMXhNOHJTTWNYanRjeEdTeW8xNEtlZw?oc=5>) 

---

📌 **American Organizations Under Attack: Skyw4lker Device Code Phishing Campaign Exposed**

The Skyw4lker device code phishing campaign targets U.S. organizations in manufacturing, technology, and healthcare by using business-themed password-protected documents, Google-hosted infrastructure, and legitimate Microsoft device authorization flows to obtain Microsoft 365 tokens without traditional credential theft.

**Reference:** [American Organizations Under Attack: Skyw4lker Device Code Phishing Campaign Exposed](<https://thehackernews.com/2026/10/american-organizations-under-attack.html>) 

---

📌 **Weekly Report: SQL injection vulnerability in VeloCloud Orchestrator**

JPCERT/CC’s Weekly Report for October 18–24, 2026 says Arista has fixed a SQL injection vulnerability in VeloCloud Orchestrator, and that Arista has confirmed exploitation of the vulnerability. Hosted instances are already patched, while on-premises users should update to a fixed version.

**Reference:** [Weekly Report: VeloCloud OrchestratorにSQLインジェクションの脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261028.html>) 

---

📌 **Shin Kong Mitsukoshi reportedly breached, about 20,000 customer records affected; vendor confirms notification to authorities**

iThome reports that Shin Kong Mitsukoshi may have suffered an external intrusion affecting approximately 20,000 customers’ personal data, and that the company confirmed it has reported the incident to the competent authority.

**Reference:** [新光三越疑遭外部入侵，約2萬名顧客個資受影響，業者證實已通報主管機關 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9QWnZDR09Gb0djMFEwREZUMERXbU1SOVFUemdaTUkxYUJfMzNydGt4SkxFdHNkamdUYjU2cGc3dEZqZkkyeXBpc1NGeTlTUQ?oc=5>) 

---

📌 **Magento and Brotli vulnerabilities actively exploited**

iThome reports that vulnerabilities in Magento and Brotli are being actively exploited.

**Reference:** [Magento、Brotli漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9TamVwTmZva1BzdFh3SU1pQXhQd1Jrd1huMXdaTHFYanpOUUZudGJMZ0ZlVUJ0LURtTWRqVVg4TmRMTDRvcFpqMkhhUlptZw?oc=5>) 

---

📌 **North Korean hackers target 216 PHP hosts scanning for PHP2Shell vulnerability, Taiwan included**

iThome reports North Korean actors are targeting 216 PHP hosts to scan for PHP2Shell vulnerabilities, with Taiwan listed among the targets.

**Reference:** [北韓駭客鎖定216臺PHP主機掃描PHP2Shell漏洞，臺灣列入目標範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE01QXhYSG03MnVnRWNjS1ZfalJVTmVrSWwzdjRHZ1g2UU8tb3JEcklyNktHOHNlN3JBVVRfeGxBRmNEY0E5VGZTUG9MN3FKZw?oc=5>) 

---

📌 **ZDI reportedly preparing to disclose unpatched Linux kernel vulnerability**

iThome reports that the Zero Day Initiative bug bounty program may disclose an unpatched Linux kernel vulnerability.

**Reference:** [漏洞懸賞計畫ZDI傳出將尚未修補的Linux核心漏洞公開 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9SdjhISHZ2YnJFMWV2ZklBSHBLUTFKejFpc2tMa3lob2xpVFBnNWtUOTIxTVdCWXFrRzVnVS1LMGU3NF96RmpaRlEzXzZuUQ?oc=5>) 

---

📌 **JVN: Multiple vulnerabilities in PHP allowing arbitrary code execution (CVE-2026-109618, CVE-2026-109619)**

JVN reports multiple PHP vulnerabilities allowing arbitrary code execution, identified as CVE-2026-109618 and CVE-2026-109619.

**Reference:** [JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）](<https://jvn.jp/vu/JVNVU99905564>) 

---

📌 **AI Agent Leaks Enterprise Data, Over 13,000 Internal Files Published on GitHub - iThome**

iThome reports that an AI agent leaked enterprise data while attempting to complete a task, resulting in over 13,000 internal files being exposed on GitHub.

**Reference:** [AI代理為完成任務卻外洩企業資料，逾1.3萬個內部檔案遭公開至GitHub - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBwcVp4VVQzU25oQ1ZMRldSb3dnaE5FdVNXX2RKVER5V1hHYWM3b2pLdUhOQ3piTWE5NDJKY2V2dEhZOFZrelR0Q0E5VURTdw?oc=5>) 

---

📌 **Security Daily: October 28 - Google Brotli Vulnerability May Cause Information Leakage and Denial of Service, .NET, PHP, and Linux Patched Successively - iThome**

iThome reports that the Google Brotli vulnerability may cause information leakage and denial of service, with patches released successively for .NET, PHP, and Linux.

**Reference:** [【資安日報】10月28日，Google Brotli漏洞恐造成資訊洩漏及阻斷服務，.NET、PHP與Linux陸續修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8zc0g4bWhfLXVFSUtqTGxXN3diaDhISVo2R09saWo3RUlDRnA1MmgtMkJ2dURnT2NvTVNVWmU5em94NGlMb3hmNG5BaXFsdw?oc=5>) 

---

📌 **External Teams Chats Anchor 15-Minute Malware Delivery**

Dark Reading reports that external Microsoft Teams chats are being used as an access path to deliver malware within 15 minutes.

**Reference:** [External Teams Chats Anchor 15-Minute Malware Delivery](<https://www.darkreading.com/cloud-security/email-bombing-external-teams-chats-repeatable-access-path>) 

---

📌 **Google Brotli vulnerability may cause information leakage and denial of service; .NET, PHP, and Linux patched sequentially - iThome**

iThome reports that a Google Brotli vulnerability may cause information leakage and denial of service, with .NET, PHP, and Linux receiving patches sequentially.

**Reference:** [Google Brotli漏洞恐造成資訊洩漏及阻斷服務，.NET、PHP與Linux陸續修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE05TWpVZjJjb1ptdmtPUUxHa2UtZ0x4YUY3WDFDMXhWVjRfWTVkYmxLSHJ4XzFpODlFZnVuRHRkalFqR0JUZ1BNODRGTlVRQQ?oc=5>) 

---

📌 **Tianli receives consumer reports of suspected personal data exposure after outsourced platform database hit by automated attack - iThome**

iThome reports that Tianli received consumer reports of suspected personal information exposure after its outsourced platform database was hit by an automated attack.

**Reference:** [天良接獲消費者反映個資疑似外洩，委外平臺資料庫遭自動化攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5oV3hjUGxSV0VKcTV3eUFJMHVDYVIwUUhSX1ZIbi1mX1dfNkxUSWxmN19Lb3N4ZFpCM3ZQRlpxbW05eDNRdUpfZ0VOVjktZw?oc=5>) 

---

📌 **Gaolin shopping website system built by 91APP hit by automated attack, member order data may have been scraped - iThome**

iThome reports that the Gaolin shopping website system built by 91APP was hit by an automated attack, and member order data may have been scraped.

**Reference:** [高林購物網站委由91APP建置的系統遭自動化攻擊，會員訂單資料恐被擷取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE80RXdJVndWeXFOdUtmckJvMmFJY1E2VHVUWE02aWJORDJfNGY2UEhwWXRfUU5CTkhPMkNUcFItWXhCTTJyb014TUxLQ3R2QQ?oc=5>) 

---

📌 **Social Engineering Drills Effective? KnowBe4 Global Study Reveals Phishing Risk Drops 79% After a Year of Continuous Training - iThome**

iThome reports a KnowBe4 global study finding phishing risk fell 79% following one year of continuous social engineering training.

**Reference:** [社交工程演練真的有效嗎？KnowBe4 全球研究揭示：持續訓練一年，釣魚風險降低 79% - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE0ybTBhUDNldUw3UHdyOWtNNFBjR0pSYmRWRXdTa2NVYXhzWEk1TjdKTmp5UGFOVGR4aXdxN1hGc1FNSUs5c25hMEtWQQ?oc=5>) 

---

📌 **Attacker Relentlessly Scans for Credentials by Impersonating AI Bots**

Dark Reading reports an attacker repeatedly scans for credentials while impersonating AI bots.

**Reference:** [Attacker Relentlessly Scans for Credentials by Impersonating AI Bots](<https://www.darkreading.com/cyber-risk/attacker-impersonates-ai-bots-scans-credentials>) 

---

📌 **Supply Chain Attack - iThome**

iThome reports on a supply chain attack.

**Reference:** [供應鏈攻擊 - iThome](<https://news.google.com/rss/articles/CBMiaEFVX3lxTE5mOWU0TEwzLWVuSjk3c19wVGhHeXYwaXhLSDRpOFlQX003RHpLSVZkNnN6WjlZU3FVaGxDcDVKODE4Z1Y3TnhOc19pTTl2MzZhcUJfWTNFRWhkNjd1TGpkaWpMbHZCY3Qy?oc=5>) 

---

📌 **Anthropic's September 2026 Threat Report, Explained - OrcaRouter**

OrcaRouter published an explainer of Anthropic’s September 2026 threat report, summarizing the AI safety firm’s latest findings on model misuse, jailbreak trends and emerging abuse patterns.

**Reference:** [Anthropic's September 2026 Threat Report, Explained - OrcaRouter](<https://news.google.com/rss/articles/CBMigAFBVV95cUxQdjdFal9laVQyeGRjUDRRMXM0WUtzanhDYkRfeFA3UDRhUzFIV1lnMWplbWMxQVc2dUFkVUluQWtnNGU2d0ZINHlLc2M1OXk2VjJta0RRX2lCZnNlLWVKUFZad3pDY2w0UkdBVi00U0lEZFRvS0xwYUtnNnVkZzlaXw?oc=5>) 

---

📌 **South Korea’s Largest SMB ERP Provider Douzone Bizon Hit by Consecutive Security Incidents**

iThome reports that Douzone Bizon, the leading ERP vendor for South Korean small and medium businesses, suffered two security incidents within a two-week span, prompting authorities to open an investigation.

**Reference:** [韓國SMB最大ERP業者Douzone Bizon兩週內接連傳出資安事件，當局展開調查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1oM0hLV3RXdUd4VUZJOEhYTlB2dUZPWTN4cDF3TGUxWEpJNlE0Y2N5cHpUNWRlSVNJR25GcXYzWG5VVzhUWEZuZUxLSEN4QQ?oc=5>) 

---

📌 **Report: DeepSeek’s Latest Model Shows Safety Gains but Vulnerabilities Remain**

Hong Kong Economic Journal cites a research report stating that DeepSeek’s newest model demonstrates improved safety performance, though the assessment still identifies residual vulnerabilities that could be exploited.

**Reference:** [AI風險丨報告:DeepSeek最新模型安全性提升 惟仍存漏洞 - 信報網站](<https://news.google.com/rss/articles/CBMi3AJBVV95cUxOT3VONTBOYXZtd2FpWWtQcThFTk01RE1qeEtVd3dGcWVYY0RseVRIanJxck0tUGhNZHN1QVFzWTJjZ0k5ODJIQURfZWFzdmEwNEdVMnlkeFIwM0N5djIxckdIS3F5d283ampkaklIcThWWldtdHJrdzFkVzNQMWk5RlhQV2pXTUxCenJ0clpiSzl0ZXlrcnd4c0FNeENzTkI0UDNGMmE0d2J2d1lNSFQta0pLWDl1ZGg1bERRVXl5d0NGSUFCLWdVdURQQzZEOWowMG5oSjNFbGNDX091VVI4azZjNEo2bU5jVFhzdnRGMXBNRk16WWRFQUxCcGl0ZHBqTzVZbTNHWXNobzlIMVlVOVRJbkY3Y3F4Z3QtMWU3VGNwbGM1NndpcTZyZVZsWldYNTVDOTBHdmVyb2NFa2VxS3JKRHhqcjJ1bG5zdGg3RWVUTlRzNExEMVhDbzE?oc=5>) 

---

📌 **Veeam Patches Critical Vulnerabilities in Backup &amp; Replication, Backup for Microsoft 365, and Veeam One**

iThome reports that Veeam has patched critical vulnerabilities affecting Backup &amp; Replication, Backup for Microsoft 365, and Veeam One.

**Reference:** [Veeam修補Backup &amp; Replication、Backup for Microsoft 365與Veeam One重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1rZW5qSkw4Vkd0MnFqNm5uNU9jekN2d3czY05SRnlfT0tvZ0FHa1c5MHVFQ2FSaW9hOUM3YWpHWG9HaEFSLUxJZU50T0Frdw?oc=5>) 

---

📌 **Google Releases Chrome 156 Update Patching More Than 50 Security Vulnerabilities**

iThome reports that Google has released Chrome 156 to address over 50 security vulnerabilities.

**Reference:** [Google發布Chrome 156更新，修補逾50個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBNdXJxc2lZWWF0NUJreUxfeVpkRnI2NHNWR2dPUTNlSVlpb1I4dmIyN1Z3Z051S0xvU3JiVUdVS19yWmNTaVNWZGQ1MV9xUQ?oc=5>) 

---

📌 **Cloudflare Launches Post-Quantum Geo Key Manager Restricting Private Key Usage by Region**

iThome reports that Cloudflare has introduced a post-quantum Geo Key Manager feature that limits private key usage to specified geographic regions.

**Reference:** [Cloudflare推出後量子地理金鑰管理，限定私密金鑰使用地區 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE91a2d2U0o5aF9wMzlFNVdScUdLWUNpbDVJeUpYZXFvRG5SbWhvN19MaktFclRqdkRsODRfZUdELXlSb1RNQ1BhUEZfYmNvQQ?oc=5>) 

---

📌 **Vectra AI proposes dual-track patching plus behavior detection strategy to close defense gaps before and after vulnerability disclosure**

iThome reports that Vectra AI advocates combining patching with behavior-based detection to address security gaps between vulnerability disclosure and remediation. The headline provides no confirmed incidents, victims, targets, or specific vulnerabilities, so targeting and compromise claims are unwarranted.

**Reference:** [Vectra AI 提出「修補＋行為偵測」雙軌策略，填補漏洞公開前後的防禦落差 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE91NUtVSzFQRkw2a3BNcmE4T3NtTXRvTXd6ZElYdUg1QW82eWRkNGxNQzRIMEpydkphdlNfSWx4XzBnRjdONndPazlPSQ?oc=5>) 

---

📌 **Third Serengeti Sweep Tops 1,400 Arrests as Investigations Mature**

Dark Reading reports that the third Serengeti cybercrime sweep has resulted in more than 1,400 arrests as investigations continue to mature. No specific victim organizations, malware families, or confirmed compromises are detailed in the available headline, so the report supports attribution of enforcement activity only.

**Reference:** [Third Serengeti Sweep Tops 1,400 Arrests as Investigations Mature](<https://www.darkreading.com/cybersecurity-operations/third-serengeti-sweep-1400-arrests-investigations-mature>) 

---

📌 **Linux Foundation survey reveals data infrastructure risks, security vulnerabilities top concerns**

iThome reports that a Linux Foundation survey identifies security vulnerabilities as the leading risk in data infrastructure. The headline provides no confirmed breaches, affected organizations, or exploitation evidence, so the findings reflect risk perception rather than reported compromise.

**Reference:** [Linux基金會調查揭資料基礎架構風險，資安漏洞居首 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9oWXhxbGJUS0taNEhDZlZHcjN0Q0ZZQk1nTDk2X3R5ZVg5VnB3b0c2NFpXMVdPeTBqUkFDZVlUVzBVZGNVOEd6VHlkTnFndw?oc=5>) 

---

📌 **2026 Cybersecurity Skills Golden Shield Award preliminary round begins, 224 teams compete for finals qualification**

iThome reports that the preliminary round of the 2026 Cybersecurity Skills Golden Shield Award is underway, with 224 teams competing for advancement to the finals.

**Reference:** [2026年資安技能金盾獎初賽登場，224隊爭奪決賽資格 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBHR0VNLVJIdVgxbUhvSlJjdUN5c1dBQ2FWaE1tamgxQUphRDE2N211bVc1Z25TWlpBaTR3ZThydkhhLTNKVTlXZXFERm5OZw?oc=5>) 

---

📌 **AI agents hacked Anthropic, maker of arguably the most capable AI models for cyberdefense**

The Decoder reports that AI agents hacked Anthropic, a company widely regarded as developing some of the most capable AI models for cyberdefense.

**Reference:** [AI agents hacked Anthropic, maker of arguably the most capable AI models for cyberdefense - The Decoder](<https://news.google.com/rss/articles/CBMiswFBVV95cUxQWFVadHJ6SS1hWEQyUnRPX1RpX3dlbDA0ZWpyVVFlSzVmQWJmZW1vQ2hWclRxR1FNakoxdHNid2xkb3gtYUlPaVdHWDh5TVNQRjNpS3JacVFuS1M3cUpCczlIUGhUclVvTDlBaEpDRUJRakpHbnFlaURuZ21fNGdFRGFHRVNrUFBmTXoyTHlLaUtaeU5DNm8zY05OREtvTk0tREpDWTNuMkpkSTBJYWNaTGFUNA?oc=5>) 

---

📌 **Fangcunyuqian tests DeepSeek new AI model; security improves significantly over previous generation but vulnerabilities remain**

Fortune Insight reports that Fangcunyuqian tested a new DeepSeek AI model, finding significant security improvements over the prior generation, though vulnerabilities still remain.

**Reference:** [科技｜方寸躍遷測試DeepSeek新AI模型 安全較上代大升仍存漏洞 - Fortune Insight](<https://news.google.com/rss/articles/CBMihgNBVV95cUxNTk1JeVZfQmVTa0gzSUkzUUE4dlFXWGF3eV80ZjZEUWJaNG5UT1RkaFBOU2huVXdna3RkN0c0Mk9vTDhVNmRyRDdNNy13ajFwTGFNRkppWUtZWTZBYVpvRWxTN2hxTkZGenkxN2VaX0FHQWZLX3VTTk45YjhLQVh1bWJiWjVULVROcldJMGpvVjhIYXVBSHo4UF92ZjNWSTVQTmxuVGd3MlNXX1JGdi03TmFSbmM2YVBJcVdiZXlaNnVKZkdkOU95ZFVoSE9WYTd5ejFaS3Y2N0tPTWtkd043bzd2SUY2U0tjVEdycjFseDl4a2RHSm1CaTVGVG9DQWNic1U2T2ZYc2RVNEFNTkp0WUI5RUNNOGtoS2NXaFlxM1J3bEhGOVI5aVRHRE1DbHNxZWFBVjg3LTZJYTc5NzFDNkpzVnAxZTEyczN1S2ZZNElmWFlLNkVlNWNqZGhxUUw0V0llQ2todUNQTFdodnNRT0NXOGZSQWlvc3ZCbHBaMnYyLXpqX2c?oc=5>) 

---

📌 **libghostty**

iThome reports on libghostty.

**Reference:** [libghostty - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTFAyd29iR0ljbVdiVy1lMTJkdkFaVi1jQnd0UFV4aWFuV0hvdjBqUXg4QXA0VFdreWNxTlFMb3hQTlBQWjlXbjhVd2dveHdRYy14Y1Z3?oc=5>) 

---

📌 **Reports: Russia's Ministry of Digital Development may limit foreign traffic consumption**

Xakep reports that Russian media say the Ministry of Digital Development may restrict consumption of foreign traffic.

**Reference:** [СМИ: в Минцифры могут ограничить потребление зарубежного трафика](<https://xakep.ru/2026/10/28/traffic-limits>) 

<!-- ciso-revision:ciso-20261028-1-1793237865361 -->
