---
title: "CISO 每日摘要：瑞士確認 AI 輔助網路攻擊已突破關鍵基礎設施營運商 (20261127)"
description: "瑞士確認 AI 代理人對關鍵基礎設施的成功入侵，同時在 Cacti 網路監控軟體中發現新的未經驗證 RCE 零日漏洞。"
pubDate: 2026-11-27
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## 瑞士確認 AI 輔助網路攻擊已突破關鍵基礎設施營運商

瑞士國家網路安全中心報告指出，使用 AI 代理人的駭客已成功突破該國五起最近確認網路攻擊中的四起電腦系統。其中三起事件針對關鍵基礎設施營運商，兩起攻擊導致成功的未經授權存取。雖未報告重大服務中斷，但受害者（包含中小企業）尚未公開點名。

國家網路安全中心發現使用代理人攻擊框架，這類 AI 代理人能自行發現安全弱點並執行攻擊。這類工具（例如 ARTEX 與 CyberStrikeAI）可高速掃描未修補漏洞，並平行執行多個攻擊向量。該機構指出，這些代理人在遇到防禦反應時可調整方法，大幅縮短組織偵測與因應入侵的可用時間。

網路安全機構強調威脅格局的轉變，指出線上可免費取得的 AI 攻擊工具數量自十月以來近乎翻倍。專家認為，這些代理人的日益普及與自主性可能導致更大規模的攻擊浪潮。其他國家事件回應團隊也觀察到涉及自主 AI 代理人的大量系統被攻入活動，系統因工具的自適應特性在數小時內被攻破。

### 📌對 CISO 的影響

- **緩衝自主 AI 威脅 —** 防禦者必須考量攻擊速度加快與自適應調動。傳統偵測閾值可能需要調整，以捕捉在交戰期間快速切換策略的自主代理人。
- **關鍵基礎設施強化 —** 隨著 AI 驅動攻擊針對電力與供水等關鍵領域，組織應優先快速修補，並預設自動掃描器會比人工流程更快發現未修補的入口點。
- **快速反應需求 —** AI 代理人能平行執行攻擊並即時繞過防禦，因此需要高度自動化的事件回應能力，以縮短入侵者的作案機會窗。

**參考來源:** [Switzerland Confirms AI-Assisted Cyberattacks Breached Critical Infrastructure Operators](<https://thehackernews.com/2026/11/switzerland-confirms-ai-assisted.html>)

---

## 本週活躍威脅

📌 **未修補 Cacti 零日漏洞僅需四個 HTTP 請求即可透過訪客存取實現 RCE**

Cacti 開源網路監控工具出現新的零日漏洞，可透過預設訪客介面實現未經驗證的遠端程式碼執行（RCE）。該漏洞追蹤為 4HTTP2SHELL 與 4HTTP2ROOT，只需四個 HTTP 請求即可以 Cacti 伺服器使用者身分執行命令。該缺陷影響 Cacti Core 1.2.31（當訪客存取已啟用時）；不過，0.8.7 及以後版本預設停用訪客帳戶。該漏洞透過 'preview\_graphs\_per\_page' 設定利用二階 SQL 插入，允許攻擊者插入任意 SQL 字串，這些字串最終傳遞至 PHP 的 popen() 函數，且未經清理。

**參考來源:** [Unpatched Cacti Zero-Day Enables RCE in Just Four HTTP Requests via Guest Access](<https://thehackernews.com/2026/11/unpatched-cacti-zero-day-enables-rce-in.html>) 

---

📌 **「上帝模式」缺陷可能造成邊境管制混亂**

報告顯示，「上帝模式」缺陷可能對邊境管制作業造成重大干擾。所報告的漏洞顯示，對關鍵邊境管理系統產生影響的風險甚高。

**參考來源:** ['God Mode' Flaws Could Wreak Border-Control Havoc](<https://www.darkreading.com/vulnerabilities-threats/god-mode-flaws-wreak-border-control-havoc>) 

---

📌 **與北韓相關的 PolinRider 藉超過 7,600 個 GitHub 儲存庫散佈惡意程式碼**

北韓威脅行為者背後的 PolinRider 活動已破壞超過 7,600 個 GitHub 儲存庫，活動可能可追溯至 2025 年 2 月。攻擊者注入 Python 載入程式，當開發人員複製、分支、建構或匯入受影響專案時即會執行。該載入程式從以太坊錢包交易檢索 JavaScript，以定位命令與控制伺服器並傳送下一階段 Node.js 負載，包括可能會在 VS Code、Cursor、Discord 與 GitHub Desktop 中持續存在的遠端存取工具。SafeDep 在 375 個公開儲存庫、涉及 260 個帳戶中發現該載入程式，而 Apiiro 評估有 7,609 個儲存庫、由 2,330 個帳戶擁有，受到影響。此活動被評估為 Contagious Interview 的平行子集群，利用開放原始碼軟體註冊作為主要初始存取向量，針對企業環境。

**參考來源:** [North Korea-Linked PolinRider Poisons Over 7,600 GitHub Repositories to Spread Malware](<https://thehackernews.com/2026/11/north-korea-linked-polinrider-poisons.html>) 

---

📌 **ThreatsDay：1,000 萬 NGINX 服務面臨風險、250 個以上惡意擴充功能、AI 伺服器劫持及其他 17 個新聞**

The Hacker News 週報報導多項活躍威脅：Todoist 披露 2026 年 11 月的資料外洩事件，影響 6 百分比的使用者，因為被盜憑證被用來存取版本控制系統、原始程式碼、員工帳戶與客戶資料；Microsoft 記錄超過 250 個 SleeperWidget 瀏覽器擴充功能，這些擴充功能在透過付費搜尋廣告安裝時會啟動隱藏的資料蒐集、廣告插入與連結修改；Rapid7 發現成千上萬個未經驗證的 AI 伺服器暴露於互聯網濫用，且無需利用攻擊；Censys 報告超過 1,000 萬個 NGINX 服務易受 NGINX2Root 漏洞影響，可能導致遠端程式碼執行；Symantec 披露攻擊者濫用 CyberPower PowerPanel Business 以 SYSTEM 身分執行指令並傾印 Active Directory 秘密；TrendAI 報告 BYOD 勒索軟體組織已聲稱至少九個組織為目標，並造成真實診所關閉與救護車轉送；Guardio Labs 評估 2026 年 10 月有 12,200 個線上商店透過 CartJacked 方案被劫持；VulnCheck 在 127 個 CVE 上記錄憑證收集嘗試，AI 與開放原始碼開發人員工具佔相關漏洞的 61 百分比。

**參考來源:** [ThreatsDay: 10M NGINX Services at Risk, 250+ Malicious Extensions, AI Server Hijacking + 17 More Stories](<https://thehackernews.com/2026/11/threatsday-250-rogue-extensions-10m.html>) 

---

📌 **研究人員揭露遭利用的 Drupal 嚴重漏洞 Fail2Install 細節**

iThome 報導，研究人員已揭露一項被主動利用的 Drupal 嚴重漏洞 Fail2Install 的細節。

**參考來源:** [研究人員揭露已遭利用的Drupal重大漏洞Fail2Install細節 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5TYS1tdnpKV2U4M3JNSk9FRXpraVJmQk9POVc5TzhXRnlKS2ZWVXkzQ2FzVTFKUENVQWJmb0tFblYza2VpbGM5RldlVlo3UQ?oc=5>) 

---

📌 **Drupal 揭露新遭利用的安裝漏洞 - iThome**

Searchlight Cyber 披露 Drupal 漏洞 CVE-2026-132165 (Fail2Install) 的細節，這是一個嚴重缺陷，CVSS 評分為 9.8，且已在野外遭到利用。攻擊者可透過平行請求淹沒資料庫連線，誘使 Drupal 誤以為安裝未完成、重新開啟安裝程式，並利用 SQLite 與 Apache 的弱點寫入並執行 PHP 程式碼，在四種常見部署架構中達成未經身分驗證的遠端程式碼執行。

**參考來源:** [Drupal揭露已遭利用的安裝程式新漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE01dURQdWI2UE1TaGNlWng2SmEzRzMtZjQ2bm1mbGNSYkxKNTRnUXgtUE5BVWpKZnZ4ZzNVTjhXMEhmQThNdHJRZ0RtZGxRdw?oc=5>) 

---

📌 **全球 22 家企業組織的 Check Point 管理伺服器遭入侵；攻擊者利用已知漏洞取得管理員權限 - iThome**

威脅情報公司 GreyNoise 披露攻擊行動 GT13，其中全球 17 個國家至少 22 家企業組織的 24 部 Check Point 資安管理伺服器遭入侵。受害者橫跨金融、能源、政府與製造業，攻擊者利用已知漏洞取得管理員權限。暴露並不代表已發生感染，或在取得管理員存取權之外有進一步利用行為。

**參考來源:** [全球22家企業組織Check Point管理伺服器被入侵，駭客利用已知漏洞取得管理員權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1mclhJZHhVQm9ZUWozM2tfWjBJajVMOVZuQmRkcWVRbklVSXB1SGZaeWRnLW5LRTh2WWp5dDRYX1d4c3Q3b3pNbVV6RzBuUQ?oc=5>) 

---

📌 **安全 Daily：11 月 27 日，中國與北韓駭客已將 ARTEX 加入武器庫 - iThome**

iThome 報導，Microsoft 觀察到至少六個駭客組織，包括中國與北韓行動者，正使用 AI 驅動的自動滲透測試框架 ARTEX 發動攻擊。在一起觀察到的案例中，AI 代理在五分鐘內搜尋 GitHub 上的洩露憑證，並竊取 Azure Key Vault 數據。Shadowserver 蜜罐在兩週內記錄超過 10,000 次事件，來源超過 80 個 IP，目標為 VPN、開發工具與 AI 服務。Microsoft 提醒，ARTEX 不引入新攻擊技術，但會加速攻擊流程。iThome 還報導了其他獨立事件，包括據稱 FBI 全國犯罪資料庫入侵、Drupal Fail2Install 利用、影響 500 家商家的 PayNow API 散佈，以及 GeoServer 漏洞鏈攻擊。

**參考來源:** [【資安日報】11月27日，中國及北韓駭客皆已於武器庫中加入ARTEX - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ONWhvanVpMUJCLUIxU3JqUGJlcVE2UnhqZkxGOGZvT084QldNalgtbWlnRUpQdHZpcjduVTg2a19BY19PdjJueWRYMjRidw?oc=5>) 

---

📌 **Linux KVM 漏洞允許虛擬機器存取主機記憶體**

據報導，Linux KVM 中存在一個漏洞，可能允許虛擬機器獲得對主機系統記憶體的未經授權存取。

**參考來源:** [Уязвимость в Linux KVM позволяет виртуальным машинам получать доступ к памяти хоста](<https://xakep.ru/2026/11/26/cve-2026-99312>) 

---

📌 **BeyondTrust 預測 2027 年網路安全挑戰：AI 代理權限濫用與暴露系統的應變時間縮短**

BeyondTrust 預測，到 2027 年，組織將面臨來自 AI 代理權限誤用的增加風險，以及針對外部面向系統漏洞的應變時間縮短至僅剩數小時的挑戰。

**參考來源:** [BeyondTrust預測2027年企業資安新挑戰，AI代理權限遭濫用，對外開放系統重大漏洞應變時間縮短至數小時 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBnX2F3eUdpcGZHZDBqSlJnVEF5VUNTaWNuZFEzTURTb1NDQzZrZEFfbFBydWRsR3plV3daMkFVRFd3RW5RYWtLd1ZwcGtZZw?oc=5>) 

---

📌 **愛沙尼亞因安全風險敦促暫停使用 DeepSeek 及其他 AI 模型**

愛沙尼亞當局已呼籲停止使用 DeepSeek 等 AI 模型，理由是其存在潛在的安全風險。

**參考來源:** [AI丨愛沙尼亞籲停用DeepSeek千問等 涉安全風險 - 信報網站](<https://news.google.com/rss/articles/CBMitAJBVV95cUxPaHk0eFRVckJoaUc5Rmh4dTMtMGxTdTlrTXV3Tk5qOUdzeFFJTm90MGYtek40SktZOXY5dUVuM2toaFFFZjlMeG5QRVViUzdyOGNneHpCRlBYQk9PcXc3MHJ0QWNkY28xY2tyWS1ZQkdWRFRDekd3cTVKMWZTNDV6QnRMUXlEcmlwZ1FuZGpSQnVlWW5OQTBlMWFaaW5rM0dTOHhKX1h6dUJjMDA3VEdUa0toSjZoS0RxbE9ZRzBCS1lpSUxvMDE1cW4xTU8taC13anNNV1hTNHVNcVI4Z0dXMlY3MUE4QzFwRFVRcmhsV1M0UTFtMmVoYzgtUzRocUVpRl91UnBUSGtuRnpHcUpiWWdpQ201dW54dVpNUTl1NVNsRzRZRnZhZi1fT09NOUd1UFBKVQ?oc=5>) 

---

📌 **美國鈾礦場因網路安全事件暫停運作**

一家位於美國的鈾礦場在發生網路安全事件後據報暫停運作。

**參考來源:** [美國鈾礦場因資安事件暫停運作 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5NczhnVzF3cHprUkRmMEFiczdzUFlCWVhKZHJlWGl1alAxY0RlRDdTMVdDY3ZoSXNWVThpOXlMSDZ5WHRELWNhT2JuSG93Zw?oc=5>) 

---

📌 **SYS010 資訊竊取軟體濫用瀏覽器管理功能攔截與刪除 Gmail 與 Outlook 電子郵件**

觀察到 SYS010 資訊竊取軟體濫用瀏覽器管理功能，使攻擊者能夠攔截並刪除 Gmail 與 Outlook 帳戶中的電子郵件。

**參考來源:** [SYS010竊資攻擊濫用瀏覽器管理功能，可攔讀並刪除Gmail與Outlook郵件 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE4yQWtadFhYWTMyN0hBVVZySjUxUGNGQy14dlkyVnBEZGFFc2FQWUlYSTRRakdFUFJpd0hldFloMXBHbXc0eWZlZ1RsdjhUZw?oc=5>) 

---

📌 **MiCollab 漏洞在修補前遭利用；攻擊者於約一小時內達成網域控制權**

攻擊者在補丁釋出前利用 MiCollab 漏洞，據報在初始利用後約一小時內即獲得網域控制權。

**參考來源:** [MiCollab漏洞修補前已遭利用，攻擊者約在1小時取得網域控制權限 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfVVdnelFRZzJLQlM0YjFPcmRJcXJZY2wyVm9HcTZmZGgxem5KcUpZQ0k1REZoWGtxMG9MNWZER0t1bnQ5MUhNWUhRNjFzdw?oc=5>) 

---

📌 **MOS Burger Japan 在不到一個月內通報五起安全事件，均涉及第三方服務**

iThome 報導，MOS Burger Japan 在不到一個月內披露五起安全事件，每起均涉及第三方服務。

**參考來源:** [日本摩斯漢堡不到一個月揭露5起資安事件，皆涉及第三方服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1LZHVDSm9HbGR6NFE5WHNlTkI2Y3VBNHFyQ2s1TEN3U3lOM1JZYmFMaGlVTUVJQ1lRajZfREk0cjhiTEtHQ0MxTlo1UmRpQQ?oc=5>) 

---

📌 **義大利與瑞士警告 AI 代理人式攻擊，促請於 24 小時內修補面向外部系統**

iThome 報導，義大利與瑞士已發布關於 AI 代理人式攻擊的警告，並敦促組織於 24 小時內修補面向外部系統的漏洞。

**參考來源:** [義大利、瑞士示警AI代理式攻擊，籲24小時內修補對外系統漏洞 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBZaHNPYS1XVUZGRmVFQW5XSkFiTExJU29KV3pfMFFCQ2lHUEVqSHNVRkRrMktIcHFCYmFmMnQzZEd2Wm00VUJqT0ktZWZOQQ?oc=5>) 

---

📌 **中國與北韓駭客已將 ARTEX 加入其攻擊工具集**

iThome 報導，與中國和北韓有關的駭客已將 ARTEX 併入其攻擊工具組。

**參考來源:** [中國及北韓駭客皆已於武器庫中加入ARTEX - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtRTBuT2VBM1U5YWhFNVZvR3MyLTJUSGkzbmtzMmJFZmJvcjFGbXM2NGFyN2JXZGhmRnRvODdTcUlNVzluSnNMMlFBNmNIQQ?oc=5>) 

---

📌 **WPIDE 修補未經身分驗證的遠端程式碼執行漏洞；未修補的網站可能導致管理員執行惡意 PHP**

iThome 報導，WPIDE 已修補一個未經身分驗證的遠端程式碼執行漏洞。報告警告，未更新的管理員可能被騙執行惡意 PHP。

**參考來源:** [WPIDE修補未經驗證遠端程式碼執行漏洞，未更新可能導致管理員遭誘使執行惡意PHP - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE9UUU5HNkI3cjh1eGppWjVIbTYweHJpVGZVVU5tcW5tNGlFbElWX0h4b1pFNVAxcldhUHVUTFpfLW1ndzRoVGdudVRmVThQdw?oc=5>) 

---

📌 **偽工作測試隱藏惡意 NuGet 套件；攻擊者透過開發者招募流程散播惡意軟體**

iThome 報導，攻擊者透過招募流程，以偽裝成工作評量測試的惡意 NuGet 套件，針對開發者散播惡意軟體。

**參考來源:** [假求職測驗暗藏惡意NuGet套件，駭客藉開發人員應徵流程散布惡意軟體 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5SejRXTnU4Zlg1X0MzWlB6TDNVSkFFMzJMQ0ZyYVltYndlV1RhbFlVTWpEQUdDVTgxcTFzLUU2YmxJa05MUFVob2haNGhlQQ?oc=5>) 

---

📌 **Azure API Management 漏洞已修復，該漏洞曾允許竊取金鑰與權杖**

Xakep 報導，Azure API Management 中允許竊取金鑰與權杖的漏洞已修復。

**參考來源:** [В Azure API Management исправили баг, позволявший похищать ключи и токены](<https://xakep.ru/2026/11/27/azure-api-management>) 

---

📌 **袋鼠金融平台遭外部攻擊，部分使用者個人資料外洩**

iThome 報導，袋鼠金融平台遭受外部攻擊，部分使用者個人資訊外洩。

**參考來源:** [袋鼠金融平臺遭外部攻擊，部分使用者個資外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5VZGp2MmEyVWdFcGJweVRwSGdsX05Kd1NFSmxiRl9mNW9neDhISVVJaU9VZWpDWFRQTjlLUTNDd2twR0xqYmZFcFVldHpVQQ?oc=5>) 

---

📌 **近 4,200 個 AI 自主攻擊框架曝露於公共網路，其中 10 個發現於台灣**

iThome 報導，近 4,200 個 AI 自主攻擊框架曝露於公共網路，其中包括在台灣發現的 10 個。

**參考來源:** [近4,200個AI自主攻擊框架暴露於公開網路，臺灣也發現10個 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFBNUTFlRnNXdDRmckhudFFqYlVLcFhnNmh5WlNET1NmQWdkeXo5amVhQURpMjRDLVFTX21BeEFkVHdFRmJvZGltNllhdmotdw?oc=5>) 

---

📌 **日本 JAXA 網站遭駭，2,000 個使用者密碼外洩**

iThome 報導，日本 JAXA 網站遭駭，2,000 個使用者憑證外洩。

**參考來源:** [日本JAXA網站遭駭，2,000名用戶帳密外洩 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5MNE1lWVEyRmF0R1llbFVpNHh6dmdEREpiLU4zNm1pOHhsZm92aXh3NzlBYWEzSEN2eE05VTBfaGhETUp5d0U1cFhHdnNQZw?oc=5>) 

---

📌 **Binance 解除與 63.4 億數位資產盜竊相關的提現限制**

iThome 報導，Binance 已移除與涉及 63.4 億數位資產盜竊相關的提現限制。

**參考來源:** [幣安解除63.4億美元數位資產竊案相關提款限制 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5nNEZfdGMwNlFSaHNnSzFvWlNfVmJoUElkcEpfaDY1M0JzRE8wa3UzSFkzOHVwWWpOY0czemNXTTIxaHd0cXZJQzR6TkU3dw?oc=5>) 

---

📌 **美國 CIA 與其他情報機構據報遭駭，非機密資料外洩**

iThome 報導，包括 CIA 在內的美國情報機構據報遭駭，導致非機密資料外洩。

**參考來源:** [美CIA等情報機構傳遭駭，外洩非機密資料 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE1MSHc3TV9ranZZYnVJbFdkeDFrYm1acXpDVzNobnZHTkdleVdpbTdVT1YxYWs2aGh6MHZUVlR1WWc1clVEaTgzOWpkcW5idw?oc=5>) 

---

📌 **安全週報 11 月 23–27 日：網路銀行盜竊手法曝光；第三方資訊服務供應商安全事件波及物流與電子發票服務**

iThome 的安全週報涵蓋曝光的網路銀行盜竊手法，以及已擴及物流與電子發票服務的第三方資訊服務供應商安全事件。

**參考來源:** [【資安週報】1123～1127，網銀盜轉手法曝光，第三方資訊服務供應商資安事件延燒至物流與電子發票服務 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTFA1cWp2SjR3UUtTSHYzWDFrZkI0Q1MwNXNQcExjMlA5RlRnZmRQdWlHbHZzaHBDVUYzNjU1Ujg0Nno3WGpvU0hBOVN2czdIZw?oc=5>) 

---

📌 **如何在攻擊者以 AI 速度移動時，保持安全圖景最新**

The Hacker News 报导，静態安全快照已不足夠，因為 AI 加速的攻擊者以機器速度進行偵察、網路釣魚與弱點探測，而人工收集指標讓安全圖景在抵達領導層時已過時。該文章主張，應直接從雲端帳戶、身分提供者、終端裝置、程式碼儲存庫與其他工具取得可見性，讓團隊了解在一般週二發生了哪些變更、差距在哪裡，而不僅限於檢討日。文中將 Anecdotes 描述為貢獻合作夥伴解決方案，能連接現有系統並自動組裝圖景，未聲稱能偵測或阻擋攻擊者。

**參考來源:** [How to Keep Your Security Picture Current When Attackers Move at AI Speed](<https://thehackernews.com/2026/11/how-to-keep-your-security-picture.html>) 

---

📌 **AI 代理人基礎攻擊 - iThome**

iThome 發布僅標題報導，關於 AI 代理人基礎攻擊；未提供完整文章細節，因此無法總結特定受害者、技術或確認影響。

**參考來源:** [AI代理式攻擊 - iThome](<https://news.google.com/rss/articles/CBMihAFBVV95cUxQT0FIa3JBM1FKUnMyX2xWek81eXJiN3NTekJVRmxXUmtqVmE5al9TbThzQXdHY0tmM2FMRTR3eFFvZ09pUzczbTVlckRNLWZ4WjFPT2dVeWE2Z25fSnRlSFlSc2MzTWlXLWY2Z1ljMmtrZjhEY1JsblF0aGFwZkhDSkNaSUU?oc=5>) 

---

📌 **數位發展部提議建立弱點搜尋平台**

Xakep 發布僅標題報導，指出俄羅斯數位發展部提議建立弱點搜尋平台；未提供進一步細節、時程、範圍或確認實施情況。

**參考來源:** [В Минцифры предлагают создать платформу для поиска уязвимостей](<https://xakep.ru/2026/11/27/bug-searching-platform>) 

---

📌 **預載惡意軟體的 Android 裝置數量增長 2.5 倍**

Xakep 報告，預載惡意軟體的 Android 裝置數量已增加 2.5 倍。

**參考來源:** [Количество Android-устройств с предустановленной малварью выросло в 2,5 раза](<https://xakep.ru/2026/11/27/preinstalled-malware>) 

---

📌 **CSIRT Italia - iThome**

iThome RSS 關於 CSIRT Italia 的報導僅限標題；來源證據中沒有進一步的技術細節。

**參考來源:** [CSIRT Italia - iThome](<https://news.google.com/rss/articles/CBMiVkFVX3lxTE1lTmxpWjVyTWJfdWx1RDJRa0JRSHA0U3FyakZWel9SVUMxRTZ6UktKcGpxamxxbGRPbnR4N0NndWhwNTUtdlhMY3RWNnJJcGFkLTk5SWRB?oc=5>) 

---

📌 **AI 駭客工具 - iThome**

iThome RSS 關於 AI 駭客工具的報導僅限標題；來源證據中沒有進一步的技術細節。

**參考來源:** [AI駭客工具 - iThome](<https://news.google.com/rss/articles/CBMieEFVX3lxTE1XbmhrQm9YanVwbmdra0pzbFVncjZESWNMaFlaQk5CLWNVZGhwMlM1LUpaY0YyeF9oazkyTnRPYjU3WlZGYXQ1SWhPSHRuSmdQVVdURnpSekswWElMWHp5eXFCOW9SSEZvc3NJYXl0X1FYU1ZUSHlJLQ?oc=5>) 

---

📌 **PolinRider - iThome**

iThome 报道 PolinRider 供應鏈活動，被歸咎於北韓駭客，攻陷超過 375 個 GitHub 儲存庫以散布惡意軟體。

**參考來源:** [PolinRider - iThome](<https://news.google.com/rss/articles/CBMiU0FVX3lxTE5aVWJnR1BTODBEcGZOdFVFcDJXM3hGckFhVE9IZ2FPMUlXWi1CaDhvLW1jdG82LUNrRk0tZ1YxY2tFaURacTRGbmF1MzlNNWdYTFln?oc=5>) 

---

📌 **北韓駭客進行 PolinRider 供應鏈攻擊，攻陷超過 375 個 GitHub 儲存庫散布惡意軟體 - iThome**

iThome 報告北韓駭客實施 PolinRider 供應鏈攻擊，污染超過 375 個 GitHub 儲存庫以傳播惡意軟體。

**參考來源:** [北韓駭客從事供應鏈攻擊PolinRider，污染逾375個GitHub儲存庫以散布惡意軟體 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5UMzdzSV9yUDVHT1phZGdLemFXYmtpLU13YlNoVklHSC14dnJmemE4d25iY2VXaXpoWTZoU1lkZjV2LVM3VUp5X2JKeHM5UQ?oc=5>) 

---

📌 **美國遏制行動似乎有效？報導稱 Kimi 更新延遲，轉向蒸餾 Google 和 Meta 模型 - TechNews**

TechNews 報導美國遏制措施可能延遲 Kimi 的更新，促使開發者轉向蒸餾 Google 和 Meta 模型。

**參考來源:** [美防堵奏效？傳 Kimi 更新延宕 轉蒸餾 Google、Meta 模型 - TechNews 科技新報](<https://news.google.com/rss/articles/CBMiqgFBVV95cUxQT3pKbS1HbEpETUktcjY0ZTVDQkIwVWJTeXpOQWdBbGNzTGN3al91N0duTDVoUnlZNHJiTXFMMmh1TUg2NmFudnNFcVFpYWhySDhTQVQtMGVHV19OX3RWemdOZEh2UWNFamJqWnk4STl4SnFQM0hGRHp1TFJpWXhNWGFLanRQY3FfQUp5R21ocTVfcmY5ZGdGaDFSUXFnaDBZYXE4V2g1SENEUQ?oc=5>) 

---

📌 **HPE 推出混合式超級運算儲存系統與智慧機櫃管理解決方案**

iThome 報導，HPE 推出混合式超級運算儲存系統，以及智慧機櫃管理解決方案。

**參考來源:** [HPE推出混合式超級運算儲存系統與智慧機櫃管理方案 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE52VTZ3aGtaUDU4M0RlTVJWd3lUNGJTMzJTTmdBWkdaSjhHMEdJMmJYUnpVNURXMFZpUzRKN195OG5HUzh4aXBXbVBlYw?oc=5>) 

---

📌 **鵬昌數位科技成為 Nutanix 授權台灣經銷商**

iThome 報導，鵬昌數位科技正式成為 Nutanix 在台灣的授權經銷商。

**參考來源:** [朋昶數位科技正式成為 Nutanix 台灣代理商 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE5fUzRNZUxna3dYVWtPdTNrOUpud3BfZWs2UzM1RlpYdlJ3QWcwaFpYMXNqMlFQWUtHUlBpRE1xQkcyMzl1Y1ZVNWwtNA?oc=5>) 

---

📌 **上証科技與 PetaCom 簽訂台灣總代理協議**

iThome 報導，上証科技與 PetaCom 正式簽訂台灣總代理協議。

**參考來源:** [宸上科技攜手朔宇科技（PetaCom）正式簽署台灣區代理合約 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE11MGotdzNKNk4tRUdhem1JRml0VzRGbmhqaldWbXctazBFS285Mm1Yak9aMDZNb1pZaEZyN1ZwY1lFMG5yb2FGbkVOUQ?oc=5>) 

---

📌 **文化大學遷址臺中並推動舊有系統更替，揭露文件系統遷移經驗**

iThome報導，文化大學因應2024年舊有系統更替計畫遷址臺中，並公開其文件系統遷移經驗。

**參考來源:** [24 年系統汰舊換新 文化大學前進台中 揭秘公文系統轉換經驗 - iThome](<https://news.google.com/rss/articles/CBMiS0FVX3lxTE1rZjJrN2lqSDZnamlfRU16em1BTzQ4UnRReWpVT2haR1d4Zkw0UFhDYXV6QXh5cERoM2xTWXZoT0VEVFZJU1pwM1hVSQ?oc=5>) 

---

📌 **衛星觀察**

iThome發表標題為「衛星觀察」的報導。

**參考來源:** [衛星觀測 - iThome](<https://news.google.com/rss/articles/CBMidkFVX3lxTFA5T0VLMF82VVB6TUpYejRMZlFIYUNCRUJESDZLNDNYTnVOZWNEdm5VNGJZS3F2U1dOVkRTRnhHaWN1VUs3Vm1aTEN1aHNxQV9rcVJUVVg4ZTdhQURwcmh2VUUySTZRSGVhVGNuWExQSGFfVGh4M2c?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261127-1-1795796762820 -->
