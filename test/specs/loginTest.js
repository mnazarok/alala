import LoginPage from "../pageobjects/loginPage";

describe('Login test suit', () => {

    // before (() => {

    // })

    it('success login via username', async () => {
        await LoginPage.loginField.setValue('dron30');
        await LoginPage.passwordField.setValue('Starapp2');
        await LoginPage.loginButton.click()
    })

})