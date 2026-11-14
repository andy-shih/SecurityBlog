---
title: "CISO 每日摘要：FBI 認為北韓駭客透過深度偽造視訊通話竊取超過 4 億美元加密貨幣 (20261114)"
description: "北韓威脅行動者透過 FaceStealer 活動竊取了超過 4 億美元的加密貨幣，該活動結合深度偽造視訊通話、被攻破的可信帳戶以及 ClickFix 類型的惡意軟體傳送，在 58 個國家針對加密貨幣高管和開源軟體維護者。同時，研究人員披露了 AMD SEV-SNP 機密計算中的關鍵硬體漏洞 (Mior 和 Skyfall)，允許惡意主機破壞 VM 隔離並偽造認證報告，而 PostgreSQL 修補了一個跨越 22 年的已驗證 RCE 漏洞，需要立即升級伺服器並重新編譯擴充模組。"
pubDate: 2026-11-14
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## FBI 認為北韓駭客透過深度偽造視訊通話竊取超過 4 億美元加密貨幣

FBI 將過去 18 個月超過 4 億美元的加密貨幣竊取歸因於被稱為 BlueNoroff 的北韓行動者，這些行動者發起一項名為 FaceStealer 的社交工程攻擊活動。該方案利用深度偽造視訊通話和可信聯絡人的預錄網路攝影機影片，誘導受害者進入假冒的 Zoom 或 Microsoft Teams 會議，然後呈現一個捏造的技術錯誤，將他們導向 ClickFix 類型的誘餌，從而安裝惡意軟體並竊取錢包憑證。支持該活動的基礎設施已被沒收，司法部最近宣布扣押了相關的 TraderTraitor 組織在幣安駭客攻擊後竊取的超過 12 億美元加密貨幣。

攻擊鏈會自我傳播：在攻破受害者後，行動者會劫持他們的 Telegram、LinkedIn、Slack 或 Discord 帳戶，挖取聯絡人清單，並利用被盜身份邀請新目標參加視訊會議。Arctic Wolf 的研究顯示，該活動已擴展到 58 個國家的 677 個目標，其中超過 80% 是加密貨幣、區塊鏈金融或相關投資領域的創辦人或 C 級高管。來自 ChatGPT、Google、SpaceXAI Grok 和 Wondershare 的生成式 AI 工具現在能製作合成化身、藝術品和逼真的參與者影片，而偵察則會抓取 YouTube 採訪和會議演講，以複製特定個人的肖像和聲音。

BlueNoroff 還針對開源軟體維護者，以實現供應鏈攻擊，如之前攻破 Axios npm 套件維護者以推送攜帶跨平台遠端存取木馬的詐騙版本所顯示。FBI 已沒收超過 900 段用於偽裝的受害者網路攝影機錄音。另一個相關但獨立的 ClickFake Interview 活動，利用招募主題誘餌和惡意編碼評估來部署 BeaverTail 和 InvisibleFerret 惡意軟體，來自日本、美國、澳洲和德國的聯合警告估計，超過 100 個國家至少有 30,000 部受害裝置。

### 📌對 CISO 的影響

- **深度偽造社交工程要求超越視訊的身份驗證 —** FaceStealer 使用 AI 生成的影片和被攻破的可信帳戶，意味著視訊通話不再可作為身份證明；應對高價值交易強制執行非頻道驗證，要求錢包和儲存庫存取使用具硬體支援的 MFA，並為所有持有簽署金鑰或財務權限的員工部署防網路釣魚驗證器。
- **機密計算依賴項需要驗證供應商修補程式 —** Mior 和 Skyfall 顯示，SEV-SNP 隔離可能被受攻破的主機突破；在部署機密工作負載前，應要求雲端供應商證明當前韌體和微碼層級，監控 BIOS/UEFI 完整性，並為無法容忍主機端妥協的工作負載維護備用計畫。
- **PostgreSQL RCE 要求協調升級和擴充模組重新編譯 —** CVE-2026-6460 允許具有物件建立權限的已驗證 RCE；應安排立即升級到修補的次要版本，鎖定步調地盤點並重新編譯所有 C 擴充模組，驗證提供者 (AWS、Azure、Google、Supabase、Databricks、Ubicloud) 的託管服務修補狀態，並在重新編譯後採取新的基礎備份，以確保復原完整性。

**參考來源:** [FBI Says North Korean Hackers Stole Over $400 Million in Crypto Using Deepfake Video Calls](<https://thehackernews.com/2026/11/fbi-says-north-korean-hackers-stole.html>)

---

## 本週活躍威脅

📌 **新的 Mior 和 Skyfall 攻擊讓惡意雲端主機從 AMD SEV-SNP 虛擬機竊取機密**

研究人員披露了兩項攻擊，Mior (CVE-2026-0462) 和 Skyfall (CVE-2026-40671)，這允許惡意虛擬機監控程式讀取，並在 Mior 的情況下修改 AMD SEV-SNP 機密虛擬機內部的記憶體並偽造認證報告；Mior 需要 BIOS/UEFI 控制權和一個 PCIe 裝置，以在 VM 啟動期間重新導向平台安全處理器的寫入，而 Skyfall 利用暫時排程器側通道，從失敗的 VM 啟動中洩漏暫存器數據和磁碟加密金鑰，兩者都在 EPYC Zen 3、4 和 5 處理器的測試環境中進行了演示。

**參考來源:** [New Mior and Skyfall Attacks Let Rogue Cloud Hosts Steal Secrets From AMD SEV-SNP VMs](<https://thehackernews.com/2026/11/new-mior-and-skyfall-attacks-let-rogue.html>) 

---

📌 **PostgreSQL 修補 52 個漏洞，包括跨越 22 年的可導致已驗證 RCE 的漏洞**

PostgreSQL 發布了修復 52 個漏洞的更新，重點包括 CVE-2026-6460 (CVSS 8.8)，這是一個追溯至 2004 年的類型混淆漏洞，允許具有物件建立權限的已驗證使用者，以執行資料庫的作業系統使用者身份達成遠端程式碼執行；修補需要升級到 18.7、17.12、16.16、15.20 或 14.25 版本，並重新編譯所有 C 語言擴充模組，未修補的伺服器無法採用變通方案，且 PostgreSQL 14 已達到生命週期終止。

**參考來源:** [PostgreSQL Patches 52 Flaws, Including 22-Year-Old Bug Enabling Authenticated RCE](<https://thehackernews.com/2026/11/postgresql-patches-52-flaws-including.html>) 

---

📌 **攻擊者利用可導致伺服器層級命令注入的 UnrealIRCd 漏洞**

CISA 將 CVE-2026-114713（嚴重程度為高的 UnrealIRCd 命令注入漏洞，CVSS 分數 8.6）列入其已知被利用漏洞目錄，此後有主動遭利用的報告。該漏洞允許擁有兩台或以上伺服器互連之網路的使用者，插入由伺服器執行或由 IRCOp 權限執行的伺服器對伺服器命令，原因在於 UnrealIRCd 早於 6.2.7.1 版本未正確跳脫 IRCv3 標籤訊息標籤。項目領導人 Bram Matthys 表示，利用行動於 2026 年 11 月 7 日開始，即 6.2.7.1 熱修復版發布的第二天，並將其描述為 15 年來最關鍵的 UnrealIRCd 問題。依據 BOD 26-04，FCEB 機關必須於 2026 年 11 月 16 日前進行修補。惡意活動的具體細節與最終目標尚不清楚。

**參考來源:** [Attackers Exploit UnrealIRCd Flaw That Enables Server-Level Command Injection](<https://thehackernews.com/2026/11/attackers-exploit-unrealircd-flaw-that.html>) 

---

📌 **N-able 偵測到 33 個零日漏洞後停用 N-central 平台**

根據 Xakep 報導，N-able 在偵測到 33 個零日漏洞後，停用其 N-central 平台。

**參考來源:** [Компания N-able отключила платформу N-central из-за обнаружения 33 уязвимостей нулевого](<https://xakep.ru/2026/11/13/n-able-0days>) 

<!-- ciso-revision:ciso-20261114-1-1794673469879 -->
