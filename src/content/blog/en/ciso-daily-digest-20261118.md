---
title: "CISO Daily Digest: Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers (20261118)"
description: "Critical vulnerabilities in enterprise management tools, AI development frameworks, and widely used Java environments have been reported, including active exploitation of a Puppet RCE flaw and a supply chain compromise of a Microsoft-related Python package."
pubDate: 2026-11-18
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers

CISA has added a critical deserialization vulnerability in Perforce Puppet to its Known Exploited Vulnerabilities catalog due to reports of active exploitation. Tracked as CVE-2026-115731 with a CVSS score of 9.4, the flaw exists in the platform's report-processing code. An attacker possessing a CA-signed agent certificate can execute arbitrary code on the Puppet Server by submitting a crafted rich-data type via a PUT request.

The vulnerability's risk is amplified by the potential for attackers to compromise the Certificate Authority (CA) if it lacks strong verification. Such a compromise could allow unauthenticated network attackers to obtain valid certificates and exploit the server. Security researchers noted that gaining remote code execution on a Puppet server allows attackers to seize CA signing keys, facilitating the impersonation of other hosts across the infrastructure.

Impacted versions include Puppet Enterprise 2026.0.0, 2025.0.0, and 2023.8.0, as well as Puppet Core 9.0.0 and 8.x. The vulnerability also extends to OpenVox, an open-source implementation of Puppet. Because Puppet often maintains high-level access to large fleets of corporate systems, successful exploitation could lead to ransomware deployment, mass data exfiltration, or significant lateral movement within a network.

### 📌CISO Impact

- **Infrastructure Management Risk —** Compromise of central orchestration tools like Puppet can grant attackers full control over an entire server fleet, necessitating immediate patching of configuration management platforms.
- **Supply Chain Integrity —** The compromise of popular PyPI packages highlights the need for strict dependency pinning and monitoring of CI/CD pipelines for unauthorized credential exfiltration.
- **Runtime Environment Security —** Vulnerabilities in core runtimes like OpenJDK require careful assessment of hardware-specific optimizations and prompt updates to Java distributions to prevent RCE.

**Reference:** [Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>)

---

## Active Threats This Week

📌 **Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials**

Malicious versions 1.26.1 and 1.26.2 of the Microsoft agent-framework PyPI package were identified containing a credential stealer. The compromised versions used Python startup hooks (via .pth files) to automatically execute malicious code whenever a Python interpreter starts, regardless of whether the package is explicitly imported. The malware targeted environment variables, Azure CLI credentials, GitHub Actions OIDC tokens, and Azure managed-identity tokens, exfiltrating the collected data to a remote webhook.

**Reference:** [Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials](<https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html>) 

---

📌 **OpenJDK Vulnerability (CVE-2026-114938) Leading to Remote Code Execution**

Security researchers at Calif disclosed a memory corruption vulnerability in OpenJDK, dubbed 'Java4Shell' (CVE-2026-114938), affecting Base64 decoding optimization. When running on x86-64 processors using specific AVX-512 VBMI instructions, the flaw can allow remote attackers to steal sensitive memory information or execute arbitrary code. While no active exploitation has been confirmed by JPCERT/CC, researchers demonstrated unauthenticated RCE in applications such as Keycloak, Jenkins, and Atlassian Jira.

**Reference:** [お知らせ：CyberNewsFlash「OpenJDKにおけるリモートコード実行につながる脆弱性（CVE-2026-114938）について」](<https://www.jpcert.or.jp/newsflash/2026111801.html>) 

---

📌 **Russian COLD RELIC Hackers Use Stolen Google Workspace Data to Breach Second U.S. Organization**

Google's Mandiant and GTIG linked Russia-linked espionage group Cold Relic to a 2026 compromise at a U.S. organization using data stolen from another U.S. entity in late 2025. Cold Relic registered rogue MFA devices, passkeys, and MFA backup codes for long-term persistence and exported cloud storage contents via Google Takeout. The attackers then used compromised credentials from the first organization to phish a Microsoft Entra ID user at a second U.S. organization that federated SSO for Google Workspace, resulting in bulk cloud drive file downloads.

**Reference:** [Russian COLD RELIC Hackers Use Stolen Google Workspace Data to Breach Second U.S. Organization](<https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html>) 

---

📌 **New Attack Bypasses TPM Lockout to Crack Windows Hello and BitLocker PINs in Days, Not Years**

Technische Universität Berlin researchers found that opening certain AMD and Intel PCs allows TPM lockout reset, exposing short PINs to guessing. On an AMD laptop, they found a four-digit Windows Hello PIN within 236 tries in 57 minutes, a worst-case of 40 hours versus 69 days with lockout working. On an Intel laptop, they found a six-digit BitLocker PIN in 236 tries in under seven minutes, reducing worst-case cracking time from 19 years to 20 days. The attack targets firmware TPM state stored on the mainboard flash, using flash interposer boards or voltage glitches against Winbond RPMC chips to reset wrong-guess counters. AMD confirmed flaw CVE-2026-43613 (CVSS 5.1) and plans firmware fixes between November 2026 and February 2027. Microsoft committed to raising recommended minimum Hello PIN length to six digits and made six digits the default in a Windows 11 test build. Researchers advise adding at least two digits to Hello and BitLocker PINs and installing firmware updates when available.

**Reference:** [New Attack Bypasses TPM Lockout to Crack Windows Hello and BitLocker PINs in Days, Not Years](<https://thehackernews.com/2026/11/flash-chip-attack-bypasses-tpm-lockout.html>) 

---

📌 **New EggStreme Malware Variant Goes Silent to Evade Security Tools in Government Attacks**

Bitdefender reported that suspected Chinese APT operators behind EggStreme rebuilt their malware to evade detections from its September 2025 exposure while continuing to target Philippine government organizations. The retooled toolkit uses a different network protocol, an enhanced command set, and a passive variant that never beacons out, moving infrastructure away from a single certificate authority. Components including EggStremeFuel, EggStremeLoader, EggStremeReflectiveLoader, and EggStremeAgent support profiling, persistence, memory execution, reconnaissance, keylogging, reverse shells, and file transfer. Some newer builds run in passive mode by opening a listening port, and lateral movement now uses unmanaged systems reached over SMB with remotely executed VBScript and DLL sideloading. Limited to medium-confidence evidence also indicates targeting of Taiwan. Separately, Dream Research Labs reported Mustang Panda targeting Philippine officials with ASEAN Summit lures delivering PlugX via DLL sideloading, and Palo Alto Networks Unit 42 detailed Earth Alux attacks against Southeast Asian governments since July 2025 using PerfectPioneer and KUKURAT RATs over HTTP/3, web shells on Exchange servers, and lateral tools such as PsExec, WMI, and WinRM.

**Reference:** [New EggStreme Malware Variant Goes Silent to Evade Security Tools in Government Attacks](<https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html>) 

---

📌 **JPCERT/CC Publishes Incident Investigation Report Checklist**

JPCERT/CC released an Incident Investigation Report Checklist with separate checklists for organizations commissioning investigations and for investigators, plus a sample report. The content supports agreement on investigation scope before work begins and review of findings, evidence, conclusions, and remediation recommendations upon report delivery. JPCERT/CC says the checklist applies to assumed network compromise cases such as malware infection, should be adjusted by case and contract, and does not by itself guarantee technical correctness, recommending specialist consultation when review is difficult.

**Reference:** [お知らせ：JPCERT/CC Eyes「インシデント調査報告書受領時のチェックリスト」](<https://blogs.jpcert.or.jp/ja/2026/11/ir_report_checklist.html>) 

---

📌 **Taiwan NCCERT Discloses Identity-Verification Flaw in Government Platform Forgot-Account Function, 34 Abnormal Accounts Added**

Taiwan's cybersecurity agency disclosed that a government service platform's forgot-account function had an identity-verification flaw, allowing an attacker to obtain account-maintenance permission without completing certificate verification and add 34 abnormal accounts. Existing access controls blocked attempts to access other platform functions, with no impact on normal operations and no evidence of data alteration or leakage. The agency said the vulnerability has been patched and recommended fail-secure authentication design, backend confirmation of authentication completion, consistent exception handling, inclusion of abnormal scenarios in security testing, and API rate limiting.

**Reference:** [資安署揭露某機關平臺忘記帳號功能存在身分驗證漏洞，而被新增34組異常帳號 - iThome](<https://www.ithome.com.tw/news/180607>) 

---

📌 **Six unpatched vulnerabilities in Danfoss refrigeration controllers allow unauthenticated remote control**

iThome reports that Dutch security firm Midnight Blue found six unpatched stack-based buffer overflow vulnerabilities in Danfoss AK-SM800A refrigeration controller firmware versions 5.3.2 and earlier, including 5.4.0. Five flaws are in unauthenticated web request handlers and one is in a gateway program handling Strict mode verification. Exploitation could let attackers remotely execute code, modify refrigeration settings, trigger defrost cycles, plant persistent code, or disable controllers. No CVEs have been assigned yet, and Midnight Blue is coordinating disclosure with Danfoss without publishing technical details. iThome advises organizations to inventory affected controllers, remove public network connections, and route necessary remote maintenance through VPN or restricted private networks.

**Reference:** [Danfoss冷凍控制器傳出6個未修補漏洞，攻擊者可未經身分驗證遠端取得控制權 - iThome](<https://www.ithome.com.tw/news/180602>) 

---

📌 **Osaka confirms Arara email service breach exposed over 1.07 million addresses**

iThome reports that Osaka City confirmed the Arara email sending service breach exposed 1,078,713 email addresses that had received messages through the municipal administrative online system outsourced to TKC. The city urged residents to watch for phishing emails sent under false pretenses. Arara previously disclosed approximately 81.33 million addresses exposed or potentially exposed, affecting up to about 380 corporate customers including Shogakukan, BIC Camera, and MOS Burger, and said attackers used the compromised service to send up to about 7.13 million suspicious emails impersonating credit card companies. Japan's government is reviewing security incident notification mechanisms and IT supply chain security, with the Prime Minister directing shorter reporting times for critical infrastructure providers and risk assessments of government IT systems.

**Reference:** [Arara郵件服務遭駭，日本大阪市確認逾107萬筆電子郵件地址外洩 - iThome](<https://www.ithome.com.tw/news/180555>) 

---

📌 **NuGet.org adds package staging approval to reduce abuse of stolen automation credentials**

iThome reports that Microsoft has added a package staging release feature to NuGet.org, allowing development teams to upload packages through automated pipelines, complete security checks, and then have authorized maintainers approve public release. Organizations can restrict automation tool publishing permissions, reducing the risk that stolen build credentials could be used to publish malicious packages directly. Packages in staging undergo malware scanning and signature checks but do not appear on public pages or in search results and cannot be installed until approval. API keys can be limited to uploading staged packages only, and trusted publishing can apply the same restriction. Formal publication requires an authorized maintainer with two-factor authentication to sign in to NuGet.org. Staging groups allow centralized review of multiple packages before a single approval, though individual package publishing is processed separately and simultaneous availability is not guaranteed. Staging also supports pre-disclosure vulnerability patch uploads synchronized with vulnerability release timing. Staged packages have no direct download source, even for owners, and expire if not published. The feature is now optional for all NuGet.org publishers; existing workflows remain unaffected.

**Reference:** [NuGet.org新增套件上架核准機制，降低自動化憑證遭濫用風險 - iThome](<https://www.ithome.com.tw/news/180626>) 

---

📌 **jQuery 4.1.0 and 3.8.0 fix ReDoS flaws; 3.x series ends feature development**

iThome reports that the jQuery team released jQuery 4.1.0 and 3.8.0, both fixing a regular expression denial of service vulnerability in CSS selector parsing that could cause browsers to hang when processing many consecutive hexadecimal escape characters followed by an invalid character. The updated character matching rules resolve the issue. Version 3.8.0 is the final planned feature release for the 3.x series, which will receive only critical security and bug fixes going forward, while new feature development concentrates on 4.x. Release 4.1.0 improves element lookup by standardizing on querySelectorAll, reduces duplicate element removal complexity from O(N squared) to O(N), adds responseURL to jqXHR objects, improves custom element form data handling, and adjusts custom AJAX transport callbacks. Version 3.8.0 marks legacy APIs removed from 4.x as deprecated to assist jQuery Migrate compatibility checks. Both versions are available via the official CDN and NPM, with a 4.x upgrade guide provided.

**Reference:** [jQuery雙版本更新修正ReDoS問題，3.x停止新增功能 - iThome](<https://www.ithome.com.tw/news/180617>) 

---

📌 **Google extends Gemini conversation retention from 72 hours to two months**

iThome reports that Google notified users of a Gemini policy change extending the retention of Gemini conversation records from 72 hours to 60 days, while separating conversation history from AI model training permission. Users can opt out of generative AI model training while retaining their Gemini conversation history, with changes rolling out to the app and web over the coming weeks through the Gemini Activity settings page. Media outlets including TechCrunch and The Register noted that even with history turned off, future conversations will now be retained for about two months to respond to users, process feedback, and protect Google, users, and the public, potentially involving human reviewers. Users who already had history disabled before the change will keep the 72-hour retention period, but disabling the setting after the change takes effect will prevent free-tier Gemini conversations from being retained at all. Taiwan had not yet received the update as of publication, with its Gemini activity page still showing 72-hour retention.

**Reference:** [Gemini對話保留期將由72小時延長為2個月 - iThome](<https://www.ithome.com.tw/news/180592>) 

---

📌 **Chrome 158 Released, Patching 204 Security Vulnerabilities**

Google has released the Chrome 158 stable update, addressing 204 security vulnerabilities. The patch includes 6 critical and 62 high-risk vulnerabilities, alongside moderate and low-risk issues. The most frequent vulnerability type addressed is use-after-free, accounting for 51 instances. Other addressed issues include improper authorization, lack of authorization, uninitialized resources, and information disclosure. Users on Windows, macOS, and Linux should update to version 158.0.8127.36 or 158.0.8127.37, while Android users should update to 158.0.8127.42 to mitigate these risks.

**Reference:** [Chrome 158正式推出，修補204個資安漏洞 - iThome](<https://www.ithome.com.tw/news/180609>) 

---

📌 **Mozilla Releases Firefox 160.0.1 to Urgently Patch Two High-Risk Vulnerabilities**

Mozilla has issued an emergency update, Firefox 160.0.1, to address two high-risk vulnerabilities. CVE-2026-130020 affects the Graphics: CanvasWebGL component in the Android version and could lead to privilege escalation due to improper boundary condition handling. CVE-2026-130021 is a use-after-free (UAF) vulnerability located in audio and video playback components. Mozilla has not confirmed if these vulnerabilities are being actively exploited in the wild.

**Reference:** [Mozilla發布Firefox 160.0.1，緊急修補兩個高風險漏洞 - iThome](<https://www.ithome.com.tw/news/180591>) 

---

📌 **Oracle Issues November Routine Updates Patching 640 Security Vulnerabilities**

Oracle has released its November Critical Patch Update (CPU), addressing 640 security vulnerabilities across 21 product families. The update includes 57 critical and 245 high-risk vulnerabilities. Significant numbers of network-exploitable vulnerabilities that do not require authentication were identified in Oracle Hyperion (107), Oracle Fusion Middleware (53), Oracle Supply Chain (36), and Oracle Communications (21).

**Reference:** [Oracle發布11月例行更新，修補640個資安漏洞 - iThome](<https://www.ithome.com.tw/news/180603>) 

---

📌 **Tatung E-commerce Site Hit by Automated Attack, Suspected Data Leak**

Tatung's subsidiary, Tatung Comprehensive Information &amp; Communication, reported that its 'e-同購' shopping website was targeted by an automated attack, resulting in a suspected leak of personal data. The company activated its incident response mechanism and shut down the affected website systems. While the investigation into the cause and the extent of the data exposure is ongoing, the company stated that there is currently no significant impact on its financial or business operations.

**Reference:** [大同購物網站e同購遭自動化攻擊入侵，疑似個資外洩 - iThome](<https://www.ithome.com.tw/news/180615>) 

---

📌 **Security Incident at Outsourced E-commerce Provider for Yung Shin Pharma Results in Suspected Data Leak**

Yung Shin Pharma reported that its subsidiary's online shopping website experienced a suspected leak of member personal data. The incident is linked to a third-party e-commerce platform service provider rather than Yung Shin Pharma's internal systems. Preliminary investigations indicate the impact is limited to certain member data on the online shopping site; the company's core operating, transaction, and financial systems remain uncompromised.

**Reference:** [永信藥品委外電商服務商發生資安事件，部分會員個資疑似外洩 - iThome](<https://www.ithome.com.tw/news/180619>) 

---

📌 **UK NCSC Urges Boards to Demand Active Threat Hunting to Close Detection Gaps Amid AI-Accelerated Attacks**

The UK National Cyber Security Centre (NCSC) has called on corporate boards to require security teams to demonstrate active threat hunting capabilities, warning that existing monitoring and alerting may not catch attackers using AI to operate at greater speed and scale. NCSC community business lead Patrick B emphasized that while indicator-of-compromise detection remains useful, such artifacts change quickly, whereas attacker tactics, techniques and procedures (TTPs) are more stable and can be hunted proactively. The guidance stresses that boards need not understand technical details but should demand evidence of which attack techniques have been tested for detection, what gaps were found, who is accountable for closing them, and how progress is measured. Sufficient visibility and logging are prerequisites; without them, even known attacker techniques may go undetected. NCSC notes that organizations do not necessarily need a dedicated hunt team or new products, but must have the ability to investigate attacker behavior, identify detection gaps and act on findings.

**Reference:** [面對AI加速攻擊，英國NCSC呼籲企業董事會應關切以主動威脅獵捕找出偵測缺口 - iThome](<https://www.ithome.com.tw/news/180613>) 

---

📌 **AI-Accelerated Research Finds 66 New Vulnerabilities in 10 Embedded TCP/IP Stacks in 90 Hours**

Forescout's Vedere Labs used an Anthropic Claude model with custom analysis tools to examine 10 embedded TCP/IP protocol stacks widely deployed in industrial control, medical, networking and IoT devices, uncovering 99 vulnerabilities in roughly 90 hours, of which 66 were previously unknown. Fifty-two percent of the new flaws are rated critical or high severity, with some capable of causing device malfunction or denial of service; 54 may still affect the latest software versions. The team reported 20 open-source and 34 proprietary vulnerabilities; as of publication, 19 open-source and 5 proprietary issues had been patched. AI-assisted static analysis took about 10 hours, with the remaining 80 hours spent on dynamic verification by researchers. Estimated model costs ranged from $1,200 to $2,300, excluding tool development and environment setup. Because these stacks are shared components across vendors, flaws can propagate through the software supply chain; operators are advised to inventory software components, prioritize patching by exploitability, exposure and operational impact, and mitigate unpatchable devices through network restriction, segmentation and replacement planning.

**Reference:** [AI加速嵌入式設備漏洞挖掘，研究人員90小時找出66項TCP/IP協定堆疊新漏洞 - iThome](<https://www.ithome.com.tw/news/180564>) 

---

📌 **Optimizely Supply-Chain Compromise Injects Malicious JavaScript into 178 Organizations Including BBC, GitLab, IKEA and HSBC Taiwan**

Attackers exploited a vulnerability in Optimizely's Web Experimentation service to inject malicious JavaScript into customer projects, affecting 178 organizations such as BBC, IKEA, GitLab and HSBC Taiwan. Researchers identified 188 compromised Optimizely script segments; the payloads could rewrite cryptocurrency wallet addresses, harvest form data including credit card details and cookies, and even deliver an iOS exploit kit. Attacker-controlled wallets received approximately $7,040 in cryptocurrency. Optimizely stated it has patched the vulnerability, removed the malicious code and strengthened security on affected accounts.

**Reference:** [【資安日報】11月18日，Optimizely供應鏈攻擊波及BBC、GitLab、IKEA等178個組織網站，匯豐臺灣也名列其中 - iThome](<https://www.ithome.com.tw/news/180612>) 

---

## How Can OPSWAT Help

- [MetaDefender Software Supply Chain](<https://www.opswat.com/solutions/software-supply-chain-security>) — Validating software components and using SBOM and vulnerability analysis aligns with reducing risk from compromised package publishing credentials in public repositories.

**Reference:** [NuGet.org新增套件上架核准機制，降低自動化憑證遭濫用風險 - iThome](<https://www.ithome.com.tw/news/180626>)

<!-- ciso-revision:ciso-20261118-2-1795046846327 -->
