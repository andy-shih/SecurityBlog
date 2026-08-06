---
title: "CISO Daily Digest: Anthropic Confirms In-House Chip Team to Build Custom Silicon for Claude (20260806)"
description: "Anthropic confirmed August 5 it is building an in-house custom silicon team to co-design chips and models for Claude — joining OpenAI's Broadcom-built Jalapeño as AI vendors move up the hardware stack. Meanwhile CISA added JetBrains TeamCity CVE-2026-63077 (CVSS 9.8, actively exploited) to KEV with an August 8 federal patch deadline, Veeam patched CVSS 10.0 RCE CVE-2026-64633 in Veeam ONE, Microsoft mapped the ChainDrop npm worm kill-chain, and a 250+-domain macOS ClickFix campaign delivered Atomic Stealer (AMOS)."
pubDate: 2026-08-06
tags: [CISO, Daily Digest, AI Security, Supply Chain, Vulnerabilities, Malware]
author: "Security Solutions Team"
featured: true
---

## Anthropic Confirms In-House Chip Team to Design Custom Silicon for Claude

Anthropic confirmed to Business Insider and Reuters on **August 5** that it is assembling an in-house **"custom silicon team"** to design its own AI chips for Claude — the company's first public confirmation of an in-house chip program. Job listings describe engineers spanning front-end and physical chip design, pre-silicon verification, foundry, packaging and test, with salaries between **US$320,000 and US$485,000**. Anthropic says the team will **co-design hardware and models** so Claude runs faster and more efficiently, and stressed that the move does not replace existing suppliers: AWS Trainium, Google TPU, Nvidia GPU and AMD silicon remain central to its multi-chip compute strategy.

The company gave no timeline, specs or manufacturing partner. The Information reported last month that Anthropic was scouting **Samsung** as a chip partner, and Reuters sources put the cost of developing an advanced AI chip at close to **half a billion dollars**. Anthropic follows OpenAI, which unveiled its Broadcom-built **Jalapeño** inference chip in June; Google (TPU), Amazon (Trainium/Inferentia), Microsoft (Maia) and Meta (MTIA) already run or are building custom accelerators.

### Why This Reshapes AI Infrastructure Governance

Custom silicon is a compute-cost play: co-designing chips with models attacks the single largest cost driver of AI services, and cheaper inference directly expands where agentic AI can be deployed — including security-critical workflows. For CISOs, the trend concentrates capability decisions (foundry choice, IP licensing, partner dependency) inside a small set of AI vendors, creating a new supply-chain layer to monitor alongside model and API dependencies. The timing also echoes the defense shift discussed at Black Hat's AI Summit, where Anthropic's Rob Bair argued the industry is in a "post-Mythos era" in which defenders must share which codebases they scan and stop delaying vulnerability disclosure for conference schedules — the same machine-speed dynamic that makes inference economics and AI supply chains board-level risk items.

🔗 **Reference:** Coverage from ([Reuters](https://www.reuters.com/business/anthropic-build-in-house-chip-design-team-claude-hire-engineers-2026-08-05/), [TechCrunch](https://techcrunch.com/2026/08/05/anthropic-is-hiring-an-ai-chip-design-team/), [Quartz](https://qz.com/anthropic-custom-ai-chip-design-team-claude-080526), [iThome](https://www.ithome.com.tw/news/177902))

---

## Active Threats This Week

📌 **CISA adds JetBrains TeamCity CVE-2026-63077 (CVSS 9.8) to KEV — actively exploited**
CISA warned on **August 5** that an untrusted-data deserialization flaw in the CI/CD platform TeamCity is under active exploitation, adding it to the Known Exploited Vulnerabilities catalog with a **3-day federal patch deadline of August 8**. The vulnerability lets unauthenticated attackers reach a TeamCity server over HTTP/HTTPS and execute OS commands via the agent polling protocol — exposing build configs, credentials and downstream CI/CD pipeline integrity. JetBrains disclosed the flaw on July 27 and patched on-premises builds in **2025.11.7 / 2026.1.3**.
🔗 **Reference:** [iThome — CISA warning](https://www.ithome.com.tw/news/177916) | [iThome — JetBrains advisory](https://www.ithome.com.tw/news/177909)

📌 **Veeam patches critical RCEs in Veeam ONE and Service Provider Console**
Veeam's August 4 advisories cover **six flaws in Veeam ONE**, led by **CVE-2026-64633 (CVSS 10.0)** — arbitrary code execution on hosts running the monitoring agent — plus CVE-2026-58075 (8.7), CVE-2026-58074 and CVE-2026-64631 (8.6) and CVE-2026-64634 (8.4). All 13.0.x builds before 13.0.2.6723 are affected; fixed in **13.1.0.7034**. The Service Provider Console update (**9.3.0.35057**) fixes **CVE-2026-58073 (CVSS 9.5)** — managed-agent impersonation leaking credentials — and **CVE-2026-58072 (9.0)**, arbitrary file write and code execution on the management server, plus CVE-2026-58067 (8.7) and CVE-2026-58071 (8.2). Both platforms sit at the center of backup and multi-tenant MSP environments.
🔗 **Reference:** [iThome — Veeam ONE](https://www.ithome.com.tw/news/177910) | [iThome — Veeam SPC](https://www.ithome.com.tw/news/177918)

📌 **macOS ClickFix campaign: 250+ fingerprinting domains drop Atomic Stealer**
Microsoft Threat Intelligence tracked a macOS ClickFix operation whose **250+ front-end domains** fingerprint visitors (platform string, screen/window dimensions, WebGL signals) before serving a fake software download, hiding the lure from crawlers and sandboxes. The analyzed chain ends in **Atomic Stealer (AMOS)**; victims who paste an obfuscated Terminal command launch an infostealer targeting credentials, browser data, authentication stores and crypto wallets. Microsoft's analysis published August 5.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/over-250-clickfix-domains-use-browser.html)

📌 **ChainDrop: Microsoft maps the keyv worm kill-chain; researchers tie it to Shai-Hulud**
Following the August 4 compromise of the GitHub account behind the keyv npm package — **444 packages polluted, 2,212 malicious versions published** — Microsoft's threat-intel team detailed the worm's behavior: it distinguishes developer workstations from CI/CD runners, steals workflow secrets, runner credentials and OIDC publish permissions, scrapes local files, environment variables and GitHub Actions runner memory, and attempts authentication against npm, GitHub, AWS, Kubernetes and HashiCorp Vault before exfiltrating via HTTPS with GitHub repositories as backup storage. Researchers from **Aikido, OX Security, Semgrep, Socket, StepSecurity and Wiz** independently tie ChainDrop to the **Shai-Hulud** campaign (same "Shai-Hulud: Here We Go Again" exfil string), while noting new tricks: basE91-polymorphic payloads, a downloaded Bun runtime, hooks injected into Claude and VS Code configurations, and C2 domains sourced from an Ethereum smart contract.
🔗 **Reference:** [iThome — Microsoft analysis](https://www.ithome.com.tw/news/177929) | [iThome — Shai-Hulud attribution](https://www.ithome.com.tw/news/177937)

📌 **Zbtlink routers ship with ENDLESSDOORS factory backdoor**
VulnCheck found a **factory-shipped backdoor** in at least **20 Chinese-made Zbtlink router models** — present in all 21 available firmware images spanning more than two years. The implant, named **ENDLESSDOORS**, masquerades as a Linux kworker kernel thread while running as root, beaconing to Chinese C2 infrastructure (47.107.224[.]89, rbdg4nzqadui[.]wikaba[.]com) as often as every 35 seconds with no authentication — the server can push individual shell commands or spawn a reverse bash shell (port 7000).
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/chinese-made-zbtlink-routers-ship-with.html)

📌 **CryptoJS weak RNG behind $5.7M in crypto-wallet drains**
Coinspect traced the **"Ill Bloom"** wallet-drain wave to `CryptoJS.lib.WordArray.random()`, a weak random-number generator introduced into the JavaScript crypto library 12 years ago that produced guessable recovery phrases. On-chain analysis puts theft across two sweeps since late May at a lower bound of roughly **$5.7 million**, across five wallet apps: RRWallet and Milo (discontinued, unfixed), Bexo (fixed 20.1.0), NanChat (fixed 1.3.0) and Bitcoin Libre (fixed v4). Updating an app does not repair already-generated phrases.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/cryptojs-weak-rng-behind-57-million-in.html)

📌 **Taiwan metal-parts maker 州巧 (TWSE: 3543) and three subsidiaries hit by hackers**
Listed metal-components manufacturer 州巧 disclosed on **August 5** via TWSE that its **Suzhou, Xiamen and Vietnam subsidiaries** suffered intrusions that left part of their information systems unusable. The company activated incident response with external experts, is scanning systems, and plans to restore services from daily backups; initial assessment indicates no material impact on overall operations.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177904)

📌 **iCloud Private Relay leaks real IPs through three WebKit proxy bypasses**
Mysk researchers found that **DNS prefetching, WebAuthn related-origin requests and WebTransport** bypass browser proxy configuration in WebKit (supported since iOS 26.0, 18.0 and 26.4 respectively), sending traffic directly from the device. That exposes the user's DNS path or real IP to websites — including through **iCloud Private Relay** — on iOS, iPadOS and macOS browsers. OS-level VPNs are not affected; Tor Project and Onion Browser developers were notified.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/webkit-proxy-bypasses-can-expose-real.html) | [iThome](https://www.ithome.com.tw/news/177913)

📌 **4,400+ Rockwell PLCs exposed online — 22 in cities hit by water-utility attacks**
Forescout's August 3 scan counted **4,407 internet-facing Rockwell Automation controllers** worldwide (2,844 in the US), including 22 in cities affected by the recent US water-utility attacks — 19 of them on the same mobile carrier network. No compromise was confirmed, and Forescout notes the reported effects (password resets, IP changes) needed no exploit: exposed EtherNet/IP on port 44818 provides an unauthenticated path to identify or reconfigure controllers.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/over-4400-rockwell-plcs-exposed-online.html)

📌 **Poison Claude: underground resale of Claude access at 5–15% of list price**
Okta researchers documented half-a-dozen services on cybercrime forums selling cut-price access to AI models. **Poison Claude** advertises Claude models (Opus 4.8/4.7/4.6, Sonnet 4.6) by pooling accounts funded with AWS Bedrock bonus credits and routing customer prompts through them — and its operator sees every prompt. A misconfiguration exposed an API status endpoint showing **881 total / 872 active users**; Cloudflare has placed a phishing warning on the service's site.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/poison-claude-sells-discounted-claude.html)

📌 **CoreBreak: AWS, Google and Vercel agent-harness flaws let tools fire without a model turn**
Presented at Black Hat USA 2026, **CoreBreak** (Stealth) covers flaws in Amazon Bedrock AgentCore's InvokeHarness API, Google's Agent Development Kit (Python) and Vercel's AI SDK harnesses for Codex and OpenCode that let untrusted or forged instructions reach an agent's tools — in several paths **without the model ever running**, so system prompts, content filters and model-level guardrails never intervene. AWS fixed the managed service, Google shipped ADK 2.5.0, and Vercel patched @ai-sdk/harness-codex 1.0.29 and @ai-sdk/harness-opencode 1.0.28.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/aws-google-and-vercel-patch-agent-flaws.html)

---

## How Can OPSWAT Help

Two of today's stories are file-borne supply-chain attacks: the **ChainDrop** npm worm (malicious packages arriving through legitimate dependency chains) and the **ClickFix** macOS campaign (fake software downloads and Terminal one-liners pulling infostealers). MetaDefender's **multi-engine scanning** — 30+ antimalware engines in one pass — plus **Content Disarm and Reconstruction (CDR)** neutralizes malicious code inside downloaded packages, installers and documents before they reach endpoints, and MetaDefender Software Supply Chain Security validates artifacts at build and ingestion time.
