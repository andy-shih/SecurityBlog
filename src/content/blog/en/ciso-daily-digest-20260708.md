---
title: "CISO Daily Digest: Anthropic Claude Cowork Goes Mobile — AI Agent Now on Web & Phone (20260708)"
description: "Anthropic launches Claude Cowork on mobile and web with cross-device sync; extends Fable 5 access by 5 days with security fix; GitLost flaw exposes private data from GitHub agentic workflows; 15-year-old GhostLock Linux flaw enables root/container escape; ClickFix malware campaign expands to macOS; Gitea CVE-2026-20896 exploited against 6,200+ instances; CISA adds 4 actively exploited flaws to KEV; Tenda router backdoor grants admin access."
pubDate: 2026-07-08
tags: [CISO, Daily Digest, Security, AI Governance, Vulnerability, Malware, Supply Chain, Anthropic, Claude, Cowork, Fable 5, Linux, Gitea, macOS, ClickFix, CISA, Ransomware]
author: "Security Solutions Team"
featured: true
---

## Anthropic Claude Cowork Goes Mobile — AI Agent Expands Across Web & Phone

Anthropic today launched **Claude Cowork** on mobile and web platforms, extending the AI agent's availability beyond desktop clients. Max subscribers can now start tasks on one device and continue them on another, with the agent continuing to run in the cloud even when the laptop is closed. The expansion positions Claude Cowork as a persistent, cross-platform AI workforce, competing directly with similar mobile-agent launches from OpenAI and Google.

Alongside the mobile rollout, Anthropic extended **Claude Fable 5** access by five days through July 12 for all paid subscribers, after initially removing it from subscription tiers. The company also reintroduced Fable 5 with new operational limits and a security fix addressing the earlier steganographic tracker controversy. Separately, Anthropic signed a **20-year, 401MW data center lease** with TeraWulf, signaling aggressive infrastructure buildout ahead of a potential IPO.

### Why This Reshapes AI Agent Governance

The mobile Claude Cowork launch broadens the attack surface for enterprise AI agents: persistent cloud execution, cross-device session continuity, and background VM operations introduce new identity, authorization, and data residency considerations. The Fable 5 extension — a model capable of autonomous code generation and tool use — combined with the earlier tracker incident underscores the tension between capability expansion and safety guardrails. CISOs should evaluate whether their organizations have visibility into AI agent activity across endpoints, especially as agents gain persistent cloud execution capabilities.

🔗 **Reference:** Coverage from ([The Verge](https://www.theverge.com/2026/7/8/4247890/anthropic-is-launching-claude-cowork-on-mobile-and-web), [TechCrunch](https://techcrunch.com/2026/07/08/claude-cowork-expands-to-mobile-and-web/), [The Decoder](https://the-decoder.com/anthropics-claude-cowork-ai-agent-is-now-available-on-mobile-and-web/), [The New Stack](https://thenewstack.io/anthropic-gives-claude-subscribers-five-more-days-with-fable-5/), [Security Affairs](https://securityaffairs.com/183956/cyber-crime/anthropic-extends-claude-fable-5-free-access-on-all-paid-plans.html), [iThome](https://www.ithome.com.tw/news/177140))

---

## Active Threats This Week

📌 **GitLost Flaw Exposes Private Data From GitHub Agentic Workflows**
A vulnerability dubbed **GitLost** in GitHub's agentic workflow system could leak private repository data and secrets through malicious contributions. The flaw exploits how GitHub handles permissions in automated CI/CD pipelines triggered by third-party forks. Organizations using GitHub Actions with external contributors should review their token scoping and workflow approval settings.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyber-risk/gitlost-leaks-private-data-github-agentic-workflows)

📌 **GhostLock: 15-Year-Old Linux Flaw Enables Root Access & Container Escape**
A **15-year-old vulnerability** in the Linux kernel's futex subsystem — dubbed **GhostLock** — affects most major distributions and allows local attackers to gain root privileges and escape containers. The flaw (CVE-2026-24587) has existed since kernel 2.6 and is particularly dangerous in multi-tenant container environments. Patches are rolling out across distributions.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/15-year-old-ghostlock-flaw-enables-root.html)

📌 **ClickFix Malware Campaign Expands to macOS**
The **ClickFix** social engineering technique — which tricks users into running malicious scripts via fake browser error messages — became the dominant malware delivery method between March and May 2026, according to ReliaQuest. The campaign has now expanded to target **macOS users** via fake system error prompts that execute malicious AppleScript commands through Script Editor.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177165)

📌 **Gitea CVE-2026-20896 Exploited in the Wild — 6,200+ Instances at Risk**
A critical vulnerability in the **Gitea** self-hosted Git service (CVE-2026-20896), patched in late June, is now being actively exploited. The flaw exists in the official Docker images, and Sysdig reports over **6,200 internet-exposed instances** remain vulnerable. The exploit allows unauthenticated attackers to achieve remote code execution.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177163)

📌 **DEBULL Tooling Abuses Microsoft Device-Code Flow to Target M365 Accounts**
Threat actors are leveraging a toolkit called **DEBULL** to abuse Microsoft's device-code authentication flow, enabling credential theft against Microsoft 365 accounts without triggering MFA prompts. The attack targets device-code phishing, a technique that bypasses traditional conditional access policies.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/debull-tooling-abuses-microsoft-device.html)

📌 **RedWing MaaS Packages Android Bank Fraud as a Telegram Rental Service**
A new malware-as-a-service operation called **RedWing** is offering Android banking trojans via Telegram at rental rates starting at **$500/month**. The platform includes SMS interception, overlay attacks, and accessibility service abuse targeting banking apps across Europe and Southeast Asia.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/redwing-maas-packages-android-bank.html)

📌 **Rogue Agent Flaw Enabled AI Chatbot Data Theft via Google Dialogflow CX**
A vulnerability in **Google Dialogflow CX** — dubbed **Rogue Agent** — could have allowed attackers to hijack AI chatbot conversations and exfiltrate sensitive data. The flaw involved improper authorization in agent-to-agent routing. Google has issued a fix.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/rogue-agent-flaw-could-have-let.html) | [Dark Reading](https://www.darkreading.com/application-security/dialogflow-cx-rogue-agent-flaw-enabled-ai-chatbot-d)

📌 **CISA Adds 4 Actively Exploited Flaws to KEV — Adobe, Joomla, Langflow**
CISA added four vulnerabilities to its Known Exploited Vulnerabilities catalog, including two **CVSS 10.0 Joomla plugin flaws** (JoomShaper SP Page Builder and Joomlack Page Builder) actively exploited in attacks, an **Adobe ColdFusion** zero-day, and a **Langflow** vulnerability (CVE-2026-55255) for which federal agencies have a 3-day remediation deadline.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/cisa-adds-4-actively-exploited-adobe.html) | [iThome](https://www.ithome.com.tw/news/177157) | [iThome (Joomla)](https://www.ithome.com.tw/news/177158)

📌 **Tenda Router Firmware Backdoor Grants Admin Access**
CERT/CC disclosed a severe authentication bypass vulnerability (**CVE-2026-11405**) in **Tenda** router firmware that allows attackers to gain administrative access via a hidden alternate authentication mechanism. No patch is currently available; users are advised to disable remote web management.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177173)

📌 **Big Brand Jobs Scam Targets Marketing Professionals' Google Accounts**
A sophisticated phishing campaign dubbed **Big Brand Jobs Scam** is targeting marketing and advertising professionals with fake job offers from major brands, ultimately aiming to compromise their Google Workspace accounts. The attack demonstrates how recruitment-themed phishing continues to evolve with convincing brand impersonation.
🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/big-brand-jobs-scam-marketing-pros-google-acc)

📌 **US Government Agency Pays $1M to Resolve Data Extortion Incident**
Ransom-ISAC reports that a **US local government agency** paid approximately **$1 million** to prevent the public release of stolen constituent data. The payment occurred despite FBI and CISA guidance discouraging ransom payments. The incident underscores the increasing pressure on public-sector entities facing data extortion.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177171)

---

## How Can OPSWAT Help

File-based threat delivery remains the common thread across several active campaigns this week: ClickFix delivers malware through fake error pages, Android banking trojans arrive as APK files, and vulnerable Docker images in the Gitea supply chain enable RCE. **OPSWAT MetaDefender** provides multi-engine file scanning and Content Disarm & Reconstruction (CDR) to neutralize threats in files, packages, and container images — before they reach endpoints or production environments.
