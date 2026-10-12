/**
 * Navigates to the "Alerts, Frame & Windows" section.
 *
 * Visits the configured URL, opens the "Elements" menu, and clicks
 * on the "Alerts, Frame & Windows" option.
 *
 * @returns {void}
 */
function clickOnAlertsFrameAndWindows() {
  cy.visit('');
  cy.contains('Elements').click();
  cy.contains('Alerts, Frame & Windows', { timeout: 10000 }).click();
}

describe('Alerts', () => {
  it('Click button', () => {
    clickOnAlertsFrameAndWindows()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .router-link > .text', { timeout: 10000 }).click()
    cy.get('#confirmButton', { timeout: 10000 }).click()
    cy.contains('You selected Ok').should('exist')
  })
})

describe('Modal Dialogs', () => {  
  it('Click small modal', () => {
    clickOnAlertsFrameAndWindows()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-4 > .router-link > .text', { timeout: 10000 }).click()
    cy.get('#showSmallModal').click()
    cy.wait(3000)
    cy.get('#closeSmallModal').click()
  })

  it('Click large modal', () => {
    clickOnAlertsFrameAndWindows()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-4 > .router-link > .text', { timeout: 10000 }).click()
    cy.get('#showLargeModal').click()
    cy.wait(3000)
    cy.get('#closeLargeModal').click()
  })
})