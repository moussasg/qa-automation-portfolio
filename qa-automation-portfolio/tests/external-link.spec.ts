
import { test, expect } from '@playwright/test';

test('Check all external links return 200', async ({ page, request }) => {
  await page.goto('/');

  // Get all external links
  const externalLinks = await page.locator('a[href^="http"]').evaluateAll(links =>
    links
      .map(link => (link as HTMLAnchorElement).href)
      .filter(href => !href.includes('moussasg.vercel.app'))
  );

  // Remove duplicates
  const uniqueLinks = [...new Set(externalLinks)];

  // Check HTTP status
  for (const url of uniqueLinks) {
    const response = await request.get(url, {
      timeout: 25000,
      failOnStatusCode: false
    });

    console.log(`${response.status()} - ${url}`);
if (response.status() === 999) {
  console.log(`SKIPPED - LinkedIn blocks automated requests: ${url}`);
  continue;
}
    expect(response.status(), `${url} should return 200`).toBe(200);
  }
});
