import Page from './page'

class LoginPage extends Page {
    get loginField () { 
        return $('#com.beint.elloapp:id/email_field') 
    }

    get passwordField () {
        return $('#com.beint.elloapp:id/password_field')
    }

    get loginButton () {
        return $('#com.beint.elloapp:id/login_button')
    }
}
export default new LoginPage()