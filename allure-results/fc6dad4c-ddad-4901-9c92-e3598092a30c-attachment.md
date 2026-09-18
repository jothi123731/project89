# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DropDownTask.spec.js >> verify instagram application
- Location: tests\DropDownTask.spec.js:3:5

# Error details

```
Error: locator.check: Test ended.
Call log:
  - waiting for locator('//input[@id="sunday"]')
    - locator resolved to <input id="sunday" value="sunday" type="checkbox" class="form-check-input"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('verify instagram application', async ({ page }) => {
  4  |   await page.goto('https://testautomationpractice.blogspot.com/');
  5  |   await page.locator('//input[@id="name"]').fill('jothi')
  6  |   await page.locator('//input[@id="email"]').fill('abc@gmail.com')
  7  |    await page.locator('//input[@id="phone"]').fill('9876543212')
  8  |    await page.locator('//label[text()="Address:"]').fill('27/3 nehru street')
  9  |    await page.locator('//input[@id="female"]').check()
  10 |    const multiCheckBox =async(page)=>
  11 |    {
> 12 |     await page.locator('//input[@id="sunday"]').check()
     |                                                 ^ Error: locator.check: Test ended.
  13 |    await page.locator('//input[@id="monday"]').check
  14 |    }
  15 |    multiCheckBox(page)
  16 | 
  17 |  // await page.locator('//label[text()="Sunday"]').check()
  18 |   // await page.locator('//label[text()="Monday"]').check()
  19 | const singleDropDown=await page.locator('//select[@id="country"]')
  20 | await singleDropDown.selectOption({value:"usa"})
  21 | const multiDropDown=await page.locator('//select[@id="colors"]')
  22 | await multiDropDown.selectOption([{value:"yellow"},{label:"White"},{value:"green"}])
  23 | })
  24 | 
```