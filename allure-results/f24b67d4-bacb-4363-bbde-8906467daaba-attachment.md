# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: IframeTask3.spec.js >> Iframe handling
- Location: tests\IframeTask3.spec.js:3:5

# Error details

```
Error: page.goto: SSL peer certificate or SSH remote key was not OK
Call log:
  - navigating to "https://vinothqaacademy.com/iframe/", waiting until "load"

```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('Iframe handling', async ({page})=>{
> 4  | await page.goto('https://vinothqaacademy.com/iframe/')
     |            ^ Error: page.goto: SSL peer certificate or SSH remote key was not OK
  5  | const singleframe=await page.frameLocator('//iframe[@name="registeruser"]')
  6  | await singleframe.locator('//input[@id="vfb-5"]').fill("jothi")
  7  | await singleframe.locator('//input[@name="vfb-7"]').fill("B")
  8  | await singleframe.locator('//input[@value="Female"]').check()
  9  | await singleframe.locator('//input[@value="TestNG"]').check()
  10 | await singleframe.locator('//input[@id="vfb-13-address"]').fill("nehru road")
  11 | await singleframe.locator('//input[@id="vfb-13-address-2"]').fill("5th street")
  12 | await singleframe.locator('//input[@id="vfb-13-zip"]').fill("chennai")
  13 | await singleframe.locator('(//span[@role="combobox"])[1]').click()
  14 | await singleframe.locator('//input[@type="search"]').fill("Albania")
  15 | await singleframe.locator('//input[@name="vfb-14"]').fill("abc@gmail.com")
  16 | await singleframe.locator('//input[@name="vfb-18"]').fill("03/04/2026")
  17 | await singleframe.locator('(//span[@role="combobox"])[2]').click()
  18 | await singleframe.locator('//input[@type="search"]').fill("01")
  19 | await singleframe.locator('(//span[@role="combobox"])[3]').click()
  20 | await singleframe.locator('//input[@type="search"]').fill("05")
  21 | await singleframe.locator('//input[@id="vfb-19"]').fill("9876543215")
  22 | await singleframe.locator('//*[@id="vfb-23"]').fill("bye bye")
  23 | await singleframe.locator('//*[@id="vfb-3"]').fill("12")
  24 | await singleframe.locator('//input[@type="submit"]').click()
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 | })
```