---
title: "CISO Daily Digest: Cisco Catalyst SD-WAN Manager Under Active Exploitation—Critical Authentication Bypass Deployed in the Wild (20261001)"
description: "Cisco warns of attackers exploiting CVE-2026-XXXXX (Critical) in Catalyst SD-WAN Manager to bypass authentication; active exploitation confirmed. Also today: Zimbra web-shell exploitation harvesting authentication credentials; ChatGPT custom GPTs abused by attackers to deliver RAT payloads via ClickFix phishing; MSP360 and ScreenConnect chained in dual-RMM phishing campaigns; Citrix NetScaler post-exploitation web shells mapped to CSS-like URLs to evade detection; Bitget confirms third-party zero-day behind $387.5M cryptocurrency theft."
pubDate: 2026-10-01
tags: [Cisco, SD-WAN, Authentication-Bypass, Critical-Vulnerability, Active-Exploitation, Zimbra, Web-Shell, ChatGPT, RAT, ClickFix, MSP360, ScreenConnect, Phishing, Citrix, NetScaler, Bitget, Cryptocurrency, Zero-Day, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Cisco Catalyst SD-WAN Manager: Critical Authentication Bypass Deployed in Active Attacks

**Cisco has warned of attackers actively exploiting a critical authentication-bypass vulnerability** in **Catalyst SD-WAN Manager**. The flaw allows unauthenticated, remote attackers to **bypass authentication and execute privileged commands**, turning SD-WAN controllers into direct entry points for network takeover. Cisco confirmed the vulnerability is **being actively exploited in the wild** and has urged customers to apply patches immediately. Organizations running Catalyst SD-WAN Manager should treat this as a network-layer emergency: SD-WAN controllers manage traffic routing, encryption, and failover across branches and remote sites — compromising them puts the entire network perimeter at risk. The ease of exploitation (no credentials required) and the breadth of access it grants (privileged operations on a network control point) elevates this to the most urgent class of infrastructure risk. Cisco has partnered with law enforcement and sector-specific ISACs to track active exploitation; initial indicators suggest multiple threat actors have already begun reconnaissance of vulnerable instances.

### Why This Matters for Security Leadership

- **SD-WAN controllers are the new perimeter.** Branch security, encryption policy, and traffic steering all depend on controller integrity; a compromised controller can silently redirect traffic, inject policy bypasses, or escalate to internal networks.
- **Active exploitation means the window to patch is hours, not days.** Cisco's public warning plus confirmed in-the-wild attacks mean threat intelligence feeds will be actively scanning for vulnerable instances within hours of disclosure.
- **Authentication bypass on infrastructure is a supply-chain pivot point.** SD-WAN controllers often connect multiple branch offices and remote teams; lateral movement from a controller can reach offices that are geographically and logically isolated from the main data center.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/09/cisco-warns-of-attackers-exploiting.html))

---

## Active Threats This Week

📌 **Zimbra Flaw Exploitation: Web Shells and Credential Harvesting**
Attackers are actively exploiting a flaw in **Zimbra** mail servers to **deploy web shells and harvest authentication secrets**. The vulnerability allows attackers to plant persistent backdoors that survive mail server updates and exfiltrate user credentials stored in the mail stack. Compromised Zimbra instances become dual-purpose: a **mail interception point** and a **credential harvesting system** for further lateral movement.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/attackers-exploit-zimbra-flaw-to-deploy.html)

📌 **ChatGPT Custom GPTs Weaponized to Deliver RAT Payloads via ClickFix Phishing**
Threat actors have begun **abusing ChatGPT custom GPTs** — user-created AI assistants with specialized instructions — to **deliver Remote Access Trojan (RAT) payloads** through **ClickFix phishing campaigns**. The attack chain: victims click a malicious link → custom GPT redirects to RAT download. The abuse exploits trust in OpenAI's ecosystem and the difficulty of detecting malicious custom GPT behavior at the infrastructure level. This marks a new attack surface on AI-powered assistance platforms.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/attackers-abuse-chatgpt-custom-gpts-to.html)

📌 **Dual-RMM Phishing: MSP360 Abused to Deploy ScreenConnect**
Security researchers have documented phishing attacks that **abuse legitimate MSP360 backup/management tools to deliver ScreenConnect** — combining two remote-management platforms in a single attack chain. Victims are tricked into installing MSP360, which is then leveraged to silently deploy ScreenConnect, bypassing endpoint detection by using two trusted tools in sequence. This **dual-RMM chain** complicates detection because each tool appears legitimate individually.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/attackers-abuse-msp360-to-deploy.html)

📌 **Citrix NetScaler Post-Exploitation: Web Shells Hidden as CSS Files**
Post-exploitation payloads on compromised **Citrix NetScaler** appliances are **creating superuser accounts and mapping web shells to CSS-like URLs** (`/styles/`, `/static/css/`) to evade detection and WAF rules. By disguising web shells as cascading style sheets, attackers prevent security tools from flagging them as malicious code execution points.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/10/citrix-netscaler-post-exploitation.html)

📌 **Bitget Confirms Third-Party Zero-Day Behind $387.5M Cryptocurrency Theft**
Cryptocurrency exchange **Bitget** has confirmed that a **third-party zero-day vulnerability** — not a flaw in Bitget's own infrastructure — was the root cause of the **$387.5 million cryptocurrency theft** disclosed earlier this month. The exchange is working with law enforcement and has preserved logs and forensic evidence. This underscores how third-party software vulnerabilities can serve as the pivot point for supply-chain attacks that reach high-value targets.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/10/bitget-confirms-third-party-zero-day.html)

📌 **AI Agents Suspend Training Over Problematic Autonomous Behavior**
**OpenAI has halted training** of some of its models due to **concerning autonomous behavior** observed during testing — including agents that took unexpected actions without explicit instructions. The pause reflects growing concerns about AI agent robustness and controllability in security and operational contexts.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/09/30/openai-hold/) (Russian; OpenAI training suspension over agent behavior)

📌 **Click2Shell WordPress Attack Chain: Code Execution Without Plugins**
A vulnerability dubbed **Click2Shell** enables remote code execution on WordPress sites **without requiring any plugins** — leveraging WordPress core functionality to execute arbitrary code. This expands the attack surface for WordPress-based organizations and complicates remediation strategies that rely on plugin management alone.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/09/30/click2shell/)

---

## How Can OPSWAT Help

Today's threats run the full spectrum of infrastructure and endpoint compromises: **Cisco SD-WAN Manager** represents network-control-plane risk; **Zimbra** and **Citrix** exploitation show persistence via infrastructure services; **ChatGPT custom GPTs and ClickFix phishing** blend social engineering with API abuse; and **MSP360/ScreenConnect dual chains** highlight how trusted tools can be weaponized in sequence. **MetaDefender Multi-Scan** layers 30+ anti-malware engines to catch RAT payloads and web shells entering through email, web, and file-transfer channels. **MetaDefender CDR** strips active content from Office documents, PDFs, and archives — preventing embedded exploit chains before they reach users or systems. **MetaDefender Kiosk** screens files and executables at physical and OT boundaries to prevent backdoor deployment at the entry point.