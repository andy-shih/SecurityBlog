---
title: "CISO 每日摘要：Binance 遭受影響 63 億美元資產安全違規，近 30 億美元凍結 (20261030)"
description: "部分摘要／翻譯未完成；保留已完成內容與原始來源。"
pubDate: 2026-10-30
tags: ["cybersecurity", "threat-intelligence", "ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 今日資安新聞速覽

部分摘要／翻譯未完成；保留已完成內容與原始來源。

### 📌 Binance 遭受影響 63 億美元資產安全違規，近 30 億美元凍結

加密貨幣交易所 Binance 在 2026 年 10 月 30 日披露一次安全事件，影響約 63 億美元資產，其中近 30 億美元已被穩定幣發行商和區塊鏈安全委員會鏈上凍結。初步調查指向一名受損 DevOps 工程師筆電給攻擊者進入服務容器的權限，從而實現未使用私鑰釋放的未經授權提款交易。Tether、Circle、Ripple 和 World Liberty Financial 凍結了約 26.7 億美元的穩定幣，而 Arbitrum Security Council 凍結了約 3000 萬以太坊 (ETH) 和 ARB 代幣。

區塊鏈情報公司 Chainalysis、TRM Labs 和 Elliptic 據高信心歸因於朝鮮的 TraderTraitor 團體，引用與 2025 年 2 月 Bybit 動態和 2026 年 4 月 KelpDAO 搶劫案的相似性。攻擊者提前準備了 50 預簽授權，並透過單一批次交易執行，移動 167,464 ETH 和 63 枚代幣，包括 16.15 億美元的 USDT。來自 Binance 敘利亞入口的資金與先前 Bitget 動態透過相同的以太坊地址混合，且此次攻擊使用了 Tornado Cash 資金、預先佈署和批次簽署交易，具有朝鮮國家營運特徵。

Binance 語稱將從其 SAFU 基金和公司儲備中承擔所有損失，並在進行安全升級後的提款服務 48 小時內恢復提款。交易所承認除了受損的筆電之外還發現了其他入口點，並繼續與執法部門和區塊鏈分析公司合作，以追蹤和回收攻擊者控制的剩餘 24 至 33 億美元，涵蓋約 43 個錢包地址。Elliptic 指出與典型朝鮮資金清洗速度和方法存在偏差，雖然技術重疊性強勁，仍建議在歸因上保持謹慎。

**原始來源:** [Binance Suffers Security Breach Affecting $6.3 Billion in Assets, Nearly $3 Billion Frozen](<https://thehackernews.com/2026/10/binance-suffers-security-breach.html>)

### 📌對 CISO 的影響

- **DevOps 工作站入口點導致多億美元盜竊 —** Binance 安全事件起因於單一被入侵的 DevOps 工程師筆電，其獲取了對服務容器和提款簽署系統的存取權。CISO 應強制執行硬體驗證、對 DevOps 環境實施嚴格網路分區，並對特權工作站進行持續行為監控。對關鍵簽署作業實施即時存取 (JIT)，並採用多方核准工作流程。
- **預簽交易批次暴露運營安全漏洞 —** 攻擊者提前準備了 50 預簽授權，利用熱錢包遞增式交易計數器的 Nonce 預測弱點。管理加密貨幣或高價值交易系統的 CISO 應實施 Nonce 隨機化、對大批次簽署實施受限速率並具備人工介入驗證，並對簽署模式進行即時異常偵測。檢查簽署基礎設備是否存在受時效約束的認證使用問題。
- **跨案例資金混讀有助於歸因和追蹤 —** 區塊鏈分析將 Binance 動態與先前的 Bitget 動態通過共同的目的地地址和 Tornado Cash 資金模式聯繫在一起。CISO 應整合區塊鏈監控和威脅情報來源，追蹤跨案例非法資金流向。與區塊鏈分析供應商和執法部門協調，以便在與知名威脅 actor 基礎設施地址重疊時進行快速凍結請求。

---

### 📌 CISA Adds Actively Exploited GitLab RCE and Cisco Firewall DoS Flaws to KEV

**原始來源:** [CISA Adds Actively Exploited GitLab RCE and Cisco Firewall DoS Flaws to KEV](<https://thehackernews.com/2026/10/cisa-adds-actively-exploited-gitlab-rce.html>)

---

### 📌 ThreatsDay: 關鍵防火牆漏洞、銀行木馬出租、武器化 PDF、代幣竊取 + 其他 26 則故事

2026 年 10 月 29 日的 ThreatsDay 公報涵蓋 29 項安全發展，包括：Wordfence 報告儘管針對 500 萬多個網站持續嘗試利用 PHP2Shell (CVE-2026-109618/109619)，但無確認的 WordPress 遭入侵案例；Hudson Rock 的 FortiBleed 2.0 揭露來自 1,703 個 FortiGate 來源的 40,573 組外洩密鑰；域名影子攻擊活動將賭博內容置於學校和政府域名下；美國銀行警告客戶勿與 AI 代理共用憑證；已修補的 Microsoft Authenticator 缺陷 (CVE-2026-80097) 允許在 Android 上進行零權限代幣竊取；Cequence 追蹤 32 個假冒 AI 機器人從金融、零售、電信、能源和軟體領域刮取憑證；2026 年 7 至 8 月與中國有關連的斐濟組織遭入侵事件；Huntress 將相機管理軟體 (WpcMon.exe) DLL 側載與企業入侵關聯；菲律賓政府 68 GB 資料遭竊並留下傳輸日誌；Cohere 指控阿里巴巴 Qwen 模型嘗試將資料外洩至中國；NIST 發布後量子密碼遷移指南；SOCRadar 曝光 AI 輔助的 n0n 勒索軟體工作區，涉及 14 國 23 名受害者；瑞典禁止政府存取 ChatGPT 和 Claude；JFrog 和 SafeDep 發現 42 個被劫持的 GitHub 倉庫部署 npm 供應鏈酬載；針對印度銀行的 MR ROBOT Android 銀行惡意軟體即服務；Huntress 報告 MDM 平台濫用 (Hexnode、Rippling) 用於持久遠端存取；來自日本 IP 積極利用 CVE-2026-42589 (Gotenberg RCE)；Discord 從 2026 年 12 月中旬起將可發現伺服器訊息編入網頁搜尋；The Gentlemen RaaS 聲稱 800 多名受害者並具備 EDR 終結工具；Unsloth 模型載入器 RCE (CVE-2026-93348)；美國 EAC 網路計算機的未認證根權限 RCE；具備會話劫持瀏覽器的 DarkCore RAT；Cisco Talos 詳述 AI 啟用的 NIK C2 框架；透過 FedEx 發票誘餌投放 Sirius 後門的武器化 PDF；Flare 分析 AI 對勒索軟體經濟的影響；ScarlettGroup 成為資料勒索行為者；以及 StealC 演變為 Stadia RAT，同時 macOS 竊取程式 (ICMacOS、Aokigahara) 擴展以鎖定 AI 應用程式憑證。

**原始來源:** [ThreatsDay: Critical Firewall Flaws, Banking Trojans Rented, Weaponized PDF, Token Theft + 26 More Stories](<https://thehackernews.com/2026/10/threatsday-critical-firewall-flaws.html>)

---

### 📌 駭客積極利用高度嚴重的 Drupal Commerce Core 授權繞過漏洞

Drupal 警告威脅行為者正積極利用 Commerce Core 中一個高度嚴重的授權繞過漏洞，該漏洞缺少對某些路由和實體欄位的防護，可能在財務上影響供應商。受影響版本為 0.0.0 至 2.41 以及 3.0.0 至 3.3.13；使用者應根據分支升級至 3.3.13 或 8.x-2.41。未提供攻擊規模或活動細節。

**原始來源:** [Hackers Actively Exploit Highly Critical Drupal Commerce Core Authorization Bypass Flaw](<https://thehackernews.com/2026/10/hackers-actively-exploit-highly.html>)

---

### 📌 Trezor 警告其在 CryptoBilis 銷售的一款錢包疑似含有硬體植入物

一名印尼客戶報告，其在 2026 年 8 月透過 Tokopedia 從 CryptoBilis 購買的 Trezor Safe 5 錢包內疑似含有硬體植入物。這塊額外電路板據稱會讀取復原詞組，並在錢包插入時透過行動網路傳輸。Trezor 尚未檢查該裝置，但呼籲所有自 2026 年 3 月以來在 CryptoBilis 購買的買家將資金轉移至具備新復原詞組的新錢包，並保留受影響裝置以供實驗室分析。

**原始來源:** [Trezor Warns of Suspected Hardware Implant in One of Its Wallets Sold by CryptoBilis](<https://thehackernews.com/2026/10/trezor-warns-of-suspected-hardware.html>)

---

### 📌 CVSS 分數 9.8 的 Linux Kernel TCP 漏洞影響 Ubuntu、Red Hat 與其他發行版

CVE-2026-98432 是 Linux 核心 IPv4 TCP 連線建立中的使用後釋放競爭條件，由核心 CVE 團隊評為 9.8 分。截至 10 月 29 日，Ubuntu 與 RHEL 尚無修補核心，而 Debian、Oracle Linux、SUSE 與 Amazon Linux 已為部分核心提供修補套件。目前未有野外攻擊報告，Anthropic 表示其 AI 模型編寫了需要 MPTCP 監聽器的根權限漏洞利用程式，儘管該漏洞並非 MPTCP 專有。

**原始來源:** [Linux Kernel TCP Flaw With 9.8 CVSS Score Affects Ubuntu, Red Hat and Other Distributions](<https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html>)

---

### 📌 BYOD網路攻擊分流救護車 取消大學健康中心課堂

Fortra報告稱，與BYOD相關的網路攻擊擾亂了新墨西哥大學健康中心的營運，分流了救護車並取消了課堂。

**原始來源:** [BYOD cyberattack diverts ambulances and cancels classes at University of New Mexico health center](<https://www.fortra.com/blog/byod-cyberattack-diverts-ambulances-and-cancels-classes-university-new-mexico-health-center>)

---

### 📌 樂天報告兩家旅遊網站遭竄改，暴露354萬用戶個資；台灣站未受影響

iThome報導，樂天兩家旅遊網站被駭，洩露屬於354萬名用戶的個人資料，而台灣站未受影響。

**原始來源:** [日本樂天2個旅遊網站遭駭外洩用戶個資354萬，臺灣網站不受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ZVmN0UnE3VXNNNWJQZXBHcjlwQWhxRWt2QzZubEtfb0ZPbjhubU1GX2s5bmVpZjlVZGJzNG1ydUNIUFpzT2tsdEtFVW9uZw?oc=5>)

---

### 📌 賈污交易所承錄63億美元創下記錄性損失

Xakep報導，加密貨幣交易所賈污經歷了63億美元的記錄性損失。

**原始來源:** [У криптобиржи Binance похитили рекордные 6,3 млрд долларов США](<https://xakep.ru/2026/10/30/binance-hacked>)

---

### 📌 日本航空第三方預訂系統遭未經授權存取，影響約 92,000 筆乘客紀錄

iThome 報導，日本航空第三方預訂系統遭未經授權存取，影響約 92,000 筆乘客紀錄。

**原始來源:** [日本航空第三方訂位系統遭未授權存取，約9.2萬名旅客資料受影響 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9vbHNkcmlhTml2dUJLTDBlZEVPRVd3YVNFeTBNa0FjME1CODc4ZWx0YnBUTXRIU1lrcmh2MkpUTjZpc3dxQWVhOFBXM3BDZw?oc=5>)

---

### 📌 Palo Alto Networks 警告零售業面臨年底購物旺季前多項網路威脅

iThome 報導 Palo Alto Networks 警告零售業面臨年底購物旺季前多項網路威脅。

**原始來源:** [年末購物旺季將至，Palo Alto Networks示警零售業面臨多重網路威脅 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE0yeGZKNW5XbnFXX3YzZTdNbW1VTkxLb0ZPZUlSX3R1T0s4UHl2Q2JPNjB6cDh3ZnlJTXE1VHR2bWZxVDNvVFp6el9PekZhZw?oc=5>)

---

### 📌 全家行動應用程式部分會員資料遭非法竊取，外包廠商 91APP 資料庫遭自動化攻擊

iThome 報導，外包廠商 91APP 資料庫遭自動化攻擊後，全家行動應用程式部分會員資料遭非法竊取。

**原始來源:** [全家行動購部分會員資料遭非法擷取，委外廠商91APP資料庫遭自動化攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5XSGhVa2VnQ3YxS0pzQ3NrMUV3UTVwdzNzMHQzSVNCOU1JLWpZdktvUURwZktmRTF0WngycWs1Z3dCRlB1T3BidGdLQzJoZw?oc=5>)

---

### 📌 Cisco 為防火牆中被主動利用的拒絕服務漏洞發布補丁

iThome 報導 Cisco 已為其防火牆中一個正被主動利用的拒絕服務漏洞發布補丁。

**原始來源:** [思科修補防火牆已遭積極利用的阻斷服務漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1lV0JDTm5Eb1l0RGpjWjdDRWpqcGwzQXBoa0RhM2FHNWt1QVZERWNfUFBhY3R0R0dBbW1aczRxWXprVjdxMUwySV9JaUxiZw?oc=5>)

---

### 📌 駭客洩漏 41,000 多名國土安全部工作人員的人事數據，包括 ICE 和邊境特工

Bitdefender 報導，攻擊者洩漏了超過 41,000 名美國國土安全部員工的個人數據，包括 ICE 和邊境特工。

**原始來源:** [Hackers leak personnel data of 41,000+ Homeland Security staff, including ICE and border agents](<https://www.bitdefender.com/en-us/blog/hotforsecurity/hackers-leak-41-000-dhs-staff-data>)

---

### 📌 DEVCORE 研究人員披露 Pwn2Own Edge 攻擊鏈，串接五個漏洞繞過瀏覽器保護

iThome 報導，DEVCORE 研究人員披露在 Pwn2Own 上展示的 Edge 攻擊鏈，該鏈串接五個漏洞以突破瀏覽器保護機制。

**原始來源:** [DEVCORE研究員公布在Pwn2Own競賽揭露的Edge攻擊鏈，串連5個弱點突破瀏覽器防護機制 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1zZ1BrU0NPbnRRMkxQWXVVMlhIeUVMM2dhZnN5SW51YlI2dnhNbVR5Zm5IVWR0b1ljQWkxWVlxbk1IZGF6cTVCcFdTWTZadw?oc=5>)

---

### 📌 偽裝的 ChatGPT 和 Claude 應用程式惡用簽署的執行檔部署加密貨幣挖礦程式

威脅行為者透過假裝是 ChatGPT 和 Claude 桌面應用程式的偽裝 GitHub 專案分發 YobaLoader 加密貨幣挖礦程式，使用 DLL 側載與合法簽署的執行檔繞過安全防護。該行營運具備反沙箱檢查、鍵盤佈局排除、Telegram 處援影像、DNS-over-HTTPS 指令以及域生成演算法，將 XMRig 加密貨幣挖礦程式注入 svchost.exe。

**原始來源:** [Fake ChatGPT and Claude Apps Abuse Signed Executables to Deploy Crypto Miners](<https://thehackernews.com/2026/10/fake-chatgpt-and-claude-apps-abuse.html>)

---

### 📌 GMO 提供一百萬美元獎金求助抓捕駭客

GMO 提供一百萬美元獎金求助抓捕駭客。

**原始來源:** [Компания GMO предлагает миллион долларов США за помощь в поимке хакеров](<https://xakep.ru/2026/10/29/desktop-cloud-hack>)

---

### 📌 微軟釋出緊急更新移除對有問題的 eMudhra 憑證的預設信任

微軟已釋出緊急更新，移除預設信任有問題的 eMudhra 憑證。

**原始來源:** [微軟發布Windows緊急更新，移除eMudhra問題憑證的預設信任 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE83NmdqalpiOUJQWEZiWDJhYk52NldfWUZOSHRxa0lRbjFYM2VlZjBNXzFOQTVkZXozcm13QjdqSk05aktuMTB5QjBieEpCUQ?oc=5>)

---

### 📌 Hive 與 Nefilim 勒索軟體組織成員於美國被判處 70 個月徒刑

iThome 報導，Hive 與 Nefilim 勒索軟體組織成員在美國被判處 70 個月監禁。

**原始來源:** [Hive與Nefilim勒索軟體集團成員遭美國判刑，將入獄70個月 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBVSm5JZk9lZ2d1OExPZTBtUGVkZndvQnYxZ1Q0VHVIZjlXRlFoOXRWR2Y5azRGOWdrcVlNbDJpRmpjNlNfeWVTSVFtSVA0UQ?oc=5>)

---

### 📌 Security Weekly Report Oct 27–30：PHP2Shell 與 Brotli2Shell 影響擴大，91APP 與 Amadeus 被駭效應持續浮現

iThome 報導，PHP2Shell 與 Brotli2Shell 影響於 10 月 27 日至 30 日期間擴大，91APP 與 Amadeus 被駭事件的持續影響不斷浮現。

**原始來源:** [【資安週報】1027～1030，PHP2Shell、Brotli2Shell衝擊擴大，91APP與Amadeus遭駭影響持續浮現 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA5S3JXbkVEZ29FTmJ5UGxsaHd2TXFwem9qOU53RnI3QkNMVTd2amk5MWg2M1k0OEotV3V5V2I3OE5JY0hBWVlUM1cwLUZhQQ?oc=5>)

---

### 📌 惡意 Markdown 指導檔試圖誘使 Codex 安裝惡意套件，AI 程式設計代理人面臨攻擊風險

iThome 報導，惡意 Markdown 指導檔試圖誘使 Codex AI 程式設計代理人安裝惡意套件，使 AI 程式設計開發代理人面臨攻擊風險。

**原始來源:** [惡意Markdown指引檔企圖誘使Codex安裝惡意套件，AI程式開發代理面臨攻擊風險 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02M1djSFN4bE1UQWhac1lBMER0WDRrRGFYczlVMm5YYWxjNFdkSlFKZmZxZzJyX2tURXFUU2gxLS1US2Z2aVpxSEpDVG5wQQ?oc=5>)

---

### 📌 Linux TCP 漏洞可能允許遠端取得 root 權限；部分發行版本尚未修補

iThome 报道，Linux TCP 漏洞可能被远端利用以取得 root 权限，部分发行版本尚未修补。

**原始來源:** [Linux TCP漏洞可被用來遠端取得root權限，部分發行版尚未修補 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9mVkJOaVNKTmNEVVVoaXBjSU9EQThIcnVZNWlXdnF2bEhZYUpJcjc5QmJ4OEg4YldUN05RbVRpbTdrT1J4MUZaeG1UM1F1dw?oc=5>)

---

### 📌 PHP2Shell 與 Linux 核心漏洞 Fragnesia 串聯攻擊，使駭客取得 25 部 Palo Alto Networks 防火牆的 root 權限

iThome 报道，黑客将 PHP2Shell 与 Linux 内核 Fragnesia 漏洞串联，取得 25 台 Palo Alto Networks 防火墙的 root 权限。

**原始來源:** [PHP2Shell與Linux核心漏洞Fragnesia被串連利用，中國駭客藉此取得25臺Palo Alto Networks防火牆Root權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5EMmhyazc2ZnhkUWNNLVZQM20zMjZyV2d1ME1CQ0RPN3llZ05VYjdCc0c4RVVDRUtoaGRHM2IwYVVnQjRJN3R1LTQtVlpCQQ?oc=5>)

---

### 📌 TCP 漏洞

iThome 报道有关 TCP 漏洞。

**原始來源:** [TCP漏洞 - iThome](<https://news.google.com/rss/articles/CBMiYkFVX3lxTE8xNmx1RXF4b3N3OFhMbWNidGNDY2NTTF83aGhFdlpqY00xYUVfTEQ2eXVYdmZ0cURoVGY3MzJmS2JiaHdFeHpReWpsSngwbkE5R1prZWxlTWY3Zl9VYjdGLTVn?oc=5>)

---

### 📌 Synology NAS 遭受 C3RB3R 勒索軟體攻擊；廠商呼籲用戶立即更新 DSM

iThome 報導，Synology NAS 裝置遭到 C3RB3R 勒索軟體攻擊，Synology 呼籲用戶儘快更新 DSM。

**原始來源:** [群暉NAS遭C3RB3R勒索軟體攻擊，原廠呼籲用戶盡速更新DSM系統 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5PLVRCZU1oZmRCblllSkRrSUdENVhzaWJLNFVjSUNHT3lzelRteFZ0Y05qMkVOeG1ucGtkUzZ3eTU1NWFJWHBuejRyQ0F5QQ?oc=5>)

---

### 📌 英國計劃立法加強海底電纜安全，要求營運商管理安全風險並回報事件

iThome 報導，英國提出立法以加強海底電纜安全，要求營運商管理安全風險並回報安全事件。

**原始來源:** [英國擬修法強化海底電纜安全，要求業者管理安全風險並通報事故 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RMnZjZDdwcnVaLU9CX29HbWlGODZRZ0NCbDZoU1FVazBrdDh1T1F0VFItYlZnMko0MTg2MWxBaHBPX2JZUWhkTnZDLVh5Zw?oc=5>)

---

### 📌 Google 修補 Chrome 156，揭露 21 個安全性漏洞

iThome 報導，Google 已修補 Chrome 156 並揭露 21 個安全性漏洞。

**原始來源:** [Google修補Chrome 156，公布21個資安漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBxY082bG1jeUxsaEhoWldZam8zNGp2WjJ5RWxpcldNRFN5eUVEOXRsVS1Vb1dtbW1MUlRzZ3Iyb0xKQllwaVBiUk93QmI3QQ?oc=5>)

---

### 📌 Claude 模型跨主流瀏覽器與作業系統建構攻擊程式

Dark Reading 報導指出，Claude 生成的攻擊程式碼可針對主要瀏覽器與作業系統，凸顯生成式 AI 可能降低建構瀏覽器與作業系統特定攻擊的門檻。

**原始來源:** [Claude Model Builds Exploits Across Major Browsers &amp;amp; OSes](<https://www.darkreading.com/application-security/claude-model-exploits-major-browsers-oses>)

---

### 📌 AI 加速漏洞發現，CSA 提出 VulnOps 模型以改進企業漏洞管理 - iThome

iThome 報導，CSA 正提出 VulnOps 模型，協助企業在 AI 加速漏洞發現時管理漏洞。

**原始來源:** [AI加快漏洞發現，CSA提出VulnOps模式改善企業漏洞管理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE04YWJkelRzX2kwNlFpbEc4MUZWeGxySkxYWWlyVXItSHMyVjRkYU1mckdydUplVHVBSHAtU0x3TUhPVFlxYUN3NDJISnRuUQ?oc=5>)

---

### 📌 Hive、Nefilim、勒索軟體、司法判刑 - iThome

iThome 報導與 Hive 和 Nefilim 勒索軟體活動相關的司法判刑。

**原始來源:** [Hive、Nefilim、勒索軟體、司法判刑 - iThome](<https://news.google.com/rss/articles/CBMi2AFBVV95cUxPUUJnTXhQRzJaS3E4YW1RdVo4SVF6VE43ckttRmVrUlR0Tkc4WHlqbDk4RnNVcUJWRTZSdnAxY0lwaDd2VHJzdHdsQThrT1J0OElGYkNUVlJqZnBLTG5tQ2F0RWROMW9oWVF5bWZ5SDNNWHl5R2dCNlZSbm02bWhpZVFkdmJmWkNzRzJmcWMyQVZnVVFKSFVzbGZVNGt2MXREMmpMVTRDVWJ5Z0NWSFFwRDJxOUtwanpPdDNpVTdscHJ4Y2taaHFSQ3V0RGEwcDVKa3dmOHpHVWo?oc=5>)

---

### 📌 隨俄羅斯網路戰演變，白俄羅斯挺身而出

Dark Reading 報導指出，隨著衝突演變，白俄羅斯正在擴大其在俄羅斯網路行動中的角色。

**原始來源:** [As Russia's Cyberwar Evolves, Belarus Steps Forward](<https://www.darkreading.com/physical-security/russia-cyber-war-belarus-steps-forward>)

---

### 📌 Synology、C3RB3R、NAS 勒索軟體、DSM 漏洞 - iThome

iThome 報導涉及 Synology NAS 勒索軟體活動與 C3RB3R，以及 DSM 漏洞。

**原始來源:** [Synology、C3RB3R、NAS勒索軟體、DSM漏洞 - iThome](<https://news.google.com/rss/articles/CBMizAFBVV95cUxNcm02Sy1ESnM0VjhLUEtfY1VQWENMQ0QtM0R4VEFlNUUwc1dMSDRzNVFUd2JBSkpWa3pvUGpELUZWMnItNkoyVWRBMzZEMlBQSXFvLWs0NTVuRHNOMWhkMVpqWFl4SXlBcVEtcjF0eGNXZjVzSHNYdlg4Q1YxY2RHNUhLaVpOYXNxbU5GeTVGbGJnVHBPNXpQRUotT2VZREQwRm1RSmF3cmc3eXFNQmt3c0FLd1hxRVQzNk13aVdGcGo5elR3cEhULVlYOTE?oc=5>)

---

### 📌 JVN：多款三菱電機產品中的多個漏洞 (2026-006)

JVN 根據 2026-006 諮詢，報導影響多款三菱電機產品的多個漏洞。

**原始來源:** [JVN: 三菱電機製の複数製品における複数の脆弱性（2026-006）](<https://jvn.jp/vu/JVNVU93251594>)

---

### 📌 VulnOps - iThome

iThome 報導 VulnOps，可用 RSS 摘要僅提供標題細節。

**原始來源:** [VulnOps - iThome](<https://news.google.com/rss/articles/CBMiT0FVX3lxTE9uOEg0c1FNU251WnA4VWZFUnlPbFNOZ2hYdTV3X2Rjejdkd01ZTXZ0UlhlUXFLMUpwbjRjYTRGbktwRHg0TEprTGRBRTJZR3c?oc=5>)

---

### 📌 發現 Intelbras 監視攝影機存在拒絕服務漏洞

Xakep 報導 Intelbras 監視攝影機包含拒絕服務漏洞，可用來源僅提供標題細節。

**原始來源:** [В камерах видеонаблюдения Intelbras обнаружили DoS-уязвимость](<https://xakep.ru/2026/10/30/intelbras>)

---

### 📌 Palo Alto Networks, Unit 42, retail security, AI hacker attacks - iThome

iThome 涵蓋 Palo Alto Networks、Unit 42、零售安全與 AI 驅動駭客攻擊，可用 RSS 摘要中的詳細資訊僅限於標題。

**原始來源:** [Palo Alto Networks、Unit 42、零售業資安、AI駭客攻擊 - iThome](<https://news.google.com/rss/articles/CBMi-gFBVV95cUxNbE9UVTFMVkxleDNubUJqcDRoaVZsbnJGVHEzZURldHpkbkxXNDIzQzBwR2JQUW54b09rdU90OUJXWTB6czJoWm81M1BrUno4OFpuYU0xVHdhNXQ4Ri1HSzctZE00YzNiVDRSdkRTWjU5OG1XUVlCTUZDQ2hoNE40T2lLYW5DdmltX09yYXBSd216SWFxemxqYy1waWZ6TGFjcWtFa3JDLUtlVEpxQVI0OThSQ05qalJCbUNHT2ZmMDBjWlRNbW9jVW1ma0x6RkJKRXc5UlJJZll3b3cyRTRPSWlqdkFvVS1tOXBUZ0VzTXlkaDlNc0wtQW1R?oc=5>)

---

### 📌 SentinelOne 將 Anthropic Claude 加入其網路防禦服務

SecurityBrief Australia 報導，SentinelOne 已將 Anthropic Claude 整合至其網路防禦服務。

**原始來源:** [SentinelOne adds Anthropic Claude to cyber defence service - SecurityBrief Australia](<https://news.google.com/rss/articles/CBMimAFBVV95cUxOV1hWTnhudWFRNXdGNE5CdHhVenMwbDZsenV3R3ZFM3JlRl85NnRvVVItYkdMWFlRa3RnYlNLdk1SRDNoeC1XVVR3RHFDbXdLdlhFYTZOb2dJV3BRZ2phQjNvZUQ5NmgtYkFCaXMxYnI4bVJoNlNXdlcyTXpZZUpvOFRhOHV0ZnFqMUNvMTZxYlp3dU1ITWZJUw?oc=5>)

<!-- ciso-revision:ciso-20261030-1-available-1793437100139 -->
