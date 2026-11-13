---
title: "CISO Daily Digest: Attacker Used 4,837 Hijacked GitHub Accounts to Run a CI Secret Stealer in 1,806+ Repositories (20261112)"
description: "Partial digest: completed summaries and original sources are shown; some translations are unavailable."
pubDate: 2026-11-12
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Partial digest: completed summaries and original sources are shown; some translations are unavailable.

### 📌 Attacker Used 4,837 Hijacked GitHub Accounts to Run a CI Secret Stealer in 1,806+ Repositories

Attacker Used 4,837 Hijacked GitHub Accounts to Run a CI Secret Stealer in 1,806+ Repositories

Starting Tuesday, an attacker used stolen credentials for 4,837 GitHub accounts to plant a secret stealer in repositories those accounts could write to, according to Aikido Security. The stealer targets CI workflow secrets and cloud credentials, running in at least 1,806 repositories. The attack began with pull requests titled "docs: dependency audit notes" from branches named wfx-docs, opened in 61,764 repositories to test write access. SafeDep counted 8,093 repositories receiving malicious commits between 12:46 UTC Tuesday and 04:36 UTC Wednesday, with 7,309 getting the stealer in an existing workflow and 771 via npm postinstall hooks. Where the stealer ran, all secrets and cloud roles available to the workflows should be treated as compromised, and logs were typically deleted along with the run.

More pull requests with the same title appeared early today from wfx-docs branches, though it is unclear whether the stealer followed. Any account that opened one of the attacker’s test pull requests is compromised even if the stealer never ran. The stealer collects GitHub Actions secrets and variables, GITHUB\_TOKEN, OIDC and Actions runtime tokens, AI service keys, and credential files for AWS, Azure, GCP, Kubernetes, npm, PyPI, SSH, and other tools. On self-hosted runners, it also takes cloud credentials from instance metadata, Docker container state, and systemd units. It exchanges GitHub OIDC tokens for AWS, GCP, and Azure sessions, and on AWS can create long-lived IAM access keys. It can rewrite an AWS role trust policy to open the role to any AWS account and add federated identity credentials with the prefix wfx-ci- to Azure AD applications, allowing sign-in without stored secrets even after token rotation. The stealer reached at least one Packagist package and one Go module, including malicious versions of digitalelvis/neuronai-studio and github.com/onuragtas/docker-env, and was found in 28 WebdriverIO repositories via the wdio-bot account. Overlap with GhostAction’s October wave was found, but Aikido does not attribute November activity to the same actor because infrastructure, tools, and methods differ.

**Source:** [Attacker Used 4,837 Hijacked GitHub Accounts to Run a CI Secret Stealer in 1,806+ Repositories](<https://thehackernews.com/2026/11/4837-hijacked-github-accounts-ran-ci.html>)

### 📌CISO Impact

- **Assume GitHub CI secrets are compromised —** Treat every secret, variable, token, and cloud role accessible to affected workflows as compromised; rotate all repository and cloud secrets, revoke OAuth grants and SSH keys, and enable 2FA on affected accounts.
- **Detect persistence beyond token rotation —** Audit AWS CloudTrail for AssumeRoleWithWebIdentity or CreateAccessKey activity tied to wfx- prefixes, inspect Entra ID for unauthorized federated credentials named wfx-ci-\*, and review GCP workload-identity JWT logins from the GitHub OIDC issuer.
- **Harden supply-chain and pipeline controls —** Block or pin malicious package versions such as digitalelvis/neuronai-studio v3.14.3 and github.com/onuragtas/docker-env v1.0.278/v1.0.280, treat machines that ran npm install on affected commits as compromised, and monitor for branches wfx-docs, chore/ short-lived branches, ci-check- branches, and pull requests titled docs: dependency audit notes.

---

### 📌 Critical Apache HTTP/2 Flaw Could Let Unauthenticated Attackers Execute Code Remotely

A critical flaw in Apache HTTP Server’s mod\_http2 module, tracked as CVE-2026-119618, lets unauthenticated remote attackers execute code on servers with HTTP/2 enabled, affecting versions 2.4.55 through 2.4.70; the fix is Apache 2.4.71, while Red Hat rates the flaw Important on RHEL 9 and 10 and says RHEL 8 and earlier are not affected. Wiz reports no public exploit or observed in-the-wild exploitation, and admins unable to patch can remove h2 and h2c from the Protocols directive as a temporary mitigation.

**Source:** [Critical Apache HTTP/2 Flaw Could Let Unauthenticated Attackers Execute Code Remotely](<https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html>)

---

### 📌 New N-central Exploits Work Against Patched Servers, Enable Root RCE and Windows SYSTEM Access

Researcher Sean Bales disclosed 4EverAble2Shell and Agent2Shell affecting N-central on-premise versions 2026.4.1 HF2 and patched build 2026.4.1.26; 4EverAble2Shell enables unauthenticated root RCE when the Legacy API is publicly exposed, while Agent2Shell uses more than 10 zero-days to run commands as Windows SYSTEM on managed agents. N-able says hosted environments are unaffected and urges customers to disable the Legacy API immediately; probes from IP 157.20.241.16 have been observed but no confirmed exploitation is reported.

**Source:** [New N-central Exploits Work Against Patched Servers, Enable Root RCE and Windows SYSTEM Access](<https://thehackernews.com/2026/11/new-n-central-exploits-work-against.html>)

---

### 📌 N-able Takes N-central Platform Offline After Discovery of 33 Flaws

**Source:** [N-able Takes N-central Platform Offline After Discovery of 33 Flaws](<https://www.darkreading.com/endpoint-security/n-able-n-central-offline-33-flaws>)

---

### 📌 ScreenConnect Attacks Target at Least 288 Endpoints Across 48 Organizations With Rogue Clients

**Source:** [ScreenConnect Attacks Target at Least 288 Endpoints Across 48 Organizations With Rogue Clients](<https://thehackernews.com/2026/11/screenconnect-attacks-target-at-least.html>)

---

### 📌 Calendar Invites and Live Proxies: Inside a Google Session Hijacking Campaign

**Source:** [Calendar Invites and Live Proxies: Inside a Google Session Hijacking Campaign](<https://thehackernews.com/2026/11/calendar-invites-and-live-proxies.html>)

---

### 📌 航運巨擘馬士基證實資料外洩，傳遭勒索組織WhiteArmor索討500萬美元 - iThome

**Source:** [航運巨擘馬士基證實資料外洩，傳遭勒索組織WhiteArmor索討500萬美元 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5vUmF6N09IamRuUlNzeXE4d1k5Mm9yY2VBWllFY1U0MUtnclVYZlhhcnFYdFJqVVlZYW54OTE4WUVuSktCVm9KR3Q2YXVpQQ?oc=5>)

---

### 📌 N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome

**Source:** [N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA0bnRabktvT2NnWV8wWWxpVV9yZFVTcThQYXZwc0o2Mm1FT25zR1hWdm84eXZJZ0dqUWFoMVZWVXZQZVF4cWlmRVVscTN2UQ?oc=5>)

---

### 📌 Google Cloud Warns Three AMD Turin CPU Flaws Could Leak Data Across Processes in VMs

**Source:** [Google Cloud Warns Three AMD Turin CPU Flaws Could Leak Data Across Processes in VMs](<https://thehackernews.com/2026/11/google-cloud-warns-three-amd-turin-cpu.html>)

---

### 📌 PTC Patches Critical Windchill and FlexPLM Flaw That Could Enable Remote Code Execution

**Source:** [PTC Patches Critical Windchill and FlexPLM Flaw That Could Enable Remote Code Execution](<https://thehackernews.com/2026/11/ptc-patches-critical-windchill-and.html>)

---

### 📌 AntiFox AI Pentesting Platform Linked to Attacks That Accessed AWS Production Secrets

**Source:** [AntiFox AI Pentesting Platform Linked to Attacks That Accessed AWS Production Secrets](<https://thehackernews.com/2026/11/antifox-ai-pentesting-platform-linked.html>)

---

### 📌 微軟揭露駭客利用代理型AI搜尋GitHub外洩憑證，5分鐘內從Azure Key Vault外傳資料 - iThome

**Source:** [微軟揭露駭客利用代理型AI搜尋GitHub外洩憑證，5分鐘內從Azure Key Vault外傳資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RNm9YWEVpeHY4QlR2eDY4Rkt2a3pKMUphWnFYLVM3VWtycUUxWC13UzIxbWtCeVhOYXNkWmtHcW45RlRZX3N0OENjUktnQQ?oc=5>)

---

### 📌 外交部領務局網站遭駭，逾7.2萬個護照大頭照外洩，另有授權書及ABTC資料遭取得 - iThome

**Source:** [外交部領務局網站遭駭，逾7.2萬個護照大頭照外洩，另有授權書及ABTC資料遭取得 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9KVU5BcHRDVUpXZHNWbVd3M1NrT0hiTjh0bndzR1l5Ml9aN0VHUW5BZDNZQlB2UWRIekt6cUVaYUxkSHRIQU91aEtwZ3hsQQ?oc=5>)

---

### 📌 Node.js Fixes 16 Flaws, Including HTTP/2 Bugs That Crash Servers and Leak Other Connections' Data

**Source:** [Node.js Fixes 16 Flaws, Including HTTP/2 Bugs That Crash Servers and Leak Other Connections' Data](<https://thehackernews.com/2026/11/nodejs-fixes-16-flaws-including-http2.html>)

---

### 📌 Critical Zoom Workplace Flaw Could Allow Unauthenticated Remote Privilege Escalation

**Source:** [Critical Zoom Workplace Flaw Could Allow Unauthenticated Remote Privilege Escalation](<https://thehackernews.com/2026/11/critical-zoom-workplace-flaw-could.html>)

---

### 📌 netiCRM服務商最新調查指出是內部管理主機遭駭，暫未發現捐款人資料外洩，已將500家客戶主機納入檢查及重建範圍 - iThome

**Source:** [netiCRM服務商最新調查指出是內部管理主機遭駭，暫未發現捐款人資料外洩，已將500家客戶主機納入檢查及重建範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1vUkRvWWxaeGVSaTJ6TVVQVVdzVWZucnlyNkd3anRhbTR6MEE0YjA3VFNpX1ZnenlvcnRnelpMb0RaaWRGQ3dlNzh2UjhFZw?oc=5>)

---

### 📌 Critical Pre-Auth MongoDB Flaw (CVE-2026-118383) Can Crash Lagging Servers on Failover

**Source:** [Critical Pre-Auth MongoDB Flaw (CVE-2026-118383) Can Crash Lagging Servers on Failover](<https://thehackernews.com/2026/11/critical-pre-auth-mongodb-flaw-cve-2026.html>)

---

### 📌 JVN: KUSANAGIにおけるHTTPヘッダーインジェクションの脆弱性

**Source:** [JVN: KUSANAGIにおけるHTTPヘッダーインジェクションの脆弱性](<https://jvn.jp/vu/JVNVU92635551>)

---

### 📌 駭客濫用AI代理滲透測試平臺AntiFox，發動AWS雲端憑證竊取攻擊 - iThome

**Source:** [駭客濫用AI代理滲透測試平臺AntiFox，發動AWS雲端憑證竊取攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nX1Q5OUxmYUktMHozcFNfVGtCdWlVb0p6MjBLUXdfZ2VjTW52OEYwVk9rUXcwWXc4aEhPNWNRb0FleEd2N0pHS29GYWtHdw?oc=5>)

---

### 📌 菲律賓證管會傳數位平臺被駭，逾40萬用戶資料外洩 - iThome

**Source:** [菲律賓證管會傳數位平臺被駭，逾40萬用戶資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9NTWVHNUhRamZBNExlUnNFZ0tpenRVLXJnQTYxamxncGNsa3F3UVo3UXo5MUQwMFBWOURXT2NqYnVUbHdzVF9uN25kOThNUQ?oc=5>)

---

### 📌 Fortinet揭露10月底修補的100個資安漏洞 - iThome

**Source:** [Fortinet揭露10月底修補的100個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBjWmVSRUFnYklBMFdZM1Q5alRoX1lVeGw4SEhEUGpZek1zUmRMTDJycy04dDh4MGdGdlRpTnlGUFVRbTQtdXFsdHQ1elZ4QQ?oc=5>)

---

### 📌 康橋國際學校林口校區遭Osiris勒索，傳出部分資料恐外流 - iThome

**Source:** [康橋國際學校林口校區遭Osiris勒索，傳出部分資料恐外流 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE11cVp2cUtvbnhvNU4tQkhndjNDaUhzd3hibXpnUlEwRzUxd0JtaXpYQno1ZGl1a1hFZzY1TjRWQ29tTnoxLU1mUHc3NjVsUQ?oc=5>)

---

### 📌 JVN: Apache HTTP Server 2.4における複数の脆弱性に対するアップデート（2026年11月11日）

**Source:** [JVN: Apache HTTP Server 2.4における複数の脆弱性に対するアップデート（2026年11月11日）](<https://jvn.jp/vu/JVNVU90805396>)

---

### 📌 Git修補6項資安漏洞，惡意儲存庫恐觸發任意程式碼執行 - iThome

**Source:** [Git修補6項資安漏洞，惡意儲存庫恐觸發任意程式碼執行 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0taGN5b2N6U2xQZERndEZYTEszZHI5LXRmZGpSTWFrSGZsSkZQV0VOVkh3clE5SXV4bUpsTTdydk9jQU9KRFdMMi0zOFV5UQ?oc=5>)

---

### 📌 Bitcoin Core раскрыл три уязвимости, самая опасная могла остановить работу мемпула

**Source:** [Bitcoin Core раскрыл три уязвимости, самая опасная могла остановить работу мемпула](<https://xakep.ru/2026/11/12/bitcoin-core-vulnerabilities>)

---

### 📌 Japan Pushes Emergency Funding for Cybersecurity as AI-Assisted Breaches Rise

**Source:** [Japan Pushes Emergency Funding for Cybersecurity as AI-Assisted Breaches Rise](<https://www.darkreading.com/cybersecurity-operations/japan-emergency-funding-cybersecurity-ai-assisted-breaches>)

---

### 📌 N-central資安漏洞Able2Shell公布後出現嘗試利用活動 - iThome

**Source:** [N-central資安漏洞Able2Shell公布後出現嘗試利用活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NTGJoOTRIRm5yNWQ1QlRUR1FLYWpDZFhXbVZmUTU5b2czSEZOQjhodUxHZXFSLTRoR2VXX3pCMjdEQWladXNwc0dBRVliZw?oc=5>)

---

### 📌 地下論壇有人聲稱兜售4.6萬筆台積電員工紀錄，台積電回應無證據顯示公司系統遭入侵 - iThome

**Source:** [地下論壇有人聲稱兜售4.6萬筆台積電員工紀錄，台積電回應無證據顯示公司系統遭入侵 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5GaTYtQ3NGUzcxVFBoellGWFNzMmdrZVI2ZzdabWZzY3pZcC0xQk1BdnZkVXpPc3Vmc3o4SFFhQ2tWNlNDaUdFOGVxWVBxdw?oc=5>)

---

### 📌 Из-за взлома Fireworks AI пострадали данные пользователей Notion

**Source:** [Из-за взлома Fireworks AI пострадали данные пользователей Notion](<https://xakep.ru/2026/11/12/fireworks-ai-notion>)

---

### 📌 Google預測2027年資安趨勢，AI代理將深入SOC與企業防禦 - iThome

**Source:** [Google預測2027年資安趨勢，AI代理將深入SOC與企業防禦 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9nd21XZ2Rua0J6bjhPVjhKeWJFQksxbUE0UW4tRXpPVTVIMlFUYV92S2ZlcWsyQU1jdnRuWmFjZnIxams3eE1GaWpjamhCQQ?oc=5>)

---

### 📌 Google同步更新Chrome 157穩定版、Chrome 156延伸穩定版與ChromeOS LTS版 - iThome

**Source:** [Google同步更新Chrome 157穩定版、Chrome 156延伸穩定版與ChromeOS LTS版 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5waWh0WG84a1d1Y2Znbm1DWjNEREZSNmRqM1Jxek4wYkdQYzJuNDljWUs0aHlXdXhnMFJ4UUo1cFQ0ZE5wcFpveHBiRHB3Zw?oc=5>)

---

### 📌 義大利約6,000所學校收炸彈恐嚇信、多校疏散，臺灣大葉大學校友帳號疑成跳板 - iThome

**Source:** [義大利約6,000所學校收炸彈恐嚇信、多校疏散，臺灣大葉大學校友帳號疑成跳板 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1zRzJuSHMzMW5KTVJtRFpHMlc1cFBBQkV4UHVERlJmM1BpOXVGUGRfbXMzeWdsR1NrSmIwOVlOX0xHUEg2VTMydzdrdWVCZw?oc=5>)

---

### 📌 Уязвимости Plex2Shell используются для атак на NAS Qnap

**Source:** [Уязвимости Plex2Shell используются для атак на NAS Qnap](<https://xakep.ru/2026/11/11/plex2shell-qnap>)

---

### 📌 JVN: 三菱電機数値制御装置におけるサービス運用妨害（DoS）の脆弱性

**Source:** [JVN: 三菱電機数値制御装置におけるサービス運用妨害（DoS）の脆弱性](<https://jvn.jp/vu/JVNVU95523788>)

---

### 📌 JVN: BrotliのC言語実装における境界外書き込みの脆弱性（CVE-2026-111497）

**Source:** [JVN: BrotliのC言語実装における境界外書き込みの脆弱性（CVE-2026-111497）](<https://jvn.jp/vu/JVNVU97400824>)

---

### 📌 Anthropic’s Claude Mythos Expands Into Cisco and IBM Security Platforms - Security Boulevard

**Source:** [Anthropic’s Claude Mythos Expands Into Cisco and IBM Security Platforms - Security Boulevard](<https://news.google.com/rss/articles/CBMirgFBVV95cUxQSVNoaW5CSkdrbHdGdWpnUGl0bFhTVE1iUHZ6dlNKSXRvenA5V05kZEZwdi01cndsLUpEOXRIM2lMU1FCQnY5SDdGWExGVm9JREppSTBhRmhyeWRGbXg5dUpqcUFYV0FXdWEza18zaWFLamw1LXJrQ3JzbXg1bFZOOEY1bkV1cjBXc1V5YmxWcUw2X3kzMEdEM3htcHkwWDJIRHFqWU1RaDlPNGZ0WUE?oc=5>)

---

### 📌 AlphaProof Code - iThome

**Source:** [AlphaProof Code - iThome](<https://news.google.com/rss/articles/CBMiWkFVX3lxTE9iQU8wbU5MTDBCZk42TjhQQm9BRHl0Q2Q5bzhpQUJOcWE5S0M3RUE4N1RGS204QkV2Q2VwdldBNU1KUTJDVXRWdnBHclBmRkF1b3RmZVlubnJndw?oc=5>)

---

### 📌 Заключенный получил восемь лет за попытку похитить криптовалюту прямо из тюремной камеры

**Source:** [Заключенный получил восемь лет за попытку похитить криптовалюту прямо из тюремной камеры](<https://xakep.ru/2026/11/11/robert-barr-crypto-heist>)

---

### 📌 ИИ снижает порог входа для атакующих и меняет архитектуру SOC

**Source:** [ИИ снижает порог входа для атакующих и меняет архитектуру SOC](<https://xakep.ru/2026/11/11/soc-forum-2026-day2>)

---

### 📌 Spoofing - iThome

**Source:** [Spoofing - iThome](<https://news.google.com/rss/articles/CBMiUEFVX3lxTE1jc2E4Y2YxVXR5MmJybk9rM0FscnZERm80R3BFa0otVjFZakJhMVdWR2RFTDU2Qm41N1NwRV9NNkdxbXVTbjVOT2VQWlRYbnI2?oc=5>)

---

### 📌 Apple tests an app in direct competition with LM Studio - Softonic

**Source:** [Apple tests an app in direct competition with LM Studio - Softonic](<https://news.google.com/rss/articles/CBMikgFBVV95cUxORnpqWXhGeDIzSjBEa2oybkhCajEwM1BBYXY4aHpmV1VCQnRDek1oMFdNcVlhSjhrOHdXQmFtOHlEUncxQ1prTnZZa3BpdFF2V2l6ZFNZNTRkY3pKVUhVTWNTalpZYVdFX3J2eF96dXY1YUlsQVVFUU5FVXJaVXZpQ0Y5MjdBM2xkeGdZb3FGZXpxdw?oc=5>)

---

### 📌 一起幫忙解決難題，拯救 IT 人的一天 - iT 邦幫忙

**Source:** [一起幫忙解決難題，拯救 IT 人的一天 - iT 邦幫忙](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBUelpvUWpObDN2Q2RGWHVlMmQ2QU43VHprZWgyUEE3THNJRFlmbHY2ZnRKRTMtOXNaRld6ZUw2NFJFY01TY24zT0hDN3dJT193ZHJndVZHeURhcTNSVXRVOVl3Sml4dFU?oc=5>)

<!-- ciso-revision:ciso-20261112-1-available-1794590333075 -->
