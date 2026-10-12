import homePage from '../support/pages/HomePage'
import categoryMenu from '../support/pages/CategoryMenu'
import alertsPage from '../support/pages/AlertsPage'
import modalDialogsPage from '../support/pages/ModalDialogsPage'

describe('Alerts', () => {
  beforeEach(() => {
    homePage.visit().openCard('Elements')
    categoryMenu.openGroup('Alerts, Frame & Windows').openItem('Alerts')
  })

  it('accepts the confirm box and shows the chosen option', () => {
    alertsPage.clickConfirmBox()
    alertsPage.assertResultText('You selected Ok')
  })
})

describe('Modal Dialogs', () => {
  beforeEach(() => {
    homePage.visit().openCard('Elements')
    categoryMenu.openGroup('Alerts, Frame & Windows').openItem('Modal Dialogs')
  })

  it('opens and closes the small modal', () => {
    modalDialogsPage.openSmallModal()
    modalDialogsPage.closeSmallModal()
  })

  it('opens and closes the large modal', () => {
    modalDialogsPage.openLargeModal()
    modalDialogsPage.closeLargeModal()
  })
})
