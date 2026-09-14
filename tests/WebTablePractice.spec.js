import {test,expect} from '@playwright/test'

test('WebTable Handlimg', async ({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
    //row data
    const rowData=await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    //console.log(rowData)
  // await rowData.forEach(values=>console.log(values))  //it will give without array in the console

   await expect(rowData).toEqual([
       'Tiger Nixon',
       'System Architect',
       'Edinburgh',
       '61',
       '2011/04/25',
       '$320,800',
    ])
    await expect(rowData).toContain('Tiger Nixon')
    //column data
    const columnData =await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
    await expect(columnData).toContain('Garrett Winters')
    //single data
    const data=await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
    await expect(data) .toEqual('San Francisco')

})