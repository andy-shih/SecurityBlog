---
title: "CISO Daily Digest: Mythos 5 Returns, Claude Lands on Azure, Meta Blocks Rival AI (20260630)"
description: "Anthropic's Mythos 5 export controls partially lifted; Claude launches on Microsoft Azure Foundry; Meta restricts Claude Code/Codex from training data; FortiBleed credential theft targets Fortinet firewalls; SimpleHelp CVE-2026-48558 actively exploited delivering TaskWeaver and Djinn Stealer; GuardFall exposes AI coding agents to shell injection; 282 iOS AI apps leak LLM API keys; China-linked USB malware infected Japanese military networks for nearly a year; KDDI data breach exposes 14.22M subscriber records; Edge StegoAd campaign removed 119 malicious extensions; Cordyceps CI/CD supply chain risk; Oracle PeopleSoft breaches hit Nissan and US federal agency."
pubDate: 2026-06-30
tags: [CISO, daily-digest, cybersecurity, threat-intel, Anthropic, Mythos-5, AI-governance, vulnerability, supply-chain, malware, FortiBleed, Apple, Oracle, iOS]
author: "Security Solutions Team"
featured: true
---

## Mythos 5 Returns, Claude Expands to Azure, Meta Blocks Rival AI

Anthropic's Fable 5/Mythos 5 story entered a new phase on June 30 with several key developments. The US government partially lifted export controls on Claude Mythos 5, allowing over 100 government and enterprise organizations to access the model — though Claude Fable 5 remains restricted with no timeline for restoration ([iThome](https://www.ithome.com.tw/news/176921), [CA.gov](https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/)).

In parallel, Anthropic accelerated its commercialization push:

- **Claude launches on Microsoft Azure Foundry:** Claude models are now generally available in Microsoft Foundry on Azure, powered by NVIDIA GB300 Blackwell Ultra systems. This expands enterprise access through the Azure ecosystem ([Tech Wire Asia](https://techwireasia.com/2026/06/anthropic-claude-microsoft-foundry-azure/)).

- **Meta restricts Claude Code and Codex:** Meta has blocked its employees from using Anthropic's Claude Code and GitHub's Codex coding assistants to prevent rival AI from accessing its proprietary training data. The move highlights growing competitive tensions in the AI development tool market ([The Decoder](https://the-decoder.com/meta-restricts-use-of-claude-code-and-codex-to-keep-rival-ai-out-of-its-training-data/)).

- **California partnership formalized:** Governor Newsom signed a first-of-its-kind partnership providing Claude AI tools to California state agencies at a 50% discount. The Washington Post and StateScoop covered the agreement as a template for state-level AI procurement ([Washington Post](https://www.washingtonpost.com/technology/2026/06/30/newsom-bets-california-government-on-trump-scrutinized-anthropic-ai/), [State Scoop](https://statescoop.com/california-agencies-get-access-to-anthropics-ai-tools-at-half-price/)).

### Why This Reshapes AI Governance

The simultaneous lifting of Mythos 5 export controls, enterprise Azure deployment, and a major state government partnership signal that the AI governance debate is shifting from restriction toward operational deployment. Meta's decision to block rival coding AI from its training data illustrates the competitive dynamics that will shape enterprise AI procurement — companies now restrict not just what models they use, but what data their developers' tools can learn from.

---

## Active Threats This Week

📌 **FortiBleed — Large-Scale Credential Theft from Fortinet Devices** — TWCERT issued an alert about a widespread credential theft campaign dubbed "FortiBleed" targeting enterprise Fortinet firewalls and VPN appliances. Attackers are extracting credentials, session tokens, and VPN configuration data from vulnerable devices, potentially enabling persistent network access for follow-on attacks. Organizations running Fortinet equipment should audit for unauthorized access immediately.
🔗 **Reference:** [TWCERT](https://www.twcert.org.tw/tw/cp-104-11013-7c866-1.html)

📌 **SimpleHelp CVE-2026-48558 Actively Exploited (CVSS 10.0)** — Attackers are actively exploiting a critical remote access vulnerability in SimpleHelp remote monitoring and management software to deploy the TaskWeaver remote access trojan and the Djinn information stealer targeting cloud and AI credentials. CISA confirmed active exploitation in the wild. SimpleHelp's maximum severity score (10.0) makes this one of the most critical remote access vulnerabilities under active attack ([iThome](https://www.ithome.com.tw/news/176961), [THN](https://thehackernews.com/2026/06/attackers-exploit-simplehelp-cve-2026.html)).

📌 **Oracle PeopleSoft Breaches — Nissan and US Federal Agency** — Both Nissan Motor and the US National Association of Insurance Commissioners (NAIC) confirmed data breaches involving Oracle PeopleSoft systems, linked to CVE-2026-35273 exploitation. Nissan's Americas division employee data was compromised; NAIC's regulatory data exposure affects the insurance industry. Oracle E-Business Suite CVE-2026-46817 is also under active exploitation in separate campaigns ([iThome](https://www.ithome.com.tw/news/176980), [iThome](https://www.ithome.com.tw/news/176973)).

📌 **GuardFall — AI Coding Agents Vulnerable to Shell Injection** — Researchers disclosed GuardFall, a class of vulnerabilities affecting open-source AI coding agents (Cursor, Cody, Continue, Aider). The attack exploits decades-old shell injection techniques that modern AI coding tools inadvertently reintroduce by executing LLM-generated shell commands without proper sanitization. This impacts the growing practice of delegating code generation and execution to AI agents ([THN](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html)).

📌 **282 iOS AI Apps Leak API Keys in Network Traffic** — A network traffic study found that 282 iOS applications using AI/LLM features are leaking API keys and exposing OpenAI proxy access in plaintext network traffic. The findings highlight the gap between AI feature adoption and secure API credential management in mobile applications ([THN](https://thehackernews.com/2026/06/282-ios-apps-found-leaking-llm-api-keys.html)).

📌 **China-Linked USB Malware Infected Japanese Military Networks for Nearly a Year** — Bitdefender reported that USB drives carrying China-linked malware infected Japanese military and defense contractor networks for approximately 12 months. The campaign, attributed to a Chinese cyber-espionage group, used air-gap-crossing USB propagation to compromise isolated networks, exfiltrating sensitive defense-related data ([Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/usb-drives-carrying-china-linked-malware-infected-japanese-military-networks-for-nearly-a-year)).

📌 **KDDI Data Breach — 14.22 Million Japanese ISP Subscriber Records Exposed** — Japanese ISP provider KDDI suffered a massive data breach exposing personal records of 14.22 million subscribers. The breach is one of the largest ISP data breaches in Japanese history, involving customer names, addresses, and account details ([xakep](https://xakep.ru/2026/06/30/kddi-hack/)).

📌 **Edge StegoAd Campaign — 119 Malicious Extensions with 2.6M Installs** — Microsoft removed 119 malicious Edge extensions that used steganography to hide malware payloads inside ordinary image and font files. The campaign, active for over two years, combined ad fraud with credential theft and affected up to 2.6 million users ([iThome](https://www.ithome.com.tw/news/176966)).

📌 **Cordyceps — CI/CD Supply Chain Risk via GitHub Actions** — Researchers identified "Cordyceps," a CI/CD supply chain vulnerability where GitHub Actions workflows can be hijacked through untrusted external input in comments, pull requests, branch names, or workflow artifacts. Attackers can steal credentials and compromise open-source software releases ([iThome](https://www.ithome.com.tw/news/176978)).

📌 **Oracle PeopleSoft Breaches — Nissan and US Federal Agency** — Both Nissan Motor and the US National Association of Insurance Commissioners (NAIC) confirmed data breaches involving Oracle PeopleSoft systems, linked to CVE-2026-35273 exploitation by threat actor ShinyHunters. Nissan's Americas division employee data was compromised; NAIC's regulatory data exposure affects the insurance industry ([iThome](https://www.ithome.com.tw/news/176980), [iThome](https://www.ithome.com.tw/news/176973)).

📌 **DirtyClone Linux Kernel LPE (CVE-2026-43503, CVSS 8.8)** — JFrog detailed a new Linux kernel privilege-escalation vulnerability called DirtyClone, a variant of DirtyFrag. Local users with CAP_NET_ADMIN capability (often obtainable via unprivileged user namespaces) can gain root privileges. Affects Debian, Ubuntu, and Fedora ([iThome](https://www.ithome.com.tw/news/176913)).

🔗 **Reference:** Coverage from ([TWCERT](https://www.twcert.org.tw/tw/cp-104-11013-7c866-1.html), [THN](https://thehackernews.com/2026/06/attackers-exploit-simplehelp-cve-2026.html), [THN](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html), [iThome](https://www.ithome.com.tw/news/176966), [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/usb-drives-carrying-china-linked-malware-infected-japanese-military-networks-for-nearly-a-year), [xakep](https://xakep.ru/2026/06/30/kddi-hack/))

---

## How Can OPSWAT Help

The FortiBleed credential theft, USB-borne malware targeting air-gapped Japanese military networks, SimpleHelp remote access exploitation, Cordyceps CI/CD supply chain risk, and Edge extension steganography all underscore the need for multi-layered file-level defense. OPSWAT MetaDefender uses 30+ anti-malware engines and Deep Content Disarm and Reconstruction (CDR) to inspect and sanitize files — USB drives, software packages, email attachments, browser downloads — before they reach endpoints. MetaDefender Cloud integrates with CI/CD pipelines to scan for hidden payloads in third-party dependencies and container images, preventing supply chain compromise. For OT/ICS environments, MetaDefender Kiosk provides physical media inspection at air-gap boundaries.

🔗 **Reference:** Coverage from ([iThome](https://www.ithome.com.tw/news/176966), [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/usb-drives-carrying-china-linked-malware-infected-japanese-military-networks-for-nearly-a-year), [THN](https://thehackernews.com/2026/06/attackers-exploit-simplehelp-cve-2026.html), [iThome](https://www.ithome.com.tw/news/176978))
