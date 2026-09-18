# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: IframeTask2.spec.js >> Iframe handling
- Location: tests\IframeTask2.spec.js:3:5

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
  5  | const singleframe=await page.frameLocator('//iframe[@name="popuppage"]')
  6  | await page.once('dialog',async(dialog)=>{
  7  |     await dialog.accept();
  8  | })
  9  | await singleframe.locator('//button[@name="alertbox"]').click()
  10 | await page.once('dialog',async(dialog)=>{
  11 |     await dialog.dismiss()
  12 | })
  13 | await singleframe.locator('//button[@name="confirmalertbox"]').click()
  14 | await page.once('dialog',async(dialog)=>{
  15 |     await dialog.accept("Hi bro")
  16 | })
  17 | await singleframe.locator('//button[@name="promptalertbox1234"]').click()
  18 | })
  19 | 
```