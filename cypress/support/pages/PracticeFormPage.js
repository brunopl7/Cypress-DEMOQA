class PracticeFormPage {
  fillPersonalInfo({ firstName, lastName, email, gender, phone }) {
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#userEmail').type(email)
    cy.contains('label', gender).click()
    cy.get('#userNumber').type(phone)
    return this
  }

  fillBirthDate({ birthDay, birthMonth, birthYear }) {
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select(birthMonth)
    cy.get('.react-datepicker__year-select').select(birthYear)
    cy.get(`.react-datepicker__day--0${birthDay}:not(.react-datepicker__day--outside-month)`).click()
    return this
  }

  selectSubject(subject) {
    cy.get('.subjects-auto-complete__input-container').type(subject)
    cy.get('.subjects-auto-complete__option').first().click()
    return this
  }

  selectHobby(hobbyIndex) {
    cy.get(`#hobbies-checkbox-${hobbyIndex}`).click()
    return this
  }

  uploadPicture(picturePath) {
    cy.get('#uploadPicture').selectFile(picturePath)
    return this
  }

  fillAddress({ address, state, city }) {
    cy.get('#currentAddress').type(address)
    cy.selectFromDropdown('#state', state)
    cy.selectFromDropdown('#city', city)
    return this
  }

  submit() {
    cy.get('#submit').click()
    return this
  }
}

export default new PracticeFormPage()
