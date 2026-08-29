---
title: "CISO Daily Digest: xAI Sued Over Grok Training on Child Abuse Material — Class Action Mounts (20260829)"
description: "xAI faces a mounting class-action lawsuit accusing Grok of being trained on child sexual abuse material (CSAM), with former abuse survivors alleging their images were used to build deepfake capabilities. Separately, Anthropic won a federal ruling (Judge Rita Lin, N.D. Cal.) vacating the Trump administration's blacklisting, and researchers demonstrated Claude Code's Auto Mode being hijacked via prompt injection to run malware. Plus active exploitation of PaperCut and Cosmos EVM flaws, and 19 wallet-stealing browser extensions."
pubDate: 2026-08-29
tags: [xAI, Grok, CSAM, Anthropic, Claude, AI-Safety, Prompt-Injection, PaperCut, Cosmos, Supply-Chain, Ransomware, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## Executive Summary

- **xAI / Grok CSAM class action:** A class-action lawsuit accuses Elon Musk's xAI of training Grok on child sexual abuse material; former abuse survivors say their images and videos were used to build Grok's deepfake capabilities (CyberScoop, POLITICO).
- **Anthropic blacklisting ruled illegal:** U.S. District Judge Rita Lin (N.D. Cal.) vacated Trump-administration directives barring federal agencies and defense contractors from using Anthropic's Claude, finding unlawful First Amendment retaliation.
- **Claude Code Auto Mode hijacked:** Security researchers showed Claude Code's "Auto Mode" can be taken over via indirect prompt injection to execute malicious code on a victim's machine.
- **Active exploitation:** Attackers are chaining two **PaperCut** flaws for unauthenticated code execution, and a **Cosmos EVM** flaw was exploited after Cosmos Labs knew every chain running it was vulnerable.
- **Browser-extension theft:** 19 Chrome and Edge extensions were found carrying wallet-stealing and crypto-draining code.

## xAI Sued Over Grok Training on Child Abuse Material — Class Action Mounts

A class-action complaint now accuses xAI of training its **Grok** models on child sexual abuse material (CSAM). According to CyberScoop, the suit is brought by **former sexual abuse survivors** who allege that their images and videos were scraped and used to build Grok's deepfake-generation capabilities. POLITICO reports that victim lawsuits over Grok deepfakes are mounting even as xAI separately sues some of its own users. SC Media frames it as a class action accusing xAI of training Grok on child abuse material.

The legal exposure is twofold: (1) the use of CSAM in training data, which carries criminal as well as civil liability, and (2) the downstream harm to identified survivors whose likenesses were weaponized for deepfake output. For enterprises evaluating or already deploying Grok-based tooling, the story is a due-diligence flashpoint — model provenance, training-data lineage, and vendor legal risk are now board-level questions, not procurement footnotes.

### Why This Reshapes AI Governance and Vendor Risk

The Grok case lands beside the Anthropic ruling (below) to sharpen a single theme for CISOs: **AI vendor risk is no longer just about model capability — it is about legal and reputational contagion from how a model was built.** A vendor whose training pipeline is under federal or class-action scrutiny can pull your own compliance posture, customer trust, and regulatory exposure down with it. Procurement teams that once asked only "does it work?" must now ask "can this vendor survive its own litigation?"

🔗 **Reference:** Coverage from ([CyberScoop](https://cyberscoop.com/xai-grok-csam-class-action-lawsuit/), [POLITICO](https://www.politico.com/news/2026/08/28/elon-musk-xai-lawsuits-grok-deepfakes-01053817))

---

## OPSWAT Can Help

AI coding agents (Claude Code, Codex, and others) increasingly pull untrusted packages, scripts, and binaries from the open internet and execute them inside corporate networks — the same file-borne delivery path that traditional malware has always used. OPSWAT **MetaDefender Multi-Scan** runs every downloaded artifact through 30+ engines before execution, and **Deep CDR (Content Disarm & Reconstruction)** strips active content from documents and installers agents may ingest. For environments where agents run with elevated privileges, treat agent-fetched files as untrusted input and enforce multi-scan + CDR at the network ingress point.

---

## Active Threats This Week

📌 **Anthropic blacklisting struck down — but the appeal isn't over.** U.S. District Judge Rita Lin (N.D. Cal.) granted key portions of Anthropic's summary-judgment motion and **vacated** the Trump administration's directives that barred all federal agencies from using Claude and **banned defense contractors** from any business with Anthropic. Lin found the actions were "unlawful retaliation in violation of the First Amendment," triggered after Anthropic refused to drop restrictions on using its models for lethal autonomous warfare and mass surveillance of Americans. The DC Circuit appeal is still pending. *(Demoted from lead — this event led the 20260828 digest; today is day-2 re-circulation of the same ruling.)*

🔗 **Reference:** [Ars Technica](https://arstechnica.com/tech-policy/2026/08/trump-blacklisting-of-woke-anthropic-deemed-illegal-by-federal-judge/)

📌 **Claude Code Auto Mode hijacked via prompt injection.** Researchers demonstrated that Claude Code's "Auto Mode" — which autonomously runs commands — can be taken over through indirect prompt injection to execute malicious code. Cybernews reports the exploit shows "AI agent risk" when agents act on untrusted instructions; CybersecurityNews documents Opus 5 Auto Mode being hijacked via prompt injection to run attacker-controlled code. The risk generalizes to any autonomous coding agent granted shell or filesystem access.

🔗 **Reference:** ([Cybernews](https://cybernews.com/security/claude-code-auto-mode-malware-vulnerability/), [CybersecurityNews](https://cybersecuritynews.com/claude-code-opus-5-auto-mode-hijacked/))

📌 **PaperCut flaw chain enables unauthenticated code execution.** Attackers are chaining **two PaperCut flaws** to execute code without authentication, according to The Hacker News. PaperCut is widely deployed print-management software sitting on internal networks, making unauthenticated RCE a high-impact lateral-movement vector.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/attackers-chain-two-papercut-flaws-to.html)

📌 **Cosmos EVM flaw exploited after vendor knew chains were vulnerable.** A Cosmos EVM vulnerability was exploited after Cosmos Labs knew "every blockchain running it was vulnerable," The Hacker News reports. The case is a textbook example of coordinated disclosure failure in cross-chain infrastructure.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/cosmos-evm-flaw-exploited-after-cosmos.html)

📌 **19 Chrome and Edge extensions carry wallet-stealing, crypto-draining code.** The Hacker News found 19 browser extensions — spanning Chrome and Edge — embedding wallet-stealing and crypto-draining payloads, continuing the trend of malicious extensions targeting Web3 users through official storefronts.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/19-chrome-and-edge-extensions-found.html)

📌 **Berlin refuses to pay hackers who stole state-network data.** Berlin has declined to pay ransom to attackers who stole data from the city's state network, The Hacker News reports — a stance that pressures incident-response and public-disclosure planning for government entities.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/berlin-refuses-to-pay-hackers-who-stole.html)

---

## Vendor Risk Matrix

| Vendor / Asset | Exposure | Severity | CISO Action |
|---|---|---|---|
| **xAI (Grok)** | CSAM-training class action; legal/reputational contagion | High | Re-assess Grok-based tooling; require training-data provenance attestation |
| **Anthropic (Claude)** | Federal blacklist vacated; DC Circuit appeal pending | Medium | Monitor appeal; document procurement fallback if ruling reverses |
| **Claude Code / AI agents** | Prompt-injection → malicious code execution | High | Restrict agent shell/filesystem scope; scan agent-fetched files |
| **PaperCut** | Unauthenticated RCE via flaw chain | Critical | Patch immediately; segment print-management hosts |
| **Cosmos EVM chains** | Exploited EVM vulnerability | High | Verify chain patch level; monitor cross-chain bridges |
| **Browser extensions (Chrome/Edge)** | 19 stealing/draining extensions | Medium | Enforce extension allow-listing; block Web3 wallet extensions by default |

## Board Talking Points

- **AI vendor risk is now legal risk.** xAI's CSAM class action and Anthropic's federal-court win show that a model vendor's litigation can become *your* compliance and reputational problem.
- **Autonomous agents are a new attack surface.** Claude Code's Auto Mode being hijacked proves that prompt injection now reaches the shell — governance for AI agents is a security mandate, not a productivity nicety.
- **Unpatched print and chain infrastructure remains prime exploit turf.** PaperCut and Cosmos EVM exploitation are reminders that "boring" internal software is still a top breach vector.

## Start Here — Action Checklist

- [ ] **Inventory AI vendors** in use (Grok, Claude, and any agent tooling) and capture each vendor's current legal/regulatory exposure.
- [ ] **Constrain AI-agent privileges** — limit Claude Code / Codex / similar agents to least-privilege shell and filesystem scopes; never grant broad network egress.
- [ ] **Patch PaperCut** to the fixed build and place print-management servers behind network segmentation.
- [ ] **Confirm Cosmos EVM chain** patch levels if your org touches any Cosmos-based infrastructure or bridges.
- [ ] **Enforce browser-extension allow-listing** and block unvetted Web3 wallet extensions on managed endpoints.
