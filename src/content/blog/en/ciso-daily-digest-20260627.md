---
title: "CISO Daily Digest: US Lifts Mythos 5 Block — Anthropic & OpenAI Get Green Light for Critical Infrastructure (20260627)"
description: "US government partially lifts export restrictions on both Anthropic Claude Mythos 5 and OpenAI GPT-5.6 Sol for critical infrastructure operators; Chinese-speaking APT deploys TinyRCT backdoor targeting Southeast Asian governments; FBI warns Russian intelligence hackers target Signal backup recovery keys; StrikeShark campaign uses SharkLoader to deploy Cobalt Strike across 10+ countries; Chrome ad blocker with 10M+ installs has dormant script injection capability; Amazon Q Developer MCP flaw allows credential theft from malicious repos; F5 patches two critical NGINX RCE flaws."
pubDate: 2026-06-27
tags: [anthropic, claude, mythos-5, openai, gpt-5-6-sol, ai-governance, export-control, apt, tinyrct, signal, phishing, sharkloader, cobalt-strike, chrome, security, amazon-q, nginx, ciso-daily-digest]
author: "Security Solutions Team"
featured: true
---

## US Lifts Mythos 5 Block — Anthropic & OpenAI Get Green Light for Critical Infrastructure

In a significant policy shift, the US government partially lifted export restrictions on two of the world's most powerful AI models on the same day. **Anthropic's Claude Mythos 5** received approval for deployment to over **100 US institutions** operating and protecting critical infrastructure, while **OpenAI's GPT-5.6 Sol** — alongside its siblings Terra and Luna — was released as a limited preview to select companies under a parallel government engagement framework.

Anthropic confirmed that Mythos 5, its most powerful AI model for cybersecurity, can now be used by US organizations that operate and protect critical infrastructure. The approval extends to non-US nationals employed by approved organizations. Anthropic stated it is actively working with the government to expand access to Mythos 5 and to make **Fable 5** — its most advanced frontier model — broadly available again, though no timeline was given.

OpenAI simultaneously released **GPT-5.6 Sol** as its new flagship model, touted as the "most capable model yet" for cybersecurity, along with **Terra** (balanced efficiency and power) and **Luna** (speed-optimized). On ExploitBench, GPT-5.6 Sol is competitive with Anthropic Mythos Preview using only one-third of the output tokens. OpenAI expects broader access within "a few weeks."

The coordinated release marks a departure from the earlier blanket block on both models, which had been imposed over national security concerns regarding their frontier capabilities. The pivot suggests the US government is shifting toward a **managed-access framework** — allowing advanced AI models for approved defensive security use cases while maintaining restrictions on broader availability.

**Separately**, Anthropic's accusation against Alibaba for using **25,000+ fake accounts** to conduct **29 million queries** to distill Claude capabilities continued to reverberate, with **Forbes** and **PYMNTS.com** reporting on the scale of the operation. Anthropic has also begun training a "**Claude Corps**" to teach nonprofits effective AI usage. Meanwhile, Anthropic disclosed that **Claude's paying consumer base grew 75% in 2026**, narrowing the gap with ChatGPT.

🔗 **Reference:** Coverage from ([The Decoder](https://the-decoder.com/anthropic-gets-us-approval-to-bring-back-claude-mythos-5/), [Reuters](https://www.reuters.com/technology/artificial-intelligence/us-releases-anthropic-model-mythos-semafor-reports-2026-06-27/), [WIRED](https://www.wired.com/story/how-people-in-china-keep-outsmarting-anthropics-geolocation-restrictions/), [CNN](https://www.cnn.com/2026/06/26/tech/anthropic-mythos-5-limited-release/index.html), [The Hacker News](https://thehackernews.com/2026/06/openai-limits-gpt-56-rollout-as-sol.html))

### Why This Reshapes AI Governance

The simultaneous clearance of both Anthropic Mythos 5 and OpenAI GPT-5.6 Sol signals a fundamental shift in US AI export control policy. Rather than an all-or-nothing ban, the government is adopting a **trusted-partner model** — granting access to critical infrastructure operators while maintaining restrictions on general availability. This creates a new compliance framework where AI vendors must implement **geolocation enforcement, usage monitoring, and customer vetting** at levels comparable to defense contractor clearance. CISO teams at critical infrastructure organizations should anticipate new contractual obligations for AI model usage reporting, API access auditing, and personnel screening.

---

## Active Threats This Week

📌 **Chinese-Speaking APT Deploys New TinyRCT Backdoor in Southeast Asia**
A Chinese-speaking advanced persistent threat actor (CL-STA-1062) has been linked to a new custom backdoor called **TinyRCT**, targeting government entities and state-owned enterprises in the energy sector across Southeast Asia. The lightweight .NET RAT uses AES-128 encrypted HTTP beaconing and is delivered via a Chrome-themed malicious archive exploiting **AppDomainManager injection**. Palo Alto Networks Unit 42 detected breaches of at least **10 organizations** between October and December 2025, with attackers using SoftEther VPN and Mimikatz for lateral movement.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/chinese-speaking-apt-deploys-new.html)

📌 **FBI Warns Russian Intelligence Hackers Target Signal Backup Recovery Keys**
The FBI and CISA updated their warning about Russian intelligence services targeting Signal accounts. Attackers now coax targets into handing over their **Signal Backup Recovery Key** — once stolen, the key allows full account takeover, access to private and group message history, and persists across account recreation. The advisory (PSA I-062626-PSA) ties the activity to **multiple Russian Intelligence Services groups** including FSB officers. The fix: generate a new key in Signal Settings to invalidate the old one.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/fbi-warns-russian-intelligence-hackers.html)

📌 **StrikeShark Campaign Uses SharkLoader to Deploy Cobalt Strike Across 10+ Countries**
Kaspersky uncovered the **StrikeShark** campaign using a previously undocumented malware family **SharkLoader** to deploy Cobalt Strike Beacons. Targets include a diplomatic organization in Indonesia, government organizations in Taiwan, and software development firms across Lebanon, Syria, Colombia, Nepal, and Serbia. Initial access exploits include Exchange Server flaws (ProxyLogon), Openfire path traversal, and GeoServer RCE. The campaign uses **Perfect DLL Hijacking** and custom droppers masquerading as Google Update.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/new-sharkloader-malware-deploys-cobalt.html)

📌 **Chrome Ad Blocker with 10M+ Installs Has Dormant Script Injection Capability**
Island security researchers disclosed that "**Adblock for YouTube**" (10M+ installs, Chrome Web Store Featured badge) contains a **remote-controlled script injection path** that could be activated by a single server-side configuration change — no extension update, no store review. The extension also bypasses its own youtube.com hostname check, allowing arbitrary code execution on any site. While no malicious payload has been observed, the extension has ties to other ad-blocking extensions removed from the store for malware.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/chrome-ad-blocker-with-10m-installs.html)

📌 **Amazon Q Developer Flaw Could Let Malicious Repos Steal Credentials via MCP Configs**
A high-severity flaw (CVE-2026-12957, CVSS 8.5) in **Amazon Q Developer** allowed malicious repositories to execute commands and steal cloud credentials. Wiz Research demonstrated that a single `.amazonq/mcp.json` config file in a repo was enough to go from `git clone` to cloud compromise. The AI coding assistant launched MCP servers defined in the workspace config, inheriting the developer's full environment including AWS keys, cloud CLI tokens, and API secrets. Amazon has patched the issue.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/amazon-q-developer-flaw-could-let.html)

📌 **F5 Patches Two Critical NGINX Open Source RCE Flaws**
F5 released patches for two critical remote code execution vulnerabilities in **NGINX Open Source** that could allow attackers to execute arbitrary code on affected systems. Given NGINX's deployment as a reverse proxy, load balancer, and web server across approximately **30% of all active websites**, the flaws have broad implications for internet infrastructure. Organizations running NGINX should prioritize patching.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/f5-patches-two-critical-nginx-open.html)

📌 **Google Chrome 149 Second Update This Week Patches 3 High-Risk Vulnerabilities**
Google released its second Chrome 149 stable update this week, addressing **3 high-risk vulnerabilities** (CVE-2026-13281, CVE-2026-13282, CVE-2026-13283) involving Mojo integer overflow and use-after-free bugs in Payments and AdFilter components. Users should update Chrome to the latest version immediately.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176911)

---

## How Can OPSWAT Help

The Amazon Q Developer MCP flaw and the Chrome ad blocker dormant injection capability highlight a growing threat class: **trusted software with built-in remote code execution paths**. Whether through AI assistant MCP configurations or browser extensions with server-controlled script injection, attackers are increasingly targeting the software supply chain at the tool and plugin layer. OPSWAT MetaDefender's **multi-engine scanning and CDR** can inspect browser extensions, AI tool configurations, and development tooling for embedded threats, while MetaDefender Drive and MetaDefender Kiosk provide **trusted file and device inspection** for critical infrastructure environments that are the primary deployment targets for Mythos 5 and GPT-5.6 Sol.
