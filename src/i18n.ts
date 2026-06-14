export type Lang = 'zh' | 'en';

export const languages: Lang[] = ['zh', 'en'];

export const ui = {
  zh: {
    navHome: 'Home',
    navBlog: 'Blog',
    navResume: 'Resume',
    navDemos: 'Demos',
    heroEyebrow: 'OPSWAT / 關鍵基礎設施防護 / 安全檔案流程',
    heroSubtitle: 'Andy.Shih 的資安筆記，聚焦 OPSWAT、關鍵基礎設施防護與實務安全架構。',
    tagline: '專注於關鍵基礎設施防護、安全檔案流程與客戶場景資安架構的資安專業人員。',
    latest: '最新 4 篇文章',
    blogTitle: 'Security Field Notes',
    blogIntro: '依語言分開整理的資安文章。可用標題、內文或 tag 搜尋。',
    searchLabel: '搜尋文章',
    searchPlaceholder: '搜尋標題、內文、tag...',
    noResults: '找不到符合條件的文章。',
    backToArticles: '返回文章列表',
    recommended: '推薦文章',
    resumeProfile: 'OPSWAT 資安職涯與解決方案經驗',
    demosSection: '攻防示範',
    resumeIntro: '從 L2/L3 Technical Support、Technical Account Manager/ Customer Success Manager，到目前的 Solutions Engineer。工作核心是把客戶問題、產品能力與關鍵基礎設施防護需求連起來，協助技術團隊理解可部署、可維運、可驗證的資安方案。'
  },
  en: {
    navHome: 'Home',
    navBlog: 'Blog',
    navResume: 'Resume',
    navDemos: 'Demos',
    heroEyebrow: 'OPSWAT / Critical Infrastructure Protection / Secure File Workflows',
    heroSubtitle: 'Security notes from Andy.Shih, Solutions Engineer at OPSWAT.',
    tagline: 'Security professional focused on critical infrastructure protection, secure file workflows, and customer-facing security architecture.',
    latest: 'Latest 4 Articles',
    blogTitle: 'Security Field Notes',
    blogIntro: 'Security articles separated by language. Search by title, body, or tag.',
    searchLabel: 'Search articles',
    searchPlaceholder: 'Search title, body, tag...',
    noResults: 'No matching articles.',
    backToArticles: 'Back to articles',
    recommended: 'Recommended articles',
    resumeProfile: 'OPSWAT security career and solutions experience',
    demosSection: 'Attack Demos',
    resumeIntro: 'From L2/L3 Technical Support and Technical Account Manager/ Customer Success Manager to Solutions Engineer. I connect customer problems, product capabilities, and critical infrastructure protection requirements into deployable and maintainable security solutions.'
  }
} as const;

export function getLangPath(lang: Lang, path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath}`.replace(/\/+$/, '/') ;
}

export function getLangFromId(id: string): Lang {
  return id.startsWith('en/') ? 'en' : 'zh';
}

export function getSlugFromId(id: string) {
  return id.split('/').pop() ?? id;
}
