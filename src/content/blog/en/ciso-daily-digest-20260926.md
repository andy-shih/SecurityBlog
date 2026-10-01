---
title: "CISO Daily Digest: GitHub Actions Malware Revival — Mini Shai-Hulud Re-Executes Across Supply Chains After Surprise Repository Re-enablement (20260926)"
description: "Compromised GitHub Actions repositories unexpectedly restored by GitHub staff on September 16 resumed executing Mini Shai-Hulud credential-harvesting malware — affecting CI/CD pipelines that still reference vulnerable version tags. Also this week: OnePlus root-privilege escalation flaws in OxygenOS 16 (no patch yet), Meta's Muse AI assistant vulnerability allowing token theft and cross-device hijacking, Elementor WordPress CSRF enables site takeover via admin link-click, and a U.S. soldier sentenced to 70 months for extorting AT&T and Verizon through Snowflake intrusion."
pubDate: 2026-09-26
tags: [GitHub-Actions, Mini-Shai-Hulud, Supply-Chain, CI-CD, Malware, OnePlus, OxygenOS, Root-Escalation, Meta-Muse, AI-Security, Elementor, WordPress, CSRF, Snowflake, Extortion, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## GitHub Actions Repository Mysteriously Re-Enabled, Malware Tag Still Live

Two GitHub Actions repositories compromised on **May 18, 2026** in the **Mini Shai-Hulud campaign** were unexpectedly restored to public access on **September 16, 2026**, between 11:09 a.m. and 6:16 p.m. GMT+2. GitHub staff had disabled them after they were found harvesting **CI/CD credentials and exfiltrating them to attacker-controlled servers**. The problem: release tags pointing to the malicious **May 18 payload** were never cleaned up. Any workflow referencing **`actions-cool/issues-helper@v2.2.1`** or similar version tags automatically resumed downloading and executing the credential-stealing code on the next run. The **Socket** research team discovered that no new code was introduced on September 16 — the repositories simply became downloadable again, converting a contained incident back into an active supply-chain threat. The exfiltration domain **`t.m-kosche[.]com`** overlaps with earlier Mini Shai-Hulud infrastructure. Affected users must locate all references to these actions, remove them, pin to known-clean commit SHAs predating May 18, and rotate all exposed secrets.

### Why Silent Repository Restoration Creates a Credentialing Apocalypse

- **Mutable tags are incident time-bombs.** A single malicious release tag survived containment and GitHub's own mitigation — a reminder that organizations pinning to version tags rather than commit SHAs inherit upstream compromise risk indefinitely.
- **Reactivation without configuration change is worse than a fresh attack.** Defenders who thought the issue was remediated in May saw no alerts, logs, or new artifacts — the same malware just woke up and ran again.
- **Secrets stolen in May stayed valid until September.** Four months elapsed before repositories were restored; most organizations had already rotated credentials from the May breach. Any that hadn't just handed attackers September access.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/09/compromised-github-actions-came-back.html), [Socket.dev](https://socket.dev/blog/mini-shai-hulud-actions))

---

## Active Threats This Week

📌 **Unpatched OnePlus root escalation: OxygenOS 16 wide open**
An independent security researcher (Rasmus Moorats) discovered two **unpatched privilege-escalation flaws** in OnePlus's **OxygenOS 16** that allow any installed application to gain **full root access without requesting any special permissions** — silently, with no user warning. The first bug resides in **AtlasService**, a root-privileged debugging service that accepts requests from any app; a crafted call lets an attacker inject arbitrary shell commands into a system debug command without validation. The second flaw in **olc2** service allows processes with **UID 0** (root) to execute arbitrary shell commands. Chained together, they give hostile apps complete kernel-level control. OnePlus confirmed the flaws affect other devices including **Oppo** models, and researchers suspect **OxygenOS 16 in general** is vulnerable. Older OnePlus 12 Pro also confirmed vulnerable.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/unpatched-oneplus-flaws-let-installed.html) | [xakep.ru](https://xakep.ru/2026/09/25/oneplus-root/)

📌 **Meta Muse AI assistant vulnerability: token theft and cross-device hijacking**
macOS security researcher **Patrick Wardle** disclosed a **0-day flaw in Meta's Muse** (launched September 2026) that lets any local process steal the user's **authentication token** and hijack the AI agent across all linked devices. The vulnerability: Muse has an undocumented setting (`endo_voyager_dictation_endpoint`) that determines where voice input is sent. Any app running as the current user can change this to a malicious server, intercept the voice request, inject commands, and steal the token. Once stolen, the attacker controls Muse on the victim's iPhone, Mac and beyond — accessing chat history, triggering smart-home commands, snapping photos, recording geolocation, and listing Bluetooth devices. Wardle showed a **ClickFix attack** (tricking users into pasting a terminal command) is sufficient to get code execution; no separate malware download needed. Meta called it "low practical risk" but shipped a hotfix; the researcher notes that **Apple's native speech APIs would have prevented this entirely**.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/one-hidden-meta-muse-setting-could-let.html) | [xakep.ru](https://xakep.ru/2026/09/25/muse-bug/)

📌 **Elementor CSRF flaw lets attackers take over WordPress sites with a single admin click**
The WordPress page builder **Elementor** is vulnerable to a **cross-site request forgery (CSRF)** attack that requires only an administrator to click a crafted link — no JavaScript, form submission, or attacker-controlled website needed. By visiting a single URL, a site admin can be tricked into granting full site control to the attacker. The flaw requires no prerequisites and patches are available.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/elementor-csrf-flaw-lets-attackers-take.html)

📌 **U.S. Army soldier sentenced: 70 months for AT&T/Verizon extortion through Snowflake access**
**Cameron John Wagenius**, a U.S. soldier stationed in South Korea, was sentenced to **70 months (5+ years)** in federal prison for extorting **AT&T and Verizon** after breaching their systems through stolen **Snowflake credentials**. Court documents show he gained access to sensitive telecom infrastructure data and demanded ransom. The case demonstrates how a single compromised cloud account — in this case Snowflake — can lead to extortion of major corporations and federal prosecution.

🔗 **Reference:** [Krebs on Security](https://krebsonsecurity.com/2026/09/u-s-soldier-gets-70-months-in-prison-for-att-verizon-extortions/)

---

## How Can OPSWAT Help

GitHub Actions malware and Elementor CSRF both involve **supply-chain artifact execution** and **web-based payload delivery**. **MetaDefender Multi-Scan** can validate downloaded CI/CD artifacts and third-party Actions before they run in your pipelines, catching known malicious signatures across 30+ engines — protecting build systems that are high-value targets for credential theft. **MetaDefender CDR** sanitizes web assets and blocks active content in files served through WordPress plugins, reducing the blast radius of a compromised plugin or CSRF-driven malicious redirect.
