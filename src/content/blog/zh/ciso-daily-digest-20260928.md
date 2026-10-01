---
title: "CISO 每日摘要：JADEPUFFER 升級為毀滅性 Azure 清除——服務主體遭破口、執行 300+ 次讀取、資料庫被刪 (20260928)"
description: "JADEPUFFER 攻擊者（微軟追蹤代號 Storm-3168）在 2026 年 6 月利用遭破口的 Azure 服務主體，歷時 18 小時進行端到端的毀滅性操作——刪除儲存體帳戶、SQL 資料庫、金鑰保存庫、虛擬機器、函式應用及應用服務。JADEPUFFER 是首個完全由 LLM 代理執行的勒索軟體行動（Sysdig 記錄了 5 月利用 Langflow CVE-2025-3248 與 Go 語言 ENCFORGE 勒索軟體的攻擊）。本日另有：MikroTik RouterOS 重大漏洞（CVE-2026-67276、CVE-2026-86060，CVSS 9.2）遭積極利用——MikroTrick 允許無密碼 SSH 接管；勒索軟體現已利用 AD 群組原則物件進行無聲部署；Citrix NetScaler ADC/Gateway CVE-2026-88771/88772 遭活躍攻擊；Microsoft 365 修補 KB5002907 破壞 Office 2016/2019 永久授權；Carbonato 殭屍網路建置 Docker 基礎 Hermes AI 代理。"
pubDate: 2026-09-28
tags: [JADEPUFFER, Storm-3168, Azure, 毀滅性, 服務主體, LLM-勒索軟體, Sysdig, Langflow, CVE-2025-3248, ENCFORGE, MikroTik, RouterOS, CVE-2026-67276, CVE-2026-86060, MikroTrick, Active-Directory, 群組原則, 勒索軟體, Citrix, NetScaler, CVE-2026-88771, CVE-2026-88772, Microsoft-365, Office, Carbonato, 殭屍網路, Docker, AI-代理, CISO-每日摘要]
author: "Security Solutions Team"
featured: true
---

## JADEPUFFER LLM 驅動毀滅升級：透過遭破口的服務主體進行 Azure 清除

**微軟**（以 **Storm-3168** 代號追蹤該行動者）已發布分析報告，描述 **JADEPUFFER** 威脅行動者在 2026 年 6 月進行的 **18 小時毀滅性行動**，使用 **兩個遭破口的 Azure 服務主體** 協調跨 Microsoft Azure 環境的資源刪除。該行動者——**Sysdig** 首度記錄為 **首個 LLM 驅動的勒索軟體行動** ——利用自主代理推理目標、竊取憑證、橫向移動、刪除資料庫。6 月攻擊鏈：**Langflow（CVE-2025-3248）** 漏洞 → 憑證竊取 → 橫向移動 → 使用 **MySQL AES_ENCRYPT() 函式** 加密 **Nacos 服務組態檔** → 資料庫表刪除 → 贖金提條。相同基礎設施的第二次破口使用 **ENCFORGE**——目的為搜索 **AI 基礎設施** 而編譯的 **Go 語言勒索軟體**：掃描約 **180 種副檔名**，包括模型檢查點、向量資料庫、訓練資料集、嵌入索引、macOS 鑰匙圈存儲、Xcode 專案檔與 Apple Pages/Numbers 文件。6 月 Azure 攻擊歷時約 **16 小時** 進行列舉 **虛擬機器、訂閱、資源群組** 運作，執行超過 **300 次讀取操作**，其後進行毀滅性操作，**目標為儲存體帳戶、SQL 資料庫、金鑰保存庫、復原保護鎖、函式應用、虛擬機器及應用服務**。涉及兩個服務主體：一個用於偵察、一個用於毀滅和憑證收集。事件強調 **自主代理能將平凡的技術編排成對被忽視之網路曝露基礎設施的完整勒索軟體行動** ——各別技術都不新穎，但編排方式令人矚目。

### 為何 AI 原生勒索軟體改變目標分類遊戲規則

- **LLM 代理推理加密什麼，而非亂槍打鳥。** 傳統勒索軟體加密所有東西；ENCFORGE 的 **~180 種副檔名** 掃描鎖定 **AI 模型檢查點、向量資料庫、訓練資料集**。它知道受害者的王牌資產。
- **無密碼多階段存取現已成常態。** 從 Langflow RCE 到憑證竊取到橫向移動再到資料庫刪除——代理無需暴力破解便在 Azure RBAC 中導航，證明 **竊得的服務主體權杖** 是新時代的金鑰。
- **毀滅性 Azure 清除在無備份時無法復原。** 刪除金鑰保存庫、復原鎖與儲存體帳戶是 **非加密** ——它是 **資料毀滅**。勒索軟體從勒索演變為透過竊取實施的阻斷服務。

🔗 **參考資料：** 綜合報導（[The Hacker News](https://thehackernews.com/2026/09/jadepuffer-linked-attackers-used.html)、[Microsoft 安全部落格](https://www.microsoft.com/en-us/security/)）

---

## 本週活躍威脅

📌 **MikroTik RouterOS 重大漏洞：透過 CVE-2026-67276 與 CVE-2026-86060 進行無密碼 SSH 接管**
**俄羅斯 GRCHC（主無線電頻率中心）** 命令電信營運商檢查其網路中的 MikroTik 設備，原因是 **6 個重大 RouterOS 漏洞**（包括 **CVE-2026-67276** 與 **CVE-2026-86060**，兩者 CVSS 均為 9.2）自 2026 年 9 月 2 日起開始遭積極利用。**MikroTrick** 漏洞組合在 SSH 介面網際網路曝露時允許未驗證 SSH 接管：CVE-2026-67276 允許 **SSH 驗證期間的不當 RSA 金鑰驗證**，CVE-2026-86060 透過 **精心打造的使用者名稱** 啟用 **權限提升**。四個額外漏洞影響 SSH、bandwidth-test、X.509 憑證處理與 WebFig 網頁介面——導致任意指令執行、檔案讀寫、記憶體洩露、TLS 偽造及設備重啟。修複於 **RouterOS 6.49.21、7.23.4、7.23.5、7.24.2、7.25beta3**。暫時緩解：將 SSH/WWW/WWW-SSL/bandwidth-test 存取限制在受信任的網路，或在修補前完全禁用。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/09/28/mikrotik-rkn/) | [JPCERT/CC](https://www.jpcert.or.jp/at/2026/at260029.html)

📌 **勒索軟體現已將 Active Directory 群組原則用作無聲酬載遞送的武器**
**卡巴斯基實驗室** 記錄了 **PAYLOAD 行動**（2026 年 4 月），鎖定中東製造企業，攻擊者在透過遭破口的 FortiGate SSL-VPN 憑證取得 **網域管理員或等級權限** 後，**完全透過 Active Directory 群組原則物件（GPO）** 部署勒索軟體——無 Windows 可執行檔、無惡意軟體程序、無傳統持久化。攻擊者建立名為 **PAYLOAD** 且綁定至網域根的 GPO，推送 **README-payload.txt** 贖金提條、改變桌面壁紙、修改登入橫幅、停用本機管理員帳戶，另一個 GPO 則停用全部設定檔的 Windows 防火牆。**在受害者的 Windows 系統上找不到惡意二進位檔**。該行動獲得了約 **24 小時的隱形** 機會，因為快取 GPO 設定需要裝置重啟才能完全套用——到下一天的定期重啟週期時，攻擊者已從檔案伺服器與其他系統中竊取資料。恢復了 **ESXi 版本的 PAYLOAD 勒索軟體**，但無任何執行證據存在於本次攻擊中。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/09/28/active-directory-payload/)

📌 **Citrix NetScaler ADC/Gateway 漏洞 CVE-2026-88771 與 CVE-2026-88772 遭積極利用**
**Citrix** 發布重大修補程式，修補影響 **NetScaler ADC 與 Gateway** 的 **CVE-2026-88771**（不當輸入驗證允許未驗證任意指令執行）及 **CVE-2026-88772**（導致 RCE 或拒絕服務）。CISA 確認威脅行動者正在全球範圍內積極利用這些漏洞，發布了週三的聯邦修補強制令。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/weekly-recap-387m-crypto-hack-citrix.html)

📌 **Microsoft 365 修補 KB5002907 破壞 Office 2016/2019 永久授權，發行遭停止**
用戶大量報告 **KB5002907** 後，**微軟** 停止發行，因為該更新 **停用 Office 2016 與 Office 2019 的永久授權**，並在某些情況下 **完全解除安裝 Office**。該更新面向 90 天以上未更新的 Microsoft 365 應用程式；相反地，它觸發了舊版 Office 的移除與重新安裝，造成授權損失。該問題在混合 32 位元與 64 位元 Office 元件（例如 32 位元 Office 2016 + 64 位元 Access Runtime）的系統上特別嚴重，安裝程式失敗導致使用者 **根本沒有 Office**。儘管標記為選用，報告顯示許多系統上自動安裝。微軟已確認該問題並進行調查。

🔗 **參考資料：** [xakep.ru](https://xakep.ru/2026/09/28/kb5002907/)

📌 **Carbonato 殭屍網路破口 Docker 主機，部署 Telegram 控制的 Hermes AI 代理**
**Carbonato 殭屍網路** 已被觀察到破口 **Docker** 主機，部署 **Telegram 控制的 Hermes AI 代理**，為現有殭屍網路基礎設施增加自主代理攻擊表面。

🔗 **參考資料：** [The Hacker News](https://thehackernews.com/2026/09/carbonato-botnet-compromises-docker.html)

---

## OPSWAT 可以怎麼幫上忙

JADEPUFFER 的 **Langflow RCE** 與 Citrix NetScaler 利用涉及 **面向網頁的應用攻擊** 導致憑證竊取與橫向移動。勒索軟體改為 **將群組原則作為遞送工具** 意味著遭破口的網域管理員憑證打開了透過受信任基礎設施進行企業規模加密的途徑。**MetaDefender Multi-Scan** 能在復原前檢測檔案儲存庫與備份中的 **ENCFORGE 與 PAYLOAD 勒索軟體簽章**；**MetaDefender CDR** 重建橫向移動期間外洩的文件與封存，去除嵌入式指令碼與巨集酬載；**MetaDefender Kiosk** 在資料邊界檢查被竊備份、防止其被移出站點。
