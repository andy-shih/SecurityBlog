---
title: "CISO 每日摘要：Keystone 因密碼金鑰被竊銷毀近 19,000 個硬體錢包 (20261029)"
description: "三起 2026 年 10 月的網路安全事件說明了不同威脅向量：硬體錢包機隊因密碼金鑰被竊後遭銷毀，PHP2Shell 攻擊鏈利用防火牆管理介面取得政府相關伺服器的根權限，以及利用 Cisco SD-WAN 漏洞竊取 SD-WAN 控制流量中的加密金鑰。這三起事件均涉及曝露的管理介面或特權服務，被用於初始存取或資料外洩。"
pubDate: 2026-10-29
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## Keystone 因密碼金鑰被竊銷毀近 19,000 個硬體錢包

Keystone 硬體錢包正在被遠端銷毀，因一個密碼金鑰被竊，影響約 19,000 台裝置。該事件源自裝置簽署金鑰遭入侵，使未授權動作能對整個機隊執行。製造商已啟動受影響裝置的銷毀流程。

近 19,000 個硬體錢包被銷毀，對依賴 Keystone 品牌進行冷儲存的用戶構成重大損失。雖然標題未詳細說明金鑰竊盜的具體途徑，但影響規模凸顯了硬體錢包生態系統中集中式金鑰管理的風險。建議用戶驗證裝置完整性，並遵循製造商關於金鑰遭入侵的任何指引。

該事件凸顯安全金鑰儲存的重要性，以及簽署金鑰暴露時可能帶來的後果。受影響用戶應將其錢包視為已遭入侵，並遵循建議的恢復程序，這可能包括更換裝置，並在新的經驗證平台上重新保護任何相關資金。

### 📌對 CISO 的影響

- **管理介面暴露 —** 限制對管理介面的管理存取，並在可行時強制執行 IP 允許清單，以減少遠端程式碼執行與權限提升攻擊鏈的攻擊面。
- **供應鏈與機隊完整性 —** 監控硬體錢包與韌體更新的製造商安全公告，並在懷疑金鑰遭入侵後驗證裝置完整性。
- **加密金鑰保護 —** 對 SD-WAN 與類似控制平面流量進行未授權金鑰提取稽核，並及時應用廠商對已知關鍵漏洞的修補程式。

**參考來源:** [Keystone уничтожит почти 19 000 аппаратных кошельков из-за кражи криптографического ключа](<https://xakep.ru/2026/10/28/keystone-hacked>)

---

## 本週活躍威脅

📌 **PHP2Shell 攻擊取得 25 台伺服器根權限，突破美國政府相關網路**

PHP2Shell 攻擊鏈結合 Linux 核心權限提升漏洞，已取得包含三個美國政府相關環境伺服器在內的 25 台伺服器根權限。攻擊者結合 PHP2Shell 未經驗證的遠端程式碼執行漏洞（CVE-2026-109618、CVE-2026-109619）與核心漏洞 CVE-2026-46300（Fragnesia），在曝露的防火牆管理伺服器上取得根權限。該行動針對約 19,000 台面向網際網路的防火牆，縮小至 240 個可行目標，最終入侵 25 系統，其中兩個與一個美國政府組織相關。

**參考來源:** [PHP2Shell Attack Roots 25 Servers, Breaches U.S. Government-Affiliated Network](<https://thehackernews.com/2026/10/php2shell-attack-roots-25-servers.html>) 

---

📌 **駭客利用 Cisco SD-WAN 漏洞植入旨在竊取加密金鑰的惡意軟體**

駭客利用一個 Cisco Catalyst SD-WAN 關鍵漏洞（CVE-2026-20127，CVSS 10.0）部署 KeyDrift 惡意軟體，該惡意軟體旨在竊取並外洩用於保護 SD-WAN 流量的加密金鑰。該惡意軟體歸因於名為 UAT-11473 的組織，其基礎設施與 Volt Typhoon 有重疊，針對控制器和驗證器以提取 AES-256 金鑰資料。受影響系統包括內部部署與雲端託管部署，已有多個發布軌跡提供修正版本。

**參考來源:** [Hackers Exploited Cisco SD-WAN Flaw to Plant Malware Built to Steal Encryption Keys](<https://thehackernews.com/2026/10/hackers-exploited-cisco-sd-wan-flaw-to.html>) 

---

📌 **攻擊者利用 PHP2Shell 漏洞攻擊網路暴露的 Palo Alto Networks 管理介面**

Palo Alto Networks 警告威脅行為者正在針對公開可存取的管理介面，積極利用最近修補的 PHP2Shell 漏洞。CVE-2026-109618 和 CVE-2026-109619 允許未經驗證的遠端程式碼執行，影響受影響的 PHP 版本，並於 2026 年 10 月 21 日在上游修補。疑似中國關聯行為者將 Fragnesia Linux 核心權限提升漏洞 CVE-2026-46300 武器化，利用這些漏洞入侵了美國、日本、台灣和南韓的 25 台伺服器，包括美國政府相關環境中的 3 套系統。CISA 將 CVE-2026-46300 加入其 KEV 目錄，聯邦機構修補截止日期為 2026 年 10 月 31 日。PAN-OS 10.2 至 12.2 版本受影響，當管理介面對外暴露時無需特殊配置。Palo Alto Networks 建議將管理介面存取限制為受信任的內部 IP 位址，並透過威脅 ID 543004 為 PAN-OS 12.2.4 及更新版本提供 Frontier 虛擬補丁防護。

**參考來源:** [Attackers Exploit PHP2Shell Flaws in Internet-Exposed Palo Alto Networks Management Interfaces](<https://thehackernews.com/2026/10/attackers-exploit-php2shell-flaws-in.html>) 

---

📌 **Volt Typhoon 在四起零時差攻擊行動中使用隱蔽的 Silent Train 網路**

Lumen Technologies Black Lotus Labs 將一個被中斷的隱蔽存取網路 Silent Train 歸因於中國關聯間諜組織 Volt Typhoon，該組織自 2023 年底以來利用該網路進行四起零時差攻擊行動。該網路使用被入侵的 SOHO、IoT 和企業裝置輪換鏈，配合反取證技術和行動後清理以維持策略性存取。確認的零時差漏洞包括 Versa Director CVE-2024-39717、N-able N-central CVE-2025-8875 和 CVE-2025-8876、Cisco Catalyst SD-WAN Controller CVE-2026-20127 以及 Arista VeloCloud Orchestrator CVE-2026-16812，另有一疑似 Quest KACE 零時差漏洞亦關聯此行動。數百名受害者橫跨電信、政府、國防、衛星服務、大學、IT 公司，以及水務、能源、運輸、海事、鐵路、航空和緊急服務等關鍵基礎設施，作戰重點集中在夏威夷、加州和德州。

**參考來源:** [Volt Typhoon Used Covert Silent Train Network in Four Zero-Day Exploitation Campaigns](<https://thehackernews.com/2026/10/volt-typhoon-used-covert-silent-train.html>) 

---

📌 **PHP 漏洞 CVE-2026-109618 和 CVE-2026-109619 警示**

JPCERT/CC 發布了關於兩個 PHP 遠端程式碼執行漏洞 CVE-2026-109618 和 CVE-2026-109619 的警示，這兩個漏洞已在 PHP 8.5.12、8.4.27、8.3.36 和 8.2.35 中修補。警示指出 PHP 8.1 及更早版本不再支援，建議升級。公開概念驗證代碼已存在且觀測到攻擊嘗試，但成功執行取決於環境特定條件。另一份資訊性警示涵蓋 CVE-2026-115560，建議在發布更新前將 session.upload\_progress.enabled=0 作為緩解措施。JPCERT/CC 還報告了證據顯示特定防火牆產品版本被成功入侵，與 PHP2Shell 攻擊結合 Linux 核心權限提升有關，包括側向移動嘗試。

**參考來源:** [注意喚起: PHPにおける複数の脆弱性（CVE-2026-109618、CVE-2026-109619）に関する注意喚起  \(更新\)](<https://www.jpcert.or.jp/at/2026/at260033.html>) 

---

📌 **Cisco 修正 ASA 與 FTD VPN 主動利用漏洞，該漏洞可導致防火牆當機**

Cisco 已修補 CVE-2026-76418，這是 Secure Firewall ASA 與 FTD 軟體中一個高危險漏洞，自 2026 年 10 月以來持續遭到主動利用，攻擊者可透過向設定次要驗證的遠端存取 SSL VPN 服務發送精心設計的請求，導致設備當機。成功利用可讓未經驗證的遠端攻擊者造成拒絕服務，無需 VPN 登入。修正版本包括 ASA 9.16.4.104、9.18.4.96、9.20.4.50、9.22.3.200、9.23.1.48、9.24.1.27 和 9.24.10.1，以及 FTD 7.0.11、7.2.13、7.4.9、7.6.7、7.7.14、10.0.3 和 10.1.1。

**參考來源:** [Cisco Patches Actively Exploited ASA and FTD VPN Flaw That Can Crash Firewalls](<https://thehackernews.com/2026/10/cisco-patches-actively-exploited-asa.html>) 

---

📌 **Telegram Android 漏洞可讓攻擊者在使用者接聽語音通話時執行程式碼**

NebuSec 披露 Telegram for Android 漏洞，影響 8.6.2 到 12.10.3 版，當受害者接聽語音通話時可能觸發程式碼執行，該問題已在 2026 年 9 月底釋出的 12.10.4 版中修復。問題在於處理 MediaState 呼叫訊息時存取無效記憶體。尚未指派 CVE，也沒有確認現實世界遭利用、iOS 或桌面版影響，以及攻擊者程式碼存取特定資料的證據。

**參考來源:** [Telegram Android Flaw Lets Attackers Run Code When Users Answer Voice Calls](<https://thehackernews.com/2026/10/telegram-android-flaw-lets-attackers.html>) 

---

📌 **公共 Gitee 儲存庫中暴露 26,400 個有效雲端與 AI 憑證**

Ben Zimmermann 掃描 725 萬個公共 Gitee 儲存庫，發現 26,400 個仍有效的雲端與 AI 憑證，包括 9,473 對 Alibaba Cloud AccessKey、3,805 個 YouTube API 金鑰、3,170 個 DeepSeek 金鑰、1,489 個 BigModel 金鑰和 1,348 個 OpenAI 金鑰。其中近一半來源於 2025 年。研究人員建議，將任何曾提交至公共 Gitee 的金鑰視為已暴露並立即輪換，因為從程式碼中刪除不會撤銷憑證。

**參考來源:** [26,400 Valid Cloud and AI Credentials Found Exposed in Public Gitee Repositories](<https://thehackernews.com/2026/10/26400-valid-cloud-and-ai-credentials.html>) 

---

📌 **駭客聲稱竊取超過 40,000 份美國國土安全部員工記錄**

iThome 報導，駭客聲稱已竊取超過 40,000 名美國國土安全部員工的資料。

**參考來源:** [駭客宣稱竊走美國土安全部員工資料超過4萬筆 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1SbVFzRHdHQV9mUUI4dkd4M0hScVZkamJScHJxNXBRTHNaNy0zSk5lWGdjVzNCc3Mza3BMSngweGRzeGVESHc5NlJWWEVrZw?oc=5>) 

---

📌 **最近修補的關鍵 Oracle E-Business Suite 漏洞已遭利用**

iThome 報導，Oracle E-Business Suite 中一個最近修補的關鍵漏洞已遭利用。

**參考來源:** [甫修補的Oracle E-Business Suite重大漏洞遭到利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5xbWliYjI1Z1VJVGxYZ2EtUTVqUWhHRWdQbkdETldkeG9iMXdSUE9sams3a1RDMEM1ckFGVmFKT3lHSGw0RWtLdFI2bFpIdw?oc=5>) 

---

📌 **GitHub 推出 npm 防火牆，在安裝前攔截惡意套件**

GitHub 已針對 GitHub Enterprise Cloud 客戶（包括資料居住實例）推出公開預覽版 npm 套件防火牆。防火牆位於端點或內部登錄與上游套件庫之間，並在安裝時檢查中繼資料請求與套件下載。管理員可設定政策控制，例如透過 GitHub Advisory Database 封鎖已知惡意軟體、根據漏洞嚴重程度封鎖（預設僅封鎖 Critical）、封鎖證明降級、封鎖新引入的 preinstall 或 postinstall 腳本，以及為新發佈的套件版本強制執行冷卻期。遭封鎖的套件可透過經企業管理員與安全經理核准的例外請求取消封鎖。目前僅支援 npm 套件。

**參考來源:** [GitHub Launches npm Firewall to Block Malicious Packages Before Installation](<https://thehackernews.com/2026/10/github-launches-npm-firewall-to-block.html>) 

---

📌 **Hive 勒索軟體附屬者在 FBI 滲透該集團系統多年後被判入獄**

多年前 FBI 滲透該勒索軟體集團系統後，一名 Hive 勒索軟體附屬者已被判入獄。

**參考來源:** [Hive ransomware affiliate jailed, years after FBI infiltrated the gang’s systems](<https://www.bitdefender.com/en-us/blog/hotforsecurity/hive-ransomware-jailed-fbi-infiltrated>) 

---

📌 **研究員揭露僅靠邏輯漏洞即攻破微軟 Edge，以 175,000 美元獲 Pwn2Own 勝出**

DEVCORE 研究員 Orange Tsai 僅藉邏輯漏洞構建微軟 Edge 沙盒逃逸，於 2026 年 5 月在 Pwn2Own Berlin 贏得 175,000 美元。這條不足 100 行的攻擊鏈建立通用跨站腳本原始碼，再透過 Immersive Reader 與惡意檔案寫入觸發 Telnet 程式碼執行，從而逃逸 Edge 沙盒。微軟於競賽次日在 Edge 穩定版 148.0.3967.70 中修補該等漏洞，編號為 CVE-2026-45492、CVE-2026-45494 及 CVE-2026-45495。Tsai 指該攻擊鏈並無證據曾用於真實使用者，且公開 CVE 記錄將其利用情況列為無。更新 Edge 可封閉該攻擊鏈。

**參考來源:** [Researcher Reveals How Logic Bugs Alone Cracked Microsoft Edge in $175,000 Pwn2Own Win](<https://thehackernews.com/2026/10/researcher-reveals-how-logic-bugs-alone.html>) 

---

📌 **超過 850 個 GitHub 帳戶在 Gheist 攻擊中遭入侵，惡意工作流程企圖竊取密鑰**

iThome 報導，超過 850 個 GitHub 帳戶在 Gheist 活動中遭入侵，攻擊者植入惡意工作流程試圖竊取密鑰。

**參考來源:** [逾850個GitHub帳號遭入侵，駭客發動Gheist攻擊植入惡意工作流程企圖竊密 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE92cjJnUDlhelFrR3F0UGJJRlAwNWxWeUVjYzZLdDFNUGs2NzVwSEh5djEtWjRmOHpTcHJEWWI1MVVNU09MREE5Qkx0SGVoUQ?oc=5>) 

---

📌 **Sony 日本 ISP 保險業務系統遭駭，258 萬會員及 38.5 萬投保人個資外洩 - iThome**

iThome 報導，Sony 日本 ISP 保險業務系統遭到入侵，外洩 258 萬會員與 38.5 萬投保人的個人資料。

**參考來源:** [Sony日本ISP、保險業務系統被駭，外洩258萬會員、38.5萬保戶個資 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RdGp5N3dYVTA2OVVYRnY0c256d1hiOWJycUJjWUYtYldsa1VpT2NNdHNPVjU4U2g3N1Jwd1h4ZW5jOFJRUlNsNVlUd3NVQQ?oc=5>) 

---

📌 **美國制裁北韓遠端 IT 工作詐騙網絡，並鎖定俄國洗錢中介 - iThome**

iThome 報導，美國已制裁北韓遠端 IT 工作詐騙網絡，並鎖定俄國洗錢中介。

**參考來源:** [美國制裁北韓遠端IT工作詐騙網絡，鎖定俄羅斯洗錢中間人 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBZTTBhRDlzRmFRNkc1VmVZSll4T3QxbVN1Ylg5b3JoZ2FnWXQ5cGpDYUxQcDBsOTRtVi1yS1BodVA1em4yQkRHcnh2SmJCUQ?oc=5>) 

---

📌 **CVE 2026-109619 - iThome**

iThome 報導 CVE 2026-109619。

**參考來源:** [CVE 2026-109619 - iThome](<https://news.google.com/rss/articles/CBMiXEFVX3lxTE13cmVUZGo5dEtxbm5Ka1JvdXlYY05kMWR0RW12ZlVfZG9ORlNRM0pfOHFvanNSbGNSYzRFMTM4eXQxOWstYmg5Z1JtOUtFZWJ3UW90Q2JTYTBxSTJD?oc=5>) 

---

📌 **駭客利用 AI 滲透測試工具 ARTEX 盜取南韓金融業數據**

CrowdStrike 於 2026 年 10 月 7 日披露，攻擊者可能濫用 ARTEX（一款 AI 輔助滲透測試工具）從攻擊者的公開目錄中取得 ARTEX 設定檔與操作記錄，並發現其使用多個大型語言模型與代理伺服器，竊取南韓金融機構數據。目前未將此次事件歸因於任何特定 APT 組織。南韓金融監督委員會於 2026 年 10 月 16 日報告，16 家金融公司發生數據洩露，影響約 100,000 筆客戶記錄，但這些事件是否全部與 ARTEX 相關尚不清楚。據報導，洩露的數據包含客戶姓名、聯絡資訊、電子郵件地址與南韓居民登記證號碼，並未發現帳戶密碼或信用卡號碼。TWCERT/CC 建議組織盤點外部服務、測試查詢權限邊界、將包含九個代理與 ARTEX 主機 IP 位址的指標與防火牆、VPN、代理及資料庫記錄進行比對，若確認遭受入侵則隔離受影響主機，保全鑑證證據，並加強多因素驗證。

**參考來源:** [駭客利用AI滲透測試工具ARTEX竊取韓國金融業資料](<https://www.twcert.org.tw/tw/cp-104-11352-8c3dc-1.html>) 

---

📌 **隱秘 AI 轉發服務禁用 OpenAI Codex 與 Claude Code 沙盒**

Dark Reading 報導，一家神秘的 AI 轉發服務向中國大陸及其他該等產品未正式銷售的地區提供 OpenAI Codex 與 Claude Code，且關閉關鍵安全功能。

**參考來源:** [Shadowy AI Relay Disables OpenAI Codex, Claude Code Sandboxes - Dark Reading](<https://news.google.com/rss/articles/CBMioAFBVV95cUxPU0pDX2pVQjkzZ3FqYjVRYVN5d0E5QllrX09mTXVISmtQd3pMWU9jYUZLRUVvbmRDZkxXNkZDdnFUc0F6Tnlhd203eEdTNEgta3VLeFhsOG5Ubk80eXFEWUtETzdwd2c5UzhLRmN1eDBnUE1VcXdsYjBQUHhKOEJVLU1ITUtnZTFsendwYWhsQ3dDVFBvVTVEVERqNmdaM2pR?oc=5>) 

---

📌 **Security Daily 10 月 29 日：北韓駭客以 PHP2Shell 漏洞掃描 216 部 PHP 主機，台灣包含在目標範圍內**

iThome 報導，北韓駭客正在掃描 216 部 PHP 主機尋找 PHP2Shell 漏洞，且台灣包含在目標範圍內。

**參考來源:** [【資安日報】10月29日，北韓駭客鎖定216臺PHP主機掃描PHP2Shell漏洞，臺灣列入目標範圍 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5YRlk0U3FCanJYMXdkbTFlXzgwZ3FuRll3QmlxeDRGNmFXaGVOdk9fMzNreDQ2dU8zMmVWSjZyaHh5T292czNsdk82R0UzUQ?oc=5>) 

---

📌 **中國駭客利用 VMware ESX 零日漏洞以減少審計追蹤可見性**

CISA 在 CrowdStrike 報告稱與中國有關的威脅行動者 Warp Panda 在 2026 年初利用 VMware ESX 零日漏洞針對美國法律領域的攻擊降低審計追蹤可見性後，將 CVE-2026-41709 加入其 KEV 目錄。這個記錄不足的漏洞允許擁有管理員權限的行動者執行不被記錄的操作。Broadcom 在 2026 年 7 月透過 VMware Cloud Foundation、vSphere Foundation、ESX、ESXi 和 Telco Cloud Platform 版本修補了該漏洞。CrowdStrike 說 Warp Panda（亦稱為 Armory Castle、Clay Typhoon 和 VerdantBamboo）利用面向網際網路的邊緣設備進行初始存取，轉向 vCenter 部署 BRICKSTORM 和 SharpStorm 惡意軟體，收集雲端工作階段權杖以存取 Microsoft 365，並註冊惡意 MFA 裝置以實現持久性。FCEB 機構建議於 2026 年 11 月 11 日前應用修補。

**參考來源:** [China-Linked Hackers Exploited VMware ESX Zero-Day to Reduce Audit Trail Visibility](<https://thehackernews.com/2026/10/china-linked-hackers-exploited-vmware.html>) 

---

📌 **法國超市遭駭引發關切；研究人員發現近 13,000 個冷藏管理服務在 99 個國家暴露於公共網際網路**

iThome 報告，在法國超市遭駭之後，研究人員發現近 13,000 個冷藏管理服務暴露於跨越 99 個國家的公共網際網路。

**參考來源:** [法國超市遭駭引發關注，研究人員發現全球99國近1.3萬筆冷藏管理服務暴露於公開網路 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9EVjBjX2xZUmFfLXg1T3c1Z2Z1QkVzUG8yYXkyMXN1eHhRU2dEaXdVVmxhdFkxbWJpV3kyT2E5bmpPTks4eXkxeFFPb0gtZw?oc=5>) 

---

📌 **Linux 核心和 VMware ESX 漏洞遭主動利用**

iThome 報告稱，Linux 核心和 VMware ESX 漏洞正遭主動利用。

**參考來源:** [Linux核心、VMware ESX漏洞遭積極利用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9SY0N2Xy1VR08xN1ZMUWFtYVhKQUZ6dTRKOFlpQXE2Y0E1bFY3Vk9sUWRDalpMRUJickJsQ3JoT1hfMlRyOVZubTlpSlRzUQ?oc=5>) 

---

📌 **DreamHost 強制重設用戶密碼**

DreamHost 一直在強制用戶重設密碼，導致帳戶鎖定並需要恢復憑證。

**參考來源:** [DreamHost принудительно сбрасывает пароли пользователей](<https://xakep.ru/2026/10/29/dreamhost-incedent>) 

---

📌 **Google 的 Gemini 4 Carbon 在尋找、利用和修補漏洞的基準測試中領先**

Google 發布了 Gemini 4 Carbon，這是一款具有最先進網絡安全和長期規劃能力的前沿 AI 模型，在 SEC-bench Pro (88.2%)、ExploitGym (54.8%) 和 CWE-bench (71.0%) 中取得領先成績。

**參考來源:** [Google's Gemini 4 Carbon Leads Benchmarks for Finding, Exploiting, and Patching Vulnerabilities](<https://thehackernews.com/2026/10/googles-gemini-4-carbon-leads.html>) 

---

📌 **沙箱被翻轉為「危險完全存取」：未經授權的 AI 轉發給組織帶來風險**

安全研究人員報告稱，沙箱環境已被翻轉為「危險完全存取」，允許未經授權的 AI 轉發，給組織帶來風險。

**參考來源:** [Sandbox Flipped to ‘Danger-Full-Access’: Unauthorized AI Relays Create Risk for Organizations - SECURITY.COM](<https://news.google.com/rss/articles/CBMid0FVX3lxTE5QN0N4elJKWTAzSEk2M0Y5UFdSSzVBUk5iU21qaWdEaEtoVnNJOTZ3VDB6RVF6QnZhMTJ4ZVc2bHBZb0NLWTgtbFpQR0dPbWlZYUltTTJhMm0wcTBpTDVRbkdZa0NNLUZUUlFfSWlhbHpYUkdxR3Vr?oc=5>) 

---

📌 **美國 CISA 發布 2030 年策略，轉向主動防禦並優先保護關鍵基礎設施**

iThome 報告，美國 CISA 已發布其 2030 年策略，轉向主動防禦並優先保護關鍵基礎設施。

**參考來源:** [美國CISA公布2030戰略，轉向積極防禦並優先保護關鍵基礎設施 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE83Ri1Jbmd6UkpzZG9HeWdMMjk5aGRCcHV5SHBfM1hTRGNqNkx3dEt5RTh1LUVFYnk0Z3hOdWppVDZrT0p4U0xmQmNwdEdXdw?oc=5>) 

---

📌 **Adobe 發布 10 月中期更新，修補 8 個 Campaign Classic 關鍵漏洞**

iThome 報告，Adobe 發布 10 月中期更新，修補 Campaign Classic 中的八個關鍵漏洞。

**參考來源:** [Adobe發布10月下半更新，修補8個Campaign Classic重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBBYlZ3Z0lEaGpzU1hvSlNOekxNOTcxYkVZQ3YxN1VLRFBCU0VTZzF6TVFjWHAtV1FpY0FvWmVqcnhJXzNXdjJOcnJTanFUUQ?oc=5>) 

---

📌 **攻擊者偽裝成 AI 機器人，不斷掃描憑證**

Dark Reading 報告，一名攻擊者持續掃描憑證，同時偽裝成 AI 機器人。

**參考來源:** [Attacker Relentlessly Scans for Credentials by Impersonating AI Bots](<https://www.darkreading.com/cyber-risk/attacker-impersonates-ai-bots-scans-credentials>) 

---

📌 **Smashing Security podcast #490: How Jared Kushner’s iPhone was allegedly hacked twice**

Smashing Security podcast 第 490 集討論 Jared Kushner 的 iPhone 据稱在兩個不同場合遭到駭入。

**參考來源:** [Smashing Security podcast #490: How Jared Kushner’s iPhone was allegedly hacked twice](<https://grahamcluley.com/smashing-security-podcast-490>) 

---

📌 **Harmonic Security raises $50 million to expand AI agent security governance**

據 iThome 報導，Harmonic Security 募集 5000 萬美元，以擴展 AI 代理人安全治理。

**參考來源:** [Harmonic Security募資5,000萬美元，擴大AI代理安全治理 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5qZUNIVkdIbzVFMkpYQ1UzUTdieTBCTFdOMzdlM0JmY0tTWU93eHlnczJoMHBtRFR2MF9iUFByVk5PdTBQa0ZvSnFvS0t6QQ?oc=5>) 

---

📌 **CISA offers two free tools to detect misconfigurations in Microsoft 365 and Google Workspace**

據 iThome 報導，CISA 推出兩款免費工具，協助組織偵測 Microsoft 365 和 Google Workspace 的安全性錯誤設定。

**參考來源:** [CISA提供兩款免費工具，協助檢測M365與Google Workspace的安全設定錯誤 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nOHVRb21DUjdCblU5NFY4MjdfRGI2elJfQXlXc1pxMlozWE15Q3hOQUppbXlJWlBJZnpaeG5ub1cwSjVEem01d1UxcDdXdw?oc=5>) 

---

📌 **macOS 27.2 未修补的 eMudhra 证书风险使 Git 和 curl 可能暴露于中间人攻击**

iThome 报道称，macOS 27.2 仍未修补 eMudhra 证书风险，使 Git 和 curl 可能暴露于中间人攻击。

**參考來源:** [macOS 27.2未修補eMudhra憑證風險，Git與curl仍可能遭中間人攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NRXJDSDlNVDVsLWNKYk9LNzRHQUNNTzNfVDl2ZTd6SlZjV19zMGtuYVhCMFc3bHpUTGV3UW0ya3pIQWFwc1pQXzNzWjFxUQ?oc=5>) 

---

📌 **汽车零部件制造商橙黄被勒索软件攻击**

iThome 報導稱，汽車零部件製造商橙黃遭遇勒索軟體攻擊。

**參考來源:** [汽車零配件製造商橙的遭勒索軟體攻擊 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE55a0dCcWJwaWtOSlBCWFZHQ0lvMGlXZmVoRThNNUw0aTVlVEVpWUVRMmZZamJMSmRaZGhDZU0tUHd6dl9teFAwZXNyUDlVQQ?oc=5>) 

---

📌 **Copilot Fusion**

iThome 報告涵蓋 Copilot Fusion。

**參考來源:** [Copilot Fusion - iThome](<https://news.google.com/rss/articles/CBMiWEFVX3lxTE9lb3hwY0hfREJ6YzhwWEl0RHVEbE8zcGZKcHBacDJ2UUU5S3lFdzFoVWFzMmJ1ZXRxUjdRbGIySkdjbzFKS213SkVjYU5OUnd1MXgtUVR1V1E?oc=5>) 

---

📌 **Connected Apps Platform**

iThome 報導 Connected Apps Platform，可用的標題中未有其他細節。

**參考來源:** [Connected Apps Platform - iThome](<https://news.google.com/rss/articles/CBMiZEFVX3lxTE1OLVBORWhZRlFOYWc0bGMwYUJjRkUzWGNvVGE2b01NRHRLcnFKOXNydk9vcjdzcmdOQk9CRXZ6dW0zNG9WR3ZxcU5HMjlEREtEOXBLOFFpS3ZFMkRsTFpZQm5JblA?oc=5>) 

---

📌 **GitHub 推出 Copilot Fusion，實現單一工作項目跨模型協作**

iThome 報導 GitHub 已推出 Copilot Fusion，讓模型能在單一工作項目中跨模型協作。

**參考來源:** [GitHub發表能在單一任務內跨模型協同的Copilot Fusion - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBrTFpXNjRDQllLOHhqdU1DYVR3TktJMF8xRG50VzZJd1RtdHlTekFwRmVjWTZYcXNoTWhvZ1l1NTVqODBLTzlYVmhTZTlodw?oc=5>) 

---

📌 **Catalyst SD-WAN**

iThome 報導 Catalyst SD-WAN，可用的標題中未有其他細節。

**參考來源:** [Catalyst SD-WAN - iThome](<https://news.google.com/rss/articles/CBMiWkFVX3lxTE5vS1JEX0M0T2ZxaThZeDg3VWNtWThZNjhwQ0NneURDaHREZnZvTkJ3aVFSenZuMEFJTnhySlQzUUc3d05ESkZFbEp4dEYydXZqSE0xV29rM1A1dw?oc=5>) 

---

📌 **Granary v2**

iThome 报导 Granary v2。

**參考來源:** [Granary v2 - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTE5zcTVsTXJIbHB4YzE5OEsxV2VtSHl1N0llMjRkdTJWdGR0aUNFVE1ScnpJaW56WDQ2dzMzSjM5Q19PSTdGR05zaTRlUkFUSlFTd0R3?oc=5>) 

---

📌 **Google 的 Gemini 4 Carbon 看起來像是一顆璞玉待琢**

The Register 報導了 Google 的 Gemini 4 Carbon。

**參考來源:** [Google's Gemini 4 Carbon looks like a diamond in the rough - The Register](<https://news.google.com/rss/articles/CBMitAFBVV95cUxQclZFbTF3TUdDTjNPZlF0M3laRktFdjV2Z1ktZVFHLUQ0UG5wNGk2RnJfWUZtX08xd29tX2FYMXZFREpUZjJ3Vl93RlJuejZ4WHkxdmRfWWM3MnRXUHlXR2JNUXR5VXJCYVp1cm41dllMQlg4akc3Q2NwNy1MWlJLOUN2M19zVTBCTjZGVTUycURQZmUxMW8xbEg5Sl9sb19WNGU3dlpEUnNIaDByZk55NFYzak4?oc=5>) 

---

📌 **Nvidia 發行 Nemotron 3.5 語音模型，整合轉錄、翻譯與說話者識別**

iThome 報導 Nvidia 發行 Nemotron 3.5 語音模型，結合轉錄、翻譯與說話者識別功能。

**參考來源:** [Nvidia釋出Nemotron 3.5語音模型，整合轉錄、翻譯與講者辨識 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE15Z3k0bTRrZE5vdC1DalZhSVdFLTFzNndmT0sxc01MdFJuSUhVdUlOb2EtYkpZOUFpbml3b1E2Y09HamJGYVFjRmsyYVdpUQ?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261029-1-1793324490667 -->
