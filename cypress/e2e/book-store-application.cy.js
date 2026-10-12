import homePage from '../support/pages/HomePage'
import categoryMenu from '../support/pages/CategoryMenu'
import bookStoreLoginPage from '../support/pages/BookStoreLoginPage'

describe('Book Store Application', () => {
  it('registers a new user', () => {
    cy.fixture('book-store-user').then((user) => {
      homePage.visit().openCard('Book Store Application')
      categoryMenu.openItem('Login')

      bookStoreLoginPage.openRegisterForm().fillRegisterForm(user)

      cy.env(['PASSWORD']).then(({ PASSWORD }) => {
        bookStoreLoginPage.typePassword(PASSWORD)
      })
    })
  })
})
