---
title: "CISO Daily Digest: Claude Leads 26% of Anthropic's R&D as Researchers Breach OpenAI with AI (20260919)"
description: "Anthropic disclosed that Claude now 'leads' 26% of the company's internal AI research and development work—up from under 1% in March, with ~30,000 agents on its main platform and one in 47,000 agent decisions blocked—as security researchers at Hacktron AI disclosed breaching OpenAI: using Claude Opus to develop exploits, they compromised ChatGPT accounts and reached OpenAI's internal GitHub monorepo via a libheif image-parsing heap buffer overflow on the Discourse-hosted community forum. Also: Transparent Tribe deploys a Rust backdoor using private GitHub repositories for command-and-control; WordPress Click2Shell flaw forces theme installs with code-execution chains; Cisco zero-day highlights API endpoint authentication gaps; and Boko Haram fighters leveraged ChatGPT, Gemini, and Grok for weapons planning per Cambridge research."
pubDate: 2026-09-19
tags: [Anthropic, Claude, Claude-Opus-5, OpenAI, Hacktron-AI, libheif, AI-R&D, Epoch-AI, AI-Governance, Transparent-Tribe, Rust-Backdoor, GitHub-C2, WordPress, Click2Shell, CVE, Cisco, API-Authentication, Boko-Haram, ChatGPT, Gemini, Grok, Weapons-Planning, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## AI Leading AI: Claude Reaches 26% of Anthropic's R&D as White-Hat Researchers Breach OpenAI

**Anthropic** disclosed on **September 17** that **Claude now "leads" 26% of the company's AI research and development work** — a first release from a set of measurements Anthropic argues frontier labs should publish so outsiders can track how fast AI is building its own successors. On the **Epoch AI** automation scale (AL0 = no AI involvement, AL5 = fully autonomous), a quarter of measured R&D work now sits at **AL4 ("leads")**, where the model carries most of a task from a high-level prompt while a human supervises; the share at or above **"collaborates" (AL3) exceeds 90%**; the leading share was **below 1% in March** — a six-month doubling trajectory — and **no measured subset is fully autonomous**. The same announcement reports **~30,000 agents** performing research and engineering work on Anthropic's main internal platform in August; of **more than a billion agent decisions** that month, approximately **one in 47,000 (0.002%) was blocked** by monitors before execution, and roughly **one to two transcripts per thousand** are flagged for further human review; in a sampled week in July, **about 6% of AI R&D compute went to safety work — rising to 12% for work carried out by AI itself**. The disclosure lands amid high-stakes policy debate: **CEO Dario Amodei** had called for frontier labs to coordinate on slowing down, a researcher resigned accusing the industry of "gambling with our lives," and **OpenAI** began its own model-behavior reporting the day before Anthropic's announcement.

The same week, the offensive boundary of the same equation surfaced. Security startup **Hacktron AI** disclosed that it **breached OpenAI**, compromising **ChatGPT accounts belonging to OpenAI staff** and reaching the company's **internal GitHub monorepo** — an operation it reported to **OpenAI and Discourse in July** under OpenAI's ethical-hacking program. The entry point was **community.openai.com**, OpenAI's Discourse-hosted forum: **HEIC/HEIF images uploaded there** were processed through **ImageMagick** and decoded by **libheif**, whose version in that environment contained a **heap buffer overflow** exploitable to **remote code execution**. The researchers say **Claude Opus 4.8** helped develop the exploit, the newly released **Claude Opus 5** made it work reliably against **address-space layout randomization (ASLR)**, and **OpenAI's own GPT-5.6 Sol** was used for much of the operation; **The Wall Street Journal** described a path to **read and propose changes to private OpenAI software**. **Hacktron did not download source code** — it demonstrated reach with a **harmless pull request** in the internal monorepo — and describes the "scope of what we could theoretically access" as **huge**; the team also claims its libheif research extended to other major platforms. **OpenAI thanked the researchers and said the vulnerabilities were patched**.

### Why This Reshapes Frontier AI Security and Disclosure

- **Recursive self-improvement now has a public scoreboard.** "26% led / above 90% collaborating" is a concrete trajectory — sub-1% to a quarter in six months — on a third-party scale (Epoch AI), paired with oversight numbers (one in 47,000 decisions blocked, one to two flagged per thousand transcripts) that describe what "agent governance" looks like in practice at the frontier. Expect these figures to become the template enterprises cite when asking AI vendors to disclose comparable metrics — and for regulators to demand the same.
- **AI changed the economics of exploitation.** A memory-corruption bug in a third-party image parser (**libheif**) became an account-takeover chain that reached a major AI company's developer infrastructure — chaining vulnerable dependencies, federated identity (Discourse accounts), and AI coding tools. Exploit development that historically required scarce specialists was carried substantially by models that can write and iterate exploit code — meaning the expertise barrier to sophisticated attacks is collapsing.
- **Agent-connected developer accounts are a top-tier boundary.** The breach route ran from compromised ChatGPT accounts into **Codex** and a code repository — the same pattern enterprises are scaling now that agents hold standing access to repositories, CI systems, and cloud. Standing agent access increasingly warrants its own inventory and minimization, separate from traditional code-review and secret-rotation controls.
- **Patch velocity outpaces attacker patience, but only marginally.** The same day's queue — **CVE-2026-19598 (Pods, CVSS 9.8)** from Wednesday, WordPress Click2Shell forcing theme installation, Cisco API endpoint flaws, and Boko Haram actors using ChatGPT and Grok — reflects the disclosure surge that AI-assisted review is accelerating. Yet CISA's analysis of 2024–2025 data found the number of vulnerabilities **actually exploited grew only marginally** even as disclosures soared.

🔗 **Reference:** ([Reuters](https://www.reuters.com/business/anthropic-says-claude-now-leads-quarter-work-building-its-next-ai-models-2026-09-17), [Wall Street Journal](https://www.wsj.com/tech/ai/hackers-used-anthropics-claude-to-break-into-openai-b40ba883), [The Guardian](https://www.theguardian.com/technology/2026/sep/18/openai-hacked-anthropic-claude-chatbot), [VentureBeat](https://venturebeat.com/security/openai-hacked-by-small-team-of-white-hat-security-researchers-using-anthropics-claude-opus-5), [Anthropic](https://www.anthropic.com/institute/measuring-pace-of-ai-development))

---

## Active Threats This Week

📌 **Transparent Tribe Deploys Rust Backdoor Using Private GitHub Repositories for Command-and-Control**

**Transparent Tribe**, a Pakistan-linked APT group targeting Indian government and defense entities, has begun deploying a **modular Rust backdoor** that **uses private GitHub repositories as its command-and-control (C2) channel** instead of traditional infrastructure. This technique isolates the C2 traffic within GitHub's infrastructure, making detection via network perimeter monitoring difficult. The backdoor is delivered via spear-phishing attachments, establishes persistence, and communicates with the threat actor via custom GitHub API calls to exfiltrate data and receive commands. The shift to GitHub C2 reflects a broader trend of APTs using legitimate cloud services to hide malicious traffic.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/transparent-tribe-deploys-new-rust.html)

📌 **WordPress Click2Shell Flaw Forces Theme Installation, Can Chain to Code Execution**

A **critical flaw in a WordPress security plugin** allows attackers to **force installation of arbitrary WordPress themes** with no user action, which can then chain to **remote code execution** depending on the theme's contents. The vulnerability is **unauthenticated and remotely exploitable**, and affects sites with certain automatic-update configurations. Wordfence released a signature this week; site operators should review their active theme list and ensure unintended themes have been removed.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/new-wordpress-click2shell-flaw-forces.html)

📌 **Cisco Zero-Day Highlights API Endpoint Authentication Issues as Firms Rush Patch Velocity**

**Cisco** disclosed a **zero-day vulnerability in its API endpoints** affecting several products, stemming from **inconsistent authentication enforcement** — a flaw similar in pattern to the **WPMU DEV Dashboard HMAC bypass (CVE-2026-76581)** disclosed earlier this week. The issue underscores how modern cloud and API-first architectures face recurring authentication-redesign vulnerabilities as developers scale endpoints without centralizing identity gates.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/cisco-zero-day-api-endpoint-authentication-issues)

📌 **Boko Haram Fighters Leveraged ChatGPT, Gemini, and Grok for Weapons and Tactical Planning—Cambridge Study**

A **University of Cambridge research** team found that **members of Boko Haram and affiliated jihadist groups** had used **ChatGPT, Google Gemini, and xAI's Grok** to research weapons, plan attacks, and refine operational security practices. Researchers recovered chat logs showing queries for explosive construction, drone assembly, and counter-surveillance techniques. The findings highlight that **large foundation models are now integral to threat-actor workflows** — lowering barriers to entry for non-state actors and enabling smaller groups to scale operations. Major model vendors have since updated usage policies to restrict such access, but enforcement relies on user-reported abuse and post-hoc monitoring.

🔗 **Reference:** [SCMP](https://www.scmp.com/news/us/article/3360585/boko-haram-exploited-us-and-chinese-ai-chatbots-attacks-cambridge-study-finds)

📌 **MFA Won't Save You From OAuth Consent Abuse**

Security researchers detailed a class of attacks where attackers **bypass multi-factor authentication (MFA) by exploiting OAuth consent flows** — users grant broad permissions to third-party applications thinking they're logging in securely, but the application gains persistent access to email, cloud storage, and other resources. The attack is particularly effective against organizational SSO where MFA is at the identity provider, not the service-provider. Enterprises should review OAuth app permissions regularly and enforce scope minimization.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/mfa-oauth-consent-abuse)

📌 **EY Survey Finds Autonomous AI Implementation Outpaces Oversight and Governance**

**Ernst & Young** surveyed enterprise AI adoption and found that **deployment of autonomous AI agents is accelerating far faster than governance frameworks**. Only **~30% of surveyed firms reported having formal policies** for AI agent monitoring, decision logging, or containment — a gap Anthropic's own data (26% of work led by AI, minimal blocking) reflects. The survey recommends adopting agent-specific controls: capability boundaries, request logging, sandboxing, and escalation workflows for high-stakes decisions.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/ey-survey-autonomous-ai-implementation-outpaces-oversight)

📌 **Vectra AI Launches Ascent Platform to Counter AI-Driven Attacks**

**Vectra AI** released **Ascent**, a security operations platform designed specifically to detect and respond to attacks **carried out or assisted by AI agents and LLMs** — including adversarial prompt injection, data exfiltration via model outputs, and anomalous agent behavior. The platform integrates with existing SIEM systems and includes pre-built detections for generative-AI-specific attack patterns.

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/vectra-ai-launches-ascent-new-era-ai-driven-attacks)

---

## How Can OPSWAT Help

Today's attack surface spans **files users trust and AI agents users authorize**. Hacktron's breach chain began with **malicious HEIC/HEIF images uploaded to OpenAI's forum** and was developed using AI coding assistants; **Boko Haram actors leverage generative AI** for operational planning; **WordPress Click2Shell forces theme installation** and chains to RCE; and **GitHub repositories now host adversary C2 channels**. **MetaDefender Multi-Scan** layers **30+ anti-malware engines** over images, plugins, and installers entering via email, web, and file-share; **MetaDefender CDR** rebuilds malformed media and archives, stripping active content and parser-exploiting structures; **MetaDefender Kiosk** screens files at **removable media and OT boundaries**, catching both known malware and anomalous behaviors — critical when AI assistants are drafting code and security teams are racing to patch at scale.
