import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
 test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
test('TC01 - Website loads successfully', async ({ page }) => {
  await expect(page).toHaveURL(/moussasg\.vercel\.app/);
  await expect(page.locator('section').filter({ hasText: 'Hi, I\'mMoussaQA Automation' }).locator('canvas')).toBeVisible();
});
test('TC02 - Verify the presence of the main sections', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Work' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
})
});