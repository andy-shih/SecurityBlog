---
title: "CISO 每日摘要：Mythos 5 恢復可用，Claude 登陸 Azure Foundry，Meta 封鎖競爭對手 AI (20260630)"
description: "美國政府部分解除 Anthropic Mythos 5 出口管制；Claude 正式在 Microsoft Azure Foundry 上線；Meta 禁止員工使用 Claude Code 與 Codex 以防訓練資料外流；FortiBleed 大規模 Fortinet 防火牆憑證竊取行動；SimpleHelp CVE-2026-48558 滿分漏洞遭實際攻擊部署 TaskWeaver 與 Djinn 竊密軟體；GuardFall 揭露 AI 程式碼代理面臨 shell 注入風險；282 款 iOS AI 應用程式洩露 API 金鑰；中國關聯 USB 惡意軟體入侵日本軍事網路近一年；KDDI 資料外洩 1,422 萬筆用戶資料；Edge StegoAd 惡意擴充套件活動移除 119 個套件；Cordyceps CI/CD 供應鏈風險；Oracle PeopleSoft 漏洞影響日產汽車與美國監管機構。"
pubDate: 2026-06-30
tags: [CISO, 每日摘要, 資安, 威脅情資, Anthropic, Mythos-5, AI治理, 漏洞, 供應鏈, 惡意軟體, FortiBleed, Apple, Oracle, iOS]
author: "Security Solutions Team"
featured: true
---

## Mythos 5 恢復可用，Claude 擴展至 Azure Foundry，Meta 封鎖競爭對手 AI

Anthropic 的 Fable 5/Mythos 5 事件在 6 月 30 日進入新階段。美國政府部分解除對 Claude Mythos 5 的出口管制，目前允許逾 100 家政府與企業組織存取該模型——但 Claude Fable 5 仍受限制，尚無恢復時間表（[iThome](https://www.ithome.com.tw/news/176921)、[CA.gov](https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/)）。

與此同時，Anthropic 加速商業化佈局：

- **Claude 在 Microsoft Azure Foundry 上線：** Claude 模型現已正式在 Microsoft Foundry 上線，由 NVIDIA GB300 Blackwell Ultra 系統驅動，大幅擴展企業透過 Azure 生態系統的存取管道（[Tech Wire Asia](https://techwireasia.com/2026/06/anthropic-claude-microsoft-foundry-azure/)）。

- **Meta 封鎖 Claude Code 與 Codex：** Meta 禁止員工使用 Anthropic 的 Claude Code 與 GitHub 的 Codex 程式碼輔助工具，防止競爭對手 AI 存取其專屬訓練資料。此舉凸顯 AI 開發工具市場日益激烈的競爭態勢（[The Decoder](https://the-decoder.com/meta-restricts-use-of-claude-code-and-codex-to-keep-rival-ai-out-of-its-training-data/)）。

- **加州合作協議正式簽署：** 紐森州長簽署首創協議，以五折價格提供 Claude AI 工具予加州政府機構。《華盛頓郵報》與 StateScoop 將此協議視為州級 AI 採購的參考範本（[Washington Post](https://www.washingtonpost.com/technology/2026/06/30/newsom-bets-california-government-on-trump-scrutinized-anthropic-ai/)、[State Scoop](https://statescoop.com/california-agencies-get-access-to-anthropics-ai-tools-at-half-price/)）。

### 這對 AI 治理的深遠影響

Mythos 5 出口管制放寬、Claude 在 Azure 上線，以及重要州政府合作協議同時發生，顯示 AI 治理 debate 正從限制轉向實際部署。Meta 禁止競爭對手 AI 存取訓練資料的決策，則展示了企業 AI 採購中日益激烈的競爭動態——企業不僅限制使用哪些模型，也限制開發者工具能從哪些資料學習。

---

## 本週活躍威脅

📌 **FortiBleed — 大規模 Fortinet 設備憑證竊取行動** — TWCERT 發布預警指出，名為「FortiBleed」的大規模憑證竊取行動正針對企業 Fortinet 防火牆與 VPN 設備。攻擊者從漏洞設備中提取憑證、連線 Token 與 VPN 設定資料，可能導致持續性網路存取權限落入攻擊者手中。建議使用 Fortinet 設備的組織立即審查未經授權的存取紀錄。
🔗 **參考資料：** [TWCERT](https://www.twcert.org.tw/tw/cp-104-11013-7c866-1.html)

📌 **SimpleHelp CVE-2026-48558 滿分漏洞已遭實際攻擊** — 攻擊者正積極利用 SimpleHelp 遠端監控與管理軟體的重大漏洞（CVSS 10.0），部署 TaskWeaver 遠端存取木馬與鎖定雲端及 AI 憑證的 Djinn 資訊竊取器。CISA 已確認該漏洞在野外遭實際利用。SimpleHelp 的滿分嚴重度評分（10.0）使其成為當前最嚴重的遠端存取漏洞之一（[iThome](https://www.ithome.com.tw/news/176961)、[THN](https://thehackernews.com/2026/06/attackers-exploit-simplehelp-cve-2026.html)）。

📌 **GuardFall — AI 程式碼代理面臨 shell 注入風險** — 研究人員揭露 GuardFall 漏洞類型，影響 Cursor、Cody、Continue、Aider 等開源 AI 程式碼代理工具。該攻擊利用數十年前已知的 shell 注入技術——現代 AI 程式碼工具在執行 LLM 生成的 shell 指令時未能進行適當的輸入淨化，重新引入了這些舊有風險。這對日益普及的 AI 代理程式碼生成與執行實務構成嚴重威脅（[THN](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html)）。

📌 **282 款 iOS AI 應用程式洩露 API 金鑰** — 一項網路流量研究發現 282 款使用 AI/LLM 功能的 iOS 應用程式在未加密的網路流量中洩露 API 金鑰與 OpenAI 代理存取權限。這項發現凸顯了 AI 功能採用速度與安全 API 憑證管理之間的巨大差距（[THN](https://thehackernews.com/2026/06/282-ios-apps-found-leaking-llm-api-keys.html)）。

📌 **Oracle PeopleSoft 漏洞影響日產汽車與美國聯邦監管機構** — 日產汽車（Nissan）與美國保險監管協會（NAIC）皆確認 Oracle PeopleSoft 系統因 CVE-2026-35273 漏洞遭駭客入侵。日產美洲分公司員工資料外洩；NAIC 的保險業監管資料亦遭曝光。Oracle E-Business Suite CVE-2026-46817 亦在獨立攻擊活動中遭積極利用（[iThome](https://www.ithome.com.tw/news/176980)、[iThome](https://www.ithome.com.tw/news/176973)）。

📌 **中國關聯 USB 惡意軟體入侵日本軍事網路近一年** — Bitdefender 報告指出，攜帶中國關聯惡意軟體的 USB 隨身碟入侵日本軍事與國防承包商網路長達約 12 個月。該攻擊活動由中國網路間諜組織發動，透過跨越氣密隔離的 USB 傳播方式入侵隔離網路，竊取敏感國防資料（[Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/usb-drives-carrying-china-linked-malware-infected-japanese-military-networks-for-nearly-a-year)）。

📌 **KDDI 資料外洩 — 1,422 萬日本 ISP 用戶資料曝光** — 日本 ISP 提供商 KDDI 發生大規模資料外洩事件，1,422 萬名用戶的個人資料（姓名、地址、帳戶資訊）遭到曝光。此事件為日本史上最大規模的 ISP 資料外洩之一（[xakep](https://xakep.ru/2026/06/30/kddi-hack/)）。

📌 **Edge StegoAd 惡意擴充套件活動 — 119 個套件影響 260 萬用戶** — Microsoft 移除 119 個使用隱寫術將惡意程式碼藏匿於圖片與字型檔案的 Edge 惡意擴充套件。該活動持續超過兩年，結合廣告詐欺與憑證竊取，影響高達 260 萬用戶（[iThome](https://www.ithome.com.tw/news/176966)）。

📌 **Cordyceps — GitHub Actions CI/CD 供應鏈風險** — 研究人員揭露「Cordyceps」CI/CD 供應鏈漏洞，GitHub Actions 流程可能透過留言、PR、分支名稱或流程產物中的未受信任外部輸入遭挾持。攻擊者可竊取憑證並危害開源軟體發布流程（[iThome](https://www.ithome.com.tw/news/176978)）。

📌 **Oracle PeopleSoft 漏洞影響日產汽車與美國聯邦監管機構** — 日產汽車（Nissan）與美國保險監管協會（NAIC）皆確認 Oracle PeopleSoft 系統因 CVE-2026-35273 漏洞遭駭客 ShinyHunters 入侵。日產美洲分公司員工資料外洩；NAIC 的保險業監管資料亦遭曝光（[iThome](https://www.ithome.com.tw/news/176980)、[iThome](https://www.ithome.com.tw/news/176973)）。

📌 **DirtyClone Linux 核心本機權限提升漏洞（CVE-2026-43503, CVSS 8.8）** — JFrog 揭露 DirtyClone 是 DirtyFrag 核心漏洞的新變種，允許持有 CAP_NET_ADMIN 權限的本地使用者（常可透過非特權使用者命名空間取得）提升至 root 權限。影響 Debian、Ubuntu 與 Fedora 系統（[iThome](https://www.ithome.com.tw/news/176913)）。

🔗 **參考資料：** 綜合報導（[TWCERT](https://www.twcert.org.tw/tw/cp-104-11013-7c866-1.html)、[THN](https://thehackernews.com/2026/06/attackers-exploit-simplehelp-cve-2026.html)、[THN](https://thehackernews.com/2026/06/guardfall-exposes-open-source-ai-coding.html)、[iThome](https://www.ithome.com.tw/news/176966)、[Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/usb-drives-carrying-china-linked-malware-infected-japanese-military-networks-for-nearly-a-year)、[xakep](https://xakep.ru/2026/06/30/kddi-hack/)）

---

## OPSWAT 可以怎麼幫上忙

FortiBleed 憑證竊取、USB 隨身碟惡意軟體入侵日本軍事氣密網路、SimpleHelp 遠端存取漏洞遭利用、Cordyceps CI/CD 供應鏈風險，以及 Edge 擴充套件隱寫術攻擊——這些事件都凸顯了在每個進入點進行多層檔案層級防禦的必要性。OPSWAT MetaDefender 透過 30+ 防毒引擎多重掃描與深度內容 Disarm 及重構（CDR）技術，在 USB 隨身碟、軟體套件、電子郵件附件、瀏覽器下載檔案到達端點前進行檢查與淨化。MetaDefender Cloud 可整合至 CI/CD 管線中，掃描第三方相依套件與容器映像檔中的隱藏酬載。對於 OT/ICS 環境，MetaDefender Kiosk 可在氣密隔離邊界提供實體媒體檢測。

🔗 **參考資料：** 綜合報導（[iThome](https://www.ithome.com.tw/news/176966)、[Bitdefender](https://www.bitdefender.com/en-us/blog/hotforsecurity/usb-drives-carrying-china-linked-malware-infected-japanese-military-networks-for-nearly-a-year)、[THN](https://thehackernews.com/2026/06/attackers-exploit-simplehelp-cve-2026.html)、[iThome](https://www.ithome.com.tw/news/176978)）
