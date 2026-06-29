---
title: "CISO Daily Digest: California Partners With Anthropic for Statewide AI Deployment (20260629)"
description: "California signs first-of-its-kind government AI partnership with Anthropic; US partially lifts Mythos 5 export controls; DirtyClone Linux LPE CVE-2026-43503 with PoC; libssh2 critical flaw CVE-2026-55200 (CVSS 9.2); Microsoft removes 119 Edge malware extensions; hijacked npm/Go packages deploy Python infostealer; Amadey/StealC infected 140K+ hosts; Gamaredon APT expands Ukraine operations."
pubDate: 2026-06-29
tags: [CISO, daily-digest, cybersecurity, threat-intel, Anthropic, California, AI-governance, vulnerability, supply-chain, malware]
author: "Security Solutions Team"
featured: true
---

## California-Anthropic Government AI Partnership

California Governor Gavin Newsom announced a first-of-its-kind partnership with Anthropic, providing Claude AI tools to state agencies to improve public services. The agreement makes California the first US state to formally integrate a frontier AI model into government operations, covering areas such as citizen services, internal workflows, and data analysis. This follows the US government's partial lifting of export controls on Anthropic's Claude Mythos 5, allowing over 100 government and enterprise organizations to access the model. Claude Fable 5 remains under restriction, though discussions for its broader release continue. Anthropic is also offering steep discounts for government Claude access, with California as the launch partner ([CA.gov](https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/), [iThome](https://www.ithome.com.tw/news/176921)).

### Why This Reshapes AI Governance

The California-Anthropic deal creates a template for US state-level AI procurement that other states are likely to follow. The combination of government procurement with discounted enterprise access signals a shift from AI safety debates toward operational deployment in public-sector contexts. For CISO organizations, this introduces new considerations around vendor risk management for frontier AI models in government-controlled environments, including data residency, model access controls, and audit requirements for AI-generated outputs.

---

## Active Threats This Week

📌 **DirtyClone Linux Kernel LPE (CVE-2026-43503, CVSS 8.8)** — JFrog detailed a new Linux kernel flaw called DirtyClone, a variant of DirtyFrag that allows local users to gain root privileges via cloned packets. The exploit affects Debian, Ubuntu, and Fedora systems with default namespace configurations. Any local user with CAP_NET_ADMIN capability (often obtainable via unprivileged user namespaces) is potentially exploitable ([iThome](https://www.ithome.com.tw/news/176913), [THN Weekly Recap](https://thehackernews.com/2026/06/weekly-recap-linux-kernel-flaws-ai.html)).

📌 **Critical libssh2 Client-Side Flaw (CVE-2026-55200, CVSS 9.2)** — A public proof-of-concept was released for this critical flaw that lets a malicious SSH server trigger memory corruption on a connecting client with no credentials or user interaction required. libssh2 is embedded in curl, Git, PHP, backup agents, and countless appliances — many statically linked, meaning distro package updates won't remediate them ([THN](https://thehackernews.com/2026/06/public-poc-released-for-critical.html)).

📌 **Microsoft Edge StegoAd Campaign** — Microsoft removed 119 extensions from the Edge Add-ons store that hid malware payloads inside ordinary image and font files using steganography. The extensions — ad blockers, VPNs, and video downloaders — had a combined install base of up to 2.6 million users and stole credentials while running ad fraud ([THN](https://thehackernews.com/2026/06/microsoft-removes-119-edge-extensions.html)).

📌 **Hijacked npm and Go Packages Deploy Infostealer** — JFrog uncovered two hijacked npm packages plus a cluster of Go packages that deploy a Python-based information stealer across Windows, Linux, and macOS. The attack avoids lifecycle scripts by hiding execution inside VS Code tasks, which run automatically when the project folder is opened. The encrypted payload is retrieved from blockchain transaction data ([THN](https://thehackernews.com/2026/06/hijacked-npm-and-go-packages-use-vs.html)).

📌 **Amadey and StealC Malware Network Disrupted** — Law enforcement operation Endgame, assisted by Microsoft AI analysis, uncovered that the Amadey and StealC malware families share the same criminal infrastructure. The operation recovered 27 million stolen credentials. The two malware strains infected over 140,000 computers in just two weeks ([iThome](https://www.ithome.com.tw/news/176943)).

📌 **Gamaredon APT Expands Ukraine Campaign** — ESET documented 35 distinct spear-phishing campaigns by Russian APT group Gamaredon against Ukrainian government and military targets throughout 2025. The group deployed new malware variants and abused cloud services as command channels, focusing on exfiltrating sensitive information to support Russian strategic interests ([THN](https://thehackernews.com/2026/06/gamaredon-expands-ukraine-attacks-with.html)).

📌 **Chinese Hackers UAT-7237 Target SE Asian Governments** — The Chinese-aligned threat actor expanded from attacking Taiwan's web hosting infrastructure to targeting government agencies, energy critical infrastructure, and state-owned enterprises across Southeast Asia. Attackers use ASPX web shells, SoftEther VPN tunnels, and TinyRCT backdoor for persistent access and lateral movement ([iThome](https://www.ithome.com.tw/news/176945)).

---

## How Can OPSWAT Help

The hijacked npm and Go packages delivering infostealers via VS Code tasks, the Microsoft Edge extensions hiding malware in images, and the Amadey/StealC malware distribution network all underscore the need for file-level defense at every entry point. OPSWAT MetaDefender uses multi-scanning (30+ anti-malware engines) and Deep Content Disarm and Reconstruction (CDR) to inspect and sanitize files — packages, extensions, documents, and binaries — before they reach end users. MetaDefender Cloud can be integrated into CI/CD pipelines to scan third-party packages for malware and hidden payloads, preventing supply chain attacks before deployment.

🔗 **Reference:** Coverage from ([THN](https://thehackernews.com/2026/06/hijacked-npm-and-go-packages-use-vs.html), [THN](https://thehackernews.com/2026/06/microsoft-removes-119-edge-extensions.html), [iThome](https://www.ithome.com.tw/news/176943))
