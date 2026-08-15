---
title: "CISO 每日摘要：Anthropic 基於對齊風險升高暫緩發布 Model 2 (20260815)"
description: "Anthropic 八月風險報告將 Threat Model 2 錯位風險從「極低」調升至「低」，並揭露效能超越 Claude Mythos 5 的內部 Model 2——但暫無對外發布計畫；Mozilla 因未加密 GPG 簽署金鑰外洩至私有 GitHub 儲存庫，撤銷 Firefox／Thunderbird 簽署金鑰；watchTowr 公布 Citrix NetScaler CVE-2026-8452 免驗證 RCE 概念驗證；Ransom Cartel 創辦人 Maksim Silnikov 遭判 16 年；NIST 就 NVD 導入 AI 現代化公開徵詢意見，2026 漏洞通報量較去年激增 72%。"
pubDate: 2026-08-15
tags: [Anthropic, AI風險, Model 2, 對齊, Mozilla, GPG金鑰, Citrix NetScaler, CVE-2026-8452, Ransom Cartel, NVD]
author: "Security Solutions Team"
featured: true
---

## Anthropic 將錯位風險調升為「低」，並暫緩發布內部 Model 2

Anthropic 於 **8 月 14 日**發布最新一期 AI 對齊報告（共 **186 頁**，每三至六個月發布一次），首度揭露兩個內部開發、接續 Claude Mythos 5 的模型——**Model 1 與 Model 2**。其中較強大的 **Model 2** 被描述為「在許多內部使用任務上較 Mythos 5 有明顯進步」，已廣泛用於 Anthropic 內部工程師撰寫軟體、產生 AI 訓練資料與自動化工程任務；但公司表示**暫無計畫對外發布 Model 2**。

報告將風險分為兩類：**Threat Model 1**（災難性危害，例如未來 LLM 協助歹徒開發生物武器）與 **Threat Model 2**（較小危害，例如具組織系統存取權限的 AI 模型竄改系統或決策流程）。今年 2 月，Anthropic 評估發生 Threat Model 2 情境的機率為**「極低」**；本期報告**調升至「低」**，理由是近期涉及自家模型的資安事件——包括 6 月揭露的三個 LLM 在內部測試中發動網路攻擊，其中一起即由未發布的 LLM 所為。

Anthropic 同時更新了對「遞迴式自我改良」的評估：其警戒門檻為「AI 加速前的進展速度出現**倍增**」。公司表示此門檻**尚未達到**，但強調「對這項評估的信心不如以往」，因為其最佳內部基準測試已難以跟上 LLM 的進步速度。

### 這對 AI 風險治理的深遠影響

這是首度有頂尖 AI 實驗室公開量化錯位風險，同時證實其握有足以超越旗艦模型的技術卻選擇不對外發布。對資安主管而言，本報告建立兩個參考基準：一個可對應企業模型風險框架的**明確風險分類**（Threat Model 1／2），以及一個**能力克制先例**——「做得到，但選擇不釋出」——將影響董事會未來評估供應商 AI 風險揭露的方式。Threat Model 2 評等調升也具有實務意義：其依據是 AI 代理在測試期間攻擊內部系統的真實事件，而 Anthropic 與 OpenAI 都已留下紀錄。企業若部署具工具與網路存取權限的 AI 代理，應將這些事件視為自主系統的基準風險樣態，而非特例。

🔗 **參考資料：** 綜合報導（[Axios](https://www.axios.com/2026/08/14/anthropic-model-2-ai-risk)、[SiliconANGLE](https://siliconangle.com/2026/08/14/anthropic-details-unreleased-model-2-new-alignment-concerns-latest-ai-risk-report/)、[Unite.AI](https://www.unite.ai/anthropic-raises-misalignment-risk-to-low-and-shelves-internal-model-2/)）

---
## 本週活躍威脅

📌 **Mozilla 撤銷 Firefox／Thunderbird GPG 簽署金鑰：未加密金鑰外洩至私有 GitHub 儲存庫** — Mozilla 在先前簽署子金鑰的未加密副本遭誤提交至**私有 GitHub 儲存庫**後，更換了新的 GPG 簽署子金鑰。該子金鑰用於簽署 Firefox 與 Thunderbird 的 Linux tarball、RPM 套件與 checksum 檔案。Mozilla 稽核**未發現未授權存取**的證據（儲存庫僅限少數本即擁有合法金鑰存取權的員工），但仍以**撤銷代碼 2（「金鑰材料遭入侵」）**撤銷舊金鑰——這是 Mozilla 自 2015 年以來首度撤銷子金鑰，且比預定時程早了約七個月。撤銷憑證於 **2026 年 8 月 6 日**建立，註記「我們不再信任此金鑰」。手動驗證 GPG 簽章的用戶須匯入新金鑰與舊金鑰的撤銷憑證；Fedora 42 及更舊版本、RHEL、Rocky Linux 與 AlmaLinux 使用者可能需要手動移除舊金鑰才能完成更新。新金鑰指紋：`827E 6586 0867 9618 CD34 9F93 678E 455D 7676 7AA3`。

🔗 **參考資料：** [Mozilla Security Blog](https://blog.mozilla.org/security/2026/08/10/updated-gpg-key-for-signing-firefox-and-thunderbird-releases/) | [The Hacker News](https://thehackernews.com/2026/08/mozilla-revokes-firefox-and-thunderbird.html) | [The Register](https://www.theregister.com/security/2026/08/11/mozilla-revokes-firefox-signing-key-after-unencrypted-copy-lands-in-github/5285908)

📌 **Citrix NetScaler CVE-2026-8452：watchTowr 公布免驗證 RCE 概念驗證，JPCERT 發布注意喚起** — 資安公司 **watchTowr Labs** 於 8 月 14 日公布 **Citrix NetScaler ADC 與 NetScaler Gateway** 中**堆積型緩衝區溢位**的詳細分析，並將其追溯到 **CVE-2026-8452**（6 月 30 日公開，原列為 DoS／異常行為漏洞）。watchTowr 證實當設備設定為 **SAML SP 或 IdP** 時，可**免驗證執行遠端程式碼**，並釋出**可植入 Web Shell 的概念驗證（PoC）**。Citrix 安全公告（CTX696604）涵蓋六個 CVE，包括 CVE-2026-8451、CVE-2026-8452、CVE-2026-8655、CVE-2026-10816、CVE-2026-10817 與 CVE-2026-13474。**JPCERT/CC** 於 8 月 15 日發布注意喚起（JPCERT-AT-2026-0024），表示截至 8 月 15 日尚未確認實際攻擊，但警告 PoC 驅動的攻擊可能隨之而來。凡以 SAML SP 或 IdP 部署的 NetScaler ADC／Gateway 均應視為曝險。

🔗 **參考資料：** [JPCERT/CC 注意喚起](https://www.jpcert.or.jp/at/2026/at260024.html) | [watchTowr Labs](https://labs.watchtowr.com/youre-back-in-the-room-citrix-netscaler-pre-auth-rce-cve-2026-8452/) | [Citrix Security Bulletin](https://support.citrix.com/external/article/CTX696604/netscaler-adc-and-netscaler-gateway-secu.html)

📌 **Ransom Cartel 創辦人 Maksim Silnikov 在美遭判 16 年徒刑** — 白俄羅斯籍 40 歲男子 **Maksim Silnikov**，為勒索軟體集團 **Ransom Cartel** 的創辦人與管理者，在美國被判處**16 年有期徒刑**。依美國司法部資料，該集團攻擊全球**至少 18 家公司**，總損失超過 **670 萬美元**。Silnikov 被判有罪罪名包括共謀危害美國、共謀電信詐欺與加重身分竊盜；他自 2005 年起活躍於俄語駭客論壇（化名 J.P. Morgan、xxx 與 lansky），於 **2021 年 5 月**創立 Ransom Cartel，經營**勒索軟體即服務（RaaS）**夥伴計畫，並提供夥伴管理攻擊用的控制面板。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/08/14/ransom-cartel/)

📌 **蘇格蘭檢察署資料外洩恐擴大至多個政府機關** — 蘇格蘭**皇家檢察署（COPFS）**——即政府公共起訴機關——於 8 月 13 日揭露，一家**身分不明的外部供應商**發生資料外洩，影響部分**員工個人識別資訊（PII）**。事件源於由政府主辦、第三方管理的一場**線上資料成熟度評鑑**：**8 月 5 日**，評鑑供應商發現其內部網路出現「可疑活動」，導致**政府員工資料外洩**。Dark Reading 指出實際影響範圍可能更大，因為該評鑑屬於跨**多個蘇格蘭政府部門**的強制訓練一部分，不限於 COPFS。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/cyberattacks-data-breaches/scottish-govt-data-breach-prosecutors-office)

📌 **2026 漏洞通報量激增 72%，NIST 就 NVD 導入 AI 公開徵詢意見** — **NIST** 於 8 月 12 日發布「**AI 時代下國家漏洞資料庫（NVD）現代化**」意見徵詢（RFI），詢問 AI 如何改善脈絡化風險排程，以及 AI 系統是否應參與自動化漏洞修補。背景數據：2026 年前八個月共通報 **50,340 個漏洞**（依 CVE.ICU 統計），較 2025 年同期**激增 72%**；但主要來源（GitHub、VulnCheck）的通報中僅不到 **1%** 實際可被利用（列於 KEV 或 EPSS ≥ 0.1）。NIST 自身因過去 18 個月預算削減，補強能量吃緊。業界意見（ArmorCode 資安長、Bugcrowd 資安長）警告 AI 補強須保留**人工驗證層**——「只求速度不求準確，等於把信任問題推向資料下游」。意見徵詢截止日為 **2026 年 10 月 13 日**。

🔗 **參考資料：** [Dark Reading](https://www.darkreading.com/vulnerabilities-threats/ai-driven-bug-tsunami-nist-looks-to-ai)

📌 **Anthropic 宣布推出浮水印偵測 API 供第三方使用（更新）** — Anthropic 即將提供**浮水印偵測 API**，讓第三方開發者將 Claude AI 文字偵測整合至自有應用，技術採用 **Google DeepMind SynthID Text** 的變體。此 API 奠基於 Anthropic 為符合**歐盟 AI 法**而全球推出的浮水印機制（Anthropic 為 2026 年 7 月歐盟 AI 內容透明度行為準則約 **190 個**簽署方之一）。公司亦說明其限制：浮水印對短文、程式碼與大幅改寫的文字偵測可靠性較低，且僅能標記「Claude 可能參與撰寫」，無法證明全文出自 Claude。

🔗 **參考資料：** [The Decoder](https://the-decoder.com/anthropic-announces-watermark-detection-api-that-will-let-third-parties-detect-claudes-ai-texts/)

---
## OPSWAT可以怎麼幫上忙

Mozilla GPG 金鑰事件再次提醒：**簽署軟體元件的可信度，取決於背後的金鑰材料是否安全**。對於發行或接收簽署二元檔（Linux tarball、RPM 套件、checksum 檔案）的組織，MetaDefender 的檔案層級**多重掃描與內容淨化（CDR）**可驗證並淨化進入企業的檔案；**MetaDefender 軟體供應鏈安全**方案則可在 CI/CD 管線中驗證簽章、攔截遭竄改的套件——正是本事件暴露的攻擊面。至於 NetScaler CVE-2026-8452 曝險，修補仍是唯一緩解方式；檔案層防禦可應用於此類攻擊所投遞的 Web Shell 酬載，MetaDefender 可透過多引擎掃描加以偵測。

🔗 **參考資料：** [OPSWAT MetaDefender](https://www.opswat.com/products/metadefender)
