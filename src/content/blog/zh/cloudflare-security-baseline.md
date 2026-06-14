---
title: "公開網站的 Cloudflare 安全基準"
description: "用 Cloudflare 建立簡潔的邊界安全基準，降低暴露面，同時避免把設定做成難以維護的迷宮。"
pubDate: 2026-05-28
tags: ["Cloudflare", "Edge Security", "Baseline"]
author: "Andy.Shih"
featured: true
---

Cloudflare 可以很快提升網站安全性，但真正的價值來自清楚的 baseline，而不是把所有功能全部打開。

## 先確認可視性

在開始阻擋流量前，先確認 DNS、proxy 狀態、SSL/TLS 模式、redirect 與 origin 暴露狀態。許多事件不是從高深攻擊開始，而是 origin server 仍能被直接連到。

第一輪可以檢查：

- 應該 proxy 的 DNS 記錄是否已啟用 proxy。
- SSL/TLS 模式是否弱化 origin 加密。
- HTTP security headers 是否清楚記錄。
- Origin IP 是否透過舊記錄或第三方服務外洩。

## 加上必要 guardrails

Rate limiting、WAF managed rules、bot controls 與 page rules 都應對應到明確 abuse case。對 blog 或個人品牌站而言，baseline 可以保持精簡：阻擋明顯惡意流量、限制高風險路徑、維持 cache 效能。

## 讓部署維持單純

靜態 Astro 網站搭配 Cloudflare Pages 與 GitHub 部署，可以讓維運模型保持簡單。每次內容或架構有大變更時，再重新檢查安全基準。

好的邊界安全基準，應該清楚到網站 owner 能自己維護。
