import { test, expect } from '@playwright/test';

test('verify instagram application', async ({ page }) => {
  await page.goto('https://www.instagram.com');
  await page.locator('//input[@name="email"]').fill('student')
  await page.locator('//input[@name="pass"]').fill('password123')
    await page.locator('//span[text()="Log in"]').click()


})
