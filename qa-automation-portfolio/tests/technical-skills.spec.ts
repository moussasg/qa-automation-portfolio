import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - paragraph: Playwright
    - img "Playwright"
    - paragraph: TypeScript
    - img "TypeScript"
    - paragraph: JavaScript
    - img "JavaScript"
    - paragraph: Node.js
    - img "Node.js"
    - paragraph: REST API
    - img "REST API"
    - paragraph: Postman
    - img "Postman"
    - paragraph: Git
    - img "Git"
    - paragraph: GitHub Actions
    - img "GitHub Actions"
    - paragraph: Linear
    - img "Linear"
    - paragraph: HTML 5
    - img "HTML 5"
    - paragraph: CSS 3
    - img "CSS 3"
    - paragraph: Katalon
    - img "Katalon"
    `);
});