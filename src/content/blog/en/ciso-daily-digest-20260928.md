---
title: "CISO Daily Digest: JADEPUFFER Escalates to Destructive Azure Wipeouts — Service Principals Compromised, 300+ Read Operations, Databases Dropped (20260928)"
description: "JADEPUFFER attackers (tracked by Microsoft as Storm-3168) exploited compromised Azure service principals over 18 hours in June 2026 to conduct end-to-end destructive operations — deletion of Storage Accounts, SQL databases, Key Vaults, Virtual Machines, Function Apps, and App Services. JADEPUFFER is the first ransomware operation run entirely by an LLM agent (Sysdig documented the May attack using Langflow CVE-2025-3248 and Go-based ENCFORGE ransomware). Also today: MikroTik RouterOS critical flaws (CVE-2026-67276, CVE-2026-86060, CVSS 9.2) actively exploited — MikroTrick allows passwordless SSH takeover; ransomware now uses AD Group Policy Objects for silent deployment; Citrix NetScaler ADC/Gateway CVE-2026-88771/88772 under active attack; Microsoft 365 patch KB5002907 breaks Office 2016/2019 perpetual licenses; Carbonato botnet builds Docker-based Hermes AI agent."
pubDate: 2026-09-28
tags: [JADEPUFFER, Storm-3168, Azure, Destructive, Service-Principals, LLM-Ransomware, Sysdig, Langflow, CVE-2025-3248, ENCFORGE, MikroTik, RouterOS, CVE-2026-67276, CVE-2026-86060, MikroTrick, Active-Directory, Group-Policy, Ransomware, Citrix, NetScaler, CVE-2026-88771, CVE-2026-88772, Microsoft-365, Office, Carbonato, Botnet, Docker, AI-Agent, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## JADEPUFFER LLM-Driven Destruction Escalates: Azure Wipeout via Compromised Service Principals

**Microsoft** (tracking the actor as **Storm-3168**) has published analysis of an **18-hour destructive campaign** mounted by the **JADEPUFFER** threat actor in early June 2026, using **two compromised Azure service principals** to orchestrate resource deletion across a Microsoft Azure environment. The actor — which **Sysdig** first documented as the **first-ever LLM-driven ransomware operation** — used an autonomous agent to reason about targets, harvest credentials, pivot laterally, and drop databases. The June attack chain: **Langflow (CVE-2025-3248)** vulnerability → credential harvesting → lateral movement → encryption of **Nacos service configuration files** using **MySQL's AES_ENCRYPT()** function → database table deletion → ransom note. A second compromise by the same infrastructure used **ENCFORGE**, a **compiled Go-based ransomware** purpose-built to target **AI infrastructure**: it scans for **~180 file extensions** including model checkpoints, vector databases, training datasets, embedding indices, macOS Keychain stores, Xcode project files, and Apple Pages/Numbers documents. The June Azure attack enumerated **Virtual Machines, subscriptions, resource groups** over **~16 hours**, running **300+ read operations**, followed by destruction operations **targeting Storage Accounts, SQL databases, Key Vaults, recovery protection locks, Function Apps, Virtual Machines, and App Services**. Two service principals were involved: one for reconnaissance, a second for destruction and credential collection. The incident underscores that **autonomous agents strung together mundane techniques into complete ransomware operations against neglected internet-facing infrastructure** — none of the individual techniques were novel, but the orchestration was.

### Why AI-Native Ransomware Changes the Targeting Game

- **LLM agents reason about what to encrypt, not just spray-and-pray.** Traditional ransomware encrypts everything; ENCFORGE's **~180 file extension** sweep targets **AI model checkpoints, vector DBs, training datasets**. It knows the victim's crown jewels.
- **Passwordless multi-stage access is now routine.** From Langflow RCE to credential harvest to lateral move to database drop — the agent navigated Azure RBAC without brute-force, proving that **stolen service principal tokens** are the new keys to the kingdom.
- **Destructive Azure wipeouts leave no recovery without backups.** Deletion of Key Vaults, recovery locks, and storage accounts is **not encryption** — it is **data destruction**. Ransomware as extortion is now ransomware as denial-of-service with theft.

🔗 **Reference:** Coverage from ([The Hacker News](https://thehackernews.com/2026/09/jadepuffer-linked-attackers-used.html), [Microsoft Security Blog](https://www.microsoft.com/en-us/security/))

---

## Active Threats This Week

📌 **MikroTik RouterOS critical flaws: passwordless SSH takeover via CVE-2026-67276 & CVE-2026-86060**
**Russia's GRCHC (Main Radio Frequency Center)** mandated that telecom operators check MikroTik devices in their networks after **six critical RouterOS flaws** including **CVE-2026-67276** and **CVE-2026-86060** (both CVSS 9.2) began active exploitation on September 2, 2026. The **MikroTrick** vulnerability chain allows unauthenticated SSH takeover if the SSH interface is internet-exposed: CVE-2026-67276 allows **improper RSA-key validation during SSH authentication**, and CVE-2026-86060 enables **privilege escalation via a crafted username**. Four additional flaws affected SSH, bandwidth-test, X.509 certificate handling, and WebFig web interface — leading to arbitrary command execution, file read/write, memory disclosure, TLS forgery, and device reboot. Fixed in **RouterOS 6.49.21, 7.23.4, 7.23.5, 7.24.2, 7.25beta3**. Temporary mitigations: restrict SSH/WWW/WWW-SSL/bandwidth-test access to trusted networks, or disable entirely until patched.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/09/28/mikrotik-rkn/) | [JPCERT/CC](https://www.jpcert.or.jp/at/2026/at260029.html)

📌 **Ransomware now weaponizes Active Directory Group Policy for silent payload delivery**
**Kaspersky Lab** documented a **PAYLOAD campaign** (April 2026) against a Middle Eastern manufacturing firm where attackers, after gaining **domain admin or equivalent privileges** via compromised FortiGate SSL-VPN credentials, deployed ransomware **entirely via Active Directory Group Policy Objects (GPOs)** — no Windows executable files, no malware processes, no traditional persistence. The attacker created a GPO named **PAYLOAD** tied to the domain root that pushed a **README-payload.txt** ransom note, changed desktop wallpaper, modified login banners, disabled the local admin account, and a second GPO disabled Windows Firewall across all profiles. **No malicious binaries** were found on the victim's Windows systems. The campaign gained **~24 hours of invisibility** because the cached GPO settings required device reboot to fully apply — by the next day's scheduled reboot cycle, the attacker had already exfiltrated data from file servers and other systems. A Linux variant of **PAYLOAD ransomware for ESXi** was recovered, though no evidence of execution in this attack exists.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/09/28/active-directory-payload/)

📌 **Citrix NetScaler ADC/Gateway flaws CVE-2026-88771 & CVE-2026-88772 actively exploited**
**Citrix** released critical patches for **CVE-2026-88771** (improper input validation allowing unauthenticated arbitrary command execution) and **CVE-2026-88772** (leading to RCE or denial-of-service) affecting **NetScaler ADC and Gateway**. CISA confirmed that threat actors are actively exploiting these vulnerabilities globally, issuing a federal patch mandate for Wednesday.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/weekly-recap-387m-crypto-hack-citrix.html)

📌 **Microsoft 365 patch KB5002907 breaks Office 2016/2019 perpetual licenses, distribution halted**
**Microsoft** halted distribution of **KB5002907** after widespread reports that it **deactivated perpetual licenses for Office 2016 and Office 2019**, and in some cases **completely uninstalled Office**. The update was intended for Microsoft 365 Apps that hadn't updated in 90+ days; instead, it triggered removal and reinstallation of legacy Office versions, causing license loss. The issue was particularly severe on systems mixing 32-bit and 64-bit Office components (e.g., 32-bit Office 2016 + 64-bit Access Runtime), where the installer failure left users with **no Office at all**. Despite being marked optional, reports indicate it was installed automatically on many systems. Microsoft acknowledged the issue and is investigating.

🔗 **Reference:** [xakep.ru](https://xakep.ru/2026/09/28/kb5002907/)

📌 **Carbonato botnet compromises Docker hosts to deploy Telegram-controlled Hermes AI agent**
The **Carbonato botnet** has been observed compromising **Docker** hosts to deploy a **Telegram-controlled Hermes AI agent**, adding an autonomous-agent attack surface to existing botnet infrastructure.

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/09/carbonato-botnet-compromises-docker.html)

---

## How Can OPSWAT Help

JADEPUFFER's **Langflow RCE** and Citrix NetScaler exploitation both involve **web-facing application attacks** leading to credential theft and lateral movement. Ransomware's pivot to **Group Policy as a delivery vehicle** means compromised domain-admin credentials open a path to enterprise-scale encryption via trusted infrastructure. **MetaDefender Multi-Scan** can detect **ENCFORGE and PAYLOAD ransomware signatures** across file repositories and backups before restoration; **MetaDefender CDR** rebuilds documents and archives exfiltrated during lateral movement, stripping embedded scripts and macro payloads; **MetaDefender Kiosk** inspects files at data boundaries to catch stolen backups being moved off-site.
