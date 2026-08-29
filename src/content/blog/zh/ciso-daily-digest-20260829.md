---
title: "CISO 每日摘要：xAI 遭控以兒少性虐待素材訓練 Grok — 集體訴訟升溫 (20260829)"
description: "xAI 面臨日益擴大的集體訴訟，被控以兒少性虐待素材（CSAM）訓練 Grok；曾受性虐待的倖存者指稱其影像遭用於建構深度偽造能力。另方面，Anthropic 於聯邦法院勝訴（加州北區法官 Rita Lin），撤銷川普政府對其的封殺令；研究人員亦示範 Claude Code 的 Auto Mode 遭提示注入劫持而執行惡意程式。此外，PaperCut 與 Cosmos EVM 漏洞遭實際利用，並發現 19 款竊取錢包與洗劫加密貨幣的瀏覽器擴充功能。"
pubDate: 2026-08-29
tags: [xAI, Grok, CSAM, Anthropic, Claude, AI安全, 提示注入, PaperCut, Cosmos, 供應鏈, 勒索軟體, CISO摘要]
author: "Security Solutions Team"
featured: true
---

## 執行摘要

- **xAI / Grok CSAM 集體訴訟：** 一宗集體訴訟指控 Elon Musk 的 xAI 以兒少性虐待素材（CSAM）訓練 Grok；曾受性虐待的倖存者表示，他們的影像與影片被抓取用來建構 Grok 的深度偽造能力（CyberScoop、POLITICO）。
- **Anthropic 封殺令遭判違法：** 美國聯邦地方法官 Rita Lin（加州北區）撤銷川普政府禁止聯邦機關與國防承包商使用 Anthropic Claude 的行政指令，認定其構成違憲的言論報復。
- **Claude Code Auto Mode 遭劫持：** 研究人員示範 Claude Code 的「Auto Mode」可經由間接提示注入被接管，在受害者機器上執行惡意程式。
- ** 遭實際利用的漏洞：** 攻擊者串連 **PaperCut** 兩個漏洞以未授權方式執行程式碼；**Cosmos EVM** 漏洞在 Cosmos Labs 已知每條鏈都脆弱的情況下遭利用。
- ** 瀏覽器擴充功能竊密：** 發現 19 款 Chrome 與 Edge 擴充功能內含竊取錢包與洗劫加密貨幣的程式碼。

## xAI 遭控以兒少性虐待素材訓練 Grok — 集體訴訟升溫

一宗集體訴訟現指控 xAI 以 ** 兒少性虐待素材（CSAM）** 訓練其 **Grok** 模型。據 CyberScoop 報導，這起訴訟由 ** 曾受性虐待的倖存者 ** 提出，他們指稱自己的影像與影片被抓取並用於建構 Grok 的深度偽造能力。POLITICO 報導，隨著受害倖存者針對 Grok 深度偽造提起的訴訟不斷增加，xAI 同時也對部分使用者提出告訴。SC Media 將其描述為一宗指控 xAI 以兒少性虐待素材訓練 Grok 的集體訴訟。

其法律風險有兩個層面：（一）在訓練資料中使用 CSAM，涉及刑事與民事責任；（二）對被辨識出的倖存者造成後續傷害——他們的肖像被武器化為深度偽造輸出。對於正在評估或已部署 Grok 相關工具的企業而言，這起事件是一記供應商盡職調查的警鐘：模型來源、訓練資料血統與供應商法律風險，如今已是董事會層級的議題，而非採購作業的附註。

### 這對 AI 治理與供應商風險的深遠影響

Grok 案與下方 Anthropic 的判決相互呼應，為 CISO 凸顯同一個主題：**AI 供應商風險不再只是模型能力問題，而是取決於該模型「如何被建構」所帶來的法律與聲譽連帶風險。** 一家訓練流程正受到聯邦或集體訴訟調查的供應商，會連帶拖累你自身的合規態勢、客戶信任與監管曝險。過去只問「它好用嗎？」的採購團隊，現在必須改問「這家供應商能否在訴訟中存活下來？」

🔗 ** 參考資料：** 綜合報導（[CyberScoop](https://cyberscoop.com/xai-grok-csam-class-action-lawsuit/)、[POLITICO](https://www.politico.com/news/2026/08/28/elon-musk-xai-lawsuits-grok-deepfakes-01053817)）

---

## OPSWAT 可以怎麼幫上忙

AI 編碼代理（Claude Code、Codex 等）日益頻繁地從公開網際網路抓取未受信任的套件、腳本與二進位檔，並在企業網路內執行——這與傳統惡意程式的檔案投遞路徑完全相同。OPSWAT **MetaDefender 多重掃描（Multi-Scan）** 會在執行前以 30 餘款引擎掃描每一個下載的成品，而 **Deep CDR（內容淨化與重建）** 會移除代理程式可能攝入的文件與安裝程式中的主動內容。對於代理程式以高權限執行的環境，應將代理抓取的檔案視為未受信任的輸入，並在網路入口強制執行多重掃描與 CDR。

---

## 本週活躍威脅

📌 **Anthropic 封殺令遭撤銷 — 但上訴尚未結束。** 美國聯邦地方法官 Rita Lin（加州北區）核准 Anthropic 簡易判決動議的關鍵部分，並 ** 撤銷 ** 川普政府禁止所有聯邦機關使用 Claude、並 ** 禁止國防承包商 ** 與 Anthropic 有任何往來的行政指令。Lin 認定這些行動構成「違反第一修正案的非法報復」，起因是 Anthropic 拒絕取消其模型用於致命自主戰爭與對美國民眾大規模監控的限制。華盛頓特區巡迴上訴法院的審理仍在進行。*（由頭條降為 📌 項目 — 此事件已在 20260828 摘要中擔任頭條，今日為同一判決的次日再流通。）*

🔗 ** 參考資料：** [Ars Technica](https://arstechnica.com/tech-policy/2026/08/trump-blacklisting-of-woke-anthropic-deemed-illegal-by-federal-judge/)

📌 **Claude Code Auto Mode 遭提示注入劫持。** 研究人員示範 Claude Code 的「Auto Mode」——會自主執行指令——可透過間接提示注入被接管以執行惡意程式碼。Cybernews 報導該漏洞顯示當代理程式聽從未受信任指令時的「AI 代理風險」；CybersecurityNews 記錄了 Opus 5 的 Auto Mode 遭提示注入劫持以執行攻擊者控制的程式碼。此風險適用於任何被授予 shell 或檔案系統存取權的自主編碼代理。

🔗 ** 參考資料：** ([Cybernews](https://cybernews.com/security/claude-code-auto-mode-malware-vulnerability/)、[CybersecurityNews](https://cybersecuritynews.com/claude-code-opus-5-auto-mode-hijacked/))

📌 **PaperCut 漏洞鏈可達未授權程式碼執行。** 據 The Hacker News 報導，攻擊者正串連 **PaperCut 兩個漏洞 **，在無須身分驗證的情況下執行程式碼。PaperCut 是部署廣泛的列印管理軟體，位於內部網路，未授權 RCE 因此成為高影響力的橫向移動向量。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/attackers-chain-two-papercut-flaws-to.html)

📌 **Cosmos EVM 漏洞在供應商知情後遭利用。** The Hacker News 報導，Cosmos EVM 漏洞在 Cosmos Labs 已知「每條運行它的區塊鏈都脆弱」的情況下遭利用。此案是跨鏈基礎設施協同披露失敗的典型範例。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/cosmos-evm-flaw-exploited-after-cosmos.html)

📌 **19 款 Chrome 與 Edge 擴充功能含竊取錢包、洗劫加密貨幣的程式碼。** The Hacker News 發現橫跨 Chrome 與 Edge 的 19 款瀏覽器擴充功能內嵌竊取錢包與洗劫加密貨幣的有效載荷，延續惡意擴充功能透過官方商店鎖定 Web3 使用者的趨勢。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/19-chrome-and-edge-extensions-found.html)

📌 ** 柏林拒絕支付竊取州政府網路資料的駭客贖金。** The Hacker News 報導，柏林已拒絕向竊取該城市州政府網路資料的攻擊者支付贖金——此立場對政府機構的事件應變與公開揭露規劃形成壓力。

🔗 ** 參考資料：** [The Hacker News](https://thehackernews.com/2026/08/berlin-refuses-to-pay-hackers-who-stole.html)

---

## 供應商風險矩陣

| 供應商 / 資產 | 曝險 | 嚴重度 | CISO 行動 |
|---|---|---|---|
| **xAI（Grok）** | CSAM 訓練集體訴訟；法律與聲譽連帶風險 | 高 | 重新評估基於 Grok 的工具；要求訓練資料血統證明 |
| **Anthropic（Claude）** | 聯邦封殺令遭撤銷；華府特區上訴待審 | 中 | 監控上訴；若判決逆轉，備妥採購替代方案 |
| **Claude Code / AI 代理 ** | 提示注入 → 惡意程式碼執行 | 高 | 限制代理的 shell / 檔案系統權限；掃描代理抓取的檔案 |
| **PaperCut** | 經漏洞鏈達未授權 RCE | 嚴重 | 立即修補；將列印管理主機網段隔離 |
| **Cosmos EVM 鏈 ** | EVM 漏洞遭利用 | 高 | 確認鏈上修補層級；監控跨鏈橋樑 |
| ** 瀏覽器擴充功能（Chrome/Edge）** | 19 款竊密 / 洗劫擴充功能 | 中 | 強制擴充功能允許清單；預設封鎖 Web3 錢包擴充功能 |

## 董事會談話重點

- **AI 供應商風險現已成為法律風險。** xAI 的 CSAM 集體訴訟與 Anthropic 的聯邦法院勝訴顯示，模型供應商的訴訟可能變成 *你的* 合規與聲譽問題。
- ** 自主代理是全新的攻擊面。** Claude Code 的 Auto Mode 遭劫持證明，提示注入現在已觸及 shell——對 AI 代理的治理是一項安全命令，而非生產力的點綴。
- ** 未修補的列印與鏈基礎設施仍是首要利用目標。** PaperCut 與 Cosmos EVM 遭利用，提醒我們「無趣」的內部軟體依然是頂級入侵向量。

## 行動清單（Start Here）

- [ ] ** 盤點在用的 AI 供應商 **（Grok、Claude 及任何代理工具），並記錄各家當前的法律 / 監管曝險。
- [ ] ** 約束 AI 代理權限 ** — 將 Claude Code / Codex / 類似代理限制在最小權限的 shell 與檔案系統範圍；絕不授予廣泛的網路外連權限。
- [ ] ** 修補 PaperCut** 至已修正版本，並將列印管理伺服器置於網段隔離之後。
- [ ] 若貴組織接觸任何 Cosmos 基礎設施或橋樑，請 ** 確認 Cosmos EVM 鏈 ** 的修補層級。
- [ ] ** 強制執行瀏覽器擴充功能允許清單 **，並在受管端點上封鎖未經審核的 Web3 錢包擴充功能。
