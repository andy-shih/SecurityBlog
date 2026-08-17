---
title: "CISO Daily Digest: Clop Extorts 43 Firms via PTC Windchill Zero-Day (20260817)"
description: "Clop ransomware exploited the PTC Windchill/FlexPLM flaw CVE-2026-12569 (CVSS 9.8) to extort 43+ organizations including Shell, Philips, GE and Fiserv, claiming 89 GB of Shell engineering data. SAP Commerce Cloud CVE-2026-58231 (CVSS 10.0) saw first exploitation 3 days after patching; France's DGFiP tax authority disclosed 678,000 records exposed; Anthropic Claude suffered a 36-minute multi-service outage."
pubDate: 2026-08-17
tags: [ransomware, CVE-2026-12569, PTC, extortion, threat-intel]
author: "Security Solutions Team"
featured: true
---

## Clop Extorts 43+ Organizations Through the PTC Windchill Zero-Day

Clop (CL0P) is running one of its signature mass-extortion campaigns — this time against **internet-exposed PTC Windchill PDMLink and FlexPLM** product lifecycle management (PLM) servers. The gang has listed **43+ organizations** on its leak site, including **Shell**, **Philips**, **GE**, and payment processor **Fiserv**. Clop claims it stole **89 GB from Shell** — engineering drawings, scans of facility test reports, facility photos, and project plans. Philips says it identified and contained an intrusion targeting internal data on specific servers (customer environments unaffected); GE acknowledged the incident and launched response procedures; Fiserv says its review found no customer, banking, transaction, or personal data stolen.

**The root cause is CVE-2026-12569**, a deserialization-of-untrusted-data flaw in PTC Windchill PDMLink and FlexPLM releases before 11.0 M030, rated **CVSS 9.8**. Disclosed June 17, it was added to CISA's Known Exploited Vulnerabilities catalog on June 25. Attackers chained it with a pre-authentication information-disclosure flaw in the FlexPLM WSDL endpoint (CVSS 7.5) to map targets before triggering the deserialization exploit. Post-exploitation activity includes hex-named JSP webshells under `/Windchill/login/`, a filesystem enumerator (`flst.txt`), and extortion emails titled "Windchill PDMLink module serious data leak" sent to hundreds of employees starting July 20. The campaign mirrors Clop's 2025 Oracle E-Business Suite operation: pick a widely deployed enterprise platform, exploit it across exposed instances at scale, stage and exfiltrate, then extort. ReliaQuest independently confirmed the campaign; Ransom-ISAC, eCrime.ch, and Defused issued a coordinated advisory on July 22.

### Why This Reshapes Enterprise Software Supply-Chain Security

PLM and CAD environments hold **crown-jewel intellectual property** — design files, blueprints, test reports, and project plans that cannot be re-created if leaked. Clop's choice of target shows that attackers now systematically hunt for internet-exposed enterprise engineering platforms, not just file-transfer or webmail systems. The window between public disclosure (June 17), CISA KEV listing (June 25), and first extortion emails (July 20) compressed to **weeks** — a reminder that exposure discovery and patch velocity are the binding constraints. Organizations running PTC Windchill/FlexPLM should assume that internet-reachable instances have been probed and verify their logs for the campaign's fingerprint (GET requests to `/Windchill/rfa/jsp/login/*.jsp?wsdl` returning ~4,045 bytes, and the `X-windchill-req` header) while validating the July 22 advisory's patch guidance.

---

## Active Threats This Week

📌 **SAP Commerce Cloud CVE-2026-58231 (CVSS 10.0) Exploited Three Days After Patch**

SAP's August Security Patch Day fixed CVE-2026-58231 in Commerce Cloud — a flaw rated the maximum CVSS 10.0 permitting **unauthenticated remote code execution**, with no prior public PoC or exploitation. Threat-intel firm Defused Cyber reported honeypot observations of the **first exploitation attempts within 3 days** of the patch. SAP told BleepingComputer it is aware and investigating. Track record: unauthenticated RCE in an e-commerce platform with a known exploitation signal is a high-priority remediation item for Commerce Cloud customers.

🔗 **Reference:** [iThome — 甫修補的SAP Commerce Cloud滿分漏洞傳出遭到利用](https://www.ithome.com.tw/news/178160)

📌 **Zoom Zero-Click Flaws CVE-2026-53413/53414/53415 — AI Models Found Them in Under 24 Hours**

Researcher firm A Security disclosed three critical memory-safety vulnerabilities in Zoom's **annotation feature** (shared screens and whiteboards). An attacker who joins the same meeting can send crafted annotation data that corrupts memory on the target device — **no user interaction required** — potentially executing code, exfiltrating data, or enabling the microphone/camera. The team demonstrated execution control by making Zoom launch Safari on macOS. Notably, the discovery-to-working-exploit cycle took **less than 24 hours using a consumer-grade AI model and fewer than 20 prompts**. Zoom patched via client updates 7.1.0 and 7.1.5 plus server-side filtering; end-to-end encrypted meetings cannot be filtered server-side, so participants remain exposed to messages from already-joined attackers.

🔗 **Reference:** [iThome — 頂尖AI模型不到24小時找出Zoom零點擊漏洞](https://www.ithome.com.tw/news/178080)

📌 **France's DGFiP Tax Authority: 678,000 Records Exposed via Credential Abuse**

The French public finance directorate (DGFiP) confirmed attackers used **stolen credentials of DGFiP staff and authorized third parties** between late June and July to reach its internal VPN and search taxpayer data. Roughly **678,000 individuals and professionals** may have had data viewed or extracted — tax reference income, family index, withholding rates, company names, SIREN numbers, and cadastral records. Account access was shut down when detected, but the intrusion went unnoticed long enough for data theft. DGFiP notified France's CNIL and is notifying affected persons by email/post from this week. No "official personal account" credentials were exposed.

🔗 **Reference:** [iThome — 法國國稅局坦承遭駭，可能外洩近70萬筆資料](https://www.ithome.com.tw/news/178175)

📌 **ExfilSquad Claims Wesco Breach — 2.6 Million Records from CRM**

Emerging extortion group ExfilSquad claimed it breached 13 organizations, among them global supply-chain and distribution company **Wesco**, claiming **2.6 million records** exfiltrated from its CRM environment. Security firms Resecurity and VenariX point to attacks against misconfigured **Microsoft Power Pages** as the likely entry vector (Wesco is believed to run Microsoft Dynamics 365). Wesco says the incident was detected quickly, no ransomware or other malware was found in its IT systems, and payment card, financial account, and sensitive customer/employee data were not exposed.

🔗 **Reference:** [iThome — 全球供應鏈與配銷公司Wesco發生資安事故](https://www.ithome.com.tw/news/178176)

📌 **ShinyHunters Claims Carhartt: 50 GB of Employee and Customer Data**

ShinyHunters posted a dark-web claim that it breached US workwear maker **Carhartt** and would release roughly **50 GB** of data — millions of customer and employee records plus loyalty-program data — after a **$3.3 million** ransom negotiation failed. Breach-tracking site Data Breaches estimates the incident involves over **4 million rows**. Carhartt (est. 1889, ~$1B revenue) has not confirmed the claim.

🔗 **Reference:** [iThome — ShinyHunters宣稱將公開服飾品牌Carhartt 50GB員工、客戶資料](https://www.ithome.com.tw/news/178161)

📌 **Valve Steam Hardware Customers Exposed via Logistics Partner CEVA Breach**

Valve notified European Steam hardware customers that logistics partner **CEVA Logistics** was breached between July 29 and August 1, potentially exposing **names, addresses, phone numbers, emails, and ordered product details** for Steam hardware shipments in Europe. Steam accounts, passwords, Steam Guard codes, and payment information were not affected. Valve is reporting to data-protection authorities and warns customers about phishing using order details.

🔗 **Reference:** [iThome — 遊戲發行商Valve受物流夥伴CEVA遭駭波及](https://www.ithome.com.tw/news/178188)

📌 **Anthropic Claude Outage (Aug 16): Multi-Service Failure Resolved in 36 Minutes**

Claude.ai, Claude Console, **Claude API**, Claude Code, and Claude Cowork degraded starting Aug 16 (UTC), beginning with login-authentication issues before expanding to performance problems across the suite. Anthropic deployed a fix and declared the incident resolved **36 minutes** after the first status notice. No root cause has been published.

🔗 **Reference:** [iThome — Anthropic Claude於8月16日發生大當機](https://www.ithome.com.tw/news/178172)

📌 **GeoServer Zero-Day Update: OSGeo Patches GHSA-mqjf-5f49-2fjh (CVSS 9.8)**

The unauthenticated SQL injection/remote code execution zero-day in GeoServer disclosed Aug 12 — exploited within hours by attackers probing for vulnerable instances — now has an official patch. OSGeo shipped GeoServer 3.0.1, 2.28.5, and 2.27.6 on Aug 14, tracked as **GHSA-mqjf-5f49-2fjh (CVSS 9.8)**. The flaw is a **regression of CVE-2023-25158** in the GeoTools `jsonArrayContains` filter function used with PostGIS 12+, where the original mitigation no longer applies. No CVE has been assigned yet; OSGeo advises upgrading GeoTools/GeoServer.

🔗 **Reference:** [iThome — GeoServer零時差漏洞出現遭嘗試利用的跡象](https://www.ithome.com.tw/news/178166) | [iThome — OSGeo指出問題發生在GeoTools元件](https://www.ithome.com.tw/news/178169)

📌 **macOS Screen Sharing CVE-2026-65400 Exploited for Monero Mining (Update)**

The Apple emergency-patched macOS Screen Sharing vulnerability CVE-2026-65400 (CVSS 7.1, auth bypass) — covered in our Aug 13 digest — is now confirmed actively exploited. Netherlands' NCSC-NL updated its warning on Aug 12: attackers are breaching internet-exposed Macs on **port 5900**, gaining **root**, and deploying **Monero cryptocurrency miners**. Verify patching of all macOS endpoints with Screen Sharing reachable from the internet.

🔗 **Reference:** [iThome — 駭客利用macOS螢幕分享漏洞部署門羅幣挖礦軟體](https://www.ithome.com.tw/news/178182)

📌 **AmnesiaStealer: ClickFix Social Engineering Delivers New macOS Info-Stealer**

Jamf Threat Labs uncovered **AmnesiaStealer**, a new macOS info-stealer distributed via ClickFix-style fake GitHub download pages that trick users into pasting terminal commands. The three-stage chain downloads a Rust stealer, harvests the macOS Keychain, Safari cookies, Apple Notes, and Telegram data, then loads a Chromium browser-control module for session/cookie theft and remote input control. Jamf found the fake-page lure templates are shared with earlier stealers (Atomic/AMOS, MacSync), suggesting common infrastructure; no attribution yet.

🔗 **Reference:** [iThome — 資安業者揭露新型macOS竊資軟體AmnesiaStealer](https://www.ithome.com.tw/news/178196)

📌 **Rancher CVE-2026-44945 (CVSS 9.1): Cross-Cluster Impersonation → Full Management Plane**

SUSE patched a critical privilege-escalation vulnerability in Kubernetes multi-cluster manager **Rancher** (2.11–2.14). An attacker logged in with a default user account who controls RBAC on at least one registered downstream cluster can impersonate higher-privilege identities and obtain **full management control of every cluster** managed by the Rancher instance — including secrets. The flaw stems from a cross-cluster identity-impersonation check that resolves against the local management cluster instead of the target cluster and trusts the HTTP impersonation header. Fixed in 2.11.16, 2.12.12, 2.13.8, and 2.14.4.

🔗 **Reference:** [iThome — K8s多叢集管理平臺Rancher修補重大權限提升漏洞](https://www.ithome.com.tw/news/178197)

📌 **Evooo1Bot: Mirai-Derived Linux Botnet Turns Edge Devices into SOCKS5 Proxies**

Fortinet FortiGuard Labs disclosed **Evooo1Bot**, a previously undocumented Linux botnet active since July 2026. It reuses the leaked Mirai DDoS engine and adds encrypted C2, an SSH brute-forcer, a SOCKS relay module, a credential sniffer, and an exploit arsenal covering **10 known CVEs** (Alcatel OmniPCX, NETGEAR, Tenda, D-Link, Telesquare, Mitsubishi ME-RTU devices). Payload delivery uses a loader shell script fetched from `91.92.40[.]118`; the binary evades analysis sandboxes and talks to C2 on port 443.

🔗 **Reference:** [The Hacker News — Evooo1Bot Linux Botnet Exploits Known Flaws](https://thehackernews.com/2026/08/evooo1bot-linux-botnet-exploits-known.html)

📌 **MCP Servers: The New Enterprise Secret Leak Vector**

The Hacker News warns that Model Context Protocol (MCP) servers — the connection layer between AI agents and enterprise tools/data — are emerging as a silent secret-exposure vector. Plaintext config files, over-permissioned access, and prompt injection can expose credentials, service-account keys, and API tokens, often before security teams even know an MCP server is running. Because MCP turns AI agents into active identities (Non-Human Identities) that take actions, a leaked secret can be used directly against enterprise systems rather than merely disclosing data.

🔗 **Reference:** [The Hacker News — How MCP Servers Can Expose Enterprise Secrets](https://thehackernews.com/2026/08/how-mcp-servers-can-expose-enterprise.html)

📌 **Honeypot Startup Hired Three North Korean Hackers — and Recorded Everything**

Researchers from BCA LTD, NorthScan, and ANY.RUN created a fake DeFi startup (**Ballena Azul**) and hired three developers they assess to be North Korean IT workers tied to the **Famous Chollima / Lazarus** ecosystem. All three passed interviews with AI-assistance tools (AIApply, Final Round AI, Simplify Copilot), submitted documents with inconsistencies (e.g., a California ID for a claimed Texas resident, SynthID watermark traces), and on day one ran `dxdiag`/`systeminfo`/`wmic`, checked IP geolocation, and installed Chrome Remote Desktop — exposing their real browser history, saved passwords, and employer GitHub accounts to the researchers' monitored VMs. The experiment documents how state-aligned IT workers infiltrate Western companies en masse.

🔗 **Reference:** [xakep.ru — Исследователи создали фейковый криптостартап и наняли северокорейских хакеров](https://xakep.ru/2026/08/17/hiring-lazarus-apt/)

📌 **Network Vendor Patch Roundup: SonicWall GMS, TP-Link Aginet, Fortinet**

- **SonicWall** patched 6 flaws in the **retired GMS** management platform (EOL Oct 2025): CVE-2026-66147 (CVSS 9.4) and CVE-2026-66145 (CVSS 9.1) allow **unauthenticated remote code execution** (the latter also enables arbitrary file writes via Zip-slip); fixed in GMS 9.5.2.
- **TP-Link** patched 5 vulns in its ISP-facing **Aginet** line (Mesh Wi-Fi, routers, PON, xDSL): CVE-2025-30237 (CVSS 8.7) is an **authentication bypass giving full device control**; CVE-2025-30238/30241 (CVSS 8.6 each) enable privilege escalation and arbitrary command execution. Firmware is deployed by ISPs — verify with your provider.
- **Fortinet** patched 5 flaws across FortiWeb and FortiManager: CVE-2026-26035 (CVSS 8.8) lets remote attackers log into FortiWeb GUI/CLI as admin via its RADIUS-style auth; CVE-2026-70468 (CVSS 7.3) allows unauthenticated FGFM-based authentication bypass in FortiManager.

🔗 **Reference:** [iThome — SonicWall為已退役GMS平臺修補6個漏洞](https://www.ithome.com.tw/news/178167) | [iThome — TP-Link修補Aginet網路產品線5個漏洞](https://www.ithome.com.tw/news/178186) | [iThome — Fortinet修補WAF及網路設備管理平臺漏洞](https://www.ithome.com.tw/news/178163)

---

## How Can OPSWAT Help

Several of today's items hinge on **untrusted files arriving at the endpoint or through the network** — AmnesiaStealer's fake GitHub download pages and ClickFix "paste this command" lures are file-borne attacks that evade signature-only defenses. MetaDefender's multi-scanning (30+ engines) and Content Disarm and Reconstruction (CDR) neutralize malicious payloads in downloaded files, firmware images, and email attachments before they execute, and deep content inspection catches obfuscated installers that single-engine AV misses. For teams assessing MCP/AI-agent toolchains that pull packages or files from untrusted sources, the same inspection layer applies at ingestion points.

🔗 **Reference:** Coverage from [iThome](https://www.ithome.com.tw/news/178184), [TechTimes](https://www.techtimes.com/articles/324578/20260815/clop-hacks-shell-ge-philips-43-victim-ptc-windchill-zero-day-campaign.htm), [eSecurity Planet](https://www.esecurityplanet.com/threats/shell-investigates-clop-data-theft-claims-tied-to-ptc-flaw/), [Reuters](https://www.reuters.com/legal/government/philips-shell-targeted-by-hacking-group-2026-08-13/)