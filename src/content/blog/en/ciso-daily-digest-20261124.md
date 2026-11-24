---
title: "CISO Daily Digest: vCenter Zero-Day CVE-2026-123890 Exploited by Armory Castle (20261124)"
description: "Threat actors are exploiting a vCenter zero-day (CVE-2026-123890) for infrastructure compromise, while a Microsoft Entra Connect Health flaw exposes admin credentials, and CISA flags active exploitation in healthcare imaging and MSP email platforms. Immediate actions include restricting vCenter management access, auditing Entra Connect Health configurations, and applying vendor patches for the CISA-listed vulnerabilities."
pubDate: 2026-11-24
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## vCenter Zero-Day CVE-2026-123890 Exploited by Armory Castle

Attacker group Armory Castle has actively exploited a zero-day vulnerability in VMware vCenter Server tracked as CVE-2026-123890, according to iThome reporting. The flaw allows remote code execution without authentication and is being used in real-world intrusions.

Exploitation targets the vCenter management interface, enabling attackers to gain administrative control over virtualized infrastructure. Compromised vCenter instances can be leveraged to manipulate hypervisors, access guest virtual machines, and move laterally across data center environments.

VMware has not yet released a patch for CVE-2026-123890 at the time of this report. Organizations are advised to restrict network access to vCenter management ports, monitor for anomalous administrative activity, and apply mitigations recommended by the vendor when available.

### 📌CISO Impact

- **Restrict vCenter Management Plane Exposure —** Limit network access to vCenter management interfaces to trusted administrative segments only. Deploy jump hosts or privileged access workstations for all vCenter administration to reduce the attack surface while a patch for CVE-2026-123890 is pending.
- **Audit Entra Connect Health Data Flows —** Review what administrator contact and tenant metadata are synchronized through Entra Connect Health. Disable unnecessary data collection, enforce least-privilege service accounts, and monitor for anomalous queries against the health service that could indicate reconnaissance.
- **Prioritize Patching for CISA-Listed Healthcare and MSP Targets —** Accelerate patch deployment for the medical imaging software and N-able email platform vulnerabilities highlighted by CISA. Validate that exploitation detection rules cover the associated IOCs and TTPs, and assess third-party vendor risk for any managed service providers using N-able.

**Reference:** [vCenter 零時差漏洞 CVE-2026-123890 遭駭客組織 Armory Castle 實戰利用！ - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5TS1JwZGpOVXFQM0RPM1RRZllLQ0lzNFdZTkRTRWIxOVgyU1RyNEpKQmYwZi1wV2x3ekNTRDBTUnlYT3VkcjQydjJyWQ?oc=5>)

---

## Active Threats This Week

📌 **Microsoft Entra Connect Health Vulnerability Exposes Admin and Tenant Data**

A vulnerability in Microsoft Entra Connect Health has been exploited to leak enterprise administrator contact information and tenant data, per iThome. The exposure includes privileged identity details that could facilitate targeted phishing or further compromise of hybrid identity environments.

**Reference:** [微軟Entra Connect Health漏洞遭利用，企業管理員聯絡資訊與租用戶資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA1Rzc0b1lmOTVPUVBhRVFKN09ycDJWd1BxQXZMeVZmYjBFeW9pa2hfUXAxT1pzamRHcTJWMFFVY0UtaVNSWkxzZlROeGlBdw?oc=5>) 

---

📌 **CISA Warns of Active Exploitation in Medical Imaging Software and N-able Email Platform**

CISA has issued an alert that vulnerabilities in medical imaging software and the N-able mail protection platform are under active exploitation, according to iThome. Healthcare and managed service provider environments using these products should prioritize patching and review detection coverage for related exploit activity.

**Reference:** [CISA警告醫療影像軟體、N-able郵件防護平臺漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAzT01VTVJieFI5eUZxXzd0NHE2czBYMXNEYTFiQmpqdXRhb3VUN1U2RDlFNGlNRUFCb2RMUUxyN1ZxMHIwMndqWWd3b0x4UQ?oc=5>) 

---

📌 **OpenAI and Cisco Unveil AI-Assisted Linux Security Tool to Block Exploits Before Patching**

OpenAI and Cisco have launched Shirudo, an open-source Linux runtime that lets AI agents deploy dynamic eBPF controls to shield vulnerable code paths without restarting services. Built on Tetragon, the system uses cryptographically signed shields delivered as .bee packages via an OCI-compliant registry, with TPM verification before loading. In a test, a Codex-generated shield blocked a Java4Shell exploit attempt against a running Elasticsearch service. The goal is machine-speed defense against AI-driven vulnerability exploitation while defenders test and roll out permanent patches.

**Reference:** [OpenAI and Cisco Unveil AI-Assisted Linux Security Tool to Block Exploits Before Patching](<https://thehackernews.com/2026/11/openai-and-cisco-unveil-ai-assisted.html>) 

---

📌 **Rackspace Spot - iThome**

iThome reports on Rackspace Spot in a headline-only item; no further technical details or confirmed impact are provided.

**Reference:** [Rackspace Spot - iThome](<https://news.google.com/rss/articles/CBMiWEFVX3lxTE9ob1RrMEowd3BXak9ObEVFWmpjdThqeHZTNkFqSEluaUJTS0dMM19DUk9RM0JRZW10TEtvbVI4NlU0N0ZsLWk4V3JJcVo5MHlDZmtHQ0MzTXM?oc=5>) 

---

📌 **FBI Hacked Again, Hackers May Have Access to Police NCIC Database**

Xakep reports in a headline-only item that the FBI was hacked again and that hackers may have accessed the police NCIC database; no further technical details or confirmed compromise are provided.

**Reference:** [ФБР снова взломали. Хакеры могли получить доступ к полицейской базе NCIC](<https://xakep.ru/2026/11/24/fbi-ncic>) 

---

📌 **Korea Electric Power Corporation systems breached, data of about 1.52 million people exposed**

Korea Electric Power Corporation reported that two systems were breached and personal data belonging to approximately 1.52 million people was exposed, including bank account numbers and credit card numbers for some records.

**Reference:** [韓國電力公社兩套系統遭入侵，約152萬人個資外洩，部分涉及銀行帳號及信用卡卡號 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5vT2h1UVQwOHNDd0dLWklZb3F5dnBQckpqek1zS0k1Q2ozOGtMdERTemcwZmxVNUN3ZFBxc1VhaXR2MDRNOEM5UjRJS1psdw?oc=5>) 

---

📌 **VMware vCenter Hit by Another Critical 9.8-Rated Auth Bypass Flaw After Zero-Day Exploitation**

Broadcom has patched CVE-2026-123903, a critical authentication bypass in the VMware Directory Service rated 9.8 out of 10.0, along with other flaws in VMware ESX, vCenter, Workstation, Fusion, and Avi Load Balancer; a malicious actor with network access to vCenter could bypass authentication and gain unauthorized access, though Broadcom says this newly disclosed flaw is distinct from the previously exploited CVE-2026-123890 and is not mentioned as exploited in the wild.

**Reference:** [VMware vCenter Hit by Another Critical 9.8-Rated Auth Bypass Flaw After Zero-Day Exploitation](<https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html>) 

---

📌 **Industrial Serial Gateways Broadcast That They're Insecure**

Dark Reading reports that industrial serial gateways broadcast insecure configurations, exposing OT environments to potential network-based risks.

**Reference:** [Industrial Serial Gateways Broadcast That They're Insecure](<https://www.darkreading.com/ics-ot-security/industrial-serial-gateways-broadcast-insecure>) 

---

📌 **AI Agents Zip From Flaw Discovery to Root Access in 11 Minutes**

Amazon Threat Intelligence reported that a China-linked threat actor used Cairn AI agents to discover a zero-day in an exposed open-source medical imaging application and gain root access to a server in about 11 minutes. The approximately 48-hour campaign beginning Sept. 8 targeted universities across East Asia outside mainland China.

**Reference:** [AI Agents Zip From Flaw Discovery to Root Access in 11 Minutes](<https://www.darkreading.com/cyberattacks-data-breaches/ai-agents-flaw-discovery-root-access-11-minutes>) 

---

📌 **Fake Short-Drama Apps Lure Users to Enable Accessibility Permissions; TWCERT/CC Urges Android Users to Download Only from Official Stores**

TWCERT/CC warns Android users to avoid sideloading APKs impersonating popular short-drama apps or disguised as Google Play and Chrome updates, since malicious apps may request unrelated accessibility permissions to remotely view screens or control devices. Users should verify developer information, deny unrelated permission requests, and keep Google Play Protect enabled.

**Reference:** [冒名短劇APP誘導開啟無障礙權限，籲Android使用者僅從官方商店下載](<https://www.twcert.org.tw/tw/cp-104-11426-ea310-1.html>) 

---

📌 **South Korea Samsung Securities Customer Complaint System Hacked; Over 8,200 Customers' Personal Data Leaked**

iThome reports that Samsung Securities' customer complaint system was hacked, resulting in the leakage of personal information for more than 8,200 customers.

**Reference:** [韓國三星證券客戶申訴系統遭駭，逾8,200名客戶個資外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBRNEM3d3lFWnZfRmhPOWYyWjRNNkkwOXhBMzdvaG9zbkI4U2daaTdiRDBwR1ZrV3NCMzhJWnlHLXFGdHd0T2lrNU05MXRHUQ?oc=5>) 

---

📌 **Security researcher discloses Windows zero-day FastUnlock, potentially allowing attackers to run programs on locked-screen computers**

iThome reports that a security researcher has publicly disclosed a Windows zero-day vulnerability named FastUnlock, which may enable attackers to execute programs on computers with locked screens.

**Reference:** [資安研究員公布Windows零時差漏洞FastUnlock，攻擊者有機會以此在鎖定螢幕的電腦執行程式 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE56N3g1ODZ0aG9WREZXZnNmZVRVSzktbnBsWkU3NUpqNG5YS2xmUVBrbFBvS2R2NDlzQWVZZ1hWTmF5WEtjVnVFU0gxdEpRZw?oc=5>) 

---

📌 **Google releases Chrome stable and extended stable updates patching high-severity improper input validation vulnerability**

iThome reports that Google has released Chrome stable and extended stable updates addressing a high-severity improper input validation vulnerability.

**Reference:** [Google發布Chrome穩定版及延伸穩定版更新，修補重大等級的輸入驗證不當漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RLU0wNHhkODBHLVBaNDlWS2ZpaURRdmI1TVN2VnRuUGdOMkRGd0YyV1pZLXlueDhvQWpzZlU1WFU4bmJkRTgydHpJSVF5QQ?oc=5>) 

---

📌 **Microsoft fixes Azure API Management classic flaw as actor targets customer secrets**

Norway's National Security Authority disclosed a vulnerability in Azure API Management affecting multiple businesses, including energy companies Equinor and Skagerak Energi, with an unknown actor actively seeking access tokens, secrets, and named values. Microsoft identified the issue on 18 November 2026 and closed the access path on 19 November 2026; customers were exposed and an unauthorized party could have accessed secrets stored in Azure API Management Classic instances before identification. NSM stated it has seen no evidence of impact on Norwegian businesses and noted uncertainty about the extent of exploitation. The flaw affects the APIM classic tier, while v2 tier instances are not affected. Microsoft released guidance on 21 November 2026 to help customers identify and rotate exposed secrets, which may include Named Values, identity provider client secrets, OpenID Connect client secrets, subscription keys, and direct management API tokens. NSM warned the vulnerability affects several sectors in Norway and entities outside the country.

**Reference:** [Microsoft Fixes Azure API Management Classic Flaw as Actor Targets Customer Secrets](<https://thehackernews.com/2026/11/microsoft-fixes-azure-api-management.html>) 

---

📌 **Hackers Found a Way Around GitHub SHA Pinning. This Webinar Explains How to Close the Gap**

Attackers bypassed GitHub SHA pinning by planting malicious code in forks that shared code with upstream projects, including a compromised Trivy package in March 2026 and the actions-cool/issues-helper tool in May. Pinning guarantees immutability but not provenance, allowing pinned fork commits to appear legitimate. GitHub Actions workflow lockfiles, generally available October 28, 2026, tie runs to recorded commits but do not determine whether dependencies are safe and are unsupported on GitHub Enterprise Server. An upcoming webinar led by Chainguard's Erika Heidi covers the trust gap, impostor commits, and vetted action catalogs for CI/CD security teams.

**Reference:** [Hackers Found a Way Around GitHub SHA Pinning. This Webinar Explains How to Close the Gap](<https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html>) 

---

📌 **Hackers Injected a Stealer into the Official Microsoft Agent Framework PyPI Package**

Xakep reports that attackers injected a stealer into the official Microsoft Agent Framework package on PyPI, targeting cloud credentials.

**Reference:** [Хакеры внедрили стилер в официальный пакет Microsoft Agent Framework в PyPI](<https://xakep.ru/2026/11/24/microsoft-agent-framework>) 

---

📌 **Google Researcher Shows How a Single Bit Change in .NET Files Bypassed Windows Code Integrity**

Google Project Zero researcher James Forshaw demonstrated that clearing the IMAGE\_FILE\_EXECUTABLE\_IMAGE bit in a .NET file header allowed untrusted code to bypass Windows User Mode Code Integrity and Oracle VirtualBox process hardening. The same .NET Framework 4 fallback path enabled COM hijacking into Protected Process Light processes. Microsoft rated CVE-2026-108398 a local low-privilege security-feature bypass scored 8.8 and fixed it October 13; Oracle fixed VirtualBox CVE-2026-87268 in September. Microsoft lists the Windows flaw as publicly disclosed but not used in attacks, and the PPL route remains viable after the October patch.

**Reference:** [Google Researcher Shows How a Single Bit Change in .NET Files Bypassed Windows Code Integrity](<https://thehackernews.com/2026/11/google-researcher-shows-how-single-bit.html>) 

---

📌 **Hackers exploit critical ScreenConnect vulnerability to infiltrate MSP engineer computer, gaining remote access in 9 seconds**

iThome reports attackers abused a critical ScreenConnect vulnerability to compromise MSP engineer computers and achieve remote access within nine seconds.

**Reference:** [駭客濫用ScreenConnect重大漏洞入侵MSP工程師電腦，9秒內取得遠端存取權 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE51dThoUUw5LWhCWG5XSG5UbjU2SEttR2FkMnhrb3lFVXQwZUh3QzlkbDJ3eldObU1SMHVWM3hQQ3VtNkFYZEo5VGY4Y0N1UQ?oc=5>) 

---

📌 **Weekly Recap: VMware 0-Day, Java4Shell, NGINX2Root, Ruby2Shell, and a Whole Lot of Shell Trouble**

The Hacker News weekly recap reports multiple active threats, including Armory Castle exploiting VMware vCenter CVE-2026-123890 as a zero-day, a malicious Claude Code extension tied to a stolen Fireworks AI key, Cold Relic cloud-breach social engineering, Meta Muse container escape, an unpatched Windows 11 Narrator lock-screen bypass, GL.iNet GoodCloud router compromises, and numerous trending CVEs such as Java4Shell, NGINX2Root, Ruby2Shell, and Upload2Shell.

**Reference:** [⚡ Weekly Recap: VMware 0-Day, Java4Shell, NGINX2Root, Ruby2Shell, and a Whole Lot of Shell Trouble](<https://thehackernews.com/2026/11/weekly-recap-vmware-0-day-java4shell.html>) 

---

📌 **Apple discloses critical macOS vulnerability that may cause system and app crashes or arbitrary code execution**

iThome reports Apple disclosed a critical macOS vulnerability that may lead to system and application crashes or arbitrary code execution.

**Reference:** [Apple揭露macOS重大漏洞，可能導致系統與App當機或執行任意程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAxTWVZdzlLRnlHclJkLW5tVDNXaFRCS1pCWnUyamplLXRHQ01DYndVNklxVW9qSEEtWnNtMVU5NFo4cTQ3YnhVUGllM2VGZw?oc=5>) 

---

📌 **Che Lai Wu shopping website hit by automated attack, some member personal data suspected of leaking**

iThome reports that the Che Lai Wu shopping website suffered an automated attack and that some member personal information may have been exposed.

**Reference:** [車麗屋購物網站遭自動化攻擊，部分會員個資疑似外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9YYlFKM21UTlVoRDNvU3hfQTVPR1ZUa2JTeFRqU216SnI2cXkwTmFXTHpjUUl3SEJJSV9PdVdEcktWbjduTkJBUXpZT3NQdw?oc=5>) 

---

📌 **D-Link discontinued router DIR-600L found to have three vulnerabilities, vendor says production ended 10 years ago and no patches will be released**

iThome reports that three vulnerabilities were disclosed in D-Link's discontinued DIR-600L router, and the vendor states it will not issue patches because production ended a decade ago.

**Reference:** [D-Link停產路由器DIR-600L被揭露存在三項漏洞，官方強調10年前停產，不會釋出修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1EWTNaQmJNQWRXWEV6SlRZenVVTkpVTzk4Nk80cjlfekVXTWhMT3F4TXN3OTF5WGtNeUJpaFo2TTJuclVaR21OQ0RlR3dHdw?oc=5>) 

---

📌 **Okta Links ShinyHunters-Associated Vishing Group to New INCEPTION Data Leak Site**

Okta says threat cluster O-UNC-053, previously associated with ShinyHunters, remains active and may have rebranded under the INCEPTION data leak site, using voice phishing to steal credentials and MFA approvals for account takeover and extortion across sectors including technology, healthcare, biotechnology, financial services, insurance, entertainment, gaming, retail, transportation, hospitality, and legal.

**Reference:** [Okta Links ShinyHunters-Associated Vishing Group to New INCEPTION Data Leak Site](<https://thehackernews.com/2026/11/okta-links-shinyhunters-associated.html>) 

---

📌 **CrowdStrike Makes AI Security Push With Blockbuster Zscaler Deal**

Dark Reading reports that CrowdStrike is expanding its AI security efforts through a major agreement with Zscaler.

**Reference:** [CrowdStrike Makes AI Security Push With Blockbuster Zscaler Deal](<https://www.darkreading.com/endpoint-security/crowdstrike-ai-security-push-zscaler-deal>) 

---

📌 **SoftBank Air Terminal 6 vulnerable to OS command injection**

JVN reports that SoftBank Air Terminal 6 is affected by an OS command injection vulnerability.

**Reference:** [SoftBank Air Terminal 6 vulnerable to OS command injection](<https://jvndb.jvn.jp/en/contents/2026/JVNDB-2026-000172.html>) 

---

📌 **Hacker group Gentlemen claims Nvidia breach**

Xakep reports that the Gentlemen group claims to have breached Nvidia.

**Reference:** [Группировка Gentlemen заявила о взломе Nvidia](<https://xakep.ru/2026/11/23/gentlemen-nvidia>) 

---

📌 **AMD NPU Becomes World's First Neural Processing Unit Supported by Unsloth Desktop**

AMD's Neural Processing Unit (NPU) has achieved support from Unsloth Desktop, making it the first NPU globally to gain this compatibility for localized AI workloads.

**Reference:** [AMD NPU成為全球首款獲Unsloth Desktop支援的神經網路處理器 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1SeV9hSkpvZFRYc2VjZVQyNUM2WXVTaGRYaVVZWDhoanZ4MVhfOW9DcVVXbGd4azFZME1XVnZadWJBUjF2MFIwSWZfVQ?oc=5>) 

---

📌 **U.S. General Services Administration Successfully Executes Post-Quantum Cryptography Algorithms on Existing Smart Cards**

The U.S. General Services Administration (GSA) has successfully implemented post-quantum cryptography (PQC) algorithms on existing identity verification smart cards.

**Reference:** [美國總務署在既有身分驗證智慧卡上成功執行抗量子密碼演算法 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBFcjVuajdzaFRxWUhsb3lwSWdTZzN0a1l2YWRRR0xaRjNvVVRrMDhaZjNDVHNETDF0UWo3SE5mSzZRVVdicm5ONnEyNTZFdw?oc=5>) 

---

📌 **CrowdStrike Acquires Zscaler for $43.9 Billion, Setting Cybersecurity Industry Record**

CrowdStrike has entered into an agreement to acquire Zscaler for $43.9 billion, marking a record-breaking transaction within the cybersecurity sector.

**Reference:** [CrowdStrike以439億美元併購Zscaler，創下資安界交易紀錄 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBSZlBsVjRyTzJYd2hWTTB0MllEOWp0dGY1aXF2ZzBhSFhjOE04T1JtczhjT1RlX0NOdk9EZ04zbDN1clZieGhJOHczS29LQQ?oc=5>) 

---

📌 **Kubernetes 1.38 may adjust cgroup driver settings, potentially affecting node startup in older container runtimes - iThome**

iThome reports that Kubernetes 1.38 is previewing adjustments to cgroup driver settings, which could affect node startup for older container runtimes.

**Reference:** [Kubernetes 1.38預告調整cgroup驅動程式設定，舊版容器執行環境恐影響節點啟動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBIbTg2LWc4dG80c1FtNmctZjg1WEoyUDlZTTc5MEVlWlg0Si1oMERxNkgyZldqSnVNQ1NkZUxkMTV0MUxROGtrY2w2NEl1Zw?oc=5>) 

---

📌 **Virginia’s Attorney General files lawsuit against Grok over child exploitation - WWBT**

WWBT reports that Virginia’s Attorney General has filed a lawsuit against Grok concerning child exploitation.

**Reference:** [Virginia’s Attorney General files lawsuit against Grok over child exploitation - WWBT](<https://news.google.com/rss/articles/CBMiugFBVV95cUxNTk5ZLUh1dlBPV3RKeV9MaUxRaEdLZXJMeFZoeFlWMkl1bmNISUtOeVhwZEkwUUUwa2F3cUZXNHFVbDUyTHRyS0c5a3RQbXE3WHRYenM1RExOUTdLZng0TXZyd1FleVkwMjZZaEdBUXFYSXhMdVNKUk5BSlJ4V0hWZmRuWVJzZFBZWkJDN0VfRkZkcl9vRzhtX2p4YWtQekdwSW5OWUctZTN0UmFTZmM3dzNFYUp4ZlUzN2fSAc4BQVVfeXFMUDVwYTlzMXlzekxBTDN5ZzJXdmkyaGlZVzY2blJzRjBzSnhkV2pfNmM2QjJOcnloaGxjOWVtUWJUSDNsdldZYmdXNW5rTno5c0RRN2NYQ0pPdFpjVGs2bS1DbW4wczNBZVRMNWwwTmREQnFSa0NZVThlUHRGcFdaWVFaektldmFnajMtb0x0RVdvblpjNWExSVc3X214SEhBVjVETzI2MkliZkNxRzQ2SWFrLUhBcGVQY19HY3FEMVcwd181MUxjdzNsVU5CSkE?oc=5>) 

---

📌 **2026 industrial control security incident ratio rises to 1.7 times last year’s, over 70 percent of incidents involved plant or system downtime - iThome**

iThome reports that industrial control security incidents in 2026 rose to 1.7 times last year’s level, with more than 70 percent of incidents involving downtime at plants or systems.

**Reference:** [2026年工控資安事故比例增至去年的1.7倍，逾7成事故期間廠區或系統曾停機 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5hQzdOVjBhWjY1dXhqczl6XzZjU3hWWmVGN09PdFdSdjl1VmZ0VjR1VXpEaDdSTWFWcWlVMzI1dURicG1BOGdNZXUzT0lBUQ?oc=5>) 

---

📌 **Siemens product update for November 2026**

JVN reports a Siemens product update dated November 2026. This is headline-only coverage; no specific vulnerability details, affected products, severity, patches, or customer impact are provided.

**Reference:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **N-able reveals critical vulnerability in email filtering service**

iThome reports that N-able disclosed a critical vulnerability in its email filtering service system. This is headline-only coverage; no technical details, exploit evidence, affected customers, patches, or mitigations are provided.

**Reference:** [N-able揭露電子郵件過濾服務系統重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE14MXZzbnFHMUJ1Z2taalBrZjFsWGNvYm5FXzNTUHkzZmR3bHdobG55Tkg2Z1pRdndYVGJxeFR5REhKeTJSYno5cHB4bXcwZw?oc=5>) 

---

📌 **Salesforce and Microsoft launch Copilotforce to integrate CRM into daily work interfaces**

iThome reports that Salesforce and Microsoft launched Copilotforce to integrate CRM capabilities into everyday work interfaces. This is headline-only coverage; no security details, vulnerability information, or threat impact are provided.

**Reference:** [Salesforce 攜手微軟推出 Copilotforce，讓 CRM 融入日常工作介面 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5xOFFaaHo1ZkJRVmVESDc0U292cGtkd2xGdDlYZUxSYWxic21GbjVMbzJlM2FUQndZbkh4VHNpUzJFTmMyT2JKR2Fabw?oc=5>) 

---

📌 **Webworm Suspected of Modifying SoftEther VPN to Evade Detection and Hide Remote Access**

The Hacker News reports that Rapid7 assesses with moderate confidence that China-aligned threat actor Webworm is using a modified SoftEther VPN Bridge build, rebranded as NtMonitor VPN, to remove detection fingerprints and establish covert remote access. The Windows executable netcapa.exe is a rebuilt version of SoftEther VPN Bridge v4.44 build 9807, uploaded to VirusTotal around mid-January 2026. Changes include renamed HTTP endpoints, a PNG-based protocol watermark replacing the GIF watermark, embedded runtime resources, and an encrypted configuration file starting with magic bytes "RCEN". Rapid7 notes no new functionality was added; the focus was stealth through source-level rebuilding rather than trojanization. Webworm was first publicly detailed by Symantec in September 2022 and has targeted government entities, IT services, and electric power companies across Russia, Georgia, Mongolia, and other Asian nations.

**Reference:** [Webworm Suspected of Modifying SoftEther VPN to Evade Detection and Hide Remote Access](<https://thehackernews.com/2026/11/webworm-suspected-of-modifying.html>) 

---

📌 **US Cyber Director Pick Signals Shift Toward Expertise**

Dark Reading headlined a report on the U.S. Cyber Director selection indicating a shift toward expertise. Headline-only coverage; no technical incident details were provided.

**Reference:** [US Cyber Director Pick Signals Shift Toward Expertise](<https://www.darkreading.com/cybersecurity-operations/us-cyber-director-pick-signals-shift-toward-expertise>) 

---

📌 **Behind the Alias: How One Researcher Unmasked a Decade of Ransomware Actors**

Dark Reading headlined research on unmasking ransomware actors behind aliases over a decade. Headline-only coverage; no specific ransomware groups or incidents were detailed.

**Reference:** [Behind the Alias: How One Researcher Unmasked a Decade of Ransomware Actors](<https://www.darkreading.com/cybersecurity-operations/alias-researcher-unmasked-ransomware-actors>) 

---

📌 **Hyflock**

iThome reports on Hyflock.

**Reference:** [Hyflock - iThome](<https://news.google.com/rss/articles/CBMiT0FVX3lxTE5rSEhTbjZxeDhyV29WMTJGaFVud0t0UVVYZVBZUFBRVkNoMVdMNXpfTUZxQTBQN2hVQ0puQ0x5Njl4MXVFeFJSRTJUOWdERW8?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261124-1-1795539866092 -->
