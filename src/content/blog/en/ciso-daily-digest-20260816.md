---
title: "CISO Daily Digest: XSS2Shell WordPress Flaw Faces Automated Mass Exploitation (20260816)"
description: "WordPress 7.0.3 patches login-page XSS CVE-2026-64638 (XSS2Shell) as Imperva tracks automated exploitation of 11,000+ sites in 67 countries; watchTowr flags an unpatched GeoServer SQL injection zero-day exploited within hours of disclosure; CTM360 uncovers 3,000+ RecruitTrap recruitment phishing URLs; Acronis details the PATCHCORD backdoor hitting Afghan telecom and Indian critical infrastructure; and a new plaintiff joins the xAI class action alleging Grok generated 7,000+ explicit images of a minor."
pubDate: 2026-08-16
tags: [WordPress, CVE-2026-64638, XSS2Shell, GeoServer, RecruitTrap, CTM360, PATCHCORD, Acronis, WindRelay, Group-IB, Mustang Panda, xAI, Grok, prompt injection]
author: "Security Solutions Team"
featured: true
---

## XSS2Shell WordPress Flaw Faces Automated Mass Exploitation

WordPress shipped **7.0.3** to fix **CVE-2026-64638 (XSS2Shell)**, a high-risk cross-site scripting vulnerability in the core login page. The flaw sits in the login flow: when a visitor tries to log in with a non-existent username, WordPress reflects that input into the error message, and a mismatch between two layers of HTML filtering lets attacker-controlled markup survive into the rendered page. An attacker needs **no WordPress account** to trigger the vulnerability. The flaw was first disclosed in mid-August and covered in our Aug 13 digest — what changed this week is the scale of the exploitation.

Exploitation still requires a social-engineering step — a logged-in administrator must open and interact with a malicious page — but the chain then escalates quickly: the attacker borrows the admin's existing session to obtain WordPress **application passwords**, creates pages carrying malicious JavaScript, and uploads a plugin containing PHP code, culminating in **server-side code execution**.

The escalation is the scale of the campaign, not the novelty of the bug. **Imperva** reports automated activity targeting **more than 11,000 websites across 67 countries**, totaling hundreds of thousands of requests. WordPress says all versions are affected; fixes are backported to **6.9.6, 6.8.7, and 6.7.6**. Administrators should confirm production updates and check for anomalous admin accounts, application passwords, or plugin installations.

### Why This Reshapes Web Vulnerability Response

A login-page XSS in the world's most deployed CMS became a mass-exploitation event within days of disclosure — Imperva's telemetry shows automated campaigns reaching **11,000+ sites in 67 countries** while most WordPress fleets were still unpatched. The attack chain also demonstrates how a reflected XSS can become server-side RCE through a single authenticated admin action, which reorders how defenders should prioritize: patch the login/authentication surface first, audit application passwords and plugin logs for post-compromise artifacts, and treat admin sessions as the crown jewels that the social-engineering step is aiming at.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178147)

---
## Active Threats This Week

📌 **Unpatched GeoServer SQL injection zero-day exploited within hours of disclosure** — Security firm **watchTowr** reports active exploitation attempts against a newly disclosed **SQL injection** vulnerability in the open-source **GeoServer** platform that can lead to **remote code execution** (the researcher notes RCE is naturally possible against the SA/system-administrator database). The flaw was disclosed **Aug 12, 2026** by researcher **@q1uf3ng** on X and has **no CVE identifier and no patch** yet. watchTowr observed exploitation attempts within hours of the disclosure — hundreds of requests originating from a small pool of IP addresses.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/unpatched-geoserver-zero-day-targeted.html)

📌 **RecruitTrap: 3,000+ recruitment phishing URLs use Browser-in-the-Browser credential traps** — **CTM360** documented a large-scale recruitment-themed phishing campaign using fake interview-scheduling pages and **Browser-in-the-Browser (BitB)** windows to steal **Google and Facebook credentials**, with more advanced cases relaying **MFA prompts in real time**. More than **3,000 phishing URLs** surfaced over two months, impersonating recruiters from **50+ organizations across 14 sectors**. Marketing professionals were the primary targets — compromised marketing accounts expose advertising platforms, corporate social media, customer data, and email.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/ctm360-uncovers-over-3000-recruitment.html)

📌 **PATCHCORD backdoor targets Afghan telecom and Indian critical infrastructure** — **Acronis Threat Research Unit** details an ongoing campaign delivering a compiled C/C++ backdoor called **PATCHCORD** via sector-specific lures, including fake VPN installers impersonating **Afghan Telecom (AFTEL)** and telecom management tools. Infrastructure analysis also uncovered **SHEETCORD**, a Go-based backdoor using **Google Sheets for command-and-control**, delivered through a domain impersonating **India's National Informatics Center (NIC)**. The campaign runs from a single C2 server with multiple associated domains.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/new-patchcord-backdoor-targets-afghan.html)

📌 **WindRelay: Android NFC-relay malware enables contactless payment fraud** — **Group-IB** uncovered **WindRelay**, an Android malware family that captures live card data via **NFC** and transmits it to fraudsters in real time, deployed together with the known **SpyNote RAT** in contactless payment fraud schemes. SpyNote's Accessibility Service access lets fraudsters silently sideload and activate the NFC app without triggering screen sharing. Lures are phishing, smishing, and vishing messages; the malware was first detected in the wild in **late August 2025**.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/windrelay-android-malware-turns-victims.html)

📌 **Mustang Panda adds a signed Windows kernel rootkit to the CoolClient backdoor** — **Kaspersky** reports **HoneyMyte (aka Mustang Panda)** deploying an updated **CoolClient** backdoor carrying a **signed Windows kernel-mode rootkit** that hides and protects malicious processes, files, registry objects, and C2 network information. Victims span **Myanmar, Mongolia, Pakistan, and Russia**, including confirmed government entities; CoolClient is consistently deployed as a secondary backdoor following a **PlugX** infection. The kernel component installs when the implant has Service Control Manager access and **SeTcbPrivilege**; otherwise the driver step is skipped.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/mustang-panda-adds-signed-windows.html)

📌 **Apple alerts users in 110 countries of possible mercenary spyware targeting** — Apple sent a fresh batch of **threat notifications** to customers it suspects may be targeted by mercenary spyware, covering users in **110 countries** (more than **150 countries** cumulative since late 2021). Apple does not attribute the attacks; notifications typically reach people targeted because of who they are or what they do.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/apple-warns-users-in-110-countries-they.html)

📌 **xAI faces class action alleging Grok produced 7,000+ explicit images of a minor** — A woman identified as **Jane Doe 4** joined the lawsuit filed by three Tennessee teenagers against **Elon Musk's xAI** (now part of SpaceX), alleging her stepfather used **Grok** to manipulate a photo taken when she was 11 into **more than 7,000 explicit images** of her. The stepfather was found dead of suicide two days after a law enforcement raid uncovered the images. The plaintiffs accuse xAI of failing to take basic precautions to prevent Grok from generating explicit images of real people, including minors — X was flooded with millions of Grok-generated sexualized images earlier this year — and are seeking class action status.

🔗 **Reference:** [TechCrunch](https://techcrunch.com/2026/08/15/woman-claims-her-stepfather-used-grok-to-transform-childhood-photo-into-explicit-imagery/) | [The Washington Post](https://www.washingtonpost.com/technology/2026/08/15/woman-alleges-grok-made-thousands-sexual-abuse-images-childhood-snap/)

📌 **Connecticut court catches invisible prompt injections hidden in court filings** — A pro se plaintiff, **Matthew Elliott**, embedded invisible AI instructions in official court filings — **3-point white text on a white background**, unreadable to humans but fully readable by language models — directing any automated review to align its output with his filing and treat a clerk's denial as an error to correct. The court spotted the manipulation through unusual whitespace; **Judge Walter Spader Jr.** warned Elliott, who later hid additional messages (including a YouTube link), calling them "invisible jokes." The judge compared the scheme to secretly communicating with a juror through an automated agent. **404 Media** first reported the case.

🔗 **Reference:** [The Decoder](https://the-decoder.com/plaintiff-hid-invisible-ai-instructions-in-court-filings-to-secretly-influence-automated-review/)

📌 **Anthropic publishes official details on Claude text watermarking (update)** — Anthropic published **"How Claude's text watermark works"** (Aug 14), describing the mechanism: Claude encodes a detectable pattern through **"low-stakes choices"** between equally valid words (e.g., "overcast" vs. "grey"), with **no practical impact on output quality**, no hidden characters, no extra token cost, and **no identifying information** — the watermark is not Claude-specific. The change implements the **EU AI Act Transparency Code**, in effect since **Aug 2** for AI providers serving the EU market. TechCrunch notes that "dozens" of users on X have claimed to cancel their Claude subscriptions in protest.

🔗 **Reference:** [Anthropic](https://www.anthropic.com/news/claude-text-watermark) | [TechCrunch](https://techcrunch.com/2026/08/15/anthropic-shares-more-details-about-how-claudes-new-watermarks-will-work/)

---
## How Can OPSWAT Help

Several of this week's campaigns arrive as **files**: PATCHCORD's fake VPN installers, Mustang Panda's signed kernel drivers, and WindRelay's sideloaded APKs. MetaDefender's multi-scanning and **Content Disarm and Reconstruction (CDR)** neutralize malicious packages, installers, and documents before they reach endpoints — including signed-but-malicious binaries that legacy antivirus treats as trusted.
