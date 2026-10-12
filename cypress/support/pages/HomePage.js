class HomePage {
  visit() {
    cy.visit('/')
    return this
  }

  /**
   * Opens one of the cards on the DEMOQA home page (e.g. "Elements",
   * "Forms", "Book Store Application"). Landing on a category page this
   * way auto-expands that same group in the left sidebar menu.
   */
  openCard(cardName) {
    cy.contains(cardName).click()
    return this
  }
}

export default new HomePage()
