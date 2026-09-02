---
title: "CISO Daily Digest: CISA Adds Actively Exploited Gitea CVE-2026-60004 (CVSS 9.8) to KEV as Git Hooks Drop Miners (20260826)"
description: "CISA added Gitea's code-injection flaw CVE-2026-60004 (CVSS 9.8) to its KEV catalog after evidence of active exploitation that plants Git hooks to run shell commands and drops miner payloads; plus Shadowserver counts ~270 Zimbra servers breached via CVE-2026-73570 with 8,200+ still unpatched, ACSC flags TeamCity CVE-2026-63077 attacks in Australia, Treasury sanctions alleged Mabna Institute hackers under Operation Economic Outcast, and Chrome 152 ships 327 security fixes."
pubDate: 2026-08-26
tags: [CVE-2026-60004, Gitea, CISA, KEV, CVE-2026-73570, Zimbra, CVE-2026-63077, TeamCity, cryptojacking, Chrome]
author: "Security Solutions Team"
featured: true
---

## CISA Adds Actively Exploited Gitea CVE-2026-60004 (CVSS 9.8) to KEV; Git Hooks Turned into Miners

The U.S. **CISA** on August 25 added **CVE-2026-60004**, a critical code-injection flaw in the self-hosted Git platform **Gitea**, to its Known Exploited Vulnerabilities (KEV) catalog after obtaining evidence of **active exploitation** — federal agencies must patch by **August 28**. The vulnerability affects **Gitea 1.17 through 1.27.0** and was fixed in the **1.27.1** release at the end of July, the same update that patched **CVE-2026-59774** (the CVSS 9.8 file-read-to-RCE chain covered in our August 8 digest).

The mechanics turn repository write access into server code execution: an attacker who can write to any repository sends a malicious patch to Gitea's **diffpatch endpoint**, which installs and executes a **Git hook** from repository-controlled content — running arbitrary shell commands as the **Gitea OS user**. Because many Gitea deployments enable open registration by default, an unauthenticated outsider simply registers an account and creates a repository to obtain the required write access.

Observed attacks are consistent with cryptojacking: reports describe exploitation attempts that drop **miner-like payloads** on compromised self-hosted Gitea instances. For organizations running Gitea as their internal source-of-truth forge, this is a direct supply-chain exposure — a compromised instance hands attackers the ability to tamper with the very repositories that feed CI/CD pipelines.

### Why This Reshapes Self-Hosted Dev Platform Governance

Gitea's flaw collapses two boundaries defenders usually rely on: the line between low-privilege repository contributors and the server OS, and the line between source code and executable content — a Git hook planted through the diffpatch flow is code that runs on the host. Self-hosted forges are trust anchors for the whole software supply chain, so a takeover means malicious commits, poisoned artifacts, and stolen CI credentials are all in scope for the same incident. The KEV listing also marks the second Gitea critical in two months, and the open-registration default that amplified this flaw is common across lightweight forges, making exposure assessments non-trivial. The risk framing for CISOs: self-hosted developer platforms now sit in the same patch-priority tier as internet-facing edge appliances.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/08/critical-gitea-rce-actively-exploited.html), [iThome](https://www.ithome.com.tw/news/178438))

---

## Active Threats This Week

📌 **Zimbra CVE-2026-73570: Shadowserver counts ~270 breached servers, 8,200+ still unpatched** — Update on the actively exploited unauthenticated command-injection (CVSS 8.9) in Zimbra's optional **zimbra-snmp** package (KEV-listed August 21; first coverage in our August 21 and August 24 digests): scans by **Shadowserver** with CERT Polska detected **274 compromised Zimbra servers on August 22**, easing to **267 by August 24** — 41 in the US, including **2 in Taiwan**. At least **8,200 Zimbra hosts remain unpatched**, most in Indonesia (678), the US (662) and France (657), with roughly 43 in Taiwan. The flaw is triggered by specially crafted SMTP requests against configurations with the SNMP-notification component enabled; Zimbra patched it in its July updates.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178444)

📌 **TeamCity CVE-2026-63077 exploited against Australian organizations — ACSC advisory** — Update: **Australia's ACSC** warned on August 24 that JetBrains **TeamCity** instances are being actively exploited in the country via **CVE-2026-63077** (CVSS 9.8), an unauthenticated authentication-bypass flaw letting attackers reach the server over HTTP/HTTPS and execute arbitrary OS commands (patched by JetBrains in late July; KEV-listed in early August and covered in our August 6 digest). The ACSC bulletin asks organizations — including those whose TeamCity is hosted by an MSP — to identify unpatched servers and check for malicious activity.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178443)

📌 **SLEEPWALKER backdoor sleeps in memory until one crafted packet arrives** — An independent malware researcher documented a previously unreported Windows backdoor: an unsigned **64-bit DLL (59,904 bytes)** built to be side-loaded into **ERAAgent.exe**, the Windows executable of the **ESET Management Agent**. It impersonates Microsoft's **dpapi.dll**, exporting the same seven data-protection functions, and stays fully inert in memory until a single specially crafted network packet reaches the machine — then executes commands written in its own **23-instruction bytecode language**. The researcher described the design as consistent with a **targeted, well-resourced operation**.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/newly-sleepwalker-backdoor-waits-for.html)

📌 **NovaCookies AitM kit turns DocuSign notifications into Microsoft 365 session theft** — Enterprise-browser vendor **Island** disclosed **NovaCookies**, a **$320/month** adversary-in-the-middle phishing platform that proxies **Microsoft 365** sign-ins and captures authenticated sessions in real time after victims enter passwords and MFA codes; operators can convert a stolen session into persistent access by enrolling an **attacker-controlled passkey**. Campaigns abuse genuine **DocuSign** notification emails as lures and have targeted **hundreds of organizations** across the US, UK, Canada, Germany, Israel and the UAE.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/novacookies-campaigns-abuse-genuine.html)

📌 **CISA red team "A Tale of Two SOCs": both organizations fully compromised, one detected nothing** — CISA published advisory **AA26-237A** (August 25) covering two simultaneous red-team assessments run with similar tradecraft against a **Government Services and Facilities Sector** organization and a **Water and Wastewater Systems** entity. Both were **fully compromised at the domain level**, with the red team also reaching sensitive business systems and cloud resources. The government-services target, Organization A, **detected none of the activity**: thousands of false-positive alerts from normal operations obscured real signals, multiple SOCs and endpoint tools had no shared visibility, and an SCCM alert tied to the red team was dismissed as a false positive. Initial access came from default credentials on a web application; escalation abused a default **Machine Account Quota** and a misconfigured **AD CS certificate template (ESC1)**, followed by cleartext service credentials and static cloud keys.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/cisa-red-team-compromised-two-critical.html)

📌 **Operation Economic Outcast sanctions MOIS-linked hackers behind US critical-infrastructure breaches** — The **U.S. Treasury/OFAC** designated nearly **60 Iran-linked entities, individuals and vessels** across nuclear, missile, oil and cyber networks, targeting a malicious cyber group affiliated with Iran's **Ministry of Intelligence and Security (MOIS)** that Treasury says is behind extensive compromises of U.S. critical-infrastructure entities. Among those sanctioned are five individuals — alleged members of the Tehran-based **Mabna Institute** — indicted by the **U.S. Justice Department** last week; three of them (**Keyvan Fayyaz Ghareh Blagh, Saber Shahbazi Balujeh, Mohammad Reza Kadkhoda'i**) are accused of the bulk of the activity, breaching energy, defense, healthcare, IT and financial companies since late 2023. Veteran Iran-linked hacker **Behzad Mesri** (HBO breach) was also designated.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/us-sanctions-iran-linked-hackers-behind.html)

📌 **DDoS knocks Norway's ID-porten offline for more than a day** — Distributed denial-of-service attacks that began August 24 targeted the infrastructure of **Vivicta**, the IT provider to Norway's digitalization agency **Digdir**, taking down **ID-porten** — the identity-login portal through which more than **4.5 million** Norwegians access thousands of government services. Digdir said services largely stabilized by August 25 but some remained impaired, and there is no indication of intrusion or personal-data leakage. It is the **third DDoS incident** affecting Digdir since June; the perpetrators remain unidentified.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178437)

📌 **Chrome 152 ships 327 security fixes, including 10 critical and 61 high** — Google's Chrome stable update (**152.0.7977.64** for Windows/Linux, **.65** for Mac) patches **327 vulnerabilities**: 10 rated critical and 61 high. Roughly **80 are memory-safety issues** (including 50 use-after-free), alongside **50 authorization flaws**, 36 improper-input-validation and 34 information-disclosure bugs. Graphics components account for the largest share (ANGLE 27, GPU 9, WebGL 3), followed by Network (18) and CustomTabs (10).
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178448)

📌 **CERT/CC: Calix home-router UPnP exposed to the WAN (CVE-2026-75501), no patch available** — CERT/CC disclosed that Calix **GS7 XGS GS5239XG** routers running EXOS **6.6.47** expose their UPnP control service on the **WAN interface (TCP 5000) without authentication**, letting remote attackers add, delete or query port-forwarding rules — bypassing NAT and firewall protection and potentially exposing cameras, NAS devices and other IoT gear to the internet. Rules persist across reboots. No vendor patch existed as of August 25, and CERT/CC said it could not coordinate with Calix before disclosure; reporter **Brian Khan Quintana** demonstrated the flaw from an external network.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178432)

---

## How Can OPSWAT Help

Several of today's items are **file- and email-borne**: Git hooks and patches flowing through self-hosted **Gitea** forges, crafted SMTP-triggered attacks against **Zimbra** mail servers, and browser-delivered phishing chains. **OPSWAT MetaDefender** addresses these at the file layer:

- **Multi-Scanning** — 30+ anti-malware engines screen email attachments, downloaded archives, and repository artifacts before they reach mailboxes, endpoints, or build environments, catching miner payloads and session-stealing lures that single-engine AV misses.
- **Deep CDR (Content Disarm & Reconstruction)** — sanitizes documents, archives, and installers — stripping active content, macros, and embedded scripts while preserving usability — neutralizing weaponized files before they execute.
- **Vulnerability detection** — identifies known-vulnerable components (e.g., the Zimbra CVE-2026-73570 and Gitea CVE-2026-60004 classes) inside uploaded or distributed files.

For organizations running self-hosted developer platforms and mail infrastructure, enforcing MetaDefender inspection on every file entering the network closes the delivery path attackers are actively using today.
