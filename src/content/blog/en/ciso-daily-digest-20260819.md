---
title: "CISO Daily Digest: CoSnitch One-Click Exfil, MLflow CVE-2026-64849 Actively Exploited, DGFiP 678K Records Leaked (20260819)"
description: "Varonis discloses CVE-2026-24301 CoSnitch in Microsoft Copilot Personal (patched Aug 18); MLflow CVE-2026-64849 SSRF and FUXA CVE-2026-25895 RCE see active exploitation hours after CVE assignment; French tax authority DGFiP confirms 678,000-record breach by threat actor ZeroBytes."
pubDate: "2026-08-19"
tags: ["ciso", "daily-digest", "copilot", "mlflow", "ssrf", "france", "data-breach", "cve"]
author: "Andy Shih"
featured: false
---

## Executive Summary

Three high-urgency issues dominate today's threat landscape. Microsoft patched **CVE-2026-24301 (CoSnitch)** in Copilot Personal the same day Varonis went public, but the one-click memory-poisoning path requires users to manually clear injected instructions. Two critical CVEs — **MLflow CVE-2026-64849 (CVSS 9.3)** and **FUXA CVE-2026-25895 (CVSS 9.5)** — saw malicious scanning within hours of disclosure. France's tax authority **DGFiP** confirmed a late-June breach by threat actor **ZeroBytes** affecting at least 678,000 taxpayer records.

---

## 1 — CVE-2026-24301 "CoSnitch": One-Click Exfiltration in Microsoft Copilot Personal

Varonis Threat Labs disclosed three vulnerabilities in Microsoft Copilot Personal (copilot.microsoft.com) that allow a single crafted link to silently pull data from every service the victim has connected.

**Attack chain:**
- Varonis used *meta-hacking*: asking Copilot why a prompt could not auto-run until the assistant itself surfaced an undocumented `autorun=1` URL parameter.
- Combining `autorun=1` with the `q` parameter fires the injected prompt without any user gesture. Execution continues even if the victim closes the tab immediately.
- The exfiltration request is indistinguishable at the network layer from a standard Copilot page-summarization fetch; base64 encoding can evade content filters scanning for credential patterns.

**Data reachable in testing:** Gmail bodies, subject lines, sender/recipient metadata; Google Calendar titles, attendees, locations; Google Drive filenames and summaries; full Copilot conversation history; saved Copilot memory instructions.

**Memory-poisoning path (separate vector):** A web-summarization flow can inject a persistent instruction that survives password changes, session revocation, and device re-enrollment. The change produces no process, file, network, or log entry visible to security tooling — it is only visible in Copilot's memory settings UI.

**Patch:** Microsoft shipped fixes on **August 18, 2026**. No client update is required, but injected memories created before the fix may persist until the user manually removes them from Copilot's memory settings.

🔗 **Reference:** [The Hacker News — Microsoft Copilot Personal Flaws Could Let One Click Exfiltrate Data From Connected Apps](https://thehackernews.com/2026/08/microsoft-copilot-personal-flaws-could.html)

---

## 2 — CVE-2026-64849 (MLflow SSRF, CVSS 9.3) and CVE-2026-25895 (FUXA RCE, CVSS 9.5) — Active Exploitation

Two critical CVEs in AI/ICS tooling attracted active scanning within hours of disclosure.

**CVE-2026-64849 — MLflow SSRF (affects versions < 3.15.0):**
- Unauthenticated Server-Side Request Forgery in the model-registry webhook implementation.
- Bypasses prior fixes by exploiting how MLflow handles HTTP redirects.
- Attackers are using it to reach cloud metadata services (AWS IMDSv1, GCP metadata) and extract cloud credentials and secrets.
- watchTowr detected malicious scanning via global honeypot telemetry within hours of the CVE being assigned on **August 17, 2026**.

**CVE-2026-25895 — FUXA ICS/SCADA RCE (affects versions ≤ 1.2.9):**
- Missing authentication for a critical function + path traversal allowing unauthenticated remote attackers to write arbitrary files to the server filesystem.
- VulnCheck detected a single IP broadly scanning the internet for exposed FUXA instances starting August 18. No RCE payloads dropped yet; observed activity attempts to overwrite `main.js` with junk data.
- Approximately 60 FUXA installations are internet-exposed.

**Recommended actions:** Patch MLflow to ≥ 3.15.0 immediately; review audit logs for signs of IMDSv1 access; apply FUXA patch and firewall SCADA management interfaces from the internet.

🔗 **Reference:** [The Hacker News — Attackers Exploit MLflow SSRF Flaw to Steal Cloud Credentials and Secrets](https://thehackernews.com/2026/08/attackers-exploit-mlflow-ssrf-flaw-to.html)

---

## 3 — DGFiP (French Tax Authority) Breach: ZeroBytes Claims 2M Records, Government Confirms 678K

France's Ministry of Economy confirmed that threat actor **ZeroBytes** gained unauthorized access to the **Direction Générale des Finances Publiques (DGFiP)** in late June 2026 using stolen credentials and a 2FA bypass.

**What was taken:** Income data, family composition, tax withholding rates for individuals; company name and SIREN registration numbers; cadastral data (property addresses and floor areas).

**Scale dispute:** ZeroBytes posted a sales listing on **PwnForums** on August 12 claiming a 2M+ record dump and alleging access to the **Serveur Professionnel de Données Cadastrales (SPDC)** covering ~20M French citizens. DGFiP confirmed unauthorized access was detected and closed in late June during a routine audit; its own forensic count is **678,000 individuals and organizations** affected.

**Response:** ANSSI is co-investigating; France's data-protection authority **CNIL** has been notified. DGFiP begins mailing individual breach notifications next week. Online taxpayer accounts and login credentials were not compromised.

🔗 **Reference:** [Xakep.ru — Хакер заявляет, что похитил у французской налоговой службы данные 2 млн человек](https://xakep.ru/2026/08/18/dgfip-leak/)

---

## 4 — Threema Disrupted by DDoS Attack

The end-to-end encrypted messenger **Threema** experienced service disruption on August 18, 2026 as a result of a distributed denial-of-service attack. The platform serves approximately 12 million users and is widely used by government agencies and security-conscious enterprises across Europe.

🔗 **Reference:** [Xakep.ru — В работе мессенджера Threema возникли проблемы из-за DDoS-атак](https://xakep.ru/2026/08/18/threema-ddos/)
