---
title: "CISO Daily Digest: N-able N-Central Chain Under Active Exploitation — Huntress Rebuilds Customer Intrusion (20260908)"
description: "Huntress ties a September 4 customer compromise to N-able N-central authentication-bypass flaws CVE-2026-86206 and CVE-2026-86207 and warns CVSS 10.0 CVE-2026-86218 may also be exploited; Blockstream's Liquid Network loses ~4,000 BTC (~US$320M) to an Elements code flaw, returning 3,400 BTC; Adobe patches Magento StyleSmuggler CVE-2026-75650 (CVSS 10.0); Keycloak CVE-2026-18963 (CVSS 9.1) enables account takeover; Wordfence details All-in-One WP Migration CVE-2026-19949 (CVSS 8.8)."
pubDate: 2026-09-08
tags: [N-able, N-central, CVE-2026-86206, CVE-2026-86207, CVE-2026-86218, Huntress, RMM, Liquid, Blockstream, Elements, Magento, CVE-2026-75650, StyleSmuggler, Keycloak, CVE-2026-18963, All-in-One-WP-Migration, CVE-2026-19949, OpenVPN, FreeIPA, CVE-2026-76578, PEEP, ValleyRAT, Coder, PREY-0058, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## N-able N-Central Flaw Chain Tied to Real Customer Intrusion as Huntress Warns of Exploitation

N-able's **N-central RMM** appeared in yesterday's digest when the vendor shipped Hotfix 4 for **CVE-2026-86218** (CVSS v4.0 **10.0**). Today's development is exploitation evidence: **Huntress** says it investigated a customer N-central intrusion on **September 4** and reconstructed an attack chain consistent with chaining **CVE-2026-86206** (CVSS v4.0 6.9) and **CVE-2026-86207** (CVSS v4.0 7.7) — an authentication-bypass pair that N-able patched the same day in **2026.3 Hotfix 3 (2026.3.1.13)**, hours before Hotfix 4 shipped. Huntress warns that all three vulnerabilities, including the CVSS 10.0 remote-code-execution flaw, are suspected of having been exploited.

Per N-able's advisory, the two bypass flaws let an unauthenticated attacker circumvent authentication and obtain **full access to an on-premises N-central server**. Huntress stresses that the reconstructed chain is distinct from the August pair **CVE-2026-18556 / CVE-2026-18577**, and because the affected environment's retained event logs were incomplete, it cannot confirm the bypasses were the exact initial vector — nor does it exclude other flaws. Indicators observed during the intrusion include account creation that appended unexpected strings such as `.invalid` to known N-able email addresses, and probing of endpoints by specific application-system IDs to map the victim's environment.

### Why This Reshapes RMM Security Governance

- **RMM servers concentrate privilege:** a compromised N-central instance is an administration hub for the fleets it manages, making the platform itself the crown jewel — Huntress has tracked N-central intrusions since August, and this is the second consecutive week of new CVE disclosures tied to observed or suspected exploitation.
- **Patch cadence now collides with attack evidence:** three CVEs disclosed and patched within hours (Hotfix 3 and Hotfix 4 on September 5) alongside a field-reconstructed exploit chain leaves a narrow window in which defenders must act on vendor guidance alone.
- **Forensic ambiguity is the norm, not the exception:** incomplete logging in the victim environment prevented confirmation of the exact vector — a reminder that RMM audit logs are themselves prime targets for attackers who bypass or erase them.

🔗 **Reference:** Coverage from ([Huntress Blog](https://www.huntress.com/blog/n-able-vulnerability-exploitation), [iThome — exploitation warnings](https://www.ithome.com.tw/news/178768), [iThome — double hotfix disclosure](https://www.ithome.com.tw/news/178763))

---

## Active Threats This Week

📌 **Blockstream Liquid Network drained of ~4,000 BTC (~US$320M) via an Elements code flaw — 3,400 BTC returned**

Attackers exploited a code-logic flaw in **Elements**, the open-source software underpinning Blockstream's **Liquid Network** sidechain, on **September 6**, minting ~4,000 unbacked **L-BTC** and redeeming them cross-chain through the SideSwap platform, which mistook the fabricated tokens for legitimate assets. The withdrawal drained ~95% of the federation's ~4,200-BTC reserve (worth ~US$320M at the time) without any private keys being compromised. The attackers, self-described white hats communicating via Bitcoin mainnet **OP_RETURN** messages, returned **3,400 BTC (~85%)** on September 7; ~598.5 BTC (~US$47M) remains unreturned, and Blockstream has not confirmed an agreement. Liquid remains paused, so L-BTC holders cannot currently redeem their tokens.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/liquid-hackers-return-3400-bitcoin.html) | [iThome](https://www.ithome.com.tw/news/178770)

📌 **Adobe ships an emergency patch for the exploited Magento zero-day 'StyleSmuggler' — CVE-2026-75650 (CVSS 10.0)**

Adobe patched the **Adobe Commerce / Magento Open Source** zero-day that was the lead story in our September 6 digest: **CVE-2026-75650** (CVSS 10.0), codenamed **StyleSmuggler** by Sansec, is a PHP code-injection flaw in Magento's template system triggered through a "Payment Transaction Failed Reminder" email, enabling arbitrary code execution. Exploited in the wild since **September 4** with payloads including a **Rust backdoor** and **PHP web shell**, the flaw affects Commerce 2.4.4 through 2.4.9 (2026-aug and earlier) and Commerce B2B 1.5.2/1.5.3-2026-aug and earlier.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/adobe-patches-magento-zero-day.html)

📌 **Keycloak password-reset state flaw lets attackers take over any account — CVE-2026-18963 (CVSS 9.1)**

A state-management flaw in Keycloak's password-reset flow lets an attacker use crafted requests to jump directly to the password-change stage, **bypassing the emailed verification link** and resetting the password of any account, including administrators. The flaw affects upstream Keycloak and **Red Hat Build of Keycloak (RHBK)**; fixes ship in Keycloak **26.7.2** and RHBK **26.4.15 / 26.6.6**, with Red Hat recommending temporarily disabling the "Forgot password" feature where an immediate upgrade is not possible.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178764)

📌 **Anonymous FreeIPA clients can mint administrator identities through a two-flaw chain — CVE-2026-76578 (CVSS 9.8)**

Red Hat disclosed a critical chain in **FreeIPA** (its Identity Management product): an access-control rule meant to let users manage their own OTP token does not require prior login or restrict what else may be written — and a second flaw in **389 Directory Server** compares the client's name against a stored value as plain text, so an anonymous client with an empty name matches an empty stored value. A client that has **never logged in** can therefore create a Kerberos identity of its own choosing and land in the **administrators group**. Red Hat reproduced the chain twice on default installations, tracks it as **CVE-2026-76578** (critical, CVSS 9.8, preliminary), and the FreeIPA project fixed its side in **4.13.4**.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/freeipa-flaw-chain-lets-anonymous.html)

📌 **All-in-One WP Migration SQL injection puts millions of WordPress sites at takeover risk — CVE-2026-19949 (CVSS 8.8)**

**Wordfence** detailed a high-severity SQL injection in **All-in-One WP Migration and Backup**, a backup/migration plugin with **5+ million installs**. An unauthenticated attacker sends crafted trackback requests to a public post; the poisoned data lies inert until an administrator creates and re-imports a backup, at which point the plugin's URL/prefix rewriting turns it into an executable SQL query that leaks the plugin's `ai1wm_secret_key` into a publicly readable comment. The attacker retrieves the key via the WordPress REST API and imports a malicious `.wpress` archive carrying a must-use plugin — yielding remote code execution and full site control. ServMask fixed the flaw in **7.110 on August 20**; WordPress.org stats in early September showed only ~35% of installs updated, leaving roughly **3.2 million sites** exposed.

🔗 **Reference:** [Xakep](https://xakep.ru/2026/09/08/all-in-one-wp-migration/)

📌 **OpenVPN patches eight flaws, including DoS and Windows binary-planting RCE — fixed in 2.7.7**

OpenVPN's September advisory covers **8 vulnerabilities**, three rated high, affecting 2.6.22, 2.7.6 and earlier; users should upgrade to **2.7.7**. The most severe is **CVE-2026-84732** (CVSS 8.7) in the core reliability layer's TLS timeout and packet-acknowledgment handling — a remote attacker can cause denial of service with crafted packets. **CVE-2026-84226** (CVSS 8.5) is a file-path handling flaw in the Windows **tapctl** tool that lets a local low-privilege attacker stage a binary-planting attack and execute code.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178767)

📌 **Slurm patches eight vulnerabilities across HPC and AI clusters — CVE-2026-65107 and friends**

SchedMD released **26.05.4, 25.11.8 and 25.05.9** covering **8 flaws** in the Slurm cluster scheduler. **CVE-2026-65107** sits in the **sbcast** file-distribution tool: shared libraries can skip credential verification during transfer, and crafted filenames can crash the `slurmd` node daemon — Google Cloud issued a Cluster Toolkit advisory for it and AWS confirmed **ParallelCluster 3.16.0 and earlier** are affected by the same batch. Also patched: **CVE-2026-65140**, a privilege-escalation in the accounting database letting operator-level users modify administrator accounts; **CVE-2026-65109**, which can delete files outside the container scratch directory during OCI cleanup; and **CVE-2026-65138**, an out-of-range memory read/crash via malformed RPC data.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178766)

📌 **PostGREShell deep-dive: PostgreSQL logical-decoding flaw can escalate to superuser and persist (update)**

Cyera's full technical disclosure for **CVE-2026-6471** (CVSS 7.2), the logical-decoding flaw in PostgreSQL that we covered at patch time in our September 5 digest, adds that a non-superuser **REPLICATION** account can not only execute arbitrary code as the database OS user but also **escalate to a database superuser**, modify connection and startup settings, and plant backdoors that reload after restart. Affected supported lines are PostgreSQL 14–18, fixed in **14.24, 15.19, 16.15, 17.11 and 18.6**.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178756)

📌 **PEEP: Chromium bookmark-extension backdoor turns Chrome and Edge into host RATs**

**SOCRadar** documented **PEEP**, a post-compromise toolkit that masquerades as a "Smart Bookmarks" extension (ID `ejkndncpkdcjcikfhiamcdehdoegilbj`) injected directly into Chrome/Edge profiles. Its installer **forges Chromium's Secure Preferences integrity values**, bypassing Web Store checks and user prompts. The extension exfiltrates cookies, browsing history and open tabs, polling its C2 (`206.237.30[.]232`, `xfjcc[.]fun`) every 30 seconds over plaintext HTTP, while a native-messaging bridge adds host-level file operations and command execution as the logged-in user. PEEP builds on the open-source **RedExt** framework (previously tied to GlassWorm), carries Chinese-language artifacts, and provides no initial access vector of its own.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/peep-turns-chrome-and-edge-into-post.html) | [iThome](https://www.ithome.com.tw/news/178779)

📌 **ValleyRAT spreads through signed adware installers disguised as DingTalk, meeting apps and Chrome**

**Kaspersky** documented a new ValleyRAT (**Winos 4.0**) campaign that delivers the backdoor via trojanized copies of the legitimate Chinese wallpaper/adware app **QN Wallpaper**, offered through fake installers for Alibaba's **DingTalk**, Tencent meeting software and Chrome. Because adware carries **valid code-signing signatures** and users often add such apps to antivirus exclusions, the trojanized installer uses **DLL sideloading** to load the malware with a higher chance of success. Kaspersky counted **over 100,000 ValleyRAT-related detections** this year affecting at least **1,500 users**, concentrated in China and India, and attributes the activity to the China-linked **Silver Fox** group.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178778)

📌 **Coder's module registry hijacked via Cloudflare infrastructure — malicious Terraform modules served from a trusted domain**

Developer-platform vendor **Coder** disclosed that attackers gained access to its Cloudflare infrastructure and added unauthorized IP addresses to the server pool for `registry.coder.com`, so some users downloading Terraform modules on **August 31 (07:35–21:45 UTC)** received backdoored modules from the legitimate domain. The malicious code hunted for credentials in the environment and exfiltrated them to a lookalike Coder domain. Depending on when the module executed, exposed data could include workspace-service environment variables and secrets, **OIDC tokens, SSH keys and one-time IdP tokens** — and in shared-service configurations, Coder database passwords. Coder found no evidence of impact on its own customer data and advises affected deployments to purge cached Terraform modules and upgrade per its advisory.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178760) | [Xakep](https://xakep.ru/2026/09/07/coder-stealer/)

📌 **'PREY-0058': help-desk vishing and AitM token theft target executives' Microsoft 365 accounts**

**Arctic Wolf** disclosed a widespread data-theft and extortion cluster tracked as **PREY-0058** that targets Microsoft 365 and other SaaS through **IT help-desk vishing**, adversary-in-the-middle token theft and residential-proxy sign-ins, singling out directors, VPs and other executives. The operation shares significant tradecraft with the cluster Mandiant tracks as **UNC6671**. Arctic Wolf also assesses that the data-extortion actor **Cinder** is likely another rebrand or continuation of **Pink**, citing overlaps between organizations listed on Cinder's leak site and those connected to Pink — while cautioning that these labels correspond to an amorphous set of affiliates rather than a single proven actor.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/microsoft-365-attackers-use-help-desk.html)

📌 **Ransomware hits Taiwanese subsidiary 格帝控股 of TWSE-listed 富爾特 — ERP systems knocked offline**

**格帝控股**, a subsidiary of Taiwan-listed digital-platform provider **富爾特 (TWSE: 6136)**, suffered a ransomware attack on **September 7** that took its ERP and other information systems offline. The company said in a stock-exchange filing (MOPS) that its security team detected the anomaly, activated defense mechanisms and isolated affected networks; systems are being restored progressively, and the preliminary assessment is that there is no material impact on overall operations or finances.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178762)

---

## How Can OPSWAT Help

Today's file-borne attacks — trojanized signed installers (ValleyRAT), malicious Terraform modules served from a trusted registry domain (Coder), and weaponized `.wpress` backup archives (All-in-One WP Migration) — all rely on a single malicious file passing unnoticed. **MetaDefender** platforms combine multi-engine scanning with Content Disarm and Reconstruction (CDR) to neutralize embedded threats in installers, modules, archives and documents before they reach endpoints or build pipelines.
