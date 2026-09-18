# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTablePractice.spec.js >> WebTable Handlimg
- Location: tests\WebTablePractice.spec.js:3:5

# Error details

```
Error: page.goto: SSL peer certificate or SSH remote key was not OK
Call log:
  - navigating to "https://qavbox.github.io/demo/webtable/", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('WebTable Handlimg', async ({page})=>{
> 4  |     await page.goto('https://qavbox.github.io/demo/webtable/')
     |                ^ Error: page.goto: SSL peer certificate or SSH remote key was not OK
  5  |     //row data
  6  |     const rowData=await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
  7  |     //console.log(rowData)
  8  |   // await rowData.forEach(values=>console.log(values))  //it will give without array in the console
  9  | 
  10 |    await expect(rowData).toEqual([
  11 |        'Tiger Nixon',
  12 |        'System Architect',
  13 |        'Edinburgh',
  14 |        '61',
  15 |        '2011/04/25',
  16 |        '$320,800',
  17 |     ])
  18 |     await expect(rowData).toContain('Tiger Nixon')
  19 |     //column data
  20 |     const columnData =await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
  21 |     await expect(columnData).toContain('Garrett Winters')
  22 |     //single data
  23 |     const data=await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
  24 |     await expect(data) .toEqual('San Francisco')
  25 | 
  26 | })
```