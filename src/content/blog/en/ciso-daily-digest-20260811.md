---
title: "CISO Daily Digest: Anthropic Watermarks All Claude Outputs Globally Under EU AI Act (20260811)"
description: "Anthropic now embeds invisible watermarks in all Claude-generated text and C2PA-signed metadata in files under the EU AI Act's Article 50 transparency code, applied globally. OpenAI's GPT-5.6-Cyber completes 95% of exploit-chain requests, China-linked Storm-1175 ships new StormEncryptor ransomware via N-able N-central CVE-2026-18577, Gunra ransomware (51 victims) exploits Fortinet CVE-2025-24472 and Schneider Electric CVE-2024-5559, and CERT Polska details the first private-cellular-APN attack that shut a Polish CHP plant turbine."
pubDate: 2026-08-11
tags: [ai-governance, anthropic, watermarking, eu-ai-act, ransomware, supply-chain, critical-infrastructure, ciso-daily-digest]
author: "Security Solutions Team"
featured: true
---

## Anthropic Watermarks All Claude Outputs Globally Under EU AI Act

Anthropic confirmed on August 11 that all Claude models released after **August 2** — when the EU AI Act's transparency code took effect — embed **invisible watermarks** in generated text and attach **C2PA-standard, digitally signed provenance metadata** to files (SVG, PNG, JPEG). The mark is applied **at the model level**, so it is present across every surface: Claude, the Claude Platform API, **Claude Code**, Claude Cowork, and Claude Tag. It travels with text through copy-paste and "may persist through some editing"; the rollout is **global**, not limited to the EU. Anthropic signed the **Article 50 transparency code of practice** under the EU AI Act and is back-porting marking support to models released before August 2 (timeline not yet announced). The company says the mark does not affect readability or meaning, while heavy rewriting, translation, very short text, or file re-encoding can strip it — so **absence of a mark does not prove human authorship**. The watermark's technical implementation and detection method have not been published yet.

### Why This Reshapes AI Content Governance

- **EU rule, global implementation:** a leading lab is applying an Article 50 obligation worldwide — a precedent for AI content provenance becoming a de facto global standard.
- **Verifiable provenance arrives:** C2PA-signed metadata lets systems confirm whether a file originated from Claude and whether it was altered; text watermarks add a probabilistic signal that survives copy-paste but erodes under paraphrase or translation.
- **Agent output becomes traceable:** model-level marking covers AI-agent output (Claude Code, Cowork) — significant as agents generate code, documents, and files inside enterprise workflows.
- **Limits and backlash:** detection is imperfect by design, and users have pushed back on privacy grounds; other labs (Black Forest Labs, Google, Meta, Microsoft, OpenAI, Synthesia) have committed to the same EU code, and platforms such as Suno and Substack are moving on AI-content marking amid regulatory scrutiny.

🔗 **Reference:** Coverage from ([iThome](https://www.ithome.com.tw/news/178044), [TechCrunch](https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/), [The Register](https://www.theregister.com/ai-and-ml/2026/08/11/anthropic-pledges-to-embed-watermarks-to-help-discern-ai-slop-in-sop-to-eu/5285792), [Anthropic Support](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content))

---

## Active Threats This Week

📌 **N-able N-central auth-bypass flaws under active exploitation — Huntress and Sophos confirm intrusions (update)** — Attackers are exploiting **CVE-2026-18556** and its patch-bypass **CVE-2026-18577** (both CISA-listed as actively exploited) against N-central customers. Huntress confirmed one customer intrusion; Sophos saw an attacker create a **"veeam" domain account**, reset domain administrator passwords, and deploy remote monitoring tools across managed endpoints, targeting **backup servers, domain controllers, and application servers**.
🔗 **Reference:** [iThome 資安日報](https://www.ithome.com.tw/news/178032)

📌 **China-linked Storm-1175 deploys new StormEncryptor ransomware, likely via N-central flaw** — Microsoft Threat Intelligence says the financially motivated, China-based group **Storm-1175** — previously associated with Medusa — began deploying **StormEncryptor** on August 2. The C++ ransomware appends **.encrypted** to files and drops **!!!README_FIRST!!!.txt** ransom notes; initial access likely came via **CVE-2026-18577**. Post-compromise activity includes abuse of **AnyDesk/SimpleHelp**, **Advanced IP Scanner** for discovery, and **Mimikatz** LSASS dumping, moving from access to exfiltration and encryption within days.
🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/08/china-linked-hackers-deploy-new.html), [iThome](https://www.ithome.com.tw/news/178020))

📌 **Gunra ransomware: South Korea and CISA warn of 51 victims across critical infrastructure** — A joint advisory flags **Gunra** (Conti-derived, active since April 2025) targeting healthcare, financial services, government, and professional services. Initial access abuses **Schneider Electric PowerLogic P5 (CVE-2024-5559)** and **Fortinet FortiOS/FortiProxy (CVE-2025-24472)**; the group runs double extortion with 5–7 day deadlines, uses phishing as its main vector, negotiates via a **WhatsApp-themed panel**, and encrypts with Salsa20/ChaCha20. Ransomware.Live lists **51 victims**, mostly in South Korea, Brazil, Spain, Thailand, and Hong Kong.
🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/08/gunra-ransomware-exploits-fortinet-and.html), [iThome](https://www.ithome.com.tw/news/178037))

📌 **CERT Polska: first real-world private-cellular-APN attack shuts a Polish CHP plant turbine** — Attackers pivoted from a **wind-farm network** across a **private APN** (access point name) — where client-to-client traffic was allowed — to a **WAGO controller with default admin credentials**, shutting a steam turbine and the process-water system at a combined heat-and-power plant serving **~50,000 residents** (December 2025 incident, disclosed August 8). CERT Polska calls it the first observed real-world use of this vector; no CVE or single patch exists. This is the **second** Polish CHP plant hit.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/hackers-breach-polish-power-plant.html)

📌 **US water-utility attacks widen to a dozen states; Iran suspected (update)** — Dark Reading reports water/wastewater intrusions now span **at least 12 states**, using low-complexity attacks against **Internet-exposed PLCs**. Minnesota first confirmed OT targeting across 30+ systems in late July; CISA updated its advisory on **July 30** (attackers modifying PLC passwords and re-IP'ing devices to lock out operators), following an **FBI update on July 22** linking Iranian actors to PLC targeting across Rockwell/Allen-Bradley, Schneider Electric, and Siemens gear.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/ics-ot-security/multistate-water-system-attacks-widen-iran-suspected)

📌 **Ceva Logistics breach ripples across banks, retailers, and Steam gamers** — The France-based shipping giant (US$18.3B revenue, 1,000+ warehouses) confirmed a cyberattack affecting **at least 8 European warehouses** (began July 29 per FreightWaves), with shipment delays and canceled orders. Customer **names, home addresses, phone numbers, and emails** were taken; affected parties include Dutch retailers **Bol** and **De Bijenkorf**, football club **Ajax**, bank **ING**, eyewear maker **Ace & Tate**, and **Valve**, which alerted Steam hardware buyers on August 7.
🔗 **Reference:** Coverage from ([TechCrunch](https://techcrunch.com/2026/08/10/a-data-breach-at-shipping-giant-ceva-logistics-is-rippling-across-banks-retailers-steam-gamers-and-beyond/), [iThome 資安日報](https://www.ithome.com.tw/news/178032))

📌 **BdThemes WordPress supply-chain attack poisons JSON to create rogue admins** — Wordfence found plugins by **BdThemes** (350,000+ combined active installs; Element Pack Addons alone 100,000+) were compromised via a poisoned **JSON data stream** fetched by the "Biggopti" admin banner component — no source changes in the WordPress.org repo. An **XSS flaw (CVSS 5.4)** in JSON parsing via the display_id parameter lets attackers run scripts on every **wp-admin** page load, creating rogue admin accounts. Downloads were closed August 7–8 pending review.
🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/08/bdthemes-supply-chain-attack-poisons.html), [iThome](https://www.ithome.com.tw/news/178021))

📌 **Metabase CVE-2026-72898 (CVSS 10.0) fallout: Framework, Tally, Anaconda, and n8n confirm exposure (update)** — The exploited SQL-injection zero-day (GHSA-vwf4-m7j8-wcjf) keeps producing victims: laptop maker **Framework** (names, emails, phones, addresses), form platform **Tally** (emails, hashed passwords), and AI platforms **Anaconda** and **n8n** confirmed breaches of their Metabase instances. Patches: **0.58.24 / 0.59.21 / 0.60.17 / 0.61.11 / 0.62.9 / 0.63.5**.
🔗 **Reference:** Coverage from ([iThome 資料外洩](https://www.ithome.com.tw/news/178029), [iThome 修補公告](https://www.ithome.com.tw/news/178023))

📌 **OpenAI launches GPT-5.6-Cyber with reduced safeguards; Daybreak Red reports 400+ kernel flaws** — Built on GPT-5.6 Sol and offered via the new **Daybreak Red** tier, GPT-5.6-Cyber is trained for zero-day discovery and exploit-chain development with fewer refusals for dual-use requests. OpenAI's internal evaluation shows it completes **95.0%** of advanced-cyber requests vs **1.5%** for GPT-5.6 Sol and **57.3%** for GPT-5.5-Cyber; Daybreak Red already found **400+ privilege-escalation flaws** in a major OS kernel.
🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/08/openai-launches-gpt-56-cyber-with.html), [iThome](https://www.ithome.com.tw/news/178022))

📌 **GhostSplice: malicious MCP servers split instructions to make AI coding agents exfiltrate secrets** — ASSET Research Group showed a malicious **MCP server** can fragment a data-theft request across tool descriptions and results — each piece benign-looking — and let the agent reassemble and send back SSH keys, environment secrets, source code, and customer data. The same model refused in one coding client yet exfiltrated in another; the attack assumes the developer already connected the malicious server. No CVE yet; no confirmed real-world victim.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/malicious-mcp-servers-can-split.html)

📌 **Plug And Pwn: USB auto-install chained to SYSTEM on fully patched Windows 11** — Researchers (DEF CON 34) emulated a **Sierra Wireless** device so Windows installed **SwiService.exe** (a SYSTEM service with a SetDNS primitive), redirected DNS, then used a **Sony FeliCa** reader co-installer fetching configs over plaintext HTTP with a path traversal to plant a DLL in System32 → SYSTEM code execution. A remote variant works over RDP with synthetic USB (phantom Intel RealSense device, CRYPTBASE.dll search-order hijack); USB redirection is off by default.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/researchers-turn-usb-auto-install-into.html)

📌 **Forescout: 15 ZTP flaws in TP-Link Omada chain to full network compromise** — Eleven CVEs (**CVE-2025-9289~9293, CVE-2025-15544, CVE-2025-15627~15631**) plus four uncatalogued issues cover hardcoded keys and certificates, insecure credential transfer, certificate-validation gaps (MitM), controller XSS, and a race condition in cloud device onboarding. Combined with two previously disclosed RCEs, attackers can enroll devices by **predictable serial number** — no initial network access required — and take over managed Omada infrastructure.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/10/tp-link-omada/)

📌 **Paperclip AI-agent platform: CVSS 10.0 flaws allow unauthenticated server takeover** — Oasis Security found three critical flaws in the AI-agent orchestration platform's authentication and local dev mode, letting unauthenticated attackers browse the platform, create accounts, and run **arbitrary commands on the server in minutes** — no phishing, credentials, or user interaction needed. One issue scores **10.0**; fixed in version 2026.416.0 (April).
🔗 **Reference:** [iThome 資安日報](https://www.ithome.com.tw/news/178032)

📌 **DeadLock ransomware builds distributed extortion infrastructure on Polygon, Session, and Wasabi** — Microsoft Threat Intelligence analysis shows DeadLock (since July 2025; **80+ victims** on its leak site by July 2026, over half in Europe) decentralizes operations: agent and leak-site data live in **Polygon smart contracts**, communications run over the **Session** network, and stolen data is staged in **Wasabi** cloud storage. An affiliate group is linked to the **Lynx and INC ransomware ecosystems**; victims span IT, mining, logistics, manufacturing, and hospitality.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178048)

---

## How Can OPSWAT Help

Today's mix — trojanized plugin data streams (BdThemes), three ransomware families (StormEncryptor, Gunra, DeadLock), USB-triggered installer hijacks, and AI agents exfiltrating code and secrets — all share one property: the payload crosses a **file or package boundary** before executing. MetaDefender's **multi-scanning (30+ engines)** and **Content Disarm & Reconstruction (CDR)** neutralize malicious documents, archives, and installers at the gateway, while file-reputation and deep-content analysis help verify the provenance of downloaded packages and plugin updates before they reach endpoints, servers, or agent toolchains.
