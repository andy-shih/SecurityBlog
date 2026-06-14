---
title: "CISO 每日摘要：微軟警示 Claude Code 憑證竊取漏洞 (20260607)"
description: "微軟揭露 Claude Code GitHub Actions 整合存在憑證竊取漏洞；Claude 服務發生重大中斷；CISA 將 SolarWinds Serv-U 加入已知遭利用漏洞目錄"
pubDate: 2026-06-07
tags: ["Claude Code", "憑證竊取", "供應鏈攻擊", "CISA", "SolarWinds", "AI安全"]
author: "Security Solutions Team"
featured: true
---

## 微軟警示 Claude Code 憑證竊取漏洞

微軟安全研究人員揭露 Anthropic 的 Claude Code GitHub Actions 整合存在重大安全漏洞，攻擊者可藉此從 GitHub 儲存庫竊取憑證。此漏洞凸顯 AI 輔助開發工具在企業環境中廣泛採用所帶來的供應鏈風險。

- 微軟研究人員發現 Claude Code GitHub Actions 存在漏洞，可透過惡意 issue 或 pull request 留言觸發
- 攻擊向量允許在 CI/CD 管道中運作 Claude Code 的儲存庫中竊取憑證
- 此漏洞揭露之時，正值業界對 AI 程式碼輔助工具及其在企業 DevOps 工作流程中的安全影響日益關注
- 此外，Anthropic 的 Claude 服務發生重大中斷，影響 claude.ai、Claude Code 及 Claude Cowork 平台

此事件凸顯保護 AI 輔助開發管線安全的重要性，以及對整合代理式 AI 程式碼工具的 CI/CD 環境實施嚴格的存取控制。

🔗 **參考文獻:** 完整報導 ([Decrypt](https://decrypt.co/anthropic-claude-code-vulnerability)) | ([CyberSecurityNews](https://cybersecuritynews.com/anthropic-claude-services-down/))

## 本週活躍威脅

📌 **Miasma 蠕蟲鎖定微軟 GitHub 儲存庫發動供應鏈攻擊**

一個高度精密的蠕蟲攻擊活動已入侵 **73 個微軟擁有的 GitHub 儲存庫**，利用名為 **Phantom Gyp** 的新型技術來竊取憑證並在軟體供應鏈中傳播。該攻擊採用 **六階段感染鏈**，鎖定開發者環境，同時一個以 Rust 編寫的變種（IronWorm）也在攻擊 **npm 生態系統**。

🔗 **參考文獻:** [The Hacker News](https://thehackernews.com/2026/06/miasma-worm-hits-73-microsoft-github.html) | [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/rust-written-ironworm-npm-supply-chain)

📌 **CISA 將 SolarWinds Serv-U 阻斷服務漏洞加入已知遭利用漏洞目錄**

CISA 已將 **CVE-2026-28318**（SolarWinds Serv-U 中的未經身分驗證阻斷服務漏洞）加入已知遭利用漏洞目錄（KEV），要求聯邦機構在 **4 天內**完成修補。此漏洞已在實際攻擊中被利用，可能讓攻擊者中斷檔案傳輸作業。

🔗 **參考文獻:** [The Hacker News](https://thehackernews.com/2026/06/cisa-adds-actively-exploited-solarwinds.html) | [iThome](https://www.ithome.com/security/solarwinds-serv-u-dos)

📌 **惡意 Chrome 擴充套件鎖定 AI 平台互動內容**

研究人員發現一波 **惡意 Chrome 擴充套件**攻擊活動，專門攔截並竊取使用者在 **AI 平台**上的對話內容與敏感資料。這些擴充套件鎖定 ChatGPT、Claude 及其他主流 AI 服務的使用者，擷取提示詞、回應，以及可能的 API 金鑰。

🔗 **參考文獻:** [iThome](https://www.ithome.com/security/malicious-chrome-extensions-ai)

📌 **C0XMO 殭屍網路利用老舊 DD-WRT 漏洞感染 DVR 及 Android 裝置**

**C0XMO 殭屍網路**正在主動掃描並利用 **老舊 DD-WRT 韌體漏洞**，入侵路由器、DVR 及 Android 裝置。該殭屍網路透過鎖定使用預設或弱憑證的物聯網裝置來擴大其規模，將這些裝置納入用於 DDoS 攻擊和代理劫持的網路中。

🔗 **參考文獻:** [xakep.ru](https://xakep.ru/2026/06/08/c0xmo/) | [The Hacker News](https://thehackernews.com/2026/06/weekly-recap-instagram-account-hacks.html)

## OPSWAT

鎖定 GitHub 儲存庫及 npm 生態系統的 Miasma 蠕蟲與 IronWorm 供應鏈攻擊，凸顯了在軟體開發管線中實施多層檔案安全防護的迫切需求。OPSWAT 的 **MetaDefender** 提供 **30 多種防毒引擎**的多重掃描及 **Content Disarm and Reconstruction（CDR）** 技術，可在軟體套件和工件進入開發供應鏈之前，檢測並消除其中隱藏的惡意程式碼。隨著具備蠕蟲能力的惡意軟體開始鎖定 CI/CD 環境，在程式碼攝入點整合檔案層級的安全控制已成為企業 DevSecOps 的必要措施。
