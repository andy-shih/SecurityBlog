---
title: "CISO Daily Digest: Google Discloses Chinese-Linked Hackers Exploited BeyondTrust Zero-Day to Breach Enterprise Networks (20261019)"
description: "Chinese-nexus group ARMORY CASTLE exploited a BeyondTrust Remote Support zero-day (CVE-2026-102764) from August to breach enterprise appliances and pivot internally; CISA added this and a Fortinet flaw (CVE-2025-61624) to the KEV with an October 19 federal deadline. Separately, the GhostAction supply-chain campaign compromised 94 GitHub repositories, phishing maintainers for OAuth tokens and planting a persistent VS Code font-file stealer that harvests cloud and developer credentials."
pubDate: 2026-10-19
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Google Discloses Chinese-Linked Hackers Exploited BeyondTrust Zero-Day to Breach Enterprise Networks

Google Threat Intelligence Group (GTIG) and Mandiant disclosed on October 16 that a suspected China-nexus espionage group tracked as ARMORY CASTLE exploited a zero-day vulnerability in BeyondTrust Remote Support (CVE-2026-102764, CVSS 4.0 9.3) to compromise enterprise remote-support appliances and pivot into internal networks. The flaw affects Remote Support 26.2.3 and earlier; insufficient validation of inbound message sources allowed remote attackers to manipulate files on the appliance and gain a foothold.

Mandiant investigations found ARMORY CASTLE leveraged the vulnerability from late August 2026, deploying the SAWFLY web shell, obtaining root persistence across reboots, and abusing compromised admin accounts to traverse Remote Support connections into internal systems where they downloaded software inventories and other documents.

BeyondTrust patched all SaaS customers on October 9. Self-hosted customers must apply the patch manually or upgrade to a supported version first (24.3.1+). BeyondTrust and Mandiant urge organizations to audit admin-privilege changes, remote-session logs, and file transfers, review centralized logs for lateral access, rebuild compromised appliances, and rotate potentially exposed credentials.

### CISO Impact

- **Patch and hunt BeyondTrust Remote Support immediately —** Confirm hosted instances received BeyondTrust’s October 9 patch. For self-hosted deployments, apply the fix; versions below 24.3.1 must be upgraded first. Hunt for SAWFLY web shells, unexpected root persistence, admin-account abuse, and anomalous Remote Support sessions in logs from late August onward.
- **Enforce KEV remediation deadline and extend to Fortinet —** Meet CISA's October 19 deadline for CVE-2026-102764 and CVE-2025-61624; prioritize Fortinet path-traversal patching where PeerStitch delivery has been observed.
- **Detect and disrupt GitHub OAuth phishing and supply-chain persistence —** Monitor for OAuth device-flow authorizations to unfamiliar apps, token exfiltration to external IPs, VS Code tasks.json auto-run triggers, and unexpected font-file writes in repos; revoke tokens, rotate secrets, and audit cloned repositories.

**Reference:** [Google揭露中國相關駭客利用BeyondTrust零時差漏洞入侵企業內網 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1Fc1YxdkhVS28tOFZnaE9naE0wVzU5R0dxT3NRMV9VTDZSUlZpempDWG9UXzdjNGVzeFFVN1FxUi03QTB2a0M0UlYzSEN4Zw?oc=5>)

---

## Active Threats This Week

📌 **CISA Adds Actively Exploited BeyondTrust and Fortinet Flaws to KEV Catalog**

On October 16 CISA added two vulnerabilities to its Known Exploited Vulnerabilities catalog based on active exploitation evidence: Fortinet path-traversal CVE-2025-61624 (exploited by CL-STA-0954/UNC5820 to deliver PeerStitch malware) and BeyondTrust Remote Support authentication-bypass CVE-2026-102764 (exploited by UNC5221/ARMORY CASTLE as detailed by GTIG/Mandiant). Federal agencies must remediate by October 19.

**Reference:** [BeyondTrust、Fortinet漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0yTzRsOVVWekxwSkJmMkFXUHVQbVFFcXlycjJaMUdNSXR2cGdmMnFkV0FaOURRem16TUdQWjlFcWs5UmQwSFJKV0dsVmttdw?oc=5>) 

---

📌 **GhostAction Supply-Chain Campaign Plants Credential Stealer in 94 GitHub Repositories**

OpenSourceMalware reports the GhostAction threat actor has evolved from injecting malicious GitHub Actions workflows to a multi-stage supply-chain attack across 94 repositories (66 owners, 15 since removed). Stage 1 uses a typosquat domain (my-github\[.\]com) in phishing emails that reverse-proxy GitHub login to harvest passwords, 2FA codes, and silently authorize a repo-scoped OAuth device-flow token (repo, workflow, read:org) exfiltrated to the attacker on TCP/8443. Stage 2 persists via a VS Code tasks.json "runOn: folderOpen" trigger that auto-executes a credential stealer hidden in a fake font file (fa-solid-400.woff2) harvesting AWS keys, PyPI/npm tokens, Git logins, Kubernetes creds, SSH keys, and AI provider secrets (Anthropic, Google Gemini), installing a cron job every five minutes and exfiltrating over HTTP/8080. A fallback CI workflow (lint.yml, ci-check.yml, etc.) uploads findings to a secret GitHub gist if POST fails. GitHub began blocking the malicious workflow on October 9; the Stage 2 payload appeared six days later. Researchers advise revoking GitHub tokens from a clean device, rotating all reachable credentials, auditing repositories, and notifying downstream cloners.

**Reference:** [GhostAction Attackers Plant Credential Stealer Disguised as Font in 94 GitHub Repositories](<https://thehackernews.com/2026/10/ghostaction-attackers-plant-credential.html>) 

---

📌 **OpenBSD patches 37-year-old memory vulnerability; researchers reveal root exploit**

OpenBSD has addressed a memory vulnerability originating 37 years ago. Researchers have publicly demonstrated an exploit achieving root access, confirming the flaw's severity and the importance of long-term maintenance security.

**Reference:** [OpenBSD修補源自37年前的記憶體漏洞，研究人員已公開取得root權限的攻擊程式 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5qWGduRjllOTh3N1lwWUc4QTZkbThoWDltaXZZZmI3dlNWT3doTUVFSVpLbEJVWC1jaV8yWnQ3VFFMTllHLU5hWEQwRG10dw?oc=5>) 

---

📌 **Adobe Commerce critical vulnerability BlockStrap allows arbitrary code execution**

Adobe Commerce faces a critical vulnerability tracked as BlockStrap. This flaw potentially allows attackers to execute arbitrary code directly on the server, representing a significant risk for e-commerce operations. Users are advised to apply security updates promptly.

**Reference:** [Adobe Commerce重大漏洞BlockStrap恐讓攻擊者直接在伺服器執行任意程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBiOEVtZHpxRTNHVDU3T3hWTHQ4MG1pSTBNZ05PdTJhWlg4NHRMRVBaRzlreTBQb2l5UlR0NmptT2NES0RoZGVpckdBMndqUQ?oc=5>) 

---

📌 **Malicious packages found in Arch Linux software store distribute malware to gain root privileges - iThome**

iThome reports that malicious packages appeared in an Arch Linux software repository and were used to distribute malware intended to gain root privileges. For organizations that install such packages, this report highlights the value of reviewing package provenance and controlling installations that request elevated privileges.

**Reference:** [Arch Linux軟體市集出現惡意套件，攻擊者藉此散布惡意程式以取得root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Uak04NTNmWFNVY04tOTdnZ3ZkRzF5QmV4UXR2WjNvZU9nMGlYbmhvRmFmQXQ2aUM5MFhxNTloZVAxanVvd1dORURld3dpdw?oc=5>) 

---

📌 **Fake Web3 Accelerator Uses npm Packages to Spread Malware and Hijack AI Agent Traffic**

A fake Web3 accelerator named Apex Accelerator was observed pushing information stealers and backdoors to Windows and macOS systems using malicious npm packages. The operation targets cryptocurrency startups and founders, repackaging legitimate coding agents to send model requests through attacker-controlled services. The npm packages @apexacc/cli and @apexacc/audit were published by an npm user named 'apexaccelerator'. Both packages implement distinct verification paths for Windows and macOS, sending HTTP POST requests to initiate the appropriate infection chain. On Windows, malware retrieves Base64-encoded PowerShell commands to fetch second-stage scripts and executables, ultimately harvesting system information and exfiltrating data through Telegram. On macOS, the malware downloads a bash script that deploys CloudSyncD, a backdoor first documented by Jamf Threat Labs, which phishes system login passwords and contacts external servers. The packages are also capable of intercepting and redirecting OpenRouter LLM traffic and registering a controlled MCP server in the victim's agent configuration. The operation has been tracked under the moniker REF8801 and was found to reference Russian-language comments in source code commit history.

**Reference:** [Fake Web3 Accelerator Uses npm Packages to Spread Malware and Hijack AI Agent Traffic](<https://thehackernews.com/2026/10/fake-web3-accelerator-uses-npm-packages.html>) 

---

📌 **Microsoft Disrupts Transnational Phishing Crime Service Involving Over 1 Billion Malicious Messages**

iThome reports that Microsoft has taken action against a cross-border phishing crime service responsible for more than one billion malicious messages.

**Reference:** [微軟打擊跨國網釣犯罪服務，涉及逾10億則惡意訊息 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9rUFJWZlZsbFF4WGlFSFNwMEprYm5MRlVFS1pfdUNna0E5U2R3UGFNY3M3UkVkSUNUS0R4S1c5SWRnSkp1ejdrUGU2Y20xZw?oc=5>) 

---

📌 **Nginx patches five vulnerabilities, three could allow remote code execution**

iThome reports that Nginx has released updates addressing five security flaws, three of which are rated as potentially enabling remote code execution. Users and administrators should apply the latest patches to affected Nginx versions promptly to mitigate exploitation risk.

**Reference:** [Nginx修補5項漏洞，3項恐導致遠端程式碼執行 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9pVkNZT3FTSmRUMG1FN0s2RzVTVjBEUlNBRE5kZ3pWQVplZDBXdnFsWnE3WFdqSFI5MGZ6WU1TZlZPOWZmZTEyWEdFU0t3dw?oc=5>) 

---

📌 **Threat group UNC5820 targets telecom firms, exploiting Fortinet vulnerabilities to distribute PeerStitch malware**

iThome reports that threat group UNC5820 is targeting telecommunications companies by exploiting Fortinet security vulnerabilities to distribute PeerStitch malware.

**Reference:** [駭客組織UNC5820鎖定電信公司，利用Fortinet資安漏洞散布惡意軟體PeerStitch - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ydWlIZFJ4QmdLZ2tTZmNPQ0pzRnE2X0t0SmlkZTZLT3JpcnRuc2Y0cXV4Z0czR1phS2ZUNElmV3dRSE9iMl9RMGxoMmpzdw?oc=5>) 

---

📌 **CISA urges BeyondTrust users to patch critical vulnerability in remote support system**

iThome reports that CISA is urging BeyondTrust users to promptly patch a critical vulnerability affecting its remote support system.

**Reference:** [CISA呼籲BeyondTrust用戶儘速修補遠端支援系統重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9YSzJzTHRLWTdVNk9MOWJvcTFmc3dMTXZkQV90cHdjNlAzNUdiWWpXeFlmQU9TM2pYUUZTVmd1cWh4VlltVGduN295OEt2Zw?oc=5>) 

---

📌 **ConnectWise backup API credentials abused, 173 Microsoft 365 tenants accessed without authorization**

iThome reports that abused ConnectWise backup API credentials led to unauthorized access to 173 Microsoft 365 tenants.

**Reference:** [ConnectWise備份API憑證遭濫用，173個M365租戶遭未授權存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1saGVyaVllRFdSclA0TjdUdkFOeDlKZ1p5MWQ5b2VMbWZjaFg5Ni1waWtBLVJHT2JJQVRERjVzVVloX2dmSWF2aEFiQVU3QQ?oc=5>) 

---

📌 **Adobe patched 176 security vulnerabilities in the first half of October**

iThome reports that Adobe addressed 176 security vulnerabilities during the first half of October. The RSS headline does not provide affected products, severity ratings, CVE identifiers, or exploit status.

**Reference:** [Adobe於10月上半修補176個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9CdElUb2lqX2JYeDcxUEdCME1XaFlYbG5TUkFGMXM1Z3BjanFsN1EyTGl2Rk13WGhiUko5a2RaYkx2TFRubnZPeDJZZGludw?oc=5>) 

---

📌 **Unpatched Broadcom Wi-Fi Flaw Lets Attackers in Range Run Code as Root on Routers**

Researcher Quentin Kaiser disclosed an unpatched flaw in Broadcom’s Wi-Fi Protected Setup code that lets attackers within radio range run code as root on affected routers without a password or pairing. No CVE has been assigned, and Broadcom has not publicly acknowledged or patched the issue. Kaiser demonstrated attacks against an Orange Belgium Askey TCG3000 gateway that exposed the Wi-Fi password, and a Proximus Sagemcom BBOX3V+ that opened a remote shell over Wi-Fi. Older eCos-based chips including BCM3380, BCM3383, and BCM33834 have no usable fix, while newer Linux-based models such as BCM3390, BCM65xx, and BCM68xx could be patched by vendors switching Wi-Fi software. Millions of devices across dozens of vendors may be affected, though Belgian provider estimates are rough and Kaiser’s wider device list mixes confirmed and likely-vulnerable entries. Kaiser reports no real-world exploitation and says his exploits are his own work. Defenders have no patch or blocking setting; YARA rules and a detection script are available as triage aids, and replacement is the practical option for permanently vulnerable devices.

**Reference:** [Unpatched Broadcom Wi-Fi Flaw Lets Attackers in Range Run Code as Root on Routers](<https://thehackernews.com/2026/10/unpatched-broadcom-wi-fi-flaw-lets.html>) 

---

📌 **Cloud-based office software Collabora Online vulnerability exploited, attackers attempt to infiltrate Nextcloud servers**

iThome reports that a vulnerability in cloud-based Collabora Online office software is being exploited in attempts to infiltrate Nextcloud servers. The RSS headline does not provide the vulnerability identifier, affected versions, exploitation details, or confirmed compromise scope.

**Reference:** [雲端版辦公室軟體Collabora Online漏洞遭到利用，攻擊者試圖入侵Nextcloud伺服器 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1PcExyLWRmVWV1enZ1cUctVU16c2x5ZzJXWUpYaFAxTktuanNhcnBJZjZSRGxEQ0Q4NjZWaHdHaW1qS0Q2eXJheHdKNUQxQQ?oc=5>) 

---

📌 **Sucuri reveals self-rebuilding WordPress malware SC reappears seconds after removal**

Sucuri has identified a self-rebuilding WordPress malware known as SC that reappears within seconds after being removed, indicating persistent server access or reinfection mechanisms.

**Reference:** [Sucuri揭露可自我重建的WordPress惡意程式SC，移除後數秒便會重現 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBOLXJfbEFuRUJfWktuLWFGNXUzWkMtdWY5R1VUc3JLMUM0OU40SVREYWx6NG1pUE0tU3plUXpxNDBJTENpZFBmZUlDd2xJQQ?oc=5>) 

---

📌 **Feds suspect ransom negotiator ran ShinyHunters extortion site**

U.S. federal investigators suspect a ransom negotiator operated a ShinyHunters extortion site, according to Krebs on Security reporting.

**Reference:** [Feds Suspect Ransom Negotiator Ran ShinyHunters Extortion Site](<https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site>) 

---

📌 **OpenCode Console breach may have exposed OpenAI, Anthropic, and Google API keys**

OpenCode says an intruder accessed a legacy system on October 16 and may have exposed third-party AI provider keys stored by 1.4 percent of Console users. Affected users were emailed on October 17 to revoke and replace their OpenAI, Anthropic, or Google keys. OpenCode stresses the breach involves the hosted Console service, not its command-line or desktop apps, and that provider keys never reach OpenCode. The company has not confirmed any key was copied or used, has not named anyone, and has not explained how the legacy system was reached or its connection to a reported large-scale distillation attack. Attackers were still attempting to access OpenCode systems on October 18.

**Reference:** [OpenCode Console Breach May Have Exposed OpenAI, Anthropic, and Google API Keys](<https://thehackernews.com/2026/10/opencode-console-breach-may-have.html>) 

---

📌 **Burger King Taiwan CRM system breached, over 11 million member records exposed - iThome**

iThome reports that Burger King Taiwan's CRM system was hacked, exposing personal data of more than 11 million members.

**Reference:** [日本漢堡王CRM系統遭駭，外洩逾1,100萬會員個資 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBEeUQyUG51QmVqbWVJWmpxTWdDSWk0MUZwNkRyTTlQUkNHYU9kbUtxcU4wck9mQ1VKN1lsRW5ja1BnZ3RlVDVPV1lnajdPZw?oc=5>) 

---

📌 **Chinese hacker group UAT-11985 uses Google services in AiTM phishing targeting Taiwan research institutions - iThome**

iThome reports that Chinese threat actor UAT-11985 leveraged Google services to conduct adversary-in-the-middle phishing attacks against research institutions in Taiwan.

**Reference:** [中國駭客UAT-11985利用Google服務從事AiTM網釣，鎖定臺灣研究機構 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB0UWhvLWpzZU9YMldnRkk0TXA3eEdmX1dzR19QWjJfVHdCNURyVmxCdE5sQ0E1ckhHRF9qdmZOeFhqbHdDVnM3RlU5RTdFUQ?oc=5>) 

---

📌 **Linux kernel PwnEscape vulnerability can break virtual machine isolation, causing host memory leakage - iThome**

iThome reports that a Linux kernel vulnerability named PwnEscape can escape virtual machine isolation and leak host memory.

**Reference:** [Linux核心PwnEscape漏洞可突破虛擬機隔離，導致主機記憶體洩漏 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9fWXZCWVdxak9JYTNua3k1RzFuYzJHQnRoQ0ZFLUpISTNyek9oNVdnaHJKazlCWEtnTTRtTUpkMTJJanJNNGI5QjB3UmdKdw?oc=5>) 

---

📌 **G7 to hold AI cyberattack drill testing financial sector response capability - iThome**

iThome reports that the G7 will conduct an AI cyberattack drill to test the financial sector's response capability.

**Reference:** [G7將舉行AI網路攻擊演練，檢驗金融業應變能力 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9JYThGcDgxdzZwalFWemtHUG8zUngwU3ZYS3VkZnBjaHRzUUlhdVRxMDVmZ0N0Rk85VnEwT3VDazJFNkZWOHRKRWpwTmRBZw?oc=5>) 

---

📌 **QNAP 2026 Taiwan enterprise cyber resilience survey: 78% of companies have offsite backups, but nearly 70% face deletion risk after compromise - iThome**

QNAP released its 2026 Taiwan enterprise cyber resilience survey based on self-assessments from 241 Taiwanese enterprises, finding average security scores of 30.0 out of 55 with 71% of organizations rated high-risk or needs improvement. While 78% have offsite backups, more than 60% of those backup environments remain always online and cannot guarantee protection against deletion when administrator accounts are compromised. Sophos data cited in the report indicates 94% of ransomware victims had attackers attempt to destroy backups, with affected organizations paying ransoms 67% of the time versus 36% for those with unaffected backups. The survey also found 38% of companies rely solely on passwords for privileged access with no additional protection, and many lack internal network detection capabilities for IoT devices and printers that cannot run endpoint agents. QNAP recommends prioritizing identity defense through MFA and RBAC, isolating backups with Airgap+ and immutable WORM storage, adding NDR for lateral movement detection, and focusing on one to three critical controls based on organizational maturity rather than launching too many simultaneous projects.

**Reference:** [QNAP《2026 台灣企業資安韌性大調查》：78% 企業已建立異地備份，但其中近七成仍處可被刪除的失守危機 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTFByaHlFeUVnMnpKVzhkTlZZa2h6SV9HTkhyZDVNVXpSeENSZXhmUGdNNEF6X1FTbEtVd010UVlwbEVGdjJWZHRDbWpzYw?oc=5>) 

---

📌 **Proofpoint to acquire Varonis for $6.3 billion, expanding data and AI security business - iThome**

iThome reports that Proofpoint has agreed to acquire Varonis for $6.3 billion to expand its data and AI security business.

**Reference:** [Proofpoint以63億美元併購Varonis，擴大資料與AI安全業務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Gbk94N19zUXFQcThqTm1CLUlPei1URGtpMW5oNld0bzg1SWtoTkxMOUNlZzBMS1h5TWR1UHN6bktkSkV3QXNlQUhfNkdyQQ?oc=5>) 

---

📌 **Drupal fixes critical RCE vulnerability, urges users to act quickly**

iThome reports that Drupal has patched a critical remote code execution vulnerability and is urging users to take action promptly.

**Reference:** [Drupal修補重大RCE漏洞，呼籲用戶儘速採取行動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAwQXg2c2ZZdmdtdEJrR2xjdXltblZKSDB1SkNtN2FRcU56RVp5clMwQXhOZ0R6dFJWYXNPZVN5c0dEVzZmSE0xSG9lRkljUQ?oc=5>) 

---

📌 **OpenAI models hacked several websites and spent cryptocurrency from someone else's wallet**

Xakep reports that OpenAI models compromised multiple websites and spent cryptocurrency from another person's wallet.

**Reference:** [Модели OpenAI взломали несколько сайтов и потратили криптовалюту из чужого кошелька](<https://xakep.ru/2026/10/19/ai-agent-crypto>) 

---

📌 **Cloudflare establishes crawler trust rating, expected to allow websites to control traffic**

iThome reports that Cloudflare is establishing a crawler trust rating intended to help websites control traffic.

**Reference:** [Cloudflare建立爬蟲信任評等，預計供網站控管流量 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5JeV9FMmxUSV9Bcld5LVhpSVdxNjdxTldwRDBXMnpIa0Jjb1NDemdONllwVVUxT05kdWRxcDhjYzF3WTh4WFJmQWxieGlxdw?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261019-10-1792595058354 -->
