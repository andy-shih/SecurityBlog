---
title: "CISO Daily Digest: PHP2Shell: Critical RCE Vulnerabilities in PHP Core Actively Exploited (20261022)"
description: "Today’s cybersecurity source roundup. Summaries are being prepared."
pubDate: 2026-10-22
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Today’s available source headlines are listed below. Summaries are being prepared.

### PHP2Shell: Critical RCE Vulnerabilities in PHP Core Actively Exploited

PHP released emergency patches on 21 October 2026 for two critical remote code execution flaws, CVE-2026-109618 and CVE-2026-109619, both rated 9.2 on CVSS v4.0. The vulnerabilities reside in the PHP core engine itself and affect all versions from PHP 5.4 (released 2012) through current branches, impacting any installation serving web requests including WordPress, Drupal, Joomla, and Magento sites where working attacks have been confirmed by researchers.

Amazon Threat Intelligence observed exploitation attempts on 17 October, four days before patches existed, and advises investigations to start from that date. Fixed versions are 8.5.12, 8.4.27, 8.3.36, and 8.2.35. Branches 7.4 through 8.1 receive only source backports, while 5.4 through 7.3 are end-of-life with no fixes. National cybersecurity agencies in the US, UK, Netherlands, Finland, and Australia issued emergency advisories, and some European government ministries took public-facing portals offline during remediation.

Over 22.6 million internet-exposed servers run potentially vulnerable PHP according to Palo Alto Networks telemetry. All web environments processing HTTP requests — PHP-FPM, LiteSpeed, FrankenPHP, php-cgi, and Apache with mod\_php — are directly exposed, with Apache mod\_php carrying the highest stated risk as exploits can execute before application-level routing begins. Proof-of-concept details leaked on 20 October, forcing accelerated patch release. The PHP Foundation states no evidence of working exploits exists, though independent researchers report developing functional exploits within a day.

**Source:** [Вышли патчи для PHP2Shell. Хакеры уже пытаются эксплуатировать свежие уязвимости](<https://xakep.ru/2026/10/22/php2shell-patches>)

---

### LiteLLM Python Package Compromised in Supply Chain Attack

The LiteLLM Python package version 1.107.0 was compromised via a software supply chain attack delivering a credential stealer and backdoor, distributed through PyPI wheels and Docker images before being quarantined. Attackers used three engineers' GitHub accounts with stolen GitHub CLI OAuth tokens to trigger and approve a malicious release through the project-releaser workflow. The malware executes via a "cook.pth" path file before LiteLLM import, harvesting cloud credentials, private keys, browser data, AI tooling credentials, and environment variables, then exfiltrating to a attacker-controlled endpoint and checking a GitHub dead drop for remote code execution commands.

**Source:** [LiteLLM Compromised in Supply Chain Attack Delivering Credential Stealer and Backdoor](<https://thehackernews.com/2026/10/litellm-compromised-in-supply-chain.html>)

---

### Critical GitLab Flaw (CVSS 10.0) Allows Unauthenticated RCE Across 12 Years of Releases

GitLab released fixes on 21 October 2026 for CVE-2026-110264, a maximum-severity 10.0 CVSS integer overflow in the Onigmo regular-expression compiler that could allow unauthenticated remote code execution on self-managed instances. The flaw affects every version back to 7.0 (2014), including older branches beyond GitLab's normal support policy, with fixed versions issued for 19.5.1, 19.4.3, 19.3.6, 19.2.9, 19.1.9, 19.0.10, and 18.11.13. GitLab.com and Dedicated tenants are already patched. No exploitation in the wild has been reported, and no interim workaround exists; administrators must upgrade. The upgrade for 19.4.3 and 19.3.6 includes database changes causing downtime on single-node servers.

**Source:** [Critical GitLab Flaw (CVSS 10.0) Could Allow Unauthenticated RCE Across 12 Years of Releases](<https://thehackernews.com/2026/10/critical-gitlab-flaw-cvss-100-could.html>)

---

### eMudhra intermediate CA private keys reportedly recoverable; browsers block related certificates

iThome reports that browsers have urgently blocked certificates linked to Indian digital certificate provider eMudhra after its intermediate CA private keys were reportedly recoverable.

**Source:** [印度數位憑證業者eMudhra中繼CA私密金鑰可被還原，瀏覽器緊急封鎖相關憑證 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5TVVQxV2NLOXhkSS1mYWdlTjZLQU0wcGhGUkVjOUR0LVVvWHZjVUViR1QwRWZzeVdiYU1UWm9kc0xJY1d3eWlYWnhDLVBuQQ?oc=5>)

---

### JPCERT/CC warning: Multiple PHP vulnerabilities (CVE-2026-109618, CVE-2026-109619)

JPCERT/CC warns of critical PHP remote code execution vulnerabilities disclosed on October 21, 2026, allowing arbitrary code execution with PHP process privileges. Affected versions include PHP 8.5 before 8.5.12, 8.4 before 8.4.27, 8.3 before 8.3.36, and 8.2 before 8.2.35, with EOL versions 7.4, 8.0, and 8.1 receiving limited mitigations only. Users should apply patched versions promptly and investigate possible compromise through indicators such as abnormal PHPSESSID cookies, suspicious multipart requests, unexpected worker crashes, and unexplained restarts; absence of these traces does not confirm safety.

**Source:** [注意喚起: PHPにおける複数の脆弱性（CVE-2026-109618、CVE-2026-109619）に関する注意喚起  (公開)](<https://www.jpcert.or.jp/at/2026/at260033.html>)

---

### Researchers use AI to discover PHP2Shell vulnerabilities existing for over 10 years

iThome reports that researchers leveraged AI to uncover the PHP2Shell security flaws, which had existed for more than a decade.

**Source:** [研究人員借助AI力量找出存在超過10年的資安漏洞PHP2Shell - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8tbEN5RXE2eno3VnJYekVXX013V0NNNGo3WUpoSEk2OUppZmNjNkVGbkR1NUpZV0ZvQXgwZXY3VUYwZXZwbE5lRjRiLW5CUQ?oc=5>)

---

### OpenCode Flaw Lets Malicious MCP Servers Execute Code During Sign-In on Windows and WSL

A command-injection vulnerability in the OpenCode AI coding agent (versions 1.0.137 through 1.18.32) allowed a malicious or compromised Model Context Protocol (MCP) server to execute arbitrary PowerShell commands on a developer's Windows or WSL machine during the OAuth sign-in flow. The flaw resided in the 'open' package used to launch the browser; it built a PowerShell command around the server-supplied authorization endpoint without proper escaping. An attacker needed control of a configured remote MCP server, which could be hijacked later or via domain takeover. The vendor, Anomaly, fixed the issue in version 1.18.33 on September 28 but did not request a CVE or publish a security advisory, meaning scanners will not flag vulnerable builds. Pillar Security, which disclosed the flaw on October 19, rates it critical (CVSS 9.8). No exploitation has been observed. Users on Windows or WSL should upgrade immediately or remove unvetted MCP servers from their configuration.

**Source:** [OpenCode Flaw Lets Malicious MCP Servers Execute Code During Sign-In on Windows and WSL](<https://thehackernews.com/2026/10/opencode-flaw-lets-malicious-mcp.html>)

---

### China-Linked Hackers Use ARTEX AI Agents in ConnectWise Supply Chain Attack

Microsoft disclosed that China-aligned threat actor Storm-0940 leveraged ARTEX, a Go-based agentic AI penetration testing framework, to accelerate a supply chain compromise of the ConnectWise Cloud Backup application. Since September 2026, the actor used ARTEX at 'machine speed' to automate scanning, password spraying, and OAuth application abuse against hundreds of organizations globally across sectors including aerospace, defense, energy, financial services, and government. The AI agents exploited compromised ConnectWise cloud application identities to authenticate to downstream customer tenants, bypassing interactive sign-in requirements. In some cases, actors progressed to Microsoft Graph reconnaissance, credential modification for persistence, and privilege escalation within hours of initial access. Microsoft observed 2,900 sign-in attempts per minute across 2,250+ tenants, with 151,000+ failed logons captured between October 10-14. ConnectWise has phased service restoration. Microsoft notes multiple threat actors across regions are now weaponizing ARTEX, highlighting the growing integration of agentic AI into offensive workflows to compress attack timelines.

**Source:** [China-Linked Hackers Use ARTEX AI Agents in ConnectWise Supply Chain Attack](<https://thehackernews.com/2026/10/china-linked-hackers-use-artex-ai.html>)

---

### Railway Says Intruder May Have Accessed Customer Secrets, Urges Credential Rotation

Platform-as-a-Service provider Railway disclosed that an unauthorized third party may have accessed encrypted environment variables — and in some cases their decrypted contents — for a subset of users. Environment variables store sensitive data such as API keys, database credentials, and feature flags. Railway believes the intrusion is part of a broader campaign targeting platform companies to compromise AI inference providers, a technique known as LLMjacking where attackers hijack cloud credentials to run large language models at the victim's expense. Security researcher Taylor Monahan reported that attackers (address 0xd9773325282874d18cb83f1fe50f14c39750b2ee) drained cryptocurrency wallets using private keys stored on Railway, with the first theft occurring at least two hours before public disclosure. Railway has rotated bucket credentials, invalidated API tokens, and restored builds for Pro and Enterprise workspaces. Customers are urged to immediately rotate all environment variables and API keys stored in Railway, review service logs for anomalous activity, and monitor for unauthorized AI compute usage. Symantec and Wiz separately documented related LLMjacking campaigns using offensive AI agents for automated scanning, exploitation, credential theft, and cryptocurrency mining across compromised cloud environments.

**Source:** [Railway Says Intruder May Have Accessed Customer Secrets, Urges Credential Rotation](<https://thehackernews.com/2026/10/railway-says-intruder-may-have-accessed.html>)

---

### OVHcloud GitHub Compromise Tied to GlassWorm Threat Actors

**Source:** [OVHcloud GitHub Compromise Tied to GlassWorm Threat Actors](<https://www.darkreading.com/cyberattacks-data-breaches/ovhcloud-github-compromise-glassworm-threat-actors>)

---

### Langflow重大遠端程式碼執行漏洞，已觀測逾3,400次攻擊嘗試 - iThome

**Source:** [Langflow重大遠端程式碼執行漏洞，已觀測逾3,400次攻擊嘗試 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RVjFES3VQX3VpQ2RFS3pnMHluMFh4VEc4d21xWld2c09XVG5lNUs0SWR2MVBiMFQ4aWI5YkNkVWZpOEdqb3d4Q3NZWFBXdw?oc=5>)

---

### 日本虛擬私有主機業者Onamae遭駭，逾2.6萬臺客戶伺服器恐受影響 - iThome

**Source:** [日本虛擬私有主機業者Onamae遭駭，逾2.6萬臺客戶伺服器恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9jRXpqSGUwUm1lbEpVbE42TTA0YXRmZkVyU1RXSWUxeVR1RTV1aExick4waXFUQmg2X0xPWUVhNGZ4TTlFVnNYMmtYTldMdw?oc=5>)

---

### LiteLLM工程師GitHub憑證遭竊，官方發布流程成惡意程式散布管道 - iThome

**Source:** [LiteLLM工程師GitHub憑證遭竊，官方發布流程成惡意程式散布管道 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5EOE45TFBCN1JGYTdDZlp0RGgyUWFvNlFWVnhnYnFfNk51T0dIdzVDSWllVEt6MWRUVnBrZTR5clhwcWNvb3hXOHluUjZudw?oc=5>)

---

### У японского подразделения Burger King утекли данные 11 млн человек

**Source:** [У японского подразделения Burger King утекли данные 11 млн человек](<https://xakep.ru/2026/10/21/burger-king-leak-2>)

---

### お知らせ：ソフトウェア等の脆弱性関連情報に関する届出状況［2026年第3四半期（7月～9月）］

**Source:** [お知らせ：ソフトウェア等の脆弱性関連情報に関する届出状況［2026年第3四半期（7月～9月）］](<https://www.jpcert.or.jp/report/press.html>)

---

### INTERPOL Arrests 1,462 Suspects, Disrupts 10,909 Cybercrime Networks in Global Crackdown

**Source:** [INTERPOL Arrests 1,462 Suspects, Disrupts 10,909 Cybercrime Networks in Global Crackdown](<https://thehackernews.com/2026/10/interpol-arrests-1462-suspects-disrupts.html>)

---

### OpenAI's GPT-6 Agent Removed Safety Monitoring, Then Falsely Denied Doing So

**Source:** [OpenAI's GPT-6 Agent Removed Safety Monitoring, Then Falsely Denied Doing So](<https://thehackernews.com/2026/10/openais-gpt-6-agent-removed-safety.html>)

---

### Hackers used Claude and Grok to automate attacks on 400+ Latin American banks - Dealroom

**Source:** [Hackers used Claude and Grok to automate attacks on 400+ Latin American banks - Dealroom](<https://news.google.com/rss/articles/CBMirwFBVV95cUxNUDRiOFB5LTdTb0RBdHpDSGplT3NzZ0FDOHZDUFdsLWdnbWhjdkZnN1BYRzJmUkpGUk1JLTNBcVM5TmdheVpvZ0lXRzQwaERRV0xFVFh0WEd3ZlgtX1lqUG5fdldPeS1nRXpoYThoeGk2WE93R0tVZnloN3ZaX3hkSXAyR21PNTJaLXJuNXpOT0UwQ3VtR2lVWGx0c0VwbFBCRTFhV2lhU0xnLWxjRk1Z?oc=5>)

---

### Amazon證實重大漏洞PHP2Shell在揭露前已遭駭客利用 - iThome

**Source:** [Amazon證實重大漏洞PHP2Shell在揭露前已遭駭客利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1qcW5Na3FPVnJEZ2hOSXZkOGdTUkR4VE1CRHpEbEIzb3FhVTBoWnJ0aGNCRkdraWJZb3o1MHFVQlFYQXBEUWtINnhiTEJzUQ?oc=5>)

---

### Node.js發布安全性更新修補10項漏洞，其中CVE-2026-111497可導致遠端程式碼執行，籲儘速更新

**Source:** [Node.js發布安全性更新修補10項漏洞，其中CVE-2026-111497可導致遠端程式碼執行，籲儘速更新](<https://www.twcert.org.tw/tw/cp-104-11309-2266c-1.html>)

---

### Хакеры захватили более 300 выходных узлов Tor ради перехвата SSH-соединений

**Source:** [Хакеры захватили более 300 выходных узлов Tor ради перехвата SSH-соединений](<https://xakep.ru/2026/10/22/tor-exit-attack>)

---

### Oracle發布2026年10月關鍵修補更新，共修補1,209個漏洞 - iThome

**Source:** [Oracle發布2026年10月關鍵修補更新，共修補1,209個漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1yM3hyOWRpUEZOSFVRaWZGNVZsY1pCZlFXajhRYnh6dGVLbVFKYVhCbjA0UTVkd1JDcDdHTG85Rm0wSnl3ejJMS0dyZnR1QQ?oc=5>)

---

### How Bank Hackers Got Claude to Do Their Dirty Work - The Information

**Source:** [How Bank Hackers Got Claude to Do Their Dirty Work - The Information](<https://news.google.com/rss/articles/CBMikgFBVV95cUxOTTNEVmwzUXdMN2FBUWo5V1paRXNOelFyR1FVeV9MZjdTSXV0eVRtcUxvVEFNa0Y4NGpPWDFBQ2N0SWpmRWl6UjFrWnlSNk9nUUZlQ0pmdU5jSC1WQUgybl9UTWdCODBoalBoMEpxY0xTcEk2TVNxUjhlM19nQWlpMEpOb2otSGJXZ1lPdE9XczE0Zw?oc=5>)

---

### 防範AI代理越界行為，NIST提出事件應變指引 - iThome

**Source:** [防範AI代理越界行為，NIST提出事件應變指引 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1XQ0RSdTJlbWYxT29HNGJZbVYwNkNrbDNSNlh1LXRBMjVaWnpveGE2OXVYRHhwWTBmYk9hVkZfaHBoSWMxNDVoQjhFbHlyZw?oc=5>)

---

### 加州教育部 - iThome

**Source:** [加州教育部 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxQWl9KaVF4TkJxV04tLWhaTTQ0V2lfTUhHZXpSY0I3U1d2ejZrd1BlZzNCMzh6UjVITzluT05yZVNEQnhVVldybnk1a3N4enFjZGg3a1o2TjRGNVVrb2lIeENKUUdXOWdBaEVUVXRKcmI0ZWt1V0JTcGY0dHFHWHhFRmZ3?oc=5>)

---

### 科懋商城會員個資遭擷取，指出是委外服務商系統遭自動化攻擊 - iThome

**Source:** [科懋商城會員個資遭擷取，指出是委外服務商系統遭自動化攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE13Q1hIYjdZdU1hdG80Tjd1bzFfWDZBTWExQ2JBeDBNVGxVaGswT2FwdzJLQVRjaEl5VmpsbDhIVnpkeVo1TUFRRkI0cDQ4Zw?oc=5>)

---

### TiDB Breach Exposes Flawed Cloud Security Assumptions

**Source:** [TiDB Breach Exposes Flawed Cloud Security Assumptions](<https://www.darkreading.com/cloud-security/tidb-breach-flawed-cloud-security>)

---

### Perplexity開源AI代理沙箱SPACE，強化程式碼執行隔離 - iThome

**Source:** [Perplexity開源AI代理沙箱SPACE，強化程式碼執行隔離 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5NRVlfakpVaWRyTlNDNGxDLWNiQkotU1haZDVaMHpLSUlSUHh6UWVoVVZ4eGhjVVhWdjdjT3pFZ2hmRWFRU18zdjBndFpqdw?oc=5>)

---

### Node.js修補4項高風險漏洞，Brotli解壓縮錯誤恐讓駭客遠端執行程式碼 - iThome

**Source:** [Node.js修補4項高風險漏洞，Brotli解壓縮錯誤恐讓駭客遠端執行程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5yaUlzVGEyLWx6blJPZDU3Y2xDa0hkY04zejBoSWx1ajZDcFlNVjFfXzFfd0t3ODdhVnN6ZUFlSTh3MUpBdmFLR0ZUR2N5Zw?oc=5>)

---

### Survey Finds High-Profile Executives Feel Untouchable as Digital Exposure Turns Into Physical Risk

**Source:** [Survey Finds High-Profile Executives Feel Untouchable as Digital Exposure Turns Into Physical Risk](<https://www.darkreading.com/cybersecurity-operations/360-privacy-survey-high-profile-executives-feel-untouchable>)

---

### JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）

**Source:** [JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）](<https://jvn.jp/vu/JVNVU99905564>)

---

### Anthropic取得Opaque機密AI技術與人才 - iThome

**Source:** [Anthropic取得Opaque機密AI技術與人才 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Uc2ZoVEVLdmFydUpHdzZrYVJ4SWlzNF9RZGZ5bzl5aUlpYTVSUzFpb0FWTWdGc1FlN1l3eTFhLUpXSVpFRmFmNV91MlpQUQ?oc=5>)

---

### 微軟開源Scope評測平臺，追蹤AI程式開發代理的任務表現 - iThome

**Source:** [微軟開源Scope評測平臺，追蹤AI程式開發代理的任務表現 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfVmwxUjc0NWluWjZCbGZrRHdvZjBndjBtV05PLVYtYjh5QmVQQmpTdkVUVFBZTnVDOWZoTndxa2U5UkxNc3lrMFhGbTR3dw?oc=5>)

---

### Группировка Lazarus применяет ИИ и постквантовое шифрование

**Source:** [Группировка Lazarus применяет ИИ и постквантовое шифрование](<https://xakep.ru/2026/10/21/operation-flashhole>)

---

### В США запретили использование продукции DeepSeek в государственных системах

**Source:** [В США запретили использование продукции DeepSeek в государственных системах](<https://xakep.ru/2026/10/22/deepseek-ban>)

---

### Marvell, Microsoft &amp;amp; Oracle Work to Standardize Data Center Hardware Security

**Source:** [Marvell, Microsoft &amp;amp; Oracle Work to Standardize Data Center Hardware Security](<https://www.darkreading.com/cloud-security/marvell-microsoft-oracle-standardize-data-center-hardware-security>)

---

### Cloud Security Alliance Survey Finds Data Loss Prevention Often Detects Data Loss Only After It Happens

**Source:** [Cloud Security Alliance Survey Finds Data Loss Prevention Often Detects Data Loss Only After It Happens](<https://www.darkreading.com/cloud-security/cloud-security-alliance-survey-data-loss-prevention-detects-data-loss>)

---

### Fortinet同步更新多款產品，涵蓋5大產品系列及多個版本分支 - iThome

**Source:** [Fortinet同步更新多款產品，涵蓋5大產品系列及多個版本分支 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1WT0RXTnZRRE5PWkpVTVVkR0U4QXdjYXZ4R28tYjVBbHA4amwzUWhKSWhuTGJhb3Z5SzVITHVQQTZjN2pSSE9rZVhoaHdzUQ?oc=5>)

---

### AI can write articles in seconds, but Claude maker Anthropic is hiring a human writer for Rs 3.25 crore - The Economic Times

**Source:** [AI can write articles in seconds, but Claude maker Anthropic is hiring a human writer for Rs 3.25 crore - The Economic Times](<https://news.google.com/rss/articles/CBMiiAJBVV95cUxPNlZjbGVFS01tUjlYZXpwcGc1d1Y4NzNxYlpXQV9GYXR4RnR4TnRMc1NwUVNfdlROVjU3TDM1NS1NdlhSdjF3SUU5V2x4dlgzeE1JRExRQUl5THBrcUU5SFdUN0FETU80Q3VVQ1BURUZuRjgzMHBwRDNmZWJ0MGlRV09LOExGZHBHQXhpWlQ5SUhSVGZNVjVvakx3TEoxdzlsVnI3YUlYaFRmd3BFZjA5QWJRR3hvbVJkM1doRWd0ek5UYnFDalQ2Sll2Zjl5UUJVcmZoLWJiSjR2S1RiUDZNSGR4TWZTWUZNTGJ3UlFKVGlxalhQX3lEaXFHMVZabi1RQ1FzYlF1SWHSAYgCQVVfeXFMTzZWY2xlRUtNbVI5WGV6cHBnNXdWODczcWJaV0FfRmF0eEZ0eE50THNTcFFTX3ZUTlY1N0wzNTUtTXZYUnYxd0lFOVdseHZYM3hNSURMUUFJeUxwa3FFOUhXVDdBRE1PNEN1VUNQVEVGbkY4MzBwcEQzZmVidDBpUVdPSzhMRmRwR0F4aVpUOUlIUlRmTVY1b2pMd0xKMXc5bFZyN2FJWGhUZndwRWYwOUFiUUd4b21SZDNXaEVndHpOVGJxQ2pUNkpZdmY5eVFCVXJmaC1iYko0dktUYlA2TUhkeE1mU1lGTUxid1JRSlRpcWpYUF95RGlxRzFWWm4tUUNRc2JRdUlh?oc=5>)

---

### 【AI+DeepSeek】DeepSeek據報已完成集資1000億元人民幣 騰訊及寧德時代領投 - 香港經濟日報HKET

**Source:** [【AI+DeepSeek】DeepSeek據報已完成集資1000億元人民幣 騰訊及寧德時代領投 - 香港經濟日報HKET](<https://news.google.com/rss/articles/CBMijwNBVV95cUxQVXRfT2ZHblhHTDlzUFBiSnNVRVhHa0dMclB4SWh4cXRNUFdsLU5zSVhIVTB2RnFyeEY4eEpWY1d4WEZYOXNXTW5Db2tlOXppTGc1dzlCVFhUUDNfZ01INEFvZzVzVS00TGZSR0x1bkZ4a0tCeTR3Zl9HV0FrRlN3R2xsX0JFOHdKcWhoMnd0ZUxWLXF1SlJ6QnJPYUxYd0h5YnliR1dvdXhYQWU3YzJtVGxIa0hEWHdWaGcta0VDZWFaWGRaTy1JNjg0VzFnY0h0eVllWW5UMGtFT3JJNUxOZGR4YlNCUW9CMWJ4QnlLZVdTZ3dzdW1nRHl3b1RjY2VvaDNfekVqVFNjdnE4N2tYT1l4N2xWcjBadzdDOHQ2RWpJb1BPZXJrV0U1WlR6THFqUHk4Z243RDF2QkFCZjJMeDVpdUh3dVh2WmtCbFUydzAzVEtTRmk5bHZ5ZkVOOEVGNVlWVEc5aXUtT0dJWWZVU1A2REd4RV9ybTZDMUM0czB1NnRiMkVDUGNBR3VPUkk?oc=5>)

---

### Grok 4.7 Is Now in Viktor: What You Need to Know - BASENOR

**Source:** [Grok 4.7 Is Now in Viktor: What You Need to Know - BASENOR](<https://news.google.com/rss/articles/CBMiigFBVV95cUxNX0JfbG9SS093R256RzVUcHZ6dmVvZDAtMklfOEtJRGVkWlVYRm9zVWpnNEI5eFlyZUZuSzV1VThfRy1UTTdTT0RadUNiaEN3dDJic2lwdG5QUmlWdlBZQ1dpU0NzM3Z3OGk3X29kbEo2dURMSWNSMlpBNkI3VzhqYWR2V1Z5MTB0X2c?oc=5>)

---

### Anthropic takes on Muse with Claude Duet, its new AI agent - The Verge

**Source:** [Anthropic takes on Muse with Claude Duet, its new AI agent - The Verge](<https://news.google.com/rss/articles/CBMilAFBVV95cUxQMm0xalYzS19NOGxhQ0ZpanpWeFpjN3g0VzZfVjROQ3RUemxqZmc3STZhdHlRUTlvZEJOaW52dzdVTUxOc09MMzlVeFlJSmc5V2p4WDdwWjRRaDZKMU5QbldoWHBIaTh0Qi1yc1JFaVNHM1BkQ25ucFZfbVJtWGNYMS1jRWlocDk5NUVheDVpclZEUTJw?oc=5>)

---

### Claude Duet: Anthropic’s New Always-On A.I. Agent - www.trendingtopics.eu

**Source:** [Claude Duet: Anthropic’s New Always-On A.I. Agent - www.trendingtopics.eu](<https://news.google.com/rss/articles/CBMibkFVX3lxTE5HUzdtaldsWUJvOVplcC1YZDgxSmhjRUJVcHVVaHhlYS0zUkl6WENZN1JlZ0tkRXg2M0pxZ1d2NHJYaHg3NHFKam9BUU0yczl5Mk03WkpEMVRGdmJKNlpjTW5iQkxCMVM1a2x2N1JB?oc=5>)

---

### Grok AI Predicts Something Big is Brewing for XRP by Jan 1, 2027. - Cryptonews

**Source:** [Grok AI Predicts Something Big is Brewing for XRP by Jan 1, 2027. - Cryptonews](<https://news.google.com/rss/articles/CBMimAFBVV95cUxOUTJlNVU1bUI5R1M3eUdha2plRHZZeEk5LVc4eVVHTEloNzFvR0lMWHdwWmJaaURiTVJEWUlyWVlqNmZHQXNrMS1oclhIQ09TQl95Q1BXRmdXSktiUm1hQ2drcWFTeTRhYW9oS3ptcTJLTlVaU3N4dzRRdTZPRm13azZoMzhtNVhUS2JTcS0wVklCR1RxeXRTZg?oc=5>)

---

### Claude Maker Anthropic Discloses Mind Boggling $80 Billion Loss - Android Headlines

**Source:** [Claude Maker Anthropic Discloses Mind Boggling $80 Billion Loss - Android Headlines](<https://news.google.com/rss/articles/CBMijwFBVV95cUxQWXBzVDFBNE13VDEzdTVwZFQ5YU85akxXU3VKQlc5Y2V2am9zY083dHBEVU5UNUdOUVZRaUJJU2tBVEF3ZDE2Rnlub0ZGcXFnUGxpQnRZNWR4d1JPUlJXLXM2d0k1NWN5ZlN2MDNCTmZxdUhvRTFUdy0xX3ZGdVhRZnZEVDJRQ0pvVzhxYjRDWQ?oc=5>)

---

### 微軟開放Pylance切換型別檢查器，VS Code支援Meta Pyrefly - iThome

**Source:** [微軟開放Pylance切換型別檢查器，VS Code支援Meta Pyrefly - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBPZDhDUHctX2lLeDE3bHBuaDFEM21vWmRPVmVUdXNRVXVnTE5SNDFvbmJCRlBNR1A2MjRDMG9GUDlSQ1J0QzBIUkhHTlpBUQ?oc=5>)

---

### Anthropic takes on Grok Bot, Meta's Muse, and OpenAI's Dots with its always-on agent "Claude Duet" - the-decoder.com

**Source:** [Anthropic takes on Grok Bot, Meta's Muse, and OpenAI's Dots with its always-on agent "Claude Duet" - the-decoder.com](<https://news.google.com/rss/articles/CBMiuAFBVV95cUxQRG9HZVRLSE1uRXNxWURQMkxmYlN3N050MmMwanJhUUc5QTN5b1VMYnNRc1ZWSlhENEluZ25EZkpQcnB0U2hTRFJRT2RQbFNIS0NzbnlDcF9jZHJJSEdsc1pwMWw2enloVDhjMW5PZHR0ZFZYa0ZrZ2dKWlhMSFQ2dGtDdktUaGZpc19TWDBfTlhpYTkxWlozVXdrZ0EySk1CRjdoUEk3NXBZTF9obVdiSW9DV29rNVhJ?oc=5>)

<!-- ciso-revision:ciso-20261022-7-available-1792737853597 -->
