---
title: "CISO Daily Digest: NGINX Zero-Day, Claude Mythos Exploits, AI Bot Surge (20260518)"
description: "NGINX Rift vulnerability actively exploited, Claude Mythos builds working exploits across 50 Cloudflare repos, AI-driven bot attacks surge 12.5x."
pubDate: 2026-05-18
tags: ["CISO Digest", "NGINX", "Claude Mythos", "AI Bots", "Cloudflare", "CVE"]
author: "Security Solutions Team"
featured: true
---

A critical **NGINX** vulnerability (CVE-2026-42945, CVSS 9.2) dubbed "Rift" has been actively exploited since May 16, with first confirmed exploitation cases reported by Xakep.ru. Claude Mythos AI demonstrated the ability to build working exploits across **50 Cloudflare repositories** with an **83% success rate**, raising alarm from FSB and global cybersecurity agencies. Thales' **2026 Bad Bot Report** revealed that AI-driven bot attacks surged **12.5x year-over-year**, with bots now accounting for **53% of all web traffic**.

- **NGINX CVE-2026-42945 ("Rift")** — CVSS 9.2, actively exploited since May 16; affects all NGINX versions with specific configurations; no official patch yet
- **Claude Mythos automated exploitation** — Built working exploits across 50 Cloudflare repos at 83% success rate; targeted Cloudflare Workers, CDN, D1 database
- **Thales 2026 Bad Bot Report** — AI bot attacks up 12.5x; bots = 53% of all web traffic; most sophisticated bots now use ML-driven human mimicry
- **Grafana Labs access token breach** — GitHub codebase downloaded and extorted by CoinbaseCartel
- **Fluke data breach** — Industrial test equipment manufacturer; 18,517 people affected; SSN, DOB, disability status exposed

🔗 **Reference:** Comprehensive coverage ([The Hacker News - DirtyDecrypt](https://thehackernews.com/2026/05/dirtydecrypt-poc-released-for-linux.html), [Xakep.ru - NGINX](https://xakep.ru/2026/05/19/cve-2026-42945-attacks/), [The Hacker News - Claude Mythos](https://thehackernews.com/2026/05/claude-mythos-cloudflare-exploits.html))

📌 **NGINX CVE-2026-42945 "Rift" (CVSS 9.2) — Active Exploitation Confirmed**

An **18-year-old bug** in NGINX's HTTP/2 stream processing module has been actively exploited since May 16. The vulnerability allows **remote code execution** in specific configurations. Researchers reported the first exploitation cases from Xakep.ru covering CVE-2026-42945 attacks. System administrators should immediately review NGINX configurations and apply vendor mitigations as they become available.

🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/05/19/cve-2026-42945-attacks/) | [The Hacker News](https://thehackernews.com/2026/05/dirtydecrypt-poc-released-for-linux.html)

📌 **Claude Mythos Builds Working Exploits Across 50 Cloudflare Repositories at 83% Success Rate**

Anthropic's **Claude Mythos** AI system achieved an **83% success rate** in building working exploits targeting **Cloudflare's infrastructure**. The AI autonomously identified vulnerabilities across **50 Cloudflare repositories** including Cloudflare Workers, CDN configurations, and D1 database services. The FSB and global cybersecurity agencies have raised concerns about the acceleration of AI-driven vulnerability discovery and exploitation, with implications for critical internet infrastructure.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/claude-mythos-cloudflare-exploits.html) | [SecurityWeek](https://www.securityweek.com/claude-mythos-ai-exploits-cloudflare)

📌 **Thales 2026 Bad Bot Report — AI-Driven Bot Attacks Surge 12.5x**

Thales' annual Bad Bot Report reveals that **AI-driven bot attacks** surged **12.5x year-over-year**, with automated traffic now representing **53% of all web traffic**. The most sophisticated bots use **ML-driven human mimicry** to evade detection, including human-like mouse movements, randomized timing, and browser fingerprint spoofing. Account takeover (ATO) attacks increased **87%** year-over-year, driven by AI-powered credential stuffing.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/175827) | [Thales Report](https://www.thalesgroup.com/en/markets/digital-identity-and-security/bot-management)

📌 **Fluke Data Breach — Industrial Test Equipment Manufacturer Exposes 18,500 Records**

Industrial test equipment manufacturer **Fluke** suffered a data breach affecting **18,517 individuals**. The exposed data includes Social Security numbers, dates of birth, and disability status information. The breach highlights the expanding attack surface targeting industrial and manufacturing sector organizations.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/175839)

📌 **Windows MiniPlasma Zero-Day (CVE-2020-17103 Re-Emerges) — SYSTEM Access on Fully Patched Win11**

A vulnerability initially patched as CVE-2020-17103 has re-emerged as a bypass affecting fully patched Windows 11 systems. The exploit achieves **SYSTEM-level access** through the Windows Update Client Elevation of Privilege path. Organizations should monitor Microsoft security advisories for updated patches.

🔗 **Reference:** [BleepingComputer](https://www.bleepingcomputer.com/news/security/windows-miniplasma-zero-day-grants-system-access-on-fully-patched-win11/)
