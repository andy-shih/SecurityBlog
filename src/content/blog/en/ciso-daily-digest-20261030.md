---
title: "CISO Daily Digest: Binance Suffers Security Breach Affecting $6.3 Billion in Assets, Nearly $3 Billion Frozen (20261030)"
description: "Partial digest: completed summaries and original sources are shown; some translations are unavailable."
pubDate: 2026-10-30
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Partial digest: completed summaries and original sources are shown; some translations are unavailable.

### 📌 Binance Suffers Security Breach Affecting $6.3 Billion in Assets, Nearly $3 Billion Frozen

Cryptocurrency exchange Binance disclosed a security incident on October 30, 2026, impacting approximately $6.3 billion in assets, with nearly $3 billion frozen on-chain by stablecoin issuers and blockchain security councils. Initial investigation points to a compromised DevOps engineer's laptop that gave attackers access to a service container, enabling unauthorized withdrawal transactions without a private key leak. Tether, Circle, Ripple, and World Liberty Financial froze about $2.67 billion in stablecoins, while the Arbitrum Security Council froze roughly $30 million in ETH and ARB tokens.

Blockchain intelligence firms Chainalysis, TRM Labs, and Elliptic attributed the heist to North Korea's TraderTraitor group with high confidence, citing similarities to the February 2025 Bybit hack and April 2026 KelpDAO exploit. Attackers prepared 50 pre-signed authorizations in advance and executed them in a single burst transaction moving 167,464 ETH and 63 tokens including 1.615 billion USDT. Funds from the Binance breach commingled with those from the previous Bitget exploit at the same Ethereum address, and the attack used Tornado Cash funding, staged preparation, and batch-signed transactions characteristic of North Korean operations.

Binance stated it will cover all losses from its SAFU fund and corporate reserves, with withdrawals expected to resume within 48 hours after a security revamp of the withdrawal service. The exchange acknowledged uncovering additional breach points beyond the compromised laptop and continues working with law enforcement and blockchain analytics firms to trace and recover the remaining $2.4–3.3 billion still controlled by the attacker across roughly 43 wallet addresses. Elliptic noted deviations from typical North Korean laundering speed and methods, urging caution in attribution despite strong technical overlaps.

**Source:** [Binance Suffers Security Breach Affecting $6.3 Billion in Assets, Nearly $3 Billion Frozen](<https://thehackernews.com/2026/10/binance-suffers-security-breach.html>)

### 📌CISO Impact

- **DevOps workstation compromise enables multi-billion dollar theft —** The Binance breach originated from a single compromised DevOps engineer laptop that granted access to a service container and withdrawal signing system. CISOs should enforce hardware-backed authentication, strict network segmentation for DevOps environments, and continuous behavioral monitoring of privileged workstations. Implement just-in-time access for critical signing operations with multi-party approval workflows.
- **Pre-signed transaction batches reveal operational security gaps —** Attackers prepared 50 pre-signed authorizations in advance, exploiting nonce prediction in the hot wallet's sequential transaction counter. CISOs managing crypto or high-value transaction systems should implement nonce randomization, rate-limited signing with human-in-the-loop verification for large batches, and real-time anomaly detection on signing patterns. Review signing infrastructure for time-bounded credential use.
- **Cross-incident fund commingling enables attribution and tracing —** Blockchain analytics linked the Binance hack to the prior Bitget exploit through shared destination addresses and Tornado Cash funding patterns. CISOs should integrate on-chain monitoring and threat intelligence feeds that track illicit fund flows across incidents. Coordinate with blockchain analytics providers and law enforcement for rapid freeze requests when addresses overlap with known threat actor infrastructure.

---

### 📌 CISA Adds Actively Exploited GitLab RCE and Cisco Firewall DoS Flaws to KEV

CISA added two actively exploited vulnerabilities to its Known Exploited Vulnerabilities catalog on October 30, 2026: CVE-2026-97229 (CVSS 10.0), an integer overflow in GitLab CE/EE allowing unauthenticated remote code execution via crafted CI/CD regex, and CVE-2026-76418 (CVSS 8.6), a NULL pointer dereference in Cisco Secure Firewall ASA/FTD causing denial of service. The GitLab flaw was exploited in failed attempts against Alpine Linux's instance on October 20–21 and 25–26, 2026, where crafted CI configurations crashed worker processes eight times. Federal agencies must apply fixes by November 1, 2026.

**Source:** [CISA Adds Actively Exploited GitLab RCE and Cisco Firewall DoS Flaws to KEV](<https://thehackernews.com/2026/10/cisa-adds-actively-exploited-gitlab-rce.html>)

---

### 📌 ThreatsDay: Critical Firewall Flaws, Banking Trojans Rented, Weaponized PDF, Token Theft + 26 More Stories

The October 29, 2026 ThreatsDay bulletin covers 29 security developments including: Wordfence reporting no confirmed WordPress compromises from PHP2Shell (CVE-2026-109618/109619) despite ongoing exploitation attempts across 5+ million sites; Hudson Rock's FortiBleed 2.0 revealing 40,573 exposed secrets from 1,703 FortiGate sources; domain shadowing campaigns placing gambling content under school and government domains; Bank of America warning customers against sharing credentials with AI agents; a patched Microsoft Authenticator flaw (CVE-2026-80097) allowing zero-permission token theft on Android; Cequence tracking 32 fake AI bots scraping credentials from financial, retail, telecom, energy, and software sectors; a China-linked breach of a Fiji organization in July–August 2026; Huntress linking camera management software (WpcMon.exe) DLL sideloading to enterprise intrusions; a 68 GB Philippine government data theft with transfer logs left exposed; Cohere alleging Alibaba's Qwen model attempted data exfiltration to China; NIST releasing post-quantum cryptography migration guidance; SOCRadar exposing an AI-assisted n0n ransomware workspace with 23 victims across 14 countries; Sweden blocking government access to ChatGPT and Claude; JFrog and SafeDep uncovering 42 hijacked GitHub repositories deploying npm supply-chain payloads; the MR ROBOT Android banking malware-as-a-service targeting Indian banks; Huntress reporting MDM platform abuse (Hexnode, Rippling) for persistent remote access; active exploitation of CVE-2026-42589 (Gotenberg RCE) from Japanese IPs; Discord indexing Discoverable Server messages in web search from mid-December 2026; The Gentlemen RaaS claiming 800+ victims with EDR-killing tools; Unsloth model loader RCE (CVE-2026-93348); an unauthenticated root RCE in a U.S. EAC web calculator; the DarkCore RAT with session-hijacking browser; Cisco Talos detailing the AI-enabled NIK C2 framework; a weaponized PDF delivering Sirius backdoor via FedEx invoice lure; Flare analyzing AI's impact on ransomware economics; ScarlettGroup emerging as a data-extortion actor; and StealC evolving into the Stadia RAT while macOS stealers (ICMacOS, Aokigahara) expand to target AI application credentials.

**Source:** [ThreatsDay: Critical Firewall Flaws, Banking Trojans Rented, Weaponized PDF, Token Theft + 26 More Stories](<https://thehackernews.com/2026/10/threatsday-critical-firewall-flaws.html>)

---

### 📌 Hackers Actively Exploit Highly Critical Drupal Commerce Core Authorization Bypass Flaw

Drupal warns threat actors are actively exploiting a highly critical authorization bypass in Commerce Core, missing protection for certain routes and entity fields that may financially impact vendors. Versions 0.0.0 to 2.41 and 3.0.0 to 3.3.13 are affected; users should upgrade to 3.3.13 or 8.x-2.41 depending on their branch. No details on campaign extent or activity were provided.

**Source:** [Hackers Actively Exploit Highly Critical Drupal Commerce Core Authorization Bypass Flaw](<https://thehackernews.com/2026/10/hackers-actively-exploit-highly.html>)

---

### 📌 Trezor Warns of Suspected Hardware Implant in One of Its Wallets Sold by CryptoBilis

A customer in Indonesia reported a suspected hardware implant in a Trezor Safe 5 purchased from CryptoBilis via Tokopedia in August 2026. The extra circuit board allegedly reads the recovery phrase and transmits it over a mobile network when the wallet is plugged in. Trezor has not examined the device but is urging all CryptoBilis buyers since March 2026 to move funds to a new wallet with a new recovery phrase and to keep the affected device for lab analysis.

**Source:** [Trezor Warns of Suspected Hardware Implant in One of Its Wallets Sold by CryptoBilis](<https://thehackernews.com/2026/10/trezor-warns-of-suspected-hardware.html>)

---

### 📌 Linux Kernel TCP Flaw With 9.8 CVSS Score Affects Ubuntu, Red Hat and Other Distributions

CVE-2026-98432 is a use-after-free race condition in Linux kernel IPv4 TCP connection setup rated 9.8 by the kernel CVE team. Ubuntu and RHEL had no fixed kernel as of October 29, while Debian, Oracle Linux, SUSE, and Amazon Linux have shipped fixed packages for some kernels. No in-the-wild attacks have been reported, and Anthropic says its AI model wrote a root exploit requiring an MPTCP listener, though the bug is not specific to MPTCP.

**Source:** [Linux Kernel TCP Flaw With 9.8 CVSS Score Affects Ubuntu, Red Hat and Other Distributions](<https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html>)

---

### 📌 BYOD cyberattack diverts ambulances and cancels classes at University of New Mexico health center

Fortra reports that a BYOD-related cyberattack disrupted operations at the University of New Mexico health center, diverting ambulances and canceling classes.

**Source:** [BYOD cyberattack diverts ambulances and cancels classes at University of New Mexico health center](<https://www.fortra.com/blog/byod-cyberattack-diverts-ambulances-and-cancels-classes-university-new-mexico-health-center>)

---

### 📌 Rakuten reports two travel sites breached, exposing personal data of 3.54 million users; Taiwan site unaffected

iThome reports that two Rakuten travel websites were hacked, leaking personal data belonging to 3.54 million users, while the Taiwan site was not affected.

**Source:** [日本樂天2個旅遊網站遭駭外洩用戶個資354萬，臺灣網站不受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ZVmN0UnE3VXNNNWJQZXBHcjlwQWhxRWt2QzZubEtfb0ZPbjhubU1GX2s5bmVpZjlVZGJzNG1ydUNIUFpzT2tsdEtFVW9uZw?oc=5>)

---

### 📌 Binance exchange suffers record theft of $6.3 billion USD

Xakep reports that cryptocurrency exchange Binance experienced a record theft of 6.3 billion U.S. dollars.

**Source:** [У криптобиржи Binance похитили рекордные 6,3 млрд долларов США](<https://xakep.ru/2026/10/30/binance-hacked>)

---

### 📌 Japan Airlines third-party reservation system accessed without authorization, affecting approximately 92,000 passenger records

iThome reports that Japan Airlines' third-party reservation system was accessed without authorization, affecting approximately 92,000 passenger records.

**Source:** [日本航空第三方訂位系統遭未授權存取，約9.2萬名旅客資料受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9vbHNkcmlhTml2dUJLTDBlZEVPRVd3YVNFeTBNa0FjME1CODc4ZWx0YnBUTXRIU1lrcmh2MkpUTjZpc3dxQWVhOFBXM3BDZw?oc=5>)

---

### 📌 Palo Alto Networks warns retail sector faces multiple cyber threats ahead of year-end shopping peak season

iThome reports Palo Alto Networks warning that the retail sector faces multiple cyber threats ahead of the year-end shopping peak season.

**Source:** [年末購物旺季將至，Palo Alto Networks示警零售業面臨多重網路威脅 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0yeGZKNW5XbnFXX3YzZTdNbW1VTkxLb0ZPZUlSX3R1T0s4UHl2Q2JPNjB6cDh3ZnlJTXE1VHR2bWZxVDNvVFp6el9PekZhZw?oc=5>)

---

### 📌 FamilyMart mobile app some member data illegally extracted, outsourced vendor 91APP database hit by automated attack

iThome reports that some FamilyMart mobile app member data was illegally extracted after an outsourced vendor 91APP database was hit by an automated attack.

**Source:** [全家行動購部分會員資料遭非法擷取，委外廠商91APP資料庫遭自動化攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5XSGhVa2VnQ3YxS0pzQ3NrMUV3UTVwdzNzMHQzSVNCOU1JLWpZdktvUURwZktmRTF0WngycWs1Z3dCRlB1T3BidGdLQzJoZw?oc=5>)

---

### 📌 Cisco patches actively exploited denial-of-service vulnerability in firewalls

iThome reports Cisco has patched a denial-of-service vulnerability in its firewalls that is actively being exploited.

**Source:** [思科修補防火牆已遭積極利用的阻斷服務漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1lV0JDTm5Eb1l0RGpjWjdDRWpqcGwzQXBoa0RhM2FHNWt1QVZERWNfUFBhY3R0R0dBbW1aczRxWXprVjdxMUwySV9JaUxiZw?oc=5>)

---

### 📌 Hackers leak personnel data of 41,000+ Homeland Security staff, including ICE and border agents

Bitdefender reports attackers have leaked personal data belonging to more than 41,000 U.S. Department of Homeland Security employees, including ICE and border agents.

**Source:** [Hackers leak personnel data of 41,000+ Homeland Security staff, including ICE and border agents](<https://www.bitdefender.com/en-us/blog/hotforsecurity/hackers-leak-41-000-dhs-staff-data>)

---

### 📌 DEVCORE researcher discloses Pwn2Own Edge attack chain chaining five vulnerabilities to bypass browser protections

iThome reports a DEVCORE researcher disclosed an Edge attack chain demonstrated at Pwn2Own that chains five vulnerabilities to break browser protection mechanisms.

**Source:** [DEVCORE研究員公布在Pwn2Own競賽揭露的Edge攻擊鏈，串連5個弱點突破瀏覽器防護機制 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1zZ1BrU0NPbnRRMkxQWXVVMlhIeUVMM2dhZnN5SW51YlI2dnhNbVR5Zm5IVWR0b1ljQWkxWVlxbk1IZGF6cTVCcFdTWTZadw?oc=5>)

---

### 📌 Fake ChatGPT and Claude Apps Abuse Signed Executables to Deploy Crypto Miners

Threat actors are distributing YobaLoader crypto miners through fake GitHub projects posing as AI desktop applications for ChatGPT and Claude, using DLL sideloading alongside legitimate signed executables to bypass security protections. The campaign employs anti-sandbox checks, keyboard layout exclusions, Telegram-hosted images, DNS-over-HTTPS commands, and domain generation algorithms to deliver an XMRig cryptocurrency miner injected into svchost.exe.

**Source:** [Fake ChatGPT and Claude Apps Abuse Signed Executables to Deploy Crypto Miners](<https://thehackernews.com/2026/10/fake-chatgpt-and-claude-apps-abuse.html>)

---

### 📌 GMO Offers One Million Dollars for Help Catching Hackers

GMO is offering a reward of one million US dollars for assistance in catching hackers.

**Source:** [Компания GMO предлагает миллион долларов США за помощь в поимке хакеров](<https://xakep.ru/2026/10/29/desktop-cloud-hack>)

---

### 📌 Microsoft Releases Windows Emergency Update Removing Default Trust for Problematic eMudhra Certificates

Microsoft has released an emergency Windows update removing default trust for problematic eMudhra certificates.

**Source:** [微軟發布Windows緊急更新，移除eMudhra問題憑證的預設信任 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE83NmdqalpiOUJQWEZiWDJhYk52NldfWUZOSHRxa0lRbjFYM2VlZjBNXzFOQTVkZXozcm13QjdqSk05aktuMTB5QjBieEpCUQ?oc=5>)

---

### 📌 Members of Hive and Nefilim ransomware groups sentenced in the United States to 70 months in prison

iThome reports that members of the Hive and Nefilim ransomware groups have been sentenced in the United States to 70 months in prison.

**Source:** [Hive與Nefilim勒索軟體集團成員遭美國判刑，將入獄70個月 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBVSm5JZk9lZ2d1OExPZTBtUGVkZndvQnYxZ1Q0VHVIZjlXRlFoOXRWR2Y5azRGOWdrcVlNbDJpRmpjNlNfeWVTSVFtSVA0UQ?oc=5>)

---

### 📌 Security Weekly Report Oct 27–30: PHP2Shell and Brotli2Shell impacts expand, 91APP and Amadeus hacking effects continue to emerge

iThome reports that the PHP2Shell and Brotli2Shell impacts expanded between October 27 and 30, with ongoing effects from the 91APP and Amadeus breaches continuing to surface.

**Source:** [【資安週報】1027～1030，PHP2Shell、Brotli2Shell衝擊擴大，91APP與Amadeus遭駭影響持續浮現 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA5S3JXbkVEZ29FTmJ5UGxsaHd2TXFwem9qOU53RnI3QkNMVTd2amk5MWg2M1k0OEotV3V5V2I3OE5JY0hBWVlUM1cwLUZhQQ?oc=5>)

---

### 📌 Malicious Markdown guidance file attempts to trick Codex into installing malicious packages, AI programming agents face attack risk

iThome reports that malicious Markdown guidance files are attempting to trick the Codex AI programming agent into installing malicious packages, exposing AI programming development agents to attack risk.

**Source:** [惡意Markdown指引檔企圖誘使Codex安裝惡意套件，AI程式開發代理面臨攻擊風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02M1djSFN4bE1UQWhac1lBMER0WDRrRGFYczlVMm5YYWxjNFdkSlFKZmZxZzJyX2tURXFUU2gxLS1US2Z2aVpxSEpDVG5wQQ?oc=5>)

---

### 📌 Linux TCP vulnerability may allow remote root access; some distributions remain unpatched

iThome reports that a Linux TCP vulnerability could be exploited remotely to obtain root privileges, with some distributions not yet patched.

**Source:** [Linux TCP漏洞可被用來遠端取得root權限，部分發行版尚未修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9mVkJOaVNKTmNEVVVoaXBjSU9EQThIcnVZNWlXdnF2bEhZYUpJcjc5QmJ4OEg4YldUN05RbVRpbTdrT1J4MUZaeG1UM1F1dw?oc=5>)

---

### 📌 PHP2Shell and Linux kernel vulnerability Fragnesia chained to grant Chinese hackers root access to 25 Palo Alto Networks firewalls

iThome reports that Chinese hackers chained PHP2Shell with the Linux kernel Fragnesia vulnerability to obtain root privileges on 25 Palo Alto Networks firewalls.

**Source:** [PHP2Shell與Linux核心漏洞Fragnesia被串連利用，中國駭客藉此取得25臺Palo Alto Networks防火牆Root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5EMmhyazc2ZnhkUWNNLVZQM20zMjZyV2d1ME1CQ0RPN3llZ05VYjdCc0c4RVVDRUtoaGRHM2IwYVVnQjRJN3R1LTQtVlpCQQ?oc=5>)

---

### 📌 TCP vulnerability

iThome reports on a TCP vulnerability.

**Source:** [TCP漏洞 - iThome](<https://news.google.com/rss/articles/CBMiYkFVX3lxTE8xNmx1RXF4b3N3OFhMbWNidGNDY2NTTF83aGhFdlpqY00xYUVfTEQ2eXVYdmZ0cURoVGY3MzJmS2JiaHdFeHpReWpsSngwbkE5R1prZWxlTWY3Zl9VYjdGLTVn?oc=5>)

---

### 📌 Synology NAS hit by C3RB3R ransomware; vendor urges users to update DSM immediately

iThome reports Synology NAS devices have been targeted by C3RB3R ransomware, and Synology is urging users to update DSM as soon as possible.

**Source:** [群暉NAS遭C3RB3R勒索軟體攻擊，原廠呼籲用戶盡速更新DSM系統 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5PLVRCZU1oZmRCblllSkRrSUdENVhzaWJLNFVjSUNHT3lzelRteFZ0Y05qMkVOeG1ucGtkUzZ3eTU1NWFJWHBuejRyQ0F5QQ?oc=5>)

---

### 📌 UK plans legislation to strengthen subsea cable security, requiring operators to manage security risks and report incidents

iThome reports the UK is proposing legislation to strengthen subsea cable security, requiring operators to manage security risks and report security incidents.

**Source:** [英國擬修法強化海底電纜安全，要求業者管理安全風險並通報事故 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RMnZjZDdwcnVaLU9CX29HbWlGODZRZ0NCbDZoU1FVazBrdDh1T1F0VFItYlZnMko0MTg2MWxBaHBPX2JZUWhkTnZDLVh5Zw?oc=5>)

---

### 📌 Google patches Chrome 156, discloses 21 security vulnerabilities

iThome reports Google has patched Chrome 156 and disclosed 21 security vulnerabilities.

**Source:** [Google修補Chrome 156，公布21個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBxY082bG1jeUxsaEhoWldZam8zNGp2WjJ5RWxpcldNRFN5eUVEOXRsVS1Vb1dtbW1MUlRzZ3Iyb0xKQllwaVBiUk93QmI3QQ?oc=5>)

---

### 📌 Claude Model Builds Exploits Across Major Browsers &amp; OSes

Dark Reading reports that Claude-generated exploit code can target major browsers and operating systems, highlighting how generative AI may lower the barrier for creating browser- and OS-specific attacks.

**Source:** [Claude Model Builds Exploits Across Major Browsers &amp;amp; OSes](<https://www.darkreading.com/application-security/claude-model-exploits-major-browsers-oses>)

---

### 📌 AI Accelerates Vulnerability Discovery, CSA Proposes VulnOps Model to Improve Enterprise Vulnerability Management - iThome

iThome reports that CSA is proposing a VulnOps model to help enterprises manage vulnerabilities as AI accelerates vulnerability discovery.

**Source:** [AI加快漏洞發現，CSA提出VulnOps模式改善企業漏洞管理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE04YWJkelRzX2kwNlFpbEc4MUZWeGxySkxYWWlyVXItSHMyVjRkYU1mckdydUplVHVBSHAtU0x3TUhPVFlxYUN3NDJISnRuUQ?oc=5>)

---

### 📌 Hive, Nefilim, Ransomware, Judicial Sentencing - iThome

iThome reports on judicial sentencing related to Hive and Nefilim ransomware activity.

**Source:** [Hive、Nefilim、勒索軟體、司法判刑 - iThome](<https://news.google.com/rss/articles/CBMi2AFBVV95cUxPUUJnTXhQRzJaS3E4YW1RdVo4SVF6VE43ckttRmVrUlR0Tkc4WHlqbDk4RnNVcUJWRTZSdnAxY0lwaDd2VHJzdHdsQThrT1J0OElGYkNUVlJqZnBLTG5tQ2F0RWROMW9oWVF5bWZ5SDNNWHl5R2dCNlZSbm02bWhpZVFkdmJmWkNzRzJmcWMyQVZnVVFKSFVzbGZVNGt2MXREMmpMVTRDVWJ5Z0NWSFFwRDJxOUtwanpPdDNpVTdscHJ4Y2taaHFSQ3V0RGEwcDVKa3dmOHpHVWo?oc=5>)

---

### 📌 As Russia's Cyberwar Evolves, Belarus Steps Forward

Dark Reading reports that Belarus is expanding its role in Russia's cyber operations as the conflict evolves.

**Source:** [As Russia's Cyberwar Evolves, Belarus Steps Forward](<https://www.darkreading.com/physical-security/russia-cyber-war-belarus-steps-forward>)

---

### 📌 Synology, C3RB3R, NAS Ransomware, DSM Vulnerability - iThome

iThome reports on Synology NAS ransomware activity involving C3RB3R and vulnerabilities in DSM.

**Source:** [Synology、C3RB3R、NAS勒索軟體、DSM漏洞 - iThome](<https://news.google.com/rss/articles/CBMizAFBVV95cUxNcm02Sy1ESnM0VjhLUEtfY1VQWENMQ0QtM0R4VEFlNUUwc1dMSDRzNVFUd2JBSkpWa3pvUGpELUZWMnItNkoyVWRBMzZEMlBQSXFvLWs0NTVuRHNOMWhkMVpqWFl4SXlBcVEtcjF0eGNXZjVzSHNYdlg4Q1YxY2RHNUhLaVpOYXNxbU5GeTVGbGJnVHBPNXpQRUotT2VZREQwRm1RSmF3cmc3eXFNQmt3c0FLd1hxRVQzNk13aVdGcGo5elR3cEhULVlYOTE?oc=5>)

---

### 📌 JVN: Multiple Vulnerabilities in Multiple Mitsubishi Electric Products (2026-006)

JVN reports multiple vulnerabilities affecting multiple Mitsubishi Electric products under advisory 2026-006.

**Source:** [JVN: 三菱電機製の複数製品における複数の脆弱性（2026-006）](<https://jvn.jp/vu/JVNVU93251594>)

---

### 📌 VulnOps - iThome

iThome reports on VulnOps, with details limited to the headline in the available RSS feed.

**Source:** [VulnOps - iThome](<https://news.google.com/rss/articles/CBMiT0FVX3lxTE9uOEg0c1FNU251WnA4VWZFUnlPbFNOZ2hYdTV3X2Rjejdkd01ZTXZ0UlhlUXFLMUpwbjRjYTRGbktwRHg0TEprTGRBRTJZR3c?oc=5>)

---

### 📌 DoS vulnerability found in Intelbras surveillance cameras

Xakep reports that Intelbras surveillance cameras contain a denial-of-service vulnerability, with reporting limited to the headline in the available source.

**Source:** [В камерах видеонаблюдения Intelbras обнаружили DoS-уязвимость](<https://xakep.ru/2026/10/30/intelbras>)

---

### 📌 Palo Alto Networks, Unit 42, retail security, AI hacker attacks - iThome

iThome covers Palo Alto Networks, Unit 42, retail security and AI-driven hacker attacks, with details limited to the headline in the available RSS feed.

**Source:** [Palo Alto Networks、Unit 42、零售業資安、AI駭客攻擊 - iThome](<https://news.google.com/rss/articles/CBMi-gFBVV95cUxNbE9UVTFMVkxleDNubUJqcDRoaVZsbnJGVHEzZURldHpkbkxXNDIzQzBwR2JQUW54b09rdU90OUJXWTB6czJoWm81M1BrUno4OFpuYU0xVHdhNXQ4Ri1HSzctZE00YzNiVDRSdkRTWjU5OG1XUVlCTUZDQ2hoNE40T2lLYW5DdmltX09yYXBSd216SWFxemxqYy1waWZ6TGFjcWtFa3JDLUtlVEpxQVI0OThSQ05qalJCbUNHT2ZmMDBjWlRNbW9jVW1ma0x6RkJKRXc5UlJJZll3b3cyRTRPSWlqdkFvVS1tOXBUZ0VzTXlkaDlNc0wtQW1R?oc=5>)

---

### 📌 SentinelOne adds Anthropic Claude to cyber defence service

SecurityBrief Australia reports SentinelOne has integrated Anthropic Claude into its cyber defence service.

**Source:** [SentinelOne adds Anthropic Claude to cyber defence service - SecurityBrief Australia](<https://news.google.com/rss/articles/CBMimAFBVV95cUxOV1hWTnhudWFRNXdGNE5CdHhVenMwbDZsenV3R3ZFM3JlRl85NnRvVVItYkdMWFlRa3RnYlNLdk1SRDNoeC1XVVR3RHFDbXdLdlhFYTZOb2dJV3BRZ2phQjNvZUQ5NmgtYkFCaXMxYnI4bVJoNlNXdlcyTXpZZUpvOFRhOHV0ZnFqMUNvMTZxYlp3dU1ITWZJUw?oc=5>)

<!-- ciso-revision:ciso-20261030-1-available-1793437100139 -->
