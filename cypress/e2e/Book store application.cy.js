describe('Book store applications', () => {  
  it('Register', () => {
    cy.visit('')
    cy.contains('Book Store Application').click()
    cy.get(':nth-child(6) > .element-list > .menu-list > #item-0 > .router-link > .text', { timeout: 10000 }).click()
    cy.get('#newUser').click()
    cy.fillbooksregister({
      firstName: 'Bruno',
      lastName: 'Registering',
      userName: 'Bruno@books'
    })
    cy.env(['PASSWORD']).then(({ PASSWORD }) => {
      cy.get('#password').type(PASSWORD, { log: false })
    })
  })
})



