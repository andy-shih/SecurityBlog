---
title: "CISO 每日摘要：VMware vCenter 重大漏洞 (CVSS 9.8) 允許網路攻擊者規避身份驗證 (20261120)"
description: "在 VMware vCenter、PHP 與 Drupal 核心中發現的重大漏洞，凸顯了虛擬化管理、網頁代管與企業應用程式安全的顯著風險。"
pubDate: 2026-11-20
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## VMware vCenter 重大漏洞 (CVSS 9.8) 允許網路攻擊者規避身份驗證

Broadcom 已針對 VMware vCenter 中一個追蹤編號為 CVE-2026-123890 的重大身份驗證規避漏洞發布緊急公告。該漏洞存在於 VMware Directory Service 中，允許網路攻擊者獲得系統的未經授權存取。此漏洞的 CVSS 分數為 9.8，反映其高度嚴重性。

該漏洞已被作為零日漏洞（zero-day）進行實地利用。Google 的威脅情報團隊報告指出，一個被識別為 Armory Castle 的疑似與中國有關的間諜行為者，於 9 月初利用該漏洞獲取了 vCenter 伺服器的管理員存取權限。此利用行為發生在該組織已在目標網路中建立存在之後。

所有受支援的分支版本均已提供修復版本，包括 vCenter 8.0、9.0 與 9.1，以及 VMware Cloud Foundation、vSphere Foundation 和 Telco Cloud 平台內的建置版本。雖然該漏洞不允許從虛擬機內對 ESX 主機執行程式碼，但運行 vSphere 6.5、6.7 或 7.0 等已停止支援版本的組織，應假定其受到影響，並諮詢 Broadcom 關於擴展支援補丁的事宜。

### 📌對 CISO 的影響

- **優先處理虛擬化管理補丁 —** VMware vCenter 身份驗證規避漏洞 (CVE-2026-123890) 是間諜行為者所使用的具高影響力的零日漏洞；立即修復 vCenter 實例對於防止未經授權的管理員存取至關重要。
- **應對 PHP 執行階段風險 —** 多個允許遠端程式碼執行的 PHP 漏洞，需要對所有面向網路的環境進行緊急更新，以防止伺服器遭入侵。
- **保護 Drupal 安裝環境 —** 除了修復 Drupal 核心外，管理員應實施防禦性配置以阻斷安裝腳本，從而降低未經身份驗證的網站接管風險。

**參考來源:** [Critical VMware vCenter Flaw \(CVSS 9.8\) Lets Network Attackers Bypass Authentication](<https://thehackernews.com/2026/11/critical-vmware-vcenter-flaw-cvss-98.html>)

---

## 本週活躍威脅

📌 **PHP 修復 7 個重大漏洞，包含可能導致遠端程式碼執行的錯誤**

PHP 基金會已發布安全更新，以解決所有受支援 PHP 版本中的七個重大漏洞。這些漏洞包括 CVE-2026-115560、CVE-2026-129182 以及其他數個 CVSS 分數為 9.2 的漏洞，在特定配置下可能允許攻擊者實現遠端程式碼執行、記憶體損壞、會話損壞或本地權限提升。

**參考來源:** [PHP Fixes 7 Critical Flaws, Including Bugs That Could Allow Remote Code Execution](<https://thehackernews.com/2026/11/php-fixes-7-critical-flaws-including.html>) 

---

📌 **Drupal 修復重大安裝程式漏洞，可能導致未經身份驗證的攻擊者控制網站**

Drupal 核心中一個追蹤編號為 CVE-2026-132165 的重大漏洞，允許未經身份驗證的攻擊者使用內建安裝程式嘗試重新安裝網站，可能導致網站被接管或遠端程式碼執行。Drupal 安全團隊建議管理員更新至最新的修復版本，並透過 Web 伺服器配置或移除檔案的方式，阻斷對安裝程式檔案 (/core/install.php) 的存取。

**參考來源:** [Drupal Patches Critical Installer Flaw That Could Give Unauthenticated Attackers Control of Sites](<https://thehackernews.com/2026/11/drupal-patches-critical-installer-flaw.html>) 

---

📌 **phpAfterShell 解析：駭客如何將 PHP 會話漏洞轉化為程式碼執行**

PHP 預設基於檔案的會話儲存機制中存在一個名為 phpAfterShell (CVE-2026-126714) 的關鍵漏洞，攻擊者可藉由操控會話物件來達成遠端程式碼執行。該漏洞在 CVSS 4.0 量表中的評分為 9.2，若應用程式使用了「上傳進度 (upload progress)」功能，則可能觸發此漏洞，因為該功能會在應用程式碼執行前寫入會話。雖然目前尚未收到主動利用的報告，但安全研究人員指出，若未套用最新的修補程式，在 10 月 21 日 PHP 版本更新期間進行更新的伺服器仍處於易受攻擊狀態。緩解措施包括更新至修復版本 (PHP 8.2.36+、8.3.37+、8.4.28+、8.5.13+ 或 8.6.0)，或在 php.ini 中停用 'session.upload\_progress.enabled'。

**參考來源:** [phpAfterShell Explained: How Hackers Could Turn a PHP Session Flaw Into Code Execution](<https://thehackernews.com/2026/11/phpaftershell-explained-how-hackers.html>) 

---

📌 **關於多個 PHP 漏洞 (CVE-2026-109618, CVE-2026-109619) 的警報**

JPCERT/CC 已針對多個 PHP 漏洞發布更新警報，包括可能導致遠端程式碼執行的 CVE-2026-109618 和 CVE-2026-109619。報告指出，概念驗證 (PoC) 程式碼已公開，且已觀察到嘗試利用這些漏洞的活動。此外，該警報提到 CVE-2026-115560，這是一個涉及特定配置、同樣允許執行任意程式碼的漏洞。有報告指出，攻擊者正將這些 PHP 漏洞與 Linux 核心權限提升漏洞結合，以針對防火牆產品，部分證據顯示已成功入侵並在內部網路中進行後續的橫向移動嘗試。

**參考來源:** [注意喚起: PHPにおける複数の脆弱性（CVE-2026-109618、CVE-2026-109619）に関する注意喚起  \(更新\)](<https://www.jpcert.or.jp/at/2026/at260033.html>) 

---

📌 **駭客利用 Cisco Expressway 關鍵漏洞，突破四台設備並進入內部網路**

威脅行為者已成功利用 Cisco Expressway 中的 CVE-2026-76466 (CVSS 9.8) 漏洞，入侵了一家俄羅斯組織。該漏洞源於 TLS 集群期間對持久性 Cookie 的處理不當以及客戶端憑證驗證不足，允許未經身分驗證的遠端攻擊者以 root 權限執行指令。在入侵兩台面向網際網路的設備後，攻擊者進一步取得了內部網路中另外兩個集群節點的存取權限。進入內部後，這些行為者使用自訂的 Python 腳本（可能透過 AI 輔助開發）進行網路掃描，並與 SMB、SQL Server 和 WinRM 進行互動，同時存取 GitLab 儲存庫以進行資料竊取。

**參考來源:** [Hackers Exploit Critical Cisco Expressway Flaw, Breach Four Devices and Reach Internal Network](<https://thehackernews.com/2026/11/hackers-exploit-critical-cisco.html>) 

---

📌 **未修補的 Windows 0 天 FastUnlock 漏洞讓持有鎖定電腦的人可在其上執行程式**

ThreatLocker 測試了一種名為 FastUnlock 的未修補 Windows 技術，該技術允許擁有實體存取權限的人從受限帳戶在鎖定電腦上執行程式，無需登入。該方法需要實體存取、可透過鎖定畫面恢復選項存取的 Microsoft 帳戶，以及 Windows Narrator。Microsoft 尚未發布修補程式，且沒有現實世界被利用的證據。當 TPM 在開機時自動解鎖磁碟時，BitLocker 不一定能防止此問題。研究人員建議保持無人看管的機器實體安全、為 BitLocker 添加啟動 PIN，並在設備移交他人控制之前將其關閉或休眠。

**參考來源:** [New Unpatched Windows 0-Day FastUnlock Lets Someone Holding a Locked PC Run Programs on It](<https://thehackernews.com/2026/11/new-unpatched-windows-0-day-fastunlock.html>) 

---

📌 **中國駭客利用 VMware vCenter 零日漏洞入侵並部署後門進行數據竊取 - iThome**

iThome 報導稱，中國駭客利用 VMware vCenter 零日漏洞入侵系統並部署後門進行數據竊取。

**參考來源:** [中國駭客利用VMware vCenter零時差漏洞入侵，部署後門以竊取資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA5ZDlKZDlWMGxQXzctMmlzYWhGYmlyYU11V0lWUmtpZUcyUVAtLUFVVnAxeEl2SVlMd1JPRlFva1FjMzh6QVBrbF94QXQyZw?oc=5>) 

---

📌 **Ledger 檢測到柏林的修改硬體錢包，旨在攔截種子短語**

Xakep 報導稱，Ledger 檢測到在柏林的修改硬體錢包，該錢包旨在攔截種子短語。

**參考來源:** [Ledger обнаружила в Берлине модифицированные аппаратные кошельки для перехвата сид-фраз](<https://xakep.ru/2026/11/19/ledger-wallet-tampering>) 

---

📌 **AI 聊天機器人可能規劃理論性恐怖攻擊：報導**

NewsNation 報導指出，根據新報告，AI 聊天機器人可能具有規劃理論性恐怖攻擊的能力。

**參考來源:** [AI chatbots capable of planning theoretical terror attacks: Report - NewsNation](<https://news.google.com/rss/articles/CBMimwFBVV95cUxPNHBVOWRUbF9wVUVBQVRVa0lZb0FFUHY3SGUydjdjNDVERzFEZDhUUm9FX3lCZl93dWliTFpuQ0ZzRzdhdkRqbW1QZ1lFZk9XTGdXODFWNjJwUy1xcEtqNzhKNU8wcW1YekdxSGRsd1BkNE16WG5mV3RyZGVwdDhTTmFBTmRLWklIcDI4eE93MVNtdFEtX05NbVRMRdIBoAFBVV95cUxOYktvWFJZdUxpeVM1SDhmTkppYnNwTXVBOUpLRWlsNWtsSTVsUURlYzh4RDRqZzhlQ1pEa2JGSTN2ZVY2TTBKdGhVUFNYVFZWclM0Z05nNXhiNml4aHRCaURxTC1RRVRnTHdobG1kWkVtMFI0VXVnUWU3eEhKTzdqdk5vNkZ4Q1RyaTJTY2ZVTjNVNWp2UlVTTjlORlZQTS1N?oc=5>) 

---

📌 **兩日內第二家挪威能源公司遭入侵**

Dark Reading 報導指出，兩日內第二家挪威能源公司遭到入侵。

**參考來源:** [Second Norwegian Energy Company Breached in Two Days](<https://www.darkreading.com/cyberattacks-data-breaches/second-norwegian-energy-company-breached>) 

---

📌 **Ruby 修補七個記憶體安全漏洞，五個可能導致遠端程式執行**

iThome 報導指出，Ruby 修補了七個記憶體安全漏洞，其中五個可能導致遠端程式執行。

**參考來源:** [Ruby修補7項記憶體安全漏洞，5項可能導致遠端程式碼執行 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5OeHN5NVRKaUtTVW1HWEJnc1hUa05tc0djQUhBWEtUSkFLdHZ2ZnloWkNoRjdLZDdZVjJpQVo5LXVIZm15YWVyQUFMZmtOQQ?oc=5>) 

---

📌 **大車隊子公司 Global Business Technology 遭未經授權存取，導致部分客戶與會員資料外洩**

iThome 報導，大車隊（Da Che Dui）的子公司 Global Business Technology 遭遇未經授權的存取，導致部分客戶與會員資料外洩。

**參考來源:** [大車隊子公司全球商務科技遭未經授權存取，部分客戶及會員資料外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE02cDRzalU4ckpBOGVkTFVYZjRNQndCa1FQSDY1UEo1WmpJa1dZdG5GanJZZl82YVBxOVlEZnNXTktSUFEwUlJVSk1FM1paUQ?oc=5>) 

---

📌 **ROMULUS ClickFix 攻擊投放可監控使用者並控制電腦的 RAT**

Blackpoint Cyber 報導，ROMULUS 惡意軟體投放平台正透過 ClickFix 誘餌與已簽署二進位檔案的側載（sideloading）等不同感染鏈，分發與 CNCMachineRMS 相似且先前未被記錄過的遠端存取木馬（RAT）以及 Legion Loader。該木馬可實現遠端桌面控制、螢幕串流、麥克風與攝影機擷取、檔案管理、系統偵察及執行額外酬載，並透過 DNS over HTTPS 進行通訊。此發現與更廣泛的 ClickFix 活動一致，該活動涉及遭入侵的網站、虛假驗證提示、惡意 Google 廣告、遭植入木馬的 MSI 安裝包以及基於電話的社交工程。

**參考來源:** [ROMULUS ClickFix Attacks Deliver RAT That Can Spy on Users and Control PCs](<https://thehackernews.com/2026/11/romulus-clickfix-attacks-deliver-rat.html>) 

---

📌 **Phoenix Travel 遭駭，部分乘客個人資料外洩，並偵測到虛假訂單詐騙**

iThome 報導，Phoenix Travel 遭受資安漏洞攻擊，導致部分乘客個人資料外洩，且已發現詐騙訂單。

**參考來源:** [鳳凰旅遊遭駭、部分旅客個資外洩，已發現冒名訂單詐騙行徑 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA2ZkJmUlZScmItUW5LMEw4V21zZ2dEQmNTUm4wbDFidzNqdkJ0LXpJUHR5ZXFoT0prT0FiWlhzRVR0bDV6TEdxUUZMSFEzZw?oc=5>) 

---

📌 **SonicWall 警告第六代防火牆不會獲得安全修補程式，即使是關鍵漏洞**

SonicWall 建議客戶立即退役第六代防火牆，警告這些裝置將不再接收安全修補程式，即使是關鍵漏洞也不例外。該公司指出，面向網際網路的第六代裝置面臨自動化、人工智慧輔助攻擊的高風險。受影響運行 SonicOS 6.x 的產品包括多種 TZ、NSA、SOHO、SuperMassive 和 NSv 類型。SonicWall 建議遷移至運行 SonicOS 8 的受支援第八代防火牆，以減輕網路邊緣遭利用的風險。

**參考來源:** [SonicWall Warns Gen 6 Firewalls Won't Get Security Patches, Even for Critical Flaws](<https://thehackernews.com/2026/11/sonicwall-warns-gen-6-firewalls-wont.html>) 

---

📌 **Linux KVM 漏洞 CVE-2026-99312 允許客體虛擬機存取 AMD 主機上的主機記憶體**

Linux 核心 KVM 虛擬化監控程式的一個漏洞，編號為 CVE-2026-99312，允許客體虛擬機在啟用巢狀虛擬化的 AMD 處理器系統上存取主機記憶體。研究人員顯示，可從受控客體虛擬機內讀取主機 RAM 的大部分區域，並進行有限的記憶體寫入。該漏洞僅針對 AMD 硬體，不影響基於 Intel 的主機。雖然部分雲端服務提供商已應用即時修補程式，但自行管理 AMD 硬體 KVM 主機的營運人員應更新核心或停用巢狀虛擬化。

**參考來源:** [Linux KVM Flaw CVE-2026-99312 Lets Guest VMs Access Host Memory on AMD Hosts](<https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html>) 

---

📌 **API 金鑰透過 Docker Hub 映像洩露；研究顯示洩露後短短 7.86 秒即遭濫用**

研究指出，API 金鑰正在 Docker Hub 映像中洩露，導致快速遭利用。調查結果顯示，泄露的憑證可能在洩露後短短 7.86 秒內被濫用。

**參考來源:** [API金鑰隨Docker Hub映像檔對外曝光，研究發現最快7.86秒就遭濫用 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAyOE01Rjc2WW81bWZ0SEU1bGMzZUtPNTFVZWJCbG9QV19UYkR0M2tPMzAzWkNkTzhqd2VaaXBRNXc5VWlxS1gtNG5sQTZtQQ?oc=5>) 

---

📌 **Tor 因正在進行的 DDoS 攻擊緊急更新**

Xakep 報導，Tor 因正在進行的 DDoS 攻擊而進行緊急更新。該報導僅為標題新聞，未提供受影響版本、補丁細節、攻擊者歸屬或確認的使用者影響。

**參考來源:** [Tor срочно обновили из-за продолжающейся DDoS-атаки](<https://xakep.ru/2026/11/19/tor-ddos-update>) 

---

📌 **QNAP 警告兩項重大 NAS 漏洞，預計 20 日釋出部分作業系統版本的修補程式 - iThome**

iThome 報導，QNAP 警告其 NAS 產品存在兩項重大漏洞，部分作業系統版本的修補程式預計於 20 日釋出。此僅為標題新聞，未說明漏洞內容、受影響機型、攻擊狀態或確認的入侵事件。

**參考來源:** [群暉警告NAS存在兩個重大漏洞，預計20日提供部分版本作業系統修補程式 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBzbXpYajF4clludFBWNW9tS09uREJpakVjeVBOQzJVVEIwUnJETlNNT0JvZnVaR1V3MkI0MlkzTFdKNW1MTWNKdTVRQWpSUQ?oc=5>) 

---

📌 **安全日報：11 月 20 日，VMware 修補已遭利用的 vCenter 重大漏洞 - iThome**

iThome 的安全日報報導，VMware 在 11 月 20 日修補了一個已遭利用的 vCenter 重大漏洞。此僅為標題新聞，未提供 CVE 編號、受影響版本、補丁可用性、受害者範圍或技術利用細節。

**參考來源:** [【資安日報】11月20日，VMware修補已遭利用的vCenter重大漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1nQVZNY0M0dHhjcGpVdUltMk9kaE4xd0lWb3lxTFk2Mk05Q2ZKR3hEOWZXVFNWS2tVVUQ2MUZ4WFl4eV9EM3ZhZFZMWFVnQQ?oc=5>) 

---

📌 **ChatGPT、Gemini、Claude 與 Grok 發現重大安全缺口**

報導指出，多個主要大型語言模型（LLM）平台發現重大安全漏洞，包括 ChatGPT、Gemini、Claude 與 Grok。

**參考來源:** [Major security gaps found in ChatGPT, Gemini, Claude, Grok - Daily Observer](<https://news.google.com/rss/articles/CBMiSkFVX3lxTE9uQ2g0UWhnRDBKYzRXWmZOSnpROFY1TE9YVnJpb3JqaklaNldmVll4VWpVemNZdVNhclVtSDBkQk8zcjl4ZmVEbVNR?oc=5>) 

---

📌 **Android 手機被用作詐騙電話中繼；「Puff Box」內含數百張 SIM 卡**

台灣刑事調查局揭露新型詐騙手法，犯罪分子利用 Android 行動電話作為電話中繼站。調查發現名為「Puff Box」的設備內含數百張 SIM 卡，用於促進詐騙電話轉接。

**參考來源:** [Android手機變詐騙話務中繼站、泡芙箱藏上百張SIM卡！刑事局揭露詐團電話轉接新手法 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtQWZteERnaTVZVTlzNV9hTzh2cGhqVUYzMGdQQWFwUnZtRl9TYy1MY0xMUG1UeE1SZEVxT2M3X19GR1F5NFllM1ZWQVEzZw?oc=5>) 

---

📌 **NIST 完成量子位置驗證實驗以防止遠端身份盜用**

NIST 已完成量子位置驗證實驗，此項技術最終可能防止攻擊者遠端冒用他人身份。

**參考來源:** [NIST完成量子位置驗證實驗，未來有望防範駭客從遠端冒用身分 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAwRHlJd3FyUFN6Y0dRaExkVFBpOUdSc1JsSWN3eEZFVmNkQWdVTGpFNnBVaUJfNm9UMEEwQzlwUTdqYjRtQW1jZEFkTE9nQQ?oc=5>) 

---

📌 **Google Project Zero 將漏洞披露期限縮短至 30 天**

根據俄語媒體 Xakep 的報導，Google Project Zero 正將其漏洞披露期限縮短至 30 天。

**參考來源:** [Google Project Zero сокращает срок раскрытия информации об уязвимостях до 30 дней](<https://xakep.ru/2026/11/20/30-days>) 

---

📌 **歐洲委員會遭受 AI 網路攻擊，ARTEX 開源工具成為駭客武器 - iThome**

iThome 報導稱，歐洲委員會遭受 AI 驅動的網路攻擊，且攻擊者使用了開源工具 ARTEX。

**參考來源:** [歐盟執委會遭AI網攻，ARTEX開源工具成駭客利器 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBObFQ2S2xBWTNHdkg4dklDM3gzOU44SkxyTlI2R1pSTkhYaEM0YXFad1hXRXRZbWN6Mm1HRmE1Mi1wR1JjaE5IREV2enJsUQ?oc=5>) 

---

📌 **「123456」再度被評為世界上最常見的密碼**

Xakep 報導稱，「123456」再度被認定為世界上最常見的密碼。

**參考來源:** [«123456» снова признан самым распространенным паролем в мире](<https://xakep.ru/2026/11/19/123456-all-over-again>) 

---

📌 **JVN：Siemens 產品更新 (2026 年 11 月)**

Japan Vulnerability Notes (JVN) 已針對 2026 年 11 月的 Siemens 產品發布更新報告。

**參考來源:** [JVN: Siemens製品に対するアップデート（2026年11月）](<https://jvn.jp/vu/JVNVU98354779>) 

---

📌 **NGINX 自 2015 年起即存在漏洞**

報告指出，NGINX 程式碼庫中自 2015 年以來便存在一項漏洞。

**參考來源:** [Уязвимость в NGINX присутствовала в коде с 2015 года](<https://xakep.ru/2026/11/20/nginx2root>) 

---

📌 **JVN：CISA ICS 諮詢 / ICS 醫療諮詢 (2026 年 11 月 19 日)**

JVN 已發布與 CISA 工業控制系統 (ICS) 及醫療相關諮詢有關的公告，日期為 2026 年 11 月 19 日。

**參考來源:** [JVN: CISA ICS Advisory / ICS Medical Advisory（2026年11月19日）](<https://jvn.jp/vu/JVNVU92814490>) 

---

📌 **安全運營中心人工智慧自主化之路**

《駭客新聞》報導 a16z 研究顯示，資安長正朝著安全運營中心更高 AI 代理自主化發展，目前有 36% 願意允許自動執行低風險操作，且 60% 預期在 12 個月內達到此目標。文章概述了一個分階段自主模型，將證據收集、分析、回應建議與回應執行區隔開來，並建議將 AI 安全運營中心代理視為具有分權許可、記錄與監控的特權身分。

**參考來源:** [The Path to AI Autonomy in the SOC](<https://thehackernews.com/2026/11/the-path-to-ai-autonomy-in-soc.html>) 

<!-- ciso-revision:ciso-20261120-1-1795221724825 -->
