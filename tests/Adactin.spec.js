import {test} from '@playwright/test'
import { LoginPage } from '../page/Login'

test('POM', async({page})=>{
    const login=new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername('preethi898')
    await login.enterPassword('preethi@1234')
    await login.clickLoginBtn()
})