---
title: "CISO Daily Digest: Trump Reverses on Anthropic Fable 5 Threat Assessment (20260620)"
description: "Trump reverses course, says Anthropic is no longer a national security threat days after Fable 5 export ban; Anthropic opens Seoul office and hires Nobel-winning DeepMind VP John Jumper — mixed signals from Washington as Claude Fable 5 on Bedrock requires sharing inference data with Anthropic. Also: AutoJack attack hijacks AI agents via single web page, Operation Endgame cleans 14,971 SocGholish-infected WordPress sites, unpatchable usbliter8 exploit breaks Apple A12/A13 SecureROM, and The Gentlemen RaaS targets 400 security processes."
pubDate: 2026-06-20
tags: [Anthropic, Fable 5, AI Governance, Export Control, Supply Chain Security, Vulnerability, Ransomware, CISO]
author: "Security Solutions Team"
featured: true
---

## Trump Reverses on Anthropic — U-Turn on Fable 5 National Security Threat

In a dramatic 48-hour reversal, former President Donald Trump declared that Anthropic is **no longer a national security threat**, walking back statements made just days earlier when his administration flagged the company's **Claude Fable 5** capability threshold model under export control restrictions. Speaking at a press event, Trump said Anthropic was a threat "a week ago, maybe" before crediting the Claude maker for its constructive engagement with the administration.

The reversal comes amid growing confusion over the U.S. government's stance on frontier AI models. Earlier this week, the Trump administration announced export restrictions on Fable 5 and the newly revealed **Mythos 5** model, cutting off access for South Korea and other allied nations. Yet the same administration now appears unwilling to classify Anthropic as a national security concern, suggesting significant internal policy disagreement.

Anthropic has not waited for clarity. The company **opened a Seoul office** this week, demonstrating its commitment to the Asia-Pacific market despite the export ban on its most advanced models. Separately, Anthropic announced the hire of **John Jumper**, former Google DeepMind Vice President and 2024 Nobel laureate in Chemistry for AlphaFold, signaling an aggressive push into AI-driven scientific research.

Adding to the complexity, AWS customers using **Claude Fable 5 on Amazon Bedrock** must now consent to sharing inference data with Anthropic — a policy shift that raises enterprise privacy and compliance questions. The **Claude Corps Fellowship** program, meanwhile, has opened **1,000 AI jobs** at nonprofits with a July 17 deadline, expanding Anthropic's social impact footprint.

### Why This Reshapes AI Governance

The Trump administration's whipsaw on Anthropic underscores the lack of a coherent U.S. AI export control framework. A company deemed a national security threat on Monday and cleared on Wednesday — while its advanced models remain export-restricted — creates an untenable environment for enterprise planning. CISO teams at multinational organizations now face the question: which government signals should drive AI procurement decisions?

The Seoul office opening in parallel with export restrictions highlights the tension between U.S. geopolitical objectives and the global nature of AI talent and markets. Anthropic's strategy of hiring top DeepMind leadership further signals that frontier AI companies view government restrictions as temporary hurdles rather than existential barriers.

🔗 **Reference:** Coverage from ([Benzinga](https://www.benzinga.com/markets/equities/25/06/43923873/trump-says-anthropic-was-national-security-threat-a-week-ago-maybe-then-credits-claude-maker-for-act), [The News International](https://www.thenews.com.pk/print/1303858-trump-makes-major-u-turn-on-anthropic-says-ai-firm-is-no-longer-a-national-security-threat), [Tech Times](https://www.techtimes.com/articles/302726/20250620/anthropic-opens-seoul-office-us-export-ban-korean-access-top-models.htm), [Reuters](https://www.reuters.com/technology/artificial-intelligence/anthropic-hires-google-deepmind-vp-john-jumper-after-nobel-success-2026-06-20/), [InfoQ](https://www.infoq.com/news/2026/06/claude-fable-5-bedrock-anthropic-inference-data/), [BeInCrypto](https://beincrypto.com/donald-trump-speaks-on-anthropic-and-claude-fable-5-controversy/), [Tech Times](https://www.techtimes.com/articles/307430/20250620/claude-corps-fellowship-opens-1-000-ai-jobs-at-nonprofits-before-july-17-deadline.htm))

---

## Active Threats This Week

📌 **AutoJack Attack: One Web Page Hijacks AI Agents for Code Execution**
Researchers disclosed **AutoJack**, a novel class of attack where a single compromised or malicious web page can hijack an embedded AI agent and execute arbitrary host code. The attack exploits the lack of proper sandboxing between browser-based AI assistants and the underlying system. Affected platforms include browser-native AI agents and sidebar assistants. No CVE has been assigned yet, but the disclosure warns that the attack surface is broad and unpatched in most implementations.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/autojack-attack-lets-one-web-page.html)

📌 **Operation Endgame Disrupts SocGholish, Cleans 14,971 WordPress Sites**
Law enforcement's **Operation Endgame** expanded its crackdown on malware delivery infrastructure, targeting **SocGholish** (aka FakeUpdates) — one of the largest JavaScript-based malware loaders. Operation Endgame cleaned **14,971 compromised WordPress sites** that were being used as SocGholish distribution nodes. The operation continues to dismantle the botnet infrastructure behind SocGholish, which had been active since at least 2018 and was used for initial access delivery in ransomware campaigns.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/operation-endgame-disrupts-socgholish.html)

📌 **Unpatchable 'usbliter8' Exploit Breaks Apple A12/A13 SecureROM Boot Chain**
A new exploit named **usbliter8** targets an unpatchable hardware vulnerability in Apple's **A12 and A13 SecureROM** — the read-only boot ROM that establishes the root of trust for iPhones and iPads. Since the vulnerability is in mask ROM (hardwired during chip fabrication), Apple cannot issue a firmware fix. The exploit breaks the Secure Boot chain, potentially allowing persistent, undetectable jailbreaks. While physical-access-only for now, the implications for enterprise device security and supply chain integrity are significant.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/unpatchable-usbliter8-exploit-breaks.html)

📌 **The Gentlemen RaaS Uses GentleKiller EDR Framework Targeting 400 Security Processes**
A new ransomware-as-a-service (RaaS) operation called **The Gentlemen** is deploying a custom EDR-killing framework named **GentleKiller**, which targets **400 security processes** across major EDR, XDR, and AV platforms. The framework uses multiple techniques including ETW patching, minifilter driver unhooking, and direct system call invocation to bypass kernel-level monitoring. The RaaS affiliates are actively recruiting on underground forums, suggesting this capability may proliferate quickly.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/the-gentlemen-raas-uses-gentlekiller.html)

📌 **Hackers Exploit Gravity SMTP WordPress Plugin Bug to Expose API Keys**
Attackers are actively exploiting a vulnerability in the **Gravity SMTP** WordPress plugin (versions prior to 1.3.2) that exposes stored SMTP API keys and credentials. The plugin, used by over 200,000 sites for transactional email, stored credentials in plaintext in the database. The exploit allows unauthenticated attackers to retrieve SMTP credentials, enabling email account takeover and potential lateral movement within cloud email environments.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/hackers-exploit-gravity-smtp-wordpress.html)

---

## How Can OPSWAT Help

File-based threats remain the primary vector for initial access, and **The Gentlemen RaaS** and **SocGholish** campaigns both rely on malicious file delivery. OPSWAT MetaDefender uses **multi-scanning with 30+ anti-malware engines** and **Deep Content Disarm and Reconstruction (CDR)** to detect and neutralize threats in files, including zero-day malware and weaponized documents. For WordPress site owners, OPSWAT's file upload security solutions can prevent malicious file uploads before they reach the server. For endpoint protection against EDR-targeting frameworks like GentleKiller, OPSWAT's MetaDefender Endpoint provides layered defense with multiple detection engines that an attacker would need to bypass individually — a significantly harder task than disabling a single EDR process.
