---
title: "CISO 每日摘要：Fragnesia Linux 核心提權漏洞與存在 18 年的 Nginx 重大漏洞 (20260514)"
description: "Fragnesia Linux 核心本機提權漏洞可取得 root 權限；存在 18 年的 Nginx 重寫模組漏洞可未授權 RCE；Exim 重大漏洞修補。"
pubDate: 2026-05-14
tags: ["CISO", "資安", "威脅情報", "每日摘要"]
author: "Security Solutions Team"
featured: true
---

5 月 14 日，多個存在已久的漏洞接連曝光。Fragnesia Linux 核心漏洞可透過頁面快取損毀取得 root 權限，成為 5 月以來陸續發現的 Linux LPE 漏洞之一。F5 揭露了存在 **18 年**的 Nginx 重寫模組漏洞（CVE-2026-42945），可導致未授權遠端程式碼執行。微軟同時公開了其 MDASH 多模型代理式 AI 安全系統，該系統已發現 16 個 Windows 漏洞。

## 本週活躍威脅

📌 **Fragnesia Linux 核心本機提權漏洞可取得 Root 權限**

名為 Fragnesia 的 Linux 核心本機提權漏洞允許攻擊者透過頁面快取損毀取得 root 權限，是兩週內揭露的第 3 個重大 Linux LPE 漏洞。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/new-fragnesia-linux-kernel-lpe-grants-root-access-via-page-cache-corruption.html)

📌 **存在 18 年的 Nginx 重寫模組漏洞導致未授權 RCE**

F5 揭露了 CVE-2026-42945，一個存在 **18 年**的 Nginx 重寫模組重大漏洞，可導致未授權遠端程式碼執行，影響全球大量網頁伺服器。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168547)

📌 **Windows BitLocker 與 CTFMON 零時差漏洞曝光**

名為 YellowKey 和 GreenPlasma 的兩個 Windows 零時差漏洞被揭露，分別影響 BitLocker 加密繞過與 CTFMON 權限提升。微軟正在調查中。

🔗 **Reference:** [The Hacker News](https://thehackernews.com/2026/05/windows-zero-days-expose-bitlocker-bypasses-and-ctfmon-privilege-escalation.html)

📌 **Mistral AI 的 PyPI 套件遭遇供應鏈攻擊**

Mistral AI 確認其 PyPI 套件在供應鏈攻擊中遭到入侵，這是更廣泛的 Mini Shai-Hulud 攻擊活動的一部分，該活動鎖定 Python 套件生態系統。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168549)

📌 **伊朗 MuddyWater APT 攻擊韓國製造商**

與伊朗相關的 MuddyWater APT 組織被發現攻擊韓國電子製造商，利用 SentinelOne 元件進行 DLL 側載以逃避偵測。

🔗 **Reference:** [iThome](https://www.ithome.com.tw/news/168550)

📌 **RubyGems 因大規模資料拋棄攻擊暫停註冊**

RubyGems 套件註冊表因攻擊者利用該平台進行資料拋棄攻擊而暫停新用戶註冊，已上傳數萬個惡意套件。

🔗 **Reference:** [Dark Reading](https://www.darkreading.com/application-security/attackers-weaponize-rubygems-for-data-dead-drops)

---
*本摘要由精選資安新聞來源自動生成。*