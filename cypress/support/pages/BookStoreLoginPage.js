class BookStoreLoginPage {
  openRegisterForm() {
    cy.get('#newUser').click()
    return this
  }

  fillRegisterForm({ firstName, lastName, userName }) {
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#userName').type(userName)
    return this
  }

  typePassword(password) {
    cy.get('#password').type(password, { log: false })
    return this
  }
}

export default new BookStoreLoginPage()
