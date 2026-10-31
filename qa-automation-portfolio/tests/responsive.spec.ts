
import { test, expect } from '@playwright/test';

// Define the screen sizes we want to test
const viewports = [
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Laptop', width: 1024, height: 768 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 390, height: 844 },
];

// Loop through each screen size and create a separate test
for (const viewport of viewports) {

  test(`${viewport.name} responsive layout`, async ({ page }) => {

    console.log(`Starting ${viewport.name} test...`);

    // Set the browser viewport to the current screen size
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height
    });

    console.log(`Viewport set to ${viewport.width}x${viewport.height}`);

    // Open your portfolio website
    await page.goto('/');

    console.log('Portfolio website opened successfully');

    // Check that the body of the page is visible
    await expect(page.locator('body')).toBeVisible();

    console.log('PASS: Page body is visible');

    // Check if the website has horizontal scrolling
    // scrollWidth = total width of the page content
    // clientWidth = visible width of the browser
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth >
             document.documentElement.clientWidth;
    });

    // Test fails if the page is wider than the viewport
    expect(hasHorizontalScroll).toBe(false);

    console.log('PASS: No horizontal scrolling');

    // Check About link only on desktop, laptop and tablet
    if (viewport.name !== 'Mobile') {

      const contactLink = page.getByRole('link', { name: 'Contact' });

      await expect(contactLink).toBeVisible();

      console.log('PASS: Contact link is visible');
    } else {

      console.log('SKIP: Contact link visibility check on mobile');

    }

    console.log(`Finished ${viewport.name} test successfully`);

  });
}