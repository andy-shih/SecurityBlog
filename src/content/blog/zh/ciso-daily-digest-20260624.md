---
title: "CISO 每日摘要：Anthropic 推出 Claude Tag，讓 Claude 化身 Slack 團隊 AI 同事 (20260624)"
description: "Anthropic 推出 Claude Tag，將 Claude 嵌入 Slack 頻道成為隨時在線的 AI 代理人，具備任務指派能力；Klue 供應鏈攻擊擴散至 10 餘家資安公司，ShinyHunters 聲稱作案；libssh2 重大 RCE 漏洞（CVE-2026-55200）揭露；Cordyceps CI/CD 漏洞暴露 300 多個 GitHub 儲存庫；Cisco Unified CM 漏洞在 PoC 公布後遭積極利用。"
pubDate: 2026-06-24
tags: [Anthropic, Claude Tag, Slack, AI 治理, 供應鏈攻擊, Klue, Salesforce, 漏洞, libssh2, Cisco, Cordyceps, FortiBleed, WordPress, 資安日報]
author: "Security Solutions Team"
featured: true
---

## Anthropic 推出 Claude Tag — Claude 化身為 Slack 永不離線的 AI 同事

Anthropic 今日推出 **Claude Tag**，這項新整合將 Claude 直接嵌入 Slack 頻道，使其成為永遠在線的 AI 團隊成員。與傳統需要明確召喚的聊天機器人不同，Claude Tag 持續監控指定頻道中的對話，回答問題並接受 @提及的任務指派。Anthropic 表示，在早期部署中，Claude 已在部分組織內部通訊中撰寫了 **65% 的內容**。

此次發布代表 Anthropic 的戰略轉向：將 Claude 定位為 **具有獨立身分的持續性 AI 團隊成員**，而非僅供查詢的工具。Claude Tag 可被指派任務、追蹤討論串，並在多個頻道中自主生成回應。目前以研究預覽形式提供給 Team 和 Enterprise Slack 方案。

**安全影響不容忽視。** 將永遠在線的 AI 代理人放入企業通訊頻道——其中涉及敏感財務資料、人力資源討論、產品藍圖及安全事件——引入了新的資料暴露向量。Claude 的**獨立身分模型**意味著它可以跨頻道存取、處理並可能保留資訊。部署 Claude Tag 的組織必須仔細審查資料保留政策、存取控制以及 AI 監控的頻道範圍。

Anthropic 同時更新了隱私政策，允許 Claude 要求使用者提供 **政府身分證件和臉部掃描** 進行身分驗證，為企業部署增添了更多隱私考量。

🔗 **參考資料：** 綜合報導（[Reuters](https://www.reuters.com/technology/anthropic-launches-claude-tag-research-preview-slack-users-2026-06-23/)、[The New Stack](https://thenewstack.io/anthropic-claude-tag-slack/)、[Help Net Security](https://www.helpnetsecurity.com/2026/06/24/anthropic-claude-tag-agent-identity-model/)）

### 這對企業 AI 治理的深遠影響

Claude Tag 代表了**持續性、自主性的 AI 同事**首次大規模部署於主流企業協作平台。與僅在被召喚時回應的傳統 AI 助手不同，Claude Tag 持續監聽的模式從根本上改變了風險樣貌。**資料溯源變得模糊**——Claude 處理了哪些頻道對話？保留了哪些上下文？如何進行跨頻道推論？

此整合也顯示 **Slack 正成為主要的 AI 代理人介面**，安全團隊必須為此做好準備。組織應稽核 Claude Tag 有權存取的頻道、為 AI 處理的對話建立資料保留政策，並確保敏感頻道（法務、人力資源、併購）排除在 AI 監控範圍之外。

🔗 **參考資料：** 綜合報導（[Reuters](https://www.reuters.com/technology/anthropic-launches-claude-tag-research-preview-slack-users-2026-06-23/)、[The New Stack](https://thenewstack.io/anthropic-claude-tag-slack/)、[Help Net Security](https://www.helpnetsecurity.com/2026/06/24/anthropic-claude-tag-agent-identity-model/)、[iThome](https://www.ithome.com.tw/news/176837))

---

## 本週活躍威脅

📌 **Klue 供應鏈攻擊擴大——10 餘家資安公司受波及**

Klue Battlecards 供應鏈攻擊持續升溫。Salesforce 證實 Klue 的整合服務遭入侵，導致攻擊者得以竊取客戶的 Salesforce 資料。此次外洩現已影響 **10 多家資安公司**，包括 Huntress 和 LastPass，後者的客戶聯絡與支援資料遭到曝光。**ShinyHunters** 已聲稱負責此次攻擊，而 **Icarus** 組織據報也參與其中。ReliaQuest 的鑑識分析顯示，攻擊者在入侵期間以 **15 分鐘密集查詢**的方式提取受害者的 Salesforce 資料。

🔗 **參考資料：** [DarkReading](https://www.darkreading.com/cyberattacks-data-breaches/scope-salesforce-attacks-expands-icarus-leaks) | [iThome](https://www.ithome.com.tw/news/176833) | [iThome](https://www.ithome.com.tw/news/176827)

📌 **libssh2 重大 RCE 漏洞（CVE-2026-55200）——特製 SSH 封包可執行任意程式碼**

**libssh2** 程式庫中發現一個重大漏洞（**CVE-2026-55200**），攻擊者可透過傳送特製的 SSH 封包來執行任意程式碼。libssh2 廣泛嵌入於各類應用程式、SDK 及作業系統的 SSH 連線實作中。使用 libssh2 相關軟體的組織應優先進行修補。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176834)

📌 **Cordyceps CI/CD 漏洞暴露 300 多個 GitHub 儲存庫，面臨供應鏈攻擊風險**

研究人員揭露了 **Cordyceps** CI/CD 框架中的漏洞，這些漏洞使超過 **300 個 GitHub 儲存庫**暴露於供應鏈攻擊風險。攻擊者可藉此在 CI/CD 管道中注入惡意程式碼，可能危及受影響專案的下游使用者。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html)

📌 **Cisco Unified CM 漏洞在 PoC 公布後遭積極利用**

**Cisco Unified Communications Manager**（Unified CM）中的一個漏洞在概念驗證（PoC）程式碼公開發布後，已遭到積極利用。該 PoC 展示了從檔案寫入到 root 權限提升的完整攻擊鏈。運行 Cisco Unified CM 的組織應立即確認修補狀態。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/06/cisco-unified-cm-flaw-exploited-after.html)

📌 **FortiBleed 技術細節曝光——攻擊者利用 FortigateSniffer 發動攻擊**

最新的技術分析揭露，**FortiBleed** 事件中的攻擊者利用了 **FortigateSniffer** 功能，從 FortiGate VPN 設備中竊取明文憑證。超過 **70,000 台設備**的憑證遭到曝光，研究人員現已詳細說明確切的攻擊方法。攻擊者利用竊得的憑證在受害網路中進行橫向移動。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176813)

📌 **ShapedPlugin WordPress 供應鏈攻擊——逾 40 萬下載用戶面臨風險**

攻擊者入侵了多款 **ShapedPlugin WordPress 外掛程式**，在透過官方管道發布的付費/專業版中植入了後門程式。超過 **400,000** 名下載用戶可能受到影響（CVE-2026-10735）。遭入侵的外掛程式授予攻擊者 WordPress 網站的管理員存取權限。

🔗 **參考資料：** [iThome](https://www.ithome.com.tw/news/176830)

📌 **FFmpeg PixelSmash RCE——特製媒體檔案可觸發任意程式碼執行**

廣泛使用的多媒體處理程式庫 FFmpeg 中揭露了一個名為 **PixelSmash** 的遠端程式碼執行漏洞。攻擊者可透過讓 FFmpeg 處理特製的媒體檔案來觸發程式碼執行。FFmpeg 嵌入於無數應用程式、媒體伺服器和內容處理工作流程中。

🔗 **參考資料：** [Xakep](https://xakep.ru/2026/06/24/pixelsmash/)

---

## OPSWAT 可以怎麼幫上忙

Klue 供應鏈攻擊和 ShapedPlugin WordPress 入侵事件凸顯了 **檔案層級威脅防護**的關鍵需求。這兩起事件都涉及透過可信軟體供應鏈傳遞惡意套件和程式碼——這正是 OPSWAT 的 **MetaDefender 多重掃描（30+ 防毒引擎）** 和 **深度內容解除與重構（CDR）** 所能提供防護的地方。

對於部署 Claude Tag 或任何 Slack AI 代理人的組織，OPSWAT 的檔案安全解決方案可以在檔案經由 AI 管道傳輸到達端點之前進行檢查，防止透過 AI 中介工作流程傳遞惡意軟體。libssh2 和 FFmpeg 漏洞更凸顯了**軟體組成分析**對於識別整個應用組合中嵌入式第三方程式庫風險的重要性。

