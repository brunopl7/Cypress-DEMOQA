class HomePage {
  /**
   * Navigates to the DEMOQA home page.
   *
   * @returns {this}
   */
  visit() {
    return cy.visit('/')
  }

  /**
   * Opens one of the cards on the DEMOQA home page (e.g. "Elements",
   * "Forms", "Book Store Application"). Landing on a category page this
   * way auto-expands that same group in the left sidebar menu.
   *
   * @param {string} cardName - Visible card title.
   * @returns {this}
   */
  openCard(cardName) {
    return cy.contains(cardName).click()
  }
}

export default new HomePage()
