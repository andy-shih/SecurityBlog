---
title: "CISO Daily Digest: Attackers Exploit Critical Siemens IoT2050 Flaw to Plant Remote Command Backdoors (20261103)"
description: "Active exploitation of a critical authentication flaw in Siemens IoT2050 devices is deploying remote command backdoors, while an Iran state-aligned espionage campaign has compromised targets in Israel and Iraqi Kurdish government cloud infrastructure, and a headline report warns of malware infections affecting up to 5,000 developers through a SpaceX-owned Cursor marketplace."
pubDate: 2026-11-03
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Attackers Exploit Critical Siemens IoT2050 Flaw to Plant Remote Command Backdoors

A maximum-severity flaw in Siemens SIMATIC IoT2050 Advanced devices, tracked as CVE-2026-58115 with a CVSS score of 10.0, is under active exploitation. The missing authentication vulnerability in the Node-RED HTTP interface lets unauthenticated remote attackers create malicious flows and run arbitrary code with maximum privileges. Siemens remediated the issue in versions 4.3.4.1 or later and advises uninstalling Node-RED or hardening it with HTTPS, credential-based authentication, OAuth/OpenID, and basic authentication for HTTP nodes and dashboards.

VulnCheck observed exploit attempts against its honeypot network as of October 30, 2026, where attackers deployed a Node-RED flow that pulled and executed a Linux bot from 85.215.73\[.\]250 using encoded layers and wget or curl. The campaign later shifted to a two-stage process retrieving wget.sh from the same server, alongside requests fetching a payload disguised as .kworker from 45.194.90\[.\]57:38472 and saving it to /tmp/.kworker. The exact functionality of these later payloads remains unknown.

Some attacks deployed an HTTP in endpoint such as /cmd wired through a function node to an exec node, allowing arbitrary command execution via query parameters. VulnCheck noted this backdoor survives reboot even if a memory-backed implant is lost. Customers should apply patched firmware and review exposed Node-RED instances for unauthorized flows and persistence mechanisms.

### 📌CISO Impact

- **Patch and harden exposed industrial IoT devices —** Update Siemens SIMATIC IoT2050 Advanced devices to version 4.3.4.1 or later, or remove/harden Node-RED with HTTPS and authentication to block exploitation of CVE-2026-58115.
- **Hunt for Node-RED backdoor persistence —** Inspect IoT2050 and other Node-RED installations for unauthorized HTTP exec endpoints such as /cmd, unexpected flows, and implanted binaries in /dev/shm or /tmp that may survive reboot.
- **Strengthen defenses against credential-phishing and trojanized developer tools —** Treat lookalike government, webmail, cloud-service, and videoconferencing domains as potential credential harvesting or malware delivery channels, and validate the provenance of Cursor extensions and coding-assessment downloads before execution.

**Reference:** [Attackers Exploit Critical Siemens IoT2050 Flaw to Plant Remote Command Backdoors](<https://thehackernews.com/2026/11/attackers-exploit-critical-siemens.html>)

---

## Active Threats This Week

📌 **DarkBlinders Compromises Israeli Target and Iraqi Kurdish Government Cloud Environment**

Dream Research Labs disclosed an Iran state-aligned cyber espionage campaign by DarkBlinders targeting Israel and the Kurdistan Region of Iraq between August and October 2026. The activity compromised a high-profile individual in Israel and a government cloud environment in the Kurdistan Region, using spear-phishing to deliver trojanized utilities or direct-download tools. Previous chains deployed SHELBYLOADER and SHELBYC2, with GitHub used for command-and-control, exfiltration, and remote control. Palo Alto Networks previously described a Blinder Tunnel campaign masquerading as Dubai Airports IT to distribute trojanized coding challenges, while the latest activity combines credential phishing and malware delivery through lookalike government, webmail, and cloud-service domains, plus decoy StarkMeet videoconferencing domains.

**Reference:** [DarkBlinders Compromises Israeli Target and Iraqi Kurdish Government Cloud Environment](<https://thehackernews.com/2026/11/darkblinders-compromises-israeli-target.html>) 

---

📌 **Up to 5,000 Developers Infected by Malware on SpaceX-Owned Cursor Marketplace**

THE ELEC reports that up to 5,000 developers may have been infected by malware distributed through a SpaceX-owned Cursor marketplace. Details on infection vectors, affected organizations, and malware functionality were not included in the available headline. Customers using Cursor extensions should verify plugin provenance and avoid unofficial marketplace downloads until further technical reporting is available.

**Reference:** [Up to 5,000 Developers Infected by Malware on SpaceX-Owned Cursor Marketplace - THE ELEC, Korea Electronics Industry Media](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9jYm4zSEctbmh5aXZ6RWF5YlpwZVB4QjBzcW9hcTMtZ0NfRlVEZUQzbURUR29kMVRJcWwtSVlTejhnbDNETmhsVEltRWVDSzVlZHN2M25kYlZUTGpLTEVFakpOVlBsTnc?oc=5>) 

---

📌 **Google teams with Japanese police to dismantle XCPE botnet infecting over 1.3 million Android devices worldwide, including nearly 90,000 in Taiwan**

Google and Japanese police dismantled the XCPE Android botnet, which infected more than 1.3 million devices globally, including nearly 90,000 in Taiwan.

**Reference:** [Google聯手日本警方瓦解XCPE殭屍網路，全球逾130萬臺Android裝置遭感染，臺灣也有近9萬臺 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5zNm9oOWoyd1JfcVdyY1JYU2NOanMzODZkLTJfUWItSU1KLTBFdzduVFRhMXJfdmI2R0ZtSEFRQ3R4cWJza1A5ZjNtS2lTdw?oc=5>) 

---

📌 **Hackers exploit BTCPay Server flaw to steal Bitcoin and Litecoin from hot wallets**

BTCPay Server urged users running version 2.4.1 or earlier to move to a fresh server with a new wallet after attackers stole Bitcoin and Litecoin from hot wallets, with two wallet addresses linked to the incidents.

**Reference:** [Hackers Exploit BTCPay Server Flaw to Steal Bitcoin and Litecoin From Hot Wallets](<https://thehackernews.com/2026/11/hackers-exploit-btcpay-server-flaw-to.html>) 

---

📌 **Red Hat patches 9.8-rated Linux TCP RCE flaw while Ubuntu releases fixes for testing**

Red Hat patched CVE-2026-98432, a remotely exploitable use-after-free in the Linux kernel's IPv4 TCP code affecting RHEL 8, 9, and 10, while Ubuntu fixes for 22.04, 24.04, and 26.04 LTS remain in the opt-in proposed testing channel.

**Reference:** [Red Hat Patches 9.8-Rated Linux TCP RCE Flaw While Ubuntu Releases Fixes for Testing](<https://thehackernews.com/2026/11/red-hat-patches-98-rated-linux-tcp-rce.html>) 

---

📌 **$6.3B Binance Hack Shows the Need to Test Attack Paths**

Dark Reading reports that Binance suffered a security breach affecting $6.3 billion in assets, with nearly $3 billion frozen, highlighting the importance of testing attack paths.

**Reference:** [$6.3B Binance Hack Shows the Need to Test Attack Paths](<https://www.darkreading.com/cyberattacks-data-breaches/binance-hack-test-attack-paths>) 

---

📌 **Attackers Target Unpatched CryptoPayment Gateway Flaw That Can Expose Wallet Credentials**

Defused Cyber reports in-the-wild exploitation attempts against CVE-2026-81648, a critical CVSS 10.0 vulnerability in CryptoPayment Gateway WordPress plugin versions 1.2.1 to 1.2.2, which allows unauthenticated users to delete arbitrary files, overwrite payment gateway configuration, and recover stored wallet credentials in cleartext. The plugin was removed from the WordPress Plugin Directory on August 28, 2026, and no fix is known. Site owners are advised to remove the plugin, rotate wallet keys, and audit for suspicious changes.

**Reference:** [Attackers Target Unpatched CryptoPayment Gateway Flaw That Can Expose Wallet Credentials](<https://thehackernews.com/2026/11/attackers-target-unpatched.html>) 

---

📌 **Synology NAS Devices Targeted in Ransomware Attacks Exploiting Patched DSM Flaw**

Synology reports threat actors are exploiting a December 2024-patched DSM vulnerability to target outdated NAS devices with ransomware, including C3RB3R ransomware that encrypts files with a .L0CK3D extension and drops read-me3.txt ransom notes. Synology urges customers to update DSM immediately and enable automatic updates.

**Reference:** [Synology NAS Devices Targeted in Ransomware Attacks Exploiting Patched DSM Flaw](<https://thehackernews.com/2026/11/synology-nas-devices-targeted-in.html>) 

---

📌 **Amadeus hack in Spain affects airlines across multiple countries, at least 12 impacted including Japan, South Korea and Malaysia - iThome**

A cyberattack on Spanish travel technology provider Amadeus has disrupted at least 12 airlines across Japan, South Korea, Malaysia and other countries.

**Reference:** [西班牙Amadeus遭駭波及多國航空公司，日本、韓國、馬來西亞等至少12家航空公司受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5NdVktUGdPQjk0M0w0QmhKOGZlSDBZaGg3TjFIcmg3SDIyUmhpQVRNZlU3eXc1VFBfTVBMMXp6U2lkcHZQYUJWQUF0SFVMQQ?oc=5>) 

---

📌 **Hackers remotely control refrigeration equipment at more than 115 supermarkets across seven European countries, raising temperatures and causing food losses - iThome**

Attackers remotely manipulated refrigeration systems at over 115 supermarkets in seven European countries, increasing temperatures and causing food losses.

**Reference:** [歐洲7國逾115家超市冷凍設備遭駭客操控，遠端調高溫度導致食品損失 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBla3pZWjFwY09MX3lxZnVxZ2NEUWs3NURPZWhhbExqZnR3WUpGNmFTb252YnFXS28zZ2ZzU2syVS1jSmhQN09RNlEtVHZqQQ?oc=5>) 

---

📌 **New Wave of Refrigeration Cyberattacks Hits Supermarkets Across Europe, Forcing Stores to Pull Food**

Attackers remotely changed refrigeration control settings at supermarkets in Belgium, Sweden, Estonia and other European countries overnight into Monday, November 2, warming fridges and freezers. Stores including Delhaize, Carrefour, ICA, Coop and Selver reported affected units, with some discarding chilled and frozen food. Danfoss said its products were involved, as in an earlier attack on hundreds of French supermarkets, and Dutch systems hit were not on secure networks and still used default passwords. CERT-FR's October 16 alert covering Danfoss AK-SM and AK-SC controllers and Copeland and Dixell xweb devices advises isolating devices from the internet, using secure VPNs, changing default passwords, setting Danfoss security to Strict, updating firmware, and restarting or factory-resetting compromised devices before reconfiguration.

**Reference:** [New Wave of Refrigeration Cyberattacks Hits Supermarkets Across Europe, Forcing Stores to Pull Food](<https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html>) 

---

📌 **Hugging Face hit by malicious model abuse as 31 repositories spread miners and backdoors**

iThome reports that 31 Hugging Face repositories were abused to distribute cryptocurrency miners and backdoors.

**Reference:** [Hugging Face遭惡意模型濫用，31個儲存庫散布挖礦程式與後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5sbTQtWklQRlIzd1pKWGFuOGpYLUdSRk03ODVPZjlhRl9OT0hCNnhvdVVVdWJ5aDNrbG9BLUFSYi1UcHlydFo5aUk1SWE2Zw?oc=5>) 

---

📌 **Malicious implants found in Trezor hardware wallets**

Xakep reports that malicious implants have been discovered in Trezor hardware wallets.

**Reference:** [В аппаратных кошельках Trezor нашли вредоносные импланты](<https://xakep.ru/2026/11/02/trezor-implant>) 

---

📌 **Google Disrupts 1.3 Million-Device Android Botnet, Says TV Box Maker Sold Criminal Access**

Google led a late-October takedown of a botnet comprising more than 1.3 million Android devices, primarily TV set-top boxes, and says it is highly confident that Shenzhen-based manufacturer Videostrong intentionally embedded a backdoor called x.cpe in firmware across many models and brands over several years, then sold access to criminals for ad fraud and residential proxy services. Google used legal action to seize the controlling domains and servers and dismantled infrastructure for over a dozen malware families loaded through the backdoor, expecting the operation to cut off access to at least 10 million additional infected devices. The backdoor operates as a system app with system-level access, disables Google Play Protect checks, and can install apps silently, run commands, capture screens, map networks, exfiltrate account and device details, and open reverse shells. TrendAI counted 1,472,554 infected devices across 206 models between June 3 and October 1, 2026, with Malaysia, Brazil, Iraq, Mexico, and Taiwan most affected. Because x.cpe is embedded in firmware and signed with the manufacturer's key, it reinstalls after reboot, and cleanup requires vendor action, platform protection, or device replacement; Synthient advises consumers to discard affected boxes, while organizations should use published indicators, disconnect and discard identified devices, block listed control domains and IPs, and segment smart devices from sensitive networks. Google has banned Videostrong, its future subsidiaries, and affiliates from building or selling certified Android devices or supplying software to certified makers, and has changed its device review and firmware checks for certified Android TV devices.

**Reference:** [Google Disrupts 1.3 Million-Device Android Botnet, Says TV Box Maker Sold Criminal Access](<https://thehackernews.com/2026/11/google-disrupts-13-million-device.html>) 

---

📌 **Hackers breach Chainalysis using AI agents**

The report states that Chainalysis was compromised by hackers employing AI agents.

**Reference:** [Хакеры взломали Chainalysis с помощью ИИ-агентов](<https://xakep.ru/2026/11/02/chainalysis-hack>) 

---

📌 **Mozilla exposes insufficient randomness in TWCA CA certificate serial numbers; Ministry of Digital Affairs requires reissuance and third-party testing - iThome**

Mozilla disclosed that TWCA CA certificate serial numbers lack sufficient randomness, prompting Taiwan's Ministry of Digital Affairs to require certificate reissuance and third-party testing.

**Reference:** [TWCA CA憑證序號亂數不足遭Mozilla揭露，數發部要求換發並啟動第三方檢測 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5VSmlQZjBnYVM5NHdVV3ZZcVFNZWFDVE1fYnFxRVpDcmhDME0zVFYyUzlKcXpQUmFFbzY4VkdfbnlsUmhuQUdJcHVJaU1LQQ?oc=5>) 

---

📌 **AI workflow platform Trigger.dev hacked; attackers accessed some customer environment variables without authorization - iThome**

Trigger.dev reports that attackers gained unauthorized access to some customer environment variables on its AI workflow platform.

**Reference:** [AI工作流程平臺Trigger.dev遭駭，攻擊者未經授權存取部分客戶環境變數 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE13V1BRUDZfeEM1RmRMelhWeEdaQVd6M1oyMWNDVTF3QzVrUHhpYk0yUG41SVJ3TkhnZjFORDQ0MkRzSlNRZTNYRFFvRlp3Zw?oc=5>) 

---

📌 **APT attackers use NetamLoader malware framework to target Asian government agencies - iThome**

iThome reports that APT attackers have used the NetamLoader malware framework against Asian government agencies.

**Reference:** [APT駭客利用惡意軟體框架NetamLoader攻擊亞洲政府機關 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBUNTE5dzFUR1pFWmRYazVFMkdaUmxINjZMTnozV3BYbUVVNVIxa2Rwd0hDMEhUVzh4OVpEV1dCVGxreXlvMXFKdzdNV3czZw?oc=5>) 

---

📌 **Langflow AI application development platform patches two critical vulnerabilities allowing authentication bypass or remote code execution - iThome**

iThome reports that Langflow has patched two critical vulnerabilities that attackers could exploit to bypass authentication or execute remote code.

**Reference:** [AI應用開發平臺Langflow修補2項重大漏洞，攻擊者可繞過身分驗證或遠端執行程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBLSVVHZTJfdDNXSXktWEVEdE5YTk5VaWVSa3BfeGdOTUxuZDFsMnNvb3o2bHFKU0hoUndsMUlHcVJIYldTUXk3c3l0MGFPQQ?oc=5>) 

---

📌 **319 Chrome extensions intercepted user search queries - Xakep**

Xakep reports that 319 Chrome extensions were found intercepting users' search queries.

**Reference:** [319 расширений для Chrome перехватывали поисковые запросы пользователей](<https://xakep.ru/2026/11/03/searchjacked>) 

---

📌 **ENGIE targeted by supply chain attack; customer data exposed**

iThome reports ENGIE experienced a supply chain attack resulting in customer data exposure.

**Reference:** [ENGIE、供應鏈攻擊、客戶資料外洩、能源業資安 - iThome](<https://news.google.com/rss/articles/CBMisAJBVV95cUxOR0dEdm9ISTZnM1lqX3gwTm5KckJpMGFlN1loWEZBRTJhV1E2aFBoQkNIN2kweDl4eldoWEZkdGItT2N4SS1USmVmaEJNZ0V4c2tfSXhua21BcWJ5UWx2ekF1SkZQQjExSnhwdXpPWEdHTmRnUlUtZjBrN2VYSVc3MmYtYlM3dDhNUk9SSXYtQ0tpSFFwT0dJOHZrTFpWWVVYZ2hBWVc4MTl2bDBVdlRkaklzM3lQYmxPUDQwNDAtR1B4SmhtX2VMbGMyNzdHd3l6QW4xT2dMSUhHT2I5ZnRfR2IxcVBoTXNER0NCTG5RckJxQl9fTkJ2X29neFlzbG1QckVITFlydUE0TjBaSnc4YWVIbmp1cUZpaUxNaTRqZWtOT1FwM09RY1JLbzNCRDdk?oc=5>) 

---

📌 **Attackers use AI-generated malware to target government Linux hosts and steal email and social media accounts**

iThome reports attackers are targeting government Linux hosts using AI-generated malicious programs intended to steal email and social media platform credentials.

**Reference:** [政府機關Linux主機被鎖定，駭客借助AI力量生成惡意程式，意圖竊取郵件與社群平臺帳號 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBsb3FZY29iWU1nN1hVeHptd2FkOXhWbW93dU5wRDZPMmNJT2NwYl8zY0xMeGJ3dTJPOE15VDU0Y0c3NEFPYVdIdndVOHdXdw?oc=5>) 

---

📌 **Chinese hackers abuse AI-enhanced ARTEX penetration testing framework in global cyber espionage against over 200 organizations**

iThome reports Chinese hackers are abusing the AI-enhanced ARTEX penetration testing framework to conduct cyber espionage across more than 200 enterprise organizations worldwide.

**Reference:** [中國駭客濫用AI滲透測試框架ARTEX攻擊，於全球逾200個企業組織從事網路間諜活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBMN0FWY21aYjRRWFZHYTREOVF0algwdzkyRVR5Y2VSZXRjQXg5b0pvZ2duSVpBZUwxXzNNUUdDeGRnaU4tcXRzUDQ3NDVPUQ?oc=5>) 

---

📌 **Cathay Pacific, Qantas and Malaysia Airlines among Amadeus system data leak victims**

iThome reports that Cathay Pacific, Qantas, and Malaysia Airlines have been affected by a data leak involving the Amadeus system.

**Reference:** [國泰、澳航、馬航也成Amadeus系統資料外洩受害者 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1BTndOeHZQVHpDM2I3VUh2Q0tDeHV4eDIxRDROZjNveU9BWUd3ZmQ1Y3Z0eUJNXzFqV1NIY2wwdUQtM2FMNnFuZmlXeWxWZw?oc=5>) 

---

📌 **European energy giant ENGIE partner platform hacked, some French customer data leaked**

iThome reports that a partner platform used by ENGIE was hacked, resulting in leaked data for some French customers.

**Reference:** [歐洲能源巨擘ENGIE合作夥伴平臺遭駭，部分法國客戶資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBwS1EzUFkwNVRNT01UdWdOX2pWR0trV0R3OXB4Y3QzYkJOUF85cmxrM1JGVXZJTlZaV3d6U2lUUkVheVpJRHBSUk53c0Fxdw?oc=5>) 

---

📌 **Hosting provider Beget suffers cyberattack**

Xakep reports that Russian hosting provider Beget suffered a cyberattack.

**Reference:** [Хостинг-провайдер Beget пострадал от кибератаки](<https://xakep.ru/2026/11/03/beget-attack>) 

---

📌 **WordPress vulnerability exploitation attempts observed nine minutes after patch release**

iThome reports that attempts to exploit a recently patched WordPress vulnerability appeared just nine minutes after the fix was released.

**Reference:** [甫修補的WordPress漏洞9分鐘後即出現嘗試利用活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5uRFU5a1lIeG9DdmZnNlFnenZsNHdjbGJqNlRoRmRWbUR3YnNhVnlndmFjTFQ5N1NwT2pRNWQwaWxUeFRyRUw0WHp3VTFmQQ?oc=5>) 

---

📌 **Polymarket compromised due to DNS record hijacking**

Xakep reports that Polymarket was compromised following the substitution of its DNS records.

**Reference:** [Polymarket скомпрометировали из-за подмены записей DNS](<https://xakep.ru/2026/11/03/polymarket-debugbear>) 

---

📌 **Sophos reveals Aur0ra ransomware attacks extensively using AI technology**

iThome reports that Sophos has disclosed Aur0ra ransomware attacks that make extensive use of AI technology.

**Reference:** [Sophos 揭露 Aur0ra 勒索軟體攻擊大量運用 AI 技術 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTFBNVUNmTnk3MEFiMWpENTRUeUJtdG11bnQ0X1VWOHZZQUdPYWE2bVFVMDVGcFpBY2FmeVVhMzNvSnVSdTdHWHc0ZXBEaw?oc=5>) 

---

📌 **Android SMS denial-of-service flaw CVE-2026-58882**

iThome reports an Android denial-of-service vulnerability tracked as CVE-2026-58882 involving destructive SMS messages.

**Reference:** [Android、CVE-2026-58882、死亡簡訊、阻斷服務攻擊 - iThome](<https://news.google.com/rss/articles/CBMi_gFBVV95cUxPRE5KeFYyd3RxNzhpMnNoSjJHN3pDdGxnTUtWald2b3BEaGx1bnVGTE0wZVZvS0loRWxfb2lMNGhJeWo0eDF4R1AwS0gtWFJDZUJUNkEwREVjd08yaWIyUmNMR0pwb1RsMnRJZWhCRWNLVnlfMlVKMWtEZTdlZjdZcEpJZDdHY3FXSFc2SlBVYTZVWEdmSGFRUkdMMnpiTngyUFlJbk1qbnRRbHVwNmNtc1k0Y252Vko4RXJlUDdjMTZJdERLOUd4S2VCNkxpT2k0WnNGU1NQcjFmVWRfWWpIMlFPVmdUNEk0TEU1Z3ZWMXRjUmdvSzZEM3JBc3MwQQ?oc=5>) 

---

📌 **Drupal discloses exploited Commerce Core vulnerability**

iThome reports Drupal disclosed a critical vulnerability in its Commerce Core module that has been exploited in the wild.

**Reference:** [Drupal揭露已遭利用的Commerce Core模組重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1QcGkxUC1kMFdhdUdMb1pkYjlVV0Uxb3JCdDlxbnc1c3hCYzg0QmU1T2VVX0VOcXFMNkRtTFNuTU05Rk5ndGppVzBKVE42dw?oc=5>) 

---

📌 **Yuanta Bank reports abnormal transfer incident affecting 419 customers**

iThome reports Yuanta Bank confirmed a system abnormality at New Net Bank, with initial review affecting 419 customers and 427 transactions.

**Reference:** [永豐銀行發生不明轉帳事件，該行證實新網銀系統程式異常，初步清查影響419名客戶、涉及427筆交易 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9heEVOdmQ4bFozX1dMQU92dFNWVGJDckVKbW9naFRRNkFwMGJ0b1RQVW1ZTi1SUkFtZFFLYlM2d2RLbF9BSDF2R3ZpcmlJQQ?oc=5>) 

---

📌 **Japan Overseas Airways - iThome**

iThome reports on Japan Overseas Airways in a headline-only item, with no further details available.

**Reference:** [日本越洋航空 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxPUUNUYkF2THREaE5qdWc3d2ZKMlk1S2lnQnAzNXNHemRLWnF4ZXBFUlNoNlZMa2l3WWJSNUxtR3N4S00wanJlRDdrdFBKTWlEaDA3Y1p2TkI5V01YeDJkNkJKN2xxdEx1T3JSOU9fdjVlVXdhaVFJZFNFLU10ODFXLTVUSDlwV015ejZWSHhR?oc=5>) 

---

📌 **Android exposed to 'death text' vulnerability capable of paralyzing mobile communication services - iThome**

iThome reports that an Android vulnerability known as a death text can disrupt mobile communication services, without detailing exploit mechanics or affected versions.

**Reference:** [Android遭揭露「死亡簡訊」漏洞，可癱瘓手機通訊服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE40OXVsMGdwd2d5ZlZ1dTd6UjZBV28tUEFFbVhDQVVMYUNLM3R1T1BlWWNXSFp1WHRYTXZyR0NYa2NzVzJtV1J5Z0NTaUdwdw?oc=5>) 

---

📌 **Security Daily Report, November 3: Hackers compromised refrigeration equipment in more than 115 supermarkets across seven European countries, remotely raised temperatures, and caused food losses - iThome**

iThome reports that hackers compromised refrigeration equipment in over 115 supermarkets across seven European countries, remotely adjusted temperatures upward, and caused food losses.

**Reference:** [【資安日報】11月3日，歐洲7國逾115家超市冷凍設備遭駭客操控，遠端調高溫度導致食品損失 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9rNlhQMS1FSS1OcWpHbEZ0WWdUNmlLR0ZFNjFJWUd4S21EdUhzZEU5ZEFDS2l2dnJoUUY2SWc2UUNVM3lxblEyLWtNaUd4dw?oc=5>) 

---

📌 **Star Lux Airlines - iThome**

iThome reports on Star Lux Airlines under the headline "星悅航空 - iThome."

**Reference:** [星悅航空 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE9FUFVBclNRUlM0MTBWa1oyYnQzU3dSdWoxcnphYjZtdXFjX2RLazl3cVNjbHlTZ2QtVVNvV2xCdEpYdWthZ09SRDlUVmpBZV96SUYzbG53SzNpaHNvQkkyT2FQM2RRbVJTenFobjcyYi0wSXZSX3c?oc=5>) 

---

📌 **CrowdStrike brings Falcon Guardian security into Anthropic's Claude Cowork - StreetInsider**

StreetInsider reports that CrowdStrike has integrated Falcon Guardian security into Anthropic's Claude Cowork.

**Reference:** [CrowdStrike brings Falcon Guardian security into Anthropic's Claude Cowork - StreetInsider](<https://news.google.com/rss/articles/CBMizAFBVV95cUxPQUk3dTdQNTM1YnNYOFJCME1mLWFDT2xaOEJzaFVWY18zUm92eHNyeXJXMDQ5dXU1YzhuNXJQUkdPbG5tVGhfMUZZUDRXYTA0Sm5ZaWNDRG9NLXF4YTV1TWFDd2hsSEpTQ3JuQlkzZnBycC1oLU43SVYzVV8tY0l3UGEtejY2TXVpamY2NGZoZzlDM045dGEtalpyQlFCallkM0liSi1xZUc0aDMteGtnektWWjZJS3Uwek1rMWpxdWtxRG5WNTBfUVVVdzQ?oc=5>) 

<!-- ciso-revision:ciso-20261103-1-1793731352404 -->
