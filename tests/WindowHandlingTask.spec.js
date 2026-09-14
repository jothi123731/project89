import {test} from '@playwright/test'

test('window handing',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@placeholder="Search for Products, Brands and More"])[1]').fill("iphone 17 pro")
    await page.keyboard.press('Enter')
    const[newpage]=await Promise.all([context.waitForEvent('page'),page.click('//div[text()="Relevance"]//ancestor::div[@id="container"]//parent::a[@rel="noopener noreferrer"]//child::div[text()="Apple iPhone 17 Pro (Silver, 256 GB)"]')])
    await newpage.waitForLoadState()
    const title=await newpage.title()
    console.log(title)
})