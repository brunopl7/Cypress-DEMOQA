// Page-specific actions live in cypress/support/pages/*.
// Only generic, cross-page helpers belong here.

/**
 * Selects an option from a React-select style custom dropdown (e.g. #state, #city).
 *
 * @param {string} containerSelector - CSS selector for the dropdown container.
 * @param {string} optionText - Visible text of the option to select.
 */
Cypress.Commands.add('selectFromDropdown', (containerSelector, optionText) => {
  cy.get(containerSelector).click()
  cy.contains(`${containerSelector} div`, optionText).click()
})
