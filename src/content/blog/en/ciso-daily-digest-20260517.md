---
title: "CISO Daily Digest: Exchange Server 0-Day, Funnel Builder Skimming, Grafana Breach (20260517)"
description: "Microsoft Exchange Server zero-day under active attack, Funnel Builder WooCommerce skimming affects 40K+ stores, and Grafana GitHub token breach leads to extortion."
pubDate: 2026-05-17
tags: ["CISO Digest", "Exchange Server", "WooCommerce", "Grafana", "Zero-Day"]
author: "Security Solutions Team"
featured: true
---

Two critical **zero-day vulnerabilities** and a major **supply-chain code theft** dominated the security landscape on May 17. Microsoft disclosed **CVE-2026-42897** (CVSS 8.1), a cross-site scripting vulnerability in Exchange Server Outlook Web Access that is under active exploitation — with no permanent patch yet available. Separately, the **Funnel Builder (FunnelKit)** WooCommerce plugin vulnerability (affecting **40,000+ stores**) enables Magecart-style credit card skimming via injected JavaScript. **Grafana Labs** suffered a GitHub token breach leading to full codebase download and extortion by the CoinbaseCartel group.

- **Microsoft Exchange Server CVE-2026-42897** — XSS in OWA under active exploitation; CISA added to KEV catalog; Emergency Mitigation Service available as workaround
- **Funnel Builder (FunnelKit) CVE** — Unauthenticated JS injection on WooCommerce checkout pages sending data to wss://protect-wss[.]com; patched in v3.15.0.3
- **Grafana GitHub token breach** — CoinbaseCartel downloaded full codebase; Grafana refused ransom per FBI guidance; no customer data impact confirmed

🔗 **Reference:** Comprehensive coverage ([The Hacker News - Exchange](https://thehackernews.com/2026/05/microsoft-exchange-server-zero-day.html), [The Hacker News - Funnel Builder](https://thehackernews.com/2026/05/funnel-builder-flaw-under-active.html), [The Hacker News - Grafana](https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html))

📌 **Microsoft Exchange Server CVE-2026-42897 (CVSS 8.1) — Active Exploitation Confirmed**

An unauthenticated attacker can send a specially crafted email that, when opened in Outlook Web Access, executes arbitrary JavaScript in the victim's browser session — enabling **session hijacking**, credential theft, and **lateral movement**. Microsoft disclosed the vulnerability on May 14, two days after Patch Tuesday. CISA added it to the **Known Exploited Vulnerabilities** catalog on May 15, requiring federal agencies to mitigate by May 29. No permanent patch exists; organizations should apply the Exchange Emergency Mitigation Service immediately.

🔗 **Reference:** [MSRC Advisory](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-42897) | [Microsoft Tech Community](https://techcommunity.microsoft.com/blog/exchange/addressing-exchange-server-may-2026-vulnerability-cve-2026-42897/4518498) | [CISA KEV](https://www.cisa.gov/news-events/alerts/2026/05/15/cisa-adds-one-known-exploited-vulnerability-catalog)

📌 **Funnel Builder (FunnelKit) WooCommerce Checkout Skimming — 40,000+ Stores at Risk**

A critical unauthenticated vulnerability in the Funnel Builder WordPress plugin allows attackers to inject arbitrary JavaScript into **WooCommerce checkout pages**. The injected code masquerades as a Google Tag Manager script and opens a WebSocket to `wss://protect-wss[.]com` to fetch a tailored skimmer that steals credit card numbers, CVVs, and billing addresses. Patched in version **3.15.0.3**.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/funnel-builder-flaw-under-active.html)

📌 **Grafana GitHub Token Breach Leads to Codebase Theft and Extortion**

An unauthorized party obtained a token granting access to Grafana's GitHub environment and downloaded the company's full codebase. The attackers, attributed to **CoinbaseCartel** (an offshoot of ShinyHunters / Scattered Spider), demanded payment to prevent publication. Grafana declined, citing FBI guidance against ransom payments. CoinbaseCartel has claimed **170+ victims** across healthcare, technology, and manufacturing sectors since September 2025. Source code theft enables vulnerability research, IP theft, and potential supply-chain attacks.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html)

📌 **Claude Mythos AI-Assisted macOS Kernel Exploit — M5 MIE Bypass Achieved in Under a Week**

Security startup Calif used a preview version of **Claude Mythos** to develop the first public macOS kernel exploit bypassing Apple's **Memory Integrity Enforcement (MIE)** on **M5** hardware. The working exploit was built from April 25 to May 1, elevating from unprivileged local user to **root shell** on macOS 26.4.1. Represents a watershed moment demonstrating AI-assisted exploit development outpacing hardware mitigation deployment cycles.

🔗 **Reference:** [Decrypt](https://decrypt.co/367925/apple-mac-m5-system-exploited-anthropic-claude-mythos-ai) | [Cult of Mac](https://www.cultofmac.com/news/apple-macbook-pro-mie-claude-mythos-ai-exploit)

📌 **QNAP Joins Taiwan Product Security Vulnerability Hunting Program**

QNAP completed the Product Security Vulnerability Hunting Program organized by Taiwan's Ministry of Digital Affairs and the National Institute of Cyber Security. QNAP served as a **Blue Team** representative, submitting core products (ADRD NDR, QHora routers) for Red Team testing. **QuTS hero OS** demonstrated strong security. QNAP awarded **NT$200K+** in bounties to participating researchers.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/pr/175821)
