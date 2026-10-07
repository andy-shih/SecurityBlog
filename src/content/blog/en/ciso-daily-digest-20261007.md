---
title: "CISO Daily Digest — 2026-10-07"
description: "Active ransomware takedowns, Snowflake breach sentencing, and evolving ClickFix payloads headline today's threat landscape alongside AI security developments and critical vendor patches."
pubDate: 2026-10-07
tags: ["ransomware","clickfix","ai-security","supply-chain","vuln-patch","snowflake","iot-proxy","zero-day","cloud-security","identity-hijack"]
author: "Security Solutions Team"
featured: true
---

## Operation KillSwitch Dismantles KillSec Ransomware Group

Operation KillSwitch dismantled the KillSec ransomware group, arresting three suspects in Spain, Romania, and the UK. The alleged administrator was a 16-year-old, with a second member turning 18 during the suspected crime period.

Europol, Eurojust, and ten countries' law enforcement participated in the September 2026 action. Investigators seized devices and cryptocurrency wallets in Spain, identifying ransom-payment transactions.

Police conducted eight searches across Spain, Romania, the UK, and Greece, intercepting KillSec's dark-web leak site and five key servers. Authorities protected at least 110 terabytes of victim data from further unauthorized access. The investigation covered approximately 1,000 KillSec attacks worldwide. The suspected developer turned 18 in August 2026, meaning he was a minor during part of the alleged crimes; arrest is pending. Negotiators and a 'partner' were also identified, with police pursuing additional suspects.

### CISO Actions Required

- **Patch Unsecured Systems Immediately —** Review and patch PeopleSoft and other unpatched systems immediately; unpatched vulnerabilities remain the primary entry point for ransomware and data exfiltration campaigns targeting enterprises.
- **Prioritize Critical Vendor Patching —** Update all affected Atlassian, Apache, Chrome, Firefox, and OpenSSH deployments to latest versions; the JPCERT weekly report confirms multiple critical vulnerabilities with active exploitation indicators.
- **Assess AI Supply-Chain Risk —** Assess AI vendor supply chain risk and verify security controls for AI coding tools; agent-based attacks and workflow identity hijacking present emerging threat vectors for enterprise data.

**Reference:** [Лидером вымогательской группы KillSec оказался 16-летний подросток](<https://xakep.ru/2026/10/06/killsec-down/>)

---

## Active Threats This Week
📌 **Former US Soldier Sentenced to 70 Months for Snowflake Attacks**

Cameron Wagenius sentenced to 70 months for Snowflake client attacks spanning April 2023–December 2024, affecting 165+ organizations including AT&T and Ticketmaster; stolen data impacted hundreds of millions. The case underscores the need for robust credential hygiene and cloud access controls.

**Reference:** [Американский военный получил 70 месяцев тюрьмы за атаки на AT&T, Verizon и другие компании](<https://xakep.ru/2026/10/06/wagenius-sentenced/>)

📌 **FBI Reportedly Ends Accenture Contract Over PeopleSoft Vulnerability**

The FBI reportedly ended its Accenture contract after an unpatched PeopleSoft vulnerability enabled a ShinyHunters intrusion, highlighting government vendor risk and the importance of timely patch management across third-party service providers.

**Reference:** [FBI傳與Accenture解約，疑因未修補PeopleSoft漏洞造成ShinyHunters入侵 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBmRHBPOTlocDZDbDdUTU05UnZINnlkaWpCQ1M4RDRZYTBjN3hmT01SbElTczhYOHZKY2tNSnBIWFZtVlBOaTZvSnZFOWludw?oc=5>)

📌 **ClickFix Attacks Evolve to Hide Malicious Payloads**

ClickFix attacks now use DNS TXT records and browser cache pre-fetching to conceal malicious payloads, complicating early detection; security teams should update phishing detection rules and strengthen user awareness training programs.

**Reference:** [ClickFix Attacks Evolve to Better Hide Malicious Payloads](<https://www.darkreading.com/cyberattacks-data-breaches/clickfix-attacks-evolve-better-hide-malicious-payloads>)

📌 **DOD Halts Anthropic AI Use After Supply Chain Risk Ruling**

The U.S. Department of Defense halted Anthropic AI usage after courts upheld a supply chain risk designation, signaling increased scrutiny on AI vendor trust and data handling practices across government contracts.

**Reference:** [DOD Halts Use of Anthropic AI After Court Upholds Supply Chain Risk Designation - MeriTalk](<https://news.google.com/rss/articles/CBMitAFBVV95cUxOUGF5V3Q1a2o1bVVxRUUwUU91dHFxR09VbU41aXZ0NFZDSDRkdzV3cU40VV8xanVqSGtCZ2JDOWVJdnN5dWhZZXpqRGtJUFUteGxkYlc1cXRsNlFqY1hvV25BcjRIUGlXZmdYbTdJamlrcW0zUnpZc2stLTFFbGUyV21UdEV6NjdQYnFwa0VwV3FqcXZrelhkOW1KWksxa3ZVa2hDRlNZZlpWdFQ0RkdJNGJIT0w?oc=5>)

📌 **ClingSTUN Linux Backdoor Turns IoT Devices Into Proxy Nodes**

ClingSTUN Linux backdoor exploits 24 known vulnerabilities to compromise IoT devices, routing malicious communications through legitimate public STUN servers to evade detection; inventory and patch all exposed IoT assets immediately.

**Reference:** [Linux後門ClingSTUN利用公開STUN服務，惡意通訊更難辨識 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xbU9WdE9MMGtnektrNl9mN2RQRHVJWmVaNnY3LVlDMDNaeU5KUnhBWEdaYnRwMmc2Z25iNkJUTy0yS1c2cXFoX1NmTVJsUQ?oc=5>)

📌 **Dutch Vulnerability Disclosure Org Hit via Zammad Zero-Day**

A Dutch vulnerability disclosure organization was autonomously attacked via a zero-day in Zammad IT service and ticketing software, demonstrating AI-driven exploitation of public-facing support systems that now require immediate security hardening.

**Reference:** [荷蘭漏洞揭露協會遭AI自主攻擊，攻擊者利用開源IT服務與客服系統Zammad零時差漏洞得到初期存取管道 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE16Q0NIMnhNbUU5Tk81WW0ycjdOcW9QSWhNaTZMVXRqV24zTlVLOWJnUk9leVhzX1RyaFdWOVp0elRfemVLTHRiLU9NUFJJZw?oc=5>)

📌 **Google PageBreak AI Agent Finds 500 Flaws in Web Apps**

Google's PageBreak AI agent autonomously discovered 500+ XSS flaws in internal web apps using deterministic validation; the approach shows promise for scaling vulnerability discovery while reducing false positives for security teams.

**Reference:** [Google's PageBreak AI Agent Finds 500 Flaws in Its Web Apps](<https://www.darkreading.com/application-security/google-pagebreak-ai-agent-500-flaws-web-apps>)

📌 **Anthropic Expands Claude Security Access; Glasswing Finds 120K Vulns**

Anthropic expanded security team access to Claude, with Glasswing identifying over 120,000 vulnerabilities in six months; AI-assisted security testing is becoming a practical force-multiplier for defensive teams across enterprise environments.

**Reference:** [Anthropic擴大資安Claude存取計畫，Glasswing半年找到逾12萬漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9RcWl3UWtYb1BUSmtvWG8yNHJicE5JTHBxbG5xX1h2WTBYVkx6TTVCbFZiT3czblJPSEFRRkVMQ1NpbUVya0VVSW5Cam9iZw?oc=5>)

📌 **Atlassian Discloses Arbitrary File-Read Flaws Across 8 Products**

Atlassian disclosed arbitrary file-read vulnerabilities across eight major products; all organizations must immediately apply updates to prevent unauthorized file access and potential data exposure within their enterprise collaboration environments.

**Reference:** [Atlassian揭露影響旗下8款主要應用系統的任意檔案讀取漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mdXBacjhxSGxndHhWNTgtdmNpUGY1Yno1bWNZaTgxa2NFRW8yWlhBcThiMDVUV2o4TW5INTNqUzE5RlBCWFFMbmFwa2g1UQ?oc=5>)