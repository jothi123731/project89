import {test} from '@playwright/test'

test('Window handling', async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator('//span[@role="button"]').click()
    await page.locator('(//input[@placeholder="Search for Products, Brands and More"])[1]').click()
    await page.locator('(//input[@placeholder="Search for Products, Brands and More"])[1]').fill("iphone 17 pro")
    await page.keyboard.press('Enter')
    const [newPage]= await Promise.all([context.waitForEvent('page'),page.click('//div[text()="Relevance"]//ancestor::div[@id="container"]//parent::a[@rel="noopener noreferrer"]//child::div[text()="Apple iPhone 17 Pro (Silver, 256 GB)"]')])
   await newPage.waitForLoadState()
})