---
title: "CISO Daily Digest: Microsoft August Patch Tuesday Fixes 421 Flaws as Lazarus Zero-Day Hits (20260812)"
description: "Microsoft's August Patch Tuesday fixes 421 CVEs including the actively exploited Windows AFD.sys zero-day CVE-2026-68820 (linked to Lazarus Operation Dream Job) and CISA KEV additions CVE-2026-20349 (Cisco ASA/FTD) and CVE-2026-72898 (Metabase). Rapid7's AI-assisted SharePoint chain (CVE-2026-55040 + CVE-2026-63520) reaches unauthenticated RCE; malicious LiteLLM releases tied to the Trivy hack expose 2,100+ organizations; Claude watermarking goes live globally under the EU AI Act."
pubDate: 2026-08-12
tags: [patch-tuesday, microsoft, zero-day, cisa-kev, ransomware, supply-chain, ai-governance, ciso-daily-digest]
author: "Security Solutions Team"
featured: true
---

## Microsoft August Patch Tuesday: 421 Flaws Patched, Windows Driver Zero-Day Exploited

Microsoft shipped its August Patch Tuesday on August 11, fixing **421 CVEs** (per iThome; ZDI independently counts **398**, **62** rated Critical — down from July's 622). The release spans **236 Windows** flaws, **98 Office**, **30 SharePoint**, **26** developer tools, **17 Azure**, **7 Exchange**, and **1 Microsoft Defender** vulnerability.

Three zero-days stand out:

- **CVE-2026-68820** (CVSS **7.0**) — a use-after-free in **afd.sys** (Ancillary Function Driver for WinSock, the kernel driver behind Windows socket operations) that lets an attacker escalate to **SYSTEM**. It is the **only flaw Microsoft flags as under active exploitation**; triggering it requires winning a race condition. **CISA added it to KEV** on August 11 with a federal fix deadline of **August 25**. **Check Point Research attributes the exploitation to North Korea's Lazarus** in its Operation Dream Job campaign (see Active Threats).
- **CVE-2026-62832** (CVSS **7.8**) — Windows User Profile Service privilege escalation, publicly disclosed before the patch (linked to the "LegacyHive" disclosure).
- **CVE-2026-72971** (CVSS **5.5**) — Windows container-isolation filesystem filter driver (unionfs.sys), also publicly disclosed; allows local data tampering.

Beyond the zero-days, the release closes **four unauthenticated, remote CVSS 9.8 RCEs** — Windows DNS Server (**CVE-2026-62878**), Windows Deployment Services, Microsoft's QUIC implementation, and HPC Pack — none flagged as exploited at ship time. It also ships the RCE half of the SharePoint chain whose authentication bypass was fixed in July.

### Why This Reshapes Vulnerability Management

- **AI-driven discovery is resetting patch cadence:** after July's record **570+** fixes, August's **~400** is the new normal; Microsoft attributes the deluge to AI-assisted vulnerability discovery, and both researchers and attackers now use public AI models to accelerate exploitation (Rapid7's SharePoint chain and A Security's Zoom zero-click exploit both went from discovery to working exploit in under **24 hours**).
- **Zero-day → KEV same-day:** exploited flaws now land on CISA's catalog with **2–14 day** federal deadlines on the same day they patch — Patch Tuesday is becoming a compliance event, not just a maintenance window.
- **The kernel remains the escalation bridge:** the Lazarus chain (phishing → low-privilege foothold → afd.sys zero-day + FudModule EDR-kill → lateral movement) shows why driver-level bugs stay the highest-value targets even at CVSS 7.0.

🔗 **Reference:** Coverage from ([iThome 421 CVEs](https://www.ithome.com.tw/news/178055), [iThome 3 zero-days](https://www.ithome.com.tw/news/178057), [iThome CISA KEV](https://www.ithome.com.tw/news/178064), [The Hacker News](https://thehackernews.com/2026/08/microsoft-patches-398-flaws-including.html), [Krebs on Security](https://krebsonsecurity.com/2026/08/microsoft-plugs-nearly-400-security-holes/))

---

## Active Threats This Week

📌 **Claude watermarking rolls out globally; detection limits surface (update)** — Anthropic's model-level marks now apply worldwide across Claude, the API, Claude Code, Claude Cowork, and Claude Tag, including text generated through AWS, Google Cloud, and Microsoft Foundry; files (SVG/PNG/JPG) get **C2PA-signed provenance metadata**. Experts note the mark survives copy-paste and "may persist through some editing," but **paraphrasing, code formatting, or application pipelines strip it** — so the absence of a mark still does not prove human authorship, and detection remains probabilistic rather than forensic. OpenAI, Google, Meta, Microsoft, and Mistral have committed to the same EU AI Act Article 50 code.
🔗 **Reference:** [The New Stack](https://thenewstack.io/anthropic-claude-text-watermark/) | [The Decoder](https://the-decoder.com/anthropic-watermarks-all-claude-outputs-globally-with-marks-that-may-persist-through-some-editing/)

📌 **Lazarus "Operation Dream Job" targets defense and aerospace via Windows zero-day CVE-2026-68820** — Check Point Research says Lazarus has been exploiting the **afd.sys** zero-day since early July, using it in the new **FudModule** rootkit to gain SYSTEM and disable EDR. The campaign distributes a trojanized PDF viewer (**SecurityPDF**) that drops the **Troy** backdoor, targeting defense, aerospace, and aviation organizations, especially in **Europe and India**. Infrastructure runs on compromised **Roundcube (CVE-2025-49113)** and WordPress servers rigged with the **RelayShell** PHP webshell as relays.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178079) | [The Hacker News](https://thehackernews.com/2026/08/microsoft-patches-398-flaws-including.html)

📌 **Sandworm-linked UAC-0145 runs fake job interviews to push a command-capable VPN** — CERT-UA (August 8) says the Sandworm-affiliated cluster has, since **May 2026**, impersonated IT companies (e.g., ATLAS Business Group) and recruiters for **Sopra Steria Bulgaria** on job boards, moving targets to Telegram and staging Zoom interviews — the interviewer may be an **AI-generated persona**. Victims receive WireGuard configuration files for a "technical test"; when they fail, the attackers recommend a **custom VPN app that can run commands**, granting initial access to IT professionals' machines.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/sandworm-linked-uac-0145-uses-fake-job.html) | [iThome](https://www.ithome.com.tw/news/178085)

📌 **Cisco ASA/FTD CVE-2026-20349 (CVSS 8.6) exploited in the wild for remote DoS** — Insufficient error checking on HTTP requests to the **Remote Access SSL VPN** service lets an unauthenticated attacker send a crafted request that **reloads the firewall**, causing denial of service. Affects ASA 9.16–9.24 and FTD 7.0/7.2/7.4 with vulnerable configurations (IKEv2 RA VPN, SSL-VPN, ZTNA). No mitigations exist; **CISA added it to KEV** on August 11 with a **August 14** federal deadline.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/cisco-asa-and-ftd-flaw-exploited-in.html) | [iThome CISA KEV](https://www.ithome.com.tw/news/178064)

📌 **Malicious LiteLLM releases tied to the Trivy hack may expose 2,100+ organizations** — Two trojanized **LiteLLM** releases (**1.82.7**, **1.82.8**) sat on PyPI for ~40 minutes on **March 24** carrying credential-stealing code that harvests cloud keys, SSH keys, Kubernetes tokens, and database passwords. CloudSEK's dataset of **~434,000 captured files** maps potential exposure to **2,500+ organizations** (2,100+ per its public lookup), with high-confidence matches including **NVIDIA, Cisco, Deloitte, Volkswagen, FedEx, Siemens, and X Corp**. CloudSEK stresses the totals are not a victim count and no credential misuse has been confirmed — but affected parties are advised to rotate secrets regardless.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/malicious-litellm-releases-tied-to.html)

📌 **SAP Commerce Cloud CVE-2026-58231 (CVSS 10.0): unauthenticated RCE** — The flaw in Commerce Cloud's **Data Hub Adapter** lets an unauthenticated attacker abuse a **default authentication client** to submit crafted input to insufficiently validated functions, achieving **arbitrary code execution** and compromise of internal components. August's Security Patch Day totals **28 fixes**, four critical: **CVE-2026-44772** (9.9, MII code injection), **CVE-2026-34265** (9.8, ABAP DIAG out-of-bounds write), and **CVE-2026-44758** (9.1, MII SSTI/SSRF). Onapsis urges patching and redeploying Commerce Cloud; an IP filter set is the interim workaround.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/sap-commerce-cloud-flaw-could-let.html) | [iThome](https://www.ithome.com.tw/news/178072)

📌 **Adobe ships three CVSS 10.0 fixes for ColdFusion and Campaign Classic** — August's update covers five products with **Priority 1** ratings for ColdFusion and Campaign Classic. ColdFusion gets **15 fixes** (11 critical), led by **CVE-2026-48362** (CVSS 10.0 OS command injection → RCE, fixed in 2025.0.12/2023.0.23), **CVE-2026-48273** (9.9 eval injection), and **CVE-2026-71384** (9.6 incorrect authorization). Campaign Classic's **CVE-2026-71398** and **CVE-2026-27302** are both **CVSS 10.0** (incorrect authorization → RCE; fixed in ACC v7 7.4.4 build 9400). No in-the-wild exploitation has been reported; Adobe recommends patching within 72 hours.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/adobe-patches-three-cvss-100-coldfusion.html) | [iThome](https://www.ithome.com.tw/news/178071)

📌 **Rapid7's AI-assisted SharePoint chain reaches unauthenticated RCE** — **CVE-2026-55040** (CVSS 9.1), an authentication bypass in SharePoint Server Subscription Edition/2019/2016's JWT validation pipeline, lets a remote attacker assume any user's identity (knowing only a SID or UPN). Chained with **CVE-2026-63520** (CVSS 8.1) — an unsafe .NET type instantiation in **Business Connectivity Services** — it yields **RCE as the Windows service account** with no credentials; Project Server 2013 SP1 and Office Web Apps 2013 SP1 are also affected. Rapid7 found the chain with an AI agent, reported it in May, and says the July update breaks it; SharePoint Online is not affected.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/researchers-disclose-ai-assisted.html) | [iThome](https://www.ithome.com.tw/news/178081)

📌 **Zoom annotation zero-click flaws: CVE-2026-53413/53414/53415** — Three memory-safety bugs in Zoom's screen-share annotation feature let any meeting participant **execute code on other attendees' devices with no interaction** (no click, no download). A Security found them with public AI models in **under 24 hours** using fewer than 20 prompts. Fixed in **7.1.0** (first two) and **7.1.5** (third); Zoom also deployed server-side filtering, but **end-to-end-encrypted meetings cannot be filtered** and remain exposed. No exploitation has been reported and the flaws are not in KEV.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/zoom-annotation-flaws-could-let-meeting.html) | [iThome](https://www.ithome.com.tw/news/178080)

📌 **VMware vCenter CVE-2026-59310 (CVSS 9.8) exploited for persistent remote access** — QUIRSO found active exploitation of the directory-traversal flaw (patched late July) in incident response: attackers chain path traversal into **arbitrary code execution**, then plant a malicious cron job that uses **reverse_ssh** for persistence. First contact with victim systems began **August 3**, five days after disclosure; **361 unique victim IPs across 47 countries** (Germany, U.S., Turkey, Iran, France most affected). Attribution is unclear but a suspected APT.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/attackers-exploit-vmware-vcenter.html)

📌 **Kimwolf v7 Android botnet makes HTTP/2 DDoS traffic look like legitimate browsing** — Unit 42's new version of the Kimwolf/AISURU botnet (targeting Android TV boxes and Linux IoT) builds **complete browser fingerprints** for HTTP/2 floods via nghttp2, making attack traffic hard to distinguish from real browsing. C2 resilience uses **Ethereum Name Service** for addresses, a hard-coded **Tor .onion** service, and a local proxy between clearnet and Tor; scanning and exploitation modules were removed as propagation moved to an external loader.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/kimwolf-v7-android-botnet-makes-http2.html)

📌 **ShieldBreak: PoC claims full bypass of Microsoft Defender patch (CVE-2026-50656)** — Researcher "Chaotic Eclipse" released a proof-of-concept for **ShieldBreak**, a complete patch bypass of the **RoguePlanet** vulnerability (CVSS 7.8, race condition in **mpengine.dll** granting SYSTEM). The researcher claims **100% success** on Windows 11 25H2 and Windows Server 2025, with Windows 10 also vulnerable; Microsoft's defense-in-depth fix reportedly leaks 8 bytes when opening files on affected builds. Microsoft says it is investigating.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/shieldbreak-zero-day-poc-claims.html)

📌 **737 Chrome VPN extensions route traffic through attacker SOCKS5 proxies** — Socket found 737 free VPN/proxy extensions across **40+ Chrome Web Store developer accounts** (75,486 installs); **274 impersonate 66 established brands** including Proton VPN, NordVPN, Surfshark, ExpressVPN, CyberGhost, Cloudflare 1.1.1.1, and Google Outline. They funnel the entire browser session through a **fixed SOCKS5 server (port 1082)**, putting the operator in an **adversary-in-the-middle** position over destinations, source IPs, TLS SNI, and plain-HTTP bodies. Aimed mainly at Russian-speaking users; **221 have been removed, 516 remain active**.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/737-chrome-vpn-extensions-caught.html)

📌 **Metabase CVE-2026-72898: added to CISA KEV; Metabase Cloud itself targeted (update)** — CISA added the exploited **CVSS 10.0 SQL injection** zero-day to KEV on August 11 with a **August 14** federal deadline. xakep.ru reports attackers used the 0-day against **Metabase Cloud** directly (endpoints since blocked), granting unauthenticated **admin access** that enables config changes and theft of stored database credentials; patches are available for all affected branches (0.58.24 / 0.59.21 / 0.60.17 / 0.61.11 / 0.62.9 / 0.63.5), with blocking `/api/session/reset_password` as the interim mitigation.
🔗 **Reference:** [iThome CISA KEV](https://www.ithome.com.tw/news/178064) | [xakep.ru](https://xakep.ru/2026/08/12/metabase-0day/)

📌 **Taiwan: 久裕 medical logistics hit a second time; 正瀚生技 discloses network attack** — Drug distributor **久裕 (4173)** filed a second MOPS disclosure on August 11: attackers struck its **recovery systems** while restoration from the August 10 incident was underway, **encrypting data with possible exfiltration** and leaving some files undecryptable; core systems and databases were unaffected, but recovery is extended and some customer shipments will be delayed. Agri-chemical firm **正瀚生技 (6534)** disclosed on August 11 that part of its information systems were attacked; initial assessment shows no major operational impact.
🔗 **Reference:** [iThome 久裕](https://www.ithome.com.tw/news/178077) | [iThome 正瀚](https://www.ithome.com.tw/news/178076)

📌 **Delta investigates rogue Wi-Fi network on DEF CON 34 return flight** — Crew on Delta flight **591** (Las Vegas → Atlanta, a Boeing 757 with 199 passengers) reported a rogue **"Delta WiFi Fast"** network via ACARS after several DEF CON 34 attendees boarded. Social-media reports allege a **deauth attack** forced passengers off the legitimate access point onto the rogue one, which served a **phishing page collecting Google credentials** — unconfirmed by Delta, which says no Delta systems were compromised. In-flight Wi-Fi was disabled for ~30 minutes while the incident was assessed.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/12/plane-wifi/)

---

## How Can OPSWAT Help

Today's mix spans trojanized PyPI packages (LiteLLM), forged VPN apps and browser extensions (UAC-0145, Chrome proxy extensions), and exploit chains aimed at collaboration, firewall, and virtualization products. Nearly every payload crosses a **file or package boundary** before executing. MetaDefender's **multi-scanning (30+ engines)** and **Content Disarm & Reconstruction (CDR)** neutralize malicious installers, archives, and documents at the gateway, while file reputation and deep-content analysis help verify the provenance of downloaded packages and updates — including the AI agent toolchains that attackers are increasingly targeting.
