---
title: "CISO Daily Digest: CISA Flags 4 Actively Exploited Flaws, Citrix NetScaler in the Wild (20260819)"
description: "CISA warns Windows, macOS, Microsoft SharePoint, VMware vCenter and Microsoft IKE flaws are under active exploitation; the UK NCSC and researchers confirm Citrix NetScaler CVE-2026-8452 is being exploited in the wild and the June-patched DoS flaw can now achieve remote code execution. Oracle's August 2026 Critical Patch Update fixes 925 vulnerabilities, more than 100 at CVSS 9.0–10.0; MLflow CVE-2026-64849 SSRF and FUXA CVE-2026-25895 RCE see malicious scanning within hours of disclosure. France's DGFiP tax authority confirms a 2 million-record breach, Commerzbank loses €30M to a vulnerability-driven heist, and logistics giant CEVA's breach spreads to UK/German Pokémon Center. CoSnitch (CVE-2026-24301) lets one link exfiltrate every connected Copilot app; SilkParasite and StopAndProtect run live campaigns."
pubDate: "2026-08-19"
tags: ["ciso", "daily-digest", "cisa", "citrix", "netscaler", "oracle", "mlflow", "cve", "data-breach", "copilot", "ransomware"]
author: "Andy Shih"
featured: true
---

## CISA Sounds Active-Exploitation Alarm, Citrix NetScaler CVE-2026-8452 Weaponized

Today's threat picture is dominated by **known vulnerabilities moving into active exploitation at scale**. CISA's latest KEV-adjacent alert names four flaws now being abused in the wild: a Microsoft Windows issue, an Apple **macOS** flaw, **Microsoft SharePoint**, **VMware vCenter**, plus a **Microsoft IKE** vulnerability. Separately, the UK's NCSC and independent researchers confirmed **Citrix NetScaler CVE-2026-8452** — a high-severity flaw the UK government is warning organizations to remediate urgently — is already under attack, and a **June-patched NetScaler denial-of-service bug** now has a documented path to **remote code execution**.

On the patch front, **Oracle's August 2026 Critical Patch Update (CPU)** is unusually large: **925 vulnerabilities** fixed, with more than 100 rated at the **CVSS 9.0–10.0** ceiling. Two freshly disclosed AI/OT flaws — **MLflow CVE-2026-64849 (SSRF, CVSS 9.3)** and **FUXA CVE-2026-25895 (RCE, CVSS 9.5)** — attracted malicious scanning **within hours of CVE assignment**, the now-familiar "patch-to-exploit" gap that gives defenders a sub-day window.

### Why This Reshapes Vulnerability Governance

The pattern repeating across today's items is the **collapse of the remediation window**. When MLflow and FUXA are scanned by attackers the same day they are published, and when a NetScaler DoS fix from June becomes an RCE in August, the "patch next maintenance window" model is obsolete. CISOs should treat **CISA-named exploited flaws and internet-facing NetScaler/SharePoint/vCenter** as emergency-change candidates, and prioritize the **100+ CVSS-10.0 Oracle fixes** in any environment running Oracle E-Business Suite, PeopleSoft, or Database. The DGFiP, Commerzbank, and CEVA incidents also show that **supply-chain and third-party breaches** (a logistics partner's compromise cascading into Pokémon Center order cancellations) are now a first-order material-risk category, not an edge case.

🔗 **Reference:** Coverage from [The Hacker News](https://thehackernews.com/2026/08/critical-macos-sharepoint-vcenter-and.html), [iThome — CISA 4-vuln warning](https://www.ithome.com.tw/news/178276), [iThome — Citrix NetScaler active exploitation](https://www.ithome.com.tw/news/178253), [iThome — Oracle August 2026 CPU](https://www.ithome.com.tw/news/178129), [iThome — MLflow exploitation](https://www.ithome.com.tw/news/178259)

---

## Active Threats This Week

📌 **CISA: 5 actively exploited flaws (Windows, macOS, SharePoint, vCenter, Microsoft IKE)** — Federal and enterprise defenders told to remediate immediately; SharePoint and vCenter are the repeat offenders from prior KEV cycles.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/critical-macos-sharepoint-vcenter-and.html) | [iThome](https://www.ithome.com.tw/news/178276)

📌 **Citrix NetScaler CVE-2026-8452 exploited in the wild** — UK NCSC urges urgent action; a **June-patched NetScaler DoS flaw (CVE linked to the 178251 advisory)** now demonstrated as **remote code execution**.
🔗 **Reference:** [iThome — UK warning](https://www.ithome.com.tw/news/178253) | [iThome — DoS-to-RCE](https://www.ithome.com.tw/news/178251)

📌 **Oracle August 2026 CPU: 925 CVEs, 100+ at CVSS 10.0** — Covers E-Business Suite, PeopleSoft, Database and Fusion Middleware; multiple满分 (perfect-score) flaws demand same-week patching.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178129)

📌 **MLflow CVE-2026-64849 (SSRF, CVSS 9.3) actively exploited** — Attackers use server-request forgery to steal **cloud credentials and secrets** from AI engineering platforms hours after disclosure.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/attackers-exploit-mlflow-ssrf-flaw-to.html) | [iThome](https://www.ithome.com.tw/news/178259)

📌 **FUXA CVE-2026-25895 (RCE, CVSS 9.5) scanned within hours of CVE assignment** — OT/SCADA visualization tool exposed on the internet; exploitation enables arbitrary code execution on industrial hosts.

📌 **France's DGFiP tax authority: 2 million taxpayer records breached** — Threat actor **ZeroBytes** claims exfiltration; earlier iThome reporting cited 678,000, the actor now states **2 million** (June 2026 incident).
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/18/dgfip-leak/)

📌 **Commerzbank: €30M+ stolen via a vulnerability** — German bank confirms attackers siphoned **more than €30 million** by exploiting a software flaw; one of the largest vulnerability-driven financial heists this year.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/19/commerzbank-hack/)

📌 **CEVA logistics breach spreads to UK/German Pokémon Center** — Global logistics provider **CEVA** compromise forces **order cancellations and data exposure** at Pokémon Center UK and Germany.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178260)

📌 **CoSnitch CVE-2026-24301 in Microsoft Copilot Personal** — One crafted link silently exfiltrates Gmail, Calendar, Drive, and Copilot memory; a memory-poisoning vector survives password changes and re-enrollment. Patched Aug 18; users must manually clear injected instructions.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/microsoft-copilot-personal-flaws-could.html) | [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/cosnitch-attack-copilot-mapping-out-architecture)

📌 **SilkParasite espionage campaign** — Targets Central Asian governments with **five new RATs**; classic nation-state tradecraft against regional public sector.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/silkparasite-espionage-campaign-targets.html)

📌 **StopAndProtect malware network** — Uses nearly **2,000 hacked WordPress sites** to spread malware and steal data via injected redirects.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/08/stopandprotect-uses-nearly-2000-hacked.html)

📌 **New Python malware abuses SharePoint + Teams** — Hides command-and-control inside Microsoft 365 collaboration tools, enables credential theft and lateral movement.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178278)

📌 **GitLab CVE-2026-19478 emergency fix** — Critical-grade GraphQL flaw let public projects be deleted; zero-click mitigation challenges reported.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178254) | [Dark Reading](https://www.darkreading.com/application-security/critical-gitlab-zero-click-flaw-mitigation-challenges)

📌 **WordPress Forminator arbitrary file upload** — **600,000+ sites** exposed; unauthenticated upload can lead to site takeover.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178275)

📌 **Threema DDoS outage** — Swiss encrypted messenger disrupted by large-scale DDoS attacks.
🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/08/18/threema-ddos/)

📌 **AMD Vitis high-risk flaw (private key exposure + RCE)** — August 2026 AMD security advisory; affects FPGA toolchain.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178252)

📌 **Intel August security update** — Multiple high-risk flaws in **Xeon and TDX** products.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/178250)

📌 **Firefox 154 fixes 58 security bugs; Chrome 151 fixes 15** — Routine browser patch rounds; deploy via standard cadence.
🔗 **Reference:** [iThome — Firefox 154](https://www.ithome.com.tw/news/178261) | [iThome — Chrome 151](https://www.ithome.com.tw/news/178255)

---

## How Can OPSWAT Help

**Vendor risk at a glance**

| Vendor / Product | Issue | Severity | Exposure | Action |
|---|---|---|---|---|
| Citrix NetScaler | CVE-2026-8452 + June DoS→RCE | High / Critical | Internet-facing ADCs | Emergency patch + hunt for RCE |
| Oracle (EBS/PeopleSoft/DB) | 925 CVEs, 100+ CVSS 10.0 | Critical | Enterprise core apps | Same-week CPU adoption |
| Microsoft (Copilot/SharePoint/Windows/IKE) | CoSnitch, KEV flaws | High | Cloud + endpoints | Patch + clear Copilot memory |
| MLflow / FUXA | CVE-2026-64849 / CVE-2026-25895 | 9.3 / 9.5 | AI + OT estates | Isolate, patch immediately |
| GitLab | CVE-2026-19478 | Critical | Dev platforms | Upgrade to fixed release |
| DGFiP / Commerzbank / CEVA | Breach / theft / 3rd-party | Severe | Supply chain | Monitor, contain cascades |

Most of today's headline risk is **file- and supply-chain-borne**: MLflow/FUXA payloads, the StopAndProtect WordPress-injected malware, the Python SharePoint/Teams dropper, and CoSnitch's memory-injection all land through untrusted content or third-party code. **OPSWAT MetaDefender** multi-scanning plus **Content Disarm & Reconstruction (CDR)** stops these at the file layer — neutralizing weaponized documents, binaries, and web-content before they reach endpoints or CI/CD pipelines — and the **Deep CDR** pipeline sanitizes files pulled from compromised partners like logistics providers. For AI/ML platforms, sanitizing model artifacts and notebook dependencies reduces the blast radius of an SSRF or RCE foothold.
