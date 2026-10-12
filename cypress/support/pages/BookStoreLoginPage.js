class BookStoreLoginPage {
  /**
   * Opens the "New User" registration form.
   *
   * @returns {this}
   */
  openRegisterForm() {
    return cy.get('#newUser').click()
  }

  /**
   * Fills the first name, last name, and username fields of the register form.
   *
   * @param {Object} user
   * @param {string} user.firstName
   * @param {string} user.lastName
   * @param {string} user.userName
   * @returns {this}
   */
  fillRegisterForm({ firstName, lastName, userName }) {
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#userName').type(userName)
    return this
  }

  /**
   * Types the password without logging its value to the Cypress command log.
   *
   * @param {string} password
   * @returns {this}
   */
  typePassword(password) {
    return cy.get('#password').type(password, { log: false })
  }
}

export default new BookStoreLoginPage()
