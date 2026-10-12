class AlertsPage {
  /**
   * Clicks the button that triggers the confirm box.
   *
   * @returns {this}
   */
  clickConfirmBox() {
    return cy.get('#confirmButton', { timeout: 10000 }).click()
  }

  /**
   * Asserts that the given result text is present on the page.
   *
   * @param {string} text
   */
  assertResultText(text) {
    cy.contains(text).should('exist')
  }
}

export default new AlertsPage()
