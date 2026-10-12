describe('template spec', () => {
  it('Fill form data', () => {
    cy.visit('')
    cy.contains('Elements').click()
    cy.contains('Forms').click()
    cy.contains('Practice Form').click()
    cy.preencherPracticeForm({
      firstName: 'Bruno',
      lastName: 'CypressTest',
      email: 'bruno@teste.com',
      gender: 'Male',
      phone: '123456789',
      birthMonth: 'July',
      birthYear: '1996',
      birthDay: '13',
      subject: 'Computer Science',
      hobbyIndex: 1,
      picturePath: 'cypress/fixtures/pexels-photo-16978385-2187148859.jpg',
      address: 'Any street, Number 123, somewhere',
      state: 'NCR',
      city: 'Delhi',
    })

    cy.get('#submit').click()
  })
})