---
title: "CISO Daily Digest: Hackers compromise 1Password employee GitHub account, steal source code, plant malicious code to download customer data (20261126)"
description: "Attackers stole 1Password source code through a compromised employee GitHub account and planted code to download customer data; Drupal disclosed an actively exploited critical site takeover flaw with patches for supported versions; and Push Security highlighted DOMDIFFER as a leading phishing kit using DOM mirroring and multi-channel lures to bypass standard security controls."
pubDate: 2026-11-26
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Hackers compromise 1Password employee GitHub account, steal source code, plant malicious code to download customer data

iThome reports attackers compromised a 1Password employee GitHub account and exfiltrated company source code. The intruders planted malicious code designed to download customer data. The extent of any customer data accessed remains unspecified by the report.

### 📌CISO Impact

- **Protect source-code and supplier accounts —** Treat developer and vendor accounts as high-value targets; enforce phishing-resistant MFA, review OAuth and personal access token grants, and monitor source repositories for unauthorized changes after any supplier compromise.
- **Patch Drupal and harden installers —** Update Drupal core to 11.4.14, 11.3.23, or 10.6.23 where applicable, run update.php, disable or protect install.php, and audit user 1 accounts for unexpected access or email changes.
- **Strengthen phishing and browser defenses —** Complement email filtering with browser isolation, URL reputation, and passkeys where enforceable, while training users to recognize calendar, chat, QR code, and device-code lures that bypass traditional gateways.

**Reference:** [駭客入侵1Password員工GitHub帳號竊走公司原始碼，植入惡意程式碼下載客戶資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE53WGN0YUtVUnNDZnN3X1VHaUNxNjQtWUVMWWt2Z2tmV09mSDBQYUlScWUyNW5ScGpZbEdzaVptUGNkUTVPdUFKaVhuNmFxQQ?oc=5>)

---

## Active Threats This Week

📌 **Drupal warns of new highly critical site takeover vulnerability under active exploitation**

Drupal reports a highly critical core flaw, CVE-2026-136716, tied to improper checking for unusual conditions and related to CVE-2026-132165, is under active exploitation. Sites left with installer access after the prior fix may be compromised, while secured installers are unaffected. Patches are available in Drupal 11.4.14, 11.3.23, and 10.6.23, with administrators urged to check logs, verify user 1 email control, reset passwords, run update.php, and secure install.php.

**Reference:** [Drupal Warns of New Highly Critical Site Takeover Vulnerability Under Active Exploitation](<https://thehackernews.com/2026/11/drupal-warns-of-new-highly-critical.html>) 

---

📌 **Most Wanted: The phishing kits and techniques getting past security controls**

Push Security research describes DOMDIFFER, an adversary-in-the-middle phishing kit targeting corporate Google and Microsoft accounts that led breakthrough rates from August to October 2026. The kit uses DOM mirroring, fake calendar and Google Voice lures, bot checks, and platform-specific payloads such as device code phishing and remote access tools to bypass email, web gateway, and safe browsing controls.

**Reference:** [Most Wanted: The Phishing Kits and Techniques Getting Past Security Controls](<https://thehackernews.com/2026/11/most-wanted-phishing-kits-and.html>) 

---

📌 **Hackers Exploit 10 Vulnerabilities Across Mitel, Juniper, Vates, and Danfoss Products**

CISA added 10 actively exploited vulnerabilities to its KEV catalog, including five Mitel MiCollab flaws affecting versions 10.3 and earlier. Accenture's Apex Labs reported an AI-assisted data theft campaign in which attackers deployed a web shell one day before patches were released, harvested credentials, and stole sensitive business data within hours. Mitel has provided patch 10.3.0.18 and recommends restricting external access to the AWV component if updates cannot be applied. FCEB agencies must fix most flaws by November 28, 2026, with two due by December 9, 2026. Other exploited flaws include Vates Xen Orchestra authentication bypass (CVE-2026-133469), Juniper Session Smart command injection (CVE-2026-103406), and three Danfoss AK-SM 800A Series refrigeration controller vulnerabilities. CISA also warned of unpatched Danfoss AK-SM 8xxA Series flaw CVE-2026-129713, a pre-authentication stack-based buffer overflow allowing remote arbitrary code execution with webserver privileges; Danfoss expects a fix in version 5.5.x and advises VPN-only remote access, Strict mode, strong passwords, and network isolation until then.

**Reference:** [Hackers Exploit 10 Vulnerabilities Across Mitel, Juniper, Vates, and Danfoss Products](<https://thehackernews.com/2026/11/hackers-exploit-10-vulnerabilities.html>) 

---

📌 **Weekly Report: Vulnerabilities in Multiple Palo Alto Networks Products**

JPCERT/CC Weekly Report 2026-11-26 lists vulnerability advisories for 22 products, including multiple Palo Alto Networks products, Synology DiskStation Manager, Microsoft Edge, IBM Guardium Data Protection, UniFi Access Application, Ruby, Drupal core, Splunk, ASUS, F5, ILIAS, Firefox, Pleasanter, AutoSys Workload Automation, Google Chrome, Oracle, Atlassian, GitLab, ONLYOFFICE Docs, Apache Shiro, nginx, and Node-RED. The report notes Ruby has a confirmed proof of concept for remote code execution via a heap buffer overflow during string case conversion, Drupal core has a reported exploitation of CVE-2026-132165, and unauthenticated Node-RED instances are being targeted for malicious control flow registration under CVE-2026-58115. All issues are addressed by updating to fixed versions or applying vendor patches.

**Reference:** [Weekly Report: 複数のPalo Alto Networks製品に脆弱性](<https://www.jpcert.or.jp/wr/2026/wr261126.html>) 

---

📌 **13 Malicious NuGet Packages Turn Fake .NET Job Assessments Into Malware Delivery Traps**

Socket researchers discovered 13 malicious NuGet packages disguised as WinUI 3 and WPF button controls, distributed through a fake .NET take-home job assessment advertised on the LaborX Web3 freelance marketplace. Building or running projects using these packages downloads files from GitHub, stages DLL sideloading around Microsoft On-Screen Keyboard (osk.exe), or downloads and executes Windows executables. Related fake Axios repositories impersonate the legitimate JavaScript library and serve payloads including C2 loaders, a Chrome profile stealer, and a Telegram-reporting payload. All NuGet packages have been deleted, and the campaign remains unattributed, though researchers note similarities to recruitment campaigns associated with North Korea and Iran without shared indicators or malware families.

**Reference:** [13 Malicious NuGet Packages Turn Fake .NET Job Assessments Into Malware Delivery Traps](<https://thehackernews.com/2026/11/13-malicious-nuget-packages-turn-fake.html>) 

---

📌 **McDonald's Japan App database hacked; customer consumption records may have leaked**

iThome reports that McDonald's Japan confirmed on November 20 that an official app database was accessed by an unauthorized third party, potentially exposing customer purchase records, IP addresses, and mobile location information used while using the app. The company did not disclose the exact timeframe of the possible data exposure, the number of affected consumption records, or the intrusion path. McDonald's stated that leaked customer IDs alone cannot identify consumers and differ from membership numbers and email addresses; names, email addresses, phone numbers, addresses, and credit card information were not included. No app or related service compromise has been detected as a result of the potential leak. iThome notes this follows a October announcement by Mos Burger that an IT outsourcing vendor was accessed without authorization, exposing 1.133 million prepaid card records including card numbers, PINs, and balances.

**Reference:** [日本麥當勞App資料庫被駭，用戶消費紀錄恐外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kUGhjRGlyX0s1ZFl3c2NnZU0xMkJ1TGlEWjFwYURCamE4ZVJOMmQ4TFgzNThPSUN5dldjbEZWY05MWnZ1Zzc5T1ZBTnY1UQ?oc=5>) 

---

📌 **UK NCSC warns AI-assisted cyber attacks have increased significantly; hackers may exploit existing enterprise vulnerabilities within minutes**

iThome reports that the UK National Cyber Security Centre warned on November 24 that AI-assisted cyber attacks have increased significantly since September, affecting organizations across multiple industries, with some incidents causing service disruption or system compromise. Attackers are abusing AI agentic offensive frameworks originally intended for red-team security testing, including ARTEX, Cairn, PentAGI, RedAmon, Xalgorix, and Darkmoon, to quickly and continuously launch attacks at low cost. NCSC said attackers are exploiting long-standing technical debt such as exposed credentials in code repositories, infrastructure-as-code misconfigurations, default login credentials, missing authentication, and API security weaknesses rather than new memory corruption vulnerabilities. After initial intrusion, attackers may escalate using excessive internal access rights and poor network segmentation. CrowdStrike senior intelligence analyst Eric Loui told CYBERWARCON that dozens of threat actor groups are increasingly delegating attack decisions to AI agents, with one attack against an Argentine healthcare organization discovering and exploiting a SQL injection flaw in about 90 minutes. An FBI advisory from November 13 disclosed that since at least August, various threat actor groups have used ARTEX against organizations globally, with some attacks progressing from targeting to high-privilege system access in under three hours. A previously affected Taiwanese e-commerce provider, 91APP, disclosed ARTEX usage traces after an October 22 breach of its Commerce Cloud order database. The European Commission confirmed on November 23 that AI-assisted attacks affected the EU Academy online learning platform, exposing external users' names and email addresses; the platform was detected compromised on October 22, suspended public access, and notified the European Data Protection Supervisor, with the actual scale still under investigation. NCSC said current AI agent attacks focus on speed rather than stealth, generating dense request bursts followed by pauses and high error rates across service endpoints, making detection easier through log correlation. NCSC offers eight defensive recommendations, prioritizing reduction of external attack surfaces, reviewing externally exposed IT assets, accelerating patching, regularly reassessing IAM configurations, enforcing bot protections on underlying APIs not just web interfaces, controlling new account registration rates, and using honeytokens and decoy systems. NCSC stated that nearly all observed attacks can be prevented with existing security best practices, zero trust architecture, and appropriate technical controls.

**Reference:** [英國NCSC示警AI輔助網路攻擊顯著增加，駭客數分鐘內就可能利用企業既有資安弱點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBucmVVdXItZEpncjlKZHdhdG1wUV9CS1AwVVVVallyWDdSMmRpTVdMQlN1cWRUWi13WDBEMXVfWUJoX3YycS0xLUt3UkR5UQ?oc=5>) 

---

📌 **Xiang Shu Cake and Yishi Manufacturing disclose security incidents; electronic invoice service provider PayNow's external API accessed abnormally, affecting 500 merchants**

iThome reports that Xiang Shu Cake and Yishi Manufacturing disclosed security incidents involving abnormal access to electronic invoice service provider PayNow's external API, affecting 500 merchants. The report is headline-only; further technical details, affected data, timelines, or customer impact were not provided in the source.

**Reference:** [香帥蛋糕、一事製菓揭露資安事件，電子發票服務商PayNow對外API遭異常存取，波及500商家 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9RTm84amgxY0pncFRsR3hrMEJzZTg4N3JHalhyV1NuNGdlYnN2bXI0N0VXSHFmT0l3cFJGMVlwaDA0X0dwRE5OYlU2emt4dw?oc=5>) 

---

📌 **US FinCEN breached, AML batch filing service disrupted**

iThome reports that the US Treasury Financial Crimes Enforcement Network was breached and its anti-money-laundering batch filing service is disrupted.

**Reference:** [美國財政部金融犯罪執法局遭入侵，反洗錢批次申報服務中斷 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02VHFpbUFxc1RNWF9MbGNmdS1rNGNQaWk4M21CM3lqMWhRdGZ5V0M5WnFxdGowMGFMbUNVblpjY3dGcXJYVHBhTGkzLUZ4dw?oc=5>) 

---

📌 **International police dismantle Gootloader and other malware infrastructure, seize 6.4 million stolen credentials**

iThome reports that international law enforcement disrupted malware infrastructure including Gootloader and recovered 6.4 million compromised credentials.

**Reference:** [多國警方聯手瓦解Gootloader等惡意程式基礎設施，查獲640萬筆遭竊憑證 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE83aHc0eGZValJXaGx3U1J0SXNiQjNtRTJKaGw4SHUzbUs4ZGpmeWw1Qk1YeXlwZ0w4NERfOU9FWGsxN28zLUdCemRvZXFqZw?oc=5>) 

---

📌 **GeoServer vulnerabilities chained in attack campaigns**

iThome reports that vulnerabilities in the GeoServer geographic information server are being chained in active attack campaigns.

**Reference:** [地理資訊伺服器GeoServer漏洞遭串連用於攻擊活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xSkp5YjRCSVc1OFlRQjRab2xVeUJjY21CZGRUVzM1ZUIxbkktaHhrdnRiVmpSeTJfSFo0T2h4bFFXZy14NThJSWd1dnF1UQ?oc=5>) 

---

📌 **WordPress blocks six backdoored plugins amid suspected developer account compromise**

WordPress blocked six plugins containing backdoors after suspected developer account compromises, according to iThome.

**Reference:** [WordPress攔截6款遭植入後門的外掛程式，起因疑為開發者帳號遭盜用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1wTjFjT21hSDZ5NmhkTTdTMWhKTm9lMm0yRzlBa0wwWTByQmZscDAtLUxRY3VGYW5ScXFMQWpYcFQ5M0o2NG1KNy13MHljZw?oc=5>) 

---

📌 **Attackers target .NET developers with poisoned job assessments**

Dark Reading reports attackers are targeting .NET developers through malicious job assessments.

**Reference:** [Attackers Target .NET Developers With Poisoned Job Assessments](<https://www.darkreading.com/threat-intelligence/attackers-net-developers-poisoned-job-assessments>) 

---

📌 **SecurityScorecard warns hijacked Copeland XWEB PRO refrigeration controllers used for spam and proxies**

SecurityScorecard warned that compromised Copeland XWEB PRO refrigeration controllers are being abused as spam relays and proxy nodes, according to iThome.

**Reference:** [SecurityScorecard示警Copeland XWEB PRO冷凍控制器遭劫持，淪為垃圾郵件與代理節點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1ORENOc28zU0Z2ZjZuRmFnellqY09iWkJFb1QyOGg1bXlwb0hCbmFlUWdaSWo2YVdpcE14U1dGZ2dYQkpQS1ZONmdCSk5hQQ?oc=5>) 

---

📌 **Palo Alto Networks patches exploited Linux kernel vulnerability Fragnesia in firewalls**

iThome reports that Palo Alto Networks has patched Fragnesia, a Linux kernel vulnerability already exploited against its firewalls.

**Reference:** [Palo Alto Networks修補防火牆已遭利用的Linux核心漏洞Fragnesia - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBvaUVOcS1SS3NWd2RzRHlxNWs5NndWa2IwQ1RhVkg0dndJUmFvSWNOblFEMmNMVlM0N1ZJdm5hdTJ2MFZXZldzWGFjTGI5QQ?oc=5>) 

---

📌 **Bithumb data breach broader than previously reported**

Xakep reports that the Bithumb data leak is broader than initially disclosed.

**Reference:** [Утечка данных из Bithumb оказалась обширнее, чем сообщалось ранее](<https://xakep.ru/2026/11/26/bithumb-data-leak>) 

---

📌 **Cyprus becomes espionage target for Iranian hackers**

Dark Reading reports that a previously undocumented Iranian threat group called Volant Manticore is targeting Cypriot organizations for intelligence gathering on behalf of Tehran.

**Reference:** [Cyprus Becomes Espionage Target for Iranian Hackers](<https://www.darkreading.com/cyberattacks-data-breaches/cyprus-espionage-target-iranian-hackers>) 

---

📌 **22 global enterprise Check Point management servers compromised via known vulnerability**

iThome reports that attackers compromised Check Point management servers at 22 enterprise organizations worldwide and obtained administrator rights by exploiting a known vulnerability.

**Reference:** [全球22家企業組織Check Point管理伺服器被入侵，駭客利用已知漏洞取得管理員權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1mclhJZHhVQm9ZUWozM2tfWjBJajVMOVZuQmRkcWVRbklVSXB1SGZaeWRnLW5LRTh2WWp5dDRYX1d4c3Q3b3pNbVV6RzBuUQ?oc=5>) 

---

📌 **Mining company reports cryptocurrency theft via hashrate interception**

Xakep reports that a mining company disclosed cryptocurrency theft through interception of hashrate.

**Reference:** [Майнинговая компания сообщила о краже криптовалюты через перехват хешрейта](<https://xakep.ru/2026/11/26/braiins-hashrate-theft>) 

---

📌 **Generator with a surprise: two RCE vulnerabilities found in Kohler APM802 controller**

Xakep reports that a researcher discovered two remote code execution vulnerabilities in the Kohler APM802 generator controller.

**Reference:** [Генератор с сюрпризом. Как я нашел две RCE-уязвимости в контроллере Kohler APM802](<https://xakep.ru/2026/11/26/apm802-hacking>) 

---

📌 **Criminal Bureau exposes fake short-drama app distributing Android Trojan in over 100 online banking theft cases**

Taiwan’s Criminal Investigation Bureau disclosed more than 100 online banking theft incidents tied to a fake short-drama app that distributes an Android Trojan; attackers abuse accessibility permissions to steal deposits.

**Reference:** [網銀盜轉案逾百起，刑事局揭露偽冒短劇App散布Android木馬，歹徒濫用無障礙權限盜轉存款 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4zQ0V6MVh2QmI5bE93aWZJbFJmbjlqOWh0UUFPMDhsZG5mYzRVaUZsV0VUS2RHQTdwbDJKWlBPYjI5V2o0TThTeDRMeW9OZw?oc=5>) 

---

📌 **React Server Components patch fixes unauthenticated RCE vulnerability**

iThome reports that React Server Components has patched an unauthenticated remote code execution vulnerability.

**Reference:** [React Server Components修補未經身分驗證RCE漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9rWThnc3VBZER6OE13Vm5SeDlrNlBBOVh1OTRVMWVvVHRWMURWNEw4QVBBN2VwNVlTamh4RmZhUF9zRjFmVHlDQzB5MVp3QQ?oc=5>) 

---

📌 **WhatsApp fixes vulnerability exploited by attackers**

Xakep reports that WhatsApp has fixed a vulnerability that attackers were actively using.

**Reference:** [В WhatsApp исправили уязвимость, которой пользовались злоумышленники](<https://xakep.ru/2026/11/25/whatsapp-flaws>) 

---

📌 **Android Trojan RatHat targets Russian users and uses Gemini**

Xakep reports that the RatHat Android trojan is targeting users in Russia and uses Gemini.

**Reference:** [Android-троян RatHat атакует российских пользователей и использует Gemini](<https://xakep.ru/2026/11/25/rathat-russia>) 

---

📌 **Taste International outsourced cloud invoicing platform subject to unauthorized access affecting 290 people**

iThome reports that Taste International's outsourced cloud invoicing platform experienced unauthorized access affecting 290 people.

**Reference:** [泰味國際委外雲端發票平臺遭異常存取，290人受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBjaTA1S004YTAzZ1NyRkJBNDI4R001bkdWdzZHNXVxb3ByUFJ1OVY1ZVZuX195LUVkb0RfSTh5U2U1aUxNWXJ6RXVTdzd0Zw?oc=5>) 

---

📌 **Researchers link new ransomware group Inception to ShinyHunters**

Xakep reports that researchers have linked the new ransomware group Inception to ShinyHunters.

**Reference:** [Исследователи связывают новую вымогательскую группу Inception с ShinyHunters](<https://xakep.ru/2026/11/26/inception-shinyhunters>) 

---

📌 **Cyber Insurers See New Divide: AI Defense 'Haves' &amp; 'Have Nots'**

Dark Reading reports that cyber insurers are observing a growing gap between organizations with mature AI-driven defenses and those without, influencing underwriting decisions and premium pricing.

**Reference:** [Cyber Insurers See New Divide: AI Defense 'Haves' &amp;amp; 'Have Nots'](<https://www.darkreading.com/cybersecurity-operations/cyber-insurers-see-new-ai-divide>) 

---

📌 **FBI Suspected of Another Security Incident, Criminal Database Compromised - iThome**

iThome reports that the FBI is suspected to have suffered another security incident involving the compromise of a criminal database, though details on the scope and attribution remain unconfirmed.

**Reference:** [FBI疑似再發生資安事故，犯罪資料庫被駭 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5TVGFIQ29tYUZKLVlpVW1lbnNRdXlPaURlMzlMemVCLWJGTmxjQlJwakVDdG9KWDNqTDM0aGJzNkZLV1hNQ0FyaWVtN2Zrdw?oc=5>) 

---

📌 **1Password Hacked: Attackers Steal User Data**

Xakep.ru reports that 1Password was breached and user data was stolen; the report does not specify the volume of data, the attack vector, or whether the compromise has been contained.

**Reference:** [1Password взломали. Хакеры похитили пользовательские данные](<https://xakep.ru/2026/11/26/1password-hacked>) 

---

📌 **It's a Bot World. We're Just Living in It**

A report discusses the increasing prevalence and impact of automated bot activity in the current digital landscape.

**Reference:** [It's a Bot World. We're Just Living in It](<https://www.darkreading.com/cyber-risk/bot-world-just-living>) 

---

📌 **JPCERT/CC TSUBAME Report Overflow (July–September 2026)**

JPCERT/CC observed an increase in TCP SYN packets originating from IP addresses assigned to Ukraine starting around July 6, 2026. A significant portion of this traffic, approximately 92%, originated from a specific IP range managed by ISP5HAT-MNT, with the 94.154.43.0/24 subnet accounting for about 80% of the observed packets. The traffic targeted a wide range of destination ports, including both well-known ports and non-standard ports like 10022/TCP and 22100/TCP, suggesting scanning or reconnaissance activity. The observed patterns also suggest the possibility of reflection-based denial-of-service (DoS) attacks, where spoofed SYN packets are sent to multiple devices to concentrate SYN/ACK responses on a target. While the exact identity or motive of the actors remains unknown, the findings indicate that simply changing service ports from defaults is insufficient to prevent discovery by scanners. Organizations are advised to verify that only necessary services are exposed to the internet and to use firewalls to restrict access to authorized IP ranges.

**Reference:** [お知らせ：JPCERT/CC Eyes「TSUBAMEレポート Overflow（2026年7～9月）」](<https://blogs.jpcert.or.jp/ja/2026/11/tsubame-overflow20260709.html>) 

---

📌 **Duty of Digital Care**

An article discusses the concept of the duty of digital care.

**Reference:** [數位注意義務 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxNWnlDMHVDdVBYM0s1aEpBelpONlRsRERuTFF2ejVUMGdIZjRYSGk3NEJQalhsSDc1WHhBbEZxV1dhTjNXY2d1TGhtMy0yVXQ5RmwxeVFYTXYxemNHYVlZdktMNlpYU2VGcWVobkJZRENHcmU3ZE9xZWZqR2NEa2p6SlV3UUtoNW54QXdCNEJR?oc=5>) 

---

📌 **CastleRAT**

iThome reports on CastleRAT as a headline-only item.

**Reference:** [CastleRAT - iThome](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE1UOWxtRFkxRFFqMkE2RXlZcW9jalFsRWJtbXBiMFhpLWdnX0ZuS0NlSWZXNlJVMUhxNTFITVhmOGczMVYtWDZ6eXZ6TTlxRE5DSlE?oc=5>) 

---

📌 **Security Daily: November 26 — Copeland XWEB PRO refrigeration controller hijacked for spam sending and proxy use**

iThome reports that Copeland XWEB PRO refrigeration controllers were hijacked and used as spam email senders and proxy nodes.

**Reference:** [【資安日報】11月26日，Copeland XWEB PRO冷凍控制器遭劫持，淪為垃圾郵件發送與代理節點 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9veGd1ZXE4T2tsYmluU1pPbXZraUxpYlM2STdyRUUyVkpCTXpRUWYxT3hiUUZrcDJYS1BwWHR1dXV2V0QtbGF1X3VOZEp0dw?oc=5>) 

---

📌 **Ten vulnerabilities in Danfoss refrigeration controllers and others actively exploited**

iThome reports that ten vulnerabilities in Danfoss refrigeration controllers and related products are being actively exploited.

**Reference:** [Danfoss冷凍控制器等10個漏洞遭到積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE82c3pEX0gwZVZOajRDSUNXRmYxTDBTRU93bkJINWU3NkdNTnZSN25uTXN4QjlLcUpaQ1A1UHJxTkFIa1htbmIzTzdoWnNxZw?oc=5>) 

---

📌 **AI-assisted cyber attacks - iThome**

iThome reports on AI-assisted cyber attacks as a developing threat trend.

**Reference:** [AI輔助網路攻擊 - iThome](<https://news.google.com/rss/articles/CBMikAFBVV95cUxQTzkxMEk0MHNLQnhlaFZHczhnQnFQVVJBZWFDOXl5aGZpTnIwZDNHUmszaWJfRlBObXJLb0hvRXpaelY0OEpoNk1LYnBTUDh3V0FpNWp3LW1GSTBraEMySzE3OVI5R2F5ZUthbl81ZFMxVGVwb0RFZjl5ODY3X2pmRUtIMTJsalBnVjlIVHZIR20?oc=5>) 

---

📌 **Theft prevention 3-2-1 - iThome**

iThome reports on a 3-2-1 theft prevention approach.

**Reference:** [防盜三二一 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxNYWYtUWRlRTJhNzFxTk9vYUFocmNvUVZRWTRicEw3dGNIY1g4WUROR2NkUjlBcklub0NLczhuaG5rYXFvbU9YRDJ5ZFpCY2NjNGdkN2dmaV9qNmlXM3JNSW52TUVqVkhfakVPaFgwbkVQYW1OTm96bEZXTkVrY3RoRDZR?oc=5>) 

---

📌 **Inventory of seven major supply chain security risks in 2027, enterprise protection scope extends from open-source software to AI models and agents - iThome**

iThome reports on seven major supply chain security risks expected in 2027, including risks related to open-source software, AI models, and AI agents.

**Reference:** [盤點2027年七大供應鏈資安風險，企業防護範圍從開源軟體擴及AI模型與代理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1oOURzUzlqemNBNnZFeXBoSnlBSndLa3hhdzE1NW1meGlScXhSRzUtNmM0NGFHbVNrbHRLY0EyZmE4OU1GQUlobnAydHF3QQ?oc=5>) 

---

📌 **Turning "same behavior" into something verifiable**

iT 邦幫忙 reports on defining behavior so it can be checked.

**Reference:** [先把「行為一樣」寫成可以檢查的事情 - iT 邦幫忙](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5SVkplMUhSanZjaEFvVC1WZllYWm9ad1hBa3Y0dGdEMVF4dnNFcTNvOFZCOEdLSEpfQUE2T280ekhmT3JHOGh0cDFhR0FCb1JkMEh0Wk9Zc1llVDhNR2RadEtNajhqdU0?oc=5>) 

---

📌 **Attack surface**

iThome reports on attack surface.

**Reference:** [攻擊面 - iThome](<https://news.google.com/rss/articles/CBMiakFVX3lxTE1Ya0JHY25XZ0JYX2x0RzhnRTdoaGNZblp2RU5MTzFXUHdGa2JpUGtqaGVBNkNhR1lHYmlGWGk3LVdVT3paUXBDa2FKUkdaSGFoMmhHTDZIQXlHY3BkZGc5dnFUVHpOYjZTZVE?oc=5>) 

---

📌 **Smashing Security podcast #494: The Russian accused of spying on Palantir from Starbucks**

Graham Cluley's Smashing Security podcast #494 covers the Russian accused of spying on Palantir from Starbucks.

**Reference:** [Smashing Security podcast #494: The Russian accused of spying on Palantir from Starbucks](<https://grahamcluley.com/smashing-security-podcast-494>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261126-1-1795711296094 -->
