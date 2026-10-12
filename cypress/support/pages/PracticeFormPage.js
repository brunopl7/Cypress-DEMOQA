class PracticeFormPage {
  /**
   * Fills the personal information section of the form.
   *
   * @param {Object} info
   * @param {string} info.firstName
   * @param {string} info.lastName
   * @param {string} info.email
   * @param {string} info.gender - Label text of the gender radio to select.
   * @param {string} info.phone
   * @returns {this}
   */
  fillPersonalInfo({ firstName, lastName, email, gender, phone }) {
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#userEmail').type(email)
    cy.contains('label', gender).click()
    cy.get('#userNumber').type(phone)
    return this
  }

  /**
   * Opens the date picker and selects the given birth date.
   *
   * @param {Object} date
   * @param {string|number} date.birthDay - Day of month, without leading zero.
   * @param {string} date.birthMonth - Month name as shown in the date picker select.
   * @param {string|number} date.birthYear
   * @returns {this}
   */
  fillBirthDate({ birthDay, birthMonth, birthYear }) {
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select(birthMonth)
    cy.get('.react-datepicker__year-select').select(birthYear)
    cy.get(`.react-datepicker__day--0${birthDay}:not(.react-datepicker__day--outside-month)`).click()
    return this
  }

  /**
   * Types into the subjects autocomplete and selects the first matching option.
   *
   * @param {string} subject
   * @returns {this}
   */
  selectSubject(subject) {
    cy.get('.subjects-auto-complete__input-container').type(subject)
    cy.get('.subjects-auto-complete__option').first().click()
    return this
  }

  /**
   * Toggles the hobby checkbox at the given index.
   *
   * @param {string|number} hobbyIndex - Index used in the `#hobbies-checkbox-{index}` id.
   * @returns {this}
   */
  selectHobby(hobbyIndex) {
    return cy.get(`#hobbies-checkbox-${hobbyIndex}`).click()
  }

  /**
   * Uploads a picture file via the file input.
   *
   * @param {string} picturePath - Path to the file, relative to the fixtures folder.
   * @returns {this}
   */
  uploadPicture(picturePath) {
    return cy.get('#uploadPicture').selectFile(picturePath)
  }

  /**
   * Fills the address section, including the state/city dropdowns.
   *
   * @param {Object} location
   * @param {string} location.address
   * @param {string} location.state
   * @param {string} location.city
   * @returns {this}
   */
  fillAddress({ address, state, city }) {
    cy.get('#currentAddress').type(address)
    cy.selectFromDropdown('#state', state)
    cy.selectFromDropdown('#city', city)
    return this
  }

  /**
   * Submits the form.
   *
   * @returns {this}
   */
  submit() {
    return cy.get('#submit').click()
  }
}

export default new PracticeFormPage()
