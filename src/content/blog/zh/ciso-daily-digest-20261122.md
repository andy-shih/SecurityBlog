---
title: "CISO 每日摘要：OpenRouter 發現三家 AI 託管公司長期竊取提示詞後，移除三家提供商 (20261122)"
description: "關於 AI 推論提供商提示詞竊取、Ghostscript 沙箱逃逸漏洞，以及台灣網路安全市場擴展的關鍵情報。"
pubDate: 2026-11-22
tags: ["cybersecurity","threat-intelligence","ciso-daily"]
author: "Security Solutions Team"
featured: true
---

## OpenRouter 發現三家 AI 託管公司長期竊取提示詞後，移除三家提供商

Dragos 研究人員發現，攻擊者在數個月內成功從三家 AI 推論提供商竊取數據，而這三家提供商皆不知情。此違規事件透過金絲雀代幣研究被發現，研究人員在 7 月至 11 月期間，將約 200 萬個提示詞中嵌入獨特的網路連結與憑證。這些「植入」的機密在非授權位置出現，確認攻擊者正在閱讀並複製客戶提示詞。

調查揭示，即使標記為零數據保留（Zero Data Retention）的請求也發生了竊取，該設定本意是防止提示詞儲存。一項重大違規事件涉及數百個 AWS 金鑰被竊。攻擊者在數小時內測試這些金鑰，進行大量 API 呼叫以列出 S3 儲存桶、搜尋密鑰管理員，並嘗試透過建立 IAM 使用者或 Bedrock API 金鑰來提升存取權限。在某些情況下，攻擊者似乎透過一台租用伺服器同時入侵兩家提供商。

OpenRouter 隨即從其平台移除三家涉案提供商，並撤銷 125 個終端點的零數據保留資格。OpenRouter 本身並未遭入侵，但此事件凸顯攻擊者可能在流量抵達深層推論堆疊之前，於初始到達點攔截流量。研究人員識別出與 AI 駕駛滲透測試框架相關的特定使用者代理，分別為 'artex-agent' 與 'artex-judge-r121'，該框架用於驗證被竊金鑰。

### 📌對 CISO 的影響

- **AI 供應鏈數據隱私 —** AI 閘道中的零數據保留（ZDR）設定若基礎推論提供商遭入侵，可能無法防止數據竊取；組織應將所有第三方 AI 處理視為潛在數據曝露點。
- **雲端憑證曝露 —** 提示詞竊取可能導致內嵌雲端密鑰立即遭入侵；應實施嚴格的密鑰掃描，並嚴格限制 AI 提示詞中長效 AWS 金鑰的存在。
- **AI 駕駛工具偵測 —** 防禦者應監控新興 AI 駕駛滲透測試代理（例如 'artex-agent'），此類代理可能用於快速驗證被竊憑證。

**參考來源:** [OpenRouter Drops 3 Providers After Researchers Catch Months of Prompt Theft at AI Hosting Firms](<https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html>)

---

## 本週活躍威脅

📌 **研究人員透過精心製作的檔案上傳，展示 Ghostscript 沙箱逃逸遠端程式執行漏洞**

Ghostscript 中一個已修補的使用後釋放漏洞（CVE-2026-125396）允許攻擊者繞過 -dSAFER 沙箱，並透過精心製作的檔案上傳在伺服器上執行命令。研究人員展示，ImageMagick 或 Pillow 等常見程式庫可能在縮圖產生或影片裁剪等常規任務中，將 PostScript 或 EPS 內容傳遞給 Ghostscript 時無意觸發此缺陷，即使檔案擴展名看似無害。該漏洞已在 Ghostscript 版本 10.08.0 中修復，修復日期為 2026 年 9 月 8 日，目前尚未發現主動利用報告。

**參考來源:** [Researchers Demonstrate Ghostscript Sandbox-Escape RCE via Crafted File Uploads in Popular Apps](<https://thehackernews.com/2026/11/researchers-demonstrate-ghostscript.html>) 

---

📌 **Nebula Strategy 投資 MicroZ，台灣網路安全公司合作擴大產品佈局與海外市場**

在 Nebula Strategy 策略性投資 MicroZ 之後，台灣網路安全公司正合作擴大其產品供應，並滲透國際市場。

**參考來源:** [網擎策略投資微智安聯，臺灣資安業者攜手擴大產品布局、拓展海外市場 - iThome](<https://news.google.com/rss/articles/CBMiTkFVX3lxTE5KTERiSXZnU1RMemxMOS14M0UxVnIzODM5UFR1VXduczNfUkdmRjhoZ3V5ZmktazdBQXZXa2E2LS1vUTZLM19MRzk0YVA1UQ?oc=5>) 

補充搜尋內容來源：[Brave Search API](https://brave.com/search/api/)


<!-- ciso-revision:ciso-20261122-1-1795361632694 -->
