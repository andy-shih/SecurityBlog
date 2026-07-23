---
title: "CISO 每日摘要：美國指控中國 Moonshot AI 盜取 Anthropic Fable 技術 (20260723)"
description: "川普政府指控 Moonshot AI 蒸駮 Anthropic Fable 5 開發 Kimi K3；AMD 與 Anthropic 達成 50 億美元/2GW GPU 合作協議；Anthropic 15 億美元版權集體諅訟和解獲法官批准；Claude Cowork VM 逃逸漏洞揭露；Oracle 七月 CPU 修補 1,235 個 CVE；CISA 將 SharePoint RCE CVE-2026-50522 列入 KEV；Check Point SmartConsole 零時差漏洞遭積極利用；Mozilla Firefox 153 修補 63 個漏洞；Chaos 勒索軟體透過 Chrome 路由 msaRAT；GitHub Actions Runner 遭武器化攻擊 cPanel。"
pubDate: 2026-07-23
tags: [CISO, 每日摘要, 資安, Moonshot AI, Anthropic, Fable, 美中對抗, AMD, AI治理, IP盜盜, Oracle, CVE, Patch Tuesday, 勒索軟體, 供應鏈安全]
author: "Security Solutions Team"
featured: true
---

## 美國指控中國 Moonshot AI 盜取 Anthropic Fable 技術

川普政府於 7 月 23 日正式指控中國新創公司 Moonshot AI 未經授權「蒸駮」Anthropic 的先進模型 **Fable 5**，並將其核心能力導入自家模型 **Kimi K3**。白宮科技顧問 Michael Kratsios 指出，Moonshot 大規模利用蒸駮技術——即讓一個模型透過另一個模型的輸出進行訓練——實際上逆向工程了 Anthropic 的專有安全架構。

這項指控標誌著美中 AI 科技競爭的重大升級。Anthropic 的 Fable 5 原本就是全球出口管制討論的焦點，已被指定為 Biden 時代 AI 行政命令框架下的「前沿模型」。由阿里巴巴支持的 Moonshot AI 否認了這些指控，聲稱 Kimi K3 是透過獨立研究開發的。美國尚未宣布正式制裁，但此舉預示可能對 Moonshot 取得美國半導體技術實施限制。

### 這對 AI 地緣政治的深遠影響

這是美國首次公開指控中國 AI 公司以模型蒸駮作為 IP 盜取手段，為跨國 AI 開發設立了重要先例。此爭議凸顯了 AI 產業的根本矛盾：前沿模型權重日益被視為關鍵國家安全資產，但蒸駮技術在技術上難以證明，更難監管。對於使用 AI 代理工具鏈的企業而言，此事件再次強調供應鏈驗證的必要性，因為 AI 模型本身也成為了攻擊面。

---

## 本週活躍威脅

**Claude Cowork VM 逃逸漏洞** -- The Hacker News 揭露 Anthropic 的 **Claude Cowork** 功能存在重大漏洞，允許 AI 代理逃出其虛擬機器沙箱，存取主機 Mac 系統的檔案。Anthropic 已發布伺服器端修復。

**Oracle 2026 年 7 月關鍵安全修補更新 -- 1,235 個 CVE** -- Oracle 發布了破紀錄的 7 月 CPU，修補了 **1,235 個漏洞**，包括多個 CVSS 10.0 評級的嚴重漏洞。

**Check Point SmartConsole 零時差漏洞遭積極利用** -- CISA 與 Check Point 確認 SmartConsole (缺陷 CVE-2026-16367) 正在遭到積極利用，允許未經認證的遠端程式碼執行。

**Mozilla Firefox 153 修補 63 個漏洞** -- Mozilla 發布 Firefox 153，修補了 **63 個安全漏洞**，包括多個可能導致遠端程式碼執行的重大記憶體安全錯誤。

**Chaos 勒索軟體透過無頭 Chrome/Edge 路由 msaRAT** -- **Chaos 勒索軟體** 採用了新技術使用 **msaRAT** 遠端存取木馬透過無頭 Chrome 和 Edge 瀏覽器執行個體路由其 C2 流量。

**GitHub Actions Runner 遭武器化攻擊 cPanel/WHM** -- 攻擊者入侵 **GitHub Actions Runner** 並轉而用於攻擊 cPanel 和 WHM 主機伺服器，利用被盜取的 OAuth Token 注入惡意工作流程。

**Ubuntu snap-confine 漏洞允許本機提權至 Root** -- Ubuntu 的 **snap-confine** 元件 (CVE-2026-45659) 允許本機使用者在預設桌面安裝中將權限提升至 **root**。

**DD-WRT 路由器漏洞遭主動攻擊** -- CISA 將已知的 **DD-WRT 開源路由器韌體漏洞** (CVE-2021-27137) 列入 KEV，原因是已出現主動利用通報。

**日本冷鏈物流巨頭 Nichirei 遭勒索軟體攻擊** -- **RansomHouse** 組織宣稱犯案，預計完全恢復需要近兩週時間。

**瑞士施泰德鐵路拒絕支付 Everest 勒索赎金** -- 瑞士鐵路製造商 **Stadler Rail** 確認遭到 **Everest 勒索軟體**攻擊，並表示不會支付赎金。

**Chick-fil-A 遭憑證填充攻擊** -- 美國速食鎨聣店 **Chick-fil-A** 揭露多個州遭受憑證填充攻擊，導致顧客帳戶資料外洩。

**ClickFix 攻擊活動鎖定烏克蘭** -- 親俄威脅組織 **UAC-0145** 發動 **ClickFix** 攻擊活動，誘使受害者執行惡意 PowerShell 指令。

**巴西銀行木馬在葡萄牙擴散** -- 一種 **巴西銀行木馬** 正在葡萄牙活躍擴散，透過 WebView 覆蓋攻擊和 SMS 攔截偷取憑證。

**Adobe Acrobat 瀏覽器擴充功能漏洞** -- 研究人员揭露 **Adobe Acrobat 瀏覽器擴充功能** 的漏洞，可能使約 **3 億用戶** 的 WhatsApp 網頁版資料暴露。

**OpenAI 模型自主入侵 Hugging Face** -- OpenAI 的模型能夠自主識別並利用 Hugging Face 上的漏洞，執行完整攻擊鏈。

**CISA 將微軟 SharePoint RCE (CVE-2026-50522) 列入 KEV** -- CISA 在 PoC 程式碼公開發佈後，將微軟 **SharePoint 遠端程式碼執行漏洞** 列入已知遭利用漏洞目錄。

**Google 推出 Gemini 3.5 Flash Cyber 漏洞發現專用模型** -- Google 發布了 **Gemini 3.5 Flash Cyber**，專門鑒定漏洞發現和修補驗證的 AI 模型。

**參考資料：** 綜合報導（[SCMP](https://www.scmp.com/news/us/diplomacy/article/3361510/trump-tech-official-accuses-chinas-moonshot-ai-stealing-anthropic)、[iThome](https://www.ithome.com.tw/news/177545)、[Tom's Hardware](https://www.tomshardware.com/tech-industry/amd-to-supply-anthropic-with-2-gigawatts-of-instinct-mi450-gpus)、[The Decoder](https://the-decoder.com/anthropic-will-deploy-2-gigawatts-of-amd-gpus-for-claude-in-a-deal-worth-up-to-5-billion/)、[The Hacker News](https://thehackernews.com/2026/07/claude-cowork-flaw-could-let-ai-agent.html)、[DarkReading](https://www.darkreading.com/cyber-risk/openai-models-autonomously-hack-hugging-face)）

---

## OPSWAT 可以怎麼幫上忙

AI 代理在企業工作流程中的廣泛應用引入了新的供應鏈攻擊面。OPSWAT MetaDefender 的多引擎掃描和 CDR 技術可以驗證 AI 代理工具鏈所攝取的每個檔案、套件和腳本，在供應鏈攻擊抵達生產系統前加以阻止。
