---
title: "CISO Daily Digest: Russian Hackers Weaponize Hotel Wi-Fi to Steal Microsoft 365 Credentials (20260803)"
description: "Microsoft attributes hotel Wi-Fi DNS-tampering attacks to Storm-2945, a Midnight Blizzard-linked Russian APT, targeting business travelers' Microsoft 365 accounts via fake-update lures and Device Code phishing; Chinese hackers pilot DeepSeek + Hermes AI agents for autonomous attacks against Langflow (CVE-2026-33017) and n8n (CVE-2026-21858); AUR and AsyncAPI npm supply-chain attacks, N-able N-central server takeovers, and breaches at Brinks Home, Amgen, PNLD, and Revolut round out the day."
pubDate: 2026-08-03
tags: [CISO Daily Digest, Midnight Blizzard, Storm-2945, Microsoft 365, Hotel Wi-Fi, Device Code Phishing, AI Agent Attack, DeepSeek, Hermes, Langflow, n8n, Supply Chain, AUR, Arch Linux, AsyncAPI, NPM, N-able, Hugging Face, ShinyHunters, GHOSTBLADE]
author: "Security Solutions Team"
featured: true
---

## Russian Hackers Weaponize Hotel Wi-Fi to Steal Microsoft 365 Credentials

Microsoft has formally attributed a wave of hotel Wi-Fi attacks to **Storm-2945**, a cluster linked to Russian nation-state actor **Midnight Blizzard**, after security vendor ReliaQuest first exposed DNS-tampering campaigns hitting hotels in the United States, India, and Saudi Arabia. The operators target business travelers' **Microsoft 365 accounts** by compromising the Wi-Fi infrastructure itself.

Since **May 2026**, Storm-2945 has been manipulating DNS configuration and HTTP traffic on hotel and other public Wi-Fi networks, redirecting victims to attacker-controlled infrastructure that serves fake update pages and lures them into downloading and executing malware. Since **July 2026**, the group has additionally abused the **Microsoft Device Code login flow**: victims are steered to a legitimate-looking login page and told to enter an attacker-supplied device code, which hands the attackers an OAuth token and effective control of the victim's Microsoft 365 account.

### Why This Reshapes Travel Security

- **Public Wi-Fi is now an APT battlefield.** The attack does not phish the user directly — it compromises the network device itself, so even cautious users who verify the login page can be redirected.
- **Device Code phishing defeats MFA messaging.** The user enters a code on a real Microsoft page, making the OAuth-token theft nearly indistinguishable from normal sign-in — a growing pattern that security awareness training alone cannot stop.
- **Identity is the new perimeter for mobile workforces.** Any organization with frequent business travel should treat hotel and venue networks as hostile infrastructure and require hardware-backed or conditional-access controls on M365 sign-ins.

---

## Active Threats This Week

📌 **Chinese hackers pilot AI-autonomous attacks with DeepSeek + Hermes agents** — Palo Alto Networks reports operators codenamed **knaithe** and **KnYuan** driving DeepSeek LLMs and Hermes AI agents via Telegram to hunt vulnerable servers on the FOFA IoT search engine and exploit them with no human intervention. A reconstructed May 7 session shows DeepSeek fetching a PoC for **Langflow CVE-2026-33017 (CVSS 9.8)**, scanning 84 Langflow instances, then pivoting to **n8n** flaws **CVE-2026-21858** and **CVE-2025-68613** — following the earlier Hermes-based infiltration of Thailand's Ministry of Finance (Hunt.io / Bob Diachenko).
🔗 **Reference:** [iThome — 中國駭客利用DeepSeek與Hermes從事AI自主攻擊](https://www.ithome.com.tw/news/177825) | [iThome — 鎖定7種應用系統](https://www.ithome.com.tw/news/177832)

📌 **AUR supply-chain attack forces Arch Linux to suspend package adoption** — attackers took over a large number of AUR packages and pushed suspicious commits; the first confirmed malicious package is **openconnect-sso** (flagged July 29). Research group IFIN links the campaign's behavior — including Tor-based data exfiltration — to the June AUR compromise.
🔗 **Reference:** [Xakep.ru — Arch Linux temporarily blocks AUR package transfers](https://xakep.ru/2026/08/03/aur-attacks/)

📌 **AsyncAPI npm supply chain attack via misconfigured GitHub Actions** — on July 14 attackers opened 37 pull requests against the **asyncapi/generator** repo, exploited a weak GitHub Actions workflow to steal a high-privilege PAT plus the npm publish token, and shipped 5 malicious versions across 4 AsyncAPI packages. Importing the tampered runtime module pulls a Node.js loader over IPFS and executes it as a separate process (Aikido Security, Cloudsmith, Wiz).
🔗 **Reference:** [iThome — AsyncAPI 供應鏈攻擊](https://www.ithome.com.tw/news/177817)

📌 **N-able: attackers take over N-central servers after the initial fix** — threat actors compromised N-central management servers even after the first patch, prompting a second round of guidance from N-able.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/n-able-says-attackers-take-over-n.html)

📌 **Hugging Face Diffusers flaws could let model repositories execute arbitrary code** — vulnerabilities in the Diffusers library allow malicious model repositories to achieve code execution during load.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/hugging-face-diffusers-flaws-could-let.html)

📌 **Chinese threat actor deploys GHOSTBLADE on iOS using leaked DarkSword kit** — a new iOS campaign abuses a leaked DarkSword toolset; GHOSTBLADE-style implants target mobile devices.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/chinese-threat-actor-uses-leaked.html)

📌 **Breach wave: Brinks Home, Amgen, PNLD, Revolut** — US home-security provider **Brinks Home** confirmed a breach with **ShinyHunters** claiming ~5M Salesforce records; pharma giant **Amgen** suffered a cloud data leak exposing patient health information and patent data; the **PNLD** data broker breach exposed UK police and government contact details on the dark web; UK digital bank **Revolut** saw ~75M customer records allegedly offered for sale.
🔗 **Reference:** [iThome — Brinks Home](https://www.ithome.com.tw/news/177828) | [iThome — 安進](https://www.ithome.com.tw/news/177827) | [THN — PNLD](https://thehackernews.com/2026/08/pnld-breach-exposes-uk-police-and.html) | [iThome — Revolut](https://www.ithome.com.tw/news/177836)

📌 **Thermo Fisher patches DNA file-tampering flaw** — a fix addresses a vulnerability that could make DNA file manipulation nearly undetectable, with serious implications for genomics and biosecurity.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/thermo-fisher-patches-flaw-that-could.html)

📌 **Chrome: 1,442 vulnerabilities fixed across the last three versions** — a large batch of security fixes shipped across recent Chrome stable releases.
🔗 **Reference:** [Xakep.ru](https://xakep.ru/2026/08/03/chrome-bugs-2/)

---

## How Can OPSWAT Help

Two of this week's biggest supply-chain incidents — the **AUR** and **AsyncAPI npm** attacks — deliver malicious packages straight into developer and build environments. **MetaDefender** multi-scanning (30+ anti-malware engines) with **Content Disarm & Reconstruction (CDR)** catches package-based payloads at ingestion and neutralizes weaponized files before they reach runtime, while file-level deep inspection (Deep CDR) stops IPFS-pulled loaders and disguised artifacts from executing in CI pipelines.
