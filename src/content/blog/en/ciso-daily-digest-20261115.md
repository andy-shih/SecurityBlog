---
title: "CISO Daily Digest: Exposed Fireworks AI Credential Triggers Cursor Breach and Trojanized Extension Distribution (20261115)"
description: "Exposed third-party vendor credentials led to a software supply chain compromise on Cursor's extension marketplace, while Italian regulators levied an €805 million fine against Meta over mobile permission and consent violations."
pubDate: 2026-11-15
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Exposed Fireworks AI Credential Triggers Cursor Breach and Trojanized Extension Distribution

Coding platform Cursor disclosed that a security breach at third-party provider Fireworks AI led to the theft of an access key issued to the vendor. The threat actor used this credential to exfiltrate data from a read-only storage bucket utilized for data sharing. The compromised bucket held coding agent session traces from users who had not enabled Privacy Mode, exposing unredacted API credentials belonging to less than 0.01% of customers along with non-production source code repositories, support correspondence, and user communication summaries.

The adversary subsequently leveraged the stolen customer credentials to pivot into internal Cursor systems and SaaS tooling. On October 29, 2026, the intruder used compromised internal access to inject trojanized versions of Anthropic's official Claude Code extension (builds 2.1.312 and 2.1.313) into Cursor's marketplace cache. The malicious update, which was engineered to establish a persistent SSH backdoor on victim machines, was accessible for approximately 11 hours and downloaded by up to 5,000 users before the marketplace cache was taken offline.

Cursor mitigated the incident by deactivating vendor keys, migrating all inference workloads away from Fireworks AI, revoking exposed customer tokens, and coordinating with hosting providers to dismantle attacker infrastructure. The company confirmed that users with Privacy Mode enabled, core production infrastructure, and official client applications were unaffected, with no unauthorized activity detected after November 1, 2026. The incident coincides with disclosures from Uber and Notion reporting data access linked to the same Fireworks AI compromise.

### 📌CISO Impact

- **Audit AI Vendor Data Buckets for Embedded Secrets —** Ensure pre-training and telemetry exports to external AI vendors enforce mandatory, automated redaction of API tokens, customer credentials, and sensitive session logs before transit.
- **Verify Integrity of Developer Extension Caches —** Implement cryptographic signing and integrity validation across internal plugin distribution channels to prevent compromised internal accounts from poisoning extension marketplace caches.
- **Hunt for Rogue SSH Persistence on Developer Workstations —** Inspect developer endpoints for unauthorized SSH keys and backdoor activity if engineering teams fetched cached updates for Cursor Claude Code extension versions 2.1.312 or 2.1.313.

**Reference:** [Stolen Fireworks AI Key Led to Cursor Data Breach and Trojanized Claude Code Extension](<https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html>)

---

## Active Threats This Week

📌 **Italian Regulator Fines Meta €805 Million Over Android Photo Gallery Consent Failures**

Italy's data protection regulator, the Garante, has fined Meta €805 million for accessing Android device photo and video galleries without explicit user consent under Article 122 of the Italian Privacy Code. The authority determined that a Facebook feature suggesting local media for posting was enabled by default across roughly 20 million Italian users via a broad, single OS permission that lacked granular disclosures. Meta, which plans to appeal the penalty, was ordered to disable the suggestion feature by default within 60 days, separate the consent process from general application permissions, and submit operational compliance updates to the regulator within 30 and 90 days.

**Reference:** [Italy Fines Meta €805 Million Over Facebook's Android Gallery Access Without Explicit Consent](<https://thehackernews.com/2026/11/italy-fines-meta-805-million-over.html>) 

<!-- ciso-revision:ciso-20261115-1-1794758875916 -->
