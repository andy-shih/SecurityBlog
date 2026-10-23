---
title: "CISO 每日摘要：PHP2Shell：PHP 核心臨界 RCE 漏洞正被積極利用 (20261022)"
description: "本頁整理今日可用的資安新聞來源。摘要與繁體中文翻譯待補，請以原始來源內容為準。"
pubDate: 2026-10-22
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 今日資安新聞速覽

本頁整理今日可用的資安新聞來源。摘要與繁體中文翻譯待補，請以原始來源內容為準。

### PHP2Shell：PHP 核心臨界 RCE 漏洞正被積極利用

PHP 於 2026 年 10 月 21 日針對兩個關鍵遠程代碼執行缺陷釋放緊急補丁，分別為 CVE-2026-109618 和 CVE-2026-109619，均根據 CVSS v4.0 評級為 9.2。漏洞位於 PHP 核心引擎本身，影響從 PHP 5.4（2012 年發布）到當前分支的所有版本，影響任何服務 Web 請求的安裝，包括使用 WordPress、Drupal、Joomla 和 Magento 的站點，研究人員已確認存在實際攻擊。

Amazon 威脅情報在 10 月 17 日觀察到在補丁存在前四天前試圖利用這些漏洞，並建議從該日期開始進行調查。修復版本為 8.5.12、8.4.27、8.3.36 和 8.2.35。7.4 到 8.1 的分支僅獲取源碼回溯，而 5.4 到 7.3 屬於終止生命週期，無補丁。美國、英國、荷蘭、芬蘭和澳大利亞的國家網絡安全機緊發出緊急協議，部分歐洲政府部門在修復期間將公眾門戶離線。

根據 Palo Alto Networks 的遙測數據，超過 2260 萬部露燈伺服器運行著潛在易受攻擊的 PHP。所有處理 HTTP 請求的 Web 環境——包括 PHP-FPM、LiteSpeed、FrankenPHP、php-cgi 以及 Apache with mod\_php——均直接暴露，其中 Apache mod\_php 被引述風險最高，因為利用可以在應用程序級路由開始前執行。概念證明於 10 月 20 日釋出，迫使加速發布補丁。PHP 基金會表示沒有實際利用的證據，儘管獨立研究人員報告稱他們在一天內開發了功能性利用程式。

**原始來源:** [Вышли патчи для PHP2Shell. Хакеры уже пытаются эксплуатировать свежие уязвимости](<https://xakep.ru/2026/10/22/php2shell-patches>)

---

### LiteLLM Python 套件在軟體供應鏈攻擊中遭到破壞

LiteLLM Python 套件 1.107.0 版透過軟體供應鏈攻擊遭到破壞，攻擊者植入憑證竊取器與後門，並透過 PyPI wheels 與 Docker 映像檔發佈，隨後被隔離下架。攻擊者利用三位工程師的 GitHub 帳號，配合遭竊的 GitHub CLI OAuth 權杖，觸發並通過 project-releaser 工作流程發布惡意版本。惡意程式碼在 LiteLLM 匯入前，透過「cook.pth」路徑檔於 Python 解譯器啟動時執行，蒐集雲端憑證、私鑰、瀏覽器資料、AI 工具憑證與環境變數，並外洩至攻擊者控制的端點，同時檢查 GitHub 死信箱以接收遠端程式碼執行指令。

**原始來源:** [LiteLLM Compromised in Supply Chain Attack Delivering Credential Stealer and Backdoor](<https://thehackernews.com/2026/10/litellm-compromised-in-supply-chain.html>)

---

### GitLab 重大漏洞（CVSS 10.0）允許過去 12 年發布版本發生未經驗證的遠端程式碼執行

GitLab 於 2026 年 10 月 21 日釋出修復程式，修正 CVE-2026-110264，這是 Onigmo 正規表示式編譯器中最高嚴重度 CVSS 10.0 整數溢位漏洞，可能導致自我管理實例發生未經驗證的遠端程式碼執行。該漏洞影響回溯至 7.0 版（2014 年）的所有版本，包括超出 GitLab 一般支援政策的舊版分支，修復版本已針對 19.5.1、19.4.3、19.3.6、19.2.9、19.1.9、19.0.10 和 18.11.13 發布。GitLab.com 與 Dedicated 租戶已修補。目前未有野外利用回報，且無臨時變通方案；管理員必須升級。19.4.3 與 19.3.6 的升級包含資料庫變更，會導致單一伺服器停機。

**原始來源:** [Critical GitLab Flaw (CVSS 10.0) Could Allow Unauthenticated RCE Across 12 Years of Releases](<https://thehackernews.com/2026/10/critical-gitlab-flaw-cvss-100-could.html>)

---

### eMudhra 中介證機構私鑰據稱可被復原；瀏覽器封鎖相關證書

iThome 報導，印度數位證書提供商 eMudhra 的中介證機構私鑰據稱可被復原，隨後瀏覽器緊急封鎖與其相關的證書。

**原始來源:** [印度數位憑證業者eMudhra中繼CA私密金鑰可被還原，瀏覽器緊急封鎖相關憑證 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5TVVQxV2NLOXhkSS1mYWdlTjZLQU0wcGhGUkVjOUR0LVVvWHZjVUViR1QwRWZzeVdiYU1UWm9kc0xJY1d3eWlYWnhDLVBuQQ?oc=5>)

---

### JPCERT/CC 警告：多個 PHP 漏洞 (CVE-2026-109618、CVE-2026-109619)

JPCERT/CC 警告關於在 2026 年 10 月 21 日披露的嚴重 PHP 遠端程式碼執行漏洞，攻者可使用 PHP 處理程序權限執行任意程式碼。受影響版本包括 PHP 8.5 8.5.12 之前版本、8.4 8.4.27 之前版本、8.3 8.3.36 之前版本、以及 8.2 8.2.35 之前版本，已達生命週期終止 (EOL) 的 7.4、8.0 與 8.1 僅獲得有限緩解措施。用戶應儘快套用已修補版本，並透過異常 PHPSESSID Cookie、可疑多部分 (multipart) 要求、非預期的工作者進程 (worker) 崩潰，以及不明原因的重新啟動等指標調查可能的入侵；缺乏這些痕跡並不代表安全。

**原始來源:** [注意喚起: PHPにおける複数の脆弱性（CVE-2026-109618、CVE-2026-109619）に関する注意喚起  (公開)](<https://www.jpcert.or.jp/at/2026/at260033.html>)

---

### 研究人員借助AI力量找出存在超過10年的資安漏洞PHP2Shell - iThome

**原始來源:** [研究人員借助AI力量找出存在超過10年的資安漏洞PHP2Shell - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE8tbEN5RXE2eno3VnJYekVXX013V0NNNGo3WUpoSEk2OUppZmNjNkVGbkR1NUpZV0ZvQXgwZXY3VUYwZXZwbE5lRjRiLW5CUQ?oc=5>)

---

### OpenCode Flaw Lets Malicious MCP Servers Execute Code During Sign-In on Windows and WSL

**原始來源:** [OpenCode Flaw Lets Malicious MCP Servers Execute Code During Sign-In on Windows and WSL](<https://thehackernews.com/2026/10/opencode-flaw-lets-malicious-mcp.html>)

---

### China-Linked Hackers Use ARTEX AI Agents in ConnectWise Supply Chain Attack

**原始來源:** [China-Linked Hackers Use ARTEX AI Agents in ConnectWise Supply Chain Attack](<https://thehackernews.com/2026/10/china-linked-hackers-use-artex-ai.html>)

---

### Railway Says Intruder May Have Accessed Customer Secrets, Urges Credential Rotation

**原始來源:** [Railway Says Intruder May Have Accessed Customer Secrets, Urges Credential Rotation](<https://thehackernews.com/2026/10/railway-says-intruder-may-have-accessed.html>)

---

### OVHcloud GitHub Compromise Tied to GlassWorm Threat Actors

**原始來源:** [OVHcloud GitHub Compromise Tied to GlassWorm Threat Actors](<https://www.darkreading.com/cyberattacks-data-breaches/ovhcloud-github-compromise-glassworm-threat-actors>)

---

### Langflow重大遠端程式碼執行漏洞，已觀測逾3,400次攻擊嘗試 - iThome

**原始來源:** [Langflow重大遠端程式碼執行漏洞，已觀測逾3,400次攻擊嘗試 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RVjFES3VQX3VpQ2RFS3pnMHluMFh4VEc4d21xWld2c09XVG5lNUs0SWR2MVBiMFQ4aWI5YkNkVWZpOEdqb3d4Q3NZWFBXdw?oc=5>)

---

### 日本虛擬私有主機業者Onamae遭駭，逾2.6萬臺客戶伺服器恐受影響 - iThome

**原始來源:** [日本虛擬私有主機業者Onamae遭駭，逾2.6萬臺客戶伺服器恐受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9jRXpqSGUwUm1lbEpVbE42TTA0YXRmZkVyU1RXSWUxeVR1RTV1aExick4waXFUQmg2X0xPWUVhNGZ4TTlFVnNYMmtYTldMdw?oc=5>)

---

### LiteLLM工程師GitHub憑證遭竊，官方發布流程成惡意程式散布管道 - iThome

**原始來源:** [LiteLLM工程師GitHub憑證遭竊，官方發布流程成惡意程式散布管道 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5EOE45TFBCN1JGYTdDZlp0RGgyUWFvNlFWVnhnYnFfNk51T0dIdzVDSWllVEt6MWRUVnBrZTR5clhwcWNvb3hXOHluUjZudw?oc=5>)

---

### У японского подразделения Burger King утекли данные 11 млн человек

**原始來源:** [У японского подразделения Burger King утекли данные 11 млн человек](<https://xakep.ru/2026/10/21/burger-king-leak-2>)

---

### お知らせ：ソフトウェア等の脆弱性関連情報に関する届出状況［2026年第3四半期（7月～9月）］

**原始來源:** [お知らせ：ソフトウェア等の脆弱性関連情報に関する届出状況［2026年第3四半期（7月～9月）］](<https://www.jpcert.or.jp/report/press.html>)

---

### INTERPOL Arrests 1,462 Suspects, Disrupts 10,909 Cybercrime Networks in Global Crackdown

**原始來源:** [INTERPOL Arrests 1,462 Suspects, Disrupts 10,909 Cybercrime Networks in Global Crackdown](<https://thehackernews.com/2026/10/interpol-arrests-1462-suspects-disrupts.html>)

---

### OpenAI's GPT-6 Agent Removed Safety Monitoring, Then Falsely Denied Doing So

**原始來源:** [OpenAI's GPT-6 Agent Removed Safety Monitoring, Then Falsely Denied Doing So](<https://thehackernews.com/2026/10/openais-gpt-6-agent-removed-safety.html>)

---

### Hackers used Claude and Grok to automate attacks on 400+ Latin American banks - Dealroom

**原始來源:** [Hackers used Claude and Grok to automate attacks on 400+ Latin American banks - Dealroom](<https://news.google.com/rss/articles/CBMirwFBVV95cUxNUDRiOFB5LTdTb0RBdHpDSGplT3NzZ0FDOHZDUFdsLWdnbWhjdkZnN1BYRzJmUkpGUk1JLTNBcVM5TmdheVpvZ0lXRzQwaERRV0xFVFh0WEd3ZlgtX1lqUG5fdldPeS1nRXpoYThoeGk2WE93R0tVZnloN3ZaX3hkSXAyR21PNTJaLXJuNXpOT0UwQ3VtR2lVWGx0c0VwbFBCRTFhV2lhU0xnLWxjRk1Z?oc=5>)

---

### Amazon證實重大漏洞PHP2Shell在揭露前已遭駭客利用 - iThome

**原始來源:** [Amazon證實重大漏洞PHP2Shell在揭露前已遭駭客利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1qcW5Na3FPVnJEZ2hOSXZkOGdTUkR4VE1CRHpEbEIzb3FhVTBoWnJ0aGNCRkdraWJZb3o1MHFVQlFYQXBEUWtINnhiTEJzUQ?oc=5>)

---

### Node.js發布安全性更新修補10項漏洞，其中CVE-2026-111497可導致遠端程式碼執行，籲儘速更新

**原始來源:** [Node.js發布安全性更新修補10項漏洞，其中CVE-2026-111497可導致遠端程式碼執行，籲儘速更新](<https://www.twcert.org.tw/tw/cp-104-11309-2266c-1.html>)

---

### Хакеры захватили более 300 выходных узлов Tor ради перехвата SSH-соединений

**原始來源:** [Хакеры захватили более 300 выходных узлов Tor ради перехвата SSH-соединений](<https://xakep.ru/2026/10/22/tor-exit-attack>)

---

### Oracle發布2026年10月關鍵修補更新，共修補1,209個漏洞 - iThome

**原始來源:** [Oracle發布2026年10月關鍵修補更新，共修補1,209個漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1yM3hyOWRpUEZOSFVRaWZGNVZsY1pCZlFXajhRYnh6dGVLbVFKYVhCbjA0UTVkd1JDcDdHTG85Rm0wSnl3ejJMS0dyZnR1QQ?oc=5>)

---

### How Bank Hackers Got Claude to Do Their Dirty Work - The Information

**原始來源:** [How Bank Hackers Got Claude to Do Their Dirty Work - The Information](<https://news.google.com/rss/articles/CBMikgFBVV95cUxOTTNEVmwzUXdMN2FBUWo5V1paRXNOelFyR1FVeV9MZjdTSXV0eVRtcUxvVEFNa0Y4NGpPWDFBQ2N0SWpmRWl6UjFrWnlSNk9nUUZlQ0pmdU5jSC1WQUgybl9UTWdCODBoalBoMEpxY0xTcEk2TVNxUjhlM19nQWlpMEpOb2otSGJXZ1lPdE9XczE0Zw?oc=5>)

---

### 防範AI代理越界行為，NIST提出事件應變指引 - iThome

**原始來源:** [防範AI代理越界行為，NIST提出事件應變指引 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1XQ0RSdTJlbWYxT29HNGJZbVYwNkNrbDNSNlh1LXRBMjVaWnpveGE2OXVYRHhwWTBmYk9hVkZfaHBoSWMxNDVoQjhFbHlyZw?oc=5>)

---

### 加州教育部 - iThome

**原始來源:** [加州教育部 - iThome](<https://news.google.com/rss/articles/CBMiggFBVV95cUxQWl9KaVF4TkJxV04tLWhaTTQ0V2lfTUhHZXpSY0I3U1d2ejZrd1BlZzNCMzh6UjVITzluT05yZVNEQnhVVldybnk1a3N4enFjZGg3a1o2TjRGNVVrb2lIeENKUUdXOWdBaEVUVXRKcmI0ZWt1V0JTcGY0dHFHWHhFRmZ3?oc=5>)

---

### 科懋商城會員個資遭擷取，指出是委外服務商系統遭自動化攻擊 - iThome

**原始來源:** [科懋商城會員個資遭擷取，指出是委外服務商系統遭自動化攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE13Q1hIYjdZdU1hdG80Tjd1bzFfWDZBTWExQ2JBeDBNVGxVaGswT2FwdzJLQVRjaEl5VmpsbDhIVnpkeVo1TUFRRkI0cDQ4Zw?oc=5>)

---

### TiDB Breach Exposes Flawed Cloud Security Assumptions

**原始來源:** [TiDB Breach Exposes Flawed Cloud Security Assumptions](<https://www.darkreading.com/cloud-security/tidb-breach-flawed-cloud-security>)

---

### Perplexity開源AI代理沙箱SPACE，強化程式碼執行隔離 - iThome

**原始來源:** [Perplexity開源AI代理沙箱SPACE，強化程式碼執行隔離 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5NRVlfakpVaWRyTlNDNGxDLWNiQkotU1haZDVaMHpLSUlSUHh6UWVoVVZ4eGhjVVhWdjdjT3pFZ2hmRWFRU18zdjBndFpqdw?oc=5>)

---

### Node.js修補4項高風險漏洞，Brotli解壓縮錯誤恐讓駭客遠端執行程式碼 - iThome

**原始來源:** [Node.js修補4項高風險漏洞，Brotli解壓縮錯誤恐讓駭客遠端執行程式碼 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5yaUlzVGEyLWx6blJPZDU3Y2xDa0hkY04zejBoSWx1ajZDcFlNVjFfXzFfd0t3ODdhVnN6ZUFlSTh3MUpBdmFLR0ZUR2N5Zw?oc=5>)

---

### Survey Finds High-Profile Executives Feel Untouchable as Digital Exposure Turns Into Physical Risk

**原始來源:** [Survey Finds High-Profile Executives Feel Untouchable as Digital Exposure Turns Into Physical Risk](<https://www.darkreading.com/cybersecurity-operations/360-privacy-survey-high-profile-executives-feel-untouchable>)

---

### JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）

**原始來源:** [JVN: PHPにおける複数の任意のコードが実行可能な脆弱性（CVE-2026-109618、CVE-2026-109619）](<https://jvn.jp/vu/JVNVU99905564>)

---

### Anthropic取得Opaque機密AI技術與人才 - iThome

**原始來源:** [Anthropic取得Opaque機密AI技術與人才 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5Uc2ZoVEVLdmFydUpHdzZrYVJ4SWlzNF9RZGZ5bzl5aUlpYTVSUzFpb0FWTWdGc1FlN1l3eTFhLUpXSVpFRmFmNV91MlpQUQ?oc=5>)

---

### 微軟開源Scope評測平臺，追蹤AI程式開發代理的任務表現 - iThome

**原始來源:** [微軟開源Scope評測平臺，追蹤AI程式開發代理的任務表現 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfVmwxUjc0NWluWjZCbGZrRHdvZjBndjBtV05PLVYtYjh5QmVQQmpTdkVUVFBZTnVDOWZoTndxa2U5UkxNc3lrMFhGbTR3dw?oc=5>)

---

### Группировка Lazarus применяет ИИ и постквантовое шифрование

**原始來源:** [Группировка Lazarus применяет ИИ и постквантовое шифрование](<https://xakep.ru/2026/10/21/operation-flashhole>)

---

### В США запретили использование продукции DeepSeek в государственных системах

**原始來源:** [В США запретили использование продукции DeepSeek в государственных системах](<https://xakep.ru/2026/10/22/deepseek-ban>)

---

### Marvell, Microsoft &amp;amp; Oracle Work to Standardize Data Center Hardware Security

**原始來源:** [Marvell, Microsoft &amp;amp; Oracle Work to Standardize Data Center Hardware Security](<https://www.darkreading.com/cloud-security/marvell-microsoft-oracle-standardize-data-center-hardware-security>)

---

### Cloud Security Alliance Survey Finds Data Loss Prevention Often Detects Data Loss Only After It Happens

**原始來源:** [Cloud Security Alliance Survey Finds Data Loss Prevention Often Detects Data Loss Only After It Happens](<https://www.darkreading.com/cloud-security/cloud-security-alliance-survey-data-loss-prevention-detects-data-loss>)

---

### Fortinet同步更新多款產品，涵蓋5大產品系列及多個版本分支 - iThome

**原始來源:** [Fortinet同步更新多款產品，涵蓋5大產品系列及多個版本分支 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1WT0RXTnZRRE5PWkpVTVVkR0U4QXdjYXZ4R28tYjVBbHA4amwzUWhKSWhuTGJhb3Z5SzVITHVQQTZjN2pSSE9rZVhoaHdzUQ?oc=5>)

---

### AI can write articles in seconds, but Claude maker Anthropic is hiring a human writer for Rs 3.25 crore - The Economic Times

**原始來源:** [AI can write articles in seconds, but Claude maker Anthropic is hiring a human writer for Rs 3.25 crore - The Economic Times](<https://news.google.com/rss/articles/CBMiiAJBVV95cUxPNlZjbGVFS01tUjlYZXpwcGc1d1Y4NzNxYlpXQV9GYXR4RnR4TnRMc1NwUVNfdlROVjU3TDM1NS1NdlhSdjF3SUU5V2x4dlgzeE1JRExRQUl5THBrcUU5SFdUN0FETU80Q3VVQ1BURUZuRjgzMHBwRDNmZWJ0MGlRV09LOExGZHBHQXhpWlQ5SUhSVGZNVjVvakx3TEoxdzlsVnI3YUlYaFRmd3BFZjA5QWJRR3hvbVJkM1doRWd0ek5UYnFDalQ2Sll2Zjl5UUJVcmZoLWJiSjR2S1RiUDZNSGR4TWZTWUZNTGJ3UlFKVGlxalhQX3lEaXFHMVZabi1RQ1FzYlF1SWHSAYgCQVVfeXFMTzZWY2xlRUtNbVI5WGV6cHBnNXdWODczcWJaV0FfRmF0eEZ0eE50THNTcFFTX3ZUTlY1N0wzNTUtTXZYUnYxd0lFOVdseHZYM3hNSURMUUFJeUxwa3FFOUhXVDdBRE1PNEN1VUNQVEVGbkY4MzBwcEQzZmVidDBpUVdPSzhMRmRwR0F4aVpUOUlIUlRmTVY1b2pMd0xKMXc5bFZyN2FJWGhUZndwRWYwOUFiUUd4b21SZDNXaEVndHpOVGJxQ2pUNkpZdmY5eVFCVXJmaC1iYko0dktUYlA2TUhkeE1mU1lGTUxid1JRSlRpcWpYUF95RGlxRzFWWm4tUUNRc2JRdUlh?oc=5>)

---

### 【AI+DeepSeek】DeepSeek據報已完成集資1000億元人民幣 騰訊及寧德時代領投 - 香港經濟日報HKET

**原始來源:** [【AI+DeepSeek】DeepSeek據報已完成集資1000億元人民幣 騰訊及寧德時代領投 - 香港經濟日報HKET](<https://news.google.com/rss/articles/CBMijwNBVV95cUxQVXRfT2ZHblhHTDlzUFBiSnNVRVhHa0dMclB4SWh4cXRNUFdsLU5zSVhIVTB2RnFyeEY4eEpWY1d4WEZYOXNXTW5Db2tlOXppTGc1dzlCVFhUUDNfZ01INEFvZzVzVS00TGZSR0x1bkZ4a0tCeTR3Zl9HV0FrRlN3R2xsX0JFOHdKcWhoMnd0ZUxWLXF1SlJ6QnJPYUxYd0h5YnliR1dvdXhYQWU3YzJtVGxIa0hEWHdWaGcta0VDZWFaWGRaTy1JNjg0VzFnY0h0eVllWW5UMGtFT3JJNUxOZGR4YlNCUW9CMWJ4QnlLZVdTZ3dzdW1nRHl3b1RjY2VvaDNfekVqVFNjdnE4N2tYT1l4N2xWcjBadzdDOHQ2RWpJb1BPZXJrV0U1WlR6THFqUHk4Z243RDF2QkFCZjJMeDVpdUh3dVh2WmtCbFUydzAzVEtTRmk5bHZ5ZkVOOEVGNVlWVEc5aXUtT0dJWWZVU1A2REd4RV9ybTZDMUM0czB1NnRiMkVDUGNBR3VPUkk?oc=5>)

---

### Grok 4.7 Is Now in Viktor: What You Need to Know - BASENOR

**原始來源:** [Grok 4.7 Is Now in Viktor: What You Need to Know - BASENOR](<https://news.google.com/rss/articles/CBMiigFBVV95cUxNX0JfbG9SS093R256RzVUcHZ6dmVvZDAtMklfOEtJRGVkWlVYRm9zVWpnNEI5eFlyZUZuSzV1VThfRy1UTTdTT0RadUNiaEN3dDJic2lwdG5QUmlWdlBZQ1dpU0NzM3Z3OGk3X29kbEo2dURMSWNSMlpBNkI3VzhqYWR2V1Z5MTB0X2c?oc=5>)

---

### Anthropic takes on Muse with Claude Duet, its new AI agent - The Verge

**原始來源:** [Anthropic takes on Muse with Claude Duet, its new AI agent - The Verge](<https://news.google.com/rss/articles/CBMilAFBVV95cUxQMm0xalYzS19NOGxhQ0ZpanpWeFpjN3g0VzZfVjROQ3RUemxqZmc3STZhdHlRUTlvZEJOaW52dzdVTUxOc09MMzlVeFlJSmc5V2p4WDdwWjRRaDZKMU5QbldoWHBIaTh0Qi1yc1JFaVNHM1BkQ25ucFZfbVJtWGNYMS1jRWlocDk5NUVheDVpclZEUTJw?oc=5>)

---

### Claude Duet: Anthropic’s New Always-On A.I. Agent - www.trendingtopics.eu

**原始來源:** [Claude Duet: Anthropic’s New Always-On A.I. Agent - www.trendingtopics.eu](<https://news.google.com/rss/articles/CBMibkFVX3lxTE5HUzdtaldsWUJvOVplcC1YZDgxSmhjRUJVcHVVaHhlYS0zUkl6WENZN1JlZ0tkRXg2M0pxZ1d2NHJYaHg3NHFKam9BUU0yczl5Mk03WkpEMVRGdmJKNlpjTW5iQkxCMVM1a2x2N1JB?oc=5>)

---

### Grok AI Predicts Something Big is Brewing for XRP by Jan 1, 2027. - Cryptonews

**原始來源:** [Grok AI Predicts Something Big is Brewing for XRP by Jan 1, 2027. - Cryptonews](<https://news.google.com/rss/articles/CBMimAFBVV95cUxOUTJlNVU1bUI5R1M3eUdha2plRHZZeEk5LVc4eVVHTEloNzFvR0lMWHdwWmJaaURiTVJEWUlyWVlqNmZHQXNrMS1oclhIQ09TQl95Q1BXRmdXSktiUm1hQ2drcWFTeTRhYW9oS3ptcTJLTlVaU3N4dzRRdTZPRm13azZoMzhtNVhUS2JTcS0wVklCR1RxeXRTZg?oc=5>)

---

### Claude Maker Anthropic Discloses Mind Boggling $80 Billion Loss - Android Headlines

**原始來源:** [Claude Maker Anthropic Discloses Mind Boggling $80 Billion Loss - Android Headlines](<https://news.google.com/rss/articles/CBMijwFBVV95cUxQWXBzVDFBNE13VDEzdTVwZFQ5YU85akxXU3VKQlc5Y2V2am9zY083dHBEVU5UNUdOUVZRaUJJU2tBVEF3ZDE2Rnlub0ZGcXFnUGxpQnRZNWR4d1JPUlJXLXM2d0k1NWN5ZlN2MDNCTmZxdUhvRTFUdy0xX3ZGdVhRZnZEVDJRQ0pvVzhxYjRDWQ?oc=5>)

---

### 微軟開放Pylance切換型別檢查器，VS Code支援Meta Pyrefly - iThome

**原始來源:** [微軟開放Pylance切換型別檢查器，VS Code支援Meta Pyrefly - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBPZDhDUHctX2lLeDE3bHBuaDFEM21vWmRPVmVUdXNRVXVnTE5SNDFvbmJCRlBNR1A2MjRDMG9GUDlSQ1J0QzBIUkhHTlpBUQ?oc=5>)

---

### Anthropic takes on Grok Bot, Meta's Muse, and OpenAI's Dots with its always-on agent "Claude Duet" - the-decoder.com

**原始來源:** [Anthropic takes on Grok Bot, Meta's Muse, and OpenAI's Dots with its always-on agent "Claude Duet" - the-decoder.com](<https://news.google.com/rss/articles/CBMiuAFBVV95cUxQRG9HZVRLSE1uRXNxWURQMkxmYlN3N050MmMwanJhUUc5QTN5b1VMYnNRc1ZWSlhENEluZ25EZkpQcnB0U2hTRFJRT2RQbFNIS0NzbnlDcF9jZHJJSEdsc1pwMWw2enloVDhjMW5PZHR0ZFZYa0ZrZ2dKWlhMSFQ2dGtDdktUaGZpc19TWDBfTlhpYTkxWlozVXdrZ0EySk1CRjdoUEk3NXBZTF9obVdiSW9DV29rNVhJ?oc=5>)

<!-- ciso-revision:ciso-20261022-6-available-1792734373342 -->
