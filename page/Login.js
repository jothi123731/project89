export class LoginPage{
    constructor(page){
        this.page =page
        this.userName=page.locator('//input[@id="username"]')
        this.password=page.locator('//input[@id="password"]')
        this.loginbutton=page.locator('//input[@id="login"]')
    }
    async visitUrl(){
       await this.page.goto('https://adactinhotelapp.com/index.php')
    }
    async enterUsername(Uname){
        await this.userName.fill(Uname)
    }
    async enterPassword(Pword){
        await this.password.fill(Pword)
    }
    async clickLoginBtn(){
        await this.loginbutton.click()
    }
}