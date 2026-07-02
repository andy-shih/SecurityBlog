# ANDY.S Security Blog

![Site](https://img.shields.io/badge/status-live-22c55e)
![Build](https://img.shields.io/badge/Astro-6.x-ff5a03)
![Articles](https://img.shields.io/badge/articles-156-3b82f6)

**CISO Daily Digest** — 每日資安新聞摘要，中英雙語。由 Andy.Shih（OPSWAT Solutions Engineer）撰寫，聚焦關鍵基礎設施防護、供應鏈安全與實務資安架構。

> 🌐 **Site:** [blog.pingpongtech.us.kg](https://blog.pingpongtech.us.kg)

---

## 📝 內容 Content

每日精選全球重大資安新聞，以 **Solutions Engineer** 視角撰寫摘要，涵蓋：

- **零時差漏洞**（CVE 分析與影響評估）
- **APT 活動**（國家級威脅情資）
- **供應鏈攻擊**（軟體供應鏈安全事件）
- **法規與合規**（CISA、FedRAMP、各國監管動態）
- **AI 安全**（AI 模型風險、紅隊測試、治理框架）
- **OPSWAT 觀點**（關鍵基礎設施防護方案）

每篇文章包含具體 CVE 編號、威脅行為者名稱及技術細節，附原始新聞來源連結。

### 文章分布

| 語言 | 篇數 | 路徑 |
|------|------|------|
| English | 59 | `src/content/blog/en/` |
| 繁體中文 | 59 | `src/content/blog/zh/` |

**收錄範圍：** 2026年4月至今，每日一篇（不含週末）。

---

## 🏗 技術架構 Tech Stack

| 層級 | 技術 |
|------|------|
| Framework | [Astro 6.x](https://astro.build) |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Content | Astro Content Collections (Markdown) |
| Language | TypeScript / Zod schema validation |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com) |
| Build | `astro check && astro build` → `dist/` |

### 目錄結構

```
src/
├── components/         # Astro components (BaseLayout, ResumePage, etc.)
├── config/
│   └── profile.ts      # Centralized profile data
├── content/
│   ├── blog/en/        # English CISO daily digests
│   └── blog/zh/        # Traditional Chinese CISO daily digests
├── content.config.ts   # Content collection schema (Zod)
├── i18n.ts             # Bilingual UI strings
├── pages/              # Route pages
│   ├── index.astro     # Home (redirect)
│   ├── [lang]/         # Per-language pages
│   │   ├── index.astro
│   │   ├── blog/
│   │   └── resume.astro
└── utils/
    └── posts.ts        # Post sorting & filtering helpers
```

---

## 🚀 本地開發 Local Development

```bash
# 1. Clone
git clone https://github.com/andy-shih/SecurityBlog.git
cd SecurityBlog

# 2. Install
npm install

# 3. Dev server
npm run dev          # http://localhost:4321

# 4. Build & preview
npm run build        # astro check + astro build
npm run preview      # astro preview

# 5. E2E tests
npm run test:e2e     # Playwright
```

---

## 🎯 核心功能 Features

- **雙語文章索引** — `/zh/blog/` 與 `/en/blog/` 各自獨立
- **全文搜尋** — 支援標題、內文、標籤搜尋
- **推薦文章** — 基於標籤相似度的自動推薦
- **暗色 HUD 主題** — 專業科技風格
- **多頁面 Resume** — 中英雙語版本，資料集中管理
- **SEO 友好** — 動態 meta tags、XML sitemap、robots.txt、IndexNow key

### Search Indexing

Production URL: `https://blog.pingpongtech.us.kg/`

- XML sitemap: `https://blog.pingpongtech.us.kg/sitemap.xml`
- Robots file: `https://blog.pingpongtech.us.kg/robots.txt`
- IndexNow key file: `https://blog.pingpongtech.us.kg/89ca9699954ea5a5f65d528f17de471c.txt`

Google can discover the sitemap through `robots.txt` and can also accept it through Search Console. Bing-compatible search engines can receive URL updates through IndexNow after the key file is deployed.

---

## ☁️ 部署 Deployment (Cloudflare Pages)

| 設定 | 值 |
|------|-----|
| Framework | Astro |
| Build command | `npm run build` |
| Output dir | `dist/` |
| Node version | v22+ |

`wrangler.jsonc` 已預置 `pages_build_output_dir`，也支援 `wrangler pages deploy` 工作流。

---

## 📄 License

© 2026 Andy.Shih. All rights reserved. Content provided for informational purposes.
