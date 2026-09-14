import {test} from '@playwright/test'

test('Iframe handling', async ({page})=>{
await page.goto('https://vinothqaacademy.com/iframe/')
const singleframe=await page.frameLocator('//iframe[@name="registeruser"]')
await singleframe.locator('//input[@id="vfb-5"]').fill("jothi")
await singleframe.locator('//input[@name="vfb-7"]').fill("B")
await singleframe.locator('//input[@value="Female"]').check()
await singleframe.locator('//input[@value="TestNG"]').check()
await singleframe.locator('//input[@id="vfb-13-address"]').fill("nehru road")
await singleframe.locator('//input[@id="vfb-13-address-2"]').fill("5th street")
await singleframe.locator('//input[@id="vfb-13-zip"]').fill("chennai")
await singleframe.locator('(//span[@role="combobox"])[1]').click()
await singleframe.locator('//input[@type="search"]').fill("Albania")
await singleframe.locator('//input[@name="vfb-14"]').fill("abc@gmail.com")
await singleframe.locator('//input[@name="vfb-18"]').fill("03/04/2026")
await singleframe.locator('(//span[@role="combobox"])[2]').click()
await singleframe.locator('//input[@type="search"]').fill("01")
await singleframe.locator('(//span[@role="combobox"])[3]').click()
await singleframe.locator('//input[@type="search"]').fill("05")
await singleframe.locator('//input[@id="vfb-19"]').fill("9876543215")
await singleframe.locator('//*[@id="vfb-23"]').fill("bye bye")
await singleframe.locator('//*[@id="vfb-3"]').fill("12")
await singleframe.locator('//input[@type="submit"]').click()










})