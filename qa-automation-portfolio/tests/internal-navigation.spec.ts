import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC01 - About section', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();

    await expect(page).toHaveURL(/#about/);

    await expect(
      page.getByText(
        'IntroductionOverview.Automated QA Engineer specializing in Playwright and',
        { exact: false }
      )
    ).toBeInViewport({ timeout: 5000 });
  });

  test('TC02 - Work section', async ({ page }) => {
    await page.getByRole('link', { name: 'Work' }).click();

    await expect(page).toHaveURL(/#work/);

    await expect(
      page.getByText(
        'What I have done so farWork Experience.Click on the icons to navigate to the',
        { exact: false }
      )
    ).toBeInViewport({ timeout: 5000 });
  });

  test('TC03 - Contact section', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();

    await expect(page).toHaveURL(/#contact/);

    await expect(
      page.locator('div')
        .filter({ hasText: 'Get in touchContact.Your' })
        .nth(3)
    ).toBeInViewport({ timeout: 5000 });
  });

});