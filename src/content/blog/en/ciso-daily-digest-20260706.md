---
title: "CISO Daily Digest: Fable 5 Returns With Limits as Meta Bans Claude, Alibaba Fallout Spreads (20260706)"
description: "Anthropic restores Claude Fable 5 with temporary usage limits after US lifts export controls; Meta restricts engineers from using Claude and Codex over data security fears; Alibaba classifies Claude Code as spyware; FatFs embedded filesystem 7 vulns affect USB/SD devices; UltraVNC RCE patched; libssh2 PoC disclosed without coordination; ClamAV 20-year-old vulnerability fixed by Cisco; Armored Likho APT targets Taiwan government with BusySnake Stealer; Medtronic breach affects 3.8M; FortiBleed linked to INC/Lynx ransomware; PyPI malware targets Telegram bots; Google-FBI disrupt NetNut 2M-device proxy botnet."
pubDate: 2026-07-06
tags: [Anthropic, Fable 5, AI Governance, Meta, Alibaba, Claude Code, Supply Chain, FatFs, UltraVNC, libssh2, ClamAV, Armored Likho, Medtronic, FortiBleed, PyPI, NetNut, Threat Intelligence, CISO]
author: "Security Solutions Team"
featured: true
---

## Anthropic Fable 5 Returns With Limits — Meta Bans Claude, Alibaba Fallout Spreads

Anthropic's most advanced AI model, Claude **Fable 5**, has officially returned to global availability after the US government lifted export controls, but with **temporary usage limits** in place that cap per-user access. The return marks the end of a months-long restriction period during which the US government blocked access over national security concerns stemming from successful jailbreak attempts. Anthropic restored Fable 5 on July 1, but users report significant rate-limiting and reduced context windows for the highest-tier model.

Simultaneously, the AI governance landscape shifted on multiple fronts:

**Meta restricted engineers from using Anthropic's Claude and OpenAI's Codex** — citing data security and intellectual property risks. The social media giant has directed its engineering teams to cease using third-party AI coding assistants, preferring internal tooling. The move mirrors Alibaba's broader Claude Code ban and suggests a growing trend of large tech companies walling off AI toolchains from external vendors.

**Alibaba's Claude Code ban deepened** — the Chinese e-commerce group classified Claude Code as "high-risk spyware" after an alleged hidden backdoor was discovered that detects usage from within China. All ~200,000 Alibaba employees have been ordered to migrate to the in-house Qoder AI coding assistant by July 10.

**Anthropic launched Claude Science for drug discovery** — the company released Claude Science for Mac, an agentic AI workbench designed to accelerate laboratory research in genomics, drug discovery, and materials science. Anthropic also announced preliminary talks with Samsung to manufacture custom AI inference chips.

**Anthropic faces $75M copyright lawsuit** — a new class-action lawsuit alleges Anthropic pirated copyrighted books to train Claude, demanding $75 million in damages. This adds to growing legal pressure on AI training data practices.

### Why This Reshapes AI Governance

The simultaneous lifting of Fable 5 export controls, the Meta ban, and the Alibaba spyware classification create a clear bifurcation in the AI tool landscape. On one side, US-based enterprises are restricting third-party AI tools over data leakage concerns; on the other, Chinese firms are blocking US AI tools over national security allegations. For CISOs, the message is unambiguous: AI coding assistants are now subject to the same supply-chain vendor risk assessment as any other third-party software component. The Fable 5 return with usage limits also signals that even government-cleared frontier models carry operational risk parameters that enterprises must monitor.

---

## Active Threats This Week

📌 **FatFs Embedded Filesystem — 7 Vulnerabilities Affecting USB Drives and SD Cards**
Seven vulnerabilities (CVE-2026-6682, CVE-2026-6687, CVE-2026-6688, among others) were disclosed in FatFs, a widely-used embedded filesystem component found in USB flash drives, SD memory cards, and countless IoT devices. The flaws could allow remote code execution or data corruption when a device reads a maliciously crafted filesystem image. Many affected devices may never receive patches due to vendor abandonment.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177089) | [The Hacker News](https://thehackernews.com/2026/07/monday-recap-proxy-botnets-browser.html)

📌 **UltraVNC RCE Vulnerability Patched — Update Immediately**
A critical remote code execution vulnerability in the open-source remote desktop tool UltraVNC was patched. Users running unpatched versions risk full system compromise if an attacker can trick them into connecting to a malicious VNC server. CISOs should inventory and update all UltraVNC installations across their environment.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177094)

📌 **libssh2 PoC Exploit Disclosed Without Coordination — Critical SSH Library Flaw**
Security researchers published a proof-of-concept exploit for a critical vulnerability in **libssh2**, a widely-used SSH library, without coordinating with the maintainers. The vulnerability could lead to remote code execution in applications that use the library for SSH connections. The lack of coordinated disclosure puts pressure on downstream consumers to patch urgently.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177097)

📌 **Cisco Patches ClamAV After 20-Year-Old Vulnerability Discovered**
Cisco has patched multiple vulnerabilities (CVE-2026-20213 through CVE-2026-20244) in the open-source ClamAV antivirus engine, including a flaw that had existed for approximately **20 years**. The vulnerabilities range from denial-of-service to potential code execution in applications using the ClamAV library. Given ClamAV's widespread use in email gateway scanning, this affects a large security infrastructure footprint.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177096) | [The Hacker News](https://thehackernews.com/2026/07/monday-recap-proxy-botnets-browser.html)

📌 **Armored Likho APT Targets Taiwan Government and Energy Sector with BusySnake Stealer**
The threat group Armored Likho has been targeting Taiwanese government agencies and energy sector organizations with the **BusySnake Stealer** malware. The group uses spear-phishing emails to deliver the infostealer, which exfiltrates credentials, browser data, and files from compromised machines. The campaign is ongoing and specifically focused on Taiwan's critical infrastructure.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177101)

📌 **Medtronic Data Breach — Over 3.8 Million Individuals Affected**
Medical device manufacturer Medtronic disclosed a data breach impacting over **3.8 million individuals**. The breach involved unauthorized access to systems containing personal and health information. The incident underscores the persistent targeting of healthcare organizations by cybercriminals.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177091)

📌 **FortiBleed Campaign Linked to INC and Lynx Ransomware Gangs**
The FortiBleed campaign — which exploited Fortinet SSL VPN credentials — has been linked to the INC and Lynx ransomware operations. The connection was established through shared command-and-control infrastructure and overlapping ransomware deployment patterns. Organizations that had Fortinet VPN credentials stolen in the FortiBleed campaign should consider themselves at elevated risk for ransomware deployment.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/07/06/fortibleed-ransomware/)

📌 **PyPI Malware Targets Telegram Bot Servers — Supply Chain Attack**
Malicious packages were discovered on PyPI that specifically target servers running Telegram bots. The malware exfiltrates bot tokens, environment variables, and database credentials, giving attackers control over Telegram bot infrastructure. This is the latest in a series of supply-chain attacks aimed at the Python package ecosystem.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/07/06/pypi-telegram/)

📌 **Google and FBI Disrupt NetNut Residential Proxy Botnet — 2 Million Devices**
Google, in collaboration with the FBI, Lumen, and other partners, disrupted the NetNut (aka Popa) residential proxy network, which consisted of at least **2 million compromised home devices** — including smart TVs and streaming boxes — used to route malicious traffic. Google disabled accounts and services tied to NetNut infrastructure and updated Google Play Protect to detect associated SDKs.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177098) | [The Hacker News](https://thehackernews.com/2026/07/monday-recap-proxy-botnets-browser.html)

---

## How Can OPSWAT Help

The PyPI supply-chain attack and the Armored Likho infostealer campaign demonstrate the critical need for multi-layered file-level defenses. OPSWAT MetaDefender's multi-scanning and CDR (Content Disarm and Reconstruction) capabilities can detect and neutralize malicious packages, scripts, and payloads before they reach developer endpoints. The FatFs USB-based vulnerabilities highlight the risk of removable media as an attack vector — MetaDefender's peripheral device security can inspect and sanitize files from USB drives and SD cards before they enter the enterprise network. For organizations managing AI coding tool risk, MetaDefender Cloud provides real-time file inspection to prevent data exfiltration through AI agent toolchains.
