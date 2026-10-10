describe('Alerts', () => {
  it('Click button', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com/')
    cy.contains('Elements').click()
    cy.contains('Alerts, Frame & Windows', { timeout: 10000 }).click()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .router-link > .text', { timeout: 10000 }).click()
    cy.get('#confirmButton', { timeout: 10000 }).click()
    cy.contains('You selected Ok').should('exist')
  })
})
describe('Modal Dialogs', () => {  
  it('Click small modal', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com/')
    cy.contains('Elements').click()
    cy.contains('Alerts, Frame & Windows', { timeout: 10000 }).click()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-4 > .router-link > .text', { timeout: 10000 }).click()
    cy.get('#showSmallModal').click()
    cy.wait(3000)
    cy.get('#closeSmallModal').click()
  })

   it('Click large modal', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com/')
    cy.contains('Elements').click()
    cy.contains('Alerts, Frame & Windows', { timeout: 10000 }).click()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-4 > .router-link > .text', { timeout: 10000 }).click()
    cy.get('#showLargeModal').click()
    cy.wait(3000)
    cy.get('#closeLargeModal').click()
  })
})

