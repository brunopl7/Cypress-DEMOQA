class ModalDialogsPage {
  /**
   * Opens the small modal and waits for its title to be visible.
   *
   * @returns {this}
   */
  openSmallModal() {
    cy.get('#showSmallModal').click()
    cy.get('#example-modal-sizes-title-sm').should('be.visible')
    return this
  }

  /**
   * Closes the small modal.
   *
   * @returns {this}
   */
  closeSmallModal() {
    return cy.get('#closeSmallModal').click()
  }

  /**
   * Opens the large modal and waits for its title to be visible.
   *
   * @returns {this}
   */
  openLargeModal() {
    cy.get('#showLargeModal').click()
    cy.get('#example-modal-sizes-title-lg').should('be.visible')
    return this
  }

  /**
   * Closes the large modal.
   *
   * @returns {this}
   */
  closeLargeModal() {
    return cy.get('#closeLargeModal').click()
  }
}

export default new ModalDialogsPage()
