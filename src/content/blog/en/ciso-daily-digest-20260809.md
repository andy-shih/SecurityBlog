---
title: "CISO Daily Digest: Anthropic Makes Auto Mode Default in Claude Code to Curb Dangerous Approvals (20260809)"
description: "Anthropic will make Auto Mode the default in Claude Code from August 14 for Pro, Max, and Team plans: a classifier caught 89% of dangerous commands versus 13.6% for human reviewers, and Trajectory Labs' 720 prompt-injection attempts against Fable 5, Opus 5, and Sonnet 5 all failed, while 5.83% got through OpenAI's GPT-5.6 Sol in Codex Auto-Review mode. Claude Code sessions on macOS and Linux can now message each other, routing cross-machine traffic through Anthropic servers. In the US, Minnesota's first-in-nation AI nudification ban (H.F. 1606) took effect August 1 with penalties up to $500,000 per violation after a federal judge rejected xAI's bid to pause it."
pubDate: 2026-08-09
tags: [CISO, Daily Digest, Anthropic, Claude Code, Auto Mode, AI Security, Prompt Injection, AI Governance, Minnesota, xAI]
author: "Security Solutions Team"
featured: true
---

## Anthropic Makes Auto Mode the Default in Claude Code

**Anthropic** announced that starting **August 14**, **Claude Code** will ship with **Auto Mode enabled by default** for **Pro, Max, and Team** plans. Auto Mode lets the AI coding agent work autonomously without waiting for manual approval at every step; a **classifier** checks whether an action is dangerous or irreversible and only requests confirmation in those cases.

In a controlled study with **1,053 paid testers** plus internal red-teaming, Auto Mode performed at least as safely as manual approvals, and often better: human reviewers caught only **13.6 percent of dangerous commands**, while Auto Mode caught **89 percent**. Teams using Auto Mode also generated about **25 percent more pull requests**. Anthropic says the classifier adds a layer of protection against **prompt injection attacks**, where injected code tries to hijack the agent away from the user's instructions. An independent audit by **Trajectory Labs** tested **72 attack scenarios ten times each** — **none of the 720 attempts succeeded** against Claude's current models (**Fable 5, Opus 5, Sonnet 5**) in Auto Mode; for comparison, **5.83 percent** of attacks got through OpenAI's **GPT-5.6 Sol** in Codex Auto-Review mode. Internally, Auto Mode stopped Claude from uploading confidential data to a public page and killed roughly **2,000 processes** that would have disrupted ongoing GPU training jobs. Anthropic does not charge for the tokens the classifier itself consumes, but notes the change shifts developers from writing code toward reviewing AI-generated output — for high-stakes changes to production infrastructure, Anthropic still recommends reviewing Claude's actions manually.

### Why This Reshapes AI Agent Permission Governance

The change moves the approval gate from human judgement to a **vendor-run classifier**, and the benchmark data reframes the security debate: approval fatigue is a real failure mode, and automated risk classification can outperform tired reviewers on dangerous-command detection. For organizations standardizing on AI coding agents, the default behavior of the tool now determines how much autonomous action can occur before a human sees it — the **prompt-injection resistance** claims (0/720 across three model versions) also shift expectations for what agentic tools must withstand. The **25 percent productivity gain** attached to fewer approval interruptions creates pressure to adopt Auto Mode broadly, while the explicit carve-out for production infrastructure review keeps a human check on the highest-stakes actions. This is a template for how agent vendors will resolve the tension between autonomy and safety: classifier-gated action, published evasion-test results, and defaults that lean autonomous.

🔗 **Reference:** [The Decoder](https://the-decoder.com/anthropic-sets-claude-code-to-auto-mode-by-default-to-protect-developers-from-bad-approvals/)

---

## Active Threats This Week

📌 **Claude Code sessions can now message each other and share context across terminals**
**Claude Code** sessions on **macOS and Linux** can send text summaries to each other — asking another session a question, coordinating parallel workflows, or checking status on long-running tasks. On the same machine, communication happens **locally**; between different computers it **routes through Anthropic's servers**, and only responses are possible in that case. **Admins can lock the feature down via settings**, and it is not available on Amazon Bedrock, Google Cloud Agent Platform, or Microsoft Foundry. For security teams, cross-session messaging is a new data-flow surface: context (including code and potentially secrets) can now move between terminals and, across machines, through Anthropic's infrastructure — worth mapping before rollout.
🔗 **Reference:** [The Decoder](https://the-decoder.com/claude-code-sessions-can-now-talk-to-each-other-and-share-context-across-terminals/)

📌 **Minnesota's first-in-nation AI 'nudification' ban takes effect as xAI's legal challenge proceeds**
Minnesota's **H.F. 1606**, the first U.S. state law banning AI **"nudification"** tools, took effect **August 1**. The statute prohibits anyone who owns or controls a website, app, or software from allowing users to "nudify" images or generate such alterations, and bars advertising or promoting such services — with **civil penalties up to $500,000 per unlawful access, download, or use**, enforceable by the state attorney general, plus a private right of action. U.S. District Judge **Donovan W. Frank** on **July 31** denied **xAI's** emergency motion for a temporary restraining order, noting xAI filed "nearly three months after the law was signed, and only three days before the law is set to take effect"; a hearing on a preliminary injunction is set for **August 19**. The case marks the first time a state AI-content restriction has survived an emergency challenge from a major AI vendor.
🔗 **Reference:** [Mashable](https://mashable.com/tech/judge-rejects-xai-request-to-pause-nudification-ban)

---
