---
title: "CISO Daily Digest: Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot (20261107)"
description: "OpenSSH SSHole exploitation is already observed against password-disabled accounts, WordPress update installation can briefly expose a reachable installer under CVE-2026-119977, and Claude Code settings files have leaked thousands of secrets into public GitHub repositories."
pubDate: 2026-11-07
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot

Previdian reports exploitation attempts against the OpenSSH SSHole vulnerability, CVE-2026-123158, began less than nine hours after CVE publication, with confirmed root access on an Alpine Linux honeypot. The flaw lets unauthenticated attackers authenticate to password-disabled accounts using oversized passwords between 257 and 1,024 bytes when OpenSSH runs on musl libc with PAM disabled, and success grants the compromised account's existing permissions. Attackers ran reconnaissance commands including id, uname, and hostname from IP 89.116.89.18, while users are advised to install OpenSSH 10.6p2 or distribution patches, restart sshd, and monitor logs for accepted password entries on accounts that should not accept password logins.

### 📌CISO Impact

- **Patch OpenSSH immediately and audit privileged SSH accounts —** Apply OpenSSH 10.6p2 or distribution patches, restart sshd, and monitor sshd logs for accepted password events on accounts that should only accept key-based login.
- **Block wp-content/upgrade during WordPress updates —** Deny web access to wp-content/upgrade before applying version 7.1.4 or branch fixes, then confirm the path returns 403, to close the brief update window described by CVE-2026-119977.
- **Rotate secrets found in AI coding agent folders —** Search repositories and git history for .claude/settings.local.json and .claude/settings.json, rotate every exposed password, token, and key, then add local agent settings files to repository .gitignore and CI secret scanning.

**Reference:** [Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot](<https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html>)

---

## Active Threats This Week

📌 **Installing the Fix for an Exploited WordPress Flaw Can Expose Some Sites One Last Time**

Picus Security researcher Umut Bayram reports WordPress versions 4.7 through 7.1.3 are affected by CVE-2026-119977, which CISA added to its known exploited vulnerabilities catalog; during core updates using complete packages, the temporary wp-content/upgrade folder can keep a predictable name under old updater code, allowing unauthenticated attackers to run PHP code before the copy is deleted, and Bayram recommends blocking web access to wp-content/upgrade before updating to 7.1.4 or branch fixes.

**Reference:** [Installing the Fix for an Exploited WordPress Flaw Can Expose Some Sites One Last Time](<https://thehackernews.com/2026/11/installing-fix-for-exploited-wordpress.html>) 

---

📌 **Claude Code's "Don't Ask Again" File Exposes Passwords and Keys in 1,122 Public Copies on GitHub**

Apiiro reports 1,122 public copies of Claude Code's .claude/settings.local.json contain at least one secret, including 379 database passwords, 43 SSH logins, 42 tokens, and 23 AWS keys, with older versions adding 734 more secrets across 509 repositories, and researchers recommend rotating all exposed credentials before cleanup because git history and forks retain the data.

**Reference:** [Claude Code's “Don't Ask Again” File Exposes Passwords and Keys in 1,122 Public Copies on GitHub](<https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html>) 

---

📌 **Testing Demonstrates DeepSeek AI Coding Agent Vulnerable to Credential Theft via Source Code Comments**

Hands-on testing of a DeepSeek automated code-writing agent revealed that while the AI can complete pull requests within minutes, it can be manipulated by malicious source code comments into leaking user credentials. Development teams using autonomous AI coding tools should review how agents parse untrusted source text and enforce strict secret management to prevent automated data exfiltration.

**Reference:** [越認真的AI 越容易被騙？DeepSeek 自動寫碼代理實測：兩分鐘完成PR，但一行原始碼註解就能偷走你的憑證 - https://cyberq.tw/](<https://news.google.com/rss/articles/CBMid0FVX3lxTE1xZ0ZrNVZ4N0VIcEZweWZlLWRwMTJ0SmRjcUNBb2dwT05TUGs5SWdIM0JrVVlEOVdsWXVlQm5WTkxWMTFVNElvX0VpM3FRcmxJT2tVczAwTjUyaHNpQ0RfWXZTWlFRVFVxWUpLeVhfNkFwN2ZmZmhB?oc=5>) 

---

📌 **Chainalysis Suspends Crypto Transaction Monitoring Following Breach Involving User Passwords and Tokens**

Blockchain analytics firm Chainalysis has temporarily suspended its cryptocurrency transaction monitoring services following a cyber incident that impacted user passwords and API tokens. Affected organizations and users relying on the service should proactively rotate associated authentication credentials, invalidate exposed tokens, and track official updates regarding service restoration and exposure scope.

**Reference:** [Chainalysis遭駭波及使用者密碼與權杖，暫停加密貨幣交易監控服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtOHFfdVlvcGFzd243UW1EQmhmbktoWTdBS0tGNnRBTEhUVVRXSlJIR2ttTmhhYTY2R09wYjI4MDZEc0FoUjJyVmQ2d3lIZw?oc=5>) 

---

📌 **Tengshi Outsourced Online Service System Suffers Anomalous Access Triggering Incident Response**

Tengshi has initiated cybersecurity emergency response and an investigation into the scope of impact after detecting abnormal access on an outsourced online service system. Organizations leveraging external service providers should verify third-party access controls, inspect logs for unauthorized data access, and await confirmed reporting regarding affected systems and data.

**Reference:** [騰勢委外線上服務系統遭異常存取，已啟動資安應變並調查影響範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1XWXpqMWJQQXpkZ2lNVk1MT0dHVnJRRlg2clJQMXI5TUU3Wl8xdUEwTC1fa29iUDlUV2oxNGgwLTFubExHem5rY2Y4aDh3UQ?oc=5>) 

---

📌 **Linux kernel IPv4 TCP connection vulnerability affects widely, multiple vendors release patches**

iThome reports that a Linux kernel IPv4 TCP connection vulnerability has broad impact and multiple vendors are releasing patches.

**Reference:** [Linux核心IPv4 TCP連線漏洞影響廣泛，多家廠商陸續推出修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBMVi1BajQ4ZG5TM2s1SzVCcWFmRkZzcnB1anZoOE1uTHdGN2ZVMXFrOGJnOHc4SGRpZ3hxZlZoaTZ2NXRma2lkOU90dTdodw?oc=5>) 

---

📌 **US authorities prohibit federal agencies from using Acronis software**

Xakep reports that US authorities have banned federal agencies from using Acronis software.

**Reference:** [Власти США запретили федеральным ведомствам использовать ПО Acronis](<https://xakep.ru/2026/11/06/acronis-usa>) 

<!-- ciso-revision:ciso-20261107-1-1794069731552 -->
