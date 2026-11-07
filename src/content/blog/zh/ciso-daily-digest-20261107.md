---
title: "CISO 每日摘要：黑客在漏洞公開數小時內鎖定 OpenSSH SSHole 漏洞，並在蜜罐上取得 Root 權限 (20261107)"
description: "OpenSSH SSHole 漏洞利用已被觀察到針對停用密碼的帳號展開攻擊；WordPress 安裝更新時在 CVE-2026-119977 影響下可能短暫暴露可存取的安裝程式；Claude Code 設定檔則已將數千組機密洩漏至公開的 GitHub 存放庫中。"
pubDate: 2026-11-07
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 黑客在漏洞公開數小時內鎖定 OpenSSH SSHole 漏洞，並在蜜罐上取得 Root 權限

Previdian 報告指出，針對 OpenSSH SSHole 漏洞（CVE-2026-123158）的利用嘗試在 CVE 發布後不到 9 小時內便已開始，且在一台 Alpine Linux 蜜罐上確認取得了 root 存取權限。當 OpenSSH 運行於停用 PAM 的 musl libc 環境時，該漏洞允許未經身份驗證的攻擊者使用 257 到 1,024 位元組之間的超長密碼，登入已停用密碼的帳號，攻擊成功後將獲得受侵害帳號的既有權限。攻擊者從 IP 89.116.89.18 執行了包括 id、uname 和 hostname 等偵察指令；官方建議使用者安裝 OpenSSH 10.6p2 或發行版修補程式、重新啟動 sshd，並監控日誌中不應接受密碼登入之帳號的 accepted password 記錄。

### 📌對 CISO 的影響

- **立即修補 OpenSSH 並稽核具特權的 SSH 帳號 —** 套用 OpenSSH 10.6p2 或發行版修補程式，重新啟動 sshd，並監控 sshd 日誌中僅應接受金鑰登入之帳號的密碼驗證通過事件。
- **在 WordPress 更新期間封鎖 wp-content/upgrade —** 在套用 7.1.4 版本或分支修復程式前，拒絕針對 wp-content/upgrade 的網路存取，並確認該路徑回傳 403，以關閉 CVE-2026-119977 所描述的短暫更新暴露期間。
- **輪換 AI 編碼代理資料夾中發現的機密資訊 —** 在存放庫與 git 歷史記錄中搜尋 .claude/settings.local.json 和 .claude/settings.json，輪換所有外洩的密碼、權杖與金鑰，並將本機代理設定檔新增至存放庫的 .gitignore 及 CI 機密掃描中。

**參考來源:** [Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot](<https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html>)

---

## 本週活躍威脅

📌 **安裝已被利用之 WordPress 漏洞的修補程式可能使部分網站面臨最後一次曝險**

Picus Security 研究員 Umut Bayram 報告指出，WordPress 4.7 至 7.1.3 版本受到 CVE-2026-119977 影響，CISA 已將該漏洞加入其已知被利用漏洞目錄；在使用完整套件進行核心更新期間，舊版更新程式碼可能會讓暫存的 wp-content/upgrade 資料夾保留可預測的名稱，允許未經身份驗證的攻擊者在複本被刪除前執行 PHP 程式碼。Bayram 建議在更新至 7.1.4 或分支修復版本之前，先封鎖對 wp-content/upgrade 的網路存取。

**參考來源:** [Installing the Fix for an Exploited WordPress Flaw Can Expose Some Sites One Last Time](<https://thehackernews.com/2026/11/installing-fix-for-exploited-wordpress.html>) 

---

📌 **Claude Code 的「不再詢問」檔案在 GitHub 上的 1,122 份公開複本中洩漏密碼與金鑰**

Apiiro 報告指出，Claude Code 的 .claude/settings.local.json 在 GitHub 上的 1,122 份公開複本中包含至少一組機密資訊，其中包括 379 個資料庫密碼、43 組 SSH 登入資訊、42 個權杖以及 23 把 AWS 金鑰，且較舊版本在 509 個存放庫中又額外增加了 734 組機密；研究人員建議在清理前輪換所有外洩的憑證，因為 git 歷史記錄和分支仍會保留這些資料。

**參考來源:** [Claude Code's “Don't Ask Again” File Exposes Passwords and Keys in 1,122 Public Copies on GitHub](<https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html>) 

---

📌 **測試顯示DeepSeek AI編碼代理易透過原始程式碼註解遭受憑證竊取**

對DeepSeek自動化編寫程式碼代理的實際測試揭示，儘管AI可在數分鐘內完成拉取請求，惟惡意原始程式碼註解可操縱其洩漏使用者憑證。採用自動化AI編碼工具的開發團隊應檢閱代理如何解析不可信來源文字，並強制執行嚴格的機密管理，以防止自動化數據外洩。

**參考來源:** [越認真的AI 越容易被騙？DeepSeek 自動寫碼代理實測：兩分鐘完成PR，但一行原始碼註解就能偷走你的憑證 - https://cyberq.tw/](<https://news.google.com/rss/articles/CBMid0FVX3lxTE1xZ0ZrNVZ4N0VIcEZweWZlLWRwMTJ0SmRjcUNBb2dwT05TUGs5SWdIM0JrVVlEOVdsWXVlQm5WTkxWMTFVNElvX0VpM3FRcmxJT2tVczAwTjUyaHNpQ0RfWXZTWlFRVFVxWUpLeVhfNkFwN2ZmZmhB?oc=5>) 

---

📌 **Chainalysis因涉及使用者密碼與權杖的違規事件暫停加密貨幣交易監控**

區塊鏈分析公司Chainalysis因一起影響使用者密碼與API權杖的網路事件，暫時停止其加密貨幣交易監控服務。依賴該服務的受影響組織與使用者應主動輪換相關驗證憑證、使已暴露的權杖失效，並追蹤官方關於服務恢復與暴露範圍的更新。

**參考來源:** [Chainalysis遭駭波及使用者密碼與權杖，暫停加密貨幣交易監控服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtOHFfdVlvcGFzd243UW1EQmhmbktoWTdBS0tGNnRBTEhUVVRXSlJIR2ttTmhhYTY2R09wYjI4MDZEc0FoUjJyVmQ2d3lIZw?oc=5>) 

---

📌 **騰勢外包線上服務系統遭異常存取觸發事件回應**

騰勢偵測到外包線上服務系統出現異常存取後，已啟動網路安全緊急回應並調查影響範圍。採用外部服務提供商的組織應核實第三方存取控制、檢查日誌是否有未經授權的數據存取，並等待關於受影響系統與數據的確認報告。

**參考來源:** [騰勢委外線上服務系統遭異常存取，已啟動資安應變並調查影響範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1XWXpqMWJQQXpkZ2lNVk1MT0dHVnJRRlg2clJQMXI5TUU3Wl8xdUEwTC1fa29iUDlUV2oxNGgwLTFubExHem5rY2Y4aDh3UQ?oc=5>) 

---

📌 **Linux 核心 IPv4 TCP 連線漏洞影響廣泛，多家廠商釋出補丁**

iThome 報導指出，一個 Linux 核心 IPv4 TCP 連線漏洞影響範圍廣泛，多家廠商正釋出補丁。

**參考來源:** [Linux核心IPv4 TCP連線漏洞影響廣泛，多家廠商陸續推出修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBMVi1BajQ4ZG5TM2s1SzVCcWFmRkZzcnB1anZoOE1uTHdGN2ZVMXFrOGJnOHc4SGRpZ3hxZlZoaTZ2NXRma2lkOU90dTdodw?oc=5>) 

---

📌 **美國當局禁止聯邦機構使用 Acronis 軟體**

Xakep 報導指出，美國當局已禁止聯邦機構使用 Acronis 軟體。

**參考來源:** [Власти США запретили федеральным ведомствам использовать ПО Acronis](<https://xakep.ru/2026/11/06/acronis-usa>) 

<!-- ciso-revision:ciso-20261107-1-1794069731552 -->
