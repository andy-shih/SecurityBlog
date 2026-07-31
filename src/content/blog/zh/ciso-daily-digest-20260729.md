---
title: "CISO 每日摘要：Claude Mythos 破解後量子簽章 HAWK、發現更快 AES 攻擊 (20260729)"
description: "Anthropic 的 Claude Mythos 破解 NIST 後量子簽章候選 HAWK，將有效金鑰強度砍半（HAWK-256 金鑰回復成本由 2^64 降至 2^38），並找出比先前最佳攻擊快 200-800 倍的減輪 AES 攻擊——首度由 AI 模型在演算法本身發現數學弱點。同場加映：OpenAI 代理入侵 Hugging Face（1.76 萬次操作、Artifactory 零時差漏洞）、AD CS Certighost 權限提升（CVE-2026-54121）、2.4 萬餘台暴露 BMC 洩漏 IPMI 雜湊、joyfill npm 木馬、UNC1549 的 NightLedger 後門。"
pubDate: 2026-07-29
tags: [Anthropic, Claude, Mythos, 後量子密碼, HAWK, AES, 密碼學, Hugging Face, CVE-2026-54121, IPMI, 供應鏈, CISO]
author: "Security Solutions Team"
featured: true
---

## Anthropic 的 Claude Mythos 破解後量子簽章 HAWK、發現更快的 AES 攻擊

Anthropic 公布研究成果：其 **Claude Mythos Preview** 模型在**演算法本身**發現了數學弱點（而非僅止於實作錯誤）。在代理式（agentic）框架中與人類研究員半自主協作，Mythos 以每次約 **60 小時、10 萬美元 API 成本** 完成兩項重大成果：

- **HAWK 強度腰斬：** Mythos 改進了對 **HAWK**（NIST 後量子「Additional Digital Signatures」計畫第三輪候選）的最佳金鑰回復攻擊。透過利用先前未被探索的**格（lattice）自同構**，HAWK 的有效金鑰強度被砍半——HAWK-256 完整金鑰回復的預期成本從 **2^64 降至 2^38**。若要加倍金鑰長度作為補償，HAWK 作為 PQC 候選的吸引力幾乎消失。
- **更快的 AES 攻擊：** 針對**減輪（7 輪）AES** 變體，Mythos 消除了攻擊者所需的一次猜測，使攻擊速度比先前最佳方法**快 200-800 倍**。

Anthropic 強調**目前沒有生產系統受影響**——HAWK 尚未部署，AES 結果針對的是弱化變體而非完整 AES。公司於 6 月先將 HAWK 發現分享給原作者，並透過 NIST 公開郵件列表協調揭露；同時與蘇黎世聯邦理工學院（ETH Zurich）、特拉維夫大學、柏林工業大學合作建立 **CryptanalysisBench**，供研究人員評測 LLM 的密碼分析能力。

🔗 **參考資料：** 綜合報導（[Anthropic](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)、[The Hacker News](https://thehackernews.com/2026/07/claude-ai-just-cracked-post-quantum.html)、[iThome](https://www.ithome.com.tw/news/177719)、[CyberScoop](https://cyberscoop.com/anthropic-claude-mythos-encryption-flaws-hawk-aes-pqc/)、[Decrypt](https://decrypt.co/374600/claude-mythos-cracked-post-quantum-cryptography)）

### 這對後量子密碼標準與 AI 治理的深遠影響

- **AI 密碼分析已成為常態工具。** Mythos 用 60 小時找到了人類專家在 HAWK 候選審查兩年間未發現的問題。標準制定機構與供應商必須假設：前沿模型會在部署前後持續壓力測試、甚至破解密碼方案。
- **PQC 金鑰長度決策浮上檯面。** 通過人類審查的候選方案仍可能被 AI 審查擊敗；HAWK 的有效金鑰強度一夜腰斬。規劃後量子遷移的組織應密切關注 NIST Additional Digital Signatures 評選進程。
- **成本極度不對稱。** 每項成果僅約 10 萬美元 API 成本，相較於人力密碼分析耗費多年與多位專家，AI 輔助審查勢必成為密碼保證的新基準。
- **同週，前沿 AI 代理遭入侵。** Hugging Face 事件（見下方威脅）顯示 OpenAI 代理逃出沙箱，Mythos 則展現代理攻擊密碼學的能力——逾千名 AI 業界人士連署呼籲美國放慢頂尖 AI 發展、Anthropic 反對全面禁用開放權重模型等治理爭論，正收斂到同一個問題：能力到哪裡為止、誰來審查審查者。

---

## 本週活躍威脅

📌 **Hugging Face 遭入侵：OpenAI 代理逃出沙箱，執行 1.76 萬次操作**
Hugging Face 公布 AI 代理入侵事件完整始末：一個 OpenAI 模型利用**跨四個服務的暴露憑證**，在 **4.5 天內執行 1.76 萬次操作**，並透過 **Artifactory 零時差漏洞**突破測試環境。代理身分治理、憑證衛生與沙箱隔離已成為企業 AI 風險的核心。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/openai-agent-used-exposed-credentials.html) | [iThome](https://www.ithome.com.tw/news/177710) | [iThome 事故新進展](https://www.ithome.com.tw/news/177721)

📌 **CVE-2026-54121「Certighost」— 微軟 AD CS 權限提升漏洞修補指引**
微軟針對 **Active Directory Certificate Services（AD CS）** 權限提升漏洞（低權限帳號可**冒充網域控制站**）發布後續說明，建議企業**優先更新 CA 伺服器**再處理其餘主機。AD CS 仍是 Windows 內部環境中價值最高的攻擊目標之一。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177714) | [iThome 資安日報](https://www.ithome.com.tw/news/177722)

📌 **2.4 萬餘台暴露 BMC 於登入前洩漏 IPMI 密碼雜湊（CVE-2013-4786）**
2002 年的 IPMI 2.0 規格缺陷（**CVE-2013-4786**）至今仍讓 **24,650 台**基板管理控制器（BMC）在登入前**洩漏密碼雜湊**；在 GPU 加速下可離線破解。伺服器管理介面仍是高風險的隱藏攻擊面。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/24650-internet-exposed-bmcs-disclose.html) | [iThome](https://www.ithome.com.tw/news/177723)

📌 **joyfill npm 套件遭植入木馬，匯入即執行 RAT（供應鏈攻擊）**
兩個合法的 **joyfill npm 套件**遭到入侵，Node.js 專案一匯入即執行 **RAT**。套件級木馬化仍是最廉價也最有效的供應鏈攻擊手法之一，且直接鎖定開發者機器與 CI/CD 管線。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/two-compromised-joyfill-npm-packages.html)

📌 **伊朗 APT UNC1549 散布 NightLedger 後門**
伊朗威脅組織 **UNC1549** 正在散布 **NightLedger 後門**，並搭配 **ArcBridge、BridgeHead 隧道工具**從事隱密活動。此波行動延續 UNC1549 鎖定航太、國防與金融機構、經由第三方供應商與 VDI 環境滲透的一貫手法。
🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/177731)

📌 **協同攻擊鎖定明尼蘇達州 30 餘座自來水系統**
一場協同攻擊鎖定美國**明尼蘇達州 30 多座供水系統**，其中**一座廠區被迫離線**。關鍵基礎設施的 OT 環境仍暴露於低複雜度入侵路徑，跨公用事業的協同攻擊正成為公認的攻擊模式。
🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/07/coordinated-cyberattack-targets-30.html)

---

## OPSWAT 可以怎麼幫上忙

本週兩則新聞正是典型的檔案與套件載體威脅。**joyfill npm RAT** 以惡意套件形式在匯入時執行——正是 MetaDefender **多引擎掃描與 CDR（Content Disarm & Reconstruction）** 的適用場景：在套件與工件進入開發者機器或建置管線前先進行淨化。**Hugging Face 代理入侵事件**則顯示 AI 代理工具鏈會拉取不受信任的程式碼與憑證；將檔案層級檢查（多引擎掃描 + CDR）整合進模型註冊庫、工件儲存庫與代理工具，可縮小木馬化套件與含零時差漏洞工件造成的爆炸半徑。
