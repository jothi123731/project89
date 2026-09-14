import {test} from '@playwright/test'

test('Singleiframe', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const sigleFrame=await page.frameLocator('//iframe[@id="singleframe"]')
    await sigleFrame.locator('//input[@type="text"]').fill("Hi Bro")
    await page.locator('//a[@href="#Multiple"]').click()
   const MultipleFrames= await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
   const single=await MultipleFrames.frameLocator('//iframe[@src="SingleFrame.html"]')
   await single.locator('//input[@type="text"]').fill("Hi jothi")
})

