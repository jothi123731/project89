import {test} from '@playwright/test'

test('Iframe handling', async ({page})=>{
await page.goto('https://vinothqaacademy.com/iframe/')
const singleframe=await page.frameLocator('//iframe[@name="employeetable"]')
await singleframe.locator('//input[@id="nameInput"]').fill("jothi")
await singleframe.locator('//input[@id="roleInput"]').fill("3")
await page.once('dialog', async(dialog)=>{
    await dialog.accept()
    console.log("Simple Alert:" , dialog.message())
})
await singleframe.locator('//button[text()="Add Row"]').click()
await singleframe.locator('(//input[@type="checkbox"])[2]').check()
await singleframe.locator('//button[text()="Delete Selected Rows"]').click()
await singleframe.locator('(//input[@type="checkbox"])[3]').check()
await singleframe.locator('//button[text()="Delete Selected Rows"]').click()


})
