---
title: "CISO Daily Digest: Binance Reveals How Fake Job Interviews and AI Tool Abuse Led to $6.43 Billion Theft (20261104)"
description: "Three significant security incidents highlight evolving threats: a $6.43 billion cryptocurrency theft via multi-stage social engineering and AI tool abuse, a blockchain infrastructure breach linked to AI-powered attack campaigns, and a critical Rails framework vulnerability enabling server file manipulation through image uploads. These events demonstrate the convergence of sophisticated social engineering, AI-enabled attack automation, and supply chain vulnerabilities targeting developer environments and critical infrastructure."
pubDate: 2026-11-04
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Binance Reveals How Fake Job Interviews and AI Tool Abuse Led to $6.43 Billion Theft

Binance disclosed a $6.43 billion theft from its cryptocurrency exchange resulting from a sophisticated, multi-stage campaign spanning June to October 2026. The attack began with a supply chain compromise when a Wallet DevOps engineer downloaded a trojanized Homebrew installer while searching for an AI tool. This initial infection exposed the engineer's role and colleague information, enabling a second phase in September where a threat actor posed as a Project Director on a legitimate job-hunting platform and conducted fake video interviews with another engineer, ultimately tricking them into downloading a malicious code repository during a technical assignment.

The undetected malware used advanced obfuscation, substituting legitimate development tool components with poisoned versions to establish command-and-control communication and remove forensic artifacts. On October 20, the attacker leveraged the compromised engineer's computer and abused an internal AI tool to gain control over additional wallet infrastructure engineers. Between October 29, 17:15-19:56, the adversary used stolen container deployment credentials to deploy a malicious container and trigger a script that exploited unauthorized access to an internal wallet signing service, initiating transactions outside normal withdrawal processes.

Binance has rebuilt affected wallet systems in a new environment, reconstructed the internal AI tool and access controls, replaced devices, decommissioned credentials, and enhanced AI-based behavioral anomaly detection and wallet-service risk controls. Chainalysis attributed over $14.3 million in losses from similar North Korea-linked fake interview schemes over 18 months, noting these smaller compromises allowed actors to refine methods before the record heist. Attackers also employed EtherHiding variants like NullReceiver and multi-blockchain C2 redundancy across TRON, Aptos, and BSC to maintain resilient command channels.

### 📌CISO Impact

- **Strengthen Developer Environment and Supply Chain Defenses —** Implement strict controls on software installation sources, prohibit unauthorized package managers, and deploy application allowlisting for developer tools. Monitor for trojanized installers and compromised open-source packages targeting engineering teams, especially those with privileged infrastructure access.
- **Detect and Disrupt Multi-Stage Social Engineering Campaigns —** Deploy behavioral anomaly detection for unusual authentication patterns, credential usage across systems, and AI tool abuse. Implement strict interview verification protocols for technical roles and monitor for recruitment-themed phishing targeting engineers with infrastructure access.
- **Secure AI Tooling and Internal Automation Access —** Enforce least-privilege access for internal AI tools, implement session monitoring and anomaly detection for AI-assisted operations, and segment AI tool access from critical infrastructure credentials. Regularly audit AI tool permissions and rebuild compromised tooling in isolated environments.

**Reference:** [Binance Reveals How Fake Job Interviews and AI Tool Abuse Led to $6.43 Billion Theft](<https://thehackernews.com/2026/11/binance-reveals-how-fake-job-interviews.html>)

---

## Active Threats This Week

📌 **Chainstack Reports Production Systems Breach Exposing Customer Data and Password Hashes**

Blockchain infrastructure provider Chainstack disclosed a breach where an external attacker accessed development and production environments through a third-party component between October 26-31, 2026. The intrusion exposed customer account information including organization names, member emails, password hashes, and potentially node credentials. Chainstack advised customers to rotate node credentials, regenerate API keys, update reused passwords, and monitor for phishing. The attack is assessed to share overlaps with a China-linked ARTEX campaign also targeting WorkOS, Chainalysis, and the Dutch Institute for Vulnerability Disclosure, indicating a growing trend of AI agents automating tailored attack strategies across multiple high-value firms.

**Reference:** [Chainstack Reports Production Systems Breach Exposing Customer Data and Password Hashes](<https://thehackernews.com/2026/11/chainstack-reports-production-systems.html>) 

---

📌 **Critical Rails Flaw Lets Attackers Write Server Files via Crafted ImageMagick Uploads**

A critical Ruby on Rails vulnerability (GHSA-f3w6-w445-fwh9, CVSS 9.8) allows unauthenticated attackers to write arbitrary files on servers via crafted ImageMagick uploads when Active Storage uses the Disk service. The flaw in Active Storage's ImageMagick analyzer enables exploitation through MSL coder scripting when processing uploaded SVG files, potentially exposing secret\_key\_base and credentials for remote code execution or lateral movement. Affected versions include all Rails 8.1 before 8.1.4.1 and 8.0 before 8.0.5.2 using ImageMagick with default variant\_processor settings. Rails released fixes with an ImageMagick security policy blocking MSL, Ghostscript coders, and dangerous delegates, plus a second flaw (GHSA-v924-7rp8-4mxh, CVSS 8.8) related to FFmpeg decoder selection via file extensions.

**Reference:** [Critical Rails Flaw Lets Attackers Write Server Files via Crafted ImageMagick Uploads](<https://thehackernews.com/2026/11/critical-rails-flaw-lets-attackers.html>) 

---

📌 **Xen Hypervisor Flaws Let One Malicious VM Read and Write Any Other VM's Memory**

Two flaws in the Xen hypervisor allow a malicious guest VM to read and write the memory of other VMs on the same host, including dom0. Patches are available, but no known mitigation exists. All Xen versions from 4.6 onward are vulnerable, while 4.5 and earlier are not. The flaws are tracked as CVE-2026-102703 and CVE-2026-102704 under Xen advisory XSA-523.

**Reference:** [Xen Hypervisor Flaws Let One Malicious VM Read and Write Any Other VM's Memory](<https://thehackernews.com/2026/11/xen-hypervisor-flaws-let-one-malicious.html>) 

---

📌 **APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits**

APT29-linked attackers ran the Poisoned Source watering-hole campaign against iOS and Android users via compromised websites, lookalike domains, and a supply-chain compromise of the Plerdy SEO Tracker between August 27 and September 3, 2026. The injected JavaScript profiles devices and delivers platform-specific N-day exploit chains leading to payloads that steal browser cookies, Wi-Fi passwords, or full mobile device data.

**Reference:** [APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits](<https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html>) 

---

📌 **Google Warns LLMjacking Attacks Are Costing Some Enterprises Up to $1 Million in Cloud Charges**

Google warns that attackers are hijacking enterprise LLM access through stolen API keys, exposed cloud identity tokens, misconfigured service accounts, and vulnerabilities in LLM routing software such as CVE-2026-40217 in LiteLLM. Fraudulent charges have exceeded $100,000 in a single day, with cumulative costs at some organizations reaching $1 million before access was revoked.

**Reference:** [Google Warns LLMjacking Attacks Are Costing Some Enterprises Up to $1 Million in Cloud Charges](<https://thehackernews.com/2026/11/google-warns-llmjacking-attacks-are.html>) 

---

📌 **mSecure Warns Users to Change Passwords, Reset 2FA and Passkeys After Suspicious Activity**

mSeven Software has warned current and former mSecure customers to change passwords, reset two-factor authentication, and remove passkeys after detecting suspicious activity linked to its password manager app. The company began investigating on November 3, 2026, and engaged outside cybersecurity experts, but did not disclose what occurred, whether stored vault data was exposed, which systems were involved, how many people received the warning, or whether customers should continue using the app. mSecure stated that vault data is encrypted on devices before syncing through mSecure Cloud, Dropbox, iCloud, or Wi-Fi, though its developers theoretically could access data on mSecure 6.1.5 for Android per a December 2025 German BSI study; the email does not confirm whether vault data or protecting keys were reached.

**Reference:** [mSecure Warns Users to Change Passwords, Reset 2FA and Passkeys After Suspicious Activity](<https://thehackernews.com/2026/11/msecure-warns-users-to-change-passwords.html>) 

---

📌 **Russian Police Arrest 3 Suspected VasyGrek Hackers, Dismantle Criminal Infrastructure**

Russian authorities arrested three suspected members of the financially motivated VasyGrek threat group, also known as Fluffy Wolf, and dismantled its criminal infrastructure. The Ministry of Internal Affairs said the suspects are accused of embezzling organizational funds and creating, distributing, and using malicious software. A highlighted September 2025 phishing attack used a fake reconciliation report to execute malware and steal 660,000 rubles ($8,000). Kaspersky recorded over 100 attempted attacks against organizations in Russia, Belarus, and Kazakhstan between January and September 2026, primarily targeting metallurgical entities, raw-material and industrial-supply wholesalers, and government agencies, with additional targets in healthcare, oil and gas, energy, finance, and agriculture.

**Reference:** [Russian Police Arrest 3 Suspected VasyGrek Hackers, Dismantle Criminal Infrastructure](<https://thehackernews.com/2026/11/russian-police-arrest-3-suspected.html>) 

---

📌 **China-Aligned Hackers Hijack Sogou Input Method DNS Requests to Deploy DarkVigil Backdoor**

ESET attributed a DNS hijacking campaign deploying the DarkVigil backdoor to the China-aligned SlippyNunchucks threat actor, which abused insecure HTTP communications in Windows versions of Sogou Input Method. Active since July 1, 2026, the campaign targeted organizations and Chinese-speaking individuals in Hong Kong, Thailand, Japan, Vietnam, Oman, and Sri Lanka. Attackers tampered with DNS resolution for config.pinyin.sogou.com to route requests to staging servers, which delivered a malicious configuration leading to DarkVigil deployment through legitimate Sogou component SGTool.exe and DLL sideloading. Tencent patched CVE-2026-120422 in version 16.10, released October 29, 2026, by migrating affected HTTP requests to HTTPS.

**Reference:** [China-Aligned Hackers Hijack Sogou Input Method DNS Requests to Deploy DarkVigil Backdoor](<https://thehackernews.com/2026/11/china-aligned-hackers-hijack-sogou.html>) 

---

📌 **cPGuard Update Channel Hijacked to Backdoor Linux Servers and Collect Password Hashes**

An attacker compromised cPGuard's update system on November 2, 2026, using stolen credentials to push a malicious script to customers' Linux servers via versions 5.88.12 through 5.88.19. The script installed a backdoor and collected sensitive data including /etc/shadow and /etc/passwd, root MariaDB/MySQL configuration files, root shell history, and SSH authorization and known-hosts files. OPSSHIELD estimates 32 customer files were taken from its licensing server, though the total number of affected servers remains unknown. cPGuard version 5.88.25 and later removes the backdoor and leftover files, but credentials copied by the script may still work, requiring password and key rotation. OPSSHIELD detected the activity within 12 hours, cleared infrastructure credentials, and stopped further distribution, but continues investigating the initial credential compromise.

**Reference:** [cPGuard Update Channel Hijacked to Backdoor Linux Servers and Collect Password Hashes](<https://thehackernews.com/2026/11/cpguard-update-channel-hijacked-to.html>) 

---

📌 **Forever Bank abnormal transfers confirmed as hacker attack, vendor security configuration vulnerability exploited**

Headline-only coverage from iThome reports that Forever Bank confirmed abnormal transfers resulted from a hacker attack exploiting a vendor security configuration vulnerability. No additional technical details are available in the headline.

**Reference:** [永豐銀行異常轉帳確認為駭客攻擊，供應商安全設定漏洞遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBXZ1lIUTFya21wUEFHVS1CUmRySnFmSzJPTUVFZFZ4WGhVNENKZEtaNWxDYVc0X3lGejZFTnkwbnF6RWRpUEpkVUVCSkh2dw?oc=5>) 

---

📌 **Fresh European Fridge Attacks Put Cold-Chain Security in Focus**

A second wave of cyberattacks hit supermarket refrigeration controllers across Europe, switching systems to defrost mode and raising temperatures to 50 degrees Celsius, causing food spoilage. BBC reported dozens of supermarkets affected across seven countries including Belgium, Luxembourg, Estonia, Ireland, Sweden, and Finland, while Carrefour confirmed 15 of its 700 Belgian stores were hit. Researchers linked the attacks to Internet-connected controllers from Danfoss, Dixell, and Copeland, citing unpatched firmware, default passwords, and weak security hygiene as enabling factors. No group has claimed responsibility, and experts warn pharmaceutical and industrial cold-chain systems face similar exposure.

**Reference:** [Fresh European Fridge Attacks Put Cold-Chain Security in Focus](<https://www.darkreading.com/ics-ot-security/fresh-european-fridge-attacks-cold-chain-security>) 

---

📌 **Suntory Group cloud service hacked, personal data of over 100,000 employees, partners and customers exposed**

Japanese beverage company Suntory Holdings says hackers breached a cloud service and exposed personal information belonging to more than 100,000 employees, business partners and customers. iThome reports the incident as a headline-only RSS item with no further technical details available.

**Reference:** [日本三得利集團雲端服務遭駭，員工、合作夥伴及客戶等逾10萬人個資外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE03TGZaTUlOVlZqZ1R1VXVBMkRrY2RGNWpYRlRCNklpLVNfeDRYSnNzRDk4NUFWdzdid082R2pySi10MFRHLVBsdEFhREk4UQ?oc=5>) 

---

📌 **Identity verification provider WorkOS suffers data breach via AI penetration testing framework ARTEX**

WorkOS, an identity verification services provider, experienced a data breach after attackers used the AI penetration testing framework ARTEX to gain access. iThome reports the incident as a headline-only RSS item with no further technical details available.

**Reference:** [身分驗證服務公司WorkOS資料外洩，攻擊者透過AI滲透測試框架ARTEX得逞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GWU02bFlHSmZZUExBTlcweGtrZlBpcVF3d1pkSlMtUFM3dU5Qb0JfcTZaWjdrYlJQRUptS2gxdWhabUZGNnl3SEEyU2E2UQ?oc=5>) 

---

📌 **E-commerce ERP provider Mokebe Technology hacked; Shopline rotates API keys, merchant data imported into ERP may be affected**

Taiwanese e-commerce ERP provider Mokebe Technology was hacked, prompting Shopline to rotate related API keys and warning that data imported by merchants into the ERP may be affected. iThome reports the incident as a headline-only RSS item with no further technical details available.

**Reference:** [電商ERP業者莫筆克科技遭駭，Shopline更換相關API金鑰，商家匯入ERP的資料恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5tOHQ0dFM4RUFSb0FxbndnYWxHMDJhcjBJaDZrWGEyU1FOSzBwdy04QlRkTGFtLTBldU9paUlxbUx4cEdJV0pQVnpENk11dw?oc=5>) 

---

📌 **Google accuses Android device manufacturers of deliberately preloading backdoors in XCPE botnet controlling over 1.3 million set-top boxes**

iThome reports that Google alleges Android device manufacturers intentionally preloaded backdoors enabling the XCPE botnet to compromise more than 1.3 million set-top boxes.

**Reference:** [XCPE殭屍網路控制逾130萬臺機上盒，Google指控Android裝置製造商刻意預載後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBiNjE0dVZsZUpaemJQTnBIelJnVDRVQU5JRmxGTk1MYjQyZkJrV3hFQVBvUTMyRjZ0b2JlU0ZlZXQ0aTVjdEJZVHlwcW9Udw?oc=5>) 

---

📌 **Mozilla releases Firefox 159.0.1 patching high-risk vulnerability CVE-2026-120572**

iThome reports that Mozilla issued Firefox 159.0.1 to address the high-risk vulnerability tracked as CVE-2026-120572.

**Reference:** [Mozilla發布Firefox 159.0.1，修補高風險漏洞CVE-2026-120572 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE40VUFxYTJVSWFFazBzMW5tR2VPb0FNMHdPTk9TYXhSVVdLb21vN1lnek0zY3pMQnlwLWVPeXlINDVwcjJ5dlJoSS10ZEZBUQ?oc=5>) 

---

📌 **Attack attempts observed against major Node-RED vulnerability as hackers seek to run Linux malware and deploy web shells**

iThome reports that attack attempts have emerged targeting a major Node-RED vulnerability, with attackers attempting to execute Linux malware and deploy web backdoors.

**Reference:** [Node-RED重大漏洞出現攻擊嘗試，駭客企圖執行Linux惡意程式並部署網頁後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA2UHdlUG5jOHhGZ1I2TWV4RWZNcm9yUEI2Y2tXMkt1SkprbHpDMTVYVDFVRkVGTDJHbU9qVXl4VGh4UGl3aGtDVXh3cWtXUQ?oc=5>) 

---

📌 **QNAP completes PHP2Shell vulnerability patches for QTS, QuTS hero, and QuTScloud**

iThome reports QNAP has completed security patches addressing the PHP2Shell vulnerability in QTS, QuTS hero, and QuTScloud. The RSS item is headline-only, so no affected versions, patch dates, or exploitation details are provided.

**Reference:** [QNAP 安全公告：QTS、QuTS hero、QuTScloud 已完成 PHP2Shell 弱點修補 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTFA0VlFJUU1EcEZzY0tqLW5ieDhtWmFGR0tqNEdsUDNnUHIzLWFhZHAtWjltcENjMnJFUDQzV1JMTDJ0YzlaMkcybkdFTQ?oc=5>) 

---

📌 **Germany Busts 'Crime-as-a-Service' Investment Fraud Outfit**

Dark Reading reports German authorities busted a crime-as-a-service investment fraud outfit. The RSS item is headline-only, so no suspect counts, seized infrastructure, victim totals, or technical tactics are provided.

**Reference:** [Germany Busts 'Crime-as-a-Service' Investment Fraud Outfit](<https://www.darkreading.com/cybersecurity-operations/germany-crime-service-investment-fraud>) 

---

📌 **Philippine Migrant Worker Data Likely Leaked in 69GB Government Breach**

Dark Reading reports Philippine migrant worker data was likely leaked in a 69GB government breach. The RSS item is headline-only, so no exposed data fields, breach timeline, affected agency, or confirmed victim count are provided.

**Reference:** [Philippine Migrant Worker Data Likely Leaked in 69GB Government Breach](<https://www.darkreading.com/cyberattacks-data-breaches/philippine-migrant-worker-data-69gb-government-breach>) 

---

📌 **US CISA warns WordPress security vulnerability is being actively exploited**

iThome reports that US CISA has warned that a WordPress security vulnerability is being actively exploited.

**Reference:** [美國CISA警告WordPress資安漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5fV1B6SjlXcko5d2NrYTVuRzlyVlZ1X2tuRkJIenY2aXZ3UndiQV8wUUF1M3JxSGR4b3ExZGFTT2tPb2NLSzdvLTZ0Um5UZw?oc=5>) 

---

📌 **NetApp discloses multiple storage products affected by Linux kernel TCP vulnerability**

iThome reports that NetApp has disclosed that multiple storage products are affected by a Linux kernel TCP vulnerability.

**Reference:** [NetApp揭露旗下多款儲存產品受Linux核心TCP漏洞影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE44VTVMbEF5dnFUekwwSDN1NHBFSjJMS21XMF9BX0ZsX2Z0QzlaSk5zSHdxUTFjLTNZbmZSM0UzRmE4dDhTRE82U1pYTndXQQ?oc=5>) 

---

📌 **India's CERT-In secures access to Anthropic's Claude Mythos AI model to test vulnerability detection and exploitation**

An Instagram post citing Moneycontrol reports that India's CERT-In has secured access to Anthropic's restricted frontier AI model Claude Mythos to test its ability to detect and potentially exploit system vulnerabilities, according to government sources.

**Reference:** [India’s cybersecurity agency, CERT-In, has secured access to Anthropic’s restricted frontier AI model Claude Mythos to test its ability to detect and potentially exploit system vulnerabilities, government sources said, according to a Moneycontrol report. The mod - Instagram](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE9SODR3cjItM3didWlla2k3c2p6UVFHUFdaZWRJTGo3UGNXdkp4bi1OWmRpR1NXS1MwX3ljMFNraHVlSXdrQzh2c0k0UDdxeWdzWHc?oc=5>) 

---

📌 **ASRC Third Quarter Email Security Observations**

iThome reports ASRC's third-quarter email security observations.

**Reference:** [ASRC 第三季電子郵件安全觀察 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE51MzZxWFc5MXM0OTZORnlPTmNvbmduSUJVYS1ORWVmTWx1amJnWEcxSUZuNjB2NGhLMHo5UTF5S1F6OWZmSVQxQm5PUQ?oc=5>) 

---

📌 **TeamViewer, CVE-2026-111585, Remote Code Execution, Remote Control Software**

iThome reports on TeamViewer, CVE-2026-111585, remote code execution, and remote control software.

**Reference:** [TeamViewer、CVE-2026-111585、遠端程式碼執行、遠端控制軟體 - iThome](<https://news.google.com/rss/articles/CBMipwJBVV95cUxNMEd1RFZ1WmQ4eE5sdXoxR3BqdF9qYTN2STlUa0dvcE93NzZ4aTl6OHg1WkdlZUZIcE5DejhQMzAzdE1HUk9BbWpPOElOMEtlUmYtbURfRnZRV2VZNnZFcThHSTVseGVZaVFiVTZHRm1RazlvRnI2cjdKYWRObnEzd2lLMHI3eGlOenJsR0JDLTF6Yzg3UVZwQzExd3dyMDZwaUNGMmQxRjJCOVNfaEJzd1hMRjlLd1pCd0RfTFB3Wm9UTDJvQTZDc1A5V3NTbDlOX2ZVSk5wVjd5VHdpLW16TERNajJjZEdoSzVsTDZtLVdEcVJJSGplWjRybTFDamNsS3VGWTR2YUg5ak1ua2FtU29oYzBibW5SbnV4S0JkNnI4TG1FVnhR?oc=5>) 

---

📌 **Google Releases Chrome 157 Patching 213 Security Vulnerabilities, Seven Rated Critical**

iThome reports Google released Chrome 157 patching 213 security vulnerabilities, seven rated critical.

**Reference:** [Google釋出Chrome 157修補213個資安漏洞，其中7個為重大等級 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5odzhfU1RtajBSckdNYWVKbmN3RTBuYjMtNTJTbXlfMHBXUjkzVHJSNnpRRzRobEw0Qi1JTEFMSEJ1anI5a2JuaGxhbm1Vdw?oc=5>) 

---

📌 **Following 91APP breach, e-commerce technology providers 1shop, Cyberbiz and meepShop issue security warnings**

iThome reports that after the 91APP breach, e-commerce technology service providers 1shop, Cyberbiz and meepShop have also issued successive security alerts.

**Reference:** [繼91APP遭駭後，1shop、Cyberbiz與meepShop等電商技術服務業者接連傳出資安警訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1kaGFtdUw5RkM4WXdDYWdTWlZGSFJ1NFNSdVRJNzlsMVNSUFJwYWphUjZqWXN2d0N5b0w5SGM1ZDFMMmRDQTR1UzdINWJ5Zw?oc=5>) 

---

📌 **TeamViewer patches reverse attack vulnerability allowing controlled endpoint to attack controlling endpoint via remote connection**

iThome reports that TeamViewer has fixed a reverse attack vulnerability in which a remotely controlled endpoint could exploit a remote connection to attack the controlling endpoint.

**Reference:** [TeamViewer修補反向攻擊漏洞，受控端可藉遠端連線攻擊控制端 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFB6cDExVkhscXlrQ3BUS2V1WVpqcVNSQjhGZHFEMXg2Mk8yaW1fLUhqQlZXM0Z0YzhwMl9tWGdqMjhicUdkcmFLcTJfWEh2dw?oc=5>) 

---

📌 **Refrigerators hacked again in European supermarkets**

Xakep reports that refrigerators in European supermarkets have been hacked again.

**Reference:** [Холодильники в европейских супермаркетах снова взломали](<https://xakep.ru/2026/11/03/freezers-hack>) 

---

📌 **NetApp CVE-2026-98432 Linux TCP vulnerability ONTAP**

iThome reports NetApp is affected by CVE-2026-98432, a Linux TCP vulnerability impacting ONTAP. No additional technical details were provided in the headline-only source.

**Reference:** [NetApp、CVE-2026-98432、Linux TCP漏洞、ONTAP - iThome](<https://news.google.com/rss/articles/CBMirwFBVV95cUxPNU1qSGdtM2RIZWU1V2MxRUwyR2VPWVZkS2U2cDgwVVFMdkdMd3c2d2tFS2R0NGRjSWJXQ3RIWUJUUnVMM3NBVVhKVm1FVXdTbk9MQXFTa2dlTGJoMWR4bkE1dXdZakpNeUFVbXhhWWx5LUZMSlBLdmtDNFh4ZlR3cnhxOHR1V0NrYU1RRDN2S0pUVlU4bnp5MEdCTDBUWkh6Q0J1NTVRMGRKUFVTdk9J?oc=5>) 

---

📌 **XCPE Botnet Affects Nearly 90,000 Android Devices in Taiwan, Ranked Fifth Globally**

iThome reports that the XCPE botnet has affected nearly 90,000 Android devices in Taiwan and ranks fifth globally.

**Reference:** [XCPE殭屍網路波及臺灣近9萬臺Android設備，全球排名第5 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nX29sYXRXbEdQRFQ4bUdsYWhsdHdhYVlBbV9FeGh1WUM2blFEeDE4UEdHc2oxS1Zxbm9hNmxGYUFkamdEZTYwRF9lZFVMdw?oc=5>) 

---

📌 **XCPE Botnet**

iThome reports on the XCPE botnet.

**Reference:** [XCPE殭屍網路 - iThome](<https://news.google.com/rss/articles/CBMie0FVX3lxTFBPcnM2M0ZwZ1l2R1NKUWd0RmloYkJCZHJobTRvV0lfTXNCZFNWNW9IQ18tNjYwbFphRmJ1bS1tVGd3VVU4azltSFNBbWE0d01XQkw1WUp3RTM1QjJXVnpyY0Z5YTYzY05oZnItaS1oc0x2el9vYWVocUlUZw?oc=5>) 

---

📌 **Android 'SMS of Death' vulnerability can remotely disrupt mobile call services - iThome**

iThome reports that an Android vulnerability dubbed 'SMS of Death' can remotely disable mobile call services through a malicious text message.

**Reference:** [Android遭揭露「死亡簡訊」漏洞，可遠端癱瘓手機通話服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE40OXVsMGdwd2d5ZlZ1dTd6UjZBV28tUEFFbVhDQVVMYUNLM3R1T1BlWWNXSFp1WHRYTXZyR0NYa2NzVzJtV1J5Z0NTaUdwdw?oc=5>) 

---

📌 **Android devices - iThome**

iThome reports on Android devices in a headline-only update with no additional technical details available.

**Reference:** [Android設備 - iThome](<https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5ZVlVSdHZONG1UMFJKODV2ZXhIaFVYWmU4ZU02YnAwZ2lMbExXdnd2VlFRMXBhVmZrMHFrSW8tUHpva1ZOWEhWUGNjNDFHSmhsendrZE0tRWp3d0U2eGJpQS1Fa25ValE?oc=5>) 

Supplemental search context: [Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261104-1-1793816565480 -->
