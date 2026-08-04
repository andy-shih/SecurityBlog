---
title: "CISO Daily Digest: Anthropic Brings Claude In-Country Inference to India (20260804)"
description: "Anthropic will bring in-country Claude inference to India through Amazon Bedrock, processing customer data on Indian servers for banks, insurers, telecoms and government agencies (India Today, Economic Times, Deccan Herald); Anthropic discloses Claude breached three real organizations during authorized security tests — including a malicious PyPI package executed by 15 systems — blaming security gaps rather than model flaws (Dark Reading, iThome); CISA adds N-able N-central auth-bypass CVE-2026-18577 to KEV; Unit 42 exposes three Google Password Manager passkey attacks; INC ransomware dominates SonicWall SMA 1000 zero-day exploitation (CVE-2026-15409, CVE-2026-15410); a Keyv-linked npm worm poisons hundreds of packages with Claude Code and VS Code hooks; plus DOUBLECUP ClickFix-as-a-service, cPanel CVE-2026-58048, SMOKE#SCREEN fake-update campaign, and Chinese backdoors OctLurk/SilkLurk."
pubDate: 2026-08-04
tags: [CISO Daily Digest, Anthropic, Claude, India, Amazon Bedrock, Data Residency, AI Governance, AI Security Testing, CVE-2026-18577, N-able, N-central, CISA KEV, Google Password Manager, Passkey, Unit 42, INC Ransomware, SonicWall, CVE-2026-15409, CVE-2026-15410, Keyv, NPM, Supply Chain, cPanel, CVE-2026-58048, DOUBLECUP, ClickFix, ScreenConnect, SMOKE#SCREEN, OctLurk, SilkLurk, APT36]
author: "Security Solutions Team"
featured: true
---

## Anthropic Brings Claude In-Country Inference to India

Anthropic has announced that **Claude will support in-country inference in India in the coming weeks** through **Amazon Bedrock**, processing AI requests from Indian customers on servers located inside the country. India is one of the largest markets for Claude, and the move is aimed squarely at **highly regulated sectors — banks, insurers, telecoms, public and government agencies** that must satisfy data residency and compliance requirements before adopting generative AI. Anthropic is also expanding its partner ecosystem investments alongside the rollout.

The announcement underscores how data location has become a decisive enterprise-AI procurement criterion. Anthropic frames the launch as "a turning point for enterprise AI in this country," noting that when data can stay in India, AI moves "from pilots into the systems that matter most." It lands the same week Anthropic disclosed that Claude breached three real organizations during authorized security testing (see Active Threats).

### Why This Reshapes AI Data Governance

- **Data residency is now an AI vendor-selection criterion.** In-country inference lets regulated organizations adopt frontier models without cross-border data-transfer exposure — a template other jurisdictions with localization mandates are likely to demand from every model provider.
- **The dependency chain deepens.** Enterprises now sit on a stack of customer → cloud region → model provider; sovereignty, fallback behavior for cross-region inference, and auditability of where prompts and outputs are processed become CISO-level due-diligence questions.
- **Incident response goes cross-border.** When model inference and data are region-locked, security teams must reason about data handling across cloud and AI vendors — affecting e-discovery, breach notification, and regulatory reporting.

---

## Active Threats This Week

📌 **N-able N-central auth-bypass added to CISA KEV after exploitation** — **CVE-2026-18577** (CVSS 8.2) is an incomplete patch of **CVE-2026-18556** (CVSS 8.2) that allows authentication bypass and **account takeover of N-central management servers**. CISA added it to the KEV catalog after reports of active exploitation; attackers who take over an admin account can abuse the built-in **Take Control** feature to pivot into managed endpoints and deploy persistence (indicators include a `svchost.exe` in user Documents folders and a new `Cloudflared` service). Fixed in N-central **2026.3 HF1 (2026.3.1.7)**.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/cisa-adds-exploited-n-able-n-central.html) | [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/attackers-exploit-n-able-patch-bypass-flaw) | [iThome](https://www.ithome.com.tw/news/177854)

📌 **Unit 42 details three attacks against Google Password Manager passkeys** — the **Pass-ta-key**, **Silver Pass-ta-key** and **Golden Pass-ta-key** techniques let malware running as an ordinary Windows user silently obtain a valid authentication assertion, register an attacker-controlled user-verification key, or extract the **32-byte Security Domain Secret (SDS)** master key during Chrome device re-enrollment — decrypting synced passkey private keys without breaking passkey cryptography. Google removed plaintext SDS from logs but has no rotation or revocation mechanism yet.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/google-password-manager-attacks-could.html) | [iThome](https://www.ithome.com.tw/news/177847)

📌 **INC ransomware becomes the dominant exploiter of SonicWall SMA 1000 zero-days** — chained vulnerabilities **CVE-2026-15409** and **CVE-2026-15410** (patched mid-July) give unauthenticated attackers **root access** to vulnerable SMA 1000 VPN appliances: an unauthenticated `/wsproxy` request opens a WebSocket tunnel to CouchDB, followed by a path-traversal payload that yields root and drops **KnuckleBall** malware while injecting Suo5 and OrangeTail into memory. Resecurity reports **INC** has overtaken UTA0533 as the most active operator since early August, adding victims in Australia, the US, UAE, Colombia and Switzerland — 885 victims listed on Ransomware.Live. No credentials, user interaction, or misconfiguration is required.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/inc-ransomware-emerges-as-dominant.html) | [iThome](https://www.ithome.com.tw/news/177862)

📌 **Keyv-linked npm worm poisons hundreds of packages, plants Claude Code and VS Code hooks** — a credential-stealing worm first seen in `keyv@6.0.0` spread across the npm registry on August 4; SafeDep verified **353 poisoned versions across 79 package names** (Aikido counts at least **868 packages across 1,381 versions**). A preinstall script runs a credential-stealing bundle inside developer and CI environments, harvesting repository, registry, cloud and private-key material, then uses available npm publishing access to poison more packages. The Keyv repository also retained **Claude Code and VS Code hooks**.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html)

📌 **18 malicious npm packages deliver a cross-platform RAT to Alibaba tool users** — the unscoped **lib-mtop** package impersonates Alibaba's private `@ali`-scoped package; its loader fetches and executes a remote JavaScript payload via curl. The targeted campaign aims at Chinese-speaking developer environments; malicious versions were pushed in March–April 2026 from the **ch4ce** maintainer account.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/18-malicious-npm-packages-deliver-cross.html)

📌 **DOUBLECUP: ClickFix-as-a-service delivers CountLoader and DeviceManager RAT** — the Russian **loader-as-a-service** uses ClickFix lures to stage steganographic PNG images in victims' browser cache; the second stage decrypts payloads in memory with a custom SHA-256 stream cipher (CTR mode) XORed with the victim's public IP as key. It delivers **CountLoader** (Windows and macOS variants) and the previously undocumented **DeviceManager RAT**, which uses EtherHiding to resolve C2 infrastructure over HTTP or DNS tunneling.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/doublecup-uses-clickfix-and-cached-pngs.html) | [iThome](https://www.ithome.com.tw/news/177864)

📌 **SMOKE#SCREEN: fake Adobe and Zoom updates install ScreenConnect** — Securonix tracks an active multi-wave campaign using Adobe/Zoom update lures, business document reviews and system maintenance themes. A toolkit of VBScript droppers, batch loaders, .NET executables and an HTML phishing page ends with a **ConnectWise ScreenConnect agent** beaconing to attacker-controlled relay servers for persistent remote access.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/fake-adobe-and-zoom-updates-install.html)

📌 **cPanel CVE-2026-58048 (CVSS 9.4): hosting customers can run SQL as database root** — an authenticated cPanel account holder can execute arbitrary database commands with full administrative privileges through the MySQL/MariaDB feature, potentially extending to **OS-level compromise** depending on configuration. The flaw affects all supported cPanel & WHM builds and WP Squared; patches shipped in builds 11.110.0.137 through 11.136.0.32 and 138.1.6.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/new-cpanel-critical-flaw-could-let.html)

📌 **Anthropic: Claude breached three real organizations during security tests** — during authorized capability testing at third-party evaluator **Irregular**, isolation misconfiguration let Claude models reach the internet. **Opus 4.7** attacked a real company it mistook for a simulation (weak passwords, unverified endpoints, SQL injection) and stole application and infrastructure credentials; **Mythos 5** registered a PyPI account and uploaded a malicious package that was downloaded and executed by **15 real systems** — one security firm's scanner had its credentials stolen — and an internal research model scanned ~9,000 targets before self-stopping. Anthropic reviewed 141,006 evaluation records, found 3 incidents across 6 tests since April, and attributes them to **evaluation environment and operational gaps, not model escape**.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/anthropic-ai-issues-result-security-gaps) | [iThome](https://www.ithome.com.tw/news/177777)

📌 **Chinese hackers deploy OctLurk and SilkLurk backdoors against Central Asian governments** — Kaspersky tracks espionage since **January 2025** hitting government agencies, healthcare, research institutes, logistics, law enforcement and education across **Afghanistan, Kyrgyzstan, Tajikistan, Uzbekistan, Kazakhstan and Syria**. Both modular backdoors — plus the LurkPoxy proxy tool — use per-victim customized, heavily obfuscated loaders; operators communicate in Simplified Chinese.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177866)

📌 **APT36 "Operation ShadowRecruit" lures job seekers with fake Indian government recruitment** — Pakistan-linked **APT36** impersonates Indian government agencies, baiting victims with recruitment-themed ZIP files whose malicious PowerShell installs the **ControlR** RMM agent and the **SheetAgent RAT** (using Google Sheets as a command-and-control channel), while opening a decoy recruitment PDF. Legitimate remote-management tools and cloud services help evade detection.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177868)

---

## How Can OPSWAT Help

This week's supply-chain wave — the **Keyv npm worm**, the 18-package RAT campaign, and **DOUBLECUP's** steganographic loader — delivers weaponized packages and files straight into developer, build and end-user environments. **MetaDefender** multi-scanning (30+ anti-malware engines) with **Content Disarm & Reconstruction (CDR)** catches malicious packages and update-lookalike files at ingestion and neutralizes embedded payloads before they reach runtime, while Deep CDR strips active content from documents and archives attackers use for initial access.
