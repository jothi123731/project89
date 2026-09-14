import { test, expect } from '@playwright/test';

test('verify instagram application', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('//input[@id="name"]').fill('jothi')
  await page.locator('//input[@id="email"]').fill('abc@gmail.com')
   await page.locator('//input[@id="phone"]').fill('9876543212')
   await page.locator('//label[text()="Address:"]').fill('27/3 nehru street')
   await page.locator('//input[@id="female"]').check()
   const multiCheckBox =async(page)=>
   {
    await page.locator('//input[@id="sunday"]').check()
   await page.locator('//input[@id="monday"]').check
   }
   multiCheckBox(page)

 // await page.locator('//label[text()="Sunday"]').check()
  // await page.locator('//label[text()="Monday"]').check()
const singleDropDown=await page.locator('//select[@id="country"]')
await singleDropDown.selectOption({value:"usa"})
const multiDropDown=await page.locator('//select[@id="colors"]')
await multiDropDown.selectOption([{value:"yellow"},{label:"White"},{value:"green"}])
})
