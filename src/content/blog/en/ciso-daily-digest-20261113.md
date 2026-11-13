---
title: "CISO Daily Digest: Critical Red Hat Quay Flaw Lets Attackers Read and Overwrite All Private Container Images in a Registry (20261113)"
description: "Partial digest: completed summaries and original sources are shown; some translations are unavailable."
pubDate: 2026-11-13
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Today’s cybersecurity news

Partial digest: completed summaries and original sources are shown; some translations are unavailable.

### 📌 Critical Red Hat Quay Flaw Lets Attackers Read and Overwrite All Private Container Images in a Registry

A critical flaw in Red Hat Quay allows an attacker who can access a Quay registry to read and overwrite private container images in every repository. Quay enables anonymous access by default, and while it is enabled, the attacker needs no account. When it is off, anyone with a valid account can still exploit the flaw. The company has released fixed builds for eight Quay 3 branches, and the flaw is tracked as CVE-2026-123710 (CVSS score: 9.8). The flaw lets an attacker add their own key to the keys Quay trusts, with no expiry date, after which Quay accepts tokens signed with that key for any repository, allowing retrieval of private images and any secrets stored within them. The attacker can also push or overwrite images that propagate to every system that later pulls those images, and the planted key survives restarts until someone removes it. It can also be used to delete the keys that running Quay instances use, causing authentication errors for normal pushes and pulls.

**Source:** [Critical Red Hat Quay Flaw Lets Attackers Read and Overwrite All Private Container Images in a Registry](<https://thehackernews.com/2026/11/critical-red-hat-quay-flaw-lets.html>)

### 📌CISO Impact

- **Quay registry key rotation —** Audit audit logs for unauthorized key changes, remove unrecognized service keys, and deploy fixed Quay builds. Block /keys endpoint access at the proxy/load balancer until remediation is complete.
- **N-central agent and probe upgrade —** Upgrade both Agents and Probes to N-central 2026.4 HF1 or above and disable Legacy API and Intune integration until additional protections are validated. Treat confirmed compromise as full breach, not a cleanup job, given cryptocurrency miner deployment and root-level access.
- **Telecom signaling defense —** Deploy GTP-C and GTP-U firewalls, configure them to share information with SS7 and Diameter firewalls, and treat the entire IPX as untrusted. Add internal signaling protocol detection and link security controls with broader IT security operations to counter state-level SS7/Diameter interception campaigns.

---

### 📌 Hackers Exploit N-central Flaws to Infect 21 Servers, Including 19 Running Hotfix 2

N-able on Thursday said it's taking additional precautions in the wake of public disclosure of a new set of flaws tracked as 4EverAble2Shell and Agent2Shell. These measures may affect some functionality, but we believe taking additional precautions while remediation is completed is the right action to protect our partners and their customers. The following actions have been applied to Hosted environments: Legacy API is turned off by default in the product, and Intune integration has been turned off while additional protections are implemented and validated. On-premises customers are being urged to upgrade Agents and Probes and ensure Legacy API access is disabled in the environment, if it has been previously turned on. N-able N-central 2026.4 HF1 updates legacy components of the Agent and Probe, which changes how the two communicate, as such upgrading both Agents and Probes in your N-central server is a MUST to ensure all managed devices are communicating and patched. Multiple threat intelligence reports show that 4EverAble2Shell has moved beyond preliminary probing to active exploitation efforts, with threat actors leveraging it to deploy cryptocurrency miners on vulnerable servers. The attacks have been found to string together a critical Apache Axis vulnerability, tracked as CVE-2026-90436 (CVSS score: 9.8), with a separate N-central privilege escalation weakness to obtain root-level access. An unauthenticated exploit chain in N-able N-central, disclosed as 4EverAble2Shell, is reported to allow remote attackers to execute arbitrary operating-system commands with root privileges. A crafted request causes an attacker-selected JLine class to process malicious input, resulting in command execution as the nable service account. Cybersecurity company Huntback has revealed that the same IP address is weaponizing the 4EverAble2Shell flaw, deploying an XMRig Monero cryptocurrency miner on 21 N-central servers via the aforementioned shell script. The compromised N-central servers are concentrated across the U.S., South Africa, Canada, the U.K., Germany, France, and Sweden. The miner is designed to use only half of the available CPU cores, likely in an effort to fly under the radar. The compromised N-central servers are concentrated across the U.S., South Africa, Canada, the U.K., Germany, France, and Sweden. The miner is the only payload we have seen, but the escalation hands the operator root on a host that manages your customers' endpoints. Treat a hit as a full compromise, not a cleanup job. Applying Hotfix 2 is not enough on its own: 19 of the victims here were already running it.

**Source:** [Hackers Exploit N-central Flaws to Infect 21 Servers, Including 19 Running Hotfix 2](<https://thehackernews.com/2026/11/hackers-exploit-n-central-flaws-to.html>)

---

### 📌 SilentAir Hijacks Asian Telecom Networks to Intercept SMS 2FA Codes and Spy on Taiwanese Users

A newly identified spying group used hacked equipment inside Asian mobile operators to intercept the calls and texts of selected people, mostly in Taiwan. Enea, a telecom and cybersecurity software company based in Stockholm, found the group's attack sources in at least six Asian countries and named it SilentAir this week. It assessed with high confidence that SilentAir is a state-level actor, but linked its activity to China only with low confidence. The company has told the operators where it found SilentAir sources. It said SilentAir has been disrupted for now but could return. Mobile operators use the SS7 and Diameter protocols to exchange signaling messages that route calls and texts and enable roaming. This traffic crosses a shared network called the IPX, which runs on a high level of trust between operators. SilentAir sent its attacks into the IPX from the hacked equipment. For interception, SilentAir sent the target's home network an UpdateLocation message, or its Diameter equivalent. The message claimed that the hacked equipment was now serving the target's phone. If the home network accepted it, calls and texts for that person would be diverted to the attackers. Some of these attacks worked. For some targets, the company observed two-factor authentication (2FA) codes being intercepted immediately after the diversion took effect. That points to an attempt to break into other accounts registered to those people. Interception made up 18.3% of the attacks the company saw from SilentAir. For a typical surveillance company, the kind of firm behind most signaling attacks, the share was 2.1% in the company's earlier research. Some targets were political and government VIPs in their own countries. In rare cases, SilentAir equipment in several countries worked together against such targets, which the company said points to a single controller. The attacks came in bursts, from one or a few subscribers to several thousand over a month, with gaps of up to several months or longer between bursts. Outside Taiwan, targets were mostly in other Southeast and East Asian networks, and at times in East Africa, Central Asia, the Middle East, and Europe. People using the hacked operators' own networks may also have been targeted, but the company could not see that traffic. The company spotted SilentAir by studying attacks on the links between operators. Since early 2025, it has tracked unusual attacks, mostly over SS7 and sometimes Diameter, from some Asian operators that would not normally send attacks. Later analysis found suspicious activity even earlier. The networks hosting SilentAir handled follow-up messages for diverted targets in odd and inconsistent ways, according to the company's technical report. That left two explanations: someone outside was faking those networks' signaling addresses, or equipment inside each network had been taken over. The company then saw equipment inside one operator both send and receive attack commands, which confirmed the second explanation. That equipment behaved exactly like SilentAir sources in other networks. Detecting and blocking the attacks was hard at first because the attackers understood mobile networks and signaling defenses well. After the attacks were contained, the company recovered traces of unauthorized access. It could not analyze the malware it believes SilentAir used. The report does not name the countries, the operators, or any of the targets. In some countries, SilentAir attacks came from more than one operator. SilentAir also sent silent SMS on a very large scale, mainly to subscribers in Taiwan. These are texts that the phone does not display or alert on. During the day, most silent SMS went to subscribers on other networks, such as Southeast Asian networks. One of their main uses appears to have been checking whether a diversion had worked, the company said. If the test text reached the hacked equipment instead of the phone, the attackers knew they were getting that person's texts. Most silent SMS went out at night, and most of those went to people in Taiwan. The company said the purpose of those messages is not confirmed. They may be a bulk check that earlier diversions were still in place, since phones are least likely to re-register to their real location at night. The silent texts carried spam-like motivational or promotional lines, often in English. The company believes the text was a disguise. If an operator along the way stripped a message's silent setting, the recipient would see it as spam and ignore it. The company's low-confidence link to China rests on several signs. SilentAir focused on Taiwan and did not target Chinese networks or subscribers. Its tracking and interception attacks also followed a working day in UTC+8, which is China Standard Time. They started at 9 a.m., almost stopped on weekends, and paused or slowed around Chinese holidays. The company also considered a link to Liminal Panda, a group behind earlier telecom intrusions. It called the link possible but unconfirmed and does not tie the two groups together for now. In several hacked operators, SilentAir attacks happened during a known Liminal Panda infection. At other times, the two showed no sign of working together. They also went after operators in the same part of Asia, though Liminal Panda has no known focus on Taiwan. SilentAir's operational security also seemed far better than Liminal Panda's. Separately, the company's GTP firewall has detected Liminal Panda activity at several customer operators since the first quarter of this year. The company blocked the group's GTPDoor traffic there and saw Liminal Panda infections, or strong signs of them, in at least 5 to 10 operators. The GTPDoor backdoor, first documented on February 27, 2024, hides commands within GTP-C, the protocol that establishes mobile data connections between networks. The company also found evidence of a new version that hides commands in GTP-U, the part of GTP that carries users' data. GTP-U traffic is harder to inspect, though the company believes the new version serves mainly as a backup. What Enea Recommends for Operators: Deploy GTP-C and GTP-U firewalls and configure them to share information with their SS7 and Diameter firewalls. Go beyond the industry's basic recommendations for signaling security. Treat the whole IPX as untrusted. Add detection for signaling protocols inside their own networks. Connect signaling security with the rest of their IT security. The report does not advise people whose calls and texts may be targeted.

**Source:** [SilentAir Hijacks Asian Telecom Networks to Intercept SMS 2FA Codes and Spy on Taiwanese Users](<https://thehackernews.com/2026/11/silentair-hijacks-asian-telecom.html>)

---

### 📌 Operation Endgame Takes Down Gootloader, CastleRAT and StealC Servers, Seizes 6.4M Stolen Logins

**Source:** [Operation Endgame Takes Down Gootloader, CastleRAT and StealC Servers, Seizes 6.4M Stolen Logins](<https://thehackernews.com/2026/11/operation-endgame-takes-down-gootloader.html>)

---

### 📌 Citrix Patches 12 NetScaler and Secure Access Client Flaws, Including Authentication Bypass

**Source:** [Citrix Patches 12 NetScaler and Secure Access Client Flaws, Including Authentication Bypass](<https://thehackernews.com/2026/11/citrix-patches-12-netscaler-and-secure.html>)

---

### 📌 Hackers Exploit PHP2Shell Flaws in Check Point Gateways to Deploy TSGA Backdoor and Wipe ESXi Files

**Source:** [Hackers Exploit PHP2Shell Flaws in Check Point Gateways to Deploy TSGA Backdoor and Wipe ESXi Files](<https://thehackernews.com/2026/11/hackers-exploit-php2shell-flaws-in.html>)

---

### 📌 ThreatsDay: 59 Linux Kernel Bugs, Falcon Spyware, GSocket Backdoors + 17 More Stories

**Source:** [ThreatsDay: 59 Linux Kernel Bugs, Falcon Spyware, GSocket Backdoors + 17 More Stories](<https://thehackernews.com/2026/11/threatsday-59-linux-kernel-bugs-falcon.html>)

---

### 📌 駭客集團UNC6783聲稱入侵資安院竊得102 GB資料，資安院：去年7月已進行資安通報 - iThome

**Source:** [駭客集團UNC6783聲稱入侵資安院竊得102 GB資料，資安院：去年7月已進行資安通報 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9XQ3UtRk1aNUlFaGdobzM5Tk5KcXF5MGQydUJzSENKWU92WmZPTXRxa2dRQWFpVGtUbk9JQmtpbkJhOE5aMW5yaVc3VEZxUQ?oc=5>)

---

### 📌 186 Fake AI Domains Redirect Users to ClickFix Lures, Browser Malware, and Search Hijackers

**Source:** [186 Fake AI Domains Redirect Users to ClickFix Lures, Browser Malware, and Search Hijackers](<https://thehackernews.com/2026/11/186-fake-ai-domains-redirect-users-to.html>)

---

### 📌 New SignDrop Zero-Day Exploit Turns Windows CLFS Security Feature Into SYSTEM Access

**Source:** [New SignDrop Zero-Day Exploit Turns Windows CLFS Security Feature Into SYSTEM Access](<https://thehackernews.com/2026/11/new-signdrop-zero-day-exploit-turns.html>)

---

### 📌 Sega сообщила об утечке email-адресов 2,2 млн человек

**Source:** [Sega сообщила об утечке email-адресов 2,2 млн человек](<https://xakep.ru/2026/11/13/sega-leak>)

---

### 📌 Хакеры из КНДР похитили более $400 млн с помощью поддельных видеозвонков

**Source:** [Хакеры из КНДР похитили более $400 млн с помощью поддельных видеозвонков](<https://xakep.ru/2026/11/13/facestealer-video-scams>)

---

### 📌 Microsoft выпустила патчи для 1200 уязвимостей, включая 0-day в Outlook

**Source:** [Microsoft выпустила патчи для 1200 уязвимостей, включая 0-day в Outlook](<https://xakep.ru/2026/11/12/november-2026-patches>)

---

### 📌 eMudhra憑證事故擴大，再有8張RSA中繼CA憑證遭撤銷 - iThome

**Source:** [eMudhra憑證事故擴大，再有8張RSA中繼CA憑證遭撤銷 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE42LWdMRXg1eFNuc0otNVQ4c2Y0QjNKZnRPWVNKLTk5azJmSDM3a2wwOWEtWDgyWmNDUElyZ2hzZWIyVzU1UFUyR3lyYkpkUQ?oc=5>)

---

### 📌 NIST發布對抗式機器學習攻擊分類草案，示警MCP工具供應鏈風險 - iThome

**Source:** [NIST發布對抗式機器學習攻擊分類草案，示警MCP工具供應鏈風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFByMkY1ZFIzT0VXVU9rMndrdzl6aTZXZDBFRFpCRlF3ajFoT01VdGQxUTFHS01OZjdtOUlFNmItOHZmREpmbGtfSDBVSDBTUQ?oc=5>)

---

### 📌 泰航、芬蘭航空因Amadeus資安事件外洩逾6萬、11萬旅客資訊 - iThome

**Source:** [泰航、芬蘭航空因Amadeus資安事件外洩逾6萬、11萬旅客資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4wREVBTDBkRHRqYVZOME5OYzg1cEJqbjB2M1g2YnhzSHdXc2tGamI3WHFwNGlOQzBrcDdjYW5rdUhNSmhFcVo1MG1VSV9VQQ?oc=5>)

---

### 📌 大聯大發生資安事件，部分員工姓名與公務電子郵件遭未經授權存取 - iThome

**Source:** [大聯大發生資安事件，部分員工姓名與公務電子郵件遭未經授權存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9RQWZsWF9NanJoTXVLZ0pTd1BjOHpON3Z3eXMybVF6UzVXVGdLS2sxSzFCS1FiclRBUXB1R1lSbjdPdjloNE5tQjNESGVvQQ?oc=5>)

---

### 📌 После взлома Railway хакеры потратили 740 000 долларов на ИИ

**Source:** [После взлома Railway хакеры потратили 740 000 долларов на ИИ](<https://xakep.ru/2026/11/13/railway-hack>)

---

### 📌 美而快電商系統遭異常存取，部分請求涉及會員訂單API - iThome

**Source:** [美而快電商系統遭異常存取，部分請求涉及會員訂單API - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1vSXhJMm8zWUJKb0lfcExLdk8tUEZndFoyTmh3eHJuMkxfSEttNWpJS0o1eG93UjllbG82U3pTLXRnRDVnd1JWaVRWdW1xUQ?oc=5>)

---

### 📌 South Korean privacy regulator investigates Anthropic over Claude account data exposure - Digital Watch Observatory

**Source:** [South Korean privacy regulator investigates Anthropic over Claude account data exposure - Digital Watch Observatory](<https://news.google.com/rss/articles/CBMie0FVX3lxTFBfQ3VBbXFKM0g1MTY0aUw4eno4cXlRT25JWDN3VWphT3JlRUNwMnRvWGdmSkF3VzdQc0hQR0ZZRHQ4aW90YXRTTGkxVC01bTFKUWtsNGNFd01xU2hsQ0c1UUR0U1FRbnlLWXhwbHdmQlZDUGZKM0tvcHlJUQ?oc=5>)

---

### 📌 WhiteArmor gang claims responsibility for latest cyber attack on shipping giant Maersk

**Source:** [WhiteArmor gang claims responsibility for latest cyber attack on shipping giant Maersk](<https://www.bitdefender.com/en-us/blog/hotforsecurity/whitearmor-gang-cyberattack-maersk>)

---

### 📌 長榮物流部分資訊系統遭攻擊，啟動資安防禦與復原機制 - iThome

**Source:** [長榮物流部分資訊系統遭攻擊，啟動資安防禦與復原機制 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9FT3NUNHR1S2puTTd3MHk0VVZRMk5vNG9QdDhlS21fVmZNRWZSQTB4dm5nWDQyTjV1ZFNGZHVqX0JRakJ4eWFaaXNkdS1nQQ?oc=5>)

---

### 📌 正能量智能子公司電商資料庫遭未授權存取，已通知受影響消費者並啟動資安應變 - iThome

**Source:** [正能量智能子公司電商資料庫遭未授權存取，已通知受影響消費者並啟動資安應變 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5pRkY4alFxMkY3c2o4emhzalFFaWMxUlN2NWJvWmRoOWo4NXZWc1RDWmN6N1ZFOGFvNUZGYThzRktzcFhWX092X2c2S3Vsdw?oc=5>)

---

### 📌 Хакеры отмыли 1052 украденных с Bitget BTC через миксер CoinJoin

**Source:** [Хакеры отмыли 1052 украденных с Bitget BTC через миксер CoinJoin](<https://xakep.ru/2026/11/13/bitget-coinjoin>)

---

### 📌 When an AI Agent Goes Wrong, Can You Stop It?

**Source:** [When an AI Agent Goes Wrong, Can You Stop It?](<https://thehackernews.com/2026/11/when-ai-agent-goes-wrong-can-you-stop-it.html>)

---

### 📌 Linux基金會調查揭軟體交付速度超過資安審查能力，近6成團隊跟不上 - iThome

**Source:** [Linux基金會調查揭軟體交付速度超過資安審查能力，近6成團隊跟不上 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5pZWxTMkdFVnBuQU1FRFhVNHNZNFdNUzk0R2kzN3NCcWFiM0Ytd3JNTmNtbGowdVVja0xuaUJEa0Zsdks1cDFyWEM2c2kxQQ?oc=5>)

---

### 📌 威力德生醫線上商店委外廠商發生資安事件，部分消費者訂單資料遭異常存取 - iThome

**Source:** [威力德生醫線上商店委外廠商發生資安事件，部分消費者訂單資料遭異常存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWdTFWVVY5d3E5Y3FQeF9yMDNSTW5qbDh5WlFFQWVhNjJLcWpYSnE4enYzUkpHU3JCT084MXZ6SXB0MmlmTU1SUDRsMFlPUQ?oc=5>)

---

### 📌 大金空調零件線上商城委外廠商發生資安事件，141筆訂單資料受波及、132筆個資遭未授權存取 - iThome

**Source:** [大金空調零件線上商城委外廠商發生資安事件，141筆訂單資料受波及、132筆個資遭未授權存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBoSmpzaFBMUEY0b0ttUUZIS1NOT1A0M0RzV0ROeFgwSlpyRFVwbV81ZFV3XzZGSlJpemhNeVhXelNDRmlvVXk4V1FkLUVnQQ?oc=5>)

---

### 📌 JVN: TightVNCおよびUltraVNCのWindows Viewerにおけるヒープベースのバッファオーバーフローの脆弱性

**Source:** [JVN: TightVNCおよびUltraVNCのWindows Viewerにおけるヒープベースのバッファオーバーフローの脆弱性](<https://jvn.jp/vu/JVNVU92656681>)

---

### 📌 N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome

**Source:** [N-able發布N-central重大安全更新，修補研究人員公布的部分零時差漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA0bnRabktvT2NnWV8wWWxpVV9yZFVTcThQYXZwc0o2Mm1FT25zR1hWdm84eXZJZ0dqUWFoMVZWVXZQZVF4cWlmRVVscTN2UQ?oc=5>)

---

### 📌 Extortion Group Luna Moth Flits Into Law Firms a Second Time

**Source:** [Extortion Group Luna Moth Flits Into Law Firms a Second Time](<https://www.darkreading.com/data-privacy/extortion-luna-moth-law-firms-second-time>)

---

### 📌 JVN: CISA ICS Advisory / ICS Medical Advisory（2026年11月12日）

**Source:** [JVN: CISA ICS Advisory / ICS Medical Advisory（2026年11月12日）](<https://jvn.jp/vu/JVNVU90821966>)

---

### 📌 AI讓攻擊進入自動化時代，Google：企業更要管好Agent權限 - iThome

**Source:** [AI讓攻擊進入自動化時代，Google：企業更要管好Agent權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBhVzBYSFhfUkxmdUlNX3VCX0l0SzN5MDdpSmFiZTVmX2ptaGJvMTdmazVucTk4LXpyUFZRYWlxR2l3QlpUNnZ4MG42amJKUQ?oc=5>)

---

### 📌 JVN: PromZardにおけるリモートコード実行の脆弱性

**Source:** [JVN: PromZardにおけるリモートコード実行の脆弱性](<https://jvn.jp/vu/JVNVU98641453>)

---

### 📌 JVN: ImageMagickを利用したアプリケーションにおける任意ファイル読み書きの脆弱性

**Source:** [JVN: ImageMagickを利用したアプリケーションにおける任意ファイル読み書きの脆弱性](<https://jvn.jp/vu/JVNVU95718857>)

---

### 📌 【資安週報】1109～1113，Cyberbiz事件擴大、多家上市櫃公司接連公告，資安救火人力不足恐浮現 - iThome

**Source:** [【資安週報】1109～1113，Cyberbiz事件擴大、多家上市櫃公司接連公告，資安救火人力不足恐浮現 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4wSE14MUxrMkRyMVZNYlpzQjV1Szh3VW9DYVBXSmRvTFY2WDZfR3RQVDJTWDIzVEVMNGFYdjFSeUJGNHM4M1pJNUtfbmpyZw?oc=5>)

---

### 📌 JVN: ComfyUIのComfyUI-Easy-Use拡張機能における認証不要のパストラバーサルの脆弱性

**Source:** [JVN: ComfyUIのComfyUI-Easy-Use拡張機能における認証不要のパストラバーサルの脆弱性](<https://jvn.jp/vu/JVNVU99429639>)

---

### 📌 Cyber Experts Weigh In: How to Fight Artex &amp;amp; AntiFox

**Source:** [Cyber Experts Weigh In: How to Fight Artex &amp;amp; AntiFox](<https://www.darkreading.com/cybersecurity-operations/cyber-experts-fight-artex-antifox>)

---

### 📌 RSAC預測2027年資安趨勢：AI代理增加漏洞處理壓力，企業須強化GRC與事件應變 - iThome

**Source:** [RSAC預測2027年資安趨勢：AI代理增加漏洞處理壓力，企業須強化GRC與事件應變 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1aTXM3Q0w2ZDZERWJKTXZjS3NzMUdUZjZGX0MyNUJ0dXZiMVNBYnlYUkZTMzJHeGNuVUF1Y29WQmp3dWNJRm5jeld2RGZUdw?oc=5>)

---

### 📌 Новая хак-группа Arra Ghouls атакует российские организации

**Source:** [Новая хак-группа Arra Ghouls атакует российские организации](<https://xakep.ru/2026/11/12/arra-ghouls>)

---

### 📌 工具中毒 - iThome

**Source:** [工具中毒 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTE14T21qSGlmcE9NQ011NmtNNHA1VGhia3RSdVM5Q3pjOFpTejQ4X3ZsdEs2blBrMHVlYlREMWhBV3hrWXZpbFA3SGNYWnNqY3BEdlF6V2RUSzhaRXd3OGZUbHRmWG5kVko0NzZ3dmZkVXJzM0lBcVE?oc=5>)

---

### 📌 Attackers in Binance Breach Targeted Known Weakness, Missing Controls

**Source:** [Attackers in Binance Breach Targeted Known Weakness, Missing Controls](<https://www.darkreading.com/cybersecurity-operations/attackers-binance-breach-targeted-weakness-missing-controls>)

---

### 📌 PHP2Shell漏洞肆虐 伺服器等不到修補時 企業該走的3個防護步驟 - iThome

**Source:** [PHP2Shell漏洞肆虐 伺服器等不到修補時 企業該走的3個防護步驟 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5ubEdmaFd6WU1id0dGdDVCWXJ4X3dKV2VVa2pXUm96azd6VkFJakVFUmdaNmUxa25HV0FLRmZPR1Y1d1VUOC1UNEpkSQ?oc=5>)

---

### 📌 Anthropic’s Claude Tops AI Rankings as OpenAI Limits Cyber Model - PYMNTS.com

**Source:** [Anthropic’s Claude Tops AI Rankings as OpenAI Limits Cyber Model - PYMNTS.com](<https://news.google.com/rss/articles/CBMivgFBVV95cUxNYlczWW5CYUlhR3h6QzBPcDk2aEZyMjhHZWMtYjJSTWtESjlQRmJBRUJvR0hrc2NfZGxDRDFrWjhaN0llbkhWVkdCdlU5WFhoVmhHUF9sX0U4WW1abWxrd2Rya25XRVdiaGFqZ0VodmhWWWZDMWZpYzBVdXAzbktKejlpQS05S1pYRjJfc3FaaGtxYk9XTzIwV3hlemFOX3hvclhsamFGNFdpM2FBLXczclZseDVpQnppOUNVd0tR?oc=5>)

---

### 📌 黃仁勳辭去Nvidia執行長立刻生效，財務長Colette Kress接任臨時執行長、董事會任命首任董事長 - iThome

**Source:** [黃仁勳辭去Nvidia執行長立刻生效，財務長Colette Kress接任臨時執行長、董事會任命首任董事長 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NRl9ENWFqTFhPVmlEOWxPaTFDLTJQaFNvUTlMay03WktJVTMwN1dkVzBhdHo3bDVMa2pBWkNNRkFfdm5tUE5DellrOU1HUQ?oc=5>)

---

### 📌 微軟Microsoft 365服務異常，影響全球多項服務 - iThome

**Source:** [微軟Microsoft 365服務異常，影響全球多項服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE55WksycWJLR1VpUGtHQXBYVUw3UnVoNlZZNGpydmdhSmxaTmtQcFhtdlJXQmRSTF9uQVFoYkFxSzZjazNNVHBQTmtZcWVBZw?oc=5>)

---

### 📌 Synology 推出全新 PAS3600 - iThome

**Source:** [Synology 推出全新 PAS3600 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5ZbTZPaVZqb1JIcTMxYmNYQUFWam51RFp1eDk0Z00tc1hXMl80ZUtfSFBjdWduaDFlUXZHX0ZZUmh4ODJvU215VER6dw?oc=5>)

---

### 📌 網擎策略投資微智安聯 攜手拓展日本與海外資安市場 - iThome

**Source:** [網擎策略投資微智安聯 攜手拓展日本與海外資安市場 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE92RFZYZ241UlZPWjFKQ2lNVzZpSzhpSF9vZjJjN2lPOTVXckkwWlNvZzhkYWFBbDZXa3ItQ0FXSjhiSzdDaG83UHBvWQ?oc=5>)

---

### 📌 蘋果將永久關閉產品支援社群，鼓勵用戶到官方網站尋求資訊 - iThome

**Source:** [蘋果將永久關閉產品支援社群，鼓勵用戶到官方網站尋求資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBPUEpocGhNUVFxY2lTU0cxYW1ubGQ0Rm8zTHpUQ2pJNW1YUzJCSG93LV8wZ05LRGVDU01YMG5sYUg2LVpQdzcxNVpmT0FUdw?oc=5>)

---

### 📌 Webinar: See How Identity Blind Spots Put Your SOC at Risk and How to Close Them

**Source:** [Webinar: See How Identity Blind Spots Put Your SOC at Risk and How to Close Them](<https://thehackernews.com/2026/11/your-soc-sees-alert-but-does-it-know.html>)

<!-- ciso-revision:ciso-20261113-1-available-1794591983321 -->
