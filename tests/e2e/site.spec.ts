import { expect, test } from '@playwright/test';

const slugs = [
  'zero-trust-consulting-roadmap',
  'cloudflare-security-baseline',
  'incident-response-first-hour',
  'web-application-pentest-checklist',
  'phishing-resilience-program'
];

test('homepage presents Andy.S professional brand and four latest articles only', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toContainText('Andy.S');
  await expect(page.getByTestId('featured-articles').getByRole('article')).toHaveCount(4);
  await expect(page.getByRole('link', { name: /Book a security review/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /Start consulting conversation/i })).toHaveCount(0);

  const homepageMainLinks = await page.locator('main a').evaluateAll((links) =>
    links.map((link) => link.getAttribute('href'))
  );
  expect(homepageMainLinks).toHaveLength(4);
  expect(homepageMainLinks.every((href) => href?.startsWith('/blog/'))).toBe(true);
});

test('blog list renders exactly five seeded posts', async ({ page }) => {
  await page.goto('/blog/');

  await expect(page.getByRole('heading', { name: /Security Field Notes/i })).toBeVisible();
  await expect(page.getByTestId('blog-list').getByRole('article')).toHaveCount(5);
});

for (const slug of slugs) {
  test(`article page renders ${slug}`, async ({ page }) => {
    await page.goto(`/blog/${slug}/`);

    await expect(page.getByRole('article')).toBeVisible();
    await expect(page.getByRole('link', { name: /Back to articles/i })).toBeVisible();
  });
}

test('resume page renders Andy Shih OPSWAT experience and contact details', async ({ page }) => {
  await page.goto('/resume/');

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
