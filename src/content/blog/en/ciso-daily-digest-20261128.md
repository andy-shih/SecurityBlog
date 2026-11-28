---
title: "CISO Daily Digest: Suspected Vietnam-Linked Hackers Target Southeast Asia in South China Sea Espionage Campaign (20261128)"
description: "A summary of recent cyber espionage targeting Southeast Asian government entities, a security incident involving pCloud Pass, and a reported compromise of Radware."
pubDate: 2026-11-28
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Suspected Vietnam-Linked Hackers Target Southeast Asia in South China Sea Espionage Campaign

A suspected Vietnam-sponsored threat actor, identified as WeaveLotus, has conducted an espionage campaign targeting military, government, and legislative organizations across Southeast Asia. The campaign, codenamed RedOps, was observed between August and September 2026 and focused on gathering intelligence regarding South China Sea defense and military agreements. Confirmed intrusions occurred in Thailand and the Philippines, while reconnaissance activities were observed against Indonesian government entities.

Initial access was achieved by exploiting web application vulnerabilities and using default credentials in open-source software, specifically targeting GeoServer, JasperReports, osTicket, and exposed Laravel debug mode configurations. Once inside, the actors maintained persistence using reverse SSH tunnels and moved laterally through downstream networks and applications. The group also utilized automated OSINT techniques, employing Bing search scripts to scrape documents and news related to regional military agreements involving the Philippines, China, and the U.S.

Evidence suggesting a link to Vietnam includes the use of native Vietnamese-language code comments, operational activity aligned with the UTC+07:00 time zone, and strategic interest in regional geopolitical issues. The primary objective of the RedOps campaign appears to be the exfiltration of internal government records to support Vietnamese foreign policy and military intelligence priorities.

### 📌CISO Impact

- **Secure Open-Source Implementations —** The exploitation of default credentials and vulnerabilities in tools like GeoServer and osTicket highlights the need for rigorous hardening of open-source applications and the elimination of default configurations.
- **Monitor Lateral Movement and Persistence —** The use of reverse SSH tunnels for persistence requires organizations to implement strict egress filtering and monitor for unauthorized tunneling or anomalous SSH activity within the network.
- **Validate Third-Party Security Integrity —** The incidents involving pCloud and Radware underscore the necessity of verifying the security posture of critical third-party service providers and managing the risks associated with supply chain compromises.

**Reference:** [Suspected Vietnam-Linked Hackers Target Southeast Asia in South China Sea Espionage Campaign](<https://thehackernews.com/2026/11/suspected-vietnam-linked-hackers-target.html>)

---

## Active Threats This Week

📌 **pCloud Password Manager Hit by Cyber Attack Involving Email Address Exposure and Login Attempts**

The Swiss-based password manager pCloud Pass reported a cyber attack that resulted in the exposure of a small number of user email addresses and subsequent login attempts. While users reported seeing unknown devices connected to their accounts, pCloud stated the incident was contained and that encrypted user data, such as passwords and notes, remained secure. The company noted that its cloud storage services were not affected by the intrusion.

**Reference:** [pCloud Password Manager Hit by Cyber Attack Involving Email Address Exposure and Login Attempts](<https://thehackernews.com/2026/11/pcloud-password-manager-hit-by-cyber.html>) 

---

📌 **Cybersecurity Firm Radware Compromised, Endangering Customer Cloud Storage**

A breach of cybersecurity company Radware has reportedly placed customer cloud storage environments at risk.

**Reference:** [Взлом ИБ-компании Radware поставил под угрозу облачные хранилища клиентов](<https://xakep.ru/2026/11/27/radware-attack>) 

---

📌 **Kubernetes Exploitation: Breaking the External Perimeter**

Reports indicate methods for breaching external perimeters to achieve Kubernetes cluster takeover.

**Reference:** [Куб наизнанку. Пробиваем внешний периметр и захватываем Kubernetes](<https://xakep.ru/2026/11/27/kubernetes-exploitation>) 

---

📌 **November Windows Updates Cause NTLM Authentication Issues**

The November Windows update cycle has reportedly introduced functional issues affecting NTLM authentication processes.

**Reference:** [Ноябрьские обновления Windows вызвали проблемы с NTLM-аутентификацией](<https://xakep.ru/2026/11/27/ntlm-problems>) 

---

📌 **Matters.AI Secures Major Indian Pre-Series A Round to Combat AI Data Risks**

Matters.AI has secured one of India's largest cybersecurity Pre-Series A funding rounds to address security risks associated with AI data.

**Reference:** [Matters.AI Lands India’s Largest Cybersecurity Pre-Series A Round to Fight AI Data Risks](<https://www.darkreading.com/cyber-risk/matters-india-cybersecurity-pre-series-ai-data-risks>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261128-1-1795880141805 -->
