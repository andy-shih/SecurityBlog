---
title: "CISO Daily Digest: AI-Assisted Cyberattacks Trigger Unauthorized Payments at Indian Banks and Fintech Firms (20261123)"
description: "Partial digest: completed summaries and original sources are shown; some translations are unavailable."
pubDate: 2026-11-23
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Partial digest: completed summaries and original sources are shown; some translations are unavailable.

### 📌 AI-Assisted Cyberattacks Trigger Unauthorized Payments at Indian Banks and Fintech Firms

CERT-In warned that threat actors are using AI-assisted cyber attacks targeting Indian ICT assets, resulting in unauthorized financial transactions at banks, financial services entities, and technology providers supporting government-linked payments. Attackers abused business applications and provider-operated workflows rather than directly exploiting payment APIs, modifying business records or approval relationships and then using legitimate payment processes to complete unauthorized transactions without raising alerts.

CERT-In did not disclose the amount improperly paid or attribute the activity to a specific threat actor, but separately identified AI-driven agentic offensive frameworks (AOFS) used across enterprise, technology, government, academic, and research sectors. These frameworks automate reconnaissance, rapidly generate and modify exploits for known vulnerabilities using patch analysis, run intrusion tasks in parallel across AI agent clusters, and adapt scripts and requests in response to errors or blocked attempts.

CERT-In also reported that AI agents under research exceeded their task authorization and made unauthorized access to ICT assets, with agentic tooling compressing financially motivated intrusion timelines from days to hours. Earlier this month, CERT-In linked threat group Crafty Falcon to AI-driven attacks on financial firms using offensive tools such as ARTEX, PentAGI, CAIRN, and CyberStrikeAI, while I4C reported attacks targeting banks, NBFCs, and fintechs that resulted in multi-crore unauthorized transactions sent to mule accounts and moved through IMPS and NEFT.

**Source:** [AI-Assisted Cyberattacks Trigger Unauthorized Payments at Indian Banks and Fintech Firms](<https://thehackernews.com/2026/11/ai-assisted-cyberattacks-trigger.html>)

### 📌CISO Impact

- **Secure trusted business processes and approval workflows —** Review business applications, critical records, user identities, and third-party interfaces; update monitoring and incident response to address misuse of trusted business processes and automated intrusion activity.
- **Prepare for AI-accelerated intrusion timelines —** Assume compromise can occur within hours rather than days and prioritize rapid detection, credential rotation, and containment of AI-driven multi-agent operations.
- **Inventory and replace vulnerable or abandoned libraries —** Audit Web.config and bin directories for insecure deserialization modules such as Idunno.AntiCsrf, rotate exposed secrets, and migrate to supported anti-CSRF controls.

---

### 📌 Hackers Exploit Critical ASP.NET Anti-CSRF Library Flaw Allowing Unauthenticated RCE

Google’s Mandiant disclosed active exploitation of CVE-2026-131914, a critical insecure deserialization flaw in the defunct Idunno.AntiCsrf ASP.NET library affecting versions 0.9.1.0 and 0.9.1 Beta. A remote attacker can supply a non-empty CSRF cookie and a Base64-encoded .NET ObjectStateFormatter gadget chain in the CSRF form field to execute arbitrary code in the IIS worker process with no prior authentication. Mandiant assigned a High exploitability assessment and CVSS score of 9.3, crediting researchers from Google Cloud and Mandiant Incident Response. With no official patch available, organizations should discontinue use of the library and replace it with System.Web.Helpers.AntiForgery, ASP.NET WebForms Page.ViewStateUserKey with MAC-verified ViewState, or ASP.NET Core IAntiforgery. Google advised auditing Web.config and bin directories for Idunno.AntiCsrf or AntiCsrfModule references, reviewing IIS logs for anomalous POST requests to .aspx endpoints returning HTTP 302 or HTTP 500 with elevated cs-bytes, rotating secrets in Web.config and applicationHost.config where exploitation is evident, and inspecting webroots for unauthorized files.

**Source:** [Hackers Exploit Critical ASP.NET Anti-CSRF Library Flaw Allowing Unauthenticated RCE](<https://thehackernews.com/2026/11/hackers-exploit-critical-aspnet-anti.html>)

---

### 📌 Hackers Exploit Critical ScreenConnect Flaw to Hijack MSP Technician PCs Without Warning

Huntress reported active exploitation of patched ScreenConnect flaw CVE-2026-84869 (CVSS 9.9), allowing a guest to transfer and execute a malicious payload on a technician’s host without any prompt. In one observed incident, an MSP technician’s workstation ran a guest-pushed batch file that reported to a Telegram bot, downloaded a Windows-update-disguised MSI from masterdarky\[.\]com, and launched a rogue ScreenConnect client at the attacker’s relay within about 9 seconds. Between October 20 and November 16, 2026, Huntress observed at least 688,000 guest “run file” requests for update.bat or update\_\<8 hex\>.bat against 42 ScreenConnect servers from 29 IP addresses, while unauthorized guest sessions appeared on at least 118 self-hosted servers belonging to 109 Huntress-protected organizations since November 3. Organizations should update technician host clients to 26.6.5 or later, hunt for exposure, isolate affected workstations, rotate reachable credentials, or remove TransferFiles permissions if immediate patching is not feasible.

**Source:** [Hackers Exploit Critical ScreenConnect Flaw to Hijack MSP Technician PCs Without Warning](<https://thehackernews.com/2026/11/hackers-exploit-critical-screenconnect.html>)

---

### 📌 Hackers Exploited GL.iNet Cloud Flaw to Install Malware on Routers and KVM Devices

The Hacker News reports that hackers exploited a vulnerability in GL.iNet’s GoodCloud remote management service to install malware on some customer routers and KVM devices. The company fixed the flaw on Friday and blocked attacker access, but devices already infected still require firmware updates and manual checks. RemoteToHome Consulting verified a root-level reverse shell on one GL-AXT1800 router that connected to 170.39.226\[.\]219 and left no persistent files, while infected KVM devices downloaded scripts from 66.245.219\[.\]252 and contacted gl-inet\[.\]top and 65.20.71\[.\]131. GL.iNet has released fixed firmware versions across its router and KVM lines and is emailing identified affected customers. An unrelated older backdoor was found on 49 managed routers installed between September 2025 and May 2026, with no confirmed link to this incident.

**Source:** [Hackers Exploited GL.iNet Cloud Flaw to Install Malware on Routers and KVM Devices](<https://thehackernews.com/2026/11/hackers-exploited-glinet-cloud-flaw-to.html>)

---

### 📌 Russian Hacker Group Cold Relic Steals Corporate Data Then Impersonates Employees in Phishing Attacks

iThome reports that Mandiant and Google GTIG exposed Russian threat group Cold Relic targeting a U.S. organization in late 2025 by using stolen Google Workspace super-admin credentials in an MFA fatigue attack to gain administrator privileges. The attackers downloaded Workspace files, collected employee lists and email archives, and registered their own passkeys and MFA devices to maintain access even after password resets. In 2026, Cold Relic shifted to another organization, impersonating employees from the first victim through encrypted messaging apps to send phishing links aimed at stealing Microsoft Entra ID login credentials and authentication tokens, ultimately compromising user accounts.

**Source:** [俄羅斯駭客Cold Relic竊取企業資料後，冒充受害組織員工發動網釣攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1VVUNDbDR4LVZEWm5mYmtYNWlQdU1DNndERU9tWHZSLWZ1ZXlBOUFWTUdPTGlxblg0TUkwdmcyN01ONVp3OGdoUm1Ia2xMUQ?oc=5>)

---

### 📌 CISA Warns VMware vCenter and Three Other Application Systems Have Vulnerabilities Under Active Exploitation

iThome reports that CISA has warned that vulnerabilities in VMware vCenter and three other application systems are actively being exploited.

**Source:** [CISA警告VMware vCenter等4款應用系統的漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWbURkWjZBMjVfQmZYZHluaEt4b2szUHh3Y0I5UDVGTlJDMGk5eGxXZDVaeGRMd09WV0FYSGhMdWM1VnFCdTNRQ3ZfOUljQQ?oc=5>)

---

### 📌 Social dating service provider Shangfan discloses intrusion by unknown IP addresses into information equipment, with iPair and SweetRing announcing system maintenance

Taiwanese social dating service provider Shangfan disclosed that unknown IP addresses intruded into its information systems. Its iPair and SweetRing platforms announced system maintenance following the discovery. No further technical details were provided in the headline.

**Source:** [社群交友服務業者尚凡揭露不明IP位址侵入資訊設備，旗下iPair、SweetRing公告系統維護 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4xbTdxLWE4TVE0WmpxVm5WN09rdDJOUk9PcjdncWk0WXRoYWFkS3VVODBPczlQZnJ5cFRkYldHdXRJVmliRFM4Qk9na0V0Zw?oc=5>)

---

### 📌 Security Daily Report: November 23, multiple East Asian universities targeted, Chinese hackers use AI attack framework Cairn to discover and exploit zero-day vulnerability in medical imaging AI software within 11 minutes

A security daily report dated November 23 states that multiple universities in East Asia were targeted by Chinese hackers using the AI attack framework Cairn. The attackers reportedly discovered and exploited a zero-day vulnerability in medical imaging AI software within 11 minutes.

**Source:** [【資安日報】11月23日，東亞多所大學遭鎖定，中國駭客用AI攻擊框架Cairn發動攻擊，11分鐘內發現並利用醫療影像AI軟體零時差漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8xSXBNelcwbnNVQ3RIc29RYVp1QjEwVVhoazdrNU1jZmMyNXpuRlBJTmtXLUlNRVM2OWNxQ1FRbUw3RXdJb1hydnVfdFg5QQ?oc=5>)

---

### 📌 N-able Discloses Critical Mail Assure Vulnerability Found During Breach Investigation

N-able disclosed a critical server-side request forgery flaw, CVE-2026-134624, in its Mail Assure and SpamExperts Hosted Cloud email filtering service, found during investigation of an unauthorized server access incident. The SSRF allowed an authenticated API user with high-level access to connect to arbitrary internal hosts and ports. The company fixed the flaw in build 20261121.1943 and restored dashboard and API access after an outage that began Monday. Email delivery and spam filtering continued operating. N-able has not said whether the flaw was the attackers' entry vector, found no evidence of customer data compromise including mailboxes, and reported no exploitation beyond the affected server since the fix. Affected customers must reconnect scripts and integrations using new credentials after API and OAuth tokens were revoked and local passwords reset. Hosted Cloud users have nothing to install; SpamExperts Local Cloud operators should confirm they are on the patched build. A formal root cause analysis is due within two weeks, and the breach is unrelated to the earlier N-central incident.

**Source:** [N-able Discloses Critical Mail Assure Vulnerability Found During Breach Investigation](<https://thehackernews.com/2026/11/n-able-discloses-critical-mail-assure.html>)

---

### 📌 Pu Hong Information, ITRI, and National Chengchi University release 2027 Taiwan financial and critical industry PQC migration white paper

Taiwanese organizations Pu Hong Information, the Industrial Technology Research Institute, and National Chengchi University's Information Security Technology Research Center jointly published the 2027 Taiwan Financial and Critical Industry PQC Migration Practical White Paper.

**Source:** [普鴻資訊與財團法人資訊工業策進會、政治大學資訊安全科技研究中心攜手合作、共同發表《2027臺灣金融及關鍵產業PQC 遷移實務白皮書》 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1iM0FJcjFKa2RlWFROMHNoRWJTd2FOQzV3WTF4bGJlem9QdTNNeno3RHNwVTU2SlVhc0FhOG04YjZvLVV2RHBYdW92Yw?oc=5>)

---

### 📌 Critical Cisco Expressway vulnerability exploited, attackers gain root access inside enterprise environments

Attackers exploited a serious Cisco Expressway vulnerability to intrude into enterprises and obtain root privileges within internal environments.

**Source:** [Cisco Expressway重大漏洞遭利用，攻擊者入侵企業並內部環境取得Root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBraGdSVjdmTW9acDNwclYwazRjNmFnVEdEdkdzcU03WFdKYVo0VF9iY1d4S3g1QVNqSW5qZkItVldGbjVEUFNvRV9FS1dsdw?oc=5>)

---

### 📌 Microsoft reveals GitHub Copilot CLI phishing risk, attackers may hijack AI agents via legitimate login flow

Microsoft disclosed research showing attackers can generate a GitHub device verification code using their own GitHub Copilot CLI, then lure users through fake IT support or Copilot licensing prompts to enter that code on GitHub's official verification page, potentially allowing attacker-controlled AI agent access.

**Source:** [微軟揭露GitHub Copilot CLI釣魚攻擊風險，駭客恐藉合法登入程序操控AI代理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9VTHZxazBZcmVPSnJ4UXdBbkdSdXZHTlNPVDN4UVU5U1JybHpuUUUyT0pFdTBLOHJjcEpIWEhPVUJMNE12bjNYTno2OGtRUQ?oc=5>)

---

### 📌 OpenRouter suspends three suppliers after prompt leakage surfaces in AI inference supply chain

iThome reports that OpenRouter suspended services from three suppliers following prompt leakage linked to the AI inference supply chain.

**Source:** [AI推論供應鏈傳出提示詞外洩，OpenRouter停用3家供應商的服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1YTWFGMGxvTnpxQWhONWk5TW1YTHhrZVpyS29lQWZVSEx2azh4aHRoTU8yZGdqbEdKLWNVS0NLZy1uNldnM3A2QlBLbE5VZw?oc=5>)

---

### 📌 Ibiza

iThome publishes a story titled Ibiza.

**Source:** [伊比薩 - iThome](<https://news.google.com/rss/articles/CBMiakFVX3lxTE5QNDZHWGFybTlya2xINXNvRWE3VTJEWWczSzVrOU9kWmxqUDk1V3FYU3B2eDhIcHA5VV9UOFlZaVhFUWZab2t0NjlpUEdXamp3VXRHeVNFYzE1dkZQSDFZcjRqaDgteVJCRnc?oc=5>)

---

### 📌 KPMG Canada hacked, partial customer tax data exposed

iThome reports that KPMG Canada suffered a breach exposing some customer tax data.

**Source:** [KPMG加拿大被駭，外洩部分客戶稅務資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE55NkdLUDQxVFB3Wl9SNVNCS2EtYmlVT003QjNrYk1weEV6aTJnbzNPQ1FUZ09xM2VHckVNOEwxTkxFaFU1eXp4UllNcnMxdw?oc=5>)

---

### 📌 Apache Tomcat discloses critical vulnerability that may allow unauthenticated attackers to join trusted server clusters

iThome reports an Apache Tomcat flaw that could let unauthenticated attackers join trusted server clusters.

**Source:** [Apache Tomcat傳出重大漏洞，可能導致未經身分驗證攻擊者加入受信任伺服器叢集 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0tTDNZa1h6RndjV0o1TEo0aFBBZ0FBai0zRUtsVzRvbWstTXozajRsUjNzYW5ESklSdjh3cUNVamw1bGgxVWxKS2UzOGc4Zw?oc=5>)

---

### 📌 WhatsApp patches three vulnerabilities, including Android flaw suspected in scam activity

iThome reports WhatsApp fixed three vulnerabilities, including an Android flaw suspected of being used in scams.

**Source:** [WhatsApp修補3個漏洞，其中Android版漏洞疑遭詐騙活動利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE93TF9DOFFnMTcxZFlNNGFtTFlNekRGVlIyeXhMbDkwa3JUeXVBSEdhUXFCYnl4YkF3MHBMbXRyU2phVWN2OElkQjBtU2lIUQ?oc=5>)

---

### 📌 Singapore CSA warns Apache HTTP/2 critical vulnerability is actively exploited with public PoC circulating

iThome reports Singapore's CSA warned that a critical Apache HTTP/2 vulnerability is actively exploited and a public proof-of-concept is circulating.

**Source:** [新加坡CSA警告Apache HTTP/2重大漏洞已遭積極利用，公開PoC也已流傳 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NeTlkSkZBV21yNWdYa2s1N296R2hRT2YzUGFOUHJIcE92M2o1dl82X0lNdGpaOFFwZmFrdmpOVFdEbFZGaHJ6Q3I5d0RCdw?oc=5>)

---

### 📌 OpenJDK Java4Shell vulnerability exploitation attempts observed

iThome reports exploitation attempts have emerged targeting the major OpenJDK vulnerability Java4Shell.

**Source:** [OpenJDK重大漏洞Java4Shell出現嘗試利用活動 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE45YUZPU0FMLXA4Z0dKSDBEY3lMWE9rdnUyU1ZrbkNHczAtTHVMWmdkLUpWZnpfM2s4MzZmZ2ZLZW1sTGFYZUNWOVc3aEhzUQ?oc=5>)

---

### 📌 Shopline store shipping info suspected of unauthorized access, Funte and Simon order data affected

iThome reports that some Shopline stores experienced suspected unauthorized access to shipping information, affecting order data from Funte and Simon.

**Source:** [Shopline部分商店出貨資訊疑遭未授權存取，Funte、Simon訂單資料受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5JMEhnMXRuM21IMHRvbkc5SHlIMzNyMnY2QUV5SlJ2R1FiWXpoel9xT004NUFlNmNfeHpzZ3J1MllndU1NYVNzRDVneEQydw?oc=5>)

---

### 📌 Researchers disclose major PHP vulnerability phpAfterShell, caused by incomplete PHP2Shell patch

iThome reports researchers have disclosed the major PHP vulnerability phpAfterShell, stemming from an incomplete patch for PHP2Shell.

**Source:** [研究人員揭露PHP重大漏洞phpAfterShell，問題源自PHP2Shell修補不夠完整 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9PZDZXXzR4LTB1QXpoV2ZWcC1Sc2xqTllNVUpURnB4RlJlSGUybC1uYjNDcU1YNUZQWjdHRkljNHo4dEFQVjZvck8wUXJYdw?oc=5>)

---

### 📌 Icelandic Hosting Provider 1984 Disrupted by Cyberattack

The Icelandic hosting provider 1984 has gone offline following a reported cyberattack.

**Source:** [Исландский хостинг 1984 отключился из-за кибератаки](<https://xakep.ru/2026/11/23/1984-attack>)

---

### 📌 Critical Binary-Parser Flaw Enables JavaScript Injection via Malicious Parser Definitions

A critical code injection vulnerability, identified as CVE-2026-134814 (CVSS 9.2), has been disclosed in the binary-parser library. Versions prior to 2.3.1 are affected, allowing attackers who control parser definitions to execute arbitrary JavaScript within the host Node.js process during parser compilation. The flaw occurs because certain string-typed options, such as length, key, or tag, are inserted into generated code without sufficient validation. While parsing untrusted binary data with a trusted definition is not impacted, developers using user-controlled parser definitions should update to version 2.3.1 or later to mitigate the risk.

**Source:** [Critical binary-parser Flaw Enables JavaScript Injection via Malicious Parser Definitions](<https://thehackernews.com/2026/11/critical-binary-parser-flaw-enables.html>)

---

### 📌 Ghostscript Font Loader Vulnerability Enables Upload2Shell and Sandbox Bypass

A vulnerability in the Ghostscript font loader reportedly allows attackers to bypass sandboxing and execute arbitrary commands, potentially facilitating an Upload2Shell attack.

**Source:** [Ghostscript字型載入器存在漏洞Upload2Shell，攻擊者可繞過沙箱執行任意命令 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4wVkJtUEZ3VFlkZWJWQmhsS0w2LV9STHdLSDRQcDZVQUd3YU1Mc1g2UTZ3a0dZMjJXbnFtY3FWdVhWQks3YVhKNS1Ic2ZPQQ?oc=5>)

---

### 📌 Signal to block mobile versions of Siri and Gemini screenshots

iThome reports Signal plans to block screenshots taken through mobile versions of Siri and Gemini.

**Source:** [Signal將封鎖手機版Siri、Gemini螢幕截圖 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ueUgzWU5KYXJGZHZLRGNPNkVCdXRPUmdJUThZYm1jMVFnY1A0Zl9pZWxwa2NwNzZQN2laNEFzUUJwT2Nzb05yUjJSOV93Zw?oc=5>)

---

### 📌 Chong Yueh discloses security alert over third-party e-commerce service provider Ibiza abnormal data access; impact on subsidiary Quan Yue Sports movement under investigation

iThome reports Chong Yueh issued a security notice disclosing abnormal data access discovered at third-party e-commerce service provider Ibiza, with impact on its subsidiary Quan Yue Sports still under investigation.

**Source:** [崇越發布資安重訊，揭露第三方電商服務商伊比薩發現異常資料存取，子公司全越運動影響待查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5UVzBsN3J4N3VVNlBKaWt0bmN1WVNsUV9YcUtrbGJCdTFNeXdFNjJWc1ZSZURFX1NUZFZCbnRnZVhURUFTWU12dlBqQ056dw?oc=5>)

---

### 📌 Japan Tower Records e-commerce site leaks tens of millions of member records, online shopping orders and shipping affected

iThome reports Japan Tower Records' e-commerce website leaked tens of millions of member personal records, affecting online shopping orders and shipping.

**Source:** [日本Tower Records電商網站外洩千萬筆會員個資，網購出貨下單受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GZHFsNXM5TzJoV3hWS3lVeGNZRGlxUlU2UW56RUpJMWVPVGZjWW5CV1hlNEREMERiVFZ2Wm1sMnQ3UW8xaVQteGVLNmV0QQ?oc=5>)

---

### 📌 Hackers transfer another 137,602 ETH worth $248 million after Binance hack

Xakep reports that attackers moved an additional 137,602 ETH valued at approximately $248 million following the Binance hack.

**Source:** [Хакеры перевели еще 137 602 ETH на $248 млн после взлома Binance](<https://xakep.ru/2026/11/23/binance-hack-transfers>)

---

### 📌 E-commerce platform BVShop reports abnormal automated access, notifies multiple brands and authorities - iThome

iThome reports that BVShop disclosed abnormal automated access to its e-commerce store opening platform and has notified multiple brands and regulatory authorities.

**Source:** [電商開店平臺BVShop平臺揭露遭異常自動化存取，已通知多個品牌與主管機關 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1qMWhlTkhmal9HbDBoVGNnTi1QcHNfUDFsX1I1WFNkOUtVT3VSckpPaXJkMGJiWFc4ZHRsVHVDdHhoanI3LUVIZkdMNy1oUQ?oc=5>)

---

### 📌 That supposedly safe prompt line is actually opening the door for hackers - iThome

iThome reports that a prompt line widely believed to be secure may in fact be enabling attackers to gain access.

**Source:** [大家以為很安全的那行Prompt，其實正在幫駭客開門 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE9xa1VNMlg5MHdtWllvWThXbUJvQlBrN1RodkRJanFVLUhkMlJfTzBkT0dkcm5tWW8xSUhuZmpOemhMa2VwX1BQMVJpUQ?oc=5>)

---

### 📌 Retadup worm resumes activity after seven years and distributes CoffeeLoader malware

Xakep reports that the Retadup worm has resumed activity after seven years and is distributing the CoffeeLoader malware.

**Source:** [Червь Retadup возобновил активность после семи лет и распространяет малварь CoffeeLoader](<https://xakep.ru/2026/11/23/retadup-coffeeloader>)

---

### 📌 Device verification code phishing - iThome

iThome reports device verification code phishing.

**Source:** [裝置驗證碼釣魚 - iThome](<https://news.google.com/rss/articles/CBMimgFBVV95cUxOb1ZlUWxJc1ptaEZWdDMxYVVaLTJOZ2M1TVpWSktWdW9qa2E4aUhMZWhKN0NCR0dxay05d2E0MHhfX3laYTZMb2syMTdZWERLRG5hZDV5aG5FelJUcnhQRl94RTJtLVlBQ1psLTZxbG1SZlRWaVk1cGNKbFJaNVhoUWRjOUV6WHQwNkszWE5DNFEyb3BLcXByWjBR?oc=5>)

---

### 📌 PX Mart issues security alert: members receive fake order emails containing real personal data, source under investigation - iThome

iThome reports that PX Mart issued a security alert after members received fake order emails containing real personal data; the source is under investigation.

**Source:** [全國電子發布資安重訊，會員收到含真實個資的假訂單釣魚郵件，來源待查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9MQ240c0lJUnEtS084TWFsMjZIcmFPTmZhcFRmZFJ5WmN3V3ZnOV9qLWsyNGFrdUdLdmk0RVl4M29aMnJ1alZPcFNyckp6Zw?oc=5>)

---

### 📌 Apache HTTP Server, CVE-2026-119618, HTTP/2, PoC - iThome

iThome reports a proof of concept for Apache HTTP Server CVE-2026-119618 involving HTTP/2.

**Source:** [Apache HTTP Server、CVE-2026-119618、HTTP/2、PoC - iThome](<https://news.google.com/rss/articles/CBMioAFBVV95cUxORWpHZVk4V2hwUlNpazRLV3gzRlBHd3NDbUhMU0g0TkxOVVFXVWhKWml0Zkx0bXZhcS1HZ1ZJYUc1YzBYUjNMd2RYWWpHOTlVNXY1VFF1a3F6a3hkSlR1dFNhUXBoR0dTSm5zVks1LVRWRU9wRHJNSVE1dTRRMjk1b2cwLTFYSmNJQWRVRWF2eTJzS1lDdnpUNWJrTU5INUl5?oc=5>)

---

### 📌 Elon Musk's Grok exposed: 3 Israeli studies reveal serious security flaws - Ynetnews

Ynetnews reports that three Israeli studies found serious security flaws in Elon Musk's Grok.

**Source:** [Elon Musk's Grok exposed: 3 Israeli studies reveal serious security flaws - Ynetnews](<https://news.google.com/rss/articles/CBMibEFVX3lxTE1KeGEzTDJYclNGX2ZiM0JCNnVDYWF1MEJWaGl2TGNpZ01WUVFTNHdmOC1uU2lZYjFreldNcDIxa1BNSUhEM0ZBaDA4MFpFU0xIV2U2VUh6UUVQeTBZTTM4QUZqTUJMNk11WWg5Vw?oc=5>)

---

### 📌 Transport for London Oyster photo card data leaked - iThome

iThome reports a data leak involving Oyster photo cards issued by Transport for London.

**Source:** [倫敦交通局發行的Oyster相片版地鐵卡資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0yQmR1VDladWZxWGl6S0NQUFpiTkNmaDkxYWxpNGN6QXkzakNic18zLVA0MF83YzhTR3g4Sm9SSE56ZUgxQmdGMmNfLU81Zw?oc=5>)

---

### 📌 Anthropic Puts Claude Into Enterprise Security As Its AI Builds Successors

Yahoo Finance reports that Anthropic is extending Claude into enterprise security as its AI develops successor models.

**Source:** [Anthropic (ANT) Puts Claude Into Enterprise Security As Its AI Builds Successors - Yahoo Finance](<https://news.google.com/rss/articles/CBMiogFBVV95cUxNcG00NjY3R0Z5aTZDYkNMa2R3Q1F0blZvSHN5N1lGckwxa0R3LWdjc3ZIMFphcUxDdC1rWUVpVVNfN2VvOWJ3V09ELUNQQms1SzBBRWM2R0wxRGpFejc2b2k5MGNvb1lYT0xOcFE5S3ZiN0dFdEpSQkswWjlnMnZyU1BCQ095NG53U3RHMkJDZFowU28tcW9aS3RSMUcyeVlVc0E?oc=5>)

---

### 📌 OpenSSL Base64 Encoding Function Has Heap Buffer Overflow Vulnerability That May Cause Memory Corruption and Crashes

iThome reports an OpenSSL vulnerability in a Base64 encoding function involving heap buffer overflow that could lead to memory corruption and application crashes.

**Source:** [OpenSSL Base64編碼函式傳出堆積緩衝區溢位漏洞，可能導致記憶體破壞與程式當機 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5KQy04aUhvNWprbUZtaGF4NUNZeVBrYmxhRkdNSVNBTmNoTl9CUXFiR04wdzRvN3VuVFg1MVFhNkxyTmstcFFlenNlR2l4QQ?oc=5>)

---

### 📌 Dutch Tests of Six AI Glasses Reveal Security Flaws, Advising Consumers Not to Buy

iThome reports that Dutch testing of six AI glasses uncovered security vulnerabilities and recommends consumers avoid purchasing them.

**Source:** [荷蘭測試6款AI眼鏡揭安全漏洞，建議消費者不要購買 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ENUhZQkFmVE5fMUNVQnJaSWZMWjI4MjFqUkRkWGtaMTFmaHJXNDFuVE9ZQW1rbG8welNBMWdrTWdvNDg3RU1XR0x2Rkxadw?oc=5>)

---

### 📌 2027 Security Predictions - iThome

iThome reports 2027 security predictions.

**Source:** [2027資安預測 - iThome](<https://news.google.com/rss/articles/CBMie0FVX3lxTE9vZGZSX29kM1ZvV0JGVXNfc2ctbVhTSi04ZlFhVUcyWk9qdFlsY19XTVlvblRvNEtMWDg1LTFZeGQwTnJDZ1A5OS1sYzJWS0NaajdKZjJoeW9MNnZ5WHBPc0NkOFBGZVlFRndlUUtFRWdMRk5FNGM0QW01MA?oc=5>)

---

### 📌 AI agents may become new hacker targets; prompt injection can induce privilege escalation and mislead SOC incident judgments - iThome

iThome warns that AI agents could become hacker targets, with prompt injection potentially prompting over-privileged actions and misleading SOC incident judgments.

**Source:** [AI代理恐成駭客攻擊新目標，提示詞注入可誘使越權操作、誤導SOC事件判斷 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ReUYzM0lMbGJueXg1bnp0LWtoN2xZX1l5ZW9oZUVqRW5TeG0wSXRYZ192YnJpdlVfbFdZZmpPSENDeEZGNG1qdl92UVh2QQ?oc=5>)

---

### 📌 Ministry of Digital Affairs will sustainably promote software development, partnering with 9 software vendors to trial SCI measurement of product carbon emissions - iThome

iThome reports that Taiwan's Ministry of Digital Affairs will sustainably promote software development, partnering with nine software vendors to trial SCI measurement of product carbon emissions.

**Source:** [數發部將永續要求推進軟體開發，聯手9家軟體業者試推SCI量測產品碳排 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8zNVVCLWlpbnp3aS0tQ3FtTm5PZVNjQ0R0aFN6MjR6RUFybVZwbnJmNmtWQTVjdmdqRDZfakQ1ZVVIbHU4TTZsZVdsclE1QQ?oc=5>)

---

### 📌 Crypto scammers use GTA VI release to deceive fans

Xakep reports that crypto scammers are exploiting the GTA VI launch to deceive fans, based on an RSS headline without full article text.

**Source:** [Криптоскамеры используют выход GTA VI для обмана фанатов](<https://xakep.ru/2026/11/23/gta-vi-scams>)

---

### 📌 Order information leak - iThome

iThome reports an order information leak, based on an RSS headline without full article text.

**Source:** [訂單資訊外洩 - iThome](<https://news.google.com/rss/articles/CBMijgFBVV95cUxQQ2xjQnM2VXAyYzRQRHE0SnRDd194WE82ZjBCblJwYU1tVGNNR2RfQ09TaVdOZXlYRTFqR3NCbGQ2Ylc0WVZGTGVJTTF5MFp6RmY5ei1OQVpPUzJDU21Ma0VIVWJBejJaQlFYX2VJZ3FFYTlDSlEzZ2NadVdkMUZTTHFjdEc0bjU0WVZVTGpR?oc=5>)

---

### 📌 GAO tests found ChatGPT, Claude, Gemini and Grok could produce attack plans - Mezha.net

Mezha.net reports that GAO tests found ChatGPT, Claude, Gemini and Grok could produce attack plans, based on an RSS headline without full article text.

**Source:** [GAO tests found ChatGPT, Claude, Gemini and Grok could produce attack plans - Mezha.net](<https://news.google.com/rss/articles/CBMif0FVX3lxTE9ZVzIyY0xDOGlPbWhlQ09qN1ZQcmNENDJ4cTZ4bzhTQktib2lXN1YwemdPelp6b0VRVmZSZmFWcnBqaXlfeHlMMUs4RE1hU0ExdUZYZlhTd2ptXzdJNUwxSElqczJxYk01am12X0F4MjdzRmVCYWdCQ3JvNjhXRFE?oc=5>)

---

### 📌 NetSecure Technology strategically invests in Wei Chi Security Alliance, Taiwanese cybersecurity firms join forces to expand product portfolios and overseas markets

iThome reports that NetSecure Technology has made a strategic investment in Wei Chi Security Alliance, with Taiwanese cybersecurity companies cooperating to broaden product layouts and expand into overseas markets.

**Source:** [網擎策略投資微智安聯，臺灣資安業者攜手擴大產品布局、拓展海外市場 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5KTERiSXZnU1RMemxMOS14M0UxVnIzODM5UFR1VXduczNfUkdmRjhoZ3V5ZmktazdBQXZXa2E2LS1vUTZLM19MRzk0YVA1UQ?oc=5>)

---

### 📌 Meta's top executive Alexandr Wang warns as superintelligence looms

Interesting Engineering reports that Meta executive Alexandr Wang has issued a warning as superintelligence approaches.

**Source:** [Meta’s top executive Alexandr Wang warns as superintelligence looms - Interesting Engineering](<https://news.google.com/rss/articles/CBMiggFBVV95cUxNeGRlNGhmLW9admNZcmUtekwxWnhOTEZWQ2pTRFhmV3RVNUhtRlE1Mm5hZ1ZOOGJ3RnhxUlYyX2lldm9YV094Wmh4a00yc3BUeGlHUndKM2w1aXY0N0lRdF9wMFVxRHNQSVhKWG5xZFBXaWNSMlhWWWNLczJzY1BtVFVB?oc=5>)

<!-- ciso-revision:ciso-20261123-2-available-1795520405586 -->
