import { Locator, Page } from "@playwright/test";

export class LogInPage{
    readonly page : Page;
    readonly userNameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly logInbutton : Locator;

    constructor(page : Page){
        this.page = page;
        this.userNameTextBox = page.getByPlaceholder('Username');
        this.passwordTextBox = page.getByPlaceholder('Password');
        this.logInbutton = page.getByRole('button', { name: 'Login' });
    }

    async browserLaunch(){
       await this.page.goto('https://www.saucedemo.com/');
    }

    async login(userNameVal : string, passwordValue : string){
        await this.userNameTextBox.fill(userNameVal)
        await this.passwordTextBox.fill(passwordValue)
        await this.logInbutton.click();
    }

}