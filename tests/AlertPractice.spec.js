import {test} from '@playwright/test'

test("alert handling", async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html#google_vignette')
    await page.on('dialog', async(dialog)=>{
        await dialog.accept()
        console.log("simple alert:",dialog.message())
    })
    await page.locator('//button[@onclick="alertbox()"]').click()
   /* await page.locator('//a[text()="Alert with OK & Cancel "]').click()
    await page.once('dialog',async(dialog)=>{
        await dialog.dismiss()
        console.log("Confirmation Alert:", dialog.message())
         })
        await page.locator('//button[@onclick="confirmbox()"]').click()
        await page.locator('//a[text()="Alert with Textbox "]').click()
        await page.once('dialog',async(dialog)=>{
            await dialog.accept('Hi bro')
            console.log("Prompt Aler:", dialog.message())
        })
        await page.locator('//button[@onclick="promptbox()"]').click()*/
    })

