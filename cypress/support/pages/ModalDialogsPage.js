class ModalDialogsPage {
  openSmallModal() {
    cy.get('#showSmallModal').click()
    cy.get('#example-modal-sizes-title-sm').should('be.visible')
    return this
  }

  closeSmallModal() {
    cy.get('#closeSmallModal').click()
    return this
  }

  openLargeModal() {
    cy.get('#showLargeModal').click()
    cy.get('#example-modal-sizes-title-lg').should('be.visible')
    return this
  }

  closeLargeModal() {
    cy.get('#closeLargeModal').click()
    return this
  }
}

export default new ModalDialogsPage()
