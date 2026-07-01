---
title: "CISO Daily Digest: Fable 5 Restored, Claude Sonnet 5 & Science, California AI Deal (20260701)"
description: "Anthropic restores Claude Fable 5 as US lifts export controls on July 1; launches Claude Sonnet 5 with near-Opus performance; debuts Claude Science for drug research; California signs first-of-its-kind government AI partnership. Active threats: Adobe patches 7 CVSS 10.0 ColdFusion flaws; GuardFall exposes AI coding agent shell injection risks; macOS EDR-killer attack chain disclosed; Aflac Japan breach (4.38M users); PChome Pi wallet Settra ransomware breach; Chrome 150 fixes 382 vulns; Azure CLI password spray hits 78 accounts; Blackfield ransomware targets Nidec ($2M)."
pubDate: 2026-07-01
tags: [CISO, daily-digest, cybersecurity, threat-intel, Anthropic, Fable-5, Claude-Sonnet-5, Claude-Science, California, vulnerability, ransomware]
author: "Security Solutions Team"
featured: true
---

## Anthropic's Landmark Day: Fable 5 Restored, Sonnet 5, Science Platform & California Deal

July 1, 2026 marks one of the most consequential days in Anthropic's history. The company simultaneously restored Claude Fable 5 after the US lifted export controls, launched Claude Sonnet 5 as its new flagship model, debuted Claude Science for pharmaceutical research, and announced California as the launch partner for government AI deployment.

**Fable 5 Restoration:** The Trump administration lifted export controls on both Claude Fable 5 and Claude Mythos 5 after Anthropic implemented new security safeguards. Fable 5 was restored globally on July 1 with a single unified filter that blocks the prompt injection vector that led to its March 2026 shutdown. Mythos 5 remains limited to trusted Glasswing project partners. The administration cited Anthropic's cooperation with government security reviews as the basis for lifting restrictions ([iThome](https://www.ithome.com.tw/news/177013), [THN](https://thehackernews.com/2026/07/anthropic-restores-claude-fable-5-after.html), [iThome Export](https://www.ithome.com.tw/news/176921)).

**Claude Sonnet 5:** Anthropic's new model delivers near-Opus 4.8 performance on agentic coding benchmarks at a fraction of the price, becoming the default model for free and Pro users. The system card emphasizes improvements in prompt injection defense, hallucination reduction, and agentic task completion ([iThome](https://www.ithome.com.tw/news/177002)).

**Claude Science:** A dedicated AI workbench for scientific research, integrating literature search, data analysis, charting, and HPC workflow management. Anthropic simultaneously announced its own drug discovery program, joining tech giants in betting on AI-driven pharmaceutical R&D ([iThome](https://www.ithome.com.tw/news/177018)).

**California-Anthropic Partnership:** Governor Newsom signed a first-of-its-kind agreement providing discounted Claude access to all California state agencies ([CA.gov](https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/)).

### Why This Reshapes AI Governance

The simultaneous restoration of Fable 5, launch of Sonnet 5 and Claude Science, and the California government deal signal a decisive shift from AI safety debates toward large-scale operational deployment. For CISO organizations, the implications span vendor risk management for frontier models in government-adjacent environments, the emergence of AI-agent-specific threat surfaces, and the normalization of government-approved model access as a regulatory framework.

---

## Active Threats This Week

📌 **Adobe Patches 7 Maximum-Severity ColdFusion Flaws (CVSS 10.0)** — Adobe released patches for 7 CVSS 10.0 vulnerabilities in ColdFusion and Campaign Classic, including unrestricted file upload, improper input validation, and path traversal flaws leading to arbitrary code execution ([THN](https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html)).

📌 **GuardFall: AI Coding Agent Shell Injection** — Researchers disclosed a class of vulnerabilities affecting open-source AI coding agents (Claude Code, Copilot, Cursor). Decades-old shell injection patterns resurface in AI agent toolchains: commands parsed from model output without sanitization can be tricked into executing arbitrary code ([THN](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html)).

📌 **macOS EDR/MDM Killer Attack Chain** — XM Cyber disclosed a macOS privilege escalation chain allowing attackers without admin rights to abuse XPC trust validation, impersonate legitimate components, and disable EDR and MDM agents ([iThome](https://www.ithome.com.tw/news/176996)).

📌 **Aflac Japan Data Breach — 4.38M Users Affected** — Aflac disclosed to the SEC that its Japan subsidiary suffered a system intrusion (June 15-25), potentially exposing data for approximately 4.38 million policyholders ([iThome](https://www.ithome.com.tw/news/177004)).

📌 **PChome Pi Wallet Breach (Settra Ransomware)** — Taiwanese e-payment platform Pi Wallet was hit by the Settra ransomware group, which claims to have exfiltrated 102 GB of data including 3.5 million user records ([iThome](https://www.ithome.com.tw/news/177011)).

📌 **Blackfield Ransomware Targets Nidec — $2M Demand** — Blackfield claimed responsibility for attacking Nidec Chaun-Choung Technology, stealing over 2 TB of internal data and demanding a $2 million ransom ([iThome](https://www.ithome.com.tw/news/177009)).

📌 **Chrome 150 — 382 Vulnerabilities Fixed, 15 Critical** — Google's Chrome 150 stable release patches 382 security issues including 15 rated critical ([iThome](https://www.ithome.com.tw/news/177003)).

📌 **Azure CLI Password Spray — 78 Accounts Targeted** — A sustained password spray campaign targeting Azure CLI authentication hit at least 78 Microsoft accounts with over 81 million authentication attempts ([THN](https://thehackernews.com/2026/07/azure-cli-password-spray-hits-at-least.html)).

🔗 **Reference:** Coverage from ([THN Adobe](https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html), [THN GuardFall](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html), [iThome macOS](https://www.ithome.com.tw/news/176996), [iThome Aflac](https://www.ithome.com.tw/news/177004), [iThome PChome](https://www.ithome.com.tw/news/177011), [iThome Blackfield](https://www.ithome.com.tw/news/177009), [iThome Chrome](https://www.ithome.com.tw/news/177003), [THN Azure](https://thehackernews.com/2026/07/azure-cli-password-spray-hits-at-least.html))

---

## How Can OPSWAT Help

The GuardFall AI coding agent vulnerabilities and poisoned MCP tool descriptions highlight the growing threat surface at the intersection of AI and file-borne attacks. OPSWAT MetaDefender's multi-scanning (30+ anti-malware engines) and Deep Content Disarm and Reconstruction (CDR) can inspect packages, extensions, and model artifacts before they reach AI agent runtimes.

🔗 **Reference:** Coverage from ([THN GuardFall](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html), [THN MCP](https://thehackernews.com/2026/06/microsoft-warns-poisoned-mcp-tool.html))
