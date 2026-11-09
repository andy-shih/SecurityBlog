---
title: "CISO 每日摘要：菲律賓海外就業系統約 69GiB 資料庫備份疑遭竊，政府展開調查 (20261109)"
description: "菲律賓海外就業系統正調查一起疑似 69GiB 資料庫備份遭竊事件；據報中國駭客利用 AI Agent 侵入台灣政府系統；日本網路服務業者 Arara 遭遇外洩事件，可能已導致 8100 萬筆客戶記錄外洩。"
pubDate: 2026-11-09
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 菲律賓海外就業系統約 69GiB 資料庫備份疑遭竊，政府展開調查

菲律賓政府一處海外就業系統在約 69GiB 的資料庫備份疑似遭竊後，目前正接受調查。

當局已針對這起涉及該就業系統備份的疑似資料竊盜案展開調查。

外洩範圍以及是否有任何記錄遭存取，目前仍在調查中。

### 📌對 CISO 的影響

- **保護備份儲存庫並調查疑似竊盜情事 —** 將約 69GiB 資料庫備份的疑似遭竊事件視為潛在的資料外洩，強化備份儲存防護，並在確認受影響記錄前啟動鑑識調查。
- **評估針對政府系統的 AI 驅動入侵威脅 —** 在傳出 AI Agent 入侵台灣立法院與法務系統的報導後，全面檢視政府網路的身份驗證、監控與區隔措施。
- **管理第三方網路服務業者外洩風險 —** 評估與網路服務業者 Arara 共享的資料，通知可能受影響的客戶，並要求該供應商確認可能涉及 8100 萬筆記錄外洩的具體範圍。

**參考來源:** [菲律賓海外就業系統約69GiB資料庫備份疑遭竊，政府展開調查 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE14bno3WTBta1Ryd1dmSjdhSWNXQzJlVktacHQ1NlgwSUNSMl9rTXlmM3B4TThuYzBEbXpSTnVITVVrcVpwcjdkUTMyRHdudw?oc=5>)

---

## 本週活躍威脅

📌 **中國駭客利用 AI Agent 攻擊亞洲政府機構，侵入台灣立法院與法務部內部系統**

據報導，中國駭客利用 AI Agent 攻擊亞洲政府機構，其中包括侵入台灣立法院及法務部的內部系統。

**參考來源:** [中國駭客利用AI代理攻擊亞洲政府機關，入侵臺灣立法院、法務部的內部系統 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9zeDZTY29uUG9jRG4zZnhDaVByRkZhZXdfbVc0SlBQajVDXy1scmxPVkhvbTJITnVjMnU2R1QxQzlXdW4tR3BwWUctQW5yQQ?oc=5>) 

---

📌 **日本網路服務業者 Arara 遭駭，波及小學館、Bic Camera、摩斯漢堡等數百家客戶，恐外洩 8100 萬筆記錄**

日本網路服務供應商 Arara 遭遇資安外洩事件，波及包括小學館、Bic Camera 和摩斯漢堡在內的數百家客戶，可能有多達 8100 萬筆記錄外洩。

**參考來源:** [日本ISP業者Arara遭駭影響小學館、BIC Camera、摩斯漢堡等數百家客戶，可能外洩8,100萬筆資訊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5zQ1pqT21ZYnZvN05fUTF5Nk8zSzgtbkF5bjA3UU9OY2pJcU02N2tUWHdLUU1McmxxUGNNN2E2RGZiVldhMDU1VFYwVGNPUQ?oc=5>) 

---

📌 **OpenSSH 身分驗證繞過漏洞 (CVE-2026-123158)**

JPCERT/CC 警告，OpenSSH 版本早於 10.6p2，且搭配 musl libc、停用 PAM、啟用密碼驗證，以及密碼雜湊欄位為「\*」的帳戶，可能允許未經驗證的遠端攻擊者無需有效密碼即可登入。公開的概念驗證已出現，GreyNoise 表示自 2026 年 11 月 5 日起發現嘗試利用的記錄，並且在 11 月 7 日前觀察到成功入侵、入侵後的命令執行及 C2 代理人部署，但 JPCERT/CC 目前確認沒有組織遭到妥協。

**參考來源:** [お知らせ：CyberNewsFlash「OpenSSHにおける認証回避の脆弱性（CVE-2026-123158）について」](<https://www.jpcert.or.jp/newsflash/2026110901.html>) 

---

📌 **Rails 修補影響使用 ImageMagick 處理上傳圖片網站的 9.8 嚴重度漏洞**

iThome 報導，Rails 已修補一個 9.8 嚴重度的漏洞，該漏洞與使用 ImageMagick 處理上傳圖片的網站有關。

**參考來源:** [Rails修補9.8分重大漏洞，使用ImageMagick處理上傳圖片的網站需留意 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9SVUF1cmtKdGNFT29RZzMteDJFZm12eXdjSXVtVXg1WHktR09zazVYaU1ST3pEd3VPOFg5SWRJVnRUYkg4ZUVybnhuckVWZw?oc=5>) 

---

📌 **CISA 因可能利用報告，標記 SonicWall SonicOS MFA 繞過漏洞**

CISA 將 CVE-2026-19868 (CVSS 7.1/7.5)，這是一個 SonicOS SSL-VPN 的驗證強制執行漏洞，加入其 KEV 目錄，此後有報告指出可能在現實世界攻擊中被利用。該漏洞可能允許持有有效替代驗證憑證的使用者繞過 SAML 控制和 MFA；SonicWall 調查了潛在利用報告，並敦促立即修補。聯邦民用行政機關應於 2026 年 11 月 20 日前套用修補。

**參考來源:** [CISA Flags SonicWall SonicOS MFA Bypass Flaw Amid Reports of Possible Exploitation](<https://thehackernews.com/2026/11/cisa-flags-sonicwall-sonicos-mfa-bypass.html>) 

---

📌 **位於台灣的駭客使用 BOSSAI AI 代理人竊取台北緊急調度記錄**

Acronis 威脅研究單位報告，位於花蓮市的單一攻擊者使用名為 BOSSAI 的本地設定，該設定運行九個大多在「abliterated」模型上的 AI 代理人，針對至少 11 個國家的數百個組織，成功訪問或竊取約 10 個位於台灣、墨西哥和泰國的目標數據。

**參考來源:** [Taiwan-Based Hacker Used BOSSAI AI Agents to Steal Taipei Emergency Dispatch Records](<https://thehackernews.com/2026/11/taiwan-based-hacker-used-bossai-ai.html>) 

---

📌 **預設的 'admin:admin' 伺服器密碼協助研究人員駭入兩家汽車製造商，解鎖並啟動汽車**

研究人員 Shubham Shah 和 Sam Curry 發現，兩家汽車製造商行動應用程式背後的 ForgeRock 身分伺服器暴露了一個仍使用預設 admin:admin 憑證的 Apache Felix 管理控制台，允許完全接管客戶帳戶，並在車主同意下，解鎖連線測試車輛的車門並啟動引擎。

**參考來源:** [Default 'admin:admin' Server Password Helps Researchers Hack Two Automakers, Unlock and Start Cars](<https://thehackernews.com/2026/11/default-adminadmin-server-password.html>) 

---

📌 **美國機構警告製冷控制器攻擊可能導致火災和庫存損失**

CISA、FBI、HHS、USDA 和 DOT 發布聯合通告，警告威脅行動者正在全球積極鎖定工業製冷和冷鏈控制器，利用身份驗證繞過、代碼注入和弱配置來改變溫度、強制除霜循環，並導致庫存損失或火災風險。

**參考來源:** [U.S. Agencies Warn Refrigeration Controller Attacks Could Cause Fires and Inventory Losses](<https://thehackernews.com/2026/11/us-agencies-warn-refrigeration.html>) 

---

📌 **宏碁子公司因外包廠商 Cyberbiz 資料庫遭遇異常存取而暫停線上商店營運**

iThome 報導，宏碁子公司在外包廠商 Cyberbiz 資料庫遭遇異常存取後，暫停線上商店營運。

**參考來源:** [宏碁智新因委外廠商Cyberbiz資料庫遭異常存取，已暫停線上商店營運 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9BNExNQ3dqR09fSjJaeWxQSjRIT2owbGRkNEdzcXZWWEdfZWhyMjg2b1R3cHlxeVZzbHBsXzkxejJ5TFd0NVlNVFpHXy0xZw?oc=5>) 

---

📌 **每週回顧：SSHole 被利用、APT Root RCE、機器人接管、1.5 萬個被入侵網站等，更多內容請見下文**

The Hacker News 每週回顧涵蓋多項活躍威脅，包括針對 OpenSSH 漏洞 CVE-2026-123158 的利用嘗試（影響 PAM 已停用的 musl-based 系統）、允許 root 程式碼執行的 Debian 與 Ubuntu APT 漏洞、針對近 1,000 台設備被利用的 Zyxel GS1900 交換機零日漏洞 CVE-2026-107441、散佈 CWPdoor 惡意軟體的 trojanized Control Web Panel、傳送後門的遭劫持 cPGuard 更新基礎設施、針對 BFSI 組織的 AI-assisted Crafty Falcon 攻擊、針對 Microsoft 365 工作階段的 PhantomDOM 瀏覽器中間人網路釣魚、CPython 沙箱逸出漏洞、QNAP Plex2Shell 利用報告、MetaMask 質押獎勵轉移、針對安全專業人員的遭妥協 GitHub 專案，以及 15,579 個感染惡意 JavaScript 刷卡器和 exploit kit 的網站。

**參考來源:** [⚡ Weekly Recap: SSHole Exploited, APT Root RCE, Robot Takeovers, 15K Hacked Sites, and More](<https://thehackernews.com/2026/11/weekly-recap-sshole-exploited-apt-root.html>) 

---

📌 **一台酷涼與宏碁時尚線上商店外包廠商 Cyberbiz 發生安全事件**

iThome 報導，一起涉及外包廠商 Cyberbiz 的安全事件影響了一台酷涼與宏碁時尚線上商店。

**參考來源:** [倚天酷碁與宏碁風尚線上商店委外商Cyberbiz發生資安事件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9salRHbENWZGFTRUxVb0x6ZWkxMjlUOHd0V19TRmQwX1FxNGVQcE9tc2NzbllOLWpyRklLVHRqb3N2RnJVXzFabndCdDNXZw?oc=5>) 

---

📌 **台灣 NICS 表示 DeepSeek AI 模型未通過越獄測試且缺乏額外安全防護**

台灣國家資通安全院揭露的測試結果顯示，離線版 DeepSeek R1 模型對多種越獄技術的防禦不足，且不含可比模型所具有的補充性安全機制。

**參考來源:** [新聞 - iThome](<https://news.google.com/rss/articles/CBMizwFBVV95cUxQY19PM1VsUG55XzlUaURBR0NVX1Mtc2MxVW1Fcno4TjgzMHhWb3BmdjREb0xaZE1BRjJUb0c1UG82YnFZdjdXREk3aDBSYmJEX2J0UFpONDBVeGN4emlJVWpRWGZQTWF5dEI4QU1ITmRtWlVEc3dGeWItbWE2Njh2Q3RYeVl5LVctOW9sNW52Vm1YMXVSZWlSWDdLNnhpQW1jelUwdWVoek0zZDhjUWhuYUk1cEpQZTBmWS1FVmlDNGZWNzN4aXVXS3hJc3V4bU0?oc=5>) 

---

📌 **AI 驅動的攻擊系統 BossAI 針對台灣緊急回應服務**

iThome 的每日安全簡報報導，根據 11 月 9 日版本，一個名為 BossAI 的自動化 AI 攻擊平台已矇目台灣的緊急回應基礎設施。

**參考來源:** [【資安日報】11月9日，AI自動化攻擊系統BossAI鎖定臺灣緊急應變服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9LNURQb3B3dndZcmV6ZWx3SkhFM2lXNnBCQW9DYkZvRkJNUE9sRVJPMHB4TWZGaTFqWkc4Uml6a1Y0MU1JZTNoVmcwNVlZdw?oc=5>) 

---

📌 **美國 CISA 警告 SonicWall 漏洞正遭主動利用**

CISA 已將一項 SonicWall 安全漏洞列入已知遭利用漏洞目錄，標示該漏洞在野外遭確認遭惡意利用，並呼籲立即修補。

**參考來源:** [美國CISA警告SonicWall資安漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE41b0hqc3ozalpXQWR1TWpaX3VrWHdPdlRQRWU5bkFaXzFEUTFIYjkzV1djb2V2dE5IdENFV0hOWXFfRVRjM1RUbkd5dWZWUQ?oc=5>) 

---

📌 **Web3Auth 漏洞被利用盜取 Keplr 加密貨幣，提供商為安全清空其他錢包**

The Hacker News 報導，於 2026 年 11 月 9 日，攻擊者利用 Web3Auth 安全漏洞，攻破使用 Google 或 Apple 登入創建的 Keplr 錢包。Keplr 說該漏洞導致部分受影響用戶的私密鑰外洩，而 Web3Auth 在攻擊者觸及前，將其他處於風險中的錢包資金轉移至恢復錢包。資金跨 11 個 Cosmos 家族區塊鏈和八個以太坊風格鏈轉移。Bitquery 計算至少 6.01 萬美元從超過 44,000 個錢包轉出至恢復錢包，最初將轉移視為盜竊，之後更正分析，將其描述為救援。GoPlus 評估至少 100 萬美元被實際盜竊。約 20% 的 Google 和 Apple 登入帳戶受影響，但只有部分出現被利用。Keplr 已暫停 Google 和 Apple 登入。Web3Auth 暫停其供其他應用使用的嵌入式錢包服務，儘管 Consensys 說其調查未發現 MetaMask 用戶受影響的證據。建議用戶不要向受影響帳戶發送新資金，不要重新創建它們，並將非質押資產移至恢復助記詞或硬體錢包。

**參考來源:** [Web3Auth Flaw Exploited to Steal Keplr Crypto, Provider Empties Other Wallets for Safety](<https://thehackernews.com/2026/11/web3auth-flaw-exploited-to-steal-keplr.html>) 

---

📌 **思科發現惡意軟體使用 Claude AI 建立受害者檔案並排序被竊取帳戶**

SOFX Report 報導思科研究，發現使用 Claude AI 建立受害者檔案並排序被竊取帳戶的惡意軟體。

**參考來源:** [Cisco Finds Malware Using Claude AI to Profile Victims and Rank Stolen Accounts - The SOFX Report](<https://news.google.com/rss/articles/CBMiowFBVV95cUxOTzFUUGh0Q05FQWJ6NXlqTmJnLTBZaDd5NHBCWm90eVVyNEt2RWZRTlU0WFJMbUVPVFhCc0xvZW5ic29Ncm4zeXJHMG94S2g3eVVCc3BhOTRxUzRsLUkxNjMwMjBid0dXbnVBNW1VWnpIb3JvZnZnNWZpWmZkMmtrOFFfU0tzNF9MbXZVSy1FYkJxbEdyLWowRjNRYVM0MnlyQkVN?oc=5>) 

---

📌 **MS&amp;AD 保險集團投保人網站遭存取，包含三井住友在內 720,000 份客戶記錄外洩**

iThome 報導，MS&amp;AD 保險集團投保人網站遭存取，導致包含三井住友客戶在內的 720,000 份客戶記錄外洩。

**參考來源:** [日本保險集團MS&amp;AD保戶網站遭存取，外洩三井住友等客戶資料72萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5md3ZPSmx0WXBKNV8wbHBmR1NvNTRfOXg2bHFLcVM4X0ZtR2dxWU5RWFZhQ0tSY0Q5VmY5SmFaeXg3Ull6NUl3STJYVllnQQ?oc=5>) 

---

📌 **QNAP 警告 NAS 裝置遭受 Plex2Shell 漏洞攻擊針對**

根據 iThome 報導，QNAP 發出警告，指出其 NAS 裝置正遭受利用 Plex2Shell 漏洞的攻擊者積極攻擊。

**參考來源:** [威聯通警告NAS設備遭遇Plex2Shell漏洞攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE85X0Q5ZXM5ZWhHdUVaQ1VSdXFidHZjX1l3dG9XTGtfVGJva1dEd3NhTkFyVzhBVl9MajFlRGlLM1ppbUFYSTREbzkwTGR4UQ?oc=5>) 

---

📌 **高雄警逮捕一名利用 AI 構建攻擊系統竊取超過 23 萬份個人資料的男子**

高雄警方逮捕一名姓林的男子，他涉嫌使用 AI 構建攻擊系統，竊取超過 23 萬份個人資料以供販賣，iThome 報導指出。

**參考來源:** [高雄警方偵破林姓男子用AI架設攻擊系統，竊取逾23萬筆個資販售 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5YRmt1Ujg5WXp0TkQ0U240RTFzTW9Gay1uSERpRVc4X0RuVk1FNnFzRHl3cVNVd0dBMEJYNTQzeUdUTFRCTjkzby1mc0lBQQ?oc=5>) 

---

📌 **SonicWall 修補 SSL-VPN 認證繞過漏洞，警告可能遭到利用**

根據 iThome 報導，SonicWall 已釋出修補 SSL-VPN 認證繞過漏洞的補丁，並建議該漏洞可能已在野外被利用。

**參考來源:** [SonicWall修補SSL-VPN身分驗證繞過漏洞，原廠示警可能已遭利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9GaHpLS0VXdHVMWjk4eXppcWMwVUlrRnRqamc4OGNLbnVEb190b0czSngtR2VVY0E2VzlSMmd2TGw0M2J3cWRod2Q5QVBPUQ?oc=5>) 

---

📌 **LNbits 勸告所有運營人員因攻擊而關閉其比特幣閃電錢包伺服器**

LNbits 請求其比特幣閃電錢包系統的所有運營人員立即關閉伺服器，因為正遭到活躍攻擊。該專案擁有待處理的安全修補，但尚未發布修補軟件。一位運營人員報告稱，攻擊者在伺服器被停止前從中提取了 2,285,545 個聰，約 0.023 個比特幣。LNbits 也使其在 my.lnbits.com 上的雲端實例離線，服務預計將於大約 17:20 UTC 恢復。具體易受攻擊的擴展尚未公開識別，該專案也未披露受影響伺服器的數量或總損失。

**參考來源:** [LNbits Urges All Operators to Shut Down Their Bitcoin Lightning Wallet Servers Amid Attacks](<https://thehackernews.com/2026/11/lnbits-urges-all-operators-to-shut-down.html>) 

---

📌 **Chainalysis 違規事件據報竊取所有用戶的憑證和令牌**

Xakep 報導駭客入侵 Chainalysis 並竊取所有用戶的憑證和令牌，這是基於俄語標題。沒有來自來源的其他細節。

**參考來源:** [При взломе Chainalysis хакеры похитили учетные данные и токены всех пользователей](<https://xakep.ru/2026/11/09/chainalysis-leak>) 

---

📌 **PHP2Shell 漏洞敲響警報：企業如何快速掌握威脅背景和攻擊風險？- iThome**

iThome 報導 PHP2Shell 漏洞以及企業威脅背景和攻擊風險考量。沒有來自來源標題的其他細節。

**參考來源:** [PHP2Shell 漏洞敲響警鐘 企業如何快速掌握威脅脈絡與攻擊風險？ - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE85ZG8yZ3VsY0FjeHdKdUlmU1lsbmE1S0tCTDAwR2ZETE51X3k5ZXhkN1VIeFlxN1E2dmpVdk5qTXpFbmN1Rjl3d0F4TQ?oc=5>) 

---

📌 **攻擊者在 GitHub 散布假安全工具，並透過 Visual Studio 編譯過程植入後門 - iThome**

iThome 報導，攻擊者在 GitHub 散布假安全工具，利用 Visual Studio 編譯過程植入後門。

**參考來源:** [駭客在GitHub散布假資安工具，利用Visual Studio編譯流程植入後門 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5rUEdTbVV0MzhaMVl2OXhHRG56RGowN09fTkhCTWZVWXBuYVBWZ2o1T2xTMzhmVWRZMWRlQWFwR0ZyTzF1cGt4Vzk5ZXd3UQ?oc=5>) 

---

📌 **Acronis 披露 AI 驅動攻擊系統 BOSSAI，整合 12 個 AI 代理、MCP 與 Skills - iThome**

iThome 報導，Acronis 披露 AI 自動化攻擊系統 BOSSAI 的運作細節，該系統整合 12 個 AI 代理、MCP 與 Skills。

**參考來源:** [Acronis揭露AI自動化攻擊系統BOSSAI運作細節，整合12個AI代理、MCP與Skills - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5jMXhRZ3g2Q3VSeVkyNmVRRVFyWDl1QTVTM2dxMFB3bDBIcVBCMEUzOURZZTg2b2MzMi1oTjdMWlltZjRDWXNSTFZoRzJfUQ?oc=5>) 

---

📌 **Tianjen 成員與線上商城平台訂單資料可能受 91APP 安全事件影響 - iThome**

iThome 報導，Tianjen 成員與線上商城平台訂單資料可能受 91APP 安全事件影響。

**參考來源:** [天仁會員與線上商城平臺訂單資料恐受91APP資安事件波及 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBybWtyQnlycl8zSE5mX0tYUzNIS0d4ajQzcjNEUzEzSDNxaVJ1Mkt5NHRUQ2wzby1xWUQya2syY2JfMXdjSUFaR04zSFoyUQ?oc=5>) 

---

📌 **台灣鹽業線上商城外包廠商資料庫遭未經授權存取**

iThome 報導，台灣鹽業線上商城外包廠商的資料庫遭未經授權存取。

**參考來源:** [臺鹽線上商城委外廠商資料庫遭未授權存取 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE00NC1wRUZPdHJiQ2RBQzBxOGtJVXlYcFZPbUl1VzRDT3pEUy16ZDI1MG50WG5QellKNmJsd0R1ekhkSGhYVVN1OEdzUDZiUQ?oc=5>) 

---

📌 **前 OpenAI 工程師因在高階會議室埋設隱密裝置一案不認罪**

The Hacker News 報導，前 OpenAI 工程師 Abdulrahman Alfozan 在舊金山聯邦法院不認罪，檢方指控其在高階會議室埋設先進的錄音裝置，試圖非法錄製涉及高層人員的敏密對話。

**參考來源:** [Former OpenAI Engineer Pleads Not Guilty to Planting Covert Device in Executive Meeting Room](<https://thehackernews.com/2026/11/former-openai-engineer-pleads-not.html>) 

---

📌 **Anthropic 的 Claude 也捲入資料外洩事件；約 100 家韓國公司相關資料曝光**

財經新聞報導，約 100 家韓國公司的相關資料，在涉及 Anthropic Claude 的資料外洩事件中曝光。

**參考來源:** [Anthropic’s Claude also caught up in breach...Data linked to around 100 South Korean companies exposed - 파이낸셜뉴스](<https://news.google.com/rss/articles/CBMiWEFVX3lxTE5JZE1FakVCdHhycDNpNU5iOWRSWUt3UEVHdWxoclgtNE1XajFnU2VESEVBUjNWb2tOeVZHclp4cTkwLTU5bnpoYzl0T0E2cHZPeWdVVlJ5YXI?oc=5>) 

---

📌 **攻擊者濫用 Microsoft Entra ID 入侵 MSP 並波及下游客戶**

iThome 報導，攻擊者濫用 Microsoft Entra ID 以入侵受控服務提供商，並將影響擴及至下游客戶。

**參考來源:** [駭客濫用Microsoft Entra ID，入侵MSP並波及下游客戶 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5mVXNBbS1wYkl4amVrdmdGNERNT3R2YklBTk0zemlHaGV6ejAyM0Q3b2JVcXdOeVJ4LVVTZWszNGJUZ0ZZRTZhYkttUWhNdw?oc=5>) 

---

📌 **Apple 將從版本 27.3 起檢查公開分享的 iCloud 照片與檔案**

iThome 報導，Apple 將從版本 27.3 開始檢查公開分享的 iCloud 照片與檔案。

**參考來源:** [Apple將檢查iCloud公開分享的照片與檔案，27.3版起實施 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ndDRHZDM4UzdNdVlVWnBTZ3lrcVBnWjNhaDF4U3hLd3hoRWdqMk9wLUxBQ2ZfTUhBLUdTMVZVUl9rM3c0YzQweXQwWlpIQQ?oc=5>) 

---

📌 **內部資訊系統遭入侵**

iThome 報導，內部資訊系統遭入侵。

**參考來源:** [內部資訊系統入侵 - iThome](<https://news.google.com/rss/articles/CBMipgFBVV95cUxOaXFINkVDelZlaWJkcmYwc3ZoMThYMTdNZXlRY3ZaNEs0VXVWYW5iSDV4bmRHXzR1dy1JenRQYmFwUXNiWG40c3JfXzZ4THBGRmUzT0tmSlk3OEJLUW16T2Q4WlpTLVA3MmRjbU9ja25HQUlad1hWV196bEpuMDhIdXloQVFfRk1rXzFYVUQxNUFKRzNFQ1FWWHF3ODc5TGxneFp6RkJB?oc=5>) 

---

📌 **客戶與員工資料外洩 - iThome**

iThome 報導一起客戶與員工資料外洩事件。

**參考來源:** [客戶與員工資料外洩 - iThome](<https://news.google.com/rss/articles/CBMisgFBVV95cUxONE10cWZwUlRzQUFZcG95SF9VcFhVUWlKOXNxYVpNQTM4SVpUbXcwbm15cldvTlVyaHdUblVEYURoLXgxRDBiVHlYeDRQUFpCbEVQWEdUeXNoYjB0YkFvRkpMZ0RQYlhPYVltT3JtY0k3dEJYWG51MDR5WXZ4ODhZbGYtSi1rRlZTX0hJYTRvUFhjcjJVZ2ZnNGNHRkx3Tmc2NXRIS3M5bGJ5ZC1zRDhfaGhB?oc=5>) 

---

📌 **JVN：Siemens 產品更新 (2026 年 11 月)**

JVN 報導 Siemens 產品於 2026 年 11 月更新。

**參考來源:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **從日本重大資料外洩事件看企業威脅情報的重要性 - iThome**

iThome 探討日本重大資料外洩事件對企業威脅情報重要性的意涵。

**參考來源:** [從日本大型資料外洩事件看企業威脅情報的重要性 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5rekRyaFB6UlQtWTFVVWxQQlJwVUxGRzZVX3VERERDT0IwTl85OW9meDhNMVg5MjNxMU5ubi1pR3oyTWxpaHpCYzFQaw?oc=5>) 

---

📌 **半導體封裝與測試公司 JCET 遭不明 IP 入侵，客戶與員工聯絡資訊外洩**

iThome 報導，台灣半導體封裝與測試公司 JCET 遭受不明 IP 位址入侵，導致客戶與員工聯絡資訊外洩。

**參考來源:** [半導體封測廠精材遭不明IP入侵，客戶與員工聯絡資訊外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE45RWE5eXVibE13ZjFXVnBTTVhSaXJnZzl4YWktMG9hZnVnbkJ1dS1tRENUaDkzTXRZZEpheTlLcUtwaE4zQUdlTFRhSWtTdw?oc=5>) 

---

📌 **應用程式憑證竊取**

iThome 報導應用程式憑證竊取事件。

**參考來源:** [應用程式憑證竊取 - iThome](<https://news.google.com/rss/articles/CBMipgFBVV95cUxOVzJ6VWZ5WXFwNjBWcElGbXB6N3JzUnFIZG9KTzMxS3FrdGE0SFVEdFFCaGUwMDNBSGNFdW45a2ZkVml5R196TllBTW1iSnhGSlpBbld2LUZkY2JsTS1HZG8tWkxldjVwbkxNYmRWUU4zdmxkQjJrdUdMR1lmMXVNZGQ2YkprbWM2UnJUazZLRTM0anB1UnhDNUJPNW91Z1dZb3Y2ekF3?oc=5>) 

---

📌 **Microsoft 修補 Windows Paint 遠端程式碼執行漏洞**

Xakep 報導，Microsoft 已修補 Windows Paint 中的遠端程式碼執行漏洞。

**參考來源:** [Microsoft патчит RCE-уязвимость в Windows Paint](<https://xakep.ru/2026/11/09/paint-rce>) 

---

📌 **DeepSeek 安全測試逼近受限模型，企業面臨新防護挑戰**

Brave News 報告，Vals AI 在兩個模擬企業網絡中測試 AI 代理，在一個環境中 DeepSeek 開放權重模型逼近受限 OpenAI 模型的表現，而在另一個環境中則落後。該結果最初由 WIRED 於 11 月 6 日報導，仍僅限於實驗室條件，並不代表已針對台灣企業發生確認攻擊。Vals AI 記錄顯示，DeepSeek 在 Nova 中平均完成 16.3 項任務，OpenAI 為 15.7 項；在 Lighthouse 中，DeepSeek 完成 21 項任務，OpenAI 為 27 項。企業應盤點面向外部服務、帳戶權限與備份，並將任何活動測試僅限於授權系統。

**參考來源:** [DeepSeek資安測試逼近限制版模型 企業防護面臨新課題 - 蕃新聞](<https://news.google.com/rss/articles/CBMiUkFVX3lxTE5HbHExdnZtUU1VM2Jkd0JXdmphU0tkbk5jcXBGV3RtOGg3V1pnUmY4VlFRT2dqZWlaSUJDY1lpS3MzTjJqc296ZVpQaldpSm1iYnc?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261109-1-1794249708676 -->
