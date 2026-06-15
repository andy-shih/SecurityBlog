---
title: "CISO Daily Digest: Fable 5 Ban Aftermath -- Amazon's Role & Global Regulatory Fallout (20260615)"
description: "New details emerge on Amazon's role in triggering the Fable 5 shutdown; Anthropic sends senior staff to Washington for negotiations as EU launches probe; NightSpire ransomware hits 33 countries including Taiwan; Velvet Ant APT infiltrated air-gapped systems for nearly a decade; Arch Linux AUR supply chain attack compromises 400 packages; Oracle PeopleSoft zero-day (CVE-2026-35273) added to CISA KEV amid active exploitation."
pubDate: 2026-06-15
tags: [CISO, Daily Digest, Anthropic, Fable 5, AI Governance, NightSpire, Supply Chain, CISA, Oracle, PeopleSoft, Velvet Ant, APT, Arch Linux, AUR]
author: "Security Solutions Team"
featured: true
---

## Fable 5 Ban Aftermath -- Amazon's Role & Global Regulatory Fallout

Anthropic's Claude Fable 5 and Mythos 5 models remain suspended globally as new details continue to emerge about the events leading to the US government's export control order.

**Key developments on June 15:**

- **Amazon whistleblower role confirmed:** The Wall Street Journal reported that Amazon CEO Andy Jassy personally raised concerns about Fable 5 capabilities to Treasury Secretary Scott Bessent and other officials, after Amazon researchers found the model could be prompted to provide information useful for cyberattacks. Amazon is Anthropic's largest investor, having committed $13 billion.

- **Anthropic lobbying in Washington:** The company has sent senior staff to Washington for negotiations with the Trump administration, seeking a deal to restore limited access or negotiate terms. CEO Dario Amodei has reportedly engaged directly with administration officials.

- **EU launches investigation:** The European Union has opened a probe into the US control directive, examining whether it creates extraterritorial regulatory overreach and its implications for European AI companies and users.

- **Anthropic's Claude Corps initiative:** The company announced a $150 million, 1,000-fellow program called "Claude Corps" to bring AI to nonprofit organizations -- a strategic move reinforcing Anthropic's safety-first positioning amid the controversy.

- **Class action lawsuit:** Anthropic faces a lawsuit over usage limits on its $200/month Claude Max plan, with plaintiffs alleging deceptive marketing about "unlimited" access.

### Why This Reshapes AI Governance

1. **Export control precedent:** The Fable 5 ban marks the first time the US has used export controls to restrict access to an AI model's weights and inference capabilities -- not just hardware. This establishes a precedent that could apply to any frontier model, creating regulatory uncertainty for the entire industry.

2. **Investor influence over AI safety:** Amazon's role as both investor and whistleblower raises governance questions about how large tech investors can influence regulatory outcomes against competing AI platforms. Anthropic's independence from Amazon's cloud (it also uses Google Cloud and others) did not prevent the conflict of interest.

3. **Global fragmentation risk:** The EU investigation signals that AI regulation is becoming a geopolitical battleground. Different jurisdictions may impose incompatible requirements, forcing AI companies to choose between markets or maintain multiple compliance regimes.

---

## Active Threats This Week

📌 **NightSpire Ransomware Hits 33 Countries Including Taiwan**
Active since early 2025, the NightSpire ransomware gang has compromised at least 64 organizations across healthcare, government, finance, manufacturing, and IT services. The group uses legitimate admin tools (PSExec, Cobalt Strike, PowerShell) to blend in with normal system activity, making detection difficult. Taiwan is among the confirmed victims.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176627)

📌 **Velvet Ant APT -- Nearly a Decade in Air-Gapped Infrastructure**
The China-linked threat group Velvet Ant (tracked as Operation Highland by Sygnia) compromised Linux systems by backdooring PAM (Pluggable Authentication Modules) and OpenSSH components in completely air-gapped environments. The group has been active since at least 2016, replacing trusted login programs to enable persistent unauthorized access and credential harvesting without detection.
🔗 **Reference:** [iThome (Velvet Ant tag)](https://www.ithome.com.tw/tags/velvet-ant) | [Aviatrix Analysis](https://aviatrix.ai/threat-research-center/china-linked-hackers-backdoored-linux-login-software-2026/)

📌 **Arch Linux AUR Supply Chain Attack -- 400+ Packages Compromised**
Attackers compromised approximately 400 packages in the Arch Linux User Repository (AUR), injecting cryptocurrency miners and data-stealing malware. The attack exploited weak maintainer controls and permissive review processes -- orphaned packages were taken over by malicious actors who then distributed malware to anyone building from source.
🔗 **Reference:** [WebProNews](https://www.webpronews.com/arch-linux-aur-supply-chain-attack-hits-400-packages-with-malware/) | [iThome](https://www.ithome.com.tw/news/??) | [The Hacker News](https://thehackernews.com/)

📌 **Oracle PeopleSoft Zero-Day (CVE-2026-35273) Added to CISA KEV**
CISA has added CVE-2026-35273, a critical unauthenticated remote code execution vulnerability in Oracle PeopleSoft PeopleTools, to its Known Exploited Vulnerabilities catalog. The ShinyHunters group has been actively exploiting this flaw to breach hundreds of organizations, primarily educational institutions. Oracle released a patch on June 10 but exploitation continues.
🔗 **Reference:** [CISA via iThome](https://www.ithome.com.tw/tags/cve-2026-35273) | [The Hacker News](https://thehackernews.com/) | [Xakep](https://xakep.ru/2026/06/15/oracle-peoplesoft/)

📌 **Palo Alto PAN-OS GlobalProtect VPN Active Exploitation (CVE-2026-0257)**
Palo Alto Networks confirmed active exploitation of CVE-2026-0257, a critical authentication bypass vulnerability in GlobalProtect SSL VPN. CISA has added it to KEV, requiring federal agencies to patch within 4 days. The flaw (CVSS 9.1 per NVD) allows unauthenticated attackers to bypass authentication and access internal network resources.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/palo-alto-warns-of-active-exploitation.html) | [iThome](https://www.ithome.com.tw/news/176253)

📌 **Dynatrace GitHub Data Breach -- 246 Repositories Allegedly Stolen**
A threat actor using the alias "xpI0itrs" is selling 8.46GB of data allegedly stolen from Dynatrace's internal GitHub repositories, claiming access to 246 repos via an exposed Personal Access Token. The leaked data includes infrastructure details, CI/CD pipeline configs, Kubernetes management info, and employee PII. Dynatrace has not yet confirmed the breach.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176587)

📌 **152 Chrome Wallpaper Extensions Found Distributing Adware**
Security researchers identified 152 Chrome wallpaper extensions with over 105,000 total installs that were secretly tracking user behavior, injecting ads, and generating fake traffic. The extensions were still available in the Chrome Web Store at the time of discovery.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/152-chrome-wallpaper-extensions-with.html)

📌 **Langflow Path Traversal Vulnerability (CVE-2026-5027) Actively Exploited**
VulnCheck warns that CVE-2026-5027, a path traversal vulnerability in the Langflow AI development platform (CVSS 8.8), has been seen in active exploitation via honeypots. The flaw allows unauthenticated attackers to write arbitrary files and achieve RCE through the /api/v2/files endpoint. Patched in Langflow 1.9.0.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176593)

📌 **phpBB Authentication Bypass -- Critical Vulnerability Patched**
phpBB released version 3.3.17 fixing a critical authentication bypass vulnerability (discovered by Aikido) that allows attackers to log in as any user including administrators, potentially compromising forum data and user accounts across millions of installations.
🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/176597)

📌 **Sniper Dz Phishing Campaigns Targeting MENA Users**
A phishing operation dubbed "Sniper Dz" is targeting users in the Middle East and North Africa through fake Facebook offers and browser alert scams, tricking victims into installing remote access tools.
🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/06/sniper-dz-scams-target-mena-users-via.html)

📌 **Google Sues Chinese Fraud Ring Over Gemini Abuse**
Google filed a lawsuit against a Chinese-organized fraud group called "Outsider Enterprise" for systematically abusing its Gemini AI platform to generate fraudulent content at scale.
🔗 **Reference:** Coverage from iThome and security media

📌 **Maine Data Breach Portal Taken Down After Fake Filings**
The state of Maine was forced to take down its data breach reporting portal after attackers submitted fraudulent breach notices through the system, overwhelming state officials and potentially masking real breach reports.
🔗 **Reference:** [Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/maine-take-down-data-breach-portal)

---

## How Can OPSWAT Help

Several threats this week involve file-based attacks that OPSWAT MetaDefender can address. The Arch Linux AUR supply chain attack distributed malware via compromised source packages -- MetaDefender's multi-scanning with 30+ anti-malware engines and CDR (Content Disarmament and Reconstruction) can detect and neutralize known and unknown threats in downloaded packages and binaries. For organizations mirroring AUR or any open-source repository internally, deploying MetaDefender in the download pipeline prevents malicious packages from reaching developer workstations and CI/CD environments.

The Dynatrace GitHub breach highlights the risk of exposed credentials and source code leaks. MetaDefender's Deep Content Disarmament and Reconstruction can sanitize files and prevent zero-day malware hidden in code repositories from executing.
