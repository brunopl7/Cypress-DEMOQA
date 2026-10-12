class AlertsPage {
  clickConfirmBox() {
    cy.get('#confirmButton', { timeout: 10000 }).click()
    return this
  }

  assertResultText(text) {
    cy.contains(text).should('exist')
  }
}

export default new AlertsPage()
