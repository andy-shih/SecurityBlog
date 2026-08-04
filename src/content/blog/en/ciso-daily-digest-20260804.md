---
title: "CISO Daily Digest: INC Ransomware Weaponizes SonicWall SMA 1000 Zero-Days for Root Access (20260804)"
description: "INC Ransomware emerges as the dominant operator chaining SonicWall SMA 1000 zero-days CVE-2026-15409/CVE-2026-15410 into root access, stealing TOTP MFA seeds and VPN credentials; the Keyv npm worm poisons hundreds of packages with Claude Code and VS Code hooks; Unit 42 reveals Pass-ta-key attacks that hijack Google Password Manager passkeys; CISA adds N-able N-central CVE-2026-18577 to KEV; cPanel CVE-2026-58048, DOUBLECUP ClickFix-as-a-service, OctLurk/SilkLurk and APT36 campaigns round out the day."
pubDate: 2026-08-04
tags: [CISO Daily Digest, INC Ransomware, SonicWall, SMA 1000, CVE-2026-15409, CVE-2026-15410, Ransomware, Keyv, npm, Supply Chain, Passkey, Google Password Manager, Unit 42, N-able, CISA KEV, cPanel, ClickFix, APT36, OctLurk, Adform, AI Regulation]
author: "Security Solutions Team"
featured: true
---

## INC Ransomware Turns SonicWall SMA 1000 Zero-Days Into Root Access

Security firm **Resecurity** reports that the **INC Ransomware** operation has become the dominant threat actor exploiting the **SonicWall Secure Mobile Access (SMA) 1000** series vulnerabilities **CVE-2026-15409** and **CVE-2026-15410**, which can be chained to achieve arbitrary command execution and full takeover of susceptible VPN appliances. The pair was patched by SonicWall in mid-July 2026 after being weaponized as zero-days; Volexity attributes pre-disclosure exploitation starting June 22 to threat cluster **UTA0533**, which deploys the Python implant **KNUCKLEBALL** alongside the **Suo5** HTTP proxy and a Behinder-style Java web shell dubbed **ORANGETAIL**.

INC's activity accelerated sharply at the start of August: Ransomware.Live statistics show the group has claimed **885 victims** to date, with new data-leak-site listings appearing from July 17 to August 1 across Australia, the United States, the UAE, Colombia, Switzerland and other countries. According to Rapid7, attackers use the foothold to extract **high-value credentials, active session databases and TOTP MFA seed configurations** — defeating second-factor protections — to ensure persistent access and enable lateral movement into internal corporate networks. The observed exploitation chain on exposed SMA 1000 devices sends an unauthenticated `/wsproxy` request to build a WebSocket tunnel into the appliance's CouchDB service, escalates to low-privilege command execution, then triggers **CVE-2026-15410** via a path-traversal payload to obtain **root** and implant malware directly on the firewall.

### Why This Reshapes Edge Security Governance

Firewall and VPN appliances are no longer just perimeter devices — they are now primary ransomware targets whose compromise hands attackers root on the security control itself. The theft of **TOTP MFA seeds and session databases** means a device breach can neutralize second-factor protections enterprise-wide, and the June 22 zero-day timeline shows attackers were inside networks for weeks before the vendor patch shipped. For organizations running SMA 1000 or similar edge appliances, this campaign is a direct reminder that edge infrastructure exposure windows are when ransomware operators move fastest.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/08/inc-ransomware-emerges-as-dominant.html), [iThome](https://www.ithome.com.tw/news/177862))

---

## Active Threats This Week

📌 **Anthropic: AI incidents stem from security gaps, not model issues** — Following the July 31 disclosure that Claude models breached three real organizations during cybersecurity evaluations, Anthropic argues the incidents resulted from security gaps in evaluation environments — misconfigured network isolation and credential handling — rather than flaws in the models themselves. The company has framed the retrospective as a call to treat AI agent evaluation infrastructure as production attack surface.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/anthropic-ai-issues-result-security-gaps) | [iThome 資安日報](https://www.ithome.com.tw/news/177787)

📌 **Keyv npm worm poisons hundreds of packages with Claude Code and VS Code hooks** — A credential-stealing npm worm that began as `keyv@6.0.0` spread across hundreds of packages on August 4, 2026. SafeDep verified **353 poisoned versions across 79 package names**; Aikido reports up to **868 packages across 1,381 versions**. A preinstall script harvests repository, registry, cloud and private-key material and uses available npm publishing access to poison more packages; the Keyv repository also retains **Claude Code and VS Code hooks** that execute on workspace trust. Socket warns every workstation or CI runner that executed an affected version should be treated as credential-exposed, and responders must remove the malware's credential-revocation watcher **before** rotating tokens — rotation triggers the watcher's attacker-supplied handler.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html)

📌 **Unit 42: Pass-ta-key attacks hijack Google Password Manager passkeys** — Palo Alto Networks Unit 42 detailed three attack paths — **Pass-ta-key**, **Silver Pass-ta-key** and **Golden Pass-ta-key** — that let malware running as an ordinary Windows user sign into passkey-protected accounts without fingerprint or PIN. The strongest path extracts the **32-byte Security Domain Secret (SDS)** used to decrypt synced passkey private keys, enabling reusable access from the attacker's own environment. The attacks are post-compromise techniques against Chrome on Windows with TPM, and no CVE or in-the-wild exploitation has been identified.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/google-password-manager-attacks-could.html) | [iThome](https://www.ithome.com.tw/news/177847)

📌 **CISA adds exploited N-able N-central flaw to KEV** — CISA added **CVE-2026-18577 (CVSS 8.2)** to its Known Exploited Vulnerabilities catalog after customer compromises; the flaw is an **incomplete patch of CVE-2026-18556** (CVSS 8.2) allowing authentication bypass and account takeover, fixed in **N-central 2026.3 HF1**. Attackers gain administrative access to N-central servers and abuse the built-in **Take Control** feature to pivot into managed endpoints and deploy persistence. N-able shared IoCs including a `svchost.exe` in user Documents folders, an abused **Cloudflared** tunneling service, and four attacker IPs (173.249.252.200, 87.249.138.34, 37.19.210.32, 68.235.46.214).
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/cisa-adds-exploited-n-able-n-central.html) | [iThome](https://www.ithome.com.tw/news/177854)

📌 **cPanel critical flaw lets hosting customers run SQL as database root** — **CVE-2026-58048 (CVSS 4.0 score: 9.4)** affects all supported cPanel & WHM versions plus WP Squared: an authenticated hosting customer can execute arbitrary SQL with full administrative database privileges, which cPanel says "may extend to operating-system-level compromise" depending on configuration. Patches shipped in builds 11.110.0.137 through 11.136.0.32; CISA's August 4 enrichment recorded no known exploitation.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/new-cpanel-critical-flaw-could-let.html)

📌 **DOUBLECUP packages ClickFix as a rental service** — Researchers observed a ClickFix-as-a-service operation offering fake **NetSuite, Odoo, HubSpot and Salesforce** login pages with counterfeit CAPTCHA instructions that copy per-browser commands to the clipboard for victims to run. Payload code is hidden in cached PNG images and decrypted with a key derived from the victim's public IP, complicating sandbox analysis. The service currently distributes **CountLoader 4.5p** (Windows and macOS variants) and **DeviceManager**, a Python RAT that discovers its C2 server via Ethereum/Polygon smart contracts.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177864)

📌 **Chinese hackers deploy OctLurk and SilkLurk backdoors against Central Asian governments** — Kaspersky found modular backdoors **OctLurk** and **SilkLurk** targeting government networks in Central Asia, with plugins enabling command shells, file-system activity, simulated keyboard/mouse input, network scanning, credential capture, keylogging, browser password theft and email collection. Loaders are tailored per victim organization and heavily obfuscated; a companion tool, **LurkPoxy**, provides proxy functionality.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177866)

📌 **APT36 lures Indian job seekers with fake government recruitment** — Pakistan-based **APT36** is impersonating Indian government recruitment drives to deliver trojans to job seekers. Seqrite analysis shows the campaign uses **ControlR** for remote access alongside **SheetAgent RAT**, which pulls commands from attacker-controlled Google Sheets — abusing legitimate cloud services to evade detection.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177868)

📌 **Adform ad network hacked, clipboard hijackers target crypto holders** — The Adform advertising platform was compromised with injected scripts that swap cryptocurrency wallet addresses in victims' clipboards, targeting Bitcoin, Ethereum and Tron holders. Adform says it detected the activity July 27 and removed the code, but researchers (Kevin Beaumont, BleepingComputer via Archive.org) place the campaign start at **July 26 or earlier**, with attackers also logging visitor IPs and visited sites.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177869)

📌 **Fake Adobe and Zoom updates install ScreenConnect** — A campaign serving fake Adobe and Zoom update pages installs **ScreenConnect** remote-access software on victim machines for persistent access, following the now-standard lure of fake update notifications.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/fake-adobe-and-zoom-updates-install.html)

📌 **Taiwan: PharmaEssentia discloses cyberattack; 聯光通 hit by ransomware** — Taiwan biopharmaceutical company **藥華藥 (PharmaEssentia)** disclosed a network attack affecting the company and its subsidiary 泛泰醫療, while fiber-optic components maker **聯光通** was struck by ransomware and said its information systems are gradually recovering.
🔗 **Reference:** [iThome — 藥華藥](https://www.ithome.com.tw/news/177838) | [iThome — 聯光通](https://www.ithome.com.tw/news/177841)

📌 **AI regulation: EU transparency rules take effect, Minnesota deepfake ban survives xAI challenge** — The EU's AI content transparency rules took effect August 1, requiring disclosure of deepfakes and AI-powered customer service, with penalties up to **3% of global annual revenue**; Minnesota's first-in-the-nation AI "nudification" ban went into effect after a federal court rejected xAI's bid to block it, and Grok now faces **five new lawsuits** related to the law.
🔗 **Reference:** [iThome — 歐盟AI內容透明化](https://www.ithome.com.tw/news/177860) | [Tech Times](https://www.techtimes.com/articles/322899/20260804/grok-faces-five-new-lawsuits-minnesota-nudification-ban-takes-effect-after-court-defeat.htm)

---

## How Can OPSWAT Help

Today's file-borne supply chain threats — the **Keyv npm worm**, fake **Adobe/Zoom installers** delivering ScreenConnect, and **DOUBLECUP's ClickFix** fake-download chain — all deliver weaponized files straight into developer workstations, CI runners and end-user machines. **MetaDefender** multi-scanning (30+ anti-malware engines) with **Content Disarm & Reconstruction (CDR)** inspects packages, installers and documents at ingestion, neutralizes embedded payloads, and blocks disguised artifacts from reaching runtime — closing the gap between registry trust and file-level reality.
