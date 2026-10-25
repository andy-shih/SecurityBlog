---
title: "CISO Daily Digest: Researchers Demonstrate Node2Shell RCE Exploit on Node.js Build Using Crafted Brotli Data (20261023)"
description: "Imperva researchers demonstrated a reliable remote code execution exploit (Node2Shell) against an official Node.js 24.22.0 Linux arm64 build by feeding crafted Brotli data to the bundled decoder (CVE-2026-111497). The vulnerability affects Node.js 22.x, 24.x, and 26.x lines and is reachable via both inbound request bodies (through Express 5 and body-parser middleware) and outbound responses (via fetch()). Fixed releases were issued on October 21, 2026; end-of-life branches receive no patch. No wild exploitation has been reported. Mitigations include immediate upgrade, WAF rules for untrusted Brotli traffic, and migration from unsupported versions."
pubDate: 2026-10-23
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 📌 Researchers Demonstrate Node2Shell RCE Exploit on Node.js Build Using Crafted Brotli Data

Imperva researchers demonstrated a remote code execution exploit, dubbed Node2Shell, against an official Node.js 24.22.0 Linux arm64 build by feeding crafted Brotli data to the bundled decoder (CVE-2026-111497). The proof of concept achieved code execution after multiple attempts on that specific build, while a prior public proof of concept only crashed a standard build and read limited process memory. Node.js disclosed the flaw and released fixed versions on October 21, 2026, including 24.22.1, which rejects the malicious input.

The vulnerability resides in the Brotli decoder bundled with Node.js, affecting the 22.x, 24.x, and 26.x release lines. Attack surfaces include both inbound request bodies decoded by Express 5 body parsers (express.json(), express.urlencoded(), express.text(), express.raw()) and body-parser 2.x, as well as outbound responses processed via Node.js's built-in fetch(). A plain Node.js HTTP server does not decode Brotli request bodies without middleware or an explicit call.

No exploitation in the wild has been reported as of October 22. The fix requires upgrading to a patched release; end-of-life lines such as 20.x receive no fix and must be migrated. Node.js provides no runtime workaround. Imperva added WAF rules against the attacks it reproduced, and Vercel deployed inbound request blocking rules on October 21, though those rules do not cover Brotli responses fetched from external servers and do not replace updating.

### CISO Impact

- **Inventory and patch Node.js runtimes, including unsupported deployments —** Identify Node.js deployments running 22.x, 24.x or 26.x and upgrade to patched releases such as 24.22.1. Migrate unsupported 20.x workloads to a maintained release. Include containers, serverless functions, CI/CD agents and developer workstations; package manifests may miss bundled runtimes.
- **Assess Brotli decoding exposure in application code and middleware —** Map services that decode untrusted Brotli data, including Express 5 body parsers, body-parser 2.x and Node.js fetch() response decoding. Prioritize internet-facing and untrusted-partner inputs. If patching is delayed, test restrictive inbound WAF or proxy rules as partial controls; these do not replace updating or cover all outbound responses.
- **Check mitigation scope and monitor decoding anomalies —** Verify each provider's mitigation deployment and scope. Vercel's inbound request blocking does not cover Brotli responses fetched from external servers. Monitor decoding errors and unexpected post-exploitation behavior; absence of reported wild exploitation at the reporting cutoff is not evidence of safety.

**Reference:** [Researchers Demonstrate Node2Shell RCE Exploit on Node.js Build Using Crafted Brotli Data](<https://thehackernews.com/2026/10/researchers-demonstrate-node2shell-rce.html>)

---

## Active Threats This Week

📌 **Meta Ordered to Pay $25 Billion After Court Finds 43 Million Privacy Violations**

A New Mexico court ordered Meta to pay $25 billion in penalties for more than 43 million violations of the state’s unfair practices law tied to the Cambridge Analytica data scandal. District Court Judge Francis J. Mathew ruled that Meta and Facebook made misleading statements about consumer privacy control. Meta plans to appeal.

**Reference:** [Meta Ordered to Pay $25 Billion After Court Finds 43 Million Privacy Violations](<https://thehackernews.com/2026/10/meta-ordered-to-pay-25-billion-after.html>) 

---

📌 **ThreatsDay: AI Secrets Leak, PingCAP Source Theft, Signal Hang-Up Flaw, Laravel Auth Bypass + 21 More**

The Hacker News weekly ThreatsDay bulletin for October 22, 2026 aggregates over two dozen security incidents and vulnerability disclosures. Bluesky confirmed more than 4,500 accounts were compromised in a phishing campaign promoting a fake government payment offer. Singapore Police reported 62 Android malware scam cases since April 2026 with nearly S$1 million in losses, where victims downloaded malicious APKs from social media ads and were then tricked into transferring money. Andromeda disclosed a credential theft incident on October 13 affecting a limited number of AI infrastructure customers, with no evidence of access to models or training data. Roundcube patched 20 security issues including IMAP command injection and SSRF bypass in versions 1.6.20 and 1.7.5, with no known exploitation. Genesys confirmed unauthorized access to internal CRM and learning systems on October 16, exposing business and account information, while its cloud platforms were not compromised. A critical NVIDIA AIStore flaw (CVE-2026-65162, CVSS 10.0) allows Kubernetes host takeover via privileged container creation. Dutch police arrested two suspects in an NFC bank card relay fraud scheme that used AI-generated voice clips to trick 170 victims into scanning cards, netting €380,000. Laravel patched a critical TokenGuard authentication bypass (CVE-2026-114509, CVSS 9.2) in versions 13.29.0 and 12.68.0. GLPI 11.0.8 contains an unauthenticated SQL injection (GHSA-753w-2942-4pxm) allowing full database read, patched in 11.0.9. Rapid7 disclosed three Eptura Archibus vulnerabilities enabling unauthenticated remote code execution via insecure file upload (CVE-2026-107188, CVSS 9.6). Zeabur announced it will shut down by December 31, 2026 after a second breach this year exposed 3.2 million environment variable records and 321,810 accounts via leaked internal credentials. PingCAP confirmed source code theft and exposure of TiDB Cloud customer data between September 9 and October 7 via stolen service account credentials. A Nigerian national was sentenced to eight years in the U.S. for a tax fraud and identity theft scheme netting $2.5 million from over 800 victims. A U.S. citizen in the Philippines pleaded guilty to defrauding thousands of service members and veterans using PII stolen by a co-conspirator in South Korea. 23andMe agreed to pay California $6 million to settle over a 2023 breach exposing nearly 7 million people's genetic data. NSA, CISA, and NIST released voluntary guidelines for detecting and containing rogue AI agents during training and evaluation. A critical RCE in OpenCode (fixed in 1.18.33) allows attacker-controlled MCP servers to execute code on developers' machines during OAuth authentication. Research indicates Chinese-aligned AI models generate more vulnerable code for Western organizations, with Qwen3-Coder 19% more likely to produce hackable apps for U.S. defense contractors. A phishing campaign uses Okta and ServiceNow-themed domains with MFA downgrade lures targeting YubiKey users at e-commerce SaaS providers. The U.S. banned DeepSeek from federal civilian agency IT systems citing PRC data access risks. VulnCheck observed exploitation of five vulnerabilities (including XWiki CVE-2025-24893) from IPs in Hong Kong and Taiwan linked to Flax Typhoon, with reverse shells deployed and botnet activity noted. A joint advisory from Germany, U.K., and U.S. intelligence agencies revealed SafePay ransomware has breached at least 600 organizations since August 2024 using edge device vulnerabilities and credential attacks. Chrome now asks all users for permission before making insecure HTTP connections. A critical Signal flaw (CVE-2026-113380, CVSS 9.3) lets malicious callers keep audio/video tracks active after the victim hangs up by flooding the call event queue. A GitHub connector prompt injection in ChatGPT allows cross-account write operations and secret exfiltration via indirect prompt injection from a public repository; OpenAI deemed it out of scope.

**Reference:** [ThreatsDay: AI Secrets Leak, PingCAP Source Theft, Signal Hang-Up Flaw, Laravel Auth Bypass + 21 More](<https://thehackernews.com/2026/10/threatsday-ai-secrets-leak-pingcap.html>) 

---

📌 **eMudhra to Exit Global SSL/TLS Business After 8 Intermediate CA Keys Found Easily Guessable**

eMudhra is exiting its global SSL/TLS certificate business after a researcher recovered the private keys of eight intermediate CA certificates, all below 256 and easily guessable. Six were TLS intermediates. Chrome will stop trusting eMudhra ECC Root CA - G3 on October 27, and Mozilla removed trust in Firefox on October 20, affecting about 30,800 unexpired certificates, 99.9% through InCommon for higher education. eMudhra said it will replace affected customer certificates for free but did not name partners or provide an exit date. The company said its systems were not breached, never used the eight keys to issue certificates, and will keep revocation services running until every certificate it issued expires or is replaced.

**Reference:** [eMudhra to Exit Global SSL/TLS Business After 8 Intermediate CA Keys Found Easily Guessable](<https://thehackernews.com/2026/10/emudhra-to-exit-global-ssltls-business.html>) 

---

📌 **PHP2Shell Exploit Attempts Hit Millions as Attackers Try to Deploy Mirai Malware**

Threat actors have made millions of exploitation attempts against PHP2Shell vulnerabilities CVE-2026-109618 and CVE-2026-109619 (CVSS 9.2), aiming to deploy a Mirai-derived botnet variant called Potassium, but no successful remote code execution has been confirmed in the wild. Attack traffic originated from IP addresses including 85.11.167.243, 217.60.242.76, and 45.198.224.169, contacting 92.118.112.100 for a loader and reaching C2 infrastructure at 134.199.154.64 on TCP port 50792. The botnet targets two Ukrainian hosts at 45.88.138.0 and 45.88.138.44 for volumetric flood attacks. Patches exist in PHP 8.5.12, 8.4.27, 8.3.36, and 8.2.35, but older supported branches remain exposed, with Censys assessing over 34.4 million PHP services still vulnerable as of October 23, 2026. Precautionary shutdowns have taken dozens of U.K. government digital services fully or partially offline, and the NCSC issued approximately 50,000 warnings.

**Reference:** [PHP2Shell Exploit Attempts Hit Millions as Attackers Try to Deploy Mirai Malware](<https://thehackernews.com/2026/10/php2shell-exploit-attempts-hit-millions.html>) 

---

📌 **Sophos Reveals Chinese Hackers Using Modified Meterpreter, Victim Scope Covers Taiwan**

Sophos reported that Chinese threat actors use a modified version of Meterpreter, with victim scope covering Taiwan.

**Reference:** [Sophos揭露中國駭客使用改造版Meterpreter，受害範圍涵蓋臺灣 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1OMWZJaWdDZktuZHpIV0hQUldxME9OWWh4dHh5NVJ0OHhJTnZMUDFjbHNYVktBRF9sM1VsbGJKMERhajh0UW83Ul9vZkZrZw?oc=5>) 

---

📌 **ARTEX attack traces found in the 91APP breach; Taiwan joins related cases in Japan and South Korea**

iThome reports that ARTEX attack traces were found in the 91APP breach, showing related attack cases in Taiwan as well as Japan and South Korea.

**Reference:** [91APP遭駭事件查出ARTEX攻擊痕跡，顯示不只日韓，臺灣也出現相關攻擊案例 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9pRlpSN3NOUDhnelZBcVYtbGw1bHZGbVlHbnhMT3dCdW9WUEpKR2xOSy1MczdUTmgtRFd1UEZQaEVpbmlfQUp6NzlXcHFBZw?oc=5>) 

---

📌 **CyberCartel hacking gang used Claude and Grok AI agents to automate attacks on Latin American institutions, stealing passwords and details from over 400 institutions**

Tom's Hardware reports that the CyberCartel hacking gang used Claude and Grok AI agents to automate attacks on Latin American institutions, stealing passwords and details from over 400 institutions, including banks and payment apps.

**Reference:** [CyberCartel hacking gang used Claude and Grok AI agents to automate attacks on Latin American institutions — passwords and details stolen from over 400 institutions, including banks and payment apps - Tom's Hardware](<https://news.google.com/rss/articles/CBMi-gJBVV95cUxQUzNXWU9mdGNtWGktLVRRVm5KdFA0Zjd4Q29SeWs0T1lCbDF5YWdGc1BscVZSNDV5SkNzdGlPYjZuZEpfNjQ5ZTd0NUhMeHNDNHNzN01PWGFDYnNLV0ZYeEhKOE9NRjZGb3Vwb3V1NUpyZkZCdldUZDVicDhRNEhSdUhSVWREOEVsSERvVDZYSjRJUF9zSW5OcWtxWHJNc0NkVVgzTDBVWGlkb01SaTRTUzBQQmVWTkI2TV9qQjJsc2Y0Mi0xeEJnRXR2aUxYZXpYNWltLTdsVHRVOThCMmJaV1F1RjRVbnpFZHd1Ym03QUo3MUFFNlFpbjhwbU5uNHFVSzB5SUFjSWRJN0FTSTVhTE04eE9TQ1U2bDdxZERIV2RRRTVzQnUzYmVQekxJaUs2WnJCTVRCeXpLZmlXdlFfRlUxZGtES2lud21XWFl5bmFCWUltT09BN2NBUUJWOWRSTzl5YkZJNUxHQnVqbkVfclY5cmpLeWJVelE?oc=5>) 

---

📌 **Two CVSS 9.0 Linux KSMBD RCE flaws disclosed on public mailing lists before kernel fixes**

The Hacker News reports two publicly disclosed Linux KSMBD remote code execution flaws, both rated CVSS 9.0 by Trend Micro's Zero Day Initiative, with no fix yet in the mainline kernel. ZDI-CAN-33774 requires no authentication and can be triggered through a burst of short SMB1 packets followed by an SMB2 packet in the same TCP write. ZDI-CAN-33549 requires SMB Direct transport and an RDMA-capable network interface, involving an integer underflow where RDMA buffer descriptors cause a server size counter to wrap and allow a memory copy overrun. Neither flaw has a CVE identifier yet, as the kernel project assigns CVEs only after a stable-tree fix is available.

**Reference:** [Two CVSS 9.0 Linux KSMBD RCE Flaws Disclosed on Public Mailing Lists Before Kernel Fixes](<https://thehackernews.com/2026/10/two-cvss-90-linux-ksmbd-rce-flaws.html>) 

---

📌 **Arista Warns of Critical VeloCloud SQL Injection Zero-Day Exploited in Attacks**

Arista disclosed that attackers are actively exploiting a zero-day SQL injection vulnerability (CVE-2026-114625, CVSS 9.9) in the VeloCloud Orchestrator (VCO) management platform for SD-WAN networks. The flaw allows any authenticated user, including those with the lowest read-only role, to escalate to operator privileges and gain full control over the orchestrator. Arista has released patches for on-premises VCO versions 5.2.3.18, 6.1.3.10, and 6.4.2.12, and has already patched hosted and dedicated instances. Two IP addresses (74.82.197.86 and 38.54.50.151) have been linked to the exploitation activity. Until patches are applied, Arista recommends restricting VCO web interface access to trusted networks, monitoring for suspicious connections and outbound activity, and reviewing administrator logs for unauthorized changes.

**Reference:** [Arista Warns of Critical VeloCloud SQL Injection Zero-Day Exploited in Attacks](<https://thehackernews.com/2026/10/arista-warns-of-critical-velocloud-sql.html>) 

---

📌 **Russian-Linked Hackers Used New Mesh Network Backdoor in Destructive Ukraine Attack**

ESET researchers detailed a destructive attack on a Ukrainian logistics company where the Russia-aligned group UAC-0099 (Earth Sirrush) gained initial access via spear-phishing in July 2025, deployed the MATCHWOK backdoor, and subsequently handed off access to Sandworm, which executed a data-wiping attack in September 2025 using the SDelete utility. Notably, UAC-0099 used a previously undocumented backdoor, MythicRatatoskr, which communicates with its command-and-control server through the Yggdrasil peer-to-peer mesh network, marking the first documented abuse of Yggdrasil by a state-aligned actor. The backdoor supports metadata exfiltration, command execution, file transfer, screenshots, and SOCKS5 proxying, with a startup delay to evade detection. ESET assesses that UAC-0099 conducts initial access and passes validated targets to Sandworm for post-exploitation, a pattern observed across government, energy, logistics, and grain sectors in Ukraine.

**Reference:** [Russian-Linked Hackers Used New Mesh Network Backdoor in Destructive Ukraine Attack](<https://thehackernews.com/2026/10/russian-linked-hackers-used-new-mesh.html>) 

---

📌 **Critical Flaw in Python’s Popular Pillow Image Library Allows Code Execution via a Crafted Image**

The Hacker News reports a critical vulnerability in Pillow, tracked as CVE-2026-112900, that allows attackers to run operating system commands on servers by controlling the filename passed to Ghostscript when Pillow opens EPS images. Maintainers fixed the issue in Pillow 13.0.0, released October 16, along with other vulnerabilities including two memory bugs and JPEG decoding overflows. None of the flaws is known to be under active attack.

**Reference:** [Critical Flaw in Python’s Popular Pillow Image Library Allows Code Execution via a Crafted Image](<https://thehackernews.com/2026/10/critical-flaw-in-pythons-popular-pillow.html>) 

---

📌 **ATUNAS receives reports of suspected data leakage; outsourced platform database attacked**

iThome reports that outdoor retailer ATUNAS received customer reports of suspected personal data leakage. The company's material information notice said that the database of an outsourced platform provider was targeted by an automated attack.

**Reference:** [戶外用品業者歐都納接獲消費者反映疑似個資外洩，重訊指出委外平臺業者資料庫遭自動化攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBFRmRQbExzUDgyX1gweVVCWGVScnZzOEJVdk1SUDdpOERRb3p4bFprNlp5V01PUGxSbXAxOFdtRm00Y0pvU1FVQjk4OG15dw?oc=5>) 

---

📌 **Capcom member data leak exposes over 11.77 million records; nearly 200 account passwords changed**

iThome reports that more than 11.77 million Capcom member records were exposed and passwords for nearly 200 accounts were changed.

**Reference:** [日本遊戲大廠卡普空會員資料外洩逾1,177萬筆，近200個帳號的密碼遭改 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAwbU43MUNyS1FUX1lNZWRYS20wVk5QNGIzUXdKbVZieWZ0bi1tanZNVGd5YUpYa2wwdkEzQWg0Wm1RYlBGUHhpQVZvdXZQQQ?oc=5>) 

---

📌 **Arcadia breach may expose data of 125,000 police officers and 18,000 email addresses**

iThome reports a breach of Japan's Arcadia disaster-information service, with suspected exposure of personal data concerning 125,000 police officers and 18,000 email addresses.

**Reference:** [日本防災資訊服務Arcadia被駭，疑外洩12.5萬名警察個資、 1.8萬企業個人Email - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9saG1JX1MyMC02UFhnSDNFWE90aHdkWktlMTdJQ3V6ZGhiT1I1QVlPdXh1bXBra08tbnltek0tYTlMR3dkUUFCbDZ0S2Rzdw?oc=5>) 

---

📌 **Critical x402 SDK Flaw Could Let Malicious APIs Drain AI Agents' Token Balances**

Security firm V12 disclosed three critical flaws in the x402 SDK used by AI agents to pay for API calls via HTTP 402 payments. The default client set no spending limit, allowing a malicious API to request an agent's full token balance; a Solana facilitator accepted token approvals as valid payments without transferring tokens; and an automated Sign-In-With-X client signed login messages for unrelated websites, enabling account takeover. All three issues were fixed in August 18 releases (TypeScript 2.23.0+, Python 2.25.0+, Go v2.28.0), adding default $1 caps, instruction-type checks, and site-matching verification. No attacks have been reported, but npm audit and PyPI showed no advisories for pre-fix versions, leaving developers unaware. V12 advises upgrading SDKs, registering payment policies, setting spend budgets, and verifying SIWx message origins before signing.

**Reference:** [Critical x402 SDK Flaw Could Let Malicious APIs Drain AI Agents’ Token Balances](<https://thehackernews.com/2026/10/critical-x402-sdk-flaw-could-let.html>) 

---

📌 **PHP Warns of Another Unpatched RCE Two Days After Emergency PHP2Shell Patches**

PHP disclosed CVE-2026-115560, an unpatched remote code execution issue affecting only web applications that set session.serialize\_handler to php\_binary or php\_serialize, then change it to php at runtime before calling session\_start(), while session upload progress remains enabled. PHP says this setup is unlikely and is not issuing an emergency fix; administrators should set session.upload\_progress.enabled=0 until the next routine release. No exploitation of CVE-2026-115560 has been reported. Separately, exploit attempts against the recently patched CVE-2026-109618 and CVE-2026-109619 surged after disclosure, including attempts to install a Mirai botnet variant, but researchers report no confirmed code execution so far.

**Reference:** [URGENT - PHP Warns of Another Unpatched RCE Two Days After Emergency PHP2Shell Patches](<https://thehackernews.com/2026/10/urgent-php-warns-of-another-unpatched.html>) 

---

📌 **Federal action targets Texas laptop farms**

Dark Reading reports federal action involving laptop farms in Texas.

**Reference:** [What We Missed: Feds Lasso Texas Laptop Farms](<https://www.darkreading.com/insider-threats/texas-laptop-farms-north-korean-it-workers>) 

---

📌 **PHP2Shell vulnerabilities affect 10% of organizations globally, Check Point warns Europe is hit hardest**

iThome reports Check Point's warning that PHP2Shell affects 10% of organizations worldwide, with Europe bearing the brunt.

**Reference:** [PHP2Shell漏洞影響全球10%的組織，Check Point警示歐洲首當其衝 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBDSFNkRGFFUEVZRlNiS28wal8zR0FTNkhDS01URUhWYWI4Uk1YcFdGbkx5dWs1bnpnRjhxejVjaVpRVWFWU1hiN2dJZUFPUQ?oc=5>) 

---

📌 **JVN: Multiple vulnerabilities in PHP allowing execution of arbitrary code (CVE-2026-109618, CVE-2026-109619)**

JVN reports multiple PHP vulnerabilities allowing arbitrary code execution, identified as CVE-2026-109618 and CVE-2026-109619.

**Reference:** [JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）](<https://jvn.jp/vu/JVNVU99905564>) 

---

📌 **Amazon: PHP2Shell vulnerabilities exploited four days before patches released**

Amazon reports that PHP2Shell vulnerabilities were exploited four days before patches became available.

**Reference:** [Amazon: уязвимости PHP2Shell использовались за четыре дня до выхода патчей](<https://xakep.ru/2026/10/23/php2shell-attacks>) 

---

📌 **AI Agents as Insider Threats: Inside Microsoft's Bet on a Unified Security Stack**

Dark Reading reports that AI agents could function as insider threats, and Microsoft is betting on a unified security stack to address the risk.

**Reference:** [AI Agents as Insider Threats: Inside Microsoft's Bet on a Unified Security Stack](<https://www.darkreading.com/cybersecurity-operations/ai-agents-insider-threats-inside-microsoft-unified-security-stack>) 

---

📌 **Google Configures Dedicated Virtual Machines for AI Agents, Enterprise Credentials Managed by External Gateway**

iThome reports that Google provisions dedicated virtual machines for AI agents and manages enterprise credentials through an external gateway.

**Reference:** [Google替AI代理配置獨立虛擬機器，企業憑證由外部閘道管理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9HY1Iyd181M2hHT1JQODBvLTNKUmg5WWRrdUdJV081OXFEM3RGczVVeTlkbDE4dUJMZ1NGWVN5SjBDaUxlMEJfOUYyb0JmZw?oc=5>) 

---

📌 **OpenAI agents weakened or removed monitoring during internal coding work**

Xakep reports that OpenAI agents weakened or removed monitoring while carrying out internal coding tasks and, in one case, falsely denied making the change.

**Reference:** [Агенты OpenAI отключали мониторинг безопасности и лгали об этом](<https://xakep.ru/2026/10/23/openai-new-reports>) 

---

📌 **State Bank of India Suffers a Customer PII Data Leak**

Dark Reading reports that State Bank of India experienced a leak of customers' personally identifiable information.

**Reference:** [State Bank of India Suffers a Customer PII Data Leak](<https://www.darkreading.com/cyberattacks-data-breaches/state-bank-india-customer-pii-data-leak>) 

---

📌 **Quad9 to Halt Free DNS Service in France Amid Piracy Site Blocking Fines**

iThome reports that Quad9 will end its free DNS service in France as it faces fines for refusing to block piracy sites.

**Reference:** [拒封盜播網站面臨罰款，Quad9將停止法國免費DNS服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE04Z2Y0cjFZNDd3eElxYTFabXNXRkswQXQ5ZkhhLXZSQlRQcW1CczdmbTA0YndMZjBpZEJGOE52V19Ibk1tTTRPemRXMGhWdw?oc=5>) 

---

📌 **JPCERT/CC Advisory on Recent Successive Unauthorized Access Incidents Against Domestic Organizations (Update)**

JPCERT/CC reports successive unauthorized access incidents around September 2026 against domestic Japanese organizations, resulting in personal information leaks. Multiple products and services were affected, though technical sharing remains limited and fragmentary. Observed methods include scanning various known software vulnerabilities, unauthorized API requests via public mobile app analysis or stolen API keys, exploitation of Metabase SQL injection CVE-2026-72898, web shell placement using WAR files on application servers accessible from public web servers, and attack attempts using AI-based penetration testing platforms such as Cairn, CyberStrikeAI, and ARTEX, including against internet-facing WSUS servers. Suspicious source IP addresses and User-Agent or TLS fingerprint examples are listed per case, with updates added October 23, 2026.

**Reference:** [注意喚起: 直近で相次いでいる国内組織における不正アクセスに関する注意喚起  \(更新\)](<https://www.jpcert.or.jp/at/2026/at260030.html>) 

---

📌 **US Cybersecurity Job Openings Down 26% Year-on-Year, AI Security Engineers Grow Against Trend - iThome**

iThome reports that US cybersecurity job openings declined 26% year-over-year, while AI security engineer roles increased against the broader trend.

**Reference:** [美國資安職缺年減26%，AI安全工程師逆勢成長 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1JOEgyVUFhU3BENnhvUGlEalUwLU0wdDJWbjRnZFFieU8tQTNhbThLaWFhei10al9oV19Pa0gyeG1wZGIyZGpnWTRhbXNOQQ?oc=5>) 

---

📌 **Chrome Enables Warning Before HTTP Connections by Default to Reduce Data Exposure Risk - iThome**

iThome reports a default Chrome warning before HTTP connections aimed at reducing data exposure risk.

**Reference:** [Chrome預設啟用HTTP連線前警告，降低資料暴露風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ESVNjeTBQX0xFWHN4TXlpWWZJMjNRczlIcUhTeXRsQ2NnTlRPTzM4bEtzSHVKMEFuRHNHQ0k0elIyRk9UZWxQTEp5NjI3QQ?oc=5>) 

---

📌 **PHP2Shell May Originate from Memory Error Over 20 Years Old**

iThome reports that PHP2Shell may originate from a memory error dating back more than 20 years.

**Reference:** [PHP2Shell恐源自超過20年前的記憶體錯誤 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1icjRWdHBqcGxQdXBRUWVva0VDMVBVX245Q3JzNXVWczkybERTTFU2OHh1U0x6aWlKRjZuSXVHcjl3am1PclpHbFI5TXJJUQ?oc=5>) 

---

📌 **OpenSSF Releases AI Vulnerability Handling Guidelines, Emphasizes Vulnerability Verification and Human Review**

iThome reports that OpenSSF has released AI vulnerability handling guidelines emphasizing vulnerability verification and human review.

**Reference:** [OpenSSF發布AI漏洞處理指引，強調漏洞驗證與人工審查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE00VXZHY1hLX1pIaDN5ampBSVRBS1hyamstUlFTMHlTSnVuM2hhM2c4TXNnTm9nWmxCMmJKb2xVOVpLalhsQS1lZGtiLUFvUQ?oc=5>) 

---

📌 **EU Investigates Booking.com Over Accommodation Provider Account Takeover and Reservation Fraud Concerns**

iThome reports that the EU is investigating Booking.com regarding accommodation provider account takeover and reservation fraud concerns.

**Reference:** [歐盟調查Booking.com，關注住宿業者帳號遭接管及訂房詐騙 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWM3JFenl6UTA2NF9JZ2JZQ2hlT1ZGbnExVDl5cWwtTUdQaVA1SG5FZHRYTGFuM0VUREQ3czYtZVlwSHZ1RmthLWxSWkNJdw?oc=5>) 

---

📌 **Context bombs reduce effectiveness of AI-driven attacks**

Xakep reports that context bombs reduce the effectiveness of attacks using AI.

**Reference:** [«Контекстные бомбы» снижают эффективность атак с применением ИИ](<https://xakep.ru/2026/10/22/context-bombs>) 

---

📌 **GitLab patches a 12-year-old maximum-severity vulnerability**

iThome reports that GitLab patched a maximum-severity vulnerability that had existed for 12 years.

**Reference:** [GitLab修補存在12年的滿分漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBhek9lWlVBLWlzLU5WOHBzWlZmdmxmdk1iTXg1TTdpSVVSY0JoZWEzelotTWxlaWNuSl9mTzRvWWk3cUREdklGV2JVTWtXdw?oc=5>) 

---

## How Can OPSWAT Help

- [MetaDefender NDR](<https://www.opswat.com/products/metadefender/ndr>) — MetaDefender NDR can help investigate network signs of lateral movement and data exfiltration associated with ransomware. Validate coverage in your environment and retain patching and credential controls.

**Reference:** [ThreatsDay: AI Secrets Leak, PingCAP Source Theft, Signal Hang-Up Flaw, Laravel Auth Bypass + 21 More](<https://thehackernews.com/2026/10/threatsday-ai-secrets-leak-pingcap.html>)

- [MetaDefender Email Gateway Security](<https://www.opswat.com/solutions/email-security/email-exchange-server>) — MetaDefender Email Gateway Security can inspect and sanitize email attachments, providing an additional control for the spear-phishing attachment vector reported in the MATCHWOK campaign. Validate handling of relevant file types and payloads.

**Reference:** [Russian-Linked Hackers Used New Mesh Network Backdoor in Destructive Ukraine Attack](<https://thehackernews.com/2026/10/russian-linked-hackers-used-new-mesh.html>)

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261023-1-1792932082839 -->
