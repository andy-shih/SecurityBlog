import { expect, test } from '@playwright/test';

const slugs = [
  'zero-trust-consulting-roadmap',
  'cloudflare-security-baseline',
  'incident-response-first-hour',
  'web-application-pentest-checklist',
  'phishing-resilience-program'
];

test('homepage presents consulting brand, CTA, and featured articles', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toContainText('Cyber Security Consultant');
  await expect(page.getByRole('link', { name: /Book a security review/i })).toBeVisible();
  await expect(page.getByTestId('featured-articles').getByRole('article')).toHaveCount(5);
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

test('resume page renders consultant profile and services', async ({ page }) => {
  await page.goto('/resume/');

  await expect(page.getByRole('heading', { name: /Resume/i })).toBeVisible();
  await expect(page.getByTestId('services')).toContainText('Security Assessment');
  await expect(page.getByRole('link', { name: /Contact for consulting/i })).toBeVisible();
});

test('mobile viewport has no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});
