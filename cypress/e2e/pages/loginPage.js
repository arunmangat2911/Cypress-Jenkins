class LoginPage {

    getUsername() {
        return 'input[type="text"]'
    }

    getPassword() {
        return 'input[type="password"]'
    }

    getLoginButton() {
        return 'input[type="submit"]'
    }

    enterUsername(usernameValue) {
        cy.get(this.getUsername()).type(usernameValue)
    }

    enterPassword(passwordValue) {
        cy.get(this.getPassword()).type(passwordValue)
    }

    clickLogin() {
        cy.get(this.getLoginButton()).click()
    }
}

export default LoginPage