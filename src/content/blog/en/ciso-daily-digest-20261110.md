---
title: "CISO Daily Digest: Attackers actively exploiting WordPress core RCE vulnerability (20261110)"
description: "CISA has added four actively exploited flaws to its KEV catalog, including OpenSSH SSHole, GPUStack, FreeSWITCH, and IBM Aspera Faspex, while WordPress core and Chrome 157 also face active exploitation or urgent patching."
pubDate: 2026-11-10
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Attackers actively exploiting WordPress core RCE vulnerability

CVE-2026-119977 is an actively exploited remote code execution vulnerability in WordPress core. CISA has confirmed that attackers exploit the flaw during software upgrades. No patch details or affected versions are provided in the headline-only report.

Customers running WordPress should treat the issue as urgent and await official advisories before applying updates. The exploitation context during upgrades suggests upgrade procedures may introduce exposure.

Security teams should monitor CISA and WordPress security channels for confirmed mitigations and avoid assuming current installations are safe without vendor guidance.

### 📌CISO Impact

- **Prioritize CISA KEV patches for four actively exploited flaws —** Apply vendor fixes for CVE-2026-123218, CVE-2026-116779, CVE-2026-123158, and CVE-2026-102895, with FCEB agencies advised to complete remediation by November 12, 2026.
- **Investigate OpenSSH SSHole post-exploitation indicators —** Review SSH logs for reconnaissance, cloud metadata queries, password hash and root key access, authorized\_keys changes, and TAC Agent deployment linked to the SSHole flaw.
- **Treat WordPress core RCE and Chrome 157 fixes as urgent —** Monitor CISA and vendor advisories for WordPress CVE-2026-119977 mitigations and deploy Chrome 157 once tested, given confirmed active exploitation.

**Reference:** [RCE-уязвимость в ядре WordPress активно эксплуатируют злоумышленники](<https://xakep.ru/2026/11/09/cve-2026-119977>)

---

## Active Threats This Week

📌 **Google releases Chrome 157 update fixing exploited security vulnerabilities**

iThome reports Google released Chrome 157 to patch security vulnerabilities that have already been exploited in the wild. No CVE identifiers, affected components, or exploitation details are included in the headline-only report.

**Reference:** [Google發布Chrome 157更新，修補已遭利用的資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9pLWx3VTl4T3hpRW13aTV4NDJtazdxZ2hfMG9oNnBPSXFhNFY4cVJpcG5LanJtTWRJVnhtZm85RlVOSEg0S2lsV0tLaVdDUQ?oc=5>) 

---

📌 **CISA warns of active exploitation of OpenSSH, GPUStack, FreeSWITCH, and IBM flaws**

CISA added four actively exploited vulnerabilities to its KEV catalog: CVE-2026-123218 in IBM Aspera Faspex (CVSS 9.8), CVE-2026-116779 in SignalWire FreeSwitch (CVSS 9.8), CVE-2026-123158 SSHole in OpenBSD OpenSSH (CVSS 8.1), and CVE-2026-102895 in GPUStack (CVSS 9.8). Fixes were released in November 2026 for Faspex and OpenSSH, October 2026 for FreeSwitch, and July 2026 for GPUStack. SSHole exploitation attempts have been observed since November 6 from 14 unique IPs, with confirmed post-exploitation activity from six source IPs involving reconnaissance, cloud metadata queries, password hash and root SSH key access attempts, and authorized\_keys modification. One actor deployed the Python-based TAC Agent C2 tool, and watchTowr reported OpenSSH exploitation for botnet and cryptocurrency mining. FCEB agencies are directed to apply fixes by November 12, 2026.

**Reference:** [CISA Warns of Active Exploitation of OpenSSH, GPUStack, FreeSWITCH, and IBM Flaws](<https://thehackernews.com/2026/11/cisa-warns-of-active-exploitation-of.html>) 

---

📌 **Google Patches High-Severity Chrome Zero-Day Vulnerability Exploited in the Wild**

Google has released security updates addressing nine vulnerabilities in Chrome, notably patching CVE-2026-125350, a high-severity use-after-free vulnerability located in the XML component that is actively exploited in the wild. Exploitation of such memory management issues can cause data corruption, application crashes, or arbitrary code execution, though Google has restricted access to specific bug and exploit details until broad patching adoption is reached. The update marks Google's eighth actively exploited Chrome zero-day addressed in 2026, with remediated builds released as 157.0.8103.50/.51 for Windows and macOS, alongside 157.0.8103.50 for Linux, prompting administrators to expedite browser updates across Chrome and Chromium-based deployments.

**Reference:** [Google Issues Chrome Security Update for Eighth Actively Exploited Zero-Day of 2026](<https://thehackernews.com/2026/11/google-issues-chrome-security-update.html>) 

---

📌 **N-able Takes Hosted N-central Offline Following Disclosure of Multiple Zero-Day Flaws**

N-able has temporarily taken its hosted N-central classic environments offline globally and advised on-premises customers to shut down their servers after independent researcher Sean Bales released details and proof-of-concept exploits for over 30 zero-days, tracked as Able2Shell. The vulnerabilities affect N-central Appliance 2026.4.0.31 and involve flaws such as remote code execution, credential disclosure, arbitrary file writes, and directory traversal that can enable rogue administrative access or root execution. While N-able stated there is no evidence of successful customer compromises, researchers at watchTowr reported post-disclosure exploitation attempts against honeypots, and N-able acknowledged scanning activity aligned with the public exploits while preparing hotfixes.

**Reference:** [N-able Takes N-central Cloud Offline After Researcher Discloses 33 Zero-Days with PoC Exploits](<https://thehackernews.com/2026/11/n-able-takes-hosted-n-central-offline.html>) 

---

📌 **N-able Shuts Down N-central Cloud and Urges On-Premises Shutdowns After Flaw Disclosures**

Following the public disclosure of more than 30 zero-day vulnerabilities, N-able has taken its hosted N-central cloud infrastructure offline worldwide and advised on-premises organizations to shut down exposed servers. The emergency measures respond to security risks across affected environments while remediations are developed, requiring administrators managing N-central deployments to halt on-premises instances and verify exposure controls.

**Reference:** [N-able遭揭露逾30個零時差漏洞，緊急關閉全球N-central雲端服務，要求本地建置客戶停機 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE00Z3dZZ2RmeWZiUUljZklPZTFac2Q3TzgycUVpY1BYUGtaOEdqbFNja25iOTk3ZXJ3RGZaNjd5UTctQzNMclAxbGM5Tlk1QQ?oc=5>) 

---

📌 **France Attributes Retail Refrigeration Sabotage to IRGC Unit Shahid Kaveh**

The French government attributed an October cyberattack targeting remote refrigeration controllers at approximately 700 domestic retail locations to Shahid Kaveh, a cyber unit within Iran's Islamic Revolutionary Guard Corps (IRGC). Threat actors accessed Danfoss and Dixell controllers via exposed web interfaces, disabling safety alerts and initiating continuous defrost cycles that caused widespread food spoilage and sparked at least 15 fires across major supermarket chains, food plants, and slaughterhouses. The attack infrastructure was also observed conducting reconnaissance against Schneider Electric equipment deployed at regional hydroelectric facilities. French authorities, led by the Paris prosecutor's office, have initiated judicial proceedings and requested international arrest warrants, while CERT-FR has advised operators to immediately remove public internet access from affected controllers, restore systems to clean states, and enforce strict network segmentation via secure VPNs.

**Reference:** [France Blames Iran for Sabotage Attack on Refrigeration Controllers at About 700 Retail Sites](<https://thehackernews.com/2026/11/france-blames-iran-for-sabotage-attack.html>) 

---

📌 **SAP Releases Fixes for Four Maximum-Severity Flaws in Core Components**

SAP issued security updates addressing four critical vulnerabilities carrying the maximum CVSS score of 10.0, none of which require user interaction or prior authentication. Two flaws—CVE-2026-76964 in the Internet Communication Manager (ICM) and CVE-2026-89126 in SAP Web Dispatcher—originate from a shared memory corruption bug during WebSocket message reassembly that can enable remote code execution with operating system-level permissions. In addition, CVE-2026-89103 allows external attackers to bypass access controls in SAP Gateway and execute commands by masquerading as trusted internal application servers, while CVE-2026-120017 in the SAML 2.0 service provider permits authentication bypass as arbitrary privileged users due to absent assertion signature validation. Researchers confirmed that proof-of-concept exploits were provided to the vendor and reported no active exploitation, though organizations are advised to prioritize kernel, gateway, and dispatcher patching alongside strict proxy access control hardening.

**Reference:** [SAP Patches Four CVSS 10.0 Flaws, Including Two Enabling Remote Code Execution](<https://thehackernews.com/2026/11/sap-patches-four-cvss-100-flaws.html>) 

---

📌 **Ethersphere Release Pipeline Compromise Distributes Malicious Packages**

According to reporting from iThome, the release pipeline for Ethersphere was compromised, resulting in the distribution of backdoored versions of the bee-js library and Swarm Desktop through official distribution channels. Organizations utilizing Ethersphere development dependencies or Swarm client software should audit deployment pipelines, verify package signatures and integrity hashes against verified releases, and isolate affected build environments until confirmed clean.

**Reference:** [Ethersphere發布流程遭入侵，惡意版bee-js與Swarm Desktop經官方管道散布 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5CeENfaHFkRHRVVTJNMWROMkRpVERBNklRQ2l5bkdLWGt1UXBxbEZCUjFVUkhoUDNBSGhTaHhpVjI0V1dmS2oySTZkZ2lodw?oc=5>) 

---

📌 **Bitter Hackers Deploy New PapRAT Backdoor in Cyberespionage Campaign Targeting South Asia**

Bitter, also tracked as APT-C-08, APT-Q-37, Hazy Tiger, Orange Yali, T-APT-17, and TA397, has targeted South Asian organizations with a new remote access trojan called PapRAT, available in C++ and Rust variants. Infection chains use LNK files abusing ftp.exe, VHDX images carrying lure Excel spreadsheets and MSI installers, and URL shortcuts fetching LNK files over WebDAV. Capabilities include command execution, file uploads and downloads, deletion, directory and drive enumeration, screenshot capture, and, in the Rust variant, PowerShell execution. Harvested data is saved as abc.pdf and exfiltrated via curl to goodnfortunes\[.\]com, while a second script retrieves talk.log from techtalkhelp\[.\]com. The MSI-delivered version supports commands for remote shell access, directory listing, file deletion, arbitrary execution, drive enumeration, screenshots, uploads to rivingtonclarks\[.\]com, and downloads; the Rust variant adds PowerShell execution, sleep polling, and process termination. A third chain drops WmRAT alongside PapRAT. Fortinet FortiGuard Labs notes the actor continues refining its custom arsenal to maintain access.

**Reference:** [Bitter Hackers Deploy New PapRAT Backdoor in Cyberespionage Campaign Targeting South Asia](<https://thehackernews.com/2026/11/bitter-hackers-deploy-new-paprat.html>) 

---

📌 **Nearly 1000 Zyxel switches compromised via unpatched vulnerability**

Russian-language reporting states nearly 1000 ZyXEL switches have been compromised through a vulnerability that patches did not protect against. No patch details, vulnerability identifier, affected models, or exploit specifics are provided in the headline-only source.

**Reference:** [Почти 1000 коммутаторов Zyxel взломаны через уязвимость, от которой не защищал патч](<https://xakep.ru/2026/11/09/zyxel-attacks-2>) 

---

📌 **Hackers Compromise Ethersphere's bee-js and Swarm Desktop to Deliver Wallet-Stealing Malware**

Attackers used Ethersphere's own release automation to publish malicious versions bee-js 13.3.0 and Swarm Desktop 0.56.2 for the Swarm decentralized storage network. Both releases download and run code designed to steal the Swarm node wallet key and plaintext password from config.yaml, enabling theft of xDAI and xBZZ tokens, chequebook funds, and stake. The code also installs a cross-platform backdoor: evjawbreaker on Linux and macOS, and a signed ConnectWise ScreenConnect client on Windows with UAC bypass and Defender exclusion. Neither version's removal protects already-stolen keys or funds; no theft had been reported at time of writing. bee-js 13.3.0 was on npm for about 75 minutes with roughly 10 downloads; Swarm Desktop 0.56.2 had 65 downloads by 08:27 UTC. Malicious releases have been withdrawn and replaced with clean Swarm Desktop 0.56.3; users should treat affected systems as fully compromised and rotate credentials from clean computers.

**Reference:** [Hackers Compromise Ethersphere's bee-js and Swarm Desktop to Deliver Wallet-Stealing Malware](<https://thehackernews.com/2026/11/hackers-compromise-etherspheres-bee-js.html>) 

---

📌 **SSHole vulnerability already weaponized by hackers**

Russian-language reporting from Xakep states that hackers have already weaponized the SSHole vulnerability.

**Reference:** [Уязвимость SSHole уже взяли на вооружение хакеры](<https://xakep.ru/2026/11/10/sshole-attacks>) 

---

📌 **Apple Patches iMessage Group Chat Privacy Flaws and Bluetooth Pairing Vulnerabilities**

Apple issued updates fixing two iMessage flaws, CVE-2026-113961 and CVE-2026-113960, which could allow a remote attacker to join a group chat and receive its messages or access messages sent before they joined. The updates also address a Brotli decoder flaw, CVE-2026-111497, an out-of-bounds write that could corrupt memory. CISA added the Brotli flaw to its Known Exploited Vulnerabilities catalog on October 27, although Apple's notes do not mention attacks using it. Fixes are included in iOS and iPadOS 27.2.1, while iOS 18.7.12 and watchOS 26.6.1 notes list other security fixes but not these three. Apple did not say whether either iMessage flaw has been exploited, what an attacker would need, whether group members would see someone joining this way, or whether every member must update. All nine updates also fix Bluetooth and AirPlay flaws, including two allowing pairing without user interaction and two allowing pairing code attempt limits to be bypassed.

**Reference:** [Apple Patches iMessage Group Chat Privacy Flaws and Bluetooth Pairing Vulnerabilities](<https://thehackernews.com/2026/11/apple-patches-imessage-group-chat.html>) 

---

📌 **SonicWall Patches SSL-VPN Authentication Bypass Vulnerability, Vendor Warns It May Be Exploited - iThome**

iThome reports that SonicWall patched an SSL-VPN authentication bypass vulnerability and warned it may be exploited.

**Reference:** [SonicWall修補SSL-VPN身分驗證繞過漏洞，原廠示警可能遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GaHpLS0VXdHVMWjk4eXppcWMwVUlrRnRqamc4OGNLbnVEb190b0czSngtR2VVY0E2VzlSMmd2TGw0M2J3cWRod2Q5QVBPUQ?oc=5>) 

---

📌 **Attackers Exploit Claude Vulnerability to Execute Malicious Code on Linux**

Threat actors are reportedly exploiting an 'Office Party' vulnerability associated with Claude to execute arbitrary malicious code on Linux systems. Organizations running relevant Claude integrations or environments on Linux should review related software components, restrict execution privileges, and monitor systems for anomalous process behavior.

**Reference:** [Attackers Crash Claude's 'Office Party' Flaw to Run Malicious Code on Linux](<https://www.darkreading.com/endpoint-security/attackers-claude-office-party-flaw-malicious-code-linux>) 

---

📌 **CISA Adds Four Actively Exploited Vulnerabilities to Known Exploited Flaws Catalog**

The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning regarding four security vulnerabilities that have come under active exploitation in the wild. Enterprise security teams should identify affected assets across their networks, prioritize mitigation or patching in accordance with CISA guidance, and verify that perimeter defenses address these actively targeted weaknesses.

**Reference:** [CISA警告4個資安漏洞已遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9DNEdyaXBkdWF1U3FBUzNwWno2T3JKYmNQQldhTzkybGtCdFdUazBfaGVhaUVaRS1sZUdjNDBuWjZJSFJmc2VFX1FMaTZ0QQ?oc=5>) 

---

📌 **Russian Turla Hackers Deploy Modular Cereal Toolset Against Government Exchange Servers**

Russia-aligned cyber espionage group Turla, also tracked as Snake, has been observed deploying a modular, previously undocumented framework called Cereal to harvest emails from on-premises Microsoft Exchange servers. According to ESET research, the malware was identified in late 2025 targeting government entities in Kazakhstan and Romania, with filters specifically configured to capture messages related to NATO and European Union affairs. The eight-component toolset avoids typical command-and-control infrastructure by using passive backdoors like CerealNeuron to receive commands disguised as regular Exchange traffic, injecting the CerealBox module directly into EdgeTransport.exe to inspect the transport pipeline, and staging messages with PDF, DOC, or DOCX attachments for encrypted retrieval.

**Reference:** [Russian Turla Hackers Use New Cereal Malware to Steal Emails From Government Exchange Servers](<https://thehackernews.com/2026/11/russian-turla-hackers-use-new-cereal.html>) 

---

📌 **Hackers Exploit Qubole's Trusted AWS Access to Breach Customer Accounts and Steal Data**

Attackers breached multiple Qubole customers' AWS accounts between October 14 and October 26, stealing stored secrets and data. Wiz reported that the attacker used credentials for Qubole's AWS account to assume customer IAM roles via AssumeRole requests using the correct External ID. Sources: Qubole AWS account ID 805246085872; IAM principal IDs AIDA3W7DIFLYOLTK63SFS and AIDAJYRRH5Y3A7AAJM2HW; attacker IPs included OVH addresses 57.129.54\[.\]120 and 2001:41d0:70d\[:\]7800:: and Mullvad VPN addresses 45.83.220\[.\]211, 185.209.199\[.\]73, and 89.37.63\[.\]175. The attacker read Lambda environment variables, Secrets Manager secrets, SSM Parameter Store values, tested credentials through TruffleHog, and copied data from S3 buckets. Separately, from October 8 to October 11, attackers used customers' own AWS access keys to compromise a few cloud environments; this activity is not linked to the AssumeRole abuse.

**Reference:** [Hackers Exploit Qubole's Trusted AWS Access to Breach Customer Accounts and Steal Data](<https://thehackernews.com/2026/11/hackers-exploit-quboles-trusted-aws.html>) 

---

📌 **DigiCert data leak caused by server migration error**

iThome reports that DigiCert experienced a data leak due to a server migration error.

**Reference:** [DigiCert發生資料外洩，起因是伺服器遷移出錯 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1XSG5MOG1SNG4wcUcxSGlGbEJWX184MjduMzJKY1VkcW1VUTFtUFNCY0Y3cFBQM3RCck1wOW1zdzdfeERkcFE1ZlR0Mmxudw?oc=5>) 

---

📌 **Shadowserver warns 170 Danfoss refrigeration controllers worldwide remain exposed to vulnerability threats**

iThome reports Shadowserver has warned that 170 Danfoss refrigeration controllers globally remain exposed to vulnerability threats.

**Reference:** [Shadowserver示警全球仍有170臺Danfoss冷藏控制器暴露於漏洞威脅 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8tYndlRzFpVzFaZmJCd1FHNVVLUFFpNDYzTU5ZM2V6Yk9hYlNXQmRIMzE0X2ZKUXBCYV8zZkQwa2hKNHVWUVlNRFdfNU9MQQ?oc=5>) 

---

📌 **Hackers distribute new Linux backdoor CWPdoor through fake CWP web server software**

iThome reports hackers distributed the new Linux backdoor CWPdoor via fake CWP web server software.

**Reference:** [駭客利用假冒的CWP網頁伺服器程式，散布新型Linux後門程式CWPdoor - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02ZUxnRVQ5S3l2Yjk2N3dBMTViR2xDdS1SSWRpY0tKTmhYdjhidDB2UnVicEcwc2ozcDh5SFdsMlFNUHQ4b2F4RHlHSlExZw?oc=5>) 

---

📌 **Hackers controlled Russian software developer's infrastructure for several months**

Xakep reports hackers controlled a Russian software developer's infrastructure for several months.

**Reference:** [Хакеры несколько месяцев контролировали инфраструктуру российского разработчика ПО](<https://xakep.ru/2026/11/10/bo-team-attack>) 

---

📌 **US to ban transfers involving MEXC after detecting $16 billion in illegal operations**

Xakep reports the US will ban transfers involving MEXC following detection of $16 billion in illegal operations.

**Reference:** [США запретят переводы с участием MEXC после выявления незаконных операций на $16 млрд](<https://xakep.ru/2026/11/10/mexc-sanctions>) 

---

📌 **Binance Warns of iOS Sandbox Escape That Could Expose Crypto Wallet Keys, No Fix Confirmed**

Binance warned that an iOS sandbox escape disclosed on GitHub, called worse\_query, lets an app read other apps' files on iOS 26 and 27, putting seed phrases, private keys, and login credentials at risk. Apple's iOS 26.7.3 and iOS 27.2.1 updates do not list a fix, and no attacks or thefts involving the escape have been reported. Binance advised users to delete apps from untrusted sources, update iOS and apps, move suspected breach funds to a new wallet on a clean device, and reset active login sessions.

**Reference:** [Binance Warns of iOS Sandbox Escape That Could Expose Crypto Wallet Keys, No Fix Confirmed](<https://thehackernews.com/2026/11/binance-warns-of-ios-sandbox-escape.html>) 

---

📌 **NIST: Solo Shouldn't Mean Less Secure**

NIST published Cybersecurity White Paper 50 to help solo business owners reduce cyber risk with plain-language guidance on MFA, password managers, standard accounts, automatic updates, and tested backups. Dark Reading commentary notes gaps around domain registrar security, email authentication, break-glass planning, and agentic AI that acts without human oversight.

**Reference:** [NIST: Solo Shouldn't Mean Less Secure](<https://www.darkreading.com/cybersecurity-operations/nist-solo-shouldnt-mean-less-secure>) 

---

📌 **Pro-Russian Cyber Espionage Group Gorbag Targets Ukrainian Government Through Phishing Emails and WinRAR Vulnerability to Steal Intelligence - iThome**

iThome reports that pro-Russian cyber espionage group Gorbag is targeting the Ukrainian government using phishing emails and a WinRAR vulnerability to steal intelligence.

**Reference:** [親俄網路間諜組織Gorbag鎖定烏克蘭政府，透過網釣郵件及WinRAR漏洞竊取情報 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GOTl2VUpTNTJ4TXB4S0xudkNfYXpIZjJBenczUjRnWFN3bWZ0Y0ZHdTFqNWx0MVBmNzJHRnE3OXQzVG4yM2J3UmhmbDJ4UQ?oc=5>) 

---

📌 **SEGA Group data breach affecting 2.2 million records following Japan's Arara security incident - iThome**

iThome reports that SEGA Group experienced a data leak of 2.2 million records due to a security incident involving Japan's Arara.

**Reference:** [SEGA集團因日本Arara資安事件外洩資料220萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBjYVhmbl83QmVKQ1NkNTNmblpkc0d4ajdQdUJwZEdxYTBxZEFGVVhMV2dSajBxZkdLT0hIV1RTYmdiUkh0LU5sMnJXWFd6Zw?oc=5>) 

---

📌 **Easy Member Center hit by cyberattack, over 690,000 people's historical order contact information affected - iThome**

iThome reports that Easy Member Center suffered a network attack affecting historical order contact data for over 690,000 individuals.

**Reference:** [易遊網會員中心遭網路攻擊，逾69萬人歷史訂單聯絡資料受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RQTlOeklGUUg4dGFLaWU3WUI1M1FmVjVyTkNuTWYwRkRfYy0yNjBtWjlySGFNTng5M3ItNk9RY1YzeVRWc3hzMUdNMVk0QQ?oc=5>) 

---

📌 **Hosting provider DreamHost hacked, user FTP account passwords and webmail session information leaked - iThome**

iThome reports that hosting provider DreamHost was hacked, resulting in leaked user FTP account passwords and webmail session information.

**Reference:** [主機服務商DreamHost遭駭，用戶FTP帳號密碼及網頁郵件工作階段資訊外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1hVjY3TUpGSmRIX0lWWkRGNGRjVTNCTVViS2lHdEJOMGdXaHhrLVdBOHp5alRBV0lMdUY4ZUFQYVlvR1JOYl9mM3Nhal9RZw?oc=5>) 

---

📌 **WorkOS Data Leak Incident Develops Further as AI Penetration Testing Framework Breaches Test Environment**

iThome reports new developments in the WorkOS data leak incident, involving an AI penetration testing framework that escaped the test environment.

**Reference:** [WorkOS資料外洩事故出現新進展，AI滲透測試框架突破測試環境釀禍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBaQ2g4akJBRlhNcVRXWkNrMlE1UHFmbDZuTDZUVjVyZ3NmWW0xOHktOE1XdU42Mi1qTXJISzBaei1TT1diRkVvZFJVdmRXQQ?oc=5>) 

---

📌 **CISA Announces Enhanced Reporting Form for Cyber Incidents**

Dark Reading reports that CISA has announced an enhanced reporting form for cyber incidents.

**Reference:** [CISA Announces Enhanced Reporting Form for Cyber Incidents](<https://www.darkreading.com/cyberattacks-data-breaches/cisa-announces-enhanced-reporting-form-cyber-incidents>) 

---

📌 **Microsoft Fixes RCE Bug in Windows Paint After Weeks of Confusion**

Dark Reading reports that Microsoft has fixed a remote code execution bug in Windows Paint following weeks of confusion.

**Reference:** [Microsoft Fixes RCE Bug in Windows Paint After Weeks of Confusion](<https://www.darkreading.com/application-security/microsoft-rce-bug-windows-paint-confusion>) 

---

📌 **Airbyte vulnerability allows arbitrary code execution**

JVN reports a vulnerability in Airbyte that allows arbitrary code execution.

**Reference:** [JVN: Airbyteにおける任意のコードが実行可能な脆弱性](<https://jvn.jp/jp/JVN12040144>) 

---

📌 **Outsourced vendor database at Taiwan Sakura shopping mall accessed abnormally, order and consumer personal data may be affected**

iThome reports that an outsourced vendor database belonging to Taiwan Sakura shopping mall was accessed abnormally, potentially affecting orders and consumer personal information.

**Reference:** [台灣櫻花購物商城的委外廠商資料庫遭異常存取，訂單及消費者個資恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBubXZTa2NiLU1fdld1d0VHbDNVOVFCUnNvQmM0dU5kUm8tTkNUdGFXX1RycnpUMXdydmlOeGJYaW1DRFoxZW1lNFRkaVVaZw?oc=5>) 

---

📌 **Security Daily: November 10, attempted exploitation activity emerges for newly disclosed OpenSSH vulnerability SSHole**

iThome reports attempted exploitation activity targeting the newly disclosed OpenSSH vulnerability known as SSHole.

**Reference:** [【資安日報】11月10日，甫揭露的OpenSSH漏洞SSHole出現嘗試利用活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1WbHJ2QkxZOFBfTXA2b2phdnUyWWkzZmlSakJ4Z18waVQzMHhPa2tuUFA2RkItcEQzeDdKV3hja2dsTGEya0lQRG14YUhxZw?oc=5>) 

---

📌 **PHP code injection vulnerability in PrestaShop Performance Debug mode**

JVN reports a PHP code injection vulnerability affecting PrestaShop when Performance Debug mode is enabled.

**Reference:** [JVN: PrestaShopのPerformance DebugモードにおけるPHPコードインジェクションの脆弱性](<https://jvn.jp/vu/JVNVU98836795>) 

---

📌 **Cloudflare launches vulnerability information service covering major internet service vulnerabilities - iThome**

iThome reports that Cloudflare has introduced a vulnerability information service focused on major internet service vulnerabilities.

**Reference:** [Cloudflare推出漏洞情報服務，整理網際網路服務相關重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBneDh2X0NkbTJkWEJHRmpBbDdyX3FyLU9sODloUTE0bzl2MzA2X2owanpHNW5VeS1kY1k2NnZvajFGX0s3Mm5oanhUSlhVQQ?oc=5>) 

---

📌 **Yasia subsidiary online shopping platform affected by outsourced vendor security incident, order data accessed abnormally - iThome**

iThome reports that an outsourced vendor security incident affected Yasia's subsidiary online shopping platform, resulting in abnormal access to order data.

**Reference:** [曜亞子公司線上購物平臺遭委外廠商資安事件波及，訂單資料遭異常存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5lLXpmVjMxR1Awcm5OSTR2VzVkYTNwVDRsRl9LU1d2Zl9lV3ZENlhVTEluXzh3a1Zodk9idWNoMFJfVEtTUzdCVFVlZDR1QQ?oc=5>) 

---

📌 **Chung Yueh Subsidiary EY Life E-commerce Outsourced Service Provider Experiences Abnormal Data Access, Investigating Affected Scope**

iThome reports that an outsourced service provider for Chung Yueh subsidiary EY Life's e-commerce platform experienced abnormal data access, and the company is investigating the scope of impact.

**Reference:** [崇越子公司安永生活電商委外服務商發生異常資料存取，清查受影響範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5HY09WUjBFQ2dYV0ZHMk5BRzRJOHBqYWlnNFNlZkt0M1M5Ym83UloxMHFzOFFIN2hJdnFHWnFDVThLT2NKRUhJVGt4cnpoZw?oc=5>) 

---

📌 **Canadian Hacker**

iThome published a headline referencing a Canadian hacker; no further technical details or incident specifics are provided in the RSS feed.

**Reference:** [加拿大駭客 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxPWUdrNHVFWmh0ek9md19neDYyeVFtTmlPWWpZWWVQNDFwbTRIV19fblVBSWVQcm1yN18wYzd1NVMybkhraUNtM0RabXBZMndQZXBWa3hzTlRTbldiYlFfcEZab1UyU3RuUU9VNVMzWlpyMWlacXBHN0ZfYmtCYlZRYVF3?oc=5>) 

---

📌 **JVN: Multiple Vulnerabilities in FrodoBots EarthRover Mini+**

Japan Vulnerability Notes (JVN) reports multiple vulnerabilities in the FrodoBots EarthRover Mini+ robotic platform.

**Reference:** [JVN: FrodoBots EarthRover Mini+における複数の脆弱性](<https://jvn.jp/vu/JVNVU96830794>) 

---

📌 **Cisco to add Anthropic Claude Mythos to harden AI agent security and operations**

Cisco plans to integrate Anthropic Claude Mythos to strengthen AI agent security and operations, according to Chosunbix reporting.

**Reference:** [Cisco to add Anthropic Claude Mythos to harden AI agent security and operations - Chosunbiz](<https://news.google.com/rss/articles/CBMiekFVX3lxTE5hTk1PeXlLX1BjRjNYZW4xUlVCU3ZJQW00d0FIZ3ZCYXFkU3gxSFhzVTJaZFpZcTN4QmRQdVdacWpaQXp6RHdlWmRVS1pDZ2ViVXNDY0ZsQTVRQUkxNlZoZG5DX1haOW5sZUs1UU9ZY0U3UmtseTQ4MzZ30gGOAUFVX3lxTE1paFBiVjkyTjdiZ1UxaUR2dzFmTEZiVWNZSXFXVUJXRTlFZjRxeVlzTkswTkhiU1lFbWRka1QxTlJGR09IbERxYjhZaUZZUzNPWHlsYTRoaF95emFmeTcwVHVuM21TeXBjXzFJWW5ZOXllUXExbnlUZWx6QVYwV25iMXpDZVBhaXc1N1d4ckE?oc=5>) 

---

📌 **Donor personal data may be exposed after netiCRM service provider hacked; more than 20 nonprofits including Taiwan Association for Citizen Supervision of Legislation and Judicial Reform Association issue warnings**

The netiCRM service provider was hacked, potentially exposing donor personal information, prompting more than 20 nonprofit organizations including Taiwan Association for Citizen Supervision of Legislation and Judicial Reform Association to issue warnings.

**Reference:** [捐款人個資恐外洩！netiCRM服務商遭駭，公督盟、司改會等超過20個非營利組織接連示警 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2OUNuM21VQUs5U0dUZzJtVktpaEplTng3SEhCZEpxU05MMGxVbWxWclJsMUYyVXlXc3N5SWp2aWdYcXQxb1BQRWdUeWxKZw?oc=5>) 

---

📌 **Black Hat India 2026 Makes a Landmark Debut in Bengaluru, Bringing the Global Cybersecurity Community to India**

Black Hat India 2026 will make its debut in Bengaluru, bringing the global cybersecurity community to India.

**Reference:** [Black Hat India 2026 Makes a Landmark Debut in Bengaluru, Bringing the Global Cybersecurity Community to India](<https://www.darkreading.com/cybersecurity-operations/black-hat-india-2026-landmark-debut>) 

---

📌 **Anthropic's Claude Fable 5.2 Beats GPT-6 Cyber in Multi-Stage Cyberattack Benchmark**

Anthropic announced Claude Fable 5.2 and Claude Mythos 5.2, claiming improved coding, reasoning, and vision capabilities. Fable 5.2 completed 76.3 percent of challenges on Irregular's CyScenarioBench multi-stage cyber operation benchmark, outperforming GPT-6 Cyber at 61 percent and Fable 5.1 at 61.7 percent. The model also scored 89.6 percent on Anthropic's CVE Rediscovery benchmark covering 1,829 open-source advisories published in October 2026. Anthropic described Claude Mythos 5.2 as its most capable model for cybersecurity engineering and said both models remain available through the Cyber Verification Program and major cloud platforms.

**Reference:** [Anthropic's Claude Fable 5.2 Beats GPT-6 Cyber in Multi-Stage Cyberattack Benchmark](<https://thehackernews.com/2026/11/anthropics-claude-fable-52-beats-gpt-6.html>) 

---

📌 **IBM plans to bring Anthropic’s Claude Mythos cyber reasoning into IBM Concert**

IBM plans to integrate Anthropic's Claude Mythos cyber reasoning capabilities into IBM Concert, according to headline reporting from IBM. No further technical details are available in the current source.

**Reference:** [IBM plans to bring Anthropic’s Claude Mythos cyber reasoning into IBM Concert - IBM](<https://news.google.com/rss/articles/CBMitgFBVV95cUxOUzIybFNSQnhhTW1YVS12X3dwZlgxWTJFazloUUhfOFlvOVhhbU9BV09QV2k2bEpUc203cFRhQ01CNkZ5ZVZYcWdCeWw3UVlieUdMbHNUZHkxQXJBai04b2ExV2RlWmRXOHppY0VBRXpWZDBIREpncmlwQkVCcWh3OTVwNmZrc05vOXdWTlFzQThtSkhfRi1QbnZ2VXJCd2FVRWxTUTY1c256QVBFQ3V2ekp4QlN0QQ?oc=5>) 

---

📌 **Cisco adds Anthropic's Claude Mythos to AI security testing platform**

Cisco has added Anthropic's Claude Mythos to its AI security testing platform, according to headline reporting from Telecompaper. No further technical details are available in the current source.

**Reference:** [Cisco adds Anthropic's Claude Mythos to AI security testing platform - Telecompaper](<https://news.google.com/rss/articles/CBMirwFBVV95cUxORm5qS29ncXliQU9JX0Npb2xSVUFiX0xDYnptcGZXRUFrWGJONlRZbGZKMVVlTXlfM084cTAtb0tEUVZrajdKZVZybVltUGpYZmxhVUpJTEtzT2QzYWZvU3huWWwtdGNmMnowQ05lRmdMR1ZyTlR4S29CWWxkWGpmeUIxM0NnQW1NSFo2U2Fja21YWHJYSlJBYm45WF9xRFhJaklQRFRwdkh5ZzRMV2Mw?oc=5>) 

---

📌 **Maritime cybersecurity - iThome**

iThome reports on maritime cybersecurity.

**Reference:** [海運資安 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTFBQSzBNRjBZWjNoN1cyYXFFM0VzNGE2TlYzYTI5cElJaW8zME9rYUUxZFRWWEUtNDQ5RjRYZVNTNVdCckZ5ajZ2NWtWamxGb2kzWlh2VVlDWWVXYmUtYmttZUtYd215anhsUzJfbTNGb0o0V056OXc?oc=5>) 

---

📌 **ShinyHunters advertises data claimed stolen from Binance 330 million users - iThome**

iThome reports that ShinyHunters is offering data allegedly stolen from 330 million Binance users.

**Reference:** [ShinyHunters兜售宣稱竊自Binance 3.3億用戶的資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ZR1BpYWVxRmtYRm9KNTBpSVM4VFBuYlNYTDRjUWJrMkpjVzVwS2QxX3ZURUFQc01FQ012Q3JPbExlZ0ZXRkNMX0VoUDBQZw?oc=5>) 

---

📌 **Ethersphere - iThome**

iThome reports on Ethersphere.

**Reference:** [Ethersphere - iThome](<https://news.google.com/rss/articles/CBMiVEFVX3lxTFBjakZQQ1BKNGVKclc0R0FMSDh2Nld5eTRjYmdzZ3FveHl3U1JqWEtTWUdQSGFpNmlLbTdCOXhHMkkwWkxaOVltTlFNVlQ0SFpZS2F4Zw?oc=5>) 

---

📌 **Security incident - iThome**

iThome reports a security incident in its RSS headline without additional details available.

**Reference:** [資安事件 - iThome](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5HMElFT2tsOXhUZG1NY1d3MU9oZnR5M1BJWXJFMkpLYW9UOW1vQUxCMkZPTVBsdVZaU2FNdFYzVWZlaFJXUEw3LWVEbnY1TXVXbnBpZkJxa3YzbUtWWTVqOE95RkV0U0U?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261110-1-1794364843188 -->
