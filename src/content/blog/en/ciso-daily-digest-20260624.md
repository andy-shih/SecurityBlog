---
title: "CISO Daily Digest: Anthropic Launches Claude Tag as Always-On Slack AI Coworker (20260624)"
description: "Anthropic launches Claude Tag, embedding Claude as an always-on AI agent in Slack channels with task assignment capabilities; Klue supply chain attack expands to 10+ security firms as ShinyHunters claims responsibility; libssh2 critical RCE vulnerability (CVE-2026-55200) disclosed; Cordyceps CI/CD flaws expose 300+ GitHub repos; Cisco Unified CM flaw actively exploited after PoC publication."
pubDate: 2026-06-24
tags: [anthropic, claude-tag, slack, ai-governance, supply-chain, klue, salesforce, vulnerability, libssh2, cisco, cordyceps, fortibleed, fable-5, wordpress, ciso-daily-digest]
author: "Security Solutions Team"
featured: true
---

## Anthropic Launches Claude Tag — Claude Becomes an Always-On Slack AI Coworker

Anthropic today launched **Claude Tag**, a new integration that embeds Claude directly into Slack channels as an always-present AI teammate. Unlike conventional chatbots that require explicit invocation, Claude Tag sits persistently in designated channels, monitoring conversations, answering questions, and accepting @-mentioned tasks. Anthropic reports that in early deployments, Claude already writes **65% of internal communications** in some organizations.

The launch represents a strategic pivot for Anthropic: positioning Claude not as a tool to be queried, but as a **persistent team member with an independent identity**. Claude Tag can be assigned tasks, follow thread discussions, and generate responses autonomously across channels. It is available in research preview for Team and Enterprise Slack plans.

**Security implications are significant.** Placing an always-on AI agent inside enterprise communication channels — where sensitive financial data, HR discussions, product roadmaps, and security incidents are discussed — introduces new vectors for data exposure. Claude's **independent identity model** means it can access, process, and potentially retain information across channels. Organizations deploying Claude Tag must carefully review data retention policies, access controls, and the scope of channels the agent monitors.

Anthropic has simultaneously updated its privacy policy to allow Claude to request **government ID and face scans** for identity verification, raising additional privacy considerations for enterprise deployments.

🔗 **Reference:** Coverage from ([Reuters](https://www.reuters.com/technology/anthropic-launches-claude-tag-research-preview-slack-users-2026-06-23/), [The New Stack](https://thenewstack.io/anthropic-claude-tag-slack/), [Help Net Security](https://www.helpnetsecurity.com/2026/06/24/anthropic-claude-tag-agent-identity-model/))

### Why This Reshapes Enterprise AI Governance

Claude Tag represents the first major deployment of a **persistent, agentic AI coworker** inside a mainstream enterprise collaboration platform. Unlike previous AI assistants that respond when summoned, Claude Tag's always-listening model fundamentally changes the risk profile. **Data lineage becomes ambiguous** — which channel conversations did Claude process? What context was retained? How are cross-channel inferences made?

The integration also signals that **Slack is becoming a primary AI agent interface**, a development that security teams must prepare for. Organizations should audit which channels Claude Tag has access to, establish data retention policies for AI-processed conversations, and ensure that sensitive channels (legal, HR, M&A) are excluded from AI monitoring.

🔗 **Reference:** Coverage from ([Reuters](https://www.reuters.com/technology/anthropic-launches-claude-tag-research-preview-slack-users-2026-06-23/), [The New Stack](https://thenewstack.io/anthropic-claude-tag-slack/), [Help Net Security](https://www.helpnetsecurity.com/2026/06/24/anthropic-claude-tag-agent-identity-model/), [iThome](https://www.ithome.com.tw/news/176837))

---

## Active Threats This Week

📌 **Klue Supply Chain Attack Expands — 10+ Security Firms Affected**

The Klue Battlecards supply chain attack continues to escalate. Salesforce confirmed that Klue's integration service was compromised, allowing attackers to exfiltrate customer Salesforce data. The breach now affects **10+ security companies**, including Huntress and LastPass, whose customer support and contact data were exposed. **ShinyHunters** has claimed responsibility, while the **Icarus** group is also reportedly involved. ReliaQuest's forensic analysis shows attackers queried victim Salesforce data in **15-minute bursts** during the compromise.

🔗 **Reference:** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/scope-salesforce-attacks-expands-icarus-leaks) | [iThome](https://www.ithome.com.tw/news/176833) | [iThome](https://www.ithome.com.tw/news/176827) | [iThome](https://www.ithome.com.tw/news/176822)

📌 **libssh2 Critical RCE (CVE-2026-55200) — Crafted SSH Packets Enable Code Execution**

A critical vulnerability in the **libssh2** library, tracked as **CVE-2026-55200**, allows attackers to execute arbitrary code by sending specially crafted SSH packets. libssh2 is widely embedded in applications, SDKs, and operating systems that implement SSH connections. Organizations using libssh2-linked software should prioritize patching.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176834)

📌 **Cordyceps CI/CD Flaws Expose 300+ GitHub Repositories to Supply-Chain Attacks**

Researchers disclosed vulnerabilities in the **Cordyceps** CI/CD framework that expose over **300 GitHub repositories** to supply-chain attacks. The flaws allow attackers to inject malicious code into CI/CD pipelines, potentially compromising downstream consumers of affected projects.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html)

📌 **Cisco Unified CM Flaw Actively Exploited After PoC Publication**

A vulnerability in **Cisco Unified Communications Manager** (Unified CM) is being actively exploited following the public release of a proof-of-concept that demonstrates a file-write-to-root escalation path. Organizations running Cisco Unified CM should verify patch status immediately.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/cisco-unified-cm-flaw-exploited-after.html)

📌 **FortiBleed Technical Details Emerge — Attackers Weaponize FortigateSniffer**

New technical analysis reveals that attackers in the **FortiBleed** incident exploited **FortigateSniffer** functionality to capture plaintext credentials from FortiGate VPN appliances. Over **70,000 devices** had credentials exposed, with researchers now detailing the exact exploitation methodology. The attackers used sniffed credentials for lateral movement into victim networks.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176813)

📌 **ShapedPlugin WordPress Supply Chain Attack — 400,000+ Downloads at Risk**

Attackers compromised multiple **ShapedPlugin WordPress plugins**, injecting backdoors into paid/pro versions distributed through official channels. Over **400,000** download users are potentially affected. The compromised plugins (CVE-2026-10735) grant attackers administrative access to WordPress sites.

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176830)

📌 **FFmpeg PixelSmash RCE (CVE-2026-xxxxx) — Arbitrary Code via Crafted Media Files**

A remote code execution vulnerability named **PixelSmash** was disclosed in FFmpeg, the widely used multimedia processing library. Attackers can trigger code execution by feeding crafted media files through FFmpeg's processing pipeline. FFmpeg is embedded in countless applications, media servers, and content processing workflows.

🔗 **Reference:** [Xakep](https://xakep.ru/2026/06/24/pixelsmash/)

---

## How Can OPSWAT Help

The Klue supply chain attack and ShapedPlugin WordPress compromise underscore the critical need for **file-level threat prevention**. Both incidents involved the delivery of malicious packages and code through trusted software supply chains — exactly where OPSWAT's **MetaDefender multi-scanning (30+ AV engines)** and **Deep Content Disarm and Reconstruction (CDR)** provide defense.

For organizations deploying Claude Tag or any AI agent in Slack, OPSWAT's file security solutions can inspect files transmitted through AI channels before they reach endpoints, preventing malware delivery via AI-mediated workflows. The libssh2 and FFmpeg vulnerabilities further highlight the importance of **software composition analysis** to identify embedded third-party library risks across the application portfolio.

