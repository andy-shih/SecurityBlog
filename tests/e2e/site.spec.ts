import { expect, test } from '@playwright/test';

const slugs = [
  'zero-trust-consulting-roadmap',
  'cloudflare-security-baseline',
  'incident-response-first-hour',
  'web-application-pentest-checklist',
  'phishing-resilience-program'
];

test('zh homepage presents ANDY.S, brand favicon, no professional focus screenshot section, and four article links', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toContainText('ANDY.S');
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.svg');
  await expect(page.locator('header').getByTestId('brand-mark')).toBeVisible();
  await expect(page.getByTestId('featured-articles').getByRole('article')).toHaveCount(4);
  await expect(page.getByText('Professional focus')).toHaveCount(0);
  await expect(page.getByText('專業焦點')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'EN', exact: true })).toHaveAttribute('href', '/en/');
  await expect(page.getByRole('link', { name: 'ZH', exact: true })).toHaveAttribute('href', '/zh/');

  const homepageMainLinks = await page.locator('main a').evaluateAll((links) =>
    links.map((link) => link.getAttribute('href'))
  );
  expect(homepageMainLinks).toHaveLength(4);
  expect(homepageMainLinks.every((href) => href?.startsWith('/zh/blog/'))).toBe(true);
});

test('en and zh language routes do not mix article languages', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('ANDY.S');
  await expect(page.getByText('Security notes from Andy.Shih')).toBeVisible();
  await expect(page.getByText('專注於關鍵基礎設施')).toHaveCount(0);

  await page.goto('/zh/');
  await expect(page.getByText('專注於關鍵基礎設施')).toBeVisible();
  await expect(page.getByText('Security notes from Andy.Shih')).toHaveCount(0);
});

test('zh blog search filters by title, body, and tag', async ({ page }) => {
  await page.goto('/zh/blog/');

  await expect(page.getByRole('heading', { name: /Security Field Notes/i })).toBeVisible();
  await expect(page.getByTestId('blog-list').getByRole('article')).toHaveCount(5);

  await page.getByLabel('搜尋文章').fill('Cloudflare');
  await expect(page.getByTestId('blog-list').getByRole('article')).toHaveCount(1);
  await expect(page.getByTestId('blog-list')).toContainText('Cloudflare');

  await page.getByLabel('搜尋文章').fill('第一小時');
  await expect(page.getByTestId('blog-list').getByRole('article')).toHaveCount(1);
  await expect(page.getByTestId('blog-list')).toContainText('事件應變');

  await page.getByLabel('搜尋文章').fill('Phishing');
  await expect(page.getByTestId('blog-list').getByRole('article')).toHaveCount(1);
  await expect(page.getByTestId('blog-list')).toContainText('釣魚');
});

for (const slug of slugs) {
  test(`zh article page renders ${slug} with four recommendations`, async ({ page }) => {
    await page.goto(`/zh/blog/${slug}/`);

    await expect(page.getByRole('article')).toBeVisible();
    await expect(page.getByRole('link', { name: /返回文章列表/i })).toBeVisible();
    await expect(page.getByTestId('recommended-articles').getByRole('link')).toHaveCount(4);
  });
}

test('resume page renders Andy Shih OPSWAT experience and contact details', async ({ page }) => {
  await page.goto('/zh/resume/');

  await expect(page.getByRole('heading', { name: /Resume/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Andy.Shih/i })).toBeVisible();
  await expect(page.getByTestId('experience')).toContainText('OPSWAT');
  await expect(page.getByTestId('experience')).toContainText('L2/ L3 Technical Support');
  await expect(page.getByTestId('experience')).toContainText('Technical Account Manager/ Customer Success Manager');
  await expect(page.getByTestId('experience')).toContainText('Solutions Engineer');
  await expect(page.getByTestId('credentials')).toContainText('CISSP');
  await expect(page.getByRole('link', { name: /andy.shih@opswat.com/i })).toBeVisible();
  await expect(page.locator('main').getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/andy-shih');
});

test('mobile viewport has no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});
