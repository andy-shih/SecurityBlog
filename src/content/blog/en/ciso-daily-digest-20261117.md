---
title: "CISO Daily Digest: ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems (20261117)"
description: "Critical updates and security warnings issued for ConnectWise ScreenConnect, N-able N-central, and new macOS privacy controls."
pubDate: 2026-11-17
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems

ConnectWise has completed an investigation into unauthorized access targeting partner ScreenConnect environments and warned that attacks are ongoing. The company reported that threat actors are using a toolkit known as SCKit, which includes a C# module called RelayTrap.cs, to attempt worm-like movement from infected customer devices to Managed Service Provider (MSP) technician workstations.

A critical vulnerability, CVE-2026-84869 (CVSS 9.9), is being exploited to allow unauthorized file transfers and code execution during active remote sessions. The campaign has also been linked to an authentication flaw in RMM+ versions 1.0.31 and 1.0.32. Recent activity detected by security researchers impacted 205 hosts across 41 organizations, with some instances involving rogue clients hosted on bulletproof infrastructure.

To mitigate these risks, ConnectWise has disabled five third-party extensions—Labtech Plus, RMM Plus, RMM+, RMM Plus Password Link, and RMM+ Password Link—across 400 partner environments. The company urges all customers to update the technician client to version 26.6.5 or later and emphasizes that software updates alone do not remove existing unauthorized access or persistence.

### 📌CISO Impact

- **Prioritize RMM Patching —** Immediate updates to ScreenConnect (v26.6.5+) and N-central are required to prevent unauthorized remote execution and worm-like lateral movement through MSP environments.
- **Monitor for Persistence —** Since updates do not remove established unauthorized access, defenders must actively hunt for rogue services, such as masquerading 'Windows Update Agent' components, following any unpatched exposure.
- **Audit Third-Party Extensions —** Review all RMM extensions and disable unnecessary or high-risk third-party modules that may serve as entry points for toolkit deployment like SCKit.

**Reference:** [ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems](<https://thehackernews.com/2026/11/connectwise-warns-screenconnect-attacks.html>)

---

## Active Threats This Week

📌 **N-able Patches 17 N-central Flaws as Attackers Exploit Earlier Bugs to Deploy Crypto Miners**

N-able released a critical security update, N-central 2026.4 Hotfix 3, to address 17 vulnerabilities including privilege escalation, authentication bypass, and remote code execution. These patches follow the exploitation of the 4EverAble2Shell and Agent2Shell flaws, which attackers have used to deploy cryptocurrency miners on vulnerable servers.

**Reference:** [N-able Patches 17 N-central Flaws as Attackers Exploit Earlier Bugs to Deploy Crypto Miners](<https://thehackernews.com/2026/11/n-able-patches-17-n-central-flaws-as.html>) 

---

📌 **Apple Tightens macOS App Permissions to Limit Data Access Amid AI Agent Security Risks**

Apple is introducing more granular data access controls in macOS 27.3 beta 2 to mitigate risks associated with artificial intelligence (AI) agents. The update splits Device Control and Data Access into separate System &amp; App Protection Override and Accessibility settings, allowing users to limit app permissions to specific folders or individual applications.

**Reference:** [Apple Tightens macOS App Permissions to Limit Data Access Amid AI Agent Security Risks](<https://thehackernews.com/2026/11/apple-tightens-macos-app-permissions-to.html>) 

---

📌 **Hijacked Optimizely Scripts Served Card Skimmer and iOS Exploit Kits to CNN, BBC and Zoom Visitors**

An attacker exploited a vulnerability in Optimizely Web Experimentation to inject malicious JavaScript into customer projects. This resulted in visitors to at least 178 organizations, including CNN, the BBC, and Zoom, receiving compromised scripts. The malicious code was designed to capture credit card details and replace cryptocurrency wallet addresses with those belonging to the attacker. Additionally, the scripts attempted to deliver a second-stage iOS exploit kit to iPhone and iPad users, though no device takeovers were reported. Optimizely has since patched the flaw and implemented protections to prevent unauthorized code delivery.

**Reference:** [Hijacked Optimizely Scripts Served Card Skimmer and iOS Exploit Kits to CNN, BBC and Zoom Visitors](<https://thehackernews.com/2026/11/hijacked-optimizely-scripts-served-card.html>) 

---

📌 **New GitDoor and GraphDoor Backdoors Turn GitHub and SharePoint Into Covert C2 Channels**

A cyber espionage campaign, codenamed Operation ShadowCloud, has targeted government sectors in Asia and Africa using two new backdoors named GraphDoor and GitDoor. These implants leverage legitimate cloud services, specifically Microsoft SharePoint and GitHub, to hide command-and-control (C2) traffic and evade network-based detection. The attackers use the MeshAgent remote access utility to drop the backdoors, which can execute shellcode in memory and download additional plugins. One targeted organization in Taiwan was identified in relation to this activity.

**Reference:** [New GitDoor and GraphDoor Backdoors Turn GitHub and SharePoint Into Covert C2 Channels](<https://thehackernews.com/2026/11/new-gitdoor-and-graphdoor-backdoors.html>) 

---

📌 **Researchers Detail iPhone Flaw That Let Apps Record Audio Despite Denied Microphone Permission**

A vulnerability in Apple's audio service previously allowed applications on iOS and iPadOS to record audio even after users explicitly denied microphone permissions. Researchers discovered that the bypass could occur while the app was in the foreground, and recording could continue even after the device was locked or the app moved to the background. The flaw also prevented the standard orange privacy indicator from appearing in certain test environments. Apple has since released security updates to address this issue.

**Reference:** [Researchers Detail iPhone Flaw That Let Apps Record Audio Despite Denied Microphone Permission](<https://thehackernews.com/2026/11/researchers-detail-iphone-flaw-that-let.html>) 

---

📌 **Some Information Systems of Hua-Sheng Attacked; Core Systems Unaffected**

Electronic components company Hua-Sheng (6272) reported that some of its information system hosts were targeted by a cyberattack on November 16. The company initiated emergency response mechanisms to isolate affected hosts and perform system recovery. Preliminary findings indicate that the impact was limited to specific information systems, and the company's core systems remain unaffected. No evidence of data leakage has been discovered at this time, and backup mechanisms are functioning normally.

**Reference:** [驊陞部分資訊系統遭網路攻擊，核心系統未受影響 - iThome](<https://www.ithome.com.tw/news/180554>) 

---

📌 **Security Incident at Outsourced E-commerce Provider for Retailer Yong Yi Leads to Unauthorized Database Access**

Yong Yi (2939), a retail company, reported that its outsourced e-commerce service provider, Cyberbiz, experienced a security incident involving unauthorized access to certain databases. This breach included order-related data from the BVI Taiwan online store. Yong Yi has notified members and consumers via email to increase awareness of potential fraud. The company stated that the incident has had no significant impact on its overall finances or business operations.

**Reference:** [貿易百貨公司永邑委外電商服務商發生資安事件，訂單資料庫遭未授權存取 - iThome](<https://www.ithome.com.tw/news/180550>) 

---

📌 **uBlock Origin for Firefox Patches Universal XSS Vulnerability**

The uBlock Origin browser extension for Firefox has released security updates to address a high-risk Universal Cross-Site Scripting (UXSS) vulnerability. The flaw resided in the Element Picker feature, which allowed malicious websites to manipulate the extension's interface via the postMessage API and unvalidated input. By exploiting this, an attacker could trick a user into injecting malicious JavaScript rules that would then execute on other websites visited by the user. The developer has addressed these issues in version 1.76.4, which includes improved secret token validation for the Element Picker and enhanced rule content inspection.

**Reference:** [Firefox版uBlock Origin修補XSS漏洞，惡意規則可跨網站執行JavaScript - iThome](<https://www.ithome.com.tw/news/180570>) 

---

📌 **KKday Marketing Site Suspected of Exposing Product Operational Data**

Travel platform KKday is facing scrutiny following reports that its 'KKpartners' marketing site and associated GitHub projects may have inadvertently exposed commercial operational data. The exposed information reportedly includes product sales performance, transaction volumes, average order values, and profit margins. While no consumer personal data has been confirmed as leaked, the availability of this business intelligence could provide competitors with insights into the company's market strategies and profitability.

**Reference:** [KKday聯盟行銷網站疑不慎公開商品營運數據，內部資訊控管成外界關切焦點 - iThome](<https://www.ithome.com.tw/news/180552>) 

---

📌 **Research Highlights Database Permission Issues in Applications Built via Lovable AI Platform**

A study conducted by Crissy Field and Handelsblatt has identified significant data access control weaknesses in applications developed using the Lovable AI no-code platform. Researchers analyzed over 159,000 projects and found that thousands of sites using Supabase databases were transmitting records directly to browsers without requiring user authentication. The study found that approximately 30% of the investigated sites allowed unauthorized access to sensitive records, including email addresses, identity documents, internal communications, and financial records. The researchers noted that while AI tools lower development barriers, they do not alleviate the responsibility for implementing proper security controls and data isolation.

**Reference:** [德國研究揭露AI開發平臺Lovable用戶開發的應用程式，有不少存在資料庫權限設定不當問題 - iThome](<https://www.ithome.com.tw/news/180567>) 

---

📌 **GeoVision NVR Vulnerabilities Exploited to Deploy Cryptocurrency Miners**

Cybersecurity firm Huntress has reported that attackers are exploiting known remote code execution (RCE) vulnerabilities in GeoVision GV-WebCam Server software to target Network Video Recorders (NVRs) exposed to the internet. The attack chain involves using the vulnerabilities to gain command-line access, downloading malicious drivers to disable security software, and eventually deploying the XMRig cryptocurrency miner. The identified vulnerabilities include CVE-2026-7372, CVE-2026-42369, and CVE-2026-42370. Organizations using GeoVision equipment are urged to update to the latest software versions and avoid exposing management interfaces directly to the public internet.

**Reference:** [奇偶科技示警影像監控軟體已知漏洞遭利用，Huntress揭露13家組織的設備遭挖礦攻擊 - iThome](<https://www.ithome.com.tw/news/180574>) 

---

📌 **Nation-State Actor SilentAir Targets Mobile Users via Telecom Infrastructure**

Telecommunications security firm Enea has identified a suspected nation-state threat actor, SilentAir, which is targeting mobile users in over ten countries, including Taiwan. The group is believed to infiltrate global mobile network interconnect structures to conduct espionage, including intercepting calls and SMS, tracking device locations, and potentially hijacking web accounts via two-factor authentication data. The attackers reportedly utilize 'Silent SMS'—messages that do not trigger notifications on the handset—to mask their activity and facilitate interception through various telecom service centers.

**Reference:** [【資安日報】11月17日，國家級駭客組織SilentAir鎖定臺灣等十多個國家的手機用戶，濫用電信訊號攔截簡訊與通話 - iThome](<https://www.ithome.com.tw/news/180566>) 

---

📌 **OWASP Identifies Top Security Risks for AI Data Centers**

The Open Web Application Security Project (OWASP) has released a list of ten security risks specifically targeting the infrastructure of AI data centers, categorized into critical, high, and medium risks. The report highlights that modern AI environments, which rely heavily on high-performance computing (HPC) technologies like GPUs and high-speed interconnects, face unique challenges due to multi-tenant resource sharing and complex management layers. The five critical risks identified include hardware and firmware integrity compromise, vulnerabilities in high-speed network interconnects (such as InfiniBand and RDMA), improper multi-tenant isolation and resource reuse, insecure out-of-band management planes (including BMC and Redfish), and AI infrastructure supply chain compromises. OWASP advises enterprises to verify firmware integrity, ensure robust network isolation, and validate the provenance of all software and hardware components used in AI clusters.

**Reference:** [OWASP公布AI資料中心十大資安風險，韌體遭竄改、高速網路防護不足列重大風險 - iThome](<https://www.ithome.com.tw/news/180526>) 

---

📌 **Exploitation of Apache Axis Vulnerability Targets Atlassian Confluence and N-able N-central**

Rapid7 has reported active exploitation of CVE-2026-90436, a critical remote code execution (RCE) vulnerability in the Apache Axis SOAP web services framework. The vulnerability, which carries a CVSS score of 9.8, is an unsafe reflection flaw that allows unauthenticated attackers to execute arbitrary Java classes by sending specially crafted SOAP requests. The exploitation has been observed targeting Atlassian Confluence Data Center and N-able N-central environments. Because the affected Apache Axis 1.x versions are end-of-life, the Apache Software Foundation will not issue patches, recommending a migration to Axis 2 or other SOAP engines. Impacted Confluence users running versions below 9.x with Remote API enabled are at risk, while N-able users can mitigate the risk via the 2026.4 HF3 update which removes the legacy API functionality.

**Reference:** [Apache Axis重大漏洞遭到利用，攻擊者藉此滲透Atlassian Confluence與N-able N-central - iThome](<https://www.ithome.com.tw/news/180573>) 

---

📌 **U.S. Authorities Disrupt North Korean FaceStealer Infrastructure and Freeze Stolen Crypto Assets**

The FBI has seized cloud infrastructure used by the North Korean threat actor FaceStealer, which has stolen over $400 million in cryptocurrency over the past 18 months. The group employs a sophisticated social engineering tactic where they hijack Telegram accounts and record victim webcam footage to impersonate known contacts during fraudulent video calls, eventually tricking targets into installing malware via fake meeting links. In a separate operation, the U.S. Department of Justice announced the freezing of over $2.7 billion in cryptocurrency assets stolen from the Binance exchange, an incident previously attributed to the North Korean group TraderTraitor. Law enforcement continues to track the flow of these funds to prevent further movement.

**Reference:** [美國查扣北韓駭客FaceStealer攻擊基礎設施，另凍結逾27億美元Binance遭竊資產 - iThome](<https://www.ithome.com.tw/news/180495>) 

---

📌 **UK and France Issue Guidelines for Commercial Cyber-Intrusion Industry**

The governments of the United Kingdom and France have co-released the Commercial Cyber-Intrusion Industry Guidelines to prevent the misuse of commercial spyware and intrusion tools. The voluntary guidelines urge developers, resellers, and system integrators to implement rigorous customer due diligence and risk management processes to ensure their products are not used for human rights abuses or unauthorized surveillance. The guidelines recommend that companies conduct background checks on clients, verify authorization from authorities, and monitor for signs of misuse through threat intelligence. If a significant risk of misuse is identified, the guidelines suggest that businesses should suspend sales and technical support for the relevant tools.

**Reference:** [英法發布商業網路入侵產業指引，籲業者審查客戶、必要時停止銷售工具 - iThome](<https://www.ithome.com.tw/news/180491>) 

---

📌 **ENISA Warns of Rapid Vulnerability Exploitation and Increased Supply Chain Risks**

The European Union Agency for Cybersecurity (ENISA) has released its 2026 cybersecurity trends report, warning that attackers are increasingly exploiting vulnerabilities within minutes of public disclosure. The agency expects that the advancement of AI models will further accelerate the speed of vulnerability discovery, significantly increasing the pressure on organizations to maintain rapid patching cycles. The report also emphasizes the growing risks associated with supply chain dependencies, noting that security incidents affecting major cloud or software providers can have widespread downstream impacts. ENISA highlighted that small and medium-sized enterprises (SMEs) in critical sectors often face higher risks and possess less incident response capability compared to larger organizations.

**Reference:** [歐盟網路安全局示警漏洞公開後數分鐘內恐遭利用，AI與供應鏈依賴加劇資安風險 - iThome](<https://www.ithome.com.tw/news/180493>) 

---

📌 **Shadowserver Observes Over 3,800 AI Attack Framework Instances Globally, Including 20 in Taiwan**

The Shadowserver Foundation has tracked thousands of internet-facing instances of autonomous AI attack frameworks. As of November 15, 2026, Shadowserver identified 3,847 IP addresses hosting such frameworks, including ARTEX (2,852 instances), CyberStrike (493), PentestCode (231), and VXControl (196). The FBI previously warned that attackers have used the open-source ARTEX framework since August to accelerate intrusion speeds, sometimes gaining high-level system privileges in under three hours. Geographically, the highest concentration of instances was found in the United States, followed by China, Hong Kong, Singapore, and Japan, with 20 instances located in Taiwan.

**Reference:** [Shadowserver觀測到公開網路上存在逾3,800個AI攻擊框架執行個體，臺灣也有20個 - iThome](<https://www.ithome.com.tw/news/180560>) 

---

📌 **Anthropic to Shorten Major Vulnerability Disclosure Window from 90 to 30 Days**

To address the increased speed at which AI can discover and exploit software vulnerabilities, Anthropic has announced updates to its Coordinated Vulnerability Disclosure (CVD) policy. Starting January 1, 2027, the disclosure window for high-to-critical severity vulnerabilities will be reduced from 90 days to 30 days, while other vulnerabilities will have a 45-day window. Additionally, Anthropic will reduce the period for waiting on a vendor response before escalating to external coordination bodies from 30 to 15 days, and will delay full technical detail publication until 30 days after a patch is released. The company noted that these changes aim to keep pace with AI-driven exploitation capabilities.

**Reference:** [漏洞濫用速度加快，Anthropic將重大漏洞揭露靜默期由90天縮短為30天 - iThome](<https://www.ithome.com.tw/news/180557>) 

---

📌 **WebRAT Trojan Potentially Distributed via Telegram Widget Vulnerability**

Researchers have identified malicious activity potentially linked to a vulnerability in new Telegram widgets. Kaspersky reported that visiting certain channels could trigger a PowerShell script to download and execute the WebRAT (also known as Salat Stealer) malware. Written in Rust, WebRAT enables remote system control and is capable of stealing cryptocurrency wallets and Telegram account credentials. While Telegram developers stated they patched an Android-related issue on November 10, researchers from V12 claimed a separate remote code execution (RCE) exploit remained effective on the Windows client. The vulnerability is reportedly linked to the ability to run a QuickJS JavaScript engine within messages without a sandbox.

**Reference:** [Через уязвимость в виджетах Telegram мог распространяться троян WebRAT](<https://xakep.ru/2026/11/17/telegram-widgets/>) 

<!-- ciso-revision:ciso-20261117-3-1795041785034 -->
