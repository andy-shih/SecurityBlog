---
title: "CISO Daily Digest: Moonshot Kimi K3 Challenges AI Leaders — Open-Source 2.8T Model (20260717)"
description: "Moonshot AI releases Kimi K3 (2.8T parameters), the largest open-weight model, challenging GPT-5.6 and Claude Fable 5. Active threats: Daxin/Stupig backdoors target Taiwanese manufacturing, CISA adds SharePoint RCE zero-day (CVE-2026-58644) to KEV, Fortinet sandbox vulnerabilities under exploitation, and Sophos reports 79% of ransomware attacks originate from stolen identities."
pubDate: 2026-07-17
tags: [CISO, Daily Digest, Security, AI Governance, Kimi K3, Moonshot AI, Supply Chain, SharePoint, Ransomware, Fortinet, Daxin]
author: "Security Solutions Team"
featured: true
---

## Moonshot Kimi K3 Challenges AI Leaders With Open-Source 2.8 Trillion Parameter Model

Chinese AI startup Moonshot AI has unveiled **Kimi K3**, a **2.8 trillion parameter open-weight model** that it claims rivals the performance of OpenAI's GPT-5.6 and Anthropic's Claude Fable 5. The model, released under an open-weight license, is the largest publicly available open-source AI model to date, with a **2.8 million token context window**. This marks a significant escalation in the AI arms race, as China demonstrates its ability to produce frontier-capability models despite export controls on advanced semiconductors.

Key details: Kimi K3 is reported to have cost over **$500 million** to train. Early benchmarks show it competing with GPT-5.6 on reasoning tasks and matching Fable 5 on coding benchmarks. The model's release comes alongside **Moonshot's $2 billion funding round at a $12 billion valuation**, underscoring investor confidence in China's AI ecosystem. Separately, Germany launched **Soofi S**, an open-source sovereign AI model emphasizing efficiency and long-context reasoning, highlighting the growing trend of nations building independent AI capabilities.

🔗 **Reference:** Coverage from ([PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/chinas-moonshot-challenges-anthropic-with-a-bigger-cheaper-model/), [iThome](https://www.ithome.com.tw/news/177376), [iThome — Soofi S](https://www.ithome.com.tw/news/177378))

### Why This Reshapes AI Governance

The release of Kimi K3 crosses a critical threshold: an open-weight model from a non-US competitor that rivals frontier Western models. This fundamentally challenges the current AI governance framework built around US-led export controls and voluntary safety commitments. Enterprise CISOs now face supply chain risk from open-weight models that could be fine-tuned for malicious purposes, embedded in commercial products, or used to bypass AI safety guardrails. Germany's Soofi S model indicates that the push for AI sovereignty is accelerating — every regulated industry may eventually need to evaluate the provenance and safety of the AI models embedded in their software supply chain. The G7's parallel push for **financial sector post-quantum cryptography (PQC) transition by 2035** adds another layer of compliance complexity.

🔗 **Reference:** Coverage from ([iThome — G7 PQC](https://www.ithome.com.tw/news/177380), [iThome — AI Security Survey](https://www.ithome.com.tw/news/177383))

---

## Active Threats This Week

📌 **Daxin & Stupig Backdoors Target Taiwanese Manufacturing**
A sophisticated campaign using **Daxin and Stupig backdoors** has been discovered targeting **Taiwanese manufacturing companies**. The advanced persistent threat (APT) group behind the operation has deployed stealthy backdoors capable of data exfiltration and persistent access. Taiwanese organizations in the manufacturing sector are urged to conduct thorough network forensics and review OT/IT segmentation controls. The threat actors demonstrate deep knowledge of industrial control environments, suggesting long-term reconnaissance before deployment.
🔗 **Reference:** [iThome — Daxin/Stupig](https://www.ithome.com.tw/news/177390) | [iThome — Daily Report](https://www.ithome.com.tw/news/177397)

📌 **CISA Adds Actively Exploited SharePoint RCE Zero-Day to KEV**
CISA has added **CVE-2026-58644**, a **remote code execution zero-day in Microsoft SharePoint**, to its Known Exploited Vulnerabilities (KEV) catalog, confirming that attackers are actively exploiting the flaw in the wild. Microsoft patched this vulnerability in its July 2026 Patch Tuesday update, alongside a record **622 other CVEs**. Given SharePoint's widespread deployment in enterprise environments, organizations should prioritize patching, particularly for internet-facing instances.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/07/cisa-adds-exploited-sharepoint-rce-zero.html) | [iThome](https://www.ithome.com.tw/news/177382)

📌 **CISA Warns Fortinet Sandbox Vulnerabilities Under Active Exploitation**
CISA has issued an alert regarding **critical vulnerabilities in Fortinet's FortiSandbox platform** that are being actively exploited. The flaws could allow attackers to bypass sandbox analysis and gain unauthorized access to protected networks. Fortinet has released patches; organizations using FortiSandbox should apply updates immediately.
🔗 **Reference:** [iThome — CISA Fortinet Warning](https://www.ithome.com.tw/news/177387) | [iThome — Fortinet Patches](https://www.ithome.com.tw/news/177340)

📌 **CISA Orders Federal Agencies to Patch Critical Oracle EBS Vulnerabilities**
CISA has mandated that US federal agencies urgently patch **critical vulnerabilities in Oracle E-Business Suite (EBS)**. Oracle's July 2026 Critical Patch Update addressed multiple severe flaws, including remote code execution vulnerabilities with CVSS scores exceeding 9.0. While the directive is specific to federal agencies, private sector organizations running Oracle EBS should treat this as a priority.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177379)

📌 **Sophos Report: 79% of Ransomware Attacks Originate from Stolen Identities**
Sophos's latest "State of Ransomware 2026" report reveals that **79% of ransomware attacks now begin with compromised identities** rather than traditional vulnerability exploitation. The report highlights that attackers have shifted their initial access strategy to focus on credential theft, MFA bypass, and identity federation abuse. This represents a fundamental shift in the ransomware threat landscape, requiring organizations to rebalance defenses toward identity security, including phishing-resistant MFA and continuous authentication monitoring.
🔗 **Reference:** [Infosecurity Magazine](https://www.infosecurity-magazine.com/news/compromised-logins-ransomware-entry/) | [iThome](https://www.ithome.com.tw/news/177383)

📌 **Google Chrome 150 Fixes 3 Critical Vulnerabilities**
Google has released **Chrome 150**, addressing **three critical-severity vulnerabilities** in the browser. Users and enterprise IT teams should prioritize updating to the latest version. Separately, Google also patched **over 300 third-party and browser vulnerabilities in ChromeOS**, including 21 rated as critical.
🔗 **Reference:** [iThome — Chrome 150](https://www.ithome.com.tw/news/177374) | [iThome — ChromeOS](https://www.ithome.com.tw/news/177377)

📌 **Claude Chrome Extension Flaw Allows Malicious Extensions to Trigger AI Actions**
A security researcher has disclosed a flaw in the **Claude for Chrome extension** that allows other malicious Chrome extensions to **silently trigger Claude AI actions** without user consent. The vulnerability could enable data exfiltration by chaining extension permissions — a malicious extension with basic permissions could invoke Claude to summarize, transcribe, or process the user's Gmail, documents, or other sensitive content.
🔗 **Reference:** [BleepingComputer](https://www.bleepingcomputer.com/news/security/claude-chrome-extension-flaw-lets-malicious-extensions-trigger-ai-actions/)

📌 **NPM Package Jscrambler Compromised — Rust Info-Stealer Distributed**
Attackers compromised the **Jscrambler NPM package** to distribute a **Rust-based information stealer** targeting development environments. This supply chain attack follows the growing trend of malicious actors targeting the JavaScript package ecosystem. Organizations using Jscrambler should audit their dependency trees and rotate any credentials that may have been exposed in build pipelines.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/177419) | [iThome — Weekly Roundup](https://www.ithome.com.tw/news/177408)

---

## How Can OPSWAT Help

Several of this week's active threats involve file-based attack vectors where OPSWAT's MetaDefender platform provides critical defense. The **Jscrambler NPM compromise** is a supply chain attack that can be mitigated by deep content disarm and reconstruction (CDR) of downloaded packages. The **Daxin/Stupig backdoors** targeting Taiwanese manufacturing leverage malicious binaries that MetaDefender's multi-engine scanning can detect before execution. The **Sophos ransomware report** highlights the link between stolen identities and ransomware deployment — MetaDefender's file upload security and CDR can prevent malicious files from reaching endpoints even when credentials are compromised. For organizations evaluating **open-weight AI models like Kimi K3**, MetaDefender can scan model weights and training data for embedded malware before deployment into enterprise environments.

🔗 **Reference:** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
