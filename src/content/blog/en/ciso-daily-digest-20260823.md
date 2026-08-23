---
title: "CISO Daily Digest: Anthropic's $65B Run-Rate Spurs $2T IPO and In-House Silicon (20260823)"
description: "Anthropic's annualized revenue run-rate hit $65B at end of July (up from $47B in May), positioning a potential $2T IPO; the Claude maker hired ex-Google TPU chief Amir Salek to build in-house silicon, and a ChinaTalk analysis reveals China's 'transfer station' gray market reselling Claude tokens at ~10% of list price while harvesting prompts and code via offshore proxies."
pubDate: 2026-08-23
tags: [CISO, Daily Digest, Anthropic, AI Supply Chain, Claude, IPO, Silicon, Gray Market]
author: "Security Solutions Team"
featured: true
---

## Anthropic's $65B Run-Rate Spurs $2T IPO and In-House Silicon

Bloomberg (reported via TechCrunch, Aug 17) says Anthropic's annualized revenue run-rate surpassed **$65 billion** at the end of July, up from **$47 billion** in May and just **$9 billion** at the end of 2025 — a trajectory that positions the Claude maker to file what could be a **$2 trillion** IPO as soon as this month on roughly **$65B ARR**.

To lock in compute, Anthropic has hired **Amir Salek**, the former Google executive who led seven generations of Tensor Processing Unit (TPU) development, to stand up an in-house silicon division reporting to compute lead James Bradbury (Bloomberg via Yahoo Finance, Aug 22). The lab also committed an initial **$250 million** to UK chip firm Fractile and secured capacity deals with Riot Platforms and Volta Infra Holdings. The move mirrors OpenAI's co-development of its custom "Jalapeno" chip with Broadcom, as frontier labs race to reduce dependence on Nvidia, Amazon, and Google supply.

### Why This Reshapes AI Supply-Chain Governance

- Compute is now the binding constraint on frontier AI, and the concentration of that compute — across Nvidia, a handful of hyperscalers, and now in-house fabs — is a single point of failure for the security tooling CISOs increasingly depend on.
- A **$2T** public-market valuation sharply raises the nation-state incentive to steal model weights, distillation data, and Claude access (see the gray-market threat below), concentrating the defensive perimeter of Western AI on one balance sheet.
- For CISOs buying Claude-powered security products, the implication is vendor continuity risk: a hardware-constrained lab centered on a single dominant model family is exposed to both supply shocks and targeted espionage.

🔗 **Reference:** Coverage from ([TechCrunch](https://techcrunch.com/2026/08/17/anthropics-annualized-revenue-surges-to-65b/), [Yahoo Finance / Bloomberg](https://finance.yahoo.com/technology/ai/articles/anthropic-hires-ex-google-chip-211528852.html))

---

## Active Threats This Week

📌 **Anthropic hires ex-Google TPU chief Amir Salek to build in-house chips**
The Claude maker recruited the executive who delivered seven TPU generations, reporting directly to compute lead James Bradbury, as part of a push to design proprietary silicon and cut reliance on Nvidia, Amazon, and Google. The lab also committed **$250M** to UK chip firm Fractile and struck capacity deals with Riot Platforms and Volta Infra. The shift tightens the link between frontier-model availability and a fragile, concentrated hardware supply chain — a continuity risk for every security product built on Claude.
🔗 **Reference:** [Yahoo Finance / Bloomberg](https://finance.yahoo.com/technology/ai/articles/anthropic-hires-ex-google-chip-211528852.html)

📌 **China's gray market resells Claude tokens at ~10% of price via "transfer stations"**
A ChinaTalk analysis by Oxford researcher Zilan Qian (via The Decoder, Aug 23) details a modular supply chain — account brokers, SMS-verification platforms, and AI-generated fake IDs and deepfake biometrics that defeat Anthropic's selfie KYC — that routes Claude API traffic through offshore proxy "transfer stations." Chinese developers buy tokens for roughly **10%** of list price; operators "dilute" by rerouting Opus requests to cheaper Sonnet or Qwen (one "Gemini-2.5" endpoint scored **37%** vs the official **83.82%** on a medical benchmark). The real margin may be in harvesting prompts, source code, and tool-call logs from every proxied request — a data-exfiltration vector that also weakens Anthropic's Clio abuse-monitoring across proxy accounts.
🔗 **Reference:** [The Decoder](https://the-decoder.com/how-chinas-gray-market-sells-claude-tokens-at-a-fraction-of-the-price/)
