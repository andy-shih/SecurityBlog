---
title: "CISO Daily Digest: OpenRouter Drops 3 Providers After Researchers Catch Months of Prompt Theft at AI Hosting Firms (20261122)"
description: "Critical intelligence regarding prompt theft in AI inference providers, a Ghostscript sandbox escape vulnerability, and cybersecurity market expansions in Taiwan."
pubDate: 2026-11-22
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## OpenRouter Drops 3 Providers After Researchers Catch Months of Prompt Theft at AI Hosting Firms

Researchers from Dragos discovered that attackers successfully exfiltrated data from three AI inference providers over several months without the providers' knowledge. The breach was identified through canary token research, where unique web links and credentials were embedded into approximately two million prompts between July and November. The presence of these 'planted' secrets in unauthorized locations confirmed that the attackers were reading and copying customer prompts.

The investigation revealed that the theft occurred even for requests flagged with Zero Data Retention settings, which are intended to prevent prompt storage. One major breach involved the theft of several hundred AWS keys. Attackers were observed testing these keys within hours, performing extensive API calls to list S3 buckets, search Secrets Manager, and attempt to escalate access by creating IAM users or Bedrock API keys. In some instances, attackers appeared to compromise two providers simultaneously using a single rented server.

OpenRouter responded by removing the three implicated providers from its platform and revoking Zero Data Retention eligibility for 125 endpoints. While OpenRouter itself was not breached, the incident highlights that attackers may intercept traffic at the initial point of arrival before it reaches the deep inference stack. Researchers identified specific user agents, 'artex-agent' and 'artex-judge-r121,' associated with an AI-driven penetration testing framework used to validate the stolen keys.

### 📌CISO Impact

- **AI Supply Chain Data Privacy —** Zero Data Retention (ZDR) settings in AI gateways may not prevent data theft if the underlying inference provider is compromised; organizations should treat all third-party AI processing as a potential point of data exposure.
- **Cloud Credential Exposure —** Prompt exfiltration can lead to the immediate compromise of embedded cloud secrets; implement rigorous secret scanning and strictly limit the presence of long-lived AWS keys within AI prompts.
- **Detection of AI-Driven Tooling —** Defenders should monitor for emerging AI-driven penetration testing agents, such as 'artex-agent', which may be used to validate stolen credentials in rapid succession.

**Reference:** [OpenRouter Drops 3 Providers After Researchers Catch Months of Prompt Theft at AI Hosting Firms](<https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html>)

---

## Active Threats This Week

📌 **Researchers Demonstrate Ghostscript Sandbox-Escape RCE via Crafted File Uploads in Popular Apps**

A patched use-after-free vulnerability in Ghostscript (CVE-2026-125396) allows attackers to bypass the -dSAFER sandbox and execute commands on servers via crafted file uploads. Researchers demonstrated that common libraries like ImageMagick or Pillow can inadvertently trigger the flaw by passing PostScript or EPS content to Ghostscript during routine tasks like thumbnail generation or image cropping, even if the file extension appears benign. The vulnerability was addressed in Ghostscript version 10.08.0 on September 8, 2026, and no active exploitation has been reported.

**Reference:** [Researchers Demonstrate Ghostscript Sandbox-Escape RCE via Crafted File Uploads in Popular Apps](<https://thehackernews.com/2026/11/researchers-demonstrate-ghostscript.html>) 

---

📌 **Nebula Strategy Invests in MicroZ, Taiwan Cybersecurity Firms Collaborate to Expand Product Layout and Overseas Markets**

Taiwanese cybersecurity firms are collaborating to expand their product offerings and penetrate international markets following a strategic investment in MicroZ by Nebula Strategy.

**Reference:** [網擎策略投資微智安聯，臺灣資安業者攜手擴大產品布局、拓展海外市場 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5KTERiSXZnU1RMemxMOS14M0UxVnIzODM5UFR1VXduczNfUkdmRjhoZ3V5ZmktazdBQXZXa2E2LS1vUTZLM19MRzk0YVA1UQ?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261122-1-1795361632694 -->
