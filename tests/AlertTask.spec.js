import {test} from '@playwright/test';

test('Simple Alert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.once('dialog',async(dialog)=>{
    await dialog.accept()
    console.log("simple Alert:" , dialog.message())
    })
    await page.locator('//button[text()="Simple Alert"]').click()
    await page.once('dialog',async(dialog)=>{
    await dialog.dismiss()
    console.log("conformation Alert:" , dialog.message())
    })
    await page.locator('//button[@onclick="myFunctionConfirm()"]').click()
    await page.locator('//button[text()="Simple Alert"]').click()
    await page.once('dialog',async(dialog)=>{
    await dialog.accept('I am a robot')
    console.log("Prompt Alert:" , dialog.message())
    })
    await page.locator('//button[@id="promptBtn"]').click()
     /*await page.on('dialog',async(dialog)=>{
    await dialog.accept()
    console.log("simple Alert:" , dialog.message())
    })
    await page.locator('//button[text()="Simple Alert"]').click()*/

    })

