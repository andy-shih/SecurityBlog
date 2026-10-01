---
title: "CISO 每日摘要：MikroTrick 路由器接管漏洞鏈，全球數百萬暴露設備受威脅 (20260924)"
description: "MikroTik RouterOS 存在漏洞鏈可導致未驗證遠端接管數百萬設備；GitLab 郵件收發權杖讓攻擊者繞過驗證推送程式碼與執行 CI/CD；Windows 惡意程式使用多個 AI 模型投票決定下一步；F5 BIG-IP CVE-2026-94127 堆積溢位；ClickFix 攻擊涉及 1.7 萬多個惡意 URL；MDM 間諜軟體鎖定物流公司。"
pubDate: 2026-09-24
tags: [CISO, 每日摘要, 資安, MikroTik, RouterOS, 遠端代碼執行, 供應鏈, GitLab, CI-CD-洩露, 郵件權杖, 惡意軟體-AI, ClickFix, F5-BIG-IP, 加密採礦, MDM-間諜軟體, 勒索軟體-威脅, CISO-Digest]
author: "Security Solutions Team"
featured: true
---

## MikroTrick 漏洞鏈：MikroTik RouterOS 無需密碼或 SSH 金鑰即可完全接管

資安研究人員揭露了 **MikroTik RouterOS 中一條已利用的漏洞鏈**，攻擊者無需憑證、SSH 金鑰或任何驗證，即可完全控制任何暴露的路由器設備。此漏洞鏈被稱為 **MikroTrick**，它把多個 RouterOS 漏洞串聯起來，直接通往遠端程式碼執行。根據 The Hacker News 報導，此漏洞影響全球約 **260 萬台暴露於公開網際網路的 MikroTik 設備**——其中巴西約 39.9 萬台、印尼約 23 萬台、美國約 14.4 萬台、義大利約 11.4 萬台、印度約 9.7 萬台，臺灣約 1.9 萬台。該漏洞的 **CVSS 嚴重性與主動利用狀況** 使其成為本週最關鍵的威脅之一，更因為 RouterOS 更新在已部署基礎設施中推進緩慢而加劇。**CISA 已將相關 CVE 列入 KEV（已知被利用漏洞）清單**，多個部署在關鍵基礎設施（電信、ISP 與企業分公司）的設備仍處於直接被攻陷與遭橫向移動的風險之中。

### 這如何重塑網路周邊風險

- **數百萬台閘道暴露且無需驗證。** 一個簡單的網路封包即可在 260 萬台公開存取的路由器上觸發程式碼執行；無需使用者互動、無需憑證——只需直接接管設備與它控制的流量。
- **路由器被攻陷可深入受信網路段。** MikroTik 路由器一旦遭控，攻擊者就掌控內部網路路由、DNS 應答、流量檢查與 VPN 終止點，使他們能轉向內部系統、竊取憑證並在閘道位置攔截加密工作階段。
- **漏洞鏈縮短關鍵基礎設施的應變週期。** 當基礎 RouterOS 漏洞已公開時，從揭露到大規模掃描與武器化通常只需數天；在地理位置與組織單位分散的分公司路由器組群上修補需要數週至數月。
- **設備多樣性掩蓋真實足跡。** MikroTik 設備廣泛應用於電信、ISP 與 SOHO 環境；其普及性通常意味著被遺忘在漏洞追蹤系統裡，並在修補窗口期間被落下。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/09/mikrotrick-chain-let-attackers-take.html)）

---

## 本週活躍威脅

📌 **GitLab 郵件收發權杖無需帳號存取即可推送程式碼與執行 CI/CD**
GitLab 新近揭露的漏洞顯示，每位使用者 **自動指派的郵件收發地址內含非過期、高度特權的存取權杖**，可用於推送程式碼、觸發 CI/CD 管道與建立合併請求到該使用者有權限的任何專案——包括私有儲存庫。來自 Aikido Security 的研究員 **Joe Leon** 發現 **glimt（GitLab 郵件收發權杖）前綴在所有公開與私有專案間可重複利用**，若開發者不慎暴露郵件地址（例如在公開 README 檔或 CI 日誌中），攻擊者可修改郵件地址路徑與專案 ID 以觸及其他私有儲存庫。Leon 也驗證他可以 **繞過 IP 位址限制**（該限制原本會阻止網頁瀏覽器或 SSH 存取）只需傳送郵件包含合併請求到受限制的專案即可。在一次「非詳盡」掃描（耗時數小時）中，Leon 輕易找到 **至少 12 個暴露的 GitLab 郵件地址出現在公開文件中**，包括熱門開源專案所有的地址。GitLab 初始在 HackerOne 上關閉該通報並稱為「預期行為」，但稍後在 GitLab 儲存庫建立機密問題。GitLab 最終更新了 UI 以警告使用者郵件地址可用於合併請求，不受 IP 限制影響。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/a-leaked-gitlab-issue-email-address.html) | [Dark Reading](https://www.darkreading.com/application-security/gitlab-email-addresses-supply-chain-attacks)

📌 **Windows 惡意程式 ClosedQuorum 使用多個 AI 模型投票決定下一步攻擊行動**
研究人員發現一個 Windows 惡意軟體樣本 **同時查詢多達 4 個不同的 AI 語言模型（Gemini、DeepSeek、Qwen、Mistral）以決定下一個攻擊步驟**。此惡意軟體被稱為 **ClosedQuorum**，使用投票機制讓多個 AI 模型並行查詢，多數結果決定行動——此技術可能幫助惡意軟體躲過靜態分析偵測，並使其行為更具適應性、難以預測。此發現強調了 AI 的新興用途：不是作為惡意軟體程式碼的生成者，而是作為嵌入主動攻擊鏈內的 **決策神諭**，允許威脅行為者根據系統偵察資料動態調整後滲透劇本，無需重建或重新部署惡意軟體。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/windows-malware-is-built-to-let-up-to.html)

📌 **ClickFix 社交工程攻擊將 1.7 萬多個惡意 URL 變成受信網站陷阱**
安全公司 **CTM360** 已記錄 **ClickFix 社交工程技術** 在 **超過 1.7 萬個 URL** 上被武器化，這些 URL 冒充瀏覽器警告、CAPTCHA 挑戰與系統更新提示。當受害者點擊虛假通知時，該頁面把惡意 Windows 指令複製到他們的剪貼簿，並指示他們把它貼到「執行」對話框，以取得並執行隱藏的負載。ClickFix 透過鎖定已被攻陷的合法網站或在山寨域名上託管假冒誘餌而運作；剪貼簿劫持步驟發生在使用者看到最後的「貼上此指令」指令之前，給予攻擊者一個可靠的方法來注入任意可執行檔。1.7 萬多個 URL 的規模表明一個成熟的攻擊基礎設施，並展示了受信視覺語言（瀏覽器對話框、CAPTCHA 畫面）如何能在規模上被武器化，而無需受害者的技術複雜性。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/17000-urls-reveal-how-clickfix-turns.html)

📌 **企業 MDM 間諜軟體鎖定物流公司，竊取簡訊並轉接電話**
威脅研究人員已識別一個 **被重新用作間諜軟體的行動設備管理（MDM）工具**，被部署於物流和運輸公司以竊取簡訊並把來電轉接到攻擊者控制的號碼。該間諜軟體濫用 **合法 MDM 註冊協定** 以在 Android 與 iOS 設備上持久化，然後竊取憑證、攔截通訊並啟用來電轉接——這些能力表明該工具是由具有行動電信信令知識的老練威脅行為者所建造或修改。物流公司是高價值目標，因為他們的行動勞動力與 GPS 追蹤的車輛承載敏感的路線、交付與客戶資訊；被攻陷的設備成為通往供應鏈時機與位置資料的窗口。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/corp-mdm-spyware-targets-logistics.html)

📌 **F5 BIG-IP Access Policy Manager CVE-2026-94127：堆積溢位與關鍵 CVSS 評分**
日本 JPCERT/CC 已發出 **CVE-2026-94127** 警示，此為 **F5 BIG-IP Access Policy Manager 中的堆積溢位漏洞**，影響多個版本。該漏洞允許未驗證的遠端攻擊者在受影響系統上以提升的權限執行任意程式碼。BIG-IP 設備通常作為企業網路與雲端環境中的關鍵驗證、授權與原則執行點；BIG-IP 執行個體的被攻陷會讓攻擊者取得可信位置進入周邊防禦內部，並存取下游資源的工作階段權杖。JPCERT 警示標誌著主動掃描與潛在利用嘗試。
🔗 **參考資料：** [JPCERT/CC](https://www.jpcert.or.jp/at/2026/at260028.html)

📌 **攻擊者利用 AI 聊天機器人進行大規模虛假資訊與網釣活動**
網路安全研究人員已記錄一場活動，其中攻擊者 **提示注入與操控公開 AI 聊天機器人**——例如 ChatGPT、Claude 及其他——以規模產生令人信服的網釣郵件、社交工程指令碼與虛假資訊內容。透過越獄或利用聊天機器人的指令，攻擊者產生數千個唯一的網釣變體，躲過以靜態模式訓練的郵件過濾器。該活動鎖定金融機構與政府機構；AI 生成內容的使用使歸因困難，規模化卻很簡單，因為攻擊者只需調整提示並重新生成新負載，無需手動工作。
🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/threat-intelligence/attackers-manipulate-ai-chatbots-mass-disinformation-phishing-campaign)

📌 **D-Link RouterOS 設備因 DIR-822A 型號未修補零日漏洞而受影響**
D-Link 已警告 **影響其 DIR-822A 路由器的未修補零日漏洞**，在安全研究人員公開技術分析後揭露該漏洞。該漏洞允許未驗證的遠端攻擊者繞過驗證或達成遠端程式碼執行。D-Link 承認此問題但未提供修補時間表，使已部署的 DIR-822A 設備在現場暴露於主動利用風險。路由器特別吸引攻擊者，因為它們位於網路邊界，通常數年不會進行韌體更新。
🔗 **參考資料：** [Xakep（俄文）](https://xakep.ru/2026/09/23/d-link-0days/)

---

## OPSWAT 可以怎麼幫上忙

本週的威脅聚焦於三個關鍵資料流邊界，其中 **檔案與訊息完整性很重要**。**GitLab 供應鏈暴露** 顯示開發工作流如何被毒化而無需帳號被攻陷——攻擊者透過郵件衍生權杖推送惡意程式碼，該權杖會繞過驗證。**ClickFix 與 MDM 間諜軟體** 展示受信傳遞通道（行動管理、瀏覽器對話框）如何被重新用於注入負載。**MikroTik 路由器被攻陷** 把網路閘道變成加密流量的觀測點。**MetaDefender Multi-Scan** 用 30 多個防毒引擎檢驗進入電子郵件、網頁與 API 上傳的檔案，補足單一簽名解決方案的漏洞。**MetaDefender CDR（內容淨化與重建）** 在文件與壓縮檔到達開發者、CI runner 或建置系統前剝除主動內容——削減被毒化儲存庫與產物的衝擊半徑。**MetaDefender Kiosk** 在分公司邊界與 OT 網路檢查檔案，其中暴露的路由器與過時設備造成最高被攻陷風險。