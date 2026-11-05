---
title: "CISO Daily Digest: Chainalysis breach affects customer user data; some products suspended (20261105)"
description: "Chainalysis disclosed a breach affecting customer user data and suspending some products; CISA warned of active exploitation of a patched Apple flaw tied to APT29 info-stealing campaigns; and researchers found Zyxel GS1900 Patch 2 firmware still vulnerable to unauthenticated root command execution, requiring new Patch 3 firmware across ten switch models."
pubDate: 2026-11-05
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Chainalysis breach affects customer user data; some products suspended

iThome reports that blockchain analytics provider Chainalysis was breached, customer user data was affected, and some products had services suspended.

### 📌CISO Impact

- **Assess third-party and SaaS breach exposure —** After the Chainalysis incident, security leaders should inventory downstream dependencies on blockchain analytics and similar vendors, request customer-impact notifications, and prepare to reset credentials and review access for affected user data.
- **Prioritize Apple patching and verify exploit mitigations —** CISOs should confirm that all Apple devices, including older iOS, iPadOS, macOS, tvOS, watchOS, and Safari versions, are updated against CVE-2024-27834 and related actively exploited WebKit flaws, and monitor CISA KEV deadlines for federal alignment.
- **Update Zyxel switches and test compensating controls —** Network teams should identify GS1900 devices on Patch 2 or earlier firmware, apply the model-specific Patch 3 build, restrict management-interface network reachability, rotate default credentials, and inspect switches for compromise because vendor guidance does not confirm remediation of existing attacker access.

**Reference:** [區塊鏈分析業者Chainalysis遭入侵波及客戶使用者資料，部分產品暫停服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtOHFfdVlvcGFzd243UW1EQmhmbktoWTdBS0tGNnRBTEhUVVRXSlJIR2ttTmhhYTY2R09wYjI4MDZEc0FoUjJyVmQ2d3lIZw?oc=5>)

---

## Active Threats This Week

📌 **Hackers Exploit Patched Apple Flaw to Deliver Info-Stealing Malware, CISA Says**

CISA added CVE-2024-27834, a medium-severity Apple improper-authentication flaw patched in May 2024, to its KEV catalog after reports of active exploitation linked with moderate to high confidence to APT29; attackers used compromised legitimate sites, fake sites, and a Plerdy SEO Tracker supply chain attack to serve malicious JavaScript that profiles devices and deploys an info-stealer, and FCEB agencies are directed to patch by November 18, 2026.

**Reference:** [Hackers Exploit Patched Apple Flaw to Deliver Info-Stealing Malware, CISA Says](<https://thehackernews.com/2026/11/hackers-exploit-patched-apple-flaw-to.html>) 

---

📌 **Zyxel GS1900 Patch Fails to Block Zero-Day Exploit Allowing Root Command Execution**

Binarly found that Zyxel GS1900 switches running the earlier CVE-2026-7273 Patch 2 firmware remain vulnerable to an unauthenticated root command execution exploit through the web management interface, and Zyxel has issued 2.90 Patch 3 firmware for ten models to fix the separately tracked CVE-2026-107441; GreyNoise previously tied attacks to data collection from 996 switches around August 17, with 564 using factory-default credentials, but neither report confirms the exploited switches were patched or that CVE-2026-107441 itself has been exploited in the wild.

**Reference:** [Zyxel GS1900 Patch Fails to Block Zero-Day Exploit Allowing Root Command Execution](<https://thehackernews.com/2026/11/zyxel-gs1900-patch-fails-to-block-zero.html>) 

---

📌 **Apple to Start Scanning Publicly Shared iCloud Photos and Files for Harmful Content**

Apple plans to check publicly shared iCloud content starting with iOS 27.3, iPadOS 27.3, macOS 27.3, and visionOS 27.3, applying to links shared with "Anyone with the Link." Those shared items become accessible to anyone holding the link, including Apple, and Advanced Data Protection's end-to-end encryption does not apply. Apple may remove or delete harmful content and take account action, including blocking accounts or involving law enforcement. It remains unclear what prompted the change, what counts as harmful content, whether prior links are affected, or when the updates roll out later this December.

**Reference:** [Apple to Start Scanning Publicly Shared iCloud Photos and Files for Harmful Content](<https://thehackernews.com/2026/11/apple-to-start-scanning-publicly-shared.html>) 

---

📌 **Multiple AI Development Platforms Hit by Security Incidents as Stolen Keys Are Used to Bulk-Call AI Models**

iThome reports consecutive security incidents across multiple AI development platforms, with stolen keys used to make high-volume calls to AI models.

**Reference:** [多家AI開發平臺接連發生資安事件，遭竊金鑰被用來大量呼叫AI模型 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mbXJkZjRkWXFvcmJUblFNdHloY2pVZk50ZmVnWENkcDdYNjFWYnZVVW9zYUZfZnhPd213NGtGS1NQUmx6RmR3WDBvN0ozQQ?oc=5>) 

---

📌 **OpenAI AI Pipeline Generates 948 Linux Root Escalation Exploits in 30-Hour Run**

OpenAI detailed an agentic pipeline using an upcoming cyber-focused AI model that dynamically reproduced 1,724 Linux kernel vulnerabilities in mid-October 2026 within 30 hours, producing 948 working local privilege escalation exploits for a commonly used Linux distribution plus 291 information-leak proofs of concept. The run cost $1,213,430 in API credits, or $1,279 per local privilege escalation exploit, and OpenAI says at least 10 novel exploitation techniques were discovered and used. Human researchers review findings before reporting them to maintainers, and OpenAI warns that access to a low-privileged account on an unpatched operating system should be treated as functionally equivalent to root access for well-resourced threat actors.

**Reference:** [OpenAI AI Pipeline Generates 948 Linux Root Escalation Exploits in 30-Hour Run](<https://thehackernews.com/2026/11/openai-ai-pipeline-generates-948-linux.html>) 

---

📌 **Chinese hackers exploit Zyxel GS1900 switch zero-day vulnerability and steal sensitive data**

iThome reports that Chinese hackers exploited a zero-day vulnerability in Zyxel GS1900 series switches and stole sensitive data. The report is headline-only.

**Reference:** [中國駭客利用Zyxel GS1900系列交換器零時差漏洞並竊得敏感資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9oc205cUVHQ1dKVFJCeGRGSWFQRzIxZ3otbHp4Sk04NnF6QjFKRkttOU9SeG5hRF9Hc1d1QlBTT0hGZWViTHZjUTNMSnc3UQ?oc=5>) 

---

📌 **Hackers spent several months preparing for Binance hack and conducted fake interviews**

Xakep reports that hackers spent several months preparing for a Binance hack and conducted fake interviews as part of the operation. The report is headline-only.

**Reference:** [Хакеры несколько месяцев готовились к взлому Binance и проводили фальшивые собеседования](<https://xakep.ru/2026/11/05/binance-contagious-interview>) 

---

📌 **Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root**

A flaw in APT allows a man-in-the-middle attacker to swap a verified package for a malicious one when APT retries a failed download, executing code as root. Debian, Ubuntu, and APT developers published advisories on November 4, 2026, assigning CVE-2026-109518. Debian has released fixed versions, and Ubuntu published new APT builds for 22.04 LTS, 24.04 LTS, 26.04 LTS, and 26.10. Older Debian 11 and Ubuntu 20.04 systems are not exposed by default unless users enabled Acquire::Retries. None of the advisories describe confirmed exploitation or provide a workaround for systems that cannot update.

**Reference:** [Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root](<https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html>) 

---

📌 **Mao Bao e-commerce website attacked by unknown parties, reported to authorities and affected customers notified**

iThome reports that Mao Bao’s e-commerce website was attacked by unknown parties, the incident was reported to the competent authority, and affected customers were notified.

**Reference:** [毛寶電商網站遭不明人士攻擊，已通報主管機關並通知受影響顧客 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBrUEg3Q2hzUDhTc3BCZ3dGYXpYYXBsQ3ZGYjBrY25rQmdET2ZLU3lkUUNFR080UVFDVWFuQklzU1lrWndjNmluZU9vNnZGZw?oc=5>) 

---

📌 **Russian hacker group APT29 launches large-scale watering hole attacks, steals iOS and Android device credentials and data**

iThome reports that Russian hacker group APT29 carried out large-scale watering hole attacks targeting iOS and Android devices to steal credentials and data.

**Reference:** [俄羅斯駭客APT29發動大規模水坑式攻擊，竊取iOS與Android裝置帳密及資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBQR0FmVzdTbFZBZS04TzhDcGtUQnpmVzlmTHdNQTBEUEIwTHBGZm96ajVNdk5wWnZLRTBpLTlFRXBYWkNIWEJpRUFnU19wUQ?oc=5>) 

---

📌 **CERT-In flags AI-driven attacks as backdoored ARTEX exposes 62 consoles to root access**

CERT-In disclosed that an AI-assisted threat actor tracked as Crafty Falcon is targeting organizations in India's banking, financial services, and insurance sectors using publicly available AI-driven offensive tools including ARTEX, PentAGI, Cairn, and CyberStrikeAI. The agency described the activity as active and ongoing, with attacks also hitting cryptocurrency exchanges and digital asset service providers, resulting in theft of keys and funds. Initial access vectors include stolen hard-coded API tokens, supply chain compromise of source code repositories, plaintext credentials in configurations, and applications lacking multi-factor authentication. Post-exploitation actions include deleting logs, tampering with endpoint security tools, targeting cloud infrastructure and non-production environments, reverse-engineering codebases, executing unauthorized API calls, running micro-value test transactions, and exploiting file-upload and deserialization chains to deploy web shells. Separately, a backdoored ARTEX Docker image pulled from Docker Hub grants an unauthenticated root shell via a hidden verifyCaptcha() function in the login handler. As many as 62 ARTEX consoles served the backdoored build between November 2 and 4, 2026, with 26 in the U.S., 17 in Hong Kong, and seven in China; 1,645 hosts were found serving the ARTEX console as of November 4, 2026.

**Reference:** [CERT-In Flags AI-Driven Attacks as Backdoored ARTEX Exposes 62 Consoles to Root Access](<https://thehackernews.com/2026/11/backdoored-docker-image-for-artex-ai.html>) 

---

📌 **Google and Industry Allies Disrupt 1.3 Million-Device XCPE Botnet Linked to Device Manufacturer**

Google's Threat Intelligence Group, alongside partners including Lumen, HUMAN Security, and Japan's National Police Agency, has taken legal and technical action to disrupt the XCPE botnet, an operation involving over 1.3 million compromised Android set-top boxes. Google attributed the campaign with high confidence to device manufacturer Videostrong Technology Co., reporting that the company deliberately pre-installed the XCPE backdoor into multiple device models since at least 2024. The backdoor allowed Videostrong to monetize device access by renting hardware to criminal affiliates, who deployed secondary modules for ad fraud, enrolled endpoints into residential proxy networks, and delivered additional malware before the takedown dismantled the supporting control domains and command-and-control infrastructure.

**Reference:** [Google, Partners Disrupts 1.3 Million-Device-Strong XCPE Botnet](<https://www.darkreading.com/endpoint-security/google-13-million-device-strong-xcpe-botnet>) 

---

📌 **European Refrigeration Systems and French Blood Bank Targeted in Cyberattacks, Prompting ENISA Warning**

According to reporting from iThome, multiple cold storage and refrigeration facilities across Europe alongside a French blood bank have been targeted by cyberattacks, prompting the European Union Agency for Cybersecurity (ENISA) to urge organizations to bolster their defenses. Organizations operating industrial cooling systems, medical storage, and critical health infrastructure should review perimeter controls, verify the isolation of operational technology from corporate networks, and monitor for unauthorized access attempts.

**Reference:** [歐洲冷凍冷藏系統接連遭駭，法國血庫也遭攻擊，歐盟網路安全局呼籲加強防護 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1abjY1YlppVWlxNEVoLXBadjBuRzJIa2J3d0I4QlFybEJ0OGFndi1ISGJnVkV0Vjd4WnQ2RnRrSmZHc1lNU2ZYVTZmbUprQQ?oc=5>) 

---

📌 **Cotton Field Outsourced E-Commerce Platform Blocks Abnormal Access Incident**

Taiwanese organic retailer Cotton Field experienced a cybersecurity incident involving its outsourced e-commerce platform, iThome reports. While anomalous data access attempts were successfully blocked, the full scope and impact of the incident remain under investigation. Organizations relying on third-party digital commerce platforms should ensure supplier visibility, audit external access logs, and enforce strict API and identity protections to mitigate supply chain exposure.

**Reference:** [棉花田委外購物平臺發生資安事件，已阻擋異常資料存取行為，影響範圍仍待調查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4zVktadTJJdnJVNkdrRjl0WGtrQ3ZLVXhlNm5xR2pmVmZQcHFHaDEyR052T1ZoT1RGbTBxZkpWT2xmZjlORFFEWmJRdHo3UQ?oc=5>) 

---

📌 **Unusual data access found on outsourced vendor system serving Wangpin's Wanfresh shopping website**

iThome reports that the outsourced vendor system supporting Wangpin's Wanfresh shopping website experienced abnormal data access. The report does not confirm whether data was stolen, exposed, or how many customers may be affected.

**Reference:** [王品旗下萬鮮購物網站服務委外廠商系統出現異常資料存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1KNDQ1SHkxYnFiRXBGYk1vRGdnVEN0b1U3OGtmT3BVRWFuSWtVS1AxV3dqOExYbTBnX2hkNkdvRGh1Vlp6ZzdyN1hDc3dIdw?oc=5>) 

---

📌 **Japanese Ministry of Foreign Affairs website hacked, up to 3,600 personal records potentially leaked, ministry says non-sensitive diplomatic communications unaffected**

iThome reports that the Japanese Ministry of Foreign Affairs website was hacked and up to 3,600 personal records may have been exposed. The ministry emphasized that non-sensitive diplomatic communications were not affected.

**Reference:** [日本外務省網站被駭3,600筆個資恐外洩，但強調非機要外交通訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5rYjZFWlUwUndiSmczaEtFREN5Mjh4NGQ4dS12VFZVNGZOc2V6TUpsWGZCOUhheUVnbnhlT2VuaFp6WGpUVEUyRFlLenh6UQ?oc=5>) 

---

📌 **French bank Crédit Mutuel Arkéa hit by cyberattack, attackers reportedly transferred over 118 million euros**

iThome reports that Crédit Mutuel Arkéa suffered a cyberattack and attackers reportedly transferred more than 118 million euros. The report does not confirm whether the funds were recovered or which systems were compromised.

**Reference:** [法國銀行Crédit Mutuel Arkéa遭網攻，傳逾1.18億歐元遭攻擊者轉走 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE41aG1faWw4ZEtiYkJORS1keHlfWldtcllvUUI5RVQyTUVYSXNGTVR6NlMtZHpxVWJ3eFZCRGh6RW4yZFoxcHd4YXAtOUthZw?oc=5>) 

---

📌 **Popular Game Goddess of Victory: Nikke Suffers Supply Chain Attack, Player Computers May Be Infected with Information-Stealing Malware**

iThome reports that the popular game Goddess of Victory: Nikke experienced a supply chain attack, and player computers may have been implanted with information-stealing malware.

**Reference:** [熱門遊戲《勝利女神：妮姬》遭遇供應鏈攻擊，玩家電腦恐被植入竊資軟體 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9jQlNTZHh4OExIc0xMSVhWaC02X2tfX2I2b3dfNUQ5LWtVSWhTNHBiRDJNOF85d1lHeG1TWGVhblQzRWp6QmJhdnFIc1FFZw?oc=5>) 

---

📌 **Debian and Ubuntu Patch High-Risk APT Package Vulnerability, Man-in-the-Middle Can Replace Packages to Obtain Root Privileges**

iThome reports that Debian and Ubuntu patched a high-risk APT package vulnerability that could allow a man-in-the-middle to replace packages and gain root privileges.

**Reference:** [Debian、Ubuntu修補高風險APT套件漏洞，中間人可替換套件取得root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA4QmFVVDNxaDQyVC1Bb0tfVGhmUXZuZjNIYkpnMEd0cDlqR1M1TWVRdE9GREpCbTdvTEVEMXBvTS13TmRUTDk4OHRiRlN4dw?oc=5>) 

---

📌 **5 Active Cyber Threats That Put US Enterprises at Risk in October 2026**

The Hacker News reports five active cyber threats targeting US enterprises in October 2026: SkyW4lker device-code phishing against Microsoft 365 corporate accounts, fake AI campaigns stealing credentials and browser session cookies, GeorgeGinx device-code phishing targeting government banking healthcare and IT organizations using Adobe Shared Links, WKLP Python infostealer and RAT disabling Microsoft Defender for persistent remote access against US and French government organizations, and Mir0Auth Microsoft 365 token theft via phishing emails with malicious PDF attachments redirecting to fake DocuSign pages.

**Reference:** [5 Active Cyber Threats That Put US Enterprises at Risk in October 2026](<https://thehackernews.com/2026/11/5-active-cyber-threats-that-put-us.html>) 

---

📌 **Lixiang car owners again face account hacking and extortion**

Russian outlet Xakep reports Lixiang vehicle owners are again facing compromised accounts and extortion attempts.

**Reference:** [Владельцы автомобилей Lixiang снова столкнулись со взломом учетных записей и вымогательством](<https://xakep.ru/2026/11/05/lixiang-blackmail>) 

---

📌 **Known vulnerabilities in Apple products actively exploited - iThome**

iThome reports that known vulnerabilities affecting Apple products are under active exploitation.

**Reference:** [蘋果旗下產品已知漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBSbmEwQkJUQlgxNG4xNkQtTGppTnlxeGtzQ2RUbG4yck1NRlJsQVkyLWxlZHBoYzllWEdUMXRBaGY4YkE1RVlGdDVpYVdjdw?oc=5>) 

---

📌 **Security Daily, Nov 5: France's national blood agency refrigeration equipment hit by cyberattack, temperature controls altered at 3 facilities - iThome**

iThome reports that refrigeration equipment at France's national blood agency was hit by a cyberattack on Nov 5, with temperature controls altered at three facilities.

**Reference:** [【資安日報】11月5日，法國國家血液機構冷藏設備遭網路攻擊，3處設施溫度控制遭竄改 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE44aEwwejBzaGZ1SFUwWEN0dHhrYVF1U2x1cVdnNF9pdUpES1lFd2U3dVRlbWtzQmJ2c3owRVM3cDZzSUs5VjVxZWhNSWU0Zw?oc=5>) 

---

📌 **SonicWall Won't Patch EoL GMS Flaws That Could Expose Files, Alter Database Records**

SonicWall disclosed two vulnerabilities in Global Management System versions 9.5.2 and earlier and will not patch them because the product has reached end of life. CVE-2026-109593, CVSS 9.1, is an unauthenticated file read vulnerability that could expose internal GMS files to an attacker with network access. CVE-2026-109594, CVSS 6.8, is a post-authentication SQL injection that could allow an authenticated attacker to access or modify database information under specific conditions. SonicWall advises affected organizations to upgrade to SonicWall Network Security Manager.

**Reference:** [SonicWall Won't Patch EoL GMS Flaws That Could Expose Files, Alter Database Records](<https://thehackernews.com/2026/11/sonicwall-wont-patch-eol-gms-flaws-that.html>) 

---

📌 **Cisco patches UCS Central remote code execution vulnerability**

iThome reports that Cisco has patched a remote code execution vulnerability in UCS Central.

**Reference:** [Cisco修補UCS Central遠端程式碼執行漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9mVFdxek1nODVDYVhoTi1BX2NaMWgxdnlobFVvdFVjSi1RTVF6ZWY3aFM0VjlQMEZaTXV0YnFUZlRQN2hJN3BHbDNJVlRWUQ?oc=5>) 

---

📌 **Zyxel GS1900 series switch out-of-bounds write vulnerability allows unauthenticated attackers to execute operating system commands**

iThome reports that Zyxel GS1900 series switches contain an out-of-bounds write vulnerability that may allow unauthenticated attackers to execute operating system commands.

**Reference:** [Zyxel GS1900系列交換器存在越界寫入漏洞，未經驗證攻擊者可執行作業系統命令 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8zeU1FMFJUUUU5T3o5RXN4TEd1UzFuaWpCVGMxVGZTMVZUVEY5QW5odEZubm9Ra2ttam9iWE1rRXNVeXZsZVNpdzF6MUpVdw?oc=5>) 

---

📌 **Bank SinoPack confirms abnormal transfers were hacker attack, exploiting supplier security configuration vulnerability**

iThome reports that Bank SinoPack confirmed unusual transfers resulted from a hacker attack exploiting a security configuration vulnerability in a supplier's systems. The report does not disclose confirmed victim counts, funds affected, or whether the compromise extended beyond the supplier.

**Reference:** [永豐銀行異常轉帳確認為駭客攻擊，供應商安全設定漏洞遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBXZ1lIUTFya21wUEFHVS1CUmRySnFmSzJPTUVFZFZ4WGhVNENKZEtaNWxDYVc0X3lGejZFTnkwbnF6RWRpUEpkVUVCSkh2dw?oc=5>) 

---

📌 **AI-driven attacks and attacks targeting AI systems surge, with over half of nearly 2,000 global executives unable to respond**

iThome reports that AI-driven attacks and attacks targeting AI systems are increasing, and over half of nearly 2,000 global executives surveyed say they cannot cope. No specific incidents, affected organizations, or technical details are provided.

**Reference:** [AI驅動攻擊與鎖定AI系統的攻擊來勢洶洶，近兩千位全球企業高層有超過一半坦承無法招架 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE84RU01UEdTbjBrVjhPT3RCUW5SclBkdmhKSUlnaXZzbkQyZURUYzN0VTJjT2c0dk1fNDhrNnZRNm4yVTFibFQtd3BIWGlkQQ?oc=5>) 

---

📌 **Pu Taiwan Grape King online mall outsourced vendor database accessed abnormally, member orders and personal data possibly leaked**

iThome reports that an outsourced vendor database for Pu Taiwan Grape King's online mall was abnormally accessed, with member orders and personal information possibly exposed. The report does not confirm the number of affected records, the attack method, or whether data was actually exfiltrated.

**Reference:** [葡萄王線上商城委外廠商資料庫遭異常存取，會員訂單及個資疑似外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ldDZ3QmpUQW1vNkZnZ09hMzFxOS1BV1JaVm1EVG5zR3JkSzBycGlSTUxkZndMRU9yLXJZVmFTUmRqNFl3RnBJZ0xHTHRZZw?oc=5>) 

---

📌 **Researchers Uncover Prompt Adware Hidden in OpenAI Codex Jailbreak Toolkit**

Check Point Research disclosed a jailbreak bundle named Haiou that modifies OpenAI Codex configuration files to inject persistent advertisements for the third-party gateway zz.aiapi2025\[.\]top into agent responses. Trigger words include greetings such as "Seagull," "hi," "hello," "hey," "yo," and "are you there?" The bundle also installs penetration-testing, cracking, and reverse-engineering skills, and has been bundled in the Codex-X visualization tool. The GitHub repository haiou-codex had 403 stars and 77 forks as of reporting. Check Point warned that third-party AI skills and configurations can introduce undesirable behavior into enterprise AI agents and become part of the supply-chain trust chain.

**Reference:** [Researchers Uncover Prompt Adware Hidden in OpenAI Codex Jailbreak Toolkit](<https://thehackernews.com/2026/11/researchers-uncover-prompt-adware.html>) 

---

📌 **French National Blood Agency Refrigeration Equipment Hit by Cyberattack, Temperature Controls Tampered at Three Facilities**

iThome reported that refrigeration equipment at the French National Blood Agency was subjected to a cyberattack, with temperature controls altered at three facilities. No further technical details or confirmed patient impact were provided in the headline.

**Reference:** [法國國家血液機構冷藏設備遭網路攻擊，3處設施溫度控制遭竄改 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE93OWVWakhoZ0tXRXNmbnhCRFpEbTAwaTFjMXhXQ1pHX1hjTWc5bWpiVi13ZG1GV2pZYjl4VkdxMHRmY2U0Y01HNlpRYXdnZw?oc=5>) 

---

📌 **Critical Rails Bug Threatens to Derail Vulnerable Servers**

Dark Reading reported a critical Ruby on Rails bug affecting vulnerable servers. No specific vulnerability details, versions, or confirmed exploitation were included in the headline.

**Reference:** [Critical Rails Bug Threatens to Derail Vulnerable Servers](<https://www.darkreading.com/application-security/critical-rails-bug-derail-vulnerable-servers>) 

---

📌 **iThome reports on Wan-Hsien**

iThome has published a story about Wan-Hsien.

**Reference:** [萬鮮 - iThome](<https://news.google.com/rss/articles/CBMiXkFVX3lxTE03a1VhWW13cjlDS2xRaW5EaUd4YmdkN3QzSGlOUzg3clRIczE5V0RSWDVtdHIwdkx6YklkbTVjUVZ4c1RRekFXYlN5ZldBcU1YdmlvUXR4d0NsZnc3NXc?oc=5>) 

---

📌 **Developers Open Pre-Orders for Flipper One**

Xakep reports that developers have opened pre-orders for Flipper One.

**Reference:** [Разработчики открыли предварительные заказы на Flipper One](<https://xakep.ru/2026/11/05/flipper-one-coupons>) 

---

📌 **iThome reports on Shun-Li Smart**

iThome has published a story about Shun-Li Smart.

**Reference:** [順立智慧 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE9ESm16YVFVVjBhWFZBMFdvVzI1Z2lEdkFRZmhfR3NWM0dWSGJ6T09XNTVpb0lMQnEzMWVmS21vck50dGNOalBERnhCOGpNVmRka3FBQkQxc2JZaU4yR0twV0ZKZ3lXTVQ3Q2txWG9Jc2V1cFNVUGc?oc=5>) 

---

📌 **France National Blood Service EFS**

iThome reports on France's National Blood Service (EFS), but the RSS feed supplies only a headline with no additional details.

**Reference:** [法國國家血液機構（EFS） - iThome](<https://news.google.com/rss/articles/CBMiwgFBVV95cUxPbVpVcGNyUTlOUU5jMmlXVEQ5b0ZtZk9Yc2pLcXVMU0VoXzdoQlJxSjBfaENwX3cyQUZXSE9MMENJbk1DYVMtekxHTHdHS3hhR0ZHRldId19wRHBXaE5OUFBkaDNxNWhhU0Juc3FqVFNGdmo2QkZXUUpkWVJXRXRhc1lucVRNZ3RvMk5keG5uMTVBUm1WUTltajZ0bXFUTFpLMkYzWktsQV8zTVRWNkhxVzljMXZFTHhzV0hjWllTeC0zQQ?oc=5>) 

---

📌 **Japan Ministry of Foreign Affairs**

iThome reports on Japan's Ministry of Foreign Affairs, but the RSS feed supplies only a headline with no additional details.

**Reference:** [日本外務省 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxPdjhnWi10ai15Y1BUcGFPUVFZQjlfVGZCNEEzUmxtV21zaTNQdmQzMGJweVh2ZjNiRkcxQm1oRGdKckRqblRkTDgydm44ZE55cVY5MmtUaFQ3Tm9YcHhBVlZHVVgzVU1CMnVrc2NiUWVjVUg5eWNSZjIxWGx1Yk1STjR3?oc=5>) 

---

📌 **Want to Rent an Internet Address at the White House?**

KrebsOnSecurity reports that an internet address block assigned to the White House is available to rent, highlighting how IP address space associated with sensitive government locations can be leased and potentially misused.

**Reference:** [Want to Rent an Internet Address at the White House?](<https://krebsonsecurity.com/2026/11/want-to-rent-an-internet-address-at-the-white-house>) 

---

📌 **Coolworld - iThome**

iThome reports on Coolworld without additional details available in the headline-only source.

**Reference:** [Coolworld - iThome](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE1aR3hud0RucnNuc2hDQ2FFdml1anhnRmhCa0Vub0d5cHI3UkZBTXJOSWdQT01LeFdWNUd1ejA0R0xKMU9TdGpBQ05ZeW0wWUY1THc?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261105-1-1793902892249 -->
