// Page-specific actions live in cypress/support/pages/*.
// Only generic, cross-page helpers belong here.

/**
 * Selects an option from a React-select style custom dropdown (e.g. #state, #city).
 */
Cypress.Commands.add('selectFromDropdown', (containerSelector, optionText) => {
  cy.get(containerSelector).click()
  cy.contains(`${containerSelector} div`, optionText).click()
})
