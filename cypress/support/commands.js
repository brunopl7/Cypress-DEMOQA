// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Seleciona uma opção em dropdowns customizados tipo React-select (ex: #state, #city)
Cypress.Commands.add('selectFromDropdown', (containerSelector, optionText) => {
  cy.get(containerSelector).click()
  cy.contains(`${containerSelector} div`, optionText).click()
})

// Aguarda um tempo fixo em ms (padrão: 10000)
// Obs: não pode se chamar "timeout" pois é um nome reservado pelo Cypress
Cypress.Commands.add('esperar', (ms = 10000) => {
  cy.wait(ms)
})

// Preenche o Practice Form do demoqa com os dados passados
Cypress.Commands.add('preencherPracticeForm', (dados) => {
  cy.get('#firstName').type(dados.firstName)
  cy.get('#lastName').type(dados.lastName)
  cy.get('#userEmail').type(dados.email)
  cy.contains('label', dados.gender).click()
  cy.get('#userNumber').type(dados.phone)

  cy.get('#dateOfBirthInput').click()
  cy.get('.react-datepicker__month-select').select(dados.birthMonth)
  cy.get('.react-datepicker__year-select').select(dados.birthYear)
  cy.get(`.react-datepicker__day--0${dados.birthDay}:not(.react-datepicker__day--outside-month)`).click()

  cy.get('.subjects-auto-complete__input-container').type(dados.subject)
  cy.get('.subjects-auto-complete__option').first().click()
  cy.get(`#hobbies-checkbox-${dados.hobbyIndex}`).click()
  cy.get('#uploadPicture').selectFile(dados.picturePath)
  cy.get('#currentAddress').type(dados.address)

  cy.selectFromDropdown('#state', dados.state)
  cy.selectFromDropdown('#city', dados.city)
})

//Preenche seção Register em Book Store application
Cypress.Commands.add('fillbooksregister', (dados) => {
  cy.get('#firstname').type(dados.firstName)
  cy.get('#lastname').type(dados.lastName)
  cy.get('#userName').type(dados.userName)
})