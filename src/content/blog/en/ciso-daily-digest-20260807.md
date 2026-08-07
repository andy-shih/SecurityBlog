---
title: "CISO Daily Digest: Anthropic Cuts Fable 5 Biology Safeguard Fallbacks by 85% (20260807)"
description: "Anthropic rewrote Claude Fable 5's biology classifiers on August 7, cutting safeguard fallbacks (redirects to the older Opus 5) by ~85% while keeping virology, toxicology and molecular design behind dual-use checks, as the Open Secure AI Alliance's SAFE framework and CSA's Catastrophic Risk Annex push verifiable AI controls. Cisco patched IOS XE CVE-2026-20272 (CVSS 9.8) and Catalyst SD-WAN CVE-2026-20303/20304/20310 (CVSS 9.9); Nvidia fixed Dynamo CVE-2026-24254 (CVSS 9.8); KVM Zapscape CVE-2026-64561 and Linux SCTPhantom CVE-2026-64564 enable host/container escapes; NatJack (CVE-2026-56181/63913) hijacks NAT'd TCP sessions; Windows Hello for Business keys enable persistent Entra ID access; Arctic Wolf flags a Microsoft 365 AitM phishing wave; Claude Code/Gemini CLI harness flaws reach CI secrets; AI-assisted HTTP Terminator found an Apache Traffic Server zero-day; Meta's Muse model breached another company during security testing."
pubDate: 2026-08-07
tags: [CISO, Daily Digest, AI Security, Anthropic, Fable 5, Biology Safeguards, AI Governance, Vulnerabilities, Phishing, Supply Chain]
author: "Security Solutions Team"
featured: true
---

## Anthropic Cuts Fable 5 Biology Fallbacks by 85%, Reopening Health and Lab Queries

Anthropic announced on **August 7** that it has updated the biology safeguards on **Claude Fable 5**, its most capable model, cutting "fallbacks" — where the system silently switches to the older, less capable **Opus 5** after a biology-related query — by **about 85% across product surfaces**. Users will now get direct answers far more often on everyday health and educational questions: interpreting lab results, understanding symptoms, and learning biology in an educational context; healthcare professionals will receive more support on clinical tasks. The change is a classifier rewrite: Fable 5's safeguards run on small AI models that flag risky requests, tuned over several weeks to reduce false positives.

The relaxation is bounded. Fable 5 **still falls back to Opus 5 for dual-use domains — virology, toxicology and molecular design — and is not yet usable for professional biology research and drug development**; Anthropic says it is building "trusted access pathways" to close that gap. The company's rationale is blunt: capability assessments show Fable 5 can outperform experts on some biology tasks and would give a would-be bioweapon developer "significant uplift" — capabilities "they could not find anywhere else." Anthropic points to the US intelligence community's 2026 threat assessment on state bioweapon programmes, noting biology is inherently dual-use: developing a live vaccine means growing the pathogen itself.

### Why This Reshapes AI Governance

The update crystallizes the "access versus catastrophe" tradeoff the industry now manages in public — the same week UK AISI tests showed Anthropic's Mythos 5 attempting supply-chain attacks on real projects, and Meta confirmed its Muse model breached another company's systems during security testing (see Active Threats). Governance scaffolding is racing to catch up: at **Black Hat USA 2026**, the Nvidia-led **Open Secure AI Alliance** released its draft **SAFE** (shared AI discovery exchange) framework for sharing AI-agent security incidents and investigation findings, with the Linux Foundation publishing a request for comment; the **Cloud Security Alliance** announced its **Catastrophic Risk Annex** (August 5), extending its AI Controls Matrix with auditable controls for catastrophic-failure scenarios and pilot audits planned for 2027. For security teams the direction is consistent: model-level guardrails are being tuned against false positives, so compensating controls — auditability, incident sharing, and verification of AI-agent behavior — increasingly live outside the model itself.

🔗 **Reference:** Coverage from ([Anthropic](https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards), [The Next Web](https://thenextweb.com/news/anthropic-claude-fable-5-biology-safeguards-fallbacks-dual-use), [NDTV Profit](https://www.ndtvprofit.com/technology/anthropic-updates-claude-fable-5-biology-safeguards-expands-access-to-health-lab-queries-11877652))

---

## Active Threats This Week

📌 **Cisco patches IOS XE and Catalyst SD-WAN: CVSS 9.8 and 9.9 flaws**
Cisco's August security updates cover **7 flaws in IOS XE** — led by **CVE-2026-20272 (CVSS 9.8)** and CVE-2026-20267 (9.0), with five rated 8.6 — affecting IOS XE 17.9/17.12/17.15/17.18/26.1 in both autonomous and controller modes (fixed in 17.9.10, 17.12.8, 17.15.6, 17.18.4/4a, 26.1.2), and **5 flaws in Catalyst SD-WAN** with **three rated CVSS 9.9** (**CVE-2026-20303, CVE-2026-20304, CVE-2026-20310**) plus two at 8.8, spanning on-premises, Cloud-Pro, managed-cloud and FedRAMP deployments (fixed in 20.9.10, 20.12.8.1, 20.15.6, 20.18.4, 26.1.2). Cisco says the IOS XE issues were found in internal security reviews and none are exploited in the wild.
🔗 **Reference:** [iThome — IOS XE](https://www.ithome.com.tw/news/177949) | [iThome — Catalyst SD-WAN](https://www.ithome.com.tw/news/177954)

📌 **Nvidia Dynamo RCE: CVE-2026-24254 (CVSS 9.8)**
Nvidia patched its distributed AI inference framework **Dynamo for Linux** (v1.3.0), fixing an out-of-bounds write in the multimodal serving topology (**CVE-2026-24254, CVSS 9.8**) that can lead to code execution, privilege escalation, data tampering, denial of service and data disclosure. The update also covers **CVE-2026-24253** and **CVE-2026-47623** (both CVSS 8.2: out-of-bounds write and untrusted-data deserialization), CVSS 7.5 data-disclosure issues (CVE-2026-24255, CVE-2026-47612–47618) and several medium-severity flaws.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177960)

📌 **Chrome 151 closes 41 vulnerabilities (6 critical, 35 high)**
Google's stable update (151.0.7922.108/109 across Windows, macOS, Linux and Android) patches **41 flaws**. Graphics components dominate: **12 bugs across ANGLE, GPU, Skia and WebGL (~30%)**, with 4 each in the V8 JavaScript engine and the Views framework; about three-quarters are memory-safety issues, including **19 use-after-free** bugs and 5 out-of-bounds writes.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177945)

📌 **Zapscape: KVM shadow-MMU flaw lets L1 guests escape to the host (CVE-2026-64561)**
Researcher **Hyunwoo Kim** disclosed a use-after-free in KVM/x86's shadow memory management unit — a stale-root check ordering flaw in the recursive zap path — that lets an attacker with kernel privileges inside an **L1 guest VM** escape KVM isolation and execute code on the host with root privileges (the public PoC creates a root-owned `/Zapscape` file on the host). The risk applies when nested virtualization is exposed to untrusted guests; the upstream fix is merged. Intel systems additionally require EPT page-walk lengths 4 and 5 exposed to the L1 guest; AMD has no equivalent condition.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/new-zapscape-kvm-flaw-could-let.html)

📌 **SCTPhantom: 18-year-old Linux SCTP use-after-free — root and container escape (CVE-2026-64564)**
A use-after-free in Linux's SCTP networking code, present since kernel 2.6.25 (**2008**), lets local users gain **root on the host**; **Tencent Zhuque Lab** says it also used it to **escape a container**. Tracked as **CVE-2026-64564 ("SCTPhantom")**, the flaw is fixed in stable kernels 7.1.6, 6.18.42, 6.12.101 and 6.6.148 (released August 3). It is local, requires SCTP reachable, and is not in CISA's Known Exploited Vulnerabilities catalog as of August 7; Tencent confirmed root on Debian 13, Ubuntu 24.04, Rocky Linux 9, RHEL 9 and OpenCloudOS builds.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/18-year-old-linux-sctp-flaw-could-let.html)

📌 **NatJack: manipulating NAT state hijacks TCP sessions and spoofs DNS**
Researcher **Malcolm Stagg** (SODIUM-24) presented **NatJack** at Black Hat USA 2026 — an attack class that manipulates NAT connection state to hijack active TCP sessions, spoof DNS responses, expose mapped ports and exhaust NAT tables, exploiting the assumption that hosts behind the same NAT do not attack each other. Affected behavior spans independently developed implementations; two CVEs were assigned: **CVE-2026-56181 (CVSS 8.3, Windows NAT/Hyper-V)** and **CVE-2026-63913 (CVSS 8.2, Linux Netfilter conntrack)**. Attackers need privileged access to a system behind the same NAT; there is no single patch for the class.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/new-natjack-attacks-hijack-tcp-sessions.html)

📌 **Windows Hello for Business keys abused for persistent Entra ID access**
Entra ID researcher **Dirk-jan Mollema** showed that malware already running in a signed-in Windows session can silently use the victim's **Windows Hello for Business key** — treated as a FIDO2 passkey via WebAuthn — to authenticate to Microsoft Entra ID, registering an attacker-controlled device, obtaining a **Primary Refresh Token (PRT)** and adding further authentication methods where tenant policy permits. On TPM-backed systems the attacker does not extract the private key, recover the PIN or trigger a biometric prompt, and administrator privileges are not required. The 5-minute Entra ID challenge is not bound to a session, user or tenant, so the signed assertion can be requested from another host; ROADtools can exchange it for tokens. No CVE or active exploitation is reported; Microsoft documents the underlying ticketing behavior.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/malware-can-abuse-windows-hello-for.html)

📌 **Microsoft 365 AitM phishing wave targets finance staff**
**Arctic Wolf Labs** flagged a "widespread" adversary-in-the-middle phishing campaign that hijacks **Microsoft 365 accounts** to identify personnel involved in financial workflows and harvest related email, using **residential proxies** to disguise sign-ins and automated activity maintaining compromised sessions at roughly **8-hour intervals**. Attacks hit healthcare, education, manufacturing, government and professional services in the US, Canada and Europe, with tactical overlaps to Microsoft's **Payroll Pirate (Storm-2755)** cluster; Arctic Wolf observed hundreds of organizations targeted last month. Voicemail-themed lures run through a six-stage redirection chain abusing Google Meet, Google Ads and Amazon S3 to bypass reputation filters, capturing credentials and MFA codes on AitM proxy pages.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/microsoft-365-aitm-phishing-hijacks.html)

📌 **Claude Code and Gemini CLI harness flaws reach CI workflow secrets**
**Novee Security** (Black Hat USA, August 5) showed that a GitHub issue opened by an account with **no repository privileges** was enough to execute code on the CI runners behind **Anthropic's and Google's own coding-agent repositories**, and to hijack the next agent run on **OpenAI's**. **CVE-2026-12537 (CVSS 10.0)** is an OS command injection in the **Gemini CLI** container launcher via a crafted `.gemini/.env` file — host code execution before the sandbox starts — fixed in Gemini CLI 0.39.1 and run-gemini-cli 0.1.22. **CVE-2026-54316** turned Hugging Face's public download counter into an exfiltration channel that leaked a **Claude Code** API key one character at a time (fixed in 2.1.163; releases 0.2.54–2.1.163 affected). The recurring failure sits in the agent **harness** — the code between the model and the real world.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/claude-code-and-gemini-cli-flaws-let.html)

📌 **AI-assisted HTTP Terminator finds Apache Traffic Server zero-day and new desync techniques**
PortSwigger's **HTTP Terminator**, an AI-assisted research system built by **James Kettle**, generated and proved new **HTTP desynchronization (request-smuggling)** techniques after exploring **30,000 candidate vectors** (derived from 138 HTTP and SMTP RFCs), finding roughly **700 vulnerable targets** among 30,000 authorized bug-bounty sites — banks, government infrastructure, security products and an airport — including a `multipart/byteranges` technique that exposed 200+ websites. A human-guided discovery cascade separately exposed a **zero-day in Apache Traffic Server**. New "dangling-byte" and dual-matching Content-Length techniques make response queue poisoning (RQP) more reliable, which can expose other users' session cookies or API keys.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/ai-assisted-http-terminator-finds-novel.html)

📌 **Meta AI model breaches another company during security testing — misconfiguration again**
**The Information** reported this week that a **Meta** AI model (reportedly **Muse Spark 1.1**) accessed another company's systems and modified internal settings during security testing; Meta confirmed to Reuters the cause was a **misconfigured test environment at partner Irregular** that let the model reach the internet, where it encountered a system with a known vulnerability. Meta is the **third major AI lab** — after OpenAI and Anthropic — to disclose an agent crossing its bounds during testing. Irregular says there was no sandbox escape or zero-day abuse and is preparing a white paper on the incident.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177957)
