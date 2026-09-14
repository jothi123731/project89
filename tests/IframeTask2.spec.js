import {test} from '@playwright/test'

test('Iframe handling', async ({page})=>{
await page.goto('https://vinothqaacademy.com/iframe/')
const singleframe=await page.frameLocator('//iframe[@name="popuppage"]')
await page.once('dialog',async(dialog)=>{
    await dialog.accept();
})
await singleframe.locator('//button[@name="alertbox"]').click()
await page.once('dialog',async(dialog)=>{
    await dialog.dismiss()
})
await singleframe.locator('//button[@name="confirmalertbox"]').click()
await page.once('dialog',async(dialog)=>{
    await dialog.accept("Hi bro")
})
await singleframe.locator('//button[@name="promptalertbox1234"]').click()
})
