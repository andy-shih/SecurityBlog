---
title: "CISO 每日摘要：攻擊者串聯三個 Ivanti Connect Secure 漏洞以取得 Root 執行權限 (20261031)"
description: "CISA 將遭主動利用的連鎖 Ivanti Connect Secure 漏洞列入警示，OpenAI 修復了 ChatGPT 分享連結中的嚴重工作階段跳脫問題，Cursor 則處置了散布 SSH 後門的受侵害 AI 程式碼撰寫擴充功能。"
pubDate: 2026-10-31
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 攻擊者串聯三個 Ivanti Connect Secure 漏洞以取得 Root 執行權限

美國網路安全暨基礎設施安全局在確認野外遭主動利用後，將兩個 Ivanti Connect Secure 漏洞 CVE-2026-111357 與 CVE-2026-118527 加入其已知遭利用漏洞目錄。CVE-2026-111357 是一項缺少身分驗證的漏洞，CVSS 評分為 8.8，允許本機提權。CVE-2026-118527 評分為 CVSS 4.3，涉及可預測的識別碼生成，允許遠端經過身分驗證的攻擊者將檔案放置於已知的磁碟位置。聯邦民事行政部門機構必須分別於 2026 年 11 月 2 日與 11 月 13 日前修復這些漏洞。

根據 Volexity 的研究，威脅行為者 UTA0576 將這兩個漏洞與身分驗證繞過漏洞 CVE-2026-104935 結合進行武器化，CISA 稍早已於 2026 年 10 月將後者列入目錄。整個漏洞利用鏈結合了身分驗證繞過、遠端程式碼執行與提權，從而在受影響的設備上取得未經身分驗證的 root 層級程式碼執行權限。觀察到的對手活動並未部署傳統的 Web Shell 或惡意軟體有效載荷，而是專注於主機偵察、擷取認證資訊與 Active Directory 中繼資料，以及尋找 BitLocker 修復金鑰和管理員密碼。

Ivanti 發布了修補程式，解決了受支援的 ICS 版本中所有被串聯的漏洞，將 25.1.1.2 及更早版本更新至 25.1.1.3，並將 22.8R2.5 及更早版本更新至 22.8R2.6。該廠商指出，針對 CVE-2026-104935 的初步修復已加速進行以瓦解主要的入侵途徑，同時針對本機提權的回溯移植工作也已完成。該漏洞的一部分先前已於 7 月發布的 25.1.3.0 版本中得到解決，隨後因主動利用而被回溯移植。

### 📌對 CISO 的影響

- **Ivanti 閘道器的緊急修補與裝置檢查 —** 資安團隊必須優先將 Ivanti Connect Secure 設備更新至版本 25.1.1.3 或 22.8R2.6，以消除威脅行為者主動利用的未經身分驗證 root 執行鏈。
- **暴露後的認證與 Active Directory 稽核 —** 由於 UTA0576 特別針對 Active Directory 中繼資料、認證與 BitLocker 金鑰，而非植入持續性 Web Shell，懷疑設備已暴露的組織必須啟動全網域認證重設並驗證金鑰安全性。
- **邊界裝置分割與遙測檢視 —** 資安長官應限制邊界閘道器上的管理介面，並嚴格審查來自網路邊界的出站網路活動，以防範未經授權的資料外洩與認證暫存行徑。

**參考來源:** [Attackers Chain Three Ivanti Connect Secure Flaws to Gain Unauthenticated Root Access](<https://thehackernews.com/2026/10/attackers-chain-three-ivanti-connect.html>)

---

## 本週活躍威脅

📌 **已修復的 ChatGPT 漏洞曾允許透過分享連結進行工作階段劫持**

Parameter 的安全研究人員證實，開啟精心製作的 ChatGPT 分享連結可能會在受害者的已驗證 Web 工作階段中執行攻擊者程式碼，暴露私人對話紀錄並允許代表其執行任意 API 操作。該攻擊利用了互動式圖表載入的 MathLive 程式庫中的訊息處理問題，該程式庫未能驗證來源框架，並允許未經篩選的 HTML 注入，進而繞過沙盒邊界並利用允許的外部指令碼。OpenAI 於 2026 年 10 月 26 日前在其 Web 前端修復了該通報問題，無需終端使用者介入，且在受控測試之外未觀察到野外利用。

**參考來源:** [A Shared ChatGPT Link Could Run Attacker Code in Your Session and Read Private Chats](<https://thehackernews.com/2026/10/a-shared-chatgpt-link-could-run.html>) 

---

📌 **Cursor 市集散播植入後門的 Claude Code 擴充功能**

Cursor 確認 Anthropic Claude Code 擴充功能的受侵害版本 2.1.313 於週四在其市集上架約 11 小時，在該儲存庫被暫時下架並修復之前影響了多達 5,000 名使用者。該修改過的擴充功能包含未經授權的載入器，旨在收集系統偵察資訊、插入 SSH 授權金鑰，並建立通往 134.209.82.225 的對外出站反向通道。雖然 Cursor 指出該持續性機制通常在 IDE 未以管理員權限執行的情況下會失敗，但研究人員建議受影響的組織應立即隔離執行該版本的端點以進行鑑識審查。

**參考來源:** [Cursor Confirms Anthropic Claude Code Extension Compromised - BankInfoSecurity](<https://news.google.com/rss/articles/CBMiogFBVV95cUxObjJqYTE0ZGVsdGk1cklsaDg2R2wxa2pvU3BtdnEzSkIxNFNqRGgzcVZrOGVBd09vUW1ubEdMQWFURUNPU3dyRjJ4RlhhbWx5Vkp5R2thMkhCVmRnQkZvZTNyTG1hZkFYN1lkQWNlU0lMRlpHTkJSZ2c0enUxQUFCZVhHWlUzZElsOFZFWS1SMUYzRXhmcndnemg1ZXRtbERNdVE?oc=5>) 

---

📌 **TeamViewer 漏洞允許遠端電腦攻擊連接控制它們的使用者**

TeamViewer 已修補 CVE-2026-111585，這是一個 8.8 分（滿分 10 分）的嚴重程度漏洞，可讓遠端控制主機攻擊檢視端。TeamViewer 15.83 修復了 Windows、Linux 和 macOS 的完整客戶端、Windows Portable 版本，以及所有低於 15.83 版本的 Android 遠端控制應用程式。Host 本身未被列為受此特定漏洞影響，但相同的更新修復了兩個影響 Host 的其他漏洞，因此 Host 使用者也應該更新。惡意或遭入侵的 Host 可以使檢視端的 TeamViewer 工作階段當機，並在 Windows 上略過 OS 漏洞防禦機制，讓攻擊者在使用者啟動遠端控制工作階段後，在檢視端執行攻擊者選擇的程式碼。除了接受工作階段外，不需要密碼或額外點擊。TeamViewer 於發布時並不知悉任何惡意利用，且 Remedio 未報告任何野外攻擊或發布漏洞利用程式碼。

**參考來源:** [TeamViewer Flaw Lets Remote Computers Attack Users Who Connect to Control Them](<https://thehackernews.com/2026/10/teamviewer-flaw-lets-remote-computers.html>) 

---

📌 **Anthropic 的 Claude AI 發現可能讓駭客取得根權限的重大 Linux 漏洞 - How-To Geek**

How-To Geek 報導，Anthropic 未發布的 Claude AI 模型發現了一個追蹤為 CVE-2026-98432 的重大 Linux 核心漏洞，評分為 9.8 分（滿分 10 分）。Anthropic 展示了一個不需要點擊、開啟檔案或密碼的漏洞利用，會洩漏核心記憶體、繞過 KASLR、劫持核心控制流程並執行 Shell 命令，在約 53 分鐘內達到根層級存取權。

**參考來源:** [Anthropic's Claude AI found a critical Linux flaw that could give hackers root access - How-To Geek](<https://news.google.com/rss/articles/CBMisAFBVV95cUxOYUM5ajlQY185WllyenBmQ012U2RHbWdmQUtHQ25aekJiQ3VUX0xKcjd4alBuMUxwUk9IdkJ5WGRsTXhidjNJaHI2c0gxZlk3anR1TVpIaUhMUnpGQjlQRWs3Wm5jZi0wUTg0OW9qbGkzN1l4TDRTVDQxTWNOODZTdFI4TGY5bVBNcDk4MWpmbjhDRGV5Qm9SV194NHFEdnE5a2ZfZDFSd3FaNE5MSjdyRA?oc=5>) 

---

📌 **Cloudflare 報告第三季度網路層 DDoS 攻擊達 1820 萬次，上升 38%**

Cloudflare 在 2026 年第三季度自主緩解了 1820 萬次網路層 DDoS 攻擊和 14.4 兆個 HTTP DDoS 請求，較第二季度的 1320 萬次有所增加。這相當於每小時約 8226 次攻擊，即每 0.44 秒一次。持續時間低於 10 分鐘且頻寬低於 1 Gbps 的短爆發低頻寬攻擊增加了 208%，而超過 1 Tbps 的超大容量攻擊下降了 69%。受攻擊最嚴重的行業包括媒體、製作與出版；IT 與服務；賭博與賭場；電腦軟體；以及電信。美國、中國、印尼、英國和土耳其是受攻擊最嚴重的國家。

**參考來源:** [Cloudflare Reports 18.2 Million Network-Layer DDoS Attacks in Q3, Up 38%](<https://thehackernews.com/2026/10/cloudflare-reports-182-million-network.html>) 

---

📌 **Chainalysis 證實入侵內部工具並洩露客戶身分識別資料**

Chainalysis 證實，一名外部行動者使用攻擊性代理技術存取內部工具及部分非敏感客戶資料，包括使用者 ID、全名、電子郵件地址以及組織角色標籤。該公司表示，調查內容、驗證憑證和工作階段權杖均未被存取，目前正在修補漏洞並強化系統。

**參考來源:** [Chainalysis Confirms Intrusion Into Internal Tools and Exposure of Customer Identity Data](<https://thehackernews.com/2026/10/chainalysis-confirms-intrusion-into.html>) 

---

📌 **Anthropic：那個 Claude Code 擴充功能被入侵…不可能是我們 - The Register**

The Register 報導，Anthropic 否認涉及一個 Claude Code 擴充功能的入侵事件。

**參考來源:** [Anthropic: That Claude Code extension compromise… couldn't be us - The Register](<https://news.google.com/rss/articles/CBMivAFBVV95cUxOV2FaNjdkR0JjU3Itc3RRakQ1UkdSLXdnZG1KVUhhSFdZRERLU2QwVFliWmNMXzdhMHJBMGZKWHlURWJNZ0MwTnA3YnI3VjV2UWNwYmJJYTdCMUIwYUhrbWdwaDMxNDlaMms3eVNfYWJVb3dJbzAtLWFRaE5GQ2JqQ0JxLWJzcEd2Z3FMdklvWWg3aXhka2V5U01ZeEE0MEhTVFRsRkphOFV5VjdGdnNFenR2OEpLMnlMcEROVA?oc=5>) 

---

📌 **Anthropic 說 Claude 在主要軟體中構建了五個漏洞利用鏈 - eWeek**

eWeek 報導，Anthropic 說 Claude 在主要軟體中構建了五個漏洞利用鏈。

**參考來源:** [Anthropic Says Claude Built Five Exploit Chains Across Major Software - eWeek](<https://news.google.com/rss/articles/CBMickFVX3lxTFBkNTBGTUJFVU1YeGlGMW9yZUJ2d1pncGI4bkxvM0pUTExzZGJoaWRhT2NhdUZZZllycm1PODhUOXBvQTlyUTl0MUZPVklfU0RBRzBBZ3JPelItN3RGRzV2UzQwOThDVm00N0k0T1I3a2Q1UQ?oc=5>) 

---

📌 **加密货币窃取脚本已部署在 Polymarket**

Xakep 報告，一個專門用於竊取加密貨幣的腳本已部署在 Polymarket。

**參考來源:** [На Polymarket внедрили скрипт для кражи криптовалюты](<https://xakep.ru/2026/10/30/polymarket-script>) 

---

📌 **Warp 的 AI 代理日誌與用戶遙測數據遭竊**

Xakep 報告，Warp 的 AI 代理工作日誌與用戶遙測數據已遭竊取。

**參考來源:** [У Warp похитили логи работы ИИ-агентов и данные телеметрии пользователей](<https://xakep.ru/2026/10/30/warp-leak>) 

---

📌 **意大利面臨不明原因的網路安全漏洞**

Dark Reading 報告，意大利面臨不明原因的網路安全漏洞。

**參考來源:** [L’Italia è afflitta da vulnerabilità informatiche, senza una causa chiara](<https://www.darkreading.com/cybersecurity-analytics/cyber-vulnerabilities-besiege-italy-italian>) 

---

📌 **死而不朽的軟體專案持續帶來安全風險**

Dark Reading 指出，被遺棄或處於休眠狀態的軟體專案仍為活躍的安全風險。除標題外，未提供範圍、利用方式或受害者影響的細節。

**參考來源:** [Undead Software Projects Continue to Raise Security Risks](<https://www.darkreading.com/application-security/undead-software-projects-raise-security-risks>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261031-2-1793590803011 -->
