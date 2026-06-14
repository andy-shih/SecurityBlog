import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { demos } from '@/components/demo-data';
import { getLangFromId, getSlugFromId, languages, type Lang } from '@/i18n';

const siteUrl = 'https://blog.pingpongtech.us.kg';
const siteLastMod = '2026-06-15';

type Hreflang = 'x-default' | 'zh-Hant' | 'en';

interface SitemapAlternate {
  hreflang: Hreflang;
  path: string;
}

interface SitemapEntry {
  path: string;
  lastmod: string;
  alternates?: SitemapAlternate[];
}

const langToHreflang: Record<Lang, Hreflang> = {
  zh: 'zh-Hant',
  en: 'en'
};

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).href;
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function pageAlternates(paths: Record<Lang, string>, xDefaultPath = paths.zh): SitemapAlternate[] {
  return [
    { hreflang: 'x-default', path: xDefaultPath },
    ...languages.map((lang) => ({ hreflang: langToHreflang[lang], path: paths[lang] }))
  ];
}

function renderUrl(entry: SitemapEntry) {
  const alternateLinks = entry.alternates
    ?.map((alternate) => (
      `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${escapeXml(absoluteUrl(alternate.path))}" />`
    ))
    .join('\n');

  return [
    '  <url>',
    `    <loc>${escapeXml(absoluteUrl(entry.path))}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    alternateLinks,
    '  </url>'
  ].filter(Boolean).join('\n');
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const postIds = new Set(posts.map((post) => post.id));

  const staticEntries: SitemapEntry[] = [
    {
      path: '/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/', en: '/en/' }, '/')
    },
    {
      path: '/zh/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/', en: '/en/' }, '/')
    },
    {
      path: '/en/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/', en: '/en/' }, '/')
    },
    {
      path: '/zh/blog/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/blog/', en: '/en/blog/' }, '/zh/blog/')
    },
    {
      path: '/en/blog/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/blog/', en: '/en/blog/' }, '/zh/blog/')
    },
    {
      path: '/zh/demos/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/demos/', en: '/en/demos/' }, '/zh/demos/')
    },
    {
      path: '/en/demos/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/demos/', en: '/en/demos/' }, '/zh/demos/')
    },
    {
      path: '/zh/resume/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/resume/', en: '/en/resume/' }, '/zh/resume/')
    },
    {
      path: '/en/resume/',
      lastmod: siteLastMod,
      alternates: pageAlternates({ zh: '/zh/resume/', en: '/en/resume/' }, '/zh/resume/')
    }
  ];

  const blogEntries: SitemapEntry[] = posts.map((post) => {
    const lang = getLangFromId(post.id);
    const slug = getSlugFromId(post.id);
    const localizedPaths = Object.fromEntries(
      languages
        .filter((candidateLang) => postIds.has(`${candidateLang}/${slug}`))
        .map((candidateLang) => [candidateLang, `/${candidateLang}/blog/${slug}/`])
    ) as Partial<Record<Lang, string>>;

    return {
      path: `/${lang}/blog/${slug}/`,
      lastmod: formatDate(post.data.updatedDate ?? post.data.pubDate),
      alternates: languages
        .filter((candidateLang) => localizedPaths[candidateLang])
        .map((candidateLang) => ({
          hreflang: langToHreflang[candidateLang],
          path: localizedPaths[candidateLang] as string
        }))
    };
  });

  const demoEntries: SitemapEntry[] = demos.flatMap((demo) => {
    const paths = {
      zh: `/zh/demos/${demo.id}/`,
      en: `/en/demos/${demo.id}/`
    };

    return languages.map((lang) => ({
      path: paths[lang],
      lastmod: demo.created,
      alternates: pageAlternates(paths, paths.zh)
    }));
  });

  const entries = [...staticEntries, ...blogEntries, ...demoEntries].sort((a, b) => a.path.localeCompare(b.path));
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries.map(renderUrl).join('\n'),
    '</urlset>'
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
