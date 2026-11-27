---
title: "CISO Daily Digest: Switzerland Confirms AI-Assisted Cyberattacks Breached Critical Infrastructure Operators (20261127)"
description: "Switzerland confirms successful AI-agent breaches against critical infrastructure, while a new unauthenticated RCE zero-day is identified in Cacti network monitoring software."
pubDate: 2026-11-27
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Switzerland Confirms AI-Assisted Cyberattacks Breached Critical Infrastructure Operators

Switzerland's National Cyber Security Centre reported that attackers using AI agents have successfully breached computer systems in four out of five recent confirmed cyberattacks within the country. Three of these incidents targeted critical infrastructure operators, with two attacks resulting in successful unauthorized access. While no major service disruptions have been reported, the victims—which include small and medium-sized enterprises—have not been publicly named.

The National Cyber Security Centre identified the use of agentic offensive frameworks, which are AI agents capable of autonomously discovering security weaknesses and executing attacks. These tools, such as ARTEX and CyberStrikeAI, can perform high-speed scans for unpatched vulnerabilities and execute multiple attack vectors in parallel. The agency noted that these agents can adapt their methods when encountering defensive responses, significantly reducing the time available for organizations to detect and react to an intrusion.

The cybersecurity agency highlighted a shift in the threat landscape, noting that the number of freely accessible AI attack tools online has nearly doubled since October. Experts suggest that the increasing availability and autonomy of these agents may lead to a larger wave of attacks. Similar mass compromise campaigns involving autonomous AI agents have been observed by other national incident response teams, where systems were breached within hours due to the adaptive nature of the tools.

### 📌CISO Impact

- **Mitigating Autonomous AI Threats —** Defenders must account for increased attack velocity and adaptive maneuvers. Traditional detection thresholds may need adjustment to catch autonomous agents that switch tactics rapidly during an engagement.
- **Critical Infrastructure Hardening —** As AI-driven attacks target essential sectors like electricity and water, organizations should prioritize rapid patching and assume that automated scanners will find unpatched entry points faster than manual processes.
- **Rapid Response Requirements —** The ability of AI agents to execute parallel attacks and bypass defenses in real-time necessitates highly automated incident response capabilities to reduce the window of opportunity for an intruder.

**Reference:** [Switzerland Confirms AI-Assisted Cyberattacks Breached Critical Infrastructure Operators](<https://thehackernews.com/2026/11/switzerland-confirms-ai-assisted.html>)

---

## Active Threats This Week

📌 **Unpatched Cacti Zero-Day Enables RCE in Just Four HTTP Requests via Guest Access**

A new zero-day vulnerability in the Cacti open-source network monitoring tool allows unauthenticated remote code execution (RCE) through the default guest interface. Tracked as 4HTTP2SHELL and 4HTTP2ROOT, the exploit requires only four HTTP requests to execute commands as the Cacti server user. The flaw affects Cacti Core 1.2.31 when guest access is enabled; however, guest accounts are disabled by default in versions 0.8.7 and later. The vulnerability leverages a second-order SQL injection via the 'preview\_graphs\_per\_page' setting, which allows an attacker to inject arbitrary SQL strings that are eventually passed to PHP's popen() function without sanitization.

**Reference:** [Unpatched Cacti Zero-Day Enables RCE in Just Four HTTP Requests via Guest Access](<https://thehackernews.com/2026/11/unpatched-cacti-zero-day-enables-rce-in.html>) 

---

📌 **'God Mode' Flaws Could Wreak Border-Control Havoc**

Reports indicate that 'God Mode' flaws could potentially cause significant disruption to border control operations. The reported vulnerabilities suggest a high risk of impact on critical border management systems.

**Reference:** ['God Mode' Flaws Could Wreak Border-Control Havoc](<https://www.darkreading.com/vulnerabilities-threats/god-mode-flaws-wreak-border-control-havoc>) 

---

📌 **North Korea-Linked PolinRider Poisons Over 7,600 GitHub Repositories to Spread Malware**

North Korean threat actors behind the PolinRider campaign have compromised more than 7,600 GitHub repositories, with activity possibly dating back to February 2025. Attackers inject a Python loader that executes when developers clone, fork, build, or import affected projects. The loader retrieves JavaScript from Ethereum wallet transactions to locate command-and-control servers and deliver next-stage Node.js payloads, including a likely remote-access tool that persists in VS Code, Cursor, Discord, and GitHub Desktop. SafeDep identified the loader in 375 public repositories across 260 accounts, while Apiiro estimates 7,609 repositories owned by 2,330 accounts are affected. The campaign is assessed as a parallel sub-cluster to Contagious Interview, using open-source software registries as a primary initial-access vector targeting corporate environments.

**Reference:** [North Korea-Linked PolinRider Poisons Over 7,600 GitHub Repositories to Spread Malware](<https://thehackernews.com/2026/11/north-korea-linked-polinrider-poisons.html>) 

---

📌 **ThreatsDay: 10M NGINX Services at Risk, 250+ Malicious Extensions, AI Server Hijacking + 17 More Stories**

The Hacker News weekly bulletin reports multiple active threats: Todoist disclosed a November 2026 breach affecting 6 percent of users after stolen credentials were used to access version control systems, source code, employee accounts, and customer data; Microsoft documented over 250 SleeperWidget browser extensions that activate hidden data collection, ad injection, and link modification when installed through paid search ads; Rapid7 found thousands of unauthenticated AI servers exposed to internet abuse without exploits; Censys reported more than 10 million NGINX services vulnerable to NGINX2Root flaws that could lead to remote code execution; Symantec disclosed an attacker abusing CyberPower PowerPanel Business to run scripts as SYSTEM and dump Active Directory secrets; TrendAI reported the BYOD ransomware group has claimed at least nine organizations with real-world clinic closures and ambulance diversions; Guardio Labs estimated 12,200 online shops were hijacked in October 2026 through CartJacked schemes; and VulnCheck recorded credential-harvesting attempts across 127 CVEs, with AI and open-source developer tools representing 61 percent of associated vulnerabilities.

**Reference:** [ThreatsDay: 10M NGINX Services at Risk, 250+ Malicious Extensions, AI Server Hijacking + 17 More Stories](<https://thehackernews.com/2026/11/threatsday-250-rogue-extensions-10m.html>) 

---

📌 **Researchers Reveal Details of Exploited Drupal Critical Vulnerability Fail2Install**

iThome reports that researchers have disclosed details of an actively exploited Drupal critical vulnerability known as Fail2Install.

**Reference:** [研究人員揭露已遭利用的Drupal重大漏洞Fail2Install細節 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5TYS1tdnpKV2U4M3JNSk9FRXpraVJmQk9POVc5TzhXRnlKS2ZWVXkzQ2FzVTFKUENVQWJmb0tFblYza2VpbGM5RldlVlo3UQ?oc=5>) 

---

📌 **Drupal reveals new exploited installation vulnerability - iThome**

Searchlight Cyber disclosed details of Drupal vulnerability CVE-2026-132165 (Fail2Install), a critical flaw with CVSS score 9.8 that has been exploited in the wild. Attackers can overwhelm database connections with parallel requests, trick Drupal into believing installation is incomplete, reopen the installer, and exploit SQLite and Apache weaknesses to write and execute PHP code, achieving unauthenticated remote code execution across four common deployment architectures.

**Reference:** [Drupal揭露已遭利用的安裝程式新漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE01dURQdWI2UE1TaGNlWng2SmEzRzMtZjQ2bm1mbGNSYkxKNTRnUXgtUE5BVWpKZnZ4ZzNVTjhXMEhmQThNdHJRZ0RtZGxRdw?oc=5>) 

---

📌 **22 enterprise organizations globally compromised Check Point management servers; attackers leverage known vulnerability to gain administrator privileges - iThome**

Threat intelligence firm GreyNoise disclosed attack campaign GT13, in which at least 22 enterprise organizations across 17 countries had 24 Check Point Security Management Servers compromised. Victims span financial, energy, government, and manufacturing sectors, with attackers exploiting a known vulnerability to obtain administrator privileges. Exposure does not confirm infection or further exploitation beyond administrator access.

**Reference:** [全球22家企業組織Check Point管理伺服器被入侵，駭客利用已知漏洞取得管理員權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1mclhJZHhVQm9ZUWozM2tfWjBJajVMOVZuQmRkcWVRbklVSXB1SGZaeWRnLW5LRTh2WWp5dDRYX1d4c3Q3b3pNbVV6RzBuUQ?oc=5>) 

---

📌 **Security Daily: November 27, Chinese and North Korean hackers have added ARTEX to their arsenals - iThome**

iThome reported that Microsoft observed at least six hacker groups, including Chinese and North Korean actors, using AI-powered autonomous penetration testing framework ARTEX to launch attacks. In one observed case, an AI agent searched GitHub for leaked credentials and stole Azure Key Vault data within five minutes. Shadowserver honeypots recorded over 10,000 events from more than 80 IPs in two weeks targeting VPNs, development tools, and AI services. Microsoft cautioned that ARTEX introduces no new attack techniques but accelerates attack processes. iThome also reported separate stories including alleged FBI national crime database intrusion, Drupal Fail2Install exploitation, PayNow API exposure affecting 500 merchants, and GeoServer vulnerability chaining.

**Reference:** [【資安日報】11月27日，中國及北韓駭客皆已於武器庫中加入ARTEX - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ONWhvanVpMUJCLUIxU3JqUGJlcVE2UnhqZkxGOGZvT084QldNalgtbWlnRUpQdHZpcjduVTg2a19BY19PdjJueWRYMjRidw?oc=5>) 

---

📌 **Linux KVM vulnerability allows virtual machines to access host memory**

A vulnerability in Linux KVM has been reported that could allow virtual machines to gain unauthorized access to the host system's memory.

**Reference:** [Уязвимость в Linux KVM позволяет виртуальным машинам получать доступ к памяти хоста](<https://xakep.ru/2026/11/26/cve-2026-99312>) 

---

📌 **BeyondTrust predicts 2027 cybersecurity challenges: AI agent privilege abuse and reduced response windows for exposed systems**

BeyondTrust forecasts that by 2027, organizations will face increased risks from the misuse of AI agent privileges and a shrinking window of a few hours to respond to vulnerabilities in externally facing systems.

**Reference:** [BeyondTrust預測2027年企業資安新挑戰，AI代理權限遭濫用，對外開放系統重大漏洞應變時間縮短至數小時 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBnX2F3eUdpcGZHZDBqSlJnVEF5VUNTaWNuZFEzTURTb1NDQzZrZEFfbFBydWRsR3plV3daMkFVRFd3RW5RYWtLd1ZwcGtZZw?oc=5>) 

---

📌 **Estonia urges suspension of DeepSeek and other AI models due to security risks**

Estonian authorities have called for the cessation of using AI models such as DeepSeek due to potential security risks.

**Reference:** [AI丨愛沙尼亞籲停用DeepSeek千問等 涉安全風險 - 信報網站](<https://news.google.com/rss/articles/CBMitAJBVV95cUxPaHk0eFRVckJoaUc5Rmh4dTMtMGxTdTlrTXV3Tk5qOUdzeFFJTm90MGYtek40SktZOXY5dUVuM2toaFFFZjlMeG5QRVViUzdyOGNneHpCRlBYQk9PcXc3MHJ0QWNkY28xY2tyWS1ZQkdWRFRDekd3cTVKMWZTNDV6QnRMUXlEcmlwZ1FuZGpSQnVlWW5OQTBlMWFaaW5rM0dTOHhKX1h6dUJjMDA3VEdUa0toSjZoS0RxbE9ZRzBCS1lpSUxvMDE1cW4xTU8taC13anNNV1hTNHVNcVI4Z0dXMlY3MUE4QzFwRFVRcmhsV1M0UTFtMmVoYzgtUzRocUVpRl91UnBUSGtuRnpHcUpiWWdpQ201dW54dVpNUTl1NVNsRzRZRnZhZi1fT09NOUd1UFBKVQ?oc=5>) 

---

📌 **US Uranium Mine Suspends Operations Due to Cybersecurity Incident**

A uranium mine in the United States has reportedly suspended operations following a cybersecurity incident.

**Reference:** [美國鈾礦場因資安事件暫停運作 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5NczhnVzF3cHprUkRmMEFiczdzUFlCWVhKZHJlWGl1alAxY0RlRDdTMVdDY3ZoSXNWVThpOXlMSDZ5WHRELWNhT2JuSG93Zw?oc=5>) 

---

📌 **SYS010 Infostealer Abuses Browser Management Functions to Intercept and Delete Gmail and Outlook Emails**

The SYS010 infostealer has been observed abusing browser management features, enabling attackers to intercept and delete emails from Gmail and Outlook accounts.

**Reference:** [SYS010竊資攻擊濫用瀏覽器管理功能，可攔讀並刪除Gmail與Outlook郵件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4yQWtadFhYWTMyN0hBVVZySjUxUGNGQy14dlkyVnBEZGFFc2FQWUlYSTRRakdFUFJpd0hldFloMXBHbXc0eWZlZ1RsdjhUZw?oc=5>) 

---

📌 **MiCollab Vulnerability Exploited Before Patching; Attackers Achieved Domain Control in Approximately One Hour**

Attackers exploited a MiCollab vulnerability prior to the release of a patch, reportedly gaining domain control within approximately one hour of the initial exploit.

**Reference:** [MiCollab漏洞修補前已遭利用，攻擊者約在1小時取得網域控制權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfVVdnelFRZzJLQlM0YjFPcmRJcXJZY2wyVm9HcTZmZGgxem5KcUpZQ0k1REZoWGtxMG9MNWZER0t1bnQ5MUhNWUhRNjFzdw?oc=5>) 

---

📌 **MOS Burger Japan reports five security incidents in under a month, all involving third-party services**

iThome reports that MOS Burger Japan disclosed five security incidents within less than one month, each involving a third-party service.

**Reference:** [日本摩斯漢堡不到一個月揭露5起資安事件，皆涉及第三方服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1LZHVDSm9HbGR6NFE5WHNlTkI2Y3VBNHFyQ2s1TEN3U3lOM1JZYmFMaGlVTUVJQ1lRajZfREk0cjhiTEtHQ0MxTlo1UmRpQQ?oc=5>) 

---

📌 **Italy and Switzerland warn of AI agent-based attacks, urge patching of externally facing systems within 24 hours**

iThome reports that Italy and Switzerland have issued warnings about AI agent-based attacks and urged organizations to patch externally facing system vulnerabilities within 24 hours.

**Reference:** [義大利、瑞士示警AI代理式攻擊，籲24小時內修補對外系統漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBZaHNPYS1XVUZGRmVFQW5XSkFiTExJU29KV3pfMFFCQ2lHUEVqSHNVRkRrMktIcHFCYmFmMnQzZEd2Wm00VUJqT0ktZWZOQQ?oc=5>) 

---

📌 **Chinese and North Korean hackers have added ARTEX to their arsenals**

iThome reports that hackers linked to China and North Korea have incorporated ARTEX into their toolkits.

**Reference:** [中國及北韓駭客皆已於武器庫中加入ARTEX - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtRTBuT2VBM1U5YWhFNVZvR3MyLTJUSGkzbmtzMmJFZmJvcjFGbXM2NGFyN2JXZGhmRnRvODdTcUlNVzluSnNMMlFBNmNIQQ?oc=5>) 

---

📌 **WPIDE patches unauthenticated remote code execution vulnerability; unpatched sites may lead administrators to execute malicious PHP**

iThome reports that WPIDE has patched an unauthenticated remote code execution vulnerability. The report warns that administrators who do not update may be tricked into executing malicious PHP.

**Reference:** [WPIDE修補未經驗證遠端程式碼執行漏洞，未更新可能導致管理員遭誘使執行惡意PHP - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9UUU5HNkI3cjh1eGppWjVIbTYweHJpVGZVVU5tcW5tNGlFbElWX0h4b1pFNVAxcldhUHVUTFpfLW1ndzRoVGdudVRmVThQdw?oc=5>) 

---

📌 **Fake job test hides malicious NuGet package; attackers spread malware via developer recruitment process**

iThome reports that attackers distributed malicious NuGet packages disguised as job assessment tests targeting developers through recruitment processes.

**Reference:** [假求職測驗暗藏惡意NuGet套件，駭客藉開發人員應徵流程散布惡意軟體 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5SejRXTnU4Zlg1X0MzWlB6TDNVSkFFMzJMQ0ZyYVltYndlV1RhbFlVTWpEQUdDVTgxcTFzLUU2YmxJa05MUFVob2haNGhlQQ?oc=5>) 

---

📌 **Azure API Management bug fixed that allowed theft of keys and tokens**

Xakep reports that a bug in Azure API Management allowing the theft of keys and tokens has been fixed.

**Reference:** [В Azure API Management исправили баг, позволявший похищать ключи и токены](<https://xakep.ru/2026/11/27/azure-api-management>) 

---

📌 **Kangaroo financial platform suffers external attack, some user personal data leaked**

iThome reports that the Kangaroo financial platform was hit by an external attack and some user personal information was exposed.

**Reference:** [袋鼠金融平臺遭外部攻擊，部分使用者個資外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5VZGp2MmEyVWdFcGJweVRwSGdsX05Kd1NFSmxiRl9mNW9neDhISVVJaU9VZWpDWFRQTjlLUTNDd2twR0xqYmZFcFVldHpVQQ?oc=5>) 

---

📌 **Nearly 4,200 AI autonomous attack frameworks exposed on public networks, 10 found in Taiwan**

iThome reports that nearly 4,200 AI autonomous attack frameworks are exposed on public networks, including 10 discovered in Taiwan.

**Reference:** [近4,200個AI自主攻擊框架暴露於公開網路，臺灣也發現10個 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBNUTFlRnNXdDRmckhudFFqYlVLcFhnNmh5WlNET1NmQWdkeXo5amVhQURpMjRDLVFTX21BeEFkVHdFRmJvZGltNllhdmotdw?oc=5>) 

---

📌 **Japan JAXA website hacked, 2,000 user passwords leaked**

iThome reports that Japan's JAXA website was hacked and 2,000 user credentials were exposed.

**Reference:** [日本JAXA網站遭駭，2,000名用戶帳密外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5MNE1lWVEyRmF0R1llbFVpNHh6dmdEREpiLU4zNm1pOHhsZm92aXh3NzlBYWEzSEN2eE05VTBfaGhETUp5d0U1cFhHdnNQZw?oc=5>) 

---

📌 **Binance lifts withdrawal restrictions linked to $6.34 billion digital asset theft**

iThome reports Binance has removed withdrawal restrictions related to a digital asset theft involving $6.34 billion.

**Reference:** [幣安解除63.4億美元數位資產竊案相關提款限制 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5nNEZfdGMwNlFSaHNnSzFvWlNfVmJoUElkcEpfaDY1M0JzRE8wa3UzSFkzOHVwWWpOY0czemNXTTIxaHd0cXZJQzR6TkU3dw?oc=5>) 

---

📌 **US CIA and other intelligence agencies reportedly hacked, non-classified data leaked**

iThome reports that US intelligence agencies including the CIA were reportedly hacked, resulting in leakage of non-classified data.

**Reference:** [美CIA等情報機構傳遭駭，外洩非機密資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1MSHc3TV9ranZZYnVJbFdkeDFrYm1acXpDVzNobnZHTkdleVdpbTdVT1YxYWs2aGh6MHZUVlR1WWc1clVEaTgzOWpkcW5idw?oc=5>) 

---

📌 **Security Weekly Report Nov 23-27: Online banking theft methods exposed; third-party information service provider security incident spreads to logistics and e-invoice services**

iThome's security weekly report covers exposed online banking theft techniques and a third-party information service provider security incident that has extended to logistics and electronic invoicing services.

**Reference:** [【資安週報】1123～1127，網銀盜轉手法曝光，第三方資訊服務供應商資安事件延燒至物流與電子發票服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA1cWp2SjR3UUtTSHYzWDFrZkI0Q1MwNXNQcExjMlA5RlRnZmRQdWlHbHZzaHBDVUYzNjU1Ujg0Nno3WGpvU0hBOVN2czdIZw?oc=5>) 

---

📌 **How to Keep Your Security Picture Current When Attackers Move at AI Speed**

The Hacker News reports that static security snapshots are no longer adequate because AI-accelerated attackers conduct reconnaissance, phishing, and vulnerability probing at machine speed, while manual metric gathering leaves security pictures stale by the time they reach leadership. The piece argues for continuous visibility drawn directly from cloud accounts, identity providers, endpoints, code repositories, and other tools so teams know what changed and where gaps exist on an ordinary Tuesday rather than only on review day. It describes Anecdotes as a contributed partner solution that connects to existing systems and assembles the picture automatically, without claiming it detects or stops attackers.

**Reference:** [How to Keep Your Security Picture Current When Attackers Move at AI Speed](<https://thehackernews.com/2026/11/how-to-keep-your-security-picture.html>) 

---

📌 **AI Agent-Based Attacks - iThome**

iThome publishes a headline-only report on AI agent-based attacks; no full article details are provided, so no specific victims, techniques, or confirmed impacts can be summarized.

**Reference:** [AI代理式攻擊 - iThome](<https://news.google.com/rss/articles/CBMihAFBVV95cUxQT0FIa3JBM1FKUnMyX2xWek81eXJiN3NTekJVRmxXUmtqVmE5al9TbThzQXdHY0tmM2FMRTR3eFFvZ09pUzczbTVlckRNLWZ4WjFPT2dVeWE2Z25fSnRlSFlSc2MzTWlXLWY2Z1ljMmtrZjhEY1JsblF0aGFwZkhDSkNaSUU?oc=5>) 

---

📌 **Ministry of Digital Development Proposes Creating a Vulnerability Search Platform**

Xakep publishes a headline-only report that Russia's Ministry of Digital Development has proposed creating a platform for searching vulnerabilities; no further details, timing, scope, or confirmed implementation are provided.

**Reference:** [В Минцифры предлагают создать платформу для поиска уязвимостей](<https://xakep.ru/2026/11/27/bug-searching-platform>) 

---

📌 **Number of Android devices with preinstalled malware grows 2.5 times**

Xakep reports that the number of Android devices containing preinstalled malware has increased 2.5-fold.

**Reference:** [Количество Android-устройств с предустановленной малварью выросло в 2,5 раза](<https://xakep.ru/2026/11/27/preinstalled-malware>) 

---

📌 **CSIRT Italia - iThome**

iThome RSS coverage from CSIRT Italia is headline-only; no further technical details are available in the source evidence.

**Reference:** [CSIRT Italia - iThome](<https://news.google.com/rss/articles/CBMiVkFVX3lxTE1lTmxpWjVyTWJfdWx1RDJRa0JRSHA0U3FyakZWel9SVUMxRTZ6UktKcGpxamxxbGRPbnR4N0NndWhwNTUtdlhMY3RWNnJJcGFkLTk5SWRB?oc=5>) 

---

📌 **AI hacker tools - iThome**

iThome RSS coverage concerning AI hacker tools is headline-only; no further technical details are available in the source evidence.

**Reference:** [AI駭客工具 - iThome](<https://news.google.com/rss/articles/CBMieEFVX3lxTE1XbmhrQm9YanVwbmdra0pzbFVncjZESWNMaFlaQk5CLWNVZGhwMlM1LUpaY0YyeF9oazkyTnRPYjU3WlZGYXQ1SWhPSHRuSmdQVVdURnpSekswWElMWHp5eXFCOW9SSEZvc3NJYXl0X1FYU1ZUSHlJLQ?oc=5>) 

---

📌 **PolinRider - iThome**

iThome reports on PolinRider, a supply chain campaign attributed to North Korean hackers that compromised more than 375 GitHub repositories to distribute malware.

**Reference:** [PolinRider - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTE5aVWJnR1BTODBEcGZOdFVFcDJXM3hGckFhVE9IZ2FPMUlXWi1CaDhvLW1jdG82LUNrRk0tZ1YxY2tFaURacTRGbmF1MzlNNWdYTFln?oc=5>) 

---

📌 **North Korean Hackers Conduct PolinRider Supply Chain Attack, Compromising Over 375 GitHub Repositories to Distribute Malware - iThome**

iThome reports that North Korean hackers carried out the PolinRider supply chain attack, contaminating more than 375 GitHub repositories to spread malicious software.

**Reference:** [北韓駭客從事供應鏈攻擊PolinRider，污染逾375個GitHub儲存庫以散布惡意軟體 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5UMzdzSV9yUDVHT1phZGdLemFXYmtpLU13YlNoVklHSC14dnJmemE4d25iY2VXaXpoWTZoU1lkZjV2LVM3VUp5X2JKeHM5UQ?oc=5>) 

---

📌 **US Containment Efforts Appear Effective? Reports Say Kimi Update Delayed, Turned to Distilling Google and Meta Models - TechNews**

TechNews reports that U.S. containment measures may have delayed Kimi's update, prompting the developer to shift toward distilling Google and Meta models.

**Reference:** [美防堵奏效？傳 Kimi 更新延宕 轉蒸餾 Google、Meta 模型 - TechNews 科技新報](<https://news.google.com/rss/articles/CBMiqgFBVV95cUxQT3pKbS1HbEpETUktcjY0ZTVDQkIwVWJTeXpOQWdBbGNzTGN3al91N0duTDVoUnlZNHJiTXFMMmh1TUg2NmFudnNFcVFpYWhySDhTQVQtMGVHV19OX3RWemdOZEh2UWNFamJqWnk4STl4SnFQM0hGRHp1TFJpWXhNWGFLanRQY3FfQUp5R21ocTVfcmY5ZGdGaDFSUXFnaDBZYXE4V2g1SENEUQ?oc=5>) 

---

📌 **HPE Launches Hybrid Supercomputing Storage System and Smart Cabinet Management Solution**

iThome reports that HPE has introduced a hybrid supercomputing storage system along with a smart cabinet management solution.

**Reference:** [HPE推出混合式超級運算儲存系統與智慧機櫃管理方案 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE52VTZ3aGtaUDU4M0RlTVJWd3lUNGJTMzJTTmdBWkdaSjhHMEdJMmJYUnpVNURXMFZpUzRKN195OG5HUzh4aXBXbVBlYw?oc=5>) 

---

📌 **Pengchang Digital Technology Becomes Nutanix Authorized Taiwan Distributor**

iThome reports that Pengchang Digital Technology has officially become an authorized Nutanix distributor in Taiwan.

**Reference:** [朋昶數位科技正式成為 Nutanix 台灣代理商 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5fUzRNZUxna3dYVWtPdTNrOUpud3BfZWs2UzM1RlpYdlJ3QWcwaFpYMXNqMlFQWUtHUlBpRE1xQkcyMzl1Y1ZVNWwtNA?oc=5>) 

---

📌 **Chen Shang Technology Signs Taiwan Distribution Agreement with PetaCom**

iThome reports that Chen Shang Technology has formally signed a Taiwan distribution agreement with PetaCom.

**Reference:** [宸上科技攜手朔宇科技（PetaCom）正式簽署台灣區代理合約 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE11MGotdzNKNk4tRUdhem1JRml0VzRGbmhqaldWbXctazBFS285Mm1Yak9aMDZNb1pZaEZyN1ZwY1lFMG5yb2FGbkVOUQ?oc=5>) 

---

📌 **Culture University Moves to Taichung Amid Legacy System Replacement, Document System Migration Experience Revealed**

iThome reports that Culture University is relocating to Taichung as part of its 2024 legacy system replacement initiative, with details of its document system migration experience disclosed.

**Reference:** [24 年系統汰舊換新 文化大學前進台中 揭秘公文系統轉換經驗 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1rZjJrN2lqSDZnamlfRU16em1BTzQ4UnRReWpVT2haR1d4Zkw0UFhDYXV6QXh5cERoM2xTWXZoT0VEVFZJU1pwM1hVSQ?oc=5>) 

---

📌 **Satellite Observation**

iThome publishes a story under the headline "Satellite Observation".

**Reference:** [衛星觀測 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTFA5T0VLMF82VVB6TUpYejRMZlFIYUNCRUJESDZLNDNYTnVOZWNEdm5VNGJZS3F2U1dOVkRTRnhHaWN1VUs3Vm1aTEN1aHNxQV9rcVJUVVg4ZTdhQURwcmh2VUUySTZRSGVhVGNuWExQSGFfVGh4M2c?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261127-1-1795796762820 -->
